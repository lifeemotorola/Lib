/* Elementary RELIGIOUS & MORAL EDUCATION — depth supplement, Grades 1–6.
   Same design as data-rm79-more.js and data-rm1012-more.js: each entry
   adds more course text (study blocks, inserted before the unit's
   "Assignment" heading when there is one, otherwise at the end), key terms,
   short-answer facts, true/false items and a `worked[]` bank of simple moral
   cases solved step by step {q, steps[], a}, rendered by GEN_RM as the
   "Worked moral reasoning" sheet. Units are matched by grade + period.
   Written in simple language for young learners; multi-religious; offline. */

var RM_MORE_ELEM = [

/* ================================ GRADE 1 ================================ */
{ grade:1, period:"I",
  study:[
    {k:"rule"},
    {k:"h3", t:"What God Made on Each Day"},
    {k:"table", head:["Day","What God made (Genesis 1)"], rows:[
      ["1","Light — day and night"],
      ["2","The sky"],
      ["3","Land, sea and plants"],
      ["4","Sun, moon and stars"],
      ["5","Fish and birds"],
      ["6","Land animals and people"],
      ["7","God rested"]
    ]},
    {k:"p", t:"The Holy Quran also teaches that God created the heavens and the earth in **six days** (Quran 7:54)."},
    {k:"rule"},
    {k:"h3", t:"Taking Care of What God Made"},
    {k:"bul", items:["Do not throw rubbish on the ground","Give water to plants","Be kind to animals","Keep your body clean","Say **thank you** to God every day"]}
  ],
  terms:[
    {t:"rest", d:"to stop working and be quiet", x:"God rested on the seventh day."},
    {t:"light", d:"what helps us to see", x:"God made light on the first day."},
    {t:"care", d:"to look after something", x:"We care for our plants."},
    {t:"rubbish", d:"dirty things we throw away", x:"Put rubbish in the bin."},
    {t:"day", d:"the time when the sun shines", x:"God made day and night."},
    {t:"night", d:"the dark time when we sleep", x:"The moon shines at night."}
  ],
  facts:[
    {q:"What did God make on the first day?", a:"Light — day and night."},
    {q:"What did God do on the seventh day?", a:"He rested."},
    {q:"Name two ways to care for what God made.", a:"Do not litter, and be kind to animals."},
    {q:"On which day did God make people?", a:"On the sixth day."}
  ],
  tf:[
    {s:"God made the sun, moon and stars.", a:"true", why:"God made them on the fourth day (Genesis 1:16)."},
    {s:"It is good to throw rubbish in the river.", a:"false", why:"We must care for what God made."}
  ],
  worked:[
    {q:"Your friend throws a biscuit paper on the ground. What should you do?",
     steps:["Remember: God made the earth","We must keep it clean","Kindly ask your friend to pick it up","Help put it in the bin"],
     a:"Kindly ask your friend to pick it up and put it in the bin. Keeping the earth clean thanks God."},
    {q:"A boy is throwing stones at a dog. What should you say?",
     steps:["God made the animals","Animals feel pain","Tell the boy to stop","Tell an adult if he does not stop"],
     a:"Tell him to stop, because God made the dog and it feels pain. Call an adult if he keeps going."}
  ]
},

{ grade:1, period:"II",
  study:[
    {k:"rule"},
    {k:"h3", t:"The Ten Commandments in Simple Words"},
    {k:"num", items:["Love God first","Do not make idols","Use God's name with respect","Keep God's holy day","Obey your father and mother","Do not kill","Be faithful in marriage","Do not steal","Do not tell lies","Do not want what belongs to others"]},
    {k:"p", t:"The Holy Quran also teaches: worship only God, be good to parents, do not steal and speak the truth (Quran 17:23-35)."},
    {k:"rule"},
    {k:"h3", t:"Good Words to Use Every Day"},
    {k:"bul", items:["**Please** — when you ask","**Thank you** — when you receive","**Sorry** — when you do wrong","**Excuse me** — when you pass"]}
  ],
  terms:[
    {t:"idol", d:"a thing people make and wrongly worship", x:"Do not worship an idol."},
    {t:"please", d:"a polite word used when asking", x:"May I have water, please?"},
    {t:"thank you", d:"words we say when someone helps us", x:"Say thank you to your mother."},
    {t:"sorry", d:"a word we say when we do wrong", x:"I am sorry I pushed you."},
    {t:"lie", d:"words that are not true", x:"Do not tell a lie."},
    {t:"parents", d:"father and mother", x:"Obey your parents."}
  ],
  facts:[
    {q:"Which commandment tells us about our parents?", a:"Obey your father and mother."},
    {q:"Name four good words to use every day.", a:"Please, thank you, sorry and excuse me."},
    {q:"Who received the Ten Commandments from God?", a:"Moses."},
    {q:"Name two commandments about other people.", a:"Do not steal, and do not tell lies."}
  ],
  tf:[
    {s:"The Ten Commandments tell us not to steal.", a:"true", why:"\"Do not steal\" is one of them."},
    {s:"It is fine to tell a lie if nobody knows.", a:"false", why:"God sees everything, and lying is wrong."}
  ],
  worked:[
    {q:"You broke your mother's cup. What should you do?",
     steps:["Do not hide it","Tell the truth","Say sorry","Help clean up"],
     a:"Tell your mother the truth, say sorry and help clean up."},
    {q:"You see a pencil on a classmate's desk and want it. What should you do?",
     steps:["It is not yours","Remember: do not steal","Ask to borrow it","Give it back"],
     a:"Ask to borrow it and give it back. Never take it."}
  ]
},

{ grade:1, period:"III",
  study:[
    {k:"rule"},
    {k:"h3", t:"Some Things Jesus Did"},
    {k:"bul", items:["He fed 5,000 people with five loaves and two fish (John 6:1-14)","He healed the sick and made the blind see","He calmed a storm on the sea","He welcomed little children: \"Let the little children come to Me\" (Mark 10:14)"]},
    {k:"rule"},
    {k:"h3", t:"Being Like Jesus"},
    {k:"p", t:"Jesus was **kind**, **gentle** and **helpful**. We can be like Him when we share our food, help a friend who falls, and forgive people who hurt us. The Holy Quran also honours Jesus (Isa) as a great prophet born of Mary."}
  ],
  terms:[
    {t:"loaf", d:"bread baked in one piece (plural loaves)", x:"Jesus fed people with five loaves."},
    {t:"storm", d:"strong wind and heavy rain", x:"Jesus calmed the storm."},
    {t:"heal", d:"to make a sick person well", x:"Jesus healed the sick."},
    {t:"share", d:"to give part of what you have to others", x:"Share your food."},
    {t:"Mary", d:"the mother of Jesus", x:"Mary is honoured in the Bible and the Quran."},
    {t:"Isa", d:"the name of Jesus in the Holy Quran", x:"Muslims call Jesus Isa."}
  ],
  facts:[
    {q:"How many people did Jesus feed with five loaves and two fish?", a:"About 5,000."},
    {q:"What did Jesus say about little children?", a:"\"Let the little children come to Me\" (Mark 10:14)."},
    {q:"Name two ways we can be like Jesus.", a:"Share our food and help a friend who falls."},
    {q:"What is Jesus called in the Holy Quran?", a:"Isa."}
  ],
  tf:[
    {s:"Jesus welcomed little children.", a:"true", why:"Mark 10:14."},
    {s:"Jesus was unkind to sick people.", a:"false", why:"He healed and helped them."}
  ],
  worked:[
    {q:"A new child at school has no lunch. What would Jesus want you to do?",
     steps:["Jesus shared and fed the hungry","The child is hungry","Share some of your lunch","Be the child's friend"],
     a:"Share your lunch and be kind, like Jesus."},
    {q:"A classmate laughs at you. How can you be gentle like Jesus?",
     steps:["Do not fight back","Stay calm","Forgive","Tell the teacher if it continues"],
     a:"Stay calm, forgive and tell the teacher if the laughing continues."}
  ]
},

{ grade:1, period:"IV",
  study:[
    {k:"rule"},
    {k:"h3", t:"Stories of the Prophet's Kindness"},
    {k:"bul", items:["He was called **Al-Amin**, the Trustworthy, because he always told the truth","He was kind to orphans because he was an orphan too","He was gentle with animals and told people to give them water","He smiled at people and said smiling is charity"]},
    {k:"rule"},
    {k:"h3", t:"Muslim Greetings"},
    {k:"p", t:"Muslims greet each other with **As-salamu alaykum**, which means \"Peace be upon you\". The answer is **Wa alaykum as-salam**, \"And upon you be peace\". Christians and Muslims in Liberia greet each other with respect."}
  ],
  terms:[
    {t:"Al-Amin", d:"\"the Trustworthy\", a name for Prophet Mohammed", x:"People called him Al-Amin."},
    {t:"As-salamu alaykum", d:"the Muslim greeting \"Peace be upon you\"", x:"She said As-salamu alaykum."},
    {t:"smile", d:"a happy look on the face", x:"A smile is charity."},
    {t:"charity", d:"a kind gift or act for others", x:"Giving food is charity."},
    {t:"Makkah", d:"the city where Prophet Mohammed was born", x:"He was born in Makkah."},
    {t:"greeting", d:"friendly words said when people meet", x:"Say a greeting to your teacher."}
  ],
  facts:[
    {q:"Why was Prophet Mohammed called Al-Amin?", a:"Because he always told the truth and could be trusted."},
    {q:"What does As-salamu alaykum mean?", a:"Peace be upon you."},
    {q:"Where was Prophet Mohammed born?", a:"In Makkah."},
    {q:"Why was the Prophet kind to orphans?", a:"Because he was an orphan too."}
  ],
  tf:[
    {s:"The Prophet taught that smiling is charity.", a:"true", why:"This is a Hadith."},
    {s:"The Prophet was cruel to animals.", a:"false", why:"He told people to be kind to animals."}
  ],
  worked:[
    {q:"A Muslim classmate greets you with As-salamu alaykum. How can you answer?",
     steps:["Know the meaning: peace be upon you","Smile","Answer kindly: Wa alaykum as-salam, or good morning"],
     a:"Smile and answer kindly. Greeting each other with respect builds friendship."},
    {q:"You found money that fell from a friend's bag. What would a trustworthy person do?",
     steps:["The money is not yours","Remember Al-Amin","Give it back to your friend"],
     a:"Give it back. Being trustworthy pleases God."}
  ]
},

{ grade:1, period:"V",
  study:[
    {k:"rule"},
    {k:"h3", t:"When Someone Dies"},
    {k:"bul", items:["The family is sad and cries — this is normal","Neighbours visit, bring food and pray with them","Christians and Muslims pray for comfort","We can draw a card or say kind words"]},
    {k:"p", t:"\"Blessed are those who mourn, for they will be comforted\" (Matthew 5:4). Muslims say \"To God we belong and to Him we return\" (Quran 2:156)."}
  ],
  terms:[
    {t:"sad", d:"feeling unhappy", x:"The family was sad."},
    {t:"visit", d:"to go and see someone", x:"We visited our sad neighbour."},
    {t:"pray", d:"to talk to God", x:"We pray for comfort."},
    {t:"kind words", d:"gentle words that help others feel better", x:"She said kind words to her friend."},
    {t:"return", d:"to go back", x:"To God we return."},
    {t:"grave", d:"the place where a dead person is buried", x:"They put flowers on the grave."}
  ],
  facts:[
    {q:"What do neighbours do when someone dies?", a:"They visit, bring food and pray with the family."},
    {q:"What do Muslims say when someone dies?", a:"\"To God we belong and to Him we return\" (Quran 2:156)."},
    {q:"What does Matthew 5:4 promise people who mourn?", a:"They will be comforted."},
    {q:"How can a child comfort a sad friend?", a:"Say kind words or draw a card."}
  ],
  tf:[
    {s:"It is normal to cry when someone dies.", a:"true", why:"Sadness is normal, and God comforts us."},
    {s:"We should laugh at a friend who is sad.", a:"false", why:"We should comfort them."}
  ],
  worked:[
    {q:"Your friend's grandmother died. What can you do?",
     steps:["Understand your friend is sad","Say kind words: \"I am sorry\"","Sit with your friend","Pray for the family"],
     a:"Say you are sorry, stay with your friend and pray for the family."},
    {q:"A child says, \"Crying means you are weak.\" Is that right?",
     steps:["Think: Jesus wept when His friend Lazarus died (John 11:35)","Crying shows love","Answer kindly"],
     a:"No. Even Jesus cried. Crying shows love."}
  ]
},

{ grade:1, period:"VI",
  study:[
    {k:"rule"},
    {k:"h3", t:"Where People Worship"},
    {k:"table", head:["Faith","Place of worship","Holy day"], rows:[
      ["Christians","Church","Sunday"],
      ["Muslims","Mosque","Friday"],
      ["Traditional believers","Shrine or sacred place","Special days"]
    ]},
    {k:"rule"},
    {k:"h3", t:"How to Behave in Worship"},
    {k:"bul", items:["Come on time","Wear clean clothes","Sit quietly","Listen and pray","Do not play or talk"]}
  ],
  terms:[
    {t:"shrine", d:"a holy place in traditional religion", x:"The elders prayed at the shrine."},
    {t:"Sunday", d:"the Christian holy day", x:"Christians go to church on Sunday."},
    {t:"Friday", d:"the Muslim day for congregational prayer", x:"Muslims pray together on Friday."},
    {t:"quiet", d:"making no noise", x:"Be quiet in church."},
    {t:"song", d:"words we sing", x:"We sing a song to God."},
    {t:"clean", d:"not dirty", x:"Wear clean clothes to worship."}
  ],
  facts:[
    {q:"Where do Christians worship?", a:"In a church."},
    {q:"Where do Muslims worship?", a:"In a mosque."},
    {q:"What is the Muslim day for congregational prayer?", a:"Friday."},
    {q:"Give three ways to behave in worship.", a:"Come on time, sit quietly and listen."}
  ],
  tf:[
    {s:"Christians worship in a mosque.", a:"false", why:"Christians worship in a church, and Muslims in a mosque."},
    {s:"We should be quiet in worship.", a:"true", why:"Being quiet shows respect to God."}
  ],
  worked:[
    {q:"Your little brother is playing during church. What should you do?",
     steps:["Remember: worship is for God","Whisper to him to sit quietly","Help him listen"],
     a:"Gently help him sit quietly and listen."},
    {q:"You have one coin. Should you give it as an offering?",
     steps:["God loves a cheerful giver (2 Corinthians 9:7)","Even a small gift is precious","Give happily if you want to"],
     a:"Yes, if you give happily. God values a small gift given with love."}
  ]
},

/* ================================ GRADE 2 ================================ */
{ grade:2, period:"I",
  study:[
    {k:"rule"},
    {k:"h3", t:"How God's Creation Helps Us"},
    {k:"table", head:["Creation","How it helps us"], rows:[
      ["Sun","Gives light and warmth; helps plants grow"],
      ["Rain","Gives water to drink and for crops"],
      ["Trees","Give fruit, shade, wood and clean air"],
      ["Animals","Give meat, milk, eggs and help on farms"],
      ["Rivers and sea","Give fish and water"]
    ]},
    {k:"p", t:"\"The earth is the LORD's, and everything in it\" (Psalm 24:1). \"In the creation of the heavens and the earth... are signs\" (Quran 2:164)."}
  ],
  terms:[
    {t:"warmth", d:"a gentle heat", x:"The sun gives warmth."},
    {t:"crop", d:"a plant grown for food, such as rice or cassava", x:"Rain helps the crops grow."},
    {t:"shade", d:"a cool place out of the sun", x:"We sit in the shade of the tree."},
    {t:"fruit", d:"the part of a plant we eat, such as mango or orange", x:"The tree gives fruit."},
    {t:"sign", d:"something that shows us God's greatness", x:"The stars are a sign of God."},
    {t:"cassava", d:"a root crop eaten in Liberia", x:"We plant cassava on the farm."}
  ],
  facts:[
    {q:"Give two ways trees help us.", a:"They give fruit and shade. They also give wood and clean air."},
    {q:"How does rain help us?", a:"It gives water to drink and for crops."},
    {q:"What does Psalm 24:1 say?", a:"The earth is the LORD's, and everything in it."},
    {q:"Name two foods animals give us.", a:"Milk and eggs."}
  ],
  tf:[
    {s:"Trees help give us clean air.", a:"true", why:"Trees clean the air we breathe."},
    {s:"The sun has no use.", a:"false", why:"It gives light and warmth and helps plants grow."}
  ],
  worked:[
    {q:"People are cutting down all the trees near your school. Why is that a problem?",
     steps:["Trees give shade, fruit and clean air","Without trees the ground washes away","God made trees for us to care for","Plant new trees"],
     a:"We lose shade, fruit and clean air. We should care for trees and plant new ones."},
    {q:"Name three things from creation you used today and thank God for them.",
     steps:["Water for washing","Rice for food","Sunlight to walk to school","Say a thank-you prayer"],
     a:"Water, rice and sunlight. Thank you, God, for them."}
  ]
},

{ grade:2, period:"II",
  study:[
    {k:"rule"},
    {k:"h3", t:"God Keeps His Promises"},
    {k:"p", t:"God promised Noah He would never again flood the whole earth, and He gave the **rainbow** as a sign (Genesis 9:13). God always keeps His promises."},
    {k:"rule"},
    {k:"h3", t:"Keeping My Promises"},
    {k:"bul", items:["Think before you promise","Do what you said","If you cannot, say sorry and explain","Keep promises to God, family and friends"]},
    {k:"p", t:"\"Fulfil every promise\" (Quran 17:34). \"Let your yes be yes\" (Matthew 5:37)."}
  ],
  terms:[
    {t:"rainbow", d:"coloured arch in the sky after rain; sign of God's promise", x:"We saw a rainbow."},
    {t:"Noah", d:"the man God saved from the flood in the ark", x:"Noah built an ark."},
    {t:"ark", d:"the big boat Noah built", x:"Animals went into the ark."},
    {t:"flood", d:"too much water covering the land", x:"The flood covered the earth."},
    {t:"explain", d:"to tell the reason", x:"Explain why you are late."},
    {t:"dependable", d:"someone others can trust to do what they say", x:"Be dependable."}
  ],
  facts:[
    {q:"What was the sign of God's promise to Noah?", a:"The rainbow."},
    {q:"What does Quran 17:34 say?", a:"Fulfil every promise."},
    {q:"What should you do if you cannot keep a promise?", a:"Say sorry and explain."},
    {q:"What did Noah build?", a:"An ark (a big boat)."}
  ],
  tf:[
    {s:"God always keeps His promises.", a:"true", why:"The rainbow reminds us."},
    {s:"Breaking promises is good.", a:"false", why:"We must keep our promises."}
  ],
  worked:[
    {q:"You promised to play with your friend, but another friend invites you somewhere else. What should you do?",
     steps:["You made a promise first","Keep it","Play with the other friend another time"],
     a:"Keep your first promise. People trust someone who keeps promises."},
    {q:"You promised to sweep the yard but got sick. What should you do?",
     steps:["You cannot keep it today","Tell your parent","Say sorry","Sweep when you are well"],
     a:"Tell your parent, say sorry and sweep when you are well."}
  ]
},

{ grade:2, period:"III",
  study:[
    {k:"rule"},
    {k:"h3", t:"Good and Bad Choices"},
    {k:"table", head:["Good choice","Bad choice"], rows:[
      ["Tell the truth","Tell lies"],
      ["Share","Be greedy"],
      ["Say sorry","Blame others"],
      ["Wait your turn","Push in the line"],
      ["Do your own work","Cheat"]
    ]},
    {k:"p", t:"Our **conscience** is a small voice inside that helps us know right from wrong. Listen to it."}
  ],
  terms:[
    {t:"choice", d:"deciding what to do", x:"Make a good choice."},
    {t:"blame", d:"to say someone else did wrong", x:"Do not blame others."},
    {t:"turn", d:"your time to do something", x:"Wait your turn."},
    {t:"line", d:"people standing one behind another", x:"Stand in line."},
    {t:"greedy", d:"wanting everything for yourself", x:"Do not be greedy."},
    {t:"inner voice", d:"the feeling inside that tells right from wrong", x:"Listen to your inner voice."}
  ],
  facts:[
    {q:"Give three good choices.", a:"Tell the truth, share and wait your turn."},
    {q:"What is conscience?", a:"The small voice inside that helps us know right from wrong."},
    {q:"What is the opposite of sharing?", a:"Being greedy."},
    {q:"What should you do when you make a mistake?", a:"Say sorry."}
  ],
  tf:[
    {s:"Cheating is a good choice.", a:"false", why:"Cheating is dishonest."},
    {s:"Conscience helps us know right from wrong.", a:"true", why:"It is the voice inside."}
  ],
  worked:[
    {q:"You and your sister both want the last banana. What is a good choice?",
     steps:["Do not grab it","Share it: cut it in half","Or let her have it this time"],
     a:"Share it or let her have it. Sharing is a good choice."},
    {q:"You broke a window playing ball, and nobody saw. What should you do?",
     steps:["Listen to your conscience","Tell the truth","Say sorry","Help fix it"],
     a:"Tell the truth and say sorry. God sees everything."}
  ]
},

{ grade:2, period:"IV",
  study:[
    {k:"rule"},
    {k:"h3", t:"Simple Prayers"},
    {k:"bul", items:["**Morning prayer** — \"Thank You, God, for a new day\"","**Before meals** — \"Thank You for this food\"","**At night** — \"Keep us safe while we sleep\"","**The Lord's Prayer** — taught by Jesus (Matthew 6:9-13)","**Al-Fatiha** — the opening prayer of the Quran"]},
    {k:"rule"},
    {k:"h3", t:"Acts of Charity"},
    {k:"bul", items:["Give old clothes to children who need them","Help an old person carry water","Visit a sick friend","Share your food"]}
  ],
  terms:[
    {t:"Lord's Prayer", d:"the prayer Jesus taught His disciples", x:"We said the Lord's Prayer."},
    {t:"Al-Fatiha", d:"the opening chapter of the Holy Quran, recited in prayer", x:"Muslims recite Al-Fatiha."},
    {t:"meal", d:"food eaten at one time, such as breakfast", x:"Pray before your meal."},
    {t:"charity", d:"helping people who need help", x:"Giving clothes is charity."},
    {t:"needy", d:"people who do not have enough", x:"Help the needy."},
    {t:"Amen", d:"a word at the end of prayer meaning \"so be it\"", x:"We said Amen."}
  ],
  facts:[
    {q:"Who taught the Lord's Prayer?", a:"Jesus (Matthew 6:9-13)."},
    {q:"What is Al-Fatiha?", a:"The opening chapter of the Quran, recited in prayer."},
    {q:"When can we pray?", a:"In the morning, before meals and at night. We can pray any time."},
    {q:"Give two acts of charity.", a:"Give old clothes and help an old person carry water."}
  ],
  tf:[
    {s:"We can pray only in church.", a:"false", why:"We can pray anywhere and at any time."},
    {s:"Helping an old person is charity.", a:"true", why:"Charity is helping others."}
  ],
  worked:[
    {q:"Write a short thank-you prayer for your food.",
     steps:["Talk to God","Say thank you","Name the food","Ask God to bless people with no food","End with Amen"],
     a:"\"Dear God, thank You for this rice and soup. Please feed the hungry. Amen.\""},
    {q:"An old woman is carrying a heavy bucket. What should you do?",
     steps:["See her need","Greet her politely","Offer to help carry it"],
     a:"Greet her and offer to help. Charity pleases God."}
  ]
},

{ grade:2, period:"V",
  study:[
    {k:"rule"},
    {k:"h3", t:"Parables of Jesus"},
    {k:"bul", items:["**The Lost Sheep** — a shepherd looks for one lost sheep; God loves every person (Luke 15:3-7)","**The Good Samaritan** — help anyone in need (Luke 10:25-37)","**The Mustard Seed** — small things can grow big (Matthew 13:31-32)"]},
    {k:"rule"},
    {k:"h3", t:"Easter and Christmas"},
    {k:"table", head:["Festival","What it remembers"], rows:[
      ["Christmas","The birth of Jesus in Bethlehem"],
      ["Good Friday","The death of Jesus on the cross"],
      ["Easter","Jesus rising from the dead"]
    ]}
  ],
  terms:[
    {t:"shepherd", d:"a person who looks after sheep", x:"The shepherd found the lost sheep."},
    {t:"Samaritan", d:"a person from Samaria", x:"The Good Samaritan helped a hurt man."},
    {t:"mustard seed", d:"a very small seed that grows into a big plant", x:"Faith like a mustard seed."},
    {t:"Easter", d:"the day Christians celebrate Jesus rising from the dead", x:"We sing at Easter."},
    {t:"Good Friday", d:"the day Christians remember Jesus' death", x:"Good Friday comes before Easter."},
    {t:"cross", d:"the wooden frame on which Jesus died", x:"The cross is a Christian symbol."}
  ],
  facts:[
    {q:"What does the parable of the lost sheep teach?", a:"God loves every person and looks for the lost."},
    {q:"What does Easter remember?", a:"Jesus rising from the dead."},
    {q:"What did the Good Samaritan do?", a:"He helped a hurt man on the road."},
    {q:"Where was Jesus born?", a:"In Bethlehem."}
  ],
  tf:[
    {s:"Christmas remembers the birth of Jesus.", a:"true", why:"It celebrates His birth in Bethlehem."},
    {s:"The shepherd did not care about the lost sheep.", a:"false", why:"He searched until he found it."}
  ],
  worked:[
    {q:"A child from another town falls off his bike near you. What does the Good Samaritan teach you to do?",
     steps:["He is hurt","It does not matter where he is from","Help him up","Call an adult"],
     a:"Help him and call an adult. Everyone is our neighbour."},
    {q:"A shy classmate is always alone. How can the lost sheep story help you?",
     steps:["God cares about each person","The classmate feels left out","Invite them to play"],
     a:"Invite the classmate to play. Like the shepherd, we care for the one who is left out."}
  ]
},

{ grade:2, period:"VI",
  study:[
    {k:"rule"},
    {k:"h3", t:"How We Honour the Dead in Liberia"},
    {k:"bul", items:["A **wake** — family and friends gather, sing and pray","A **funeral** service in church or mosque","**Burial** — Muslims usually bury quickly, within a day","**Remembering** — families visit graves and tell stories of the loved one"]},
    {k:"p", t:"We show **sympathy** by visiting, helping with work and praying for the family."}
  ],
  terms:[
    {t:"wake", d:"a gathering the night before a burial", x:"People sang at the wake."},
    {t:"remember", d:"to keep someone in your mind", x:"We remember Grandpa."},
    {t:"loved one", d:"a family member or friend we love", x:"She lost a loved one."},
    {t:"condolence", d:"words that show you share someone's sadness", x:"We gave our condolences."},
    {t:"respect", d:"treating someone with honour", x:"Show respect at a funeral."},
    {t:"memory", d:"something we remember", x:"Happy memories comfort us."}
  ],
  facts:[
    {q:"What is a wake?", a:"A gathering where family and friends sing and pray before the burial."},
    {q:"How quickly do Muslims usually bury the dead?", a:"Quickly, usually within a day."},
    {q:"Give two ways to show sympathy.", a:"Visit the family and help with work. Pray for them."},
    {q:"Why do families tell stories of the dead?", a:"To remember and honour them."}
  ],
  tf:[
    {s:"We should be respectful at a funeral.", a:"true", why:"It honours the dead and comforts the family."},
    {s:"Muslims usually wait many weeks to bury the dead.", a:"false", why:"They usually bury quickly."}
  ],
  worked:[
    {q:"Your neighbour's father died. Give three ways your family can help.",
     steps:["Visit and say sorry","Bring food or water","Help clean or cook","Pray for them"],
     a:"Visit, bring food and help with chores, and pray for the family."},
    {q:"Children are playing loudly at a funeral. What should you say?",
     steps:["The family is sad","Loud play is not respectful","Ask them kindly to be quiet or play away from the funeral"],
     a:"Kindly ask them to be quiet out of respect for the sad family."}
  ]
},

/* ================================ GRADE 3 ================================ */
{ grade:3, period:"I",
  study:[
    {k:"rule"},
    {k:"h3", t:"Living and Non-living Things"},
    {k:"table", head:["Living things","Non-living things"], rows:[
      ["People","Rocks"],
      ["Animals","Water"],
      ["Plants","Air"],
      ["Birds and fish","Sand"]
    ]},
    {k:"p", t:"Living things **grow**, **eat**, **breathe**, **move** and **have young**. God made both living and non-living things, and all of them are useful."},
    {k:"rule"},
    {k:"h3", t:"Being a Good Caretaker"},
    {k:"bul", items:["Plant trees","Do not burn plastic","Save water — turn off the tap","Keep creeks clean","Do not kill animals for fun"]}
  ],
  terms:[
    {t:"living thing", d:"something that grows, breathes and has young", x:"A goat is a living thing."},
    {t:"non-living thing", d:"something that does not grow or breathe", x:"A rock is a non-living thing."},
    {t:"breathe", d:"to take air in and out", x:"Animals breathe."},
    {t:"young", d:"babies of animals or people", x:"The hen has young chicks."},
    {t:"creek", d:"a small stream of water", x:"Keep the creek clean."},
    {t:"plastic", d:"a man-made material used for bags and bottles", x:"Do not burn plastic."}
  ],
  facts:[
    {q:"Name three living things.", a:"People, animals and plants."},
    {q:"Name three non-living things.", a:"Rocks, water and air."},
    {q:"What do living things do?", a:"Grow, eat, breathe, move and have young."},
    {q:"Give three ways to be a good caretaker.", a:"Plant trees, save water and keep creeks clean."}
  ],
  tf:[
    {s:"A rock is a living thing.", a:"false", why:"It does not grow or breathe."},
    {s:"God made both living and non-living things.", a:"true", why:"God created all things."}
  ],
  worked:[
    {q:"Your family burns plastic bags every evening. Why is that harmful, and what can you do?",
     steps:["Burning plastic makes bad smoke","The smoke harms our lungs and the air","God wants us to care for creation","Collect plastic and reuse it or give it for recycling"],
     a:"The smoke is harmful. Collect, reuse or recycle plastic instead."},
    {q:"You see a tap left running at school. What should a caretaker do?",
     steps:["Water is God's gift","Wasting it is wrong","Turn off the tap","Tell the teacher if it is broken"],
     a:"Turn it off and report it if it is broken. Saving water is caring for creation."}
  ]
},

{ grade:3, period:"II",
  study:[
    {k:"rule"},
    {k:"h3", t:"The Bible and the Quran Side by Side"},
    {k:"table", head:["","Holy Bible","Holy Quran"], rows:[
      ["Faith","Christianity","Islam"],
      ["Parts","66 books: Old and New Testament","114 surahs"],
      ["First part","Genesis","Al-Fatiha"],
      ["Language first written","Hebrew and Greek","Arabic"],
      ["Place read","Church and home","Mosque and home"]
    ]},
    {k:"rule"},
    {k:"h3", t:"How to Treat Holy Books"},
    {k:"bul", items:["Keep them clean and in a safe place","Do not throw them on the floor","Wash your hands before touching the Quran (Muslim practice)","Never tear or mock any holy book"]}
  ],
  terms:[
    {t:"Genesis", d:"the first book of the Bible", x:"Genesis tells the creation story."},
    {t:"Arabic", d:"the language the Quran was first given in", x:"The Quran was revealed in Arabic."},
    {t:"Hebrew", d:"the language most of the Old Testament was written in", x:"The Old Testament was written in Hebrew."},
    {t:"respect", d:"treating something as special and valuable", x:"Treat holy books with respect."},
    {t:"Psalms", d:"the book of songs and prayers in the Bible", x:"Psalm 23 is loved by many."},
    {t:"mock", d:"to laugh at in an unkind way", x:"Never mock a holy book."}
  ],
  facts:[
    {q:"How many books are in the Bible?", a:"66."},
    {q:"How many surahs are in the Quran?", a:"114."},
    {q:"What is the first surah of the Quran?", a:"Al-Fatiha."},
    {q:"Give two ways to treat holy books with respect.", a:"Keep them clean and never throw them on the floor."}
  ],
  tf:[
    {s:"The Quran was first given in Arabic.", a:"true", why:"It was revealed in Arabic."},
    {s:"It is fine to tear pages from a holy book.", a:"false", why:"Holy books must be respected."}
  ],
  worked:[
    {q:"A boy throws a friend's Quran on the floor as a joke. What should you do?",
     steps:["Holy books must be respected","Pick it up gently","Tell the boy kindly it hurts your friend","Say sorry to your friend"],
     a:"Pick it up gently, explain that holy books must be respected and comfort your friend."},
    {q:"How can you find John 3:16 in the Bible?",
     steps:["Find the book of John in the New Testament","Go to chapter 3","Find verse 16"],
     a:"Book John, chapter 3, verse 16."}
  ]
},

{ grade:3, period:"III",
  study:[
    {k:"rule"},
    {k:"h3", t:"Prayer Positions"},
    {k:"table", head:["Position","Who uses it","Meaning"], rows:[
      ["Kneeling","Christians","Humility before God"],
      ["Standing","Christians and Muslims","Respect and readiness"],
      ["Bowing (ruku)","Muslims","Honouring God"],
      ["Prostrating (sujud)","Muslims","Complete surrender to God"],
      ["Lifting hands","Christians and Muslims","Praise and asking God"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Serving God by Serving Others"},
    {k:"p", t:"We worship God with **personal service**: sweeping the church or mosque, helping in the choir, helping old people and taking care of younger children. \"Whatever you did for the least of these... you did for Me\" (Matthew 25:40)."}
  ],
  terms:[
    {t:"kneel", d:"to rest on your knees", x:"We kneel to pray."},
    {t:"ruku", d:"bowing in Muslim prayer", x:"Ruku comes after standing."},
    {t:"sujud", d:"putting the forehead on the ground in Muslim prayer", x:"Sujud shows surrender to God."},
    {t:"surrender", d:"to give yourself completely", x:"Prayer is surrender to God."},
    {t:"choir", d:"a group that sings in worship", x:"She sings in the choir."},
    {t:"personal service", d:"helping with your own hands and time", x:"Sweeping the church is personal service."}
  ],
  facts:[
    {q:"Name three prayer positions.", a:"Kneeling, standing and prostrating. Bowing and lifting hands are others."},
    {q:"What does sujud mean?", a:"Putting the forehead on the ground to show surrender to God."},
    {q:"What does Matthew 25:40 teach?", a:"Helping others is serving God."},
    {q:"Give two kinds of personal service.", a:"Sweeping the place of worship and helping old people."}
  ],
  tf:[
    {s:"Serving others is one way to worship God.", a:"true", why:"Matthew 25:40."},
    {s:"Muslims do not bow in prayer.", a:"false", why:"They bow (ruku) and prostrate (sujud)."}
  ],
  worked:[
    {q:"Plan one act of personal service you can do this week.",
     steps:["Choose a need: the church or mosque yard is dirty","Ask permission","Sweep on Saturday","Invite a friend"],
     a:"Sweep the yard of the church or mosque with a friend on Saturday, as service to God."},
    {q:"Why do people use different prayer positions?",
     steps:["Each faith has its own ways","Each position shows respect or humility","God looks at the heart"],
     a:"Positions show respect and humility, but God looks most at the heart."}
  ]
},

{ grade:3, period:"IV",
  study:[
    {k:"rule"},
    {k:"h3", t:"Special Services"},
    {k:"table", head:["Service","Faith","What happens"], rows:[
      ["Baptism","Christian","A person is washed with water as a sign of new life"],
      ["Wedding","All","A man and woman are joined in marriage"],
      ["Naming ceremony","All","A baby is given a name and blessed"],
      ["Eid prayer","Muslim","Muslims pray together at the end of Ramadan"],
      ["Harvest thanksgiving","All","Thanks to God for the crops"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Helpers in a Service"},
    {k:"bul", items:["**Pastor or imam** — leads the service","**Usher** — welcomes people and shows them seats","**Choir** — leads singing","**Muezzin** — calls Muslims to prayer"]}
  ],
  terms:[
    {t:"wedding", d:"a ceremony where two people marry", x:"The wedding was in church."},
    {t:"naming ceremony", d:"a ceremony to give a baby a name", x:"We attended a naming ceremony."},
    {t:"Eid", d:"a Muslim festival", x:"Eid comes after Ramadan."},
    {t:"harvest", d:"gathering the crops", x:"We thanked God for the harvest."},
    {t:"muezzin", d:"the person who calls Muslims to prayer", x:"The muezzin gave the call."},
    {t:"ceremony", d:"a special event with set actions", x:"The ceremony began with prayer."}
  ],
  facts:[
    {q:"What happens at a naming ceremony?", a:"A baby is given a name and blessed."},
    {q:"What does an usher do?", a:"Welcomes people and shows them seats."},
    {q:"Who calls Muslims to prayer?", a:"The muezzin."},
    {q:"What is harvest thanksgiving?", a:"A service thanking God for the crops."}
  ],
  tf:[
    {s:"Baptism uses water.", a:"true", why:"Water is a sign of new life."},
    {s:"The usher leads the sermon.", a:"false", why:"The pastor or imam preaches. The usher welcomes people."}
  ],
  worked:[
    {q:"You are chosen to be an usher. What will you do?",
     steps:["Arrive early","Greet people with a smile","Show them to seats","Keep order quietly"],
     a:"Come early, greet people, seat them and keep order. That is service to God."},
    {q:"Your family is invited to a Muslim friend's naming ceremony. How should you behave?",
     steps:["Dress neatly","Greet the family","Sit quietly during prayers","Congratulate them"],
     a:"Dress neatly, be quiet during prayers and congratulate the family respectfully."}
  ]
},

{ grade:3, period:"V",
  study:[
    {k:"rule"},
    {k:"h3", t:"Steps to Solve a Quarrel — STOP"},
    {k:"table", head:["Letter","Step"], rows:[
      ["S","Stop and calm down"],
      ["T","Talk and take turns listening"],
      ["O","Offer ideas to solve it"],
      ["P","Pick the best idea and shake hands"]
    ]},
    {k:"rule"},
    {k:"h3", t:"A Quarrel in the Bible"},
    {k:"p", t:"Abraham and Lot's workers quarrelled over land. Abraham said, \"Let there be no quarrel between us\" and let Lot choose first (Genesis 13:8-9). Being generous ended the fight."}
  ],
  terms:[
    {t:"calm down", d:"to become quiet and less angry", x:"Calm down before you talk."},
    {t:"take turns", d:"to do something one after the other", x:"Take turns speaking."},
    {t:"idea", d:"a thought or plan", x:"Offer an idea."},
    {t:"generous", d:"willing to give and share", x:"Abraham was generous."},
    {t:"Lot", d:"Abraham's nephew", x:"Lot chose the green land."},
    {t:"shake hands", d:"to hold hands as a sign of friendship or agreement", x:"They shook hands."}
  ],
  facts:[
    {q:"What does STOP stand for?", a:"Stop and calm down; Talk and take turns; Offer ideas; Pick the best idea."},
    {q:"How did Abraham end the quarrel with Lot?", a:"He let Lot choose the land first."},
    {q:"Why should we calm down first?", a:"Angry people say and do things that make quarrels worse."},
    {q:"Who can help if we cannot solve a quarrel?", a:"A teacher, parent or elder."}
  ],
  tf:[
    {s:"Abraham fought Lot to get the best land.", a:"false", why:"He let Lot choose first."},
    {s:"Listening helps solve quarrels.", a:"true", why:"Listening helps us understand each other."}
  ],
  worked:[
    {q:"Two friends both want the swing. Use STOP to solve it.",
     steps:["S: both stop pulling","T: each says why they want it","O: ideas — take turns, count to 50","P: agree to take turns and shake hands"],
     a:"They take turns on the swing, and both are happy."},
    {q:"Your brother took your pen without asking. How can you solve it without fighting?",
     steps:["Calm down","Say: \"I feel upset when you take my pen without asking\"","Listen to him","Agree he will ask next time"],
     a:"Speak calmly, listen and agree that he will ask next time."}
  ]
},

{ grade:3, period:"VI",
  study:[
    {k:"rule"},
    {k:"h3", t:"The Life Cycle"},
    {k:"table", head:["Living thing","Life cycle"], rows:[
      ["Plant","Seed → seedling → plant → flower → fruit and seed → dies"],
      ["Chicken","Egg → chick → hen → lays eggs → dies"],
      ["Person","Baby → child → teenager → adult → old age → death"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Leaving a Good Legacy"},
    {k:"p", t:"When people die, we remember how they lived. A good person leaves a **legacy** of kindness, honesty and help. \"A good name is better than riches\" (Proverbs 22:1)."}
  ],
  terms:[
    {t:"life cycle", d:"the stages a living thing goes through from birth to death", x:"The chicken's life cycle begins with an egg."},
    {t:"seedling", d:"a young plant", x:"The seedling grew tall."},
    {t:"stage", d:"one step in a process", x:"Childhood is a stage of life."},
    {t:"adult", d:"a grown-up person", x:"Children grow into adults."},
    {t:"old age", d:"the last stage of life", x:"Grandpa is in old age."},
    {t:"good name", d:"being known for good behaviour", x:"A good name is better than riches."}
  ],
  facts:[
    {q:"Give the life cycle of a person.", a:"Baby, child, teenager, adult, old age, death."},
    {q:"Give the life cycle of a chicken.", a:"Egg, chick, hen, lays eggs, dies."},
    {q:"What is a legacy?", a:"What people remember about how we lived."},
    {q:"What does Proverbs 22:1 teach?", a:"A good name is better than riches."}
  ],
  tf:[
    {s:"All living things die.", a:"true", why:"Death is part of every life cycle."},
    {s:"A good name is less important than money.", a:"false", why:"Proverbs 22:1 says it is better than riches."}
  ],
  worked:[
    {q:"What would you like people to remember about you? Plan your legacy.",
     steps:["Choose values: kindness and honesty","Do one kind act each day","Always tell the truth","Help at home and school"],
     a:"\"I want to be remembered as kind and honest, so I will help someone and tell the truth every day.\""},
    {q:"Put these in order: adult, baby, old age, child, teenager.",
     steps:["Start with birth: baby","Then child","Then teenager","Then adult","Then old age"],
     a:"Baby, child, teenager, adult, old age."}
  ]
},

/* ================================ GRADE 4 ================================ */
{ grade:4, period:"I",
  study:[
    {k:"rule"},
    {k:"h3", t:"Everyone Has Gifts"},
    {k:"table", head:["Kind of gift","Examples"], rows:[
      ["Body","Running, dancing, farming, building"],
      ["Mind","Mathematics, reading, remembering, solving problems"],
      ["Heart","Kindness, patience, making peace"],
      ["Creative","Drawing, singing, sewing, storytelling"]
    ]},
    {k:"p", t:"\"I praise You because I am fearfully and wonderfully made\" (Psalm 139:14). \"We made you into nations and tribes that you may know one another\" (Quran 49:13). Being different is part of God's plan."},
    {k:"rule"},
    {k:"h3", t:"Respecting Differences"},
    {k:"bul", items:["Do not laugh at how someone looks or speaks","Include children with disabilities in games","Respect other tribes and languages","Praise others' gifts"]}
  ],
  terms:[
    {t:"gift", d:"a special ability God gives a person", x:"Singing is her gift."},
    {t:"creative", d:"able to make new things or ideas", x:"He is creative with drawing."},
    {t:"tribe", d:"a group of people with the same language and customs", x:"Liberia has sixteen tribes."},
    {t:"include", d:"to let someone join in", x:"Include everyone in the game."},
    {t:"wonderfully made", d:"made with great care and skill by God", x:"We are wonderfully made."},
    {t:"difference", d:"a way in which people are not the same", x:"Respect differences."}
  ],
  facts:[
    {q:"What does Psalm 139:14 say about us?", a:"We are fearfully and wonderfully made."},
    {q:"What does Quran 49:13 teach about nations and tribes?", a:"God made them so that people may know one another."},
    {q:"Give four kinds of gifts.", a:"Body, mind, heart and creative gifts."},
    {q:"How many tribes does Liberia have?", a:"Sixteen."}
  ],
  tf:[
    {s:"God made every person the same.", a:"false", why:"Each person is unique."},
    {s:"Children with disabilities should be included.", a:"true", why:"Every person has value before God."}
  ],
  worked:[
    {q:"Classmates will not let a boy who limps play football. What should you do?",
     steps:["Every person is wonderfully made","Leaving him out is unkind","Invite him, perhaps as goalkeeper or referee","Tell classmates to include him"],
     a:"Invite him and find a way for him to join. Everyone has value."},
    {q:"List your own gifts and how you can use them for God.",
     steps:["Think: what am I good at?","Example: singing and helping","Use singing in the choir","Use helping at home"],
     a:"\"I can sing in the choir and help my mother at home, using my gifts for God.\""}
  ]
},

{ grade:4, period:"II",
  study:[
    {k:"rule"},
    {k:"h3", t:"School Rules and God's Laws"},
    {k:"table", head:["School rule","God's law it matches"], rows:[
      ["Do not take others' things","Do not steal"],
      ["Tell the truth to teachers","Do not lie"],
      ["Respect teachers","Honour those in authority"],
      ["No fighting","Do not kill; love your neighbour"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Why Laws Help Us"},
    {k:"bul", items:["They keep us safe","They make things fair","They help us live in peace","They teach us to respect others"]},
    {k:"p", t:"The **Constitution of Liberia** is the highest law of our country. Good citizens obey just laws (Romans 13:1; Quran 4:59)."}
  ],
  terms:[
    {t:"rule", d:"an instruction about what to do or not do", x:"Follow the school rules."},
    {t:"authority", d:"people with the right to lead, such as parents, teachers and leaders", x:"Respect authority."},
    {t:"fair", d:"treating everyone equally and rightly", x:"Laws make things fair."},
    {t:"safe", d:"free from danger", x:"Traffic laws keep us safe."},
    {t:"punishment", d:"what happens when a rule is broken", x:"Breaking the law brings punishment."},
    {t:"Legislature", d:"the part of government that makes laws in Liberia", x:"The Legislature makes the laws."}
  ],
  facts:[
    {q:"Give three reasons we need laws.", a:"They keep us safe, make things fair and help us live in peace."},
    {q:"What is the highest law of Liberia?", a:"The Constitution."},
    {q:"Which commandment matches \"Do not take others' things\"?", a:"Do not steal."},
    {q:"What does Romans 13:1 teach?", a:"Obey those in authority."}
  ],
  tf:[
    {s:"Laws help people live in peace.", a:"true", why:"They make things fair and safe."},
    {s:"The Constitution is not important.", a:"false", why:"It is the highest law of Liberia."}
  ],
  worked:[
    {q:"Your class has no rule about the line at the water tap, and pupils keep pushing. Make a fair rule.",
     steps:["Problem: pushing and unfairness","Idea: form one line; first come, first served","Tell the class","Everyone obeys"],
     a:"\"Stand in one line and wait your turn.\" Rules make things fair and peaceful."},
    {q:"A friend says, \"Rules are only for when the teacher is watching.\" Answer him.",
     steps:["Rules keep us safe always","God sees always","Good character means obeying even when no one watches"],
     a:"We obey rules all the time, because God sees and rules help everyone."}
  ]
},

{ grade:4, period:"III",
  study:[
    {k:"rule"},
    {k:"h3", t:"Healing Stories"},
    {k:"bul", items:["Jesus healed ten men with leprosy; only one came back to say thank you (Luke 17:11-19)","Jesus healed a blind man, Bartimaeus (Mark 10:46-52)","Jesus raised Jairus's daughter (Mark 5:21-43)"]},
    {k:"rule"},
    {k:"h3", t:"The Prophet's Moral Teachings"},
    {k:"bul", items:["\"The best of you are those best in character\"","\"Be kind to your neighbour\"","\"Do not waste water, even at a flowing river\"","\"Remove harmful things from the road — it is charity\""]}
  ],
  terms:[
    {t:"leprosy", d:"a skin disease that made people outcasts in Bible times", x:"Jesus healed men with leprosy."},
    {t:"Bartimaeus", d:"a blind man Jesus healed", x:"Bartimaeus called out to Jesus."},
    {t:"grateful", d:"thankful", x:"Only one man was grateful."},
    {t:"character", d:"what kind of person you are inside", x:"Good character matters most."},
    {t:"harmful", d:"able to hurt", x:"Remove harmful things from the road."},
    {t:"Jairus", d:"a leader whose daughter Jesus raised", x:"Jairus begged Jesus for help."}
  ],
  facts:[
    {q:"How many men with leprosy came back to thank Jesus?", a:"Only one of the ten (Luke 17:15-16)."},
    {q:"Who was Bartimaeus?", a:"A blind man whom Jesus healed."},
    {q:"What did the Prophet say about the best people?", a:"The best are those with the best character."},
    {q:"What did the Prophet teach about water?", a:"Do not waste it, even at a flowing river."}
  ],
  tf:[
    {s:"All ten men with leprosy thanked Jesus.", a:"false", why:"Only one returned."},
    {s:"Removing harmful things from the road is charity.", a:"true", why:"The Prophet taught this."}
  ],
  worked:[
    {q:"Someone helped you with your homework. What does the story of the ten men teach you?",
     steps:["Only one man thanked Jesus","Jesus was pleased with the one who thanked Him","Say thank you to the person who helped","Thank God too"],
     a:"Be the one who comes back to say thank you. Gratitude pleases God."},
    {q:"There is broken glass on the path to school. What should you do?",
     steps:["It can hurt people","The Prophet taught that removing harm is charity","Carefully move it aside or tell an adult"],
     a:"Tell an adult or move it carefully. Protecting others is charity."}
  ]
},

{ grade:4, period:"IV",
  study:[
    {k:"rule"},
    {k:"h3", t:"Beliefs about the Hereafter"},
    {k:"table", head:["Faith","Belief"], rows:[
      ["Christianity","Believers in Jesus have eternal life with God in heaven (John 14:2-3)"],
      ["Islam","After judgment, the good enter Paradise (Jannah) and the wicked Hell (Jahannam)"],
      ["Traditional religion","The good dead join the ancestors and watch over the family"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Living Well Now"},
    {k:"p", t:"All three faiths teach that how we live today matters. We should do good, tell the truth, obey God and ask forgiveness when we do wrong."}
  ],
  terms:[
    {t:"Paradise", d:"the Islamic name for the heavenly garden (Jannah)", x:"The good will enter Paradise."},
    {t:"Jannah", d:"Paradise in Islam", x:"Muslims hope for Jannah."},
    {t:"ancestors", d:"family members who lived long ago", x:"Traditional believers honour the ancestors."},
    {t:"forgiveness", d:"when a wrong is pardoned", x:"Ask God for forgiveness."},
    {t:"good deeds", d:"kind and right actions", x:"Do good deeds every day."},
    {t:"watch over", d:"to take care of and protect", x:"The ancestors watch over the family."}
  ],
  facts:[
    {q:"What do Christians believe about the hereafter?", a:"Believers in Jesus have eternal life with God in heaven."},
    {q:"What is Jannah?", a:"Paradise in Islam."},
    {q:"What does traditional religion teach about the good dead?", a:"They join the ancestors and watch over the family."},
    {q:"What do all three faiths teach about living now?", a:"How we live matters. Do good and ask forgiveness when we do wrong."}
  ],
  tf:[
    {s:"All three faiths teach that how we live matters.", a:"true", why:"Each teaches reward for good living."},
    {s:"Jannah is the Christian word for hell.", a:"false", why:"Jannah is the Islamic word for Paradise."}
  ],
  worked:[
    {q:"A friend says, \"It doesn't matter how I live.\" What do the faiths say?",
     steps:["Christianity: we will give account to God","Islam: deeds are weighed on Judgment Day","Tradition: the good join the ancestors","All agree: our life matters"],
     a:"All three faiths teach that how we live matters, so we should live well."},
    {q:"You did something wrong yesterday. What can you do today?",
     steps:["Admit it","Say sorry to the person","Ask God for forgiveness","Do better"],
     a:"Admit it, apologise, ask God's forgiveness and do better."}
  ]
},

{ grade:4, period:"V",
  study:[
    {k:"rule"},
    {k:"h3", t:"Ways to Show Commitment"},
    {k:"table", head:["To whom","How"], rows:[
      ["God","Pray daily, attend worship, obey His word"],
      ["Family","Help with chores, obey parents"],
      ["School","Come on time, do homework"],
      ["Friends","Be loyal, keep secrets, help them"],
      ["Country","Obey laws, keep the country clean"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Ruth — An Example of Commitment"},
    {k:"p", t:"Ruth refused to leave her mother-in-law Naomi: \"Where you go I will go... your God will be my God\" (Ruth 1:16). Her loyalty was rewarded, and she became the great-grandmother of King David."}
  ],
  terms:[
    {t:"loyal", d:"always faithful to someone", x:"Ruth was loyal to Naomi."},
    {t:"Ruth", d:"a woman in the Bible known for loyalty", x:"Ruth stayed with Naomi."},
    {t:"Naomi", d:"Ruth's mother-in-law", x:"Naomi returned to Bethlehem."},
    {t:"chore", d:"a small job at home", x:"Sweeping is my chore."},
    {t:"punctual", d:"on time", x:"Be punctual for school."},
    {t:"reward", d:"something good given for good behaviour", x:"Ruth's loyalty had a reward."}
  ],
  facts:[
    {q:"What did Ruth say to Naomi?", a:"\"Where you go I will go... your God will be my God\" (Ruth 1:16)."},
    {q:"Give two ways to show commitment to God.", a:"Pray daily and attend worship."},
    {q:"Give two ways to show commitment to school.", a:"Come on time and do homework."},
    {q:"Whose great-grandmother was Ruth?", a:"King David's."}
  ],
  tf:[
    {s:"Ruth left Naomi alone.", a:"false", why:"She stayed with her (Ruth 1:16)."},
    {s:"Obeying laws shows commitment to our country.", a:"true", why:"Good citizens obey just laws."}
  ],
  worked:[
    {q:"You joined the school cleaning club but now want to quit because it is hard. What should you do?",
     steps:["You made a commitment","Think of Ruth's loyalty","Keep going for the term","Talk to the teacher if it is too hard"],
     a:"Keep your commitment. If there is a real problem, talk to the teacher; don't just stop."},
    {q:"Make a weekly commitment chart.",
     steps:["God: pray morning and night","Family: wash dishes daily","School: homework each evening","Check each day"],
     a:"A chart with prayer, chores and homework, ticked each day, builds commitment."}
  ]
},

{ grade:4, period:"VI",
  study:[
    {k:"rule"},
    {k:"h3", t:"Zacchaeus — A Changed Life"},
    {k:"p", t:"Zacchaeus was a tax collector who cheated people. When Jesus visited him, he repented and said, \"I will give half my possessions to the poor, and if I cheated anyone I will pay back four times\" (Luke 19:8). This shows **repentance** means changing your actions."},
    {k:"rule"},
    {k:"h3", t:"Tawbah in Islam"},
    {k:"p", t:"Muslims turn back to God through **tawbah**: feeling sorry, stopping the sin, promising not to repeat it, and making right any wrong done to others. God says, \"Do not despair of the mercy of God\" (Quran 39:53)."}
  ],
  terms:[
    {t:"Zacchaeus", d:"a tax collector who changed after meeting Jesus", x:"Zacchaeus climbed a tree to see Jesus."},
    {t:"tax collector", d:"a person who collects taxes", x:"Zacchaeus was a tax collector."},
    {t:"tawbah", d:"turning back to God in repentance in Islam", x:"He made tawbah."},
    {t:"pay back", d:"to return what was taken", x:"Zacchaeus paid back four times."},
    {t:"despair", d:"to lose all hope", x:"Do not despair of God's mercy."},
    {t:"change", d:"to become different", x:"Repentance means change."}
  ],
  facts:[
    {q:"What did Zacchaeus promise to do?", a:"Give half his possessions to the poor and pay back four times anyone he had cheated."},
    {q:"What are the steps of tawbah?", a:"Feel sorry, stop the sin, promise not to repeat it and make right any wrong."},
    {q:"What does Quran 39:53 say?", a:"Do not despair of the mercy of God."},
    {q:"What does repentance mean?", a:"Being sorry and changing your actions."}
  ],
  tf:[
    {s:"Zacchaeus paid back the people he cheated.", a:"true", why:"Luke 19:8."},
    {s:"Repentance means saying sorry but continuing the wrong.", a:"false", why:"It means changing your actions."}
  ],
  worked:[
    {q:"Zacchaeus cheated someone of L$50. How much did he promise to pay back?",
     steps:["He promised four times","50 × 4 = 200"],
     a:"L$200. True repentance repairs the wrong, and more."},
    {q:"You took a classmate's eraser and now feel sorry. What should you do?",
     steps:["Feel sorry — you already do","Return the eraser","Say sorry","Promise not to do it again","Ask God's forgiveness"],
     a:"Return it, apologise, promise to change and ask God's forgiveness."}
  ]
},

/* ================================ GRADE 5 ================================ */
{ grade:5, period:"I",
  study:[
    {k:"rule"},
    {k:"h3", t:"The Fall in the Bible and the Quran"},
    {k:"table", head:["","Holy Bible (Genesis 3)","Holy Quran (2:35-37; 7:19-25)"], rows:[
      ["Place","Garden of Eden","The Garden"],
      ["Command","Do not eat from the tree of knowledge of good and evil","Do not approach this tree"],
      ["Tempter","The serpent","Shaytan (Satan)"],
      ["Result","Sent out of Eden; pain and death enter","Sent down to earth"],
      ["God's mercy","A promise of a Saviour (Genesis 3:15)","Adam repented and God forgave him"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Stewards of Liberia"},
    {k:"bul", items:["Protect the rainforest and animals such as the pygmy hippo","Farm without burning too much bush","Keep beaches and creeks free from rubbish","Use land and water wisely"]}
  ],
  terms:[
    {t:"Eden", d:"the garden where God placed Adam and Eve", x:"Adam and Eve lived in Eden."},
    {t:"serpent", d:"a snake", x:"The serpent tempted Eve."},
    {t:"Shaytan", d:"the Arabic name for Satan", x:"Shaytan whispered to Adam."},
    {t:"tempt", d:"to try to make someone do wrong", x:"Do not let friends tempt you."},
    {t:"rainforest", d:"a thick forest with lots of rain", x:"Liberia has rainforest."},
    {t:"pygmy hippo", d:"a small hippopotamus found in Liberia's forests", x:"We must protect the pygmy hippo."}
  ],
  facts:[
    {q:"Who tempted Adam and Eve in the Bible and in the Quran?", a:"The serpent in the Bible; Shaytan in the Quran."},
    {q:"What happened after the Fall?", a:"They were sent out of the garden, and pain and death came."},
    {q:"How does the Quran show God's mercy to Adam?", a:"Adam repented and God forgave him."},
    {q:"Give two ways to be stewards of Liberia.", a:"Protect the rainforest and keep creeks clean."}
  ],
  tf:[
    {s:"Both the Bible and the Quran tell of Adam and the garden.", a:"true", why:"Genesis 3; Quran 2 and 7."},
    {s:"Stewardship means using the earth any way we like.", a:"false", why:"Stewards care for what belongs to God."}
  ],
  worked:[
    {q:"What lesson does the Fall teach about disobedience?",
     steps:["God gave a clear command","Adam and Eve disobeyed","Disobedience brought bad results","God still showed mercy","Lesson: obey God, and repent when we fail"],
     a:"Disobedience has consequences, but God forgives those who repent."},
    {q:"Hunters kill a pygmy hippo near your village. Why is that wrong for a steward?",
     steps:["The pygmy hippo is rare","God made it","Stewards protect creation","Tell leaders and forest officers"],
     a:"It destroys a rare creature God made. Stewards protect wildlife."}
  ]
},

{ grade:5, period:"II",
  study:[
    {k:"rule"},
    {k:"h3", t:"Sincere or Hypocrite?"},
    {k:"table", head:["Sincere person","Hypocrite"], rows:[
      ["Prays and also lives kindly","Prays loudly but is unkind at home"],
      ["Gives quietly","Gives only to be seen"],
      ["Same inside and outside","Pretends to be good"]
    ]},
    {k:"p", t:"Jesus warned against hypocrisy (Matthew 6:1-6). The Prophet taught, \"Actions are judged by intentions.\""},
    {k:"rule"},
    {k:"h3", t:"Witnessing by Example"},
    {k:"p", t:"We show our faith by how we act: being honest in tests, helping others, speaking politely and keeping clean. People see our good works (Matthew 5:16)."}
  ],
  terms:[
    {t:"hypocrite", d:"a person who pretends to be good but is not", x:"Jesus warned about hypocrites."},
    {t:"intention", d:"the reason in your heart for doing something", x:"Actions are judged by intentions."},
    {t:"pretend", d:"to act as if something is true when it is not", x:"Do not pretend to be good."},
    {t:"example", d:"a way of acting that others can copy", x:"Be a good example."},
    {t:"good works", d:"kind and right actions", x:"Let people see your good works."},
    {t:"polite", d:"having good manners", x:"Speak politely."}
  ],
  facts:[
    {q:"What is a hypocrite?", a:"Someone who pretends to be good but is not."},
    {q:"What did the Prophet say about actions?", a:"Actions are judged by intentions."},
    {q:"What does Matthew 5:16 teach?", a:"Let people see your good works so they praise God."},
    {q:"Give two ways to witness by example.", a:"Be honest in tests and help others."}
  ],
  tf:[
    {s:"Giving only to be praised is sincere.", a:"false", why:"It is hypocrisy (Matthew 6:2)."},
    {s:"Our actions can show our faith.", a:"true", why:"Matthew 5:16."}
  ],
  worked:[
    {q:"A pupil prays loudly in class but bullies smaller children. Is he sincere?",
     steps:["Look at his outside: prayer","Look at his actions: bullying","Compare with Matthew 6:5 and the Hadith on intentions","Conclude"],
     a:"No. Real faith shows in kindness, not only in words."},
    {q:"How can you show your faith at school without preaching?",
     steps:["Be honest","Help classmates","Speak politely","Share"],
     a:"Your good actions show your faith."}
  ]
},

{ grade:5, period:"III",
  study:[
    {k:"rule"},
    {k:"h3", t:"Freedom with Responsibility"},
    {k:"p", t:"Liberia's Constitution gives **freedom of religion**: every person may worship as they choose. But freedom does not mean doing anything we like. We must not harm others. \"Use your freedom to serve one another in love\" (Galatians 5:13). \"There is no compulsion in religion\" (Quran 2:256)."},
    {k:"rule"},
    {k:"h3", t:"The Commandments Bring Happiness"},
    {k:"table", head:["Command","How it brings happiness"], rows:[
      ["Honour parents","Peaceful homes"],
      ["Do not steal","People trust each other"],
      ["Do not lie","Friendships grow"],
      ["Keep holy days","Rest and time with God and family"]
    ]}
  ],
  terms:[
    {t:"compulsion", d:"forcing someone to do something", x:"There is no compulsion in religion."},
    {t:"freedom", d:"the right to choose", x:"Liberia protects freedom of religion."},
    {t:"harm", d:"hurt or damage", x:"Freedom must not harm others."},
    {t:"Galatians", d:"a letter in the New Testament", x:"Galatians 5:13 speaks of freedom."},
    {t:"peaceful", d:"calm, without fighting", x:"Obedience makes a peaceful home."},
    {t:"worship", d:"showing love and honour to God", x:"We may worship freely."}
  ],
  facts:[
    {q:"What does Quran 2:256 say?", a:"There is no compulsion in religion."},
    {q:"What does Galatians 5:13 say about freedom?", a:"Use your freedom to serve one another in love."},
    {q:"Does freedom mean doing anything we like?", a:"No. We must not harm others."},
    {q:"How does \"Do not steal\" bring happiness?", a:"People can trust each other."}
  ],
  tf:[
    {s:"Liberia's Constitution protects freedom of religion.", a:"true", why:"Every person may worship as they choose."},
    {s:"Freedom means we can harm others.", a:"false", why:"Freedom comes with responsibility."}
  ],
  worked:[
    {q:"Some children tell a Muslim classmate he must go to their church. Is that right?",
     steps:["Liberia protects freedom of religion","Quran 2:256: no compulsion","Forcing is wrong","Invite kindly, but respect his choice"],
     a:"No. Each person chooses their own faith, and we respect it."},
    {q:"A boy plays loud music at midnight saying, \"It's my freedom.\" Answer him.",
     steps:["Freedom is real","But it must not harm others","Neighbours need sleep","Galatians 5:13: serve others in love"],
     a:"His freedom ends where it harms others. He should turn it down."}
  ]
},

{ grade:5, period:"IV",
  study:[
    {k:"rule"},
    {k:"h3", t:"Sacrifice Stories"},
    {k:"p", t:"God tested **Abraham (Ibrahim)** by asking him to offer his son. Abraham obeyed, and God provided a ram instead (Genesis 22; Quran 37:102-107). Muslims remember this at **Eid al-Adha**, and share meat with family, friends and the poor."},
    {k:"rule"},
    {k:"h3", t:"Giving Wisely"},
    {k:"table", head:["Kind","Tradition","Example"], rows:[
      ["Tithe (one tenth)","Christian","From L$500, give L$50"],
      ["Zakat (2.5% of savings)","Muslim","From L$10,000 savings, give L$250"],
      ["Sadaqah / free offering","Both","Any amount, any time"],
      ["Harvest share","Traditional","First crops shared"]
    ]}
  ],
  terms:[
    {t:"ram", d:"a male sheep", x:"God provided a ram."},
    {t:"Eid al-Adha", d:"the Muslim festival remembering Abraham's sacrifice", x:"We share meat at Eid al-Adha."},
    {t:"test", d:"a trial to show faith or ability", x:"God tested Abraham."},
    {t:"sadaqah", d:"voluntary charity in Islam", x:"A smile can be sadaqah."},
    {t:"one tenth", d:"one part out of ten", x:"A tithe is one tenth."},
    {t:"percent", d:"parts out of one hundred", x:"Zakat is 2.5 percent."}
  ],
  facts:[
    {q:"What did God provide instead of Abraham's son?", a:"A ram."},
    {q:"Which festival remembers Abraham's sacrifice?", a:"Eid al-Adha."},
    {q:"What is the tithe on L$500?", a:"L$50."},
    {q:"What is zakat on L$10,000 of savings?", a:"L$250 (2.5%)."}
  ],
  tf:[
    {s:"Abraham's story is in the Bible and the Quran.", a:"true", why:"Genesis 22; Quran 37."},
    {s:"A tithe is half of your money.", a:"false", why:"It is one tenth."}
  ],
  worked:[
    {q:"Garmai earns L$800 from selling. What is her tithe, and how much is left?",
     steps:["Tithe = 800 ÷ 10 = 80","Left = 800 − 80 = 720"],
     a:"Tithe L$80; L$720 left."},
    {q:"Musa has L$20,000 in savings for a year. What zakat does he give?",
     steps:["Zakat = 2.5% = 2.5 ÷ 100","20,000 × 2.5 ÷ 100 = 500"],
     a:"L$500, which goes to help the poor."}
  ]
},

{ grade:5, period:"V",
  study:[
    {k:"rule"},
    {k:"h3", t:"Faith in Liberia's History"},
    {k:"bul", items:["**Lott Carey** — a Black American Baptist missionary who came in 1821 and helped start churches and schools","Muslim traders and scholars brought Islam into Liberia through the Mandingo and Vai peoples","The Vai people created their own writing, the **Vai script**, around 1833","Many schools and hospitals in Liberia were started by churches and Muslim groups"]},
    {k:"rule"},
    {k:"h3", t:"What Pastors and Imams Do"},
    {k:"table", head:["Pastor","Imam"], rows:[
      ["Leads church service","Leads prayers in the mosque"],
      ["Preaches from the Bible","Gives the khutbah from the Quran"],
      ["Baptises and marries people","Performs nikah (marriage) and naming"],
      ["Visits the sick","Visits the sick"]
    ]}
  ],
  terms:[
    {t:"Lott Carey", d:"an early Baptist missionary to Liberia", x:"Lott Carey came in 1821."},
    {t:"Vai script", d:"a writing system invented by the Vai people", x:"The Vai script is unique to Liberia."},
    {t:"Mandingo", d:"a people of Liberia, many of whom are Muslim", x:"Mandingo traders spread Islam."},
    {t:"trader", d:"a person who buys and sells", x:"Traders travelled far."},
    {t:"nikah", d:"the Islamic marriage contract", x:"The imam performed the nikah."},
    {t:"khutbah", d:"the sermon in the mosque on Friday", x:"The imam gave the khutbah."}
  ],
  facts:[
    {q:"Who was Lott Carey?", a:"An early Baptist missionary who came to Liberia in 1821."},
    {q:"How did Islam come into Liberia?", a:"Through Muslim traders and scholars, among the Mandingo and Vai."},
    {q:"What is the Vai script?", a:"A writing system created by the Vai people around 1833."},
    {q:"Name two duties shared by pastors and imams.", a:"Leading worship and visiting the sick."}
  ],
  tf:[
    {s:"Churches and Muslim groups started schools in Liberia.", a:"true", why:"Many schools have religious founders."},
    {s:"Imams give the khutbah.", a:"true", why:"The imam preaches the Friday khutbah."}
  ],
  worked:[
    {q:"Compare how a pastor and an imam serve their community.",
     steps:["Pastor: preaching, baptism, weddings, visits","Imam: prayers, khutbah, nikah, visits","Shared: teaching and caring"],
     a:"Both teach their faith and care for people. Only some duties differ."},
    {q:"Why do religious leaders build schools?",
     steps:["They value knowledge","Faith teaches care for others","Education helps people and the nation"],
     a:"They believe learning and care for others are part of serving God."}
  ]
},

{ grade:5, period:"VI",
  study:[
    {k:"rule"},
    {k:"h3", t:"Stereotypes Cause Conflict"},
    {k:"p", t:"A **stereotype** is an unfair idea about a whole group, such as \"All people from that tribe are lazy.\" Stereotypes are false and cause anger. Judge each person by their actions (Quran 49:11-13; James 2:1)."},
    {k:"rule"},
    {k:"h3", t:"Ways to Settle a Conflict"},
    {k:"table", head:["Method","Who decides"], rows:[
      ["Negotiation","The two sides talk and agree"],
      ["Mediation","A helper guides them, but they decide"],
      ["Arbitration","A judge or elder listens and decides"]
    ]}
  ],
  terms:[
    {t:"unfair", d:"not right or equal", x:"Stereotypes are unfair."},
    {t:"judge", d:"a person who decides a case", x:"The judge decided."},
    {t:"helper", d:"a person who helps others solve a problem", x:"The helper was a mediator."},
    {t:"anger", d:"a strong feeling of being upset", x:"Stereotypes cause anger."},
    {t:"group", d:"a number of people together", x:"Do not judge a whole group."},
    {t:"elder", d:"an older, respected person in the community", x:"The elder settled the case."}
  ],
  facts:[
    {q:"What is a stereotype?", a:"An unfair idea about a whole group."},
    {q:"Who decides in mediation?", a:"The two sides, with a helper guiding them."},
    {q:"Who decides in arbitration?", a:"A judge or elder."},
    {q:"How should we judge people?", a:"By their own actions, not by their group."}
  ],
  tf:[
    {s:"Stereotypes are fair.", a:"false", why:"They judge a whole group unfairly."},
    {s:"In arbitration a judge or elder decides.", a:"true", why:"That is arbitration."}
  ],
  worked:[
    {q:"A pupil says, \"All Kru people are ...\" (an insult). What should you say?",
     steps:["It is a stereotype","It is unfair and hurtful","Every person is different","Quran 49:11; James 2:1"],
     a:"That is unfair. Judge each person by what they do, not their tribe."},
    {q:"Two market women argue over a table spot. Which method would you suggest, and why?",
     steps:["Try negotiation first","If they fail, mediation by the market chairlady","If still no agreement, arbitration by the town chief"],
     a:"Start with talking. Then use a mediator, then an elder to decide."}
  ]
},

/* ================================ GRADE 6 ================================ */
{ grade:6, period:"I",
  study:[
    {k:"rule"},
    {k:"h3", t:"Faith and Science Ask Different Questions"},
    {k:"table", head:["Science asks","Faith asks"], rows:[
      ["How did the universe form?","Who made the universe?"],
      ["How long ago?","Why are we here?"],
      ["What is it made of?","How should we live?"]
    ]},
    {k:"p", t:"Many scientists were believers. The **Big Bang** idea was first proposed by **Georges Lemaître**, a Catholic priest. Muslim scholars such as **Ibn al-Haytham** studied light and helped begin the scientific method."},
    {k:"rule"},
    {k:"h3", t:"Traditional Creation Stories"},
    {k:"p", t:"Many Liberian peoples have their own stories of how the Creator made the world and people. These stories teach respect for the Creator, the land and one another."}
  ],
  terms:[
    {t:"scientist", d:"a person who studies the world by observing and testing", x:"The scientist studied the stars."},
    {t:"Georges Lemaître", d:"the priest-scientist who first proposed the Big Bang idea", x:"Lemaître was a priest."},
    {t:"Ibn al-Haytham", d:"a Muslim scholar who studied light", x:"Ibn al-Haytham studied how we see."},
    {t:"observe", d:"to watch carefully", x:"Scientists observe."},
    {t:"question", d:"something we ask to learn", x:"Faith and science ask different questions."},
    {t:"story", d:"an account of events", x:"Each people has a creation story."}
  ],
  facts:[
    {q:"Who first proposed the Big Bang idea?", a:"Georges Lemaître, a Catholic priest."},
    {q:"Give one question science asks and one faith asks.", a:"Science: how did the universe form? Faith: who made it and why?"},
    {q:"Who was Ibn al-Haytham?", a:"A Muslim scholar who studied light and helped begin the scientific method."},
    {q:"What do traditional creation stories teach?", a:"Respect for the Creator, the land and one another."}
  ],
  tf:[
    {s:"Some scientists were religious believers.", a:"true", why:"Lemaître and Ibn al-Haytham are examples."},
    {s:"Faith and science always ask exactly the same questions.", a:"false", why:"Science asks how; faith asks who and why."}
  ],
  worked:[
    {q:"A friend says, \"You must choose science or God.\" Answer him.",
     steps:["Science asks how","Faith asks who and why","Many scientists believed in God (Lemaître, Ibn al-Haytham)","So both can be held together"],
     a:"No. They answer different questions, and many scientists have been believers."},
    {q:"Sort these questions into science or faith: What is the sun made of? Why should I be kind? How old is the earth? Who made the stars?",
     steps:["What is the sun made of? — science","Why should I be kind? — faith","How old is the earth? — science","Who made the stars? — faith"],
     a:"Science: sun and age of the earth. Faith: kindness and who made the stars."}
  ]
},

{ grade:6, period:"II",
  study:[
    {k:"rule"},
    {k:"h3", t:"Ceremonies of Commitment"},
    {k:"table", head:["Ceremony","Faith","Meaning"], rows:[
      ["Baptism","Christian","New life in Christ"],
      ["Confirmation","Christian","Personally confirming one's faith"],
      ["Shahadah","Muslim","Declaring faith in one God and His Messenger"],
      ["Naming ceremony (Aqiqah)","Muslim","Welcoming and naming a baby"],
      ["Initiation (Poro and Sande)","Traditional","Entering adult life and duties"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Daniel's Commitment"},
    {k:"p", t:"Daniel kept praying to God three times a day even when the law forbade it. He was thrown into the lions' den, but God protected him (Daniel 6). Commitment means staying faithful when it is hard."}
  ],
  terms:[
    {t:"confirmation", d:"a Christian ceremony where a young person confirms their faith", x:"She had her confirmation."},
    {t:"shahadah", d:"the Muslim declaration of faith", x:"He said the shahadah."},
    {t:"Aqiqah", d:"the Muslim ceremony for a newborn baby", x:"They held an Aqiqah."},
    {t:"Poro", d:"a traditional society for boys and men", x:"The Poro teaches duties."},
    {t:"Sande", d:"a traditional society for girls and women", x:"The Sande trains girls."},
    {t:"Daniel", d:"a prophet who stayed faithful in the lions' den", x:"Daniel prayed three times a day."}
  ],
  facts:[
    {q:"What is the shahadah?", a:"The Muslim declaration of faith in one God and His Messenger."},
    {q:"What are Poro and Sande?", a:"Traditional societies that prepare boys and girls for adult life."},
    {q:"Why was Daniel thrown to the lions?", a:"He kept praying to God when the law forbade it."},
    {q:"What does confirmation mean?", a:"A young person personally confirms their faith."}
  ],
  tf:[
    {s:"Daniel stopped praying because of the law.", a:"false", why:"He kept praying (Daniel 6:10)."},
    {s:"Aqiqah is a Muslim ceremony for a newborn.", a:"true", why:"The baby is welcomed and named."}
  ],
  worked:[
    {q:"Friends laugh at you for praying before lunch. What does Daniel teach?",
     steps:["Daniel stayed faithful under pressure","Laughter is small pressure","Keep praying quietly","Be kind to the friends"],
     a:"Keep praying and stay kind. Commitment means staying faithful even when mocked."},
    {q:"Compare baptism and the shahadah.",
     steps:["Baptism: water; new life in Christ","Shahadah: words; faith in one God and His Messenger","Both: a public sign of faith"],
     a:"Both are public signs of commitment to God, in different ways."}
  ]
},

{ grade:6, period:"III",
  study:[
    {k:"rule"},
    {k:"h3", t:"Active Listening"},
    {k:"num", items:["Look at the speaker","Do not interrupt","Nod to show you understand","Repeat what you heard: \"You feel ... because ...\"","Ask questions to understand better"]},
    {k:"rule"},
    {k:"h3", t:"Qualities of a Good Mediator"},
    {k:"bul", items:["**Impartial** — does not take sides","**Patient** — gives time to both","**Trustworthy** — keeps matters private","**Wise** — helps find fair ideas","**Calm** — does not get angry"]}
  ],
  terms:[
    {t:"interrupt", d:"to stop someone while they are speaking", x:"Do not interrupt."},
    {t:"nod", d:"to move your head up and down to show agreement", x:"She nodded as he spoke."},
    {t:"repeat", d:"to say again", x:"Repeat what you heard."},
    {t:"patient", d:"able to wait calmly", x:"A mediator is patient."},
    {t:"trustworthy", d:"able to be trusted", x:"A mediator must be trustworthy."},
    {t:"take sides", d:"to support one person against another", x:"A mediator does not take sides."}
  ],
  facts:[
    {q:"Give four steps of active listening.", a:"Look at the speaker, do not interrupt, nod and repeat what you heard."},
    {q:"What does impartial mean?", a:"Not taking sides."},
    {q:"Give three qualities of a good mediator.", a:"Impartial, patient and trustworthy."},
    {q:"Why should a mediator stay calm?", a:"Anger makes the conflict worse."}
  ],
  tf:[
    {s:"A good mediator takes the side of his friend.", a:"false", why:"A mediator must be impartial."},
    {s:"Repeating what you heard shows active listening.", a:"true", why:"It shows you understood."}
  ],
  worked:[
    {q:"You are asked to mediate between two classmates who argued over a lost book. Show the steps.",
     steps:["Meet both calmly","Each speaks without interruption","Repeat each side","Ask for ideas: search together or share the cost","Help them agree and shake hands"],
     a:"Listen to both, stay impartial and guide them to their own fair agreement."},
    {q:"Rewrite as active listening: \"That's not true, you're lying!\"",
     steps:["Do not accuse","Repeat what you heard","Ask a question"],
     a:"\"You feel I took your book because it was on my desk. Can you tell me more?\""}
  ]
},

{ grade:6, period:"IV",
  study:[
    {k:"rule"},
    {k:"h3", t:"Parts of a Church and a Mosque"},
    {k:"table", head:["Church","Mosque"], rows:[
      ["Altar — table for Communion","Mihrab — niche showing the direction of Makkah"],
      ["Pulpit — where the pastor preaches","Minbar — steps where the imam gives the khutbah"],
      ["Pews — seats","Prayer mats or carpet"],
      ["Bell tower — calls people","Minaret — tower for the call to prayer"],
      ["Cross — symbol of Christ","Crescent — symbol often used for Islam"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Eid Prayers"},
    {k:"p", t:"On **Eid al-Fitr** (after Ramadan) and **Eid al-Adha** (after Hajj), Muslims wear new or clean clothes, pray together in the morning, give charity (Zakat al-Fitr before Eid al-Fitr prayer), visit family and share food."}
  ],
  terms:[
    {t:"mihrab", d:"the niche in a mosque showing the direction of Makkah", x:"The imam stands at the mihrab."},
    {t:"minbar", d:"the steps from which the imam gives the khutbah", x:"The imam climbed the minbar."},
    {t:"pew", d:"a long seat in a church", x:"We sat on the pew."},
    {t:"altar", d:"the table at the front of a church", x:"Communion is on the altar."},
    {t:"crescent", d:"the shape of the new moon", x:"The crescent is seen on mosques."},
    {t:"Zakat al-Fitr", d:"charity given before Eid al-Fitr prayer", x:"We gave Zakat al-Fitr."}
  ],
  facts:[
    {q:"What is the mihrab?", a:"The niche in a mosque showing the direction of Makkah."},
    {q:"Where does a pastor preach?", a:"From the pulpit."},
    {q:"What is the minaret used for?", a:"The call to prayer."},
    {q:"Name three things Muslims do on Eid.", a:"Pray together, give charity and visit family and share food."}
  ],
  tf:[
    {s:"The minbar is where the imam gives the khutbah.", a:"true", why:"The minbar is the steps used for the sermon."},
    {s:"Eid al-Fitr comes before Ramadan.", a:"false", why:"It comes after Ramadan."}
  ],
  worked:[
    {q:"Match each church part with a mosque part that has a similar use.",
     steps:["Pulpit ↔ minbar (preaching)","Bell tower ↔ minaret (calling people)","Pews ↔ prayer mats (where people sit or pray)"],
     a:"Pulpit–minbar, bell tower–minaret, pews–prayer mats."},
    {q:"Your Muslim neighbour invites you to share food on Eid. How should you respond?",
     steps:["Accept with thanks","Greet: \"Eid Mubarak\"","Behave respectfully","Invite them at Christmas"],
     a:"Accept, greet them warmly and return the kindness. Sharing builds peace."}
  ]
},

{ grade:6, period:"V",
  study:[
    {k:"rule"},
    {k:"h3", t:"The Four Gospels"},
    {k:"table", head:["Gospel","Writer","Special focus"], rows:[
      ["Matthew","A tax collector and disciple","Jesus as the promised King"],
      ["Mark","A helper of Peter","Jesus as the servant; shortest Gospel"],
      ["Luke","A doctor","Jesus caring for the poor and outsiders"],
      ["John","A disciple","Jesus as the Son of God"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Prophets Named in the Quran"},
    {k:"p", t:"The Quran names **25 prophets**, including Adam, Nuh (Noah), Ibrahim (Abraham), Musa (Moses), Dawud (David), Sulayman (Solomon), Isa (Jesus) and Muhammad, the last prophet. Many are also in the Bible."}
  ],
  terms:[
    {t:"Matthew", d:"the first Gospel, written by a former tax collector", x:"Matthew shows Jesus as King."},
    {t:"Mark", d:"the shortest Gospel", x:"Mark is quick and full of action."},
    {t:"Luke", d:"the Gospel written by a doctor", x:"Luke cared about the poor."},
    {t:"John", d:"the Gospel that shows Jesus as Son of God", x:"John 3:16 is well known."},
    {t:"Musa", d:"Moses in the Quran", x:"Musa led his people out of Egypt."},
    {t:"last prophet", d:"Muslims believe Muhammad is the final prophet", x:"Muhammad is the last prophet in Islam."}
  ],
  facts:[
    {q:"Name the four Gospels.", a:"Matthew, Mark, Luke and John."},
    {q:"Which Gospel was written by a doctor?", a:"Luke."},
    {q:"How many prophets are named in the Quran?", a:"25."},
    {q:"Name three prophets found in both the Bible and the Quran.", a:"Noah, Abraham and Moses (also David, Solomon and Jesus)."}
  ],
  tf:[
    {s:"Mark is the shortest Gospel.", a:"true", why:"It has 16 chapters."},
    {s:"Moses is not mentioned in the Quran.", a:"false", why:"He is named as Musa."}
  ],
  worked:[
    {q:"Make a table of three prophets with their names in the Bible and the Quran.",
     steps:["Noah — Nuh","Abraham — Ibrahim","Moses — Musa"],
     a:"Noah/Nuh, Abraham/Ibrahim, Moses/Musa: shared prophets."},
    {q:"Why might Luke focus on the poor and sick?",
     steps:["Luke was a doctor","Doctors care for the sick","He noticed Jesus' care for the poor and outsiders"],
     a:"As a doctor, Luke paid close attention to Jesus' care for the sick and needy."}
  ]
},

{ grade:6, period:"VI",
  study:[
    {k:"rule"},
    {k:"h3", t:"Comparing Beliefs about After Death"},
    {k:"table", head:["Belief","Christianity","Islam","Traditional"], rows:[
      ["One life or many?","One life","One life","One life; the dead join ancestors"],
      ["Judgment","By God through Christ","Deeds weighed by God","Ancestors honour the good"],
      ["Reward","Heaven, eternal life","Jannah (Paradise)","Honoured among ancestors"],
      ["Reincarnation?","No","No","Some believe a spirit may return in a child"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Writing a Eulogy"},
    {k:"num", items:["Name the person and their life dates","Tell how they lived — family, work, faith","Share one good memory","Say what we learn from them","Close with a prayer or blessing"]}
  ],
  terms:[
    {t:"compare", d:"to find how things are alike and different", x:"Compare the beliefs."},
    {t:"spirit", d:"the invisible part of a person", x:"The spirit returns to God."},
    {t:"life dates", d:"the years a person was born and died", x:"The eulogy gave his life dates."},
    {t:"blessing", d:"a prayer asking God's favour", x:"End with a blessing."},
    {t:"honour", d:"to show great respect", x:"We honour the dead."},
    {t:"weigh", d:"to measure; in Islam, deeds are weighed on Judgment Day", x:"Deeds will be weighed."}
  ],
  facts:[
    {q:"Do Christianity and Islam teach reincarnation?", a:"No, both teach one life followed by judgment."},
    {q:"What is the reward in Islam?", a:"Jannah (Paradise)."},
    {q:"Give the steps for writing a eulogy.", a:"Name and life dates, how they lived, a memory, lessons, and a closing prayer."},
    {q:"What do some traditional believers think about reincarnation?", a:"That a spirit may return in a child of the family."}
  ],
  tf:[
    {s:"Islam teaches that deeds are weighed on Judgment Day.", a:"true", why:"Quran 101:6-9."},
    {s:"Christianity teaches reincarnation.", a:"false", why:"It teaches one life and resurrection."}
  ],
  worked:[
    {q:"Write a short eulogy for a kind grandmother.",
     steps:["Name: Old Ma Yatta, 1940–2026","Life: farmer, mother of six, faithful in worship","Memory: she shared food with every child","Lesson: generosity","Blessing: rest in peace"],
     a:"\"Old Ma Yatta (1940–2026) farmed, raised six children and shared her food with every child in town. She taught us generosity. May she rest in peace.\""},
    {q:"State one belief that Christians and Muslims share about the hereafter, and one difference.",
     steps:["Shared: one life, judgment, reward in heaven or Paradise","Difference: Christians trust salvation through Christ; Muslims believe deeds are weighed by God's mercy"],
     a:"Both believe in one life and judgment. They differ on how people are saved."}
  ]
},

];

/* Merge each supplement into its Elementary unit (grade + period). */
(function () {
  if (typeof RM_CURRICULUM === "undefined") return;
  RM_MORE_ELEM.forEach(function (m) {
    var u = RM_CURRICULUM.filter(function (x) { return x.grade === m.grade && x.period === m.period; })[0];
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
