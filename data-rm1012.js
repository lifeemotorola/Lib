/* Curriculum data — Republic of Liberia, Senior High RELIGIOUS & MORAL
   EDUCATION, Grades 10–12. Extends the national Religious & Moral Education
   progression (data-rm.js, Grades 1–6; data-rm79.js, Grades 7–9) to Senior
   High, 6 periods per grade, so the platform covers the subject Grades 1–12.

   No official Senior High RME guide was supplied with the project, so these
   units are original teaching resources, not a transcription: they spiral the
   themes of the official Elementary and Junior High guides — God and creation,
   worship, reconciliation, peace, chastity, substance abuse, leadership,
   festivals, health — to Senior High depth, in the same multi-religious voice
   the guides require. The WASSCE Christian Religious Studies syllabus is
   transcribed separately (data-wa-crs.js); this file remains MULTI-RELIGIOUS:
   Christian, Islamic and African Traditional teaching are set side by side,
   and learners are asked to compare them with respect.

   Same unit shape as RM_CURRICULUM / RM_CURRICULUM_79 so GEN_RM renders it
   unchanged:
     terms[] {t,d,x} · facts[] {q,a} · tf[] {s,a,why} · apply[] {q,a}
     · sort {title,groups} · compare {title,caption,items} · casestudy
     · project · activities[] · materials[] · assessment[]
   Every unit carries study[] — the course text of the unit, written out as a
   block list (h3 / p / bul / num / table / rule) in the same voice as the
   Grades 1–9 files. `**bold**` marks the key terms (matching the Physics
   convention); table cells take no markup because the renderer escapes them.
   Scripture references are retained as text references only. Per the project
   rule, no online resources are referenced anywhere: the pack must stay fully
   offline.
*/

const RM_CURRICULUM_1012 = [

/* ================================ GRADE 10 ================================ */
{
  grade:10, period:"I", sem:"One", icon:"✨",
  title:"The Nature of God",
  subtitle:"The attributes and names of God in Christianity, Islam and African Traditional Religion, and the problem of evil",
  outcomes:["Learners understand who God is as taught by the Christian faith, the Islamic faith and African Traditional Religion — His attributes, His names, how He makes Himself known — and can respond thoughtfully to the question of why a good God permits suffering."],
  objectives:[
    "State and explain the attributes of God shared by the three traditions",
    "Give the names of God drawn from the Holy Bible, the Holy Qur'an and African Traditional Religion, and explain what each name teaches",
    "Distinguish general revelation from special revelation",
    "Explain the problem of evil and the responses believers give to it",
    "Compare, with respect, how the three traditions describe the one Creator"
  ],
  note:"<b>God is one</b> — the Creator, almighty, all-knowing, ever-present, holy, just and merciful. Christianity confesses God as Father, Son and Holy Spirit; Islam teaches the absolute oneness of God (<b>Tawhid</b>); African Traditional Religion honours the <b>Supreme Being</b>, the Creator of all, approached through the ancestors and the spirits He made. The three traditions name God differently, but all teach that He made all things, sees all things, and will judge all things.",
  study:[
    {k:"h3", t:"The Attributes of God"},
    {k:"p", t:"An **attribute** is something true about God's nature. The three traditions of Liberia teach these attributes of the Creator:"},
    {k:"table", head:["Attribute","What it means","A source"], rows:[
      ["Oneness","There is one God only","Deuteronomy 6:4; Qur'an 112; traditional teaching"],
      ["Creator","He made all things out of nothing","Genesis 1:1; Qur'an 2:29; the Supreme Being of the ancestors"],
      ["Almighty","His power has no limit","Genesis 17:1; Qur'an 2:20 (Al-Qadir, the All-Powerful)"],
      ["All-knowing","He knows everything, seen and unseen","Psalm 139:1-4; Qur'an 2:255"],
      ["Ever-present","He is everywhere at once","Psalm 139:7-10; Qur'an 57:4"],
      ["Holy","He is pure and set apart from evil","Isaiah 6:3; the Qur'an's name Al-Quddus, The Holy"],
      ["Just","He judges rightly and defends the wronged","Psalm 89:14; Qur'an 16:90"],
      ["Merciful","He forgives the repentant","Psalm 103:8; the Qur'an's names Ar-Rahman, Ar-Rahim"],
      ["Love","He seeks the good of His creatures","1 John 4:8; Qur'an 11:90"]
    ]},
    {k:"p", t:"No attribute stands alone: God's justice is merciful, His mercy is just, and His power is always holy. Where human beings hold one quality at the expense of another, God holds all perfectly."},
    {k:"rule"},
    {k:"h3", t:"The Names of God"},
    {k:"p", t:"A name in Scripture is not a label; it carries the person's character and work."},
    {k:"bul", items:[
      "**The Holy Bible** — God reveals His name to Moses: **I AM WHO I AM** (Exodus 3:14), the self-existing One; **God Almighty** (El Shaddai, Genesis 17:1); **The LORD Will Provide** (Jehovah Jireh, Genesis 22:14); **The LORD our Shepherd** (Psalm 23:1).",
      "**The Holy Qur'an** — God has **ninety-nine beautiful names** (Asma'ul Husna): **Ar-Rahman** (the Most Compassionate), **Al-Malik** (the King), **Al-Quddus** (the Holy), **As-Salam** (the Source of Peace), **Al-Khaliq** (the Creator). Every surah of the Qur'an except one opens by calling on **Allah, the Compassionate, the Merciful**.",
      "**African Traditional Religion** — each of Liberia's peoples has its own name in its own language for the **Supreme Being**, the Creator of the sky and the earth, the One who was never born and never dies. The elders teach that His name is honoured, not used carelessly."
    ]},
    {k:"p", t:"Learners collect the names of God used in their own community — in hymns, in the call to prayer, in the prayers of the elders — and explain what each name teaches about God's character."},
    {k:"rule"},
    {k:"h3", t:"How God Makes Himself Known — Revelation"},
    {k:"p", t:"**General revelation** is God making Himself known to all people through creation and conscience: \"The heavens declare the glory of God\" (Psalm 19:1); \"His invisible nature has been clearly perceived in the things that have been made\" (Romans 1:20); \"We shall show them Our signs in the horizons and in themselves\" (Qur'an 41:53). **Special revelation** is God making Himself known in a particular way: in the Holy Scriptures, in the prophets, and, for Christians, in Jesus Christ His Son."},
    {k:"rule"},
    {k:"h3", t:"The Problem of Evil"},
    {k:"p", t:"If God is all-good and all-powerful, why does He allow suffering? This is the **problem of evil**, and every mature believer must face it honestly. The traditions answer:"},
    {k:"bul", items:[
      "**Christianity** — evil entered through the misuse of human freedom (Genesis 3); God suffers with His people and will finally wipe away every tear (Revelation 21:4). The book of Job teaches that the sufferer may trust God even without a full explanation.",
      "**Islam** — this world is a test: \"We shall surely test you with something of fear and hunger and loss of wealth and lives\" (Qur'an 2:155); \"Allah does not burden a soul beyond what it can bear\" (Qur'an 2:286). Patience (sabr) in trial is worship.",
      "**African Traditional Religion** — misfortune is examined: some suffering comes from natural causes, some from human wrongdoing, and the elders seek its cause so harmony can be restored. The Creator remains supreme over every cause."
    ]},
    {k:"p", t:"All three traditions reject the lazy answer that the sufferer must have deserved it. Jesus corrected that error directly: neither the man born blind nor the Galileans who perished suffered because they were worse sinners (John 9:1-3; Luke 13:1-5). The believer's response is trust, compassion and practical help."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:[
      "List six attributes of God and write one sentence on each.",
      "Choose three names of God, one from each tradition, and explain what each name teaches.",
      "Explain the difference between general and special revelation with one example of each.",
      "A classmate asks why God allowed her mother to die. Write four or five sentences answering her with honesty and compassion, drawing on what you have learned."
    ]}
  ],
  focus:["The attributes of God","The names of God in the three traditions","General and special revelation","The oneness of God","The problem of evil","Responses to suffering"],
  terms:[
    {t:"attribute", d:"a quality that is true of God's nature", x:"Mercy is an attribute of God."},
    {t:"omnipotent", d:"all-powerful; having power without limit", x:"God is omnipotent over all creation."},
    {t:"omniscient", d:"all-knowing; knowing everything, seen and unseen", x:"The omniscient God sees the secret heart."},
    {t:"omnipresent", d:"present everywhere at once", x:"The omnipresent God is with us here."},
    {t:"revelation", d:"God making Himself and His will known", x:"The Scriptures are God's revelation."},
    {t:"Tawhid", d:"the Islamic doctrine of the absolute oneness of God", x:"Tawhid is the heart of Islamic teaching."},
    {t:"Trinity", d:"the Christian teaching of one God in three Persons — Father, Son and Holy Spirit", x:"Christians confess the Trinity."},
    {t:"Supreme Being", d:"the Creator God above all spirits, as taught in African Traditional Religion", x:"The elders honour the Supreme Being."},
    {t:"Asma'ul Husna", d:"the ninety-nine beautiful names of God in Islam", x:"Ar-Rahman is first of the Asma'ul Husna."},
    {t:"problem of evil", d:"the question of why a good and all-powerful God permits suffering", x:"Job faced the problem of evil."},
    {t:"free will", d:"the human power to choose, for good or for evil", x:"Free will makes love — and sin — possible."},
    {t:"sovereignty", d:"God's supreme rule over all things", x:"The sovereignty of God comforts the sufferer."}
  ],
  facts:[
    {q:"State four attributes of God shared by the three traditions.", a:"God is Creator, almighty, all-knowing and ever-present — He is also holy, just, merciful and loving."},
    {q:"What name did God reveal to Moses at the burning bush, and what does it mean?", a:"I AM WHO I AM (Exodus 3:14) — the self-existing One, who depends on nothing and no one."},
    {q:"What do the names Ar-Rahman and Ar-Rahim teach about God?", a:"That God is the Most Compassionate and the Most Merciful; every surah but one opens with these names."},
    {q:"How does African Traditional Religion speak of God?", a:"As the Supreme Being, the Creator of the sky and the earth, never born and never dying, honoured above all spirits and approached with reverence."},
    {q:"Distinguish general revelation from special revelation.", a:"General revelation is God known through creation and conscience by all people; special revelation is God making Himself known in a particular way — in the Scriptures, the prophets, and Jesus Christ."},
    {q:"Give one Bible and one Qur'an reference on God's presence.", a:"Psalm 139:7-10 (where can I flee from Your presence?) and Qur'an 57:4 (He is with you wherever you are)."},
    {q:"State the problem of evil in one sentence.", a:"If God is all-good and all-powerful, why does He allow suffering and evil?"},
    {q:"Give two answers believers give to the problem of evil.", a:"Human freedom is real and its misuse brings evil; and this life is a test in which God remains with the sufferer and will finally judge and wipe away every tear (Qur'an 2:155; Revelation 21:4)."}
  ],
  tf:[
    {s:"All three traditions teach that there is one Creator God.", a:"true", why:"The oneness of the Creator is confessed in Deuteronomy 6:4, in the Qur'an's Surah 112, and in the elders' teaching about the Supreme Being."},
    {s:"God's knowledge is limited to what human beings can see.", a:"false", why:"God is omniscient — He knows all things, seen and unseen (Psalm 139:1-4; Qur'an 2:255)."},
    {s:"Islam teaches that God has a son exactly as Christianity teaches it.", a:"false", why:"Islam teaches the absolute oneness of God and that He begets not, nor is He begotten (Qur'an 112:3); Christianity confesses the Son. The difference must be stated honestly and respectfully."},
    {s:"In African Traditional Religion the Supreme Being is one of many equal spirits.", a:"false", why:"The Supreme Being is the Creator above all spirits; the spirits and ancestors are His servants and are never equal to Him."},
    {s:"Suffering always means the sufferer has sinned.", a:"false", why:"Jesus rejected that conclusion in John 9:1-3 and Luke 13:1-5, and Job's suffering was not punishment for sin."},
    {s:"Names of God in Scripture carry meaning, not just sound.", a:"true", why:"Names such as El Shaddai, Jehovah Jireh and Ar-Rahman declare God's character and work."}
  ],
  apply:[
    {q:"A friend says, \"My father died, so either God is not good or God is not powerful.\" How do you begin to answer him?", a:"First stand with him in grief rather than arguing; then show honestly that the traditions teach both God's goodness and His power together with a world where freedom and testing are real, that Jesus refused to link suffering with particular sin, and that God promises final justice and comfort."},
    {q:"A classmate mocks the names of God used in another tradition. What do you say?", a:"That every tradition's names are precious to its people, that mocking what others hold sacred breaks the peace of the community, and that the classmate would want his own names treated with respect."},
    {q:"Why is it wrong to use the name of God carelessly or as a curse?", a:"The Second Commandment forbids taking the LORD's name in vain (Exodus 20:7); the Qur'an honours the name of Allah above all; the elders do not use the Creator's name lightly. The name stands for the Person Himself."},
    {q:"A sufferer asks, \"Where is God in my pain?\" Give the three traditions' shortest answer.", a:"With you: Christianity — God suffers with us and comforts; Islam — Allah does not burden beyond capacity and is near to the patient; tradition — the Creator's care is sought through the elders and the community, who must now act as His hands."},
    {q:"Explain why the problem of evil has no cheap answer, and why that is not a reason to abandon faith.", a:"Any one-line answer insults real pain; the traditions instead give a Person, a promise and a community — trust in God, the promise of judgment and renewal, and the duty of the community to comfort and help."}
  ],
  sort:{ title:"The nature of God", groups:[
    {name:"Attributes of God", items:["Omnipotent","Omniscient","Holy","Merciful"]},
    {name:"Names from the traditions", items:["El Shaddai","Ar-Rahman","The Supreme Being","I AM WHO I AM"]},
    {name:"Ways God is known", items:["Creation","Conscience","The Scriptures","The prophets"]},
    {name:"Wrong ideas to reject", items:["God causes every death as punishment","God knows only what we know","God competes with the spirits as an equal","Suffering proves God is absent"]}
  ]},
  compare:{ title:"The one Creator in the three traditions", caption:"Complete the table showing how each tradition describes God.",
    items:[
      {p:"Oneness", f:"Christianity: one God in three Persons; Islam: absolute oneness (Tawhid); tradition: one Supreme Being above all spirits."},
      {p:"Creator", f:"All three confess God as the Maker of the heavens and the earth and everything in them."},
      {p:"Knowledge", f:"All teach He knows the seen and the unseen; Psalm 139 and Qur'an 2:255 say it plainly."},
      {p:"Nearness", f:"All teach He is near and may be approached — through Christ, through prayer and remembrance, through the elders and the ancestors."},
      {p:"Judgment", f:"All teach God will judge every person's deeds; the question of the problem of evil ends at His throne."},
      {p:"Names", f:"Each tradition treasures its names — Jehovah, Allah, the Creator's name in each Liberian language — and treats them with reverence."}
    ]},
  casestudy:{ title:"The question at the graveside",
    text:"When Korto's grandmother was buried in Bong County, three prayers were said over the grave. The pastor read Psalm 23 and spoke of the resurrection. The imam, an old friend of the family, recited from the Holy Qur'an and spoke of the return of every soul to God. Then the town's elder poured a libation and spoke to the ancestors, asking them to receive their daughter. Walking home, Korto's little brother asked, \"Which prayer was the right one?\" Korto thought for a while and answered, \"All three were talking to the same Creator. They just know Him in different ways.\" Her uncle overheard her and said, \"Child, some grown people have fought wars over the question you just answered in one sentence.\"",
    questions:[
      {q:"What did each of the three prayers assume about God?", a:"That He is real, that He receives the dead, and that He may be approached — assumptions all three traditions share."},
      {q:"What does Korto's answer show about the attributes of God?", a:"That God is one — the same Creator is addressed by every tradition — even where the traditions differ about how He is known."},
      {q:"Why did the uncle say grown people have fought wars over this question?", a:"Because the differences between religions have sometimes been turned into violence, which makes the peaceful, respectful answer of the young even more important."},
      {q:"What is the difference between saying all prayers are the same and saying all three speak to the same Creator?", a:"The second honours what each tradition actually believes while recognising the one Creator; the first would flatten the real differences that each faith holds dear."}
    ]},
  project:{ title:"The names of God in our community",
    brief:"Collect and explain the names of God used in your own community.",
    steps:["Interview three elders or religious leaders — a Christian, a Muslim and a keeper of tradition — asking what name of God they use most and why.","Write down each name and its meaning.","Find one written source for a name from the Holy Bible and one from the Holy Qur'an.","Compare the names in a table: what does each teach about God's character?","Present your collection to the class, speaking of every tradition with respect."],
    criteria:["Three genuine interviews completed","Names accurately recorded with meanings","One biblical and one Qur'anic source correctly cited","A clear comparison table","Respectful presentation of all three traditions"]},
  activities:["List and discuss the attributes of God shared by the three traditions","Collect and explain the names of God used in the community","Discuss the problem of evil in small groups and report the best answers heard","Write a short reflection titled \"What I believe about God\""],
  materials:["The Holy Bible — Exodus 3:14; Psalm 139; John 9:1-3; 1 John 4:8","The Holy Qur'an — Surah 112; 2:255; 41:53","Elders and religious leaders of the community","Secondary religious literature"],
  assessment:["Interview project","Class discussion","Comparison table","Written reflection","Quizzes and tests"]
},

{
  grade:10, period:"II", sem:"One", icon:"📚",
  title:"The Sources of Religious Authority",
  subtitle:"The Holy Bible, the Holy Qur'an and Hadith, oral tradition, and conscience as guides for moral living",
  outcomes:["Learners understand where religious authority comes from in the three traditions — the written scriptures, the oral tradition and the inner voice of conscience — and can explain how a believer uses these sources to make moral decisions."],
  objectives:[
    "Describe the structure and contents of the Holy Bible",
    "Describe the Holy Qur'an and the place of the Hadith in Islam",
    "Explain the oral tradition and its custodians in African Traditional Religion",
    "Explain the role of conscience as an inner source of moral authority",
    "Outline the steps by which a believer uses these sources to decide a moral question"
  ],
  note:"<b>Authority</b> is the right to be obeyed. For the Christian, the ultimate written authority is the <b>Holy Bible</b>; for the Muslim, the <b>Holy Qur'an</b>, explained by the <b>Hadith</b>; for the follower of tradition, the <b>oral tradition</b> kept by the elders; and in every tradition, <b>conscience</b> — the inner witness of right and wrong. A believer who ignores the sources walks in the dark.",
  study:[
    {k:"h3", t:"What Authority Means"},
    {k:"p", t:"**Religious authority** is the right and power to say what is true and what must be done. In each tradition authority flows from God Himself, and it is carried by the sources He has given: holy books, holy persons and the voice He placed within the human heart. Where the sources disagree with a person's wishes, the believer submits to the sources — that is what makes the authority real."},
    {k:"rule"},
    {k:"h3", t:"The Holy Bible"},
    {k:"p", t:"The Holy Bible is the Christian scriptures: **sixty-six books**, written by many authors over many centuries, gathered into two testaments. The **Old Testament** (39 books) holds the Law, the histories, the Psalms and wisdom, and the Prophets. The **New Testament** (27 books) holds the four Gospels, the Acts of the Apostles, the Epistles and the Revelation. Christians believe the scriptures are \"God-breathed and profitable for teaching, for reproof, for correction and for training in righteousness\" (2 Timothy 3:16-17), and call the word \"a lamp to my feet and a light to my path\" (Psalm 119:105)."},
    {k:"bul", items:["The Bible is read in whole churches together, not only in private — the community guards the meaning","It is handled with respect: not placed on the floor, not used for oaths lightly","Its chief characters and teachings are learned by heart from childhood"]},
    {k:"rule"},
    {k:"h3", t:"The Holy Qur'an and the Hadith"},
    {k:"p", t:"The **Holy Qur'an** is the Muslim scripture: **114 surahs** revealed by God through the Angel Jibril (Gabriel) to the Prophet Muhammad over about twenty-three years, memorised and recited, and preserved in Arabic. Muslims honour it as the very word of God; it is recited aloud as worship, and memorising it in full is a mark of great learning. God promises to guard it: \"We have sent down the Reminder, and We will guard it\" (Qur'an 15:9)."},
    {k:"p", t:"The **Hadith** are the collected sayings and deeds of the Prophet Muhammad, handed down by his companions and sifted by scholars for authenticity. The Qur'an commands; the Hadith shows how the command is lived — how to pray, greet, trade and treat the family. Together with the Qur'an the Hadith forms the **Sunnah**, the Prophet's example, which every Muslim follows."},
    {k:"rule"},
    {k:"h3", t:"The Oral Tradition and its Custodians"},
    {k:"p", t:"African Traditional Religion has no written scripture; its authority lives in the **oral tradition** — the myths that tell of the Creator and the beginnings, the proverbs that compress wisdom, the songs, the taboos and the rites, all handed from the elders to the young around the fire and at the ceremonies. The **custodians** are the elders, the traditional priests and the heads of the religious societies. The community itself is the book: as long as the community remembers rightly, the tradition lives. A proverb says the death of an old person is the burning of a library."},
    {k:"rule"},
    {k:"h3", t:"Conscience — the Inner Source"},
    {k:"p", t:"Beside the outward sources God has set an inward one. The Apostle Paul writes that even those without the written law show the work of the law written on their hearts, \"their conscience also bearing witness\" (Romans 2:14-15). The Qur'an speaks of the soul and what God inspired in it of its wrong and its right (Qur'an 91:7-10). Conscience must be **formed** — trained by teaching and practice — because an untrained conscience can be mistaken; but a conscience formed by God's word and the community's wisdom is a lamp within."},
    {k:"rule"},
    {k:"h3", t:"Making a Moral Decision with the Sources"},
    {k:"num", items:[
      "Ask what the question really is, and who will be hurt or helped.",
      "Search the sources: what does the Bible, the Qur'an with the Hadith, or the tradition of the elders say?",
      "Listen to the community's teaching — the pastor, the imam, the elders have met this question before.",
      "Examine your conscience and your motive honestly.",
      "Choose the right, even when it costs, and trust God with the result."
    ]},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:[
      "Name the two testaments of the Bible and the number of books in each.",
      "Explain the difference between the Qur'an and the Hadith.",
      "Who are the custodians of the oral tradition, and why are they compared to a library?",
      "Describe the five steps of making a moral decision, and apply them to a case of found money."
    ]}
  ],
  focus:["What religious authority means","The Holy Bible — structure and use","The Holy Qur'an and the Hadith","The oral tradition and its custodians","Conscience as an inner source","Steps in moral decision-making"],
  terms:[
    {t:"authority", d:"the right to be believed and obeyed", x:"The scriptures carry God's authority."},
    {t:"scripture", d:"a sacred writing regarded as the word of God", x:"The Holy Bible is the Christian scripture."},
    {t:"testament", d:"one of the two main divisions of the Bible", x:"The New Testament begins with the Gospels."},
    {t:"surah", d:"a chapter of the Holy Qur'an", x:"The Qur'an has one hundred and fourteen surahs."},
    {t:"Hadith", d:"a collected saying or deed of the Prophet Muhammad", x:"The Hadith shows how the Qur'an is lived."},
    {t:"Sunnah", d:"the example and way of the Prophet Muhammad", x:"Muslims follow the Sunnah in daily life."},
    {t:"oral tradition", d:"teaching handed down by word of mouth", x:"Proverbs carry the oral tradition."},
    {t:"custodian", d:"a person entrusted with keeping something safe", x:"The elders are custodians of the tradition."},
    {t:"conscience", d:"the inner sense of right and wrong", x:"A formed conscience warns before the act."},
    {t:"taboo", d:"a traditional prohibition of a harmful act", x:"The taboo protects the community."},
    {t:"parable", d:"a short story teaching a moral or spiritual truth", x:"Jesus taught in parables."},
    {t:"proverb", d:"a short traditional saying that states a truth", x:"A proverb says much in few words."}
  ],
  facts:[
    {q:"How many books are in the Holy Bible, and how are they divided?", a:"Sixty-six books: thirty-nine in the Old Testament and twenty-seven in the New Testament."},
    {q:"What is the Hadith and why is it needed?", a:"The collected sayings and deeds of the Prophet Muhammad; it is needed because it shows how the commands of the Qur'an are put into practice."},
    {q:"How was the Qur'an given, according to Islam?", a:"God revealed it through the Angel Jibril to the Prophet Muhammad over about twenty-three years; it is preserved in Arabic."},
    {q:"Who keeps the authority of African Traditional Religion?", a:"The elders, the traditional priests and the heads of the religious societies — custodians of the oral tradition of myths, proverbs, songs, taboos and rites."},
    {q:"Which verse calls the scriptures a guide for the feet?", a:"Psalm 119:105 — \"Your word is a lamp to my feet and a light to my path.\""},
    {q:"What does Romans 2:14-15 teach about conscience?", a:"That God's law is written on human hearts, and conscience bears witness, so that even those without the written law know right from wrong."},
    {q:"Why must conscience be formed?", a:"Because an untrained conscience can be mistaken or hardened; it must be taught by the sources and the community to judge rightly."},
    {q:"List the five steps of a moral decision.", a:"Identify the question and who is affected; search the sources; listen to the community's teaching; examine conscience and motive; choose the right and trust God."}
  ],
  tf:[
    {s:"The Bible is the only source of authority a Christian recognises.", a:"false", why:"Christians also recognise conscience, the teaching of the church and the guidance of the Holy Spirit — but the Bible is the written standard against which all are tested."},
    {s:"The Hadith carries the same authority as the Qur'an itself.", a:"false", why:"The Qur'an is the very word of God; the Hadith explains and applies it through the Prophet's example, and its reports are graded for authenticity."},
    {s:"African Traditional Religion has no authority because it has no book.", a:"false", why:"Its authority is the oral tradition, kept by custodians; a living memory can bind a community as firmly as writing."},
    {s:"Conscience alone is enough to decide every moral question.", a:"false", why:"Conscience can be mistaken or badly trained; it must be formed by the scriptures, the tradition and the community."},
    {s:"Memorising scripture is a practice found in Christianity and Islam alike.", a:"true", why:"Christian children learn verses by heart, and memorising the whole Qur'an is a mark of Islamic learning."},
    {s:"Oral tradition includes myths, proverbs, songs and taboos.", a:"true", why:"All of these carry the teaching of the tradition from the elders to the young."}
  ],
  apply:[
    {q:"You find an envelope of money on the school ground. Using the five steps, decide what to do.", a:"Question: whose money and who is hurt if kept? Sources: \"You shall not steal\" (Exodus 20:15); the Qur'an commands the returning of trusts (4:58); the tradition condemns the keeper of what is not his. Community: hand it to a teacher as the school's rule requires. Conscience: keeping it would torment a formed conscience. Decision: hand it in at once."},
    {q:"A friend quotes half a verse to justify cheating. How do the sources correct him?", a:"Check the whole passage and its context, because scripture is not to be twisted (2 Peter 3:16); the Qur'an condemns those who change words from their places; and the community's teachers can settle the meaning."},
    {q:"An elder teaches something you believe contradicts the scriptures you trust. What is the respectful path?", a:"Ask questions rather than accuse; study the sources humbly; seek counsel from trusted teachers of your own tradition; and hold your conviction without despising the elder — truth is tested, not shouted."},
    {q:"Your conscience says one thing and your friends say another. How do you decide?", a:"Test the two voices against the sources and their fruits: scripture, the tradition, and the teaching of the community; a pressured conscience usually needs courage, not new information."},
    {q:"Why is the death of an elder compared to a burning library?", a:"Because the oral tradition lives in its custodians; when one dies without passing on what he carried, part of the community's memory is lost forever."}
  ],
  sort:{ title:"Sources of religious authority", groups:[
    {name:"Written sources", items:["The Holy Bible","The Holy Qur'an","The collected Hadith","Church and mosque teaching books"]},
    {name:"Carriers of oral tradition", items:["The elders","Traditional priests","Heads of religious societies","The community itself"]},
    {name:"Inner and living sources", items:["Conscience","The teaching office of the community","Reason tested by scripture","The example of the godly"]},
    {name:"Abuses of authority", items:["Twisting a verse from context","Inventing sayings no source contains","Silencing conscience with money","Refusing all correction"]}
  ]},
  compare:{ title:"The three sources compared", caption:"Complete the table comparing the Bible, the Qur'an with Hadith, and the oral tradition.",
    items:[
      {p:"Form", f:"The Bible: sixty-six gathered books; the Qur'an: one book of 114 surahs with the Hadith collections; the oral tradition: memory carried by persons."},
      {p:"Origin", f:"Christians believe the Bible is God-breathed through human authors; Muslims believe the Qur'an is God's word recited by the Prophet; tradition holds its teaching comes from the Creator through the ancestors."},
      {p:"Language", f:"The Bible is translated into nearly every language; the Qur'an is recited in its Arabic and translated for study; the oral tradition lives in each people's mother tongue."},
      {p:"Custodians", f:"The church and its teachers; the imams and scholars; the elders and traditional priests."},
      {p:"How used", f:"Read and preached; recited and memorised; told, sung and enacted at the rites."},
      {p:"Shared purpose", f:"All three guide the believer to know God, do right, and be judged responsibly."}
    ]},
  casestudy:{ title:"The disputed boundary verse",
    text:"In a village in Nimba County, two families quarrelled over a palm grove. One family sent for their pastor, who read a verse about God giving the land to the faithful. The other family sent for their imam, who read a verse about the return of trusts. The quarrel grew hotter, because each side said its book had settled the matter. At last the town chief called both religious leaders and the oldest woman of the town, who was a keeper of tradition. She asked two questions: \"Was anything bought or given at any time, and who was there?\" and \"What do your own books say about loving the neighbour you are shouting at?\" The two leaders looked at each other and laughed, ashamed. The witnesses were heard, the true boundary was found, and the two families shared one pot of rice that evening.",
    questions:[
      {q:"What mistake did each family make in using its source of authority?", a:"Each used a verse as a weapon without asking what the whole scripture teaches about the case; a verse torn from its context can be made to serve greed."},
      {q:"Which source of authority did the old woman represent, and how did she use it?", a:"The oral tradition — she used the community's memory of witnesses and proverbs of neighbourliness to test both claims."},
      {q:"How did her second question restore the authority of the scriptures themselves?", a:"It returned both sides to the plain teaching both books share — love of neighbour — which no interpretation is allowed to overturn."},
      {q:"What does the story teach about the sources working together?", a:"Written scripture, oral memory and the community's counsel each answer part of a question; justice is best found where all three are heard with respect."}
    ]},
  project:{ title:"A source of our own",
    brief:"Show how one source of religious authority guides a real decision in your community.",
    steps:["Choose one source — the Bible, the Qur'an with Hadith, or the oral tradition.","Interview a believer who follows that source about a real decision it guided.","Record the exact teaching used — the verse, the surah, the Hadith or the proverb.","Describe the decision and its outcome.","Present to the class, and answer questions about how the source's authority was recognised."],
    criteria:["A real interview, honestly reported","The teaching quoted accurately","The decision and outcome clearly described","Respect shown for the source","Clear answers to questions"]},
  activities:["Outline the structure of the Bible from memory and check it","Compare the contents of the Qur'an and the Hadith in a table","Invite an elder to class to tell one proverb and one myth and explain their authority","Practise the five steps on two class cases"],
  materials:["The Holy Bible — Psalm 119:105; Romans 2:14-15; 2 Timothy 3:16-17","The Holy Qur'an — 15:9; 91:7-10; 4:58","Collections of Liberian proverbs and oral literature","Elders and religious leaders of the community"],
  assessment:["Structure quiz","Interview project","Moral decision exercise","Class presentation","Written tests"]
},

