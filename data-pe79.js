/* Curriculum data — Republic of Liberia, Junior High PHYSICAL EDUCATION, Grades 7–9
   Derived from the "Physical Education" Junior High curriculum guide (27 pp.),
   6 periods per grade.

   Every unit carries a `study[]` block list — the course text of the guide,
   rendered verbatim on the Study Notes page (see data-pe.js for the
   elementary half of the same subject). `**bold**` marks the key terms;
   table cells take no markup because the renderer escapes them.

   Same unit shape as the elementary PE_CURRICULUM so GEN_PE renders it unchanged:
     terms[] {t,d,x} · facts[] {q,a} · tf[] {s,a,why} · apply[] {q,a}
     · sort {title,groups} · compare {title,caption,items} · casestudy
     · project · activities[] · materials[] · assessment[]

   Per the project rule, the digital research links listed throughout the source
   guide (pecentral.org, internet4classrooms.com, icps.org, dictionary.com) are
   deliberately omitted: the pack must stay fully offline.
*/

var PE_CURRICULUM_79 = [

/* ================================ GRADE 7 ================================ */
{
  grade:7, period:"I", sem:"One", icon:"⚽",
  title:"Football",
  subtitle:"History, importance, rules and skills of the game",
  outcomes:["Learners are able to discuss the history and importance of football, and identify and apply the rules and skills of the game."],
  objectives:["Discuss the history and importance of football","Identify the skills of football","Apply the rules and skills of football"],
  note:"Football is played by two teams of <b>eleven players</b> each on a rectangular field, with the aim of putting the ball into the opponent's goal. A match lasts <b>90 minutes</b> in two halves of 45 minutes. Only the <b>goalkeeper</b> may handle the ball, and only inside his own penalty area.",
  study:[
    /* ---- course text: Semester One, Period I — Football (guide pp. 3) ---- */
    {k:"h3", t:"Definition and History of Football"},
    {k:"p", t:"**Football** (soccer) is a team game played by two sides of **eleven players** each on a rectangular field, with the aim of putting the ball into the opponents' goal. From old folk games it grew into the world's most popular sport; in Liberia it is the game of every town and village. Its **importance**: it builds fitness and strength, teaches teamwork and discipline, and unites communities."},
    {k:"rule"},
    {k:"h3", t:"The Rules of Football"},
    {k:"bul", items:["A match lasts **90 minutes** — two halves of 45 minutes.","Only the **goalkeeper** may handle the ball, and only inside his own penalty area.","When the ball crosses the touchline, play restarts with a **throw-in** — both hands over the head, both feet on the ground.","A foul by a defender inside his own area gives the attackers a **penalty kick** from the penalty spot.","A player beyond the second-last defender when the ball is played to him is **offside**, and the goal does not count."]},
    {k:"rule"},
    {k:"h3", t:"The Skills of Football"},
    {k:"p", t:"Identify and list the skills, then practise them through drills: **passing** (sending the ball to a teammate), **dribbling** (running with the ball close to the feet), **trapping** (bringing a moving ball under control), **shooting** (striking at goal) and **heading** (playing the ball with the forehead)."},
    {k:"rule"},
    {k:"h3", t:"Drill — the Penalty Kick"},
    {k:"p", t:"**The Penalty Kick drill** — the ball is placed on the penalty mark (the spot above the 6-yard box, inside the goalkeeper's area). The second learner stands between the posts as goalkeeper. On the sound of a whistle, the other learners kick the ball one after another until the entire class has gone through the practice drill. Repeat the exercise (drill) with all the other rules of football."}
  ],
  focus:["Definition and history of football","Importance of the game","The laws (rules) of football","Basic skills: passing, dribbling, shooting, heading, trapping","Officials and their duties","The penalty kick"],
  terms:[
    {t:"football", d:"a team game in which two sides of eleven try to score goals with the feet", x:"Football is the most popular sport in Liberia."},
    {t:"kick-off", d:"the kick from the centre that starts play", x:"The referee whistled for the kick-off."},
    {t:"dribbling", d:"moving the ball along with short touches of the feet while running", x:"He beat two defenders by dribbling."},
    {t:"passing", d:"sending the ball to a team mate", x:"Accurate passing keeps possession."},
    {t:"trapping", d:"bringing a moving ball under control", x:"She used her chest for trapping the ball."},
    {t:"heading", d:"playing the ball with the head", x:"He scored by heading the corner kick."},
    {t:"tackling", d:"taking the ball fairly from an opponent", x:"A clean tackling won the ball back."},
    {t:"offside", d:"being nearer the opponents' goal line than the ball and the second-last defender when the ball is played", x:"The goal was cancelled for offside."},
    {t:"penalty kick", d:"a free shot from the penalty spot, awarded for a foul in the penalty area", x:"He scored from the penalty kick."},
    {t:"free kick", d:"a kick awarded to a team after an opponent's foul", x:"The free kick was taken quickly."},
    {t:"throw-in", d:"restarting play with both hands over the head after the ball crosses the touchline", x:"She took the throw-in with both feet on the ground."},
    {t:"referee", d:"the official who controls the match and applies the laws", x:"The referee showed a yellow card."},
    {t:"goalkeeper", d:"the player allowed to handle the ball inside the penalty area", x:"The goalkeeper made a fine save."},
    {t:"foul", d:"an unfair act against an opponent, punished by a free kick", x:"Tripping an opponent is a foul."}
  ],
  facts:[
    {q:"How many players form a football team on the field?", a:"Eleven players, including the goalkeeper."},
    {q:"How long is a full football match?", a:"Ninety minutes, played in two halves of forty-five minutes."},
    {q:"Which player may handle the ball, and where?", a:"Only the goalkeeper, and only inside his or her own penalty area."},
    {q:"Name four basic skills of football.", a:"Passing, dribbling, trapping and shooting (also heading and tackling)."},
    {q:"When is a penalty kick awarded?", a:"When a defending player commits a direct free-kick foul inside his own penalty area."},
    {q:"How is play restarted when the ball crosses the touchline?", a:"By a throw-in, taken with both hands over the head and both feet on the ground."},
    {q:"Name three officials in a football match.", a:"The referee and the two assistant referees (linesmen); there is also a fourth official."},
    {q:"State three benefits of playing football.", a:"It builds cardiovascular fitness and strength, teaches teamwork and discipline, and provides healthy recreation."}
  ],
  tf:[
    {s:"A football team has eleven players on the field.", a:"true", why:"Ten outfield players plus the goalkeeper make eleven."},
    {s:"Any player may handle the ball inside the penalty area.", a:"false", why:"Only the goalkeeper may handle the ball, and only within his own penalty area."},
    {s:"A match is played in two halves of forty-five minutes.", a:"true", why:"That gives the standard ninety minutes of play."},
    {s:"A throw-in is taken with one hand.", a:"false", why:"It must be taken with both hands, from behind and over the head."},
    {s:"The referee has authority to caution a player.", a:"true", why:"The referee controls the match and may show yellow or red cards."},
    {s:"Warming up before a match is a waste of time.", a:"false", why:"Warming up raises the pulse and loosens the muscles, which prevents injury."}
  ],
  apply:[
    {q:"A defender deliberately holds an attacker inside his own penalty area. What is the decision?", a:"A penalty kick to the attacking team, and the defender may be cautioned."},
    {q:"Your team keeps losing the ball after receiving a pass. Which skill needs practice?", a:"Trapping — bringing the ball under control before playing it on."},
    {q:"Why should players never play on a field with broken glass or holes?", a:"Because it causes cuts, sprains and broken bones; the field must be inspected before play."},
    {q:"A team mate is angry and wants to strike an opponent who fouled him. What do you do?", a:"Calm him and let the referee deal with it; retaliation causes a sending-off and shows poor sportsmanship."},
    {q:"How can a small school without proper goal posts still practise football?", a:"By marking goals with poles, stones or cones and playing on a cleared, level space."}
  ],
  sort:{ title:"Football", groups:[
    {name:"Skills of the game", items:["Passing","Dribbling","Trapping","Heading"]},
    {name:"Restarts of play", items:["Kick-off","Throw-in","Corner kick","Goal kick"]},
    {name:"Fouls", items:["Tripping","Pushing","Holding","Handling the ball"]},
    {name:"Equipment", items:["Ball","Cones","Whistle","Boots"]}
  ]},
  compare:{ title:"Rules of football", caption:"Complete the table by explaining each rule or term.",
    items:[
      {p:"Kick-off", f:"Starts each half and restarts play after a goal, taken from the centre mark."},
      {p:"Throw-in", f:"Awarded when the ball crosses the touchline; both hands over the head, both feet on the ground."},
      {p:"Corner kick", f:"Awarded to the attacking team when a defender last touches the ball over his own goal line."},
      {p:"Penalty kick", f:"Awarded for a direct free-kick foul inside the penalty area; taken from the penalty spot."},
      {p:"Offside", f:"A player is offside if nearer the goal line than the ball and the second-last defender when the ball is played to him."},
      {p:"Yellow and red cards", f:"A yellow card cautions a player; a red card sends him off and the team plays with ten."}
    ]},
  casestudy:{ title:"The penalty-kick drill",
    text:"Coach Toe placed the ball on the penalty mark, about twelve yards from goal, and asked one learner to stand between the posts as goalkeeper. On the whistle, the learners took turns to strike the ball, one after another, until the whole class had gone through the drill. He told them to look at the corner of the goal, plant the non-kicking foot beside the ball, and strike with the inside of the boot rather than the toe. Learners who blasted the ball wildly were asked to slow down and place it instead. By the end of the session most of the class could put the ball on target.",
    questions:[
      {q:"From what distance is a penalty kick taken?", a:"From the penalty mark, about twelve yards from the goal line."},
      {q:"What three coaching points did the coach give?", a:"Look at the corner of the goal, plant the non-kicking foot beside the ball, and strike with the inside of the boot."},
      {q:"Why is striking with the inside of the boot better than the toe?", a:"It gives far more accuracy and control, while a toe-poke sends the ball wildly."},
      {q:"Why did the coach let every learner take a turn?", a:"So that the whole class practised the skill rather than only the best players, which is the purpose of a drill."}
    ]},
  project:{ title:"Football rules poster and skills log",
    brief:"Produce a rules poster and keep a record of your own skill practice.",
    steps:["Draw a football field and label the centre circle, penalty area, goal area and corner arcs.","List eight rules of the game beside the diagram.","Choose one skill and practise it for fifteen minutes on four different days.","Record what improved and what was still difficult each day.","Present the poster and report to the class."],
    criteria:["Field correctly drawn and labelled","Eight rules stated accurately","Four practice sessions genuinely recorded","Honest reflection on progress","Neat, clear presentation"]},
  activities:["Divide the class in two: one group discusses the history, importance and rules; the other lists the skills of the game","Take learners to the field and practise the penalty-kick drill on the whistle","Repeat drills for the other rules of football","Play a small-sided modified game applying the rules"],
  materials:["Football","Cones","Whistle","Physical Education handbook","Field marking materials"],
  assessment:["Individual presentation","Group work","Class participation","Practical skill demonstration","Written test on the rules"]
},
{
  grade:7, period:"II", sem:"One", icon:"🚭",
  title:"Substance Abuse",
  subtitle:"Alcohol, tobacco and drugs: effects on the body, the family and the community",
  outcomes:["Learners are able to list drugs commonly abused, explain the effects of tobacco and alcohol on health and the family, and state ways to prevent alcohol and drug abuse."],
  objectives:["Explain the effects of tobacco and alcohol abuse on your health","Discuss how alcohol affects the family","List some drugs commonly abused","State ways of preventing alcohol and drug abuse"],
  note:"<b>Ethyl alcohol</b> is formed by the chemical reaction of <b>fermenting sugar and yeast</b>. When a person drinks, the alcohol follows the same path as food through the digestive system, and about <b>20% is absorbed directly into the bloodstream from the stomach</b>. Its effect is measured as the <b>Blood Alcohol Level (BAL)</b> — the weight of alcohol per 100 units of blood, expressed as a percentage.",
  study:[
    /* ---- course text: Semester One, Period II — Substance Abuse (guide pp. 4-6) ---- */
    {k:"h3", t:"The Facts about Alcohol"},
    {k:"p", t:"**Ethyl alcohol** is a natural substance formed by the chemical reaction of fermenting sugar and yeast; **fermentation** is the process that produces alcohol by the action of yeast on sugar and starches. The source of sugar varies with the type of alcoholic drink."},
    {k:"p", t:"**How does alcohol work in the body?** When someone has a drink, the alcohol follows the same path that food does in the body, particularly the digestive system. About **20% of the alcohol is absorbed directly into the bloodstream from the stomach**."},
    {k:"rule"},
    {k:"h3", t:"Factors Affecting Alcohol in the Body"},
    {k:"p", t:"Alcohol's effect on the body is measured by the proportional weight of alcohol per 100 units of blood, expressed as a percentage, which is called **the blood alcohol level**. Four factors affect the amount of alcohol in a person's blood:"},
    {k:"num", items:["**The amount of alcohol** a person drinks — not the number of drinks","**Whether or not the person eats** before or while drinking","**How much the person weighs**","**How much time elapses** after drinking stops or between drinks"]},
    {k:"rule"},
    {k:"h3", t:"Alcohol — a Social Problem"},
    {k:"p", t:"Reasons young people — and even adults — give for drinking: to **escape pressure or problems**; to **feel better** or get over being sad or lonely; to **relax**; and to **gain more self-confidence**, to feel better about oneself. Each reason hides a lie: alcohol solves no problem; it multiplies them — in health, in the family budget, in violence and broken homes."},
    {k:"rule"},
    {k:"h3", t:"The Risk of Drug Abuse"},
    {k:"p", t:"**Drug use** is when a drug is taken when needed, as directed, and only for the purpose it is intended. **Drug misuse** is when a drug is used in a way that it is not intended — taking someone else's medicine or increasing the directed dosage are examples of misuse. **Drug abuse** is taking drugs in ways for which they are not medically intended, or using substances that are illegal or not intended to be taken into the body. The abuse of these drugs presents an additional serious health hazard: they are not controlled by any governing agency."},
    {k:"rule"},
    {k:"h3", t:"Stimulant Drugs"},
    {k:"p", t:"**Amphetamines** are stimulants used in medicine to reduce fatigue and drowsiness or to suppress the appetite. Amphetamines interfere with muscle control and body movement."},
    {k:"p", t:"**Cocaine** is a white powder made from the coca bush, which grows mainly in South America. It is a stimulant that causes an increased heartbeat and a rise in blood pressure and body temperature. It produces a feeling of euphoria and high energy — the euphoric lift is the feeling of being confident. **Regular use can lead to depression.**"}
  ],
  focus:["The facts about alcohol and how it works in the body","Factors affecting the level of alcohol in the body","Alcohol as a social problem","The risks of drug abuse","Stimulant drugs","Prevention of alcohol and drug abuse"],
  terms:[
    {t:"substance abuse", d:"the harmful or excessive use of alcohol, tobacco or drugs", x:"Substance abuse damages health and family life."},
    {t:"ethyl alcohol", d:"the alcohol in drinks, formed by fermenting sugar with yeast", x:"Ethyl alcohol is a depressant, not a stimulant."},
    {t:"fermentation", d:"the process that produces alcohol by the action of yeast on sugar and starch", x:"Fermentation turns sugar into alcohol."},
    {t:"blood alcohol level", d:"the weight of alcohol per 100 units of blood, given as a percentage", x:"The blood alcohol level shows how impaired a person is."},
    {t:"depressant", d:"a drug that slows down the working of the brain and body", x:"Alcohol is a depressant."},
    {t:"stimulant", d:"a drug that speeds up the working of the body", x:"Amphetamine is a stimulant."},
    {t:"amphetamine", d:"a stimulant used in medicine to reduce fatigue or suppress appetite", x:"Amphetamine interferes with muscle control and body movement."},
    {t:"cocaine", d:"a white powder made from the coca bush, a dangerous stimulant", x:"Cocaine is highly addictive."},
    {t:"nicotine", d:"the addictive drug found in tobacco", x:"Nicotine makes smoking hard to stop."},
    {t:"addiction", d:"a condition in which a person cannot stop using a substance", x:"Addiction destroys health and savings."},
    {t:"tolerance", d:"needing more of a substance to get the same effect", x:"Tolerance leads users to take larger doses."},
    {t:"withdrawal", d:"the painful symptoms felt when a user stops taking a drug", x:"Withdrawal makes quitting difficult without help."},
    {t:"rehabilitation", d:"treatment that helps a person recover from addiction", x:"Rehabilitation restores health and self-respect."},
    {t:"peer pressure", d:"the influence of friends on a person's behaviour", x:"Peer pressure often starts young people smoking."}
  ],
  facts:[
    {q:"What is ethyl alcohol and how is it formed?", a:"It is the alcohol in drinks, formed by the chemical reaction of fermenting sugar with yeast."},
    {q:"About how much alcohol is absorbed directly into the bloodstream from the stomach?", a:"About twenty per cent."},
    {q:"What does Blood Alcohol Level mean?", a:"The proportional weight of alcohol per 100 units of blood, expressed as a percentage."},
    {q:"Name the four factors that affect the amount of alcohol in a person's blood.", a:"The amount of alcohol drunk (not the number of drinks), whether the person ate before or while drinking, how much the person weighs, and how much time has passed since drinking stopped."},
    {q:"What is an amphetamine and what harm does it do?", a:"A stimulant used in medicine to reduce fatigue and drowsiness or suppress appetite; it interferes with muscle control and body movement."},
    {q:"What is cocaine and where does it come from?", a:"A white powder stimulant made from the coca bush, which grows mainly in South America."},
    {q:"State three effects of alcohol abuse on the family.", a:"It wastes the family's money, causes quarrels and violence, and leads to neglect of children and loss of employment."},
    {q:"Name three effects of tobacco use on health.", a:"It damages the lungs and causes chronic cough, it raises the risk of cancer and heart disease, and it reduces stamina for sport."},
    {q:"State four ways of preventing alcohol and drug abuse.", a:"Health education about the dangers, refusing peer pressure and choosing good friends, taking part in sport and useful activity, and seeking counselling or rehabilitation early."}
  ],
  tf:[
    {s:"Alcohol is a depressant, not a stimulant.", a:"true", why:"It slows down the working of the brain and the nervous system."},
    {s:"Eating before drinking has no effect on the blood alcohol level.", a:"false", why:"Whether a person eats before or while drinking is one of the four factors that affect the level."},
    {s:"Cocaine is made from the coca bush.", a:"true", why:"It is a white powder stimulant produced from that plant."},
    {s:"A heavier person and a lighter person who drink the same amount reach the same blood alcohol level.", a:"false", why:"Body weight is one of the four factors, so the lighter person reaches a higher level."},
    {s:"Nicotine in tobacco is addictive.", a:"true", why:"It creates dependence, which is why stopping smoking is so difficult."},
    {s:"Amphetamines improve muscle control.", a:"false", why:"They interfere with muscle control and body movement."}
  ],
  apply:[
    {q:"A friend offers you a cigarette and says everyone in the class smokes. What do you say?", a:"I refuse politely and firmly, say that it is not true that everyone smokes, and change the activity; I do not have to follow peer pressure."},
    {q:"Why is drinking especially dangerous for an athlete?", a:"Alcohol dehydrates the body, slows reaction time and impairs coordination and recovery, so performance and safety both suffer."},
    {q:"A man says he can drive safely because he only had 'a few' drinks. Why is he wrong?", a:"What matters is the amount of alcohol, not the number of drinks; alcohol slows reaction time and judgement even when the drinker feels normal."},
    {q:"How can a school help learners avoid substance abuse?", a:"By teaching the facts, running sports and clubs that occupy free time, offering counselling, and involving parents."},
    {q:"Name one healthy way to deal with stress instead of drinking.", a:"Physical exercise such as running or football, which relieves stress and improves mood without harming the body."}
  ],
  sort:{ title:"Substances and prevention", groups:[
    {name:"Depressants", items:["Alcohol","Sedatives"]},
    {name:"Stimulants", items:["Amphetamines","Cocaine","Nicotine","Caffeine"]},
    {name:"Effects on the family", items:["Wasted income","Quarrels and violence","Neglect of children","Loss of employment"]},
    {name:"Ways to prevent abuse", items:["Health education","Refusing peer pressure","Sport and recreation","Counselling"]}
  ]},
  compare:{ title:"Factors affecting alcohol in the body", caption:"Explain how each factor changes the blood alcohol level.",
    items:[
      {p:"Amount of alcohol drunk", f:"What counts is the quantity of alcohol, not the number of drinks; a strong drink raises the level faster."},
      {p:"Eating before or while drinking", f:"Food in the stomach slows absorption, so the level rises more slowly."},
      {p:"Body weight", f:"A lighter person reaches a higher blood alcohol level than a heavier person from the same amount."},
      {p:"Time since drinking stopped", f:"The body removes alcohol slowly over time, so the level falls only gradually."},
      {p:"Absorption route", f:"About 20% passes directly into the bloodstream from the stomach; the rest is absorbed further along."},
      {p:"Effect on the body", f:"As a depressant it slows judgement, reaction and coordination before the drinker feels drunk."}
    ]},
  casestudy:{ title:"Two brothers",
    text:"Sando and his elder brother Varney both left school at sixteen. Varney joined a group who drank palm wine daily behind the market. Within three years he had lost two jobs, quarrelled with his wife, and sold the family's zinc roofing to buy drink. Sando joined the community football club instead. He trains four evenings a week, was made assistant captain, and now coaches younger boys on Saturdays. When Varney's health broke down, it was Sando who took him to the clinic, where a counsellor began treatment and enrolled him in a rehabilitation programme.",
    questions:[
      {q:"List three consequences of Varney's drinking.", a:"He lost two jobs, quarrelled with his wife, and sold the family's roofing to pay for drink."},
      {q:"What did Sando do with his free time instead?", a:"He joined a football club, trained regularly, and coaches younger boys."},
      {q:"How does sport help protect young people from substance abuse?", a:"It occupies free time usefully, builds fitness and self-respect, and provides friends and role models who do not drink."},
      {q:"What help was available to Varney once he sought it?", a:"A clinic counsellor began treatment and enrolled him in a rehabilitation programme."}
    ]},
  project:{ title:"Anti-substance-abuse campaign",
    brief:"Design a campaign for your school against alcohol, tobacco and drug abuse.",
    steps:["Choose one substance: alcohol, tobacco or another commonly abused drug.","List five accurate facts about its effect on the body.","List three effects it has on the family or community.","Design a poster with a clear slogan and no frightening exaggeration.","Present the campaign to the class and answer their questions."],
    criteria:["Five accurate health facts","Three social effects stated","Clear, truthful slogan","No exaggeration or false claims","Confident presentation"]},
  activities:["Discuss the facts about alcohol and how it works in the body","Group research on stimulant drugs and their effects","Role play refusing peer pressure","Invite a health worker to speak on prevention"],
  materials:["Health and General Science books","Life Skills / Population Family Life Education resource book","Chalkboard and charts","Posters on drug and alcohol abuse"],
  assessment:["Individual presentation","Group work","Class participation","Poster campaign project","Written test"]
},
{
  grade:7, period:"III", sem:"One", icon:"🩹",
  title:"Health Care and Safety",
  subtitle:"Personal hygiene, common diseases, first aid and the treatment of wounds",
  outcomes:["Learners are able to state the meaning of personal hygiene and first aid, discuss the causes and prevention of common diseases, explain the principles of first aid and list safety rules."],
  objectives:["State the meaning of personal hygiene and first aid","Discuss the causes and prevention of common diseases","Discuss first aid and the types of injuries (wounds)","List safety and first aid measures for wounds","Discuss the process of treating minor wounds"],
  note:"<b>First aid</b> is the immediate help given to an injured or sick person before medical care arrives. Its aims are to <b>preserve life, prevent the condition worsening, and promote recovery</b>. To stop bleeding, apply direct pressure: place a thick clean cloth over the wound and press with the palm of your hand.",
  study:[
    /* ---- course text: Semester One, Period III — Health Care and Safety (guide pp. 7-8) ---- */
    {k:"h3", t:"Personal Hygiene — Common Diseases and their Prevention"},
    {k:"p", t:"**Personal hygiene** is the daily care of the body — bathing, clean clothing, clean food and safe water. Neglect of hygiene causes **common diseases** — skin infections, diarrhoea, worm infestations and fevers — and their **prevention** is the same everywhere: clean hands before eating, boiled or treated drinking water, covered food, and a clean home and compound."},
    {k:"rule"},
    {k:"h3", t:"First Aid — Definition and Importance"},
    {k:"p", t:"**First aid** is the immediate, temporary care given to a sick or injured person before medical help arrives. Its **importance**: quick, correct first aid saves lives, stops small injuries from becoming dangerous, and relieves pain until the victim reaches the clinic."},
    {k:"rule"},
    {k:"h3", t:"Types of Injuries (Wounds)"},
    {k:"bul", items:["**Abrasion** — skin scraped off by a rough surface","**Incision** — a clean cut made by a sharp edge","**Laceration** — a jagged tear in the flesh","**Puncture** — a deep, narrow wound from a pointed object","**Avulsion** — tissue torn partly or wholly away"]},
    {k:"rule"},
    {k:"h3", t:"First Aid for Wounds"},
    {k:"num", items:["**Stop the bleeding**","**Protect the wound from contamination and infection**","**Treat the victim for shock**","**Seek medical care immediately**"]},
    {k:"p", t:"To stop the bleeding, apply **direct pressure**: place a thick, clean cloth over the wound; place the palm of your hand over the cloth and press firmly; do **not** remove the cloth — if the blood soaks through the cloth, place another layer of cloth over the first one. Continue direct pressure until the bleeding stops."},
    {k:"rule"},
    {k:"h3", t:"Safety Rules and Measures"},
    {k:"bul", items:["Inspect the playing field for stones, holes and broken glass before every game","Warm up before exercise and cool down after","Use equipment correctly and report damaged equipment","Keep a stocked first aid kit at every practice and game","In any emergency, send for an adult or health worker at once"]}
  ],
  focus:["Personal hygiene","Common diseases and their prevention","Definition and importance of first aid","Types of injuries: abrasion, incision, laceration, puncture, avulsion","First aid for wounds","Safety rules"],
  terms:[
    {t:"personal hygiene", d:"keeping one's own body clean and healthy", x:"Personal hygiene prevents skin disease."},
    {t:"first aid", d:"immediate help given to an injured person before medical care arrives", x:"First aid can save a life."},
    {t:"abrasion", d:"a wound where the skin is scraped away", x:"He got an abrasion sliding on the field."},
    {t:"incision", d:"a clean cut made by a sharp edge such as a blade", x:"An incision bleeds freely."},
    {t:"laceration", d:"a rough, torn wound with jagged edges", x:"The laceration needed stitches."},
    {t:"puncture", d:"a deep narrow wound made by a pointed object", x:"A nail caused a puncture wound."},
    {t:"avulsion", d:"a wound in which tissue is torn away from the body", x:"An avulsion is a serious injury."},
    {t:"contamination", d:"the entry of dirt or germs into a wound", x:"Cover the wound to prevent contamination."},
    {t:"infection", d:"the growth of harmful germs in the body", x:"An untreated wound may develop an infection."},
    {t:"shock", d:"a dangerous fall in blood circulation after injury", x:"Keep the victim warm to treat for shock."},
    {t:"antiseptic", d:"a substance that kills germs on the skin", x:"Clean the cut with an antiseptic."},
    {t:"first aid kit", d:"a box of supplies for giving first aid", x:"Every school needs a first aid kit."},
    {t:"communicable disease", d:"a disease that can pass from one person to another", x:"Cholera is a communicable disease."},
    {t:"prevention", d:"action taken to stop a disease before it occurs", x:"Hand washing is cheap prevention."}
  ],
  facts:[
    {q:"What is personal hygiene?", a:"Keeping one's own body clean and healthy, by bathing, washing hands, brushing teeth and wearing clean clothes."},
    {q:"What is first aid and why is it important?", a:"It is the immediate help given to an injured or sick person before medical care arrives; it preserves life, prevents the condition from worsening and promotes recovery."},
    {q:"Name the five types of wounds studied.", a:"Abrasion, incision, laceration, puncture and avulsion."},
    {q:"State the four steps of first aid for a wound.", a:"Stop the bleeding, protect the wound from contamination and infection, treat the victim for shock, and seek medical care immediately."},
    {q:"How do you stop bleeding by direct pressure?", a:"Place a thick clean cloth over the wound and press the palm of your hand firmly over the cloth."},
    {q:"Name three common diseases and one way to prevent each.", a:"Malaria — sleep under a treated net; cholera or diarrhoea — drink safe water and wash hands; skin infection — bathe regularly and keep clothes clean."},
    {q:"Why must a wound be covered?", a:"To protect it from dirt and germs, which would cause infection."},
    {q:"Name four items that should be in a first aid kit.", a:"Bandages, gauze or clean cloth, antiseptic, adhesive plaster and scissors (any four)."}
  ],
  tf:[
    {s:"First aid replaces treatment by a doctor.", a:"false", why:"First aid is only the immediate help given before medical care; the victim must still seek medical attention."},
    {s:"An abrasion is a wound where the skin is scraped away.", a:"true", why:"That is exactly what distinguishes it from a cut or puncture."},
    {s:"Direct pressure with a clean cloth helps stop bleeding.", a:"true", why:"Pressure slows the flow of blood and allows clotting to begin."},
    {s:"A puncture wound is always harmless because it looks small.", a:"false", why:"It is narrow but deep, and can carry germs such as tetanus far into the tissue."},
    {s:"Washing hands before eating helps prevent disease.", a:"true", why:"It removes germs that would otherwise be swallowed with food."},
    {s:"You should treat a badly injured victim for shock.", a:"true", why:"Treating for shock is one of the four first aid steps; keep the victim warm, lying down and reassured."}
  ],
  apply:[
    {q:"A learner falls during a race and scrapes his knee, which is dirty and bleeding slightly. What do you do?", a:"Wash your hands, clean the abrasion gently with clean water and antiseptic, cover it with a sterile dressing, and report it so he can be checked."},
    {q:"A classmate steps on a rusty nail. Why is this more serious than it looks?", a:"It is a puncture wound; it is deep and narrow, carries germs inside, and risks tetanus, so medical care is needed."},
    {q:"Why should you avoid touching another person's blood with bare hands?", a:"Blood can carry infection, so use gloves or a clean cloth as a barrier to protect yourself and the victim."},
    {q:"How would you make a simple first aid kit for your class with little money?", a:"A clean box with clean cloth strips for dressings, soap, clean water, salt, adhesive plaster, scissors and a small notebook to record injuries."},
    {q:"State two safety rules that would prevent most injuries on your school field.", a:"Inspect and clear the field of glass, stones and holes before play, and warm up properly before any strenuous activity."}
  ],
  sort:{ title:"Health care and safety", groups:[
    {name:"Types of wounds", items:["Abrasion","Incision","Laceration","Puncture"]},
    {name:"First aid steps", items:["Stop the bleeding","Protect from contamination","Treat for shock","Seek medical care"]},
    {name:"Personal hygiene practices", items:["Bathing daily","Washing hands","Brushing teeth","Wearing clean clothes"]},
    {name:"First aid kit contents", items:["Bandage","Antiseptic","Plaster","Scissors"]}
  ]},
  compare:{ title:"Types of wounds and their care", caption:"Complete the table describing each wound and its first aid.",
    items:[
      {p:"Abrasion", f:"Skin scraped away; clean gently, remove grit, cover with a sterile dressing."},
      {p:"Incision", f:"A clean cut from a sharp edge; bleeds freely, so apply direct pressure and cover."},
      {p:"Laceration", f:"A rough torn wound with jagged edges; control bleeding and get medical care, as stitches are often needed."},
      {p:"Puncture", f:"Deep and narrow from a pointed object; do not probe it, cover it and seek medical care because of tetanus risk."},
      {p:"Avulsion", f:"Tissue torn away; control severe bleeding, preserve any detached tissue clean and cool, and get urgent medical help."},
      {p:"All wounds", f:"Wash your own hands first, avoid contact with blood, and record what happened."}
    ]},
  casestudy:{ title:"Bleeding on the field",
    text:"During an inter-class match, Kollie collided with a post and cut his forearm on a piece of jagged metal. Blood ran freely. The games master sent a learner for the first aid kit, put on gloves, and pressed a thick clean cloth firmly over the wound with the palm of his hand, raising the arm. When the bleeding slowed he covered the wound with a sterile dressing, laid Kollie down with his legs slightly raised and covered him with a cloth because he had begun to look pale and cold. He then arranged for Kollie to be taken at once to the clinic, and wrote the incident in the school register.",
    questions:[
      {q:"What type of wound did Kollie receive?", a:"A laceration — a rough torn wound with jagged edges, caused by the jagged metal."},
      {q:"How was the bleeding controlled?", a:"By direct pressure: a thick clean cloth pressed firmly with the palm over the wound, with the arm raised."},
      {q:"Why was Kollie laid down and covered when he became pale and cold?", a:"Those are signs of shock, and treating for shock is one of the four first aid steps."},
      {q:"Name two other correct actions the games master took.", a:"He wore gloves to avoid contact with blood, and he arranged immediate medical care and recorded the incident."}
    ]},
  project:{ title:"Class first aid station",
    brief:"Set up and document a simple first aid station for your class.",
    steps:["List the items a basic first aid kit should contain.","Assemble what your class can obtain and note what is missing.","Write a one-page card showing the four first aid steps for a wound.","Write five safety rules for your playing field.","Demonstrate to the class how to control bleeding on a volunteer, using a clean cloth."],
    criteria:["Sensible list of kit contents","Station actually assembled","Four first aid steps correctly stated","Five practical safety rules","Correct, safe demonstration"]},
  activities:["Discuss personal hygiene, common diseases and their prevention","Discuss first aid, its importance and the types of injuries","Demonstrate how first aid procedures are applied to a victim during an emergency","Practise applying direct pressure to control bleeding"],
  materials:["Physical Education textbook","Posters and charts","First aid kits","Visual aids","Clean cloth and bandages"],
  assessment:["Individual presentation","Group work","Class participation","Practical first aid demonstration","Written test"]
},
{
  grade:7, period:"IV", sem:"Two", icon:"🏃",
  title:"Track and Field",
  subtitle:"History, rules, track events and field events",
  outcomes:["Learners are able to analyse the history and rules of track and field events and demonstrate the skills and techniques of each event."],
  objectives:["Analyse the history and rules of track and field events","Describe the technique of sprinting","Describe the flight over hurdles and the distances involved","Explain the baton take-over and the take-over zone","Demonstrate the skills and techniques of the high jump"],
  note:"Track and field, also called <b>athletics</b>, is the oldest organised sport, central to the ancient Olympic Games. <b>Track events</b> are races run on the track — sprints, middle and long distance, hurdles and relays. <b>Field events</b> are jumps and throws — high jump, long jump, javelin, shot put and discus.",
  study:[
    /* ---- course text: Semester Two, Period IV — Track and Field (guide pp. 9-10) ---- */
    {k:"h3", t:"History and Rules of Track and Field"},
    {k:"p", t:"**Track and field** — athletics — descends from the running, jumping and throwing contests of the ancient Olympic Games. Its rules fix the distances of the races, the lanes, the fair start (no runner may beat the gun), the takeover in relays, and the measuring of jumps and throws."},
    {k:"rule"},
    {k:"h3", t:"Track Events — Sprinting (Skill and Techniques)"},
    {k:"p", t:"Break the sprint into its parts and discuss each: **the start** (a legal, explosive leaving of the blocks), **the stride** (driving arms and high knees at top speed) and **the finish** (the torso thrown at the tape). In **hurdling** study the flight over the hurdles and the different distances involved in hurdling. In the relay, master the **visual type of baton exchange** (the receiver watches the baton into his hand) and the **non-visual type** (the pass is trusted, by call, inside the zone), and learn the **take-over and the take-over zone** within which the baton must change hands in every start and finish race."},
    {k:"rule"},
    {k:"h3", t:"Field Events — the High Jump (Skill and Techniques)"},
    {k:"p", t:"In the **high jump** the athlete runs in on a curving approach, takes off from one foot, arches the back over the bar and lands on the back on the soft pit — the bar must stay up. Learn the skill in parts: approach, take-off, flight, landing. Other field equipment named in the guide: the **javelin**, the **hammer**, and the **pole vault**."},
    {k:"rule"},
    {k:"h3", t:"Materials for Practice"},
    {k:"p", t:"Track event materials: **spikes** (track shoes) and **relay batons**. Field event materials: **javelin**, **hammer** and the pole for the **pole vault**. Practise and demonstrate the skills and techniques of each event."}
  ],
  focus:["History and rules of track and field","Track events and sprinting technique","Hurdling: flight and distances","Relay: visual and non-visual baton exchange and the take-over zone","The start, stride and finish","Field events: the high jump"],
  terms:[
    {t:"athletics", d:"the sport of running, jumping and throwing events", x:"Athletics is also called track and field."},
    {t:"track event", d:"a race run on the running track", x:"The 100 metres is a track event."},
    {t:"field event", d:"a jumping or throwing competition", x:"The high jump is a field event."},
    {t:"sprint", d:"a short race run at full speed", x:"The 100 m sprint lasts a few seconds."},
    {t:"crouch start", d:"the low starting position used by sprinters with hands behind the line", x:"A good crouch start saves time."},
    {t:"starting block", d:"the device a sprinter pushes against at the start", x:"She set her starting blocks carefully."},
    {t:"hurdle", d:"a barrier the runner clears during a hurdles race", x:"He clipped the third hurdle."},
    {t:"relay", d:"a team race in which a baton is passed between runners", x:"Our relay team won the medal."},
    {t:"baton", d:"the tube passed from runner to runner in a relay", x:"He dropped the baton at the change."},
    {t:"take-over zone", d:"the marked area within which the baton must be exchanged", x:"The exchange must finish inside the take-over zone."},
    {t:"visual pass", d:"a baton exchange in which the receiver looks back at the baton", x:"Beginners use the visual pass."},
    {t:"non-visual pass", d:"a baton exchange in which the receiver does not look back", x:"Sprint teams use the non-visual pass."},
    {t:"high jump", d:"a field event in which the athlete jumps over a raised bar", x:"She cleared 1.40 m in the high jump."},
    {t:"false start", d:"leaving the blocks before the gun", x:"A false start can disqualify a runner."}
  ],
  facts:[
    {q:"What is the difference between a track event and a field event?", a:"Track events are races run on the track; field events are jumping and throwing competitions."},
    {q:"Name four track events.", a:"The sprints, middle-distance races, hurdles and relays (also long distance)."},
    {q:"Name four field events.", a:"High jump, long jump, javelin and shot put (also discus)."},
    {q:"What are the three phases of a sprint race?", a:"The start, the stride (running phase) and the finish."},
    {q:"What is the take-over zone in a relay?", a:"The marked area within which the baton must be passed from one runner to the next."},
    {q:"State the difference between a visual and a non-visual baton pass.", a:"In a visual pass the receiver looks back at the incoming baton; in a non-visual pass the receiver does not look back but reaches behind on a call."},
    {q:"Why must a hurdler keep the flight low over the hurdle?", a:"Because rising too high wastes time and breaks the running rhythm; the hurdle should be cleared as a long stride."},
    {q:"What happens if a relay baton is exchanged outside the take-over zone?", a:"The team is disqualified."}
  ],
  tf:[
    {s:"The high jump is a field event.", a:"true", why:"Field events are the jumps and throws, as opposed to races on the track."},
    {s:"A relay baton may be passed anywhere on the track.", a:"false", why:"It must be exchanged inside the marked take-over zone or the team is disqualified."},
    {s:"A hurdler should jump as high as possible over each hurdle.", a:"false", why:"The clearance should be low and flat, like a long stride, to avoid losing speed."},
    {s:"Sprinters use a crouch start.", a:"true", why:"The crouch start allows a powerful drive forward from the blocks."},
    {s:"Warming up reduces the risk of muscle injury in athletics.", a:"true", why:"It raises muscle temperature and prepares the body for explosive effort."},
    {s:"A false start means leaving the blocks after the gun.", a:"false", why:"A false start is leaving before the gun."}
  ],
  apply:[
    {q:"Your relay team keeps losing time at the change-over. What two things would you check?", a:"Whether the exchange is happening inside the take-over zone, and whether the outgoing runner starts moving at the right mark so both are running at speed."},
    {q:"A sprinter is fast but always slow out of the blocks. What should she practise?", a:"The crouch start and drive phase — reaction to the gun and the first few powerful strides."},
    {q:"Why should athletes cool down after a race?", a:"To let the pulse return to normal gradually and to reduce muscle stiffness and soreness."},
    {q:"Your school has no starting blocks or hurdles. How can you still train?", a:"Practise crouch starts from marked lines, and use low, safe improvised barriers or marked strides to work on hurdling rhythm."},
    {q:"How does the high jumper's approach run affect the jump?", a:"The approach builds the speed and angle needed for take-off; a rushed or crooked approach ruins the clearance."}
  ],
  sort:{ title:"Track and field", groups:[
    {name:"Track events", items:["100 m sprint","Hurdles","Relay","Middle distance"]},
    {name:"Field events", items:["High jump","Long jump","Javelin","Shot put"]},
    {name:"Track equipment", items:["Spikes","Relay baton","Starting blocks","Stop watch"]},
    {name:"Phases of a sprint", items:["The start","The drive","The stride","The finish"]}
  ]},
  compare:{ title:"Events and their key techniques", caption:"Complete the table of events and what each demands.",
    items:[
      {p:"Sprinting", f:"Explosive crouch start, high knee drive, relaxed arms, run through the finish line."},
      {p:"Hurdling", f:"Low flat flight over the hurdle, lead leg straight, trail leg pulled through, rhythm between hurdles."},
      {p:"Relay", f:"Baton exchanged inside the take-over zone, by visual or non-visual pass, without either runner slowing."},
      {p:"High jump", f:"Curved approach run, strong single-foot take-off, arching the back over the bar, safe landing."},
      {p:"Middle distance", f:"Even pacing, controlled breathing and a finishing sprint."},
      {p:"All events", f:"Warm up before and cool down after; obey the starter and the rules of the event."}
    ]},
  casestudy:{ title:"The dropped baton",
    text:"At the county meet, Zorzor Junior High led the 4×100 m relay going into the final change. The third runner arrived at full speed, but the anchor runner set off too late and had to slow down to receive the baton. In the confusion the baton fell just past the end of the take-over zone. The team finished third, and the judges disqualified them in any case for an exchange outside the zone. At the next training session the coach painted the check marks on the track, and the pairs practised the non-visual pass fifty times until each outgoing runner started at exactly the right moment.",
    questions:[
      {q:"Give two reasons the team lost the race.", a:"The anchor runner started too late so both runners had to slow, and the baton was exchanged outside the take-over zone."},
      {q:"Why were they disqualified even though they finished third?", a:"Because the exchange took place outside the take-over zone, which is against the rules of the relay."},
      {q:"What did the coach do to correct the fault?", a:"He painted check marks on the track and had the pairs practise the non-visual pass repeatedly so the timing became automatic."},
      {q:"Why is the timing of the outgoing runner so important?", a:"The baton must change hands while both runners are near full speed and inside the zone; otherwise the team loses time or is disqualified."}
    ]},
  project:{ title:"Class athletics meet",
    brief:"Organise and record a simple athletics competition for your class.",
    steps:["Choose two track events and one field event your school can safely stage.","Write the rules of each event in your own words.","Mark out the track or landing area and check it is safe.","Run the events, timing or measuring each performance.","Present a results table and name the improvement you will work on."],
    criteria:["Events chosen realistically","Rules stated correctly","Safety check carried out","Accurate results recorded","A personal improvement target set"]},
  activities:["Discuss the history and rules of track and field","Discuss the flight over hurdles and the different hurdling distances","Practise the start and finish of a race","Practise visual and non-visual baton take-overs within the zone","Demonstrate the skills and techniques of the high jump"],
  materials:["Physical Education handbook","Spikes and relay batons","Javelin, hammer and pole (where available)","Stop watch and measuring tape","Marking materials for lanes and zones"],
  assessment:["Individual presentation","Group work","Class participation","Practical demonstration of event skills","Written test on rules"]
},
{
  grade:7, period:"V", sem:"Two", icon:"🤸",
  title:"Gymnastics and Tumbling",
  subtitle:"Meaning, history, safety rules and fundamental skills",
  outcomes:["Learners are able to state the meaning and history of gymnastics and tumbling, classify gymnastics as a competitive sport, apply the rules of performance and demonstrate basic fundamental skills."],
  objectives:["State the meaning and history of gymnastics and tumbling","Classify gymnastics as a competitive sport","Apply the rules of performance","Demonstrate basic fundamental skills and techniques","Perform the forward roll safely"],
  note:"<b>Gymnastics</b> is a sport of controlled body movement demanding strength, flexibility, balance and coordination. <b>Tumbling</b> is the floor branch — rolls, cartwheels and handstands performed without apparatus. Safety is paramount: always use a <b>mat</b>, warm up first, and never attempt a new skill without a <b>spotter</b>.",
  study:[
    /* ---- course text: Semester Two, Period V — Gymnastics and Tumbling (guide pp. 11) ---- */
    {k:"h3", t:"Meaning and History of Gymnastics and Tumbling"},
    {k:"p", t:"**Gymnastics** is the sport of controlled body exercises — balances, rolls, swings and leaps — and **tumbling** is its floor branch of rolls and aerial stunts. From the gymnasia of ancient Greece, where athletes trained naked (gymnos) for contest, gymnastics grew into a modern **competitive sport** judged by rules of performance, with apparatus work, floor exercises and tumbling passes."},
    {k:"rule"},
    {k:"h3", t:"Importance and Safety Rules"},
    {k:"p", t:"Gymnastics builds strength, balance, flexibility, courage and grace. Because the body leaves the ground, safety rules come first:"},
    {k:"bul", items:["**Always use mats** — never tumble on bare, hard ground","**Warm up** the wrists, neck, back and ankles first","**Work with a partner or spotter** who supports your shoulders on new stunts","**Learn skills in order** — master the roll before the handstand, the handstand before the walkover","**One performer on the mat at a time**; others wait at the edge"]},
    {k:"rule"},
    {k:"h3", t:"Fundamental Skills and Techniques — the Forward Roll"},
    {k:"p", t:"**Forward Roll** — begin in a squat position, with the head up, the arms extended forward slightly, and the fingers pointing straight ahead. Push off from the toes, raise the seat, and tuck the chin to the chest. Continue the forward movement, landing on the base of the neck and the top of the shoulders; push off with the hands and continue the forward motion to a crouching or standing position."},
    {k:"p", t:"When the forward roll is smooth, build the sequence: forward roll, backward roll, cartwheel, handstand — always with control, always with a spotter."}
  ],
  focus:["History of gymnastics and tumbling","Importance of gymnastics","Safety rules","Fundamental skills and techniques","The forward roll","Gymnastics as a competitive sport"],
  terms:[
    {t:"gymnastics", d:"a sport of controlled body movements requiring strength, balance and flexibility", x:"Gymnastics develops total body control."},
    {t:"tumbling", d:"floor gymnastics such as rolls and cartwheels, performed without apparatus", x:"Tumbling needs a soft mat."},
    {t:"flexibility", d:"the range of movement possible at a joint", x:"Stretching improves flexibility."},
    {t:"balance", d:"the ability to hold the body steady", x:"A handstand requires balance."},
    {t:"coordination", d:"moving different body parts smoothly together", x:"Coordination makes a routine look easy."},
    {t:"spotter", d:"a person who stands ready to support and protect the performer", x:"Never tumble without a spotter."},
    {t:"mat", d:"the padded surface used to cushion landings", x:"Place the mat before rolling."},
    {t:"forward roll", d:"rolling forward over the shoulders from a squat to a stand", x:"The forward roll is the first tumbling skill."},
    {t:"backward roll", d:"rolling backwards over the shoulders", x:"The backward roll needs strong arms."},
    {t:"cartwheel", d:"a sideways rotation with the hands and feet touching in turn", x:"She performed a straight cartwheel."},
    {t:"handstand", d:"balancing upside down on the hands", x:"A handstand builds shoulder strength."},
    {t:"routine", d:"a sequence of skills performed as one performance", x:"Her floor routine lasted a minute."},
    {t:"tuck", d:"a curled position with knees drawn to the chest", x:"Tuck the chin to the chest before rolling."},
    {t:"apparatus", d:"the equipment used in gymnastics, such as bars and beam", x:"The beam is an apparatus event."}
  ],
  facts:[
    {q:"What is gymnastics?", a:"A sport of controlled body movement requiring strength, flexibility, balance and coordination."},
    {q:"What is tumbling?", a:"The floor branch of gymnastics — rolls, cartwheels and handstands performed without apparatus."},
    {q:"Describe the forward roll from the beginning.", a:"Begin in a squat with the head up, arms extended forward slightly and fingers pointing straight ahead; push off from the toes, raise the seat and tuck the chin to the chest; continue forward, landing on the base of the neck and top of the shoulders; push off with the hands and continue to a crouch or stand."},
    {q:"Why must the chin be tucked to the chest in a forward roll?", a:"To round the back and protect the head and neck; landing on the top of the head could cause serious injury."},
    {q:"State four safety rules for gymnastics.", a:"Always use a mat, warm up before starting, never attempt a new skill without a spotter, and remove watches and jewellery."},
    {q:"Name four physical qualities gymnastics develops.", a:"Strength, flexibility, balance and coordination."},
    {q:"What is a spotter?", a:"A person who stands ready to support and protect the performer during a skill."},
    {q:"Name three tumbling skills.", a:"The forward roll, the backward roll and the cartwheel (also the handstand)."}
  ],
  tf:[
    {s:"A forward roll should land on the top of the head.", a:"false", why:"It must land on the base of the neck and top of the shoulders, with the chin tucked; landing on the head risks serious neck injury."},
    {s:"Tumbling is performed without apparatus.", a:"true", why:"It is the floor branch of gymnastics."},
    {s:"A mat is optional when learning rolls.", a:"false", why:"A mat cushions the landing and is essential for safety."},
    {s:"Gymnastics develops flexibility and balance.", a:"true", why:"Both are among the main physical qualities the sport requires and builds."},
    {s:"Jewellery should be removed before gymnastics.", a:"true", why:"It can catch, scratch or injure the performer during movement."},
    {s:"A spotter performs the skill for you.", a:"false", why:"A spotter supports and protects the performer, who still performs the skill."}
  ],
  apply:[
    {q:"A learner is afraid to attempt the forward roll. How would you help?", a:"Break it down: practise the tuck and rock on the mat first, use a slight downward slope, and provide a spotter and encouragement before the full roll."},
    {q:"Your school has no gymnastics mats. What is a safe alternative?", a:"Thick grass or sand cleared of stones, or folded blankets or old mattresses laid flat — and skills kept to the simplest level."},
    {q:"Why is warming up especially important before gymnastics?", a:"Gymnastics demands extreme joint range; cold muscles and tendons tear easily when stretched suddenly."},
    {q:"A learner wants to try a handstand on the first day. What is your advice?", a:"Build up gradually — first develop shoulder strength and the roll skills, then attempt the handstand against a wall with a spotter."},
    {q:"How does gymnastics help performance in other sports?", a:"It builds core strength, balance, flexibility and body awareness, all of which improve football, athletics and racket sports."}
  ],
  sort:{ title:"Gymnastics", groups:[
    {name:"Tumbling skills", items:["Forward roll","Backward roll","Cartwheel","Handstand"]},
    {name:"Physical qualities", items:["Strength","Flexibility","Balance","Coordination"]},
    {name:"Safety rules", items:["Use a mat","Warm up first","Use a spotter","Remove jewellery"]},
    {name:"Stages of the forward roll", items:["Squat with head up","Push off toes and tuck chin","Land on neck and shoulders","Push up to a stand"]}
  ]},
  compare:{ title:"The forward roll, step by step", caption:"Complete the table describing each stage and why it matters.",
    items:[
      {p:"Starting position", f:"Squat with head up, arms extended slightly forward, fingers pointing straight ahead."},
      {p:"Push off", f:"Push from the toes and raise the seat, so the body begins to rotate forward."},
      {p:"Tuck the chin", f:"Chin to the chest rounds the back and protects the head and neck."},
      {p:"Contact", f:"Land on the base of the neck and the top of the shoulders, not on the head."},
      {p:"Continue the roll", f:"Push off with the hands and keep the body tucked so momentum carries you round."},
      {p:"Finish", f:"Come up to a crouch or a standing position under control."}
    ]},
  casestudy:{ title:"The safe mat",
    text:"Madam Weah's class had no gymnastics mats, so learners had been rolling on the bare concrete of the assembly hall. One boy jarred his neck and had to rest for a week. She stopped the lessons and moved them outside to a patch of soft grass, which the class first cleared of stones, glass and sticks. She taught the roll in three stages: first rocking in a tucked position, then rolling down a slight slope, and only then the full forward roll with a partner spotting. Nobody was injured again, and by the end of the term the whole class could roll and come up to a stand.",
    questions:[
      {q:"Why was rolling on bare concrete dangerous?", a:"There was no cushioning, so the neck and shoulders took the full impact — one boy jarred his neck."},
      {q:"What did the class do before using the grass?", a:"They cleared it of stones, glass and sticks to make the surface safe."},
      {q:"What were the three teaching stages?", a:"Rocking in a tuck, rolling down a slight slope, then the full forward roll with a spotter."},
      {q:"What general safety principle does this show?", a:"Prepare a safe landing surface and build a skill up in stages with a spotter, rather than attempting the full movement at once."}
    ]},
  project:{ title:"Tumbling sequence",
    brief:"Prepare, practise and perform a short safe tumbling sequence.",
    steps:["Write out four safety rules you will follow.","Prepare a safe surface and check it.","Choose three skills you can already perform safely.","Link them into a short sequence with a clear start and finish.","Perform it for the class with a spotter, and explain the safety points."],
    criteria:["Four safety rules stated","Safe surface prepared and checked","Three skills performed under control","A linked sequence with clear start and finish","Safety points correctly explained"]},
  activities:["Discuss the history of gymnastics and tumbling","Discuss the importance and safety rules","Demonstrate the forward roll following each stage","Practise fundamental skills with a spotter on a mat"],
  materials:["Physical Education Handbook, Eighth Edition","Mats or safe soft surface","Video, television and projector where available","Charts of tumbling skills"],
  assessment:["Individual presentation","Group work","Class participation","Practical performance of the forward roll","Written test on safety rules"]
},
{
  grade:7, period:"VI", sem:"Two", icon:"💪",
  title:"Physical Fitness and its Components",
  subtitle:"Definition, history, importance and the health- and skill-related components",
  outcomes:["Learners are able to identify, define and discuss physical fitness and its health-related and skill-related components."],
  objectives:["Identify and define physical fitness and its components","Discuss the history and importance of physical fitness","Discuss the health-related components","Discuss the skill-related components","Perform basic fitness exercises correctly"],
  note:"<b>Physical fitness</b> is the ability of the body to carry out daily tasks with vigour and alertness, without undue fatigue, and with energy left over for emergencies. It has two sides: <b>health-related</b> components (endurance, strength, flexibility, body composition) and <b>skill-related</b> components (agility, balance, coordination, speed, power, reaction time).",
  study:[
    /* ---- course text: Semester Two, Period VI — Physical Fitness and its Components (guide pp. 12) ---- */
    {k:"h3", t:"Definition, History and Importance"},
    {k:"p", t:"**Physical fitness** is the ability of the body to carry out daily tasks with vigour and alertness, without undue fatigue, and with energy left over for emergencies. From the drills of ancient armies to the screening tests of modern schools, fitness has been measured and trained because **a fit body learns and works better, resists illness, and recovers quickly**."},
    {k:"rule"},
    {k:"h3", t:"The Health-Related Components"},
    {k:"bul", items:["**Cardiovascular endurance** — the heart and lungs supplying oxygen through long activity","**Muscular strength** — the greatest force a muscle can produce in one effort","**Muscular endurance** — the muscle keeping on working over time","**Flexibility** — the range of movement possible at a joint","**Body composition** — the proportion of fat to lean tissue in the body"]},
    {k:"rule"},
    {k:"h3", t:"The Skill-Related Components"},
    {k:"bul", items:["**Agility** — changing direction quickly and under control","**Balance** — remaining stable, still or moving","**Coordination** — moving accurately and smoothly, as eye with hand","**Speed** — moving the body quickly","**Power** — strength applied quickly","**Reaction time** — how quickly the body answers a signal"]},
    {k:"rule"},
    {k:"h3", t:"Exercise — the Jumping Jack"},
    {k:"p", t:"**Jumping Jack** — learners form a line before the teacher; on the sound of a whistle, they jump up with hands clapping overhead and legs opening while in the air, then return to the start on the next count. Used at the start of a lesson, it is the classic **warm-up** that raises the pulse before harder work — and counting your own repetitions begins **measuring your own fitness**."}
  ],
  focus:["Definition and history of physical fitness","Importance of physical fitness","Health-related components","Skill-related components","Exercises: the jumping jack","Measuring your own fitness"],
  terms:[
    {t:"physical fitness", d:"the ability to carry out daily tasks with vigour and without undue fatigue", x:"Physical fitness leaves energy in reserve."},
    {t:"cardiovascular endurance", d:"the ability of the heart and lungs to supply oxygen during long activity", x:"Distance running builds cardiovascular endurance."},
    {t:"muscular strength", d:"the greatest force a muscle can produce in one effort", x:"Lifting a heavy load needs muscular strength."},
    {t:"muscular endurance", d:"the ability of a muscle to keep working over time", x:"Repeated press-ups test muscular endurance."},
    {t:"flexibility", d:"the range of movement possible at a joint", x:"Stretching increases flexibility."},
    {t:"body composition", d:"the proportion of fat to lean tissue in the body", x:"Exercise improves body composition."},
    {t:"agility", d:"the ability to change direction quickly and under control", x:"Agility helps a footballer beat a defender."},
    {t:"balance", d:"the ability to remain stable", x:"Balance is vital in gymnastics."},
    {t:"coordination", d:"the ability to move accurately and smoothly", x:"Coordination links the eye and the hand."},
    {t:"reaction time", d:"how quickly the body responds to a signal", x:"A sprinter needs fast reaction time."},
    {t:"speed", d:"the ability to move the body quickly", x:"Speed wins the sprint."},
    {t:"power", d:"strength applied quickly", x:"Jumping high requires power."},
    {t:"jumping jack", d:"an exercise jumping with arms clapping overhead and legs opening", x:"Jumping jacks warm up the whole body."},
    {t:"warm-up", d:"gentle activity that prepares the body for exercise", x:"Never train without a warm-up."}
  ],
  facts:[
    {q:"Define physical fitness.", a:"The ability of the body to carry out daily tasks with vigour and alertness, without undue fatigue, and with energy left for emergencies."},
    {q:"Name the health-related components of fitness.", a:"Cardiovascular endurance, muscular strength, muscular endurance, flexibility and body composition."},
    {q:"Name the skill-related components of fitness.", a:"Agility, balance, coordination, speed, power and reaction time."},
    {q:"Define agility.", a:"The ability to change direction quickly and under control."},
    {q:"Define balance.", a:"The ability to remain stable."},
    {q:"Define coordination.", a:"The ability to move accurately and smoothly."},
    {q:"Describe how a jumping jack is performed.", a:"Learners form a line; on the whistle they jump up with the hands clapping overhead and the legs opening while in the air, then return to the start position."},
    {q:"State four benefits of being physically fit.", a:"A stronger heart and lungs, better weight control, greater resistance to illness, and improved mood, sleep and concentration."}
  ],
  tf:[
    {s:"Cardiovascular endurance is a health-related component of fitness.", a:"true", why:"It concerns the heart and lungs and therefore health rather than sports skill."},
    {s:"Agility is a health-related component.", a:"false", why:"Agility is skill-related; it affects performance in sport rather than general health."},
    {s:"Flexibility means the range of movement at a joint.", a:"true", why:"That is the definition; stretching increases it."},
    {s:"A person can be fit without ever exercising.", a:"false", why:"Fitness is built and maintained by regular physical activity."},
    {s:"Reaction time matters to a sprinter at the start.", a:"true", why:"The faster the response to the gun, the better the start."},
    {s:"Body composition means how tall a person is.", a:"false", why:"It is the proportion of fat to lean tissue in the body."}
  ],
  apply:[
    {q:"A learner can run far but cannot change direction quickly in football. Which component needs work?", a:"Agility — the ability to change direction quickly and under control."},
    {q:"Design a simple warm-up your class can do without equipment.", a:"Three minutes of easy jogging on the spot, then jumping jacks, arm circles, trunk twists and gentle leg stretches."},
    {q:"Why does a fit person recover more quickly after climbing stairs?", a:"A stronger heart and lungs deliver oxygen more efficiently, so the pulse returns to normal faster."},
    {q:"How would you test your own cardiovascular endurance with no equipment?", a:"Run or walk as far as possible in a fixed time such as six minutes, record the distance, and repeat the test after several weeks of training."},
    {q:"Why should a fitness programme include both health-related and skill-related work?", a:"Health-related work keeps the body well, while skill-related work improves performance in games; a good programme needs both."}
  ],
  sort:{ title:"Components of fitness", groups:[
    {name:"Health-related", items:["Cardiovascular endurance","Muscular strength","Flexibility","Body composition"]},
    {name:"Skill-related", items:["Agility","Balance","Coordination","Reaction time"]},
    {name:"Activities that build endurance", items:["Distance running","Swimming","Cycling","Skipping"]},
    {name:"Activities that build strength", items:["Press-ups","Sit-ups","Squats","Carrying loads"]}
  ]},
  compare:{ title:"The components of physical fitness", caption:"Complete the table defining each component and how it is improved.",
    items:[
      {p:"Cardiovascular endurance", f:"Heart and lungs supplying oxygen during long activity; improved by running, swimming and skipping."},
      {p:"Muscular strength", f:"The greatest force a muscle can exert in one effort; improved by resistance work such as press-ups and squats."},
      {p:"Flexibility", f:"Range of movement at a joint; improved by regular stretching after warming up."},
      {p:"Body composition", f:"The proportion of fat to lean tissue; improved by regular activity and a balanced diet."},
      {p:"Agility", f:"Changing direction quickly under control; improved by shuttle runs and zigzag drills."},
      {p:"Reaction time", f:"Speed of response to a signal; improved by start drills and ball-catching games."}
    ]},
  casestudy:{ title:"The six-week challenge",
    text:"Grade 7 measured their fitness at the start of the term. Each learner recorded how far they could run in six minutes, how many sit-ups they could do in one minute, and how far they could reach forward while sitting. For six weeks the class did twenty minutes of activity three times a week: jogging, jumping jacks, sit-ups and stretching. At the end they repeated the tests. Almost every learner had improved on all three measures. Musu, who had improved least, admitted she had missed most of the sessions.",
    questions:[
      {q:"Which component of fitness did each of the three tests measure?", a:"The six-minute run measured cardiovascular endurance, the sit-ups measured muscular endurance, and the sit-and-reach measured flexibility."},
      {q:"Why did the class test themselves before starting?", a:"To establish a starting point so that improvement could be measured objectively."},
      {q:"Why did Musu improve least?", a:"She missed most of the sessions; fitness improves only with regular, repeated activity."},
      {q:"What principle of training does this case illustrate?", a:"Regularity — training must be frequent and consistent for the body to adapt and improve."}
    ]},
  project:{ title:"My personal fitness plan",
    brief:"Measure your fitness, plan a programme and record your progress.",
    steps:["Carry out three simple tests: a timed run, a one-minute sit-up test and a flexibility reach.","Record the results in a table as your starting point.","Write a four-week plan of activity three times a week.","Keep a diary of the sessions you actually complete.","Repeat the tests and report your improvement honestly."],
    criteria:["Three tests correctly carried out and recorded","A realistic four-week plan","Diary honestly kept","Tests repeated and compared","Sensible conclusion about what worked"]},
  activities:["Discuss physical fitness, its importance and history","Discuss the health-related and skill-related components","Demonstrate the jumping jack on the whistle","Carry out simple fitness tests and record the results"],
  materials:["Physical Education handbook","Whistle","Stop watch","Measuring tape","Recording sheets"],
  assessment:["Individual presentation","Group work","Class participation","Practical fitness test performance","Written test on components"]
},

/* ================================ GRADE 8 ================================ */
{
  grade:8, period:"I", sem:"One", icon:"❤️",
  title:"Health and Fitness",
  subtitle:"Health- and skill-related concepts, endurance, the body as a machine and gender in sport",
  outcomes:["Learners are able to discuss health-related and skill-related concepts, distinguish types of endurance, explain the importance and effects of exercise, create activities for male and female competitions and demonstrate exercises as they relate to sports."],
  objectives:["Discuss health-related and skill-related activities","Distinguish between the types of endurance","Explain the importance of exercise and its effects on the human body","Create activities for male and female competitions","Demonstrate exercises as they relate to sports"],
  note:"<b>Cardiovascular endurance</b> depends on a strong, healthy heart pumping oxygen-rich blood from the lungs to the cells. Longer exercise <b>increases the capacity of the lungs</b> to move oxygen from the environment into the bloodstream. The <b>human body works like a machine</b>: bones are the levers, joints the hinges, muscles the engine and food the fuel.",
  study:[
    /* ---- course text: Semester One, Period I — Health and Fitness (guide pp. 13-14) ---- */
    {k:"h3", t:"Health-Related and Skill-Related Fitness Activities"},
    {k:"p", t:"**Health-related fitness** activities build the body's health; **skill-related fitness** activities build the qualities that win games. Research and discuss both groups:"},
    {k:"bul", items:["**Health-related:** walking distances; cardiovascular endurance; muscular strength; body composition; flexibility","**Skill-related:** agility (change direction quickly); balance (remain stable); coordination (move accurately and smoothly); fast reaction (respond quickly)"]},
    {k:"rule"},
    {k:"h3", t:"Types of Endurance"},
    {k:"p", t:"**Cardiovascular endurance (heart muscle)** — a strong, healthy heart is responsible for pumping the oxygen-rich blood from the lungs to the cells. Longer exercise increases the capacity of the lungs to move oxygen from the environment to the bloodstream."},
    {k:"p", t:"**Muscular endurance** — learners must withstand a sustained level of muscular force in running, standing or sitting for a longer period of time. It develops by frequently repeating an exercise and practising sports."},
    {k:"p", t:"**Cardiorespiratory / aerobic endurance (breathing)** — the ability to supply energy for activities lasting more than an hour depends on the consumption and use of oxygen (O₂); because most physical activities in daily life and in athletics take more than an hour, oxygen consumption is critical for survival as well as performance."},
    {k:"rule"},
    {k:"h3", t:"The Human Body as a Machine"},
    {k:"p", t:"Think of the body as a **machine**: food is its fuel, the lungs its air intake, the heart its pump, the muscles its pistons and the bones its frame. A machine that is run regularly and maintained stays in order — so **exercise is significant to sports** because it tunes the machine: it strengthens the heart, builds muscle, burns excess fat, and sharpens the reflexes."},
    {k:"rule"},
    {k:"h3", t:"Gender Sensitivity in Sports"},
    {k:"p", t:"Sport belongs to **everyone**. Create activities for male and female competitions equally: girls and boys share the field, the equipment, the teams and the prizes. Selecting teams, giving leadership roles and scheduling games must respect both sexes — talent, not gender, decides who plays."}
  ],
  focus:["Health-related and skill-related fitness activities","Types of endurance","The human body as a machine","Gender sensitivity in sport","Why exercise is significant to sport","Effects of exercise on the body"],
  terms:[
    {t:"health-related fitness", d:"fitness that keeps the body well: endurance, strength, flexibility, body composition", x:"Walking distances builds health-related fitness."},
    {t:"skill-related fitness", d:"fitness that improves performance in sport: agility, balance, coordination, reaction", x:"Skill-related fitness helps a player excel."},
    {t:"endurance", d:"the ability to keep working for a long time without tiring", x:"Endurance is needed in long-distance races."},
    {t:"cardiovascular endurance", d:"the capacity of the heart and lungs to supply oxygen during sustained exercise", x:"A strong heart gives cardiovascular endurance."},
    {t:"muscular endurance", d:"the ability of a muscle to repeat a movement many times", x:"Muscular endurance keeps the legs cycling."},
    {t:"agility", d:"changing direction quickly", x:"Agility beats a defender."},
    {t:"balance", d:"remaining stable", x:"Balance keeps a player on his feet."},
    {t:"coordination", d:"moving accurately and smoothly", x:"Coordination times the kick."},
    {t:"fast reaction", d:"responding quickly to a signal", x:"Fast reaction saves a penalty."},
    {t:"gender sensitivity", d:"treating boys and girls fairly and equally in sport", x:"Gender sensitivity means girls' teams get equal field time."},
    {t:"pulse rate", d:"the number of heart beats per minute", x:"Exercise raises the pulse rate."},
    {t:"oxygen", d:"the gas the body needs to release energy from food", x:"The blood carries oxygen to the muscles."},
    {t:"recovery", d:"the return of the body to its resting state after exercise", x:"Fit people show faster recovery."},
    {t:"conditioning", d:"training that prepares the body for a sport", x:"Pre-season conditioning prevents injury."}
  ],
  facts:[
    {q:"Name five health-related fitness activities.", a:"Walking distances, cardiovascular endurance work, muscular strength work, body composition management and flexibility work."},
    {q:"Name four skill-related components and define each.", a:"Agility — change direction quickly; balance — remain stable; coordination — move accurately and smoothly; fast reaction — respond quickly."},
    {q:"What is cardiovascular endurance and which organ is central to it?", a:"The ability of the heart and lungs to supply oxygen during sustained exercise; the heart is central, pumping oxygen-rich blood from the lungs to the cells."},
    {q:"How does longer exercise affect the lungs?", a:"It increases their capacity to move oxygen from the environment into the bloodstream."},
    {q:"Explain what is meant by the human body as a machine.", a:"The bones act as levers, the joints as hinges, the muscles as the engine that produces movement, and food and oxygen as the fuel."},
    {q:"State the difference between cardiovascular and muscular endurance.", a:"Cardiovascular endurance concerns the heart and lungs supplying oxygen to the whole body; muscular endurance is a particular muscle's ability to keep repeating a movement."},
    {q:"Why is exercise significant to sport?", a:"It conditions the heart, lungs and muscles so an athlete can perform longer, recover faster and resist injury."},
    {q:"State two ways a school can be gender sensitive in sport.", a:"Give girls' and boys' teams equal access to the field, equipment and coaching time, and create competitions in which both can take part."}
  ],
  tf:[
    {s:"A strong healthy heart pumps oxygen-rich blood from the lungs to the cells.", a:"true", why:"That is the basis of cardiovascular endurance."},
    {s:"Longer exercise reduces the capacity of the lungs.", a:"false", why:"It increases their capacity to move oxygen into the bloodstream."},
    {s:"Agility is a skill-related component of fitness.", a:"true", why:"It affects sports performance rather than general health."},
    {s:"Girls should not take part in competitive sport.", a:"false", why:"Gender sensitivity requires that girls and boys have equal opportunity to compete."},
    {s:"Exercise has no effect on the pulse rate.", a:"false", why:"Exercise raises the pulse during activity, and regular training lowers the resting pulse."},
    {s:"The muscles act as the engine of the body machine.", a:"true", why:"They produce the force that moves the bone levers at the joints."}
  ],
  apply:[
    {q:"A footballer tires badly in the second half. Which type of endurance should he train?", a:"Cardiovascular endurance — sustained running, so the heart and lungs supply oxygen for the full match."},
    {q:"Design one activity in which boys and girls in your class can compete fairly together.", a:"A mixed relay in which each team must contain equal numbers of boys and girls, so success depends on the whole team."},
    {q:"Why does a fit person have a lower resting pulse?", a:"Training strengthens the heart so it pumps more blood with each beat and needs fewer beats per minute at rest."},
    {q:"How would you explain 'the body as a machine' to a Grade 4 pupil?", a:"Bones are like sticks that move, joints are like hinges on a door, muscles pull like an engine, and food and air are the fuel."},
    {q:"A learner says she is too weak for sport. What would you advise?", a:"Start with light, regular activity such as walking and simple exercises; fitness is built gradually, and everyone improves with consistent practice."}
  ],
  sort:{ title:"Health and fitness", groups:[
    {name:"Health-related", items:["Walking distances","Cardiovascular endurance","Muscular strength","Body composition"]},
    {name:"Skill-related", items:["Agility","Balance","Coordination","Fast reaction"]},
    {name:"Types of endurance", items:["Cardiovascular endurance","Muscular endurance"]},
    {name:"Effects of regular exercise", items:["Stronger heart","Greater lung capacity","Lower resting pulse","Faster recovery"]}
  ]},
  compare:{ title:"Health-related versus skill-related fitness", caption:"Complete the table comparing the two kinds of fitness.",
    items:[
      {p:"Main purpose", f:"Health-related keeps the body well; skill-related improves performance in sport."},
      {p:"Health-related components", f:"Cardiovascular endurance, muscular strength, muscular endurance, flexibility, body composition."},
      {p:"Skill-related components", f:"Agility, balance, coordination, fast reaction, speed and power."},
      {p:"Who needs it", f:"Everyone needs health-related fitness; skill-related fitness matters most to players and athletes."},
      {p:"How it is trained", f:"Health-related by sustained and resistance activity; skill-related by drills, agility work and reaction games."},
      {p:"How it is measured", f:"Health-related by timed runs and strength tests; skill-related by shuttle runs, balance holds and reaction tests."}
    ]},
  casestudy:{ title:"The girls' team gets the field",
    text:"At one junior high school the boys' football team trained on the field every afternoon while the girls were told to use the rough ground behind the latrines. The girls complained to the principal, pointing out that the school rules promised equal access. The principal drew up a timetable giving each team the field on alternate days and asked the games master to coach both. Within a term the girls' team had won two matches against neighbouring schools, and attendance among the girls in Grade 8 had noticeably improved.",
    questions:[
      {q:"What was unfair about the original arrangement?", a:"The boys had the proper field every day while the girls were given rough, unsafe ground — unequal access to facilities."},
      {q:"What principle were the girls appealing to?", a:"Gender sensitivity in sport — equal opportunity and equal access for boys and girls."},
      {q:"How did the principal solve the problem?", a:"By timetabling the field on alternate days for each team and having the games master coach both."},
      {q:"State two benefits that followed.", a:"The girls' team began winning matches, and attendance among Grade 8 girls improved."}
    ]},
  project:{ title:"Endurance and recovery study",
    brief:"Investigate how exercise affects your heart rate and recovery.",
    steps:["Measure and record your resting pulse for one minute.","Perform three minutes of steady jogging or jumping jacks.","Measure the pulse immediately after, then after one, two and three minutes.","Draw a line graph of the recovery.","Repeat after three weeks of regular exercise and compare the two graphs."],
    criteria:["Resting pulse correctly measured","Full set of recovery readings recorded","Accurate line graph","Test repeated after training","Sensible conclusion about fitness and recovery"]},
  activities:["Divide into two groups to research and discuss health-related and skill-related activities","Distinguish the types of endurance","Create and run activities for male and female competitions","Demonstrate exercises as they relate to particular sports"],
  materials:["GCSE Physical Education (Complete Revision and Practice)","Super Fitness for Sports, Conditioning and Health","Stop watch and whistle","Charts of the body systems"],
  assessment:["Individual presentation","Group work","Class participation","Practical demonstration","Written test"]
},
{
  grade:8, period:"II", sem:"One", icon:"⚖️",
  title:"Obesity and Weight Control",
  subtitle:"Obesity, overweight, eating disorders and the guidelines for a healthy diet",
  outcomes:["Learners are able to define obesity, eating disorder and overweight, identify the impact of obesity on health, explain the relationship of weight control to eating behaviour, and recall the guidelines for maintaining a healthy diet."],
  objectives:["Define obesity and overweight","Identify the impact of obesity on overall health","Explain the relationship of weight control to eating behaviour","Define eating disorder","Discuss the major problems of successful weight control","Discuss special problems relating to athletics and dieting","Recall the seven guidelines for maintaining a healthy diet"],
  note:"<b>Obesity</b> is the condition in which the body contains an excess of fat, or <b>adipose tissue</b> — a type of connective tissue in which many of the cells are filled with fat. Obesity is one of the most common and serious nutritional and health problems for adults, and in teenagers it is also a serious <b>psychological and social</b> problem.",
  study:[
    /* ---- course text: Semester One, Period II — Obesity and Weight Control (guide pp. 15-16) ---- */
    {k:"h3", t:"Obesity — Causes and Effects"},
    {k:"p", t:"**Obesity** is when the body contains an excess of fats or **adipose tissue** — a type of connective tissue in which many of its cells are filled with fats. Its causes sit in eating behaviour: a **poor diet** results in underweight; **weight control** results in optimum weight; and **overweight** is attributed to over-eating. An **eating disorder** is an illness of eating behaviour — refusing food or over-eating past control."},
    {k:"p", t:"Obesity is one of the most common and serious nutritional and health problems for adults, and in teenagers it is a serious psychological and social problem. If obese teenagers do not lose weight and practise weight control, there is a strong possibility that they will continue to have this problem in adulthood."},
    {k:"rule"},
    {k:"h3", t:"Four Healthy Ways to Gain Weight (for the underweight)"},
    {k:"num", items:["**Increase your calorie intake**, especially with foods high in complex carbohydrates — potatoes, rice and bread.","**Eat between-meal snacks**, two to three hours before meals, so you do not lose your appetite.","**Drink plenty of water.**","**Follow a personal exercise programme.**"]},
    {k:"rule"},
    {k:"h3", t:"Weight Control and Exercise"},
    {k:"p", t:"You can increase the effectiveness of your weight-control efforts by increasing your daily activity, mainly through exercises. **Exercise does more than just help you lose weight** — it helps to tone your body, and replaces fat with an increase of lean body tissue, which is your body's bone, organ and muscle tissue. This is the relationship of weight control to eating behaviours: what you eat adds, what you do uses; the balance sets the weight."},
    {k:"rule"},
    {k:"h3", t:"Athletics, Dieting and the Problems of Weight Control"},
    {k:"p", t:"Successful weight control faces major problems: old eating habits, rich party foods, and quick-fix diets that starve then fail. Athletes face **special problems relating to dieting** — cutting weight for a class can drain strength and harm growth; athletes should control weight through training and sound meals, never by starving or dangerous dehydration."}
  ],
  focus:["Obesity: causes and effects","Poor diet and underweight","Weight control and optimum weight","Overweight and overeating","Eating disorders","Athletics and dieting","The seven guidelines for a healthy diet"],
  terms:[
    {t:"obesity", d:"the condition of carrying an excess of body fat", x:"Obesity raises the risk of heart disease."},
    {t:"adipose tissue", d:"connective tissue whose cells are filled with fat", x:"Excess adipose tissue is stored fat."},
    {t:"overweight", d:"weighing more than is healthy for one's height, usually from overeating", x:"Overweight often precedes obesity."},
    {t:"underweight", d:"weighing less than is healthy, often from a poor diet", x:"Underweight children tire easily."},
    {t:"optimum weight", d:"the healthy weight for a person's height and build", x:"Weight control aims at optimum weight."},
    {t:"weight control", d:"managing food intake and activity to keep a healthy weight", x:"Weight control needs both diet and exercise."},
    {t:"eating disorder", d:"a serious illness in which eating behaviour becomes harmful", x:"An eating disorder needs medical help."},
    {t:"anorexia", d:"an eating disorder in which a person starves themselves", x:"Anorexia is dangerous to life."},
    {t:"bulimia", d:"an eating disorder of binge eating followed by purging", x:"Bulimia damages the teeth and stomach."},
    {t:"calorie", d:"a unit measuring the energy in food", x:"More calories eaten than used are stored as fat."},
    {t:"metabolism", d:"the rate at which the body uses energy", x:"Exercise raises metabolism."},
    {t:"balanced diet", d:"a diet containing the right amounts of all the nutrients", x:"A balanced diet supports growth."},
    {t:"sodium", d:"the mineral in salt, harmful in excess", x:"Avoid too much sodium."},
    {t:"dietary fibre", d:"plant material that aids digestion", x:"Fibre keeps the bowel healthy."}
  ],
  facts:[
    {q:"Define obesity.", a:"The condition in which the body contains an excess of fat or adipose tissue, a connective tissue whose cells are filled with fat."},
    {q:"What is adipose tissue?", a:"A type of connective tissue in which many of the cells are filled with fat."},
    {q:"Why is obesity a special problem for teenagers?", a:"Besides the health risks, it is a serious psychological and social problem at that age."},
    {q:"State the difference between overweight and underweight.", a:"Overweight is weighing more than is healthy, usually from overeating; underweight is weighing less than is healthy, usually from a poor diet."},
    {q:"What is an eating disorder?", a:"A serious illness in which a person's eating behaviour becomes harmful, such as anorexia or bulimia."},
    {q:"Recall the seven guidelines for a healthy diet.", a:"Eat a variety of foods; maintain a desirable weight; avoid too much fat; eat food adequate in starch and fibre; avoid too much sugar; avoid too much sodium; and if a person drinks alcoholic beverages, do so only in moderation."},
    {q:"Name three health effects of obesity.", a:"Increased risk of heart disease and high blood pressure, diabetes, and strain on the joints; it also reduces stamina."},
    {q:"Why is crash dieting a poor way to control weight?", a:"It starves the body of nutrients, loses muscle as well as fat, slows metabolism and is rarely maintained, so the weight returns."}
  ],
  tf:[
    {s:"Adipose tissue is a connective tissue whose cells are filled with fat.", a:"true", why:"That is precisely what adipose tissue is."},
    {s:"Obesity affects only adults.", a:"false", why:"It is common in teenagers too, where it is also a serious psychological and social problem."},
    {s:"Eating a variety of foods is one of the guidelines for a healthy diet.", a:"true", why:"It is the first of the seven guidelines."},
    {s:"Weight control means never eating.", a:"false", why:"It means balancing sensible eating with activity to reach and hold an optimum weight."},
    {s:"Underweight can result from a poor diet.", a:"true", why:"An inadequate diet leaves the body without the energy and nutrients it needs."},
    {s:"An eating disorder is simply a bad habit that needs no treatment.", a:"false", why:"It is a serious illness requiring medical and psychological help."}
  ],
  apply:[
    {q:"A classmate wants to lose weight quickly by skipping all meals. What is your advice?", a:"Do not starve; eat balanced meals in sensible portions, cut sugar and fat, and add regular exercise — steady loss is safe and lasting."},
    {q:"An athlete is told to lose weight before a competition. What danger must be avoided?", a:"Losing weight too fast by starving or dehydrating, which weakens performance, causes injury and can be dangerous to health."},
    {q:"Why does regular exercise help weight control even without changing the diet?", a:"It uses up calories and builds muscle, which raises metabolism so the body uses more energy even at rest."},
    {q:"Name two changes a Liberian family could make cheaply to eat more healthily.", a:"Use less salt and sugar, and include more locally grown vegetables, beans and fruit with the rice rather than more oil."},
    {q:"How should a friend with signs of an eating disorder be helped?", a:"Speak to them with kindness, avoid mocking, and encourage them to see a health worker or counsellor, telling a trusted adult."}
  ],
  sort:{ title:"Weight and diet", groups:[
    {name:"Causes of obesity", items:["Overeating","Too much fat and sugar","Lack of exercise","Sedentary habits"]},
    {name:"Effects of obesity", items:["Heart disease risk","High blood pressure","Joint strain","Low self-esteem"]},
    {name:"Healthy diet guidelines", items:["Eat a variety of foods","Avoid too much fat","Avoid too much sugar","Avoid too much sodium"]},
    {name:"Eating disorders", items:["Anorexia","Bulimia","Binge eating"]}
  ]},
  compare:{ title:"The seven guidelines for a healthy diet", caption:"Complete the table explaining why each guideline matters.",
    items:[
      {p:"Eat a variety of foods", f:"No single food supplies all nutrients, so variety guarantees a full range."},
      {p:"Maintain a desirable weight", f:"Keeping to optimum weight lowers the risk of heart disease, diabetes and joint strain."},
      {p:"Avoid too much fat", f:"Excess fat is stored as adipose tissue and raises the risk of heart disease."},
      {p:"Eat food adequate in starch and fibre", f:"Starch supplies steady energy and fibre keeps digestion healthy."},
      {p:"Avoid too much sugar", f:"Sugar supplies energy without nutrients and damages the teeth."},
      {p:"Avoid too much sodium", f:"Too much salt raises blood pressure."},
      {p:"Alcohol only in moderation", f:"Alcohol is high in empty calories and harms the liver and judgement."}
    ]},
  casestudy:{ title:"Two ways to lose weight",
    text:"Two Grade 8 learners decided to lose weight before the athletics meet. Jallah stopped eating breakfast and lunch entirely and drank only water. Within two weeks he was dizzy in class, his running times had got worse, and he fainted at training. Bendu instead kept eating three meals but reduced fried food and sugary drinks, added fruit and vegetables, and walked briskly for thirty minutes five days a week. After six weeks Bendu had lost weight steadily, her times had improved, and she felt stronger. The games master used the two cases to teach the class about safe weight control.",
    questions:[
      {q:"Why did Jallah's performance get worse?", a:"Starving deprived his body of the energy and nutrients it needed, causing dizziness, weakness and fainting."},
      {q:"What did Bendu change in her eating?", a:"She kept three meals but cut fried food and sugary drinks and added fruit and vegetables."},
      {q:"What else did Bendu do besides changing her diet?", a:"She walked briskly for thirty minutes five days a week — regular exercise."},
      {q:"State the general principle this case teaches.", a:"Safe weight control combines sensible balanced eating with regular activity, producing steady loss; starvation harms health and performance."}
    ]},
  project:{ title:"Food diary and diet review",
    brief:"Record what you eat and assess it against the seven guidelines.",
    steps:["Record everything you eat and drink for three days.","Group the items into starches, proteins, fats, fruits and vegetables, and sugary items.","Compare your diet against each of the seven guidelines.","Identify two guidelines you follow well and two you do not.","Write a realistic plan of two changes you can actually make."],
    criteria:["Three full days honestly recorded","Items correctly grouped","All seven guidelines considered","Strengths and weaknesses identified","Two realistic, affordable changes proposed"]},
  activities:["Discuss obesity, its causes and effects","Discuss the relationship between weight control and eating behaviour","Research and present on eating disorders","Recall and explain the seven guidelines for a healthy diet"],
  materials:["GCSE Physical Education (Complete Revision and Practice)","Charts of food groups","Weighing scale and height chart","Posters on healthy eating"],
  assessment:["Individual presentation","Group work","Class participation","Food diary project","Written test"]
},
{
  grade:8, period:"III", sem:"One", icon:"🦴",
  title:"The Skeletal System",
  subtitle:"Functions of the skeleton, connective tissues, joints and joint movements",
  outcomes:["Learners are able to analyse and utilise the functions of the skeletal system."],
  objectives:["Discuss the importance and functions of the skeletal system","Describe the skeletal system","Identify the connective tissues","Distinguish the types of joints","Name the kinds of joint movement"],
  note:"The skeleton has five main functions: to give the body <b>support and shape</b>, to <b>protect</b> the organs, to allow <b>movement</b>, to <b>make blood cells</b>, and to serve as a store of <b>minerals</b>. Joints are classified as <b>immovable</b>, <b>slightly movable</b> and <b>freely movable</b>; the freely movable include the <b>ball and socket</b> and the <b>hinge</b>.",
  study:[
    /* ---- course text: Semester One, Period III — The Skeletal System (guide pp. 17-18) ---- */
    {k:"h3", t:"The Skeletal System — Importance and Functions"},
    {k:"p", t:"The **skeletal system** is the bony framework of the human body — about 206 bones. Its importance and functions:"},
    {k:"bul", items:["**To support and give shape** — the skeleton holds the body upright and gives it form","**To protect** — the skull guards the brain; the ribs guard the heart and lungs","**For movement** — bones are the levers the muscles pull on","**For making blood cells** — the marrow inside bones manufactures new blood","**For mineral storage** — bones store calcium and phosphorus for the body's use"]},
    {k:"rule"},
    {k:"h3", t:"The Connective Tissues"},
    {k:"table", head:["Tissue","Where found","What it does"], rows:[
      ["Cartilage","The ends of bones at the joints (and the nose and ears)","Cushions the joint so the bones glide without grinding"],
      ["Ligaments","Join bone to bone at a joint","Hold the joint together within its safe range"],
      ["Tendons","Join muscle to bone","Carry the pull of the muscle to the bone, making movement"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Types of Joints"},
    {k:"bul", items:["**Fixed (immovable) joints** — as between the plates of the skull; no movement","**Slightly movable joints** — as between the bones of the spine; small give for bending","**Freely movable joints** — as at the shoulder, elbow, hip and knee; wide movement for sport"]},
    {k:"rule"},
    {k:"h3", t:"Kinds of Joint Movements"},
    {k:"p", t:"Joint movements: **extension** (straightening the limb), **flexion** (bending it), **adduction** (moving toward the body's midline), **abduction** (moving away from it), and **rotation** (turning around the axis of the bone)."},
    {k:"rule"},
    {k:"h3", t:"The Freely Movable Joints"},
    {k:"bul", items:["**Ball-and-socket joint** — the ball of one bone sits in the cup of another: the shoulder and the hip, allowing movement in every direction","**Hinge joint** — opens and closes like a door hinge: the elbow and the knee, allowing flexion and extension only"]}
  ],
  focus:["Importance and functions of the skeletal system","Connective tissues: cartilage, ligaments, tendons","Types of joints","Kinds of joint movement","Freely movable joints: ball and socket, hinge","Care of the skeleton"],
  terms:[
    {t:"skeleton", d:"the framework of bones supporting the body", x:"The adult skeleton has 206 bones."},
    {t:"bone", d:"the hard tissue forming the skeleton", x:"Bone stores calcium."},
    {t:"cartilage", d:"tough, flexible connective tissue that cushions joints", x:"Cartilage covers the bone ends."},
    {t:"ligament", d:"tough tissue joining bone to bone at a joint", x:"A torn ligament makes a joint unstable."},
    {t:"tendon", d:"tough tissue joining muscle to bone", x:"The Achilles tendon joins calf to heel."},
    {t:"joint", d:"the place where two bones meet", x:"The knee is a joint."},
    {t:"ball and socket joint", d:"a freely movable joint allowing movement in all directions", x:"The shoulder is a ball and socket joint."},
    {t:"hinge joint", d:"a joint allowing movement in one plane, like a door", x:"The elbow is a hinge joint."},
    {t:"immovable joint", d:"a joint at which no movement occurs", x:"The joints of the skull are immovable."},
    {t:"extension", d:"straightening a joint to increase the angle", x:"Extension straightens the elbow."},
    {t:"flexion", d:"bending a joint to reduce the angle", x:"Flexion bends the knee."},
    {t:"abduction", d:"moving a limb away from the midline of the body", x:"Raising the arm sideways is abduction."},
    {t:"adduction", d:"moving a limb towards the midline of the body", x:"Bringing the arm back to the side is adduction."},
    {t:"rotation", d:"turning a bone about its own axis", x:"Rotation turns the head side to side."}
  ],
  facts:[
    {q:"State the five functions of the skeletal system.", a:"To support and give shape, to protect the organs, to allow movement, to make blood cells, and to store minerals."},
    {q:"Name the three connective tissues associated with the skeleton.", a:"Cartilage, ligaments and tendons."},
    {q:"State the difference between a ligament and a tendon.", a:"A ligament joins bone to bone at a joint; a tendon joins muscle to bone."},
    {q:"Name the three classes of joint.", a:"Immovable, slightly movable and freely movable."},
    {q:"Name the two freely movable joints studied and give an example of each.", a:"The ball and socket joint, as at the shoulder and hip; and the hinge joint, as at the elbow and knee."},
    {q:"Name the five kinds of joint movement.", a:"Extension, flexion, adduction, abduction and rotation."},
    {q:"What does cartilage do at a joint?", a:"It covers the ends of the bones, cushioning them and allowing them to move smoothly against each other."},
    {q:"Where in the body are blood cells made?", a:"In the marrow inside certain bones."},
    {q:"Name two ways to keep the skeleton healthy.", a:"Eat food rich in calcium and vitamin D, and take regular weight-bearing exercise; also avoid injury by warming up and using proper technique."}
  ],
  tf:[
    {s:"The skeleton makes blood cells.", a:"true", why:"Blood cells are produced in the marrow of certain bones."},
    {s:"A tendon joins bone to bone.", a:"false", why:"A tendon joins muscle to bone; a ligament joins bone to bone."},
    {s:"The elbow is a ball and socket joint.", a:"false", why:"The elbow is a hinge joint; the shoulder and hip are ball and socket joints."},
    {s:"Flexion means bending a joint.", a:"true", why:"Flexion decreases the angle at the joint, while extension increases it."},
    {s:"The joints of the skull are immovable.", a:"true", why:"They are fused so as to protect the brain."},
    {s:"Cartilage makes bones rub directly on each other.", a:"false", why:"Cartilage cushions the bone ends so they move smoothly without rubbing."}
  ],
  apply:[
    {q:"A player twists his knee and it becomes unstable. Which tissue is likely damaged?", a:"A ligament, which holds bone to bone and gives the joint its stability."},
    {q:"Which joint movements are you using when you kick a football?", a:"Flexion and extension at the knee and hip, with some rotation and abduction as the leg swings."},
    {q:"Why does a broken bone in a child usually heal faster than in an old person?", a:"Young bone is more actively growing and better supplied with blood, so repair is quicker."},
    {q:"Explain why the shoulder can move in more directions than the elbow.", a:"The shoulder is a ball and socket joint allowing movement in all directions, while the elbow is a hinge joint allowing movement in only one plane."},
    {q:"Why should a learner carrying a heavy load use the legs rather than bending the back?", a:"To keep the spine straight and let the strong leg muscles and hip joints do the work, protecting the back from injury."}
  ],
  sort:{ title:"The skeletal system", groups:[
    {name:"Functions of the skeleton", items:["Support and shape","Protection","Movement","Making blood cells"]},
    {name:"Connective tissues", items:["Cartilage","Ligaments","Tendons"]},
    {name:"Types of joints", items:["Immovable","Slightly movable","Ball and socket","Hinge"]},
    {name:"Joint movements", items:["Extension","Flexion","Abduction","Rotation"]}
  ]},
  compare:{ title:"Joints and their movements", caption:"Complete the table of joints, examples and the movement each allows.",
    items:[
      {p:"Ball and socket", f:"Shoulder and hip; allows movement in all directions including rotation."},
      {p:"Hinge", f:"Elbow and knee; allows flexion and extension in one plane only."},
      {p:"Slightly movable", f:"Between the vertebrae; allows limited movement while protecting the spinal cord."},
      {p:"Immovable", f:"The joints of the skull; fused for protection of the brain."},
      {p:"Extension and flexion", f:"Straightening and bending a joint — increasing or decreasing the angle."},
      {p:"Abduction and adduction", f:"Moving a limb away from and back towards the midline of the body."}
    ]},
  casestudy:{ title:"The twisted ankle",
    text:"During a basketball practice Fatu landed awkwardly and her ankle rolled outwards. It swelled at once and she could not put weight on it. The games master applied the RICE method and sent her to the clinic. The nurse explained that no bone was broken but that a ligament on the outside of the ankle had been overstretched — a sprain. She said the ligament joins bone to bone and holds the joint stable, so until it healed the ankle would give way easily. Fatu rested it, then did gentle strengthening and balance exercises for three weeks before returning to play.",
    questions:[
      {q:"Which tissue did Fatu injure, and what does it do?", a:"A ligament, which joins bone to bone and holds the joint stable."},
      {q:"What is the name for this kind of injury?", a:"A sprain."},
      {q:"Why would the ankle 'give way easily' until it healed?", a:"The stretched ligament no longer held the joint firmly, so the joint had lost its stability."},
      {q:"Why did Fatu do balance exercises before returning to play?", a:"To restore the joint's stability and control so that it would not turn over again."}
    ]},
  project:{ title:"Model or chart of the skeleton",
    brief:"Produce a labelled skeleton chart and a joint movement demonstration.",
    steps:["Draw or model the human skeleton.","Label at least twelve bones.","Mark one ball and socket joint and one hinge joint.","Demonstrate the five joint movements on your own body and photograph or describe each.","Write one sentence on how to care for the skeleton."],
    criteria:["Twelve bones correctly labelled","Both joint types correctly marked","Five movements correctly demonstrated","Accurate descriptions","Sensible care advice"]},
  activities:["Discuss the importance and functions of the skeletal system","Identify cartilage, ligaments and tendons on a chart","Classify joints as immovable, slightly movable and freely movable","Demonstrate extension, flexion, adduction, abduction and rotation"],
  materials:["Physical Education textbooks","Skeletal system poster","GCSE Physical Education (Complete Revision and Practice)","Model skeleton if available"],
  assessment:["Individual presentation","Group work","Class participation","Labelled skeleton project","Written test"]
},
{
  grade:8, period:"IV", sem:"Two", icon:"🥗",
  title:"Diet and Nutrition",
  subtitle:"Nutrients, macronutrients, micronutrients and the balanced diet",
  outcomes:["Learners are able to recognise different foods, differentiate nutrients from nutrition, explain that a balanced diet is important for a healthy active lifestyle, and show that diet can improve performance."],
  objectives:["Recognise different foods, what they contain and why we need to eat them","Explain that eating a balanced diet is an important part of a healthy, active lifestyle","Differentiate between nutrients and nutrition","Show that diet can help improve your performance","State the seven rules for a healthy diet"],
  note:"<b>Nutrition</b> is the process by which the body takes in and uses food; a <b>nutrient</b> is a substance in food that the body needs. <b>Macronutrients</b> — proteins, carbohydrates and fats — are needed in large amounts. <b>Micronutrients</b> — vitamins and minerals — are needed in small amounts, together with <b>water and dietary fibre</b>.",
  study:[
    /* ---- course text: Semester Two, Period IV — Diet and Nutrition (guide pp. 19) ---- */
    {k:"h3", t:"Nutrients and Nutrition — the Difference"},
    {k:"p", t:"**Nutrients** are the chemical substances in food that the body uses — proteins, carbohydrates, fats, vitamins, minerals, water and fibre. **Nutrition** is the whole study and practice of how the body takes in and uses food. A **diet** is what a person habitually eats and drinks, and a **balanced diet** — an important part of a healthy, active lifestyle — contains every nutrient in the right amount. Recognize different foods, what they contain, and why we need to eat them; show that diet can help improve your performance."},
    {k:"rule"},
    {k:"h3", t:"The Seven (7) Rules for a Healthy Diet"},
    {k:"num", items:["**Eat a variety of foods.**","**Maintain a desirable weight.**","**Avoid too much fat.**","**Eat food adequate in starch and fibre.**","**Avoid too much sugar.**","**Avoid too much sodium** (salt).","**If a person drinks alcoholic beverages, he or she should do so in moderation.**"]},
    {k:"rule"},
    {k:"h3", t:"Macronutrients — Needed in Large Amounts"},
    {k:"bul", items:["**Proteins** — build and repair the body's tissues; from meat, fish, eggs and beans","**Carbohydrates** — the body's main fuel for work and play; from rice, cassava, bread and yam","**Fats** — concentrated energy and protection of organs; needed in small amounts only"]},
    {k:"rule"},
    {k:"h3", t:"Micronutrients — Needed in Small Amounts"},
    {k:"bul", items:["**Vitamins** — regulate the body's processes and protect against disease; from fruits and vegetables","**Minerals** — build bones and blood (calcium, iron); from milk, greens and meat","**Water and dietary fibre** — water carries every process of the body; fibre keeps the digestion moving"]},
    {k:"p", t:"Remember: an athlete's plate decides an athlete's performance — eat the variety, keep the weight, and drink water, and the training will show."}
  ],
  focus:["Nutrients and nutrition distinguished","Macronutrients: proteins, carbohydrates, fats","Micronutrients: vitamins, minerals, water and fibre","The balanced diet","The seven rules for a healthy diet","Diet and sports performance"],
  terms:[
    {t:"nutrition", d:"the process by which the body takes in and uses food", x:"Good nutrition supports growth."},
    {t:"nutrient", d:"a substance in food that the body needs", x:"Protein is an essential nutrient."},
    {t:"macronutrient", d:"a nutrient needed in large amounts", x:"Carbohydrate is a macronutrient."},
    {t:"micronutrient", d:"a nutrient needed only in small amounts", x:"Vitamin C is a micronutrient."},
    {t:"protein", d:"the nutrient that builds and repairs body tissue", x:"Fish and beans supply protein."},
    {t:"carbohydrate", d:"the nutrient that supplies the body's main energy", x:"Rice and cassava are carbohydrates."},
    {t:"fat", d:"a nutrient that stores energy and protects organs", x:"Palm oil is a source of fat."},
    {t:"vitamin", d:"a micronutrient needed in small amounts for health", x:"Vitamin A protects the eyes."},
    {t:"mineral", d:"an inorganic micronutrient such as calcium or iron", x:"Calcium builds strong bones."},
    {t:"dietary fibre", d:"plant material that is not digested but aids the bowel", x:"Fibre prevents constipation."},
    {t:"balanced diet", d:"a diet supplying all nutrients in the right proportions", x:"A balanced diet keeps the body healthy."},
    {t:"malnutrition", d:"ill health caused by a diet lacking or unbalanced in nutrients", x:"Malnutrition stunts growth."},
    {t:"hydration", d:"maintaining the body's water level", x:"Hydration is vital during exercise."},
    {t:"energy", d:"the capacity to do work, obtained from food", x:"Carbohydrate is the quickest source of energy."}
  ],
  facts:[
    {q:"State the difference between nutrition and a nutrient.", a:"Nutrition is the process by which the body takes in and uses food; a nutrient is a particular substance in food that the body needs."},
    {q:"Name the three macronutrients.", a:"Proteins, carbohydrates and fats."},
    {q:"Name the micronutrients.", a:"Vitamins and minerals, together with water and dietary fibre."},
    {q:"What is the main function of carbohydrate?", a:"To supply the body's main source of energy."},
    {q:"What is the main function of protein?", a:"To build and repair body tissue, including muscle."},
    {q:"State the seven rules for a healthy diet.", a:"Eat a variety of foods; maintain a desirable weight; avoid too much fat; eat food adequate in starch and fibre; avoid too much sugar; avoid too much sodium; and take alcoholic beverages, if at all, only in moderation."},
    {q:"What is a balanced diet?", a:"A diet that supplies all the nutrients the body needs, in the right proportions."},
    {q:"How can diet improve sports performance?", a:"Adequate carbohydrate supplies energy for training and competition, protein repairs muscle after exercise, and proper hydration prevents fatigue and cramp."},
    {q:"Name two local Liberian foods rich in protein.", a:"Fish and beans (also groundnuts, eggs and meat)."}
  ],
  tf:[
    {s:"Carbohydrates are the body's main source of energy.", a:"true", why:"Starches and sugars are broken down to supply working energy."},
    {s:"Vitamins are macronutrients.", a:"false", why:"Vitamins are micronutrients, needed only in small amounts."},
    {s:"Protein builds and repairs body tissue.", a:"true", why:"That is its principal function, including the repair of muscle after exercise."},
    {s:"Water is not important in the diet.", a:"false", why:"Water is essential; the body needs it for every process and loses it in sweat during exercise."},
    {s:"Dietary fibre is digested and absorbed for energy.", a:"false", why:"Fibre is not digested; it passes through and helps keep the bowel healthy."},
    {s:"An athlete needs a balanced diet just as a non-athlete does.", a:"true", why:"The proportions may differ, but all the same nutrient groups are required."}
  ],
  apply:[
    {q:"A learner eats only rice and oil every day. Which nutrients is she likely to lack?", a:"Protein, vitamins and minerals, and fibre — leading to poor growth, low resistance to illness and fatigue."},
    {q:"Why should a footballer eat a carbohydrate meal some hours before a match?", a:"Carbohydrate supplies the main working energy, and eating well before the match allows time for digestion."},
    {q:"Why must athletes drink during long exercise in Liberia's climate?", a:"Heat and humidity cause heavy sweating; without replacing water the athlete becomes dehydrated, tires quickly and risks cramp and heat illness."},
    {q:"Plan a cheap balanced meal from foods available in your market.", a:"Rice or cassava for carbohydrate, fish or beans for protein, greens and pepper for vitamins and minerals, with a little palm oil for fat, and water to drink."},
    {q:"A pupil skips breakfast every day. How might this affect school and sport?", a:"Without energy the pupil tires, loses concentration in lessons and performs poorly in physical activity."}
  ],
  sort:{ title:"Diet and nutrition", groups:[
    {name:"Macronutrients", items:["Protein","Carbohydrate","Fat"]},
    {name:"Micronutrients", items:["Vitamins","Minerals","Water","Dietary fibre"]},
    {name:"Protein foods", items:["Fish","Beans","Eggs","Groundnuts"]},
    {name:"Carbohydrate foods", items:["Rice","Cassava","Plantain","Sweet potato"]}
  ]},
  compare:{ title:"The nutrients and what they do", caption:"Complete the table of nutrients, functions and food sources.",
    items:[
      {p:"Protein", f:"Builds and repairs tissue and muscle; found in fish, beans, eggs and meat."},
      {p:"Carbohydrate", f:"The main source of energy; found in rice, cassava, plantain and bread."},
      {p:"Fat", f:"Stores energy, protects organs and carries some vitamins; found in palm oil and groundnuts."},
      {p:"Vitamins", f:"Regulate body processes and resist disease; found in fruits and green vegetables."},
      {p:"Minerals", f:"Build bone and blood — calcium and iron; found in greens, fish and milk."},
      {p:"Water and fibre", f:"Water sustains every body process; fibre keeps digestion regular; found in fluids, fruit and vegetables."}
    ]},
  casestudy:{ title:"Feeding the team",
    text:"Before the district tournament the coach found that half his players came to afternoon training having eaten nothing since morning. They tired within twenty minutes and two suffered cramp. He spoke to the parents' committee, and a simple arrangement was made: each player brought a small portion of rice with beans or fish to eat two hours before training, and a bottle of clean water to drink during it. Within three weeks the coach reported that the team trained the full ninety minutes without collapse, and cramp had almost disappeared.",
    questions:[
      {q:"Why did the players tire within twenty minutes?", a:"They had eaten nothing since morning, so they had no carbohydrate energy available for the work."},
      {q:"Which nutrients did the new meal supply?", a:"Carbohydrate from the rice for energy and protein from the beans or fish for muscle repair."},
      {q:"Why was drinking water during training important?", a:"Heavy sweating in the heat causes dehydration, which brings fatigue and cramp; drinking replaces the lost water."},
      {q:"Why was the meal eaten two hours before rather than immediately before?", a:"To allow time for digestion, so the energy is available without a full, uncomfortable stomach during exercise."}
    ]},
  project:{ title:"Balanced meal plan for an athlete",
    brief:"Plan a day's food for a learner who trains after school.",
    steps:["List the foods available in your local market.","Plan breakfast, lunch, a pre-training snack and supper.","For each meal, name the nutrients it supplies.","Check the plan against the seven rules for a healthy diet.","Give the approximate cost and say whether a family could afford it."],
    criteria:["Local foods used","All four meals planned","Nutrients correctly identified","Seven rules applied","Realistic cost given"]},
  activities:["Discuss the seven rules for a healthy diet","Differentiate nutrients from nutrition","Classify foods as macronutrient or micronutrient sources","Plan a balanced meal from local foods"],
  materials:["Physical Education textbook","Poster with pictures of the various food groups","Samples of local foods","Charts of nutrients"],
  assessment:["Individual presentation","Group work","Class participation","Meal plan project","Written test"]
},
{
  grade:8, period:"V", sem:"Two", icon:"🎾",
  title:"Racket Sports",
  subtitle:"Lawn tennis, table tennis and badminton: history, rules, equipment and strokes",
  outcomes:["Learners are able to demonstrate motor skills, good body posture, proper grips and techniques, and coordination during racket games."],
  objectives:["Explain the history and rules of lawn tennis","Select tennis equipment appropriate for them","Demonstrate the proper grips and techniques for strokes","Identify the playing courtesies, safety considerations and basic terminology associated with tennis"],
  note:"Racket sports are played by striking a ball or shuttle over a net with a racket. In <b>lawn tennis</b> the ball may bounce once before it is returned; in <b>badminton</b> the shuttle must not touch the ground at all. All three games depend on the <b>grip</b>, <b>footwork</b>, <b>ready position</b> and eye–hand <b>coordination</b>.",
  study:[
    /* ---- course text: Semester Two, Period V — Racket Sports: Lawn Tennis, Table Tennis, Badminton (guide pp. 20) ---- */
    {k:"h3", t:"History (Nature and Purpose)"},
    {k:"p", t:"The **racket sports** — **lawn tennis**, **table tennis** and **badminton** — are net games in which a ball or shuttle is struck with a racket (or bat) over a net. Lawn tennis grew from old handball games into the outdoor court game; table tennis shrank it to the parlour table; badminton replaces the ball with the feathered **shuttlecock**. Their purpose is the same: all three train quick eyes, quick feet and good body posture."},
    {k:"rule"},
    {k:"h3", t:"Official Rules of Lawn Tennis"},
    {k:"bul", items:["The server stands behind the baseline and serves diagonally into the service box; a served ball that faults may be taken **again** — the second serve.","Scoring runs **love, 15, 30, 40, game**; when both players reach 40 the score is **deuce**, and a player must take two points running to win the game.","A ball landing **on the line is in**; a ball touched by the body, or hit twice, loses the point.","Players change ends after odd games and observe the courtesies: no shouting during play, and honest line calls."]},
    {k:"rule"},
    {k:"h3", t:"Skills and Techniques — the Grips and Strokes"},
    {k:"p", t:"Demonstrate proper **grips** — the **forehand grip** (shake hands with the racket), the **backhand grip** (thumb laid up the handle) and the **service grip** — and the strokes built on them: the **forehand drive**, the **backhand drive**, the **serve**, the **volley** and the **smash**. In table tennis the same family appears in miniature, and in badminton the strokes answer the flight of the shuttle: the low and high service, the clear, the drop shot and the smash."},
    {k:"rule"},
    {k:"h3", t:"Equipment, Courtesies and Terminology"},
    {k:"p", t:"Select equipment appropriate for yourself: a **racket** of the right weight and grip size, **tennis balls**, the **net** at regulation height, and proper flat court shoes. Learn the **playing courtesies** (return stray balls promptly, call scores clearly, respect close lines), the **safety considerations** (clear the court of obstacles; warm the shoulder before serving), and the **basic terminology** — ace, deuce, fault, let, rally and set. Then demonstrate various skills and techniques in the game."}
  ],
  focus:["History, nature and purpose of racket sports","Official rules of lawn tennis","Skills and techniques: grips and strokes","Equipment selection","Playing courtesies and safety","Basic terminology"],
  terms:[
    {t:"racket", d:"the frame with strings used to strike the ball or shuttle", x:"Choose a racket of the right weight."},
    {t:"grip", d:"the way the hand holds the racket handle", x:"The forehand grip is like shaking hands."},
    {t:"forehand", d:"a stroke played on the racket side of the body", x:"Her forehand is powerful."},
    {t:"backhand", d:"a stroke played across the body on the non-racket side", x:"He practised the backhand daily."},
    {t:"serve", d:"the stroke that starts each point", x:"A good serve wins free points."},
    {t:"rally", d:"the exchange of strokes during a point", x:"The rally lasted twenty shots."},
    {t:"volley", d:"striking the ball before it bounces", x:"He won the point with a volley."},
    {t:"let", d:"a point replayed, for example when the serve clips the net and lands in", x:"The umpire called a let."},
    {t:"fault", d:"an invalid serve", x:"Two faults lose the point."},
    {t:"deuce", d:"the score when both players reach forty", x:"The game went to deuce."},
    {t:"baseline", d:"the back line of the court", x:"She served from behind the baseline."},
    {t:"ready position", d:"the balanced stance from which a player moves to the ball", x:"Return to the ready position after each shot."},
    {t:"footwork", d:"the movement of the feet to reach the ball in balance", x:"Good footwork wins rallies."},
    {t:"courtesy", d:"good manners shown to opponents and officials", x:"Calling your own faults is a courtesy."}
  ],
  facts:[
    {q:"Name three racket sports studied in this unit.", a:"Lawn tennis, table tennis and badminton."},
    {q:"What is the main difference between tennis and badminton in play?", a:"In tennis the ball may bounce once before being returned; in badminton the shuttle must never touch the ground."},
    {q:"Name four pieces of equipment needed for lawn tennis.", a:"A racket, tennis balls, a net and suitable shoes (a whistle and stop watch are used by officials)."},
    {q:"Name the two basic groundstrokes in tennis.", a:"The forehand and the backhand."},
    {q:"What is a fault in tennis?", a:"An invalid serve — for instance one that misses the correct service box or is struck from the wrong position."},
    {q:"What is meant by deuce?", a:"The score when both players have reached forty; a player must then win two points in a row to take the game."},
    {q:"What is the ready position and why does it matter?", a:"A balanced stance facing the net with the racket in front and weight on the balls of the feet; it lets the player move quickly in any direction."},
    {q:"State three playing courtesies in racket sports.", a:"Call your own faults honestly, do not distract an opponent during play, and acknowledge a good shot; also return balls to the server properly."},
    {q:"State two safety considerations for racket sports.", a:"Keep a safe distance from other players so rackets do not strike anyone, and check the court for water, stones or obstacles before play."}
  ],
  tf:[
    {s:"In badminton the shuttle may bounce once before it is returned.", a:"false", why:"The shuttle must never touch the ground; in tennis one bounce is allowed."},
    {s:"The forehand is played on the racket side of the body.", a:"true", why:"The backhand is the stroke played across the body on the other side."},
    {s:"A volley is a ball struck before it bounces.", a:"true", why:"That is the definition of a volley."},
    {s:"Calling your own fault honestly is part of good sportsmanship.", a:"true", why:"It is one of the basic playing courtesies of racket sports."},
    {s:"Any racket is suitable for any player regardless of size.", a:"false", why:"The racket should suit the player's size and strength; too heavy a racket spoils technique and risks injury."},
    {s:"Footwork is unimportant in racket sports.", a:"false", why:"Good footwork is essential to reach the ball in balance and play a controlled stroke."}
  ],
  apply:[
    {q:"A learner keeps hitting the ball late and off balance. What should she work on first?", a:"Footwork and the ready position — moving early to the ball so the stroke can be played in balance."},
    {q:"Your school cannot afford tennis rackets. How can you still teach racket skills?", a:"Use table tennis bats or improvised wooden bats with a soft ball over a rope net, which teaches grip, footwork and eye–hand coordination."},
    {q:"Two players are practising close together and one is struck by a racket. What rule was broken?", a:"The safety rule of keeping a safe distance; players must have clear space for the full swing of the racket."},
    {q:"Why do beginners often find the backhand harder than the forehand?", a:"It is played across the body, needing a different grip and more shoulder rotation, so it feels less natural until practised."},
    {q:"How does playing racket sports improve fitness?", a:"It builds agility, coordination, reaction time and cardiovascular endurance through repeated short bursts of movement."}
  ],
  sort:{ title:"Racket sports", groups:[
    {name:"Racket sports", items:["Lawn tennis","Table tennis","Badminton"]},
    {name:"Strokes", items:["Forehand","Backhand","Serve","Volley"]},
    {name:"Equipment", items:["Racket","Ball or shuttle","Net","Shoes"]},
    {name:"Courtesies and safety", items:["Call faults honestly","Keep a safe distance","Do not distract opponents","Check the court"]}
  ]},
  compare:{ title:"Comparing the three racket sports", caption:"Complete the table comparing the three games.",
    items:[
      {p:"Lawn tennis", f:"Played on a large court with a ball that may bounce once; heavy racket, powerful groundstrokes."},
      {p:"Table tennis", f:"Played on a table with a small light ball and bat; demands very fast reaction and fine control."},
      {p:"Badminton", f:"Played with a shuttle that must not touch the ground; light racket, wrist action and overhead strokes."},
      {p:"Common skills", f:"Grip, ready position, footwork and eye–hand coordination are needed in all three."},
      {p:"Scoring", f:"Each uses points won in rallies, with a set number of points or games deciding the match."},
      {p:"Safety", f:"All require clear space around each player and a dry, obstacle-free playing surface."}
    ]},
  casestudy:{ title:"Rackets from nothing",
    text:"A school in Lofa County wanted to introduce racket sports but had no money for equipment. The technical drawing teacher helped learners cut simple flat bats from plywood and sand them smooth. A rope was stretched between two poles as a net, and the class used soft rubber balls. They learned the forehand and backhand grips, the ready position and footwork, and played rallies in pairs. Two years later, when a donation of four proper tennis rackets arrived, the games master found that the learners already had the grip and footwork, and progressed to real tennis within a few weeks.",
    questions:[
      {q:"How did the school improvise its equipment?", a:"Plywood bats cut and sanded by learners, a rope between poles as a net, and soft rubber balls."},
      {q:"Which fundamental skills were the learners able to develop with improvised equipment?", a:"The forehand and backhand grips, the ready position, footwork and rallying."},
      {q:"Why did they progress so quickly when real rackets arrived?", a:"The fundamental skills of grip and footwork transfer directly; only the feel of the racket had to be adjusted."},
      {q:"What general lesson does this offer other schools?", a:"Lack of expensive equipment need not prevent teaching a sport; the basic skills can be built with safe improvised materials."}
    ]},
  project:{ title:"Racket sport rules and skills card",
    brief:"Research one racket sport and teach a skill from it.",
    steps:["In groups of three, choose lawn tennis, table tennis or badminton.","Research and write its history in five sentences.","List eight rules of the game.","Draw the court with its main lines and dimensions labelled.","Teach one stroke to another group and assess how well they learn it."],
    criteria:["Group of three working together","Accurate short history","Eight rules correctly stated","Court correctly drawn and labelled","A stroke clearly taught and demonstrated"]},
  activities:["In groups of three, research and discuss the various racket sports","Demonstrate the proper grips and techniques for the strokes","Practise the ready position and footwork drills","Play modified rallies applying the rules and courtesies"],
  materials:["Tennis rackets and balls","Net","Whistle","Stop watch","Audio-visual materials"],
  assessment:["Individual presentation","Group work","Class participation","Practical stroke demonstration","Written test on rules"]
},
{
  grade:8, period:"VI", sem:"Two", icon:"📊",
  title:"Fitness Testing",
  subtitle:"Assessing personal readiness and knowing your fitness level before training",
  outcomes:["Learners are able to explain the values of exercise and take part in health fitness tests to prepare for physical activities and monitor changes in body growth."],
  objectives:["Assess their personal readiness for starting an activity","Know their fitness level before engaging in any training or activity","Carry out tests for cardiovascular endurance","Carry out health-related and skill-related fitness tests","Record and interpret their results"],
  note:"<b>Fitness testing</b> measures where you are now, so training can be planned and progress checked. Test before you train: it establishes a <b>baseline</b>. A <b>health check</b> for readiness asks whether the learner has chest pain, dizziness, asthma, or a recent injury; anyone in doubt should see a health worker before starting hard training.",
  study:[
    /* ---- course text: Semester Two, Period VI — Fitness Testing (guide pp. 21) ---- */
    {k:"h3", t:"Why We Test Fitness"},
    {k:"p", t:"**Fitness testing** means engaging in health and fitness tests to prepare for physical activities and for the changes in body growth. Two duties fall on every learner before training begins: **assess your personal readiness for starting an activity**, and **know your fitness level before engaging in any training or activities**. Testing gives a starting point, guides the training plan, and measures progress honestly."},
    {k:"rule"},
    {k:"h3", t:"Fitness Tests for Cardiovascular Endurance"},
    {k:"p", t:"For **cardiovascular endurance**, distance tests measure how long the heart and lungs can keep the body supplied with oxygen — timed runs and walks such as the twelve-minute run or the one-mile walk, with the distance or time recorded in the diary keeping book."},
    {k:"rule"},
    {k:"h3", t:"Health-Related and Skill-Related Fitness Tests"},
    {k:"bul", items:["**Health-related fitness tests** — cardiovascular endurance runs; sit-up and press-up counts for muscular strength and endurance; sit-and-reach for flexibility; and body measurements for body composition","**Skill-related fitness tests** — shuttle runs for agility and speed; balance stands and beam walks for balance; throwing and catching drills for coordination; ruler-drop catches for reaction time"]},
    {k:"rule"},
    {k:"h3", t:"Health Checks and the Tools of Testing"},
    {k:"p", t:"Before vigorous testing come the **health checks**: rest if you are ill, report old injuries, and stop at once on chest pain or dizziness. The guide names the tools of the testing ground:"},
    {k:"bul", items:["**Pedometer** — counts steps and distance walked","**Diary keeping book** — records every test, score and session so progress can be seen","**Treadmill** — the machine for measured walking and running tests","**Dynamometer** — measures the strength of the grip","**Heart rate monitor** — reads the pulse before, during and after exercise"]},
    {k:"p", t:"Demonstrate the various health and fitness tests; record the results; re-test after a term of training — and let the numbers tell your improvement."}
  ],
  focus:["Personal readiness and health checks","Tests for cardiovascular endurance","Health-related fitness tests","Skill-related fitness tests","Recording and interpreting results","Monitoring changes in body growth"],
  terms:[
    {t:"fitness test", d:"a standard task used to measure a component of fitness", x:"The bleep test is a fitness test."},
    {t:"baseline", d:"the first measurement, used for comparison later", x:"Record a baseline before training."},
    {t:"health check", d:"a set of questions and observations confirming a learner is fit to train", x:"A health check comes before any test."},
    {t:"readiness", d:"being physically prepared to begin an activity safely", x:"Assess readiness before hard exercise."},
    {t:"resting pulse", d:"heart beats per minute when at rest", x:"A low resting pulse suggests good fitness."},
    {t:"recovery rate", d:"how fast the pulse returns to normal after exercise", x:"A quick recovery rate shows fitness."},
    {t:"pedometer", d:"a device that counts the steps a person takes", x:"The pedometer recorded 8,000 steps."},
    {t:"dynamometer", d:"an instrument that measures grip or muscle strength", x:"The dynamometer measured her grip."},
    {t:"heart rate monitor", d:"a device that records the pulse during exercise", x:"The monitor showed 160 beats per minute."},
    {t:"treadmill", d:"a machine for walking or running on the spot", x:"The treadmill is used for endurance testing."},
    {t:"sit-and-reach", d:"a test of flexibility of the back and hamstrings", x:"He scored well in the sit-and-reach."},
    {t:"shuttle run", d:"a test of agility, running back and forth between markers", x:"The shuttle run tests agility."},
    {t:"norm", d:"the typical result for a given age and sex, used for comparison", x:"Compare your score with the norm."},
    {t:"training diary", d:"a record of sessions completed and results achieved", x:"Keep a training diary each week."}
  ],
  facts:[
    {q:"Why should fitness be tested before training begins?", a:"To assess personal readiness, to know the current fitness level, and to establish a baseline against which progress can be measured."},
    {q:"Name a test for cardiovascular endurance.", a:"A timed run such as the six- or twelve-minute run, or a step test measuring recovery pulse."},
    {q:"Name a test for muscular endurance.", a:"The number of sit-ups or press-ups completed in one minute."},
    {q:"Name a test for flexibility.", a:"The sit-and-reach test."},
    {q:"Name a test for agility.", a:"The shuttle run between two markers."},
    {q:"Name four instruments used in fitness testing.", a:"A pedometer, a dynamometer, a heart rate monitor and a treadmill (also a stop watch and measuring tape)."},
    {q:"What does a quick recovery rate indicate?", a:"That the person is fit — the heart and lungs return to their resting state rapidly after exertion."},
    {q:"Why is a diary or record book kept?", a:"To record sessions and results so that progress can be tracked and the programme adjusted."},
    {q:"State two questions in a readiness health check.", a:"Do you feel chest pain or dizziness during exertion, and do you have asthma or a recent injury? Anyone answering yes should see a health worker first."}
  ],
  tf:[
    {s:"Fitness should be tested before starting a training programme.", a:"true", why:"It establishes readiness and a baseline for measuring progress."},
    {s:"A dynamometer measures the pulse.", a:"false", why:"A dynamometer measures grip or muscle strength; a heart rate monitor measures the pulse."},
    {s:"A quick recovery of the pulse after exercise indicates good fitness.", a:"true", why:"A trained heart and lungs restore normal function faster."},
    {s:"A learner with chest pain during exertion should simply train harder.", a:"false", why:"Chest pain is a warning sign; that learner must be seen by a health worker before training."},
    {s:"The sit-and-reach test measures flexibility.", a:"true", why:"It measures the range of movement of the back and hamstrings."},
    {s:"There is no value in repeating a fitness test later.", a:"false", why:"Repeating the test against the baseline is exactly how progress is measured."}
  ],
  apply:[
    {q:"Your school has no treadmill or heart rate monitor. How can you still test fitness?", a:"Use a timed run over a measured distance, count the pulse at the wrist with a watch, count sit-ups in a minute, and use a ruler for the sit-and-reach."},
    {q:"A learner scores poorly on every test. How should the teacher respond?", a:"Encourage rather than shame, set individual targets based on the learner's own baseline, and measure improvement against that, not against classmates."},
    {q:"Why should the same test be carried out under the same conditions each time?", a:"So that the comparison is fair; changes in surface, time of day or method would make the results meaningless."},
    {q:"A learner reports dizziness during a run. What do you do?", a:"Stop the test at once, sit her down in shade with water, and refer her for a health check before she trains again."},
    {q:"How would you use test results to plan training for the class?", a:"Group learners by their weakest component and set specific work — endurance running for some, strength or flexibility work for others."}
  ],
  sort:{ title:"Fitness testing", groups:[
    {name:"Cardiovascular tests", items:["Timed run","Step test","Recovery pulse"]},
    {name:"Health-related tests", items:["Sit-ups in a minute","Sit-and-reach","Grip strength","Body measurements"]},
    {name:"Skill-related tests", items:["Shuttle run","Balance hold","Reaction ruler drop","Standing jump"]},
    {name:"Testing equipment", items:["Pedometer","Dynamometer","Heart rate monitor","Stop watch"]}
  ]},
  compare:{ title:"Fitness tests and what they measure", caption:"Complete the table of tests, the component measured and how it is scored.",
    items:[
      {p:"Timed run (six minutes)", f:"Cardiovascular endurance; scored by the distance covered."},
      {p:"Sit-ups in one minute", f:"Muscular endurance of the abdomen; scored by the number completed correctly."},
      {p:"Sit-and-reach", f:"Flexibility of the back and hamstrings; scored in centimetres reached."},
      {p:"Shuttle run", f:"Agility; scored by the time taken to complete the set course."},
      {p:"Grip test with dynamometer", f:"Muscular strength; scored by the force registered."},
      {p:"Recovery pulse", f:"Cardiovascular fitness; scored by how fast the pulse returns towards resting level."}
    ]},
  casestudy:{ title:"Before and after",
    text:"At the start of the term, the games master tested all of Grade 8. Sekou covered 900 metres in the six-minute run, managed 18 sit-ups and reached 4 cm in the sit-and-reach. He was disappointed to be near the bottom of the class. The teacher told him not to compare himself with others, but with himself, and set him a personal target. Sekou trained three times a week for eight weeks. When the tests were repeated he covered 1,150 metres, managed 31 sit-ups and reached 11 cm. He had not become the best in the class, but he had improved more than anyone else.",
    questions:[
      {q:"What was Sekou's baseline in the six-minute run?", a:"900 metres."},
      {q:"By how much did his sit-up score improve?", a:"By 13, from 18 to 31 sit-ups."},
      {q:"Why did the teacher tell him to compare himself with himself?", a:"Because learners begin at different levels; measuring against your own baseline shows real progress and keeps motivation."},
      {q:"What made Sekou's improvement possible?", a:"Regular training three times a week for eight weeks, with a clear personal target."}
    ]},
  project:{ title:"Class fitness testing day",
    brief:"Organise, run and report a fitness testing session.",
    steps:["Design a readiness health check of five questions.","Choose four tests covering endurance, strength, flexibility and agility.","Test every member of your group and record the results in a table.","Calculate the group average for each test.","Write two recommendations for the group's training based on the weakest results."],
    criteria:["Sensible five-question health check","Four appropriate tests chosen","Complete results table","Averages correctly calculated","Two justified training recommendations"]},
  activities:["Assess personal readiness using a health check","Demonstrate and carry out the various health fitness tests","Record results and calculate class averages","Interpret results and set individual targets"],
  materials:["GCSE Physical Education (Complete Revision and Practice)","Pedometer and dynamometer where available","Heart rate monitors and treadmill where available","Diary keeping book","Stop watch and measuring tape"],
  assessment:["Individual presentation","Group work","Class participation","Practical conduct of the tests","Written report of results"]
},

/* ================================ GRADE 9 ================================ */
{
  grade:9, period:"I", sem:"One", icon:"🏅",
  title:"Introduction to Physical Education",
  subtitle:"The history and importance of physical education and general health",
  outcomes:["Learners explain the history and importance of physical education and general health."],
  objectives:["Discuss Physical Education as a field of study","Explain general health","Discuss the history of Physical Education and its historical contributions","Explain the importance of Physical Education","Identify health-related activities"],
  note:"<b>Physical Education</b> is the study of the body in motion. It plays a crucial role in physical development and well-being: the maintenance of the body through <b>fitness, health, flexibility and endurance</b> promotes sound reasoning and healthy growth. Organised physical education traces back to ancient Greece and the <b>Olympic Games</b>, and became part of modern school curricula in the nineteenth century.",
  study:[
    /* ---- course text: Semester One, Period I — Introduction to Physical Education (guide pp. 22) ---- */
    {k:"h3", t:"The History of Physical Education"},
    {k:"p", t:"**Physical Education** is the study of the body in motion — the school subject in which movement itself is taught. Its **history**: from the games and dances of Africa's villages and the gymnasia of ancient Greece, through Roman military drill and the gymnastics systems of Europe, to the organized sports of the modern school. Each age contributed: the **Greeks** the Olympic ideal, the **Romans** the drill, the **Europeans** gymnastics, and the **Americans** the indoor games."},
    {k:"rule"},
    {k:"h3", t:"The Importance of Physical Education"},
    {k:"bul", items:["It builds **health** — a strong heart, sound lungs and trained muscles","It builds **character** — discipline, fair play, leadership and respect for rules","It builds **skill** — the motor abilities every trade and game requires","It builds **community** — teams, houses and schools united in healthy competition"]},
    {k:"rule"},
    {k:"h3", t:"General Health and Health-Related Activities"},
    {k:"p", t:"**General health** is the well-being of body and mind together. **Health-related activities** are the exercises that protect it: walking distances, jogging and running for cardiovascular endurance; strength work for the muscles; stretching for flexibility; and balanced training for sound body composition. Discuss physical education, its importance, its historical contributions, and the health-related activities — then make weekly health activity your own habit."}
  ],
  focus:["Definition of Physical Education","History of Physical Education","Historical contributions to the field","The importance of Physical Education","General health","Health-related activities"],
  terms:[
    {t:"physical education", d:"the study of the body in motion and of movement, sport and health", x:"Physical Education develops the whole learner."},
    {t:"general health", d:"the overall state of well-being of body and mind", x:"General health depends on diet, rest and exercise."},
    {t:"well-being", d:"the state of being comfortable, healthy and happy", x:"Exercise improves well-being."},
    {t:"Olympic Games", d:"the ancient and modern international athletic festival", x:"The Olympic Games began in ancient Greece."},
    {t:"curriculum", d:"the planned course of study in a school", x:"P.E. is part of the school curriculum."},
    {t:"recreation", d:"activity done for enjoyment and refreshment", x:"Recreation refreshes the mind."},
    {t:"sportsmanship", d:"fair, honest and generous conduct in sport", x:"Sportsmanship matters more than winning."},
    {t:"discipline", d:"trained, orderly and controlled behaviour", x:"Sport teaches discipline."},
    {t:"lifelong activity", d:"physical activity a person can continue throughout life", x:"Walking is a lifelong activity."},
    {t:"holistic development", d:"growth of the body, mind and character together", x:"P.E. supports holistic development."},
    {t:"flexibility", d:"range of movement at a joint", x:"Flexibility declines without stretching."},
    {t:"endurance", d:"the ability to sustain effort over time", x:"Endurance is built by regular training."}
  ],
  facts:[
    {q:"Define Physical Education.", a:"The study of the body in motion — of movement, sport, fitness and health."},
    {q:"Why is Physical Education described as crucial to development?", a:"Because maintaining the body through fitness, health, flexibility and endurance promotes sound reasoning and healthy growth."},
    {q:"Where and when did organised physical education and competition begin?", a:"In ancient Greece, with the Olympic Games; physical training was central to Greek education."},
    {q:"State four benefits of Physical Education to a learner.", a:"It builds physical fitness and health, teaches teamwork and discipline, improves concentration and mood, and provides skills for lifelong recreation."},
    {q:"What is general health?", a:"The overall state of well-being of the body and mind, supported by good diet, rest, hygiene and exercise."},
    {q:"Name four health-related activities.", a:"Walking, running, swimming and games such as football (also cycling and skipping)."},
    {q:"How does Physical Education contribute to academic work?", a:"Exercise improves circulation to the brain, concentration, sleep and mood, all of which support learning."},
    {q:"What is sportsmanship?", a:"Fair, honest and generous conduct towards opponents, team mates and officials, whether winning or losing."}
  ],
  tf:[
    {s:"Physical Education is the study of the body in motion.", a:"true", why:"That is the definition given in the curriculum."},
    {s:"The Olympic Games began in ancient Greece.", a:"true", why:"Greek athletic festivals are the origin of the Olympic tradition."},
    {s:"Physical Education has no effect on academic performance.", a:"false", why:"Exercise improves concentration, mood and sleep, which support learning."},
    {s:"Physical Education is only for talented athletes.", a:"false", why:"It is for every learner, aiming at health, fitness and lifelong activity."},
    {s:"Sportsmanship means winning at any cost.", a:"false", why:"Sportsmanship is fair, honest and generous conduct regardless of the result."},
    {s:"Maintaining fitness, flexibility and endurance promotes sound reasoning and growth.", a:"true", why:"This is stated in the introduction to the curriculum."}
  ],
  apply:[
    {q:"A parent says P.E. wastes time that should be spent on mathematics. How do you reply?", a:"Explain that exercise improves concentration, sleep and mood, so learners actually perform better academically, and that health is itself essential."},
    {q:"Name one physical activity you could continue at fifty years of age, and why.", a:"Walking or swimming, because they are low-impact, need little equipment and can be adjusted to any fitness level."},
    {q:"How does taking part in team sport prepare a learner for work?", a:"It teaches cooperation, punctuality, discipline, accepting decisions and working towards a shared goal."},
    {q:"Your school has no sports facilities at all. What P.E. programme could you still run?", a:"Running, calisthenics, skipping, relays, tumbling on safe ground and small-sided games with improvised equipment."},
    {q:"Why should girls have the same P.E. opportunities as boys?", a:"Health, fitness and the benefits of sport apply equally to both, and equal access is a matter of fairness and gender equality."}
  ],
  sort:{ title:"Physical Education", groups:[
    {name:"Benefits of P.E.", items:["Physical fitness","Teamwork","Discipline","Better concentration"]},
    {name:"Health-related activities", items:["Walking","Running","Swimming","Games"]},
    {name:"Components of general health", items:["Good diet","Adequate rest","Personal hygiene","Regular exercise"]},
    {name:"Qualities sport develops", items:["Sportsmanship","Leadership","Perseverance","Cooperation"]}
  ]},
  compare:{ title:"Why Physical Education matters", caption:"Complete the table of benefits and how each arises.",
    items:[
      {p:"Physical benefit", f:"Builds fitness, strength, flexibility and endurance, and controls weight."},
      {p:"Mental benefit", f:"Improves concentration, mood and sleep, and reduces stress."},
      {p:"Social benefit", f:"Teaches teamwork, cooperation and respect for others and for rules."},
      {p:"Moral benefit", f:"Develops sportsmanship, honesty and discipline in winning and losing."},
      {p:"Health benefit", f:"Lowers the risk of heart disease, obesity and diabetes in later life."},
      {p:"Lifelong benefit", f:"Gives skills and habits of activity that can be continued throughout life."}
    ]},
  casestudy:{ title:"The school that dropped P.E.",
    text:"A principal under pressure to raise examination results cancelled all Physical Education periods and used them for extra mathematics and English. Within a term, teachers reported that learners were restless and inattentive in afternoon lessons, absenteeism rose, and the school's football team collapsed. A visiting supervisor pointed out that P.E. was a required part of the national curriculum and that research showed active learners concentrate better. The periods were restored, with one afternoon a week for inter-class games. Attendance improved and, at the end of the year, the examination results were higher than before.",
    questions:[
      {q:"What three problems followed the removal of P.E.?", a:"Learners became restless and inattentive, absenteeism rose, and the football team collapsed."},
      {q:"What two arguments did the supervisor make?", a:"That P.E. is a required part of the national curriculum, and that active learners concentrate better."},
      {q:"What was the outcome when P.E. was restored?", a:"Attendance improved and examination results were higher than before."},
      {q:"What does this case show about the relationship between P.E. and academic work?", a:"They are not in competition; physical activity supports concentration and attendance, and therefore academic achievement."}
    ]},
  project:{ title:"The case for Physical Education",
    brief:"Prepare an argued presentation on the value of P.E. in your school.",
    steps:["Research and write five sentences on the history of Physical Education.","List six benefits of P.E., grouped as physical, mental and social.","Survey ten learners on what P.E. activities they want.","Note two facilities or items of equipment your school most needs.","Present the case to the class or the school administration."],
    criteria:["Accurate short history","Six benefits properly grouped","Ten learners genuinely surveyed","Realistic needs identified","Clear, persuasive presentation"]},
  activities:["Discuss Physical Education, its importance and historical contributions","Discuss health-related activities","Debate the place of P.E. in the school timetable","Survey the class on preferred activities"],
  materials:["Physical Education handbook","Charts on the history of sport","Pictures of the Olympic Games","Chalkboard"],
  assessment:["Individual presentation","Group work","Class participation","Research project","Written test"]
},
{
  grade:9, period:"II", sem:"One", icon:"💪",
  title:"The Muscular System",
  subtitle:"Formation, importance and functions of the muscles",
  outcomes:["Learners are able to draw the various parts of the muscular system and show how they function in the body."],
  objectives:["Describe the formation of the muscular system","Describe the functions of the muscular system","Explain the importance of the muscular system","Identify the main muscle groups","Show how muscles work in pairs to produce movement"],
  note:"There are three kinds of muscle: <b>skeletal</b> (voluntary, attached to bones and moving the body), <b>smooth</b> (involuntary, in the walls of organs) and <b>cardiac</b> (the heart muscle). Skeletal muscles work in <b>antagonistic pairs</b>: as one contracts the other relaxes — the biceps bends the elbow and the triceps straightens it.",
  study:[
    /* ---- course text: Semester One, Period II — The Muscular System (guide pp. 23) ---- */
    {k:"h3", t:"The Muscular System — Its Formation"},
    {k:"p", t:"The **muscular system** is the body's machinery of movement — the hundreds of muscles fitted over the skeleton, each joined to bone by **tendons**. A muscle is formed of bundles of fibres that can **contract** (shorten and thicken) and **relax** (lengthen again); since a muscle can only pull and never push, muscles work in **pairs** — as one contracts, its partner relaxes, and the joint moves."},
    {k:"rule"},
    {k:"h3", t:"The Importance of the Muscular System"},
    {k:"bul", items:["Without muscles no movement is possible — no running, throwing, speaking or breathing","Muscles hold the body's **posture** upright against gravity","Working muscles produce the **heat** that keeps the body warm","Trained muscles protect the **joints and organs** from injury"]},
    {k:"rule"},
    {k:"h3", t:"The Functions of the Muscular System"},
    {k:"p", t:"Draw the various parts of the muscular system from a pictorial chart — the biceps and triceps of the arm, the deltoids of the shoulder, the pectorals of the chest, the abdominals of the trunk, and the quadriceps, hamstrings and calf muscles of the leg — and show how they function in the body: every contraction pulls a bone, and pairs of muscles open and close the joint between them. Exercise increases the size, strength and endurance of every muscle that is regularly worked."}
  ],
  focus:["Formation of the muscular system","Types of muscle: skeletal, smooth, cardiac","Functions and importance of muscles","Main muscle groups","Antagonistic pairs","Effects of exercise on muscle"],
  terms:[
    {t:"muscular system", d:"all the muscles of the body and the tissue that connects them", x:"The muscular system produces all movement."},
    {t:"skeletal muscle", d:"voluntary muscle attached to bone that moves the body", x:"The biceps is a skeletal muscle."},
    {t:"smooth muscle", d:"involuntary muscle found in the walls of internal organs", x:"Smooth muscle moves food along the gut."},
    {t:"cardiac muscle", d:"the involuntary muscle of the heart", x:"Cardiac muscle never tires."},
    {t:"voluntary muscle", d:"muscle under conscious control", x:"Skeletal muscles are voluntary."},
    {t:"involuntary muscle", d:"muscle that works without conscious control", x:"The heart is involuntary muscle."},
    {t:"contraction", d:"the shortening of a muscle to produce force", x:"Contraction of the biceps bends the arm."},
    {t:"relaxation", d:"the lengthening of a muscle as it stops contracting", x:"Relaxation of the triceps allows the elbow to bend."},
    {t:"antagonistic pair", d:"two muscles that work against each other at a joint", x:"Biceps and triceps form an antagonistic pair."},
    {t:"biceps", d:"the muscle at the front of the upper arm that bends the elbow", x:"The biceps flexes the elbow."},
    {t:"triceps", d:"the muscle at the back of the upper arm that straightens the elbow", x:"The triceps extends the elbow."},
    {t:"quadriceps", d:"the large muscle group at the front of the thigh", x:"The quadriceps straightens the knee."},
    {t:"hamstring", d:"the muscle group at the back of the thigh", x:"A pulled hamstring is a common injury."},
    {t:"muscle tone", d:"the slight continuous tension in resting muscle", x:"Exercise improves muscle tone."}
  ],
  facts:[
    {q:"Name the three types of muscle.", a:"Skeletal (voluntary), smooth (involuntary) and cardiac muscle."},
    {q:"State the main function of the muscular system.", a:"To produce movement by contracting and pulling on the bones; it also maintains posture and generates body heat."},
    {q:"How do muscles produce movement at a joint?", a:"They work in antagonistic pairs: one muscle contracts and pulls the bone while its partner relaxes."},
    {q:"Give an example of an antagonistic pair and state what each does.", a:"The biceps bends (flexes) the elbow and the triceps straightens (extends) it."},
    {q:"What is the difference between voluntary and involuntary muscle?", a:"Voluntary muscle is under conscious control, like the skeletal muscles; involuntary muscle works without conscious control, like the heart and gut."},
    {q:"How are muscles attached to bones?", a:"By tendons."},
    {q:"State three effects of regular exercise on muscle.", a:"Muscles grow larger and stronger, endurance improves, and muscle tone and posture improve."},
    {q:"Why does a muscle become sore after unaccustomed exercise?", a:"Hard or unfamiliar work causes minor damage and chemical changes in the muscle fibres, which produce soreness for a day or two while they repair."},
    {q:"Name two large muscle groups of the leg.", a:"The quadriceps at the front of the thigh and the hamstrings at the back."}
  ],
  tf:[
    {s:"The heart is made of cardiac muscle.", a:"true", why:"Cardiac muscle is found only in the heart and works involuntarily."},
    {s:"Skeletal muscles are involuntary.", a:"false", why:"Skeletal muscles are voluntary — under conscious control."},
    {s:"Muscles work in antagonistic pairs.", a:"true", why:"As one contracts to move a bone, its partner relaxes."},
    {s:"Muscles push bones to create movement.", a:"false", why:"Muscles can only pull, by contracting; that is why they must work in opposing pairs."},
    {s:"Tendons attach muscle to bone.", a:"true", why:"Ligaments attach bone to bone; tendons attach muscle to bone."},
    {s:"Exercise has no effect on muscle size.", a:"false", why:"Regular resistance exercise makes muscles larger and stronger."}
  ],
  apply:[
    {q:"Which muscles contract and which relax when you bend your elbow to lift a bucket?", a:"The biceps contracts to bend the elbow while the triceps relaxes."},
    {q:"A sprinter pulls a hamstring. Which movement will be painful and why?", a:"Bending the knee and extending the hip, because the hamstrings at the back of the thigh perform those movements."},
    {q:"Why is a warm-up important for the muscular system?", a:"It raises muscle temperature and blood flow so muscles stretch and contract more easily, reducing the risk of strain and tearing."},
    {q:"Explain why the heart muscle does not tire like the biceps.", a:"Cardiac muscle is specially built to contract rhythmically and continuously with a rich blood supply, resting briefly between every beat."},
    {q:"How would you strengthen the quadriceps without any equipment?", a:"Bodyweight squats, step-ups on a low bench, and controlled lunges, done regularly with correct form."}
  ],
  sort:{ title:"The muscular system", groups:[
    {name:"Types of muscle", items:["Skeletal","Smooth","Cardiac"]},
    {name:"Voluntary muscles", items:["Biceps","Triceps","Quadriceps","Hamstring"]},
    {name:"Functions of muscle", items:["Produce movement","Maintain posture","Generate heat","Protect organs"]},
    {name:"Effects of training", items:["Larger muscles","Greater strength","Better endurance","Improved tone"]}
  ]},
  compare:{ title:"Muscles and their actions", caption:"Complete the table of muscles and what each does.",
    items:[
      {p:"Biceps", f:"Front of the upper arm; contracts to bend (flex) the elbow."},
      {p:"Triceps", f:"Back of the upper arm; contracts to straighten (extend) the elbow."},
      {p:"Quadriceps", f:"Front of the thigh; straightens the knee, used in kicking and jumping."},
      {p:"Hamstrings", f:"Back of the thigh; bends the knee and extends the hip, used in sprinting."},
      {p:"Cardiac muscle", f:"Found only in the heart; contracts rhythmically and involuntarily without tiring."},
      {p:"Smooth muscle", f:"In the walls of the stomach, intestines and blood vessels; works involuntarily."}
    ]},
  casestudy:{ title:"The pulled hamstring",
    text:"Varney was the fastest boy in Grade 9. At the county meet he arrived late, missed the warm-up, and went straight into the 100 m final. Forty metres into the race he felt a sudden sharp pain at the back of his thigh and pulled up limping. The clinic diagnosed a hamstring strain and told him to rest. The games master explained that the hamstrings at the back of the thigh work with the quadriceps at the front as an antagonistic pair, and that cold, unprepared muscle tears easily when suddenly required to contract at full speed.",
    questions:[
      {q:"Which muscle group did Varney injure and where is it?", a:"The hamstrings, at the back of the thigh."},
      {q:"Which muscle group is its antagonistic partner?", a:"The quadriceps, at the front of the thigh."},
      {q:"Why did the injury happen?", a:"He missed the warm-up, so cold unprepared muscle was suddenly asked to contract at full sprinting speed."},
      {q:"What should he have done differently?", a:"Arrived in time to warm up thoroughly, raising muscle temperature and gradually preparing the muscles for maximum effort."}
    ]},
  project:{ title:"Muscle chart and movement analysis",
    brief:"Draw the main muscles and analyse a movement.",
    steps:["Draw a front and back outline of the human body.","Label at least eight major muscles.","Choose one sporting movement, such as kicking a ball or throwing.","Break it into three stages and state which muscles contract at each stage.","Present the chart and explain the antagonistic pairs involved."],
    criteria:["Eight muscles correctly labelled","A movement broken into three stages","Correct muscles identified for each stage","Antagonistic pairs correctly explained","Neat, clear chart"]},
  activities:["Discuss the muscular system and its functions in the body","Draw and label the various parts of the muscular system","Demonstrate antagonistic pairs by bending and straightening the arm","Analyse the muscles used in a familiar sporting movement"],
  materials:["Pictorial charts of the muscular system","Physical Education textbooks","Anatomy diagrams","Chalkboard"],
  assessment:["Individual presentation","Group work","Class participation","Labelled muscle chart project","Written test"]
},
{
  grade:9, period:"III", sem:"One", icon:"🫁",
  title:"The Respiratory and Circulatory Systems",
  subtitle:"The heart, the blood, blood pressure, blood groups and breathing",
  outcomes:["Learners are able to explain the respiratory and the circulatory systems and how they work together."],
  objectives:["Describe the anatomy and the function of the heart","Identify the components of blood and what each does","Explain what blood pressure is and how it is measured","Explain how blood is classified and what is meant by the Rh factor","Name some illnesses of the circulatory system","Explain the process of respiration"],
  note:"No body system works in isolation — the systems depend on one another. The <b>respiratory system</b> processes the oxygen that the <b>circulatory system</b> carries to every part of the body. The <b>heart</b> is the body's pump, enclosed in a loose-fitting sac called the <b>pericardium</b>, which consists of two layers.",
  study:[
    /* ---- course text: Semester One, Period III — The Respiratory and Circulatory Systems (guide pp. 24-25) ---- */
    {k:"h3", t:"Systems that Depend on One Another"},
    {k:"p", t:"No body system works in isolation — body systems are dependent upon one another. Just as all of the systems depend on the nervous system, they also depend on the **circulatory** and the **respiratory** systems. The respiratory system processes the **oxygen** that the circulatory system carries to all of the parts of the body."},
    {k:"rule"},
    {k:"h3", t:"The Circulatory System — the Heart, the Body's Pump"},
    {k:"p", t:"The **heart** is the body's pump. It is enclosed in a loose-fitting sac called the **pericardium**, which consists of **two layers**: one is a thin, watery membrane that closely covers the heart's surface, and the other is **fibrous** and is attached to the diaphragm."},
    {k:"p", t:"Learn the **layers of the heart** wall and the **heart chambers**: the heart is divided into four chambers — two receiving **atria** above and two pumping **ventricles** below. Blood leaves the heart in **arteries**, exchanges gases and food in the microscopic **capillaries**, and returns in **veins** — passing through the lungs to drop carbon dioxide and collect oxygen."},
    {k:"rule"},
    {k:"h3", t:"The Components of Blood"},
    {k:"table", head:["Component","What it does"], rows:[
      ["Plasma","The liquid part that carries the blood cells, nutrients and wastes"],
      ["Red blood cells","Carry oxygen from the lungs to every cell, using haemoglobin"],
      ["White blood cells","Defend the body against infection"],
      ["Platelets","Help the blood to clot, sealing wounds"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Blood Pressure, Blood Groups and the Rh Factor"},
    {k:"p", t:"**Blood pressure** is the force of the blood pushing against the artery walls; it is measured with an instrument (the sphygmomanometer) and recorded as two numbers. **Blood is classified** into the groups **A, B, AB and O**; the **Rh factor** is a protein that may be present on the red blood cells — blood carrying it is Rh positive, blood lacking it Rh negative. Groups and Rh factor must match before a transfusion can be safe."},
    {k:"p", t:"Illnesses of the circulatory system include **high blood pressure (hypertension)**, **anaemia**, **heart disease** and **stroke**; exercise, modest salt and regular checks protect against them."},
    {k:"rule"},
    {k:"h3", t:"The Respiratory System — its Anatomy and the Process of Respiration"},
    {k:"p", t:"The **respiratory system** — nose, windpipe (trachea) and the two lungs with their air sacs — has the function of taking in oxygen and giving out carbon dioxide. **The process of respiration:** air is drawn into the lungs on breathing in; oxygen passes into the blood at the air sacs; the blood delivers it to the cells, where food is burned for energy; and the waste carbon dioxide is carried back and breathed out."},
    {k:"p", t:"**Types of respiration** — **aerobic** (with oxygen, as in long steady work) and **anaerobic** (without oxygen, for short bursts of maximum effort). Hence **aerobic sports** (distance running, football) train the heart-lung partnership, while **anaerobic sports** (sprinting, high jumping) train explosive release. Illnesses of the respiratory system include asthma, pneumonia, tuberculosis and influenza; clean air, no smoking and vaccination guard against them."}
  ],
  focus:["The circulatory system and the heart","The pericardium","Components of blood","Blood pressure and its measurement","Blood groups and the Rh factor","Illnesses of the circulatory system","The respiratory system and the process of respiration"],
  terms:[
    {t:"circulatory system", d:"the heart, blood and blood vessels that transport materials round the body", x:"The circulatory system delivers oxygen to the cells."},
    {t:"respiratory system", d:"the organs that take in oxygen and give out carbon dioxide", x:"The lungs are the centre of the respiratory system."},
    {t:"heart", d:"the muscular pump that drives blood round the body", x:"The heart beats about seventy times a minute at rest."},
    {t:"pericardium", d:"the loose-fitting sac of two layers that encloses the heart", x:"The pericardium protects the heart."},
    {t:"artery", d:"a vessel carrying blood away from the heart", x:"Arteries have thick muscular walls."},
    {t:"vein", d:"a vessel carrying blood back to the heart", x:"Veins contain valves."},
    {t:"capillary", d:"the smallest blood vessel, where exchange with the cells occurs", x:"Oxygen leaves the blood at the capillaries."},
    {t:"plasma", d:"the liquid part of the blood", x:"Plasma carries the blood cells and nutrients."},
    {t:"red blood cell", d:"the cell that carries oxygen using haemoglobin", x:"Red blood cells give blood its colour."},
    {t:"white blood cell", d:"the cell that defends the body against infection", x:"White blood cells fight germs."},
    {t:"platelet", d:"the blood fragment that helps blood to clot", x:"Platelets seal a cut."},
    {t:"blood pressure", d:"the force of the blood against the artery walls", x:"Blood pressure is measured with a sphygmomanometer."},
    {t:"Rh factor", d:"a protein that may be present on red blood cells, making blood positive or negative", x:"A person may be O positive or O negative by the Rh factor."},
    {t:"respiration", d:"the process of taking in oxygen and releasing carbon dioxide", x:"Respiration supplies energy to the cells."}
  ],
  facts:[
    {q:"What is the heart and where is it enclosed?", a:"It is the body's pump, enclosed in a loose-fitting sac called the pericardium, which consists of two layers."},
    {q:"How do the respiratory and circulatory systems depend on each other?", a:"The respiratory system processes the oxygen that the circulatory system carries to all parts of the body."},
    {q:"Name the four components of blood and state one function of each.", a:"Plasma carries cells and nutrients; red blood cells carry oxygen; white blood cells fight infection; platelets help the blood to clot."},
    {q:"What is blood pressure and how is it measured?", a:"The force of the blood pushing against the artery walls; it is measured with a sphygmomanometer and given as two numbers, systolic over diastolic."},
    {q:"What is meant by the Rh factor?", a:"A protein that may be present on the surface of red blood cells; blood with it is Rh positive and blood without it is Rh negative."},
    {q:"Name the four main blood groups.", a:"A, B, AB and O."},
    {q:"Name three illnesses of the circulatory system.", a:"High blood pressure (hypertension), anaemia and heart disease (also stroke)."},
    {q:"State the difference between an artery and a vein.", a:"An artery carries blood away from the heart and has thick muscular walls; a vein carries blood back to the heart and contains valves."},
    {q:"Explain the process of respiration in simple terms.", a:"Air is drawn into the lungs, oxygen passes into the blood at the air sacs, the blood carries it to the cells to release energy from food, and carbon dioxide is carried back and breathed out."}
  ],
  tf:[
    {s:"The pericardium is a sac of two layers enclosing the heart.", a:"true", why:"It is the loose-fitting protective sac around the heart."},
    {s:"Arteries carry blood towards the heart.", a:"false", why:"Arteries carry blood away from the heart; veins carry it back."},
    {s:"Red blood cells fight infection.", a:"false", why:"Red cells carry oxygen; white blood cells fight infection."},
    {s:"Platelets help the blood to clot.", a:"true", why:"They gather at a wound and help seal it."},
    {s:"Body systems work in isolation from one another.", a:"false", why:"No body system works alone; all depend on the circulatory and respiratory systems."},
    {s:"Regular exercise strengthens the heart muscle.", a:"true", why:"Training makes the heart pump more blood per beat and lowers the resting pulse."}
  ],
  apply:[
    {q:"Why does breathing get deeper and faster during hard exercise?", a:"The muscles need more oxygen and produce more carbon dioxide, so the lungs work harder to supply oxygen and remove the waste gas."},
    {q:"A learner is often tired and pale, and a test shows low haemoglobin. What condition is likely, and what dietary advice would help?", a:"Anaemia; eat iron-rich foods such as green leafy vegetables, beans, fish and meat, with fruit for vitamin C to aid absorption."},
    {q:"Why must blood groups be matched before a transfusion?", a:"Mixing incompatible groups makes the blood clump, which can be fatal; the ABO group and the Rh factor must both match."},
    {q:"How does regular exercise help prevent high blood pressure?", a:"It strengthens the heart, keeps the arteries elastic, helps control weight and reduces stress, all of which lower blood pressure."},
    {q:"Why do athletes at rest often have a slower pulse than untrained people?", a:"Their hearts are stronger and pump more blood with each beat, so fewer beats per minute are needed."}
  ],
  sort:{ title:"Respiration and circulation", groups:[
    {name:"Components of blood", items:["Plasma","Red blood cells","White blood cells","Platelets"]},
    {name:"Blood vessels", items:["Artery","Vein","Capillary"]},
    {name:"Blood groups", items:["A","B","AB","O"]},
    {name:"Circulatory illnesses", items:["High blood pressure","Anaemia","Heart disease","Stroke"]}
  ]},
  compare:{ title:"The two systems compared", caption:"Complete the table showing each system and its work.",
    items:[
      {p:"Respiratory system", f:"Nose, trachea and lungs; takes in oxygen and removes carbon dioxide from the blood."},
      {p:"Circulatory system", f:"Heart, blood and vessels; transports oxygen, nutrients and wastes around the body."},
      {p:"How they cooperate", f:"The respiratory system processes the oxygen that the circulatory system then carries to every cell."},
      {p:"The heart", f:"The pump, enclosed in the two-layered pericardium, driving blood through arteries and veins."},
      {p:"Blood pressure", f:"The force of blood on the artery walls, measured with a sphygmomanometer as systolic over diastolic."},
      {p:"Effect of exercise", f:"Strengthens the heart, increases lung capacity, lowers resting pulse and improves recovery."}
    ]},
  casestudy:{ title:"The blood donation",
    text:"When a road accident victim needed blood at the hospital in Gbarnga, the appeal went out to the school. Twenty learners over seventeen volunteered. The laboratory technician explained that she could not simply take any blood: each donor's group had to be determined as A, B, AB or O, and the Rh factor established as positive or negative, because giving mismatched blood makes the cells clump together and can kill the patient. Six learners matched the patient's O positive requirement. The technician also checked each donor's haemoglobin, turning away two who were mildly anaemic and advising them on iron-rich foods.",
    questions:[
      {q:"Why could the technician not use blood from any volunteer?", a:"Blood must be matched by group and Rh factor; mismatched blood makes the cells clump together and can be fatal."},
      {q:"What are the four main blood groups?", a:"A, B, AB and O."},
      {q:"What does 'O positive' tell you about that blood?", a:"That it is group O and that the Rh factor protein is present on the red cells."},
      {q:"Why were two volunteers turned away, and what advice were they given?", a:"They were mildly anaemic — low in haemoglobin — and were advised to eat iron-rich foods."}
    ]},
  project:{ title:"Heart, blood and breathing study",
    brief:"Investigate how exercise affects the heart and breathing.",
    steps:["Draw and label the heart, showing the pericardium and the main vessels.","Record your resting pulse and breathing rate for one minute.","Exercise steadily for three minutes, then record both again immediately and after two minutes.","Present the results in a table and a graph.","Explain in your own words how the two systems worked together during the exercise."],
    criteria:["Heart correctly drawn and labelled","Resting measurements recorded","Complete post-exercise readings","Accurate table and graph","Correct explanation of how the systems cooperate"]},
  activities:["Discuss the systems of the body and how they depend on one another","Describe the anatomy and function of the heart using a chart","Identify the components of blood and their functions","Measure and compare pulse and breathing rates before and after exercise"],
  materials:["Pictorial charts of the heart and lungs","GCSE Physical Education textbook","Stop watch","Anatomy diagrams"],
  assessment:["Individual presentation","Group work","Class participation","Practical pulse and breathing investigation","Written test"]
},
{
  grade:9, period:"IV", sem:"Two", icon:"🚑",
  title:"Injuries: Prevention and Treatment",
  subtitle:"Minor and major injuries, risk assessment and the RICE method",
  outcomes:["Learners are able to explain the types of injuries, apply preventive methods in sports competitions, and treat injuries correctly."],
  objectives:["Explain the types of injuries — minor and major","Apply preventive methods","Carry out a risk assessment before activity","Describe the treatment of joint injuries and sudden stress","Apply the RICE method correctly"],
  note:"The standard first treatment for a soft-tissue or joint injury is the <b>RICE method</b>: <b>R</b>est the injured part, apply <b>I</b>ce to reduce swelling, apply <b>C</b>ompression with a bandage, and <b>E</b>levate the limb above the level of the heart. Prevention starts with a <b>risk assessment</b> — checking the surface, equipment, clothing and the readiness of the players.",
  study:[
    /* ---- course text: Semester Two, Period IV — Injuries: Prevention and Treatment (guide pp. 26) ---- */
    {k:"h3", t:"Types of Injuries — Minor and Major"},
    {k:"p", t:"Sports injuries divide into **minor wounds and injuries** — abrasions (scrapes), small cuts, bruises, blisters, simple sprains and strains — which first aid can treat on the spot, and **major wounds and injuries** — deep or heavily bleeding wounds, broken bones (fractures), dislocations, head and neck injuries and unconsciousness — which are emergencies: make the casualty safe, give only gentle first aid, and send for medical help at once."},
    {k:"rule"},
    {k:"h3", t:"Preventive Methods — Risk Assessment"},
    {k:"p", t:"Prevention begins with **risk assessment**: before play, walk the field and ask — what here can hurt a player? Apply the preventive methods:"},
    {k:"bul", items:["Inspect and clear the playing area of stones, holes, glass and obstructions","Check the equipment and use it only for its proper purpose","Warm up thoroughly and cool down afterwards","Play by the rules and to the referee's whistle","Wear the right shoes and simple protective gear","Never train through illness or an unhealed injury"]},
    {k:"p", t:"In competition, **improve on the arousal level** — alert and eager, not tense and reckless — for perfect performance; the over-aroused player injures himself and fouls others."},
    {k:"rule"},
    {k:"h3", t:"Treatment — Joints and Sudden Stress"},
    {k:"p", t:"For **joint injuries** (sprains) and injuries of **sudden stress** (strains and pulls), apply the **RICE method** at once:"},
    {k:"table", head:["Letter","Word","Action"], rows:[
      ["R","Rest","Stop play and rest the injured part"],
      ["I","Ice","Apply ice or a cold wet cloth to reduce swelling and pain"],
      ["C","Compression","Bandage the part firmly — snug, never tight enough to numb"],
      ["E","Elevation","Raise the injured part above the level of the heart"]
    ]},
    {k:"p", t:"Keep the first aid kit — bandages and plasters — at every practice and match, and record every injury treated."}
  ],
  focus:["Types of injuries: minor and major wounds","Preventive methods","Risk assessment","Joint injuries and sudden stress","Treatment of injuries","The RICE method"],
  terms:[
    {t:"injury", d:"damage to the body caused by an accident or overuse", x:"Most sports injury is preventable."},
    {t:"minor injury", d:"a small injury such as a graze or bruise that heals quickly", x:"A graze is a minor injury."},
    {t:"major injury", d:"a serious injury such as a fracture or deep wound needing medical care", x:"A fracture is a major injury."},
    {t:"sprain", d:"an overstretched or torn ligament at a joint", x:"He suffered an ankle sprain."},
    {t:"strain", d:"an overstretched or torn muscle or tendon", x:"A hamstring strain kept her out for weeks."},
    {t:"fracture", d:"a break in a bone", x:"A fracture must be immobilised."},
    {t:"dislocation", d:"a bone forced out of its joint", x:"A shoulder dislocation is very painful."},
    {t:"RICE method", d:"Rest, Ice, Compression, Elevation — the first treatment for soft-tissue injury", x:"Apply the RICE method at once."},
    {t:"risk assessment", d:"checking an activity for dangers before it begins", x:"A risk assessment prevents accidents."},
    {t:"compression", d:"firm bandaging to limit swelling", x:"Compression supports the injured joint."},
    {t:"elevation", d:"raising the injured part above the heart", x:"Elevation reduces swelling."},
    {t:"immobilise", d:"to prevent an injured part from moving", x:"Immobilise a suspected fracture."},
    {t:"overuse injury", d:"damage caused by repeating a movement too often", x:"Overuse injury develops slowly."},
    {t:"rehabilitation", d:"the programme of recovery returning an athlete to full activity", x:"Rehabilitation prevents re-injury."}
  ],
  facts:[
    {q:"What do the letters of the RICE method stand for?", a:"Rest, Ice, Compression and Elevation."},
    {q:"State the difference between a sprain and a strain.", a:"A sprain is an overstretched or torn ligament at a joint; a strain is an overstretched or torn muscle or tendon."},
    {q:"Give two examples each of minor and major injuries.", a:"Minor: grazes and bruises. Major: fractures and deep wounds or dislocations."},
    {q:"Why is ice applied to a fresh injury?", a:"It narrows the blood vessels, reducing bleeding into the tissue, swelling and pain."},
    {q:"Why is the injured limb elevated?", a:"Raising it above the heart helps fluid drain away and reduces swelling."},
    {q:"Name four preventive methods against sports injury.", a:"Warm up and cool down properly, use correct technique and suitable equipment, check the playing surface, and build fitness gradually."},
    {q:"What is a risk assessment in sport?", a:"Checking the activity beforehand for dangers — surface, equipment, clothing, weather and the readiness of the players — and removing them."},
    {q:"How should a suspected fracture be treated?", a:"Do not move the part unnecessarily; immobilise and support it, control any bleeding, treat for shock, and get medical care immediately."},
    {q:"Why must an athlete complete rehabilitation before returning to play?", a:"Returning too early on an incompletely healed injury leads to re-injury, which is usually worse and takes longer to heal."}
  ],
  tf:[
    {s:"RICE stands for Rest, Ice, Compression and Elevation.", a:"true", why:"It is the standard first treatment for soft-tissue and joint injury."},
    {s:"A sprain is a torn muscle.", a:"false", why:"A sprain is a torn or overstretched ligament; a torn muscle is a strain."},
    {s:"Heat should be applied to a fresh sprain immediately.", a:"false", why:"Ice, not heat, is applied first; heat would increase bleeding and swelling."},
    {s:"A risk assessment should be done before the activity begins.", a:"true", why:"Its purpose is to find and remove dangers before anyone is hurt."},
    {s:"A suspected fracture should be moved to test if it is broken.", a:"false", why:"Moving it can worsen the damage; immobilise it and get medical care."},
    {s:"Warming up helps prevent injury.", a:"true", why:"It prepares the muscles and joints for effort, reducing the risk of tears."}
  ],
  apply:[
    {q:"A player turns his ankle in a match and it begins to swell. Set out your actions in order.", a:"Stop him playing and rest the ankle; apply ice wrapped in cloth; bandage firmly for compression; elevate the leg; then arrange medical assessment."},
    {q:"Why should ice never be placed directly on the skin?", a:"It can cause an ice burn and damage the skin; wrap it in a cloth first."},
    {q:"Carry out a risk assessment of your school field in four points.", a:"Check for holes, stones and glass; check the goal posts are secure; check footwear and that no jewellery is worn; check that water is available and players have warmed up."},
    {q:"A learner keeps getting shin pain after running on hard ground. What kind of injury is this and what would help?", a:"An overuse injury; reduce the training load, run on softer ground, use better footwear, and build up distance gradually."},
    {q:"Why is it dangerous for an injured star player to be pressured to play in a big match?", a:"Playing on an unhealed injury risks a far worse injury and a much longer absence; the decision must be medical, not competitive."}
  ],
  sort:{ title:"Injuries", groups:[
    {name:"Minor injuries", items:["Graze","Bruise","Blister","Minor cut"]},
    {name:"Major injuries", items:["Fracture","Dislocation","Deep wound","Concussion"]},
    {name:"The RICE method", items:["Rest","Ice","Compression","Elevation"]},
    {name:"Preventive methods", items:["Warm up","Correct technique","Check the surface","Suitable equipment"]}
  ]},
  compare:{ title:"Injuries and their treatment", caption:"Complete the table of injuries and correct first treatment.",
    items:[
      {p:"Sprain (ligament)", f:"Pain and swelling at a joint; treat with the RICE method and assess medically."},
      {p:"Strain (muscle or tendon)", f:"Sudden pain in the muscle; rest, ice and compression, then gradual rehabilitation."},
      {p:"Fracture", f:"Severe pain, deformity or inability to bear weight; immobilise, treat for shock, get urgent medical care."},
      {p:"Dislocation", f:"Bone out of its joint; do not attempt to replace it — immobilise and get medical help at once."},
      {p:"Graze or bruise", f:"Minor; clean and cover a graze, apply ice to a bruise to limit swelling."},
      {p:"Overuse injury", f:"Gradual pain from repetition; reduce load, correct technique and surface, and increase training gradually."}
    ]},
  casestudy:{ title:"Applying RICE",
    text:"Ten minutes into an inter-school match, Momo went down after a tackle, holding his knee. The games master stopped play, helped him off the field and sat him down. He sent a learner for the first aid box, wrapped ice in a clean cloth and held it against the knee for fifteen minutes, then bandaged the joint firmly but not so tightly that the foot became cold. He propped the leg on a bench so that it lay above the level of Momo's hip. Momo wanted to go back on, but the games master refused and sent him to the clinic. The nurse confirmed a moderate sprain and set out three weeks of rehabilitation before a return to play.",
    questions:[
      {q:"Identify each step of the RICE method as the games master applied it.", a:"Rest — he stopped Momo playing and sat him down; Ice — ice in a cloth for fifteen minutes; Compression — firm bandaging; Elevation — the leg propped above hip level."},
      {q:"Why was the ice wrapped in a cloth?", a:"To prevent an ice burn and skin damage from direct contact."},
      {q:"Why must the bandage not be too tight?", a:"It would cut off the circulation — a sign of which is the foot becoming cold or numb."},
      {q:"Why was the games master right to refuse to let Momo return?", a:"Playing on an unhealed injury risks far worse damage; the sprain needed assessment and a full rehabilitation period."}
    ]},
  project:{ title:"Injury prevention plan",
    brief:"Produce a risk assessment and injury response plan for your school's sport.",
    steps:["Inspect your playing area and list every hazard you find.","For each hazard, state one action to remove or reduce it.","Write the RICE method as a wall card in clear steps.","List what your school's first aid box should contain.","Demonstrate the treatment of a sprained ankle on a volunteer."],
    criteria:["Genuine inspection with hazards listed","A practical action for each hazard","RICE card clear and correct","Sensible first aid box list","Correct, safe practical demonstration"]},
  activities:["Discuss minor and major wounds","Carry out a risk assessment of the playing area","Demonstrate the treatment of joint injuries and sudden stress","Practise applying the RICE method"],
  materials:["First aid kit","Bandages and plaster","Ice or cold water","GCSE Physical Education textbook","Charts of common sports injuries"],
  assessment:["Individual presentation","Group work","Class participation","Practical RICE demonstration","Written test"]
},
{
  grade:9, period:"V", sem:"Two", icon:"🏸",
  title:"Badminton",
  subtitle:"Nature and purpose, court, rules, skills, strategy and terminology",
  outcomes:["Learners are able to define, identify and utilise the basic rules and terminology used in the game of badminton."],
  objectives:["Utilise the fundamental principles of badminton","Display an understanding of basic strategy in both singles and doubles","Identify and understand the basic rules for singles and doubles","Define the basic terminology used in the game","Demonstrate the backhand service"],
  note:"Badminton is played with a light racket and a <b>shuttlecock</b>, which must never touch the ground during a rally. A match is the best of <b>three games to 21 points</b>, with <b>rally scoring</b> — a point is won on every rally, whoever served. The service must be struck <b>below the waist</b> with the racket head pointing downwards.",
  study:[
    /* ---- course text: Semester Two, Period V — The Badminton Game (guide pp. 27) ---- */
    {k:"h3", t:"The Nature and Purpose of Badminton"},
    {k:"p", t:"**Badminton** is a racket game in which players strike a feathered **shuttlecock** over a high net. Its purpose is to land the shuttle within the opponent's court — and because the shuttle falls quickly and changes direction on a breath, badminton builds the fastest reactions of any racket sport. Learn the **dimensions of the court** — the rectangular court divided by the net, with its service courts, long and short service lines marked differently for singles and doubles."},
    {k:"rule"},
    {k:"h3", t:"Rules of Badminton — Singles and Doubles"},
    {k:"bul", items:["The serve must be struck **below the waist**, diagonally into the opposite service court","In **singles** the server serves from the **right court when his score is even** and the left when odd","Only the serving side can score a point from its own rally — a fault by the receiver wins the point, a fault by the server hands over the service","The shuttle landing **on a line is in**; a shuttle touching the net and falling over remains in play","A player may not touch the net with body or racket while the shuttle is in play"]},
    {k:"rule"},
    {k:"h3", t:"Fundamental Principles — Skills, Techniques and Strokes"},
    {k:"p", t:"Master the fundamental skills and techniques: the **grips** (forehand and backhand), the ready position, and the strokes — the **service** (low and high), the **clear** (high and deep to the back line), the **drop shot** (falling softly over the net), the **smash** (the steep winning strike) and the **drive** (flat and fast). **Practise the backhand service drill**: grip the racket by its backhand grip, hold the shuttle loosely before you, and brush it gently over the net into the near service court, again and again until it falls true."},
    {k:"rule"},
    {k:"h3", t:"Learning Cues — Strategy and Terminology"},
    {k:"p", t:"**Basic strategy in singles**: cover the court from its centre, move your opponent to all four corners, and finish at his weak side. **In doubles**: one partner covers the front and the other the back — or they divide the court side by side — calling every shuttle. Learn the basic **terminology**: serve, rally, fault, let, clear, drop, drive, smash, love and match point."}
  ],
  focus:["Nature and purpose of badminton","Dimensions of the court","Rules of badminton for singles and doubles","Fundamental skills, techniques and strokes","Basic strategy: singles and doubles","Terminology","The backhand service"],
  terms:[
    {t:"shuttlecock", d:"the feathered or plastic projectile struck in badminton", x:"The shuttlecock must not touch the ground."},
    {t:"rally", d:"the exchange of strokes until a point is decided", x:"The rally ended with a smash."},
    {t:"service", d:"the stroke that starts each rally, struck below the waist", x:"His backhand service was accurate."},
    {t:"backhand service", d:"a short serve played from the backhand side, close to the net", x:"The backhand service is used in doubles."},
    {t:"clear", d:"a high deep stroke to the back of the opponent's court", x:"She played a clear to gain time."},
    {t:"drop shot", d:"a soft stroke falling just over the net", x:"The drop shot caught him at the back."},
    {t:"smash", d:"a powerful downward stroke", x:"He won the point with a smash."},
    {t:"drive", d:"a fast flat stroke travelling parallel to the ground", x:"The drive kept the shuttle low."},
    {t:"net shot", d:"a delicate stroke played close to the net", x:"Her net shot barely cleared the tape."},
    {t:"rally scoring", d:"a system where a point is scored on every rally", x:"Rally scoring speeds up the match."},
    {t:"singles", d:"a match with one player on each side", x:"Singles demands great fitness."},
    {t:"doubles", d:"a match with two players on each side", x:"Doubles requires good partner communication."},
    {t:"service court", d:"the marked area into which the serve must land", x:"The serve must land in the diagonal service court."},
    {t:"fault", d:"a breach of the rules that loses the rally", x:"Serving above the waist is a fault."}
  ],
  facts:[
    {q:"What is the object of badminton?", a:"To strike the shuttlecock over the net so that it lands in the opponent's court, without letting it touch the ground on your own side."},
    {q:"How many points win a game, and how many games win a match?", a:"21 points win a game, and the best of three games wins the match."},
    {q:"What is rally scoring?", a:"A system in which a point is scored on every rally, whichever side served."},
    {q:"State two rules governing the service.", a:"It must be struck below the waist with the racket head pointing downwards, and it must land in the diagonally opposite service court."},
    {q:"Name four badminton strokes.", a:"The clear, the drop shot, the smash and the drive (also the net shot)."},
    {q:"State one difference in strategy between singles and doubles.", a:"In singles a player works the opponent from side to side and front to back to create space; in doubles partners cover the court together, often one forward and one back in attack."},
    {q:"Name three items of equipment for badminton.", a:"A racket, a shuttlecock (feather ball) and a net (also suitable shoes)."},
    {q:"Give two examples of a fault.", a:"Serving above the waist, and the shuttle landing outside the court or failing to cross the net."},
    {q:"Why is the backhand service commonly used in doubles?", a:"It allows a very short, low serve just over the net, giving the opponents no chance to attack it."}
  ],
  tf:[
    {s:"In badminton the shuttlecock may bounce once.", a:"false", why:"The shuttle must never touch the ground during a rally."},
    {s:"A game is played to 21 points.", a:"true", why:"A match is the best of three games to 21 with rally scoring."},
    {s:"The service must be struck above the waist.", a:"false", why:"It must be struck below the waist with the racket head pointing downwards."},
    {s:"A smash is a powerful downward stroke.", a:"true", why:"It is the main attacking stroke of the game."},
    {s:"Under rally scoring only the serving side can score.", a:"false", why:"Under rally scoring a point is won on every rally, whoever served."},
    {s:"Doubles partners must communicate about court coverage.", a:"true", why:"Effective doubles depends on the pair covering the court together and calling shots."}
  ],
  apply:[
    {q:"Your opponent stands close to the net. Which stroke would you play and why?", a:"A clear — a high deep shot to the back of the court, since he is out of position at the front."},
    {q:"Your opponent stands at the back of the court. What stroke is best?", a:"A drop shot, falling just over the net where he cannot reach it in time."},
    {q:"Your school cannot afford shuttlecocks. Suggest a practical solution.", a:"Buy durable plastic shuttles rather than feather ones, repair them, and use the ones with broken feathers for practice drills rather than matches."},
    {q:"In doubles your partner and you keep colliding. What should you agree?", a:"A clear system of court coverage — front and back in attack, side by side in defence — and always call for the shot."},
    {q:"Why does badminton develop fast reaction and agility?", a:"The shuttle travels quickly and changes direction sharply, so players must react instantly and move rapidly around the court."}
  ],
  sort:{ title:"Badminton", groups:[
    {name:"Strokes", items:["Clear","Drop shot","Smash","Drive"]},
    {name:"Equipment", items:["Racket","Shuttlecock","Net","Sneakers"]},
    {name:"Faults", items:["Serving above the waist","Shuttle out of court","Shuttle into the net","Touching the net"]},
    {name:"Forms of the game", items:["Singles","Doubles","Mixed doubles"]}
  ]},
  compare:{ title:"Strokes and when to use them", caption:"Complete the table of strokes, description and purpose.",
    items:[
      {p:"Clear", f:"High and deep to the back of the court; buys time and pushes the opponent back."},
      {p:"Drop shot", f:"Soft, falling just over the net; used when the opponent is deep in court."},
      {p:"Smash", f:"Powerful downward stroke; the main attacking shot, played on a high shuttle."},
      {p:"Drive", f:"Fast and flat, parallel to the ground; keeps the shuttle low in fast exchanges."},
      {p:"Net shot", f:"Delicate stroke just over the net; forces a weak lift from the opponent."},
      {p:"Backhand service", f:"Short low serve from the backhand side; standard in doubles as it cannot be attacked."}
    ]},
  casestudy:{ title:"The backhand service drill",
    text:"Coach Sirleaf set up four courts with ropes for nets and gave each pair a shuttle. She demonstrated the backhand service: stand close behind the service line, hold the shuttle by the feathers in front of the waist, racket head below the hand and pointing down, and push gently so the shuttle just clears the net and drops steeply into the service court. She placed a line of chalk one racket-length beyond the net and told learners to score a point only if the shuttle landed between the net and the chalk. Most learners hit far too long at first, but after twenty minutes half the class could land three serves out of five in the target zone.",
    questions:[
      {q:"Describe the correct position of the racket head in the backhand service.", a:"Below the hand and pointing downwards, and the shuttle must be struck below the waist."},
      {q:"Where should a good short service land?", a:"Just over the net, dropping steeply into the front of the diagonally opposite service court."},
      {q:"Why did the coach mark a chalk line one racket-length beyond the net?", a:"To create a visible target zone, so learners could measure whether their serve was short enough."},
      {q:"Why is a short serve an advantage in doubles?", a:"It cannot be smashed; the opponent must lift it, giving your side the attack."}
    ]},
  project:{ title:"Badminton rules and strategy guide",
    brief:"Research the game and produce a guide with a practical demonstration.",
    steps:["In groups of three, research the nature and purpose of badminton.","Draw the court with all its lines and dimensions labelled.","List ten rules covering service, scoring and faults.","Define ten terms used in the game.","Demonstrate the backhand service and one other stroke to the class."],
    criteria:["Group of three working together","Court accurately drawn and labelled","Ten rules correctly stated","Ten terms correctly defined","Competent practical demonstration"]},
  activities:["Learners research the sport and discuss in groups of three the rules, skills and techniques","Practise the backhand service drill","Practise the clear, drop shot and smash","Play modified singles and doubles games applying the rules"],
  materials:["Badminton rackets","Shuttlecocks (feather ball)","Net or rope","Sneakers","Court marking materials"],
  assessment:["Individual presentation","Group work","Class participation","Practical stroke demonstration","Written test on rules and terminology"]
},
{
  grade:9, period:"VI", sem:"Two", icon:"🏐",
  title:"Volleyball",
  subtitle:"Nature and adaptability, rules, skills, playing strategies and terminology",
  outcomes:["Learners are able to explain and apply the basic rules, skills, techniques and playing strategies of volleyball."],
  objectives:["Describe the nature and adaptability of volleyball","Apply basic skills in modified practice games","Discuss and put into practice the rules of power volleyball during a game","Demonstrate the forearm pass and the overhead pass","Explain offensive and defensive playing strategies"],
  note:"Volleyball is played by two teams of <b>six players</b> separated by a net. A team may touch the ball a maximum of <b>three times</b> before returning it, and no player may touch it twice in succession. The two fundamental skills are the <b>forearm pass</b> (the dig, used to receive) and the <b>overhead pass</b> (the set, used to place the ball for an attacker).",
  study:[
    /* ---- course text: Semester Two, Period VI — The Volleyball Game (guide pp. 27) ---- */
    {k:"h3", t:"The Nature and Adaptability of Volleyball"},
    {k:"p", t:"**Volleyball** is a net game for two teams of six, played by striking a light ball over the net with the hands and arms. Its **nature**: the ball is never caught — only played — and a side may touch it no more than three times before it crosses the net. Its **adaptability**: it can be played indoors or on grass, by men, women or mixed teams, with the full court or smaller modified courts for teaching; that is why it fits whole school classes at once."},
    {k:"rule"},
    {k:"h3", t:"The Basic Rules"},
    {k:"bul", items:["**Serve** — the game begins with the serve, struck from behind the end line over the net into the opponents' court; a served ball may touch the net and remain live","**Net play** — no player may touch the net during play, and the ball crossing the net must pass between the antennae or court posts","A team loses the rally when the ball touches the floor of its own court, when it plays the ball a fourth time, or when one player plays the ball **twice in succession**","After winning the service, a team **rotates** one place clockwise before serving"]},
    {k:"rule"},
    {k:"h3", t:"Skills and Techniques"},
    {k:"p", t:"**Forearm pass** — join the forearms flat, knees bent, and bump the oncoming ball up to the setter with the platform of the arms. **Overhead pass** — form a window of thumbs and fingers above the forehead and push the ball high and softly for the attacker. Build from these to the service, the spike and the block, and apply the skills in **modified practice games** before full matches."},
    {k:"rule"},
    {k:"h3", t:"Playing Strategies and Terminology"},
    {k:"p", t:"**Offensive play** builds the attack: pass (forearm) — set (overhead) — spike. **Defensive play** answers: the block at the net and the digging up of spikes. The **service** itself is strategy — serve deep to the weak receiver. Discuss and put into practice the rules of power volleyball during a game or match."},
    {k:"p", t:"**Terminology:** **attack** (the strike that tries to win the point), **ball handling** (how cleanly the ball is played), **block** (the wall of hands at the net), and **dump** (the soft, unexpected drop over the blockers). **Service drill**: serve ten balls in turn, aiming successively at each corner of the opposite court."}
  ],
  focus:["Nature and adaptability of volleyball","Basic rules: serve and net play","Skills and techniques: forearm pass and overhead pass","Playing strategies: offensive and defensive play","Service","Terminology: attack, ball handling, block, dump"],
  terms:[
    {t:"volleyball", d:"a game in which two teams of six strike a ball over a net", x:"Volleyball needs little equipment."},
    {t:"serve", d:"the stroke that puts the ball into play from behind the end line", x:"A strong serve pressures the receivers."},
    {t:"forearm pass", d:"the dig — playing the ball off the forearms, used to receive", x:"The forearm pass controls a hard serve."},
    {t:"overhead pass", d:"the set — playing the ball with the fingertips above the head", x:"A good overhead pass sets up the spike."},
    {t:"set", d:"the second touch, placing the ball for an attacker", x:"The setter delivered a high set."},
    {t:"spike", d:"a powerful downward attacking hit", x:"He spiked the ball into the back court."},
    {t:"block", d:"jumping at the net to stop an opponent's attack", x:"The block deflected the spike."},
    {t:"dump", d:"a soft surprise attack placed just over the net", x:"The setter caught them out with a dump."},
    {t:"rotation", d:"the clockwise movement of players to a new position after winning service", x:"The team rotated after the side-out."},
    {t:"side-out", d:"winning the right to serve from the opposing team", x:"They gained a side-out."},
    {t:"ball handling", d:"the general skill of controlling the ball cleanly", x:"Good ball handling avoids faults."},
    {t:"double hit", d:"a fault where a player touches the ball twice in succession", x:"The referee called a double hit."},
    {t:"offensive play", d:"tactics used to attack and score", x:"Offensive play centres on the spike."},
    {t:"defensive play", d:"tactics used to prevent the opponent scoring", x:"Defensive play depends on the block and the dig."}
  ],
  facts:[
    {q:"How many players form a volleyball team on court?", a:"Six."},
    {q:"How many times may a team touch the ball before returning it?", a:"A maximum of three times."},
    {q:"May the same player touch the ball twice in succession?", a:"No — that is a double hit and a fault, except in certain cases immediately after a block."},
    {q:"Name the two fundamental passing skills.", a:"The forearm pass (dig) and the overhead pass (set)."},
    {q:"When is the forearm pass used?", a:"To receive a hard-driven ball such as a serve or a spike, played low off the forearms."},
    {q:"When is the overhead pass used?", a:"To play a high ball accurately with the fingertips, usually as the set that places the ball for an attacker."},
    {q:"Describe the usual three-touch attacking sequence.", a:"Dig to receive, set to place the ball high near the net, then spike to attack over the net."},
    {q:"Define four terms used in volleyball.", a:"Attack — an attempt to score by hitting the ball into the opponent's court; ball handling — controlling the ball cleanly; block — jumping at the net to stop an attack; dump — a soft surprise shot just over the net."},
    {q:"Why is volleyball described as adaptable?", a:"It can be played indoors or outdoors, on grass, sand or hard court, with varying numbers of players, and needs only a ball and a net or rope."}
  ],
  tf:[
    {s:"A volleyball team may touch the ball four times before returning it.", a:"false", why:"A maximum of three touches is allowed."},
    {s:"The forearm pass is used to receive a hard serve.", a:"true", why:"It gives control against a fast, low ball."},
    {s:"A block is played at the net to stop an attack.", a:"true", why:"Blockers jump at the net to intercept the spike."},
    {s:"A player may touch the ball twice in a row during normal play.", a:"false", why:"That is a double hit and a fault."},
    {s:"Volleyball can be adapted to grass or sand.", a:"true", why:"Its adaptability is one of the reasons it is so widely played."},
    {s:"The overhead pass is played with the fists.", a:"false", why:"It is played with the fingertips above the head; the forearms are used for the dig."}
  ],
  apply:[
    {q:"Your team keeps returning the ball on the first touch. Why is that poor play?", a:"It wastes the three allowed touches; using dig, set and spike builds a controlled attack that is much harder to defend."},
    {q:"A hard serve is coming low and fast at a player. Which pass should be used?", a:"The forearm pass (dig), which controls a fast low ball safely."},
    {q:"Your school has no volleyball net. How can the game still be played?", a:"Stretch a rope between two poles at the correct height; the game adapts easily to improvised equipment."},
    {q:"Explain one offensive and one defensive strategy in volleyball.", a:"Offensive: build the three-touch attack, dig-set-spike, and vary the attack with a dump. Defensive: form a block at the net and position the back court players to dig the ball that gets through."},
    {q:"Why must volleyball players communicate constantly?", a:"To avoid collisions and ensure someone plays every ball; calling 'mine' prevents two players going for the same ball or both leaving it."}
  ],
  sort:{ title:"Volleyball", groups:[
    {name:"Skills and techniques", items:["Forearm pass","Overhead pass","Spike","Serve"]},
    {name:"Terminology", items:["Attack","Ball handling","Block","Dump"]},
    {name:"Faults", items:["Double hit","Four touches","Touching the net","Ball out of court"]},
    {name:"Equipment", items:["Volleyball","Net","Whistle","Stop watch"]}
  ]},
  compare:{ title:"Skills and strategies of volleyball", caption:"Complete the table of skills and their role in play.",
    items:[
      {p:"Serve", f:"Puts the ball into play from behind the end line; a strong serve pressures the receiving team."},
      {p:"Forearm pass (dig)", f:"First touch; receives a hard serve or spike off the forearms and controls it upwards."},
      {p:"Overhead pass (set)", f:"Second touch; placed high with the fingertips near the net for the attacker."},
      {p:"Spike", f:"Third touch; a powerful downward hit into the opponent's court to score."},
      {p:"Block", f:"Defensive; jumping at the net to stop or deflect the opponent's spike."},
      {p:"Dump", f:"Offensive variation; a soft shot just over the net when the defence expects a spike."}
    ]},
  casestudy:{ title:"Three touches",
    text:"Grade 9 played their first volleyball match and lost heavily. Watching the recording afterwards, the games master pointed out that in almost every rally his team returned the ball on the first touch, sending it high and slow across the net where the opponents attacked it easily. He set the class a simple rule for the next three practices: every ball must be played three times before it crossed the net — dig, set, spike — even in practice rallies. It was clumsy at first and many balls were lost. But in the return match a month later, the team won two sets to one.",
    questions:[
      {q:"What mistake was the team making?", a:"Returning the ball on the first touch, sending it high and slow for the opponents to attack."},
      {q:"What rule did the coach impose in practice?", a:"That every ball must be played three times — dig, set, spike — before crossing the net."},
      {q:"Why is the three-touch sequence more effective?", a:"It lets the team control the ball, position it near the net and attack downwards with power, which is much harder to defend."},
      {q:"Why were many balls lost at first?", a:"The skills were new and unpractised; controlled passing takes time to develop before it becomes reliable."}
    ]},
  project:{ title:"Volleyball skills and rules portfolio",
    brief:"Research the game and demonstrate its fundamental skills.",
    steps:["Research the nature and adaptability of volleyball and write a short account.","Draw the court with the net and main lines labelled.","List ten rules including the serve, the three touches and net play.","Define eight terms used in the game.","Demonstrate the forearm pass and the overhead pass to the class."],
    criteria:["Accurate account of the game","Court correctly drawn and labelled","Ten rules correctly stated","Eight terms correctly defined","Both passes competently demonstrated"]},
  activities:["Research the rules, skills, playing strategies and techniques of the sport","Practise the service drill","Practise the forearm pass and the overhead pass in pairs","Play modified games applying the rules of power volleyball"],
  materials:["Volleyball","Volleyball net or rope","Whistle","Stop watch","Court marking materials"],
  assessment:["Individual presentation","Group work","Class participation","Practical demonstration of passes","Written test on rules and terminology"]
}

];

/* Merge the Junior High units into the single Physical Education curriculum,
   exactly as the other extended subjects do: one subject, extra grades. */
if (typeof PE_CURRICULUM !== "undefined") {
  PE_CURRICULUM.push.apply(PE_CURRICULUM, PE_CURRICULUM_79);
}
