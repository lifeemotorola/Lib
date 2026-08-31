/* Religious & Moral Education, Grades 1-6 — Liberian National Curriculum.
   36 units (6 grades x 6 periods). Multi-religious: Christian and Muslim emphasis
   are presented side by side, as the syllabus requires. */
const RM_CURRICULUM = [

/* ============================ GRADE 1 ============================ */
{
  grade: 1, period: "I", sem: "One", icon: "🌍",
  title: "Creation",
  subtitle: "The Creator, the process and purpose of creation",
  outcomes: [
    "Learners understand and are able to describe the Creator, the purpose and process of creation, and the value of training the whole man — the mind, body and soul."
  ],
  objectives: [
    "Name the Creator",
    "Explain the process of creation",
    "Explain the purpose of creation",
    "Draw pictures of the things that were created"
  ],
  note: "God is the Creator of all things. Christians read the creation story in the Holy Bible, and Muslims read of God's creation in the Holy Quran. Both teach that God made the heavens and the earth and everything in them.",
  study:[
    /* ---- course text: Semester One, Period I — Creation (page 2) ---- */
    {k:"h3", t:"The Creator"},
    {k:"p", t:"**God is the Creator** — He made everything that exists. The Holy Bible and the Holy Quran both teach that God created the heavens and the earth and everything in them. Christians read the creation story in **Genesis**, and Muslims read of God's creation in the **Holy Quran**."},
    {k:"p", t:"Scripture references: the Holy Bible, Genesis 1:26-27, and the Holy Quran 6:23. Read these verses and discuss how each book describes the one true Creator."},
    {k:"rule"},
    {k:"h3", t:"Creation of All Things"},
    {k:"p", t:"God created **all things** — the heavens, the earth, the sun, the moon, the stars, the plants, the animals, and finally **Man**. Everything God made was made for a purpose."},
    {k:"bul", items:["**Plants** — trees, grass and flowers, which give us food and shade", "**Animals** — birds, fish and animals on the land", "**People** — created in the image of God, with a **mind**, a **body** and a **soul**", "**The heavens and the earth** — the sky, the sun, the moon and the stars"]},
    {k:"p", t:"**Training the whole man** means caring for the whole person: the **mind** (learning and thinking), the **body** (health and strength) and the **soul** (knowing and serving God)."},
    {k:"rule"},
    {k:"h3", t:"Heaven, Hell and Earth"},
    {k:"p", t:"Discuss the **heaven** (the holy place where God dwells), the **earth** (the world God gave us to live in and care for) and **hell** (the place of punishment for sin). Both religions teach that how we live on earth prepares us for what comes after."},
    {k:"rule"},
    {k:"h3", t:"Assignment and Reflection"},
    {k:"num", items:["Write one or two paragraphs on creation.", "In a group, discuss the creation of Man: why did God make people?", "Discuss the things we can do because we are alive and created.", "Draw and colour pictures of the things that were created."]}
  ],
  focus: ["The Creator", "Creation of all things", "Heaven, hell and earth", "Training the mind, body and soul"],
  terms: [
    { t: "Creator", d: "God, the one who made everything that exists", x: "We call God the Creator because He made all things." },
    { t: "creation", d: "everything that God has made", x: "The sun, the trees and the animals are part of creation." },
    { t: "God", d: "the Supreme Being whom people worship", x: "Christians and Muslims both pray to God." },
    { t: "heaven", d: "the holy place above where God dwells", x: "We are taught that God dwells in heaven." },
    { t: "earth", d: "the world we live on", x: "God placed people, animals and plants on the earth." },
    { t: "living things", d: "things that grow, feed and can die", x: "People, animals and plants are living things." },
    { t: "purpose", d: "the reason why something was made", x: "The purpose of creation is to show God's greatness." },
    { t: "thank", d: "to say you are grateful for something given to you", x: "We thank God every day for life." },
    { t: "soul", d: "the part of a person that is not the body", x: "The body and the soul together make the whole person." },
    { t: "praise", d: "to say good things about God", x: "We sing songs of praise to the Creator." }
  ],
  facts: [
    { q: "Who is the Creator of all things?", a: "God is the Creator of all things." },
    { q: "Name three things God created.", a: "Any three, for example: the sun, the trees and the animals." },
    { q: "In which Holy Book do Christians read the creation story?", a: "In the Holy Bible." },
    { q: "In which Holy Book do Muslims read about God's creation?", a: "In the Holy Quran." },
    { q: "What is the purpose of creation?", a: "To show the greatness of God and to give people a good place to live." },
    { q: "Name two living things that God made.", a: "Any two, for example: a person and a goat." },
    { q: "What are the three parts of the whole person?", a: "The mind, the body and the soul." },
    { q: "How can we show that we are thankful for creation?", a: "By praising God, caring for people and taking care of the things He made." }
  ],
  tf: [
    { s: "God is the Creator of all things.", a: "true", why: "Both the Holy Bible and the Holy Quran teach that God made everything." },
    { s: "People made the sun and the moon.", a: "false", why: "God made the sun and the moon. People cannot make them." },
    { s: "Animals and plants are part of creation.", a: "true", why: "Everything that God made is part of creation." },
    { s: "A person is made of a body only.", a: "false", why: "A person has a mind, a body and a soul." },
    { s: "We should take care of the things God created.", a: "true", why: "Caring for creation is one way of thanking the Creator." },
    { s: "Only Christians believe that God created the world.", a: "false", why: "Muslims also believe that God created the world." }
  ],
  apply: [
    { q: "Your friend throws rubbish into the river. What will you tell him about caring for creation?", a: "I will tell him that the river is part of God's creation and dirtying it harms people, fish and plants. I will ask him to put the rubbish in a bin." },
    { q: "Give one way you can thank God today for the things He created.", a: "I can thank God in prayer, sing a song of praise, or care kindly for an animal or a plant." },
    { q: "Why should we treat every person with respect?", a: "Because every person was created by God, so every person is valuable." },
    { q: "A classmate says trees are not important. How would you answer him?", a: "Trees were created by God and they give us shade, fruit, wood and clean air, so they are important." },
    { q: "How can you care for your own body, which God created?", a: "By washing, eating good food, resting, exercising and avoiding things that harm me." }
  ],
  sort: {
    title: "Things God created and things people make",
    groups: [
      { name: "Created by God", items: ["sun", "moon", "river", "goat", "mango tree", "person"] },
      { name: "Made by people", items: ["chair", "car", "house", "book", "cup"] }
    ]
  },
  compare: {
    title: "Two Holy Books teach about creation",
    caption: "Copy the table and complete the right-hand column with the correct teaching.",
    items: [
      { p: "The Holy Bible", f: "The Christian Holy Book. It teaches that God created the heavens and the earth." },
      { p: "The Holy Quran", f: "The Muslim Holy Book. It teaches that God created the heavens, the earth and all between them." },
      { p: "The Creator", f: "God — worshipped by both Christians and Muslims as the maker of all things." },
      { p: "Creation", f: "Everything God made: the sky, the earth, plants, animals and people." }
    ]
  },
  casestudy: {
    title: "Musu looks at the sky",
    text: "In the evening Musu sat outside her house in Careysburg. She looked up and saw the moon and many stars. She counted the stars until she could count no more. Her grandmother came and sat beside her. “Grandma,” Musu said, “who put all those lights in the sky?” Her grandmother smiled and answered, “God the Creator made the sun for the day and the moon and stars for the night. He made you too, and He knows your name.” Musu was quiet for a while. Then she said, “Then I will thank Him.” And she said a short prayer before she went inside to sleep.",
    questions: [
      { q: "What did Musu see in the sky?", a: "She saw the moon and many stars." },
      { q: "Who did her grandmother say made the sun, moon and stars?", a: "God the Creator made them." },
      { q: "What did Musu do after she heard her grandmother?", a: "She said a short prayer to thank God." }
    ]
  },
  project: {
    title: "My creation picture book",
    brief: "Make a small picture book showing the things God created.",
    steps: [
      "Fold two sheets of paper to make a small book of four pages.",
      "On each page draw one thing that God created.",
      "Write the name of the thing under your drawing.",
      "Colour each drawing neatly.",
      "Show your book to the class and say one sentence about each page."
    ],
    criteria: ["four different created things drawn", "names written correctly", "neat colouring", "clear speaking to the class"]
  },
  activities: [
    "Group discussion on the creation of man",
    "Discuss things we can do because we are alive",
    "Draw and colour things that were created",
    "Write one to two sentences on creation"
  ],
  materials: ["Charts", "Poster sheets", "Markers", "Pens", "Colouring pencils"],
  assessment: ["Oral tests", "Written tests", "Reading", "Drawing", "Class work"]
},

{
  grade: 1, period: "II", sem: "One", icon: "📜",
  title: "The Ten Commandments",
  subtitle: "Love, obedience, respect and kindness",
  outcomes: [
    "Learners will keep and abide by the Ten Commandments by reading daily and discussing the Word of God."
  ],
  objectives: [
    "Demonstrate faithful and obedient behaviour in the family, school and society",
    "Demonstrate love for God, the Creator, and for His creation",
    "Exhibit kindness to other people"
  ],
  note: "The Ten Commandments are laws that God gave to His people through Moses. They teach us to love God and to love other people. Muslims also learn the teachings of Prophet Moses from the Holy Quran.",
  study:[
    /* ---- course text: Semester One, Period II — The Ten Commandments (page 3) ---- */
    {k:"h3", t:"The Ten Commandments"},
    {k:"p", t:"The **Ten Commandments** are the laws God gave to His people through **Prophet Moses**. Christians read them in the Holy Bible, and Muslims also honour the teaching of Prophet Moses as recorded in the Holy Quran. The commandments teach us to **love God** and to **love and respect one another**."},
    {k:"p", t:"Scripture references: the Holy Bible, Exodus 20:2-17 (the Ten Commandments) and Luke 10:25-37 (the story of the Good Samaritan); in the Holy Quran, read the teachings of Prophet Moses according to faith."},
    {k:"rule"},
    {k:"h3", t:"Love"},
    {k:"p", t:"The first and greatest law is to **love God with all your heart**, and the second is to **love your neighbour as yourself**. Love shows itself in what we do for others, just as the **Good Samaritan** stopped to help the wounded man on the road."},
    {k:"rule"},
    {k:"h3", t:"Obedience"},
    {k:"p", t:"**Obedience** means doing what God and our parents and teachers ask us to do. God blesses those who obey Him. In the family, at school and in the community, obedient children bring joy to those who care for them."},
    {k:"rule"},
    {k:"h3", t:"Law and Respect in the Family and Community"},
    {k:"p", t:"Every family and community has **laws and rules** that keep people safe and happy. Respecting these rules shows that we respect the people who made them and the people around us."},
    {k:"rule"},
    {k:"h3", t:"Self Esteem"},
    {k:"p", t:"**Self esteem** means knowing that you are valuable because God made you. When we know our worth, we take care of ourselves and we do not do things that are wrong."},
    {k:"rule"},
    {k:"h3", t:"Kindness to Others"},
    {k:"p", t:"**Kindness** is treating people the way we would like them to treat us. The Ten Commandments teach us not to steal, lie or hurt others — they teach us to be kind, honest and fair."},
    {k:"bul", items:["Read the Ten Commandments of God from the Holy Bible and the Holy Quran.", "Discuss the importance of the commandments and their impact on everyday activities.", "Read, discuss and colour pictures of the Good Samaritan.", "Practise one act of kindness at home and one at school today."]}
  ],
  focus: ["Love", "Obedience", "Law and respect in the family and community", "Self esteem", "Kindness to others"],
  terms: [
    { t: "commandment", d: "a law that God gives to people to obey", x: "Do not steal is one commandment." },
    { t: "obey", d: "to do what you have been told to do", x: "Children obey their parents." },
    { t: "love", d: "to care deeply for God and for other people", x: "We show love when we help someone in need." },
    { t: "respect", d: "to treat someone politely and as important", x: "We show respect to our elders." },
    { t: "kindness", d: "being good and gentle to other people", x: "Sharing your food is an act of kindness." },
    { t: "honest", d: "telling the truth and not stealing", x: "An honest child returns what is not his." },
    { t: "steal", d: "to take what belongs to another person", x: "The commandment says we must not steal." },
    { t: "neighbour", d: "any person living or working near you", x: "We are told to love our neighbour." },
    { t: "Moses", d: "the prophet through whom God gave the Ten Commandments", x: "Moses received the commandments from God." },
    { t: "forgive", d: "to stop being angry with someone who wronged you", x: "We forgive our friends when they say sorry." }
  ],
  facts: [
    { q: "What is a commandment?", a: "A law that God gives to people to obey." },
    { q: "How many commandments did God give through Moses?", a: "Ten commandments." },
    { q: "Through which prophet did God give the Ten Commandments?", a: "Through Moses." },
    { q: "Name one commandment that protects other people's property.", a: "Do not steal." },
    { q: "Who is your neighbour?", a: "Any person living or working near me, and anyone who needs my help." },
    { q: "Name two ways of showing kindness at school.", a: "Any two, for example: sharing my pencil and helping a classmate who has fallen." },
    { q: "Why should children obey their parents?", a: "Because God commands it and because parents care for and protect them." },
    { q: "What does it mean to be honest?", a: "To tell the truth and not take what belongs to others." }
  ],
  tf: [
    { s: "The commandments teach us to love God and to love other people.", a: "true", why: "That is the heart of all the commandments." },
    { s: "It is right to steal if nobody sees you.", a: "false", why: "Stealing is wrong at all times, whether or not you are seen." },
    { s: "Moses received the Ten Commandments from God.", a: "true", why: "God gave the commandments to His people through Moses." },
    { s: "Showing kindness is only for grown-up people.", a: "false", why: "Children can show kindness every day at home and at school." },
    { s: "Telling a lie is a way of being honest.", a: "false", why: "Being honest means telling the truth." },
    { s: "Obeying our parents pleases God.", a: "true", why: "The commandments tell children to honour their father and mother." }
  ],
  apply: [
    { q: "You find a five-dollar note on the classroom floor. What is the honest thing to do?", a: "Take it to the teacher so the owner can be found. Keeping it would be like stealing." },
    { q: "Your brother breaks your toy and says sorry. What should you do?", a: "Forgive him, because forgiving keeps peace in the family." },
    { q: "A new pupil sits alone at break time. How can you show kindness?", a: "Greet him, ask his name and invite him to play or share my food." },
    { q: "Your mother sends you to buy rice but your friends call you to play. What will you do?", a: "Go and buy the rice first, because obeying my mother comes before playing." },
    { q: "Why is it wrong to call another child bad names?", a: "Because it hurts them, it shows no love or respect, and God commands us to love our neighbour." }
  ],
  sort: {
    title: "Good behaviour and bad behaviour",
    groups: [
      { name: "Pleases God", items: ["telling the truth", "helping a friend", "obeying parents", "sharing", "forgiving"] },
      { name: "Displeases God", items: ["stealing", "lying", "fighting", "calling bad names"] }
    ]
  },
  compare: {
    title: "Ways of showing love at home, at school and in the community",
    caption: "Complete the table with one example for each place.",
    items: [
      { p: "At home", f: "Obey parents, help with chores, care for younger brothers and sisters." },
      { p: "At school", f: "Share materials, respect the teacher, help a classmate who is struggling." },
      { p: "In the community", f: "Greet elders politely, help a neighbour carry a load, keep the surroundings clean." },
      { p: "Towards God", f: "Pray, give thanks, and obey His commandments." }
    ]
  },
  casestudy: {
    title: "The kind traveller",
    text: "A man was going on a journey when robbers attacked him, took his money and left him hurt beside the road. Two men passed by, saw him lying there, and walked on to the other side of the road. Then a traveller from another place came along. When he saw the wounded man he felt sorry for him. He cleaned his wounds, lifted him onto his own animal, took him to a house where he could rest, and paid for his care. He did all this for a stranger he had never met before.",
    questions: [
      { q: "What did the first two men do when they saw the wounded man?", a: "They passed by on the other side of the road and did not help him." },
      { q: "How did the traveller show love for his neighbour?", a: "He cleaned the man's wounds, carried him to a place of rest and paid for his care." },
      { q: "What does this story teach us about who our neighbour is?", a: "Our neighbour is anyone who needs our help, even a stranger." }
    ]
  },
  project: {
    title: "My week of kindness",
    brief: "Keep a record of the kind things you do for one week.",
    steps: [
      "Rule a chart with the seven days of the week.",
      "Each day, do one kind act at home or at school.",
      "Write or draw what you did on the chart.",
      "Write how the other person felt.",
      "Present your chart to the class at the end of the week."
    ],
    criteria: ["one act recorded for each day", "acts are truly kind and helpful", "neat chart", "clear presentation"]
  },
  activities: [
    "Read the commandments of God from the Holy Bible and the Holy Quran",
    "Discuss the importance of the commandments in everyday life",
    "Read, discuss and colour pictures of the kind traveller",
    "Class group discussion, drawing, writing and reading"
  ],
  materials: ["Flyers", "Posters", "Colouring pencils", "Charts"],
  assessment: ["Oral and written tests", "Reading", "Class work", "Quizzes", "Assignments"]
},

{
  grade: 1, period: "III", sem: "One", icon: "✝️",
  title: "The Lord Jesus Christ",
  subtitle: "The promise, birth, life, death and resurrection of Jesus",
  outcomes: [
    "Learners discuss the promise of the Messiah, and the birth, life, death and resurrection of Jesus Christ."
  ],
  objectives: [
    "Know who Jesus is",
    "Discuss the birth and life of Jesus Christ",
    "Understand the divine qualities of Jesus Christ",
    "Explain the death and resurrection of the Lord Jesus Christ"
  ],
  note: "Christians believe that Jesus Christ is the Son of God, who was born in Bethlehem, taught people to love one another, died and rose again. Muslims honour Jesus as one of the great prophets of God. In our multi-religious classes we learn about him with respect.",
  study:[
    /* ---- course text: Semester One, Period III — The Lord Jesus Christ (page 4) ---- */
    {k:"h3", t:"The Promise of the Messiah"},
    {k:"p", t:"Long before Jesus was born, the prophets of God promised that a **Messiah** (a Saviour) would come. Christians believe that promise was fulfilled in **Jesus Christ**, the Son of God. Scripture references: the Holy Bible, Isaiah 9:6-7 and Zechariah 12:8."},
    {k:"rule"},
    {k:"h3", t:"The Birth of Jesus Christ"},
    {k:"p", t:"Jesus was born in **Bethlehem**. His mother was **Mary**. Scripture references: the Holy Bible, Matthew 1:18-25, Matthew 2, and Luke chapters 1 and 2. Muslims also honour Jesus (Isa) as a great prophet of God, born of the virgin Mary, as taught in the Holy Quran."},
    {k:"rule"},
    {k:"h3", t:"His Purpose — The Calling of His Disciples"},
    {k:"p", t:"Jesus came with a **purpose**: to teach the way of God and to save people from their sins. He chose **twelve disciples** to follow Him, learn from Him and continue His work."},
    {k:"bul", items:["Jesus taught about the **kingdom of God**.", "Jesus **healed the sick** and did many good works.", "He called ordinary people — fishermen and others — to be His disciples."]},
    {k:"rule"},
    {k:"h3", t:"The Divine Qualities of Jesus Christ"},
    {k:"p", t:"Christians believe Jesus showed **divine qualities** — He is holy, loving, forgiving, merciful and powerful. The Bible says He is the Son of God. Scripture reference: John 3:16 — God so loved the world that He gave His only Son."},
    {k:"rule"},
    {k:"h3", t:"His Death and Resurrection"},
    {k:"p", t:"Jesus **died on the cross**, was **buried**, and on the third day **rose again** from the dead. His resurrection shows His power over death. Scripture reference: the Holy Bible, Mark 16:1-13."},
    {k:"p", t:"**Practise the teachings of Jesus every day** — kindness, honesty, forgiveness and love. Through classroom play, learners demonstrate an understanding of the teachings and life of Jesus Christ, and make a field trip to the market place, hospital or church to practise acts of kindness and respect as Jesus taught."}
  ],
  focus: ["Birth of Jesus Christ", "His purpose and the calling of his disciples", "The divine qualities of Jesus", "His death and resurrection"],
  terms: [
    { t: "Jesus Christ", d: "the one Christians call the Son of God and Saviour", x: "Christians pray in the name of Jesus Christ." },
    { t: "Messiah", d: "the promised one sent by God to save people", x: "Christians believe Jesus is the Messiah who was promised." },
    { t: "Bethlehem", d: "the town where Jesus was born", x: "Jesus was born in a stable in Bethlehem." },
    { t: "disciple", d: "a follower who learns from a teacher", x: "Jesus called twelve disciples to follow him." },
    { t: "miracle", d: "a wonderful act that only God's power can do", x: "Feeding a crowd with a few loaves was a miracle." },
    { t: "resurrection", d: "the rising of Jesus from the dead", x: "Christians celebrate the resurrection at Easter." },
    { t: "Christmas", d: "the day Christians celebrate the birth of Jesus", x: "Christmas is celebrated on the 25th of December." },
    { t: "gentle", d: "kind and calm, not rough", x: "Jesus was gentle with children." },
    { t: "humble", d: "not proud; ready to serve others", x: "Jesus was humble and washed his disciples' feet." },
    { t: "Saviour", d: "one who rescues people from danger or sin", x: "Christians call Jesus their Saviour." }
  ],
  facts: [
    { q: "In which town was Jesus born?", a: "In Bethlehem." },
    { q: "How many disciples did Jesus call to follow him?", a: "Twelve disciples." },
    { q: "Name two good qualities of Jesus.", a: "Any two, for example: he was gentle, humble, loving and forgiving." },
    { q: "What festival marks the birth of Jesus?", a: "Christmas." },
    { q: "What is the resurrection?", a: "The rising of Jesus from the dead." },
    { q: "What do Christians call Jesus?", a: "The Son of God, the Messiah and their Saviour." },
    { q: "How do Muslims regard Jesus?", a: "They honour him as one of the great prophets of God." },
    { q: "Name one thing Jesus taught people to do.", a: "To love one another, to forgive, and to help the poor." }
  ],
  tf: [
    { s: "Jesus was born in Bethlehem.", a: "true", why: "The Bible says Jesus was born in the town of Bethlehem." },
    { s: "Jesus called twenty disciples.", a: "false", why: "He called twelve disciples." },
    { s: "Christians celebrate the birth of Jesus at Christmas.", a: "true", why: "Christmas is the festival of the birth of Jesus." },
    { s: "Jesus taught people to fight their enemies.", a: "false", why: "He taught people to love one another and to forgive." },
    { s: "Muslims also respect Jesus as a prophet of God.", a: "true", why: "Jesus is named in the Holy Quran as a prophet." },
    { s: "Jesus was proud and refused to help poor people.", a: "false", why: "Jesus was humble and helped the poor and the sick." }
  ],
  apply: [
    { q: "Jesus was gentle with children. How can you be gentle with a smaller child?", a: "By speaking softly, sharing with him, not pushing him, and helping him when he needs it." },
    { q: "Jesus forgave people who wronged him. Why is forgiving hard, and why is it good?", a: "It is hard because we feel angry, but it is good because it ends quarrels and brings peace." },
    { q: "How can a pupil show humility in the classroom?", a: "By not boasting, by listening to others, and by helping to clean and carry things." },
    { q: "A friend of another faith asks about your beliefs. How should you speak to him?", a: "Politely and respectfully, explaining what I believe and listening to what he believes." },
    { q: "Name one way your class can help a sick classmate, as Jesus helped the sick.", a: "We can visit her, send a card, share our notes and pray for her." }
  ],
  sort: {
    title: "Events in the life of Jesus and other events",
    groups: [
      { name: "In the life of Jesus", items: ["born in Bethlehem", "called twelve disciples", "healed the sick", "rose from the dead"] },
      { name: "Not in the life of Jesus", items: ["built a palace", "led an army", "became a king of Liberia"] }
    ]
  },
  compare: {
    title: "How Christians and Muslims speak of Jesus",
    caption: "Complete the table. Remember to write about both faiths with respect.",
    items: [
      { p: "Christian teaching", f: "Jesus Christ is the Son of God, the Messiah and the Saviour of mankind." },
      { p: "Muslim teaching", f: "Jesus (Isa) is honoured as one of the great prophets and messengers of God." },
      { p: "What both agree on", f: "That Jesus was born of Mary, taught the truth and lived a holy life." },
      { p: "How we should discuss it", f: "With respect and tolerance, listening carefully to one another." }
    ]
  },
  casestudy: {
    title: "The children come to Jesus",
    text: "One day some parents brought their little children to Jesus so that he could bless them. The disciples saw the crowd of children and tried to send them away. They thought the children were disturbing their teacher. But when Jesus saw what the disciples were doing, he was not pleased. He said, “Let the little children come to me. Do not stop them.” Then he took the children in his arms, placed his hands on them and blessed them, one after the other.",
    questions: [
      { q: "Why did the parents bring their children to Jesus?", a: "So that Jesus could bless them." },
      { q: "What did the disciples try to do?", a: "They tried to send the children away." },
      { q: "What does this story teach us about how Jesus treated children?", a: "It teaches that Jesus loved children and welcomed them." }
    ]
  },
  project: {
    title: "A story from the life of Jesus",
    brief: "Choose one story from the life of Jesus and retell it in pictures.",
    steps: [
      "Choose one story, for example his birth, a healing, or the children coming to him.",
      "Divide a sheet of paper into four boxes.",
      "Draw the story in four pictures, in the right order.",
      "Write one sentence under each picture.",
      "Tell the story to your group using your pictures."
    ],
    criteria: ["story told in the correct order", "four clear pictures", "sentences match the pictures", "respectful and accurate retelling"]
  },
  activities: [
    "Read and discuss the birth of Jesus Christ",
    "Sing songs about the life of Jesus",
    "Draw and colour a scene from the life of Jesus",
    "Group discussion on the qualities of Jesus"
  ],
  materials: ["Charts", "Posters", "Markers", "Colouring pencils"],
  assessment: ["Oral and written tests", "Reading", "Drawing", "Class work"]
},

{
  grade: 1, period: "IV", sem: "Two", icon: "☪️",
  title: "Religious Personality — Prophet Mohammed",
  subtitle: "Muslim emphasis: his birth, calling and human qualities",
  outcomes: [
    "Learners understand and recognise Mohammed as a Prophet and Messenger of God."
  ],
  objectives: [
    "Discuss and understand the birth and childhood of Prophet Mohammed",
    "Write and discuss about the Prophet Mohammed",
    "Tell stories illustrating his human qualities: his behaviour, gentleness, humility, obedience and truthfulness"
  ],
  note: "Muslims believe that Mohammed (peace be upon him) is the Prophet and Messenger of God, through whom the Holy Quran was given. Christians in the class should learn about him with the same respect that Muslim pupils show when learning about Jesus.",
  study:[
    /* ---- course text: Semester Two, Period IV — Religious Personality: Prophet Mohammed (Muslim Emphasis) (page 5) ---- */
    {k:"h3", t:"The Birth and Childhood of Prophet Mohammed"},
    {k:"p", t:"**Prophet Mohammed** (peace be upon him) was born in the city of **Mecca** around the year 570. He was an orphan — his father died before he was born and his mother died when he was young — so he was raised by his grandfather and then his uncle. Muslims recognise him as the **Prophet and Messenger of God**."},
    {k:"rule"},
    {k:"h3", t:"His Calling"},
    {k:"p", t:"Prophet Mohammed was **called by God** to be a messenger. He received the revelations of the **Holy Quran** and taught the people of Mecca and the whole world to worship **one God (Allah)** alone and to live righteously."},
    {k:"rule"},
    {k:"h3", t:"His Human Qualities"},
    {k:"p", t:"Prophet Mohammed is remembered for his beautiful **human qualities**: his gentle **behaviour**, his **humility**, his **obedience** to God, and his **truthfulness**. Even before his calling he was known in Mecca as *Al-Amin* — the trustworthy one."},
    {k:"bul", items:["As a **military leader** — he led his people wisely and justly", "As a **philosopher** — he taught deep truths about God and human life", "As a **prophet** — he delivered the message of God to mankind"]},
    {k:"rule"},
    {k:"h3", t:"'May the Peace and Blessings of Allah be upon Him'"},
    {k:"p", t:"When Muslims mention the Prophet, they add the blessing *s.a.s.* — meaning **'May the Peace and Blessings of Allah be upon Him'**. This is a sign of love and respect for the Messenger of God."},
    {k:"p", t:"**Assignment:** read and discuss the birth and life of Prophet Mohammed in Mecca; tell stories illustrating his behaviour, gentleness, humility, obedience and truthfulness; and visit a mosque to learn about the Muslim faith."}
  ],
  focus: ["Birth and childhood of Prophet Mohammed", "His calling", "His human qualities"],
  terms: [
    { t: "prophet", d: "a person chosen by God to carry His message to people", x: "Muslims believe Mohammed is a prophet of God." },
    { t: "messenger", d: "one who is sent to deliver a message", x: "A messenger of God brings God's words to the people." },
    { t: "Mohammed", d: "the Prophet of Islam, through whom the Holy Quran was given", x: "Muslims say peace be upon him after the name of Mohammed." },
    { t: "Holy Quran", d: "the Holy Book of the Muslims", x: "Muslims read the Holy Quran with great care." },
    { t: "Islam", d: "the religion of the Muslims", x: "Islam teaches submission to the will of God." },
    { t: "Muslim", d: "a follower of the religion of Islam", x: "A Muslim prays five times each day." },
    { t: "truthfulness", d: "always speaking what is true", x: "The Prophet was known for his truthfulness." },
    { t: "humility", d: "not being proud; being ready to serve", x: "He showed humility by helping in his own home." },
    { t: "gentleness", d: "being kind and not rough with others", x: "He showed gentleness to children and to animals." },
    { t: "orphan", d: "a child whose parents have died", x: "The Prophet was an orphan and taught kindness to orphans." }
  ],
  facts: [
    { q: "Who do Muslims believe is the Prophet and Messenger of God?", a: "Prophet Mohammed, peace be upon him." },
    { q: "Which Holy Book was given through Prophet Mohammed?", a: "The Holy Quran." },
    { q: "What is the religion of the Muslims called?", a: "Islam." },
    { q: "Name two good qualities of the Prophet.", a: "Any two: truthfulness, gentleness, humility, obedience and kindness." },
    { q: "What is an orphan?", a: "A child whose parents have died." },
    { q: "Why did the Prophet teach kindness to orphans?", a: "Because he himself was an orphan and knew their need." },
    { q: "What does the word Muslim mean?", a: "A follower of the religion of Islam." },
    { q: "How should pupils of other faiths speak about the Prophet?", a: "With respect and politeness, as they would wish their own faith to be spoken of." }
  ],
  tf: [
    { s: "Muslims believe Mohammed is a Prophet of God.", a: "true", why: "That is a central teaching of Islam." },
    { s: "The Holy Quran is the Holy Book of the Muslims.", a: "true", why: "Muslims read and study the Holy Quran." },
    { s: "The Prophet Mohammed taught people to be rough and proud.", a: "false", why: "He taught gentleness, humility and truthfulness." },
    { s: "An orphan is a child whose parents have died.", a: "true", why: "That is the meaning of the word orphan." },
    { s: "Christians and Muslims cannot live peacefully in one community.", a: "false", why: "In Liberia Christians and Muslims live and work together peacefully." },
    { s: "Telling the truth was one of the qualities of the Prophet.", a: "true", why: "He was widely known for his truthfulness." }
  ],
  apply: [
    { q: "How can you show truthfulness at school this week?", a: "By admitting when I am wrong, not copying in tests and not telling lies to the teacher." },
    { q: "There is an orphan in your community. What can your family do to help?", a: "Share food and clothes, invite him to play, help with school materials and treat him as family." },
    { q: "Your Muslim classmate is fasting and cannot eat at break. How will you treat him?", a: "With respect — I will not tease him or eat in his face, and I will let him rest." },
    { q: "Why is humility a good quality in a class leader?", a: "A humble leader listens to others, does not boast, and serves the class instead of bullying it." },
    { q: "How can you be gentle with animals?", a: "By feeding them, giving them water, and never beating or throwing stones at them." }
  ],
  sort: {
    title: "Good qualities and poor qualities",
    groups: [
      { name: "Qualities to copy", items: ["truthfulness", "gentleness", "humility", "obedience", "kindness to orphans"] },
      { name: "Qualities to avoid", items: ["pride", "lying", "cruelty", "rudeness"] }
    ]
  },
  compare: {
    title: "Two faiths, two Holy Books, one community",
    caption: "Complete the table carefully and respectfully.",
    items: [
      { p: "Holy Book of the Muslims", f: "The Holy Quran." },
      { p: "Holy Book of the Christians", f: "The Holy Bible." },
      { p: "Place of worship for Muslims", f: "The mosque." },
      { p: "Place of worship for Christians", f: "The church." },
      { p: "What both teach", f: "To worship God, to speak the truth and to be kind to other people." }
    ]
  },
  casestudy: {
    title: "The trusted young man",
    text: "When Mohammed was a young man in Mecca, the people of the city knew him well. Whenever traders came to the city with goods, they looked for someone honest to hold their money and property while they went about their business. Again and again they chose Mohammed, because he never took what was not his and he always returned exactly what he had been given. The people of the city gave him a name that meant “the trustworthy one”. Even those who later disagreed with his message still left their valuables in his care, because they knew he would not cheat them.",
    questions: [
      { q: "Why did the traders choose Mohammed to keep their property?", a: "Because he was honest and always returned exactly what he had been given." },
      { q: "What name did the people of the city give him?", a: "A name meaning the trustworthy one." },
      { q: "What lesson about honesty can a pupil learn from this story?", a: "That being honest every time makes people trust you, and a good name is worth more than money." }
    ]
  },
  project: {
    title: "A poster of good qualities",
    brief: "Make a poster showing the good qualities taught by the religious personalities you have studied.",
    steps: [
      "Write the title GOOD QUALITIES at the top of a sheet.",
      "List four qualities, for example truthfulness, gentleness, humility and kindness.",
      "Beside each quality, draw a small picture of a child showing that quality.",
      "Write one sentence for each picture.",
      "Display your poster on the classroom wall."
    ],
    criteria: ["four qualities listed", "pictures match the qualities", "sentences are correct", "neat and respectful work"]
  },
  activities: [
    "Discuss the birth and childhood of Prophet Mohammed",
    "Tell stories showing his human qualities",
    "Write two sentences about the Prophet",
    "Group discussion on truthfulness and gentleness"
  ],
  materials: ["Charts", "Poster sheets", "Markers", "Colouring pencils"],
  assessment: ["Oral and written tests", "Reading", "Story telling", "Class work"]
},

{
  grade: 1, period: "V", sem: "Two", icon: "🕊️",
  title: "Death and Hereafter",
  subtitle: "The meaning of death and what religions teach about life after death",
  outcomes: [
    "Learners understand the meaning of death — spiritual and physical death; the reward of heaven for those who obey God; and the punishment of hell after death for sinners."
  ],
  objectives: [
    "Understand the meaning of death",
    "Discuss the types of death",
    "Learn about judgment day, the penalty of sin and the reward of heaven or hell"
  ],
  note: "Death is a part of life. All living things die. Both the Holy Bible and the Holy Quran teach that there is life after death and that God will judge how each person lived. Speak about death gently, because some pupils have lost people they love.",
  study:[
    /* ---- course text: Semester Two, Period V — Death and Hereafter (page 6) ---- */
    {k:"h3", t:"Death as a Result of Sin"},
    {k:"p", t:"Religious teaching says that **sin** brought death into the world. The Holy Bible tells of the first sin of man and its result: death. Scripture references: the Holy Bible, Genesis 3:16-19 and John 1:1-3."},
    {k:"rule"},
    {k:"h3", t:"The Meaning of Death"},
    {k:"p", t:"**Death** is the end of earthly life. It is a **departure from the earthly body** — the soul leaves the body and goes to another place called the **afterlife**. Death is a reality for every living person, and it is not the end of everything."},
    {k:"rule"},
    {k:"h3", t:"Types of Death: Physical and Spiritual"},
    {k:"p", t:"There are two kinds of death we study:"},
    {k:"table", head:["Type of death","What it means"], rows:[["Physical death","The stopping of the body — breathing, heartbeat and life on earth end."],["Spiritual death","Separation from God because of sin — being cut off from the life of God."]]},
    {k:"p", t:"(Table cells are shown without bold styling; the terms are **physical death** and **spiritual death**.)"},
    {k:"rule"},
    {k:"h3", t:"Judgment Day — Heaven or Hell"},
    {k:"p", t:"Both the Bible and the Quran teach that there is a **Judgment Day**, when God will judge every person. Those who **obey God** receive the **reward of heaven**; those who are sinners and do not repent receive **punishment in hell** after death."},
    {k:"p", t:"Scripture reference: the Holy Bible, Matthew 25:31-46 — the sheep and the goats; the righteous inherit the kingdom prepared for them, while the unrighteous go away into eternal punishment."},
    {k:"p", t:"**Assignment:** read scriptures on life, death, hell and heaven; discuss the afterlife; dramatise the effect of death in order to appreciate the beauty and seriousness of life; and interview pastors or imams about their teaching on death and the hereafter."}
  ],
  focus: ["Death as a result of sin", "Types of death: physical and spiritual", "Death as a departure from the earthly body"],
  terms: [
    { t: "death", d: "the end of life in the body", x: "All living things come to death one day." },
    { t: "physical death", d: "when the body stops living", x: "Physical death happens to every person." },
    { t: "spiritual death", d: "being separated from God by doing wrong", x: "Religions teach that sin causes spiritual death." },
    { t: "soul", d: "the part of a person that lives on after the body dies", x: "Believers teach that the soul returns to God." },
    { t: "heaven", d: "the place of reward with God for those who obey Him", x: "The faithful hope to enter heaven." },
    { t: "hell", d: "the place of punishment for those who refuse God", x: "Both Holy Books warn about hell." },
    { t: "judgment", d: "God's decision about how a person lived", x: "Believers teach that everyone will face judgment." },
    { t: "sin", d: "doing what God has forbidden", x: "Stealing and lying are sins." },
    { t: "mourn", d: "to feel and show sadness when someone dies", x: "The family mourned for seven days." },
    { t: "comfort", d: "to make a sad person feel better", x: "We comfort a friend whose grandmother has died." }
  ],
  facts: [
    { q: "What is death?", a: "The end of life in the body." },
    { q: "Name the two types of death taught in this topic.", a: "Physical death and spiritual death." },
    { q: "What is physical death?", a: "When the body stops living." },
    { q: "What is spiritual death?", a: "Being separated from God because of sin." },
    { q: "What do both Holy Books teach about life after death?", a: "That the soul lives on and that God will judge each person." },
    { q: "What is sin?", a: "Doing what God has forbidden." },
    { q: "Name one way to comfort a person who has lost a relative.", a: "Visit them, speak kindly, sit with them, help with work or pray with them." },
    { q: "Do plants and animals also die?", a: "Yes, all living things die." }
  ],
  tf: [
    { s: "All living things die one day.", a: "true", why: "Death is a characteristic of every living thing." },
    { s: "Only old people die.", a: "false", why: "Death can come at any age, though we pray for long life." },
    { s: "Both the Holy Bible and the Holy Quran teach about life after death.", a: "true", why: "Both Holy Books teach judgment and a hereafter." },
    { s: "We should laugh at a child whose parent has died.", a: "false", why: "We should comfort him with kindness and respect." },
    { s: "Spiritual death means being separated from God by sin.", a: "true", why: "That is the meaning taught in this topic." },
    { s: "Doing good and obeying God has no effect on the hereafter.", a: "false", why: "Both faiths teach that God rewards those who obey Him." }
  ],
  apply: [
    { q: "Your friend's grandmother has died. What will you say and do?", a: "I will say sorry for his loss, sit with him, listen to him, and help him with his work at school." },
    { q: "Why should we live a good life now?", a: "Because life is short, and both faiths teach that God sees how we live and will judge us." },
    { q: "A child laughs at a funeral procession passing by. What would you tell him?", a: "That a family is grieving and we must be quiet and respectful, because one day it will be our turn to mourn." },
    { q: "How can a class remember a pupil who has died?", a: "By keeping a moment of silence, praying according to faith, and speaking well of him." },
    { q: "Name one good habit you will keep so that you live a life pleasing to God.", a: "For example: telling the truth every day, or helping my parents without being asked." }
  ],
  sort: {
    title: "Living things and non-living things",
    groups: [
      { name: "Living — they will die", items: ["a person", "a dog", "a mango tree", "a bird", "grass"] },
      { name: "Non-living — they do not die", items: ["a stone", "a table", "water", "a house"] }
    ]
  },
  compare: {
    title: "How our community shows respect at a time of death",
    caption: "Complete the table with what you have seen in your own community.",
    items: [
      { p: "Speaking to the family", f: "Speak gently, say sorry for their loss, and do not gossip." },
      { p: "Behaving at a funeral", f: "Dress properly, stay quiet, and follow the customs of the family's faith." },
      { p: "Helping the family", f: "Bring food, fetch water, help with the children, sit with them." },
      { p: "After the funeral", f: "Keep visiting them, because grief lasts longer than the funeral day." }
    ]
  },
  casestudy: {
    title: "Kollie's empty desk",
    text: "When the pupils of Grade One came to school on Monday, the desk where Kollie usually sat was empty. Their teacher told them quietly that Kollie's father had died at the weekend, and that Kollie would be away for some days. The class was very quiet. One boy began to whisper a joke, but the others did not laugh. Instead, the class decided to write a card. Each pupil wrote one kind sentence and drew a small flower. When Kollie came back to school the following week, the teacher gave him the card. Kollie read every sentence. He was still sad, but he said, “Thank you. I did not know so many people cared.”",
    questions: [
      { q: "Why was Kollie away from school?", a: "Because his father had died." },
      { q: "What did the class do to comfort him?", a: "They wrote a card in which each pupil wrote a kind sentence and drew a flower." },
      { q: "What does this story teach about how to treat someone who is grieving?", a: "That small acts of kindness and words of care help a grieving person to feel loved and not alone." }
    ]
  },
  project: {
    title: "A card of comfort",
    brief: "Make a card that could comfort someone who has lost a person they love.",
    steps: [
      "Fold a sheet of paper to make a card.",
      "On the front, draw something peaceful, such as a dove, a flower or a sunrise.",
      "Inside, write two kind sentences of comfort.",
      "Do not write anything that would make the person more sad.",
      "Read your card quietly to your teacher."
    ],
    criteria: ["gentle and respectful words", "two correct sentences", "neat drawing", "shows real care for others"]
  },
  activities: [
    "Discuss the meaning of death gently in class",
    "Discuss the types of death: physical and spiritual",
    "Learn what the Holy Books teach about judgment and the hereafter",
    "Practise words we use to comfort a grieving person"
  ],
  materials: ["Charts", "Poster sheets", "Pencils", "Colouring pencils"],
  assessment: ["Oral and written tests", "Class discussion", "Class work", "Assignments"]
},

{
  grade: 1, period: "VI", sem: "Two", icon: "🙏",
  title: "Worship and Offering",
  subtitle: "Praising God, praying, and the kinds of offering",
  outcomes: [
    "Learners will be able to acknowledge God, take part in praise and worship, pray, and name the various kinds of offerings."
  ],
  objectives: [
    "Know the purpose of praying",
    "Do self-prayer and praise without assistance",
    "Collectively sing with other people"
  ],
  note: "Worship is the way people honour God. Christians worship in the church and Muslims worship in the mosque. Both pray, sing or recite, read their Holy Book, and give offerings.",
  study:[
    /* ---- course text: Semester Two, Period VI — Worship and Offering (page 7) ---- */
    {k:"h3", t:"Kinds of Worship and Offering"},
    {k:"p", t:"**Worship** is how we show God that He is great and that we love Him. **Offering** is what we give to God and His house. We worship God by praising Him, by praying, and by giving."},
    {k:"rule"},
    {k:"h3", t:"Praising God through Songs, Prayers and Praises"},
    {k:"p", t:"We can **praise God** in many ways: by singing **songs** of praise, by saying **prayers** of thanks, and by telling others how **great God is**. Praise should come from the heart."},
    {k:"rule"},
    {k:"h3", t:"Types of Worship"},
    {k:"bul", items:["**Private worship** — praying and praising God alone", "**Fellowship worship** — worshipping with other believers", "**Prayer meetings** — gathering together to pray", "**General worship** — the regular service of the church or mosque", "**Self-prayer and praise** — praying to God without anyone helping us"]},
    {k:"rule"},
    {k:"h3", t:"Kinds of Offerings"},
    {k:"bul", items:["**General offering** — the offering given during worship", "**Tithe** — giving one tenth of what we earn or receive to God", "**Prayer offering** — an offering given with prayer", "**Worship God with thanksgiving** — giving thanks to God for His goodness"]},
    {k:"p", t:"Scripture references: the Holy Bible, Genesis 14:19-20, Malachi 3:8, Luke 5:16 and Mark 1:35; the Holy Quran 73:1-20 on prayer. Muslims also use books of prayer and praise, such as the Mohammad Book of Prayers."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:["Offer spontaneous prayers and praises.", "Read scriptures in reference to prayers, praises and service to the Lord.", "Sing simple songs of praise to God.", "Write two or three sentences on the various kinds of offerings and their importance."]}
  ],
  focus: ["Kinds of worship and offering", "Praising God through songs, prayers and praises", "Types of worship: private, fellowship, prayer meetings, general worship", "Kinds of offering: general offering, tithe"],
  terms: [
    { t: "worship", d: "honouring God through prayer, songs and service", x: "The family goes to worship every week." },
    { t: "prayer", d: "talking to God", x: "We say a prayer before we eat." },
    { t: "praise", d: "telling God how great He is", x: "The choir sang songs of praise." },
    { t: "offering", d: "a gift given to God during worship", x: "The children put their offering in the basket." },
    { t: "tithe", d: "a tenth part of what one earns, given to God", x: "Some believers give a tithe every month." },
    { t: "church", d: "the place where Christians worship", x: "They walked to the church on Sunday morning." },
    { t: "mosque", d: "the place where Muslims worship", x: "The men went to the mosque for Friday prayers." },
    { t: "private worship", d: "worshipping God alone", x: "Private worship can be done quietly at home." },
    { t: "fellowship", d: "worshipping together with other believers", x: "The fellowship met under the mango tree." },
    { t: "thanksgiving", d: "thanking God for what He has done", x: "The service was one of thanksgiving after the harvest." }
  ],
  facts: [
    { q: "What is worship?", a: "Honouring God through prayer, songs and service." },
    { q: "What is prayer?", a: "Talking to God." },
    { q: "Where do Christians worship?", a: "In the church." },
    { q: "Where do Muslims worship?", a: "In the mosque." },
    { q: "Name two kinds of worship.", a: "Any two: private worship, fellowship, prayer meetings and general worship." },
    { q: "What is an offering?", a: "A gift given to God during worship." },
    { q: "What is a tithe?", a: "A tenth part of what a person earns, given to God." },
    { q: "Name one reason why people pray.", a: "To thank God, to ask for help, to say sorry, or to praise Him." }
  ],
  tf: [
    { s: "Prayer is talking to God.", a: "true", why: "That is the simplest meaning of prayer." },
    { s: "Only grown-ups can pray.", a: "false", why: "Children can and should pray too." },
    { s: "Christians worship in the church and Muslims worship in the mosque.", a: "true", why: "These are the places of worship of the two faiths." },
    { s: "An offering must always be money.", a: "false", why: "An offering can also be food, service, or a gift of time and help." },
    { s: "We should keep quiet and behave well in a place of worship.", a: "true", why: "Places of worship are treated with reverence." },
    { s: "Singing songs of praise is a form of worship.", a: "true", why: "Praise through song is one of the main forms of worship." }
  ],
  apply: [
    { q: "Say one short prayer of thanksgiving in your own words.", a: "For example: Thank You God for my life, my family and my school. Keep us safe today." },
    { q: "You have no money for the offering. What else can you give to God?", a: "I can give my time and service — helping to sweep, sing, carry chairs or care for a younger child." },
    { q: "How should you behave when you visit the place of worship of another faith?", a: "Quietly and respectfully: follow their customs, dress properly, and do not laugh at what is strange to me." },
    { q: "Why is it good to worship together with other people?", a: "Because we encourage one another, learn together, and the community becomes stronger." },
    { q: "Name one thing you can thank God for today and say why.", a: "For example: my mother, because she cares for me and feeds me." }
  ],
  sort: {
    title: "Kinds of worship and kinds of offering",
    groups: [
      { name: "Kinds of worship", items: ["private prayer", "fellowship", "prayer meeting", "general worship", "songs of praise"] },
      { name: "Kinds of offering", items: ["general offering", "tithe", "thanksgiving gift", "service to others"] }
    ]
  },
  compare: {
    title: "Worship in the church and worship in the mosque",
    caption: "Complete the table respectfully. Both faiths honour the same God.",
    items: [
      { p: "Place of worship", f: "Church for Christians; mosque for Muslims." },
      { p: "Holy Book used", f: "The Holy Bible for Christians; the Holy Quran for Muslims." },
      { p: "Main day of worship", f: "Sunday for most Christians; Friday for Muslims." },
      { p: "Common actions", f: "Prayer, reading the Holy Book, songs or recitation, and giving offerings." },
      { p: "How we behave as visitors", f: "Quietly, politely and following the customs of that place." }
    ]
  },
  casestudy: {
    title: "Two friends on Friday and Sunday",
    text: "Sando and Mamadee live in the same yard in Gbarnga and sit together at school. On Friday afternoon Mamadee washes carefully, puts on clean clothes and goes with his father to the mosque. Sando does not go with him, but he watches his friend's bicycle so that nothing happens to it. On Sunday morning Sando dresses in his best shirt and goes with his mother to church. Mamadee cannot go inside, but he walks with Sando to the church gate and waits to walk home with him afterwards. Their mothers say the two boys have taught the whole yard something about living together.",
    questions: [
      { q: "Where does Mamadee go on Friday, and where does Sando go on Sunday?", a: "Mamadee goes to the mosque on Friday and Sando goes to the church on Sunday." },
      { q: "Give one way each boy helped the other.", a: "Sando watched Mamadee's bicycle, and Mamadee walked Sando to the church gate and waited for him." },
      { q: "What have the two boys taught the yard?", a: "That people of different faiths can respect one another and live together in peace." }
    ]
  },
  project: {
    title: "My book of prayers and praise",
    brief: "Make a small book of prayers of thanksgiving in your own words.",
    steps: [
      "Fold two sheets to make a small book.",
      "On page one write a prayer thanking God for your family.",
      "On page two write a prayer thanking God for your school.",
      "On page three write a prayer asking God to help your community.",
      "Decorate the cover and read one prayer aloud to your group."
    ],
    criteria: ["three prayers written in the pupil's own words", "prayers are respectful", "neat decoration", "clear reading aloud"]
  },
  activities: [
    "Learn and sing songs and rhymes of praise",
    "Practise saying a short prayer without help",
    "Discuss the kinds of worship and offering",
    "Draw and colour a place of worship"
  ],
  materials: ["Charts", "Poster sheets", "Markers", "Colouring pencils"],
  assessment: ["Oral and written tests", "Reading", "Singing and recitation", "Class work"]
},

/* ============================ GRADE 2 ============================ */
{
  grade: 2, period: "I", sem: "One", icon: "🌅",
  title: "Creation",
  subtitle: "The creation story: animals, plants, the heavenly bodies and man",
  outcomes: [
    "Learners understand in its fullness God's creation story."
  ],
  objectives: [
    "List the creation by God as it relates to animals, plants, the heavenly bodies and man",
    "List some animals and plants made by God",
    "Explain about the sky, sun, moon and stars"
  ],
  note: "The Holy Bible tells that God made the world and everything in it, and the Holy Quran teaches that God created the heavens and the earth. In this topic we look closely at four parts of creation: plants, animals, the heavenly bodies and man.",
  study:[
    /* ---- course text: Semester One, Period I — Creation (page 8) ---- */
    {k:"h3", t:"The Creation Story"},
    {k:"p", t:"God created all things. The **creation story** tells how God made the **animals**, **man**, **plants** and the whole **universe**. In Grade 2 we learn the story in its fullness — the Bible account and the Quran account side by side."},
    {k:"p", t:"Scripture references: the Holy Bible, Genesis 1 and 2, and Psalm 24:1-2 ('The earth is the Lord's and everything in it'); the Holy Quran 2:164, which calls people to reflect on the signs of God's creation."},
    {k:"rule"},
    {k:"h3", t:"Animals Made by God"},
    {k:"p", t:"God made all the **animals** — the beasts of the forest, the birds of the air and the fish of the sea. Each animal has its own place in creation, and God gave man care over them."},
    {k:"rule"},
    {k:"h3", t:"Plants Made by God"},
    {k:"p", t:"God made the **plants** — the trees that give fruit, the grass that covers the ground, and the food that grows from the soil. Plants give us food, shade, medicine and wood."},
    {k:"rule"},
    {k:"h3", t:"The Universe — Sky, Sun, Moon and Stars"},
    {k:"p", t:"God made the **universe**: the **sky** above us, the **sun** that gives light and heat by day, the **moon** that shines at night, and the **stars** that fill the heavens. Psalm 24:1-2 teaches that the whole earth and everything in it belongs to God."},
    {k:"p", t:"**How many days did it take to make the world?** The Bible teaches that God created the heavens and the earth in **six days** and rested on the seventh day (Genesis 1 and 2)."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:["Read and discuss the creation story from the Bible and the Quran.", "Make a spontaneous prayer of praise and thanksgiving to God for His creation.", "Sing songs and rhymes of praise, and read Bible verses on creation.", "Go out of the class to observe and describe God's creation around the school."]}
  ],
  focus: ["The creation story: animals, man, plants, the universe", "The existence of the sky, sun, moon and stars"],
  terms: [
    { t: "universe", d: "everything that exists — the earth, sky, sun, moon and stars", x: "God created the whole universe." },
    { t: "heavenly bodies", d: "the sun, the moon and the stars in the sky", x: "The heavenly bodies give us light." },
    { t: "sun", d: "the great light that shines in the day", x: "The sun gives us light and warmth." },
    { t: "moon", d: "the light that shines at night", x: "The moon was full and bright last night." },
    { t: "star", d: "a small bright light seen in the night sky", x: "We counted every star we could see." },
    { t: "plant", d: "a living thing that grows in the soil", x: "A cassava plant grows well in our garden." },
    { t: "animal", d: "a living creature that moves and feeds", x: "The goat is an animal God created." },
    { t: "man", d: "human beings, both male and female, created by God", x: "God created man in His own likeness." },
    { t: "sky", d: "the space above the earth where clouds are seen", x: "Birds fly across the sky." },
    { t: "creation story", d: "the account of how God made the world", x: "We read the creation story in the Holy Book." }
  ],
  facts: [
    { q: "What is the universe?", a: "Everything that exists — the earth, the sky, the sun, the moon and the stars." },
    { q: "Name the three heavenly bodies studied in this topic.", a: "The sun, the moon and the stars." },
    { q: "Which heavenly body gives light in the day?", a: "The sun." },
    { q: "Which heavenly bodies give light at night?", a: "The moon and the stars." },
    { q: "Name three animals that God created.", a: "Any three, for example: goat, cow and chicken." },
    { q: "Name three plants that God created.", a: "Any three, for example: cassava, rice and mango tree." },
    { q: "Who is the highest of God's creation on earth?", a: "Man — human beings." },
    { q: "Why should we care for plants and animals?", a: "Because God created them and gave them to us to use wisely." }
  ],
  tf: [
    { s: "The sun, moon and stars are called heavenly bodies.", a: "true", why: "They are the lights God placed in the sky." },
    { s: "The moon gives light during the day.", a: "false", why: "The sun gives light in the day; the moon shines at night." },
    { s: "Plants are living things created by God.", a: "true", why: "Plants grow, feed and reproduce, so they are living things." },
    { s: "People created the first animals.", a: "false", why: "God created the animals; people only care for and breed them." },
    { s: "The universe includes the earth and the sky.", a: "true", why: "The universe is everything that exists." },
    { s: "It does not matter if we destroy plants and animals.", a: "false", why: "They are part of God's creation and we depend on them." }
  ],
  apply: [
    { q: "Your family clears land and burns the bush carelessly. What is the danger to creation?", a: "The fire can kill animals and useful plants and spread to other farms. We should clear carefully and protect what God made." },
    { q: "Name one way your class can care for plants at school.", a: "We can plant a tree or flowers, water them, and stop pupils from breaking the branches." },
    { q: "How do the sun and the rain help the farmer?", a: "The sun gives light and warmth for the crops to grow, and the rain gives water to the soil." },
    { q: "Why is it wrong to be cruel to an animal?", a: "Because the animal is God's creation, it feels pain, and cruelty shows a bad heart." },
    { q: "A friend says only rich people matter. What does creation teach you?", a: "That God created every person, so rich and poor are equally valuable." }
  ],
  sort: {
    title: "Sorting God's creation",
    groups: [
      { name: "Plants", items: ["cassava", "rice", "mango tree", "palm tree"] },
      { name: "Animals", items: ["goat", "chicken", "fish", "cow"] },
      { name: "Heavenly bodies", items: ["sun", "moon", "stars"] }
    ]
  },
  compare: {
    title: "Four parts of God's creation",
    caption: "Complete the table with what each part of creation gives us.",
    items: [
      { p: "Plants", f: "They give us food, medicine, shade, wood and clean air." },
      { p: "Animals", f: "They give us meat, milk, eggs, help with work, and company." },
      { p: "The heavenly bodies", f: "The sun gives light and warmth by day; the moon and stars give light at night and mark the seasons." },
      { p: "Man", f: "Created to know God, to care for the earth and to live in peace with others." }
    ]
  },
  casestudy: {
    title: "The class garden",
    text: "The pupils of Grade Two planted a small garden behind their school in Kakata. They planted pepper, bitterball and green leaves. Every morning two pupils watered the garden before the bell rang. When the sun was very hot, they put palm branches over the young plants for shade. After some weeks the plants grew tall and gave fruit. The class cooked one pot of soup with what they harvested and shared it with the whole school. Their teacher said, “God gives the seed, the sun and the rain. But God also gave you hands, and you used them well.”",
    questions: [
      { q: "What did the pupils plant in their garden?", a: "They planted pepper, bitterball and green leaves." },
      { q: "How did the pupils protect the young plants from the hot sun?", a: "They put palm branches over them to give shade." },
      { q: "What did the teacher mean by saying God gave them hands?", a: "That God provides the seed, sun and rain, but people must also work faithfully to care for creation." }
    ]
  },
  project: {
    title: "My creation chart",
    brief: "Make a chart showing the four parts of God's creation studied in this unit.",
    steps: [
      "Divide a large sheet into four boxes.",
      "Label the boxes: Plants, Animals, Heavenly bodies, Man.",
      "Draw and colour at least three items in each box.",
      "Under each box write one sentence telling how that part of creation helps us.",
      "Display your chart and explain it to the class."
    ],
    criteria: ["four boxes correctly labelled", "at least three drawings in each box", "one correct sentence per box", "neat and colourful work"]
  },
  activities: [
    "Read and discuss the creation story",
    "Spontaneous prayer of praise and thanksgiving to God for His creation",
    "Sing songs and rhymes of praise",
    "Field trip: go out of the class to observe and describe God's creation"
  ],
  materials: ["Poster sheets", "Colouring pencils", "Markers", "Pens"],
  assessment: ["Oral and written tests", "Reading", "Class work", "Quizzes", "Assignments"]
},

{
  grade: 2, period: "II", sem: "One", icon: "🤝",
  title: "Commitment",
  subtitle: "God's promises to man and man's promises to God",
  outcomes: [
    "Learners will know that God is the greatest promise keeper.",
    "Learners understand the importance of keeping promises to God and to each other."
  ],
  objectives: [
    "Explain God's promises to man",
    "Explain man's promises to God",
    "Understand the importance of keeping promises"
  ],
  note: "A commitment is a promise you decide to keep. Both Holy Books teach that God always keeps His promises, and that people should keep their promises to God and to one another.",
  study:[
    /* ---- course text: Semester One, Period II — Commitment (page 9) ---- */
    {k:"h3", t:"God's Commitment and Promises to Mankind"},
    {k:"p", t:"**God is the greatest promise keeper.** He made promises (covenants) to man and He always keeps them. After the flood, God promised Noah that He would never destroy the earth with a flood again, and He set the **rainbow** in the sky as the sign of that promise."},
    {k:"p", t:"Scripture references: the Holy Bible, Genesis 9:13-16 (the rainbow covenant), John 3:16 and 1 John 4:8 ('God is love'); the Holy Quran 2:164 on the signs of God."},
    {k:"rule"},
    {k:"h3", t:"Man's Commitment to God"},
    {k:"p", t:"Because God keeps His promises, we must keep **our promises to God**. We show commitment to God by obeying Him, praying to Him, worshipping Him and loving Him with all our heart."},
    {k:"p", t:"Read scripture verses such as **'God is love'** (1 John 4:8), **'Love your neighbour as yourself'** and **'Children, obey your parents in the Lord'**, and read the corresponding scripture verses from the Holy Quran."},
    {k:"rule"},
    {k:"h3", t:"Man's Commitment to Man"},
    {k:"p", t:"We also make **promises to each other** — to our parents, our teachers, our friends and those who take care of us. Keeping a promise builds **trust**; breaking a promise hurts the person we failed."},
    {k:"bul", items:["Promise to obey your parents, teachers and those who take care of you.", "Make and keep promises to your friends.", "Discuss promises that were broken and how you felt.", "Write one paragraph explaining God's promises to man."]}
  ],
  focus: ["God's commitment and promises to mankind", "Man's commitment to God", "Man's commitment to man"],
  terms: [
    { t: "commitment", d: "a promise you decide to keep, whatever happens", x: "Coming to school every day is a commitment." },
    { t: "promise", d: "words telling someone that you will surely do something", x: "He made a promise to help his mother." },
    { t: "keep a promise", d: "to do what you said you would do", x: "A good friend will keep a promise." },
    { t: "break a promise", d: "to fail to do what you said you would do", x: "He broke his promise and his friend was hurt." },
    { t: "trust", d: "believing that someone will do what is right", x: "We trust people who keep their word." },
    { t: "faithful", d: "always keeping your promises and duties", x: "A faithful pupil does his homework every day." },
    { t: "covenant", d: "a solemn agreement between God and people", x: "The rainbow is a sign of God's covenant." },
    { t: "duty", d: "something you must do because it is right", x: "It is my duty to respect my parents." },
    { t: "honesty", d: "speaking the truth and not deceiving", x: "Honesty makes people trust you." },
    { t: "responsibility", d: "the task you are trusted to carry out", x: "Sweeping the classroom is my responsibility." }
  ],
  facts: [
    { q: "What is a commitment?", a: "A promise you decide to keep, whatever happens." },
    { q: "Who is the greatest promise keeper?", a: "God is the greatest promise keeper." },
    { q: "Give one example of a promise a pupil can make to God.", a: "To pray daily, to tell the truth, or to be kind to others." },
    { q: "Give one example of a promise a pupil can make to a friend.", a: "To return a borrowed book, or to keep a secret that is not harmful." },
    { q: "What happens when a person always breaks promises?", a: "People stop trusting him." },
    { q: "What is a covenant?", a: "A solemn agreement between God and people." },
    { q: "Why is it better not to promise than to promise and fail?", a: "Because a broken promise hurts the other person and destroys trust." },
    { q: "Name one duty you owe your parents.", a: "To obey them, to help with work at home, and to respect them." }
  ],
  tf: [
    { s: "God always keeps His promises.", a: "true", why: "Both Holy Books teach that God is faithful." },
    { s: "It is a small thing to break a promise to a friend.", a: "false", why: "Breaking a promise hurts the friend and destroys trust." },
    { s: "A commitment is a promise you decide to keep.", a: "true", why: "That is the meaning of commitment." },
    { s: "Only adults can make commitments.", a: "false", why: "Children make and keep commitments at home and at school." },
    { s: "People trust those who keep their word.", a: "true", why: "Faithfulness builds trust." },
    { s: "You should promise anything just to please people.", a: "false", why: "It is better to promise only what you can truly do." }
  ],
  apply: [
    { q: "You promised to help your friend study but your cousins came to play. What will you do?", a: "Keep my promise and study with my friend first; I can play afterwards. A promise comes before play." },
    { q: "Why do people stop trusting a person who lies?", a: "Because they can no longer believe what he says or depend on him." },
    { q: "Write one commitment you will make to your class this term.", a: "For example: I will come to school on time every day, or I will not fight with any classmate." },
    { q: "Your friend asks you to promise to hide that he stole money. What should you say?", a: "I should refuse. A promise must never be used to cover wrongdoing; I should encourage him to return it and tell the truth." },
    { q: "How does keeping promises make a family strong?", a: "Everyone can depend on one another, there are fewer quarrels, and there is peace and trust in the home." }
  ],
  sort: {
    title: "Keeping and breaking commitments",
    groups: [
      { name: "Keeping a commitment", items: ["returning a borrowed book", "coming to school daily", "doing your chores", "praying as you promised"] },
      { name: "Breaking a commitment", items: ["forgetting on purpose", "making excuses", "running away from your duty"] }
    ]
  },
  compare: {
    title: "Three kinds of commitment",
    caption: "Complete the table with one clear example for each kind of commitment.",
    items: [
      { p: "Commitment of God to man", f: "God promises to care for, provide for and never abandon those who trust Him." },
      { p: "Commitment of man to God", f: "To worship Him, obey His commandments and live an honest life." },
      { p: "Commitment of man to man", f: "To keep our word to family and friends, to be loyal and to help one another." },
      { p: "Commitment to yourself", f: "To study, to keep clean, and to grow into a good and useful person." }
    ]
  },
  casestudy: {
    title: "The promise of the rainbow",
    text: "The Holy Book tells that long ago the earth became very wicked, and a great flood covered the land. One man, Noah, obeyed God and built a large boat. He took his family and pairs of animals into the boat, and they were saved. When at last the water dried and they came out onto dry ground, God made a promise. He set a rainbow in the clouds and said that never again would a flood destroy the whole earth. Whenever people see the rainbow after the rain, they remember that God keeps His promises.",
    questions: [
      { q: "Who obeyed God and built the boat?", a: "Noah obeyed God and built the boat." },
      { q: "What sign did God set in the clouds?", a: "God set a rainbow in the clouds." },
      { q: "What does the rainbow remind people of?", a: "That God keeps His promises." }
    ]
  },
  project: {
    title: "My promise card",
    brief: "Make a promise card showing one commitment you will keep for a whole month.",
    steps: [
      "Cut a card from stiff paper.",
      "Write at the top: MY COMMITMENT.",
      "Write one promise you can truly keep, for example helping at home each evening.",
      "Rule thirty small boxes and tick one each day you keep your promise.",
      "At the end of the month, tell the class how many days you kept it and what you learned."
    ],
    criteria: ["a realistic promise chosen", "thirty boxes ruled neatly", "honest ticking", "clear report to the class"]
  },
  activities: [
    "Read scripture verses on love and obedience from the Holy Bible and the Holy Quran",
    "Children promise to obey parents, teachers and those who care for them",
    "Make and keep promises to friends",
    "Discuss promises that were broken and how you felt"
  ],
  materials: ["Books", "Charts", "Poster sheets", "Pens"],
  assessment: ["Oral and written tests", "Reading", "Class work", "Assignments"]
},

{
  grade: 2, period: "III", sem: "One", icon: "⚖️",
  title: "Commandments",
  subtitle: "Kindness, love, loyalty, honesty and truthfulness",
  outcomes: [
    "Learners understand the commandments of God, and their responsibilities to God and to their fellow man through acts of kindness, love, loyalty, honesty and truthfulness."
  ],
  objectives: [
    "Show forgiveness",
    "Demonstrate loyalty, truthfulness and love to the Creator and to fellow man",
    "Perform honest duties to God and man"
  ],
  note: "God's commandments can be summed up in two duties: love God, and love your neighbour as yourself. Everything we learn about kindness, honesty and forgiveness grows out of these two.",
  study:[
    /* ---- course text: Semester One, Period III — Commandments (page 11) ---- */
    {k:"h3", t:"God's Faithfulness to Man"},
    {k:"p", t:"God is **faithful** — He keeps His word and His commandments. Because God is faithful to us, He expects us to be faithful to Him and to one another. Scripture references: the Holy Bible, Matthew 5:44-45 and John 13:34 (love one another as I have loved you)."},
    {k:"rule"},
    {k:"h3", t:"Man's Responsibility to God"},
    {k:"p", t:"Man's first responsibility is to **God**: to love Him, obey His commandments, thank Him and worship Him. When we do our duty to God, we learn to do our duty to other people."},
    {k:"rule"},
    {k:"h3", t:"Man's Responsibility to His Fellow Man"},
    {k:"p", t:"The commandments of God call us to live well with other people through acts of:"},
    {k:"bul", items:["**Forgivingness** — forgiving those who wrong us, as Jesus forgave (Luke 22:54-62; John 10:18)", "**Kindness** — doing good to others even when they are not kind to us (Matthew 5:44-45)", "**Helpfulness** — lending a hand at home, at school and in the community", "**Honesty** — telling the truth and not taking things that are not ours", "**Truthfulness and loyalty** — standing by the truth and by our friends and family"]},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:["Write on examples of kindness and love.", "Show an example of giving and showing kindness at home and in the community.", "Resist the temptation to take things that are not yours.", "Make a field trip to the market, hospital or community to observe and practise good behaviour."]}
  ],
  focus: ["Forgiveness", "Loyalty, truthfulness and love", "Honest duties to God and to man"],
  terms: [
    { t: "loyalty", d: "standing by God, your family and your friends", x: "She showed loyalty by defending her friend from unfair blame." },
    { t: "truthfulness", d: "always saying what is true", x: "Truthfulness is better than a clever lie." },
    { t: "forgiveness", d: "letting go of anger against someone who wronged you", x: "He asked for forgiveness and it was granted." },
    { t: "apologise", d: "to say sorry for a wrong you have done", x: "She apologised for stepping on his foot." },
    { t: "responsibility", d: "a duty you are trusted to carry out", x: "Cleaning the board is my responsibility." },
    { t: "cheat", d: "to gain something by dishonest means", x: "It is wrong to cheat in an examination." },
    { t: "greed", d: "wanting far more than you need", x: "Greed made him take all the food." },
    { t: "self-control", d: "holding back from doing wrong when you are tempted", x: "Self-control kept him from fighting." },
    { t: "conscience", d: "the inner voice that tells you right from wrong", x: "His conscience troubled him after he lied." },
    { t: "obedience", d: "doing what God and those over you have rightly told you", x: "Obedience keeps a child safe." }
  ],
  facts: [
    { q: "What are the two great duties that sum up the commandments?", a: "To love God, and to love your neighbour as yourself." },
    { q: "What is forgiveness?", a: "Letting go of anger against someone who has wronged you." },
    { q: "What is loyalty?", a: "Standing by God, your family and your friends." },
    { q: "Name two acts that show honesty at school.", a: "Not cheating in tests and returning things that are not mine." },
    { q: "What is a conscience?", a: "The inner voice that tells you right from wrong." },
    { q: "Why is cheating in an examination wrong?", a: "It is a lie about what you know and it is unfair to other pupils." },
    { q: "Name one commandment about respecting parents.", a: "Honour your father and your mother." },
    { q: "What should you do after you have wronged someone?", a: "Apologise sincerely and put right what I can." }
  ],
  tf: [
    { s: "The commandments teach us to love God and our neighbour.", a: "true", why: "These two duties sum up all the commandments." },
    { s: "Forgiving someone means you must pretend nothing happened.", a: "false", why: "Forgiving means letting go of anger, but the wrong can still be talked about honestly." },
    { s: "Cheating in a test is a form of dishonesty.", a: "true", why: "It is a lie about what you really know." },
    { s: "Loyalty means helping your friend to do wrong.", a: "false", why: "True loyalty means helping your friend to do what is right." },
    { s: "Our conscience helps us to know right from wrong.", a: "true", why: "The conscience is the inner voice that guides us." },
    { s: "Saying sorry is a sign of weakness.", a: "false", why: "Saying sorry is a sign of courage and honesty." }
  ],
  apply: [
    { q: "Your best friend cheats in a test and asks you to keep quiet. What is the loyal thing to do?", a: "Real loyalty is to urge him to tell the teacher and stop cheating, because covering it up harms him and the class." },
    { q: "Someone spoils your book on purpose and later apologises. How will you show forgiveness?", a: "I will accept his apology, stop being angry, and continue to treat him kindly." },
    { q: "You are given more change than you should get at the market. What will you do?", a: "Return the extra money, because keeping it would be dishonest." },
    { q: "Name one duty you owe to God and one you owe to your neighbour.", a: "To God: to worship and obey Him. To my neighbour: to help and not to harm him." },
    { q: "How does self-control help you avoid a fight?", a: "It helps me walk away, keep quiet, and settle the matter with words or with a teacher instead of blows." }
  ],
  sort: {
    title: "Duties to God and duties to fellow man",
    groups: [
      { name: "Duty to God", items: ["pray", "worship", "obey His commandments", "give thanks"] },
      { name: "Duty to fellow man", items: ["speak the truth", "help the needy", "forgive", "respect elders", "return what you borrow"] }
    ]
  },
  compare: {
    title: "Doing right and doing wrong — and the result",
    caption: "Complete the table by explaining what follows from each action.",
    items: [
      { p: "Telling the truth", f: "People trust you, your conscience is clear, and quarrels are avoided." },
      { p: "Telling lies", f: "You lose trust, one lie leads to another, and you are troubled inside." },
      { p: "Forgiving quickly", f: "Friendship is restored and peace returns to the group." },
      { p: "Holding anger", f: "Bitterness grows, friendships break and fights follow." }
    ]
  },
  casestudy: {
    title: "The torn exercise book",
    text: "Tarnue borrowed Fatu's exercise book to copy the notes he had missed. While he was carrying it home in the rain, the book got wet and two pages tore. Tarnue was afraid. He thought of saying that he never borrowed the book at all. But when he saw Fatu the next morning, he decided to speak the truth. He said, “Fatu, I am sorry. Your book got wet in the rain and two pages tore. I will copy the pages again for you tonight.” Fatu was upset, but she said, “Thank you for telling me the truth. Many people would have lied.” That evening Tarnue copied the two pages neatly, and the two remained friends.",
    questions: [
      { q: "What was Tarnue first tempted to do?", a: "He was tempted to lie and say he had never borrowed the book." },
      { q: "What did Tarnue actually do?", a: "He told Fatu the truth, apologised, and copied the torn pages again." },
      { q: "Why did the friendship survive?", a: "Because Tarnue was honest and put right the damage, and Fatu forgave him." }
    ]
  },
  project: {
    title: "Our classroom code of conduct",
    brief: "Work in groups to write a code of conduct for your class, based on the commandments.",
    steps: [
      "In your group, discuss the behaviour that makes a class peaceful.",
      "Write five rules, each beginning with the words We will.",
      "Make sure at least one rule is about honesty and one about forgiveness.",
      "Write the rules neatly on a large sheet.",
      "Present them to the class and agree on the final code together."
    ],
    criteria: ["five clear rules", "rules match the commandments studied", "honesty and forgiveness included", "neat presentation and group co-operation"]
  },
  activities: [
    "Read and discuss the commandments of God",
    "Dramatise a scene of forgiveness in the classroom",
    "Discuss honest duties to God and man",
    "Group written work on loyalty and truthfulness"
  ],
  materials: ["Charts", "Poster sheets", "Markers", "Pens"],
  assessment: ["Oral and written tests", "Reading", "Class work", "Quizzes"]
},

{
  grade: 2, period: "IV", sem: "Two", icon: "🕌",
  title: "Worship and Offering",
  subtitle: "Places of worship, ways of praying and kinds of offering",
  outcomes: [
    "Learners know the various ways of worshipping God and the purpose of offerings in the church and in the mosque, according to faith."
  ],
  objectives: [
    "Name and describe places of worship",
    "Demonstrate private and public prayer",
    "Name the kinds of offering given in worship"
  ],
  note: "People worship God in different ways, but with the same reverence. Christians gather in the church and Muslims in the mosque. In each place there is prayer, reading of the Holy Book, praise and the giving of offerings.",
  study:[
    /* ---- course text: Semester Two, Period IV — Worship and Offering (pages 12-13) ---- */
    {k:"h3", t:"Who Is Jesus Christ?"},
    {k:"p", t:"Christians believe **Jesus Christ is the Son of God** and the Saviour. He holds an important place in the church as the head of the church. Muslims honour Jesus (Isa) as a great prophet of God. Scripture references: the Holy Bible, John 3:16, Matthew 17:5 and Matthew 16:16; the Holy Quran 3:45 on the good news of Jesus."},
    {k:"rule"},
    {k:"h3", t:"Praying to God in the Name of Jesus"},
    {k:"p", t:"Christians **pray to God through Jesus Christ**. Jesus taught His followers to pray, and He gave them the **Lord's Prayer** (Matthew 6:9-13): 'Our Father who art in heaven, hallowed be Thy name...'"},
    {k:"rule"},
    {k:"h3", t:"Praying in Private and in Public"},
    {k:"p", t:"We can pray **in private** (alone) and **in public** — in the church, the mosque, the classroom and at other gatherings. Both the Bible and the Quran teach believers to pray: pray aloud and pray quietly."},
    {k:"p", t:"Scripture references: the Holy Bible, Matthew 6:9-13, Luke 11:9-13 and 1 Samuel 3:10-18; prayers from the Holy Quran, including Quran 37:103-106. Muslim learners learn the **Al-Fatiha**, the opening prayer of the Quran, which asks for God's guidance, lordship and mercy."},
    {k:"rule"},
    {k:"h3", t:"Committing Oneself to Acts of Charity"},
    {k:"p", t:"Worship is not only in words — it is also in **acts of charity** (giving and helping). Jesus taught us to give freely, and the Quran also teaches giving to those in need. Dramatise stories in the Holy Bible and the Holy Quran as they relate to giving freely."},
    {k:"bul", items:["Carry out spontaneous prayers for others.", "Learn the Lord's Prayer and the Al-Fatiha of the Holy Quran through reading and listening.", "Give freely in acts of kindness.", "Attend places of worship and practise praying aloud and quietly.", "Write a paragraph each on private prayer and general prayer."]}
  ],
  focus: ["Forms of worship", "Prayer in general", "Worship with tithes and offerings", "Worship in thanksgiving and personal service"],
  terms: [
    { t: "reverence", d: "deep respect shown to God and to holy places", x: "We enter the place of worship with reverence." },
    { t: "public prayer", d: "praying together with other people", x: "Public prayer was led by the elder." },
    { t: "private prayer", d: "praying alone and quietly", x: "She said a private prayer before sleeping." },
    { t: "devotion", d: "a short time of worship, often at home or at school", x: "Morning devotion is held at the flag pole." },
    { t: "congregation", d: "the people gathered together for worship", x: "The whole congregation stood to sing." },
    { t: "hymn", d: "a song of praise to God", x: "They sang a hymn of thanksgiving." },
    { t: "sacrifice", d: "something valuable given up in worship or for others", x: "Giving up his own share was a real sacrifice." },
    { t: "tithe", d: "a tenth part of what one earns, given to God", x: "He set aside his tithe every month." },
    { t: "altar", d: "the special table or place used in worship", x: "The offering was placed before the altar." },
    { t: "meditation", d: "thinking quietly about God and His word", x: "A few minutes of meditation calms the heart." }
  ],
  facts: [
    { q: "What is the place of worship for Christians called?", a: "The church." },
    { q: "What is the place of worship for Muslims called?", a: "The mosque." },
    { q: "What is private prayer?", a: "Praying alone and quietly." },
    { q: "What is public prayer?", a: "Praying together with other people." },
    { q: "Name two kinds of offering.", a: "Any two: the general offering, the tithe, a thanksgiving gift and personal service." },
    { q: "What is a hymn?", a: "A song of praise to God." },
    { q: "What is meditation?", a: "Thinking quietly about God and His word." },
    { q: "Give one reason why people give offerings.", a: "To thank God, to support the place of worship and to help the needy." }
  ],
  tf: [
    { s: "Christians worship in a church and Muslims in a mosque.", a: "true", why: "These are the two places of worship named in the syllabus." },
    { s: "Prayer can only be said in a place of worship.", a: "false", why: "Prayer can be said anywhere — at home, at school or on the road." },
    { s: "A tithe is a tenth part of what a person earns.", a: "true", why: "That is the meaning of a tithe." },
    { s: "It is right to shout and play inside a place of worship.", a: "false", why: "Places of worship are entered with reverence and quietness." },
    { s: "Personal service can be a form of offering to God.", a: "true", why: "Time, work and help given freely are offerings too." },
    { s: "Only rich people can worship God properly.", a: "false", why: "God receives the worship of rich and poor alike." }
  ],
  apply: [
    { q: "How would you prepare yourself before going to a place of worship?", a: "Wash and dress neatly, go on time, carry my Holy Book, and quiet my mind to think about God." },
    { q: "Your friend of another faith invites you to a ceremony at his place of worship. How will you behave?", a: "I will dress properly, stay quiet, follow their customs, and not mock anything that is strange to me." },
    { q: "Give two ways a pupil can offer service instead of money.", a: "Sweeping the place of worship or the classroom, and helping to arrange chairs or care for younger children." },
    { q: "Why should worship also change how we treat people during the week?", a: "Because true worship is not only words; it should make us kinder, more honest and more helpful every day." },
    { q: "How can your class hold a short devotion in the morning?", a: "By singing a song, reading a short passage, and saying a prayer, giving pupils of each faith a turn to lead according to their faith." }
  ],
  sort: {
    title: "Places of worship, actions of worship and kinds of offering",
    groups: [
      { name: "Places of worship", items: ["church", "mosque", "home devotion", "school assembly"] },
      { name: "Actions of worship", items: ["prayer", "singing hymns", "reading the Holy Book", "meditation"] },
      { name: "Kinds of offering", items: ["tithe", "general offering", "thanksgiving gift", "personal service"] }
    ]
  },
  compare: {
    title: "Private worship and public worship",
    caption: "Complete the table showing the value of each kind of worship.",
    items: [
      { p: "Private worship", f: "Done alone and quietly; it builds a personal relationship with God." },
      { p: "Public worship", f: "Done with the congregation; it encourages believers and builds the community." },
      { p: "Home devotion", f: "The family worships together; children learn faith from their parents." },
      { p: "School devotion", f: "Pupils begin the day with prayer and praise, each according to faith." }
    ]
  },
  casestudy: {
    title: "The widow's small coin",
    text: "One day a teacher sat near the place where people brought their offerings. Many rich people came and put in large amounts of money, and everyone could hear the coins falling. Then a poor widow came quietly and put in two very small coins, worth almost nothing. The teacher called his students and said to them, “This poor widow has given more than all the others. They gave out of what they had left over, but she was poor and gave everything she had to live on.” The students were surprised, because they had been counting the size of the gifts and not the heart of the giver.",
    questions: [
      { q: "What did the poor widow put into the offering?", a: "She put in two very small coins." },
      { q: "Why did the teacher say she had given more than the rich people?", a: "Because they gave out of their surplus, but she gave everything she had." },
      { q: "What does this story teach about giving?", a: "That God looks at the heart of the giver, not at the size of the gift." }
    ]
  },
  project: {
    title: "Our place of worship — a drawing and report",
    brief: "Draw a place of worship in your community and write a short report about worship there.",
    steps: [
      "Choose a church or a mosque in your community, according to your faith.",
      "Draw the building carefully and label two parts of it.",
      "Write four sentences: what day people worship there, how they pray, what they sing or recite, and what offerings are given.",
      "Ask an adult of that faith one polite question and write the answer.",
      "Read your report to your group."
    ],
    criteria: ["clear labelled drawing", "four correct sentences", "one question asked politely", "respectful language throughout"]
  },
  activities: [
    "Read scriptures of prayer and sing hymns used at services and home devotion",
    "Practise private and public prayer",
    "Draw and colour pictures of churches and mosques",
    "Write a paragraph each on self-prayer and meditation"
  ],
  materials: ["Posters", "Markers", "Pens", "Pencils", "Colouring pencils"],
  assessment: ["Oral and written tests", "Reading", "Written work", "Class work", "Quizzes"]
},

{
  grade: 2, period: "V", sem: "Two", icon: "📖",
  title: "Religious Personality — Christian Emphasis",
  subtitle: "Jesus Christ, his followers and the teachers of the faith",
  outcomes: [
    "Learners understand the fundamental teachings of the Christian faith through Jesus Christ, the Apostles and other writers of the New Testament, and can speak respectfully of the personalities of other faiths."
  ],
  objectives: [
    "Name the religious personalities studied in the Christian faith",
    "Discuss the life and teachings of Jesus Christ",
    "Name some of the apostles and tell what they did",
    "Show respect for the religious personalities of other faiths"
  ],
  note: "A religious personality is a person whose life and teaching guide believers. Christians look to Jesus Christ and his apostles. Muslims look to Prophet Mohammed. We study each with respect.",
  study:[
    /* ---- course text: Semester Two, Period V — Religious Personality: Christian Emphasis (pages 14-15) ---- */
    {k:"h3", t:"Jesus — His Birth"},
    {k:"p", t:"Jesus Christ was **born** in Bethlehem to the virgin **Mary**. His birth was promised by the prophets. Christians read the story in the Gospels of Matthew and Luke, and Muslims honour the birth of Jesus (Isa), son of Mary, as a sign of God's power."},
    {k:"rule"},
    {k:"h3", t:"His Purpose and His Works"},
    {k:"p", t:"Jesus came with a **purpose**: to save people from sin and to show the way to God. His **works** included teaching, healing the sick, feeding the hungry and doing **miracles**. Scripture references: the Holy Bible, Exodus 20:2-17 and Ephesians 6:1-24 (the teaching of the Apostle Paul)."},
    {k:"bul", items:["His **miracle** — turning water into wine, healing the sick, raising the dead", "His **teaching** — the Sermon on the Mount, the parables", "His **calling of disciples** — ordinary people who followed Him", "The **purpose** for which Jesus Christ came — to seek and to save the lost"]},
    {k:"rule"},
    {k:"h3", t:"His Death"},
    {k:"p", t:"Jesus was **arrested, judged and crucified**. He died on the cross and was buried. His death was for the sins of the world, according to Christian teaching."},
    {k:"rule"},
    {k:"h3", t:"His Resurrection and Ascension"},
    {k:"p", t:"On the third day, Jesus **rose again** from the dead — the **resurrection**. After appearing to His disciples, He was taken up to heaven in the **ascension**. The resurrection shows that Jesus is the Son of God with power over death."},
    {k:"rule"},
    {k:"h3", t:"Living by the Teaching of Jesus"},
    {k:"p", t:"Learners should **live by the teachings of Jesus Christ** and of the New Testament writers such as Paul, as in Ephesians 6. Determine ways by which you can help others, and dramatise the story of Jesus' death and resurrection."},
    {k:"num", items:["Read with comprehension the birth, life and death of Jesus Christ.", "Using class discussion and simple objects, dramatise the works of Jesus Christ.", "Determine ways by which you can help others.", "Write a paragraph each about the birth and death of Jesus Christ."]}
  ],
  focus: ["Jesus Christ and his teaching", "The apostles and their work", "Writers of the New Testament", "Respect for personalities of other faiths"],
  terms: [
    { t: "apostle", d: "one of the close followers sent out by Jesus to teach", x: "Peter was an apostle of Jesus." },
    { t: "gospel", d: "the good news about Jesus, written in four books", x: "The gospel tells the life of Jesus." },
    { t: "parable", d: "a simple story that teaches a lesson", x: "Jesus taught the crowd with a parable." },
    { t: "teaching", d: "what a religious personality tells people to believe and do", x: "His teaching was about love and forgiveness." },
    { t: "faith", d: "trust and belief in God", x: "She faced the trouble with strong faith." },
    { t: "example", d: "a life that others can copy", x: "The apostles followed the example of their teacher." },
    { t: "missionary", d: "a person sent to teach the faith in another place", x: "A missionary opened the first school in that town." },
    { t: "New Testament", d: "the part of the Holy Bible telling about Jesus and the early church", x: "The gospels are in the New Testament." },
    { t: "pastor", d: "the leader of a Christian congregation", x: "The pastor preached about kindness." },
    { t: "imam", d: "the leader of prayers in a mosque", x: "The imam led the Friday prayers." }
  ],
  facts: [
    { q: "What is an apostle?", a: "One of the close followers sent out by Jesus to teach." },
    { q: "How many gospels tell the life of Jesus?", a: "Four gospels." },
    { q: "What is a parable?", a: "A simple story that teaches a lesson." },
    { q: "Name two things Jesus taught people to do.", a: "To love one another and to forgive those who wrong them." },
    { q: "Who leads a Christian congregation?", a: "A pastor." },
    { q: "Who leads prayers in a mosque?", a: "An imam." },
    { q: "What is a missionary?", a: "A person sent to teach the faith in another place." },
    { q: "How should you speak about the religious personality of another faith?", a: "With respect and politeness, as I would want mine to be spoken of." }
  ],
  tf: [
    { s: "A parable is a simple story that teaches a lesson.", a: "true", why: "Jesus often taught using parables." },
    { s: "There are four gospels telling the life of Jesus.", a: "true", why: "The four gospels are in the New Testament." },
    { s: "An imam leads a Christian congregation.", a: "false", why: "An imam leads prayers in a mosque; a pastor leads a Christian congregation." },
    { s: "Jesus taught his followers to hate their enemies.", a: "false", why: "He taught them to love even their enemies." },
    { s: "Missionaries helped to open schools in Liberia.", a: "true", why: "Missionary churches opened many early schools." },
    { s: "We should mock the religious leaders of other faiths.", a: "false", why: "Every faith and its leaders must be treated with respect." }
  ],
  apply: [
    { q: "Jesus taught with simple stories. Tell one short story that teaches a lesson about sharing.", a: "For example: two boys had one orange; instead of fighting they cut it in two and both were satisfied — sharing ends quarrels." },
    { q: "A pastor and an imam both serve their communities. Name two things they do that are alike.", a: "Both lead prayers and both teach and counsel their people to live well." },
    { q: "How can you follow the example of a good religious personality this week?", a: "By being honest, helping someone in need, and speaking gently even when I am annoyed." },
    { q: "A classmate laughs at the prayers of another faith. What will you tell him?", a: "That every faith deserves respect, and if he wants his own faith respected he must respect others too." },
    { q: "Why do people still read about religious personalities who lived long ago?", a: "Because their teachings and their example still show people how to live well today." }
  ],
  sort: {
    title: "Christian faith and Muslim faith — matching the terms",
    groups: [
      { name: "Christian faith", items: ["church", "Holy Bible", "pastor", "gospel"] },
      { name: "Muslim faith", items: ["mosque", "Holy Quran", "imam", "Al-Fatiha"] }
    ]
  },
  compare: {
    title: "Leaders and Holy Books of the two faiths",
    caption: "Complete the table. Write with respect for both faiths.",
    items: [
      { p: "Christian religious personality", f: "Jesus Christ, together with the apostles who followed and taught after him." },
      { p: "Muslim religious personality", f: "Prophet Mohammed, peace be upon him, the Messenger of God." },
      { p: "Leader of the local congregation", f: "The pastor in the church; the imam in the mosque." },
      { p: "What both teach believers", f: "To worship God, speak the truth, help the poor and live peacefully with neighbours." }
    ]
  },
  casestudy: {
    title: "The lost sheep",
    text: "Jesus once told this parable. A man had one hundred sheep. In the evening he counted them and found only ninety-nine. One sheep was missing. He left the ninety-nine safe in the field and went out into the dark to search for the one that was lost. He searched the rocks and the bush until at last he found it, tired and caught in the thorns. He did not beat it. He lifted it onto his shoulders and carried it home. Then he called his friends and neighbours and said, “Rejoice with me, for I have found my sheep that was lost.”",
    questions: [
      { q: "How many sheep did the man have, and how many were missing?", a: "He had one hundred sheep and one was missing." },
      { q: "What did the man do when he found the lost sheep?", a: "He lifted it onto his shoulders, carried it home and called his friends to rejoice." },
      { q: "What does this parable teach about how God values each person?", a: "That every single person matters to God, and no one is too small to be searched for and loved." }
    ]
  },
  project: {
    title: "A religious personality report",
    brief: "Prepare a short spoken report on one religious personality studied this term.",
    steps: [
      "Choose one personality: Jesus Christ or Prophet Mohammed, according to your faith.",
      "Find out three facts about the person's life.",
      "Find out two things he taught people to do.",
      "Write your five points neatly on a card.",
      "Give your report to the class in two minutes, speaking respectfully."
    ],
    criteria: ["three accurate facts", "two teachings correctly stated", "respectful language", "clear two-minute delivery"]
  },
  activities: [
    "Read and discuss religious personalities",
    "Retell a parable in your own words",
    "Group work and class presentation",
    "Write two paragraphs on the teaching of the personality studied"
  ],
  materials: ["Books", "Flyers", "Posters", "Markers", "Pens"],
  assessment: ["Oral and written tests", "Reading", "Presentation", "Class work"]
},

{
  grade: 2, period: "VI", sem: "Two", icon: "🌄",
  title: "Death and After Life",
  subtitle: "Understanding death and what follows, according to faith",
  outcomes: [
    "Learners understand death as a part of life and know what the Holy Bible and the Holy Quran teach about the after life."
  ],
  objectives: [
    "Explain the meaning of death",
    "Discuss what happens to the body and the soul",
    "State what the Holy Books teach about the after life",
    "Show sympathy to people who have lost a relative"
  ],
  note: "Death comes to every living thing. Believers of both faiths teach that the body returns to the earth while the soul goes on to face God. Because some pupils have lost loved ones, this topic must be handled gently.",
  study:[
    /* ---- course text: Semester Two, Period VI — Death and After Life (pages 16-17) ---- */
    {k:"h3", t:"Sin Is the Cause of Death"},
    {k:"p", t:"Religious teaching explains that **sin is the cause of death**. When the first man and woman disobeyed God, sin and death entered the world. Scripture references: the Holy Bible, Genesis 3:1-15 and Genesis 3:16-19."},
    {k:"rule"},
    {k:"h3", t:"What Is Death?"},
    {k:"p", t:"**Death** is the end of life on earth — the **departure of the soul from the earthly body**. Death is a reality for every living person; the Bible says all die, and the Quran also teaches that every soul shall taste death."},
    {k:"rule"},
    {k:"h3", t:"Types of Death: Physical and Spiritual"},
    {k:"table", head:["Type of death","What it means","Example"], rows:[["Physical death","The body stops living and returns to dust","A person, animal or plant dies"],["Spiritual death","The soul is separated from God because of sin","Living far from God in wrongdoing"]]},
    {k:"rule"},
    {k:"h3", t:"Death as a Gateway for the Soul to the Afterlife"},
    {k:"p", t:"Death is not the end of everything — it is a **gateway** through which the soul passes into the **afterlife**. After death comes the life to come, where every soul stands before God."},
    {k:"rule"},
    {k:"h3", t:"Punishment or Reward for the Life Lived on Earth"},
    {k:"p", t:"There is a **Judgment Day**: God will reward those who obeyed Him with **heaven**, and will punish sinners who did not repent with **hell**. The life we live on earth determines the reward or punishment that waits after death."},
    {k:"p", t:"Scripture references: the Holy Bible, Revelation 21:4 (God will wipe away every tear), John 1:1-3 and Matthew 25:31-46 (the judgment of the sheep and the goats); the Holy Quran on death and punishment."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:["Read scriptures and Bible stories on life, death, hell and heaven.", "Discuss death and the afterlife, and the effect of death for sinners.", "Express how you feel about death.", "Write a paragraph each on what you understand about life, death and the afterlife.", "Discuss how these teachings should impact your daily life."]}
  ],
  focus: ["The meaning of death", "Body and soul", "Teachings of the Holy Bible and the Holy Quran on the after life", "Comforting the bereaved"],
  terms: [
    { t: "after life", d: "the life that believers say continues after death", x: "Both faiths teach about the after life." },
    { t: "body", d: "the physical part of a person that can be seen and touched", x: "At death the body is buried." },
    { t: "soul", d: "the inner part of a person that does not die with the body", x: "The soul goes to God after death." },
    { t: "burial", d: "the placing of a dead body in the ground", x: "The burial took place on Saturday morning." },
    { t: "funeral", d: "the ceremony held when someone has died", x: "Many people attended the funeral." },
    { t: "bereaved", d: "a person whose relative has died", x: "We visited the bereaved family." },
    { t: "sympathy", d: "sharing in the sorrow of another person", x: "The neighbours showed sympathy by bringing food." },
    { t: "eternal", d: "lasting for ever, without end", x: "Believers speak of eternal life with God." },
    { t: "grave", d: "the place where a dead body is buried", x: "Flowers were placed on the grave." },
    { t: "hope", d: "confident expectation of something good", x: "Faith gives believers hope beyond death." }
  ],
  facts: [
    { q: "What happens to the body at death?", a: "The body stops living and is buried." },
    { q: "What do believers teach about the soul at death?", a: "That the soul does not die with the body but goes on to face God." },
    { q: "What is a funeral?", a: "The ceremony held when someone has died." },
    { q: "Who is a bereaved person?", a: "A person whose relative has died." },
    { q: "Name two ways of showing sympathy to a bereaved family.", a: "Visiting them, bringing food, helping with work, or sitting quietly with them." },
    { q: "What does the word eternal mean?", a: "Lasting for ever, without end." },
    { q: "Do both the Holy Bible and the Holy Quran teach about life after death?", a: "Yes, both teach that there is life after death and a judgment." },
    { q: "Why should we speak gently about death in class?", a: "Because some pupils have lost people they love and the subject brings them sorrow." }
  ],
  tf: [
    { s: "Death comes to every living thing.", a: "true", why: "All living things eventually die." },
    { s: "Believers teach that the soul dies together with the body.", a: "false", why: "Both faiths teach that the soul continues after the body dies." },
    { s: "Bringing food to a bereaved family is a way of showing sympathy.", a: "true", why: "Practical help is one of the best ways to comfort the bereaved." },
    { s: "It is good manners to gossip about how a person died.", a: "false", why: "Gossip hurts the family; we should speak with respect and discretion." },
    { s: "A funeral is a ceremony held when a person has died.", a: "true", why: "That is the meaning of a funeral." },
    { s: "Faith gives believers hope beyond death.", a: "true", why: "Both faiths teach a hope of life with God after death." }
  ],
  apply: [
    { q: "A classmate returns to school after her mother's burial. What are two things you should do and one thing you should not do?", a: "Do: greet her kindly and help her with missed work. Do not: ask her many questions about the death or repeat gossip." },
    { q: "Why do families in Liberia gather together when someone dies?", a: "To comfort one another, to share the work and cost, and to show that the family is not alone in its sorrow." },
    { q: "How does believing in life after death change the way a person lives now?", a: "It encourages a person to live honestly and kindly, knowing that God sees and will judge how we lived." },
    { q: "Your friend is afraid of death. What gentle words can you offer?", a: "That death is part of life for everyone, that God cares for us, and that we can live well each day and not be ruled by fear." },
    { q: "Name one respectful way for a class to mark the death of a teacher.", a: "Keep a minute of silence, write a card to the family, and let pupils of each faith say a prayer according to their faith." }
  ],
  sort: {
    title: "Helpful and unhelpful behaviour towards a bereaved family",
    groups: [
      { name: "Helpful", items: ["visiting quietly", "bringing food", "helping with the children", "praying with them", "listening"] },
      { name: "Unhelpful", items: ["gossiping", "asking painful questions", "laughing near the funeral", "avoiding the family"] }
    ]
  },
  compare: {
    title: "Body and soul",
    caption: "Complete the table with what each teaching says.",
    items: [
      { p: "The body", f: "The physical part of a person; it can be seen and touched, and at death it is buried." },
      { p: "The soul", f: "The inner part of a person; believers teach that it does not die but goes on to face God." },
      { p: "Christian teaching", f: "The Holy Bible teaches resurrection and eternal life with God for those who believe and obey." },
      { p: "Muslim teaching", f: "The Holy Quran teaches the hereafter, judgment, and reward or punishment according to how one lived." }
    ]
  },
  casestudy: {
    title: "The whole town came",
    text: "When old Ma Nyandebo died in her village near Zwedru, the news travelled quickly. She had been a midwife for forty years, and almost everyone under forty had been helped into the world by her hands. On the day of the burial, the road to the village was full of people walking. Christians came from the church and Muslims came from the mosque. Some brought rice, some brought firewood, some brought nothing but their presence. Her son stood at the door and wept, and one after another, people held his hand and said a few words. Later he said, “I lost my mother, but I found out that the whole town was my family.”",
    questions: [
      { q: "What work had Ma Nyandebo done for forty years?", a: "She had worked as a midwife, helping to deliver babies." },
      { q: "Who came to the burial, and what did they bring?", a: "Christians and Muslims from the whole town came, bringing rice, firewood, or simply their presence." },
      { q: "What did her son learn from the way the town behaved?", a: "That in his grief he was not alone — the whole community stood with him as family." }
    ]
  },
  project: {
    title: "How my community comforts the bereaved",
    brief: "Find out how families in your community are comforted when someone dies.",
    steps: [
      "Politely ask one older person in your family what people do when there is a death.",
      "Write down three customs they describe.",
      "Write one sentence saying how each custom helps the bereaved family.",
      "Note whether the custom is the same or different in the other faith in your community.",
      "Report your findings to the class in a gentle and respectful way."
    ],
    criteria: ["three customs recorded", "explanation of how each helps", "respectful interview manner", "gentle presentation"]
  },
  activities: [
    "Discuss the meaning of death and the after life gently",
    "Discuss the difference between body and soul",
    "Practise words and actions that comfort the bereaved",
    "Write a short paragraph on showing sympathy"
  ],
  materials: ["Charts", "Poster sheets", "Pencils", "Reference books"],
  assessment: ["Oral and written tests", "Class discussion", "Written work", "Assignments"]
},

/* ============================ GRADE 3 ============================ */
{
  grade: 3, period: "I", sem: "One", icon: "✨",
  title: "Creator and Creation",
  subtitle: "The Creator, the order of creation and man's care of the earth",
  outcomes: [
    "Learners know God as the Creator, can describe the order of creation, and understand that man is given the duty of caring for the earth."
  ],
  objectives: [
    "Describe God as the Creator of all things",
    "Explain the order in which creation is described in the Holy Books",
    "State man's duty to care for creation",
    "Give thanks to God for creation"
  ],
  note: "God is the Creator; everything else is creation. The Holy Books teach that after God had made the world He placed man in it as a caretaker, not as a destroyer.",
  study:[
    /* ---- course text: Semester One, Period I — Creator and Creation (pages 18-19) ---- */
    {k:"h3", t:"The Creator"},
    {k:"p", t:"**God is the Creator** of all things. The creative works of God, His creative power, and the purpose of His creation are taught in both the Holy Bible and the Holy Quran. Scripture references: the Holy Bible, Genesis chapters 6, 7 and 8, Psalm 8:1-3 and Psalm 24:1-2; the Holy Quran 35:27-29."},
    {k:"rule"},
    {k:"h3", t:"How the Earth Came into Existence"},
    {k:"p", t:"Learners understand **how the earth came into existence** through the account of the Holy Books: God spoke and the world was made. In the beginning God created the heavens and the earth, and by His power everything came to be."},
    {k:"rule"},
    {k:"h3", t:"Earth Growth — Plants, Flowers, Fowl, Rivers, Ocean, Mountains and Animals"},
    {k:"p", t:"God filled the earth with **growing things** and living creatures:"},
    {k:"bul", items:["**Plants and flowers** that grow from the ground", "**Fowl** — the birds of the air", "**Rivers and the ocean** — the waters of the earth", "**Mountains** — the high places of the land", "**Animals** — the creatures of the field", "**Man** — created in the image of God"]},
    {k:"p", t:"Learners also understand the **growth of man, plants and animals** — how living things grow, and how God provides for them."},
    {k:"rule"},
    {k:"h3", t:"The Creation of Man"},
    {k:"p", t:"God created **Man** as the crown of creation, giving him life and placing him on the earth. Man is created to know God, to worship Him and to care for His creation."},
    {k:"rule"},
    {k:"h3", t:"Discussion — The Purpose of Creation"},
    {k:"num", items:["Discuss the purpose for God creating Man.", "Why did God choose Noah?", "Why did God destroy the earth with His powerful flood?", "Read the scriptures, do the group assignment and prepare a written or oral report.", "Go on an outdoor observation to see the works of God's creation."]}
  ],
  focus: ["The Creator and His creation", "The order of creation", "Man as caretaker of the earth", "Thanksgiving for creation"],
  terms: [
    { t: "Creator", d: "God, the maker of everything that exists", x: "Only the Creator can make something out of nothing." },
    { t: "creature", d: "any living thing that God has created", x: "Every creature depends on water." },
    { t: "caretaker", d: "one who is trusted to look after something", x: "Man is the caretaker of the earth." },
    { t: "steward", d: "a person who manages what belongs to another", x: "A good steward does not waste what he is given." },
    { t: "environment", d: "the land, water, air and living things around us", x: "Burning rubbish pollutes the environment." },
    { t: "pollution", d: "making the air, land or water dirty and harmful", x: "Pollution in the creek killed the fish." },
    { t: "conserve", d: "to protect something and use it carefully", x: "We must conserve the forest for the future." },
    { t: "order", d: "the arrangement in which things were made or are done", x: "The Holy Book describes creation in a set order." },
    { t: "depend", d: "to need something in order to live", x: "Animals depend on plants for food." },
    { t: "gratitude", d: "the feeling of being thankful", x: "We show gratitude to God for the harvest." }
  ],
  facts: [
    { q: "Who is the Creator?", a: "God, the maker of everything that exists." },
    { q: "What is the difference between the Creator and creation?", a: "The Creator is God who makes; creation is everything that has been made." },
    { q: "What duty did God give to man over the earth?", a: "To care for it as a caretaker or steward." },
    { q: "What is the environment?", a: "The land, water, air and living things around us." },
    { q: "Name two kinds of pollution found in your community.", a: "Any two, for example: rubbish in the streets and dirty water in the creek." },
    { q: "What does it mean to conserve the forest?", a: "To protect it and use it carefully so that it is not destroyed." },
    { q: "Name one way animals depend on plants.", a: "Animals eat plants for food, and some shelter under them." },
    { q: "How can a pupil show gratitude for creation?", a: "By thanking God in prayer and by keeping the environment clean." }
  ],
  tf: [
    { s: "God is the Creator and everything else is creation.", a: "true", why: "Only God creates; all other things are created." },
    { s: "Man was given the earth to destroy as he pleases.", a: "false", why: "Man was given the earth to care for it as a steward." },
    { s: "Throwing rubbish in the creek is a form of pollution.", a: "true", why: "It makes the water dirty and harms fish and people." },
    { s: "Animals do not depend on plants at all.", a: "false", why: "Many animals eat plants and shelter among them." },
    { s: "Conserving the forest helps future generations.", a: "true", why: "Careful use keeps the forest for those who come after us." },
    { s: "Only the government is responsible for the environment.", a: "false", why: "Every person, including pupils, has a duty to care for the environment." }
  ],
  apply: [
    { q: "Your community dumps rubbish beside the road. Suggest two things the pupils could do.", a: "Organise a clean-up day and make bins from old drums, and speak to the town chief about a proper dumping place." },
    { q: "Why is cutting down every tree on a hillside dangerous?", a: "Without trees the soil washes away when it rains, the land becomes poor and floods can follow." },
    { q: "How is being a steward different from being an owner?", a: "A steward manages what belongs to another and must give account; he cannot waste or destroy it as he likes." },
    { q: "Give one way your school can use water carefully.", a: "Close the tap while soaping hands, repair leaks quickly and collect rainwater for the garden." },
    { q: "A trader burns plastic beside the market. What harm does it cause?", a: "The smoke pollutes the air, it makes people cough and it damages the health of everyone nearby." }
  ],
  sort: {
    title: "Caring for creation and harming creation",
    groups: [
      { name: "Caring for creation", items: ["planting trees", "keeping the yard clean", "using water carefully", "protecting animals"] },
      { name: "Harming creation", items: ["burning plastic", "dumping rubbish in the creek", "cutting all the trees", "killing animals for sport"] }
    ]
  },
  compare: {
    title: "Creator and creation",
    caption: "Complete the table, showing clearly the difference between the two.",
    items: [
      { p: "The Creator", f: "God alone; He was not made, and He made all other things." },
      { p: "Creation", f: "Everything God made: the heavens, the earth, plants, animals and people." },
      { p: "Man's place in creation", f: "Made by God and given the duty of caring for the earth and its creatures." },
      { p: "Our response", f: "Gratitude to God, and careful, unselfish use of what He has made." }
    ]
  },
  casestudy: {
    title: "The stream behind the school",
    text: "For many years the pupils of a school in Bomi drank from a clear stream that ran behind their classrooms. Then people began throwing rubbish into the water upstream, and a workshop poured old oil into it. Within two years the stream turned brown, the small fish disappeared and the children could no longer drink from it. The Grade Three class decided to act. They wrote letters to the town authority, cleared the rubbish from the banks and planted young trees along the water. They also made signs asking people not to dump waste. It took almost a year, but the water began to run clear again, and one morning a pupil shouted that she had seen fish.",
    questions: [
      { q: "What two things spoiled the stream?", a: "People threw rubbish into it and a workshop poured old oil into it." },
      { q: "Name three actions the Grade Three class took.", a: "They wrote letters to the authority, cleared the rubbish and planted trees, and made warning signs." },
      { q: "What does this story teach about caring for creation?", a: "That people can spoil creation quickly, but with patient work a community can also restore it." }
    ]
  },
  project: {
    title: "A caretaker's plan for my school",
    brief: "Write and carry out a small plan to care for one part of your school environment.",
    steps: [
      "Walk around your school and find one thing that needs care, for example a dirty corner or a bare patch of ground.",
      "Write down the problem and why it matters.",
      "Write three steps you and your group will take.",
      "Carry out your plan with your teacher's permission.",
      "Report to the class what changed, and what was difficult."
    ],
    criteria: ["a real problem identified", "three practical steps", "the plan actually carried out", "honest report including difficulties"]
  },
  activities: [
    "Read and discuss the creation account in the Holy Books",
    "Field trip to observe and describe God's creation",
    "Discuss man's duty as caretaker of the earth",
    "Write a paragraph on caring for the environment"
  ],
  materials: ["Charts", "Poster sheets", "Markers", "Colouring pencils"],
  assessment: ["Oral and written tests", "Reading", "Written work", "Class work"]
},

{
  grade: 3, period: "II", sem: "One", icon: "📚",
  title: "Knowing the Different Scriptures",
  subtitle: "The Holy Bible, the Holy Quran and other writings",
  outcomes: [
    "Learners know the names and numbers of the books of the Holy Bible and of the Holy Quran, and understand the difference between Holy Scriptures and other writings, according to faith."
  ],
  objectives: [
    "Define scriptures",
    "Name the various kinds of scriptures",
    "State the purpose of scriptures",
    "Know the books of the Holy Bible and of the Holy Quran"
  ],
  note: "Scriptures are the holy writings of a faith. The Christian Scripture is the Holy Bible, which has two parts: the Old Testament and the New Testament. The Islamic Holy Book is the Holy Quran, which is arranged in chapters called surahs.",
  study:[
    /* ---- course text: Semester One, Period II — Knowing the Different Scriptures (pages 20-21) ---- */
    {k:"h3", t:"What Are Scriptures?"},
    {k:"p", t:"**Scriptures** are the holy writings of a religion — the books that believers hold as the revealed word of God. They teach us about God, about how to live, and about the world to come."},
    {k:"rule"},
    {k:"h3", t:"The Holy Bible — Christian Scriptures"},
    {k:"p", t:"The **Holy Bible** is the sacred book of the Christian faith. It has two main parts: the **Old Testament** and the **New Testament**. The Old Testament is made up of the books of the Law, the Prophets and the Writings; the New Testament contains the four **Gospels** (Matthew, Mark, Luke and John), the Acts of the Apostles, the Epistles and Revelation."},
    {k:"p", t:"Scripture references: 2 Timothy 3:16 — 'All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness'; 2 Peter 1:20-21 — no prophecy of Scripture came about by the prophet's own interpretation, but men spoke from God as they were carried along by the Holy Spirit."},
    {k:"rule"},
    {k:"h3", t:"The Holy Quran — Islamic Holy Book"},
    {k:"p", t:"The **Holy Quran** is the sacred book of the Islamic faith. Muslims believe it was revealed to **Prophet Mohammed** by God (Allah). It contains **114 chapters (surahs)** and teaches the worship of one God, righteous living, prayer, fasting and mercy."},
    {k:"bul", items:["**Purpose of scriptures** — to reveal God, to guide our lives, and to teach right from wrong", "**Books of the Holy Bible** — 66 books: 39 in the Old Testament and 27 in the New Testament", "**Books of the Holy Quran** — 114 surahs revealed to Prophet Mohammed"]},
    {k:"rule"},
    {k:"h3", t:"Holy Scriptures and Other Writings"},
    {k:"p", t:"Discuss the **difference between the Holy Scriptures and other writings** according to faith. Holy Scriptures are believed to be the word of God; other books are the writings of people. Respect each other's holy books and learn to know them by name and number."},
    {k:"num", items:["Name the books of the Holy Bible and their number.", "Name the books of the Holy Quran and their number.", "Write a paragraph each on the Christian Scripture and the Islamic Holy Book.", "Give a group written report on the purpose of the scriptures."]}
  ],
  focus: ["The Scriptures", "The Holy Bible — Christian Scripture", "The Holy Quran — Islamic Holy Book", "The difference between Scriptures and other writings"],
  terms: [
    { t: "scripture", d: "the holy writings of a faith", x: "Believers read their scripture with reverence." },
    { t: "Holy Bible", d: "the Christian Scripture, made up of the Old and New Testaments", x: "The Holy Bible is read in church." },
    { t: "Holy Quran", d: "the Islamic Holy Book, given through Prophet Mohammed", x: "The Holy Quran is recited in Arabic." },
    { t: "Old Testament", d: "the first part of the Holy Bible, before the birth of Jesus", x: "The Ten Commandments are in the Old Testament." },
    { t: "New Testament", d: "the second part of the Holy Bible, telling of Jesus and the early church", x: "The four gospels are in the New Testament." },
    { t: "surah", d: "a chapter of the Holy Quran", x: "Al-Fatiha is the first surah of the Holy Quran." },
    { t: "verse", d: "a short numbered part of a chapter", x: "The teacher read one verse aloud." },
    { t: "chapter", d: "a main division of a book of scripture", x: "Turn to the first chapter." },
    { t: "revelation", d: "truth that God makes known to people", x: "Believers hold their scripture to be revelation from God." },
    { t: "reverence", d: "deep respect", x: "Holy books are handled with reverence." }
  ],
  facts: [
    { q: "What are scriptures?", a: "The holy writings of a faith." },
    { q: "What is the Christian Scripture called?", a: "The Holy Bible." },
    { q: "What is the Islamic Holy Book called?", a: "The Holy Quran." },
    { q: "What are the two main parts of the Holy Bible?", a: "The Old Testament and the New Testament." },
    { q: "What is a chapter of the Holy Quran called?", a: "A surah." },
    { q: "What is the purpose of the scriptures?", a: "To teach people about God and to guide how they should live." },
    { q: "Name the first surah of the Holy Quran.", a: "Al-Fatiha, the Opening." },
    { q: "How should a Holy Book be handled?", a: "With reverence — clean hands, care, and never thrown about or torn." }
  ],
  tf: [
    { s: "Scriptures are the holy writings of a faith.", a: "true", why: "That is the meaning of the word scripture." },
    { s: "The Holy Bible has two main parts.", a: "true", why: "It has the Old Testament and the New Testament." },
    { s: "A surah is a chapter of the Holy Bible.", a: "false", why: "A surah is a chapter of the Holy Quran." },
    { s: "A newspaper is a Holy Scripture.", a: "false", why: "A newspaper is an ordinary writing, not a holy writing of a faith." },
    { s: "The four gospels are found in the New Testament.", a: "true", why: "They tell the life and teaching of Jesus." },
    { s: "Holy Books should be treated carelessly.", a: "false", why: "They are treated with reverence by believers." }
  ],
  apply: [
    { q: "How is a Holy Book different from a storybook?", a: "A Holy Book is believed to be revelation from God and guides how people live; a storybook is written by people for enjoyment." },
    { q: "You see a Holy Book lying in the dust. What will you do?", a: "Pick it up carefully, clean it, and put it in a proper place — Holy Books are treated with reverence." },
    { q: "Why do believers read their scripture regularly?", a: "To learn about God, to be guided in daily choices, and to be strengthened in faith." },
    { q: "Your friend of another faith shows you his Holy Book. How should you behave?", a: "Look at it politely, handle it with clean hands if permitted, and never mock it." },
    { q: "How can you find a particular verse in the Holy Bible?", a: "By looking for the book, then the chapter number, then the verse number." }
  ],
  sort: {
    title: "Holy Scriptures and other writings",
    groups: [
      { name: "Holy Scripture", items: ["Holy Bible", "Holy Quran", "Old Testament", "surah"] },
      { name: "Other writings", items: ["newspaper", "storybook", "letter", "school timetable"] }
    ]
  },
  compare: {
    title: "The Holy Bible and the Holy Quran",
    caption: "Complete the table respectfully, showing what each Holy Book is.",
    items: [
      { p: "Holy Bible", f: "The Christian Scripture; it has two parts, the Old Testament and the New Testament." },
      { p: "Holy Quran", f: "The Islamic Holy Book, given through Prophet Mohammed and arranged in surahs." },
      { p: "Divisions used", f: "The Bible uses books, chapters and verses; the Quran uses surahs and verses." },
      { p: "Purpose of both", f: "To make God known and to guide believers in how they should live." },
      { p: "How both are treated", f: "With reverence: kept clean, handled carefully and read attentively." }
    ]
  },
  casestudy: {
    title: "Two books on one shelf",
    text: "In the small library of a school in Voinjama, the teacher kept a shelf for religious books. On it stood a Holy Bible given by a church and a Holy Quran given by a mosque. Both were wrapped in clean cloth. One afternoon a boy took down the Quran, flipped it open roughly and let it fall on the floor. A Muslim girl in the room gasped. The teacher picked the book up quietly, dusted it and put it back. Then she said to the class, “In this school we do not need to agree about everything. But every book on this shelf is holy to somebody in this room, and we handle all of them the same way — with clean hands and a quiet heart.”",
    questions: [
      { q: "Which two Holy Books were kept on the shelf?", a: "A Holy Bible and a Holy Quran." },
      { q: "What did the boy do wrong?", a: "He handled the Holy Quran roughly and let it fall on the floor." },
      { q: "What rule did the teacher give the class?", a: "That every Holy Book must be handled with clean hands and a quiet heart, because it is holy to somebody in the room." }
    ]
  },
  project: {
    title: "A guide to my Holy Book",
    brief: "Prepare a simple guide showing how your Holy Book is arranged.",
    steps: [
      "Write the name of your Holy Book at the top of a sheet.",
      "Write how it is divided, for example into testaments, books and chapters, or into surahs.",
      "Write the name of one part and what it teaches.",
      "Copy one short verse that teaches kindness or truth.",
      "Show your guide to a classmate of another faith and listen politely to his."
    ],
    criteria: ["correct name and divisions", "one part correctly described", "one verse copied accurately", "respectful exchange with a classmate"]
  },
  activities: [
    "Discuss the differences between Holy Scripture and other writings",
    "Name the parts of the Holy Bible and of the Holy Quran",
    "Group written report on the two Holy Books",
    "Write a paragraph each on the Christian Scripture and the Islamic Holy Book"
  ],
  materials: ["Poster sheets", "Flyers", "Markers", "Pens"],
  assessment: ["Oral and written tests", "Reading", "Written work", "Class work", "Quizzes"]
},

{
  grade: 3, period: "III", sem: "One", icon: "🛐",
  title: "Worship and Offering",
  subtitle: "Places of worship, forms of prayer and types of offering",
  outcomes: [
    "Learners understand the difference between the worship of God through Jesus Christ and the worship of God through Prophet Mohammed, and know the importance of giving offerings and of revering places of worship."
  ],
  objectives: [
    "Name and describe places of worship",
    "Demonstrate private, public and devotional prayer",
    "Know times of meditation",
    "Know the types of offering for both Christians and Muslims, and the holy day of each"
  ],
  note: "Both faiths worship the one God, but in different forms. Christians worship God through Jesus Christ; Muslims worship God as taught through Prophet Mohammed. Prayers may be offered standing, sitting, kneeling or prostrating.",
  study:[
    /* ---- course text: Semester One, Period III — Worship and Offering (pages 22-23) ---- */
    {k:"h3", t:"Forms of Worship"},
    {k:"p", t:"**Worship** is giving honour and praise to God. Christians worship God through **Jesus Christ**; Muslims worship God (Allah) as taught by **Prophet Mohammed**. Learners understand the difference in the worship of God through Jesus Christ and the worship of God through Prophet Mohammed, and they know the importance of giving offerings and of reverencing places of worship."},
    {k:"rule"},
    {k:"h3", t:"Prayer in General"},
    {k:"p", t:"**Prayer** is speaking to God. Prayers are offered by **standing, sitting, kneeling and prostrating**. Both faiths practise private, public and devotional prayer, and both teach times of **meditation** — quietly thinking about God and His word."},
    {k:"p", t:"Scripture references: the Holy Bible, Luke 2:42-50, Luke 4:16-22 and Psalm 100 ('Enter His gates with thanksgiving'); the Holy Quran 2:9-10."},
    {k:"rule"},
    {k:"h3", t:"Worship God with Tithes and Offerings"},
    {k:"p", t:"**Tithes** are the tenth part that belongs to God; **offerings** are gifts given freely to God. Giving tithes and offerings is part of worship in both the church and the mosque — it supports the house of God and helps those in need."},
    {k:"rule"},
    {k:"h3", t:"Worship God in Thanksgiving"},
    {k:"p", t:"**Thanksgiving** is worship that says 'thank you' to God for His goodness, His gifts and His mercy. Psalm 100 calls us to enter God's presence with thanksgiving and praise."},
    {k:"rule"},
    {k:"h3", t:"Worship God with Personal Service"},
    {k:"p", t:"**Personal service** is using our time, talents and strength to serve God. Serving God with our hands and feet is worship — helping in church or mosque, helping at home, and helping our neighbours."},
    {k:"bul", items:["**Types of offering for Christians and Muslims** — general offerings, tithes, charity (zakat) and gifts at holy days", "**Times of meditation** — quiet times set apart for thinking about God", "**Places of worship** — the church for Christians, the mosque for Muslims; both are reverenced as houses of God"]},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:["Read scriptures of prayers, and sing hymns and songs used at various services and at home devotion.", "Visit various churches and mosques during service wherever appropriate, according to faith.", "Pray in public and private places.", "Draw and colour pictures of churches and mosques.", "Write a paragraph each on self-prayer and meditation."]}
  ],
  focus: ["Forms of worship", "Prayer in general", "Worship with tithes and offerings", "Worship in thanksgiving and personal service", "Postures of prayer"],
  terms: [
    { t: "devotional prayer", d: "a short regular time of prayer, at home or at school", x: "Morning devotional prayer begins the school day." },
    { t: "posture", d: "the position of the body, such as standing or kneeling", x: "Kneeling is a posture of prayer." },
    { t: "prostrate", d: "to lie face down in worship before God", x: "Muslims prostrate during their prayers." },
    { t: "holy day", d: "the special day of the week set aside for worship", x: "Friday is the holy day for Muslims; Sunday for most Christians." },
    { t: "thanksgiving", d: "worship that thanks God for what He has given", x: "The harvest service was one of thanksgiving." },
    { t: "meditation", d: "quiet thinking about God and His word", x: "A time of meditation follows the reading." },
    { t: "tithe", d: "a tenth part of one's earnings given to God", x: "He brought his tithe to the church." },
    { t: "sacrifice", d: "something valuable offered to God or given up for others", x: "The animal was offered as a sacrifice at the feast." },
    { t: "reverence", d: "deep respect shown in a holy place", x: "Enter the mosque with reverence." },
    { t: "service", d: "an organised gathering for worship", x: "The service lasted two hours." }
  ],
  facts: [
    { q: "Name four postures used in prayer.", a: "Standing, sitting, kneeling and prostrating." },
    { q: "Which day is the holy day for most Christians?", a: "Sunday." },
    { q: "Which day is the holy day for Muslims?", a: "Friday." },
    { q: "What is devotional prayer?", a: "A short regular time of prayer, at home or at school." },
    { q: "What is meditation?", a: "Quiet thinking about God and His word." },
    { q: "Name two types of offering.", a: "Any two: the tithe, the general offering, a thanksgiving gift and personal service." },
    { q: "Through whom do Christians worship God?", a: "Through Jesus Christ." },
    { q: "Through whose teaching do Muslims worship God?", a: "Through the teaching brought by Prophet Mohammed." }
  ],
  tf: [
    { s: "Prayers may be offered standing, sitting, kneeling or prostrating.", a: "true", why: "All these postures are used in worship." },
    { s: "Friday is the holy day for Muslims.", a: "true", why: "Muslims gather for congregational prayers on Friday." },
    { s: "Only money can be offered to God.", a: "false", why: "Time, service and thanksgiving are also offerings." },
    { s: "Meditation means shouting loudly in worship.", a: "false", why: "Meditation is quiet thinking about God and His word." },
    { s: "Places of worship should be treated with reverence.", a: "true", why: "They are set apart for the worship of God." },
    { s: "Christians and Muslims worship different Gods with no respect for each other.", a: "false", why: "Both worship the one God, and the syllabus teaches mutual respect." }
  ],
  apply: [
    { q: "Describe how you would take part in your school's morning devotion.", a: "Stand quietly, join in the song, listen to the reading, pray according to my faith, and not disturb others." },
    { q: "Why do believers use different postures in prayer?", a: "Each posture expresses something: standing shows readiness, kneeling and prostrating show humility before God." },
    { q: "A visitor to your place of worship does not know what to do. How will you help him?", a: "Greet him, show him where to sit, quietly tell him what is happening, and not embarrass him." },
    { q: "Give two reasons why people give offerings.", a: "To thank God for His gifts, and to support the place of worship and help the poor." },
    { q: "How can you make a quiet time of meditation at home?", a: "Find a quiet corner, put away distractions, read a short passage and think about what it means for me." }
  ],
  sort: {
    title: "Postures, days and offerings",
    groups: [
      { name: "Postures of prayer", items: ["standing", "sitting", "kneeling", "prostrating"] },
      { name: "Holy days", items: ["Friday", "Sunday"] },
      { name: "Types of offering", items: ["tithe", "general offering", "thanksgiving gift", "personal service"] }
    ]
  },
  compare: {
    title: "Worship in the church and in the mosque",
    caption: "Complete the table with accurate and respectful information.",
    items: [
      { p: "Place", f: "Church for Christians; mosque for Muslims." },
      { p: "Holy day", f: "Sunday for most Christians; Friday for Muslims." },
      { p: "Leader", f: "The pastor or priest in the church; the imam in the mosque." },
      { p: "Holy Book read", f: "The Holy Bible in the church; the Holy Quran in the mosque." },
      { p: "Offerings given", f: "Tithes and offerings in the church; charity and offerings in the mosque." }
    ]
  },
  casestudy: {
    title: "One school, two devotions",
    text: "At a school in Ganta the pupils used to argue every morning about how devotion should be held. The Christians wanted hymns; the Muslims wanted recitation. Some mornings the argument took longer than the devotion itself. Then the principal called the pupils together and proposed a plan. On Monday and Wednesday the Christian pupils would lead with a hymn and a reading. On Tuesday and Thursday the Muslim pupils would lead with a recitation. On Friday everyone would stand together in silence for two minutes and pray quietly according to their own faith. At first some grumbled. But after one term the pupils said devotion had become the calmest part of the day.",
    questions: [
      { q: "What was the pupils' argument about?", a: "About how the morning devotion should be held — with hymns or with recitation." },
      { q: "What plan did the principal propose?", a: "Christian pupils would lead on two days, Muslim pupils on two days, and on Friday all would pray quietly according to their own faith." },
      { q: "What was the result after one term?", a: "Devotion became the calmest part of the school day." }
    ]
  },
  project: {
    title: "A visit report on worship",
    brief: "With your parent's permission, attend one service at your own place of worship and write a report.",
    steps: [
      "Note the day and the time the service began and ended.",
      "Write down the main parts of the service in the order they happened.",
      "Write what Holy Book passage was read.",
      "Write what offering was taken and what it is used for.",
      "Write one thing you learned that you will practise at home."
    ],
    criteria: ["parts of the service listed in order", "passage correctly noted", "offering explained", "one personal application stated"]
  },
  activities: [
    "Read scriptures of prayer and sing hymns used at services and home devotion",
    "Practise prayer in public and in private places",
    "Draw and colour pictures of churches and mosques",
    "Write a paragraph each on self-prayer and meditation"
  ],
  materials: ["Posters", "Markers", "Pens", "Pencils", "Colouring pencils"],
  assessment: ["Oral and written tests", "Reading", "Written work", "Class work", "Quizzes"]
},

{
  grade: 3, period: "IV", sem: "Two", icon: "⛪",
  title: "Religious Services",
  subtitle: "Services in the Christian church and Al-Fatiha in the mosque",
  outcomes: [
    "Learners understand and practise religion according to their faith by attending places of worship and by private devotion."
  ],
  objectives: [
    "Explain the religious services held in Christian churches",
    "Explain the religious services held in the mosque, according to faith",
    "Take part respectfully in devotion at school"
  ],
  note: "A religious service is an organised time of worship. In Christian churches there are Sunday services, prayer meetings and special services. In the mosque, Muslims perform daily prayers and the Friday congregational prayer, opening with Al-Fatiha.",
  study:[
    /* ---- course text: Semester Two, Period IV — Religious Services (pages 24-25) ---- */
    {k:"h3", t:"Various Types of Religious Services"},
    {k:"p", t:"Religious services are the **gatherings of believers to worship God**. Learners understand and practise religion according to their faith by attending places of worship and by keeping private devotions. There are different types of religious services in the Christian church and in the mosque."},
    {k:"rule"},
    {k:"h3", t:"Services in the Christian Churches"},
    {k:"p", t:"Christian church services include **morning devotion**, **Sunday worship**, **prayer meetings**, **thanksgiving services** and special services such as Christmas and Easter. The service usually includes **singing, prayer, scripture reading, the sermon and offering**."},
    {k:"bul", items:["Songs and hymns of praise", "Prayers — opening, thanksgiving and intercession", "Reading from the Holy Bible (various Bible verses on religious services; 101 Bible Stories)", "Preaching and teaching from the word of God", "Offering and giving"]},
    {k:"rule"},
    {k:"h3", t:"Al-Fatiha for Muslims in the Mosque"},
    {k:"p", t:"Muslims worship in the **mosque**, where they pray the five daily prayers. The **Al-Fatiha** — the opening chapter of the Holy Quran — is recited in every unit of prayer. It asks for the guidance, lordship and mercy of God: *'Guide us on the straight path'* (Quran 1:1-7)."},
    {k:"p", t:"Various scriptures on religious services from the Holy Quran are studied according to faith; other related books are used according to the belief systems."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:["Lead prayers and morning devotion around the flag pole.", "Worship in places according to your faith and beliefs.", "Draw and colour people attending church or mosque according to your faith.", "Write a paragraph on Christian church services, or say the Al-Fatiha for Muslims (according to your faith).", "Give an oral report on a visit to a church and a mosque."]}
  ],
  focus: ["Various types of religious services", "Services in Christian churches", "Al-Fatiha for Muslims in the mosque"],
  terms: [
    { t: "religious service", d: "an organised time of worship", x: "The religious service began at nine o'clock." },
    { t: "Al-Fatiha", d: "the opening surah of the Holy Quran, recited in Muslim prayer", x: "Muslims recite Al-Fatiha in every prayer." },
    { t: "sermon", d: "a talk given to teach the worshippers", x: "The sermon was about forgiveness." },
    { t: "choir", d: "a group that sings together in worship", x: "The choir sang two hymns." },
    { t: "congregation", d: "the people gathered for worship", x: "The congregation stood to pray." },
    { t: "baptism", d: "a Christian ceremony of washing that marks entry into the faith", x: "The baptism took place at the river." },
    { t: "wudu", d: "the washing Muslims perform before prayer", x: "He performed wudu before entering the mosque." },
    { t: "azan", d: "the Muslim call to prayer", x: "The azan is heard from the mosque at dawn." },
    { t: "devotion", d: "a short regular time of worship", x: "The family holds devotion each evening." },
    { t: "usher", d: "one who welcomes and seats people at a service", x: "The usher showed the visitors to a seat." }
  ],
  facts: [
    { q: "What is a religious service?", a: "An organised time of worship." },
    { q: "What is Al-Fatiha?", a: "The opening surah of the Holy Quran, recited in Muslim prayer." },
    { q: "What is a sermon?", a: "A talk given to teach the worshippers." },
    { q: "What is the Muslim call to prayer called?", a: "The azan." },
    { q: "What is wudu?", a: "The washing Muslims perform before prayer." },
    { q: "Name two parts of a Christian Sunday service.", a: "Any two: singing, prayer, Bible reading, the sermon and the offering." },
    { q: "How many times a day do Muslims pray?", a: "Five times a day." },
    { q: "What does an usher do?", a: "Welcomes people and shows them where to sit." }
  ],
  tf: [
    { s: "Al-Fatiha is the opening surah of the Holy Quran.", a: "true", why: "It is recited in every Muslim prayer." },
    { s: "A sermon is a song sung by the choir.", a: "false", why: "A sermon is a talk given to teach the worshippers." },
    { s: "Muslims wash before prayer.", a: "true", why: "This washing is called wudu." },
    { s: "A religious service has no set order at all.", a: "false", why: "Most services follow a familiar order of worship." },
    { s: "Visitors should be welcomed politely at a place of worship.", a: "true", why: "Welcoming strangers is part of hospitality in both faiths." },
    { s: "Muslims pray twice a day.", a: "false", why: "Muslims pray five times a day." }
  ],
  apply: [
    { q: "You arrive late at a service. How should you enter?", a: "Quietly, without disturbing others, and take the nearest seat at the back." },
    { q: "How can pupils help at a religious service in their community?", a: "By ushering, arranging chairs, singing in the choir, reading, or helping to care for small children." },
    { q: "Why do Muslims wash before prayer?", a: "As a sign of cleanliness and readiness to stand before God." },
    { q: "A friend of another faith wants to know what happens at your service. How will you explain?", a: "I will describe the order simply and politely, and invite him to ask questions without mocking." },
    { q: "Why is it important to attend worship regularly and not only at festivals?", a: "Regular worship strengthens faith, keeps good habits, and connects a person to the community all year." }
  ],
  sort: {
    title: "Parts of Christian services and Muslim prayers",
    groups: [
      { name: "Christian service", items: ["hymn singing", "sermon", "Bible reading", "offering", "baptism"] },
      { name: "Muslim prayer", items: ["azan", "wudu", "Al-Fatiha", "prostration"] }
    ]
  },
  compare: {
    title: "Two forms of religious service",
    caption: "Complete the table describing each form of service.",
    items: [
      { p: "Christian Sunday service", f: "Singing, prayer, reading of the Holy Bible, a sermon and the offering." },
      { p: "Muslim Friday prayer", f: "The call to prayer, washing, congregational prayer led by the imam, and a sermon." },
      { p: "Daily practice", f: "Christians hold personal or family devotion; Muslims pray five times each day." },
      { p: "Common ground", f: "Both include prayer, the reading of the Holy Book, teaching and giving." }
    ]
  },
  casestudy: {
    title: "The visitor at the door",
    text: "A stranger arrived at a small church in Buchanan on a rainy Sunday. His shoes were muddy and his shirt was old, and he stood hesitating at the door. Two members looked at him and looked away. But an old usher named Ma Beatrice went straight to him, took his hand and said, “You are welcome. Come and sit with me.” She gave him a place beside her and shared her hymn book. After the service she gave him a plate of food. Weeks later the man came back, this time properly dressed, and told the congregation that he had been ready to give up on people entirely until that morning. “One woman opened a door,” he said, “and it was enough.”",
    questions: [
      { q: "How did the two members treat the stranger?", a: "They looked at him and looked away, without welcoming him." },
      { q: "What did Ma Beatrice do?", a: "She welcomed him, sat him beside her, shared her hymn book and gave him food afterwards." },
      { q: "What lesson does this story teach about religious services?", a: "That how we welcome people matters as much as the service itself, and one kind act can change a life." }
    ]
  },
  project: {
    title: "The order of a service",
    brief: "Find out and write the order of one religious service in your community.",
    steps: [
      "Attend or ask about one service at your own place of worship.",
      "List the parts of the service in the correct order, numbering them.",
      "Beside each part, write in one line what happens.",
      "Ask a leader politely why one of the parts is important, and write the answer.",
      "Present your order of service to your group."
    ],
    criteria: ["parts listed in correct order", "clear one-line explanations", "one question asked politely", "accurate and respectful reporting"]
  },
  activities: [
    "Learners lead prayers and morning devotion around the flag pole",
    "Learners worship in places according to their faith and beliefs",
    "Draw and colour people attending church or mosque",
    "Oral report on a visit to a church or mosque"
  ],
  materials: ["Colouring pencils", "Paint", "Posters", "Pencils", "Pens"],
  assessment: ["Oral and written tests", "Reading", "Written work", "Class work", "Quizzes"]
},

{
  grade: 3, period: "V", sem: "Two", icon: "🕊️",
  title: "Conflict and its Resolution Process",
  subtitle: "Kinds of conflict, their causes and how to resolve them",
  outcomes: [
    "Learners understand the causes of conflict — physical, spiritual and emotional — and use the process of conflict resolution based on religious teachings from both the Holy Bible and the Holy Quran, according to faith."
  ],
  objectives: [
    "Define conflict",
    "Name the kinds of conflict",
    "State the causes of conflict",
    "Know the methods of conflict resolution"
  ],
  note: "Conflict is a serious disagreement between people. Liberia has learned at great cost that conflict destroys, and that peace must be built patiently. Both Holy Books teach peacemaking, forgiveness and justice.",
  study:[
    /* ---- course text: Semester Two, Period V — Conflict and its Resolution Process (pages 26-27) ---- */
    {k:"h3", t:"Definition of Conflict"},
    {k:"p", t:"**Conflict** is a disagreement, quarrel or fight between people or groups. It happens when people want different things, or when one person's actions hurt another. Learners define the word conflict and learn to manage it using religious teachings from both the Holy Bible and the Holy Quran according to faith."},
    {k:"rule"},
    {k:"h3", t:"Kinds of Conflicts"},
    {k:"bul", items:["**Physical conflict** — fighting with the body, such as pushing, hitting or fighting", "**Spiritual conflict** — a struggle between good and evil, right and wrong", "**Emotional conflict** — a storm of feelings inside a person, such as anger, jealousy or fear", "**Family conflict** — quarrels between members of a family", "**Ethnic conflict** — disagreements between ethnic groups", "**Governmental conflict** — conflict over power, laws or leadership in a country"]},
    {k:"rule"},
    {k:"h3", t:"Causes of Conflicts"},
    {k:"p", t:"Conflicts are caused by many things:"},
    {k:"bul", items:["Misunderstanding — not understanding one another", "Greed and selfishness — wanting more than our share", "Jealousy and envy of other people's success", "Unfairness and injustice", "Bad words — insults, lies and gossip", "Refusing to forgive past wrongs"]},
    {k:"rule"},
    {k:"h3", t:"Resolution of Conflict"},
    {k:"p", t:"**Conflict resolution** is the process of bringing a disagreement to a peaceful end. Religious teaching offers a way of peace:"},
    {k:"num", items:["**Listen** — hear both sides of the story.", "**Speak calmly** — avoid angry words and insults.", "**Forgive** — let go of the wrong done to you.", "**Make peace** — apologise, make amends and shake hands.", "**Get help** — involve elders, teachers or religious leaders when needed."]},
    {k:"p", t:"Scripture references for study: the Holy Bible, A Program of Ministry to Manage Conflict (Matthew 18:15-20); the Holy Quran, Peace and Conflict Resolution in Islam. Also study the Teacher's Guide on Conflict Resolution."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:["Define the word conflict.", "Research and write one paragraph each on the types of conflict: physical, spiritual, emotional, family, ethnic and governmental.", "Stage a resolution process for two conflicts.", "Apply the religious teachings of peace and forgiveness to real situations at home and at school."]}
  ],
  focus: ["Definition of conflict", "Kinds of conflict", "Causes of conflict", "Resolution of conflict"],
  terms: [
    { t: "conflict", d: "a serious disagreement or quarrel between people", x: "The conflict began over a small piece of land." },
    { t: "resolution", d: "the settling of a disagreement", x: "The elders helped them reach a resolution." },
    { t: "mediator", d: "a neutral person who helps two sides settle a quarrel", x: "The town chief acted as mediator." },
    { t: "peace", d: "living together calmly without fighting", x: "Peace returned to the village after the meeting." },
    { t: "quarrel", d: "an angry argument", x: "The quarrel started over a borrowed bucket." },
    { t: "apologise", d: "to say sorry for a wrong done", x: "He apologised in front of the whole class." },
    { t: "compromise", d: "an agreement where each side gives up something", x: "They reached a compromise and shared the tools." },
    { t: "tolerance", d: "accepting people who are different from you", x: "Tolerance keeps a mixed community peaceful." },
    { t: "reconcile", d: "to become friends again after a quarrel", x: "The two families were reconciled." },
    { t: "justice", d: "treating people fairly and rightly", x: "Justice means hearing both sides before deciding." }
  ],
  facts: [
    { q: "What is conflict?", a: "A serious disagreement or quarrel between people." },
    { q: "Name three kinds of conflict.", a: "Any three: physical, spiritual, emotional, family, ethnic and governmental conflict." },
    { q: "Name two common causes of conflict.", a: "Any two: land disputes, gossip, unfair treatment, greed and misunderstanding." },
    { q: "Who is a mediator?", a: "A neutral person who helps two sides settle a quarrel." },
    { q: "What is a compromise?", a: "An agreement in which each side gives up something." },
    { q: "What does it mean to reconcile?", a: "To become friends again after a quarrel." },
    { q: "Name one step in resolving a conflict.", a: "Listen to both sides, or bring in a trusted mediator, or apologise and agree on a solution." },
    { q: "What do both Holy Books teach about peacemaking?", a: "That peacemakers are blessed and that believers should forgive and seek peace." }
  ],
  tf: [
    { s: "Conflict is a serious disagreement between people.", a: "true", why: "That is the definition given in this topic." },
    { s: "The best way to end a quarrel is always to fight.", a: "false", why: "Fighting makes conflict worse; talking and mediation resolve it." },
    { s: "A mediator takes the side of one person.", a: "false", why: "A mediator is neutral and helps both sides." },
    { s: "Gossip can cause conflict.", a: "true", why: "Careless words spread anger and misunderstanding." },
    { s: "Both the Holy Bible and the Holy Quran encourage peacemaking.", a: "true", why: "Both teach forgiveness, justice and peace." },
    { s: "Once people quarrel they can never be friends again.", a: "false", why: "Through apology and reconciliation, friendship can be restored." }
  ],
  apply: [
    { q: "Two pupils in your class fight over a football. Describe three steps to settle it.", a: "Separate them and let tempers cool; let each one tell his side without interruption; agree a fair plan for sharing the ball, and have them shake hands." },
    { q: "How can gossip in a community lead to conflict?", a: "Gossip carries half-truths from person to person, people become angry over things that were never said, and families turn against each other." },
    { q: "Why is it important to hear both sides before judging?", a: "Because one side alone may be mistaken or unfair, and justice requires hearing everyone." },
    { q: "Give one way pupils can be peacemakers in their school.", a: "By refusing to spread gossip, by separating friends who are about to fight and by reporting serious matters to a teacher." },
    { q: "Your friend wants you to join him in revenge. What will you say?", a: "That revenge will only widen the quarrel, and I will urge him to talk it out or take the matter to an elder or teacher." }
  ],
  sort: {
    title: "Causes of conflict and ways of resolving conflict",
    groups: [
      { name: "Causes of conflict", items: ["gossip", "greed", "unfair treatment", "land disputes", "insults"] },
      { name: "Ways of resolving conflict", items: ["listening to both sides", "mediation", "apology", "compromise", "forgiveness"] }
    ]
  },
  compare: {
    title: "Kinds of conflict",
    caption: "Complete the table with an example of each kind of conflict.",
    items: [
      { p: "Physical conflict", f: "Fighting or violence between people, such as a brawl in the market." },
      { p: "Emotional conflict", f: "Hurt feelings, jealousy or bitterness carried inside a person." },
      { p: "Family conflict", f: "Quarrels between relatives, for example over property or responsibility." },
      { p: "Community or ethnic conflict", f: "Disputes between groups, for example over land, boundaries or unequal treatment." }
    ]
  },
  casestudy: {
    title: "The palava hut",
    text: "Two farmers in a town in Nimba both claimed the same strip of land beside a creek. Each had planted cassava on it, and each had pulled up the other's plants. Their sons began to threaten one another, and the women stopped greeting across the fence. Before the matter grew worse, the town chief called both families to the palava hut. Everyone sat. Each farmer spoke without interruption, and then the elders who remembered the old boundaries spoke. It became clear that the boundary ran along the old palm line. The chief ruled that the land above the palms belonged to the first farmer, and below to the second, and that each should replace what he had uprooted. The two men shook hands, and the women greeted again the following morning.",
    questions: [
      { q: "What was the conflict about?", a: "Two farmers both claimed the same strip of land beside a creek." },
      { q: "Where was the matter settled, and who led the process?", a: "In the palava hut, led by the town chief with the elders." },
      { q: "Name two things that made the resolution work.", a: "Each side was allowed to speak without interruption, and the elders' knowledge of the old boundary gave a fair basis for the decision; both were also required to make good the damage." }
    ]
  },
  project: {
    title: "A peace drama",
    brief: "Work in a group to act out a conflict and its resolution.",
    steps: [
      "In your group, choose a simple conflict that could happen in a school or a community.",
      "Decide the characters, including two who quarrel and one mediator.",
      "Act out the cause of the conflict.",
      "Act out the resolution: listening, apology, agreement and handshake.",
      "After the drama, tell the class the three lessons your group wants them to remember."
    ],
    criteria: ["a realistic conflict chosen", "a clear mediation shown", "peaceful resolution acted out", "three lessons clearly stated"]
  },
  activities: [
    "Learners define the word conflict",
    "Research and write one paragraph each on the types of conflict",
    "Stage a resolution process for two conflicts",
    "Class discussion on the effects of conflict in the family and community"
  ],
  materials: ["Charts", "Poster sheets", "Pencils", "Colouring pencils"],
  assessment: ["Oral and written tests", "Reading", "Drama", "Class work", "Quizzes"]
},

{
  grade: 3, period: "VI", sem: "Two", icon: "🍂",
  title: "Death and Hereafter",
  subtitle: "Death as a characteristic of all living things",
  outcomes: [
    "Learners are able to differentiate between physical, spiritual and emotional death, and to accept death as a reality of life."
  ],
  objectives: [
    "Explain the death of plants",
    "Explain the death of man",
    "Explain what death is"
  ],
  note: "Death is a characteristic of all living things: plants die, animals die and people die. Understanding this helps us to value life and to treat one another well while we have time.",
  study:[
    /* ---- course text: Semester Two, Period VI — Death and Hereafter (page 28) ---- */
    {k:"h3", t:"Death as a Characteristic of Living Things"},
    {k:"p", t:"**Death** is a characteristic of living things — everything that has life will one day die. Learners are able to differentiate between physical, spiritual and emotional death, and accept death as a **reality of life**."},
    {k:"rule"},
    {k:"h3", t:"The Death of Plants"},
    {k:"p", t:"Plants die: leaves fall, trees wither and dry up. The death of plants is part of the natural cycle of growth and decay on the earth."},
    {k:"rule"},
    {k:"h3", t:"The Death of Animals"},
    {k:"p", t:"Animals die: birds, fish and beasts all come to the end of their lives. The death of animals is also a natural part of life."},
    {k:"rule"},
    {k:"h3", t:"The Death of Man"},
    {k:"p", t:"**Man also dies.** Death is the departure of the soul from the body. For man, death is more than a natural event — religious teaching connects it to sin and to the life that comes after."},
    {k:"p", t:"Scripture references: the Holy Bible, 1 Thessalonians 4:14-16 — we believe that Jesus died and rose again, and so those who have fallen asleep in Him will be raised; Revelation 21:1-5 — God will wipe away every tear, and death shall be no more."},
    {k:"rule"},
    {k:"h3", t:"Physical and Spiritual Death"},
    {k:"bul", items:["**Physical death** — the end of the body's life on earth", "**Spiritual death** — separation from God through sin", "**Emotional death** — feelings of hopelessness, despair and being crushed in spirit"]},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:["Define death and list its characteristics.", "Discuss the differences between physical death and spiritual death.", "Interview pastors and imams on the subject of death.", "Give an oral presentation on the two kinds of death."]}
  ],
  focus: ["Death as a characteristic of living things", "Death of man", "Death of animals", "Death of plants"],
  terms: [
    { t: "characteristic", d: "a quality that belongs to something by nature", x: "Death is a characteristic of every living thing." },
    { t: "physical death", d: "the end of life in the body", x: "Physical death comes to all people." },
    { t: "spiritual death", d: "separation from God caused by persistent wrongdoing", x: "The scriptures warn against spiritual death." },
    { t: "emotional death", d: "the loss of feeling, hope or care within a person", x: "Long suffering can bring a kind of emotional death." },
    { t: "decay", d: "the natural breaking down of a dead plant or body", x: "Fallen leaves decay and enrich the soil." },
    { t: "life cycle", d: "the stages a living thing passes through from birth to death", x: "Birth, growth, reproduction and death form the life cycle." },
    { t: "hereafter", d: "the life that believers say follows death", x: "Both faiths teach about the hereafter." },
    { t: "immortal", d: "never dying", x: "Believers speak of the soul as immortal." },
    { t: "value", d: "to treat as precious and important", x: "Knowing life is short helps us value each day." },
    { t: "legacy", d: "the good that a person leaves behind", x: "Her legacy was the school she helped to build." }
  ],
  facts: [
    { q: "Name the three kinds of death studied in this unit.", a: "Physical death, spiritual death and emotional death." },
    { q: "Do plants also die?", a: "Yes, plants are living things and they die." },
    { q: "What is a life cycle?", a: "The stages a living thing passes through from birth to death." },
    { q: "What is physical death?", a: "The end of life in the body." },
    { q: "What is spiritual death?", a: "Separation from God caused by persistent wrongdoing." },
    { q: "What is the hereafter?", a: "The life that believers say follows death." },
    { q: "What is a legacy?", a: "The good that a person leaves behind." },
    { q: "How does knowing that life ends help us live?", a: "It helps us value each day, treat people well and leave a good legacy." }
  ],
  tf: [
    { s: "Death is a characteristic of all living things.", a: "true", why: "Plants, animals and people all die." },
    { s: "Plants never die; only animals and people do.", a: "false", why: "Plants are living things and they also die." },
    { s: "A legacy is the good a person leaves behind.", a: "true", why: "That is the meaning of a legacy." },
    { s: "Knowing that life is short should make us careless.", a: "false", why: "It should make us value life and use our time well." },
    { s: "Both Holy Books teach about a hereafter.", a: "true", why: "Both the Holy Bible and the Holy Quran teach life after death." },
    { s: "It is kind to remind a grieving child again and again of the details of the death.", a: "false", why: "It reopens the wound; kindness means gentle support, not repetition of painful details." }
  ],
  apply: [
    { q: "How does a dead leaf falling to the ground still serve the living?", a: "It decays and enriches the soil, so new plants can grow — death makes way for new life." },
    { q: "What legacy would you like to leave in your school?", a: "For example: to be remembered as a pupil who was honest, helped others and left the garden growing." },
    { q: "A pupil says life has no meaning because everyone dies. How would you answer?", a: "That the shortness of life makes it precious, and what we do for God and for others gives our life meaning." },
    { q: "Name one thing you can do this term for someone who is old and near the end of life.", a: "Visit them, listen to their stories, fetch water for them or help with small tasks." },
    { q: "Why must a class be careful when discussing death?", a: "Because some pupils have recently lost a relative, and careless words can hurt them deeply." }
  ],
  sort: {
    title: "Living things and their life cycle",
    groups: [
      { name: "Living things — they die", items: ["a cassava plant", "a chicken", "a person", "a fish"] },
      { name: "Not living — they do not die", items: ["a rock", "a bucket", "sand", "a chair"] }
    ]
  },
  compare: {
    title: "Three kinds of death",
    caption: "Complete the table with the meaning and one example of each.",
    items: [
      { p: "Physical death", f: "The body stops living, as when an old person dies and is buried." },
      { p: "Spiritual death", f: "Separation from God through persistent wrongdoing, according to religious teaching." },
      { p: "Emotional death", f: "Loss of hope, feeling or care within a person, often after long suffering." },
      { p: "Death in plants and animals", f: "Plants wither and decay; animals also die, showing that death belongs to all living things." }
    ]
  },
  casestudy: {
    title: "The old mango tree",
    text: "For as long as anyone could remember, a great mango tree had stood in the school yard. Pupils ate its fruit and sheltered under it at break. Then one dry season the leaves turned brown and did not come back. The tree was dead. The pupils were sad, and some wanted the trunk left standing. Their teacher explained that the wood would rot and could fall on someone. So the tree was cut. But before it was cut, the class gathered the last seeds from the ground and planted twenty of them along the fence. The stump was left as a bench. Three years later, six young mango trees were growing tall, and the pupils who planted them had moved on to another class.",
    questions: [
      { q: "What happened to the old mango tree?", a: "Its leaves turned brown, it died, and it had to be cut down for safety." },
      { q: "What did the pupils do before the tree was cut?", a: "They gathered the last seeds and planted twenty of them along the fence." },
      { q: "What does this story teach about death and new life?", a: "That death is part of the life cycle, and that what we plant before the end can go on giving to those who come after us." }
    ]
  },
  project: {
    title: "A life cycle chart",
    brief: "Draw the life cycle of one living thing, showing that death is part of it.",
    steps: [
      "Choose a plant or an animal you know well.",
      "Draw a circle chart with four or five stages, from seed or birth to death.",
      "Label each stage clearly.",
      "Write one sentence under the chart on what happens after death, for example decay enriching the soil.",
      "Present your chart to the class."
    ],
    criteria: ["correct stages in order", "clear labels", "sentence about what follows death", "neat presentation"]
  },
  activities: [
    "Learners define death and its characteristics",
    "Discuss the differences between physical and spiritual death",
    "Interview a pastor or an imam on the subject of death",
    "Give an oral presentation on the kinds of death"
  ],
  materials: ["Charts", "Poster sheets", "Pencils", "Colouring pencils"],
  assessment: ["Oral and written tests", "Interview report", "Class discussion", "Class work"]
},

/* ============================ GRADE 4 ============================ */
{
  grade: 4, period: "I", sem: "One", icon: "👤",
  title: "Creation — The Uniqueness of the Individual",
  subtitle: "Physical and mental characteristics that make each person different",
  outcomes: [
    "Learners are able to identify the uniqueness of an individual and list the physical characteristics that make him unique.",
    "Learners understand that God's creation is continuous."
  ],
  objectives: [
    "Explain how and why each person is different, which results in the uniqueness of the individual",
    "Identify the physical characteristics of the individual",
    "State the mental characteristics of an individual"
  ],
  note: "God created every person differently. No two people, not even twins, are exactly alike. Because each person is uniquely made by God, every person deserves respect, whatever their tribe, faith, sex or ability.",
  study:[
    /* ---- course text: Semester One, Period I — Creation: The Uniqueness of the Individual (pages 29-30) ---- */
    {k:"h3", t:"Creation — The Uniqueness of Individuals"},
    {k:"p", t:"God created every person, and every person is **unique** — there is no one else exactly like you. Learners are able to identify the uniqueness of an individual and to list those physical characteristics that make him or her unique, and they understand that **God's creation is continuous**."},
    {k:"p", t:"Scripture references: the Holy Bible, Genesis 1:26-27 (God created man in His own image), Genesis 2:7 (the Lord formed man from the dust and breathed life into him) and Genesis 2:21-22 (the creation of woman); the Holy Quran on the great flood, Sura 11 and Sura 71."},
    {k:"rule"},
    {k:"h3", t:"Physical Characteristics"},
    {k:"p", t:"**Physical characteristics** are the features of the body that we can see and identify:"},
    {k:"bul", items:["Face, height, skin colour and body size", "Colour and shape of the eyes", "Colour and style of the hair", "Voice and way of walking", "The shape of the nose, mouth and ears"]},
    {k:"p", t:"No two people look exactly the same, even twins have small differences. These differences make each person unique."},
    {k:"rule"},
    {k:"h3", t:"Mental Characteristics"},
    {k:"p", t:"**Mental characteristics** are the abilities of the mind:"},
    {k:"bul", items:["Intelligence — how quickly and well we learn", "Memory — how well we remember", "Creativity — the new ideas we make", "Talent — the special gifts God has given each person", "Attitude — whether we are cheerful, calm, kind or determined"]},
    {k:"rule"},
    {k:"h3", t:"Why Each Person Is Different"},
    {k:"p", t:"Each person is different because **God made each one unique**. Difference is not a mistake — it is God's design. Our differences mean we can help one another: the person who sings well, the person who thinks deeply, the person who is strong and the person who is kind."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:["Discuss the uniqueness of the individual.", "Explain how and why individuals are unique one from the other.", "Make a written presentation on the characteristics of an individual.", "Explain and identify some of the physical characteristics of an individual."]}
  ],
  focus: ["Creation: the uniqueness of individuals", "Physical characteristics", "Mental characteristics"],
  terms: [
    { t: "unique", d: "the only one of its kind; unlike any other", x: "Every fingerprint is unique." },
    { t: "individual", d: "one single person", x: "Each individual in the class has a different talent." },
    { t: "physical characteristic", d: "a feature of the body that can be seen", x: "Height is a physical characteristic." },
    { t: "mental characteristic", d: "a quality of the mind, such as memory or reasoning", x: "A good memory is a mental characteristic." },
    { t: "talent", d: "a natural ability a person is born with", x: "Singing is her greatest talent." },
    { t: "personality", d: "the whole character and manner of a person", x: "He has a calm and patient personality." },
    { t: "identity", d: "who a person is", x: "Your name and family are part of your identity." },
    { t: "disability", d: "a condition that limits some activity of a person", x: "A pupil with a disability can still learn very well." },
    { t: "respect", d: "treating each person as valuable", x: "We show respect to everyone, however different." },
    { t: "continuous", d: "going on without stopping", x: "God's work of creation is continuous, as new life is born each day." }
  ],
  facts: [
    { q: "What does it mean to say a person is unique?", a: "That he is the only one of his kind; no one else is exactly like him." },
    { q: "Name three physical characteristics.", a: "Any three, for example: height, skin colour, shape of face, colour of eyes." },
    { q: "Name two mental characteristics.", a: "Any two, for example: memory, reasoning, imagination and understanding." },
    { q: "Why should every person be respected?", a: "Because every person was uniquely created by God and is valuable." },
    { q: "Are twins exactly the same?", a: "No. Even twins differ in fingerprints, character and abilities." },
    { q: "What is a talent?", a: "A natural ability that a person is born with." },
    { q: "How should a pupil with a disability be treated?", a: "With full respect and inclusion, and given help where needed." },
    { q: "What does it mean that God's creation is continuous?", a: "That God goes on giving life; new children, plants and animals are born every day." }
  ],
  tf: [
    { s: "Every person is unique.", a: "true", why: "No two people are exactly alike, not even twins." },
    { s: "Height and skin colour are mental characteristics.", a: "false", why: "They are physical characteristics; mental characteristics belong to the mind." },
    { s: "A person with a disability is less valuable than others.", a: "false", why: "Every person is created by God and equally valuable." },
    { s: "Talents differ from person to person.", a: "true", why: "God gives different natural abilities to different people." },
    { s: "Because people differ, we should mock those who are not like us.", a: "false", why: "Difference is God's design and calls for respect, not mockery." },
    { s: "Memory and reasoning are mental characteristics.", a: "true", why: "They are qualities of the mind." }
  ],
  apply: [
    { q: "Name two of your own talents and say how you can use them to help others.", a: "For example: I can sing, so I can lead songs at devotion; I am good at mathematics, so I can help a classmate who struggles." },
    { q: "A pupil is teased because he is short. What will you say to those teasing him?", a: "That God made him as he is, that height is not a measure of worth, and that teasing is unkind and wrong." },
    { q: "Why is it wrong to judge a person by his tribe or his faith?", a: "Because each person is an individual created by God, and should be judged by his character, not his group." },
    { q: "How can a class make sure a pupil with a disability is included?", a: "Give him a seat where he can see and hear, choose him for group work, help without pitying, and never leave him out of games." },
    { q: "Two pupils are good at different things. Is one better than the other? Explain.", a: "No. They have different gifts from God; each is valuable and the class needs both." }
  ],
  sort: {
    title: "Physical and mental characteristics",
    groups: [
      { name: "Physical characteristics", items: ["height", "skin colour", "shape of the nose", "colour of the eyes", "strength"] },
      { name: "Mental characteristics", items: ["memory", "reasoning", "imagination", "understanding", "patience"] }
    ]
  },
  compare: {
    title: "What makes each individual unique",
    caption: "Complete the table by giving an example of each kind of difference.",
    items: [
      { p: "Physical differences", f: "Height, build, features of the face, voice and fingerprints." },
      { p: "Mental differences", f: "Ways of thinking, speed of learning, memory and imagination." },
      { p: "Talents and abilities", f: "Singing, sport, drawing, mathematics, farming, leading others." },
      { p: "What is the same in all", f: "All are created by God, all have dignity and all deserve respect." }
    ]
  },
  casestudy: {
    title: "The team that needed everyone",
    text: "A Grade Four class was asked to prepare an exhibition for the school. At first the strong boys wanted to do everything themselves. But the work would not come together. Then the class teacher asked each pupil what he or she could do best. Musu, who was quiet, turned out to draw beautifully. Sekou, who often failed spelling, could build anything from scrap wood. Korto, who used crutches, kept the list of materials and made sure nothing was lost. Jallah, who talked too much in class, turned out to be the best at explaining the exhibition to visitors. On the day, their table won first place. Their teacher said, “You did not win because you had the strongest pupils. You won because you finally used everybody.”",
    questions: [
      { q: "Why did the work not come together at first?", a: "Because the strong boys tried to do everything themselves instead of using everyone's abilities." },
      { q: "Name two pupils and the gift each brought to the team.", a: "Any two, for example: Musu drew beautifully and Korto organised the materials; Sekou built and Jallah explained to visitors." },
      { q: "What is the main lesson of this story?", a: "That every individual has a different God-given gift, and a group succeeds when it values and uses all of them." }
    ]
  },
  project: {
    title: "My uniqueness page",
    brief: "Make a page describing what makes you unique, and one describing a classmate.",
    steps: [
      "On the first half of the page, write four physical characteristics of yourself.",
      "Write two mental characteristics and two talents you have.",
      "On the second half, interview a classmate and write four things that make him or her unique.",
      "Write one sentence saying what you admire in that classmate.",
      "Exchange pages and read each other's work respectfully."
    ],
    criteria: ["four physical characteristics", "mental characteristics and talents named", "classmate interviewed politely", "a genuine and kind observation written"]
  },
  activities: [
    "Discuss the uniqueness of the individual",
    "Explain how and why individuals differ from one another",
    "Written presentation on the characteristics of an individual",
    "Draw three persons with different characteristics"
  ],
  materials: ["Charts", "Poster sheets", "Pencils", "Colouring pencils"],
  assessment: ["Oral and written tests", "Reading", "Written work", "Class work", "Quizzes"]
},

{
  grade: 4, period: "II", sem: "One", icon: "📏",
  title: "Commandments of God",
  subtitle: "Moral, ceremonial and civil laws; the laws of God and the laws of man",
  outcomes: [
    "Learners understand the need to live in fellowship with God and with their fellow man, and to be law-abiding citizens."
  ],
  objectives: [
    "Read the moral laws of God",
    "Understand the moral laws of various communities and societies",
    "Distinguish between moral, ceremonial and civil laws",
    "Compare the laws of God with the laws of man"
  ],
  note: "The commandments of God make harmonious living possible. Religious teaching speaks of moral laws, which govern right and wrong; ceremonial laws, which govern worship and ceremonies; and civil laws, which govern the running of a society. The Constitution of Liberia also gives laws that citizens must obey.",
  study:[
    /* ---- course text: Semester One, Period II — Commandments of God (pages 31-32) ---- */
    {k:"h3", t:"Commandments Facilitate Harmonious Living"},
    {k:"p", t:"The **commandments of God** are the moral laws that teach us how to live. Learners understand the need to live in fellowship with God and with fellow man, and to be **law-abiding citizens**. Commandments facilitate **harmonious living** — when people keep the commandments, families and communities live in peace."},
    {k:"rule"},
    {k:"h3", t:"The Moral Laws of God"},
    {k:"p", t:"The **Ten Commandments** (Exodus 20:3-17) are the moral laws of God given through Prophet Moses. They fall into two parts:"},
    {k:"bul", items:["**Duty to God** — worship God alone; make no idols; do not misuse God's name; keep the Sabbath holy", "**Duty to man** — honour your father and mother; do not murder; do not commit adultery; do not steal; do not lie; do not covet"]},
    {k:"rule"},
    {k:"h3", t:"Moral, Ceremonial and Civil Laws"},
    {k:"table", head:["Kind of law","What it covers","Example"], rows:[["Moral laws","Right and wrong behaviour for all people, at all times","Do not steal; do not lie; love your neighbour"],["Ceremonial laws","Worship, festivals, offerings and the holy things of religion","The festivals and offerings of the community of faith"],["Civil laws","The rules of a country, community or society","The laws of the Constitution of Liberia"]]},
    {k:"rule"},
    {k:"h3", t:"The Laws of God and the Laws of Man"},
    {k:"p", t:"God's laws teach what is right and wrong everywhere; man's laws are the rules that communities and societies make for themselves. In Liberia, the **Constitution of the Republic of Liberia** sets out the laws of the land. Discuss the **similarities and differences** between the laws of God and the laws of man — the Book of Moses, the Book of Discipline and the Constitution are study texts."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:["Read and write the Ten Commandments.", "Discuss the laws of God given to man.", "Write five moral laws of the Constitution of Liberia.", "Write three to four paragraphs explaining the ceremonial laws of the community and society.", "Write two to three paragraphs explaining the purpose of the Ten Commandments of God.", "Hold a class discussion on the similarity and differences between the laws of God and the laws of man."]}
  ],
  focus: ["Commandments facilitate harmonious living", "Moral, ceremonial and civil laws", "The laws of God and the laws of man"],
  terms: [
    { t: "moral law", d: "a law about right and wrong behaviour", x: "Do not steal is a moral law." },
    { t: "ceremonial law", d: "a law about worship, festivals and ceremonies", x: "Rules for a religious festival are ceremonial laws." },
    { t: "civil law", d: "a law made by the state to govern society", x: "Paying tax is required by civil law." },
    { t: "constitution", d: "the highest written law of a country", x: "The Constitution of Liberia guarantees freedom of religion." },
    { t: "citizen", d: "a member of a country with rights and duties", x: "A good citizen obeys the law." },
    { t: "law-abiding", d: "obeying the laws of the land", x: "A law-abiding person does not bribe officials." },
    { t: "harmony", d: "living together peacefully", x: "The commandments make harmony possible." },
    { t: "justice", d: "fair treatment according to what is right", x: "The courts exist to deliver justice." },
    { t: "fellowship", d: "friendly association, especially among believers", x: "They met weekly for fellowship and prayer." },
    { t: "obedience", d: "doing what the law or authority requires", x: "Obedience to traffic law saves lives." }
  ],
  facts: [
    { q: "Name the three kinds of law studied in this topic.", a: "Moral law, ceremonial law and civil law." },
    { q: "What is a moral law?", a: "A law about right and wrong behaviour." },
    { q: "What is a ceremonial law?", a: "A law about worship, festivals and ceremonies." },
    { q: "What is a civil law?", a: "A law made by the state to govern society." },
    { q: "What is the highest written law of Liberia?", a: "The Constitution of the Republic of Liberia." },
    { q: "Give one example of a civil law in Liberia.", a: "For example: obeying traffic rules, paying tax, or registering a birth." },
    { q: "Why do commandments make harmonious living possible?", a: "Because they set clear standards so people know what to expect from one another and quarrels are reduced." },
    { q: "What is a law-abiding citizen?", a: "One who obeys the laws of the land." }
  ],
  tf: [
    { s: "A moral law deals with right and wrong behaviour.", a: "true", why: "That is the definition of a moral law." },
    { s: "Civil laws are made by the state.", a: "true", why: "The state makes and enforces civil law." },
    { s: "Religious people do not need to obey the laws of the country.", a: "false", why: "Believers are also taught to be law-abiding citizens." },
    { s: "The Constitution is the highest written law of Liberia.", a: "true", why: "All other laws must agree with the Constitution." },
    { s: "Ceremonial laws deal with traffic and taxation.", a: "false", why: "Those are civil laws; ceremonial laws concern worship and ceremonies." },
    { s: "Laws exist to make peaceful living possible.", a: "true", why: "Clear laws reduce conflict and protect people." }
  ],
  apply: [
    { q: "Give one example each of a moral law, a ceremonial law and a civil law.", a: "Moral: do not steal. Ceremonial: how a religious festival is observed. Civil: driving on the correct side of the road." },
    { q: "Are the laws of God and the laws of man ever the same? Give an example.", a: "Yes. Both God's law and Liberian law forbid stealing and murder, so in many things they agree." },
    { q: "A civil law is unjust to poor people. What is the right way for a citizen to respond?", a: "Speak out peacefully, join others, petition the authorities and use lawful means to have it changed — not violence." },
    { q: "Why should a pupil obey school rules even when no teacher is watching?", a: "Because obedience is about character, not about being seen; and rules protect everyone in the school." },
    { q: "How does obeying traffic law show love for your neighbour?", a: "It protects the lives of other road users; careless driving endangers people God has made." }
  ],
  sort: {
    title: "Moral, ceremonial and civil laws",
    groups: [
      { name: "Moral law", items: ["do not steal", "do not lie", "honour your parents", "do not kill"] },
      { name: "Ceremonial law", items: ["rules for a festival", "how offerings are given", "washing before prayer"] },
      { name: "Civil law", items: ["pay tax", "obey traffic rules", "register a birth"] }
    ]
  },
  compare: {
    title: "The laws of God and the laws of man",
    caption: "Complete the table showing how the two kinds of law compare.",
    items: [
      { p: "Who gives the law", f: "God gives His commandments; the state makes civil laws through its legislature." },
      { p: "How it is enforced", f: "God's law is answered to in conscience and judgment; civil law is enforced by police and courts." },
      { p: "Where they agree", f: "Both forbid stealing, killing, cheating and giving false witness." },
      { p: "Duty of a believer", f: "To obey God's commandments and also to be a law-abiding citizen of Liberia." }
    ]
  },
  casestudy: {
    title: "The market woman and the receipt",
    text: "Ma Korpo sells cloth in a market in Monrovia. One day a young man came and bought six yards, but he asked her not to write a receipt so that he could avoid the market fee. He offered her a small extra payment to agree. Ma Korpo thought about it. The extra money would have paid for her daughter's copybooks. But she said, “My son, the fee is the law, and my God also sees this table.” She wrote the receipt and charged the correct amount. The young man was annoyed and left. But two weeks later he returned with three friends and bought a large quantity, saying, “I came back because you are the only trader in this line who would not cheat, and I can trust your measure too.”",
    questions: [
      { q: "What did the young man ask Ma Korpo to do?", a: "To sell without writing a receipt so that he could avoid paying the market fee." },
      { q: "Why did Ma Korpo refuse?", a: "Because the fee is required by law and because she knew God saw what she did." },
      { q: "What was the result of her honesty?", a: "The young man returned later with friends and gave her more business, because he could trust her." }
    ]
  },
  project: {
    title: "Laws in my community",
    brief: "Find out and record examples of the three kinds of law operating around you.",
    steps: [
      "Write down three moral laws that your family teaches you.",
      "Write down two ceremonial laws or customs observed at your place of worship.",
      "Ask an adult for two civil laws that citizens of Liberia must obey.",
      "For each law, write one line on what would happen if nobody obeyed it.",
      "Present your findings to the class."
    ],
    criteria: ["three moral laws recorded", "two ceremonial customs recorded", "two civil laws correctly stated", "clear consequences explained"]
  },
  activities: [
    "Read and write the Ten Commandments",
    "Discuss the laws of God given to man",
    "Write five moral laws found in the Constitution of Liberia",
    "Class discussion on the similarities and differences between the laws of God and the laws of man"
  ],
  materials: ["The Constitution of the Republic of Liberia", "Charts", "Poster sheets", "Pens"],
  assessment: ["Oral and written tests", "Reading", "Writing", "Class work", "Quizzes"]
},

{
  grade: 4, period: "III", sem: "One", icon: "🌟",
  title: "Religious Personality",
  subtitle: "Jesus Christ as Redeemer and Healer; Prophet Mohammed, his calling and moral teachings",
  outcomes: [
    "Learners understand the fundamental teachings of the Christian faith through Jesus Christ, the apostles and other writers of the New Testament.",
    "Learners understand the teachings of Islam through Prophet Mohammed in the Holy Quran and other writers of the faith.",
    "Learners are able to distinguish between Christianity, Islam and other religions."
  ],
  objectives: [
    "Identify Jesus as the Healer",
    "List events of healings performed by Jesus",
    "Name the redemptive role of Jesus in the life of mankind",
    "Explain the calling of Muhammad",
    "State the moral teachings of Muhammad"
  ],
  note: "This topic studies both faiths side by side. Christians know Jesus Christ as Redeemer and Healer. Muslims know Prophet Mohammed as the Messenger through whom the Holy Quran was revealed, whose moral teaching stresses truthfulness, charity and mercy.",
  study:[
    /* ---- course text: Semester One, Period III — Religious Personality (pages 33-34) ---- */
    {k:"h3", t:"Religious Personalities"},
    {k:"p", t:"Learners understand the fundamental teachings of the **Christian faith** through Jesus Christ, the Apostles and other writers of the New Testament, and the teachings of **Islam** through Prophet Mohammed in the Holy Quran and other writers of the faith. Learners are able to distinguish between Christianity, Islam and other religions."},
    {k:"rule"},
    {k:"h3", t:"Jesus Christ as Redeemer and Healer"},
    {k:"p", t:"Christians believe Jesus Christ is the **Redeemer** — the one who saves mankind from sin — and the **Healer** — the one who healed the sick and still heals through prayer and faith."},
    {k:"bul", items:["**Events of healing performed by Jesus** — He healed the blind, the lame, the lepers and the sick (Matthew 4:23-25)", "**The redemptive role of Jesus** — He gave His life as a ransom for many (Matthew 20:28)", "**His teachings** — the Sermon on the Mount, the parables of the kingdom", "**His resurrection** — He rose from the dead on the third day (Matthew 28:1-13)"]},
    {k:"p", t:"Scripture references: the Holy Bible, Matthew 5-25, Matthew 27:1-6 and Matthew 28:1-13; the Apostles of Jesus Christ."},
    {k:"rule"},
    {k:"h3", t:"Prophet Mohammed — His Calling and Moral Teachings"},
    {k:"p", t:"Prophet Mohammed was **called by God** to be the Messenger of Allah. He was known for his **moral teachings** — honesty, mercy, justice, kindness to the poor, and the worship of one God. Muslims follow his example (the *Sunna*) as recorded in the Holy Quran and the Hadith."},
    {k:"bul", items:["**His calling** — the revelation of the Quran began in the cave of Hira", "**His moral teachings** — truthfulness, charity, prayer, fasting and good treatment of neighbours", "**His concern for morality** — he taught that God sees all we do"]},
    {k:"p", t:"The Holy Quran is the primary text, with supplementary religious literatures."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:["Read and discuss religious personalities.", "Research the healing and teaching ministry of Jesus.", "Explain Jesus as a Redeemer.", "Research the teaching and concern for morality of Prophet Mohammed s.a.s.", "Make a group work and class presentation on the teaching and morality of Prophet Mohammed.", "Write two or three paragraphs on the healing and teaching of Jesus, the Redeemer.", "Write two or three paragraphs on the teaching and morality of Prophet Mohammed s.a.s."]}
  ],
  focus: ["Jesus Christ as Redeemer and Healer", "Prophet Mohammed: his calling and moral teachings", "Distinguishing Christianity, Islam and other religions"],
  terms: [
    { t: "redeemer", d: "one who buys back or rescues people from bondage", x: "Christians call Jesus their Redeemer." },
    { t: "healer", d: "one who makes sick people well", x: "Jesus is described in the gospels as a healer." },
    { t: "redemption", d: "the act of rescuing or setting free", x: "Christian teaching centres on redemption." },
    { t: "calling", d: "God's choosing of a person for a special work", x: "Muslims speak of the calling of Prophet Mohammed." },
    { t: "revelation", d: "truth made known by God", x: "Muslims believe the Quran is revelation from God." },
    { t: "charity", d: "generous giving to those in need", x: "Charity is a duty in both faiths." },
    { t: "mercy", d: "kindness shown to one who could be punished", x: "He showed mercy and forgave the debt." },
    { t: "moral teaching", d: "instruction on how to live rightly", x: "Both prophets gave strong moral teaching." },
    { t: "religion", d: "an organised system of faith and worship", x: "Christianity and Islam are the two largest religions in Liberia." },
    { t: "compassion", d: "deep sympathy that leads to helping", x: "Compassion moved him to feed the hungry." }
  ],
  facts: [
    { q: "What does the word redeemer mean?", a: "One who buys back or rescues people from bondage." },
    { q: "Name two kinds of people the gospels say Jesus healed.", a: "Any two, for example: the blind, the lame, lepers and the deaf." },
    { q: "What is meant by the calling of Prophet Mohammed?", a: "God's choosing of him for the special work of carrying His message." },
    { q: "Name two moral teachings shared by both faiths.", a: "Truthfulness and charity to the poor; also mercy and respect for parents." },
    { q: "What is charity?", a: "Generous giving to those in need." },
    { q: "What is a religion?", a: "An organised system of faith and worship." },
    { q: "Name the two largest religions practised in Liberia.", a: "Christianity and Islam." },
    { q: "Why do we study the personalities of both faiths?", a: "So that pupils understand their own faith and respect the faith of their neighbours." }
  ],
  tf: [
    { s: "Christians call Jesus the Redeemer.", a: "true", why: "Redemption is central to Christian teaching about Jesus." },
    { s: "The gospels record that Jesus healed sick people.", a: "true", why: "Many healings are recorded in the four gospels." },
    { s: "Muslims believe the Holy Quran was revealed to Prophet Mohammed.", a: "true", why: "That is the Muslim teaching about the revelation of the Quran." },
    { s: "Charity is important in only one of the two faiths.", a: "false", why: "Both Christianity and Islam require charity to the poor." },
    { s: "Studying another faith means abandoning your own.", a: "false", why: "It means understanding your neighbour so that you can live together respectfully." },
    { s: "Compassion means ignoring people who suffer.", a: "false", why: "Compassion is sympathy that leads to helping those who suffer." }
  ],
  apply: [
    { q: "Jesus healed the sick. How can pupils show care for a sick classmate today?", a: "Visit him, take him his lessons, encourage him, help his family with small tasks and pray for him." },
    { q: "Both faiths teach charity. Plan one act of charity your class could do this term.", a: "For example: collect old but good clothes and school materials and give them to an orphanage or to needy pupils." },
    { q: "Why is it important to state another faith's teaching accurately?", a: "Because misrepresenting it is a form of lying and it causes offence and conflict." },
    { q: "A man cheats a poor trader and then gives loudly to charity. What do the moral teachings say?", a: "That giving does not cancel cheating; a person must be just first, and charity must come from honest gain." },
    { q: "Name one quality from each personality you would like to copy.", a: "For example: from Jesus, compassion for the sick and the poor; from Prophet Mohammed, truthfulness and honesty in trade." }
  ],
  sort: {
    title: "Matching each faith with its terms",
    groups: [
      { name: "Christian faith", items: ["Redeemer", "gospel", "New Testament", "church", "pastor"] },
      { name: "Muslim faith", items: ["Prophet Mohammed", "Holy Quran", "surah", "mosque", "imam"] },
      { name: "Taught by both", items: ["charity", "truthfulness", "mercy", "prayer"] }
    ]
  },
  compare: {
    title: "Two religious personalities",
    caption: "Complete the table accurately and respectfully.",
    items: [
      { p: "Jesus Christ (Christian teaching)", f: "Known as Redeemer, Healer and Saviour; taught love of God and neighbour and healed the sick." },
      { p: "Prophet Mohammed (Muslim teaching)", f: "The Messenger of God through whom the Holy Quran was revealed; taught truthfulness, charity, mercy and submission to God." },
      { p: "Moral teachings in common", f: "Speak the truth, care for orphans and the poor, show mercy, honour parents, avoid cheating." },
      { p: "How we study them", f: "Each pupil learns his own faith fully and learns of the other with accuracy and respect." }
    ]
  },
  casestudy: {
    title: "The clinic that two faiths built",
    text: "A town in Grand Bassa had no clinic. The nearest one was two hours away, and a woman had died on the road the year before. The church congregation began to raise money, but after some months they had only half of what was needed. The imam of the town's mosque heard of it and brought the matter to his Friday gathering. The Muslim community agreed to raise the rest. Men from both congregations cleared the land together. The women cooked for the workers in one kitchen. When the small clinic opened, there was no cross and no crescent on the wall — only a sign giving the opening hours. The pastor said at the opening, “The sick do not ask who paid for the bed.”",
    questions: [
      { q: "Why did the town need a clinic urgently?", a: "The nearest clinic was two hours away and a woman had died on the road the year before." },
      { q: "How did the two religious communities work together?", a: "The church raised half the money, the mosque raised the rest, men from both cleared the land and the women cooked together." },
      { q: "What did the pastor's words at the opening mean?", a: "That in serving human need, the faith of the giver matters less than the help given to the person who suffers." }
    ]
  },
  project: {
    title: "A study of one religious personality",
    brief: "Prepare a written study of one religious personality, according to your faith.",
    steps: [
      "Choose Jesus Christ or Prophet Mohammed, according to your own faith.",
      "Write three facts about his life.",
      "Write three of his moral teachings.",
      "Write two paragraphs on how those teachings apply in Liberia today.",
      "Exchange your work with a classmate of the other faith and write one thing you learned from his."
    ],
    criteria: ["three accurate facts", "three teachings correctly stated", "two well-written paragraphs of application", "respectful exchange completed"]
  },
  activities: [
    "Read and discuss religious personalities",
    "Research the healing and teaching ministry of Jesus",
    "Research the teaching and concern for morality of Prophet Mohammed",
    "Group work and class presentation",
    "Write two or three paragraphs on the personality studied"
  ],
  materials: ["Books", "Flyers", "Posters", "Markers", "Pens", "Pencils"],
  assessment: ["Oral and written tests", "Reading", "Research report", "Class presentation"]
},

{
  grade: 4, period: "IV", sem: "Two", icon: "🌙",
  title: "Death and Hereafter",
  subtitle: "God as the source of life; body and soul; what the Holy Books teach",
  outcomes: [
    "Learners comprehend that God is the only source of life.",
    "Learners recognise that everyone must die.",
    "Learners understand that the life one lives determines where the soul goes."
  ],
  objectives: [
    "Recognise God as the only source of life",
    "Differentiate between the body and the soul of a person",
    "Explain what the Holy Bible and the Holy Quran teach about death and the hereafter"
  ],
  note: "Both faiths teach that life comes from God, that every person will die, and that there is a judgment after death. This teaching is not meant to frighten pupils but to encourage them to live honest and merciful lives.",
  study:[
    /* ---- course text: Semester Two, Period IV — Death and Hereafter (pages 35-36) ---- */
    {k:"h3", t:"God Is the Source of All Life"},
    {k:"p", t:"Learners comprehend the fact that **God is the only source of life**. God gives life, and God alone controls death. The body and the soul both come from God, and to God they return."},
    {k:"bul", items:["**Body** — the earthly part of a person, which dies and returns to dust", "**Soul** — the part of a person that is not the body; it lives on after death"]},
    {k:"rule"},
    {k:"h3", t:"What Is Death?"},
    {k:"p", t:"**Death** is the separation of the soul from the body. Everyone must die — death is appointed for all people. Learners recognise that everyone must die and that God is the giver and taker of life."},
    {k:"rule"},
    {k:"h3", t:"What Happens to the Soul after Death?"},
    {k:"p", t:"After death the **soul continues to exist**. The Bible teaches that to be away from the body is to be at home with the Lord (2 Corinthians 5:8), and the Quran teaches that the soul passes to the next life to await the Day of Judgment. Study the topic of death and the afterlife according to the teachings of the Holy Quran."},
    {k:"rule"},
    {k:"h3", t:"Where Does the Soul Go after Death?"},
    {k:"p", t:"The life one lives determines where the soul goes — **hell or heaven**. Scripture references: the Holy Bible, Luke 16:10-31 (the rich man and Lazarus), John 5:24 (whoever hears my word and believes has crossed from death to life), 1 John 1:18, Revelation 2:10, Matthew 25:31-46 (the judgment) and Revelation 6:8."},
    {k:"p", t:"Read the Islamic view of death and the afterlife according to the teachings of the Holy Quran."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:["Read and discuss death, body and soul.", "Research and discuss who is the giver of life.", "Research who controls death.", "Discuss where the soul goes after death.", "Write two or three paragraphs on each of the following: death, soul, hell, heaven."]}
  ],
  focus: ["God is the source of all life: body and soul", "What is death", "What happens to the soul after death", "Where the soul goes after death"],
  terms: [
    { t: "source of life", d: "the one from whom all life comes", x: "Both faiths teach that God is the source of life." },
    { t: "body", d: "the physical part of a person", x: "The body returns to the earth at death." },
    { t: "soul", d: "the inner, spiritual part of a person", x: "Believers teach that the soul does not die." },
    { t: "hereafter", d: "life after death", x: "The Holy Quran speaks much about the hereafter." },
    { t: "judgment", d: "God's righteous decision about how a person lived", x: "Both Holy Books teach a day of judgment." },
    { t: "heaven", d: "the state or place of reward with God", x: "The faithful hope for heaven." },
    { t: "hell", d: "the state or place of punishment away from God", x: "The Holy Books warn of hell." },
    { t: "eternal life", d: "life with God that never ends", x: "Christians speak of eternal life through faith." },
    { t: "repent", d: "to turn away from wrongdoing and change", x: "He repented and made restitution." },
    { t: "accountable", d: "answerable for what one has done", x: "Each person is accountable for his own deeds." }
  ],
  facts: [
    { q: "Who is the source of all life?", a: "God is the only source of life." },
    { q: "What is the difference between the body and the soul?", a: "The body is the physical part that dies and is buried; the soul is the inner part that believers say lives on." },
    { q: "What is the hereafter?", a: "Life after death." },
    { q: "What do both Holy Books teach will follow death?", a: "A judgment by God according to how a person lived." },
    { q: "What does it mean to be accountable?", a: "To be answerable for what one has done." },
    { q: "What does it mean to repent?", a: "To turn away from wrongdoing and change one's ways." },
    { q: "Does wealth protect a person from death?", a: "No. Death comes to rich and poor alike." },
    { q: "How should belief in judgment affect daily behaviour?", a: "It should make a person honest, merciful and careful in how he treats others." }
  ],
  tf: [
    { s: "God is the source of all life.", a: "true", why: "Both faiths teach that life comes from God alone." },
    { s: "Only poor people die.", a: "false", why: "Death comes to every person, rich or poor." },
    { s: "Both Holy Books teach a judgment after death.", a: "true", why: "Judgment is taught in both the Bible and the Quran." },
    { s: "The body and the soul are exactly the same thing.", a: "false", why: "The body is physical; the soul is the inner, spiritual part." },
    { s: "Believing in judgment should make a person live carefully and kindly.", a: "true", why: "Accountability encourages honest and merciful living." },
    { s: "A person can never change after doing wrong.", a: "false", why: "Both faiths teach repentance and the possibility of change." }
  ],
  apply: [
    { q: "How does knowing that God is the source of life affect how we treat other people?", a: "It means every life is God's gift, so we must not harm, insult or waste any life, including our own." },
    { q: "A rich man says he can buy his way out of anything. What does this topic teach him?", a: "That he cannot buy his way out of death or judgment; wealth does not decide his standing before God." },
    { q: "Why is repentance important according to both faiths?", a: "Because it turns a person from wrong to right and, both faiths teach, opens the way to God's mercy." },
    { q: "Name one habit you will change because you know you are accountable for your actions.", a: "For example: I will stop copying in tests, or stop insulting my younger brother." },
    { q: "How can a young person prepare well for the hereafter without becoming fearful?", a: "By living honestly, praying, helping others and putting wrongs right — living well rather than living afraid." }
  ],
  sort: {
    title: "Belonging to the body and belonging to the soul",
    groups: [
      { name: "The body", items: ["needs food", "grows old", "is buried at death", "can be seen"] },
      { name: "The soul", items: ["cannot be seen", "faces judgment", "believers say it lives on"] }
    ]
  },
  compare: {
    title: "What the two Holy Books teach about death and the hereafter",
    caption: "Complete the table respectfully, according to each faith.",
    items: [
      { p: "Christian teaching", f: "The Holy Bible teaches resurrection, judgment, and eternal life with God for the faithful." },
      { p: "Muslim teaching", f: "The Holy Quran teaches the hereafter, the Day of Judgment, and reward or punishment according to deeds and God's mercy." },
      { p: "What both share", f: "That God gives life, that all must die, and that each person is accountable for how he lived." },
      { p: "The practical result", f: "Believers of both faiths are urged to live honestly, mercifully and without oppression of others." }
    ]
  },
  casestudy: {
    title: "The letter in the trunk",
    text: "When Old Man Flomo died in Sinoe, his children opened the metal trunk he had kept locked for years. They expected money. Instead they found a folded letter, a list, and a few worn receipts. The letter said, “To my children: when I am gone, first pay what I owe.” The list named four people and small amounts he had borrowed years before, including one man who had since forgotten the debt. The children were disappointed at first. But they walked to each house and paid. At the last house, an old woman wept and said, “I did not expect this. Your father was poor, but nobody in this town ever lost a dollar by trusting him.” The eldest son later said that the empty trunk had taught him more than money would have.",
    questions: [
      { q: "What did the children expect to find in the trunk, and what did they find?", a: "They expected money, but they found a letter, a list of debts and some receipts." },
      { q: "What did their father instruct them to do first?", a: "To pay everything he owed." },
      { q: "What does this story teach about how a person's life is judged after death?", a: "That what remains of a life is its honesty and how it treated others, not the wealth left behind." }
    ]
  },
  project: {
    title: "Living well — a personal charter",
    brief: "Write a personal charter of how you intend to live, knowing life is a gift from God.",
    steps: [
      "Write the heading MY CHARTER and today's date.",
      "Write three things you will do regularly for God, for example prayer and worship.",
      "Write three things you will do for other people, for example helping a neighbour.",
      "Write two wrongs you will stop doing.",
      "Seal it in an envelope, keep it, and review it at the end of the term."
    ],
    criteria: ["three duties to God", "three duties to others", "two honest resolutions to change", "reviewed at the end of term"]
  },
  activities: [
    "Read and discuss death, the body and the soul",
    "Research and discuss who is the giver of life",
    "Discuss what the Holy Books teach about the hereafter",
    "Write two or three paragraphs each on death, the soul, heaven and hell"
  ],
  materials: ["Books", "Flyers", "Posters", "Markers", "Pens", "Pencils"],
  assessment: ["Oral and written tests", "Reading", "Writing", "Class work", "Quizzes"]
},

{
  grade: 4, period: "V", sem: "Two", icon: "🤲",
  title: "Commitment",
  subtitle: "Man's commitment to God, to his fellow man and to himself",
  outcomes: [
    "Learners understand the importance of keeping commitment to God, to fellow man and to themselves.",
    "Learners demonstrate personal commitment to God by keeping and observing God's moral, ceremonial and civil laws, and by living a reconciled life.",
    "Learners will know God's commitment to man."
  ],
  objectives: [
    "Recognise man's duty to respond to God",
    "Identify man's need for reconciliation with God",
    "Demonstrate personal commitment to God by keeping and observing God's moral rules"
  ],
  note: "Commitment means faithfully carrying out what you have undertaken. This unit looks at three directions of commitment: upward to God, outward to other people, and inward to oneself.",
  study:[
    /* ---- course text: Semester Two, Period V — Commitment: Man's Commitment to God, to His Fellow Man and to Himself (pages 37-38) ---- */
    {k:"h3", t:"Define Commitment"},
    {k:"p", t:"**Commitment** is a promise or pledge to stand by someone or something. Learners understand the importance of keeping commitment to **God**, to **his fellow man** and to **himself**, and they demonstrate personal commitment to God by keeping and observing God's moral laws, ceremonial laws and civil laws."},
    {k:"rule"},
    {k:"h3", t:"God's Promise to Man"},
    {k:"p", t:"God is committed to man — He has made **promises** (covenants) to mankind and He keeps them. God's commitment is seen in His love, His care and His promise of salvation. Scripture references: the Holy Bible, 2 Corinthians 5:18-19, Hebrews 2:17, Daniel 6 and 10, Matthew 5:24 and Romans 5:10."},
    {k:"rule"},
    {k:"h3", t:"Man's Duty to God"},
    {k:"p", t:"Man has a **duty to respond to God**: to love Him, obey Him, worship Him and thank Him. Man's duty is also to **reconcile with God** — when we sin, we break our friendship with God, and we must repent and be restored to fellowship with Him."},
    {k:"rule"},
    {k:"h3", t:"Man's Reconciliation with God"},
    {k:"p", t:"**Reconciliation** means bringing a broken relationship back to peace. Man was separated from God by sin, and God made a way of reconciliation: *'God was reconciling the world to Himself in Christ'* (2 Corinthians 5:18-19)."},
    {k:"rule"},
    {k:"h3", t:"Man's Duty to Fellow Man"},
    {k:"p", t:"Commitment also reaches to **fellow man**: keeping promises to family, friends and neighbours, and living a reconciled life — first be reconciled to your brother, then bring your offering (Matthew 5:24)."},
    {k:"rule"},
    {k:"h3", t:"Expressions of Commitment"},
    {k:"bul", items:["**Repentance** — turning away from sin and back to God", "**Obedience** — keeping God's moral rules daily", "**Worship and prayer** — regular worship at church or mosque", "**Forgiveness** — forgiving others as God forgives us", "**Service** — helping the needy and serving the community"]},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:["Research the various steps to repentance and reconciliation for sin.", "Read the covenant between God and man.", "Give testimonies of how your parents treat you when you do wrong.", "Write a short story on God's gift to man and man's failure to respond to God."]}
  ],
  focus: ["Definition of commitment", "God's promise to man", "Man's duty to God", "Man's reconciliation with God", "Man's duty to his fellow man", "Expressions of commitment"],
  terms: [
    { t: "commitment", d: "faithfully carrying out what you have undertaken", x: "His commitment to study never wavered." },
    { t: "reconciliation", d: "restoring a broken relationship", x: "Reconciliation followed a sincere apology." },
    { t: "repentance", d: "turning away from wrong and changing direction", x: "Repentance is more than saying sorry." },
    { t: "covenant", d: "a solemn binding agreement", x: "The covenant bound both sides to their promises." },
    { t: "duty", d: "what a person is bound to do", x: "It is our duty to care for the elderly." },
    { t: "faithfulness", d: "being reliable and true over a long time", x: "Faithfulness is proved by years, not by words." },
    { t: "self-discipline", d: "controlling yourself to do what is right", x: "Self-discipline got him through the examination." },
    { t: "integrity", d: "being the same honest person in public and in private", x: "Integrity means not cheating even when alone." },
    { t: "sacrifice", d: "giving up something valuable for a greater good", x: "Her education came through her mother's sacrifice." },
    { t: "restitution", d: "putting right a wrong, often by returning what was taken", x: "He made restitution by repaying the money." }
  ],
  facts: [
    { q: "What is commitment?", a: "Faithfully carrying out what you have undertaken." },
    { q: "Name the three directions of commitment in this unit.", a: "Commitment to God, to fellow man, and to oneself." },
    { q: "What is reconciliation?", a: "Restoring a broken relationship." },
    { q: "What is repentance?", a: "Turning away from wrong and changing direction." },
    { q: "What is restitution?", a: "Putting right a wrong, often by returning what was taken." },
    { q: "What is integrity?", a: "Being the same honest person in public and in private." },
    { q: "Give one expression of commitment to God.", a: "Regular worship, obeying His commandments, or serving in the place of worship." },
    { q: "Give one commitment a pupil owes to himself.", a: "To study faithfully, to keep his body clean and healthy, and to avoid harmful company." }
  ],
  tf: [
    { s: "Commitment means faithfully doing what you undertook.", a: "true", why: "That is the definition used in this unit." },
    { s: "Saying sorry is exactly the same as repentance.", a: "false", why: "Repentance means actually turning from the wrong and changing, not only saying sorry." },
    { s: "Restitution may involve returning what was taken.", a: "true", why: "Putting the wrong right often requires giving back." },
    { s: "A person can have integrity while cheating when nobody sees.", a: "false", why: "Integrity means being honest in private as well as in public." },
    { s: "Commitment to oneself includes study and self-discipline.", a: "true", why: "One owes it to oneself to grow and to keep good habits." },
    { s: "Reconciliation is impossible once a relationship has broken.", a: "false", why: "Both faiths teach that reconciliation is possible through repentance and forgiveness." }
  ],
  apply: [
    { q: "You took money from your mother's purse and she has not noticed. What does true repentance require?", a: "Telling her the truth, returning the money or working to repay it, and not doing it again — not merely feeling sorry." },
    { q: "How can a pupil show commitment to himself?", a: "By studying regularly, keeping clean and healthy, choosing good friends, and refusing habits that would ruin his future." },
    { q: "Two friends have not spoken for a term. Describe the steps to reconciliation.", a: "One must take the first step; each listens to the other without interrupting; both admit their part; they apologise, forgive and agree how to behave in future." },
    { q: "Why is faithfulness over a long time harder than a single good act?", a: "Because a single act needs only a moment of goodwill, but faithfulness must survive tiredness, temptation and time." },
    { q: "Write one commitment you will keep to your family this term, and how you will prove it.", a: "For example: I will help with the evening chores every day, and my mother will confirm it at the end of the term." }
  ],
  sort: {
    title: "Three directions of commitment",
    groups: [
      { name: "Commitment to God", items: ["regular prayer", "worship", "obeying His commandments", "serving in the place of worship"] },
      { name: "Commitment to fellow man", items: ["keeping promises", "helping the needy", "honesty in trade", "forgiving"] },
      { name: "Commitment to oneself", items: ["study", "self-discipline", "keeping clean", "avoiding harmful company"] }
    ]
  },
  compare: {
    title: "The steps from wrongdoing to reconciliation",
    caption: "Complete the table showing what each step means.",
    items: [
      { p: "Recognition", f: "Admitting honestly to yourself that you have done wrong." },
      { p: "Repentance", f: "Turning away from the wrong and deciding to change." },
      { p: "Confession and apology", f: "Telling the truth to God and to the person wronged, and saying sorry sincerely." },
      { p: "Restitution", f: "Putting the matter right, returning or repaying what was taken." },
      { p: "Reconciliation", f: "The relationship is restored and both go forward in peace." }
    ]
  },
  casestudy: {
    title: "The son who came home",
    text: "A man had two sons. The younger asked for his share of the property, took it and travelled to a far country, where he wasted everything on foolish living. Then famine came, and he found himself feeding pigs and longing to eat their food. At last he came to his senses. He said, “My father's servants have bread enough, and I am dying of hunger. I will go back and say: Father, I have sinned. I am no longer worthy to be called your son. Make me one of your hired men.” So he set out. But while he was still a long way off, his father saw him and ran to meet him, threw his arms around him and kissed him. The son began his speech, but the father called for the best robe and prepared a feast, saying, “This my son was lost, and is found.”",
    questions: [
      { q: "What did the younger son do with his share of the property?", a: "He travelled to a far country and wasted it all on foolish living." },
      { q: "What did the son plan to say to his father?", a: "That he had sinned, was no longer worthy to be called a son, and should be made a hired servant." },
      { q: "What does the father's reaction teach about reconciliation?", a: "That genuine repentance is met with generous forgiveness, and the relationship is fully restored, not merely tolerated." }
    ]
  },
  project: {
    title: "A commitment journal",
    brief: "Keep a journal for two weeks recording your commitments in all three directions.",
    steps: [
      "Rule your journal into three columns: to God, to others, to myself.",
      "Each evening write one thing you did in each column.",
      "If you failed in a column, write it honestly and what you will do differently.",
      "At the end of two weeks, count how many days you kept each commitment.",
      "Write a short conclusion on which direction was hardest and why."
    ],
    criteria: ["all three columns used daily", "honest recording of failures", "totals counted", "thoughtful conclusion written"]
  },
  activities: [
    "Research the steps to repentance and reconciliation",
    "Read the covenant between God and man",
    "Students give testimonies of how their parents treat them when they do wrong",
    "Write a short story on God's gift to man and man's failure to respond"
  ],
  materials: ["Books", "Flyers", "Posters", "Markers", "Pens", "Pencils"],
  assessment: ["Oral and written tests", "Reading", "Writing", "Class work", "Assignments"]
},

{
  grade: 4, period: "VI", sem: "Two", icon: "🕯️",
  title: "Salvation",
  subtitle: "Salvation, repentance and sanctification",
  outcomes: [
    "Learners are able to analyse how man fits into God's plan of salvation.",
    "Learners know the meanings of salvation, repentance and living a sanctified life."
  ],
  objectives: [
    "Define salvation",
    "Explain repentance",
    "Discuss sanctification"
  ],
  note: "Salvation means being rescued and made safe. In Christian teaching, salvation comes through Jesus Christ, and is followed by repentance and a sanctified, holy life. Muslim pupils will relate these ideas to God's mercy, repentance (tawbah) and righteous living, according to their faith.",
  study:[
    /* ---- course text: Semester Two, Period VI — Salvation (page 39) ---- */
    {k:"h3", t:"The Meaning of Salvation"},
    {k:"p", t:"**Salvation** is being saved — rescued from sin and its punishment, and brought into a new life with God. Learners are able to analyze how man fits into **God's salvation plan**, and they know the meanings of salvation, repentance and living a sanctified life."},
    {k:"p", t:"Scripture references: the Holy Bible, John 3:16 — *'God so loved the world that He gave His one and only Son, that whoever believes in Him shall not perish but have eternal life'*; Luke 19:9 — salvation came to Zacchaeus' house; Acts 4:12 — there is no other name by which we must be saved; Romans 1:16; Romans 11:11; 2 Timothy 2:10."},
    {k:"rule"},
    {k:"h3", t:"Repentance"},
    {k:"p", t:"**Repentance** means being truly sorry for sin, turning away from it, and turning to God. Repentance is the first step of salvation — it changes the heart and the direction of life."},
    {k:"bul", items:["**Admit** the wrong you have done", "**Be sorry** for it from the heart", "**Turn away** from the sin", "**Turn to God** and ask His forgiveness"]},
    {k:"rule"},
    {k:"h3", t:"Sanctification"},
    {k:"p", t:"**Sanctification** is being made holy — set apart for God and growing more like Him. After salvation and repentance, the believer lives a **sanctified life**: a life of obedience, purity, love and service that pleases God."},
    {k:"p", t:"Study the teaching of salvation in the Holy Quran according to faith, and read supplementary religious literatures."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:["Read and discuss the salvation of man through Jesus Christ.", "Define and explain the meaning of repentance.", "Dramatize repentance and sanctification.", "Write an essay on repentance, salvation and sanctification."]}
  ],
  focus: ["The meaning of salvation", "Repentance", "Sanctification"],
  terms: [
    { t: "salvation", d: "being rescued from sin and made safe with God", x: "Christian teaching centres on salvation." },
    { t: "repentance", d: "turning away from sin and turning to God", x: "Repentance is the first step of change." },
    { t: "sanctification", d: "being made holy and set apart for God", x: "Sanctification continues throughout life." },
    { t: "holy", d: "pure and set apart for God", x: "Believers are called to live a holy life." },
    { t: "grace", d: "God's undeserved kindness towards people", x: "Christians teach that salvation is by grace." },
    { t: "mercy", d: "God's compassion, withholding deserved punishment", x: "Both faiths appeal to the mercy of God." },
    { t: "sin", d: "any act that breaks God's law", x: "Cheating and lying are sins." },
    { t: "faith", d: "trust in God and in His promises", x: "He faced the loss with steady faith." },
    { t: "conversion", d: "a turning of the whole life towards God", x: "His conversion changed how he treated his workers." },
    { t: "righteous", d: "living rightly before God and people", x: "A righteous person deals fairly with everyone." }
  ],
  facts: [
    { q: "What is salvation?", a: "Being rescued from sin and made safe with God." },
    { q: "What is repentance?", a: "Turning away from sin and turning to God." },
    { q: "What is sanctification?", a: "Being made holy and set apart for God." },
    { q: "What is grace?", a: "God's undeserved kindness towards people." },
    { q: "Through whom do Christians teach that salvation comes?", a: "Through Jesus Christ." },
    { q: "What is sin?", a: "Any act that breaks God's law." },
    { q: "Name two signs that a person has truly repented.", a: "He stops the wrong action and he puts right what he can." },
    { q: "What does it mean to be righteous?", a: "To live rightly before God and to deal fairly with people." }
  ],
  tf: [
    { s: "Salvation means being rescued and made safe with God.", a: "true", why: "That is the meaning used in this topic." },
    { s: "Repentance is only a feeling of guilt.", a: "false", why: "Repentance is a turning away from wrong and a change of life, not merely a feeling." },
    { s: "Sanctification means being made holy and set apart for God.", a: "true", why: "That is the definition of sanctification." },
    { s: "A saved person has no further duty to live rightly.", a: "false", why: "Salvation is followed by a changed, righteous life." },
    { s: "Both faiths appeal to the mercy of God.", a: "true", why: "Mercy is central in both Christian and Muslim teaching." },
    { s: "Doing one good deed cancels a life of cheating.", a: "false", why: "Genuine change requires repentance, restitution and a new way of living." }
  ],
  apply: [
    { q: "How is repentance different from simply being caught?", a: "Being caught brings fear of punishment; repentance is a genuine change of heart that would happen even if nobody had found out." },
    { q: "A boy is saved from drowning. Use this to explain the meaning of salvation.", a: "He could not save himself and someone else pulled him out — salvation is rescue by another when a person cannot rescue himself." },
    { q: "What practical changes should follow in the life of someone who says he has repented?", a: "He stops the wrong, returns what he took, avoids the company that led him there, and begins doing good instead." },
    { q: "How can a pupil live a holy life at school?", a: "By being truthful in tests, keeping his language clean, respecting girls and teachers, and refusing to join in bullying." },
    { q: "Why do believers say salvation is by God's grace and not earned?", a: "Because no one can be good enough to deserve it; it is God's free and undeserved kindness." }
  ],
  sort: {
    title: "Steps and signs in the way of salvation",
    groups: [
      { name: "Steps taught in this unit", items: ["recognising sin", "repentance", "faith", "sanctification"] },
      { name: "Signs of true change", items: ["stopping the wrong act", "making restitution", "new company", "doing good"] }
    ]
  },
  compare: {
    title: "Salvation, repentance and sanctification",
    caption: "Complete the table with the meaning and one example of each.",
    items: [
      { p: "Salvation", f: "Being rescued from sin and made safe with God; like a drowning person pulled from the water." },
      { p: "Repentance", f: "Turning from wrongdoing to God; like a traveller realising he is on the wrong road and turning back." },
      { p: "Sanctification", f: "Being made holy day by day; like a field being cleared of weeds season after season." },
      { p: "The result", f: "A righteous life: honest dealing, mercy to others and faithful worship." }
    ]
  },
  casestudy: {
    title: "The storekeeper's ledger",
    text: "For eleven years Mr Doe had kept two sets of figures in his shop in Paynesville: the real one, and the one he showed. He cheated on measures and short-changed customers who could not count quickly. Then his own son fell ill, and in the long nights at the clinic Mr Doe found himself unable to pray. When the boy recovered, Mr Doe did something his neighbours still discuss. He closed the shop for two days, went through eleven years of records, and wrote a list of every regular customer he had cheated with the amount he estimated he owed. Then he reopened and, as each one came, he told them plainly and paid them back. Some laughed at him. Some cried. One woman refused the money and said the truth was enough. His trade dropped for a season, then grew larger than before.",
    questions: [
      { q: "What wrong had Mr Doe been doing for eleven years?", a: "He kept false records, cheated on measures and short-changed customers." },
      { q: "What three actions showed that his repentance was genuine?", a: "He stopped the practice, worked out what he owed each customer, and repaid them openly." },
      { q: "Why is repaying the customers more convincing than simply apologising?", a: "Because restitution costs him something and puts the wrong right, proving the change is real and not only words." }
    ]
  },
  project: {
    title: "An essay on change",
    brief: "Write a structured essay on salvation, repentance and sanctification.",
    steps: [
      "Paragraph 1: define salvation in your own words.",
      "Paragraph 2: explain repentance and give one clear example.",
      "Paragraph 3: explain sanctification and how it continues through life.",
      "Paragraph 4: describe how these three ideas would change life in your community.",
      "Read your essay to your group and accept one suggestion for improvement."
    ],
    criteria: ["all three terms correctly defined", "clear examples given", "four full paragraphs", "improvement accepted and made"]
  },
  activities: [
    "Read and discuss the salvation of man",
    "Define and explain the meaning of repentance",
    "Dramatise repentance and sanctification",
    "Write an essay on repentance, salvation and sanctification"
  ],
  materials: ["Books", "Flyers", "Posters", "Markers", "Pens", "Pencils"],
  assessment: ["Oral and written tests", "Essay writing", "Class work", "Quizzes", "Assignments"]
},

/* ============================ GRADE 5 ============================ */
{
  grade: 5, period: "I", sem: "One", icon: "🌱",
  title: "Creation",
  subtitle: "Man as God's steward, the development of creation and the fall of man",
  outcomes: [
    "Learners will describe the story of God's creation and the trust by which man was given dominion over the works of God's hands.",
    "Learners will describe the fall of man and man as a new creation."
  ],
  objectives: [
    "Explain about creation in general",
    "Explain the development of creation",
    "Explain about the fall of man"
  ],
  note: "The Holy Books teach that God placed man over creation as a steward or viceroy — a caretaker acting on behalf of the owner. The fall of man describes how disobedience spoiled that relationship, and both faiths teach that God provides a way back.",
  study:[
    /* ---- course text: Semester One, Period I — Creation (page 40) ---- */
    {k:"h3", t:"Creation in General"},
    {k:"p", t:"Learners describe the **Fall story of God's creation** and the trust that man would be given dominion over the works of the hands of God. God created the heavens and the earth, and He gave man a place of honour in creation. Scripture references: the Holy Bible, Genesis 1, Genesis 1:28, Psalm 8, Psalm 100:3 and 2 Corinthians 5:17; the Holy Quran 2:30 and 16:10-16."},
    {k:"rule"},
    {k:"h3", t:"Man's Responsibility to God"},
    {k:"p", t:"Man has a **responsibility to God** — to know Him, worship Him and obey Him. God blessed man and told him to be fruitful and fill the earth (Genesis 1:28)."},
    {k:"rule"},
    {k:"h3", t:"Man as God's Steward and Viceroy"},
    {k:"p", t:"Man is God's **steward** — the caretaker of God's creation — and His **viceroy** — the one placed over the works of God's hands. Psalm 8 asks: *'What is man that You are mindful of him?'* and answers that God crowned man with glory and honour and put all things under his feet. In the Quran, God made man His **vicegerent (khalifah)** on the earth (Quran 2:30)."},
    {k:"rule"},
    {k:"h3", t:"The Development of Creation"},
    {k:"p", t:"Learners explain the **development of creation** — how the world God made grows and develops: the growth of plants, animals and people, and the use God gave man to name the animals, work the ground and develop the earth (Genesis 2:15; Psalm 100:3). Scripture reference: the Holy Bible, Matthew 25:14-30 — the parable of the talents, where the master gives his servants gifts and expects them to use and increase them."},
    {k:"rule"},
    {k:"h3", t:"The Fall of Man"},
    {k:"p", t:"**The Fall of man** is the story of how the first man and woman disobeyed God and brought sin into the world. Because of the Fall, man lost his perfect friendship with God, and death and suffering entered creation. But God did not abandon man — He promised a Redeemer."},
    {k:"p", t:"Scripture references: the Holy Bible, Genesis 3; 2 Corinthians 5:17 — *'If anyone is in Christ, the new creation has come'* — man becomes a **new creation through Jesus Christ**. Study the story of Prophet Adam and the story of creation according to Islam."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:["Conduct research and have a class discussion on the fall of man.", "Write an essay on creation and on man's responsibility to God.", "Write an essay on the development of creation."]}
  ],
  focus: ["Creation", "Man's responsibility to God", "Man as God's steward or viceroy", "The development of creation", "The fall of man"],
  terms: [
    { t: "dominion", d: "authority to rule over and care for something", x: "Man was given dominion over the earth." },
    { t: "steward", d: "one who manages property on behalf of its owner", x: "A steward must give account of his management." },
    { t: "viceroy", d: "one who governs on behalf of a higher authority", x: "The Quran describes man as God's viceroy on earth." },
    { t: "the fall", d: "the account of man's first disobedience to God", x: "The fall spoiled the harmony of creation." },
    { t: "disobedience", d: "refusing to do what God or lawful authority commands", x: "Disobedience brought consequences." },
    { t: "consequence", d: "what follows as a result of an action", x: "Every choice carries a consequence." },
    { t: "responsibility", d: "a duty a person is answerable for", x: "Caring for the earth is a shared responsibility." },
    { t: "development", d: "growth and unfolding over time", x: "The development of creation continues today." },
    { t: "new creation", d: "a person renewed and changed by God", x: "Christians speak of the believer as a new creation." },
    { t: "accountability", d: "having to answer for how you used what you were given", x: "Stewardship always includes accountability." }
  ],
  facts: [
    { q: "What does dominion mean?", a: "Authority to rule over and care for something." },
    { q: "What is a steward?", a: "One who manages property on behalf of its owner." },
    { q: "How does the Holy Quran describe man's role on the earth?", a: "As God's viceroy or caretaker on the earth." },
    { q: "What is meant by the fall of man?", a: "The account of man's first disobedience to God, which spoiled his relationship with God." },
    { q: "Name one consequence of the fall taught by the Holy Books.", a: "Separation from God, hardship in work, and the entry of death and suffering." },
    { q: "What is a consequence?", a: "What follows as a result of an action." },
    { q: "What does it mean that a steward is accountable?", a: "He must answer to the owner for how he managed what was entrusted to him." },
    { q: "How do both faiths say man can return to God?", a: "Through repentance and God's mercy." }
  ],
  tf: [
    { s: "Man was given dominion over the earth as a steward.", a: "true", why: "Both Holy Books describe man as caretaker under God." },
    { s: "A steward owns everything he manages.", a: "false", why: "A steward manages what belongs to another and must give account." },
    { s: "The fall of man refers to man's first disobedience.", a: "true", why: "That is the meaning of the fall in this topic." },
    { s: "Choices have no consequences.", a: "false", why: "Every choice brings results, good or bad." },
    { s: "Both faiths teach that God offers a way back after wrongdoing.", a: "true", why: "Both teach repentance and divine mercy." },
    { s: "Having dominion means we may destroy the environment freely.", a: "false", why: "Dominion is stewardship, which requires care and accountability." }
  ],
  apply: [
    { q: "A logging company clears a whole forest for quick profit. Judge this using the idea of stewardship.", a: "It fails stewardship: a steward must preserve what is entrusted for the owner and for those who come after, not strip it for immediate gain." },
    { q: "Give an example from your own life of a small disobedience with a large consequence.", a: "For example: not studying for one week led to failing a test, which lowered my whole term grade." },
    { q: "How can a class practise dominion responsibly over its own classroom?", a: "By keeping it clean, repairing what breaks, not writing on desks and handing it over in good condition to the next class." },
    { q: "Why does the idea of accountability change how a person uses power?", a: "Because a person who knows he must give account uses power carefully and for the good of others, not for himself alone." },
    { q: "What does it mean to be a new creation, in practical terms?", a: "That a person's habits, speech and dealings actually change — he becomes honest, kind and reliable where he was not." }
  ],
  sort: {
    title: "Good stewardship and poor stewardship",
    groups: [
      { name: "Good stewardship", items: ["replanting after harvest", "repairing what breaks", "using water carefully", "training the young"] },
      { name: "Poor stewardship", items: ["clearing all the forest", "wasting food", "polluting the creek", "neglecting the tools"] }
    ]
  },
  compare: {
    title: "Man's place in creation",
    caption: "Complete the table on man's role and responsibility.",
    items: [
      { p: "Man's position", f: "Placed by God over creation as steward or viceroy, not as absolute owner." },
      { p: "Man's responsibility", f: "To care for the earth, use it wisely and hand it on in good condition." },
      { p: "The fall", f: "Man's disobedience spoiled his relationship with God and brought hardship and death." },
      { p: "The way back", f: "Repentance and God's mercy; believers speak of becoming a new creation." }
    ]
  },
  casestudy: {
    title: "The two farmers of the same hillside",
    text: "Two brothers inherited land on the same hillside outside Gbarnga. The elder cleared everything, burned the stumps and planted every inch. In the first year his harvest was the talk of the district. The younger left a band of trees along the top and along the creek, planted across the slope rather than down it, and rotated his crops. His first harvest was smaller, and people said he was lazy. Then came two heavy rainy seasons. The elder brother's topsoil washed down the hill in brown rivers and settled in the creek, and by the fourth year his land yielded almost nothing. The younger brother's fields held. In the fifth year the elder came to ask his brother how to begin again, and together they started planting trees back along the ridge.",
    questions: [
      { q: "How did each brother treat the hillside?", a: "The elder cleared everything and planted every inch; the younger kept trees on the ridge and along the creek and planted across the slope." },
      { q: "What happened after two heavy rainy seasons?", a: "The elder brother's topsoil washed away and his land became unproductive, while the younger brother's fields held." },
      { q: "Explain the difference between the two brothers using the idea of stewardship.", a: "The elder used the land as an owner seeking quick profit; the younger acted as a steward, preserving the land's productivity for the future." }
    ]
  },
  project: {
    title: "A stewardship audit",
    brief: "Carry out an audit of how well something in your care is being managed.",
    steps: [
      "Choose one thing entrusted to you or your class: a garden, a classroom, a set of books or a water point.",
      "List its condition today under three headings: good, damaged, missing.",
      "Identify two causes of the damage or loss.",
      "Write three actions to improve the stewardship of it.",
      "Carry out at least one action and report the result to the class."
    ],
    criteria: ["honest condition report", "two causes identified", "three practical actions", "at least one action carried out"]
  },
  activities: [
    "Conduct research and hold a class discussion on the fall of man",
    "Write an essay on creation and man's responsibility to God",
    "Write an essay on the development of creation",
    "Group discussion on stewardship of the environment"
  ],
  materials: ["Books", "Flyers", "Posters", "Markers", "Pens", "Pencils"],
  assessment: ["Oral and written tests", "Essay writing", "Class work", "Quizzes", "Assignments"]
},

{
  grade: 5, period: "II", sem: "One", icon: "🔗",
  title: "Commitment",
  subtitle: "Our duty to respond to God, failure, and reconciliation",
  outcomes: [
    "Learners will understand God's covenant with man, man's commitment to God, and man obeying and living by God's commandments."
  ],
  objectives: [
    "Demonstrate personal commitment to God through service and identify our duties to God",
    "State areas of man's failure to respond to God",
    "Explain reconciliation with God"
  ],
  note: "A covenant is a binding agreement. This unit examines what God has undertaken towards man, what man owes in return, where man commonly fails, and how reconciliation is restored.",
  study:[
    /* ---- course text: Semester One, Period II — Commitment: Man's Commitment to God, to His Fellow Man and to Himself (page 41) ---- */
    {k:"h3", t:"Commitment"},
    {k:"p", t:"Learners understand **God's covenant with man**, **man's commitment to God**, and **man obeying and living by God's commandments**. A covenant is a solemn promise — God made covenants with man and keeps them, and man is called to respond with his own commitment."},
    {k:"rule"},
    {k:"h3", t:"Our Duty to Respond to God"},
    {k:"p", t:"We have a **duty to respond to God** — to love Him, obey Him, worship Him and serve Him. Commitment to God is shown through **service**: serving God with our time, talents and strength, and serving the church and the mosque."},
    {k:"rule"},
    {k:"h3", t:"Man's Failure to Respond to God"},
    {k:"p", t:"Sometimes man **fails to respond to God** — he disobeys, forgets God, and turns to his own ways. The parable of the **prodigal son** (Luke 15:11-31) tells of a son who left his father and wasted everything, and of the father's love when he returned."},
    {k:"rule"},
    {k:"h3", t:"Man's Reconciliation with God through Jesus Christ"},
    {k:"p", t:"When man fails, God provides the way back: **reconciliation through Jesus Christ**. The prodigal son was received back with joy; in the same way, the Lord Jesus Christ is the way by which man is reconciled to God. Scripture reference: the Holy Bible, Luke 15:11-31."},
    {k:"rule"},
    {k:"h3", t:"Personal Commitment to God"},
    {k:"p", t:"**Personal commitment to God** means deciding for yourself to follow God: accepting the Lord Jesus Christ as Lord and Saviour, keeping the commandments, praying, and doing our **duties to God and to the church or mosque**."},
    {k:"rule"},
    {k:"h3", t:"Expressions of Commitment"},
    {k:"bul", items:["**Accepting the Lord Jesus Christ as Lord and Saviour**", "**Restoring relationships** — forgiving friends and classmates, and being forgiven", "**Regular worship** — at church or mosque and in the home", "**Daily obedience** — living by God's commandments", "**Service to others** — acts of kindness and generosity"]},
    {k:"p", t:"Study scholarly articles on commitment from an Islamic perspective, including the dignity of man, according to faith."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:["Dramatize the parable of the prodigal son as a means of reconciliation.", "Carry out acts of restoring relationship with friends, each other and classmates in forgiveness.", "Explain our duties as personal commitment to God and to the church or mosque."]}
  ],
  focus: ["Commitment", "Our duty to respond to God", "Man's failure to respond to God", "Man's reconciliation with God", "Personal commitment to God", "Expressions of commitment"],
  terms: [
    { t: "covenant", d: "a solemn binding agreement between two parties", x: "The covenant set out duties on both sides." },
    { t: "commitment", d: "faithfully carrying out an undertaking over time", x: "Commitment is proved by consistency." },
    { t: "service", d: "work done for God or for others without seeking reward", x: "He gave years of service to the congregation." },
    { t: "neglect", d: "failing to give due care or attention", x: "Neglect of prayer weakened his faith." },
    { t: "hypocrisy", d: "pretending to be what one is not", x: "Hypocrisy is condemned in both Holy Books." },
    { t: "sincerity", d: "being genuine, without pretence", x: "God looks at the sincerity of the heart." },
    { t: "reconciliation", d: "the restoring of a broken relationship", x: "Reconciliation follows honest repentance." },
    { t: "devotion", d: "loving loyalty shown to God", x: "Her devotion showed in quiet daily prayer." },
    { t: "consistency", d: "doing the right thing again and again over time", x: "Consistency matters more than a single grand gesture." },
    { t: "witness", d: "showing your faith by how you live", x: "His honest trade was a witness to his faith." }
  ],
  facts: [
    { q: "What is a covenant?", a: "A solemn binding agreement between two parties." },
    { q: "Name two duties man owes to God.", a: "Worship and obedience; also thanksgiving and service to others." },
    { q: "Name two ways in which people fail to respond to God.", a: "Neglect of worship and prayer, and hypocrisy — pretending outwardly while living wrongly." },
    { q: "What is hypocrisy?", a: "Pretending to be what one is not." },
    { q: "What is reconciliation?", a: "The restoring of a broken relationship." },
    { q: "How is commitment proved?", a: "By consistency over time, not by a single act." },
    { q: "What is meant by witness?", a: "Showing your faith by the way you live." },
    { q: "Give one expression of personal commitment to God.", a: "Regular prayer, faithful worship, honest dealing, and service to the needy." }
  ],
  tf: [
    { s: "A covenant places duties on both parties.", a: "true", why: "That is what makes it a binding agreement." },
    { s: "Hypocrisy means being genuine and sincere.", a: "false", why: "Hypocrisy is pretending to be what one is not." },
    { s: "Commitment is proved by consistency over time.", a: "true", why: "A single act is not commitment; faithfulness over time is." },
    { s: "How a believer trades in the market has nothing to do with his faith.", a: "false", why: "Honest dealing is part of the witness of faith." },
    { s: "Reconciliation with God is possible through repentance.", a: "true", why: "Both faiths teach repentance and divine mercy." },
    { s: "Loud public prayer always proves deep commitment.", a: "false", why: "Both Holy Books warn against display; sincerity of heart is what matters." }
  ],
  apply: [
    { q: "A trader prays loudly every morning but cheats his customers. What does this unit call this?", a: "Hypocrisy — outward religion without inward obedience. True commitment shows in honest dealing." },
    { q: "Name three areas where young people commonly fail in their duty to God, and give a remedy for each.", a: "Neglect of prayer — set a fixed time; dishonesty in school work — refuse to copy; disrespect to parents — practise obedient speech." },
    { q: "How can a pupil serve God practically at school?", a: "By helping weaker pupils, keeping the compound clean, telling the truth and refusing to join in bullying." },
    { q: "Why is quiet consistency better than one grand religious gesture?", a: "Because character is built by repeated action, and God sees what is done when nobody is watching." },
    { q: "Write out one covenant you will make with God for this term.", a: "For example: I will pray each morning, tell no lies to my teacher and help one person each day." }
  ],
  sort: {
    title: "Faithful response and failure to respond",
    groups: [
      { name: "Faithful response", items: ["regular prayer", "honest dealing", "serving the needy", "obeying parents", "keeping your word"] },
      { name: "Failure to respond", items: ["neglect of worship", "hypocrisy", "cheating in trade", "breaking promises"] }
    ]
  },
  compare: {
    title: "The covenant: two sides",
    caption: "Complete the table setting out what each side undertakes.",
    items: [
      { p: "God's side of the covenant", f: "To give life, provide, guide, forgive the repentant and never abandon those who trust Him." },
      { p: "Man's side of the covenant", f: "To worship, obey the commandments, deal justly with others and live sincerely." },
      { p: "Where man fails", f: "Neglect, hypocrisy, dishonesty and broken promises." },
      { p: "How the breach is healed", f: "Honest repentance, restitution where possible, and God's mercy — leading to reconciliation." }
    ]
  },
  casestudy: {
    title: "The choirmaster's quiet term",
    text: "Brother Wleh had led the choir at his church for nine years and everyone knew his voice. One year the pastor asked him instead to take charge of the benches, the water and the cleaning for a term, and gave the choir to a younger man. Some members expected Brother Wleh to leave. Instead, for that whole term he arrived before everyone, swept, arranged the benches, filled the water container and quietly repaired two windows at his own cost. He sang from the back row like any other member. At the end of the term the young choirmaster stood and said, “I learned more about faith from watching him carry benches than from any sermon this year.”",
    questions: [
      { q: "What change did the pastor make to Brother Wleh's role?", a: "He moved him from leading the choir to caring for the benches, water and cleaning." },
      { q: "How did Brother Wleh respond?", a: "He served faithfully and quietly, arriving early, cleaning, repairing windows and singing from the back row." },
      { q: "What does this teach about the difference between position and commitment?", a: "That true commitment is to God and the community, not to a title; it continues whether or not one is in a visible position." }
    ]
  },
  project: {
    title: "A term of service",
    brief: "Choose one act of service and carry it out faithfully for the whole term.",
    steps: [
      "Choose a service nobody has asked you to do, for example cleaning a neglected corner or helping a struggling classmate weekly.",
      "Write down what you will do and how often.",
      "Keep a simple record each week, marking whether you did it.",
      "Do not announce it to the class while you are doing it.",
      "At the end of the term, report honestly how many weeks you kept it and what you learned about consistency."
    ],
    criteria: ["a genuine unasked service chosen", "weekly record kept", "carried out without seeking praise", "honest final report"]
  },
  activities: [
    "Dramatise the parable of the son who returned, as a means of reconciliation",
    "Acts of restoring relationships with friends and classmates through forgiveness",
    "Explain our duties as personal commitment to God and to the place of worship",
    "Class discussion on sincerity and hypocrisy"
  ],
  materials: ["Books", "Flyers", "Posters", "Markers", "Pens", "Pencils"],
  assessment: ["Oral and written tests", "Reading", "Writing", "Class work", "Quizzes"]
},

{
  grade: 5, period: "III", sem: "One", icon: "🧭",
  title: "Commandments — To Walk in God's Instructions",
  subtitle: "The laws of God and the laws of man; freedom, choice and happiness",
  outcomes: [
    "Learners are able to make their own informed choice of religion because they are able to distinguish between God's laws and man's laws."
  ],
  objectives: [
    "Name and explain the laws of God",
    "Identify the religion of your choice",
    "Explain how obedience to God's law leads to freedom and happiness"
  ],
  note: "The Constitution of Liberia guarantees freedom of religion. This unit teaches pupils to know God's commandments, to distinguish them from human laws, and to understand that real freedom is not doing whatever one likes but choosing what is right.",
  study:[
    /* ---- course text: Semester One, Period III — Commandments: To Walk in God's Instructions (pages 42-43) ---- */
    {k:"h3", t:"The Ten Commandments of God"},
    {k:"p", t:"The **Ten Commandments** (Exodus 20:3-17) are the laws God gave through Prophet Moses. Learners are able to name and explain the **laws of God**, and to distinguish between **God's laws and man's laws**. Scripture references: the Holy Bible, Exodus 20:3-17 and Ephesians 5; the teaching of the Ten Commandments in Islam is also studied according to faith."},
    {k:"bul", items:["**No other gods** — worship the Lord God alone", "**No idols** — do not make or bow down to images", "**Do not misuse the name of God**", "**Keep the Sabbath holy** — set apart a day for God", "**Honour your father and mother**", "**Do not murder**", "**Do not commit adultery**", "**Do not steal**", "**Do not lie**", "**Do not covet** — do not long for what belongs to others"]},
    {k:"rule"},
    {k:"h3", t:"Obey the Laws"},
    {k:"p", t:"Learners understand that the Ten Commandments **result in positive choices** and demonstrate a positive approach to the teaching of the Ten Commandments. Obeying God's laws keeps us safe, honest and happy; obeying man's good laws keeps the community peaceful and fair."},
    {k:"p", t:"Learners are able to make their own **choice of religion** because they are able to distinguish between God's laws and man's laws, and they identify the religion of their choice."},
    {k:"rule"},
    {k:"h3", t:"Freedom and Happiness"},
    {k:"p", t:"God's laws do not take away our freedom — they **protect** it. Living within God's instructions brings **freedom and happiness**: the freedom of a clear conscience, and the happiness of a life that pleases God. Illustrate the **love of God**, **love for fellow man** and **faithfulness to God** through your actions."},
    {k:"rule"},
    {k:"h3", t:"The Historical Background of the Commandments"},
    {k:"p", t:"Learners research and discuss the **historical background of God giving man the Ten Commandments**: after He freed His people from slavery in Egypt, God met them at Mount Sinai and gave them the commandments as the terms of His covenant with them. Supplementary text: 101 Bible Stories."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:["Research and discuss the historical background of God giving to man the Ten Commandments.", "Understand and demonstrate how the Ten Commandments result in positive choices.", "Demonstrate a positive approach to the teaching of the Ten Commandments.", "Illustrate the love of God, love for fellow man and faithfulness to God through your actions."]}
  ],
  focus: ["The Ten Commandments of God", "Obeying the laws", "Freedom and happiness", "Freedom of religion"],
  terms: [
    { t: "instruction", d: "a direction given to be followed", x: "The Holy Books contain God's instructions for living." },
    { t: "freedom of religion", d: "the right to practise the faith of one's choice", x: "The Constitution of Liberia guarantees freedom of religion." },
    { t: "choice", d: "the act of deciding between options", x: "Faith must be a free choice, not a forced one." },
    { t: "conviction", d: "a strong belief a person holds and lives by", x: "He refused the bribe out of conviction." },
    { t: "liberty", d: "freedom to act within what is right and lawful", x: "Liberty is not the same as lawlessness." },
    { t: "restraint", d: "holding oneself back from wrong", x: "Restraint is a mark of a mature person." },
    { t: "coercion", d: "forcing someone to act against their will", x: "Coercion in religion is contrary to free choice." },
    { t: "tolerance", d: "respecting the beliefs of others even when you disagree", x: "Tolerance keeps a mixed community at peace." },
    { t: "obedience", d: "following the instruction given", x: "Obedience to God's law brings order to life." },
    { t: "happiness", d: "deep contentment that comes from living rightly", x: "Real happiness is more than momentary pleasure." }
  ],
  facts: [
    { q: "How many commandments were given through Moses?", a: "Ten commandments." },
    { q: "What does freedom of religion mean?", a: "The right to practise the faith of one's choice." },
    { q: "Does the Constitution of Liberia guarantee freedom of religion?", a: "Yes, it does." },
    { q: "What is coercion?", a: "Forcing someone to act against their will." },
    { q: "Why must faith be a free choice?", a: "Because belief that is forced is not genuine belief." },
    { q: "What is tolerance?", a: "Respecting the beliefs of others even when you disagree with them." },
    { q: "How is liberty different from lawlessness?", a: "Liberty is freedom to act within what is right and lawful; lawlessness is doing whatever one likes regardless of others." },
    { q: "How does obeying God's instructions lead to happiness?", a: "It brings a clear conscience, good relationships and order, which produce lasting contentment." }
  ],
  tf: [
    { s: "The Constitution of Liberia guarantees freedom of religion.", a: "true", why: "Liberians may practise the faith of their choice." },
    { s: "It is right to force someone to accept your religion.", a: "false", why: "Coercion in religion is wrong; faith must be freely chosen." },
    { s: "Liberty means doing whatever you like without regard for others.", a: "false", why: "That is lawlessness; liberty operates within what is right and lawful." },
    { s: "Tolerance means respecting others even when you disagree.", a: "true", why: "That is the definition of tolerance." },
    { s: "Obedience to good laws brings order and contentment.", a: "true", why: "Clear rules protect people and give peace of mind." },
    { s: "A person who never restrains himself is truly free.", a: "false", why: "Without restraint a person becomes a slave to his own impulses." }
  ],
  apply: [
    { q: "A group tries to force a pupil to change his religion. What is wrong, and what should the school do?", a: "It is coercion, which violates freedom of religion and genuine faith. The school should stop it, protect the pupil and teach the class about tolerance." },
    { q: "Explain, with an example, why real freedom requires self-restraint.", a: "A driver is free to drive, but only self-restraint at the traffic light keeps him and others alive; without restraint freedom destroys itself." },
    { q: "How can pupils of different faiths in one class protect each other's freedom?", a: "By not mocking each other's practices, allowing time for prayer, sharing devotion fairly and defending a classmate who is teased." },
    { q: "Which of the commandments do you find hardest to keep, and what is your plan?", a: "For example: telling the whole truth. Plan: stop and think before answering, and admit small faults immediately so they do not grow." },
    { q: "Is a person who obeys only because he fears punishment truly obedient? Explain.", a: "Only partly; genuine obedience comes from conviction, so that a person does right even when there is no chance of being caught." }
  ],
  sort: {
    title: "God's law, the country's law, and personal choice",
    groups: [
      { name: "God's commandments", items: ["worship God alone", "honour your parents", "do not steal", "do not bear false witness"] },
      { name: "Laws of Liberia", items: ["pay tax", "obey traffic law", "register a business", "attend school"] },
      { name: "Free personal choice", items: ["which faith to follow", "which place of worship to attend", "what career to pursue"] }
    ]
  },
  compare: {
    title: "Freedom rightly and wrongly understood",
    caption: "Complete the table contrasting the two understandings.",
    items: [
      { p: "Freedom rightly understood", f: "Choosing what is right freely; self-restraint; respecting the rights of others." },
      { p: "Freedom wrongly understood", f: "Doing whatever one wants; no restraint; harming others in the name of liberty." },
      { p: "Freedom of religion", f: "Every person may choose and practise a faith without coercion, and must extend the same right to others." },
      { p: "The result of each", f: "Right freedom brings peace and contentment; wrong freedom brings conflict and eventual bondage to one's own impulses." }
    ]
  },
  casestudy: {
    title: "The examination hall",
    text: "In a Grade Five examination in Kakata, the invigilator was called out of the room. Within a minute, papers were sliding across desks. A boy named Boakai kept writing his own answers. His friend hissed at him to pass his paper across, and when he would not, called him a fool. Boakai failed two questions he could have got right. When the results came, he was not first in the class; three of those who had copied scored higher. His father asked him whether he regretted it. Boakai thought for a while and said, “I would have got more marks. But I would know how I got them, every time I looked at the paper.” Two years later, when the school appointed prefects, the teachers did not need to discuss his name.",
    questions: [
      { q: "What happened when the invigilator left the room?", a: "Pupils began passing their papers to one another to copy." },
      { q: "What did Boakai lose and what did he keep?", a: "He lost marks and his position in the class, but he kept his integrity and a clear conscience." },
      { q: "How does this story show that obedience is a free choice?", a: "Nobody was watching and there was no punishment to fear; Boakai obeyed from conviction, which is genuine obedience." }
    ]
  },
  project: {
    title: "Freedom of religion in my community",
    brief: "Investigate how freedom of religion works in your own community.",
    steps: [
      "List the different places of worship in your community.",
      "Politely ask two adults of different faiths whether they feel free to practise their faith and why.",
      "Write down two ways people of different faiths co-operate locally.",
      "Write down one problem, if any, and one suggestion for improving it.",
      "Present your findings in a balanced and respectful way."
    ],
    criteria: ["places of worship listed", "two respectful interviews", "co-operation and problems both reported", "balanced presentation"]
  },
  activities: [
    "Research and discuss the historical background of the giving of the Ten Commandments",
    "Discuss how the commandments lead to positive choices",
    "Illustrate love of God, love for fellow man and faithfulness through actions",
    "Class debate on freedom and responsibility"
  ],
  materials: ["Books", "Flyers", "Posters", "The Constitution of Liberia", "Pens"],
  assessment: ["Oral and written tests", "Reading", "Debate", "Class work", "Quizzes"]
},

{
  grade: 5, period: "IV", sem: "Two", icon: "🕋",
  title: "Worship and Offering",
  subtitle: "The importance of worship, places of worship and types of offering",
  outcomes: [
    "Learners know the various types of worship offered to God the Creator.",
    "Learners understand the purpose and use of offerings in the church and in the mosque, according to their faith."
  ],
  objectives: [
    "State the importance of worship and offering",
    "Identify places of worship from multi-religious schools of thought",
    "State some unique types of offering and sacrifice offered by various religious groups, according to faith"
  ],
  note: "Worship is the response of the creature to the Creator. It may be private or public. Offerings support the work of the place of worship and relieve the poor. Both faiths also teach sacrifice — the giving up of something valuable.",
  study:[
    /* ---- course text: Semester Two, Period IV — Worship and Offering (pages 44-45) ---- */
    {k:"h3", t:"The Importance of Worship"},
    {k:"p", t:"Learners know the **various types of worship** to God the Creator, and state the **importance of worship and offering**. Worship is how we honour God: it is our duty, our joy and our thanksgiving. Scripture references: the Holy Bible, John 3:16, Matthew 17:5, Matthew 16:16, Matthew 6:9-13 and Luke 11:9-13, 1 Samuel 3:10-18."},
    {k:"rule"},
    {k:"h3", t:"Place of Worship"},
    {k:"p", t:"Learners identify **places of worship from multi-religious schools of thought**: the **church** for Christians and the **mosque** for Muslims, and other places where people gather to pray. Explain where you pray alone and where you pray with others."},
    {k:"bul", items:["**The church** — Christian worship, prayer, praise and the word of God", "**The mosque** — Muslim prayer five times a day and the Friday congregation", "**The home** — family and private devotion in both faiths"]},
    {k:"rule"},
    {k:"h3", t:"Types of Offering"},
    {k:"p", t:"Learners state some **unique types of offering and sacrifices** offered by various religious groups, according to faith:"},
    {k:"bul", items:["**General offering** — gifts given during worship", "**Tithes** — the tenth part given to God (Malachi 3:8-10)", "**Thanksgiving offering** — given in gratitude for God's goodness", "**Sacrifices** — offerings made at special times, such as the Muslim sacrifices at the time of the festival of sacrifice (Eid al-Adha)", "**Charity (zakat and alms)** — giving to the poor and needy"]},
    {k:"p", t:"Learners research scripture readings on praying alone, praying with others, and giving offerings to God in worship; for Muslims, study the **prayers at the time of sacrifice**. Supplementary text: Muslim Prayer Book by A. B. Rafiq."},
    {k:"rule"},
    {k:"h3", t:"Sacrifices in Both Religions"},
    {k:"p", t:"Discuss **when sacrifices are offered and for what purpose in both religions**. In Christianity, the sacrifice of praise and the offering of thanks are given in worship; in Islam, sacrifice is offered at Eid al-Adha in remembrance of the obedience of Prophet Ibrahim, and the meat is shared with the poor."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:["Explain where you pray alone and with others.", "Discuss the gifts offered to God in service to Him.", "Research scripture readings on praying alone, praying with others, and giving offerings to God in worship.", "For Muslims, study the prayers at the time of sacrifice.", "Name the different types of prayers and their purpose in worship.", "State when sacrifices are offered and for what purpose in both religions."]}
  ],
  focus: ["The importance of worship", "Places of worship", "Types of offering", "Praying alone and praying with others", "Sacrifice"],
  terms: [
    { t: "worship", d: "honouring God with reverence, prayer and service", x: "Worship is the response of the creature to the Creator." },
    { t: "multi-religious", d: "including people of more than one faith", x: "Liberia is a multi-religious society." },
    { t: "sacrifice", d: "the giving up of something valuable in obedience to God", x: "The feast of sacrifice is observed by Muslims." },
    { t: "charity", d: "giving to relieve those in need", x: "Part of the offering is used for charity." },
    { t: "congregational prayer", d: "prayer offered together by the gathered believers", x: "Friday congregational prayer is important for Muslims." },
    { t: "intercession", d: "praying on behalf of another person", x: "The church held intercession for the sick." },
    { t: "vow", d: "a solemn promise made to God", x: "She fulfilled the vow she had made." },
    { t: "stewardship", d: "the faithful management of what God has given", x: "Giving is an expression of stewardship." },
    { t: "gratitude", d: "thankfulness expressed to God", x: "The harvest offering is an act of gratitude." },
    { t: "consecrate", d: "to set something apart for God's use", x: "They consecrated the new building for worship." }
  ],
  facts: [
    { q: "What is worship?", a: "Honouring God with reverence, prayer and service." },
    { q: "Name two places of worship found in Liberia.", a: "The church and the mosque." },
    { q: "What does multi-religious mean?", a: "Including people of more than one faith." },
    { q: "Name two uses of the offerings collected at a place of worship.", a: "Supporting the work of the place of worship, and helping the poor and the needy." },
    { q: "What is intercession?", a: "Praying on behalf of another person." },
    { q: "What is a vow?", a: "A solemn promise made to God." },
    { q: "What is sacrifice in worship?", a: "The giving up of something valuable in obedience to God." },
    { q: "Give one reason why believers pray together as well as alone.", a: "Praying together strengthens the community and encourages the members, while private prayer builds personal faith." }
  ],
  tf: [
    { s: "Liberia is a multi-religious society.", a: "true", why: "Christians, Muslims and others live together in Liberia." },
    { s: "Offerings are used only to pay the leaders.", a: "false", why: "They also support the work of the place of worship and relieve the poor." },
    { s: "Intercession means praying for another person.", a: "true", why: "That is the meaning of intercession." },
    { s: "A vow is a casual remark that can be ignored.", a: "false", why: "A vow is a solemn promise to God and should be fulfilled." },
    { s: "Both private and public worship have value.", a: "true", why: "Private worship builds personal faith; public worship builds the community." },
    { s: "Sacrifice means giving away only what you no longer want.", a: "false", why: "Sacrifice means giving up something genuinely valuable." }
  ],
  apply: [
    { q: "Your congregation collects an offering. Suggest three proper uses and one improper use.", a: "Proper: maintaining the building, helping widows and orphans, supporting a school or clinic. Improper: enriching one person privately." },
    { q: "Explain the difference between giving what you can spare and true sacrifice.", a: "Giving what you can spare costs you nothing; true sacrifice means the gift is felt, as when a poor person gives from what she needs." },
    { q: "How can a school with pupils of two faiths organise worship fairly?", a: "By giving each faith its own time and space, rotating who leads assembly, and never compelling a pupil to take part in another faith's rite." },
    { q: "Why is honesty in handling offerings so important?", a: "Because the money is given to God and for the needy; misusing it is theft and destroys the community's trust." },
    { q: "Name one act of worship you can offer that costs no money.", a: "Prayer, singing, reading the Holy Book, or serving by cleaning the place of worship." }
  ],
  sort: {
    title: "Kinds of worship and uses of offering",
    groups: [
      { name: "Kinds of worship", items: ["private prayer", "congregational prayer", "intercession", "thanksgiving", "praise singing"] },
      { name: "Uses of offering", items: ["maintaining the building", "helping the poor", "supporting a school", "caring for orphans"] }
    ]
  },
  compare: {
    title: "Worship and offering in the two faiths",
    caption: "Complete the table respectfully, according to each faith.",
    items: [
      { p: "Place and day", f: "Church, chiefly Sunday, for Christians; mosque, chiefly Friday, for Muslims." },
      { p: "Forms of prayer", f: "Private prayer, family devotion and congregational worship in both faiths." },
      { p: "Kinds of giving", f: "Tithes, offerings and thanksgiving gifts among Christians; charity and prescribed giving among Muslims." },
      { p: "Sacrifice", f: "Both faiths teach the giving up of something valuable in obedience to God." },
      { p: "Purpose of giving", f: "To honour God, sustain the place of worship and relieve the needy." }
    ]
  },
  casestudy: {
    title: "The roof fund",
    text: "A congregation in Grand Gedeh raised money for two years to replace their leaking roof. The fund had almost reached its target when a fire destroyed six houses in the town, leaving nine families without shelter. At the meeting, some members argued that the money was consecrated for the roof and must not be touched. An old woman stood up and said only this: “The rain falls on us for an hour on Sunday. It falls on them all week.” The congregation voted to give the entire fund to the burnt-out families, and continued to worship under the leaking roof. Word spread. Within eight months, gifts arrived from three other towns, and the roof was replaced with better materials than they had planned.",
    questions: [
      { q: "What had the congregation been saving for, and what emergency arose?", a: "They were saving to replace a leaking roof when a fire left nine families homeless." },
      { q: "What argument did the old woman make?", a: "That the congregation suffered rain only for an hour on Sunday, while the homeless families suffered it all week." },
      { q: "What does this case teach about the purpose of offerings?", a: "That offerings are given to God for the good of people, and relieving urgent human need can rightly come before improving the building." }
    ]
  },
  project: {
    title: "A study of giving in my place of worship",
    brief: "Find out how offerings are collected and used at your place of worship.",
    steps: [
      "Politely ask a leader how offerings are collected.",
      "Find out three ways the money is used.",
      "Find out how the community is told about the spending.",
      "Write a short report including one strength and one suggestion.",
      "Present your report respectfully, without naming or accusing individuals."
    ],
    criteria: ["accurate description of collection", "three uses recorded", "accountability described", "respectful, non-accusing tone"]
  },
  activities: [
    "Learners explain where they pray alone and with others",
    "Discuss gifts offered to God in service to Him",
    "Research scripture readings on praying alone, praying with others and giving offerings",
    "Name the different types of prayer and their purpose in worship"
  ],
  materials: ["Books", "Flyers", "Posters", "Markers", "Pens", "Pencils"],
  assessment: ["Oral and written tests", "Reading", "Writing", "Class work", "Quizzes"]
},

{
  grade: 5, period: "V", sem: "Two", icon: "🌍",
  title: "Religious Personalities",
  subtitle: "Jesus as Saviour, the works of the Prophet, pastors and imams, and missionaries in Liberia",
  outcomes: [
    "Learners will know Jesus Christ as the Saviour of mankind and recognise Prophet Mohammed as a Messenger of God.",
    "Learners will understand the missionary work of the church and of Islam in Liberia and West Africa.",
    "Learners will know by name religious personalities of both faiths, including local pastors and imams."
  ],
  objectives: [
    "Recognise Jesus as the Saviour of mankind",
    "Explain the works of Prophet Mohammed",
    "Compare and contrast the roles of pastors and imams",
    "Discuss the ministry of the church",
    "Name some pioneer missionaries of Islam in West Africa, according to faith"
  ],
  note: "Both Christianity and Islam came to Liberia and West Africa through the work of dedicated men and women. Churches and mosques built many of the country's first schools and clinics. This unit studies those personalities and their local successors.",
  study:[
    /* ---- course text: Semester Two, Period V — Religious Personalities (pages 46-47) ---- */
    {k:"h3", t:"Jesus, the Savior of Mankind (Christian)"},
    {k:"p", t:"Learners will know **Jesus Christ as the Savior of Mankind**. Christians believe Jesus, the Son of God, was born as the Saviour of the world: *'God so loved the world that He gave His one and only Son'* (John 3:16). Read and explain the purpose for which Jesus, the Son of God, was born. Scripture references: the Holy Bible, Genesis 6:5-8, John 3:16, Exodus 4:1-17, Jeremiah 1:1-10, 1 Kings 1:34-35, Mark 1:16-20, Isaiah 9:6-7, Isaiah 7:14, Isaiah 53:1-12 and Matthew 2:1-6."},
    {k:"rule"},
    {k:"h3", t:"Mohammed's Works as a Prophet"},
    {k:"p", t:"Learners will recognize **Prophet Mohammed as a Messenger of God** and explain the works of Prophet Mohammed: receiving the revelation of the Quran, calling people to worship one God, teaching justice and mercy, and building a community of believers. Research the **call of Mohammed as Prophet by God**."},
    {k:"rule"},
    {k:"h3", t:"The Role of Pastors and Imams"},
    {k:"p", t:"Learners compare and contrast the **roles of Pastors and Imams**: the **pastor** leads the church — preaching the word, praying, teaching and caring for the flock; the **imam** leads the mosque — leading prayers, teaching the Quran and guiding the Muslim community. Interview a pastor and an imam on their roles."},
    {k:"rule"},
    {k:"h3", t:"The Ministry of the Church"},
    {k:"p", t:"Learners discuss the **ministry of the church**: preaching the gospel, teaching, caring for the sick and needy, and making disciples — the work Jesus gave His church to do."},
    {k:"rule"},
    {k:"h3", t:"Pioneer Missionaries of Islam in West Africa"},
    {k:"p", t:"Learners name some **pioneer missionaries of Islam in West Africa**, according to faith. One example is **Alhaji Nayyar**, remembered as the first Muslim missionary to West Africa, who preached the correct teaching about reliance on Allah, rejected the use of talismans, and brought medical cure for diseases."},
    {k:"bul", items:["**The Islamic year** — count it from the time of the Hijrah, the Prophet's journey from Mecca to Medina", "**The prayers** — learn the prayers taught in Islam", "**The estimated year of Jesus' birth** — about 4 BC, in the town of Bethlehem"]},
    {k:"rule"},
    {k:"h3", t:"The Life and Works of Biblical Churches in Liberia"},
    {k:"p", t:"Learners discuss the **life and works of some Biblical churches in the growth and development of Liberia** — how churches have built schools, clinics and communities, and how they continue to serve the nation. Supplementary text: Books on Islam teaching."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:["Read and explain the purpose for which Jesus, the Son of God, was born as Savior of the world.", "Research the call of Mohammed as Prophet by God.", "Give some ideas about Alhaji Nayyar as the first Muslim missionary to West Africa.", "Calculate the Islamic year from the time of the Hijrah and learn the prayers.", "Give the estimated year of Jesus' birth.", "Interview a pastor and an imam on their roles in the church and mosque, and on Jesus Christ as the Savior of Mankind."]}
  ],
  focus: ["Jesus, the Saviour of mankind", "Mohammed's works as a Prophet", "The role of pastors and imams", "The ministry of the church", "Pioneer missionaries in West Africa", "The work of churches in the growth of Liberia"],
  terms: [
    { t: "missionary", d: "a person sent to spread a faith and serve in another place", x: "Missionaries opened many early schools in Liberia." },
    { t: "pioneer", d: "one of the first to do something in a place", x: "He was a pioneer of Islamic teaching in the region." },
    { t: "ministry", d: "the service and work carried out by a religious body", x: "The ministry of the church includes teaching and healing." },
    { t: "pastor", d: "the leader and shepherd of a Christian congregation", x: "The pastor visited the sick of his congregation." },
    { t: "imam", d: "the one who leads prayers and teaches in a mosque", x: "The imam explained the meaning of the passage." },
    { t: "evangelism", d: "the spreading of the Christian message", x: "Evangelism was carried out along the coast." },
    { t: "dawah", d: "the invitation to Islam and its teaching", x: "Dawah was carried into West Africa by traders and scholars." },
    { t: "congregation", d: "the body of people who worship together", x: "The congregation supported the new clinic." },
    { t: "ordination", d: "the setting apart of a person for religious office", x: "His ordination followed years of training." },
    { t: "hijrah", d: "the migration of Prophet Mohammed, from which the Islamic calendar is counted", x: "The Islamic year is counted from the hijrah." }
  ],
  facts: [
    { q: "Who do Christians call the Saviour of mankind?", a: "Jesus Christ." },
    { q: "Whom do Muslims recognise as the Messenger of God?", a: "Prophet Mohammed, peace be upon him." },
    { q: "What is a missionary?", a: "A person sent to spread a faith and serve in another place." },
    { q: "Name two services that missionary churches brought to Liberia.", a: "Schools and clinics; also churches and training for teachers." },
    { q: "What is the role of a pastor?", a: "To lead, teach and care for a Christian congregation." },
    { q: "What is the role of an imam?", a: "To lead prayers and teach in the mosque." },
    { q: "From what event is the Islamic calendar counted?", a: "From the hijrah, the migration of Prophet Mohammed." },
    { q: "Name one way religious bodies still serve Liberian communities today.", a: "They run schools and clinics, feed the needy, mediate conflicts and care for orphans." }
  ],
  tf: [
    { s: "Missionary churches helped to open schools in Liberia.", a: "true", why: "Many of the country's early schools were founded by churches." },
    { s: "A pastor leads prayers in a mosque.", a: "false", why: "An imam leads in the mosque; a pastor leads a Christian congregation." },
    { s: "The Islamic calendar is counted from the hijrah.", a: "true", why: "The hijrah marks the beginning of the Islamic year count." },
    { s: "Islam reached West Africa partly through traders and scholars.", a: "true", why: "Trade routes and travelling scholars carried Islamic teaching across the region." },
    { s: "Religious bodies have never contributed to education in Liberia.", a: "false", why: "Churches and mosques founded many schools." },
    { s: "Pastors and imams have some duties in common.", a: "true", why: "Both lead worship, teach, counsel and serve their communities." }
  ],
  apply: [
    { q: "Name three duties that both a pastor and an imam perform.", a: "Both lead worship, teach their Holy Book, and counsel and support families in trouble." },
    { q: "Why did early missionaries of both faiths often build schools as well as places of worship?", a: "Because they wanted people to be able to read their Holy Book, and because education served the whole community." },
    { q: "How could a pastor and an imam in one town work together for the good of all?", a: "By jointly mediating disputes, running a shared clinic or school project, and speaking together against violence." },
    { q: "What qualities should a religious leader have?", a: "Honesty, humility, learning, patience, fairness to all and a life that matches his teaching." },
    { q: "Interview plan: write two respectful questions you would ask a local religious leader.", a: "For example: What made you decide to serve? and What is the greatest need in our community that faith groups could meet?" }
  ],
  sort: {
    title: "Roles, titles and terms of the two faiths",
    groups: [
      { name: "Christian", items: ["pastor", "evangelism", "congregation", "ordination"] },
      { name: "Muslim", items: ["imam", "dawah", "hijrah", "Friday prayer"] },
      { name: "Shared work", items: ["teaching", "counselling", "running schools", "helping the poor"] }
    ]
  },
  compare: {
    title: "The pastor and the imam",
    caption: "Complete the table comparing the two local religious leaders.",
    items: [
      { p: "Where each serves", f: "The pastor in the church; the imam in the mosque." },
      { p: "Main day of leading worship", f: "Sunday for the pastor; Friday for the imam." },
      { p: "Holy Book taught", f: "The Holy Bible; the Holy Quran." },
      { p: "Duties in common", f: "Leading worship, teaching, counselling, visiting the sick and helping the needy." },
      { p: "Contribution to the community", f: "Both often run schools, mediate disputes and encourage peaceful living." }
    ]
  },
  casestudy: {
    title: "The school under the palm thatch",
    text: "When the first mission station opened in a river town in Liberia, there was no school building. The teacher, a woman who had travelled far from her home, held classes under a palm thatch shelter with fourteen children seated on split bamboo. She taught reading in the morning and practical work in the afternoon, and she treated wounds with the small supply of medicine she carried. Some parents kept their children away at first, suspicious of a stranger's motives. But after two years, the children who had attended could read letters aloud for the whole town, and the traders could no longer cheat those families on figures. The town built her a proper schoolhouse. That building later became the town's first primary school, and it still stands.",
    questions: [
      { q: "Where were the first classes held, and how many children attended?", a: "Under a palm thatch shelter, with fourteen children seated on split bamboo." },
      { q: "Name two kinds of service the teacher provided.", a: "She taught reading and practical work, and she treated wounds with her small supply of medicine." },
      { q: "What changed in the town after two years, and why did attitudes change?", a: "Children could read letters aloud and traders could no longer cheat their families on figures, so parents saw the practical value of the school." }
    ]
  },
  project: {
    title: "A local religious leader interview",
    brief: "Interview a religious leader in your community and report to the class.",
    steps: [
      "Ask your parent's permission and arrange a polite appointment.",
      "Prepare five respectful questions in advance, including one about service to the community.",
      "Take careful notes during the interview and thank the leader afterwards.",
      "Write a one-page report of what you learned.",
      "Present it to the class, and compare it with the report of a classmate who interviewed a leader of the other faith."
    ],
    criteria: ["five prepared questions", "polite conduct and thanks", "accurate one-page report", "respectful comparison with the other faith"]
  },
  activities: [
    "Read and explain the purpose for which Jesus is called Saviour",
    "Research the call of Mohammed as Prophet",
    "Discuss the works of pioneer missionaries in West Africa",
    "Discuss the life and works of some churches in the growth and development of Liberia",
    "Interview a pastor and an imam on their roles"
  ],
  materials: ["Poster sheets", "Colouring pencils", "Markers", "Books on the teachings of both faiths"],
  assessment: ["Oral and written tests", "Reading", "Interview report", "Class presentation"]
},

{
  grade: 5, period: "VI", sem: "Two", icon: "☮️",
  title: "Conflict and its Resolution Process",
  subtitle: "Definition, kinds, causes and resolution of conflict",
  outcomes: [
    "Learners understand the definition, causes and types of conflict.",
    "Learners will intervene positively in preventing and resolving conflicts and crises."
  ],
  objectives: [
    "Define conflict",
    "Name the different kinds of conflict",
    "State the causes of conflict",
    "Discuss conflict resolution"
  ],
  note: "Liberia's own history shows both the cost of conflict and the possibility of peace. This unit trains pupils not merely to avoid conflict but to intervene positively to prevent and resolve it.",
  study:[
    /* ---- course text: Semester Two, Period VI — Conflicts and its Resolution Process (pages 48-49) ---- */
    {k:"h3", t:"Definition of Conflict"},
    {k:"p", t:"**Conflict** is a disagreement, quarrel or fight between individuals or groups. Learners understand the **definition, causes and types of conflict**, and they learn to intervene positively in **preventing and resolving conflicts and crises**."},
    {k:"rule"},
    {k:"h3", t:"Kinds of Conflicts"},
    {k:"bul", items:["**Family conflict** — quarrels inside the home", "**School conflict** — quarrels among learners or with teachers", "**Community conflict** — disputes between neighbours or groups", "**Physical conflict** — fighting with the body", "**Emotional conflict** — struggles of anger, jealousy and fear", "**Spiritual conflict** — the struggle between right and wrong, good and evil", "**Ethnic and governmental conflict** — disputes between ethnic groups or over power"]},
    {k:"rule"},
    {k:"h3", t:"Causes of Conflicts"},
    {k:"bul", items:["Misunderstanding and poor communication", "Selfishness, greed and jealousy", "Unfairness and injustice", "Bad words, insults, lies and gossip", "Refusing to forgive", "Competition for land, money, power or position"]},
    {k:"p", t:"Learners discuss in class the **negative impact of conflict** in the family, in school and in society: broken relationships, hurt feelings, wasted time, damaged property and division in the community."},
    {k:"rule"},
    {k:"h3", t:"Conflict Resolution"},
    {k:"p", t:"**Conflict resolution** is the process of ending a conflict peacefully. The Bible teaches the steps of resolving conflict between believers: *'If your brother or sister sins against you, go and point out their fault, just between the two of you... if they listen, you have won them over'* (Matthew 18:15-20)."},
    {k:"num", items:["**Go to the person** — speak directly, not through others.", "**Listen** to both sides of the story.", "**Forgive** — let go of the offence.", "**Make amends** — put right what was damaged.", "**Seek help** — involve elders, teachers or religious leaders when needed.", "**Be reconciled** — restore the relationship and live in peace."]},
    {k:"p", t:"Supplementary texts: Trauma Healing and Resolution Book; related literatures on conflict resolution."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:["Define and discuss the types of conflicts.", "Discuss in class the negative impact of conflict in the family, in school and in society.", "Dramatize a conflict and its resolution process."]}
  ],
  focus: ["Definition of conflict", "Kinds of conflict", "Causes of conflict", "Conflict resolution", "The negative impact of conflict in the family, school and society"],
  terms: [
    { t: "conflict", d: "a serious disagreement between people or groups", x: "The conflict spread from two families to two quarters." },
    { t: "crisis", d: "a time of intense difficulty or danger", x: "The town faced a crisis after the flood." },
    { t: "intervene", d: "to step in to change what is happening", x: "The elders intervened before the quarrel became a fight." },
    { t: "mediation", d: "a process in which a neutral person helps two sides agree", x: "Mediation settled the land dispute." },
    { t: "arbitration", d: "settlement in which a chosen person decides the outcome", x: "They accepted arbitration by the chief." },
    { t: "negotiation", d: "discussion aimed at reaching an agreement", x: "Negotiation avoided a strike." },
    { t: "prejudice", d: "an unfair opinion formed before knowing the facts", x: "Prejudice against a tribe fuels conflict." },
    { t: "stereotype", d: "a fixed and often unfair idea about a whole group", x: "Stereotypes make peaceful living harder." },
    { t: "reconciliation", d: "the restoring of good relations after conflict", x: "Reconciliation took years but it held." },
    { t: "peacebuilding", d: "the long work of creating conditions for lasting peace", x: "Peacebuilding includes jobs, justice and education." }
  ],
  facts: [
    { q: "What is conflict?", a: "A serious disagreement between people or groups." },
    { q: "Name four kinds of conflict.", a: "Any four: physical, emotional, spiritual, family, ethnic, religious and governmental conflict." },
    { q: "Name three causes of conflict.", a: "Any three: land disputes, unfair treatment, greed, prejudice, gossip and poverty." },
    { q: "What is mediation?", a: "A process in which a neutral person helps two sides reach agreement." },
    { q: "How does arbitration differ from mediation?", a: "In arbitration a chosen person decides the outcome; in mediation the parties themselves reach the agreement." },
    { q: "What is prejudice?", a: "An unfair opinion formed before knowing the facts." },
    { q: "What is peacebuilding?", a: "The long work of creating the conditions for lasting peace." },
    { q: "Name one effect of conflict on children.", a: "Loss of schooling, fear and insecurity, loss of family members, and displacement from home." }
  ],
  tf: [
    { s: "In mediation the mediator decides who is right.", a: "false", why: "In mediation the parties reach their own agreement; in arbitration someone decides for them." },
    { s: "Prejudice can be a cause of conflict.", a: "true", why: "Unfair opinions about groups fuel hostility." },
    { s: "Conflict affects only the two people directly involved.", a: "false", why: "Conflict harms families, schools and whole communities." },
    { s: "Peacebuilding takes a long time and includes justice and opportunity.", a: "true", why: "Lasting peace requires more than the ending of fighting." },
    { s: "It is always best to keep quiet and do nothing when a conflict starts.", a: "false", why: "Positive intervention early can prevent a small quarrel from becoming a serious conflict." },
    { s: "Stereotypes help us understand people accurately.", a: "false", why: "Stereotypes are fixed, unfair ideas that distort our view of people." }
  ],
  apply: [
    { q: "Describe the five steps you would follow to mediate a dispute between two classmates.", a: "1. Separate them and let tempers cool. 2. Hear each side fully without interruption. 3. Identify the real issue behind the anger. 4. Ask each what would settle it fairly. 5. Agree the solution, have them shake hands and check on them later." },
    { q: "How does poverty contribute to conflict in a community?", a: "Competition for scarce land, work and resources sharpens quarrels, and desperation makes people more willing to take risks and to be recruited by others." },
    { q: "Give two ways a school can reduce conflict before it starts.", a: "Train pupil peer mediators and hold regular class meetings, and enforce clear fair rules so pupils do not feel unjustly treated." },
    { q: "Why is it dangerous to describe a whole tribe or faith by the actions of a few?", a: "It is a stereotype that spreads prejudice, provokes revenge against innocent people and can turn a local dispute into a wide conflict." },
    { q: "Name three things, apart from the end of fighting, that a community needs for lasting peace.", a: "Justice for past wrongs, work and opportunity for young people, and honest leadership with fair sharing of resources." }
  ],
  sort: {
    title: "Causes of conflict and tools of resolution",
    groups: [
      { name: "Causes", items: ["prejudice", "land disputes", "greed", "unfair treatment", "gossip", "poverty"] },
      { name: "Tools of resolution", items: ["mediation", "negotiation", "arbitration", "apology", "compromise", "reconciliation"] }
    ]
  },
  compare: {
    title: "Three ways of settling a dispute",
    caption: "Complete the table showing how each method works.",
    items: [
      { p: "Negotiation", f: "The two sides talk directly and reach their own agreement." },
      { p: "Mediation", f: "A neutral third person helps the two sides reach their own agreement." },
      { p: "Arbitration", f: "The parties agree in advance to accept the decision of a chosen person, such as a chief or court." },
      { p: "Which is best", f: "It depends: negotiation is quickest if trust remains; mediation helps when talks have broken down; arbitration is needed when they cannot agree at all." }
    ]
  },
  casestudy: {
    title: "The market fire that did not become a riot",
    text: "A fire destroyed part of a market in a mixed community, and within an hour a rumour spread that traders of one group had set it deliberately to drive out the others. Young men began gathering at both ends of the street. Before anything happened, three people acted. The market superintendent announced over a loudhailer that the cause was not yet known and asked for one representative from each trading association to inspect the site with the fire officer. The imam and the pastor walked the length of the market together, in view of everybody, and stood side by side at the burnt stalls. The women's association opened its kitchen and fed the traders who had lost everything, regardless of who they were. By evening the fire officer reported an electrical fault. The street stayed quiet.",
    questions: [
      { q: "What rumour threatened to turn the fire into violence?", a: "That traders of one group had set the fire deliberately to drive out the others." },
      { q: "Name the three interventions that prevented a riot.", a: "The superintendent's public announcement and joint inspection, the imam and pastor walking the market together, and the women's association feeding all the affected traders." },
      { q: "What general lesson about preventing conflict does this case teach?", a: "That prompt, visible, impartial action by trusted people — and refusing to let rumour stand unchallenged — can stop a crisis before it becomes violence." }
    ]
  },
  project: {
    title: "A peace committee for our class",
    brief: "Set up and run a simple peace committee in your class for one month.",
    steps: [
      "With your teacher, elect four pupils as peer mediators, including at least two girls.",
      "Write the committee's rules: confidentiality, hearing both sides, no taking of sides.",
      "Record each dispute brought to the committee, without naming pupils in the public record.",
      "Note how each was settled and whether it stayed settled.",
      "At the end of the month, report to the class what worked and what did not."
    ],
    criteria: ["fair election including girls", "clear written rules", "confidential record kept", "honest evaluation including failures"]
  },
  activities: [
    "Define and discuss the types of conflict",
    "Discuss in class the negative impact of conflict in the family, school and society",
    "Role play a mediation process",
    "Write an essay on preventing conflict in the community"
  ],
  materials: ["Charts", "Poster sheets", "Markers", "Pens", "Pencils"],
  assessment: ["Oral and written tests", "Role play", "Essay", "Class work", "Quizzes"]
},

/* ============================ GRADE 6 ============================ */
{
  grade: 6, period: "I", sem: "One", icon: "🔭",
  title: "Creation",
  subtitle: "Scriptural accounts, non-scriptural accounts, myth and fact",
  outcomes: [
    "Learners will know the creation of the earth through the account of the Holy Bible, the account of the Holy Quran and the Big Bang theory, and will be able to differentiate between myths, facts and faith."
  ],
  objectives: [
    "Distinguish non-scriptural myths from the scriptural accounts of the Holy Books",
    "Explain the creation stories",
    "Name some Holy Books used by various religious groups in giving account of creation",
    "Explain the Big Bang theory"
  ],
  note: "This unit compares scriptural accounts of creation with the scientific description known as the Big Bang theory. Pupils learn to distinguish a myth, a scientific theory and a statement of faith, and to discuss all three without insult.",
  study:[
    /* ---- course text: Semester One, Period I — Creation (page 50) ---- */
    {k:"h3", t:"Creation Stories"},
    {k:"p", t:"Learners will know the creation of the earth through the **Holy Bible account**, the **Holy Quran account** and the **Big Bang Theory**, and will be able to differentiate between **myths, facts and faith**. Scripture references: the Holy Bible, Genesis 1 and 2; the Holy Quran 6:15, 19:36 and 12:102."},
    {k:"rule"},
    {k:"h3", t:"The Holy Bible Account"},
    {k:"p", t:"The Bible teaches that **God created the heavens and the earth**: in the beginning God spoke, and light, sky, land, plants, sun, moon, stars, fish, birds, animals and finally man came into being (Genesis 1 and 2). This is the **scriptural fact** of the Christian faith."},
    {k:"rule"},
    {k:"h3", t:"The Holy Quran Account"},
    {k:"p", t:"The Quran teaches that **God (Allah) is the Creator of the heavens and the earth**, and that He created all things by His command. Reflect on the signs of creation in the Quran 6:15, 19:36 and 12:102 — the wonders of the universe point to the one true God."},
    {k:"rule"},
    {k:"h3", t:"The Big Bang Theory"},
    {k:"p", t:"Learners explain the **Big Bang Theory** — the scientific account that the universe began from a great explosion of energy and matter billions of years ago, and has been expanding ever since. Learners understand the **wondrous phenomena of the universe** — the earth with its sun, moon and stars."},
    {k:"rule"},
    {k:"h3", t:"Myths, Facts and Faith"},
    {k:"p", t:"Learners distinguish **non-scriptural myths** (stories made up by people) from **scriptural facts** (what the Holy Books teach) and from **faith** (trusting in God). The Holy Books give the religious account of creation; science gives a natural account. Both are studied and discussed."},
    {k:"bul", items:["**Myth** — a story made by people, not a holy book", "**Fact** — what is true and can be verified", "**Faith** — trusting God and His word", "**Holy Books used by various religious groups** — the Holy Bible, the Holy Quran and other scriptures"]},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:["Read and discuss how the world came into existence: through the Holy Bible and through science.", "Understand the wondrous phenomena of the universe, the earth, with its sun, moon and stars.", "Debate the topic of creation as stated in the Holy Books and as mentioned by science.", "Write an essay on how you believe the universe was created."]}
  ],
  focus: ["Creation stories", "Non-scriptural accounts", "The Holy Bible", "The Holy Quran", "The Big Bang theory", "Myth, fact and faith"],
  terms: [
    { t: "myth", d: "a traditional story, often explaining origins, not offered as verified fact", x: "Every culture has a myth about how the world began." },
    { t: "fact", d: "something that can be shown to be true by evidence", x: "That water boils at a certain temperature is a fact." },
    { t: "faith", d: "trust in what is believed though it cannot be proved by experiment", x: "Belief in a Creator is a matter of faith." },
    { t: "theory", d: "a well-tested scientific explanation of observed evidence", x: "The Big Bang theory explains the expanding universe." },
    { t: "Big Bang theory", d: "the scientific account that the universe expanded from an extremely hot, dense beginning", x: "The Big Bang theory is taught in science class." },
    { t: "universe", d: "all of space and everything in it", x: "The universe contains countless galaxies." },
    { t: "galaxy", d: "a vast system of stars held together in space", x: "Our sun lies within one galaxy among many." },
    { t: "evidence", d: "the facts used to support a conclusion", x: "Scientists weigh the evidence before concluding." },
    { t: "scriptural", d: "coming from the Holy Books", x: "The scriptural account is found in the first chapters." },
    { t: "reverence", d: "deep respect, especially in matters of faith", x: "Discuss other beliefs with reverence." }
  ],
  facts: [
    { q: "What is a myth?", a: "A traditional story, often explaining origins, which is not offered as verified fact." },
    { q: "What is a scientific theory?", a: "A well-tested explanation of observed evidence." },
    { q: "What does the Big Bang theory state?", a: "That the universe expanded from an extremely hot, dense beginning." },
    { q: "Name the two Holy Books studied in this unit that give accounts of creation.", a: "The Holy Bible and the Holy Quran." },
    { q: "What is the difference between fact and faith?", a: "A fact can be shown true by evidence; faith is trust in what cannot be proved by experiment." },
    { q: "What is a galaxy?", a: "A vast system of stars held together in space." },
    { q: "Why should the Big Bang theory not be called a myth?", a: "Because it is a scientific theory built on observed evidence, not a traditional story." },
    { q: "How should pupils discuss beliefs different from their own?", a: "With reverence and accuracy, stating the other view fairly before disagreeing." }
  ],
  tf: [
    { s: "A scientific theory is the same thing as a guess.", a: "false", why: "A scientific theory is a well-tested explanation supported by evidence." },
    { s: "The Big Bang theory describes the universe expanding from a hot, dense beginning.", a: "true", why: "That is the scientific account." },
    { s: "Faith is trust in what cannot be proved by experiment.", a: "true", why: "That is how faith is defined in this unit." },
    { s: "Both the Holy Bible and the Holy Quran give accounts of creation.", a: "true", why: "Both begin with God as Creator of the heavens and the earth." },
    { s: "A person who holds a different view about origins should be insulted.", a: "false", why: "Differences must be discussed with reverence and accuracy." },
    { s: "Evidence plays no part in science.", a: "false", why: "Science is built on evidence and testing." }
  ],
  apply: [
    { q: "State the Big Bang theory accurately in two sentences, then state the scriptural account in two sentences.", a: "Big Bang: the universe began in an extremely hot, dense state and has been expanding ever since; the evidence includes the observed expansion of galaxies. Scriptural: God created the heavens and the earth and all that is in them; the account teaches purpose and the Creator's authority." },
    { q: "A classmate says science and faith must always be enemies. How would you respond?", a: "Many believers hold that science describes how the universe unfolded while faith speaks of who caused it and why; the two ask different questions." },
    { q: "Why is it dishonest to misstate another person's belief before arguing against it?", a: "Because you are then arguing against something he does not hold; it is a form of lying and it prevents real understanding." },
    { q: "How would you tell the difference between a myth and a scientific theory?", a: "A myth is a traditional story passed down; a scientific theory is tested against evidence and can be revised if the evidence changes." },
    { q: "Prepare one respectful question you could ask someone who believes differently about origins.", a: "For example: What is the strongest reason for your view, and what would make you reconsider it?" }
  ],
  sort: {
    title: "Myth, scientific theory and statement of faith",
    groups: [
      { name: "Scientific theory", items: ["the Big Bang", "expansion of galaxies", "evidence from telescopes"] },
      { name: "Statement of faith", items: ["God created the heavens and the earth", "creation has a purpose"] },
      { name: "Traditional myth", items: ["a folk tale about how the rivers were made", "a legend of the first ancestors"] }
    ]
  },
  compare: {
    title: "Three accounts of the beginning",
    caption: "Complete the table stating each account fairly.",
    items: [
      { p: "The Holy Bible", f: "God created the heavens and the earth in an ordered sequence, and pronounced the creation good." },
      { p: "The Holy Quran", f: "God created the heavens and the earth and all between them, and appointed man as caretaker on earth." },
      { p: "The Big Bang theory", f: "The universe expanded from an extremely hot, dense state and continues to expand, as shown by observed evidence." },
      { p: "What each answers", f: "The Holy Books chiefly answer who and why; the scientific theory chiefly answers how and when." }
    ]
  },
  casestudy: {
    title: "The debate that both sides won",
    text: "A Grade Six class in Monrovia held a debate on creation. Two pupils spoke for the scriptural account and two explained the Big Bang theory. The rule set by the teacher was unusual: before you argue against the other side, you must first state their position so accurately that they agree you have stated it correctly. The first speaker tried to caricature the science as “a big accident with no purpose” and was stopped and asked to try again. The second tried to dismiss the scriptural account as “an old story” and was likewise stopped. It took the class twenty minutes just to get past this rule. But once they did, the debate that followed was the best the school had heard, and afterwards the four debaters stayed behind, still arguing, and walked home together.",
    questions: [
      { q: "What unusual rule did the teacher set for the debate?", a: "That before arguing against the other side, a speaker had to state their position so accurately that they agreed it was stated correctly." },
      { q: "Why were the first two speakers stopped?", a: "Because each caricatured the other side instead of stating it fairly." },
      { q: "What does this case teach about discussing deep disagreements?", a: "That understanding the other position accurately makes genuine debate possible and keeps disagreement from becoming hostility." }
    ]
  },
  project: {
    title: "A fair comparison chart",
    brief: "Produce a chart comparing the accounts of the beginning without caricaturing any of them.",
    steps: [
      "Rule three columns: Holy Bible, Holy Quran, Big Bang theory.",
      "In each column write what that account says, in its own terms.",
      "Add a row: what question this account chiefly answers.",
      "Add a row: what kind of statement this is — faith, or scientific theory.",
      "Show the chart to someone who holds each view and ask whether you stated it fairly. Correct it if not."
    ],
    criteria: ["all three stated fairly", "questions and types correctly distinguished", "checked with someone holding each view", "corrections actually made"]
  },
  activities: [
    "Read and discuss how the world came into existence through the Holy Books and through science",
    "Discuss the wonders of the universe, the earth, the sun, moon and stars",
    "Debate the topic of creation as stated in the Holy Books and as described by science",
    "Write an essay on how you believe the universe was created"
  ],
  materials: ["Poster sheets", "Colouring pencils", "Pencils", "Markers", "Books on creation"],
  assessment: ["Oral and written tests", "Debate", "Essay writing", "Class work", "Quizzes"]
},

{
  grade: 6, period: "II", sem: "One", icon: "💎",
  title: "Commitment",
  subtitle: "Living for God and for others: witnessing, holiness, humility, faith and trust",
  outcomes: [
    "Learners will understand commitment, holiness, witnessing, trust and faith.",
    "Learners will understand the differences in the ceremonies practised by the Christian faith and by the Islamic faith."
  ],
  objectives: [
    "Explain living for God",
    "Define witnessing and holiness",
    "Explain living for others: humility, faith and trust",
    "Name various kinds of ceremonies"
  ],
  note: "Commitment at this level means a whole way of life: living for God through witnessing and holiness, and living for others through humility, faith and trust. Both faiths mark the stages of life with ceremonies.",
  study:[
    /* ---- course text: Semester One, Period II — Commitment (pages 51-52) ---- */
    {k:"h3", t:"Commitment — Living for God"},
    {k:"p", t:"Learners understand **commitment, holiness, witnessing, trust and faith**, and the differences in the **ceremonies practised by the Christian faith and the Islamic faith**. Commitment means giving ourselves fully to God and to others."},
    {k:"p", t:"Scripture references: the Holy Bible, John 13:1-20, Leviticus 11:45, 1 Samuel 2:2, Titus 2:3, Hebrews 12:14, Mark 1:1-9, Mark 16:16, John 4:1, Job 4:5, Psalm 125:1 and Psalm 37:3."},
    {k:"rule"},
    {k:"h3", t:"Witnessing and Holiness"},
    {k:"p", t:"**Witnessing** is telling others about God by our words and by the way we live. **Holiness** is being set apart for God — living a pure and obedient life. The Bible calls believers to *'be holy, because I am holy'* (Leviticus 11:45), and to strive for the holiness without which no one will see the Lord (Hebrews 12:14)."},
    {k:"rule"},
    {k:"h3", t:"Living for Others — Humility, Faith and Trust"},
    {k:"bul", items:["**Humility** — not thinking you are better than others; Jesus washed His disciples' feet to teach humility (John 13:1-20)", "**Faith** — trusting in God and His promises; the just shall live by faith", "**Trust** — relying on God with all your heart (Psalm 37:3; Psalm 125:1)"]},
    {k:"rule"},
    {k:"h3", t:"Ceremonies of Commitment"},
    {k:"p", t:"Commitment to God is marked by **ceremonies** — special religious services that seal our promises to God. Name the various kinds of ceremonies practised in the church and in the mosque as they relate to holiness, faith and trust:"},
    {k:"bul", items:["**Baptism and confirmation services** — entering and confirming the Christian faith", "**Outdooring (naming ceremonies)** — presenting a new child to God and the community", "**Marriage ceremonies** — a man and a woman committing to each other before God", "**The shahada and dedication in Islam** — the declaration of faith and dedication of children", "**Holy ceremonies of the mosque** — the prayers and festivals of the Islamic faith"]},
    {k:"p", t:"Learners write an essay on **holiness and trust** as it pertains to them as learners, and on the types of ceremonies practised in the church and in the mosque. Study the commitment of the Christian life and the commitment to Islam according to faith."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:["Read and discuss in class the meaning of living for God, witnessing for God, humility, faith and trust.", "Write an essay on holiness and trust as they pertain to you as a learner.", "Discuss in class the ceremonies practised in the church and in the mosque: baptism and confirmation services, outdooring, and the holy ceremonies of the faith."]}
  ],
  focus: ["Commitment", "Living for God: witnessing and holiness", "Living for others: humility, faith and trust", "Ceremonies of commitment", "Kinds of ceremonies"],
  terms: [
    { t: "witnessing", d: "showing and telling others what you believe, chiefly by how you live", x: "His fair dealing was his strongest witnessing." },
    { t: "holiness", d: "purity of life and being set apart for God", x: "Holiness shows in small daily choices." },
    { t: "humility", d: "an honest view of yourself, without pride", x: "Humility allows a leader to be corrected." },
    { t: "faith", d: "trust in God that shapes how one lives", x: "Faith held the family together through the crisis." },
    { t: "trust", d: "confident reliance on God or on another person", x: "Trust must be earned and can be lost quickly." },
    { t: "ceremony", d: "a formal act marking an important occasion", x: "A naming ceremony welcomes a new child." },
    { t: "baptism", d: "a Christian ceremony of washing marking entry into the faith", x: "The baptism was held at the riverside." },
    { t: "confirmation", d: "a Christian ceremony confirming a person's faith", x: "Confirmation followed a period of instruction." },
    { t: "naming ceremony", d: "a ceremony at which a child is formally given a name", x: "The naming ceremony was held on the seventh day." },
    { t: "integrity", d: "wholeness of character; the same in public and private", x: "Integrity is commitment tested where no one sees." }
  ],
  facts: [
    { q: "What is witnessing?", a: "Showing and telling others what you believe, chiefly by how you live." },
    { q: "What is holiness?", a: "Purity of life and being set apart for God." },
    { q: "Define humility.", a: "An honest view of yourself, without pride." },
    { q: "Name three kinds of ceremony practised in Liberia.", a: "Any three: naming ceremonies, marriage, baptism or confirmation, and funeral ceremonies." },
    { q: "What is a naming ceremony?", a: "A ceremony at which a child is formally given a name." },
    { q: "What is integrity?", a: "Wholeness of character — being the same person in public and in private." },
    { q: "Why is how a believer trades or works a form of witnessing?", a: "Because people judge a faith by the conduct of those who profess it." },
    { q: "How is trust built and how is it lost?", a: "It is built slowly by consistent reliability and lost quickly by a single serious betrayal." }
  ],
  tf: [
    { s: "Witnessing is chiefly a matter of how a person lives.", a: "true", why: "Conduct speaks louder than declaration." },
    { s: "Humility means thinking you are worthless.", a: "false", why: "Humility is an honest view of yourself, not a false low opinion." },
    { s: "Ceremonies mark important stages of life in both faiths.", a: "true", why: "Both mark birth, coming of age, marriage and death." },
    { s: "Integrity means behaving well only when others are watching.", a: "false", why: "Integrity means being the same in public and in private." },
    { s: "Trust takes a long time to build and can be lost quickly.", a: "true", why: "Consistency builds it; one serious betrayal can destroy it." },
    { s: "Holiness has nothing to do with everyday choices.", a: "false", why: "Holiness shows precisely in ordinary daily conduct." }
  ],
  apply: [
    { q: "How can a pupil witness to his faith without preaching at anybody?", a: "By telling the truth consistently, refusing to cheat, treating unpopular pupils decently and keeping his temper — conduct people notice." },
    { q: "Explain the difference between humility and low self-esteem.", a: "Humility is an accurate self-view that can still act with confidence; low self-esteem is a false and damaging belief that one has no worth." },
    { q: "Name a ceremony in your community and explain what commitment it marks.", a: "For example: a marriage ceremony marks the commitment of two people to each other and to the families joined by it." },
    { q: "A leader is caught doing privately what he condemns publicly. Which term describes the failure, and why does it matter so much?", a: "Hypocrisy, a failure of integrity; it matters because it destroys trust in him and discredits the teaching he claims to represent." },
    { q: "Describe one situation where holding to your convictions would cost you something.", a: "For example: refusing to help friends cheat in an examination might cost me their friendship, but it keeps my integrity." }
  ],
  sort: {
    title: "Living for God and living for others",
    groups: [
      { name: "Living for God", items: ["witnessing", "holiness", "regular worship", "obedience"] },
      { name: "Living for others", items: ["humility", "trustworthiness", "service", "patience"] },
      { name: "Ceremonies", items: ["naming ceremony", "marriage", "baptism or confirmation", "funeral rites"] }
    ]
  },
  compare: {
    title: "Ceremonies in the two faiths",
    caption: "Complete the table describing the ceremonies of each faith respectfully.",
    items: [
      { p: "Welcoming a child", f: "Christians hold christening or dedication; Muslims hold a naming ceremony, commonly on the seventh day." },
      { p: "Entering or confirming the faith", f: "Baptism and confirmation among Christians; instruction and public profession among Muslims." },
      { p: "Marriage", f: "Both faiths solemnise marriage before witnesses, with prayers and the consent of the parties." },
      { p: "Death", f: "Both hold funeral rites with prayer, though the customs and timing differ." },
      { p: "What all share", f: "They publicly mark commitment and bind the individual to the community." }
    ]
  },
  casestudy: {
    title: "The contractor who lost the job",
    text: "Mr Kollie's small construction firm was shortlisted for a school building contract. At the final stage, an official told him plainly that the contract would be his if he agreed to inflate the quantities and share the difference. Mr Kollie's firm badly needed the work; he had eleven employees and had not paid full salaries for two months. He asked for a night to think. The next morning he declined, in writing, and stated his reason. He lost the contract. Two of his workers left. For seven months the firm survived on small repairs. Then a mission organisation, which had heard the story from the official's own clerk, invited his firm to tender for a clinic and three staff houses, saying they had been looking for exactly one thing: a contractor who had already refused money once.",
    questions: [
      { q: "What was Mr Kollie asked to do, and what pressure was he under?", a: "He was asked to inflate quantities and share the difference; he badly needed the work and had not paid full salaries for two months." },
      { q: "What did his decision cost him in the short term?", a: "He lost the contract, two workers left, and the firm survived on small repairs for seven months." },
      { q: "How does this case illustrate witnessing and integrity?", a: "He never preached; his refusal itself became known and testified to his convictions, and integrity proved in private eventually earned public trust." }
    ]
  },
  project: {
    title: "A study of a ceremony of commitment",
    brief: "Research one ceremony of commitment practised in your community and present it.",
    steps: [
      "Choose one ceremony: naming, marriage, baptism, confirmation or another.",
      "Find out the stages of the ceremony in order.",
      "Find out what promises or commitments are made, and by whom.",
      "Ask one participant politely what the ceremony meant to them.",
      "Present your study, and note one similarity with the corresponding ceremony in the other faith."
    ],
    criteria: ["stages listed in order", "commitments accurately described", "one respectful interview", "a fair cross-faith comparison"]
  },
  activities: [
    "Read and discuss the meaning of living for God, witnessing, humility, faith and trust",
    "Write an essay on holiness and trust as they pertain to you as a learner",
    "Discuss the types of ceremonies practised in the church and in the mosque",
    "Class discussion on integrity in public and private life"
  ],
  materials: ["Poster sheets", "Colouring pencils", "Pencils", "Markers", "Related literature"],
  assessment: ["Oral and written tests", "Essay writing", "Class work", "Quizzes"]
},

{
  grade: 6, period: "III", sem: "One", icon: "🤝",
  title: "Conflict and its Resolution Process",
  subtitle: "Styles of conflict management and the mediation process",
  outcomes: [
    "Learners will apply various types of mediation skills in conflict resolution, based on non-gender stereotypes.",
    "Learners will demonstrate the ability to prevent and solve conflict."
  ],
  objectives: [
    "Define conflict",
    "Name kinds of conflict",
    "Describe styles of conflict management",
    "Identify your personal style of conflict management",
    "Apply mediation skills in resolving conflicts"
  ],
  note: "People handle conflict in different ways: some avoid, some force, some accommodate, some compromise and some collaborate. Knowing your own style, and choosing the right style for the situation, is a practical peace skill. Mediation must be free of gender stereotypes — girls and boys alike can mediate.",
  study:[
    /* ---- course text: Semester One, Period III — Conflict and its Resolution Process (page 53) ---- */
    {k:"h3", t:"Conflicts and Its Resolution Process"},
    {k:"p", t:"Learners will apply various types of **mediation skills in conflict resolution** based on non-gender stereotypes, and demonstrate the ability to **prevent and solve conflict**. Define conflict and name the kinds of conflict studied in earlier grades: physical, spiritual, emotional, family, ethnic and governmental."},
    {k:"rule"},
    {k:"h3", t:"Styles of Conflict Management"},
    {k:"p", t:"There are different **styles of conflict management**, and each person has his or her own style:"},
    {k:"bul", items:["**Avoiding** — stepping away from the conflict", "**Accommodating** — giving in to keep the peace", "**Competing** — pushing for your own way", "**Compromising** — each side gives up something", "**Collaborating** — working together to find a solution that satisfies everyone"]},
    {k:"p", t:"Identify your **personal style of conflict management** and learn when each style is appropriate."},
    {k:"rule"},
    {k:"h3", t:"Conflicts in the Bible and Quran"},
    {k:"p", t:"The Holy Books give examples of conflict and its peaceful resolution:"},
    {k:"bul", items:["**1 Kings 3:16-28** — King Solomon wisely judged the dispute between two mothers and resolved the conflict", "**Matthew 5:44** — love your enemies and pray for those who persecute you", "**Matthew 19:19 and Matthew 22:39** — love your neighbour as yourself", "**John 13:34** — love one another as Jesus loved us", "**The Holy Quran** — teachings of forgiveness, justice and reconciliation"]},
    {k:"rule"},
    {k:"h3", t:"The Mediation Process of Conflicts"},
    {k:"p", t:"**Mediation** is when a third person helps the two sides of a conflict to reach peace. The mediator listens to both sides, keeps the discussion calm and fair, and helps the parties find their own solution."},
    {k:"num", items:["**Listen** to both sides without taking sides.", "**Clarify** the problem — what each person wants and why.", "**Discuss** possible solutions calmly.", "**Agree** on a fair solution.", "**Reconcile** — forgive, and restore the relationship."]},
    {k:"p", t:"Supplementary texts: Islamic books on conflict resolution; Trauma Healing and Reconciliation; related literatures on conflicts resolution and management."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:["Research and write an essay on conflict management and its prevention.", "List the causes of various kinds of conflicts.", "Demonstrate through drama, play let or class discussion how learners can best mediate and manage conflict.", "Invite an expert guest to speak on the importance of HIV privacy in an effort to avert conflict.", "Narrate for class discussion two simple conflicts in the school or community that were resolved."]}
  ],
  focus: ["Conflict and its resolution process", "Styles of conflict management", "Conflicts in the Holy Books", "The mediation process"],
  terms: [
    { t: "conflict management", d: "the way a person handles disagreement", x: "His conflict management style was to avoid everything." },
    { t: "avoiding", d: "withdrawing from a conflict rather than addressing it", x: "Avoiding may keep the peace briefly but leaves the issue alive." },
    { t: "forcing", d: "imposing your will on the other party", x: "Forcing wins the argument and loses the relationship." },
    { t: "accommodating", d: "giving in to the other party's wishes", x: "Accommodating is right when the issue is small and the relationship matters." },
    { t: "compromising", d: "each side giving up part of what it wants", x: "They compromised and split the difference." },
    { t: "collaborating", d: "working together to find a solution that meets both needs", x: "Collaborating takes longer but the agreement holds." },
    { t: "mediation skills", d: "the abilities used to help others settle a dispute", x: "Active listening is a core mediation skill." },
    { t: "active listening", d: "listening carefully and showing that you have understood", x: "Active listening lowers the temperature of a quarrel." },
    { t: "gender stereotype", d: "a fixed unfair idea about what men or women can do", x: "It is a gender stereotype to say only men can mediate." },
    { t: "impartial", d: "not favouring either side", x: "A mediator must be impartial." }
  ],
  facts: [
    { q: "Name the five styles of conflict management.", a: "Avoiding, forcing, accommodating, compromising and collaborating." },
    { q: "What is active listening?", a: "Listening carefully and showing the speaker that you have understood." },
    { q: "What does it mean for a mediator to be impartial?", a: "That he does not favour either side." },
    { q: "Why must mediation be free of gender stereotypes?", a: "Because girls and boys, women and men, are all capable of mediating; excluding one is unfair and wastes ability." },
    { q: "When is accommodating an appropriate style?", a: "When the issue is small and preserving the relationship matters more." },
    { q: "When is collaborating the best style?", a: "When the issue matters to both sides and there is time to work out a solution that meets both needs." },
    { q: "What is the weakness of the forcing style?", a: "It may win the point but it damages the relationship and stores up resentment." },
    { q: "Name the first practical step in a mediation.", a: "Calm the parties and agree ground rules, such as no interrupting and no insults." }
  ],
  tf: [
    { s: "Avoiding a conflict always solves it.", a: "false", why: "Avoiding may postpone the quarrel, but the underlying issue remains." },
    { s: "A mediator must be impartial.", a: "true", why: "A mediator who favours one side cannot be trusted by the other." },
    { s: "Only boys can be effective mediators.", a: "false", why: "That is a gender stereotype; girls mediate just as effectively." },
    { s: "Collaborating aims at a solution that meets the needs of both sides.", a: "true", why: "That is what distinguishes it from compromise." },
    { s: "Active listening means waiting silently for your turn to speak.", a: "false", why: "Active listening means genuinely understanding and showing that you have understood." },
    { s: "Compromise involves each side giving up part of what it wants.", a: "true", why: "That is the definition of compromise." }
  ],
  apply: [
    { q: "Identify your own usual style of handling conflict and give one advantage and one danger of it.", a: "For example: I usually avoid. Advantage: I rarely make things worse in the heat of the moment. Danger: issues pile up unresolved and I am taken advantage of." },
    { q: "Two prefects both claim authority over the same duty. Which style would you use and why?", a: "Collaborating: the issue matters to both and there is time, so a clear shared division of duties can meet both their needs and serve the school." },
    { q: "Write four ground rules you would set at the start of a mediation.", a: "1. No interrupting. 2. No insults or raised voices. 3. Everything said stays confidential. 4. Each side must repeat the other's point before replying." },
    { q: "How would you handle a mediation in which one party is much more powerful than the other?", a: "Ensure the weaker party can speak safely, set strict rules against pressure, meet each side separately if needed, and refuse any agreement that is plainly coerced." },
    { q: "Give an example of a gender stereotype that could harm a mediation, and how to avoid it.", a: "Assuming a girl's account is emotional and a boy's is factual; avoid it by applying the same questions and the same standard of evidence to both." }
  ],
  sort: {
    title: "Styles of conflict management",
    groups: [
      { name: "Low concern for the relationship", items: ["forcing", "avoiding"] },
      { name: "High concern for the relationship", items: ["accommodating", "collaborating"] },
      { name: "Middle ground", items: ["compromising"] }
    ]
  },
  compare: {
    title: "When to use each style",
    caption: "Complete the table with the situation in which each style is appropriate.",
    items: [
      { p: "Avoiding", f: "When the issue is trivial, or tempers are too hot and a delay will help." },
      { p: "Forcing", f: "Rarely; only in an emergency where a quick decision is essential for safety." },
      { p: "Accommodating", f: "When the issue matters little to you and much to the other, and the relationship matters more." },
      { p: "Compromising", f: "When time is short and both sides can accept a partial gain." },
      { p: "Collaborating", f: "When the issue is important to both, trust exists and there is time to find a full solution." }
    ]
  },
  casestudy: {
    title: "The two boundary farms",
    text: "Two families in Lofa disputed the boundary of adjoining rice farms. The men of both households had already exchanged threats. The town appointed a mediation panel, and among the three members was a woman named Yatta, who had settled market disputes for years. One of the men objected, saying a woman had no business in a land matter. The chief replied that the panel had been chosen for skill. In the sessions, the two male mediators pressed for a quick split of the difference. Yatta instead asked each family, separately, what they actually needed. It emerged that one family needed the low wet corner for rice, and the other needed the dry ridge for cassava — and each had been claiming the whole strip only for fear of losing its part. The final agreement gave each what it needed, and both families signed. The man who had objected asked Yatta to mediate his brother's dispute the following year.",
    questions: [
      { q: "What objection was raised against Yatta, and how did the chief answer it?", a: "It was objected that a woman had no business in a land matter; the chief replied that the panel had been chosen for skill." },
      { q: "How did Yatta's approach differ from that of the other two mediators?", a: "They pressed for a quick compromise splitting the difference, while she asked each family separately what it actually needed." },
      { q: "Which style of conflict management produced the final agreement, and why did it work?", a: "Collaborating — by uncovering the real underlying needs, the panel found a solution that fully satisfied both sides rather than dividing the loss." }
    ]
  },
  project: {
    title: "Mediation training and simulation",
    brief: "Train as a mediator and conduct a full simulated mediation.",
    steps: [
      "Study and write out the five styles of conflict management with one example of each.",
      "In groups of five, take the roles of two disputants, two mediators and one observer, ensuring both girls and boys mediate.",
      "Run the mediation: ground rules, each side's account, identifying the real needs, options, agreement.",
      "The observer records which skills were used well and which were missing.",
      "Rotate roles so that every pupil mediates at least once, then write a personal reflection on your own style."
    ],
    criteria: ["five styles correctly explained", "mediation stages followed in order", "girls and boys both mediating", "honest personal reflection written"]
  },
  activities: [
    "Research and write an essay on conflict management and its prevention",
    "List the causes of various kinds of conflict",
    "Demonstrate through drama or class discussion how learners can best mediate conflict",
    "Narrate for class discussion two conflicts in the school or community that were resolved"
  ],
  materials: ["Poster sheets", "Colouring pencils", "Pencils", "Markers", "Charts on conflict resolution"],
  assessment: ["Oral and written tests", "Role play and simulation", "Essay", "Class work", "Quizzes"]
},

{
  grade: 6, period: "IV", sem: "Two", icon: "📿",
  title: "Worship and Offering",
  subtitle: "Forms of worship, Al-Fatiha, structures, symbols and gestures",
  outcomes: [
    "Learners are able to describe the various types of worship in different churches and mosques, and know the difference between Al-Fatiha prayers for Muslims — with their structures, symbols and gestures — and the worship of the Christian faith.",
    "Learners will know forms of worship, the giving of offerings and tithes, songs of praise and scripture reading in different churches according to denomination."
  ],
  objectives: [
    "State the importance of the use of the Holy Books in worship",
    "Recite prayers appropriate to your faith",
    "Name some scriptures, symbols and gestures used in religious worship"
  ],
  note: "Worship uses words, actions and symbols. This unit looks closely at the structures, symbols and gestures of worship in both faiths, and at how denominations within Christianity differ from one another.",
  study:[
    /* ---- course text: Semester Two, Period IV — Worship and Offering (pages 54-55) ---- */
    {k:"h3", t:"Forms of Worship"},
    {k:"p", t:"Learners are able to describe various **types of worship in different churches and mosques**, and know the difference between the **Al-Fatiha prayers for Muslims**, the structures, symbols and gestures for worship, from that of the Christian faith. Learners will know forms of worship, giving of offering and tithes, songs of praise and scripture reading in different churches according to denomination."},
    {k:"rule"},
    {k:"h3", t:"Al-Fatiha Prayers, Structures, Symbols and Gestures"},
    {k:"p", t:"The **Al-Fatiha** is the opening chapter of the Holy Quran, recited by Muslims in every prayer. Worship in the mosque uses particular **structures, symbols and gestures**: the **dome** and **minaret** of the mosque, facing the direction of Mecca, and gestures of standing, bowing and prostrating in prayer."},
    {k:"bul", items:["**Muslim worship** — the Al-Fatiha prayer, the call to prayer, and prostration before God", "**Christian worship** — hymns, prayers, scripture reading, the sermon, baptism and the Lord's Supper", "**Structures and symbols** — the cross and the church building; the dome, crescent and mosque", "**Gestures** — kneeling and standing in prayer, raising hands in praise, prostration in the mosque"]},
    {k:"p", t:"Scripture references: the Holy Bible, Exodus 4:31, 1 Corinthians 16:29, John 4:24 (worship in spirit and truth), Revelation 5:14, Revelation 7:11, Psalm 100:1-2 and Psalm 107:1; the Holy Quran 73:1-5 and 29:45, and the Al-Fatiha (the Opening), the threshold of the Quran."},
    {k:"rule"},
    {k:"h3", t:"Use of Holy Books in Worship"},
    {k:"p", t:"Learners state the **importance of the use of the Holy Books in worship**: the Bible is read, taught and preached in Christian worship; the Quran is recited and studied in Muslim worship. Read selected prayers in the Holy Bible and the Holy Quran."},
    {k:"rule"},
    {k:"h3", t:"Id Prayers"},
    {k:"p", t:"Learners recite and learn the **Id prayers** — the special prayers Muslims offer at the two festivals of Eid (Eid al-Fitr and Eid al-Adha), when the community gathers to thank God, pray and share with the poor."},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:["Tell of the experiences you had worshipping in different churches and mosques.", "Demonstrate forms of worship learned in various places of worship through class participation.", "Read selected prayers in the Holy Bible and the Holy Quran.", "Draw various forms of people at worship in the church and mosque you visited.", "Make oral and written reports of four paragraphs on your recent visit and worship in a church."]}
  ],
  focus: ["Forms of worship", "Al-Fatiha prayers", "Structures, symbols and gestures", "The use of the Holy Books in worship", "Differences between denominations"],
  terms: [
    { t: "symbol", d: "an object or sign that stands for a deeper meaning", x: "The crescent and the cross are religious symbols." },
    { t: "gesture", d: "a movement of the body expressing meaning in worship", x: "Bowing is a gesture of reverence." },
    { t: "denomination", d: "a distinct group within a wider faith", x: "Baptists and Methodists are Christian denominations." },
    { t: "liturgy", d: "the set order and words of a service", x: "Some denominations follow a written liturgy." },
    { t: "recitation", d: "the reciting aloud of sacred text from memory", x: "Recitation of the Quran is highly valued." },
    { t: "Al-Fatiha", d: "the opening surah of the Holy Quran, recited in every Muslim prayer", x: "Al-Fatiha opens the daily prayers." },
    { t: "minaret", d: "the tower of a mosque from which the call to prayer is given", x: "The azan is called from the minaret." },
    { t: "pulpit", d: "the raised stand from which a sermon is preached", x: "He stepped into the pulpit to preach." },
    { t: "tithe", d: "a tenth of one's income given to God", x: "Tithes support the work of the congregation." },
    { t: "sanctuary", d: "the part of a building set apart for worship", x: "The sanctuary was quiet before the service." }
  ],
  facts: [
    { q: "What is a religious symbol?", a: "An object or sign that stands for a deeper meaning." },
    { q: "What is Al-Fatiha?", a: "The opening surah of the Holy Quran, recited in every Muslim prayer." },
    { q: "What is a denomination?", a: "A distinct group within a wider faith." },
    { q: "Name two Christian denominations found in Liberia.", a: "Any two, for example: Baptist, Methodist, Catholic, Pentecostal and Lutheran." },
    { q: "What is a minaret?", a: "The tower of a mosque from which the call to prayer is given." },
    { q: "Name two gestures used in worship.", a: "Any two: bowing, kneeling, prostrating, raising the hands and standing." },
    { q: "What is liturgy?", a: "The set order and words of a service." },
    { q: "Why are the Holy Books central in worship?", a: "Because they are read, recited and preached from, and they give the teaching on which the worship rests." }
  ],
  tf: [
    { s: "Al-Fatiha is recited in every Muslim prayer.", a: "true", why: "It is the opening surah used in each prayer." },
    { s: "All Christian denominations worship in exactly the same way.", a: "false", why: "Denominations differ in liturgy, music and order of service." },
    { s: "A minaret is part of a mosque.", a: "true", why: "It is the tower from which the call to prayer is given." },
    { s: "Gestures have no meaning in worship.", a: "false", why: "Gestures such as bowing and kneeling express reverence and humility." },
    { s: "The Holy Books are central to worship in both faiths.", a: "true", why: "Both faiths read, recite and preach from their Holy Book." },
    { s: "It is respectful to imitate mockingly the gestures of another faith.", a: "false", why: "Mockery of any faith's worship is disrespectful and forbidden in this course." }
  ],
  apply: [
    { q: "Explain the meaning of two gestures used in worship.", a: "Kneeling or prostrating expresses humility and submission before God; raising the hands expresses praise and dependence." },
    { q: "Two Christian denominations worship differently. Does that make one wrong? Discuss.", a: "Differences of order, music and style reflect tradition and culture rather than truth or falsehood; the essentials of worship remain the same." },
    { q: "You are asked to design a respectful school worship space for pupils of both faiths. What would you provide?", a: "Separate quiet spaces or times, clean water for washing, a place for shoes, seating that can be cleared for prayer, and no imagery imposed on either group." },
    { q: "Why do believers value reciting sacred text from memory?", a: "It keeps the words available at all times, deepens understanding through repetition and preserves the text accurately." },
    { q: "A visiting pupil does not know the gestures of your service. How do you help him?", a: "Quietly explain beforehand, tell him he may sit and observe without joining, and never single him out during the service." }
  ],
  sort: {
    title: "Symbols, gestures and structures",
    groups: [
      { name: "Structures", items: ["minaret", "pulpit", "sanctuary", "prayer hall"] },
      { name: "Gestures", items: ["bowing", "kneeling", "prostrating", "raising the hands"] },
      { name: "Acts of worship", items: ["recitation", "hymn singing", "scripture reading", "giving of tithes"] }
    ]
  },
  compare: {
    title: "Structures, symbols and gestures in the two faiths",
    caption: "Complete the table accurately and respectfully.",
    items: [
      { p: "Building features", f: "Mosque: minaret, prayer hall, washing area, niche indicating direction. Church: sanctuary, pulpit, seating, sometimes a choir area." },
      { p: "Use of the Holy Book", f: "Recitation of the Quran in the mosque; reading and preaching from the Bible in the church." },
      { p: "Common gestures", f: "Standing, bowing, kneeling or prostrating, and raising the hands — all expressing reverence." },
      { p: "Giving", f: "Tithes and offerings in the church; prescribed charity and offerings in the mosque." },
      { p: "Variation within each faith", f: "Christian denominations differ in liturgy and music; Muslim practice also shows regional variation." }
    ]
  },
  casestudy: {
    title: "One compound, two calls",
    text: "A boarding school in Bong County houses pupils of both faiths in one compound. For years there was friction: the Christian evening service overlapped with the Muslim sunset prayer, and each group complained about the noise of the other. The matter reached the student council. Rather than ruling in favour of either group, the council collected the actual prayer times for a whole month and mapped them against the service schedule. They found the true clash lasted eleven minutes. They proposed moving the evening service back by fifteen minutes and siting the two spaces at opposite ends of the compound. They also proposed a shared rule: during either group's worship, nobody plays football on the field between them. The plan was adopted. A visiting inspector later asked the principal how the school had solved a problem that defeated larger institutions. He said, “The students measured the problem before they argued about it.”",
    questions: [
      { q: "What was the source of friction at the school?", a: "The Christian evening service overlapped with the Muslim sunset prayer, and each group complained about the other's noise." },
      { q: "How did the student council approach the problem?", a: "They collected the actual prayer times for a month, mapped them against the service schedule, and found the real clash was only eleven minutes." },
      { q: "What made their solution work?", a: "They dealt with facts rather than accusations, made a small practical adjustment, separated the spaces and adopted a shared rule protecting both groups' worship." }
    ]
  },
  project: {
    title: "A guide to worship in my community",
    brief: "Produce an illustrated guide to the forms of worship practised in your community.",
    steps: [
      "List the places of worship in your community and the faith or denomination of each.",
      "For two of them, describe the order of worship and two symbols or gestures used.",
      "Draw and label one structure, for example a minaret or a pulpit.",
      "Interview one worshipper from each, asking politely what a particular gesture means to them.",
      "Compile the guide with a foreword stating that it is written to promote understanding, not comparison of worth."
    ],
    criteria: ["places accurately listed", "two orders of worship described", "one labelled drawing", "respectful foreword and interviews"]
  },
  activities: [
    "Learners tell of their experiences worshipping in different churches or mosques",
    "Demonstrate forms of worship through class participation",
    "Read selected prayers in the Holy Bible and the Holy Quran",
    "Draw various forms of people at worship",
    "Write a report of four paragraphs on a recent visit and worship"
  ],
  materials: ["Poster sheets", "Colouring pencils", "Pencils", "Markers", "Prayer books of both faiths"],
  assessment: ["Oral and written tests", "Reading", "Written report", "Class work", "Quizzes"]
},

{
  grade: 6, period: "V", sem: "Two", icon: "📜",
  title: "Religious Personalities",
  subtitle: "Jesus in the four gospels; prophets and kings; pioneers in Liberia",
  outcomes: [
    "Learners are able to analyse the birth, works, death, resurrection and ascension of Jesus Christ in the four gospels and justify their similarities.",
    "Learners are able to name prophets, kings and the Hadith of the Islamic faith.",
    "Learners are able to name and discuss Christian pioneers and their contribution to the educational system of Liberia."
  ],
  objectives: [
    "Discuss Jesus Christ in the four gospels",
    "List the names of some prophets and kings in the Quran and the Hadith",
    "Name some Christian pioneers in Liberia",
    "Explain about the mother of Jesus Christ",
    "Explain about some pioneers in the Muslim faith"
  ],
  note: "This unit studies the sources: the four gospels for the life of Jesus, and the Quran and Hadith for the prophets and teaching of Islam. It then traces the pioneers of both faiths who shaped education in Liberia.",
  study:[
    /* ---- course text: Semester Two, Period V — Religious Personalities (pages 56-57) ---- */
    {k:"h3", t:"Jesus Christ in the Four Gospels"},
    {k:"p", t:"Learners are able to analyze the **birth, works, death, resurrection and ascension of Jesus Christ in the four Gospels** — Matthew, Mark, Luke and John — and justify their similarities. The four Gospels agree on the great events of Jesus' life: His virgin birth in Bethlehem, His teaching and miracles, His death on the cross, His resurrection on the third day and His ascension to heaven. Write a two-page report on the life of Jesus Christ."},
    {k:"rule"},
    {k:"h3", t:"Mary, the Mother of Jesus Christ"},
    {k:"p", t:"Learners state **how Mary became the Mother of Jesus**: the angel announced to Mary that she would conceive and bear a son by the power of the Holy Spirit, and she was told to name Him Jesus, for He would save His people from their sins (Luke 1:26-38; Matthew 1:18-25). Muslims also honour Mary (Maryam) as the pure mother of the prophet Jesus."},
    {k:"rule"},
    {k:"h3", t:"Christian Pioneers in Liberia"},
    {k:"p", t:"Learners name and discuss **Christian pioneers and their contribution to the educational system of Liberia** — missionaries and churches that built the first schools, trained teachers and opened the way for learning in the country. Research the role of the Christian churches in the promotion and development of education in Liberia."},
    {k:"rule"},
    {k:"h3", t:"Some Prophets and Kings in the Quran and Hadith (for Muslims)"},
    {k:"p", t:"Learners are able to name **Prophets, Kings and the Hadith of the Islamic Faith**: the Quran tells of the prophets of God — Adam, Nuh, Ibrahim, Musa, Isa and Mohammed (peace be upon them all) — and of kings and rulers; the **Hadith** are the recorded sayings and deeds of Prophet Mohammed, which guide Muslims alongside the Quran."},
    {k:"bul", items:["**Prophets in the Quran** — Adam, Nuh (Noah), Ibrahim (Abraham), Musa (Moses), Isa (Jesus), Mohammed (peace be upon them)", "**Kings** — such as the rulers mentioned in the stories of the Quran", "**The Hadith** — the collected teachings and example of Prophet Mohammed", "**Pioneers in the Muslim Faith** — the early believers who spread the teaching of Islam"]},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:["Research the birth, works, death, resurrection and ascension of Jesus Christ.", "Write a two-page report on the life of Jesus Christ.", "Research and have a class discussion on the works of Islamic pioneers, prophets, kings and the Hadith.", "Research the role of the Christian churches in the promotion and development of education in Liberia."]}
  ],
  focus: ["Jesus Christ in the four gospels", "Mary, the mother of Jesus Christ", "Christian pioneers in Liberia", "Prophets and kings in the Quran and Hadith", "Pioneers in the Muslim faith"],
  terms: [
    { t: "gospel", d: "one of the four accounts of the life and teaching of Jesus", x: "Each gospel gives its own perspective." },
    { t: "Hadith", d: "the recorded sayings and practice of Prophet Mohammed", x: "The Hadith supplements the teaching of the Quran." },
    { t: "ascension", d: "the taking up of Jesus into heaven, in Christian teaching", x: "The ascension is recorded at the end of the gospel accounts." },
    { t: "prophet", d: "one chosen by God to deliver His message", x: "Both faiths honour a line of prophets." },
    { t: "pioneer", d: "one of the first to establish something in a place", x: "The pioneers founded the first schools." },
    { t: "source", d: "the original record from which knowledge is drawn", x: "A historian checks the source before believing a claim." },
    { t: "tradition", d: "beliefs and practices handed down over generations", x: "Tradition preserved the sayings before they were written." },
    { t: "corroborate", d: "to confirm by independent evidence", x: "Two gospels corroborate the account." },
    { t: "legacy", d: "what a person leaves behind for later generations", x: "Their legacy is the school system." },
    { t: "scholar", d: "a person of deep learning in a subject or faith", x: "Muslim scholars carried learning across West Africa." }
  ],
  facts: [
    { q: "How many gospels record the life of Jesus, and what are they called?", a: "Four gospels — Matthew, Mark, Luke and John." },
    { q: "What is the Hadith?", a: "The recorded sayings and practice of Prophet Mohammed." },
    { q: "Who was the mother of Jesus?", a: "Mary." },
    { q: "What is meant by the ascension?", a: "The taking up of Jesus into heaven, according to Christian teaching." },
    { q: "Name two contributions of religious pioneers to Liberia.", a: "Founding schools and clinics; also training teachers and translating written materials." },
    { q: "What does it mean to corroborate an account?", a: "To confirm it by independent evidence." },
    { q: "Why do historians check sources?", a: "To be sure that a claim rests on genuine evidence rather than rumour." },
    { q: "Name one way scholars spread Islamic learning in West Africa.", a: "Through travelling scholars and trade routes, and by founding centres of Quranic learning." }
  ],
  tf: [
    { s: "There are four gospels in the New Testament.", a: "true", why: "They are Matthew, Mark, Luke and John." },
    { s: "The Hadith records the sayings and practice of Prophet Mohammed.", a: "true", why: "That is what the Hadith is." },
    { s: "Religious bodies played no part in founding schools in Liberia.", a: "false", why: "Churches and Islamic scholars founded many early schools." },
    { s: "To corroborate means to contradict.", a: "false", why: "To corroborate means to confirm by independent evidence." },
    { s: "Studying the sources helps prevent false claims about a faith.", a: "true", why: "Checking the original record guards against rumour and distortion." },
    { s: "Mary was the mother of Jesus.", a: "true", why: "Both the Bible and the Quran name Mary as the mother of Jesus." }
  ],
  apply: [
    { q: "Why is it valuable to have four separate gospel accounts rather than one?", a: "Independent accounts corroborate each other, each adds detail and perspective, and agreement between them strengthens the record." },
    { q: "How would you check whether a claim made about another faith is accurate?", a: "Go to that faith's own sources or ask a knowledgeable adherent, rather than relying on rumour or hostile reports." },
    { q: "Name a contribution of religious pioneers to education in Liberia and assess its lasting effect.", a: "Mission and Quranic schools brought literacy to many communities; their lasting effect is a network of schools and generations of trained teachers." },
    { q: "What qualities made the pioneers of both faiths effective?", a: "Perseverance, willingness to live simply among the people, practical service such as teaching and healing, and long-term commitment." },
    { q: "What legacy would you want to leave in your community?", a: "For example: a functioning school library, or a habit of peaceful dispute settlement that outlasts me." }
  ],
  sort: {
    title: "Sources and personalities of the two faiths",
    groups: [
      { name: "Christian sources and figures", items: ["the four gospels", "Mary", "the apostles", "mission schools"] },
      { name: "Muslim sources and figures", items: ["the Holy Quran", "the Hadith", "prophets and kings", "Quranic schools"] },
      { name: "Shared in Liberia", items: ["founding of schools", "clinics", "care for orphans", "peace mediation"] }
    ]
  },
  compare: {
    title: "The sources of each faith",
    caption: "Complete the table describing the sources and their use.",
    items: [
      { p: "Christian primary source", f: "The Holy Bible, especially the four gospels for the life and teaching of Jesus." },
      { p: "Muslim primary source", f: "The Holy Quran, supplemented by the Hadith recording the sayings and practice of the Prophet." },
      { p: "Why sources matter", f: "They allow claims to be checked, guard against distortion and preserve teaching accurately across generations." },
      { p: "Contribution in Liberia", f: "Both traditions founded schools and centres of learning that shaped the country's education." }
    ]
  },
  casestudy: {
    title: "The register in the vestry",
    text: "A Grade Six class in Harper was asked to find out when their town's first school opened. Everyone repeated the same date, which they had heard from an uncle. The teacher sent them to check. In the vestry of the old church they found a handwritten register listing pupils, with the earliest entry four years before the date everyone had quoted. In the mosque, an elderly teacher produced a worn notebook recording Quranic classes held under a mango tree in the same period, with the names of nineteen boys. Neither record had ever been compared with the other. The pupils photographed both, wrote them up side by side, and presented them at the town's founding anniversary. Two old men in the audience recognised their own fathers' names, one in each book.",
    questions: [
      { q: "What did the pupils discover about the date everyone had quoted?", a: "The church register showed the earliest entry four years before the commonly quoted date." },
      { q: "What second source did they find, and where?", a: "A worn notebook in the mosque recording Quranic classes held under a mango tree, listing nineteen boys." },
      { q: "What does this case teach about the use of sources in studying religious history?", a: "That original records correct rumour, that more than one community's records must be consulted, and that comparing sources gives a fuller and fairer history." }
    ]
  },
  project: {
    title: "Pioneers of my community",
    brief: "Research the religious pioneers who contributed to education or health in your community.",
    steps: [
      "Identify one Christian and one Muslim institution in your area, such as a school, clinic or centre of learning.",
      "Find out when and by whom each was founded, using a record or a knowledgeable elder.",
      "Write three contributions of each to the community.",
      "Where accounts differ, note the difference honestly instead of choosing one.",
      "Present a combined report and give a copy to your school."
    ],
    criteria: ["both faiths researched", "founders and dates sourced", "three contributions each", "differences reported honestly"]
  },
  activities: [
    "Research the birth, works, death, resurrection and ascension of Jesus Christ",
    "Write a two-page report on the life of Jesus Christ",
    "Research and hold class discussion on Islamic pioneers, prophets, kings and the Hadith",
    "Research the role of the churches and Islamic scholars in Liberian education"
  ],
  materials: ["Books", "Related religious literature", "Poster sheets", "Markers", "Pens"],
  assessment: ["Oral and written tests", "Reading", "Research report", "Class presentation"]
},

{
  grade: 6, period: "VI", sem: "Two", icon: "♾️",
  title: "Death and Hereafter",
  subtitle: "Eternal life, resurrection, judgment and reincarnation",
  outcomes: [
    "Learners are able to give the differences between eternal life, resurrection, judgment and reincarnation as they relate to the end of man in death."
  ],
  objectives: [
    "Define eternal life, resurrection, judgment and reincarnation",
    "Explain eternal life, resurrection, judgment and reincarnation",
    "Discuss traditional beliefs about reincarnation",
    "Give reasons for the teaching that the dead will be judged"
  ],
  note: "This final unit distinguishes four ideas often confused: eternal life, resurrection, judgment and reincarnation. Pupils learn what each means, which faiths hold which, and how to discuss traditional beliefs respectfully.",
  study:[
    /* ---- course text: Semester Two, Period VI — Death and Hereafter (pages 58-59) ---- */
    {k:"h3", t:"Eternal Life"},
    {k:"p", t:"**Eternal life** is the endless life with God that believers receive — life that does not end at physical death. Both the Bible and the Quran teach that the soul lives on, and that the faithful will enjoy everlasting life with God. Scripture references: the Holy Bible, John 5:29, Acts 24:15 and Revelation 20:5."},
    {k:"rule"},
    {k:"h3", t:"Resurrection"},
    {k:"p", t:"**Resurrection** is the rising of the dead back to life on the last day. Jesus Christ rose from the dead (Matthew 28:1-10; Mark 16:1-7), and His resurrection is the promise that the dead will also be raised. Scripture references: the Holy Bible, John 5:29 and Acts 24:15."},
    {k:"rule"},
    {k:"h3", t:"Judgment"},
    {k:"p", t:"**Judgment** is God's final judging of every person. The dead will be judged according to what they did: some are sent to **hell** and others to **heaven**. Scripture references: the Holy Bible, Romans 14:10 (we will all stand before God's judgment seat) and Revelation 20:5. Give reasons why the dead will be judged, some sent to hell while others go to heaven."},
    {k:"rule"},
    {k:"h3", t:"Reincarnation"},
    {k:"p", t:"**Reincarnation** is the belief that the soul is reborn into a new body after death, living again on earth. This is a **traditional belief** in some African communities. Learners discuss the **traditional beliefs on reincarnation of man** and compare them with the teaching of the Holy Books: the Bible and the Quran teach resurrection and judgment, not rebirth into another body."},
    {k:"table", head:["Teaching","What it means","Source"], rows:[["Eternal life","Life with God that never ends","Holy Bible; Holy Quran"],["Resurrection","The dead are raised to life again","Matthew 28:1-10; Mark 16:1-7"],["Judgment","God judges everyone; heaven or hell","Romans 14:10; Revelation 20:5"],["Reincarnation","Rebirth of the soul in a new body (traditional belief)","African traditional beliefs"]]},
    {k:"rule"},
    {k:"h3", t:"Assignment"},
    {k:"num", items:["Research, write and hold class discussions on eternal life, resurrection, judgment and reincarnation.", "Discuss the traditional beliefs on the reincarnation of man.", "Give reasons why the dead will be judged, some sent to hell while others go to heaven.", "Visit a place of worship, interview a pastor or imam, and report on resurrection, judgment and reincarnation."]}
  ],
  focus: ["Eternal life", "Resurrection", "Judgment", "Reincarnation", "Traditional beliefs"],
  terms: [
    { t: "eternal life", d: "life with God that never ends", x: "Christians speak of eternal life as God's gift." },
    { t: "resurrection", d: "the raising of the dead to life again", x: "Both faiths teach a resurrection of the dead." },
    { t: "judgment", d: "God's righteous assessment of each person's life", x: "The Day of Judgment is taught in both Holy Books." },
    { t: "reincarnation", d: "the belief that a soul is reborn into another body", x: "Reincarnation is held in some traditional and eastern beliefs." },
    { t: "immortality", d: "the state of never dying", x: "Believers speak of the immortality of the soul." },
    { t: "accountability", d: "having to answer for one's own deeds", x: "Judgment rests on personal accountability." },
    { t: "traditional belief", d: "a belief handed down within a local culture", x: "Some traditional beliefs speak of ancestors returning." },
    { t: "doctrine", d: "a formally taught belief of a faith", x: "Resurrection is a doctrine of both faiths." },
    { t: "hereafter", d: "existence after death", x: "The Quran speaks often of the hereafter." },
    { t: "eulogy", d: "a speech praising someone who has died", x: "His eulogy recalled a life of service." }
  ],
  facts: [
    { q: "What is eternal life?", a: "Life with God that never ends." },
    { q: "What is resurrection?", a: "The raising of the dead to life again." },
    { q: "What is judgment?", a: "God's righteous assessment of each person's life." },
    { q: "What is reincarnation?", a: "The belief that a soul is reborn into another body." },
    { q: "Which of the four is not taught by Christianity or Islam?", a: "Reincarnation; both faiths teach resurrection and judgment instead." },
    { q: "What is accountability?", a: "Having to answer for one's own deeds." },
    { q: "Name one reason given for the teaching of judgment.", a: "That justice requires wrongs unpunished in this life to be answered for, and good unrewarded to be recognised." },
    { q: "How should a pupil discuss a traditional belief he does not share?", a: "Accurately and respectfully, stating it as its holders state it before giving his own view." }
  ],
  tf: [
    { s: "Resurrection means the raising of the dead to life again.", a: "true", why: "That is the definition of resurrection." },
    { s: "Reincarnation and resurrection mean the same thing.", a: "false", why: "Reincarnation is rebirth into another body; resurrection is the raising of the dead person." },
    { s: "Both Christianity and Islam teach a day of judgment.", a: "true", why: "Judgment is a doctrine in both faiths." },
    { s: "Accountability means someone else answers for your deeds.", a: "false", why: "Accountability means each person answers for his own deeds." },
    { s: "It is acceptable to ridicule a traditional belief in class.", a: "false", why: "Beliefs must be stated accurately and discussed respectfully." },
    { s: "Eternal life means life with God that never ends.", a: "true", why: "That is how the term is defined in this unit." }
  ],
  apply: [
    { q: "Explain clearly the difference between resurrection and reincarnation.", a: "Resurrection is the raising of the same person to life again, keeping his identity; reincarnation is the soul being reborn into a different body and life, without that identity continuing." },
    { q: "Why do both faiths connect judgment with justice?", a: "Because much wrongdoing goes unpunished and much goodness unrewarded in this life; judgment affirms that nothing is finally overlooked." },
    { q: "How does belief in accountability affect the way a person in authority behaves?", a: "Knowing he must answer for his deeds, he is less likely to abuse power, take bribes or oppress those who cannot resist him." },
    { q: "A classmate's family holds a traditional belief about ancestors. How do you discuss it respectfully while holding your own view?", a: "State his belief accurately first, acknowledge what it values such as honouring ancestors, then explain my own view without ridicule and let him reply." },
    { q: "Write two sentences you would want said in your own eulogy, and one habit you must build now.", a: "For example: that I told the truth when it cost me, and that I helped people with no power to repay me; the habit to build now is honesty in small things." }
  ],
  sort: {
    title: "Four ideas about the end of life",
    groups: [
      { name: "Taught in both Christianity and Islam", items: ["resurrection", "judgment", "the hereafter", "accountability"] },
      { name: "Not taught in either", items: ["reincarnation"] },
      { name: "Terms of definition", items: ["eternal life", "immortality", "doctrine"] }
    ]
  },
  compare: {
    title: "Distinguishing the four ideas",
    caption: "Complete the table giving the meaning and who holds each.",
    items: [
      { p: "Eternal life", f: "Unending life with God; taught in both Christianity and Islam as the reward of the faithful." },
      { p: "Resurrection", f: "The raising of the dead person to life again with his identity; a doctrine of both faiths." },
      { p: "Judgment", f: "God's righteous assessment of each life; taught in both faiths and connected with justice." },
      { p: "Reincarnation", f: "Rebirth of the soul into another body; found in some traditional and eastern beliefs, not taught by either faith studied." }
    ]
  },
  casestudy: {
    title: "Three answers at one graveside",
    text: "At the burial of a respected teacher in Kakata, three people spoke. The pastor spoke of resurrection and eternal life, and said the teacher would be raised. The imam, invited by the family, spoke of the hereafter and of a judgment in which the teacher's forty years of patient work with poor children would not be forgotten. An old man of the town then rose and spoke of the ancestors, and said the teacher had now joined those who watch over the town. Afterwards, a Grade Six pupil asked her father which of the three was right. Her father said, “They do not all agree, and you will have to decide what you believe. But notice what all three did today: not one of them insulted the others, and all three praised the same forty years.”",
    questions: [
      { q: "What did each of the three speakers say about the teacher's death?", a: "The pastor spoke of resurrection and eternal life, the imam of the hereafter and judgment, and the old man of joining the ancestors who watch over the town." },
      { q: "Which of these beliefs is not taught by either Christianity or Islam?", a: "The traditional belief that the dead join the ancestors as watchers, which relates to traditional rather than scriptural teaching." },
      { q: "What point was the father making to his daughter?", a: "That she must think and decide for herself what she believes, but that people who disagree deeply can still speak without insult and honour the same good life." }
    ]
  },
  project: {
    title: "A comparative study of beliefs about the hereafter",
    brief: "Produce a careful comparative study of beliefs about what follows death.",
    steps: [
      "Rule a chart with four columns: eternal life, resurrection, judgment, reincarnation.",
      "In each column write the definition and which faith or tradition holds it.",
      "Interview one adult of each of two different faiths, asking what their faith teaches about the hereafter.",
      "Write a paragraph on how belief about the hereafter affects how people live now.",
      "Present your study, stating each belief as its own adherents would state it."
    ],
    criteria: ["four terms accurately defined", "two respectful interviews", "paragraph on practical effect", "each belief fairly represented"]
  },
  activities: [
    "Research, write and hold class discussions on eternal life, resurrection, judgment and reincarnation",
    "Discuss traditional beliefs on reincarnation",
    "Give reasons for the teaching that the dead will be judged",
    "Interview a pastor or imam and report on resurrection and judgment"
  ],
  materials: ["Posters", "Colouring pencils", "Pencils", "Markers", "Related literature"],
  assessment: ["Oral and written tests", "Reading", "Writing", "Class discussion", "Quizzes"]
}

];

/* General introduction and objectives, from the syllabus front matter. */
const RM_GENERAL = {
  intro: "The Religious and Moral Education syllabus provides learners with the knowledge of coping with moral and ethical issues involving principles such as tolerance, responsibility, honesty, justice and fairness.",
  objectives: [
    "Comprehension of religion's role to mankind",
    "Prioritise the concept of reconciliation in daily interactions",
    "Utilise multi-religious standpoints in addressing issues of life",
    "Demonstrate stewardship of family, time, expertise and the physical environment"
  ],
  approach: "A learner-centered approach is emphasised in this curriculum, based on the firm belief that learning becomes more permanent, meaningful and exciting when learners themselves take ownership of the learning process. Inclusive and differentiated learning is used throughout: individual seat work or work in mixed groups according to gender, learning abilities and styles."
};