{
  grade:10, period:"III", sem:"One", icon:"🙏",
  title:"Worship and Devotion",
  subtitle:"Private and corporate worship, the elements and symbols of worship, and giving as worship in the three traditions",
  outcomes:["Learners understand what worship is, distinguish its private and corporate forms in the Christian, Islamic and traditional communities, interpret its symbols, and practise giving as an act of worship."],
  objectives:[
    "Define worship and explain the word's origin",
    "Distinguish private devotion from corporate worship",
    "Describe the main forms of worship in Christianity, Islam and African Traditional Religion",
    "Explain the meaning of common symbols used in worship",
    "Explain offering, tithe, zakat and communal giving as worship"
  ],
  note:"<b>Worship</b> is the honour given to God — the word comes from \"worth-ship\", declaring what God is worth. It is offered <b>privately</b> in personal prayer and devotion, and <b>corporately</b> when the community gathers — in the church service, the congregational prayer, and the traditional rite. True worship is shown not only in the song and the ritual but in obedience: \"to obey is better than sacrifice\" (1 Samuel 15:22), and the prayer that does not restrain evil has missed its end (Qur'an 29:45).",
  study:[
    {k:"h3", t:"What Worship Is"},
    {k:"p", t:"**Worship** is the response of the whole person to the worth of God — adoration, thanksgiving, confession, petition and service. It is due to God alone; the angels refuse worship for themselves, and the traditional priest directs honour past the ancestors to the Creator. Worship is both **private** — the believer alone with God — and **corporate** — the community gathered in one place and one voice."},
    {k:"rule"},
    {k:"h3", t:"Private Devotion"},
    {k:"bul", items:[
      "**Christian devotion** — personal prayer, morning and evening; the quiet reading of the Bible; the giving of thanks before meals; family altars where the household prays together",
      "**Muslim devotion** — the five daily prayers (salah) prayed wherever the believer is, with the washing (wudu) beforehand; personal supplication (dua); the remembrance of God (dhikr) on the beads; the reading of the Qur'an",
      "**Traditional devotion** — the greeting of the new day; the libation poured; the personal word to the ancestors; the observance of the taboos as a daily act of reverence"
    ]},
    {k:"p", t:"Private devotion is the root of corporate worship: the community that never prays alone prays poorly together, and the believer who worships only in public is known by the tradition to be performing rather than praying."},
    {k:"rule"},
    {k:"h3", t:"Corporate Worship in the Three Traditions"},
    {k:"table", head:["Tradition","Gathering","Chief elements"], rows:[
      ["Christianity","Sunday service, weekday services, revival nights","Hymns and praise, prayer, the reading and preaching of the Word, offering, baptism and the Lord's Supper (Holy Communion)"],
      ["Islam","The five daily prayers in congregation; Jumu'ah, the Friday congregational prayer; the Eid festivals","The call to prayer, the recitation of the Qur'an, the sermon, the movement of prayer in rows, the collection for the needy"],
      ["African Traditional Religion","The community rite at the festivals, the harvest thanksgiving, rites for birth, marriage and death","Libation, drumming, song and dance, the word of the elder, sacrifice and the shared meal"]
    ]},
    {k:"p", t:"In worship the community remembers what it believes: the Passion in the Communion, the deliverance of Israel in the Psalms, the giving of the Qur'an in Ramadan's nights, the faithfulness of the ancestors at the harvest. Worship that does not teach is entertainment."},
    {k:"rule"},
    {k:"h3", t:"Symbols in Worship"},
    {k:"bul", items:[
      "**The cross** — the death of Christ and the victory over death",
      "**Water** — cleansing: baptism in the church, the washing before salah, the pure water of the traditional rite",
      "**Light** — God's presence: the candles of the church, the lamp, the light of Eid",
      "**The crescent and star** — the marking of the Islamic months and festivals",
      "**The kola and the white chalk** — in the traditional rite, hospitality and purity",
      "**Bread and cup** — the body and blood of Christ in the Lord's Supper"
    ]},
    {k:"p", t:"A symbol is a visible thing that carries an invisible meaning. The believer who understands the symbol worships with the heart and not the eyes only."},
    {k:"rule"},
    {k:"h3", t:"Giving as Worship"},
    {k:"p", t:"Offering is worship with the hands. The Christian gives the **tithe** and the freewill offering — \"God loves a cheerful giver\" (2 Corinthians 9:7). The Muslim gives **zakat**, the purifying due on wealth, one of the five pillars, and **sadaqah**, voluntary charity — \"whatever good you spend, it will be repaid to you in full\" (Qur'an 2:272). The traditional community gives the **first fruits** at harvest and contributes the communal labour that roofs a neighbour's house. Giving honours God by declaring that all we have is His."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:[
      "Define worship and trace the meaning of the word.",
      "Compare private devotion in the three traditions in a table.",
      "Choose three symbols of worship and explain each.",
      "Explain the difference between the tithe, zakat and sadaqah, and the first fruits.",
      "Attend (with permission) or interview someone about a worship service, and report what the community remembered in it."
    ]}
  ],
  focus:["The meaning of worship","Private devotion","Corporate worship in the three traditions","Symbols and their meanings","Giving as worship","Obedience as the test of worship"],
  terms:[
    {t:"worship", d:"the honour and adoration given to God", x:"Worship declares God's worth."},
    {t:"devotion", d:"private, regular worship of God", x:"Her morning devotion never failed."},
    {t:"salah", d:"the five daily prayers of Islam", x:"Salah orders the Muslim's day."},
    {t:"Jumu'ah", d:"the Friday congregational prayer of Islam", x:"Jumu'ah gathers the community."},
    {t:"dua", d:"personal supplication to God in Islam", x:"He raised his hands in dua."},
    {t:"dhikr", d:"the remembrance of God, repeated in devotion", x:"Dhikr keeps God on the heart."},
    {t:"libation", d:"the pouring out of drink as an offering", x:"The elder poured the libation."},
    {t:"Communion", d:"the Lord's Supper, the bread and the cup", x:"The church shares Holy Communion."},
    {t:"tithe", d:"a tenth of income given to God's work", x:"The tithe is returned, not given."},
    {t:"zakat", d:"the Islamic purifying due on wealth for the needy", x:"Zakat is one of the five pillars."},
    {t:"sadaqah", d:"voluntary charity in Islam", x:"Sadaqah is given in secret."},
    {t:"symbol", d:"a visible thing carrying an invisible meaning", x:"Water is a symbol of cleansing."}
  ],
  facts:[
    {q:"Where does the word worship come from and what does it mean?", a:"From \"worth-ship\" — declaring what God is worth; it is the honour and adoration due to God alone."},
    {q:"Name the five daily prayers of Islam and the Friday congregational prayer.", a:"Fajr, Zuhr, Asr, Maghrib and Isha; the Friday congregational prayer is Jumu'ah."},
    {q:"What are the chief elements of a Christian Sunday service?", a:"Hymns and praise, prayer, the reading and preaching of the Word, the offering, and the sacraments — baptism and the Lord's Supper."},
    {q:"What is poured in the traditional rite, and what does it mean?", a:"The libation — drink poured out to honour the Creator and the ancestors, sealing a prayer or a covenant."},
    {q:"Explain three symbols of worship and their meanings.", a:"The cross — Christ's death and victory; water — cleansing in baptism and before salah; light — the presence of God."},
    {q:"What is the difference between zakat and sadaqah?", a:"Zakat is the obligatory purifying due on wealth, one of the five pillars; sadaqah is voluntary charity given any time, often in secret."},
    {q:"Which verse teaches that prayer must change conduct?", a:"Qur'an 29:45 — prayer restrains from indecency and evil."},
    {q:"Which verse teaches that obedience matters more than ritual?", a:"1 Samuel 15:22 — \"to obey is better than sacrifice\"; Jesus says the same in Matthew 5:23-24 about reconciling before offering."}
  ],
  tf:[
    {s:"Worship may be given to angels, ancestors and saints as to God.", a:"false", why:"Worship is due to God alone; honour may be given to the wise and the departed, but adoration belongs to the Creator alone."},
    {s:"Private devotion strengthens corporate worship.", a:"true", why:"The believer who prays alone joins the community from the heart; public worship without private devotion becomes performance."},
    {s:"The Muslim prays five times a day wherever he is.", a:"true", why:"Salah is prayed at home, at school, at work — after the washing, facing the qiblah."},
    {s:"Symbols in worship are merely decoration.", a:"false", why:"A symbol carries meaning — water declares cleansing, light declares presence; removing the meaning leaves an empty form."},
    {s:"Zakat is a voluntary kindness to the poor.", a:"false", why:"Zakat is an obligatory due on wealth, one of the five pillars; sadaqah is the voluntary charity."},
    {s:"The offering is part of worship, not a break from it.", a:"true", why:"Giving declares that all we have is God's; it is worship with the hands."}
  ],
  apply:[
    {q:"A student says worship is boring and only for old people. Answer him from what worship is.", a:"Worship is the response of the whole person to God's worth; if it feels empty the likely cause is that the heart is elsewhere — private devotion, honest confession and serving others restore it."},
    {q:"Your family cannot afford a big offering. Is your worship poorer than the rich giver's?", a:"No — the widow's two coins outweighed the rich men's gifts (Mark 12:41-44); God measures the heart, and service, hospitality and care for the needy are also offering."},
    {q:"A friend attends Jumu'ah but continues to cheat in trade the same evening. What does the Qur'an say of this?", a:"Qur'an 29:45 — prayer is meant to restrain from indecency and evil; worship that changes nothing has not reached its end (compare 1 Samuel 15:22)."},
    {q:"You are asked to explain the symbols at a friend's traditional rite. How do you behave?", a:"Ask rather than assume, listen with respect, describe the meanings as the elders give them, and never mock what another holds sacred."},
    {q:"Design one week of private devotion for yourself: name the time, the place and the content.", a:"For example: fifteen minutes at dawn — a psalm or a surah read, three thanksgivings written, one petition for the family, closing with the Lord's Prayer or a dua; the same each evening."}
  ],
  sort:{ title:"Forms and parts of worship", groups:[
    {name:"Private devotion", items:["Morning prayer","Bible or Qur'an reading","Dhikr and dua","Family altar"]},
    {name:"Corporate worship", items:["Sunday service","Jumu'ah","The festival rite","The harvest thanksgiving"]},
    {name:"Symbols", items:["Cross","Water","Light","Kola and chalk"]},
    {name:"Kinds of giving", items:["Tithe","Zakat","Sadaqah","First fruits"]}
  ]},
  compare:{ title:"Worship in the three traditions", caption:"Complete the table of worship forms and what each remembers.",
    items:[
      {p:"Weekly gathering", f:"The Christian Sunday service and the Muslim Jumu'ah; the traditional week gathers at the rites and the festivals rather than a fixed day."},
      {p:"Daily rhythm", f:"Christian morning and evening prayer; the five salah; the traditional greeting of the day and the taboos kept."},
      {p:"Sacred meal", f:"Holy Communion in the church; the fast-breaking meal of Ramadan and the Eid feast; the shared meal of the community rite."},
      {p:"Word and memory", f:"The sermon from the Bible; the Qur'an recited and the khutbah preached; the elder's word and the retelling of the myths."},
      {p:"Offering", f:"Tithe and freewill offering; zakat and sadaqah; first fruits and communal labour."},
      {p:"Test of true worship", f:"Obedience and mercy — 1 Samuel 15:22; Qur'an 29:45; the proverb that the rite without righteousness profits nothing."}
    ]},
  casestudy:{ title:"The service that stayed outside",
    text:"A church in Paynesville planned a great thanksgiving service. The choir rehearsed for weeks, and the drums were new. On the Sunday, an old woman came whose wrapper was torn, and a boy came whose shirt was unbuttoned, and a mentally troubled man came who talked loudly to himself. Two ushers seated them at the very back, behind a pillar, and one suggested the man be removed. After the service the pastor stood up and said, \"Today we sang for two hours, but our worship never entered the house. Christ says: when you give a feast, invite the poor, the crippled, the lame. They were here, and we hid them.\" The next Sunday the ushers were changed, and the front seats were given to whoever came first. Attendance among the poor grew so much that benches had to be added, and the offering grew with it.",
    questions:[
      {q:"Why did the pastor say the worship had never entered the house?", a:"Because worship that dishonours the poor is not accepted; the honor given to God is tested by the honour given to the least (Luke 14:12-14)."},
      {q:"What symbol of the church's failure did the pillar become?", a:"It hid the very people God's house is for; the building was right but the heart of the welcome was wrong."},
      {q:"What changed first — the benches or the offering? What does that teach?", a:"The welcome changed first and the offering followed; giving flows from love, not from pressure."},
      {q:"How would the other traditions judge the same case?", a:"Islam forbids turning away the poor from the gathering, and the tradition counts hospitality to the stranger as the first rite; all three would side with the pastor."}
    ]},
  project:{ title:"A worship visit report",
    brief:"Learn one act of worship from a tradition not your own, and report accurately.",
    steps:["With your teacher's arrangement, visit a service or rite of another tradition, or interview one of its members.","Record the order of the worship: what is done, said, sung, given.","Ask a leader the meaning of two symbols or actions you saw.","Write what the community remembered in its worship that day.","Present the report, speaking of what you saw with respect."],
    criteria:["Order of worship accurately recorded","Two symbols explained by a leader","The remembered event identified","A respectful written report","Clear presentation and answers"]},
  activities:["Compare private devotion in the three traditions in a table","Draw and label six symbols of worship","Practice explaining the tithe, zakat, sadaqah and first fruits","Discuss: how does obedience test worship?"],
  materials:["The Holy Bible — 1 Samuel 15:22; Mark 12:41-44; 2 Corinthians 9:7","The Holy Qur'an — 29:45; 2:272","Elders and religious leaders of the community","Hymn books, prayer mats and the objects of the rites"],
  assessment:["Symbol quiz","Comparison table","Worship visit report","Class discussion","Written tests"]
},

{
  grade:10, period:"IV", sem:"Two", icon:"💒",
  title:"Marriage and Family Life",
  subtitle:"The purposes and types of marriage in Liberia, the duties of spouses, parents and children, and the challenges families face",
  outcomes:["Learners understand marriage as a covenant before God and the foundation of the family, know the types of marriage recognised in Liberia, can state the duties of husband, wife, parents and children from the teaching of the three traditions, and can discuss the challenges of family life with maturity."],
  objectives:[
    "Define marriage and state its purposes",
    "Describe the customary, statutory, Christian and Islamic forms of marriage in Liberia",
    "State the duties of husbands, wives, parents and children from the three traditions",
    "Discuss polygyny, divorce and widowhood with fairness",
    "Explain why the family is the first school of faith and values"
  ],
  note:"<b>Marriage</b> is the covenant of a man and a woman to live as husband and wife, blessed by God and witnessed by the community. In Liberia it may be <b>customary</b> (concluded with the dowry among the families), <b>statutory</b> (before the court), or solemnised in the <b>church</b> or the <b>mosque</b> — and many couples conclude more than one. The family built on marriage is the first school: the child first learns of God, honesty and respect at the mother's knee and the father's table (Proverbs 22:6; Qur'an 31:14).",
  study:[
    {k:"h3", t:"What Marriage Is and Is For"},
    {k:"p", t:"Marriage is a **covenant** — a promise made before God and the community — not a private experiment. The traditions give its purposes:"},
    {k:"bul", items:[
      "**Companionship** — \"It is not good that the man should be alone\" (Genesis 2:18); \"He created for you mates that you might find tranquillity in them, and He placed between you affection and mercy\" (Qur'an 30:21)",
      "**The gift of children**, raised in the fear of God",
      "**Mutual support** — one helping the other in work, hardship and old age",
      "**The ordering of community life** — the joining of families, and the care of the weak"
    ]},
    {k:"rule"},
    {k:"h3", t:"The Forms of Marriage in Liberia"},
    {k:"table", head:["Form","How concluded","Witnessed by"], rows:[
      ["Customary marriage","The dowry is presented and accepted between the families","The elders and both families"],
      ["Statutory (civil) marriage","Before a court or official of the state","The law of the Republic"],
      ["Christian marriage","The vows and blessing in church","The church and the families"],
      ["Islamic marriage","The nikah with the mahr, the gift to the bride","The mosque community and the families"]
    ]},
    {k:"p", t:"Many Liberian couples conclude the customary marriage first, later adding the church, mosque or court ceremony. The elders teach that the marriage is between families, not persons alone — so the families stand behind it, and they must not stand aside from it."},
    {k:"rule"},
    {k:"h3", t:"Preparation and Courtship"},
    {k:"p", t:"The traditions require **maturity**, **consent** and **honesty** before marriage. Christian teaching joins courtship to prayer and purity; Islamic teaching guards the couple's meeting with family supervision and sets the mahr as the bride's own security; the tradition requires the families' consent and the investigation of character. A person who will not be truthful in courtship will not be faithful in marriage. Early marriage before adulthood is rejected by the faiths and forbidden by Liberia's law protecting persons under eighteen."},
    {k:"rule"},
    {k:"h3", t:"The Duties of Husband and Wife"},
    {k:"bul", items:[
      "**Husbands** — love your wives as Christ loved the church (Ephesians 5:25); live with them in kindness (Qur'an 4:19); provide, consult and never raise the hand in anger",
      "**Wives** — respect and build the house; the wise woman of Proverbs 31 works, plans and is honoured; partnership, not servanthood",
      "**Both** — faithfulness (Exodus 20:14; Qur'an 24:32), forgiveness, patience, and the keeping of confidences"
    ]},
    {k:"p", t:"No tradition permits the beating or terrorising of a spouse. Domestic violence is a crime before the Republic and a sin before God; the community that hears it and stays silent shares the wrong."},
    {k:"rule"},
    {k:"h3", t:"Parents and Children"},
    {k:"bul", items:[
      "**Parents** — \"Train up a child in the way he should go\" (Proverbs 22:6); \"do not provoke your children to anger, but bring them up in the discipline of the Lord\" (Ephesians 6:4); a father's duty in the Hadith does not end at feeding — he must teach and give a good name",
      "**Children** — \"Honour your father and your mother\" (Exodus 20:12); \"be kind to your parents... and say not to them a word of contempt\" (Qur'an 17:23-24); in the tradition, the child greets the elder and carries the elder's word"
    ]},
    {k:"rule"},
    {k:"h3", t:"Challenges Families Face"},
    {k:"bul", items:[
      "**Polygyny** — permitted in customary practice and conditionally in the Qur'an (4:3, only with equal justice, which the Qur'an itself calls beyond most men); the Christian standard is one husband, one wife (Genesis 2:24; Matthew 19:4-6)",
      "**Divorce** — Moses allowed it for hardness of heart; Jesus calls the marriage union God's design (Matthew 19:3-9); Islam permits it as a last resort, \"the most disliked of permitted things\" in the Hadith, with just settlement (Qur'an 2:229-231)",
      "**Widowhood** — the widow must be protected, not dispossessed; \"religion that is pure before God is this: to visit orphans and widows in their affliction\" (James 1:27)",
      "**Poverty and distance** — work that separates spouses; the family that prays and plans together endures"
    ]},
    {k:"rule"},
    {k:"h3", t:"The Family — the First School"},
    {k:"p", t:"The family is the first school of faith and of every value: honesty, sharing, respect, forgiveness and reverence are learned at home before they are tested in the street. A nation is the sum of its homes; when the homes fail, the nation is already failing. This is why the traditions defend marriage and equip it with teaching, ceremony and support."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:[
      "State the four purposes of marriage.",
      "Name the four forms of marriage recognised in Liberia and how each is concluded.",
      "Write the duty of the husband, the wife, the parents and the children, with one reference from each tradition.",
      "Discuss in groups: what should a young person look for in a future spouse? Report your group's five marks.",
      "Interview a happily married elder couple; ask what has kept their marriage, and report their three chief counsels."
    ]}
  ],
  focus:["The covenant and purposes of marriage","The four forms of marriage in Liberia","Preparation, maturity and consent","Duties of spouses, parents and children","Polygyny, divorce and widowhood","The family as the first school"],
  terms:[
    {t:"covenant", d:"a solemn promise made before God and witnessed by the community", x:"Marriage is a covenant, not a contract only."},
    {t:"dowry", d:"the gift presented by the husband's family in customary marriage", x:"The dowry joins the two families."},
    {t:"nikah", d:"the Islamic marriage contract", x:"The nikah is witnessed by the community."},
    {t:"mahr", d:"the marriage gift owed to the bride herself in Islam", x:"The mahr is the bride's own security."},
    {t:"consent", d:"free and willing agreement", x:"No valid marriage lacks the consent of both."},
    {t:"faithfulness", d:"keeping the marriage promise wholly", x:"Faithfulness is the heart of the covenant."},
    {t:"polygyny", d:"the marriage of one man to more than one wife", x:"Polygyny is conditional and contested among the traditions."},
    {t:"divorce", d:"the lawful ending of a marriage", x:"Divorce is permitted as a last resort."},
    {t:"widow", d:"a woman whose husband has died", x:"The widow is to be protected, not dispossessed."},
    {t:"courtship", d:"the period of honest preparation before marriage", x:"Courtship tests character."},
    {t:"extended family", d:"the wider family of grandparents, uncles, aunts and cousins", x:"The extended family shares the raising of the child."},
    {t:"family altar", d:"the household's regular time of prayer together", x:"The family altar binds the home."}
  ],
  facts:[
    {q:"Define marriage and name its four purposes.", a:"Marriage is the covenant of a man and a woman before God and the community; its purposes are companionship, the gift of children, mutual support, and the ordering of community life."},
    {q:"Name the four forms of marriage recognised in Liberia.", a:"Customary marriage, statutory (court) marriage, Christian marriage and Islamic marriage."},
    {q:"What is the mahr?", a:"The marriage gift owed to the bride herself in the Islamic nikah — her own security, not her family's."},
    {q:"What is the Christian standard of marriage stated by Jesus?", a:"One husband and one wife united by God — \"what God has joined together, let not man put apart\" (Matthew 19:4-6)."},
    {q:"On what condition does the Qur'an permit polygyny, and what does it say of that condition?", a:"Only if the husband can treat the wives with equal justice — and it states that equal justice is beyond most men (Qur'an 4:3, 4:129)."},
    {q:"Give one duty of children towards parents from the Bible and one from the Qur'an.", a:"Exodus 20:12 — honour your father and mother; Qur'an 17:23-24 — speak no word of contempt to them, but lower to them the wing of humility."},
    {q:"What is the Hadith's judgment of divorce, in one line?", a:"Of all permitted things, divorce is the most disliked by God — permitted as a last resort, never sought lightly."},
    {q:"Why does James 1:27 mention widows and orphans?", a:"Because pure religion defends those who cannot defend themselves; the treatment of widows and orphans tests whether faith is real."}
  ],
  tf:[
    {s:"Marriage is a private arrangement between two persons only.", a:"false", why:"It is a covenant before God witnessed by the community, and in Liberia it joins two families — customary marriage is concluded between the families."},
    {s:"The mahr belongs to the bride's uncles.", a:"false", why:"The mahr is the bride's own gift and security, not her family's."},
    {s:"The traditions require the free consent of both persons before marriage.", a:"true", why:"A marriage forced on either party lacks the covenant's soul; Liberia's law also protects adults from forced marriage and children from early marriage."},
    {s:"Christian teaching approves of a man beating his wife for correction.", a:"false", why:"Husbands are commanded to love their wives as Christ loved the church, giving Himself for her (Ephesians 5:25) — abuse is crime and sin."},
    {s:"Divorce is forbidden absolutely in every tradition.", a:"false", why:"Islam permits it with just settlement as a last resort, and the civil law of Liberia dissolves marriages; Christianity grieves it while allowing pastoral care for the injured — no tradition treats it as good."},
    {s:"The family is called the first school of faith and values.", a:"true", why:"The child first learns of God, honesty and respect at home (Proverbs 22:6; Qur'an 31:14), before the street or the school tests the lesson."}
  ],
  apply:[
    {q:"A friend plans to marry secretly, without either family, at eighteen. Counsel him.", a:"Legal age aside, marriage without the families removes the covenant's witnesses and its support; counsel him to seek the families' blessing, prepare honestly, and conclude the marriage openly — secrecy usually hides what should be faced now."},
    {q:"A neighbour's husband beats her and quotes scripture to submit. What do the traditions and the law say?", a:"No scripture authorises assault: love gives itself, it does not bruise (Ephesians 5:25; Qur'an 4:19 commands kindness); the law of Liberia makes assault a crime; she should be helped to safety, to the church's or mosque's counsel, and to the authorities."},
    {q:"A widow in your quarter is being stripped of her late husband's property by his relatives. What should the community of faith do?", a:"Stand with her: James 1:27 commands the care of widows; the Islamic law secures the widow's share; custom itself protected her upkeep — and the law of inheritance should be followed, with the elders and, if needed, the court involved."},
    {q:"Two schoolmates are pressuring a fifteen-year-old girl toward early marriage. Argue against it from the three traditions.", a:"Marriage requires maturity and consent; the child's body and schooling are a trust from God; the Qur'an ties marriage to responsibility a child cannot yet carry; and Liberia's Children's Law protects persons under eighteen."},
    {q:"What five marks should a young person seek in a future spouse?", a:"Fear of God, proven honesty, kindness under pressure, industry, and the respect of their own family — beauty and money pass; character keeps the house."}
  ],
  sort:{ title:"Marriage and family life", groups:[
    {name:"Forms of marriage in Liberia", items:["Customary","Statutory","Christian","Islamic"]},
    {name:"Purposes of marriage", items:["Companionship","Children","Mutual support","Ordering of community life"]},
    {name:"Duties at home", items:["Faithfulness","Provision and partnership","Training the children","Honouring the parents"]},
    {name:"Challenges to face rightly", items:["Domestic violence","Dispossessed widows","Early marriage","Poverty and distance"]}
  ]},
  compare:{ title:"The four marriages of one Liberian couple", caption:"Complete the table of what each form of marriage contributes.",
    items:[
      {p:"Customary", f:"Joins the two families through the dowry and the elders; carries the community's oldest blessing and obligations."},
      {p:"Statutory", f:"Registers the union before the Republic, securing legal protection of spouse, children and inheritance."},
      {p:"Christian", f:"Sets the vows before God and the congregation, invoking Christ's teaching that the two become one flesh."},
      {p:"Islamic", f:"Contracts the nikah with the mahr secured to the bride, witnessed by the community and blessed in the Qur'an's words."},
      {p:"All four together", f:"Many couples conclude more than one — the family, the Republic, the church or mosque each recognising what the others hold; the person is married once, and thoroughly."},
      {p:"None of them alone", f:"No ceremony can replace maturity, consent, faithfulness and the fear of God — the forms carry a covenant, they cannot create one."}
    ]},
  casestudy:{ title:"The couple the families refused",
    text:"Mulbah and Massa fell in love in Kakata. But Massa's uncles remembered a quarrel between the two families from twenty years before, and they refused the dowry. The young couple talked of eloping. A catechist and an elder of the mosque, who were themselves friends, heard of it. They went first to the two families separately, not to argue, but to ask each side to tell the story of the old quarrel. When the two stories were put side by side, the quarrel shrank: it had begun with one goat and grown with twenty years of silence. The religious leaders then asked each family one question: \"Do you want your children to inherit your peace, or your quarrel?\" Six months later the dowry was carried across the road, with both families laughing about the goat.",
    questions:[
      {q:"Why did the religious leaders begin by listening rather than arguing?", a:"Because reconciliation needs the truth told; a quarrel fed by silence grows, and both families carried a version that had never met."},
      {q:"What was at stake for the young couple if they eloped?", a:"Marriage without the families: no elders behind the covenant, no support in the first hardship, and a quarrel inherited by the next generation."},
      {q:"What does the story show about the dowry?", a:"That it is not a purchase but a covenant sign — the road the dowry travels joins the families, which is why the elders refused to let the road be bypassed."},
      {q:"How did the two religious leaders model interfaith cooperation?", a:"They worked as one — each honoured in his own community — showing that the traditions defend marriage together."}
    ]},
  project:{ title:"What keeps a marriage",
    brief:"Learn from an elder couple what has kept their marriage, and report their counsel.",
    steps:["Choose a couple married twenty years or more, of any tradition.","Interview them with respect: what prepared them, what nearly broke them, what kept them.","Record their three chief counsels in their own words.","Compare the counsels with the duties taught in this unit.","Present your findings, and state one counsel you will carry into your own future home."],
    criteria:["A real interview with a long-married couple","Their three counsels recorded in their own words","Comparison with the unit's teaching honestly made","One personal counsel chosen and owned","Respectful presentation"]},
  activities:["Table the four forms of marriage in Liberia","Discuss the five marks of a future spouse in groups","Role-play the dowry ceremony and explain each step","Debate: does the church or mosque have a duty to prepare couples before marriage?"],
  materials:["The Holy Bible — Genesis 2:18-24; Exodus 20:12-14; Proverbs 22:6; Matthew 19:3-9; Ephesians 5:22-6:4","The Holy Qur'an — 4:3-4, 19; 17:23-24; 24:32; 30:21; 31:14","The Children's Law of Liberia","Elders of the community"],
  assessment:["Interview project","Group discussion","Role-play","Class debate","Written tests"]
},

{
  grade:10, period:"V", sem:"Two", icon:"💰",
  title:"Wealth, Poverty and Honest Gain",
  subtitle:"The right and wrong uses of money — gambling, bribery and corruption — and the duty of generosity to the poor",
  outcomes:["Learners understand the religious teaching on wealth and poverty, can distinguish honest gain from dishonest, can weigh gambling, bribery and corruption in the light of the three traditions, and practise generosity as a duty of faith."],
  objectives:[
    "State the teaching of the three traditions on the right use of money",
    "Identify dishonest gain — gambling, bribery, corruption, fraud and cheating",
    "Explain why the traditions condemn bribery and corruption, and their cost to the nation",
    "State the duty of generosity — tithe, zakat, sadaqah and communal giving",
    "Discuss the causes of poverty and the believer's response to the poor"
  ],
  note:"<b>Money is a servant and a terrible master</b>: \"You cannot serve God and mammon\" (Matthew 6:24). The traditions do not condemn wealth honestly earned and generously shared; they condemn the <b>love</b> of money (1 Timothy 6:10), gain without work — <b>gambling</b> and its cousins — and gain by injury: <b>bribery, corruption, fraud</b>. The believer holds wealth as a trust: the tithe, the zakat and the first fruits are debts owed, not gifts given.",
  study:[
    {k:"h3", t:"Money — a Servant, Not a Master"},
    {k:"p", t:"Wealth itself is neither good nor evil; it is power, and power serves whatever rules the heart. Agur's prayer asks for neither poverty nor riches — only daily bread, \"lest I be full and deny You, or lest I be poor and steal\" (Proverbs 30:8-9). Contentment is the guard: \"godliness with contentment is great gain, for we brought nothing into the world and can carry nothing out\" (1 Timothy 6:6-7); the Qur'an joins richness of the soul to remembrance of God: \"Hearts find rest in the remembrance of Allah\" (Qur'an 13:28)."},
    {k:"rule"},
    {k:"h3", t:"Honest Gain"},
    {k:"bul", items:[
      "**Work and trade** — the Bible honours the skilful trader (Proverbs 31:16-18) and the Hadith places the honest, trustworthy merchant with the prophets and the martyrs",
      "**Saving and planning** — the wise ant stores in season (Proverbs 6:6-8)",
      "**Learning and skill** — education is earning power and the community's gain",
      "**Fair dealing** — \"a false balance is an abomination to the LORD, but a just weight is His delight\" (Proverbs 11:1); the Qur'an commands measure and balance in trade (Qur'an 17:35)"
    ]},
    {k:"rule"},
    {k:"h3", t:"Dishonest Gain"},
    {k:"bul", items:[
      "**Gambling** — lottery and sports betting: the Qur'an names it among Satan's works, trading enmity and waste for a chance (Qur'an 5:90); the Bible warns that \"dishonest money dwindles away, but he who gathers by labour increases it\" (Proverbs 13:11)",
      "**Bribery** — \"a bribe blinds the eyes of the wise\" (Deuteronomy 16:19; Proverbs 17:23); the Qur'an forbids consuming property by false means and bribing judges (Qur'an 2:188)",
      "**Corruption** — the office-holder's betrayal of a trust; every tradition makes the public office a trust from God and the people (Qur'an 4:58)",
      "**Fraud and cheating** — the scam message, the false invoice, the false weight, the copied examination",
      "**Theft and robbery** — forbidden outright (Exodus 20:15)"
    ]},
    {k:"p", t:"Greed injures first the greedy: \"whoever loves pleasure will be poor\" (Proverbs 21:17). But corruption injures the whole nation — the road unpaved, the clinic unstocked, the teacher unpaid — and it is the poor who pay the highest price."},
    {k:"rule"},
    {k:"h3", t:"The Duty of Generosity"},
    {k:"table", head:["Tradition","Giving","Ground"], rows:[
      ["Christianity","Tithe and freewill offering; alms to the needy","\"God loves a cheerful giver\" (2 Corinthians 9:7); Matthew 25:31-46"],
      ["Islam","Zakat (obligatory) and sadaqah (voluntary)","One of the five pillars; \"the needy have a recognised right in the wealth\" (Qur'an 70:24-25)"],
      ["African Traditional Religion","First fruits at harvest; communal labour and the open pot","Wealth is held for the community; the stranger and the orphan must eat (the elders' teaching)"]
    ]},
    {k:"p", t:"Giving is taught in secret: the left hand should not know the right hand's gift (Matthew 6:3-4); \"a kind word and forgiveness are better than charity followed by injury\" (Qur'an 2:263). The gift that shames the receiver is not generosity."},
    {k:"rule"},
    {k:"h3", t:"Poverty and the Poor"},
    {k:"p", t:"Poverty has many causes — idleness, injustice, misfortune, sickness, war — and the traditions judge each differently: the sluggard is reproved (Proverbs 6:9-11), but the oppressed are defended (Amos 8:4-6). The poor are never to be despised: \"He who oppresses the poor reproaches his Maker\" (Proverbs 14:31). Jesus identifies Himself with the hungry and the stranger: \"as you did it to one of the least of these, you did it to Me\" (Matthew 25:40). The Qur'an makes care for the orphan and the needy the test of true religion (Qur'an 107)."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:[
      "State Agur's prayer about riches (Proverbs 30:8-9) and explain its wisdom.",
      "List four kinds of dishonest gain and one religious reference against each.",
      "Explain the difference between the tithe, zakat and sadaqah, and first fruits.",
      "Calculate: if a trader's profit is LD 60,000, what is a tithe? What is zakat at 2.5 percent?",
      "Interview a trader or businessperson known for honesty; record one decision where honesty cost them, and what they say it gained them."
    ]}
  ],
  focus:["Money as servant, not master","Honest gain — work, trade, fair dealing","Dishonest gain — gambling, bribery, corruption, fraud","The cost of corruption to the nation","Generosity — tithe, zakat, sadaqah, first fruits","Justice and compassion for the poor"],
  terms:[
    {t:"mammon", d:"wealth worshipped as a god", x:"No one can serve God and mammon."},
    {t:"contentment", d:"being satisfied with what one has", x:"Contentment guards the heart from greed."},
    {t:"gambling", d:"staking money on chance for gain without work", x:"Gambling trades work for a throw of dice."},
    {t:"bribe", d:"a gift given to pervert judgment or gain unfair favour", x:"A bribe blinds the eyes of the wise."},
    {t:"corruption", d:"the misuse of a public trust for private gain", x:"Corruption robs a whole nation."},
    {t:"fraud", d:"deceiving a person to take what is theirs", x:"The scam message is fraud."},
    {t:"tithe", d:"a tenth given to God's work", x:"The tithe is the first tenth, not the leftover."},
    {t:"zakat", d:"the obligatory purifying due on Muslim wealth, about one-fortieth", x:"Zakat cleanses the wealth that remains."},
    {t:"sadaqah", d:"voluntary charity in Islam", x:"Even a smile can be sadaqah, the Hadith teaches."},
    {t:"first fruits", d:"the first and best of the harvest offered to God", x:"The first fruits honour the Giver."},
    {t:"alms", d:"gifts given directly to the poor", x:"Alms are given quietly, not with trumpets."},
    {t:"trust", d:"something held on behalf of another, to be kept faithfully", x:"Public office is a trust from God and the people."}
  ],
  facts:[
    {q:"What is Agur's prayer about riches, and why is it wise?", a:"Give me neither poverty nor riches — only daily bread: lest I be full and deny You, or poor and steal (Proverbs 30:8-9); it asks for the condition in which faith and integrity are kept."},
    {q:"Which verse says the love of money is a root of evil?", a:"1 Timothy 6:10 — the love of money, not money itself."},
    {q:"Why does the Qur'an forbid gambling?", a:"Qur'an 5:90 — it is of Satan's works, breeding enmity and hatred and turning people from remembrance of God."},
    {q:"Give two scripture references against bribery.", a:"Deuteronomy 16:19 (a bribe blinds the eyes of the wise) and Proverbs 17:23 (the wicked takes a bribe to pervert justice); the Qur'an forbids it in 2:188."},
    {q:"What is the difference between zakat and sadaqah?", a:"Zakat is the obligatory annual due on wealth (about 2.5 percent of qualifying savings), a pillar of Islam; sadaqah is voluntary charity at any time."},
    {q:"How much is a tithe of LD 60,000, and how much is zakat at 2.5 percent?", a:"Tithe: LD 6,000. Zakat: LD 1,500."},
    {q:"Which verse makes the poor's treatment the test of the last judgment?", a:"Matthew 25:31-46 — \"as you did it to one of the least of these, you did it to Me.\""},
    {q:"Why is corruption called a sin against the whole nation?", a:"Because it converts the public's trust to private gain: roads, clinics and schools are lost, and the poor, who cannot bribe, suffer first."}
  ],
  tf:[
    {s:"The Bible teaches that money itself is evil.", a:"false", why:"The love of money is the root of evil (1 Timothy 6:10); wealth honestly earned and generously shared is a trust from God."},
    {s:"Gambling is harmless because the person chooses it freely.", a:"false", why:"Qur'an 5:90 names it among Satan's works for the harm it breeds; Scripture warns that dishonest money dwindles away (Proverbs 13:11)."},
    {s:"A bribe may be given if the cause is good.", a:"false", why:"A bribe perverts justice whatever the excuse; the ends do not sanctify the means (Deuteronomy 16:19; Qur'an 2:188)."},
    {s:"Zakat is calculated at about one-fortieth of qualifying savings.", a:"true", why:"About 2.5 percent — LD 1,500 on LD 60,000."},
    {s:"The poor are poor because they are lazy.", a:"false", why:"The traditions distinguish the idle from the oppressed and the unlucky; sloth is reproved, but injustice and misfortune are real and the poor must be defended (Amos 8:4-6)."},
    {s:"Giving in secret is better than giving with display.", a:"true", why:"Matthew 6:3-4 commands the secret alms, and Qur'an 2:263 places a kind word above charity that wounds."}
  ],
  apply:[
    {q:"Your uncle, a government officer, is offered a \"commission\" to push a contract through. Counsel him from the three traditions.", a:"The office is a trust (Qur'an 4:58); the bribe blinds (Deuteronomy 16:19) and steals from the nation; the tradition's elders held office for the people's good name; counsel him to refuse, record the offer and report it."},
    {q:"A schoolmate has begun betting his lunch money on football results and now borrows to play. Help him.", a:"Name the trap honestly — gambling is designed to take; help him hand the money to a trusted keeper, fill the hours with work or sport, and remember the Hadith that the trustworthy merchant is honoured while the gambler's gain is shamed."},
    {q:"You sell biscuits in the yard. A rival spreads the word that your biscuits cause sickness. What is honest competition?", a:"Compete on price, quality and service; false witness is forbidden (Exodus 20:16) and devouring a neighbour's living by lies is devouring his property by false means (Qur'an 2:188)."},
    {q:"A poor classmate cannot pay the exam fee. You have saved LD 500 for a shirt. What do the traditions ask?", a:"Compassion in proportion: the need is known and the means partly in hand — give or lend quietly, perhaps gathering a few classmates' small shares; the shirt can wait, and the Qur'an's recognized right of the needy is honoured."},
    {q:"Why is the cheerful giver's LD 100 worth more than the grudging giver's LD 10,000?", a:"God weighs the heart: the cheerful gift honours Him as Giver (2 Corinthians 9:7), while the grudging gift buys reputation and resents the poor."}
  ],
  sort:{ title:"Gain and giving", groups:[
    {name:"Honest gain", items:["Work and wages","Fair trade","Skill and study","Saving in season"]},
    {name:"Dishonest gain", items:["Gambling","Bribery","Corruption","Fraud and false weights"]},
    {name:"Kinds of giving", items:["Tithe","Zakat","Sadaqah","First fruits"]},
    {name:"Responses to the poor", items:["Defend the oppressed","Give quietly","Teach a trade","Never despise the needy"]}
  ]},
  compare:{ title:"Three traditions, one wallet", caption:"Complete the table of what each tradition teaches about money.",
    items:[
      {p:"Warning", f:"The love of money (1 Timothy 6:10); the race to pile up wealth that diverts the heart (Qur'an 102:1-2); the elders' proverb that the greedy stomach has no bottom."},
      {p:"Honest earning", f:"The diligent hand is honoured; the honest merchant with the prophets; the trader's just weight is God's delight."},
      {p:"Obligatory giving", f:"The tithe; the zakat as pillar; the first fruits of harvest."},
      {p:"Voluntary giving", f:"Freewill offerings and secret alms; sadaqah, even a smile; the open pot for the stranger."},
      {p:"Forbidden uses", f:"Gambling, usury's oppression, bribery, fraud, false weights — each named and condemned."},
      {p:"Judgment", f:"Wealth is a question put to every soul at the end: what did you do with what you were given (Matthew 25; Qur'an 99:7-8)?"}
    ]},
  casestudy:{ title:"The contractor's two envelopes",
    text:"In a county office, two contractors came to bid for the rehabilitation of a clinic. The first contractor arrived with his bid and a sealed envelope containing two thousand United States dollars, which he slid across the table. The second contractor arrived with his bid and a letter listing three clinics his company had finished, with the phone numbers of the towns. The officer pushed the first envelope back, opened both bids, and found the second company's price lower and its work proven. He signed with the second. When a colleague later asked why he had refused the money, the officer said, \"My mother sold peppers to send me to school. I will not sell her name for two thousand dollars. And the people of that district are my people.\"",
    questions:[
      {q:"What did the first contractor misunderstand about public office?", a:"That the office is a trust held for the people; its decisions are not the officer's private property to sell."},
      {q:"Compare the two bids as acts of trust.", a:"The envelope asked the officer to betray the trust for money; the reference letter invited him to verify the trustworthiness — the currency of honest business."},
      {q:"What did the officer's answer about his mother teach?", a:"That integrity has a household and a history: the sacrifices that made the office possible also guard it."},
      {q:"Who gained when the envelope was refused?", a:"The district gained a better clinic at a lower price, the honest contractor gained the work, and the officer kept his name — corruption's price is always paid by the many."}
    ]},
  project:{ title:"Honest business in our community",
    brief:"Study one honest business in your community and present its ways.",
    steps:["Choose a trader, tailor, carpenter or farmer known for fair dealing.","Interview them: how they price, measure and treat customers who cannot pay.","Record one case where honesty cost them and one where honesty paid.","Find one proverb, one Bible verse and one Qur'an verse that their practice keeps.","Present the study to the class as a model of honest gain."],
    criteria:["A real business studied","Fair dealing practices clearly recorded","The cost and gain of honesty honestly reported","The three references aptly chosen","A clear, respectful presentation"]},
  activities:["Calculate tithe and zakat on sample incomes","List the forms of dishonest gain seen in the community and their harms","Debate: is a small bribe ever necessary to get what is lawfully yours?","Plan a class alms project for a needy pupil, given quietly"],
  materials:["The Holy Bible — Proverbs 11:1; 13:11; 30:8-9; Matthew 6:1-4, 24; 25:31-46; 1 Timothy 6:6-10","The Holy Qur'an — 2:188; 2:263; 5:90; 70:24-25; 107","Liberian proverbs on wealth and greed","Community traders and businesspeople"],
  assessment:["Calculation exercise","Interview project","Class debate","Alms project","Written tests"]
},

