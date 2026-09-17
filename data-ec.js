/* Curriculum data — Republic of Liberia, SENIOR HIGH ECONOMICS, Grades 10–12.
   Derived from the "Economics 10-12" senior high curriculum guide (35 pp.),
   6 periods per grade, 18 units.

   Every unit carries a `study[]` block list — the course text of the guide,
   rendered verbatim on the Study Notes page, with a comment noting the guide
   pages covered. `**bold**` marks the key terms; table cells take no markup
   because the renderer escapes them.

   Uses the SS_CURRICULUM unit shape so GEN_SS renders it unchanged, plus the
   optional `worked` field (calculations with steps) which GEN_SS renders only
   when present:
     grade · period · sem · icon · title · subtitle · outcomes[] · objectives[]
     · note · focus[] · terms[]{t,d,x} · facts[]{q,a} · tf[]{s,a,why}
     · sort{title,groups[]{name,items}}
     · mapwork{title,caption,items[]{p,f}}
     · casestudy{title,text,questions[]{q,a}}
     · project{title,brief,steps[],criteria[]}
     · worked[]{q,steps[],a} · apply[]{q,a}
     · activities[] · materials[] · assessment[]

   Per the project rule the digital research links listed in the source guide
   (investopedia.com, ukessays.com, dictionary.com, economist.com,
   khanacademy.com, economic.ejournal.org, guardian) are omitted: the pack must
   stay fully offline. Textbooks named in the guide are retained as text.
*/

var EC_CURRICULUM = [

/* ================================ GRADE 10 ================================ */
{
  grade:10, period:"I", sem:"One", icon:"📘",
  title:"Nature and Scope of Economics",
  subtitle:"Definitions and origin, the fundamental concepts, the basic economic problems and economic systems",
  outcomes:[
    "Learners are able to explain the meaning and fundamental concepts of Economics",
    "Learners are able to distinguish the branches of Economics and analyse the basic economic problems"
  ],
  objectives:[
    "Define and explain the origin of Economics",
    "List and discuss the fundamental concepts in Economics",
    "Relate the basic concepts of Economics to day-to-day experiences",
    "Identify and discuss the basic problems in Economics",
    "Categorise and explain the branches and types of economic systems"
  ],
  note:"<b>Economics</b> is the study of how people allocate <b>scarce</b> resources that have alternative uses to satisfy unlimited wants. Scarcity forces <b>choice</b>, and every choice has an <b>opportunity cost</b> — the value of the next best alternative given up. Every society must answer three basic questions: <b>what to produce, how to produce</b> and <b>for whom to produce</b>.",
  study:[
    /* ---- course text: Semester One, Period I — Nature and Scope of Economics (guide pp. 2-3) ---- */
    {k:"h3", t:"Definitions and Origin of Economics"},
    {k:"p", t:"**Economics** is the study of how people, firms and governments allocate **scarce resources** that have alternative uses, so as to satisfy **unlimited wants**. The word derives from the Greek 'oikos' (house) and 'nomos' (management) — the management of a household, widened to the management of a nation. The study grew through three definitions: the **wealth definition** of Adam Smith, who saw economics as the science of the nature and causes of the wealth of nations; the **welfare definition** of Alfred Marshall, which tied economics to material well-being; and the modern **scarcity definition** of Lionel Robbins — the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses. Relate each idea to day-to-day experience: the household budget, the market stall, the government budget."},
    {k:"rule"},
    {k:"h3", t:"Fundamental Concepts of Economics"},
    {k:"p", t:"**Scarcity** is the limited supply of resources against unlimited wants — the central fact of the subject. Because we cannot have everything, scarcity forces **choice**: to choose one thing is to give up another. A **scale of preference** is a list of wants arranged in order of importance, from the most pressing to the least; sensible people and sensible governments work down their scale. The **opportunity cost** of any choice is the value of the next best alternative forgone — the true cost of school fees may be the new roof the family gives up. A **want** is something desired but not essential to survival (a radio); a **need** is essential (food, water, shelter)."},
    {k:"rule"},
    {k:"h3", t:"The Basic Economic Problems"},
    {k:"p", t:"Every society, rich or poor, must answer three basic questions. **What to produce** — and in what quantities, since resources spent on rice cannot also grow rubber. **How to produce** — by hand or by machine, with many workers or with capital, on large farms or small ones. **For whom to produce** — how the output is shared out among the people, which is the problem of distribution. Scarcity lies behind all three."},
    {k:"rule"},
    {k:"h3", t:"Branches of Economics"},
    {k:"p", t:"**Microeconomics** studies the individual units of the economy — a household, a firm, a single market for rice or transport — and how their prices and outputs are set. **Macroeconomics** studies the economy as a whole: national income, total employment, the general price level, economic growth and the balance of payments. The two branches meet whenever the small decisions add up to the big totals."},
    {k:"rule"},
    {k:"h3", t:"Types of Economic Systems"},
    {k:"p", t:"An **economic system** is the way a society answers the three basic questions. Under **capitalism (the free enterprise or market economy)** resources are privately owned and the market, through price, decides what, how and for whom to produce — it rewards enterprise but can widen inequality. Under **socialism** the state owns the resources and directs production toward social goals — it spreads welfare but can grow slow and bureaucratic. The **mixed economy** blends the two: private firms alongside a public sector that provides roads, schools and health care. Debate the advantages and disadvantages of each, and note that **Liberia practises the mixed economy** — private markets operate beside state enterprises and regulation."},
    {k:"h3", t:"The Three Definitions Compared"},
    {k:"p", t:"Every WASSCE question on the nature of the subject is answered from these three definitions, so learn each with its author, its year, its central idea and its weakness. **Adam Smith (1776)** in *An Inquiry into the Nature and Causes of the Wealth of Nations* defined economics as an enquiry into the nature and causes of the wealth of nations — a **wealth definition**. Its strength is that it made the subject systematic and put production and the division of labour at the centre; its weakness is that it stressed material wealth alone, ignored services (the teacher, the nurse, the driver), and said nothing about the scarcity that forces the choice. **Alfred Marshall (1890)** in *Principles of Economics* shifted the subject from wealth to man: economics is a study of mankind in the ordinary business of life, examining that part of individual and social action most closely connected with the attainment and use of the material requisites of well-being — a **welfare definition**. Its strength is the human centre and the admission that welfare, not money, is the end; its weakness is that 'welfare' cannot be measured, that it still leans on material requisites, and that it cannot say whether brewing or Bible-printing adds more to welfare. **Lionel Robbins (1932)** in *An Essay on the Nature and Significance of Economic Science* gave the definition used today: economics is the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses — a **scarcity definition**. Its three conditions are that **wants (ends) are unlimited**, that **resources (means) are scarce**, and that **the scarce means have alternative uses**. Its strength is that it is neutral between ends, covers services as well as goods, and applies to a poor family and to a rich nation alike; its weakness is that it treats all wants as equal, ignores the question of growth, and says nothing about the welfare economics it replaced."},
    {k:"table", head:["Definition","Author and year","Central idea","Chief weakness"], rows:[
     ["Wealth","Adam Smith, 1776","The causes of the wealth of nations; production and the division of labour","Ignores services; silent on scarcity"],
     ["Welfare","Alfred Marshall, 1890","Mankind in the ordinary business of life; material well-being","Welfare cannot be measured; still material"],
     ["Scarcity","Lionel Robbins, 1932","Unlimited ends, scarce means, alternative uses","Neutral on ends; silent on growth"]]},
    {k:"rule"},
    {k:"h3", t:"Economics as a Science and as a Social Science"},
    {k:"p", t:"Economics is a **science** because it builds a body of organised knowledge, observes facts, frames hypotheses, tests them against evidence and states general principles — the law of demand, the law of diminishing returns, the law of comparative cost. It is a **social science**, not a natural science, because its material is human behaviour, which is neither uniform nor laboratory-controllable: people change their minds, and no two economies are alike. From this follow the limits of economics — its laws are **statements of tendency**, true 'other things being equal' (the Latin *ceteris paribus*), and never predictions as exact as gravity. Distinguish also **positive economics**, which states what IS and can be tested against the facts ('a rise in the price of rice reduces the quantity of rice bought'), from **normative economics**, which states what OUGHT to be and rests on a value judgement ('the government should subsidise rice'). In the paper, a statement containing *should*, *ought* or *desirable* is normative; one that can be proved or disproved by the figures is positive."},
    {k:"rule"},
    {k:"h3", t:"Scarcity, Choice and Opportunity Cost — Worked"},
    {k:"p", t:"The chain runs in one direction and every part of it must appear in the answer: **unlimited wants** meet **scarce resources**, so **choice** is forced, a **scale of preference** ranks the wants, and every choice carries an **opportunity cost** — the value of the next best alternative forgone. Note the exact wording: opportunity cost is the next best alternative, not every alternative, and it is the value of that alternative, not of the thing chosen."},
    {k:"num", items:[
      "**A scale of preference.** A household has L$10 000 and wants: school fees L$6 000, rice L$3 000, medicine L$2 000, new cloth L$4 000, a radio L$2 500. Ranked: fees, rice, medicine, cloth, radio. Buying the first three spends L$11 000 — more than the household has — so medicine must wait, and the family buys fees and rice for L$9 000.",
      "**The opportunity cost of that choice.** Having bought the fees and the rice, the next best alternative the household gives up is the medicine, so the opportunity cost is **L$2 000 of medicine**, not the cloth and the radio as well.",
      "**A producer's choice.** A farmer's one hectare can yield rice worth L$60 000 or cassava worth L$45 000. Growing rice gives an opportunity cost of **L$45 000** and a net gain of **L$15 000**; a rational farmer grows rice.",
      "**A government's choice.** L$200 million will build either a 40-bed hospital or 12 km of feeder road. Whichever is chosen, the other is the opportunity cost — and the answer earns its marks only by comparing the benefit each would bring against that cost.",
      "**A student's choice.** Four hours can be spent revising Economics or working for L$800. Revising costs **L$800 of forgone earnings**; the mark goes to the candidate who says so and then weighs it against the expected gain in grade."]},
    {k:"p", t:"**Distinguish a want from a need.** A **need** is essential to survival — food, water, shelter, clothing, basic health care. A **want** is desired but not essential — a radio, a motorbike, a second phone. The distinction is not fixed: clean water is a need, bottled imported water is a want; a phone is a want in 1990 and close to a need in a cashless market today. Say this in the answer, because examiners reward the candidate who sees that the line moves with circumstance."},
    {k:"rule"},
    {k:"h3", t:"The Basic Economic Problems — How Each System Answers Them"},
    {k:"p", t:"The three questions are set in every paper and each system answers them differently. Memorise the table, then be ready to apply it to a named country."},
    {k:"table", head:["Question","What it asks","Capitalism","Socialism","Mixed economy"], rows:[
     ["What to produce","Which goods, and how many","Whatever consumers will pay for; price and profit decide","The state plan decides, from social priorities","Both: the market for most goods, the state for roads, schools and health"],
     ["How to produce","Which technique and which factor mix","Whichever is cheapest and most profitable — usually capital-intensive where labour is dear","As the plan directs, usually labour-intensive where jobs are the goal","Both: private firms choose their technique; the state sets labour and safety rules"],
     ["For whom to produce","How the output is shared","By purchasing power — who can pay","By the state's allocation, aiming at equality","By income from work and property, corrected by taxes, subsidies and free services"]]},
    {k:"p", t:"Two further questions are sometimes added: **provision for the future** (how much of today's output is invested rather than consumed, which decides tomorrow's growth) and **the efficient use of resources** (whether idle land, idle labour and idle machines are brought into production). A full answer on economic systems names all three basic questions and both of these."},
    {k:"rule"},
    {k:"h3", t:"Branches of Economics — the Test to Apply"},
    {k:"p", t:"The test is the **scale of the unit being studied**, not the topic's importance. If the sentence is about one household, one firm, one worker, one market or one price, it is **microeconomics**; if it is about the whole economy — totals, averages and general levels — it is **macroeconomics**."},
    {k:"table", head:["Microeconomics","Macroeconomics"], rows:[
     ["The price of rice in the Waterside market","The general price level and the inflation rate"],
     ["The output of one rice mill","National output (GDP) and the rate of economic growth"],
     ["A worker's wage in one firm","Total employment and the national unemployment rate"],
     ["One firm's cost of production","Total investment and total saving in the economy"],
     ["One household's spending","Total consumption and national income"],
     ["The demand for one good","Aggregate demand and aggregate supply"],
     ["One country's exports of rubber","The balance of payments of the whole country"]]},
    {k:"p", t:"The two branches meet and each needs the other: a fall in the general price level (macro) changes the price of rice and so the quantity a household buys (micro), and the sum of millions of micro decisions is what the macro totals record. Note the **fallacy of composition** — what is true of one unit is not necessarily true of all. One farmer who plants more rice gains; if every farmer plants more rice the price collapses and all lose. One family that saves more grows richer; if every family saves more, spending falls, income falls and total saving may not rise at all. Name this fallacy whenever a question moves from one unit to the whole economy."},
    {k:"rule"},
    {k:"h3", t:"Economic Systems in Full"},
    {k:"p", t:"**Capitalism (free enterprise, the market economy)** rests on five features: **private ownership** of the means of production; **free enterprise**, so anyone may start a business; the **profit motive** as the driving force; the **price mechanism**, in which price is the signal that tells producers what to make and consumers what to buy; and **competition** among sellers. Its advantages are efficiency, because unprofitable firms die; variety, because producers court the consumer; incentive, because the reward follows the effort; and freedom of choice. Its disadvantages are inequality, since rewards follow ownership; **market failure** — the market will not supply street lights, roads or defence, which all use and none will pay for; monopoly, where the strong crush the weak and then raise the price; instability of boom and slump; and the neglect of merit goods such as schools, which the poor cannot buy."},
    {k:"p", t:"**Socialism (a planned or command economy)** rests on **state ownership** of the means of production, **central planning** in which a planning board sets the targets, production for **social welfare** rather than profit, and the absence of competition. Its advantages are equality, the absence of wasteful competition and advertising, planned stability without boom and slump, and the supply of essential goods whether or not they pay. Its disadvantages are the loss of incentive where reward does not follow effort, bureaucracy and delay, shortage and queueing where the planners misjudge demand, absence of consumer choice, and the concentration of economic and political power in the same hands."},
    {k:"p", t:"The **mixed economy** takes the market for what it does well and the state for what the market cannot do: private firms produce the consumer goods while the state provides roads, ports, power, schools, hospitals and defence, regulates prices and standards, and taxes and spends to correct inequality. **Liberia practises the mixed economy** — private traders, farmers and companies operate freely beside state enterprises and state regulation. Be ready to give Liberian instances of each side: private commerce and the concessions on one side, the public schools, the public hospitals and the statutory corporations on the other."},
    {k:"rule"},
    {k:"h3", t:"The Liberian Economy as a Mixed Economy"},
    {k:"bul", items:[
      "**The private side:** the family shop and the market table, the okada and the kekeh, the family farm growing rice and cassava, the trader importing rice and cloth, and the large foreign-owned concessions in rubber, iron ore and forestry.",
      "**The public side:** the public schools and the public hospitals, the roads and the ports, the water and power utilities, and the statutory corporations created by Act of the Legislature to run essential services.",
      "**The state's instruments:** the national budget and its taxes, the licensing of business, the setting of standards and prices for essential goods, and the borrowing and grants that finance development.",
      "**The pressure on the mix:** where the state cannot fund a service, private providers fill the gap — private schools, private clinics, private generators and private water tankers — which raises the question the paper likes to ask of who then serves the poor."]},
    {k:"rule"},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Defining opportunity cost as the **money spent** rather than as the **next best alternative forgone** — the single most common loss of marks in this unit.",
      "Listing **every** alternative forgone. Only the next best one is the opportunity cost.",
      "Confusing scarcity with **poverty**. Scarcity applies to a billionaire's time as much as to a poor family's income; it is the gap between unlimited wants and limited means.",
      "Writing **socialism** for **social science**, or **capital** for **capitalism** — capital is a factor of production; capitalism is the system built on private ownership of it.",
      "Calling economics a **natural** science. It is a social science; its laws hold other things being equal, and human behaviour does not repeat exactly.",
      "Classifying a question about **national inflation** as microeconomics. If the unit of study is the whole economy, the branch is macro."]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Define economics** — the Robbins scarcity definition is expected, with its three conditions stated: unlimited ends, scarce means, alternative uses",
      "**Compare the three definitions** — author, year, central idea and one weakness each; a table earns the marks faster than prose",
      "**Distinguish want from need, scarcity from poverty, positive from normative** — each is a two-mark distinction with an example required",
      "**Explain opportunity cost with a calculation** — state the alternatives, name the next best one forgone, give its value; a bare definition without the worked case scores half",
      "**State and explain the basic economic problems** — what, how and for whom, then say how a named system answers each",
      "**Compare capitalism, socialism and the mixed economy** — features, advantages, disadvantages, and the country that practises each; Liberia is the mixed economy",
      "**Distinguish microeconomics from macroeconomics** with two examples of each, and name the fallacy of composition where the question moves from one unit to all"
    ]}

  ],

  focus:[
    "Definitions and origin of Economics",
    "Fundamental concepts: scarcity, choice, scale of preference, opportunity cost, wants and needs",
    "The basic economic problems: what, how and for whom to produce",
    "Branches of Economics: microeconomics and macroeconomics",
    "Economic systems: capitalism, socialism and the mixed economy",
    "The system practised in Liberia"
  ],
  terms:[
    {t:"economics", d:"the study of how scarce resources are allocated to satisfy unlimited wants", x:"Economics explains why we must choose."},
    {t:"scarcity", d:"the limited nature of resources against unlimited wants", x:"Scarcity is the central economic problem."},
    {t:"choice", d:"selecting one option when all cannot be had", x:"Scarcity forces every household to make a choice."},
    {t:"opportunity cost", d:"the value of the next best alternative forgone", x:"The opportunity cost of school fees may be a new roof."},
    {t:"scale of preference", d:"a list of wants arranged in order of importance", x:"A scale of preference guides sensible spending."},
    {t:"want", d:"something desired but not essential for survival", x:"A radio is a want, not a need."},
    {t:"need", d:"something essential for survival", x:"Food and shelter are needs."},
    {t:"microeconomics", d:"the study of individual units such as households and firms", x:"Microeconomics studies the price of rice."},
    {t:"macroeconomics", d:"the study of the economy as a whole", x:"Macroeconomics studies national income and inflation."},
    {t:"capitalism", d:"a system where resources are privately owned and directed by the market", x:"Under capitalism the profit motive guides production."},
    {t:"socialism", d:"a system where the state owns and directs the means of production", x:"Under socialism the state plans output."},
    {t:"mixed economy", d:"a system combining private enterprise with state participation", x:"Liberia operates a mixed economy."},
    {t:"resources", d:"the inputs used to produce goods and services", x:"Land, labour and capital are resources."},
    {t:"goods", d:"tangible items that satisfy wants", x:"Rice and cloth are goods."},
    {t:"services", d:"intangible activities that satisfy wants", x:"Teaching and transport are services."},
    {t:"free goods", d:"goods available without limit and at no cost", x:"Air is usually a free good."},
    {t:"economic goods", d:"goods that are scarce and command a price", x:"Economic goods must be paid for."},
    {t:"rational choice", d:"choosing the option giving the greatest satisfaction from limited means", x:"Rational choice compares benefit against cost."}
  ],
  facts:[
    {q:"Define Economics.", a:"The social science that studies how individuals and societies allocate scarce resources, which have alternative uses, in order to satisfy unlimited human wants."},
    {q:"Why is scarcity described as the central problem of Economics?", a:"Because resources are limited while human wants are unlimited, every society must decide how to use what it has; without scarcity there would be no need to choose and no subject of Economics."},
    {q:"Explain opportunity cost with a Liberian example.", a:"It is the value of the next best alternative given up. If a farmer uses land for cassava instead of rice, the opportunity cost is the rice harvest he forgoes."},
    {q:"State the three basic economic problems.", a:"What to produce, how to produce, and for whom to produce."},
    {q:"Distinguish between wants and needs.", a:"Needs are essential for survival, such as food, water, shelter and clothing; wants are desirable but not essential, such as a television or a motorcycle."},
    {q:"Distinguish microeconomics from macroeconomics.", a:"Microeconomics studies individual units — a household, a firm, a single market and its price. Macroeconomics studies the economy as a whole — national income, employment, inflation and growth."},
    {q:"Name the three economic systems and state who owns the resources in each.", a:"Capitalism, where resources are privately owned; socialism, where the state owns them; and the mixed economy, where private individuals and the state both own and operate resources."},
    {q:"State two advantages and two disadvantages of capitalism.", a:"Advantages: competition encourages efficiency and innovation, and consumers have wide choice. Disadvantages: it produces great inequality of income, and unprofitable but socially necessary services may not be provided."},
    {q:"Which economic system does Liberia practise, and give evidence.", a:"A mixed economy. Private firms operate in trade, mining and agriculture, while government owns and runs public schools, hospitals, roads and some corporations, and regulates the private sector."},
    {q:"What is a scale of preference and why is it useful?", a:"A list of wants arranged in order of importance. Because income is limited, it allows the most pressing wants to be satisfied first and makes the opportunity cost of each choice visible."}
  ],
  tf:[
    {s:"Scarcity means there is a shortage of money only.", a:"false", why:"Scarcity refers to all resources — land, labour, capital and time — being limited against unlimited wants, not merely money."},
    {s:"Every choice involves an opportunity cost.", a:"true", why:"Choosing one option always means giving up the next best alternative."},
    {s:"Air is normally regarded as an economic good.", a:"false", why:"Air is usually a free good because it is available without limit and commands no price."},
    {s:"Macroeconomics studies the price of a single commodity.", a:"false", why:"That is microeconomics; macroeconomics studies the whole economy."},
    {s:"Liberia operates a mixed economy.", a:"true", why:"Both private enterprise and government participate in production and ownership."},
    {s:"Under socialism the means of production are privately owned.", a:"false", why:"Under socialism the state owns and directs the means of production."},
    {s:"Needs must be satisfied before wants if income is limited.", a:"true", why:"A rational scale of preference places essentials for survival first."}
  ],
  sort:{ title:"Sort these economic ideas", groups:[
    {name:"Needs", items:["food","water","shelter","basic clothing"]},
    {name:"Wants", items:["television","motorcycle","jewellery","holiday"]},
    {name:"Features of capitalism", items:["private ownership","profit motive","price mechanism","competition"]},
    {name:"Features of socialism", items:["state ownership","central planning","equal distribution"]},
    {name:"Branches of Economics", items:["microeconomics","macroeconomics"]}
  ]},
  mapwork:{ title:"The three economic systems compared", caption:"Complete the table by explaining each feature of the system named.", items:[
    {p:"Capitalism — ownership", f:"Resources and firms are owned privately by individuals and companies"},
    {p:"Capitalism — decision making", f:"The price mechanism and profit motive decide what is produced"},
    {p:"Socialism — ownership", f:"The state owns the means of production on behalf of the people"},
    {p:"Socialism — decision making", f:"A central plan decides output, prices and distribution"},
    {p:"Mixed economy — ownership", f:"Private individuals and the state both own productive resources"},
    {p:"Mixed economy — decision making", f:"The market allocates most goods while government provides public services and regulates"},
    {p:"Liberia's position", f:"A mixed economy: private trade and mining alongside public schools, clinics and corporations"}
  ]},
  casestudy:{ title:"Musu's scale of preference",
    text:"Musu sells cold water and fried plantain at Red Light market and earns about 4 000 Liberian dollars in a good week. This week she has 4 000 dollars and four pressing wants: 1 500 for her daughter's school fees, 2 500 to restock plantain and oil, 2 000 to repair the leaking roof, and 3 000 for a second-hand refrigerator that would let her sell more cold water. She cannot afford them all. After thinking it over she pays the school fees and restocks her goods, using all 4 000 dollars. She puts the roof and the refrigerator on a list for the following month.",
    questions:[
      {q:"What economic problem is Musu facing?", a:"Scarcity: her wants total 9 000 dollars but her income is only 4 000, so she cannot satisfy them all and must choose."},
      {q:"What is the opportunity cost of her decision?", a:"The next best alternative forgone. Having chosen fees and restocking, she gives up the roof repair, which was the next item on her list."},
      {q:"Draw up Musu's scale of preference in the order her actions suggest.", a:"1. School fees, 2. Restocking goods, 3. Roof repair, 4. Refrigerator."},
      {q:"Was buying the refrigerator instead of restocking a rational choice? Explain.", a:"No. Restocking keeps her business earning immediately, while the refrigerator costs more than her whole income and would leave her with nothing to sell, so it gives less satisfaction now."},
      {q:"Which branch of Economics studies decisions like Musu's?", a:"Microeconomics, because it studies the behaviour of an individual household or firm rather than the whole economy."}
    ]},
  project:{ title:"Household scale of preference survey",
    brief:"Investigate how a real household allocates its scarce income.",
    steps:[
      "With permission, interview the head of a household about their main sources of income.",
      "List the household's wants for one month and rank them in order of importance.",
      "Record which wants were satisfied and which were postponed.",
      "For two decisions, state clearly what the opportunity cost was.",
      "Write a one-page report and present your findings to the class."
    ],
    criteria:["A genuine interview conducted respectfully","Wants correctly ranked as a scale of preference","Opportunity cost correctly identified in two cases","Clear written report","Confident presentation"]},
  worked:[
    {q:"A student has L$500. A textbook costs L$400 and a school bag L$350. He buys the textbook. What is his opportunity cost?", steps:["Next best alternative forgone","He gave up the school bag"], a:"The school bag (value L$350)"},
    {q:"A farmer can grow rice worth L$60 000 or cassava worth L$45 000 on one plot. He grows rice. State the opportunity cost.", steps:["Alternative forgone = cassava","Value = L$45 000"], a:"L$45 000 of cassava"},
    {q:"From the same choice, calculate the net gain from growing rice.", steps:["Gain = 60 000","Opportunity cost = 45 000","60 000 \u2212 45 000"], a:"L$15 000 net gain"},
    {q:"A household earns L$8 000 and lists wants of L$3 000, L$4 000 and L$5 000. What is the total unmet want?", steps:["Total wants = 3 000 + 4 000 + 5 000 = 12 000","12 000 \u2212 8 000"], a:"L$4 000 of wants cannot be met"},
    {q:"A trader spends 6 hours selling and earns L$1 800. What is her earning per hour?", steps:["1 800 \u00f7 6"], a:"L$300 per hour"},
    {q:"If she attends a 2-hour meeting instead of selling, what is the opportunity cost in earnings?", steps:["2 hours \u00d7 L$300"], a:"L$600 of forgone earnings"}
  ],
  apply:[
    {q:"A government must choose between building a hospital and building a road with the same funds. Explain the choice in economic terms.", a:"Resources are scarce so both cannot be built. Whichever is chosen, the opportunity cost is the other project. The decision should compare the benefit each brings to the community against that cost."},
    {q:"Why can a very rich person still face the problem of scarcity?", a:"Scarcity applies to time and to resources generally, not only money. Even a rich person cannot be in two places at once or buy everything available, so choices with opportunity costs remain."},
    {q:"A learner says Economics is only about money. Correct this view.", a:"Economics studies the allocation of all scarce resources — land, labour, capital, time and skill — and how people choose between competing uses. Money is only a measuring device used in that study."},
    {q:"Suggest one advantage Liberia gains from operating a mixed economy rather than pure capitalism.", a:"Government can provide schools, clinics and roads that the private sector would find unprofitable, so essential services reach poor and rural citizens who could not pay market prices."},
    {q:"How does the concept of opportunity cost help a student decide whether to leave school and trade?", a:"The immediate income from trading must be weighed against the higher lifetime earnings and opportunities the completed education would bring; the forgone qualification is the real opportunity cost of leaving."}
  ],
  activities:[
    "Give the origin and definitions of Economics",
    "Explore the basic concepts: scarcity, choice, scale of preference, needs, wants and opportunity cost",
    "Research the basic problems in Economics and the types of economic systems",
    "Debate the advantages and disadvantages of the different economic systems",
    "Discuss which economic system is practised in Liberia and give evidence"
  ],
  materials:[
    "Primary text: Stanlake's Economics by S. J. Grant, 8th edition",
    "Essential Economics for Senior Secondary Schools (Cole Esan Ande), 5th edition, 2017",
    "Comprehensive Economics for Senior Secondary School (Johnson U. Anyaele, 1997)",
    "Charts of the economic systems",
    "Newspapers and local market price lists"
  ],
  assessment:["Presentation, individual and group","Written assignment","Quiz","Class debate","Written test"]
},
{
  grade:10, period:"II", sem:"One", icon:"📈",
  title:"The Concepts of Demand and Supply",
  subtitle:"The laws, schedules and curves, equilibrium price, shifts and movements, and price controls",
  outcomes:[
    "Learners are able to analyse the behaviour of consumers on the demand side and producers on the supply side, and make rational decisions relating to consumption and production"
  ],
  objectives:[
    "Explain the meaning of demand and supply",
    "Draw the demand and supply schedules",
    "Derive the market demand and supply curves and establish the equilibrium price",
    "Identify and explain the factors affecting demand and supply",
    "Demonstrate the movement along and shift of demand and supply curves",
    "List and discuss the types of demand and supply",
    "Explain exceptional demand curves, price ceiling and price floor"
  ],
  note:"The <b>law of demand</b>: other things being equal, the higher the price the lower the quantity demanded — the demand curve slopes <b>downward</b>. The <b>law of supply</b>: the higher the price the greater the quantity supplied — the supply curve slopes <b>upward</b>. <b>Equilibrium</b> occurs where the two curves intersect and quantity demanded equals quantity supplied. Above it there is a <b>surplus</b>; below it a <b>shortage</b>.",
  study:[
    /* ---- course text: Semester One, Period II — The Concepts of Demand and Supply (guide pp. 4-5) ---- */
    {k:"h3", t:"The Laws of Demand and Supply"},
    {k:"p", t:"**Demand** is the quantity of a commodity buyers are willing and able to purchase at a given price over a given period. The **law of demand** says that, other things being equal, the higher the price, the lower the quantity demanded — so the demand curve slopes **downward** to the right. **Supply** is the quantity producers are willing and able to offer for sale at a given price. The **law of supply** says the higher the price, the greater the quantity supplied — so the supply curve slopes **upward**. Apply both laws to your own consumption of rice, transport and talk-time, and to what a producer plants when prices rise."},
    {k:"rule"},
    {k:"h3", t:"Demand and Supply Schedules"},
    {k:"p", t:"A **demand schedule** is a table of prices against the quantities demanded at each; a **supply schedule** sets prices against the quantities supplied. Plotting the two on one diagram gives the demand curve, the supply curve, and their crossing point. Draw hypothetical schedules for a good sold in your community, read the curves at each price level, and watch how quantity demanded falls as quantity supplied rises with price."},
    {k:"rule"},
    {k:"h3", t:"Kinds of Demand and Supply"},
    {k:"bul", items:[
      "**Composite demand** — a good demanded for several uses (land for farming, housing or roads)",
      "**Joint (complementary) demand** — goods demanded together, like petrol and cars, or rice and palm oil",
      "**Competitive demand** — goods that substitute for one another, like rice and cassava",
      "**Derived demand** — a factor demanded for what it produces, such as the demand for farm labour derived from the demand for rice",
      "**Joint supply** — goods produced together, like beef and hides",
      "**Composite and competitive supply** — supply from several sources, or goods competing to be supplied to the same market"]},
    {k:"rule"},
    {k:"h3", t:"Movements and Shifts of the Curves"},
    {k:"p", t:"A **movement** along a demand or supply curve is caused by a change in the good's own price alone. A **shift** of the whole curve is caused by other factors: for demand — income, taste, population, the prices of substitutes and complements, expectations; for supply — cost of production, technology, taxes and subsidies, weather, and the number of producers. A rightward shift means more is demanded (or supplied) at every price; a leftward shift means less."},
    {k:"rule"},
    {k:"h3", t:"Equilibrium Price and Quantity"},
    {k:"p", t:"**Equilibrium** is reached where the demand and supply curves intersect: the **equilibrium (market) price** at which quantity demanded exactly equals quantity supplied — the **market clearing price**, because the market clears with neither surplus nor shortage left over. At a price **above** equilibrium, quantity supplied exceeds quantity demanded and a **surplus** pushes the price down. At a price **below** equilibrium, quantity demanded exceeds quantity supplied and a **shortage** pushes the price up. Derive the equilibrium of your own schedule and observe how a shift of either curve changes price and quantity."},
    {k:"rule"},
    {k:"h3", t:"The Exceptional Demand Curve; Price Ceiling and Price Floor"},
    {k:"p", t:"Some demand curves slope upward, against the law: goods of **snob appeal (Veblen goods)** bought because they are expensive, **Giffen goods** on which the poor spend more as the price rises, and shares bought in the expectation of further rises — discuss the reasons for this abnormal behaviour. A **price ceiling** is a legal maximum price set below equilibrium, as with rent control: it helps buyers but creates shortages and queues. A **price floor** is a legal minimum set above equilibrium, as with a farm support price: it helps producers but creates a surplus. Demonstrate the effects of both in the market."},
    {k:"h3", t:"A Demand and Supply Schedule Worked End to End"},
    {k:"p", t:"The paper regularly gives a schedule and asks for the equilibrium, the surplus at one price and the shortage at another. Set it out exactly as below — the table itself earns marks before a word is written."},
    {k:"table", head:["Price (L$)","Quantity demanded (bags)","Quantity supplied (bags)","The market's condition"], rows:[
     ["2 000","100","500","Surplus of 400 bags — sellers cut the price"],
     ["1 750","150","450","Surplus of 300 bags — the price still falls"],
     ["1 500","200","400","Surplus of 200 bags — the price still falls"],
     ["1 250","250","350","Surplus of 100 bags — the price still falls"],
     ["1 000","300","300","EQUILIBRIUM — quantity demanded equals quantity supplied"],
     ["750","350","250","Shortage of 100 bags — buyers bid the price up"],
     ["500","400","200","Shortage of 200 bags — the price still rises"]]},
    {k:"p", t:"Read the answer off the table: the **equilibrium price is L$1 000** and the **equilibrium quantity is 300 bags**. At L$1 500 there is a **surplus (excess supply) of 200 bags** — 400 offered against 200 wanted — and sellers with unsold stock cut their price, so the market moves back down to L$1 000. At L$750 there is a **shortage (excess demand) of 100 bags** — 350 wanted against 250 offered — and buyers bid against one another, so the price rises to L$1 000. Equilibrium is **stable** because the forces on either side push back toward it; that is why it is called the **market clearing price** — the market clears, with nothing left unsold and no buyer left unsatisfied."},
    {k:"p", t:"Plot the same figures and the two curves cross at (300, 1 000). Draw the demand curve **downward** from left to right and the supply curve **upward**; label both axes with the quantity and the price, not merely 'x' and 'y'; and mark the crossing point E with its price and quantity written beside it. An unlabelled diagram earns no marks however correct it is."},
    {k:"rule"},
    {k:"h3", t:"Why the Curves Slope as They Do"},
    {k:"p", t:"The **law of demand** holds for three reasons and the answer is stronger for naming all three. The **income effect**: when the price of rice falls, the consumer's money income buys more, so more rice is bought — the real income has risen without a kobo more in the pocket. The **substitution effect**: when rice falls against cassava, buyers switch from cassava to rice. And **diminishing marginal utility**: each further bag gives less satisfaction, so a further bag will be bought only at a lower price. The **law of supply** slopes upward because a higher price makes it worth producing more — it covers the rising cost of bringing the harder land into use and of paying overtime — and because a higher price draws new producers into the market."},
    {k:"rule"},
    {k:"h3", t:"Movement Against Shift — the Distinction that Carries the Marks"},
    {k:"p", t:"A **movement along** the curve is caused **only** by a change in the good's **own price**: price L$1 000 to L$750 moves the buyer down the same demand curve from 300 to 350 bags. A **shift of** the whole curve is caused by **anything else**, and at the same price a different quantity is now bought or offered. Confusing the two is the most common error in this unit — the candidate who writes 'the demand curve shifts when the price of rice rises' loses the mark at once."},
    {k:"table", head:["Shifts the DEMAND curve","Direction","Shifts the SUPPLY curve","Direction"], rows:[
     ["Income rises (a normal good)","Right — more at every price","Cost of production falls (cheaper fuel, fertiliser)","Right — more at every price"],
     ["Income falls, or the good is inferior and income rises","Left","Cost of production rises (dearer fuel, a new tax)","Left"],
     ["The price of a substitute rises (cassava dearer, so rice wanted)","Right","Technology improves","Right"],
     ["The price of a complement rises (petrol dearer, so cars less wanted)","Left","A subsidy is granted","Right"],
     ["Population grows","Right","A tax is imposed","Left"],
     ["Taste or fashion turns to the good","Right","The weather ruins the crop, or disease strikes","Left"],
     ["Buyers expect the price to rise later, so buy now","Right","The number of producers rises","Right"]]},
    {k:"rule"},
    {k:"h3", t:"The Four Effects of a Shift on Price and Quantity"},
    {k:"p", t:"Every question on a change in equilibrium is one of these four cases. Learn them as a set, draw the shift, and read the new crossing point."},
    {k:"num", items:[
      "**Demand increases** (curve moves right): price **rises** and quantity **rises**. The rice harvest fails in a neighbouring country and Liberian buyers turn home — demand for local rice rises, so both its price and the quantity sold rise.",
      "**Demand decreases** (curve moves left): price **falls** and quantity **falls**. A rumour against a brand, or a fall in income, or a cheaper substitute — the curve moves left and both price and quantity fall.",
      "**Supply increases** (curve moves right): price **falls** and quantity **rises**. Better seed and a good rainy season push the supply of rice right, so more is sold at a lower price — the harvest glut that ruins the farmer who has nowhere to store.",
      "**Supply decreases** (curve moves left): price **rises** and quantity **falls**. Flooded roads, a strike at the port or a new tax push supply left, so less is sold at a higher price.",
      "**Both shift at once:** the effect on **quantity** is certain, the effect on **price** is not. If demand and supply both increase, quantity certainly rises but price may rise, fall or stay, depending on which shift is the larger. Say this — it is a mark on its own."]},
    {k:"rule"},
    {k:"h3", t:"The Exceptional Demand Curves Explained"},
    {k:"bul", items:[
      "**Giffen goods** — an inferior staple on which the very poor spend most of their income. When its price rises, the loss of real income is so great that the family gives up the dearer relish and buys **more** of the staple, so the demand curve slopes **upward**. The classic case is the Irish potato; in West Africa the argument is made for a staple such as cassava or gari where it takes most of a poor household's budget.",
      "**Veblen (snob) goods** — goods bought **because** they are dear, as a display of wealth: imported luxury cars, designer cloth, jewellery. A price cut destroys the snob appeal and demand falls, so the curve slopes upward over that range.",
      "**Speculative demand** — shares, land and foreign currency bought in the expectation that the price will rise further. A rise in price attracts more buyers rather than fewer, so over that range demand rises with price.",
      "**Emergency and ignorance** — in a crisis (war, an epidemic, a shortage rumour) buyers purchase more at a higher price out of fear, and a buyer who does not know the price has risen buys as before. Both are exceptions of circumstance rather than of theory; say which."]},
    {k:"rule"},
    {k:"h3", t:"Price Control — What Each Ceiling and Floor Does"},
    {k:"p", t:"A **price ceiling (maximum price)** is fixed by law **below** the equilibrium price to protect the consumer — rent control, a controlled price for rice or fuel, a controlled fare. Its consequences follow in order and each is worth a mark: a **shortage**, because quantity demanded now exceeds quantity supplied; **queues and waiting**, as buyers compete for what little there is; **rationing**, formal by coupon or informal by favouritism; a **black market**, where the good is sold illegally above the legal price; **hoarding**, as sellers withhold stock to sell later at the higher illegal price; and **a fall in quality**, since the seller who cannot raise the price cuts corners instead. The remedy is not the ceiling alone but an increase in supply."},
    {k:"p", t:"A **price floor (minimum price)** is fixed **above** the equilibrium price to protect the producer — a farm support price, a minimum wage. Its consequences: a **surplus**, because quantity supplied now exceeds quantity demanded; **unsold stock** that the government must buy and store, or that perishes; **cost to the treasury** of buying and storing the surplus; **a fall in demand** as buyers turn to substitutes; and, for a minimum wage, **unemployment** as employers hire fewer workers. In each case the answer must state which side of equilibrium the control sits on, then give the consequences in order — a control drawn on the wrong side of the equilibrium scores nothing."},
    {k:"rule"},
    {k:"h3", t:"Consumer's and Producer's Surplus"},
    {k:"p", t:"On the diagram, **consumer's surplus** is the area **below the demand curve and above the price line** — the difference between what buyers would have paid and what they pay. If a buyer would pay L$2 000 for a bag of rice and pays L$1 000, the surplus is L$1 000. **Producer's surplus** is the area **above the supply curve and below the price line** — the difference between the price received and the least the seller would have accepted. A tax on the good shrinks both areas; a subsidy enlarges them; the two together measure the welfare the market creates, which is why economists use them to judge any interference with price."},
    {k:"rule"},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Writing **'demand' for 'quantity demanded'**. Demand is the whole relationship (the whole curve); quantity demanded is one amount at one price. A change in price changes the quantity demanded; only a change in something else changes demand.",
      "Saying a **change in the good's own price shifts the curve**. It does not — it moves along the curve.",
      "Drawing the **supply curve downward**. Supply slopes upward; demand slopes downward.",
      "Calling the equilibrium price the **highest** or the **lowest** price. It is the price at which the market clears; prices above and below it are both possible, and both set forces moving back toward it.",
      "Placing a **price ceiling above** equilibrium. A ceiling above equilibrium has no effect at all; only a ceiling below it bites, and only a floor above it bites.",
      "Forgetting **the period** in the definition. Demand is the quantity willing **and able** to be bought at a price **over a given period** — leave out 'able' or the period and the definition is half."]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Define demand and supply** — willing **and able**, at a given price, over a given period; the three phrases are the three marks",
      "**State the laws** and give the reasons — income effect, substitution effect, diminishing marginal utility for demand; rising cost and new entrants for supply",
      "**Read or complete a schedule** and state the equilibrium price and quantity, the size of any surplus or shortage, and the direction in which the price will move",
      "**Draw and label a diagram** — both curves, both axes, the equilibrium point marked E with its price and quantity; an unlabelled diagram scores nothing",
      "**Distinguish a movement from a shift**, then list the factors that shift demand and those that shift supply — five of each is a full answer",
      "**Explain the exceptional demand curves** — Giffen, Veblen, speculation, emergency — with a reason for each, not the name alone",
      "**Analyse price control** — say whether the ceiling or the floor, place it correctly against equilibrium, then give four consequences in order and one remedy"
    ]}

  ],

  focus:[
    "Definitions and the laws of demand and supply",
    "Demand and supply schedules",
    "Kinds of demand and supply",
    "Graphs of demand and supply curves",
    "Determination of equilibrium price and quantity",
    "Market clearing price, shortages and surpluses",
    "Factors affecting demand and supply; movement versus shift",
    "Exceptional demand curves; price ceiling and price floor"
  ],
  terms:[
    {t:"demand", d:"the quantity of a good consumers are willing and able to buy at a given price", x:"Demand requires both willingness and ability to pay."},
    {t:"supply", d:"the quantity of a good producers are willing to offer at a given price", x:"Supply rises as price rises."},
    {t:"law of demand", d:"as price rises quantity demanded falls, other things equal", x:"The law of demand gives a downward sloping curve."},
    {t:"law of supply", d:"as price rises quantity supplied rises, other things equal", x:"The law of supply gives an upward sloping curve."},
    {t:"demand schedule", d:"a table showing quantity demanded at each price", x:"The demand schedule is plotted as a curve."},
    {t:"equilibrium price", d:"the price at which quantity demanded equals quantity supplied", x:"At the equilibrium price the market clears."},
    {t:"market clearing price", d:"the price leaving no shortage or surplus", x:"The market clearing price is the equilibrium price."},
    {t:"shortage", d:"excess demand when price is below equilibrium", x:"A shortage pushes the price up."},
    {t:"surplus", d:"excess supply when price is above equilibrium", x:"A surplus pushes the price down."},
    {t:"movement along a curve", d:"a change in quantity caused only by a change in the good's own price", x:"A price fall causes a movement along the demand curve."},
    {t:"shift of a curve", d:"a change caused by a factor other than the good's own price", x:"A rise in income shifts the demand curve right."},
    {t:"substitute", d:"a good that can be used in place of another", x:"Cassava is a substitute for rice."},
    {t:"complement", d:"a good used together with another", x:"Petrol is a complement to motorcycles."},
    {t:"joint demand", d:"demand for two goods used together", x:"Joint demand links cars and fuel."},
    {t:"composite demand", d:"demand for a good with several different uses", x:"Palm oil is in composite demand."},
    {t:"derived demand", d:"demand for a good wanted for producing something else", x:"Demand for labour is derived demand."},
    {t:"price ceiling", d:"a legal maximum price set below equilibrium", x:"A price ceiling causes a shortage."},
    {t:"price floor", d:"a legal minimum price set above equilibrium", x:"A price floor causes a surplus."},
    {t:"Giffen good", d:"an inferior good whose demand rises as its price rises", x:"A Giffen good gives an exceptional demand curve."},
    {t:"normal good", d:"a good whose demand rises as income rises", x:"Meat is a normal good for most households."},
    {t:"inferior good", d:"a good whose demand falls as income rises", x:"Cheap cassava may be an inferior good."}
  ],
  facts:[
    {q:"State the law of demand and the shape of the curve it produces.", a:"Other things being equal, the higher the price of a commodity the lower the quantity demanded, and the lower the price the higher the quantity demanded. This gives a demand curve sloping downward from left to right."},
    {q:"State the law of supply and the shape of the curve it produces.", a:"Other things being equal, the higher the price the greater the quantity producers will supply. This gives a supply curve sloping upward from left to right."},
    {q:"How is equilibrium price determined?", a:"At the point where the demand and supply curves intersect, so that the quantity consumers wish to buy exactly equals the quantity producers wish to sell and the market clears."},
    {q:"State five factors that shift the demand curve.", a:"A change in consumer income; the price of substitutes and complements; changes in taste and fashion; population size and structure; and expectations of future prices."},
    {q:"State five factors that shift the supply curve.", a:"The cost of inputs; the state of technology; the number of producers in the market; taxes and subsidies; and weather or natural conditions, especially in agriculture."},
    {q:"Distinguish a movement along a demand curve from a shift of the curve.", a:"A movement along the curve is caused only by a change in the good's own price and is called a change in quantity demanded. A shift is caused by any other factor, such as income or taste, and is called a change in demand."},
    {q:"Name four kinds of demand.", a:"Joint or complementary demand, competitive demand for substitutes, composite demand where a good has several uses, and derived demand where a good is wanted for producing something else."},
    {q:"What happens when a price is set below the equilibrium price?", a:"Quantity demanded exceeds quantity supplied, producing a shortage. Queues, rationing and black markets tend to develop until the price is allowed to rise."},
    {q:"Define price ceiling and price floor and give the purpose of each.", a:"A price ceiling is a legal maximum set below equilibrium, intended to keep essentials affordable for the poor. A price floor is a legal minimum set above equilibrium, intended to protect producers' incomes, as with a guaranteed farm price."},
    {q:"Give two examples of an exceptional demand curve.", a:"Giffen goods, where a price rise increases demand among very poor consumers who can then afford nothing better; and goods of ostentation such as jewellery, where a higher price increases the prestige and so the demand."}
  ],
  tf:[
    {s:"A rise in the price of a good normally reduces the quantity demanded.", a:"true", why:"This is the law of demand, giving a downward sloping curve."},
    {s:"A change in consumer income causes a movement along the demand curve.", a:"false", why:"Only a change in the good's own price causes movement along the curve; income causes a shift."},
    {s:"At equilibrium there is neither shortage nor surplus.", a:"true", why:"Quantity demanded exactly equals quantity supplied, so the market clears."},
    {s:"A price ceiling set below equilibrium creates a surplus.", a:"false", why:"It creates a shortage, because demand exceeds supply at the lower legal price."},
    {s:"Petrol and motorcycles are in joint demand.", a:"true", why:"They are complements used together, so demand for one affects demand for the other."},
    {s:"Demand means simply wanting a good.", a:"false", why:"Effective demand requires both the willingness and the ability to pay."},
    {s:"Improved technology usually shifts the supply curve to the right.", a:"true", why:"Lower production costs allow more to be supplied at every price."}
  ],
  sort:{ title:"Sort these influences", groups:[
    {name:"Shift demand curve", items:["change in income","price of substitutes","change in taste","population growth"]},
    {name:"Shift supply curve", items:["cost of inputs","technology","taxes and subsidies","weather"]},
    {name:"Kinds of demand", items:["joint demand","competitive demand","composite demand","derived demand"]},
    {name:"Effects of a price ceiling", items:["shortage","queues","rationing","black market"]}
  ]},
  mapwork:{ title:"Reading the demand and supply diagram", caption:"Complete the table by explaining what each labelled feature shows.", items:[
    {p:"Vertical axis", f:"Price of the commodity, usually in Liberian dollars"},
    {p:"Horizontal axis", f:"Quantity demanded and supplied per period of time"},
    {p:"Downward sloping curve", f:"The demand curve: more is bought as price falls"},
    {p:"Upward sloping curve", f:"The supply curve: more is offered as price rises"},
    {p:"Point of intersection", f:"Equilibrium: the market clearing price and quantity"},
    {p:"Area above equilibrium price", f:"Excess supply, a surplus that pushes price down"},
    {p:"Area below equilibrium price", f:"Excess demand, a shortage that pushes price up"},
    {p:"Curve moving bodily to the right", f:"An increase in demand or supply caused by a non-price factor"}
  ]},
  casestudy:{ title:"The price of rice at Duala market",
    text:"In August, a 25 kg bag of imported rice sold at Duala market for 3 000 Liberian dollars, and traders cleared their stock each day. In September heavy rains damaged the road from the port, and only half the usual number of bags reached the market. Traders raised the price to 4 200 dollars. Some customers switched to cassava and gari, and a few began buying smaller quantities. In October the road was repaired, three new wholesalers entered the trade, and supply rose above the August level. The price fell to 2 800 dollars and some traders were left with unsold bags at the end of the week.",
    questions:[
      {q:"What happened to the supply curve in September, and why?", a:"It shifted to the left, because the damaged road cut the quantity reaching the market at every price. This was a non-price factor, so the whole curve moved."},
      {q:"Explain why the price rose to 4 200 dollars.", a:"With supply reduced, at the old price of 3 000 quantity demanded exceeded quantity supplied, creating a shortage. Competition among buyers bid the price up until the market cleared again."},
      {q:"Customers switched to cassava and gari. What does this show about those goods?", a:"They are substitutes for rice. A rise in the price of rice increases demand for its substitutes."},
      {q:"Why were traders left with unsold bags in October?", a:"Supply had shifted right beyond the previous level, so at the prevailing price there was excess supply — a surplus — and not all the stock could be sold."},
      {q:"If government had fixed a maximum price of 2 500 dollars in September, predict the outcome.", a:"A price ceiling below equilibrium would have deepened the shortage: traders would supply even less, queues and rationing would appear, and rice would likely be sold secretly at higher black market prices."}
    ]},
  project:{ title:"Market price survey",
    brief:"Track the price of one staple commodity and explain the changes you observe.",
    steps:[
      "Choose one commodity sold in your local market, such as rice, palm oil or pepper.",
      "Record its price on the same day each week for four weeks, using the same unit of measure.",
      "Ask two traders each week why the price has changed.",
      "Plot the prices on a line graph.",
      "Explain each change using demand and supply, stating whether a curve moved or a movement occurred along it."
    ],
    criteria:["Same commodity and unit used throughout","Four weekly readings genuinely collected","Traders interviewed","Accurate line graph","Correct use of shift and movement in the explanation"]},
  worked:[
    {q:"At L$40 demand is 120 units and supply 60. At L$60 demand is 80 and supply 80. State the equilibrium price and quantity.", steps:["Equilibrium where Qd = Qs","At L$60, 80 = 80"], a:"Price L$60, quantity 80 units"},
    {q:"At L$40 in the same market, calculate the shortage.", steps:["Shortage = Qd \u2212 Qs","120 \u2212 60"], a:"Shortage of 60 units"},
    {q:"At L$80 demand is 50 and supply 110. Calculate the surplus.", steps:["Surplus = Qs \u2212 Qd","110 \u2212 50"], a:"Surplus of 60 units"},
    {q:"A trader sells 80 bags at L$60 each. Calculate total revenue.", steps:["TR = price \u00d7 quantity","60 \u00d7 80"], a:"L$4 800"},
    {q:"Price falls from L$60 to L$48. Calculate the percentage change in price.", steps:["Change = 48 \u2212 60 = \u221212","(\u221212 \u00f7 60) \u00d7 100"], a:"A 20% fall"},
    {q:"Quantity demanded rises from 80 to 100 units. Calculate the percentage change.", steps:["Change = 100 \u2212 80 = 20","(20 \u00f7 80) \u00d7 100"], a:"A 25% rise"},
    {q:"Market demand is the sum of three consumers demanding 15, 22 and 18 units. Find market demand.", steps:["Add individual demands","15 + 22 + 18"], a:"55 units"}
  ],
  apply:[
    {q:"Explain why the price of tomatoes falls sharply during the harvest season.", a:"Harvest greatly increases the quantity supplied at every price, shifting the supply curve to the right. With demand unchanged, the new equilibrium occurs at a lower price."},
    {q:"A new bridge cuts transport time from a farming county to Monrovia. Predict the effect on the price of vegetables in Monrovia.", a:"Lower transport costs increase supply, shifting the supply curve right, so the equilibrium price of vegetables in Monrovia falls and the quantity traded rises."},
    {q:"Government sets a minimum price for cocoa above the market level to help farmers. State one benefit and one problem.", a:"Benefit: farmers receive a higher and more certain income. Problem: at the higher price a surplus arises which government or a marketing board must buy and store, at public expense."},
    {q:"During Ramadan the demand for certain foods rises. Explain the effect on price using the correct terms.", a:"Taste and seasonal need are non-price factors, so the demand curve shifts right. At the old price a shortage appears, and price rises to a new higher equilibrium."},
    {q:"Why do traders sometimes hoard goods when they expect prices to rise?", a:"Expectation of a higher future price reduces present supply as traders withhold stock, shifting the supply curve left and raising the current price — which brings forward the very rise they expected."}
  ],
  activities:[
    "Discuss the laws of demand and supply and apply them to consumption and production",
    "Group work analysing demand and supply by factors and types",
    "Derive hypothetical demand and supply schedules to determine equilibrium price and quantity",
    "Plot demand and supply curves and identify shortages and surpluses",
    "Discuss exceptional demand curves, price ceilings and price floors",
    "Conduct a local market price survey"
  ],
  materials:[
    "Primary text: Stanlake's Economics by S. J. Grant, 8th edition",
    "Essential Economics for Senior Secondary Schools (Cole Esan Ande), 5th edition, 2017",
    "Comprehensive Economics for Senior Secondary School (Johnson U. Anyaele, 1997)",
    "Graph paper, rulers and calculators",
    "Local market price data"
  ],
  assessment:["Presentation, individual and group","Written assignment","Quiz","Graph plotting exercise","Written test"]
},
{
  grade:10, period:"III", sem:"One", icon:"🏭",
  title:"The Factors of Production",
  subtitle:"Production and its types, the four factors and their rewards, the production possibility curve and division of labour",
  outcomes:[
    "Learners are able to describe production and its types and the role of each factor of production, and examine the impact of technological change on production and economic growth"
  ],
  objectives:[
    "Define production and its types",
    "Describe the factors of production and their rewards",
    "Derive the production possibility curve",
    "Explain the relationship between technological change and economic growth",
    "Discuss division of labour, specialisation and the law of diminishing returns"
  ],
  note:"<b>Production</b> is the creation of goods and services to satisfy human wants. The four factors of production and their rewards are: <b>land → rent, labour → wages, capital → interest, entrepreneurship → profit</b>. The <b>production possibility curve</b> shows the maximum combinations of two goods an economy can produce using all its resources efficiently; points inside show waste, points outside are unattainable.",
  study:[
    /* ---- course text: Semester One, Period III — The Factors of Production (guide pp. 6-7) ---- */
    {k:"h3", t:"Production and its Types"},
    {k:"p", t:"**Production** is the creation of goods and services to satisfy human wants — it is not only making things but getting them to the people who need them. **Primary production** extracts from nature (farming, fishing, mining, forestry); **secondary production** manufactures and builds (milling rice, weaving cloth); **tertiary production** provides services (trade, transport, banking, teaching). Production may be **direct**, for one's own use, or **indirect**, for exchange through the market."},
    {k:"rule"},
    {k:"h3", t:"The Factors of Production and their Rewards"},
    {k:"table", head:["Factor","What it covers","Reward"], rows:[
     ["Land","All natural resources: soil, minerals, forests, rivers, the site itself","Rent"],
     ["Labour","Human effort, physical and mental, applied to production","Wages / salary"],
     ["Capital","Man-made aids to production: tools, machines, buildings, stock","Interest"],
     ["Entrepreneurship","The organiser who combines the other factors, innovates and bears the risk","Profit"],
     ["Technology","The knowledge and techniques applied to production","Raises the return to every factor"]]},
    {k:"p", t:"Each factor is important and each earns its corresponding **remuneration**: land earns **rent**, labour earns **wages or salary**, capital earns **interest** and the entrepreneur earns **profit** — or bears the loss."},
    {k:"rule"},
    {k:"h3", t:"The Production Possibility Curve"},
    {k:"p", t:"The **production possibility curve (frontier)** shows the maximum combinations of two goods an economy can produce when all its resources are fully and efficiently used — cassava against rice, say, or consumer goods against capital goods. A point **on** the curve is **full employment** of resources; a point **inside** the curve shows **underutilisation** — resources wasted or idle; a point **outside** the curve is **unattainable** with present resources, though economic growth or better technology can push the whole curve outward. Derive the curve of a hypothetical firm producing two goods and mark the attainable region, the unattainable region, full employment and underutilisation."},
    {k:"rule"},
    {k:"h3", t:"Division of Labour, Specialization and Diminishing Returns"},
    {k:"p", t:"**Division of labour** breaks production into separate tasks, each done by a different worker; **specialization** is the concentration of a worker, firm or region on what it does best. Both raise skill and output — but a worker who repeats one task may grow bored, and specialized economies become dependent on the market for everything else. The **law of diminishing returns** states that as more and more units of a variable factor (labour) are added to a fixed factor (land), the extra output from each additional unit eventually falls."},
    {k:"rule"},
    {k:"h3", t:"Technology and Economic Growth"},
    {k:"p", t:"**Technological change** — better tools, better seed, better methods — shifts the production possibility curve outward: more is produced from the same resources. There is therefore a direct relationship between technological change and **economic growth**, for growth is the sustained increase in an economy's output over time."},
    {k:"h3", t:"The Factors in Full — Characteristics and Efficiency"},
    {k:"p", t:"**Land** is a free gift of nature: it is not produced by human effort, it is fixed in supply, it is immobile, its fertility and situation differ from plot to plot, and it earns **rent**. Land means more than soil — it includes the minerals beneath (the iron ore of Nimba and Bong, the gold and diamonds), the forests, the rivers and the fishing waters, and the site on which a building stands. **Labour** is human effort, physical and mental, applied to production; it is perishable (an hour not worked is lost for ever), it is mobile between jobs but less so between places, and it earns **wages or salary**. The **efficiency of labour** is what a worker produces per unit of time, and it is raised by education and training, good health and nutrition, fair pay, good tools, sound management, and the incentive of a secure job. **Capital** is every man-made aid to production — tools, machines, buildings, roads, and the stock of unfinished goods; it is produced by saving and investment, it wears out (depreciation), and it earns **interest**. Distinguish **fixed capital** (machines and buildings, used again and again) from **circulating capital** (raw materials and fuel, used up in one round of production), and **social capital** or overhead (roads, ports, power and schools, which private business needs but will not itself build). **The entrepreneur** combines the other three, takes the decisions, bears the risk of loss and earns **profit** — the residual that remains when rent, wages and interest have been paid, and which may be negative."},
    {k:"rule"},
    {k:"h3", t:"The Production Possibility Curve — a Worked Schedule"},
    {k:"p", t:"The curve is drawn from a schedule of the maximum combinations two goods can reach when all resources are fully and efficiently employed. Take an economy producing rice and cassava:"},
    {k:"table", head:["Combination","Rice (thousand bags)","Cassava (thousand tonnes)","What the point means"], rows:[
     ["A","0","500","All resources in cassava"],
     ["B","100","475","Some resources moved to rice"],
     ["C","200","425","More moved; the sacrifice grows"],
     ["D","300","350","The land best suited to cassava is now in rice"],
     ["E","400","225","Only poor cassava land is left"],
     ["F","500","0","All resources in rice"]]},
    {k:"p", t:"Plotted, these points give a curve **bowed outward** from the origin. Read from it: the **opportunity cost** of moving from B to C is **25 thousand tonnes of cassava** for 100 thousand more bags of rice; from D to E it is **125 thousand tonnes** for the same 100 thousand bags. The rising sacrifice is the **law of increasing opportunity cost**, and it happens because resources are **not equally suited** to both goods — the swamp land grows rice superbly and cassava badly, so the more rice is forced onto it the greater the cassava lost. Mark three positions on the diagram and name each: a point **on** the curve is **full and efficient employment**; a point **inside** it (say 200 rice and 300 cassava) is **underutilisation** — idle land, idle labour, machines standing; a point **outside** it (say 450 rice and 450 cassava) is **unattainable** with present resources and present technology. **Economic growth** — more resources, better technology, more capital — pushes the whole curve outward, and only then does the unattainable become attainable."},
    {k:"rule"},
    {k:"h3", t:"Division of Labour and Specialization"},
    {k:"p", t:"**Division of labour** splits a task into stages, each done by a different worker; **specialization** concentrates a worker, a firm, a region or a country on what it does best. Adam Smith's pin factory is the classic case: one man working alone makes perhaps twenty pins a day, but ten men dividing drawing, straightening, cutting, pointing, grinding, heading and packaging make thousands between them. The **advantages**: each worker gains skill by repetition; no time is lost moving from task to task; tools can be specialised and machines used; the worker can be matched to the job he does best; and output per head rises, so cost per unit falls. The **disadvantages**: the work grows monotonous and the worker's skill narrow; he becomes **dependent** on others for everything he consumes, so a strike or a breakdown anywhere stops him; he loses the pride of making a whole thing; mobility between jobs falls because his skill is narrow; and where the market is small, division of labour cannot be carried far — **the division of labour is limited by the extent of the market**. Specialization between countries rests on the same logic and brings the same risk: a country that grows only rubber or cocoa is at the mercy of a world price it cannot control, which is exactly the Liberian and West African experience."},
    {k:"rule"},
    {k:"h3", t:"The Law of Diminishing Returns — Worked"},
    {k:"p", t:"The law states that as more units of a **variable** factor are added to a **fixed** factor, total output rises, but after a point the **extra** output from each additional unit falls. It holds only in the **short run**, when at least one input cannot be changed, and only when the technique does not change. Work it on one hectare of rice land with labour as the variable factor:"},
    {k:"table", head:["Workers","Total product (bags)","Marginal product","Average product","Stage"], rows:[
     ["1","10","10","10.0","Increasing returns"],
     ["2","25","15","12.5","Increasing returns"],
     ["3","45","20","15.0","Increasing returns — MP at its highest"],
     ["4","60","15","15.0","Diminishing returns begin"],
     ["5","70","10","14.0","Diminishing returns"],
     ["6","75","5","12.5","Diminishing returns"],
     ["7","75","0","10.7","Total product at its maximum"],
     ["8","70","-5","8.8","Negative returns — the extra worker is in the way"]]},
    {k:"p", t:"Compute **marginal product** as the change in total product and **average product** as total product divided by the number of workers, then read the three stages: **increasing returns** while MP rises, **diminishing returns** from the point where MP begins to fall (here the fourth worker), and **negative returns** when MP is negative (here the eighth worker, who gets under the others' feet). Total product is at its maximum exactly where **MP = 0**. The practical lesson for a Liberian farm is the one the paper asks for: beyond a point, adding hands to the same hectare adds less and less, so the answer to low output is more land, better tools and better seed — not more people on the same plot."},
    {k:"rule"},
    {k:"h3", t:"Technology, Capital Formation and Growth"},
    {k:"p", t:"**Technological change** — improved seed, fertiliser, mechanisation, better methods, better organisation — allows more output from the same resources and so shifts the production possibility curve outward. Its relation to **economic growth** is direct: growth is the sustained increase in an economy's output over time, and it comes from more resources, more capital, better technology and better organisation. **Capital formation** is the process by which it happens, in three stages: **saving** (income not consumed), **mobilisation** (the saving gathered by banks, cooperatives, insurance companies and the capital market), and **investment** (the saving spent on machines, buildings and infrastructure). Break any one of the three and growth stops — a country may save and never invest, or invest borrowed money and never save, and in both cases the curve fails to move."},
    {k:"rule"},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Writing **interest** as the reward of the entrepreneur. The entrepreneur earns **profit**; capital earns interest. This single confusion costs marks in almost every paper.",
      "Treating **land** as soil only. Land includes minerals, forests, water and the site itself.",
      "Confusing **capital** with **money**. Money is not a factor of production; the machines and stock it buys are.",
      "Stating diminishing returns without the conditions — it needs a **fixed** factor, a **short run** and an **unchanged technique**. Omit them and the law is not stated.",
      "Placing a point **outside** the PPC and calling it efficient. Points outside are unattainable; only points on the curve are efficient.",
      "Saying the PPC is bowed because resources are **equally** suited to both goods. It is bowed because they are **unequally** suited — that is what makes opportunity cost increase."]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**List the factors of production and their rewards** — four factors, four rewards, no mixing; a table is the fastest full mark",
      "**State the characteristics of each factor** — two or three each, with land's fixity and immobility and the entrepreneur's risk-bearing the ones most often asked",
      "**Draw the PPC** from a given schedule and mark a point of full employment, one of underutilisation and one that is unattainable; explain the outward bow by increasing opportunity cost",
      "**State and illustrate the law of diminishing returns** — complete the table, compute MP and AP, and identify the stage each worker falls in",
      "**Explain division of labour** — advantages and disadvantages, and the limit set by the extent of the market",
      "**Relate technology to economic growth** — the outward shift of the PPC, and the three stages of capital formation: saving, mobilisation, investment",
      "**Classify production** — primary, secondary, tertiary — and give a Liberian example of each: farming and mining, milling and building, trade, transport and banking"
    ]}

  ],

  focus:[
    "Definition and types of production: primary, secondary and tertiary",
    "The factors of production: land, labour, capital, entrepreneurship and technology",
    "Rewards to the factors of production",
    "The production possibility curve or frontier",
    "Technological change and economic growth",
    "Division of labour and specialisation",
    "The law of diminishing returns"
  ],
  terms:[
    {t:"production", d:"the creation of goods and services to satisfy human wants", x:"Production includes both goods and services."},
    {t:"primary production", d:"extracting raw materials from nature", x:"Farming and mining are primary production."},
    {t:"secondary production", d:"processing raw materials into finished goods", x:"A soap factory is secondary production."},
    {t:"tertiary production", d:"providing services rather than goods", x:"Teaching and banking are tertiary production."},
    {t:"land", d:"all natural resources used in production", x:"Land includes soil, minerals and rivers."},
    {t:"labour", d:"human physical and mental effort used in production", x:"Labour is rewarded with wages."},
    {t:"capital", d:"man-made assets used to produce other goods", x:"Machinery and tools are capital."},
    {t:"entrepreneurship", d:"organising the other factors and bearing risk", x:"Entrepreneurship is rewarded with profit."},
    {t:"rent", d:"the reward paid for the use of land", x:"Rent is the return to land."},
    {t:"wages", d:"the reward paid to labour", x:"Wages may be paid daily or monthly."},
    {t:"interest", d:"the reward paid for the use of capital", x:"Interest is the price of borrowed capital."},
    {t:"profit", d:"the reward to the entrepreneur for risk taking", x:"Profit is what remains after all costs."},
    {t:"production possibility curve", d:"a curve showing maximum output combinations of two goods", x:"The production possibility curve shows scarcity and choice."},
    {t:"division of labour", d:"splitting production into separate tasks done by different workers", x:"Division of labour raises output."},
    {t:"specialisation", d:"concentrating on the task one does best", x:"Specialisation increases skill and speed."},
    {t:"law of diminishing returns", d:"beyond a point, adding more of one input raises output by less each time", x:"Diminishing returns set in when land is fixed."},
    {t:"fixed factor", d:"an input that cannot be varied in the short run", x:"Land is often a fixed factor."},
    {t:"variable factor", d:"an input that can be changed in the short run", x:"Labour is usually a variable factor."},
    {t:"economic growth", d:"an increase in an economy's productive capacity", x:"Economic growth shifts the curve outward."},
    {t:"mobility of labour", d:"the ease with which workers move between jobs or places", x:"Poor roads reduce the mobility of labour."}
  ],
  facts:[
    {q:"Define production and name its three types with an example of each.", a:"Production is the creation of goods and services to satisfy human wants. Primary production extracts raw materials, as in farming and mining; secondary production processes them, as in a soap factory; tertiary production provides services, as in teaching and transport."},
    {q:"Name the four factors of production and their rewards.", a:"Land is rewarded with rent, labour with wages or salary, capital with interest, and entrepreneurship with profit."},
    {q:"State four characteristics of land as a factor of production.", a:"It is a gift of nature; its total supply is fixed; it is immobile geographically; and its quality varies from place to place."},
    {q:"What does the production possibility curve show?", a:"The maximum combinations of two goods an economy can produce when all resources are fully and efficiently used. Points inside indicate unemployment or inefficiency, points on the curve are efficient, and points outside are unattainable with present resources."},
    {q:"Why is the production possibility curve normally concave to the origin?", a:"Because resources are not equally suited to producing both goods. As output of one good expands, increasingly unsuitable resources must be transferred, so the opportunity cost rises."},
    {q:"State four advantages of division of labour.", a:"Greater output through increased skill and speed; time is saved as workers do not move between tasks; the use of specialised machinery becomes worthwhile; and training time is reduced."},
    {q:"State three disadvantages of division of labour.", a:"Work becomes monotonous and reduces job satisfaction; workers become over-specialised and vulnerable if that trade collapses; and a stoppage at one stage halts the whole process."},
    {q:"State the law of diminishing returns.", a:"As successive units of a variable factor are added to a fixed factor, total output eventually increases at a decreasing rate, and the marginal product of the variable factor falls."},
    {q:"How does technological change promote economic growth?", a:"It raises productivity so more output is obtained from the same resources, lowers costs, creates new products and industries, and shifts the production possibility curve outward."},
    {q:"State three factors that increase the efficiency of labour.", a:"Education and training, good health and nutrition, adequate capital and tools to work with, and fair wages that provide motivation."}
  ],
  tf:[
    {s:"Capital means money only.", a:"false", why:"In Economics capital means man-made assets used to produce other goods, such as machinery, tools and buildings."},
    {s:"Land is rewarded with rent.", a:"true", why:"Each factor has its own reward: land rent, labour wages, capital interest and enterprise profit."},
    {s:"A point inside the production possibility curve shows efficient use of resources.", a:"false", why:"It shows unemployment or inefficiency; only points on the curve are efficient."},
    {s:"Division of labour can make work monotonous.", a:"true", why:"Repeating one narrow task reduces interest and job satisfaction."},
    {s:"Diminishing returns occur because all factors are variable.", a:"false", why:"They occur precisely because at least one factor is fixed while others are increased."},
    {s:"Teaching is an example of tertiary production.", a:"true", why:"It provides a service rather than a physical good."},
    {s:"Improved technology can shift the production possibility curve outward.", a:"true", why:"It raises productive capacity, making previously unattainable combinations possible."}
  ],
  sort:{ title:"Sort these into the correct groups", groups:[
    {name:"Primary production", items:["farming","mining","fishing","logging"]},
    {name:"Secondary production", items:["soap making","cement production","bakery","furniture making"]},
    {name:"Tertiary production", items:["teaching","banking","transport","nursing"]},
    {name:"Factors and rewards", items:["land \u2013 rent","labour \u2013 wages","capital \u2013 interest","enterprise \u2013 profit"]}
  ]},
  mapwork:{ title:"Reading the production possibility curve", caption:"Complete the table by explaining what each labelled point or feature shows.", items:[
    {p:"A point on the curve", f:"Efficient production: all resources fully and properly employed"},
    {p:"A point inside the curve", f:"Inefficiency or unemployment: some resources are idle"},
    {p:"A point outside the curve", f:"Unattainable with the present level of resources and technology"},
    {p:"Movement along the curve", f:"Reallocating resources from one good to the other, incurring opportunity cost"},
    {p:"Concave shape", f:"Rising opportunity cost, since resources are not equally suited to both goods"},
    {p:"Outward shift of the whole curve", f:"Economic growth from more resources, better technology or improved skills"},
    {p:"Inward shift of the whole curve", f:"Loss of capacity through war, disaster or destruction of capital"}
  ]},
  casestudy:{ title:"The cassava farm at Todee",
    text:"Mr Kollie farms two hectares at Todee. Working alone he harvests 40 bags of cassava a season. He hires a second worker and output rises to 90 bags; a third raises it to 130. When he hires a fourth worker output reaches 155 bags, and with a fifth it reaches only 170. He notices the workers now get in each other's way and some stand idle waiting for tools. His neighbour suggests he buy a mechanical grater and train the workers to specialise — one group harvesting, one peeling, one grating and one bagging. After doing so, the same five workers produce 240 bags.",
    questions:[
      {q:"Calculate the marginal product of the second, fourth and fifth workers.", a:"Second: 90 \u2212 40 = 50 bags. Fourth: 155 \u2212 130 = 25 bags. Fifth: 170 \u2212 155 = 15 bags."},
      {q:"Which economic law is at work as extra workers are added, and why does it operate here?", a:"The law of diminishing returns. Land is the fixed factor at two hectares while labour is variable, so each additional worker eventually adds less to total output."},
      {q:"Identify the fixed and the variable factor in this case.", a:"The two hectares of land is the fixed factor; labour is the variable factor."},
      {q:"Explain why output rose to 240 bags after the change.", a:"Division of labour and specialisation raised each worker's skill and saved time moving between tasks, while the grater added capital. Productivity rose without adding more workers."},
      {q:"State one risk Mr Kollie now faces from the new arrangement.", a:"With tasks divided, a stoppage at one stage — a broken grater or an absent peeling group — halts the whole process, and workers are over-specialised in a single narrow task."}
    ]},
  project:{ title:"Local production enquiry",
    brief:"Investigate how one local business combines the factors of production.",
    steps:[
      "Choose a small business in your community, such as a bakery, tailor or carpentry shop.",
      "With permission, identify the land, labour, capital and entrepreneurship it uses.",
      "Find out how the work is divided among the workers.",
      "Ask the owner what limits their output most: land, labour, capital or skill.",
      "Report your findings and suggest one realistic way output could be raised."
    ],
    criteria:["All four factors correctly identified in a real business","Division of labour accurately described","The main constraint identified from evidence","A realistic improvement suggested","Clear presentation"]},
  worked:[
    {q:"A farm produces 40 bags with 1 worker and 90 with 2. Calculate the marginal product of the second worker.", steps:["MP = change in total output","90 \u2212 40"], a:"50 bags"},
    {q:"With 4 workers output is 155 bags. Calculate the average product per worker.", steps:["AP = total output \u00f7 number of workers","155 \u00f7 4"], a:"38.75 bags per worker"},
    {q:"Output rises from 155 to 170 bags when a fifth worker is added. Find the marginal product.", steps:["170 \u2212 155"], a:"15 bags"},
    {q:"A machine costs L$120 000 and lasts 5 years. Calculate the annual depreciation by the straight line method.", steps:["120 000 \u00f7 5"], a:"L$24 000 per year"},
    {q:"A worker earns L$450 per day for 24 days. Calculate the monthly wage bill for 5 such workers.", steps:["450 \u00d7 24 = 10 800 per worker","10 800 \u00d7 5"], a:"L$54 000"},
    {q:"Output rises from 200 to 240 bags. Calculate the percentage increase in productivity.", steps:["Change = 40","(40 \u00f7 200) \u00d7 100"], a:"20% increase"},
    {q:"An economy can produce 100 tonnes of rice or 60 tonnes of cassava. It moves from 100 rice to 80 rice and gains 20 cassava. State the opportunity cost per tonne of cassava.", steps:["Rice given up = 20","Cassava gained = 20","20 \u00f7 20"], a:"1 tonne of rice per tonne of cassava"}
  ],
  apply:[
    {q:"Why can adding more workers to a fixed plot of land eventually reduce output per worker?", a:"With land fixed, extra workers have less land and equipment each to work with; they begin to crowd one another and wait for tools, so the marginal product falls — the law of diminishing returns."},
    {q:"Explain why a Liberian entrepreneur is a factor of production and not simply a worker.", a:"The entrepreneur organises land, labour and capital, decides what and how to produce, and bears the risk of loss. A worker supplies labour for a wage and carries no such risk, which is why the reward is profit rather than wages."},
    {q:"A country's production possibility curve shifts outward. Give two possible causes.", a:"Discovery of new natural resources or investment in more capital, and improvement in technology or in the education and health of the workforce."},
    {q:"Why is investment in education described as investment in human capital?", a:"Education raises the skill and productivity of labour in the same way that a machine raises the productivity of a factory, so it increases future output and is a cost incurred now for a return later."},
    {q:"A rubber plantation is idle because of a lack of buyers. Where does this place the economy on its production possibility curve?", a:"Inside the curve, because a resource is unemployed. The economy is producing less than its capacity allows and could increase output without giving anything up."}
  ],
  activities:[
    "Brainstorm the meaning of production and its types",
    "Identify the factors of production, their importance and corresponding rewards",
    "Research production and derive the production possibility curve",
    "Discuss division of labour, specialisation and the law of diminishing returns",
    "Field visit to a local workshop or farm to observe the factors of production in use"
  ],
  materials:[
    "Primary text: Stanlake's Economics by S. J. Grant, 8th edition",
    "Essential Economics for Senior Secondary Schools (Cole Esan Ande), 5th edition, 2017",
    "Comprehensive Economics for Senior Secondary School (Johnson U. Anyaele, 1997)",
    "Graph paper and calculators",
    "Charts of the production possibility curve"
  ],
  assessment:["Presentation, individual and group","Written assignment","Quiz","Field enquiry report","Written test"]
},
{
  grade:10, period:"IV", sem:"Two", icon:"🛒",
  title:"The Theory of Consumer Behaviour",
  subtitle:"Utility, diminishing marginal utility, indifference curves, the budget line and consumer surplus",
  outcomes:[
    "Learners are able to analyse the concept of consumer behaviour and demonstrate how utility works according to the laws of supply and demand",
    "Learners are able to explain the indifference curve, budget line and consumer surplus"
  ],
  objectives:[
    "Explain the concepts of utility",
    "Discuss the law of diminishing marginal utility",
    "Demonstrate the relationship between total utility and marginal utility",
    "Cite examples to demonstrate the marginal utility theory",
    "Draw and discuss the graphs of the indifference curve and the budget line",
    "Illustrate the concept of consumer surplus"
  ],
  note:"<b>Utility</b> is the satisfaction a consumer derives from a good. <b>Total utility</b> rises as more is consumed, but <b>marginal utility</b> — the extra satisfaction from one more unit — falls. This is the <b>law of diminishing marginal utility</b>. Total utility is at a maximum when marginal utility is <b>zero</b>. The consumer maximises satisfaction where <b>MUₐ/Pₐ = MUᵇ/Pᵇ</b> — the equi-marginal principle.",
  study:[
    /* ---- course text: Semester Two, Period IV — The Theory of Consumer Behaviour (guide pp. 8-9) ---- */
    {k:"h3", t:"The Concept of Utility"},
    {k:"p", t:"**Utility** is the satisfaction a consumer derives from consuming a good or service. **Total utility (TU)** is the satisfaction from all the units consumed; **marginal utility (MU)** is the extra satisfaction from one more unit. **Utility maximization** is the goal of the rational consumer: to arrange spending so that total satisfaction is as great as the budget allows."},
    {k:"rule"},
    {k:"h3", t:"The Law of Diminishing Marginal Utility"},
    {k:"p", t:"The **law of diminishing marginal utility (DMU)** states that, other things equal, as a consumer takes successive units of a commodity, the marginal utility from each additional unit falls. From this follow the relations between TU and MU: **TU rises while MU is positive; TU is at its maximum when MU is zero; TU falls when MU becomes negative**. Build a utility schedule for cups of water or plates of rice, compute MU as the change in TU at each step, and watch the pattern appear."},
    {k:"rule"},
    {k:"h3", t:"Applying Marginal Utility Theory"},
    {k:"p", t:"Marginal utility explains the downward-sloping demand curve: since each extra unit gives less satisfaction, a buyer will purchase more only at a lower price. It also explains how a consumer divides income among goods — satisfaction is greatest when the last dollar spent on each good yields the same marginal utility, the **equi-marginal principle** (MU of A ÷ price of A = MU of B ÷ price of B). Cite examples from your own spending: the first loaf of bread, the first credit unit, the first pair of shoes."},
    {k:"rule"},
    {k:"h3", t:"The Indifference Curve and the Budget Line"},
    {k:"p", t:"An **indifference curve** joins all the combinations of two goods that give the consumer equal satisfaction, so the consumer does not mind which combination is chosen. Its **characteristics**: it slopes downward, it is convex to the origin, curves nearer the origin represent less satisfaction and farther curves more, and indifference curves never touch or cross one another. The slope of the curve at any point is the **marginal rate of substitution (MRS)** — the amount of one good the consumer gives up for an extra unit of the other while remaining equally satisfied; the MRS falls as one moves down the curve."},
    {k:"p", t:"The **consumer budget line** shows all the combinations of the two goods the consumer can just buy with a given income at given prices; its slope equals the ratio of the two prices. The consumer reaches equilibrium at the point where the budget line just touches the highest attainable indifference curve — the combination that spends the whole budget and equalises the MRS with the price ratio."},
    {k:"rule"},
    {k:"h3", t:"Consumer Surplus"},
    {k:"p", t:"**Consumer surplus** is the difference between what a consumer is willing to pay for a good and what the consumer actually pays. If you would gladly pay 200 dollars for an umbrella but buy it at 120 dollars, your surplus is 80 dollars. On a diagram it is the area between the demand curve and the market price — the extra satisfaction consumers enjoy over and above their payment."},
    {k:"h3", t:"A Utility Schedule Worked"},
    {k:"p", t:"Every question on consumer behaviour begins with a schedule like this one. Compute **marginal utility** as the change in total utility from one unit to the next — never as total utility divided by the number of units."},
    {k:"table", head:["Cups of water drunk","Total utility (utils)","Marginal utility (utils)","What is happening"], rows:[
     ["1","40","40","The first cup to a thirsty traveller — the greatest satisfaction"],
     ["2","70","30","Still much wanted"],
     ["3","90","20","Wanted less"],
     ["4","100","10","Barely wanted"],
     ["5","100","0","Total utility at its maximum — the cup is neither wanted nor refused"],
     ["6","90","-10","Negative marginal utility — the cup does harm; total utility falls"]]},
    {k:"p", t:"Read the relations straight off the table and state them as general laws: **while MU is positive, TU rises**; **when MU is zero, TU is at its maximum**; **when MU is negative, TU falls**. MU falls throughout — that is the **law of diminishing marginal utility** — while TU rises, flattens and then falls. This is the whole of the theory in six rows, and a question that gives the schedule and asks for the missing column is answered by subtraction alone."},
    {k:"rule"},
    {k:"h3", t:"The Equi-Marginal Principle Worked"},
    {k:"p", t:"A consumer with a fixed income maximises satisfaction when the last unit of money spent on each good yields the same marginal utility: **MU of A ÷ price of A = MU of B ÷ price of B**. Take a consumer with L$10 who buys rice at L$2 a plate and fish at L$1 a piece, with the marginal utilities below."},
    {k:"table", head:["Units","MU of rice","MU of rice ÷ L$2","MU of fish","MU of fish ÷ L$1"], rows:[
     ["1","20","10","12","12"],
     ["2","16","8","10","10"],
     ["3","12","6","8","8"],
     ["4","8","4","6","6"],
     ["5","4","2","4","4"]]},
    {k:"p", t:"Spend each kobo where it buys the most satisfaction and work down the two ratio columns. The order of purchase is: first fish (12 utils per kobo), then second fish (10) and first rice (10), then third fish (8) and second rice (8), then fourth fish (6) and third rice (6) — at which point the whole L$10 is spent. The consumer buys **3 plates of rice (L$6) and 4 pieces of fish (L$4)**. Check the result by the rule: the last kobo on rice yields 12 ÷ 2 = **6 utils**, and the last kobo on fish yields 6 ÷ 1 = **6 utils** — the ratios are equal, so total utility (48 + 36 = 84 utils) is at its maximum and no rearrangement can improve it. The **rule for the paper**: if MU of A ÷ price of A is **greater** than MU of B ÷ price of B, buy **more of A and less of B** — as A is bought its MU falls and as B is given up its MU rises, so the ratios move back into equality."},
    {k:"rule"},
    {k:"h3", t:"Why the Demand Curve Slopes Downward"},
    {k:"p", t:"Diminishing marginal utility **is** the reason for the law of demand, and the chain must be written out: since each further unit yields less satisfaction, the consumer will buy a further unit **only at a lower price**; so as price falls the quantity bought rises, and the demand curve slopes downward. A second derivation uses the equi-marginal principle: when the price of rice falls, MU of rice ÷ price of rice rises above the ratio for other goods, so the consumer buys more rice until equality is restored — a lower price, a larger quantity, at every point on the curve. This explains too the **diamond-water paradox** that puzzled Adam Smith: water is essential but cheap because it is abundant, so its marginal utility — not its total utility — is low; diamonds are useless but dear because they are scarce, so their marginal utility is high. Price is set at the margin, not by total usefulness."},
    {k:"rule"},
    {k:"h3", t:"The Indifference Curve and the Budget Line"},
    {k:"p", t:"An **indifference curve** joins the combinations of two goods that give equal satisfaction. Its four characteristics must be stated with their reasons. It **slopes downward** because more of one good must be given up to have more of the other while satisfaction stays the same. It is **convex to the origin** because the **marginal rate of substitution falls** — the more rice a consumer already has, the less fish he will surrender for another plate. **Curves farther from the origin mean greater satisfaction**, since more of both goods is preferred to less. And **two indifference curves can never cross**: if they did, the point of crossing would give two different levels of satisfaction at once, which is a contradiction — draw the crossing case and prove it by naming the two bundles that would then be equal to the same bundle yet unequal to each other."},
    {k:"p", t:"The **budget line** shows the combinations just affordable with a given income at given prices. With L$20, rice at L$4 a plate and fish at L$2 a piece, the consumer can have 5 plates of rice and no fish, or 10 pieces of fish and no rice, or any straight-line combination between — 3 plates and 4 pieces, for instance. Its **slope is the ratio of the two prices** (4 ÷ 2 = 2), so he must give up 2 fish for every plate of rice. A rise in income shifts the line **outward, parallel**; a fall shifts it inward; a fall in the price of one good **rotates** it outward along that good's axis. **Consumer equilibrium** is the point where the budget line is **tangent** to the highest indifference curve it can reach — there the slope of the curve (the MRS) equals the slope of the line (the price ratio), which is the indifference-curve form of the equi-marginal rule."},
    {k:"rule"},
    {k:"h3", t:"Consumer Surplus in Numbers"},
    {k:"p", t:"**Consumer surplus** is the difference between what a consumer is willing to pay and what he actually pays. Take the water schedule above, with the consumer paying L$1 a cup: he would have paid L$4 for the first cup, L$3 for the second, L$2 for the third and L$1 for the fourth, spending L$4 in all while the satisfaction he receives is worth L$10 to him — so his surplus is **L$6**. On the demand diagram the surplus is the **area between the demand curve and the price line**: a fall in price enlarges it (the price line drops, so more area lies above it), a rise in price shrinks it, and a tax that raises the price transfers part of it from the consumer to the government. Use the concept to judge any price change: the consumer is better off when his surplus grows, and the paper often asks exactly this of a subsidy or a tax."},
    {k:"rule"},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Computing **MU as TU ÷ units**. MU is the **change** in TU between two units — subtract, do not divide.",
      "Saying **TU falls as MU falls**. TU keeps rising while MU is positive; it falls only once MU turns negative.",
      "Letting **two indifference curves cross**, or failing to give the reason they cannot.",
      "Forgetting that the MRS **falls** along the curve — that is what makes it convex, and it is a mark on its own.",
      "Defining consumer surplus as what the consumer **pays**. It is the difference between what he would pay and what he pays.",
      "Confusing **utility** with **usefulness**. Utility in economics is satisfaction, and a harmful good can carry it — the economist does not judge the want."]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Define utility, total utility and marginal utility**, then complete a utility schedule by subtraction",
      "**State the law of diminishing marginal utility** and the three TU-MU relations — TU rises while MU is positive, peaks when MU is zero, falls when MU is negative",
      "**Apply the equi-marginal principle** to divide a given income between two goods, showing the ratios equalised at the end",
      "**Derive the downward-sloping demand curve** from diminishing marginal utility — the chain of reasoning is the mark",
      "**State the characteristics of an indifference curve** — four, each with its reason, and the proof that two cannot cross",
      "**Explain the budget line** — its slope as the price ratio, the effect of a change in income and of a change in price, and the tangency that is consumer equilibrium",
      "**Calculate consumer surplus** from a schedule or read it as an area on a diagram, then say how a tax or a subsidy changes it"
    ]}

  ],

  focus:[
    "The concept of utility: total and marginal utility",
    "Utility maximisation and the law of diminishing marginal utility",
    "The relationship between total and marginal utility",
    "Application of marginal utility theory",
    "Indifference curves and the marginal rate of substitution",
    "Characteristics of the indifference curve",
    "The consumer budget line and consumer equilibrium",
    "Consumer surplus"
  ],
  terms:[
    {t:"utility", d:"the satisfaction a consumer derives from consuming a good", x:"Utility differs from person to person."},
    {t:"total utility", d:"the whole satisfaction from consuming a given quantity", x:"Total utility rises then levels off."},
    {t:"marginal utility", d:"the extra satisfaction from consuming one more unit", x:"Marginal utility falls as more is consumed."},
    {t:"law of diminishing marginal utility", d:"each extra unit consumed gives less added satisfaction", x:"The fourth cup of water satisfies less than the first."},
    {t:"utility maximisation", d:"arranging spending to obtain the greatest total satisfaction", x:"Utility maximisation guides rational spending."},
    {t:"equi-marginal principle", d:"satisfaction is maximised when utility per unit of money is equal across goods", x:"The equi-marginal principle balances spending."},
    {t:"indifference curve", d:"a curve showing combinations of two goods giving equal satisfaction", x:"The consumer is indifferent along the curve."},
    {t:"indifference map", d:"a set of indifference curves for one consumer", x:"Higher curves on the map mean greater satisfaction."},
    {t:"marginal rate of substitution", d:"the rate at which one good is given up for another with satisfaction unchanged", x:"The marginal rate of substitution falls along the curve."},
    {t:"budget line", d:"a line showing combinations affordable with a given income", x:"The budget line shows what income permits."},
    {t:"consumer equilibrium", d:"the point where the budget line touches the highest indifference curve", x:"At consumer equilibrium satisfaction is maximised."},
    {t:"consumer surplus", d:"the difference between what a consumer would pay and what he does pay", x:"Consumer surplus measures the buyer's gain."},
    {t:"util", d:"an imaginary unit used to measure utility", x:"Utils allow utility to be tabulated."},
    {t:"rational consumer", d:"a consumer who acts to maximise satisfaction from limited income", x:"A rational consumer compares utility with price."},
    {t:"real income", d:"income measured by the quantity of goods it can buy", x:"A price fall raises real income."},
    {t:"satiation", d:"the point at which no further satisfaction is gained", x:"At satiation marginal utility is zero."}
  ],
  facts:[
    {q:"Define utility, total utility and marginal utility.", a:"Utility is the satisfaction obtained from consuming a good. Total utility is the whole satisfaction from a given quantity consumed. Marginal utility is the addition to total utility from consuming one more unit."},
    {q:"State the law of diminishing marginal utility.", a:"As a consumer takes successive units of a commodity, the additional satisfaction derived from each extra unit falls, other things being equal."},
    {q:"What is the relationship between total utility and marginal utility?", a:"While marginal utility is positive, total utility rises. When marginal utility is zero, total utility is at its maximum. When marginal utility becomes negative, total utility falls."},
    {q:"State the condition for consumer equilibrium under the marginal utility approach.", a:"Satisfaction is maximised when the marginal utility per unit of money spent is the same for all goods, that is MU of A divided by price of A equals MU of B divided by price of B, and the whole income is spent."},
    {q:"State four characteristics of an indifference curve.", a:"It slopes downward from left to right; it is convex to the origin; two indifference curves never intersect; and a higher curve represents a higher level of satisfaction."},
    {q:"What is the marginal rate of substitution and how does it behave?", a:"The amount of one good a consumer will give up to gain one more unit of another while remaining equally satisfied. It diminishes as one moves down the curve, which is why the curve is convex."},
    {q:"What is the budget line and what causes it to shift?", a:"A line showing all combinations of two goods a consumer can afford with a given income and set of prices. It shifts outward if income rises and inward if income falls; a change in the price of one good alters its slope."},
    {q:"Define consumer surplus and give an example.", a:"The difference between what a consumer is willing to pay and what he actually pays. If a buyer would have paid L$100 for a shirt but the price is L$70, the consumer surplus is L$30."},
    {q:"How does the law of diminishing marginal utility explain the downward sloping demand curve?", a:"Because each extra unit gives less satisfaction, a consumer will only buy more if the price falls to match the lower marginal utility — so quantity demanded rises as price falls."},
    {q:"Why is water cheap and gold expensive although water is more useful?", a:"Price reflects marginal utility, not total utility. Water is abundant so the marginal utility of one more litre is very low; gold is scarce so the marginal utility of one more unit is very high."}
  ],
  tf:[
    {s:"Total utility is at its maximum when marginal utility is zero.", a:"true", why:"Beyond that point extra units reduce total satisfaction."},
    {s:"Marginal utility usually rises as more units are consumed.", a:"false", why:"It falls, which is the law of diminishing marginal utility."},
    {s:"Two indifference curves can intersect.", a:"false", why:"Intersection would mean two different satisfaction levels at the same point, which is contradictory."},
    {s:"A higher indifference curve represents greater satisfaction.", a:"true", why:"It contains more of at least one good."},
    {s:"A rise in income shifts the budget line outward.", a:"true", why:"More of both goods becomes affordable at unchanged prices."},
    {s:"Consumer surplus is the profit made by the seller.", a:"false", why:"It is the buyer's gain: the difference between what he was willing to pay and what he actually paid."},
    {s:"Utility can be measured exactly in the same way as weight.", a:"false", why:"Utility is subjective; utils are only an imaginary device for illustration."}
  ],
  sort:{ title:"Sort these statements", groups:[
    {name:"Total utility", items:["whole satisfaction","rises then falls","maximum when MU is zero"]},
    {name:"Marginal utility", items:["satisfaction from one more unit","falls as consumption rises","can become negative"]},
    {name:"Characteristics of indifference curves", items:["slope downward","convex to origin","never intersect","higher curve is better"]},
    {name:"Shifts the budget line outward", items:["rise in income","fall in the price of both goods"]}
  ]},
  mapwork:{ title:"Utility schedule for cups of water", caption:"Complete the table, calculating marginal utility as the change in total utility.", items:[
    {p:"1st cup: TU = 20", f:"MU = 20 utils — the first unit gives the greatest satisfaction"},
    {p:"2nd cup: TU = 35", f:"MU = 15 utils — satisfaction is still added but by less"},
    {p:"3rd cup: TU = 45", f:"MU = 10 utils — diminishing marginal utility is clear"},
    {p:"4th cup: TU = 50", f:"MU = 5 utils — very little extra satisfaction"},
    {p:"5th cup: TU = 50", f:"MU = 0 utils — satiation reached, total utility at its maximum"},
    {p:"6th cup: TU = 46", f:"MU = \u22124 utils — negative utility, total utility now falls"}
  ]},
  casestudy:{ title:"Buying at the second-hand market",
    text:"Fatu goes to the second-hand clothes market with 1 500 Liberian dollars. She sees a dress she likes so much she would have paid 900 dollars for it, but the trader asks 600 and she buys it. She also buys a blouse for 400 dollars which she values at exactly 400. With the remaining 500 dollars she considers a second dress, but decides one dress is enough for now and saves the money instead. Walking home she reflects that the first dress gave her far more pleasure than a second one would have.",
    questions:[
      {q:"Calculate Fatu's consumer surplus on the dress.", a:"She was willing to pay 900 but paid 600, so her consumer surplus is 300 Liberian dollars."},
      {q:"What is her consumer surplus on the blouse, and what does this show?", a:"Zero, because she paid exactly what she valued it at. She is on the margin of being willing to buy at all."},
      {q:"Which economic law explains her decision not to buy a second dress?", a:"The law of diminishing marginal utility: the second dress would give her much less extra satisfaction than the first, and not enough to justify the price."},
      {q:"State her total consumer surplus from the day's shopping.", a:"300 dollars from the dress plus zero from the blouse, giving 300 Liberian dollars in total."},
      {q:"If the trader had asked 950 for the dress, would Fatu have bought it? Explain.", a:"No. Her maximum willingness to pay was 900, so at 950 the price exceeds the utility she expects and there would be no consumer surplus."}
    ]},
  project:{ title:"Diminishing marginal utility investigation",
    brief:"Test the law of diminishing marginal utility on real consumption.",
    steps:[
      "Choose a common item such as cups of water on a hot day, or slices of bread.",
      "Ask five classmates to rate the satisfaction of each successive unit out of 20.",
      "Tabulate total utility and calculate marginal utility for each person.",
      "Plot the average total utility and marginal utility curves on the same axes.",
      "State whether the law held for every person, and explain any exception you find."
    ],
    criteria:["Sensible item chosen","Five people genuinely surveyed","Marginal utility correctly calculated","Both curves accurately plotted","Honest discussion of any exception"]},
  worked:[
    {q:"Total utility after 3 units is 45 utils and after 4 units is 50. Find the marginal utility of the 4th unit.", steps:["MU = TU\u2084 \u2212 TU\u2083","50 \u2212 45"], a:"5 utils"},
    {q:"MU of the 5th unit is zero. What does this tell you about total utility?", steps:["TU stops rising when MU = 0"], a:"Total utility is at its maximum"},
    {q:"A consumer would pay L$900 but pays L$600. Calculate consumer surplus.", steps:["CS = willingness to pay \u2212 price paid","900 \u2212 600"], a:"L$300"},
    {q:"Good A: MU 40, price L$10. Good B: MU 24, price L$8. Which gives better value?", steps:["A: 40 \u00f7 10 = 4 utils per dollar","B: 24 \u00f7 8 = 3 utils per dollar"], a:"Good A, at 4 utils per dollar"},
    {q:"Using the same figures, what should the consumer do to reach equilibrium?", steps:["Buy more of A until its MU falls","Continue until MU\u2090/P\u2090 = MU\u1d47/P\u1d47"], a:"Buy more of A and less of B"},
    {q:"Income is L$1 200. Rice costs L$300 a bag and oil L$200 a bottle. If she buys 2 bags of rice, how many bottles of oil can she afford?", steps:["Rice = 2 \u00d7 300 = 600","Remaining = 1 200 \u2212 600 = 600","600 \u00f7 200"], a:"3 bottles"},
    {q:"Total utility for 1, 2, 3 units is 20, 35, 45. Calculate the marginal utility of the 2nd and 3rd units.", steps:["2nd: 35 \u2212 20 = 15","3rd: 45 \u2212 35 = 10"], a:"15 utils and 10 utils"}
  ],
  apply:[
    {q:"Why does a restaurant offering an all-you-can-eat meal at a fixed price rarely lose money?", a:"Diminishing marginal utility means each additional plate gives the diner less satisfaction, so most people stop eating well before the restaurant's cost exceeds the fixed price."},
    {q:"Explain the water and diamond paradox using marginal utility.", a:"Total utility of water is enormous but it is abundant, so the marginal utility of one more litre is tiny and its price is low. Diamonds are scarce so the marginal utility of one more is very high and the price is high. Price follows marginal, not total, utility."},
    {q:"A shopkeeper reduces the price of the second item to half. How does this relate to marginal utility?", a:"The consumer's marginal utility from a second unit is lower, so at the full price he would not buy it. Halving the price brings the price into line with that lower marginal utility and induces the purchase."},
    {q:"How would a large fall in the price of rice affect a household's budget line and consumer surplus?", a:"The budget line pivots outward on the rice axis, so more of both goods becomes affordable. Consumer surplus rises because the household pays less than before for rice it was already willing to buy at the higher price."},
    {q:"A learner argues that a rational consumer should spend all income on the good giving the highest utility. Is this correct?", a:"No. Because marginal utility falls with consumption, satisfaction is maximised by spreading spending until the utility per dollar is equal across goods — the equi-marginal principle — not by concentrating on one good."}
  ],
  activities:[
    "Discuss the definition and concept of utility, utility maximisation, and total and marginal utility",
    "Group discussion on consumer behaviour relative to the consumer budget line",
    "Construct utility schedules and plot total and marginal utility curves",
    "Draw indifference curves and budget lines and locate consumer equilibrium",
    "Calculate consumer surplus from real market examples"
  ],
  materials:[
    "Primary text: Stanlake's Economics by S. J. Grant, 8th edition",
    "Essential Economics for Senior Secondary Schools (Cole Esan Ande), 5th edition, 2017",
    "Comprehensive Economics for Senior Secondary School (Johnson U. Anyaele, 1997)",
    "Graph paper, rulers and calculators",
    "Charts of indifference curves and budget lines"
  ],
  assessment:["Presentation, individual and group","Written assignment","Quiz","Graph plotting exercise","Written test"]
},
{
  grade:10, period:"V", sem:"Two", icon:"📊",
  title:"Basic Tools of Economic Analysis",
  subtitle:"Tables, charts and graphs, frequency distribution and the measures of central tendency",
  outcomes:[
    "Learners are able to demonstrate the skills of collecting, interpreting and analysing economic data through percentages, ratios, tables, charts and graphical presentations",
    "Learners are able to interpret social data"
  ],
  objectives:[
    "Define the basic economic tools and state their use and importance",
    "Construct a frequency distribution table",
    "Calculate the arithmetic mean, median and mode of a given set of data",
    "Draw and interpret line graphs, histograms, bar charts, pie charts and pictograms",
    "Interpret social data and draw conclusions from it"
  ],
  note:"Economists summarise data with the <b>measures of central tendency</b>. The <b>mean</b> is the sum of values divided by their number. The <b>median</b> is the middle value when the data are arranged in order. The <b>mode</b> is the value occurring most often. A <b>pie chart</b> converts each category to a share of 360°; a <b>bar chart</b> compares totals; a <b>line graph</b> shows change over time.",
  study:[
    /* ---- course text: Semester Two, Period V — Basic Tools of Economic Analysis (guide pp. 10-11) ---- */
    {k:"h3", t:"The Basic Economic Tools"},
    {k:"p", t:"Economists collect, interpret and analyse data with a small toolkit: **tables, charts and graphs**, together with percentages and ratios. Their use and importance: a table organises raw figures for comparison; a chart or graph turns them into a picture the eye can grasp at once; percentages and ratios let us compare things of different size. Determine the usages of each tool in class — record the ages of learners in your class as data, tabulate them, and present them."},
    {k:"rule"},
    {k:"h3", t:"Frequency Distribution"},
    {k:"p", t:"A **frequency distribution table** groups raw data into classes and counts how many observations fall in each class (the **frequency**). Constructing it: choose the number of classes, find the class interval, tally the observations class by class, and total the tallies. From the table the data can be carried into any of the graphic forms below."},
    {k:"rule"},
    {k:"h3", t:"Presenting Data: the Charts and Graphs"},
    {k:"table", head:["Tool","What it shows","Best used when"], rows:[
     ["Line graph","Change over time by a connected line","Following a trend, such as prices month by month"],
     ["Histogram","Bars drawn from grouped classes, no gaps","Displaying a frequency distribution"],
     ["Simple bar chart","Bars of equal width compared by height","Comparing totals of different items"],
     ["Component bar chart","One bar stacked by parts of a whole","Showing the composition of each total"],
     ["Divergent bar chart","Bars above and below a baseline","Showing gains and losses, surpluses and deficits"],
     ["Percentage bar chart","A single bar scaled to 100 %","Comparing shares of different totals"],
     ["Pie chart","Slices of a circle, each a share of 360°","Showing proportions of one total"],
     ["Pictogram","Pictures or symbols repeated to stand for amounts","Simple display for general readers"]]},
    {k:"rule"},
    {k:"h3", t:"Measurement of Central Tendency"},
    {k:"p", t:"The **arithmetic mean** is the sum of the values divided by their number — the average. The **median** is the middle value when the data are arranged in order; half the values lie above it and half below. The **mode** is the value that occurs most often. Calculate all three from your class survey of ages and compare them; note that a few very large or very small values pull the mean but leave the median untouched."},
    {k:"p", t:"Worked example — the community survey: 100 teenagers were interviewed about contraceptive knowledge. Of 50 girls, 25 had knowledge, used contraceptives consistently, were not pregnant and remained in school; 10 had no knowledge, got pregnant and dropped from school; 15 had knowledge, yet got pregnant but remained in school. Of 50 boys, 36 had knowledge of contraceptive use and had not impregnated any girl; 14 had no knowledge and had impregnated girls. Present these findings in a pie chart, and process the information to show the implication of the data for schooling and health."},
    {k:"h3", t:"Building a Frequency Distribution from Raw Data"},
    {k:"p", t:"The paper gives raw marks or ages and asks for a grouped table. Follow the five steps and the table builds itself. **Step 1 — find the range:** highest value minus lowest. For marks of 12 to 57 the range is 45. **Step 2 — choose the number of classes**, usually five to eight. **Step 3 — find the class interval:** range ÷ number of classes, rounded up — 45 ÷ 5 = 9, so use intervals of 10 for convenience. **Step 4 — set the class limits** so that every value falls in one class and none in two: 10-19, 20-29, 30-39, 40-49, 50-59. **Step 5 — tally** each observation into its class and total the tallies; the total must equal the number of observations, and if it does not, a value has been missed or counted twice."},
    {k:"table", head:["Marks","Tally","Frequency","Class mark (midpoint)"], rows:[
     ["10-19","///","3","14.5"],
     ["20-29","//// //","7","24.5"],
     ["30-39","//// //// /","11","34.5"],
     ["40-49","//// ////","10","44.5"],
     ["50-59","////","9","54.5"]]},
    {k:"p", t:"Note the **class mark** (midpoint) column: (lower limit + upper limit) ÷ 2. It is needed for the mean of grouped data, which is the sum of (frequency × midpoint) divided by the total frequency. Here that is (3×14.5) + (7×24.5) + (11×34.5) + (10×44.5) + (9×54.5) = 43.5 + 171.5 + 379.5 + 445 + 490.5 = **1 930**, and 1 930 ÷ 40 = **48.25**. State that the grouped mean is an **estimate**, since every value in a class is taken at the midpoint."},
    {k:"rule"},
    {k:"h3", t:"Choosing the Right Chart — and Drawing It"},
    {k:"p", t:"The choice of chart follows from the nature of the data, and a question often asks which is appropriate before asking for the drawing itself."},
    {k:"table", head:["Data to present","Best chart","Why"], rows:[
     ["Prices month by month for a year","Line graph","Shows the direction and steepness of the trend at a glance"],
     ["The number of learners in each of five classes","Simple bar chart","Compares separate totals by the height of equal-width bars"],
     ["The export earnings of Liberia split by commodity","Pie chart or component bar","Shows each part as a share of one total"],
     ["Marks of 40 learners in grouped classes","Histogram","Draws a frequency distribution with no gaps between the bars"],
     ["Exports against imports over five years","Divergent or compound bar","Sets the two series side by side, or the surplus and deficit about a baseline"],
     ["Liberia's exports against Ghana's, both as shares of 100 %","Percentage bar chart","Compares the composition of totals of different size"],
     ["Population of each county","Simple bar chart","Compares the totals directly"]]},
    {k:"p", t:"**Drawing rules that earn marks:** give the chart a **title** saying what it shows, where and when; label **both axes** with the variable and the unit; use a **scale** that is simple and even (1 cm = 10 units, not 1 cm = 7.3); start the scale at **zero** unless there is a stated reason not to, since a truncated axis exaggerates the difference; draw **bars of equal width** with equal gaps in a bar chart, and **no gaps at all** in a histogram, because the classes are continuous."},
    {k:"rule"},
    {k:"h3", t:"The Pie Chart Worked"},
    {k:"p", t:"A pie chart divides 360° in proportion to the parts. The formula is **angle = (item ÷ total) × 360°**. Take a household budget of L$20 000: food L$10 000, rent L$4 000, school fees L$3 000, transport L$2 000, other L$1 000. Food takes (10 000 ÷ 20 000) × 360 = **180°**; rent (4 000 ÷ 20 000) × 360 = **72°**; fees **54°**; transport **36°**; other **18°**. Check that the angles sum to 360 — 180 + 72 + 54 + 36 + 18 = 360 — and if they do not, an arithmetic slip has been made. Then draw the circle, mark the angles with a protractor from one radius, label each sector with its item and its percentage, and give the chart a title. The **percentage** column is (item ÷ total) × 100: food 50 %, rent 20 %, fees 15 %, transport 10 %, other 5 %."},
    {k:"rule"},
    {k:"h3", t:"Mean, Median and Mode — When Each Misleads"},
    {k:"p", t:"Take the weekly earnings in Liberian dollars of nine market women: 2 000, 2 200, 2 400, 2 500, 2 600, 2 800, 3 000, 3 200 and 25 000. The **mean** is 45 700 ÷ 9 = **L$5 078**; the **median** (the fifth of nine ordered values) is **L$2 600**; the **mode** — the value occurring most often — there is none, since no value repeats. The mean is dragged far above what eight of the nine actually earn by the single large figure; the median describes the typical trader far better. This is the point the examiner wants: **the mean uses every value but is pulled by extremes; the median ignores the size of the extremes and so describes a skewed set better; the mode is the most common value and is the only average usable for non-numeric data, but it may not exist or there may be several.** Choose the median for incomes, the mean for examination marks in a roughly even class, the mode for the most popular product or the commonest family size."},
    {k:"p", t:"For **grouped** data the median is the value at the middle position, (n + 1) ÷ 2, located by cumulative frequency; the mode is the midpoint of the class with the highest frequency (the **modal class**). Always show the cumulative frequency column — it is where the marks for method are."},
    {k:"rule"},
    {k:"h3", t:"The Community Survey Worked Through"},
    {k:"p", t:"The guide's survey of 100 teenagers on contraceptive knowledge is a data-handling question in full. Sort the raw figures first, then present them."},
    {k:"table", head:["Group","Number","Share of the 100"], rows:[
     ["Girls with knowledge, using contraceptives, not pregnant, still in school","25","25 %"],
     ["Girls with no knowledge, pregnant, dropped out of school","10","10 %"],
     ["Girls with knowledge, pregnant, still in school","15","15 %"],
     ["Boys with knowledge of contraceptive use who had impregnated no girl","36","36 %"],
     ["Boys with no knowledge who had impregnated girls","14","14 %"]]},
    {k:"p", t:"Angles for the pie chart: 25 % = **90°**, 10 % = **36°**, 15 % = **54°**, 36 % = **129.6°**, 14 % = **50.4°** — total 360°. Then **interpret**, which is where most candidates stop short: 76 of the 100 had knowledge (40 of the 50 girls and 36 of the 50 boys) and 24 had none; 25 of the 100 were involved in pregnancy; and 10 girls — a tenth of the sample — both lacked knowledge and left school. The implications the paper wants are **educational** (pregnancy removes girls from school, so knowledge and access must reach them before they leave), **health** (a quarter of the sample is already affected), and **policy** (the gap between knowledge and use among the 15 shows that information without access and counselling changes little)."},
    {k:"rule"},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Drawing a **histogram with gaps** between the bars. A histogram shows continuous grouped classes; the bars touch. A bar chart compares separate items; the bars do not.",
      "Leaving the **axes or the title off**. An unlabelled chart earns no marks however carefully it is drawn.",
      "Starting a bar-chart scale **above zero** without saying why — it exaggerates the differences the chart is meant to show.",
      "Computing the **mode of grouped data as the frequency**. The mode is the **value** or the class midpoint, not the number of observations.",
      "Letting the pie-chart angles **fail to total 360°**. Check the sum before drawing.",
      "Reporting the **mean alone** for a set containing an extreme value, when the median tells the truth."]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Name the basic tools of economic analysis** — tables, charts and graphs — and state the use and importance of each",
      "**Construct a frequency distribution** from raw data: range, number of classes, class interval, tally, total, and the midpoint column",
      "**Calculate the mean, median and mode** from both ungrouped and grouped data, showing every step",
      "**Justify the choice of average** where an extreme value is present — this is a two-mark reasoning question, not a calculation",
      "**Draw a pie chart** — convert each item to an angle by (item ÷ total) × 360, check the total, title and label it",
      "**Choose and draw the right chart** for a given set of figures, with a reason for the choice",
      "**Interpret a table or a chart** and state its implications — the data is never given merely to be copied; say what it shows and what should follow from it"
    ]}

  ],

  focus:[
    "Definition and importance of the basic tools of economic analysis",
    "Tables, charts and graphs",
    "Frequency distribution tables",
    "Line graphs, histograms, bar charts, pie charts, component bar charts and pictograms",
    "Measures of central tendency: mean, median and mode",
    "Percentages and ratios",
    "Interpretation of social and economic data"
  ],
  terms:[
    {t:"data", d:"facts and figures collected for analysis", x:"Economic data must be accurate to be useful."},
    {t:"statistics", d:"the collection, presentation and analysis of numerical data", x:"Statistics turn raw data into information."},
    {t:"frequency", d:"the number of times a value occurs", x:"Frequency is recorded in a tally."},
    {t:"frequency distribution", d:"a table showing values and how often each occurs", x:"A frequency distribution organises raw data."},
    {t:"arithmetic mean", d:"the sum of values divided by their number", x:"The mean is the commonest average."},
    {t:"median", d:"the middle value when data are arranged in order", x:"The median is unaffected by extreme values."},
    {t:"mode", d:"the value that occurs most frequently", x:"The mode shows the most common case."},
    {t:"range", d:"the difference between the highest and lowest values", x:"The range measures spread."},
    {t:"line graph", d:"a graph showing how a value changes over time", x:"A line graph traces price movements."},
    {t:"bar chart", d:"a chart comparing quantities using bars of equal width", x:"A bar chart compares county populations."},
    {t:"component bar chart", d:"a bar divided to show the parts of each total", x:"A component bar chart shows the make-up of exports."},
    {t:"histogram", d:"a chart of continuous grouped data with bars touching", x:"A histogram displays a frequency distribution."},
    {t:"pie chart", d:"a circle divided into sectors showing proportions", x:"A pie chart shows the share of each sector."},
    {t:"pictogram", d:"a chart using pictures to represent quantities", x:"A pictogram is easily understood by all."},
    {t:"percentage", d:"a proportion expressed out of one hundred", x:"Percentages allow fair comparison."},
    {t:"ratio", d:"a comparison of two quantities by division", x:"The ratio of boys to girls was 3:2."},
    {t:"tally", d:"a mark used to count occurrences", x:"A tally builds the frequency column."},
    {t:"raw data", d:"figures as first collected, before ordering", x:"Raw data must be organised before use."}
  ],
  facts:[
    {q:"Name four basic tools of economic analysis and state one use of each.", a:"Tables organise raw figures clearly; graphs show trends and relationships; charts compare quantities visually; and averages summarise a whole set of data in a single figure."},
    {q:"How is the arithmetic mean calculated?", a:"By adding all the values together and dividing by the number of values."},
    {q:"How is the median found for an even number of values?", a:"Arrange the values in order of size, take the two middle values, and find their average."},
    {q:"Define the mode and state one situation where it is the most useful average.", a:"The value occurring most often. It is most useful for a shopkeeper deciding which size or item to stock, since it shows the commonest requirement."},
    {q:"State one advantage and one disadvantage of the mean.", a:"Advantage: it uses every value in the data and is widely understood. Disadvantage: it is distorted by extreme values, so one very large figure can make it unrepresentative."},
    {q:"State one advantage of the median over the mean.", a:"The median is not affected by extreme values, so it gives a fairer picture of a typical figure where a few values are very large or very small, as with incomes."},
    {q:"How is the angle of a sector in a pie chart calculated?", a:"By dividing the value of the category by the total of all values and multiplying by 360 degrees."},
    {q:"State the difference between a bar chart and a histogram.", a:"A bar chart displays separate categories with gaps between bars of equal width; a histogram displays continuous grouped data with the bars touching, and area represents frequency."},
    {q:"Why must a graph always carry a title, labelled axes and a scale?", a:"Without them the reader cannot tell what is being measured, in what units, or over what range, so the graph cannot be interpreted and may mislead."},
    {q:"State two reasons why economists present data in charts rather than tables of figures.", a:"Charts reveal trends, comparisons and proportions at a glance, and they are understood by readers who would find columns of figures difficult."}
  ],
  tf:[
    {s:"The mean is affected by extreme values.", a:"true", why:"A single very large or very small figure pulls the mean toward it."},
    {s:"The median is the value that occurs most often.", a:"false", why:"That is the mode; the median is the middle value in an ordered set."},
    {s:"The sectors of a pie chart must total 360 degrees.", a:"true", why:"The whole circle represents the whole of the data."},
    {s:"In a histogram the bars are drawn with gaps between them.", a:"false", why:"Histogram bars touch because the data are continuous; bar charts have gaps."},
    {s:"A line graph is the best chart for showing change over time.", a:"true", why:"It shows the direction and rate of movement clearly."},
    {s:"Raw data can be interpreted just as easily as organised data.", a:"false", why:"Raw data must be ordered, tabulated or charted before patterns can be seen."}
  ],
  sort:{ title:"Sort these tools and measures", groups:[
    {name:"Measures of central tendency", items:["mean","median","mode"]},
    {name:"Charts for comparison", items:["bar chart","component bar chart","pictogram"]},
    {name:"Charts for proportion", items:["pie chart"]},
    {name:"Charts for change over time", items:["line graph"]},
    {name:"Steps in handling data", items:["collect","tabulate","calculate","interpret"]}
  ]},
  mapwork:{ title:"Choosing the right chart", caption:"Complete the table by stating when each chart should be used.", items:[
    {p:"Line graph", f:"Showing how one value changes over a period of time, such as monthly prices"},
    {p:"Bar chart", f:"Comparing the size of separate categories, such as population by county"},
    {p:"Component bar chart", f:"Showing both the total and its parts, such as exports by commodity"},
    {p:"Pie chart", f:"Showing each category as a share of the whole, using 360 degrees"},
    {p:"Histogram", f:"Displaying continuous grouped data such as income ranges, bars touching"},
    {p:"Pictogram", f:"Presenting simple comparisons to a general audience using pictures"},
    {p:"Frequency table", f:"Organising raw data by value and how often each occurs"}
  ]},
  casestudy:{ title:"A survey of teenage pregnancy and schooling",
    text:"A class surveyed 100 teenagers in their community about knowledge of contraceptives and their schooling. Among the 50 girls, 25 reported that they had knowledge, used contraceptives consistently, had not become pregnant and were still in school. Ten had no knowledge, became pregnant and dropped out of school. Fifteen had knowledge, became pregnant and remained in school. Among the 50 boys, 36 reported that they had knowledge of contraceptive use and had not made any girl pregnant, while 14 had not. The class was asked to present the findings and draw conclusions for community health education.",
    questions:[
      {q:"What percentage of the girls surveyed became pregnant?", a:"Ten plus fifteen is 25 out of 50 girls, which is 50 per cent."},
      {q:"Of the girls who became pregnant, what percentage dropped out of school?", a:"Ten out of 25 dropped out, which is 40 per cent."},
      {q:"What percentage of all 100 teenagers reported having knowledge of contraceptives?", a:"Girls with knowledge were 25 plus 15, giving 40; boys with knowledge were 36. Together 76 out of 100, which is 76 per cent."},
      {q:"Which chart would best show the four categories of girls, and why?", a:"A pie chart, because it shows each group as a share of the 50 girls and makes the proportions immediately visible."},
      {q:"State one conclusion the class could draw for community health education.", a:"Knowledge alone is not sufficient: 15 girls had knowledge yet still became pregnant, so education must be combined with access to services and support that helps girls stay in school."}
    ]},
  project:{ title:"Community data survey and presentation",
    brief:"Collect real data in your community and present it using the tools of economic analysis.",
    steps:[
      "Choose a question that can be counted, such as household size or main source of income.",
      "Survey at least 30 households or people and record the raw data.",
      "Construct a frequency distribution table from your results.",
      "Calculate the mean, median and mode.",
      "Present the data in two different charts and write three conclusions."
    ],
    criteria:["At least 30 responses genuinely collected","Correct frequency table","Mean, median and mode correctly calculated","Two appropriate and accurate charts","Three conclusions supported by the data"]},
  worked:[
    {q:"Find the mean of 12, 15, 18, 20, 25.", steps:["Sum = 12+15+18+20+25 = 90","90 \u00f7 5"], a:"18"},
    {q:"Find the median of 7, 3, 9, 5, 11.", steps:["Order: 3, 5, 7, 9, 11","Middle value is the 3rd"], a:"7"},
    {q:"Find the median of 4, 8, 10, 14.", steps:["Two middle values are 8 and 10","(8 + 10) \u00f7 2"], a:"9"},
    {q:"Find the mode of 5, 7, 7, 9, 7, 5.", steps:["7 occurs three times, 5 twice"], a:"7"},
    {q:"In a pie chart, agriculture is 45 out of a total of 180. Calculate its sector angle.", steps:["(45 \u00f7 180) \u00d7 360","0.25 \u00d7 360"], a:"90\u00b0"},
    {q:"Express 25 out of 50 as a percentage.", steps:["(25 \u00f7 50) \u00d7 100"], a:"50%"},
    {q:"A price rises from L$400 to L$500. Calculate the percentage increase.", steps:["Increase = 100","(100 \u00f7 400) \u00d7 100"], a:"25%"},
    {q:"Boys number 36 and girls 24. Express the ratio in its simplest form.", steps:["36 : 24","Divide both by 12"], a:"3 : 2"},
    {q:"Find the range of 15, 22, 8, 30, 19.", steps:["Highest = 30, lowest = 8","30 \u2212 8"], a:"22"}
  ],
  apply:[
    {q:"A village has ten households: nine earn L$5 000 a month and one earns L$500 000. Which average best describes a typical household, and why?", a:"The median of L$5 000, because the single very high income distorts the mean upward and makes it unrepresentative of nine households out of ten."},
    {q:"A shopkeeper wants to know which size of shoe to order most. Which measure should she use?", a:"The mode, because it identifies the size that occurs most often among her customers."},
    {q:"Why can a graph with a broken vertical axis mislead the reader?", a:"Cutting the axis exaggerates small differences, making a modest change appear dramatic. The reader must always check where the scale begins."},
    {q:"A government reports that average income has risen while most people feel poorer. How is this possible?", a:"If gains are concentrated among a few very high earners, the mean rises while the median — the typical income — may be unchanged or falling."},
    {q:"You must show the share of Liberia's exports made up by iron ore, rubber, gold and others. Which chart is best and why?", a:"A pie chart, because it displays each commodity as a proportion of total exports so the relative shares are seen at once."}
  ],
  activities:[
    "Determine the uses and importance of the basic tools of economic analysis",
    "Conduct a class survey on a social issue and tabulate the results",
    "Construct frequency distribution tables from raw data",
    "Calculate the arithmetic mean, median and mode of given data sets",
    "Draw line graphs, bar charts, pie charts and pictograms from the same data and compare their usefulness",
    "Interpret social data and present conclusions to the class"
  ],
  materials:[
    "Primary text: Stanlake's Economics by S. J. Grant, 8th edition",
    "Essential Economics for Senior Secondary Schools (Cole Esan Ande), 5th edition, 2017",
    "Graph paper, rulers, protractors and compasses",
    "Calculators",
    "Published statistical data on Liberia"
  ],
  assessment:["Presentation, individual and group","Written assignment","Quiz","Data handling exercise","Written test"]
},
{
  grade:10, period:"VI", sem:"Two", icon:"🏢",
  title:"Types of Business Organisations",
  subtitle:"Sole proprietorship, partnership, corporations, cooperatives and joint ventures, and their sources of finance",
  outcomes:[
    "Learners are able to demonstrate understanding of how businesses are established and operated"
  ],
  objectives:[
    "Define sole proprietorship, partnership, corporation, joint-stock company, cooperative, statutory corporation and joint venture",
    "State the main features of each type of business organisation",
    "Explain the advantages and disadvantages of each",
    "Explain the sources of funding available to each type of business"
  ],
  note:"A <b>sole proprietorship</b> is owned by one person with <b>unlimited liability</b> — personal assets can be taken to pay business debts. A <b>partnership</b> has two or more owners. A <b>corporation</b> or limited company is a separate <b>legal person</b> whose shareholders have <b>limited liability</b>, risking only what they invested. A <b>cooperative</b> is owned by its members, who share the surplus.",
  study:[
    /* ---- course text: Semester Two, Period VI — Types of Business Organisations (guide pp. 12-13) ---- */
    {k:"h3", t:"The Types of Business Organisation"},
    {k:"bul", items:[
      "**Sole proprietorship** — a business owned by one person, who takes all the profit and bears all the loss",
      "**Partnership** — a business owned by two to twenty persons who pool capital and share profit by agreement",
      "**Corporation (limited company)** — a separate legal person owned by shareholders, whose liability is limited to their shares",
      "**Joint-stock company** — a company whose capital is divided into transferable shares held by many investors",
      "**Cooperative** — an association of members who pool resources and share the surplus among themselves",
      "**Statutory corporation** — a public enterprise created by an Act of government to provide an essential service",
      "**Joint venture** — a business undertaking shared between two or more independent parties for a common project"]},
    {k:"rule"},
    {k:"h3", t:"Main Features, Advantages and Disadvantages"},
    {k:"p", t:"The **sole proprietorship** is easy to start, quick to decide and keeps all profit — but it has unlimited liability, limited capital, no continuity beyond the owner and bears all risk alone. The **partnership** brings more capital and shared skill, and partners share losses — yet partners bear joint unlimited liability, disagreements arise, and the death of a partner can dissolve the firm. The **corporation** has limited liability, huge capital from selling shares, continuity of life and professional management — but it is costly to form, double-taxed, heavily regulated, and its ownership is separated from control, so shareholders may lose voice. Weigh each form: a market table, a law practice, a bank, a farmers' cooperative."},
    {k:"rule"},
    {k:"h3", t:"Sources of Capital"},
    {k:"p", t:"The sole proprietor relies on **personal savings, family loans, trade credit and ploughed-back profit**; the partnership adds the partners' contributions; the corporation raises capital by **issuing shares and debentures** and by bank borrowing; the cooperative draws **members' dues and deposits**; the statutory corporation is financed by **government subvention and its own trading surplus**; the joint venture by the parties' agreed contributions. Research the funding of businesses in your own community."},
    {k:"rule"},
    {k:"h3", t:"Business Enterprise Policy"},
    {k:"p", t:"Four policies change who owns and runs business. **Privatization** transfers a public enterprise to private owners, seeking efficiency. **Commercialization** makes a public enterprise operate on commercial lines, charging economic prices without a change of ownership. **Indigenization** transfers ownership to citizens of the country, building local control. **Nationalization** transfers private business to the state, usually for strategic reasons. Examine the impact of each policy on the Liberian economy — on employment, prices, investment and public revenue."},
    {k:"h3", t:"The Forms Compared Side by Side"},
    {k:"p", t:"This table is the whole of the unit and is asked in almost every paper. Learn the columns as well as the rows, because the question usually asks for two forms compared rather than one described."},
    {k:"table", head:["Feature","Sole proprietorship","Partnership","Limited company (corporation)","Cooperative","Statutory corporation"], rows:[
     ["Number of owners","One","Two to twenty","Two to unlimited shareholders","Members who subscribe","The state"],
     ["Legal personality","None — owner and business are one","Ordinary partnership: none; limited partnership: partly","Yes — the company sues and is sued in its own name","Yes","Yes — created by Act"],
     ["Liability","Unlimited — the owner's private property answers for the debts","Unlimited and joint (limited for a sleeping partner who registers)","Limited to the amount unpaid on the shares","Limited to the member's share","The state stands behind it"],
     ["Capital","Small — savings, family loans, trade credit","More — the partners' pooled contributions","Large — shares and debentures sold to the public","Moderate — members' dues and deposits","Large — government subvention and trading surplus"],
     ["Management","The owner decides alone","Partners share by agreement, which can deadlock","Shareholders elect directors, who hire managers","One member one vote, elected officers","A board appointed by government"],
     ["Continuity","Ends with the owner's death or retirement","May dissolve on a partner's death","Unaffected by the death of a shareholder","Continues while the society exists","Continues while the Act stands"],
     ["Profit","All to the owner","Shared by the partnership deed","Dividends to shareholders; the rest retained","Surplus shared by members in proportion to their dealings","Surplus to the enterprise or to the treasury"],
     ["Secrecy","Complete","Fairly complete","Accounts must be published","Members only","Accounts go to the Legislature"],
     ["Best suited to","A market table, a barber's shop, a small farm","A law or accounting practice, a trading firm","A bank, a brewery, a concession","Farmers' marketing, credit unions, transport unions","Power, water, ports, broadcasting"]]},
    {k:"rule"},
    {k:"h3", t:"The Partnership Deed and Why It Matters"},
    {k:"p", t:"A **partnership deed** is the written agreement between the partners. Without one, the law applies default rules that suit nobody: profit and loss are shared **equally** whatever the capital contributed, no partner receives a **salary**, no **interest** is paid on capital or on drawings, and no new partner may be admitted without the consent of all. The deed should therefore settle, at minimum: the **name** and the **nature** of the business; the **capital** each partner contributes; the **profit and loss sharing ratio**; **interest on capital** and **on drawings**; **partners' salaries**; the **duties** of each; the procedure for **admitting** a new partner and for **retirement or death**; the method of **valuing goodwill**; and how **disputes** are settled — usually by arbitration. Its advantages are certainty, the prevention of disputes, and a record that stands in law; its absence is the commonest cause of a partnership's collapse."},
    {k:"p", t:"Distinguish the **active (ostensible) partner**, who manages and is known to the public; the **sleeping (dormant) partner**, who contributes capital, takes a share of profit and may register to limit his liability; the **nominal partner**, who lends his name without capital or profit and is nevertheless liable to outsiders who trusted it; and the **secret partner**, who takes a share but is not disclosed. Liability in an ordinary partnership is **unlimited and joint**, so each partner's private property answers for the debts of the firm — which is precisely why the limited company was invented."},
    {k:"rule"},
    {k:"h3", t:"The Limited Company and the Documents It Needs"},
    {k:"p", t:"A **private limited company (Ltd)** may not invite the public to buy its shares, restricts their transfer, and has at most fifty members. A **public limited company (PLC)** may invite the public to subscribe and its shares are freely transferable, so it can raise the largest capital of any form. The documents of formation: the **memorandum of association**, which states the company's name, its registered office, its **objects** (what it may lawfully do), the liability of its members and its authorised capital; and the **articles of association**, the internal rules for meetings, directors, votes and dividends. On registration the company receives a **certificate of incorporation**, and from that moment it has **separate legal personality** — it can own property, sue and be sued, and continues though every shareholder dies. A public company seeking public money issues a **prospectus** setting out its history, its directors, its accounts and the terms of the offer."},
    {k:"p", t:"The company's **sources of capital** are the ones the paper asks for by name. **Shares (equity)**: the owners' money, carrying a vote and a dividend that is paid only if profit allows, so it is the riskiest money and the cheapest for the company since it need never be repaid. **Debentures (loan stock)**: borrowed money on which a fixed interest is paid whether or not there is profit, repayable on a stated date, and ranking **before** shareholders if the company fails. **Retained profit (ploughed back)**: profit not distributed as dividend — the cheapest source of all, needing no issue and paying no interest. Then **bank loans and overdrafts**, **trade credit** from suppliers, **hire purchase and leasing**, and **government or development-bank finance** for the long-term project."},
    {k:"rule"},
    {k:"h3", t:"Sources of Capital by Period"},
    {k:"table", head:["Period","Sources","Used for"], rows:[
     ["Short term (under a year)","Trade credit, bank overdraft, cash credit, loans from friends and family, advances from customers","Wages, raw materials, day-to-day trading"],
     ["Medium term (one to five years)","Bank term loans, hire purchase, leasing of equipment, credit from suppliers of machinery","Vehicles, small machines, shop fittings"],
     ["Long term (over five years)","Shares, debentures, retained profit, development-bank loans, mortgages, government grants","Land, buildings, heavy plant, a concession"]]},
    {k:"rule"},
    {k:"h3", t:"Business Enterprise Policy Applied to Liberia"},
    {k:"p", t:"The four policies are examined for their effect on **employment, prices, investment and public revenue**, and each can be illustrated from Liberian experience. **Privatization** — selling a state enterprise to private owners — was pursued across West Africa from the 1980s under structural adjustment: the aim is efficiency, an end to the drain on the treasury and fresh private capital; the risks are job losses, higher prices where the buyer becomes a monopolist, and the loss of a service the state can no longer direct. **Commercialization** — making a state enterprise trade on commercial lines, charging prices that cover its costs, while ownership stays public — was the commoner Liberian choice for the utilities, since a service too essential to sell can at least be made to pay its way. **Indigenization** — transferring ownership to Liberian citizens — builds local control and local profit, but can frighten the foreign capital and the foreign management the economy still needs. **Nationalization** — transferring private business to the state — protects a strategic industry and can end exploitation, but brings the risk of political management, of a loss of the efficiency motive and of a burden on the budget. A full answer weighs both sides and then states which policy suits which enterprise — the market trader needs none of them; the power utility needs all four considered."},
    {k:"rule"},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Writing a partnership's maximum as **twenty partners for any partnership**. The limit of twenty applies to ordinary trading partnerships; a limited liability partnership and certain professional firms are treated differently.",
      "Saying a **shareholder owns the company's property**. He owns shares; the company owns the property — that is what separate legal personality means.",
      "Confusing **shares with debentures**. A shareholder is an owner paid a dividend out of profit; a debenture holder is a lender paid a fixed interest whether or not there is profit.",
      "Writing **privatization** for **commercialization**. Privatization changes ownership; commercialization changes only the way the enterprise is run.",
      "Forgetting **unlimited liability** as the sole trader's chief disadvantage — it is the mark the question is set for.",
      "Listing **cooperatives** as profit-maximising. A cooperative exists to serve its members; the surplus is returned in proportion to their dealings, not to their capital alone."]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**List the types of business organisation** and describe the main features of each — ownership, liability, capital, management, continuity",
      "**Compare two forms directly** — most often sole trader against limited company, or partnership against limited company; a table earns the marks fastest",
      "**State the advantages and disadvantages** of a named form, at least three of each, with liability and capital always among them",
      "**Explain the partnership deed** and what it should contain — the profit ratio, interest on capital, salaries, admission, retirement and disputes",
      "**Distinguish shares from debentures**, and list the sources of capital by period — short, medium and long term",
      "**Define privatization, commercialization, indigenization and nationalization** — one sentence each, saying what changes and what does not",
      "**Examine the effect of a business enterprise policy on the Liberian economy** — employment, prices, investment and public revenue, with both sides weighed"
    ]}

  ],

  focus:[
    "Definitions of the types of business organisation",
    "Main features of sole proprietorship, partnership and corporation",
    "Joint-stock companies, cooperatives, statutory corporations and joint ventures",
    "Advantages and disadvantages of each type",
    "Sources of funding for each type",
    "Limited and unlimited liability"
  ],
  terms:[
    {t:"sole proprietorship", d:"a business owned and controlled by one person", x:"Most market traders are sole proprietors."},
    {t:"partnership", d:"a business owned by two or more persons sharing profits and losses", x:"A partnership needs a written agreement."},
    {t:"corporation", d:"a business registered as a separate legal person from its owners", x:"A corporation can sue and be sued in its own name."},
    {t:"joint-stock company", d:"a company whose capital is divided into shares held by many owners", x:"A joint-stock company can raise large capital."},
    {t:"cooperative", d:"a business owned and run by its members for their mutual benefit", x:"Farmers form a cooperative to market their crops."},
    {t:"statutory corporation", d:"a public body created by an Act of the legislature", x:"A statutory corporation runs a public utility."},
    {t:"joint venture", d:"an agreement between two firms to run a project together", x:"A joint venture shares cost and risk."},
    {t:"limited liability", d:"owners lose only what they invested if the business fails", x:"Limited liability protects shareholders' personal property."},
    {t:"unlimited liability", d:"owners are personally liable for all business debts", x:"Unlimited liability puts the owner's house at risk."},
    {t:"shareholder", d:"a person owning shares in a company", x:"A shareholder receives a dividend."},
    {t:"dividend", d:"the share of profit paid to shareholders", x:"The dividend depends on profits made."},
    {t:"share capital", d:"money raised by issuing shares", x:"Share capital funds expansion."},
    {t:"debenture", d:"a long-term loan to a company at fixed interest", x:"A debenture holder is a creditor, not an owner."},
    {t:"partnership deed", d:"the written agreement setting out partners' rights and duties", x:"The partnership deed prevents disputes."},
    {t:"sleeping partner", d:"a partner who contributes capital but takes no active part", x:"A sleeping partner shares in the profit."},
    {t:"retained profit", d:"profit kept in the business rather than distributed", x:"Retained profit is a cheap source of finance."},
    {t:"overdraft", d:"a short-term bank facility to draw beyond the account balance", x:"An overdraft covers a temporary cash shortage."},
    {t:"collateral", d:"an asset pledged as security for a loan", x:"The bank required land as collateral."},
    {t:"liquidation", d:"the winding up of a company and sale of its assets", x:"Liquidation follows insolvency."},
    {t:"board of directors", d:"the group elected by shareholders to manage a company", x:"The board of directors appoints managers."}
  ],
  facts:[
    {q:"State four features of a sole proprietorship.", a:"It is owned and controlled by one person; the owner takes all the profit and bears all the losses; there is unlimited liability; and it has no separate legal existence from the owner."},
    {q:"State three advantages and three disadvantages of a sole proprietorship.", a:"Advantages: easy and cheap to set up, decisions are quick, and the owner keeps all the profit. Disadvantages: unlimited liability, limited capital for expansion, and the business usually ends with the owner's death or illness."},
    {q:"State three advantages of a partnership over a sole proprietorship.", a:"More capital can be raised from several partners; the burden of management and risk is shared; and partners bring different skills and experience to the business."},
    {q:"State three disadvantages of a partnership.", a:"Partners generally have unlimited liability; disagreements between partners can paralyse the business; and each partner is bound by the acts of the others."},
    {q:"What is limited liability and why is it important?", a:"It means the owners can lose only the amount they invested, not their personal property. It encourages people to invest in businesses they do not manage, allowing large capital to be raised."},
    {q:"State four features of a corporation.", a:"It is a separate legal person from its owners; shareholders have limited liability; ownership is transferable by selling shares; and it has perpetual succession, continuing regardless of changes in ownership."},
    {q:"What is a cooperative and what is its main purpose?", a:"A business owned and controlled by its members, who use its services. Its purpose is the mutual benefit of members rather than maximum profit, and any surplus is shared among them."},
    {q:"Name four sources of finance for a small business.", a:"The owner's own savings, loans from family or friends, bank loans and overdrafts, and retained profits; trade credit from suppliers and microfinance are also common."},
    {q:"Name three additional sources of finance available to a corporation but not to a sole trader.", a:"Issuing shares to the public, issuing debentures, and raising long-term loans against the company's own assets on the strength of its size and audited accounts."},
    {q:"Why do banks often refuse loans to small Liberian traders?", a:"They usually lack collateral, keep no written accounts to prove income, and operate informally, so the bank cannot assess the risk or recover the money if the business fails."}
  ],
  tf:[
    {s:"A sole proprietor has unlimited liability.", a:"true", why:"There is no legal separation, so personal property can be taken for business debts."},
    {s:"A corporation ceases to exist when a shareholder dies.", a:"false", why:"It has perpetual succession; the shares simply pass to another owner."},
    {s:"A cooperative exists mainly to maximise profit for outside investors.", a:"false", why:"It exists for the mutual benefit of its own members, who share any surplus."},
    {s:"Partners in an ordinary partnership share profits and losses.", a:"true", why:"Both are divided according to the partnership deed."},
    {s:"A debenture holder is an owner of the company.", a:"false", why:"A debenture is a loan, so the holder is a creditor entitled to fixed interest, not a share of profit."},
    {s:"A joint venture allows two firms to share cost and risk on a project.", a:"true", why:"That is its principal purpose."},
    {s:"Retained profit is a source of finance for a business.", a:"true", why:"Profit kept in the business funds expansion without borrowing."}
  ],
  sort:{ title:"Sort these business features", groups:[
    {name:"Unlimited liability", items:["sole proprietorship","ordinary partnership"]},
    {name:"Limited liability", items:["private company","public company","corporation"]},
    {name:"Sources of finance for a small trader", items:["own savings","family loan","microfinance","trade credit"]},
    {name:"Sources of finance for a corporation", items:["share issue","debentures","bank loans","retained profit"]},
    {name:"Owned by members", items:["cooperative","credit union"]}
  ]},
  mapwork:{ title:"Comparing the forms of business", caption:"Complete the table by giving the ownership, liability and main source of capital for each.", items:[
    {p:"Sole proprietorship", f:"One owner; unlimited liability; capital from savings, family and small loans"},
    {p:"Partnership", f:"Two or more owners; usually unlimited liability; capital from partners' contributions"},
    {p:"Private company", f:"Shareholders, shares not sold to the public; limited liability; capital from members and loans"},
    {p:"Public company", f:"Many shareholders, shares traded publicly; limited liability; capital from share and debenture issues"},
    {p:"Cooperative", f:"Owned by its members; limited liability; capital from member subscriptions and surplus"},
    {p:"Statutory corporation", f:"Owned by the state under an Act; state bears liability; capital from government funds"},
    {p:"Joint venture", f:"Two or more firms jointly; liability as agreed in the contract; capital contributed by each partner firm"}
  ]},
  casestudy:{ title:"From market stall to company",
    text:"Bendu began selling soap from a table in Waterside market using 15 000 Liberian dollars of her own savings. Within two years she supplied ten small shops and needed a delivery van, but no bank would lend to her because she kept no records and had no collateral. She took in her cousin Sando as a partner, who contributed 200 000 dollars and handled the accounts. Business grew, but when Sando ordered goods that did not sell, Bendu found she was liable for the whole debt and nearly lost her house. On the advice of a lawyer they registered a limited company, issued shares to four investors, and raised 1.5 million dollars. The company now employs eleven people, though Bendu must answer to a board and share the profit.",
    questions:[
      {q:"What form of business did Bendu operate at first, and what was its main limitation?", a:"A sole proprietorship. Its main limitation was inability to raise capital: she had only her own savings and no access to bank credit."},
      {q:"Why did the bank refuse to lend to her?", a:"She kept no written records to prove her income and had no collateral to secure the loan, so the bank could not assess or recover the risk."},
      {q:"Explain the danger Bendu faced when Sando's order failed.", a:"In an ordinary partnership liability is unlimited and each partner is bound by the acts of the others, so she was personally liable for the whole debt and her house was at risk."},
      {q:"State two benefits the company form brought.", a:"Limited liability protected the owners' personal property, and issuing shares raised 1.5 million dollars, far more capital than partnership could provide."},
      {q:"State two costs of incorporating that Bendu now bears.", a:"She must answer to a board of directors so loses sole control, and she must share the profit with the other shareholders; there are also legal and audit requirements."}
    ]},
  project:{ title:"Business organisation enquiry",
    brief:"Investigate two real businesses of different legal forms in your community.",
    steps:[
      "Identify one sole proprietorship and one larger business such as a company or cooperative.",
      "With permission, find out how each was started and where its capital came from.",
      "Record the number of owners, who makes decisions and who bears the losses.",
      "List two advantages and two disadvantages each owner mentions.",
      "Present a comparison table and say which form you would choose and why."
    ],
    criteria:["Two genuinely different business forms studied","Sources of capital accurately recorded","Decision making and liability correctly described","A clear comparison table","A reasoned personal conclusion"]},
  worked:[
    {q:"Three partners share profits in the ratio 3:2:1. Total profit is L$360 000. Find each share.", steps:["Total parts = 6","One part = 360 000 \u00f7 6 = 60 000","3\u00d760 000, 2\u00d760 000, 1\u00d760 000"], a:"L$180 000, L$120 000 and L$60 000"},
    {q:"A company issues 50 000 shares at L$20 each. Calculate the share capital raised.", steps:["50 000 \u00d7 20"], a:"L$1 000 000"},
    {q:"A shareholder owns 2 000 shares and the dividend is L$3 per share. Find his dividend.", steps:["2 000 \u00d7 3"], a:"L$6 000"},
    {q:"A business has revenue of L$850 000 and total costs of L$610 000. Calculate the profit.", steps:["Profit = revenue \u2212 costs","850 000 \u2212 610 000"], a:"L$240 000"},
    {q:"From that profit, calculate the profit margin as a percentage of revenue.", steps:["(240 000 \u00f7 850 000) \u00d7 100"], a:"28.2%"},
    {q:"A loan of L$500 000 carries simple interest of 12% per year. Find the interest for 2 years.", steps:["I = P \u00d7 R \u00d7 T \u00f7 100","500 000 \u00d7 12 \u00d7 2 \u00f7 100"], a:"L$120 000"},
    {q:"A cooperative of 40 members shares a surplus of L$320 000 equally. Find each member's share.", steps:["320 000 \u00f7 40"], a:"L$8 000"}
  ],
  apply:[
    {q:"A young tailor wants to expand but fears losing his house if the business fails. What form of organisation would you advise and why?", a:"A registered limited company, because limited liability confines his loss to what he has invested and protects his personal property, while also making it easier to attract investors."},
    {q:"Why might two friends starting a business still be wise to draw up a written partnership deed?", a:"It records how profits are shared, how much each contributes, how decisions are made and how the partnership may be dissolved, which prevents costly disputes later even between friends."},
    {q:"Explain why farmers in a rural county might form a cooperative rather than each selling alone.", a:"Together they can buy inputs in bulk more cheaply, hire storage and transport, bargain for a better price from buyers, and access credit — advantages no single small farmer could obtain."},
    {q:"A public company is often criticised for separating ownership from control. Explain the problem.", a:"Shareholders own the company but managers run it, and the managers may pursue their own interests such as high salaries or growth rather than the shareholders' interest in profit."},
    {q:"Suggest why the Liberian government might operate some services as statutory corporations rather than leaving them to private firms.", a:"Services such as water, ports or electricity are essential and may be natural monopolies or unprofitable in poor areas, so state operation ensures they are provided to everyone rather than only where profit is available."}
  ],
  activities:[
    "Class discussion on the various types of businesses",
    "Group presentations on the advantages and disadvantages of each type of business organisation",
    "Research the various sources of funding for sole proprietorship, partnership and corporation",
    "Interview a local business owner about how the business was started and financed",
    "Prepare a comparison chart of the forms of business organisation"
  ],
  materials:[
    "Primary text: Stanlake's Economics by S. J. Grant, 8th edition",
    "Essential Economics for Senior Secondary Schools (Cole Esan Ande), 5th edition, 2017",
    "Comprehensive Economics for Senior Secondary School (Johnson U. Anyaele, 1997)",
    "Sample business registration documents",
    "Charts comparing business organisations"
  ],
  assessment:["Presentation, individual and group","Written assignment","Quiz","Business enquiry report","Written test"]
},

/* ================================ GRADE 11 ================================ */
{
  grade:11, period:"I", sem:"One", icon:"⚖️",
  title:"Price Determination and Elasticity",
  subtitle:"Equilibrium and changes in it, price elasticity of demand and supply, income and cross elasticity, and total revenue",
  outcomes:[
    "Learners are able to demonstrate understanding of the market forces of supply and demand, analyse price elasticity of demand and supply, and determine how changes in price affect total revenue"
  ],
  objectives:[
    "Identify and explain the interaction between supply and demand in determining market price",
    "Analyse the definitions of elasticity of demand and supply",
    "Examine price elasticity of demand and determine whether demand is elastic or inelastic",
    "Calculate the price elasticity of demand using information from a demand curve",
    "Compare cross-price elasticity of demand and income elasticity of demand",
    "Analyse how changes in the price of a good affect total revenue and total expenditure"
  ],
  note:"<b>Price elasticity of demand</b> = percentage change in quantity demanded ÷ percentage change in price. If <b>PED > 1</b> demand is <b>elastic</b> and a price cut <b>raises</b> total revenue. If <b>PED < 1</b> demand is <b>inelastic</b> and a price rise <b>raises</b> total revenue. If <b>PED = 1</b> it is <b>unitary</b> and revenue is unchanged. The sign is normally negative but the magnitude is what matters.",
  study:[
    /* ---- course text: Semester One, Period I — Price Determination and Elasticity (guide pp. 14-15) ---- */
    {k:"h3", t:"How the Market Sets the Price"},
    {k:"p", t:"Price is determined by the **interaction of supply and demand**. Where the two curves cross, the **equilibrium price and quantity** are established; below it a **shortage** bids the price up, above it a **surplus** drags it down. A **change in equilibrium** follows whenever demand or supply shifts: a rise in demand raises both price and quantity; a rise in supply raises quantity but lowers price; a fall works the opposite way. Trace each shift on a diagram and read off the new equilibrium."},
    {k:"rule"},
    {k:"h3", t:"Elasticity Defined"},
    {k:"p", t:"**Elasticity** measures how strongly one economic variable responds to another. The **price elasticity of demand (PED)** is the responsiveness of quantity demanded to a change in price. The **price elasticity of supply (PES)** is the responsiveness of quantity supplied to a change in price. **Income elasticity of demand** measures the response of demand to a change in consumer income — positive for normal goods, negative for inferior goods. **Cross-price elasticity** measures the response of demand for one good to a price change in another — positive between substitutes, negative between complements. Point out how each differs from the others before calculating anything."},
    {k:"rule"},
    {k:"h3", t:"Calculating Elasticity"},
    {k:"p", t:"**PED = percentage change in quantity demanded ÷ percentage change in price**, and likewise for supply, income and cross elasticities. Read pairs of points from a demand or supply curve and compute the value. Worked example: a price rise from 40 dollars to 50 dollars (a 25 % rise) lowers quantity demanded from 200 to 150 units (a 25 % fall), so PED = 25 ÷ 25 = **1 (unitary)**. Judge every result: demand is **elastic** if the value exceeds 1, **inelastic** if less than 1, and **unitary** if exactly 1 — the negative sign of demand is customary, and it is the size that matters."},
    {k:"rule"},
    {k:"h3", t:"Elasticity, Total Revenue and Total Expenditure"},
    {k:"p", t:"**Total revenue = price × quantity** (and equals the buyers' total expenditure). When demand is **elastic**, a price cut raises total revenue and a price rise lowers it; when demand is **inelastic**, a price rise raises total revenue and a price cut lowers it; when demand is **unitary**, revenue is unchanged. A business therefore studies elasticity before changing its price — and the same logic governs the effect of supply elasticity on revenue. Visit a local business centre to investigate its revenue (sales) and profit."},
    {k:"rule"},
    {k:"h3", t:"The Determinants of Elasticity"},
    {k:"p", t:"Demand for a good is more elastic when close **substitutes** exist, when the good takes a large share of the consumer's budget, when it is a **luxury** rather than a necessity, and when buyers have time to adjust. Supply is more elastic when producers hold spare capacity, can store the good, can switch production easily, and when time is long. Calculate the elasticity of a good from a knowledge of its determinants."},
    {k:"h3", t:"The Four Elasticities Distinguished"},
    {k:"p", t:"Every calculation question in this unit is one of four, and the first mark goes to naming the right one. **Price elasticity of demand (PED)** — how quantity demanded responds to a change in the good's **own price**. **Price elasticity of supply (PES)** — how quantity supplied responds to a change in price. **Income elasticity of demand (YED)** — how demand responds to a change in **consumer income**. **Cross elasticity of demand (XED)** — how demand for one good responds to a change in the price of **another** good. All four have the same shape: **percentage change in quantity ÷ percentage change in the variable concerned**, and all four are computed the same way."},
    {k:"table", head:["Elasticity","Formula","Positive value means","Negative value means"], rows:[
     ["Price elasticity of demand","% change in quantity demanded ÷ % change in own price","Rare — a Giffen or Veblen good","Normal: the usual case (the sign is ignored and the size judged)"],
     ["Price elasticity of supply","% change in quantity supplied ÷ % change in price","The normal case — supply slopes upward","Impossible for an ordinary supply curve"],
     ["Income elasticity","% change in quantity demanded ÷ % change in income","A normal good (and above 1 a luxury)","An inferior good — demand falls as income rises"],
     ["Cross elasticity","% change in demand for X ÷ % change in price of Y","X and Y are substitutes","X and Y are complements"]]},
    {k:"rule"},
    {k:"h3", t:"Four Calculations Worked"},
    {k:"num", items:[
      "**Price elasticity of demand.** The price of a bag of rice rises from L$1 000 to L$1 200 — a rise of 200 ÷ 1 000 = **20 %**. Quantity demanded falls from 300 to 270 bags — a fall of 30 ÷ 300 = **10 %**. PED = 10 ÷ 20 = **0.5, inelastic**. Confirm the verdict by total revenue: before, 1 000 × 300 = **L$300 000**; after, 1 200 × 270 = **L$324 000**. Revenue **rose** when the price rose, which is exactly what inelastic demand predicts — the quantity fell by a smaller percentage than the price rose.",
      "**An elastic case.** The price of imported cloth falls from L$500 to L$400 a yard — a fall of 100 ÷ 500 = **20 %**. Quantity demanded rises from 200 to 320 yards — a rise of 120 ÷ 200 = **60 %**. PED = 60 ÷ 20 = **3.0, elastic**. Total revenue moves from 500 × 200 = L$100 000 to 400 × 320 = **L$128 000** — it **rises**, exactly as the rule predicts for an elastic demand when price falls.",
      "**An inelastic case.** The price of salt rises from L$50 to L$100 — a rise of **100 %**. Quantity demanded falls from 400 to 360 units — a fall of 40 ÷ 400 = **10 %**. PED = 10 ÷ 100 = **0.1, highly inelastic**. Total revenue rises from L$20 000 to **L$36 000**. Salt is a necessity with no substitute and takes a trivial share of the budget, so buyers go on buying — which is why governments tax such goods.",
      "**Cross elasticity.** The price of petrol rises by **25 %** and the demand for motorbike taxis falls by **15 %**. XED = 15 ÷ 25 = **0.6 — but negative**, since the fall follows the rise, so XED = **−0.6**. A negative cross elasticity means the two goods are **complements**. Had the demand for kekeh rides **risen** by 15 % instead, XED would be **+0.6** and the two would be **substitutes**.",
      "**Income elasticity.** A family's income rises from L$10 000 to L$12 000 — a rise of **20 %** — and its demand for imported rice rises from 4 to 5 bags, a rise of **25 %**. YED = 25 ÷ 20 = **+1.25**: a **normal good**, and since the value exceeds 1, a **luxury** (or at least a superior good whose share of the budget rises with income). If the same rise in income had **reduced** the demand for cassava by 10 %, YED for cassava = −10 ÷ 20 = **−0.5**, an **inferior good**."]},
    {k:"rule"},
    {k:"h3", t:"The Total Revenue Test"},
    {k:"p", t:"Where the figures for a calculation are not given, the paper asks for the **total revenue test**, and it is the cleanest way to state the relation. **Total revenue (TR) = price × quantity**, and equals the buyers' total expenditure."},
    {k:"table", head:["Demand is","A price rise does to TR","A price cut does to TR","Why"], rows:[
     ["Elastic (PED > 1)","Falls","Rises","Quantity changes by a larger percentage than price"],
     ["Unitary (PED = 1)","Unchanged","Unchanged","The two percentage changes are equal"],
     ["Inelastic (PED < 1)","Rises","Falls","Quantity changes by a smaller percentage than price"]]},
    {k:"p", t:"Apply it as a businessman would: a trader whose good has many substitutes — cloth, soft drinks — should **cut** his price to raise revenue; a trader selling a necessity with no substitute — salt, kerosene in a shortage — should **raise** it. The same logic governs government: a tax on an inelastic good raises revenue and distorts little, which is why duties fall on fuel, tobacco and drink. And the **government and the farmer**: because the demand for food is inelastic, a bumper harvest that raises quantity by 30 % may raise revenue by only 5 % — the farmer's income falls in a good year, which is the economic case for storage, for export and for a support price."},
    {k:"rule"},
    {k:"h3", t:"Determinants of Elasticity, Applied"},
    {k:"p", t:"State the determinant, then apply it to a named good — a bare list scores half."},
    {k:"bul", items:[
      "**The number of close substitutes.** Rice has cassava, gari and imported rice against it, so its demand is fairly elastic; salt has none, so its demand is inelastic.",
      "**The proportion of income spent.** A bag of rice takes a large share of a poor household's income, so buyers respond strongly to its price; a box of matches takes almost none, so they do not respond at all.",
      "**Necessity or luxury.** Medicine, water and staple food are necessities — inelastic. Imported cloth, soft drinks and air travel are luxuries — elastic.",
      "**Time.** In the short run a commuter must pay the higher fare; in the long run he moves nearer work or changes his trade. Demand is always more elastic the longer the period allowed for adjustment.",
      "**Habit and addiction.** Tobacco and kola are bought whatever the price, so habit makes demand inelastic.",
      "**Whether the good is durable and its purchase can be postponed.** A motorbike can wait, so its demand is elastic; the daily bread cannot.",
      "**For supply: spare capacity, storability, factor mobility and time.** A factory with idle machines can raise output at once — elastic supply; a rice crop in the ground cannot be increased this season — inelastic supply. Perishables spoil, so their supply is inelastic; a stored grain can be held and released, so its supply is more elastic."]},
    {k:"rule"},
    {k:"h3", t:"Price Elasticity of Supply in Numbers"},
    {k:"p", t:"The same method serves supply. The price of palm oil rises from L$300 to L$360 a gallon — a rise of 60 ÷ 300 = **20 %** — and the quantity offered rises from 500 to 650 gallons, a rise of 150 ÷ 500 = **30 %**. PES = 30 ÷ 20 = **1.5, elastic supply**: producers can expand fairly easily, perhaps because the fruit is already ripening and the mills have spare capacity. Supply is **perfectly inelastic (PES = 0)** where output cannot change at all whatever the price — land, a harvest already in the ground, seats in a full lorry; the supply curve is then a **vertical line**. Supply is **perfectly elastic (PES = infinity)** where any quantity can be had at one price, and the curve is **horizontal** — the textbook case of a small firm facing a large market at the ruling price."},
    {k:"rule"},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Dividing the **change** by the **new** value. The percentage change is always computed on the **original** value: (new − old) ÷ old.",
      "Reporting **PED as negative and concluding** from the sign. By convention the sign is ignored and the **size** judged; the sign carries meaning only for income and cross elasticity.",
      "Confusing a **movement along the demand curve with a shift of it** when discussing elasticity — elasticity is measured along one curve.",
      "Saying revenue **always** rises when price rises. It rises only when demand is inelastic.",
      "Reading a **positive cross elasticity as complementary**. Positive means **substitutes**; negative means complements.",
      "Treating **YED of +0.5 as a luxury**. It is a normal good but a **necessity**; only a value above 1 marks a luxury."]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Define price elasticity of demand and of supply** — the responsiveness of quantity to a change in price, stated as a ratio of percentage changes",
      "**Calculate PED, PES, YED or XED** from given figures — the marks go to the two percentage changes, the division, the value and the verdict (elastic, unitary, inelastic)",
      "**Interpret the sign** of income and cross elasticity — normal or inferior; substitutes or complements",
      "**Apply the total revenue test** and explain why a price rise helps one seller and harms another",
      "**State and apply the determinants** of elasticity — substitutes, share of income, necessity, time, habit for demand; capacity, storability, factor mobility and time for supply",
      "**Explain the shapes** — the vertical perfectly inelastic supply curve and the horizontal perfectly elastic demand curve, with a real example of each",
      "**Relate elasticity to policy** — why governments tax inelastic goods and why a bumper harvest can impoverish the farmer"
    ]}

  ],

  focus:[
    "Determination of price by supply and demand; equilibrium price and quantity",
    "Shortage, surplus and changes in equilibrium",
    "Definitions of price elasticity of demand and supply",
    "Income elasticity and cross-price elasticity",
    "Calculation of the elasticities",
    "Degrees of elasticity and the factors determining them",
    "The relationship between elasticity and total revenue"
  ],
  terms:[
    {t:"elasticity", d:"the responsiveness of one variable to a change in another", x:"Elasticity measures sensitivity."},
    {t:"price elasticity of demand", d:"percentage change in quantity demanded divided by percentage change in price", x:"Price elasticity of demand guides pricing decisions."},
    {t:"elastic demand", d:"demand that changes proportionally more than price, PED greater than 1", x:"Luxuries usually have elastic demand."},
    {t:"inelastic demand", d:"demand that changes proportionally less than price, PED less than 1", x:"Salt has inelastic demand."},
    {t:"unitary elasticity", d:"quantity changes in exactly the same proportion as price, PED equal to 1", x:"With unitary elasticity revenue is unchanged."},
    {t:"perfectly elastic demand", d:"any rise in price reduces quantity demanded to zero", x:"Perfectly elastic demand gives a horizontal curve."},
    {t:"perfectly inelastic demand", d:"quantity demanded does not change at all when price changes", x:"Perfectly inelastic demand gives a vertical curve."},
    {t:"price elasticity of supply", d:"responsiveness of quantity supplied to a change in price", x:"Agricultural supply is inelastic in the short run."},
    {t:"income elasticity of demand", d:"responsiveness of demand to a change in consumer income", x:"Income elasticity is negative for inferior goods."},
    {t:"cross elasticity of demand", d:"responsiveness of demand for one good to the price of another", x:"Cross elasticity is positive for substitutes."},
    {t:"total revenue", d:"price multiplied by quantity sold", x:"Total revenue depends on elasticity."},
    {t:"total expenditure", d:"the total amount consumers spend on a good", x:"Total expenditure equals the seller's total revenue."},
    {t:"normal good", d:"a good whose demand rises with income", x:"Meat is a normal good."},
    {t:"inferior good", d:"a good whose demand falls as income rises", x:"Demand for an inferior good has negative income elasticity."},
    {t:"substitute", d:"a good that can replace another in consumption", x:"Substitutes have positive cross elasticity."},
    {t:"complement", d:"a good consumed together with another", x:"Complements have negative cross elasticity."},
    {t:"necessity", d:"a good that must be bought whatever the price", x:"Necessities have inelastic demand."},
    {t:"luxury", d:"a good that can be postponed or done without", x:"Luxuries have elastic demand."}
  ],
  facts:[
    {q:"Give the formula for price elasticity of demand.", a:"PED = percentage change in quantity demanded divided by percentage change in price."},
    {q:"State the five degrees of price elasticity of demand.", a:"Perfectly elastic (infinity), elastic (greater than 1), unitary (equal to 1), inelastic (less than 1) and perfectly inelastic (zero)."},
    {q:"State four factors determining price elasticity of demand.", a:"The availability of close substitutes; whether the good is a necessity or a luxury; the proportion of income spent on it; and the time period allowed for consumers to adjust."},
    {q:"How does elasticity affect the decision to raise or lower price?", a:"If demand is elastic, lowering price raises total revenue because quantity rises proportionally more. If demand is inelastic, raising price raises total revenue because quantity falls proportionally less."},
    {q:"Give the formula for income elasticity of demand and interpret its sign.", a:"Percentage change in quantity demanded divided by percentage change in income. A positive value indicates a normal good; a negative value indicates an inferior good."},
    {q:"Give the formula for cross elasticity of demand and interpret its sign.", a:"Percentage change in quantity demanded of good A divided by percentage change in the price of good B. A positive value indicates substitutes; a negative value indicates complements."},
    {q:"Why is the supply of agricultural produce usually inelastic in the short run?", a:"Crops take a whole season to grow, so however much the price rises farmers cannot increase output until the next harvest."},
    {q:"State three factors determining price elasticity of supply.", a:"The time period available; the ease of storing the product; and the availability of spare productive capacity and mobility of factors."},
    {q:"Why do governments tax goods with inelastic demand such as tobacco and fuel?", a:"Because quantity demanded falls only slightly when price rises, so revenue collected remains high and predictable."},
    {q:"What is the relationship between total revenue and total expenditure?", a:"They are the same sum of money viewed from two sides: what consumers spend on a good is exactly what sellers receive as revenue."}
  ],
  tf:[
    {s:"If PED is greater than 1, demand is elastic.", a:"true", why:"Quantity changes proportionally more than price."},
    {s:"Raising the price of a good with elastic demand increases total revenue.", a:"false", why:"Quantity falls proportionally more than price rises, so revenue falls."},
    {s:"Salt normally has inelastic demand.", a:"true", why:"It is a necessity with no close substitute and takes a tiny share of income."},
    {s:"Substitutes have negative cross elasticity of demand.", a:"false", why:"Substitutes have positive cross elasticity; complements have negative."},
    {s:"An inferior good has negative income elasticity of demand.", a:"true", why:"Demand for it falls as consumer income rises."},
    {s:"Supply is generally more elastic in the long run than the short run.", a:"true", why:"Given time, producers can build capacity and switch resources into the industry."},
    {s:"Elasticity has the same value at every point on a straight-line demand curve.", a:"false", why:"Elasticity varies along it, being elastic at high prices and inelastic at low prices."}
  ],
  sort:{ title:"Sort these goods and values", groups:[
    {name:"Usually elastic demand", items:["imported perfume","restaurant meals","branded clothing","air travel"]},
    {name:"Usually inelastic demand", items:["salt","medicine","kerosene","basic rice"]},
    {name:"Positive cross elasticity", items:["rice and cassava","butter and margarine","tea and coffee"]},
    {name:"Negative cross elasticity", items:["cars and petrol","printers and ink","bread and butter"]},
    {name:"Negative income elasticity", items:["inferior goods","cheapest staple grain"]}
  ]},
  mapwork:{ title:"Elasticity and total revenue", caption:"Complete the table by stating the effect on total revenue.", items:[
    {p:"Elastic demand, price falls", f:"Quantity rises proportionally more, so total revenue rises"},
    {p:"Elastic demand, price rises", f:"Quantity falls proportionally more, so total revenue falls"},
    {p:"Inelastic demand, price falls", f:"Quantity rises proportionally less, so total revenue falls"},
    {p:"Inelastic demand, price rises", f:"Quantity falls proportionally less, so total revenue rises"},
    {p:"Unitary elasticity, price changes", f:"Quantity changes in the same proportion, so total revenue is unchanged"},
    {p:"Perfectly inelastic demand", f:"Quantity unchanged, so revenue moves in direct proportion to price"},
    {p:"Perfectly elastic demand", f:"Any price rise wipes out sales entirely and revenue falls to zero"}
  ]},
  casestudy:{ title:"The minibus fare decision",
    text:"A transport owner runs minibuses from Paynesville to central Monrovia. At a fare of 60 Liberian dollars he carries 900 passengers a day, earning 54 000 dollars. He raises the fare to 75 dollars and finds he carries 810 passengers, earning 60 750 dollars. Encouraged, he raises the fare again to 120 dollars. This time passengers fall sharply to 400, because many begin walking part of the way, sharing motorbikes, or travelling only when necessary. His daily takings fall to 48 000 dollars. A rival operator then enters the route charging 70 dollars, and the first owner loses most of his remaining passengers within a week.",
    questions:[
      {q:"Calculate the price elasticity of demand for the rise from 60 to 75 dollars.", a:"Quantity change: (900 \u2212 810)/900 = \u221210%. Price change: (75 \u2212 60)/60 = +25%. PED = 10 \u00f7 25 = 0.4, so demand was inelastic."},
      {q:"Explain why his revenue rose over that first increase.", a:"Because demand was inelastic, quantity fell proportionally less than the price rose, so total revenue increased from 54 000 to 60 750 dollars."},
      {q:"Calculate the elasticity for the rise from 75 to 120 dollars and comment.", a:"Quantity change: (810 \u2212 400)/810 = \u221250.6%. Price change: (120 \u2212 75)/75 = +60%. PED = 50.6 \u00f7 60 = 0.84 — much more elastic than before, and revenue fell."},
      {q:"Why did demand become more elastic at the higher fare?", a:"At 120 dollars the fare took a much larger share of passengers' income and substitutes became worthwhile — walking, shared motorbikes and reducing journeys — so consumers could respond."},
      {q:"What effect did the rival operator have on the elasticity of demand for his service?", a:"It made demand far more elastic, because passengers now had a close substitute at a lower price and could switch easily, so he lost most of his customers."}
    ]},
  project:{ title:"Elasticity investigation in the local market",
    brief:"Estimate the price elasticity of demand for two contrasting goods.",
    steps:[
      "Choose one necessity such as rice and one luxury such as biscuits or soft drinks.",
      "Ask ten households how much of each they buy in a week at the current price.",
      "Ask how much they would buy if the price rose by half.",
      "Calculate the percentage changes and estimate the elasticity for each good.",
      "Present your results and explain why the two goods differ."
    ],
    criteria:["Two contrasting goods chosen","Ten households genuinely surveyed","Percentage changes correctly calculated","Elasticity correctly computed and classified","Sound explanation of the difference"]},
  worked:[
    {q:"Price rises 20% and quantity demanded falls 40%. Calculate PED and classify it.", steps:["PED = %\u0394Q \u00f7 %\u0394P","40 \u00f7 20 = 2","2 > 1"], a:"PED = 2, elastic"},
    {q:"Price rises from L$50 to L$60; quantity falls from 200 to 180. Calculate PED.", steps:["%\u0394Q = (20 \u00f7 200) \u00d7 100 = 10%","%\u0394P = (10 \u00f7 50) \u00d7 100 = 20%","10 \u00f7 20"], a:"PED = 0.5, inelastic"},
    {q:"Using those figures, calculate total revenue before and after.", steps:["Before: 50 \u00d7 200 = 10 000","After: 60 \u00d7 180 = 10 800"], a:"Revenue rises from L$10 000 to L$10 800"},
    {q:"Income rises 10% and demand for a good rises 25%. Calculate income elasticity and classify the good.", steps:["YED = 25 \u00f7 10","Positive and greater than 1"], a:"YED = 2.5, a normal luxury good"},
    {q:"Income rises 20% and demand for a good falls 8%. Calculate income elasticity and classify.", steps:["YED = \u22128 \u00f7 20"], a:"YED = \u22120.4, an inferior good"},
    {q:"The price of tea rises 15% and demand for coffee rises 6%. Calculate cross elasticity and classify.", steps:["XED = 6 \u00f7 15","Positive value"], a:"XED = 0.4, substitutes"},
    {q:"The price of petrol rises 10% and demand for cars falls 4%. Calculate cross elasticity and classify.", steps:["XED = \u22124 \u00f7 10","Negative value"], a:"XED = \u22120.4, complements"},
    {q:"Price rises from L$80 to L$100; quantity supplied rises from 300 to 420. Calculate PES.", steps:["%\u0394Q = (120 \u00f7 300) \u00d7 100 = 40%","%\u0394P = (20 \u00f7 80) \u00d7 100 = 25%","40 \u00f7 25"], a:"PES = 1.6, elastic supply"}
  ],
  apply:[
    {q:"A bus company wants to increase revenue. Its demand is inelastic. Should it raise or lower fares?", a:"Raise fares. With inelastic demand, passengers fall proportionally less than the price rises, so total revenue increases."},
    {q:"Why does a government wanting to reduce smoking face a difficulty when it taxes cigarettes?", a:"Demand for cigarettes is inelastic because of addiction, so a tax raises much revenue but reduces consumption only slightly — the health goal and the revenue goal pull in different directions."},
    {q:"A farmer produces a record harvest and finds his income has fallen. Explain.", a:"Demand for staple food is inelastic. The large increase in supply forces price down proportionally more than quantity rises, so total revenue falls — the paradox of the good harvest."},
    {q:"Explain why demand for a good becomes more elastic over a longer period.", a:"Given time, consumers can find substitutes, change habits and adjust equipment or contracts, so their response to a price change grows larger."},
    {q:"A shop discovers that a 10 per cent price cut raised its sales by 30 per cent. Should it cut prices further? Discuss.", a:"Elasticity is 3, so demand is elastic and revenue rose. Further cuts may raise revenue again, but the shop must check that price still covers cost per unit, since revenue is not profit."}
  ],
  activities:[
    "Group work identifying price elasticity of demand and supply, income elasticity and cross elasticity, and how each differs",
    "Pair learners to derive the elasticity formula and calculate each type from given data",
    "Calculate price elasticity from information on a demand curve",
    "Analyse how price changes affect total revenue and total expenditure",
    "Conduct a market survey to estimate elasticity for two contrasting goods"
  ],
  materials:[
    "Primary text: Stanlake's Economics by S. J. Grant, 8th edition",
    "Essential Economics for Senior Secondary Schools (Cole Esan Ande), 5th edition, 2017",
    "Comprehensive Economics for Senior Secondary School (Johnson U. Anyaele, 1997)",
    "Graph paper and calculators",
    "Local price and quantity data"
  ],
  assessment:["Presentation, individual and group","Written assignment","Quiz","Elasticity calculation exercise","Written test"]
},
{
  grade:11, period:"II", sem:"One", icon:"🏪",
  title:"Market Structures",
  subtitle:"Perfect competition, monopoly, monopolistic competition and oligopoly, and how price and output are determined",
  outcomes:[
    "Learners are able to describe the various types of market and demonstrate how prices and total revenue are determined in those markets"
  ],
  objectives:[
    "Explain the concept of a market and distinguish it from the market place",
    "Distinguish between perfect and imperfect markets",
    "Compare and contrast perfectly competitive and monopolistic markets",
    "Draw graphs to illustrate price and quantity determination under perfect competition, monopoly and oligopoly",
    "State the advantages and disadvantages of each market type"
  ],
  note:"A <b>market</b> is any arrangement bringing buyers and sellers into contact — not necessarily a physical place. Under <b>perfect competition</b> there are many buyers and sellers, a homogeneous product, free entry and perfect knowledge, so the firm is a <b>price taker</b>. A <b>monopoly</b> is a single seller with barriers to entry and is a <b>price maker</b>. An <b>oligopoly</b> has a few large interdependent firms.",
  study:[
    /* ---- course text: Semester One, Period II — Market Structures (guide p. 16) ---- */
    {k:"h3", t:"The Concept of a Market"},
    {k:"p", t:"A **market** is any arrangement that brings buyers and sellers of a good or service into contact to trade — by telephone and internet as much as by stall. Distinguish it from the **market place**, which is only the physical spot where trading happens. Market structure — how many sellers, how alike the product, how free the entry — decides how prices and total revenue are determined."},
    {k:"rule"},
    {k:"h3", t:"Perfect and Imperfect Markets"},
    {k:"p", t:"A **perfect market (perfect competition)** has many buyers and many sellers of a **homogeneous** product, free entry and exit, perfect knowledge of prices, and no single trader able to influence the market — every firm is a **price taker** selling at the ruling price. An **imperfect market** lacks one or more of these conditions; its forms are **monopolistic competition** (many sellers of slightly differentiated products), **oligopoly** (a few large, interdependent firms) and **monopoly** (a single seller protected by barriers to entry, a **price maker**)."},
    {k:"rule"},
    {k:"h3", t:"Comparing Perfect Competition and Monopolistic Competition"},
    {k:"table", head:["Feature","Perfect competition","Monopolistic competition"], rows:[
     ["Number of firms","Very many","Many"],
     ["Product","Homogeneous — identical","Differentiated by brand, quality or location"],
     ["Price control","None — price taker","Some — each firm sets its own price within a range"],
     ["Entry","Completely free","Free in the long run"],
     ["Advertising","None needed","Heavy — to stress the difference"],
     ["Demand curve facing the firm","Perfectly elastic","Downward sloping"]]},
    {k:"rule"},
    {k:"h3", t:"Price and Quantity Determination"},
    {k:"p", t:"Under **perfect competition** the firm accepts the market price and produces where its marginal cost equals that price; its demand curve is a horizontal line at the market price. Under **monopoly** the firm chooses the price — producing where marginal cost equals marginal revenue and then charging the price the demand curve allows, above marginal cost. Under **oligopoly** prices tend to be sticky, for each firm must match its rivals' moves; illustrate all three cases with diagrams of price and quantity."},
    {k:"rule"},
    {k:"h3", t:"Advantages and Disadvantages of Each Structure"},
    {k:"p", t:"Perfect competition delivers the lowest price and efficient output, but no variety and no money for research. Monopolistic competition offers variety and innovation, at some cost in price. Oligopoly brings economies of scale and research, but risks collusion against consumers. Monopoly can achieve great scale and supply where others will not, but restricts output, raises price and may grow lazy. Weigh each structure as it serves the consumer and the economy."},
    {k:"h3", t:"The Four Structures in One Table"},
    {k:"p", t:"The comparison is asked more often than any single structure described. Learn it as a grid; a table in the answer earns the marks faster than four paragraphs."},
    {k:"table", head:["Feature","Perfect competition","Monopolistic competition","Oligopoly","Monopoly"], rows:[
     ["Number of sellers","Very many","Many","A few large, interdependent","One"],
     ["The product","Homogeneous — identical","Differentiated by brand, quality, packaging or place","Homogeneous or differentiated","Unique — no close substitute"],
     ["Control over price","None; a price taker","Some; sets its own price within a narrow range","Considerable, but limited by rivals' reactions","Great; a price maker"],
     ["Barriers to entry","None — completely free","Low in the long run","High — scale, capital, patents, control of supply","Very high — legal, technical or natural"],
     ["The demand curve facing the firm","Perfectly elastic — horizontal at the market price","Downward sloping, fairly elastic","Kinked — rivals match a cut but not a rise","The market demand curve itself — downward sloping"],
     ["Advertising","None needed — the product cannot be told apart","Heavy — to persuade buyers of a difference","Heavy and competitive, often non-price","Little; at most to improve public relations"],
     ["Long-run profit","Normal profit only","Normal profit only, with some excess capacity","Above normal profit usually possible","Above normal profit sustained"],
     ["Liberian illustration","The sellers of cassava or charcoal in a rural market","Boutiques, bread bakeries, hairdressing salons, bottled-water brands","Mobile telephone networks, cement, breweries","The national power and water utilities, a concession in its own area"]]},
    {k:"rule"},
    {k:"h3", t:"Price and Output Under Perfect Competition"},
    {k:"p", t:"Because the firm is one of very many selling an identical product, it cannot charge above the market price — buyers simply go next door — so the price is given and the firm's **demand curve is a horizontal line at that price**. Since every extra unit sells at the same price, **average revenue = marginal revenue = price**. The firm maximises profit where **marginal cost = marginal revenue**, and in the short run it may earn above-normal profit (if price exceeds average cost), normal profit (if price equals average cost) or a loss (if price is below average cost). In the **long run** the loss-makers leave and, where profit is being made, new firms enter freely; entry raises supply, drives the price down, and continues until only **normal profit** remains — price equals the lowest point of the long-run average cost curve. That is why perfect competition is called **efficient**: it produces the greatest output at the lowest possible price, with no waste of resources. Its **shortcomings** are equally part of the answer: no variety, since the product is identical; no supernormal profit to fund research; and no economies of scale, since every firm is small."},
    {k:"rule"},
    {k:"h3", t:"Monopolistic Competition and the Cost of Variety"},
    {k:"p", t:"Many sellers, free entry in the long run, but a **differentiated** product — by brand, quality, packaging, credit, location or service. Differentiation gives each firm a small monopoly over its own version, so its demand curve **slopes downward** and it can raise price a little without losing all its customers. Heavy **advertising and selling costs** are the means of the differentiation and are part of the firm's cost. In the long run, free entry again erodes profit to normal — but the firm settles at an output **below** the point of lowest average cost, leaving **excess capacity**: it could produce more, more cheaply, but does not, because doing so would require cutting the price. Judge it as the paper asks: the consumer gains **variety, choice and convenience** and pays for them in a **higher price** than perfect competition would give. That trade is the whole of the evaluation."},
    {k:"rule"},
    {k:"h3", t:"Oligopoly — Interdependence and the Kinked Curve"},
    {k:"p", t:"An **oligopoly** is a market of **a few large firms**, each holding a substantial share, so each must take account of the others' likely reaction — this **interdependence** is the defining feature and distinguishes it from monopolistic competition. Entry is barred by the enormous capital required, by economies of scale, by patents, or by control of the supply. Prices are **sticky**: the **kinked demand curve** explains why. If a firm **cuts** its price, rivals cut too, so it gains few customers and the demand below the present price is **inelastic** — the cut is not worth making. If it **raises** price, rivals do not follow, so it loses many customers and the demand above the present price is **elastic** — the rise is not worth making either. The result is a **kink** at the ruling price, and a marginal revenue curve with a **vertical gap** at that output, so a change in cost within that gap leaves both price and output unchanged. Oligopolists therefore compete by **non-price** means — advertising, branding, credit, service, new models — and may be tempted into **collusion**, agreeing to fix prices and share the market, which is against the consumer's interest and in most countries against the law. Where one firm is large enough to set the price and the rest follow, it is the **price leader**."},
    {k:"rule"},
    {k:"h3", t:"Monopoly — Sources, Behaviour and Control"},
    {k:"p", t:"A **monopoly** is a market of **one seller** of a product with **no close substitute**, protected by barriers to entry. The **sources of monopoly**: **legal** — a patent, a copyright, a licence, or a statute creating a public utility; **natural** — where the whole market can be supplied most cheaply by one firm because average cost falls throughout, as with water, power and railways; **control of a resource** — one owner of the only supply; **scale and capital** — the market is too small to support a second plant; and **merger** — firms combining until one remains. The monopolist faces the **market demand curve**, so it must lower price to sell more, and **marginal revenue lies below average revenue**. It maximises profit where **MC = MR** and then charges the price the demand curve allows at that output — **above marginal cost**, and with a **smaller output** than a competitive industry would produce. It can also **price discriminate** — charging different prices to different buyers for the same thing — where markets can be kept separate and resale prevented: the off-peak electricity tariff, the cheaper student fare, the export price below the home price."},
    {k:"p", t:"**Weigh it.** The case **for** monopoly: great **economies of scale**, so cost per unit may be lower than under many small firms; **supernormal profit** available for research and development; **stability** of supply and price; and the ability to serve a market too small to attract competitors. The case **against**: **higher price and smaller output** than under competition; **no competitive pressure**, so inefficiency and slack management may persist (the **X-inefficiency** of a sheltered firm); **exploitation of the consumer**, who has nowhere else to go; **income inequality**, as profit accrues to the few; and **political power** following economic power. Hence the **control of monopoly**: **price regulation** fixing a maximum price; **public ownership** of the natural monopolies; **taxation** of supernormal profit; **anti-monopoly legislation** against restrictive practices and collusion; **licensing** and quality standards; and the **opening of the market** to imports and to new entrants. In Liberia the natural monopolies — power and water — are publicly owned and regulated for exactly these reasons."},
    {k:"rule"},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Confusing a **market** with a **market place**. The market is the arrangement that brings buyers and sellers together, by telephone as much as by stall; the market place is only the physical spot.",
      "Describing **monopolistic competition as monopoly**. It has many sellers and free entry in the long run; only its product is differentiated.",
      "Placing the monopolist's price **at** MC = MR. The firm produces where MC = MR and then charges the price **on the demand curve above** that output.",
      "Saying a perfectly competitive firm earns **supernormal profit in the long run**. Free entry drives it to normal profit.",
      "Forgetting **interdependence** in oligopoly — it is the feature that separates oligopoly from monopolistic competition and the mark the question is set for.",
      "Listing **advertising as pointless** in monopolistic competition. It is the instrument of differentiation and a genuine cost of the variety consumers say they want."]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Define a market** and distinguish it from a market place; state the features that determine market structure",
      "**State the conditions of perfect competition** — many buyers and sellers, homogeneous product, free entry and exit, perfect knowledge, no individual influence on price",
      "**Compare perfect competition with monopolistic competition** in a table: number of firms, product, price control, entry, advertising, the demand curve facing the firm",
      "**Explain price and output determination** under perfect competition, monopoly and oligopoly, with a diagram for each — and say where MC = MR in each",
      "**Explain the kinked demand curve** and why oligopoly prices are sticky; name non-price competition and collusion",
      "**State the sources of monopoly** and the arguments for and against it, then the methods by which government controls it",
      "**Weigh each structure as it serves the consumer** — price, output, variety, efficiency, research and the distribution of income"
    ]}

  ],

  focus:[
    "The concept of a market versus the market place",
    "Perfect market and imperfect market",
    "Features of perfect competition, monopoly, monopolistic competition and oligopoly",
    "Advantages and disadvantages of each market type",
    "Comparison of perfect competition and monopoly",
    "Graphic illustration of price and output determination"
  ],
  terms:[
    {t:"market", d:"any arrangement bringing buyers and sellers into contact", x:"A market need not be a physical place."},
    {t:"market place", d:"the physical location where trading occurs", x:"Waterside is a market place."},
    {t:"perfect competition", d:"a market with many sellers of an identical product and free entry", x:"Perfect competition is a theoretical benchmark."},
    {t:"imperfect competition", d:"any market that is not perfectly competitive", x:"Most real markets are imperfect."},
    {t:"monopoly", d:"a market with a single seller and no close substitute", x:"A monopoly can set its own price."},
    {t:"monopolistic competition", d:"many sellers offering slightly differentiated products", x:"Hairdressers operate in monopolistic competition."},
    {t:"oligopoly", d:"a market dominated by a few large interdependent firms", x:"Petroleum importing is often an oligopoly."},
    {t:"duopoly", d:"a market with only two sellers", x:"A duopoly is the simplest oligopoly."},
    {t:"price taker", d:"a firm that must accept the ruling market price", x:"A firm in perfect competition is a price taker."},
    {t:"price maker", d:"a firm able to set its own price", x:"A monopolist is a price maker."},
    {t:"barrier to entry", d:"anything preventing new firms from entering an industry", x:"A patent is a barrier to entry."},
    {t:"product differentiation", d:"making a product appear different from rivals'", x:"Branding is product differentiation."},
    {t:"homogeneous product", d:"a product identical across all sellers", x:"Unbranded rice is nearly homogeneous."},
    {t:"normal profit", d:"the minimum profit needed to keep a firm in business", x:"Normal profit is a cost of production."},
    {t:"abnormal profit", d:"profit above the normal level", x:"A monopoly may earn abnormal profit in the long run."},
    {t:"collusion", d:"agreement between firms to fix price or output", x:"Collusion harms the consumer."},
    {t:"cartel", d:"a formal agreement among producers to control the market", x:"A cartel restricts output to raise price."},
    {t:"price war", d:"repeated price cutting between rival firms", x:"A price war can bankrupt smaller firms."},
    {t:"natural monopoly", d:"an industry where one firm can supply the whole market most cheaply", x:"Water supply is often a natural monopoly."}
  ],
  facts:[
    {q:"Distinguish between a market and a market place.", a:"A market is any arrangement bringing buyers and sellers into contact so that exchange can occur, whether by telephone, internet or personal contact. A market place is the specific physical location where such trading happens."},
    {q:"State four features of perfect competition.", a:"There are very many buyers and sellers so none can influence price; the product is homogeneous; there is freedom of entry and exit; and buyers and sellers have perfect knowledge of the market."},
    {q:"Why is a firm in perfect competition described as a price taker?", a:"It supplies so small a share of total output that its own decisions cannot affect the market price, so it must accept the ruling price and can sell any quantity at it."},
    {q:"State four features of a monopoly.", a:"There is a single seller controlling the whole supply; there is no close substitute for the product; there are strong barriers to entry; and the monopolist is a price maker who can set price or output but not both."},
    {q:"Name four sources of monopoly power.", a:"Legal protection such as a patent or licence; ownership of a scarce raw material; economies of scale creating a natural monopoly; and control of distribution or the merger of competitors."},
    {q:"State four features of monopolistic competition.", a:"There are many sellers; products are differentiated by brand, quality or location; entry is relatively free; and each firm has some limited control over its own price."},
    {q:"State three features of an oligopoly.", a:"A few large firms dominate the market; firms are interdependent so each must consider rivals' reactions; and there is a strong tendency toward price rigidity, collusion or non-price competition."},
    {q:"State two advantages and two disadvantages of monopoly.", a:"Advantages: economies of scale may lower unit costs, and large profits can fund research and investment. Disadvantages: the consumer pays a higher price for less output, and the absence of competition may reduce efficiency and quality."},
    {q:"State two advantages of perfect competition for the consumer.", a:"Prices are driven down to the level of cost so consumers pay the lowest sustainable price, and resources are allocated efficiently since firms must produce at lowest cost to survive."},
    {q:"Why do oligopolists often prefer non-price competition?", a:"A price cut is easily matched by rivals, leaving all firms worse off, whereas advertising, branding, packaging and service build customer loyalty that competitors cannot copy immediately."}
  ],
  tf:[
    {s:"A market must be a physical place.", a:"false", why:"A market is any arrangement bringing buyers and sellers into contact, including by telephone or internet."},
    {s:"A firm under perfect competition is a price taker.", a:"true", why:"Its output is too small a share of the market to influence the ruling price."},
    {s:"A monopolist can set both price and quantity independently.", a:"false", why:"He can choose one or the other, but the demand curve then determines the second."},
    {s:"Products in monopolistic competition are differentiated.", a:"true", why:"Branding, quality and location distinguish otherwise similar products."},
    {s:"Oligopolists are interdependent.", a:"true", why:"With few firms, each must consider how rivals will react to its decisions."},
    {s:"Free entry is a feature of monopoly.", a:"false", why:"Monopoly depends on barriers to entry that keep new firms out."},
    {s:"Perfect competition exists widely in the real world.", a:"false", why:"It is a theoretical benchmark; real markets are imperfect to some degree."}
  ],
  sort:{ title:"Sort these market features", groups:[
    {name:"Perfect competition", items:["many sellers","homogeneous product","free entry","price taker"]},
    {name:"Monopoly", items:["single seller","no close substitute","barriers to entry","price maker"]},
    {name:"Monopolistic competition", items:["many sellers","differentiated product","some price control","branding"]},
    {name:"Oligopoly", items:["few large firms","interdependence","non-price competition","risk of collusion"]}
  ]},
  mapwork:{ title:"Comparing the market structures", caption:"Complete the table by giving the number of firms, nature of product and degree of price control.", items:[
    {p:"Perfect competition", f:"Very many firms; identical product; no price control, the firm is a price taker"},
    {p:"Monopolistic competition", f:"Many firms; differentiated products; limited price control within a small range"},
    {p:"Oligopoly", f:"A few large firms; identical or differentiated products; considerable but interdependent price control"},
    {p:"Monopoly", f:"One firm; unique product with no close substitute; substantial price control"},
    {p:"Barriers to entry", f:"None in perfect competition, low in monopolistic competition, high in oligopoly and monopoly"},
    {p:"Long-run profit", f:"Only normal profit in perfect competition; abnormal profit possible in oligopoly and monopoly"},
    {p:"Liberian example", f:"Local produce sellers approach perfect competition; utilities approach monopoly; fuel importing is oligopolistic"}
  ]},
  casestudy:{ title:"Three markets in one town",
    text:"In a county town three trades operate very differently. First, thirty women sell identical bundles of cassava leaf at the roadside; each charges 50 dollars because a customer who is quoted more simply walks three steps to the next seller, and any woman may join or leave the trade. Second, a single company holds the licence to supply piped water; it has laid the only pipe network and charges what it judges the town will bear, and complaints about pressure and billing are frequent. Third, two firms import and sell cement. Neither dares cut its price, because the other would match it within a day and both would earn less; instead each spends heavily on painted signs, free delivery and credit terms for builders.",
    questions:[
      {q:"Identify the market structure of each of the three trades.", a:"The cassava leaf sellers approximate perfect competition; the water company is a monopoly; the two cement firms form an oligopoly (a duopoly)."},
      {q:"Which features of the cassava leaf trade justify your answer?", a:"Many sellers, an identical homogeneous product, free entry and exit, and perfect knowledge of price so that no seller can charge more than the ruling price."},
      {q:"Why can the water company ignore customer complaints in a way the cassava sellers cannot?", a:"It faces no competitor and there is no substitute for piped water, and the pipe network is a barrier to entry, so dissatisfied customers cannot take their business elsewhere."},
      {q:"Explain the cement firms' reluctance to cut price.", a:"They are interdependent. A price cut would be matched at once, so neither would gain market share but both would earn lower revenue — hence they compete on service instead."},
      {q:"Suggest one action government could take in the water market and justify it.", a:"Regulate the price and service standards, or license a competitor. Because it is a natural monopoly, regulation protects consumers from excessive pricing without duplicating the costly pipe network."}
    ]},
  project:{ title:"Market structure survey",
    brief:"Identify and classify the market structures operating in your community.",
    steps:[
      "Identify four different trades or services in your community.",
      "For each, count how many sellers there are and note whether the product is identical or differentiated.",
      "Find out how easy it would be for a new seller to enter.",
      "Classify each trade by market structure and justify your classification.",
      "State which structure gives the best deal to consumers in your community and why."
    ],
    criteria:["Four genuine local trades studied","Number of sellers and product nature recorded","Barriers to entry investigated","Correct classification with justification","A reasoned conclusion about consumer welfare"]},
  worked:[
    {q:"A firm sells 500 units at L$40 each under perfect competition. Calculate total revenue.", steps:["TR = P \u00d7 Q","40 \u00d7 500"], a:"L$20 000"},
    {q:"In perfect competition price is L$40. What is the marginal revenue from selling one more unit?", steps:["Price is constant for a price taker","MR = P"], a:"L$40"},
    {q:"A monopolist sells 100 units at L$90 or 120 units at L$80. Which yields more revenue?", steps:["100 \u00d7 90 = 9 000","120 \u00d7 80 = 9 600"], a:"120 units at L$80, giving L$9 600"},
    {q:"Using those figures, calculate the marginal revenue of the extra 20 units.", steps:["\u0394TR = 9 600 \u2212 9 000 = 600","600 \u00f7 20"], a:"L$30 per unit"},
    {q:"Four firms have market shares of 45%, 25%, 20% and 10%. Calculate the share of the largest two.", steps:["45 + 25"], a:"70% — evidence of oligopoly"},
    {q:"A firm's total cost is L$18 000 and total revenue L$20 000 for 500 units. Calculate profit per unit.", steps:["Profit = 20 000 \u2212 18 000 = 2 000","2 000 \u00f7 500"], a:"L$4 per unit"},
    {q:"A monopolist's total cost is L$7 000 when revenue is L$9 600. Calculate the abnormal profit.", steps:["9 600 \u2212 7 000"], a:"L$2 600"}
  ],
  apply:[
    {q:"Why are consumers usually better off under perfect competition than under monopoly?", a:"Competition forces price down toward cost and compels efficiency, so consumers get a lower price and more output, while a monopolist restricts output to raise price and faces no pressure to improve."},
    {q:"Explain why utilities such as water and electricity are often natural monopolies.", a:"The fixed cost of the network is enormous, so average cost keeps falling as output rises. One firm can supply the whole market more cheaply than two duplicating pipes or cables."},
    {q:"Two petrol importers always charge identical prices. What might explain this and why is it a concern?", a:"It suggests tacit or open collusion in an oligopoly. It concerns the public because prices are then set above the competitive level and consumers lose the benefit of rivalry."},
    {q:"How does branding give a small restaurant some power over its own price?", a:"Product differentiation through name, taste, location and service makes its meals imperfect substitutes for rivals', so some customers will still come if it charges slightly more."},
    {q:"Suggest two measures a government can use to control monopoly power.", a:"Regulate the price it may charge or the profit it may earn, and enforce competition law against mergers and collusion; it may also license new entrants or operate the service publicly."}
  ],
  activities:[
    "Group research on the features of the various market structures",
    "Pair work discussing and illustrating the advantages and disadvantages of each market type",
    "Compare and contrast perfectly competitive and monopolistic markets",
    "Draw graphs illustrating price and quantity determination under perfect competition, monopoly and oligopoly",
    "Survey local trades and classify them by market structure"
  ],
  materials:[
    "Primary text: Stanlake's Economics by S. J. Grant, 8th edition",
    "Essential Economics for Senior Secondary Schools (Cole Esan Ande), 5th edition, 2017",
    "Comprehensive Economics for Senior Secondary School (Johnson U. Anyaele, 1997)",
    "Graph paper and rulers",
    "Charts of the market structures"
  ],
  assessment:["Presentation, individual and group","Written assignment","Quiz","Market survey report","Written test"]
},
{
  grade:11, period:"III", sem:"One", icon:"🚚",
  title:"The Theory of Production and Distribution",
  subtitle:"Types of production, classification of goods and wealth, firm, plant and industry, and the channels of distribution",
  outcomes:[
    "Learners are able to demonstrate skills in analysing the processes of production and distribution of goods and services"
  ],
  objectives:[
    "Explain the theory of production and distribution",
    "Distinguish the various types of production",
    "Determine the types of goods and the concept of wealth",
    "Contrast firm, plant and industry",
    "Distinguish fixed and variable inputs",
    "Categorise the channels of distribution and their functions",
    "Discuss the problems of distribution and marketing of commodities in Liberia"
  ],
  note:"A <b>plant</b> is a single physical unit of production such as a factory or shop. A <b>firm</b> is the business organisation that may own several plants. An <b>industry</b> is all the firms producing similar goods. The main <b>channel of distribution</b> runs <b>producer → wholesaler → retailer → consumer</b>, though producers may sell direct.",
  study:[
    /* ---- course text: Semester One, Period III — The Theory of Production and Distribution (guide pp. 17-18) ---- */
    {k:"h3", t:"Production and the Classification of Goods"},
    {k:"p", t:"**Production** is the creation of goods and services to satisfy wants; its types run primary, secondary and tertiary. Goods themselves are classified as **consumer goods**, used directly by households, and **producer (capital) goods**, used to make other goods; as **durable** or **non-durable**; as **intermediate goods**, partly finished inputs of one another's production; and as **free goods**, available without effort, against **economic goods**, scarce and priced. **Wealth**, in the Liberian setting, is the stock of valuable goods owned — land, rubber trees, livestock, savings — and it becomes wealth only when it is owned, valuable and transferable."},
    {k:"rule"},
    {k:"h3", t:"Firm, Plant and Industry"},
    {k:"p", t:"A **plant** is a single physical unit of production — one factory, one shop, one farm. A **firm** is the business organisation that owns and manages one or more plants. An **industry** is the whole group of firms producing a similar product — all the rice mills, all the transport companies. One firm may own many plants; one industry holds many firms."},
    {k:"rule"},
    {k:"h3", t:"Fixed and Variable Inputs"},
    {k:"p", t:"A **fixed input** cannot be changed with the level of output in the short run — the factory building, the land, the heavy machine. A **variable input** changes with output — labour, raw materials, fuel, power. The distinction sets the length of the planning horizon: in the long run all inputs become variable."},
    {k:"rule"},
    {k:"h3", t:"The Channels of Distribution"},
    {k:"p", t:"Goods travel from producer to consumer along the **channel of distribution**. The **producer** makes the good; the **wholesaler** buys in bulk from producers, stores, breaks bulk and supplies the retailers; the **retailer** sells in small quantities to the final consumer, offering credit, variety and a near location. Each middleman performs real functions — transport, storage, grading, finance, risk-bearing, information — for which the margin is the reward. Producers may also sell **direct** to consumers, shortening the channel."},
    {k:"rule"},
    {k:"h3", t:"Problems of Distribution and Marketing in Liberia"},
    {k:"p", t:"Relate the channel to practice in Liberia: poor rural roads raise the cost of moving produce from Lofa or Bong to Monrovia; storage is scarce, so perishable crops are sold cheap at harvest; market information is thin, so prices differ widely between markets; finance for traders is costly; packaging and processing are limited. Suggest how better roads, storage, cooperative marketing and market information would ease each problem."},
    {k:"h3", t:"The Stages and the Classification of Production"},
    {k:"p", t:"Production runs through **stages**, and the paper may ask for them: **primary** — extraction from nature, as farming, fishing, mining, forestry and quarrying; **secondary** — manufacturing and construction, as milling rice, weaving cloth, sawing timber, building a road; **tertiary** — services, as trade, transport, banking, insurance, teaching and medicine; and, in some syllabuses, **quaternary** — the information services of research, computing and consultancy. Note that production is **not only the making of a thing**: it includes the **creation of utility** — **form utility** (the log made into furniture), **place utility** (the rice moved from Lofa to Monrovia), **time utility** (the crop stored to the lean season) and **possession utility** (the good sold to the person who wants it). A trader who moves and stores rice is therefore a producer, which is why the wholesale and retail trades belong in the answer on production."},
    {k:"table", head:["Class of goods","Definition","Examples"], rows:[
     ["Consumer goods","Bought by households for direct satisfaction","Rice, cloth, bread, a radio"],
     ["Producer (capital) goods","Bought by firms to produce other goods","A rice mill, a tractor, a loom, a factory building"],
     ["Durable goods","Last through repeated use","A motorbike, a machine, furniture"],
     ["Non-durable (perishable) goods","Used up at once or quickly","Food, fuel, matches"],
     ["Intermediate goods","Partly finished inputs of another production","Flour for the bakery, cotton for the weaver, cement for the builder"],
     ["Free goods","Available without effort and at no price","Air, sunshine, rainwater in the stream"],
     ["Economic goods","Scarce, so they command a price","Land in town, water from a pipe, timber"]]},
    {k:"p", t:"**Wealth** is the **stock** of valuable things owned at a point in time, against **income**, which is the **flow** over a period. A thing is wealth only if it is **useful, scarce, transferable and has a money value** — hence land, a rubber plantation, livestock and savings are wealth, while a man's skill is not transferable and is treated separately as human capital. A family may be wealthy in land and poor in income; the distinction is a regular two-mark question."},
    {k:"rule"},
    {k:"h3", t:"Firm, Plant and Industry — and the Scale of Production"},
    {k:"p", t:"A **plant** is one physical unit of production — one factory, one shop, one farm. A **firm** is the business organisation that owns and manages one or more plants. An **industry** is all the firms producing a similar product. The relations follow: a plant is the smallest physical unit; a firm may own many plants; an industry contains many firms; and the **size of the firm** determines whether it enjoys the economies of scale that a single small plant cannot reach."},
    {k:"p", t:"**Economies of scale** are the falling average costs that come with size. **Internal** economies arise within the firm: **technical** (bigger machines cost proportionately less and give more output), **managerial** (specialist managers can be employed), **financial** (a large firm borrows at a lower rate), **marketing** (bulk buying of inputs and bulk selling of output), and **risk-bearing** (a firm with many products or many markets spreads its risk). **External** economies arise outside the firm as the industry grows: training facilities, repair services, transport, a supply of skilled labour and market information all become available to every firm in the area. **Diseconomies of scale** set in when size carries on growing: management becomes remote, communication slows, decisions are delayed, supervision weakens and industrial relations sour — so the long-run average cost curve falls, flattens and then rises, and the firm that grows past the lowest point is punished with a higher cost per unit."},
    {k:"rule"},
    {k:"h3", t:"The Channels of Distribution"},
    {k:"p", t:"A **channel of distribution** is the route a good takes from producer to final consumer. Learn the four standard channels and be able to name the goods that travel each."},
    {k:"num", items:[
      "**Producer → Consumer** (direct): no middleman at all — the farmer selling at his gate, the baker's own shop, the hairdresser, the doctor. Used where the service is personal, the good perishable, or the market small.",
      "**Producer → Retailer → Consumer**: the manufacturer or importer sells to shops, which sell to the public — clothing, bread, furniture, hardware.",
      "**Producer → Wholesaler → Retailer → Consumer**: the commonest channel for manufactured and imported goods, where the wholesaler's storage, bulk-breaking and credit are worth their margin — tinned food, textiles, cement, drugs.",
      "**Producer → Agent → Wholesaler → Retailer → Consumer**: where an agent or broker arranges the sale for a commission, as in export trade — rubber, cocoa, coffee and iron ore sold abroad through agents."]},
    {k:"p", t:"The **functions of the middleman** are the answer to the perennial question whether middlemen should be abolished. The **wholesaler**: buys in bulk and so obtains a lower price; **breaks bulk** into the quantities retailers want; **stores**, holding stock so that supply is steady through the season; **transports**, moving goods from the point of production to the points of sale; **finances** the retailer by giving credit and the producer by paying on delivery; **bears the risk** of spoilage, theft, fashion and bad debts; **grades and packages** the goods; and passes **market information** both ways — what is selling, at what price, in what quantity. The **retailer**: sells in the small quantities the consumer wants; is **near** the consumer and open at convenient hours; offers **variety** from many producers in one place; gives **credit** to trusted customers; **advertises and displays** the goods; and provides **after-sales service**. Abolish them and the producer must perform every one of these functions himself, at greater cost — which is why the direct channel survives only for a few goods."},
    {k:"rule"},
    {k:"h3", t:"Distribution and Marketing in Liberia — Problems and Remedies"},
    {k:"table", head:["Problem","How it shows itself","The remedy"], rows:[
     ["Poor rural roads","Produce from Lofa, Bong and Nimba cannot reach Monrovia in the rainy season, or reaches it spoiled","Feeder-road construction and maintenance, culverts and bridges, all-weather surfaces on the produce routes"],
     ["No storage","Cassava, plantain and vegetables are sold at harvest when prices are lowest, and spoil when they are not","Community barns, drying floors, cold rooms at the markets, and warehouses against which a farmer can borrow"],
     ["Thin market information","The farmer does not know the Monrovia price and accepts what the travelling buyer offers","A market information service broadcasting prices, and cooperatives that collect and share them"],
     ["Costly finance","The trader borrows at a high rate, so the margin the consumer pays is large","Agricultural and cooperative credit at rates matched to the farming calendar, with repayment at harvest"],
     ["Weak processing","Raw cocoa and rubber are exported while the value added by processing is earned abroad","Processing plants at the source — palm oil mills, cocoa fermenting and drying, rubber processing"],
     ["Poor packaging and grading","Produce is rejected or sells cheap because it is mixed and badly packed","Standard grades, simple packaging, and training in handling"],
     ["Many intermediaries on some routes","Each adds a margin, so the farm-gate price is low and the town price high","Cooperative marketing, producer-retail links, and direct selling where the volume allows"]]},
    {k:"p", t:"**Cooperative marketing** is the remedy the examiner expects to see argued: farmers join to buy inputs cheaply, to store and grade together, to bargain as one seller instead of many, and to share the transport. Its limits must be stated as well — it needs honest management, members' loyalty, and capital, all of which have failed cooperatives elsewhere in West Africa."},
    {k:"rule"},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Defining production as **making goods only**. Services are production, and so is the creation of place, time and possession utility.",
      "Calling a **tractor a consumer good**. Anything bought to produce other goods is a producer (capital) good.",
      "Confusing **wealth with income** — wealth is a stock at a date; income is a flow over a period.",
      "Confusing a **firm with a plant**. A firm may own many plants; a plant is one physical unit.",
      "Saying middlemen **add nothing**. List the functions — storage, bulk-breaking, transport, finance, risk, information — and the mark follows.",
      "Stating a problem of distribution **without its remedy**. The question asks for both; a problem unremedied scores half."]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Define production** and classify it — primary, secondary, tertiary — with a Liberian example of each",
      "**Classify goods** — consumer and capital, durable and non-durable, intermediate, free and economic — and distinguish wealth from income",
      "**Distinguish plant, firm and industry**, and explain the economies and diseconomies of scale, internal and external",
      "**Distinguish fixed from variable inputs** and relate them to the short run and the long run",
      "**Describe the channels of distribution**, with the goods that travel each, and state the functions of the wholesaler and of the retailer",
      "**Argue whether middlemen are necessary** — the functions they perform, and what the producer would have to do without them",
      "**Explain the problems of distribution and marketing in Liberia and suggest remedies** — roads, storage, information, finance, processing, packaging, cooperatives"
    ]}

  ],

  focus:[
    "Meaning and types of production",
    "Classification of goods: consumer and capital, durable and non-durable, free and economic",
    "The concept of wealth in the Liberian setting",
    "Differentiating firm, plant and industry",
    "Fixed and variable inputs",
    "The channels of distribution: producer, wholesaler and retailer",
    "Functions of the wholesaler and retailer",
    "Problems of distribution and marketing in Liberia"
  ],
  terms:[
    {t:"production", d:"the creation of goods and services to satisfy wants", x:"Production adds utility to resources."},
    {t:"distribution", d:"the movement of goods from producer to final consumer", x:"Distribution creates place utility."},
    {t:"direct production", d:"producing goods for one's own use", x:"Subsistence farming is direct production."},
    {t:"indirect production", d:"producing goods for exchange rather than own use", x:"Indirect production depends on markets."},
    {t:"consumer goods", d:"goods bought for final use and satisfaction", x:"Food and clothing are consumer goods."},
    {t:"capital goods", d:"goods used to produce other goods", x:"Machines and tools are capital goods."},
    {t:"durable goods", d:"goods that last a long time in use", x:"A refrigerator is a durable good."},
    {t:"perishable goods", d:"goods that spoil quickly", x:"Vegetables are perishable goods."},
    {t:"wealth", d:"the stock of valuable assets owned at a point in time", x:"Wealth differs from income."},
    {t:"income", d:"the flow of earnings received over a period", x:"Income is measured per month or year."},
    {t:"plant", d:"a single physical unit of production", x:"A factory building is a plant."},
    {t:"firm", d:"the business unit that owns and runs one or more plants", x:"A firm may own several plants."},
    {t:"industry", d:"the group of firms producing similar products", x:"The rubber industry includes all rubber firms."},
    {t:"fixed input", d:"an input whose quantity cannot be changed in the short run", x:"A factory building is a fixed input."},
    {t:"variable input", d:"an input that can be changed in the short run", x:"Raw materials are a variable input."},
    {t:"wholesaler", d:"a trader buying in bulk from producers and selling to retailers", x:"The wholesaler breaks bulk."},
    {t:"retailer", d:"a trader selling in small quantities to final consumers", x:"The retailer serves the consumer directly."},
    {t:"middleman", d:"a trader standing between producer and consumer", x:"Middlemen add cost but also add service."},
    {t:"channel of distribution", d:"the route goods take from producer to consumer", x:"A short channel lowers the final price."},
    {t:"warehousing", d:"the storage of goods until they are needed", x:"Warehousing evens out seasonal supply."},
    {t:"breaking bulk", d:"dividing large quantities into smaller saleable lots", x:"Breaking bulk is a wholesaler's function."}
  ],
  facts:[
    {q:"Distinguish direct from indirect production.", a:"Direct production is producing goods for one's own consumption, as in subsistence farming. Indirect production is producing for exchange, which requires specialisation, a market and a medium of exchange."},
    {q:"Distinguish consumer goods from capital goods with examples.", a:"Consumer goods are bought for final satisfaction, such as food, clothing and radios. Capital goods are used to produce other goods, such as machines, tools and factory buildings."},
    {q:"Distinguish wealth from income.", a:"Wealth is a stock of valuable assets held at a particular moment, such as land, buildings and savings. Income is a flow of earnings received over a period, such as wages per month."},
    {q:"Explain the difference between a plant, a firm and an industry with an example.", a:"A plant is one physical unit, such as a single bakery building. A firm is the business owning it and perhaps others, such as a bakery company with four shops. An industry is all firms making similar goods, such as the whole baking industry."},
    {q:"Distinguish fixed from variable inputs.", a:"A fixed input cannot be changed in the short run, such as land or a factory building. A variable input can be altered quickly, such as labour, raw materials and fuel."},
    {q:"Name the usual channel of distribution and one alternative.", a:"Producer to wholesaler to retailer to consumer. Alternatively the producer may sell directly to the consumer, or to a large retailer, bypassing the wholesaler."},
    {q:"State four functions of the wholesaler.", a:"Buying in bulk and breaking bulk into smaller lots; warehousing goods and evening out seasonal supply; bearing risk of price change and spoilage; and granting credit and giving market information to retailers."},
    {q:"State four functions of the retailer.", a:"Selling in small convenient quantities; holding a variety of goods so consumers can choose; offering credit, delivery and after-sales service; and passing consumer preferences back to producers."},
    {q:"State four problems of distribution and marketing of commodities in Liberia.", a:"Poor roads and high transport costs, especially in the rainy season; inadequate storage and refrigeration causing spoilage of perishables; too many middlemen raising the final price; and limited market information so farmers cannot judge a fair price."},
    {q:"Suggest three ways of improving distribution in Liberia.", a:"Rehabilitate feeder roads to the farming counties; build storage and cold chain facilities at collection points; and organise farmers into cooperatives that can transport and bargain collectively, with better price information."}
  ],
  tf:[
    {s:"A firm and a plant are the same thing.", a:"false", why:"A plant is one physical unit of production; a firm is the business that may own several plants."},
    {s:"Wealth is a stock while income is a flow.", a:"true", why:"Wealth is measured at a moment in time, income over a period."},
    {s:"Capital goods are bought for final consumption.", a:"false", why:"They are used to produce other goods; consumer goods are for final consumption."},
    {s:"Breaking bulk is a function of the wholesaler.", a:"true", why:"He buys in large quantities and divides them into lots retailers can handle."},
    {s:"Removing all middlemen would always benefit the consumer.", a:"false", why:"Middlemen perform real functions of transport, storage, credit and risk bearing; removing them transfers those costs elsewhere."},
    {s:"Poor roads raise the final price of farm produce in Liberia.", a:"true", why:"High transport costs and spoilage in transit are added into the price the consumer pays."},
    {s:"Labour is normally a fixed input in the short run.", a:"false", why:"Labour is usually variable; land and buildings are the typical fixed inputs."}
  ],
  sort:{ title:"Sort these correctly", groups:[
    {name:"Consumer goods", items:["rice","clothing","soap","radio"]},
    {name:"Capital goods", items:["tractor","sewing machine","factory building","delivery van"]},
    {name:"Functions of the wholesaler", items:["breaking bulk","warehousing","bearing risk","granting credit to retailers"]},
    {name:"Problems of distribution in Liberia", items:["poor roads","lack of storage","too many middlemen","poor market information"]}
  ]},
  mapwork:{ title:"The channel of distribution", caption:"Complete the table by stating what each stage contributes.", items:[
    {p:"Producer", f:"Creates the good; may sell in bulk to wholesalers or directly to large buyers"},
    {p:"Wholesaler", f:"Buys in bulk, stores, breaks bulk, bears risk and supplies retailers on credit"},
    {p:"Retailer", f:"Sells small quantities conveniently to consumers and offers choice and service"},
    {p:"Consumer", f:"Final user whose demand justifies the whole chain"},
    {p:"Transport", f:"Creates place utility by moving goods from where they are made to where they are wanted"},
    {p:"Warehousing", f:"Creates time utility by storing goods until consumers need them"},
    {p:"Direct selling", f:"Producer sells straight to the consumer, shortening the chain and reducing the final price"}
  ]},
  casestudy:{ title:"Pepper from Lofa to Monrovia",
    text:"Yatta grows pepper in Lofa County. At the farm gate a buying agent offers her 250 Liberian dollars a bucket, which she accepts because she has no vehicle and the pepper will spoil within days. The agent sells to a wholesaler in Gbarnga for 400 a bucket. The wholesaler stores the pepper, hires a truck over a road that becomes almost impassable in the rains, and sells to Monrovia retailers at 800. In Waterside market the retailer sells it in small heaps totalling about 1 400 a bucket. Roughly one bucket in five spoils before reaching the consumer. Yatta receives less than a fifth of what the final consumer pays, and complains that she does not know the Monrovia price when she sells.",
    questions:[
      {q:"Trace the channel of distribution in this case.", a:"Producer (Yatta) to buying agent, to wholesaler in Gbarnga, to retailer in Waterside, to the final consumer."},
      {q:"Calculate the percentage of the final price that Yatta receives.", a:"250 out of 1 400, which is about 17.9 per cent."},
      {q:"State three real functions the middlemen perform that justify part of their margin.", a:"They provide transport over a difficult road, store the pepper and bear the risk of spoilage, and pay Yatta immediately rather than after the final sale."},
      {q:"Identify two problems of distribution in Liberia illustrated here.", a:"Poor roads that raise transport cost and cause delay, and lack of storage which results in one bucket in five spoiling; poor market information is a third."},
      {q:"Suggest two changes that would raise Yatta's share of the final price.", a:"Joining a farmers' cooperative that transports and bargains collectively, shortening the chain; and access to market price information by radio or phone so she can negotiate from knowledge."}
    ]},
  project:{ title:"Tracing a commodity chain",
    brief:"Follow one commodity from producer to consumer and analyse the margins.",
    steps:[
      "Choose one commodity sold in your local market, such as pepper, plantain or charcoal.",
      "Find out from a retailer where it was bought and at what price.",
      "Trace back as far as you can toward the producer, recording each price.",
      "Calculate the margin added at each stage and the producer's share of the final price.",
      "Present the chain as a diagram and suggest one way the chain could be shortened."
    ],
    criteria:["A real commodity traced with actual prices","At least three stages identified","Margins correctly calculated","Producer's share expressed as a percentage","A realistic suggestion for improvement"]},
  worked:[
    {q:"A farmer sells at L$250 and the consumer pays L$1 400. Calculate the total margin.", steps:["1 400 \u2212 250"], a:"L$1 150"},
    {q:"Express the farmer's share as a percentage of the final price.", steps:["(250 \u00f7 1 400) \u00d7 100"], a:"17.9%"},
    {q:"A wholesaler buys at L$400 and sells at L$800. Calculate his mark-up percentage.", steps:["Margin = 400","(400 \u00f7 400) \u00d7 100"], a:"100% mark-up"},
    {q:"If one bucket in five spoils, what percentage of stock is lost?", steps:["1 \u00f7 5 = 0.2","0.2 \u00d7 100"], a:"20%"},
    {q:"A retailer buys 50 buckets at L$800 and sells 40 at L$1 400, the rest spoiling. Find his profit.", steps:["Cost = 50 \u00d7 800 = 40 000","Revenue = 40 \u00d7 1 400 = 56 000","56 000 \u2212 40 000"], a:"L$16 000"},
    {q:"A firm operates 4 plants each producing 250 units daily. Calculate the firm's daily output.", steps:["4 \u00d7 250"], a:"1 000 units"},
    {q:"Transport costs L$18 000 for 60 buckets. Calculate the cost per bucket.", steps:["18 000 \u00f7 60"], a:"L$300 per bucket"}
  ],
  apply:[
    {q:"Why can a producer sometimes sell more cheaply by selling directly to consumers?", a:"Cutting out the wholesaler and retailer removes their margins, so the producer can charge less than the shop price yet earn more himself — provided he can carry the transport, storage and selling burden."},
    {q:"Explain why perishable goods usually need a shorter distribution channel.", a:"Every extra stage adds delay, and spoilage rises with time. A short chain gets the produce to the consumer while it is still saleable and reduces the loss built into the final price."},
    {q:"A learner argues that middlemen are simply parasites. Give a balanced response.", a:"They do raise the final price, and too many stages inflate it needlessly. But they finance, transport, store and bear risk; if they were removed, farmers or consumers would have to carry those functions and costs themselves."},
    {q:"How would improved rural roads affect both farmers and urban consumers?", a:"Lower transport cost and less spoilage raise the farm gate price the farmer receives while lowering the price the urban consumer pays, since the margin absorbed by transport and loss shrinks."},
    {q:"Explain why a person may have high income but little wealth.", a:"Income is a flow that may be entirely spent as it is received. Wealth is the stock of assets accumulated; someone who saves nothing builds no wealth however much he earns."}
  ],
  activities:[
    "Discuss the classification of goods and services and the concept of wealth in the Liberian setting",
    "Group work distinguishing firm, plant and industry",
    "Pair work distinguishing fixed and variable inputs",
    "Trace the channels of distribution for a local commodity",
    "Discuss the problems of distribution and marketing of commodities in Liberia and recommend solutions"
  ],
  materials:[
    "Primary text: Stanlake's Economics by S. J. Grant, 8th edition",
    "Essential Economics for Senior Secondary Schools (Cole Esan Ande), 5th edition, 2017",
    "Comprehensive Economics for Senior Secondary School (Johnson U. Anyaele, 1997)",
    "Charts of distribution channels",
    "Local market price data"
  ],
  assessment:["Presentation, individual and group","Written assignment","Quiz","Commodity chain project","Written test"]
},
{
  grade:11, period:"IV", sem:"Two", icon:"👥",
  title:"Population and the Labour Market",
  subtitle:"Population census, determinants of population size, the Malthusian theory and the labour market",
  outcomes:[
    "Learners are able to analyse population dynamics and their influence on economic growth and development"
  ],
  objectives:[
    "Define population and discuss the factors influencing population dynamics",
    "Describe population size and its implications for the economy",
    "Explain population census and its types and importance",
    "State and critique the Malthusian theory of population",
    "Calculate population density and dependency",
    "Analyse the links between population and the labour market"
  ],
  note:"A <b>census</b> is the official counting of a country's population. A <b>de facto</b> census counts people where they actually are on census night; a <b>de jure</b> census counts them at their usual place of residence. <b>Population density = total population ÷ land area</b>. The <b>dependency ratio</b> compares those under 15 and over 64 with the working population aged 15 to 64.",
  study:[
    /* ---- course text: Semester Two, Period IV — Population and the Labour Market (guide pp. 19-20) ---- */
    {k:"h3", t:"Population and the Population Census"},
    {k:"p", t:"**Population** is the total number of people living in a country or area at a given time. A **population census** is the official count of every person in a country at a specified time, together with facts about age, sex, occupation and housing. The two types: a **de facto** census counts people where they actually are on census night; a **de jure** census counts people at their usual place of residence, wherever they happen to be. Conduct a head count of your own family by gender and age group and sort members into the dependent ages and the working age."},
    {k:"rule"},
    {k:"h3", t:"Importance, Characteristics and Problems of the Census"},
    {k:"p", t:"The census matters: it fixes the size and structure of the population, guides the sharing of seats and revenue, plans schools, hospitals and roads, and provides the base for every later survey. Its **characteristics**: it is universal, simultaneous, periodic (usually every ten years), individual and confidential. Its **problems** in Liberia and West Africa: high cost and shortage of trained enumerators, poor maps and addresses, remote and unsettled areas, distrust and undercounting, rapid growth between counts, and too slow publication of results."},
    {k:"rule"},
    {k:"h3", t:"Population Size, Growth and Distribution"},
    {k:"p", t:"Population size changes through three determinants: the **birth rate**, the **death rate** and **migration**. **Population density = total population ÷ land area**, in persons per square kilometre. Distribution is studied by **geographical region** — coast against interior, county against county; by **age** and **sex**, which the dependency ratio summarises; and by **occupation** — farming, trading, public service. Describe each distribution for Liberia and account for it."},
    {k:"rule"},
    {k:"h3", t:"The Malthusian Theory"},
    {k:"p", t:"**Malthus** argued that population, when unchecked, grows in a **geometric** progression (2, 4, 8, 16 ...) while food supply grows only in an **arithmetic** progression (2, 3, 4, 5 ...), so population must outrun food unless checked by **positive checks** — famine, disease and war — or **preventive checks** — later marriage and moral restraint. State the theory, then critique it: technology, new seed and world trade have raised food faster than he expected, and birth rates fall as incomes and education rise; yet in parts of Africa the pressure he described is real."},
    {k:"rule"},
    {k:"h3", t:"Optimum, Under- and Over-Population"},
    {k:"p", t:"The **optimum population** is the size that, with the resources available, gives the highest output per head. **Under-population** leaves resources idle for want of people; **over-population** presses on resources and lowers output per head. Ask of any country which condition it is in — and consider the labour market: what will happen to the work force that contributes to national development if it is struck by a pandemic such as HIV and AIDS or other diseases? Give the social, economic and development impact on a country such as Liberia."},
    {k:"h3", t:"The Population Measures Worked"},
    {k:"p", t:"Every measure in this unit is a formula with a worked case. Learn the formula, then the units the answer must carry — marks are lost on an unlabelled answer."},
    {k:"table", head:["Measure","Formula","Worked case"], rows:[
     ["Birth rate","(Births in the year ÷ total population) × 1 000","48 000 births in a population of 3 000 000 gives (48 000 ÷ 3 000 000) × 1 000 = 16 per 1 000"],
     ["Death rate","(Deaths in the year ÷ total population) × 1 000","27 000 deaths in 3 000 000 gives 9 per 1 000"],
     ["Rate of natural increase","Birth rate − death rate","16 − 9 = 7 per 1 000, that is 0.7 % a year before migration"],
     ["Population growth rate","(Births − deaths ± net migration) ÷ total population × 100","With 7 per 1 000 natural increase and 30 000 net immigrants: (48 000 − 27 000 + 30 000) ÷ 3 000 000 × 100 = 1.7 %"],
     ["Population density","Total population ÷ land area in km²","3 000 000 people on 100 000 km² gives 30 persons per km²"],
     ["Dependency ratio","(Dependants ÷ working population) × 100","1 200 000 dependants against 1 800 000 workers gives 66.7 per 100 workers"],
     ["Labour force","All persons of working age able and willing to work","Note: it excludes students, the retired, the sick and those who have stopped looking"],
     ["Unemployment rate","(Unemployed ÷ labour force) × 100","180 000 unemployed in a labour force of 1 800 000 gives 10 %"]]},
    {k:"p", t:"Note the trap in the **dependency ratio**: the dependants are those **below about 15 and above about 64**, together with those of working age who are not in the labour force — students, the permanently sick, and those who have given up looking for work. The ratio tells the government how many producers must support how many non-producers, and it explains why a very young population strains the schools and a very old one strains the hospitals."},
    {k:"rule"},
    {k:"h3", t:"The Census — Types, Uses and Liberian Difficulties"},
    {k:"p", t:"A **de facto** census counts every person **physically present** on census night, including visitors and excluding residents away; a **de jure** census counts every person at their **usual place of residence** whether present or not. Liberia has used the de facto method. The **characteristics** of a good census: **universal** (covering the whole country and every person), **simultaneous** (taken at one moment, so no one is counted twice or missed), **periodic** (every ten years, so the changes can be measured), **individual** (each person listed separately), **compulsory** (enforced by law), and **confidential** (the answers are not disclosed, which is what makes people answer honestly)."},
    {k:"p", t:"The **uses**: it fixes the size and structure of the population; it guides the **allocation of legislative seats and of government revenue** between the counties; it plans **schools, hospitals, roads, water and housing**; it supplies the base for **every later survey and estimate**; it informs the **labour market** and the manpower plan; and it provides the denominator for the birth rate, the death rate and the density. The **difficulties in Liberia and West Africa** are the ones the paper lists: **high cost** against a small budget; **shortage of trained enumerators and supervisors**; **poor maps, no street names and no house numbers**, so the same compound may be visited twice or not at all; **remote and riverine areas** and roads impassable in the rainy season; **illiteracy and language**, with many local languages to be covered; **distrust**, where people fear the count will bring taxation, conscription or the loss of a benefit, and so understate their households; **movement**, in a population that travels constantly between town and farm; **slow publication**, so the results arrive after the plan that needed them; and **political dispute** over the figures, since seats and money follow them."},
    {k:"rule"},
    {k:"h3", t:"Malthus Stated, Then Criticised"},
    {k:"p", t:"**Thomas Malthus (1798)** argued that population, when unchecked, grows in a **geometric** progression — 1, 2, 4, 8, 16 — doubling about every twenty-five years, while food supply grows only in an **arithmetic** progression — 1, 2, 3, 4, 5 — because land is fixed and subject to diminishing returns. Population must therefore outrun food, and the gap is closed by **positive checks** that raise the death rate — famine, disease, war — or by **preventive checks** that lower the birth rate — late marriage, celibacy and moral restraint. His conclusion was that any lasting rise in the wage of the poor would be spent on more children and so bring the wage back down, the **iron law of wages**."},
    {k:"p", t:"**The criticism is the second half of the answer.** Malthus did not foresee **technological progress** — the new seed, the fertiliser, the tractor, irrigation — which raised food output far faster than arithmetic; he did not foresee the **demographic transition**, in which rising incomes, education (especially of women), urbanisation and family planning cause the **birth rate itself to fall**, as it has fallen across Europe, East Asia and much of Latin America; he ignored **world trade**, by which a country short of food can buy it with what it exports; and he under-estimated **human ingenuity** in raising yields from the same land. Yet the theory is not wholly dead: in parts of Africa and South Asia population still grows faster than food production, and where technology is stagnant and the birth rate high, the pressure Malthus described is real. The balanced answer states the theory, gives the four criticisms, and then says where the warning still bites — which is precisely the case for Liberia, where food production and imported rice must feed a population growing at a rapid rate."},
    {k:"rule"},
    {k:"h3", t:"Optimum, Under- and Over-Population"},
    {k:"table", head:["Condition","What it means","Signs","The policy that follows"], rows:[
     ["Under-population","Too few people for the resources available, so resources lie idle","Vast uncultivated land, unfilled jobs, thin markets, little division of labour","Encourage immigration, raise the birth rate, open the land, build the infrastructure that draws people"],
     ["Optimum population","The size that, with the resources and technology available, gives the highest output per head","Full employment of both labour and resources; the highest real income per head","Maintain the balance as technology and resources change — the optimum moves"],
     ["Over-population","Too many people for the resources, so output per head falls as numbers rise","Unemployment and underemployment, low output per head, pressure on land and forest, congestion, dependence on imported food","Family planning, education, rural development to spread the people, emigration, and raising output faster than numbers"]]},
    {k:"p", t:"Two points earn the higher marks. First, the **optimum is not a fixed number**: it moves with technology, with the discovery of resources and with capital formation, so a country over-populated today at its present technique may not be so tomorrow. Second, **density is not the test**: Japan and the Netherlands are densely peopled and rich, while parts of the interior of Africa are sparsely peopled and poor, because what matters is the number of people **against the resources and the technology available**, not against the land area alone."},
    {k:"rule"},
    {k:"h3", t:"The Labour Market and the Cost of Disease"},
    {k:"p", t:"The guide's question — what becomes of the work force that contributes to national development if it is struck by a pandemic such as HIV and AIDS — is answered in economic terms. A pandemic attacks the **most productive age groups first**, so the labour force shrinks exactly where its skill and strength are greatest; **skills are lost** faster than they can be replaced, since the experienced worker and the trained teacher and nurse die before their time; **absenteeism and sickness** reduce output per worker even among the unaffected; **savings fall and consumption rises**, as families spend on treatment and funerals, so capital formation slows; **orphans** swell the dependent population and leave school, weakening the future labour force; **employers' costs rise** with medical care, insurance, recruitment and retraining; and **government revenue falls** while expenditure on health rises. The **policy answer**: prevention and education, treatment that keeps people working, the protection of girls' schooling, the training of replacement health workers, and the support of orphans — each of which is an investment in the labour force, not merely a welfare cost. The same reasoning applies to any epidemic that removes adults in their productive years, including malaria and tuberculosis."},
    {k:"rule"},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Confusing **de facto with de jure**. De facto counts people **where they are** on census night; de jure counts them at their **usual residence**.",
      "Dividing population by area and calling the answer anything but **persons per square kilometre**. The unit is part of the mark.",
      "Counting the **whole population as the labour force**. The labour force excludes children, the retired, students, the sick and those not seeking work.",
      "Computing the **dependency ratio against the total population**. The denominator is the **working population**, not everybody.",
      "Stating Malthus **without the criticism**, or the criticism without the theory — the question always wants both.",
      "Equating **high density with over-population**. The test is output per head against resources and technology, not people per square kilometre."]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Define population and the population census**, and distinguish de facto from de jure",
      "**State the uses of census figures** and the problems of taking a census in a West African country",
      "**Calculate the birth rate, death rate, rate of natural increase, density, dependency ratio and unemployment rate** — always with the unit stated",
      "**Describe the distribution of population** by region, age, sex and occupation, and account for it — the coast, the towns, the mining and rubber areas",
      "**State and criticise the Malthusian theory** — geometric against arithmetic, the positive and preventive checks, then the four criticisms and where the warning still holds",
      "**Distinguish optimum, under- and over-population** and say which condition a named country is in, with reasons",
      "**Analyse the effect of a pandemic on the labour force and on development** — the loss of the productive ages, of skills, of saving, and the policy response"
    ]}

  ],

  focus:[
    "Definition of population and population census",
    "Types of census: de facto and de jure",
    "Importance, characteristics and problems of a census",
    "Determinants of population size: birth rate, death rate and migration",
    "Calculation of population density and the dependency ratio",
    "The Malthusian theory of population and its critique",
    "Over-population, under-population and optimum population",
    "The labour market, labour force and unemployment"
  ],
  terms:[
    {t:"population", d:"the total number of people living in a defined area", x:"Liberia's population is counted by census."},
    {t:"census", d:"the official counting of a country's people at a given time", x:"A census is usually held every ten years."},
    {t:"de facto census", d:"counting people where they actually are on census night", x:"A de facto census counts travellers where they sleep."},
    {t:"de jure census", d:"counting people at their usual place of residence", x:"A de jure census records permanent residents."},
    {t:"birth rate", d:"live births per thousand of the population per year", x:"A high birth rate raises population growth."},
    {t:"death rate", d:"deaths per thousand of the population per year", x:"Better health care lowers the death rate."},
    {t:"natural increase", d:"the excess of births over deaths", x:"Natural increase drives most population growth."},
    {t:"migration", d:"the movement of people into or out of an area", x:"Migration alters population without births or deaths."},
    {t:"immigration", d:"movement of people into a country", x:"Immigration increases the population."},
    {t:"emigration", d:"movement of people out of a country", x:"Emigration reduces the labour force."},
    {t:"population density", d:"the number of people per unit of land area", x:"Population density is highest in Montserrado."},
    {t:"dependency ratio", d:"the ratio of dependants to the working age population", x:"A high dependency ratio strains earners."},
    {t:"labour force", d:"all persons of working age able and willing to work", x:"The labour force excludes full-time students."},
    {t:"unemployment", d:"the state of being able and willing to work but without a job", x:"Youth unemployment is high in Liberia."},
    {t:"underemployment", d:"working fewer hours or below one's skill level", x:"A graduate selling in the market may be underemployed."},
    {t:"optimum population", d:"the population size giving the highest output per head", x:"At optimum population resources are best used."},
    {t:"over-population", d:"population too large for the resources available", x:"Over-population lowers living standards."},
    {t:"under-population", d:"population too small to use resources fully", x:"Under-population wastes potential output."},
    {t:"Malthusian theory", d:"the view that population grows faster than food supply", x:"The Malthusian theory predicted famine."},
    {t:"life expectancy", d:"the average number of years a person is expected to live", x:"Life expectancy rises with better health care."}
  ],
  facts:[
    {q:"Define a population census and state how often it is usually held.", a:"The official counting and recording of all the people in a country at a particular time, together with information about them. It is usually conducted every ten years."},
    {q:"Distinguish a de facto census from a de jure census.", a:"A de facto census counts people where they physically are on census night, wherever that may be. A de jure census counts them at their normal place of residence, regardless of where they happen to be."},
    {q:"State four uses of census data.", a:"Planning schools, clinics and housing; allocating government revenue and services between counties; determining electoral constituencies; and providing a basis for economic forecasting and business decisions."},
    {q:"State four problems of conducting a census in Liberia.", a:"Poor roads and inaccessible communities, especially in the rains; illiteracy and suspicion of enumerators' motives; shortage of trained staff and funds; and movement of people during the counting period causing omission or double counting."},
    {q:"State the three determinants of population size.", a:"The birth rate, the death rate, and net migration — that is immigration minus emigration."},
    {q:"How is population density calculated?", a:"By dividing the total population by the land area, giving the number of persons per square kilometre."},
    {q:"State the Malthusian theory of population.", a:"Thomas Malthus argued that population tends to grow geometrically while food supply grows only arithmetically, so population would outstrip food and be checked by famine, disease and war unless restrained by later marriage and moral restraint."},
    {q:"State three criticisms of the Malthusian theory.", a:"He did not foresee the great advances in agricultural technology that multiplied food output; he ignored the effect of international trade in moving food to where it is needed; and he did not anticipate the fall in birth rates that accompanies development and family planning."},
    {q:"Distinguish over-population, under-population and optimum population.", a:"Over-population means the population exceeds what the resources can support, lowering output per head. Under-population means there are too few people to exploit the resources fully. Optimum population is the size that gives the highest output per head."},
    {q:"State four causes of unemployment in Liberia.", a:"A mismatch between school leavers' skills and the jobs available; a small formal private sector unable to absorb entrants; seasonal fluctuation in agricultural work; and limited capital and infrastructure to support new enterprise."},
    {q:"Explain the difference between unemployment and underemployment.", a:"An unemployed person is willing and able to work but has no work at all. An underemployed person has work but too few hours, or work far below his skills and qualifications."}
  ],
  tf:[
    {s:"A de facto census counts people at their usual place of residence.", a:"false", why:"That is a de jure census; de facto counts them where they actually are on census night."},
    {s:"Population density is found by dividing population by land area.", a:"true", why:"It gives the number of persons per square kilometre."},
    {s:"Malthus argued that food supply grows faster than population.", a:"false", why:"He argued the opposite: population grows geometrically while food grows arithmetically."},
    {s:"A high dependency ratio places a burden on the working population.", a:"true", why:"Fewer earners must support more children and elderly people."},
    {s:"Emigration reduces a country's labour force.", a:"true", why:"Workers leaving the country are no longer available for domestic production."},
    {s:"Every person of working age is part of the labour force.", a:"false", why:"The labour force includes only those able and willing to work, excluding full-time students, the retired and those unwilling to work."},
    {s:"Census data is used to allocate government services between counties.", a:"true", why:"Population figures determine where schools, clinics and funds are needed."}
  ],
  sort:{ title:"Sort these population concepts", groups:[
    {name:"Increases population", items:["high birth rate","immigration","falling death rate","longer life expectancy"]},
    {name:"Decreases population", items:["high death rate","emigration","falling birth rate","epidemic"]},
    {name:"Uses of census data", items:["planning schools","allocating revenue","drawing constituencies","economic forecasting"]},
    {name:"Problems of a census", items:["poor roads","illiteracy","shortage of funds","double counting"]}
  ]},
  mapwork:{ title:"Population structure and the economy", caption:"Complete the table by stating the economic implication of each feature.", items:[
    {p:"High proportion under 15", f:"Heavy dependency burden and pressure on schools; a large future labour force"},
    {p:"Large working age population", f:"Potentially high output if jobs exist; high unemployment if they do not"},
    {p:"High proportion over 64", f:"Pressure on pensions and health services with fewer earners to support them"},
    {p:"High population density", f:"Pressure on land, housing and services; but a large market and cheap labour"},
    {p:"Low population density", f:"Resources may be underused and infrastructure costly per head"},
    {p:"Rural to urban migration", f:"Labour shortage on farms and overcrowding, unemployment and slums in the city"},
    {p:"High dependency ratio", f:"Lower savings and investment, since more income goes to current consumption"}
  ]},
  casestudy:{ title:"The population of a county",
    text:"A county recorded a population of 480 000 in the last census, spread over an area of 12 000 square kilometres. Of these, 216 000 were under 15 years old and 24 000 were over 64. The county has one referral hospital and 62 primary schools, but only 9 secondary schools. Each year several thousand young people complete primary school and many families move to Monrovia in search of secondary education and paid work. The county superintendent argues that the census figures understate the real population, because the count took place during the rainy season when several districts were unreachable by road.",
    questions:[
      {q:"Calculate the population density of the county.", a:"480 000 \u00f7 12 000 = 40 persons per square kilometre."},
      {q:"Calculate the working age population and the dependency ratio.", a:"Working age = 480 000 \u2212 216 000 \u2212 24 000 = 240 000. Dependants = 240 000. Dependency ratio = 240 000 \u00f7 240 000 = 1.0, or 100 dependants per 100 workers."},
      {q:"What does this dependency ratio mean for the county's economy?", a:"Every worker supports one dependant besides himself, so income is stretched, saving is difficult and demand for schools and clinics is high relative to the tax base."},
      {q:"Why do young people migrate to Monrovia, and what are two effects on the county?", a:"They seek secondary education and paid work, which are scarce locally. The county loses its most energetic workers and future skilled labour, while Monrovia faces overcrowding and youth unemployment."},
      {q:"Is the superintendent's criticism of the census valid? Explain.", a:"Yes. If districts were unreachable, people there were omitted, so the count understates the population. This matters because school places, clinics and revenue are allocated on those figures."}
    ]},
  project:{ title:"Household population survey",
    brief:"Collect and analyse population data for your own community.",
    steps:[
      "Survey at least 20 households, recording the age and sex of every member.",
      "Group the people into under 15, 15 to 64, and over 64.",
      "Calculate the dependency ratio for your sample.",
      "Find out how many people of working age are employed, unemployed or underemployed.",
      "Present your findings and comment on what they suggest for the local economy."
    ],
    criteria:["At least 20 households surveyed","Ages correctly grouped","Dependency ratio correctly calculated","Employment status recorded","Sensible economic conclusions drawn"]},
  worked:[
    {q:"A country has 5 000 000 people in an area of 100 000 km2. Calculate population density.", steps:["Density = population \u00f7 area","5 000 000 \u00f7 100 000"], a:"50 persons per km\u00b2"},
    {q:"Population is 480 000; under 15 is 216 000; over 64 is 24 000. Find the working age population.", steps:["480 000 \u2212 216 000 \u2212 24 000"], a:"240 000"},
    {q:"Using those figures, calculate the dependency ratio.", steps:["Dependants = 216 000 + 24 000 = 240 000","240 000 \u00f7 240 000"], a:"1.0, or 100 dependants per 100 workers"},
    {q:"There are 60 000 live births in a population of 4 000 000. Calculate the birth rate per thousand.", steps:["(60 000 \u00f7 4 000 000) \u00d7 1 000"], a:"15 per 1 000"},
    {q:"Deaths are 36 000 in the same population. Calculate the death rate and the rate of natural increase.", steps:["(36 000 \u00f7 4 000 000) \u00d7 1 000 = 9","15 \u2212 9"], a:"Death rate 9 per 1 000; natural increase 6 per 1 000"},
    {q:"A labour force of 800 000 has 120 000 unemployed. Calculate the unemployment rate.", steps:["(120 000 \u00f7 800 000) \u00d7 100"], a:"15%"},
    {q:"Population grows from 4.0 to 4.2 million in a year. Calculate the growth rate.", steps:["Increase = 0.2 million","(0.2 \u00f7 4.0) \u00d7 100"], a:"5%"}
  ],
  apply:[
    {q:"Why might a government deliberately choose a de facto census despite its drawbacks?", a:"It is simpler and quicker to administer, since enumerators simply count everyone present on one night without needing to establish usual residence, which reduces cost and the risk of double counting."},
    {q:"Explain why a rapidly growing population can slow the rise in living standards.", a:"If population grows as fast as or faster than output, income per head does not rise. Resources must go to feeding, schooling and housing more people rather than to investment that raises future productivity."},
    {q:"How can a large young population be an economic advantage rather than a burden?", a:"If educated and employed, it becomes a large productive labour force with few elderly dependants — a demographic dividend. The advantage depends entirely on whether schooling and jobs are provided."},
    {q:"Suggest three policies to reduce youth unemployment in Liberia.", a:"Expand technical and vocational training matched to actual employer needs; support small business through accessible credit and simpler registration; and invest in agriculture and infrastructure, which are labour intensive and largely rural."},
    {q:"Why is rural to urban migration both a symptom and a cause of economic problems?", a:"It is a symptom of the lack of rural jobs, schools and services. It is also a cause, because it drains agricultural labour while creating urban overcrowding, unemployment and pressure on city services."}
  ],
  activities:[
    "Discuss the meaning of population and population census",
    "Group work outlining the types of population census according to their features",
    "Individual task: count family members by gender and age, and determine dependants and those of working age",
    "Calculate population density and dependency ratios from given data",
    "Debate the relevance of the Malthusian theory to Liberia today",
    "Discuss causes of and solutions to unemployment in Liberia"
  ],
  materials:[
    "Primary text: Stanlake's Economics by S. J. Grant, 8th edition",
    "Essential Economics for Senior Secondary Schools (Cole Esan Ande), 5th edition, 2017",
    "Comprehensive Economics for Senior Secondary School (Johnson U. Anyaele, 1997)",
    "Liberian census data and population charts",
    "Calculators and graph paper"
  ],
  assessment:["Presentation, individual and group","Written assignment","Quiz","Population survey project","Written test"]
},
{
  grade:11, period:"V", sem:"Two", icon:"💵",
  title:"Theory of Cost and Revenue",
  subtitle:"Cost concepts, the economist's and accountant's view, cost and revenue curves, and profit maximisation",
  outcomes:[
    "Learners are able to analyse the reasons business firms make decisions on production, profit and losses"
  ],
  objectives:[
    "Demonstrate understanding of the meaning of costs and revenue",
    "Distinguish between the various cost concepts",
    "Distinguish the economist's and the accountant's view of cost",
    "Analyse different cost and revenue curves",
    "Calculate costs and revenue and determine profit"
  ],
  note:"<b>Total cost = fixed cost + variable cost</b>. <b>Average cost = TC ÷ Q</b>. <b>Marginal cost</b> is the addition to total cost from one more unit. <b>Total revenue = price × quantity</b>. The accountant counts only <b>explicit</b> money costs; the economist adds <b>implicit</b> costs — the opportunity cost of the owner's own resources. Profit is maximised where <b>MC = MR</b>.",
  study:[
    /* ---- course text: Semester Two, Period V — Theory of Cost and Revenue (guide pp. 21-22) ---- */
    {k:"h3", t:"Cost, Revenue and the Two Views of Cost"},
    {k:"p", t:"The **cost of production** is the total expense of making output; **revenue** is what the sale of the output brings in. The **accountant's view** counts only the **explicit costs** — actual money paid out for wages, materials, rent and interest. The **economist's view** adds the **implicit costs** — the opportunity cost of the owner's own time, building and money, which earn nothing elsewhere because they are used here. Profit to the accountant is revenue minus explicit cost; profit to the economist also deducts implicit cost."},
    {k:"rule"},
    {k:"h3", t:"The Cost Concepts"},
    {k:"bul", items:[
      "**Fixed cost (FC)** — does not change with output: rent, insurance, the manager's salary",
      "**Variable cost (VC)** — changes with output: raw materials, fuel, piece-rate wages",
      "**Total cost (TC) = fixed cost + variable cost**",
      "**Average cost (AC) = total cost ÷ quantity produced**; average fixed and average variable cost follow the same pattern",
      "**Marginal cost (MC)** — the addition to total cost from producing one more unit",
      "**Short-run cost** — the period with at least one fixed input; **long-run cost** — the period in which all inputs can be varied, so every cost becomes variable"]},
    {k:"rule"},
    {k:"h3", t:"Cost Tables, Curves and Calculations"},
    {k:"p", t:"Build a hypothetical firm's **cost table** output by output: fixed cost stays constant, variable cost climbs, total cost is their sum; divide and subtract to fill in average cost, average variable cost and marginal cost. Plotted, the curves show the familiar shapes: average fixed cost falls throughout, marginal cost cuts average cost and average variable cost at their lowest points, and the long-run average cost curve first falls with economies of scale and then rises with diseconomies. On the revenue side, **total revenue = price × quantity**, average revenue equals price, and **marginal revenue** is the addition to revenue from one more unit; profit is at its greatest where **marginal cost = marginal revenue**."},
    {k:"p", t:"Apply the concepts in debate: using opportunity cost, weigh the effects of early marriage against the benefit of education for the social and economic development of the individual — for girls and for boys — and cite the regions or sections of Liberia where early marriage is still practised."},
    {k:"h3", t:"A Cost Table Worked in Full"},
    {k:"p", t:"The cost table is the single most common calculation in this unit. Fixed cost is **given and constant**; every other column is derived from it. Learn the order of working: TC = FC + VC; AFC = FC ÷ Q; AVC = VC ÷ Q; AC = TC ÷ Q (which is also AFC + AVC); MC = the change in TC."},
    {k:"table", head:["Output (Q)","Fixed cost","Variable cost","Total cost","Average fixed cost","Average variable cost","Average cost","Marginal cost"], rows:[
     ["1","100","60","160","100.0","60.0","160.0","—"],
     ["2","100","100","200","50.0","50.0","100.0","40"],
     ["3","100","135","235","33.3","45.0","78.3","35"],
     ["4","100","180","280","25.0","45.0","70.0","45"],
     ["5","100","240","340","20.0","48.0","68.0","60"],
     ["6","100","320","420","16.7","53.3","70.0","80"],
     ["7","100","430","530","14.3","61.4","75.7","110"]]},
    {k:"p", t:"Read the shapes off the table, because the question asks for them: **average fixed cost falls throughout**, since the same L$100 is spread over more units — from 100.0 to 14.3. **Average cost is U-shaped**, falling to its lowest at an output of **5 units (L$68.0)** and rising after. **Marginal cost falls and then rises**, reaching its lowest at the third unit, and it **cuts average cost at average cost's lowest point** — check it: MC is 60 when AC falls to 68.0, and MC is 80 when AC rises to 70.0, so the crossing lies between the fifth and sixth units, exactly at the AC minimum. That MC cuts AC and AVC **at their lowest points** is a law, and the reason is simple: while the extra unit costs less than the average, it pulls the average down; when it costs more, it pulls the average up."},
    {k:"rule"},
    {k:"h3", t:"Why the Curves Take Their Shapes"},
    {k:"p", t:"**AFC** falls continuously and approaches the horizontal axis without touching it — the fixed cost never disappears, but its burden per unit becomes negligible. **AVC** is U-shaped because of the **law of diminishing returns**: at first the variable factor is too few for the fixed plant, so adding workers raises output faster than cost and AVC falls; after a point diminishing returns set in, each further worker adds less, and AVC rises. **AC** is U-shaped for the same reason, but lies **above AVC** by the amount of AFC, and the gap narrows as output grows. **MC** is U-shaped and steeper, cutting both AVC and AC at their minima. In the **long run** every input is variable, so there is no fixed cost: the **long-run average cost curve** is the envelope of all the short-run curves, falling where **economies of scale** operate, flat over a range of **constant returns to scale**, and rising where **diseconomies of scale** set in — the U-shape of the long run is caused by scale, the U-shape of the short run by diminishing returns, and the distinction is worth a mark."},
    {k:"rule"},
    {k:"h3", t:"The Revenue Side and Profit Maximisation"},
    {k:"p", t:"**Total revenue (TR) = price × quantity**. **Average revenue (AR) = TR ÷ Q**, which equals the **price** at every output. **Marginal revenue (MR)** is the addition to TR from selling one more unit. Under perfect competition, where the price is fixed, **MR = AR = price**. Where the firm must lower its price to sell more, **MR lies below AR**."},
    {k:"table", head:["Output","Price","Total revenue","Marginal revenue","Total cost","Profit"], rows:[
     ["1","100","100","—","160","-60"],
     ["2","100","200","100","200","0"],
     ["3","100","300","100","235","65"],
     ["4","100","400","100","280","120"],
     ["5","100","500","100","340","160"],
     ["6","100","600","100","420","180"],
     ["7","100","700","100","530","170"]]},
    {k:"p", t:"With the price fixed at L$100, MR is L$100 at every output. Compare it with MC from the cost table: at the sixth unit MC = 80, which is **less than** MR = 100, so the sixth unit adds to profit; at the seventh MC = 110, which is **more than** MR = 100, so the seventh unit **subtracts** from profit. Profit is therefore greatest at **6 units**, where it is L$180 — and that is the point at which **MC = MR**. State the rule in full: **a firm maximises profit where marginal cost equals marginal revenue, provided marginal cost is rising** — the second condition matters, because MC = MR also holds where MC is falling, and there profit is at a minimum, not a maximum. Note too that the firm continues to produce in the short run so long as price covers **average variable cost**, even if it does not cover average cost, because by producing it at least meets the variable costs and contributes something to the fixed costs it must pay anyway; it shuts down only when price falls below AVC."},
    {k:"rule"},
    {k:"h3", t:"The Accountant's Profit and the Economist's Profit"},
    {k:"p", t:"A trader takes L$1 200 000 in revenue. Her **explicit costs** — what she actually pays out — are L$700 000 in stock, L$180 000 in wages and L$120 000 in rent and transport, a total of L$1 000 000. The **accountant's profit** is 1 200 000 − 1 000 000 = **L$200 000**. The economist adds the **implicit costs**, the opportunity cost of what she supplies herself and pays nothing for: the L$60 000 a year she would earn managing another business, and the L$40 000 a year her own building would fetch as rent — L$100 000 in all. The **economist's profit** is 200 000 − 100 000 = **L$100 000**. Where the economist's profit is **zero**, the business is earning exactly what its owner's resources would earn elsewhere — **normal profit**, which is a **cost** from the economist's point of view and not a surplus at all. Only a **positive economist's profit** is **supernormal**. This is why the two views never agree, and why a firm can show an accounting profit while an economist says it is not covering its true cost."},
    {k:"rule"},
    {k:"h3", t:"Opportunity Cost Applied to a Life Decision"},
    {k:"p", t:"The guide's debate — early marriage against education, weighed by opportunity cost — is answered as an economic calculation in words. The **benefit of continuing in school** is the lifetime earnings a qualification brings, the wider choice of occupation, the later age at first birth and the smaller family that education brings with it, and the better health and schooling of the children. The **cost** is the fees, the books and the income forgone while in school. The **opportunity cost of early marriage** is the whole of that forgone: the qualification never taken, the earnings never obtained, and the dependence that follows. For a **girl** the cost is the greater, because the earnings differential between the schooled and the unschooled is wider for women and because the health and educational benefit passes to the next generation. For a **boy** the same reasoning holds, though the immediate pressure to leave school for work is often stronger. Name the parts of Liberia where early marriage remains common — the rural and interior counties, and the communities where the practice is supported by custom and by bride-price — and then say what reduces it: keeping girls in school, enforcing the law on the minimum age, and making the return to schooling visible to the family that pays for it."},
    {k:"rule"},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Computing **marginal cost as total cost ÷ output**. That is average cost; marginal cost is the **change** in total cost between two outputs.",
      "Saying **average fixed cost is U-shaped**. It falls continuously; only AVC, AC and MC are U-shaped.",
      "Forgetting that **MC cuts AC and AVC at their lowest points** — and that it cuts AC at a higher output than AVC.",
      "Stating **MC = MR** as the profit-maximising condition without adding **with MC rising**.",
      "Confusing **accounting profit with economic profit**, or treating **normal profit as a surplus**. Normal profit is a cost — the opportunity cost of the entrepreneur's own resources.",
      "Treating the **long run as a length of time**. It is the period in which **all** inputs can be varied; for a market trader it may be a month, for a steelworks ten years."]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Define cost, revenue and profit**, and distinguish the accountant's view from the economist's — explicit against implicit cost, normal against supernormal profit",
      "**Define each cost concept** — fixed, variable, total, average, average fixed, average variable, marginal — with the formula for each",
      "**Complete a cost table** from fixed and variable cost: the marks go to TC, AFC, AVC, AC and MC, each correctly derived",
      "**Draw the cost curves** and explain their shapes — the continuous fall of AFC, the U of AVC and AC from diminishing returns, MC cutting both at their minima",
      "**Complete a revenue table** and find the profit-maximising output where MC = MR with MC rising",
      "**Distinguish the short run from the long run**, and relate the long-run average cost curve to economies and diseconomies of scale",
      "**Apply opportunity cost to a social question** — state the alternatives, name the next best one forgone, and weigh it against the benefit"
    ]}

  ],

  focus:[
    "Definitions of cost of production and revenue",
    "The economist's and the accountant's view of cost",
    "Explicit and implicit costs",
    "Fixed, variable, marginal, average and total cost",
    "Short run and long run cost",
    "Derivation of cost and revenue curves; cost tables",
    "Calculation of cost, revenue and profit",
    "The break-even point and profit maximisation"
  ],
  terms:[
    {t:"cost of production", d:"the total expenses incurred in producing a good", x:"Cost of production determines the minimum price."},
    {t:"fixed cost", d:"a cost that does not change with the level of output", x:"Rent is a fixed cost."},
    {t:"variable cost", d:"a cost that changes directly with output", x:"Raw materials are a variable cost."},
    {t:"total cost", d:"the sum of fixed and variable costs", x:"Total cost rises as output rises."},
    {t:"average cost", d:"total cost divided by the number of units produced", x:"Average cost is the cost per unit."},
    {t:"marginal cost", d:"the addition to total cost from producing one more unit", x:"Marginal cost guides output decisions."},
    {t:"explicit cost", d:"an actual money payment made to outsiders", x:"Wages paid are an explicit cost."},
    {t:"implicit cost", d:"the opportunity cost of resources the owner already owns", x:"The owner's forgone salary is an implicit cost."},
    {t:"accounting cost", d:"the explicit money costs recorded in the books", x:"Accounting cost omits implicit costs."},
    {t:"economic cost", d:"explicit plus implicit costs", x:"Economic cost gives the true cost of a decision."},
    {t:"total revenue", d:"price multiplied by quantity sold", x:"Total revenue is the firm's gross income."},
    {t:"average revenue", d:"total revenue divided by quantity, equal to price", x:"Average revenue is the price per unit."},
    {t:"marginal revenue", d:"the addition to total revenue from selling one more unit", x:"Marginal revenue falls for a monopolist."},
    {t:"accounting profit", d:"total revenue minus explicit costs", x:"Accounting profit appears in the accounts."},
    {t:"economic profit", d:"total revenue minus explicit and implicit costs", x:"Economic profit may be zero when accounting profit is positive."},
    {t:"normal profit", d:"the minimum return needed to keep the entrepreneur in business", x:"Normal profit is treated as a cost."},
    {t:"break-even point", d:"the output at which total revenue equals total cost", x:"Below break-even the firm makes a loss."},
    {t:"short run", d:"the period in which at least one factor is fixed", x:"In the short run capacity cannot change."},
    {t:"long run", d:"the period in which all factors can be varied", x:"In the long run a firm can build a new plant."},
    {t:"economies of scale", d:"the fall in average cost as output expands", x:"Economies of scale favour large firms."}
  ],
  facts:[
    {q:"Distinguish fixed costs from variable costs with two examples of each.", a:"Fixed costs do not vary with output and must be paid even at zero output, such as rent and insurance. Variable costs change directly with output, such as raw materials and fuel."},
    {q:"Give the formulae for total cost, average cost and marginal cost.", a:"Total cost = fixed cost + variable cost. Average cost = total cost \u00f7 quantity. Marginal cost = change in total cost \u00f7 change in quantity."},
    {q:"Distinguish explicit from implicit costs with an example of each.", a:"An explicit cost is an actual payment to outsiders, such as wages or rent paid. An implicit cost is the opportunity cost of resources the owner already owns, such as the salary he could have earned elsewhere or rent on his own building."},
    {q:"Distinguish the accountant's view of cost from the economist's.", a:"The accountant records only explicit money costs actually paid. The economist includes implicit costs as well, because using one's own resources still means giving up their next best use."},
    {q:"Distinguish accounting profit from economic profit.", a:"Accounting profit is total revenue minus explicit costs. Economic profit is total revenue minus both explicit and implicit costs, and is therefore smaller — a business can show accounting profit yet make an economic loss."},
    {q:"Why is normal profit treated as a cost of production?", a:"It is the minimum return the entrepreneur must earn to remain in this business rather than move his resources elsewhere, so it is the opportunity cost of enterprise."},
    {q:"Why is the average cost curve U-shaped?", a:"At low output, fixed cost is spread over few units so average cost is high. As output rises it is spread more thinly and average cost falls. Beyond the efficient scale diminishing returns raise variable cost per unit and average cost rises again."},
    {q:"What is the break-even point and why does a firm need to know it?", a:"The output at which total revenue exactly equals total cost, so there is neither profit nor loss. It tells the firm the minimum it must sell to avoid a loss."},
    {q:"State the condition for profit maximisation.", a:"Profit is greatest at the output where marginal cost equals marginal revenue, provided marginal cost is rising."},
    {q:"Distinguish the short run from the long run in production.", a:"In the short run at least one factor, usually plant or land, is fixed, so output changes only by varying labour and materials. In the long run all factors including plant size can be varied and new firms may enter."}
  ],
  tf:[
    {s:"Fixed costs must be paid even when output is zero.", a:"true", why:"Rent and insurance continue regardless of production."},
    {s:"Marginal cost is total cost divided by quantity.", a:"false", why:"That is average cost; marginal cost is the change in total cost from one more unit."},
    {s:"The economist includes implicit costs while the accountant does not.", a:"true", why:"The economist counts the opportunity cost of the owner's own resources."},
    {s:"A firm making accounting profit is always making economic profit.", a:"false", why:"If implicit costs exceed the accounting profit, the firm is making an economic loss."},
    {s:"Profit is maximised where marginal cost equals marginal revenue.", a:"true", why:"Beyond that point each extra unit adds more to cost than to revenue."},
    {s:"Normal profit is treated as part of the cost of production.", a:"true", why:"It is the minimum return needed to keep the entrepreneur in the industry."},
    {s:"In the long run all factors of production are variable.", a:"true", why:"That is precisely what distinguishes the long run from the short run."}
  ],
  sort:{ title:"Sort these costs and concepts", groups:[
    {name:"Fixed costs", items:["rent","insurance","licence fee","salaried manager"]},
    {name:"Variable costs", items:["raw materials","fuel","casual wages","packaging"]},
    {name:"Explicit costs", items:["wages paid","rent paid","electricity bill"]},
    {name:"Implicit costs", items:["owner's forgone salary","rent on own building","interest forgone on own capital"]}
  ]},
  mapwork:{ title:"A cost and revenue table", caption:"Complete the table by explaining how each column is obtained.", items:[
    {p:"Output (Q)", f:"The number of units produced in the period"},
    {p:"Total fixed cost (TFC)", f:"Unchanged at every level of output, including zero"},
    {p:"Total variable cost (TVC)", f:"Rises as output rises; zero when output is zero"},
    {p:"Total cost (TC)", f:"TFC + TVC at each level of output"},
    {p:"Average cost (AC)", f:"TC \u00f7 Q — the cost per unit produced"},
    {p:"Marginal cost (MC)", f:"The change in TC when output rises by one unit"},
    {p:"Total revenue (TR)", f:"Price \u00d7 quantity sold"},
    {p:"Profit", f:"TR \u2212 TC; the firm breaks even where they are equal"}
  ]},
  casestudy:{ title:"The bakery's true profit",
    text:"James left a job paying 30 000 Liberian dollars a month to open a bakery in a shop he already owned, which he could have rented out for 20 000 a month. He also used 500 000 dollars of his own savings, which had been earning 5 per cent a year in the bank. In his first year the bakery took 3 600 000 dollars in sales. He paid 1 800 000 for flour and other materials, 600 000 in wages, 240 000 for fuel and 120 000 for licences and insurance. His accountant congratulated him on a profit of 840 000 dollars. James, having studied Economics, was less certain.",
    questions:[
      {q:"Calculate the accounting profit and confirm the accountant's figure.", a:"Explicit costs = 1 800 000 + 600 000 + 240 000 + 120 000 = 2 760 000. Accounting profit = 3 600 000 \u2212 2 760 000 = 840 000 dollars."},
      {q:"Identify and calculate James's three implicit costs for the year.", a:"Forgone salary 30 000 \u00d7 12 = 360 000; forgone rent 20 000 \u00d7 12 = 240 000; forgone interest 5% of 500 000 = 25 000. Total implicit cost = 625 000 dollars."},
      {q:"Calculate his economic profit.", a:"840 000 \u2212 625 000 = 215 000 dollars economic profit."},
      {q:"Why was James right to be less certain than his accountant?", a:"Because the accountant ignored the opportunity cost of James's own labour, building and capital. The true return above what he could have earned elsewhere is 215 000, not 840 000."},
      {q:"If his sales had been 3 300 000 dollars, advise James on whether to continue.", a:"Accounting profit would be 540 000 but economic profit would be 540 000 \u2212 625 000 = \u221285 000, an economic loss. He would be better off returning to employment and renting out the shop."}
    ]},
  project:{ title:"Costing a small business",
    brief:"Construct a full cost and revenue statement for a real small business.",
    steps:[
      "With permission, choose a small business such as a tailor, barber or food seller.",
      "List all fixed costs and all variable costs for one month.",
      "Record total revenue for the same month.",
      "Calculate total cost, average cost per unit and accounting profit.",
      "Identify at least two implicit costs and calculate the economic profit."
    ],
    criteria:["A real business studied with permission","Fixed and variable costs correctly separated","Accurate calculation of total and average cost","Accounting profit correctly computed","At least two implicit costs identified and economic profit calculated"]},
  worked:[
    {q:"Fixed cost is L$40 000 and variable cost L$60 000. Calculate total cost.", steps:["TC = TFC + TVC","40 000 + 60 000"], a:"L$100 000"},
    {q:"Total cost is L$100 000 for 500 units. Calculate average cost.", steps:["AC = TC \u00f7 Q","100 000 \u00f7 500"], a:"L$200 per unit"},
    {q:"Total cost rises from L$100 000 to L$104 500 when output rises from 500 to 520 units. Find marginal cost.", steps:["\u0394TC = 4 500, \u0394Q = 20","4 500 \u00f7 20"], a:"L$225 per unit"},
    {q:"A firm sells 500 units at L$260 each. Calculate total revenue and profit if TC is L$100 000.", steps:["TR = 260 \u00d7 500 = 130 000","Profit = 130 000 \u2212 100 000"], a:"TR L$130 000; profit L$30 000"},
    {q:"Fixed cost L$40 000, price L$260, variable cost per unit L$120. Calculate the break-even output.", steps:["Contribution per unit = 260 \u2212 120 = 140","BEP = 40 000 \u00f7 140"], a:"286 units (to the nearest unit)"},
    {q:"Revenue is L$3 600 000 and explicit costs L$2 760 000. Calculate accounting profit.", steps:["3 600 000 \u2212 2 760 000"], a:"L$840 000"},
    {q:"Implicit costs total L$625 000. Calculate the economic profit from that accounting profit.", steps:["840 000 \u2212 625 000"], a:"L$215 000"},
    {q:"Average cost is L$200 and price L$260. Calculate profit per unit and total profit on 500 units.", steps:["260 \u2212 200 = 60","60 \u00d7 500"], a:"L$60 per unit; L$30 000 total"}
  ],
  apply:[
    {q:"Why might a firm continue producing in the short run even while making a loss?", a:"If price covers average variable cost and makes some contribution to fixed costs, the loss is smaller than the fixed costs it would still pay if it shut down. It closes only if price falls below average variable cost."},
    {q:"Explain why a large bakery can often sell bread more cheaply than a small one.", a:"Economies of scale: fixed costs such as the oven and licence are spread over far more loaves, bulk flour purchases are cheaper, and specialised staff and machinery raise productivity, so average cost per loaf is lower."},
    {q:"A trader says her business is profitable because money comes in every day. Assess this.", a:"Cash coming in is revenue, not profit. Profit requires revenue to exceed total cost, and economic profit requires it also to exceed the opportunity cost of her own time and capital."},
    {q:"How would a rise in the price of fuel affect a transport firm's cost curves?", a:"Fuel is a variable cost, so variable, total, average and marginal cost curves all shift upward. Fixed cost is unchanged, so the break-even output rises."},
    {q:"Why must a firm know its marginal cost as well as its average cost?", a:"Average cost shows profitability overall, but marginal cost shows whether producing one more unit adds more to revenue than to cost — which is the basis for deciding output."}
  ],
  activities:[
    "Brainstorm the definitions of cost and revenue",
    "Group work demonstrating the cost of production and revenue concepts",
    "Construct cost tables and derive cost and revenue curves",
    "Calculate total, average and marginal cost and revenue from given data",
    "Debate using the concept of opportunity cost: the effects of early marriage against the benefit of education for individual and national development",
    "Case work distinguishing accounting profit from economic profit"
  ],
  materials:[
    "Primary text: Stanlake's Economics by S. J. Grant, 8th edition",
    "Essential Economics for Senior Secondary Schools (Cole Esan Ande), 5th edition, 2017",
    "Comprehensive Economics for Senior Secondary School (Johnson U. Anyaele, 1997)",
    "Graph paper and calculators",
    "Sample business accounts"
  ],
  assessment:["Presentation, individual and group","Written assignment","Quiz","Costing project","Written test"]
},
{
  grade:11, period:"VI", sem:"Two", icon:"🌾",
  title:"The Role of Agriculture in Economic Development",
  subtitle:"Agricultural products of Liberia and West Africa, the challenges facing the sector, and policy recommendations",
  outcomes:[
    "Learners are able to analyse and appreciate the role and importance of agriculture in the social and economic development of a nation"
  ],
  objectives:[
    "Identify and discuss the major agricultural products of Liberia and West African countries",
    "Identify the major export and import crops",
    "Analyse the factors that hamper the agricultural sector in Liberia and West Africa",
    "Explain the importance of agricultural products to economic development, using Liberia as a case",
    "Formulate recommendations to enhance government agricultural policy"
  ],
  note:"Agriculture contributes to development in several ways: it supplies <b>food</b>, provides <b>employment</b> for most of the rural population, earns <b>foreign exchange</b> from exports such as rubber and cocoa, supplies <b>raw materials</b> to industry, and provides a <b>market</b> for manufactured goods. Liberia's main <b>cash crops</b> are rubber, cocoa, coffee, oil palm and sugar cane; the main <b>food crops</b> are rice and cassava.",
  study:[
    /* ---- course text: Semester Two, Period VI — The Role of Agriculture in Economic Development (guide p. 23) ---- */
    {k:"h3", t:"Agricultural Products of Liberia and West Africa"},
    {k:"p", t:"The **cash crops** grown for export and sale are rubber, cocoa, coffee, oil palm, sugar cane and cotton; the **food crops** are rice, cassava, yams, plantain, eddoes and vegetables; **livestock** — cattle, goats, sheep, pigs and poultry — remains small in scale; **fisheries** supply fish from the sea, the rivers and the fish ponds. Identify the major export crops and the major import products of Liberia and its West African neighbours: exports run to rubber, iron ore, timber, cocoa and palm products; imports bring rice, fuel, machinery and manufactured goods."},
    {k:"rule"},
    {k:"h3", t:"The Challenges of Agricultural Production"},
    {k:"p", t:"Six constraints hamper farming in Liberia and West Africa. **Land** — tenure is often customary, insecure and fragmented, and good land lies unused. **Subsidy** — farmers receive little of the support their competitors abroad enjoy. **Storage** — without barns, silos and drying floors, crops spoil and prices collapse at harvest. **Education** — extension advice and training reach few farmers. **Infrastructure (roads)** — produce rots before it reaches the market. **Technology** — the hand hoe and the cutlass still rule, with little machinery, fertiliser or improved seed. Discuss each and how it might be alleviated."},
    {k:"rule"},
    {k:"h3", t:"The Importance of Agriculture to Development"},
    {k:"p", t:"Using Liberia as the case: agriculture **feeds** the nation and saves foreign exchange on food imports; it **employs** most of the people and earns their income; it supplies **raw materials** to industry — rubber to the factories, palm fruit to the mills, cane to the sugar plant; it earns **foreign exchange** from exports; it provides a **market** for the products of towns; and its surplus releases labour and savings to the rest of the economy. No economy develops with agriculture left behind."},
    {k:"rule"},
    {k:"h3", t:"Recommendations for Policy"},
    {k:"p", t:"Formulate recommendations to enhance government agricultural policy: secure land tenure and consolidate holdings; expand extension services and farmer education; subsidise seed, fertiliser and tools; build feeder roads, storage and processing plants; organise cooperative marketing; offer credit sized to the farming calendar; stabilise producer prices; and attract investment into plantations and agro-industry. Each recommendation should answer one of the challenges above."},
    {k:"h3", t:"The Agricultural Products of Liberia in Detail"},
    {k:"table", head:["Group","Products","Where grown or obtained","Use"], rows:[
     ["Cash (export) crops","Rubber, cocoa, coffee, oil palm, sugar cane, cotton, kola","Rubber across Montserrado, Bong, Margibi, Grand Bassa and Sinoe; cocoa and coffee in Lofa, Nimba, Bong and Grand Gedeh; oil palm in the coastal counties","Export earnings and raw material for processing"],
     ["Food crops","Rice (upland and lowland), cassava, yams, plantain and banana, eddoes and cocoyam, potatoes, vegetables","Upland rice throughout the interior; lowland rice in the swamps and river valleys; cassava everywhere","The nation's food; rice is the staple"],
     ["Livestock","Cattle, goats, sheep, pigs, poultry","Cattle chiefly in the drier north and in the savannah counties; small stock and poultry throughout","Protein, income, and a store of wealth"],
     ["Fisheries","Marine fish, river and lake fish, fish from ponds","The Atlantic coast from Robertsport to Harper; the rivers and Lake Piso; inland ponds","The cheapest animal protein for most households"]]},
    {k:"p", t:"Know the **export** and **import** lists by heart, for the question is short and the marks are fixed. Liberia's **exports**: rubber, iron ore, timber, cocoa, coffee, gold and diamonds, and palm products. Liberia's **imports**: **rice above all**, then petroleum products, machinery and transport equipment, manufactured goods, and medicines. The contrast between a country that exports agricultural raw materials and imports its staple food is the central fact of Liberian agricultural economics, and the paper returns to it in almost every session."},
    {k:"rule"},
    {k:"h3", t:"The Six Constraints — Cause, Effect and Remedy"},
    {k:"table", head:["Constraint","How it limits production","The remedy"], rows:[
     ["Land and land tenure","Customary tenure gives no title a bank will accept, so a farmer cannot borrow against his land; holdings are small and fragmented by inheritance, so no machine pays","Registration and titling, the recognition of customary right in a form banks accept, consolidation of plots, and the planned opening of unused land"],
     ["Subsidy","Farmers abroad receive price support, cheap inputs and insurance; the Liberian farmer receives almost none, so his cost per bag is higher than that of the imported rice he competes with","Targeted subsidies on seed, fertiliser and tools, a producer-price support for rice, and crop insurance against flood and drought"],
     ["Storage","Without barns, silos and drying floors the crop spoils, and the farmer must sell at harvest when the price is lowest — the trader with a store gains the whole of the seasonal price rise","Community warehouses, drying floors, cold rooms at the markets, and warehouse receipts against which the farmer can borrow until the price recovers"],
     ["Education and extension","The extension officer cannot reach every farmer, so improved seed, spacing, planting dates and pest control spread slowly; the average farmer is ageing and many young people leave for town","More extension officers and motorbikes, farmer field schools, demonstration plots, radio programmes in local languages, and agriculture taught practically in the schools"],
     ["Infrastructure — roads","A feeder road impassable in the rain means produce rots on the farm, inputs never arrive, and the middleman's margin is the cost of the journey","Feeder-road construction and maintenance, culverts and small bridges, and the grading of produce routes by the volume they carry"],
     ["Technology","The hand hoe and the cutlass limit the area one family can farm to a hectare or two; without fertiliser and improved seed the yield per hectare stays low; without a mill the value added is earned elsewhere","Mechanisation where the scale allows, improved and disease-resistant seed, fertiliser at a price a small farmer can pay, small mills and processing plants at the source"]]},
    {k:"rule"},
    {k:"h3", t:"The Importance of Agriculture to Development"},
    {k:"p", t:"State the contributions as a numbered list with a Liberian illustration against each — the marks are for the point plus the application."},
    {k:"num", items:[
      "**It feeds the nation.** Rice and cassava from Liberian farms reduce the bill for imported rice and the foreign exchange spent on it; every bag grown at home is a bag not bought abroad.",
      "**It employs most of the people.** The great majority of Liberians earn their living from the land, so the level of agricultural income decides the level of income in the country as a whole.",
      "**It supplies raw materials to industry.** Rubber to the processing plants, palm fruit to the oil mills, cocoa and coffee to the fermenting and drying stations, sugar cane to the sugar plant, timber to the sawmills — without the farm the factory has nothing to work on.",
      "**It earns foreign exchange.** Rubber, cocoa, coffee, timber and palm products are sold abroad and bring in the dollars with which the country buys rice, fuel, machinery and medicines.",
      "**It provides a market for the products of the towns.** The farmer with a surplus buys cloth, tools, roofing sheets, radios and transport — so rural income is the demand that keeps the town's shops and workshops open.",
      "**Its surplus releases labour and saving to the rest of the economy.** A farm that feeds five families with three can spare two for industry; a farm that earns a surplus provides the saving from which investment comes.",
      "**It supplies the government with revenue**, directly through export duties and crop levies and indirectly through the income and consumption taxes of the people it employs."]},
    {k:"rule"},
    {k:"h3", t:"Policy Recommendations Argued, Not Listed"},
    {k:"p", t:"A recommendation earns its mark only when the candidate says **who does it, how it is paid for, and what it changes**. Secure **land tenure** by registering customary holdings, so that a farmer has a document a bank will accept and will plant a tree crop that pays after ten years. Expand the **extension service** with more officers and transport, and teach agriculture practically in the rural schools so the young see farming as a business. **Subsidise** seed, fertiliser and tools for a stated period, and support the producer price of rice so that local rice can compete with the imported. Build **feeder roads, storage and processing plants** where the volume justifies them, so the crop reaches the market and the value added stays in the country. Organise **cooperative marketing**, so farmers buy inputs and sell produce as one and bargain from strength. Provide **credit sized to the farming calendar**, lent at planting and repaid at harvest, from cooperatives and rural banks rather than from the moneylender. **Stabilise producer prices** through a marketing board or a reserve fund, so the farmer is not ruined in a year of plenty. And **attract investment into plantations and agro-industry**, with the terms stated in advance so that the country keeps a fair share of what its land produces."},
    {k:"rule"},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Listing **rice as an export crop**. Rice is the staple **food** crop and Liberia's largest agricultural **import**; the exports are rubber, cocoa, coffee, palm products and timber.",
      "Naming a **constraint without its remedy**, or a remedy without saying who carries it out and how it is financed.",
      "Treating **subsistence farming as unproductive**. It feeds the majority of the population; the problem is its low output per hectare and its weak link to the market, not its existence.",
      "Confusing **cash crops with food crops** — the distinction is the purpose of production, and several crops (oil palm, cassava) serve both.",
      "Forgetting **foreign exchange** among the contributions of agriculture. It is the contribution the examiner most often sets the question for.",
      "Answering the policy question with **generalities**. 'Improve agriculture' earns nothing; 'register customary land so a farmer can borrow against it' earns the mark."]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**List the cash crops, food crops, livestock and fisheries** of Liberia and West Africa, and say where each is produced",
      "**Identify the major exports and imports** of Liberia and of its neighbours — the exports of raw materials against the import of rice and manufactures",
      "**Explain the problems of agricultural production** — land tenure, subsidy, storage, education, roads, technology — each with its effect on output",
      "**State the importance of agriculture to economic development**, with a Liberian illustration against each contribution",
      "**Formulate recommendations for government agricultural policy**, each with the agency, the cost and the expected effect",
      "**Explain the role of cooperatives** in marketing, credit and input supply, and their limits",
      "**Account for the low productivity of Liberian agriculture** and relate it to the import of the staple food"
    ]}

  ],

  focus:[
    "Agricultural products in Liberia and West Africa: cash crops, food crops, livestock and fisheries",
    "Major export and import products",
    "Challenges of agricultural production: land, subsidy, storage, education, infrastructure and technology",
    "The importance of agriculture to economic development",
    "Government agricultural policy and recommendations for improvement"
  ],
  terms:[
    {t:"agriculture", d:"the cultivation of crops and rearing of animals", x:"Agriculture employs most Liberians."},
    {t:"cash crop", d:"a crop grown mainly for sale, often for export", x:"Rubber is Liberia's leading cash crop."},
    {t:"food crop", d:"a crop grown mainly for consumption", x:"Rice is the staple food crop."},
    {t:"subsistence farming", d:"farming to feed the farmer's own household", x:"Subsistence farming leaves little surplus."},
    {t:"commercial farming", d:"farming for sale in the market", x:"Commercial farming needs capital and transport."},
    {t:"plantation", d:"a large estate growing a single cash crop", x:"Firestone operates a rubber plantation."},
    {t:"livestock", d:"animals reared for food or work", x:"Goats and poultry are common livestock."},
    {t:"fisheries", d:"the industry of catching and processing fish", x:"Fisheries supply cheap protein."},
    {t:"food security", d:"reliable access to sufficient safe food for all", x:"Food security reduces dependence on imports."},
    {t:"subsidy", d:"a payment by government to reduce the cost of production", x:"A fertiliser subsidy lowers the farmer's cost."},
    {t:"extension service", d:"government advice and training given to farmers", x:"Extension services spread new techniques."},
    {t:"mechanisation", d:"the use of machinery in place of manual labour", x:"Mechanisation raises output per worker."},
    {t:"irrigation", d:"the artificial supply of water to crops", x:"Irrigation allows farming in the dry season."},
    {t:"post-harvest loss", d:"produce lost between harvest and consumption", x:"Poor storage causes heavy post-harvest loss."},
    {t:"feeder road", d:"a rural road linking farms to main roads and markets", x:"Feeder roads are vital for marketing produce."},
    {t:"foreign exchange", d:"foreign currency earned from exports", x:"Rubber exports earn foreign exchange."},
    {t:"cooperative", d:"a farmers' association for joint buying, selling or credit", x:"A cooperative strengthens farmers' bargaining power."},
    {t:"shifting cultivation", d:"clearing and farming land then moving on as fertility falls", x:"Shifting cultivation needs plenty of land."},
    {t:"agro-processing", d:"turning raw farm produce into processed goods", x:"Agro-processing adds value before export."},
    {t:"land tenure", d:"the system of rights by which land is held", x:"Insecure land tenure discourages investment."}
  ],
  facts:[
    {q:"Name four major cash crops and four major food crops of Liberia.", a:"Cash crops: rubber, cocoa, coffee, oil palm and sugar cane. Food crops: rice, cassava, plantain, maize, yam and vegetables."},
    {q:"State five contributions of agriculture to economic development.", a:"It supplies food for the population; provides employment and income for the majority in rural areas; earns foreign exchange through exports; supplies raw materials to industry; and creates a market for manufactured goods and services."},
    {q:"Name Liberia's main agricultural exports and main food import.", a:"The main exports are rubber, cocoa, coffee and palm oil. The main food import is rice, the staple food, large quantities of which are purchased abroad each year."},
    {q:"State six challenges facing agriculture in Liberia.", a:"Insecure land tenure and disputes over ownership; lack of credit and subsidy; inadequate storage causing post-harvest loss; low levels of farmer education and extension; poor feeder roads and infrastructure; and outdated technology with little mechanisation."},
    {q:"Why does poor storage constitute a major economic loss?", a:"A large share of the harvest rots or is eaten by pests before it reaches the market, so the farmer loses income he has already worked for, and the nation loses food that must then be imported."},
    {q:"How do poor feeder roads reduce farmers' incomes?", a:"They raise transport costs, cause delay and spoilage of perishable produce, and reduce the number of buyers willing to travel, so the farm gate price falls while the consumer price rises."},
    {q:"What is a subsidy and how does it help farmers?", a:"A government payment that reduces the cost of an input such as fertiliser, seed or equipment. It lowers production costs, encourages greater output, and makes farming viable for those with little capital."},
    {q:"Explain why Liberia imports rice although rice is its staple crop.", a:"Domestic production is largely subsistence and low yielding, using traditional methods without irrigation or improved seed, so output falls far short of the growing urban demand and the gap is filled by imports."},
    {q:"State four recommendations to improve agriculture in Liberia.", a:"Rehabilitate feeder roads and build storage facilities; provide accessible credit and input subsidies; strengthen extension services and farmer training; promote cooperatives and agro-processing; and secure land tenure so farmers invest with confidence."},
    {q:"What is agro-processing and why is it valuable?", a:"Turning raw produce into processed goods, such as palm fruit into refined oil or cassava into gari and starch. It adds value before sale, raises earnings, reduces spoilage and creates employment locally rather than abroad."}
  ],
  tf:[
    {s:"Rubber is one of Liberia's leading cash crops.", a:"true", why:"It has long been a principal export earning foreign exchange."},
    {s:"Subsistence farming produces mainly for sale in the market.", a:"false", why:"It produces mainly for the farmer's own household, leaving little surplus to sell."},
    {s:"Post-harvest losses reduce the income farmers actually receive.", a:"true", why:"Produce that rots before sale represents work and cost already incurred but unpaid."},
    {s:"Liberia is self-sufficient in rice production.", a:"false", why:"Domestic output falls short of demand and large quantities of rice are imported."},
    {s:"Agro-processing adds value to raw agricultural produce.", a:"true", why:"Processing raises the price obtained and creates local employment."},
    {s:"Good feeder roads benefit farmers but not urban consumers.", a:"false", why:"They benefit both: farmers receive more and consumers pay less as transport costs and spoilage fall."},
    {s:"Insecure land tenure discourages long-term investment in farming.", a:"true", why:"A farmer who may lose the land will not plant tree crops or improve the soil."}
  ],
  sort:{ title:"Sort these agricultural items", groups:[
    {name:"Cash crops", items:["rubber","cocoa","coffee","oil palm"]},
    {name:"Food crops", items:["rice","cassava","plantain","maize"]},
    {name:"Challenges facing agriculture", items:["poor roads","lack of storage","insecure land tenure","limited credit"]},
    {name:"Policy remedies", items:["input subsidies","extension services","feeder roads","cooperatives"]}
  ]},
  mapwork:{ title:"Agriculture and economic development", caption:"Complete the table by explaining each contribution agriculture makes.", items:[
    {p:"Food supply", f:"Feeds the population and reduces costly dependence on food imports"},
    {p:"Employment", f:"Provides work and income for the majority of the rural population"},
    {p:"Foreign exchange", f:"Exports of rubber, cocoa and palm oil earn the currency needed to buy imports"},
    {p:"Raw materials", f:"Supplies inputs to processing industries such as oil mills and rubber factories"},
    {p:"Market for industry", f:"Farmers' incomes create demand for tools, fertiliser and manufactured goods"},
    {p:"Government revenue", f:"Export duties and taxes on the sector fund public spending"},
    {p:"Capital formation", f:"Agricultural surpluses can be saved and invested in other sectors of the economy"}
  ]},
  casestudy:{ title:"The cassava cooperative at Bong",
    text:"Forty farmers near Gbarnga each grew cassava on small plots. Selling alone at the farm gate, each received about 180 Liberian dollars a bag, and roughly a quarter of every harvest rotted before a buyer came. In 2019 they formed a cooperative. They rented a shared store, bought a grating machine with a loan from a credit union, and began processing part of the crop into gari. Together they could hire a truck and sell directly to buyers in Monrovia. The farm gate value rose to 320 dollars a bag equivalent, spoilage fell below 5 per cent, and the gari sold at nearly double the price of raw cassava. Two members were trained by an extension officer and now advise the others on improved planting.",
    questions:[
      {q:"State three problems the farmers faced before forming the cooperative.", a:"Low farm gate prices when selling alone, heavy post-harvest loss of about a quarter of the crop, and no means of transporting produce to a better market."},
      {q:"Calculate the percentage increase in the value received per bag.", a:"From 180 to 320 dollars is an increase of 140. (140 \u00f7 180) \u00d7 100 = 77.8 per cent."},
      {q:"Explain how agro-processing raised their earnings.", a:"Converting cassava into gari added value before sale, and gari sold at nearly double the raw price while also keeping much longer, which cut spoilage."},
      {q:"Which two challenges of Liberian agriculture did the cooperative directly overcome?", a:"Lack of storage, solved by the shared store; and lack of access to credit and markets, solved by the credit union loan and collective transport to Monrovia."},
      {q:"Suggest one further step government could take to support such groups.", a:"Rehabilitate the feeder roads to the farming area, or extend the credit and extension service to more cooperatives so the model can spread."}
    ]},
  project:{ title:"Agricultural challenges enquiry",
    brief:"Investigate the real challenges facing farmers in your community and propose solutions.",
    steps:[
      "Interview at least five farmers about what they grow and how much they sell.",
      "Ask each to name their three greatest difficulties.",
      "Record the farm gate price and, if possible, the market price of one crop.",
      "Rank the difficulties by how often they were mentioned.",
      "Write three realistic recommendations addressed to local government."
    ],
    criteria:["Five farmers genuinely interviewed","Crops and prices accurately recorded","Difficulties correctly ranked from the data","Farm gate and market prices compared","Three practical and affordable recommendations"]},
  worked:[
    {q:"A farmer harvests 60 bags but 15 spoil. Calculate the percentage lost.", steps:["(15 \u00f7 60) \u00d7 100"], a:"25%"},
    {q:"Farm gate price rises from L$180 to L$320 a bag. Calculate the percentage increase.", steps:["Increase = 140","(140 \u00f7 180) \u00d7 100"], a:"77.8%"},
    {q:"A farmer sells 45 bags at L$320 each. Calculate his revenue.", steps:["45 \u00d7 320"], a:"L$14 400"},
    {q:"Costs of production are L$6 000. Calculate his profit and profit margin.", steps:["Profit = 14 400 \u2212 6 000 = 8 400","(8 400 \u00f7 14 400) \u00d7 100"], a:"Profit L$8 400; margin 58.3%"},
    {q:"A cooperative of 40 members shares a surplus of L$600 000 equally. Find each share.", steps:["600 000 \u00f7 40"], a:"L$15 000"},
    {q:"A country produces 300 000 tonnes of rice and consumes 500 000. Calculate the import requirement and the self-sufficiency ratio.", steps:["Deficit = 500 000 \u2212 300 000 = 200 000","(300 000 \u00f7 500 000) \u00d7 100"], a:"200 000 tonnes imported; 60% self-sufficient"},
    {q:"Yield rises from 1.2 to 1.8 tonnes per hectare. Calculate the percentage increase.", steps:["Increase = 0.6","(0.6 \u00f7 1.2) \u00d7 100"], a:"50%"}
  ],
  apply:[
    {q:"Why is dependence on a single export crop dangerous for a country's economy?", a:"A fall in the world price, a disease outbreak or bad weather cuts export earnings drastically, unbalancing the budget and the balance of payments, since there is no other export to compensate."},
    {q:"Explain how investing in feeder roads could reduce rice imports.", a:"Better roads lower transport costs and spoilage, raising the price farmers receive and making rice growing profitable. Higher domestic output then substitutes for imports."},
    {q:"A learner says Liberia should industrialise and forget agriculture. Give a reasoned response.", a:"Agriculture employs most of the population, feeds the nation and supplies raw materials and foreign exchange. Industrialisation depends on it for food, inputs and a market, so the two must develop together, not one instead of the other."},
    {q:"How does providing storage facilities increase a farmer's bargaining power?", a:"Without storage he must sell immediately at whatever price is offered before the crop spoils. With storage he can wait for a better price and is no longer forced to accept the buyer's first offer."},
    {q:"Why might a subsidy on fertiliser be more effective than a subsidy on the crop price?", a:"An input subsidy lowers the cost of production and directly raises yields, benefiting those who actually farm, while a price subsidy is costly to administer, can be captured by traders, and does nothing to improve productivity."}
  ],
  activities:[
    "Brainstorm and discuss the importance of agriculture to national development",
    "Discuss the challenges faced in the agricultural sector of Liberia and recommend how they can be alleviated",
    "Identify the major agricultural products of Liberia and West African countries",
    "Compare Liberia's agricultural exports and imports",
    "Interview local farmers and report their difficulties to the class",
    "Formulate recommendations to enhance government agricultural policy"
  ],
  materials:[
    "Primary text: Stanlake's Economics by S. J. Grant, 8th edition",
    "Essential Economics for Senior Secondary Schools (Cole Esan Ande), 5th edition, 2017",
    "Comprehensive Economics for Senior Secondary School (Johnson U. Anyaele, 1997)",
    "Maps of Liberia's agricultural regions",
    "Trade and production statistics"
  ],
  assessment:["Presentation, individual and group","Written assignment","Quiz","Farmer enquiry report","Written test"]
},

/* ================================ GRADE 12 ================================ */
{
  grade:12, period:"I", sem:"One", icon:"🏗️",
  title:"Economic Development and Planning: The Liberian Economy",
  subtitle:"Growth versus development, the features of developed and developing economies, and the Liberian traditional economy",
  outcomes:[
    "Learners are able to demonstrate the concept of economic development and appreciate the important role planning plays in the development of a nation"
  ],
  objectives:[
    "Explain the concepts of economic development and planning",
    "Distinguish between economic growth and economic development",
    "Explain the features of underdeveloped, developing and developed economies",
    "Analyse the concept of the Liberian traditional economy",
    "Determine the factors which influence economic development in Liberia and West African countries"
  ],
  note:"<b>Economic growth</b> is a rise in national output, measured by real GDP. <b>Economic development</b> is broader: growth <b>plus</b> improvements in living standards, health, education, equality and the structure of the economy. A country can grow without developing if the gains reach only a few. <b>Economic planning</b> is the deliberate government direction of resources toward chosen development targets.",
  study:[
    /* ---- course text: Semester One, Period I — Economic Development and Planning: the Liberian Economy (guide pp. 24-25) ---- */
    {k:"h3", t:"Development, Growth and Planning"},
    {k:"p", t:"**Economic development** is the sustained improvement in the welfare of a people — income, health, education, choice. **Economic growth** is only the sustained increase in output of goods and services; a country may grow without developing if the gains bypass the many. **Planning** is the deliberate direction of the economy by government — setting targets, allocating resources and sequencing projects — because the market alone does not build roads, schools or power for everyone. Discuss how growth and development differ, and why Liberia needs both."},
    {k:"rule"},
    {k:"h3", t:"Underdeveloped, Developing and Developed Economies"},
    {k:"table", head:["Feature","Underdeveloped","Developing","Developed"], rows:[
     ["Income per head","Very low","Low and rising","High"],
     ["Main occupation","Subsistence agriculture","Agriculture plus growing industry","Industry and services"],
     ["Capital","Scarce; little saving","Increasing","Abundant"],
     ["Infrastructure","Thin roads, power and schools","Expanding","Extensive"],
     ["Health and education","Low life expectancy; little schooling","Improving","High life expectancy; widespread schooling"],
     ["Trade","Exports of raw materials","Some processing","Exports of manufactures and services"]]},
    {k:"p", t:"Research and chart these features for countries you know, and place each on the path from underdeveloped through developing to developed."},
    {k:"rule"},
    {k:"h3", t:"The Liberian Traditional Economy"},
    {k:"p", t:"Before the modern economy, Liberia knew the **traditional economy**: subsistence farming by slash-and-burn, hunting, fishing and trade by barter within and between villages, production organised by kinship, and wealth held in land, cattle and kola. Debts and duties were settled by custom, and the whole system rested on cooperation rather than price. Trace its concepts and debate what it still contributes — food security, mutual support — and what it could not supply — scale, technology, public revenue."},
    {k:"rule"},
    {k:"h3", t:"Factors Influencing Development in Liberia and West Africa"},
    {k:"p", t:"The factors: natural resources and their management; capital accumulation and savings; the size and skill of the labour force; technology; infrastructure of roads, power and ports; political stability and honest administration; health and education of the people; the terms of trade; and the flow of foreign investment and aid. Pair the factors with recommendations for Liberia and its West African neighbours, and propose what policy would lift each."},
    {k:"h3", t:"Growth Against Development"},
    {k:"p", t:"The distinction is set in nearly every paper and must be stated exactly. **Economic growth** is the sustained increase in a country's **output of goods and services** over time — usually measured as the annual percentage increase in real GDP or in real GDP per head. It is a **quantitative** change and it is **necessary**. **Economic development** is the sustained improvement in the **welfare** of the people — in income, health, education, nutrition, life expectancy and the range of choices open to them — accompanied by a change in the **structure** of the economy as agriculture gives way to industry and services. It is a **qualitative** as well as a quantitative change, and it is **sufficient**. A country may therefore **grow without developing**: output may rise because a mine opens, while the earnings leave the country, the mass of the people see no change in their incomes, and literacy and life expectancy stand still. Growth is a rise in the **numbers**; development is a change in the **lives**."},
    {k:"table", head:["Indicator","What it measures","Why it is used"], rows:[
     ["Real GDP per head","Output per person, with prices held constant","The commonest single measure of living standards; its weakness is that it says nothing about distribution"],
     ["Rate of growth of real GDP","How fast output is rising","Shows whether the economy is expanding faster than the population"],
     ["Life expectancy at birth","The average years a newborn may expect to live","Summarises nutrition, sanitation and health care in one figure"],
     ["Infant and maternal mortality","Deaths in the first year, and deaths in childbirth","The most sensitive indicators of a health system's reach"],
     ["Literacy and enrolment rates","Adult literacy; gross and net enrolment at primary, junior and senior levels","Measures the human capital on which all later growth depends"],
     ["Access to safe water, sanitation and electricity","The proportion of households served","Measures the infrastructure that determines health and productivity"],
     ["The distribution of income","The share taken by the poorest and the richest fifths, or the Gini coefficient","Shows whether growth reaches the many or only the few"],
     ["The Human Development Index","A composite of income, health and education","Combines the three dimensions of development that GDP alone misses"]]},
    {k:"rule"},
    {k:"h3", t:"Planning — Types, Why It Is Needed, and Its Difficulties"},
    {k:"p", t:"**Economic planning** is the deliberate direction of the economy by government: setting targets, allocating resources, sequencing projects and fixing the time over which they are to be achieved. Its **types**: by **period** — short term (one year, usually the annual budget), medium term (three to five years, the commonest form) and long term (ten years or more, a perspective plan); and by **character** — **indicative** planning, in which the state sets targets and guides private firms by incentive, information and infrastructure, leaving them free to decide, which is what a mixed economy practises; against **imperative (compulsory)** planning, in which the state commands what is produced, which is the method of a socialist economy."},
    {k:"p", t:"**Why a developing country plans:** the market alone will not build the roads, ports, power and schools that private investment needs but will not itself finance; resources are too scarce to be scattered, so priorities must be set; foreign aid and borrowing require a stated programme; the regions and sectors must be balanced so that growth does not bypass the interior; and the population must be told where the country is going, so that saving and effort follow. **The difficulties of planning** are the second half of the answer: **inadequate statistics**, so the plan is built on figures no one trusts; **shortage of trained planners** and of the administrators to carry the plan out; **unpredictable events** — the weather, the world price of the export crop, an epidemic, a war; **political pressure** to spend on the visible project rather than on the necessary one; **corruption** and the diversion of funds; **short political horizons**, since a plan of five years must survive a change of government; and **over-ambition**, the plan that names more projects than the money and the manpower can finish, so that half-completed works stand across the country."},
    {k:"rule"},
    {k:"h3", t:"The Liberian Traditional Economy"},
    {k:"p", t:"Before the modern money economy, and beside it in the interior for many decades afterwards, Liberia ran a **traditional economy**: production for **subsistence** rather than for the market, by **slash-and-burn (shifting) cultivation** in which a plot is cleared, farmed for two or three seasons and then left to fallow while the household moves on; **hunting, fishing and gathering** to supplement the farm; **trade by barter**, with kola nuts, cloth, salt, iron and brass used as media of exchange before coinage became general; production organised by **kinship**, the family and the lineage supplying the labour and the Poro and Sande societies supplying discipline and training; **customary land tenure**, in which the land belongs to the community and the household holds it in trust, so it could not be sold; and **wealth held in land, livestock and people**. Its **strengths** were self-sufficiency, security against the failure of any one crop, and the absence of unemployment in the modern sense, since every able person had work on the family farm. Its **weaknesses** were low output per head, no surplus for investment, vulnerability to drought and to the exhaustion of the soil, and isolation from the wider economy. What it **still contributes**: most of the country's food, the customary land on which most farming is done, the labour of the family farm, and a reserve of food and income in a bad year for the town worker who keeps a farm behind him."},
    {k:"rule"},
    {k:"h3", t:"Factors Influencing Development in Liberia and West Africa"},
    {k:"table", head:["Factor","How it helps or hinders"], rows:[
     ["Natural resources and their management","Iron ore, rubber, timber, gold, diamonds and fertile land are a great asset — but only if the terms of the concession leave a fair share at home and the earnings are invested rather than consumed or lost"],
     ["Capital and capital formation","Saving is low because income is low, so investment is low, so income stays low — the vicious circle; it is broken by mobilising saving through banks and cooperatives, by attracting foreign investment, and by using aid and borrowing productively"],
     ["Human resources — education and health","An untrained labour force cannot run a modern plant; sickness removes the worker in his most productive years. Schools, training colleges and clinics are therefore productive investment, not welfare"],
     ["Infrastructure","Roads, ports, power and telecommunications decide the cost of doing business; where they are thin, the interior cannot trade with the coast and the factory cannot run"],
     ["Technology","Improved seed, mechanisation and modern methods raise output per worker; their spread depends on education, extension and the cost of the equipment"],
     ["Political stability and good governance","Investment will not come where the rules may change by force; corruption raises every cost and diverts what is spent. Peace is a precondition of development, which is why the wars set Liberian development back by a generation"],
     ["Population","A rapidly growing population can supply labour and a market, but if it grows faster than output it lowers income per head and strains the schools and clinics"],
     ["Foreign trade and aid","Export earnings buy the capital goods development needs; aid and concessional loans fill the gap — but dependence on one or two export commodities leaves the country at the mercy of a world price"],
     ["Entrepreneurship","Without those willing to organise, risk and innovate, capital and labour are never combined; the encouragement of local enterprise is therefore a development policy in itself"]]},
    {k:"rule"},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Treating **growth and development as the same thing**. Growth is a rise in output; development is a change in welfare and in the structure of the economy. A country may have one without the other.",
      "Using **nominal GDP** for living standards. Prices must be held constant, or a rise in prices is mistaken for a rise in output.",
      "Judging development by **GDP per head alone** without the distribution — the average can rise while most people grow poorer.",
      "Describing planning as **only socialist**. A mixed economy plans indicatively; Liberia has had development plans throughout its modern history.",
      "Listing the **factors of development without saying which way they cut** — a resource is an asset only if it is managed well.",
      "Forgetting **political stability** among the factors. In the Liberian case it is the decisive one."]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Distinguish economic growth from economic development**, and explain how a country may grow without developing",
      "**State the indicators of development** and the weakness of relying on GDP per head alone",
      "**Distinguish underdeveloped, developing and developed economies** by income, occupation, capital, infrastructure, health and trade",
      "**Explain economic planning** — its types by period and by character, why a developing country needs it, and the difficulties that frustrate it",
      "**Describe the Liberian traditional economy** — shifting cultivation, barter, kinship organisation, customary tenure — and say what it still contributes",
      "**Examine the factors influencing development in Liberia and West Africa** — resources, capital, human resources, infrastructure, technology, stability, population, trade, entrepreneurship",
      "**Explain the vicious circle of poverty** and how it may be broken — low income, low saving, low investment, low income again"
    ]}

  ],

  focus:[
    "Concepts of economic development and planning",
    "Economic growth compared with economic development",
    "Features of underdeveloped, developing and developed economies",
    "The concept of the Liberian traditional economy",
    "Factors influencing economic development in Liberia and West Africa",
    "Types and problems of development planning"
  ],
  terms:[
    {t:"economic growth", d:"an increase in a country's real national output over time", x:"Economic growth is measured by real GDP."},
    {t:"economic development", d:"growth accompanied by improved living standards and structural change", x:"Economic development is broader than growth."},
    {t:"economic planning", d:"deliberate government direction of resources toward set targets", x:"Economic planning sets national priorities."},
    {t:"development plan", d:"an official document setting out development targets and means", x:"A development plan usually covers five years."},
    {t:"underdeveloped economy", d:"an economy with very low income and little industry", x:"An underdeveloped economy depends on subsistence agriculture."},
    {t:"developing economy", d:"an economy in transition with rising income and growing industry", x:"Liberia is classed as a developing economy."},
    {t:"developed economy", d:"an economy with high income, advanced industry and services", x:"A developed economy has high productivity."},
    {t:"traditional economy", d:"an economy governed by custom, largely subsistence and barter", x:"The traditional economy still operates in rural Liberia."},
    {t:"subsistence economy", d:"production mainly for the producer's own consumption", x:"A subsistence economy generates little surplus."},
    {t:"standard of living", d:"the level of material welfare enjoyed by a population", x:"Standard of living is measured partly by income per head."},
    {t:"per capita income", d:"national income divided by the population", x:"Per capita income indicates average prosperity."},
    {t:"human development", d:"improvement in health, education and freedom as well as income", x:"Human development is measured by an index."},
    {t:"infrastructure", d:"the basic facilities such as roads, power and water", x:"Poor infrastructure holds back development."},
    {t:"capital formation", d:"the accumulation of productive assets through investment", x:"Capital formation requires saving."},
    {t:"vicious circle of poverty", d:"low income causing low saving, low investment and continued low income", x:"The vicious circle of poverty traps poor economies."},
    {t:"dual economy", d:"the coexistence of a modern sector and a traditional sector", x:"A dual economy shows sharp regional contrasts."},
    {t:"brain drain", d:"the emigration of skilled and educated people", x:"Brain drain deprives a country of expertise."},
    {t:"sustainable development", d:"development meeting present needs without harming future generations", x:"Sustainable development protects resources."},
    {t:"structural change", d:"a shift in the relative size of the economic sectors", x:"Structural change moves labour from farming to industry."}
  ],
  facts:[
    {q:"Distinguish economic growth from economic development.", a:"Economic growth is a quantitative increase in real national output. Economic development is a wider qualitative process including growth but also better health, education, income distribution and a changed economic structure."},
    {q:"Can a country grow without developing? Explain with an example.", a:"Yes. If output rises from an enclave such as a mine whose profits go abroad and whose benefits reach only a few, GDP grows while most people's health, education and income are unchanged."},
    {q:"State five features of an underdeveloped economy.", a:"Low per capita income; heavy dependence on subsistence agriculture; high birth and death rates; low levels of literacy and skill; poor infrastructure; and low levels of saving, investment and technology."},
    {q:"State five features of a developed economy.", a:"High per capita income; a large industrial and service sector; high literacy and skill levels; advanced infrastructure and technology; low birth and death rates; and high levels of saving and investment."},
    {q:"What is meant by the Liberian traditional economy?", a:"The sector in which production follows long-established custom: subsistence farming with hand tools and shifting cultivation, communal land holding, family labour, barter exchange and little use of money or modern technology."},
    {q:"State four factors that influence economic development in Liberia.", a:"The stock of natural resources and how they are used; the quality of human capital through education and health; the availability of capital and infrastructure; and political stability, security and the quality of governance."},
    {q:"Explain the vicious circle of poverty.", a:"Low income means little can be saved; low saving means low investment; low investment means low productivity; and low productivity means income remains low. The cycle repeats and traps the economy at a low level."},
    {q:"State three objectives of economic planning.", a:"To raise national output and per capita income; to reduce unemployment and inequality; and to develop infrastructure and diversify the economy away from dependence on one or two products."},
    {q:"State four problems of development planning in Liberia.", a:"Unreliable statistical data on which to base the plan; shortage of trained planners and administrators; inadequate finance and dependence on donor funds; and political interference, corruption and discontinuity when governments change."},
    {q:"What is meant by a dual economy and why is it a problem?", a:"The coexistence of a modern money economy in the towns and mining enclaves with a traditional subsistence economy in the rural areas. It is a problem because the benefits of growth remain in the modern sector and inequality widens."}
  ],
  tf:[
    {s:"Economic growth and economic development mean the same thing.", a:"false", why:"Growth is a rise in output; development also includes improved welfare, equality and structural change."},
    {s:"Per capita income is national income divided by population.", a:"true", why:"It indicates the average income per person."},
    {s:"A developed economy typically has a large subsistence agricultural sector.", a:"false", why:"That characterises an underdeveloped economy; developed economies are dominated by industry and services."},
    {s:"The vicious circle of poverty links low income to low saving and low investment.", a:"true", why:"Each element reinforces the others, keeping the economy poor."},
    {s:"Economic planning requires reliable statistical data.", a:"true", why:"Targets and allocations cannot be set sensibly on inaccurate figures."},
    {s:"Brain drain increases a country's stock of human capital.", a:"false", why:"It reduces it, since skilled and educated people emigrate."},
    {s:"Sustainable development considers the needs of future generations.", a:"true", why:"It meets present needs without exhausting resources for those who come after."}
  ],
  sort:{ title:"Sort these economic features", groups:[
    {name:"Underdeveloped economy", items:["low per capita income","subsistence agriculture","low literacy","poor infrastructure"]},
    {name:"Developed economy", items:["high per capita income","advanced industry","high literacy","modern infrastructure"]},
    {name:"Features of the traditional economy", items:["shifting cultivation","communal land","family labour","barter exchange"]},
    {name:"Objectives of planning", items:["raise income per head","reduce unemployment","diversify the economy","develop infrastructure"]}
  ]},
  mapwork:{ title:"Growth compared with development", caption:"Complete the table by contrasting the two concepts under each heading.", items:[
    {p:"Meaning", f:"Growth is a rise in real output; development is growth plus improved welfare and structure"},
    {p:"Measurement", f:"Growth by real GDP or GDP per head; development also by literacy, life expectancy and equality"},
    {p:"Nature", f:"Growth is quantitative; development is both quantitative and qualitative"},
    {p:"Distribution", f:"Growth may benefit a few; development implies wider sharing of the gains"},
    {p:"Structure", f:"Growth may leave the structure unchanged; development shifts labour from farming to industry and services"},
    {p:"Time span", f:"Growth can occur in a single year; development is a long-term process"},
    {p:"Liberian example", f:"A mining boom may raise GDP while rural health, schooling and roads remain unchanged"}
  ]},
  casestudy:{ title:"Two counties, one growth figure",
    text:"In one year Liberia's real GDP grew by 6 per cent, driven almost entirely by a new iron ore mine. The mining company employed 900 workers, most of them foreign engineers, and remitted the greater part of its profit abroad. In the county where the mine was sited, a tarred access road was built and a company clinic opened for its staff. In a neighbouring county with no mine, the feeder roads remained impassable in the rains, the secondary school lacked a science laboratory, and farmers still lost a quarter of their harvest for want of storage. National per capita income rose that year, yet a household survey found that the median household was no better off than before, and the gap between the richest and poorest widened.",
    questions:[
      {q:"Did Liberia experience economic growth in that year? Justify your answer.", a:"Yes. Real GDP rose by 6 per cent, which is by definition an increase in national output — the measure of economic growth."},
      {q:"Did it experience economic development? Give two reasons.", a:"Not meaningfully. The median household was no better off and inequality widened, and there was no improvement in health, education or infrastructure for most of the population."},
      {q:"Why did per capita income rise while the typical household gained nothing?", a:"Per capita income is a mean. Large gains concentrated among a few — the mining company and its foreign staff — raise the average without changing the position of the typical household."},
      {q:"Which feature of a dual economy does this case illustrate?", a:"A modern enclave sector with a tarred road and clinic operating alongside a traditional rural sector with impassable roads and no storage, the benefits not spreading between them."},
      {q:"Suggest two policies that would turn this growth into development.", a:"Require and enforce local content and training so citizens fill skilled jobs, and channel mining revenue through the budget into feeder roads, schools and storage in the rural counties."}
    ]},
  project:{ title:"Development indicators of my community",
    brief:"Assess the level of development in your own community using real indicators.",
    steps:[
      "List six indicators of development, such as access to safe water, electricity, roads, clinics, schools and employment.",
      "For each, record the actual position in your community from observation and enquiry.",
      "Score each indicator out of five and give a reason for the score.",
      "Identify the two weakest areas.",
      "Write two costed and realistic recommendations for improving them."
    ],
    criteria:["Six genuine indicators used","Real evidence gathered, not guesswork","Scores justified with reasons","The two weakest areas correctly identified","Realistic and affordable recommendations"]},
  worked:[
    {q:"National income is L$180 billion and population 4.5 million. Calculate per capita income.", steps:["180 000 000 000 \u00f7 4 500 000"], a:"L$40 000 per head"},
    {q:"Real GDP rises from L$180bn to L$190.8bn. Calculate the growth rate.", steps:["Increase = 10.8bn","(10.8 \u00f7 180) \u00d7 100"], a:"6%"},
    {q:"GDP grows 6% while population grows 3%. Estimate the growth in income per head.", steps:["Approximate: 6 \u2212 3"], a:"About 3%"},
    {q:"If GDP grows 2% and population grows 3%, what happens to income per head?", steps:["2 \u2212 3 = \u22121"], a:"It falls by about 1%"},
    {q:"An economy saves 8% of an income of L$180bn. Calculate total saving.", steps:["0.08 \u00d7 180bn"], a:"L$14.4 billion"},
    {q:"At a growth rate of 6% per year, roughly how long will income take to double?", steps:["Rule of 70: 70 \u00f7 growth rate","70 \u00f7 6"], a:"About 11.7 years"},
    {q:"Literacy rises from 48% to 60%. Calculate the percentage point rise and the percentage increase.", steps:["Points: 60 \u2212 48 = 12","Percentage: (12 \u00f7 48) \u00d7 100"], a:"12 percentage points, a 25% increase"}
  ],
  apply:[
    {q:"Why is GDP per head alone an inadequate measure of a country's development?", a:"It is an average that conceals inequality, ignores health, education and life expectancy, takes no account of environmental damage, and omits unpaid and subsistence work which is substantial in Liberia."},
    {q:"How can improved education break the vicious circle of poverty?", a:"Education raises productivity and income, which allows saving and investment; it also lowers birth rates and improves health, so the extra income is not absorbed by a rapidly growing population."},
    {q:"Explain why political stability is a precondition for economic development.", a:"Investors will not commit capital where property may be destroyed or seized; instability also diverts spending to security, disrupts schooling and trade, and drives skilled people to emigrate."},
    {q:"A donor offers to build a hospital but not to fund its staff and drugs. Discuss the development value.", a:"The building alone adds little: without staff, medicines and maintenance it cannot deliver health care. Genuine development requires recurrent funding and trained personnel, not only capital projects."},
    {q:"Why might a development plan fail even when well written?", a:"Because implementation depends on reliable data, trained administrators, secure finance and political continuity. Weakness in any of these — or corruption and changes of government — can leave the plan unexecuted."}
  ],
  activities:[
    "Discuss economic development and planning, and economic growth and economic development",
    "Research and chart the features of underdeveloped, developing and developed economies",
    "Group research and debate on the concept of the Liberian traditional economy",
    "Pair research on the factors which influence economic development in Liberia and West Africa",
    "Assess the level of development of the local community using indicators"
  ],
  materials:[
    "Primary text: Stanlake's Economics by S. J. Grant, 8th edition",
    "Essential Economics for Senior Secondary Schools (Cole Esan Ande), 5th edition, 2017",
    "Comprehensive Economics for Senior Secondary School (Johnson U. Anyaele, 1997)",
    "Liberian development plan documents and statistics",
    "Charts and maps of Liberia's economy"
  ],
  assessment:["Presentation, individual and group","Written assignment","Quiz","Community indicator project","Written test"]
},
{
  grade:12, period:"II", sem:"One", icon:"🏭",
  title:"Industrialisation and National Income",
  subtitle:"Industrialisation policies and their role, and the measurement, methods and limitations of national income",
  outcomes:[
    "Learners are able to determine how decisions made by policy makers can influence the economic development and growth of a country"
  ],
  objectives:[
    "Analyse the concept of industrialisation and how it relates to Liberia's economic development",
    "Analyse the processes involved in industrialisation",
    "Determine the measures of a country's economic activities",
    "Outline the methods used to calculate economic activity in the economy",
    "Discuss the limitations and pitfalls of calculating national income",
    "Suggest policy options that could improve the economy of Liberia"
  ],
  note:"<b>GDP</b> is the value of all final goods and services produced <b>within</b> a country in a year. <b>GNP = GDP + net income from abroad</b>. <b>NNP = GNP − depreciation</b>. <b>Per capita income = national income ÷ population</b>. National income can be measured three ways — by <b>output</b>, by <b>income</b> and by <b>expenditure</b> — which should give the same total.",
  study:[
    /* ---- course text: Semester One, Period II — Industrialisation of the Liberian Economy and Concepts of National Income (guide pp. 26-27) ---- */
    {k:"h3", t:"Industrialisation and its Policies"},
    {k:"p", t:"**Industrialisation** is the wide establishment of manufacturing industry in an economy. **Industrialization policies** are the measures governments use to encourage it — tax holidays, protective tariffs, industrial estates, credit and training. **Localization of industries** is the clustering of firms of one kind in one place, as iron ore processing at Buchanan or rubber processing around Harbel — attracted by raw materials, power, transport, labour and market. Analyse how industrialisation relates to Liberia's economic development, and the process by which it spreads."},
    {k:"rule"},
    {k:"h3", t:"The Role of Industrialisation in Development"},
    {k:"p", t:"Industry brings the **optimum utilization of scarce resources** — raw materials worked up into goods worth far more than in raw form. It provides the **machinery that increases agricultural productivity** — tractors, mills, processing plants — and with them employment, skills, exports and public revenue. Observe the processes of production and distribution on an industrial site and report on how the plant uses what the country grows and mines."},
    {k:"rule"},
    {k:"h3", t:"Measuring National Income"},
    {k:"p", t:"**National income** is the total money value of all goods and services produced by a country in a year. Its measures: **Gross National Product (GNP)** — the total value of final goods and services produced by the nationals of a country in a year, at home and abroad; **Net National Product (NNP) = GNP minus depreciation** of capital; **Gross Domestic Product (GDP)** — production within the country's borders whoever produces it; and **per capita income** — national income ÷ population, the average income of each person. The **uses of national income statistics**: measuring growth year by year, comparing countries, planning and budgeting, sharing revenue, and attracting aid and investment."},
    {k:"rule"},
    {k:"h3", t:"The Circular Flow of Income and Expenditure"},
    {k:"p", t:"In the **circular flow diagram**, households supply factors of production to firms and receive wages, rent, interest and profit; firms supply goods and services to households and receive consumer spending. Income flows one way, expenditure the other, and output rides between them — which is why the three can be measured against one another. Demonstrate the linkages of the different actors — household, firm, government, bank, the outside world — in one diagram."},
    {k:"rule"},
    {k:"h3", t:"Methods of Calculation, Advantages and Limitations"},
    {k:"p", t:"National income is calculated three ways, which must agree: the **output (product) method** — the value added by each industry; the **income method** — the sum of wages, rent, interest and profit earned; and the **expenditure method** — consumption + investment + government spending + net exports. The advantages of GNP per capita as a measure: simple, comparable, and observable. The **limitations and pitfalls**: it hides the distribution of income, excludes unpaid and subsistence work (large in Liberia), ignores leisure and the environment, is distorted by inflation, and is hard to measure where records are few. Identify the major development projects financed out of national income and compare government expenditure on each with the impact on the lives of Liberians."},
    {k:"h3", t:"Industrialisation — What It Is and How It Is Pursued"},
    {k:"p", t:"**Industrialisation** is the process by which the secondary sector — manufacturing, processing, construction and mining — grows to take a rising share of a country's output and employment. It matters because manufacturing **adds value** to the raw material the country already exports, **raises output per worker** far above subsistence farming, **creates the demand** for skills, power and transport, **diversifies** an economy that depends on one or two export commodities, and **saves foreign exchange** by making at home what was imported. The **policies** by which it is pursued: **import substitution**, making at home the goods that were imported, protected by tariffs and quotas while the infant industry learns — its danger is a sheltered, high-cost industry that never grows up; **export promotion**, producing for the world market and competing on cost and quality, which disciplines the industry but exposes it to world prices; **agro-based industrialisation**, processing the country's own crops — palm oil, rubber, cocoa, sugar, timber — which is the natural first step for Liberia; the **development of infrastructure** — power, roads, ports, water — without which no factory can run; **protection of infant industries** by tariff and by local-content rules; **industrial estates** providing serviced land, power and shared facilities; **training** for the technicians and engineers industry needs; and **the attraction of foreign investment** on terms stated in advance, so the country keeps a fair share of what is produced."},
    {k:"rule"},
    {k:"h3", t:"National Income — the Concepts Distinguished"},
    {k:"p", t:"The concepts form a chain, each derived from the one before. Learn them in order and the definitions write themselves."},
    {k:"table", head:["Concept","How it is obtained","What it means"], rows:[
     ["Gross Domestic Product (GDP)","The total money value of all final goods and services produced within the country in a year, whatever the nationality of the producers","Output produced inside the borders"],
     ["Gross National Product (GNP)","GDP plus income received from abroad by residents, minus income paid to foreigners","Output owned by the country's residents, at home and abroad"],
     ["Net National Product (NNP)","GNP minus depreciation (capital consumption)","Output after allowing for the wearing out of the capital that produced it"],
     ["National Income (NI)","NNP minus indirect taxes plus subsidies, at factor cost","What the factors of production actually earned"],
     ["Personal income","National income minus undistributed profit, company tax and social security contributions, plus transfer payments","What individuals actually receive"],
     ["Disposable income","Personal income minus direct taxes","What individuals have left to spend or save"],
     ["Per capita income","National income divided by the population","The average income per person — the commonest measure of living standards"],
     ["Real against nominal income","Nominal is valued at current prices; real is valued at the prices of a base year","Only real income shows whether output truly rose or prices merely rose"]]},
    {k:"p", t:"**Worked:** a country's GDP is L$500 million; its residents earn L$40 million abroad and pay L$60 million to foreigners, so **GNP = 500 + 40 − 60 = L$480 million**. Depreciation is L$50 million, so **NNP = 480 − 50 = L$430 million**. Indirect taxes are L$70 million and subsidies L$20 million, so **national income at factor cost = 430 − 70 + 20 = L$380 million**. With a population of 4 million, **per capita income = 380 ÷ 4 = L$95 a year**. If prices doubled during the year, the **real** national income is 380 ÷ 2 = **L$190 million** at base-year prices — and that, not the nominal figure, is the measure of whether the country is better off. Note the point the paper sets: because so much of Liberian output is produced by foreign-owned concerns, **GNP is below GDP**, since the profit earned by those concerns is paid abroad — so GDP **overstates** the income Liberians actually receive."},
    {k:"rule"},
    {k:"h3", t:"The Three Methods of Calculation"},
    {k:"num", items:[
      "**The output (product) method** adds the **value added** by each industry — output minus the cost of the intermediate goods used up — so that nothing is counted twice. Wheat worth L$100 milled into flour worth L$160 adds L$60; the flour baked into bread worth L$250 adds a further L$90; the value added at the three stages, 100 + 60 + 90 = L$250, equals the value of the final product. Counting the full value of each stage would give 100 + 160 + 250 = L$510 and would be wrong — **double counting** is the error this method exists to avoid.",
      "**The income method** adds the incomes earned in production: **wages and salaries** (the reward of labour), **rent** (of land), **interest** (of capital) and **profit** (of the entrepreneur), together with the income of the self-employed. It measures national income **at factor cost**, since these are what the factors were paid.",
      "**The expenditure method** adds what is spent on the final output: **C + I + G + (X − M)** — personal **consumption**, private **investment**, **government** spending on goods and services, and **net exports** (exports minus imports). Imports are subtracted because they were consumed at home but produced abroad.",
      "**The three must agree**, because what is produced is paid for as income and is bought as expenditure. In practice they differ, through errors and omissions and through the part of the economy no statistic reaches, and a **discrepancy** figure is inserted to balance them."]},
    {k:"rule"},
    {k:"h3", t:"The Circular Flow of Income"},
    {k:"p", t:"In the simplest economy there are two sectors. **Households** supply the factors of production — labour, land, capital and enterprise — to **firms**, and receive in return wages, rent, interest and profit; firms produce goods and services, which households buy with that income. The flow is therefore circular: factors flow one way, goods the other, and money runs round both. **Leakages (withdrawals)** are income not spent on the home output — **saving**, **taxation** and **spending on imports**; **injections** are spending on the home output not coming from households' current income — **investment**, **government expenditure** and **exports**. **Equilibrium** is reached where **leakages equal injections (S + T + M = I + G + X)**; if injections exceed leakages, income and output rise, and if leakages exceed injections they fall. Use the model to explain the **multiplier**: an injection of L$1 million into a construction project becomes the income of the workers and suppliers, who spend most of it, and their spending becomes someone else's income, so total income rises by several times the original injection — the more so the **less** that leaks away into saving, tax and imports. This is why a small, open, import-hungry economy such as Liberia's has a **small multiplier**: much of any new spending immediately buys imported rice, fuel and manufactures and so leaks abroad."},
    {k:"rule"},
    {k:"h3", t:"Advantages and Limitations of National Income Statistics"},
    {k:"p", t:"**Uses:** they measure the size and the growth of the economy; they show the **standard of living** through per capita income; they reveal the **structure** of the economy by sector, so a government can see how far it still depends on agriculture; they guide **planning and budgeting**, and the setting of targets; they permit **comparison** between countries and between years; they show the **distribution** of income between wages, rent, interest and profit; and they inform **fiscal and monetary policy**. **Limitations:** the **subsistence** output of the family farm and the unpaid work of the household are largely unrecorded, which understates a rural economy such as Liberia's; **double counting** threatens wherever value added is not correctly measured; **non-marketed services** — the mother's care, the neighbour's help — have no price and so no place; the **informal sector** of petty trade, which employs most people in a West African town, is estimated at best; **quality changes and new products** make comparison across years imperfect; **externalities** — the pollution and the deforestation a factory brings — are counted as gains and not as losses; the **distribution** of income is invisible in the average, which may rise while most people grow poorer; **leisure** and the length of the working day are ignored; and **prices** must be held constant, or a rise in the price level is mistaken for growth."},
    {k:"rule"},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Confusing **GDP with GNP**. GDP counts what is produced **within the borders**; GNP counts what the **residents own**, at home and abroad. Where foreign firms dominate, GNP is the smaller.",
      "Forgetting **depreciation** between GNP and NNP — it is the step most often skipped.",
      "Counting **intermediate goods** in the output method. Only **value added** or **final output** may be counted; counting both is double counting.",
      "Adding **imports** in the expenditure method. Net exports are **X − M**; imports are subtracted.",
      "Using **nominal** figures to claim that living standards rose. Prices must be held constant.",
      "Dividing national income by the population and stopping. The examiner wants the comment that the **average hides the distribution**."]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Define industrialisation** and explain its role in the development of a West African country",
      "**Distinguish import substitution from export promotion**, with the advantage and the danger of each",
      "**Define GDP, GNP, NNP, national income, per capita and real income**, and derive each from the one before it in a calculation",
      "**Explain the three methods of measuring national income** — output, income and expenditure — and say why they must agree",
      "**Avoid double counting** by using value added, and show the working on a given example",
      "**Draw and explain the circular flow** of income, distinguishing leakages from injections and stating the equilibrium condition",
      "**State the uses and the limitations** of national income statistics, with the subsistence and informal sectors named for a West African economy"
    ]}

  ],

  focus:[
    "Meaning of industrialisation, industrialisation policies and localisation of industries",
    "The role of industrialisation in economic development",
    "Optimum utilisation of scarce resources and machinery for agriculture",
    "Measuring national income: GNP, NNP, GDP and per capita income",
    "The output, income and expenditure methods",
    "Limitations and pitfalls of national income calculation",
    "Policy options for improving the Liberian economy"
  ],
  terms:[
    {t:"industrialisation", d:"the process of developing manufacturing industry in an economy", x:"Industrialisation shifts labour out of farming."},
    {t:"localisation of industry", d:"the concentration of an industry in a particular area", x:"Localisation occurs near raw materials or ports."},
    {t:"import substitution", d:"producing locally what was formerly imported", x:"Import substitution saves foreign exchange."},
    {t:"export promotion", d:"a policy of encouraging production for export", x:"Export promotion earns foreign exchange."},
    {t:"national income", d:"the total value of goods and services produced in a year", x:"National income measures economic activity."},
    {t:"gross domestic product", d:"the value of final output produced within a country in a year", x:"GDP counts output inside the borders."},
    {t:"gross national product", d:"GDP plus net income from abroad", x:"GNP includes earnings of citizens abroad."},
    {t:"net national product", d:"GNP minus depreciation of capital", x:"NNP allows for wear and tear."},
    {t:"depreciation", d:"the fall in value of capital through wear and obsolescence", x:"Depreciation must be deducted to obtain NNP."},
    {t:"per capita income", d:"national income divided by the population", x:"Per capita income indicates average income."},
    {t:"output method", d:"measuring national income by summing value added in each sector", x:"The output method avoids double counting."},
    {t:"income method", d:"measuring national income by summing rent, wages, interest and profit", x:"The income method sums factor rewards."},
    {t:"expenditure method", d:"measuring national income by summing all spending on final output", x:"The expenditure method adds C, I, G and net exports."},
    {t:"value added", d:"the increase in value created at each stage of production", x:"Value added avoids counting inputs twice."},
    {t:"double counting", d:"counting the same output more than once", x:"Double counting inflates national income."},
    {t:"transfer payment", d:"a payment made without any output in return", x:"A pension is a transfer payment."},
    {t:"subsistence output", d:"goods produced and consumed at home without sale", x:"Subsistence output is hard to value."},
    {t:"informal sector", d:"unregistered small-scale economic activity", x:"The informal sector is largely unrecorded."},
    {t:"real income", d:"income adjusted for changes in the price level", x:"Real income shows true purchasing power."},
    {t:"nominal income", d:"income measured at current prices", x:"Nominal income rises with inflation."}
  ],
  facts:[
    {q:"Define industrialisation and state its main aim.", a:"The process of building up manufacturing and processing industry in an economy. Its aim is to raise productivity and incomes, create employment, add value to raw materials and reduce dependence on imports."},
    {q:"State five roles of industrialisation in economic development.", a:"It makes optimum use of scarce resources by adding value locally; it supplies machinery and inputs that raise agricultural productivity; it creates employment and raises incomes; it diversifies the economy and reduces dependence on a few exports; and it saves or earns foreign exchange."},
    {q:"State four factors determining the localisation of industry.", a:"Nearness to raw materials, especially if bulky or perishable; nearness to the market; availability of power, water and transport; and the supply of suitable labour."},
    {q:"Define GDP, GNP and NNP and give the relationship between them.", a:"GDP is the value of final output produced within the country in a year. GNP is GDP plus net income from abroad. NNP is GNP minus depreciation of capital."},
    {q:"Name the three methods of measuring national income.", a:"The output or value added method, the income method, and the expenditure method."},
    {q:"Explain the output method and how it avoids double counting.", a:"It sums the value added by each sector rather than the total value of output. Counting only the value added at each stage ensures inputs bought from other firms are not counted twice."},
    {q:"State the components of the expenditure method.", a:"Consumption spending by households, investment by firms, government spending, plus exports minus imports."},
    {q:"State five limitations of national income figures.", a:"Subsistence output and unpaid household work are excluded; the informal sector is largely unrecorded; the figures ignore income distribution; they take no account of pollution and resource depletion; and price changes distort comparisons unless real values are used."},
    {q:"Why must transfer payments be excluded from national income?", a:"Because they involve no production of goods or services; they merely move purchasing power from one person to another, and including them would count the same income twice."},
    {q:"Why is comparing per capita income between countries difficult?", a:"Exchange rates do not reflect real purchasing power, price levels and the cost of living differ, the size of the unrecorded subsistence and informal sectors varies, and the quality of the statistics themselves differs greatly."},
    {q:"State four policy options that could improve the Liberian economy.", a:"Invest in infrastructure, especially roads and power; promote agro-processing and import substitution in food; improve technical education matched to industry's needs; and strengthen governance and the tax base to fund public investment."}
  ],
  tf:[
    {s:"GNP equals GDP plus net income from abroad.", a:"true", why:"GNP counts income earned by citizens wherever they are."},
    {s:"NNP is greater than GNP.", a:"false", why:"NNP is GNP minus depreciation, so it is smaller."},
    {s:"Transfer payments are included in national income.", a:"false", why:"They involve no production and would cause double counting."},
    {s:"The output, income and expenditure methods should give the same total.", a:"true", why:"They measure the same flow of activity from three different angles."},
    {s:"Subsistence output is fully captured in Liberia's national income figures.", a:"false", why:"Goods produced and consumed at home are not traded and are very difficult to value and record."},
    {s:"Value added is used to avoid double counting.", a:"true", why:"Counting only the value created at each stage prevents inputs being counted twice."},
    {s:"A rise in nominal income always means people are better off.", a:"false", why:"If prices rise faster, real income and purchasing power fall."}
  ],
  sort:{ title:"Sort these national income concepts", groups:[
    {name:"Expenditure method components", items:["consumption","investment","government spending","net exports"]},
    {name:"Income method components", items:["wages","rent","interest","profit"]},
    {name:"Excluded from national income", items:["transfer payments","second-hand sales","unpaid housework","illegal activity"]},
    {name:"Roles of industrialisation", items:["adds value locally","creates employment","diversifies exports","supplies farm machinery"]}
  ]},
  mapwork:{ title:"From GDP to per capita income", caption:"Complete the table by explaining each measure and the adjustment made.", items:[
    {p:"Gross domestic product", f:"Value of all final goods and services produced within the country in a year"},
    {p:"Add net income from abroad", f:"Earnings of citizens abroad less earnings of foreigners at home, giving GNP"},
    {p:"Gross national product", f:"Total income earned by a country's citizens wherever it was earned"},
    {p:"Subtract depreciation", f:"Allowance for capital worn out during the year, giving NNP"},
    {p:"Net national product", f:"National income proper: the net addition to the nation's wealth"},
    {p:"Divide by population", f:"Per capita income, the average income per person"},
    {p:"Adjust for price changes", f:"Real income, showing actual purchasing power rather than money value"}
  ]},
  casestudy:{ title:"Value added in the palm oil chain",
    text:"A farmer sells palm fruit worth 200 000 Liberian dollars to a small mill. The mill presses the fruit and sells crude palm oil for 340 000. A refinery buys the crude oil, refines and bottles it, and sells it to wholesalers for 520 000. Retailers sell the bottled oil to consumers for 700 000. A student calculating the contribution of this chain to national income added all four figures and reached 1 760 000 dollars. Her teacher pointed out that this greatly overstates the contribution, and asked her to redo the calculation using value added.",
    questions:[
      {q:"Why is 1 760 000 dollars the wrong figure?", a:"It involves double counting. The value of the palm fruit is included again in the mill's output, and so on at every stage, so the same output is counted several times."},
      {q:"Calculate the value added at each of the four stages.", a:"Farmer 200 000; mill 340 000 \u2212 200 000 = 140 000; refinery 520 000 \u2212 340 000 = 180 000; retailer 700 000 \u2212 520 000 = 180 000."},
      {q:"What is the correct contribution of this chain to national income?", a:"The sum of the value added: 200 000 + 140 000 + 180 000 + 180 000 = 700 000 dollars, which equals the final selling price."},
      {q:"Why does the total value added equal the final selling price?", a:"Because the final price is simply the accumulation of the value created at every stage, so summing the additions gives the same total."},
      {q:"How does this case illustrate the argument for agro-processing in Liberia?", a:"Of the 700 000 total, the farmer captures only 200 000. Milling and refining add 320 000. If those stages take place locally rather than abroad, that value and its employment stay in Liberia."}
    ]},
  project:{ title:"Value added enquiry",
    brief:"Trace the value added along a real local production chain.",
    steps:[
      "Choose a product made and sold locally, such as palm oil, gari or furniture.",
      "Identify each stage from raw material to final sale.",
      "Find the buying and selling price at each stage.",
      "Calculate the value added at each stage and the total.",
      "Show that the total value added equals the final selling price, and comment on who gains most."
    ],
    criteria:["A real chain with at least three stages","Actual prices obtained","Value added correctly calculated at each stage","Total shown to equal the final price","Sensible comment on the distribution of gains"]},
  worked:[
    {q:"GDP is L$180bn and net income from abroad is L$6bn. Calculate GNP.", steps:["GNP = GDP + net income from abroad","180 + 6"], a:"L$186 billion"},
    {q:"GNP is L$186bn and depreciation L$14bn. Calculate NNP.", steps:["NNP = GNP \u2212 depreciation","186 \u2212 14"], a:"L$172 billion"},
    {q:"NNP is L$172bn and population 4.3 million. Calculate per capita income.", steps:["172 000 000 000 \u00f7 4 300 000"], a:"L$40 000 per head"},
    {q:"A mill buys inputs for L$200 000 and sells output for L$340 000. Calculate value added.", steps:["340 000 \u2212 200 000"], a:"L$140 000"},
    {q:"C = 120bn, I = 30bn, G = 25bn, X = 18bn, M = 22bn. Calculate GDP by the expenditure method.", steps:["GDP = C + I + G + (X \u2212 M)","120 + 30 + 25 + (18 \u2212 22)","175 \u2212 4"], a:"L$171 billion"},
    {q:"Wages 90bn, rent 15bn, interest 20bn, profit 46bn. Calculate national income by the income method.", steps:["90 + 15 + 20 + 46"], a:"L$171 billion"},
    {q:"Nominal income rises 12% while prices rise 8%. Estimate the change in real income.", steps:["12 \u2212 8"], a:"About a 4% rise"},
    {q:"GDP is L$171bn this year and was L$150bn last year. Calculate the growth rate.", steps:["Increase = 21","(21 \u00f7 150) \u00d7 100"], a:"14%"}
  ],
  apply:[
    {q:"Why does Liberia's national income figure probably understate real economic activity?", a:"A very large share of production is subsistence farming consumed at home and informal trading, neither of which passes through recorded markets, so both are largely omitted from the official figures."},
    {q:"Explain why a country with rising GDP may have a falling standard of living.", a:"If population grows faster than output, income per head falls. Inflation, worsening inequality or growth concentrated in an enclave sector can also leave most households worse off."},
    {q:"Why is agro-processing a form of industrialisation particularly suited to Liberia?", a:"It uses raw materials the country already produces, needs relatively modest capital and skill to begin, creates rural employment, reduces spoilage, and captures the value added that is currently exported with the raw crop."},
    {q:"A minister proposes measuring success by GDP alone. Give two reasons to object.", a:"GDP ignores how income is distributed, so growth may benefit only a few; and it takes no account of pollution, resource depletion, health or education, which determine actual welfare."},
    {q:"Why might import substitution in rice be attractive but difficult for Liberia?", a:"Attractive because it would save foreign exchange, create rural jobs and improve food security. Difficult because it requires irrigation, improved seed, credit, storage and roads, all of which need heavy investment before output can compete on price."}
  ],
  activities:[
    "Group research and debate on industrialisation in the context of Liberia and West Africa",
    "Organise a field trip to an industrial site to observe production and distribution, and report findings",
    "Discussion of the methods used to calculate national income",
    "Calculate GDP, GNP, NNP and per capita income from given data",
    "Trace a local production chain and calculate value added at each stage",
    "Suggest policy options that could improve the economy of Liberia"
  ],
  materials:[
    "Primary text: Stanlake's Economics by S. J. Grant, 8th edition",
    "Essential Economics for Senior Secondary Schools (Cole Esan Ande), 5th edition, 2017",
    "Comprehensive Economics for Senior Secondary School (Johnson U. Anyaele, 1997)",
    "Liberian national accounts data",
    "Calculators and graph paper"
  ],
  assessment:["Presentation, individual and group","Written assignment","Quiz","Field trip report","Written test"]
},
{
  grade:12, period:"III", sem:"One", icon:"🏦",
  title:"Money, Banking and Financial Institutions",
  subtitle:"The origin, functions and characteristics of money, the banking system, and inflation and its control",
  outcomes:[
    "Learners are able to determine the importance of money and the role banking institutions play in the economy"
  ],
  objectives:[
    "Analyse and discuss the origin, meaning, functions and types of money",
    "Catalogue and discuss the characteristics of money",
    "Analyse the types and functions of banks and other financial institutions",
    "Catalogue and discuss inflation, its types, causes and how it can be controlled",
    "Demonstrate the relationship between inflation and the value of money"
  ],
  note:"Money has four functions: a <b>medium of exchange</b>, a <b>measure of value</b>, a <b>store of value</b> and a <b>standard of deferred payment</b>. Good money is <b>durable, portable, divisible, scarce, homogeneous</b> and <b>generally acceptable</b>. <b>Inflation</b> is a sustained rise in the general price level; it reduces the <b>purchasing power</b> of money and hurts savers and those on fixed incomes.",
  study:[
    /* ---- course text: Semester One, Period III — Money, Banking and the Financial Institutions (guide pp. 28-29) ---- */
    {k:"h3", t:"Money: Origin, Characteristics and Functions"},
    {k:"p", t:"**Money** is anything generally accepted in payment for goods, services and debts. Its **origin and development** ran from barter — whose troubles were the double coincidence of wants and the lack of a measure of value — through commodity money (cowries, salt, cattle, iron), to coin, to paper notes and to bank deposits and electronic money. Good money must be **acceptable, portable, durable, divisible, uniform, scarce and stable in value**. Its **functions**: a **medium of exchange**, a **measure of value**, a **store of value** and a **standard of deferred payment**. The **value for money** is what it will buy: when prices rise, each dollar buys less — that is the link between the value of money and price."},
    {k:"rule"},
    {k:"h3", t:"The Banks and Financial Institutions"},
    {k:"table", head:["Institution","Chief function"], rows:[
     ["Central Bank","Issues the currency, banks for the government, banks for the banks, controls credit and guards the value of the money"],
     ["Commercial banks","Take deposits, give loans, transfer payments, create credit for trade and business"],
     ["Merchant banks","Finance foreign trade, arrange large loans, manage shares and company finance"],
     ["Development banks","Lend long-term to industry and agriculture, where ordinary banks fear the risk and the wait"],
     ["Savings banks and building societies","Collect small savings and lend for homes and improvement"],
     ["Insurance companies","Pool risk, compensate loss, and invest the premiums in the economy"]]},
    {k:"rule"},
    {k:"h3", t:"Inflation"},
    {k:"p", t:"**Inflation** is a persistent rise in the general price level. Its main types: **demand-pull inflation**, where total demand outruns what the economy can supply; **cost-push inflation**, where wages and input costs push prices up; and imported inflation, where the price of imported goods rises. Control it by monetary policy — restraining credit and the money supply — by fiscal policy — cutting government spending and raising taxes — and by supply measures — producing more of what is scarce. Debate the merits and demerits of inflation in the economy: debtors gain and savers lose; revenue may rise but planning fails."},
    {k:"rule"},
    {k:"h3", t:"Unemployment and its Relation to Inflation"},
    {k:"p", t:"**Unemployment** is the state of those able and willing to work who cannot find work. Its types: **structural** — the skills workers have no longer match the jobs the economy offers; **cyclical** — work lost in the downturn of the trade cycle; **frictional** — workers between jobs as they search and move. The two troubles meet: policy that fights inflation by restraining demand tends to raise unemployment, and policy that cures unemployment by expanding demand tends to raise prices — the trade-off that governments must balance."},
    {k:"h3", t:"The Evolution of Money and the Qualities It Must Have"},
    {k:"p", t:"Money evolved through stages, and the paper may ask for them: **barter**, the direct exchange of one good for another; **commodity money**, when a widely wanted commodity — salt, cloth, kola nuts, cowrie shells, iron and brass — served as the medium; **metallic money**, coin of gold, silver and copper, durable and divisible; **paper money**, first a receipt for metal held in safe keeping, then a note issued on the authority of the state; **bank money**, the deposits against which cheques are drawn; and **electronic money**, transferred by card, mobile phone and the internet. The **defects of barter** that money overcomes are the answer to the question of why money arose: the **double coincidence of wants**, since each party must want exactly what the other has; the **absence of a common measure of value**, so every good must be priced against every other; the **indivisibility** of some goods, since a cow cannot be halved to buy a basket of rice; the **difficulty of storing wealth**, since a perishable good cannot hold value; the **absence of a standard for deferred payment**, so a debt could only be repaid in kind; and the **difficulty of carrying** wealth in a form acceptable elsewhere."},
    {k:"p", t:"**The qualities of good money**, each with the reason: **general acceptability** — it must be taken by all, or it is not money; **portability** — great value in small bulk, so it can be carried; **durability** — it must not wear out or perish in use; **divisibility** — into units small enough for the smallest purchase; **uniformity (homogeneity)** — every unit alike, so none is preferred; **scarcity (limited supply)** — if it were plentiful it would have no value; **stability of value** — its purchasing power must not swing wildly, or no one will hold it; **cognisability** — easily recognised and hard to counterfeit; and **the backing of law**, as **legal tender** that must be accepted in settlement of a debt."},
    {k:"rule"},
    {k:"h3", t:"The Functions of Money"},
    {k:"table", head:["Function","What it means","What happens without it"], rows:[
     ["Medium of exchange","Accepted in payment for goods and services","Barter returns, with the double coincidence of wants"],
     ["Measure of value (unit of account)","All goods are priced in the same unit, so their values can be compared","Every good must be valued against every other"],
     ["Store of value","Wealth can be held in money and spent later","Wealth must be held in perishable goods"],
     ["Standard of deferred payment","Debts and contracts are stated and repaid in money","Lending can only be repaid in kind"],
     ["Transfer of value","Wealth can be moved from place to place and person to person","Selling a farm to buy a shop in another town is nearly impossible"]]},
    {k:"p", t:"Note the qualification the examiner rewards: money is a store of value **only while its value is stable**. In a period of rapid inflation people stop holding money and buy goods instead, and the store-of-value function fails — which is what happened in several West African economies when prices rose quickly."},
    {k:"rule"},
    {k:"h3", t:"The Central Bank and the Commercial Banks"},
    {k:"p", t:"The **Central Bank of Liberia** is the apex of the financial system. Its functions: it is the **sole issuer of the currency**; it is the **banker to the government**, holding its accounts and managing its borrowing; it is the **banker's bank**, holding the commercial banks' reserves and lending to them in need; it is the **lender of last resort**, the last source of liquidity when no one else will lend; it **controls credit and the money supply** in the interest of the whole economy; it **manages the external reserves** and the exchange rate; it **supervises and licenses** the banks and other financial institutions; and it **promotes the stability of the financial system**. Note for Liberia that the country operates a **dual currency** system, the Liberian dollar circulating alongside the United States dollar as legal tender — a feature that must be explained when the exchange rate or the control of the money supply is discussed, since a central bank cannot fully control the supply of a foreign currency it does not issue."},
    {k:"p", t:"The **commercial banks** take deposits repayable on demand, lend to trade and business, transfer payments by cheque and by electronic means, provide foreign exchange, and **create credit**. The other **financial institutions** each fill a gap the banks leave: **merchant banks** finance foreign trade, arrange large loans and manage company finance; **development banks** lend long term to industry and agriculture, where the commercial bank fears the risk and the wait; **savings banks, building societies and credit unions** gather small savings and lend for homes and improvement; **insurance companies** pool risk and invest the premiums; **mortgage institutions** lend against property; **pension funds** hold the contributions of workers and invest them; and the **capital market** — the stock exchange and the market for government securities — brings long-term saving to long-term investment. Together they **mobilise saving and channel it into investment**, which is their contribution to development."},
    {k:"rule"},
    {k:"h3", t:"How Banks Create Credit — Worked"},
    {k:"p", t:"A bank keeps a fraction of its deposits as **cash reserves** and lends the rest. Take a required reserve ratio of **20 %** and an initial deposit of **L$100 000**. The bank keeps L$20 000 and lends L$80 000; the borrower spends it and it is redeposited in the system; of that L$80 000 the bank keeps L$16 000 and lends L$64 000; and so the process runs. Total deposits created = initial deposit ÷ reserve ratio = 100 000 ÷ 0.20 = **L$500 000**, of which **L$400 000 is newly created credit**. The **credit multiplier is 1 ÷ reserve ratio = 5**. The higher the ratio, the smaller the multiplier: at 25 % the multiplier is 4 and the same deposit creates only L$400 000. This is the mechanism by which the central bank controls the money supply — by **raising the reserve requirement** it shrinks the multiplier and restricts credit; by **lowering it** it expands credit. The process assumes the public redeposits what it receives and the banks lend the whole of the excess, both of which are only approximately true."},
    {k:"rule"},
    {k:"h3", t:"Inflation — Types, Measurement, Effects and Control"},
    {k:"p", t:"**Inflation** is a persistent and general rise in the price level, not a rise in the price of one good. Its **types** by cause: **demand-pull**, where total demand outruns what the economy can supply at full employment, so too much money chases too few goods; **cost-push**, where wages, imported inputs or taxes push costs up and producers pass them on, so prices rise even though demand has not; **imported**, where the price of what the country buys abroad rises, or the exchange rate falls; and **hyperinflation**, where prices rise so fast that money ceases to function. By speed: **creeping** (a few per cent a year), **galloping** (double or triple figures) and **hyper** (prices doubling in weeks). It is measured by a **consumer price index**, which tracks the cost of a fixed basket of goods and services: if the basket cost L$1 000 in the base year and L$1 150 now, the index is 115 and **inflation is 15 %**."},
    {k:"p", t:"**The effects** are the marks. **Debtors gain and creditors lose**, because the debt is repaid in money worth less than the money borrowed. **Savers lose**, since the real value of what they saved falls; **spenders gain**. **Those on fixed incomes** — pensioners, salaried workers whose pay is adjusted yearly at best — lose, while **traders holding stocks** of goods gain as the stocks rise in value. **Income is redistributed** away from the poor, who hold no assets, toward those who do. **Planning becomes impossible**, since no one can cost a project a year ahead; **saving falls** and **speculation** in land, gold and foreign currency rises; **exports suffer**, since home goods grow dearer abroad, while **imports** look cheap and the balance of payments worsens; and where prices rise faster than wages, **industrial unrest** follows. **Control:** **monetary policy** — raising interest rates and the reserve requirement, selling government securities, and restricting credit; **fiscal policy** — cutting government spending and raising taxes to reduce demand; **supply measures** — raising output, importing what is scarce, and holding down the cost of key inputs; **incomes policy** — restraint on wages and prices by agreement or by law; and, at the root, **producing more**, since inflation is finally a shortage of goods against money."},
    {k:"rule"},
    {k:"h3", t:"Unemployment — Types and the Link with Inflation"},
    {k:"p", t:"**Unemployment** is the condition of those **able, willing and seeking** work who cannot find it at the prevailing wage. Note who is **not** unemployed: the student, the retiree, the sick, and the **discouraged worker** who has stopped looking — which is why the official rate understates the problem in a country where most people have given up looking. Its **types**: **frictional**, the short gap while a worker moves between jobs; **structural**, where the skills and locations on offer do not match the jobs available, as when a mining industry closes and its workers cannot farm; **seasonal**, in farming, fishing, construction and tourism, where work comes and goes with the year; **cyclical (demand-deficient)**, where a fall in total demand leaves workers idle; **disguised (underemployment)**, where more people work than are needed, so that removing some would not reduce output — the commonest form on the family farm and in petty trade; **voluntary**, where the worker refuses the wage on offer; and **technological**, where a machine replaces the man. Its **remedies** follow the type: training and relocation for structural unemployment, off-season work and irrigation for the seasonal, expansion of demand through public works and credit for the cyclical, rural development and land reform for the disguised."},
    {k:"p", t:"**The relation to inflation** is the **Phillips curve**: in the short run there appears to be a **trade-off** between the two — a government that expands demand to reduce unemployment sets prices rising, and one that restrains demand to hold prices down increases unemployment. The curve is drawn with the rate of inflation on one axis and the rate of unemployment on the other, sloping downward. **The criticism**, which must be given, is that the trade-off holds only while people do not expect the inflation; once workers build expected inflation into their wage demands, both rates rise together — **stagflation** — and the long-run Phillips curve is **vertical at the natural rate of unemployment**. For a developing economy the practical conclusion is that neither lever alone will serve: unemployment of the structural and disguised kinds needs **training, rural development and the growth of output**, not merely the management of demand."},
    {k:"rule"},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Defining inflation as a rise in **the price of a good**. It must be a **general and persistent** rise in the price level.",
      "Saying **creditors gain** in inflation. Debtors gain; creditors lose, being repaid in money worth less.",
      "Counting the **student and the retiree as unemployed**. The labour force includes only those able, willing and seeking work.",
      "Confusing **disguised unemployment with seasonal**. Disguised means more workers than the job needs; seasonal means work that stops for part of the year.",
      "Forgetting the **credit multiplier formula**, 1 ÷ reserve ratio, or dividing the deposit by the wrong number.",
      "Treating the **Phillips curve as permanent**. The trade-off holds only in the short run and only while inflation is unanticipated."]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Trace the evolution of money** and explain the defects of barter that made it necessary",
      "**State the qualities of good money** — acceptability, portability, durability, divisibility, uniformity, scarcity, stability of value — with a reason for each",
      "**State the functions of money** and explain how inflation destroys the store of value",
      "**Describe the functions of the central bank** and distinguish them from those of the commercial banks",
      "**Explain credit creation** and calculate the total credit created from a given deposit and reserve ratio",
      "**Define inflation, distinguish its types, measure it from a price index, and state its effects and its control**",
      "**Define unemployment, distinguish its types, and explain its relation to inflation** through the Phillips curve, including the criticism of the trade-off"
    ]}

  ],

  focus:[
    "Definition and origin of money; the development from barter",
    "Characteristics and functions of money",
    "Value of money and the price level",
    "Types and functions of banks: central, commercial, merchant, development and savings",
    "Other financial institutions",
    "Inflation: types, causes, effects and control",
    "The relationship between inflation and the value of money"
  ],
  terms:[
    {t:"money", d:"anything generally accepted as a medium of exchange", x:"Money removes the problems of barter."},
    {t:"barter", d:"the direct exchange of goods for goods", x:"Barter requires a double coincidence of wants."},
    {t:"double coincidence of wants", d:"the need for each trader to want what the other offers", x:"The double coincidence of wants makes barter difficult."},
    {t:"medium of exchange", d:"the function of money in facilitating trade", x:"As a medium of exchange money is accepted by all."},
    {t:"store of value", d:"the function of money in holding purchasing power over time", x:"Inflation weakens money as a store of value."},
    {t:"legal tender", d:"money that must by law be accepted in settlement of a debt", x:"Liberian dollars are legal tender in Liberia."},
    {t:"currency", d:"the notes and coins in circulation", x:"Currency is issued by the central bank."},
    {t:"central bank", d:"the state institution controlling the money supply and banking system", x:"The Central Bank of Liberia issues currency."},
    {t:"commercial bank", d:"a bank accepting deposits and lending to the public", x:"Commercial banks create credit."},
    {t:"merchant bank", d:"a bank providing finance and advice to businesses", x:"Merchant banks handle company finance."},
    {t:"development bank", d:"a bank providing long-term finance for development projects", x:"A development bank funds infrastructure."},
    {t:"credit creation", d:"the process by which banks expand the money supply through lending", x:"Credit creation multiplies the initial deposit."},
    {t:"monetary policy", d:"central bank action to control the money supply and interest rates", x:"Monetary policy is used to fight inflation."},
    {t:"inflation", d:"a sustained rise in the general level of prices", x:"Inflation reduces real income."},
    {t:"demand-pull inflation", d:"inflation caused by demand exceeding supply", x:"Demand-pull inflation follows excessive spending."},
    {t:"cost-push inflation", d:"inflation caused by rising costs of production", x:"A fuel price rise causes cost-push inflation."},
    {t:"hyperinflation", d:"extremely rapid and destructive inflation", x:"Hyperinflation destroys confidence in money."},
    {t:"deflation", d:"a sustained fall in the general price level", x:"Deflation can cause unemployment."},
    {t:"purchasing power", d:"the quantity of goods a unit of money can buy", x:"Inflation erodes purchasing power."},
    {t:"bank rate", d:"the rate at which the central bank lends to commercial banks", x:"Raising the bank rate discourages borrowing."},
    {t:"reserve requirement", d:"the proportion of deposits banks must hold in reserve", x:"A higher reserve requirement restricts lending."},
    {t:"open market operations", d:"central bank buying or selling securities to alter the money supply", x:"Open market operations absorb excess money."}
  ],
  facts:[
    {q:"State four problems of barter that money overcomes.", a:"The need for a double coincidence of wants; the absence of a common measure of value; the difficulty of storing value in perishable goods; and the indivisibility of many items, which makes exact exchange impossible."},
    {q:"State the four functions of money.", a:"A medium of exchange, a measure or unit of value, a store of value, and a standard of deferred payment."},
    {q:"State six characteristics of good money.", a:"Durability, portability, divisibility, homogeneity, relative scarcity, general acceptability and difficulty of counterfeiting."},
    {q:"State five functions of a central bank.", a:"It issues currency; it acts as banker to the government; it acts as banker and lender of last resort to commercial banks; it manages the country's foreign reserves and exchange rate; and it formulates and implements monetary policy to control inflation."},
    {q:"State four functions of a commercial bank.", a:"Accepting deposits for safe keeping; lending by overdraft and loan; transferring money through cheques and electronic payment; and providing services such as foreign exchange, safe custody and financial advice."},
    {q:"Explain what is meant by legal tender.", a:"Money that must by law be accepted in settlement of a debt within the country. A creditor who refuses legal tender cannot afterwards sue for non-payment."},
    {q:"Define inflation and name its two principal types.", a:"A sustained rise in the general level of prices. Demand-pull inflation arises when aggregate demand exceeds the economy's ability to supply; cost-push inflation arises when production costs such as wages, fuel or imported goods rise."},
    {q:"State four causes of inflation in a country like Liberia.", a:"Excessive growth of the money supply relative to output; depreciation of the currency raising the cost of imports; supply shortages from poor harvests or transport failure; and rising fuel and wage costs."},
    {q:"State four effects of inflation.", a:"It erodes the purchasing power of money and real incomes; it penalises savers and those on fixed incomes such as pensioners; it discourages long-term investment through uncertainty; and it makes exports less competitive."},
    {q:"State four measures to control inflation.", a:"Monetary measures such as raising the bank rate, increasing reserve requirements and open market sales; fiscal measures such as reducing government spending or raising taxes; increasing output and imports of scarce goods; and direct price and income controls in the short term."},
    {q:"Explain the relationship between inflation and the value of money.", a:"They move inversely. As the general price level rises, each unit of money buys fewer goods, so the value or purchasing power of money falls in exact proportion."}
  ],
  tf:[
    {s:"Barter requires a double coincidence of wants.", a:"true", why:"Each party must want exactly what the other has to offer."},
    {s:"A store of value is one of the functions of money.", a:"true", why:"Money allows purchasing power to be carried forward in time."},
    {s:"The central bank accepts deposits from the general public.", a:"false", why:"It is banker to government and to the commercial banks, not to individuals."},
    {s:"Inflation raises the purchasing power of money.", a:"false", why:"It lowers it: each unit of money buys fewer goods as prices rise."},
    {s:"Cost-push inflation is caused by rising production costs.", a:"true", why:"Higher wages, fuel or import prices push up the prices of finished goods."},
    {s:"Raising the bank rate tends to reduce inflation.", a:"true", why:"Dearer borrowing reduces credit, spending and demand pressure on prices."},
    {s:"Commercial banks can create credit.", a:"true", why:"By lending out a proportion of deposits repeatedly they expand the money supply."}
  ],
  sort:{ title:"Sort these monetary items", groups:[
    {name:"Functions of money", items:["medium of exchange","measure of value","store of value","standard of deferred payment"]},
    {name:"Characteristics of good money", items:["durable","portable","divisible","generally acceptable"]},
    {name:"Functions of the central bank", items:["issues currency","banker to government","lender of last resort","manages reserves"]},
    {name:"Measures to control inflation", items:["raise bank rate","raise reserve requirement","reduce government spending","increase output"]}
  ]},
  mapwork:{ title:"The banking system", caption:"Complete the table by stating the main role of each institution.", items:[
    {p:"Central bank", f:"Issues currency, controls monetary policy, banker to government and to the banks"},
    {p:"Commercial bank", f:"Accepts public deposits, lends, transfers payments and creates credit"},
    {p:"Merchant bank", f:"Provides finance, underwriting and advice to businesses rather than to individuals"},
    {p:"Development bank", f:"Supplies long-term finance for infrastructure, agriculture and industry"},
    {p:"Savings bank", f:"Encourages small savers by accepting modest deposits and paying interest"},
    {p:"Credit union", f:"Member-owned body accepting savings and lending to members at modest rates"},
    {p:"Insurance company", f:"Pools risk and channels premium income into long-term investment"}
  ]},
  casestudy:{ title:"When prices ran away",
    text:"In one year the general price level in a country rose by 30 per cent. Mr Tarpeh, a retired teacher, received a fixed pension of 12 000 Liberian dollars a month, unchanged for three years. His neighbour Comfort, a trader, raised her prices weekly and found her nominal takings rising steadily. A third neighbour had borrowed 500 000 dollars two years earlier at a fixed rate of interest to build a house. At the same time, workers demanded higher wages, and employers who granted them raised their prices again to cover the cost. The central bank raised the bank rate and increased the reserve requirement, and government cut its own spending. By the following year price rises had slowed to 9 per cent.",
    questions:[
      {q:"Explain what happened to the real value of Mr Tarpeh's pension.", a:"Its nominal value stayed at 12 000 but prices rose 30 per cent, so its purchasing power fell by roughly a quarter. He is worse off in real terms."},
      {q:"Why did the borrower gain from the inflation?", a:"He repays a fixed sum of money whose real value has fallen, so the real burden of the debt is reduced. Inflation transfers value from lender to borrower."},
      {q:"Identify the inflationary spiral described in the passage.", a:"A wage-price spiral: workers demand higher wages to meet higher prices, employers raise prices to cover the higher wages, which provokes further wage demands — cost-push inflation feeding itself."},
      {q:"Name the three anti-inflation measures used and classify each.", a:"Raising the bank rate and increasing the reserve requirement are monetary measures; cutting government spending is a fiscal measure."},
      {q:"Explain how raising the reserve requirement helps control inflation.", a:"Banks must keep a larger proportion of deposits idle, so they can lend less. Reduced credit creation slows the growth of the money supply and of spending, easing the pressure on prices."}
    ]},
  project:{ title:"Local price index",
    brief:"Construct a simple price index for your community and interpret it.",
    steps:[
      "Select ten commonly purchased goods, such as rice, oil, fish, soap and kerosene.",
      "Record the price of each in the same shop or market this month.",
      "Obtain the price of the same goods six months or a year earlier from traders' recollection or records.",
      "Calculate the percentage change for each item and the average change for the basket.",
      "Report which items rose most and suggest reasons, distinguishing demand-pull from cost-push causes."
    ],
    criteria:["Ten genuine items priced","Same shop or market used for consistency","Percentage changes correctly calculated","Basket average correctly computed","Sensible distinction between causes"]},
  worked:[
    {q:"A basket cost L$4 000 last year and L$5 200 this year. Calculate the inflation rate.", steps:["Increase = 1 200","(1 200 \u00f7 4 000) \u00d7 100"], a:"30%"},
    {q:"A pension of L$12 000 is unchanged while prices rise 30%. Calculate its real value in last year's prices.", steps:["Real value = 12 000 \u00f7 1.30"], a:"About L$9 231"},
    {q:"A worker's wage rises from L$20 000 to L$23 000 while prices rise 20%. Is he better off?", steps:["Wage rise = (3 000 \u00f7 20 000) \u00d7 100 = 15%","15% < 20%"], a:"No — real wage falls by about 5%"},
    {q:"A bank has deposits of L$50m and a reserve requirement of 20%. Calculate the maximum it can lend.", steps:["Reserves = 0.20 \u00d7 50m = 10m","50m \u2212 10m"], a:"L$40 million"},
    {q:"With a 20% reserve requirement, calculate the credit multiplier.", steps:["Multiplier = 1 \u00f7 reserve ratio","1 \u00f7 0.20"], a:"5"},
    {q:"An initial deposit of L$10m is made with a 20% reserve ratio. Find the maximum total deposits created.", steps:["10m \u00d7 multiplier","10m \u00d7 5"], a:"L$50 million"},
    {q:"A price index rises from 100 to 145 over three years. Calculate the total percentage rise.", steps:["(45 \u00f7 100) \u00d7 100"], a:"45%"},
    {q:"Money supply grows 25% while real output grows 5%. Estimate the inflation rate.", steps:["25 \u2212 5"], a:"About 20%"}
  ],
  apply:[
    {q:"Why do people lose confidence in money during hyperinflation, and what do they do instead?", a:"Money loses value so fast that it fails as a store of value and even as a medium of exchange. People spend it immediately, hold goods, land or foreign currency, and may revert to barter."},
    {q:"Explain why a country using two currencies, as Liberia does, faces particular difficulties.", a:"Prices and contracts are quoted in both, exchange rate movements shift real incomes unpredictably, the central bank's control over the money supply is weakened, and confidence tends to favour the stronger currency."},
    {q:"Why does the central bank act as lender of last resort?", a:"To prevent a solvent bank facing a temporary shortage of cash from collapsing, since one failure can spread panic and cause depositors to withdraw from other banks, bringing down the whole system."},
    {q:"How does inflation discourage long-term investment?", a:"It makes future costs and revenues unpredictable, so firms cannot calculate whether a project will be profitable. Lenders also demand higher interest to protect themselves, raising the cost of capital."},
    {q:"A government prints money to pay salaries. Explain the likely economic consequence.", a:"The money supply grows without any corresponding rise in output, so more money chases the same goods. Demand-pull inflation follows, prices rise and the real value of the salaries paid is eroded."}
  ],
  activities:[
    "Brainstorm and discuss the definition, origin, characteristics and functions of money",
    "Group research on the central bank, commercial banks, merchant banks, development banks and savings banks",
    "Discuss inflation, its types, causes, effects and control",
    "Demonstrate the relationship between inflation and the value of money",
    "Construct a simple local price index and interpret it",
    "Visit a bank or invite a bank officer to speak to the class"
  ],
  materials:[
    "Primary text: Stanlake's Economics by S. J. Grant, 8th edition",
    "Essential Economics for Senior Secondary Schools (Cole Esan Ande), 5th edition, 2017",
    "Comprehensive Economics for Senior Secondary School (Johnson U. Anyaele, 1997)",
    "Samples of currency and bank documents",
    "Central Bank of Liberia reports and price data"
  ],
  assessment:["Presentation, individual and group","Written assignment","Quiz","Price index project","Written test"]
},
{
  grade:12, period:"IV", sem:"Two", icon:"🚢",
  title:"International Trade and Balance of Payments",
  subtitle:"Reasons for trade, absolute and comparative advantage, protection, exchange rates and the balance of payments",
  outcomes:[
    "Learners can utilise their skills and knowledge to analyse the effects of policies on international trade and its benefits to the economic development of the nation"
  ],
  objectives:[
    "Discuss the term international trade and distinguish it from domestic and regional trade",
    "Elaborate on the acceptable reasons for trade between nations",
    "Determine and discuss the factors involved in international trade",
    "Analyse the reasons for variance in currencies among countries",
    "Explain the law of comparative cost, free trade and protection",
    "Discuss terms of trade, balance of trade and balance of payments"
  ],
  note:"<b>Absolute advantage</b> exists when a country can produce a good using fewer resources than another. <b>Comparative advantage</b> exists when it can produce at a lower <b>opportunity cost</b> — and this, not absolute advantage, is the true basis of gainful trade. <b>Balance of trade</b> covers visible goods only; the <b>balance of payments</b> records all transactions with the rest of the world.",
  study:[
    /* ---- course text: Semester Two, Period IV — International Trade and Balance of Payments (guide pp. 30-31) ---- */
    {k:"h3", t:"The Vocabulary of Trade"},
    {k:"p", t:"**International trade** is the exchange of goods and services between countries; **domestic trade** is exchange within a country; **regional trade** is international trade among a group of neighbouring countries, as within ECOWAS or the Mano River Union. The **terms of trade** measure how much export buys in imports — the ratio of export prices to import prices. The **balance of trade** is the difference in value between a country's exports and imports of goods alone; **legal tender** is the money the law accepts in settlement of a debt within a country — the Liberian dollar at home, other currencies abroad."},
    {k:"rule"},
    {k:"h3", t:"Why Nations Trade"},
    {k:"p", t:"The reasons for international trade: differences in **climate and resources**, differences in **technology and skill**, differences in **cost of production**, and the sheer **size of markets** — no country can produce everything well. Domestic and international trade differ in currency, distance and transport, laws and tariffs, and in the mobility of labour and capital across borders. Weigh the advantages — wider variety, cheaper goods, larger markets, foreign exchange — against the disadvantages — dumping, dependence on exports of raw materials, and the vulnerability of the home producer."},
    {k:"rule"},
    {k:"h3", t:"Absolute and Comparative Advantage; Free Trade and Protection"},
    {k:"p", t:"A country has an **absolute advantage** where it produces a good more cheaply than any other. The **law of comparative cost** says that even without absolute advantage, a country gains by specialising where its **relative** cost is lowest and trading for the rest — Liberia in rubber and iron ore, its neighbours in what they do relatively best. **Free trade** leaves the market to decide; **protection** shelters home industry by tariffs, quotas and bans, as the channels of UNCTAD debate. Judge when each serves a developing economy."},
    {k:"rule"},
    {k:"h3", t:"The Balance of Payments"},
    {k:"p", t:"The **balance of payments (BOP)** records all transactions between a country and the rest of the world — the current account of goods and services, and the capital account of investment and loans. The **use of foreign currency** — dollars, euros — to settle trade makes the exchange rate central. A **BOP disequilibrium** calls for **adjustment**: deflating demand, devaluing or letting the currency **depreciate** so exports grow cheaper and imports dearer, or borrowing. A **BOP deficit** means more paid out than taken in; a **surplus** the reverse. Show how devaluation and depreciation work, and trace their effect on Liberia's trade."},
    {k:"h3", t:"The Vocabulary of Trade, Precisely"},
    {k:"table", head:["Term","Meaning","How it is computed or used"], rows:[
     ["Domestic (internal) trade","Exchange within a country's borders","One currency, one law, factors free to move"],
     ["International (foreign) trade","Exchange between countries","Different currencies, tariffs, and factors less mobile"],
     ["Regional trade","International trade among neighbouring states in a grouping","Within ECOWAS or the Mano River Union"],
     ["Visible trade","Trade in goods that can be seen and weighed","Rubber, iron ore, timber exported; rice and fuel imported"],
     ["Invisible trade","Trade in services","Shipping, insurance, banking, tourism, transport"],
     ["Balance of trade","Visible exports minus visible imports","A surplus if exports of goods exceed imports of goods"],
     ["Terms of trade","The ratio of export prices to import prices","(Index of export prices ÷ index of import prices) × 100"],
     ["Balance of payments","All transactions between a country and the rest of the world in a year","Current account plus capital account"],
     ["Legal tender","Money the law requires to be accepted in settlement of a debt","The Liberian dollar at home; not accepted abroad"],
     ["Exchange rate","The price of one currency in terms of another","How many Liberian dollars one United States dollar buys"],
     ["Protection","Deliberate restriction of imports to shelter home industry","Tariffs, quotas, embargoes, exchange control"]]},
    {k:"p", t:"**Worked terms of trade.** In the base year Liberia's export price index is 100 and its import price index is 100, so the terms of trade are (100 ÷ 100) × 100 = **100**. In a later year the export price index falls to 90 while the import price index rises to 120, so the terms of trade are (90 ÷ 120) × 100 = **75** — **unfavourable**, because Liberia must now export more rubber to buy the same machinery. This is the classic complaint of the primary producer: the prices of what it sells rise slowly or fall, while the prices of the manufactures it buys rise steadily, so the **terms of trade move against the developing country** and more export effort buys less."},
    {k:"rule"},
    {k:"h3", t:"Why Nations Trade — and How International Trade Differs"},
    {k:"p", t:"**The reasons:** differences in **climate and natural resources**, so Liberia grows rubber and Nigeria pumps oil; differences in **technology and skill**, so one country makes machines and another grows cocoa; differences in **cost of production**, which make specialisation profitable; differences in **taste**, which create a demand for what another country alone produces; the **size of the market**, since some industries need a market larger than any one country offers; and **uneven distribution of resources**, which no country can alter. **The differences from domestic trade:** different **currencies**, so payment must be converted and the exchange rate matters; **tariffs, quotas and other barriers** at the border; **different laws and standards** governing contract, quality and safety; **greater distance and transport cost**; **less mobility of labour and capital**, since workers do not move easily between countries and languages; **immobility of some goods**, and the **risk** of war, of exchange-rate movement and of a buyer abroad who cannot be pursued through the courts."},
    {k:"rule"},
    {k:"h3", t:"Absolute and Comparative Advantage Worked"},
    {k:"p", t:"**Absolute advantage** exists where a country produces a good with fewer resources than another. **Comparative advantage**, the **law of comparative cost** of David Ricardo, holds that even a country with no absolute advantage gains by specialising in the good where its disadvantage is **least** — where its **relative** cost is lowest — and trading for the rest. Work it on two countries and two goods, with output per worker per day:"},
    {k:"table", head:["Country","Bags of rice per worker","Tonnes of rubber per worker"], rows:[
     ["Liberia","6","3"],
     ["Neighbourland","10","4"]]},
    {k:"p", t:"Neighbourland has an **absolute advantage in both** goods — more rice and more rubber per worker. Trade is still profitable. In Liberia, 6 bags of rice cost the labour that would produce 3 tonnes of rubber, so **1 bag of rice costs 0.5 tonne of rubber**; in Neighbourland, 10 bags cost 4 tonnes, so **1 bag of rice costs 0.4 tonne**. Neighbourland's **comparative advantage is in rice**, and Liberia's — where its disadvantage is smaller, 3 ÷ 4 rather than 6 ÷ 10 — is in **rubber**. If Neighbourland specialises in rice and Liberia in rubber and they trade, both end with more of both goods than either could produce alone. The lesson for the paper: **specialise where your opportunity cost is lowest, not where you are absolutely best**, and the gains from trade follow. Add the **limitations** of the theory, which the examiner expects: it assumes **full employment**, **no transport cost**, **perfect mobility within** and **immobility between** countries, **constant returns**, **no technological change** and **free trade** — none of which holds exactly, and transport cost in particular can wipe out a small comparative advantage."},
    {k:"rule"},
    {k:"h3", t:"Free Trade Against Protection"},
    {k:"p", t:"**Free trade** leaves the flow of goods to the market without tariff or quota. Its **advantages**: the widest choice for the consumer at the lowest price; specialisation according to comparative advantage, so world output rises; competition that keeps home producers efficient; the economies of a large market; and no retaliation. Its **disadvantages** for a developing country: dependence on a few primary exports whose prices it cannot control; the destruction of infant industries that cannot yet compete; the loss of tariff revenue; and the risk of **dumping** — the sale abroad below cost, or below the home price, to drive out a competitor."},
    {k:"p", t:"**Protection** shelters home industry. Its **instruments**: the **tariff** (a duty on imports, raising their price); the **quota** (a physical limit on the quantity that may enter); the **embargo** (an outright ban); **exchange control** (a restriction on the foreign currency available to importers); **administrative obstacles** (licensing, standards, delay); and **subsidies** to the home producer, which lower its cost instead of raising the rival's price. Its **arguments**: the **infant industry** argument, that a new industry needs shelter until it learns and grows; **employment**, that imports cost jobs at home; **diversification**, that dependence on one export is dangerous; **revenue**, that a tariff is easy to collect; **anti-dumping**; **the balance of payments**, that restricting imports eases a deficit; **defence and self-sufficiency**, that a country must be able to feed and arm itself; **retaliation** against another country's tariffs; and **the terms of trade**, that a large buyer can force the price of its imports down. Its **dangers**: higher prices for the consumer; a sheltered, inefficient industry that never grows up; retaliation; smuggling where the tariff is high; and the corruption that licensing invites. The balanced answer — the one that earns the higher marks — is that protection is justified for a **stated infant industry for a stated period**, with the condition that it must eventually compete, and unjustified when it merely preserves an inefficient monopoly."},
    {k:"rule"},
    {k:"h3", t:"The Balance of Payments in Full"},
    {k:"p", t:"The **balance of payments** records every transaction between a country and the rest of the world over a period, and it is divided into accounts. The **current account** holds the **visible** balance (exports and imports of goods), the **invisible** balance (services — shipping, insurance, banking, tourism, transport), **income** from investment abroad and paid to foreigners, and **unilateral transfers** (remittances, aid and gifts, which are received without anything given in return). The **capital account** holds **private capital** (direct investment in factories and plantations, portfolio investment in shares and securities, and short-term flows) and **official capital** (government borrowing and lending, and the movement of the external reserves). By definition the **total balance of payments must balance**, since every transaction has two sides; a deficit on the current account must be financed by a surplus on the capital account or by drawing down the reserves."},
    {k:"p", t:"**A disequilibrium** is a persistent deficit on the current account. Its **causes**: a fall in the world demand or price for the country's exports, as when the rubber price falls; a rise in the price of what it imports, as with fuel; **inflation at home**, making exports dearer and imports cheaper; **over-development** and a boom that sucks in imports; a **fall in the earnings from services**; heavy **debt service** payments abroad; and **capital flight**, as residents move their money out. Its **correction**: **deflation** — cutting spending and raising taxes and interest rates to reduce the demand for imports, at the cost of unemployment; **devaluation** — lowering the exchange rate so exports grow cheaper abroad and imports dearer at home, which works only if demand responds and home costs do not simply rise to match; **exchange control** and **import restriction**, which ease the deficit but invite smuggling and offend trading partners; **borrowing** from the IMF or the reserves, which finances the deficit without curing it; **import substitution** and **export promotion**, which attack the cause; and **austerity with structural reform**, the combination the international institutions usually require. State the trade-off: every cure except the last is either deflationary, and so costs jobs, or restrictive, and so costs the consumer."},
    {k:"rule"},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Confusing the **balance of trade with the balance of payments**. The balance of trade is goods alone; the balance of payments is every transaction.",
      "Computing the **terms of trade as import prices ÷ export prices**. It is **export ÷ import**, × 100.",
      "Saying a favourable terms of trade means **high export prices** alone. It means export prices are high **relative to import prices**.",
      "Confusing **absolute with comparative advantage**. A country with an absolute advantage in everything still trades, on comparative cost.",
      "Calling a **tariff a quota**. A tariff raises the price; a quota limits the quantity.",
      "Treating a **current account deficit as impossible to finance**. It is financed from the capital account or the reserves — the problem is that the financing runs out."]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Distinguish domestic, international and regional trade**, and visible from invisible trade",
      "**Define and calculate the terms of trade**, and say whether the movement is favourable — with the point about the primary producer",
      "**Explain why nations trade** and how international trade differs from domestic trade",
      "**Distinguish absolute from comparative advantage** and work a two-country, two-good example, stating the limitations of the theory",
      "**Weigh free trade against protection** — the instruments, the arguments for protection, and the dangers, with a conclusion",
      "**Describe the components of the balance of payments** and distinguish the current from the capital account",
      "**Explain the causes of a balance of payments deficit and the measures taken to correct it**, with the cost of each"
    ]}

  ],

  focus:[
    "Definitions: international, domestic and regional trade",
    "Terms of trade and balance of trade",
    "Reasons for and features of international trade",
    "Differences between domestic and international trade",
    "The law of comparative cost; absolute and comparative advantage",
    "Free trade and protection; instruments of protection",
    "Exchange rates and the variance in currencies",
    "The balance of payments and its correction"
  ],
  terms:[
    {t:"international trade", d:"the exchange of goods and services between countries", x:"International trade widens the market."},
    {t:"domestic trade", d:"trade taking place within a country", x:"Domestic trade uses one currency."},
    {t:"regional trade", d:"trade among countries of the same region", x:"ECOWAS promotes regional trade."},
    {t:"visible trade", d:"trade in physical goods", x:"Rubber exports are visible trade."},
    {t:"invisible trade", d:"trade in services", x:"Shipping and tourism are invisible trade."},
    {t:"balance of trade", d:"the difference between visible exports and visible imports", x:"A trade deficit means imports exceed exports."},
    {t:"balance of payments", d:"a record of all economic transactions with other countries", x:"The balance of payments includes services and capital."},
    {t:"terms of trade", d:"the ratio of export prices to import prices", x:"Falling terms of trade worsen a country's position."},
    {t:"absolute advantage", d:"producing a good with fewer resources than another country", x:"Absolute advantage compares productivity directly."},
    {t:"comparative advantage", d:"producing a good at a lower opportunity cost", x:"Comparative advantage is the real basis of trade."},
    {t:"free trade", d:"trade without tariffs, quotas or other restrictions", x:"Free trade maximises world output."},
    {t:"protection", d:"government restriction of imports to shield domestic industry", x:"Protection may shelter an infant industry."},
    {t:"tariff", d:"a tax placed on imported goods", x:"A tariff raises the price of imports."},
    {t:"quota", d:"a physical limit on the quantity that may be imported", x:"A quota restricts import volume."},
    {t:"embargo", d:"a total ban on trade in a good or with a country", x:"An embargo stops trade completely."},
    {t:"dumping", d:"selling exports below cost to capture a market", x:"Dumping can destroy local industry."},
    {t:"infant industry", d:"a new domestic industry not yet able to compete", x:"An infant industry may justify temporary protection."},
    {t:"exchange rate", d:"the price of one currency in terms of another", x:"The exchange rate affects import prices."},
    {t:"devaluation", d:"an official reduction in the value of a currency", x:"Devaluation makes exports cheaper abroad."},
    {t:"depreciation", d:"a fall in a currency's value determined by the market", x:"Depreciation raises the cost of imports."},
    {t:"foreign reserves", d:"holdings of foreign currency and gold by the central bank", x:"Foreign reserves settle international debts."},
    {t:"trade deficit", d:"the excess of imports over exports", x:"A persistent trade deficit drains reserves."}
  ],
  facts:[
    {q:"Define international trade and state three differences from domestic trade.", a:"The exchange of goods and services across national boundaries. It differs in involving different currencies and exchange rates, restrictions such as tariffs and quotas, and greater distance with more complex transport, documentation and risk."},
    {q:"State five reasons why countries engage in international trade.", a:"Differences in natural resources and climate; differences in the cost of production; the desire for variety and goods that cannot be produced locally; to obtain the benefits of specialisation and large scale production; and to earn foreign exchange."},
    {q:"Distinguish absolute advantage from comparative advantage.", a:"Absolute advantage means producing a good with fewer resources than another country. Comparative advantage means producing at a lower opportunity cost — giving up less of another good. Trade is beneficial on the basis of comparative, not absolute, advantage."},
    {q:"State the law of comparative cost.", a:"A country should specialise in producing and exporting those goods in which its comparative cost is lowest, and import those in which its comparative cost is highest. Both countries then gain even if one is more efficient at everything."},
    {q:"Define terms of trade and explain a favourable movement.", a:"The ratio of the index of export prices to the index of import prices. Terms of trade improve when export prices rise relative to import prices, so a given volume of exports buys more imports."},
    {q:"Distinguish the balance of trade from the balance of payments.", a:"The balance of trade records only visible goods exported and imported. The balance of payments records all transactions with other countries, including services, income and capital movements, and must always balance overall."},
    {q:"Name four instruments of protection.", a:"Tariffs or customs duties, quotas, embargoes, and administrative barriers such as strict licensing and quality standards; subsidies to domestic producers and exchange control are also used."},
    {q:"State four arguments in favour of protection.", a:"To shelter infant industries until they can compete; to protect employment in domestic industry; to prevent dumping by foreign producers; and to correct a balance of payments deficit or safeguard strategic industries."},
    {q:"State three arguments against protection.", a:"It raises prices for consumers and reduces choice; it protects inefficiency by removing competitive pressure; and it invites retaliation which reduces the country's own exports."},
    {q:"State four causes of a balance of payments deficit.", a:"Heavy dependence on imports including food and fuel; a narrow range of exports whose world prices fall; loss of competitiveness through inflation; and large payments of profit, interest and debt service abroad."},
    {q:"State four measures to correct a balance of payments deficit.", a:"Devalue the currency to make exports cheaper and imports dearer; restrict imports by tariffs or quotas; promote and diversify exports; and reduce domestic demand and inflation through fiscal and monetary policy."},
    {q:"Explain why exchange rates differ between countries.", a:"A currency's value reflects the supply of and demand for it, which depends on the country's exports and imports, capital flows, inflation rate relative to others, interest rates and confidence in its economy and government."}
  ],
  tf:[
    {s:"Comparative advantage is the true basis for gainful trade.", a:"true", why:"Both countries gain if opportunity costs differ, even if one is absolutely more efficient at everything."},
    {s:"The balance of trade includes services.", a:"false", why:"It covers visible goods only; services appear in the invisible account of the balance of payments."},
    {s:"A tariff is a physical limit on imports.", a:"false", why:"A tariff is a tax on imports; a quota is the physical limit."},
    {s:"Devaluation tends to make a country's exports cheaper abroad.", a:"true", why:"Foreign buyers need less of their own currency to purchase them."},
    {s:"Protection always benefits the domestic economy.", a:"false", why:"It raises consumer prices, shelters inefficiency and can provoke retaliation against exports."},
    {s:"Terms of trade improve when export prices rise relative to import prices.", a:"true", why:"A given volume of exports then purchases more imports."},
    {s:"Dumping means selling exports below cost to capture a market.", a:"true", why:"It can drive out local producers before prices are raised again."}
  ],
  sort:{ title:"Sort these trade terms", groups:[
    {name:"Visible trade", items:["rubber exports","iron ore exports","rice imports","machinery imports"]},
    {name:"Invisible trade", items:["shipping services","tourism","insurance","remittances"]},
    {name:"Instruments of protection", items:["tariff","quota","embargo","import licensing"]},
    {name:"Correcting a deficit", items:["devaluation","export promotion","import restriction","reducing inflation"]}
  ]},
  mapwork:{ title:"Structure of the balance of payments", caption:"Complete the table by stating what each account records.", items:[
    {p:"Visible trade account", f:"Exports and imports of physical goods; the balance is the balance of trade"},
    {p:"Invisible trade account", f:"Exports and imports of services such as shipping, insurance and tourism"},
    {p:"Income account", f:"Wages, profits, interest and dividends flowing into and out of the country"},
    {p:"Current transfers", f:"Remittances from citizens abroad, aid and gifts requiring nothing in return"},
    {p:"Current account", f:"The sum of visible trade, invisible trade, income and transfers"},
    {p:"Capital and financial account", f:"Investment flows, loans and changes in ownership of assets"},
    {p:"Official reserves", f:"The balancing item: reserves fall to settle a deficit and rise with a surplus"}
  ]},
  casestudy:{ title:"Two countries, two crops",
    text:"Suppose Liberia and a neighbouring country each have 100 units of resources. Liberia can produce 20 tonnes of rubber or 10 tonnes of rice with all its resources. The neighbour can produce 12 tonnes of rubber or 12 tonnes of rice. The neighbour observes that Liberia is better at producing rubber and equal in nothing, and argues there is no point in trading since Liberia is the more efficient producer of rubber and the two are close in rice. An economics teacher points out that what matters is not absolute output but the opportunity cost of each good in each country, and works the figures on the board.",
    questions:[
      {q:"Calculate Liberia's opportunity cost of one tonne of rubber.", a:"Liberia gives up 10 rice for 20 rubber, so one tonne of rubber costs 0.5 tonnes of rice."},
      {q:"Calculate the neighbour's opportunity cost of one tonne of rubber.", a:"The neighbour gives up 12 rice for 12 rubber, so one tonne of rubber costs 1 tonne of rice."},
      {q:"Which country has the comparative advantage in rubber, and which in rice?", a:"Liberia has the comparative advantage in rubber, costing only 0.5 rice against 1. The neighbour has the comparative advantage in rice, costing 1 rubber against Liberia's 2."},
      {q:"Is the neighbour's argument against trade correct? Explain.", a:"No. Absolute advantage is irrelevant. Because opportunity costs differ, both countries gain by specialising according to comparative advantage and trading."},
      {q:"State the combined output if each specialises completely.", a:"Liberia produces 20 tonnes of rubber and the neighbour 12 tonnes of rice, giving 20 rubber and 12 rice — more of both than many mixed combinations."}
    ]},
  project:{ title:"Liberia's trade profile",
    brief:"Investigate what Liberia buys and sells abroad and assess the balance.",
    steps:[
      "List Liberia's five main exports and five main imports from available sources.",
      "Classify each as visible or invisible trade.",
      "Find out which countries are Liberia's main trading partners.",
      "Comment on whether the export list is diversified or narrow, and why that matters.",
      "Suggest two exports Liberia could develop and justify each."
    ],
    criteria:["Five exports and five imports correctly identified","Correct classification of visible and invisible","Main partners named","Sound comment on diversification","Two justified proposals for new exports"]},
  worked:[
    {q:"Exports are L$620m and imports L$980m. Calculate the balance of trade.", steps:["620 \u2212 980"], a:"A deficit of L$360 million"},
    {q:"Export price index is 120 and import price index 150. Calculate the terms of trade.", steps:["(120 \u00f7 150) \u00d7 100"], a:"80 — unfavourable terms of trade"},
    {q:"Liberia can produce 20 rubber or 10 rice. Find the opportunity cost of one tonne of rubber.", steps:["10 rice \u00f7 20 rubber"], a:"0.5 tonnes of rice"},
    {q:"Using the same figures, find the opportunity cost of one tonne of rice.", steps:["20 rubber \u00f7 10 rice"], a:"2 tonnes of rubber"},
    {q:"At US$1 = L$190, calculate the cost in Liberian dollars of a US$4 500 vehicle.", steps:["4 500 \u00d7 190"], a:"L$855 000"},
    {q:"The rate moves from L$190 to L$210 per US dollar. Calculate the percentage depreciation.", steps:["Change = 20","(20 \u00f7 190) \u00d7 100"], a:"About 10.5% depreciation"},
    {q:"After that change, recalculate the cost of the US$4 500 vehicle.", steps:["4 500 \u00d7 210"], a:"L$945 000 — L$90 000 more"},
    {q:"Current account deficit is L$360m and net capital inflow L$300m. Find the change in reserves.", steps:["300 \u2212 360"], a:"Reserves fall by L$60 million"}
  ],
  apply:[
    {q:"Why is Liberia's heavy dependence on imported rice a balance of payments concern?", a:"Rice must be paid for in foreign currency every year regardless of the harvest, which drains reserves. Any rise in the world price or fall in export earnings immediately worsens the deficit."},
    {q:"Explain how depreciation of the Liberian dollar affects a market trader who imports goods.", a:"She must pay more Liberian dollars for the same foreign goods, so her costs rise. She either raises prices, losing customers, or absorbs the cost and earns less."},
    {q:"Give one sound and one weak argument for protecting a new Liberian cement industry.", a:"Sound: as an infant industry it needs temporary protection to reach the scale at which its costs become competitive. Weak: protecting it permanently merely shelters inefficiency and forces consumers to pay more indefinitely."},
    {q:"Why does a country with only two or three export commodities face particular risk?", a:"Its entire foreign exchange earnings depend on the world prices of a few goods. A price collapse or crop failure causes an immediate balance of payments crisis with nothing to offset it."},
    {q:"How could ECOWAS membership benefit Liberian producers?", a:"It gives access to a far larger regional market without tariffs, allowing production on a larger and cheaper scale, and it improves bargaining power and encourages regional infrastructure and investment."}
  ],
  activities:[
    "Group discussion of international trade, domestic trade, regional trade, terms of trade and balance of trade",
    "Pair research on the importance of international trade and the differences from domestic trade",
    "Work examples on absolute and comparative advantage",
    "Discuss free trade and protection, and the concept of legal tender",
    "Calculate exchange rate conversions and their effects on import prices",
    "Investigate Liberia's trade profile and balance of payments"
  ],
  materials:[
    "Primary text: Stanlake's Economics by S. J. Grant, 8th edition",
    "Essential Economics for Senior Secondary Schools (Cole Esan Ande), 5th edition, 2017",
    "Comprehensive Economics for Senior Secondary School (Johnson U. Anyaele, 1997)",
    "Trade statistics and exchange rate data",
    "Maps of trading partners and calculators"
  ],
  assessment:["Presentation, individual and group","Written assignment","Quiz","Trade profile project","Written test"]
},
{
  grade:12, period:"V", sem:"Two", icon:"🏛️",
  title:"Public Finance and International Organisations",
  subtitle:"Fiscal policy, taxation and its incidence, government revenue and expenditure, and the major international bodies",
  outcomes:[
    "Learners are able to explain government fiscal policy and appreciate how it is used to provide better services that improve the livelihood of the citizenry"
  ],
  objectives:[
    "Determine what public finance is and its importance to public expenditure",
    "Explain government fiscal measures — taxation and expenditure",
    "Explain the role of taxation in the economy",
    "Illustrate graphically the incidence of taxation",
    "Catalogue and discuss the roles of the major international economic organisations",
    "Relate elasticity of demand and supply to taxation"
  ],
  note:"<b>Public finance</b> is the study of government revenue and expenditure. <b>Fiscal policy</b> is the use of taxation and spending to influence the economy. A <b>direct tax</b> is levied on income or wealth and cannot easily be shifted; an <b>indirect tax</b> is levied on goods and can be passed to the consumer. The <b>incidence</b> of a tax — who really bears it — depends on the <b>elasticity</b> of demand and supply.",
  study:[
    /* ---- course text: Semester Two, Period V — Public Finance and International Organisations (guide pp. 32-33) ---- */
    {k:"h3", t:"Public Finance and Fiscal Policy"},
    {k:"p", t:"**Public finance** is the study of how government raises and spends money. **Fiscal policy** is the use of taxation and government expenditure to steer the economy; its objectives: to finance public services, to redistribute income, to stabilise prices and employment, and to encourage growth. The **sources of government revenue** are chiefly taxation, together with fees and licences, the profits of public enterprises, borrowing and grants. The **economic effects of taxation**: it moves purchasing power to the state, can discourage what is taxed and encourage what is relieved, and changes the distribution of income."},
    {k:"rule"},
    {k:"h3", t:"Direct and Indirect Taxes"},
    {k:"p", t:"A **direct tax** is levied on the person who bears it and cannot be shifted: income tax, company tax, property tax. Its advantages: certain, equitable by ability to pay, a lever of policy; its disadvantages: it can discourage work and saving, needs records and administration, and is easy to evade. An **indirect tax** is levied on goods and services and shifted to the consumer: customs duty, excise, sales tax and VAT. Its advantages: hard to evade, collected at the point of sale, spread wide; its disadvantages: regressive on the poor, uncertain in yield, and it raises prices. Examine the types and amounts of tax a business in your community pays in a fiscal year."},
    {k:"rule"},
    {k:"h3", t:"Tax Incidence, Elasticity and the Systems of Taxation"},
    {k:"p", t:"**Tax incidence** is where the burden of a tax finally rests. The **elasticity of demand and supply** decides it: where demand is inelastic the consumer bears most of an indirect tax; where demand is elastic the seller bears it. Illustrate the burden graphically. The three **systems of taxation**: a **progressive tax** takes a rising share as income rises; a **proportional tax** takes the same share of all incomes; a **regressive tax** takes a rising share as income falls. Analyse the effect of each system on a family income, a business firm and the government."},
    {k:"rule"},
    {k:"h3", t:"The International Economic Organisations"},
    {k:"table", head:["Organisation","What it does"], rows:[
     ["IMF — International Monetary Fund","Watches over the world's money, lends to countries in balance of payments trouble, advises on policy"],
     ["IBRD — World Bank","Lends long-term for development projects — roads, power, schools"],
     ["IFC — International Finance Corporation","Finances private enterprise in developing countries"],
     ["ADB / AfDB — African Development Bank","African-owned bank lending for African development"],
     ["OPEC — Organization of Petroleum Exporting Countries","Coordinates the petroleum policies of member oil exporters"],
     ["ECA — Economic Commission for Africa","UN commission promoting Africa's economic development"],
     ["UNCTAD — UN Conference on Trade and Development","Promotes the trade and development interests of developing countries"]]},
    {k:"p", t:"Prepare a research paper on these organisations and indicate how Liberia has benefited from each — in loans, debt relief, technical advice, training and market access."},
    {k:"h3", t:"The Sources of Government Revenue and the Budget"},
    {k:"p", t:"**Public finance** is the study of how government raises and spends money. Its **sources of revenue**: **taxation**, by far the largest — direct taxes on income and profit, indirect taxes on goods and services, and above all the **customs duties** on imports, which in a small open economy such as Liberia's supply a very large share of the total because they are collected at a few ports and are hard to evade; **fees and licences** — for a passport, a driving licence, a business permit, a market stall; **fines and forfeitures**; the **profits of public enterprises** and the **rent and royalty** from concessions on land, minerals and forest; **borrowing**, at home through treasury bills and development bonds and abroad from governments and institutions; **grants and aid** from foreign governments and organisations; and the **sale of public assets**, including the proceeds of privatization. Note the distinction between **recurring revenue**, which comes in year after year and can fund salaries, and **capital or windfall revenue**, such as a loan or the sale of an asset, which should fund a project and not the payroll."},
    {k:"p", t:"The **national budget** is the government's statement of expected revenue and intended expenditure for the coming year. It is **balanced** when the two are equal; in **surplus** when revenue exceeds expenditure, which withdraws purchasing power and so restrains inflation; and in **deficit** when expenditure exceeds revenue, which the government must finance by borrowing or by drawing on reserves, and which adds to demand and so may cause inflation. **Fiscal policy** is the deliberate use of the budget to steer the economy: against **inflation**, a surplus budget — spending less and taxing more; against **unemployment and depression**, a deficit budget — spending more and taxing less, so that demand and output rise; and for **growth**, spending directed to the infrastructure, education and health that raise the economy's capacity. The **national debt** is the accumulated total of past borrowing; it is **internal** when owed at home and **external** when owed abroad. Servicing the external debt costs foreign exchange, which is why a heavy debt burden can absorb a large part of what a developing country earns from its exports."},
    {k:"rule"},
    {k:"h3", t:"Direct and Indirect Taxation Compared"},
    {k:"table", head:["Feature","Direct tax","Indirect tax"], rows:[
     ["Levied on","Income, profit and property — the person who bears it","Goods and services — the transaction"],
     ["Can it be shifted","No — the taxpayer and the bearer are the same person","Yes — it is passed on to the consumer in the price"],
     ["Examples","Personal income tax, company tax, property and land tax, withholding tax","Customs duty, excise duty, sales tax, value added tax"],
     ["Certainty","Certain — the taxpayer knows what he owes and when","Uncertain in yield — it depends on how much is bought"],
     ["Equity","Can be made progressive, taking a rising share as income rises","Usually regressive — the same duty on a loaf takes a larger share of the poor man's income"],
     ["Ease of evasion","Easier to evade, by hiding income","Hard to evade, since it is collected at the point of sale or at the port"],
     ["Administration","Needs records, returns and assessment — costly and slow","Collected at few points — the port, the factory, the large shop"],
     ["Effect on prices","No direct effect","Raises the price of the taxed good directly"],
     ["Effect on behaviour","May discourage work, saving and enterprise","May discourage the consumption of what is taxed — useful for tobacco and drink"]]},
    {k:"p", t:"**The canons of taxation** — Adam Smith's four, which every answer should name: **equity**, that each pays according to his ability; **certainty**, that the tax, its amount and its date are known in advance and not left to the official's whim; **convenience**, that it is collected at the time and in the manner easiest for the payer, as income tax deducted at source; and **economy**, that the cost of collection is small against the yield. To these modern writers add **productivity** (the yield must be worth having), **elasticity** (the yield must rise as the economy grows), **simplicity** (the payer must understand it), and **flexibility** (the rate can be changed as policy requires)."},
    {k:"rule"},
    {k:"h3", t:"Tax Incidence and the Three Systems of Taxation"},
    {k:"p", t:"**Tax incidence** is where the burden of a tax **finally rests**, as distinct from where it is levied — the **impact** is on the seller who pays it over, but the **incidence** may fall on the buyer. The rule is set by **elasticity**: the side of the market that is **less elastic** bears the greater share, because it has the less escape. Where **demand is inelastic** and supply elastic — salt, fuel, tobacco — the **consumer** bears most of the tax, since he goes on buying whatever the price. Where **demand is elastic** and supply inelastic — a perishable crop that must be sold — the **producer** bears most of it, since the buyer simply switches to something else. On a diagram the tax drives a wedge between the price the buyer pays and the price the seller receives, and the split of that wedge is the incidence."},
    {k:"table", head:["System","What it does","Worked example on incomes of L$2 000 and L$20 000"], rows:[
     ["Progressive","The rate rises as income rises, so the rich pay a larger share","10 % on the first income and 30 % on the second: L$200 against L$6 000 — 10 % and 30 % of income"],
     ["Proportional","The same rate on all incomes","15 % on both: L$300 and L$3 000 — 15 % of each"],
     ["Regressive","The same amount, or a lower rate, falls on the higher income, so the poor pay the larger share","A flat L$500 poll tax: 25 % of the first income but only 2.5 % of the second. Every indirect tax is regressive in this sense"]]},
    {k:"p", t:"Analyse each as the question asks. A **progressive** system redistributes income and can be adjusted to raise or restrain demand, but at high rates it discourages work and saving and drives income underground. A **proportional** system is simple and neutral but does nothing about inequality. A **regressive** system falls hardest on those least able to pay — which is the criticism of relying on customs and sales taxes, as most West African budgets do — yet it is easy to collect and hard to evade. The practical answer is that most governments use all three: a progressive income tax, a proportional company tax, and regressive duties on consumption, because the last is where the money reliably is."},
    {k:"rule"},
    {k:"h3", t:"The International Economic Organisations"},
    {k:"table", head:["Organisation","Founded","What it does for a member such as Liberia"], rows:[
     ["IMF — International Monetary Fund","1944","Watches over the international monetary system, lends to members in balance of payments difficulty on condition of policy reform, and advises on monetary and fiscal policy"],
     ["IBRD — the World Bank (with IDA and IFC)","1944","Lends long term for development projects — roads, power, schools, health — and IDA lends on concessional terms to the poorest members"],
     ["WTO — World Trade Organization","1995, succeeding GATT of 1947","Sets the rules of trade between members, provides a forum for negotiation and settles trade disputes"],
     ["UNCTAD — UN Conference on Trade and Development","1964","Speaks for the developing countries on trade, commodities and the terms of trade"],
     ["African Development Bank","1964","Lends for development within Africa and coordinates regional projects"],
     ["ECOWAS Bank for Investment and Development","The investment arm of ECOWAS","Finances regional infrastructure and private investment in West Africa"],
     ["OPEC — Organization of the Petroleum Exporting Countries","1960","Coordinates the oil policy of the exporting members; Liberia is not a member but is affected by its decisions through the price of fuel"],
     ["UNCTAD, IMF and World Bank together","—","The sources of the conditional lending and the policy advice that shape a borrowing country's budget"]]},
    {k:"p", t:"Be ready to **evaluate** them, which is what the question asks. Their **benefits** to a developing member: finance on terms it could not obtain in the market, technical advice and training, a forum in which the small state has a voice, and the discipline that a stated programme imposes on the budget. Their **criticisms**: the **conditions** attached to lending — the cuts in public spending, the removal of subsidies, the devaluation — fall hardest on the poor; the **voting power** in the IMF and the World Bank follows the contribution, so the largest economies decide; and the same policy has often been prescribed to very different economies. A full answer gives both sides and then applies them to Liberia's own experience of borrowing and reform."},
    {k:"rule"},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Calling a **sales tax a direct tax**. Any tax that can be passed on to the consumer is indirect.",
      "Confusing **impact with incidence**. Impact is where the tax is levied; incidence is where the burden finally falls.",
      "Saying an indirect tax is **progressive**. A uniform rate on consumption takes a larger share of the poor man's income, so it is regressive.",
      "Forgetting **customs duties** among the sources of Liberian revenue. They are among the largest and the easiest to collect.",
      "Confusing the **IMF with the World Bank**. The IMF deals with the balance of payments and short-term stability; the World Bank lends long term for development projects.",
      "Listing the **canons of taxation** without applying them. Name the canon, then say where a named Liberian tax satisfies or breaks it."]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Define public finance and fiscal policy** and state the objectives of each",
      "**List the sources of government revenue** and distinguish recurring from capital revenue",
      "**Explain the national budget** — balanced, surplus and deficit — and how each is used against inflation or unemployment",
      "**Distinguish direct from indirect taxation** in a table, with examples, advantages and disadvantages of each",
      "**State the canons of taxation** and apply them to a named tax",
      "**Explain tax incidence** and show how elasticity decides who bears the burden",
      "**Distinguish progressive, proportional and regressive taxation** with a worked example, and analyse the effect of each on a family, a firm and the government",
      "**Describe the international economic organisations** — IMF, World Bank, WTO, UNCTAD, the African Development Bank — and evaluate what they do for a developing member"
    ]}

  ],

  focus:[
    "Meaning of public finance; fiscal policy and its objectives",
    "Sources of government revenue, especially taxation",
    "Economic effects of taxation",
    "Types of taxes: direct and indirect; progressive, proportional and regressive",
    "Advantages and disadvantages of direct and indirect taxes",
    "Tax incidence and its relation to elasticity",
    "Government expenditure: recurrent and capital",
    "The roles of the major international economic organisations"
  ],
  terms:[
    {t:"public finance", d:"the study of government revenue and expenditure", x:"Public finance covers taxing and spending."},
    {t:"fiscal policy", d:"the use of taxation and government spending to influence the economy", x:"Fiscal policy can stimulate or restrain demand."},
    {t:"budget", d:"the government's annual statement of revenue and expenditure", x:"The budget is presented to the legislature."},
    {t:"budget deficit", d:"an excess of government spending over revenue", x:"A budget deficit must be financed by borrowing."},
    {t:"budget surplus", d:"an excess of revenue over government spending", x:"A budget surplus can repay debt."},
    {t:"taxation", d:"a compulsory payment to government without direct return", x:"Taxation is the main source of revenue."},
    {t:"direct tax", d:"a tax on income or wealth paid directly by the person taxed", x:"Income tax is a direct tax."},
    {t:"indirect tax", d:"a tax on goods and services which can be passed on", x:"Sales tax is an indirect tax."},
    {t:"progressive tax", d:"a tax taking a larger proportion of higher incomes", x:"A progressive tax reduces inequality."},
    {t:"proportional tax", d:"a tax taking the same proportion of all incomes", x:"A flat rate tax is proportional."},
    {t:"regressive tax", d:"a tax taking a larger proportion of lower incomes", x:"A tax on basic food is regressive."},
    {t:"tax incidence", d:"the final resting place of the burden of a tax", x:"Tax incidence depends on elasticity."},
    {t:"tax base", d:"the range of items or persons on which tax is levied", x:"A narrow tax base limits revenue."},
    {t:"tax evasion", d:"the illegal avoidance of tax due", x:"Tax evasion is a criminal offence."},
    {t:"tax avoidance", d:"the lawful arrangement of affairs to reduce tax", x:"Tax avoidance uses legal loopholes."},
    {t:"customs duty", d:"a tax on goods entering or leaving a country", x:"Customs duty is collected at the port."},
    {t:"excise duty", d:"a tax on goods produced within the country", x:"Excise duty is charged on local beer."},
    {t:"recurrent expenditure", d:"regular spending on salaries and running costs", x:"Recurrent expenditure repeats every year."},
    {t:"capital expenditure", d:"spending on long-lasting assets such as roads and schools", x:"Capital expenditure builds infrastructure."},
    {t:"public debt", d:"the total amount owed by government", x:"Public debt must be serviced from revenue."},
    {t:"subsidy", d:"a government payment reducing the cost of a good", x:"A subsidy lowers the price to consumers."},
    {t:"IMF", d:"the International Monetary Fund, which assists with balance of payments problems", x:"The IMF lends to correct payments deficits."},
    {t:"World Bank", d:"an institution providing long-term development finance", x:"The World Bank funds infrastructure projects."},
    {t:"ECOWAS", d:"the Economic Community of West African States", x:"ECOWAS promotes regional integration."}
  ],
  facts:[
    {q:"Define public finance and fiscal policy.", a:"Public finance is the study of how government raises revenue and spends it. Fiscal policy is the deliberate use of taxation and government expenditure to influence the level of activity in the economy."},
    {q:"State four objectives of fiscal policy.", a:"To raise revenue for public services; to redistribute income and reduce inequality; to control inflation or stimulate employment; and to influence the allocation of resources, for example by discouraging harmful goods."},
    {q:"Name five sources of government revenue apart from taxation.", a:"Fees and licences; fines and penalties; rents and royalties from natural resources; profits of state corporations; grants and aid from abroad; and borrowing from domestic and foreign lenders."},
    {q:"Distinguish direct from indirect taxes with two examples of each.", a:"A direct tax is levied on income or wealth and paid by the person on whom it falls, such as income tax and company tax. An indirect tax is levied on goods and services and can be passed on to the consumer, such as sales tax and customs duty."},
    {q:"Distinguish progressive, proportional and regressive taxes.", a:"A progressive tax takes a rising proportion of income as income rises; a proportional tax takes the same proportion from all; a regressive tax takes a larger proportion from lower incomes, as a flat tax on basic food does."},
    {q:"State three advantages and three disadvantages of direct taxes.", a:"Advantages: they can be made progressive and so reduce inequality, the burden is certain and known, and they are economical to collect from formal employees. Disadvantages: they may discourage work and enterprise, they are easy to evade in a largely informal economy, and they are unpopular and politically difficult to raise."},
    {q:"State three advantages and three disadvantages of indirect taxes.", a:"Advantages: they are convenient and paid in small amounts with purchases, difficult to evade, and can discourage harmful consumption. Disadvantages: they are regressive and bear hardest on the poor, they raise prices and can be inflationary, and the yield is uncertain when demand falls."},
    {q:"What determines the incidence of an indirect tax?", a:"The relative elasticity of demand and supply. The more inelastic the demand, the greater the share borne by the consumer; the more elastic the demand, the more the producer must absorb."},
    {q:"Why do governments tax goods with inelastic demand?", a:"Because consumption falls only slightly when the price rises, so revenue is high and predictable, and the tax is difficult for consumers to escape."},
    {q:"Distinguish recurrent from capital expenditure.", a:"Recurrent expenditure is regular spending on salaries, drugs, fuel and maintenance, which repeats each year. Capital expenditure creates long-lasting assets such as roads, schools and hospitals."},
    {q:"State the main role of the IMF, the World Bank and ECOWAS.", a:"The IMF assists members facing balance of payments difficulties and promotes monetary stability. The World Bank provides long-term finance and technical help for development projects. ECOWAS promotes economic integration, free movement and trade among West African states."},
    {q:"State three problems of tax collection in Liberia.", a:"A large informal sector outside the tax net; weak record keeping and administration; and evasion, corruption and a narrow tax base concentrated on a few large taxpayers."}
  ],
  tf:[
    {s:"An indirect tax can be passed on to the consumer.", a:"true", why:"It is levied on goods, so the seller can raise the price."},
    {s:"A regressive tax takes a larger proportion of higher incomes.", a:"false", why:"It takes a larger proportion of lower incomes; a progressive tax does the opposite."},
    {s:"The incidence of a tax depends on elasticity of demand and supply.", a:"true", why:"The more inelastic side of the market bears the greater share."},
    {s:"Tax avoidance is illegal.", a:"false", why:"Avoidance uses lawful means to reduce tax; evasion is the illegal act."},
    {s:"Capital expenditure creates long-lasting assets.", a:"true", why:"Roads, schools and hospitals continue to serve for many years."},
    {s:"The World Bank's main role is short-term balance of payments support.", a:"false", why:"That is the IMF's role; the World Bank provides long-term development finance."},
    {s:"A budget deficit must be financed by borrowing.", a:"true", why:"Spending above revenue requires loans or the running down of reserves."}
  ],
  sort:{ title:"Sort these fiscal items", groups:[
    {name:"Direct taxes", items:["income tax","company tax","property tax","capital gains tax"]},
    {name:"Indirect taxes", items:["sales tax","customs duty","excise duty","value added tax"]},
    {name:"Recurrent expenditure", items:["civil service salaries","drugs for clinics","fuel","maintenance"]},
    {name:"Capital expenditure", items:["road construction","new school buildings","hospital equipment","port development"]},
    {name:"International organisations", items:["IMF","World Bank","ECOWAS","African Development Bank"]}
  ]},
  mapwork:{ title:"Tax incidence and elasticity", caption:"Complete the table by stating who bears most of the tax in each case.", items:[
    {p:"Demand perfectly inelastic", f:"The consumer bears the whole tax; price rises by the full amount"},
    {p:"Demand very inelastic, e.g. fuel", f:"Consumer bears most of the burden; quantity falls only slightly"},
    {p:"Demand and supply equally elastic", f:"The burden is shared roughly equally between consumer and producer"},
    {p:"Demand very elastic, e.g. a luxury", f:"The producer bears most of it, since raising price would lose most sales"},
    {p:"Demand perfectly elastic", f:"The producer bears the whole tax; no price rise is possible"},
    {p:"Supply very inelastic", f:"The producer bears most of it, being unable to reduce output"},
    {p:"Policy implication", f:"Governments tax inelastic goods for reliable revenue, but the burden falls on consumers"}
  ]},
  casestudy:{ title:"A tax on two goods",
    text:"A government imposes a tax of 20 Liberian dollars per unit on two products. The first is kerosene, used for lighting and cooking by most households, for which there is no easy substitute; after the tax, the market price rises from 100 to 119 dollars and sales fall from 10 000 to 9 700 units a week. The second is imported soft drinks, for which many local substitutes exist; the price rises from 100 to only 105 dollars and sales fall from 8 000 to 5 600 units. Revenue from the kerosene tax proves large and steady, while revenue from the soft drink tax falls short of the estimate. A citizens' group protests that the kerosene tax hurts the poorest households most.",
    questions:[
      {q:"How much of the kerosene tax is borne by the consumer and how much by the producer?", a:"The price rose 19 dollars of the 20 dollar tax, so consumers bear 19 and producers only 1 dollar."},
      {q:"How much of the soft drink tax is borne by the consumer?", a:"The price rose only 5 dollars, so consumers bear 5 and producers absorb 15 dollars."},
      {q:"Explain the difference in terms of elasticity.", a:"Kerosene has inelastic demand with no substitute, so the tax can be passed on almost entirely. Soft drinks have elastic demand with many substitutes, so producers must absorb most of the tax to keep sales."},
      {q:"Calculate the weekly revenue from each tax.", a:"Kerosene: 20 \u00d7 9 700 = 194 000 dollars. Soft drinks: 20 \u00d7 5 600 = 112 000 dollars."},
      {q:"Is the citizens' group right that the kerosene tax hurts the poorest most? Explain.", a:"Yes. It is regressive: kerosene takes a much larger share of a poor household's income than a rich one's, and the poor cannot avoid it because there is no substitute."}
    ]},
  project:{ title:"Local taxation enquiry",
    brief:"Investigate the taxes paid by a real business and the services they fund.",
    steps:[
      "With permission, visit a local business that pays tax.",
      "Record the types of tax it pays and, if the owner is willing, the approximate amounts in a year.",
      "Classify each tax as direct or indirect.",
      "Ask the owner what public services the business most depends on.",
      "Report whether the owner considers the taxes fair, and give your own reasoned assessment."
    ],
    criteria:["A real business visited with permission","Taxes correctly identified and classified","Amounts or proportions recorded where possible","Services identified","A balanced and reasoned assessment"]},
  worked:[
    {q:"Income is L$600 000 and the tax rate 15%. Calculate the tax due.", steps:["0.15 \u00d7 600 000"], a:"L$90 000"},
    {q:"A progressive system charges 0% on the first L$200 000 and 20% above. Find the tax on L$600 000.", steps:["Taxable = 600 000 \u2212 200 000 = 400 000","0.20 \u00d7 400 000"], a:"L$80 000"},
    {q:"Calculate the average rate of tax in that case.", steps:["(80 000 \u00f7 600 000) \u00d7 100"], a:"13.3%"},
    {q:"A tax of L$20 per unit raises price from L$100 to L$119. State the consumer's share.", steps:["Price rise = 19","Tax = 20"], a:"Consumer bears L$19, producer L$1"},
    {q:"Sales after tax are 9 700 units with a tax of L$20 each. Calculate the revenue raised.", steps:["20 \u00d7 9 700"], a:"L$194 000"},
    {q:"Government revenue is L$85bn and expenditure L$102bn. Calculate the budget deficit.", steps:["102 \u2212 85"], a:"A deficit of L$17 billion"},
    {q:"Express that deficit as a percentage of expenditure.", steps:["(17 \u00f7 102) \u00d7 100"], a:"16.7%"},
    {q:"A 10% sales tax is added to a bill of L$4 500. Calculate the total payable.", steps:["Tax = 0.10 \u00d7 4 500 = 450","4 500 + 450"], a:"L$4 950"}
  ],
  apply:[
    {q:"Why is a tax on basic food regressive even though everyone pays the same rate?", a:"Poor households spend a far larger share of their income on food, so the same rate takes a much bigger proportion of their income than of a rich household's."},
    {q:"Explain why widening the tax base may be better than raising tax rates in Liberia.", a:"Much activity is informal and untaxed, so a few taxpayers bear the whole burden. Bringing more into the net raises revenue without discouraging those already compliant, and is fairer."},
    {q:"How can fiscal policy be used to reduce inflation?", a:"By reducing government spending and raising taxes, which lowers aggregate demand and eases the upward pressure on prices, though at some cost to output and employment."},
    {q:"A government borrows heavily from abroad to build roads. Discuss one benefit and one risk.", a:"Benefit: roads raise productivity and growth for decades, and the loan spreads the cost over the years that enjoy them. Risk: repayment requires foreign exchange, so if export earnings fall the debt service can crowd out spending on health and education."},
    {q:"Why might a government subsidise fertiliser rather than simply cutting taxes on farmers?", a:"Most small farmers pay little tax anyway, so a tax cut would not reach them. A fertiliser subsidy lowers their actual cost, raises yields directly, and targets those who genuinely farm."}
  ],
  activities:[
    "Group discussion on the meaning of public finance and its objectives",
    "Assign small groups to visit business institutions that pay taxes, examine the types and amounts paid, and report to the class",
    "Pair discussion of elasticity of demand and supply in relation to taxation",
    "Illustrate graphically the incidence of taxation under different elasticities",
    "Research the roles of the IMF, World Bank, ECOWAS and the African Development Bank",
    "Calculate tax liabilities under progressive and proportional systems"
  ],
  materials:[
    "Primary text: Stanlake's Economics by S. J. Grant, 8th edition",
    "Essential Economics for Senior Secondary Schools (Cole Esan Ande), 5th edition, 2017",
    "Comprehensive Economics for Senior Secondary School (Johnson U. Anyaele, 1997)",
    "Liberian national budget documents",
    "Graph paper and calculators"
  ],
  assessment:["Presentation, individual and group","Written assignment","Quiz","Taxation enquiry report","Written test"]
},
{
  grade:12, period:"VI", sem:"Two", icon:"🤝",
  title:"Economic Integration and Natural Resources",
  subtitle:"The rationale and stages of integration, its advantages and problems, and Liberia's natural resources",
  outcomes:[
    "Learners are able to appreciate the value of regional cooperation and trade"
  ],
  objectives:[
    "Determine the rationale for economic integration in the sub-region",
    "Discuss and analyse the concept of economic integration and its impact on regional trade",
    "Catalogue the advantages and disadvantages of economic integration",
    "Discuss the stages of economic integration",
    "Compare the natural resources of Liberia with those of countries in the sub-region"
  ],
  note:"<b>Economic integration</b> is the joining of the economies of separate states through the reduction of trade barriers. Its stages rise in depth: <b>preferential trading area → free trade area → customs union → common market → economic and monetary union → fiscal harmonisation</b>. Liberia's natural resources include <b>iron ore, gold, diamonds, rubber, timber, fisheries and abundant water</b>.",
  study:[
    /* ---- course text: Semester Two, Period VI — Economic Integration and Natural Resources (guide pp. 34-35) ---- */
    {k:"h3", t:"Economic Integration and its Key Concepts"},
    {k:"p", t:"**Economic integration** is the coming together of neighbouring economies to trade and move resources freely, so that together they achieve what none could alone. Its key concepts: **trade benefits** as goods move to where they are most wanted; **employment** as production and markets expand; **political cooperation** that keeps the peace; **market expansion** beyond the small national market; **technology sharing** across borders; and **cross-border investment flows** as capital moves to opportunity in the grouping."},
    {k:"rule"},
    {k:"h3", t:"The Stages of Economic Integration"},
    {k:"num", items:[
      "**Preferential trading area** — members lower tariffs on one another's goods below the rate charged on outsiders",
      "**Free trade area** — members remove tariffs and quotas among themselves, but each keeps its own tariff against the outside world",
      "**Customs union** — free trade within, plus one common external tariff for all members",
      "**Common market** — the customs union plus free movement of labour, capital and enterprise",
      "**Economic and monetary union** — one economic policy and one currency",
      "**Fiscal policy harmonization** — members align taxes and public spending to hold the union together"]},
    {k:"rule"},
    {k:"h3", t:"Advantages and Disadvantages of Integration"},
    {k:"p", t:"Advantages: a wider market and economies of scale, more competition and efficiency, stronger bargaining as a bloc, freer movement of people and capital, and shared projects no single state could fund. Disadvantages: loss of national control over policy and tariff, uneven gains that favour the strongest members, the cost of adjusting industries to bloc competition, and the strain of one rule for economies at different stages. Determine whether integration has impacted the economy of Liberia — within ECOWAS and the Mano River Union — and analyse the advantages and disadvantages of regional trade and cooperation."},
    {k:"rule"},
    {k:"h3", t:"Natural Resources of Liberia and the Sub-Region"},
    {k:"p", t:"Compare Liberia's natural resources with its neighbours'. Liberia holds **iron ore** in Nimba and Bong, **rubber** growing across the counties, **timber** in the rainforest, **gold and diamonds**, **palm oil**, and fertile land and fishing waters. Guinea adds bauxite and iron; Sierra Leone diamonds and rutile; Côte d'Ivoire cocoa, coffee and oil; Ghana gold and cocoa; Nigeria oil and gas. Map each, and ask how far each country has turned resource into development — and what stands in the way."},
    {k:"h3", t:"The Key Concepts of Economic Integration"},
    {k:"p", t:"**Economic integration** is the coming together of neighbouring economies to remove the barriers between them, so that goods, services, capital and people move freely and together they achieve what none could alone. Its **key concepts** are the gains it is meant to bring: **trade benefits**, as each member specialises and goods move to where they are most wanted; **market expansion**, since a firm that could sell to four million Liberians can sell to three hundred million West Africans, and only at that scale can some industries exist; **employment**, as production and investment expand across the wider market; **technology sharing**, as techniques, training and know-how cross the border; **cross-border investment flows**, as capital moves to the opportunity within the grouping; **stronger bargaining**, since a bloc negotiates with the outside world on better terms than one small state; and **political cooperation**, since countries that trade together have a reason to keep the peace — the argument on which the European integration itself began."},
    {k:"rule"},
    {k:"h3", t:"The Stages of Integration, in Order"},
    {k:"num", items:[
      "**Preferential trading area** — members lower tariffs on one another's goods below the rate charged on outsiders, but do not remove them. The loosest form.",
      "**Free trade area** — members remove tariffs and quotas **among themselves**, but **each keeps its own tariff** against the outside world. The danger is that outsiders route their goods through the member with the lowest tariff, so rules of origin are needed.",
      "**Customs union** — free trade within, plus **one common external tariff** on all imports from outside, so the members act as one trading unit. This is the stage at which a real bloc exists.",
      "**Common market** — the customs union plus the **free movement of labour, capital and enterprise**, so a worker or an investor may go where the return is best.",
      "**Economic and monetary union** — one economic policy, coordinated fiscal and monetary policy, and **one currency** under one central bank.",
      "**Complete economic integration (fiscal harmonization)** — members align taxation, public spending and economic policy under a common authority; the last stage, and the one few groupings reach."]},
    {k:"p", t:"The order must be recited correctly — a candidate who places the common market before the customs union loses the mark. **ECOWAS** was established by the **Treaty of Lagos in 1975** with the aim of a common market, and has moved through a free trade area toward a customs union with a **common external tariff**, while its protocol on the **free movement of persons, residence and establishment** allows a citizen of a member state to enter and work without a visa. The **Mano River Union**, founded in **1973** by Liberia and Sierra Leone and later joined by Guinea and Côte d'Ivoire, is a narrower grouping named for the river that rises in the highlands shared by its members, and works mainly on border cooperation, joint infrastructure and the movement of people."},
    {k:"rule"},
    {k:"h3", t:"Advantages and Disadvantages, Weighed"},
    {k:"p", t:"**Advantages:** a **wider market**, so industries can reach the scale at which cost per unit falls; **economies of scale** and **specialisation** according to comparative advantage, so total output rises; **more competition**, which drives out the inefficient firm and lowers the price to the consumer; **freer movement** of labour to where work is, and of capital to where the return is; **shared infrastructure** — a road, a bridge, a power line, a river scheme — that no single member could fund; **stronger bargaining** with the outside world and with the multinational company; **the transfer of technology and skill**; and **political stability**, since members have an interest in one another's peace. **Disadvantages:** **loss of national sovereignty**, as tariff, monetary and trade policy pass to the bloc; **loss of tariff revenue**, which for a small state relying on customs duties is a serious loss that must be replaced; **uneven gains**, since industry tends to concentrate where the infrastructure and the skilled labour already are, so the strongest member gains most and the weaker becomes a market for its goods; **the cost of adjustment**, as firms that cannot compete close and their workers lose their jobs; **trade diversion**, where cheap imports from an efficient outsider are replaced by dearer goods from a member merely because the tariff favours it, which makes the consumer worse off; **the difficulty of one rule** for economies at very different stages of development; and **the risk** that political conflict between members stops the whole arrangement — which is what the Liberian civil war did to the Mano River Union for a decade."},
    {k:"p", t:"**Has integration affected Liberia?** Answer on both sides. **Yes:** the free movement protocol lets Liberians work and trade across West Africa, and many do; the common external tariff shapes what Liberia charges on imports; regional infrastructure — the road and power links and the river basin schemes — is planned jointly; and the regional market gives Liberian producers a market far larger than the home one. **But the gains have been limited:** Liberia's exports remain raw materials, its imports remain manufactures, and the wars interrupted both the Mano River Union and Liberia's own participation for years; the tariff revenue foregone is not fully compensated; and the industries that might have served the regional market were never built. The conclusion the examiner wants is a measured one — integration has opened a door that Liberia has not yet walked through, and whether it benefits depends on whether Liberian producers can compete in the market it opens."},
    {k:"rule"},
    {k:"h3", t:"The Natural Resources of Liberia and the Sub-Region"},
    {k:"table", head:["Country","Chief natural resources"], rows:[
     ["Liberia","Iron ore at Nimba, Bong and Wologisi; rubber; timber from the rainforest; gold and diamonds; oil palm; fertile land and abundant rainfall; rich fishing waters; hydroelectric potential on the St Paul and other rivers"],
     ["Guinea","Bauxite — among the largest reserves in the world — iron ore at Simandou, gold, diamonds, and great hydroelectric potential"],
     ["Sierra Leone","Diamonds, rutile, bauxite, iron ore, gold and rich fisheries"],
     ["Cote d'Ivoire","Cocoa — the world's largest producer — coffee, oil palm, timber, petroleum and natural gas"],
     ["Ghana","Gold, cocoa, timber, petroleum and natural gas, bauxite and manganese"],
     ["Nigeria","Petroleum and natural gas above all, with tin, columbite, coal, cocoa, groundnuts and palm produce"]]},
    {k:"p", t:"Compare them as the question asks and then **draw the conclusion**. All are rich in resources; none is rich in the **processing** of them. Each exports the raw material and imports the manufactured article — Liberia exports rubber and imports tyres, exports timber and imports furniture, exports iron ore and imports steel. The result is the **terms of trade** problem of Unit 16, the **low value added** retained at home, and the **vulnerability** of an economy whose earnings rise and fall with a world price it cannot control. The **remedy** is the one the paper is leading to: process the resource at home, so the value added stays; diversify, so no single price decides the national income; and use the earnings on the education, health and infrastructure that make further development possible rather than on consumption that ends when the price falls. Add the warning of the **resource curse** — that countries rich in a single exportable resource often grow more slowly and govern worse than poorer neighbours, because the revenue comes without taxation and so without accountability, and because the easy money crowds out every other industry."},
    {k:"rule"},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Placing the **common market before the customs union**. The order is preferential area, free trade area, customs union, common market, economic and monetary union.",
      "Confusing a **free trade area with a customs union**. In a free trade area each member keeps its own external tariff; only in a customs union is the external tariff common.",
      "Forgetting **trade diversion** among the disadvantages — where a member's dearer goods replace a cheaper outsider's, the consumer loses.",
      "Giving the **date of ECOWAS wrongly**. The Treaty of Lagos was signed in **1975**; the Mano River Union dates from **1973**.",
      "Listing Liberia's resources **without the comparison**. The question asks for the comparison with the neighbours and the conclusion that follows.",
      "Treating **resource wealth as development**. The resource is an asset only if it is processed at home, diversified against, and its earnings invested."]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Define economic integration** and explain its key concepts — market expansion, trade benefits, employment, technology, investment, bargaining and political cooperation",
      "**List the stages of economic integration in order**, from the preferential trading area to economic and monetary union, with what each adds",
      "**Distinguish a free trade area from a customs union and from a common market** — the exact difference is the mark",
      "**Explain the advantages and disadvantages of integration**, including trade diversion and the uneven distribution of the gains",
      "**Determine whether integration has benefited Liberia**, within ECOWAS and the Mano River Union, with evidence on both sides and a conclusion",
      "**Compare the natural resources of Liberia with those of its neighbours** and draw the conclusion about exporting raw materials and importing manufactures",
      "**Explain the resource curse** and the policies that would let a resource-rich country develop"
    ]}

  ],

  focus:[
    "Definition and key concepts of economic integration",
    "Trade benefits, employment, political cooperation, market expansion, technology sharing and investment flows",
    "Stages of economic integration",
    "Advantages and disadvantages of economic integration",
    "ECOWAS and the Mano River Union",
    "Natural resources of Liberia and comparison with the sub-region",
    "Sustainable management of natural resources"
  ],
  terms:[
    {t:"economic integration", d:"the joining of separate economies by reducing trade barriers", x:"Economic integration widens the market."},
    {t:"preferential trading area", d:"an arrangement giving members reduced tariffs on some goods", x:"A preferential trading area is the loosest form."},
    {t:"free trade area", d:"members abolish tariffs among themselves but keep their own external tariffs", x:"A free trade area needs rules of origin."},
    {t:"customs union", d:"a free trade area with a common external tariff", x:"A customs union speaks with one voice on tariffs."},
    {t:"common market", d:"a customs union that also allows free movement of labour and capital", x:"A common market frees the factors of production."},
    {t:"economic union", d:"a common market with harmonised economic policies", x:"An economic union coordinates fiscal policy."},
    {t:"monetary union", d:"members share a single currency or fixed exchange rates", x:"A monetary union removes currency risk."},
    {t:"fiscal harmonisation", d:"aligning taxes and public spending rules among members", x:"Fiscal harmonisation prevents unfair competition."},
    {t:"ECOWAS", d:"the Economic Community of West African States", x:"ECOWAS was formed in 1975."},
    {t:"Mano River Union", d:"the union of Liberia, Sierra Leone, Guinea and Cote d'Ivoire", x:"The Mano River Union promotes border cooperation."},
    {t:"trade creation", d:"new trade generated when barriers fall between members", x:"Trade creation raises welfare."},
    {t:"trade diversion", d:"trade shifted from a cheaper outsider to a dearer member", x:"Trade diversion can reduce welfare."},
    {t:"common external tariff", d:"a single tariff applied by all members to non-members", x:"A common external tariff defines a customs union."},
    {t:"free movement of persons", d:"the right of citizens to live and work in any member state", x:"Free movement of persons is an ECOWAS goal."},
    {t:"natural resources", d:"materials occurring in nature that are economically useful", x:"Iron ore is a natural resource."},
    {t:"renewable resource", d:"a resource that can replenish itself naturally", x:"Timber is renewable if replanted."},
    {t:"non-renewable resource", d:"a resource that cannot be replaced once used", x:"Iron ore is non-renewable."},
    {t:"resource curse", d:"the tendency of resource-rich countries to develop poorly", x:"The resource curse afflicts some mineral exporters."},
    {t:"value addition", d:"processing raw materials before export", x:"Value addition raises export earnings."},
    {t:"sustainable use", d:"using resources at a rate that does not exhaust them", x:"Sustainable use protects future generations."},
    {t:"concession", d:"a right granted to a company to exploit a resource", x:"A mining concession runs for many years."}
  ],
  facts:[
    {q:"Define economic integration and state its main purpose.", a:"The joining together of the economies of separate states by removing or reducing barriers to trade and to the movement of factors. Its purpose is to widen the market, raise efficiency through specialisation and strengthen the members' collective position."},
    {q:"State the stages of economic integration in order of depth.", a:"Preferential trading area, free trade area, customs union, common market, economic union with monetary union, and full fiscal harmonisation."},
    {q:"Distinguish a free trade area from a customs union.", a:"In a free trade area members abolish tariffs among themselves but each keeps its own tariff against outsiders. A customs union adds a common external tariff applied by all members alike."},
    {q:"What additional freedom does a common market provide beyond a customs union?", a:"Free movement of the factors of production — labour and capital — so citizens may live, work and invest freely in any member state."},
    {q:"State five advantages of economic integration.", a:"A larger market permitting economies of scale; increased trade and competition lowering prices; free movement of labour and capital; greater bargaining power in world negotiations; and closer political cooperation reducing the risk of conflict."},
    {q:"State four disadvantages of economic integration.", a:"Loss of some national sovereignty over policy; loss of tariff revenue which matters greatly to poor states; trade diversion from cheaper outside suppliers to dearer members; and the risk that benefits concentrate in the more developed members."},
    {q:"Distinguish trade creation from trade diversion.", a:"Trade creation is new trade arising because barriers between members fall, which raises welfare. Trade diversion is trade shifted away from a cheaper non-member to a dearer member because of the tariff, which can reduce welfare."},
    {q:"Name four objectives of ECOWAS.", a:"To promote trade and economic cooperation among member states; to establish free movement of persons, goods and capital; to harmonise economic and monetary policy; and to maintain peace and stability in the sub-region."},
    {q:"Name six natural resources of Liberia.", a:"Iron ore, gold, diamonds, rubber, timber and forest products, fisheries, fertile agricultural land and abundant fresh water; offshore petroleum has also been explored."},
    {q:"State four problems in the management of Liberia's natural resources.", a:"Export of raw materials with little value added locally; environmental damage from mining and logging; weak regulation and revenue leakage from concessions; and over-dependence on a few commodities whose world prices fluctuate."},
    {q:"What is the resource curse and how can it be avoided?", a:"The tendency for resource-rich countries to grow slowly, because the wealth invites corruption, distorts the exchange rate and discourages other sectors. It is avoided by transparent revenue management, saving part of the income, and investing in education, infrastructure and diversification."},
    {q:"Compare Liberia's resources with those of its neighbours.", a:"Liberia shares iron ore, gold, diamonds and forest with Sierra Leone and Guinea, which also holds vast bauxite. Cote d'Ivoire and Ghana lead in cocoa, while Nigeria dominates in petroleum. The similarity of Liberia's exports to its neighbours' limits regional trade and increases competition in the same world markets."}
  ],
  tf:[
    {s:"A customs union has a common external tariff.", a:"true", why:"That is precisely what distinguishes it from a free trade area."},
    {s:"A common market allows free movement of labour and capital.", a:"true", why:"It extends integration beyond goods to the factors of production."},
    {s:"Trade diversion increases economic welfare.", a:"false", why:"It shifts trade from a cheaper outside supplier to a dearer member, which reduces welfare."},
    {s:"Iron ore is a renewable resource.", a:"false", why:"It is non-renewable; once extracted it cannot be replaced."},
    {s:"Economic integration involves some loss of national sovereignty.", a:"true", why:"Members must accept common rules and cannot set policy entirely alone."},
    {s:"Exporting raw iron ore earns more than exporting processed steel.", a:"false", why:"Processing adds value, so the processed product earns considerably more per tonne."},
    {s:"ECOWAS aims to establish free movement of persons in West Africa.", a:"true", why:"It is one of the community's founding objectives."}
  ],
  sort:{ title:"Sort these correctly", groups:[
    {name:"Stages of integration in order", items:["preferential trading area","free trade area","customs union","common market","economic and monetary union"]},
    {name:"Advantages of integration", items:["larger market","economies of scale","free movement of labour","greater bargaining power"]},
    {name:"Disadvantages of integration", items:["loss of sovereignty","loss of tariff revenue","trade diversion","unequal distribution of gains"]},
    {name:"Liberia's non-renewable resources", items:["iron ore","gold","diamonds","petroleum"]},
    {name:"Liberia's renewable resources", items:["timber","fisheries","water","agricultural land"]}
  ]},
  mapwork:{ title:"Resources of the sub-region", caption:"Complete the table by naming the leading resources of each country.", items:[
    {p:"Liberia", f:"Iron ore, gold, diamonds, rubber, timber, fisheries and abundant fresh water"},
    {p:"Sierra Leone", f:"Diamonds, rutile, bauxite, iron ore and fisheries"},
    {p:"Guinea", f:"Bauxite in vast quantity, iron ore, gold, diamonds and hydroelectric potential"},
    {p:"Cote d'Ivoire", f:"Cocoa, coffee, palm oil, timber, gold and offshore petroleum"},
    {p:"Ghana", f:"Gold, cocoa, bauxite, manganese, timber and petroleum"},
    {p:"Nigeria", f:"Petroleum and natural gas, tin, columbite and extensive agricultural land"},
    {p:"Implication for trade", f:"Similar exports limit trade among neighbours and place them in competition in the same world markets"}
  ]},
  casestudy:{ title:"Two shipments of iron ore",
    text:"A Liberian concession exports 1 000 000 tonnes of raw iron ore in a year at 60 US dollars a tonne. Almost all the ore leaves through the port unprocessed; the operation employs 900 people, mostly in extraction and transport, and pays royalties and taxes to government. In a neighbouring country a similar quantity of ore is processed into steel billet before export and sells at 420 dollars a tonne. That operation employs 5 200 people, supports engineering workshops and a technical college, and supplies steel rods to the local construction industry, reducing imports. A Liberian minister argues that building a processing plant would take years and enormous capital, and that the country needs the export revenue now.",
    questions:[
      {q:"Calculate the export earnings from each shipment.", a:"Liberia: 1 000 000 \u00d7 60 = 60 million dollars. The neighbour: 1 000 000 \u00d7 420 = 420 million dollars."},
      {q:"Calculate the value added by processing, and express it as a multiple of the raw value.", a:"420m \u2212 60m = 360 million dollars added, which is seven times the raw export value."},
      {q:"State three benefits the neighbour gains beyond the extra export earnings.", a:"Far more employment at 5 200 against 900 jobs; skills and technical training through the workshops and college; and reduced steel imports for its own construction industry."},
      {q:"Is the minister's argument entirely without merit? Discuss.", a:"It has some force: processing plants need very large capital, reliable power and skilled labour, none of which appears quickly, and current revenue funds present needs. But the argument taken alone means the country exports its value permanently and never begins the transition."},
      {q:"Suggest one realistic intermediate step Liberia could take.", a:"Begin with partial processing such as pelletising or beneficiation, which requires less capital and power than full steel making but still raises the price per tonne and builds skills toward fuller processing later."}
    ]},
  project:{ title:"Natural resources of my county",
    brief:"Map and evaluate the natural resources of your county and how they are used.",
    steps:[
      "List the natural resources found in your county.",
      "Classify each as renewable or non-renewable.",
      "For each, record who exploits it and whether it is processed locally or exported raw.",
      "Identify one resource that is being used unsustainably and explain the evidence.",
      "Propose one way a resource could yield more benefit to local people."
    ],
    criteria:["Resources accurately listed","Correct classification as renewable or non-renewable","Users and processing correctly recorded","Evidence given for unsustainable use","A realistic proposal for greater local benefit"]},
  worked:[
    {q:"Raw ore sells at US$60 a tonne and processed steel at US$420. Calculate the value added per tonne.", steps:["420 \u2212 60"], a:"US$360 per tonne"},
    {q:"Express the processed price as a multiple of the raw price.", steps:["420 \u00f7 60"], a:"7 times"},
    {q:"Calculate the export earnings from 1 000 000 tonnes of raw ore at US$60.", steps:["1 000 000 \u00d7 60"], a:"US$60 million"},
    {q:"A tariff of 15% is removed on imports worth US$40m from a member state. Calculate the duty forgone.", steps:["0.15 \u00d7 40 000 000"], a:"US$6 million"},
    {q:"Intra-regional trade rises from US$120m to US$186m. Calculate the percentage increase.", steps:["Increase = 66","(66 \u00f7 120) \u00d7 100"], a:"55%"},
    {q:"A concession pays 4.5% royalty on exports of US$60m. Calculate the royalty due.", steps:["0.045 \u00d7 60 000 000"], a:"US$2.7 million"},
    {q:"Employment rises from 900 to 5 200 with processing. Calculate the increase as a multiple.", steps:["5 200 \u00f7 900"], a:"About 5.8 times"},
    {q:"A forest of 60 000 hectares loses 1 800 hectares a year. At that rate, how long until it is exhausted?", steps:["60 000 \u00f7 1 800"], a:"About 33 years"}
  ],
  apply:[
    {q:"Why does the similarity of exports among West African countries limit regional trade?", a:"Countries trade most when they produce different things. Liberia, Sierra Leone and Guinea all export minerals and few manufactures, so they have little to sell each other and compete in the same world markets instead."},
    {q:"Explain why a poor country may resist joining a customs union despite the benefits.", a:"Tariff revenue is often a large share of its budget and would be lost. It may also fear that industry will concentrate in the more developed members, leaving it supplying only raw materials."},
    {q:"How would free movement of persons under ECOWAS benefit a Liberian graduate?", a:"He could seek work anywhere in the sub-region without immigration barriers, gaining experience and higher earnings, and could later return with skills and capital."},
    {q:"Explain the resource curse and how Liberia might avoid it.", a:"Resource wealth can invite corruption, raise the exchange rate so other exports become uncompetitive, and let government neglect taxation and accountability. It is avoided by transparent revenue management, saving part of the income for the future, and deliberate investment in education and other sectors."},
    {q:"A logging company clears 1 800 hectares a year without replanting. Discuss two consequences.", a:"The forest is exhausted within about three decades, destroying the industry itself and the livelihoods depending on it; and clearance causes soil erosion, loss of biodiversity and disruption of rainfall and rivers."}
  ],
  activities:[
    "Group research and discussion of economic integration concepts: trade benefits, employment, political cooperation, market expansion, technology sharing and investment flows",
    "Chart the stages of economic integration and identify examples of each",
    "Debate the advantages and disadvantages of economic integration for Liberia",
    "Compare the natural resources of Liberia with those of countries in the sub-region",
    "Map the natural resources of the local county and assess their use",
    "Research the objectives and achievements of ECOWAS and the Mano River Union"
  ],
  materials:[
    "Primary text: Stanlake's Economics by S. J. Grant, 8th edition",
    "Essential Economics for Senior Secondary Schools (Cole Esan Ande), 5th edition, 2017",
    "Comprehensive Economics for Senior Secondary School (Johnson U. Anyaele, 1997)",
    "Maps of West Africa and its resources",
    "ECOWAS documents and trade statistics"
  ],
  assessment:["Presentation, individual and group","Written assignment","Quiz","Resource mapping project","Written test"]
}

];
