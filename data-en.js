/* Curriculum data — Republic of Liberia, ENGLISH, Grades 1–9
   Derived from the "English 1-6" curriculum guide (129 pp.) and the
   "English 7-9" guide (32 pp.), 6 periods per grade. Unlike Social Studies and
   General Science, Junior High English lives in this one file: there is no
   data-en79.js.

   Every unit carries a `study[]` block list — the course text of the guide,
   rendered verbatim on the Study Notes page. `**bold**` marks the key terms;
   table cells take no markup because the renderer escapes them, and example
   sentences are quoted rather than italicised for the same reason (only
   `**bold**` is converted).

   English is a SKILLS subject, so each topic carries skill sets rather than a
   single bilingual word list:
     words[]    {w, s(yllables), d(efinition), x(example sentence)}
     phonics[]  {p(attern), label, words[]}
     grammar[]  {q, a, why}      fill-in / correct-the-sentence items
     pairs[]    {a, b, kind}     synonym | antonym | homophone | contraction | plural
     passage    {title, text, qs:[{q,a}]}
*/

const EN_CURRICULUM = [
/* ================= GRADE 1 ================= */
{
  grade:1, period:"I", sem:"One", icon:"🔤",
  title:"Reading & Comprehension · Greetings, Nouns, Alphabet",
  subtitle:"Letter sounds, VC & CVC words, greetings and singular nouns",
  outcomes:[
    "Demonstrate letter/sound correspondence to decode and read words fluently",
    "Participate in conversation and in small- and whole-group discussions",
    "Use fine motor skills to control writing tools",
    "Demonstrate knowledge of sight words for improved spelling and writing"
  ],
  objectives:[
    "Identify and say the name and sound for each letter of the alphabet",
    "Orally blend onsets and rimes to read VC and CVC words",
    "Read short simple sentences and stories containing VC and CVC words",
    "Exchange greetings and give a brief synopsis of themselves",
    "Identify personal pronouns I, my, your, you, our and singular nouns",
    "Correctly form lower-case manuscript letters"
  ],
  note:"A <b>CVC word</b> has consonant–vowel–consonant: c-a-t, p-i-g, b-u-s. A <b>VC word</b> has just vowel–consonant: at, in, up. Sound each letter, then blend them together.",
  study:[
    /* ---- course text: Semester One, Period I (guide pp. 2-6) ---- */
    {k:"h3", t:"Reading and Listening: the Alphabet"},
    {k:"p", t:"The English alphabet has **26 letters**. We know each letter by its **name** and by the **sound** it makes. The names are A, B, C … Z; the sounds are what the letters build inside words – b says /b/ in bat, m says /m/ in mat."},
    {k:"p", t:"Letters fall into two families:"},
    {k:"bul", items:["**Vowels** – a, e, i, o, u (and sometimes y). Every syllable must have a vowel sound.","**Consonants** – the other 21 letters. They begin and end most words we read in Class One."]},
    {k:"p", t:"**Letter-sound knowledge** is the power to look at a letter and give its sound at once. It is the key that opens reading: when you know the sounds, you can read words you have never seen before."},
    {k:"rule"},
    {k:"h3", t:"Onsets and Rimes: Word Families"},
    {k:"p", t:"A **syllable** is divided into two parts. The **onset** is the sound or letters that come before the vowel – the c in cat. The **rime** (or word family) is the vowel and the letters that follow it – the -at in cat."},
    {k:"table", head:["Onset","Rime (word family)","Words we build"], rows:[
      ["c, h, m, r, b","-at","cat, hat, mat, rat, bat, sat"],
      ["p, b, d, f, w","-ig","pig, big, dig, fig, wig"],
      ["s, r, f, b","-un","sun, run, fun, bun"],
      ["m, b","-an","man, ban"]
    ]},
    {k:"p", t:"To **blend** is to say the sounds one after another quickly until they run together: /c/ – /a/ – /t/ makes cat. To **segment** is to break the word back into its sounds. Blend to read; segment to spell."},
    {k:"rule"},
    {k:"h3", t:"VC and CVC Words"},
    {k:"bul", items:["A **VC word** is a vowel followed by a consonant: at, in, up, on, it, am.","A **CVC word** is a consonant, a vowel, then a consonant: cat, pig, bus, cup, bed, box.","In a short CVC word the vowel is **short**: /ă/ in cat, /ĕ/ in bed, /ĭ/ in pig, /ŏ/ in box, /ŭ/ in bus."]},
    {k:"p", t:"Read and check each word: the cat sat. The pig ran. Give me the cup. When a word is read wrong, go back, sound it again, and read the sentence a second time."},
    {k:"rule"},
    {k:"h3", t:"Listening and Greetings"},
    {k:"p", t:"A good listener looks at the speaker, keeps quiet, and answers what was said. We greet one another in English with the same phrases every day:"},
    {k:"table", head:["Time or work","What we say","The answer"], rows:[
      ["Morning","Good morning. How are you?","I am fine, thank you."],
      ["Midday or afternoon","Good afternoon.","Good afternoon."],
      ["Evening","Good evening. / Good night.","Good night."],
      ["Meeting someone","My name is … What is your name?","My name is …"],
      ["Leaving","Goodbye. / See you tomorrow.","Goodbye. See you."],
      ["Help received","Thank you.","You are welcome."]
    ]},
    {k:"p", t:"**Class rules** keep the room ready for learning: listen when the teacher or a classmate is speaking, raise the hand and wait for the name, bring your own materials, keep the desk and floor clean, and speak English while you are in the lesson."},
    {k:"rule"},
    {k:"h3", t:"Parts of Speech: Personal Pronouns and the Singular Noun"},
    {k:"p", t:"A **pronoun** stands in place of a noun. The personal pronouns of this period are **I, my, you, your, our, he, she, it, they**."},
    {k:"bul", items:["**I** – I am a pupil. **my** – This is my book.","**you** – How are you? **your** – Is this your pen?","**our** – This is our school. **they** – They are my friends.","**he** is for one boy, **she** for one girl, **it** for one thing or animal."]},
    {k:"p", t:"A **noun** is a name for a person, place, thing or animal. A **singular noun** names only one: boy, girl, school, table, dog, hat. One noun + a or an: a boy, an ant – use **an** before a vowel sound."},
    {k:"rule"},
    {k:"h3", t:"Handwriting: Forming Lower-Case Letters"},
    {k:"num", items:["Sit straight with the book flat and the feet on the floor.","Hold the pencil near the point with three fingers, not in the fist.","Start at the top line; the letters **a, c, e, m, n, o, r, s, u, v, w, x, z** stay between the middle and the base line.","Letters with a tall stem – **b, d, f, h, k, l, t** – go up to the top line; letters with a tail – **g, j, p, q, y** – go below the base line.","Keep the pencil moving; do not lift it inside a letter, and leave one finger-space between words.","Check your work against the model on the board and make the letters the same size."]},
    {k:"p", t:"**High-frequency (sight) words** of this period are read as whole words, not sounded out: I, the, is, this, a, they, have, do, of, on, yes, no, see."}
  ],
  focus:["Alphabet recognition","Letter-sound knowledge","Onsets and rimes","Listening comprehension","Greetings","Personal pronouns","Singular nouns","Handwriting"],
  words:[
    {w:"cat", s:"cat", d:"a small animal kept at home", x:"The cat sat on the mat."},
    {w:"dog", s:"dog", d:"an animal that barks", x:"My dog can run fast."},
    {w:"pig", s:"pig", d:"a fat farm animal", x:"The pig is in the mud."},
    {w:"bus", s:"bus", d:"a big car that carries many people", x:"I go to school in a bus."},
    {w:"cup", s:"cup", d:"we drink from it", x:"Put the cup on the table."},
    {w:"hat", s:"hat", d:"we wear it on the head", x:"The old man has a hat."},
    {w:"pen", s:"pen", d:"we write with it", x:"This pen is mine."},
    {w:"bed", s:"bed", d:"we sleep on it", x:"The baby is on the bed."},
    {w:"sun", s:"sun", d:"it shines in the sky", x:"The sun is hot today."},
    {w:"man", s:"man", d:"a grown boy", x:"The man is my father."},
    {w:"box", s:"box", d:"we keep things in it", x:"The box is big."},
    {w:"rat", s:"rat", d:"a small animal like a mouse", x:"The rat ran away."}
  ],
  sight:["I","the","is","this","a","they","have","do","of","on","yes","no","see"],
  phonics:[
    {p:"-at", label:"the -at family", words:["cat","hat","mat","rat","bat","sat"]},
    {p:"-ig", label:"the -ig family", words:["pig","big","dig","fig","wig"]},
    {p:"-un", label:"the -un family", words:["sun","run","fun","bun"]},
    {p:"VC", label:"vowel + consonant", words:["at","in","up","on","it","am"]}
  ],
  grammar:[
    {q:"____ am a pupil.", a:"I", why:"Use I when you talk about yourself."},
    {q:"This is ____ book. (belonging to me)", a:"my", why:"My shows something belongs to me."},
    {q:"Good morning, how are ____?", a:"you", why:"You means the person you are talking to."},
    {q:"This is ____ school.", a:"our", why:"Our means it belongs to all of us."},
    {q:"____ is a boy.", a:"He", why:"He is used for a boy or a man."}
  ],
  pairs:[
    {a:"boy", b:"boys", kind:"plural"},
    {a:"girl", b:"girls", kind:"plural"},
    {a:"table", b:"tables", kind:"plural"},
    {a:"book", b:"books", kind:"plural"},
    {a:"cup", b:"cups", kind:"plural"},
    {a:"hat", b:"hats", kind:"plural"}
  ],
  passage:{
    title:"The Old Man and His Hat",
    text:"An old man had a big red hat. He wore the hat every day. One day the wind came. It took the hat from his head. The hat went up and up. It fell in the grass. A boy saw the hat. He ran and got it. He gave the hat to the old man. The old man was glad. He said, \"Thank you, my son.\"",
    qs:[
      {q:"What did the old man have?", a:"A big red hat."},
      {q:"What took the hat from his head?", a:"The wind."},
      {q:"Where did the hat fall?", a:"In the grass."},
      {q:"Who found the hat?", a:"A boy."},
      {q:"What did the old man say to the boy?", a:"\"Thank you, my son.\""}
    ]
  },
  activities:["Group identify and say the sound for each letter","Say names of classmates that begin with each letter","Use letter cards to form and read VC and CVC words","Sing greeting action songs","Letter formation drills on three-line paper"],
  materials:["Grammar and Composition Book 1","Gateway to English for Primary School Book 1","Phonics for Liberian Schools Book 1","Alphabet strip/chart, letter cards, word cards","The Old Man and His Hat (supplementary reader)"],
  assessment:["Participation","Group work","Peer work","Demonstration and returned demonstration","Assignments, quiz, tests","Oral presentation"]
},
{
  grade:1, period:"II", sem:"One", icon:"🧩",
  title:"Reading & Comprehension · L-Blends and Story Elements",
  subtitle:"Two-letter consonant blends, predicting and retelling stories",
  outcomes:["Use letter-sound associations, word parts and context to read new words and analyse texts"],
  objectives:[
    "Blend sounds to make and read words",
    "Form and read words with 2-letter consonant L-blends",
    "Read simple short narratives",
    "Identify story elements: title, author, characters, setting, events",
    "Make predictions about a story"
  ],
  note:"A <b>blend</b> is two letters that keep both their sounds: <b>bl</b> in <i>black</i>, <b>cl</b> in <i>clap</i>, <b>fl</b> in <i>flag</i>. Say the two sounds quickly together.",
  study:[
    /* ---- course text: Semester One, Period II (guide pp. 7-10) ---- */
    {k:"h3", t:"Consonant L-Blends"},
    {k:"p", t:"A **blend** is two consonants written together that keep their own sounds; you run them together but you still hear both. In a **consonant blend with l**, the l follows the first letter."},
    {k:"table", head:["Blend","Words to read","A sentence"], rows:[
      ["bl","black, block, blue, blow, blade","The blue ball is big."],
      ["cl","clap, class, clean, clock, cloth","Clean the cloth in the class."],
      ["fl","flag, flat, floor, flow, fly","The flag can fly."],
      ["gl","glad, glass, glue, globe","Glue the glass on the table."],
      ["pl","play, plate, plum, plan","We play on the plate."],
      ["sl","sleeve, sleep, slow, slid","The snail is slow."]
    ]},
    {k:"p", t:"Read the blend first, then the rime: bl – ack = black. Say the two sounds quickly together; do not put a vowel between them."},
    {k:"rule"},
    {k:"h3", t:"Story Elements"},
    {k:"p", t:"Every story is built of the same parts. We name them so we can talk about what we have read:"},
    {k:"bul", items:["The **title** is the name of the story, printed at the top.","The **author** is the person who wrote the story.","The **characters** are the people or animals the story is about.","The **setting** is where and when the story happens.","The **events** are the things that happen in the story, in order.","A **problem** is the trouble the character meets; the **solution** is how the trouble is settled."]},
    {k:"p", t:"Before reading we **predict**: we look at the title and the picture and say what we think the story will be about. After reading, we check whether the prediction was true. A prediction is a smart guess with a reason, not a wild guess."},
    {k:"rule"},
    {k:"h3", t:"Common and Proper Nouns"},
    {k:"p", t:"A **common noun** names any one of a kind: boy, girl, bag, table, school, county. A **proper noun** names a particular person or place and always begins with a **capital letter**: Peter, Musu, Monrovia, Bong County, Liberia."},
    {k:"bul", items:["Common: boy, girl, town, river, month, day.","Proper: Kollie, Gbarnga, St. Paul River, Monday, December.","A proper noun never takes a or an before it."]},
    {k:"rule"},
    {k:"h3", t:"The Verb ‘To Be’"},
    {k:"p", t:"A **verb** is a doing word or a being word. The verb **to be** is used to say who or what a person or thing is. It changes its form to match the pronoun – this change is called **conjugation**."},
    {k:"table", head:["Pronoun","Verb to be","Example sentence"], rows:[
      ["I","am","I am in Class One."],
      ["you / we / they","are","You are my friend."],
      ["he / she / it","is","She is at school."]
    ]},
    {k:"p", t:"Contractions join the two words with an apostrophe: I am → I’m; you are → you’re; she is → she’s; they are → they’re."},
    {k:"rule"},
    {k:"h3", t:"Prepositions, and the Three Kinds of Sentence"},
    {k:"p", t:"A **preposition** is a small word that tells where or when: **in** and **on** are ours today – the book is in the bag; the hat is on the head."},
    {k:"p", t:"English sentences come in three kinds, and the mark at the end tells which kind it is:"},
    {k:"table", head:["Kind of sentence","What it does","End mark","Example"], rows:[
      ["Telling (declarative)","Tells something","period (.)","The dog ran home."],
      ["Asking (interrogative)","Asks something","question mark (?)","Where is the dog?"],
      ["Ordering (imperative)","Orders or asks for something","period or exclamation (.)","Give me the ball."]
    ]},
    {k:"p", t:"**Punctuation rules** for Class One: begin every sentence with a **capital letter**; end a telling or order sentence with a **full stop (.)**, an asking sentence with a **question mark (?)**, and a wondering or crying-out sentence with an **exclamation mark (!)**."},
    {k:"p", t:"**Sight words** of this period: said, was, are, for, with, you, she, he, we, to."}
  ],
  focus:["Letter-sound knowledge","Consonant L-blends: bl, cl, fl","Story elements","Making predictions","Reading comprehension"],
  words:[
    {w:"black", s:"black", d:"a very dark colour", x:"My shoes are black."},
    {w:"block", s:"block", d:"a solid piece of wood or stone", x:"He sat on a block."},
    {w:"clap", s:"clap", d:"to hit your hands together", x:"We clap for the singer."},
    {w:"class", s:"class", d:"a group of pupils learning together", x:"Our class is clean."},
    {w:"flag", s:"flag", d:"cloth with the colours of a country", x:"The flag of Liberia is red, white and blue."},
    {w:"flat", s:"flat", d:"smooth and level", x:"The road is flat."},
    {w:"blue", s:"blue", d:"the colour of the sky", x:"The sky is blue."},
    {w:"clean", s:"clean", d:"not dirty", x:"Keep the class clean."},
    {w:"floor", s:"floor", d:"the ground inside a room", x:"Sweep the floor."},
    {w:"glad", s:"glad", d:"happy", x:"I am glad to see you."}
  ],
  sight:["said","was","are","for","with","you","she","he","we","to"],
  phonics:[
    {p:"bl", label:"bl blend", words:["black","block","blue","blow","blade"]},
    {p:"cl", label:"cl blend", words:["clap","class","clean","clock","cloth"]},
    {p:"fl", label:"fl blend", words:["flag","flat","floor","flow","fly"]},
    {p:"gl", label:"gl blend", words:["glad","glass","glue","globe"]}
  ],
  grammar:[
    {q:"Name the person or animal in a story:", a:"character", why:"Characters are who the story is about."},
    {q:"The place where a story happens:", a:"setting", why:"Setting tells where and when."},
    {q:"The name at the top of a story:", a:"title", why:"The title names the story."},
    {q:"The person who wrote the story:", a:"author", why:"The author writes the story."},
    {q:"The things that happen in a story:", a:"events", why:"Events are what happens."}
  ],
  pairs:[
    {a:"big", b:"small", kind:"antonym"},
    {a:"hot", b:"cold", kind:"antonym"},
    {a:"day", b:"night", kind:"antonym"},
    {a:"glad", b:"happy", kind:"synonym"},
    {a:"big", b:"large", kind:"synonym"}
  ],
  passage:{
    title:"The Rat and the Pot",
    text:"A rat came into the kitchen. He saw a big black pot. The pot had rice in it. The rat was glad. He ran up to the pot. But the pot was hot! The rat cried out and ran to the floor. He did not eat the rice. He went back to his hole. He was sad, but he was safe.",
    qs:[
      {q:"Where did the rat go?", a:"Into the kitchen."},
      {q:"What did he see?", a:"A big black pot with rice in it."},
      {q:"Why did the rat cry out?", a:"Because the pot was hot."},
      {q:"Did the rat eat the rice?", a:"No, he did not."},
      {q:"How did the rat feel at the end?", a:"Sad, but safe."}
    ]
  },
  activities:["Use flash cards to form and read blend words","Word reading fluency games","Story reading and discussion","Peer and group reading support","Read and retell"],
  materials:["Grammar and Composition Book 1","Phonics for Liberian Schools Book 1","Word charts, letter cards, word cards","Decodable story books"],
  assessment:["Participation","Group and peer work","Oral reading check","Quiz and tests","Retelling assessment"]
},
{
  grade:1, period:"III", sem:"One", icon:"💡",
  title:"Reading & Comprehension · Main Idea and Details",
  subtitle:"Main topic, descriptive details and making judgments",
  outcomes:["Analyse text content and share ideas, information and messages with others","Predict outcomes and make judgments after careful evaluation of facts"],
  objectives:[
    "Decode and read words",
    "Identify the main topic and descriptive details of a non-fiction text",
    "Compare and contrast ideas in a text",
    "Answer questions about what is read"
  ],
  note:"The <b>main idea</b> is what the whole passage is about. The <b>details</b> are the small pieces of information that tell you more about the main idea.",
  study:[
    /* ---- course text: Semester One, Period III (guide pp. 11-14) ---- */
    {k:"h3", t:"Blends and Digraphs"},
    {k:"p", t:"A **digraph** differs from a blend: two letters are joined but together they make **one new sound** – sh in ship is not /s/+/h/. Learn the beginning and ending blends and digraphs of this period as sound families."},
    {k:"table", head:["Letters","Sound","Beginning words","Ending words"], rows:[
      ["sh","one sound /sh/","ship, shop, shell","fish, wash, bush"],
      ["ch","one sound /ch/","chair, chalk, child","much, lunch, rich"],
      ["th","one sound /th/","think, three, this","bath, math, with"],
      ["ck","one sound /k/","–","book, duck, back"],
      ["gr, tr, sm, st","blends (both sounds heard)","grass, tree, small, stop","–"],
      ["-mp, -nd, -ft, -sk","blends at the end","–","jump, hand, left, mask"]
    ]},
    {k:"p", t:"**Vowel teams** are two vowels travelling together; the first one usually says its own name: ai in rain, ay at the end of day, ea in read, ee in see."},
    {k:"rule"},
    {k:"h3", t:"Main Idea and Supporting Details"},
    {k:"p", t:"The **main idea** is what the whole passage is about – the big point the writer wants you to carry away. The **supporting details** are the small pieces of information that prove or explain the main idea."},
    {k:"num", items:["Read the whole text through once.","Ask: what is this mostly about? That answer is the **main idea**.","Ask: what did the writer tell me that shows this? Those are the **details**.","Say the main idea in one sentence of your own, and name two details."]},
    {k:"p", t:"To **compare** is to say how two things are the same; to **contrast** is to say how they are different. Words that help: both, like, but, however, different from."},
    {k:"rule"},
    {k:"h3", t:"Reading Non-Fiction and Its Text Features"},
    {k:"p", t:"A **fiction** text tells a made-up story; a **non-fiction** text gives true information about real things – people, animals, places, work. Non-fiction carries **text features** that help you find what you want quickly:"},
    {k:"bul", items:["The **title** says what the book or passage is about.","The **heading** names each small part of the text.","The **photograph** and its **caption** show and explain a real thing.","The **map** shows where places are; look for the key and the compass direction.","The **glossary** at the back explains the hard words, in alphabetical order."]},
    {k:"p", t:"An **inference** is an answer the text does not say plainly but lets you see – when the story says Musu put on her coat and took an umbrella, you infer that it is raining. To **summarize** is to retell only the important parts in your own words."},
    {k:"rule"},
    {k:"h3", t:"Verbs with –s and –ed"},
    {k:"p", t:"English adds endings to the verb to show who does the action and when it happened:"},
    {k:"bul", items:["**He, she, it** takes the **–s** ending: the boy digs; the hen runs; she wants rice.","The **past tense** of a regular verb takes **–ed**: splashed, cracked, wanted, walked, played.","Verbs such as be, go, come, eat are **irregular**: they do not take –ed. go → went; eat → ate."]},
    {k:"rule"},
    {k:"h3", t:"Capitalization, and the Simple Sentence"},
    {k:"p", t:"Use a **capital (big) letter** for:"},
    {k:"num", items:["the first word of every sentence;","the pronoun **I**;","every proper noun – a person’s name (John, Marie), a place (Monrovia, Liberia, Bong County), a day or a month (Monday, December);","the first word of a direct quotation."]},
    {k:"p", t:"A sentence has two parts. The **subject** is who or what the sentence is about; the **predicate** tells what the subject does or is. In The old dog slept, **the old dog** is the subject and **slept** is the predicate. A sentence that has one subject and one predicate is a **simple sentence**."},
    {k:"p", t:"An **adjective** is a describing word; it tells more about a noun: a messy room, a red hat, a tall boy. Before a singular noun beginning with a vowel sound use **an**: an apple, an old bag. **Sight words**: what, when, where, who, why, how, some, come, from, that."}
  ],
  focus:["Decoding","Main idea","Supporting details","Compare and contrast","Non-fiction text"],
  words:[
    {w:"farm", s:"farm", d:"land where food is grown", x:"My uncle works on a farm."},
    {w:"crop", s:"crop", d:"plants grown for food", x:"Rice is a crop."},
    {w:"seed", s:"seed", d:"we plant it to grow a plant", x:"Put the seed in the soil."},
    {w:"soil", s:"soil", d:"the earth plants grow in", x:"The soil is soft."},
    {w:"rain", s:"rain", d:"water falling from the sky", x:"The rain helps the crop."},
    {w:"grow", s:"grow", d:"to get bigger", x:"Plants grow in the sun."},
    {w:"food", s:"food", d:"what we eat", x:"We need food every day."},
    {w:"help", s:"help", d:"to do something for someone", x:"I help my mother."},
    {w:"work", s:"work", d:"a job you do", x:"Farming is hard work."},
    {w:"land", s:"land", d:"ground, not water", x:"The land is wide."}
  ],
  sight:["what","when","where","who","why","how","some","come","from","that"],
  phonics:[
    {p:"-ain", label:"the -ain family", words:["rain","main","pain","train","chain"]},
    {p:"-and", label:"the -and family", words:["land","hand","sand","band","stand"]},
    {p:"-elp", label:"the -elp family", words:["help","yelp"]}
  ],
  grammar:[
    {q:"What the whole passage is about is called the ____ idea.", a:"main", why:"The main idea covers the whole text."},
    {q:"Small pieces of information that tell more are called ____.", a:"details", why:"Details support the main idea."},
    {q:"A text that gives true information is called ____-fiction.", a:"non", why:"Non-fiction is true information."},
    {q:"We ____ two things when we say how they are the same.", a:"compare", why:"Compare = show what is the same."},
    {q:"We ____ two things when we say how they are different.", a:"contrast", why:"Contrast = show what is different."}
  ],
  pairs:[
    {a:"wet", b:"dry", kind:"antonym"},
    {a:"hard", b:"soft", kind:"antonym"},
    {a:"work", b:"job", kind:"synonym"},
    {a:"grow", b:"rise", kind:"synonym"},
    {a:"land", b:"ground", kind:"synonym"}
  ],
  passage:{
    title:"The Farm",
    text:"Many people in Liberia work on a farm. A farm is land where food is grown. Farmers put seeds in the soil. The rain falls and the sun shines. Then the seeds grow into plants. Rice and cassava are grown on farms. Farmers work hard every day. Without farms we would have no food.",
    qs:[
      {q:"What is the main idea of this passage?", a:"Farms give us our food and farmers work hard to grow it."},
      {q:"What is a farm?", a:"Land where food is grown."},
      {q:"What do farmers put in the soil?", a:"Seeds."},
      {q:"Name two crops grown on farms.", a:"Rice and cassava."},
      {q:"What two things help the seeds grow?", a:"The rain and the sun."}
    ]
  },
  activities:["Read and find the main idea","Underline the details in a passage","Compare two texts","Group discussion and question-and-answer"],
  materials:["Grammar and Composition Book 1","Picture story books","Word charts","Non-fiction picture texts"],
  assessment:["Participation","Comprehension exercise","Assignments","Oral presentation","Quiz"]
},
{
  grade:1, period:"IV", sem:"Two", icon:"🔊",
  title:"Reading & Comprehension · Word Patterns and Sounds",
  subtitle:"Sound patterns, fluent reading and literal comprehension",
  outcomes:["Demonstrate awareness that speech is a sequence of sounds that can be manipulated to read words accurately and fluently"],
  objectives:[
    "Identify the sounds represented by various word patterns",
    "Read words accurately and fluently",
    "Identify main ideas and supporting details in a reading",
    "Answer literal comprehension questions"
  ],
  note:"Words in the same <b>family</b> end with the same sound and letters. If you can read <i>cake</i>, you can read <i>lake</i>, <i>make</i> and <i>take</i>. Change only the first sound.",
  study:[
    /* ---- course text: Semester Two, Period IV (guide pp. 15-20) ---- */
    {k:"h3", t:"The Silent –e and Long Vowels"},
    {k:"p", t:"When a word is built **vowel–consonant–e**, the final e is not sounded; it is called **magic e** (or the **silent e**) because it makes the vowel before it say its own name. That is called a **long vowel** sound."},
    {k:"table", head:["Pattern","Sound","Words"], rows:[
      ["a_e","long a","cake, lake, gate, late, name"],
      ["i_e","long i","ride, side, time, nine, line"],
      ["o_e","long o","note, home, rose, nose, bone"],
      ["u_e","long u","mule, cube, flute, June"],
      ["ai, ay","long a","rain, tail, day, play"],
      ["ee, ea","long e","see, tree, read, sea"],
      ["oa, ow","long o","goat, boat, low, slow"],
      ["ie","long i","pie, tie, side, ride"]
    ]},
    {k:"p", t:"Read each pair and hear the change: hat – hate, pin – pine, hop – hope, cub – cube. Only the e was added, yet the vowel changed its voice."},
    {k:"rule"},
    {k:"h3", t:"Digraphs, Blends and the –ed Sound"},
    {k:"bul", items:["Consonant digraphs of this period: **ch, tch, wh, ck, ph, ng, th** – chair, watch, whale, duck, elephant, king, bath.","Beginning blends with r: **scr, spr, str, spl, squ** – scream, spring, street, splash, squid. Both sounds are still heard in a blend.","Vowel teams: oa in goat; ow in low; ie in field (long e); ea in bread (short e).","Y at the end of a short word says long i: sky, fly, my, try, by.","The ending **–ed** is pronounced in three ways: /t/ after walk (walked), /d/ after play (played), and a whole extra syllable /ɪd/ after want (wanted) and need (needed)."]},
    {k:"p", t:"Story reading this period moves from **fantasy** to **reality**: a **fantasy** story tells what could not happen (a talking tortoise); **realistic** fiction and non-fiction tell what could happen. Judge each text by asking, could this really be?"},
    {k:"rule"},
    {k:"h3", t:"Possessive Nouns and the Apostrophe"},
    {k:"p", t:"A **possessive noun** shows that something belongs to someone. We add an **apostrophe** and s:"},
    {k:"bul", items:["Jack’s hat – the hat belongs to Jack.","the dog’s tail – the tail belongs to the dog.","the girls’ bags – when the noun already ends in s, the apostrophe comes after it.","Do not confuse **it’s** (it is) with **its** (belonging to it)."]},
    {k:"rule"},
    {k:"h3", t:"Compound Words"},
    {k:"p", t:"A **compound word** is made when two small words join to make one new word with one meaning. Each part is still a word, but the joined word means something different from either part alone."},
    {k:"table", head:["Word + word","Compound word","What it means"], rows:[
      ["cup + board","cupboard","a closed shelf for dishes"],
      ["sun + flower","sunflower","a tall yellow flower"],
      ["butter + fly","butterfly","a flying insect"],
      ["class + room","classroom","the room where we learn"],
      ["water + fall","waterfall","water falling from a height"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Commas in a Series"},
    {k:"p", t:"When we name three or more things in a row, we put a **comma** after each item except the last, and use **and** before the last one: sticks, pens, and pencils. The same rule holds for a series of actions: dug a hole, put in some seeds, and covered the hole."},
    {k:"rule"},
    {k:"h3", t:"Writing and the Words of This Period"},
    {k:"bul", items:["**Cursive letters**: join the lower-case letters, keeping the slant the same and sitting on the base line; the tall letters still rise to the top line and the tail letters still drop below it.","**Sight words to know at first glance**: these, some, there, their, been, were, said, many, other, than, then, first. Remember the two that sound alike but mean different things: **there** (place) and **their** (belonging to them).","**Vocabulary growth**: name and use new words from the readers – Ayo and his Pencil, Lorpu Becomes a Super Reader, Fun in the Interior, Ujae Works Hard."]},
    {k:"p", t:"Read aloud with **fluency**: the right words, at an even speed, with the voice going up at a question mark and down at a full stop."}
  ],
  focus:["Word patterns","Fluency","Literal comprehension","Main idea and supporting details"],
  words:[
    {w:"cake", s:"cake", d:"a sweet food we bake", x:"Mother baked a cake."},
    {w:"lake", s:"lake", d:"a big body of water", x:"We swam in the lake."},
    {w:"ride", s:"ride", d:"to sit on and travel", x:"I ride my bike."},
    {w:"side", s:"side", d:"the edge of something", x:"Sit by my side."},
    {w:"note", s:"note", d:"a short message", x:"She wrote a note."},
    {w:"home", s:"home", d:"the place where you live", x:"I go home at three."},
    {w:"time", s:"time", d:"the hour of the day", x:"What time is it?"},
    {w:"nine", s:"nine", d:"the number 9", x:"I have nine books."},
    {w:"rose", s:"rose", d:"a flower", x:"The rose is red."},
    {w:"gate", s:"gate", d:"a door in a fence", x:"Close the gate."}
  ],
  sight:["there","their","been","were","said","many","other","than","then","first"],
  phonics:[
    {p:"a_e", label:"long a (magic e)", words:["cake","lake","gate","late","name"]},
    {p:"i_e", label:"long i (magic e)", words:["ride","side","time","nine","line"]},
    {p:"o_e", label:"long o (magic e)", words:["note","home","rose","nose","bone"]}
  ],
  grammar:[
    {q:"The e at the end of cake is called a ____ e.", a:"magic", why:"Magic e makes the first vowel say its name."},
    {q:"Cat has a ____ vowel sound.", a:"short", why:"Cat = short a."},
    {q:"Cake has a ____ vowel sound.", a:"long", why:"Cake = long a, the vowel says its name."},
    {q:"Words that end the same way belong to the same word ____.", a:"family", why:"Word families share an ending."}
  ],
  pairs:[
    {a:"late", b:"early", kind:"antonym"},
    {a:"open", b:"close", kind:"antonym"},
    {a:"home", b:"house", kind:"synonym"},
    {a:"road", b:"rode", kind:"homophone"},
    {a:"see", b:"sea", kind:"homophone"}
  ],
  passage:{
    title:"Time to Go Home",
    text:"The clock said three. It was time to go home. Kou put her books in her bag. She said goodbye to her friends. She walked out of the gate. On the road she saw a rose growing by the side. It was red and pretty. Kou did not pick it. She left it for other people to see. Then she ran all the way home.",
    qs:[
      {q:"What time was it?", a:"Three o'clock."},
      {q:"What did Kou put in her bag?", a:"Her books."},
      {q:"What did she see by the side of the road?", a:"A red rose."},
      {q:"Why did Kou not pick the rose?", a:"So other people could see it."},
      {q:"How did she go home?", a:"She ran all the way."}
    ]
  },
  activities:["Word family sorting with cards","Timed fluency reading in pairs","Change the first sound to build new words","Read aloud and answer questions"],
  materials:["Phonics for Liberian Schools Book 1","Word family charts","Flash cards","Decodable readers"],
  assessment:["Fluency check (words per minute)","Comprehension exercise","Spelling quiz","Participation"]
},
{
  grade:1, period:"V", sem:"Two", icon:"✍️",
  title:"Language Development · Word Skill and Vocabulary",
  subtitle:"Letter representation, describing people and objects",
  outcomes:["Communicate information about people and objects","Use fine motor skills for writing","Become a better problem solver using imagination and creativity"],
  objectives:[
    "Respond to questions about people and objects",
    "Describe objects using colour, size and shape",
    "Write letters and simple words correctly",
    "Build new words from known letters"
  ],
  note:"A <b>describing word</b> (adjective) tells us more about a person or thing: a <i>big</i> box, a <i>red</i> hat, a <i>tall</i> boy.",
  study:[
    /* ---- course text: Semester Two, Period V (guide pp. 21-22) ---- */
    {k:"h3", t:"Letter Representation: Forming A to Z"},
    {k:"p", t:"**Letter representation** is the way a letter is shaped when it is written. Every letter has an **upper-case** (capital) form and a **lower-case** (small) form; both must be formed correctly and kept on the line."},
    {k:"num", items:["Say the letter name, then its sound.","Watch the model: where does the pencil start, and which way does it turn?","Write the letter in the air with the finger, then on the line in the copybook.","Form the letters in families that are made the same way: c-o-a-d-g-q all begin with the same round curve; l-t-i from a straight down stroke.","Compare your letter with the model, and write again only the ones that came out wrong."]},
    {k:"rule"},
    {k:"h3", t:"Word Skill: Word Families with –all, –ound, –ong"},
    {k:"table", head:["Family","Words","A sentence we can read"], rows:[
      ["-all","tall, ball, call, fall, wall, small","The small ball hit the wall."],
      ["-ound","round, found, sound, ground","We found a round stone."],
      ["-ong","long, song, strong, among","The strong man sang a long song."]
    ]},
    {k:"rule"},
    {k:"h3", t:"Describing Words (Adjectives)"},
    {k:"p", t:"An **adjective** tells us more about a person, place or thing – what kind, how big, what colour, how it feels or tastes. Adjectives make a sentence paint a picture: compare the box fell with the heavy brown box fell slowly."},
    {k:"bul", items:["Size: **big, small, tall, short, long**.","Colour: **red, blue, green, yellow, black, white**.","Touch and look: **hard, soft, rough, smooth, clean, dirty, new, old**.","Sort the two opposite pairs: big–small, tall–short, new–old, clean–dirty, good–bad. Words opposite in meaning are **antonyms**."]},
    {k:"rule"},
    {k:"h3", t:"Talking About Yourself: Likes and Dislikes"},
    {k:"p", t:"We answer the questions **who** and **what** from what we hear, and we speak of ourselves with the pronouns learnt in Period I:"},
    {k:"bul", items:["**I like** rice. / **I do not like** fish.","**My** favourite game is football.","I can run. I can jump. I cannot fly.","**This** is near me; **that** is far from me – these are the **demonstrative pronouns**."]},
    {k:"rule"},
    {k:"h3", t:"Writing Composition and Vocabulary"},
    {k:"p", t:"Write simple sentences about what you like and what you do not like. A sentence is not finished until it has a **capital letter at the beginning** and a **full stop at the end**."},
    {k:"bul", items:["**Sight words**: night, hear, into, about, until, could, would, should, because, before, every, under, would, river.","**Context words** – words we work out from the sentence around them: in “I **would** like water, the word would” tells what you want.","Read and match: look at a picture, then read the sentence under it and say whether they agree; last, write one sentence about the picture yourself."]},
    {k:"p", t:"Oral work this period: ask and answer questions of who and what, tell the class two things you can do, and spell the new words aloud by naming each letter in order."}
  ],
  focus:["Language development","Letter representation","Word skill","Vocabulary development","Describing words"],
  words:[
    {w:"big", s:"big", d:"large in size", x:"That is a big tree."},
    {w:"small", s:"small", d:"little in size", x:"The ant is small."},
    {w:"tall", s:"tall", d:"high from the ground", x:"My brother is tall."},
    {w:"short", s:"short", d:"not tall or not long", x:"The pencil is short."},
    {w:"round", s:"round", d:"shaped like a circle", x:"The ball is round."},
    {w:"long", s:"long", d:"measuring a lot end to end", x:"The rope is long."},
    {w:"new", s:"new", d:"not old", x:"I have a new bag."},
    {w:"old", s:"old", d:"not new", x:"This is an old book."},
    {w:"good", s:"good", d:"nice or correct", x:"She is a good pupil."},
    {w:"clean", s:"clean", d:"not dirty", x:"My hands are clean."}
  ],
  sight:["about","after","again","could","would","should","because","before","every","under"],
  phonics:[
    {p:"-all", label:"the -all family", words:["tall","ball","call","fall","wall","small"]},
    {p:"-ound", label:"the -ound family", words:["round","found","sound","ground"]},
    {p:"-ong", label:"the -ong family", words:["long","song","strong"]}
  ],
  grammar:[
    {q:"A word that describes a noun is called an ____.", a:"adjective", why:"Adjectives describe nouns."},
    {q:"In 'a red hat', the describing word is ____.", a:"red", why:"Red describes the hat."},
    {q:"In 'a tall boy', the describing word is ____.", a:"tall", why:"Tall describes the boy."},
    {q:"The opposite of big is ____.", a:"small", why:"Small is the opposite of big."},
    {q:"The opposite of new is ____.", a:"old", why:"Old is the opposite of new."}
  ],
  pairs:[
    {a:"big", b:"small", kind:"antonym"},
    {a:"tall", b:"short", kind:"antonym"},
    {a:"new", b:"old", kind:"antonym"},
    {a:"clean", b:"dirty", kind:"antonym"},
    {a:"good", b:"bad", kind:"antonym"},
    {a:"long", b:"short", kind:"antonym"}
  ],
  passage:{
    title:"My New Bag",
    text:"I have a new bag. It is big and blue. My mother bought it at the market. The bag has two pockets. I put my books in the big pocket. I put my pen in the small pocket. My old bag was brown and torn. I like my new bag best. I keep it clean every day.",
    qs:[
      {q:"What colour is the new bag?", a:"Blue."},
      {q:"Who bought the bag?", a:"The writer's mother."},
      {q:"How many pockets does the bag have?", a:"Two."},
      {q:"What goes in the small pocket?", a:"The pen."},
      {q:"What was wrong with the old bag?", a:"It was brown and torn."}
    ]
  },
  activities:["Show an object; learners describe it","Draw and label objects","Word building with letter cards","Spelling drills","Describe a classmate using adjectives"],
  materials:["Relevant classroom objects","Picture cards","3-line writing paper","Word charts"],
  assessment:["Oral description task","Written labelling","Spelling quiz","Peer assessment"]
},
{
  grade:1, period:"VI", sem:"Two", icon:"📚",
  title:"Reading & Comprehension · Retelling and Sequencing",
  subtitle:"Beginning, middle and end; retelling a story in order",
  outcomes:["Read simple texts with understanding and retell them in the correct order"],
  objectives:[
    "Read a short story independently",
    "Tell the beginning, middle and end of a story",
    "Sequence events in the correct order",
    "Answer questions about a story"
  ],
  note:"Every story has a <b>beginning</b>, a <b>middle</b> and an <b>end</b>. When you retell a story, tell what happened <i>first</i>, then <i>next</i>, then <i>last</i>.",
  study:[
    /* ---- course text: Semester Two, Period VI (guide pp. 23-26) ---- */
    {k:"h3", t:"Diphthongs and Vowel Patterns"},
    {k:"p", t:"A **diphthong** is two letters that glide into one vowel sound. Read the words of each pattern and hear how the sound is drawn out longer than a short vowel."},
    {k:"table", head:["Pattern","Words"], rows:[
      ["-all, -alk, -awl","tall, ball, small, walk, talk, crawl"],
      ["-ong","strong, long, song, among"],
      ["-ought, -augh","brought, thought, caught, taught"],
      ["-oth, -oss","both, moth, cloth, loss, cross, lost"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Hard and Soft ‘c’ and ‘g’"},
    {k:"bul", items:["**c** is **hard** (/k/) before a, o, u: cat, cup, cake, coat. It is **soft** (/s/) before e, i, y: city, cent, rice, ice.","**g** is **hard** (/g/) in go, gun, big, girl. It is **soft** (/j/) in page, stage, cage, gentle, giant – usually before e, i, y.","Sort the words into the two sounds before you copy them: this is how a speller is built."]},
    {k:"rule"},
    {k:"h3", t:"Descriptive Details in a Text"},
    {k:"p", t:"**Descriptive details** are the words an author uses that paint a picture in the mind of the reader. The dog barked tells one thing; the big brown dog barked loudly at night gives you a picture you can see and hear."},
    {k:"num", items:["Read the passage once for the whole sense.","Read it again and pick out the describing words.","Say the main idea, then read out two sentences that give the best details.","Ask yourself what the writer wants you to see, hear or feel."]},
    {k:"rule"},
    {k:"h3", t:"Sequencing: Beginning, Middle and End"},
    {k:"p", t:"A story has a **beginning** (who and where), a **middle** (the problem or the big event) and an **end** (how it finishes). To **sequence** is to put events in the order they happened, and to **retell** is to tell the story again in your own words, keeping that order."},
    {k:"bul", items:["Order words: **first**, **next**, **then**, **after that**, **last**.","Tell what happened first; do not jump about in time.","Use three sentences at least – one for the beginning, one for the middle, one for the end.","**Story maps** and pictures may be used to help you remember the order."]},
    {k:"rule"},
    {k:"h3", t:"Language Development: Subject Pronouns and Class Survey"},
    {k:"bul", items:["Use the subject pronouns to say what you and others can do: I can swim. She can read. They can sing.","Give information about people’s likes and dislikes: Kollie likes rice; he does not like soup.","**Sight words**: night, hear, into, walks, every, want, because, answer; review these, some, as, lives, until, about, great, under, over, most, all.","**Spelling**: spell the high-frequency words and the words of the subject you are studying; write each word under the picture it names.","Carry out a class survey: ask five classmates what food they like, write the answers, then read the results to the class."]},
    {k:"p", t:"At the close of Grade One you should be able to sound and read a new CVC word, retell a short story in order, name the beginning, middle and end, and write a sentence that begins with a capital letter and ends with a full stop."}
  ],
  focus:["Independent reading","Sequencing","Retelling","Beginning, middle, end"],
  words:[
    {w:"first", s:"first", d:"before all the others", x:"First we wash our hands."},
    {w:"next", s:"next", d:"coming after", x:"Next we eat."},
    {w:"last", s:"last", d:"after all the others", x:"Last we sleep."},
    {w:"then", s:"then", d:"after that", x:"Then he went home."},
    {w:"begin", s:"be-gin", d:"to start", x:"We begin at eight."},
    {w:"end", s:"end", d:"the last part", x:"This is the end of the story."},
    {w:"story", s:"sto-ry", d:"a telling of events", x:"I like this story."},
    {w:"morning", s:"morn-ing", d:"the early part of the day", x:"I wake in the morning."},
    {w:"river", s:"riv-er", d:"water that flows through land", x:"The river is deep."},
    {w:"water", s:"wa-ter", d:"we drink it", x:"Bring me some water."}
  ],
  sight:["around","between","through","little","great","think","know","never","always","together"],
  phonics:[
    {p:"th", label:"th digraph", words:["then","this","that","them","think","three"]},
    {p:"sh", label:"sh digraph", words:["ship","shop","shell","fish","wash"]},
    {p:"ch", label:"ch digraph", words:["chair","chalk","church","much","teach"]}
  ],
  grammar:[
    {q:"The part of the story that comes before all others is the ____.", a:"beginning", why:"The beginning starts the story."},
    {q:"The last part of a story is the ____.", a:"end", why:"The end finishes the story."},
    {q:"We use the word ____ for the thing that happens before all others.", a:"first", why:"First shows order."},
    {q:"To tell a story again in your own words is to ____ it.", a:"retell", why:"Retelling means telling it again."}
  ],
  pairs:[
    {a:"begin", b:"start", kind:"synonym"},
    {a:"first", b:"last", kind:"antonym"},
    {a:"begin", b:"end", kind:"antonym"},
    {a:"big", b:"huge", kind:"synonym"}
  ],
  passage:{
    title:"Musu Goes to the River",
    text:"Early in the morning Musu took a bucket. First she walked down the small path. Next she came to the wide river. She filled her bucket with clean water. Then she put the bucket on her head. She walked back up the path. Last, she gave the water to her grandmother. Her grandmother smiled and said she was a good child.",
    qs:[
      {q:"What did Musu take with her?", a:"A bucket."},
      {q:"What did she do first?", a:"She walked down the small path."},
      {q:"What did she fill the bucket with?", a:"Clean water from the river."},
      {q:"How did she carry the bucket?", a:"On her head."},
      {q:"What happened last in the story?", a:"She gave the water to her grandmother, who said she was a good child."}
    ]
  },
  activities:["Cut and arrange story pictures in order","Retell a story to a partner","Act out the beginning, middle and end","Sequencing card games"],
  materials:["Picture story books","Sequencing cards","Supplementary readers","Chart paper"],
  assessment:["Retelling assessment","Sequencing exercise","Oral presentation","Comprehension test"]
},

/* ================= GRADE 2 ================= */
{
  grade:2, period:"I", sem:"One", icon:"📖",
  title:"Reading & Comprehension · Nouns, Verbs and Sentences",
  subtitle:"Common and proper nouns, action words and complete sentences",
  outcomes:["Read fluently with understanding and use nouns and verbs correctly in speech and writing"],
  objectives:[
    "Identify common and proper nouns",
    "Identify action verbs in sentences",
    "Write complete sentences with a capital letter and a full stop",
    "Read a short story and answer questions"
  ],
  note:"A <b>proper noun</b> names a special person, place or thing and always begins with a <b>capital letter</b>: <i>Monrovia, Musu, Liberia</i>. A <b>common noun</b> is a general name: <i>city, girl, country</i>.",
  study:[
    /* ---- course text: Semester One, Period I (guide pp. 27-30) ---- */
    {k:"h3", t:"Alphabet Skill: Vowels and Consonants"},
    {k:"p", t:"Of the 26 letters, **five are vowels** – a, e, i, o, u – and **twenty-one are consonants**. Every English syllable needs a vowel sound; the consonants shape the syllable at its beginning and end."},
    {k:"bul", items:["Say the letters in order without looking; then say only the vowels, and only the consonants.","Write your own name and a classmate’s name, separating the vowels from the consonants.","Know the alphabet in **upper-case** and **lower-case**, and in **print** and **cursive**."]},
    {k:"rule"},
    {k:"h3", t:"Word Patterns: Short and Long Vowels"},
    {k:"table", head:["Pattern","Sound","Words"], rows:[
      ["short vowels","ă ĕ ĭ ŏ ŭ","cat, pen, pig, dog, cup"],
      ["long a – ai, ay","ā","rain, tail, day, play"],
      ["long e – ee, ea, eer, ear","ē","see, read, deer, near"],
      ["long o – oa, ow","ō","boat, goat, low, show"],
      ["digraphs","one sound","sh, th, wh, tch, ck, ng"],
      ["vowel-consonant-e","the vowel says its name","hole, home, time, cake"],
      ["ol, oll, old","the vowel is lengthened","toll, ball, cold, old"]
    ]},
    {k:"p", t:"**Reading with the three question ways**: a reader asks what, why and how of a text – What happened? Why did it happen? How did it end? Questions asked from the story tell whether you have understood it."},
    {k:"rule"},
    {k:"h3", t:"A Story Chart"},
    {k:"p", t:"A **story chart** is a table that keeps the parts of a story in one place so that you can retell it without losing the order. Make one before and after reading, and use it to tell the story."},
    {k:"table", head:["Title","Author","Characters","Setting","Beginning","Middle (problem)","End (solution)"], rows:[
      ["The Rat","the reader’s book","the rat, the pot","the kitchen","a rat smells rice","the pot is hot","the rat goes home safe"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Nouns and Verbs"},
    {k:"p", t:"A **common noun** names any one of a class – boy, girl, table, school, town; a **proper noun** names one particular person or place – Pushu, Mushu, Gbarnga, Liberia – and it begins with a capital letter."},
    {k:"p", t:"A **verb** is a doing word: look, knock, run, cook, carry. In The boy runs to school, the verb is **runs**. The verb that shows action in the simple sentence is what makes the sentence move."},
    {k:"bul", items:["Find the verb in each sentence you read aloud; say the sentence again without the verb and notice that it no longer works.","Write two proper nouns about your own family and two common nouns about your classroom."]},
    {k:"rule"},
    {k:"h3", t:"Contractions and Demonstratives"},
    {k:"p", t:"A **contraction** joins two words; the **apostrophe** shows where letters have been taken out: it is → it’s; do not → don’t; I am → I’m; we are → we’re; she is → she’s."},
    {k:"p", t:"The **demonstrative pronouns** point at things – **this** and **these** for what is near, **that** and **those** for what is far. This book is mine; those bags are theirs. Notice that **this** goes with a singular noun and **these** with a plural noun."},
    {k:"rule"},
    {k:"h3", t:"Spelling, Oral Work and Sight Words"},
    {k:"bul", items:["**Spell**: plan, grin, play, shape, meat, cheese, seat, clean, dream – say the word, mark the vowel team, then write it.","**Oral communication**: greet the class and introduce yourself – Hello, my name is … I am in Class Two. I live in …","**Sight words**: their, which, people, other, would, write, number, water, called, first.","Write each sentence with a **capital letter** at the start and a **full stop** at the end, then check only those two things before you hand it in."]},
    {k:"p", t:"Reading this period also asks you to tell the **beginning, middle and end** of a story you have heard, and to retell it in order using the chart you filled."}
  ],
  focus:["Common and proper nouns","Action verbs","Complete sentences","Capital letters and full stops","Reading comprehension"],
  words:[
    {w:"school", s:"school", d:"a place where we learn", x:"Our school is near the road."},
    {w:"teacher", s:"teach-er", d:"a person who teaches", x:"The teacher is kind."},
    {w:"market", s:"mar-ket", d:"a place where things are sold", x:"Mother went to the market."},
    {w:"village", s:"vil-lage", d:"a small town", x:"He lives in a village."},
    {w:"friend", s:"friend", d:"a person you like", x:"Kou is my friend."},
    {w:"family", s:"fam-i-ly", d:"parents and children", x:"My family is large."},
    {w:"country", s:"coun-try", d:"a land with its own people", x:"Liberia is my country."},
    {w:"garden", s:"gar-den", d:"land where plants grow", x:"We work in the garden."},
    {w:"church", s:"church", d:"a place of worship", x:"We go to church on Sunday."},
    {w:"water", s:"wa-ter", d:"a clear liquid we drink", x:"Fetch some water."}
  ],
  sight:["their","which","people","other","would","write","number","water","called","first"],
  phonics:[
    {p:"-tion", label:"the -tion ending", words:["nation","station","action","lotion"]},
    {p:"er", label:"the er ending", words:["teacher","farmer","worker","singer","reader"]},
    {p:"oo", label:"the oo sound", words:["school","book","good","food","moon"]}
  ],
  grammar:[
    {q:"Underline the proper noun: monrovia is a big city.  Correct it:", a:"Monrovia", why:"Proper nouns take a capital letter."},
    {q:"Find the action verb: The boy runs to school.", a:"runs", why:"Runs tells what the boy does."},
    {q:"Find the action verb: Mother cooks the rice.", a:"cooks", why:"Cooks is the action."},
    {q:"Is 'teacher' a common or proper noun?", a:"common", why:"It is a general name, not a specific one."},
    {q:"Is 'Liberia' a common or proper noun?", a:"proper", why:"It names one particular country."},
    {q:"Every sentence must end with a ____ stop.", a:"full", why:"A statement ends with a full stop."}
  ],
  pairs:[
    {a:"big", b:"enormous", kind:"synonym"},
    {a:"happy", b:"sad", kind:"antonym"},
    {a:"child", b:"children", kind:"plural"},
    {a:"man", b:"men", kind:"plural"},
    {a:"woman", b:"women", kind:"plural"},
    {a:"foot", b:"feet", kind:"plural"}
  ],
  passage:{
    title:"Togar's First Day at School",
    text:"Togar woke up early. Today was his first day at school. His mother gave him a clean uniform and a new bag. They walked together to the school in Gbarnga. The teacher, Mr. Dweh, met them at the gate. He smiled and said, \"Welcome, Togar.\" Togar sat next to a boy named Flomo. Soon they were friends. At the end of the day Togar did not want to go home.",
    qs:[
      {q:"Why was this day special for Togar?", a:"It was his first day at school."},
      {q:"What did his mother give him?", a:"A clean uniform and a new bag."},
      {q:"In which town is the school?", a:"Gbarnga."},
      {q:"What is the teacher's name?", a:"Mr. Dweh."},
      {q:"Write two proper nouns from the story.", a:"Any two of: Togar, Gbarnga, Mr. Dweh, Flomo."}
    ]
  },
  activities:["Sort nouns into common and proper columns","Underline verbs in given sentences","Correct sentences missing capitals and full stops","Read and discuss the story"],
  materials:["Grammar and Composition Book 2","Gateway to English Book 2","Word charts","Supplementary readers"],
  assessment:["Noun sorting exercise","Sentence correction test","Comprehension questions","Participation"]
},
{
  grade:2, period:"II", sem:"One", icon:"🧱",
  title:"Reading & Comprehension · Blends, Digraphs and Plurals",
  subtitle:"Consonant digraphs, forming plurals and reading fluency",
  outcomes:["Read words with digraphs and blends fluently, and form plurals correctly"],
  objectives:[
    "Identify and pronounce consonant digraphs sh, ch, th, wh",
    "Form regular plurals by adding -s and -es",
    "Read a short passage fluently",
    "Answer literal and inferential questions"
  ],
  note:"A <b>digraph</b> is two letters that make ONE new sound: <b>sh</b> in <i>ship</i>, <b>ch</b> in <i>chair</i>, <b>th</b> in <i>this</i>. Add <b>-es</b> to make plurals of words ending in s, sh, ch, x: <i>box → boxes</i>.",
  study:[
    /* ---- course text: Semester One, Period II (guide pp. 31-34) ---- */
    {k:"h3", t:"Word Patterns of This Period"},
    {k:"table", head:["Pattern","Rule","Words"], rows:[
      ["long i as -igh, -ie","the gh and the e are silent; the i says its name","high, night, light, sigh; tie, pie, lie"],
      ["VCC + -ed, -ing, -er, -est","the ending is added to a short base word","jumped, jumping; big, bigger, biggest"],
      ["VCCV two-syllable words","divide the word between the two consonants","can-not, cen-ter, pup-py, ham-bur-ger"],
      ["y as long i","y at the end of a short word says /ī/","my, fly, sky, try, by"],
      ["consonant digraphs","two letters, one sound","sh, ch, th, wh"]
    ]},
    {k:"p", t:"To read a **two-syllable** word, cover one part, read it, then run the parts together. The **syllable** is the beat of the word: ti-ger has two beats; ba-na-na has three."},
    {k:"rule"},
    {k:"h3", t:"Digraphs and Plurals"},
    {k:"bul", items:["**sh** – ship, shop, fish, wash, brush, fresh. **ch** – chair, chalk, church, much, teach, lunch. **th** – think, three, this, that, with, bath. **wh** – wheel, white, when, where, why, what.","A **plural noun** names more than one. The regular plural adds **–s**: book → books, chair → chairs.","When the noun ends in **s, ss, sh, ch, x, z or o**, we add **–es**: box → boxes, bus → buses, dish → dishes, church → churches, hero → heroes.","Say the plural aloud before writing it, so that you hear the extra syllable that –es gives."]},
    {k:"rule"},
    {k:"h3", t:"Diverse Writing: Folktale, Fable, Journal, Poem"},
    {k:"p", t:"We read several **kinds of writing**, and each kind has its own look and its own way of telling:"},
    {k:"table", head:["Kind of writing","What it is","How to know it"], rows:[
      ["Folktale","a story carried by word of mouth for many years","begins ‘Once upon a time’; has a trickster or an animal that acts like a person; teaches a lesson"],
      ["Fable","a very short tale with animals as characters","ends with a moral – the lesson it teaches"],
      ["Journal","a record of what happened, written day by day","carries a date; tells only what the writer saw or did"],
      ["Article / information text","true writing about a subject","has a heading, facts and often a picture with a caption"],
      ["Poem","writing in lines with sound and rhythm","has stanzas; many poems rhyme at the end of the lines"],
      ["Narrative","a story with characters and events","has a beginning, a middle and an end"]
    ]},
    {k:"p", t:"The **theme** is the lesson or the big idea the writer leaves with you – not what happens, but what the story means. The **story elements** you must name for any narrative are the title, the author, the characters, the setting and the events."},
    {k:"rule"},
    {k:"h3", t:"Reading Across a Text: Main Idea, Details, Compare and Contrast"},
    {k:"bul", items:["Say the **main idea** of a passage in one sentence of your own.","Give two **supporting details** that prove it.","**Compare** the characters – how they are alike; **contrast** them – how they are different.","Tell the difference between a **fact** (it can be proved) and an **opinion** (someone’s feeling about it)."]},
    {k:"rule"},
    {k:"h3", t:"Language Development"},
    {k:"bul", items:["An **adjective** describes a noun: the strong man, a narrow path, heavy rain. **Adverbs** tell how an action is done: he ran quickly; she sings well.","Indefinite pronouns speak of things not named: some, many, few, all, each, everyone, somebody.","A **prefix** is placed before the root word to change its meaning; a **suffix** is added after it – un- + happy → unhappy; care + -ful → careful.","Write a **descriptive paragraph**: one sentence that says the main thing, then three sentences giving the details, then one sentence to end.","**Sight words**: should, around, another, between, important, children, different, following, sometimes, together.","Complete a **main-idea organizer**: the idea in the middle box, the details in the boxes around it."]},
    {k:"p", t:"Read **grade-level vocabulary** and the words of the other subjects in the sentence you make with each word, not in a list by itself."}
  ],
  focus:["Consonant digraphs","Regular plurals","Fluency","Literal and inferential comprehension"],
  words:[
    {w:"ship", s:"ship", d:"a big boat", x:"The ship is at the port."},
    {w:"shop", s:"shop", d:"a place where we buy things", x:"She went to the shop."},
    {w:"chair", s:"chair", d:"we sit on it", x:"Sit on the chair."},
    {w:"chalk", s:"chalk", d:"we write on the board with it", x:"The chalk is white."},
    {w:"think", s:"think", d:"to use your mind", x:"I think it will rain."},
    {w:"three", s:"three", d:"the number 3", x:"I have three pens."},
    {w:"wheel", s:"wheel", d:"a round part that turns", x:"The car has four wheels."},
    {w:"white", s:"white", d:"the colour of chalk", x:"Her dress is white."},
    {w:"brush", s:"brush", d:"we clean with it", x:"Use the brush."},
    {w:"fresh", s:"fresh", d:"new and clean", x:"The fish is fresh."}
  ],
  sight:["should","around","another","between","important","children","different","following","sometimes","together"],
  phonics:[
    {p:"sh", label:"sh digraph", words:["ship","shop","fish","wash","brush","fresh"]},
    {p:"ch", label:"ch digraph", words:["chair","chalk","church","much","teach","lunch"]},
    {p:"th", label:"th digraph", words:["think","three","this","that","with","bath"]},
    {p:"wh", label:"wh digraph", words:["wheel","white","when","where","why","what"]}
  ],
  grammar:[
    {q:"Write the plural of box:", a:"boxes", why:"Words ending in x take -es."},
    {q:"Write the plural of bus:", a:"buses", why:"Words ending in s take -es."},
    {q:"Write the plural of church:", a:"churches", why:"Words ending in ch take -es."},
    {q:"Write the plural of dish:", a:"dishes", why:"Words ending in sh take -es."},
    {q:"Write the plural of book:", a:"books", why:"Most words just add -s."},
    {q:"Write the plural of chair:", a:"chairs", why:"Most words just add -s."}
  ],
  pairs:[
    {a:"box", b:"boxes", kind:"plural"},
    {a:"bus", b:"buses", kind:"plural"},
    {a:"church", b:"churches", kind:"plural"},
    {a:"dish", b:"dishes", kind:"plural"},
    {a:"fresh", b:"stale", kind:"antonym"},
    {a:"white", b:"black", kind:"antonym"}
  ],
  passage:{
    title:"The Ship at the Port",
    text:"A big ship came to the port in Monrovia. It brought rice, chairs and cloth. Many people went to watch it. The workers took three hours to bring the boxes down. Some boxes went to the shops in the city. Others went to the villages. The children stood and watched the wheels of the trucks turn. It was a busy day at the port.",
    qs:[
      {q:"Where did the ship come to?", a:"The port in Monrovia."},
      {q:"Name two things the ship brought.", a:"Any two of: rice, chairs, cloth."},
      {q:"How long did the workers take?", a:"Three hours."},
      {q:"Where did the boxes go?", a:"To the shops in the city and to the villages."},
      {q:"Why do you think the children watched?", a:"Because it was busy and interesting to see."}
    ]
  },
  activities:["Digraph sorting with flash cards","Plural formation race","Timed fluency reading","Read and answer questions"],
  materials:["Phonics for Liberian Schools Book 2","Word charts","Flash cards","Supplementary readers"],
  assessment:["Digraph reading check","Plural formation test","Comprehension exercise","Spelling quiz"]
},
{
  grade:2, period:"III", sem:"One", icon:"⏱️",
  title:"Language · Verb Tenses and Punctuation",
  subtitle:"Present and past tense, capital letters, full stops and question marks",
  outcomes:["Use present and past tense verbs correctly and apply basic punctuation"],
  objectives:[
    "Change verbs from present to past tense",
    "Use capital letters for names, places and the start of sentences",
    "Use full stops, question marks and exclamation marks",
    "Write correct sentences from dictation"
  ],
  note:"Most verbs form the <b>past tense</b> by adding <b>-ed</b>: <i>walk → walked</i>. Some verbs are irregular and change completely: <i>go → went</i>, <i>eat → ate</i>.",
  study:[
    /* ---- course text: Semester One, Period III (guide pp. 35-38) ---- */
    {k:"h3", t:"Reading Journals, Articles and Poems"},
    {k:"bul", items:["A **journal** is a record of what happened, written by the person who was there; it carries a **date** and is usually in the first person (I, we). To find its elements, ask: who wrote it, when, what happened, and how the writer felt about it.","An **article** gives information about one subject. Its **features** are the heading, the first sentence that names the main idea, the paragraphs of details, and often a photograph with a caption.","**Informational texts** – a report, a recipe, a timetable, a map – are read for facts. Look first at the heading and the picture, then read for the answer.","A **poem** is read aloud for its sound. Notice the **stanza** (the group of lines), the **rhyme** (like-sound at the line ends), and the **rhythm** (the beat of the lines)."]},
    {k:"p", t:"When you read a non-fiction article: say the main idea, list two facts the text gave, and say one question you would still like to ask."},
    {k:"rule"},
    {k:"h3", t:"Objects of the Verb: Direct and Indirect"},
    {k:"p", t:"The **direct object** answers what? or whom? after the verb; the **indirect object** answers to whom? or for whom?: in He gave the students some books, **some books** is the direct object and **the students** is the indirect object. In Juah bought a gift, **a gift** is the direct object."},
    {k:"num", items:["Say the sentence.","Find the verb.","Ask the verb what? – the answer is the direct object.","Ask to whom? or for whom? – if the text answers it, that is the indirect object."]},
    {k:"rule"},
    {k:"h3", t:"Verbs: Participles and the Three Tenses"},
    {k:"p", t:"A **participle** is a verb form used as a doer or as a describer. The **present participle** ends in -ing (walking); the **past participle** of regular verbs ends in -ed (walked) and of irregular verbs takes its own form (gone, eaten, written, seen)."},
    {k:"table", head:["Tense","What it says","Form","Example"], rows:[
      ["Present","what happens always or now","verb, or verb + s","I walk. She walks."],
      ["Past","what finished before now","verb + ed, or the irregular past","I walked. He went."],
      ["Present participle","what is going on now","is/am/are + verb-ing","I am walking."],
      ["Past participle","what is done already","has/have + past participle","I have walked."]
    ]},
    {k:"p", t:"Some verbs do not follow the –ed rule: go → went → gone; eat → ate → eaten; come → came → come; see → saw → seen. These are the **irregular verbs**, and they must be learned as they come."},
    {k:"rule"},
    {k:"h3", t:"Synonyms and Antonyms"},
    {k:"bul", items:["**Synonyms** are words with the same or nearly the same meaning: large / big, glad / happy, tiny / small, begin / start.","**Antonyms** are words with opposite meaning: high / low, hot / cold, early / late, strong / weak.","Using a synonym keeps writing fresh: instead of saying big four times, say large, great, tall.","A **dictionary** gives the meaning, the part of speech, the syllable division and sometimes the sound of a word; a **thesaurus** gives the synonyms."]},
    {k:"rule"},
    {k:"h3", t:"Oral Communication and the Friendly Letter"},
    {k:"p", t:"**Dramatization** is acting out a story: take the part of a character, speak that character’s lines clearly and loudly, and use the face and the hands to show what the words mean."},
    {k:"p", t:"A **friendly letter** has five parts, each with its place on the paper:"},
    {k:"num", items:["The **heading** – the writer’s address and the date, at the right hand top.","The **salutation** – Dear Musa, just under it at the left.","The **body** – what you have to say, in sentences with a capital letter at the start of each and a full stop at the end.","The **closing** – Yours sincerely, or Your friend, at the right.","The **signature** – your own name under the closing."]},
    {k:"bul", items:["Begin the letter with **Dear**, and end with **Yours sincerely**.","A **journal** for the week may be kept the same way: date, then what happened, then how you felt.","**Sight words**: always, never, often, sometimes, yesterday, tomorrow, today, again, almost, enough. **Spell**: walked, jumping, played, helped, silent, write, listen, climb."]},
    {k:"p", t:"Punctuation rule of this period: a **question** ends with a question mark, a **wondering or command** may end with an exclamation mark, a **title** takes a capital at the start of the important words, and the names of people and places always take a capital."}
  ],
  focus:["Present and past tense","Regular and irregular verbs","Capital letters","End punctuation"],
  words:[
    {w:"walk", s:"walk", d:"to move on foot", x:"I walk to school."},
    {w:"jump", s:"jump", d:"to spring up", x:"The boy can jump high."},
    {w:"play", s:"play", d:"to have fun", x:"They play football."},
    {w:"help", s:"help", d:"to assist", x:"I help my mother."},
    {w:"carry", s:"car-ry", d:"to take something with you", x:"She can carry the bucket."},
    {w:"open", s:"o-pen", d:"to make not shut", x:"Open the window."},
    {w:"close", s:"close", d:"to shut", x:"Close the door."},
    {w:"answer", s:"an-swer", d:"a reply", x:"Give me your answer."},
    {w:"question", s:"ques-tion", d:"something you ask", x:"Ask a question."},
    {w:"listen", s:"lis-ten", d:"to pay attention with your ears", x:"Listen to the teacher."}
  ],
  sight:["always","never","often","sometimes","yesterday","tomorrow","today","again","almost","enough"],
  phonics:[
    {p:"-ed", label:"the -ed ending", words:["walked","jumped","played","helped","opened"]},
    {p:"-ing", label:"the -ing ending", words:["walking","jumping","playing","helping","reading"]},
    {p:"silent letters", label:"silent letters", words:["listen","write","know","climb","hour"]}
  ],
  grammar:[
    {q:"Change to past tense: I walk to school. → I ____ to school.", a:"walked", why:"Add -ed for regular verbs."},
    {q:"Change to past tense: She plays football. → She ____ football.", a:"played", why:"Add -ed."},
    {q:"Change to past tense: He goes home. → He ____ home.", a:"went", why:"Go is irregular: go → went."},
    {q:"Change to past tense: We eat rice. → We ____ rice.", a:"ate", why:"Eat is irregular: eat → ate."},
    {q:"What punctuation ends a question?", a:"question mark", why:"Questions end with ?"},
    {q:"What punctuation shows strong feeling?", a:"exclamation mark", why:"Strong feeling ends with !"}
  ],
  pairs:[
    {a:"walk", b:"walked", kind:"tense"},
    {a:"play", b:"played", kind:"tense"},
    {a:"go", b:"went", kind:"tense"},
    {a:"eat", b:"ate", kind:"tense"},
    {a:"see", b:"saw", kind:"tense"},
    {a:"open", b:"close", kind:"antonym"}
  ],
  passage:{
    title:"Yesterday at School",
    text:"Yesterday we walked to school together. The teacher opened the door and we went inside. We listened carefully to the lesson. Flomo answered three questions correctly. At break time we played football on the field. Then the rain came, so we closed the windows. We stayed inside and read our books until the rain stopped.",
    qs:[
      {q:"How did the children get to school?", a:"They walked."},
      {q:"Who answered three questions correctly?", a:"Flomo."},
      {q:"What did they play at break time?", a:"Football."},
      {q:"Why did they close the windows?", a:"Because the rain came."},
      {q:"Write three past tense verbs from the passage.", a:"Any three of: walked, opened, went, listened, answered, played, closed, stayed, read, stopped."}
    ]
  },
  activities:["Verb tense chart building","Punctuation correction drills","Dictation practice","Act out present and past actions"],
  materials:["Grammar and Composition Book 2","Verb tense charts","Exercise books","Flash cards"],
  assessment:["Tense conversion test","Punctuation exercise","Dictation","Participation"]
},
{
  grade:2, period:"IV", sem:"Two", icon:"🗣️",
  title:"Reading & Writing · Describing and Retelling",
  subtitle:"Adjectives, sentence building and short paragraph writing",
  outcomes:["Use adjectives to describe and write short connected paragraphs"],
  objectives:[
    "Identify and use adjectives in sentences",
    "Build sentences from given words",
    "Write a short paragraph of three to five sentences",
    "Read and retell a passage"
  ],
  note:"A <b>paragraph</b> is a group of sentences about ONE idea. Start the first line a little way in (indent), begin with a capital letter, and end each sentence with a full stop.",
  study:[
    /* ---- course text: Semester Two, Period IV (guide pp. 39-42) ---- */
    {k:"h3", t:"Reading Journals and Articles"},
    {k:"num", items:["Read a journal entry and name its **date**, its **writer** and its **events**.","Read an article and say the **main idea** of the article in one sentence.","Read a **fable** and name the animals that act as people; then say the **moral** – the lesson the fable teaches.","Read a non-fiction article and separate what is a **fact** from what is the writer’s **opinion**.","Listen to a poem and read it again aloud; mark the words that rhyme at the end of the lines."]},
    {k:"p", t:"A **fable** is a very short story in which animals speak and behave like human beings and a lesson is taught at the end; the tortoise that wins the race and the fly that sits on the wheel are told in fables. To find its features, ask: which animals act as people? what trouble came? what lesson does the story leave?"},
    {k:"rule"},
    {k:"h3", t:"Descriptive Writing"},
    {k:"bul", items:["A **descriptive** paragraph paints the picture of a person, place or thing.","Start with the main sentence, then add the details: how it looks, how it sounds, how it feels, what it does.","Use adjectives – beautiful, strong, quiet, noisy, kind, brave, heavy, light, narrow, wide – and one adverb to tell how: she walked softly.","Compare and contrast: the road to the village is longer than the road to the school, but it is smoother.","A **paragraph** is a group of sentences about **one idea**; the first sentence names that idea."]},
    {k:"rule"},
    {k:"h3", t:"The Writing Process"},
    {k:"p", t:"Nothing good is written in a single pass. The writer moves through five steps, and each step has its own work:"},
    {k:"num", items:["**Choosing a topic** – pick what you know and what your reader needs to hear; narrow it to one thing.","**Organising your ideas** – list them, then put them in the order they will be told; a plan or web keeps the order.","**Prewriting (developing the purpose)** – ask why you are writing and who will read it; decide the main sentence before you begin.","**Making a draft** – write it out in sentences and paragraphs; do not stop to fix the spelling while the ideas are running.","**Revising** – read for sense: add a detail that is wanted, take out what does not serve, move sentences to a better place.","**Editing** – read again for the marks: capitals, full stops, spelling, and the shape of the letters; then copy it cleanly."]},
    {k:"p", t:"**Check the writing** before it leaves the desk: a capital letter at the beginning of every sentence, a full stop at the end of every sentence, and no idea left in the middle of nowhere."},
    {k:"rule"},
    {k:"h3", t:"The Alphabet Principle"},
    {k:"p", t:"**Alphabetical order** is the order of the letters a–z, and it is how dictionaries, index pages, class registers and the library keep their words so that anyone can find them."},
    {k:"num", items:["Say the alphabet until you can name it without looking.","Arrange letters and words by their **first letter** – cat before dog.","When the first letters are alike, use the **second letter** – bag before bat.","Put your own name in order with the names of the class; find the first name and the last name.","Use the guide words at the top of a dictionary page to know which words are inside it."]},
    {k:"rule"},
    {k:"h3", t:"Sounds, Endings and Sight Words"},
    {k:"bul", items:["**Endings that change a word**: care + ful → careful, beauty + ful → beautiful, help + ful → helpful; noise + y → noisy, rain + y → rainy, fun + y → funny.","The **ow** sound: narrow, window, yellow, follow, slow; in cow and now it says the long i sound.","**Sight words**: through, although, enough, thought, brought, caught, learn, earth, world, young. Notice how differently ough is spoken in the first four of them – such words must be taken as they stand.","**Vocabulary**: keep a word book; enter the new word, the sentence that carried it, and a synonym for it."]},
    {k:"p", t:"Read aloud with expression at the end of the period: a short passage, without stopping at every word, with the voice shaped at the commas and the full stops."}
  ],
  focus:["Adjectives","Sentence building","Paragraph writing","Retelling"],
  words:[
    {w:"beautiful", s:"beau-ti-ful", d:"very pretty", x:"The flower is beautiful."},
    {w:"strong", s:"strong", d:"having power", x:"The man is strong."},
    {w:"quiet", s:"qui-et", d:"making little noise", x:"The class is quiet."},
    {w:"noisy", s:"nois-y", d:"making much noise", x:"The market is noisy."},
    {w:"kind", s:"kind", d:"good to others", x:"She is a kind girl."},
    {w:"brave", s:"brave", d:"not afraid", x:"The brave boy helped."},
    {w:"heavy", s:"heav-y", d:"weighing a lot", x:"The bag is heavy."},
    {w:"light", s:"light", d:"not heavy", x:"The box is light."},
    {w:"narrow", s:"nar-row", d:"not wide", x:"The path is narrow."},
    {w:"wide", s:"wide", d:"large from side to side", x:"The river is wide."}
  ],
  sight:["through","although","enough","thought","brought","caught","learn","earth","world","young"],
  phonics:[
    {p:"-ful", label:"the -ful ending", words:["beautiful","helpful","careful","useful","playful"]},
    {p:"-y", label:"the -y ending", words:["noisy","heavy","happy","funny","rainy"]},
    {p:"ow", label:"the ow sound", words:["narrow","window","yellow","follow","slow"]}
  ],
  grammar:[
    {q:"Find the adjective: The strong man lifted the box.", a:"strong", why:"Strong describes the man."},
    {q:"Find the adjective: We walked on a narrow path.", a:"narrow", why:"Narrow describes the path."},
    {q:"Add an adjective: I saw a ____ river.", a:"wide", why:"Any sensible adjective is accepted."},
    {q:"The opposite of heavy is ____.", a:"light", why:"Light is the opposite of heavy."},
    {q:"The opposite of quiet is ____.", a:"noisy", why:"Noisy is the opposite of quiet."},
    {q:"A group of sentences about one idea is a ____.", a:"paragraph", why:"That is the definition of a paragraph."}
  ],
  pairs:[
    {a:"heavy", b:"light", kind:"antonym"},
    {a:"quiet", b:"noisy", kind:"antonym"},
    {a:"wide", b:"narrow", kind:"antonym"},
    {a:"brave", b:"bold", kind:"synonym"},
    {a:"kind", b:"gentle", kind:"synonym"},
    {a:"beautiful", b:"pretty", kind:"synonym"}
  ],
  passage:{
    title:"The Wide River",
    text:"Near our village there is a wide river. The water is brown and moves slowly. A narrow bridge crosses it. In the morning the place is quiet. Women carry heavy buckets to fetch water. Children swim near the bank. A brave fisherman takes his small boat far out. In the evening the river is noisy with birds. It is a beautiful place.",
    qs:[
      {q:"Where is the river?", a:"Near the village."},
      {q:"What crosses the river?", a:"A narrow bridge."},
      {q:"What do the women carry?", a:"Heavy buckets, to fetch water."},
      {q:"Who takes a boat far out?", a:"A brave fisherman."},
      {q:"Write three adjectives used in the passage.", a:"Any three of: wide, brown, narrow, quiet, heavy, brave, small, noisy, beautiful."}
    ]
  },
  activities:["Adjective hunt in a passage","Build sentences from word cards","Write a paragraph about your village","Retell to a partner"],
  materials:["Grammar and Composition Book 2","Picture cards","Chart paper","Exercise books"],
  assessment:["Adjective identification test","Written paragraph","Oral retelling","Peer assessment"]
},
{
  grade:2, period:"V", sem:"Two", icon:"🔍",
  title:"Reading & Comprehension · Context Clues and Word Meaning",
  subtitle:"Working out new words from the sentence around them",
  outcomes:["Use context to work out the meaning of unfamiliar words"],
  objectives:[
    "Use context clues to find the meaning of new words",
    "Match words to their meanings",
    "Use a picture dictionary",
    "Answer questions about a text"
  ],
  note:"<b>Context clues</b> are the other words in the sentence that help you guess a new word. In <i>\"The soil was arid, so nothing could grow\"</i>, the words <i>nothing could grow</i> tell you <b>arid</b> means very dry.",
  study:[
    /* ---- course text: Semester Two, Period V (guide pp. 43-47) ---- */
    {k:"h3", t:"R-Controlled Vowels"},
    {k:"p", t:"When a vowel stands before **r**, the r changes the vowel’s voice; this is called an **r-controlled vowel** – the vowel is said to be grown by the r. Read the whole syllable as one sound, never the vowel and the r apart."},
    {k:"table", head:["Pattern","Words"], rows:[
      ["ar","car, farm, park, dark, star"],
      ["er","her, term, teacher, farmer, sister"],
      ["ir","bird, first, girl, shirt, third"],
      ["or","corn, fork, short, north, horse"],
      ["ur","turn, hurt, nurse, burn, purple"],
      ["are, air","care, share, hair, chair, fair"]
    ]},
    {k:"p", t:"The ending **-er** on a verb makes the doer of the action: teach → teacher, farm → farmer, sing → singer, read → reader. This is a **suffix** that changes the part of speech."},
    {k:"rule"},
    {k:"h3", t:"Biography and Sequence"},
    {k:"bul", items:["A **biography** is the life story of a real person written by someone else; a life story written by the person themselves is an **autobiography**.","A biography names: the person, when and where they were born, what they did, the work they are remembered for, and what we gained from it.","**Sequence** is the order of events. The signal words are first, next, then, after that, later, finally; and dates and times fix the order even more firmly.","To find the sequence of a text, list the events, then put a number before each one. If two events are given out of their true order, say which one came first.","Read a short biography aloud and tell the life in five sentences, in order."]},
    {k:"rule"},
    {k:"h3", t:"Poems and Their Elements"},
    {k:"table", head:["Word","What it means","Look for it"], rows:[
      ["Poem","writing arranged in lines rather than in paragraphs","the shape on the page"],
      ["Stanza","a group of lines in a poem, like a paragraph","the blank space between the groups"],
      ["Line","one row of words in a poem","count them"],
      ["Rhyme","like sound at the ends of lines","star / are, night / light"],
      ["Rhythm","the beat made by the strong and weak syllables","clap as you read"],
      ["Verse","a line, or a stanza, of a poem","in hymns and songs"]
    ]},
    {k:"p", t:"Read a poem twice: once for the sense, and once for the sound. Mark the words that rhyme and say what the poem makes you feel."},
    {k:"rule"},
    {k:"h3", t:"Figurative Language: Simile"},
    {k:"p", t:"A **simile** compares two different things by using the words **like** or **as**. The river runs like lightning; the baby slept like a log; she is as quiet as a mouse. A simile is not a true statement about the two things – it borrows one feature of the second thing to make the first thing clear and living."},
    {k:"bul", items:["Say what is being compared, and what quality is being borrowed.","Build your own: the harmattan wind was as cold as … – finish it well.","Find a simile in the poem read aloud today and say it again in plain words."]},
    {k:"rule"},
    {k:"h3", t:"Present Progressive, Perfect Tense and Telling the Time"},
    {k:"p", t:"The **present progressive tense** speaks of an action that is going on now. It is made with the helping verb **to be** in the present tense plus the **present participle** (verb + ing): “I **am buying** all my family’s gifts early this year; she **is cooking** the rice; we **are reading**.”"},
    {k:"bul", items:["The **present perfect** is made with has / have + past participle and speaks of what is finished or of what still holds: “I **have eaten**; she **has gone** home.”","The **past perfect** uses had + past participle for what was finished before another past thing: “I **had left** before the rain came.”","**Telling time**: the clock has a short hand for the **hour** and a long hand for the **minutes**; 30 minutes is half past, 15 minutes is a quarter past, and 15 minutes before the hour is a quarter to. It is twenty past six; school begins at seven o’clock."]},
    {k:"rule"},
    {k:"h3", t:"Word Meaning from the Text"},
    {k:"p", t:"A **context clue** is help the sentence gives to a word you have not met. The meaning may be told right in the sentence, shown by an example, or thrown into relief by an opposite word."},
    {k:"bul", items:["“The bag was so heavy that Musu was **weary**” – weary means very tired.They gathered the mangoes into one basket – gathered means brought together.“The room was **silent**; no one spoke” – silent means making no sound.","Endings of this period: -ous makes a describing word – enormous, generous, famous, nervous, dangerous; -ent – silent, student, present, different, ancient.","**Silent letters** are written but not spoken: the l in walk, the t in listen, the w in write, the k in know, the b in climb, the h in hour.","**Sight words**: answer, special, suddenly, perhaps, certain, measure, several, possible, complete, remember. **Vocabulary**: enormous, tiny, rapid, weary, gather, journey, silent, ancient, peculiar, generous."]},
    {k:"p", t:"Keep a dictionary open in the lesson: find the guide words, run to the middle letter, and read the entry – the word, its syllables, its part of speech, then its meaning."}
  ],
  focus:["Context clues","Word meaning","Dictionary skills","Comprehension"],
  words:[
    {w:"enormous", s:"e-nor-mous", d:"very very big", x:"The elephant is enormous."},
    {w:"tiny", s:"ti-ny", d:"very very small", x:"The ant is tiny."},
    {w:"rapid", s:"rap-id", d:"very fast", x:"The river is rapid."},
    {w:"weary", s:"wea-ry", d:"very tired", x:"The farmer was weary."},
    {w:"gather", s:"gath-er", d:"to bring together", x:"We gather the fruit."},
    {w:"journey", s:"jour-ney", d:"a trip from one place to another", x:"The journey was long."},
    {w:"silent", s:"si-lent", d:"making no sound", x:"The room was silent."},
    {w:"ancient", s:"an-cient", d:"very old", x:"That is an ancient tree."},
    {w:"peculiar", s:"pe-cu-liar", d:"strange or unusual", x:"It made a peculiar sound."},
    {w:"generous", s:"gen-er-ous", d:"willing to give to others", x:"She is a generous woman."}
  ],
  sight:["answer","special","suddenly","perhaps","certain","measure","several","possible","complete","remember"],
  phonics:[
    {p:"-ous", label:"the -ous ending", words:["enormous","generous","famous","nervous","dangerous"]},
    {p:"-ent", label:"the -ent ending", words:["silent","student","present","different","ancient"]},
    {p:"ea", label:"the ea sound", words:["weary","hear","near","clear","year"]}
  ],
  grammar:[
    {q:"Guess the meaning: The bag was so heavy that Musu was weary. Weary means ____.", a:"very tired", why:"Carrying something heavy makes you tired."},
    {q:"Guess the meaning: The tiny ant crawled under the door. Tiny means ____.", a:"very small", why:"An ant that fits under a door is very small."},
    {q:"Guess the meaning: They gathered the mangoes into one basket. Gathered means ____.", a:"brought together", why:"Putting them in one basket = bringing together."},
    {q:"Guess the meaning: The room was silent; no one spoke. Silent means ____.", a:"making no sound", why:"No one spoke."},
    {q:"Guess the meaning: The generous man gave rice to everyone. Generous means ____.", a:"willing to give", why:"He gave to everyone."}
  ],
  pairs:[
    {a:"enormous", b:"tiny", kind:"antonym"},
    {a:"rapid", b:"slow", kind:"antonym"},
    {a:"silent", b:"noisy", kind:"antonym"},
    {a:"enormous", b:"huge", kind:"synonym"},
    {a:"weary", b:"tired", kind:"synonym"},
    {a:"ancient", b:"old", kind:"synonym"}
  ],
  passage:{
    title:"The Long Journey",
    text:"Old Ma Sonii began her journey before the sun rose. The path was narrow and the forest was silent. She carried an enormous basket of cassava on her head. After three hours she became weary and sat under an ancient cotton tree. A tiny bird sang above her. A generous farmer passing by gave her water. She thanked him and continued to the market.",
    qs:[
      {q:"When did Ma Sonii begin her journey?", a:"Before the sun rose."},
      {q:"What does 'enormous' mean here?", a:"Very big."},
      {q:"Why did she sit down?", a:"Because she became weary (very tired)."},
      {q:"What does 'ancient' tell us about the tree?", a:"That it was very old."},
      {q:"Why is the farmer called generous?", a:"Because he gave her water without being asked."}
    ]
  },
  activities:["Underline the clue words in a sentence","Match word to meaning","Use a picture dictionary","Guess-the-word game"],
  materials:["Picture dictionary","Reading passages","Word meaning cards","Supplementary readers"],
  assessment:["Context clue exercise","Matching test","Vocabulary quiz","Oral explanation"]
},
{
  grade:2, period:"VI", sem:"Two", icon:"📝",
  title:"Writing · Sentences, Lists and Simple Letters",
  subtitle:"Writing clear sentences, using commas in lists and a short friendly note",
  outcomes:["Write clear sentences and a short friendly note with correct mechanics"],
  objectives:[
    "Write complete sentences with correct capital letters and full stops",
    "Use commas to separate items in a list",
    "Write a short friendly note",
    "Check and correct their own writing"
  ],
  note:"Use a <b>comma</b> to separate things in a list: <i>I bought rice, fish, oil and pepper.</i> Notice there is no comma before the last <i>and</i>.",
  study:[
    /* ---- course text: Semester Two, Period VI (guide pp. 48-52) ---- */
    {k:"h3", t:"Words with Endings: Prefixes and Suffixes"},
    {k:"p", t:"A **prefix** is a syllable fastened before the root word to change its meaning; a **suffix** is fastened after the root to change its meaning or its part of speech. The **root word** is the part that carries the main meaning and can stand alone."},
    {k:"table", head:["Affix","What it does","Built words"], rows:[
      ["dis-","not; the opposite of","agree → disagree, like → dislike, appear → disappear"],
      ["in- / un-","not","correct → incorrect, happy → unhappy, safe → unsafe"],
      ["re-","again","write → rewrite, do → redo, play → replay"],
      ["-y","full of; like","noise → noisy, rain → rainy, sun → sunny"],
      ["-ly","in that manner","quick → quickly, slow → slowly, kind → kindly"]
    ]},
    {k:"p", t:"Read the base word first, then the whole word; say what the new word means before you write a sentence with it."},
    {k:"rule"},
    {k:"h3", t:"How-To and Persuasive Texts"},
    {k:"bul", items:["A **how-to** (procedural) text tells the way to make or do something. Its parts are a title that names the thing, a list of what is needed, and the steps in **numbered order**; its verbs are commands – take, mix, pour, press.","To follow a how-to text, read all the steps first, then do them one at a time; then retell the steps in order without the paper.","An **informational** text gives facts about a real subject; its headings, pictures and captions lead you to what you want.","A **persuasive** text tries to make you agree or act. The words that show it are should, must, always, never, best, worse, I think, everyone agrees – the writer is holding you to a side.","Descriptive details are the words that paint a picture in the reader’s mind; the persuasive writer uses them too, so that you feel the need."]},
    {k:"rule"},
    {k:"h3", t:"Reading Information from Tables, Calendars and Pictures"},
    {k:"p", t:"Not all reading is reading sentences. Information is often put in a **table**, a **calendar** or a **picture**, and each has its own way of being read."},
    {k:"bul", items:["A **table** has rows and columns; read the top line and the side line first to know what each box means – a timetable of the pump, the price of rice, the class record.","A **calendar** shows days, weeks and months; read across the week line, then find the month and the number; count the days between two dates to plan.","A **picture** or photograph tells what words cannot; look for the people, the action, the place and the thing, then read its **caption** to fix the meaning.","**Match information from reading with pictures**: read a sentence, find the picture that fits it, and be ready to say why.","**Write information from pictures**: look at the picture and write two sentences on what it shows and one on what will happen next.","A **class survey** puts questions to five classmates and writes the answers in a table so that the class can see the result."]},
    {k:"rule"},
    {k:"h3", t:"Dictionary Skill"},
    {k:"num", items:["Know the alphabet so well that you can name any letter’s place at once.","Alphabetise the words: look at the first letter, then the second, then the third.","Read the **guide words** at the top of the page – the first and last words on that page – to be sure your word is between them.","Turn the pages toward the letter you want, stopping when your word passes between the guide words.","Find the word, and read: the word in bold, its **syllables** marked with dots, its part of speech in italics, and then the meaning.","Use the meaning that fits the sentence you came from, not simply the first one printed."]},
    {k:"rule"},
    {k:"h3", t:"Sentences, Lists and the Friendly Note"},
    {k:"bul", items:["**Commas in a list**: put a comma after each item but the last – I bought rice, fish, oil and pepper; we saw goats, sheep, cows and pigs.","**Correcting your own sentence**: the first word takes a capital and a proper name too – my name is musu → My name is Musu; a question takes a question mark – where do you live → Where do you live?","A **friendly note or letter** begins with Dear, says one thing clearly, and closes with Yours sincerely and your name.","**Sight and vocabulary words**: dear, yours, sincerely, friend, please, thank, write, send, receive, reply; letter, message, address, greeting, comma, sentence, capital, correct, neat, signature.","**Ending patterns read this period**: -age (message, village, package, bandage), double letters (letter, address, comma, supper, little), -ture (signature, picture, future, nature)."]},
    {k:"p", t:"End of Grade Two: you should read grade-level text fluently, tell its main idea and two details, use a dictionary to find a word, add –s, –es and the common prefixes and suffixes, and write a short letter with capitals and end marks in their places."}
  ],
  focus:["Sentence writing","Commas in lists","Friendly note","Editing own work"],
  words:[
    {w:"letter", s:"let-ter", d:"a written message you send", x:"I wrote a letter to my aunt."},
    {w:"message", s:"mes-sage", d:"information you send", x:"Give her my message."},
    {w:"address", s:"ad-dress", d:"where a person lives", x:"Write your address."},
    {w:"greeting", s:"greet-ing", d:"words that welcome someone", x:"'Dear Ma' is a greeting."},
    {w:"comma", s:"com-ma", d:"the mark ,", x:"Put a comma after each item."},
    {w:"sentence", s:"sen-tence", d:"a complete thought in words", x:"Write one sentence."},
    {w:"capital", s:"cap-i-tal", d:"a big letter like A or B", x:"Begin with a capital letter."},
    {w:"correct", s:"cor-rect", d:"right, without mistakes", x:"Your answer is correct."},
    {w:"neat", s:"neat", d:"tidy and clean", x:"Your writing is neat."},
    {w:"signature", s:"sig-na-ture", d:"your name written by you", x:"Put your signature at the end."}
  ],
  sight:["dear","yours","sincerely","friend","please","thank","write","send","receive","reply"],
  phonics:[
    {p:"-age", label:"the -age ending", words:["message","village","package","bandage"]},
    {p:"double letters", label:"double letters", words:["letter","address","comma","supper","little"]},
    {p:"-ture", label:"the -ture ending", words:["signature","picture","future","nature"]}
  ],
  grammar:[
    {q:"Add commas: I bought rice fish oil and pepper.", a:"I bought rice, fish, oil and pepper.", why:"Commas separate items in a list."},
    {q:"Add commas: We saw goats sheep cows and pigs.", a:"We saw goats, sheep, cows and pigs.", why:"Commas separate list items."},
    {q:"Correct this: my name is musu.", a:"My name is Musu.", why:"Capital at the start and for a name."},
    {q:"Correct this: where do you live", a:"Where do you live?", why:"Capital at start, question mark at end."},
    {q:"A friendly letter begins with the word ____.", a:"Dear", why:"Friendly letters begin with 'Dear'."}
  ],
  pairs:[
    {a:"send", b:"receive", kind:"antonym"},
    {a:"correct", b:"wrong", kind:"antonym"},
    {a:"neat", b:"untidy", kind:"antonym"},
    {a:"letter", b:"message", kind:"synonym"},
    {a:"write", b:"right", kind:"homophone"},
    {a:"dear", b:"deer", kind:"homophone"}
  ],
  passage:{
    title:"A Note to Auntie",
    text:"Dear Auntie Marta,\n\nThank you for the bag you sent me. It is blue, strong and very neat. I use it every day to carry my books, pens and ruler to school. My teacher said it is a fine bag. Mother sends her greetings. Please come and visit us in the holiday.\n\nYour loving niece,\nKou",
    qs:[
      {q:"Who wrote this note?", a:"Kou."},
      {q:"Who is the note written to?", a:"Auntie Marta."},
      {q:"Why did Kou write?", a:"To thank her aunt for the bag."},
      {q:"What three things does Kou carry in the bag?", a:"Books, pens and a ruler."},
      {q:"Find one list in the note that uses commas.", a:"'blue, strong and very neat' or 'books, pens and ruler'."}
    ]
  },
  activities:["Write a note to a friend","Comma insertion drill","Edit a partner's writing","Copy a model letter neatly"],
  materials:["Model letters","Exercise books","Chart of letter parts","Writing paper"],
  assessment:["Written note assessment","Comma exercise","Editing checklist","Neatness of handwriting"]
},

/* ================= GRADE 3 ================= */
{
  grade:3, period:"I", sem:"One", icon:"🎯",
  title:"Reading · Topic Sentence and Supporting Details",
  subtitle:"Finding and writing topic sentences in a paragraph",
  outcomes:["Identify and write topic sentences with supporting details"],
  objectives:[
    "Identify the topic sentence of a paragraph",
    "Identify supporting details",
    "Write a paragraph with a topic sentence and three details",
    "Read a passage and answer questions"
  ],
  note:"The <b>topic sentence</b> tells the main idea of the paragraph — usually the first sentence. The <b>supporting details</b> are the other sentences that explain or prove it.",
  study:[
    /* ---- course text: Semester One, Period I (guide pp. 53-58) ---- */
    {k:"h3", t:"Reading and Comprehension This Period"},
    {k:"p", t:"You now read a variety of stories and identify their **elements**; you read words with varied **word patterns**; you ask and answer different types of questions; you find the **beginning, middle and end** of a story with a **story chart**; you name the **characters, setting and plot**; you **summarize** a story; you **compare and contrast** characters; and you use **context clues** to work out the meaning of a word."},
    {k:"rule"},
    {k:"h3", t:"The Story Chart and the Elements of a Story"},
    {k:"table", head:["Element","The question it answers","What to write in the chart"], rows:[
      ["Title and author","What is the story called, and who wrote it?","The name at the top; the name on the cover"],
      ["Characters","Who is in the story?","Names, and one line on what each one is like"],
      ["Setting","Where and when does it happen?","The place and the time"],
      ["Plot / events","What happens, in what order?","Beginning, middle, end"],
      ["Conflict","What is the trouble?","The problem the character must face"],
      ["Solution","How does the trouble end?","What the character did to settle it"]
    ]},
    {k:"p", t:"To **summarize** a story, say the main idea in one sentence and then tell only the events that matter, in order, leaving out the small parts. A summary is short; it is not the story told again word for word."},
    {k:"rule"},
    {k:"h3", t:"Main Idea and Context Clues"},
    {k:"bul", items:["The **main idea** is what the passage is mostly about; the **supporting details** are the sentences that prove or explain it.","To **compare** is to say how things are alike; to **contrast** is to say how they are different.","A **context clue** is help the sentence gives to a hard word: the meaning may be told plainly, shown by an example, or set against an opposite word.","Read on past the unknown word first; the sense of the whole sentence often carries the meaning to you."]},
    {k:"rule"},
    {k:"h3", t:"The Sentence, the Topic Sentence and Supporting Details"},
    {k:"p", t:"A **sentence** is a group of words that makes complete sense; it names a subject and says something about it, and it ends with a full stop, a question mark or an exclamation mark. **Definition**: a sentence is a set of words that tells a complete thought."},
    {k:"p", t:"A **paragraph** is a group of sentences about **one idea**. The sentence that tells the main idea of the paragraph is the **topic sentence**; it is usually the first sentence. The other sentences are **supporting sentences** or **supporting details**: they explain, prove, or give examples of the topic sentence."},
    {k:"num", items:["Read the paragraph once for the sense.","Ask which sentence could stand for the whole paragraph – that is the **topic sentence**.","Mark the sentences that give the details; each should answer how? or why? or for example?","Test your paragraph: if a sentence belongs to another idea, move it out or write a new topic sentence that covers it."]},
    {k:"rule"},
    {k:"h3", t:"Sounds and Word Endings"},
    {k:"bul", items:["Long a may be spelled **-ain** or **-ane**: rain, train, plain, explain, chain, brain.","The ending **-tion** (also spelled **-sion**) says /shun/: nation, action, question, attention, information, conclusion.","**ph** says /f/: paragraph, phone, photo, elephant, alphabet, graph.","**Sight words** of the period: therefore, however, because, although, finally, instead, meanwhile, besides, otherwise, furthermore – these are the words that join ideas and show the turn in a paragraph."]},
    {k:"rule"},
    {k:"h3", t:"Spelling, Vocabulary and Writing"},
    {k:"bul", items:["**Spell**: basic, locate, debate, indeed, record, bonus, cocoon, copybook, gigantic, margin, appear, falsehood. Say each word, clap its syllables, then write it.","**Vocabulary**: paragraph, topic, detail, support, explain, example, reason, important, describe, conclude. Keep the entry in your word book with the sentence that carried it.","**Oral communication**: use correct sentences to speak clearly – greet, ask, answer, and tell the class three things about your family in order.","**Writing composition**: write a **story summary**; then check the writing for **capital letters at the beginning of sentences** and **periods at the end**.","Read and discuss a **poem** aloud: name the **stanza**, the **rhyme** and the **rhythm**, and say what feeling the poem leaves with you."]},
    {k:"p", t:"Self-check before the copy is handed in: one idea in the paragraph, the topic sentence first, three details under it, and the marks in their places."}
  ],
  focus:["Topic sentence","Supporting details","Paragraph structure","Comprehension"],
  words:[
    {w:"paragraph", s:"par-a-graph", d:"a group of sentences about one idea", x:"Write one paragraph."},
    {w:"topic", s:"top-ic", d:"the subject you write about", x:"The topic is farming."},
    {w:"detail", s:"de-tail", d:"a small piece of information", x:"Give one more detail."},
    {w:"support", s:"sup-port", d:"to help or back up", x:"These facts support the idea."},
    {w:"explain", s:"ex-plain", d:"to make clear", x:"Explain your answer."},
    {w:"example", s:"ex-am-ple", d:"something that shows what you mean", x:"Give an example."},
    {w:"reason", s:"rea-son", d:"why something happens", x:"Give a reason."},
    {w:"important", s:"im-por-tant", d:"of great value", x:"Water is important."},
    {w:"describe", s:"de-scribe", d:"to say what something is like", x:"Describe your village."},
    {w:"conclude", s:"con-clude", d:"to finish or decide", x:"We conclude the lesson."}
  ],
  sight:["therefore","however","because","although","finally","instead","meanwhile","besides","otherwise","furthermore"],
  phonics:[
    {p:"-ain/-ane", label:"long a spellings", words:["explain","train","plane","chain","brain"]},
    {p:"-tion", label:"the -tion ending", words:["nation","action","question","attention","information"]},
    {p:"ph", label:"ph says f", words:["paragraph","phone","photo","elephant","alphabet"]}
  ],
  grammar:[
    {q:"The sentence that tells the main idea of a paragraph is the ____ sentence.", a:"topic", why:"That is the definition."},
    {q:"Sentences that explain the main idea are ____ details.", a:"supporting", why:"They support the topic sentence."},
    {q:"Where is the topic sentence usually found?", a:"at the beginning", why:"Usually it is the first sentence."},
    {q:"A group of sentences about one idea is a ____.", a:"paragraph", why:"Definition of a paragraph."},
    {q:"Give a word that means 'to make clear':", a:"explain", why:"Explain means to make clear."}
  ],
  pairs:[
    {a:"important", b:"unimportant", kind:"antonym"},
    {a:"begin", b:"conclude", kind:"antonym"},
    {a:"explain", b:"clarify", kind:"synonym"},
    {a:"detail", b:"fact", kind:"synonym"},
    {a:"reason", b:"cause", kind:"synonym"}
  ],
  passage:{
    title:"Why the Cotton Tree Matters",
    text:"The cotton tree is important to many Liberian villages. It grows very tall and gives wide shade, so people meet under it in the hot afternoon. Elders sit there to settle disputes and to tell stories to the children. Birds and bats live in its high branches. Because it lives for hundreds of years, a cotton tree often marks the very centre of a town.",
    qs:[
      {q:"Write the topic sentence of this paragraph.", a:"The cotton tree is important to many Liberian villages."},
      {q:"Give one supporting detail.", a:"Any of: it gives wide shade; elders settle disputes under it; birds and bats live in it; it marks the centre of town."},
      {q:"Why do people meet under the tree?", a:"Because it gives wide shade in the hot afternoon."},
      {q:"What do the elders do there?", a:"Settle disputes and tell stories to children."},
      {q:"How long can a cotton tree live?", a:"Hundreds of years."}
    ]
  },
  activities:["Underline the topic sentence in given paragraphs","Sort sentences into topic and detail","Write a paragraph with three details","Group presentation"],
  materials:["Grammar and Composition Book 3","Reading passages","Chart paper","Exercise books"],
  assessment:["Topic sentence identification","Written paragraph","Comprehension test","Peer assessment"]
},
{
  grade:3, period:"II", sem:"One", icon:"✒️",
  title:"Writing Composition & Vocabulary Development",
  subtitle:"Planning and writing a short composition",
  outcomes:["Plan, draft and write a short composition using new vocabulary"],
  objectives:[
    "Plan a composition using a simple outline",
    "Write an introduction, body and conclusion",
    "Use new vocabulary in writing",
    "Edit work for spelling and punctuation"
  ],
  note:"A composition has three parts: an <b>introduction</b> (says what you will write about), a <b>body</b> (gives the details) and a <b>conclusion</b> (finishes the idea).",
  study:[
    /* ---- course text: Semester One, Period II (guide pp. 59-65) ---- */
    {k:"h3", t:"Word Skill: Building New Words"},
    {k:"p", t:"English builds a great part of its vocabulary by fastening parts onto a **root word** (also called a **base word**). A **prefix** is put before the root and changes its meaning; a **suffix** is put after the root and changes its meaning or its part of speech."},
    {k:"table", head:["Prefix","Meaning","New words"], rows:[
      ["re-","again","rewrite, return, repeat, rebuild"],
      ["un-","not","unhappy, unkind, unable"],
      ["dis-","not; the opposite of","disagree, dislike, disobey"],
      ["mis-","wrongly","misplace, miscount, misjudge"],
      ["multi-","many","multicoloured, multiply"],
      ["de-","away; down","delight, remove, detract"],
      ["dys-","bad; difficult","dysfunction"],
      ["pro-","forward; for","produce, progress, proceed"],
      ["im- / imm-","not","impossible, impatient, immature"]
    ]},
    {k:"table", head:["Suffix","What it makes","New words"], rows:[
      ["-ness","a state or quality","kindness, happiness, darkness"],
      ["-ful","full of","careful, helpful, beautiful"],
      ["-less","without","painless, hopeless, careless"],
      ["-y","like; full of","rainy, noisy, dirty"],
      ["-s / -es","more than one","watches, misses, boxes"],
      ["-ed","past time","shredded, dozed, brushed"],
      ["-ing","going on now","brushing, smiling, running"],
      ["-er / -or","one who does","teacher, reader, actor, visitor"],
      ["-ment","an act or result","agreement, movement, development"],
      ["-ion / -tion","an act or state","addition, explanation, suggestion"],
      ["-able / -ible","capable of","comfortable, visible, movable"],
      ["-ary / -ery / -ory","place or thing","library, nunnery, factory, history"]
    ]},
    {k:"p", t:"To **detach** a base word, take off the affix and ask what is left: bravery → brave; imaginary → imagine; painless → pain; explanation → explain. Notice that a suffix sometimes changes the spelling of the root: happy + ness → happiness; brave + ery → bravery."},
    {k:"rule"},
    {k:"h3", t:"Sequential Words"},
    {k:"p", t:"Words that show order are **sequential words**: first, second, next, then, after that, later, meanwhile, finally. They hold a composition together, so that the reader knows which thing happened before which. Use them at the start of a sentence or between two clauses, with the mark the sentence needs."},
    {k:"rule"},
    {k:"h3", t:"Comprehension: Diverse Writings"},
    {k:"bul", items:["A **folktale** is a story carried by word of mouth for generations; it has an ordinary person or an animal for its chief, and a lesson at the end.","A **fable** is a short tale with animals that speak and act like people, and it closes with a **moral**.","To **organise information from a text**, put the events or the facts on a chart or a line in the order the text gave them.","**Making comparison and contrast**: name how the two characters or the two tales are alike, then how they are different; use both, like, but, however, on the other hand."]},
    {k:"rule"},
    {k:"h3", t:"Writing a Composition"},
    {k:"p", t:"A short composition has three parts, and each part has its own work:"},
    {k:"table", head:["Part","What it must do","How long"], rows:[
      ["Introduction","Name the subject and say the main point; draw the reader in","Two or three sentences"],
      ["Body","Give the ideas in order, one to a paragraph, each with its details and an example","The greater part"],
      ["Conclusion","Say what the whole thing came to, or what you learned","One or two sentences"]
    ]},
    {k:"num", items:["Make an **outline**: the title, then the main points in the order you will tell them.","Write a **draft** from the outline without stopping to fix spelling.","**Revise**: add a detail that is wanted, take out what strays, move what is out of place.","**Edit**: capitals, end marks, spelling, and the joining words; then copy it neatly.","Read the copy aloud to a partner and answer one question they ask about it."]},
    {k:"rule"},
    {k:"h3", t:"Descriptive Writing, Main Idea and Grade-Level Words"},
    {k:"bul", items:["**Descriptive writing** paints the thing so that the reader sees it: what it looks like, sounds like, feels like.","Write the **main idea** first, then the **supporting details**; keep one idea in each paragraph.","**Spell and use**: watches, misses, shredded, dozed, brushing, smiling, painless, addition, explanation, suggestion, bravery, imaginary.","**Endings of this period**: -sion / -tion (conclusion, decision, nation, attention); -ence / -ance (experience, difference, importance, distance); -ate (celebrate, separate, educate, decorate).","**Sight words**: moreover, nevertheless, consequently, similarly, likewise, especially, particularly, obviously, frequently, generally.","**Vocabulary**: introduction, conclusion, outline, draft, edit, describe, experience, memory, occasion, celebrate."]},
    {k:"p", t:"**Prefixes and suffixes at work**: re- + write → rewrite; mis- + count → miscount; brave + -ery → bravery; pain + -less → painless; imagine + -ary → imaginary. Say the root, add the affix, then give the meaning of the new word in one sentence."}
  ],
  focus:["Composition planning","Introduction, body, conclusion","Vocabulary development","Editing"],
  words:[
    {w:"introduction", s:"in-tro-duc-tion", d:"the opening part", x:"Write a short introduction."},
    {w:"conclusion", s:"con-clu-sion", d:"the ending part", x:"End with a conclusion."},
    {w:"outline", s:"out-line", d:"a plan of the main points", x:"Make an outline first."},
    {w:"draft", s:"draft", d:"a first try at writing", x:"This is my first draft."},
    {w:"edit", s:"ed-it", d:"to correct and improve", x:"Edit your work."},
    {w:"describe", s:"de-scribe", d:"to say what something is like", x:"Describe the market."},
    {w:"experience", s:"ex-pe-ri-ence", d:"something that happened to you", x:"Write about your experience."},
    {w:"memory", s:"mem-o-ry", d:"something you remember", x:"It is a happy memory."},
    {w:"occasion", s:"oc-ca-sion", d:"a special time or event", x:"It was a big occasion."},
    {w:"celebrate", s:"cel-e-brate", d:"to mark a happy event", x:"We celebrate Independence Day."}
  ],
  sight:["moreover","nevertheless","consequently","similarly","likewise","especially","particularly","obviously","frequently","generally"],
  phonics:[
    {p:"-sion/-tion", label:"shun endings", words:["conclusion","decision","action","nation","attention"]},
    {p:"-ence/-ance", label:"noun endings", words:["experience","difference","importance","distance"]},
    {p:"-ate", label:"the -ate ending", words:["celebrate","separate","educate","decorate"]}
  ],
  grammar:[
    {q:"The first part of a composition is the ____.", a:"introduction", why:"It introduces the topic."},
    {q:"The last part of a composition is the ____.", a:"conclusion", why:"It concludes the writing."},
    {q:"A plan of main points before writing is an ____.", a:"outline", why:"An outline plans the writing."},
    {q:"A first attempt at writing is called a ____.", a:"draft", why:"You draft, then improve."},
    {q:"To correct and improve your writing is to ____ it.", a:"edit", why:"Editing improves writing."}
  ],
  pairs:[
    {a:"introduction", b:"conclusion", kind:"antonym"},
    {a:"begin", b:"finish", kind:"antonym"},
    {a:"draft", b:"version", kind:"synonym"},
    {a:"edit", b:"correct", kind:"synonym"},
    {a:"occasion", b:"event", kind:"synonym"}
  ],
  passage:{
    title:"Independence Day",
    text:"The twenty-sixth of July is a great occasion in Liberia. On that day we celebrate our independence. In the morning there is a parade. Schools march in their uniforms and the band plays. In the afternoon families cook special food and share it with neighbours. In the evening there is singing and dancing. It is a day that every Liberian child remembers.",
    qs:[
      {q:"What date is Independence Day in Liberia?", a:"The twenty-sixth of July."},
      {q:"What happens in the morning?", a:"There is a parade with schools marching and a band playing."},
      {q:"What do families do in the afternoon?", a:"Cook special food and share it with neighbours."},
      {q:"Write the topic sentence of this paragraph.", a:"The twenty-sixth of July is a great occasion in Liberia."},
      {q:"Write a suitable conclusion of your own for this paragraph.", a:"Accept any sensible closing sentence, e.g. 'That is why we look forward to it every year.'"}
    ]
  },
  activities:["Make an outline for 'My Village'","Write a first draft","Peer edit using a checklist","Read the best compositions aloud"],
  materials:["Grammar and Composition Book 3","Outline templates","Exercise books","Dictionary"],
  assessment:["Outline submitted","Draft and final composition","Editing checklist","Oral reading"]
},
{
  grade:3, period:"III", sem:"One", icon:"🏷️",
  title:"Recognizing Adjectives · Word Skill & Vocabulary",
  subtitle:"Kinds of adjectives and how they compare",
  outcomes:["Recognise and use adjectives, including comparative and superlative forms"],
  objectives:[
    "Recognise adjectives in sentences",
    "Use adjectives of quality, quantity and number",
    "Form comparative and superlative adjectives",
    "Use adjectives in their own writing"
  ],
  note:"Adjectives compare in three degrees: <b>positive</b> (tall), <b>comparative</b> (taller — comparing two), <b>superlative</b> (tallest — comparing three or more). Long adjectives use <i>more</i> and <i>most</i>: beautiful, more beautiful, most beautiful.",
  study:[
    /* ---- course text: Semester One, Period III (guide pp. 66-73) ---- */
    {k:"h3", t:"Journals, Articles and Informational Texts"},
    {k:"bul", items:["A **journal** is the record of what happened, written by the one who was there; it carries a date and is written in the first person (**I, we**).","An **article** gives information on one subject, under a heading, with facts arranged in paragraphs.","**Informational texts** – a report, a reader, a timetable, a map – are read for the facts they carry; the heading, the picture and the caption lead you to them.","To find the **main idea** of an article, ask which sentence the other sentences are working to prove."]},
    {k:"p", t:"**Point of view** is who is telling the story. A narrator speaking in the **first person** says I saw, we went; in the **second person** the narrator speaks to you – you will find, you turn; in the **third person** the narrator stands outside and says he, she, they, Kou said, Musu ran. Read the same short passage in the three persons and mark what changes."},
    {k:"p", t:"A **persuasive** text tries to make the reader agree or act. Its marks are the feeling words, the should and must, and the questions put to the reader; it states a position, gives reasons, and closes by calling for agreement. Distinguish it from an informative text by asking: is the writer **telling me facts** or **moving me to a side**?"},
    {k:"rule"},
    {k:"h3", t:"The Adjective"},
    {k:"p", t:"An **adjective** is a word that describes or limits a noun or a pronoun. Adjectives tell:"},
    {k:"table", head:["Kind of adjective","It tells","Examples"], rows:[
      ["Colour, look","what kind","red, bright, dark, shiny"],
      ["Number","how many","one, two, seven, many, few, some"],
      ["Size and shape","how big, what shape","small, gigantic, round, square, long"],
      ["Taste, smell, sound, touch","how it feels","sweet, bitter, fragrant, noisy, rough, hot"],
      ["Demonstrative","which one","this, that, these, those"],
      ["Interrogative","asking which","which, what, whose"],
      ["Quantitative","how much","many, half, a lot, little, much"],
      ["Possessive","whose","my, mine, his, hers, our, ours, their, theirs, your, yours, its"]
    ]},
    {k:"p", t:"Many adjectives are made by an **adjective suffix** fastened to a root: -ive (act → active, create → creative, attract → attractive), -ic (hero → heroic), -ial (space → spatial, finance → financial)."},
    {k:"rule"},
    {k:"h3", t:"Comparing with Adjectives"},
    {k:"p", t:"Adjectives have **degrees of comparison**. The **positive** degree names the quality (tall); the **comparative** compares two (taller, more beautiful); the **superlative** compares three or more (tallest, most beautiful)."},
    {k:"table", head:["Positive","Comparative","Superlative","Rule"], rows:[
      ["tall, long","taller, longer","tallest, longest","add -er, -est"],
      ["big, hot","bigger, hotter","biggest, hottest","double the final consonant, then -er, -est"],
      ["happy, noisy","happier, noisier","happiest, noisiest","change y to i, then -er, -est"],
      ["careful, beautiful","more careful, more beautiful","most careful, most beautiful","two or more syllables: use more, most"],
      ["good, bad, far","better, worse, further","best, worst, farthest","irregular – learned as they come"]
    ]},
    {k:"bul", items:["Never double the comparison: say taller, not more taller.","The **comparative** is followed by **than**; the **superlative** is preceded by **the**: Kou is taller than Musa; she is the tallest of the four."]},
    {k:"rule"},
    {k:"h3", t:"Roots, Word Development and Spelling"},
    {k:"bul", items:["A **root** carries the core meaning, and one root builds a family of words: **graph** (write, draw) → autograph, paragraph, graphic; **photo** (light) → photograph, photon; **auto** (self) → automatic, automobile; **tele** (far) → telephone, telescope; **bio / ology** (life / the study of) → biology, geology, technology.","**Endings of this period**: -er / -est (taller, biggest, happier); -ous (dangerous, delicious, famous, generous, nervous); -ive (expensive, active, creative, attractive).","**Sight words**: greater, greatest, better, best, worse, worst, further, farthest, less, least.","**Vocabulary**: tall, taller, tallest, clever, careful, dangerous, delicious, expensive, valuable, peaceful. Expand each entry with one sentence of your own.","Spelling and word development go together: define the spelling word, then say a sentence that shows you hold its meaning."]},
    {k:"p", t:"Write a short **descriptive** paragraph about a person in the compound, using at least four adjectives and one comparison; underline the topic sentence when you have finished."}
  ],
  focus:["Adjectives","Comparative and superlative","Word skill","Vocabulary development"],
  words:[
    {w:"tall", s:"tall", d:"high in height", x:"He is tall."},
    {w:"taller", s:"tall-er", d:"more tall than another", x:"He is taller than me."},
    {w:"tallest", s:"tall-est", d:"the most tall of all", x:"He is the tallest boy."},
    {w:"clever", s:"clev-er", d:"quick to learn", x:"She is a clever pupil."},
    {w:"careful", s:"care-ful", d:"paying attention", x:"Be careful with the glass."},
    {w:"dangerous", s:"dan-ger-ous", d:"likely to cause harm", x:"The road is dangerous."},
    {w:"delicious", s:"de-li-cious", d:"tasting very good", x:"The soup is delicious."},
    {w:"expensive", s:"ex-pen-sive", d:"costing much money", x:"The shoes are expensive."},
    {w:"valuable", s:"val-u-a-ble", d:"worth a lot", x:"Education is valuable."},
    {w:"peaceful", s:"peace-ful", d:"calm and quiet", x:"The village is peaceful."}
  ],
  sight:["greater","greatest","better","best","worse","worst","further","farthest","less","least"],
  phonics:[
    {p:"-er/-est", label:"comparing endings", words:["taller","tallest","bigger","biggest","happier","happiest"]},
    {p:"-ous", label:"the -ous ending", words:["dangerous","delicious","famous","generous","nervous"]},
    {p:"-ive", label:"the -ive ending", words:["expensive","active","creative","attractive"]}
  ],
  grammar:[
    {q:"Comparative of tall:", a:"taller", why:"Short adjectives add -er."},
    {q:"Superlative of tall:", a:"tallest", why:"Short adjectives add -est."},
    {q:"Comparative of big:", a:"bigger", why:"Double the final consonant, add -er."},
    {q:"Superlative of happy:", a:"happiest", why:"Change y to i, add -est."},
    {q:"Comparative of beautiful:", a:"more beautiful", why:"Long adjectives use 'more'."},
    {q:"Superlative of good:", a:"best", why:"Good is irregular: good, better, best."}
  ],
  pairs:[
    {a:"expensive", b:"cheap", kind:"antonym"},
    {a:"dangerous", b:"safe", kind:"antonym"},
    {a:"peaceful", b:"violent", kind:"antonym"},
    {a:"clever", b:"intelligent", kind:"synonym"},
    {a:"delicious", b:"tasty", kind:"synonym"},
    {a:"valuable", b:"precious", kind:"synonym"}
  ],
  passage:{
    title:"The Tallest Tree",
    text:"In our town there are three big trees. The mango tree is tall, but the palm tree is taller. The cotton tree is the tallest of all. Its branches are wider than the roof of our school. The shade under it is the most peaceful place in the town. Old people say it is more valuable than any building, because it has stood there longer than anyone can remember.",
    qs:[
      {q:"How many big trees are in the town?", a:"Three."},
      {q:"Which tree is the tallest?", a:"The cotton tree."},
      {q:"Write the comparative adjective used about the palm tree.", a:"Taller."},
      {q:"Which superlative describes the shade?", a:"Most peaceful."},
      {q:"Why do old people value the cotton tree?", a:"Because it has stood there longer than anyone can remember."}
    ]
  },
  activities:["Adjective degree chart","Compare classroom objects orally","Adjective hunt in a reader","Write five comparing sentences"],
  materials:["Grammar and Composition Book 3","Adjective charts","Classroom objects","Exercise books"],
  assessment:["Degree formation test","Written sentences","Oral comparison task","Quiz"]
},
{
  grade:3, period:"IV", sem:"Two", icon:"🤝",
  title:"Subject–Verb Agreement",
  subtitle:"Making the verb match the subject",
  outcomes:["Apply subject–verb agreement correctly in speech and writing"],
  objectives:[
    "Identify the subject and the verb in a sentence",
    "Match singular subjects with singular verbs",
    "Match plural subjects with plural verbs",
    "Correct sentences with wrong agreement"
  ],
  note:"A <b>singular subject</b> takes a verb with <b>-s</b>: <i>The boy runs.</i> A <b>plural subject</b> takes a verb without -s: <i>The boys run.</i> Remember: <i>He, she, it</i> → add s. <i>I, you, we, they</i> → no s.",
  study:[
    /* ---- course text: Semester Two, Period IV (guide pp. 74-77) ---- */
    {k:"h3", t:"Subject and Verb"},
    {k:"p", t:"Every sentence has a **subject** – the person, place or thing the sentence is about – and a **predicate**, which says something about it. The chief word of the predicate is the **verb**. In The boys play football, **the boys** is the subject and **play** is the verb."},
    {k:"bul", items:["To find the **subject**, put who or what before the verb: who plays? → the boys.","To find the **verb**, ask what the subject does: the boys do what? → play.","The subject may be a **noun** or a **pronoun** – Musu runs; she runs – and the verb must agree with whichever stands as the subject."]},
    {k:"rule"},
    {k:"h3", t:"Subject–Verb Agreement"},
    {k:"p", t:"**Agreement** means that the verb takes the form the subject demands: a **singular** subject takes a singular verb, and a **plural** subject takes a plural verb. In the present tense the rule for regular verbs is short:"},
    {k:"table", head:["Subject","Verb form","Example"], rows:[
      ["He / She / It (singular)","add -s or -es","The boy runs. She goes to market."],
      ["I / You / We / They (plural)","the base form","The boys run. They go to market."],
      ["Two or more joined by and","plural","Kou and Musa play football."],
      ["Each, every, either, one","singular","Each pupil has a book."]
    ]},
    {k:"bul", items:["Verbs ending in -o, -s, -sh, -ch, -x take **-es** with a singular subject: he goes, she watches, it fixes, he buzzes.","The helping verbs follow the same law: “he **is**, they **are**; he **has**, they **have**; it **was**, they **were**; I **am**”.","Do not let words standing between the subject and the verb draw you into a mistake: in “The box of mangoes **is** heavy”, the subject is **box**, not mangoes."]},
    {k:"rule"},
    {k:"h3", t:"Correcting Errors"},
    {k:"num", items:["Read the sentence aloud – the ear often hears what the eye passed over.","Find the subject; say whether it is singular or plural.","Find the verb; try both forms and choose the one that matches.","Rewrite the whole sentence correctly, with the capital and the end mark.","Keep a list of the errors you corrected; check the list before the next piece of writing."]},
    {k:"p", t:"Practise on these: The dogs barks loudly → **The dogs bark loudly**; My friend go to school → **My friend goes to school**; Every pupil have a pen → **Every pupil has a pen**; They was at the market → **They were at the market**."},
    {k:"rule"},
    {k:"h3", t:"Pronouns and Phrases in a Text"},
    {k:"bul", items:["**Personal pronouns** – I, you, he, she, it, we, they; **possessive** – my, your, his, her, its, our, their; **demonstrative** – this, that, these, those; **indefinite** – some, many, few, all, each; **interrogative** – who, whom, whose, which, what.","A **phrase** is two or more words working together without a subject and verb of its own: in the morning, on the table, with a loud voice. Identify phrases in a passage and say which word each phrase depends on.","A **clause** has its own subject and verb; a sentence may join clauses with and, but, because, when."]},
    {k:"rule"},
    {k:"h3", t:"Similarity and Difference; Compound Nouns"},
    {k:"bul", items:["**Synonyms** are words of like meaning (big / large, glad / happy, begin / start); **antonyms** are words of opposite meaning (high / low, brave / cowardly). Differentiate the two by putting each word in a sentence of your own.","**Compound words** are built from two words joined together; when two nouns join to name one thing the result is a **compound noun**: classroom, notebook, sunflower, grandmother, watermelon, basketball.","Write two singular and two plural compound nouns, and say which simple words each was made from."]},
    {k:"p", t:"**Sound work**: the verb endings -s / -es (runs, goes, watches, fixes, plays); the **-le** ending (table, little, people, simple, middle); the root **-ject** (subject, object, project, reject – ject means throw). **Sight words**: does, doesn’t, don’t, was, were, has, have, is, are, am."}
  ],
  focus:["Subject and verb","Singular and plural agreement","Correcting errors"],
  words:[
    {w:"subject", s:"sub-ject", d:"who or what the sentence is about", x:"Find the subject."},
    {w:"verb", s:"verb", d:"an action or being word", x:"Underline the verb."},
    {w:"singular", s:"sin-gu-lar", d:"only one", x:"'Boy' is singular."},
    {w:"plural", s:"plu-ral", d:"more than one", x:"'Boys' is plural."},
    {w:"agree", s:"a-gree", d:"to match", x:"The verb must agree with the subject."},
    {w:"sentence", s:"sen-tence", d:"a complete thought", x:"Write a full sentence."},
    {w:"correct", s:"cor-rect", d:"free from error", x:"Make it correct."},
    {w:"error", s:"er-ror", d:"a mistake", x:"Find the error."},
    {w:"rule", s:"rule", d:"a statement of what is right", x:"Follow the rule."},
    {w:"practise", s:"prac-tise", d:"to do again to improve", x:"Practise every day."}
  ],
  sight:["does","doesn't","don't","was","were","has","have","is","are","am"],
  phonics:[
    {p:"-s/-es verb endings", label:"verb endings", words:["runs","goes","watches","fixes","plays"]},
    {p:"-le", label:"the -le ending", words:["table","little","people","simple","middle"]},
    {p:"-ject", label:"the -ject root", words:["subject","object","project","reject"]}
  ],
  grammar:[
    {q:"The boy ____ (run) to school.", a:"runs", why:"Singular subject takes -s."},
    {q:"The boys ____ (run) to school.", a:"run", why:"Plural subject takes no -s."},
    {q:"She ____ (go) to the market.", a:"goes", why:"She is singular: go → goes."},
    {q:"They ____ (go) to the market.", a:"go", why:"They is plural: no -s."},
    {q:"My mother ____ (cook) rice.", a:"cooks", why:"Singular subject takes -s."},
    {q:"The children ____ (play) football.", a:"play", why:"Children is plural."},
    {q:"Correct: The dogs barks loudly.", a:"The dogs bark loudly.", why:"Plural subject takes no -s."},
    {q:"Correct: My friend go to school.", a:"My friend goes to school.", why:"Singular subject takes -s."}
  ],
  pairs:[
    {a:"is", b:"are", kind:"agreement"},
    {a:"was", b:"were", kind:"agreement"},
    {a:"has", b:"have", kind:"agreement"},
    {a:"does", b:"do", kind:"agreement"},
    {a:"singular", b:"plural", kind:"antonym"},
    {a:"correct", b:"error", kind:"antonym"}
  ],
  passage:{
    title:"At the Market",
    text:"My mother goes to the market every Saturday. She buys rice, fish and pepper. The traders call out their prices. A woman sells bananas near the gate. Two men carry heavy loads on their heads. The children run between the stalls. My mother pays for the goods and we walk home together. The market is always busy.",
    qs:[
      {q:"Write the subject of the first sentence.", a:"My mother."},
      {q:"Write the verb of the first sentence.", a:"Goes."},
      {q:"Why is it 'the children run' and not 'runs'?", a:"Because 'children' is plural, so the verb takes no -s."},
      {q:"Why is it 'a woman sells' and not 'sell'?", a:"Because 'a woman' is singular, so the verb takes -s."},
      {q:"Write one more sentence about the market with correct agreement.", a:"Accept any correct sentence, e.g. 'The traders shout loudly.'"}
    ]
  },
  activities:["Subject and verb underlining drill","Agreement correction race","Oral drills with he/she/they","Write ten agreeing sentences"],
  materials:["Grammar and Composition Book 3","Agreement charts","Worksheets","Blackboard"],
  assessment:["Agreement test","Error correction exercise","Oral drill","Homework"]
},
{
  grade:3, period:"V", sem:"Two", icon:"💌",
  title:"Letter Writing · Word Skill & Vocabulary",
  subtitle:"Parts of a friendly letter and how to set them out",
  outcomes:["Compose a friendly letter with all its parts correctly set out"],
  objectives:[
    "Name the parts of a friendly letter",
    "Write the heading, greeting, body, closing and signature",
    "Address an envelope",
    "Use polite language in writing"
  ],
  note:"A friendly letter has five parts: <b>heading</b> (your address and the date), <b>greeting</b> (Dear …,), <b>body</b> (your message), <b>closing</b> (Your friend,) and <b>signature</b> (your name).",
  study:[
    /* ---- course text: Semester Two, Period V (guide pp. 78-83) ---- */
    {k:"h3", t:"Reading for Meaning and for Enjoyment"},
    {k:"bul", items:["Read stories and books from the other subject areas – the science reader, the social studies text – and use the same questions: what is the main idea, what are the details, what does this mean?","Read short stories and poems for pleasure; be ready to say what you liked and why.","The elements of a short story: **characters** (who), **conflict** (the trouble), **events** (what happens in order), **climax** (the point of greatest tension), and the **resolution** (how it is settled).","Name the **setting** when you retell; the place and the time often explain why the characters acted as they did."]},
    {k:"rule"},
    {k:"h3", t:"Parts of Speech Reviewed"},
    {k:"bul", items:["**Nouns** name; **verbs** do or be; **adjectives** describe; **adverbs** tell how; **pronouns** stand in place of nouns; **prepositions** tell where or when; **conjunctions** join.","Keep **subject and verb in agreement** when you write – the rule that was practised in Period IV applies to everything written from now on.","Use adjectives in the **comparative** and **superlative** degrees: the taller of the two; the strongest of the five."]},
    {k:"rule"},
    {k:"h3", t:"Letter Writing: the Format of a Friendly Letter"},
    {k:"p", t:"A letter carries five parts, and each has its place on the paper. The **format** is the arrangement of these parts."},
    {k:"table", head:["Part","Where it stands","What it holds"], rows:[
      ["Heading","upper right-hand corner","the writer’s address and the date"],
      ["Greeting (salutation)","left, below the heading","Dear Kou, – the name of the person written to"],
      ["Body","the middle of the page","the message, in one or more paragraphs"],
      ["Closing","right-hand side","Your friend, or Yours sincerely,"],
      ["Signature","under the closing","your own name, written or signed"]
    ]},
    {k:"num", items:["Set the heading a few spaces in from the right margin; write your address, then the date.","Begin the greeting at the left margin and put a **comma** after it.","Leave a line, then write the body; one idea to a paragraph, each beginning a little inside the margin.","End the body with a civil sentence – Give my love to your mother; write to me soon.","Place the closing on the right, and your name under it.","Read the whole letter once more for capitals, end marks and spelling before you fold it."]},
    {k:"rule"},
    {k:"h3", t:"Addressing the Envelope"},
    {k:"bul", items:["In the middle of the envelope, line by line: the name of the person, the place (street, town or village, county), and the country.","At the top left corner write the **sender’s** name and address, so that the letter can come back if it cannot be delivered.","Affix the **stamp** at the top right corner.","Write plainly and large; print the name of the town in capitals if the hand cannot form small letters neatly."]},
    {k:"rule"},
    {k:"h3", t:"Spelling, Writing and Word Maps"},
    {k:"bul", items:["**Spelling words of the period**: action, broken, expel, disagree, manuscript, signal, excel, nonliving, rectangle, revise, triangle, measure, length, distance.","**Descriptive writing** paints a thing; **narrative writing** tells what happened. Write both this period: describe your classroom, then narrate what happened at the flag-raising.","Make a **word map** for a high-frequency word: the word in the centre, with its meaning, a synonym, an antonym, and a sentence of your own in the four boxes around it.","**Ending sounds**: -ing (heading, greeting, closing, writing, sending); -er / -or for the one who does (sender, receiver, writer, visitor, director); soft **g** (message, village, large, page, age).","**Sight words**: dear, sincerely, faithfully, regards, yours, kindly, please, thank, hope, soon. **Vocabulary**: heading, greeting, body, closing, signature, envelope, stamp, receiver, sender, polite."]},
    {k:"p", t:"Polite language in a letter: please, thank you, I am sorry, kindly, if you are able. Write to a friend in another county, and read your letter aloud to the class."}
  ],
  focus:["Friendly letter","Parts of a letter","Addressing an envelope","Polite language"],
  words:[
    {w:"heading", s:"head-ing", d:"the address and date at the top", x:"Write the heading first."},
    {w:"greeting", s:"greet-ing", d:"the 'Dear ...' line", x:"The greeting comes next."},
    {w:"body", s:"bod-y", d:"the main message", x:"The body has three paragraphs."},
    {w:"closing", s:"clos-ing", d:"the words before your name", x:"'Your friend' is a closing."},
    {w:"signature", s:"sig-na-ture", d:"your written name", x:"Sign your signature."},
    {w:"envelope", s:"en-ve-lope", d:"the paper cover for a letter", x:"Put it in the envelope."},
    {w:"stamp", s:"stamp", d:"paper you buy to post a letter", x:"Stick a stamp on it."},
    {w:"receiver", s:"re-ceiv-er", d:"the person who gets the letter", x:"Write the receiver's address."},
    {w:"sender", s:"send-er", d:"the person who writes it", x:"The sender is me."},
    {w:"polite", s:"po-lite", d:"showing good manners", x:"Use polite words."}
  ],
  sight:["dear","sincerely","faithfully","regards","yours","kindly","please","thank","hope","soon"],
  phonics:[
    {p:"-ing", label:"the -ing ending", words:["heading","greeting","closing","writing","sending"]},
    {p:"-er/-or", label:"person endings", words:["sender","receiver","writer","visitor","director"]},
    {p:"soft g", label:"soft g sound", words:["message","village","large","page","age"]}
  ],
  grammar:[
    {q:"The address and date at the top of a letter is the ____.", a:"heading", why:"That is the heading."},
    {q:"'Dear Kou,' is called the ____.", a:"greeting", why:"It greets the reader."},
    {q:"The main message of a letter is the ____.", a:"body", why:"The body carries the message."},
    {q:"'Your friend,' is called the ____.", a:"closing", why:"It closes the letter."},
    {q:"Your name written at the end is your ____.", a:"signature", why:"That is the signature."},
    {q:"What punctuation follows the greeting 'Dear Kou'?", a:"a comma", why:"A comma follows the greeting."}
  ],
  pairs:[
    {a:"sender", b:"receiver", kind:"antonym"},
    {a:"send", b:"receive", kind:"antonym"},
    {a:"polite", b:"rude", kind:"antonym"},
    {a:"greeting", b:"salutation", kind:"synonym"},
    {a:"letter", b:"correspondence", kind:"synonym"}
  ],
  passage:{
    title:"A Letter to a Friend",
    text:"12 Broad Street\nMonrovia\n15 May 2026\n\nDear Flomo,\n\nHow are you? I hope you and your family are well. Our school closed last week for the holiday. I have been helping my father on the farm every morning. In the afternoon I read the books you gave me.\n\nPlease write and tell me your news. I hope you will visit us before school opens.\n\nYour friend,\nTogar",
    qs:[
      {q:"Write the heading of this letter.", a:"12 Broad Street, Monrovia, 15 May 2026."},
      {q:"What is the greeting?", a:"Dear Flomo,"},
      {q:"What has Togar been doing every morning?", a:"Helping his father on the farm."},
      {q:"What is the closing?", a:"Your friend,"},
      {q:"Who signed the letter?", a:"Togar."}
    ]
  },
  activities:["Label the parts of a model letter","Write a letter to a friend","Address an envelope","Peer check against a checklist"],
  materials:["Model letters","Envelopes","Writing paper","Chart of letter parts"],
  assessment:["Labelled letter diagram","Written letter","Envelope addressing","Peer assessment"]
},
{
  grade:3, period:"VI", sem:"Two", icon:"🌱",
  title:"Language Development · Prefixes, Suffixes and Root Words",
  subtitle:"Building new words from parts",
  outcomes:["Form new words by adding prefixes and suffixes to root words"],
  objectives:[
    "Define root word, prefix and suffix",
    "Form new words using common prefixes",
    "Form new words using common suffixes",
    "Use the new words in sentences"
  ],
  note:"A <b>root word</b> is the base word. A <b>prefix</b> goes in front and changes the meaning: <i>un</i> + happy = unhappy (not happy). A <b>suffix</b> goes at the end: care + <i>ful</i> = careful.",
  study:[
    /* ---- course text: Semester Two, Period VI (guide pp. 84-89) ---- */
    {k:"h3", t:"Word Pronunciation"},
    {k:"p", t:"**Pronunciation** is the accepted way a word is sounded. Words are mispronounced when a sound is dropped, added or changed; the eye alone will not always guide you, for English writes more sounds than it speaks."},
    {k:"bul", items:["Syllable-by-syllable: divide the word in the mouth before you say it whole – com-for-a-ble, par-tic-u-lar, pe-tro-le-um.","Stress: one syllable in a word is spoken harder than the rest; say PHO-to-graph and pho-TOG-ra-phy and hear the change of stress with the change of part of speech.","Silent letters must be remembered though they are not sounded: know, write, psychology, column, honest.","Do not add a sound that is not in the word (film not filim), and do not drop one (February, vegetable, different).","Use the dictionary, which marks the syllables and the stress, and hear the word read aloud before you say it."]},
    {k:"rule"},
    {k:"h3", t:"Cause and Effect in a Text"},
    {k:"p", t:"The **cause** is the reason a thing happens; the **effect** is what happens. To read for cause and effect, ask why did this happen? and what came of it?"},
    {k:"bul", items:["Signal words: because, since, so, therefore, as a result, consequently, when … then.","A thing may have more than one cause, and a cause may have more than one effect.","Chart it: two columns headed **Cause** and **Effect**, one line for each pair the text gives.","Write the pair in one sentence with a joining word: “The road was under water, **so** the pupils did not come to school.”"]},
    {k:"rule"},
    {k:"h3", t:"Poetry and Figurative Language"},
    {k:"bul", items:["A poem is read aloud twice at least: once for the sense, once for the sound.","Its parts are the **line**, the **stanza**, the **rhyme**, the **rhythm** and the **feeling** it carries.","A **simile** compares two things with like or as: the harmattan wind was cold as water from a deep well.","**Personification** gives the doings of a person to a thing: the river sang over the stones.","**Alliteration** repeats the same beginning sound: brave boys built big baskets.","Grade-level poems are read for these features; say which one each line carries."]},
    {k:"rule"},
    {k:"h3", t:"Contractions and Conjunctions"},
    {k:"p", t:"A **contraction** is two words made into one, with an **apostrophe** standing in the place of the letters left out. A **conjunction** joins words, phrases or sentences."},
    {k:"table", head:["Two words","Contraction"], rows:[
      ["I am","I’m"],
      ["do not","don’t"],
      ["cannot","can’t"],
      ["it is","it’s"],
      ["we are","we’re"],
      ["they have","they’ve"],
      ["was not","wasn’t"],
      ["he will","he’ll"]
    ]},
    {k:"bul", items:["**and** joins; **but** turns; **or** gives a choice; **because** gives the reason.","**therefore** and **however** join ideas with a stronger stop: a semicolon or full stop before them and a comma after – It rained hard; therefore, we stayed in.","Do not use a double negative: I do not have none is wrong; say I have none."]},
    {k:"rule"},
    {k:"h3", t:"Origin of Words and Vocabulary"},
    {k:"p", t:"The **origin of a word** is the language it came from. English borrowed from Latin and Greek (alphabet, photograph, biography), from French (letter, people, market), and from African languages, including words of our own country; the **word's origin** often explains its spelling and its relatives."},
    {k:"bul", items:["Roots and their families: **graph** (write, draw), **photo** (light), **auto** (self), **tele** (far), **bio / ology** (life / study of).","**Context clues** promote comprehension: work the meaning of manuscript, rectangle, nonliving, disagree from the sentence that carries them, then confirm it in the dictionary.","**Review vocabulary**: action, broken, expel, disagree, manuscript, signal, excel, nonliving, rectangle, revise, triangle, measure, length, distance.","**Prefixes and suffixes for the review table**: un- (unhappy, unkind, unable, unfair), dis- (disagree, dishonest, dislike, disobey), re- (rewrite, return, repeat, rebuild), -ful / -less (careful / careless, helpful / helpless, useful / useless), -ness (kindness, happiness), -ment (agreement, movement).","**Sight words**: un, dis, re, pre, mis, ful, less, ness, ment, able – the parts themselves, to be recognised at a glance inside longer words."]},
    {k:"p", t:"At the end of Grade Three you should build and define words from prefixes, roots and suffixes; hold one idea in a paragraph with a topic sentence and details; keep subject and verb in agreement; write a friendly letter in the right format; and read a story, a folktale, an article or a poem and say how each works."}
  ],
  focus:["Root words","Prefixes","Suffixes","Word building"],
  words:[
    {w:"unhappy", s:"un-hap-py", d:"not happy", x:"He was unhappy about the news."},
    {w:"unkind", s:"un-kind", d:"not kind", x:"It is unkind to laugh at others."},
    {w:"disagree", s:"dis-a-gree", d:"to not agree", x:"I disagree with you."},
    {w:"dishonest", s:"dis-hon-est", d:"not honest", x:"A dishonest trader cheats."},
    {w:"rewrite", s:"re-write", d:"to write again", x:"Rewrite the sentence."},
    {w:"return", s:"re-turn", d:"to come back", x:"Return the book."},
    {w:"careful", s:"care-ful", d:"full of care", x:"Be careful."},
    {w:"careless", s:"care-less", d:"without care", x:"He is careless with his work."},
    {w:"teacher", s:"teach-er", d:"one who teaches", x:"The teacher is here."},
    {w:"kindness", s:"kind-ness", d:"the quality of being kind", x:"Thank you for your kindness."}
  ],
  sight:["un","dis","re","pre","mis","ful","less","ness","ment","able"],
  phonics:[
    {p:"un-", label:"prefix un = not", words:["unhappy","unkind","unable","unfair","untidy"]},
    {p:"dis-", label:"prefix dis = not/opposite", words:["disagree","dishonest","dislike","disobey"]},
    {p:"re-", label:"prefix re = again", words:["rewrite","return","repeat","rebuild","replay"]},
    {p:"-ful / -less", label:"suffixes", words:["careful","careless","helpful","helpless","useful","useless"]}
  ],
  grammar:[
    {q:"un + happy = ", a:"unhappy", why:"un means not."},
    {q:"dis + agree = ", a:"disagree", why:"dis means not or the opposite."},
    {q:"re + write = ", a:"rewrite", why:"re means again."},
    {q:"care + ful = ", a:"careful", why:"-ful means full of."},
    {q:"care + less = ", a:"careless", why:"-less means without."},
    {q:"kind + ness = ", a:"kindness", why:"-ness makes a noun."},
    {q:"What is the root word in 'unhappy'?", a:"happy", why:"Remove the prefix un-."},
    {q:"What is the root word in 'helpful'?", a:"help", why:"Remove the suffix -ful."}
  ],
  pairs:[
    {a:"careful", b:"careless", kind:"antonym"},
    {a:"useful", b:"useless", kind:"antonym"},
    {a:"happy", b:"unhappy", kind:"antonym"},
    {a:"agree", b:"disagree", kind:"antonym"},
    {a:"honest", b:"dishonest", kind:"antonym"},
    {a:"kind", b:"unkind", kind:"antonym"}
  ],
  passage:{
    title:"The Careless Trader",
    text:"There was once a dishonest trader in the market. He was careless with his weights and unkind to his customers. People began to dislike him and stopped buying from him. He became unhappy and his shop was empty. One day an old woman told him to rewrite his prices honestly. He agreed. He returned the money he had taken unfairly. Slowly the people came back, and his kindness made him a useful member of the town.",
    qs:[
      {q:"Write two words from the passage that begin with the prefix 'un'.", a:"Any two of: unkind, unhappy, unfairly."},
      {q:"Write two words that begin with 'dis'.", a:"Dishonest, dislike."},
      {q:"What is the root word of 'careless'?", a:"Care."},
      {q:"What did the old woman tell him to do?", a:"To rewrite his prices honestly."},
      {q:"How did the story end?", a:"He returned the money, the people came back, and his kindness made him useful to the town."}
    ]
  },
  activities:["Word-building wheel with prefixes","Suffix sorting activity","Write ten new words and use them in sentences","Prefix/suffix relay on the board"],
  materials:["Prefix and suffix charts","Word cards","Dictionary","Exercise books"],
  assessment:["Word building test","Sentence writing","Root word identification","Quiz"]
},

/* ================= GRADE 4 ================= */
{
  grade:4, period:"I", sem:"One", icon:"🏗️",
  title:"Kinds and Types of Sentences · Adjectives · Conjunctions",
  subtitle:"Declarative, interrogative, imperative and exclamatory sentences",
  outcomes:["Develop skills in using sentences, punctuation, kinds of adjectives, conjunctions and vowel sounds"],
  objectives:[
    "Demonstrate command of formal English through speech and writing",
    "Identify the four kinds of sentences and punctuate them correctly",
    "Use indefinite, demonstrative, interrogative and quantitative adjectives",
    "Connect words, phrases and sentences with conjunctions",
    "Demonstrate the use of short and long vowel sounds"
  ],
  note:"Four kinds of sentence: <b>Declarative</b> states (Massa is pretty.) · <b>Interrogative</b> asks (Is it raining?) · <b>Imperative</b> commands (Close the door.) · <b>Exclamatory</b> shows strong feeling (What a scene!)",
  study:[
    /* ---- course text: Semester One, Period I (guide pp. 90-92) ---- */
    {k:"h3", t:"Kinds and Types of Sentences"},
    {k:"p", t:"Sentences are named by the work they do. There are four **kinds** of sentence by purpose, and each takes its own end mark."},
    {k:"table", head:["Kind","What it does","End mark","Example"], rows:[
      ["Declarative","declares or states something","period (.)","Massa is pretty."],
      ["Interrogative","asks something","question mark (?)","Is it raining?"],
      ["Imperative","orders, urges or requests","period (.)","Close the door."],
      ["Exclamatory","cries out a strong feeling","exclamation mark (!)","What a scene!"]
    ]},
    {k:"p", t:"By **structure** there are three further types. A **simple** sentence has one subject and one predicate. A **compound** sentence joins two complete thoughts with and, but, or, so, yet and a comma: We cut the grass, and Korto carried it home. A **complex** sentence has one main thought and one dependent clause joined by because, when, although, if, since: We stayed indoors because the rain was heavy."},
    {k:"bul", items:["A dependent clause cannot stand by itself – it leaves the mind waiting.","In the imperative the subject is understood: (You) close the door.","Turn one thought into all four kinds to feel the difference: The river rose. Did the river rise? Look at the river! How high the river rose!"]},
    {k:"rule"},
    {k:"h3", t:"Punctuation"},
    {k:"bul", items:["The **period** ends a statement; the **comma** marks a short pause inside a sentence.","Use the **comma** in a series of three or more (rice, fish and pepper), after an introductory word (Then, we left), and before and, but, so in a compound sentence.","The **apostrophe** shows a contraction (don’t) or ownership (Jack’s hat).","The **quotation marks** enclose the exact words spoken – She said, “Come early.” – with the comma inside and the period after the closing mark.","Capitals open every sentence, the pronoun **I**, proper names, days, months, and the first word of a direct quotation."]},
    {k:"rule"},
    {k:"h3", t:"Kinds of Adjectives"},
    {k:"table", head:["Kind","What it does","Words"], rows:[
      ["Indefinite","names a number that is not exact","few, many, some, any, several"],
      ["Demonstrative","points out which one","this, that, these, those"],
      ["Interrogative","asks which","which, what, whose"],
      ["Quantitative","tells how much or how many","many, half, a lot, little, much, three"],
      ["Possessive","tells whose","my, mine, his, hers, our, ours, their, theirs, your, yours, its"]
    ]},
    {k:"p", t:"A **possessive adjective** stands before the noun it owns (my bag), while a **possessive pronoun** stands in place of the noun (the bag is mine). Do not confound **its** (belonging to it) with **it’s** (it is), or **their / there / they’re**."},
    {k:"rule"},
    {k:"h3", t:"Conjunctions and Connecting Words"},
    {k:"bul", items:["**Coordinating conjunctions** join equals: and, but, or, so, yet, for, nor.","**Subordinating conjunctions** join a dependent clause to a main one: because, although, when, if, since, while, unless.","**Connecting words and phrases** carry the sense across sentences: therefore, however, then, next, in addition, on the other hand, as a result.","Join these and feel the sentence grow longer without becoming loose: I was tired, but I finished my work. / Bring rice and fish."]},
    {k:"rule"},
    {k:"h3", t:"Sounds: Short and Long Vowels"},
    {k:"table", head:["Sound","Short","Long"], rows:[
      ["a","cat, bed? – no: cat, pan, hand","cake, lake, plane, explain"],
      ["e","bed, pen, net","tree, see, field, near"],
      ["i","pin, sit, hit","kite, time, night, pie"],
      ["o","hot, not, dog","note, home, goat, low"],
      ["u","cup, sun, bus","tube, mule, flute, June"]
    ]},
    {k:"p", t:"The **-ative** ending marks the names of our sentence kinds: declarative, imperative, narrative, creative. **Sight words**: few, many, some, this, that, these, those, which, what, whose. **Vocabulary**: declarative, interrogative, imperative, exclamatory, conjunction, punctuation, demonstrative, quantitative, possessive, phrase."}
  ],
  focus:["Kinds of sentences","Punctuation","Kinds of adjectives","Possessive adjectives","Conjunctions","Short and long vowels"],
  words:[
    {w:"declarative", s:"de-clar-a-tive", d:"a sentence that states a fact", x:"'The sun is hot' is declarative."},
    {w:"interrogative", s:"in-ter-rog-a-tive", d:"a sentence that asks", x:"'Who is there?' is interrogative."},
    {w:"imperative", s:"im-per-a-tive", d:"a sentence that commands", x:"'Sit down' is imperative."},
    {w:"exclamatory", s:"ex-clam-a-tory", d:"a sentence showing strong feeling", x:"'What a day!' is exclamatory."},
    {w:"conjunction", s:"con-junc-tion", d:"a joining word", x:"'And' is a conjunction."},
    {w:"punctuation", s:"punc-tu-a-tion", d:"marks used in writing", x:"Check your punctuation."},
    {w:"demonstrative", s:"de-mon-stra-tive", d:"pointing out: this, that, these, those", x:"'This book' uses a demonstrative."},
    {w:"quantitative", s:"quan-ti-ta-tive", d:"telling how much or how many", x:"'Many boys' is quantitative."},
    {w:"possessive", s:"pos-ses-sive", d:"showing ownership", x:"'My bag' is possessive."},
    {w:"phrase", s:"phrase", d:"a group of words without a verb", x:"'On the table' is a phrase."}
  ],
  sight:["few","many","some","this","that","these","those","which","what","whose"],
  phonics:[
    {p:"short vowels", label:"short vowel sounds", words:["cat","bed","pin","hot","cup"]},
    {p:"long vowels", label:"long vowel sounds", words:["cake","tree","kite","note","tube"]},
    {p:"-ative", label:"the -ative ending", words:["declarative","imperative","narrative","creative"]}
  ],
  grammar:[
    {q:"Name the kind of sentence: Massa is pretty.", a:"declarative", why:"It states a fact."},
    {q:"Name the kind of sentence: Is it raining?", a:"interrogative", why:"It asks a question."},
    {q:"Name the kind of sentence: Close the door.", a:"imperative", why:"It gives a command."},
    {q:"Name the kind of sentence: What a scene!", a:"exclamatory", why:"It shows strong feeling."},
    {q:"Join with a conjunction: I was tired ____ I finished my work.", a:"but", why:"But shows contrast."},
    {q:"Join with a conjunction: Bring rice ____ fish.", a:"and", why:"And adds items."},
    {q:"Which kind of adjective is 'those' in 'those books'?", a:"demonstrative", why:"It points out which ones."},
    {q:"Which kind of adjective is 'many' in 'many boys'?", a:"quantitative", why:"It tells how many."}
  ],
  pairs:[
    {a:"this", b:"these", kind:"plural"},
    {a:"that", b:"those", kind:"plural"},
    {a:"my", b:"mine", kind:"possessive"},
    {a:"her", b:"hers", kind:"possessive"},
    {a:"our", b:"ours", kind:"possessive"},
    {a:"their", b:"theirs", kind:"possessive"}
  ],
  passage:{
    title:"The Storm",
    text:"The sky turned grey in the afternoon. Would the rain come before we reached home? Run to the shed! What a storm it was! The wind bent the palm trees and the rain fell in heavy sheets. We waited inside for an hour, but the water still covered the road. My father said this was the heaviest rain of the season, and those clouds promised more.",
    qs:[
      {q:"Find one declarative sentence in the passage.", a:"e.g. 'The sky turned grey in the afternoon.'"},
      {q:"Find the interrogative sentence.", a:"'Would the rain come before we reached home?'"},
      {q:"Find the imperative sentence.", a:"'Run to the shed!'"},
      {q:"Find the exclamatory sentence.", a:"'What a storm it was!'"},
      {q:"Write the conjunction used in the last sentence.", a:"And."}
    ]
  },
  activities:["Sort sentence strips into the four kinds","Punctuation correction on the board","Conjunction joining exercise","Short and long vowel sorting"],
  materials:["Grammar and Composition Book 4","Gateway to English Book 4","Sentence strips","Punctuation charts"],
  assessment:["Sentence kind identification test","Punctuation exercise","Conjunction exercise","Oral presentation"]
},
{
  grade:4, period:"II", sem:"One", icon:"⏳",
  title:"Simple Tenses · Contractions · Consonant Blends",
  subtitle:"Present, past and future tense; forming contractions",
  outcomes:["Distinguish and use tenses, form contractions, and identify and pronounce consonant blends"],
  objectives:[
    "Distinguish and use verb tenses for regular and irregular verbs correctly",
    "Form contractions, spell and pronounce them correctly",
    "Identify and pronounce consonant blends"
  ],
  note:"<b>Present</b>: talk (action taking place) · <b>Past</b>: talked (already happened) · <b>Future</b>: will talk (has not happened yet). A <b>contraction</b> joins two words with an apostrophe: <i>was + not = wasn't</i>.",
  study:[
    /* ---- course text: Semester One, Period II (guide pp. 93-94) ---- */
    {k:"h3", t:"Verb Tense"},
    {k:"p", t:"**Tense** is the change in the verb that tells **when** the action is. The three **simple tenses** are the present, the past and the future."},
    {k:"table", head:["Tense","What it says","How it is made","Example"], rows:[
      ["Present","the action is taking place, or happens always","the verb; add -s or -es with he, she, it","talk → I talk; she talks"],
      ["Past","the action already took place","add -ed, or the irregular past form","talk → talked; write → wrote"],
      ["Future","the action will take place","will (or shall) + the verb","talk → I will talk"]
    ]},
    {k:"bul", items:["A **regular verb** forms its past with **-ed**: jump → jumped, shout → shouted, walk → walked.","An **irregular verb** changes its own shape and must be learned: write → wrote, choose → chose, go → went, come → came, see → saw, eat → ate.","Add **-ing** for an action going on, with the helping verb: I am talking; she is choosing.","Never add -ed or -s twice: did not went and she writes-s are both wrong; after did, does, was, were the verb keeps its base form – she did not go."]},
    {k:"p", t:"Put each verb into the three tenses in a sentence of your own: play, write, choose, run, shout, jump."},
    {k:"rule"},
    {k:"h3", t:"Contractions"},
    {k:"p", t:"A **contraction** is two words spoken as one; the **apostrophe** stands where letters have been taken out. Speech and informal writing use them freely; formal writing does not."},
    {k:"table", head:["Two words","Contraction","Two words","Contraction"], rows:[
      ["was not","wasn’t","they have","they’ve"],
      ["do not","don’t","he will","he’ll"],
      ["can not","can’t","she would","she’d"],
      ["will not","won’t","we are","we’re"],
      ["it is","it’s","is not","isn’t"]
    ]},
    {k:"bul", items:["**it’s** = it is; **its** = belonging to it.","**they’re** = they are; **their** = belonging to them; **there** = that place.","**let’s** = let us: Let’s go."]},
    {k:"rule"},
    {k:"h3", t:"Consonant Blends"},
    {k:"p", t:"A **blend** is two or three consonants together in which every letter keeps to be heard; this differs from a **digraph**, where two letters make one new sound."},
    {k:"table", head:["Pattern","Words","Note"], rows:[
      ["sl","slap, sleep, slide, slow, sleep","the two sounds run together"],
      ["tr","trap, tree, train, trust",""],
      ["gr","great, greed, grade, grass",""],
      ["bl","blend, blue, black, blame",""],
      ["str / spr / scr","street, strong, stretch; spring, spread; scream, scratch","three-letter blends"],
      ["ch (digraph)","church, chair, choose, chalk, chest","one sound, not /k/+/h/"]
    ]},
    {k:"p", t:"Read the blend alone, then with the rime; then read a sentence that carries three or four words of the same blend: The stray dog slid through the street. **Sight words**: wasn’t, don’t, can’t, won’t, they’ve, he’ll, she’d, we’re, it’s, isn’t. **Vocabulary**: present, past, future, contraction, apostrophe, regular, irregular, choose, shout, blend."}
  ],
  focus:["Simple tenses","Regular and irregular verbs","Contractions","Consonant blends"],
  words:[
    {w:"present", s:"pres-ent", d:"happening now", x:"Present tense: I walk."},
    {w:"past", s:"past", d:"already happened", x:"Past tense: I walked."},
    {w:"future", s:"fu-ture", d:"will happen later", x:"Future tense: I will walk."},
    {w:"contraction", s:"con-trac-tion", d:"two words joined with an apostrophe", x:"'Don't' is a contraction."},
    {w:"apostrophe", s:"a-pos-tro-phe", d:"the mark '", x:"Put an apostrophe here."},
    {w:"regular", s:"reg-u-lar", d:"following the usual rule", x:"'Walk' is a regular verb."},
    {w:"irregular", s:"ir-reg-u-lar", d:"not following the usual rule", x:"'Write' is irregular."},
    {w:"choose", s:"choose", d:"to pick one", x:"Choose a book."},
    {w:"shout", s:"shout", d:"to call loudly", x:"Do not shout."},
    {w:"blend", s:"blend", d:"two letters sounded together", x:"'Tr' is a blend."}
  ],
  sight:["wasn't","don't","can't","won't","they've","he'll","she'd","we're","it's","isn't"],
  phonics:[
    {p:"sl / tr", label:"consonant blends", words:["slap","sleep","trap","tree","train","slide"]},
    {p:"gr / bl", label:"consonant blends", words:["great","greed","grade","blend","blue","black"]},
    {p:"ch", label:"ch digraph", words:["church","chair","choose","chalk","chest"]}
  ],
  grammar:[
    {q:"Past tense of jump:", a:"jumped", why:"Regular verb: add -ed."},
    {q:"Past tense of shout:", a:"shouted", why:"Regular verb: add -ed."},
    {q:"Past tense of write:", a:"wrote", why:"Irregular verb."},
    {q:"Past tense of choose:", a:"chose", why:"Irregular verb."},
    {q:"Future tense of talk (I ...):", a:"I will talk", why:"Future uses 'will'."},
    {q:"He + will = ", a:"he'll", why:"Contraction with apostrophe."},
    {q:"Would + not = ", a:"wouldn't", why:"The o of not is replaced by the apostrophe."},
    {q:"They + have = ", a:"they've", why:"Contraction of they have."},
    {q:"She + had = ", a:"she'd", why:"Contraction of she had."}
  ],
  pairs:[
    {a:"is not", b:"isn't", kind:"contraction"},
    {a:"do not", b:"don't", kind:"contraction"},
    {a:"cannot", b:"can't", kind:"contraction"},
    {a:"will not", b:"won't", kind:"contraction"},
    {a:"they have", b:"they've", kind:"contraction"},
    {a:"we are", b:"we're", kind:"contraction"}
  ],
  passage:{
    title:"A Day at School",
    text:"Yesterday I walked to school with my brother. We arrived early, so we swept the classroom. The teacher wrote the lesson on the board and we copied it. At break we chose teams and played football. I shouted when my team scored. Tomorrow we will write a test, so tonight I will study. I won't go out to play until I've finished.",
    qs:[
      {q:"Write three past tense verbs from the passage.", a:"Any three of: walked, arrived, swept, wrote, copied, chose, played, shouted."},
      {q:"Write one future tense phrase from the passage.", a:"'will write' or 'will study'."},
      {q:"Write two contractions from the passage.", a:"Won't, I've."},
      {q:"What two words make up 'won't'?", a:"Will and not."},
      {q:"Rewrite in the future tense: I walked to school.", a:"I will walk to school."}
    ]
  },
  activities:["Create a chart of regular and irregular verbs","Form contractions from given word pairs","Journal entry using ten different verb tenses","Flash card blend building"],
  materials:["Grammar and Composition Book 4","Phonics for Liberian Schools Book 4","Verb tense charts","Flash cards"],
  assessment:["Tense formation test","Contraction exercise","Journal entry","Oral blend reading"]
},
{
  grade:4, period:"III", sem:"One", icon:"📰",
  title:"Reading Comprehension & Writing",
  subtitle:"Reading a variety of texts and writing organised responses",
  outcomes:["Read and comprehend a variety of texts and write organised responses"],
  objectives:[
    "Read stories, articles and reports with understanding",
    "Identify main idea, supporting details and the author's purpose",
    "Make inferences from a text",
    "Write an organised response of one or more paragraphs"
  ],
  note:"An <b>inference</b> is something the writer does not say directly but that you can work out from clues in the text. <i>The ground was wet and people carried umbrellas</i> → you infer that it rained.",
  study:[
    /* ---- course text: Semester One, Period III (guide pp. 95-96) ---- */
    {k:"h3", t:"Types of Text"},
    {k:"table", head:["Type of text","Its work","How to know it"], rows:[
      ["Descriptive","paints a person, place or thing","crowded with adjectives and detail; slow in time"],
      ["Expository","explains or tells how a thing works","a main idea, then reasons, facts and examples"],
      ["Persuasive","tries to win you to a side and to act","should, must, best, worse; a call at the end"],
      ["Informative","gives facts about a real subject","headings, charts, captions, a glossary"],
      ["Narrative","tells what happened","characters, a plot, a climax"]
    ]},
    {k:"rule"},
    {k:"h3", t:"The Elements of a Story"},
    {k:"bul", items:["**Plot** – the chain of events, in the order they follow one another.","**Characters** – the persons or animals the story is about; the chief one is the **protagonist**, the one who opposes is the **antagonist**.","**Conflict** – the struggle that drives the plot: with another, with nature, or with oneself.","**Setting** – the place and the time, with the surroundings that shape the action.","**Climax** – the point of greatest tension, where the fortune of the character turns.","**Resolution** – the settling of the conflict; what is left over at the end.","**Theme** – the lesson or the deep idea the story leaves with the reader, told rather than shown."]},
    {k:"rule"},
    {k:"h3", t:"Reading Between the Lines"},
    {k:"p", t:"A **conclusion drawn from clues** the text gives is an **inference**. The text says Kou closed his book and looked at the dark window; you infer that he has stopped reading because night came. Inference is not guessing: it must rest on **evidence** in the text."},
    {k:"bul", items:["A **fact** is a statement that can be proved true; an **opinion** is what a person believes or feels. Liberia is in West Africa is a fact; Rice is the best food is an opinion.","Words that betray an opinion: best, worst, beautiful, should, I think, always, never, everyone knows.","A **summary** is a short account of the main points in the writer’s own order, told in your own words and leaving out the small parts.","The **author’s purpose** is why the text was written: to **inform**, to **persuade**, to **entertain**, or to **explain**. Ask before reading what the writer wants from you.","**Signal words** of inference and conclusion: therefore, however, because, evidence, suggest, indicate, conclude, imply, reveal, support."]},
    {k:"rule"},
    {k:"h3", t:"Written Response"},
    {k:"num", items:["State the answer in one sentence that stands on its own.","Give the detail or the quotation from the text that supports it.","Say in one line how that detail proves your answer.","Check the sentence for agreement, tense, and the marks it needs."]},
    {k:"p", t:"**Word endings of the period**: -ence makes nouns of quality or act – inference, evidence, sentence, difference, silence. **Prefixes**: pre- means before (predict, prepare, prevent, preview); con- means with or together (conclusion, contrast, connect, continue). **Vocabulary**: inference, purpose, evidence, opinion, fact, summary, conclusion, predict, compare, contrast."}
  ],
  focus:["Comprehension of varied texts","Main idea","Author's purpose","Inference","Written response"],
  words:[
    {w:"inference", s:"in-fer-ence", d:"a conclusion drawn from clues", x:"Make an inference from the text."},
    {w:"purpose", s:"pur-pose", d:"the reason for writing", x:"What is the author's purpose?"},
    {w:"evidence", s:"ev-i-dence", d:"facts that prove something", x:"Give evidence from the text."},
    {w:"opinion", s:"o-pin-ion", d:"what someone thinks", x:"That is her opinion."},
    {w:"fact", s:"fact", d:"something that is true", x:"State one fact."},
    {w:"summary", s:"sum-ma-ry", d:"a short account of the main points", x:"Write a summary."},
    {w:"conclusion", s:"con-clu-sion", d:"a decision reached", x:"Draw a conclusion."},
    {w:"predict", s:"pre-dict", d:"to say what will happen", x:"Predict the ending."},
    {w:"compare", s:"com-pare", d:"to show what is the same", x:"Compare the two stories."},
    {w:"contrast", s:"con-trast", d:"to show what is different", x:"Contrast the characters."}
  ],
  sight:["therefore","however","because","evidence","suggest","indicate","conclude","imply","reveal","support"],
  phonics:[
    {p:"-ence", label:"the -ence ending", words:["inference","evidence","sentence","difference","silence"]},
    {p:"pre-", label:"prefix pre = before", words:["predict","prepare","prevent","preview"]},
    {p:"con-", label:"prefix con = with", words:["conclusion","contrast","connect","continue"]}
  ],
  grammar:[
    {q:"A conclusion drawn from clues is an ____.", a:"inference", why:"Definition of inference."},
    {q:"Something that can be proved true is a ____.", a:"fact", why:"Facts can be proved."},
    {q:"Something a person believes is an ____.", a:"opinion", why:"Opinions are beliefs."},
    {q:"Fact or opinion: Liberia is in West Africa.", a:"fact", why:"It can be proved."},
    {q:"Fact or opinion: Rice is the best food.", a:"opinion", why:"It is what someone thinks."},
    {q:"A short account of the main points is a ____.", a:"summary", why:"Definition of a summary."}
  ],
  pairs:[
    {a:"fact", b:"opinion", kind:"antonym"},
    {a:"compare", b:"contrast", kind:"antonym"},
    {a:"summary", b:"outline", kind:"synonym"},
    {a:"predict", b:"forecast", kind:"synonym"},
    {a:"evidence", b:"proof", kind:"synonym"}
  ],
  passage:{
    title:"The Rubber Farm",
    text:"Rubber is one of Liberia's most important products. The rubber tree is cut carefully so that white liquid, called latex, runs into a cup. Workers collect the latex early each morning before the sun grows hot. The latex is taken to a factory where it is made into sheets. Most of the rubber is sold to other countries. Thousands of Liberian families depend on this work for their living. However, the price of rubber often changes, and when it falls those families suffer.",
    qs:[
      {q:"What is the main idea of this passage?", a:"Rubber is an important Liberian product that many families depend on."},
      {q:"Why do workers collect latex early in the morning?", a:"Before the sun grows hot (the heat affects the latex)."},
      {q:"State one fact from the passage.", a:"e.g. 'Latex is made into sheets at a factory.'"},
      {q:"What can you infer about families when the rubber price falls?", a:"That they earn less money and find life harder."},
      {q:"What is the author's purpose in writing this?", a:"To inform the reader about rubber production in Liberia."}
    ]
  },
  activities:["Read three different text types and compare","Fact and opinion sorting","Inference question practice","Write a one-paragraph response"],
  materials:["Newspapers and magazines","Grammar and Composition Book 4","Reading passages","Exercise books"],
  assessment:["Comprehension test","Fact/opinion exercise","Written response","Oral discussion"]
},
{
  grade:4, period:"IV", sem:"Two", icon:"🧬",
  title:"Vocabulary & Spelling · Prefixes, Roots and Suffixes",
  subtitle:"Building and defining new words",
  outcomes:["Form and create passages with new words by combining prefixes and suffixes with root words"],
  objectives:[
    "Form new words by combining prefixes and/or suffixes with root words",
    "Define and use vocabulary in speech and writing",
    "Demonstrate knowledge of the meaning of prefixes and suffixes",
    "Create passages using the new words"
  ],
  note:"Prefixes from the curriculum: <b>dis</b> (not, the opposite of), <b>non</b> (not), <b>super</b> (above). Suffixes: <b>-ment</b>, <b>-ity</b>, <b>-able</b>. Root words: agree, toxic, market.",
  study:[
    /* ---- course text: Semester Two, Period IV (guide pp. 97-98) ---- */
    {k:"h3", t:"The Three Parts of a Built Word"},
    {k:"p", t:"A long English word is often three parts in a row: **prefix – root – suffix**. The **root** carries the core meaning; the **prefix** turns the meaning; the **suffix** fixes the part of speech. Learn the parts and half of your vocabulary builds itself."},
    {k:"table", head:["Prefix","Its meaning","Words it builds"], rows:[
      ["dis-","not; the opposite of","disagree, dislike, disobey, dishonest, disappear"],
      ["non-","not","nontoxic, nonstop, nonsense, nonfiction"],
      ["super-","above; over","supermarket, supervise, superior, superman"],
      ["un-","not","unhappy, unkind, unable"],
      ["re-","again","rewrite, return, repeat"],
      ["pre-","before","predict, prepare, preview"]
    ]},
    {k:"table", head:["Suffix","Its meaning or work","Words it builds"], rows:[
      ["-ment","the act or the result of","agreement, government, movement, treatment"],
      ["-ity","the state or quality of","ability, community, quantity, security"],
      ["-able / -ible","capable of; fit to be","comfortable, responsible, movable, visible"],
      ["-ness","state or quality","kindness, happiness"],
      ["-ful / -less","full of / without","careful / careless"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Root Words"},
    {k:"p", t:"A **root word** is a word that can stand alone and still carry its meaning after the affixes are stripped off: agree in disagree, agreement; toxic (poisonous) in nontoxic, toxicity; market in supermarket. A **root** that cannot stand alone – dict, port, ject, bio, graph – is a **combining form**, and it throws light over a whole family of words."},
    {k:"bul", items:["**agree** – to be of one mind: agreement, disagree, agreeable.","**toxic** – poisonous: nontoxic, toxicity.","**market** – the place of trade: supermarket, marketing, marketer."]},
    {k:"rule"},
    {k:"h3", t:"Building and Defining"},
    {k:"num", items:["Take the word and cover the affixes with your hand to find the **root**.","Name the prefix and say its meaning; name the suffix and say what it does.","Say the whole meaning in your own words before you open the dictionary.","Write the word with its root, one synonym, one antonym and a sentence of your own in the vocabulary chart."]},
    {k:"p", t:"Define the built words: disagree (to be of different minds), nontoxic (not poisonous), supermarket (a large self-service market), agreement (a meeting of minds, or a written arrangement), ability (power to do a thing), comfortable (giving ease), government (the authority that governs), responsible (answerable for what is done), community (the people of one place), development (a growing or bringing out)."},
    {k:"rule"},
    {k:"h3", t:"Spelling and Word Study"},
    {k:"bul", items:["The root of a family keeps its spelling even when the sound changes: decide → decision, suggest → suggestion; look for the relatives rather than trusting the ear alone.","Double the consonant where the rule asks: occur → occurrence, refer → reference; drop a final e before a vowel: guide → guidance, move → movable.","Mark the prefix and the suffix in every new long word you meet this term, and keep them in a list of three columns: **prefixes, roots, suffixes**.","**Sight parts to know at a glance**: dis, non, super, pre, re, ment, ity, able, ness, ful."]},
    {k:"p", t:"A word is not mastered by spelling it; spell it, define it, and use it in a sentence of your own."}
  ],
  focus:["Prefixes","Root words","Suffixes","Vocabulary","Spelling"],
  words:[
    {w:"disagree", s:"dis-a-gree", d:"to not agree", x:"They disagree about the price."},
    {w:"nontoxic", s:"non-tox-ic", d:"not poisonous", x:"The paint is nontoxic."},
    {w:"supermarket", s:"su-per-mar-ket", d:"a large self-service shop", x:"We shop at the supermarket."},
    {w:"agreement", s:"a-gree-ment", d:"the state of agreeing", x:"They signed an agreement."},
    {w:"ability", s:"a-bil-i-ty", d:"the power to do something", x:"She has great ability."},
    {w:"comfortable", s:"com-fort-a-ble", d:"giving comfort", x:"The chair is comfortable."},
    {w:"government", s:"gov-ern-ment", d:"those who rule a country", x:"The government built a road."},
    {w:"responsible", s:"re-spon-si-ble", d:"having a duty", x:"He is responsible for the class."},
    {w:"community", s:"com-mu-ni-ty", d:"the people of one area", x:"Our community is united."},
    {w:"development", s:"de-vel-op-ment", d:"growth or progress", x:"Education aids development."}
  ],
  sight:["dis","non","super","pre","re","ment","ity","able","ness","ful"],
  phonics:[
    {p:"dis-", label:"prefix dis", words:["disagree","dislike","disobey","dishonest","disappear"]},
    {p:"non-", label:"prefix non", words:["nontoxic","nonstop","nonsense","nonfiction"]},
    {p:"super-", label:"prefix super", words:["supermarket","superman","supervise","superior"]},
    {p:"-ment / -ity / -able", label:"suffixes", words:["agreement","government","ability","community","comfortable","responsible"]}
  ],
  grammar:[
    {q:"dis + agree = ", a:"disagree", why:"dis means not."},
    {q:"non + toxic = ", a:"nontoxic", why:"non means not."},
    {q:"super + market = ", a:"supermarket", why:"super means above/large."},
    {q:"agree + ment = ", a:"agreement", why:"-ment makes a noun."},
    {q:"able + ity = ", a:"ability", why:"-ity makes a noun (spelling changes)."},
    {q:"comfort + able = ", a:"comfortable", why:"-able means can be."},
    {q:"What does the prefix 'dis' mean?", a:"not, or the opposite of", why:"From the curriculum."},
    {q:"What does the prefix 'super' mean?", a:"above", why:"From the curriculum."}
  ],
  pairs:[
    {a:"agree", b:"disagree", kind:"antonym"},
    {a:"toxic", b:"nontoxic", kind:"antonym"},
    {a:"comfortable", b:"uncomfortable", kind:"antonym"},
    {a:"responsible", b:"careless", kind:"antonym"},
    {a:"ability", b:"skill", kind:"synonym"},
    {a:"development", b:"growth", kind:"synonym"}
  ],
  passage:{
    title:"A Responsible Community",
    text:"The people of Kakata reached an agreement to clean their town. Everyone in the community took responsibility for one small area. The government supplied nontoxic paint for the school walls. Shopkeepers near the supermarket swept the road each morning. Within a month there was a clear development: the streets were comfortable to walk on and visitors said the town was the cleanest they had seen. It showed the ability of ordinary people to change their own place.",
    qs:[
      {q:"Write three words in the passage that contain a prefix.", a:"Any three of: nontoxic, supermarket, disagree (if present), development."},
      {q:"Write three words that contain a suffix.", a:"Any three of: agreement, community, responsibility, development, comfortable, ability."},
      {q:"What is the root word of 'agreement'?", a:"Agree."},
      {q:"What is the root word of 'comfortable'?", a:"Comfort."},
      {q:"What did the government supply?", a:"Nontoxic paint for the school walls."}
    ]
  },
  activities:["Word building chart: prefix + root + suffix","Write a passage using six new words","Dictionary definition hunt","Spelling bee"],
  materials:["Grammar and Composition Book 4","Dictionary","Prefix/suffix charts","Exercise books"],
  assessment:["Word formation test","Written passage","Spelling test","Definition quiz"]
},
{
  grade:4, period:"V", sem:"Two", icon:"🎤",
  title:"Reading, Writing & Speaking · Biography and Autobiography",
  subtitle:"Writing about your own life and the lives of others",
  outcomes:["Read, write and speak correctly and develop autobiographies and biographies"],
  objectives:[
    "Read and comprehend a variety of texts",
    "Improve speaking skills",
    "Develop autobiographies and biographies",
    "Edit work before submitting"
  ],
  note:"An <b>autobiography</b> is the story of your own life, written by you (auto = self). A <b>biography</b> is the story of someone else's life, written by another person.",
  study:[
    /* ---- course text: Semester Two, Period V (guide pp. 99-100) ---- */
    {k:"h3", t:"Reading a Variety of Texts"},
    {k:"p", t:"Read across the kinds – a story, an article, a poem, a page from the science or social studies reader – and change your way of reading with the kind: slowly and with feeling for a poem; for the main idea and the facts in an article; for the plot and the turn in a story. Before you read, look at the title, the picture and the heading and say what you expect to find."},
    {k:"rule"},
    {k:"h3", t:"Biography and Autobiography"},
    {k:"p", t:"A **biography** is the story of a real person’s life written by someone else; an **autobiography** is that life written by the person who lived it. The roots tell you the difference: **bio** means life, **auto** means self, **graphy** means writing."},
    {k:"table", head:["Feature","Autobiography","Biography"], rows:[
      ["Who writes it","the person whose life it is","another person"],
      ["Person and pronouns","first person – I, my, we","third person – he, she, they"],
      ["What it can show","thoughts and feelings from the inside","facts, other people’s accounts and records"],
      ["Usual shape","the life as it was lived, with what was learned","born – home – school – work – what they came to, ending in an estimate"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Writing the Life"},
    {k:"num", items:["Choose the person: yourself, a parent, a teacher, an outstanding Liberian.","Gather the particulars – birth (when and where), the home, the school, the work, the achievement, and the difficult part of the road.","Outline it in this order; place the **topic sentence** of the life first.","Draft in the right person: **I** for an autobiography, **he / she** for a biography.","Add one short quotation, or one thing the person was known to say.","Revise for the tenses: the past carries the events, the present carries what still holds.","Edit for agreement, capital letters, end marks and the spelling of names; then copy it cleanly."]},
    {k:"bul", items:["**Sight words of the life story**: born, raised, attended, graduated, became, achieved, remembered, famous, known, legacy.","**Vocabulary**: autobiography, biography, childhood, achievement, ambition, influence, struggle, succeed, inspire, career.","**Endings and roots**: auto- (self) and bio- (life); -hood makes a state or period – childhood, neighbourhood, brotherhood; -ment makes the act or result – achievement, government, movement, argument."]},
    {k:"rule"},
    {k:"h3", t:"Individual and Group Presentations"},
    {k:"num", items:["Know your subject first: be able to tell it without the paper.","Open with one sentence that says what you will speak about.","Stand straight, face the class, and speak to the farthest row.","Use the notes only to keep your place; do not read them aloud.","Speak loudly enough, and more slowly than in talk; pause at the end of each point.","Close with one sentence that says what you came to; then answer questions one at a time."]},
    {k:"bul", items:["In a **group presentation** each member carries one part; rehearse the joining, so that one hand passes to the next without a gap.","The listener’s work: take two notes, and ask one question that the speaker can answer.","**Speaking skills** marked in the assessment: clear words, right tense, a steady voice, an upright bearing, and the time kept."]},
    {k:"p", t:"Write a paragraph of your own life, then a paragraph on the life of a person you admire; read one of the two to the class."}
  ],
  focus:["Autobiography","Biography","Speaking skills","Editing"],
  words:[
    {w:"autobiography", s:"au-to-bi-og-ra-phy", d:"the story of your own life", x:"She wrote her autobiography."},
    {w:"biography", s:"bi-og-ra-phy", d:"the story of another's life", x:"I read a biography of Tolbert."},
    {w:"childhood", s:"child-hood", d:"the time when you were a child", x:"He had a happy childhood."},
    {w:"achievement", s:"a-chieve-ment", d:"something done successfully", x:"Passing the exam was an achievement."},
    {w:"ambition", s:"am-bi-tion", d:"what you hope to become", x:"My ambition is to be a nurse."},
    {w:"influence", s:"in-flu-ence", d:"the power to affect someone", x:"My teacher was a good influence."},
    {w:"struggle", s:"strug-gle", d:"a hard effort", x:"It was a struggle to finish."},
    {w:"succeed", s:"suc-ceed", d:"to do well in the end", x:"Work hard and you will succeed."},
    {w:"inspire", s:"in-spire", d:"to make someone want to act", x:"Her story inspires me."},
    {w:"career", s:"ca-reer", d:"a person's working life", x:"He began his career as a teacher."}
  ],
  sight:["born","raised","attended","graduated","became","achieved","remembered","famous","known","legacy"],
  phonics:[
    {p:"auto- / bio-", label:"Greek roots", words:["autobiography","automatic","biography","biology"]},
    {p:"-hood", label:"the -hood ending", words:["childhood","neighbourhood","brotherhood"]},
    {p:"-ment", label:"the -ment ending", words:["achievement","government","movement","argument"]}
  ],
  grammar:[
    {q:"The story of your own life is an ____.", a:"autobiography", why:"Auto means self."},
    {q:"The story of someone else's life is a ____.", a:"biography", why:"Written by another person."},
    {q:"An autobiography is written in the ____ person (I, my).", a:"first", why:"You write about yourself as I."},
    {q:"A biography is usually written in the ____ person (he, she).", a:"third", why:"You write about another as he or she."},
    {q:"What does the root 'bio' mean?", a:"life", why:"Bio = life."},
    {q:"What does the prefix 'auto' mean?", a:"self", why:"Auto = self."}
  ],
  pairs:[
    {a:"succeed", b:"fail", kind:"antonym"},
    {a:"childhood", b:"adulthood", kind:"antonym"},
    {a:"ambition", b:"goal", kind:"synonym"},
    {a:"achievement", b:"accomplishment", kind:"synonym"},
    {a:"inspire", b:"encourage", kind:"synonym"}
  ],
  passage:{
    title:"A Short Biography",
    text:"Angie Brooks was born in Virginia, Liberia, in 1928. Her childhood was not easy, and she worked to pay for her own schooling. She struggled to study law at a time when few women did so. She succeeded, and later became the first African woman to serve as President of the United Nations General Assembly. Her greatest achievement was showing that a Liberian girl with ambition could reach the highest offices in the world. Her career continues to inspire young women today.",
    qs:[
      {q:"Is this an autobiography or a biography? Why?", a:"A biography, because it is written about Angie Brooks by someone else, using 'she'."},
      {q:"Where and when was she born?", a:"In Virginia, Liberia, in 1928."},
      {q:"What did she study?", a:"Law."},
      {q:"What was her greatest achievement, according to the passage?", a:"Becoming President of the UN General Assembly and showing what a Liberian girl could achieve."},
      {q:"Write the opening sentence of your own autobiography.", a:"Accept any correct first-person opening, e.g. 'I was born in Monrovia in 2016.'"}
    ]
  },
  activities:["Write your own autobiography (one page)","Interview a classmate and write their biography","Oral presentation to the class","Peer editing"],
  materials:["Sample biographies","Grammar and Composition Book 4","Exercise books","Interview question sheets"],
  assessment:["Written autobiography","Written biography","Oral presentation","Editing checklist"]
},
{
  grade:4, period:"VI", sem:"Two", icon:"🔗",
  title:"Digraphs & Diphthongs · Prepositions · Synonyms and Antonyms",
  subtitle:"Sound patterns and word relationships",
  outcomes:["Use consonant digraphs and vowel diphthongs, apply prepositions and conjunctions, and distinguish synonyms, antonyms and homonyms"],
  objectives:[
    "Identify consonant digraphs and formulate words with vowel diphthongs",
    "Apply prepositions and conjunctions to connect sentences",
    "Distinguish synonyms from antonyms and homonyms"
  ],
  note:"A <b>diphthong</b> is two vowels gliding into one sound: <b>oy</b> in <i>toy</i>, <b>oi</b> in <i>oil</i>, <b>ew</b> in <i>new</i>. <b>Synonyms</b> mean the same, <b>antonyms</b> mean the opposite, <b>homonyms</b> sound alike but differ in meaning.",
  study:[
    /* ---- course text: Semester Two, Period VI (guide pp. 101-103) ---- */
    {k:"h3", t:"Consonant Digraphs and Blends"},
    {k:"p", t:"In a **digraph** two consonants join to make one sound the alphabet does not hold by itself: sh, ch, th, wh, ph, ck. In a **blend** the letters join but each sound is still heard: sl, str, bl, gr, tr, fl. Learn which is which before you try to spell the word."},
    {k:"table", head:["Pattern","Kind","Words"], rows:[
      ["sh","digraph – one sound /sh/","ship, shop, brush, fresh"],
      ["ch","digraph – one sound /ch/","chair, choose, chalk, chest"],
      ["th","digraph – one sound /th/","think, that, bath, with"],
      ["ph","digraph – ph says /f/","photo, phone, elephant, graph"],
      ["sl","blend – both sounds heard","sleep, slide, slow, sled"],
      ["str","three-letter blend","street, strong, stretch, string"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Vowel Diphthongs"},
    {k:"p", t:"A **diphthong** is a glide: two vowel letters, or a vowel and a w, sounding as one that moves from one position to the other."},
    {k:"table", head:["Pattern","Sound","Words"], rows:[
      ["oy","like long i","toy, boy, joy, royal, annoy"],
      ["oi","like long i","oil, noise, point, coin, spoil"],
      ["ew","long u","new, few, dew, chew, grew"],
      ["ow","long o, or as in cow","low, grow, bowl / now, cow, how"],
      ["ou","as in out","out, about, house, mountain"],
      ["aw / au","as in saw","saw, draw, law; cause, fault"]
    ]},
    {k:"p", t:"Rule of placement: **oi** stands inside a word, **oy** at its end – oil and boiling, but boy and enjoy. The same holds for aw / -awl in saw, crawl."},
    {k:"rule"},
    {k:"h3", t:"Prepositions"},
    {k:"p", t:"A **preposition** is a word put before a noun or pronoun to join it to the rest of the sentence and tell where, when or how. The noun that follows is the **object of the preposition**, and the whole group is the **prepositional phrase**."},
    {k:"table", head:["Sense","Prepositions","In a sentence"], rows:[
      ["Place – where","in, on, at, under, over, behind, beside, among","The cat is under the table."],
      ["Direction – whither","to, into, onto, towards, across, through, along","We walked across the bridge."],
      ["Position between things","between, among, against, through","The ball rolled between the two chairs."],
      ["Time","before, after, during, since, until, at","We start before ten."]
    ]},
    {k:"p", t:"Never hang the sentence on a preposition left dangling in writing that must be formal, and do not use two where one serves: where … at and in to for into are both faults."},
    {k:"rule"},
    {k:"h3", t:"Conjunctions"},
    {k:"bul", items:["**Coordinating** conjunctions join equals: and, but, or, nor, for, yet, so.","**Subordinating** conjunctions join a dependent clause to a main one: because, although, when, while, if, since, unless, as.","Correlative pairs go in twos and must balance: both … and, either … or, neither … nor, not only … but also.","Join two short sentences into one with the right conjunction, and mark where the comma belongs."]},
    {k:"rule"},
    {k:"h3", t:"Synonyms, Antonyms and Homonyms"},
    {k:"table", head:["Relation","What it means","Examples"], rows:[
      ["Synonyms","the same or nearly the same meaning","happy / glad, big / large, quick / rapid"],
      ["Antonyms","opposite meaning","strong / weak, early / late, clean / dirty"],
      ["Homonyms","the same sound and spelling, different meaning","sea and see; right and write; band (a ring) and band (of players); fair (just) and fair (market)"]
    ]},
    {k:"p", t:"**Sight words**: under, over, behind, between, through, across, beside, among, against, towards. **Vocabulary**: toy, oil, noise, point, new, few, street, sleep, preposition, homonym."},
    {k:"rule"},
    {k:"h3", t:"Word Study and the Year in Review"},
    {k:"num", items:["Read the passage once; mark every word carrying a digraph or a diphthong and say its sound.","Set out the prepositional phrases, and say which noun each depends on.","Find the synonym, then the antonym, for each of the ten new words of the term.","Use the dictionary to separate homonyms by their meanings, and write each in its own sentence.","Write one paragraph in which you use every kind of sentence at least once – declarative, interrogative, imperative and exclamatory."]},
    {k:"p", t:"End of Grade Four: name and write the four kinds of sentence and the three structures; hold the present, past and future tenses without help; build and define a word from prefix, root and suffix; tell a biography or an autobiography in ordered paragraphs; and separate fact from opinion, and digraph from blend, without pausing."}
  ],
  focus:["Consonant digraphs","Vowel diphthongs","Prepositions","Conjunctions","Synonyms, antonyms, homonyms"],
  words:[
    {w:"toy", s:"toy", d:"a thing children play with", x:"The boy lost his toy."},
    {w:"oil", s:"oil", d:"a slippery liquid", x:"Put oil in the pot."},
    {w:"noise", s:"noise", d:"a loud sound", x:"Stop that noise."},
    {w:"point", s:"point", d:"a sharp end, or to show with a finger", x:"Point to the map."},
    {w:"new", s:"new", d:"not old", x:"I have a new shirt."},
    {w:"few", s:"few", d:"a small number", x:"Only a few came."},
    {w:"street", s:"street", d:"a road in a town", x:"We live on Broad Street."},
    {w:"sleep", s:"sleep", d:"to rest with eyes closed", x:"I sleep at nine."},
    {w:"preposition", s:"prep-o-si-tion", d:"a word showing position or direction", x:"'Under' is a preposition."},
    {w:"homonym", s:"hom-o-nym", d:"words that sound alike but differ in meaning", x:"'Sea' and 'see' are homonyms."}
  ],
  sight:["under","over","behind","between","through","across","beside","among","against","towards"],
  phonics:[
    {p:"oy / oi", label:"diphthongs", words:["toy","boy","joy","oil","noise","point","soil"]},
    {p:"ew", label:"diphthong ew", words:["new","few","dew","chew","grew"]},
    {p:"sl / str", label:"consonant digraph & blend", words:["sleep","slide","street","strong","stretch"]}
  ],
  grammar:[
    {q:"Fill the preposition: The cat is ____ the table. (position beneath)", a:"under", why:"Under shows position beneath."},
    {q:"Fill the preposition: We walked ____ the bridge. (from one side to the other)", a:"across", why:"Across shows crossing over."},
    {q:"Fill the preposition: The ball rolled ____ the two chairs.", a:"between", why:"Between = in the middle of two."},
    {q:"Synonym of 'happy':", a:"glad", why:"Both mean the same."},
    {q:"Antonym of 'strong':", a:"weak", why:"Opposite meaning."},
    {q:"Homonym of 'sea':", a:"see", why:"Same sound, different meaning."},
    {q:"Homonym of 'right':", a:"write", why:"Same sound, different meaning."}
  ],
  pairs:[
    {a:"happy", b:"glad", kind:"synonym"},
    {a:"big", b:"large", kind:"synonym"},
    {a:"strong", b:"weak", kind:"antonym"},
    {a:"cheap", b:"expensive", kind:"antonym"},
    {a:"sea", b:"see", kind:"homophone"},
    {a:"right", b:"write", kind:"homophone"},
    {a:"their", b:"there", kind:"homophone"},
    {a:"flour", b:"flower", kind:"homophone"}
  ],
  passage:{
    title:"The Boy and the Oil",
    text:"A boy walked down the street with a tin of oil. He held it against his chest and moved slowly between the market stalls. The noise around him was great. A few traders shouted about their goods. Suddenly he stepped on something slippery near the drain and the tin flew from his hands. Oil spread across the ground. He did not cry. He knew he would have to work to buy new oil, so he began at once.",
    qs:[
      {q:"Write two words from the passage with the 'oi' or 'oy' sound.", a:"Any two of: boy, oil, noise."},
      {q:"Write three prepositions used in the passage.", a:"Any three of: down, against, between, across, near, on."},
      {q:"Give a synonym for 'shouted'.", a:"Called, yelled, cried out."},
      {q:"Give an antonym for 'slowly'.", a:"Quickly."},
      {q:"What did the boy decide to do?", a:"To work so he could buy new oil."}
    ]
  },
  activities:["Diphthong word sorting","Preposition placement game with objects","Synonym/antonym matching cards","Homonym sentence writing"],
  materials:["Phonics for Liberian Schools Book 4","Word cards","Dictionary","Classroom objects"],
  assessment:["Diphthong reading check","Preposition exercise","Synonym/antonym test","Homonym quiz"]
},

/* ================= GRADE 5 ================= */
{
  grade:5, period:"I", sem:"One", icon:"📍",
  title:"Prepositions · Conjunctions · Vowel and Consonant Blends",
  subtitle:"Prepositional phrases and joining sentences",
  outcomes:["Distinguish and use prepositions correctly, combine sentences with conjunctions, and identify vowel and consonant sounds"],
  objectives:[
    "Distinguish and use prepositions correctly",
    "Utilise conjunctions to combine two or more sentences",
    "Identify vowel and consonant sounds",
    "Pronounce initial consonant blends"
  ],
  note:"Coordinating conjunctions spell <b>FANBOYS</b>: <b>F</b>or, <b>A</b>nd, <b>N</b>or, <b>B</b>ut, <b>O</b>r, <b>Y</b>et, <b>S</b>o. A <b>prepositional phrase</b> begins with a preposition and ends with a noun: <i>under the table</i>.",
  study:[
    /* ---- course text: Semester One, Period I (guide pp. 104-105) ---- */
    {k:"h3", t:"The Preposition and the Prepositional Phrase"},
    {k:"p", t:"A **preposition** is a word placed before a noun or a pronoun to join it to the rest of the sentence and tell where, when or how. The noun that follows it is the **object of the preposition**, and the preposition with its object makes a **prepositional phrase**."},
    {k:"bul", items:["by, to, under, behind, in, on, at, with, from, into, over, during, since, until, against, between, among, through, across, beside, within, beyond, beneath, despite, throughout.","In “The book is **on the shelf**”, the preposition is **on**, its object is **the shelf**, and the whole phrase **on the shelf** tells where.","A prepositional phrase never holds a subject and a verb; if you find both, you have a clause, not a phrase.","To find a phrase in a text, first mark the verb; whatever group of words hangs on a preposition is the phrase."]},
    {k:"rule"},
    {k:"h3", t:"Conjunctions"},
    {k:"p", t:"A **conjunction** is a joining word. **Coordinating conjunctions** join words, phrases or clauses that stand on the same level; **subordinating conjunctions** fasten a dependent clause to the main clause."},
    {k:"p", t:"The coordinating conjunctions are remembered by the word **FANBOYS**:"},
    {k:"table", head:["Letter","Conjunction","What it does","Example"], rows:[
      ["F","for","gives the reason","We hurried, for the rain was coming."],
      ["A","and","adds","She swept the floor and washed the plates."],
      ["N","nor","adds a negative either","He did not come, nor did he send word."],
      ["B","but","turns the sense","I was tired, but I finished the work."],
      ["O","or","gives a choice","You may take the bus or walk."],
      ["Y","yet","contrasts as but does","The way was long, yet we came early."],
      ["S","so","gives the result","It rained heavily, so we stayed inside."]
    ]},
    {k:"p", t:"**Subordinating conjunctions** include as soon as, whenever, supposing, because, although, if, when, while, since, unless, before, after, so that. Put a comma after a dependent clause that stands first: When the cake is brown, take it out of the oven."},
    {k:"rule"},
    {k:"h3", t:"Combining Sentences"},
    {k:"num", items:["Read the two short sentences and see how they are related – added, contrasted, chosen, caused, or resulted.","Choose the conjunction that carries that relation.","Join them, keeping the subject and the tense of each part true.","Place the comma before the coordinating conjunction when both sides could stand alone.","Read the new sentence aloud; if it leaves the mind waiting, add the part that is wanted."]},
    {k:"p", t:"I was tired. I finished the work. → **I was tired, but I finished the work.** / It rained heavily. We stayed inside. → **It rained heavily, so we stayed inside.** / She swept the floor. She washed the plates. → **She swept the floor and washed the plates.**"},
    {k:"rule"},
    {k:"h3", t:"Three-Letter Blends and the Prefix be-"},
    {k:"bul", items:["**str** – street, strong, stretch, stride; **spl** – splash, split, splendid; **scr** – scream, scratch, screen; **thr** – three, throw, through, thread.","In these **consonant blends** every sound is still heard; they differ from a **digraph** (sh, ch, th, ph), where two letters make one new sound.","The prefix **be-** is fastened to words to give the sense of on, at, by, around, thoroughly: beneath, beyond, behind, between, because, bestow, become.","**Sight words**: for, and, nor, but, or, yet, so, although, unless, while – the joining words themselves. **Vocabulary**: preposition, conjunction, phrase, combine, beneath, beyond, within, throughout, despite, among."]},
    {k:"p", t:"Write five sentences in which each of FANBOYS joins two clauses once, and underline every prepositional phrase you use in them."}
  ],
  focus:["Prepositions","Prepositional phrases","Coordinating conjunctions (FANBOYS)","Vowel and consonant blends"],
  words:[
    {w:"preposition", s:"prep-o-si-tion", d:"a word showing relation of a noun to another word", x:"'Behind' is a preposition."},
    {w:"conjunction", s:"con-junc-tion", d:"a joining word", x:"'But' is a conjunction."},
    {w:"phrase", s:"phrase", d:"a group of words without a subject and verb", x:"'In the box' is a phrase."},
    {w:"combine", s:"com-bine", d:"to join together", x:"Combine the two sentences."},
    {w:"beneath", s:"be-neath", d:"under", x:"The key is beneath the mat."},
    {w:"beyond", s:"be-yond", d:"further than", x:"The farm is beyond the river."},
    {w:"within", s:"with-in", d:"inside", x:"Stay within the compound."},
    {w:"throughout", s:"through-out", d:"in every part of", x:"It rained throughout the night."},
    {w:"despite", s:"de-spite", d:"in spite of", x:"He came despite the rain."},
    {w:"among", s:"a-mong", d:"in the middle of many", x:"She stood among the crowd."}
  ],
  sight:["for","and","nor","but","or","yet","so","although","unless","while"],
  phonics:[
    {p:"str / spl", label:"three-letter blends", words:["street","strong","stretch","splash","split"]},
    {p:"scr / thr", label:"three-letter blends", words:["scream","scratch","three","throw","through"]},
    {p:"be-", label:"prefix be", words:["beneath","beyond","behind","between","because"]}
  ],
  grammar:[
    {q:"Combine with 'but': I was tired. I finished the work.", a:"I was tired, but I finished the work.", why:"But shows contrast."},
    {q:"Combine with 'so': It rained heavily. We stayed inside.", a:"It rained heavily, so we stayed inside.", why:"So shows result."},
    {q:"Combine with 'and': She swept the floor. She washed the plates.", a:"She swept the floor and washed the plates.", why:"And adds actions."},
    {q:"Combine with 'or': You may take the bus. You may walk.", a:"You may take the bus or walk.", why:"Or gives a choice."},
    {q:"Underline the prepositional phrase: The book is on the shelf.", a:"on the shelf", why:"Begins with a preposition, ends with a noun."},
    {q:"Underline the prepositional phrase: We walked through the forest.", a:"through the forest", why:"Preposition + noun."},
    {q:"What does FANBOYS stand for?", a:"For, And, Nor, But, Or, Yet, So", why:"The coordinating conjunctions."}
  ],
  pairs:[
    {a:"beneath", b:"above", kind:"antonym"},
    {a:"within", b:"outside", kind:"antonym"},
    {a:"beneath", b:"under", kind:"synonym"},
    {a:"beyond", b:"past", kind:"synonym"},
    {a:"combine", b:"join", kind:"synonym"}
  ],
  passage:{
    title:"Beyond the River",
    text:"Beyond the river there is a small farm, and my grandfather has worked on it for thirty years. He rises before dawn, so he can reach the field while the air is cool. Despite his age he still carries his own tools among the rows of cassava. Within the fence he keeps three goats. He does not use a tractor, nor does he want one, yet his farm produces more than many larger ones. Throughout the season he works quietly, but he is proud of every plant.",
    qs:[
      {q:"Write four prepositions used in this passage.", a:"Any four of: beyond, on, before, among, within, throughout."},
      {q:"Write three coordinating conjunctions used.", a:"Any three of: and, so, nor, yet, but."},
      {q:"Why does he rise before dawn?", a:"So he can reach the field while the air is cool."},
      {q:"Underline one prepositional phrase.", a:"e.g. 'beyond the river', 'among the rows of cassava', 'within the fence'."},
      {q:"Combine using 'but': He is old. He works hard.", a:"He is old, but he works hard."}
    ]
  },
  activities:["Preposition scavenger hunt in the classroom","Sentence combining drills","FANBOYS chart","Blend pronunciation practice"],
  materials:["Grammar and Composition Book 5","Preposition charts","Sentence strips","Exercise books"],
  assessment:["Preposition identification test","Sentence combining exercise","Oral blend reading","Quiz"]
},
{
  grade:5, period:"II", sem:"One", icon:"🎭",
  title:"Comprehension · Figurative Language",
  subtitle:"Simile, metaphor, personification and other devices",
  outcomes:["Read and respond to various types of literature, interpret figurative language, and compare and contrast characters"],
  objectives:[
    "Read and respond to various types of literature",
    "Interpret figurative language",
    "Compare and contrast characters",
    "Apply diphthongs to reading and writing"
  ],
  note:"<b>Simile</b> compares using <i>like</i> or <i>as</i> (as brave as a lion). <b>Metaphor</b> says one thing IS another (he is a lion). <b>Personification</b> gives human qualities to things (the wind whispered). <b>Hyperbole</b> exaggerates (I have told you a thousand times).",
  study:[
    /* ---- course text: Semester One, Period II (guide pp. 106-107) ---- */
    {k:"h3", t:"Reading the Real Texts"},
    {k:"bul", items:["Read **poems** for the sound and the picture; read **short stories** for the plot and the turn; read **newspapers and magazines** for the fact and the account.","In a newspaper, the **headline** gives the news in a few words, the first paragraph answers who, what, when, where, and the paragraphs below carry the details.","A **magazine** article is longer, is grouped under headings, and is written to interest as well as to inform.","Before reading, look at the title and the picture and predict what the piece will say; after reading, mark whether your prediction held."]},
    {k:"rule"},
    {k:"h3", t:"Figurative Language"},
    {k:"p", t:"**Figurative language** uses words out of their plain sense to make a picture or a feeling. Language taken at its exact sense is **literal**; language used for the likeness it suggests is **figurative**."},
    {k:"table", head:["Device","What it does","Example"], rows:[
      ["Simile","compares two things with like or as","She is as brave as a lion."],
      ["Metaphor","says one thing is another, without like or as","The classroom is a zoo."],
      ["Personification","gives the powers of a person to a thing or a force","The wind whispered through the trees."],
      ["Hyperbole","deliberate overstatement for effect","I have told you a million times."],
      ["Onomatopoeia","a word that sounds like the thing it names","The bees buzzed; the kettle banged."],
      ["Alliteration","repetition of a beginning sound","Peter picked purple plums."],
      ["Imagery","words that appeal to the senses – sight, sound, smell, touch, taste","the hot dust, the smell of rain on the zinc."],
      ["Symbolism","a thing that stands for more than itself","the white dove for peace; the palm for victory"]
    ]},
    {k:"p", t:"To name the device, look first for like or as (simile); then for a straight saying that one thing is another (metaphor); then for human work done by a lifeless thing (personification)."},
    {k:"rule"},
    {k:"h3", t:"Characterization"},
    {k:"p", t:"**Characterization** is the way a writer builds a character and lets you know what the person is like. A character is shown by:"},
    {k:"bul", items:["what the character **does** – the choice made in the trouble;","what the character **says**, and in what manner;","what **other characters say** about him or her;","the writer’s **direct statement**;","appearance, dress and habit, used to carry meaning.","A character that grows or changes through the story is a **developing** character; one that stays the same from first to last is a **static** character."]},
    {k:"rule"},
    {k:"h3", t:"Sounds and Word Endings"},
    {k:"bul", items:["**Diphthongs**: oi / oy – voice, choice, noise, royal, loyal (oi inside the word, oy at its end); ou / ow – proud, cloud, around, tower, power.","The ending **-tion** (also -sion) makes the act or state a noun: personification, characterization, imagination, description.","Suffixes of the devices: -ify and -ic – personify, figurative, symbolic, dramatic.","**Sight words**: like, as, seems, appears, resembles, compared, although, whereas, similarly, unlike – the very words on which comparison is built.","**Vocabulary**: simile, metaphor, personification, hyperbole, imagery, symbolism, alliteration, onomatopoeia, literal, characterization."]},
    {k:"p", t:"Write four sentences on one river: one with a simile, one with a metaphor, one with personification, one with hyperbole; then say the literal meaning of each."}
  ],
  focus:["Figurative language","Simile and metaphor","Personification","Hyperbole","Characterization"],
  words:[
    {w:"simile", s:"sim-i-le", d:"a comparison using like or as", x:"'As white as chalk' is a simile."},
    {w:"metaphor", s:"met-a-phor", d:"saying one thing is another", x:"'He is a lion' is a metaphor."},
    {w:"personification", s:"per-son-i-fi-ca-tion", d:"giving human qualities to things", x:"'The sun smiled' is personification."},
    {w:"hyperbole", s:"hy-per-bo-le", d:"a great exaggeration", x:"'I am starving' is hyperbole."},
    {w:"imagery", s:"im-age-ry", d:"words that create pictures", x:"The poem is full of imagery."},
    {w:"symbolism", s:"sym-bol-ism", d:"using a thing to stand for an idea", x:"The dove is symbolism for peace."},
    {w:"alliteration", s:"al-lit-er-a-tion", d:"repeating the first sound", x:"'Big brown bear' is alliteration."},
    {w:"onomatopoeia", s:"on-o-mat-o-poe-ia", d:"words that copy sounds", x:"'Bang' is onomatopoeia."},
    {w:"literal", s:"lit-er-al", d:"the exact meaning", x:"The literal meaning is different."},
    {w:"characterization", s:"char-ac-ter-i-za-tion", d:"how a writer shows what a character is like", x:"Study the characterization."}
  ],
  sight:["like","as","seems","appears","resembles","compared","although","whereas","similarly","unlike"],
  phonics:[
    {p:"oi / oy", label:"diphthongs", words:["voice","choice","noise","royal","loyal"]},
    {p:"ou / ow", label:"diphthongs", words:["proud","cloud","around","tower","power"]},
    {p:"-tion", label:"the -tion ending", words:["personification","characterization","imagination","description"]}
  ],
  grammar:[
    {q:"Name the device: She is as brave as a lion.", a:"simile", why:"It uses 'as'."},
    {q:"Name the device: The classroom is a zoo.", a:"metaphor", why:"It says one thing IS another."},
    {q:"Name the device: The wind whispered through the trees.", a:"personification", why:"Wind is given a human action."},
    {q:"Name the device: I have told you a million times.", a:"hyperbole", why:"It is a great exaggeration."},
    {q:"Name the device: The bees buzzed.", a:"onomatopoeia", why:"'Buzzed' copies the sound."},
    {q:"Name the device: Peter picked purple plums.", a:"alliteration", why:"Repeated initial p sound."},
    {q:"Write a simile about rain.", a:"Accept any simile using like or as, e.g. 'The rain fell like stones on the roof.'"}
  ],
  pairs:[
    {a:"literal", b:"figurative", kind:"antonym"},
    {a:"simile", b:"metaphor", kind:"related"},
    {a:"praise", b:"criticise", kind:"antonym"},
    {a:"brave", b:"courageous", kind:"synonym"},
    {a:"imagery", b:"description", kind:"synonym"}
  ],
  passage:{
    title:"The Old Fisherman",
    text:"Old Wleh was as tough as the rope he mended each morning. His hands were maps of every year he had spent at sea. The waves whispered to him and the wind called his name. He said he had caught a fish as long as a canoe, and a thousand fish before that one. His son Jarwleh was different: quiet, careful, and happier with a book than a net. Yet the sea was a mother to them both, and neither could leave her.",
    qs:[
      {q:"Find a simile in the passage and write it out.", a:"e.g. 'as tough as the rope' or 'a fish as long as a canoe'."},
      {q:"Find an example of personification.", a:"'The waves whispered to him' or 'the wind called his name'."},
      {q:"Find an example of hyperbole.", a:"'a thousand fish before that one'."},
      {q:"'The sea was a mother to them both' — what device is this?", a:"A metaphor."},
      {q:"Contrast Old Wleh with his son Jarwleh.", a:"Wleh is tough and a fisherman; Jarwleh is quiet, careful and prefers books to nets."}
    ]
  },
  activities:["Identify devices in a poem","Write your own simile and metaphor","Compare two characters in a table","Read poems aloud with expression"],
  materials:["Poems, short stories, newspapers and magazines","Figurative language charts","Exercise books"],
  assessment:["Device identification test","Original figurative writing","Character comparison table","Oral reading"]
},
{
  grade:5, period:"III", sem:"One", icon:"🎬",
  title:"Dramatization · Interjections · Monologue and Dialogue",
  subtitle:"Speaking and performing with expression",
  outcomes:["Dramatize details from readings, use interjections, and present ideas through dialogue and monologue"],
  objectives:[
    "Read and dramatize details from readings",
    "Identify and use interjections",
    "Discuss articles, pictures, poems and stories",
    "Present facts and ideas through dialogue and monologue"
  ],
  note:"An <b>interjection</b> is a word that shows sudden feeling and is often followed by an exclamation mark: <i>Oh! Ah! Alas! Hurrah! Oops!</i> A <b>dialogue</b> is speech between two or more people; a <b>monologue</b> is one person speaking alone.",
  study:[
    /* ---- course text: Semester One, Period III (guide pp. 108-109) ---- */
    {k:"h3", t:"Dramatization"},
    {k:"p", t:"To **dramatize** is to turn a story, an incident or a poem into action and speech before an audience. The class that dramatizes a reading understands it twice: once in the mind and once in the body."},
    {k:"num", items:["Choose the piece and read it well; mark the parts in it that can be acted.","Assign the parts; let each player say which character he or she carries and what that character wants.","Cut the story into **scenes** – one place, one business.","Rehearse: learn the lines, fix the moving, and set the order of coming on and going off.","Add the simple properties – the bucket, the cutlass, the hat, the desk – and a place for the players.","Perform: speak so the last bench hears, keep the body open to the audience, and play to the end of every line.","Talk over the performance after it: what carried, what was lost, and what the next group will do differently."]},
    {k:"rule"},
    {k:"h3", t:"Dialogue and Monologue"},
    {k:"p", t:"**Dialogue** is speech exchanged between two or more persons; a **monologue** (also called a **soliloquy** when the character speaks alone on the stage to give the thought) is a long speech by one person before the others."},
    {k:"bul", items:["Each new speaker begins a new paragraph, with the words spoken inside **quotation marks** and the mark that belongs to the speech inside them.","Kou asked, “Will you come with me?” “I cannot,” she said, “for the rice is not done.”","Dialogue carries the action and lets the character speak in his own voice; keep it short and true to the person.","In a **readers’ theatre** the group reads from the book in parts, with voice and face but without the moving – the practice that makes a class read with meaning."]},
    {k:"rule"},
    {k:"h3", t:"Interjections"},
    {k:"p", t:"An **interjection** is a word or a short group thrown out to carry feeling – joy, pain, surprise, grief, calling. It stands apart from the structure of the sentence, and it is followed commonly by an **exclamation mark**, or by a comma when the feeling is quiet."},
    {k:"table", head:["Feeling","Interjections","In a sentence"], rows:[
      ["Surprise","oh, ah, wow","Oh! I did not expect you."],
      ["Joy, triumph","hurrah, bravo","Hurrah! We won the match."],
      ["Pain","ouch, ah","Ouch! That hurts."],
      ["Grief, pity","alas","Alas, the harvest is gone."],
      ["Careless slip","oops","Oops! I dropped the basin."],
      ["Pause, thinking","well, indeed","Well, I will try again."],
      ["Calling","hey, hi","Hey! Come here."]
    ]},
    {k:"bul", items:["Do not use an interjection in place of a reason in a formal piece of writing.","Set it off with a comma or an exclamation mark, and never let it be the subject of the sentence."]},
    {k:"rule"},
    {k:"h3", t:"Public Speaking and the Materials of the Lesson"},
    {k:"bul", items:["**Public speaking**: stand straight, face the audience, speak loudly and slowly, keep the hands free, look at different parts of the room, and finish with the point you came to carry.","Prepare in three parts – say what you will say, say it, then say what you said; three sentences of preparation beat three minutes of searching on the feet.","Use the **articles, pictures, poems and stories** of the period as the material of the speech or the play; a speech without a thing in it is a bell without a clapper.","**Endings**: -logue – dialogue, monologue, catalogue, prologue; -ence / -ance make the doers and the doing – audience, performance, appearance, entrance; soft **c** and soft **g** – scene, centre, city; gesture, gentle, giant.","**Sight words**: oh, ah, alas, hurrah, oops, well, wow, ouch, hey, indeed. **Vocabulary**: interjection, dialogue, monologue, dramatize, expression, gesture, audience, rehearse, scene, character."]},
    {k:"p", t:"Choose one passage from the reader, cut it into three scenes, and perform it for another class in the week; then write the two things the audience said you did best."}
  ],
  focus:["Dramatization","Interjections","Dialogue","Monologue","Public speaking"],
  words:[
    {w:"interjection", s:"in-ter-jec-tion", d:"a word showing sudden feeling", x:"'Alas!' is an interjection."},
    {w:"dialogue", s:"di-a-logue", d:"speech between two or more people", x:"Write a dialogue."},
    {w:"monologue", s:"mon-o-logue", d:"one person speaking alone", x:"He gave a monologue."},
    {w:"dramatize", s:"dram-a-tize", d:"to act out", x:"Dramatize the scene."},
    {w:"expression", s:"ex-pres-sion", d:"the feeling you show", x:"Read with expression."},
    {w:"gesture", s:"ges-ture", d:"a movement of the hand or head", x:"Use a gesture."},
    {w:"audience", s:"au-di-ence", d:"the people watching or listening", x:"Face the audience."},
    {w:"rehearse", s:"re-hearse", d:"to practise a performance", x:"We rehearse after school."},
    {w:"scene", s:"scene", d:"one part of a play", x:"Act the second scene."},
    {w:"character", s:"char-ac-ter", d:"a person in a story or play", x:"Choose a character."}
  ],
  sight:["oh","ah","alas","hurrah","oops","well","wow","ouch","hey","indeed"],
  phonics:[
    {p:"-logue", label:"the -logue ending", words:["dialogue","monologue","catalogue","prologue"]},
    {p:"soft c / soft g", label:"soft sounds", words:["scene","gesture","gentle","centre","city"]},
    {p:"-ence/-ance", label:"noun endings", words:["audience","performance","appearance","entrance"]}
  ],
  grammar:[
    {q:"Add an interjection: ____! I forgot my book.", a:"Oh", why:"Shows sudden feeling."},
    {q:"Add an interjection: ____! We won the match.", a:"Hurrah", why:"Shows joy."},
    {q:"Add an interjection: ____! That hurts.", a:"Ouch", why:"Shows pain."},
    {q:"Speech between two people is a ____.", a:"dialogue", why:"Di = two."},
    {q:"One person speaking alone is a ____.", a:"monologue", why:"Mono = one."},
    {q:"What punctuation usually follows an interjection?", a:"an exclamation mark", why:"It shows strong feeling."}
  ],
  pairs:[
    {a:"dialogue", b:"monologue", kind:"antonym"},
    {a:"rehearse", b:"practise", kind:"synonym"},
    {a:"audience", b:"spectators", kind:"synonym"},
    {a:"dramatize", b:"act", kind:"synonym"},
    {a:"gesture", b:"motion", kind:"synonym"}
  ],
  passage:{
    title:"At the Water Pump — A Dialogue",
    text:"KOU: Good morning, Ma Sonii. May I help you carry that bucket?\nMA SONII: Oh! Thank you, my child. My back is not what it was.\nKOU: It is heavy. How do you carry it every day?\nMA SONII: Well, when you have done a thing for fifty years, your body learns it.\nKOU: Alas! I cannot even lift it to my head.\nMA SONII: Ha! Bend your knees, not your back. There — you see? You are stronger than you thought.\nKOU: Hurrah! I did it!",
    qs:[
      {q:"Is this a dialogue or a monologue? How do you know?", a:"A dialogue, because two people (Kou and Ma Sonii) are speaking to each other."},
      {q:"Write four interjections used in the passage.", a:"Oh, Well, Alas, Ha, Hurrah (any four)."},
      {q:"What advice does Ma Sonii give?", a:"To bend the knees, not the back."},
      {q:"How does Kou feel at the end?", a:"Proud and pleased that she managed it."},
      {q:"Rewrite Ma Sonii's last line as a monologue of two sentences.", a:"Accept any correct single-speaker version."}
    ]
  },
  activities:["Act out a dialogue in pairs","Write and perform a short monologue","Interjection card game","Class drama presentation"],
  materials:["Play scripts","Props","Poems and stories","Recording device if available"],
  assessment:["Dramatization performance","Written dialogue","Interjection exercise","Public speaking rubric"]
},
{
  grade:5, period:"IV", sem:"Two", icon:"🤫",
  title:"Reading & Comprehension · Silent and Oral Reading",
  subtitle:"Reading strategies and critical interpretation",
  outcomes:["Read with clarity and comprehension, interpret and discuss the text"],
  objectives:[
    "Read silently and orally with understanding",
    "Discuss and answer questions correctly from the text",
    "Demonstrate good active listening skills",
    "Think critically to interpret the text"
  ],
  note:"<b>Silent reading</b>: choose your material, set a time, use your inner voice, read independently. <b>Oral reading</b>: choose material, set a time, read aloud clearly, try readers' theatre.",
  study:[
    /* ---- course text: Semester Two, Period IV (guide pp. 110-111) ---- */
    {k:"h3", t:"Silent Reading"},
    {k:"p", t:"**Silent reading** is reading without sound, with the eye and the mind, and it is the way a grown reader works: faster than the tongue, and straight to the sense."},
    {k:"num", items:["**Choose the reading material** you need or want, and read the title first.","**Allot a specified amount of time** – so many minutes on the clock – and keep to it.","**Use the inner voice** no more than you must; let the eye run over the phrase, not the letter.","**Read silently and independently**, without the finger and without moving the lips.","Stop at the end of each part and say in one sentence what it carried."]},
    {k:"rule"},
    {k:"h3", t:"Oral Reading"},
    {k:"p", t:"**Oral reading** is reading aloud so that others may hear and understand. The same preparation stands, with the voice added:"},
    {k:"num", items:["Choose the material, and read it once to yourself before you read it aloud.","Allot the time, and keep to it so that the whole passage is finished.","Read aloud with the eyes a little ahead of the tongue, the voice shaped at the comma and brought down at the full stop.","Practise **readers’ theatre**: each reader carries one part; the group reads for sense, not for speed."]},
    {k:"bul", items:["**Fluency** is smooth, correct reading at a good pace, with the words in their right groups.","Give the questioning lift at a question and weight to the word the writer would strike.","Do not drop the endings of words, and do not add sounds that are not written."]},
    {k:"rule"},
    {k:"h3", t:"Analysing and Interpreting a Text"},
    {k:"p", t:"To **analyse** a text is to take it apart and see how it was built; to **interpret** it is to explain what it means. Analysis asks how; interpretation asks what for."},
    {k:"bul", items:["Name the kind of text and the writer’s purpose: to inform, to persuade, to describe or to tell a story.","Mark the main idea and the details that carry it; say how each part joins the next.","Ask what the writer believes, and what the choice of a word shows – the storm struck the town is not the same as the storm visited the town.","Test what the text says against what you know; say what it makes you conclude, and what you would still need to learn.","**Active listening** is the answering half of the work: give attention, keep your eyes on the speaker, and respond with a question or a remark that shows you followed."]},
    {k:"rule"},
    {k:"h3", t:"Words of the Period"},
    {k:"bul", items:["**Endings**: -ly makes the manner adverb – silently, clearly, carefully, quickly, loudly; -sion makes the act or state – discussion, decision, division, confusion; -ent / -ant the quality – silent, attentive, important, different.","**Sight words**: carefully, clearly, silently, aloud, independently, critically, actively, thoroughly, precisely, effectively.","**Vocabulary**: silent, oral, fluency, interpret, critical, analyse, discussion, comprehend, passage, attentive."]},
    {k:"p", t:"Read the same page twice this week – once silently against the clock, once aloud to a partner. Say which way you understood the more, and why the two answers are not always the same."}
  ],
  focus:["Silent reading strategy","Oral reading strategy","Active listening","Critical interpretation"],
  words:[
    {w:"silent", s:"si-lent", d:"without sound", x:"Silent reading time."},
    {w:"oral", s:"o-ral", d:"spoken aloud", x:"Oral reading practice."},
    {w:"fluency", s:"flu-en-cy", d:"reading smoothly", x:"Improve your fluency."},
    {w:"interpret", s:"in-ter-pret", d:"to explain the meaning", x:"Interpret the poem."},
    {w:"critical", s:"crit-i-cal", d:"thinking carefully and judging", x:"Use critical thinking."},
    {w:"analyse", s:"an-a-lyse", d:"to examine in detail", x:"Analyse the text."},
    {w:"discussion", s:"dis-cus-sion", d:"talking about a topic", x:"Join the discussion."},
    {w:"comprehend", s:"com-pre-hend", d:"to understand", x:"Do you comprehend the passage?"},
    {w:"passage", s:"pas-sage", d:"a section of text", x:"Read the passage."},
    {w:"attentive", s:"at-ten-tive", d:"paying careful attention", x:"Be attentive in class."}
  ],
  sight:["carefully","clearly","silently","aloud","independently","critically","actively","thoroughly","precisely","effectively"],
  phonics:[
    {p:"-ly", label:"adverb ending", words:["silently","clearly","carefully","quickly","loudly"]},
    {p:"-sion", label:"the -sion ending", words:["discussion","decision","division","confusion"]},
    {p:"-ent/-ant", label:"adjective endings", words:["silent","attentive","important","different"]}
  ],
  grammar:[
    {q:"Reading without making a sound is ____ reading.", a:"silent", why:"Silent = no sound."},
    {q:"Reading aloud to others is ____ reading.", a:"oral", why:"Oral = spoken."},
    {q:"Reading smoothly and at a good pace is called ____.", a:"fluency", why:"Definition of fluency."},
    {q:"To explain what a text means is to ____ it.", a:"interpret", why:"Interpretation explains meaning."},
    {q:"Listening carefully and responding is called ____ listening.", a:"active", why:"Active listening involves responding."}
  ],
  pairs:[
    {a:"silent", b:"oral", kind:"antonym"},
    {a:"attentive", b:"careless", kind:"antonym"},
    {a:"comprehend", b:"understand", kind:"synonym"},
    {a:"analyse", b:"examine", kind:"synonym"},
    {a:"interpret", b:"explain", kind:"synonym"}
  ],
  passage:{
    title:"The Talking Drum",
    text:"Long before telephones reached the interior, messages travelled by drum. A skilled drummer could copy the rise and fall of speech so exactly that villages ten miles apart understood one another. News of a birth, a death, or a coming visitor moved faster than any runner. The drummer held a position of great trust, for a careless beat could start a panic. Today the talking drum is heard mostly at ceremonies, yet the old drummers insist that anyone who listens attentively can still hear words inside the rhythm.",
    qs:[
      {q:"How did messages travel before telephones?", a:"By talking drum."},
      {q:"How far apart could villages understand the drum?", a:"Ten miles."},
      {q:"Why was the drummer trusted?", a:"Because a careless beat could start a panic."},
      {q:"When is the talking drum heard today?", a:"Mostly at ceremonies."},
      {q:"What do the old drummers believe?", a:"That anyone who listens attentively can still hear words inside the rhythm."}
    ]
  },
  activities:["Timed silent reading followed by questions","Readers' theatre in groups","Active listening exercise","Group discussion of the text"],
  materials:["Assorted reading materials","Timer","Discussion question cards","Exercise books"],
  assessment:["Silent reading comprehension test","Oral reading rubric","Discussion participation","Written interpretation"]
},
{
  grade:5, period:"V", sem:"Two", icon:"🎵",
  title:"Literary Terms · Rhyming and Compound Words · C and G Sounds",
  subtitle:"Imagery, flashback, irony and word formation",
  outcomes:["Identify and use literary terms, rhyming words and compound words, and pronounce words with C and G sounds"],
  objectives:[
    "Identify and use literary terms and devices",
    "Make use of rhyming words and compound words",
    "Pronounce words with the soft and hard sounds of C and G"
  ],
  note:"<b>Soft c</b> sounds like s before e, i, y (<i>cell, city, cycle</i>). <b>Hard c</b> sounds like k elsewhere (<i>cat, cup</i>). Same for g: soft g before e, i, y (<i>gentle, giant</i>), hard g elsewhere (<i>goat, gum</i>).",
  study:[
    /* ---- course text: Semester Two, Period V (guide pp. 112-113) ---- */
    {k:"h3", t:"Literary Terms and Devices"},
    {k:"table", head:["Term","What it means","Where you meet it"], rows:[
      ["Imagery","words that build a picture on the senses – sight, sound, smell, taste, touch","the red dust settling on the green leaf"],
      ["Foreshadowing","a hint early in the story of what will come later","the calm before the trouble; the dog that growls at the gate"],
      ["Allusion","a passing reference to something known – the Bible, a hero, an event","he turned back like Lot’s wife"],
      ["Flashback","a scene carried back to an earlier time inside the story","what happened in the village before the war"],
      ["Irony","the saying or the turn that is the opposite of what was expected","the fire station burning; the answer that asks a harder question"],
      ["Suspense","the uneasy waiting the writer keeps up before the end","the night before the judgment"]
    ]},
    {k:"p", t:"**Imagery** is the writer’s picture made with words; a text is vivid in the degree that its imagery is exact. Say which sense each image calls to, and which word does the work."},
    {k:"rule"},
    {k:"h3", t:"Rhyming Words"},
    {k:"p", t:"Words **rhyme** when the ending sound – the vowel and the consonants that follow it – is the same and the beginning is different: fall / wall, brown / town, bake / cake. Rhyme marks the line ends of a poem and helps the memory carry the verse."},
    {k:"bul", items:["Take a word and build the family: ake → bake, cake, lake, make, take, wake.","Not all like-sounding words rhyme: love and move do not; the sound, not the spelling, decides.","In a stanza, write the last word of each line and see which pair answers which – that is the **rhyme scheme**."]},
    {k:"rule"},
    {k:"h3", t:"Compound Words"},
    {k:"p", t:"A **compound word** is made when two whole words are joined to make one new meaning: sun + shine → sunshine; class + room → classroom; foot + ball → football; grand + mother → grandmother; water + fall → waterfall."},
    {k:"bul", items:["Some are written as one word (notebook), some with a space (post office), some with a hyphen (mother-in-law).","The **stress** tells where the meaning sits: a **GREENhouse** (for plants) is not a **green HOUSE**.","Make six compounds from the words of the day and use each in a sentence."]},
    {k:"rule"},
    {k:"h3", t:"The Sounds of c and g"},
    {k:"bul", items:["**c** is **hard** (/k/) before a, o, u and at the end of a word: cat, cup, cake, coat, clock, music. It is **soft** (/s/) before e, i, y: cell, city, cycle, circle, centre, pencil, ice.","**g** is **hard** (/g/) before a, o, u: goat, gum, game, glad, grow, flag. It is **soft** (/j/) before e, i, y: gentle, giant, gym, germ, danger, page, age.","The same law is why circus begins with /s/ and circle too, while call keeps /k/.","Sort a list of twenty words on the two sounds before you open the dictionary, then check your sorting."]},
    {k:"rule"},
    {k:"h3", t:"Words to Know"},
    {k:"bul", items:["**Sight words**: cell, city, cycle, gentle, giant, gym, cat, cup, goat, gum.","**Vocabulary**: imagery, foreshadowing, allusion, flashback, irony, compound, rhyme, gentle, circle, giant.","**Endings**: soft c and soft g mark the suffixes themselves – -ous, -age, -cial carry the soft sound."]},
    {k:"p", t:"Find one example of each device in the poem or the story of the week, copy the line, and say the term beneath it in your notebook."}
  ],
  focus:["Literary terms","Imagery, foreshadowing, allusion, flashback, irony","Rhyming words","Compound words","Soft and hard c and g"],
  words:[
    {w:"imagery", s:"im-age-ry", d:"language that creates pictures", x:"The poem uses strong imagery."},
    {w:"foreshadowing", s:"fore-shad-ow-ing", d:"hints about what will happen", x:"The dark sky was foreshadowing."},
    {w:"allusion", s:"al-lu-sion", d:"a reference to something known", x:"An allusion to a proverb."},
    {w:"flashback", s:"flash-back", d:"a scene from the past", x:"The story opens with a flashback."},
    {w:"irony", s:"i-ro-ny", d:"when the opposite of what is expected happens", x:"It was irony that the fire station burned."},
    {w:"compound", s:"com-pound", d:"a word made of two words", x:"'Sunshine' is a compound word."},
    {w:"rhyme", s:"rhyme", d:"words ending with the same sound", x:"'Cake' and 'lake' rhyme."},
    {w:"gentle", s:"gen-tle", d:"soft and kind", x:"He has a gentle voice."},
    {w:"circle", s:"cir-cle", d:"a round shape", x:"Draw a circle."},
    {w:"giant", s:"gi-ant", d:"a very large person or thing", x:"A giant tree fell."}
  ],
  sight:["cell","city","cycle","gentle","giant","gym","cat","cup","goat","gum"],
  phonics:[
    {p:"soft c", label:"c says s", words:["cell","city","cycle","circle","centre","pencil"]},
    {p:"hard c", label:"c says k", words:["cat","cup","cake","coat","clock"]},
    {p:"soft g", label:"g says j", words:["gentle","giant","gym","germ","danger"]},
    {p:"hard g", label:"g says g", words:["goat","gum","game","glad","grow"]}
  ],
  grammar:[
    {q:"Join to make a compound word: sun + shine = ", a:"sunshine", why:"Two words joined."},
    {q:"Join to make a compound word: class + room = ", a:"classroom", why:"Two words joined."},
    {q:"Join to make a compound word: foot + ball = ", a:"football", why:"Two words joined."},
    {q:"Write a word that rhymes with 'town':", a:"brown", why:"Same ending sound."},
    {q:"Write a word that rhymes with 'bake':", a:"cake", why:"Same ending sound."},
    {q:"Is the c in 'city' soft or hard?", a:"soft", why:"C before i says s."},
    {q:"Is the g in 'goat' soft or hard?", a:"hard", why:"G before o says g."},
    {q:"A hint about what will happen later is called ____.", a:"foreshadowing", why:"Definition."}
  ],
  pairs:[
    {a:"fall", b:"wall", kind:"rhyme"},
    {a:"brown", b:"town", kind:"rhyme"},
    {a:"bake", b:"cake", kind:"rhyme"},
    {a:"sun", b:"shine", kind:"compound"},
    {a:"class", b:"room", kind:"compound"},
    {a:"rain", b:"bow", kind:"compound"}
  ],
  passage:{
    title:"The Gentle Giant",
    text:"In the centre of the city stood a giant cotton tree. Children called it the gentle giant. Its branches made a wide circle of shade where market women rested. Long ago, my grandmother told me, a young man had wanted to cut it down for timber. That night he dreamed the tree spoke to him, and in the morning he could not lift his cutlass. The irony was that he later became the tree's greatest protector. Even now, when the wind moves through the leaves, the sound is like a soft voice giving thanks.",
    qs:[
      {q:"Write two words from the passage with a soft c.", a:"Centre, city, circle (any two)."},
      {q:"Write two words with a soft g.", a:"Giant, gentle."},
      {q:"Which sentence is a flashback?", a:"'Long ago, my grandmother told me, a young man had wanted to cut it down for timber.'"},
      {q:"Explain the irony in the story.", a:"The man who wanted to cut the tree down became its greatest protector."},
      {q:"Find an example of imagery in the last sentence.", a:"'the sound is like a soft voice giving thanks'."}
    ]
  },
  activities:["Literary device hunt in a story","Compound word building race","Rhyming poem writing","Soft/hard c and g sorting"],
  materials:["Stories, narratives and poetry","Word cards","Literary terms chart","Exercise books"],
  assessment:["Literary term test","Compound word exercise","Rhyming poem","Pronunciation check"]
},
{
  grade:5, period:"VI", sem:"Two", icon:"📋",
  title:"Summary Writing · SWBST Strategy",
  subtitle:"Summarising a text and defending a point of view",
  outcomes:["Analyse and summarise text, apply context vocabulary in writing, and present and defend points of view"],
  objectives:[
    "Analyse and summarise a text",
    "Apply context vocabulary in writing",
    "Present and defend points of view",
    "Identify main ideas and supporting details"
  ],
  note:"The <b>SWBST</b> summary strategy: <b>S</b>omebody (the character) · <b>W</b>anted (what they tried to achieve) · <b>B</b>ut (the problem) · <b>S</b>o (how it was resolved) · <b>T</b>hen (the ending).",
  study:[
    /* ---- course text: Semester Two, Period VI (guide pp. 114-115) ---- */
    {k:"h3", t:"Summary Writing"},
    {k:"p", t:"A **summary** is a short, clear account of the main points of a text, given in your own words. It carries the writer’s meaning without his length, and it carries nothing of yourself: no opinion, no example added, no part of the story rearranged."},
    {k:"bul", items:["Read the whole text first; do not write from one paragraph alone.","Say in one sentence what the text is mostly about – that is the **main idea**.","Note only what the main idea needs: the chief events, in order, and the reasons or results that the text itself gave.","Join the notes with the sequential words – first, then, but, so, finally – into three to five sentences.","Shorten: take out the adjectives that were only ornament, and the second instance of anything already proved.","Compare your summary with the text; if a reader could be misled by your version, put back what is wanted."]},
    {k:"rule"},
    {k:"h3", t:"The SWBST Strategy"},
    {k:"p", t:"**SWBST** is the frame for summarizing a narrative. Five letters, five questions, one paragraph:"},
    {k:"table", head:["Letter","It stands for","The question it answers"], rows:[
      ["S","Somebody","Who is the character, the speaker or the author?"],
      ["W","Wanted","What is that person trying to accomplish, achieve or acquire?"],
      ["B","But","What problem or conflict stood in the way?"],
      ["S","So","What did the person do about it – how was the trouble met?"],
      ["T","Then","What was the resolution – the ending or the outcome?"]
    ]},
    {k:"p", t:"Run it on a folktale: The Hare wanted the fruit; but the river was risen; so he set the tortoise to carry him across; then the tortoise left him in the middle. The five answers in one breath are the summary."},
    {k:"rule"},
    {k:"h3", t:"Main Idea and Supporting Details"},
    {k:"bul", items:["In a **non-fiction** text the topic sentence commonly opens the paragraph and the details follow; in a **narrative** the point is often carried by the ending.","Ask of every detail: does it prove, explain or illustrate the main idea? If not, it does not belong in the summary.","Give the writer’s **key words** their first place; they are the bones of the piece.","A good summary is **concise** – short without being thin."]},
    {k:"rule"},
    {k:"h3", t:"Defending a Point of View"},
    {k:"p", t:"To **defend a point of view** is to hold a position and give the reasons for it. The work is argument, and it is done with evidence, not with noise."},
    {k:"num", items:["State the position in one sentence.","Give a reason, and support it with a fact, an example or a quotation from the text.","Answer what the other side would say, and show why your ground stands still.","Close by repeating the position in other words.","Speak calmly; let the reason be the strength of the voice."]},
    {k:"bul", items:["Words of defence: because, therefore, however, for example, the text says, this shows, since, consequently.","Words that belong to the other business and should stay out: everyone knows, always, never, best, I hate.","**Sight words**: somebody, wanted, but, so, then, because, therefore, however, although, finally.","**Endings**: -ise / -ize make the verb – summarise, organise, realise, recognise; -ment the act or result – argument, statement, judgement, agreement; the root -cise (cut) gives concise, precise, exercise, decide.","**Vocabulary**: summarise, analyse, resolve, conflict, outcome, defend, argument, persuade, justify, concise."]},
    {k:"p", t:"End of Grade Five: join sentences with the right conjunction and mark them; name and use the eight devices of figurative language; read silently for the time set and aloud for the class; and give the whole of a story in five sentences with SWBST."}
  ],
  focus:["Summary writing","SWBST strategy","Main idea and supporting details","Defending a point of view"],
  words:[
    {w:"summarise", s:"sum-ma-rise", d:"to give the main points briefly", x:"Summarise the story."},
    {w:"analyse", s:"an-a-lyse", d:"to examine in detail", x:"Analyse the argument."},
    {w:"resolve", s:"re-solve", d:"to settle a problem", x:"They resolved the quarrel."},
    {w:"conflict", s:"con-flict", d:"a struggle or problem", x:"The conflict was serious."},
    {w:"outcome", s:"out-come", d:"the result", x:"What was the outcome?"},
    {w:"defend", s:"de-fend", d:"to argue in support of", x:"Defend your point of view."},
    {w:"argument", s:"ar-gu-ment", d:"reasons given to support a view", x:"State your argument."},
    {w:"persuade", s:"per-suade", d:"to make someone agree", x:"Try to persuade the class."},
    {w:"justify", s:"jus-ti-fy", d:"to give good reasons", x:"Justify your answer."},
    {w:"concise", s:"con-cise", d:"short and clear", x:"Write a concise summary."}
  ],
  sight:["somebody","wanted","but","so","then","because","therefore","however","although","finally"],
  phonics:[
    {p:"-ise/-ize", label:"verb endings", words:["summarise","organise","realise","recognise"]},
    {p:"-ment", label:"the -ment ending", words:["argument","statement","judgement","agreement"]},
    {p:"-cise", label:"the -cise root", words:["concise","precise","exercise","decide"]}
  ],
  grammar:[
    {q:"In SWBST, what does S stand for?", a:"Somebody", why:"The character."},
    {q:"In SWBST, what does W stand for?", a:"Wanted", why:"What the character wanted."},
    {q:"In SWBST, what does B stand for?", a:"But", why:"The problem or conflict."},
    {q:"In SWBST, the second S stands for ____.", a:"So", why:"How the problem is resolved."},
    {q:"In SWBST, what does T stand for?", a:"Then", why:"The ending or outcome."},
    {q:"A short, clear summary is described as ____.", a:"concise", why:"Concise = short and clear."}
  ],
  pairs:[
    {a:"conflict", b:"resolution", kind:"antonym"},
    {a:"concise", b:"lengthy", kind:"antonym"},
    {a:"summarise", b:"condense", kind:"synonym"},
    {a:"justify", b:"defend", kind:"synonym"},
    {a:"outcome", b:"result", kind:"synonym"}
  ],
  passage:{
    title:"The Contest",
    text:"Sando wanted to win the school reading contest more than anything. She practised every evening after fetching water. But on the morning of the contest her only pair of shoes broke, and she was ashamed to stand before the school. So her friend Yatta quietly lent her a pair that was one size too big. Sando walked to the front, read clearly and won first place. Then, when she was given the prize, she asked the principal to call Yatta up to share it with her.",
    qs:[
      {q:"SWBST — Somebody:", a:"Sando."},
      {q:"SWBST — Wanted:", a:"To win the school reading contest."},
      {q:"SWBST — But:", a:"Her only pair of shoes broke and she was ashamed."},
      {q:"SWBST — So:", a:"Her friend Yatta lent her a pair of shoes."},
      {q:"SWBST — Then:", a:"Sando won first place and shared the prize with Yatta."}
    ]
  },
  activities:["SWBST summary of a class reader","Write a 50-word summary","Debate: defend a point of view","Peer review of summaries"],
  materials:["Class readers","SWBST chart","Exercise books","Debate motion cards"],
  assessment:["SWBST summary","Written summary (word limit)","Debate performance","Peer assessment"]
},

/* ================= GRADE 6 ================= */
{
  grade:6, period:"I", sem:"One", icon:"🏛️",
  title:"Kinds and Types of Sentences · Pronouns · Paragraph Writing",
  subtitle:"Simple, compound and complex sentences with correct punctuation",
  outcomes:["Identify kinds and types of sentences with related punctuation, apply a variety of pronouns, and develop paragraphs with proper mechanics"],
  objectives:[
    "Identify kinds and types of sentences and apply related punctuation",
    "Apply a variety of pronouns in speech and writing",
    "Develop paragraphs employing proper mechanics"
  ],
  note:"<b>Kinds</b>: declarative, interrogative, imperative, exclamatory. <b>Types</b>: <i>simple</i> (We are eleven in our class.) · <i>compound</i> (We are eleven in our class and are all males.) · <i>complex</i> (When the cake is brown, take it out of the oven.)",
  study:[
    /* ---- course text: Semester One, Period I (guide pp. 116-118) ---- */
    {k:"h3", t:"Kinds of Sentence"},
    {k:"p", t:"By the work it does a sentence is **declarative** (it declares: We are eleven in our class.), **interrogative** (it asks: Are you eleven?), **imperative** (it orders or begs: Come here, please.), or **exclamatory** (it cries out a feeling: Great, I passed!). The end mark tells the kind: the period, the question mark, the comma of address, and the exclamation mark."},
    {k:"rule"},
    {k:"h3", t:"Types of Sentence by Structure"},
    {k:"p", t:"A **clause** is a group of words holding a subject and a verb. On the number and the standing of its clauses a sentence is typed as **simple**, **compound** or **complex**."},
    {k:"table", head:["Type","Its build","Example","The mark it needs"], rows:[
      ["Simple","one independent clause","We are eleven in our class.","none beyond the end mark"],
      ["Compound","two or more independent clauses joined by a coordinating conjunction, or split by a semicolon","We are eleven in our class, and we are all males.","comma before and, but, or, so, yet, for, nor"],
      ["Complex","one independent clause and one or more dependent clauses","When the cake is brown, take it out of the oven.","comma after a dependent clause that leads"]
    ]},
    {k:"bul", items:["A **dependent clause** has a subject and a verb but cannot stand alone; it leans on the main clause – because the rain came.","Join two independent clauses with only a comma and you have a **comma splice**: We came, we saw is wrong; say We came and we saw.","Two independent clauses may be joined by a **semicolon** with no conjunction: The bell rang; the class rose."]},
    {k:"rule"},
    {k:"h3", t:"Punctuation: the Comma, the Semicolon and the Colon"},
    {k:"table", head:["Mark","Its work","Example"], rows:[
      [".  period","ends a statement or an order","Rice is our food."],
      ["?  question mark","ends an asking sentence","Will you come?"],
      ["!  exclamation mark","ends a cry or a strong order","Look out!"],
      [",  comma","separates items in a series, follows an introductory word, and stands before a coordinating conjunction joining clauses","Rice, fish and pepper; Then, we went; I was tired, but I came."],
      [";  semicolon","joins two independent clauses that belong together, and divides a series whose parts already carry commas","The road was closed; we came by the bank."],
      [":  colon","introduces a list, an explanation or a quotation after a complete clause","Bring three things: a cutlass, a rope and a bag."],
      ["’  apostrophe","marks a contraction and shows ownership","don’t; the girl’s bag; the pupils’ books"]
    ]},
    {k:"p", t:"Rules of capital letters that go with these marks: the first word of every sentence, the pronoun **I**, proper nouns, the first word of a direct quotation, and the important words of a title."},
    {k:"rule"},
    {k:"h3", t:"Pronouns"},
    {k:"table", head:["Person","Singular","Plural"], rows:[
      ["First (the one speaking)","I, me, my, mine","we, us, our, ours"],
      ["Second (the one spoken to)","you, your, yours","you, your, yours"],
      ["Third (the one spoken of)","he, him, his; she, her, hers; it, its","they, them, their, theirs"]
    ]},
    {k:"bul", items:["A **personal pronoun** (I, you, he, she, it, we, they) stands in place of a noun and must agree with the noun it carries in number and gender.","A **possessive pronoun** (mine, yours, hers, ours, theirs, its) shows ownership and needs no noun after it: “the bag is **theirs**”. A **possessive adjective** (my, your, her, our, their) always stands before the noun: their bag.","Never write an apostrophe in its, yours, theirs, ours, hers; it’s and who’s alone are contractions.","A pronoun must have a clear **antecedent** – the word it answers. In Kou told Musa that his father had come, say plainly whose father, or name the person again."]},
    {k:"rule"},
    {k:"h3", t:"Paragraph Development and Transitional Words"},
    {k:"p", t:"A developed paragraph holds **one idea**, names it in the **topic sentence**, and then works it out with **details**, an **example** and a closing sentence. The sentences are welded together by **transitional words**, which tell the reader how the next thought stands to the last."},
    {k:"table", head:["Relation","Transitional words and phrases"], rows:[
      ["Adding","also, furthermore, moreover, in addition, besides"],
      ["Comparing","similarly, likewise, in the same way, just as"],
      ["Contrasting","however, nevertheless, on the other hand, yet, although"],
      ["Cause and result","because, for this reason, therefore, consequently, so, thus, hence"],
      ["Time and order","first, next, then, meanwhile, finally, subsequently, later"],
      ["Illustration","for example, for instance, such as, as a matter of fact"],
      ["Concluding","in short, finally, to sum up, in conclusion"]
    ]},
    {k:"p", t:"**Endings and prefixes of the period**: -ple (simple, people, example, principle, couple); com- / con- meaning with, together (compound, complex, conclusion, connect, continue); the shun endings -tion / -sion (transition, conclusion, attention, decision). **Sight words**: not only … but also, as a matter of fact, similarly, yet, for this reason, consequently, next, subsequently, therefore. **Vocabulary**: simple, compound, complex, clause, pronoun, possessive, semicolon, colon, transition, mechanics."},
    {k:"bul", items:["Write a paragraph on Our School of eight sentences in which each pair of sentences is joined by a different transitional word.","Rewrite three simple sentences into one compound and one complex sentence, marking the comma and the semicolon where the rule demands them."]}
  ],
  focus:["Kinds of sentences","Types: simple, compound, complex","Punctuation (. ? : ; ! ,)","Personal and possessive pronouns","Paragraph development","Transitional words"],
  words:[
    {w:"simple", s:"sim-ple", d:"having one main clause", x:"'Birds fly' is a simple sentence."},
    {w:"compound", s:"com-pound", d:"two main clauses joined", x:"A compound sentence uses 'and'."},
    {w:"complex", s:"com-plex", d:"a main clause plus a dependent clause", x:"A complex sentence uses 'when'."},
    {w:"clause", s:"clause", d:"a group of words with a subject and verb", x:"Find the main clause."},
    {w:"pronoun", s:"pro-noun", d:"a word used in place of a noun", x:"'She' is a pronoun."},
    {w:"possessive", s:"pos-ses-sive", d:"showing ownership", x:"'Theirs' is possessive."},
    {w:"semicolon", s:"sem-i-co-lon", d:"the mark ;", x:"Use a semicolon here."},
    {w:"colon", s:"co-lon", d:"the mark :", x:"A colon introduces a list."},
    {w:"transition", s:"tran-si-tion", d:"a word linking ideas", x:"'However' is a transition."},
    {w:"mechanics", s:"me-chan-ics", d:"the rules of written English", x:"Check your mechanics."}
  ],
  sight:["not only","but also","as a matter of fact","similarly","yet","for this reason","consequently","next","subsequently","therefore"],
  phonics:[
    {p:"-ple", label:"the -ple ending", words:["simple","people","example","principle","couple"]},
    {p:"com-/con-", label:"prefix com/con", words:["compound","complex","conclusion","connect","continue"]},
    {p:"-tion/-sion", label:"shun endings", words:["transition","conclusion","attention","decision"]}
  ],
  grammar:[
    {q:"Type of sentence: We are eleven in our class.", a:"simple", why:"One main clause."},
    {q:"Type of sentence: We are eleven in our class and are all males.", a:"compound", why:"Two clauses joined by 'and'."},
    {q:"Type of sentence: When the cake is brown, take it out of the oven.", a:"complex", why:"Has a dependent clause beginning with 'when'."},
    {q:"Kind of sentence: Come here please.", a:"imperative", why:"It is a request or command."},
    {q:"Kind of sentence: Great, I passed!", a:"exclamatory", why:"Shows strong feeling."},
    {q:"Give the possessive pronoun for 'belonging to them':", a:"theirs", why:"Theirs shows their ownership."},
    {q:"Give the possessive pronoun for 'belonging to us':", a:"ours", why:"Ours shows our ownership."},
    {q:"Which punctuation introduces a list?", a:"a colon", why:"A colon (:) introduces lists."}
  ],
  pairs:[
    {a:"my", b:"mine", kind:"possessive"},
    {a:"your", b:"yours", kind:"possessive"},
    {a:"his", b:"his", kind:"possessive"},
    {a:"her", b:"hers", kind:"possessive"},
    {a:"our", b:"ours", kind:"possessive"},
    {a:"their", b:"theirs", kind:"possessive"}
  ],
  passage:{
    title:"Our Class",
    text:"We are thirty-two in our class. Twenty are girls, and twelve are boys. When the bell rings at eight, we stand for the pledge. Our classroom is small; nevertheless, it is always clean. The desks are ours to care for, and each pupil is responsible for one. Have you ever seen a class sweep so quickly? What a team we are! Consequently, our room won the cleanliness prize for this term.",
    qs:[
      {q:"Find one simple sentence.", a:"e.g. 'We are thirty-two in our class.'"},
      {q:"Find one compound sentence.", a:"e.g. 'Twenty are girls, and twelve are boys.'"},
      {q:"Find one complex sentence.", a:"'When the bell rings at eight, we stand for the pledge.'"},
      {q:"Find the interrogative sentence.", a:"'Have you ever seen a class sweep so quickly?'"},
      {q:"Write two transitional words used in the passage.", a:"Nevertheless, consequently."}
    ]
  },
  activities:["Sort sentences by kind and by type","Punctuation drill with ; and :","Pronoun substitution exercise","Write a paragraph with three transitional words"],
  materials:["Grammar and Composition Book 6","Sentence strips","Punctuation charts","Exercise books"],
  assessment:["Sentence type test","Punctuation exercise","Pronoun exercise","Written paragraph"]
},
{
  grade:6, period:"II", sem:"One", icon:"⚖️",
  title:"Subject–Verb Agreement · Verbs · Paragraphs · Phonics",
  subtitle:"Advanced agreement and paragraph construction",
  outcomes:["Demonstrate effective writing skills using appropriate subject–verb agreement and words with short and long vowel sounds"],
  objectives:[
    "Apply subject–verb agreement in complex sentences",
    "Use verbs correctly in sentences",
    "Construct paragraphs of different types",
    "Apply short and long vowel sounds"
  ],
  note:"Tricky agreement: with <i>each, every, everyone, nobody</i> the verb is <b>singular</b> (Everyone <b>is</b> here). With <i>either/or</i> and <i>neither/nor</i>, the verb agrees with the <b>nearer</b> subject.",
  study:[
    /* ---- course text: Semester One, Period II (guide pp. 119-121) ---- */
    {k:"h3", t:"Subject–Verb Agreement"},
    {k:"p", t:"The verb must answer to its subject in **number** and **person**: a singular subject takes a singular verb, a plural subject a plural verb. Grade Six carries the rule past the first form into the cases that trip the writer."},
    {k:"table", head:["Case","The rule","Right form"], rows:[
      ["A collective noun – team, class, family, committee, army","one unit: singular verb; acting in pieces: plural","The team plays well today. / The team are quarrelling among themselves."],
      ["Indefinite pronouns – each, every, everyone, nobody, either, neither, one","singular in sense, so singular in form","Everyone is present today. Each of the pupils brings a book."],
      ["Both, several, few, many, all","plural","Both of the girls are clever. Several were absent."],
      ["or / nor / either … or / neither … nor","the verb agrees with the subject NEAREST to it","Neither the boys nor the girl has arrived. Neither the girl nor the boys have arrived."],
      ["A subject with words between it and the verb – of the items, along with his brother","look past the middle words to the true subject","The list of items is long. / The list of items is not are."],
      ["Two subjects joined by and","plural, unless they name one thing","Kou and Musa are friends. Bread and butter is my breakfast."]
    ]},
    {k:"bul", items:["Correct the error by finding the subject first: Nobody know the answer → **Nobody knows the answer**; The list of items are long → **The list of items is long**.","Do not put was for were with you: **you were**, always.","After did, does, was, were the verb stays in the base form: “She did not **go**”, not went."]},
    {k:"rule"},
    {k:"h3", t:"Use of Verb Tenses in Writing"},
    {k:"p", t:"Keep one tense through a paragraph unless the time of the action itself changes. A story told in the past stays in the past; a direct quotation keeps the tense the speaker used; and a general truth that still holds may pass into the present – “He said that rice **is** our food”."},
    {k:"rule"},
    {k:"h3", t:"Types of Paragraph"},
    {k:"table", head:["Type","Its work","How it begins and moves"], rows:[
      ["Narrative","tells what happened","in time order, with the events following one another"],
      ["Descriptive","paints a person, place or thing","from the general impression to the particular details"],
      ["Expository","explains or informs","with the main point first, then reasons and facts"],
      ["Persuasive","moves the reader to agree and to act","with the position, the reasons, and the call at the end"]
    ]},
    {k:"bul", items:["**Unity**: one paragraph, one idea, and the topic sentence that names it.","**Coherence**: the sentences hold hands through the transitional words and the same subjects carried forward.","**Adequate development**: the idea is proved, illustrated or explained; nothing is left only announced.","**Emphasis**: put the point you would have remembered where the reader will feel it most – the beginning or the end."]},
    {k:"rule"},
    {k:"h3", t:"The Elements of a Story"},
    {k:"bul", items:["**Central idea** – what the story or event is about at bottom; the thing the whole account is built to carry.","**Characters** – who the story is about, and what each of them is.","**Plot** – the going-on of the story in its four working parts: the **conflict** (the trouble met), the **complication** (the trouble made harder), the **climax** (the turn where all is staked), and the **resolution** (the settling).","**Adequate description** – the details that make the scene and the people real enough to be seen.","**Setting** – when and where the story happens, with the place doing its part in the action.","**Theme** – the lesson or the deep meaning the story leaves with the reader."]},
    {k:"p", t:"Read a story and set out its plot in the four parts; then say which single sentence carries the central idea. **Sounds of the period**: short vowels bat, bed, bit, box, bud against long vowels bait, bead, bite, boat, boot; the -ive ending that names the kinds of writing – narrative, descriptive, persuasive, expressive. **Sight words**: each, every, everyone, nobody, either, neither, both, several, few, all. **Vocabulary**: agreement, collective, indefinite, narrative, descriptive, expository, persuasive, coherent, unity, emphasis."},
    {k:"bul", items:["Write one paragraph of each type on the same subject – Our Market – and be ready to say which type you wrote and why.","Take ten faulty agreement sentences from your own writing of last term and correct them with the rule written beside each."]}
  ],
  focus:["Subject–verb agreement","Collective nouns","Indefinite pronouns","Paragraph types","Short and long vowels"],
  words:[
    {w:"agreement", s:"a-gree-ment", d:"matching of subject and verb", x:"Check the agreement."},
    {w:"collective", s:"col-lec-tive", d:"naming a group", x:"'Team' is a collective noun."},
    {w:"indefinite", s:"in-def-i-nite", d:"not specific", x:"'Everyone' is indefinite."},
    {w:"narrative", s:"nar-ra-tive", d:"a paragraph that tells a story", x:"Write a narrative paragraph."},
    {w:"descriptive", s:"de-scrip-tive", d:"a paragraph that describes", x:"This is descriptive writing."},
    {w:"expository", s:"ex-pos-i-to-ry", d:"a paragraph that explains", x:"Expository writing explains."},
    {w:"persuasive", s:"per-sua-sive", d:"a paragraph that convinces", x:"Write a persuasive paragraph."},
    {w:"coherent", s:"co-her-ent", d:"clear and logically connected", x:"Make your writing coherent."},
    {w:"unity", s:"u-ni-ty", d:"all sentences on one idea", x:"A paragraph needs unity."},
    {w:"emphasis", s:"em-pha-sis", d:"special importance given", x:"Place emphasis on the main idea."}
  ],
  sight:["each","every","everyone","nobody","either","neither","both","several","few","all"],
  phonics:[
    {p:"short vowels", label:"short vowel sounds", words:["bat","bed","bit","box","bud"]},
    {p:"long vowels", label:"long vowel sounds", words:["bait","bead","bite","boat","boot"]},
    {p:"-ive", label:"the -ive ending", words:["narrative","descriptive","persuasive","expressive"]}
  ],
  grammar:[
    {q:"Everyone ____ (be) present today.", a:"is", why:"Everyone is singular."},
    {q:"Neither the boys nor the girl ____ (have) arrived.", a:"has", why:"Agrees with the nearer subject 'girl'."},
    {q:"Neither the girl nor the boys ____ (have) arrived.", a:"have", why:"Agrees with the nearer subject 'boys'."},
    {q:"The team ____ (play) well today.", a:"plays", why:"Team acts as one unit: singular."},
    {q:"Each of the pupils ____ (bring) a book.", a:"brings", why:"'Each' is singular."},
    {q:"Both of the girls ____ (be) clever.", a:"are", why:"Both is plural."},
    {q:"Correct: Nobody know the answer.", a:"Nobody knows the answer.", why:"Nobody is singular."},
    {q:"Correct: The list of items are long.", a:"The list of items is long.", why:"The subject is 'list', which is singular."}
  ],
  pairs:[
    {a:"narrative", b:"expository", kind:"related"},
    {a:"coherent", b:"confused", kind:"antonym"},
    {a:"unity", b:"division", kind:"antonym"},
    {a:"emphasis", b:"stress", kind:"synonym"},
    {a:"persuasive", b:"convincing", kind:"synonym"}
  ],
  passage:{
    title:"The School Garden",
    text:"Everyone in Grade Six is proud of the school garden. Each pupil has a small plot, and each plot produces something different. Neither the rains nor the dry season stops the work. The team of gardeners meets every Friday; nobody is excused. The list of crops is long: pepper, okra, cassava and greens. Both the teachers and the principal say the garden teaches more than any lesson can. Consequently, other schools have come to see it.",
    qs:[
      {q:"Why is it 'Everyone ... is' and not 'are'?", a:"Because 'everyone' is an indefinite pronoun and takes a singular verb."},
      {q:"Why is it 'The list of crops is long'?", a:"Because the subject is 'list' (singular), not 'crops'."},
      {q:"Why is it 'Both the teachers and the principal say'?", a:"Because 'both ... and' makes a plural subject."},
      {q:"Find the punctuation mark that introduces the list of crops.", a:"A colon (:)."},
      {q:"Which transitional word begins the last sentence?", a:"Consequently."}
    ]
  },
  activities:["Agreement correction race","Write one paragraph of each type","Vowel sound sorting","Peer editing for agreement errors"],
  materials:["Grammar and Composition Book 6","Agreement charts","Exercise books","Worksheets"],
  assessment:["Agreement test","Four paragraph types submitted","Editing exercise","Quiz"]
},
{
  grade:6, period:"III", sem:"One", icon:"🖋️",
  title:"Writing and Speaking · Letters, Poems and Public Speaking",
  subtitle:"Friendly and business letters, poetry and speech making",
  outcomes:["Compose different kinds of letters, analyse and write poems using literary devices, and demonstrate public speaking skills"],
  objectives:[
    "Demonstrate the ability to compose different kinds of letters",
    "Analyse and write poems using literary devices and figurative language",
    "Demonstrate public speaking skills"
  ],
  note:"A <b>friendly letter</b> has five parts and ends 'Your friend,'. A <b>business letter</b> adds the receiver's address inside, uses formal language and ends 'Yours faithfully,' (or 'Yours sincerely,' if you named the person).",
  study:[
    /* ---- course text: Semester One, Period III (guide pp. 122-123) ---- */
    {k:"h3", t:"Kinds of Letter"},
    {k:"p", t:"A **friendly letter** passes between people who know one another; it is informal, and it may tell anything that the writer and the reader share. A **business letter** is written to a firm, an office or an official on matters of work; it is **formal** – direct, polite, and kept to the one business in hand."},
    {k:"table", head:["Feature","Friendly letter","Business letter"], rows:[
      ["Heading","address and date, upper right","sender’s address, date, and inside address of the firm"],
      ["Greeting","Dear Musa,","Dear Sir, or Dear Mr. Dweh,"],
      ["Body","free, may run over several matters","one business, stated at once and explained in order"],
      ["Closing","Your friend, / Yours sincerely,","Yours faithfully, after Dear Sir; Yours sincerely, after a name"],
      ["After the signature","none","the writer’s full name and position, and any enclosures noted"],
      ["Language","everyday words, questions, feelings","no slang, no contraction, short civil sentences"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Parts of a Letter"},
    {k:"num", items:["The **heading** – the address of the writer and the date.","The **salutation** (the greeting) – Dear Sir, / Dear Kou,.","The **body** – the message, one subject to a paragraph.","The **complimentary closing** – Yours faithfully, / Yours sincerely,.","The **signature** – the name written, with the full name and position typed under it in business.","Add the **inside address**, the **subject line**, and Dear Sir in the letter of application, and note any paper **enclosed** with Encl: ….","Observe the **margin**: a blank edge on the left of the paper, a few spaces in at the beginning of each paragraph."]},
    {k:"p", t:"A **letter of application** states the post wanted, the reason the writer is fit for it, and the papers enclosed; it closes with a civil request for an answer and nothing else."},
    {k:"rule"},
    {k:"h3", t:"Writing Poetry"},
    {k:"bul", items:["A poem is built in **lines** and **stanzas**; its **rhythm** is the beat of the strong and weak syllables, and its **rhyme** the like ending of the lines.","Plan the **rhyme scheme** before writing – a a b b or a b a b – and mark the words that must answer one another.","**Imagery**: give the senses something – the sound of the wheels, the smell of the rain, the weight of the bucket; a poem that only tells is an essay that has lost its way.","**Figurative language** is language that appeals to the senses beyond the plain sense: simile, metaphor, personification.","Say the **theme** first – the one feeling or thought the poem is built to carry; every line must serve it.","Read the draft aloud twice: the ear finds the line that halts before the eye does."]},
    {k:"rule"},
    {k:"h3", t:"Public Speaking"},
    {k:"num", items:["Choose a subject within the time and fit for the audience.","Write the plan: opening sentence, two or three points, closing sentence.","Prepare the opening so that it is said perfectly, and the ending so that it is not run away from.","Stand: heels near together, chin up, hands free, eyes on the audience.","Voice: loud enough for the last bench, slow enough for the slowest hearer, with the pause at the end of each point.","Speak from the notes, not out of them; a card of three words will hold the plan.","Invite questions, and answer one at a time, in a full sentence.","Close with the point you came to carry; the audience should leave able to repeat it."]},
    {k:"bul", items:["**Audience manners**: listen, keep quiet, applaud at the end, and ask one question worth the asking.","**Endings**: -tion – application, salutation, information, invitation; -ent / -ant name the person – recipient, applicant, assistant, president; and the tricky spellings rh and th – rhythm, rhyme, theme, author, rhetoric, where the h is silent or the rh is only history.","**Sight words**: sincerely, faithfully, regarding, enclosed, furthermore, respectfully, hereby, kindly, attached, request.","**Vocabulary**: formal, informal, application, recipient, salutation, stanza, verse, rhythm, audience, posture."]},
    {k:"p", t:"Write a business letter to the head of your school asking for a class library, then a friendly letter to a cousin in another county telling what your class has begun; keep both, for the next term will ask you to compare the two manners."}
  ],
  focus:["Friendly letters","Business letters","Parts of a letter","Poetry writing","Public speaking"],
  words:[
    {w:"formal", s:"for-mal", d:"following official rules", x:"Use formal language."},
    {w:"informal", s:"in-for-mal", d:"relaxed and friendly", x:"An informal letter to a friend."},
    {w:"application", s:"ap-pli-ca-tion", d:"a formal written request", x:"Write an application letter."},
    {w:"recipient", s:"re-cip-i-ent", d:"the person who receives", x:"Address the recipient."},
    {w:"salutation", s:"sal-u-ta-tion", d:"the greeting in a letter", x:"'Dear Sir' is a salutation."},
    {w:"stanza", s:"stan-za", d:"a group of lines in a poem", x:"The poem has four stanzas."},
    {w:"verse", s:"verse", d:"a line or group of lines of poetry", x:"Read the first verse."},
    {w:"rhythm", s:"rhythm", d:"the beat of a poem", x:"The rhythm is fast."},
    {w:"audience", s:"au-di-ence", d:"those listening", x:"Address the audience clearly."},
    {w:"posture", s:"pos-ture", d:"how you hold your body", x:"Keep good posture when speaking."}
  ],
  sight:["sincerely","faithfully","regarding","enclosed","furthermore","respectfully","hereby","kindly","attached","request"],
  phonics:[
    {p:"-tion", label:"the -tion ending", words:["application","salutation","information","invitation"]},
    {p:"-ent/-ant", label:"person endings", words:["recipient","applicant","assistant","president"]},
    {p:"rh / th", label:"tricky spellings", words:["rhythm","rhyme","theme","author","rhetoric"]}
  ],
  grammar:[
    {q:"A letter to a friend is a ____ letter.", a:"friendly", why:"Informal letters to friends."},
    {q:"A letter to a company is a ____ letter.", a:"business", why:"Formal letters for official matters."},
    {q:"A business letter to 'Dear Sir' ends with 'Yours ____,'", a:"faithfully", why:"Unnamed recipient takes 'faithfully'."},
    {q:"A business letter to 'Dear Mr. Dweh' ends with 'Yours ____,'", a:"sincerely", why:"Named recipient takes 'sincerely'."},
    {q:"A group of lines in a poem is a ____.", a:"stanza", why:"Definition of a stanza."},
    {q:"The greeting in a letter is called the ____.", a:"salutation", why:"Definition."}
  ],
  pairs:[
    {a:"formal", b:"informal", kind:"antonym"},
    {a:"sender", b:"recipient", kind:"antonym"},
    {a:"salutation", b:"greeting", kind:"synonym"},
    {a:"stanza", b:"verse", kind:"synonym"},
    {a:"speech", b:"address", kind:"synonym"}
  ],
  passage:{
    title:"A Business Letter",
    text:"P.O. Box 1420\nMonrovia\n3 June 2026\n\nThe Manager\nLiberia Book Supply\nBroad Street, Monrovia\n\nDear Sir,\n\nAPPLICATION FOR SCHOOL TEXTBOOKS\n\nI am writing on behalf of the Grade Six class of Saint Peter's School. We wish to purchase forty copies of Grammar and Composition Book 6. Kindly inform us of the price per copy and whether a discount is available for schools.\n\nWe should be grateful for an early reply.\n\nYours faithfully,\nJ. Kollie\nClass Prefect",
    qs:[
      {q:"Is this a friendly or a business letter? Give one reason.", a:"A business letter — it is formal, has the receiver's address inside and ends 'Yours faithfully'."},
      {q:"What is the salutation?", a:"Dear Sir,"},
      {q:"Why does it end 'Yours faithfully' and not 'Yours sincerely'?", a:"Because the writer did not address the manager by name."},
      {q:"What is the writer requesting?", a:"The price per copy of forty textbooks and whether schools get a discount."},
      {q:"What is the purpose of the line in capital letters?", a:"It is the subject heading, showing what the letter is about."}
    ]
  },
  activities:["Write a friendly and a business letter","Analyse a poem for devices","Write an original poem","Deliver a two-minute speech"],
  materials:["Model letters","Poetry anthology","Writing paper","Speech rubric"],
  assessment:["Two letters submitted","Poem analysis","Original poem","Public speaking rubric"]
},
{
  grade:6, period:"IV", sem:"Two", icon:"📈",
  title:"Verb Tenses · Comparison of Adverbs · Reading and Writing",
  subtitle:"All tenses and the degrees of adverbs",
  outcomes:["Identify verb tenses, compare adverbs using comparative and superlative degrees, and analyse texts"],
  objectives:[
    "Identify verb tenses",
    "Compare adverbs using the comparative and superlative degrees",
    "Analyse texts, newspapers and magazines"
  ],
  note:"Adverbs compare like adjectives: <i>fast, faster, fastest</i>. Adverbs ending in <b>-ly</b> use <i>more</i> and <i>most</i>: <i>quickly, more quickly, most quickly</i>. Irregular: <i>well, better, best</i>; <i>badly, worse, worst</i>.",
  study:[
    /* ---- course text: Semester Two, Period IV (guide pp. 124-125) ---- */
    {k:"h3", t:"The Twelve Tenses in Their Work"},
    {k:"p", t:"**Tense** is the form of the verb that tells when the action is, and whether it is complete. The three times – present, past, future – are each taken in three aspects – **simple**, **continuous** (going on) and **perfect** (finished before another point) – and with the future a fourth, the future perfect, completes the table."},
    {k:"table", head:["Time","Simple","Continuous (be + -ing)","Perfect (have + past participle)"], rows:[
      ["Present","She walks to school.","She is walking to school.","She has walked to school."],
      ["Past","She walked to school.","She was walking to school.","She had walked to school."],
      ["Future","She will walk to school.","She will be walking to school.","She will have walked to school."]
    ]},
    {k:"bul", items:["The **simple** tense states the fact or the occurrence.","The **continuous** tense takes the action in the middle of its going on.","The **perfect** tense joins a finished action to a later point: **present perfect** to now (has walked), **past perfect** to a past moment (had walked before the bell rang), **future perfect** to a time still coming (will have walked by eight).","Words that go with the perfect tenses: already, just, yet, ever, never, since, for, recently, lately, still.","Never put two marks of past on one verb: after did, was, were, the verb keeps the base form."]},
    {k:"rule"},
    {k:"h3", t:"Comparing with Adverbs"},
    {k:"p", t:"An **adverb** tells how, when, where or to what degree an action is done. Like adjectives, adverbs are compared in three degrees: **positive**, **comparative** (two) and **superlative** (three or more)."},
    {k:"table", head:["Positive","Comparative","Superlative","Rule"], rows:[
      ["fast, slow, late","faster, slower, later","fastest, slowest, latest","one-syllable adverbs take -er, -est"],
      ["quickly, carefully, loudly","more quickly, more carefully, more loudly","most quickly, most carefully, most loudly","adverbs in -ly take more, most"],
      ["well, badly, much, little","better, worse, more, less","best, worst, most, least","irregular – learned as they come"],
      ["early","earlier, earliest","–","change the y to i before -er, -est"]
    ]},
    {k:"bul", items:["Do not put an -er on a word already carrying more: more faster is wrong.","The comparative is followed by **than**; the superlative by **of** or **in**: she runs faster than Korto; he is the most careful of the three.","Adverbs of manner answer how? and must not be mistaken for adjectives: she sings beautifully (adverb) against a beautiful song (adjective)."]},
    {k:"rule"},
    {k:"h3", t:"Analysing Texts, Newspapers and Magazines"},
    {k:"num", items:["Name the kind of text – news report, feature, editorial, letter to the editor, advertisement or article.","Read the **headline** and predict what the piece will carry, then read to test the prediction.","Find in a news report the five W and the H: who, what, when, where, why, how; the first paragraph holds them.","Say the writer’s purpose: to inform, to persuade, to entertain or to advertise; the advertisement and the editorial will not hide it.","Mark the **fact** (it can be proved) from the **opinion** (a judgement): the road is 40 km against the road is the best in the county.","Ask what the text leaves out, and what other source would be needed before the account is believed.","In a magazine, read the heading, the sub-headings, the captions and the last paragraph before the middle; then say the theme in a sentence."]},
    {k:"bul", items:["**Newspaper words**: headline, editorial, correspondent, journalist, column, issue, edition – the journalist is the writer, from the French jour for day.","**Endings**: -ly makes the adverb (quickly, slowly, carefully, loudly, neatly); -ous the quality (continuous, dangerous, previous, obvious); -ist the person (journalist, scientist, artist, dentist).","**Sight words**: already, yet, since, for, just, never, ever, recently, lately, still.","**Vocabulary**: tense, continuous, perfect, adverb, comparative, superlative, analyse, editorial, headline, journalist."]},
    {k:"p", t:"Take one page from a real newspaper: give the tense of the first sentence of three reports, name one fact and one opinion in each, and say in two sentences what the page as a whole was written to do."}
  ],
  focus:["Verb tenses (simple, continuous, perfect)","Comparison of adverbs","Text analysis","Newspapers and magazines"],
  words:[
    {w:"tense", s:"tense", d:"the time of a verb", x:"Name the tense."},
    {w:"continuous", s:"con-tin-u-ous", d:"an action going on", x:"'Is walking' is continuous."},
    {w:"perfect", s:"per-fect", d:"a completed action", x:"'Has walked' is perfect tense."},
    {w:"adverb", s:"ad-verb", d:"a word describing a verb", x:"'Quickly' is an adverb."},
    {w:"comparative", s:"com-par-a-tive", d:"comparing two things", x:"'Faster' is comparative."},
    {w:"superlative", s:"su-per-la-tive", d:"comparing three or more", x:"'Fastest' is superlative."},
    {w:"analyse", s:"an-a-lyse", d:"to examine closely", x:"Analyse the article."},
    {w:"editorial", s:"ed-i-to-ri-al", d:"an opinion article in a paper", x:"Read the editorial."},
    {w:"headline", s:"head-line", d:"the title of a news story", x:"The headline was bold."},
    {w:"journalist", s:"jour-nal-ist", d:"a person who writes news", x:"The journalist asked questions."}
  ],
  sight:["already","yet","since","for","just","never","ever","recently","lately","still"],
  phonics:[
    {p:"-ly", label:"adverb ending", words:["quickly","slowly","carefully","loudly","neatly"]},
    {p:"-ous", label:"the -ous ending", words:["continuous","dangerous","previous","obvious"]},
    {p:"-ist", label:"person ending", words:["journalist","scientist","artist","dentist"]}
  ],
  grammar:[
    {q:"Name the tense: She walks to school.", a:"simple present", why:"A regular action now."},
    {q:"Name the tense: She is walking to school.", a:"present continuous", why:"Action happening now."},
    {q:"Name the tense: She has walked to school.", a:"present perfect", why:"Completed, with present relevance."},
    {q:"Name the tense: She walked to school.", a:"simple past", why:"Completed in the past."},
    {q:"Name the tense: She will walk to school.", a:"simple future", why:"Will + verb."},
    {q:"Comparative of 'fast' (adverb):", a:"faster", why:"Short adverbs add -er."},
    {q:"Superlative of 'quickly':", a:"most quickly", why:"-ly adverbs use 'most'."},
    {q:"Comparative of 'well':", a:"better", why:"Irregular: well, better, best."},
    {q:"Superlative of 'badly':", a:"worst", why:"Irregular: badly, worse, worst."}
  ],
  pairs:[
    {a:"well", b:"better", kind:"comparison"},
    {a:"badly", b:"worse", kind:"comparison"},
    {a:"fast", b:"faster", kind:"comparison"},
    {a:"much", b:"more", kind:"comparison"},
    {a:"little", b:"less", kind:"comparison"}
  ],
  passage:{
    title:"The Newspaper Report",
    text:"MONROVIA — Farmers in Bong County have harvested more rice this season than in any of the past five years. The Ministry of Agriculture says the crop has grown steadily since the new seed programme began. \"We are working more carefully now,\" said one farmer, who has farmed the same land for twenty years. Traders are already travelling to the county, and prices in the capital have fallen slightly. Officials warn, however, that the roads must be repaired quickly, or the harvest will spoil before it reaches the market.",
    qs:[
      {q:"Write the tense: 'have harvested'.", a:"Present perfect."},
      {q:"Write the tense: 'are travelling'.", a:"Present continuous."},
      {q:"Write the tense: 'will spoil'.", a:"Simple future."},
      {q:"Find a comparative adverb phrase in the farmer's words.", a:"'more carefully'."},
      {q:"What do officials warn about?", a:"That the roads must be repaired quickly or the harvest will spoil before reaching the market."}
    ]
  },
  activities:["Tense identification in a newspaper article","Adverb comparison chart","Write a short news report","Analyse a headline and editorial"],
  materials:["Newspapers and magazines","Grammar and Composition Book 6","Tense charts","Exercise books"],
  assessment:["Tense identification test","Adverb comparison exercise","Written news report","Text analysis"]
},
{
  grade:6, period:"V", sem:"Two", icon:"🔬",
  title:"English and Reading · Text Analysis and Research",
  subtitle:"Author's perspective, theme, style and tone; conducting research",
  outcomes:["Analyse texts, conduct research, and conduct interviews and field visits"],
  objectives:[
    "Analyse texts on varying topics",
    "Identify author's perspective, theme, style and tone",
    "Research a topic and gather corroborating evidence",
    "Conduct interviews and field visits"
  ],
  note:"<b>Theme</b> is the central message of a text. <b>Tone</b> is the writer's attitude (serious, angry, hopeful). <b>Style</b> is how the writer writes. <b>Perspective</b> is the writer's point of view. Good research needs <b>corroborating evidence</b> — more than one source agreeing.",
  study:[
    /* ---- course text: Semester Two, Period V (guide pp. 126-127) ---- */
    {k:"h3", t:"Analysing a Text"},
    {k:"p", t:"To **analyse** a text is to take it to pieces on the table and see how it was built and where its weight lies. The analyst asks, in order, these questions of any passage."},
    {k:"table", head:["Thing to find","The question","What it is called"], rows:[
      ["Theme","What is the central message the text is carrying?","theme"],
      ["Author’s perspective","Where does the writer stand, and what does he assume?","perspective, point of view"],
      ["Style","How is it written – the length of the sentences, the words chosen, the figures used?","style"],
      ["Tone","What is the writer’s attitude to his subject – grave, angry, jesting, sorrowful, admiring?","tone"],
      ["Audience","For whom was it written, and how can you tell?","intended reader"]
    ]},
    {k:"bul", items:["**Theme** is not the subject; the subject is war, the theme is what the text says about war.","**Perspective** is seen in what the writer selects and what he leaves out, in the names he gives and in the pronouns he uses.","**Tone** is carried chiefly by the choice of words: the crowd gathered and the mob gathered describe the same act in different voices.","Say the tone in one adjective and quote the two words that prove it."]},
    {k:"rule"},
    {k:"h3", t:"Research"},
    {k:"p", t:"**Research** is the gathering of information on a question, worked over until it gives up a conclusion. It is done in five movements, and every part of it must be honest to be worth anything."},
    {k:"num", items:["State the **question** and the thing you hope to find out.","Gather the **information** – books, the library, records, people who know, and your own observation; write the source with every note.","Establish the **facts**: a fact is a statement that can be proved; keep it in your own words and set down where it came from.","**Corroborate** – confirm each important fact with a second, independent source; one source alone is a claim, not a proof.","Weigh the sources: is the writer able to know, and willing to tell? A **reliable** source can be trusted.","Draw the **conclusion** the facts will carry, and say plainly what they do not settle."]},
    {k:"bul", items:["**Primary evidence** comes from the eye of someone present; **secondary** comes from a writer working on what others left.","Where the two conflict, the fact that is corroborated outweighs the fact that is only told.","Cite as you write, not after: the reader must be able to reach your source again.","Distinguish estimate, approximately, about, more than from the exact figure – an estimate is not a fact, though it may be a fair one."]},
    {k:"rule"},
    {k:"h3", t:"Interviews and Field Visits"},
    {k:"p", t:"An **interview** is a meeting at which questions are put to a person to draw out what he or she knows. A **field visit** is a journey to the place where the thing is, to observe at first hand."},
    {k:"num", items:["Fix the purpose of the visit or the interview in one sentence.","Prepare the questions in writing, in the order that will be asked; put the easy ones first.","Ask leave and time at the beginning, and thank for it at the end.","Take notes while the person speaks; ask leave before you write.","Listen to the answer – the follow-up question lives inside it.","Verify the account by one other source, and note any thing you could not prove.","Report to the class: the question, what was found, what was proved twice, and what remains in doubt."]},
    {k:"p", t:"Our county’s institutions give the field: the hospital, the **orphanage**, the health centre, the market, the water works, the prison and the farm school. Visit as learners of language, not as visitors: your business is to record speech, observe and ask."},
    {k:"rule"},
    {k:"h3", t:"Vulnerable People"},
    {k:"p", t:"**Vulnerable people** are those whose position makes harm easy to reach them: persons directly or indirectly affected by war, disaster or sickness; the unattached child; the old with no one; the wounded; the family who have lost their farm or their trade; the mother with a sick child and no money for the journey."},
    {k:"bul", items:["Write of them with **respect**: name the person as a person, never as a case, and never invent what was not seen.","Say who is **directly** affected (the one who suffered) and who **indirectly** (the one carrying the weight after).","A report is not a pity show: state the fact, the need, and what is being done, with the source of each.","The purpose of the writing decides its form – a **report** to inform, a **letter to the editor** to move the town, a **speech** to gather help."]},
    {k:"p", t:"**Roots and endings of this period**: the root -spect (look) – perspective, inspect, respect, spectator, prospect; -able / -ible (fit to be, capable) – reliable, reasonable, possible, responsible; the prefix re- (back, again) – research, reveal, report, review, record. **Sight words**: according, evidence, source, claim, suggest, indicate, reveal, confirm, estimate, approximately. **Vocabulary**: perspective, theme, tone, style, research, corroborate, source, interview, survey, reliable."},
    {k:"bul", items:["Interview one person in the community on a question the class has set; bring back the notes, the two corroborated facts, and the one point that is still disputed.","Write the account of the interview as a page of report, and say in one sentence at the head of it the tone you judged the writer of your own page to be carrying."]}
  ],
  focus:["Text analysis","Author's perspective","Theme, style, tone","Research skills","Interviews and field visits"],
  words:[
    {w:"perspective", s:"per-spec-tive", d:"a point of view", x:"Consider the author's perspective."},
    {w:"theme", s:"theme", d:"the central message", x:"The theme is courage."},
    {w:"tone", s:"tone", d:"the writer's attitude", x:"The tone is hopeful."},
    {w:"style", s:"style", d:"the writer's way of writing", x:"Her style is simple and clear."},
    {w:"research", s:"re-search", d:"careful study to find facts", x:"Do research before writing."},
    {w:"corroborate", s:"cor-rob-o-rate", d:"to confirm with other evidence", x:"Corroborate your facts."},
    {w:"source", s:"source", d:"where information comes from", x:"Name your source."},
    {w:"interview", s:"in-ter-view", d:"a meeting to ask questions", x:"Conduct an interview."},
    {w:"survey", s:"sur-vey", d:"a set of questions to many people", x:"We did a survey."},
    {w:"reliable", s:"re-li-a-ble", d:"can be trusted", x:"Use reliable sources."}
  ],
  sight:["according","evidence","source","claim","suggest","indicate","reveal","confirm","estimate","approximately"],
  phonics:[
    {p:"-spect", label:"the -spect root (look)", words:["perspective","inspect","respect","spectator"]},
    {p:"-able/-ible", label:"adjective endings", words:["reliable","reasonable","possible","responsible"]},
    {p:"re-", label:"prefix re", words:["research","reveal","report","review","record"]}
  ],
  grammar:[
    {q:"The central message of a text is its ____.", a:"theme", why:"Definition of theme."},
    {q:"The writer's attitude to the subject is the ____.", a:"tone", why:"Definition of tone."},
    {q:"The writer's particular way of writing is their ____.", a:"style", why:"Definition of style."},
    {q:"Confirming a fact with a second source is called ____ evidence.", a:"corroborating", why:"From the curriculum."},
    {q:"A source that can be trusted is ____.", a:"reliable", why:"Reliable = trustworthy."},
    {q:"A meeting where you ask someone questions is an ____.", a:"interview", why:"Definition."}
  ],
  pairs:[
    {a:"reliable", b:"unreliable", kind:"antonym"},
    {a:"fact", b:"opinion", kind:"antonym"},
    {a:"perspective", b:"viewpoint", kind:"synonym"},
    {a:"corroborate", b:"confirm", kind:"synonym"},
    {a:"research", b:"investigation", kind:"synonym"}
  ],
  passage:{
    title:"Clean Water for Every Town",
    text:"It is unacceptable that in this century some Liberian towns still have no safe drinking water. I have visited three counties this year, and in each one I met women walking two hours before dawn to fetch water that is not clean. The Ministry reports that coverage has improved, and I do not doubt the figures. But figures do not carry buckets. Until every town has a working pump, we must not congratulate ourselves. This is not merely a health problem; it is a question of justice.",
    qs:[
      {q:"What is the theme of this passage?", a:"That access to clean, safe drinking water is a matter of justice, not just health."},
      {q:"Describe the author's tone.", a:"Serious, urgent and critical / indignant."},
      {q:"What is the author's perspective?", a:"That progress reported by officials is not enough while people still lack water."},
      {q:"What evidence does the author use?", a:"Personal field visits to three counties and observation of women fetching water."},
      {q:"Explain the sentence 'But figures do not carry buckets.'", a:"Statistics do not solve the daily reality; real people still do the hard work of fetching water."}
    ]
  },
  activities:["Analyse an article for theme and tone","Plan and conduct an interview","Research a local topic using two sources","Field visit and report"],
  materials:["Newspapers, magazines, articles","Interview question sheets","Notebooks","Research checklist"],
  assessment:["Text analysis written response","Interview transcript","Research report with sources","Oral presentation"]
},
{
  grade:6, period:"VI", sem:"Two", icon:"🎓",
  title:"English and Reading · Word Formation, Verbs and Poetry",
  subtitle:"Root words, regular and irregular verbs, poems and traditional stories",
  outcomes:["Form words using root words and prefixes, write sentences with regular and irregular verbs, and read, write and recite poems and traditional stories"],
  objectives:[
    "Form words with root words, prefixes and suffixes",
    "Write sentences with regular and irregular verbs",
    "Read, write and recite poems",
    "Write traditional stories"
  ],
  note:"<b>Regular verbs</b> form the past with -ed (walk → walked). <b>Irregular verbs</b> change form (go → went → gone; write → wrote → written). Learn the three principal parts of each irregular verb.",
  study:[
    /* ---- course text: Semester Two, Period VI (guide pp. 128-129) ---- */
    {k:"h3", t:"Root Words, Prefixes and Suffixes"},
    {k:"p", t:"A **root** is the unchanging core of a word that carries its main meaning; a **prefix** fastens before it and turns the meaning; a **suffix** fastens after it and fixes the part of speech. Knowing the parts unlocks whole families at once."},
    {k:"table", head:["Part","Meaning or work","Words in the family"], rows:[
      ["port","carry","transport, export, import, porter"],
      ["dict","say","dictate, prediction, contradiction, dictation"],
      ["spect","look","inspect, respect, perspective, spectator"],
      ["ject","throw","subject, object, reject, project"],
      ["struct","build","structure, construct, destroy, instruction"],
      ["bio / life","of living things","biology, biography, antibiotic"],
      ["pre-, pro-","before, forward","preview, prepare, proceed, produce"],
      ["mis-","wrongly","misunderstand, misplace, miscount"],
      ["-al, -or, -er, -age","of or relating to; one who; state or thing","traditional; narrator, ancestor, teacher; heritage, village, message, courage, package"]
    ]},
    {k:"bul", items:["Take the word to pieces before the dictionary: in + spect → look into; mis + understand → understand wrongly.","The suffix tells the part of speech: -er, -or, -ist a person; -tion, -ment, -ness a thing or state; -ive, -able, -ous a quality; -ise, -ize, -ate a verb.","Watch a vowel dropped before a suffix: brave + ery → bravery; guide + ance → guidance; and a consonant doubled: occur → occurrence."]},
    {k:"rule"},
    {k:"h3", t:"Regular and Irregular Verbs"},
    {k:"p", t:"A **regular verb** forms its past tense and its past participle by adding **-ed**: walk → walked → walked. An **irregular verb** does something else, and must be learned as it comes. The three **principal parts** are the base form, the past, and the past participle."},
    {k:"table", head:["Base form","Past","Past participle","Type"], rows:[
      ["walk","walked","walked","regular"],
      ["play","played","played","regular (y kept before -ed)"],
      ["stop","stopped","stopped","regular (consonant doubled)"],
      ["go","went","gone","irregular"],
      ["write","wrote","written","irregular"],
      ["speak","spoke","spoken","irregular"],
      ["take","took","taken","irregular"],
      ["see","saw","seen","irregular"],
      ["come","came","come","irregular"],
      ["eat","ate","eaten","irregular"]
    ]},
    {k:"bul", items:["The past participle needs a helping verb: has written, never has wrote.","The perfect tense takes the participle: “I have **gone**”, not I have went.","Verbs of the same shape keep company: sing, sang, sung with ring, rang, rung; drive, drove, driven with write, wrote, written.","Build a two-column list in the notebook the whole term: the verb, and its three parts; learn five lines a week."]},
    {k:"rule"},
    {k:"h3", t:"Poetry of the Period"},
    {k:"p", t:"Four poems are read, recited and enjoyed this period, and each carries one thing clearly: the **rhythm** of motion, the **image** of thirst, the **turn** from loneliness to joy, or the **voice** of a power not seen."},
    {k:"bul", items:["**From a Railway Carriage** (Robert Louis Stevenson) – the galloping rhythm of the train, with its quick, changing images: read it fast, then slow, and hear the meter doing the work.","**Dry River Bed** – thirst and the empty stone; the image carries the sense of waiting for the water to come again.","**I Wandered Lonely as a Cloud** (William Wordsworth) – the wanderer who turns from loneliness to joy at the sight of the daffodils; observe the simile that opens it.","**The Wind** – the unseen force known only by what it moves; the poem makes the wind a doer.","Read each aloud twice; mark the rhyming words, name the rhythm, and say what the poem leaves in you.","Recite one of the four from memory before the class, keeping the beat and not hurrying the end."]},
    {k:"rule"},
    {k:"h3", t:"Traditional Stories of Liberia"},
    {k:"p", t:"The **traditional story** – the folktale carried by word of mouth – is the inheritance of the people. It is **narrated**, not read; the teller holds the hour, and the listeners answer at the places where the custom gives them leave."},
    {k:"bul", items:["Its stock is the animals that act as people: the **Spider** full of tricks, the Hare, the Tortoise, the Elephant and the Foolish; and the human beings whose follies or virtues teach the lesson.","Its parts: the opening formula (Once upon a time), the trouble, the turn, and the **moral** the story leaves.","Its **proverbs** carry the wisdom of the generations in a sentence; a tale told without its proverb is a meal without salt.","Its manner: a **narrator** who varies the voice, keeps the pause, and lets the audience in; listeners who repeat the cry at the end of each part.","It belongs to the evening and the moon; the fire, the moonlight, the compound, and the **heritage** handed from one **generation** to the next by the tongue.","Write a traditional story of your own county as it was told to you, keeping the opening, the moral and the words the teller used."]},
    {k:"p", t:"**Endings of the period**: -al (traditional, moral, national, personal, musical); -or / -er for the doer (narrator, ancestor, teacher, writer, actor); -age for the state or the thing (heritage, village, message, package, courage). **Sight words**: once, long ago, suddenly, finally, meanwhile, thereafter, henceforth, thus, hence, indeed. **Vocabulary**: traditional, folktale, proverb, recite, narrator, moral, generation, heritage, ancestor, wisdom."},
    {k:"p", t:"End of Grade Six: build and define words from root and affix; hold the twelve tenses and the three degrees of comparison in writing; develop a paragraph with unity, coherence and emphasis; write a friendly and a business letter in their right format; analyse a text for theme, perspective, style and tone; and carry out a small research with corroborated facts and a stated conclusion."}
  ],
  focus:["Root words, prefixes, suffixes","Regular and irregular verbs","Poetry","Traditional stories"],
  words:[
    {w:"traditional", s:"tra-di-tion-al", d:"passed down over generations", x:"A traditional story."},
    {w:"folktale", s:"folk-tale", d:"an old story of a people", x:"Anansi is a folktale character."},
    {w:"proverb", s:"prov-erb", d:"a short wise saying", x:"Quote a proverb."},
    {w:"recite", s:"re-cite", d:"to say aloud from memory", x:"Recite the poem."},
    {w:"narrator", s:"nar-ra-tor", d:"the one telling the story", x:"The narrator is a child."},
    {w:"moral", s:"mor-al", d:"the lesson of a story", x:"What is the moral?"},
    {w:"generation", s:"gen-er-a-tion", d:"all people born about the same time", x:"The older generation."},
    {w:"heritage", s:"her-i-tage", d:"traditions handed down", x:"Protect our heritage."},
    {w:"ancestor", s:"an-ces-tor", d:"a person from whom one descends", x:"Our ancestors farmed here."},
    {w:"wisdom", s:"wis-dom", d:"good sense from experience", x:"The elder has wisdom."}
  ],
  sight:["once","long ago","suddenly","finally","meanwhile","thereafter","henceforth","thus","hence","indeed"],
  phonics:[
    {p:"-al", label:"the -al ending", words:["traditional","moral","national","personal","musical"]},
    {p:"-or/-er", label:"person endings", words:["narrator","ancestor","teacher","writer","actor"]},
    {p:"-age", label:"the -age ending", words:["heritage","village","message","package","courage"]}
  ],
  grammar:[
    {q:"Past and past participle of 'go':", a:"went, gone", why:"Irregular verb."},
    {q:"Past and past participle of 'write':", a:"wrote, written", why:"Irregular verb."},
    {q:"Past and past participle of 'speak':", a:"spoke, spoken", why:"Irregular verb."},
    {q:"Past and past participle of 'walk':", a:"walked, walked", why:"Regular verb: add -ed."},
    {q:"Past and past participle of 'take':", a:"took, taken", why:"Irregular verb."},
    {q:"pre + view = ", a:"preview", why:"pre means before."},
    {q:"mis + understand = ", a:"misunderstand", why:"mis means wrongly."},
    {q:"The lesson taught by a story is its ____.", a:"moral", why:"Definition."}
  ],
  pairs:[
    {a:"go", b:"went", kind:"irregular verb"},
    {a:"write", b:"wrote", kind:"irregular verb"},
    {a:"speak", b:"spoke", kind:"irregular verb"},
    {a:"take", b:"took", kind:"irregular verb"},
    {a:"see", b:"saw", kind:"irregular verb"},
    {a:"walk", b:"walked", kind:"regular verb"}
  ],
  passage:{
    title:"Why the Spider Has a Thin Waist",
    text:"Long ago Anansi the spider heard that two villages were cooking feasts on the same day. He could not choose between them, so he took a long rope and tied one end around his waist. He gave one end to the people of the first village and the other to the second, and he told each to pull when the food was ready. Both villages pulled at the same moment. The rope tightened and tightened. Anansi was never freed until the feasts were over, and from that day the spider has carried a very thin waist. The elders tell this story to warn against greed.",
    qs:[
      {q:"What kind of story is this?", a:"A traditional story or folktale."},
      {q:"What is the moral of the story?", a:"That greed brings trouble — do not try to have everything at once."},
      {q:"Write three irregular past tense verbs from the passage.", a:"Any three of: heard, took, gave, told, was."},
      {q:"Write two regular past tense verbs from the passage.", a:"Any two of: tied, tightened, pulled."},
      {q:"Why do the elders tell this story?", a:"To warn against greed."}
    ]
  },
  activities:["Collect and write a traditional story from an elder","Recite a poem from memory","Irregular verb chart (three principal parts)","Word building with prefixes and suffixes"],
  materials:["Folktale collections","Poetry anthology","Irregular verb charts","Exercise books"],
  assessment:["Written traditional story","Poem recitation","Irregular verb test","Word formation exercise"]
}
,
/* ================= GRADE 7 (Junior High · Language Arts) ================= */
{
  grade:7, period:"I", sem:"One", icon:"✍️",
  title:"Constructing Sentences · Introduction to Literature",
  subtitle:"Kinds of sentences, punctuation, friendly letters, folk tales, prose and poetry",
  outcomes:[
    "Learners are able to construct different types of sentences, write friendly letters, read and analyze prose and poetry, as well as differentiate prose from poetry"
  ],
  objectives:[
    "Construct sentences and punctuate them correctly",
    "Write and distinguish sentences according to kinds: declarative, interrogative, exclamatory and imperative",
    "Construct friendly letters",
    "Discuss and narrate folk tales (traditional stories)",
    "Read and discuss selected prose and poetry"
  ],
  note:"A <b>declarative</b> sentence tells something and ends with a full stop. An <b>interrogative</b> sentence asks and ends with a question mark. An <b>exclamatory</b> sentence shows strong feeling and ends with an exclamation mark. An <b>imperative</b> sentence gives a command or request and usually ends with a full stop.",
  study:[
    /* ---- course text: Semester One, Period I (guide pp. 2-3) ---- */
    {k:"h3", t:"Constructing Effective Sentences"},
    {k:"p", t:"A sentence is **effective** when it states one complete thought plainly, in words that carry no rubbish and leave nothing of the sense in the air. Four demands are made on it:"},
    {k:"num", items:["**Completeness** – it must have a subject and a predicate; a **sentence fragment** (Because we came late) is not a sentence at all.","**Clearness** – the words in their natural order, the modifier near the thing it modifies.","**Unity** – one main thought; a **run-on** sentence (We came late the bell had rung) joins two thoughts without the mark that joins them.","**Emphasis** – the word you would have remembered placed where the reader will feel it, at the beginning or at the end."]},
    {k:"bul", items:["Repair a fragment by joining it to the sentence it leans on: We came late, because the bell had already rung.","Repair a run-on with a conjunction and a comma, or with a period, or with a semicolon.","Never let a sentence wander: if it has three things to say, give it three sentences."]},
    {k:"rule"},
    {k:"h3", t:"Sentences According to Kind, and Their Punctuation"},
    {k:"table", head:["Kind","Its work","End mark","Example"], rows:[
      ["Declarative","declares or states","period (.)","The market opens at six o’clock."],
      ["Interrogative","asks","question mark (?)","Where did you put my pen?"],
      ["Imperative","orders, urges, requests","period (.)","Sweep the classroom before you leave."],
      ["Exclamatory","cries out a feeling","exclamation mark (!)","What a wonderful harvest we had!"]
    ]},
    {k:"bul", items:["The **-ative** endings name the kinds: declarative, interrogative, exclamatory, imperative, narrative.","**Punctuation** (the -tion ending, from the noun of the act) covers the period, the comma, the apostrophe, the colon, the semicolon, the question mark and the exclamation mark – and the **salutation** of a letter takes a comma after it.","Capitals: the first word of a sentence, the pronoun **I**, and every proper noun – my friend lives in gbarnga → **My friend lives in Gbarnga.**","Adverbs of manner in -ly tell how the work should be done in this class: quietly, clearly, politely, carefully, correctly."]},
    {k:"rule"},
    {k:"h3", t:"Writing the Friendly Letter"},
    {k:"p", t:"A **friendly letter** is written to someone you know, and its business is the sharing of news and feeling in order. Its five parts keep their places: the **heading** (address and date, upper right), the **salutation** (Dear Korto,), the **body**, the **closing** (Your friend, or Yours sincerely,) and the **signature**."},
    {k:"bul", items:["The salutation comes **before** the body; the closing comes after the last sentence of the body.","Open with one line on the writer’s own state – I am well, and I hope this finds you in health.","Give one subject to a paragraph: the school, the harvest, the visit, the greeting to the family.","End with something asked or promised – Write to me soon; give my love to your mother.","Write to an imaginary friend when the class has no real one to answer: the work is the format and the manner, not the post."]},
    {k:"rule"},
    {k:"h3", t:"Introduction to Literature: Its Elements and Its Terms"},
    {k:"p", t:"**Literature** is writing that carries thought and feeling in a form worth remembering. Its elements are the things a reader is expected to name:"},
    {k:"table", head:["Term","What it is"], rows:[
      ["Plot","the course of events in a story, in the order they follow one another"],
      ["Setting","the time and place in which the story happens"],
      ["Character","a person (or animal acting as a person) in the story"],
      ["Theme","the thought or the lesson the whole piece is built to carry"],
      ["Narrator","the voice that tells the story – in the first or the third person"],
      ["Dialogue","the words the characters speak to one another"],
      ["Stanza","a group of lines in a poem, as a paragraph is in prose"],
      ["Rhyme","the like ending of the sounds at the close of lines"]
    ]},
    {k:"p", t:"**Prose** is writing in sentences and paragraphs, running to the margin; **poetry** is writing in lines and stanzas, measured by rhythm and often held together by rhyme. Prose may be fiction or non-fiction; a **folk tale** is prose in the oldest form – a story carried by the mouth before it was carried by the pen."},
    {k:"rule"},
    {k:"h3", t:"Folk Tales, Prose and Poetry"},
    {k:"bul", items:["A **folk tale** opens in the old way (Once upon a time), peopled by animals that speak and by a fool, a trickster or a good child; it ends with the **moral** the people meant to teach.","To **narrate** a folk tale is to tell it aloud in your own words, keeping the order of the events, the voices of the characters and the lesson at the end.","To **discuss** it is to say what the tale taught, whether the teaching still holds, and which part of the plot carried it.","**Simile** compares with like or as; **metaphor** says one thing is another; both are the common figures of the tale and the poem."]},
    {k:"p", t:"Read and discuss one piece of prose and one poem this week, and for each say the theme in one sentence. **Sight words**: theme, plot, setting, character, stanza, rhyme, narrator, dialogue, salutation, closing. **Vocabulary**: declarative, interrogative, exclamatory, imperative, punctuation, folk tale, prose, poetry, simile, metaphor."}
  ],
  focus:["Effective sentences","Kinds of sentences","Punctuation","Friendly letters","Elements of literature","Folk tales","Prose and poetry"],
  words:[
    {w:"declarative", s:"de-clar-a-tive", d:"a sentence that makes a statement", x:"The rain fell all night is a declarative sentence."},
    {w:"interrogative", s:"in-ter-rog-a-tive", d:"a sentence that asks a question", x:"Where is your exercise book? is interrogative."},
    {w:"exclamatory", s:"ex-clam-a-tor-y", d:"a sentence that shows strong feeling", x:"What a beautiful morning! is exclamatory."},
    {w:"imperative", s:"im-per-a-tive", d:"a sentence that gives a command or request", x:"Close the door quietly is imperative."},
    {w:"punctuation", s:"punc-tu-a-tion", d:"the marks used to make writing clear", x:"Correct punctuation helps the reader."},
    {w:"folk tale", s:"folk tale", d:"a traditional story passed down by word of mouth", x:"The folk tale of the clever hare is told in many towns."},
    {w:"prose", s:"prose", d:"ordinary written language in sentences and paragraphs", x:"A novel is written in prose."},
    {w:"poetry", s:"po-e-try", d:"writing arranged in lines and verses, often with rhythm", x:"Her poetry uses strong images."},
    {w:"simile", s:"sim-i-le", d:"a comparison using like or as", x:"He is as brave as a lion is a simile."},
    {w:"metaphor", s:"met-a-phor", d:"a direct comparison without like or as", x:"Time is a thief is a metaphor."}
  ],
  sight:["theme","plot","setting","character","stanza","rhyme","narrator","dialogue","salutation","closing"],
  phonics:[
    {p:"-ative", label:"the -ative ending in sentence types", words:["declarative","interrogative","exclamatory","imperative","narrative"]},
    {p:"-ion", label:"nouns ending in -ion", words:["punctuation","conversation","description","narration","exclamation"]},
    {p:"-ly", label:"adverbs formed with -ly", words:["quietly","clearly","politely","carefully","correctly"]}
  ],
  grammar:[
    {q:"Add the correct end mark: Where did you put my pen___", a:"?", why:"An interrogative sentence asks a question, so it ends with a question mark."},
    {q:"Add the correct end mark: What a wonderful harvest we had___", a:"!", why:"An exclamatory sentence shows strong feeling and ends with an exclamation mark."},
    {q:"Add the correct end mark: Sweep the classroom before you leave___", a:".", why:"An imperative sentence gives a command and ends with a full stop."},
    {q:"Name the kind of sentence: The market opens at six o'clock.", a:"Declarative", why:"It makes a statement."},
    {q:"Name the kind of sentence: Please pass me the chalk.", a:"Imperative", why:"It makes a request."},
    {q:"Correct the punctuation: my friend lives in gbarnga", a:"My friend lives in Gbarnga.", why:"Begin a sentence with a capital letter, capitalise the place name, and end with a full stop."},
    {q:"Which part of a friendly letter comes first, the salutation or the body?", a:"The salutation", why:"A friendly letter runs: heading, salutation, body, closing, signature."},
    {q:"Write the closing of a friendly letter to a friend.", a:"Your friend, / Yours sincerely,", why:"A friendly letter uses a warm closing followed by a comma."}
  ],
  pairs:[
    {a:"declarative", b:"statement", kind:"sentence kind"},
    {a:"interrogative", b:"question", kind:"sentence kind"},
    {a:"exclamatory", b:"strong feeling", kind:"sentence kind"},
    {a:"imperative", b:"command", kind:"sentence kind"},
    {a:"prose", b:"poetry", kind:"antonym"},
    {a:"begin", b:"commence", kind:"synonym"}
  ],
  passage:{
    title:"Why the Hare Has Long Ears",
    text:"In the old days the hare had ears no longer than a mouse's. He was proud of his cleverness and boasted that no animal in the forest could trick him. One dry season the well in the town dried up, and the animals agreed that each of them would dig in turn. The hare slipped away when his turn came and hid in the tall grass.\n\nWhen the well was finished, the hare came out and drank first, laughing at the others. The elephant said nothing. That night the animals held a meeting under the cotton tree and decided that the hare should hear every word ever spoken about him. In the morning the hare woke to find his ears stretched long and thin. From that day the hare hears everything, but no one trusts him with a secret.",
    qs:[
      {q:"Why did the animals agree to dig the well?", a:"Because the well in the town had dried up in the dry season and they all needed water."},
      {q:"What did the hare do when his turn came to dig?", a:"He slipped away and hid in the tall grass instead of digging."},
      {q:"How were the hare's ears changed, and why?", a:"They were stretched long and thin so that he would hear every word spoken about him, as a punishment for his trickery."},
      {q:"What lesson (theme) does this folk tale teach?", a:"That laziness and trickery are punished, and that a person who cheats others loses their trust."},
      {q:"Is this passage prose or poetry? Give one reason.", a:"Prose, because it is written in ordinary sentences and paragraphs rather than in lines and verses."}
    ]
  },
  activities:[
    "Write various kinds of sentences about given topics with proper punctuation",
    "Write a friendly letter to an imaginary friend",
    "Narrate and discuss a folk tale from your own community",
    "Read and discuss selected short stories, identifying theme, plot, setting and characters",
    "Read and discuss poetic literary terms such as simile, metaphor and rhyme"
  ],
  materials:["Grade 7 English pupil's book","Selected prose and poetry","Exercise books","Dictionary","Chalkboard"],
  assessment:["Classwork","Homework","Assignments","Quizzes"]
},
{
  grade:7, period:"II", sem:"One", icon:"📄",
  title:"Paragraph Writing · Literature and Reading Comprehension",
  subtitle:"Subject–verb agreement, kinds of paragraphs, prefixes and suffixes, elements of the short story",
  outcomes:[
    "Learners are able to construct sentences and paragraphs using grammar mechanics; read and analyze prose and poetry"
  ],
  objectives:[
    "Construct paragraphs using subject and verb agreement, capitalization and punctuation",
    "Develop vocabulary in paragraph writing using prefixes and suffixes",
    "Discuss elements of short stories: setting, theme, plot and characters",
    "Create simple short stories"
  ],
  note:"A <b>paragraph</b> is a group of sentences about one main idea. The <b>topic sentence</b> states that idea; the other sentences give supporting details. In <b>subject–verb agreement</b> a singular subject takes a singular verb (the boy runs) and a plural subject takes a plural verb (the boys run).",
  study:[
    /* ---- course text: Semester One, Period II (guide pp. 4-5) ---- */
    {k:"h3", t:"Grammar Mechanics in the Paragraph"},
    {k:"p", t:"A paragraph is judged first by its **mechanics** – the working parts that must be right before the sense is trusted: **subject–verb agreement**, the capital letter, the end mark, and the spelling of the words."},
    {k:"bul", items:["The verb takes the number of its subject: “The learners **were** writing their essay; Each of the girls **has** a pencil; My brother and my sister **are** at school”.","Words standing between the subject and the verb do not change the rule: “The **list** of items **is** long”.","on monday we travelled to buchanan → **On Monday we travelled to Buchanan.** – the first word of the sentence and every proper noun take capitals.","Each sentence ends with the mark its kind requires; a comma alone may not hold two independent clauses together."]},
    {k:"rule"},
    {k:"h3", t:"The Topic Sentence"},
    {k:"p", t:"The **topic sentence** names the one idea the paragraph will work out. A good topic sentence is narrow enough to be proved in six or seven sentences and wide enough to be worth proving."},
    {k:"num", items:["Say the idea you mean to hold in the paragraph.","Set it down as a statement, not a question and not a promise (I will write about school is not a topic sentence).","Test it: can each sentence you plan to write answer how? or why? to that one sentence?","Place it first, where the reader looks for it; and let the last sentence return to it in other words."]},
    {k:"p", t:"Of two candidates for a paragraph on school life, the one that carries a judgement to be made good – Life at our school brings both pleasures and difficulties – is the better topic sentence, because the details now have work to do."},
    {k:"rule"},
    {k:"h3", t:"Kinds of Paragraph"},
    {k:"table", head:["Kind","Its work","The order it keeps"], rows:[
      ["Narrative","tells events in the order they happened","in time, with the joining words first, then, later, finally"],
      ["Descriptive","paints a person, place or thing","from the general impression to the parts, or from the parts to the whole"],
      ["Expository","explains a matter or gives information","the point, then the reasons, then the example"],
      ["Persuasive","moves the reader to agree and to act","the position, the arguments, the call at the end"]
    ]},
    {k:"bul", items:["**Unity** – one idea in each paragraph; every sentence serving the topic sentence.","**Coherence** – the sentences holding together by the transitional words and by the same subjects carried forward.","**Detail** – the particular things seen, heard and felt, in place of the general name.","**Draft, revise, edit** – write it, rebuild what does not stand, then correct the marks and the spelling before the copy."]},
    {k:"rule"},
    {k:"h3", t:"Prefixes and Suffixes in Writing"},
    {k:"p", t:"Words are built and lengthened in the paragraph itself, by the parts that are fastened to a root."},
    {k:"table", head:["Part","Meaning or work","Words"], rows:[
      ["un-","not","unhappy, unable, unkind, unfair, unusual"],
      ["in- / im-","not","incorrect, impossible, unnecessary"],
      ["re-","again","rewrite, return, rebuild, review, replace"],
      ["-ful","full of","helpful, careful, useful, beautiful"],
      ["-less","without","hopeless, fearless, careless, painless"],
      ["-ness","state or quality","kindness, happiness, carelessness"]
    ]},
    {k:"bul", items:["Say the meaning of the new word before you use it: care + -less → **careless**, without care.","Vary the paragraph by building rather than repeating: instead of very careful and very careful again, say careful, cautious, painless precision."]},
    {k:"rule"},
    {k:"h3", t:"The Short Story and the Autobiography"},
    {k:"p", t:"The elements of a **short story** are the parts you are asked to name after reading: the **setting** (time and place), the **plot** (the course of events), the **theme** (the thought the story carries), the **characters** (who the story is about) and the **conflict** (the trouble that drives the plot to its **climax** and its **resolution**)."},
    {k:"bul", items:["**Types of character**: the **protagonist** (the chief) and the **antagonist** (the one opposed); the **round** or **developing** character, who changes, and the **flat** or **static** character, who does not; the **foil**, whose difference sets the chief in light.","A story is read for its theme: say the events first, then what the story means by them.","An **autobiography** is the writer’s own life written by the writer, in the first person; a **biography** is another person’s life, in the third. Both are ordered: birth and home, schooling, the work, the difficulty, what was came to.","**Sight words**: character, protagonist, conflict, climax, resolution, detail, unity, coherence, draft, revise. **Vocabulary**: paragraph, topic sentence, descriptive, narrative, prefix, suffix, setting, plot, theme, autobiography."]},
    {k:"p", t:"Write a paragraph of eight sentences on A Day at Home: first the kind (descriptive or narrative), then the topic sentence, then the details that prove it; underline every word you built with a prefix or a suffix."}
  ],
  focus:["Subject–verb agreement","Kinds of paragraphs","Prefixes and suffixes","Elements of the short story","Autobiography"],
  words:[
    {w:"paragraph", s:"par-a-graph", d:"a group of sentences about one main idea", x:"Each paragraph begins on a new line."},
    {w:"topic sentence", s:"top-ic sen-tence", d:"the sentence that states the main idea of a paragraph", x:"Put the topic sentence first."},
    {w:"descriptive", s:"de-scrip-tive", d:"describing how something looks, sounds or feels", x:"She wrote a descriptive paragraph about the market."},
    {w:"narrative", s:"nar-ra-tive", d:"telling a story of events in order", x:"His narrative paragraph told of the journey."},
    {w:"prefix", s:"pre-fix", d:"a word part added to the front of a word", x:"The prefix un- makes unhappy."},
    {w:"suffix", s:"suf-fix", d:"a word part added to the end of a word", x:"The suffix -ful makes helpful."},
    {w:"setting", s:"set-ting", d:"where and when a story takes place", x:"The setting is a fishing village at dawn."},
    {w:"plot", s:"plot", d:"the series of events in a story", x:"The plot moves from the quarrel to the reconciliation."},
    {w:"theme", s:"theme", d:"the central message or idea of a work", x:"The theme of the story is forgiveness."},
    {w:"autobiography", s:"au-to-bi-og-ra-phy", d:"the story of a person's life written by that person", x:"She wrote her autobiography at sixty."}
  ],
  sight:["character","protagonist","conflict","climax","resolution","detail","unity","coherence","draft","revise"],
  phonics:[
    {p:"un-", label:"the prefix un- meaning not", words:["unhappy","unable","unkind","unfair","unusual"]},
    {p:"re-", label:"the prefix re- meaning again", words:["rewrite","return","rebuild","review","replace"]},
    {p:"-ful / -less", label:"suffixes meaning full of / without", words:["helpful","careful","hopeless","fearless","useful"]}
  ],
  grammar:[
    {q:"Choose the correct verb: The learners (was / were) writing their essays.", a:"were", why:"The subject learners is plural, so it takes the plural verb were."},
    {q:"Choose the correct verb: Each of the girls (has / have) a pencil.", a:"has", why:"Each is singular, so the verb must be singular."},
    {q:"Choose the correct verb: My brother and my sister (is / are) at school.", a:"are", why:"Two subjects joined by and form a plural subject."},
    {q:"Add the prefix that means 'not' to the word 'necessary'.", a:"unnecessary", why:"The prefix un- means not."},
    {q:"Add a suffix to 'care' to mean 'without care'.", a:"careless", why:"The suffix -less means without."},
    {q:"Correct the capitalization: on monday we travelled to buchanan.", a:"On Monday we travelled to Buchanan.", why:"Capitalise the first word, the day of the week and the name of the city."},
    {q:"Which sentence would make the best topic sentence for a paragraph about school life?", a:"Life at our school brings both pleasures and difficulties.", why:"A topic sentence states the main idea that the other sentences will support."},
    {q:"Name the kind of paragraph that tells events in the order they happened.", a:"Narrative", why:"A narrative paragraph tells a story in sequence."}
  ],
  pairs:[
    {a:"prefix", b:"suffix", kind:"antonym"},
    {a:"begin", b:"start", kind:"synonym"},
    {a:"ancient", b:"modern", kind:"antonym"},
    {a:"biography", b:"autobiography", kind:"related pair"},
    {a:"un-", b:"not", kind:"prefix meaning"},
    {a:"-less", b:"without", kind:"suffix meaning"}
  ],
  passage:{
    title:"Books",
    text:"My uncle kept a wooden box beneath his bed, and in it he kept books. There were no shelves in our house and no library in our town, but there was that box. On evenings when the generator was silent and the lamp burned low, he would lift the lid and let me choose.\n\nI did not always understand what I read. Some of the pages carried words I had never heard spoken in our town. But my uncle told me that a book is a road, and that a reader who walks it long enough arrives somewhere. Years later, sitting in an examination hall in Monrovia, I understood him. Every road I had walked in that box had brought me to the desk where I now sat, and none of the walking had been wasted.",
    qs:[
      {q:"Where did the writer's uncle keep his books?", a:"In a wooden box beneath his bed."},
      {q:"Why did the writer sometimes not understand what he read?", a:"Because some pages carried words he had never heard spoken in his town."},
      {q:"What did the uncle mean when he said a book is a road?", a:"He meant that reading takes you somewhere over time, leading you to knowledge and opportunity."},
      {q:"What is the theme of this passage?", a:"That reading, even when difficult and without good facilities, leads to learning and opportunity."},
      {q:"Is this passage a biography or an autobiography? Give a reason.", a:"An autobiography, because the writer tells the story of his own life using the word I."}
    ]
  },
  activities:[
    "Write paragraphs using correct subject–verb agreement",
    "Write different kinds of paragraphs: descriptive and narrative",
    "In groups of five, discuss the challenges of school life and present findings orally and in writing",
    "Read and analyze a selected poem, then write your own autobiography",
    "Read prose and poetry, identify the elements of short stories, then write a simple short story of your own"
  ],
  materials:["Grade 7 English pupil's book","Selected poems and short stories","Exercise books","Dictionary"],
  assessment:["Assignment","Individual work","Quizzes","Tests"]
}
,
{
  grade:7, period:"III", sem:"One", icon:"🎭",
  title:"Sentence Writing · Verbs, Adjectives, Drama and Plays",
  subtitle:"Action and linking verbs, kinds of adjectives, prose and poetry characteristics, writing plays",
  outcomes:[
    "Learners are able to construct sentences using action and linking verbs as well as adjectives, read and analyze prose and poetry, and develop skills in drama and plays"
  ],
  objectives:[
    "Write sentences using action and linking verbs",
    "Develop sentences using different kinds of adjectives, for example the predicate adjective",
    "Identify, read and discuss prose and poetry characteristics",
    "Write plays and dramatize them"
  ],
  note:"An <b>action verb</b> tells what the subject does (she writes). A <b>linking verb</b> joins the subject to a word that renames or describes it (she is a nurse; the soup is hot). Common linking verbs are: is, am, are, was, were, seem, become, appear.",
  study:[
    /* ---- course text: Semester One, Period III (guide pp. 6-7) ---- */
    {k:"h3", t:"Action Verbs and Linking Verbs"},
    {k:"p", t:"By their work verbs fall into two great classes. An **action (transitive or intransitive) verb** expresses something the subject does: “The farmer **harvested** the rice; the baby **cried**.” A **linking verb** joins the subject to the word that completes it, without expressing action: “The mangoes **are** ripe; the night **became** cold; she **seems** tired.”"},
    {k:"bul", items:["The commonest linking verb is **be** (am, is, are, was, were); with the senses and the changing verbs it forms the rest: look, seem, appear, feel, taste, smell, sound, become, grow, turn, remain.","Test the verb by putting an adjective after it: if The soup tastes salt makes sense, the verb is linking; if only an adverb will do (He looked angrily), the verb is an action verb.","A linking verb takes a **predicate adjective** or a **predicate nominative** after it, never an adverb: “The teacher **is kind**”, not kindly.","Turn an action sentence into a linking sentence to see the difference: The teacher spoke kindly → **The teacher is kind.**"]},
    {k:"rule"},
    {k:"h3", t:"Adjectives and Their Kinds"},
    {k:"p", t:"An **adjective** limits or describes a noun or pronoun. It answers one of four questions, and the question names the kind:"},
    {k:"table", head:["Question","Kind of adjective","Words","In a sentence"], rows:[
      ["What kind?","descriptive","red, tall, smooth, bitter","the red hat"],
      ["Which one?","demonstrative / possessive","this, that, these, those; my, his, her","those chairs"],
      ["How many? / How much?","numeral / quantitative","two, ten, many, few, several, much","Ten learners were absent."],
      ["Whose? / Which? (asking)","interrogative","which, what, whose","Which road did they take?"]
    ]},
    {k:"p", t:"A **predicate adjective** is the adjective that stands after a linking verb and completes the subject: in “The night became **cold**”, **cold** is the predicate adjective. Adjectives ending in -ive, -ous, -able are still adjectives: descriptive, attractive, creative, active; famous, dangerous, generous, nervous, curious; comfortable, reasonable, valuable, reliable, enjoyable."},
    {k:"rule"},
    {k:"h3", t:"Prose and Poetry: Their Characteristics"},
    {k:"table", head:["Prose","Poetry"], rows:[
      ["written in sentences and paragraphs","written in lines and stanzas"],
      ["runs to the full width of the page","measured by a rhythm or metre"],
      ["the natural order of thought and speech","often inverts the order for the sake of sound or stress"],
      ["carries meaning in the sense of the words","carries meaning also in the sound: rhyme, alliteration, repetition"],
      ["the novel, the story, the essay, the report","the poem, the song, the hymn, the proverb in verse"]
    ]},
    {k:"bul", items:["A **verse** is a single line, or a short stanza; **rhythm** is the beat of the stressed and unstressed syllables; **imagery** is the words that build a picture on the senses.","Poetry may be **lyric** (short and personal, the feeling of one moment), **narrative** (it tells a story – the ballad, the epic), or **dramatic** (it speaks in the voice of a person acting).","Distinguish them at reading: put the passage in prose order and say what the arrangement of the lines added."]},
    {k:"rule"},
    {k:"h3", t:"Writing and Dramatizing a Play"},
    {k:"p", t:"A **play** is literature written to be acted. Its words are almost all **dialogue** – the speech of the characters – and its movements are directed by the **stage directions**, which are written in brackets or italics and are not spoken."},
    {k:"bul", items:["A **script** is the whole written play; it is divided into **acts**, and the acts into **scenes**.","The **cast** is the company of players; the **protagonist** and **antagonist** are the two powers between which the play is torn.","**Monologue** is a long speech by one person; **soliloquy** is speech made alone on the stage, where the character gives his thought aloud.","A one-act play keeps one action, one place and a short stretch of time; it must move to its **climax** without the help of a long account.","To dramatize a story: cut it into scenes, give each character one want, turn the account into speech and movement, and let the audience see the change instead of hearing it described."]},
    {k:"num", items:["Choose the story or the incident, and write the list of characters with one line on each.","Lay out the scenes on paper before a word of dialogue is written.","Write the dialogue in short sentences that a mouth can carry; let each speech show the person who makes it.","Add the stage directions that the players will need to know and the audience cannot hear.","Rehearse twice; then play to a class, and ask the audience what each character wanted."]},
    {k:"p", t:"**Sight words**: cast, script, protagonist, antagonist, monologue, rhythm, verse, imagery, narrator, audience. **Vocabulary**: action verb, linking verb, adjective, predicate adjective, demonstrative, drama, dialogue, stage direction, act, scene."}
  ],
  focus:["Action verbs","Linking verbs","Kinds of adjectives","Predicate adjective","Prose and poetry characteristics","Drama and plays"],
  words:[
    {w:"action verb", s:"ac-tion verb", d:"a verb that shows what the subject does", x:"In 'the goalkeeper jumped', jumped is an action verb."},
    {w:"linking verb", s:"link-ing verb", d:"a verb that joins the subject to a word describing it", x:"In 'the water is cold', is is a linking verb."},
    {w:"adjective", s:"ad-jec-tive", d:"a word that describes a noun or pronoun", x:"A tall palm tree stood by the road."},
    {w:"predicate adjective", s:"pred-i-cate ad-jec-tive", d:"an adjective that follows a linking verb and describes the subject", x:"The soup is delicious."},
    {w:"demonstrative", s:"dem-on-stra-tive", d:"pointing out which one: this, that, these, those", x:"This book is mine; those books are yours."},
    {w:"drama", s:"dra-ma", d:"a story written to be acted on a stage", x:"Our class performed a short drama."},
    {w:"dialogue", s:"di-a-logue", d:"the words spoken by characters in a play or story", x:"The dialogue revealed the quarrel."},
    {w:"stage direction", s:"stage di-rec-tion", d:"an instruction in a play telling actors what to do", x:"The stage direction says he enters slowly."},
    {w:"act", s:"act", d:"a main division of a play", x:"The play has three acts."},
    {w:"scene", s:"scene", d:"a smaller division within an act", x:"Scene two takes place in the market."}
  ],
  sight:["cast","script","protagonist","antagonist","monologue","rhythm","verse","imagery","narrator","audience"],
  phonics:[
    {p:"-ive", label:"adjectives ending in -ive", words:["descriptive","attractive","expensive","creative","active"]},
    {p:"-ous", label:"adjectives ending in -ous", words:["famous","dangerous","generous","nervous","curious"]},
    {p:"-able", label:"adjectives ending in -able", words:["comfortable","reasonable","valuable","reliable","enjoyable"]}
  ],
  grammar:[
    {q:"Is the verb action or linking? The farmer harvested the rice.", a:"Action verb", why:"Harvested tells what the farmer does."},
    {q:"Is the verb action or linking? The mangoes are ripe.", a:"Linking verb", why:"Are joins the subject mangoes to the describing word ripe."},
    {q:"Underline the predicate adjective: The night became cold.", a:"cold", why:"Cold follows the linking verb became and describes the subject night."},
    {q:"Which kind of adjective is 'those' in 'those chairs'?", a:"Demonstrative adjective", why:"It points out which ones."},
    {q:"Write an adjective that tells how many: ___ learners were absent.", a:"Ten (or: few, many, several)", why:"Adjectives can tell how many."},
    {q:"Change to a linking-verb sentence: The teacher spoke kindly. (use 'is')", a:"The teacher is kind.", why:"A linking verb joins the subject to a predicate adjective."},
    {q:"In a play script, what do we call the words the characters speak?", a:"Dialogue", why:"Dialogue is the spoken part of a script."},
    {q:"Name one characteristic of poetry that prose does not usually have.", a:"It is written in lines and stanzas, often with rhyme and regular rhythm.", why:"Prose runs in sentences and paragraphs."}
  ],
  pairs:[
    {a:"action verb", b:"linking verb", kind:"contrast"},
    {a:"generous", b:"selfish", kind:"antonym"},
    {a:"brave", b:"courageous", kind:"synonym"},
    {a:"act", b:"scene", kind:"related pair"},
    {a:"prose", b:"paragraphs", kind:"related pair"},
    {a:"poetry", b:"stanzas", kind:"related pair"}
  ],
  passage:{
    title:"The Borrowed Lamp (a short play)",
    text:"CHARACTERS: MA TENNEH, a trader.  KOLLIE, her son.  NEIGHBOUR.\n\nSCENE ONE. A small parlour at night. A lamp burns on the table.\n\nMA TENNEH: (counting coins) Kollie, bring the lamp closer. I cannot see these figures.\nKOLLIE: (moving the lamp) Ma, the neighbour asked for it again this evening.\nMA TENNEH: And what did you tell her?\nKOLLIE: I said the lamp is ours.\nMA TENNEH: (setting down the coins) Sit down, my son. When your father died, that woman fed us for three months and asked nothing. Take her the lamp.\nKOLLIE: But then we will sit in the dark.\nMA TENNEH: (smiling) We will sit in the dark for one night. She sat in the dark for three months so that we could eat. Go.\n(KOLLIE takes the lamp and goes out. The stage darkens.)",
    qs:[
      {q:"Who are the characters in this play?", a:"Ma Tenneh a trader, Kollie her son, and a neighbour."},
      {q:"Write out one stage direction from the script.", a:"Any of: (counting coins), (moving the lamp), (setting down the coins), (smiling), or (KOLLIE takes the lamp and goes out. The stage darkens.)"},
      {q:"Why does Ma Tenneh tell Kollie to give away the lamp?", a:"Because the neighbour fed the family for three months after his father died and asked for nothing in return."},
      {q:"What is the theme of this play?", a:"Gratitude and repaying kindness, even at a cost to yourself."},
      {q:"How can you tell this is drama and not prose?", a:"It is set out as a script with a character list, stage directions and dialogue written to be acted."}
    ]
  },
  activities:[
    "Write sentences using linking and action verbs",
    "In groups, generate sentences using linking and action verbs correctly",
    "In pairs, write sentences using different kinds of adjectives such as predicate and demonstrative",
    "Given a list of nouns, work in pairs to write adjectives describing each noun",
    "Read and discuss prose, drama and plays and state their characteristics"
  ],
  materials:["Grade 7 English pupil's book","Selected plays and poems","Exercise books","Dictionary"],
  assessment:["Assignment","Individual work","Quizzes","Tests"]
},
{
  grade:7, period:"IV", sem:"Two", icon:"📚",
  title:"Principal Parts of Verbs · Literature and Reading Comprehension",
  subtitle:"Verb tenses, adverbs, double negatives and comparisons, dictionary and thesaurus",
  outcomes:[
    "Learners are able to construct sentences using the principal parts of verbs, adverbs and adjectives, read and analyze prose and poetry, and use the dictionary and thesaurus"
  ],
  objectives:[
    "Write effective sentences using the principal parts of verbs",
    "Write sentences avoiding double comparison and double negatives",
    "Read and discuss selected short stories",
    "Identify, read and analyze prose, and learn the use of the dictionary and thesaurus"
  ],
  note:"The <b>principal parts</b> of a verb are the present, the past and the past participle: walk, walked, (have) walked; go, went, (have) gone. A <b>double negative</b> uses two negative words where one is needed — 'I did not see nobody' should be 'I did not see anybody'.",
  study:[
    /* ---- course text: Semester Two, Period IV (guide p. 8) ---- */
    {k:"h3", t:"The Principal Parts of the Verb"},
    {k:"p", t:"Every verb has three **principal parts**: the **base form** (from which the present and the future are built), the **past tense** (from which nothing else is built), and the **past participle** (which forms the perfect tenses with have, has, had). The **present participle** is the base with -ing."},
    {k:"table", head:["Base form","Past","Past participle","Type"], rows:[
      ["write","wrote","has written","irregular (-en)"],
      ["speak","spoke","has spoken","irregular (-en)"],
      ["eat","ate","has eaten","irregular (-en)"],
      ["break","broke","has broken","irregular (-en)"],
      ["choose","chose","has chosen","irregular (-en)"],
      ["buy","bought","has bought","irregular (-ought)"],
      ["teach","taught","has taught","irregular (-aught)"],
      ["walk","walked","has walked","regular"],
      ["bring","brought","has brought","irregular"]
    ]},
    {k:"bul", items:["The **-en** ending is the mark of the past participle in a great company of irregular verbs: eaten, written, spoken, broken, chosen, given, taken, seen.","The **perfect tense** is have / has / had + past participle: “She **has finished** her homework, never She have finished”.","**To conjugate** a verb is to give its parts and its forms through the persons and the tenses; do it aloud until the ear refuses a wrong form."]},
    {k:"rule"},
    {k:"h3", t:"Tenses in the Sentence"},
    {k:"p", t:"The tenses built on the principal parts are the working tools of the writer; keep the time true through the whole paragraph."},
    {k:"bul", items:["**Present** – the base form, with -s for he, she, it: she writes; they write.","**Past** – the second principal part: she wrote.","**Future** – will + the base: she will write.","**Present perfect** – has / have + past participle: she has written.","**Past perfect** – had + past participle: she had written before the bell.","**Participles** – writing (present) and written (past), used with the helping verbs and as modifiers: “the **written** exam; the **writing** pupil”."]},
    {k:"rule"},
    {k:"h3", t:"Adverbs and Their Kinds"},
    {k:"p", t:"An **adverb** modifies a verb, an adjective or another adverb; it tells how, when, where, how often or to what degree. In “The child answered **politely**”, the adverb is **politely**."},
    {k:"table", head:["Kind","The question it answers","Words","In a sentence"], rows:[
      ["Manner","how?","quickly, politely, bravely, silently, neatly","He ran swiftly."],
      ["Time","when?","yesterday, soon, now, already, late","We came yesterday."],
      ["Place","where?","here, there, outside, nowhere, henceforth","Look below."],
      ["Frequency","how often?","always, never, often, again, daily","She sings often."],
      ["Degree","how much?","very, too, almost, rather, extremely","The pot was very hot."],
      ["Modifying an adjective or an adverb","to what extent?","rather, quite, so, too","a rather long road; too slowly"]
    ]},
    {k:"bul", items:["An adverb of manner must not be used where the linking verb needs an adjective: “the soup tastes **good**”, not well.","Do not set hardly, scarcely, barely where the sense is hard, scarce, bare – the adverbs of this shape carry a negative in them."]},
    {k:"rule"},
    {k:"h3", t:"Double Negatives and Double Comparisons"},
    {k:"p", t:"A **double negative** puts two negative words in one clause, so that they destroy one another; standard English allows only one. A **double comparison** compares in both ways at once, with -er and more together."},
    {k:"bul", items:["“I did not see **nobody** in the yard” → **I did not see anybody in the yard.**","I can hardly wait no longer → **I can hardly wait any longer.**","Never use nor after a clause already negative; keep any, anybody, ever in place of no, nobody, never.","“This road is **more smoother** than that one” → **This road is smoother than that one.**","Choose one method only: -er with than, or more with than; -est with the, or most with of.","After better, worse, later, rather the word is **than**, never **then**."]},
    {k:"rule"},
    {k:"h3", t:"The Dictionary and the Thesaurus"},
    {k:"table", head:["Book","What it gives","How to use it"], rows:[
      ["Dictionary","the spelling, the syllables, the pronunciation, the part of speech, the meanings in order, and often the origin","find the entry word between the guide words at the top of the page – they give the first and last entry on that page"],
      ["Thesaurus","the synonyms (and commonly the antonyms) grouped under a main idea","look up the sense you want, then choose the word your sentence needs"]
    ]},
    {k:"bul", items:["To find a word meaning the same as brave, use a **thesaurus**; to learn what a word means, how it is divided and how it is spoken, use a **dictionary**.","In the dictionary read every meaning before choosing; the first is not always the one your sentence wants.","**Definition** is the statement of a word’s meaning, given by the class and the differences.","Keep a list of the words you looked up, with the meaning you took and the sentence you used it in; it is the only vocabulary book that grows without being set."]},
    {k:"p", t:"**Sight words**: present, past, future, perfect, irregular, regular, synonym, antonym, definition, pronunciation. **Vocabulary**: principal parts, participle, tense, adverb, double negative, double comparison, thesaurus, entry word, guide word, conjugate."},
    {k:"p", t:"Read a short story this week; mark every verb that is not in its true tense and every double negative the characters use in speech, and say why the writer let them stand in dialogue but not in the narration."}
  ],
  focus:["Principal parts of verbs","Verb tenses","Adverbs and their kinds","Double negatives","Double comparison","Dictionary and thesaurus"],
  words:[
    {w:"principal parts", s:"prin-ci-pal parts", d:"the present, past and past participle forms of a verb", x:"The principal parts of eat are eat, ate, eaten."},
    {w:"participle", s:"par-ti-ci-ple", d:"a verb form used with have, has or had", x:"She has written the letter."},
    {w:"tense", s:"tense", d:"the form of a verb that shows time", x:"Change the verb to the past tense."},
    {w:"adverb", s:"ad-verb", d:"a word that describes a verb, adjective or another adverb", x:"He answered politely."},
    {w:"double negative", s:"dou-ble neg-a-tive", d:"using two negative words where one is correct", x:"'I don't have nothing' is a double negative."},
    {w:"double comparison", s:"dou-ble com-par-i-son", d:"using more or most together with -er or -est", x:"'More faster' is a double comparison and is wrong."},
    {w:"thesaurus", s:"the-sau-rus", d:"a book of synonyms and antonyms", x:"Use a thesaurus to find another word for happy."},
    {w:"entry word", s:"en-try word", d:"the word being defined in a dictionary", x:"The entry word is printed in bold."},
    {w:"guide word", s:"guide word", d:"the word at the top of a dictionary page showing the first or last entry", x:"Guide words help you find a word quickly."},
    {w:"conjugate", s:"con-ju-gate", d:"to give the forms of a verb in order", x:"Conjugate the verb to be in the present tense."}
  ],
  sight:["present","past","future","perfect","irregular","regular","synonym","antonym","definition","pronunciation"],
  phonics:[
    {p:"-en", label:"past participles ending in -en", words:["eaten","written","spoken","broken","chosen"]},
    {p:"-ought / -aught", label:"irregular past forms", words:["bought","brought","thought","caught","taught"]},
    {p:"-ly", label:"adverbs of manner", words:["quickly","politely","bravely","silently","neatly"]}
  ],
  grammar:[
    {q:"Give the principal parts of the verb 'write'.", a:"write, wrote, (have) written", why:"Present, past and past participle."},
    {q:"Give the principal parts of the verb 'speak'.", a:"speak, spoke, (have) spoken", why:"Speak is an irregular verb."},
    {q:"Correct the double negative: I did not see nobody in the yard.", a:"I did not see anybody in the yard.", why:"Use only one negative word in a sentence."},
    {q:"Correct the double comparison: This road is more smoother than that one.", a:"This road is smoother than that one.", why:"Do not use more together with the -er ending."},
    {q:"Correct the verb: She have finished her homework.", a:"She has finished her homework.", why:"The singular subject she takes has."},
    {q:"Underline the adverb: The child answered politely.", a:"politely", why:"It describes how the child answered."},
    {q:"Which book would you use to find a word that means the same as 'brave'?", a:"A thesaurus", why:"A thesaurus lists synonyms and antonyms."},
    {q:"What do the guide words at the top of a dictionary page tell you?", a:"The first and last entry words on that page.", why:"They help you find a word quickly."}
  ],
  pairs:[
    {a:"eat", b:"ate", kind:"principal parts"},
    {a:"go", b:"gone", kind:"principal parts"},
    {a:"quickly", b:"slowly", kind:"antonym"},
    {a:"brave", b:"bold", kind:"synonym"},
    {a:"dictionary", b:"definitions", kind:"related pair"},
    {a:"thesaurus", b:"synonyms", kind:"related pair"}
  ],
  passage:{
    title:"The Storyteller of Zwedru",
    text:"Old Sando had taught himself to read at the age of forty. He had bought a torn dictionary from a trader in Zwedru and had carried it in his bag for eleven years. When a word defeated him he did not skip it; he stopped, found it, and spoke it aloud until it belonged to him.\n\nThe children of the town gathered on his step in the evenings. He never told them a story the same way twice, because each week he had found new words and could not resist using them. One boy asked him why he bothered with so many words when a few would do. Sando thought for a while and said, 'A carpenter can build a stool with one tool. But a man with a full box builds a house.'",
    qs:[
      {q:"At what age did Sando teach himself to read?", a:"At the age of forty."},
      {q:"What did Sando do when he met a word he did not know?", a:"He stopped, found it in his dictionary, and spoke it aloud until he knew it."},
      {q:"Why did Sando never tell a story the same way twice?", a:"Because each week he had found new words and wanted to use them."},
      {q:"Explain the meaning of Sando's answer about the carpenter.", a:"He meant that a large vocabulary lets you express much more, just as a full toolbox lets a carpenter build far more than a single tool would allow."},
      {q:"Write the past and past participle of the verb 'buy' as used in the passage.", a:"bought, (had) bought"}
    ]
  },
  activities:[
    "In small groups, write sentences and conjugate verbs using the present, past and past participle",
    "Write sentences using appropriate adverbs",
    "Write sentences to correct double comparisons and double negatives",
    "Read and discuss selected short stories",
    "Read and discuss prose and its characteristics, and use the dictionary and thesaurus to define unfamiliar words"
  ],
  materials:["Grade 7 English pupil's book","Dictionary and thesaurus","Selected short stories","Exercise books"],
  assessment:["Individual work","Quizzes","Tests"]
}
,
{
  grade:7, period:"V", sem:"Two", icon:"🔗",
  title:"Phrases, Degrees of Adverbs and Adjectives · Literature",
  subtitle:"Prepositional, adverbial and adjectival phrases, pronouns and antecedents, degrees of comparison",
  outcomes:[
    "Learners are able to construct paragraphs using phrases and degrees of adverbs and adjectives, pronouns and antecedents, as well as regular and irregular verbs, and read and analyze prose and poetry"
  ],
  objectives:[
    "Construct paragraphs using regular and irregular verbs",
    "Write paragraphs using pronouns and their antecedents",
    "Use prepositional, adverbial and adjectival phrases effectively in paragraph writing",
    "Read and analyze poetry"
  ],
  note:"A <b>phrase</b> is a group of words without a subject and verb. A <b>prepositional phrase</b> begins with a preposition and ends with a noun or pronoun: <i>under the table</i>. An <b>antecedent</b> is the noun that a pronoun refers back to: in 'Musu lost her pen', Musu is the antecedent of her.",
  study:[
    /* ---- course text: Semester Two, Period V (guide pp. 9-10) ---- */
    {k:"h3", t:"Phrases"},
    {k:"p", t:"A **phrase** is a group of two or more words working together as one part of a sentence, without a subject and predicate of its own. A **prepositional phrase** begins with a **preposition** and ends with its object."},
    {k:"bul", items:["“The cat slept **under the wooden bench**” – the phrase tells **where**, so it does the work of an adverb: an **adverbial phrase**.","“The man **in the blue shirt** called us” – the phrase tells **which man**, so it does the work of an adjective: an **adjectival phrase**.","The same prepositional shape may serve either way; the question it answers decides: at the market in we met at the market (adverbial) and in the noise at the market woke us (adjectival).","To test, ask which one? of the noun before the phrase; if it answers, the phrase is adjectival. If not, ask how, when, where of the verb – the phrase is adverbial.","Other phrases do not begin with a preposition: the **verbal phrase** (must have gone), the **infinitive phrase** (to learn fast), and the **appositive phrase** set beside a noun."]},
    {k:"rule"},
    {k:"h3", t:"Pronouns and Their Antecedents"},
    {k:"p", t:"The word a pronoun stands for is its **antecedent**; in “The pupils collected **their** books”, the antecedent of **their** is **pupils**. A pronoun must agree with its antecedent in number, person and gender, and the antecedent must be plain."},
    {k:"table", head:["Kind of pronoun","The words","Its work"], rows:[
      ["Personal","I, you, he, she, it, we, they","stands in place of a named person or thing"],
      ["Possessive","my, mine, your, yours, his, her, hers, our, ours, their, theirs, its","shows ownership"],
      ["Reflexive / intensive","myself, yourself, himself, itself, ourselves, themselves","turns the action back on the subject, or drives it home"],
      ["Demonstrative","this, that, these, those","points out"],
      ["Relative","who, whom, whose, which, that","introduces a dependent clause and refers back"],
      ["Interrogative","who, whom, whose, which, what","asks"],
      ["Indefinite","each, every, either, neither, some, many, all, nobody","names without pressing which ones"]
    ]},
    {k:"bul", items:["**Who** is for the subject, **whom** for the object: Who called you? / You called whom? – answer with he or him; if him serves, whom is right.","A pronoun whose antecedent is singular in sense takes the singular: “Every boy must bring **his** own pencil, not their”.","Do not let the antecedent be hidden: in “Kou told Musa that **his** father had come”, say whose father, or write the name again.","Do not put they, it, this where the reader must guess the thing meant."]},
    {k:"rule"},
    {k:"h3", t:"Degrees of Comparison"},
    {k:"p", t:"Adjectives and adverbs are compared in three **degrees**: the **positive** (the quality named), the **comparative** (two things weighed against each other), and the **superlative** (three or more, one set above the rest)."},
    {k:"table", head:["Positive","Comparative","Superlative","How it is formed"], rows:[
      ["tall, fast, kind","taller, faster, kinder","tallest, fastest, kindest","one syllable: -er, -est"],
      ["strong, bright","stronger, brighter","strongest, brightest","final consonant doubled where needed"],
      ["happy, early","happier, earlier","happiest, earliest","y changed to i"],
      ["careful, quickly","more careful, more quickly","most careful, most quickly","two syllables and more, and all adverbs in -ly"],
      ["good, well; bad; much; many","better; worse; more; more","best; worst; most; most","irregular"]
    ]},
    {k:"bul", items:["Never double the comparison: more smarter is wrong; so is most unkindest.","The comparative takes **than**; the superlative takes **the** and of or in: “bigger **than**”; “the biggest **of** the four”.","Use the comparative for two only: the taller of the twins, not the tallest.","Adverbs of manner are compared by more / most, except the short irregular ones (soon, sooner, soonest)."]},
    {k:"rule"},
    {k:"h3", t:"Regular and Irregular Verbs in the Paragraph"},
    {k:"bul", items:["A **regular verb** builds its past and past participle on the base with -ed: walked, played, carried (y kept), stopped (consonant doubled).","An **irregular verb** changes its own shape: begin, began, begun; break, broke, broken; come, came, come; see, saw, seen – and must be learned in families.","Write the descriptive paragraph with the verbs that carry movement and change – grew, darkened, rose, glittered, fell – and put one comparison in it, and one adjectival phrase.","**Sight words**: between, among, beneath, toward, during, although, whose, their, whom, itself. **Vocabulary**: phrase, preposition, prepositional phrase, adverbial phrase, adjectival phrase, antecedent, positive degree, comparative, superlative, irregular verb.","**Prefixes of place and time** at work in these pages: pre- (before) – prepare, prefix; inter- (between, among) – interact, international, interrupt; sub- (under) – subway, submit."]},
    {k:"p", t:"Write one paragraph describing the market at dawn: six sentences, of which one uses a comparison, one carries an adjectival phrase, and one an adverbial phrase; then underline the antecedent of every pronoun you used."}
  ],
  focus:["Prepositional phrases","Adverbial phrases","Adjectival phrases","Pronouns and antecedents","Degrees of comparison","Regular and irregular verbs"],
  words:[
    {w:"phrase", s:"phrase", d:"a group of words without a subject and a verb", x:"In the morning is a phrase."},
    {w:"preposition", s:"prep-o-si-tion", d:"a word showing position or relation, such as in, on, under", x:"The ball rolled under the bench."},
    {w:"prepositional phrase", s:"prep-o-si-tion-al phrase", d:"a phrase beginning with a preposition", x:"She waited beside the road."},
    {w:"adverbial phrase", s:"ad-verb-i-al phrase", d:"a phrase that works like an adverb", x:"He arrived after the rain stopped."},
    {w:"adjectival phrase", s:"ad-jec-ti-val phrase", d:"a phrase that describes a noun", x:"The girl with the red bag is my sister."},
    {w:"antecedent", s:"an-te-ced-ent", d:"the noun a pronoun refers back to", x:"In 'Kollie took his book', Kollie is the antecedent."},
    {w:"positive degree", s:"pos-i-tive de-gree", d:"the simple form of an adjective or adverb", x:"tall"},
    {w:"comparative", s:"com-par-a-tive", d:"the form comparing two things", x:"taller"},
    {w:"superlative", s:"su-per-la-tive", d:"the form comparing three or more", x:"tallest"},
    {w:"irregular verb", s:"ir-reg-u-lar verb", d:"a verb that does not add -ed in the past", x:"go became went, not goed."}
  ],
  sight:["between","among","beneath","toward","during","although","whose","their","whom","itself"],
  phonics:[
    {p:"-er", label:"comparative ending", words:["taller","faster","kinder","stronger","brighter"]},
    {p:"-est", label:"superlative ending", words:["tallest","fastest","kindest","strongest","brightest"]},
    {p:"pre- / inter-", label:"prefixes of position", words:["prepare","prefix","interact","international","interrupt"]}
  ],
  grammar:[
    {q:"Underline the prepositional phrase: The cat slept under the wooden bench.", a:"under the wooden bench", why:"It begins with the preposition under and ends with a noun."},
    {q:"Is the phrase adverbial or adjectival? The man in the blue shirt called me.", a:"Adjectival", why:"It describes the noun man, telling which one."},
    {q:"Is the phrase adverbial or adjectival? We shall meet after the assembly.", a:"Adverbial", why:"It tells when we shall meet, so it modifies the verb."},
    {q:"Name the antecedent: The pupils collected their books.", a:"pupils", why:"Their refers back to pupils."},
    {q:"Give the comparative and superlative of 'good'.", a:"better, best", why:"Good is irregular in comparison."},
    {q:"Give the comparative and superlative of 'careful'.", a:"more careful, most careful", why:"Longer adjectives use more and most."},
    {q:"Correct the pronoun: Every boy must bring their own pencil.", a:"Every boy must bring his own pencil.", why:"Every boy is singular, so the pronoun must be singular."},
    {q:"Give the past and past participle of the irregular verb 'begin'.", a:"began, (have) begun", why:"Begin changes its vowel rather than adding -ed."}
  ],
  pairs:[
    {a:"tall", b:"tallest", kind:"degree of comparison"},
    {a:"good", b:"better", kind:"irregular comparison"},
    {a:"pronoun", b:"antecedent", kind:"related pair"},
    {a:"begin", b:"begun", kind:"principal parts"},
    {a:"beneath", b:"above", kind:"antonym"},
    {a:"quick", b:"rapid", kind:"synonym"}
  ],
  passage:{
    title:"The Bridge at Kakata",
    text:"Beyond the last house of the town, a narrow bridge crossed the river at Kakata. It had been built of planks by men who were now old, and every year the water took a little more of it. The children who walked to school on the far bank knew which boards to trust.\n\nOne morning in the heavy rains, a girl named Yah stopped at the near end and would not cross. Her friends laughed at her from the middle of the bridge. But Yah had seen what they had not: a plank near the far side had lifted in the night and lay crooked against its neighbour. She called them back, and they returned, complaining. That afternoon the plank fell into the brown water and was carried away. After that, nobody laughed at Yah for looking twice.",
    qs:[
      {q:"Where was the bridge and what was it made of?", a:"Beyond the last house of the town at Kakata, and it was built of planks."},
      {q:"Why would Yah not cross the bridge that morning?", a:"She had seen that a plank near the far side had lifted in the night and lay crooked."},
      {q:"Write out one prepositional phrase from the first paragraph.", a:"Any of: beyond the last house, at Kakata, of planks, on the far bank."},
      {q:"What is the theme of this passage?", a:"That careful observation and courage in the face of mockery can prevent disaster."},
      {q:"Find the antecedent of 'they' in 'She called them back, and they returned'.", a:"Her friends."}
    ]
  },
  activities:[
    "Construct paragraphs using regular and irregular verbs in sentences",
    "In groups, read passages and identify different kinds of phrases",
    "Develop sentences using the phrases identified in the passages read",
    "Write paragraphs using pronouns and antecedents in sentences",
    "Read and analyze a selected poem, identifying degrees of comparison used by the poet"
  ],
  materials:["Grade 7 English pupil's book","Selected prose and poetry","Exercise books","Dictionary"],
  assessment:["Project","Quizzes","Tests"]
},
{
  grade:7, period:"VI", sem:"Two", icon:"🧑‍🎓",
  title:"Sentence Patterns and Biographies · Literature",
  subtitle:"Sentence patterns, synonyms and antonyms, writing biographies, literary terms",
  outcomes:[
    "Learners are able to construct effective sentences using different patterns, as well as write biographies, and read and analyze prose and poetry"
  ],
  objectives:[
    "Write effective sentences using different sentence patterns",
    "Apply antonyms and synonyms in sentences",
    "Develop and write biographies",
    "Read and interpret literary terms in passages, such as simile, metaphor and euphemism"
  ],
  note:"A <b>biography</b> is the story of a person's life written by someone else; an <b>autobiography</b> is written by the person themselves. A <b>euphemism</b> is a gentle expression used in place of a harsh one — we say 'passed away' instead of 'died'.",
  study:[
    /* ---- course text: Semester Two, Period VI (guide pp. 11-12) ---- */
    {k:"h3", t:"Sentence Patterns"},
    {k:"p", t:"English sentences fall into a small number of **patterns** built on the verb. The chief of them are the two that carry a **complement** – the word that must follow, or the sense falls to the ground – and the pattern this period takes up is that pair."},
    {k:"table", head:["Pattern","Its shape","Example","What the fifth part does"], rows:[
      ["1","Subject + Verb","The children sang.","the verb is complete in itself"],
      ["2","Subject + Verb + Object","Musu wrote a letter.","the object takes the action"],
      ["4","Subject + Verb + Object + Complement","We made Korto our captain.","the complement names or describes the object"],
      ["6","Subject + Linking Verb + Predicate Adjective","The night became cold.","the predicate adjective completes the subject"]
    ]},
    {k:"bul", items:["A complement is wanted, not added: We made Korto leaves the mind waiting, and The night became still more.","Do not put an adverb where the pattern wants a predicate adjective: “the food smelled **good**”, not well.","Practise until each sentence you write can be numbered: give the pattern of every sentence in one paragraph of your own writing.","Sentences built always on one pattern are monotonous; turn the pattern with the thought and the writing takes a voice."]},
    {k:"rule"},
    {k:"h3", t:"Synonyms and Antonyms"},
    {k:"p", t:"**Synonyms** are words of like meaning; **antonyms** are words of opposite meaning. Neither pair is exact: the synonym chooses the word that fits the sentence, and the antonym marks the edge of the meaning."},
    {k:"table", head:["Word","Synonyms","Antonym"], rows:[
      ["courageous","brave, bold, fearless","timid"],
      ["generous","open-handed, magnanimous","selfish, mean, stingy"],
      ["diligent","hard-working, industrious","lazy"],
      ["ancient","old, primeval","modern"],
      ["honest","truthful, upright","dishonest"]
    ]},
    {k:"bul", items:["Choose the synonym by the sentence: “a **rigid** rule, a **rigid** frame, a **stiff** neck” – the words are near, but they are not interchangeable.","The thesaurus is the book of synonyms; the dictionary still holds the meaning, so look the word up before you take it from a list.","Gain in writing: instead of the fourth very good, say admirable, sound, skilful – the new word saves the sentence."]},
    {k:"rule"},
    {k:"h3", t:"Writing a Biography"},
    {k:"p", t:"A **biography** is the account of a real life drawn from records and from those who knew the person; it is written in the third person, and it must be true before it is interesting."},
    {k:"num", items:["Choose the person, and fix the reason the life is worth writing.","Gather the particulars: birth, family, home, school, the work, the difficulty, the achievement, and the end of the life.","Sort the material into the order of time, and mark what carries the theme of the life.","Outline it – the topic sentence of the whole, then one paragraph to each stage.","Draft in the third person, keeping the tenses true: the past for the events, the present for what still holds.","Add one quotation or one act that lets the reader see the character, not only the record.","Revise for the point (what the life **came to**), and edit for the marks and the spelling of names."]},
    {k:"bul", items:["An **autobiography** is the same life told by the one who lived it, in the first person; to read a president’s own account of himself, take his **autobiography**.","A **memoir** takes one part of a life or one time of it, and a **tribute** is a writing made in honour of a person, commonly after the death.","**Endings of the period**: -ment makes the act or the result (achievement, announcement, government, development, agreement); -tion makes the same (dedication, education, celebration, determination, contribution); and the roots bio- (life) and auto- (self) stand in biography, biology, autobiography, automatic, autograph."]},
    {k:"rule"},
    {k:"h3", t:"Announcements"},
    {k:"p", t:"An **announcement** (a notice) tells a number of people a thing they need to know, and it is written to be read at a glance. Its parts are the **heading** naming the body that issues it, the **title** of the matter, the **date**, the short **body**, and the **signature** of the sender."},
    {k:"bul", items:["Answer in the notice, plainly and in order: what, when, where, who is concerned, and whom to ask.","Use short sentences in the present tense; put the day, the hour and the place in their own line if the notice is posted.","Keep to one matter; two notices pinned together are read as one and understood as neither.","Read it aloud to a partner before it goes out: if he cannot tell the time and the place from the reading, write it again.","Practice: announce the class library opening, the clean-up day, and the speech night, in not more than six lines each."]},
    {k:"rule"},
    {k:"h3", t:"Literary Terms in Reading"},
    {k:"p", t:"Read the text for its terms as well as for its tale. To **interpret a literary term** is to name the device in the line and say what the line gains by it."},
    {k:"table", head:["Term","What it means","Line that shows it"], rows:[
      ["Simile","comparison with like or as","He is as strong as an ox."],
      ["Metaphor","one thing said to be another","My mother is my shelter."],
      ["Personification","human powers given to a thing","The wind whispered through the palm trees."],
      ["Euphemism","the soft or indirect word put for the hard one","“The old man passed away”, for died"],
      ["Flashback","the story carried back to an earlier time","the war seen again in the middle of the peace"],
      ["Point of view","who is telling it","first person (I), second (you), third (he, she, they)"]
    ]},
    {k:"p", t:"**Sight words**: career, legacy, influence, struggle, dedication, honour, service, reputation, memoir, tribute. **Vocabulary**: biography, euphemism, personification, flashback, point of view, synonym, antonym, announcement, pattern, achievement."},
    {k:"p", t:"End of Grade Seven: write sentences in every pattern without a mistake in the complement; hold the verb through its three principal parts and avoid the double negative; find the antecedent and repair the pronoun that has lost it; write a paragraph with its topic sentence and its kinds; dramatize a story; and write a biography, a notice and a letter each in its own format."}
  ],
  focus:["Sentence patterns","Synonyms and antonyms","Biography writing","Announcements","Literary terms","Point of view and flashback"],
  words:[
    {w:"biography", s:"bi-og-ra-phy", d:"the story of a person's life written by another person", x:"She read a biography of Angie Brooks."},
    {w:"euphemism", s:"eu-phe-mism", d:"a mild expression used in place of a harsh one", x:"'He passed away' is a euphemism for 'he died'."},
    {w:"personification", s:"per-son-i-fi-ca-tion", d:"giving human qualities to something not human", x:"The wind whispered through the palms."},
    {w:"flashback", s:"flash-back", d:"a scene that returns to an earlier time", x:"The flashback showed his childhood."},
    {w:"point of view", s:"point of view", d:"the position from which a story is told", x:"The story is told from the first-person point of view."},
    {w:"synonym", s:"syn-o-nym", d:"a word with the same or nearly the same meaning", x:"Big and large are synonyms."},
    {w:"antonym", s:"an-to-nym", d:"a word with the opposite meaning", x:"Hot and cold are antonyms."},
    {w:"announcement", s:"an-nounce-ment", d:"a public statement giving information", x:"The principal read an announcement about the sports day."},
    {w:"pattern", s:"pat-tern", d:"the regular arrangement of parts in a sentence", x:"Subject–verb–object is a common sentence pattern."},
    {w:"achievement", s:"a-chieve-ment", d:"something important that a person has done", x:"Her greatest achievement was building the school."}
  ],
  sight:["career","legacy","influence","struggle","dedication","honour","service","reputation","memoir","tribute"],
  phonics:[
    {p:"-ment", label:"nouns ending in -ment", words:["achievement","announcement","government","development","agreement"]},
    {p:"-tion", label:"nouns ending in -tion", words:["dedication","education","celebration","determination","contribution"]},
    {p:"bio- / auto-", label:"word roots meaning life / self", words:["biography","biology","autobiography","automatic","autograph"]}
  ],
  grammar:[
    {q:"Name the sentence pattern: The children sang. (S–V or S–V–O?)", a:"Subject–Verb (S–V)", why:"There is no object after the verb."},
    {q:"Name the sentence pattern: Musu wrote a letter.", a:"Subject–Verb–Object (S–V–O)", why:"Letter receives the action of wrote."},
    {q:"Give a synonym for 'courageous'.", a:"brave (or bold, fearless)", why:"Synonyms have the same or nearly the same meaning."},
    {q:"Give an antonym for 'generous'.", a:"selfish (or mean, stingy)", why:"Antonyms have opposite meanings."},
    {q:"Identify the literary term: The wind whispered through the palm trees.", a:"Personification", why:"The wind is given the human ability to whisper."},
    {q:"Identify the literary term: He is as strong as an ox.", a:"Simile", why:"It compares using as."},
    {q:"Rewrite using a euphemism: The old man died last night.", a:"The old man passed away last night.", why:"A euphemism softens a harsh expression."},
    {q:"Would you use a biography or an autobiography to read a president's own account of her life?", a:"An autobiography", why:"An autobiography is written by the person themselves."}
  ],
  pairs:[
    {a:"biography", b:"autobiography", kind:"contrast"},
    {a:"courageous", b:"brave", kind:"synonym"},
    {a:"generous", b:"selfish", kind:"antonym"},
    {a:"passed away", b:"died", kind:"euphemism"},
    {a:"simile", b:"like or as", kind:"related pair"},
    {a:"metaphor", b:"direct comparison", kind:"related pair"}
  ],
  passage:{
    title:"Mother to Son",
    text:"Well, son, I'll tell you:\nLife for me ain't been no crystal stair.\nIt's had tacks in it,\nAnd splinters,\nAnd boards torn up,\nAnd places with no carpet on the floor —\nBare.\n\nBut all the time\nI'se been a-climbin' on,\nAnd reachin' landin's,\nAnd turnin' corners,\nAnd sometimes goin' in the dark\nWhere there ain't been no light.\n\nSo boy, don't you turn back.\nDon't you set down on the steps\n'Cause you finds it's kinder hard.\nDon't you fall now —\nFor I'se still goin', honey,\nI'se still climbin',\nAnd life for me ain't been no crystal stair.",
    qs:[
      {q:"To whom is the mother speaking in this poem?", a:"To her son."},
      {q:"What does the mother compare her life to?", a:"To a staircase — a rough, broken one rather than a crystal stair."},
      {q:"Name the literary device in 'Life for me ain't been no crystal stair' and explain it.", a:"It is a metaphor: her life is compared directly to a stair, without using like or as, to show it has been hard rather than smooth and beautiful."},
      {q:"What advice does the mother give her son?", a:"Not to turn back or sit down when life is hard, but to keep climbing as she has done."},
      {q:"How can you tell this is poetry rather than prose?", a:"It is written in short lines and stanzas with strong rhythm and repeated phrases, not in ordinary paragraphs."}
    ]
  },
  activities:[
    "In groups, develop sentences using different sentence patterns",
    "Write correct sentences using antonyms and synonyms",
    "Identify outstanding Liberians and write short biographies of them",
    "Write and read announcements to the class",
    "Read and interpret literary terms in prose and poetry: simile, metaphor, personification, point of view, flashback and euphemism"
  ],
  materials:["Grade 7 English pupil's book","Selected poems","Exercise books","Dictionary"],
  assessment:["Assignment","Individual work","Quizzes","Tests"]
}
,
/* ================= GRADE 8 ================= */
{
  grade:8, period:"I", sem:"One", icon:"🖋️",
  title:"Composition Development · Parts of Speech and the Short Story",
  subtitle:"Parts of speech, subject and predicate, topic sentences, elements of short stories",
  outcomes:[
    "Learners are able to develop effective paragraphs using grammar mechanics, demonstrate effective communication skills, and read and analyze prose and poetry"
  ],
  objectives:[
    "Classify and use parts of speech to develop composition sentences",
    "Construct paragraphs using subject and predicate correctly",
    "Develop effective composition using topic sentences",
    "Identify and discuss the elements of short stories: setting, theme, plot and characters"
  ],
  note:"The eight <b>parts of speech</b> are noun, pronoun, verb, adjective, adverb, preposition, conjunction and interjection. Every sentence has a <b>subject</b> (who or what the sentence is about) and a <b>predicate</b> (what is said about the subject).",
  study:[
    /* ---- course text: Semester One, Period I (guide p. 13) ---- */
    {k:"h3", t:"Composition Development: Parts of Speech in Writing"},
    {k:"p", t:"**Composition development** is the work of building a piece of writing so that every sentence carries its weight. It rests on two things: knowing the **parts of speech** and knowing how a sentence is built."},
    {k:"h3", t:"The Parts of Speech"},
    {k:"table", head:["Part of speech","What it does","Example from the guide"], rows:[
      ["Noun","names a person, place, thing or idea","Fatu, market, courage"],
      ["Pronoun","stands in for a noun","she, they, ours"],
      ["Verb","shows action or being","walked, is, seems"],
      ["Adjective","describes or limits a noun","tall boy, blue shirt"],
      ["Adverb","modifies a verb, adjective or adverb","She walked quickly."],
      ["Preposition","stands before a noun or pronoun as its object","before the rains"],
      ["Conjunction","joins words, phrases or clauses","I called, but nobody answered."],
      ["Interjection","expresses feeling, with an exclamation mark","Alas! The harvest failed."]
    ]},
    {k:"p", t:"Practise naming them: **quickly** in “She walked quickly” is an **adverb**; **but** in “I called, but nobody answered” is a **conjunction**; **Alas** in “Alas! The harvest failed” is an **interjection**."},
    {k:"rule"},
    {k:"h3", t:"Subject and Predicate"},
    {k:"p", t:"Every complete sentence has a **subject** (who or what the sentence is about) and a **predicate** (what is said about it)."},
    {k:"bul", items:["The **simple subject** is the subject word alone, without its modifiers: in “The tall boy in the blue shirt won the race”, the simple subject is **boy**.","The **complete predicate** is the verb together with everything it governs: in “The farmers planted rice before the rains” it is **planted rice before the rains**.","A **predicate** can be supplied to finish a thought: “The new library **opened last Monday**.”"]},
    {k:"rule"},
    {k:"h3", t:"Topic Sentences and Paragraph Writing"},
    {k:"p", t:"A **topic sentence** states the main idea of a paragraph, and the rest of the paragraph supports it. A good topic sentence is a complete sentence, not a title: for a paragraph about market day, write “**Market day in our town begins long before sunrise**,” not “Market day.”"},
    {k:"num", items:["State the one idea the paragraph will develop.","Place the topic sentence first so the reader knows what to expect.","Give details, examples or reasons that support it.","Remove every sentence that does not support it.","Close with a sentence that sums the paragraph up."]},
    {k:"rule"},
    {k:"h3", t:"Elements of the Short Story"},
    {k:"table", head:["Element","What it answers"], rows:[
      ["Setting","Where and when the story happens"],
      ["Plot","What happens, in what order"],
      ["Theme","What the story means; the lesson or idea behind it"],
      ["Characters","Who the story happens to"],
      ["Conflict","The struggle that drives the plot"],
      ["Point of view","Who is telling the story"]
    ]},
    {k:"p", t:"It is the **setting** that tells where and when a story happens. The **protagonist** is the chief character; the **antagonist** opposes that character. Both endings belong to the story, not to the reader's wish."},
    {k:"h3", t:"Types of Character"},
    {k:"bul", items:["A **dynamic** character is changed by what happens in the story.","A **static** character stays the same from the first page to the last.","A **flat** character is drawn with one or two traits only; a **round** character is complex and surprising.","Words for people built with **-ist** name the person: **protagonist, antagonist, novelist, journalist, scientist**."]},
    {k:"p", t:"Spelling that belongs with this unit: **-ence / -ance** make abstract nouns – **sentence, difference, importance, appearance, evidence**; and **con-**, meaning with or together, begins **conflict, conjunction, conclusion, construct, connect**."},
    {k:"rule"},
    {k:"h3", t:"Words to Know at Sight"},
    {k:"p", t:"**climax · resolution · exposition · dynamic · static · flat · round · suspense · foreshadow · mood**"}
  ],
  focus:["Parts of speech","Subject and predicate","Topic sentences","Composition writing","Elements of the short story","Types of characters"],
  words:[
    {w:"composition", s:"com-po-si-tion", d:"a piece of writing developed on one subject", x:"He wrote a composition about the rainy season."},
    {w:"noun", s:"noun", d:"a word naming a person, place, thing or idea", x:"Teacher, market and honesty are nouns."},
    {w:"pronoun", s:"pro-noun", d:"a word used in place of a noun", x:"She, they and it are pronouns."},
    {w:"conjunction", s:"con-junc-tion", d:"a word that joins words or groups of words", x:"And, but and because are conjunctions."},
    {w:"interjection", s:"in-ter-jec-tion", d:"a word expressing sudden feeling", x:"Oh! Alas! Hurrah!"},
    {w:"subject", s:"sub-ject", d:"the part of a sentence naming who or what it is about", x:"In 'the driver waited', the driver is the subject."},
    {w:"predicate", s:"pred-i-cate", d:"the part of a sentence that tells about the subject", x:"In 'the driver waited', waited is the predicate."},
    {w:"protagonist", s:"pro-tag-o-nist", d:"the main character in a story", x:"The protagonist struggles against poverty."},
    {w:"antagonist", s:"an-tag-o-nist", d:"the character who opposes the main character", x:"The landlord is the antagonist."},
    {w:"conflict", s:"con-flict", d:"the struggle at the centre of a story", x:"The conflict is between duty and desire."}
  ],
  sight:["climax","resolution","exposition","dynamic","static","flat","round","suspense","foreshadow","mood"],
  phonics:[
    {p:"-ist", label:"nouns naming a person", words:["protagonist","antagonist","novelist","journalist","scientist"]},
    {p:"-ence / -ance", label:"abstract nouns", words:["sentence","difference","importance","appearance","evidence"]},
    {p:"con-", label:"the prefix con- meaning with or together", words:["conflict","conjunction","conclusion","construct","connect"]}
  ],
  grammar:[
    {q:"Name the part of speech of 'quickly' in: She walked quickly.", a:"Adverb", why:"It tells how she walked."},
    {q:"Name the part of speech of 'but' in: I called, but nobody answered.", a:"Conjunction", why:"It joins two groups of words."},
    {q:"Name the part of speech of 'Alas' in: Alas! The harvest failed.", a:"Interjection", why:"It expresses sudden feeling."},
    {q:"Underline the simple subject: The tall boy in the blue shirt won the race.", a:"boy", why:"The simple subject is the main noun without its describing words."},
    {q:"Underline the complete predicate: The farmers planted rice before the rains.", a:"planted rice before the rains", why:"The predicate is everything said about the subject."},
    {q:"Supply a predicate: The new library ___", a:"opened last Monday. (any sensible predicate)", why:"A sentence needs a predicate to be complete."},
    {q:"Write a topic sentence for a paragraph about market day.", a:"Market day in our town begins long before sunrise. (any sentence stating the main idea)", why:"A topic sentence states the main idea the paragraph will develop."},
    {q:"Which element of a short story tells where and when it happens?", a:"The setting", why:"Setting is time and place."}
  ],
  pairs:[
    {a:"protagonist", b:"antagonist", kind:"contrast"},
    {a:"subject", b:"predicate", kind:"related pair"},
    {a:"noun", b:"names a thing", kind:"part of speech"},
    {a:"conjunction", b:"joins words", kind:"part of speech"},
    {a:"conflict", b:"struggle", kind:"synonym"},
    {a:"climax", b:"turning point", kind:"synonym"}
  ],
  passage:{
    title:"The Examination Fee",
    text:"Fatu had passed every test that year, but the examination fee stood between her and the certificate. Her mother sold pepper at the junction and counted her coins each night in a tin. By March the tin held less than half.\n\nFatu began waking at four to help at the stall before school. She said nothing about it to her teachers. One morning Mr Weah, who taught mathematics, bought pepper from a girl in a school uniform and recognised her handwriting on the paper cone she had folded. He said nothing then. At the end of that week the school announced a small fund for learners who worked to support their families, and Fatu's name was the first on the list. She never learned who had proposed it, though she wondered all her life.",
    qs:[
      {q:"What stood between Fatu and her certificate?", a:"The examination fee, which her mother could not fully afford."},
      {q:"Who is the protagonist of this story?", a:"Fatu."},
      {q:"What is the central conflict?", a:"Fatu's struggle to pay her examination fee despite her family's poverty."},
      {q:"How did Mr Weah discover Fatu's situation?", a:"He bought pepper from a girl in school uniform and recognised her handwriting on the paper cone she had folded."},
      {q:"State the setting and the theme of the story.", a:"The setting is a Liberian town at a market junction and a school, around March of a school year. The theme is quiet generosity and the dignity of hard work."}
    ]
  },
  activities:[
    "In groups, generate sentences using each of the parts of speech",
    "Complete sentences by supplying the missing subjects and predicates",
    "Read, identify and discuss the elements of a short story: setting, theme, plot and characters",
    "Write a short story of your own and read it to the class",
    "Develop compositions using clear topic sentences and supporting details"
  ],
  materials:["Grade 8 English pupil's book","Selected short stories and poems","Exercise books","Dictionary"],
  assessment:["Assignment","Individual work","Quizzes","Tests"]
},
{
  grade:8, period:"II", sem:"One", icon:"🧩",
  title:"Paragraph Development · Objects and Figures of Speech",
  subtitle:"Compound subjects and predicates, direct and indirect objects, figures of speech, oral communication",
  outcomes:[
    "Learners are able to develop skills using compound subject and compound predicate, direct and indirect objects, and read and analyze prose and poetry"
  ],
  objectives:[
    "Demonstrate effective paragraph writing using verb conjugation in given sentences",
    "Develop paragraphs using compound subject and compound predicate",
    "Differentiate and use direct and indirect objects in sentences and paragraphs",
    "Demonstrate oral communication skills through reading short stories and poems"
  ],
  note:"A <b>direct object</b> receives the action of the verb (She wrote <i>a letter</i>). An <b>indirect object</b> tells to whom or for whom the action is done (She wrote <i>her aunt</i> a letter). A <b>compound subject</b> has two or more subjects joined by and or or.",
  study:[
    /* ---- course text: Semester One, Period II (guide pp. 14-15) ---- */
    {k:"h3", t:"Paragraph Development"},
    {k:"p", t:"A paragraph is developed by **expanding one main idea** with sentences that explain, illustrate or prove it. The main idea sits in the topic sentence; the rest of the paragraph is its evidence."},
    {k:"h3", t:"Compound Subject and Compound Predicate"},
    {k:"table", head:["Thing","What it is","Example"], rows:[
      ["Compound subject","two or more subjects sharing one verb","Fatu and her brother sell pepper."],
      ["Compound predicate","one subject doing two or more things","The child washed and dried the plates."],
      ["Verb agreement","the verb follows the real subject","Fatu and her brother sell (not sells)."]
    ]},
    {k:"p", t:"Underline the compound subject in “**Fatu and her brother** sell pepper”, and the compound predicate in “The child **washed and dried** the plates”."},
    {k:"rule"},
    {k:"h3", t:"Direct and Indirect Objects"},
    {k:"bul", items:["The **direct object** receives the action of the verb: in “The teacher marked **the scripts**”, scripts is the direct object.","The **indirect object** tells to whom or for whom the action is done: in “Mother bought **the twins** new shoes”, twins is the indirect object and shoes the direct object.","Ask the questions in this order: verb → whom or what? (direct) → to or for whom? (indirect)."]},
    {k:"h3", t:"Conjugation"},
    {k:"p", t:"To **conjugate** a verb is to give its forms for person, number and time. The verb **to eat** for he: present **he eats**, past **he ate**, future **he will eat**."},
    {k:"rule"},
    {k:"h3", t:"Figures of Speech"},
    {k:"table", head:["Figure","What it does","Example"], rows:[
      ["Simile","compares with like or as","The palm stands like a sentinel."],
      ["Metaphor","says one thing is another","The harvest is gold."],
      ["Personification","gives human acts to a thing","The thunder grumbled all night."],
      ["Hyperbole","deliberate exaggeration","I have told you a million times."],
      ["Onomatopoeia","the word imitates the sound","The snake hissed in the grass."],
      ["Alliteration","repeated beginning sounds","wild winds whipped the water"],
      ["Irony","the words mean the opposite of what is said","a fire station burning down"]
    ]},
    {k:"p", t:"Figures of speech carry meaning: they let a writer say a thing in an image instead of a plain statement. Learn to **identify** them in a passage and to **use** them in your own writing – but never stack two of them where one would strike true."},
    {k:"p", t:"Words built on **hyper-** (over, beyond) belong here: **hyperbole, hyperactive, hypertension**; **-ic** forms the adjectives **ironic, poetic, dramatic, heroic, realistic**; and **onomatopoeic** words are sound-words – **buzz, crash, hiss, splash, creak**."},
    {k:"rule"},
    {k:"h3", t:"Oral Communication: Announcements and Interviews"},
    {k:"num", items:["State your purpose at once: what is happening, to whom, and why.","Give the facts in order – what, when, where, who to contact.","Speak slowly, with the stress on the words the listener must keep.","Keep the announcement short enough to be held in the memory.","Close by repeating the time and place."]},
    {k:"p", t:"For an **interview**, prepare the questions beforehand, listen to the answer instead of waiting for your turn, and take notes. Words to know: **exaggerate, imitate, dialogue, script, advocacy, abstinence, announce, audience, fluent, expression**."}
  ],
  focus:["Compound subject and predicate","Direct and indirect objects","Verb conjugation","Figures of speech","Oral communication","Announcements and interviews"],
  words:[
    {w:"compound subject", s:"com-pound sub-ject", d:"two or more subjects sharing the same verb", x:"Musu and Kollie walked to school."},
    {w:"compound predicate", s:"com-pound pred-i-cate", d:"two or more verbs sharing the same subject", x:"She washed and ironed the uniform."},
    {w:"direct object", s:"di-rect ob-ject", d:"the word that receives the action of the verb", x:"He kicked the ball."},
    {w:"indirect object", s:"in-di-rect ob-ject", d:"the word telling to whom or for whom the action is done", x:"He gave his sister the ball."},
    {w:"hyperbole", s:"hy-per-bo-le", d:"a deliberate exaggeration for effect", x:"I have told you a thousand times."},
    {w:"onomatopoeia", s:"on-o-mat-o-poe-ia", d:"a word that imitates a sound", x:"The bees buzzed and the door creaked."},
    {w:"irony", s:"i-ro-ny", d:"saying the opposite of what is meant, or an unexpected outcome", x:"It is ironic that the fire station burned down."},
    {w:"alliteration", s:"al-lit-er-a-tion", d:"the repetition of the first consonant sound", x:"Peter picked a peck of peppers."},
    {w:"conjugation", s:"con-ju-ga-tion", d:"the forms of a verb across the tenses", x:"Write the conjugation of to go."},
    {w:"interview", s:"in-ter-view", d:"a meeting in which one person questions another", x:"They role-played a radio interview."}
  ],
  sight:["exaggerate","imitate","dialogue","script","advocacy","abstinence","announce","audience","fluent","expression"],
  phonics:[
    {p:"hyper-", label:"the prefix hyper- meaning over or beyond", words:["hyperbole","hyperactive","hypertension","hyperlink","hypermarket"]},
    {p:"-ic", label:"adjectives ending in -ic", words:["ironic","poetic","dramatic","heroic","realistic"]},
    {p:"onomatopoeic sounds", label:"sound words", words:["buzz","crash","hiss","splash","creak"]}
  ],
  grammar:[
    {q:"Underline the compound subject: Fatu and her brother sell pepper.", a:"Fatu and her brother", why:"Two subjects share the verb sell."},
    {q:"Underline the compound predicate: The child washed and dried the plates.", a:"washed and dried the plates", why:"Two verbs share the subject child."},
    {q:"Name the direct object: The teacher marked the scripts.", a:"scripts", why:"Scripts receives the action of marked."},
    {q:"Name the indirect object: Mother bought the twins new shoes.", a:"twins", why:"It tells for whom the shoes were bought."},
    {q:"Identify the figure of speech: The thunder grumbled all night.", a:"Personification", why:"Thunder is given the human action of grumbling."},
    {q:"Identify the figure of speech: I have told you a million times.", a:"Hyperbole", why:"It is a deliberate exaggeration."},
    {q:"Identify the figure of speech: The snake hissed in the grass.", a:"Onomatopoeia", why:"Hissed imitates the sound."},
    {q:"Conjugate 'to eat' in the present, past and future for 'he'.", a:"he eats, he ate, he will eat", why:"Conjugation shows the verb across tenses."}
  ],
  pairs:[
    {a:"direct object", b:"indirect object", kind:"contrast"},
    {a:"hyperbole", b:"exaggeration", kind:"related pair"},
    {a:"onomatopoeia", b:"sound word", kind:"related pair"},
    {a:"irony", b:"opposite meaning", kind:"related pair"},
    {a:"compound", b:"single", kind:"antonym"},
    {a:"buzz", b:"hum", kind:"synonym"}
  ],
  passage:{
    title:"The Radio in the Barber Shop",
    text:"The old radio in Sekou's barber shop had one working knob and a voice like a man speaking through a blanket. It crackled, it hissed, it groaned at the news. Customers came as much for the radio as for the haircut, and arguments rose over it like smoke.\n\nOne afternoon the radio finally died. Sekou set down his clippers, and the shop went quiet for the first time in eleven years. Then Old Flomo, who had never once spoken during a broadcast, began to tell the others what had happened in the county the year the bridge was built. He talked for an hour. When he finished, a young man said it was better than the radio. Sekou never replaced it. He hung it on the wall, silent, above the mirror, and the talking has not stopped since.",
    qs:[
      {q:"Why did customers come to Sekou's shop?", a:"As much for the radio as for the haircut."},
      {q:"Write out two examples of onomatopoeia from the passage.", a:"Any two of: crackled, hissed, groaned."},
      {q:"Find one simile in the passage.", a:"'a voice like a man speaking through a blanket' or 'arguments rose over it like smoke'."},
      {q:"What happened after the radio died?", a:"Old Flomo began telling stories about the county, and the customers found his talk better than the radio, so it was never replaced."},
      {q:"What is the theme of this passage?", a:"That human conversation and shared storytelling are more valuable than machines."}
    ]
  },
  activities:[
    "Write effective paragraphs using correct verb tenses",
    "Work individually to write sentences and paragraphs using compound subjects and predicates, and direct and indirect objects",
    "Given topics, develop topic sentences and compose paragraphs with supporting details",
    "In pairs, prepare and write announcements of an event, then write a script of an interview and role play it",
    "Identify figures of speech in passages and develop advocacy messages on healthy choices"
  ],
  materials:["Grade 8 English pupil's book","Selected passages and poems","Exercise books","Dictionary"],
  assessment:["Assignment","Individual work","Quizzes","Tests"]
}
,
{
  grade:8, period:"III", sem:"One", icon:"📐",
  title:"Developing Effective Sentence Structure · Elements of Poetry",
  subtitle:"Predicate nominative and adjective, who and whom, appositives, reports and notices",
  outcomes:[
    "Learners are able to construct effective sentences, and read and analyze prose and poetry"
  ],
  objectives:[
    "Construct effective sentences using predicate nominative and predicate adjective",
    "Demonstrate the use of the pronouns 'who' and 'whom' in sentences",
    "Construct sentences using regular and irregular verbs",
    "Identify and use appositives and appositive phrases in sentences",
    "Develop reports, notices and plan outlines",
    "Discuss the characteristics of poetry"
  ],
  note:"A <b>predicate nominative</b> is a noun after a linking verb that renames the subject (My father is a <i>teacher</i>). A <b>predicate adjective</b> describes the subject (The soup is <i>hot</i>). An <b>appositive</b> is a noun placed beside another to explain it: Musu, <i>our head girl</i>, spoke first.",
  study:[
    /* ---- course text: Semester One, Period III (guide pp. 16-17) ---- */
    {k:"h3", t:"Developing Effective Sentence Structure"},
    {k:"p", t:"A sentence is **effective** when it is correct, clear and well weighted. This unit puts that into practice with the **predicate nominative**, the **predicate adjective**, the pronouns **who** and **whom**, and the **appositive**."},
    {k:"h3", t:"Predicate Nominative and Predicate Adjective"},
    {k:"table", head:["Complement","What it does","Example"], rows:[
      ["Predicate nominative","a noun or pronoun after a linking verb that renames the subject","My elder sister is a midwife."],
      ["Predicate adjective","an adjective after a linking verb that describes the subject","The classroom was noisy."],
      ["Direct object","the receiver of an action verb","She marked the scripts."]
    ]},
    {k:"p", t:"Test it: if the word after the verb **names** the subject, it is a predicate nominative (**midwife** is the elder sister); if it **describes** the subject, it is a predicate adjective (**noisy** describes the classroom). A direct object receives an action and does neither."},
    {k:"rule"},
    {k:"h3", t:"Who and Whom"},
    {k:"bul", items:["**Who** is a subject: “**Who** wrote this letter?”","**Whom** is an object: “To **whom** did you give the key?”","Turn the sentence around and answer with he or him: he → who; him → whom."]},
    {k:"h3", t:"The Appositive"},
    {k:"p", t:"An **appositive** is a word or phrase beside another word that explains it. Set a non-essential appositive off with commas: “Mr Doe, **our head teacher**, opened the meeting.” Punctuate in the same way: “My friend Yah, **a good singer**, led the choir.”"},
    {k:"p", t:"The prefix **ap-** / **ad-** means to or toward – **appositive, approach, adjective, adverb, advance**. Endings **-ism** and **-ary / -ory** build the words of this unit: **symbolism, criticism, realism, optimism, journalism**; **summary, necessary, memory, category, introductory**."},
    {k:"rule"},
    {k:"h3", t:"Reports, Notices and Plan Outlines"},
    {k:"p", t:"A **notice** must tell the reader, at the top, **what the event or matter is** and **when and where it takes place**. After that it gives who is concerned, what is required, and who to contact."},
    {k:"num", items:["Title the notice or report in capital letters.","State the matter, then the date, time and place.","Say who must attend or act, and what to bring.","Sign it with the name and position of the person issuing it.","For a report, add what happened, what was achieved and what is recommended."]},
    {k:"p", t:"An **outline** is the plan beneath the writing: main points numbered, supporting points lettered beneath them. Draft the outline before the composition, and the paragraph will not wander."},
    {k:"rule"},
    {k:"h3", t:"Elements of Poetry"},
    {k:"table", head:["Element","What it is"], rows:[
      ["Stanza","a group of lines in a poem; a verse"],
      ["Rhyme and rhyme scheme","matching end sounds, and the pattern they follow"],
      ["Rhythm and meter","the beat made by stressed and unstressed syllables"],
      ["Figurative language","image and figure used instead of plain statement"],
      ["Mood","the feeling the poem leaves in the reader"],
      ["Speaker","the voice telling the poem, which is not always the poet"]
    ]},
    {k:"p", t:"When you analyse a poem, name the **imagery** (the word-pictures that reach the senses), then the **symbolism** (the thing that stands for a larger idea). Words to know at sight: **whom, whose, whoever, nominative, objective, preceding, furthermore, therefore, however, moreover**."}
  ],
  focus:["Predicate nominative","Predicate adjective","Who and whom","Appositives","Reports and notices","Elements of poetry"],
  words:[
    {w:"predicate nominative", s:"pred-i-cate nom-i-na-tive", d:"a noun after a linking verb that renames the subject", x:"Kollie is the captain."},
    {w:"appositive", s:"ap-pos-i-tive", d:"a noun placed beside another to explain it", x:"My aunt, a nurse, works nights."},
    {w:"notice", s:"no-tice", d:"a short written announcement displayed for the public", x:"A notice about the meeting was posted."},
    {w:"report", s:"re-port", d:"an organised written account of something studied", x:"They wrote a report on the book."},
    {w:"outline", s:"out-line", d:"a plan showing the main points in order", x:"Make an outline before you write."},
    {w:"mood", s:"mood", d:"the feeling a piece of writing creates in the reader", x:"The mood of the poem is hopeful."},
    {w:"stanza", s:"stan-za", d:"a group of lines in a poem", x:"The poem has four stanzas."},
    {w:"figurative language", s:"fig-ur-a-tive lan-guage", d:"language that means more than the literal words", x:"Poets use figurative language."},
    {w:"symbolism", s:"sym-bol-ism", d:"using an object to stand for an idea", x:"The broken chain is a symbol of freedom."},
    {w:"imagery", s:"im-a-ger-y", d:"words that create pictures for the senses", x:"The imagery of dust and heat fills the poem."}
  ],
  sight:["whom","whose","whoever","nominative","objective","preceding","furthermore","therefore","however","moreover"],
  phonics:[
    {p:"-ism", label:"nouns naming a practice or idea", words:["symbolism","criticism","realism","optimism","journalism"]},
    {p:"-ary / -ory", label:"endings in nouns and adjectives", words:["summary","necessary","memory","category","introductory"]},
    {p:"ap- / ad-", label:"prefixes meaning to or toward", words:["appositive","approach","adjective","adverb","advance"]}
  ],
  grammar:[
    {q:"Underline the predicate nominative: My elder sister is a midwife.", a:"midwife", why:"It follows the linking verb is and renames the subject."},
    {q:"Underline the predicate adjective: The classroom was noisy.", a:"noisy", why:"It follows the linking verb was and describes the subject."},
    {q:"Choose who or whom: ___ wrote this letter?", a:"Who", why:"Who is the subject of the verb wrote."},
    {q:"Choose who or whom: To ___ did you give the key?", a:"whom", why:"Whom is the object of the preposition to."},
    {q:"Underline the appositive: Mr Doe, our head teacher, opened the meeting.", a:"our head teacher", why:"It renames and explains Mr Doe."},
    {q:"Punctuate correctly: My friend Yah a good singer led the choir.", a:"My friend Yah, a good singer, led the choir.", why:"An appositive phrase is set off by commas."},
    {q:"Give the past and past participle of the irregular verb 'choose'.", a:"chose, (have) chosen", why:"Choose is irregular."},
    {q:"What are the first two things a notice must tell the reader?", a:"What the event or matter is, and when and where it takes place.", why:"A notice must be brief, clear and complete."}
  ],
  pairs:[
    {a:"who", b:"subject", kind:"related pair"},
    {a:"whom", b:"object", kind:"related pair"},
    {a:"predicate nominative", b:"renames subject", kind:"related pair"},
    {a:"predicate adjective", b:"describes subject", kind:"related pair"},
    {a:"choose", b:"chosen", kind:"principal parts"},
    {a:"mood", b:"feeling", kind:"synonym"}
  ],
  passage:{
    title:"The Liberian Dream",
    text:"I dreamed a country wide as morning,\nWhere the road to Lofa carried buses, not soldiers,\nWhere the rice grew taller than the rumours,\nAnd the river remembered no bodies.\n\nI dreamed a school with a roof on it,\nAnd a girl in the third row, hand raised,\nAsking the question nobody had dared to ask,\nAnd a teacher who knew the answer.\n\nI dreamed we stopped asking whose father was whose,\nAnd asked instead what we would build by Friday.\nThe dream cost nothing.\nThe building is the price.",
    qs:[
      {q:"What does the poet dream about the road to Lofa?", a:"That it would carry buses rather than soldiers — that is, peace rather than war."},
      {q:"Identify one example of imagery in the second stanza.", a:"'a school with a roof on it' or 'a girl in the third row, hand raised'."},
      {q:"What is meant by 'the rice grew taller than the rumours'?", a:"That real food and prosperity would matter more than gossip and fear; it is a figurative comparison of growth against rumour."},
      {q:"Explain the last two lines: 'The dream cost nothing. The building is the price.'", a:"Imagining a better country is easy and free, but actually making it happen demands real work and sacrifice."},
      {q:"What is the mood of this poem?", a:"Hopeful but sober — longing for peace and progress while admitting the hard work required."}
    ]
  },
  activities:[
    "In groups, write sentences and identify predicate nominatives and predicate adjectives, then present them",
    "In groups, write sentences using the pronouns 'who' and 'whom' and present to the class",
    "In pairs, formulate sentences using appositives and appositive phrases",
    "In three groups, outline how to prepare a report and a notice",
    "In groups of four, read a book and write a report; then read a poem and identify the poet, setting, mood and message"
  ],
  materials:["Grade 8 English pupil's book","Selected poems","Exercise books","Dictionary"],
  assessment:["Individual work","Quizzes","Homework","Test"]
},
{
  grade:8, period:"IV", sem:"Two", icon:"🎬",
  title:"Composition · Verbals, Pronouns and Dramatization",
  subtitle:"Gerunds, participles and infinitives, pronouns and antecedents, using the dictionary, drama",
  outcomes:[
    "Learners are able to develop effective composition on given topics, and read, identify and interpret poetic elements"
  ],
  objectives:[
    "Develop a composition using verbals and verbal phrases",
    "Demonstrate the use of pronouns and antecedents in sentences, as well as synonyms and antonyms",
    "Develop composition on issues such as social norms, peer influence and decision making",
    "Identify entry words, guide words and the origin of words using a dictionary",
    "Dramatize a Liberian or African play"
  ],
  note:"A <b>verbal</b> is a verb form used as another part of speech. A <b>gerund</b> ends in -ing and works as a noun (<i>Swimming</i> is healthy). A <b>participle</b> works as an adjective (the <i>running</i> water). An <b>infinitive</b> is 'to' plus a verb (She wants <i>to learn</i>).",
  study:[
    /* ---- course text: Semester Two, Period IV (guide pp. 18-19) ---- */
    {k:"h3", t:"Verbals: Words Made from Verbs that Do Other Jobs"},
    {k:"p", t:"A **verbal** is a word formed from a verb that does the work of another part of speech. English has three, and each is built with its own help:"},
    {k:"table", head:["Verbal","How it is built","What it does","Example"], rows:[
      ["Gerund","verb + ing","a noun","Swimming is good exercise."],
      ["Participle","verb + ing, or the past participle","an adjective","The frightened child ran home."],
      ["Infinitive","to + the base form","a noun, adjective or adverb","She wants to become a doctor."]
    ]},
    {k:"p", t:"Do not confuse a **gerund** with a **present participle**: both end in **-ing**, but a gerund is a thing you can put “my” or “the” in front of or use as a subject, while a participle describes. Likewise a **verbal phrase** is the verbal with its complements and modifiers, and it has no subject of its own."},
    {k:"p", t:"Endings at work here: **-ing** marks the gerund and participle (**reading, swimming, running, writing, building**); **-ed** past participles serve as adjectives (**broken, finished, worried, excited, frightened**)."},
    {k:"rule"},
    {k:"h3", t:"Pronouns and Their Antecedents"},
    {k:"p", t:"The **antecedent** is the word a pronoun stands for, and the pronoun must agree with it in **number and person**."},
    {k:"bul", items:["The council announced **its** decision – antecedent: **council** (one body, so its, not their).","Neither of the boys brought **his** book – neither is singular, so the pronoun is singular: not “their book”.","Each of the girls washed her hands; Everybody must bring his or her own pencil.","Whose and who's still differ: **whose** is possessive, **who's** = who is."]},
    {k:"rule"},
    {k:"h3", t:"Using the Dictionary"},
    {k:"table", head:["Thing on the page","What it tells you"], rows:[
      ["Entry word","the word exactly as the dictionary spells it, with its syllables and stress"],
      ["Guide words","the first and last words on that page – they tell you what lies between them"],
      ["Part-of-speech label","whether the word is a noun, verb, adjective and so on"],
      ["Definition","the meanings, given in order of how common they are"],
      ["Etymology","where the word came from and how it developed"],
      ["Example or usage note","how the word behaves in real sentences"]
    ]},
    {k:"p", t:"On a page whose guide words are **market** and **mask**, you would find **messenger** – it falls between them in alphabet order. **Etymology** – built on **-ology**, the study of – tells the history of a word: **etymology, biology, geology, psychology, technology**."},
    {k:"p", t:"Irregular verbs still need drilling: the past and past participle of **choose** are **chose** and **(have) chosen**. Give a synonym and an antonym for **wise**: sensible / foolish."},
    {k:"rule"},
    {k:"h3", t:"Dramatization: Reading a Liberian or African Play"},
    {k:"num", items:["Read the play through once for the story, and a second time for your own part.","Mark each speech: what the character wants and what stands in the way.","Rehearse with the script first, then without it.","Give the lines out loud, with volume, pause and stress that carry the feeling.","Add staging and costume only after the words are sure."]},
    {k:"p", t:"Words to know: **norm, decision, consequence, resist, persuade, conscience, integrity, judgment, priority, responsible**."}
  ],
  focus:["Gerunds","Participles","Infinitives","Pronouns and antecedents","Dictionary skills","Dramatization"],
  words:[
    {w:"verbal", s:"ver-bal", d:"a verb form used as a noun, adjective or adverb", x:"Gerunds, participles and infinitives are verbals."},
    {w:"gerund", s:"ger-und", d:"an -ing verb form used as a noun", x:"Reading widens the mind."},
    {w:"participle", s:"par-ti-ci-ple", d:"a verb form used as an adjective", x:"The broken chair was removed."},
    {w:"infinitive", s:"in-fin-i-tive", d:"the word to plus a verb", x:"He hopes to travel."},
    {w:"antecedent", s:"an-te-ced-ent", d:"the noun a pronoun refers back to", x:"The girls took their seats."},
    {w:"entry word", s:"en-try word", d:"the word defined in a dictionary", x:"Find the entry word in bold."},
    {w:"guide word", s:"guide word", d:"the word at the top of a dictionary page", x:"Guide words show the range of that page."},
    {w:"etymology", s:"et-y-mol-o-gy", d:"the origin and history of a word", x:"The etymology of school is Greek."},
    {w:"dramatize", s:"dram-a-tize", d:"to act out a story or scene", x:"They dramatized the folk tale."},
    {w:"peer influence", s:"peer in-flu-ence", d:"the effect of friends of your own age on your choices", x:"Peer influence can be positive or negative."}
  ],
  sight:["norm","decision","consequence","resist","persuade","conscience","integrity","judgment","priority","responsible"],
  phonics:[
    {p:"-ing", label:"gerund and participle ending", words:["reading","swimming","running","writing","building"]},
    {p:"-ed", label:"past participles used as adjectives", words:["broken","finished","worried","excited","frightened"]},
    {p:"-ology", label:"the study of", words:["etymology","biology","geology","psychology","technology"]}
  ],
  grammar:[
    {q:"Name the verbal and its use: Swimming is good exercise.", a:"Swimming — a gerund used as the subject (a noun)", why:"An -ing form used as a noun is a gerund."},
    {q:"Name the verbal and its use: The frightened child ran home.", a:"frightened — a participle used as an adjective", why:"It describes the noun child."},
    {q:"Name the verbal and its use: She wants to become a doctor.", a:"to become — an infinitive", why:"To plus a verb forms an infinitive."},
    {q:"Correct the pronoun: Neither of the boys brought their book.", a:"Neither of the boys brought his book.", why:"Neither is singular."},
    {q:"Name the antecedent: The council announced its decision.", a:"council", why:"Its refers back to council."},
    {q:"Give a synonym and an antonym for 'wise'.", a:"Synonym: sensible. Antonym: foolish.", why:"Synonyms match in meaning; antonyms oppose."},
    {q:"On a dictionary page with guide words 'market' and 'mask', would you find 'marrow'?", a:"Yes", why:"Marrow falls alphabetically between market and mask."},
    {q:"What does the etymology of a word tell you?", a:"Where the word came from and how it developed.", why:"Etymology is word origin."}
  ],
  pairs:[
    {a:"gerund", b:"noun", kind:"verbal use"},
    {a:"participle", b:"adjective", kind:"verbal use"},
    {a:"infinitive", b:"to + verb", kind:"verbal use"},
    {a:"wise", b:"foolish", kind:"antonym"},
    {a:"resist", b:"withstand", kind:"synonym"},
    {a:"entry word", b:"guide word", kind:"related pair"}
  ],
  passage:{
    title:"The Choice at the Junction",
    text:"They were four, and the fifth was Sumo. Standing at the junction after school, the four had decided that the shop with the open side window was an invitation. Sumo listened while they explained how simple it would be, and how nobody watched that window after five.\n\nHe thought of his mother's face and of the certificate he had not yet earned. Then he said he was going home. They laughed at him and called him a small boy, and the laughing followed him down the road for a hundred metres. It was the longest hundred metres he had ever walked.\n\nTwo weeks later three of the four were known to the police, and the fourth had stopped coming to school. Sumo said nothing about it to anyone. He had learned that the hardest word in the language is a short one, and that you sometimes have to say it while people are laughing.",
    qs:[
      {q:"What did the four boys plan to do?", a:"To break into a shop through an open side window that nobody watched after five."},
      {q:"What made Sumo refuse?", a:"He thought of his mother and of the certificate he had not yet earned."},
      {q:"What is 'the hardest word in the language' referred to at the end?", a:"The word 'no'."},
      {q:"Identify one gerund or infinitive used in the passage and state its kind.", a:"'to earn'/'to say' are infinitives; 'laughing' in 'the laughing followed him' is a gerund used as a noun."},
      {q:"What is the theme of this passage?", a:"Resisting negative peer influence and the courage required to make the right decision alone."}
    ]
  },
  activities:[
    "In groups, write sentences using demonstrative pronouns and their antecedents",
    "Individually write sentences containing gerund, participle and infinitive phrases",
    "In groups, discuss the use of the dictionary and identify entry words, guide words and word origins",
    "Write compositions on issues such as social norms, peer influence and decision making",
    "Develop strategies to curb conflict and violence among young people, and dramatize a Liberian or African play"
  ],
  materials:["Grade 8 English pupil's book","Dictionary","Selected African plays","Exercise books"],
  assessment:["Assignment","Quizzes","Tests"]
}
,
{
  grade:8, period:"V", sem:"Two", icon:"✒️",
  title:"Composition · Clauses, Punctuation and Speech Writing",
  subtitle:"Dependent and independent clauses, apostrophe, quotations, colon and semicolon, letters of application",
  outcomes:[
    "Learners are able to write sentences effectively using clauses as well as grammar mechanics, and read and analyze prose and poetry"
  ],
  objectives:[
    "Develop composition using degrees of adjectives and adverbs of comparison",
    "Identify and use independent and dependent clauses in sentences",
    "Apply punctuation marks correctly in sentences and paragraphs",
    "Write letters of application",
    "Write and present short speeches in class",
    "Read and discuss selected African novels and poetry"
  ],
  note:"An <b>independent clause</b> has a subject and verb and can stand alone as a sentence. A <b>dependent (subordinate) clause</b> has a subject and verb but cannot stand alone: <i>Because the rain fell</i>… A <b>semicolon</b> joins two closely related independent clauses; a <b>colon</b> introduces a list or explanation.",
  study:[
    /* ---- course text: Semester Two, Period V (guide pp. 20-21) ---- */
    {k:"h3", t:"Clauses"},
    {k:"p", t:"A **clause** is a group of words with its own subject and verb. An **independent** (main) clause can stand by itself; a **dependent** or **subordinate** clause cannot, because a word at its front leaves the sense hanging."},
    {k:"table", head:["Clause","Test","Example"], rows:[
      ["Independent","it makes sense alone","The road was flooded."],
      ["Dependent","it begins with because, when, although, if… and leans on another clause","Because the road was flooded."],
      ["Subordinating word","the word that makes the clause dependent","because, when, although, since, while, unless, whereas"]
    ]},
    {k:"p", t:"Join them and the pair becomes one sentence: “**Because the road was flooded**, the pupils did not come to school.” Put the dependent clause first and place a comma after it. The prefix **sub-** means under: **subordinate, subject, submit, subtract**."},
    {k:"rule"},
    {k:"h3", t:"Punctuation: Apostrophe, Quotation Marks, Semicolon, Colon"},
    {k:"table", head:["Mark","Use it for","Example"], rows:[
      ["Apostrophe (’)","omitted letters, and ownership","The girl’s bag (one girl); the girls’ uniforms (several girls); don’t = do not"],
      ["Quotation marks (“ ”)","someone’s exact words, with the comma and period inside","“I will come tomorrow,” said Fatu."],
      ["Semicolon (;)","two independent clauses with no joining word; longer items in a list","The rain stopped; the children ran outside."],
      ["Colon (:)","a list, an explanation or a quotation after a complete clause","You will need three things: a pen, a ruler and paper."]
    ]},
    {k:"p", t:"Never use an apostrophe for a plural (four **days**, not day’s), and never for a possessive pronoun (**its**, **hers**, **yours**). A colon only follows a complete clause; a semicolon never replaces and or but in a sentence joined by a conjunction."},
    {k:"rule"},
    {k:"h3", t:"The Letter of Application"},
    {k:"num", items:["Heading: your address and the date.","Inside address: the position, the office, and where it is.","Salutation: Dear Sir – and its closing must answer it: **Yours faithfully**.","Body: the post you are applying for, what you have done, and what you can offer.","Closing and signature; then list the enclosures (your certificate, your references).","Keep the tone formal and the sentences free of contractions."]},
    {k:"p", t:"Where the salutation names a person – Dear Mr Doe – the close is **Yours sincerely**; where it does not – Dear Sir – the close is **Yours faithfully**. **Necessary, secretary, summary, ordinary, library** all carry **-ary**."},
    {k:"rule"},
    {k:"h3", t:"Speech Writing and Reading"},
    {k:"bul", items:["Open by naming the subject and greeting the audience.","Give the points in the order of their strength; end with the strongest.","Write for the ear: short sentences, real words, one idea at a time.","Mark the pauses, and practise aloud with the room, not with the paper.","Close by repeating the one thing you want the audience to keep."]},
    {k:"h3", t:"Reading and Analysing African Novels"},
    {k:"p", t:"Devices to look for in the novel: **allegory**, in which the whole story stands for another meaning; **alliteration**, the repetition of the first sound – “the **s**oft **s**outh wind sighed in the **s**easide grass” – and **symbolism**, in which a thing carries a larger idea. Sight words: **although, unless, whereas, since, while, therefore, sincerely, faithfully, applicant, vacancy**."}
  ],
  focus:["Independent and dependent clauses","Apostrophe","Quotation marks","Semicolon and colon","Letters of application","Speech writing","Allegory, alliteration and symbolism"],
  words:[
    {w:"clause", s:"clause", d:"a group of words containing a subject and a verb", x:"When the bell rang is a clause."},
    {w:"independent clause", s:"in-de-pend-ent clause", d:"a clause that can stand alone as a sentence", x:"The bell rang."},
    {w:"dependent clause", s:"de-pend-ent clause", d:"a clause that cannot stand alone", x:"When the bell rang…"},
    {w:"subordinate", s:"sub-or-di-nate", d:"depending on something else; another word for dependent", x:"Although he tried is a subordinate clause."},
    {w:"apostrophe", s:"a-pos-tro-phe", d:"the mark used for possession and contractions", x:"That is Musu's book; it isn't mine."},
    {w:"semicolon", s:"sem-i-co-lon", d:"the mark joining two closely related independent clauses", x:"The rain stopped; the children ran out."},
    {w:"colon", s:"co-lon", d:"the mark introducing a list or explanation", x:"Bring these: a pen, a ruler and a book."},
    {w:"allegory", s:"al-le-go-ry", d:"a story in which characters and events stand for deeper meanings", x:"The fable is an allegory about greed."},
    {w:"alliteration", s:"al-lit-er-a-tion", d:"repetition of the first consonant sound in nearby words", x:"Wild winds whipped the water."},
    {w:"application", s:"ap-pli-ca-tion", d:"a formal written request, especially for a job or place", x:"He posted his application on Monday."}
  ],
  sight:["although","unless","whereas","since","while","therefore","sincerely","faithfully","applicant","vacancy"],
  phonics:[
    {p:"sub-", label:"the prefix sub- meaning under", words:["subordinate","subject","submit","subtract","substandard"]},
    {p:"-ary", label:"nouns and adjectives ending in -ary", words:["necessary","secretary","summary","ordinary","library"]},
    {p:"alliterative sounds", label:"repeated first sounds", words:["wild","winds","whipped","water","waves"]}
  ],
  grammar:[
    {q:"Is this clause independent or dependent? Because the road was flooded.", a:"Dependent", why:"It cannot stand alone as a sentence."},
    {q:"Is this clause independent or dependent? The road was flooded.", a:"Independent", why:"It is a complete thought."},
    {q:"Join with a semicolon: The rain stopped. The children ran outside.", a:"The rain stopped; the children ran outside.", why:"A semicolon joins two closely related independent clauses."},
    {q:"Add the apostrophe: The girls uniforms were clean. (uniforms of several girls)", a:"The girls' uniforms were clean.", why:"For a plural noun ending in s, add only the apostrophe."},
    {q:"Punctuate with quotation marks: I will come tomorrow said Fatu.", a:"\"I will come tomorrow,\" said Fatu.", why:"Direct speech goes inside quotation marks, with a comma before the closing mark."},
    {q:"Insert a colon: You will need three things a pen, a ruler and paper.", a:"You will need three things: a pen, a ruler and paper.", why:"A colon introduces a list."},
    {q:"Which closing suits a formal letter of application beginning 'Dear Sir'?", a:"Yours faithfully,", why:"Dear Sir pairs with Yours faithfully; a named person pairs with Yours sincerely."},
    {q:"Identify the device: The soft south wind sighed in the seaside grass.", a:"Alliteration", why:"The s sound is repeated in nearby words."}
  ],
  pairs:[
    {a:"independent clause", b:"dependent clause", kind:"contrast"},
    {a:"semicolon", b:"joins clauses", kind:"punctuation use"},
    {a:"colon", b:"introduces a list", kind:"punctuation use"},
    {a:"Dear Sir", b:"Yours faithfully", kind:"letter pair"},
    {a:"allegory", b:"hidden meaning", kind:"related pair"},
    {a:"although", b:"even though", kind:"synonym"}
  ],
  passage:{
    title:"Africa's Plea",
    text:"I am not you —\nbut you will not\ngive me a chance,\nwill not let me be me.\n\nIf I were you —\nbut you know\nI am not you,\nyet you will not\nlet me be me.\n\nYou meddle, interfere\nin my affairs\nas if they were yours\nand you were me.\n\nYou are unfair, unwise,\nfoolish to think\nthat I can be you,\ntalk, act\nand think like you.\n\nGod made me me.\nHe made you you.\nFor God's sake\nLet me be me.",
    qs:[
      {q:"What is the speaker asking for throughout the poem?", a:"To be allowed to be himself — to be respected as different rather than forced to imitate the listener."},
      {q:"Who might 'you' represent in this poem?", a:"The coloniser or outside powers who interfere in Africa's affairs."},
      {q:"Which line is repeated, and what effect does the repetition create?", a:"'Let me be me' is repeated, creating insistence and emphasising the plea for identity and freedom."},
      {q:"What is the tone of the fourth stanza?", a:"Accusing and frustrated — the speaker calls the listener unfair, unwise and foolish."},
      {q:"Explain the theme of the poem in one sentence.", a:"That every people has the right to its own identity and self-determination, free from outside interference."}
    ]
  },
  activities:[
    "Develop composition using dependent and independent clauses",
    "In groups, write sentences and identify and discuss independent and subordinate clauses",
    "Write and punctuate sentences using the apostrophe, quotation marks, semicolon and colon correctly",
    "Write a letter of application and a short speech, then present the speech in class",
    "In groups, discuss the elements of poetry — allegory, alliteration and symbolism — in selected African novels and poems"
  ],
  materials:["Grade 8 English pupil's book","Selected African novels and poems","Exercise books","Dictionary"],
  assessment:["Assignment","Quizzes","Tests"]
},
{
  grade:8, period:"VI", sem:"Two", icon:"⚖️",
  title:"Composition · Voice, Conjunctions, Research and Debate",
  subtitle:"Active and passive voice, conjunctions and interjections, using the library, debating",
  outcomes:[
    "Learners will be able to conduct research, analyze and form opinions to debate a given topic, and read and analyze prose and poetry"
  ],
  objectives:[
    "Write paragraphs using verbs, conjunctions and interjections",
    "Read, discuss and analyze selected Liberian prose and African novels",
    "Conduct research, analyze and form opinions on topics for debates",
    "Read and analyze prose and poetry"
  ],
  note:"In the <b>active voice</b> the subject does the action (The council <i>built</i> the road). In the <b>passive voice</b> the subject receives the action (The road <i>was built</i> by the council). Use the active voice for direct, forceful writing.",
  study:[
    /* ---- course text: Semester Two, Period VI (guide p. 22) ---- */
    {k:"h3", t:"Verb Usage: Active and Passive Voice"},
    {k:"p", t:"The **voice** of a verb tells whether the subject acts or is acted upon. In the **active voice** the subject does the action; in the **passive voice** the subject receives it, and the verb is made with a form of be plus the past participle."},
    {k:"table", head:["Voice","Rule","Example"], rows:[
      ["Active","the subject acts","The head teacher opened the library."],
      ["Passive","the subject is acted upon","The library was opened by the head teacher."],
      ["Active (from passive)","put the doer back in front","The farmers planted the rice."]
    ]},
    {k:"p", t:"Change “The rice was planted by the farmers” into the active voice and you get “**The farmers planted the rice**”. Use the passive when the thing done matters more than the doer, or when the doer is unknown – “The store was broken into during the night.”"},
    {k:"p", t:"The endings of this unit: **-tion** builds the nouns of debate (**proposition, opposition, information, conclusion, persuasion**); **re-** means back or again (**research, rebuttal, refute, review, reference**); and **-ive** builds **active, passive, persuasive, informative, effective**."},
    {k:"rule"},
    {k:"h3", t:"Conjunctions"},
    {k:"table", head:["Kind","What it joins","Words","Example"], rows:[
      ["Coordinating","two things of equal weight","for, and, nor, but, or, yet, so","She was tired but she finished."],
      ["Subordinating","a dependent clause to a main one","because, although, when, while, since, unless","We waited because the bus was late."],
      ["Correlative","two matched parts","both … and, either … or, neither … nor","Both Fatu and Musu came."]
    ]},
    {k:"p", t:"Join with a suitable conjunction: “It was late. We continued working.” → “**Although it was late**, we continued working.” (or “It was late, **but** we continued working.”)"},
    {k:"rule"},
    {k:"h3", t:"Interjections"},
    {k:"p", t:"An **interjection** is a word of feeling set loose from the sentence: **Alas! The crop has failed.** It is followed by an exclamation mark when the feeling is strong, and by a comma when it is light – “Well, we shall see.” The interjection itself takes no grammatical relation to the sentence around it."},
    {k:"rule"},
    {k:"h3", t:"Using the Library for Research"},
    {k:"num", items:["Look first in the **catalogue** to find whether the library holds the book you need and where it stands.","Narrow the search with the shelf list and the reference section (encyclopedia, almanac, atlas).","Write the note on a card or sheet: the author, the title, the page and the fact.","Record the same details as your source, so that any reader can find it again.","Return the book to its own shelf and date due."]},
    {k:"p", t:"**Debate.** The **proposition** is the question being argued; the **opposition** argues against it. A **rebuttal** is the reply that answers and disproves the other side's argument, and it must meet the reason given, not merely deny the conclusion. Bring evidence – a fact, a statistic, an example, or the statement of someone who knows."},
    {k:"rule"},
    {k:"h3", t:"Reading and Analysing Liberian Poems"},
    {k:"bul", items:["Read the poem aloud once for the sound and once for the sense.","Say what the speaker wants, and what stands against it.","Name the images that reach the ear and the eye, and what each stands for.","Note the rhyme and rhythm, and what the poet breaks – a break is a meaning.","Judge the poem by what it does, not only by whether you liked it."]},
    {k:"p", t:"Sight words for this unit: **proposition, opposition, motion, argument, source, reference, summary, conclusion, persuade, refute**."}
  ],
  focus:["Active and passive voice","Conjunctions","Interjections","Using the library","Research and debate","Liberian poetry"],
  words:[
    {w:"active voice", s:"ac-tive voice", d:"the form in which the subject does the action", x:"The girl wrote the letter."},
    {w:"passive voice", s:"pas-sive voice", d:"the form in which the subject receives the action", x:"The letter was written by the girl."},
    {w:"coordinating conjunction", s:"co-or-di-na-ting con-junc-tion", d:"a joining word linking equal parts: and, but, or, so", x:"He called, but nobody came."},
    {w:"subordinating conjunction", s:"sub-or-di-na-ting con-junc-tion", d:"a word introducing a dependent clause: because, although, when", x:"Although it rained, we walked."},
    {w:"interjection", s:"in-ter-jec-tion", d:"a word expressing sudden feeling", x:"Hurrah! We have won."},
    {w:"research", s:"re-search", d:"careful study to find facts", x:"They did research in the library."},
    {w:"debate", s:"de-bate", d:"a formal argument between two sides", x:"The debate was on school uniforms."},
    {w:"evidence", s:"ev-i-dence", d:"facts that support an opinion", x:"Give evidence for your claim."},
    {w:"rebuttal", s:"re-but-tal", d:"a reply that answers the other side's argument", x:"Her rebuttal was convincing."},
    {w:"catalogue", s:"cat-a-logue", d:"a list showing where books are kept in a library", x:"Check the catalogue for the title."}
  ],
  sight:["proposition","opposition","motion","argument","source","reference","summary","conclusion","persuade","refute"],
  phonics:[
    {p:"-tion in argument words", label:"nouns of debate", words:["proposition","opposition","information","conclusion","persuasion"]},
    {p:"re-", label:"the prefix re- meaning back or again", words:["research","rebuttal","refute","review","reference"]},
    {p:"-ive", label:"adjectives ending in -ive", words:["active","passive","persuasive","informative","effective"]}
  ],
  grammar:[
    {q:"Change to the passive voice: The head teacher opened the library.", a:"The library was opened by the head teacher.", why:"The object becomes the subject in the passive voice."},
    {q:"Change to the active voice: The rice was planted by the farmers.", a:"The farmers planted the rice.", why:"The doer becomes the subject in the active voice."},
    {q:"Name the kind of conjunction in: We waited because the bus was late.", a:"Subordinating conjunction", why:"Because introduces a dependent clause."},
    {q:"Name the kind of conjunction in: She was tired but she finished.", a:"Coordinating conjunction", why:"But joins two independent clauses."},
    {q:"Identify the interjection: Alas! The crop has failed.", a:"Alas", why:"It expresses sudden feeling and is followed by an exclamation mark."},
    {q:"Join with a suitable conjunction: It was late. We continued working.", a:"Although it was late, we continued working. (or: It was late, but we continued working.)", why:"The conjunction shows the relationship between the ideas."},
    {q:"In a debate, what is a rebuttal?", a:"A reply that answers and disproves the other side's argument.", why:"Rebuttal responds directly to an opposing point."},
    {q:"Where in the library would you look first to find whether a book is held?", a:"In the catalogue.", why:"The catalogue lists and locates the holdings."}
  ],
  pairs:[
    {a:"active voice", b:"passive voice", kind:"contrast"},
    {a:"and", b:"coordinating", kind:"conjunction type"},
    {a:"because", b:"subordinating", kind:"conjunction type"},
    {a:"argument", b:"rebuttal", kind:"related pair"},
    {a:"persuade", b:"convince", kind:"synonym"},
    {a:"proposition", b:"opposition", kind:"antonym"}
  ],
  passage:{
    title:"What Is Life",
    text:"Life is the market at first light,\nthe seller counting change she does not have,\nthe buyer counting reasons not to buy,\nand both of them still standing there at noon.\n\nLife is the boy who walks eleven miles\nto sit an examination in a borrowed shirt,\nand the old man who waits at the gate\nto ask him how it went.\n\nDo not tell me life is long.\nTell me it is wide —\nwide enough for the seller and the buyer,\nthe boy, the shirt, the old man, and the gate.",
    qs:[
      {q:"What two pictures of life does the first stanza give?", a:"A seller counting change she does not have and a buyer counting reasons not to buy, both still standing at noon."},
      {q:"What does the boy in the second stanza do?", a:"He walks eleven miles to sit an examination in a borrowed shirt."},
      {q:"Explain the contrast the poet draws between 'long' and 'wide'.", a:"The poet says life's value lies not in its length but in its breadth — the number of people, struggles and connections it holds."},
      {q:"Identify one example of imagery in the poem.", a:"Any of: 'the market at first light', 'a borrowed shirt', 'the old man who waits at the gate'."},
      {q:"What is the central theme of the poem?", a:"That the meaning of life is found in ordinary people, their perseverance and their connections to one another."}
    ]
  },
  activities:[
    "In groups, write paragraphs using conjunctions and interjections",
    "Rewrite sentences and paragraphs changing between the active and passive voice",
    "In groups, conduct research on given topics and form opinions for class debates",
    "Read and analyze selected Liberian poems",
    "Organize a debate on a topic of importance to your school and community, with proposition, opposition and rebuttal"
  ],
  materials:["Grade 8 English pupil's book","Selected Liberian poems","Library reference materials","Exercise books"],
  assessment:["Individual work","Quizzes","Tests"]
}
,
/* ================= GRADE 9 ================= */
{
  grade:9, period:"I", sem:"One", icon:"🪶",
  title:"Composition · Order, Punctuation and Figurative Language",
  subtitle:"Chronological order and order of importance, capitalization, transitive and intransitive verbs, figurative language",
  outcomes:[
    "Learners will be able to conduct research, analyze data, and present findings orally and through written work"
  ],
  objectives:[
    "Write sentences and paragraphs using punctuation marks correctly",
    "Develop composition using vocabulary, including antonyms and synonyms",
    "Read a passage, identify and interpret the figures of speech",
    "Read and analyze prose and poetry",
    "Write poetry utilizing figurative language"
  ],
  note:"A <b>transitive verb</b> takes a direct object (She <i>wrote</i> a letter). An <b>intransitive verb</b> does not (The baby <i>slept</i>). Arrange a composition in <b>chronological order</b> (by time) or in <b>order of importance</b> (strongest point first or last).",
  study:[
    /* ---- course text: Semester One, Period I (guide pp. 23-24) ---- */
    {k:"h3", t:"Order in the Composition"},
    {k:"p", t:"A composition is only as strong as the **order** of its parts. The guide names two orders and the writer must choose between them before a sentence is written."},
    {k:"table", head:["Order","How it runs","Use it for"], rows:[
      ["Chronological order","point after point in the order in which they happened","a narrative, an account of a trip, a biography, a process such as preparing cassava leaf"],
      ["Order of importance","either from the weakest to the strongest, or the strongest first","an argument, a speech, a letter of complaint"],
      ["Spatial order","part to part as the eye moves","a description of a market, a classroom, a town"]
    ]},
    {k:"p", t:"Ask which order suits the subject: a composition on **how to prepare cassava leaf** must run **chronologically**, for the steps cannot change place. A paragraph on why the road should be repaired should end with the strongest reason."},
    {k:"p", t:"A **transition** is the word or phrase that carries the reader from one part to the next – first, then, that same evening, beside this, above all. The root **chron-** means time: **chronological, chronicle, chronic, chronology, synchronize**."},
    {k:"rule"},
    {k:"h3", t:"Capitalization"},
    {k:"bul", items:["The first word of every sentence, and the first word of a quoted sentence, takes a capital.","Proper nouns and their adjectives: **Monrovia, Fatu, St. John River, December, Friday, English, Baptist**.","Titles standing before a name: **Headmaster Doe**; but not when the title stands alone: the headmaster.","The pronoun **I**, and every word in the direct name of a book, poem or society.","Do not capitalise a month, day or river used as a common noun; and write **Last December we visited the St. John River**, not last december … st. john river."]},
    {k:"rule"},
    {k:"h3", t:"Punctuation Marks in Composition"},
    {k:"table", head:["Mark","Work it does","Example"], rows:[
      ["Full stop (.)","ends a statement","The market closes at four."],
      ["Comma (,)","separates items, sets off an appositive, follows an introductory word","However, the meeting was postponed until Friday."],
      ["Question mark (?)","ends a question","Will you come?"],
      ["Exclamation mark (!)","ends an exclamation","Alas! The crop has failed."],
      ["Apostrophe (’)","ownership and omissions","the girls’ uniforms; don’t"],
      ["Quotation marks (“ ”)","exact words","“I will come,” said Fatu."],
      ["Colon (:)","introduces a list or explanation","Bring three things: a pen, a ruler and paper."],
      ["Semicolon (;)","joins two independent clauses","The rain stopped; the children ran outside."]
    ]},
    {k:"p", t:"Punctuate as the sense requires: “**However, the meeting was postponed until Friday.**” – an introductory however is followed by a comma, and the day takes its capital."},
    {k:"rule"},
    {k:"h3", t:"Transitive and Intransitive Verbs"},
    {k:"bul", items:["A **transitive verb** passes its action to an object: “The mason built **a wall**.” (built what? a wall.)","An **intransitive verb** stops with the subject and takes no object: “The old man **laughed**.”","Some verbs do both, with a different sense: She runs the shop (transitive) / She runs fast (intransitive).","The prefix **trans-** means across – **transitive, transition, transport, translate, transfer**; **-ence** builds the abstract nouns **coherence, evidence, sequence, preference, difference**."]},
    {k:"rule"},
    {k:"h3", t:"Vocabulary Development: Synonyms and Antonyms"},
    {k:"p", t:"Build the word store so that no page repeats one word. Take **walked slowly** and you have **trudged, plodded, shuffled** – each with a slightly different weight. Repeat a word three times in a paragraph and the reader tires of it: search for another **synonym**, or set the sense off with an **antonym**."},
    {k:"p", t:"Practise the pairs the guide gives: **buy / sell**, **begin / end**, **favorable / unfavorable**."},
    {k:"rule"},
    {k:"h3", t:"Figurative Language: Four Devices to Tell Apart"},
    {k:"table", head:["Device","What it is","Example"], rows:[
      ["Allegory","a whole story whose persons and events stand for another meaning","a tale of a household that stands for a nation"],
      ["Symbolism","a thing that carries a meaning beyond itself","the flag standing for the nation"],
      ["Extended metaphor","one metaphor carried through a passage or poem","“The examination was a mountain he had to climb” – and the climb goes on"],
      ["Euphemism","a soft name for a hard thing","“passed away” for died"],
      ["Personification","human acts given to a thing","“The village is sleeping under the moon.”"]
    ]},
    {k:"p", t:"Read and analyse: the poem **“If**” by **Rudyard Kipling**, finding its central theme and the lines that speak to your own life; **“Africa's Plea”** by **Roland T. Dempster**, finding the poet's point of view and writing your opinion of it; and **“Bats”** by **D. H. Lawrence**. Sight words: **furthermore, consequently, nevertheless, meanwhile, subsequently, initially, ultimately, whereas, hence, thus**."}
  ],
  focus:["Chronological order","Order of importance","Capitalization and punctuation","Transitive and intransitive verbs","Vocabulary development","Figurative language"],
  words:[
    {w:"chronological", s:"chron-o-log-i-cal", d:"arranged in the order in which events happened", x:"Tell the story in chronological order."},
    {w:"transitive verb", s:"tran-si-tive verb", d:"a verb that takes a direct object", x:"She carried the basket."},
    {w:"intransitive verb", s:"in-tran-si-tive verb", d:"a verb that takes no direct object", x:"The child slept."},
    {w:"allegory", s:"al-le-go-ry", d:"a story whose characters and events carry a deeper meaning", x:"Animal Farm is an allegory."},
    {w:"symbolism", s:"sym-bol-ism", d:"using an object to represent an idea", x:"The dove is a symbol of peace."},
    {w:"extended metaphor", s:"ex-tend-ed met-a-phor", d:"a metaphor developed over several lines", x:"The poem sustains an extended metaphor of a journey."},
    {w:"euphemism", s:"eu-phe-mism", d:"a mild expression replacing a harsh one", x:"'Let go' is a euphemism for dismissed."},
    {w:"transition", s:"tran-si-tion", d:"a word or phrase linking ideas", x:"However, meanwhile and therefore are transitions."},
    {w:"coherence", s:"co-her-ence", d:"the smooth logical flow of a piece of writing", x:"Transitions give a composition coherence."},
    {w:"vivid", s:"viv-id", d:"producing a clear, strong picture in the mind", x:"Her description of the storm was vivid."}
  ],
  sight:["furthermore","consequently","nevertheless","meanwhile","subsequently","initially","ultimately","whereas","hence","thus"],
  phonics:[
    {p:"chron-", label:"the root meaning time", words:["chronological","chronicle","chronic","synchronize","chronology"]},
    {p:"trans-", label:"the prefix trans- meaning across", words:["transitive","transition","transport","translate","transfer"]},
    {p:"-ence", label:"abstract nouns ending in -ence", words:["coherence","evidence","sequence","preference","difference"]}
  ],
  grammar:[
    {q:"Is the verb transitive or intransitive? The mason built a wall.", a:"Transitive", why:"Wall is the direct object of built."},
    {q:"Is the verb transitive or intransitive? The old man laughed.", a:"Intransitive", why:"There is no direct object."},
    {q:"Correct the capitalization: last december we visited the st. john river.", a:"Last December we visited the St. John River.", why:"Capitalise the first word, the month and the proper name."},
    {q:"Punctuate: however the meeting was postponed until friday", a:"However, the meeting was postponed until Friday.", why:"A transition word at the start is followed by a comma."},
    {q:"Give a stronger synonym for 'walked slowly'.", a:"trudged (or plodded, shuffled)", why:"Precise verbs make writing vivid."},
    {q:"Identify the figure of speech: The examination was a mountain he had to climb.", a:"Metaphor (an extended metaphor if continued)", why:"The examination is compared directly to a mountain."},
    {q:"Identify the figure of speech: The village is sleeping under the moon.", a:"Personification", why:"The village is given the human action of sleeping."},
    {q:"Which order would suit a composition about how to prepare cassava leaf?", a:"Chronological order", why:"The steps must be told in the order they are done."}
  ],
  pairs:[
    {a:"transitive", b:"intransitive", kind:"contrast"},
    {a:"chronological", b:"by time", kind:"related pair"},
    {a:"allegory", b:"deeper meaning", kind:"related pair"},
    {a:"symbolism", b:"stands for an idea", kind:"related pair"},
    {a:"vivid", b:"dull", kind:"antonym"},
    {a:"however", b:"nevertheless", kind:"synonym"}
  ],
  passage:{
    title:"If",
    text:"If you can keep your head when all about you\nAre losing theirs and blaming it on you;\nIf you can trust yourself when all men doubt you,\nBut make allowance for their doubting too;\n\nIf you can wait and not be tired by waiting,\nOr being lied about, don't deal in lies,\nOr being hated, don't give way to hating,\nAnd yet don't look too good, nor talk too wise;\n\nIf you can dream — and not make dreams your master;\nIf you can think — and not make thoughts your aim;\nIf you can meet with Triumph and Disaster\nAnd treat those two impostors just the same;\n\nIf you can fill the unforgiving minute\nWith sixty seconds' worth of distance run,\nYours is the Earth and everything that's in it,\nAnd — which is more — you'll be a Man, my son!",
    qs:[
      {q:"What does the poet mean by 'keep your head'?", a:"Stay calm and think clearly in a crisis, when others are panicking."},
      {q:"Identify the figure of speech in 'meet with Triumph and Disaster / And treat those two impostors just the same'.", a:"Personification — Triumph and Disaster are given human form and called impostors."},
      {q:"Why does the poet call Triumph and Disaster 'impostors'?", a:"Because neither success nor failure is as permanent or as true as it seems; both mislead you about your real worth."},
      {q:"Explain 'the unforgiving minute'.", a:"Time never returns once it passes, so every minute must be filled with worthwhile effort."},
      {q:"State the central theme of the poem.", a:"That maturity and true strength come from self-control, patience, humility and perseverance in both good and bad fortune."}
    ]
  },
  activities:[
    "In groups, conduct research, analyze data and present the findings orally and in writing",
    "In groups, write essays on given topics using chronological order and order of importance",
    "In groups, discover synonyms and antonyms as content vocabulary to avoid repetition of words",
    "Create poems that include figurative language",
    "Read and analyze a selected poem to determine its central theme and make connections to your own life"
  ],
  materials:["Grade 9 English pupil's book","Selected poems","Dictionary and thesaurus","Exercise books"],
  assessment:["Assignment","Quizzes","Test","Individual work"]
},
{
  grade:9, period:"II", sem:"One", icon:"👤",
  title:"Composition · Biography and Autobiography",
  subtitle:"Differentiating biography and autobiography, research writing, literary devices and shades of meaning",
  outcomes:[
    "Learners are able to conduct research on the differences between biography and autobiography and present findings orally and in written work, and read and analyze prose and poetry"
  ],
  objectives:[
    "Demonstrate the differences between biography and autobiography",
    "Write autobiographies",
    "Research and write biographies of renowned personalities",
    "Read and analyze prose and poetry"
  ],
  note:"A <b>biography</b> is written about a person by someone else and uses <i>he</i> or <i>she</i>. An <b>autobiography</b> is written by the person about themselves and uses <i>I</i>. <b>Explicit</b> meaning is stated openly; <b>implicit</b> meaning is suggested and must be inferred.",
  study:[
    /* ---- course text: Semester One, Period II (guide p. 25) ---- */
    {k:"h3", t:"Biography and Autobiography"},
    {k:"p", t:"A **biography** is the life of a person written by someone else; an **autobiography** is that same life written by the person who lived it. The difference shows first of all in the **point of view**."},
    {k:"table", head:["Thing","Biography","Autobiography"], rows:[
      ["Who writes it","another person","the subject of the book"],
      ["Point of view","third person: he, she, they","first person: I, me, my"],
      ["Where it comes from","records, letters, interviews with others","the writer's own memory, plus family and papers"],
      ["What it can show","judgement on the whole life, including what the subject hid","inner feeling, motive and doubt at first hand"],
      ["Its risk","the writer may mistake the subject's motives","the writer may spare themselves"]
    ]},
    {k:"p", t:"Tell them apart at once: “**I** was born in Harper in 1954” is an **autobiography**; “**She** was born in Harper in 1954” is a **biography**. A **memoir** is a shorter account of one part or period of a life."},
    {k:"p", t:"The prefix **auto-** means self: **autobiography, automatic, autograph, autonomy**; the root **-graphy** means writing: **biography, geography, photography, calligraphy, bibliography**; and **-ent / -ant** form the adjectives **eminent, prominent, significant, relevant, persistent**."},
    {k:"rule"},
    {k:"h3", t:"Researching and Writing a Biography"},
    {k:"num", items:["Choose the person, and say why the life deserves telling.","Gather the record: birth and family, schooling, work, the turn in the life, and what the person left behind.","Interview people who knew the person, and write down what each one says and when.","Read documents – newspapers, letters, school and church records, photographs.","Sort the material into chronological order, and decide what the life means before you write it.","Draft: the opening that states why the person matters; the story of the life; the closing that weighs what was achieved.","Cite every source, and keep the judgement fair to the living and the dead."]},
    {k:"p", t:"Two sources will serve for any life: **interviews with people who knew the person**, and **records kept in a library or archive** – newspapers, books and official papers."},
    {k:"rule"},
    {k:"h3", t:"Explicit and Implicit Meaning"},
    {k:"bul", items:["**Explicit** meaning is stated in the words themselves: “The office closes at four o'clock.”","**Implicit** meaning is carried by what is done or left unsaid: he glanced at his watch three times while she spoke – the impatience is not named, but it is there.","**Infer** means to draw out the implicit meaning from the evidence on the page.","A reader who can only take the explicit line has read half of the work."]},
    {k:"h3", t:"Point of View"},
    {k:"p", t:"Rewrite in the third person: “I walked to Kakata that morning” → “**She walked to Kakata that morning**.” An autobiography keeps the first person throughout; a biography keeps the third. Do not slide from one to the other in the same passage."},
    {k:"h3", t:"Reading and Analysing Prose and Poetry"},
    {k:"p", t:"When you analyse a work, look first for the **literary devices** – **theme**, **symbolism**, image and figure – and then for the **shades of meaning**, saying what is explicit and what must be inferred. Among the prose and verse the guide sets for practice are **“Second Class Citizen**” by Buchi Emecheta and poems such as **“Africa's Plea”** and **“Bats”**."},
    {k:"p", t:"Sight words: **ancestry, upbringing, milestone, testimony, archive, interview, chronology, tribute, posthumous, eminent**."}
  ],
  focus:["Biography","Autobiography","Research skills","Literary devices","Explicit and implicit meaning","Point of view"],
  words:[
    {w:"biography", s:"bi-og-ra-phy", d:"an account of a person's life written by another", x:"He read a biography of Angie Brooks."},
    {w:"autobiography", s:"au-to-bi-og-ra-phy", d:"an account of a person's life written by that person", x:"Her autobiography opens in Harper."},
    {w:"memoir", s:"mem-oir", d:"a personal account of part of a life", x:"His memoir covers the war years."},
    {w:"explicit", s:"ex-plic-it", d:"stated clearly and openly", x:"The rule is explicit."},
    {w:"implicit", s:"im-plic-it", d:"suggested rather than stated", x:"Her disapproval was implicit in her silence."},
    {w:"infer", s:"in-fer", d:"to work out a meaning from evidence", x:"We infer from his tone that he is angry."},
    {w:"chronicle", s:"chron-i-cle", d:"a record of events in order of time", x:"The book chronicles her early years."},
    {w:"renowned", s:"re-nowned", d:"famous and respected", x:"A renowned Liberian educator."},
    {w:"perspective", s:"per-spec-tive", d:"the position from which something is seen or told", x:"The story is told from the child's perspective."},
    {w:"legacy", s:"leg-a-cy", d:"what a person leaves behind for others", x:"Her legacy is the school she founded."}
  ],
  sight:["ancestry","upbringing","milestone","testimony","archive","interview","chronology","tribute","posthumous","eminent"],
  phonics:[
    {p:"auto-", label:"the prefix auto- meaning self", words:["autobiography","automatic","autograph","autonomy","automobile"]},
    {p:"-graphy", label:"the root meaning writing", words:["biography","geography","photography","calligraphy","bibliography"]},
    {p:"-ent / -ant", label:"adjective endings", words:["eminent","prominent","significant","relevant","persistent"]}
  ],
  grammar:[
    {q:"Biography or autobiography? 'I was born in Harper in 1954.'", a:"Autobiography", why:"The writer uses I about their own life."},
    {q:"Biography or autobiography? 'She was born in Harper in 1954.'", a:"Biography", why:"Another person is writing about her."},
    {q:"Which point of view does an autobiography use?", a:"First person (I, me, my)", why:"The subject tells their own story."},
    {q:"Explicit or implicit? 'The office closes at four o'clock.'", a:"Explicit", why:"The information is stated openly."},
    {q:"Explicit or implicit? He glanced at his watch three times while she spoke.", a:"Implicit", why:"His impatience is suggested, not stated."},
    {q:"Rewrite in the third person: I walked to Kakata that morning.", a:"He (or She) walked to Kakata that morning.", why:"Third person uses he, she or they."},
    {q:"Name two sources you would use to research a biography.", a:"Interviews with people who knew the person, and library or archive records such as newspapers and books.", why:"Biography requires evidence from reliable sources."},
    {q:"Give a synonym for 'renowned'.", a:"famous (or eminent, distinguished)", why:"Synonyms match in meaning."}
  ],
  pairs:[
    {a:"biography", b:"autobiography", kind:"contrast"},
    {a:"explicit", b:"implicit", kind:"antonym"},
    {a:"renowned", b:"eminent", kind:"synonym"},
    {a:"first person", b:"I", kind:"point of view"},
    {a:"third person", b:"she", kind:"point of view"},
    {a:"legacy", b:"inheritance", kind:"synonym"}
  ],
  passage:{
    title:"Bats",
    text:"At evening, sitting on this terrace,\nWhen the sun from the west, beyond Pisa, beyond the mountains of Carrara\nDeparts, and the world is taken by surprise …\n\nWhen the tired flower of Florence is in gloom beneath the glowing\nBtown hills surrounding …\n\nWhen under the arches of the Ponte Vecchio\nA green light enters against stream, flush from the west,\nAgainst the current of obscure Arno …\n\nLook up, and you see things flying\nBetween the day and the night;\nSwallows with spools of dark thread sewing the shadows together.\n\nA circle swoop, and a quick parabola under the bridge arches\nWhere light pushes through;\nA sudden turning upon itself of a thing in the air.\nA dip to the water.\n\nAnd you think:\n'The swallows are flying so late!'\n\nSwallows?\n\nDark air-life looping\nYet missing the pure loop …\nBats!",
    qs:[
      {q:"Where is the speaker sitting, and at what time of day?", a:"On a terrace in Italy, at evening as the sun departs."},
      {q:"What does the speaker first think the flying creatures are?", a:"Swallows."},
      {q:"Identify the metaphor in 'Swallows with spools of dark thread sewing the shadows together'.", a:"The birds' flight paths are compared to thread being sewn, as if they are stitching the darkness together."},
      {q:"How does the mood change when the speaker realises they are bats?", a:"It shifts from calm, beautiful observation to surprise and distaste, signalled by the abrupt single word 'Bats!'"},
      {q:"What is implicit, rather than explicit, about the speaker's feelings towards bats?", a:"The poem does not state that he dislikes them, but the broken lines, the exclamation and the phrase 'missing the pure loop' imply revulsion."}
    ]
  },
  activities:[
    "In groups, conduct research and find the differences between biography and autobiography",
    "In groups, research various personalities, write their biographies and present the findings",
    "Write your own autobiography covering your early years and your hopes",
    "In groups, read and analyze prose and poetry to discover literary devices such as theme and symbolism",
    "Identify shades of meaning — explicit and implicit — in a work you have read"
  ],
  materials:["Grade 9 English pupil's book","Selected prose and poetry","Library reference materials","Exercise books"],
  assessment:["Assignment","Quizzes","Test"]
}
,
{
  grade:9, period:"III", sem:"One", icon:"✉️",
  title:"Composition Development · Letters, Inquiries and Opinions",
  subtitle:"Business, friendly and application letters, inquiries and orders, expressing and defending opinions",
  outcomes:[
    "Learners will be able to write business and friendly letters, applications, inquiries, place orders and requests, read, discuss and analyze prose and poetry, and formulate and express opinions on given topics with supporting details and evidence"
  ],
  objectives:[
    "Compose various kinds of letters, and write inquiries, requests and orders",
    "Read and analyze prose and poetry",
    "Express and defend opinions",
    "Discuss the characteristics of prose"
  ],
  note:"A <b>business letter</b> has six parts: heading, inside address, salutation, body, complimentary close and signature. A <b>friendly letter</b> omits the inside address and uses a warm salutation. Begin 'Dear Sir/Madam' with 'Yours faithfully'; begin with a name and use 'Yours sincerely'.",
  study:[
    /* ---- course text: Semester One, Period III (guide pp. 26-27) ---- */
    {k:"h3", t:"Kinds of Letters"},
    {k:"p", t:"A letter is written to get something done, and the **kind** of letter fixes its form. Learn three: **business**, **friendly** and **application**."},
    {k:"table", head:["Thing","Business letter","Friendly letter"], rows:[
      ["Parts","six parts, in order","heading, salutation, body, closing, signature"],
      ["Inside address","required","not usually included"],
      ["Salutation","Dear Sir, Dear Madam, Dear Mr Doe","Dear Fatu,"],
      ["Complimentary close","Yours faithfully / Yours sincerely","Your friend,"],
      ["Subject","often a line beginning Re: or Regarding","none"],
      ["Language","formal, no contractions, no slang","warm and natural"],
      ["Purpose","to order, inquire, complain, apply","to share news and keep friendship"]
    ]},
    {k:"num", items:["Heading – your address, then the date.","Inside address – the position, the firm, the place.","Salutation – Dear Sir / Dear Madam / Dear Mr Doe.","Body – one matter per paragraph, stated plainly at the start.","Complimentary close – Yours faithfully after Dear Sir; Yours sincerely after a name.","Signature – and beneath it the list of enclosures."]},
    {k:"p", t:"Write concisely: not “I am writing this letter in order to make an inquiry regarding the cost of the textbooks”, but “**I am writing to inquire about the cost of the textbooks**.” The prefix **in- / en-** means in or into: **inquiry, enclose, include, enrol, insert**; **-ible / -able** form **credible, possible, reliable, acceptable, responsible**."},
    {k:"rule"},
    {k:"h3", t:"Inquiries, Requests and Orders"},
    {k:"num", items:["Say at once what you want: information, a catalogue, a price, goods.","Give the details the reader needs to answer: quantity, size, colour, date required, place of delivery.","Ask about price, discount, packing and how payment is to be made.","Set a date by which you need the reply.","Close with thanks, and keep the whole letter short."]},
    {k:"p", t:"An **order** should state the article, the number, the price agreed, and the day and place for delivery; a **requisition** is the form a school or office fills in to ask for stores."},
    {k:"rule"},
    {k:"h3", t:"Characteristics of Prose"},
    {k:"bul", items:["Prose is written in **sentences and paragraphs**, not in lines with a measure; poetry is written in lines.","It **narrates or describes** in ordinary grammatical order, and may be **fiction** (a story made by the writer) or non-fiction (an essay, a biography, a report).","It has **characters, setting, plot and theme**, and it moves through time.","Its **diction** is the writer's choice of words, and its **tone** is the attitude those words betray.","**Fiction** is further divided by length and reach: the novel, the novella, and the **short story** – which holds to one effect and little else."]},
    {k:"h3", t:"Expressing and Defending an Opinion"},
    {k:"num", items:["State the opinion in one sentence, so that the reader knows what you will defend.","Say plainly whether the sentence gives a fact or an opinion.","Support it with evidence: a figure, an example, the statement of someone who knows.","Meet the strongest objection instead of hiding from it.","Close by restating what you have proved."]},
    {k:"p", t:"Tell the two apart: “Monrovia is the capital of Liberia” is a **fact**; “Monrovia is the most beautiful city in West Africa” is an **opinion**. Among the works the guide sets for reading and analysis are **“A Government Driver on His Retirement**” (Onu Chibuike), **“The Definition of Love**” (Andrew Marvell) and **“Octopus at Ducor**” (Lekpele M. Nyemalon). Sight words: **enclosure, reference, regarding, acknowledge, furnish, pursuant, kindly, hereby, attached, respectfully**."}
  ],
  focus:["Business letters","Friendly letters","Letters of application","Inquiries and orders","Characteristics of prose","Expressing and defending opinions"],
  words:[
    {w:"inside address", s:"in-side ad-dress", d:"the receiver's address written in a business letter", x:"The inside address goes below the heading."},
    {w:"salutation", s:"sal-u-ta-tion", d:"the greeting that opens a letter", x:"Dear Madam is a formal salutation."},
    {w:"complimentary close", s:"com-pli-men-ta-ry close", d:"the polite ending before the signature", x:"Yours faithfully is a complimentary close."},
    {w:"inquiry", s:"in-quir-y", d:"a letter asking for information", x:"She wrote an inquiry about the fees."},
    {w:"requisition", s:"req-ui-si-tion", d:"a formal written request for supplies", x:"The school sent a requisition for desks."},
    {w:"order", s:"or-der", d:"a written instruction to supply goods", x:"They placed an order for fifty books."},
    {w:"opinion", s:"o-pin-ion", d:"a view or judgment not necessarily based on fact", x:"State your opinion clearly."},
    {w:"justify", s:"jus-ti-fy", d:"to give good reasons for something", x:"Justify your answer with evidence."},
    {w:"credible", s:"cred-i-ble", d:"believable and worthy of trust", x:"Use credible sources."},
    {w:"concise", s:"con-cise", d:"brief but complete", x:"A business letter should be concise."}
  ],
  sight:["enclosure","reference","regarding","acknowledge","furnish","pursuant","kindly","hereby","attached","respectfully"],
  phonics:[
    {p:"-ary in letter words", label:"formal vocabulary", words:["complimentary","secretary","necessary","preliminary","voluntary"]},
    {p:"in- / en-", label:"prefixes meaning in or into", words:["inquiry","enclose","include","enrol","insert"]},
    {p:"-ible / -able", label:"adjective endings", words:["credible","possible","reliable","acceptable","responsible"]}
  ],
  grammar:[
    {q:"Name the six parts of a business letter in order.", a:"Heading, inside address, salutation, body, complimentary close, signature", why:"This is the standard order of a business letter."},
    {q:"Which complimentary close goes with 'Dear Sir'?", a:"Yours faithfully", why:"An unnamed recipient takes Yours faithfully."},
    {q:"Which complimentary close goes with 'Dear Mr Doe'?", a:"Yours sincerely", why:"A named recipient takes Yours sincerely."},
    {q:"Which part does a friendly letter NOT usually include?", a:"The inside address", why:"Friendly letters are informal and omit it."},
    {q:"Rewrite concisely: I am writing this letter in order to make an inquiry about the cost of the textbooks.", a:"I am writing to inquire about the cost of the textbooks.", why:"Business writing should be concise."},
    {q:"Fact or opinion? Monrovia is the capital of Liberia.", a:"Fact", why:"It can be verified."},
    {q:"Fact or opinion? Monrovia is the most beautiful city in West Africa.", a:"Opinion", why:"It is a personal judgment."},
    {q:"Give one way to support an opinion in a debate.", a:"Provide evidence from a credible source, such as statistics, an example or an expert statement.", why:"Opinions must be justified with evidence."}
  ],
  pairs:[
    {a:"Dear Sir", b:"Yours faithfully", kind:"letter pair"},
    {a:"Dear Mr Doe", b:"Yours sincerely", kind:"letter pair"},
    {a:"fact", b:"opinion", kind:"contrast"},
    {a:"inquiry", b:"request for information", kind:"related pair"},
    {a:"concise", b:"wordy", kind:"antonym"},
    {a:"credible", b:"trustworthy", kind:"synonym"}
  ],
  passage:{
    title:"A Government Driver on His Retirement",
    text:"For thirty years I drove them,\nministers and their brief cases,\nthrough the potholes of this republic,\nmy hands steady on a wheel that was never mine.\n\nI learned the language of back seats:\nthe cough that means turn around,\nthe silence that means drive faster,\nthe laughter that means somebody has lost a contract.\n\nThey gave me a certificate on Friday\nand a handshake that lasted four seconds.\nOn Monday a younger man will hold my wheel,\nand the potholes will not notice.\n\nBut I have carried this country's business\nin the back of a car for thirty years,\nand not one of them ever asked me\nwhat I thought of the road.",
    qs:[
      {q:"What was the speaker's occupation, and for how long?", a:"He was a government driver for thirty years."},
      {q:"What does the speaker mean by 'the language of back seats'?", a:"He learned to read his passengers' unspoken signals — coughs, silences and laughter — and what each one meant."},
      {q:"What is the tone of the third stanza?", a:"Bitter and disillusioned — the certificate and the brief handshake seem a poor reward for thirty years."},
      {q:"Explain the significance of the last two lines.", a:"They show that although he carried the country's officials and witnessed everything, his own opinion was never sought — he was treated as invisible."},
      {q:"Identify one example of symbolism in the poem.", a:"The road and its potholes symbolise the condition and neglect of the country; the wheel 'that was never mine' symbolises his lack of power."}
    ]
  },
  activities:[
    "In groups, compose business letters, friendly letters and letters of application",
    "Write letters of inquiry, requests and orders for goods",
    "In groups, research given topics, form opinions and defend them with supporting details",
    "In groups, read poems, analyze them and determine the central theme and literary devices",
    "Discuss and list the characteristics of prose, comparing them with those of poetry"
  ],
  materials:["Grade 9 English pupil's book","Selected prose and poetry","Sample letters","Exercise books"],
  assessment:["Assignment","Quizzes","Tests"]
},
{
  grade:9, period:"IV", sem:"Two", icon:"📰",
  title:"Composition Development · Kinds of Writing and the Library",
  subtitle:"Descriptive, expository, persuasive, informative and argumentative writing, library skills",
  outcomes:[
    "Learners will be able to compose various kinds of articles — descriptive, persuasive, argumentative, informative — demonstrate the use of the library, and read and analyze prose and poetry"
  ],
  objectives:[
    "Compose various kinds of writings",
    "Demonstrate skills in the use of the library",
    "Discuss the characteristics of prose and poetry"
  ],
  note:"<b>Descriptive</b> writing paints a picture. <b>Expository</b> writing explains. <b>Persuasive</b> writing urges the reader to agree or act. <b>Informative</b> writing gives facts. <b>Argumentative</b> writing states a claim and defends it with evidence against opposing views.",
  study:[
    /* ---- course text: Semester Two, Period IV (guide pp. 28-29) ---- */
    {k:"h3", t:"Kinds of Writing"},
    {k:"p", t:"Every piece of writing is done for one reason above the others, and that reason names the kind. Five are set for this period; a sixth, **narrative**, was learned in the lower grades."},
    {k:"table", head:["Kind","Its one purpose","How it is written"], rows:[
      ["Descriptive","to make the reader see, hear and smell","detail chosen for its effect; the senses named; comparison and figure"],
      ["Expository","to explain or inform","plain words, ordered steps, definition and example; no argument"],
      ["Persuasive","to move the reader to act or agree","appeal to interest and feeling, with a call to do something"],
      ["Informative","to report the facts","who, what, when, where, why, how; nothing added for effect"],
      ["Argumentative","to prove a claim","claim, reasons, evidence, and an answer to the other side"]
    ]},
    {k:"p", t:"Choose the kind for the task: explain how a bicycle works → **expository**; convince the council to repair the road → **persuasive** or **argumentative**; picture your grandmother's kitchen → **descriptive**."},
    {k:"p", t:"The prefix **ex-** means out – **expository, explain, express, export, extract**; **-ory** and **-ive** build the adjectives of this unit: **expository, satisfactory, compulsory**; **descriptive, persuasive, argumentative, informative, narrative**."},
    {k:"rule"},
    {k:"h3", t:"The Essay and Its Thesis"},
    {k:"num", items:["Introduction: open the subject, and end it with the **thesis statement** – the claim the essay will prove.","Body: one paragraph for each reason, each with its topic sentence and its evidence.","Concession: name the strongest objection, and answer it.","Conclusion: restate the claim and the main reasons in fresh words – and bring in no new evidence."]},
    {k:"p", t:"The thesis statement usually appears **at the end of the introduction**. Where an argumentative essay closes, it sums up: it does not start again."},
    {k:"rule"},
    {k:"h3", t:"Using the Library"},
    {k:"p", t:"Books on the shelf stand in a fixed order, and a reader who knows the order finds in a minute what another searches for an hour."},
    {k:"table", head:["Part of the library","What is kept there"], rows:[
      ["Catalogue","the record of what the library holds, and where each item stands"],
      ["Circulating collection","books that may be taken home, arranged by subject number and then by author"],
      ["Reference section","books that are consulted and read in the library, not borrowed"],
      ["Periodicals","newspapers, magazines and journals by date"],
      ["Reserve or special collection","works kept under the librarian's hand"]
    ]},
    {k:"table", head:["Reference book","The question it answers"], rows:[
      ["Dictionary","what the word means, how it is spelled, and what its forms are"],
      ["Encyclopaedia","what a subject is, at second hand and in summary"],
      ["Almanac","the population of each county, and figures for the year"],
      ["Atlas","where Nimba County lies, and what borders it"],
      ["Thesaurus","the synonyms and antonyms of a word"],
      ["Biographical dictionary","who a renowned person was, and what they did"]
    ]},
    {k:"p", t:"To find on which page a topic appears, turn to the **index**; the **bibliography** lists the works the author used; the **glossary** at the back explains the hard words of the book; and the **appendix** holds the tables and documents."},
    {k:"p", t:"**Plagiarism** is using another person's words or ideas as your own without acknowledging the source. Avoid it by writing the note in your own words and giving the book, the author and the page."},
    {k:"rule"},
    {k:"h3", t:"Reading and Analysing Prose and Poetry"},
    {k:"bul", items:["Determine the **central theme**: what the work says about life, not merely what happens in it.","Identify the literary devices – image, symbol, figure – and say what each one does.","Note the characteristics of the poetry you read: line, stanza, rhyme, rhythm.","Practise on **“Black Woman**” by **Léopold S. Senghor** and on prose such as **“Wuthering Heights**” by Emily Brontë.","Research with the kinds of writing: a report on **how to get information from the library**, an essay on the effects of substance abuse, and a paper on vector-borne disease and its cost to health care."]},
    {k:"p", t:"Sight words: **classify, evaluate, analyse, summarise, paraphrase, plagiarism, index, glossary, appendix, bibliography**."}
  ],
  focus:["Descriptive writing","Expository writing","Persuasive writing","Informative writing","Argumentative writing","Library arrangement and reference materials"],
  words:[
    {w:"descriptive", s:"de-scrip-tive", d:"writing that pictures a person, place or thing", x:"A descriptive essay about the beach."},
    {w:"expository", s:"ex-pos-i-to-ry", d:"writing that explains or informs", x:"An expository essay on how rice is grown."},
    {w:"persuasive", s:"per-sua-sive", d:"writing that urges the reader to agree or act", x:"A persuasive essay on road safety."},
    {w:"argumentative", s:"ar-gu-men-ta-tive", d:"writing that defends a claim with evidence", x:"An argumentative essay on school fees."},
    {w:"thesis statement", s:"the-sis state-ment", d:"the sentence stating the main claim of an essay", x:"Put the thesis statement at the end of the introduction."},
    {w:"reference material", s:"ref-er-ence ma-te-ri-al", d:"books used for looking up facts, not for borrowing", x:"Encyclopaedias are reference materials."},
    {w:"encyclopaedia", s:"en-cy-clo-pae-di-a", d:"a work giving information on many subjects", x:"Check the encyclopaedia for the date."},
    {w:"atlas", s:"at-las", d:"a book of maps", x:"Find the county in the atlas."},
    {w:"almanac", s:"al-ma-nac", d:"a yearly book of facts and statistics", x:"The almanac lists the rainfall."},
    {w:"citation", s:"ci-ta-tion", d:"a note showing where information came from", x:"Give a citation for every source."}
  ],
  sight:["classify","evaluate","analyse","summarise","paraphrase","plagiarism","index","glossary","appendix","bibliography"],
  phonics:[
    {p:"ex-", label:"the prefix ex- meaning out", words:["expository","explain","express","export","extract"]},
    {p:"-ory", label:"adjectives ending in -ory", words:["expository","introductory","satisfactory","compulsory","obligatory"]},
    {p:"-ive in writing types", label:"kinds of writing", words:["descriptive","persuasive","argumentative","informative","narrative"]}
  ],
  grammar:[
    {q:"Which kind of writing would you use to explain how a bicycle works?", a:"Expository", why:"Expository writing explains."},
    {q:"Which kind of writing would you use to convince the council to repair a road?", a:"Persuasive (or argumentative)", why:"It urges the reader to act."},
    {q:"Which kind of writing would you use to picture your grandmother's kitchen?", a:"Descriptive", why:"It creates a picture for the senses."},
    {q:"Where in an essay does the thesis statement usually appear?", a:"At the end of the introduction.", why:"It states the claim the essay will defend."},
    {q:"Which reference book would give you the population of each county?", a:"An almanac (or encyclopaedia)", why:"Almanacs collect yearly facts and statistics."},
    {q:"Which reference book would show you where Nimba County lies?", a:"An atlas", why:"An atlas is a book of maps."},
    {q:"What is plagiarism?", a:"Using another person's words or ideas as your own without acknowledging the source.", why:"Sources must always be cited."},
    {q:"Where in a book would you look to find on which page a topic appears?", a:"The index", why:"The index lists topics alphabetically with page numbers."}
  ],
  pairs:[
    {a:"descriptive", b:"pictures", kind:"writing type"},
    {a:"expository", b:"explains", kind:"writing type"},
    {a:"persuasive", b:"convinces", kind:"writing type"},
    {a:"atlas", b:"maps", kind:"reference pair"},
    {a:"index", b:"page numbers", kind:"reference pair"},
    {a:"citation", b:"plagiarism", kind:"contrast"}
  ],
  passage:{
    title:"Black Woman",
    text:"Naked woman, black woman\nClothed with your colour which is life, with your form which is beauty!\nIn your shadow I have grown up; the gentleness of your hands was laid over my eyes.\nAnd now, high up on the sun-baked pass, at the heart of summer, at the heart of noon,\nI come upon you, my Promised Land,\nAnd your beauty strikes me to the heart like the flash of an eagle.\n\nNaked woman, dark woman\nFirm-fleshed ripe fruit, sombre raptures of black wine, mouth making lyrical my mouth\nSavannah stretching to clear horizons, savannah shuddering beneath the East Wind's eager caresses\nCarved tom-tom, taut tom-tom, muttering under the Conqueror's fingers\nYour solemn contralto voice is the spiritual song of the Beloved.",
    qs:[
      {q:"To whom or what is the poem addressed?", a:"To the black woman, who also stands for Africa itself."},
      {q:"Identify the simile in the first stanza.", a:"'your beauty strikes me to the heart like the flash of an eagle'."},
      {q:"What does the poet compare the woman to in the second stanza?", a:"To ripe fruit, black wine, the savannah and a carved tom-tom drum."},
      {q:"What is meant by 'my Promised Land'?", a:"The woman, and by extension Africa, is the poet's homeland and destination — something longed for and finally reached."},
      {q:"Explain how the poem uses symbolism.", a:"The woman symbolises Africa: her colour, form, voice and the savannah imagery represent the beauty, dignity and cultural richness of the continent."}
    ]
  },
  activities:[
    "In groups, research a topic of community importance and write about it using each of the various kinds of writing",
    "In groups, research and report on how to get information from the library",
    "Practise using reference materials: encyclopaedia, atlas, almanac and index",
    "In groups, create poems and read other works, analyzing them to determine central theme and literary devices",
    "Develop various kinds of paragraphs and identify the thesis statement in each"
  ],
  materials:["Grade 9 English pupil's book","Library reference materials","Selected prose and poetry","Exercise books"],
  assessment:["Assignment","Project","Individual work","Group work"]
}
,
{
  grade:9, period:"V", sem:"Two", icon:"🎪",
  title:"Composition · Clauses, Character Study and Genres of Literature",
  subtitle:"Dependent and independent clauses, comparing characters, genres of drama, dramatizing a short story",
  outcomes:[
    "Learners are able to formulate sentences applying dependent and independent clauses, compare and contrast characters, distinguish literary devices and differentiate genres of literature"
  ],
  objectives:[
    "Develop sentences using dependent and independent clauses",
    "Compare and contrast characters, distinguish literary devices and differentiate genres in literature",
    "Differentiate genres in literature as pertaining to drama",
    "Dramatize a short story"
  ],
  note:"The three great <b>genres</b> of literature are prose, poetry and drama. Within drama, a <b>tragedy</b> ends in misfortune for the main character, a <b>comedy</b> ends happily, and a <b>satire</b> uses humour and ridicule to expose folly or vice.",
  study:[
    /* ---- course text: Semester Two, Period V (guide pp. 30-31) ---- */
    {k:"h3", t:"Dependent and Independent Clauses"},
    {k:"p", t:"A **clause** has its own subject and verb. An **independent** clause stands as a sentence; a **dependent** clause leans on another and cannot stand."},
    {k:"bul", items:["Underline the dependent clause: “**Although the rain fell**, the match continued.”","Underline the independent clause: “When the bell rang, **the pupils stood up**.”","Combine into one sentence: “The road was muddy. We walked to school.” → “**Although the road was muddy**, we walked to school.”","Put the dependent clause first and set it off with a comma; put it last and the comma usually goes away."]},
    {k:"p", t:"Words that make a clause dependent: **because, when, while, since, although, though, unless, if, whereas, so that**. A string of them with no main clause is a **fragment**, and a fragment is a fault, not a style."},
    {k:"rule"},
    {k:"h3", t:"Composition Using the Parts of Speech"},
    {k:"p", t:"Write with the parts of speech under control: **beneath** in “The key lay beneath the mat” is a **preposition**; **swiftly** in “The canoe moved swiftly” is an **adverb**; **honesty** in “Honesty is rewarded” is a **noun** – the subject of the sentence, not an adjective."},
    {k:"rule"},
    {k:"h3", t:"Comparing and Contrasting Characters"},
    {k:"table", head:["Thing to compare","Fatu (begins selfish, ends generous)","Musu (selfish from first to last)"], rows:[
      ["What she wants at the opening","the whole of the harvest for herself","the same, and she takes it"],
      ["What the story does to her","changes her","leaves her unchanged"],
      ["Kind of character","dynamic – dyn-, power, is at work in her","static – stat-, standing, never moves"],
      ["How she is drawn","round, with motives that surprise","flat, one trait and no more"],
      ["Her use to the story","the protagonist, whose change is the meaning","a foil, set off to show the change"]
    ]},
    {k:"p", t:"Name the pair for the story you read, and answer in this order: what each wants, what each does, what each becomes. A character who **begins** selfish and **ends** generous is **dynamic**; one who stays as they were is **static**. Endings in **-ization** name the processes: **characterization, organization, realization, civilization, dramatization**."},
    {k:"rule"},
    {k:"h3", t:"Genres of Literature, and the Kinds of Drama"},
    {k:"table", head:["Genre","Its marks"], rows:[
      ["Poetry","written in lines and stanzas, with rhyme and measure; a poem in stanzas with rhyme belongs here"],
      ["Prose","written in sentences and paragraphs; the story and the essay"],
      ["Drama","written in speeches and stage directions, to be acted"],
      ["Folk literature","tale, riddle, proverb and song, handed on by speaking"]
    ]},
    {k:"table", head:["Kind of drama","What it does"], rows:[
      ["Tragedy","ends in the downfall of the main character"],
      ["Comedy","ends in marriage, reunion or the laugh against folly"],
      ["Satire","uses ridicule to expose corruption and vice"],
      ["Melodrama","virtue in danger, rescued at the last moment"]
    ]},
    {k:"p", t:"A **soliloquy** is a speech in which a character, alone on stage, reveals their inner thoughts to the audience; the **chorus** comments on the action; the **denouement** is the final unravelling, and the **climax** the point of greatest strain."},
    {k:"rule"},
    {k:"h3", t:"Developing and Dramatizing a Short Story"},
    {k:"num", items:["Choose one event and one effect; leave the rest out.","Set it in a place and time your group can build from what is at hand.","Give each character one want that the audience can hold.","Write it first as prose, then turn it into a script: character names, speeches, stage directions in brackets.","Rehearse aloud, then perform, then discuss what the acting showed that the reading hid."]},
    {k:"p", t:"Read a play and decide whether it is **comedy, satire or tragedy** – among them **“Fences**” by August Wilson and **“Let Me Die Alone**” by John K. Kargbo. Write also on the matters the guide names: planning and decision-making in the family, and stigma and discrimination connected with HIV/AIDS, TB and substance abuse. Sight words: **contrast, compare, motive, tension, climax, resolve, portray, reveal, conflict, irony**."}
  ],
  focus:["Dependent and independent clauses","Comparing and contrasting characters","Genres of literature","Tragedy, comedy and satire","Dramatizing a short story"],
  words:[
    {w:"genre", s:"gen-re", d:"a type or category of literature", x:"Prose, poetry and drama are genres."},
    {w:"tragedy", s:"trag-e-dy", d:"a serious play ending in misfortune for the main character", x:"The play is a tragedy."},
    {w:"comedy", s:"com-e-dy", d:"a play that is amusing and ends happily", x:"The comedy delighted the audience."},
    {w:"satire", s:"sat-ire", d:"writing that ridicules folly or vice to correct it", x:"The satire mocked corrupt officials."},
    {w:"characterization", s:"char-ac-ter-i-za-tion", d:"the way a writer reveals a character", x:"Characterization is shown through action and speech."},
    {w:"foil", s:"foil", d:"a character who contrasts with another to highlight qualities", x:"The quiet brother is a foil to the boastful one."},
    {w:"dynamic character", s:"dy-nam-ic char-ac-ter", d:"a character who changes during the story", x:"He is a dynamic character; grief changes him."},
    {w:"static character", s:"stat-ic char-ac-ter", d:"a character who does not change", x:"The landlord is a static character."},
    {w:"soliloquy", s:"so-lil-o-quy", d:"a speech in which a character alone reveals their thoughts", x:"His soliloquy shows his doubt."},
    {w:"denouement", s:"de-noue-ment", d:"the final part where matters are settled", x:"The denouement explains everything."}
  ],
  sight:["contrast","compare","motive","tension","climax","resolve","portray","reveal","conflict","irony"],
  phonics:[
    {p:"-edy", label:"kinds of drama", words:["tragedy","comedy","remedy","parody","melody"]},
    {p:"dyn- / stat-", label:"roots meaning power and standing", words:["dynamic","dynamo","static","station","stationary"]},
    {p:"-ization", label:"nouns of process", words:["characterization","organization","realization","civilization","dramatization"]}
  ],
  grammar:[
    {q:"Underline the dependent clause: Although the rain fell, the match continued.", a:"Although the rain fell", why:"It cannot stand alone as a sentence."},
    {q:"Underline the independent clause: When the bell rang, the pupils stood up.", a:"the pupils stood up", why:"It is a complete thought."},
    {q:"Combine into one sentence with a dependent clause: The road was muddy. We walked to school.", a:"Although the road was muddy, we walked to school.", why:"A subordinating conjunction creates the dependent clause."},
    {q:"Which genre is a poem written in stanzas with rhyme?", a:"Poetry", why:"Poetry is arranged in lines and stanzas."},
    {q:"Which kind of drama ends in the downfall of the main character?", a:"Tragedy", why:"A tragedy ends in misfortune."},
    {q:"Which kind of drama uses ridicule to expose corruption?", a:"Satire", why:"Satire mocks folly and vice to correct it."},
    {q:"Dynamic or static? A character who begins selfish and ends generous.", a:"Dynamic", why:"The character changes during the story."},
    {q:"What is a soliloquy?", a:"A speech in which a character, alone on stage, reveals their inner thoughts to the audience.", why:"It lets the audience hear a character's private mind."}
  ],
  pairs:[
    {a:"tragedy", b:"comedy", kind:"contrast"},
    {a:"dynamic character", b:"static character", kind:"contrast"},
    {a:"satire", b:"ridicule", kind:"related pair"},
    {a:"prose", b:"poetry", kind:"genre pair"},
    {a:"soliloquy", b:"alone on stage", kind:"related pair"},
    {a:"foil", b:"contrast character", kind:"related pair"}
  ],
  passage:{
    title:"Two Brothers at the Gate",
    text:"Saah spoke first at every meeting, and always last as well. He wore his father's watch and told the story of how he had once turned back a thief at the storehouse — a story that grew a little each year. The elders liked him; he was easy to listen to.\n\nJalla, the younger, said almost nothing. When the storehouse roof began to sag in the second rainy season, it was Jalla who noticed and Jalla who climbed. He mentioned it to nobody. When Saah described the repair at the next meeting, he used the word 'we', and Jalla did not correct him.\n\nThe famine came in the third year. The elders turned to Saah, who spoke for an hour and proposed a delegation to the county. Then an old woman at the back asked a single question: 'Who checked the store?' There was a silence. Jalla stood, took out a small notebook, and read the figures aloud — every bag, counted every month for three years. The delegation was never sent. The town ate.",
    qs:[
      {q:"How does the writer characterize Saah in the first paragraph?", a:"As a talkative, self-promoting man who enjoys attention, wears his father's watch and exaggerates a story about turning back a thief."},
      {q:"Compare and contrast the two brothers.", a:"Saah is loud, boastful and takes credit for others' work; Jalla is quiet, observant and acts without seeking recognition. Both serve the town, but one through words and one through deeds."},
      {q:"Which brother is a foil to the other, and how?", a:"Jalla is a foil to Saah — his silence and quiet competence highlight Saah's boastfulness and emptiness."},
      {q:"What is the turning point of the story?", a:"When the old woman asks 'Who checked the store?' and Jalla reads out three years of counted figures."},
      {q:"State the theme of the passage.", a:"That quiet, consistent work is worth more than confident talk, and that true service often goes unannounced."}
    ]
  },
  activities:[
    "In groups, develop composition using dependent and independent clauses",
    "In groups, read and dramatize a short story",
    "Analyze a play and determine whether it is a comedy, a satire or a tragedy",
    "Compare and contrast two characters from a story you have read, using a table of similarities and differences",
    "Discuss figures of speech in passages and incorporate them into your own speech and writing"
  ],
  materials:["Grade 9 English pupil's book","Selected African drama","Exercise books","Dictionary"],
  assessment:["Assignment","Project composition","Quizzes","Tests"]
},
{
  grade:9, period:"VI", sem:"Two", icon:"🏛️",
  title:"Composition · Parts of Speech, Kinds of Writing and Points of View",
  subtitle:"Review of parts of speech, articles and letters, developing and defending a point of view, literary devices",
  outcomes:[
    "Learners are able to formulate composition using the parts of speech, kinds of writings, as well as read and analyze prose and poetry"
  ],
  objectives:[
    "Write sentences and paragraphs using the parts of speech",
    "Compose articles, letters and other pieces using the various kinds of writings and grammar mechanics",
    "Develop and defend a point of view in composition",
    "Read selected African drama",
    "Read and analyze prose and poetry"
  ],
  note:"To <b>defend a point of view</b>, state your claim clearly, give at least three reasons supported by evidence, answer the strongest objection against you, and close by restating your position. This is the structure of both an argumentative essay and a debate speech.",
  study:[
    /* ---- course text: Semester Two, Period VI (guide p. 32) ---- */
    {k:"h3", t:"Course Review: Parts of Speech in Writing"},
    {k:"p", t:"The last period of the junior high school course puts everything back to use. Write sentences and paragraphs with each part of speech doing its proper work – **beneath** a preposition, **swiftly** an adverb, **honesty** a noun – and let the sentence carry one complete thought."},
    {k:"bul", items:["Name the part of speech of every word you use often, and use it only in its own office.","Check the agreement of subject and verb across any words standing between them.","Keep one tense through a paragraph unless the time itself changes.","Choose the voice that suits: active to name the doer, passive when the thing done matters more.","Punctuate so the reader does not have to guess where a part ends."]},
    {k:"rule"},
    {k:"h3", t:"Articles, Letters, Orders and Inquiries"},
    {k:"p", t:"An **article** here means a piece of writing composed for a newspaper, magazine or assembly: a heading, then paragraphs each on one point, and a close that stays with the reader. With it go the letters learned in this course: **business**, **friendly**, **application**, **inquiry**, **request** and **order**."},
    {k:"num", items:["Decide what the writing is for, and pick the kind of writing that serves it.","Set the order – chronological for an account, order of importance for an argument.","Write the topic sentence or thesis first, and let nothing wander from it.","Apply the grammar mechanics: capitals, punctuation, agreement, tense, pronoun and antecedent.","Read the draft aloud; the ear finds what the eye forgives.","Copy it clean, and sign it."]},
    {k:"p", t:"**Grammar mechanics** is the name for this whole care over the workings of a sentence – and it is the part of writing that marks a junior high school graduate from a beginner."},
    {k:"rule"},
    {k:"h3", t:"Developing and Defending a Point of View"},
    {k:"num", items:["State the **claim** in one sentence.","Give the reasons, each in its own paragraph with its evidence.","Make a **concession**: grant what is true on the other side – “It is true that uniforms are an added cost for poor families, but…”","Meet the **counterargument**: answer the other side's best reason, and show why your claim still stands.","Conclude by restating the claim and the main reasons, without bringing in new evidence."]},
    {k:"p", t:"Keep the writing **objective** where the facts carry it – “The rainfall in July was 480 millimetres” – and mark the **subjective** judgment as a judgment: “July is the most unpleasant month.” The prefix **counter-** means against: **counterargument, counteract, counterpart, counterfeit**; **-sion** builds **conclusion, concession, decision, persuasion, expression**; and **ob- / sub-** mean toward and under in **objective, obstacle, subjective, substance, subtract**."},
    {k:"rule"},
    {k:"h3", t:"Reading African Drama, Prose and Poetry"},
    {k:"bul", items:["Read the drama for what is said and for what is meant; identify the devices as you go.","Name the figures of speech in the passage, then use them in your own writing.","Determine the central theme, and say how each scene helps it.","Discuss the genres and how a work crosses them.","Create your own poems and short stories on the topics the class has studied – teenage pregnancy, substance abuse, and the matters your own community raises."]},
    {k:"num", items:["Choose the topic, and write on it in each kind of writing in turn.","Develop a short drama in groups and act it out.","After the performance, say what the audience took away and what was lost."]},
    {k:"p", t:"Sight words for leaving the course with: **moreover, consequently, accordingly, notwithstanding, albeit, henceforth, thereby, insofar, whereby, conversely**."}
  ],
  focus:["Review of parts of speech","Articles and letters","Grammar mechanics","Developing a point of view","African drama","Literary devices"],
  words:[
    {w:"article (writing)", s:"ar-ti-cle", d:"a piece of writing for a newspaper or magazine", x:"She wrote an article on school sports."},
    {w:"claim", s:"claim", d:"the position an argument sets out to prove", x:"State your claim in one sentence."},
    {w:"counterargument", s:"coun-ter-ar-gu-ment", d:"the opposing point of view", x:"Answer the counterargument fairly."},
    {w:"concession", s:"con-ces-sion", d:"admitting part of the other side's point", x:"A concession makes an argument stronger."},
    {w:"grammar mechanics", s:"gram-mar me-chan-ics", d:"spelling, punctuation and capitalization in writing", x:"Check your grammar mechanics before submitting."},
    {w:"coherent", s:"co-her-ent", d:"clear and logically connected", x:"A coherent essay is easy to follow."},
    {w:"emphasis", s:"em-pha-sis", d:"special importance given to a word or idea", x:"Place the emphasis on your strongest point."},
    {w:"objective", s:"ob-jec-tive", d:"based on facts, not personal feelings", x:"A news report should be objective."},
    {w:"subjective", s:"sub-jec-tive", d:"based on personal feelings or opinions", x:"A review is subjective."},
    {w:"conclusion", s:"con-clu-sion", d:"the closing part that sums up an argument", x:"The conclusion restates the claim."}
  ],
  sight:["moreover","consequently","accordingly","notwithstanding","albeit","henceforth","thereby","insofar","whereby","conversely"],
  phonics:[
    {p:"counter-", label:"the prefix counter- meaning against", words:["counterargument","counteract","counterpart","counterfeit","counterattack"]},
    {p:"-sion", label:"nouns ending in -sion", words:["conclusion","concession","decision","persuasion","expression"]},
    {p:"ob- / sub-", label:"prefixes meaning toward and under", words:["objective","obstacle","subjective","substance","subtract"]}
  ],
  grammar:[
    {q:"Name the part of speech of 'beneath' in: The key lay beneath the mat.", a:"Preposition", why:"It shows the position of the key."},
    {q:"Name the part of speech of 'swiftly' in: The canoe moved swiftly.", a:"Adverb", why:"It tells how the canoe moved."},
    {q:"Name the part of speech of 'honesty' in: Honesty is rewarded.", a:"Noun", why:"It names an idea and is the subject."},
    {q:"Objective or subjective? The rainfall in July was 480 millimetres.", a:"Objective", why:"It is a measurable fact."},
    {q:"Objective or subjective? July is the most unpleasant month.", a:"Subjective", why:"It expresses a personal feeling."},
    {q:"Write a concession for the claim 'School uniforms should be compulsory'.", a:"It is true that uniforms are an added cost for poor families, but…", why:"A concession admits a fair point before answering it."},
    {q:"Correct the mechanics: their are three reasons why we should act now", a:"There are three reasons why we should act now.", why:"Their/there confusion, capital letter and full stop."},
    {q:"What should the conclusion of an argumentative essay do?", a:"Restate the claim and sum up the main reasons, without introducing new evidence.", why:"The conclusion closes the argument."}
  ],
  pairs:[
    {a:"objective", b:"subjective", kind:"contrast"},
    {a:"claim", b:"counterargument", kind:"contrast"},
    {a:"concession", b:"admitting a point", kind:"related pair"},
    {a:"coherent", b:"confused", kind:"antonym"},
    {a:"conclusion", b:"summary", kind:"synonym"},
    {a:"article", b:"newspaper", kind:"related pair"}
  ],
  passage:{
    title:"Octopus at Ducor",
    text:"The hotel sits above the city like a skull\nwith the windows knocked out,\neight arms of broken corridor\nreaching down into the harbour light.\n\nOnce there were tourists here,\nand a piano, and ice in the glasses.\nNow the goats climb the marble\nand the sea keeps its old appointment with the rocks.\n\nMy father worked in that building\nand wore a jacket to do it.\nHe says the lifts had mirrors\nand the mirrors had no cracks.\n\nI climb up sometimes at evening\nto watch Monrovia switch on her few lights,\nand I think: a city is not a building.\nA city is the people who keep climbing to look.",
    qs:[
      {q:"What building is described in the poem?", a:"The Ducor Hotel, standing ruined above Monrovia."},
      {q:"Identify the simile in the first stanza and explain it.", a:"'sits above the city like a skull / with the windows knocked out' — the empty hotel is compared to a skull, suggesting death, ruin and empty eye sockets."},
      {q:"Why is the poem titled 'Octopus'?", a:"Because the ruined hotel's corridors are described as 'eight arms' reaching down towards the harbour, like an octopus."},
      {q:"What contrast does the poet draw between the past and the present?", a:"The past had tourists, a piano, ice in the glasses and uncracked mirrors; the present has goats climbing the marble and a ruin."},
      {q:"Explain the point of view expressed in the final two lines.", a:"The poet argues that a city's true identity lies in its people and their persistence, not in its buildings, however grand they once were."}
    ]
  },
  activities:[
    "In groups, develop compositions on important social topics using the parts of speech correctly",
    "Compose an article, a letter and a report, applying correct grammar mechanics in each",
    "Develop and defend a point of view in writing, including a concession and an answer to the counterargument",
    "In groups, create poems and short stories and discuss the different genres",
    "Develop a short drama and act it out for the class"
  ],
  materials:["Grade 9 English pupil's book","Selected African drama and poetry","Exercise books","Dictionary"],
  assessment:["Assignment","Seatwork","Quizzes","Test"]
}
];

const EN_GENERAL = {
  intro:"English is the official language of Liberia and the medium of instruction in all schools. Competence in reading, writing, speaking and listening underpins achievement in every other subject.",
  objectives:[
    "Develop effective communication in speech and in writing.",
    "Read fluently and with comprehension across a range of texts.",
    "Apply the conventions of grammar, spelling and punctuation accurately.",
    "Think critically and creatively about what is read and written."
  ],
  approach:"Inclusive and differentiated learning is emphasised: individual seat work or work in small mixed groups according to gender, ability and learning styles."
};