{
  grade:10, period:"VI", sem:"Two", icon:"🛠️",
  title:"Work, Vocation and the Dignity of Labour",
  subtitle:"Why the traditions honour work, condemn idleness, and call every believer to a life of useful service",
  outcomes:["Learners understand work as part of God's design for human life, honour every honest trade, reject idleness and dependency, and can see their own future careers and religious callings as vocations of service."],
  objectives:[
    "Show from the three traditions that work is of God and for human dignity",
    "Explain why every honest trade is honourable, with Liberian examples",
    "State the teaching against idleness and dependency",
    "Explain vocation — the religious callings and the calling of every career",
    "Describe excellence, integrity and service as the marks of a Christian, Muslim or traditional worker"
  ],
  note:"<b>Work is older than the Fall</b>: God Himself worked in creation and rested on the seventh day (Genesis 2:2-3), and Adam was placed in the garden \"to dress it and to keep it\" (Genesis 2:15) — before any sin. The Hadith teaches that no one eats better food than that earned by his own hands, and the elders say an idle youth eats tomorrow's hunger. <b>Vocation</b> means calling: every career done with excellence and integrity is a serving of God and neighbour.",
  study:[
    {k:"h3", t:"Work Is of God"},
    {k:"p", t:"The traditions teach that **work is part of the design, not a curse**. God worked six days and rested the seventh, setting the rhythm of labour and rest for all people (Genesis 2:2-3). Man, made in God's image, is a maker, a keeper and a dresser: the garden was given to him to work before any hardship entered it. The Qur'an honours the striving hand: \"man shall have nothing but what he strives for\" (Qur'an 53:39). Work earns the right to eat (2 Thessalonians 3:10), to give (Ephesians 4:28) and to rest without shame."},
    {k:"rule"},
    {k:"h3", t:"The Dignity of Every Honest Trade"},
    {k:"bul", items:[
      "The **farmer** feeds the nation — the elders count farming the most honourable work, for every person eats of it",
      "The **trader** moves goods from plenty to need — the Hadith sets the honest, trustworthy merchant with the prophets",
      "The **teacher** forms minds — \"those who are wise shall shine\" (Daniel 12:3)",
      "The **nurse and the doctor** bind wounds — Christ healed with His hands, and caring for the sick is worship (Matthew 25:36)",
      "The **carpenter, the tailor, the mason, the driver** — every honest handwork has its honour; Jesus Himself worked as a carpenter",
      "The **leader and the officer** — administration is a trust (Qur'an 4:58; Romans 13:1-7)"
    ]},
    {k:"p", t:"No honest work is shameful; only idleness, fraud and oppression shame the worker. A proverb teaches: the person who sweeps the street and the one who signs the papers both feed the same city."},
    {k:"rule"},
    {k:"h3", t:"Idleness and Dependency Condemned"},
    {k:"bul", items:[
      "\"Go to the ant, you sluggard; consider her ways and be wise\" (Proverbs 6:6-11)",
      "\"If anyone will not work, neither shall he eat\" (2 Thessalonians 3:10)",
      "\"When the prayer is finished, scatter in the land and seek the bounty of Allah\" (Qur'an 62:10)",
      "The elders' saying: an idle youth eats tomorrow's hunger — and borrows the pot to cook it"
    ]},
    {k:"p", t:"Dependency that waits for another's packet while able hands are free injures the person and the community. But the traditions distinguish sharply between the **idle** and the **unable**: the widow, the orphan, the sick and the aged are owed the community's support as a right, not its contempt (James 1:27; Qur'an 107)."},
    {k:"rule"},
    {k:"h3", t:"Vocation — the Calling of Every Life"},
    {k:"p", t:"**Vocation** means **calling**. Some are called to religious office: the pastor and catechist, the imam and the teacher of the Qur'an, the traditional priest and the elder — set apart to teach, to lead worship and to counsel. But the traditions also teach that the **ordinary career is a calling**: the Christian teacher, the Muslim nurse, the traditional midwife each serve God in the work of their hands. \"Whatever your hand finds to do, do it with all your might\" (Ecclesiastes 9:10); \"work heartily, as for the Lord and not for men\" (Colossians 3:23); the Qur'an commands the believers to vie with one another in good works (Qur'an 2:148) and names the faithful as those who hasten in them (Qur'an 23:61)."},
    {k:"rule"},
    {k:"h3", t:"Marks of the Faithful Worker"},
    {k:"num", items:[
      "**Excellence** — the work is done well, not just done; shoddy work is half a lie",
      "**Honesty** — time, materials and wages are kept truly; the worker is trustworthy when no one watches",
      "**Service** — the work is for the neighbour's good, not the pay packet only",
      "**Balance** — work, worship, family and rest each keep their place; the Sabbath principle guards the worker from becoming the work",
      "**Growth** — the apprentice becomes the master; learning never retires"
    ]},
    {k:"rule"},
    {k:"h3", t:"Preparing Your Own Vocation"},
    {k:"p", t:"Senior high is the seed-bed of vocation: the subjects studied, the trades observed, the habits formed. The learner should ask three questions early: **What can I do well?** (gift and skill), **What does my community need?** (service), and **What has God put in my heart?** (calling). Where the three answers meet, there is a vocation worth preparing for — by study, apprenticeship, discipline and prayer."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:[
      "Give two references that show work is of God, and one Qur'an reference on striving.",
      "Write a paragraph honouring one honest trade, naming a person of your community who does it well.",
      "Explain the difference between the idle and the unable, and the community's duty to each.",
      "Interview a worker known for excellence; record the habits that make their work trusted.",
      "Write your own three answers: what can I do well, what does my community need, what has God put in my heart?"
    ]}
  ],
  focus:["Work as part of God's design","The dignity of every honest trade","Idleness condemned, the unable supported","Vocation and the religious callings","Excellence, honesty and service at work","Preparing your own vocation"],
  terms:[
    {t:"labour", d:"work, especially work of the hands and strength", x:"Honest labour has no shame."},
    {t:"vocation", d:"a calling; the work a person is given to do in life", x:"Nursing became her vocation."},
    {t:"apprentice", d:"a learner of a trade under a master", x:"The apprentice watches the master's hands."},
    {t:"diligence", d:"careful and persistent effort", x:"Diligence finishes what talent begins."},
    {t:"idleness", d:"the refusal of useful work while able to work", x:"Idleness borrows tomorrow's bread."},
    {t:"excellence", d:"doing work as well as it can be done", x:"Excellence is worship with the hands."},
    {t:"Sabbath", d:"the day of rest commanded after six days of work", x:"The Sabbath protects the worker."},
    {t:"trust", d:"a duty held on behalf of another", x:"The wage-earner's time is a trust."},
    {t:"steward", d:"a manager of what belongs to another", x:"Every worker is a steward of gifts."},
    {t:"craftsmanship", d:"skill and care in a hand trade", x:"The coffin's joints showed true craftsmanship."},
    {t:"calling", d:"the inner conviction of a work God has given", x:"He tested his calling in the classroom."},
    {t:"service", d:"work done for the good of others", x:"Leadership is service, not rule."}
  ],
  facts:[
    {q:"Show from Genesis that work is older than sin.", a:"God worked in creation and rested the seventh day (Genesis 2:2-3), and Adam was placed in the garden to dress and keep it (Genesis 2:15) — before the Fall."},
    {q:"What does the Hadith say about eating from one's own work?", a:"That no one eats better food than that which he eats from the work of his own hands."},
    {q:"Which verse commands the believer to work with all his might?", a:"Ecclesiastes 9:10 — \"whatever your hand finds to do, do it with all your might\"; Colossians 3:23 — \"work heartily, as for the Lord.\""},
    {q:"Name four honest trades and one reason each is honourable.", a:"Farming feeds the nation; trading moves goods from plenty to need; teaching forms minds; nursing binds wounds — every honest trade serves the neighbour."},
    {q:"Which verse says the unwilling worker shall not eat?", a:"2 Thessalonians 3:10 — \"if anyone will not work, neither shall he eat.\""},
    {q:"What is the difference between the idle and the unable?", a:"The idle can work but refuses; the unable — the sick, the aged, the orphan, the widow — cannot, and is owed the community's support as a right (James 1:27; Qur'an 107)."},
    {q:"What are the three questions for finding a vocation?", a:"What can I do well? What does my community need? What has God put in my heart?"},
    {q:"Give the five marks of the faithful worker.", a:"Excellence, honesty, service, balance and growth."}
  ],
  tf:[
    {s:"Work entered the world as punishment for sin.", a:"false", why:"Work was given in the garden before the Fall (Genesis 2:15); hardship in work — thorns and sweat — came with sin, but work itself is of God."},
    {s:"Farming is a low work compared with office work.", a:"false", why:"The elders count farming the most honourable work, for every person eats of it; Scripture and Qur'an alike honour the working hand."},
    {s:"The traditions command support for the widow and the orphan even though they do not earn.", a:"true", why:"James 1:27 and Qur'an 107 make their care the test of true religion — the unable are owed support as a right."},
    {s:"A religious vocation is higher than the ordinary careers.", a:"false", why:"The religious officer is set apart for special duties, but the traditions teach that every career done with excellence and integrity is a serving of God and neighbour."},
    {s:"Shoddy work is acceptable if the pay is small.", a:"false", why:"\"Whatever your hand finds to do, do it with all your might\" (Ecclesiastes 9:10); shoddy work breaks trust and is half a lie."},
    {s:"Rest is part of God's design for the worker.", a:"true", why:"The Sabbath rhythm — six of work, one of rest — is written into creation (Genesis 2:2-3) and protects the worker from becoming the work."}
  ],
  apply:[
    {q:"A classmate says he will not farm or learn a trade because he is waiting for a government job or a rich relative. Counsel him.", a:"Name the idleness kindly but clearly: the ant's lesson, the hand's honour, the waiting that eats tomorrow's bread; counsel him to learn a trade or farm now — the government job, if it comes, will find him already disciplined."},
    {q:"You are paid to plaster a wall and the owner will not see the corner behind the door. What do the traditions require?", a:"Excellence and honesty where no one watches: finish the corner well — \"work heartily, as for the Lord and not for men\" (Colossians 3:23); the trustworthy worker is with the prophets."},
    {q:"A talented singer is choosing between studying nursing, which the county needs, and music, which she loves. Help her apply the three questions.", a:"Gift: both, but which is stronger? Need: nursing is scarce in the county; service weighs heavily. Heart: what has God put in her — and can the two be joined, as many a nurse sings? The questions guide; they do not force."},
    {q:"Your employer asks you to record hours you did not work. What is at stake?", a:"A trust: false records are theft and false witness together (Exodus 20:15-16; Qur'an 4:58); refuse gently, and be ready to lose a job rather than a name."},
    {q:"Design your own plan: one skill you will master this year, and how you will serve the community with it.", a:"For example: learn to type and format documents by December; serve by typing the church's and the mosque's notices free each month."}
  ],
  sort:{ title:"Vocations of service", groups:[
    {name:"Religious vocations", items:["Pastor and catechist","Imam and Qur'an teacher","Traditional priest","Elder and counsellor"]},
    {name:"Trades of the hand", items:["Farming","Tailoring","Masonry","Carpentry"]},
    {name:"Trades of the mind and care", items:["Teaching","Nursing","Administration","Engineering"]},
    {name:"Marks of the faithful worker", items:["Excellence","Honesty","Service","Balance"]}
  ]},
  compare:{ title:"What each tradition says to the worker", caption:"Complete the table of the teaching each tradition gives to working people.",
    items:[
      {p:"Foundation of work", f:"God worked and rested, and set man in the garden to keep it (Genesis 2); the Qur'an ties the human share to striving (53:39); the elders teach that the able hand owes the community its labour."},
      {p:"Honour of trades", f:"The carpenter of Nazareth, the merchant praised in the Hadith, the farmer first in the elders' regard — every honest trade has its witness."},
      {p:"Warning to the idle", f:"The ant (Proverbs 6); the no-work-no-eat rule (2 Thessalonians 3:10); the idle youth who eats tomorrow's hunger."},
      {p:"Duty to the unable", f:"Support as a right, not contempt: James 1:27; Qur'an 107; the open pot of the compound."},
      {p:"Motive of work", f:"Not the pay packet only — work as for the Lord (Colossians 3:23), as striving toward God (Qur'an 62:10), as the elder's offering to the community."},
      {p:"Rest and balance", f:"The Sabbath and its counterparts; worship ordered around work, not crowded out by it."}
    ]},
  casestudy:{ title:"The mason of Gbarnga",
    text:"An old mason in Gbarnga built a reputation over forty years for one habit: he always returned leftover materials. Cement, iron rods, even nails swept from the floor went back to the owner in a bucket, with the count written on the side. One year, a big contract came to the town and the committee had to choose a builder. A younger mason bid lower, but a member of the committee told a story: \"When my father's house was built in 1998, Papa Borh returned a half-bag of cement and eleven nails. He did not know I was watching. I was nine.\" The contract went to Papa Borh. Asked later how he felt about bidding higher and still winning, he said, \"I did not bid higher. I bid the truth. The truth costs less in the end.\"",
    questions:[
      {q:"What habit built the mason's reputation, and why did it cost him nothing?", a:"Returning materials with the count written down; honesty in small things costs only the temptation it refuses (Luke 16:10)."},
      {q:"Why did the childhood memory outweigh the lower bid?", a:"Because the committee was buying trust, not only walls; forty years of returned nails could be verified by anyone in the town."},
      {q:"Explain his last sentence — how does the truth cost less?", a:"The lie needs more lies, losses and audits; the truth is one price, paid once, and it earns the next contract."},
      {q:"What did the nine-year-old witness teach him for his own working life?", a:"That workers are watched by children who will one day sign the contracts; example is a trade's best advertisement."}
    ]},
  project:{ title:"A day at work",
    brief:"Walk a day with a worker of your community and study the vocation.",
    steps:["Choose a worker whose trade interests you — farmer, nurse, tailor, teacher, mason or officer.","Arrange with them (and your teacher) to observe or assist for a day.","Record the day's tasks, the skills each needs, and the habits that make the worker trusted.","Ask them what they would tell a young person entering the trade.","Write a report: could this be your vocation? Answer honestly with the three questions."],
    criteria:["A full day honestly observed","Skills and habits accurately recorded","The worker's counsel written in their words","The three vocation questions answered personally","A respectful, well-written report"]},
  activities:["Compile a class book of honourable trades with portraits of local workers","Learn and recite Proverbs 6:6-11 and explain the ant's lesson","Debate: is unpaid family labour child work or training? Argue with the traditions' care for the child","Draft a personal skill plan for the year with a service goal"],
  materials:["The Holy Bible — Genesis 2:2-3, 15; Proverbs 6:6-11; Ecclesiastes 9:10; Luke 16:10; Colossians 3:23; 2 Thessalonians 3:10","The Holy Qur'an — 53:39; 62:10; 4:58","Liberian proverbs on work and idleness","Workers of the community"],
  assessment:["Observation report","Recitation and explanation","Class debate","Skill plan","Written tests"]
},

/* ================================ GRADE 11 ================================ */
{
  grade:11, period:"I", sem:"One", icon:"🧭",
  title:"Conscience and Moral Decision-Making",
  subtitle:"The inner compass, its formation, and the disciplined steps of choosing the right when choices are hard",
  outcomes:["Learners understand conscience as the inner witness of right and wrong, know how the three traditions form and train it, and can apply disciplined steps of moral decision-making to real dilemmas of senior-high life."],
  objectives:[
    "Define conscience and state how the traditions describe it",
    "Explain how conscience is formed — and how it is deformed",
    "Outline the steps of moral decision-making",
    "Apply the steps to real dilemmas: peer pressure, examination conduct, loyalty and truth",
    "Explain accountability to God, who sees what is done in secret"
  ],
  note:"<b>Conscience is the compass of the soul</b> — the inner witness that approves what is right and condemns what is wrong (Romans 2:14-15). But a compass must be <b>set true</b>: a conscience formed by the scriptures, the tradition and good company points steadily; a conscience deformed by habit, crowd and self-interest points anywhere. Moral maturity is learning to <b>read</b> the compass and <b>follow</b> it — even when it costs.",
  study:[
    {k:"h3", t:"What Conscience Is"},
    {k:"p", t:"**Conscience** is the inner sense of right and wrong that passes judgment on our own thoughts and acts — before, during and after. Paul writes that the law of God is written on human hearts, \"their conscience also bearing witness, and their thoughts accusing or else excusing them\" (Romans 2:14-15). The Qur'an swears by the soul and what God inspired in it \"of its wickedness and its righteousness\" (Qur'an 91:7-10). The elders call it the **small voice** that speaks loudest at night. Conscience is a witness, not a lawgiver: it reports; it must itself be taught what is true."},
    {k:"rule"},
    {k:"h3", t:"How Conscience Is Formed"},
    {k:"table", head:["Formed by","How it works","Example"], rows:[
      ["Teaching","The scriptures, the tradition and the family instruct the judgment","The child learns honesty before it learns the word for it"],
      ["Practice","Repeated right choosing strengthens the witness","Each returned excess change makes the next return easier"],
      ["Community","The faithful community models and corrects","The congregation, the mosque, the elders set the standard"],
      ["Prayer and worship","The heart is kept tender before God","Confession and forgiveness restore a dull conscience"],
      ["Suffering","The tested heart learns mercy and depth","The forgiven offender forgives quickly"]
    ]},
    {k:"p", t:"And how it is **deformed**: by repeated small compromises (each lie makes the next easier), by crowds that shout down the small voice, by self-interest that argues until wrong looks right, and by guilt long refused, which sears the witness as a hot iron sears skin."},
    {k:"rule"},
    {k:"h3", t:"The Steps of Moral Decision-Making"},
    {k:"num", items:[
      "**Name the question.** What exactly must be decided, and who will be affected?",
      "**Gather the facts.** What is true? What is assumed? Half of all bad choices are made on bad information.",
      "**Consult the sources.** What do the scriptures, the tradition and the lawful authority say? Has a teacher of your tradition met this before?",
      "**Weigh the options.** Test each by three questions: Is it right in itself? Is it right in its fruits? What motive pushes it?",
      "**Pray.** Ask God for light and courage — the traditions agree that the decision made kneeling is kept standing.",
      "**Choose and act.** Do the right, promptly and fully.",
      "**Review.** Reckon honestly: thank God where it was kept right; repent and repair where it was not."
    ]},
    {k:"rule"},
    {k:"h3", t:"Dilemmas of Senior-High Life"},
    {k:"bul", items:[
      "**The leaked paper** — a copy of the examination circulates the night before. The crowd says everyone will use it. The steps ask: is it right in itself? It is theft, false witness and a lie told to your own certificate. What is its fruit? A qualification you cannot defend at the job. Choose the hard right: report it, or refuse it and study till morning.",
      "**The friend who cheats** — loyalty pulls one way, truth the other. True friendship wills the friend's good; covering the wrong is not love but cowardice wearing love's clothes.",
      "**The excuse that serves** — the teacher asks who broke the window; silence protects you and condemns the innocent. The right may cost you; pay it. Better a beating than a habit of cowardice.",
      "**The crowd's fashion** — drinking, teasing, the pressure of the group. \"My son, if sinners entice you, do not consent\" (Proverbs 1:10); the Hadith warns that a person follows the religion of his close friend, so choose companions carefully."
    ]},
    {k:"rule"},
    {k:"h3", t:"Accountable to the God Who Sees"},
    {k:"p", t:"The final guard of conscience is the truth that God sees the secret: \"your Father who sees in secret will reward you\" (Matthew 6:4); \"whether you show what is in yourselves or conceal it, Allah will bring you to account\" (Qur'an 2:284); the elders teach that no act is buried — the ground itself reports. On the Day of Judgment \"whoever has done an atom's weight of good shall see it, and whoever has done an atom's weight of evil shall see it\" (Qur'an 99:7-8). The person who lives coram Deo — before the face of God — needs no other witness."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:[
      "Define conscience in one sentence, with one reference from each tradition.",
      "List five forces that form conscience and three that deform it.",
      "Write the seven steps of moral decision-making from memory.",
      "Apply the seven steps to this case: you saw a classmate steal, and the whole class is being punished until someone talks.",
      "Keep a one-week conscience journal: each evening record one choice kept rightly and one struggle, and what strengthened or weakened the witness."
    ]}
  ],
  focus:["What conscience is","How conscience is formed and deformed","The seven steps of decision-making","Peer pressure and the crowd","Loyalty tested by truth","Accountability before God"],
  terms:[
    {t:"conscience", d:"the inner witness of right and wrong in one's own acts", x:"Conscience accused her before the teacher did."},
    {t:"moral dilemma", d:"a choice between two duties or goods that seem to conflict", x:"Loyalty and truth made a dilemma."},
    {t:"integrity", d:"wholeness of character — the same person in dark and light", x:"Integrity kept his hand from the till."},
    {t:"peer pressure", d:"the pull of the crowd toward its own conduct", x:"Peer pressure tested the new pupil."},
    {t:"motive", d:"the true reason behind an act", x:"The steps ask the motive's name."},
    {t:"courage", d:"doing right in the face of cost or fear", x:"Courage spoke when silence was safer."},
    {t:"confession", d:"admitting wrong to God and, where needed, to the one wronged", x:"Confession restores the tender conscience."},
    {t:"seared conscience", d:"a witness dulled by repeated refusal until it no longer warns", x:"His seared conscience no longer trembled."},
    {t:"accountability", d:"the duty to answer for one's acts", x:"Every soul gives account to God."},
    {t:"discernment", d:"the skill of testing what is truly right", x:"Discernment separates appetite from duty."},
    {t:"compromise", d:"the small surrender that prepares the larger one", x:"One compromise licensed the next."},
    {t:"coram Deo", d:"living in the sight of God", x:"Coram Deo — the final conscience."}
  ],
  facts:[
    {q:"Define conscience with one reference from each tradition.", a:"The inner witness of right and wrong: Romans 2:14-15 (the law written on hearts, conscience bearing witness); Qur'an 91:7-10 (the soul inspired with its wrong and its right); the elders' small voice that speaks loudest at night."},
    {q:"Name five forces that form conscience.", a:"Teaching, practice, community, prayer and worship, and the lessons of suffering."},
    {q:"Name three forces that deform conscience.", a:"Repeated small compromises, the crowd that shouts down the small voice, and self-interest that argues until wrong looks right — also guilt long refused."},
    {q:"List the seven steps of moral decision-making.", a:"Name the question; gather the facts; consult the sources; weigh the options (right in itself, right in its fruits, true in motive); pray; choose and act; review."},
    {q:"Which verse warns against following sinners who entice?", a:"Proverbs 1:10 — \"My son, if sinners entice you, do not consent.\""},
    {q:"What does the Hadith teach about choosing friends?", a:"That a person follows the religion — the way — of his close friend; choose companions whose way is worth following."},
    {q:"Why is the leaked examination wrong on three counts?", a:"It is theft (of trust), false witness (a certificate claiming what was not learned) and self-harm (a qualification that cannot be defended)."},
    {q:"Which references teach that God sees the secret?", a:"Matthew 6:4 (the Father who sees in secret); Qur'an 2:284 (Allah will bring you to account for what is in yourselves); the elders' teaching that no act is buried."}
  ],
  tf:[
    {s:"Conscience is a safe guide exactly as it is, needing no training.", a:"false", why:"Conscience is a witness, not a lawgiver; it must be formed by the scriptures, the tradition and good practice, or it reports wrongly."},
    {s:"The decision made in prayer is easier to keep.", a:"true", why:"The traditions agree that prayer brings light to see the right and courage to keep it — the decision made kneeling is kept standing."},
    {s:"Covering for a friend is real loyalty.", a:"false", why:"True friendship wills the friend's good; covering a wrong shields a habit that will destroy him — love corrects in private what the crowd would mock."},
    {s:"If a wrong act has good consequences, it becomes right.", a:"false", why:"The steps test the act in itself, its fruits and its motive; the ends never sanctify the means — Scripture and Qur'an alike condemn doing evil that good may come."},
    {s:"A seared conscience can be healed.", a:"true", why:"Confession and repentance restore the dulled witness (1 John 1:9; the Qur'an's promise of forgiveness to the returning); the traditions are religions of the second chance."},
    {s:"Half of bad moral choices are made on bad information.", a:"true", why:"Gathering the true facts is a moral duty of the steps; acting on rumour is itself a small wrong."}
  ],
  apply:[
    {q:"The class will be punished until someone names the boy who broke the window. You saw him. Apply the seven steps.", a:"Question: who is affected — the class, the boy, the teacher, truth itself. Facts: you saw; you are not certain others did. Sources: false witness forbidden; the Qur'an's command to speak justly; the elders' word that the innocent must not carry the guilty's load. Weigh: silence protects you and condemns thirty. Pray, then act: speak to the boy first, giving him the chance to confess himself — the course that heals all three. Review: whatever it cost."},
    {q:"Your best friend begins carrying a knife \"just in case\". What does conscience ask of you?", a:"The small voice warns of the funeral that knives attend; the friend's good asks you to speak, gently and soon, and to involve a trusted adult if the knife stays — courage now is cheaper than grief later."},
    {q:"A teacher wrongly accuses you and the class laughs. You are innocent and angry. What do the steps say?", a:"Facts first: what exactly was said or found? Answer respectfully with the truth and the witnesses; refuse the lie of convenient confession. Anger is a motive to test — the right response is truth spoken with self-control, not vengeance in words."},
    {q:"Why is the first compromise the most dangerous?", a:"Because it licenses the next: each small surrender deforms the witness a little more until the seared conscience no longer warns — the thief's first day is harder than his hundredth."},
    {q:"Explain coram Deo in your own words, and give one way it would change a school week.", a:"Living before the face of God — known, seen, loved, judged. It would change, for example, the unattended examination: no invigilator is needed by the person who writes before God."}
  ],
  sort:{ title:"The inner compass", groups:[
    {name:"What conscience is", items:["Inner witness","Approves and accuses","Report before the act","Loudest at night"]},
    {name:"What forms it", items:["Teaching","Practice","Community","Prayer"]},
    {name:"What deforms it", items:["Small compromises","The shouting crowd","Arguing self-interest","Refused guilt"]},
    {name:"Guards of the conscience", items:["The seven steps","Prayer","The sources","Coram Deo"]}
  ]},
  compare:{ title:"Three traditions on the inner witness", caption:"Complete the table showing what each tradition teaches about conscience.",
    items:[
      {p:"Name for it", f:"The heart's witness (Paul); the soul inspired with its wrong and its right (Qur'an 91); the elders' small voice."},
      {p:"Where it points", f:"To the one God who made it — a compass is only useful because there is a north."},
      {p:"How it is trained", f:"By scripture, teaching, practice, community and worship; the elders by proverb, rite and the company of the wise."},
      {p:"How it is dulled", f:"By repeated wrong, crowds, self-interest and refused guilt — each tradition names the searing."},
      {p:"Its restoration", f:"Confession and forgiveness — Psalm 51; the Qur'an's mercy to the returning sinner; the elders' rite of cleansing and restoration."},
      {p:"Its final court", f:"The judgment of God, who sees the secret (Matthew 6:4; Qur'an 2:284; no act is buried)."}
    ]},
  casestudy:{ title:"The night before the paper",
    text:"The night before the mathematics examination at a school in Margibi County, a folded paper passed from hand to hand in the dormitory: a copy of the questions, sold to a senior by someone in town. In one corner, four learners pounced on it. In another, Bendu sat still, and after a while she said, \"I did not sit twelve years of school to pass one night.\" A boy named Tamba mocked her, but a quiet junior learner, Yassah, moved to sit near Bendu, then a third, then a fifth. The five of them studied their weakest topics until the lamp went out. When the results came, the copied answers were spotted — the sellers had sold an old paper with wrong questions — and twenty-one learners failed or were suspended. All five who had refused passed. Tamba, suspended, came to Bendu's window to say, \"I laughed at you, but you were the only one thinking.\"",
    questions:[
      {q:"What did the folded paper offer, and what did it cost?", a:"It offered marks without learning, and it cost honesty, twenty-one futures and the school's good name — a bargain sold in the dark."},
      {q:"What did Bendu's sentence show about her conscience?", a:"That it was already formed — she had decided long before the paper passed; the night only revealed what years had built."},
      {q:"Why is the mockers' later confession significant?", a:"It shows the witness still speaking even in the mocker — the seared conscience is not dead, only quieted, and can be reawakened."},
      {q:"What practical guards could the school and the class add?", a:"Honest examiners, locked papers and vigilant invigilation — but above all learners taught to write coram Deo, and peer groups that honour the refusers."}
    ]},
  project:{ title:"The conscience journal",
    brief:"Keep and analyse a two-week conscience journal.",
    steps:["Each evening, write one choice kept rightly and one struggle of the day.","Record what strengthened the witness (a word, a prayer, a friend) and what weakened it (the crowd, fatigue, appetite).","At the end of two weeks, read the journal and name your three commonest temptations.","Choose one guard for each temptation — a habit, a friend, a verse or a prayer.","Present (privately, if you prefer) your three temptations and guards, with no names of others exposed."],
    criteria:["Fourteen honest entries","Strengths and weaknesses of the witness recorded","Three temptations honestly named","One guard chosen per temptation","Personal reflection kept private where it should be"]},
  activities:["Recite the seven steps and test each other with quick cases","Debate: can a good act be done from a bad motive?","Discuss the mockers' confession in the case study: what woke his conscience?","Write a class pledge for examination integrity"],
  materials:["The Holy Bible — Proverbs 1:10; Matthew 6:1-4; Romans 2:14-16; 1 Corinthians 10:13","The Holy Qur'an — 91:7-10; 2:284; 99:7-8","Liberian proverbs on the small voice and the buried act","A personal notebook for the journal"],
  assessment:["Conscience journal","Steps recitation and case test","Class debate","Written reflection","Quizzes and tests"]
},

