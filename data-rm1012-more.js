/* Senior High RELIGIOUS & MORAL EDUCATION — depth supplement, Grades 10–12.
   Brings each unit in data-rm1012.js closer to the depth of the Physics
   units (data-ph.js): extra course-text sections, a larger glossary, more
   recall and true/false items, and a `worked[]` bank — the RME counterpart
   of Physics' worked calculations: a moral or scriptural problem solved
   step by step {q, steps[], a}, rendered by GEN_RM as the
   "Worked moral reasoning" sheet.

   Each entry is matched to its unit by grade + period. Study blocks are
   inserted just before the unit's "Assignment" heading so the assignment
   stays last. Same multi-religious voice and offline rule as the base file:
   Scripture references are text references only. */

var RM_MORE_1012 = [

/* ================================ GRADE 10 ================================ */
{ grade:10, period:"I",
  study:[
    {k:"rule"},
    {k:"h3", t:"God Beyond Our Full Understanding"},
    {k:"p", t:"Every tradition teaches that God is **transcendent** — greater than and above creation — and also **immanent** — near to and active within it. \"My thoughts are not your thoughts\" (Isaiah 55:8-9); \"There is nothing like unto Him\" (Qur'an 42:11); yet He is \"nearer to him than his jugular vein\" (Qur'an 50:16), and \"in Him we live and move and have our being\" (Acts 17:28)."},
    {k:"table", head:["Idea","Meaning","Danger if held alone"], rows:[
      ["Transcendence","God is above and beyond creation","God seems distant and uncaring"],
      ["Immanence","God is present and active in creation","God is confused with nature itself"],
      ["Both together","God is above all and near to all","The balanced teaching of the three traditions"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Wrong Ideas About God"},
    {k:"bul", items:[
      "**Atheism** — the belief that there is no God. The believer answers from creation, conscience and revelation (Psalm 14:1; Romans 1:20).",
      "**Agnosticism** — the view that we cannot know whether God exists.",
      "**Polytheism** — belief in many equal gods; rejected by all three traditions, which hold one Supreme Creator.",
      "**Pantheism** — the idea that everything *is* God; the traditions teach that God made nature and is not the same as it.",
      "**Idolatry** — giving to any created thing the worship that belongs to God alone (Exodus 20:3-5; Qur'an 4:48 on shirk)."
    ]},
    {k:"rule"},
    {k:"h3", t:"Knowing God and Living It"},
    {k:"p", t:"The traditions agree that belief about God must shape behaviour. Because God is **all-knowing**, the believer is honest in secret. Because He is **just**, the believer refuses to cheat the weak. Because He is **merciful**, the believer forgives. Because He is **Creator**, the believer respects every person and cares for the earth."}
  ],
  terms:[
    {t:"transcendent", d:"above and beyond creation, not limited by it", x:"The transcendent God is not contained by any temple."},
    {t:"immanent", d:"present and active within creation", x:"The immanent God is near to the one who prays."},
    {t:"atheism", d:"the belief that God does not exist", x:"The psalmist answered atheism in Psalm 14:1."},
    {t:"agnosticism", d:"the view that we cannot know whether God exists", x:"Agnosticism leaves the question open."},
    {t:"polytheism", d:"belief in many gods", x:"The three traditions of Liberia reject polytheism."},
    {t:"pantheism", d:"the belief that everything is God", x:"Pantheism confuses the Creator with creation."},
    {t:"shirk", d:"in Islam, associating partners with God — the gravest sin", x:"Worshipping an idol is shirk."},
    {t:"idolatry", d:"worshipping a created thing instead of God", x:"Loving money above God is a form of idolatry."}
  ],
  facts:[
    {q:"Distinguish transcendence from immanence.", a:"Transcendence means God is above and beyond creation; immanence means He is present and active within it. The traditions hold both together."},
    {q:"What is shirk, and why is it considered serious in Islam?", a:"Associating partners with God; it denies Tawhid, the oneness of God, and Qur'an 4:48 calls it the sin God will not forgive if a person dies unrepentant."},
    {q:"Give two ways a belief about God should change behaviour.", a:"Because God is all-knowing, be honest even in secret; because He is merciful, forgive others."},
    {q:"Explain the difference between atheism and agnosticism.", a:"Atheism says God does not exist; agnosticism says we cannot know whether He exists."}
  ],
  tf:[
    {s:"Pantheism teaches that God and nature are the same thing.", a:"true", why:"That is the definition of pantheism. The three traditions reject it because they teach that God made nature."},
    {s:"A transcendent God cannot be near to people.", a:"false", why:"The traditions teach that God is both transcendent and immanent (Isaiah 55:8-9; Qur'an 50:16)."}
  ],
  worked:[
    {q:"A student argues: \"If God is everywhere, then this tree is God.\" Identify the error and correct it.",
     steps:["Name the claim — this is pantheism","Separate presence from identity: being present in a place is not being the place","Cite the teaching: God created the tree (Genesis 1:11; Qur'an 6:99)","Conclude with the balanced view: God is immanent in creation but transcendent over it"],
     a:"The tree is not God. God is present everywhere, but He is the Creator, not the thing He created."},
    {q:"Use the attributes of God to decide whether it is right to cheat on a test when the teacher is out of the room.",
     steps:["State the choice: cheat or not","Apply omniscience — God sees what is done in secret (Psalm 139:1-4; Qur'an 2:255)","Apply justice — cheating wrongs the honest students","Apply the sovereignty of God — success is His gift, not stolen marks","Decide and give the reason"],
     a:"Do not cheat. The God who knows all things sees it, cheating is unjust to others, and success gained honestly is the only kind that honours God."},
    {q:"Explain how a Christian and a Muslim can agree that God is one, even though they disagree about the Trinity.",
     steps:["State what both affirm: one Creator, no other god (Deuteronomy 6:4; Qur'an 112:1)","State the difference honestly: Christians confess Father, Son and Spirit; Islam teaches that He begets not","Separate agreement from difference","Conclude with respect"],
     a:"Both reject many gods and confess one Creator. They differ on how God is one: the Trinity or absolute Tawhid. Saying so honestly and respectfully is the basis of dialogue."}
  ]
},

{ grade:10, period:"II",
  study:[
    {k:"rule"},
    {k:"h3", t:"How the Holy Books Were Preserved"},
    {k:"table", head:["Book","Parts","Language","Preservation"], rows:[
      ["Holy Bible","Old Testament (39 books) and New Testament (27 books) = 66","Hebrew, Aramaic, Greek","Copied by scribes; thousands of ancient manuscripts; later translated into many languages"],
      ["Holy Qur'an","114 surahs, about 6,236 verses","Arabic","Memorised by huffaz; gathered into one text under the early caliphs; recited in Arabic worldwide"],
      ["Hadith","Collections such as Sahih al-Bukhari and Sahih Muslim","Arabic","Each report checked through its chain of narrators (isnad)"],
      ["Oral tradition","Proverbs, stories, songs, rites","Liberia's local languages","Passed from elders to the young in homes, initiation schools and gatherings"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Reading Sacred Texts Responsibly"},
    {k:"num", items:[
      "**Context** — read the verses before and after; a verse torn from its setting can be made to say anything.",
      "**Kind of writing** — law, history, poetry, prophecy, parable and letter are read differently.",
      "**The whole message** — one verse must agree with the main teaching of the whole book.",
      "**Qualified teachers** — pastors, imams and elders who have studied long help to guard against error.",
      "**Obedience** — the purpose of reading is to live rightly, not to win arguments (James 1:22)."
    ]},
    {k:"p", t:"**Misuse of Scripture** is a real danger. Texts have been twisted to justify slavery, war, tribal hatred and the exploitation of women and children. Reading responsibly protects the community."}
  ],
  terms:[
    {t:"canon", d:"the accepted list of books that make up a Holy Scripture", x:"The Protestant canon has 66 books."},
    {t:"manuscript", d:"a handwritten copy of an ancient text", x:"Ancient manuscripts preserve the Bible."},
    {t:"hafiz", d:"a person who has memorised the whole Qur'an (plural huffaz)", x:"The hafiz recited the Qur'an from memory."},
    {t:"isnad", d:"the chain of narrators that supports a Hadith report", x:"Scholars test the isnad of a Hadith."},
    {t:"context", d:"the surrounding words, situation and history of a text", x:"Read a verse in its context."},
    {t:"interpretation", d:"explaining the meaning of a text", x:"Interpretation needs care and humility."},
    {t:"translation", d:"putting a text into another language", x:"The Bible has translations in Liberian languages."},
    {t:"initiation school", d:"a traditional school where elders train the young in custom and adult duty", x:"The Sande and Poro teach through initiation schools."}
  ],
  facts:[
    {q:"How many books are in the Old and New Testaments?", a:"39 in the Old Testament and 27 in the New Testament, 66 in all (Protestant canon)."},
    {q:"What is an isnad, and why does it matter?", a:"The chain of narrators behind a Hadith report. Scholars examine it to judge whether the report is reliable."},
    {q:"Give three rules for reading Scripture responsibly.", a:"Read in context, notice what kind of writing it is, and let each verse agree with the whole message. Also seek qualified teachers."},
    {q:"How is oral tradition preserved in Liberia?", a:"Elders pass on proverbs, stories, songs and rites in homes, initiation schools and community gatherings."}
  ],
  tf:[
    {s:"Any single verse can be used alone to prove any teaching.", a:"false", why:"Verses must be read in context and in agreement with the whole message. Torn from context, texts have been misused."},
    {s:"The Qur'an was preserved both in writing and by memorisation.", a:"true", why:"Huffaz memorised it and it was gathered into one written text under the early caliphs."}
  ],
  worked:[
    {q:"Someone quotes \"Money is the root of all evil\" to say it is sinful to earn a salary. Test the claim.",
     steps:["Check the exact words: 1 Timothy 6:10 says \"the LOVE of money is a root of all kinds of evil\"","Read the context: verses 6-10 warn against greed and praise contentment","Compare the whole message: honest work is commanded (2 Thessalonians 3:10)","Conclude"],
     a:"The claim misquotes the verse. The Bible condemns the love of money, not honest earning."},
    {q:"Two elders give different accounts of a town custom. How should the community decide which is reliable?",
     steps:["Identify the source of each account (who taught it to them)","Look for agreement with other elders and custodians","Test it against conscience and the good of the community","Take the account that is best supported and does no harm"],
     a:"Choose the account best supported by recognised custodians that also agrees with conscience and the common good, as a Hadith is tested by its chain of narrators and its content."}
  ]
},

{ grade:10, period:"III",
  study:[
    {k:"rule"},
    {k:"h3", t:"The Calendar of Worship"},
    {k:"table", head:["Tradition","Daily","Weekly","Yearly"], rows:[
      ["Christianity","Personal prayer and Bible reading","Sunday service (Lord's Day)","Advent, Christmas, Lent, Good Friday, Easter, Pentecost"],
      ["Islam","Five daily prayers — Fajr, Dhuhr, Asr, Maghrib, Isha","Jumu'ah on Friday","Ramadan, Eid al-Fitr, Hajj season, Eid al-Adha"],
      ["African Traditional Religion","Morning greeting and offering to the Creator and ancestors","Market days and rest days by local custom","Harvest festivals, initiation seasons, remembrance of ancestors"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Preparation for Worship"},
    {k:"bul", items:[
      "**Christianity** — examining oneself before Holy Communion (1 Corinthians 11:28); making peace with a brother before bringing a gift (Matthew 5:23-24).",
      "**Islam** — **wudu** (ritual washing) before salah; clean clothes and a clean place; facing the **qiblah** toward Makkah.",
      "**African Traditional Religion** — purification, abstinence and settling quarrels before a sacred rite."
    ]},
    {k:"p", t:"All three teach that outward preparation must go with a clean heart: \"This people honours Me with their lips, but their heart is far from Me\" (Mark 7:6); prayer \"restrains from shameful and evil deeds\" (Qur'an 29:45)."},
    {k:"rule"},
    {k:"h3", t:"Worship and Daily Life"},
    {k:"p", t:"True worship continues after the service: \"Offer your bodies as a living sacrifice... this is your true worship\" (Romans 12:1). Honesty in the market, kindness at home and faithfulness at work are worship too."}
  ],
  terms:[
    {t:"wudu", d:"the Islamic ritual washing before prayer", x:"He performed wudu before Fajr."},
    {t:"qiblah", d:"the direction of the Ka'bah in Makkah, faced in Muslim prayer", x:"The mosque's niche shows the qiblah."},
    {t:"liturgy", d:"the set order of words and actions in public worship", x:"The liturgy included hymns, readings and prayers."},
    {t:"Lent", d:"the forty days of Christian fasting and repentance before Easter", x:"Many Christians fast in Lent."},
    {t:"Ramadan", d:"the Islamic month of fasting from dawn to sunset", x:"Ramadan ends with Eid al-Fitr."},
    {t:"purification", d:"making oneself clean for a sacred act", x:"Purification comes before the rite."},
    {t:"living sacrifice", d:"offering one's whole daily life to God as worship (Romans 12:1)", x:"Honest work is part of the living sacrifice."},
    {t:"hymn", d:"a religious song of praise", x:"The congregation sang a hymn."}
  ],
  facts:[
    {q:"Name the five daily Islamic prayers in order.", a:"Fajr (dawn), Dhuhr (midday), Asr (afternoon), Maghrib (sunset) and Isha (night)."},
    {q:"What preparation does Matthew 5:23-24 require before worship?", a:"Be reconciled to a brother who has something against you, then come and offer your gift."},
    {q:"Give two yearly Christian and two yearly Islamic seasons of worship.", a:"Christianity: Christmas and Easter (also Lent, Pentecost). Islam: Ramadan with Eid al-Fitr, and the Hajj season with Eid al-Adha."},
    {q:"What does Romans 12:1 teach about worship?", a:"That offering your whole life to God is your true worship, so worship continues in daily conduct."}
  ],
  tf:[
    {s:"In all three traditions outward ritual is enough, whatever the state of the heart.", a:"false", why:"Mark 7:6, Qur'an 29:45 and the elders' demand to settle quarrels all require a clean heart."},
    {s:"Wudu is the Islamic washing performed before prayer.", a:"true", why:"Ritual washing prepares the Muslim for salah."}
  ],
  worked:[
    {q:"A church member refuses to speak to his neighbour but never misses Sunday service. Evaluate his worship.",
     steps:["State the fact: regular corporate worship","State the problem: unreconciled quarrel","Apply Matthew 5:23-24 and 1 John 4:20","Weigh outward and inward worship","Recommend action"],
     a:"His worship is incomplete. Scripture tells him to go and be reconciled first. Attending the service does not replace love for his neighbour."},
    {q:"A Muslim student's exam falls at Jumu'ah time. How can she honour both duties?",
     steps:["Identify both duties: Friday prayer and education","Find out the rules — ask the imam about travellers, students and exemptions","Talk respectfully to the school early","Look for a fair arrangement such as another sitting time"],
     a:"Plan ahead. Ask the imam for guidance and the school for a fair arrangement. The law of Liberia protects freedom of worship, and polite dialogue usually finds a solution."}
  ]
},

{ grade:10, period:"IV",
  study:[
    {k:"rule"},
    {k:"h3", t:"Scripture on Marriage"},
    {k:"bul", items:[
      "**Genesis 2:24** — a man leaves his father and mother and is joined to his wife; the two become one flesh.",
      "**Ephesians 5:21-33** — mutual submission; the husband loves his wife as Christ loved the church.",
      "**Qur'an 30:21** — spouses created \"that you may dwell in tranquillity with them\", with love and mercy between them.",
      "**Qur'an 4:19** — \"Live with them in kindness.\"",
      "**Traditional teaching** — marriage joins two families, not only two persons; elders witness and bless it."
    ]},
    {k:"rule"},
    {k:"h3", t:"Harmful Practices and the Law"},
    {k:"table", head:["Practice","Why it is wrong","Response"], rows:[
      ["Child and forced marriage","Denies consent, education and health","Liberian law and all three traditions require free consent; report to authorities"],
      ["Domestic violence","Breaks the dignity of the image of God","Seek protection; the Domestic Violence Act of Liberia punishes it"],
      ["Denying widows their property","Oppresses the vulnerable (Exodus 22:22)","Inheritance law protects widows; faith leaders should defend them"],
      ["Abandoning children","Betrays the duty of care","Child support and community pressure; churches and mosques assist"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Resolving Conflict in the Home"},
    {k:"num", items:["Speak calmly and privately; do not shame each other in public","Listen before answering (James 1:19)","Name the real problem, not the person","Seek counsel from a trusted pastor, imam or elder","Forgive and agree on a practical change"]}
  ],
  terms:[
    {t:"one flesh", d:"the complete union of husband and wife (Genesis 2:24)", x:"Marriage makes two people one flesh."},
    {t:"child marriage", d:"a marriage in which one partner is under eighteen", x:"Child marriage harms a girl's education and health."},
    {t:"forced marriage", d:"a marriage entered into without the free consent of one or both partners", x:"Forced marriage violates consent."},
    {t:"domestic violence", d:"abuse within the home: physical, emotional, sexual or economic", x:"Domestic violence is a crime in Liberia."},
    {t:"inheritance", d:"the property passed on after a person dies", x:"A widow has a right to inheritance."},
    {t:"reconciliation", d:"restoring a broken relationship", x:"The couple sought reconciliation through counsel."},
    {t:"mutual submission", d:"each partner putting the other's good first (Ephesians 5:21)", x:"Mutual submission builds a peaceful home."},
    {t:"customary marriage", d:"a marriage made according to traditional custom", x:"Customary marriage involves both families."}
  ],
  facts:[
    {q:"What does Qur'an 30:21 give as the purpose of marriage?", a:"That spouses may dwell in tranquillity together, with love and mercy placed between them."},
    {q:"Name three harmful practices that threaten family life.", a:"Child or forced marriage, domestic violence, denying widows their property, and abandoning children."},
    {q:"Give four steps for resolving conflict in the home.", a:"Speak calmly and privately, listen first, name the problem, seek counsel, then forgive and agree on a change."},
    {q:"Why does traditional marriage involve both families?", a:"Because it joins two families as well as two persons, and the elders witness, bless and support it."}
  ],
  tf:[
    {s:"All three traditions accept a marriage made without the bride's consent.", a:"false", why:"Free consent is required by Christian teaching, by Islamic law (the bride's consent to the nikah) and by Liberian law."},
    {s:"Domestic violence is a private matter that the law does not address.", a:"false", why:"It is a crime under Liberian law and breaks the dignity of the image of God."}
  ],
  worked:[
    {q:"A family plans to marry their 15-year-old daughter to a wealthy older man to pay a debt. Reason through the case.",
     steps:["Identify the facts: a minor, no free consent, a financial motive","Apply the law: under eighteen is child marriage","Apply faith teaching: consent and dignity are required; children are a trust from God","Consider the harm: lost schooling, health risks, loss of freedom","Recommend action: speak to faith leaders and child protection officers, and find other ways to pay the debt"],
     a:"The marriage is wrong and illegal. The girl must be protected and stay in school, and the family's debt must be handled another way."},
    {q:"A widow's in-laws take her house after her husband dies. What does religious and moral teaching require?",
     steps:["State the situation","Cite Scripture: Exodus 22:22; James 1:27; Qur'an 4:12 on the widow's share","Cite the law: Liberian inheritance law protects widows","Identify who should act: the family, faith leaders and the courts"],
     a:"The widow must be protected and her rightful share returned. Religion and the law both condemn oppressing widows."}
  ]
},

{ grade:10, period:"V",
  study:[
    {k:"rule"},
    {k:"h3", t:"Measuring Giving"},
    {k:"p", t:"The traditions give clear measures for giving. Calculating them is a good exercise in honest stewardship:"},
    {k:"table", head:["Form","Measure","Example"], rows:[
      ["Tithe (Christian)","One tenth of income (Malachi 3:10)","Income L$20,000 → tithe L$2,000"],
      ["Zakat (Islam)","2.5% of wealth held above the nisab for a full lunar year","Savings L$400,000 → zakat L$10,000"],
      ["Sadaqah / offerings","Freely chosen, any amount","Helping a sick neighbour with transport"],
      ["Traditional sharing","By custom — first fruits, harvest shares","The first rice shared with elders and the needy"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Corruption in Liberia — Causes and Cures"},
    {k:"bul", items:[
      "**Causes** — low pay, weak institutions, greed, family pressure, a culture of impunity.",
      "**Effects** — broken roads, empty clinics, stolen school funds, loss of trust.",
      "**Cures** — honest leaders, fair pay, strong audits, the Liberia Anti-Corruption Commission (LACC), a free press, and citizens who refuse to pay or take bribes.",
      "**Scripture** — \"Do not accept a bribe, for a bribe blinds the eyes\" (Exodus 23:8); \"Do not consume one another's wealth unjustly, nor offer it to the judges\" (Qur'an 2:188)."
    ]},
    {k:"rule"},
    {k:"h3", t:"Budgeting as Stewardship"},
    {k:"num", items:["Record income honestly","Give first (tithe, zakat or sharing)","Meet needs before wants","Save a portion regularly","Avoid debt for luxuries","Review each month"]}
  ],
  terms:[
    {t:"nisab", d:"the minimum amount of wealth above which zakat is due", x:"His savings passed the nisab."},
    {t:"budget", d:"a plan for how income will be used", x:"A budget prevents waste."},
    {t:"impunity", d:"freedom from punishment for wrongdoing", x:"Impunity encourages corruption."},
    {t:"audit", d:"an official check of accounts", x:"The audit found missing funds."},
    {t:"embezzlement", d:"stealing money one has been trusted to manage", x:"Embezzlement of school fees is a crime."},
    {t:"usury", d:"lending money at unfair or excessive interest (riba in Islam)", x:"Islam forbids riba."},
    {t:"stewardship", d:"managing what belongs to God faithfully", x:"A budget is an act of stewardship."},
    {t:"LACC", d:"the Liberia Anti-Corruption Commission", x:"The LACC investigates corruption cases."}
  ],
  facts:[
    {q:"Calculate the tithe on a monthly income of L$35,000.", a:"One tenth: 35,000 ÷ 10 = L$3,500."},
    {q:"Calculate the zakat due on L$200,000 held above the nisab for a year.", a:"2.5% of 200,000 = 0.025 × 200,000 = L$5,000."},
    {q:"Give three causes and three effects of corruption.", a:"Causes: low pay, greed, impunity. Effects: broken services, stolen public funds, loss of trust."},
    {q:"What does Exodus 23:8 say about bribes?", a:"A bribe blinds the eyes of those who see and twists the words of the righteous."}
  ],
  tf:[
    {s:"Zakat is 10% of all income.", a:"false", why:"Zakat is 2.5% of wealth held above the nisab for a full lunar year. The tithe is the Christian tenth."},
    {s:"Riba, or usury, is forbidden in Islam.", a:"true", why:"The Qur'an forbids riba (Qur'an 2:275)."}
  ],
  worked:[
    {q:"Musu earns L$18,000 a month. She tithes, saves 10% and spends L$9,000 on food and rent. How much is left for other needs?",
     steps:["Tithe = 18,000 × 0.10 = 1,800","Savings = 18,000 × 0.10 = 1,800","Food and rent = 9,000","Total used = 1,800 + 1,800 + 9,000 = 12,600","Remaining = 18,000 − 12,600 = 5,400"],
     a:"L$5,400 remains. Giving and saving first still leaves money for other needs when the budget is planned."},
    {q:"Alhaji's trading savings of L$600,000 have stayed above the nisab for a full year. Calculate his zakat and explain its purpose.",
     steps:["Rate = 2.5% = 0.025","Zakat = 600,000 × 0.025 = 15,000","Purpose: purify wealth and support the eight groups named in Qur'an 9:60, such as the poor and needy"],
     a:"L$15,000. Zakat purifies wealth and supports the poor and needy."},
    {q:"A clerk is offered L$5,000 to move a file to the top of the pile. Decide what to do.",
     steps:["Name it: a bribe","Apply Scripture: Exodus 23:8; Qur'an 2:188","Consider who is harmed: people who waited honestly","Consider the law: bribery is punishable","Decide and state a polite refusal"],
     a:"Refuse politely and process files in order. A bribe is unjust to others, forbidden by faith and punishable by law."}
  ]
},

{ grade:10, period:"VI",
  study:[
    {k:"rule"},
    {k:"h3", t:"Work in the Three Traditions"},
    {k:"table", head:["Tradition","Key teaching","Source"], rows:[
      ["Christianity","Work is part of God's first command; work heartily as for the Lord","Genesis 2:15; Colossians 3:23"],
      ["Islam","Earning a lawful living is worship; no one eats better food than what he earns with his own hands","Qur'an 62:10; Hadith (Bukhari)"],
      ["African Traditional Religion","The farm, the forge and the loom are honoured; the lazy bring shame on the family","Proverbs and elders' teaching"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Rights and Duties of Workers and Employers"},
    {k:"bul", items:[
      "**Employer duties** — pay fair wages on time (Deuteronomy 24:14-15; the Hadith \"Give the worker his wage before his sweat dries\"), keep workers safe, treat them with respect.",
      "**Worker duties** — be punctual, honest and diligent; do not steal time or materials (Titus 2:9-10).",
      "**The Decent Work Act of Liberia** — sets minimum wage, working hours, rest and protection against child labour."
    ]},
    {k:"rule"},
    {k:"h3", t:"Rest"},
    {k:"p", t:"Work is balanced by **rest**. The Sabbath (Exodus 20:8-11), the pause for Jumu'ah (Qur'an 62:9-10) and traditional rest days protect workers from exploitation and give time for God and family."}
  ],
  terms:[
    {t:"wage", d:"payment for work", x:"Pay the wage on time."},
    {t:"child labour", d:"work that harms a child's health, schooling or development", x:"Child labour is forbidden by law."},
    {t:"exploitation", d:"using someone unfairly for one's own gain", x:"Unpaid overtime is exploitation."},
    {t:"punctuality", d:"being on time", x:"Punctuality shows respect."},
    {t:"Decent Work Act", d:"the Liberian law protecting workers' rights", x:"The Decent Work Act sets a minimum wage."},
    {t:"entrepreneur", d:"a person who starts and runs a business", x:"The young entrepreneur sold solar lamps."},
    {t:"rest", d:"a break from work for renewal, worship and family", x:"God commanded rest."},
    {t:"integrity at work", d:"being honest and reliable in one's job", x:"Integrity at work wins trust."}
  ],
  facts:[
    {q:"What does the Hadith teach about paying workers?", a:"\"Give the worker his wage before his sweat dries\": pay promptly and fairly."},
    {q:"Name three duties of a worker.", a:"Be punctual, honest and diligent, and do not steal time or materials."},
    {q:"Why is rest part of religious teaching on work?", a:"It protects workers from exploitation and gives time for God and family (Exodus 20:8-11; Qur'an 62:9-10)."},
    {q:"What does the Decent Work Act of Liberia do?", a:"It sets minimum wages, working hours and rest, and protects against child labour."}
  ],
  tf:[
    {s:"Delaying workers' pay is acceptable if the employer is busy.", a:"false", why:"Deuteronomy 24:15 and the Hadith require prompt payment."},
    {s:"The traditions teach that some honest trades are shameful.", a:"false", why:"Every honest trade has dignity; only dishonest gain is shameful."}
  ],
  worked:[
    {q:"A shop owner hires a 12-year-old to sell during school hours for low pay. Analyse the case.",
     steps:["Identify: a child of school age working in school hours","Law: this is child labour under Liberian law","Faith: children are a trust; the employer must not exploit (Deuteronomy 24:14)","Harm: lost education and low pay","Remedy: send the child back to school and hire an adult at a fair wage"],
     a:"It is exploitation and child labour. The child belongs in school, and the job should go to an adult at a fair wage."},
    {q:"A worker takes company fuel for his personal car \"because the pay is small\". Evaluate his reasoning.",
     steps:["State his reason: low pay","Separate the grievance from the act","Apply the teaching: Titus 2:9-10; Exodus 20:15","Suggest the right channel: negotiate or seek other work"],
     a:"Low pay is a real grievance, but taking the fuel is theft. He should raise the wage issue honestly instead."}
  ]
},

/* ================================ GRADE 11 ================================ */
{ grade:11, period:"I",
  study:[
    {k:"rule"},
    {k:"h3", t:"Ethical Approaches"},
    {k:"table", head:["Approach","Question it asks","Strength","Weakness"], rows:[
      ["Rule-based (duty)","What does God's law or my duty require?","Clear and firm","May seem rigid in hard cases"],
      ["Consequences","What will bring the most good and least harm?","Considers everyone affected","Can justify a wrong act for a good result"],
      ["Character (virtue)","What would a good person do?","Builds lasting character","Gives less precise direction"],
      ["Religious","What pleases God and follows His revelation?","Unites law, love and character","Needs careful interpretation"]
    ]},
    {k:"rule"},
    {k:"h3", t:"The Golden Rule Across Traditions"},
    {k:"bul", items:[
      "**Christianity** — \"Do to others what you would have them do to you\" (Matthew 7:12).",
      "**Islam** — \"None of you truly believes until he loves for his brother what he loves for himself\" (Hadith, Bukhari and Muslim).",
      "**African proverb** — \"What you would not like done to you, do not do to another.\""
    ]},
    {k:"rule"},
    {k:"h3", t:"A Decision Model — PLEASE"},
    {k:"num", items:["**P**roblem — state the choice clearly","**L**aws — what do Scripture, custom and national law say?","**E**ffects — who will be helped or hurt?","**A**lternatives — list at least three options","**S**elf-check — could I tell my parents, my faith leader and God?","**E**xecute — act, then review the result"]}
  ],
  terms:[
    {t:"ethics", d:"the study of right and wrong conduct", x:"Religious ethics draws on revelation."},
    {t:"deontology", d:"duty-based ethics that judges acts by rules", x:"Deontology says lying is always wrong."},
    {t:"consequentialism", d:"ethics that judges acts by their results", x:"Consequentialism weighs harm and benefit."},
    {t:"virtue", d:"a good habit of character", x:"Honesty is a virtue."},
    {t:"vice", d:"a bad habit of character", x:"Greed is a vice."},
    {t:"golden rule", d:"treat others as you would want to be treated", x:"The golden rule appears in every tradition."},
    {t:"rationalisation", d:"making excuses to justify a wrong choice", x:"\"Everyone does it\" is rationalisation."},
    {t:"moral courage", d:"doing right despite fear or pressure", x:"Refusing to cheat took moral courage."}
  ],
  facts:[
    {q:"Name four ethical approaches.", a:"Rule-based (duty), consequences, character (virtue) and religious ethics."},
    {q:"State the golden rule in the Christian and Islamic forms.", a:"Matthew 7:12: do to others as you would have them do to you. Hadith: love for your brother what you love for yourself."},
    {q:"What is rationalisation?", a:"Making excuses to justify a wrong act, such as saying \"everyone does it\"."},
    {q:"List the six steps of the PLEASE decision model.", a:"Problem, Laws, Effects, Alternatives, Self-check, Execute."}
  ],
  tf:[
    {s:"Consequentialism can sometimes seem to justify a wrong act for a good result.", a:"true", why:"This is its main weakness. Religious ethics adds firm limits."},
    {s:"The golden rule is found only in Christianity.", a:"false", why:"Islam and African proverbs teach it too."}
  ],
  worked:[
    {q:"Use PLEASE: your best friend asks you to lie to his parents that he was studying with you.",
     steps:["Problem: lie for a friend or tell the truth","Laws: Exodus 20:16; Qur'an 33:70 \"speak words of truth\"","Effects: parents deceived, friend possibly in danger, trust broken","Alternatives: refuse, encourage him to tell the truth, or offer real study time","Self-check: I could not tell God or my parents I lied","Execute: refuse kindly and offer to help him"],
     a:"Do not lie. Refuse kindly, encourage honesty and offer real help. Loyalty never requires deception."},
    {q:"Compare how a rule-based thinker and a consequences-based thinker judge stealing medicine for a dying mother.",
     steps:["Rule-based: stealing breaks a clear command, so it is wrong","Consequences: saving a life may seem to outweigh the loss","Religious view: the life matters AND theft is wrong, so look for lawful help — clinics, churches, mosques, zakat","Conclude"],
     a:"The two approaches pull in different directions. Religious ethics keeps the rule and meets the need through the community's duty of mercy."}
  ]
},

{ grade:11, period:"II",
  study:[
    {k:"rule"},
    {k:"h3", t:"Human Rights Documents"},
    {k:"table", head:["Document","Year","Key point"], rows:[
      ["Universal Declaration of Human Rights","1948","All human beings are born free and equal in dignity and rights"],
      ["African Charter on Human and Peoples' Rights","1981","Rights together with duties to family and community"],
      ["Constitution of the Republic of Liberia","1986","Article 14: freedom of thought, conscience and religion; no religion is established by the state"],
      ["Convention on the Rights of the Child","1989","Protection, education and a voice for every child"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Groups Needing Special Protection"},
    {k:"bul", items:["**Persons with disabilities** — equal dignity; access to school and work","**Women and girls** — protection from violence and discrimination","**Children** — education, health, protection from labour and abuse","**Refugees and strangers** — \"Love the stranger, for you were strangers\" (Deuteronomy 10:19)","**Religious minorities** — free to worship without harassment","**The poor** — justice in court regardless of wealth (Leviticus 19:15)"]},
    {k:"rule"},
    {k:"h3", t:"Restorative Justice"},
    {k:"p", t:"Punishment is not the only goal of justice. **Restorative justice** seeks to repair harm: the offender admits the wrong, makes restitution and is restored to the community. It reflects Zacchaeus's repayment (Luke 19:8), the Qur'an's preference for forgiveness (Qur'an 42:40) and the traditional **palaver hut**, where elders settle disputes and restore relationships."}
  ],
  terms:[
    {t:"human rights", d:"freedoms and protections every person has because they are human", x:"Education is a human right."},
    {t:"UDHR", d:"the Universal Declaration of Human Rights (1948)", x:"The UDHR begins with equal dignity."},
    {t:"Article 14", d:"the article of Liberia's Constitution guaranteeing freedom of religion", x:"Article 14 protects every faith."},
    {t:"restorative justice", d:"justice that repairs harm and restores relationships", x:"The palaver hut practises restorative justice."},
    {t:"restitution", d:"paying back or repairing what was taken or damaged", x:"Zacchaeus made restitution fourfold."},
    {t:"minority", d:"a smaller group within a society", x:"Religious minorities must be protected."},
    {t:"refugee", d:"a person who has fled their country because of danger", x:"Liberians were refugees during the war."},
    {t:"impartiality", d:"treating all people fairly without favour", x:"Judges must show impartiality."}
  ],
  facts:[
    {q:"Which article of Liberia's Constitution protects freedom of religion?", a:"Article 14."},
    {q:"What is restorative justice?", a:"Justice that repairs harm: admission, restitution and the restoring of the offender to the community."},
    {q:"Name four groups that need special protection.", a:"Persons with disabilities, women and girls, children, refugees, religious minorities and the poor."},
    {q:"What does Leviticus 19:15 require of judges?", a:"Impartiality: do not favour the poor or honour the great, but judge fairly."}
  ],
  tf:[
    {s:"The Constitution of Liberia makes Christianity the state religion.", a:"false", why:"Article 14 says no religion shall be established by the state."},
    {s:"The African Charter links rights with duties to family and community.", a:"true", why:"This is a special feature of the African Charter."}
  ],
  worked:[
    {q:"A school refuses to admit a child who uses a wheelchair. Apply justice and dignity.",
     steps:["Identify the right: education for all","Identify the wrong: discrimination because of disability","Faith: every person bears God's image (Genesis 1:27); Qur'an 80:1-10 rebukes turning away from the blind man","Remedy: make access, such as ramps and a ground-floor class, and admit the child"],
     a:"The refusal is unjust discrimination. The school should adapt and admit the child."},
    {q:"A boy steals a neighbour's goat. Design a restorative response.",
     steps:["Establish the facts in the palaver hut","The boy admits the wrong","Restitution: return or pay for the goat, perhaps with extra work","Reconciliation: apology and acceptance","Follow-up: mentoring by an elder"],
     a:"Admission, restitution, apology and mentoring repair the harm and restore the boy, instead of only punishing him."}
  ]
},

{ grade:11, period:"III",
  study:[
    {k:"rule"},
    {k:"h3", t:"Models of Leadership in the Sacred Texts"},
    {k:"table", head:["Leader","Tradition","Lesson"], rows:[
      ["Moses","Bible / Qur'an","Humility, and sharing the load with seventy elders (Numbers 11:16-17)"],
      ["Nehemiah","Bible","Planning, prayer and refusing the governor's food allowance (Nehemiah 5:14-15)"],
      ["Jesus washing feet","Bible","Leadership as service (John 13:1-15)"],
      ["Prophet Muhammad","Islam","Consultation (shura) and justice (Qur'an 3:159; 42:38)"],
      ["Umar ibn al-Khattab","Islam","Accountability: walking at night to see the needs of the people"],
      ["The town chief and council of elders","Traditional","Decisions by consensus in the palaver hut"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Leadership Styles"},
    {k:"bul", items:["**Autocratic** — one person decides alone; quick but often unjust","**Democratic** — decisions shared by consultation and vote","**Laissez-faire** — the leader leaves people alone; little direction","**Servant** — the leader serves the needs of the people (Mark 10:42-45)"]},
    {k:"rule"},
    {k:"h3", t:"The Citizen's Part"},
    {k:"num", items:["Vote freely and honestly; never sell your vote","Pay taxes","Obey just laws (Romans 13:1-7)","Speak out peacefully against injustice (Micah 6:8)","Pray for leaders (1 Timothy 2:1-2)","Take part in community work"]}
  ],
  terms:[
    {t:"autocratic", d:"ruled by one person with total power", x:"Autocratic rule silences the people."},
    {t:"democratic", d:"governed by the people through consultation and voting", x:"Liberia is a democratic republic."},
    {t:"consensus", d:"agreement reached by the whole group", x:"The elders reached consensus."},
    {t:"vote-buying", d:"offering money or gifts in exchange for votes", x:"Vote-buying corrupts elections."},
    {t:"transparency", d:"openness in decisions and the use of money", x:"Transparency builds trust."},
    {t:"rule of law", d:"all people, including leaders, are subject to the law", x:"The rule of law protects the weak."},
    {t:"civic duty", d:"a responsibility of a citizen", x:"Voting is a civic duty."},
    {t:"humility", d:"not thinking too highly of oneself", x:"Humility marks a great leader."}
  ],
  facts:[
    {q:"What lesson does Nehemiah 5:14-15 teach leaders?", a:"Not to use their position for personal gain: Nehemiah refused the governor's food allowance to spare the people."},
    {q:"Name the four leadership styles.", a:"Autocratic, democratic, laissez-faire and servant leadership."},
    {q:"Give four duties of a citizen.", a:"Vote honestly, pay taxes, obey just laws and speak out peacefully against injustice. Also pray for leaders and do community work."},
    {q:"What does the Qur'an teach about shura?", a:"That affairs should be decided by mutual consultation (Qur'an 42:38; 3:159)."}
  ],
  tf:[
    {s:"Selling your vote is acceptable if you are poor.", a:"false", why:"Vote-buying corrupts the election and betrays the nation, whoever takes the money."},
    {s:"Rule of law means leaders are also subject to the law.", a:"true", why:"No one is above the law."}
  ],
  worked:[
    {q:"A candidate offers every youth L$1,000 and a T-shirt for their vote. What should a young believer do?",
     steps:["Name it: vote-buying","Apply faith: Exodus 23:8; Qur'an 2:188","Apply law: electoral offences","Consider the effect: leaders who buy votes usually recover the money through corruption","Decide: refuse the offer, study the candidates and vote by conscience"],
     a:"Refuse. Vote by conscience for the candidate with integrity and a real plan. A vote sold for L$1,000 costs the community years of good leadership."},
    {q:"The student council president spends club dues on a party for his friends. Apply servant leadership and accountability.",
     steps:["Identify the trust: the dues belong to all members","Identify the breach: misuse and favouritism","Accountability: a report to members and the teacher adviser","Restoration: repay and publish accounts"],
     a:"He betrayed the trust. He must account for the money, repay it and publish records. Leaders serve everyone, not only their friends."}
  ]
},

{ grade:11, period:"IV",
  study:[
    {k:"rule"},
    {k:"h3", t:"Liberia's Health Trials and the Faith Communities"},
    {k:"p", t:"During the **Ebola** outbreak of 2014–2015, churches, mosques and traditional leaders helped spread correct information, changed burial practices to stop infection, and cared for orphans and survivors. It showed that faith and medicine work together."},
    {k:"table", head:["Challenge","Harmful response","Faith-and-health response"], rows:[
      ["Ebola / infectious disease","Hiding the sick; unsafe burials","Isolation, safe dignified burial, prayer and care"],
      ["HIV/AIDS","Stigma and rejection","Testing, treatment, acceptance and support"],
      ["Mental illness","Chaining, beating, calling it witchcraft","Medical care, counselling, prayer, family support"],
      ["Malaria","Delay and self-treatment only","Nets, early testing and treatment"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Caring for Carers"},
    {k:"p", t:"Those who look after the sick — nurses, family members, volunteers — also need rest, support and prayer. Jesus withdrew to pray (Luke 5:16), and the Hadith teaches that \"your body has a right over you\"."}
  ],
  terms:[
    {t:"Ebola", d:"a severe infectious viral disease spread through body fluids", x:"Ebola struck Liberia in 2014."},
    {t:"safe burial", d:"burial that prevents infection while honouring the dead", x:"Religious leaders supported safe burial."},
    {t:"isolation", d:"separating the sick to prevent the spread of disease", x:"Isolation saved many lives."},
    {t:"mental illness", d:"a health condition that affects thinking, mood or behaviour", x:"Mental illness needs treatment, not chains."},
    {t:"counselling", d:"guidance and support given to people facing problems", x:"Counselling helped the grieving family."},
    {t:"orphan", d:"a child whose parents have died", x:"Mosques cared for Ebola orphans."},
    {t:"caregiver", d:"a person who looks after someone who is sick or dependent", x:"The caregiver also needs rest."},
    {t:"survivor", d:"a person who lived through a disease or disaster", x:"Ebola survivors faced stigma."}
  ],
  facts:[
    {q:"Name two ways faith communities helped during the Ebola outbreak.", a:"They spread correct information and supported safe, dignified burials. They also cared for orphans and survivors."},
    {q:"What is the right response to mental illness?", a:"Medical care, counselling, prayer and family support, never chaining, beating or witchcraft accusations."},
    {q:"Why do caregivers need care?", a:"Caring is exhausting. The traditions teach rest and the body's rights (Luke 5:16; the Hadith \"your body has a right over you\")."},
    {q:"Give one faith-and-health response to HIV/AIDS.", a:"Encourage testing and treatment while accepting and supporting people living with HIV."}
  ],
  tf:[
    {s:"Mental illness is always caused by witchcraft.", a:"false", why:"It is a health condition that needs medical care. Witchcraft accusations cause great harm."},
    {s:"Safe burial during Ebola could honour the dead and still stop infection.", a:"true", why:"Religious leaders adapted rites to do both."}
  ],
  worked:[
    {q:"A family keeps a young man with mental illness chained in a back room, believing he is cursed. Reason through the case.",
     steps:["Facts: illness, chaining, a belief in a curse","Dignity: he bears God's image and must not be chained","Health: mental illness is treatable at health facilities","Faith response: pray WITH treatment, not instead of it","Action: gently involve a health worker and a faith leader"],
     a:"Release him with support and take him for treatment, with prayer and family care. Chaining breaks his dignity and delays healing."},
    {q:"During an outbreak, relatives insist on washing a body by hand. How can a leader respond?",
     steps:["Acknowledge the love and custom behind the wish","Explain the danger clearly","Offer a respectful safe alternative: trained teams and adapted prayers","Point to teaching that preserving life is a sacred duty (Qur'an 5:32)"],
     a:"Honour the love, explain the risk and support a safe, dignified burial. Protecting the living is also a religious duty."}
  ]
},

{ grade:11, period:"V",
  study:[
    {k:"rule"},
    {k:"h3", t:"Signs and Events of the Last Day"},
    {k:"table", head:["Tradition","Teaching","Source"], rows:[
      ["Christianity","Christ's return, the resurrection of the dead and the final judgment","Matthew 25:31-46; 1 Thessalonians 4:13-18"],
      ["Islam","Yawm al-Qiyamah: the trumpet, the resurrection, the weighing of deeds","Qur'an 99; 101"],
      ["African Traditional Religion","The dead join the ancestors; the good are honoured and the wicked are not remembered","Elders' teaching"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Wills, Inheritance and Preparing Well"},
    {k:"bul", items:["Write a **will** so that property passes fairly and families do not fight","Islam gives fixed inheritance shares (Qur'an 4:11-12) and allows a will (wasiyyah) for up to one third","Christians are urged to provide for their household (1 Timothy 5:8)","Liberian law protects widows and children"]},
    {k:"rule"},
    {k:"h3", t:"Harmful Funeral Practices"},
    {k:"p", t:"Excessive spending on funerals can leave families in debt. Holding bodies for long periods for display, and accusing widows of causing a death, are harmful. The traditions call for **dignity, moderation and truth**."}
  ],
  terms:[
    {t:"Yawm al-Qiyamah", d:"the Day of Resurrection in Islam", x:"Every soul will be raised on Yawm al-Qiyamah."},
    {t:"Second Coming", d:"the Christian belief in Christ's return", x:"The Second Coming ends history."},
    {t:"will", d:"a written statement of how a person's property is to be shared after death", x:"Her will prevented family quarrels."},
    {t:"wasiyyah", d:"an Islamic will, limited to one third of the estate", x:"He left a wasiyyah for the mosque."},
    {t:"estate", d:"all the property a person leaves at death", x:"The estate was shared fairly."},
    {t:"moderation", d:"avoiding excess", x:"Moderation at funerals prevents debt."},
    {t:"mourning", d:"expressing grief after a death", x:"The family entered a period of mourning."},
    {t:"hope", d:"confident expectation of God's promises", x:"Believers grieve with hope."}
  ],
  facts:[
    {q:"What does Qur'an 99 describe?", a:"The Day of Judgment, when every atom's weight of good or evil is seen."},
    {q:"Why should a person write a will?", a:"So that property is shared fairly and families do not fight after the death."},
    {q:"What limit does Islam place on a wasiyyah?", a:"Up to one third of the estate. The rest follows fixed shares (Qur'an 4:11-12)."},
    {q:"Name two harmful funeral practices.", a:"Excessive spending that causes debt, and accusing widows of causing the death."}
  ],
  tf:[
    {s:"1 Thessalonians 4:13 teaches believers to grieve without hope.", a:"false", why:"It tells them not to grieve like those who have no hope."},
    {s:"Islam sets fixed inheritance shares for relatives.", a:"true", why:"Qur'an 4:11-12 sets them."}
  ],
  worked:[
    {q:"A man with L$900,000 wants to leave as much as possible to a school under Islamic rules. What is the most his wasiyyah may give?",
     steps:["Rule: a wasiyyah may not exceed one third","900,000 ÷ 3 = 300,000","The remaining 600,000 follows the Qur'anic shares"],
     a:"L$300,000 at most. The other L$600,000 goes to his heirs by the fixed shares."},
    {q:"A family plans to borrow L$500,000 for a funeral feast. Advise them.",
     steps:["State their aim: to honour the dead","Weigh the cost: debt harms the living, especially the children","Apply moderation: simple, dignified rites","Suggest alternatives: community contributions and a modest meal"],
     a:"Honour the dead with dignity and moderation, not debt. The deceased's children and widow need the money more than a large feast."}
  ]
},

{ grade:11, period:"VI",
  study:[
    {k:"rule"},
    {k:"h3", t:"Believers in Science"},
    {k:"table", head:["Person","Tradition","Contribution"], rows:[
      ["Ibn al-Haytham (c. 965–1040)","Islam","Founder of optics and the experimental method"],
      ["Al-Khwarizmi (c. 780–850)","Islam","Algebra; the word algorithm comes from his name"],
      ["Isaac Newton (1643–1727)","Christianity","Laws of motion and gravity"],
      ["Gregor Mendel (1822–1884)","Christianity (monk)","Founder of genetics"],
      ["Georges Lemaître (1894–1966)","Christianity (priest)","Proposed the Big Bang theory"],
      ["Traditional herbalists","African tradition","Knowledge of medicinal plants, some confirmed by modern research"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Ethical Questions of New Technology"},
    {k:"bul", items:["**Artificial intelligence** — honesty in schoolwork; not passing off machine-written work as your own","**Social media** — gossip, false news and the Ninth Commandment","**Privacy** — sharing others' photos without consent","**Medical technology** — organ donation, fertility treatment and end-of-life care","**Gambling apps and online betting** — addiction and debt"]}
  ],
  terms:[
    {t:"optics", d:"the science of light and vision", x:"Ibn al-Haytham founded optics."},
    {t:"genetics", d:"the science of heredity", x:"Mendel founded genetics."},
    {t:"artificial intelligence", d:"computer systems that perform tasks needing human-like intelligence", x:"Artificial intelligence must be used honestly."},
    {t:"plagiarism", d:"presenting another's work as your own", x:"Copying an essay is plagiarism."},
    {t:"privacy", d:"the right to keep personal matters private", x:"Posting her photo broke her privacy."},
    {t:"misinformation", d:"false information spread, with or without intent", x:"Check before you share misinformation."},
    {t:"organ donation", d:"giving an organ to save another's life", x:"Organ donation raises ethical questions."},
    {t:"online betting", d:"gambling through phone apps or websites", x:"Online betting has trapped many youths in debt."}
  ],
  facts:[
    {q:"Name two Muslim and two Christian scientists.", a:"Ibn al-Haytham and Al-Khwarizmi; Isaac Newton and Gregor Mendel (also Lemaître)."},
    {q:"Who proposed the Big Bang theory?", a:"Georges Lemaître, a Catholic priest and physicist."},
    {q:"What is plagiarism?", a:"Presenting someone else's work, including machine-generated work, as your own."},
    {q:"Name three ethical questions raised by technology.", a:"Honest use of AI, spreading misinformation, privacy, medical technology and online betting."}
  ],
  tf:[
    {s:"Many founders of modern science were religious believers.", a:"true", why:"Ibn al-Haytham, Newton, Mendel and Lemaître are examples."},
    {s:"Sharing a friend's private photo without consent is harmless fun.", a:"false", why:"It breaks privacy and can cause deep harm (Matthew 7:12)."}
  ],
  worked:[
    {q:"A student uses an AI tool to write his whole essay and submits it as his own. Evaluate.",
     steps:["Facts: the work is not his; it is presented as his","Name it: plagiarism and deception","Faith: Exodus 20:16; Qur'an 33:70","Harm: no learning; unfair to classmates","Right use: use tools for ideas or checking, with the teacher's permission, and write it yourself"],
     a:"Dishonest. He should write his own work and use tools only as the teacher allows, saying openly when he has used them."},
    {q:"A message says drinking salt water cures a disease, and you are asked to forward it. Decide.",
     steps:["Pause before sharing","Verify with health workers or official sources","Consider the harm if it is false","Apply Qur'an 49:6: verify news before acting on it"],
     a:"Do not forward it. Verify first, because false health advice can kill. Share only confirmed information."}
  ]
},

/* ================================ GRADE 12 ================================ */
{ grade:12, period:"I",
  study:[
    {k:"rule"},
    {k:"h3", t:"Other World Religions"},
    {k:"table", head:["Religion","Founder / origin","Holy text","Key belief"], rows:[
      ["Judaism","Abraham and Moses","Tanakh (Torah)","One God; covenant with Israel"],
      ["Hinduism","Ancient India, no single founder","Vedas, Bhagavad Gita","Dharma, karma, rebirth"],
      ["Buddhism","Siddhartha Gautama (the Buddha)","Tripitaka","Four Noble Truths; the Eightfold Path"],
      ["Sikhism","Guru Nanak","Guru Granth Sahib","One God; equality; service"],
      ["Bahá'í Faith","Bahá'u'lláh","Kitáb-i-Aqdas","Unity of God, religion and humanity"]
    ]},
    {k:"p", t:"These faiths are small in Liberia, but Liberians meet them through travel, trade and study. Understanding them accurately is part of respect."},
    {k:"rule"},
    {k:"h3", t:"The Abrahamic Family"},
    {k:"p", t:"Judaism, Christianity and Islam all trace their faith to **Abraham** (Ibrahim), who is honoured as the friend of God (Isaiah 41:8; Qur'an 4:125). They share prophets such as Noah, Moses and David, belief in one God, and a final judgment."}
  ],
  terms:[
    {t:"Abrahamic religions", d:"Judaism, Christianity and Islam, which trace their faith to Abraham", x:"The Abrahamic religions share many prophets."},
    {t:"Torah", d:"the first five books of the Hebrew Scriptures", x:"Muslims call the Torah the Tawrat."},
    {t:"karma", d:"in Hinduism and Buddhism, the principle that actions bring results in this or future lives", x:"Karma differs from the idea of judgment."},
    {t:"dharma", d:"duty or right way of living in Hinduism", x:"Dharma guides Hindu life."},
    {t:"Four Noble Truths", d:"the Buddha's teaching on suffering, its cause, its end and the path", x:"The Four Noble Truths begin with suffering."},
    {t:"Guru", d:"a spiritual teacher; in Sikhism, the ten founding teachers", x:"Guru Nanak founded Sikhism."},
    {t:"monotheism", d:"belief in one God", x:"Islam is strictly monotheistic."},
    {t:"pluralism", d:"many religions living together in one society", x:"Liberia practises religious pluralism."}
  ],
  facts:[
    {q:"Name the three Abrahamic religions.", a:"Judaism, Christianity and Islam."},
    {q:"Who founded Buddhism and Sikhism?", a:"Siddhartha Gautama (the Buddha) founded Buddhism; Guru Nanak founded Sikhism."},
    {q:"What does Qur'an 4:125 call Abraham?", a:"The friend (khalil) of God."},
    {q:"Distinguish karma from the Abrahamic idea of judgment.", a:"Karma is an impersonal law of cause and effect across lives. Judgment is by a personal God at the end of one life."}
  ],
  tf:[
    {s:"Abraham is honoured in Judaism, Christianity and Islam.", a:"true", why:"He is the father of faith in all three (Isaiah 41:8; Qur'an 4:125)."},
    {s:"Hinduism has a single founder.", a:"false", why:"It developed in ancient India without a single founder."}
  ],
  worked:[
    {q:"Construct a fair one-paragraph description of Buddhism that a Buddhist would accept.",
     steps:["Name the founder: Siddhartha Gautama","State the core: the Four Noble Truths and the Eightfold Path","State the goal: nirvana, freedom from suffering","Avoid judgment words; use the faith's own terms","Check: would a Buddhist agree?"],
     a:"Buddhism, founded by Siddhartha Gautama, teaches that life involves suffering caused by craving, and that it can end by following the Eightfold Path toward nirvana."},
    {q:"Identify the shared ground and one real difference between Christianity and Islam on Jesus.",
     steps:["Shared: virgin birth, Messiah, miracles, prophet (Luke 1:26-35; Qur'an 3:45-49)","Difference: Christians confess Him as Son of God, crucified and risen; Islam sees Him as a great prophet, not divine, and not crucified (Qur'an 4:157)","State both respectfully"],
     a:"Both honour Jesus as Messiah born of the virgin Mary. They differ on His divinity and crucifixion. Naming both is honest dialogue."}
  ]
},

{ grade:12, period:"II",
  study:[
    {k:"rule"},
    {k:"h3", t:"Timeline: Faith and Peace in Liberia"},
    {k:"table", head:["Year","Event"], rows:[
      ["1989","Civil war begins"],
      ["1990","Inter-Faith Mediation Committee formed by Christian and Muslim leaders"],
      ["1997","Elections after the first war"],
      ["1999–2003","Second civil war"],
      ["2003","Women of Liberia Mass Action for Peace, led by Leymah Gbowee, pressures the Accra peace talks; Comprehensive Peace Agreement signed"],
      ["2005","Truth and Reconciliation Commission established; free elections"],
      ["2011","Leymah Gbowee and Ellen Johnson Sirleaf share the Nobel Peace Prize"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Stages of Reconciliation"},
    {k:"num", items:["**Truth** — the wrong is named honestly","**Acknowledgement** — the offender accepts responsibility","**Repentance and apology**","**Forgiveness** — the victim releases revenge","**Restitution and justice** — harm repaired as far as possible","**Restored relationship** — living together again"]},
    {k:"p", t:"Forgiveness does not mean pretending nothing happened, or excusing the crime. It means refusing revenge and leaving judgment to God and just courts (Romans 12:19; Qur'an 42:40)."}
  ],
  terms:[
    {t:"Inter-Faith Mediation Committee", d:"the Christian–Muslim body that mediated during Liberia's war (1990)", x:"The Inter-Faith Mediation Committee sought ceasefires."},
    {t:"Mass Action for Peace", d:"the women's movement that pressed for peace in 2003", x:"Mass Action for Peace united Christian and Muslim women."},
    {t:"TRC", d:"the Truth and Reconciliation Commission of Liberia", x:"The TRC heard victims' testimony."},
    {t:"Comprehensive Peace Agreement", d:"the 2003 Accra agreement that ended the war", x:"The Comprehensive Peace Agreement was signed in Accra."},
    {t:"acknowledgement", d:"accepting responsibility for a wrong", x:"Acknowledgement opens the way to forgiveness."},
    {t:"revenge", d:"harming someone in return for a wrong", x:"Forgiveness gives up revenge."},
    {t:"nonviolence", d:"working for change without violence", x:"The women chose nonviolence."},
    {t:"Nobel Peace Prize", d:"a world prize for work for peace", x:"Leymah Gbowee won the Nobel Peace Prize."}
  ],
  facts:[
    {q:"What was the Inter-Faith Mediation Committee?", a:"A body of Christian and Muslim leaders formed in 1990 to mediate for peace during the civil war."},
    {q:"Who led the Women of Liberia Mass Action for Peace?", a:"Leymah Gbowee, with Christian and Muslim women, in 2003."},
    {q:"List the six stages of reconciliation.", a:"Truth, acknowledgement, repentance and apology, forgiveness, restitution and justice, restored relationship."},
    {q:"Does forgiveness cancel justice?", a:"No. It gives up revenge but leaves judgment to God and just courts (Romans 12:19; Qur'an 42:40)."}
  ],
  tf:[
    {s:"Christian and Muslim women worked together in the 2003 peace movement.", a:"true", why:"Mass Action for Peace united both faiths."},
    {s:"Forgiveness means pretending the wrong never happened.", a:"false", why:"Forgiveness names the wrong but refuses revenge."}
  ],
  worked:[
    {q:"Two families fight over land after a death, and youths threaten violence. Plan a faith-based mediation.",
     steps:["Calm the tension: call the elders, pastor and imam together","Hear both sides fully and separately","Find the facts: deeds, witnesses, custom","Seek shared interests: peace and the children's future","Agree a fair settlement and write it down","Follow up with a reconciliation meal"],
     a:"Joint religious and traditional mediation, fact-finding, a written fair settlement and a reconciliation rite prevent violence and restore relations."},
    {q:"A war victim says, \"If I forgive, justice is lost.\" Respond.",
     steps:["Acknowledge the pain","Distinguish forgiveness (personal release from revenge) from justice (courts and restitution)","Cite Romans 12:19 and Qur'an 42:40","Show the benefit: freedom from bitterness"],
     a:"Forgiveness and justice are different. She can forgive and still seek justice through lawful means, and forgiving frees her from bitterness."}
  ]
},

{ grade:12, period:"III",
  study:[
    {k:"rule"},
    {k:"h3", t:"Measuring Our Impact"},
    {k:"table", head:["Action","Impact","Better choice"], rows:[
      ["Burning plastic","Toxic smoke and air pollution","Reduce, reuse and collect for recycling"],
      ["Charcoal from cutting whole forests","Deforestation and erosion","Efficient stoves; replant trees"],
      ["Dumping waste in creeks","Flooding, cholera and dead fish","Proper disposal; community clean-ups"],
      ["Sand mining on beaches","Coastal erosion (for example at West Point and New Kru Town)","Regulated mining; alternative materials"],
      ["Hunting endangered species","Loss of wildlife such as pygmy hippos and chimpanzees","Protect species; sustainable livelihoods"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Liberia's Protected Areas"},
    {k:"p", t:"Liberia holds a large share of the remaining **Upper Guinean rainforest** of West Africa. **Sapo National Park** in Sinoe County is the country's oldest and largest national park. Protected areas guard water, climate and wildlife for future generations — a trust in the language of all three traditions (Psalm 24:1; Qur'an 6:165)."}
  ],
  terms:[
    {t:"Sapo National Park", d:"Liberia's oldest and largest national park, in Sinoe County", x:"Pygmy hippos live in Sapo National Park."},
    {t:"Upper Guinean forest", d:"the rainforest belt of West Africa, much of which lies in Liberia", x:"Liberia protects the Upper Guinean forest."},
    {t:"endangered species", d:"a species at risk of dying out", x:"The pygmy hippo is an endangered species."},
    {t:"recycling", d:"processing used materials to make new products", x:"Recycling reduces plastic waste."},
    {t:"coastal erosion", d:"the wearing away of the shoreline by the sea", x:"Coastal erosion threatens West Point."},
    {t:"reforestation", d:"replanting trees where forest was lost", x:"The youth club led reforestation."},
    {t:"sustainable", d:"meeting present needs without harming the future", x:"Sustainable farming protects the soil."},
    {t:"khalifah", d:"in Islam, humanity's role as God's steward on earth", x:"As khalifah, we must guard the earth."}
  ],
  facts:[
    {q:"What is Liberia's largest national park?", a:"Sapo National Park, in Sinoe County."},
    {q:"Give two harmful environmental practices and better choices.", a:"Burning plastic, so reduce and recycle instead; dumping waste in creeks, so dispose of it properly and hold clean-ups."},
    {q:"What does khalifah mean in the environmental teaching of Islam?", a:"Humanity is God's steward on earth, responsible for caring for it (Qur'an 2:30; 6:165)."},
    {q:"Why does sand mining matter?", a:"It worsens coastal erosion, threatening homes in communities such as West Point."}
  ],
  tf:[
    {s:"Protecting forests matters only to scientists.", a:"false", why:"The forests are a trust from God. They protect water, climate and livelihoods for everyone."},
    {s:"The pygmy hippo is found in Liberia's forests.", a:"true", why:"It is an endangered species found in places such as Sapo National Park."}
  ],
  worked:[
    {q:"A school produces 50 plastic bottles a day. If a recycling club collects 80% of them, how many are kept out of the environment in a 5-day week, and why does it matter morally?",
     steps:["Daily collected = 50 × 0.80 = 40","Weekly = 40 × 5 = 200","Remaining waste = (50 − 40) × 5 = 50","Moral link: stewardship (Genesis 2:15; Qur'an 7:31 \"do not waste\")"],
     a:"200 bottles a week are kept out of the environment. Small habits practised faithfully add up, and that is stewardship."},
    {q:"A community wants to sell its sacred grove to a logging company for quick money. Weigh the decision.",
     steps:["List the benefits: immediate income","List the costs: loss of sacred heritage, water, soil and wildlife; conflict","Apply teaching: the earth is a trust (Psalm 24:1); intergenerational duty","Seek alternatives: eco-tourism, sustainable harvesting of forest products, conservation payments"],
     a:"Protect the grove and look for sustainable income. Quick money now cannot replace what future generations would lose."}
  ]
},

{ grade:12, period:"IV",
  study:[
    {k:"rule"},
    {k:"h3", t:"A Checklist for Testing Any Religious Group"},
    {k:"table", head:["Question","Healthy sign","Warning sign"], rows:[
      ["Teaching","Agrees with the Holy Books read in context","New secret revelations only the leader knows"],
      ["Money","Open accounts; voluntary giving","Demands for payment for miracles; leader grows rich while members stay poor"],
      ["Freedom","Members may ask questions and leave","Isolation from family; fear if one leaves"],
      ["Leader","Accountable to others; humble","Claims to be beyond question"],
      ["Fruit","Love, honesty, peace (Galatians 5:22-23)","Fear, division, abuse"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Protecting the Vulnerable"},
    {k:"p", t:"Children, the elderly and people with disabilities are often accused of witchcraft, especially when illness or death strikes. Such accusations have led to beatings, exile and killings. Liberian law and all three traditions condemn them. The right response to misfortune is medical investigation, prayer and compassion."}
  ],
  terms:[
    {t:"cult", d:"a group that controls members through a leader's unchecked authority, secrecy and fear", x:"The cult cut members off from their families."},
    {t:"prosperity gospel", d:"teaching that giving money guarantees wealth and health", x:"The prosperity gospel can exploit the poor."},
    {t:"trial by ordeal", d:"a harmful traditional test of guilt, such as sassywood", x:"Trial by ordeal is banned in Liberia."},
    {t:"sassywood", d:"a trial by ordeal once used in Liberia to judge guilt", x:"The courts outlawed sassywood."},
    {t:"false miracle", d:"a staged or fake sign used to deceive", x:"The false miracle was exposed."},
    {t:"spiritual abuse", d:"using religious authority to control or harm people", x:"Spiritual abuse leaves deep wounds."},
    {t:"critical thinking", d:"examining claims carefully before believing them", x:"Critical thinking protects against deception."},
    {t:"testimony", d:"a personal account of what God has done, or evidence given", x:"True testimony is honest."}
  ],
  facts:[
    {q:"Give three warning signs of a harmful religious group.", a:"Secret revelations known only to the leader, payment demanded for miracles, isolation from family, and a leader beyond question."},
    {q:"What is sassywood, and what is its legal status?", a:"A trial by ordeal once used to judge guilt. It is banned in Liberia."},
    {q:"What test does Galatians 5:22-23 give?", a:"The fruit of the Spirit: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness and self-control."},
    {q:"What is the right response when a child is accused of witchcraft?", a:"Protect the child, investigate the real cause medically, pray, and involve authorities if the child is in danger."}
  ],
  tf:[
    {s:"A healthy religious group lets members ask questions.", a:"true", why:"Freedom to question is a healthy sign. Fear and control are warning signs."},
    {s:"Paying a large sum guarantees a miracle.", a:"false", why:"God's gifts cannot be bought (Acts 8:18-20)."}
  ],
  worked:[
    {q:"A prophet tells a poor widow to pay L$50,000 for \"breakthrough oil\" to heal her son. Test the claim.",
     steps:["Teaching: God's gifts cannot be bought (Acts 8:20)","Money: payment demanded from the poor is a warning sign","Fruit: fear and financial loss","Alternative: take the son to a clinic and pray freely","Protect her: speak to trusted leaders"],
     a:"This is exploitation. She should keep her money, take her son for treatment and seek prayer that is freely given."},
    {q:"After three deaths in a family, an elderly aunt is blamed as a witch. How should the community respond?",
     steps:["Stop the violence: protect the aunt","Investigate the causes: illness, such as malaria or TB","Consult health workers and the police","Teach: accusations are condemned by law and faith","Comfort the family"],
     a:"Protect the aunt, find the medical causes and comfort the family. The accusation is cruel and illegal."}
  ]
},

{ grade:12, period:"V",
  study:[
    {k:"rule"},
    {k:"h3", t:"Young People Who Shaped History"},
    {k:"bul", items:["**Joseph** — trusted with leadership in Egypt while young (Genesis 41)","**David** — faced Goliath as a youth (1 Samuel 17)","**Josiah** — became king at eight and reformed the nation (2 Kings 22)","**Ali ibn Abi Talib** — among the first to accept Islam as a boy","**The youths of the Cave** (Ashab al-Kahf) — young believers who stood firm (Qur'an 18:13)","**Liberian youth volunteers** — during Ebola, young people traced contacts and taught hygiene in their communities"]},
    {k:"rule"},
    {k:"h3", t:"Planning Your Future"},
    {k:"table", head:["Area","Question","Example goal"], rows:[
      ["Education","What will I study next?","Enter university or a vocational institute"],
      ["Work","How will I serve and earn?","Become a nurse, teacher, farmer or engineer"],
      ["Faith","How will I keep growing?","Daily prayer; serve in my place of worship"],
      ["Character","Which habit must I build or break?","Punctuality; stop gossip"],
      ["Community","How will I give back?","Volunteer in a literacy programme"]
    ]},
    {k:"p", t:"\"Let no one despise your youth, but be an example\" (1 Timothy 4:12). Plan with prayer (Proverbs 16:3) and remember that plans remain \"if God wills\" — **insha'Allah** (Qur'an 18:23-24)."}
  ],
  terms:[
    {t:"role model", d:"a person whose example others follow", x:"Her aunt is her role model."},
    {t:"goal", d:"a specific aim a person works to achieve", x:"Write a clear goal for next year."},
    {t:"vocational training", d:"education for a practical trade or skill", x:"Vocational training leads to jobs."},
    {t:"insha'Allah", d:"\"if God wills\": Muslims say it about future plans", x:"\"I will graduate next year, insha'Allah.\""},
    {t:"patriotism", d:"love for and loyalty to one's country", x:"Patriotism means serving Liberia honestly."},
    {t:"civic engagement", d:"taking an active part in community and national life", x:"Voting is civic engagement."},
    {t:"resilience", d:"the ability to recover from difficulty", x:"Resilience carried her through failure."},
    {t:"Ashab al-Kahf", d:"the Companions of the Cave, young believers in Qur'an 18", x:"The Ashab al-Kahf stood firm in faith."}
  ],
  facts:[
    {q:"Name three young people in Scripture who served God.", a:"Joseph, David and Josiah; in the Qur'an, the youths of the Cave."},
    {q:"What does 1 Timothy 4:12 teach the young?", a:"Not to let anyone despise their youth, but to set an example in speech, conduct, love, faith and purity."},
    {q:"What does insha'Allah express?", a:"That all plans depend on God's will (Qur'an 18:23-24)."},
    {q:"Name five areas of a future plan.", a:"Education, work, faith, character and community."}
  ],
  tf:[
    {s:"Scripture teaches that the young can serve God only when they grow old.", a:"false", why:"Joseph, David, Josiah and the youths of the Cave served while young (1 Timothy 4:12)."},
    {s:"Planning with prayer is encouraged in Scripture.", a:"true", why:"Proverbs 16:3 says to commit your work to the LORD."}
  ],
  worked:[
    {q:"Write a SMART goal for a graduate who wants to serve her community.",
     steps:["Specific: teach adults to read","Measurable: ten learners","Achievable: two evenings a week","Relevant: literacy builds the nation","Time-bound: by December"],
     a:"\"I will teach ten adults in my community to read, meeting two evenings a week, by December.\""},
    {q:"A graduate is offered a well-paid job that requires falsifying reports. Decide using faith and nation-building values.",
     steps:["Identify the conflict: money versus integrity","Faith: Proverbs 22:1; Qur'an 83:1-3 on those who cheat","Nation: falsified reports harm public trust","Alternatives: other honest work; build skills","Decide"],
     a:"Turn it down. A good name and an honest nation are worth more than dishonest pay."}
  ]
},

{ grade:12, period:"VI",
  study:[
    {k:"rule"},
    {k:"h3", t:"Answers to the Question of Meaning"},
    {k:"table", head:["View","Answer to \"Why am I here?\"","Response of the traditions"], rows:[
      ["Christianity","To know, love and glorify God and love one's neighbour","Matthew 22:37-39; Ecclesiastes 12:13"],
      ["Islam","To worship and serve God (ibadah) in all of life","Qur'an 51:56"],
      ["African Traditional Religion","To live in harmony with the Creator, ancestors, community and nature, and to leave a good name","Proverbs and elders' teaching"],
      ["Materialism","To gain possessions and pleasure","The traditions warn this is vanity (Ecclesiastes 2:11; Luke 12:15)"],
      ["Nihilism","There is no meaning","The traditions answer that life is a gift and a trust from God"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Writing a Personal Mission Statement"},
    {k:"num", items:["List your core beliefs about God and people","Name three values you will not compromise","Describe the person you want to become","State how you will serve others","Write it in two or three sentences and review it each year"]}
  ],
  terms:[
    {t:"materialism", d:"the view that possessions and pleasure are the main goals of life", x:"Materialism leaves the heart empty."},
    {t:"nihilism", d:"the belief that life has no meaning", x:"The traditions reject nihilism."},
    {t:"ibadah", d:"worship and service of God in all of life (Islam)", x:"Honest work is ibadah."},
    {t:"mission statement", d:"a short statement of one's purpose and values", x:"Her mission statement guides her choices."},
    {t:"core values", d:"the most important principles a person lives by", x:"Honesty is one of his core values."},
    {t:"fulfilment", d:"deep satisfaction from living one's purpose", x:"Service brings fulfilment."},
    {t:"eternity", d:"life without end", x:"The traditions teach we live for eternity."},
    {t:"harmony", d:"peaceful agreement among people, nature and God", x:"The elders teach harmony."}
  ],
  facts:[
    {q:"What does Qur'an 51:56 give as the purpose of human life?", a:"\"I did not create jinn and mankind except to worship Me\": service of God in all of life."},
    {q:"What is Ecclesiastes' conclusion?", a:"\"Fear God and keep His commandments, for this is the whole duty of man\" (Ecclesiastes 12:13)."},
    {q:"Distinguish materialism from nihilism.", a:"Materialism says the purpose of life is possessions and pleasure. Nihilism says life has no purpose."},
    {q:"List the steps for writing a personal mission statement.", a:"List your beliefs, name three values, describe who you want to become, state how you will serve, write it briefly and review it yearly."}
  ],
  tf:[
    {s:"The traditions teach that possessions give life its full meaning.", a:"false", why:"Luke 12:15: life does not consist in the abundance of possessions. Ecclesiastes calls it vanity."},
    {s:"In Islam, ibadah includes daily work done honestly.", a:"true", why:"Ibadah covers all of life lived in obedience to God."}
  ],
  worked:[
    {q:"Write a model personal mission statement for a Liberian graduate.",
     steps:["Beliefs: God is Creator and every person bears dignity","Values: honesty, service, faithfulness","Becoming: a trustworthy nurse","Service: care for the sick in rural Liberia","Combine into two sentences"],
     a:"\"Because God made every person with dignity, I will live with honesty, service and faithfulness. I will become a trustworthy nurse and care for the sick in rural Liberia.\""},
    {q:"A classmate says, \"Life is just about getting rich.\" Answer him from the three traditions.",
     steps:["Name the view: materialism","Christianity: Luke 12:15-21, the rich fool","Islam: Qur'an 102, rivalry in wealth distracts until the grave","Tradition: a good name outlives wealth","Offer the positive purpose"],
     a:"Wealth is not the purpose of life. The traditions agree that we live to honour God, serve others and leave a good name, and wealth is only a tool."}
  ]
}

];

/* Merge each supplement into its unit (grade + period). Study blocks go in
   before the unit's "Assignment" heading so that heading stays last. */
(function () {
  if (typeof RM_CURRICULUM_1012 === "undefined") return;
  RM_MORE_1012.forEach(function (m) {
    var u = RM_CURRICULUM_1012.filter(function (x) { return x.grade === m.grade && x.period === m.period; })[0];
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
