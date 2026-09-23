/* Junior High RELIGIOUS & MORAL EDUCATION — depth supplement, Grades 7–9.
   Same design as data-rm1012-more.js: each entry adds more course text
   (study blocks, inserted before the unit's "Assignment" heading), key terms,
   short-answer facts, true/false items and a `worked[]` bank of moral cases
   solved step by step {q, steps[], a}, rendered by GEN_RM as the
   "Worked moral reasoning" sheet. Units are matched by grade + period.
   Written at Junior High level; multi-religious; fully offline. */

var RM_MORE_79 = [

/* ================================ GRADE 7 ================================ */
{ grade:7, period:"I",
  study:[
    {k:"rule"},
    {k:"h3", t:"Reconciliation Stories in the Holy Books"},
    {k:"table", head:["Story","Source","Lesson"], rows:[
      ["Jacob and Esau","Genesis 33","Brothers who were enemies for twenty years embrace and weep together"],
      ["Joseph and his brothers","Genesis 45; Qur'an 12:92","Joseph forgives the brothers who sold him: \"No blame will there be upon you today\""],
      ["The prodigal son","Luke 15:11-32","The father runs to welcome the repentant son"],
      ["The conquest of Makkah","Sirah of the Prophet","The Prophet pardons the people of Makkah who had persecuted him"],
      ["The palaver hut","Liberian tradition","Elders bring quarrelling families together and seal peace with kola nut and a shared meal"]
    ]},
    {k:"rule"},
    {k:"h3", t:"What Stops Reconciliation"},
    {k:"bul", items:[
      "**Pride** — refusing to admit a wrong or to be the first to speak",
      "**Grudges** — keeping a record of wrongs (1 Corinthians 13:5)",
      "**Gossip** — carrying the quarrel to others and making it bigger (Proverbs 26:20)",
      "**Revenge** — paying back evil for evil (Romans 12:17; Qur'an 41:34 \"repel evil with what is better\")",
      "**Fear** — being afraid of being rejected or laughed at"
    ]},
    {k:"rule"},
    {k:"h3", t:"Reconciliation at School"},
    {k:"p", t:"Quarrels between classmates can be settled with the same steps: cool down, talk privately, say sorry honestly, repair any damage, and agree how to behave in future. A trusted teacher or class monitor can act as a **mediator** when the two cannot agree alone."}
  ],
  terms:[
    {t:"pride", d:"thinking too highly of oneself; refusing to admit wrong", x:"Pride kept him from saying sorry."},
    {t:"revenge", d:"hurting someone in return for a hurt", x:"The Holy Books forbid revenge."},
    {t:"gossip", d:"talking about others' private matters behind their backs", x:"Gossip spreads a quarrel."},
    {t:"pardon", d:"to forgive and cancel a punishment", x:"The Prophet pardoned the people of Makkah."},
    {t:"palaver hut", d:"the traditional meeting place where elders settle disputes", x:"The case was taken to the palaver hut."},
    {t:"kola nut", d:"a nut shared in Liberian custom as a sign of welcome and peace", x:"The elders broke kola nut to seal the peace."},
    {t:"prodigal", d:"wasteful; a person who leaves and wastes what he was given", x:"The prodigal son came home."},
    {t:"embrace", d:"to hold someone closely as a sign of love or peace", x:"Esau ran to embrace Jacob."}
  ],
  facts:[
    {q:"What did Joseph say to the brothers who sold him?", a:"\"No blame will there be upon you today\" (Qur'an 12:92). In Genesis 45 he tells them not to be distressed, because God sent him ahead to save lives."},
    {q:"Name four things that stop reconciliation.", a:"Pride, grudges, gossip and revenge. Fear of rejection is another."},
    {q:"What does Qur'an 41:34 teach about answering evil?", a:"Repel evil with what is better, and your enemy may become a close friend."},
    {q:"How does the palaver hut help reconciliation?", a:"Elders hear both sides, settle the dispute and seal the peace with kola nut and a shared meal."}
  ],
  tf:[
    {s:"In the parable, the father refused to welcome the prodigal son home.", a:"false", why:"The father ran to embrace him and held a feast (Luke 15:20-24)."},
    {s:"Gossip makes a quarrel bigger.", a:"true", why:"\"Without wood a fire goes out; without a gossip a quarrel dies down\" (Proverbs 26:20)."}
  ],
  worked:[
    {q:"Fatu and Korpo stopped speaking after Fatu told others Korpo's secret. Show the steps to reconcile them.",
     steps:["Fatu admits the wrong: she broke a trust","Fatu apologises privately and sincerely","Fatu stops the gossip and corrects what she said","Korpo forgives, remembering Matthew 6:14 or Qur'an 24:22","They agree to keep each other's trust in future"],
     a:"Confession, apology, repair, forgiveness and a new agreement restore the friendship."},
    {q:"Your cousin broke your radio and refuses to say sorry. Should you break something of his? Reason it out.",
     steps:["State the choice: revenge or peace","Apply Romans 12:17 and Qur'an 41:34: do not repay evil with evil","Consider the result: revenge doubles the quarrel","Choose a better way: talk calmly, ask for repair, involve an elder if needed"],
     a:"No. Revenge makes things worse. Talk calmly, ask for the radio to be repaired and let an elder mediate if he still refuses."}
  ]
},

{ grade:7, period:"II",
  study:[
    {k:"rule"},
    {k:"h3", t:"Signs That Someone May Be Abusing Drugs"},
    {k:"bul", items:["Red eyes, slurred speech or a strange smell","Sudden change of friends","Missing school and falling marks","Stealing or always asking for money","Anger, fear or sadness without clear reason","Losing interest in family, worship and hobbies"]},
    {k:"rule"},
    {k:"h3", t:"How to Say No"},
    {k:"num", items:["Say **\"No, thank you\"** clearly and look the person in the eye","Give a reason if you wish: \"I care about my body\" or \"My faith forbids it\"","Suggest something else to do","Walk away if they keep pushing","Choose friends who respect your choice (Proverbs 13:20)"]},
    {k:"rule"},
    {k:"h3", t:"Help Is Available"},
    {k:"p", t:"A person who is addicted needs help, not mockery. Parents, teachers, pastors, imams, health workers and rehabilitation centres can help. Churches and mosques in Liberia run programmes for young people, and many ex-users now warn others. \"Bear one another's burdens\" (Galatians 6:2)."}
  ],
  terms:[
    {t:"refusal skills", d:"ways of saying no firmly to something harmful", x:"Refusal skills protect young people."},
    {t:"withdrawal", d:"the painful effects felt when an addicted person stops using a drug", x:"Withdrawal needs medical support."},
    {t:"overdose", d:"taking too much of a drug, which can cause serious harm or death", x:"An overdose is a medical emergency."},
    {t:"kush", d:"a dangerous mixed drug abused by many young people in Liberia", x:"Kush has destroyed many young lives."},
    {t:"relapse", d:"going back to drug use after stopping", x:"Support helps prevent relapse."},
    {t:"ex-user", d:"a person who has stopped using drugs", x:"An ex-user spoke to our class."}
  ],
  facts:[
    {q:"Give four signs that someone may be abusing drugs.", a:"Red eyes, a sudden change of friends, missing school, stealing money and unexplained mood changes."},
    {q:"List the steps for saying no to drugs.", a:"Say no clearly, give a reason, suggest something else, walk away and choose good friends."},
    {q:"What does Galatians 6:2 teach about helping addicts?", a:"Bear one another's burdens: help them instead of mocking them."},
    {q:"What is a relapse?", a:"Going back to drug use after stopping."}
  ],
  tf:[
    {s:"People who are addicted should be mocked so they feel ashamed and stop.", a:"false", why:"Mockery pushes them away. They need help and support (Galatians 6:2)."},
    {s:"Kush is a harmless local drink.", a:"false", why:"Kush is a dangerous drug that damages health and minds."}
  ],
  worked:[
    {q:"At a party, older boys offer Momo kush and call him a coward when he refuses. Show how he can handle it.",
     steps:["Say no clearly: \"No, thanks\"","Give a reason: \"My body is God's trust\" (1 Corinthians 6:19-20)","Ignore the name-calling; courage is doing what is right","Leave the party and call a trusted adult if needed","Report the danger to a parent or teacher"],
     a:"He refuses firmly, gives his reason, leaves and tells a trusted adult. Real courage is refusing."},
    {q:"Your friend has started missing school and smells of drugs. What should you do?",
     steps:["Notice the signs and speak to him kindly in private","Tell him you care and want to help","Tell a trusted adult such as a parent, teacher, pastor or imam","Stay a good friend and invite him to good activities"],
     a:"Speak with care, get a trusted adult involved and keep supporting him. Silence can let him get worse."}
  ]
},

{ grade:7, period:"III",
  study:[
    {k:"rule"},
    {k:"h3", t:"Rights and Responsibilities of a Young Citizen"},
    {k:"table", head:["Right","Matching responsibility"], rows:[
      ["Education","Attend school, study hard and respect teachers"],
      ["Protection and care","Obey parents and guardians and help at home"],
      ["Freedom of religion","Respect the faith of others"],
      ["Freedom of speech","Speak truth and avoid insults and false rumours"],
      ["A clean environment","Keep the community clean; do not litter"]
    ]},
    {k:"rule"},
    {k:"h3", t:"The Golden Rule in Society"},
    {k:"p", t:"All three traditions teach a rule for living with others: \"Do to others what you would have them do to you\" (Matthew 7:12); \"None of you truly believes until he loves for his brother what he loves for himself\" (Hadith); and the African proverb \"What you would not like done to you, do not do to another.\""},
    {k:"rule"},
    {k:"h3", t:"Ways Young People Serve Society"},
    {k:"bul", items:["Community clean-up on Saturdays","Helping elderly neighbours fetch water or carry loads","Reading to younger children","Joining youth groups in church or mosque","Obeying traffic rules and school rules"]}
  ],
  terms:[
    {t:"right", d:"something every person should have or be free to do", x:"Education is a right."},
    {t:"responsibility", d:"something a person ought to do", x:"Respecting teachers is a responsibility."},
    {t:"golden rule", d:"treat others as you want to be treated", x:"The golden rule is found in every tradition."},
    {t:"volunteer", d:"a person who offers to work without pay to help others", x:"She volunteered at the clinic."},
    {t:"neighbour", d:"any person near us, especially one who needs our help", x:"Jesus taught that everyone is our neighbour."},
    {t:"respect", d:"treating others as valuable and worthy", x:"Respect elders and classmates."}
  ],
  facts:[
    {q:"Match the right to education with its responsibility.", a:"Attend school, study hard and respect teachers."},
    {q:"State the golden rule in one tradition.", a:"\"Do to others what you would have them do to you\" (Matthew 7:12)."},
    {q:"Give three ways young people can serve society.", a:"Community clean-up, helping elderly neighbours and reading to younger children."},
    {q:"Why do rights come with responsibilities?", a:"Because everyone else has the same rights, and we must protect them by doing our duty."}
  ],
  tf:[
    {s:"A person with rights has no responsibilities.", a:"false", why:"Every right comes with a responsibility to respect the same right in others."},
    {s:"The golden rule appears in Christianity, Islam and African proverbs.", a:"true", why:"All three teach it."}
  ],
  worked:[
    {q:"A pupil says, \"I have freedom of speech, so I can insult anyone.\" Correct him.",
     steps:["State the right: freedom of speech","Add the responsibility: speak truth and respect others","Apply the golden rule: would you like to be insulted?","Cite teaching: Ephesians 4:29; Qur'an 49:11 forbids mocking others"],
     a:"Freedom of speech does not allow insults. Every right carries a duty to respect others."},
    {q:"Plan a one-day service project for your class using the duties you have learned.",
     steps:["Choose a need: a dirty market lane","Get permission from the town chief or community leader","Share tasks: sweeping, collecting rubbish, carrying","Gather tools: brooms, bags, gloves","Finish and report back"],
     a:"A planned, permitted clean-up with shared tasks shows duty to God, self and society in action."}
  ]
},

{ grade:7, period:"IV",
  study:[
    {k:"rule"},
    {k:"h3", t:"Order of Service in Church and Mosque"},
    {k:"table", head:["Christian Sunday service","Muslim Friday prayer (Jumu'ah)"], rows:[
      ["Call to worship and opening prayer","Adhan (call to prayer)"],
      ["Hymns and praise songs","Ablution (wudu) before entering"],
      ["Bible readings","Khutbah (sermon) by the imam"],
      ["Sermon","Two rak'ahs of congregational prayer"],
      ["Offering and announcements","Personal prayers (dua)"],
      ["Benediction (closing blessing)","Greeting of peace to others"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Proper Behaviour in a Place of Worship"},
    {k:"bul", items:["Arrive on time and dress modestly","Remove shoes where it is required, as in the mosque","Keep silent during prayer and reading","Switch off or silence your phone","Respect the place and the people, even when visiting another faith"]},
    {k:"rule"},
    {k:"h3", t:"Giving with the Right Heart"},
    {k:"p", t:"The widow's two small coins were worth more than the rich people's gifts because she gave all she had (Mark 12:41-44). The Qur'an warns against spoiling charity \"with reminders or hurt\" (Qur'an 2:264). God looks at the heart of the giver, not only the size of the gift."}
  ],
  terms:[
    {t:"adhan", d:"the Muslim call to prayer", x:"The muezzin gave the adhan."},
    {t:"khutbah", d:"the sermon at Friday prayer", x:"The imam's khutbah was about honesty."},
    {t:"benediction", d:"a closing blessing at the end of a service", x:"The pastor gave the benediction."},
    {t:"rak'ah", d:"one unit of Muslim prayer: standing, bowing and prostrating", x:"Fajr has two rak'ahs."},
    {t:"reverence", d:"deep respect for what is holy", x:"Keep silent with reverence."},
    {t:"modesty", d:"dressing and behaving decently", x:"Modesty is expected in worship."}
  ],
  facts:[
    {q:"List four parts of a Christian Sunday service.", a:"Opening prayer, hymns, Bible readings, sermon, offering and benediction."},
    {q:"List four parts of Jumu'ah.", a:"Adhan, ablution, khutbah and congregational prayer. Personal dua follows."},
    {q:"Why was the widow's gift worth more?", a:"She gave all she had, from the heart (Mark 12:41-44)."},
    {q:"Give three rules of behaviour in a place of worship.", a:"Arrive on time, dress modestly and keep silent during prayer. Also silence your phone and remove shoes where required."}
  ],
  tf:[
    {s:"God values only large offerings.", a:"false", why:"The widow's small gift was praised because of her heart (Mark 12:43)."},
    {s:"The khutbah is part of Friday prayer.", a:"true", why:"The imam gives the khutbah before the congregational prayer."}
  ],
  worked:[
    {q:"You are invited to a friend's mosque though you are Christian. How should you prepare and behave?",
     steps:["Ask your friend what is expected","Dress modestly and be ready to remove your shoes","Stay quiet and respectful; sit where you are shown","Do not take photos without permission","Thank your hosts afterwards"],
     a:"Prepare, dress modestly, follow the customs quietly and thank your hosts. Respect for another faith's worship builds peace."},
    {q:"A boy gives a big offering and tells everyone how much he gave. Evaluate his giving.",
     steps:["Note the good: he gave","Note the problem: boasting","Apply Matthew 6:3-4 (give in secret) and Qur'an 2:264","Conclude"],
     a:"His gift is spoiled by boasting. Give quietly, for God and not for praise."}
  ]
},

{ grade:7, period:"V",
  study:[
    {k:"rule"},
    {k:"h3", t:"Myths and Facts about STIs"},
    {k:"table", head:["Myth","Fact"], rows:[
      ["You can get HIV by shaking hands or sharing a plate","HIV is not spread by casual contact; it spreads through blood, sexual contact and from mother to child"],
      ["You can tell by looking that someone has an STI","Many STIs have no signs; only a test can tell"],
      ["Herbs alone can cure HIV","There is no cure; medicines (ART) control HIV and let people live long lives"],
      ["Only adults get STIs","Young people are also at risk"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Staying Safe"},
    {k:"num", items:["**Abstain** until marriage, as the faiths teach","Stay **faithful** in marriage","Never share razors, needles or blades","Get tested and treated early at a clinic","Avoid alcohol and drugs, which lead to risky choices","Talk to a trusted adult about questions"]},
    {k:"rule"},
    {k:"h3", t:"Compassion, Not Stigma"},
    {k:"p", t:"Jesus touched and healed the man with leprosy when others kept away (Mark 1:40-42). The Prophet taught Muslims to visit the sick. People living with HIV deserve love, friendship and support, not rejection."}
  ],
  terms:[
    {t:"ART", d:"antiretroviral therapy: medicine that controls HIV", x:"ART helps people with HIV live long lives."},
    {t:"myth", d:"a false belief many people hold", x:"It is a myth that HIV spreads by handshakes."},
    {t:"testing", d:"a medical check to find out whether a person has an infection", x:"Testing is free at many clinics."},
    {t:"casual contact", d:"everyday contact such as hugging, shaking hands or sharing a cup", x:"HIV does not spread through casual contact."},
    {t:"mother-to-child transmission", d:"passing an infection from mother to baby", x:"Medicine reduces mother-to-child transmission."},
    {t:"leprosy", d:"an infectious disease people in the Bible feared and shunned", x:"Jesus healed a man with leprosy."}
  ],
  facts:[
    {q:"Name three ways HIV is spread.", a:"Through blood, sexual contact and from mother to child."},
    {q:"Why is testing important?", a:"Many STIs have no signs, and early testing leads to early treatment."},
    {q:"What example did Jesus set toward the sick?", a:"He touched and healed the man with leprosy instead of rejecting him (Mark 1:40-42)."},
    {q:"Give four ways to stay safe from STIs.", a:"Abstain, stay faithful in marriage, never share blades or needles, and get tested and treated early."}
  ],
  tf:[
    {s:"You can get HIV by eating from the same plate.", a:"false", why:"HIV does not spread through casual contact."},
    {s:"ART medicine helps people with HIV live long lives.", a:"true", why:"ART controls the virus, although it does not cure it."}
  ],
  worked:[
    {q:"A classmate is teased because her father has HIV. How should the class respond?",
     steps:["Correct the myth: HIV does not spread by casual contact","Name the wrong: stigma and teasing","Apply the teaching: Mark 1:40-42; Matthew 7:12","Act: stop the teasing, include her and tell the teacher"],
     a:"Stop the teasing, correct the false belief and include her. Compassion is what the faiths require."},
    {q:"A friend says herbs from a street seller can cure HIV. What do you tell him?",
     steps:["Check the claim: there is no cure","State the fact: ART controls HIV","Explain the risk: stopping treatment can be deadly","Point him to a clinic and a trusted adult"],
     a:"The claim is false. HIV is managed with ART from a clinic, and prayer and care support the treatment but never replace it."}
  ]
},

{ grade:7, period:"VI",
  study:[
    {k:"rule"},
    {k:"h3", t:"Peace in the Holy Books"},
    {k:"bul", items:["\"Blessed are the peacemakers, for they will be called children of God\" (Matthew 5:9)","\"If they incline to peace, then incline to it also\" (Qur'an 8:61)","\"Live in peace with everyone, as far as it depends on you\" (Romans 12:18)","The Muslim greeting **As-salamu alaykum** means \"Peace be upon you\"","The African proverb: \"When two elephants fight, it is the grass that suffers\""]},
    {k:"rule"},
    {k:"h3", t:"Liberia's Journey to Peace"},
    {k:"p", t:"Liberia suffered civil wars from 1989 to 2003. Christian and Muslim leaders formed the **Inter-Faith Mediation Committee**, and women of both faiths, led by **Leymah Gbowee**, prayed and protested for peace. The war ended with the peace agreement of 2003. Liberians celebrate peace and remember the cost of war."},
    {k:"rule"},
    {k:"h3", t:"Being a Peacemaker Every Day"},
    {k:"num", items:["Control your anger (James 1:19-20)","Listen to both sides","Use kind words instead of insults","Share fairly","Include people who are left out","Ask adults to help settle serious quarrels"]}
  ],
  terms:[
    {t:"peacemaker", d:"a person who brings people back to peace", x:"Leymah Gbowee is a peacemaker."},
    {t:"civil war", d:"a war between groups within the same country", x:"Liberia's civil war ended in 2003."},
    {t:"As-salamu alaykum", d:"the Muslim greeting \"Peace be upon you\"", x:"He greeted us with As-salamu alaykum."},
    {t:"Inter-Faith Mediation Committee", d:"Christian and Muslim leaders who worked for peace in Liberia's war", x:"The Inter-Faith Mediation Committee called for a ceasefire."},
    {t:"anger management", d:"controlling angry feelings so they do not cause harm", x:"Counting to ten helps anger management."},
    {t:"ceasefire", d:"an agreement to stop fighting", x:"The ceasefire saved many lives."}
  ],
  facts:[
    {q:"What does Matthew 5:9 promise peacemakers?", a:"They will be called children of God."},
    {q:"What does As-salamu alaykum mean?", a:"Peace be upon you."},
    {q:"Who led the women's movement for peace in Liberia?", a:"Leymah Gbowee, with Christian and Muslim women."},
    {q:"Give four ways to be a peacemaker every day.", a:"Control anger, listen to both sides, use kind words and share fairly. Also include people who are left out."}
  ],
  tf:[
    {s:"Christian and Muslim leaders worked together for peace in Liberia.", a:"true", why:"They formed the Inter-Faith Mediation Committee."},
    {s:"\"When two elephants fight, it is the grass that suffers\" means war harms ordinary people.", a:"true", why:"Innocent people suffer most in conflict."}
  ],
  worked:[
    {q:"Two groups of boys argue over the football field and start pushing. Show how a peacemaker stops it.",
     steps:["Stay calm and ask both groups to step back","Listen to each side","Find a fair solution: share time or play together","Ask a teacher to help if the pushing continues","Agree on rules for next time"],
     a:"Calm them down, listen, share the field fairly and get an adult if needed. Fairness keeps the peace."},
    {q:"Why did Liberia's peace need BOTH Christians and Muslims?",
     steps:["Both communities suffered in the war","Joint leaders were trusted by more people","Unity showed religion was not the cause of the war","Shared teaching: Matthew 5:9; Qur'an 8:61"],
     a:"Working together, the faiths reached everyone and showed that peace is a shared religious duty."}
  ]
},

/* ================================ GRADE 8 ================================ */
{ grade:8, period:"I",
  study:[
    {k:"rule"},
    {k:"h3", t:"Effects of Substance Abuse on the Family and Nation"},
    {k:"table", head:["Level","Effects"], rows:[
      ["Individual","Illness, mental problems, school drop-out, crime, early death"],
      ["Family","Quarrels, violence, poverty, broken homes, shame"],
      ["Community","Theft, insecurity, loss of young workers"],
      ["Nation","High health costs, lost productivity, weak development"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Healthy Alternatives"},
    {k:"bul", items:["Sports such as football, kickball and athletics","Music, drama and art clubs","Youth fellowships in church or mosque","Learning a trade or skill","Reading and study groups","Volunteering in the community"]},
    {k:"p", t:"\"Do not be overcome by evil, but overcome evil with good\" (Romans 12:21). Keeping busy with good activities protects young people from temptation."}
  ],
  terms:[
    {t:"productivity", d:"the amount of useful work people do", x:"Drug abuse lowers national productivity."},
    {t:"alternative", d:"another, better choice", x:"Sport is a healthy alternative."},
    {t:"drop-out", d:"a pupil who leaves school before finishing", x:"Drug abuse leads many to become drop-outs."},
    {t:"insecurity", d:"lack of safety in a community", x:"Drug-related theft causes insecurity."},
    {t:"fellowship", d:"friendship and support among believers", x:"The youth fellowship meets on Saturdays."},
    {t:"idleness", d:"having nothing useful to do", x:"Idleness can lead to temptation."}
  ],
  facts:[
    {q:"Give two effects of substance abuse on the family.", a:"Quarrels and violence, and poverty. Broken homes are another."},
    {q:"How does substance abuse harm the nation?", a:"High health costs, lost productivity and weak development."},
    {q:"Name four healthy alternatives to drugs.", a:"Sports, music and drama clubs, youth fellowships and learning a trade."},
    {q:"What does Romans 12:21 teach?", a:"Overcome evil with good."}
  ],
  tf:[
    {s:"Substance abuse affects only the user.", a:"false", why:"It harms the family, the community and the nation."},
    {s:"Keeping busy with good activities helps prevent drug abuse.", a:"true", why:"Idleness increases temptation."}
  ],
  worked:[
    {q:"Your community has many idle youths using drugs. Plan a faith-based response.",
     steps:["Meet with the pastor, imam, elders and youth leaders","Start activities: a football league, skills training and a drama club","Hold talks on the harm of drugs with health workers","Link addicts to counselling and rehabilitation","Review progress monthly"],
     a:"Joint activities, education and support for addicts replace idleness with purpose."},
    {q:"Trace how one boy's drug use can affect the whole nation.",
     steps:["He leaves school and cannot work","His family spends money on his problems","He may steal, making the community unsafe","Many such youths mean fewer skilled workers for Liberia"],
     a:"One person's abuse spreads outward to the family, the community and the nation."}
  ]
},

{ grade:8, period:"II",
  study:[
    {k:"rule"},
    {k:"h3", t:"Conflict Styles"},
    {k:"table", head:["Style","What the person does","Result"], rows:[
      ["Avoiding","Runs away from the problem","The problem stays"],
      ["Fighting","Uses force or insults to win","Anger and harm grow"],
      ["Giving in","Always lets the other win","Resentment builds"],
      ["Compromise","Each side gives a little","Partial agreement"],
      ["Collaborating","Both work together for a solution good for all","Best and longest-lasting peace"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Examples of Conflict Resolution in the Holy Books"},
    {k:"bul", items:["**Abraham and Lot** — Abraham let Lot choose his land first to end the quarrel of their herdsmen (Genesis 13:8-9)","**The Council of Jerusalem** — the apostles met, listened and agreed (Acts 15)","**The Black Stone** — the young Muhammad settled a quarrel between clans by placing the stone on a cloth so that every clan leader could lift it together","**Matthew 18:15-17** — first speak privately, then with witnesses, then before the community"]},
    {k:"rule"},
    {k:"h3", t:"Using I-Statements"},
    {k:"p", t:"Say \"**I feel** hurt **when** my things are taken **because** I need them\" instead of \"You are a thief!\" I-statements describe the problem without attacking the person."}
  ],
  terms:[
    {t:"avoiding", d:"running away from a conflict instead of solving it", x:"Avoiding left the problem unsolved."},
    {t:"collaborating", d:"working together to find a solution good for everyone", x:"Collaborating ended the quarrel."},
    {t:"I-statement", d:"a way of speaking that describes your feelings without blaming", x:"\"I feel upset when...\" is an I-statement."},
    {t:"resentment", d:"bitter feeling about being treated unfairly", x:"Giving in every time causes resentment."},
    {t:"win-win", d:"a solution where both sides gain", x:"Sharing the field was a win-win."},
    {t:"witness", d:"a person who sees or confirms something", x:"Matthew 18:16 speaks of taking witnesses."}
  ],
  facts:[
    {q:"Name the five conflict styles.", a:"Avoiding, fighting, giving in, compromise and collaborating."},
    {q:"How did Abraham settle the quarrel with Lot?", a:"He let Lot choose his land first to keep the peace (Genesis 13:8-9)."},
    {q:"How did the young Muhammad settle the quarrel over the Black Stone?", a:"He put it on a cloth so every clan leader could lift it together."},
    {q:"Give an example of an I-statement.", a:"\"I feel hurt when my things are taken because I need them.\""}
  ],
  tf:[
    {s:"Fighting is the best way to end a conflict.", a:"false", why:"Fighting increases anger and harm. Collaborating lasts longest."},
    {s:"Matthew 18:15 says to speak to the person privately first.", a:"true", why:"The first step is a private conversation."}
  ],
  worked:[
    {q:"Two sisters quarrel over who uses the family phone. Solve it by collaborating.",
     steps:["Each explains her need: homework for one, calling a friend for the other","Find the shared interest: both need some time","Create options: a timetable, or homework first","Agree and write down the plan","Check after a week"],
     a:"A shared timetable meets both needs, so both win."},
    {q:"Rewrite \"You always spoil my things!\" as an I-statement.",
     steps:["Name the feeling: upset","Name the action: my book was torn","Give the reason: I need it for school","Add a request"],
     a:"\"I feel upset when my book gets torn because I need it for school. Please ask before you use it.\""}
  ]
},

{ grade:8, period:"III",
  study:[
    {k:"rule"},
    {k:"h3", t:"Teenage Pregnancy — Causes and Effects"},
    {k:"table", head:["Causes","Effects"], rows:[
      ["Peer pressure and curiosity","Leaving school early"],
      ["Lack of parental guidance","Health risks for young mother and baby"],
      ["Poverty and gifts from older men (transactional sex)","Poverty for mother and child"],
      ["Films, songs and phones showing wrong values","Shame, stress and broken relationships"],
      ["Alcohol and drugs","Unplanned responsibilities too early"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Protecting Yourself"},
    {k:"num", items:["Set your boundaries before you face pressure","Avoid being alone with someone in private places","Say no firmly and leave","Do not accept gifts that come with conditions","Talk to parents, a counsellor or a religious leader","Report abuse: sexual abuse of a minor is a crime in Liberia"]},
    {k:"p", t:"Joseph ran away from Potiphar's wife (Genesis 39:12; Qur'an 12:23-25). Running from temptation is wisdom, not weakness."}
  ],
  terms:[
    {t:"teenage pregnancy", d:"pregnancy in a girl aged 13 to 19", x:"Teenage pregnancy often ends schooling."},
    {t:"boundary", d:"a limit a person sets on what they will do", x:"Set your boundaries early."},
    {t:"transactional sex", d:"sex exchanged for money, gifts or favours", x:"Transactional sex exploits young people."},
    {t:"sexual abuse", d:"forcing or pressuring someone into sexual acts", x:"Sexual abuse must be reported."},
    {t:"minor", d:"a person under eighteen", x:"The law protects minors."},
    {t:"temptation", d:"a strong pull toward doing wrong", x:"Joseph fled from temptation."}
  ],
  facts:[
    {q:"Give three causes of teenage pregnancy.", a:"Peer pressure, lack of parental guidance and poverty with gifts from older men."},
    {q:"What did Joseph do when tempted by Potiphar's wife?", a:"He ran away (Genesis 39:12; Qur'an 12:23-25)."},
    {q:"Give four ways to protect yourself.", a:"Set boundaries, avoid private places alone, say no and leave, and refuse gifts with conditions. Talk to trusted adults and report abuse."},
    {q:"What is a minor?", a:"A person under eighteen."}
  ],
  tf:[
    {s:"Accepting expensive gifts from older people is always harmless.", a:"false", why:"Gifts with conditions can lead to exploitation."},
    {s:"Sexual abuse of a minor is a crime in Liberia.", a:"true", why:"The law protects minors and punishes abusers."}
  ],
  worked:[
    {q:"A man offers Mariama phone credit and school fees if she visits him at night. What should she do?",
     steps:["Recognise the danger: a gift with conditions","Refuse firmly","Tell a parent, teacher or religious leader","Report to the police or a child protection officer if he persists","Seek honest help for school fees from family, scholarships or church and mosque aid"],
     a:"Refuse, tell trusted adults and report him. She should seek honest help for her fees."},
    {q:"Explain why chastity protects a young person's future.",
     steps:["Health: avoids STIs and early pregnancy","Education: lets her finish school","Faith: honours God (1 Corinthians 6:18-20; Qur'an 17:32)","Dignity: self-respect and a good name"],
     a:"Chastity guards health, education, faith and dignity, keeping the future open."}
  ]
},

{ grade:8, period:"IV",
  study:[
    {k:"rule"},
    {k:"h3", t:"Symbols of Reconciliation"},
    {k:"table", head:["Tradition","Symbol or act"], rows:[
      ["Christianity","The cross; Holy Communion; the sign of peace (handshake) in the service"],
      ["Islam","Tawbah (turning back to God); the greeting of salaam; embracing after Eid prayer"],
      ["African Traditional Religion","Breaking kola nut; sharing water or palm wine; a peace meal; planting a tree"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Reconciliation after Wrongdoing at Home"},
    {k:"p", t:"When a child disobeys, reconciliation means admitting the wrong, accepting correction, apologising and doing better. Parents in turn should correct with love and not provoke their children (Ephesians 6:4). The Qur'an commands kindness to parents: do not even say \"uff\" to them (Qur'an 17:23)."}
  ],
  terms:[
    {t:"sign of peace", d:"a handshake or greeting exchanged in Christian worship", x:"We shared the sign of peace."},
    {t:"peace meal", d:"a shared meal that seals reconciliation", x:"The families held a peace meal."},
    {t:"correction", d:"showing someone their fault so they can improve", x:"Accept correction humbly."},
    {t:"uff", d:"a word of impatience, which the Qur'an forbids saying to parents", x:"Do not say uff to your parents."},
    {t:"provoke", d:"to make someone angry on purpose", x:"Parents must not provoke their children."},
    {t:"cross", d:"the Christian symbol of Christ's death that reconciles people to God", x:"The cross is a sign of reconciliation."}
  ],
  facts:[
    {q:"Name one reconciliation symbol from each tradition.", a:"Christianity: the cross or Holy Communion. Islam: the greeting of salaam or tawbah. Tradition: breaking kola nut or a peace meal."},
    {q:"What does Ephesians 6:4 tell parents?", a:"Do not provoke your children; bring them up with loving instruction."},
    {q:"What does Qur'an 17:23 teach about parents?", a:"Be kind to them and do not even say \"uff\" to them."},
    {q:"Give the steps of reconciliation after disobeying a parent.", a:"Admit the wrong, accept correction, apologise and do better."}
  ],
  tf:[
    {s:"Breaking kola nut can be a sign of peace in Liberian tradition.", a:"true", why:"It welcomes guests and seals agreements."},
    {s:"Reconciliation is the duty of children only, never of parents.", a:"false", why:"Parents must also correct with love (Ephesians 6:4)."}
  ],
  worked:[
    {q:"James came home late and lied about where he was. Show how he can be reconciled with his parents.",
     steps:["Admit the lie and the lateness","Apologise sincerely","Accept the correction or punishment","Promise and show better behaviour","Parents forgive and restore trust gradually"],
     a:"Honest confession, apology, accepting correction and changed behaviour restore trust."},
    {q:"Compare how Christians and Muslims describe turning back to God.",
     steps:["Christianity: repentance and faith in Christ (Acts 3:19)","Islam: tawbah, sincere turning back to God, Al-Ghaffar the Forgiving (Qur'an 39:53)","Common ground: regret, stopping the sin, seeking mercy"],
     a:"Both require sincere regret, turning from sin and trust in God's mercy, through Christ for Christians and by tawbah for Muslims."}
  ]
},

{ grade:8, period:"V",
  study:[
    {k:"rule"},
    {k:"h3", t:"The Parable of the Talents"},
    {k:"p", t:"In Matthew 25:14-30 a master gave his servants five, two and one talents. The first two traded and doubled theirs; the third buried his out of fear. The master praised the faithful and rebuked the lazy one. **Lesson:** God expects us to use and grow what He gives us."},
    {k:"rule"},
    {k:"h3", t:"Managing Money and Time — Simple Tools"},
    {k:"table", head:["Tool","How it works"], rows:[
      ["Weekly budget","Write income; give, save, then spend on needs before wants"],
      ["Savings box or susu","Put aside a little regularly; a susu club lets members save together"],
      ["Daily timetable","Plan time for prayer, school, chores, study, rest and play"],
      ["To-do list","Write tasks and tick them when done"]
    ]},
    {k:"p", t:"\"By time! Indeed, mankind is in loss, except those who believe and do righteous deeds\" (Qur'an 103). \"Teach us to number our days\" (Psalm 90:12)."}
  ],
  terms:[
    {t:"talent", d:"in the parable, a large sum of money; today, a gift or ability", x:"Use your talents for God."},
    {t:"susu", d:"a group savings club common in West Africa", x:"Her mother saves in a susu."},
    {t:"timetable", d:"a plan showing when each task will be done", x:"A timetable prevents wasted time."},
    {t:"needs", d:"things we must have, such as food, shelter and school fees", x:"Pay for needs first."},
    {t:"wants", d:"things we would like but can live without", x:"New shoes may be a want."},
    {t:"procrastination", d:"delaying tasks that should be done now", x:"Procrastination wastes time."}
  ],
  facts:[
    {q:"What is the lesson of the parable of the talents?", a:"God expects us to use and grow the gifts He gives. Laziness is rebuked."},
    {q:"Distinguish needs from wants.", a:"Needs are essential, such as food and fees. Wants are things we can live without."},
    {q:"What is a susu?", a:"A group savings club."},
    {q:"What does Qur'an 103 teach about time?", a:"Mankind is in loss except those who believe, do good and encourage truth and patience."}
  ],
  tf:[
    {s:"The servant who buried his talent was praised.", a:"false", why:"He was rebuked for laziness (Matthew 25:26)."},
    {s:"Stewardship includes how we use our time.", a:"true", why:"Psalm 90:12; Qur'an 103."}
  ],
  worked:[
    {q:"Kebeh receives L$1,000 pocket money each week. She gives 10%, saves 20% and spends the rest. How much does she spend, and how much has she saved after 4 weeks?",
     steps:["Giving = 1,000 × 0.10 = 100","Saving = 1,000 × 0.20 = 200","Spending = 1,000 − 100 − 200 = 700","Savings after 4 weeks = 200 × 4 = 800"],
     a:"She spends L$700 a week and has saved L$800 after 4 weeks. Planning lets her give, save and spend wisely."},
    {q:"Make a school-day timetable that shows good stewardship of time.",
     steps:["5:30 — prayer and chores","7:30–2:00 — school","3:00 — rest and lunch","4:00 — play or sport","6:00 — study","8:00 — family time and prayer","9:00 — sleep"],
     a:"A balanced timetable includes worship, school, chores, study, rest and play."}
  ]
},

{ grade:8, period:"VI",
  study:[
    {k:"rule"},
    {k:"h3", t:"The Five Pillars and the Ten Commandments"},
    {k:"table", head:["Five Pillars of Islam","Moral implication"], rows:[
      ["Shahadah (declaration of faith)","Loyalty to one God"],
      ["Salah (prayer five times a day)","Discipline and remembering God"],
      ["Zakat (almsgiving)","Care for the poor"],
      ["Sawm (fasting in Ramadan)","Self-control and sympathy for the hungry"],
      ["Hajj (pilgrimage to Makkah)","Equality and unity of all believers"]
    ]},
    {k:"p", t:"The **Ten Commandments** (Exodus 20:1-17) begin with duties to God — no other gods, no idols, honour God's name and keep the Sabbath — and continue with duties to people: honour parents, do not murder, commit adultery, steal, lie or covet."},
    {k:"rule"},
    {k:"h3", t:"Liberian Proverbs with Moral Lessons"},
    {k:"bul", items:["\"One finger cannot pick up a stone\": cooperation","\"Small small, the chicken drinks water\": patience and steady effort","\"The monkey that does not listen will be shot\": obey good advice","\"When your neighbour's house is on fire, carry water\": help others in trouble"]}
  ],
  terms:[
    {t:"Five Pillars", d:"the five basic duties of Islam", x:"Zakat is one of the Five Pillars."},
    {t:"Ten Commandments", d:"the ten laws God gave through Moses (Exodus 20)", x:"\"Do not steal\" is one of the Ten Commandments."},
    {t:"shahadah", d:"the Muslim declaration that there is no god but God and Muhammad is His messenger", x:"The shahadah is the first pillar."},
    {t:"sawm", d:"fasting, especially in Ramadan", x:"Sawm teaches self-control."},
    {t:"covet", d:"to desire strongly what belongs to someone else", x:"Do not covet your neighbour's things."},
    {t:"cooperation", d:"working together", x:"The proverb teaches cooperation."}
  ],
  facts:[
    {q:"Name the Five Pillars of Islam.", a:"Shahadah, salah, zakat, sawm and hajj."},
    {q:"Name four commandments about duties to people.", a:"Honour parents, do not murder, do not steal and do not lie. Do not commit adultery and do not covet."},
    {q:"What moral lesson does fasting teach?", a:"Self-control and sympathy for the hungry."},
    {q:"Explain \"One finger cannot pick up a stone.\"", a:"People achieve more by working together."}
  ],
  tf:[
    {s:"Hajj teaches the equality of believers.", a:"true", why:"Pilgrims wear simple white clothes and worship together."},
    {s:"The Ten Commandments only deal with duties to God.", a:"false", why:"Most deal with duties to people."}
  ],
  worked:[
    {q:"Show how one Islamic pillar, one commandment and one proverb teach the same value of caring for others.",
     steps:["Zakat: giving to the poor","Commandment: do not steal or covet, so respect others' goods","Proverb: \"When your neighbour's house is on fire, carry water\"","Common value: care for your neighbour"],
     a:"All three teach care and respect for others, a value shared by the three traditions."},
    {q:"A pupil fasting in Ramadan is offered food in class by a friend who is joking. How should both behave?",
     steps:["The fasting pupil politely explains the fast","The friend respects the fast and stops","Both learn: respect for religious practice","Classmates avoid eating in front of him where possible"],
     a:"Politeness and respect on both sides. Honouring another's religious practice builds friendship."}
  ]
},

/* ================================ GRADE 9 ================================ */
{ grade:9, period:"I",
  study:[
    {k:"rule"},
    {k:"h3", t:"The Beatitudes and the Prophet's Character"},
    {k:"table", head:["Teaching","Source","Meaning"], rows:[
      ["Blessed are the poor in spirit","Matthew 5:3","The humble belong to God's kingdom"],
      ["Blessed are the merciful","Matthew 5:7","Mercy receives mercy"],
      ["Blessed are the peacemakers","Matthew 5:9","Peacemakers are children of God"],
      ["The best of you are the best in character","Hadith (Bukhari)","Good conduct is the true measure of faith"],
      ["He who is not merciful will not be shown mercy","Hadith (Bukhari and Muslim)","Mercy to others is required"],
      ["Al-Amin (the Trustworthy)","Sirah","The Prophet was known for honesty even before his call"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Parables and Their Lessons"},
    {k:"bul", items:["**The Good Samaritan** (Luke 10:25-37): love your neighbour across tribe and religion","**The Sower** (Matthew 13): receive God's word with a good heart","**The Lost Sheep** (Luke 15:3-7): God seeks the lost","**The Rich Fool** (Luke 12:16-21): wealth without God is foolish"]}
  ],
  terms:[
    {t:"Beatitudes", d:"the blessings Jesus taught at the start of the Sermon on the Mount", x:"\"Blessed are the merciful\" is a Beatitude."},
    {t:"Al-Amin", d:"\"the Trustworthy\", a title of Prophet Muhammad", x:"The Makkans called him Al-Amin."},
    {t:"Good Samaritan", d:"the man in Jesus' parable who helped a wounded stranger", x:"Be a Good Samaritan."},
    {t:"character", d:"the moral qualities of a person", x:"Good character is the measure of faith."},
    {t:"mercy", d:"kindness to someone who deserves punishment or needs help", x:"God loves mercy."},
    {t:"humility", d:"not being proud", x:"The poor in spirit show humility."}
  ],
  facts:[
    {q:"Give two Beatitudes.", a:"Blessed are the merciful; blessed are the peacemakers (Matthew 5:7, 9)."},
    {q:"Why was Muhammad called Al-Amin?", a:"Because of his honesty and trustworthiness, even before his call."},
    {q:"What is the lesson of the Good Samaritan?", a:"Love your neighbour, including people of another tribe or religion."},
    {q:"What does the Hadith say about the best people?", a:"The best of you are those with the best character."}
  ],
  tf:[
    {s:"The Good Samaritan helped a stranger from another group.", a:"true", why:"Samaritans and Jews were divided, yet he helped."},
    {s:"In Islam faith is measured only by ritual, not character.", a:"false", why:"The Hadith says the best are those best in character."}
  ],
  worked:[
    {q:"A student sees a pupil from another tribe hurt on the road, and his friends say, \"Leave him, he is not our people.\" What should he do?",
     steps:["Recall the Good Samaritan (Luke 10:33-37)","Recall the Hadith on mercy","Act: help the injured pupil and call an adult or health worker","Correct his friends kindly: everyone is our neighbour"],
     a:"Help him. Faith and morality make every person our neighbour, whatever their tribe."},
    {q:"Compare one teaching of Jesus and one of Prophet Muhammad on mercy.",
     steps:["Jesus: \"Blessed are the merciful, for they will receive mercy\" (Matthew 5:7)","Muhammad: \"He who is not merciful will not be shown mercy\"","Common point: mercy to others and mercy from God are linked"],
     a:"Both teach that those who show mercy receive mercy. It is a shared moral principle."}
  ]
},

{ grade:9, period:"II",
  study:[
    {k:"rule"},
    {k:"h3", t:"Covenants in the Holy Books"},
    {k:"table", head:["Covenant","Sign","Promise"], rows:[
      ["With Noah (Nuh)","The rainbow (Genesis 9:13)","Never again to destroy the earth by flood"],
      ["With Abraham (Ibrahim)","Circumcision (Genesis 17)","A great nation and blessing to all peoples"],
      ["With Moses (Musa)","The Ten Commandments","God's people who keep His law"],
      ["The New Covenant","The Lord's Supper (Luke 22:20)","Forgiveness through Christ"],
      ["The covenant of the children of Adam","Qur'an 7:172","All souls testify \"You are our Lord\""]
    ]},
    {k:"rule"},
    {k:"h3", t:"Keeping Commitments in Daily Life"},
    {k:"bul", items:["Keep promises to friends and family (Matthew 5:37; Qur'an 17:34 \"fulfil every promise\")","Be faithful in attendance at school and worship","Finish tasks you agree to do","Keep secrets entrusted to you","Stand by your faith when mocked (Daniel 1; the youths of the Cave, Qur'an 18)"]}
  ],
  terms:[
    {t:"rainbow", d:"the sign of God's covenant with Noah", x:"The rainbow reminds us of God's promise."},
    {t:"circumcision", d:"the sign of the covenant with Abraham", x:"Genesis 17 describes circumcision."},
    {t:"New Covenant", d:"the Christian covenant of forgiveness through Christ", x:"The Lord's Supper remembers the New Covenant."},
    {t:"loyalty", d:"being faithful to a person, promise or cause", x:"Loyalty keeps friendships strong."},
    {t:"reliability", d:"being someone others can depend on", x:"Reliability builds trust."},
    {t:"steadfastness", d:"remaining firm in faith and duty", x:"Daniel showed steadfastness."}
  ],
  facts:[
    {q:"What was the sign of God's covenant with Noah?", a:"The rainbow (Genesis 9:13)."},
    {q:"What does Qur'an 17:34 say about promises?", a:"Fulfil every promise, for every promise will be questioned about."},
    {q:"Give three ways to keep commitments in daily life.", a:"Keep promises, finish agreed tasks and keep secrets entrusted to you."},
    {q:"Name two young people who stayed committed to God under pressure.", a:"Daniel (Daniel 1) and the youths of the Cave (Qur'an 18)."}
  ],
  tf:[
    {s:"God's covenant with Noah was sealed with the rainbow.", a:"true", why:"Genesis 9:13."},
    {s:"Breaking small promises does not matter morally.", a:"false", why:"Qur'an 17:34 and Matthew 5:37 call for keeping every promise."}
  ],
  worked:[
    {q:"You promised to help your grandmother on Saturday, but friends invite you to the beach. Decide.",
     steps:["Identify the commitment: a promise to grandmother","Apply teaching: Matthew 5:37; Qur'an 17:34","Consider the effect: she depends on you","Alternative: go to the beach another day"],
     a:"Keep the promise. Being reliable honours God and your family, and the beach can wait."},
    {q:"Show how God's covenant with Noah demonstrates God's commitment to mankind.",
     steps:["God promised never again to flood the whole earth","He gave a visible sign, the rainbow","The promise has been kept","Lesson: God is faithful, so we should be faithful too"],
     a:"The covenant shows God keeps His promises and teaches us to keep ours."}
  ]
},

{ grade:9, period:"III",
  study:[
    {k:"rule"},
    {k:"h3", t:"National Holidays with Religious Meaning in Liberia"},
    {k:"table", head:["Holiday","Date","Meaning"], rows:[
      ["National Fast and Prayer Day","Second Friday in April","The nation prays and fasts for God's help and forgiveness"],
      ["Thanksgiving Day","First Thursday in November","Thanks to God for His blessings"],
      ["Christmas","25 December","The birth of Jesus Christ"],
      ["Independence Day","26 July","Celebrated with thanksgiving services in churches and mosques"],
      ["Eid al-Fitr and Eid al-Adha","By the Islamic lunar calendar","Muslim festivals now recognised in public life"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Why the Islamic Calendar Moves"},
    {k:"p", t:"The Islamic year follows the moon and has about **354 days**, about 11 days shorter than the 365-day solar year. So Ramadan and the Eids come about 11 days earlier each year on the ordinary calendar. Easter also moves, because it is fixed by the spring full moon."},
    {k:"rule"},
    {k:"h3", t:"Celebrating Together"},
    {k:"p", t:"In Liberia neighbours share food at Christmas and Eid, greet each other and attend each other's celebrations with respect. This sharing strengthens peace and friendship."}
  ],
  terms:[
    {t:"lunar calendar", d:"a calendar based on the moon's cycles", x:"The Islamic calendar is a lunar calendar."},
    {t:"solar calendar", d:"a calendar based on the earth's journey around the sun", x:"The ordinary calendar is a solar calendar."},
    {t:"National Fast and Prayer Day", d:"the Liberian holiday of national prayer, second Friday in April", x:"Churches and mosques were full on National Fast and Prayer Day."},
    {t:"Independence Day", d:"26 July, Liberia's national day", x:"Thanksgiving services are held on Independence Day."},
    {t:"crescent moon", d:"the thin new moon that marks the start of Islamic months", x:"The crescent moon announced Eid."},
    {t:"feast", d:"a large celebratory meal", x:"Families prepared a feast for Christmas."}
  ],
  facts:[
    {q:"When is National Fast and Prayer Day?", a:"The second Friday in April."},
    {q:"When is Thanksgiving Day in Liberia?", a:"The first Thursday in November."},
    {q:"Why does Ramadan come about 11 days earlier each year?", a:"The Islamic lunar year has about 354 days, about 11 fewer than the solar year."},
    {q:"How do Liberians of different faiths share festivals?", a:"They share food, greet each other and attend each other's celebrations respectfully."}
  ],
  tf:[
    {s:"The Islamic year is longer than the solar year.", a:"false", why:"It is about 354 days, shorter than 365."},
    {s:"Liberia has a National Fast and Prayer Day.", a:"true", why:"It is held on the second Friday in April."}
  ],
  worked:[
    {q:"If Eid al-Fitr falls on 20 March one year, about when will it fall the next year?",
     steps:["The lunar year is about 11 days shorter","20 March − 11 days","= about 9 March"],
     a:"About 9 March. The Islamic dates move about 11 days earlier each year."},
    {q:"Your Muslim neighbour brings you food at Eid. How should you respond, and why?",
     steps:["Accept with thanks","Greet them: \"Eid Mubarak\"","Return kindness at Christmas or another time","Reason: sharing builds peace (Romans 12:10; Qur'an 49:13)"],
     a:"Accept gratefully, greet them warmly and return the kindness. Shared celebrations strengthen friendship between faiths."}
  ]
},

{ grade:9, period:"IV",
  study:[
    {k:"rule"},
    {k:"h3", t:"Religious Practices That Promote Health"},
    {k:"table", head:["Practice","Tradition","Health benefit"], rows:[
      ["Ablution (wudu) five times a day","Islam","Cleanliness; fewer germs"],
      ["Avoiding alcohol and pork","Islam","Protects liver and prevents some diseases"],
      ["Sabbath rest","Christianity","Rest reduces stress"],
      ["Fasting in moderation","Christianity and Islam","Self-control; rest for the digestive system"],
      ["Forbidden days for farming","Tradition","Rest for people and the land"],
      ["Prayer and fellowship","All","Hope, reduced stress and social support"]
    ]},
    {k:"rule"},
    {k:"h3", t:"When Religion Is Misused in Health"},
    {k:"bul", items:["Refusing hospital treatment and relying only on prayer or herbs","Rejecting vaccines because of rumours","Hiding the sick during outbreaks such as Ebola","Blaming illness on witchcraft instead of seeking diagnosis"]},
    {k:"p", t:"The traditions teach that God heals through doctors and medicine too: \"God has not sent down a disease without sending down its cure\" (Hadith, Bukhari); Luke, the writer of a Gospel, was a physician (Colossians 4:14)."}
  ],
  terms:[
    {t:"vaccine", d:"a medicine that trains the body to fight a disease", x:"The vaccine prevents measles."},
    {t:"diagnosis", d:"finding out what illness a person has", x:"A diagnosis came before treatment."},
    {t:"physician", d:"a medical doctor", x:"Luke was a physician."},
    {t:"germ", d:"a tiny living thing that can cause disease", x:"Washing removes germs."},
    {t:"moderation", d:"avoiding too much or too little", x:"Eat in moderation."},
    {t:"outbreak", d:"a sudden spread of a disease", x:"The Ebola outbreak began in 2014."}
  ],
  facts:[
    {q:"Give three religious practices that promote health.", a:"Ablution, avoiding alcohol and Sabbath rest. Moderate fasting is another."},
    {q:"Give two ways religion can be misused in health.", a:"Refusing hospital treatment and rejecting vaccines because of rumours."},
    {q:"What does the Hadith say about disease and cure?", a:"God has not sent down a disease without sending down its cure."},
    {q:"Who in the New Testament was a physician?", a:"Luke (Colossians 4:14)."}
  ],
  tf:[
    {s:"The faiths teach that prayer and medicine can work together.", a:"true", why:"The Hadith on cures and Luke the physician show this."},
    {s:"Hiding the sick during an outbreak protects the community.", a:"false", why:"It spreads the disease to others."}
  ],
  worked:[
    {q:"A family refuses to take their child with high fever to the clinic, saying prayer is enough. Advise them.",
     steps:["Respect their faith in prayer","Explain the danger: fever may be malaria, which can kill quickly","Share teaching: God heals through medicine too (Hadith; Colossians 4:14)","Recommend: pray AND go to the clinic now"],
     a:"Pray and take the child to the clinic immediately. Faith and medicine work together."},
    {q:"A rumour says a vaccine causes infertility. How should a young believer respond?",
     steps:["Do not spread it","Check with health workers and official sources","Recall Qur'an 49:6: verify news","Encourage the family to follow reliable advice"],
     a:"Verify with trusted health workers and do not spread rumours. Protecting life is a religious duty."}
  ]
},

{ grade:9, period:"V",
  study:[
    {k:"rule"},
    {k:"h3", t:"Comparing the Ministries"},
    {k:"table", head:["Area","Jesus Christ","Prophet Muhammad","Traditional priest"], rows:[
      ["Call","Baptism in the Jordan (Matthew 3)","First revelation in the cave of Hira (Qur'an 96)","Chosen by lineage, dream or elders"],
      ["Teaching","Parables and the Sermon on the Mount","Qur'an and Hadith","Proverbs, stories and rites"],
      ["Service","Healing, feeding the hungry","Care for orphans and the poor; justice","Healing with herbs; offering prayers for the community"],
      ["Followers","Twelve disciples","The Companions (Sahabah)","Initiates and assistants"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Religious Leaders in Liberia Today"},
    {k:"bul", items:["Lead worship and teach the faith","Counsel families and settle disputes","Run schools, clinics and orphanages","Speak for peace and justice through the Inter-Religious Council of Liberia","Visit the sick, prisoners and the bereaved"]}
  ],
  terms:[
    {t:"Hira", d:"the cave near Makkah where Muhammad received the first revelation", x:"The first revelation came in Hira."},
    {t:"Sahabah", d:"the Companions of Prophet Muhammad", x:"Abu Bakr was one of the Sahabah."},
    {t:"baptism", d:"a Christian rite of washing with water", x:"Jesus was baptised in the Jordan."},
    {t:"Inter-Religious Council of Liberia", d:"a body of Christian and Muslim leaders working for peace and development", x:"The Inter-Religious Council called for calm."},
    {t:"initiate", d:"a person being trained and admitted into a traditional society", x:"The initiates learned from the priest."},
    {t:"counsel", d:"advice given to help someone", x:"The imam gave counsel to the couple."}
  ],
  facts:[
    {q:"Where did Muhammad receive the first revelation?", a:"In the cave of Hira (Qur'an 96)."},
    {q:"How did Jesus' public ministry begin?", a:"With His baptism in the Jordan (Matthew 3)."},
    {q:"Give four works of religious leaders in Liberia today.", a:"Leading worship, counselling families, running schools and clinics, and speaking for peace."},
    {q:"How may a traditional priest be chosen?", a:"By lineage, a dream or the choice of elders."}
  ],
  tf:[
    {s:"The Inter-Religious Council of Liberia brings Christian and Muslim leaders together.", a:"true", why:"It works for peace and development."},
    {s:"Jesus' followers were called the Sahabah.", a:"false", why:"His followers were the disciples. The Sahabah were Muhammad's Companions."}
  ],
  worked:[
    {q:"Using the table, show one way all three ministries served the community.",
     steps:["Jesus healed the sick","Muhammad cared for orphans and the poor","Traditional priests heal with herbs and pray for the community","Common thread: care for people in need"],
     a:"All three ministries served the needy, the sick and the poor. Service is the heart of religious leadership."},
    {q:"Your town is divided after a disputed election. What can religious leaders do?",
     steps:["Meet together across faiths","Call for calm in sermons and khutbahs","Listen to both sides and mediate","Urge lawful complaint through the courts","Organise joint prayer for peace"],
     a:"United religious leaders can calm tensions, mediate and guide people to lawful solutions."}
  ]
},

{ grade:9, period:"VI",
  study:[
    {k:"rule"},
    {k:"h3", t:"Chastity and Modern Media"},
    {k:"bul", items:["Films, songs and social media often make immorality look normal and harmless","Pornography damages the mind, relationships and respect for others","Sexting or sharing private pictures can be illegal and can follow a person for years","Guard your eyes and your phone (Job 31:1; Qur'an 24:30-31 on lowering the gaze)"]},
    {k:"rule"},
    {k:"h3", t:"A Personal Plan for Purity"},
    {k:"table", head:["Step","Example"], rows:[
      ["Decide early","\"I will wait until marriage\""],
      ["Choose friends wisely","Friends who share your values"],
      ["Avoid risky places","Video clubs at night, isolated rooms"],
      ["Fill your time","Sport, study, service, worship"],
      ["Have someone to talk to","Parent, counsellor, pastor or imam"],
      ["Restart after failure","Repent, seek forgiveness and begin again (1 John 1:9; Qur'an 39:53)"]
    ]}
  ],
  terms:[
    {t:"pornography", d:"images or videos showing sexual acts, meant to arouse", x:"Pornography harms the mind."},
    {t:"sexting", d:"sending sexual messages or pictures by phone", x:"Sexting can be illegal for minors."},
    {t:"lowering the gaze", d:"the Qur'anic teaching to guard the eyes from what is immoral", x:"Lowering the gaze protects the heart."},
    {t:"purity", d:"being clean in thought and action", x:"Purity honours God."},
    {t:"media", d:"films, music, television, internet and social networks", x:"Choose media wisely."},
    {t:"new beginning", d:"starting afresh after repentance", x:"God offers a new beginning."}
  ],
  facts:[
    {q:"What does Qur'an 24:30-31 teach believers?", a:"To lower their gaze and guard their modesty."},
    {q:"Why is sexting dangerous?", a:"Pictures can spread, can be illegal for minors and can harm a person for years."},
    {q:"List four steps of a personal plan for purity.", a:"Decide early, choose friends wisely, avoid risky places and fill your time with good activities. Have someone to talk to."},
    {q:"What if a person fails?", a:"Repent, seek forgiveness and begin again (1 John 1:9; Qur'an 39:53)."}
  ],
  tf:[
    {s:"Sharing private pictures by phone is always harmless.", a:"false", why:"It can be illegal, it spreads and it causes lasting harm."},
    {s:"The faiths teach that a person who fails can repent and begin again.", a:"true", why:"1 John 1:9; Qur'an 39:53."}
  ],
  worked:[
    {q:"A boyfriend asks a girl to send private pictures \"to prove her love\". What should she do?",
     steps:["Recognise the pressure and the danger","Refuse: real love does not demand this","Know the law: images of minors are illegal","Tell a trusted adult","Consider ending a relationship built on pressure"],
     a:"Refuse, tell a trusted adult and value herself. Love respects; it does not pressure."},
    {q:"A student feels ashamed after an immoral act and thinks God has rejected him. Counsel him.",
     steps:["Acknowledge the wrong honestly","Show the promise of forgiveness: 1 John 1:9; Qur'an 39:53","Encourage repentance and a new plan for purity","Connect him with a counsellor, pastor or imam"],
     a:"God forgives the truly repentant. He should confess, turn away from the act, make a plan and seek support."}
  ]
}

];

/* Merge each supplement into its Junior High unit (grade + period). */
(function () {
  if (typeof RM_CURRICULUM_79 === "undefined") return;
  RM_MORE_79.forEach(function (m) {
    var u = RM_CURRICULUM_79.filter(function (x) { return x.grade === m.grade && x.period === m.period; })[0];
    if (!u) return;
    if (m.study && m.study.length) {
      var at = -1;
      u.study.forEach(function (b, i) { if (b.k === "h3" && /^Assignment/.test(b.t)) at = i; });
      if (at > 0 && u.study[at - 1].k === "rule") at -= 1;
      if (at < 0) at = u.study.length;
      u.study.splice.apply(u.study, [at, 0].concat(m.study));
    }
    ["terms", "facts", "tf", "worked"].forEach(function (k) {
      if (!m[k] || !m[k].length) return;
      u[k] = (u[k] || []).concat(m[k]);
    });
  });
})();