{
  grade:11, period:"II", sem:"One", icon:"🕊️",
  title:"Justice, Human Dignity and Religious Freedom",
  subtitle:"The rights God gives, the justice He commands, and the tolerance a multi-religious nation requires",
  outcomes:["Learners understand justice as the will of God for society, the dignity of every human person, and the freedom of conscience protected in Liberia's Constitution — and can practise religious tolerance with both conviction and respect."],
  objectives:[
    "Define justice and human dignity from the three traditions",
    "State the teaching that all persons are equal before God — male and female, tribe and tribe, rich and poor",
    "Explain religious freedom and Liberia's constitutional protection of it",
    "Describe religious tolerance as the tradition of Liberia, with its disciplines",
    "Identify acts of injustice and religious intolerance, and the believer's duty to oppose them"
  ],
  note:"<b>Justice is a religious duty before it is a legal one</b>: \"let justice roll down like waters\" (Amos 5:24); \"God commands justice and the doing of good\" (Qur'an 16:90). Every person bears <b>God's image</b> (Genesis 1:26-27) — \"We have honoured the children of Adam\" (Qur'an 17:70) — so the mistreatment of any person is an offence against God. Liberia's Constitution protects <b>freedom of thought, conscience and religion</b>; the traditions require us to defend the worship of those who differ from us.",
  study:[
    {k:"h3", t:"What Justice Is"},
    {k:"p", t:"**Justice** is giving each person what is due to them — the worker the wage, the accused the hearing, the weak the protection, God the obedience. The Bible: \"He has shown you, O man, what is good... to do justice, and to love kindness, and to walk humbly with your God\" (Micah 6:8). The Qur'an: \"Be steadfast witnesses for Allah in justice, and let not hatred of a people move you from justice; be just — that is nearer to godliness\" (Qur'an 5:8). The elders' palaver is the sitting of justice: every voice is heard, the small and the great alike."},
    {k:"rule"},
    {k:"h3", t:"Human Dignity — the Image of God"},
    {k:"p", t:"Human dignity rests on one fact: every person is made in the image of God (Genesis 1:26-27), honoured above every creature (Qur'an 17:70), a child of the community's one Creator. From this the traditions draw the equal worth of:"},
    {k:"bul", items:[
      "**Male and female** — \"there is neither male nor female... in Christ Jesus\" (Galatians 3:28); \"the believing men and women are protectors of one another\" (Qur'an 9:71); the tradition counts the mother as the first elder",
      "**Tribe and tribe** — God \"made you nations and tribes that you may know one another\" (Qur'an 49:13); in Christ the dividing wall is broken down (Ephesians 2:14); the elders teach that Liberia's peoples are one hearth with many fires",
      "**Rich and poor** — \"He who oppresses the poor reproaches his Maker\" (Proverbs 14:31); the poor have a recognised right in the wealth (Qur'an 70:24-25)",
      "**The stranger and the prisoner** — the stranger is loved as the self (Leviticus 19:34; Matthew 25:35); the prisoner is visited (Matthew 25:36)"
    ]},
    {k:"rule"},
    {k:"h3", t:"Rights Come with Duties"},
    {k:"p", t:"The traditions teach rights and duties together: the child's right to be fed and taught, and the parent's duty to provide; the worker's right to the wage, and the duty of honest labour; the citizen's right to protection, and the duty of lawful conduct; every person's right to worship, and the duty to let others worship in peace. A right claimed without its duty is greed dressed as justice."},
    {k:"rule"},
    {k:"h3", t:"Religious Freedom and the Law of Liberia"},
    {k:"p", t:"Liberia was founded by settlers who had known religious exclusion, and its law protects conscience: the Constitution of the Republic guarantees freedom of thought, conscience and religion to all persons, and the nation has known, for most of its history, Christians, Muslims and followers of tradition living as neighbours. The believers' duty goes beyond the law: to defend the worship of those who differ, to refuse mockery of what others hold sacred, and to guard the peace between the communities (\"so then let us pursue what makes for peace\" — Romans 14:19)."},
    {k:"rule"},
    {k:"h3", t:"Tolerance — Its Limits and Its Disciplines"},
    {k:"p", t:"**Tolerance** is not the pretence that all religions are the same — each tradition holds its convictions, and honesty honours that. Tolerance is the refusal to persecute, mock or marginalise a person for their faith, and the readiness to live, work and build the nation together. Its disciplines:"},
    {k:"num", items:[
      "Speak of another's faith as its own people speak of it, or keep silent.",
      "Correct misinformation: no religion may be judged by its worst impostor.",
      "Defend the attacked: the believer whose neighbour's mosque or church is threatened stands in the door.",
      "Disagree without despising: the truth can be spoken in love (Ephesians 4:15); \"to you your religion, and to me mine\" (Qur'an 109:6).",
      "Cooperate in the good: schools, clinics and peace belong to all communities."
    ]},
    {k:"rule"},
    {k:"h3", t:"The Believer's Stand Against Injustice"},
    {k:"p", t:"\"Open your mouth for the mute, for the rights of all who are destitute... defend the rights of the poor and needy\" (Proverbs 31:8-9). The believer does not join the mocker, the discriminator or the mob — at cost, if need be. The seam of injustice in any community — the cheated worker, the denied widow, the bullied stranger, the mocked worshipper — is a religious matter before it is a social one."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:[
      "Define justice with one reference from each tradition.",
      "State the ground of human dignity and two groups it protects that are often despised.",
      "Write the five disciplines of tolerance in your own words.",
      "Find and summarise the article of Liberia's Constitution that protects freedom of thought, conscience and religion.",
      "Report one act of interfaith respect you have witnessed in your community, and what made it possible."
    ]}
  ],
  focus:["Justice as the will of God","Human dignity — the image of God","Equality of male and female, tribe and tribe, rich and poor","Rights with duties","Religious freedom in Liberia's Constitution","Tolerance — limits and disciplines"],
  terms:[
    {t:"justice", d:"giving each person what is due to them", x:"Justice rolls down like waters."},
    {t:"dignity", d:"the worth a person has as a person, made in God's image", x:"The beggar bears God's dignity."},
    {t:"image of God", d:"the mark of the Creator on every human person", x:"To harm a person is to touch the image of God."},
    {t:"equality", d:"the equal worth of persons before God and the law", x:"Tribes and stations differ; worth does not."},
    {t:"tolerance", d:"respecting persons whose faith differs, without pretending all faiths are the same", x:"Tolerance keeps the nation's peace."},
    {t:"conscience", d:"the inner witness of right and wrong", x:"Freedom of conscience is protected by law."},
    {t:"discrimination", d:"unjust treatment of a person for group, tribe, faith or gender", x:"Discrimination insults the Maker."},
    {t:"palaver", d:"the traditional sitting where matters are discussed and settled", x:"Every voice is heard in the palaver."},
    {t:"advocacy", d:"public argument in support of the rights of others", x:"Advocacy speaks for the voiceless."},
    {t:"persecution", d:"cruel treatment of persons for their faith", x:"Persecution is an offence against God."},
    {t:"interfaith", d:"between or among religious communities", x:"The interfaith council stood for peace."},
    {t:"prejudice", d:"a judgment made before the facts, against a group", x:"Prejudice is the mother of injustice."}
  ],
  facts:[
    {q:"Define justice and give one reference from each tradition.", a:"Giving each person their due: Amos 5:24 (let justice roll down like waters); Qur'an 16:90 (God commands justice); the elders' palaver, where every voice is heard."},
    {q:"On what fact does human dignity rest?", a:"Every person is made in the image of God (Genesis 1:26-27) and honoured above all creatures (Qur'an 17:70)."},
    {q:"Give two references on the equality of male and female.", a:"Galatians 3:28 — in Christ there is neither male nor female; Qur'an 9:71 — the believing men and women are protectors of one another."},
    {q:"What does Qur'an 49:13 teach about tribes and nations?", a:"That God made them nations and tribes that they might know one another — difference is for knowledge, not for hatred."},
    {q:"What does the Constitution of Liberia protect in matters of faith?", a:"Freedom of thought, conscience and religion for all persons."},
    {q:"Which verse commands the believer to speak for the voiceless?", a:"Proverbs 31:8-9 — open your mouth for the mute, defend the rights of the poor and needy."},
    {q:"What is tolerance, and what is it not?", a:"It is refusing to persecute, mock or marginalise persons of another faith, and readiness to build together; it is not the pretence that all religions are the same."},
    {q:"Quote the short Qur'anic sentence that ends the surah of the unbelievers.", a:"\"To you your religion, and to me mine\" (Qur'an 109:6)."}
  ],
  tf:[
    {s:"Justice is the business of the courts alone.", a:"false", why:"Justice is commanded of every believer (Micah 6:8; Qur'an 5:8); the courts enforce part of it, but God requires it of every hand."},
    {s:"The traditions teach that some tribes are closer to God than others.", a:"false", why:"God made the nations and tribes to know one another (Qur'an 49:13); Christ breaks down the dividing wall (Ephesians 2:14); the elders call the peoples one hearth with many fires."},
    {s:"Tolerance requires a believer to abandon personal convictions.", a:"false", why:"Tolerance is refusing to persecute or mock while honestly holding one's own faith — \"to you your religion, and to me mine\" (Qur'an 109:6)."},
    {s:"The Constitution of Liberia protects freedom of thought, conscience and religion.", a:"true", why:"The founders knew exclusion; the Republic's law protects every conscience."},
    {s:"A right may be claimed while its duty is refused.", a:"false", why:"The traditions teach rights and duties together; a right without its duty is greed dressed as justice."},
    {s:"Defending a neighbour's place of worship is a religious duty.", a:"true", why:"The peace between communities is God's will (Romans 14:19), and the believer stands in the door when it is threatened."}
  ],
  apply:[
    {q:"A group at school mocks a Muslim learner's prayer. What do you do?", a:"Interrupt the mockery without joining it; name the wrong plainly (the Constitution protects her worship; the traditions forbid mocking what is sacred); walk with her at prayer time if she wishes; report if it continues."},
    {q:"A worker in your uncle's shop is denied his agreed pay \"until next month\" — again. Advise your uncle.", a:"The withheld wage is injustice: \"the labourer deserves his wages\" (1 Timothy 5:18); the Qur'an commands paying the worker before his sweat dries (Hadith); counsel your uncle to pay and to plan honestly."},
    {q:"An election is coming and a candidate says only one county's people should eat. Respond.", a:"That is tribalism, condemned by all three traditions (Qur'an 49:13; Galatians 3:28; the one hearth of the peoples); a nation that eats by county starves as one nation — judge candidates by character and plan, not by county."},
    {q:"You hear a classmate say traditional religion is \"nothing but devil work\". Correct him.", a:"Speak of the tradition as its own people do: the elders honour the one Creator; and remember the rule — no religion is judged by its worst impostor; correct without contempt."},
    {q:"Design one interfaith act of service your class could do this term.", a:"For example: a joint clean-up of the market or the clinic road with the church youth, the mosque youth and the town elders blessing the work — cooperation in the good that belongs to all."}
  ],
  sort:{ title:"Justice and freedom", groups:[
    {name:"Parts of justice", items:["The fair wage","The fair hearing","Protection of the weak","Honest measure"]},
    {name:"Grounds of equality", items:["Image of God","The honoured children of Adam","The one hearth of the peoples","Christ's broken dividing wall"]},
    {name:"Disciplines of tolerance", items:["Speak of a faith as its people do","Correct misinformation","Defend the attacked","Disagree without despising"]},
    {name:"Faces of injustice", items:["Discrimination","Withheld wages","Mockery of worship","Tribalism"]}
  ]},
  compare:{ title:"The three traditions on justice and dignity", caption:"Complete the table of each tradition's teaching.",
    items:[
      {p:"Definition", f:"Giving each their due — Micah 6:8; Qur'an 16:90; the palaver where every voice is heard."},
      {p:"Ground of dignity", f:"The image of God (Genesis 1:27); the honouring of the children of Adam (Qur'an 17:70); the community's child as sacred."},
      {p:"The weak defended", f:"The widow, orphan and stranger (James 1:27; Qur'an 107; Leviticus 19:34); the elders' duty to the voiceless."},
      {p:"Impartiality commanded", f:"Let not hatred move you from justice (Qur'an 5:8); no partiality to rich or poor (Leviticus 19:15); the palaver hears the small as the great."},
      {p:"Freedom of worship", f:"\"To you your religion, to me mine\" (Qur'an 109:6); Christ's kingdom not forced by the sword (John 18:36); the elders' hospitality to every worship."},
      {p:"The believer's stand", f:"Open the mouth for the mute (Proverbs 31:8-9); command the right and forbid the wrong (Qur'an 3:104); the elder does not eat while the town is wronged."}
    ]},
  casestudy:{ title:"The mosque on church land",
    text:"In a growing quarter of a Liberian town, the Christian community had a large walled compound with an empty half-acre behind the church. When the Muslim community of the same quarter outgrew its prayer room, its leaders asked to buy the empty half-acre to build a small mosque. Some church members objected: \"We bought that land with our offerings.\" The pastor called the church council and read the parable of the good neighbour, then said, \"The land was never ours; it was God's before we bought it and it will be His after. The question is whether the quarter will see two houses of God or one wall.\" The church sold the half-acre at a fair price, and the two communities shared the same mason. On the day the mosque's foundation was laid, the congregation sang at the ceremony. Years later, when the church roof was blown off in a storm, the first people on the scaffold were the young men of the mosque.",
    questions:[
      {q:"What principle did the pastor apply to the church's ownership?", a:"Stewardship: the land was God's before and after — ownership is a trust, and trusts are administered for the neighbour's good."},
      {q:"Was the objection of the members wholly wrong? Explain.", a:"Their concern was real — offerings are sacrifice — but incomplete: property is protected by law and conscience, yet its use is tested by love of neighbour; they were holding a right and forgetting a duty."},
      {q:"What did the shared mason and the sung ceremony accomplish that a contract alone could not?", a:"A relationship: the ceremony made the two communities visible to each other as worshippers of one Creator, which is what later put the mosque's young men on the church's roof."},
      {q:"Which disciplines of tolerance does the story display?", a:"Speaking of the other's worship with respect, defending its place, cooperating in the good, and disagreeing (over land) without despising."}
    ]},
  project:{ title:"Rights and duties in our community",
    brief:"Map one right and its matching duty in your community, from the traditions and the law.",
    steps:["Choose one right — to education, to the wage, to worship, or to inherit.","Find what the Bible, the Qur'an or the tradition teaches about it.","Find what Liberia's law says about it (with your teacher's help).","Interview one person whose right has been respected or denied, with respect and consent.","Present the map: the right, the duty, the teaching, the law, and the human story."],
    criteria:["One right clearly chosen","Teaching of the traditions accurately cited","The law correctly summarised","A real human story gathered with consent","A clear, respectful presentation"]},
  activities:["Write the five disciplines of tolerance as class rules for one week and keep them","Debate: does tolerance mean all religions are the same?","Map the places of worship in your community and visit none without permission — plan one joint service project instead","Discuss: what should the palaver of the whole nation hear first?"],
  materials:["The Holy Bible — Genesis 1:26-27; Proverbs 31:8-9; Micah 6:8; Matthew 25:31-46; Galatians 3:28","The Holy Qur'an — 5:8; 16:90; 17:70; 49:13; 109:6","The Constitution of the Republic of Liberia","Leaders of the church, mosque and elders' council"],
  assessment:["Class rules kept and reviewed","Debate performance","Service project","Right-and-duty map","Written tests"]
},

{
  grade:11, period:"III", sem:"One", icon:"🏛️",
  title:"Leadership, Integrity and Good Governance",
  subtitle:"The religious view of authority — servant leadership, the prophetic critique of bad rule, corruption and accountability",
  outcomes:["Learners understand leadership as a trust and a service before God, can state the marks of good and bad leadership from the three traditions, judge corruption by religious standards, and know a citizen's duties in governance."],
  objectives:[
    "Define leadership as service and trust",
    "List the marks of a good leader from the three traditions, with examples",
    "Explain the prophetic critique of bad leadership — Samuel, Nathan, Elijah, Amos",
    "Explain corruption as the betrayal of a trust, and its national cost",
    "State the citizen's duties in governance — voting, taxes, lawful conduct, accountability"
  ],
  note:"<b>Leadership is service</b>: \"whoever would be great among you must be your servant\" (Mark 10:43-44). Authority is a <b>trust</b> held for God and the people (Qur'an 4:58; Romans 13:1-7), and the leader answers for it twice — to the people in this life and to God in the next. Where rulers turn servants into masters, the prophets speak: Samuel warned the nation what a self-serving king would take (1 Samuel 8); Nathan said to David, \"You are the man\" (2 Samuel 12); Amos cried against those who trample the needy (Amos 8:4).",
  study:[
    {k:"h3", t:"Leadership as Service and Trust"},
    {k:"p", t:"The traditions judge leadership by one test: whom does the leader serve? Christ overturned the model of the nations — \"whoever would be first among you must be slave of all. For the Son of Man came not to be served but to serve\" (Mark 10:44-45), and He washed the disciples' feet to make it plain (John 13:13-15). The Prophet Muhammad ruled Medina and still mended his own sandals, and said that the leader of a people is their servant. The chief in the tradition is the **father of the town**: he eats last, the town's case is his own case, and his honor is the people's welfare. Authority, in all three, is a **trust** (amanah) — the Qur'an commands: \"Allah commands you to render trusts to whom they are due, and when you judge between people, to judge with justice\" (Qur'an 4:58)."},
    {k:"rule"},
    {k:"h3", t:"The Marks of a Good Leader"},
    {k:"bul", items:[
      "**Integrity** — the same person in public and in private; Daniel, whom no error or corruption could be found in (Daniel 6:4)",
      "**Competence and hard work** — Joseph the administrator who stored the years of plenty (Genesis 41; Qur'an 12)",
      "**Humility and consultation** — shura, counsel: the Qur'an praises those \"whose affair is decided by counsel among them\" (Qur'an 42:38); the palaver sits before the chief speaks",
      "**Justice without partiality** — \"you shall not be partial to the poor or defer to the great\" (Leviticus 19:15)",
      "**Courage** — Deborah judging Israel; Elijah standing before Ahab alone",
      "**Self-control over money** — the overseer must not be a lover of money (1 Timothy 3:3); the leader's hand is the last hand into the public store"
    ]},
    {k:"rule"},
    {k:"h3", t:"The Prophetic Critique of Bad Leadership"},
    {k:"p", t:"The scriptures do not only give ideals; they prosecute the failures:"},
    {k:"bul", items:[
      "**Samuel's warning** (1 Samuel 8:10-18) — the king who takes: your sons for his army, your fields, your harvest, and you yourselves; the nation that wanted a ruler to be like other nations learned what a ruler without God becomes",
      "**Nathan's charge** (2 Samuel 12:1-9) — the rich man who took the poor man's one ewe lamb; the prophet of God stands in the king's court and says, \"You are the man\"",
      "**Ahab and Naboth** (1 Kings 21) — the vineyard seized by perjury and murder; the palace that covets the citizen's land has left the law of God",
      "**Amos at the gate** (Amos 5:11-12, 8:4-6) — those who trample the needy and push aside the poor of the land, who take bribes and fix the scales: \"let justice roll down like waters\""
    ]},
    {k:"p", t:"The Qur'an names the same crimes: devouring property by false means, judging by other than what God has revealed, betraying the covenant of office. The elders' tradition gives the same charge from the other side: the chief who eats the town's case forfeits the stool."},
    {k:"rule"},
    {k:"h3", t:"Corruption — the Betrayal of the Trust"},
    {k:"p", t:"**Corruption** is the use of a public trust for private gain: the padded invoice, the ghost worker, the contract for the cousin, the bribe at the counter, the examination sold. It is condemned by name — \"a bribe blinds the eyes of the wise\" (Deuteronomy 16:19); \"do not consume your property among yourselves by false means, nor bribe the judges\" (Qur'an 2:188) — and by cost: every stolen dollar is a desk unseated, a drug unstocked, a road unpaved. Corruption is rarely violent; it kills quietly, by subtraction."},
    {k:"rule"},
    {k:"h3", t:"Good Governance and the Citizen"},
    {k:"p", t:"Governance is not only the leaders' business. The citizens' duties:"},
    {k:"num", items:[
      "**Vote honestly** — for character and plan, not for county, wallet or kitchen; the vote is a trust exercised in secret before God",
      "**Pay lawful taxes** — \"render to all what is owed them... taxes to whom taxes are owed\" (Romans 13:7)",
      "**Obey just laws and resist lawlessness** — including the lawless fashion of the crowd",
      "**Hold leaders accountable** — ask, attend, question respectfully; the palaver that never questions its chief will bury its own case",
      "**Pray for those in authority** — \"that we may lead a quiet and peaceable life\" (1 Timothy 2:1-2)",
      "**Refuse and report corruption** — beginning with one's own hand"
    ]},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:[
      "Write the one test by which the traditions judge a leader, with two references.",
      "List six marks of a good leader and match each to a biblical or Qur'anic figure.",
      "Summarise Samuel's warning about the self-serving king in five lines.",
      "Define corruption in one sentence and name three of its costs to the nation.",
      "Interview an elder who has seen both good and bad chiefs: ask what marked the good ones, and report their words."
    ]}
  ],
  focus:["Leadership as service and trust","The marks of a good leader","The prophetic critique — Samuel, Nathan, Ahab, Amos","Corruption as betrayal of trust","The citizen's duties in governance","Accountability to God and the people"],
  terms:[
    {t:"servant leadership", d:"leading by serving the led, after Christ's example", x:"The servant leader eats last."},
    {t:"trust", d:"a duty held on behalf of God and the people", x:"Public office is a trust, not a prize."},
    {t:"accountability", d:"the duty to answer for the exercise of power", x:"Every leader gives account twice."},
    {t:"governance", d:"the right ordering of public affairs", x:"Good governance feeds the nation."},
    {t:"corruption", d:"the misuse of public trust for private gain", x:"Corruption kills by subtraction."},
    {t:"bribe", d:"a gift that perverts judgment", x:"The bribe blinds the eyes of the wise."},
    {t:"nepotism", d:"favouring relatives and friends in public appointments", x:"Nepotism staffs the office with cousins."},
    {t:"prophet", d:"one who speaks for God, especially to power", x:"Nathan stood in the king's court."},
    {t:"palaver", d:"the traditional sitting of counsel and judgment", x:"The palaver sat until the case was settled."},
    {t:"partiality", d:"judging by the face — rich or poor — instead of the truth", x:"Partiality is forbidden to judges."},
    {t:"shura", d:"consultation, counsel in deciding affairs", x:"Their affair is decided by counsel among them."},
    {t:"steward", d:"one who manages another's property faithfully", x:"The leader is steward, not owner."}
  ],
  facts:[
    {q:"What is the one test by which the traditions judge leadership?", a:"Whom does the leader serve — himself or the people; leadership is service and a trust, not mastery (Mark 10:44-45; Qur'an 4:58)."},
    {q:"Give two references that call office a trust.", a:"Qur'an 4:58 — render trusts to whom they are due; Romans 13:1-7 — the ruler is God's servant for the good of the people."},
    {q:"Name four marks of a good leader with their examples.", a:"Integrity (Daniel 6:4); competence (Joseph, Genesis 41); consultation (Qur'an 42:38; the palaver); justice without partiality (Leviticus 19:15)."},
    {q:"What did Samuel warn the nation the self-serving king would do?", a:"Take their sons for his army and their daughters for his service, take the best of their fields and harvests, and make the people themselves his servants (1 Samuel 8:10-18)."},
    {q:"What was Nathan's one sentence to King David?", a:"\"You are the man\" (2 Samuel 12:7) — the prophet's charge that the king himself was the wrongdoer in the parable."},
    {q:"What crime did Ahab and Jezebel commit for Naboth's vineyard?", a:"Perjury and murder — a citizen's land seized by false witness and blood (1 Kings 21)."},
    {q:"Define corruption and name three national costs.", a:"The misuse of public trust for private gain; its costs include unbuilt roads, unstocked clinics and unpaid or ghost teachers — the poor pay first."},
    {q:"List four duties of the citizen in governance.", a:"Vote honestly; pay lawful taxes; obey just laws; hold leaders accountable — and pray for those in authority (1 Timothy 2:1-2)."}
  ],
  tf:[
    {s:"The traditions teach that a leader is above the law he administers.", a:"false", why:"The leader is a steward under God's law; Nathan charged a king, and the Qur'an commands even rulers to judge by what God has revealed."},
    {s:"Jesus washed the disciples' feet to teach leadership.", a:"true", why:"John 13:13-15 — the Master and Lord took the servant's towel, commanding the leaders of His people to do as He did."},
    {s:"Bribery is a small matter if the sum is small.", a:"false", why:"The bribe perverts justice at any size (Deuteronomy 16:19; Qur'an 2:188); small bribes train the habit that eats the big contract."},
    {s:"Paying taxes honestly is a religious duty.", a:"true", why:"Romans 13:7 — taxes to whom taxes are owed; the honest citizen funds the school, the clinic and the road."},
    {s:"Citizens should never question their leaders.", a:"false", why:"Accountability is part of the trust: the palaver questions the chief, the prophet questions the king, and the citizen asks respectfully and persistently."},
    {s:"Joseph's promotion in Egypt is an example of competence in office.", a:"true", why:"He administered the years of plenty so the people lived through the famine (Genesis 41); competence is a moral duty, not a technical extra."}
  ],
  apply:[
    {q:"Your county's clinic has a sign reading \"medicines free\", but the attendant sells them. What does your faith require?", a:"To see it as theft from the sick (a double wrong — corruption and injury to the weak); record the facts, report through a parent, a church or mosque leader, or the county health office; and refuse to pay the unlawful price."},
    {q:"A candidate offers your household money for its votes. What is the honest analysis?", a:"The offer is a bribe — a trust bought; it buys the candidate the office and sells the community its future; taking it makes the household part of the corruption it will later suffer."},
    {q:"You are class prefect and your friends expect favours in marks. Apply the marks of a leader.", a:"Impartiality: no favours, the same rule for friends and strangers; competence: keep the register truly; courage: say no plainly and early; integrity: the register is the same when the teacher is absent."},
    {q:"An elder says, \"In our time, chiefs feared the town's case.\" Explain the saying.", a:"The chief who mishandled the town's case lost his stool and his name; the fear was accountability — the leader governed in the palaver's sight, knowing he answered to the people and to God."},
    {q:"Write one question you would put respectfully to any candidate for any office.", a:"For example: \"What have you done for others with the trust you already held, and where can we go and see it?\""}
  ],
  sort:{ title:"Governance before God", groups:[
    {name:"Marks of the good leader", items:["Integrity","Competence","Consultation","Courage"]},
    {name:"The prophetic critique", items:["Samuel's warning","Nathan's charge","Ahab's vineyard","Amos at the gate"]},
    {name:"Faces of corruption", items:["The padded invoice","The bribe at the counter","The ghost worker","The sold examination"]},
    {name:"The citizen's duties", items:["Vote honestly","Pay lawful taxes","Hold leaders accountable","Pray for those in authority"]}
  ]},
  compare:{ title:"Three traditions on power", caption:"Complete the table comparing the traditions' teaching on leadership.",
    items:[
      {p:"Model of the leader", f:"Christ the servant-king washing feet; the Prophet mending his own sandals while ruling; the chief as father of the town who eats last."},
      {p:"Source of authority", f:"From God, held as a trust for the people — Romans 13:1; Qur'an 4:58; the stool given by the community under God."},
      {p:"Check on power", f:"The prophets who charge kings; the command to consult (shura, palaver); the elders who can set the case above the chief."},
      {p:"Money and office", f:"The overseer not a lover of money; the leader's hand last into the public store; the town's case not eaten."},
      {p:"Judgment", f:"Leaders answer twice — to the people now and to God at the end; the Qur'an's reckoning and the parable of the talents (Matthew 25:14-30) alike make office a loan to be repaid."},
      {p:"Citizen's share", f:"Honest vote, honest tax, lawful conduct, honest question — the governed are accountable too."}
    ]},
  casestudy:{ title:"The two chairmen",
    text:"Two development committees served two neighbouring quarters of the same town, each receiving the same yearly development fund from the county. Chairman Kollie chaired the first. He printed no report, gave no account, and when the quarter's residents asked about the new roof on his mother's house, he said the fund was \"government business, not quarter business.\" The people stopped contributing their own community dues, and the quarter's hand pump stayed broken for two dry seasons. Chairman Bendu chaired the second. She posted the fund's amount on the notice board, read the accounts at the general meeting, put three residents on the purchasing committee, and when the mason over-quoted, the committee re-tendered and saved the price of a second pump. In two years her quarter had a working pump, a drying floor for the cassava, and — the county noticed — the largest voluntary contribution rate in the district. When the county asked her secret, she said, \"I did nothing. I only let the quarter see its own money.\"",
    questions:[
      {q:"Compare the two chairmen by the marks of a leader.", a:"Bendu: accountability, consultation, competence, integrity. Kollie: opacity first, then entitlement — the roof on the mother's house is the trust consumed."},
      {q:"Why did the broken pump stay broken for two seasons?", a:"Corruption broke the trust, and broken trust broke the contributions — the residents refused to feed a dark pocket; governance dies of its own secrecy."},
      {q:"What did Bendu mean by \"I only let the quarter see its own money\"?", a:"That good governance is mostly transparency: the notice board, the read accounts and the purchasing committee let the people hold the trust, which made them willing to add their own."},
      {q:"Which scriptural figures does each chairman most resemble?", a:"Bendu, Joseph the accountable administrator; Kollie, the warned king of 1 Samuel 8 — who takes, until the people themselves are taken."}
    ]},
  project:{ title:"A leader worth voting for",
    brief:"Draw up, from the traditions, the job description of a leader, and test it in your community.",
    steps:["Compile the six marks of a good leader from this unit into a one-page job description.","Add the citizen's duties as a matching one-page charter.","Interview two electors (with respect, no party politics): ask what they look for in a candidate.","Compare their answers with your job description honestly.","Present the job description and charter, and keep both for your first vote at eighteen."],
    criteria:["All six marks included with references","The citizen's charter complete","Two electors interviewed respectfully","An honest comparison made","The final documents clear and keepable"]},
  activities:["Role-play the palaver that questions a chief, with the class as the town","Debate: is a competent but dishonest leader better than an honest but incompetent one? (Answer with the traditions: neither — integrity is not optional)","Draft a class constitution with offices, duties and accountability","Study one biblical and one Qur'anic leader and compare their administrations"],
  materials:["The Holy Bible — 1 Samuel 8; 2 Samuel 12; 1 Kings 21; Amos 5:24; Mark 10:42-45; John 13:13-15; Romans 13:1-7","The Holy Qur'an — 2:188; 4:58; 42:38","Liberian proverbs on chiefs and the town's case","Elders of the community"],
  assessment:["Job description project","Role-play","Class debate","Comparison study","Written tests"]
},

