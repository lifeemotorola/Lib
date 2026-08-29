/* Curriculum data — Republic of Liberia, Junior High RELIGIOUS & MORAL EDUCATION,
   Grades 7–9. Derived from the "Religious & Moral Education" Junior High
   curriculum guide (25 pp.), 6 periods per grade.

   Same unit shape as the elementary RM_CURRICULUM so GEN_RM renders it unchanged:
     terms[] {t,d,x} · facts[] {q,a} · tf[] {s,a,why} · apply[] {q,a}
     · sort {title,groups} · compare {title,caption,items} · casestudy
     · project · activities[] · materials[] · assessment[]

   The syllabus is expressly MULTI-RELIGIOUS: Christian, Islamic and African
   Traditional teaching are set side by side, as the guide requires, and learners
   are asked to compare them. Scripture references cited in the source guide are
   retained as text references only.

   The source guide lists no external web links, so none are stripped.
*/

var RM_CURRICULUM_79 = [

/* ================================ GRADE 7 ================================ */
{
  grade:7, period:"I", sem:"One", icon:"🕊️",
  title:"Reconciliation",
  subtitle:"Reconciliation of man to God, man to man and man to self",
  outcomes:["Learners comprehend reconciliation — God to man, man to God and man to man — and approach the topic in a religious setting, taking into consideration the various biases and nuances of a multi-religious society."],
  objectives:["Define the concept of reconciliation","Explain the process of reconciliation of man to God","Explain the process of reconciliation of man to man","List and discuss some basic steps to reconciliation from multi-religious backgrounds"],
  note:"<b>Reconciliation</b> means restoring a broken relationship so that two parties are at peace again. Religious teaching speaks of three directions: <b>man to God</b>, <b>man to man</b>, and <b>man to self</b>. The basic steps are the same in each: admit the wrong, be sorry for it, ask forgiveness, make amends where possible, and restore the relationship. Referenced: Daniel 9:24; 2 Corinthians 5:18–19; Hebrews 2:17; Matthew 5:24; Romans 5:10, and the teaching of the Holy Qur'an on forgiveness.",
  focus:["The meaning of reconciliation","Reconciliation of man to God","Reconciliation of man to man","Reconciliation of man to self","Basic steps to reconciliation","Reconciliation from multi-religious backgrounds"],
  terms:[
    {t:"reconciliation", d:"the restoring of a broken relationship to peace and friendship", x:"Reconciliation ended the quarrel between the two families."},
    {t:"forgiveness", d:"giving up the right to hold a wrong against someone", x:"Forgiveness releases both the offender and the offended."},
    {t:"repentance", d:"being truly sorry for a wrong and turning away from it", x:"Repentance is the first step to reconciliation."},
    {t:"confession", d:"admitting openly what one has done wrong", x:"Confession clears the way for forgiveness."},
    {t:"restitution", d:"putting right the harm done, so far as one is able", x:"He made restitution by replacing what he broke."},
    {t:"mediator", d:"a person who helps two parties come back together", x:"The elder acted as mediator between the neighbours."},
    {t:"grudge", d:"a lasting bad feeling kept against someone", x:"Holding a grudge blocks reconciliation."},
    {t:"harmony", d:"a state of peaceful agreement between people", x:"The community lives in harmony again."},
    {t:"atonement", d:"the making right of a wrong so that fellowship is restored", x:"Religious teaching speaks of atonement for sin."},
    {t:"humility", d:"a modest spirit that is willing to admit fault", x:"Humility makes an apology possible."},
    {t:"apology", d:"an expression of regret for a wrong done", x:"A sincere apology begins the healing."},
    {t:"tolerance", d:"accepting people whose beliefs or ways differ from your own", x:"Tolerance is needed in a multi-religious nation."}
  ],
  facts:[
    {q:"Define reconciliation.", a:"The restoring of a broken relationship so that the parties are at peace and in friendship again."},
    {q:"Name the three directions of reconciliation studied.", a:"Reconciliation of man to God, man to man, and man to self."},
    {q:"List five basic steps to reconciliation.", a:"Admit the wrong, be truly sorry, ask forgiveness, make amends where possible, and restore the relationship."},
    {q:"How is man reconciled to God according to Christian teaching?", a:"Through repentance and faith, God forgives and restores the relationship broken by sin."},
    {q:"How is man reconciled to God according to Islamic teaching?", a:"Through sincere repentance (tawbah), turning away from the wrong and seeking God's mercy, which the Qur'an teaches is abundant."},
    {q:"What does Matthew 5:24 teach about worship and reconciliation?", a:"That a worshipper should first be reconciled with his brother and then bring his offering — human reconciliation comes before ritual."},
    {q:"What is meant by reconciliation of man to self?", a:"Coming to peace with oneself by accepting one's own faults, forgiving oneself and resolving to do right."},
    {q:"Why is tolerance important in reconciliation in Liberia?", a:"Because Liberians come from several religions and many ethnic groups, and reconciliation requires accepting differences rather than despising them."}
  ],
  tf:[
    {s:"Reconciliation means restoring a broken relationship.", a:"true", why:"That is precisely its meaning — bringing parties back to peace."},
    {s:"A person can be reconciled to God but need not be reconciled to his neighbour.", a:"false", why:"Religious teaching links the two; Matthew 5:24 says to be reconciled with your brother before bringing your offering."},
    {s:"Holding a grudge helps reconciliation.", a:"false", why:"A grudge keeps the wound open and blocks the restoring of the relationship."},
    {s:"Repentance means being truly sorry and turning away from the wrong.", a:"true", why:"It is more than regret; it includes a change of direction."},
    {s:"Reconciliation is taught only in Christianity.", a:"false", why:"Christianity, Islam and African Traditional Religion all teach forgiveness and the restoring of broken relationships."},
    {s:"Making amends for harm done is part of reconciliation.", a:"true", why:"Restitution, where it is possible, shows that the repentance is genuine."}
  ],
  apply:[
    {q:"Two learners in your class have not spoken for a month after a quarrel. What steps would you suggest?", a:"Get each to state the wrong calmly, admit their own part, apologise, forgive, and agree how to treat each other in future — with a trusted classmate or teacher as mediator."},
    {q:"A boy broke a neighbour's window and apologised but did nothing else. Is the reconciliation complete?", a:"Not fully; an apology is right, but restitution — repairing or paying for the window — shows the repentance is genuine."},
    {q:"Your Christian and Muslim classmates quarrel over their beliefs. How would you help them reconcile?", a:"Remind them that both faiths teach forgiveness and peace, ask each to listen to the other without insult, and encourage respect for difference rather than argument about who is right."},
    {q:"Why is it hard to forgive someone who has not apologised?", a:"Because the wrong is unacknowledged and the hurt feels unanswered; yet religious teaching urges forgiveness for the sake of one's own peace and obedience to God."},
    {q:"How can a person be reconciled to himself after a serious mistake?", a:"By admitting the wrong honestly, seeking God's forgiveness, making amends, accepting that he is forgiven, and resolving to live differently instead of despairing."}
  ],
  sort:{ title:"Reconciliation", groups:[
    {name:"Steps to reconciliation", items:["Admit the wrong","Be truly sorry","Ask forgiveness","Make amends"]},
    {name:"Obstacles to reconciliation", items:["Pride","Holding a grudge","Revenge","Gossip"]},
    {name:"Directions of reconciliation", items:["Man to God","Man to man","Man to self"]},
    {name:"Fruits of reconciliation", items:["Peace","Harmony","Restored friendship","A clear conscience"]}
  ]},
  compare:{ title:"Reconciliation in the three faiths", caption:"Complete the table showing what each tradition teaches.",
    items:[
      {p:"Christian teaching", f:"God reconciles man to Himself through Christ; believers are told to forgive as they have been forgiven and to be reconciled with a brother before worship."},
      {p:"Islamic teaching", f:"Sincere repentance (tawbah) and turning back to God bring His mercy; Muslims are urged to forgive one another and to make peace between disputing parties."},
      {p:"African Traditional teaching", f:"Elders mediate between disputing parties; confession, sacrifice or a token of restitution and a shared meal restore the community bond."},
      {p:"Shared step: admission", f:"All three require the wrongdoer to acknowledge the wrong honestly."},
      {p:"Shared step: restitution", f:"All three expect that harm done be repaired so far as possible."},
      {p:"Shared outcome", f:"Peace between the parties and the restoring of community harmony."}
    ]},
  casestudy:{ title:"The quarrel over the farm boundary",
    text:"Two families in a town had farmed side by side for many years. When old man Kollie widened his rice field, he cut into land the Tarr family had cleared. Angry words followed, and for a season neither family greeted the other. Their children stopped playing together, and each family began to speak badly of the other in the market. At last the town elders called both families together with the pastor and the imam. Each side was asked to state its case without interruption. Old man Kollie admitted he had gone beyond the boundary; the Tarrs admitted they had spread harsh words about him. He agreed to return the strip of land and to help clear the Tarrs' field for one day. They ate together afterwards, and the children played again.",
    questions:[
      {q:"What was the original wrong, and what wrong followed it?", a:"Old man Kollie cut into the Tarr family's land; the Tarrs then spread harsh words about him in the market."},
      {q:"Who acted as mediators, and why was that significant?", a:"The town elders together with the pastor and the imam — showing that reconciliation in a multi-religious community draws on both faiths and on traditional authority."},
      {q:"Identify the steps of reconciliation that took place.", a:"Each side stated its case, both admitted their wrong, restitution was made by returning the land and giving a day's labour, and the relationship was restored with a shared meal."},
      {q:"Why was it important that both sides admitted fault, not just one?", a:"Because both had done wrong; genuine reconciliation requires each party to own its share rather than blaming only the other."}
    ]},
  project:{ title:"Reconciliation essay and role play",
    brief:"Write on reconciliation and dramatise it, as the syllabus requires.",
    steps:["Write four or five paragraphs in your own words on reconciliation as it relates to man to God, man to man and man to self.","Find one teaching on forgiveness from the Holy Bible and one from the Holy Qur'an.","In a group, prepare a short drama showing a quarrel and its reconciliation.","Identify clearly who plays the mediator and what steps are followed.","Perform it and let the class name the steps they saw."],
    criteria:["Four or five paragraphs covering all three directions","One teaching from each Holy Book","A drama with a clear quarrel and resolution","Steps of reconciliation visible in the drama","Respectful treatment of both faiths"]},
  activities:["Discuss the basis of reconciliation relating to disputes in the class, including gender roles and tribe","Learners give their own personal definitions of reconciliation","Divide into groups to dramatize the process of reconciliation","Oral presentation and research"],
  materials:["The Holy Bible — Daniel 9:24; 2 Corinthians 5:18–19; Hebrews 2:17; Matthew 5:24; Romans 5:10","The Holy Qur'an","Other religious literature","Posters and markers"],
  assessment:["Research","Written assignment of four or five paragraphs","Oral quizzes and tests","Class discussion","Drama presentation"]
},
{
  grade:7, period:"II", sem:"One", icon:"🚭",
  title:"Religion and Substance Abuse",
  subtitle:"Commonly abused substances in Liberia, their causes, effects and prevention",
  outcomes:["Learners know the danger of substance abuse in the family, in the church or mosque and in society, and will increase all efforts to stay drug free while counselling others, through religious teachings on the prevention of substance abuse."],
  objectives:["Define religion and substance abuse","Identify some commonly abused substances in Liberia","Explain the causes of substance abuse in Liberia","Discuss the health effects of substance abuse","Explain how substance abuse can be prevented through religious teaching"],
  note:"<b>Religion</b> is belief in and reverence for God, expressed in worship and in a way of life. <b>Substance abuse</b> is the harmful or excessive use of alcohol, tobacco or drugs. Religious teaching treats the body as a trust from God to be cared for, not destroyed. Referenced: Proverbs 21:17; Proverbs 23:31; Proverbs 5:18; Titus 1:7, and the Qur'anic prohibition of intoxicants.",
  focus:["The meaning of religion","The meaning of substance abuse","Commonly abused substances in Liberia","Causes of substance abuse","Health effects on the body","Prevention through religious and moral teaching"],
  terms:[
    {t:"religion", d:"belief in and reverence for God, expressed in worship and conduct", x:"Religion shapes how a person lives daily."},
    {t:"substance abuse", d:"the harmful or excessive use of alcohol, tobacco or drugs", x:"Substance abuse ruins health and family life."},
    {t:"intoxicant", d:"a substance that clouds the mind and judgement", x:"The Qur'an forbids the use of intoxicants."},
    {t:"addiction", d:"a condition in which a person cannot stop using a substance", x:"Addiction enslaves the will."},
    {t:"sobriety", d:"the state of being free from the influence of intoxicants", x:"Religious teaching calls believers to sobriety."},
    {t:"self-control", d:"the ability to govern one's own desires and actions", x:"Self-control is a moral virtue."},
    {t:"temperance", d:"moderation and restraint in all things", x:"Temperance guards against excess."},
    {t:"counselling", d:"guidance given to help a person with a problem", x:"Counselling helps a person leave addiction."},
    {t:"peer pressure", d:"the influence of friends on one's behaviour", x:"Peer pressure often leads to a first drink."},
    {t:"rehabilitation", d:"the process of restoring a person to health and normal life", x:"Rehabilitation restores dignity."},
    {t:"stewardship of the body", d:"the duty to care for the body as a trust from God", x:"Stewardship of the body forbids self-harm."},
    {t:"abstinence", d:"choosing not to use something at all", x:"Many believers practise total abstinence."}
  ],
  facts:[
    {q:"Define religion.", a:"Belief in and reverence for God, expressed in worship and in a way of living."},
    {q:"Define substance abuse.", a:"The harmful or excessive use of alcohol, tobacco or drugs."},
    {q:"Name four substances commonly abused in Liberia.", a:"Alcohol (including cane juice and palm wine), tobacco, marijuana and various illicit tablets or powders."},
    {q:"State four causes of substance abuse.", a:"Peer pressure, idleness and unemployment, escape from stress or grief, and the example of adults in the home or community."},
    {q:"State four health effects of substance abuse.", a:"Damage to the liver, lungs and brain; loss of memory and judgement; mental illness; and increased risk of accidents and violent injury."},
    {q:"How does substance abuse affect the family?", a:"It wastes household income, causes quarrels and violence, brings neglect of children and loss of employment, and shames the family in the community."},
    {q:"What does Proverbs 21:17 warn about?", a:"That the one who loves pleasure, wine and luxury will become poor — indulgence leads to want."},
    {q:"What does Islamic teaching say about intoxicants?", a:"The Holy Qur'an forbids intoxicants, because they cloud the mind, prevent prayer and lead to enmity between people."},
    {q:"State four ways religion helps prevent substance abuse.", a:"It teaches self-control and the care of the body as God's trust; it provides a community of support and good example; it offers counselling and prayer; and it occupies young people with worthwhile activity."}
  ],
  tf:[
    {s:"Substance abuse is the harmful or excessive use of alcohol, tobacco or drugs.", a:"true", why:"That is the definition given in the syllabus."},
    {s:"The Holy Qur'an permits the free use of intoxicants.", a:"false", why:"The Qur'an forbids intoxicants, because they cloud the mind and cause enmity."},
    {s:"Religious teaching treats the body as a trust from God.", a:"true", why:"That is why harming the body through abuse is regarded as a moral wrong."},
    {s:"Only poor people abuse substances.", a:"false", why:"Substance abuse occurs at every level of society, rich and poor alike."},
    {s:"Idleness and peer pressure are among the causes of substance abuse.", a:"true", why:"Both are named among the leading causes."},
    {s:"A person addicted to a substance can never be helped.", a:"false", why:"Counselling, rehabilitation, family support and faith have restored many people."}
  ],
  apply:[
    {q:"An older boy at your school offers you a drink and mocks you for refusing. What do you say and do?", a:"Refuse politely but firmly, give my reason honestly — that I care for my body and my faith teaches self-control — and remove myself from the situation without quarrelling."},
    {q:"A father spends the family's money on drink and the children cannot pay school fees. What moral duties is he failing?", a:"His duty of stewardship over the family's resources, his responsibility to provide for and educate his children, and his duty to care for his own body."},
    {q:"How can a church or mosque youth group help members stay drug free?", a:"By teaching the dangers honestly, providing sport and useful activity, offering counselling without condemnation, and giving members good friends and role models."},
    {q:"Is it right to despise a person struggling with addiction? Give a religious reason.", a:"No; religious teaching calls for compassion and restoration rather than contempt. The person needs help and counselling, not scorn."},
    {q:"Design one message for a religious flyer against substance abuse.", a:"For example: 'Your body is a trust from God — guard it. Say no to drugs and alcohol, and help a friend say no too.'"}
  ],
  sort:{ title:"Religion and substance abuse", groups:[
    {name:"Commonly abused substances", items:["Alcohol","Tobacco","Marijuana","Illicit tablets"]},
    {name:"Causes", items:["Peer pressure","Idleness","Escape from stress","Bad example at home"]},
    {name:"Effects on the body", items:["Liver damage","Lung disease","Loss of memory","Mental illness"]},
    {name:"Religious means of prevention", items:["Teaching self-control","Counselling and prayer","Youth fellowship","Good role models"]}
  ]},
  compare:{ title:"What the faiths teach on intoxicants", caption:"Complete the table of teachings and their moral basis.",
    items:[
      {p:"Christian teaching", f:"Warns against drunkenness and excess (Proverbs 21:17; 23:31; Titus 1:7); calls for sobriety, self-control and care of the body."},
      {p:"Islamic teaching", f:"Forbids intoxicants outright, because they cloud the mind, hinder prayer and cause enmity between people."},
      {p:"African Traditional teaching", f:"Permits ritual use in some ceremonies but condemns drunkenness as bringing shame on the family and the community."},
      {p:"Shared moral basis", f:"The body and the mind are gifts held in trust; destroying them dishonours the Giver."},
      {p:"Shared social concern", f:"All three condemn the harm abuse does to the family, to work and to community peace."},
      {p:"Shared remedy", f:"Repentance, community support, counselling and a change of company and habit."}
    ]},
  casestudy:{ title:"Flomo comes back",
    text:"Flomo was a bright Grade 9 learner until he began drinking cane juice with older boys behind the market. He missed classes, sold his own textbooks, and twice came home violent. His mother wept but did not know what to do. The imam of their mosque visited the house. He did not shout at Flomo; instead he asked him to come each evening to help sweep the compound and prepare for prayer. Slowly Flomo began to talk. The imam arranged counselling at the health centre and asked two responsible young men from the mosque to walk with Flomo to and from school. It took a year. Flomo is now in Grade 11 and speaks to younger boys about what he lost.",
    questions:[
      {q:"List three ways Flomo's abuse harmed him and his family.", a:"He missed classes and fell behind, he sold his own textbooks, and he came home violent, distressing his mother."},
      {q:"How did the imam approach Flomo, and why did it work?", a:"Not with shouting or shame, but by giving him useful work and companionship, which opened the way for Flomo to talk and accept help."},
      {q:"What practical supports were put in place?", a:"Counselling at the health centre, and two responsible young men to accompany him to and from school."},
      {q:"What does this teach about the role of religion in prevention and recovery?", a:"That faith communities help best by combining compassion with practical structure — occupation, good company, counselling and patience — rather than condemnation."}
    ]},
  project:{ title:"Community substance abuse study",
    brief:"Research substance abuse in your community and produce a religious teaching response.",
    steps:["Write three paragraphs on how substance abuse affects the growth and development of the nation.","List the substances commonly abused in your community and their effect on the body.","Find one teaching against intoxication from the Holy Bible and one from the Holy Qur'an.","Design an informative flyer or leaflet for distribution.","Present your findings to the class."],
    criteria:["Three well-argued paragraphs","Accurate list of substances and effects","One teaching from each Holy Book","A clear, truthful flyer without exaggeration","Confident presentation"]},
  activities:["Research and write three paragraphs on substance abuse and its impact on national development","List the commonly abused substances in the community and their impact on the human body","In group discussion, tell how substance abuse can be avoided through religious teachings","Field visit to a church, mosque or health centre"],
  materials:["The Holy Bible — Proverbs 21:17; Proverbs 23:31; Proverbs 5:18; Titus 1:7","The Holy Qur'an","Religious books and literature","Health literature","Instructional visual aids"],
  assessment:["Research","Written assignment of five paragraphs on causes and prevention","Oral quizzes and tests","Counselling and report writing","Class discussion"]
},
{
  grade:7, period:"III", sem:"One", icon:"🤝",
  title:"The Individual and Society",
  subtitle:"Duties to God the Creator, to self, to the family and to the nation",
  outcomes:["Learners fulfil their duties as ordained — to God the Creator, to the church or mosque, to self, to the family and to the nation — by being good citizens."],
  objectives:["Outline the duties of the individual to God","State what the Holy Books teach about the individual's duties to family and to mankind in general","Explain man's responsibilities to self, family and society","Identify religious personalities as role models"],
  note:"Religious teaching sets out duties in widening circles: first to <b>God the Creator</b>, then to <b>self</b>, then to the <b>family</b>, then to the <b>community and nation</b>. Ecclesiastes 12:13 sums up duty to God as to fear Him and keep His commandments; Romans 13:7 and Matthew 22:21 teach the citizen's duty to lawful authority; and 1 Thessalonians 5:15 forbids repaying evil for evil.",
  focus:["Man's duties to God as Creator","Duties to self","Responsibilities to the family","Responsibilities to society and the nation","Good citizenship","Religious personalities as role models"],
  terms:[
    {t:"duty", d:"something a person is morally bound to do", x:"Honouring parents is a duty."},
    {t:"obligation", d:"a binding responsibility owed to another", x:"Paying tax is a civic obligation."},
    {t:"citizenship", d:"membership of a nation, with its rights and duties", x:"Good citizenship serves the common good."},
    {t:"conscience", d:"the inner sense of right and wrong", x:"His conscience troubled him after the lie."},
    {t:"integrity", d:"being honest and consistent in what one says and does", x:"Integrity earns lasting respect."},
    {t:"role model", d:"a person whose conduct others rightly imitate", x:"A good teacher is a role model."},
    {t:"community", d:"the group of people among whom one lives", x:"The community shares the work of the town."},
    {t:"common good", d:"the wellbeing of all rather than of oneself alone", x:"Public service seeks the common good."},
    {t:"obedience", d:"doing what a rightful authority requires", x:"Obedience to just laws keeps order."},
    {t:"accountability", d:"being answerable for one's actions", x:"Leaders owe accountability to the people."},
    {t:"reverence", d:"deep respect, especially towards God", x:"Worship is offered with reverence."},
    {t:"service", d:"working for the benefit of others", x:"Service to the sick is a religious duty."}
  ],
  facts:[
    {q:"State four duties of the individual to God.", a:"To worship Him, to obey His commandments, to give thanks, and to live a life that honours Him."},
    {q:"What does Ecclesiastes 12:13 give as the whole duty of man?", a:"To fear God and keep His commandments."},
    {q:"State three duties of the individual to himself.", a:"To care for his body and health, to develop his mind through study, and to guard his character and conscience."},
    {q:"State four duties of the individual to his family.", a:"To honour and obey parents, to help with the work of the household, to care for younger and older members, and to protect the family's good name."},
    {q:"State four duties of the individual to the nation.", a:"To obey lawful authority, to pay lawful taxes and dues, to protect public property, and to serve the community honestly."},
    {q:"What does Matthew 22:21 teach about duty to the state and to God?", a:"To render to Caesar the things that are Caesar's, and to God the things that are God's — both civic and religious duty are binding."},
    {q:"What does 1 Thessalonians 5:15 teach about how to treat others?", a:"That no one should repay evil for evil, but always seek to do good to one another and to all."},
    {q:"Name two qualities that make a person a good role model.", a:"Integrity — honesty and consistency — and service to others; also humility and self-discipline."}
  ],
  tf:[
    {s:"The individual has duties to God, to self, to the family and to the nation.", a:"true", why:"Religious teaching sets duty out in these widening circles."},
    {s:"A person's only duty is to himself.", a:"false", why:"Religious and moral teaching binds the individual to God, family, community and nation as well."},
    {s:"Ecclesiastes 12:13 says the whole duty of man is to fear God and keep His commandments.", a:"true", why:"That is the summary the verse gives."},
    {s:"Paying lawful taxes is a religious as well as a civic duty.", a:"true", why:"Romans 13:7 and Matthew 22:21 both teach the rendering of dues to authority."},
    {s:"It is right to repay evil for evil.", a:"false", why:"1 Thessalonians 5:15 forbids repaying evil for evil and urges doing good instead."},
    {s:"Caring for one's own body and mind is a moral duty.", a:"true", why:"Duty to self includes health, study and the guarding of character."}
  ],
  apply:[
    {q:"A learner finds a wallet of money on the road. What do his duties require?", a:"To return it to its owner or hand it to a responsible authority; honesty is owed to God, to himself and to the community."},
    {q:"Your friends want to break the school water pipe for fun. What duty is at stake and what do you do?", a:"The duty to protect public property; I refuse, discourage them, and report it if they persist, because the loss falls on everyone."},
    {q:"A learner says he owes nothing to his country because the government has failed him. How do you answer?", a:"Civic duty is not payment for services received; a citizen still owes honesty, obedience to just laws and service, and can seek change by lawful means."},
    {q:"Name one religious personality you regard as a role model and say why.", a:"For example, a local pastor, imam or teacher known for honesty, care of the poor and consistency between word and life."},
    {q:"How does a learner serve the nation while still at school?", a:"By studying diligently, being honest, respecting others, keeping the school and town clean, and helping neighbours in need."}
  ],
  sort:{ title:"Duties of the individual", groups:[
    {name:"Duties to God", items:["Worship","Obedience","Thanksgiving","Reverence"]},
    {name:"Duties to self", items:["Care of the body","Study and learning","Guarding character","Honest conscience"]},
    {name:"Duties to the family", items:["Honour parents","Help with chores","Care for the young","Protect the family name"]},
    {name:"Duties to the nation", items:["Obey just laws","Pay lawful dues","Protect public property","Serve the community"]}
  ]},
  compare:{ title:"Widening circles of duty", caption:"Complete the table showing each circle of duty and how it is fulfilled.",
    items:[
      {p:"Duty to God", f:"Worship, obedience to His commandments and thanksgiving — the foundation of all other duty."},
      {p:"Duty to self", f:"Care of body and health, development of the mind, and guarding one's character and conscience."},
      {p:"Duty to the family", f:"Honouring parents, sharing the household work, caring for the young and old, and protecting the family name."},
      {p:"Duty to the place of worship", f:"Attending, supporting the congregation, and living consistently with what is professed."},
      {p:"Duty to the community", f:"Neighbourliness, honesty in dealings, and helping in shared work and need."},
      {p:"Duty to the nation", f:"Obedience to just laws, payment of lawful dues, protection of public property and honest service."}
    ]},
  casestudy:{ title:"The clerk and the missing money",
    text:"Sackie, a young man from a poor family, was employed as a clerk at a small government office. At the end of one month he noticed that an error in the register meant he had been paid twice. Nobody had noticed. His uncle told him to keep quiet — the government wasted far more than that, and the family needed the money for his sister's school fees. Sackie thought for two days. Then he reported the error to his supervisor and returned the extra money. His supervisor, surprised, mentioned it to the county officer. Two years later, when a position of responsibility fell vacant, Sackie was appointed. The officer said he wanted someone whose honesty had already been tested.",
    questions:[
      {q:"What conflicting pressures did Sackie face?", a:"His family's genuine need and his uncle's advice to keep the money, against his duty of honesty to his employer and to God."},
      {q:"Why was his uncle's argument wrong, even though the need was real?", a:"That others waste money does not make taking what is not yours right; duty is measured by what is honest, not by what others do."},
      {q:"Which duties did Sackie fulfil?", a:"Duty to God through honesty, duty to self by guarding his conscience and character, and duty to the nation by protecting public funds."},
      {q:"What was the eventual outcome, and what does it teach?", a:"He was appointed to a position of responsibility because his honesty had been tested — integrity may cost in the short term but builds trust and opportunity."}
    ]},
  project:{ title:"Duties chart and role model study",
    brief:"Map your own duties and study a role model.",
    steps:["Draw four circles: duties to God, to self, to family, to nation.","Write at least four duties in each circle, drawn from the Holy Books.","Choose one religious personality as a role model and research their life.","Write five sentences on why their conduct is worth imitating.","Present the chart and the study to the class."],
    criteria:["Four duties in each of the four circles","Duties supported from religious teaching","A genuine role model researched","Five reasoned sentences","Clear presentation"]},
  activities:["Learners tell their experiences of attending worship in church or mosque as duty to God the Creator","Learners carry out obligations to nation building by being good citizens","Learners explain in class discussion examples of religious personalities as role models","Field trip: visit to a church or mosque"],
  materials:["The Holy Bible — Ecclesiastes 12:13; 1 Thessalonians 5:15; Romans 13:7; Matthew 22:21","The Holy Qur'an","Religious reference materials","Posters"],
  assessment:["Written assignments","Oral quizzes and tests","Class discussion","Research and report writing","Field trip report"]
},
{
  grade:7, period:"IV", sem:"Two", icon:"🙏",
  title:"Worship and Offering",
  subtitle:"Forms of worship, the Holy Books, prayer, and the structures, symbols and gestures of worship",
  outcomes:["Learners understand and practise different kinds of worship through giving, praying and reading the Holy Books, and know why places of worship differ in their building plans, and that all structures should accommodate the physically disabled."],
  objectives:["Define worship and offering","State the use and purpose of the Holy Books in worship","Discuss some types of prayer","Name some structures, symbols and gestures used in various religious worship","Explain what the different structures mean to different denominations"],
  note:"<b>Worship</b> is the reverence and honour given to God in word, act and life. An <b>offering</b> is what the worshipper gives to God in gratitude and for the support of the work of the faith. Places of worship carry meaning in their very structure: the <b>dome with the star and crescent</b> on the mosque, the <b>bell tower</b> on the church, and the <b>cross</b> on the fascia or in the stained glass windows.",
  focus:["The meaning of worship","The purpose of offering","Use of the Holy Books in worship","Types and purposes of prayer","Structures, symbols and gestures of worship","Access for the physically disabled"],
  terms:[
    {t:"worship", d:"the reverence and honour given to God in word, act and life", x:"Worship is offered in the church and the mosque."},
    {t:"offering", d:"what a worshipper gives to God in gratitude and for the work of the faith", x:"The offering supports the congregation's work."},
    {t:"tithe", d:"a tenth part of income given in Christian practice", x:"He brought his tithe each month."},
    {t:"zakat", d:"the obligatory giving to the needy required in Islam", x:"Zakat purifies wealth."},
    {t:"prayer", d:"speaking to God in praise, thanksgiving, confession or request", x:"Prayer opens the service."},
    {t:"intercession", d:"prayer offered on behalf of others", x:"They made intercession for the sick."},
    {t:"thanksgiving", d:"prayer expressing gratitude to God", x:"The harvest service is a thanksgiving."},
    {t:"supplication", d:"earnest request made to God", x:"He offered a supplication for guidance."},
    {t:"congregation", d:"the body of people gathered for worship", x:"The congregation stood to sing."},
    {t:"sanctuary", d:"the holy place set apart for worship", x:"They entered the sanctuary quietly."},
    {t:"minaret", d:"the tower of a mosque from which the call to prayer is given", x:"The call sounded from the minaret."},
    {t:"gesture", d:"a bodily movement expressing reverence in worship", x:"Bowing is a gesture of reverence."},
    {t:"symbol", d:"an object or sign that stands for a spiritual truth", x:"The cross is a Christian symbol."},
    {t:"accessibility", d:"the provision that allows disabled people to enter and take part", x:"A ramp gives accessibility to the sanctuary."}
  ],
  facts:[
    {q:"Define worship.", a:"The reverence and honour given to God in word, act and in the whole of life."},
    {q:"Define offering and give its purpose.", a:"What a worshipper gives to God; it expresses gratitude and supports the work of the faith and the care of the needy."},
    {q:"How are the Holy Books used in worship?", a:"They are read publicly to the congregation, expounded in preaching or teaching, recited, and used as the rule for belief and conduct."},
    {q:"Name four types of prayer.", a:"Praise, thanksgiving, confession and supplication or intercession."},
    {q:"What does the dome with the star and crescent on top signify?", a:"It marks the building as a mosque, a place of Islamic worship."},
    {q:"What do the bell tower and the cross signify?", a:"They mark the building as a Christian church — the bell tower calls worshippers, and the cross on the fascia or in the stained glass declares the Christian faith."},
    {q:"Name three gestures used in worship.", a:"Bowing or prostration, kneeling, and the raising or folding of hands (also standing and the removal of shoes)."},
    {q:"Why must places of worship be accessible to the physically disabled?", a:"Because all people are created by God and entitled to worship; ramps and accessible seating allow every member to take part."},
    {q:"What does Colossians 4:16 and 1 Thessalonians 5:27 show about the Holy Book in worship?", a:"That the scriptures were to be read aloud publicly to all the gathered believers."}
  ],
  tf:[
    {s:"Worship is only what happens inside a building on a holy day.", a:"false", why:"Worship is reverence given to God in word, act and the whole of life, not only in a service."},
    {s:"An offering supports the work of the faith and the care of the needy.", a:"true", why:"That is one of its stated purposes, alongside expressing gratitude."},
    {s:"The Holy Books are read publicly in worship.", a:"true", why:"Public reading is a central part of worship in both church and mosque."},
    {s:"The cross and the star and crescent mean the same thing.", a:"false", why:"The cross is a Christian symbol; the star and crescent marks a mosque and Islamic worship."},
    {s:"Places of worship should be built so that disabled people can enter.", a:"true", why:"All structures should facilitate the physically disabled, as the syllabus states."},
    {s:"Prayer consists only of asking God for things.", a:"false", why:"Prayer also includes praise, thanksgiving, confession and intercession for others."}
  ],
  apply:[
    {q:"A visitor in a wheelchair cannot enter your place of worship because of the steps. What should the congregation do?", a:"Build a ramp and set aside accessible seating, so that every worshipper can take part — the building should serve all of God's people."},
    {q:"A poor widow gives a very small offering and is mocked. How would you answer the mockers?", a:"Religious teaching values the spirit of the giver above the amount; a small gift given sincerely from little is worth more than a large gift given carelessly."},
    {q:"Why do Muslims remove their shoes before entering the mosque?", a:"As a gesture of reverence and cleanliness before God in the place set apart for worship."},
    {q:"How can a learner worship God on a day when he cannot attend a service?", a:"By private prayer, reading the Holy Book, thanksgiving, honest conduct and kindness to others — worship extends to the whole of life."},
    {q:"Two learners argue over whose form of worship is correct. How would you counsel them?", a:"Explain that both traditions offer reverence to God in their own way, that the syllabus asks for understanding rather than judgement, and that mutual respect is itself a moral duty."}
  ],
  sort:{ title:"Worship", groups:[
    {name:"Types of prayer", items:["Praise","Thanksgiving","Confession","Intercession"]},
    {name:"Christian symbols and structures", items:["The cross","Bell tower","Stained glass windows","Pulpit"]},
    {name:"Islamic symbols and structures", items:["Dome","Star and crescent","Minaret","Prayer mat"]},
    {name:"Gestures of worship", items:["Bowing","Kneeling","Raising hands","Removing shoes"]}
  ]},
  compare:{ title:"Worship in church and mosque", caption:"Complete the table comparing the two forms of worship.",
    items:[
      {p:"Holy Book", f:"Church: the Holy Bible, read publicly and preached. Mosque: the Holy Qur'an, recited and expounded."},
      {p:"Day of gathering", f:"Church: chiefly Sunday. Mosque: chiefly Friday for the congregational prayer."},
      {p:"Building marks", f:"Church: bell tower, cross on the fascia, stained glass. Mosque: dome with star and crescent, minaret."},
      {p:"Giving", f:"Church: offering and tithe. Mosque: zakat and sadaqah, the obligatory and voluntary giving."},
      {p:"Gestures", f:"Church: standing, kneeling, raising or folding hands. Mosque: standing, bowing, prostration, shoes removed."},
      {p:"Shared purpose", f:"Both offer reverence and thanksgiving to God, instruct the worshipper, and support the needy."}
    ]},
  casestudy:{ title:"The ramp at St. Peter's",
    text:"Old Ma Tokpah had worshipped at her church for forty years. After a stroke she could no longer climb the seven steps to the door, and for six months she sat outside on a bench during the service, listening through the window. A young member raised the matter at a congregational meeting. Some said the money was needed for the roof. But the pastor read the teaching that God shows no partiality, and asked whether a congregation could call itself a house of God while shutting out its oldest member. The church built a concrete ramp and widened one doorway. Ma Tokpah returned inside, and within a year two other disabled worshippers had joined.",
    questions:[
      {q:"What prevented Ma Tokpah from worshipping inside?", a:"Seven steps at the entrance which she could no longer climb after her stroke."},
      {q:"What argument was made against building the ramp?", a:"That the money was needed for the church roof instead."},
      {q:"What moral and religious argument did the pastor use?", a:"That God shows no partiality, and a house of God cannot rightly shut out its own members."},
      {q:"What does the syllabus require of places of worship in this respect?", a:"That all structures should facilitate the physically disabled, so that everyone can take part in worship."}
    ]},
  project:{ title:"Visit to a place of worship",
    brief:"Visit and study a place of worship other than your own, with permission.",
    steps:["Arrange a visit to a church or mosque and interview a member of the leadership.","List the forms of worship you observed and the gestures used.","Note the structures and symbols of the building and find out what each means.","Ask how the offering is used and how the Holy Book is read in the service.","Write an essay on worship and report whether the building is accessible to disabled worshippers."],
    criteria:["A genuine visit and interview","Forms of worship and gestures accurately recorded","Symbols correctly explained","Use of offering and Holy Book described","Respectful tone throughout, and accessibility noted"]},
  activities:["List the different forms of worship, gestures, purpose of offering, and use of the Holy Books in church and mosque","Visit a church or mosque and interview the leadership","Learn what different structural styles mean to different denominations","Write an essay on worship"],
  materials:["The Holy Bible — Exodus 24:7; Acts 15:21; 1 Thessalonians 5:27; Colossians 4:16; Ephesians 5:2; Hebrews 13:15","The Holy Qur'an","Pictures of churches and mosques","Religious literature"],
  assessment:["Essay on worship","Oral presentation","Field visit report","Class discussion","Written quizzes and tests"]
},
{
  grade:7, period:"V", sem:"Two", icon:"🩺",
  title:"Sexually Transmitted Infections",
  subtitle:"Types, modes of transmission, prevention, and the duty of care towards those affected",
  outcomes:["Learners know that sexually transmitted infection results from unsafe sex, have learned preventive methods, and care for others so as to avoid marginalising those suffering from sexually transmitted infections."],
  objectives:["Define and name sexually transmitted infections","Identify some common sexually transmitted infections in Liberia","Name the modes of transmission of the various infections","Explain the prevention of sexually transmitted infections","Discuss the impact of STIs on the individual, family and community"],
  note:"A <b>sexually transmitted infection (STI)</b> is an infection passed mainly through sexual contact. The surest prevention for young people is <b>abstinence</b>, which both the Holy Bible and the Holy Qur'an enjoin. Equally important is the moral duty <b>not to marginalise</b> those who are infected: they need care, treatment and compassion, not rejection.",
  focus:["What sexually transmitted infections are","Common STIs in Liberia","Modes of transmission","Prevention of STIs","Impact on the individual, family and community","Care and non-marginalisation of those affected"],
  terms:[
    {t:"sexually transmitted infection", d:"an infection passed mainly through sexual contact", x:"An STI must be treated early."},
    {t:"HIV", d:"the virus that weakens the body's defence system", x:"HIV can be prevented and treated."},
    {t:"AIDS", d:"the advanced condition that may follow untreated HIV infection", x:"Treatment prevents HIV from becoming AIDS."},
    {t:"gonorrhoea", d:"a bacterial sexually transmitted infection", x:"Gonorrhoea is treatable with medicine."},
    {t:"syphilis", d:"a bacterial STI which is serious if untreated", x:"Syphilis can be cured if treated early."},
    {t:"hepatitis B", d:"a viral infection of the liver, which can be sexually transmitted", x:"Hepatitis B can be prevented by vaccine."},
    {t:"transmission", d:"the passing of an infection from one person to another", x:"Transmission can be interrupted by prevention."},
    {t:"abstinence", d:"refraining from sexual activity", x:"Abstinence is the surest prevention for young people."},
    {t:"faithfulness", d:"keeping to one partner within marriage", x:"Faithfulness protects both partners."},
    {t:"screening", d:"testing to find out whether a person is infected", x:"Screening allows early treatment."},
    {t:"stigma", d:"unfair disapproval and shame attached to a person", x:"Stigma stops people from seeking treatment."},
    {t:"marginalise", d:"to push a person to the edge of the community and exclude them", x:"We must not marginalise the sick."},
    {t:"compassion", d:"sympathy that leads to helping the sufferer", x:"Compassion is a religious duty."},
    {t:"counselling", d:"guidance given to help a person cope and decide", x:"Counselling accompanies testing."}
  ],
  facts:[
    {q:"What is a sexually transmitted infection?", a:"An infection passed mainly through sexual contact from one person to another."},
    {q:"Name four sexually transmitted infections common in Liberia.", a:"HIV, gonorrhoea, syphilis and hepatitis B (also chlamydia)."},
    {q:"Name the main modes of transmission of STIs.", a:"Unprotected sexual contact; also mother to child in pregnancy, at birth or through breast milk in the case of HIV, and contact with infected blood or shared sharp instruments."},
    {q:"State four ways of preventing STIs.", a:"Abstinence from sexual activity, faithfulness within marriage, avoiding shared blades and needles, and early screening and treatment."},
    {q:"Why is abstinence taught as the surest prevention for young people?", a:"Because it removes the main route of transmission entirely, and it accords with the moral teaching of both the Holy Bible and the Holy Qur'an."},
    {q:"State three effects of STIs on the family.", a:"Cost and burden of treatment, illness or loss of a breadwinner, and shame and strain within the household."},
    {q:"Why is stigma harmful in the control of STIs?", a:"Fear of shame stops people from testing and seeking treatment, so infections spread further and sufferers are left without care."},
    {q:"What is the believer's duty towards a person living with an STI?", a:"To show compassion, avoid gossip and rejection, encourage treatment, and support them as a full member of the community."},
    {q:"What is meant by mother-to-child transmission, and can it be prevented?", a:"Passing of HIV from mother to baby in pregnancy, birth or breastfeeding; it can largely be prevented by treatment and medical supervision."}
  ],
  tf:[
    {s:"Sexually transmitted infections are passed mainly through sexual contact.", a:"true", why:"That is what distinguishes them as sexually transmitted."},
    {s:"HIV can be spread by sharing a plate of food or shaking hands.", a:"false", why:"HIV is not spread by ordinary social contact; it requires exchange of certain body fluids."},
    {s:"Abstinence removes the main route of transmission.", a:"true", why:"Refraining from sexual activity eliminates the principal way STIs are passed on."},
    {s:"People living with an STI should be avoided and excluded.", a:"false", why:"The syllabus expressly requires care and the avoidance of marginalising those affected."},
    {s:"Some STIs can be cured with medicine if treated early.", a:"true", why:"Bacterial infections such as gonorrhoea and syphilis are curable when treated in time."},
    {s:"Stigma helps to reduce the spread of infection.", a:"false", why:"Stigma discourages testing and treatment, so infection spreads further."}
  ],
  apply:[
    {q:"A classmate is rumoured to be HIV positive and others refuse to sit near him. What do you do?", a:"Refuse to join the gossip, explain that HIV is not spread by ordinary contact, sit with him myself, and report bullying to a teacher — compassion is a religious duty."},
    {q:"A young person is afraid to go for testing in case people find out. What would you advise?", a:"Explain that testing is confidential, that early treatment protects health and others, and offer to accompany him to a health centre or counsellor."},
    {q:"How do religious teachings on sexual conduct also protect physical health?", a:"By teaching abstinence before marriage and faithfulness within it, they remove or greatly reduce the routes by which STIs are transmitted."},
    {q:"Why should barbers and traditional practitioners avoid reusing blades?", a:"Because infected blood on a shared blade can transmit HIV and hepatitis B from one person to another."},
    {q:"Design one respectful message for a school poster about STIs.", a:"For example: 'Know the facts. Abstain, be faithful, get tested. Care for the sick — never shame them.'"}
  ],
  sort:{ title:"Sexually transmitted infections", groups:[
    {name:"Common STIs", items:["HIV","Gonorrhoea","Syphilis","Hepatitis B"]},
    {name:"Modes of transmission", items:["Unprotected sexual contact","Mother to child","Infected blood","Shared sharp instruments"]},
    {name:"Prevention", items:["Abstinence","Faithfulness in marriage","Avoid shared blades","Early screening"]},
    {name:"Right responses to the infected", items:["Compassion","Encourage treatment","Confidentiality","Continued friendship"]}
  ]},
  compare:{ title:"Prevention and care", caption:"Complete the table of measures and the reason for each.",
    items:[
      {p:"Abstinence", f:"Removes the main route of transmission entirely; the teaching of both Holy Books for the unmarried."},
      {p:"Faithfulness in marriage", f:"Keeps both partners within one uninfected relationship, protecting each and the children."},
      {p:"Avoiding shared blades and needles", f:"Prevents transmission of HIV and hepatitis B through infected blood."},
      {p:"Screening and early treatment", f:"Many STIs are curable if treated early, and treatment prevents onward spread."},
      {p:"Counselling", f:"Helps the person cope, decide wisely and adhere to treatment."},
      {p:"Refusing stigma", f:"Encourages people to test and be treated, and fulfils the duty of compassion towards the sick."}
    ]},
  casestudy:{ title:"The teacher who would not gossip",
    text:"When word spread in a small town that a young woman named Korpo had tested positive for HIV, her market stall lost its customers within a week. Children were told not to buy from her. Her own aunt stopped eating with her. A schoolteacher who had taught Korpo years earlier went to the town meeting. She explained, plainly and without naming anyone, how HIV is and is not transmitted — that it does not travel through food, handshakes, or sharing a bench. She said that Korpo was taking her medicine and could live a long and productive life, and that shaming her would only teach others to hide and go untested. The pastor and the imam both spoke in support. Slowly the customers returned.",
    questions:[
      {q:"What did the town wrongly believe about how HIV spreads?", a:"That it could be caught from food she sold, from eating with her or from ordinary contact."},
      {q:"State two harms the stigma caused.", a:"Korpo lost her livelihood as customers stopped buying, and she was rejected even by her own aunt."},
      {q:"Why did the teacher warn that shaming Korpo would make things worse?", a:"Because it teaches others to hide their status and avoid testing, which spreads infection further."},
      {q:"What was the significance of both the pastor and the imam speaking?", a:"It showed that compassion and the rejection of stigma are shared moral teachings across the community's faiths."}
    ]},
  project:{ title:"STI research and community message",
    brief:"Research STIs and prepare a factual, compassionate teaching message.",
    steps:["Research the common STIs in Liberia, their transmission and prevention.","In a class discussion, record the impact of STIs on the individual, family and community.","Find one teaching on sexual purity from the Holy Bible and one from the Holy Qur'an.","Write a one-page message combining accurate prevention facts with the duty of care for the infected.","Present it to the class and answer questions."],
    criteria:["Accurate medical facts, no myths","Impact on all three levels covered","One teaching from each Holy Book","Prevention and compassion both present","Respectful language throughout — no shaming"]},
  activities:["Research STIs, their modes of transmission and prevention","Class discussion on the impact of STIs on the individual, family and community","Group discussion on the results of the research","Study the moral teachings of the Holy Bible and the Holy Qur'an on sexual conduct"],
  materials:["The Holy Bible — 2 Corinthians 11:2; Titus 2:5; 1 Peter 3:8; 1 Thessalonians 4:4–6","The Holy Qur'an","Religious literature","Health literature and books on HIV/AIDS and other STIs","Pamphlets and posters"],
  assessment:["Research","Essay writing","Oral and written presentation","Group dynamics","Counselling and report writing"]
},
{
  grade:7, period:"VI", sem:"Two", icon:"🕊️",
  title:"Peace",
  subtitle:"The meaning of peace, removing obstacles to peace, and sustaining lasting peace",
  outcomes:["Learners appreciate the importance of peace, identify and eliminate challenges to peace, and initiate steps to sustaining lasting peace through religious and secular initiatives."],
  objectives:["Define peace from a multi-religious standpoint","State the means of eliminating obstacles to peace","List some basic steps to sustaining peace","Explain the purpose and value of peace in the nation"],
  note:"<b>Peace</b> is more than the absence of fighting: it is the presence of justice, security and right relationships. Christian teaching greets peace as a gift (John 14:27; Mark 9:50); the very word <b>Islam</b> is related to <b>salaam</b>, peace, and Muslims greet one another with it; African tradition seeks peace through the mediation of elders and the restoring of community harmony.",
  focus:["The meaning of peace from a secular and religious point of view","Obstacles to peace","Removing obstacles to peace","Steps to sustaining lasting peace","Peace in Liberia","Peace and conflict management"],
  terms:[
    {t:"peace", d:"a state of calm, security and right relationship, not merely the absence of war", x:"Peace requires justice as well as quiet."},
    {t:"justice", d:"the giving to each person of what is rightly due", x:"There is no lasting peace without justice."},
    {t:"salaam", d:"the Arabic word for peace, used in the Muslim greeting", x:"Muslims greet one another with salaam."},
    {t:"harmony", d:"peaceful agreement and cooperation among people", x:"The town lives in harmony."},
    {t:"tolerance", d:"accepting those whose beliefs or customs differ", x:"Tolerance keeps a mixed community at peace."},
    {t:"obstacle", d:"something that stands in the way", x:"Tribalism is an obstacle to peace."},
    {t:"tribalism", d:"favouring one's own ethnic group unfairly against others", x:"Tribalism divides a nation."},
    {t:"corruption", d:"the dishonest use of position for private gain", x:"Corruption breeds resentment and unrest."},
    {t:"dialogue", d:"open discussion between parties to reach understanding", x:"Dialogue replaced fighting."},
    {t:"mediation", d:"the work of a third party in helping others settle a dispute", x:"Mediation ended the standoff."},
    {t:"reconciliation", d:"the restoring of a broken relationship", x:"Reconciliation follows the ending of conflict."},
    {t:"peacemaker", d:"a person who works to bring about peace", x:"Blessed are the peacemakers."}
  ],
  facts:[
    {q:"Define peace.", a:"A state of calm, security and right relationship among people — not merely the absence of fighting, but the presence of justice."},
    {q:"How is peace understood in Christian teaching?", a:"As a gift of God and a duty of the believer: John 14:27 speaks of the peace Christ gives, and Mark 9:50 tells believers to be at peace with one another."},
    {q:"How is peace understood in Islamic teaching?", a:"The word Islam is related to salaam, peace; Muslims greet each other with peace and are enjoined to make peace between disputing parties."},
    {q:"How is peace pursued in African Traditional practice?", a:"Through the mediation of elders, open hearing of both sides, restitution and ceremonies that restore community harmony."},
    {q:"Name four obstacles to peace.", a:"Tribalism and ethnic favouritism, injustice and corruption, poverty and unemployment, and revenge and unresolved grievance."},
    {q:"State four means of eliminating obstacles to peace.", a:"Dialogue between parties, fair and impartial justice, education for tolerance, and equitable sharing of opportunity and resources."},
    {q:"List four basic steps to sustaining lasting peace.", a:"Address the causes of grievance, forgive and reconcile, build institutions that deal fairly with all, and teach the young peaceful ways of settling disputes."},
    {q:"Why is it said there can be no lasting peace without justice?", a:"Because unresolved injustice leaves grievance smouldering, and it eventually breaks out again in conflict."}
  ],
  tf:[
    {s:"Peace is simply the absence of fighting.", a:"false", why:"True peace also requires justice, security and right relationships."},
    {s:"The word Islam is related to salaam, meaning peace.", a:"true", why:"Muslims greet one another with peace, and peacemaking is enjoined."},
    {s:"Tribalism is an obstacle to peace.", a:"true", why:"Favouring one ethnic group unfairly breeds resentment and division."},
    {s:"Revenge is a good way to settle a grievance.", a:"false", why:"Revenge continues the cycle of harm; religious teaching urges forgiveness and lawful redress."},
    {s:"Peace can be sustained without addressing the causes of grievance.", a:"false", why:"Unaddressed grievance eventually breaks out again; the causes must be dealt with."},
    {s:"Elders mediating a dispute is a traditional means of making peace.", a:"true", why:"Mediation by elders is a long-established African practice for restoring harmony."}
  ],
  apply:[
    {q:"Two ethnic groups in a town quarrel over the use of a water well. Suggest a peaceful settlement.", a:"Call both sides to dialogue before neutral elders and religious leaders, hear each grievance, agree a fair timetable for use, and record the agreement publicly."},
    {q:"A learner says Liberia's war is past so peace work is no longer needed. How do you respond?", a:"Peace must be sustained, not assumed; the causes — injustice, tribalism, poverty, unresolved grievance — must be worked at continually or conflict returns."},
    {q:"How can a school be a place that builds peace?", a:"By teaching tolerance, settling disputes by discussion, mixing learners across ethnic and religious lines, and disciplining fairly without favouritism."},
    {q:"Your friend was insulted and wants to fight. What do you say?", a:"Urge him not to return evil for evil; suggest he speak to the person calmly or report the matter, since fighting will multiply the harm for both."},
    {q:"Name one thing you personally can do this week to be a peacemaker.", a:"For example: refuse to repeat gossip, help settle a quarrel between two classmates, or apologise for a wrong I have done."}
  ],
  sort:{ title:"Peace", groups:[
    {name:"Obstacles to peace", items:["Tribalism","Corruption","Injustice","Revenge"]},
    {name:"Means of removing obstacles", items:["Dialogue","Fair justice","Education for tolerance","Sharing opportunity"]},
    {name:"Steps to sustaining peace", items:["Address grievances","Forgive and reconcile","Build fair institutions","Teach the young"]},
    {name:"Fruits of peace", items:["Security","Development","Trade and work","Harmony"]}
  ]},
  compare:{ title:"Peace in the three traditions", caption:"Complete the table of teaching and practice on peace.",
    items:[
      {p:"Christian teaching", f:"Peace is a gift of God and a duty; believers are to be at peace with one another and are called peacemakers (John 14:27; Mark 9:50)."},
      {p:"Islamic teaching", f:"Islam is related to salaam, peace; the greeting itself invokes peace, and making peace between disputants is a merit."},
      {p:"African Traditional practice", f:"Elders mediate, both sides are heard, restitution is made and a ceremony or shared meal restores harmony."},
      {p:"Shared requirement", f:"All three require the acknowledgement of wrong and a willingness to forgive."},
      {p:"Shared obstacle", f:"All three identify pride, greed and revenge as enemies of peace."},
      {p:"Shared goal", f:"A community restored to justice, security and right relationship."}
    ]},
  casestudy:{ title:"The peace committee",
    text:"After years of tension between two neighbouring towns over grazing land, a joint peace committee was formed. It had four members from each town: an elder, a woman leader, a youth representative and a religious leader — one town sending a pastor, the other an imam. The committee met monthly, in each town by turn. It did not begin by apportioning blame; it began by mapping the grazing land and hearing what each community actually needed. An agreement set seasons and routes for the cattle, with a small fine for breaches, paid to the other town's school. Disputes that once ended in machetes are now brought to the committee within a day.",
    questions:[
      {q:"Why was the committee composed of four different kinds of member from each town?", a:"So that elders, women, youth and religious leaders were all represented, giving the committee authority and legitimacy across the whole community."},
      {q:"Why did the committee not begin by apportioning blame?", a:"Because blame entrenches positions; beginning with the actual needs of each community opened the way to a practical agreement."},
      {q:"What was clever about the fine being paid to the other town's school?", a:"It turned a breach into a benefit for the injured party and built goodwill rather than resentment."},
      {q:"What does this case show about sustaining peace?", a:"That peace is sustained by permanent, trusted structures that address real causes and settle disputes quickly, not by one-off settlements."}
    ]},
  project:{ title:"Peace research and report",
    brief:"Research peace and present a religious and practical case for it.",
    steps:["Research and prepare a class presentation on the purpose of peace.","Identify four obstacles to peace in your own community.","Propose one practical means of removing each obstacle.","Find one teaching on peace from the Holy Bible and one from the Holy Qur'an.","Write a report on peace from a religious perspective."],
    criteria:["Clear statement of the purpose of peace","Four genuine local obstacles identified","Practical remedy for each","One teaching from each Holy Book","A well-organised written report"]},
  activities:["Research and make a class presentation on the purpose of peace, eliminating obstacles to peace and sustaining peace","Write a report on peace from a religious perspective","Discuss peace from both a secular and a religious point of view","Role play the mediation of a dispute"],
  materials:["The Holy Bible — Ezekiel 13:10; Mark 9:50; John 14:27; John 16:33; 1 Corinthians 7:15; 1 Thessalonians 5:13","The Holy Qur'an","Other religious literature","Literature on peace and conflict management"],
  assessment:["Research","Oral presentation","Written report on peace","Counselling and report writing","Class discussion"]
},

/* ================================ GRADE 8 ================================ */
{
  grade:8, period:"I", sem:"One", icon:"🚫",
  title:"Substance Abuse",
  subtitle:"How religion helps eliminate substance abuse, and the moral teachings on prevention",
  outcomes:["Learners understand through religious teachings the harmful effects of substance abuse on the body, and will pass on to their peers information on how to prevent substance abuse through religious practice."],
  objectives:["State how religion helps to eliminate substance abuse","Identify some commonly abused substances in Liberia and their negative impact on the body","Explain some of the religious and moral teachings on the causes, effects and prevention of substance abuse","Disseminate prevention information to peers"],
  note:"Where Grade 7 asked <i>what</i> substance abuse is, Grade 8 asks <b>how religion reduces it</b>. Faith communities work in four ways: by <b>teaching</b> the moral value of self-control and stewardship of the body; by <b>belonging</b>, giving young people company and occupation; by <b>counselling</b> and restoring the fallen; and by <b>example</b>, in leaders and peers who live what they profess.",
  focus:["How religion reduces substance abuse","Commonly abused substances and their impact on the body","Religious and moral teachings on causes and effects","Prevention through religious practice","Peer education and dissemination","Restoring those who have fallen"],
  terms:[
    {t:"prevention", d:"action taken to stop a harm before it occurs", x:"Prevention is better than cure."},
    {t:"self-control", d:"the governing of one's own desires and actions", x:"Self-control is central to moral teaching."},
    {t:"stewardship", d:"the careful management of what has been entrusted to one", x:"Stewardship extends to one's own body."},
    {t:"discipline", d:"trained and ordered conduct", x:"Religious discipline shapes daily habits."},
    {t:"fellowship", d:"the company and mutual support of fellow believers", x:"Fellowship gives a young person good friends."},
    {t:"peer education", d:"young people teaching and influencing one another", x:"Peer education spreads prevention messages."},
    {t:"witness", d:"the example a believer gives by their life", x:"His witness persuaded others to stop drinking."},
    {t:"restoration", d:"the bringing back of a fallen person to good standing", x:"Restoration follows repentance."},
    {t:"moderation", d:"avoidance of excess", x:"Moderation is urged in all things."},
    {t:"temptation", d:"an inducement to do what is wrong", x:"He resisted the temptation to drink."},
    {t:"conscience", d:"the inner sense of right and wrong", x:"A trained conscience warns before the act."},
    {t:"advocacy", d:"public argument in support of a cause", x:"The youth group took up advocacy against drugs."}
  ],
  facts:[
    {q:"State four ways religion helps to eliminate substance abuse.", a:"By teaching self-control and stewardship of the body, by providing fellowship and occupation, by offering counselling and restoration, and by the example of leaders and peers."},
    {q:"Name four commonly abused substances in Liberia and one effect of each on the body.", a:"Alcohol — damages the liver; tobacco — damages the lungs; marijuana — impairs memory and judgement; illicit tablets or powders — cause dependence and mental disturbance."},
    {q:"What moral teaching underlies the prohibition of intoxicants in Islam?", a:"That intoxicants cloud the mind, prevent the proper performance of prayer, and cause enmity between people."},
    {q:"What does Titus 1:7 require of a religious leader in this respect?", a:"That he be blameless and not given to wine — leaders must set the example they teach."},
    {q:"Why is fellowship an effective means of prevention?", a:"It gives a young person good company, useful occupation and role models, replacing the idle group in which abuse begins."},
    {q:"What is peer education and why is it powerful?", a:"Young people teaching one another; it is powerful because peers are heard and believed where adult warnings are often dismissed."},
    {q:"How should a faith community treat a member who has fallen into abuse?", a:"With compassion and practical help towards restoration — counselling, occupation and accompaniment — not with expulsion and contempt."},
    {q:"State three religious practices that in themselves help prevent abuse.", a:"Regular prayer and worship that order the day, fasting which trains self-denial, and service to others which occupies time meaningfully."}
  ],
  tf:[
    {s:"Religion reduces substance abuse partly by giving young people fellowship and occupation.", a:"true", why:"Belonging to a supportive community replaces the idle company in which abuse commonly begins."},
    {s:"A religious leader's own conduct is irrelevant to the teaching.", a:"false", why:"Titus 1:7 requires the leader to be blameless; example carries the teaching."},
    {s:"Fasting can help train self-denial.", a:"true", why:"The discipline of voluntary abstention strengthens the will against other appetites."},
    {s:"A person who has fallen into abuse should be expelled from the congregation.", a:"false", why:"Religious teaching seeks restoration through counselling and support, not rejection."},
    {s:"Peer education is ineffective because young people never listen to each other.", a:"false", why:"Peers are often heard more readily than adults, which makes peer education powerful."},
    {s:"Stewardship of the body is a religious reason for avoiding harmful substances.", a:"true", why:"The body is regarded as a trust from God, to be cared for rather than damaged."}
  ],
  apply:[
    {q:"Your youth fellowship wants to reduce drinking among young men in the town. Outline a four-part plan.", a:"Teach the facts and the moral basis; provide weekly sport or skills activity; train two peer counsellors; and arrange discreet referral to the health centre for those already dependent."},
    {q:"A church member is known to drink heavily. Some want him named from the pulpit. Is that right?", a:"No; public shaming humiliates without helping. He should be approached privately with compassion and offered counselling and support towards restoration."},
    {q:"Why might a young person reject a warning from a parent but accept the same warning from a friend?", a:"Because peers share his world and are not seen as authority figures; their word feels credible rather than commanding."},
    {q:"How can a mosque or church use its regular meetings to prevent abuse without preaching at people?", a:"By building genuine friendship and occupation, giving young people responsibility and skills, and letting sober role models be visible among them."},
    {q:"Write one sentence for a religious leaflet aimed at a fourteen-year-old.", a:"For example: 'Your mind is God's gift — do not trade it for a bottle; the friends worth having will respect your no.'"}
  ],
  sort:{ title:"Religion against substance abuse", groups:[
    {name:"How religion helps", items:["Moral teaching","Fellowship","Counselling","Good example"]},
    {name:"Religious practices that help", items:["Prayer and worship","Fasting","Service to others","Study of the Holy Book"]},
    {name:"Effects on the body", items:["Liver damage","Lung disease","Impaired memory","Dependence"]},
    {name:"Means of dissemination", items:["Flyers and leaflets","Peer education","Youth meetings","Community conversation"]}
  ]},
  compare:{ title:"Four ways faith communities prevent abuse", caption:"Complete the table of methods and how each works.",
    items:[
      {p:"Teaching", f:"Sets out the moral basis — self-control, stewardship of the body, moderation — so refusal has a reason."},
      {p:"Belonging", f:"Provides friendship, occupation and identity, replacing the idle company in which abuse begins."},
      {p:"Counselling", f:"Gives private, non-shaming help to those already using, and referral for treatment."},
      {p:"Example", f:"Leaders and peers who live soberly make the teaching credible; hypocrisy destroys it."},
      {p:"Discipline", f:"Regular prayer, worship and fasting train the will and order the use of time."},
      {p:"Restoration", f:"Receives back the repentant without contempt, which encourages others to seek help early."}
    ]},
  casestudy:{ title:"The leaflet campaign",
    text:"The youth wing of a mosque in Paynesville decided to tackle the use of illicit tablets among boys in their district. They did three things. First they learned the facts from a nurse at the health centre, so that nothing they said could be dismissed as exaggeration. Second, they printed a simple leaflet: one side gave the medical effects, the other side a short teaching on the care of the body as a trust from God. Third, and most importantly, four of them agreed to be available by phone, day or night, to any boy who wanted to talk. In eighteen months, eleven boys asked for help. Nine of them stopped. The youth leader said the leaflets opened the door, but the phone numbers were what mattered.",
    questions:[
      {q:"Why did the group begin by learning the facts from a nurse?", a:"So that their claims would be accurate and could not be dismissed as exaggeration."},
      {q:"What two elements did the leaflet combine?", a:"Medical facts about the effects on one side, and religious teaching on the care of the body as a trust from God on the other."},
      {q:"What did the youth leader say mattered most, and why?", a:"The phone numbers — because personal, available help is what actually enables someone to change, while the leaflet only opens the door."},
      {q:"What does this suggest about effective religious prevention work?", a:"That accurate information and moral teaching must be joined to genuine personal relationship and practical availability."}
    ]},
  project:{ title:"Peer prevention campaign",
    brief:"Plan and carry out a religious prevention campaign for your peers.",
    steps:["In small groups, name and discuss the causes of substance abuse and their prevention through religious teaching.","Gather accurate facts on the effects of two substances on the body.","Find one teaching on sobriety from the Holy Bible and one from the Holy Qur'an.","Produce an informative flyer or leaflet for distribution.","Carry out the distribution and report how peers responded."],
    criteria:["Causes and prevention properly discussed","Accurate medical facts","One teaching from each Holy Book","A clear, truthful leaflet","An honest report of the response"]},
  activities:["Meet in small groups to name and discuss the causes and prevention of substance abuse through religious teachings","Raise awareness of the negative impact of substance abuse in the community through religious flyers and leaflets","Hold month-to-month conversations with peers","Invite a health worker or counsellor to address the class"],
  materials:["The Holy Bible — Proverbs 21:17; Proverbs 23:31; Proverbs 5:18; Titus 1:7","The Holy Qur'an","Other reference materials","Religious instructional materials","Paper and materials for leaflets"],
  assessment:["Research","Oral presentation","Leaflet campaign project","Class discussion","Written quizzes and tests"]
},
{
  grade:8, period:"II", sem:"One", icon:"⚖️",
  title:"Conflict and its Resolution",
  subtitle:"Spiritual, physical, family and ethnic conflict, and the methods of resolution",
  outcomes:["Learners are able to identify conflict and have the ability to resolve and manage conflict through conflict resolution."],
  objectives:["Define conflict","Classify conflict — spiritual, physical, family and ethnic","State the sources of conflict","Explain the methods of conflict resolution","Dramatize conflict and its management"],
  note:"<b>Conflict</b> is a serious disagreement or clash between persons or groups. The syllabus classifies it as <b>spiritual</b> (inner struggle between right and wrong), <b>physical</b> (open fighting), <b>family</b> (within the household) and <b>ethnic</b> (between groups). Methods of resolution include <b>dialogue, negotiation, mediation, arbitration and reconciliation</b>.",
  focus:["Definition of conflict","Spiritual conflict","Physical conflict","Family conflict","Ethnic conflict","Sources of conflict","Methods of conflict resolution"],
  terms:[
    {t:"conflict", d:"a serious disagreement or clash between persons or groups", x:"The conflict divided the town."},
    {t:"spiritual conflict", d:"the inner struggle between right and wrong within a person", x:"He faced a spiritual conflict over the bribe."},
    {t:"physical conflict", d:"open fighting or violence between parties", x:"Physical conflict causes injury and loss."},
    {t:"family conflict", d:"disagreement within the household", x:"Family conflict unsettles the children."},
    {t:"ethnic conflict", d:"conflict between groups of different ethnic origin", x:"Ethnic conflict tore communities apart."},
    {t:"dialogue", d:"open discussion between parties to reach understanding", x:"Dialogue began to lower the tension."},
    {t:"negotiation", d:"discussion between parties aimed at an agreement", x:"Negotiation produced a settlement."},
    {t:"mediation", d:"the help of a neutral third party in settling a dispute", x:"Mediation broke the deadlock."},
    {t:"arbitration", d:"the settling of a dispute by a person whose decision both accept", x:"They agreed to arbitration by the chief."},
    {t:"compromise", d:"a settlement in which each side gives up something", x:"A fair compromise ended the quarrel."},
    {t:"grievance", d:"a real or imagined wrong giving cause for complaint", x:"Unheard grievance breeds conflict."},
    {t:"escalation", d:"the worsening and spreading of a conflict", x:"Insults led to escalation."},
    {t:"de-escalation", d:"the calming and reduction of a conflict", x:"Withdrawing the insult brought de-escalation."},
    {t:"resolution", d:"the settling of a conflict so that it ends", x:"Resolution restored working relations."}
  ],
  facts:[
    {q:"Define conflict.", a:"A serious disagreement or clash between persons or groups."},
    {q:"Name the four classes of conflict studied.", a:"Spiritual conflict, physical conflict, family conflict and ethnic conflict."},
    {q:"What is spiritual conflict?", a:"The inner struggle within a person between right and wrong, between conscience and desire."},
    {q:"Name four sources of conflict.", a:"Competition for scarce resources, injustice and unequal treatment, poor communication and misunderstanding, and differences of belief, custom or ethnicity."},
    {q:"Name five methods of conflict resolution.", a:"Dialogue, negotiation, mediation, arbitration and reconciliation."},
    {q:"State the difference between mediation and arbitration.", a:"A mediator helps the parties reach their own agreement; an arbitrator hears the case and gives a decision that both have agreed to accept."},
    {q:"What does John 16:33 offer to a person in conflict?", a:"The assurance of peace in Christ despite the tribulation of the world — inner peace amid outward conflict."},
    {q:"Give two things that cause a conflict to escalate.", a:"Insults and personal attacks, and the spreading of rumour; also the involvement of others who take sides without knowing the facts."},
    {q:"Why is unresolved family conflict serious?", a:"It unsettles children, damages health and trust, and often spreads into the wider community."}
  ],
  tf:[
    {s:"Conflict is always physical.", a:"false", why:"It may be spiritual, family or ethnic as well as physical."},
    {s:"Spiritual conflict is the inner struggle between right and wrong.", a:"true", why:"It takes place within the person, in conscience."},
    {s:"A mediator gives the decision that ends a dispute.", a:"false", why:"A mediator helps the parties reach their own agreement; an arbitrator gives a decision."},
    {s:"Competition for scarce resources is a source of conflict.", a:"true", why:"It is among the commonest sources, as in disputes over land or water."},
    {s:"Insults help resolve a conflict quickly.", a:"false", why:"Insults escalate conflict by attacking the person rather than addressing the issue."},
    {s:"Conflict can be managed even where it cannot be fully ended.", a:"true", why:"Conflict management limits the harm and keeps the dispute from turning violent."}
  ],
  apply:[
    {q:"Two learners fight over a missing pen. Classify the conflict and suggest a resolution.", a:"A physical conflict arising from a dispute over property; separate them, hear both accounts, establish the facts, require restitution or apology as appropriate, and reconcile them."},
    {q:"A husband and wife argue constantly about money in front of their children. What kind of conflict is this and what harm follows?", a:"Family conflict; it unsettles and frightens the children, damages trust, and may spread as each parent recruits relatives to their side."},
    {q:"Your community faces ethnic tension over jobs at a new company. What method of resolution would you propose?", a:"Mediated dialogue with representatives of each group and the company, addressing the real grievance by agreeing a transparent and fair hiring process."},
    {q:"Describe a spiritual conflict a learner might face and how to resolve it.", a:"Being offered exam answers: the desire to pass conflicts with conscience. Resolution comes by choosing honesty, accepting the cost, and seeking help to prepare properly."},
    {q:"Why should a mediator be neutral?", a:"Because if he favours one side the other will not trust the process, and any settlement reached will not hold."}
  ],
  sort:{ title:"Conflict and resolution", groups:[
    {name:"Classes of conflict", items:["Spiritual","Physical","Family","Ethnic"]},
    {name:"Sources of conflict", items:["Scarce resources","Injustice","Poor communication","Difference of belief"]},
    {name:"Methods of resolution", items:["Dialogue","Negotiation","Mediation","Arbitration"]},
    {name:"Things that escalate conflict", items:["Insults","Rumour","Revenge","Taking sides blindly"]}
  ]},
  compare:{ title:"Classes of conflict and how each is resolved", caption:"Complete the table of conflict types and their remedies.",
    items:[
      {p:"Spiritual conflict", f:"Inner struggle between conscience and desire; resolved by prayer, honest self-examination and choosing the right despite cost."},
      {p:"Physical conflict", f:"Open fighting; resolved by separating the parties, establishing facts, restitution and reconciliation."},
      {p:"Family conflict", f:"Disagreement in the household; resolved by calm dialogue, often with an elder or religious leader mediating."},
      {p:"Ethnic conflict", f:"Between groups; resolved by mediated dialogue that addresses the real grievance and by fair, transparent institutions."},
      {p:"Mediation", f:"A neutral third party helps the parties reach their own agreement."},
      {p:"Arbitration", f:"A trusted person hears both sides and gives a decision that both have agreed in advance to accept."}
    ]},
  casestudy:{ title:"The market stall dispute",
    text:"Two traders, one from one county and one from another, both claimed the same corner stall in a busy market. Words became shoving, and within an hour supporters of each had gathered along ethnic lines. The market superintendent did not try to judge who was right. He separated the two men, sent the crowds back to their stalls, and called a hearing for the next morning with the market women's chairlady and both a pastor and an imam present. At the hearing, each trader spoke without interruption. It emerged that both had been allocated the stall by different clerks. The superintendent apologised for the office's error, gave the corner to the trader who had been there longer, and found the other an equally good stall by the entrance. Both accepted.",
    questions:[
      {q:"How was this dispute in danger of changing its character?", a:"A dispute between two individuals was becoming an ethnic conflict as supporters gathered along ethnic lines."},
      {q:"Name two things the superintendent did immediately to de-escalate.", a:"He separated the two men and sent the gathered crowds back to their stalls."},
      {q:"What was the actual source of the conflict?", a:"An administrative error — two different clerks had allocated the same stall to both men."},
      {q:"Why did both traders accept the outcome?", a:"Each was heard without interruption, the office admitted its own fault, and neither was left worse off — the second man received an equally good stall."}
    ]},
  project:{ title:"Conflict resolution drama",
    brief:"Dramatize a conflict and demonstrate its resolution, as the syllabus requires.",
    steps:["Define the four types of conflict and list the methods of resolution.","Divide into three groups: two to dramatize a conflict and one to manage and resolve it.","Choose a realistic conflict from school or community life.","Perform the drama showing escalation and then resolution.","Let the class identify the type of conflict, its source and the method of resolution used."],
    criteria:["Four types correctly defined","A realistic conflict chosen","Escalation and resolution both shown","A recognisable resolution method used","Class able to identify type, source and method"]},
  activities:["Define the various types of conflict and list methods of conflict resolution","Divide into three groups: two to dramatize conflict and one to manage conflict and demonstrate resolution","Discuss the sources of conflict in the school and community","Role play mediation of a dispute"],
  materials:["The Holy Bible — John 14:27; John 16:33; Philippians 4:7; Romans 5:1; Romans 14:17","The Holy Qur'an","Peace and conflict resolution literature","Other religious literature"],
  assessment:["Oral presentation","Drama and role play","Research","Class discussion","Written quizzes and tests"]
},
{
  grade:8, period:"III", sem:"One", icon:"💍",
  title:"Moral Teaching on Sexual Conduct",
  subtitle:"Fornication and adultery, and the effects of sexual sin on spiritual life, family, health and resources",
  outcomes:["Learners abstain from sexual sin and encourage others to abstain from negative sexual behaviour, understanding its effects on the spiritual life, the family, health and the resources of the household."],
  objectives:["Define fornication and adultery","Discuss the effects of sexual sin on one's spiritual life","Discuss the effects of sexual sin on one's health","Discuss the effects on family life and financial resources","Conduct peer counselling on the prevention of HIV/AIDS and STIs"],
  note:"Both the Holy Bible and the Holy Qur'an teach that sexual relations belong within <b>marriage</b>. <b>Fornication</b> is sexual relations between unmarried persons; <b>adultery</b> is sexual relations by a married person outside the marriage. The syllabus asks learners to weigh the effects of breaking this teaching on four areas: the <b>spiritual life</b>, <b>family life</b>, <b>health</b>, and <b>financial resources</b>. Referenced: Genesis 2:18, 21–24; Proverbs 5:18.",
  focus:["The religious teaching on marriage and sexual conduct","Definition of fornication and adultery","Effects on the spiritual life","Effects on family life","Effects on health — HIV/AIDS and STIs","Effects on financial resources","Peer counselling"],
  terms:[
    {t:"chastity", d:"purity in sexual conduct according to one's state in life", x:"Chastity is taught to the unmarried."},
    {t:"fornication", d:"sexual relations between persons who are not married", x:"Both Holy Books forbid fornication."},
    {t:"adultery", d:"sexual relations by a married person outside the marriage", x:"Adultery breaks the marriage covenant."},
    {t:"marriage", d:"the covenant union of husband and wife", x:"Genesis speaks of the two becoming one flesh."},
    {t:"covenant", d:"a solemn binding agreement", x:"Marriage is described as a covenant."},
    {t:"faithfulness", d:"keeping one's promises, especially to a spouse", x:"Faithfulness protects the family."},
    {t:"abstinence", d:"refraining from sexual activity", x:"Abstinence is taught to the unmarried."},
    {t:"purity", d:"freedom from moral corruption", x:"Purity of heart is urged by both faiths."},
    {t:"consequence", d:"a result that follows from an action", x:"Every choice carries a consequence."},
    {t:"repentance", d:"sorrow for wrong and turning away from it", x:"Repentance opens the way to forgiveness."},
    {t:"self-respect", d:"proper regard for one's own worth and dignity", x:"Self-respect strengthens moral choice."},
    {t:"peer counselling", d:"guidance given by one young person to another", x:"Peer counselling reaches those adults cannot."},
    {t:"responsibility", d:"accountability for the results of one's actions", x:"Parenthood brings lifelong responsibility."},
    {t:"forgiveness", d:"the pardoning of a wrong", x:"Both faiths teach forgiveness for the repentant."}
  ],
  facts:[
    {q:"Define fornication and adultery.", a:"Fornication is sexual relations between persons who are not married; adultery is sexual relations by a married person with someone other than their spouse."},
    {q:"What do Genesis 2:21–24 and Proverbs 5:18 teach about marriage?", a:"That husband and wife are joined as one, and that a man should rejoice in the wife of his youth — sexual life belongs within the marriage bond."},
    {q:"What does Islamic teaching say about sexual relations outside marriage?", a:"The Holy Qur'an forbids them and enjoins modesty and chastity on both men and women, with marriage as the proper context."},
    {q:"State three effects of sexual sin on the spiritual life.", a:"A troubled conscience and sense of guilt, a broken sense of fellowship with God, and the weakening of moral resolve in other areas."},
    {q:"State three effects on family life.", a:"Broken trust between spouses, distress and instability for children, and conflict between the wider families."},
    {q:"State three effects on health.", a:"Risk of HIV and other sexually transmitted infections, unplanned pregnancy with its dangers to a young mother, and the mental distress that follows."},
    {q:"State two effects on financial resources.", a:"The cost of treating infection or supporting an unplanned child, and the loss of schooling or employment that would have raised income."},
    {q:"Why does the syllabus link this topic to peer counselling?", a:"Because young people listen to one another; peers can pass on prevention information about HIV and STIs where adult warnings are dismissed."},
    {q:"What do both faiths teach about a person who repents?", a:"That God is merciful and forgives the truly repentant, who should then be restored rather than despised."}
  ],
  tf:[
    {s:"Both the Holy Bible and the Holy Qur'an place sexual relations within marriage.", a:"true", why:"Both traditions teach marriage as the proper context for sexual life."},
    {s:"Adultery and fornication mean the same thing.", a:"false", why:"Fornication is between unmarried persons; adultery involves a married person breaking the marriage bond."},
    {s:"Sexual conduct affects only the individual and nobody else.", a:"false", why:"It affects the family, the health of others, the children and the household's resources."},
    {s:"An unplanned pregnancy commonly ends a girl's schooling.", a:"true", why:"It is one of the leading reasons girls leave school, with lasting effects on income and independence."},
    {s:"Religious teaching offers no way back for someone who has fallen.", a:"false", why:"Both faiths teach that God forgives the truly repentant, who should be restored, not despised."},
    {s:"Peer counselling can help prevent the spread of HIV and STIs.", a:"true", why:"Young people often accept information and challenge from peers more readily than from adults."}
  ],
  apply:[
    {q:"A Grade 8 girl is pressured by an older man with gifts and money. What is happening and what should she do?", a:"She is being exploited; the gifts create obligation. She should refuse, break contact, and tell a parent, teacher or religious leader at once — this is a matter of her safety, not only her morals."},
    {q:"Weigh the four areas of consequence for a fifteen-year-old considering sexual activity.", a:"Spiritually, a troubled conscience; for the family, shame and strain; for health, risk of STIs and pregnancy; financially, loss of schooling and the cost of a child — the weight falls heaviest and longest on her."},
    {q:"A classmate has become pregnant and others mock her. What does moral teaching require of you?", a:"Compassion, not contempt: religious teaching condemns the act but restores the person. I should not mock, should discourage others, and should encourage her to continue her education."},
    {q:"Why is 'everyone is doing it' a poor reason for a moral decision?", a:"It is usually untrue, and in any case the number of people doing a thing does not change its consequences or its rightness."},
    {q:"How would you counsel a friend who says religion is only trying to spoil his enjoyment?", a:"Point out that the teaching protects him — from infection, from a responsibility he cannot yet carry, and from harming another person — and that self-control is a strength, not a loss."}
  ],
  sort:{ title:"Sexual conduct and its consequences", groups:[
    {name:"Effects on spiritual life", items:["Troubled conscience","Guilt","Broken fellowship with God","Weakened resolve"]},
    {name:"Effects on family life", items:["Broken trust","Distress to children","Conflict between families","Loss of good name"]},
    {name:"Effects on health", items:["HIV and STIs","Unplanned pregnancy","Danger to a young mother","Mental distress"]},
    {name:"Effects on resources", items:["Cost of treatment","Cost of a child","Loss of schooling","Loss of employment"]}
  ]},
  compare:{ title:"Teaching on marriage and sexual conduct", caption:"Complete the table of what each tradition teaches.",
    items:[
      {p:"Christian teaching", f:"Marriage joins husband and wife as one (Genesis 2:21–24); sexual life belongs within it, and faithfulness is required of both."},
      {p:"Islamic teaching", f:"Modesty and chastity are enjoined on men and women alike, with marriage as the proper and honoured context."},
      {p:"African Traditional teaching", f:"Sexual conduct is regulated by custom and family; breach brings shame on the whole lineage and often requires restitution."},
      {p:"Shared teaching", f:"All three treat sexual conduct as a matter of community and family consequence, not private preference alone."},
      {p:"Shared concern for the vulnerable", f:"All condemn the exploitation of the young, and require protection of women and children."},
      {p:"Shared mercy", f:"All provide a path of repentance and restoration rather than permanent condemnation."}
    ]},
  casestudy:{ title:"Two futures",
    text:"Bendu and Massa were close friends in Grade 8, both strong students who wanted to train as nurses. In their third term an older man began meeting Massa after school with money and airtime. Bendu warned her, but Massa said Bendu was jealous. By the following year Massa was pregnant; the man denied responsibility and moved to another county. Massa left school. Bendu completed junior high, then senior high, and is now in her second year of nurse training. She visits Massa, who sells cold water by the roadside and is raising her son with her mother's help. Massa tells younger girls in the neighbourhood exactly what happened, and says she wishes she had listened.",
    questions:[
      {q:"What made Massa vulnerable to the older man?", a:"He offered money and airtime, creating obligation and flattery — an exploitation of a schoolgirl's need and inexperience."},
      {q:"Name the consequences that fell on Massa but not on the man.", a:"Pregnancy, the end of her schooling, the raising of a child, and the loss of her intended career — he simply left the county."},
      {q:"Which of the four areas of consequence does this case illustrate?", a:"Chiefly family life and financial resources, but also health and the spiritual and emotional burden she carried."},
      {q:"What good is Massa now doing, and what does it show?", a:"She warns younger girls from her own experience — showing that even after a hard consequence a person can act with integrity and be respected, not despised."}
    ]},
  project:{ title:"Essay on consequences and peer counselling",
    brief:"Write on the effects of sexual sin and prepare peer counselling material.",
    steps:["Research and write a two-page essay on the nature and effects of sexual sin on the individual's spiritual life, family life, health and financial resources.","Find one teaching from the Holy Bible and one from the Holy Qur'an on chastity and marriage.","Prepare peer counselling notes on the prevention of HIV/AIDS and STIs.","Discuss how negative sexual behaviour affects reproductive health and increases poverty in the family.","Present your material respectfully to the class."],
    criteria:["Two-page essay covering all four areas","One teaching from each Holy Book","Accurate prevention information","The link to poverty properly argued","Respectful language — condemning conduct, never demeaning persons"]},
  activities:["Research and write a two-page essay on the effects of sexual sin on spiritual life, family life, health and financial resources","Role play the negative effects of sexual sin as a religious leader teaches","Conduct peer counselling on the spread and prevention of HIV/AIDS and STIs","Discuss negative sexual habits, their effect on reproductive health and the increase of poverty in the family"],
  materials:["The Holy Bible — Genesis 2:7; Genesis 2:18; Genesis 2:21–24; Leviticus 21:13; Proverbs 5:18","The Holy Qur'an","Religious and moral literature","Health literature on HIV/AIDS and STIs"],
  assessment:["Essay writing","Oral presentation","Research","Role play","Counselling"]
},
{
  grade:8, period:"IV", sem:"Two", icon:"🤲",
  title:"Reconciliation",
  subtitle:"The Chief Reconciler, and the fundamental steps to reconciliation",
  outcomes:["Learners know and understand who the Chief Reconciler is, and will live in harmony with God and with their fellow man."],
  objectives:["Define reconciliation","Explain the concept of reconciliation","Identify the Chief Reconciler and the work done to reconcile man to God","Outline some basic religious and moral teachings on reconciliation","Explain how man is reconciled to his fellow man"],
  note:"Grade 7 introduced reconciliation; Grade 8 asks <b>who accomplishes it</b>. In Christian teaching God is the author of reconciliation and Christ is named the reconciler who reconciles man to God (2 Corinthians 5:18–20; Romans 5:10; Hebrews 2:17). In Islamic teaching God Himself is <b>Al-Ghaffar</b>, the All-Forgiving, to whom the penitent returns directly. In both, the one reconciled to God is then obliged to be reconciled with his fellow man.",
  focus:["Definition and concept of reconciliation","Who is the Chief Reconciler","How man is reconciled to God","How man is reconciled to his fellow man","Fundamental steps to reconciliation","Living in harmony"],
  terms:[
    {t:"reconciliation", d:"the restoring of a broken relationship to peace", x:"Reconciliation is the theme of this unit."},
    {t:"reconciler", d:"the one who brings estranged parties back together", x:"Christian teaching names Christ the reconciler."},
    {t:"mediator", d:"one who stands between two parties to bring agreement", x:"Hebrews speaks of a mediator."},
    {t:"Al-Ghaffar", d:"a name of God in Islam meaning the All-Forgiving", x:"The penitent turns to Al-Ghaffar."},
    {t:"tawbah", d:"sincere repentance and turning back to God in Islamic teaching", x:"Tawbah restores the relationship with God."},
    {t:"atonement", d:"the making right of a wrong so that fellowship is restored", x:"Atonement removes the barrier."},
    {t:"estrangement", d:"the state of being separated by hostility", x:"Sin caused estrangement from God."},
    {t:"harmony", d:"peaceful agreement between persons", x:"They now live in harmony."},
    {t:"pardon", d:"the release of a person from the penalty of a wrong", x:"Pardon follows sincere repentance."},
    {t:"mercy", d:"compassion shown where punishment could be given", x:"Both faiths magnify the mercy of God."},
    {t:"penitence", d:"sorrow for having done wrong", x:"Penitence precedes pardon."},
    {t:"restoration", d:"the bringing back of what was lost or broken", x:"Restoration completes reconciliation."}
  ],
  facts:[
    {q:"Define reconciliation.", a:"The restoring of a broken relationship so that the parties are at peace and in fellowship again."},
    {q:"Whom does Christian teaching name as the Chief Reconciler, and on what basis?", a:"Christ, who is said to reconcile man to God; 2 Corinthians 5:18–20 speaks of the ministry of reconciliation and Romans 5:10 of being reconciled to God."},
    {q:"How does Islamic teaching describe God in relation to the penitent?", a:"As Al-Ghaffar, the All-Forgiving, and Ar-Rahman, the Most Merciful, to whom a person turns directly in sincere repentance, tawbah."},
    {q:"How is man reconciled to God?", a:"By acknowledging the wrong, repenting sincerely, seeking God's forgiveness and turning to live according to His commandments."},
    {q:"How is man reconciled to his fellow man?", a:"By admitting the wrong, apologising sincerely, making amends where possible, forgiving in turn, and restoring the relationship."},
    {q:"State the fundamental steps to reconciliation.", a:"Acknowledgement of the wrong, genuine repentance, request for forgiveness, restitution where possible, and restoration of the relationship."},
    {q:"What does Matthew 5:24 require before an offering is made?", a:"That the worshipper first go and be reconciled with his brother, and then come and offer his gift."},
    {q:"Why does reconciliation with God oblige reconciliation with people?", a:"Because one who has received mercy is required to show it; both faiths link the forgiveness received from God with the forgiveness owed to others."}
  ],
  tf:[
    {s:"Christian teaching names Christ as the one who reconciles man to God.", a:"true", why:"2 Corinthians 5:18–20 and Romans 5:10 present him in that role."},
    {s:"In Islamic teaching a person turns directly to God in repentance.", a:"true", why:"Tawbah is the sincere turning back to God, who is Al-Ghaffar, the All-Forgiving."},
    {s:"Reconciliation with God removes any duty to be reconciled with people.", a:"false", why:"Both faiths link the two; Matthew 5:24 requires reconciliation with a brother before worship."},
    {s:"Restitution has no place in reconciliation.", a:"false", why:"Making amends where possible shows that repentance is genuine."},
    {s:"Mercy means compassion shown where punishment could justly be given.", a:"true", why:"That is precisely what distinguishes mercy from mere fairness."},
    {s:"A person must earn forgiveness completely before it can be given.", a:"false", why:"Both traditions teach that forgiveness is granted in mercy to the penitent, not earned as a wage."}
  ],
  apply:[
    {q:"A learner says he cannot be forgiven because his wrong was too great. How would you counsel him?", a:"Both faiths teach that God's mercy exceeds any wrong for the one who sincerely repents; he should confess, repent, make what amends he can, and accept the forgiveness offered."},
    {q:"Why is it inconsistent to pray for God's forgiveness while refusing to forgive a classmate?", a:"Because both traditions tie the mercy we receive to the mercy we show; refusing to forgive contradicts the mercy we are asking for."},
    {q:"Two families have been reconciled formally but still avoid each other. Is the reconciliation complete?", a:"Not yet; formal settlement is only a step. Restoration means the relationship actually resumes — greeting, trading, attending each other's occasions."},
    {q:"Identify the reconciler in a class conflict and describe what he or she does.", a:"A respected classmate or the teacher who is trusted by both, who hears each side, helps each see the other's grievance, and guides them to apology and agreement."},
    {q:"How can a person make restitution when the harm cannot be undone?", a:"By doing what good is still possible — a public apology, service to the injured party, or help to others in the same position — together with a changed life."}
  ],
  sort:{ title:"Reconciliation in Grade 8", groups:[
    {name:"Steps of reconciliation", items:["Acknowledge the wrong","Repent sincerely","Ask forgiveness","Make restitution"]},
    {name:"Names and roles", items:["Reconciler","Mediator","Al-Ghaffar","Peacemaker"]},
    {name:"Barriers to reconciliation", items:["Pride","Self-justification","Revenge","Despair"]},
    {name:"Marks of true restoration", items:["Renewed greeting","Restored trust","Shared occasions","Peace of conscience"]}
  ]},
  compare:{ title:"How the traditions understand reconciliation with God", caption:"Complete the table of teaching in each faith.",
    items:[
      {p:"Christian teaching", f:"God reconciles the world to Himself through Christ, named the reconciler; believers receive a ministry of reconciliation towards others."},
      {p:"Islamic teaching", f:"The penitent turns directly to God, who is Al-Ghaffar the All-Forgiving; sincere tawbah restores the relationship."},
      {p:"African Traditional practice", f:"Elders and priests mediate between the offender, the community and the ancestors, with confession, sacrifice and restitution."},
      {p:"Shared requirement", f:"Sincere acknowledgement of wrong — no tradition treats reconciliation as automatic or cost-free."},
      {p:"Shared consequence", f:"The one reconciled to God must be reconciled with his neighbour."},
      {p:"Shared emphasis", f:"The mercy of God is greater than the wrong, and the penitent is to be restored, not despised."}
    ]},
  casestudy:{ title:"The letter after twelve years",
    text:"During the war, a young man took part in the looting of a shop belonging to a family in his own town. The family fled and never returned. Twelve years later, now a grown man with children of his own, he could not put the memory aside. He traced the family through a church network and wrote to them: he named exactly what he had taken, said plainly that it was wrong, asked their pardon, and enclosed what money he could as a first repayment. He expected no reply. Six months later the shop owner's son wrote back. He said the money mattered far less than the letter, that he had waited twelve years for someone to admit it, and that he forgave him. The two men have since met twice.",
    questions:[
      {q:"Which steps of reconciliation did the young man carry out?", a:"He acknowledged the wrong specifically, expressed repentance, asked pardon, and made restitution as far as he was able."},
      {q:"Why did he name exactly what he had taken rather than apologising in general?", a:"A specific admission shows genuine repentance and treats the injured party seriously; a vague apology can avoid real responsibility."},
      {q:"Why did the son say the money mattered less than the letter?", a:"Because what he had waited for was acknowledgement — the recognition that a wrong had been done to his family."},
      {q:"What does this case show about the timing of reconciliation?", a:"That it is never too late; even after twelve years, honest admission can restore a relationship and bring peace to both parties."}
    ]},
  project:{ title:"Reconciliation essay and role play",
    brief:"Write on reconciliation and demonstrate it in role play.",
    steps:["Write a two-page essay on the definition and process of reconciliation.","Explain in the essay how man is reconciled to God and how man is reconciled to man.","Identify the Chief Reconciler in Christian teaching and God's forgiveness in Islamic teaching.","In a role play, identify and act the reconciler in a class conflict.","Present the essay and the role play to the class."],
    criteria:["Two-page essay clearly organised","Both directions of reconciliation explained","Both traditions represented accurately","A convincing role play with an identified reconciler","Respectful treatment of both faiths"]},
  activities:["Write a two-page essay on the definition and process of reconciliation","In class discussion, indicate how man is reconciled to God and to each other","Identify the Chief Reconciler and the work done to reconcile man to God","In a role play, identify the reconciler in a class conflict"],
  materials:["The Holy Bible — Hebrews 2:17; Romans 5:10; Matthew 5:24; 2 Corinthians 5:18, 19, 20","The Holy Qur'an","Literature on peace and conflict management","Other religious and moral literature","Posters and markers"],
  assessment:["Essay writing","Oral presentation","Research","Role play","Class discussion"]
},
{
  grade:8, period:"V", sem:"Two", icon:"🌱",
  title:"Stewardship",
  subtitle:"Stewardship of the family, of time, of talents and of the physical environment",
  outcomes:["Learners understand the meaning of stewardship and know their personal responsibilities as good stewards at home, at school, at the place of worship, in the community and in the nation, as assigned by God."],
  objectives:["Comprehend the full meaning of stewardship","Apply the meaning of stewardship of man to his family","Apply stewardship to his time","Apply stewardship to his talents and expertise","Apply stewardship to the physical environment"],
  note:"A <b>steward</b> is one who manages what belongs to another and must give account for it. Genesis 1:26–28 and 2:15 present man as placed in the garden <b>to tend and keep it</b> — not as owner but as caretaker. 1 Peter 4:10 tells each to use the gift received in service to others. Islamic teaching speaks of man as <b>khalifah</b>, God's trustee on the earth, answerable for its care.",
  focus:["The meaning of stewardship","Stewardship of the family","Stewardship of time","Stewardship of talents and expertise","Stewardship of the physical environment","Accountability to God the Creator"],
  terms:[
    {t:"stewardship", d:"the careful management of what has been entrusted to one by another", x:"Stewardship implies accountability."},
    {t:"steward", d:"one who manages property or affairs on behalf of the owner", x:"A steward must give account."},
    {t:"trust", d:"something committed to a person's care", x:"The earth is held in trust."},
    {t:"khalifah", d:"in Islamic teaching, man as God's trustee on the earth", x:"As khalifah, man answers for the earth."},
    {t:"accountability", d:"the duty to give account for what one has done", x:"Accountability follows every trust."},
    {t:"talent", d:"a natural ability or gift", x:"Each person is given some talent."},
    {t:"expertise", d:"special skill gained by training and practice", x:"His expertise serves the community."},
    {t:"resource", d:"something available to be used", x:"Time is a resource that cannot be recovered."},
    {t:"conservation", d:"the protection and wise use of natural resources", x:"Conservation is a form of stewardship."},
    {t:"environment", d:"the natural surroundings in which we live", x:"The environment is entrusted to our care."},
    {t:"waste", d:"the careless use or loss of something valuable", x:"Waste is poor stewardship."},
    {t:"provision", d:"what is supplied to meet a need", x:"Parents make provision for their children."},
    {t:"diligence", d:"careful and persistent effort", x:"Diligence marks a good steward."},
    {t:"generosity", d:"readiness to give to others", x:"Generosity uses one's gift for others."}
  ],
  facts:[
    {q:"Define stewardship.", a:"The careful management of what has been entrusted to one by another, together with the duty to give account for it."},
    {q:"What does Genesis 2:15 say about man's place in the garden?", a:"That man was put in the garden to tend and keep it — placed as caretaker, not as owner."},
    {q:"What does 1 Peter 4:10 teach about talents?", a:"That each should use the gift he has received to serve others, as a good steward of God's grace."},
    {q:"What is meant by khalifah in Islamic teaching?", a:"That man is God's trustee or vicegerent on the earth, entrusted with its care and answerable for it."},
    {q:"State three ways a person exercises stewardship of the family.", a:"By providing for its needs, by caring for and teaching the children, and by protecting the family's good name and unity."},
    {q:"Why is time described as a resource requiring stewardship?", a:"Because it is limited and cannot be recovered once spent; wasting it wastes an irreplaceable gift."},
    {q:"State three ways of exercising stewardship of the environment.", a:"Avoiding pollution of streams and land, planting and protecting trees, and using water, fuel and soil carefully so that they last."},
    {q:"How does a learner exercise stewardship of talents?", a:"By developing them through study and practice, and by using them in service to family, school and community rather than for self alone."},
    {q:"To whom is the steward finally accountable?", a:"To God the Creator, who entrusted the family, time, talents and the earth to his care."}
  ],
  tf:[
    {s:"A steward owns what he manages.", a:"false", why:"A steward manages what belongs to another and must give account for it."},
    {s:"Genesis presents man as placed in the garden to tend and keep it.", a:"true", why:"Genesis 2:15 sets out that caretaking role."},
    {s:"Time is a resource that can be recovered once wasted.", a:"false", why:"Time is irrecoverable, which is why its stewardship matters."},
    {s:"Caring for the environment is a religious duty, not merely a scientific one.", a:"true", why:"Both traditions present the earth as entrusted to man's care with accountability to God."},
    {s:"Talents are given to be used for the benefit of others.", a:"true", why:"1 Peter 4:10 directs each to use his gift in service to others."},
    {s:"Stewardship applies only at the place of worship.", a:"false", why:"It applies at home, at school, at the place of worship, in the community and in the nation."}
  ],
  apply:[
    {q:"A learner spends every evening idle and then complains he has no time to study. What stewardship is he failing?", a:"Stewardship of time — an irrecoverable resource entrusted to him; he should plan the evening so that study, chores and rest each have their place."},
    {q:"A company pollutes a river the town drinks from. Argue against it on stewardship grounds.", a:"The river is part of the creation entrusted to human care; polluting it harms the health of neighbours and destroys a resource held in trust for the next generation."},
    {q:"A boy has a gift for teaching but says he will use it only if paid well. Comment.", a:"A talent is given to be used in service; while a worker deserves fair wages, refusing to use a gift except for high pay treats a trust as private property."},
    {q:"How can a school class practise stewardship of its own environment?", a:"By keeping the compound clean, planting and watering trees, repairing rather than breaking furniture, and not wasting water or paper."},
    {q:"A father earns well but spends his income on himself while his children lack books. Which stewardship is he failing?", a:"Stewardship of the family and of his resources; provision for the children's needs and education comes before personal indulgence."}
  ],
  sort:{ title:"Stewardship", groups:[
    {name:"Areas of stewardship", items:["The family","Time","Talents and expertise","The environment"]},
    {name:"Marks of a good steward", items:["Diligence","Accountability","Generosity","Care for what is entrusted"]},
    {name:"Poor stewardship", items:["Waste","Neglect","Pollution","Idleness"]},
    {name:"Environmental stewardship", items:["Planting trees","Avoiding pollution","Conserving water","Careful use of soil"]}
  ]},
  compare:{ title:"Four areas of stewardship", caption:"Complete the table of each area and what good stewardship requires.",
    items:[
      {p:"Stewardship of the family", f:"Providing for needs, teaching and caring for children, protecting unity and the family's good name."},
      {p:"Stewardship of time", f:"Planning the day, avoiding idleness, giving time to study, work, worship, family and rest in due measure."},
      {p:"Stewardship of talents", f:"Developing gifts by study and practice, and using them in service to others rather than for self alone."},
      {p:"Stewardship of the environment", f:"Avoiding pollution, planting and protecting trees, conserving water and soil for those who come after."},
      {p:"Stewardship of resources", f:"Spending honestly and without waste, giving to the needy, and providing for dependants first."},
      {p:"Accountability", f:"All stewardship is exercised on behalf of God the Creator, to whom account must finally be given."}
    ]},
  casestudy:{ title:"The school woodlot",
    text:"A junior high school in Bong County had a bare, eroded hillside behind its buildings. Every rainy season, soil washed down and flooded two classrooms. The agriculture teacher proposed a woodlot. Each Grade 8 learner was made responsible for two seedlings — planting, watering, weeding and protecting them from goats. Each tree carried a small tag with the learner's name. Some seedlings died and had to be replaced. Five years later the hillside carries more than three hundred trees, the classrooms no longer flood, and the school sells poles from thinning the woodlot to buy chalk and exercise books. Learners who have long since left still come back to look at their trees.",
    questions:[
      {q:"Which area of stewardship does the woodlot chiefly illustrate?", a:"Stewardship of the physical environment — caring for the land entrusted to them."},
      {q:"Why was each learner made responsible for named trees?", a:"To create personal accountability; a general duty owned by everybody is usually discharged by nobody."},
      {q:"State two practical benefits the school gained.", a:"The classrooms no longer flood because erosion was checked, and poles from thinning are sold to buy chalk and exercise books."},
      {q:"What does the return of former learners to see their trees suggest about stewardship?", a:"That good stewardship creates lasting attachment and pride, and that its fruits outlive the steward's own time in a place."}
    ]},
  project:{ title:"Stewardship audit",
    brief:"Research and report on your own stewardship in each area.",
    steps:["Research the religious and moral basis of stewardship towards God the Creator.","Write a definition of stewardship and state its purpose.","Audit your own stewardship of family, time, talents and environment — one honest paragraph each.","Identify the weakest area and set two practical changes.","Carry out one visible act of environmental stewardship and report it."],
    criteria:["Religious basis correctly researched","Clear definition and purpose","Four honest self-audit paragraphs","Two specific, realistic changes","A genuine act of stewardship carried out"]},
  activities:["Research the religious and moral stewardship of man to God the Creator, his family, his time, his talents and the physical environment","Do a written home assignment defining stewardship and its purpose, for class discussion","Undertake a practical stewardship activity in the school compound","Class discussion on accountability"],
  materials:["The Holy Bible — Genesis 1:26–28; Genesis 2:15, 19, 20; Luke 12:24; Titus 1:7; 1 Peter 4:10","The Holy Qur'an","Religious and moral literature","Posters"],
  assessment:["Written home assignment","Research","Oral presentation","Class discussion","Practical stewardship project"]
},
{
  grade:8, period:"VI", sem:"Two", icon:"📖",
  title:"Religious Practices and their Moral Implications",
  subtitle:"Sacred scriptures, oral tradition, and the moral teachings of the three faiths",
  outcomes:["Learners know the moral teachings of Christianity, Islam and the oral traditions upon society, and are able to live up to the principles learnt."],
  objectives:["Observe some religious practices and explain their moral implications","Define sacred scriptures and oral tradition","Name some moral teachings of the Christian scriptures","Name some moral teachings of the Islamic scriptures","Name some moral teachings of the oral traditions — myths, beliefs and teachings","Debate similarities and differences among the three faiths"],
  note:"<b>Sacred scriptures</b> are the written texts a faith holds to be revealed — the Holy Bible and the Holy Qur'an. <b>Oral tradition</b> is teaching handed down by word of mouth through myths, proverbs, beliefs and the instruction of elders. Both carry <b>moral implications</b>: they shape what a community treats as right, and their practices — fasting, almsgiving, honouring elders — train character.",
  focus:["Sacred scriptures defined","Oral tradition defined","Moral teachings of the Christian scriptures","Moral teachings of the Holy Qur'an","Moral teachings of oral tradition — myths, beliefs, teachings","Moral implications of religious practices","Comparing and debating the three faiths"],
  terms:[
    {t:"sacred scripture", d:"a written text a faith holds to be revealed by God", x:"The Holy Bible is a sacred scripture."},
    {t:"oral tradition", d:"teaching handed down by word of mouth across generations", x:"Oral tradition preserves the elders' wisdom."},
    {t:"myth", d:"a traditional story conveying a belief or explaining an origin", x:"A myth may carry a moral lesson."},
    {t:"proverb", d:"a short traditional saying that states a truth", x:"Proverbs teach morals concisely."},
    {t:"revelation", d:"truth believed to be disclosed by God", x:"Both faiths speak of revelation."},
    {t:"moral implication", d:"what a teaching or practice requires in conduct", x:"Fasting has the moral implication of self-denial."},
    {t:"fasting", d:"abstaining from food for a religious purpose", x:"Fasting trains self-control."},
    {t:"almsgiving", d:"giving to the poor as a religious duty", x:"Almsgiving expresses compassion."},
    {t:"pilgrimage", d:"a journey to a holy place", x:"The pilgrimage is a duty in Islam."},
    {t:"sabbath", d:"the appointed day of rest and worship", x:"The sabbath sets time apart for God."},
    {t:"taboo", d:"an act forbidden by custom or belief", x:"A taboo restrains conduct in the community."},
    {t:"libation", d:"the pouring out of drink as an offering", x:"Libation is poured in some traditional rites."},
    {t:"initiation", d:"the ceremony admitting a person to adult standing in a tradition", x:"Initiation transmits community values."},
    {t:"tolerance", d:"acceptance of those whose beliefs differ", x:"Tolerance is required in a plural society."}
  ],
  facts:[
    {q:"Define sacred scripture and give two examples.", a:"A written text a faith holds to be revealed by God; examples are the Holy Bible and the Holy Qur'an."},
    {q:"Define oral tradition and name three forms it takes.", a:"Teaching handed down by word of mouth; it takes the form of myths, proverbs and the instruction of elders (also songs and initiation teaching)."},
    {q:"Name four moral teachings of the Christian scriptures.", a:"Love God and your neighbour; do not steal, kill or bear false witness; forgive as you have been forgiven; and care for the poor, the widow and the orphan."},
    {q:"Name four moral teachings of the Holy Qur'an.", a:"Worship God alone; be just and truthful; give zakat to the poor; and honour parents and protect orphans."},
    {q:"Name four moral teachings carried in African oral tradition.", a:"Respect for elders; hospitality to the stranger; the duty of the individual to the community; and truthfulness, with taboos restraining harmful conduct."},
    {q:"What is a moral implication of fasting?", a:"It trains self-denial and self-control, and it creates sympathy with the hungry, which should issue in charity."},
    {q:"What is a moral implication of almsgiving?", a:"It requires the believer to treat wealth as held for the good of others, and it binds the community together across differences of means."},
    {q:"State two moral values that all three traditions share.", a:"Honesty and truthfulness, and care for the poor and vulnerable (also respect for parents and elders)."},
    {q:"Why is it important to study the moral teachings of a faith other than one's own?", a:"Because Liberia is a multi-religious society; understanding replaces suspicion, and shared moral ground makes cooperation and peace possible."}
  ],
  tf:[
    {s:"Oral tradition is teaching handed down by word of mouth.", a:"true", why:"It is carried in myths, proverbs, songs and the instruction of elders."},
    {s:"Only written scriptures can carry moral teaching.", a:"false", why:"Oral tradition carries moral teaching effectively through proverbs, myths and elders' instruction."},
    {s:"Care for the poor is taught in Christianity, Islam and African tradition alike.", a:"true", why:"All three make provision for the needy a moral duty."},
    {s:"Fasting has no implication for how a believer treats others.", a:"false", why:"It creates sympathy with the hungry and should issue in charity."},
    {s:"Studying another faith's moral teaching means abandoning one's own.", a:"false", why:"Understanding another tradition is a matter of knowledge and respect, not conversion."},
    {s:"Taboos in traditional societies serve to restrain harmful conduct.", a:"true", why:"They forbid acts held to damage the person or the community."}
  ],
  apply:[
    {q:"A learner claims his religion alone teaches honesty. How would you correct him respectfully?", a:"Show that honesty is taught in the Christian scriptures, in the Holy Qur'an and in traditional proverbs alike; the shared ground is wide, and claiming a monopoly on virtue is both untrue and divisive."},
    {q:"How might the practice of almsgiving change how a wealthy person behaves in business?", a:"It would require honest dealing and fair wages, treating wealth as held partly for others' benefit rather than purely for private accumulation."},
    {q:"A traditional proverb says 'the child who is not embraced by the village will burn it down to feel its warmth.' What is its moral teaching?", a:"That a community which neglects and excludes its young invites destruction; belonging and care are the community's own protection."},
    {q:"Your school has learners of three faiths. Suggest one practice that respects all.", a:"Hold a shared assembly on values common to all — honesty, respect, care for the needy — and allow each group its own time and space for its distinct observances."},
    {q:"Why should a learner be cautious about a traditional practice that harms someone?", a:"Because a custom is not right merely by being old; practices must be weighed against the moral principles of justice and care for the person, which all three traditions uphold."}
  ],
  sort:{ title:"Religious practices and teachings", groups:[
    {name:"Sacred scriptures", items:["The Holy Bible","The Holy Qur'an"]},
    {name:"Forms of oral tradition", items:["Myths","Proverbs","Elders' instruction","Songs"]},
    {name:"Religious practices", items:["Fasting","Almsgiving","Pilgrimage","Prayer"]},
    {name:"Shared moral values", items:["Honesty","Care for the poor","Respect for elders","Hospitality"]}
  ]},
  compare:{ title:"Moral teaching in the three traditions", caption:"Complete the table of source and characteristic teaching.",
    items:[
      {p:"Christian scriptures", f:"The Holy Bible: love of God and neighbour, the commandments, forgiveness, and care for the widow, orphan and stranger."},
      {p:"Islamic scriptures", f:"The Holy Qur'an: worship of God alone, justice and truthfulness, zakat for the poor, and honour to parents."},
      {p:"African oral tradition", f:"Myths, proverbs and elders' teaching: respect for elders, hospitality, duty to the community, and taboos restraining harm."},
      {p:"How each is transmitted", f:"The first two chiefly by written text read and expounded; the third chiefly by speech, ceremony and example."},
      {p:"Shared moral ground", f:"Honesty, care for the vulnerable, respect for parents and elders, and the duty of the individual to the community."},
      {p:"Moral implication of practice", f:"Fasting trains self-denial, almsgiving binds rich to poor, and pilgrimage and festival renew commitment."}
    ]},
  casestudy:{ title:"The shared assembly",
    text:"A junior high school in Monrovia had learners of three backgrounds: Christian, Muslim and families who kept traditional observances. For years the morning assembly had been entirely Christian, and Muslim learners stood silent at the back. Some parents withdrew their children. A new principal formed a committee of learners and parents from all three backgrounds. They agreed that the daily assembly would centre on values held in common — honesty, respect, care for others — with a rotating reading from the Holy Bible, the Holy Qur'an or a traditional proverb, introduced with respect and never mocked. Friday afternoons and Sunday arrangements were left free for each group's own observance. Attendance rose, and a debate club grew out of the committee.",
    questions:[
      {q:"What was the problem with the original assembly?", a:"It was entirely of one faith, so learners of other faiths were excluded and stood silent; some parents withdrew their children."},
      {q:"How did the school find common ground?", a:"By centring the assembly on values shared by all three traditions — honesty, respect and care for others."},
      {q:"How were the distinct traditions still respected?", a:"By a rotating reading from each source, presented respectfully, and by leaving time free for each group's own observance."},
      {q:"What does this show about religious practice in a plural society?", a:"That shared moral ground allows a community to worship and learn together without any group having to abandon or hide its own faith."}
    ]},
  project:{ title:"Comparative moral teaching study",
    brief:"Research and debate the moral teachings of the three traditions.",
    steps:["Name and record some moral teachings of the Holy Bible, of the Holy Qur'an, and of oral tradition.","Research and give a class presentation on the differences among the Christian faith, the Islamic faith and traditional beliefs.","Identify four moral values that all three hold in common.","Prepare for a class debate on one practice where the traditions differ.","Debate the question with respect, and record what you learned from the other side."],
    criteria:["Teachings accurately recorded from all three","A researched presentation","Four genuine shared values","A debate conducted with respect","Honest record of what was learned from others"]},
  activities:["Name some moral teachings of the Holy Bible, the Holy Qur'an and the oral traditions","Research and give a class presentation on the differences of the Christian faith, Islamic faith and traditional beliefs","Debate similarities and differences among the three faiths on selected practices","Discuss the moral implications of religious practices"],
  materials:["The Holy Bible — Exodus 3:3–6; 1 Timothy 2:11, 12","The Holy Qur'an","Books of traditional proverbs and oral literature","Secondary religious literature"],
  assessment:["Research","Class presentation","Debate","Oral and written quizzes","Class discussion"]
},

/* ================================ GRADE 9 ================================ */
{
  grade:9, period:"I", sem:"One", icon:"👳",
  title:"Religious Personalities and their Moral Teachings",
  subtitle:"The Patriarchs, Jesus Christ, the Prophet Muhammad, the Caliphs and traditional religious leaders",
  outcomes:["Learners know the various leaders of religions and are capable of explaining the moral and spiritual teachings of Jesus Christ, the Prophet Muhammad and African Traditional religious leaders."],
  objectives:["Explain some of the teachings of the Patriarchs, the Caliphs of Islam and traditional religious leaders","Compare and contrast the moral teachings of Jesus Christ and the Prophet Muhammad","Compare and contrast the moral teachings of the Patriarchs and African Traditional religious leaders","Define religion and its impact, negative or positive, on mankind"],
  note:"The syllabus asks learners to study three streams side by side. From <b>Jesus Christ</b>: the <b>Parables</b> of the Kingdom, the Sower and the Prodigal Son, and the <b>Sermon on the Mount</b>. From the <b>Prophet Muhammad</b>: his <b>commandments from the Hadith</b> and the <b>Sunna</b>. From <b>African Traditional Religion</b>: the teaching of priests and elders. The task is to <b>compare and contrast</b> with respect.",
  focus:["Definition of religion and its impact on mankind","The Patriarchs and their teachings","Jesus Christ: parables and the Sermon on the Mount","The Prophet Muhammad: the Hadith and the Sunna","The Caliphs of Islam","African Traditional religious leaders","Comparing the moral teachings"],
  terms:[
    {t:"patriarch", d:"a founding father of a people or faith, such as Abraham", x:"Abraham is called a patriarch."},
    {t:"prophet", d:"one who speaks a message from God", x:"A prophet calls the people back to God."},
    {t:"parable", d:"a short story told to convey a moral or spiritual lesson", x:"The Prodigal Son is a parable."},
    {t:"Sermon on the Mount", d:"the collected teaching of Jesus on the character of the Kingdom", x:"The Sermon on the Mount teaches mercy and peacemaking."},
    {t:"Hadith", d:"the recorded sayings and commands of the Prophet Muhammad", x:"The Hadith guides Muslim conduct."},
    {t:"Sunna", d:"the practice and example of the Prophet Muhammad", x:"The Sunna is a model for living."},
    {t:"Caliph", d:"a successor who led the Muslim community after the Prophet", x:"The early Caliphs governed the community."},
    {t:"traditional priest", d:"a religious leader in African Traditional Religion", x:"The traditional priest offers sacrifice."},
    {t:"elder", d:"a senior person holding authority in the community", x:"Elders transmit moral teaching."},
    {t:"moral teaching", d:"instruction about right and wrong conduct", x:"Each leader left a body of moral teaching."},
    {t:"compassion", d:"sympathy that moves one to help", x:"Compassion runs through all three streams."},
    {t:"justice", d:"giving each person what is rightly due", x:"Justice is enjoined by every tradition."},
    {t:"humility", d:"a modest estimate of oneself", x:"Humility is praised by all three."},
    {t:"charity", d:"generous giving to those in need", x:"Charity is a duty in each tradition."}
  ],
  facts:[
    {q:"Define religion and state one positive and one negative impact it can have on mankind.", a:"Belief in and reverence for God expressed in worship and conduct. Positively it teaches morality, builds community and comforts the suffering; negatively, when misused, it can be turned to division, intolerance and conflict."},
    {q:"Who were the Patriarchs and name two.", a:"The founding fathers of the faith of Israel — for example Abraham and Jacob (also Isaac and Joseph)."},
    {q:"Name three parables of Jesus Christ named in the syllabus.", a:"The Parable of the Kingdom, the Parable of the Sower and the Parable of the Prodigal Son."},
    {q:"What are the main moral themes of the Sermon on the Mount?", a:"Mercy, purity of heart, peacemaking, humility, forgiveness of enemies, sincerity in giving and prayer, and doing to others as you would have them do to you."},
    {q:"What is the Hadith and what is the Sunna?", a:"The Hadith is the collected sayings and commands of the Prophet Muhammad; the Sunna is his practice and example, taken as a model for living."},
    {q:"Who were the Caliphs of Islam?", a:"The successors who led the Muslim community after the Prophet Muhammad, the earliest of whom are remembered for justice, simplicity and care of the poor."},
    {q:"Name three moral teachings of African Traditional religious leaders.", a:"Respect for elders and ancestors, hospitality and duty to the community, and truthfulness enforced by taboo and by the judgement of elders."},
    {q:"Name three moral values taught by Jesus Christ and the Prophet Muhammad alike.", a:"Care for the poor and the orphan, honesty and truthfulness, and mercy or forgiveness towards others."},
    {q:"What does the Parable of the Prodigal Son teach morally?", a:"That genuine repentance is met with mercy and restoration, and that the one who has been forgiven should not resent mercy shown to another."}
  ],
  tf:[
    {s:"The Hadith records the sayings and commands of the Prophet Muhammad.", a:"true", why:"The Sunna is his practice; the Hadith records his sayings."},
    {s:"A parable is a short story conveying a moral or spiritual lesson.", a:"true", why:"Jesus taught extensively in parables such as the Sower and the Prodigal Son."},
    {s:"Care for the poor is taught only in Christianity.", a:"false", why:"It is enjoined in Islam through zakat and in African tradition through hospitality and communal duty."},
    {s:"African Traditional Religion has no moral teachers.", a:"false", why:"Priests and elders transmit substantial moral teaching through instruction, proverb and taboo."},
    {s:"Religion has only ever had a positive impact on mankind.", a:"false", why:"The syllabus asks learners to consider its impact 'negatively or positively'; misused, it has served division and conflict."},
    {s:"The early Caliphs are remembered for justice and care of the poor.", a:"true", why:"Their simplicity and administration of justice are held up as models."}
  ],
  apply:[
    {q:"How might the Parable of the Sower be applied to a learner's study habits?", a:"The seed falls on different ground: teaching received carelessly, or choked by other concerns, bears nothing; received attentively and persevered with, it bears fruit."},
    {q:"A learner says the Prophet Muhammad and Jesus Christ taught nothing in common. How would you answer?", a:"Both taught care for the orphan and the poor, honesty, mercy, humility before God and the duty of the strong to the weak — the shared ground is substantial, whatever the differences."},
    {q:"How can religion be misused to divide people, and how is that guarded against?", a:"By claiming exclusive virtue and treating others as enemies; it is guarded against by teaching the shared moral ground, by honest study of other faiths, and by leaders who model respect."},
    {q:"What does the Sermon on the Mount require of someone who has been wronged?", a:"To forgive rather than retaliate, to seek peace, and to pray even for those who mistreat him."},
    {q:"Name one moral teaching from a traditional elder in your own community and explain it.", a:"For example, that a stranger must be fed before he is questioned — teaching that hospitality and human dignity come before suspicion."}
  ],
  sort:{ title:"Religious personalities", groups:[
    {name:"Christian figures and texts", items:["The Patriarchs","Jesus Christ","The Parables","Sermon on the Mount"]},
    {name:"Islamic figures and texts", items:["The Prophet Muhammad","The Hadith","The Sunna","The Caliphs"]},
    {name:"African Traditional", items:["Traditional priests","Elders","Proverbs","Taboos"]},
    {name:"Shared moral values", items:["Care for the poor","Honesty","Mercy","Humility"]}
  ]},
  compare:{ title:"Comparing the moral teachings", caption:"Complete the table comparing the three streams of teaching.",
    items:[
      {p:"Jesus Christ", f:"Taught in parables and the Sermon on the Mount: love of God and neighbour, mercy, forgiveness of enemies, purity of heart and peacemaking."},
      {p:"The Prophet Muhammad", f:"Taught through the Hadith and modelled in the Sunna: submission to God, justice, truthfulness, zakat for the poor and protection of orphans."},
      {p:"The Patriarchs", f:"Taught by example and covenant: faith and obedience to God, hospitality to the stranger, and responsibility for family and descendants."},
      {p:"Traditional religious leaders", f:"Taught by proverb, ceremony and taboo: respect for elders and ancestors, hospitality, communal duty and truthfulness."},
      {p:"Points of agreement", f:"All enjoin care for the poor and orphan, honesty, humility and mercy."},
      {p:"Points of difference", f:"They differ on the nature of God's final revelation, on ritual practice, and on the standing of their founding figures."}
    ]},
  casestudy:{ title:"The debate that changed a class",
    text:"A Grade 9 class was asked to prepare a debate: 'The moral teachings of Jesus Christ and the Prophet Muhammad have more in common than in difference.' The teacher deliberately assigned Christian learners to research the Hadith and the Sunna, and Muslim learners to research the parables and the Sermon on the Mount. Both groups complained at first. But when the debate came, something unexpected happened: each side argued the case with unusual care, because each had discovered teachings in the other tradition that they had not expected — commands on caring for orphans, on honest weights and measures, on forgiving an enemy. The motion carried. The teacher's point, she said afterwards, was not to settle theology but to end ignorance.",
    questions:[
      {q:"Why did the teacher assign each group the other faith's texts?", a:"So that each would study the other tradition directly rather than rely on assumption and hearsay."},
      {q:"What did the learners discover that surprised them?", a:"Substantial shared moral teaching — care for orphans, honest dealing and forgiveness of enemies — which they had not expected in the other tradition."},
      {q:"What did the teacher say her purpose was?", a:"Not to settle theological questions but to end ignorance about the other faith."},
      {q:"Why is this approach valuable in a multi-religious country like Liberia?", a:"Because suspicion feeds on ignorance; knowing what the other tradition actually teaches builds respect and makes cooperation and peace possible."}
    ]},
  project:{ title:"Comparative study of religious leaders",
    brief:"Research and compare the moral teachings of the great religious personalities.",
    steps:["Research and write a three-page essay on the Patriarchs, the Caliphs of Islam and traditional religious leaders.","Set out the moral teachings of Jesus Christ from the parables and the Sermon on the Mount.","Set out the moral teachings of the Prophet Muhammad from the Hadith and the Sunna.","Draw a table comparing and contrasting the three streams.","Work in groups to present your findings respectfully to the class."],
    criteria:["Three-page essay covering all three groups of leaders","Christian teaching accurately presented","Islamic teaching accurately presented","A genuine comparison table with both agreements and differences","Respectful treatment of every tradition"]},
  activities:["Research and write a three-page essay on the Patriarchs, the Caliphs of Islam and traditional religious leaders","Compare and contrast the moral teachings of Jesus Christ, the Prophet Muhammad and African Traditional religious leaders","Work in groups to develop and present findings","Class debate on shared and differing moral teachings"],
  materials:["The Holy Bible — the Parables and the Sermon on the Mount","The Holy Qur'an","Collections of the Hadith","Literature on African Traditional Religion","Religious reference materials"],
  assessment:["Three-page research essay","Group presentation","Comparison table","Class debate","Written quizzes and tests"]
},
{
  grade:9, period:"II", sem:"One", icon:"🤝",
  title:"Commitment to God",
  subtitle:"God's commitments to mankind, man's commitment to God, and God's messengers and promises",
  outcomes:["Learners understand God's commitments to man and man's commitment to God, and will live in accordance with the religious teachings given by the messengers of God."],
  objectives:["Define commitment","Explain some of God's commitments to mankind","Explain the Christian, Muslim and Traditionalist responses to God's promises","Name some messengers of God from the three religions","Give at least five of God's promises for the earth and for heaven"],
  note:"<b>Commitment</b> is a binding pledge that holds even when it is costly. Religious teaching describes it as <b>two-directional</b>: God's commitments to mankind — provision, protection, guidance and mercy — and man's commitment to God in worship, obedience and service. Genesis 8:20–22 and 9:2–17 record God's covenant with the earth; Matthew 6:26–30 speaks of His provision for His creatures.",
  focus:["The meaning of commitment","God's commitments to mankind","Man's commitment to God","God's messengers to mankind","God's promises for the earth","God's promises for heaven","Christian, Islamic and traditional responses"],
  terms:[
    {t:"commitment", d:"a binding pledge that holds even when costly", x:"Commitment is more than good intention."},
    {t:"covenant", d:"a solemn binding agreement, especially between God and man", x:"Genesis records God's covenant with Noah."},
    {t:"promise", d:"an assurance that something will be done", x:"The rainbow is a sign of a promise."},
    {t:"providence", d:"God's provision and care for His creation", x:"Providence feeds the birds of the air."},
    {t:"messenger", d:"one sent by God to deliver His word", x:"Prophets are messengers of God."},
    {t:"obedience", d:"doing what God commands", x:"Obedience expresses commitment."},
    {t:"devotion", d:"loving loyalty and dedication", x:"Devotion is shown in daily prayer."},
    {t:"faithfulness", d:"steady reliability in keeping a commitment", x:"God's faithfulness does not fail."},
    {t:"worship", d:"the reverence given to God", x:"Worship is a chief act of commitment."},
    {t:"sacrifice", d:"something valuable given up for a higher purpose", x:"Commitment often requires sacrifice."},
    {t:"perseverance", d:"continuing steadfastly despite difficulty", x:"Perseverance proves commitment genuine."},
    {t:"vow", d:"a solemn promise made to God", x:"A vow should not be made lightly."}
  ],
  facts:[
    {q:"Define commitment.", a:"A binding pledge or dedication that holds even when it becomes costly or difficult."},
    {q:"Name four of God's commitments to mankind.", a:"Provision for daily needs, protection, guidance through His messengers and His word, and mercy and forgiveness to the penitent."},
    {q:"What covenant is recorded in Genesis 9:2–17?", a:"God's covenant after the flood not to destroy the earth again by water, with the rainbow given as its sign."},
    {q:"What does Matthew 6:26–30 teach about God's provision?", a:"That God feeds the birds and clothes the grass, and cares far more for people, so they need not be anxious."},
    {q:"Name four ways man expresses commitment to God.", a:"Worship and prayer, obedience to His commandments, service to others in His name, and giving of one's resources."},
    {q:"Name messengers of God recognised in the three traditions.", a:"In Christianity, the prophets and apostles; in Islam, the prophets including Muhammad; and in African Traditional Religion, priests and diviners who convey messages to the community."},
    {q:"Give five of God's promises for the earth.", a:"Seedtime and harvest, day and night in their season, protection from destruction by flood, provision for living creatures, and peace to those who obey Him."},
    {q:"Give two of God's promises concerning heaven.", a:"Eternal life with God for the faithful, and the ending of sorrow, suffering and death."},
    {q:"How do the three traditions respond to God's promises?", a:"Christians by faith, worship and obedience to the teaching of Christ; Muslims by submission, the five pillars and obedience to the Qur'an; traditionalists by sacrifice, libation and obedience to the elders' teaching."}
  ],
  tf:[
    {s:"Commitment holds even when it becomes costly.", a:"true", why:"That is precisely what distinguishes a commitment from a mere intention."},
    {s:"The rainbow is given in Genesis as the sign of a covenant.", a:"true", why:"Genesis 9 records it as the sign of God's promise not to destroy the earth by flood again."},
    {s:"Commitment is one-directional: only man commits to God.", a:"false", why:"The syllabus treats God's commitments to mankind as well as man's commitment to God."},
    {s:"Worship is one way a person expresses commitment to God.", a:"true", why:"Worship, obedience, service and giving are all expressions of commitment."},
    {s:"A vow to God may be made carelessly and broken without consequence.", a:"false", why:"Religious teaching treats a vow as solemn and binding, not to be made lightly."},
    {s:"Only one religion recognises messengers sent by God.", a:"false", why:"Christianity, Islam and African Traditional Religion all recognise figures who convey God's word."}
  ],
  apply:[
    {q:"A learner promises God he will study hard if he passes, then forgets after the results. What is wrong?", a:"He treated a vow as a bargain and abandoned it when the pressure passed; commitment holds after the crisis, not only during it."},
    {q:"How does belief in God's provision affect how a person deals with anxiety about food and school fees?", a:"It does not remove the duty to work and plan, but it relieves crippling anxiety and encourages steady effort and trust rather than despair or dishonest shortcuts."},
    {q:"A young woman commits to caring for her elderly grandmother but finds it hard. What does commitment require?", a:"Perseverance — continuing the care despite the difficulty, while seeking help from family and community rather than abandoning the pledge."},
    {q:"How would you distinguish genuine commitment from religious display?", a:"Genuine commitment shows in consistency when no one is watching — honesty, kept promises and service — while display seeks to be seen and fades under cost."},
    {q:"Name one commitment you can make to God this term and how it will be visible.", a:"For example, honesty in examinations — visible in refusing to copy even when others do and when it costs marks."}
  ],
  sort:{ title:"Commitment to God", groups:[
    {name:"God's commitments to man", items:["Provision","Protection","Guidance","Mercy"]},
    {name:"Man's commitments to God", items:["Worship","Obedience","Service","Giving"]},
    {name:"God's promises for the earth", items:["Seedtime and harvest","Day and night","Provision for creatures","Peace to the obedient"]},
    {name:"Marks of genuine commitment", items:["Perseverance","Consistency","Sacrifice","Faithfulness"]}
  ]},
  compare:{ title:"Responses to God's promises in the three traditions", caption:"Complete the table of how each tradition responds.",
    items:[
      {p:"Christian response", f:"Faith in God's promises, worship, obedience to the teaching of Christ, and service to others in His name."},
      {p:"Muslim response", f:"Submission to God, the five pillars — declaration, prayer, zakat, fasting and pilgrimage — and obedience to the Qur'an."},
      {p:"Traditional response", f:"Sacrifice, libation and observance of the customs and taboos taught by elders and priests."},
      {p:"God's provision", f:"All three acknowledge God as the giver of rain, harvest, life and protection."},
      {p:"God's messengers", f:"Christianity: prophets and apostles; Islam: the prophets including Muhammad; tradition: priests and diviners."},
      {p:"Shared expectation", f:"All hold that God rewards faithfulness and calls the unfaithful to account."}
    ]},
  casestudy:{ title:"The teacher who stayed",
    text:"When the epidemic closed the schools, most teachers in a rural district left for the city. Mr. Gbatu stayed. He had committed himself, when he took the post, to see his Grade 9 class through to their examination. For seven months he walked to five villages in turn, teaching small groups under trees, marking exercise books by lamp at night, and carrying messages between families. He was not paid for most of that period. When the schools reopened, twenty-two of his twenty-six learners sat the examination and nineteen passed — the best result in the district. Asked why he had stayed, he said simply that he had given his word to the children, and a word given before God is not withdrawn when it becomes inconvenient.",
    questions:[
      {q:"What commitment had Mr. Gbatu made?", a:"To see his Grade 9 class through to their examination when he took the post."},
      {q:"What did keeping that commitment cost him?", a:"Seven months of unpaid work, walking to five villages, teaching outdoors and marking by lamplight."},
      {q:"What reason did he give for staying?", a:"That he had given his word to the children, and a word given before God is not withdrawn when it becomes inconvenient."},
      {q:"What does this illustrate about the nature of commitment?", a:"That commitment is proved precisely when it becomes costly; perseverance under difficulty is what distinguishes it from good intention."}
    ]},
  project:{ title:"Commitment research and drama",
    brief:"Research God's commitments and dramatize man's response.",
    steps:["Research God's commitments to man through the teachings of Christianity, Islam and tradition.","List at least five of God's promises for the earth and two concerning heaven.","Name three messengers of God from each tradition.","Prepare a short play showing man's commitment to God in worship and in daily conduct.","Perform it and explain what commitment cost the character in your play."],
    criteria:["All three traditions researched","Five promises for the earth, two for heaven","Three messengers from each tradition","A play showing commitment in both worship and conduct","The cost of commitment made clear"]},
  activities:["Research and discuss God's commitments to man through the teachings of Christianity, Islam and tradition","Dramatize man's commitment to God in worship","Discuss the responses of Christians, Muslims and traditionalists to God's promises","List God's promises for the earth and for heaven"],
  materials:["The Holy Bible — Genesis 8:20–22; Genesis 9:2–17; Psalm 104; Matthew 6:26–30; Matthew 10:29; 2 Chronicles 7","The Holy Qur'an","Teachings of the Prophet Muhammad","Religious literature","Traditional and moral teachings"],
  assessment:["Research","Play let and drama","Oral presentation","Class discussion","Written quizzes and tests"]
},
{
  grade:9, period:"III", sem:"One", icon:"🎉",
  title:"Religious Festivals and their Values",
  subtitle:"Christian, Muslim and traditional festivals and their moral significance",
  outcomes:["Learners are able to analyse the importance of religious festivals, classify them in line with their moral values, and participate according to their faith."],
  objectives:["Name some religious festivals","Explain some of the religious festivals","State the value of each religious festival for moral development","Differentiate the various religious festivals through research","Interview religious leaders on the purpose and meaning of festivals"],
  note:"A <b>festival</b> is a day or season set apart to remember a sacred event and renew commitment. Christian festivals include <b>Christmas</b>, <b>Easter</b>, the <b>National Fast and Prayer Day</b> and <b>Thanksgiving Day</b>. Muslim festivals include <b>Eid-ul-Fitr</b> ending the fast of Ramadan and <b>Eid-ul-Adha</b> the feast of sacrifice. Liberia's ethnic groups also keep <b>traditional festivals</b> marking harvest, initiation and the honouring of ancestors.",
  focus:["Christian festivals: Christmas, Easter, Fast and Prayer Day, Thanksgiving","Muslim festivals: Eid-ul-Fitr and Eid-ul-Adha","Traditional festivals of Liberian ethnic groups","The importance of religious festivals","The moral value of each festival","Participation according to one's faith"],
  terms:[
    {t:"festival", d:"a day or season set apart to remember a sacred event", x:"A festival renews commitment."},
    {t:"Christmas", d:"the Christian festival of the birth of Christ", x:"Christmas is kept in December."},
    {t:"Easter", d:"the Christian festival of the resurrection", x:"Easter follows Good Friday."},
    {t:"Ramadan", d:"the Muslim month of fasting", x:"Ramadan trains self-denial."},
    {t:"Eid-ul-Fitr", d:"the Muslim festival ending the fast of Ramadan", x:"Eid-ul-Fitr is a day of charity and joy."},
    {t:"Eid-ul-Adha", d:"the Muslim feast of sacrifice", x:"Eid-ul-Adha recalls Abraham's obedience."},
    {t:"Fast and Prayer Day", d:"the Liberian national day of fasting and prayer", x:"Fast and Prayer Day calls the nation to repentance."},
    {t:"Thanksgiving Day", d:"a day set apart to give thanks to God", x:"Thanksgiving Day is kept in November in Liberia."},
    {t:"harvest festival", d:"a traditional celebration of the gathered crop", x:"The harvest festival thanks God for the yield."},
    {t:"initiation festival", d:"a ceremony marking entry into adult standing", x:"The initiation festival transmits values."},
    {t:"commemoration", d:"the remembering of an event by ceremony", x:"A festival is a commemoration."},
    {t:"pilgrimage", d:"a journey to a holy place", x:"The Hajj is a pilgrimage."},
    {t:"charity", d:"giving to those in need", x:"Charity marks both Eids."},
    {t:"gratitude", d:"thankfulness for what has been received", x:"Gratitude is the heart of thanksgiving."}
  ],
  facts:[
    {q:"What is a religious festival?", a:"A day or season set apart to remember a sacred event, give thanks, and renew the community's commitment."},
    {q:"Name four Christian festivals kept in Liberia.", a:"Christmas, Easter, the National Fast and Prayer Day, and Thanksgiving Day."},
    {q:"What does Christmas commemorate and what is its moral value?", a:"The birth of Christ; its moral value lies in humility, generosity to the poor and goodwill towards others."},
    {q:"What does Easter commemorate and what is its moral value?", a:"The death and resurrection of Christ; its moral value lies in sacrifice, forgiveness and hope."},
    {q:"Name the two principal Muslim festivals and what each marks.", a:"Eid-ul-Fitr, marking the end of the fast of Ramadan; and Eid-ul-Adha, the feast of sacrifice recalling Abraham's obedience."},
    {q:"What is the moral value of Eid-ul-Fitr?", a:"It crowns a month of self-denial with gratitude and obligatory charity to the poor, so that all can share the celebration."},
    {q:"Name two kinds of traditional festival kept among Liberian ethnic groups.", a:"Harvest festivals thanking God for the crop, and initiation festivals marking entry into adult standing (also festivals honouring ancestors)."},
    {q:"State four values that religious festivals promote.", a:"Gratitude to God, charity to the poor, unity and reconciliation within the community, and the transmission of the faith to the young."},
    {q:"Why is the National Fast and Prayer Day significant for Liberia?", a:"It calls the whole nation, across faiths, to humility, repentance and prayer for the country's peace and welfare."}
  ],
  tf:[
    {s:"Eid-ul-Fitr marks the end of the fast of Ramadan.", a:"true", why:"It crowns the month of fasting with celebration and charity."},
    {s:"Easter commemorates the birth of Christ.", a:"false", why:"Easter commemorates the resurrection; Christmas commemorates the birth."},
    {s:"Religious festivals include an obligation of charity to the poor.", a:"true", why:"Charity is central to both Eids and to Christian festival practice."},
    {s:"Traditional Liberian festivals have no moral content.", a:"false", why:"Harvest and initiation festivals transmit gratitude, communal duty and the values of adulthood."},
    {s:"Festivals help transmit faith and values to the young.", a:"true", why:"Children learn the story and the values of their community by taking part."},
    {s:"A festival is only an occasion for eating and enjoyment.", a:"false", why:"Enjoyment is part of it, but its purpose is remembrance, gratitude, charity and renewal of commitment."}
  ],
  apply:[
    {q:"How can a Christian learner show respect during Ramadan without taking part in the fast?", a:"By not eating conspicuously in front of fasting classmates, not mocking the practice, and offering good wishes at Eid."},
    {q:"A family spends heavily on Christmas but gives nothing to the poor. What has been missed?", a:"The moral heart of the festival — generosity to those in need — has been replaced by display and consumption."},
    {q:"Why does the syllabus ask learners to interview religious leaders about festivals?", a:"So that they learn the actual purpose and meaning from those who keep them, rather than judging from outward appearance alone."},
    {q:"How could your school mark the National Fast and Prayer Day inclusively?", a:"By a shared assembly on repentance, peace and service to the nation, with prayers led in turn from each tradition and space for private observance."},
    {q:"What is the moral danger of a festival becoming purely commercial?", a:"Its meaning is lost, the poor are excluded by cost, and the occasion feeds pride and debt rather than gratitude and charity."}
  ],
  sort:{ title:"Religious festivals", groups:[
    {name:"Christian festivals", items:["Christmas","Easter","Fast and Prayer Day","Thanksgiving Day"]},
    {name:"Muslim festivals", items:["Eid-ul-Fitr","Eid-ul-Adha","Ramadan"]},
    {name:"Traditional festivals", items:["Harvest festival","Initiation festival","Ancestor commemoration"]},
    {name:"Values promoted", items:["Gratitude","Charity","Unity","Transmission of faith"]}
  ]},
  compare:{ title:"Festivals and their moral values", caption:"Complete the table of festivals, what each marks and its moral value.",
    items:[
      {p:"Christmas", f:"The birth of Christ; teaches humility, generosity to the poor and goodwill."},
      {p:"Easter", f:"The death and resurrection of Christ; teaches sacrifice, forgiveness and hope."},
      {p:"Eid-ul-Fitr", f:"The end of the fast of Ramadan; teaches gratitude, self-discipline and obligatory charity."},
      {p:"Eid-ul-Adha", f:"The feast of sacrifice recalling Abraham's obedience; teaches submission to God and the sharing of meat with the poor."},
      {p:"Fast and Prayer Day", f:"A national call to repentance and prayer; teaches humility and civic responsibility across faiths."},
      {p:"Traditional harvest festival", f:"Thanksgiving for the crop; teaches gratitude, communal sharing and respect for the land and elders."}
    ]},
  casestudy:{ title:"The shared Eid",
    text:"In a mixed neighbourhood in Kakata, the Kamara family had for years kept Eid-ul-Adha by sharing a portion of their meat with three Muslim neighbours. One year the mother added two Christian families on the street, including a widow with four children who had lost her market stall. Some relatives objected that the meat of the sacrifice was for the faithful. The old man of the household answered that the obligation was to feed the poor, and that hunger does not ask a person's religion. The following Christmas, the widow's family brought rice and oil to the Kamaras. The street now organises a joint distribution at both festivals, and a small committee makes sure no household is left out.",
    questions:[
      {q:"What was the traditional practice of the Kamara family at Eid-ul-Adha?", a:"Sharing a portion of their sacrificial meat with three Muslim neighbours."},
      {q:"What objection did some relatives raise, and how was it answered?", a:"That the meat was for the faithful; the old man answered that the obligation was to feed the poor, and hunger does not ask a person's religion."},
      {q:"What happened at the following Christmas?", a:"The widow's family brought rice and oil to the Kamaras, returning the kindness across the religious line."},
      {q:"What moral value of festivals does this case illustrate?", a:"That charity to the needy lies at the heart of festival observance, and that it can build unity across faiths rather than dividing them."}
    ]},
  project:{ title:"Festival research and interview",
    brief:"Research religious festivals and interview a religious leader.",
    steps:["List the main Christian, Muslim and traditional festivals kept in your area.","Choose one festival from a tradition other than your own.","Interview a leader of that tradition about its purpose and meaning.","Record what moral values the festival is meant to promote.","Present your findings respectfully and compare with a festival of your own tradition."],
    criteria:["Festivals of all three traditions listed","A festival outside your own tradition chosen","A genuine interview conducted","Moral values accurately recorded","Respectful comparison, no mockery"]},
  activities:["Differentiate between the various religious festivals through research","Interview religious leaders to understand the purpose and meaning of festivals","Classify festivals according to their moral values","Class presentation on the importance of religious festivals"],
  materials:["The Holy Bible — Matthew 1:18–21; Matthew 26:17–30; Matthew 27:1–66; Mark 16:1–20; Luke 24:1–49","The Holy Qur'an","Religious and traditional literature","Calendars of religious festivals"],
  assessment:["Research","Interview report","Oral presentation","Class discussion","Written quizzes and tests"]
},
{
  grade:9, period:"IV", sem:"Two", icon:"💚",
  title:"Religion and Health",
  subtitle:"The positive impact of religion on health and the prevention of health problems",
  outcomes:["Learners are able to analyse how religions positively impact healthy living and teach others in the community to practise religious teachings in their daily lives."],
  objectives:["Know the positive impact religion has on health","List ways religion helps to prevent health problems","Explain the impact of Christianity, Islam and traditional religion on health","Research how compliance with religious rules helps prevent health problems in society"],
  note:"Religion affects health in several practical ways: through <b>rules of cleanliness</b> (washing before prayer, dietary rules), through <b>moral teaching</b> that reduces risk (sobriety, chastity, faithfulness), through <b>community support</b> for the sick and bereaved, and through <b>mental and spiritual peace</b> that reduces stress. Faith bodies also run many of Liberia's clinics and health campaigns.",
  focus:["Positive impact of Christianity on health","Positive impact of Islam on health","Positive impact of traditional religion on health","Religious rules of cleanliness","How religion helps prevent health problems","Faith communities and community health"],
  terms:[
    {t:"hygiene", d:"practices that maintain health and prevent disease", x:"Ritual washing reinforces hygiene."},
    {t:"ablution", d:"the ritual washing performed before prayer in Islam", x:"Ablution is performed five times daily."},
    {t:"sanitation", d:"arrangements for clean water and waste disposal", x:"Sanitation prevents cholera."},
    {t:"abstinence", d:"refraining from a harmful practice", x:"Abstinence prevents many infections."},
    {t:"sobriety", d:"freedom from intoxication", x:"Sobriety reduces accidents and violence."},
    {t:"mental health", d:"the wellbeing of the mind and emotions", x:"Faith communities support mental health."},
    {t:"stress", d:"strain of mind and body under pressure", x:"Prayer and community reduce stress."},
    {t:"bereavement", d:"the loss of a loved one by death", x:"The congregation supports the family in bereavement."},
    {t:"immunisation", d:"protection against disease by vaccine", x:"Religious leaders encouraged immunisation."},
    {t:"quarantine", d:"the isolation of the infected to stop spread", x:"Faith leaders explained quarantine to the community."},
    {t:"health education", d:"teaching people how to protect their health", x:"Mosques and churches carry health education."},
    {t:"compliance", d:"the following of rules or advice given", x:"Compliance with health rules saves lives."},
    {t:"superstition", d:"a belief not founded in evidence that may cause harm", x:"Superstition can obstruct treatment."},
    {t:"charity clinic", d:"a health facility run by a faith body for the needy", x:"The mission runs a charity clinic."}
  ],
  facts:[
    {q:"State four ways religion positively affects health.", a:"Through rules of cleanliness, through moral teaching that reduces risky behaviour, through community support for the sick and bereaved, and through the mental peace that reduces stress."},
    {q:"How does Islamic practice reinforce hygiene?", a:"Ablution — ritual washing of hands, face, mouth and feet — is performed before each of the five daily prayers, and cleanliness is required for worship."},
    {q:"How does Christian practice support the sick?", a:"Through visitation of the sick, prayer, practical help to families, and the mission hospitals and clinics run by churches."},
    {q:"How does traditional religion contribute positively to health?", a:"Through knowledge of medicinal plants, communal care of the sick and bereaved, and customs that regulate diet, rest and behaviour."},
    {q:"List five ways religion helps prevent health problems.", a:"Teaching sobriety, which prevents liver disease and accidents; teaching chastity and faithfulness, which prevents STIs; requiring cleanliness, which prevents infection; supporting the bereaved, which protects mental health; and mobilising communities for immunisation and sanitation."},
    {q:"How did faith leaders assist during health emergencies in Liberia?", a:"By explaining safe practices in worship, encouraging safe burial and treatment, countering rumour, and using their authority to promote compliance with health rules."},
    {q:"How can religious belief sometimes obstruct health care?", a:"When superstition or fatalism discourages treatment, immunisation or hospital care; sound teaching corrects this by presenting medicine as part of God's provision."},
    {q:"Why is the authority of a religious leader valuable in a health campaign?", a:"Because people trust and heed their leaders, so their endorsement can achieve compliance that official instruction alone cannot."}
  ],
  tf:[
    {s:"Ritual washing before prayer reinforces personal hygiene.", a:"true", why:"Regular washing of hands and face reduces the transmission of infection."},
    {s:"Religious teaching on sobriety has health benefits.", a:"true", why:"It reduces liver disease, accidents and violence."},
    {s:"Religion has never played any part in community health work.", a:"false", why:"Faith bodies run many clinics and have been central to health campaigns and education."},
    {s:"Superstition can obstruct proper health care.", a:"true", why:"Superstition and fatalism may discourage treatment or immunisation, which sound religious teaching should correct."},
    {s:"Support for the bereaved protects mental health.", a:"true", why:"Communal mourning and practical help reduce isolation and the risk of depression."},
    {s:"Religious leaders' endorsement can improve compliance in a health campaign.", a:"true", why:"People trust their leaders, so endorsement achieves what official instruction alone often cannot."}
  ],
  apply:[
    {q:"A rumour spreads that a vaccine is harmful. How could a religious leader help?", a:"By seeking accurate information from health workers, explaining it from the pulpit or in the mosque, being vaccinated publicly, and correcting the rumour directly."},
    {q:"How does the requirement of cleanliness before prayer help in a community without piped water?", a:"It establishes a daily habit of washing and creates demand for clean water at the place of worship, which can serve the whole neighbourhood."},
    {q:"A sick man refuses hospital treatment saying he will trust God alone. How would you counsel him?", a:"That medicine and skilled care are part of God's provision; trusting God does not mean refusing the means He has provided, and both faiths permit and encourage treatment."},
    {q:"Suggest three ways a congregation could improve health in its neighbourhood.", a:"Run health education after services, maintain a clean water point and latrine at the place of worship, and organise visits and practical help for the sick and elderly."},
    {q:"Why is care for the bereaved a health matter and not only a religious one?", a:"Isolation and unresolved grief damage mental and physical health; communal support protects the bereaved from depression and neglect."}
  ],
  sort:{ title:"Religion and health", groups:[
    {name:"Cleanliness practices", items:["Ablution before prayer","Washing before meals","Clean clothing for worship","Clean place of worship"]},
    {name:"Moral teaching that protects health", items:["Sobriety","Chastity","Faithfulness","Moderation in eating"]},
    {name:"Community support", items:["Visiting the sick","Support in bereavement","Charity clinics","Help for the elderly"]},
    {name:"Health campaigns", items:["Immunisation","Sanitation","Safe burial","Health education"]}
  ]},
  compare:{ title:"How each tradition supports health", caption:"Complete the table of contribution from each faith.",
    items:[
      {p:"Christianity", f:"Visitation of the sick, mission hospitals and clinics, teaching of sobriety and chastity, and support of the bereaved."},
      {p:"Islam", f:"Ablution and required cleanliness, prohibition of intoxicants, zakat providing for the sick and poor, and fasting with its discipline."},
      {p:"African Traditional Religion", f:"Knowledge of medicinal plants, communal care of the sick, and customs regulating diet, rest and conduct."},
      {p:"Shared: cleanliness", f:"All three attach religious value to washing and to a clean place of worship and dwelling."},
      {p:"Shared: care of the sick", f:"All three treat visiting and providing for the sick as a religious duty."},
      {p:"Shared: mental peace", f:"Prayer, worship and belonging reduce stress, isolation and despair."}
    ]},
  casestudy:{ title:"The pastors and the imams at the clinic",
    text:"When a cholera outbreak began in a crowded district, the health team found their advice ignored. People continued to drink from the shallow well and to wash the dead by hand before burial. The county health officer changed tactics. She called a meeting of every pastor and imam in the district, explained exactly how cholera spreads, and asked each of them to say the same three things at their next service: boil or treat the water, wash hands with soap, and allow the burial team to prepare the dead. She also arranged for a chlorinated water point at the largest mosque and the largest church. Cases fell by more than two-thirds within a month. She later said she had spent her first two weeks talking to the wrong people.",
    questions:[
      {q:"Why was the health team's advice being ignored at first?", a:"It came from outsiders without the trust and authority that the community's own religious leaders held."},
      {q:"What three messages did the leaders agree to give?", a:"Boil or treat the water, wash hands with soap, and allow the burial team to prepare the dead."},
      {q:"Why was placing water points at the mosque and church effective?", a:"Those were trusted places the whole community already visited regularly, so clean water became convenient and normal."},
      {q:"What did the health officer mean by saying she had talked to the wrong people?", a:"That she should have engaged the religious leaders from the start, since their authority was what could actually change behaviour."}
    ]},
  project:{ title:"Religion and community health study",
    brief:"Research how religion supports health in your community.",
    steps:["List five ways religion offers safety in community health.","Research how compliance with religious rules helps prevent health problems.","Interview a religious leader about health work their body does.","Identify one health problem in your community and propose a role for faith bodies in addressing it.","Present your proposal to the class."],
    criteria:["Five genuine ways listed","Research on compliance completed","A real interview conducted","A specific local health problem identified","A practical, realistic proposal"]},
  activities:["List ways in which religions offer safety in community health","Research how compliance with religious rules helps prevent health problems in society","Interview religious leaders about health work","Class discussion on religion and healthy living"],
  materials:["The Holy Bible — Exodus 20:1–7; 1 Peter 3:1; Colossians 3:18–19","The Holy Qur'an","Religious instructional materials","Health literature","Visual aids and posters"],
  assessment:["Research","Written assignment listing five possibilities","Oral presentation","Interview report","Class discussion"]
},
{
  grade:9, period:"V", sem:"Two", icon:"📜",
  title:"The Ministries of Religious Leaders and Traditional Priests",
  subtitle:"The works of Jesus Christ, the Prophet Muhammad and traditional priests",
  outcomes:["Learners understand the religious works of Jesus Christ, the Prophet Muhammad and traditional leaders, and apply the teachings to their daily lives."],
  objectives:["Name some of the ministries of religious leaders including Jesus Christ, Muhammad and traditional priests","Narrate the calling and commissioning of the disciples, the healing of the sick, the moral teachings, the death and resurrection","Narrate the Hijrah to Medina, the last pilgrimage and the triumphant entry into Mecca","Describe the ministries of traditional priests: healing, pouring libation and offering sacrifice"],
  note:"A <b>ministry</b> is the work a religious leader performs on behalf of God and the people. The syllabus sets three side by side: the ministry of <b>Jesus Christ</b> — calling and commissioning disciples, healing, moral teaching, death and resurrection; of the <b>Prophet Muhammad</b> — the <b>Hijrah</b> to Medina, the last pilgrimage and the entry into Mecca; and of <b>traditional priests</b> — healing the sick, pouring libation and offering sacrifice.",
  focus:["The meaning of ministry","Jesus Christ: calling and commissioning of the disciples","Jesus Christ: healing, moral teaching, death and resurrection","The Prophet Muhammad: the Hijrah to Medina","The Prophet Muhammad: the last pilgrimage and entry into Mecca","Traditional priests: healing, libation and sacrifice"],
  terms:[
    {t:"ministry", d:"the work a religious leader performs for God and the people", x:"His ministry lasted three years."},
    {t:"disciple", d:"a follower who learns from a teacher", x:"The disciples were called to follow."},
    {t:"calling", d:"the summons to a particular service", x:"The calling of the disciples began the work."},
    {t:"commissioning", d:"the sending out of followers with authority to act", x:"The commissioning sent them to teach."},
    {t:"healing", d:"the restoring of the sick to health", x:"Healing was central to his ministry."},
    {t:"resurrection", d:"the rising from the dead", x:"Christians commemorate the resurrection at Easter."},
    {t:"Hijrah", d:"the migration of the Prophet Muhammad from Mecca to Medina", x:"The Hijrah marks the start of the Muslim calendar."},
    {t:"Medina", d:"the city to which the Prophet migrated", x:"The community was established at Medina."},
    {t:"pilgrimage", d:"a journey to a holy place", x:"His last pilgrimage gave a farewell sermon."},
    {t:"Mecca", d:"the holy city of Islam", x:"He entered Mecca in triumph."},
    {t:"libation", d:"the pouring out of drink as an offering", x:"The priest poured libation for the community."},
    {t:"sacrifice", d:"an offering made to God or the gods", x:"Sacrifice was offered for the sick."},
    {t:"intercession", d:"pleading on behalf of another", x:"The priest makes intercession for the people."},
    {t:"consecration", d:"the setting apart of a person or thing for sacred use", x:"Consecration marks the priest's office."}
  ],
  facts:[
    {q:"What is meant by a ministry?", a:"The work a religious leader performs on behalf of God and for the people."},
    {q:"Name five elements of the ministry of Jesus Christ named in the syllabus.", a:"The calling of his disciples, the commissioning of his disciples, the healing of the sick, his moral teachings, and his death and resurrection."},
    {q:"What was the calling of the disciples?", a:"Jesus summoned ordinary men — fishermen among them — to leave their work and follow him as learners and companions in his ministry."},
    {q:"What was the commissioning of the disciples?", a:"The sending out of the disciples with authority to teach, heal and carry the message to others."},
    {q:"What was the Hijrah and why is it significant?", a:"The migration of the Prophet Muhammad from Mecca to Medina, where the Muslim community was established; it marks the beginning of the Muslim calendar."},
    {q:"What happened at the Prophet's last pilgrimage?", a:"He performed the pilgrimage and delivered his farewell sermon, setting out duties of justice, the rights of women, the equality of believers and the sanctity of life and property."},
    {q:"What is remembered about his entry into Mecca?", a:"That he entered in triumph and granted a general amnesty rather than taking revenge on his former opponents."},
    {q:"Name three ministries of traditional priests.", a:"Healing of the sick, pouring of libation, and offering sacrifices to the gods on behalf of the sick and the community."},
    {q:"Name one moral quality shown in all three ministries.", a:"Service to others rather than self — each leader used authority for the benefit of the people, especially the sick and the weak."}
  ],
  tf:[
    {s:"The Hijrah was the migration from Mecca to Medina.", a:"true", why:"It marks the establishing of the Muslim community and the start of the Muslim calendar."},
    {s:"The commissioning of the disciples means their first calling to follow.", a:"false", why:"The calling was the summons to follow; the commissioning was the later sending out with authority."},
    {s:"Healing of the sick features in both the ministry of Jesus and that of traditional priests.", a:"true", why:"Both traditions place the care and healing of the sick at the centre of the leader's work."},
    {s:"The Prophet took revenge on his opponents when he entered Mecca.", a:"false", why:"He entered in triumph but granted a general amnesty."},
    {s:"Libation is the pouring out of drink as an offering.", a:"true", why:"It is a characteristic act of traditional priestly ministry."},
    {s:"A ministry is work done for personal enrichment.", a:"false", why:"It is service performed on behalf of God and for the people."}
  ],
  apply:[
    {q:"What can a modern religious leader learn from the amnesty at Mecca?", a:"That victory should be used for reconciliation rather than revenge, and that magnanimity secures peace where retaliation would prolong conflict."},
    {q:"How does the commissioning of the disciples apply to an ordinary believer today?", a:"It teaches that the work is not confined to leaders; every believer is sent to teach by word and example and to serve others."},
    {q:"A traditional priest and a clinic both offer help to a sick person. How should the family proceed?", a:"Seek medical diagnosis and treatment, which is part of God's provision, while accepting the community and spiritual support the tradition offers — the two need not be opposed unless treatment is refused."},
    {q:"What does the farewell sermon suggest about the treatment of women and the poor?", a:"That their rights are to be respected and protected, and that believers are equal regardless of birth or wealth."},
    {q:"Name one way a learner can imitate the service seen in these ministries.", a:"By using their ability for others — teaching a younger pupil, visiting a sick neighbour, or helping a family in difficulty without seeking reward."}
  ],
  sort:{ title:"Ministries", groups:[
    {name:"Ministry of Jesus Christ", items:["Calling the disciples","Commissioning the disciples","Healing the sick","Death and resurrection"]},
    {name:"Ministry of the Prophet Muhammad", items:["Hijrah to Medina","Last pilgrimage","Farewell sermon","Entry into Mecca"]},
    {name:"Ministry of traditional priests", items:["Healing the sick","Pouring libation","Offering sacrifice","Intercession"]},
    {name:"Shared features", items:["Service to others","Care of the sick","Moral teaching","Leading the community"]}
  ]},
  compare:{ title:"Three ministries compared", caption:"Complete the table of the works of each leader.",
    items:[
      {p:"Jesus Christ — calling", f:"Summoned ordinary men, including fishermen, to leave their work and follow him as disciples."},
      {p:"Jesus Christ — commissioning", f:"Sent the disciples out with authority to teach, heal and carry the message to others."},
      {p:"Jesus Christ — death and resurrection", f:"His death and rising again, commemorated at Easter, the centre of Christian teaching."},
      {p:"Muhammad — the Hijrah", f:"Migration from Mecca to Medina, where the Muslim community was established; marks the Muslim calendar."},
      {p:"Muhammad — last pilgrimage and Mecca", f:"The farewell sermon on justice, the rights of women and the equality of believers, and the entry into Mecca with a general amnesty."},
      {p:"Traditional priests", f:"Healing the sick, pouring libation and offering sacrifice for the community and the sick."}
    ]},
  casestudy:{ title:"Three visits to one sickbed",
    text:"When old Ma Nyanti fell seriously ill, three people came to her house in one week. The pastor came and prayed with the family, then organised a rota of church members to cook and wash for the household. The imam, whose mosque stood at the end of the same street, sent two young men each morning to fetch water and arranged a contribution towards her medicine. The traditional priest, who had known her family for forty years, came and sat with her, spoke the names of her people, and poured a libation. He also told her son plainly to take her to the clinic, which the son did. Ma Nyanti recovered. Her son says he cannot separate what healed her.",
    questions:[
      {q:"What form did the pastor's ministry take?", a:"Prayer with the family, and organising practical help — a rota of members to cook and wash."},
      {q:"What form did the imam's ministry take?", a:"Sending young men daily to fetch water, and arranging a contribution towards her medicine."},
      {q:"What did the traditional priest do, and what was notable about his advice?", a:"He sat with her, named her people and poured libation — and told her son plainly to take her to the clinic."},
      {q:"What common element runs through all three ministries here?", a:"Practical service to a sick person and her household — spiritual care joined to concrete help, and none of them obstructing medical treatment."}
    ]},
  project:{ title:"Study of the ministries",
    brief:"Research and narrate the ministries of the three sets of leaders.",
    steps:["Research and write a one-page essay on the ministry of Jesus Christ, covering the calling, the commissioning, the healing, the moral teachings and the death and resurrection.","Write a second page on the ministry of the Prophet Muhammad, covering the Hijrah, the last pilgrimage and the entry into Mecca.","Write a third section on the ministries of traditional priests.","Identify three qualities shared by all three ministries.","Present your work to the class with respect for each tradition."],
    criteria:["All five elements of Christ's ministry covered","All three elements of the Prophet's ministry covered","Traditional priestly ministry accurately described","Three genuine shared qualities identified","Respectful presentation throughout"]},
  activities:["Research and write a one-page essay on the ministries of Jesus Christ, the Prophet Muhammad and traditional priests","Narrate the stories of the calling and commissioning of the disciples","Narrate the Hijrah, the last pilgrimage and the entry into Mecca","Describe the healing, libation and sacrifice of traditional priests"],
  materials:["The Holy Bible — Luke 6:12–15; Luke 5:1–11; Mark 8:22–26","The Holy Qur'an and accounts of the life of the Prophet","Literature on African Traditional Religion","Religious reference materials"],
  assessment:["One-page research essay","Oral narration","Class presentation","Class discussion","Written quizzes and tests"]
},
{
  grade:9, period:"VI", sem:"Two", icon:"🤍",
  title:"Chastity and Immorality",
  subtitle:"Chastity in Islam, Christianity and African Traditional Religion; benefits and consequences",
  outcomes:["Learners demonstrate a lifestyle that benefits themselves, their family and the nation by living to the high moral standards derived from religious and moral teaching."],
  objectives:["Differentiate between chastity and immorality","Compare and contrast Islamic and Christian teachings on chastity","Explain why and how a person should live a chaste life by the teaching of African Traditional Religion","State the importance of living a chaste life","State the dangers of an immoral lifestyle"],
  note:"<b>Chastity</b> is purity and self-mastery in sexual conduct according to one's state in life — abstinence for the unmarried, faithfulness for the married. <b>Immorality</b> is conduct that violates the moral law. All three traditions studied treat chastity as a <b>virtue of self-respect and respect for others</b>, protecting the person, the family and the community.",
  focus:["Chastity and immorality distinguished","The importance of chastity in Islam","The importance of chastity in Christianity","Chastity in African Traditional Religion","Benefits of living a chaste life","Consequences of an immoral lifestyle"],
  terms:[
    {t:"chastity", d:"purity and self-mastery in sexual conduct according to one's state in life", x:"Chastity is a virtue taught by all three faiths."},
    {t:"immorality", d:"conduct that violates the moral law", x:"Immorality carries consequences for the community."},
    {t:"modesty", d:"decency in dress, speech and conduct", x:"Modesty is enjoined on men and women alike."},
    {t:"self-mastery", d:"the government of one's own desires", x:"Chastity requires self-mastery."},
    {t:"virtue", d:"a settled habit of doing what is right", x:"Chastity is counted a virtue."},
    {t:"integrity", d:"wholeness and consistency of character", x:"Integrity joins private and public conduct."},
    {t:"dignity", d:"the worth belonging to every human person", x:"Chastity respects one's own dignity and another's."},
    {t:"faithfulness", d:"keeping one's promises, especially in marriage", x:"Faithfulness is chastity within marriage."},
    {t:"temptation", d:"an inducement to act wrongly", x:"Temptation is resisted by settled conviction."},
    {t:"consequence", d:"the result that follows an action", x:"Every choice carries a consequence."},
    {t:"reputation", d:"the general opinion held of a person", x:"Reputation is easily lost and slowly rebuilt."},
    {t:"discipline", d:"trained and ordered conduct", x:"Discipline sustains a chaste life."},
    {t:"accountability", d:"answerability for one's conduct", x:"Accountability to God and community supports chastity."},
    {t:"restoration", d:"the bringing back of one who has fallen", x:"Restoration follows sincere repentance."}
  ],
  facts:[
    {q:"Define chastity and immorality.", a:"Chastity is purity and self-mastery in sexual conduct according to one's state in life; immorality is conduct that violates the moral law."},
    {q:"What does chastity require of the unmarried, and of the married?", a:"Abstinence for the unmarried, and faithfulness to one's spouse for the married."},
    {q:"State two teachings on chastity in Islam.", a:"Modesty is enjoined on both men and women in dress, look and conduct; and sexual relations belong within marriage, which is honoured and encouraged."},
    {q:"State two teachings on chastity in Christianity.", a:"The body is to be honoured and kept pure; and sexual life belongs within marriage, with faithfulness required of husband and wife alike."},
    {q:"How does African Traditional Religion support chaste living?", a:"Through the instruction given at initiation, family and elder supervision, taboos attaching shame and penalty to breach, and the honouring of marriage as a union of two families."},
    {q:"State four benefits of living a chaste life.", a:"Protection of health from infection and unplanned pregnancy, self-respect and a clear conscience, a good reputation and family honour, and freedom to complete one's education and plans."},
    {q:"State four dangers of an immoral lifestyle.", a:"Sexually transmitted infection, unplanned pregnancy and interrupted schooling, damaged relationships and reputation, and the financial burden that follows."},
    {q:"Why do all three traditions treat sexual conduct as a community matter and not merely private?", a:"Because its consequences fall on the family and community — children, health, resources and the honour of the household — not on the individual alone."},
    {q:"What do the traditions teach about someone who has failed and repents?", a:"That sincere repentance is met with mercy and the person should be restored, not permanently condemned."}
  ],
  tf:[
    {s:"Chastity for a married person means faithfulness to one's spouse.", a:"true", why:"Chastity is defined according to one's state in life — abstinence for the unmarried, faithfulness for the married."},
    {s:"Modesty is enjoined only on women.", a:"false", why:"Islamic and Christian teaching alike enjoin modesty on men and women both."},
    {s:"African Traditional Religion has no teaching on sexual conduct.", a:"false", why:"It regulates conduct through initiation teaching, family supervision, taboo and the honouring of marriage."},
    {s:"Chastity protects a young person's education and plans.", a:"true", why:"It avoids unplanned pregnancy and infection, which commonly interrupt or end schooling."},
    {s:"A person who has fallen morally can never be restored.", a:"false", why:"All three traditions provide for repentance and restoration rather than permanent condemnation."},
    {s:"The consequences of sexual conduct fall on the individual alone.", a:"false", why:"They fall on the family and community too — on children, health, resources and household honour."}
  ],
  apply:[
    {q:"A learner says chastity is old-fashioned and impossible today. How would you answer?", a:"Point out that the consequences it protects against — infection, unplanned pregnancy, lost schooling — are entirely current, and that self-mastery is a strength many people do in fact practise."},
    {q:"How does chastity express respect for another person, not just for oneself?", a:"It refuses to use another person for one's own gratification and refuses to expose them to risk of infection, pregnancy or shame."},
    {q:"What practical steps help a young person live chastely?", a:"Avoiding situations and company that invite pressure, forming clear convictions in advance, keeping occupied with study and useful activity, and having a trusted adult to talk to."},
    {q:"Compare how Islamic and Christian teaching support chastity in practice.", a:"Both enjoin modesty in dress and conduct, encourage early and honourable marriage, provide community accountability, and offer forgiveness on repentance."},
    {q:"A classmate who fell pregnant returns to school and is mocked. What does the teaching require of you?", a:"To welcome and support her; the traditions condemn the conduct but call for restoration of the person, and mocking simply adds harm to harm."}
  ],
  sort:{ title:"Chastity and immorality", groups:[
    {name:"Marks of chastity", items:["Self-mastery","Modesty","Faithfulness","Respect for others"]},
    {name:"Benefits of a chaste life", items:["Protected health","Clear conscience","Good reputation","Education completed"]},
    {name:"Consequences of immorality", items:["Infection","Unplanned pregnancy","Broken trust","Financial burden"]},
    {name:"Supports for chaste living", items:["Clear convictions","Good company","Useful occupation","A trusted adult"]}
  ]},
  compare:{ title:"Chastity in the three traditions", caption:"Complete the table of teaching and how each supports it.",
    items:[
      {p:"Islamic teaching", f:"Modesty enjoined on men and women, sexual relations within marriage, early and honourable marriage encouraged, community accountability."},
      {p:"Christian teaching", f:"The body honoured and kept pure, sexual life within marriage, faithfulness of husband and wife, and forgiveness on repentance."},
      {p:"African Traditional teaching", f:"Initiation instruction, family and elder supervision, taboos attaching shame and penalty, and marriage as a union of two families."},
      {p:"Shared value: dignity", f:"All three treat the person as having worth that must not be used merely for another's gratification."},
      {p:"Shared value: community", f:"All three recognise that consequences fall on family and community, not the individual alone."},
      {p:"Shared mercy", f:"All three provide a way of repentance and restoration for the one who has fallen."}
    ]},
  casestudy:{ title:"The promise Kou kept",
    text:"Kou was fifteen when she and three friends made a promise to each other: they would finish senior high before entering any relationship. It was easier said than kept. Two of the four broke the promise within two years, and one left school. Kou was mocked as proud and old-fashioned. But she had two things her friends did not: a settled conviction she had thought through herself, and an aunt she could telephone at any hour. When a young man pressed her, she was able to say no without hesitating, because she had decided the matter long before the moment came. Kou finished senior high, trained as a teacher, married at twenty-five, and now runs a girls' club at her old school where the same conversation happens every year.",
    questions:[
      {q:"What two things helped Kou keep her decision?", a:"A settled conviction she had thought through in advance, and a trusted adult — her aunt — she could contact at any hour."},
      {q:"Why does deciding in advance make refusal easier?", a:"Because the decision is not made under pressure in the moment; she only had to act on a conclusion already reached."},
      {q:"What did Kou face from others, and what does that show?", a:"She was mocked as proud and old-fashioned — showing that chastity often requires the courage to be unpopular."},
      {q:"What is Kou doing now, and why is it significant?", a:"She runs a girls' club at her old school, passing on the same conversation — showing that those who have kept a standard can help the next generation choose it too."}
    ]},
  project:{ title:"Chastity research and presentation",
    brief:"Research and present on chastity and the consequences of immorality.",
    steps:["Read and discuss the benefits of a chaste life and the consequences of an immoral one.","Research the teaching on chastity in Islam, Christianity and African Traditional Religion.","Draw a table comparing and contrasting the three.","List four practical supports that help a young person live chastely.","Present your findings to the class with respect and without shaming anyone."],
    criteria:["Benefits and consequences both covered","All three traditions accurately researched","A genuine comparison table","Four practical supports named","Respectful presentation — no shaming of individuals"]},
  activities:["Read and discuss the benefits of a chaste life and the consequences of an immoral lifestyle","Conduct research on the consequences of immorality","Compare and contrast Islamic, Christian and traditional teaching on chastity","Class discussion on practical supports for living chastely"],
  materials:["The Holy Bible","The Holy Qur'an","Religious and moral education textbooks","Literature on African Traditional Religion","Supplementary readings"],
  assessment:["Research","Oral presentation","Comparison table","Class discussion","Written quizzes and tests"]
}

];

/* Merge the Junior High units into the single Religious & Moral Education
   curriculum, exactly as the other extended subjects do: one subject, extra
   grades. This completes Grades 1–9 across all seven subjects. */
if (typeof RM_CURRICULUM !== "undefined") {
  RM_CURRICULUM.push.apply(RM_CURRICULUM, RM_CURRICULUM_79);
}
