/* WASSCE (WAEC) — ECONOMICS course data: 13 units covering all 25 topics of
   the detailed syllabus, grouped into thematic units. */
window.WA_ec = {
  id: "ec",
  name: "Economics",
  preamble: "The WASSCE Economics syllabus (detailed syllabus) is organized into 25 topics, from the definition and scope of economics to the development of major natural resources in West Africa. Candidates are expected to demonstrate understanding of economic concepts, the ability to apply them to West African (and especially Liberian) situations, and the skill of using the basic tools of economic analysis (tables, graphs, charts and simple statistics).",
  aims: [
    "understand the basic concepts and principles of economics;",
    "apply economic concepts to the analysis of real-world (West African and Liberian) problems;",
    "use the basic tools of economic analysis — tables, graphs, charts and simple statistical measures;",
    "understand the structure and performance of the economy and the role of government, the private sector and international organizations."
  ],
  papers: [
    { n: "Paper 1", d: "Fifty multiple-choice objective questions drawn from the syllabus. Candidates answer ALL within 1 hour for 50 marks." },
    { n: "Paper 2", d: "A 2-hour structured essay paper of 100 marks. Section A: ten short structured questions — answer ALL for 25 marks. Section B: four structured questions — answer THREE, each carrying 25 marks." }
  ],
  units: [
  /* =============== E1 · SCOPE, FACTORS & ECONOMIC SYSTEMS =============== */
  {
    grade: 12, sem: "One", icon: "🌍", period: "E1",
    title: "Scope of Economics, Factors of Production & Economic Systems",
    subtitle: "Scarcity and choice · opportunity cost · production possibilities curve · the four factors of production · capitalism, socialism, mixed economy",
    note: "Topics 1–3: the definition and scope of economics, the factors of production, and the types and basic features of economic systems.",
    objectives: [
      "Explain scarcity and choice, the scale of preference, opportunity cost and the production possibility curve",
      "Describe economic activities (production, distribution, consumption) and their classification into primary, secondary and tertiary sectors with their relative contributions",
      "Define the four factors of production (land, labour, capital, entrepreneurship) and state their meaning, characteristics and importance",
      "Compare capitalism, socialism and the mixed economy: basic features, advantages and disadvantages, and the economic problems each solves"
    ],
    terms: [
      { t: "Economics", d: "The study of how societies allocate scarce resources among competing uses (the study of human behaviour in relation to scarce resources with alternative uses).", x: "Choosing between defence and education spending" },
      { t: "Scarcity", d: "The unlimited human wants versus the limited resources available to satisfy them — the fundamental economic problem.", x: "Land, labour and capital are limited" },
      { t: "Scale of preference", d: "A list of a consumer's wants arranged in order of importance/desirability.", x: "Food ranked above entertainment" },
      { t: "Opportunity cost", d: "The value of the next best alternative forgone when a choice is made.", x: "Building a hospital means forgoing a stadium" },
      { t: "Production possibility curve (PPC)", d: "A curve showing the maximum combinations of two goods an economy can produce with its resources; points inside are inefficient, outside are unattainable.", x: "A trade-off between guns and butter" },
      { t: "Primary sector", d: "Economic activities that draw directly from nature — agriculture, mining, fishing, forestry.", x: "Rice farming, rubber tapping" },
      { t: "Secondary sector", d: "Manufacturing and construction — converting raw materials into finished goods.", x: "A shoe factory, building construction" },
      { t: "Tertiary sector", d: "Services — trade, transport, banking, education, health.", x: "A bank, a school" },
      { t: "Land (factor)", d: "All natural resources (gifts of nature) used in production; its reward is rent.", x: "Soil, minerals, rivers" },
      { t: "Labour (factor)", d: "All human effort (physical and mental) used in production; its reward is wages/salary.", x: "A teacher, a farmhand" },
      { t: "Capital (factor)", d: "Man-made assets used to produce other goods (machines, tools, buildings, money); its reward is interest.", x: "A tractor, a loom" },
      { t: "Entrepreneurship (factor)", d: "The organizing ability that combines the other factors, takes risks and innovates; its reward is profit.", x: "A business owner" },
      { t: "Capitalism", d: "An economic system based on private ownership of the means of production and allocation by the price mechanism.", x: "Free-market economies" },
      { t: "Socialism", d: "An economic system based on public/collective ownership and allocation by central planning.", x: "State-owned enterprises" },
      { t: "Mixed economy", d: "A system with both private and public ownership — a combination of market and planning.", x: "Most West African economies, including Liberia" }
    ],
    tf: [
      { s: "Opportunity cost is the value of the best alternative forgone.", a: "True", why: "Scarcity and choice, scale of preference, opportunity cost." },
      { s: "The secondary sector includes mining and agriculture.", a: "False", why: "Mining and agriculture are primary-sector activities; the secondary sector is manufacturing and construction." },
      { s: "A mixed economy combines private and public ownership of the means of production.", a: "True", why: "Types — capitalism, socialism and mixed economy." }
    ],
    mcq: [
      { q: "The fundamental problem of economics is:", o: ["too much money", "scarcity of resources relative to unlimited wants", "unemployment only", "inflation only"], a: 1, why: "Scarcity and choice — the central economic problem." },
      { q: "The opportunity cost of a decision is:", o: ["the money spent", "the best alternative given up", "the total cost", "zero"], a: 1, why: "Opportunity cost — the next best alternative forgone." },
      { q: "A point INSIDE the production possibility curve indicates:", o: ["maximum efficiency", "under-utilization of resources", "unattainable production", "economic growth"], a: 1, why: "Inside the curve — resources are idle/under-utilized." },
      { q: "The reward for entrepreneurship is:", o: ["rent", "wages", "interest", "profit"], a: 3, why: "Entrepreneurship → profit; land → rent; labour → wages; capital → interest." },
      { q: "Banking and teaching belong to the:", o: ["primary sector", "secondary sector", "tertiary sector", "quaternary sector only"], a: 2, why: "Services — the tertiary sector." },
      { q: "An economic system based on private ownership and the price mechanism is:", o: ["socialism", "capitalism", "communism", "a command economy"], a: 1, why: "Capitalism — private ownership, market allocation." },
      { q: "Most West African economies, including Liberia, are best described as:", o: ["pure capitalism", "pure socialism", "mixed economies", "feudal economies"], a: 2, why: "Mixed economy — both private and public sectors operate." }
    ],
    essay: [
      { q: "Define economics and explain, with a diagram, how scarcity, choice, the scale of preference and opportunity cost are related. Illustrate with a production possibility curve.", marks: 12, outline: [
        "Economics — the study of how societies allocate scarce resources among competing (alternative) uses",
        "Scarcity — resources are limited, wants are unlimited → choice is necessary",
        "Scale of preference — ranking of wants by importance; choice is made from the top of the scale",
        "Opportunity cost — the value of the next best alternative forgone when a choice is made",
        "PPC diagram: axes = two goods; the curve shows the trade-off; a point on the curve = efficient (full employment); inside = under-utilization; outside = unattainable; movement along the curve = opportunity cost (producing more of one good means less of the other)"
      ] },
      { q: "Define the four factors of production, stating for each: (a) its meaning, (b) one characteristic, and (c) the reward it earns. Give one example of each.", marks: 10, outline: [
        "Land — natural resources (soil, minerals, water); fixed in supply; reward = rent; e.g. farmland",
        "Labour — human physical and mental effort; divided into skilled/unskilled; reward = wages/salary; e.g. a teacher",
        "Capital — man-made assets used in production; productive/wealth; reward = interest; e.g. a tractor or factory machine",
        "Entrepreneurship — the organizing/risk-taking ability that combines the other factors; innovation; reward = profit; e.g. a business owner",
        "Note: money is not itself a factor of production — it is used to hire the factors"
      ] },
      { q: "Compare capitalism and socialism with respect to: (a) ownership of the means of production, (b) allocation of resources, (c) one advantage and one disadvantage of each.", marks: 10, outline: [
        "(a) Capitalism — private ownership; Socialism — public/collective/state ownership",
        "(b) Capitalism — allocation by the price mechanism (market); Socialism — allocation by central planning (the state decides)",
        "Capitalism advantages: efficiency, competition, consumer choice, innovation; disadvantage: inequality, monopolies, neglect of public goods",
        "Socialism advantages: equality, provision of public goods, no unemployment; disadvantage: inefficiency, lack of incentive, bureaucracy",
        "Economic problems of society (what, how, for whom to produce) solved by market prices in capitalism and by planning in socialism; the mixed economy uses both"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Topics 1–3:" },
      { k: "bul", items: [
        "1. Definition and scope of economics: scarcity and choice, scale of preference, opportunity cost, production possibility curve; economic activities — production, distribution and consumption; classification of economic activities — primary, secondary and tertiary and their relative contributions in terms of output/income, employment, savings, investment and foreign exchange",
        "2. Factors of production: land, labour, capital and entrepreneurship — meaning, characteristics and importance",
        "3. Types and basic features of economic systems: types — capitalism, socialism and mixed economy; basic features of each; advantages and disadvantages of each; economic problems of society and the approaches for solving them under each of the systems"
      ] }
    ]
  },
  /* =============== E2 · BASIC TOOLS OF ECONOMIC ANALYSIS =============== */
  {
    grade: 12, sem: "One", icon: "📊", period: "E2",
    title: "Basic Tools of Economic Analysis",
    subtitle: "Tables, graphs and charts · arithmetic mean, median, mode · simple applications",
    note: "Topic 4: the basic tools used in presenting and summarizing economic data.",
    objectives: [
      "Present economic data using tables, graphs and appropriate charts",
      "Calculate the arithmetic mean, median and mode of a data set",
      "Apply these basic statistical measures to simple economic data"
    ],
    terms: [
      { t: "Table", d: "A neat arrangement of data in rows and columns.", x: "A table of rice imports" },
      { t: "Graph", d: "A diagram showing the relationship between variables (e.g. price and quantity).", x: "A demand curve on axes" },
      { t: "Chart", d: "A pictorial representation of data — bar chart, pie chart (circle graph), histogram.", x: "A pie chart of budget expenditure" },
      { t: "Arithmetic mean", d: "The sum of all observations divided by the number of observations, x̄ = Σx/N.", x: "Average income of five earners" },
      { t: "Median", d: "The middle value of a data set arranged in order (splits the data in half).", x: "The middle household income" },
      { t: "Mode", d: "The most frequently occurring value in a data set.", x: "The most common shoe size sold" }
    ],
    tf: [
      { s: "The mean is the sum of the observations divided by their number.", a: "True", why: "Arithmetic mean — Σx/N." },
      { s: "The mode is the value that appears least often.", a: "False", why: "The mode is the MOST frequently occurring value." },
      { s: "A pie chart is suitable for showing the composition of a whole (e.g. a budget).", a: "True", why: "Charts — pie/circle graphs show parts of a whole." }
    ],
    mcq: [
      { q: "The arithmetic mean of 4, 8, 12 and 16 is:", o: ["8", "10", "12", "40"], a: 1, why: "Mean = (4+8+12+16)/4 = 40/4 = 10." },
      { q: "The median of the data set 3, 5, 7, 9, 11 is:", o: ["5", "7", "9", "30"], a: 1, why: "The middle value of five ordered numbers is 7." },
      { q: "The mode of 2, 3, 3, 5, 7 is:", o: ["2", "3", "5", "7"], a: 1, why: "3 occurs most often — the mode." },
      { q: "The most appropriate chart to show the shares of a national budget (education, health, defence, etc.) is:", o: ["a demand curve", "a pie chart", "a production possibility curve", "a histogram of prices"], a: 1, why: "A pie/circle chart shows the composition of a whole." },
      { q: "The statistical measure least affected by extreme (outlier) values is:", o: ["the mean", "the median", "the sum", "the total"], a: 1, why: "The median is robust against outliers; the mean is pulled by extremes." }
    ],
    essay: [
      { q: "The monthly incomes (in $) of six families are: 200, 300, 300, 400, 500, 900. (a) Find the mean, median and mode. (b) Explain which measure best represents the 'typical' family income and why.", marks: 10, outline: [
        "(a) Mean = (200+300+300+400+500+900)/6 = 2600/6 ≈ 433.33",
        "Median — order the data: 200, 300, 300, 400, 500, 900; two middle values (300 and 400) → median = (300+400)/2 = 350",
        "Mode = 300 (occurs twice, the most frequent)",
        "(b) The median (350) is the better measure of the 'typical' income because the mean (≈433) is pulled upward by the extreme value 900; the median is not affected by outliers"
      ] },
      { q: "Distinguish between a table, a graph and a chart. State one use of each in economics, and name three types of charts.", marks: 10, outline: [
        "Table — an orderly arrangement of data in rows and columns; use: presenting tabular data such as export figures by commodity",
        "Graph — a diagram showing the relationship between two or more variables on axes; use: drawing a demand curve (price vs quantity)",
        "Chart — a pictorial representation of data; use: a pie chart of the composition of government expenditure",
        "Three types of charts: bar chart, pie chart (circle graph), histogram (also: line chart, pictogram)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Topic 4 (Basic tools of economic analysis):" },
      { k: "bul", items: [
        "Tables, graphs and charts",
        "Some basic statistical measures and representations — arithmetic mean, median, mode and their simple applications"
      ] }
    ]
  },
  /* =============== E3 · DEMAND & SUPPLY =============== */
  {
    grade: 12, sem: "One", icon: "⚖️", period: "E3",
    title: "Demand & Supply",
    subtitle: "Law of demand/supply · schedules and curves · types of demand and supply · factors · elasticity · shifts vs movements",
    note: "Topics 5–6: demand (concept, law, curve, types, factors, elasticity) and supply (concept, law, curve, types, factors, elasticity).",
    objectives: [
      "State the concept and law of demand, draw demand schedules/curves, and explain exceptional demand curves",
      "Identify the types of demand (derived, composite, joint, competitive) and the factors that determine demand",
      "Distinguish a movement along a demand curve from a shift of the curve, and measure price, income and cross elasticity of demand",
      "State the concept and law of supply, draw supply schedules/curves, identify types of supply and the factors determining supply",
      "Distinguish a movement along a supply curve from a shift, and measure the elasticity of supply"
    ],
    terms: [
      { t: "Demand", d: "The quantity of a good consumers are willing and able to buy at a given price and time.", x: "Quantity demanded of rice" },
      { t: "Law of demand", d: "Other things being equal, the higher the price the lower the quantity demanded (inverse relationship).", x: "A downward-sloping demand curve" },
      { t: "Demand schedule/curve", d: "A table/graph showing quantities demanded at various prices.", x: "P: 5→1, Q: 10→50" },
      { t: "Exceptional demand", d: "Cases where the demand curve slopes upward or behaves unusually — e.g. Giffen goods, Veblen (luxury/status) goods, necessities with rising income.", x: "A Giffen good" },
      { t: "Derived demand", d: "Demand for a factor/good arising from demand for another good.", x: "Demand for labour in shoe-making comes from demand for shoes" },
      { t: "Composite demand", d: "Demand for a good with several uses, summed from all uses.", x: "Sugar — in food, beverages, industry" },
      { t: "Joint demand", d: "Demand for goods that are consumed together (complements).", x: "Cars and petrol" },
      { t: "Competitive demand", d: "Demand for goods that are substitutes (consumed in place of one another).", x: "Tea and coffee" },
      { t: "Supply", d: "The quantity of a good producers are willing and able to sell at a given price and time.", x: "Quantity of cement supplied" },
      { t: "Law of supply", d: "Other things being equal, the higher the price the higher the quantity supplied (direct relationship).", x: "An upward-sloping supply curve" },
      { t: "Elasticity of demand (Ed)", d: "The responsiveness of quantity demanded to a change in price: Ed = %ΔQd / %ΔP.", x: "Ed = 2 (elastic); Ed = 0.5 (inelastic)" },
      { t: "Elasticity of supply (Es)", d: "The responsiveness of quantity supplied to a change in price: Es = %ΔQs / %ΔP.", x: "Es > 1 (elastic); Es < 1 (inelastic)" },
      { t: "Cross elasticity of demand", d: "The responsiveness of the demand for one good to a change in the price of another: Exy = %ΔQx / %ΔPy.", x: "Positive for substitutes, negative for complements" },
      { t: "Income elasticity of demand", d: "The responsiveness of demand to a change in income: Ey = %ΔQ / %ΔIncome.", x: "Ey > 0 normal goods; Ey < 0 inferior goods" },
      { t: "Shift vs movement", d: "A change in PRICE causes a movement along the curve; a change in any OTHER factor (income, tastes, prices of other goods) shifts the whole curve.", x: "Rising income shifts demand right" }
    ],
    tf: [
      { s: "The law of demand states that, other things being equal, a higher price leads to a lower quantity demanded.", a: "True", why: "Concept of demand and law of demand." },
      { s: "A rise in the price of a good shifts the demand curve to the right.", a: "False", why: "A price change causes a movement ALONG the demand curve; other factors (income, tastes) shift it." },
      { s: "Cross elasticity of demand is positive for substitutes and negative for complements.", a: "True", why: "Cross elasticity of demand — a rise in the price of coffee raises demand for tea (substitutes: positive), and a rise in the price of cars lowers demand for petrol (complements: negative)." },
      { s: "A Giffen good is an example of an exceptional demand curve.", a: "True", why: "Reasons for exceptional demand curves — Giffen goods, Veblen goods." }
    ],
    mcq: [
      { q: "If the price of rice rises and, other things being equal, the quantity demanded falls, this illustrates the:", o: ["law of supply", "law of demand", "law of utility", "law of returns"], a: 1, why: "Law of demand — inverse relationship between price and quantity demanded." },
      { q: "A change in the price of a good (with other factors unchanged) causes:", o: ["a shift of the demand curve", "a movement along the demand curve", "a change in supply only", "no effect"], a: 1, why: "Price change → movement along the curve; other factors → shift." },
      { q: "Demand for labour in a shoe factory, which rises because more shoes are wanted, is an example of:", o: ["composite demand", "joint demand", "derived demand", "competitive demand"], a: 2, why: "Derived demand — demand for the factor (labour) derived from demand for the output (shoes)." },
      { q: "The demand for cars and petrol is:", o: ["derived", "joint (complementary)", "composite", "competitive"], a: 1, why: "Joint demand — goods consumed together." },
      { q: "If a 10% rise in price causes a 20% fall in quantity demanded, the price elasticity of demand is:", o: ["0.5 (inelastic)", "1 (unit elastic)", "2 (elastic)", "4"], a: 2, why: "Ed = 20/10 = 2 > 1, elastic." },
      { q: "A good with a negative income elasticity is called:", o: ["a normal good", "a luxury good", "an inferior good", "a necessity"], a: 2, why: "Inferior goods — demand falls as income rises." },
      { q: "Supply is said to be inelastic when Es is:", o: ["greater than 1", "equal to zero or between 0 and 1", "equal to 2", "negative"], a: 1, why: "Es < 1 (including 0) — inelastic; a small price change causes a smaller quantity change." }
    ],
    essay: [
      { q: "(a) State the law of demand and explain, with a diagram, the difference between a movement along a demand curve and a shift of the demand curve. (b) List four factors that can shift the demand curve for a commodity.", marks: 12, outline: [
        "(a) Law of demand: other things being equal, the quantity demanded of a good varies inversely with its price (a downward-sloping demand curve)",
        "Diagram: a demand curve with price (P) on the vertical axis and quantity (Q) on the horizontal; a price change moves the consumer from one point to another on the SAME curve (e.g. A to B)",
        "A change in any non-price determinant (income, tastes, prices of other goods, population, expectations) shifts the WHOLE curve (e.g. from D1 to D2)",
        "(b) Factors that shift demand: (1) consumer income; (2) prices of substitute and complementary goods; (3) tastes and preferences; (4) population/number of consumers; (5) expectations of future prices; (6) government policy (taxes/subsidies)"
      ] },
      { q: "Define the price elasticity of demand, the income elasticity of demand and the cross elasticity of demand. State the importance of the concept of elasticity of demand to (a) consumers, (b) producers, and (c) government.", marks: 10, outline: [
        "Price elasticity of demand (Ed) — the responsiveness of quantity demanded to a change in price: Ed = %ΔQd/%ΔP",
        "Income elasticity (Ey) — the responsiveness of demand to a change in income: Ey = %ΔQ/%ΔIncome (normal goods Ey > 0, inferior Ey < 0, luxuries Ey > 1)",
        "Cross elasticity (Exy) — the responsiveness of the demand for X to a change in the price of Y: Exy = %ΔQx/%ΔPy (substitutes positive, complements negative)",
        "Importance to consumers: guides consumption choices and budgeting (elastic goods can be substituted)",
        "Importance to producers: guides pricing decisions and output (a price rise raises revenue only for elastic demand)",
        "Importance to government: choice of tax base (taxing inelastic goods raises more revenue), import policy, price controls"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Topics 5–6:" },
      { k: "bul", items: [
        "5. Demand: concept of demand and law of demand, the demand schedule and curve, reasons for exceptional demand curves, types of demand (derived, composite, joint and competitive); factors determining demand — price of the commodity, prices of other commodities, income, tastes, price expectation, etc.; distinction between a shift of and movement along a demand curve; concept of elasticity of demand; types of elasticity of demand and their measurement — price, income and cross elasticities of demand; importance of the concept of elasticity of demand to consumers, producers and government",
        "6. Supply: concept of supply and law of supply, supply schedule and curve, types of supply — composite, complementary and competitive; factors determining supply — input prices, technology, prices of other commodities, climatic factors, etc.; distinction between the shift of and movement along the supply curve; concept and measurement of elasticity of supply and its importance to producers and government"
      ] }
    ]
  },
  /* =============== E4 · CONSUMER BEHAVIOUR & PRICE DETERMINATION =============== */
  {
    grade: 12, sem: "One", icon: "🛒", period: "E4",
    title: "Consumer Behaviour & Price Determination",
    subtitle: "Utility: total, average, marginal · diminishing marginal utility · consumer equilibrium · the market, equilibrium price and quantity · price controls",
    note: "Topics 7–8: the theory of consumer behaviour (utility) and the theory of price determination (market, equilibrium, price controls).",
    objectives: [
      "Define total utility, average utility and marginal utility, and calculate utility schedules",
      "State the law of diminishing marginal utility and explain the relationship between total, average and marginal utility",
      "Define consumer equilibrium and determine it; explain the effect of price changes and the relationship between marginal utility and the demand curve",
      "Define the market and explain the interaction of demand and supply in determining the equilibrium price and quantity",
      "Explain the effects of changes in demand and supply on equilibrium, the algebraic determination of equilibrium, and price controls (maximum/minimum prices, rationing, black markets)"
    ],
    terms: [
      { t: "Utility", d: "The satisfaction a consumer gets from consuming a good.", x: "Satisfaction from a meal" },
      { t: "Total utility (TU)", d: "The total satisfaction from consuming a given quantity of a good.", x: "TU of 3 cups of tea" },
      { t: "Average utility (AU)", d: "The total utility divided by the quantity consumed, AU = TU/Q.", x: "Satisfaction per unit" },
      { t: "Marginal utility (MU)", d: "The additional satisfaction from consuming one more unit, MU = ΔTU/ΔQ.", x: "The pleasure of the 4th cup" },
      { t: "Diminishing marginal utility", d: "As more of a good is consumed, the additional (marginal) satisfaction from each extra unit falls.", x: "The 4th cup gives less pleasure than the 1st" },
      { t: "Consumer equilibrium", d: "The situation in which the consumer's total utility is maximized for a given income — where the marginal utility per cedi of each good is equal: MUx/Px = MUy/Py.", x: "Spending the last cedi equally well on all goods" },
      { t: "Market", d: "The arrangement in which buyers and sellers interact to determine the price of a good/service.", x: "A fish market" },
      { t: "Equilibrium price/quantity", d: "The price (and quantity) at which quantity demanded equals quantity supplied — where the demand and supply curves intersect.", x: "No surplus or shortage" },
      { t: "Maximum price (price ceiling)", d: "A government-imposed maximum price below the market price; causes shortages, rationing and black markets.", x: "Rent control" },
      { t: "Minimum price (price floor)", d: "A government-imposed minimum price above the market price; causes surpluses (supports farmers).", x: "Minimum agricultural price" },
      { t: "Black (parallel) market", d: "An unlicensed market that arises when official price controls create shortages; goods are sold above the controlled price.", x: "Petrol sold at the side" }
    ],
    tf: [
      { s: "Marginal utility is the additional satisfaction from consuming one more unit of a good.", a: "True", why: "Marginal utility — ΔTU/ΔQ." },
      { s: "Consumer equilibrium occurs where total utility is zero.", a: "False", why: "Consumer equilibrium — total utility is maximized for a given income; MUx/Px = MUy/Py." },
      { s: "A maximum price set below the equilibrium price leads to a shortage.", a: "True", why: "Price controls: maximum price regulations — meaning and their effects; rationing, black market." }
    ],
    mcq: [
      { q: "If total utility is 60 from 3 units, the average utility is:", o: ["20", "30", "45", "60"], a: 0, why: "AU = TU/Q = 60/3 = 20." },
      { q: "Total utility rises from 80 to 100 when a 5th unit is consumed. The marginal utility of the 5th unit is:", o: ["20", "100", "18", "5"], a: 0, why: "MU = ΔTU = 100 − 80 = 20." },
      { q: "The law of diminishing marginal utility states that:", o: ["total utility always falls", "the marginal utility of successive units falls", "price falls as quantity rises", "demand is always elastic"], a: 1, why: "As more is consumed, each extra unit adds less satisfaction." },
      { q: "A consumer is in equilibrium when:", o: ["marginal utility is zero for all goods", "the marginal utility per unit of money spent is equal for each good (MUx/Px = MUy/Py)", "total utility is zero", "income is zero"], a: 1, why: "Consumer equilibrium — equal marginal utility per cedi spent." },
      { q: "The equilibrium price is the price at which:", o: ["quantity demanded exceeds quantity supplied", "quantity demanded equals quantity supplied", "demand is zero", "supply is zero"], a: 1, why: "Equilibrium — the demand and supply curves intersect." },
      { q: "A price ceiling (maximum price) set BELOW the market price will lead to:", o: ["a surplus", "a shortage (excess demand)", "no change", "higher production only"], a: 1, why: "Quantity demanded > quantity supplied → shortage; rationing and black markets." },
      { q: "A black market arises mainly because of:", o: ["high wages", "price controls that create shortages", "free trade", "perfect competition"], a: 1, why: "Black market (parallel market) — the effect of maximum price regulations." }
    ],
    essay: [
      { q: "The following is the utility schedule for a consumer of tea: units 1, 2, 3, 4, 5 with marginal utilities 20, 16, 12, 8, 4. (a) Complete the table with total utility and average utility. (b) State and explain the law of diminishing marginal utility as shown. (c) At what unit does total utility maximize?", marks: 12, outline: [
        "(a) Table: Unit | MU | TU | AU: 1 | 20 | 20 | 20; 2 | 16 | 36 | 18; 3 | 12 | 48 | 16; 4 | 8 | 56 | 14; 5 | 4 | 60 | 12",
        "(b) Law of diminishing marginal utility: as the consumer consumes more units of a good, the additional satisfaction (marginal utility) from each successive unit declines (20 → 16 → 12 → 8 → 4)",
        "(c) Total utility is maximum (60) at the 5th unit — the point where marginal utility has fallen to its lowest positive value; total utility peaks where MU = 0"
      ] },
      { q: "(a) Define the market and the equilibrium price. (b) With a diagram, explain the effect on equilibrium price and quantity of: (i) an increase in demand (supply unchanged), (ii) an increase in supply (demand unchanged). (c) Explain the meaning and effects of a maximum price.", marks: 12, outline: [
        "(a) Market — the arrangement where buyers and sellers interact; Equilibrium price — the price at which quantity demanded = quantity supplied (the intersection of the demand and supply curves)",
        "(b)(i) Demand increases (shifts right): equilibrium price RISES and equilibrium quantity INCREASES (new intersection with the supply curve at a higher P and Q)",
        "(ii) Supply increases (shifts right): equilibrium price FALLS and equilibrium quantity INCREASES",
        "(c) Maximum price — a legally imposed upper limit on price, set below the equilibrium price; effects: quantity demanded > quantity supplied → shortage; queueing/rationing; emergence of a black (parallel) market; possible fall in quality"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Topics 7–8:" },
      { k: "bul", items: [
        "7. Theory of consumer behaviour: the utility concepts — total utility, average utility, marginal utility and the calculation of utility schedules; the law of diminishing marginal utility; relationship between total utility, average utility and marginal utility; the concept of equilibrium of a consumer; determination of consumer equilibrium; the effects of changes in price on consumer equilibrium; the relationship between marginal utility and the demand curve",
        "8. Theory of price determination: the concept of the market; interaction between demand and supply; price determination under free and regulated markets; equilibrium price and quantity in product and factor markets; the effects of changes in supply and demand on equilibrium prices and quantities; introduction to algebraic determination of equilibrium price and quantity; price controls — maximum and minimum price regulations (meaning and their effects); rationing; black market (parallel market)"
      ] }
    ]
  },
  /* =============== E5 · PRODUCTION, COST & MARKET STRUCTURES =============== */
  {
    grade: 12, sem: "Two", icon: "🏭", period: "E5",
    title: "Production, Cost & Market Structures",
    subtitle: "Division of labour, scale, productivity · cost and revenue concepts · perfect and imperfect competition · price discrimination",
    note: "Topics 9–11: the theory of production, the theory of cost and revenue, and market structures.",
    objectives: [
      "Explain division of labour and specialization, the scale of production (internal and external economies), and the concepts of total, average and marginal productivity with the law of variable proportions",
      "Define the cost concepts (total, average, marginal, variable, fixed cost; short-run and long-run costs) and the revenue concepts (total, average, marginal revenue; marginal revenue product)",
      "Distinguish the economist's view of cost from the accountant's view (opportunity cost vs money cost)",
      "Describe the concept of a market and the characteristics of perfect competition, monopoly and monopolistic competition, and the determination of price and output under each",
      "Explain price discrimination"
    ],
    terms: [
      { t: "Division of labour", d: "The splitting of production into stages, each performed by a different worker/machine, increasing efficiency.", x: "A factory assembly line" },
      { t: "Specialization", d: "Concentrating production on a limited range of goods/services in which one has an advantage.", x: "A region specializing in cocoa" },
      { t: "Scale of production", d: "The size of a firm's output capacity; internal economies — cost advantages from growing within the firm; external economies — advantages from the growth of the industry/region.", x: "A larger firm buying machines in bulk (internal)" },
      { t: "Total product (TP)", d: "The total output from a given amount of a variable input.", x: "Total output of a farm" },
      { t: "Average product (AP)", d: "The total product divided by the number of units of the variable input, AP = TP/L.", x: "Output per worker" },
      { t: "Marginal product (MP)", d: "The additional output from one more unit of the variable input, MP = ΔTP/ΔL.", x: "The output of the 5th worker" },
      { t: "Law of variable proportions", d: "As more of a variable input is added to fixed inputs, marginal product eventually falls (diminishing marginal returns).", x: "Too many workers on a small plot" },
      { t: "Fixed cost", d: "Cost that does not vary with output in the short run (rent, salaries).", x: "Factory rent" },
      { t: "Variable cost", d: "Cost that varies with output (raw materials, casual labour).", x: "Cement for each batch" },
      { t: "Total cost (TC)", d: "Fixed cost + variable cost, TC = FC + VC.", x: "The total cost of producing 100 units" },
      { t: "Average cost (AC)", d: "Total cost per unit of output, AC = TC/Q.", x: "Cost per shoe" },
      { t: "Marginal cost (MC)", d: "The additional cost of producing one more unit, MC = ΔTC/ΔQ.", x: "The cost of the 101st unit" },
      { t: "Short-run/long-run cost", d: "Short run — at least one factor is fixed; long run — all factors are variable (all costs are variable).", x: "The short run has fixed costs" },
      { t: "Total revenue (TR)", d: "Price × quantity sold, TR = P × Q.", x: "Revenue from 200 units at $10 each" },
      { t: "Average revenue (AR)", d: "Revenue per unit sold — equal to price, AR = TR/Q = P.", x: "AR = $10 per unit" },
      { t: "Marginal revenue (MR)", d: "The additional revenue from selling one more unit, MR = ΔTR/ΔQ; under perfect competition MR = P.", x: "MR = price for a price-taker" },
      { t: "Perfect competition", d: "A market with many buyers and sellers, a homogeneous product, free entry/exit, and perfect knowledge — price-takers.", x: "A grain market" },
      { t: "Monopoly", d: "A market with a single seller, no close substitutes, and barriers to entry — a price-maker.", x: "A public utility (water)" },
      { t: "Monopolistic competition", d: "A market with many sellers of differentiated (slightly different) products — e.g. branded goods.", x: "Shoes, soap brands" },
      { t: "Price discrimination", d: "Charging different prices to different consumers for the same product (not due to cost differences).", x: "Student and full-fare tickets" }
    ],
    tf: [
      { s: "Under the law of variable proportions, marginal product eventually falls as more of a variable input is added to fixed inputs.", a: "True", why: "Law of variable proportions (diminishing marginal returns)." },
      { s: "In the long run, all costs are variable.", a: "True", why: "Short run and long run costs — in the long run all factors (and costs) are variable." },
      { s: "Under perfect competition, a firm is a price-maker.", a: "False", why: "Under perfect competition, firms are price-TAKERS; a monopoly is a price-maker." },
      { s: "Price discrimination is charging different prices to different consumers for the same product.", a: "True", why: "Price discrimination." }
    ],
    mcq: [
      { q: "The additional output from employing one more worker is the:", o: ["total product", "average product", "marginal product", "fixed product"], a: 2, why: "Marginal product — ΔTP/ΔL." },
      { q: "Which of the following is a fixed cost in the short run?", o: ["raw materials", "factory rent", "casual labour", "electricity for machines"], a: 1, why: "Fixed cost does not vary with output — rent." },
      { q: "Average cost is calculated as:", o: ["TC × Q", "TC ÷ Q", "Q ÷ TC", "MC + FC"], a: 1, why: "AC = total cost ÷ quantity." },
      { q: "The economist's view of cost emphasizes:", o: ["money cost only", "opportunity cost", "historical cost", "book cost"], a: 1, why: "Distinction between the economist's and accountant's view of cost — opportunity cost vs money cost." },
      { q: "Under perfect competition, marginal revenue is equal to:", o: ["average cost", "price", "total cost", "marginal cost always"], a: 1, why: "A price-taker sells all units at the market price, so MR = P." },
      { q: "A market with a single seller and no close substitutes is a:", o: ["perfect competition", "monopoly", "monopolistic competition", "oligopoly only"], a: 1, why: "Monopoly — one seller, barriers to entry." },
      { q: "Branded soaps and shoes, sold by many firms, are an example of:", o: ["monopoly", "perfect competition", "monopolistic competition", "a public utility"], a: 2, why: "Many sellers, differentiated products — monopolistic competition." }
    ],
    essay: [
      { q: "Define total, average and marginal product. State the law of variable proportions and explain, with a table and diagram, how the three products are related.", marks: 12, outline: [
        "Total product (TP) — total output from a given number of workers; Average product (AP) — TP divided by number of workers; Marginal product (MP) — the extra output from one more worker",
        "Law of variable proportions: as more of a variable input (labour) is added to a fixed input (land/capital), marginal product eventually declines (diminishing returns)",
        "Table/diagram: initially MP rises (increasing returns), then falls; MP cuts AP at AP's maximum; MP falls to zero where TP is at its maximum; beyond that MP becomes negative and TP falls",
        "Relations: AP = TP/L; MP = ΔTP/ΔL; MP > AP while AP is rising, MP = AP at AP's maximum, MP < AP while AP is falling"
      ] },
      { q: "(a) Distinguish the economist's view of cost from the accountant's view of cost. (b) Define total, average and marginal cost. (c) Explain, with a diagram, the determination of price and output under perfect competition and under monopoly.", marks: 12, outline: [
        "(a) Economist's view — opportunity cost (the value of the next best alternative forgone, including implicit/normal profit); Accountant's view — money cost (the actual out-of-pocket/historical cost recorded in the books)",
        "(b) Total cost — FC + VC; Average cost — TC/Q; Marginal cost — ΔTC/ΔQ (the cost of one more unit)",
        "(c) Perfect competition: the firm faces a horizontal (price-taker) demand curve at the market price; profit-maximizing output where MC = MR (= P); price = AR = MR; in the long run normal profit only",
        "Monopoly: the firm faces the downward-sloping market demand curve; MR lies below demand; it produces where MC = MR and charges the price from the demand curve at that output — a higher price and lower output than under competition"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Topics 9–11:" },
      { k: "bul", items: [
        "9. Theory of production: division of labour and specialization; scale of production (internal and external economies); concept of total, average and marginal productivity and the law of variable proportions",
        "10. Theory of cost and revenue: (i) cost concepts — total cost, average cost, marginal cost, variable cost, fixed cost; short-run and long-run costs; (ii) distinction between the economist's and accountant's view of cost (opportunity cost and money cost); (iii) revenue concepts — total, average and marginal revenue; marginal revenue product",
        "11. Market structures: concept of a market, characteristics of various market structures, determination of price and output under different structures — perfect competition and imperfect competition (monopoly and monopolistic competition); review of cost and revenue concepts; price discrimination"
      ] }
    ]
  },
  /* =============== E6 · BUSINESS ORGANIZATIONS & DISTRIBUTIVE TRADE =============== */
  {
    grade: 12, sem: "Two", icon: "🏪", period: "E6",
    title: "Business Organizations & Distributive Trade",
    subtitle: "Sole proprietorship, partnership, joint-stock, co-operative, statutory corporation · sources of funds · privatization, nationalization · distribution, wholesalers, retailers, government",
    note: "Topic 12 plus Distributive Trade: types of business enterprises, their problems, and the process of distribution of goods.",
    objectives: [
      "Describe the types and basic features of business enterprises: sole proprietorship, partnership, joint-stock companies (private and public), co-operatives, statutory corporations, joint ventures",
      "State the sources of funds for businesses and the general problems of business enterprises",
      "Explain privatization and commercialization as solutions to public-enterprise problems, and indigenization and nationalization policies",
      "Describe the process of distribution, the roles of producers, wholesalers, retailers and co-operatives, the role of government agencies, and the problems and solutions of distribution"
    ],
    terms: [
      { t: "Sole proprietorship", d: "A business owned and run by one person, who bears all risks and keeps all profits.", x: "A corner shop" },
      { t: "Partnership", d: "A business owned by two or more persons (up to a legal limit) who share profits, risks and management.", x: "A law firm" },
      { t: "Joint-stock company (public)", d: "A separate legal entity owned by shareholders; its shares are publicly traded; limited liability.", x: "A listed company" },
      { t: "Joint-stock company (private)", d: "A company whose shares are not offered to the public; limited number of members; limited liability.", x: "A family holding company" },
      { t: "Co-operative", d: "A voluntary association of persons who pool resources and share benefits democratically ('one member, one vote').", x: "A farmers' co-operative, a credit union" },
      { t: "Statutory corporation", d: "A public enterprise created by an act of the legislature to provide essential services (often at a loss).", x: "A water or electricity board" },
      { t: "Joint venture", d: "A business arrangement in which two or more parties (often local and foreign) combine for a specific project.", x: "A local–foreign oil venture" },
      { t: "Sources of funds", d: "Ways of obtaining capital — own capital, bank loans, issue of shares/debentures, retained profits, trade credit, government grants.", x: "Raising funds by issuing shares" },
      { t: "Privatization", d: "The transfer of a public enterprise to private ownership/management to improve efficiency.", x: "Selling a state factory" },
      { t: "Commercialization", d: "Running a public enterprise on commercial (profit) principles rather than at a subsidized loss.", x: "A parastatal charging cost prices" },
      { t: "Nationalization", d: "The transfer of private/foreign enterprises to state ownership.", x: "Taking over a mine" },
      { t: "Indigenization", d: "Transferring ownership/control of enterprises to citizens of the country (indigenes).", x: "Citizens buying foreign firms" },
      { t: "Wholesaler", d: "A trader who buys in bulk from producers and sells in lots to retailers.", x: "A grain wholesaler" },
      { t: "Retailer", d: "A trader who sells in small quantities directly to the final consumer.", x: "A shop, a market seller" },
      { t: "Distribution", d: "The process of moving goods from producers to consumers — physical distribution (transport, storage) and exchange of ownership.", x: "Getting rice from farm to shop" }
    ],
    tf: [
      { s: "A sole proprietor has unlimited liability.", a: "True", why: "The owner is personally liable for all business debts — a feature of sole proprietorship." },
      { s: "A joint-stock company has its shares offered to the general public without restriction.", a: "False", why: "A PUBLIC joint-stock company offers shares to the public; a PRIVATE company does not." },
      { s: "Privatization is the transfer of public enterprises to private ownership.", a: "True", why: "Privatization and commercialization as solutions to problems of public enterprises." },
      { s: "A wholesaler sells directly to the final consumer in small quantities.", a: "False", why: "A retailer sells to the final consumer in small quantities; a wholesaler sells in bulk to retailers." }
    ],
    mcq: [
      { q: "A business owned and controlled by one person is a:", o: ["partnership", "sole proprietorship", "joint-stock company", "statutory corporation"], a: 1, why: "Sole proprietorship — one owner, unlimited liability." },
      { q: "The principle 'one member, one vote' is characteristic of a:", o: ["joint-stock company", "co-operative", "sole proprietorship", "statutory corporation"], a: 1, why: "Co-operatives are managed democratically." },
      { q: "Limited liability means that an owner's loss is limited to:", o: ["the total assets of the business", "the amount of capital they have put in", "their personal house", "nothing"], a: 1, why: "Limited liability — losses are limited to the capital contributed (a feature of companies and co-ops)." },
      { q: "The transfer of a public enterprise to private ownership is called:", o: ["nationalization", "privatization", "indigenization", "commercialization"], a: 1, why: "Privatization." },
      { q: "Transferring ownership of enterprises to the citizens of a country is:", o: ["nationalization", "indigenization", "privatization", "devaluation"], a: 1, why: "Indigenization and nationalization policies." },
      { q: "A trader who buys in bulk and sells in lots to shopkeepers is a:", o: ["retailer", "wholesaler", "producer", "manufacturer"], a: 1, why: "Wholesaler — the middleman between producers and retailers." },
      { q: "A water and electricity board set up by an act of parliament is an example of a:", o: ["sole proprietorship", "statutory corporation", "partnership", "joint venture"], a: 1, why: "Statutory corporation — a public enterprise created by legislation." }
    ],
    essay: [
      { q: "Describe the following types of business organization, stating one advantage and one disadvantage of each: (a) sole proprietorship, (b) partnership, (c) joint-stock company.", marks: 12, outline: [
        "(a) Sole proprietorship — one owner, unlimited liability, easy to set up; Advantage: quick decision-making, full profits; Disadvantage: unlimited liability, limited capital, limited life",
        "(b) Partnership — two or more owners, shared profits/risks/liability; Advantage: more capital and skills, shared risk; Disadvantage: potential for conflict, unlimited liability of partners, limited life",
        "(c) Joint-stock company — separate legal entity, limited liability, capital raised by shares; Advantage: large capital, limited liability, continuity; Disadvantage: complex and costly to set up, separation of ownership and control, possible lack of confidentiality",
        "Sources of funds mentioned: own capital, bank loans, shares/debentures, retained profits"
      ] },
      { q: "Explain the process of distribution of goods, stating the roles of: (a) producers, (b) wholesalers, (c) retailers, (d) co-operatives, and (e) government agencies. Mention two problems of distribution and their solutions.", marks: 10, outline: [
        "Process of distribution — moving goods from producers to consumers (physical distribution: transport, storage, packaging; and exchange of ownership)",
        "(a) Producers — make the goods and start the chain; (b) Wholesalers — buy in bulk and break bulk, selling to retailers; (c) Retailers — sell in small quantities to the final consumer; (d) Co-operatives — pool members' goods for collective marketing/buying; (e) Government agencies — fix prices, standardize weights and measures, operate marketing boards, ensure fair competition",
        "Problems: high transport/cost of distribution; poor storage (spoilage); poor infrastructure; middlemen margins. Solutions: improve roads/transport, build cold storage, reduce unnecessary middlemen, support co-operative marketing (commodity boards)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Topic 12 (Business organizations) + Distributive Trade:" },
      { k: "bul", items: [
        "12. Business organizations: types and basic features of business enterprises — sole proprietorship; partnership; joint-stock companies (private and public); co-operatives; statutory corporation; joint ventures; sources of funds; general and basic problems of business enterprises; privatization and commercialization as solutions to problems of public enterprises; indigenization and nationalization policies",
        "Distributive trade: process of distribution; role of producers; role of wholesalers, retailers and co-operatives; the role of government agencies in product distribution; the problems of distribution and their solutions"
      ] }
    ]
  },
  /* =============== E7 · POPULATION & LABOUR =============== */
  {
    grade: 12, sem: "Two", icon: "👥", period: "E7",
    title: "Population & the Labour Market",
    subtitle: "Size and growth of population · rural–urban migration · Malthus · census · labour force, human capital, wages · unemployment and underemployment · trade unions",
    note: "Topic 14: population (determination, growth, migration, distribution, census) and the labour market (labour force, supply and demand for labour, wages, unemployment, unions, government policy).",
    objectives: [
      "Explain the determination and implications of the size and growth of population, rural–urban migration, the Malthusian theory, and the geographical, age, sex and occupational distribution of population",
      "State the importance and problems of a census, and the relationship between population and economic development (under-, optimum, over-population)",
      "Define the labour force and human capital, efficiency and mobility of labour, and the factors affecting the size of the labour force",
      "Explain the supply of and demand for labour, wage determination, unemployment and underemployment, and the roles of trade unions, employers' associations and government policy on labour and wages"
    ],
    terms: [
      { t: "Population", d: "The total number of people living in a country/area at a given time.", x: "Liberia's population" },
      { t: "Population growth", d: "The change in population over time, determined by births, deaths and migration: Growth = (Births − Deaths) + (Immigration − Emigration).", x: "Natural increase + net migration" },
      { t: "Rural–urban migration", d: "The movement of people from rural areas to towns/cities in search of work and opportunities.", x: "Young farmers moving to Monrovia" },
      { t: "Malthusian theory", d: "Population grows in geometric progression while food grows in arithmetic progression, so population tends to outstrip food supply.", x: "Checks: positive (war, famine) and preventive (late marriage)" },
      { t: "Census", d: "The official count of the population and its characteristics at a specified time.", x: "A national census" },
      { t: "Optimum population", d: "The population size that gives the highest output (or income) per head.", x: "Beyond it — over-population; below it — under-population" },
      { t: "Labour force", d: "The total number of people of working age who are able and willing to work (employed + unemployed).", x: "The working-age population in employment or seeking work" },
      { t: "Human capital", d: "The stock of skills, knowledge and health embodied in workers, built through education and training.", x: "A skilled technician" },
      { t: "Efficiency of labour", d: "The output produced per unit of labour — affected by skill, health, motivation, tools.", x: "A trained worker produces more" },
      { t: "Mobility of labour", d: "The ease with which labour moves between jobs, regions or industries (geographical, occupational, industrial mobility).", x: "A nurse moving from a hospital to a clinic" },
      { t: "Wage determination", d: "The process by which the price of labour (wages) is set by the interaction of the demand for and supply of labour.", x: "Market wages for carpenters" },
      { t: "Unemployment", d: "The situation in which able and willing workers cannot find work at the prevailing wage.", x: "Registered job-seekers" },
      { t: "Underemployment", d: "Working fewer hours than desired or in a job below one's skill — 'disguised' unemployment.", x: "A degree holder working as a porter" },
      { t: "Trade union", d: "An association of workers formed to protect and advance their interests (wages, conditions).", x: "A teachers' union" }
    ],
    tf: [
      { s: "According to Malthus, population grows in geometric progression while food grows in arithmetic progression.", a: "True", why: "Malthusian theory of population." },
      { s: "The labour force includes only the employed.", a: "False", why: "The labour force = the working-age population able and willing to work — the employed PLUS the unemployed." },
      { s: "Underemployment means working in a job below one's skill or for fewer hours than desired.", a: "True", why: "Concept of unemployment and underemployment." },
      { s: "A census is the official count of a country's population.", a: "True", why: "Importance and problems of census." }
    ],
    mcq: [
      { q: "The natural increase of a population is:", o: ["births plus immigration", "births minus deaths", "deaths minus births", "immigration minus emigration"], a: 1, why: "Growth = (births − deaths) + (immigration − emigration); natural increase = births − deaths." },
      { q: "The movement of people from the countryside to the city is called:", o: ["emigration", "rural–urban migration", "immigration", "urbanization of the rural area"], a: 1, why: "Rural–urban migration." },
      { q: "The Malthusian theory holds that:", o: ["food grows faster than population", "population grows geometrically while food grows arithmetically", "population and food grow at the same rate", "migration determines growth only"], a: 1, why: "Population in geometric progression; food in arithmetic progression." },
      { q: "A population that is too small to fully employ the available resources is:", o: ["over-populated", "under-populated", "at optimum population", "Malthusian"], a: 1, why: "Under-population — resources are not fully used." },
      { q: "The labour force consists of:", o: ["only the employed", "all people of working age able and willing to work (employed and unemployed)", "only the unemployed", "children and the elderly"], a: 1, why: "Concept of the labour force." },
      { q: "The price of labour is determined by:", o: ["the government alone", "the interaction of the demand for and supply of labour", "trade unions alone", "the workers' wishes only"], a: 1, why: "Supply of and demand for labour: wage determination." },
      { q: "A degree holder working as a shop porter is an example of:", o: ["unemployment", "underemployment", "full employment", "seasonal unemployment"], a: 1, why: "Underemployment — working below one's skill." }
    ],
    essay: [
      { q: "(a) State the Malthusian theory of population and one criticism of it. (b) Distinguish under-population from optimum population and over-population. (c) State two implications of a rapidly growing population for a developing country.", marks: 10, outline: [
        "(a) Malthus: population grows in geometric progression (1, 2, 4, 8) while food supply grows in arithmetic progression (1, 2, 3, 4), so population tends to outstrip food; checks are 'positive' (famine, war, disease) and 'preventive' (late marriage, restraint)",
        "Criticism: it ignored technological advances in agriculture (the Green Revolution) and the decline in birth rates with development — food output has grown geometrically in many countries",
        "(b) Under-population — too few people to fully use the available resources (resources idle); Optimum population — the size that gives the maximum output/income per head; Over-population — too many people relative to resources, lowering output per head",
        "(c) Implications: pressure on food, housing, health and education; high unemployment/underemployment; lower savings and capital formation; strain on infrastructure and the environment"
      ] },
      { q: "Define the labour force, human capital and efficiency of labour. Explain how wages are determined, and state the roles of (a) trade unions, (b) employers' associations, and (c) government in labour and wage policy.", marks: 10, outline: [
        "Labour force — the working-age population able and willing to work (employed + unemployed); Human capital — the skills, knowledge and health embodied in workers; Efficiency of labour — output per unit of labour (raised by education, health, tools, motivation)",
        "Wage determination — the interaction of the demand for labour (by firms, depending on the marginal revenue product of labour) and the supply of labour (workers' willingness to work at various wages); the equilibrium wage is where they intersect",
        "(a) Trade unions — bargain collectively for higher wages and better conditions, organize strikes; (b) Employers' associations — represent firms in collective bargaining, set industry standards; (c) Government — sets a minimum wage, enforces labour laws, provides training and employment services, and mediates disputes",
        "Factors affecting the size of the labour force: population characteristics (age, sex, occupation, education), labour force participation"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Topic 14 (Population and Labour Market):" },
      { k: "bul", items: [
        "(a) Population — determination and implication of size and growth of population; rural–urban migration; Malthusian theory of population; geographical, age, sex and occupational distribution; importance and problems of census; population and economic development (under-population, optimum population and over-population)",
        "(b) Labour Market — concept of labour force and human capital; efficiency and mobility of labour; factors affecting the size of the labour force, particularly the population characteristics (age, sex, occupation, education, etc.); supply of and demand for labour: wage determination; concept of unemployment and underemployment; trade unions, employers' association and government policies on labour and wages"
      ] }
    ]
  },
  /* =============== E8 · AGRICULTURE & INDUSTRIALIZATION =============== */
  {
    grade: 12, sem: "Two", icon: "🌾", period: "E8",
    title: "Agriculture & Industrialization",
    subtitle: "Structure and systems of agriculture · marketing, commodity boards · agricultural policies · industry, location of industry, industrial estates · strategies and problems",
    note: "Topics 15–16: the structure, systems and policies of agriculture, and the meaning, location and strategies of industrialization.",
    objectives: [
      "Describe the structure of agriculture (food crops, export crops, livestock, fisheries) and its systems (peasant, commercial, co-operative, state farming)",
      "Explain the importance of agriculture to the national economy, the marketing of agricultural products (commodity boards), agricultural policies (minimum agricultural prices), and the problems of agriculture and their remedies",
      "Define industrial concepts (plant, firm, industry, industrial estates) and explain the meaning and types of industry",
      "Explain the location of industry and localization, the role of industrialization in economic development, strategies of industrialization, its problems, and the link between agricultural and industrial development"
    ],
    terms: [
      { t: "Agriculture", d: "The cultivation of crops and the rearing of animals for human use.", x: "Rice farming, poultry" },
      { t: "Food crops", d: "Crops grown mainly for local consumption (rice, maize, cassava).", x: "Rice, maize" },
      { t: "Export crops", d: "Crops grown mainly for sale abroad (cocoa, rubber, groundnut, palm produce).", x: "Cocoa, rubber" },
      { t: "Peasant farming", d: "Small-scale, family-based farming using simple tools, mainly for subsistence.", x: "A family farm" },
      { t: "Commercial farming", d: "Large-scale farming for profit using modern inputs and machinery.", x: "A rubber plantation" },
      { t: "Co-operative farming", d: "Farming in which farmers pool resources and market collectively through a co-operative.", x: "A farmers' co-operative" },
      { t: "State farming", d: "Farming carried out by the government (state farms).", x: "A government estate" },
      { t: "Commodity board", d: "A government agency that markets an agricultural commodity, stabilizes prices and guarantees a minimum price to farmers.", x: "A cocoa board" },
      { t: "Minimum agricultural price", d: "A guaranteed price floor for farm produce, ensuring farmers a basic return.", x: "A guaranteed rice price" },
      { t: "Industry", d: "The processing of raw materials into finished goods (manufacturing, mining, construction).", x: "A cement plant" },
      { t: "Plant", d: "A single unit of production (a factory).", x: "A shoe factory" },
      { t: "Firm", d: "The business organization that owns/operates one or more plants.", x: "A company that owns three plants" },
      { t: "Industrial estate", d: "A planned area where factories are concentrated, sharing infrastructure.", x: "An export-processing zone" },
      { t: "Location of industry", d: "The choice of where to set up industry, influenced by raw materials, labour, transport, markets, power and policy.", x: "A factory near a port" },
      { t: "Localization", d: "The tendency of firms in the same industry to cluster in one area (for shared services and labour).", x: "Shoe factories in one town" },
      { t: "Industrialization", d: "The process of developing the industrial (manufacturing) sector to drive economic growth.", x: "Building factories, processing local raw materials" }
    ],
    tf: [
      { s: "Cocoa and rubber are examples of export crops.", a: "True", why: "Structure of agriculture — food crops, export crops, livestock, fisheries." },
      { s: "A commodity board fixes the price of a commodity and guarantees a minimum price to farmers.", a: "True", why: "Marketing of agricultural products (commodity boards); agricultural policies (minimum agricultural prices)." },
      { s: "An industrial estate is a single factory.", a: "False", why: "An industrial estate is a planned area where factories are concentrated; a plant is a single unit of production." },
      { s: "Peasant farming is large-scale and uses modern machinery.", a: "False", why: "Peasant farming is small-scale, family-based, mainly subsistence; commercial farming is large-scale and mechanized." }
    ],
    mcq: [
      { q: "Rice, maize and cassava are examples of:", o: ["export crops", "food crops", "perennial crops", "industrial crops"], a: 1, why: "Food crops — grown for local consumption." },
      { q: "Small-scale, family-based farming mainly for subsistence is called:", o: ["commercial farming", "peasant farming", "state farming", "plantations"], a: 1, why: "Peasant farming." },
      { q: "A government agency that markets cocoa and guarantees farmers a minimum price is a:", o: ["trade union", "commodity board", "statutory corporation only", "central bank"], a: 1, why: "Marketing of agricultural products — commodity boards." },
      { q: "The guaranteed lowest price at which a government will buy a farm produce is a:", o: ["maximum price", "minimum agricultural price", "equilibrium price", "world price"], a: 1, why: "Agricultural policies — minimum agricultural prices." },
      { q: "A single unit of production (a factory) is called a:", o: ["firm", "industry", "plant", "estate"], a: 2, why: "Plant — a single unit of production; a firm owns/operates plants." },
      { q: "The tendency of firms in the same industry to cluster in one area is:", o: ["division of labour", "localization", "specialization", "economies of scale"], a: 1, why: "Localization — clustering of similar industries." },
      { q: "Which of the following is a factor in the location of industry?", o: ["proximity to raw materials", "the colour of the soil", "the number of moons", "the phase of the moon"], a: 0, why: "Location of industry — raw materials, labour, transport, markets, power, policy." }
    ],
    essay: [
      { q: "(a) State the importance of agriculture to the national economy (four points). (b) Describe the systems of agriculture: peasant, commercial, co-operative and state farming. (c) State two problems of agriculture and a remedy for each.", marks: 12, outline: [
        "(a) Importance: provides food; provides raw materials for industry; provides export earnings (foreign exchange); provides employment (the largest sector in West Africa); provides a market for industrial goods; generates income/savings",
        "(b) Peasant — small-scale, family-based, simple tools, subsistence; Commercial — large-scale, profit-oriented, modern inputs, mechanized; Co-operative — farmers pool resources, market/buy collectively through a co-operative; State — farmed by the government (state farms)",
        "(c) Problems: low productivity (poor tools, poor inputs) → remedy: introduce improved seeds, fertilizers, training; poor marketing/transport (post-harvest losses, middlemen) → remedy: build roads, support commodity boards/co-operatives; other: lack of credit, land tenure, climate"
      ] },
      { q: "Define the terms plant, firm, industry and industrial estate. Explain the role of industrialization in economic development and state two strategies and two problems of industrialization in a developing country.", marks: 10, outline: [
        "Plant — a single unit of production (a factory); Firm — the business organization that owns/operates one or more plants; Industry — the whole set of firms in a line of production; Industrial estate — a planned area where factories are concentrated, sharing infrastructure (power, roads, water)",
        "Role of industrialization: creates employment; increases national income and output; processes local raw materials (adding value, earning more foreign exchange); reduces import dependence; drives technological progress; links agricultural and industrial development",
        "Strategies: import substitution (producing locally what was imported); export promotion (producing for export); processing of primary products; development of light/essential industries first",
        "Problems: lack of capital and technology; inadequate power/infrastructure; small domestic market; skilled-labour shortage; competition from imports; remedy: investment incentives, training, regional (ECOWAS) markets"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Topics 15–16:" },
      { k: "bul", items: [
        "15. Agriculture: structure (e.g. food crops, export crops, livestock, fisheries); systems of agriculture (peasant, commercial, co-operative and state farming); importance of agriculture to the national economy; marketing of agricultural products (commodity boards); agricultural policies (minimum agricultural prices); problems of agriculture and remedies",
        "16. Industrialization: meaning and types of industry; definition of industrial concepts — plant, firm, industry and industrial estates; location of industry, localization; role of industrialization in economic development; strategies of industrialization; problems of industrialization; the link between agricultural and industrial development"
      ] }
    ]
  },
  /* =============== E9 · NATIONAL INCOME, MONEY & INFLATION =============== */
  {
    grade: 12, sem: "Two", icon: "💵", period: "E9",
    title: "National Income, Money & Inflation",
    subtitle: "GDP, GNP, NNP · methods of measuring national income · money: definition, functions, supply and demand · inflation: causes, effects, control",
    note: "Topics 17–18: the concept and measurement of national income, and money (definition, functions, supply and demand) with inflation.",
    objectives: [
      "Define the major national income concepts (GDP, GNP, NNP, etc.) and the different ways of measuring national income and their problems",
      "State the uses and limitations of national income data, and the trends and structure of national income",
      "Define money and describe its historical development (barter and its problems), types, characteristics and functions",
      "Explain the supply of and demand for money, the value of money and the price level",
      "Define inflation and state its types, causes, effects and control"
    ],
    terms: [
      { t: "National income", d: "The total value of goods and services produced by a country's resources in a year.", x: "Liberia's GDP" },
      { t: "Gross Domestic Product (GDP)", d: "The total value of final goods and services produced WITHIN a country in a year, by residents and non-residents alike.", x: "Production inside Liberia" },
      { t: "Gross National Product (GNP)", d: "The total value of goods and services produced by a country's OWN factors of production, whether at home or abroad.", x: "GDP ± net factor income from abroad" },
      { t: "Net National Product (NNP)", d: "GNP minus depreciation (consumption of fixed capital).", x: "GNP − depreciation" },
      { t: "Methods of measurement", d: "The output (production) method, the income method and the expenditure method — each should give the same national income.", x: "Summing C + I + G + (X − M)" },
      { t: "Money", d: "Anything generally accepted as a medium of exchange and a store of value.", x: "Liberian dollars" },
      { t: "Barter", d: "The direct exchange of goods for goods, without money — inefficient (the 'double coincidence of wants').", x: "Trading fish for rice" },
      { t: "Functions of money", d: "Medium of exchange, unit of account (measure of value), store of value, and standard of deferred payment.", x: "Using money to buy, price, save and pay debts" },
      { t: "Supply of money", d: "The total amount of money in circulation (controlled by the central bank).", x: "The money supply" },
      { t: "Demand for money", d: "The desire to hold money for transactions, precautionary and speculative motives.", x: "Holding cash for spending" },
      { t: "Value of money", d: "The purchasing power of money — the inverse of the price level; more money → lower value (higher prices).", x: "$1 buys less when prices rise" },
      { t: "Inflation", d: "A sustained rise in the general price level (a fall in the value of money).", x: "Prices rising each year" },
      { t: "Demand-pull inflation", d: "Inflation caused by excess demand ('too much money chasing too few goods').", x: "A surge in spending" },
      { t: "Cost-push inflation", d: "Inflation caused by rising production costs (wages, raw materials) being passed on to prices.", x: "A rise in oil prices" },
      { t: "Hyperinflation", d: "A very rapid and out-of-control rise in prices.", x: "Prices doubling in a month" }
    ],
    tf: [
      { s: "GDP measures production within a country regardless of the nationality of the producers.", a: "True", why: "Gross Domestic Product — produced within the country." },
      { s: "Barter is more efficient than using money because it requires a double coincidence of wants.", a: "False", why: "Barter's problem is the double coincidence of wants — making it LESS efficient than money." },
      { s: "The value of money is inversely related to the price level.", a: "True", why: "Supply of and demand for money, value of money and the price level." },
      { s: "Cost-push inflation is caused by a rise in production costs.", a: "True", why: "Inflation — causes: demand-pull and cost-push." }
    ],
    mcq: [
      { q: "Gross Domestic Product (GDP) is the value of final goods and services produced:", o: ["by a country's residents anywhere", "within a country in a year", "by foreigners only", "in the agricultural sector only"], a: 1, why: "GDP — produced WITHIN the country." },
      { q: "Net National Product is GNP minus:", o: ["taxes", "depreciation", "wages", "imports"], a: 1, why: "NNP = GNP − depreciation (consumption of fixed capital)." },
      { q: "The 'double coincidence of wants' is a problem of:", o: ["money", "barter", "inflation", "deflation"], a: 1, why: "Barter requires both parties to want what the other has." },
      { q: "Which of the following is a function of money?", o: ["production of goods", "medium of exchange", "determination of supply", "creation of jobs"], a: 1, why: "Functions: medium of exchange, unit of account, store of value, standard of deferred payment." },
      { q: "A sustained rise in the general price level is called:", o: ["deflation", "inflation", "depreciation", "deregulation"], a: 1, why: "Inflation — a sustained rise in the general price level." },
      { q: "'Too much money chasing too few goods' describes:", o: ["cost-push inflation", "demand-pull inflation", "hyperinflation only", "deflation"], a: 1, why: "Demand-pull inflation — excess demand." },
      { q: "A rise in wages and raw-material costs that is passed on to consumers causes:", o: ["demand-pull inflation", "cost-push inflation", "deflation", "a fall in GDP"], a: 1, why: "Cost-push inflation — rising production costs." }
    ],
    essay: [
      { q: "Define GDP, GNP and NNP. Explain the three methods of measuring national income, and state two problems/limitations of national income statistics.", marks: 12, outline: [
        "GDP — the total value of final goods and services produced within a country in a year; GNP — the total value produced by a country's own factors of production (at home and abroad) = GDP + net factor income from abroad; NNP — GNP minus depreciation",
        "Three methods: (1) Output/production method — sum of the value added by all industries; (2) Income method — sum of all factor incomes (wages, rent, interest, profit); (3) Expenditure method — sum of final expenditure: GDP = C + I + G + (X − M)",
        "All three should in principle give the same total (the circular flow)",
        "Problems/limitations: double counting (if intermediates are included); unrecorded/informal sector and illegal activities; difficulty in measuring non-market goods; changes in quality; seasonal and regional variations; GDP does not measure welfare/inequality/environment"
      ] },
      { q: "(a) Define inflation and distinguish demand-pull from cost-push inflation. (b) State four effects of inflation. (c) State four methods of controlling inflation.", marks: 10, outline: [
        "(a) Inflation — a sustained rise in the general price level (a fall in the value of money); Demand-pull — caused by excess demand ('too much money chasing too few goods'); Cost-push — caused by rising production costs (wages, raw materials) passed on to prices",
        "(b) Effects: fall in the purchasing power of money (savers lose); uncertainty discouraging investment/saving; redistribution of income (debtors gain, creditors lose); rising unemployment (stagflation); fall in the standard of living of fixed-income earners",
        "(c) Control: monetary policy — raise interest rates, open-market sales of securities, raise reserve requirements (reduce the money supply); Fiscal policy — raise taxes, cut government spending (reduce demand); Income/wage controls — wage and price controls; Supply-side measures — increase production, reduce costs; Foreign-exchange policy",
        "Types of inflation also: demand-pull, cost-push, hyperinflation; the value of money is the inverse of the price level"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Topics 17–18:" },
      { k: "bul", items: [
        "17. National income: meaning of major national income concepts e.g. Gross Domestic Product, Gross National Product, Net National Product, etc.; different ways of measuring national income and their problems; uses and limitations of national income data; trends and structure of national income",
        "18. Money and inflation: money — definition and historical development — barter and its problems, types, characteristics, functions; supply of and demand for money, value of money and the price level; (b) Inflation — meaning, types, causes, effects and control"
      ] }
    ]
  },
  /* =============== E10 · FINANCIAL INSTITUTIONS & PUBLIC FINANCE =============== */
  {
    grade: 12, sem: "Two", icon: "🏦", period: "E10",
    title: "Financial Institutions & Public Finance",
    subtitle: "Central, commercial, development, merchant banks · insurance, building societies · money and capital markets · fiscal policy, taxation, public expenditure, budget, national debt",
    note: "Topics 19–20: financial institutions and the money and capital markets, and public finance (fiscal policy, taxation, public expenditure, the budget and the national debt).",
    objectives: [
      "Describe the types of financial institutions (traditional, central bank, commercial bank, development bank, merchant bank, insurance companies, building societies) and their development and functions",
      "Distinguish the money market from the capital market and state their types and functions",
      "Explain fiscal policy and the objectives of public finance, and the sources of government revenue",
      "Distinguish direct from indirect taxation; state the objectives, merits, demerits and incidence of taxes; the canons of taxation; rates (proportional, progressive, regressive)",
      "Describe the composition (recurrent and capital) and effects of public expenditure, the government budget and the national debt"
    ],
    terms: [
      { t: "Central bank", d: "The government's bank and the banker to commercial banks — issues currency, controls the money supply, manages foreign reserves and the exchange rate.", x: "The central bank of Liberia" },
      { t: "Commercial bank", d: "A bank that accepts deposits and gives loans to the public, providing payment services.", x: "Your savings account" },
      { t: "Development bank", d: "A long-term lender for development projects and industries.", x: "Financing a factory" },
      { t: "Merchant bank", d: "A bank providing services for trade finance, investment and advisory (especially international trade).", x: "Trade finance, letters of credit" },
      { t: "Insurance company", d: "An institution that pools risk, providing protection against loss in exchange for premiums.", x: "Life/fire insurance" },
      { t: "Building society", d: "A savings institution that helps members save for and finance housing.", x: "Mortgage savings" },
      { t: "Money market", d: "The market for short-term funds (less than a year) — treasury bills, call money, short-term loans.", x: "90-day treasury bills" },
      { t: "Capital market", d: "The market for long-term funds — stocks (shares) and bonds/debentures.", x: "The stock exchange" },
      { t: "Fiscal policy", d: "The government's use of taxation and public expenditure to influence the economy.", x: "Cutting taxes to stimulate demand" },
      { t: "Direct tax", d: "A tax levied directly on income or wealth, paid by the person on whom it is imposed.", x: "Income tax, property tax" },
      { t: "Indirect tax", d: "A tax levied on goods and services, often passed on to the consumer.", x: "VAT, import duties, excise" },
      { t: "Incidence of tax", d: "Who actually bears the burden of a tax (which may differ from who pays it).", x: "A sales tax's incidence falls on the buyer" },
      { t: "Progressive tax", d: "A tax rate that rises as the taxpayer's income rises.", x: "A higher % on higher incomes" },
      { t: "Proportional (flat) tax", d: "A tax at the same rate regardless of income.", x: "10% on everyone" },
      { t: "Regressive tax", d: "A tax that takes a larger share of the income of the poor than of the rich.", x: "A flat tax on basic goods" },
      { t: "Public expenditure", d: "Government spending — recurrent (day-to-day: wages, maintenance) and capital (development: roads, hospitals).", x: "The budget's capital vote" },
      { t: "Government budget", d: "The annual statement of expected government revenue and planned expenditure.", x: "A balanced/surplus/deficit budget" },
      { t: "National debt", d: "The total amount the government owes (accumulated deficits), financed by borrowing (internal and external).", x: "Government bonds" }
    ],
    tf: [
      { s: "The central bank is the banker to commercial banks and the government.", a: "True", why: "Central Bank — a type of financial institution with developmental and regulatory functions." },
      { s: "A direct tax is one whose burden can be passed on to another person.", a: "False", why: "A direct tax is paid by the person on whom it is imposed; an INDIRECT tax can be passed on (e.g. to the consumer)." },
      { s: "The money market deals in long-term funds such as shares.", a: "False", why: "The money market is for SHORT-TERM funds; the CAPITAL market is for long-term funds (shares, bonds)." },
      { s: "A progressive tax takes a higher percentage from higher incomes.", a: "True", why: "Rates of taxation — proportional, progressive and regressive." }
    ],
    mcq: [
      { q: "The institution that issues currency and controls the money supply is the:", o: ["commercial bank", "central bank", "development bank", "merchant bank"], a: 1, why: "Central bank — issues currency, controls the money supply." },
      { q: "A bank that lends long-term for development projects is a:", o: ["commercial bank", "development bank", "central bank", "building society"], a: 1, why: "Development bank — long-term development finance." },
      { q: "The market for long-term funds (shares and bonds) is the:", o: ["money market", "capital market", "commodity market", "labour market"], a: 1, why: "Capital market — long-term funds." },
      { q: "Income tax is an example of a:", o: ["direct tax", "indirect tax", "sales tax", "tariff"], a: 0, why: "Direct tax — levied on income, paid by the person on whom imposed." },
      { q: "Value Added Tax (VAT) on goods is an example of a:", o: ["direct tax", "indirect tax", "progressive tax", "capital tax"], a: 1, why: "Indirect tax — on goods, passed on to the consumer." },
      { q: "A tax rate that rises as income rises is:", o: ["proportional", "progressive", "regressive", "flat"], a: 1, why: "Progressive taxation." },
      { q: "Spending on the construction of a new hospital is:", o: ["recurrent expenditure", "capital expenditure", "depreciation", "a tax"], a: 1, why: "Capital expenditure — development spending (recurrent = day-to-day, e.g. wages)." }
    ],
    essay: [
      { q: "Describe the functions of (a) the central bank and (b) a commercial bank. Distinguish the money market from the capital market, giving two instruments of each.", marks: 10, outline: [
        "(a) Central bank: issues and controls the currency; banker to the government and to commercial banks; controls the money supply and credit (monetary policy); manages foreign-exchange reserves and the exchange rate; lender of last resort; supervises the financial system",
        "(b) Commercial bank: accepts deposits (savings, current) from the public; gives loans and overdrafts; provides payment/transfer services (cheques, transfers); mobilizes savings for investment",
        "Money market — short-term funds (less than a year); instruments: treasury bills, call money (overnight loans), short-term certificates of deposit, commercial paper",
        "Capital market — long-term funds; instruments: shares (equity), bonds/debentures, long-term loans; the stock exchange"
      ] },
      { q: "(a) Distinguish direct from indirect taxation with two examples of each. (b) Explain the terms: incidence of tax, progressive, proportional and regressive tax. (c) State the composition of public expenditure and the meaning of the national debt.", marks: 12, outline: [
        "(a) Direct tax — levied on and paid by the person on whom imposed (income tax, property tax); Indirect tax — levied on goods/services, often passed on to the consumer (VAT, import duties, excise duties)",
        "(b) Incidence of tax — who ultimately bears the burden (which may differ from the statutory payer, e.g. a seller who passes a tax on to the buyer); Progressive — the rate rises with income; Proportional (flat) — the same rate at all income levels; Regressive — takes a larger share of the income of the poor than of the rich",
        "(c) Public expenditure — recurrent expenditure (day-to-day: wages, salaries, maintenance, interest) and capital expenditure (development: roads, bridges, hospitals, equipment); National debt — the total accumulated borrowing of the government (internal and external), financed by issuing bonds and borrowing from the central bank/abroad",
        "Objectives of taxation: to raise revenue, to redistribute income, to correct externalities, to stabilize the economy; canons of taxation: equity, certainty, convenience, economy"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Topics 19–20:" },
      { k: "bul", items: [
        "19. Financial institutions: types (traditional, central bank, commercial bank, development bank, merchant bank, and insurance companies, building societies); development and functions of financial institutions; money and capital markets — meaning, types and functions",
        "20. Public finance: fiscal policy and objectives of public finance; sources of government revenue; taxation — types (direct and indirect), objectives, merits, demerits and incidence; principles/canons of taxation; rates of taxation (proportional, progressive and regressive); direct and indirect taxation — incidence and effects of taxes; composition/structure of public expenditure (recurrent and capital expenditure); effects of public expenditure; government budget and the national debt"
      ] }
    ]
  },
  /* =============== E11 · ECONOMIC DEVELOPMENT & PLANNING =============== */
  {
    grade: 12, sem: "Two", icon: "📈", period: "E11",
    title: "Economic Development & Planning",
    subtitle: "Growth vs development · characteristics and problems of developing countries · elements, objectives and types of plans",
    note: "Topic 21: the meaning of economic development, its distinction from growth, and economic planning.",
    objectives: [
      "Define economic development and distinguish it from economic growth",
      "Describe the characteristics and problems of developing countries",
      "Explain the elements of development planning: the objectives of planning and the problems of planning",
      "Identify the types of plans (short-term, medium-term, perspective/long-term, rolling plan, etc.)"
    ],
    terms: [
      { t: "Economic development", d: "A sustained improvement in a country's standard of living and the quality of life — not just growth in output, but structural change, redistribution, poverty reduction and institutional progress.", x: "Rising incomes, better health and education" },
      { t: "Economic growth", d: "An increase in a country's real output (GDP/GNP) over time.", x: "GDP rising 5% a year" },
      { t: "Growth vs development", d: "Growth is a quantitative rise in output; development is growth PLUS qualitative improvements (equity, institutions, welfare). A country can grow without developing.", x: "Growth that benefits only the rich" },
      { t: "Developing country", d: "A country with a low per-capita income, a large primary sector, rapid population growth, and under-developed industry and infrastructure.", x: "Most West African countries" },
      { t: "Characteristics of developing countries", d: "Low per-capita income; heavy dependence on agriculture/primary exports; rapid population growth; low savings and capital formation; under-development of industry; poor infrastructure; high unemployment; wide income inequality; dependence on imports and foreign aid.", x: "A one-crop economy" },
      { t: "Economic planning", d: "The deliberate, coordinated effort by the government to allocate resources and set targets to achieve development objectives.", x: "A national development plan" },
      { t: "Objectives of planning", d: "To accelerate growth, reduce poverty and inequality, achieve full employment, balance regional development, build infrastructure, and stabilize the economy.", x: "Raising living standards" },
      { t: "Problems of planning", d: "Lack of reliable data; shortage of skilled planners and capital; political interference; unrealistic targets; poor implementation and coordination.", x: "Plans that are not implemented" },
      { t: "Short-term plan", d: "A plan covering a short period (e.g. one year).", x: "An annual plan" },
      { t: "Medium-term plan", d: "A plan covering a few years (e.g. 3–5 years).", x: "A 5-year plan" },
      { t: "Perspective (long-term) plan", d: "A plan covering a long horizon (e.g. 10–20 years) setting the broad direction.", x: "A 20-year development vision" },
      { t: "Rolling plan", d: "A plan in which a new period is added as the first period expires, keeping the plan length constant.", x: "A 5-year plan updated each year" }
    ],
    tf: [
      { s: "Economic growth is the same thing as economic development.", a: "False", why: "Distinction between economic growth (rise in output) and development (growth + qualitative improvement in living standards)." },
      { s: "A characteristic of developing countries is a heavy dependence on the primary (agricultural) sector.", a: "True", why: "Characteristics and problems of developing countries." },
      { s: "A rolling plan keeps a constant length by adding a new period as the first expires.", a: "True", why: "Types of plans — rolling plan." },
      { s: "A lack of reliable data is a problem of planning.", a: "True", why: "Elements of development planning — objectives of planning and problems of planning." }
    ],
    mcq: [
      { q: "A rise in a country's real GDP is:", o: ["economic development only", "economic growth", "neither", "inflation"], a: 1, why: "Economic growth — an increase in real output." },
      { q: "Which of the following is a characteristic of a developing country?", o: ["high per-capita income", "heavy dependence on primary exports", "high savings rate", "a fully developed industrial base"], a: 1, why: "Characteristics of developing countries." },
      { q: "The main difference between growth and development is that development also includes:", o: ["a rise in GDP", "qualitative improvements such as equity and welfare", "inflation", "a larger population"], a: 1, why: "Growth is quantitative; development adds qualitative improvement in living standards." },
      { q: "Economic planning is:", o: ["left entirely to the market", "the deliberate, coordinated allocation of resources by the government to achieve development objectives", "only for socialist countries", "the same as the national budget"], a: 1, why: "Elements of development planning." },
      { q: "A plan that adds a new year as the first year expires is a:", o: ["perspective plan", "rolling plan", "short-term plan", "fixed plan"], a: 1, why: "Rolling plan — keeps a constant length." },
      { q: "A perspective plan is:", o: ["a one-year plan", "a long-term plan (e.g. 10–20 years)", "a plan with no targets", "a plan for one region only"], a: 1, why: "Perspective (long-term) plan." },
      { q: "Which of the following is a problem of planning?", o: ["too much data", "shortage of skilled planners and capital", "an over-abundance of targets", "excessive implementation"], a: 1, why: "Problems of planning — data, skills, capital, implementation." }
    ],
    essay: [
      { q: "(a) Define economic development and distinguish it from economic growth. (b) State five characteristics of developing countries. (c) Explain the elements of development planning: the objectives of planning and two problems of planning.", marks: 12, outline: [
        "(a) Economic development — a sustained improvement in living standards and quality of life (not just output); Economic growth — an increase in real output (GDP); Growth is a necessary but not sufficient condition for development — development adds structural change, equity, poverty reduction and institutional progress",
        "(b) Characteristics: low per-capita income; heavy dependence on agriculture/primary exports; rapid population growth; low savings and capital formation; under-development of industry; poor infrastructure; high unemployment; wide income inequality; dependence on imports/aid",
        "(c) Elements of planning: the objectives — accelerate growth, reduce poverty and inequality, achieve full employment, balance regional development, build infrastructure, stabilize the economy; Problems — lack of reliable data; shortage of skilled planners and capital; political interference; unrealistic targets; poor implementation and coordination"
      ] },
      { q: "Explain the types of economic plans: short-term, medium-term, perspective (long-term) and rolling plans. Give an example of the time horizon for each.", marks: 10, outline: [
        "Short-term plan — covers a short period, typically one year (an annual plan); used for current operations and adjustments",
        "Medium-term plan — covers a few years, typically 3–5 years (a 5-year development plan); the common planning horizon for many countries",
        "Perspective (long-term) plan — covers a long horizon, typically 10–20 years (a development vision); sets the broad strategic direction and long-run goals",
        "Rolling plan — a plan of fixed length (e.g. 5 years) in which a new period is added as the first period expires, so the plan is continuously updated; combines the review of past performance with new targets",
        "Note: plans can also be classified by scope (national, sectoral, regional) and by degree of detail (directive vs indicative)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Topic 21 (Economic Development and Planning):" },
      { k: "bul", items: [
        "Meaning of economic development; distinction between economic growth and development; characteristics and problems of developing countries; elements of development planning (objectives of planning, and problems of planning); types of plans (short term, medium term, perspective or long term, rolling plan, etc.)"
      ] }
    ]
  },
  /* =============== E12 · INTERNATIONAL TRADE & BALANCE OF PAYMENTS =============== */
  {
    grade: 12, sem: "Two", icon: "🚢", period: "E12",
    title: "International Trade & Balance of Payments",
    subtitle: "Basis of trade, absolute and comparative advantage · terms of trade · commercial policy, tariffs · balance of payments, disequilibrium, adjustments",
    note: "Topic 22: international trade (basis, advantage, terms of trade, commercial policy, West African trade) and the balance of payments (components, disequilibrium, adjustments, financing).",
    objectives: [
      "Explain the differences between domestic and international trade, and the basis of international trade",
      "Distinguish absolute from comparative cost advantage, and define and measure the terms of trade",
      "State the objectives of commercial policy and its instruments — tariffs (types) and direct control",
      "Describe the role of money in international transactions, the meaning and components of the balance of payments, and balance of payments disequilibrium",
      "Explain balance-of-payments adjustments (exchange-rate policy, exchange control, monetary and fiscal policies) and financing (reserves, international borrowing)"
    ],
    terms: [
      { t: "International trade", d: "The exchange of goods and services between countries.", x: "Exporting cocoa, importing rice" },
      { t: "Absolute advantage", d: "The ability of a country to produce a good using fewer resources (more efficiently) than another country (Adam Smith).", x: "Country A makes cloth more cheaply" },
      { t: "Comparative advantage", d: "The ability of a country to produce a good at a lower opportunity cost than another (David Ricardo) — the basis of trade even without absolute advantage.", x: "Specializing in the good with the lower opportunity cost" },
      { t: "Terms of trade", d: "The ratio of a country's export prices to its import prices: ToT = (index of export prices / index of import prices) × 100.", x: "Improving terms of trade = better export prices relative to imports" },
      { t: "Commercial policy", d: "The government's policy on international trade, using instruments to promote or restrict trade.", x: "Protecting infant industries" },
      { t: "Tariff", d: "A tax on imports (or exports); types: ad valorem (a % of value), specific (a fixed amount per unit), and compound.", x: "A 10% duty on shoes" },
      { t: "Direct control", d: "Non-tariff restrictions on trade — quotas, import licenses, embargoes, exchange controls.", x: "An import quota on cars" },
      { t: "Balance of payments (BoP)", d: "A systematic record of a country's economic transactions with the rest of the world over a period.", x: "Liberia's BoP statement" },
      { t: "Current account", d: "The BoP component recording trade in goods and services and unilateral transfers.", x: "Visible and invisible trade" },
      { t: "Capital account", d: "The BoP component recording flows of capital (investment, borrowing, reserves).", x: "Foreign investment inflows" },
      { t: "Visible trade", d: "Trade in physical goods (imports and exports of goods).", x: "Cocoa exports" },
      { t: "Invisible trade", d: "Trade in services (transport, insurance, tourism, interest, profits).", x: "Shipping services" },
      { t: "BoP disequilibrium", d: "A persistent deficit (expenditure on imports > receipts from exports) or surplus in the balance of payments.", x: "A chronic current-account deficit" },
      { t: "Exchange-rate policy", d: "Using devaluation (or revaluation) of the currency to improve the BoP.", x: "Devaluing the dollar to boost exports" }
    ],
    tf: [
      { s: "A country can gain from trade even if it has no absolute advantage, provided it has a comparative advantage.", a: "True", why: "Absolute and comparative cost advantage — the basis of international trade (Ricardo)." },
      { s: "The terms of trade is the ratio of a country's export prices to its import prices.", a: "True", why: "Terms of trade (definition and measurement)." },
      { s: "An ad valorem tariff is a fixed amount charged per unit of import.", a: "False", why: "An ad valorem tariff is a percentage of the value; a SPECIFIC tariff is a fixed amount per unit." },
      { s: "The balance of payments records a country's transactions with the rest of the world.", a: "True", why: "Meaning and components of the balance of payments." }
    ],
    mcq: [
      { q: "The ability to produce a good at a lower opportunity cost than another country is:", o: ["absolute advantage", "comparative advantage", "terms of trade", "monopoly"], a: 1, why: "Comparative cost advantage (Ricardo)." },
      { q: "If a country's export prices rise faster than its import prices, its terms of trade:", o: ["deteriorate", "improve", "stay the same", "become negative"], a: 1, why: "Terms of trade = export prices / import prices — a rise means an improvement." },
      { q: "A tax levied as a percentage of the value of an import is an:", o: ["specific tariff", "ad valorem tariff", "embargo", "quota"], a: 1, why: "Ad valorem — a % of value; specific — a fixed amount per unit." },
      { q: "Trade in services such as shipping and insurance is called:", o: ["visible trade", "invisible trade", "internal trade", "capital trade"], a: 1, why: "Invisible trade — services; visible trade — physical goods." },
      { q: "The balance of payments records:", o: ["only a country's exports", "a country's transactions with the rest of the world", "only government spending", "domestic trade"], a: 1, why: "Meaning of the balance of payments." },
      { q: "Devaluing a country's currency to improve its balance of payments is an example of:", o: ["exchange-rate policy", "exchange control", "fiscal policy", "a tariff"], a: 0, why: "Balance of payments adjustments — exchange-rate policy." },
      { q: "A persistent excess of imports over exports is a balance of payments:", o: ["surplus", "deficit (disequilibrium)", "equilibrium", "credit"], a: 1, why: "Balance of payments disequilibrium — a deficit." }
    ],
    essay: [
      { q: "(a) Explain the basis of international trade, distinguishing absolute from comparative cost advantage. (b) Define the terms of trade and explain how it is measured. (c) State two objectives of commercial policy and two instruments (one tariff and one direct control) with an example of each.", marks: 12, outline: [
        "(a) Basis of trade: countries trade because they differ in resource endowments and costs; Absolute advantage (Smith) — producing a good more efficiently (with fewer resources) than another country; Comparative advantage (Ricardo) — producing a good at a lower opportunity cost; a country should specialize in the good in which it has a comparative advantage and trade, so both gain even if one has no absolute advantage",
        "(b) Terms of trade — the ratio of the index of a country's export prices to the index of its import prices: ToT = (export price index / import price index) × 100; an increase means the country can buy more imports with the same exports (an improvement)",
        "(c) Objectives of commercial policy: to protect infant industries, to correct a BoP deficit, to raise revenue, to protect domestic consumers, to promote exports; Instruments: Tariff — e.g. an ad valorem duty of 10% on imported cars (raises their price); Direct control — e.g. an import quota limiting the quantity of a good, or import licenses"
      ] },
      { q: "(a) Define the balance of payments and state its main components. (b) Explain what is meant by visible and invisible trade. (c) Describe two methods of correcting a balance of payments deficit.", marks: 10, outline: [
        "(a) Balance of payments — a systematic record of a country's economic transactions with the rest of the world over a period; Components: the current account (trade in goods and services + unilateral transfers) and the capital/financial account (flows of capital — investment, borrowing, reserve changes)",
        "(b) Visible trade — trade in physical goods (imports and exports of merchandise); Invisible trade — trade in services (transport, insurance, tourism, banking, interest and profits)",
        "(c) Correcting a deficit: (1) Exchange-rate policy — devalue the currency so exports become cheaper and imports dearer, boosting export earnings and cutting imports; (2) Monetary policy — raise interest rates/tighten credit to reduce domestic demand and imports, attracting capital inflows; (3) Fiscal policy — raise taxes/cut spending to reduce demand; (4) Exchange control — ration foreign exchange to prioritize essential imports; Financing — use reserves or borrow internationally (IMF, bilateral)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Topic 22 (International Trade and Balance of Payments):" },
      { k: "bul", items: [
        "(a) International trade: differences between domestic and international trade; the basis of international trade; absolute and comparative cost advantage; terms of trade (definition and measurement); commercial policy (objectives) and instruments — tariffs (types) and direct control; trend and structure of West African countries' external trade",
        "(b) Balance of payments: role of money in international transactions; meaning and components of the balance of payments; balance of payments disequilibrium; balance of payments adjustments (exchange-rate policy, exchange control, monetary and fiscal policies) and financing (the use of reserves and international borrowing)"
      ] }
    ]
  },
  /* =============== E13 · INTEGRATION, ORGANIZATIONS & NATURAL RESOURCES =============== */
  {
    grade: 12, sem: "Two", icon: "🌐", period: "E13",
    title: "Economic Integration, International Organizations & Natural Resources",
    subtitle: "Objectives, levels and features of integration · ECOWAS · OPEC, ECA, IMF, IBRD, AfDB, UNCTAD · development of major natural resources and their effects",
    note: "Topics 23–25: economic integration (ECOWAS), the development and role of international economic organizations, and the development of major natural resources in West Africa.",
    objectives: [
      "Explain the objectives, levels and features of economic integration, and the development and problems of economic integration in West Africa (ECOWAS)",
      "Describe the development and role of OPEC, ECA, IMF, IBRD, AfDB and UNCTAD, and their relevance to West African countries",
      "Explain the development of major natural resources (petroleum, gold, diamond, timber, groundnut, etc.) and their positive and negative effects on West African economies"
    ],
    terms: [
      { t: "Economic integration", d: "The process by which countries reduce barriers and coordinate economic policies to form a larger economic unit.", x: "ECOWAS member states trading more freely" },
      { t: "Free-trade area", d: "An integration level where members remove tariffs among themselves but keep their own external tariffs.", x: "A regional free-trade area" },
      { t: "Customs union", d: "A free-trade area PLUS a common external tariff against non-members.", x: "A deeper regional bloc" },
      { t: "Common market", d: "A customs union PLUS the free movement of factors of production (labour, capital) among members.", x: "Free movement of goods, labour and capital" },
      { t: "ECOWAS", d: "The Economic Community of West African States — a regional integration body promoting trade, movement and development among West African countries.", x: "Liberia is a member" },
      { t: "OPEC", d: "The Organization of the Petroleum Exporting Countries — a cartel coordinating the production and prices of oil.", x: "An oil-exporting country" },
      { t: "ECA", d: "The Economic Commission for Africa — a UN regional body promoting Africa's economic and social development.", x: "Regional economic policy advice" },
      { t: "IMF", d: "The International Monetary Fund — provides loans and policy advice to countries with balance-of-payments problems and monitors the global monetary system.", x: "A BoP loan to a country" },
      { t: "IBRD", d: "The International Bank for Reconstruction and Development (the World Bank) — provides long-term loans for development projects.", x: "Financing a dam or road" },
      { t: "AfDB", d: "The African Development Bank — provides finance for development in Africa.", x: "Regional infrastructure loans" },
      { t: "UNCTAD", d: "The UN Conference on Trade and Development — assists developing countries in trade, investment and development.", x: "Helping exporters diversify" },
      { t: "Natural resources", d: "Gifts of nature used in production — minerals (petroleum, gold, diamond), timber, arable land, water.", x: "Liberia's iron ore and rubber" },
      { t: "Resource development", d: "The exploration, extraction and processing of natural resources for economic use.", x: "Developing an oil field" },
      { t: "Dutch disease", d: "The phenomenon where a boom in one resource (e.g. oil) causes currency appreciation and undermines other sectors (agriculture, manufacturing).", x: "Oil revenues crowding out farming" }
    ],
    tf: [
      { s: "A customs union is a free-trade area with a common external tariff.", a: "True", why: "Levels of economic integration — free-trade area, customs union, common market." },
      { s: "ECOWAS is a regional economic integration body in West Africa.", a: "True", why: "Development and problems of economic integration in West Africa — ECOWAS." },
      { s: "The IMF primarily provides long-term loans for building roads and dams.", a: "False", why: "The IMF deals with balance-of-payments problems and the monetary system; the IBRD (World Bank) and AfDB provide long-term development loans." },
      { s: "The development of a natural resource can have both positive and negative effects on an economy.", a: "True", why: "Effects on West African economies — positive and negative." }
    ],
    mcq: [
      { q: "An integration level where members remove internal tariffs but keep separate external tariffs is a:", o: ["customs union", "free-trade area", "common market", "economic union"], a: 1, why: "Free-trade area — no internal tariffs, separate external tariffs." },
      { q: "The body that coordinates the production and prices of oil is:", o: ["ECA", "OPEC", "IMF", "AfDB"], a: 1, why: "OPEC — Organization of the Petroleum Exporting Countries." },
      { q: "The institution that lends to countries with balance-of-payments problems is the:", o: ["IMF", "AfDB", "OPEC", "UNCTAD"], a: 0, why: "IMF — balance-of-payments support and the monetary system." },
      { q: "The International Bank for Reconstruction and Development (IBRD) is also known as the:", o: ["World Bank", "IMF", "African Development Bank", "ECOWAS Bank"], a: 0, why: "IBRD — the World Bank — long-term development loans." },
      { q: "A boom in oil exports that causes the currency to appreciate and weakens agriculture is an example of:", o: ["a terms-of-trade improvement only", "Dutch disease", "comparative advantage", "a tariff"], a: 1, why: "Negative effect of resource development — resource curse/Dutch disease." },
      { q: "The UN body that assists developing countries in trade, investment and development is:", o: ["OPEC", "UNCTAD", "ECA", "IBRD"], a: 1, why: "UNCTAD — UN Conference on Trade and Development." },
      { q: "A deeper integration level that allows the free movement of both goods and factors of production is a:", o: ["free-trade area", "customs union", "common market", "a single tariff"], a: 2, why: "Common market — free movement of goods, labour and capital." }
    ],
    essay: [
      { q: "(a) Explain the objectives, levels and features of economic integration. (b) Describe the development and problems of economic integration in West Africa with reference to ECOWAS. (c) State two objectives of ECOWAS.", marks: 12, outline: [
        "(a) Objectives of integration: to expand trade, create larger markets, promote free movement of people and capital, achieve economies of scale, accelerate development, and strengthen bargaining power; Levels: free-trade area → customs union → common market → (economic union/money union); Features: removal of internal tariffs, common external tariff (customs union), free movement of factors (common market), harmonized policies",
        "(b) Development: ECOWAS was established to promote economic integration among West African states — it has established a customs union/free-trade area and promoted trade and movement; Problems: non-tariff barriers persist, differences in development levels and currencies, transport/infrastructure gaps, political tensions, and uneven benefits",
        "(c) Objectives: to promote trade among member states; to facilitate the free movement of persons, services and capital; to coordinate monetary and financial policies; to promote joint projects and development"
      ] },
      { q: "Describe the development and role of the following international economic organizations, and state their relevance to West African countries: (a) OPEC, (b) IMF, (c) IBRD (World Bank), (d) UNCTAD.", marks: 10, outline: [
        "(a) OPEC — coordinates the production and prices of oil among member countries; relevant to oil-exporting West African countries (stabilizing oil revenues, a source of foreign exchange)",
        "(b) IMF — monitors the global monetary system and provides loans and policy advice to countries with balance-of-payments problems; relevant to West African countries needing BoP support and macroeconomic stabilization",
        "(c) IBRD (World Bank) — provides long-term loans and technical assistance for development projects (infrastructure, agriculture, education); relevant to financing West Africa's development projects",
        "(d) UNCTAD — assists developing countries in trade, investment and development (diversifying exports, negotiating better terms); relevant to helping West African exporters diversify and improve terms of trade",
        "Relevance to West Africa generally: access to finance, technical assistance, a forum for trade negotiation, and support for structural adjustment and development"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Topics 23–25:" },
      { k: "bul", items: [
        "23. Economic integration: objectives, levels of and features; development and problems of economic integration in West Africa — ECOWAS",
        "24. International economic organizations: development and role of — OPEC, ECA, IMF, IBRD, AfDB, UNCTAD, etc.; relevance of such organizations to West African countries",
        "25. Major natural resources: development of major natural resources (petroleum, gold, diamond, timber, groundnut, etc.); effects on West African economies (positive and negative)"
      ] }
    ]
  }
  ]
};
window.WA_SUBJECTS.ec = window.WA_ec;