{
  grade:11, period:"IV", sem:"Two", icon:"🩺",
  title:"Sickness, Suffering and the Ministry of Care",
  subtitle:"Why the faithful suffer, the dignity of the sick, and the traditions' ministries of healing and comfort",
  outcomes:["Learners understand the religious responses to sickness and suffering, honour the dignity of the sick, the elderly and the mentally troubled, and can practise and organise the ministry of care in their communities."],
  objectives:[
    "Explain the responses of the three traditions to the question of suffering",
    "Show that sickness is not proof of sin, with the teaching of Jesus",
    "Describe the ministries of care — visiting, prayer, practical help, the work of the healer and the clinic",
    "Explain the dignity of the elderly and the mentally troubled",
    "Organise a small act of the ministry of care"
  ],
  note:"<b>Sickness raises the oldest question</b>: why do the faithful suffer? The traditions answer with Job's trust, the Qur'an's patience (2:155-157) and the elders' search for the cause — and all three forbid the cruel answer that the sick are being punished for hidden sin: Jesus healed the man born blind and corrected the reasoning (John 9:1-3). The sick person bears <b>God's image</b> still: \"I was sick and you visited me\" (Matthew 25:36). Care is worship — the prayer, the clinic, the herbalist's knowledge and the neighbour's presence are one ministry.",
  study:[
    {k:"h3", t:"Why Do the Faithful Suffer?"},
    {k:"bul", items:[
      "**Christianity** — Job suffers though righteous, and God does not explain; He answers with Himself (Job 38-42). Christ heals sickness and finally bears it; suffering is not God's anger at the sufferer but part of a fallen world He is redeeming (Revelation 21:4)",
      "**Islam** — this world is a test: \"We shall surely test you with something of fear and hunger and loss of wealth and lives and fruits; but give glad tidings to the patient, who say, To Allah we belong and to Him we return\" (Qur'an 2:155-156); \"Allah does not burden a soul beyond what it can bear\" (2:286)",
      "**African Traditional Religion** — suffering is examined, not presumed: is the cause natural, human or a disorder of the spirit? The diviner inquires so that harmony may be restored; the Creator remains sovereign over every cause"
    ]},
    {k:"rule"},
    {k:"h3", t:"Sickness Is Not Proof of Sin"},
    {k:"p", t:"The cruel doctrine — \"he is suffering for his sins\" — was corrected by Jesus Himself. Of the man born blind: \"neither did this man sin, nor his parents, but that the works of God might be displayed in him\" (John 9:3). Of the Galileans killed by Pilate: \"do you think they were worse sinners...? No, I tell you\" (Luke 13:2-3). Job's friends argued the cruel doctrine for thirty chapters and were rebuked by God (Job 42:7). The believer's first act at a sickbed is compassion, not theology."},
    {k:"rule"},
    {k:"h3", t:"The Dignity of the Sick"},
    {k:"p", t:"The sick person is not an embarrassment, a burden or a spiritual failure: they bear the image of God as fully on the sickbed as on the football field. The Qur'an honours the patient and forbids despair; the tradition seats the elder at the centre of the compound, not at its edge; Christ touched the leper before He healed him (Mark 1:41)."},
    {k:"rule"},
    {k:"h3", t:"The Ministries of Care"},
    {k:"table", head:["Ministry","In the traditions"], rows:[
      ["Visiting","\"I was sick and you visited me\" (Matthew 25:36); the Hadith commands visiting the sick as a right of the believer; the elders' custom of sitting with the sick until the crisis passes"],
      ["Prayer","The elders anoint with oil and pray (James 5:14-15); dua for the sick; the libation and the word of the elder; prayer with, not instead of, treatment"],
      ["Practical help","Food, water, firewood, the swept floor, the carried child; the mosque's and church's relief; the compound's open pot"],
      ["The healer and the clinic","Herbal knowledge and the diviner's inquiry; the nurse and the doctor; the Christian mission clinic and the Islamic welfare clinic — the traditions teach that medicine is God's gift, and treatment is not unbelief"],
      ["The whole community","The Hadith: the believers in their mutual kindness are like one body; when one limb suffers, the whole body responds"]
    ]},
    {k:"p", t:"Two errors stand against this ministry: the error of **despair**, which treats the sick as already dead and abandons them; and the error of **exploitation**, which preys on the sick — selling false cures, blaming the innocent, or holding \"miracle\" fees over the desperate. Both are condemned."},
    {k:"rule"},
    {k:"h3", t:"The Elderly and the Mentally Troubled"},
    {k:"p", t:"\"You shall rise before the grey head and honour the face of an old man\" (Leviticus 19:32). The aged are the community's memory, not its burden. The mentally troubled — the depressed, the anxious, the confused — are sick persons, not curses: their healing may need counsel, medicine and patience, and the community's mockery is part of the disease's weight. The traditions require protection for both, and the believer is their defender."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:[
      "State the three traditions' answers to why the faithful suffer.",
      "Write the two verses in which Jesus corrects the cruel doctrine of sickness-as-punishment.",
      "List the five ministries of care and give one practice of each.",
      "Explain the two errors that stand against the ministry of care.",
      "Plan and carry out one act of care: visit a sick or elderly person with your teacher's or parent's arrangement, and record what you did and learned."
    ]}
  ],
  focus:["Why the faithful suffer — three answers","Sickness is not proof of sin","The dignity of the sick","The five ministries of care","The elderly and the mentally troubled","Against despair and exploitation"],
  terms:[
    {t:"suffering", d:"the experience of pain, loss or distress", x:"Suffering raised Job's question."},
    {t:"patience", d:"the bearing of hardship without despair or rebellion", x:"Glad tidings to the patient."},
    {t:"compassion", d:"suffering with another, moved to help", x:"Compassion touched the leper first."},
    {t:"visitation", d:"the ministry of sitting with the sick and the bereaved", x:"Visitation is worship in the ward."},
    {t:"anointing", d:"the elders' prayer with oil for the sick (James 5)", x:"The anointing joined prayer and care."},
    {t:"dua", d:"personal supplication to God in Islam", x:"Her dua rose at the sickbed."},
    {t:"healer", d:"one who treats the sick — herbal, medical or both", x:"The healer's knowledge is God's gift."},
    {t:"stigma", d:"the mark of shame wrongly attached to a sickness", x:"Stigma silences the sick and spreads the disease."},
    {t:"despair", d:"the abandonment of hope", x:"Despair abandons the sick as if dead."},
    {t:"exploitation", d:"preying on the vulnerability of others", x:"The false cure exploits the desperate."},
    {t:"counsel", d:"patient guidance through trouble", x:"Counsel carries the burdened mind."},
    {t:"dignity", d:"the worth of the person as God's image", x:"The sickbed does not cancel dignity."}
  ],
  facts:[
    {q:"Give the three traditions' answers to why the faithful suffer.", a:"Christianity — Job's mystery and Christ's redemption of a fallen world; Islam — the world is a test, with patience and God's promise (Qur'an 2:155-156, 2:286); tradition — the cause is examined (natural, human or spiritual disorder) so harmony can be restored."},
    {q:"Which two passages correct the doctrine that sickness is punishment for sin?", a:"John 9:1-3 (the man born blind) and Luke 13:1-5 (the Galileans); also Job 42:7's rebuke of the friends who argued it."},
    {q:"Which verse makes visiting the sick a matter of final judgment?", a:"Matthew 25:36 — \"I was sick and you visited me.\""},
    {q:"What does James 5:14-15 direct for the sick?", a:"To call the elders of the church, who pray over the sick, anointing with oil in the name of the Lord."},
    {q:"What does the Hadith's one-body image teach about the community?", a:"That the believers are one body: when one limb suffers, the whole body shares the pain and responds — the sick are never a private matter."},
    {q:"Why are medicine and treatment not unbelief?", a:"Because healing knowledge is God's gift; the traditions honour the healer, the nurse and the doctor alongside prayer — prayer with treatment, not instead of it."},
    {q:"Name the two errors that stand against the ministry of care.", a:"Despair, which abandons the sick; and exploitation, which preys on them — false cures, blame and miracle fees."},
    {q:"What does Leviticus 19:32 command toward the elderly?", a:"\"Rise before the grey head and honour the face of an old man\" — the aged are honoured, not shelved."}
  ],
  tf:[
    {s:"A person's sickness shows that they have sinned more than others.", a:"false", why:"Jesus corrected this in John 9:3 and Luke 13:3; Job's friends were rebuked for arguing it."},
    {s:"Praying for the sick makes medical treatment unnecessary.", a:"false", why:"The traditions hold prayer and treatment together; medicine is God's gift, and refusing it tests God rather than trusting Him."},
    {s:"Visiting the sick is commanded in both the Bible and the Hadith.", a:"true", why:"Matthew 25:36 and the Hadith's command to visit the sick make it a right of the believer and an act of worship."},
    {s:"Mental trouble is a curse and the sufferer should be mocked or hidden.", a:"false", why:"The mentally troubled are sick persons bearing God's image; their healing may need counsel, medicine and the community's patience — mockery adds to the disease."},
    {s:"The elderly are the community's memory rather than its burden.", a:"true", why:"The elders carry the tradition, the cases and the names; Leviticus 19:32 commands their honour."},
    {s:"Selling a guaranteed miracle cure to the desperate is a religious act.", a:"false", why:"It is exploitation of the vulnerable — one of the two errors the ministry of care condemns."}
  ],
  apply:[
    {q:"A classmate's mother has been diagnosed with a long sickness, and some pupils whisper it is a family curse. What do you say and do?", a:"Reject the whisper with John 9:3 and Luke 13:3; go with your classmates to visit; organise practical help — notes, food, the swept yard; let the family's own faith lead the prayers."},
    {q:"Your grandmother insists only on prayer and refuses the clinic. How do you counsel her respectfully?", a:"Honour her faith and join her in it, then show her that the healer and the doctor are one ministry — medicine is God's gift (the Hadith's \"tie your camel and trust God\"); offer to go with her to the clinic and to pray at every step."},
    {q:"An old man in your quarter lives alone and the children mock his slowness. Design his community's care.", a:"A visiting rota of neighbours and pupils; his firewood and water fetched; the children taught the proverb of the grey head — and enlisted as his messengers, which converts mockery to office."},
    {q:"A preacher charges a sick woman her last money for a \"guaranteed healing\". What is your judgment and duty?", a:"It is exploitation condemned by all three traditions; counsel the woman toward treatment and honest prayer, and report the extortion to her family and the authorities."},
    {q:"Why is the believer's first act at a sickbed compassion rather than theology?", a:"Because the sick need presence and help before explanations; theology at the wrong moment becomes the friends of Job."}
  ],
  sort:{ title:"The ministry of care", groups:[
    {name:"Faces of suffering", items:["Sickness","Bereavement","Disability","Mental trouble"]},
    {name:"The ministries", items:["Visiting","Prayer","Practical help","The healer and the clinic"]},
    {name:"Who are served", items:["The sick","The elderly","The mentally troubled","The bereaved"]},
    {name:"Errors to refuse", items:["The cruel doctrine","Despair and abandonment","Exploitation of the sick","Mockery of the troubled"]}
  ]},
  compare:{ title:"Three traditions at the sickbed", caption:"Complete the table of each tradition's way with the sick.",
    items:[
      {p:"The question of why", f:"Job trusts without an explanation; the Qur'an's test and the promise that no soul is burdened beyond capacity; the elders inquire after the cause."},
      {p:"First response", f:"Compassion and presence — Christ touched the leper; the Hadith's visiting; the compound's sitting with the sick."},
      {p:"Prayer", f:"The elders' anointing (James 5); the dua for the sick; the elder's word and libation — all with, not instead of, treatment."},
      {p:"Treatment", f:"Medicine is God's gift: the healer's herbs, the nurse's hand, the clinic's drug — the traditions honour them together."},
      {p:"The community", f:"The one body that responds limb for limb; the open pot; the rota of visitors."},
      {p:"The forbidden", f:"The cruel doctrine, despair, abandonment and exploitation — each condemned at the sickbed."}
    ]},
  casestudy:{ title:"The rota that saved Sis. Yassah",
    text:"When the catechist's wife in a Lofa town fell ill with a long sickness, the first week brought forty visitors and much food. By the second month the visitors had thinned; by the third, the family was alone, the farm unplanted and the children missing school. The imam of the nearby mosque, visiting on a Friday, saw the yard and said one sentence to the youth leader of the church: \"This family has been left to pray alone.\" The two young leaders made a rota on the back of an exercise book: each week, two church families and two mosque families — the sick woman's own town was of both faiths — took the farm day, the water and the firewood in turn, and the Qur'an school and the Sunday school shared the children's lessons between them. The woman lived another two years. At her funeral the catechist said, \"When I could not pray, the mosque prayed; when we could not plant, the church planted. I have read many books about God. That exercise book taught me the most.\"",
    questions:[
      {q:"Why did the first week's forty visitors not constitute care?", a:"Care is sustained presence, not a crowd; the crisis lasts longer than the sympathy, which is why the rota — not the visit — is the true instrument."},
      {q:"What did the imam's sentence diagnose correctly?", a:"That a praying family had been left to pray alone — the community had confused attendance at the crisis with the ministry of the long weeks."},
      {q:"What made the rota work where goodwill alone had failed?", a:"Structure and shared ownership: named families, named days, two faiths answering one exercise book — love made a timetable."},
      {q:"What is the lesson for a senior-high class organising care?", a:"Take the long need, not the loud moment; write the plan down; share it widely; and let the served family keep its own faith and dignity at the centre."}
    ]},
  project:{ title:"An exercise book of care",
    brief:"Organise and run one month of structured care for a sick, elderly or bereaved person.",
    steps:["With your teacher and parents, identify one person needing sustained care.","List the real needs: farm or yard, water, firewood, food, lessons for the children, company.","Make a written rota of classmates and families, each with a day and a task.","Run the rota for one month; keep the exercise book faithfully.","Report to the class: what the care gave, and what it taught — without exposing the family's private matters."],
    criteria:["A real need identified through elders","The rota written and complete","One month faithfully kept","The family's dignity and privacy respected","An honest, discreet report"]},
  activities:["Learn James 5:14-15 and Matthew 25:31-36 by heart","Role-play the first visit to a sick neighbour: what to say, what not to say","Invite a nurse and a traditional healer to class together and compare their works","Discuss the case study: why did the exercise book teach the most?"],
  materials:["The Holy Bible — Job 42:7; Psalm 23; Matthew 25:31-36; Mark 1:40-42; Luke 13:1-5; James 5:13-16","The Holy Qur'an — 2:153-157, 286","Elders, nurses and healers of the community","An exercise book for the rota"],
  assessment:["Care rota project","Recitation","Role-play","Comparison discussion","Written tests"]
},

{
  grade:11, period:"V", sem:"Two", icon:"🌟",
  title:"Death and Life After Death",
  subtitle:"The Christian, Islamic and traditional teachings on death, judgment and the hereafter, and the comfort and conduct they shape",
  outcomes:["Learners know the teachings of the three traditions on death, judgment and the life to come, understand the funeral practices of Liberia with dignity, and can comfort the bereaved with honesty and hope."],
  objectives:[
    "State what each tradition teaches about death and what follows it",
    "Compare the judgment, heaven and paradise, and the place of the ancestors",
    "Describe funeral and mourning practices in Liberia and evaluate them with respect",
    "Explain how the hope of eternity should shape present conduct",
    "Comfort the bereaved with honest words and practical presence"
  ],
  note:"<b>Death is universal and not the end</b>: \"it is appointed for man once to die, and after that the judgment\" (Hebrews 9:27); \"every soul shall taste death\" (Qur'an 3:185). Christianity teaches the <b>resurrection</b> and heaven's home (John 14:1-3); Islam teaches the <b>Day of Resurrection</b>, paradise and the accounting of deeds; the tradition teaches the <b>ancestors</b> — the living-dead who are remembered and honoured. The three agree on the practical conclusion: <b>live this life in the light of the next</b>.",
  study:[
    {k:"h3", t:"Death — the Universal Door"},
    {k:"p", t:"Death comes to every person — the young and the old, the rich and the poor, the righteous and the wicked. \"Man is appointed once to die\" (Hebrews 9:27); \"every soul shall taste death\" (Qur'an 3:185); the elders say the grave is the one bed made for every head. Wisdom does not deny death; it prepares for it: \"teach us to number our days, that we may gain a heart of wisdom\" (Psalm 90:12)."},
    {k:"rule"},
    {k:"h3", t:"What Christianity Teaches"},
    {k:"bul", items:[
      "The body dies; the soul goes to God; the body awaits the **resurrection** at the last day (1 Corinthians 15)",
      "**Judgment** follows death — the deeds done in the body are judged (2 Corinthians 5:10)",
      "**Heaven** is the Father's house: \"I go to prepare a place for you\" (John 14:1-3); the new heaven and the new earth, where God wipes away every tear (Revelation 21:1-4)",
      "**Hell** is the far country from God — the rich man who ignored Lazarus found it (Luke 16:19-31)",
      "The thief on the cross hears, \"today you will be with Me in paradise\" (Luke 23:43) — even at the door, mercy"
    ]},
    {k:"rule"},
    {k:"h3", t:"What Islam Teaches"},
    {k:"bul", items:[
      "At death the soul is taken by the angel; the grave is the first stage (**barzakh**) where the soul is questioned",
      "The **Day of Resurrection** (Yawm al-Qiyamah) — the trumpet sounds and all are raised (Qur'an 99)",
      "Deeds are weighed and read from the record: \"whoever has done an atom's weight of good shall see it, and an atom's weight of evil shall see it\" (Qur'an 99:7-8)",
      "**Paradise** (Jannah) is the garden beneath which rivers flow, the home of peace; **hell** (Jahannam) is the fire prepared for the stubborn in evil",
      "The faithful are counselled to remember death often — the Hadith ranks it among the best of counsels"
    ]},
    {k:"rule"},
    {k:"h3", t:"What African Traditional Religion Teaches"},
    {k:"bul", items:[
      "Death is a **transition**, not an extinction — the person joins the ancestors, the living-dead, from whom the community still draws counsel",
      "The spirit **returns to the Creator who gave it**, as the elder's word parallels Ecclesiastes 12:7",
      "The funeral is an **escort** — the community accompanies the spirit home with rites, and the libation maintains the bond",
      "The ancestors are honoured with remembrance and consultation; some traditions teach the spirit's **return** in new life — the elders teach it variously among Liberia's peoples",
      "A full life — old age, children, a good name — is the tradition's blessing, and the bad death (the unripe death) is mourned with especial grief"
    ]},
    {k:"rule"},
    {k:"h3", t:"Funeral and Mourning Practices in Liberia"},
    {k:"p", t:"Liberia's funerals gather family, church or mosque, and town: the **wake** with its songs and testimonies; the church service with the hymns and the sermon, or the **janazah**, the Islamic burial prayer, with its swift and simple rite; the traditional rites with the elder's word and libation; the gathering meal after the burial. Mourning is real work — the traditions give it time, structure and company."},
    {k:"p", t:"Two evaluations follow the teaching: first, **dignity** — the dead are honoured, the family supported, and the body treated with reverence; second, **moderation** — the funeral is not a contest, and a family should not be beggared by a display beyond its means. The wise elder plans the family's funeral in life, and the community's help goes to the widow and the orphans after the guests have gone."},
    {k:"rule"},
    {k:"h3", t:"Living in the Light of Eternity"},
    {k:"p", t:"The three traditions make one practical point: **eternity audits today**. \"What does it profit a man to gain the whole world and forfeit his soul?\" (Mark 8:36). The Qur'an asks: \"Did We not give you a life long enough to take heed?\" (Qur'an 35:37). The elders ask whose name will be on the community's lips when the body is down — and the proverbs answer that the person's name is the person's second body. The honest preparation for death is an honest life: forgiveness sought and given, duties done, accounts straight, and the hope set on God."},
    {k:"rule"},
    {k:"h3", t:"Comforting the Bereaved"},
    {k:"num", items:[
      "Go early, stay quiet, let them speak; presence outranks speeches",
      "Never explain the death as their sin — the cruel doctrine is doubly cruel at a graveside",
      "Speak honestly of hope: the traditions' promises, not invented comforts",
      "Help practically — food, children, the farm, papers — in the months after, when the crowd has gone",
      "Speak the name of the dead with honor; the bereaved need their person remembered"
    ]},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:[
      "Write the five points of Christian teaching on death and the hereafter.",
      "Explain barzakh, the Day of Resurrection, and the weighing of deeds in Islam.",
      "Describe the ancestors in African Traditional Religion in four sentences.",
      "Compare the three traditions' teachings in a table: the soul, judgment, the blessed state.",
      "Write a letter of comfort to a classmate who has lost a parent — honest, hopeful, practical — and read it to the class without names."
    ]}
  ],
  focus:["Death as the universal door","Christian teaching — resurrection, heaven, hell","Islamic teaching — barzakh, resurrection, paradise","The ancestors in the tradition","Liberian funeral practices — dignity and moderation","Living in the light of eternity"],
  terms:[
    {t:"death", d:"the separation of the soul from the body at the end of this life", x:"Every soul shall taste death."},
    {t:"resurrection", d:"the raising of the dead to life at the last day", x:"Christianity and Islam teach the resurrection."},
    {t:"judgment", d:"God's final accounting of every person's deeds", x:"After death, the judgment."},
    {t:"heaven", d:"the home of God and the blessed, in Christian teaching", x:"The Father's house has many rooms."},
    {t:"paradise", d:"the garden of reward in Islamic (and biblical) teaching", x:"Today you will be with Me in paradise."},
    {t:"Jannah", d:"the Islamic paradise, the garden of peace", x:"Gardens beneath which rivers flow."},
    {t:"Jahannam", d:"the Islamic hell, prepared for the stubborn in evil", x:"The fire is a warning, not a wish."},
    {t:"barzakh", d:"the intermediate state of the soul between death and resurrection in Islam", x:"The grave is the first stage."},
    {t:"ancestor", d:"a forebear who has died and is remembered and honoured in the tradition", x:"The living-dead counsel the living."},
    {t:"libation", d:"the pouring out of drink honouring the Creator and the ancestors", x:"The libation maintains the bond."},
    {t:"wake", d:"the night gathering before a Liberian burial", x:"The wake carried the testimonies."},
    {t:"janazah", d:"the Islamic burial prayer and rite", x:"The janazah is swift and simple."},
    {t:"bereaved", d:"those who have lost a loved one to death", x:"The bereaved need presence, not speeches."},
    {t:"eulogy", d:"spoken honour of the dead person's life", x:"The eulogy remembered her name."}
  ],
  facts:[
    {q:"Which two verses state that death comes to all?", a:"Hebrews 9:27 — appointed once to die; Qur'an 3:185 — every soul shall taste death."},
    {q:"What are the five points of Christian teaching on death and after?", a:"The body dies and the soul goes to God; judgment follows; heaven is the Father's house; hell is the far country from God; and the resurrection of the dead at the last day."},
    {q:"What is barzakh?", a:"The intermediate state of the soul between death and the Day of Resurrection in Islamic teaching — the grave as the first stage."},
    {q:"Which Qur'an verse says deeds are weighed to the atom?", a:"Qur'an 99:7-8 — an atom's weight of good and of evil shall be seen."},
    {q:"Who are the ancestors in African Traditional Religion?", a:"The living-dead — forebears who have passed through death and remain part of the community, honoured with remembrance and consulted through the elders."},
    {q:"Name three funeral practices in Liberia and their traditions of origin.", a:"The wake with songs and testimonies; the church service, or the janazah — the swift Islamic burial rite; the elder's libation and the traditional rites."},
    {q:"What two evaluations do the traditions make of funerals?", a:"Dignity — the dead honoured, the family supported, the body revered; and moderation — no family should be beggared by display beyond its means."},
    {q:"Which verse asks what it profits to gain the world and lose the soul?", a:"Mark 8:36."}
  ],
  tf:[
    {s:"Christianity teaches that the soul simply sleeps until the resurrection.", a:"false", why:"The soul goes to God — with Christ, as the thief was promised paradise that day (Luke 23:43); the body awaits the resurrection (1 Corinthians 15)."},
    {s:"Islam teaches a Day of Resurrection when all are raised for judgment.", a:"true", why:"The trumpet sounds, all are raised, and deeds are weighed and read from the record (Qur'an 99)."},
    {s:"African Traditional Religion treats death as the end of the person.", a:"false", why:"Death is a transition: the person joins the ancestors, the living-dead, who remain part of the community's life."},
    {s:"A costly funeral is the proof of love for the dead.", a:"false", why:"Love is proven by dignity and by the care of the widow and orphans after the guests depart; a family beggared by display is harmed, not honoured."},
    {s:"The traditions agree that this life should be lived in the light of the next.", a:"true", why:"Mark 8:36; Qur'an 35:37; the elders' question of the name that remains — eternity audits today."},
    {s:"At a graveside it is wise to explain the death as punishment for hidden sin.", a:"false", why:"The cruel doctrine was corrected by Jesus (John 9:3; Luke 13:3) and is doubly cruel at a graveside; comfort with honest hope, not invented explanations."}
  ],
  apply:[
    {q:"A classmate loses a younger brother suddenly. Write what you will do in the first week.", a:"Go early and stay quiet; carry food and sit; let them speak and weep without correction; help the practical things — notes, the younger children; speak the brother's name with honour; return in the following months when the crowd has gone."},
    {q:"A widow is being pressured to hold a burial \"bigger than the chief's\" though the family has nothing. Advise her.", a:"The traditions require dignity, not display: a simple, honourful burial with the community's help leaves the widow her house and her children's school fees — the elders will support moderation if asked, and the church and mosque can bear part of the cost."},
    {q:"Your friend asks whether his late father, a good man of another faith, can be with God. Answer honestly and humbly.", a:"Say what your tradition teaches about the mercy and justice of God, add that the traditions teach God judges justly and mercifully, and refuse to lock the door that God has not shown you locked — humility at a graveside is also doctrine."},
    {q:"Why does the Hadith counsel remembering death often? Does this make a person gloomy?", a:"It orders the day: the remembered death audits the deal, the grudge and the wasted hour — and hope, not gloom, is its fruit, for the counsellor remembers paradise too."},
    {q:"Explain the elders' saying that a person's name is their second body.", a:"That reputation and memory outlive the flesh: the name spoken with honor by the community is the person's continuing presence — which is why an honest life is the best funeral preparation."}
  ],
  sort:{ title:"Death and the hereafter", groups:[
    {name:"Christian teachings", items:["Resurrection of the dead","The Father's house","The far country","Judgment of deeds done in the body"]},
    {name:"Islamic teachings", items:["Barzakh — the first stage","The Day of Resurrection","The weighing of deeds","Jannah, the garden of peace"]},
    {name:"Traditional teachings", items:["Death as transition","The living-dead","The escorting funeral","The libation of remembrance"]},
    {name:"Comfort of the bereaved", items:["Early, quiet presence","No invented explanations","Practical help after the crowd","Speaking the name with honor"]}
  ]},
  compare:{ title:"The three traditions on the last things", caption:"Complete the table comparing each tradition's teaching.",
    items:[
      {p:"At death", f:"The soul to God, the body to the grave (Christianity); the soul taken to the grave's first stage (Islam); the person joins the ancestors (tradition)."},
      {p:"Judgment", f:"The deeds done in the body judged (2 Corinthians 5:10); the record and the scales (Qur'an 99); the accounting before the Creator and the community's memory of the name."},
      {p:"The blessed state", f:"Heaven, the Father's house (John 14); Jannah, the garden beneath which rivers flow; the honoured rest of the ancestor among the living-dead."},
      {p:"The warned state", f:"Hell, the far country from God (Luke 16); Jahannam for the stubborn in evil; the unremembered, unmourned end the elders grieve."},
      {p:"The practical point", f:"Live this life in the light of the next — Mark 8:36; Qur'an 35:37; the name as the second body."},
      {p:"The shared comfort", f:"Death is not the end, the Judge is merciful as well as just, and the community carries the bereaved."}
    ]},
  casestudy:{ title:"The two funerals of Old Man Kpana",
    text:"Old Man Kpana of a River Cess town had been a teacher, a church elder and, in his youth, the keeper of the town's oldest drum. When he died at eighty-four, the family met a pressure every Liberian family knows: borrow for a grand funeral — imported cloth, a marquee, three days of cooking for hundreds — or bury him with dignity within the family's means. His widow, Momaweh, asked for the exercise book in which the old man had written his wishes. It said: \"Bury me as I lived, within my means. Let the church sing, let the drum I kept be played once, let no one borrow one dollar in my name. What you would spend on display, put on my grandchildren's school fees, and visit their mother every Christmas.\" The family obeyed him. The funeral was simple and full — the hymns, the one drum, the whole town walking to the burying ground. The money saved sent two grandchildren through school. Years later, people still quoted the exercise book, and no one could remember a single thing the marquee would have added.",
    questions:[
      {q:"What two evaluations of funerals does the exercise book keep together?", a:"Dignity — the singing, the drum, the town walking; and moderation — no borrowed dollar, the school fees instead of the marquee."},
      {q:"Why was the widow wise to ask for the written wishes?", a:"It moved the decision from the pressure of the moment to the settled judgment of the dead — the family could face the town with his own word, not their economy."},
      {q:"What does the story teach about the name as the second body?", a:"Old Man Kpana's name grew after death because of the grandchildren schooled and the word quoted — the second body was built by the money the marquee never ate."},
      {q:"How would each tradition judge the choice?", a:"Christian teaching honours the widow and orphans over display; Islamic burial is by design swift and simple; the tradition's own elders counsel that the feast is for the living, while the dead need the name kept."}
    ]},
  project:{ title:"Wills, wishes and wisdom",
    brief:"Learn how families prepare for death wisely, and write a model statement of wishes.",
    steps:["Interview an elder (with a parent's arrangement) on how funerals were planned in their youth and now.","List the parts of a dignified, moderate funeral and their rough costs.","Study what the church, the mosque and the tradition each require at a burial.","Draft a one-page model \"statement of wishes\" for a person of any tradition: the rites, the limits of spending, the care of the dependants.","Present it, and discuss why writing wishes down is an act of love."],
    criteria:["Elder interview respectfully conducted","Costs realistically listed","The three traditions' requirements accurately stated","The model statement clear and usable","A thoughtful discussion of why it is written down"]},
  activities:["Learn Psalm 23 and Qur'an 3:185 by heart","Compare the order of a church funeral, a janazah and a traditional rite in a table","Practise writing a comfort letter and read it aloud — honest, hopeful, practical","Discuss: why do the bereaved need the name of the dead spoken?"],
  materials:["The Holy Bible — Psalm 90:12; John 14:1-3; Luke 16:19-31; 23:43; 1 Corinthians 15; Revelation 21:1-4","The Holy Qur'an — 3:185; 35:37; 99","Elders of the church, mosque and town","An exercise book for the model statement"],
  assessment:["Model statement project","Recitation","Comparison table","Comfort letter","Written tests"]
},

