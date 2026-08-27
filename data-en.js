/* Curriculum data — Republic of Liberia, Elementary ENGLISH, Grades 1–6
   Derived from the "English 1-6" curriculum guide (129 pp.), 6 periods per grade.

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