{
  grade:11, period:"VI", sem:"Two", icon:"🔬",
  title:"Science, Technology and Religious Faith",
  subtitle:"Faith and science, medicine and ethics, and the moral life in the age of the phone",
  outcomes:["Learners understand that faith and science ask different questions and need not be enemies, that medicine and technology are God's gifts to be used responsibly, and that the digital age carries moral duties — honesty, purity, balance and care for others."],
  objectives:[
    "Explain the difference between the questions of science and the questions of religion",
    "Show from the traditions that studying creation is a religious act",
    "Discuss medicine and medical ethics with the principle of love of neighbour",
    "State the moral dangers of the digital age and the traditions' guard-rails",
    "Draw up a personal rule of digital conduct"
  ],
  note:"<b>Science asks how; religion asks why and for what</b>. The scientist and the believer need not be enemies: the Qur'an calls the heavens and the earth <b>signs</b> for those of understanding (Qur'an 3:190-191), the Psalmist says the heavens <b>declare</b> God's glory (Psalm 19:1), and the elders read the bush and the bird as teaching. Medicine is God's gift — the clinic and the prayer belong together. The phone and the internet are likewise gifts with edges: honesty, purity, balance and the protection of others are the believer's guard-rails online.",
  study:[
    {k:"h3", t:"Two Questions, One World"},
    {k:"p", t:"Science asks **how** the world works — and answers with mechanisms, tested by experiment. Religion asks **why** there is a world at all, what it means, and how we ought to live in it — and answers with faith, tested by obedience. A mechanism and a meaning are not rivals: the rain's physics and the rain's Giver are two sentences about one shower. The believer scientist studies creation as a person studies a letter — its paper and its words."},
    {k:"bul", items:[
      "\"The heavens declare the glory of God\" (Psalm 19:1)",
      "\"In the creation of the heavens and the earth and the alternation of night and day are signs for people of understanding, who remember God... \" (Qur'an 3:190-191)",
      "The elders' school of the bush: the bird's nesting season, the river's rule, the farm's fallow year — all read as teaching"
    ]},
    {k:"p", t:"On the reading of Genesis, Christians hold various faithful views — the six days read as days, as ages, or as a liturgical framework — and the Church has long taught that the Bible teaches **who** created and **why**, leaving the **how** to be studied in God's book of works. Humility belongs to both sides: the scientist who says \"there is no Giver\" has left science for philosophy, and the believer who fears the telescope has forgotten who made what it sees."},
    {k:"rule"},
    {k:"h3", t:"Medicine — God's Gift and Neighbour's Need"},
    {k:"p", t:"The traditions honour healing: Christ healed the sick; the Prophet taught care of the body and set up treatment; the healer's herbs were the ancestors' pharmacy. From this follow the principles of medical ethics the traditions share:"},
    {k:"num", items:[
      "**Life is God's** — to be protected from conception to the grave; no tradition licenses the destruction of the innocent",
      "**Love of neighbour** — the sick are owed care regardless of purse, tribe or creed",
      "**The body is a trust** — treatment is received thankfully: the drug taken as prescribed, the clinic visited early, vaccination welcomed as protection of the body and the neighbour's children alike",
      "**Truthfulness** — the patient deserves honest counsel; the healer and the doctor are both bound by it"
    ]},
    {k:"p", t:"Where believers differ — on a procedure, a treatment, an organ donation — the governing questions remain: does it honour life, does it love the neighbour, is it honest? The young believer should learn to ask these questions with a parent, an elder and a clinician rather than from a rumour."},
    {k:"rule"},
    {k:"h3", t:"The Phone — a Servant with Edges"},
    {k:"p", t:"The phone in a Liberian pocket carries a library, a market, a bank, a choir and a trap. Its gifts: learning at any hour, family across distance, honest trade, the gospel and the Qur'an recited in any place. Its dangers are equally real:"},
    {k:"bul", items:[
      "**Dishonesty** — the scam message, the false identity, the fake invoice; \"you shall not bear false witness\" (Exodus 20:16) applies to the forwarded claim; \"if a wicked person brings you news, verify it\" (Qur'an 49:6)",
      "**Impurity** — the screen serves lust on request; the traditions guard the eyes and the heart (Matthew 5:28; Qur'an 24:30 — \"tell the believing men to lower their gaze\")",
      "**Addiction and waste** — hours and data swallowed; the steward's question — what did the night of scrolling produce?",
      "**Cruelty** — cyberbullying, the mocked picture, the rumour started in a group chat; the tongue's fire is now a thumb's (James 3:5-6)",
      "**Examination malpractice** — the leaked paper forwarded; the same theft and false witness as on paper",
      "**The stranger's danger** — the child lured, the girl deceived; parents' oversight is part of the command to train up a child"
    ]},
    {k:"rule"},
    {k:"h3", t:"Guard-rails for the Digital Age"},
    {k:"num", items:[
      "Verify before forwarding — the untrue claim is false witness even if you only pressed share",
      "Guard the eyes — choose what you will not open, before you must choose",
      "Set times — the phone serves the day, the prayer and the family; it does not replace them",
      "Speak online as you would at the palaver — no mocking, no rumour, no cruelty",
      "Protect the young — a child's phone is used under the parents' eye",
      "Ask of every screen-hour: did it serve God, my neighbour, or only my appetite?"
    ]},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:[
      "Write the two questions — science's and religion's — with one example of each from a rain shower.",
      "Quote one Bible and one Qur'an reference that call creation a sign.",
      "List the four shared principles of medical ethics and give one practice of each.",
      "Name the six dangers of the digital age and one guard-rail against each.",
      "Keep a one-week media diary: hours, uses, honest accounting — and write the rule you will keep from it."
    ]}
  ],
  focus:["Science's how and religion's why","Creation as a sign to be studied","Medicine as God's gift — shared ethics","The phone's gifts and dangers","Guard-rails for the digital age","Stewardship of time and eyes"],
  terms:[
    {t:"science", d:"the tested study of how the natural world works", x:"Science reads the letter's paper."},
    {t:"faith", d:"trust in God and His word", x:"Faith reads the letter's words."},
    {t:"sign", d:"a created thing that points to God (ayat)", x:"The heavens and the earth are signs."},
    {t:"mechanism", d:"the way a thing works", x:"The rain's mechanism is not its meaning."},
    {t:"medical ethics", d:"the moral principles governing care of the sick", x:"Love of neighbour governs the clinic."},
    {t:"vaccination", d:"the protection given the body against disease", x:"Vaccination protects the neighbour's children too."},
    {t:"adherence", d:"taking treatment exactly as prescribed", x:"Adherence is part of faith in treatment."},
    {t:"digital age", d:"the era of phones, networks and screens", x:"The digital age has its own morals."},
    {t:"cyberbullying", d:"cruelty carried out online", x:"Cyberbullying is the tongue's fire by thumb."},
    {t:"scam", d:"a dishonest scheme to take what is another's", x:"The scam message is theft's envelope."},
    {t:"verify", d:"check the truth before passing on a claim", x:"Verify before you forward."},
    {t:"stewardship", d:"the faithful management of what God gives — time, body, tools", x:"The screen-hour is a trust."}
  ],
  facts:[
    {q:"What question does science ask, and what question does religion ask?", a:"Science asks how the world works; religion asks why there is a world and how we ought to live in it."},
    {q:"Quote one Bible and one Qur'an reference calling creation a sign.", a:"Psalm 19:1 — the heavens declare the glory of God; Qur'an 3:190 — in the creation of the heavens and the earth are signs for people of understanding."},
    {q:"Why is the believer scientist not a contradiction?", a:"Because studying the works of God is itself a religious act — the sign is read, not denied; the paper of the letter and its words are studied by the same reverent mind."},
    {q:"Name the four shared principles of medical ethics.", a:"Life is God's; the sick are owed love of neighbour's care; the body is a trust, so treatment is received thankfully and adhered to; and truthfulness to the patient."},
    {q:"Which verse commands verifying news?", a:"Qur'an 49:6 — if a wicked person brings you news, verify it, lest you harm a people in ignorance."},
    {q:"What does \"lower the gaze\" teach for the digital age?", a:"Qur'an 24:30's guard of the eyes extends to the screen: the believer chooses what will not be opened before the choice is forced."},
    {q:"Name three gifts and three dangers of the phone.", a:"Gifts — learning at any hour, family across distance, honest trade and worship; dangers — dishonesty and scams, impurity, addiction, cruelty and exam malpractice."},
    {q:"What is the steward's question for every screen-hour?", a:"Did it serve God, my neighbour, or only my appetite?"}
  ],
  tf:[
    {s:"Science has disproved religion.", a:"false", why:"Science answers how; religion answers why and how to live; the mechanisms of the world do not decide whether it has a Maker — that claim leaves science for philosophy."},
    {s:"All Christians must read the six days of Genesis as six twenty-four-hour days.", a:"false", why:"Faithful believers read the days in more than one way; the Bible's chief teaching is who created and why, and believers treat each other's readings with charity."},
    {s:"Taking medicine shows a lack of faith in God.", a:"false", why:"The traditions teach that medicine is God's gift; the Hadith's counsel to tie the camel and trust God holds treatment and trust together."},
    {s:"A forwarded untrue claim is harmless because you only pressed share.", a:"false", why:"It is false witness at the speed of light (Exodus 20:16; Qur'an 49:6) and can injure a person's name before the truth wakes up."},
    {s:"The traditions have nothing to say about time spent online.", a:"false", why:"Stewardship covers time and the eyes: the screen-hour is a trust, and the prayer, the family and the study are its first claimants."},
    {s:"A child's phone should be used under the parents' eye.", a:"true", why:"Training up a child (Proverbs 22:6) includes the digital road; the lures of the stranger are older than the phone."}
  ],
  apply:[
    {q:"A forwarded voice note claims a clinic's vaccines are designed to harm. What do you do?", a:"Do not forward; verify with the clinic, the county health team or a trusted clinician; correct the record quietly where you heard it — the false claim endangers the neighbour's children (Qur'an 49:6)."},
    {q:"Your evening disappears into scrolling and your morning devotion has thinned. Apply the guard-rails.", a:"Set the phone's hours and keep them; put the devotion first in the day; ask the steward's question weekly; and give the freed hour to family, study or service."},
    {q:"A classmate is being mocked in a group chat over a picture taken without her consent. Act.", a:"Name it as the tongue's fire (James 3:5-6) and cruelty, not joking; refuse to react or forward; message her support privately; tell a teacher and have the picture removed and the group addressed."},
    {q:"A friend is offered money to sit an examination for another person using a forged identity. Counsel him.", a:"It is theft, false witness and fraud in one act — a certificate built on a lie collapses on its holder; the traditions and the law both refuse it, and so should he."},
    {q:"Your grandmother believes hospitals are for the faithless. How do you counsel her with respect?", a:"Join her faith — pray with her and for the clinic's hands; teach that healing knowledge is God's gift and the healer's herbs were the ancestors' own medicine; offer to accompany her, and let her own elder or pastor confirm the counsel."}
  ],
  sort:{ title:"Faith in the age of the screen", groups:[
    {name:"Science and faith together", items:["Creation as sign","Studying the works of God","Medicine as gift","The two questions kept apart"]},
    {name:"The phone's gifts", items:["Learning at any hour","Family across distance","Honest trade","Worship anywhere"]},
    {name:"The phone's dangers", items:["Scams and false claims","Impurity","Addiction and waste","Cyberbullying and exam malpractice"]},
    {name:"Guard-rails", items:["Verify before forwarding","Guard the eyes","Set times","Protect the young"]}
  ]},
  compare:{ title:"What the traditions bring to science and technology", caption:"Complete the table of each tradition's contribution.",
    items:[
      {p:"Creation", f:"The heavens declare (Psalm 19); the signs for people of understanding (Qur'an 3:190); the bush and the bird as the elders' school."},
      {p:"Healing", f:"Christ the healer; the Prophet's care of the body and treatment; the healer's herbs — one ministry with the clinic."},
      {p:"Truthfulness", f:"No false witness — offline or online; verify the news (Qur'an 49:6); the elders' word tested by its source."},
      {p:"Purity", f:"The guarded heart (Matthew 5:28); the lowered gaze (Qur'an 24:30); the tradition's modesty of eye and dress."},
      {p:"Stewardship", f:"The screen-hour, the data bundle and the body are trusts — accounted for like the talents."},
      {p:"Protection of the young", f:"Train up the child (Proverbs 22:6); the guardian's duty; the community's eye — the digital road is watched like the road to the river."}
    ]},
  casestudy:{ title:"The voice note at the clinic",
    text:"During an immunisation drive in a Montserrado district, a voice note spread from phone to phone: the vaccine, a voice claimed, was designed to make children sick, and a certain clinic was paid per child. At the clinic gate the next morning, the nurses found the queue gone. A teacher whose own children had been immunised asked the county health team for the facts, then did two things. She recorded a short reply with the clinic's senior nurse stating the vaccine's record and naming the diseases it prevented — and she took it first to the imam of the district's mosque and the pastor of its largest church, who each endorsed it from their own phones. By week's end the queue had returned, led by members of the two congregations. Later a radio presenter asked the teacher whether she had been angry at the rumour. She said, \"Anger forwards itself. Verification is slower, so it needs the rest of us to carry it.\"",
    questions:[
      {q:"What did the voice note get right about people, and wrong about facts?", a:"Right — people love their children and fear for them; wrong — the vaccine's tested record and the clinic's motive; a lie rides a true love to a false destination."},
      {q:"Why did the teacher take her recording to the imam and the pastor first?", a:"Because trusted voices carry further than correct ones: the congregations' trust in their leaders carried the verified fact through the same networks the rumour had used."},
      {q:"Explain the teacher's last sentence.", a:"Rumour is fast because anger forwards itself; verification is slow and needs deliberate bearers — the community must organise truth the way lies organise themselves."},
      {q:"What guard-rails of this unit did the district practise?", a:"Verification before forwarding; respected leadership applied to the digital road; and the protection of the young as the first claim."}
    ]},
  project:{ title:"The media diary and the rule",
    brief:"Track your own media use honestly and draw up your rule of digital conduct.",
    steps:["For one week, record daily: hours online, the main uses, and one honest accounting of waste.","Count the claims you forwarded and mark which you verified first.","Name your three commonest digital temptations from the diary.","Draw up a personal rule of digital conduct — at most six rules — from the unit's guard-rails.","Sign it, keep it where you will see it, and report after two weeks on keeping it."],
    criteria:["Seven honest daily entries","Forwards counted and marked","Three temptations named","Six rules drawn from the teaching","A two-week report on keeping the rule"]},
  activities:["Verify one circulating claim with a teacher or clinician and report the finding","Debate: does the phone do Liberia more good than harm? Argue from evidence, not feeling","Draft a family media agreement for a home with three children of different ages","Visit or interview a nurse on vaccination and treatment adherence"],
  materials:["The Holy Bible — Psalm 19:1; Exodus 20:16; Matthew 5:27-28; 1 Corinthians 6:19-20","The Holy Qur'an — 3:190-191; 24:30; 49:6","The county health team's materials","A notebook for the media diary"],
  assessment:["Media diary and rule","Verification exercise","Family media agreement","Interview report","Written tests"]
},

/* ================================ GRADE 12 ================================ */
{
  grade:12, period:"I", sem:"One", icon:"🌍",
  title:"Comparative Religion and Interfaith Dialogue",
  subtitle:"The three traditions of Liberia set side by side, and the discipline of talking across faiths with truth and respect",
  outcomes:["Learners can state accurately what Christianity, Islam and African Traditional Religion teach on God, humanity, worship and the hereafter, name both the shared ground and the real differences, and practise the disciplines of interfaith dialogue with conviction and respect."],
  objectives:[
    "Define comparative religion and interfaith dialogue",
    "Compare the three traditions on God, the sources of authority, worship, ethics and the afterlife",
    "Name the shared moral ground of the three traditions",
    "State the differences honestly and explain why pretending they do not exist is not respect",
    "Practise the disciplines of dialogue — and name what dialogue is not"
  ],
  note:"<b>Comparative religion</b> studies faiths on their own terms — as their own adherents state them. <b>Interfaith dialogue</b> is the disciplined conversation between faiths: talking <b>to understand</b>, not to win. It is not the pretence that all religions are the same (that flattens what each holds dear), and it is not abandoning one's own faith — it is obeying \"speak the truth in love\" (Ephesians 4:15) and \"invite to the way of your Lord with wisdom and beautiful preaching, and argue in the best manner\" (Qur'an 16:125).",
  study:[
    {k:"h3", t:"Comparing the Three Traditions"},
    {k:"table", head:["","Christianity","Islam","African Traditional Religion"], rows:[
      ["God","One God in three Persons — Father, Son and Holy Spirit","One God, absolutely one (Tawhid)","One Supreme Being, Creator above all spirits"],
      ["Key figures","Abraham, the prophets, Jesus Christ, the apostles","Abraham, the prophets, Muhammad the final messenger","The ancestors, the elders, the traditional priests"],
      ["Sources","The Holy Bible","The Holy Qur'an and the Hadith","The oral tradition — myths, proverbs, rites"],
      ["Worship","Prayer, the Word, baptism, the Lord's Supper","Salah, fasting, Hajj, the recitation","Libation, the festivals, the community rites"],
      ["Ethics","Love of God and neighbour; the Ten Commandments; the Sermon on the Mount","The five pillars and the shari'ah's moral law; mercy and justice","Respect for the Creator, the ancestors and the elders; communal duties and taboos"],
      ["After death","Judgment, heaven and hell, the resurrection","The grave, the Day of Resurrection, paradise and hell","The ancestors — the living-dead remembered and honoured"]
    ]},
    {k:"rule"},
    {k:"h3", t:"The Shared Ground"},
    {k:"p", t:"Beneath the differences lies wide shared ground, and the dialogue of Liberia's communities stands on it:"},
    {k:"bul", items:[
      "The **one Creator**, almighty, all-knowing, holy, merciful, the Judge of all",
      "**Prayer** — in all three, the believer speaks with God and listens",
      "**Honesty, justice, mercy, hospitality, faithfulness, respect for elders and parents** — the moral core all three command",
      "The **dignity of the person** and the **duty to the poor** — the widow and the orphan are the test in all three",
      "The **accountability of every soul** to God at the end"
    ]},
    {k:"rule"},
    {k:"h3", t:"The Real Differences"},
    {k:"p", t:"Respect does not hide differences; it states them fairly. The chief differences: the person of **Jesus Christ** — Christianity's Son of God and Saviour; Islam's honoured prophet, but not divine; and in the tradition, a great healer and teacher among the religions' guests. The **Trinity** and **Tawhid** — the deepest divergence of formulation. The **sources** — book against book against memory. The **ancestors** — the tradition's living-dead, whom Christianity and Islam remember but do not consult. Each community holds its differences dear; the rule of dialogue is to state the difference as the other community itself states it, and no further."},
    {k:"rule"},
    {k:"h3", t:"What Dialogue Is and Is Not"},
    {k:"bul", items:[
      "Dialogue **is** talking to understand — asking, listening, checking, thanking",
      "Dialogue **is** honest witness — a believer may say plainly what he believes and why, with courtesy",
      "Dialogue **is not** debate for victory — the aim is a true meeting, not a surrendered opponent",
      "Dialogue **is not** syncretism — blending the faiths into one grey mixture pleases no one and answers nothing",
      "Dialogue **is not** relativism — \"it is all the same\" insults every community that died for its difference",
      "Dialogue **is not** a plot — the interfaith table is not a trap for conversion but a table for truth, peace and shared work"
    ]},
    {k:"rule"},
    {k:"h3", t:"The Disciplines of Dialogue"},
    {k:"num", items:[
      "**Represent truly** — state the other's faith as its own people state it; never the parody",
      "**Listen fully** — to the end, without preparing the rebuttal while the other speaks",
      "**Ask, don't accuse** — \"help me understand how your community reads this\" opens what an accusation closes",
      "**Own your own** — confess your own community's failures where they are real; it earns the right to ask questions",
      "**Find the shared work** — the clinic, the school, the clean-up, the peace; doctrine is discussed best side by side with service",
      "**Keep the relationship** — the dialogue partner of today is the neighbour of tomorrow; win the person, not the argument"
    ]},
    {k:"rule"},
    {k:"h3", t:"Liberia's Table"},
    {k:"p", t:"Liberia's own history holds the proof: the churches, the mosques and the keepers of tradition have shared this land for generations — marrying across lines in some counties, trading, farming, mourning and celebrating together. The Inter-Religious Council of Liberia, in which Christian and Muslim leaders speak with one voice, has carried the nation's weight in its worst hours. Dialogue is not a foreign idea imported to Liberia; it is Liberia's own practice, raised to a discipline."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:[
      "Complete the comparison table of the three traditions from memory.",
      "List five points of shared ground and one reference for each from two traditions.",
      "State the chief differences between the traditions fairly, as each community itself states them.",
      "Write the six disciplines of dialogue in your own words.",
      "Arrange (with your teacher) a three-way classroom dialogue on \"What my faith teaches about mercy\" — each side represented by its own members — and write what you learned from the other sides."
    ]}
  ],
  focus:["Comparative religion — faiths on their own terms","The comparison table of the three traditions","The shared moral ground","The real differences, stated fairly","What dialogue is and is not","The disciplines of dialogue"],
  terms:[
    {t:"comparative religion", d:"the study of faiths on their own terms", x:"Comparative religion listens before it compares."},
    {t:"interfaith dialogue", d:"the disciplined conversation between religious communities", x:"Dialogue talks to understand, not to win."},
    {t:"adherent", d:"a member, a believer of a faith", x:"Ask the adherent, not the rumour."},
    {t:"syncretism", d:"the blending of faiths into a mixture none of them owns", x:"Syncretism pleases no one and answers nothing."},
    {t:"relativism", d:"the claim that all beliefs are equally true — or equally empty", x:"Relativism insults every conviction."},
    {t:"witness", d:"the honest telling of what one believes and why", x:"Witness is allowed its courtesy."},
    {t:"Trinity", d:"the Christian teaching of one God in three Persons", x:"The Trinity is stated as Christians state it."},
    {t:"Tawhid", d:"the Islamic teaching of the absolute oneness of God", x:"Tawhid is Islam's first word."},
    {t:"shari'ah", d:"the Islamic way of life ordered by God's guidance", x:"The shari'ah orders life and worship."},
    {t:"parody", d:"a mocking or distorted representation", x:"No faith is judged by its parody."},
    {t:"shared ground", d:"the beliefs and duties the traditions hold in common", x:"The shared ground carries the table."},
    {t:"courtesy", d:"the manner of honour owed to persons", x:"Courtesy is truth's clothing."}
  ],
  facts:[
    {q:"Define comparative religion and interfaith dialogue.", a:"Comparative religion is the study of faiths on their own terms; interfaith dialogue is the disciplined conversation between faiths — talking to understand, not to win."},
    {q:"How does each tradition name the one God?", a:"Christianity — one God in three Persons; Islam — the absolutely one God (Tawhid); the tradition — the Supreme Being above all spirits."},
    {q:"Name the sources of authority in each tradition.", a:"The Holy Bible; the Holy Qur'an with the Hadith; the oral tradition of myths, proverbs and rites kept by the elders."},
    {q:"List five points of shared moral ground.", a:"The one Creator; prayer; honesty, justice and mercy; the dignity of the person and the duty to the poor; the accountability of every soul to God."},
    {q:"State the deepest formulation-level difference between Christianity and Islam.", a:"The Trinity and Tawhid — Christianity's one God in three Persons, and Islam's absolute oneness of God; each holds its formulation as essential truth."},
    {q:"What does Ephesians 4:15 and Qur'an 16:125 together teach about dialogue?", a:"To speak the truth in love, and to invite to the way of God with wisdom and beautiful preaching, arguing in the best manner — conviction with courtesy."},
    {q:"Name three things dialogue is not.", a:"Debate for victory; syncretism (blending the faiths); relativism (pretending all is the same) — and not a plot for conversion either."},
    {q:"What is the Inter-Religious Council of Liberia?", a:"The body in which Liberia's Christian and Muslim leaders speak with one voice, which has carried the nation's weight in its hardest hours."}
  ],
  tf:[
    {s:"Comparative religion judges each faith by its worst impostor.", a:"false", why:"It studies each faith on its own terms, as its adherents state it; the impostor is not the representative."},
    {s:"The three traditions share a wide moral core.", a:"true", why:"Honesty, justice, mercy, hospitality, the duty to the poor and accountability to God are commanded in all three."},
    {s:"True dialogue requires abandoning one's own convictions.", a:"false", why:"Dialogue is honest witness with courtesy — \"speak the truth in love\"; the believer who believes nothing has nothing to bring to the table."},
    {s:"Pretending all religions are the same is the highest respect.", a:"false", why:"It flattens what each community holds dear and has suffered for; respect states the differences fairly, as each community states them."},
    {s:"Service together is a sound setting for dialogue.", a:"true", why:"Doctrine is discussed best side by side with the clinic, the school and the clean-up — shared work tests the words."},
    {s:"Interfaith cooperation has a real history in Liberia.", a:"true", why:"Churches, mosques and keepers of tradition have shared the land for generations, and the Inter-Religious Council has spoken with one voice in the nation's worst hours."}
  ],
  apply:[
    {q:"A friend says Islam has no place for Jesus. Correct the record accurately.", a:"Islam honours Jesus (Isa) as one of the greatest prophets, born of the Virgin Mary, a healer and a messenger — while not confessing His divinity; the correction respects both what Islam holds and where it differs from Christianity."},
    {q:"You are asked to present the tradition's teaching on the ancestors to a church youth group. What are your rules?", a:"Represent truly — the living-dead as the elders themselves speak of them; own the difference honestly (remembrance in Christianity, consultation in the tradition); take questions with courtesy; and let an elder check your summary if possible."},
    {q:"A dialogue partner states your own faith wrongly. What do you do?", a:"Correct it gently and exactly — \"my community would say it this way\" — and thank him for the openness that allowed the correction; the same right belongs to him."},
    {q:"Your class wants to stage a debate: \"Which religion is true?\" Reframe it for dialogue.", a:"Replace the winner-take-all debate with a structured dialogue: each side presents its own teaching on a chosen theme (mercy, judgment, the poor), others ask questions to understand, and the class records the shared ground and real differences — winning is understanding."},
    {q:"Plan one shared service project for the three communities of your quarter.", a:"For example: a joint cleaning and small-repair day at the county clinic — church youth, mosque youth and the elders' children together, with each community blessing the work in its own way at the start."}
  ],
  sort:{ title:"The dialogue table", groups:[
    {name:"The three traditions", items:["Christianity","Islam","African Traditional Religion"]},
    {name:"Shared ground", items:["The one Creator","Prayer","The moral core","Accountability of the soul"]},
    {name:"Real differences", items:["Trinity and Tawhid","The sources","The place of the ancestors","The person of Christ"]},
    {name:"Disciplines of dialogue", items:["Represent truly","Listen fully","Own your own failures","Keep the relationship"]}
  ]},
  compare:{ title:"One question, three answers", caption:"Complete the table of how each tradition answers the dialogue's four great questions.",
    items:[
      {p:"Who is God?", f:"The Trinity — Father, Son and Holy Spirit; the absolute One of Tawhid; the Supreme Being above the spirits."},
      {p:"How is He known?", f:"In His Son and His word, the Bible; in His final book, the Qur'an; in the memory of the elders and the words of the ancestors."},
      {p:"How is He served?", f:"Faith, sacraments and love of neighbour; the pillars, the law and mercy; the rites, the taboos and the communal duty."},
      {p:"What waits at the end?", f:"Judgment, heaven and hell, resurrection; the grave, the scales, paradise; the honoured rest among the living-dead."},
      {p:"Where they meet", f:"One Creator, one moral core, one final accounting — wide ground for standing together."},
      {p:"Where they differ", f:"Formulation and source — the differences each holds dear; the table holds them honestly without pretending them away."}
    ]},
  casestudy:{ title:"The question that made the room quiet",
    text:"At a senior-high interfaith forum in Monrovia, a Christian student asked the Muslim panel a hard question: \"Why does your book say one thing about Jesus while mine says another?\" The room went tight. The young imam answering did not defend or deflect. He said, \"That is a real difference, and I will not make it small. We honour Jesus as a great prophet, born of the Virgin Mary. We do not confess Him as God. You do. That difference is old, and it will not be solved at this table — and the Qur'an also tells me to argue in the best manner and to speak to your people kindly. So here is what I propose: let us both be commanded by what our books agree on — that God is one, that the poor must be fed, and that we will each answer for our own souls — and let us compete in that.\" The Christian student stood and said, \"On that, my Lord agrees with your book.\" The forum ended with the two schools planning a joint feeding of a displaced families' centre that Christmas.",
    questions:[
      {q:"What did the imam refuse to do, and why was that the strongest answer?", a:"He refused to shrink the difference or win the point; honesty about the real difference made his offer of the shared ground credible — trust follows truth."},
      {q:"Explain his phrase \"let us compete in that\".", a:"A play on the Qur'an's call to vie with one another in good works (2:148): let the faiths compete in mercy and service rather than in argument — the competition everyone wins."},
      {q:"What did the Christian student's answer concede, and what did it claim?", a:"It conceded the shared commands — one God, the fed poor, the accountable soul — while holding his own confession; that is dialogue's double honesty."},
      {q:"Why did the forum end in a feeding project rather than a resolution?", a:"Because the shared ground was made visible in shared work; understanding was gained where agreement was not — the realistic and fruitful end of dialogue."}
    ]},
  project:{ title:"A three-way presentation",
    brief:"Prepare, with classmates of other traditions, an accurate three-way presentation on one theme.",
    steps:["Choose a theme: mercy, the poor, judgment, or the duty to parents.","Form three groups, each containing only members of the tradition it presents (or researchers who consult that community directly).","Each group prepares five minutes: what my tradition teaches, with its own references, checked by an elder or leader of that community.","Hold the forum: presentation, questions to understand, no scoring.","Write the report: the shared ground found, the differences stated, the one thing learned from another tradition."],
    criteria:["Each tradition presented by its own or directly advised by its own","References accurate and checked by that community's leader","Questions aimed at understanding, not trapping","The report names shared ground and real differences","One honest thing learned from another tradition"]},
  activities:["Complete the comparison table from memory","Role-play a dialogue with the six disciplines, then break them and discuss what broke","Invite a pastor, an imam and an elder to one class forum on one theme","Draft the class's own rules for talking about religion respectfully"],
  materials:["The Holy Bible — Ephesians 4:15; Matthew 22:37-40","The Holy Qur'an — 16:125; 109:6; 2:148","Elders and leaders of the three communities","The Inter-Religious Council's public statements, where available"],
  assessment:["Three-way forum","Comparison table from memory","Dialogue role-play","Report","Written tests"]
},

{
  grade:12, period:"II", sem:"One", icon:"🕊️",
  title:"Religion and Peacebuilding",
  subtitle:"Forgiveness, reconciliation and the role of the faith communities in Liberia's conflict and healing",
  outcomes:["Learners understand peace as a religious obligation, know the teaching on forgiveness and reconciliation at community and national level, know honestly how Liberia's faith communities carried the nation's weight during the civil conflict, and can practise the skills of a peacemaker."],
  objectives:[
    "State the teaching of the three traditions on peace and peacemaking",
    "Explain forgiveness — its command, its difficulty and its relation to justice",
    "Recount honestly the role of the faith communities in Liberia's conflict and peace",
    "Describe trauma and the long work of healing after war",
    "Practise the peacemaker's skills — listening, mediation, and refusing hate speech"
  ],
  note:"<b>Peace is not the absence of noise but the presence of justice</b>: \"blessed are the peacemakers, for they shall be called children of God\" (Matthew 5:9); \"make peace between your brothers\" (Qur'an 49:10); the elders' palaver makes peace by seating every voice. <b>Forgiveness</b> is commanded — seventy times seven (Matthew 18:21-22) — but it is not pretending evil never happened; it is releasing the debt so that <b>justice and mercy</b> can together open the future. Liberia's own story — the Inter-Religious Council, the women's mass action of Christian and Muslim women, the years of truth-telling — is the senior-high classroom's greatest case study.",
  study:[
    {k:"h3", t:"Peace — the Traditions' Word"},
    {k:"bul", items:[
      "**Christianity** — Christ is the Prince of Peace (Isaiah 9:6); He makes peace by the cross (Ephesians 2:14-16); His people are commanded: \"pursue peace with all men\" (Hebrews 12:14)",
      "**Islam** — one of God's beautiful names is As-Salam, the Source of Peace; the greeting of every meeting is salaam; \"the believers are brothers, so make peace between your brothers\" (Qur'an 49:10); paradise is Dar as-Salam, the home of peace",
      "**The tradition** — the palaver sits until the case is settled, because an unsettled case is a loaded gun; the elders say the town that will not listen to the palaver will listen to the gun"
    ]},
    {k:"rule"},
    {k:"h3", t:"Conflict — the Fire and Its Fuel"},
    {k:"p", t:"The fuels of conflict the traditions name: greed for land, power and resources; injustice and the grievance it leaves; tribalism and the lie of ethnic superiority; revenge and the debts it inherits; poverty and idleness; and leaders who profit from division. Where the fuels are not drained, the ceasefire is only the pause between fires — which is why peacebuilding works at causes, not only at guns."},
    {k:"rule"},
    {k:"h3", t:"Forgiveness — the Hard Command"},
    {k:"p", t:"Peter asked how many times he must forgive — seven? Jesus answered, **seventy times seven** (Matthew 18:21-22): forgiveness is a way of life, not a loan. The Qur'an sets it higher still: \"the recompense of an evil is its like, but whoever pardons and makes reconciliation, his reward is with Allah\" (Qur'an 42:40); \"repel evil with what is better, and your enemy will become as a devoted friend\" (Qur'an 41:34). The tradition's reconciliation rites seat the parties, name the wrong, pay what can be paid, and restore the relationship to the community."},
    {k:"p", t:"What forgiveness is **not**: it is not pretending the wrong never happened; it is not abandoning justice (the killer still answers to the law); it is not reconciliation forced on the weaker party; and it is not re-traumatising the victim with demands to \"forget\". Forgiveness releases the victim from the debt's grip; justice orders the wrong; reconciliation — where possible — restores the future."},
    {k:"rule"},
    {k:"h3", t:"Liberia's Story — the Faith Communities in Conflict and Peace"},
    {k:"p", t:"The civil conflict (1989–2003) tested everything this subject teaches. It must be told honestly: some religious people failed — some pulpits fell silent, some hands joined the wrong. But the weight of the nation's rescue was carried in great part by its religious communities:"},
    {k:"bul", items:[
      "The **Inter-Religious Council of Liberia** — Christian and Muslim leaders speaking with one voice, mediating between the warring parties and the international community at the hardest turns",
      "The **Women's Mass Action for Peace** — Christian and Muslim women praying and fasting together, dressed in white, sitting at the peace talks in Accra until the men signed; the movement's leadership was recognised with the 2011 Nobel Peace Prize",
      "The **churches and mosques** that sheltered the displaced, buried the dead, and kept schools and prayers alive under fire",
      "The **tradition's elders** who reopened the palaver in towns where the courts could not reach, and cleansed the land's cases in the old rites where both parties accepted them",
      "The **Truth and Reconciliation Commission (2006–2009)** — the national palaver of testimony, where truth-telling was reckoned a stage of healing"
    ]},
    {k:"rule"},
    {k:"h3", t:"Trauma and the Long Work of Healing"},
    {k:"p", t:"War's wounds outlive the guns: nightmares, anger, mistrust, the silent home. The healing work is long — listening to survivors with patience; counselling, and the courage to seek it; the church's and mosque's fellowship of the broken; confession and truth-telling; and the slow rebuilding of livelihoods, which gives the hands something other than grief to hold. The peacemaker does not rush the wounded; he sits with them, as Job's friends first sat — seven days, and no speeches (Job 2:13)."},
    {k:"rule"},
    {k:"h3", t:"The Peacemaker's Skills"},
    {k:"num", items:[
      "**Listen to the end** — most conflict escalates because no one was heard",
      "**Cool the words** — refuse hate speech, rumour and the mocking name; a war of words feeds the war of hands",
      "**Mediate, don't judge** — seat the parties, name the facts, seek the settlement, keep the relationship",
      "**Act early** — the small case settled today is the big case prevented next year",
      "**Work for justice** — peace without justice is a ceasefire of the mouth; drain the fuels",
      "**Stay in the room** — the peacemaker's chief weapon is presence that will not leave"
    ]},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:[
      "Give each tradition's chief teaching on peace with a reference.",
      "Explain what forgiveness is and is not, in four points.",
      "Write a half-page honest account of the faith communities' role in Liberia's conflict and peace.",
      "List the six peacemaker's skills and role-play two of them on a land dispute case.",
      "Interview (with arrangements) an elder who lived through the conflict about the palaver's work afterward; record one story of a settled case."
    ]}
  ],
  focus:["Peace as religious obligation","The fuels of conflict","Forgiveness — command, difficulty, relation to justice","Liberia's faith communities in war and peace","Trauma and the long healing","The peacemaker's skills"],
  terms:[
    {t:"peace", d:"the settled state of justice, trust and right relationship", x:"Peace is not the silence of the gun."},
    {t:"peacemaker", d:"one who works to make and keep peace", x:"Blessed are the peacemakers."},
    {t:"forgiveness", d:"releasing the debt of a wrong from the wrongdoer", x:"Forgiveness frees the victim first."},
    {t:"reconciliation", d:"the restoring of a broken relationship", x:"Reconciliation seats the parties again."},
    {t:"justice", d:"giving each their due", x:"Peace without justice is a ceasefire of the mouth."},
    {t:"mediation", d:"helping parties reach settlement through a neutral third person", x:"The mediator seats both sides."},
    {t:"grievance", d:"a wrong felt and carried, unresolved", x:"The ungathered grievance gathers armies."},
    {t:"hate speech", d:"speech that dehumanises a person or group", x:"Hate speech loads the hands."},
    {t:"trauma", d:"the deep wound of mind and spirit left by violence and loss", x:"Trauma outlives the guns."},
    {t:"truth-telling", d:"the public and honest naming of what happened", x:"Truth-telling is a stage of healing."},
    {t:"ceasefire", d:"the stopping of fighting, without yet the settling of causes", x:"A ceasefire is a pause, not a peace."},
    {t:"palaver", d:"the traditional sitting of counsel and settlement", x:"The palaver sat until the case was settled."}
  ],
  facts:[
    {q:"Give each tradition's chief teaching on peace with a reference.", a:"Christianity — blessed are the peacemakers (Matthew 5:9); Islam — make peace between your brothers (Qur'an 49:10); the tradition — the palaver that sits until the case is settled, lest the town listen to the gun."},
    {q:"What did Jesus answer when Peter asked how many times to forgive?", a:"Seventy times seven (Matthew 18:21-22) — forgiveness as a way of life, not a counted loan."},
    {q:"Which Qur'an verse promises that repaying evil with what is better turns an enemy into a friend?", a:"Qur'an 41:34 — repel evil with what is better, and your enemy will become as a devoted friend."},
    {q:"State four things forgiveness is not.", a:"Not pretending the wrong never happened; not abandoning justice; not forced on the weaker party; not a demand that the victim forget."},
    {q:"What was the Women's Mass Action for Peace?", a:"The movement of Christian and Muslim women, praying and fasting together in white, whose sitting at the Accra talks pressed the factions to the 2003 peace agreement; its leadership was recognised with the 2011 Nobel Peace Prize."},
    {q:"What was the Truth and Reconciliation Commission?", a:"The national truth-telling body (2006–2009) before which Liberians testified to what happened in the conflict — the nation's palaver of testimony."},
    {q:"Name four fuels of conflict.", a:"Greed for land, power and resources; injustice and grievance; tribalism and revenge; poverty, idleness and leaders who profit from division."},
    {q:"List the six peacemaker's skills.", a:"Listen to the end; cool the words; mediate, don't judge; act early; work for justice; stay in the room."}
  ],
  tf:[
    {s:"Peace means simply that no one is fighting today.", a:"false", why:"Peace is the settled state of justice and trust; a silence above unresolved injustice is a ceasefire, not a peace."},
    {s:"Forgiveness requires pretending the wrong never happened.", a:"false", why:"It releases the debt while the truth is named; justice still orders the wrong — the killer answers to the law."},
    {s:"Liberia's peace process involved religious communities working together.", a:"true", why:"The Inter-Religious Council mediated, the women of the churches and mosques pressed the Accra talks, and the elders reopened the palaver in the towns."},
    {s:"Demanding that a traumatised survivor \"just forget\" is part of reconciliation.", a:"false", why:"It re-injures the victim; healing begins with listening — Job's friends sat seven days before any speech (Job 2:13)."},
    {s:"Hate speech is harmless because words are only words.", a:"false", why:"The war of words feeds the war of hands; the traditions discipline the tongue (James 3:5-6; the elders' proverb that the mouth can burn the town)."},
    {s:"The peacemaker's chief weapon is presence that will not leave.", a:"true", why:"The Inter-Religious Council and the women in white won by staying in the room when others walked out."}
  ],
  apply:[
    {q:"Two pupils from different counties clash at school and their classmates begin choosing sides by county. You are senior prefect. Act.", a:"Cool the words — no county names; separate and hear each fully; find the facts and name the small case before it becomes a big one; and convene both with a teacher to a settlement, naming the fuel (county tribalism) to the assembled pupils plainly."},
    {q:"A survivor of the conflict says she can never forgive. Respond with the traditions' full teaching.", a:"Do not command her — sit with her first; name forgiveness as release for her own freedom, not as a favour to the offender; keep justice's part (law, truth-telling) distinct from hers; and let her time be long — seventy times seven is not a deadline."},
    {q:"A radio caller begins blaming one religion for the war. You are the next caller.", a:"Correct the record calmly with facts — the faiths carried the rescue together (the Council, the women in white); refuse the generalisation as hate speech's entry point; and name the real fuels the traditions list instead."},
    {q:"Your community plans a reconciliation service for two families estranged since the war. What should its order contain?", a:"Both parties' consent and preparation beforehand; truth named but controlled; the elder's or leader's word; the settlement of what can be paid; the shared meal; and follow-up in the months after — reconciliation is a process, not a service."},
    {q:"Which of the six peacemaker skills is hardest for you? Name it and plan its practice.", a:"An honest self-answer — for most it is listening to the end, or staying in the room; name the skill, the next situation, and the sentence you will use to begin it."}
  ],
  sort:{ title:"Making peace", groups:[
    {name:"Teachings on peace", items:["Blessed are the peacemakers","Make peace between your brothers","The palaver until the case is settled"]},
    {name:"Fuels of conflict", items:["Greed and injustice","Tribalism and revenge","Grievance and poverty"]},
    {name:"Liberia's peace actors", items:["The Inter-Religious Council","The women in white","The elders' palaver","The Truth and Reconciliation Commission"]},
    {name:"Peacemaker's skills", items:["Listen to the end","Cool the words","Act early","Stay in the room"]}
  ]},
  compare:{ title:"Three traditions at the peace table", caption:"Complete the table of each tradition's peace teaching.",
    items:[
      {p:"Ground of peace", f:"Christ the Prince of Peace making one from two (Ephesians 2:14); As-Salam, the Source of Peace; the palaver's settled case as the town's safety."},
      {p:"Command", f:"Pursue peace with all men (Hebrews 12:14); make peace between your brothers (Qur'an 49:10); the elders' duty to seat the parties."},
      {p:"On forgiveness", f:"Seventy times seven (Matthew 18:22); pardoning with Allah's reward (Qur'an 42:40); the rite that names, pays what can be paid, and restores."},
      {p:"On justice", f:"No peace without it — the prophets' cry; the Qur'an's scales; the case must be settled, not buried."},
      {p:"In Liberia's war", f:"The Council's mediation, the sheltering congregations, the reopened palaver, the women in white."},
      {p:"For the learner", f:"The skills of the table — listening, mediation, refusing hate speech, and presence that stays."}
    ]},
  casestudy:{ title:"The white scarves at the door",
    text:"At the 2003 peace talks in Accra, the delegates of the armed factions sat for weeks while Liberia burned. Then came the women — market women, teachers, nurses, grandmothers, Christians and Muslims together, many dressed in white. They had prayed and fasted in Monrovia through the worst of the war, Christian and Muslim women in one movement, and they followed the talks to Accra. When the delegates stalled, the women sat at the door of the hall and refused to let the delegates leave without an agreement, day after day, armed with nothing but their presence, their songs and their white dress. One of their leaders said later that their strength had two sources: they were mothers, and they refused to be divided — the war had tried to divide Christian from Muslim, and the women answered by praying together in both traditions. The agreement was signed in August 2003. The movement's work was recognised around the world, its leadership sharing the 2011 Nobel Peace Prize, and Liberia afterward elected the first woman head of state on the continent.",
    questions:[
      {q:"Which fuel of the war did the women deliberately starve?", a:"Division — the war had used the Christian–Muslim line, and the women's united prayer and dress starved the fire of its most dangerous fuel."},
      {q:"What did their \"weapon\" consist of, and where had it been forged?", a:"Presence, song and witness at the door — forged in months of shared prayer, fasting and organisation in Monrovia; the discipline of the table preceded the table."},
      {q:"Why does the story matter to a senior-high pupil of any tradition?", a:"It proves the traditions' peace teaching is practical politics: the peacemaker's chief weapon is presence that will not leave, and the smallest rooms — a compound, a school — train it."},
      {q:"What did the women's two-source strength (motherhood and unity) teach about the peacemaker's skills?", a:"That listening to the end, staying in the room and refusing the dividing word are stronger than the delegates' arguments — the skills of peace outlast the skills of war."}
    ]},
  project:{ title:"A settled case in our quarter",
    brief:"Study one real act of reconciliation in your community and present it.",
    steps:["With an elder's guidance, identify a dispute that was genuinely settled — land, family, church or quarter.","Interview the parties or the mediator, with consent, on how the case moved from grievance to settlement.","Record the steps in order: who sat, what was named, what was paid or restored, what remains.","Match each step to the peacemaker's skills and the traditions' teachings.","Present the case to the class — with names withheld where the parties ask."],
    criteria:["A real settled case, consented to","The steps accurately recorded","The skills and teachings aptly matched","Names protected where asked","A respectful, well-told presentation"]},
  activities:["Memorise Matthew 5:9 and Qur'an 49:10 and recite with meaning","Role-play the mediation of a land boundary case with the six skills","Study the photos and accounts of the women in white and the Inter-Religious Council's appeals","Draw the fuels-and-fire diagram of a quarrel you know (no names) and mark where it could have been drained"],
  materials:["The Holy Bible — Matthew 5:9, 18:21-35; Ephesians 2:14-16; Hebrews 12:14; Job 2:13","The Holy Qur'an — 41:34; 42:40; 49:9-10","Accounts of the Inter-Religious Council, the Women's Mass Action for Peace and the Truth and Reconciliation Commission","Elders of the community"],
  assessment:["Settled-case project","Mediation role-play","Recitation","Fuels-and-fire diagram","Written tests"]
},

{
  grade:12, period:"III", sem:"Two", icon:"🌳",
  title:"Religion and the Environment",
  subtitle:"Creation care in the three traditions — stewardship, the sacred groves, and Liberia's rainforest as a trust",
  outcomes:["Learners understand the created world as God's possession held in trust by humanity, know the environmental teaching of the three traditions, can assess Liberia's environmental challenges in its light, and take practical action for the care of the land."],
  objectives:[
    "State whose the earth is and what humanity's role in it is — steward, not owner",
    "Show the environmental teaching of the Bible, the Qur'an and the tradition — including the sacred groves and the totems",
    "Identify Liberia's environmental challenges and their causes",
    "Explain environmental justice — the poor suffer first, and the unborn have a claim",
    "Design and carry out one practical act of creation care"
  ],
  note:"<b>The earth is the LORD's</b> and the fullness thereof (Psalm 24:1) — the land is never finally ours; it is held in trust from the Creator through the ancestors for the children yet unborn. Man was placed in the garden \"<b>to dress it and to keep it</b>\" (Genesis 2:15) — God's trustee (<b>khalifah</b>, Qur'an 2:30). The Hadith says the world is green and beautiful and God has made us its stewards. The tradition's <b>sacred groves</b> and clan totems conserved species and forests for centuries before the word \"conservation\" arrived. To destroy the land is to rob three parties at once: God, the poor, and the unborn.",
  study:[
    {k:"h3", t:"Whose Land Is It?"},
    {k:"bul", items:[
      "**The Bible** — \"the earth is the LORD's and the fullness thereof, the world and those who dwell therein\" (Psalm 24:1); the land itself is given a Sabbath rest (Leviticus 25:1-7)",
      "**The Qur'an** — \"to Allah belongs whatever is in the heavens and the earth\" (Qur'an 2:284); man is appointed trustee on earth (Qur'an 2:30) and steward of what He placed there (Qur'an 6:165)",
      "**The tradition** — the land is held from the Creator through the ancestors; the sacred grove may not be cut, and the river has its days — the earth's Owner is honoured by its rules"
    ]},
    {k:"p", t:"From this flows the doctrine of **stewardship**: humanity may use the earth — to farm, to build, to harvest — but as a trustee uses an estate, for the Owner's purposes and the heirs' benefit, not as an owner stripping the shop. \"Dominion\" (Genesis 1:28) is the gardener's charge, not the wrecker's licence: the very next scene shows the man placed in the garden to dress and keep it (Genesis 2:15)."},
    {k:"rule"},
    {k:"h3", t:"The Tradition's Own Conservation"},
    {k:"p", t:"African Traditional Religion has kept land and species for centuries by sacred rule:"},
    {k:"bul", items:[
      "**The sacred grove** — a forest never cut, where the community meets its spirits and its ancestors; whole ecosystems survived in Liberia because the grove was holy",
      "**The totem taboo** — the clan that may not eat or kill its totem animal guards that species everywhere; the leopard, the python and the hornbill have clans that shield them",
      "**The closed season** — the river not fished on its days, the bush not entered in its season, the farm given its fallow years",
      "**The settled boundary** — land cases heard by the palaver, because a boundary settled by justice outlasts one settled by fire"
    ]},
    {k:"rule"},
    {k:"h3", t:"Liberia's Environment — the Trust Today"},
    {k:"bul", items:[
      "**The rainforest** — Liberia holds one of West Africa's last great rainforests; its destruction by logging, shifting cultivation and charcoal is the trust spent in one generation",
      "**Mining and its scars** — iron ore, gold and diamonds feed the nation but poison rivers and leave pits where farms and towns stood, when done without care",
      "**Water and waste** — the plastic-filled creek, the unclean well, the fish killed downstream of the effluent",
      "**Wildlife** — the bushmeat trade emptying the forest of its animals, species by species",
      "**Climate change** — the rains that no longer keep their calendar, the dry-season harmattan growing harsher, the sea eating at the coast — the poor farmer meets it first"
    ]},
    {k:"rule"},
    {k:"h3", t:"The Traditions' Rule of Moderation"},
    {k:"p", t:"The Qur'an's measure governs the harvest as the market: \"He has raised the heaven and set the balance — transgress not in the balance\" (Qur'an 55:7-8); \"eat and drink, but do not waste; He does not love the wasteful\" (Qur'an 7:31). The Bible's Sabbaths — for the land, for the debtor, for the beast — teach one rhythm: take, and let recover. The elders' fallow years and closed seasons taught it before. Waste and greed, not use, are the sins."},
    {k:"rule"},
    {k:"h3", t:"Environmental Justice"},
    {k:"p", t:"Environmental harm is not shared fairly: the poor live by the poisoned creek, farm the eroding hill and fetch water from the river the mine turns brown; the unborn inherit the pit and the lost forest. The traditions' rule of justice — the widow, the orphan, the stranger — extends across time: **the children yet unborn are neighbours with a claim on our conduct**. \"A good man leaves an inheritance to his children's children\" (Proverbs 13:22) — and the inheritance is soil, forest and clean water before it is money."},
    {k:"rule"},
    {k:"h3", t:"Practical Creation Care"},
    {k:"num", items:[
      "Plant and guard trees — the Hadith counts planting a seedling among the charities whose fruit continues",
      "Farm with the land, not against it — fallow years, cover crops, the forest's edge respected",
      "Make woodlots for firewood and charcoal, and the energy-saving stove, so the old forest is spared",
      "Refuse the unlawful deal — the illegal log, the unlicensed pit, the bushmeat of the protected species",
      "Clean the water — no waste in the creek or the well's surroundings; the community clean-up as worship",
      "Speak for the land — the palaver, the county office, the chief's ear; the land has no tongue but ours"
    ]},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:[
      "Write the three references that establish God's ownership of the land.",
      "Explain stewardship and why dominion is not a wrecker's licence.",
      "Describe two traditional practices of conservation and how they worked.",
      "List Liberia's main environmental challenges and match each to a root cause.",
      "Carry out one act of creation care — tree planting, clean-up, woodlot or education — and report it with sketches."
    ]}
  ],
  focus:["God's ownership, humanity's trusteeship","Dominion as the gardener's charge","The sacred grove, the totem and the closed season","Liberia's environmental challenges","Moderation — the balance not transgressed","Environmental justice — the poor and the unborn"],
  terms:[
    {t:"stewardship", d:"managing God's earth as a trust for the Owner and the heirs", x:"Stewardship answers the question: whose land is it?"},
    {t:"creation care", d:"the religious duty to keep and tend the natural world", x:"Creation care is worship with the hands."},
    {t:"sacred grove", d:"a forest kept uncut by religious rule", x:"The sacred grove sheltered the forest's memory."},
    {t:"totem", d:"a species or object under a clan's special protection", x:"The clan's totem shielded the python."},
    {t:"fallow", d:"the rest given farmland to recover its strength", x:"The fallow year feeds the next harvest."},
    {t:"deforestation", d:"the clearing and loss of forest", x:"Deforestation spends the grandchildren's shade."},
    {t:"erosion", d:"the washing away of soil, especially where trees are gone", x:"Erosion follows the axe upstream."},
    {t:"conservation", d:"the careful use and protection of nature", x:"The grove was conservation before the word came."},
    {t:"climate change", d:"the long shift in weather patterns caused largely by human activity", x:"The farmer meets climate change first."},
    {t:"bushmeat", d:"wild animals hunted for food", x:"The unmeasured bushmeat trade empties the forest."},
    {t:"pollution", d:"the fouling of land, water or air", x:"The creek's plastic is a theological matter."},
    {t:"intergenerational duty", d:"the claim of the unborn on our conduct", x:"The unborn hold shares in the land."}
  ],
  facts:[
    {q:"Which three references establish God's ownership of the earth?", a:"Psalm 24:1 — the earth is the LORD's; Qur'an 2:284 — to Allah belongs all in the heavens and earth; the tradition — the land held from the Creator through the ancestors."},
    {q:"What charge was given to the man in the garden, and what does it teach?", a:"To dress it and to keep it (Genesis 2:15) — use with care; dominion is the gardener's charge, not the wrecker's licence."},
    {q:"What is a khalifah?", a:"The Qur'an's word for humanity's office on earth — a trustee, God's steward placed over the creation to keep it for Him (Qur'an 2:30)."},
    {q:"How did the sacred groves conserve the forest?", a:"A grove was holy — never cut, never farmed — so whole stands of old forest and their species survived wherever the rule was kept."},
    {q:"Explain how a clan totem protects a species.", a:"The clan that may not eat, kill or harm its totem animal shields that species everywhere it meets it — a protection older than the game law."},
    {q:"Name four of Liberia's environmental challenges.", a:"Deforestation (logging, shifting cultivation, charcoal), mining's poisoned rivers and pits, plastic and water pollution, the bushmeat trade and climate change."},
    {q:"Which Qur'an verses set the balance and forbid waste?", a:"Qur'an 55:7-8 — He set the balance, transgress not; and 7:31 — eat and drink but do not waste."},
    {q:"What is the environmental meaning of Proverbs 13:22?", a:"A good person leaves an inheritance to the children's children — and the real inheritance is soil, forest and clean water, held in trust for the unborn."}
  ],
  tf:[
    {s:"The earth belongs to humanity to use as it pleases.", a:"false", why:"The earth is the LORD's (Psalm 24:1); humanity holds it in trust, and the trustee answers for the estate."},
    {s:"Dominion in Genesis 1:28 licenses unlimited exploitation.", a:"false", why:"The next chapter gives the charge's content — to dress and keep the garden (Genesis 2:15); the wrecker has left the office of trustee."},
    {s:"Sacred groves and totems show traditional conservation.", a:"true", why:"The uncut grove and the protected totem species conserved forest and wildlife for centuries by religious rule."},
    {s:"Environmental harm affects everyone equally.", a:"false", why:"The poor live by the poisoned creek and farm the eroding hill; the seller of the concession lives elsewhere — this is the environmental justice the traditions demand."},
    {s:"The Qur'an forbids waste in eating and drinking.", a:"true", why:"Qur'an 7:31 — eat and drink but do not waste, for He does not love the wasteful."},
    {s:"Charcoal burning must stop because it is a sin.", a:"false", why:"The traditions judge greed and waste, not use; the woodlot and the energy-saving stove keep the cooking fire while sparing the old forest."}
  ],
  apply:[
    {q:"A company offers your town money to log the old forest behind it. The town is poor. Advise the elders.", a:"The land is a trust: weigh the offer against the lost watershed, the medicine, the bushmeat, the grandchildren's forest; ask for the community forest option and a written plan; the palaver must sit with the youth and the women heard — a poor town that sells its forest trades a farm for a feast."},
    {q:"Your quarter's creek is filling with plastic. Design the community's response.", a:"A clean-up day (the mosque, church and elders leading); a collection point and a rule against waste at the spring; teaching the children — and the palaver naming the creek's case as a religious matter."},
    {q:"A classmate laughs at the clan totem as superstition. Respond with what you now know.", a:"The totem was species protection before the word conservation came; behind the rule stands the doctrine of the land as a living trust — one may disagree with the theology and still honour the conservation."},
    {q:"Farmers in your district cut the forest because the soil fails after two seasons. What does stewardship suggest?", a:"Not blame but alternatives: fallow years and cover crops that rebuild soil, woodlots for fuel, and the extension officer's help — the axe is often the last tool of a farmer without choices."},
    {q:"Plant and adopt one tree this term: name the species, the place and the guard plan.", a:"A concrete plan — e.g. a fruit or shade tree at the school's water point, planted with the agriculture club, watered on a rota, and given to a named guardian each vacation."}
  ],
  sort:{ title:"The land as a trust", groups:[
    {name:"Ownership and office", items:["The earth is the LORD's","The trustee on earth","Dress and keep","The ancestors' holding"]},
    {name:"Traditional conservation", items:["The sacred grove","The clan totem","The closed season","The fallow year"]},
    {name:"Liberia's challenges", items:["Deforestation","Mining scars","Plastic and water pollution","The bushmeat trade"]},
    {name:"Practical care", items:["Tree planting","Woodlots and better stoves","The community clean-up","Speaking for the land"]}
  ]},
  compare:{ title:"Three traditions, one garden", caption:"Complete the table of each tradition's environmental teaching.",
    items:[
      {p:"Owner of the land", f:"The LORD (Psalm 24:1); Allah (Qur'an 2:284); the Creator from whom the ancestors hold it."},
      {p:"Human office", f:"The gardener dressing and keeping (Genesis 2:15); the khalifah trustee (Qur'an 2:30); the community keeping the rules of the land."},
      {p:"Rule of use", f:"The Sabbaths and fallows; the balance not transgressed, no waste (55:7-8; 7:31); the closed season and the grove."},
      {p:"Old practice", f:"The land's rest; the desert's measured well; the sacred grove and the totem species."},
      {p:"Judgment on greed", f:"The elders' proverb of the land that buries its robber; the wasteful as brothers of destruction; the grove-cutter who cuts himself off."},
      {p:"Modern charge", f:"Liberia's rainforest held in trust — for God, the poor and the unborn."}
    ]},
  casestudy:{ title:"The grove that kept the water",
    text:"Above a town in Lofa County stood a hill forest the elders had never allowed to be cut: the grove where the town's founding rites were held. In the hard years after the war, timber buyers came with money, and some young men argued the grove should be sold — the town needed a school. An old woman of the zoes' line answered them with a walk. She led them up past the spring that fed the town's wells and showed them where the grove's roots held the hill: \"When you cut the arms that hold this hill, the water goes with the trees. You will sell one forest and buy two problems: a dry well and a dead school.\" The town sat three palavers and reached a third way: they marked the grove's boundary as the old rule had it, and sold instead a plantation stand of planted pines further down, which they replanted from their own nursery. The school was roofed, and the spring has not failed. A buyer who returned years later was told: \"We can sell you trees we planted. The ones we inherited are not ours.\"",
    questions:[
      {q:"What did the old woman understand that the timber buyers did not?", a:"That the grove was infrastructure — its roots were the town's water system; the forest's value was not only in its timber but in its holding of the hill."},
      {q:"How did the town's solution honour both the trust and the need?", a:"It spent only what the town had planted — the plantation pines — and kept the inherited grove intact; the trust's capital was preserved and its income used."},
      {q:"Which traditional and scriptural rules did the boundary-marking keep?", a:"The grove's sacred rule and the settled boundary of the palaver; the Sabbath principle — use what recovers, keep what does not."},
      {q:"What does the closing sentence state as doctrine?", a:"Stewardship exactly: the inherited forest is held for God, the ancestors and the unborn; only what we plant is ours to sell."}
    ]},
  project:{ title:"The trust in practice",
    brief:"Plan and carry out one act of creation care for your community.",
    steps:["Walk your community with an elder or teacher; map its environmental needs — erosion, waste, water, firewood, lost trees.","Choose one need your class can genuinely meet this term.","Plan the act: the people, the materials, the permission needed, the date.","Carry it out — tree planting, clean-up, woodlot, stove-building or teaching.","Report it: sketch map, photographs if possible, what was done, who will guard it when you are gone."],
    criteria:["A real need honestly mapped","A feasible act chosen and permitted","The act genuinely carried out","The follow-up guardian named","An honest report with map or photographs"]},
  activities:["Map the community's environmental needs with an elder","Visit (with arrangement) a sacred grove or community forest and record its rules","Calculate a family's firewood use and design a woodlot for it","Learn Qur'an 55:7-9 and Psalm 24:1-2 by heart"],
  materials:["The Holy Bible — Genesis 2:15; Leviticus 25:1-7; Psalm 24:1-2; Proverbs 13:22","The Holy Qur'an — 2:30; 6:165; 7:31; 55:7-9","The elders' rules of the grove and the totems","Tree seedlings and the community's land"],
  assessment:["Creation-care project","Mapping exercise","Recitation","Woodlot design","Written tests"]
},

{
  grade:12, period:"IV", sem:"Two", icon:"🔍",
  title:"Discernment — True and False Religion",
  subtitle:"Testing the spirits: the marks of genuine faith and the warnings against manipulation, exploitation and the occult",
  outcomes:["Learners can test religious claims by the marks the traditions themselves give — character, teaching and fruit — recognise manipulation and exploitation dressed as religion, guard against occult dangers, and protect themselves and others with the disciplines of discernment."],
  objectives:[
    "State the marks by which the traditions say true religion is known",
    "Identify the tactics of religious manipulation — fear, extraction, isolation and false miracles",
    "Explain the dangers of occult involvement, including the reality of ritual crime under the law",
    "Show how witchcraft accusations harm the innocent and how the traditions and the law answer them",
    "Practise the disciplines of discernment — know the source, ask questions, consult elders, refuse secrecy"
  ],
  note:"<b>\"Beware of false prophets, who come to you in sheep's clothing... you will know them by their fruits\"</b> (Matthew 7:15-16). Every tradition tests its claimants: the Hadith warns of impostors, and the elders test the healer by results and character. The marks of the true are <b>obedience, honesty, love, humility and service</b>; the marks of the false are <b>fear, extraction, isolation and the miracle nobody may question</b>. The believer who knows the source cannot be ruled by the impostor.",
  study:[
    {k:"h3", t:"The Marks of True Religion"},
    {k:"bul", items:[
      "**Obedience to God's word** — the true teacher's life keeps what the source commands (John 14:15)",
      "**Honesty** — money handled openly, accounts read, no secret fees",
      "**Love and service** — \"by this all will know you are My disciples, if you love one another\" (John 13:35); the Qur'an's test is mercy and care for the needy (Qur'an 107)",
      "**Humility** — the true points to God, not to himself; the Prophet refused worship and greatness",
      "**Good fruit in followers** — homes more honest, marriages more faithful, youth more industrious — \"a good tree cannot bear evil fruit\" (Matthew 7:18)",
      "**Truthfulness of teaching** — \"to the law and to the testimony! If they do not speak according to this word, there is no light in them\" (Isaiah 8:20)"
    ]},
    {k:"rule"},
    {k:"h3", t:"The Tactics of Manipulation"},
    {k:"table", head:["Tactic","How it works","The tell"], rows:[
      ["Fear","\"Your family is cursed; only I can break it\"","The cure is always bought, and always needs more"],
      ["Extraction","\"Sow a seed of your last dollar for the hundredfold\"","The seed is always to the man, never to the needy"],
      ["Isolation","\"Your parents are enemies of your destiny; stay with us\"","True faith honours parents (Exodus 20:12; Qur'an 17:23)"],
      ["The unquestionable miracle","Signs staged or staged; questions forbidden","The Bereans searched the scriptures daily and were called noble (Acts 17:11)"],
      ["Secrecy and initiation costs","Escalating fees and secrets \"too holy to explain\"","What hides from the elders hides something"],
      ["Love-bombing and control","Instant family, then total obedience demanded","The follower ends with no money, no family, no questions"]
    ]},
    {k:"p", t:"The online version adds the voice note's \"man of God\" and the WhatsApp \"prayer fee\" — the same tactics at the speed of the network. The rule holds: **verify** (Qur'an 49:6), **test** (1 John 4:1), **ask the elders**."},
    {k:"rule"},
    {k:"h3", t:"The Occult — Its Dangers"},
    {k:"p", t:"The traditions teach a real spiritual world, and a real forbidden side of it. The occult promises power, wealth or revenge through juju, secret rituals, oaths and blood — and the traditions answer with one voice: the power sought outside God binds the seeker. Scripture forbids sorcery and consulting the dead (Deuteronomy 18:10-12); the Qur'an seeks refuge from \"the whisperers\" and the evil of what He created (Qur'an 113-114); the elders themselves warn that the medicine of destruction returns on the hand that sends it. And some of what is called spiritual is simply crime: **ritual killing is murder under the law of Liberia and an abomination before every tradition**. The young person is warned, protected and told: report to parents and elders what offers you power at a price."},
    {k:"rule"},
    {k:"h3", t:"Witchcraft Accusations — the Cruel Inversion"},
    {k:"p", t:"The other face of the occult danger is the **accusation**: children, widows, the old and the disabled branded witches, driven out, beaten or \"delivered\" for fees. The traditions' own teaching condemns the cruelty: the innocent must not be condemned without proof — \"one witness is not enough\" (Deuteronomy 19:15; the Qur'an's evidences and the elders' inquiry likewise); Jesus refused the crowd's accusations and protected the accused; and the law of Liberia criminalises the assault that hides behind the label. Where a child is accused, the community's duty is protection, inquiry and care — not the mob."},
    {k:"rule"},
    {k:"h3", t:"The Disciplines of Discernment"},
    {k:"num", items:[
      "**Know the source yourself** — the Bible or the Qur'an read daily; the impostor rules the biblically illiterate",
      "**Ask questions early** — about money, about accountability, about the teaching; the true teacher welcomes the Berean test",
      "**Consult your elders** — parents, pastor or imam, and the town elders; the lone believer is the easy mark",
      "**Refuse secrecy** — what cannot be told to your mother is not of God",
      "**Watch the fruit over time** — one service proves nothing; a year of followers' lives proves much",
      "**Report exploitation** — to parents, to the religious council, and where crime is done, to the authorities"
    ]},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:[
      "List the six marks of true religion with a reference for each.",
      "Name the six tactics of manipulation and each one's \"tell\".",
      "Write the traditions' answer to the occult's three promises — power, wealth, revenge.",
      "Explain how witchcraft accusations harm the innocent and what the community's duty is.",
      "Write the six disciplines of discernment from memory, and give one case of each being applied."
    ]}
  ],
  focus:["The marks of true religion","By their fruits — the test of time","Tactics of manipulation","The occult and the law — ritual crime is murder","Witchcraft accusations and the innocent","The disciplines of discernment"],
  terms:[
    {t:"discernment", d:"the skill of testing what is truly of God", x:"Test the spirits, whether they are of God."},
    {t:"manipulation", d:"controlling a person through fear, pressure or deceit", x:"Manipulation wears the robe and keeps the till."},
    {t:"extraction", d:"taking money or goods from followers by religious pressure", x:"The seed extracted from the poor is theft."},
    {t:"occult", d:"hidden practices seeking power outside God — sorcery, secret rites, blood", x:"The occult's promise binds the seeker."},
    {t:"ritual killing", d:"murder committed for supposed spiritual gain — crime before God and the law", x:"Ritual killing is murder, nothing less."},
    {t:"witchcraft accusation", d:"the branding of a person, often the weak, as a worker of evil", x:"The accusation without proof destroys the innocent."},
    {t:"false prophet", d:"one who claims God's authority without God's character", x:"The false prophet comes in sheep's clothing."},
    {t:"fruit", d:"the conduct that follows from a teaching over time", x:"By their fruits you shall know them."},
    {t:"Berean", d:"a questioner who searches the scriptures to verify (Acts 17:11)", x:"Be a Berean: check the quotation."},
    {t:"accountability", d:"the duty to answer openly for money and conduct", x:"The true ministry reads its accounts."},
    {t:"oath", d:"a solemn promise binding a person, sometimes exploited by secrecy", x:"The secret oath is the chain's first link."},
    {t:"deliverance", d:"religious ministry claiming release from evil — exploited when sold for fees", x:"The priced deliverance has a tell."}
  ],
  facts:[
    {q:"Which verses command testing the claimants of religion?", a:"Matthew 7:15-16 — beware of false prophets, known by their fruits; 1 John 4:1 — test the spirits; Qur'an 49:6 — verify the news."},
    {q:"List four marks of true religion.", a:"Obedience to God's word; open-handed honesty with money; love and service; humility — the true points to God, not to himself."},
    {q:"What is the \"tell\" of the fear tactic?", a:"The cure is always bought and always needs more — the curse is the salesman, and the breaking is the subscription."},
    {q:"Why is isolation a danger sign in a religious group?", a:"Because every true tradition commands the honour of parents and the fellowship of the wider community; the group that cuts both off is hiding from the very people who would test it."},
    {q:"What is the traditions' answer to the occult's promises?", a:"That power sought outside God binds the seeker: sorcery and consulting the dead are forbidden (Deuteronomy 18:10-12); refuge is sought in God alone (Qur'an 113-114); the elders warn that the medicine of destruction returns on the sender."},
    {q:"What is ritual killing under Liberian law?", a:"Murder — an abomination before every tradition and a crime of the Republic; it is never \"religion\"."},
    {q:"Why are witchcraft accusations condemned?", a:"They condemn the innocent without proof, and fall hardest on children, widows, the old and the disabled; the law of Moses requires more than one witness (Deuteronomy 19:15), and the assault that follows the label is criminal."},
    {q:"Name the six disciplines of discernment.", a:"Know the source yourself; ask questions early; consult your elders; refuse secrecy; watch the fruit over time; report exploitation."}
  ],
  tf:[
    {s:"A true teacher of God may not be questioned.", a:"false", why:"The Bereans searched the scriptures daily and were called noble for it (Acts 17:11); the unquestionable claim is the mark of the impostor, not the prophet."},
    {s:"Genuine religion can be measured partly by the lives of its followers over time.", a:"true", why:"By their fruits you shall know them (Matthew 7:16-18) — homes more honest, youth more industrious; one service proves nothing, a year proves much."},
    {s:"If a preacher's ministry grows rich, that proves God's blessing.", a:"false", why:"The test is fruit in the followers' lives and the treatment of the poor, not the preacher's fleet; extraction is a tactic, not a blessing."},
    {s:"Occult power is a shortcut some may safely use.", a:"false", why:"The traditions with one voice teach that power sought outside God binds the seeker; the shortcut is the chain."},
    {s:"A child accused of witchcraft should be cast out for the town's safety.", a:"false", why:"The accusation without proof condemns the innocent; the community's duty is protection, inquiry and care — and the assault is criminal."},
    {s:"Reporting religious exploitation to parents, elders or authorities is betrayal of religion.", a:"false", why:"It is religion's own protection: the traditions command the care of the weak and the testing of claims; crime hidden under a robe is still crime."}
  ],
  apply:[
    {q:"A \"man of God\" tells your aunt her sickness is a family curse and that a special service will break it — for a fee equal to her savings. Advise her.", a:"Name the tells: the fear tactic with a bought cure; test the teaching against the source (no such sale is commanded); counsel treatment and prayer with her own church or mosque; and report the extraction to its leadership."},
    {q:"A schoolmate is invited to a late-night \"power society\" promising exam success for an oath and a fee. What do you say?", a:"Refuse secrecy — what cannot be told to the parents is not of God; the oath and the fee are the chain's links; counsel him to tell his parents and a teacher today, and to prepare for the exam by the honest road."},
    {q:"A crowd gathers to drive out an old widow someone has accused of witchcraft. You are there. Act.", a:"Refuse the mob plainly: one witness is not enough (Deuteronomy 19:15); the innocent must be protected; call the elders and the town chief to the palaver, and the police if violence threatens — the protection of the accused is the community's own religion."},
    {q:"Your cousin's new group teaches that parents are \"enemies of destiny\" and he may no longer greet his mother. Analyze the group.", a:"Isolation tactic: Exodus 20:12 and Qur'an 17:23 command the honour of parents; a teaching that breaks the fifth commandment is not from the God who gave it; counsel the cousin, inform his parents and the family's religious leader."},
    {q:"Draft the three questions you will ask before joining any religious group or ministry.", a:"For example: What do you teach, and where is it written? Who reads your accounts, and what do they show? May I bring my questions — and my mother — to the next meeting?"}
  ],
  sort:{ title:"Testing the claimants", groups:[
    {name:"Marks of the true", items:["Obedience to the word","Open accounts","Love and service","Humility"]},
    {name:"Tactics of the false", items:["Fear and priced cures","Extraction","Isolation","The unquestionable miracle"]},
    {name:"Occult dangers", items:["The priced oath","Sorcery's binding","Ritual killing — murder","The power shortcut"]},
    {name:"Disciplines of discernment", items:["Know the source yourself","Ask questions early","Consult the elders","Refuse secrecy"]}
  ]},
  compare:{ title:"What each tradition says about testing its claimants", caption:"Complete the table of the traditions' own tests.",
    items:[
      {p:"The command to test", f:"Test the spirits (1 John 4:1); by their fruits (Matthew 7:16); verify the news (Qur'an 49:6); the healer tested by results and character."},
      {p:"Money's test", f:"No one may serve God and mammon (Matthew 6:24); the priced miracle is the tell; the elders' healer takes the case, not the estate."},
      {p:"Character's test", f:"The fruit of the Spirit (Galatians 5:22-23); the Prophet's refusal of greatness; the elder who eats last."},
      {p:"Teaching's test", f:"To the law and to the testimony (Isaiah 8:20); the Berean searching (Acts 17:11); the Hadith graded by its chain."},
      {p:"The weak protected", f:"The accused needs witnesses (Deuteronomy 19:15); the child and the widow shielded; the mob refused."},
      {p:"Recourse", f:"The elders, the council, and the authorities — the traditions command reporting crime, not covering it."}
    ]},
  casestudy:{ title:"The hundredfold harvest",
    text:"A preacher came to a quarter of Buchanan with a night crusade and a promise: bring your seed money — one hundred United States dollars — and God would return a hundredfold within forty days. A nurse's aide brought her savings; a market woman brought her stock money; a schoolfather brought the fees. Forty days later nothing had returned, and the preacher had moved to another county. The market woman could not restock and her table stood empty for a season; the schoolfather's daughter missed a term. The quarter's own pastor had stayed away from the crusade, and when the families came to him ashamed, he did not mock them. He read them the widow of Zarephath — whose last meal was blessed, not bought — and 2 Corinthians 9:7, that God loves a cheerful giver, and no verse prices a promise. Then he did the practical thing: the church's deacons restocked the market woman's table as a loan without interest, and the school's PTA carried the fees. \"The false prophet took their money,\" he said. \"If we only preach at them and do not restock the table, he has taken their hope too, and that will cost more to replace.\"",
    questions:[
      {q:"Which tactics of manipulation did the crusade use?", a:"Extraction — the priced hundredfold; and the tell of the mobile preacher, gone before the promise falls due."},
      {q:"What did the pastor's reading of the sources establish?", a:"That the sale was not commanded anywhere: the cheerful giver is not billed, and blessing is not a subscription."},
      {q:"Why did the pastor restock the table as well as preach?", a:"Because exploitation's deepest theft is hope; words alone could not restore the family's livelihood, and religion's credibility was itself at stake."},
      {q:"What disciplines of discernment would have prevented the loss?", a:"Ask questions early; consult the elders (the quarter's own pastor); watch the fruit over time; and refuse the priced promise — no known verse prices a hundredfold."}
    ]},
  project:{ title:"Know the source",
    brief:"Build the class's discernment file on one manipulation pattern.",
    steps:["Collect (without names) three real patterns of religious exploitation known in the community — priced miracles, extraction, or secret oaths.","For each, write the tactic, the tell, and the harm done.","Match each against the teaching: which command does it break?","Write the class's advice card: three questions to ask before giving or joining.","Have the card checked by a trusted pastor, imam and elder, then print it for the school."],
    criteria:["Three patterns gathered discreetly, no names","Tactic, tell and harm clearly analysed","The broken command correctly identified","Three questions that truly test","The card checked and printed"]},
  activities:["Memorise Matthew 7:15-20 and recite it with its meaning","Role-play asking the three discernment questions respectfully but firmly","Debate: should churches and mosques publish their accounts? Argue from the marks of true religion","Study Deuteronomy 19:15 and discuss the protection of the accused"],
  materials:["The Holy Bible — Matthew 7:15-23; Acts 17:10-12; 1 John 4:1; Deuteronomy 18:9-14; 19:15; Galatians 5:22-23","The Holy Qur'an — 49:6; 113; 114","Trusted pastors, imams and elders","The class's advice card"],
  assessment:["Discernment file project","Recitation","Role-play","Debate","Written tests"]
},

{
  grade:12, period:"V", sem:"Two", icon:"🇱🇷",
  title:"Youth, Faith and Nation-Building",
  subtitle:"The senior-high graduate — identity, integrity and service in the building of Liberia",
  outcomes:["Learners see themselves as God's stewards of the nation's future — carrying identity, integrity and skill into adulthood — and can plan a life of service, industry and leadership that passes the values of faith to the next generation."],
  objectives:[
    "Explain the place of youth in God's plan, with young figures of the scriptures and the tradition",
    "State the values that carry a graduate — integrity, self-discipline, purity, financial discipline and lifelong learning",
    "Identify the works of nation-building — the vote, service, tax, skills and the refusal of tribalism",
    "Explain mentorship and the passing on of values",
    "Draft a personal plan for the first five years after senior high"
  ],
  note:"<b>Youth is not the waiting room of life; it is its foundation</b>. Jeremiah was young when called — and the answer to his fear was God's presence, not his age (Jeremiah 1:7-8). Paul told Timothy, \"let no one despise your youth\" (1 Timothy 4:12). The Qur'an's young men of the cave stood firm when a whole court would not (Qur'an 18:13-14), and Joseph kept his integrity as a young man far from home. The graduate's nation is built by <b>what he refuses</b> (the bribe, the tribal vote, the counterfeit) as much as by what he builds.",
  study:[
    {k:"h3", t:"Young and Called"},
    {k:"bul", items:[
      "**Jeremiah** — \"I am only a youth,\" he protested; the LORD answered, \"Do not be afraid... I am with you\" (Jeremiah 1:7-8)",
      "**Timothy** — \"Let no one despise your youth, but be an example to the believers in word, in conduct, in love, in spirit, in faith, in purity\" (1 Timothy 4:12)",
      "**The young men of the cave** — youths who stood and said, \"Our Lord is the Lord of the heavens and the earth\" when the court worshipped otherwise (Qur'an 18:13-14)",
      "**Joseph** — his character as a young man, tested in slavery and temptation, carried nations later (Genesis 39-41; Qur'an 12)",
      "**David** — the youngest of the house, keeping sheep, when the nation needed a giant faced (1 Samuel 17)",
      "**The tradition** — the elders' saying: the elder is praised for a life, but the young are watched — what the young praise today, the town becomes tomorrow"
    ]},
    {k:"rule"},
    {k:"h3", t:"The Values That Carry a Graduate"},
    {k:"num", items:[
      "**Integrity** — the same person in the dark; the bribe refused at the first offering, when refusal is cheapest",
      "**Self-discipline** — the governed day: devotion, work, study, rest; the traditions train the will by prayer, fasting and faithful hours",
      "**Purity as adult conviction** — the chastity learned in Grade 9 now owned, not merely obeyed; the body kept as God's temple (1 Corinthians 6:19-20)",
      "**Financial discipline** — earn honestly, save regularly, give faithfully, owe cautiously; the tithe, zakat and the budget are one habit",
      "**Lifelong learning** — the graduate who stops learning starts declining; the Qur'an's first revealed word was **Read** (Qur'an 96:1)",
      "**Hope and perseverance** — \"by time, surely man is in loss, except those who believe and do good works, and counsel one another to truth and counsel one another to patience\" (Qur'an 103)"
    ]},
    {k:"rule"},
    {k:"h3", t:"The Works of Nation-Building"},
    {k:"bul", items:[
      "**The vote at eighteen** — cast for character and plan, not county or pocket; the vote is a trust before God",
      "**Service** — the community clean-up, the teaching of juniors, the health campaign, the volunteer firebreak; nation-building is mostly unpaid work",
      "**Skills** — agriculture, health, education, trades and technology; a nation cannot import its own future",
      "**The honest economy** — pay the tax, keep the scale true, register the business; the honest trader builds more than the eloquent politician",
      "**The refusal of tribalism** — \"nations and tribes that you may know one another\" (Qur'an 49:13); the graduate who marries, hires and befriends across lines builds the Liberia the founders imagined",
      "**Peace kept** — the peacemaker's skills carried into adult life; the rumour refused, the case settled early"
    ]},
    {k:"rule"},
    {k:"h3", t:"Mentorship — Passing It On"},
    {k:"p", t:"Values survive only when passed hand to hand. The graduate's duty runs both directions: **upward**, to seek the counsel of elders while they remain (\"the death of an old person is the burning of a library\"); and **downward**, to take a younger learner by the hand — the Sunday school class, the Qur'an lesson, the coaching of a junior's mathematics, the telling of the proverbs. The tradition's picture is the compound: every adult is somebody's elder, and every child is the whole town's child."},
    {k:"rule"},
    {k:"h3", t:"Faith in Adulthood"},
    {k:"p", t:"Childhood faith is a gift of the family; adult faith is a possession of the person. The graduate joins the adult fellowship, keeps a personal devotion that survives the new schedule, and expects the testing of convictions — in the workplace, the market and the compound. The workplace witness is mostly silent and mostly powerful: **the honest clerk, the punctual nurse, the trader whose word is trusted**. When faith costs — the refused bribe, the mocked purity, the honest price that loses the sale — the traditions count the cost as gain: \"whoever loses his life for My sake will find it\" (Matthew 16:25)."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:[
      "Write Jeremiah 1:7-8 and 1 Timothy 4:12 and explain their answer to a young person's fear.",
      "List the six values that carry a graduate and one habit that builds each.",
      "Name four works of nation-building and what each builds.",
      "Identify one junior learner you will mentor this year and what you will teach them.",
      "Draft your five-year plan — work or study, skills, service, giving and growth — and have an elder read it."
    ]}
  ],
  focus:["Young and called — the scriptures' youth","The six values that carry a graduate","The works of nation-building","Mentorship — passing the values on","Faith owned in adulthood","The five-year plan"],
  terms:[
    {t:"identity", d:"who a person understands themselves to be", x:"The graduate's identity is God's before it is the nation's."},
    {t:"integrity", d:"wholeness of character — the same person in dark and light", x:"Integrity is built by small refusals."},
    {t:"self-discipline", d:"the governing of one's own habits and hours", x:"Self-discipline is freedom's other name."},
    {t:"nation-building", d:"the work of building a just, skilled and united nation", x:"Nation-building is mostly unpaid."},
    {t:"mentorship", d:"a relationship of guidance between an experienced and a younger person", x:"Mentorship hands values across the years."},
    {t:"franchise", d:"the right to vote", x:"The vote at eighteen is a trust."},
    {t:"volunteer", d:"one who serves without payment", x:"The volunteer's wage is the nation itself."},
    {t:"lifelong learning", d:"the habit of study continued past school", x:"The first revealed word was Read."},
    {t:"perseverance", d:"the keeping on under difficulty", x:"Counsel one another to patience."},
    {t:"witness", d:"the testimony of a life, especially where words are few", x:"The honest clerk is a sermon."},
    {t:"purity", d:"the keeping of body and heart for God's purpose", x:"Purity owned is stronger than purity obeyed."},
    {t:"five-year plan", d:"a written plan of growth for the years after school", x:"Write the plan; let an elder read it."}
  ],
  facts:[
    {q:"What did God answer Jeremiah's fear of youth?", a:"\"Do not say, I am only a youth... Do not be afraid of them, for I am with you\" (Jeremiah 1:7-8) — the answer to fear is God's presence, not greater age."},
    {q:"Quote Paul's charge to the young leader Timothy.", a:"\"Let no one despise your youth, but be an example to the believers in word, in conduct, in love, in spirit, in faith, in purity\" (1 Timothy 4:12)."},
    {q:"Who were the young men of the cave?", a:"The Qur'an's youths (Surah 18) who stood and confessed the one Lord when the court worshipped otherwise — youth's courage against a majority."},
    {q:"List the six values that carry a graduate.", a:"Integrity; self-discipline; purity owned as adult conviction; financial discipline; lifelong learning; hope and perseverance."},
    {q:"Name four works of nation-building.", a:"The honest vote at eighteen; service and volunteering; skills — agriculture, health, education, trades, technology; and the refusal of tribalism in hiring, marriage and friendship."},
    {q:"What does Qur'an 103 (Surah Al-'Asr) teach?", a:"That all are in loss except those who believe, do good, and counsel one another to truth and to patience — the graduate's companions and habits in one surah."},
    {q:"Why is mentorship a duty and not a favour?", a:"Because values survive only hand to hand: the library that is an elder must be read before it burns, and the junior learner is the whole town's child."},
    {q:"What is the workplace witness?", a:"Mostly silent, mostly powerful: the honest clerk, the punctual nurse, the trader whose word is trusted — a life that makes the faith credible."}
  ],
  tf:[
    {s:"Youth is only preparation; nothing serious can be done before thirty.", a:"false", why:"Jeremiah, David, Joseph, Timothy and the young men of the cave were all used young; the traditions treat youth as foundation, not waiting room."},
    {s:"Integrity is built by large decisions in great moments.", a:"false", why:"It is built by small refusals — the first bribe refused is the cheapest; the habit decides before the crisis."},
    {s:"Nation-building is the government's work alone.", a:"false", why:"The vote, service, skills, the honest economy, the refusal of tribalism and kept peace are all citizens' work; most of it is unpaid."},
    {s:"Voting by county or by payment is compatible with the traditions.", a:"false", why:"The vote is a trust before God; Qur'an 49:13 and the one-hearth teaching judge character and plan, not county or pocket."},
    {s:"A graduate should seek mentors while becoming one.", a:"true", why:"The library that is an elder must be read before it burns, and every adult is somebody's elder — the duty runs both directions."},
    {s:"When faith costs the believer at work, the traditions count the cost as gain.", a:"true", why:"\"Whoever loses his life for My sake will find it\" (Matthew 16:25); the refused bribe is a real loss with a real reward."}
  ],
  apply:[
    {q:"You are offered your first job on condition of paying a \"connection fee\" to a relative in the office. Decide with the unit's values.", a:"Refuse: the fee is a bribe (Deuteronomy 16:19; Qur'an 2:188), the job so gotten is held by a chain that pulls forever; keep the name, lose the offer, and let the refusal be the first stone of the integrity you will be known by."},
    {q:"Your first salary arrives. Design the budget with the traditions.", a:"Firstfruits first — tithe or zakat as a debt, not a leftover; then needs and a saved share; debt cautious and short; a standing sadaqah or alms line; and a learning line — the first revealed word was Read."},
    {q:"A junior learner in your compound is drifting toward the wrong crowd. Take up the mentorship.", a:"Go where he is and be honest about your own near-misses; give him work with you — a skill, a team, a responsibility; introduce him to your own mentors; and tell him the proverb of the young — what he praises today, he becomes tomorrow."},
    {q:"An election year arrives; your household is pressured to vote \"for our people\". State your position to them.", a:"Respectfully: the vote is a trust before God; read the candidates' character and plans; name the fuels the traditions warn of (tribalism, payment); and invite the household to judge each candidate by the marks of the leader, not the county."},
    {q:"Write the first page of your five-year plan now: the work or study, the skill, the service, the giving, the growth.", a:"A concrete, dated page — e.g. college or apprenticeship by year one; one skill certified by year two; a standing service in the church or mosque; a fixed giving share; one book a month — and an elder's signature beneath it."}
  ],
  sort:{ title:"The graduate's kit", groups:[
    {name:"The scriptures' youth", items:["Jeremiah","Timothy","Joseph","The young men of the cave"]},
    {name:"Values that carry", items:["Integrity","Self-discipline","Financial discipline","Lifelong learning"]},
    {name:"Works of nation-building", items:["The honest vote","Service and skills","The honest economy","The refusal of tribalism"]},
    {name:"The passing on", items:["Seek the elders","Mentor a junior","Teach the juniors' class","Tell the proverbs"]}
  ]},
  compare:{ title:"What the traditions hand the graduate", caption:"Complete the table of each tradition's charge to its young people.",
    items:[
      {p:"On being young", f:"God's presence answers the fear of age (Jeremiah 1); the youths of the cave standing firm (Qur'an 18); what the young praise today, the town becomes tomorrow."},
      {p:"On character", f:"The example in word and conduct (1 Timothy 4:12); the lowered gaze and the honest scale; the elder's word kept as a first credential."},
      {p:"On money", f:"The cheerful giver and the refused bribe; zakat and cautious debt; the open pot and the stored harvest."},
      {p:"On the nation", f:"Pray for leaders, vote honestly, serve; the believer's mutual protection; the compound's child as the town's own."},
      {p:"On passing it on", f:"Make disciples of the young (Matthew 28:19-20); teach the children the Book; the proverb told by the fire."},
      {p:"The shared promise", f:"The life given away is the life found (Matthew 16:25); the atom's weight of good is seen (Qur'an 99:7); the name outlives the person."}
    ]},
  casestudy:{ title:"The clinic Musu built on paper",
    text:"Musu finished senior high in Grand Bassa with no money for university and a certificate in science. Her five-year plan, written in the back of her exercise book and read by her old pastor, had four lines: work, save, study nursing by part-time classes, and return to serve. Line one took her to a private clinic as an aide, where she asked the senior nurse to teach her everything and was known within a year as the aide who never missed a shift. Line two was the hardest: two cousins needed school fees, and her savings were their savings. But she had shown the plan to her pastor and her imam neighbour — and when her savings were spent on the cousins, the two congregations quietly took up her nursing fees together, saying the plan was theirs now too. In her sixth year she passed her certification, and in her ninth she was the senior nurse of the clinic where she had first cleaned the floor, with two aides of her own — each of them holding a copy of her four-line plan, because she wrote it on the first page of every orientation book she gave them.",
    questions:[
      {q:"What did the written plan do that wishes could not?", a:"It made the future inspectable: elders could read it, congregations could fund a line of it, and setbacks could be measured as costs, not endings."},
      {q:"Why did Musu's savings spent on the cousins not destroy the plan?", a:"Because the plan was shared — the elders she had shown it to carried the line she could not; a plan with witnesses has more than one pair of legs."},
      {q:"What mark of true religion did the two congregations show?", a:"Service without repayment: they funded a stranger's line of the plan because the plan served the town — the clinic their own children would use."},
      {q:"Why did she copy the four lines into every orientation book?", a:"Because mentorship is the plan's last line, unspoken: the values passed on are the only part of a career that outlives it."}
    ]},
  project:{ title:"The five-year plan, witnessed",
    brief:"Write your own five-year plan and have it read and signed by an elder.",
    steps:["Write the plan on one page: work or study, one skill to certify, one standing service, a giving share, and a growth habit.","Add the year and date beside each line, and the person who can check on it.","Take the plan to an elder — parent, pastor, imam or teacher — and ask them to read it and sign it.","Ask them one question: what did you learn at my age that I should write in the margin?","Keep the plan where you will see it, and review it each year on the same date."],
    criteria:["All five lines present and dated","A real checking person named","The elder's signature and the marginal lesson","The plan kept visibly, not filed and forgotten","An annual review date set"]},
  activities:["Memorise 1 Timothy 4:12 and Qur'an 103 with their meanings","Interview a young professional of integrity on their first five years","Join or start a juniors' class — Sunday school, Qur'an lesson or homework club — and serve one term","Debate: does Liberia need its graduates more in the counties or in the capital?"],
  materials:["The Holy Bible — Jeremiah 1:4-8; Matthew 16:24-26; 28:19-20; 1 Timothy 4:12","The Holy Qur'an — 18:13-14; 49:13; 96:1; 103","Mentors, elders and young professionals of the community","An exercise book for the plan"],
  assessment:["Five-year plan project","Memorisation","Service term","Debate","Written tests"]
},

{
  grade:12, period:"VI", sem:"Two", icon:"🎓",
  title:"The Meaning of Life and Personal Commitment",
  subtitle:"Why the traditions say we exist, what a life well lived looks like, and the personal code the graduate writes and keeps",
  outcomes:["Learners can state the traditions' answers to the meaning of life, review the whole Religious and Moral Education journey from creation to commitment, and write a personal code of conduct — with accountability — that carries the values of faith into adult life."],
  objectives:[
    "State the answer each tradition gives to the question of life's meaning",
    "Review the RME journey — the spiralled themes from Grade 1 to Grade 12 — and own its core",
    "Explain the character of a life well lived: the golden rule, faithfulness in small things, perseverance",
    "Write a personal code of conduct with accountability partners",
    "Reflect on legacy — the name that remains and the trees whose shade you will not sit in"
  ],
  note:"<b>Why do I exist?</b> The Preacher searched everything under the sun and ended at the beginning: \"fear God and keep His commandments, for this is the whole duty of man\" (Ecclesiastes 12:13). Jesus said He came \"that they may have life, and have it abundantly\" (John 10:10), and summed the Law in love of God and neighbour (Matthew 22:37-40). The Qur'an states it in a sentence: \"I did not create jinn and mankind except to worship Me\" (Qur'an 51:56). The tradition answers with the <b>full life</b> — old age, children, a good name, a home that fed the stranger. All four answers agree in this: <b>the life is God's, and its meaning is found in Him and in the neighbour He commands us to love.</b>",
  study:[
    {k:"h3", t:"The Question and the Answers"},
    {k:"bul", items:[
      "**The Preacher** — he tasted wealth, wisdom, pleasure and works, and found each a vapour until he returned to the fear of God (Ecclesiastes 1-2, 12:13)",
      "**Jesus Christ** — \"I have come that they may have life, and have it abundantly\" (John 10:10); the whole Law and Prophets hang on love of God and neighbour (Matthew 22:37-40)",
      "**The Qur'an** — \"I did not create jinn and mankind except to worship Me\" (Qur'an 51:56) — worship as the whole of a life ordered to God, not the rite alone",
      "**The tradition** — the full life: a long life, children, a good name, a compound that fed the stranger and settled the case; the elder's blessing and the ancestors' welcome"
    ]},
    {k:"rule"},
    {k:"h3", t:"The Journey Reviewed"},
    {k:"p", t:"From Grade 1 to this day, the subject has walked one path:"},
    {k:"table", head:["Grades","The ground covered"], rows:[
      ["1-6","The Creator and creation; the Holy Books; God's care and my body; worship; obedience; love of neighbour"],
      ["7-9","Reconciliation; substance abuse; the individual and society; worship and offering; peace; conflict; chastity; festivals; the ministries; health"],
      ["10","The nature of God; the sources of authority; worship; marriage and family; wealth and honest gain; work and vocation"],
      ["11","Conscience and decision; justice, dignity and freedom; leadership and governance; sickness and care; death and the hereafter; science, technology and faith"],
      ["12","The traditions compared; peacebuilding; the environment; discernment of the true and false; youth and nation-building; and now — the whole, owned"]
    ]},
    {k:"p", t:"The spiral's centre has never moved: **God, the neighbour, the self — in that order**. Every theme of twelve years is one of these three, or the road between them."},
    {k:"rule"},
    {k:"h3", t:"The Character of a Life Well Lived"},
    {k:"bul", items:[
      "**The golden rule** — \"whatever you wish that others would do to you, do also to them\" (Matthew 7:12); the Hadith: none of you truly believes until he wishes for his brother what he wishes for himself",
      "**Faithfulness in small things** — \"one who is faithful in a very little is faithful also in much\" (Luke 16:10); the returned nail and the true measure",
      "**Perseverance** — \"let us not grow weary of doing good, for in due season we will reap\" (Galatians 6:9); Qur'an 103's counsel to patience",
      "**Honesty kept expensive** — the name kept when the shortcut was cheaper",
      "**Love that costs** — the Samaritan's oil and the two coins of the widow (Luke 10:33-35; Mark 12:44)",
      "**Hope** — the final chapters of every tradition end in home: the Father's house, the garden, the ancestors' welcome"
    ]},
    {k:"rule"},
    {k:"h3", t:"The Personal Code"},
    {k:"p", t:"A **personal code** is the graduate's own law, written in his own hand from the twelve years' teaching. It is short — five to eight lines — because a code kept must be memorised. Each line names a value and its practice. And a code has **accountability**: one or two named persons — an elder, a friend of the same faith — who may ask, and must be answered."},
    {k:"num", items:[
      "Write five to eight lines you can keep — each with a practice, not only a principle",
      "Write one line about God, one about money, one about the body, one about the tongue, one about the neighbour",
      "Name your accountability partners, and ask them today",
      "Review the code monthly in your own devotion, and annually with your partners",
      "Revise it when life changes — marriage, work, office — but never lower it"
    ]},
    {k:"rule"},
    {k:"h3", t:"Legacy — the Name and the Trees"},
    {k:"p", t:"\"When an old person dies, a library burns\" — the African saying remembers that a person is what they carried and passed on. The traditions' measure of a life is the name that remains: the community's verdict, spoken over the grave and in the years after. The graduate is therefore a planter of trees whose shade he will not sit in — the taught junior, the fed stranger, the settled case, the kept forest — for the last judgment scenes of all three traditions are one scene: **the accounting of what was done with what was given** (Matthew 25:31-46; Qur'an 99:7-8; the elders' question of the name)."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:[
      "Write the four answers to the meaning of life with a reference each.",
      "Summarise the RME journey in one paragraph of your own words.",
      "Recite the golden rule from the Bible and the Hadith.",
      "Write your personal code of five to eight lines, with your accountability partners named.",
      "Write your own benediction for the graduating class — four to six lines — and read it aloud."
    ]}
  ],
  focus:["The meaning of life — four answers","The spiral's centre: God, neighbour, self","The character of a life well lived","The personal code and its accountability","Legacy — the name and the trees","The final accounting"],
  terms:[
    {t:"meaning", d:"the purpose for which a thing exists", x:"The Preacher searched for meaning."},
    {t:"vanity", d:"vapour, emptiness — the Preacher's word for what passes", x:"All is vapour without God."},
    {t:"worship", d:"the honour of God with the whole of a life", x:"Worship is more than the rite."},
    {t:"golden rule", d:"doing to others as you would have them do to you", x:"The rule sums the Law and the Hadith."},
    {t:"perseverance", d:"the keeping on in good despite weariness", x:"In due season we reap."},
    {t:"integrity", d:"wholeness of character in dark and light", x:"Integrity is the code's backbone."},
    {t:"personal code", d:"a short written rule of one's own conduct", x:"The code is short enough to memorise."},
    {t:"accountability partner", d:"a named person who may ask and be answered", x:"A code with a witness is a code kept."},
    {t:"legacy", d:"what a life leaves behind for others", x:"The legacy is the name and the trees."},
    {t:"benediction", d:"a blessing spoken at parting", x:"The benediction sends the class out."},
    {t:"stewardship", d:"the faithful keeping of what is given", x:"The whole of life is a trust."},
    {t:"good name", d:"the community's honoured memory of a person", x:"A good name is better than riches."}
  ],
  facts:[
    {q:"Give the Preacher's final answer to the meaning of life.", a:"\"Fear God and keep His commandments, for this is the whole duty of man\" (Ecclesiastes 12:13)."},
    {q:"What is the Qur'an's one-sentence answer?", a:"\"I did not create jinn and mankind except to worship Me\" (Qur'an 51:56)."},
    {q:"How did Jesus sum the whole Law and the Prophets?", a:"Love God with all the heart, soul and mind, and the neighbour as oneself — on these two commandments hang all the Law and the Prophets (Matthew 22:37-40)."},
    {q:"What is the tradition's answer of the full life?", a:"Old age, children, a good name, a home that fed the stranger and settled its cases — the elder's blessing and the ancestors' welcome."},
    {q:"State the golden rule from both traditions.", a:"Matthew 7:12 — do to others whatever you wish them to do to you; the Hadith — none truly believes until he wishes for his brother what he wishes for himself."},
    {q:"Which verse makes faithfulness in little the measure of much?", a:"Luke 16:10 — faithful in a very little, faithful also in much."},
    {q:"What are the five requirements of a personal code?", a:"Five to eight keepable lines with practices; covering God, money, the body, the tongue and the neighbour; named accountability partners; monthly and annual review; revision in life's changes — never lowered."},
    {q:"What are the three traditions' final scenes, and what do they share?", a:"Matthew 25's separation of sheep and goats; Qur'an 99's scales of the atom's weight; the elders' verdict of the name — all one scene: the accounting of what was done with what was given."}
  ],
  tf:[
    {s:"The Preacher found the meaning of life in pleasure and wealth.", a:"false", why:"He tasted both and called them vapour; the answer stood at the beginning — fear God and keep His commandments (Ecclesiastes 12:13)."},
    {s:"Worship, in the Qur'an's meaning of life, is the rite alone.", a:"false", why:"Worship (ibadah) is the whole of a life ordered to God — prayer, honesty, charity and conduct included."},
    {s:"The RME journey from Grade 1 to 12 has kept one centre.", a:"true", why:"God, the neighbour, the self — in that order; every theme of twelve years is one of the three or the road between them."},
    {s:"A personal code should be long, so that every situation is covered.", a:"false", why:"A code kept must be memorised — five to eight lines with practices, not principles only; the long book is the tradition, not the code."},
    {s:"Accountability partners are optional decorations of the code.", a:"false", why:"A code with a witness is a code kept; the partner's right to ask and be answered is the code's enforcement."},
    {s:"Planting trees whose shade you will never sit in is wasted effort.", a:"false", why:"It is the traditions' picture of legacy — the taught junior, the kept forest, the fed stranger; the final accounting asks what was done with what was given (Matthew 25; Qur'an 99)."}
  ],
  apply:[
    {q:"A friend says life has no meaning, so nothing matters. Answer from the four answers.", a:"Take the despair seriously — the Preacher tasted it first; then walk the four answers: the whole duty, the abundant life, the life of worship, the full life — each gives the self something to serve beyond itself, which is what \"mattering\" always meant."},
    {q:"Write your personal code now, in this class.", a:"Five to eight lines, each with a practice — e.g. God first in the day's first minutes; the true measure even when unwatched; the body kept — no drunkenness, purity kept; the tongue — no forwarded lie, no mocking name; the neighbour — a standing share for the needy."},
    {q:"Choose your accountability partner. Who, and why?", a:"One elder and one friend of your own faith who loves you enough to ask hard questions and stable enough to keep confidences; ask them formally, and set the review dates."},
    {q:"What tree are you planting this year whose shade you will not sit in? Name it.", a:"A concrete answer: the junior you are teaching, the grove or woodlot guarded, the small fund started for a child's schooling, the case settled that was not yours."},
    {q:"Compose the benediction for your graduating class.", a:"Four to six lines in the school's own voice, asking the Creator's keeping, the strength to keep the code, the courage to plant, and the peace of the name that remains — read it aloud at the class's end."}
  ],
  sort:{ title:"The whole journey, owned", groups:[
    {name:"Answers to the meaning", items:["Fear God and keep His commandments","The abundant life","The life of worship","The full life of the tradition"]},
    {name:"The spiral's centre", items:["God","The neighbour","The self — in that order","The road between them"]},
    {name:"Character of the life", items:["The golden rule","Faithful in little","Perseverance","Costly honesty"]},
    {name:"What remains", items:["The name","The trees planted","The juniors taught","The accounting of the trust"]}
  ]},
  compare:{ title:"Four answers, one life", caption:"Complete the table of the traditions' answers to the meaning of life.",
    items:[
      {p:"The Preacher's answer", f:"Fear God and keep His commandments — the whole duty of man (Ecclesiastes 12:13), found after everything else proved vapour."},
      {p:"Christ's answer", f:"Life abundantly (John 10:10), summed in love of God and neighbour (Matthew 22:37-40)."},
      {p:"The Qur'an's answer", f:"Existence itself for worship (Qur'an 51:56) — the whole of a life ordered to God."},
      {p:"The tradition's answer", f:"The full life: length of days, children, a good name, the open compound — the elder's blessing."},
      {p:"What they share", f:"The life is God's; meaning is found in Him and in the neighbour; and the end is an accounting."},
      {p:"What they ask today", f:"The personal code, the accountability, the trees planted — the graduate's signature under twelve years."}
    ]},
  casestudy:{ title:"The reading of the exercise books",
    text:"At the end of every year, the RME teacher of a Monrovia senior-high class did one unusual thing: she asked each graduating pupil to bring the personal code written in the back of their oldest exercise book — the one from Grade 10 — and to read it aloud, with the class voting nothing and judging nothing. One year, a pupil named Flomo read his: five lines, written at fifteen, about honesty, the body, the tongue, money and his mother. He had kept four lines, he said, and failed the tongue — a forwarded rumour in Grade 11 that had hurt a classmate, and the apology that followed. He read that too. When the readings were done, the teacher said, \"Religious and Moral Education ends today for you, or it does not. The syllabus is finished. The code is not. Keep the reading — one evening a year, alone or with your partner — and the exercise book will finish by becoming true.\" Years later, former pupils still wrote to her on the same month each year, with their line kept or failed and repaired. She called these letters \"the library being built\".",
    questions:[
      {q:"Why did the teacher have the codes read from the Grade 10 book, not recopied?", a:"Because the old page is the evidence — the handwriting of the fifteen-year-old faces the person who kept or failed it; honesty needs the document."},
      {q:"What did Flomo's inclusion of the failed line and the apology teach the class?", a:"That the code is not a performance but a covenant with repair — the traditions are religions of the second chance, and a code that cannot confess cannot keep anything."},
      {q:"Explain the teacher's sentence about the exercise book \"becoming true\".", a:"That a written code is a promise half-made; it becomes true only through the years of keeping and repair — the syllabus ends, the code does not."},
      {q:"What is the library being built?", a:"The community's remembered lives — the letters as the next generation's exercise books: values passed hand to hand, the twelve years' spiral continuing past the school gate."}
    ]},
  project:{ title:"The code, signed and sent",
    brief:"Write, witness and seal your personal code of conduct.",
    steps:["Write your code of five to eight lines, each with a practice, covering God, money, the body, the tongue and the neighbour.","Ask one elder and one friend of your faith to be your accountability partners; write their names and their right to ask.","Read the code aloud to the class — with one honest account of a line you have already failed and repaired.","Seal a copy with your signature and your partners' signatures; keep it where you will see it.","Set the annual reading date and keep it — the first evening of every exam season, or your graduation month each year."],
    criteria:["Five to eight keepable lines with practices","All five subjects covered","Two partners formally named and consenting","One honest failure-and-repair told","The annual date set and kept"]},
  activities:["Recite the four answers to the meaning of life with references","Draw the journey map of RME from Grade 1 to Grade 12 on one page, from memory","Hold the class's reading of the exercise books, as in the case study","Write and read the class benediction"],
  materials:["The Holy Bible — Ecclesiastes 12:13-14; Matthew 7:12; 22:37-40; 25:31-46; John 10:10; Galatians 6:9","The Holy Qur'an — 51:56; 99; 103","The oldest exercise book","Partners and elders of the class"],
  assessment:["The personal code, signed","Journey map from memory","The reading held","Benediction written and read","Final examination"]
}

];

/* Merge the Senior High units into the single Religious & Moral Education
   curriculum, exactly as the Junior High file does: one subject, extra
   grades. This completes Grades 1–12 for Religious & Moral Education. */
if (typeof RM_CURRICULUM !== "undefined") {
  RM_CURRICULUM.push.apply(RM_CURRICULUM, RM_CURRICULUM_1012);
}
