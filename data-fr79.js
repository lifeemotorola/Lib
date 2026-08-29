/* Curriculum data — Republic of Liberia, Junior High FRENCH, Grades 7–9
   Derived from the "French" Junior High curriculum guide (39 pp.), 6 periods per grade.

   Same unit shape as the elementary FR_CURRICULUM so GEN_FR renders it unchanged:
     grade · period · sem · icon · fr · en · outcomes[] · objectives[] · note
     · vocab[] {fr,en,say,e} · extra {title,items[]} · activities[] · materials[] · assessment[]

   Per the project rule, the "Digital Research Links" listed throughout the source
   guide (collinsdictionary.com, linguee.com, youtube.com) are deliberately omitted:
   the pack must stay fully offline.
*/

const FR_CURRICULUM_79 = [

/* ================================ GRADE 7 ================================ */
{
  grade:7, period:"I", sem:"One", icon:"🤝",
  fr:"Salutation, se présenter et présenter d'autres",
  en:"Greetings — Introducing Oneself and Others",
  outcomes:[
    "Develop the art of speaking correctly",
    "Improve social interaction through conversation",
    "Apply singular and plural nouns in speaking and writing",
    "Apply adjective–noun agreement in speaking and writing",
    "Translate from French to English and English to French"
  ],
  objectives:[
    "Exchange greetings with others",
    "Introduce himself/herself and other people",
    "Use adjectives relating to nationality and professional titles",
    "Recognize and use the plurals of regular nouns and adjectives",
    "Express age using avoir"
  ],
  note:"Introduce yourself with <b>Je m'appelle + nom</b> and ask <b>Comment tu t'appelles ?</b> Present someone with <b>C'est + nom</b> or <b>Voici / Voilà + nom</b>. Age uses <b>avoir</b>, not être: <i>J'ai treize ans.</i> Nationality adjectives agree: <i>il est libérien</i> / <i>elle est libérienne</i>.",
  vocab:[
    {fr:"Je m'appelle…", en:"My name is…", say:"zhuh mah-PELL", e:"🙋"},
    {fr:"Comment tu t'appelles ?", en:"What is your name?", say:"ko-mahn tu tah-PELL", e:"❓"},
    {fr:"Enchanté(e)", en:"Pleased to meet you", say:"ahn-shahn-TAY", e:"😊"},
    {fr:"Voici mon ami", en:"This is my friend", say:"vwah-SEE mon nah-MEE", e:"👥"},
    {fr:"Je te présente…", en:"Let me introduce to you…", say:"zhuh tuh pray-ZAHNT", e:"🤝"},
    {fr:"J'ai treize ans", en:"I am thirteen years old", say:"zhay TREZ ahn", e:"🎂"},
    {fr:"Quel âge as-tu ?", en:"How old are you?", say:"kel AHZH ah-TU", e:"🔢"},
    {fr:"Je suis libérien(ne)", en:"I am Liberian", say:"zhuh swee lee-bay-RYAN", e:"🇱🇷"},
    {fr:"Il est ghanéen", en:"He is Ghanaian", say:"eel ay gah-nay-AN", e:"🌍"},
    {fr:"Elle est guinéenne", en:"She is Guinean", say:"el ay gee-nay-EN", e:"🌍"},
    {fr:"un élève / une élève", en:"a pupil (m/f)", say:"un ay-LEV", e:"🎒"},
    {fr:"un professeur", en:"a teacher", say:"un pro-fuh-SUR", e:"👨‍🏫"},
    {fr:"un médecin", en:"a doctor", say:"un mayd-SAN", e:"⚕️"},
    {fr:"un commerçant", en:"a trader", say:"un ko-mair-SAHN", e:"🏪"},
    {fr:"Comment allez-vous ?", en:"How are you? (polite)", say:"ko-mahn tah-lay VOO", e:"🙂"},
    {fr:"Très bien, merci", en:"Very well, thank you", say:"tray BYAN mair-SEE", e:"👍"},
    {fr:"À bientôt", en:"See you soon", say:"ah byan-TOH", e:"👋"}
  ],
  extra:{title:"Le pluriel et les nationalités", items:[
    "Most nouns add -s in the plural: un livre → des livres · un élève → des élèves",
    "Nouns ending in -s, -x, -z do not change: un pays → des pays",
    "Adjectives agree: il est petit → elle est petite → ils sont petits → elles sont petites",
    "Nationalities: libérien / libérienne · sénégalais / sénégalaise · français / française",
    "Age uses avoir: j'ai 13 ans · tu as 14 ans · il a 15 ans"
  ]},
  activities:["Listening to and reading a greeting dialogue","Dramatize the dialogue in pairs","Differentiate masculine from feminine nouns and adjectives","Write the key points to consider when making an introduction"],
  materials:["Visual aids: photos, posters, drawings","Textbook: Je me débrouille en français","Flash cards of professions and nationalities"],
  assessment:["Continuous assessment","Oral presentation of an introduction","Written translation exercise","Homework"]
},
{
  grade:7, period:"II", sem:"One", icon:"📣",
  fr:"Donner et exécuter l'ordre",
  en:"Giving and Executing Orders",
  outcomes:[
    "Develop the ability to understand, give and carry out instructions",
    "Improve listening and comprehension skills",
    "Improve social interaction through conversation",
    "Translate from French to English and English to French, orally and in writing"
  ],
  objectives:[
    "Identify and name the objects of the classroom",
    "Understand and carry out instructions",
    "Identify and use verbs related to the classroom environment",
    "Show ownership using possessive adjectives",
    "Use the imperative form of common verbs"
  ],
  note:"The <b>imperative</b> gives an order. Drop the subject pronoun: <i>tu écoutes</i> → <b>Écoute !</b> · <i>vous écoutez</i> → <b>Écoutez !</b> For -er verbs the tu form loses its -s: <b>Regarde !</b> Show ownership with <b>mon / ton / son</b> (m.), <b>ma / ta / sa</b> (f.), <b>mes / tes / ses</b> (pl.): <i>C'est ton livre ?</i>",
  vocab:[
    {fr:"le tableau", en:"the blackboard", say:"luh tah-BLOH", e:"📋"},
    {fr:"la chaise", en:"the chair", say:"lah SHEZ", e:"🪑"},
    {fr:"la table", en:"the table", say:"lah TAHBL", e:"🛋️"},
    {fr:"le livre", en:"the book", say:"luh LEEVR", e:"📕"},
    {fr:"le cahier", en:"the exercise book", say:"luh kah-YAY", e:"📓"},
    {fr:"le stylo", en:"the pen", say:"luh stee-LOH", e:"🖊️"},
    {fr:"la craie", en:"the chalk", say:"lah KREH", e:"✏️"},
    {fr:"la porte", en:"the door", say:"lah PORT", e:"🚪"},
    {fr:"la fenêtre", en:"the window", say:"lah fuh-NETR", e:"🪟"},
    {fr:"Écoutez !", en:"Listen!", say:"ay-koo-TAY", e:"👂"},
    {fr:"Écrivez !", en:"Write!", say:"ay-kree-VAY", e:"✍️"},
    {fr:"Lisez !", en:"Read!", say:"lee-ZAY", e:"📖"},
    {fr:"Regardez !", en:"Look!", say:"ruh-gar-DAY", e:"👀"},
    {fr:"Levez-vous !", en:"Stand up!", say:"luh-vay VOO", e:"🧍"},
    {fr:"Asseyez-vous !", en:"Sit down!", say:"ah-say-yay VOO", e:"🪑"},
    {fr:"Ouvrez la porte !", en:"Open the door!", say:"oo-VRAY lah PORT", e:"🚪"},
    {fr:"Allez au tableau !", en:"Go to the board!", say:"ah-LAY oh tah-BLOH", e:"➡️"},
    {fr:"C'est ton livre ?", en:"Is this your book?", say:"say ton LEEVR", e:"❓"}
  ],
  extra:{title:"L'impératif et les adjectifs possessifs", items:[
    "Imperative (tu / vous): Écoute ! / Écoutez ! · Lis ! / Lisez ! · Va ! / Allez !",
    "Pronominal verbs: se lever → Lève-toi ! / Levez-vous ! · s'asseoir → Assieds-toi ! / Asseyez-vous !",
    "Negative order: Ne parle pas ! · Ne sortez pas !",
    "Possessives: mon livre · ma chaise · mes cahiers · ton stylo · ta table · tes crayons",
    "Prepositions of place: sur, sous, dans, devant, derrière, à côté de"
  ]},
  activities:["Listening to and reading a classroom dialogue","Dramatize the dialogue","Conjugate verbs in the imperative","Oral and written drills"],
  materials:["Audio-visual aids","Visual aids: photos, posters, drawings","Real classroom objects","Textbook: Je me débrouille en français"],
  assessment:["Continuous assessment","Carrying out spoken instructions","Written imperative exercise","Homework"]
},
{
  grade:7, period:"III", sem:"One", icon:"📞",
  fr:"Communiquer par téléphone",
  en:"Communicating via Telephone",
  outcomes:[
    "Make and take telephone calls using the appropriate expressions in French",
    "Improve listening and communication skills",
    "Improve social interaction through conversation",
    "Translate from French to English and English to French"
  ],
  objectives:[
    "Communicate with others in French while making telephone calls",
    "Identify and use different forms of questions",
    "Ask and answer questions using interrogative words",
    "Tell the time and write dates",
    "Count from 100 to 200"
  ],
  note:"On the telephone say <b>Allô ?</b> then <b>Je voudrais parler à…</b> Ask who is calling with <b>C'est de la part de qui ?</b> Tell the time with <b>Il est + heure</b>: <i>Il est huit heures et demie.</i> A question can be formed by rising intonation (<i>Tu es élève ?</i>), by <b>est-ce que</b>, or by inversion (<i>Es-tu élève ?</i>).",
  vocab:[
    {fr:"Allô ?", en:"Hello? (on the phone)", say:"ah-LOH", e:"📞"},
    {fr:"Je voudrais parler à…", en:"I would like to speak to…", say:"zhuh voo-DREH par-LAY ah", e:"🗣️"},
    {fr:"C'est de la part de qui ?", en:"Who is calling?", say:"say duh lah PAR duh KEE", e:"❓"},
    {fr:"Ne quittez pas", en:"Hold the line", say:"nuh kee-tay PAH", e:"⏳"},
    {fr:"composer un numéro", en:"to dial a number", say:"kom-po-ZAY un nu-may-ROH", e:"🔢"},
    {fr:"rappeler", en:"to call back", say:"rah-play", e:"🔁"},
    {fr:"un rendez-vous", en:"an appointment", say:"un rahn-day VOO", e:"📅"},
    {fr:"prendre rendez-vous", en:"to make an appointment", say:"PRAHNDR rahn-day VOO", e:"🗓️"},
    {fr:"annuler", en:"to cancel", say:"ah-nu-LAY", e:"❌"},
    {fr:"épeler", en:"to spell out", say:"ay-play", e:"🔤"},
    {fr:"Quelle heure est-il ?", en:"What time is it?", say:"kel UR ay-TEEL", e:"🕐"},
    {fr:"Il est huit heures", en:"It is eight o'clock", say:"eel ay wee TUR", e:"🕗"},
    {fr:"et demie", en:"half past", say:"ay duh-MEE", e:"🕠"},
    {fr:"et quart", en:"quarter past", say:"ay KAR", e:"🕜"},
    {fr:"Quel jour sommes-nous ?", en:"What day is it?", say:"kel ZHOOR som NOO", e:"📆"},
    {fr:"cent", en:"one hundred", say:"SAHN", e:"💯"},
    {fr:"cent cinquante", en:"one hundred and fifty", say:"sahn san-KAHNT", e:"🔢"},
    {fr:"deux cents", en:"two hundred", say:"duh SAHN", e:"🔢"}
  ],
  extra:{title:"Les nombres 100–200 et l'heure", items:[
    "100 cent · 101 cent un · 110 cent dix · 120 cent vingt · 150 cent cinquante · 175 cent soixante-quinze · 200 deux cents",
    "Note: cent takes no -s when followed by another number — deux cents but deux cent cinq",
    "Telling time: Il est une heure · Il est deux heures dix · Il est trois heures et quart · Il est midi · Il est minuit",
    "Dates: Nous sommes le lundi 5 mars.  (le + number + month)",
    "Question forms: Tu viens ? · Est-ce que tu viens ? · Viens-tu ?"
  ]},
  activities:["Role play making and receiving a telephone call","Write the important points to consider when telephoning","Construct interrogative sentences using rising intonation","Oral drills counting from 100 to 200"],
  materials:["Audio-visual aids","Visual aids: photos, posters, drawings","Toy or disconnected telephone handsets","Textbook: Bon voyage"],
  assessment:["Continuous assessment","Role-played telephone conversation","Written exercise on time and dates","Homework"]
},
{
  grade:7, period:"IV", sem:"Two", icon:"🎨",
  fr:"Décrire des personnes, des objets et des lieux",
  en:"Describing People, Objects and Places",
  outcomes:[
    "Build and develop vocabulary through the effective use of descriptive words",
    "Develop skill in the appropriate use of adjectives in speaking and writing",
    "Improve listening and communication skills",
    "Translate from French to English and English to French"
  ],
  objectives:[
    "Use different descriptive words to describe a person or an object",
    "Identify and distinguish the masculine and feminine forms of descriptive adjectives",
    "Use the structures être + adjectif and avoir + adjectif + nom",
    "Use colour adjectives correctly"
  ],
  note:"Describe with <b>être + adjectif</b>: <i>Il est grand.</i> / <i>Elle est grande.</i> Present with <b>C'est + article + adjectif + nom</b>: <i>C'est un gros livre.</i> Most French adjectives follow the noun (<i>une chemise blanche</i>), but a few short common ones come first: <b>grand, petit, gros, beau, joli, jeune, vieux, bon, mauvais</b>.",
  vocab:[
    {fr:"grand / grande", en:"tall, big", say:"grahn / GRAHND", e:"📏"},
    {fr:"petit / petite", en:"small, short", say:"puh-TEE / puh-TEET", e:"🐁"},
    {fr:"gros / grosse", en:"fat, thick", say:"GROH / GROSS", e:"🎈"},
    {fr:"mince", en:"slim", say:"MANSS", e:"🧍"},
    {fr:"beau / belle", en:"handsome / beautiful", say:"BOH / BELL", e:"✨"},
    {fr:"joli / jolie", en:"pretty", say:"zho-LEE", e:"🌸"},
    {fr:"jeune", en:"young", say:"ZHUN", e:"🧒"},
    {fr:"vieux / vieille", en:"old", say:"VYUH / VYAY", e:"👴"},
    {fr:"long / longue", en:"long", say:"LOHN / LONG", e:"➖"},
    {fr:"court / courte", en:"short (in length)", say:"KOOR / KOORT", e:"✂️"},
    {fr:"méchant / méchante", en:"wicked, unkind", say:"may-SHAHN", e:"😠"},
    {fr:"gentil / gentille", en:"kind, nice", say:"zhahn-TEE / zhahn-TEEY", e:"😇"},
    {fr:"rouge", en:"red", say:"ROOZH", e:"🔴"},
    {fr:"bleu / bleue", en:"blue", say:"BLUH", e:"🔵"},
    {fr:"vert / verte", en:"green", say:"VAIR / VAIRT", e:"🟢"},
    {fr:"jaune", en:"yellow", say:"ZHOHN", e:"🟡"},
    {fr:"noir / noire", en:"black", say:"NWAHR", e:"⚫"},
    {fr:"blanc / blanche", en:"white", say:"BLAHN / BLAHNSH", e:"⚪"}
  ],
  extra:{title:"L'accord des adjectifs", items:[
    "Regular: add -e for feminine, -s for plural — petit / petite / petits / petites",
    "Adjectives already ending in -e do not change: rouge, jaune, mince, jeune",
    "Irregular pairs: gros/grosse · beau/belle · vieux/vieille · blanc/blanche · long/longue",
    "Structures: Il est gros. · Elle est grosse. · C'est un gros livre. · Il a un gros ventre.",
    "Voici un chien méchant. · Voilà une belle maison."
  ]},
  activities:["Identify descriptive words in a sentence","Write sentences describing a person","Select a classmate or picture and describe it positively","Oral and written drills on adjective agreement"],
  materials:["Audio-visual aids","Visual aids: photos, posters, drawings","Coloured objects and cards","Textbook: Je me débrouille en français"],
  assessment:["Continuous assessment","Oral description of a picture","Written description paragraph","Homework"]
},
{
  grade:7, period:"V", sem:"Two", icon:"✈️",
  fr:"Le transport et les voyages",
  en:"Transportation and Travel",
  outcomes:[
    "Appreciate the importance of the various means of transport",
    "Develop the ability to buy tickets and make inquiries about flights, trains, hotels and restaurants",
    "Improve experience and social contact through travel",
    "Translate from French to English and English to French"
  ],
  objectives:[
    "Identify the different means of transport",
    "Inquire about information relating to travel",
    "Use aller + lieu and venir de + lieu correctly",
    "Use prepositions of place in speaking and writing"
  ],
  note:"Travel by a means of transport uses <b>en</b> or <b>à</b>: <i>en voiture, en avion, en bus</i> but <b>à pied</b>, <b>à vélo</b>. Going to a place: <b>aller à</b> — <i>Je vais à Buchanan.</i> Coming from a place: <b>venir de</b> — <i>Je viens de l'école.</i>",
  vocab:[
    {fr:"la voiture", en:"the car", say:"lah vwah-TUR", e:"🚗"},
    {fr:"le taxi", en:"the taxi", say:"luh tak-SEE", e:"🚕"},
    {fr:"le bus", en:"the bus", say:"luh BUS", e:"🚌"},
    {fr:"le train", en:"the train", say:"luh TRAN", e:"🚆"},
    {fr:"l'avion", en:"the aeroplane", say:"lah-VYON", e:"✈️"},
    {fr:"le bateau", en:"the boat", say:"luh bah-TOH", e:"⛵"},
    {fr:"le vélo", en:"the bicycle", say:"luh vay-LOH", e:"🚲"},
    {fr:"la gare", en:"the station", say:"lah GAR", e:"🚉"},
    {fr:"l'aéroport", en:"the airport", say:"lah-ay-ro-POR", e:"🛫"},
    {fr:"le départ", en:"the departure", say:"luh day-PAR", e:"🛄"},
    {fr:"l'arrivée", en:"the arrival", say:"lah-ree-VAY", e:"🛬"},
    {fr:"le billet", en:"the ticket", say:"luh bee-YAY", e:"🎫"},
    {fr:"faire une réservation", en:"to make a booking", say:"fair oon ray-zair-vah-SYON", e:"📝"},
    {fr:"loger dans un hôtel", en:"to stay in a hotel", say:"lo-ZHAY dahn zun oh-TEL", e:"🏨"},
    {fr:"Je vais à Buchanan", en:"I am going to Buchanan", say:"zhuh vay ah…", e:"➡️"},
    {fr:"Je viens de l'école", en:"I am coming from school", say:"zhuh vyan duh lay-KOL", e:"⬅️"},
    {fr:"devant", en:"in front of", say:"duh-VAHN", e:"⏩"},
    {fr:"derrière", en:"behind", say:"dair-YAIR", e:"⏪"}
  ],
  extra:{title:"Aller, venir et les prépositions", items:[
    "aller: je vais · tu vas · il/elle va · nous allons · vous allez · ils/elles vont",
    "venir: je viens · tu viens · il/elle vient · nous venons · vous venez · ils/elles viennent",
    "Means of transport: en voiture, en bus, en train, en avion, en bateau — but à pied, à vélo",
    "Prepositions: au-dessus de, au-dessous de, devant, derrière, à côté de, entre, sur, sous",
    "Useful questions: À quelle heure part le bus ? · Combien coûte le billet ?"
  ]},
  activities:["Listening to and reading travel dialogues","Oral and written drills","Conjugate and use aller and venir","Role play buying a ticket at the station"],
  materials:["Audio-visual aids","Visual aids: photos, posters, drawings of vehicles","Sample tickets and timetables","Textbook: Bon voyage"],
  assessment:["Continuous assessment","Role play at a ticket counter","Written exercise on aller / venir","Homework"]
},
{
  grade:7, period:"VI", sem:"Two", icon:"⚽",
  fr:"Exprimer les goûts et les préférences",
  en:"Expressing Likes, Dislikes and Preference",
  outcomes:[
    "Develop the ability to express desires — likes and dislikes",
    "Improve social interaction through conversation",
    "Translate from French to English and English to French"
  ],
  objectives:[
    "Express their likes, dislikes and preferences",
    "Make a choice and justify it",
    "Use jouer à with sports and jouer de with instruments",
    "Name places of leisure in French"
  ],
  note:"Say what you like with <b>J'aime</b> and what you dislike with <b>Je n'aime pas</b>; prefer with <b>Je préfère</b>. With sports use <b>jouer à</b>: <i>je joue au football</i>. With instruments use <b>jouer de</b>: <i>je joue du tambour</i>. Remember à + le = <b>au</b>, de + le = <b>du</b>.",
  vocab:[
    {fr:"J'aime", en:"I like", say:"ZHEM", e:"❤️"},
    {fr:"Je n'aime pas", en:"I do not like", say:"zhuh nem PAH", e:"💔"},
    {fr:"Je préfère", en:"I prefer", say:"zhuh pray-FAIR", e:"⭐"},
    {fr:"Je déteste", en:"I hate", say:"zhuh day-TEST", e:"🙅"},
    {fr:"le football", en:"football", say:"luh foot-BOL", e:"⚽"},
    {fr:"le basket", en:"basketball", say:"luh bas-KET", e:"🏀"},
    {fr:"la natation", en:"swimming", say:"lah nah-tah-SYON", e:"🏊"},
    {fr:"la danse", en:"dancing", say:"lah DAHNSS", e:"💃"},
    {fr:"la musique", en:"music", say:"lah mu-ZEEK", e:"🎵"},
    {fr:"le tambour", en:"the drum", say:"luh tahm-BOOR", e:"🥁"},
    {fr:"la guitare", en:"the guitar", say:"lah gee-TAR", e:"🎸"},
    {fr:"le stade", en:"the stadium", say:"luh STAHD", e:"🏟️"},
    {fr:"le parc", en:"the park", say:"luh PARK", e:"🌳"},
    {fr:"le cinéma", en:"the cinema", say:"luh see-nay-MAH", e:"🎬"},
    {fr:"le restaurant", en:"the restaurant", say:"luh res-toh-RAHN", e:"🍽️"},
    {fr:"le théâtre", en:"the theatre", say:"luh tay-AHTR", e:"🎭"},
    {fr:"Je joue au football", en:"I play football", say:"zhuh zhoo oh foot-BOL", e:"⚽"},
    {fr:"Je joue du tambour", en:"I play the drum", say:"zhuh zhoo du tahm-BOOR", e:"🥁"}
  ],
  extra:{title:"Jouer à / jouer de · aimer", items:[
    "aimer: j'aime · tu aimes · il/elle aime · nous aimons · vous aimez · ils/elles aiment",
    "Negative: je n'aime pas · tu n'aimes pas · il n'aime pas",
    "Sports — jouer à: au football, au basket, au tennis, aux cartes",
    "Instruments — jouer de: du tambour, de la guitare, du piano, de la flûte",
    "Preference: Je préfère le football au basket. (I prefer football to basketball.)"
  ]},
  activities:["Listening to and reading texts and dialogues","Oral and written drills","Role play expressing a preference","Prepare and exhibit photos of sports and instruments"],
  materials:["Audio-visual aids","Visual aids: photos, posters, drawings","Pictures of sports and musical instruments","Textbook: Easy French Step by Step"],
  assessment:["Continuous assessment","Oral statement of likes and dislikes","Written exercise on jouer à / jouer de","Homework"]
},

/* ================================ GRADE 8 ================================ */
{
  grade:8, period:"I", sem:"One", icon:"🌍",
  fr:"Salutation, se présenter — les nationalités",
  en:"Greetings and Introductions — Nationalities",
  outcomes:[
    "Develop the art of speaking correctly",
    "Improve social interaction through conversation",
    "Apply singular and plural nouns in speaking and writing",
    "Apply adjective–noun agreement in speaking and writing"
  ],
  objectives:[
    "Exchange greetings with others at a more advanced level",
    "Introduce himself/herself and other people",
    "Use adjectives relating to nationality and professional titles",
    "Recognize and use the plurals of regular nouns and adjectives",
    "Express age with avoir"
  ],
  note:"Nationality adjectives are <b>not capitalised</b> in French: <i>je suis libérien</i>. Feminine usually adds -e and doubles some consonants: <i>libérien → libérienne</i>, <i>sénégalais → sénégalaise</i>. Ask about family with <b>Quel est + adjectif possessif + nom</b>: <i>Quel est ton nom ?</i>",
  vocab:[
    {fr:"Quel est ton nom ?", en:"What is your name?", say:"kel ay ton NOHN", e:"❓"},
    {fr:"Mon nom est…", en:"My name is…", say:"mon NOHN ay", e:"🙋"},
    {fr:"Je te présente ma sœur", en:"This is my sister", say:"zhuh tuh pray-ZAHNT mah SUR", e:"👧"},
    {fr:"Ravi de vous connaître", en:"Delighted to know you", say:"rah-VEE duh voo ko-NETR", e:"🤝"},
    {fr:"libérien / libérienne", en:"Liberian", say:"lee-bay-RYAN / -RYEN", e:"🇱🇷"},
    {fr:"sénégalais / sénégalaise", en:"Senegalese", say:"say-nay-gah-LAY / -LEZ", e:"🌍"},
    {fr:"ivoirien / ivoirienne", en:"Ivorian", say:"eev-wah-RYAN", e:"🌍"},
    {fr:"français / française", en:"French", say:"frahn-SAY / -SEZ", e:"🇫🇷"},
    {fr:"nigérian / nigériane", en:"Nigerian", say:"nee-zhay-RYAHN", e:"🌍"},
    {fr:"un ingénieur", en:"an engineer", say:"un an-zhay-NYUR", e:"🛠️"},
    {fr:"une infirmière", en:"a nurse (f.)", say:"oon an-feer-MYAIR", e:"💉"},
    {fr:"un avocat", en:"a lawyer", say:"un ah-vo-KAH", e:"⚖️"},
    {fr:"un fermier", en:"a farmer", say:"un fair-MYAY", e:"🌾"},
    {fr:"un pêcheur", en:"a fisherman", say:"un pay-SHUR", e:"🎣"},
    {fr:"Il a quinze ans", en:"He is fifteen years old", say:"eel ah KANZ ahn", e:"🎂"},
    {fr:"D'où viens-tu ?", en:"Where do you come from?", say:"DOO vyan TU", e:"🧭"},
    {fr:"Je viens du Liberia", en:"I come from Liberia", say:"zhuh vyan du…", e:"🇱🇷"},
    {fr:"J'habite à Monrovia", en:"I live in Monrovia", say:"zhah-BEET ah…", e:"🏠"}
  ],
  extra:{title:"Les adjectifs de nationalité et le pluriel", items:[
    "Feminine forms: -ais → -aise · -ien → -ienne · -ain → -aine · -ois → -oise",
    "Plurals: un Libérien → des Libériens · une Libérienne → des Libériennes",
    "Nationalities are lower case as adjectives: il est français — but capitalised as nouns: un Français",
    "Professions after être take no article: Elle est infirmière. (not une infirmière)",
    "Countries: le Liberia, la Guinée, la Sierra Leone, la Côte d'Ivoire, le Sénégal, la France"
  ]},
  activities:["Listening to and reading dialogue","Dramatize the dialogue","Differentiate masculine from feminine nouns and adjectives","Oral drills on nationalities and professions"],
  materials:["Visual aids: photos, posters, drawings","Textbook: Je me débrouille en français","Map of French-speaking West Africa"],
  assessment:["Continuous assessment","Oral introduction of a classmate","Written exercise on agreement","Homework"]
},
{
  grade:8, period:"II", sem:"One", icon:"✉️",
  fr:"Utiliser différents moyens de communication",
  en:"Using Various Means of Communication",
  outcomes:[
    "Improve social interaction through oral and written communication",
    "Develop the ability to make and respond to telephone calls using appropriate expressions",
    "Translate from French to English and English to French"
  ],
  objectives:[
    "Communicate with others in French while making telephone calls",
    "Write a friendly letter or an invitation",
    "Identify and use different forms of questions",
    "Ask and answer questions using interrogative words"
  ],
  note:"A friendly letter opens <b>Cher ami / Chère amie</b> and closes <b>Amicalement</b> or <b>Amitiés</b>. Questions may be formed three ways: intonation (<i>Tu vas à l'école ?</i>), <b>est-ce que</b> (<i>Est-ce que tu vas à l'école ?</i>), or <b>inversion</b> (<i>Vas-tu à l'école ?</i>).",
  vocab:[
    {fr:"Cher ami / Chère amie", en:"Dear friend (m/f)", say:"shair ah-MEE", e:"✉️"},
    {fr:"Amicalement", en:"Kind regards", say:"ah-mee-kal-MAHN", e:"🤗"},
    {fr:"une lettre", en:"a letter", say:"oon LETR", e:"📄"},
    {fr:"une enveloppe", en:"an envelope", say:"oon ahn-VLOP", e:"✉️"},
    {fr:"une invitation", en:"an invitation", say:"oon an-vee-tah-SYON", e:"💌"},
    {fr:"écrire", en:"to write", say:"ay-KREER", e:"✍️"},
    {fr:"envoyer", en:"to send", say:"ahn-vwah-YAY", e:"📤"},
    {fr:"répondre", en:"to reply", say:"ray-PONDR", e:"↩️"},
    {fr:"Comment t'appelles-tu ?", en:"What is your name? (inversion)", say:"ko-mahn tah-PELL tu", e:"❓"},
    {fr:"Qui êtes-vous ?", en:"Who are you?", say:"kee et VOO", e:"🙋"},
    {fr:"Que faites-vous ?", en:"What do you do?", say:"kuh fet VOO", e:"🛠️"},
    {fr:"Où habitez-vous ?", en:"Where do you live?", say:"OO ah-bee-tay VOO", e:"🏠"},
    {fr:"Quand arrives-tu ?", en:"When do you arrive?", say:"kahn tah-REEV tu", e:"⏰"},
    {fr:"Pourquoi ?", en:"Why?", say:"poor-KWAH", e:"❔"},
    {fr:"Parce que…", en:"Because…", say:"par-suh kuh", e:"💬"},
    {fr:"Est-ce que tu viens ?", en:"Are you coming?", say:"es-kuh tu VYAN", e:"❓"},
    {fr:"le portable", en:"the mobile phone", say:"luh por-TAHBL", e:"📱"},
    {fr:"la radio", en:"the radio", say:"lah rah-DYOH", e:"📻"}
  ],
  extra:{title:"La lettre amicale et l'interrogation", items:[
    "Layout: place and date · Cher ami, · body · Amicalement, · signature",
    "Inversion: Vas-tu ? · Es-tu ? · As-tu ? · Fais-tu ? — add -t- for il/elle: Va-t-il ? Parle-t-elle ?",
    "Interrogative words: qui, que/quoi, où, quand, pourquoi, comment, combien, quel(le)",
    "Quel agrees: Quel jour ? · Quelle heure ? · Quels livres ? · Quelles amies ?",
    "Three question forms carry the same meaning but different levels of formality"
  ]},
  activities:["Write the important points to consider when making a telephone call","Construct interrogative sentences using rising intonation and inversion","Write a short friendly letter","Role play a telephone conversation"],
  materials:["Audio-visual aids","Visual aids: photos, posters, drawings","Sample letters and invitation cards","Textbook: Le nouveau sans frontières"],
  assessment:["Continuous assessment","Written friendly letter","Question-formation exercise","Homework"]
},
{
  grade:8, period:"III", sem:"One", icon:"💭",
  fr:"Exprimer une opinion",
  en:"Expressing One's Opinion",
  outcomes:[
    "Develop the ability to express views and make critical judgements",
    "Appreciate other people's opinions",
    "Improve social interaction through argumentation",
    "Translate from French to English and English to French"
  ],
  objectives:[
    "Express an opinion in French",
    "React to the opinions and views of others",
    "Agree and disagree politely",
    "Construct sentences of opinion correctly"
  ],
  note:"Give an opinion with <b>Je pense que…</b>, <b>Je crois que…</b> or <b>À mon avis…</b> Agree with <b>Je suis d'accord</b> or <b>Je partage l'avis de + nom</b>. Disagree politely with <b>Je ne suis pas d'accord</b> or <b>C'est faux !</b>",
  vocab:[
    {fr:"À mon avis", en:"In my opinion", say:"ah mon nah-VEE", e:"💭"},
    {fr:"Je pense que…", en:"I think that…", say:"zhuh PAHNSS kuh", e:"🧠"},
    {fr:"Je crois que…", en:"I believe that…", say:"zhuh KRWAH kuh", e:"🙏"},
    {fr:"Je suis d'accord", en:"I agree", say:"zhuh swee dah-KOR", e:"✅"},
    {fr:"Je ne suis pas d'accord", en:"I disagree", say:"zhuh nuh swee pah dah-KOR", e:"❌"},
    {fr:"Je partage l'avis de…", en:"I share the view of…", say:"zhuh par-TAHZH lah-VEE duh", e:"🤝"},
    {fr:"J'ai le même avis", en:"I have the same opinion", say:"zhay luh mem ah-VEE", e:"🟰"},
    {fr:"J'admets que…", en:"I admit that…", say:"zhad-MAY kuh", e:"🙇"},
    {fr:"C'est vrai", en:"That is true", say:"say VRAY", e:"✔️"},
    {fr:"C'est faux", en:"That is false", say:"say FOH", e:"✖️"},
    {fr:"Tu as raison", en:"You are right", say:"tu ah ray-ZON", e:"👍"},
    {fr:"Tu as tort", en:"You are wrong", say:"tu ah TOR", e:"👎"},
    {fr:"peut-être", en:"perhaps", say:"puh-TETR", e:"🤔"},
    {fr:"bien sûr", en:"of course", say:"byan SUR", e:"💯"},
    {fr:"une opinion", en:"an opinion", say:"oon o-pee-NYON", e:"💬"},
    {fr:"un avis", en:"a view, an opinion", say:"un ah-VEE", e:"🗨️"},
    {fr:"discuter", en:"to discuss", say:"dees-ku-TAY", e:"🗣️"},
    {fr:"expliquer", en:"to explain", say:"eks-plee-KAY", e:"📖"}
  ],
  extra:{title:"Structures pour l'opinion", items:[
    "J'ai le même avis que + nom/prénom — I have the same opinion as…",
    "Je partage l'avis / l'opinion de + nom — I share the opinion of…",
    "J'admets que + phrase — I admit that…",
    "Agreeing: Je suis d'accord avec toi. · Tu as raison. · C'est vrai !",
    "Disagreeing politely: Je ne suis pas d'accord. · Je pense le contraire. · C'est faux !"
  ]},
  activities:["Listening to and reading dialogues and texts","Construct sentences expressing an opinion","Exhibit photos and drawings in the classroom","Role play a friendly argument"],
  materials:["Visual aids: photos, posters, drawings","Textbook: Le nouveau sans frontières","Discussion prompt cards"],
  assessment:["Continuous assessment","Oral debate contribution","Written opinion sentences","Homework"]
},
{
  grade:8, period:"IV", sem:"Two", icon:"🛒",
  fr:"Ventes et achats",
  en:"Sales and Purchases",
  outcomes:[
    "Improve social interaction through activities related to buying and selling",
    "Develop oral communication skills and the ability to inquire about and negotiate prices",
    "Translate from French to English and English to French"
  ],
  objectives:[
    "Carry out simple transactions in French",
    "Ask for, give and appreciate prices",
    "Express quantity and cost",
    "Use intensive adverbs correctly"
  ],
  note:"Ask a price with <b>Combien coûte…?</b> or <b>Ça coûte combien ?</b> Judge a price with <b>C'est trop cher</b> (too expensive) or <b>C'est moins cher</b> (cheaper). Intensive adverbs go before the adjective: <b>trop, assez, beaucoup, moins, très, peu</b>.",
  vocab:[
    {fr:"le marché", en:"the market", say:"luh mar-SHAY", e:"🏪"},
    {fr:"le magasin", en:"the shop", say:"luh mah-gah-ZAN", e:"🛍️"},
    {fr:"acheter", en:"to buy", say:"ash-TAY", e:"🛒"},
    {fr:"vendre", en:"to sell", say:"VAHNDR", e:"💰"},
    {fr:"payer", en:"to pay", say:"pay-YAY", e:"💵"},
    {fr:"le prix", en:"the price", say:"luh PREE", e:"🏷️"},
    {fr:"Combien coûte… ?", en:"How much does… cost?", say:"kom-BYAN KOOT", e:"❓"},
    {fr:"C'est trop cher", en:"It is too expensive", say:"say troh SHAIR", e:"😮"},
    {fr:"C'est moins cher", en:"It is cheaper", say:"say mwan SHAIR", e:"🙂"},
    {fr:"un rabais", en:"a discount", say:"un rah-BAY", e:"📉"},
    {fr:"négocier", en:"to bargain", say:"nay-go-SYAY", e:"🤝"},
    {fr:"l'addition", en:"the bill", say:"lah-dee-SYON", e:"🧾"},
    {fr:"faire une commande", en:"to place an order", say:"fair oon ko-MAHND", e:"📋"},
    {fr:"la monnaie", en:"the change", say:"lah mo-NAY", e:"🪙"},
    {fr:"un kilo", en:"a kilo", say:"un kee-LOH", e:"⚖️"},
    {fr:"trop", en:"too much", say:"TROH", e:"⬆️"},
    {fr:"assez", en:"enough", say:"ah-SAY", e:"👌"},
    {fr:"beaucoup", en:"a lot", say:"boh-KOO", e:"➕"}
  ],
  extra:{title:"Marchander en français", items:[
    "Combien coûte ce livre ? — Il coûte cinq cents dollars.",
    "Est-ce que je peux payer demain ? — May I pay tomorrow?",
    "Vous pouvez faire un rabais ? — Can you give a discount?",
    "Intensive adverbs: c'est trop cher · c'est assez bon · j'aime beaucoup · c'est moins cher",
    "Quantities: un kilo de riz · un litre d'huile · une boîte de lait · beaucoup de fruits"
  ]},
  activities:["Listening to and reading a market dialogue","Role play simulating buying and selling","Conjugate and use acheter, vendre and payer","Collect and exhibit photos of commercial activity"],
  materials:["Audio-visual aids","Visual aids: photos, posters, drawings","Play money and price cards","Textbook: Je me débrouille en français"],
  assessment:["Continuous assessment","Role-played market transaction","Written exercise on prices and quantities","Homework"]
},
{
  grade:8, period:"V", sem:"Two", icon:"🏥",
  fr:"Santé et assainissement",
  en:"Health and Sanitation",
  outcomes:[
    "Adopt and develop the proper attitude towards health and sanitation",
    "Develop awareness of the need for a clean and safe environment",
    "Develop the habit of visiting a hospital or health centre in case of illness",
    "Translate from French to English and English to French"
  ],
  objectives:[
    "Inquire about and talk about health and health-related issues",
    "Identify and use appropriate health vocabulary and expressions",
    "Use the structure il faut + infinitif",
    "Describe cleaning tasks in the home and school"
  ],
  note:"Say what hurts with <b>avoir mal à</b>: <i>J'ai mal à la tête.</i> (à + le = <b>au</b>: <i>J'ai mal au ventre.</i>) Express obligation with <b>Il faut + infinitif</b>: <i>Il faut se laver les mains.</i>",
  vocab:[
    {fr:"la santé", en:"health", say:"lah sahn-TAY", e:"💚"},
    {fr:"malade", en:"sick, ill", say:"mah-LAHD", e:"🤒"},
    {fr:"l'hôpital", en:"the hospital", say:"loh-pee-TAL", e:"🏥"},
    {fr:"le médecin", en:"the doctor", say:"luh mayd-SAN", e:"⚕️"},
    {fr:"le médicament", en:"the medicine", say:"luh may-dee-kah-MAHN", e:"💊"},
    {fr:"la dose", en:"the dose", say:"lah DOHZ", e:"🥄"},
    {fr:"J'ai mal à la tête", en:"I have a headache", say:"zhay mal ah lah TET", e:"🤕"},
    {fr:"J'ai mal au ventre", en:"I have a stomach ache", say:"zhay mal oh VAHNTR", e:"😣"},
    {fr:"la fièvre", en:"the fever", say:"lah FYEVR", e:"🌡️"},
    {fr:"le paludisme", en:"malaria", say:"luh pah-lu-DEESM", e:"🦟"},
    {fr:"se laver les mains", en:"to wash one's hands", say:"suh lah-VAY lay MAN", e:"🧼"},
    {fr:"nettoyer", en:"to clean", say:"neh-twah-YAY", e:"🧽"},
    {fr:"balayer", en:"to sweep", say:"bah-lay-YAY", e:"🧹"},
    {fr:"faire la vaisselle", en:"to wash the dishes", say:"fair lah vay-SELL", e:"🍽️"},
    {fr:"faire la lessive", en:"to do the laundry", say:"fair lah lay-SEEV", e:"👕"},
    {fr:"propre", en:"clean", say:"PROPR", e:"✨"},
    {fr:"sale", en:"dirty", say:"SAHL", e:"🧴"},
    {fr:"Il faut se reposer", en:"One must rest", say:"eel foh suh ruh-po-ZAY", e:"🛌"}
  ],
  extra:{title:"Il faut + infinitif · avoir mal à", items:[
    "Il faut se laver les mains avant de manger.",
    "Il faut balayer la cour tous les jours.",
    "Il ne faut pas salir la classe.",
    "avoir mal à: à la tête · au ventre · à la gorge · aux dents · au dos",
    "Se rendre à l'hôpital · faire une visite médicale · respecter la dose"
  ]},
  activities:["Listening to and reading dialogues and texts","Prepare and exhibit posters on health issues","Role play a visit to the clinic","Oral and written drills on il faut"],
  materials:["Visual aids: photos, posters, drawings","Health education posters","Cleaning materials for demonstration","Textbook: Bon voyage"],
  assessment:["Continuous assessment","Role play at the health centre","Written exercise using il faut","Homework"]
},
{
  grade:8, period:"VI", sem:"Two", icon:"🖼️",
  fr:"Décrire des personnes, des objets et des lieux",
  en:"Describing People, Objects and Places",
  outcomes:[
    "Build and develop vocabulary through the effective use of descriptive words",
    "Develop skill in the appropriate use of adjectives in speaking and writing",
    "Improve listening and communication skills",
    "Improve social interaction through conversation"
  ],
  objectives:[
    "Identify and distinguish the masculine and feminine forms of descriptive adjectives",
    "Use different kinds of descriptive words to describe a person, place or thing",
    "Show ownership using prepositions and possessive forms",
    "Describe both the physical and the moral character of a person"
  ],
  note:"Describe character as well as appearance. Ownership is shown with <b>de</b>: <i>le livre de Musu</i> (Musu's book), or with possessive adjectives <b>mon / ton / son / notre / votre / leur</b>. Place words: <i>Le marché est <b>près de</b> l'école.</i>",
  vocab:[
    {fr:"les cheveux", en:"the hair", say:"lay shuh-VUH", e:"💇"},
    {fr:"les yeux", en:"the eyes", say:"lay ZYUH", e:"👁️"},
    {fr:"le visage", en:"the face", say:"luh vee-ZAHZH", e:"🙂"},
    {fr:"la taille", en:"the height, size", say:"lah TAHY", e:"📏"},
    {fr:"fort / forte", en:"strong", say:"FOR / FORT", e:"💪"},
    {fr:"faible", en:"weak", say:"FEBL", e:"🍃"},
    {fr:"intelligent / intelligente", en:"clever", say:"an-tay-lee-ZHAHN", e:"🧠"},
    {fr:"sérieux / sérieuse", en:"serious", say:"say-RYUH / -RYUZ", e:"🎓"},
    {fr:"paresseux / paresseuse", en:"lazy", say:"pah-ruh-SUH", e:"😴"},
    {fr:"travailleur / travailleuse", en:"hard-working", say:"trah-vah-YUR", e:"🛠️"},
    {fr:"honnête", en:"honest", say:"o-NET", e:"🤍"},
    {fr:"la maison", en:"the house", say:"lah may-ZON", e:"🏠"},
    {fr:"le village", en:"the village", say:"luh vee-LAHZH", e:"🏘️"},
    {fr:"la ville", en:"the town, city", say:"lah VEEL", e:"🏙️"},
    {fr:"large", en:"wide", say:"LARZH", e:"↔️"},
    {fr:"étroit / étroite", en:"narrow", say:"ay-TRWAH", e:"🚪"},
    {fr:"près de", en:"near to", say:"pray duh", e:"📍"},
    {fr:"loin de", en:"far from", say:"lwan duh", e:"🛣️"}
  ],
  extra:{title:"Le caractère et la possession", items:[
    "Physical: Il est grand et fort. Elle a les cheveux noirs et les yeux marron.",
    "Moral: Il est honnête et travailleur. Elle n'est pas paresseuse.",
    "Possession with de: le stylo de Kollie · la maison de mon oncle",
    "Possessive adjectives: mon/ma/mes · ton/ta/tes · son/sa/ses · notre/nos · votre/vos · leur/leurs",
    "Place: près de, loin de, à côté de, en face de, au milieu de"
  ]},
  activities:["Identify descriptive words in a sentence","Write sentences describing the physical and moral character of a person","Describe your town or village in five sentences","Oral drills on possessive adjectives"],
  materials:["Audio-visual aids","Visual aids: photos, posters, drawings","Pictures of people and places","Textbook: Je me débrouille en français"],
  assessment:["Continuous assessment","Oral description of a person","Written description of a place","Homework"]
},

/* ================================ GRADE 9 ================================ */
{
  grade:9, period:"I", sem:"One", icon:"👋",
  fr:"Salutation — les nombres de 1 à 1000",
  en:"Greetings — Numbers from 1 to 1000",
  outcomes:[
    "Develop the art of speaking correctly",
    "Improve social interaction through conversation",
    "Apply singular and plural nouns in speaking and writing",
    "Apply adjective–noun agreement in speaking and writing"
  ],
  objectives:[
    "Exchange greetings with others fluently",
    "Introduce himself/herself and others",
    "Use adjectives relating to nationality and professional titles",
    "Recognize and use the plurals of regular nouns and adjectives",
    "Write the numbers from 1 to 1000"
  ],
  note:"French numbers build in patterns: <b>70 = soixante-dix</b> (60+10), <b>80 = quatre-vingts</b> (4×20), <b>90 = quatre-vingt-dix</b> (4×20+10). Hundreds: <b>cent, deux cents, trois cents</b>; <i>cent</i> loses its -s when another number follows: <b>deux cent cinq</b>. One thousand is <b>mille</b>, which never takes -s.",
  vocab:[
    {fr:"Bonjour, comment ça va ?", en:"Hello, how are you?", say:"bon-ZHOOR ko-mahn sah VAH", e:"👋"},
    {fr:"Je vais bien, et toi ?", en:"I am fine, and you?", say:"zhuh vay BYAN ay TWAH", e:"🙂"},
    {fr:"Permettez-moi de me présenter", en:"Allow me to introduce myself", say:"pair-may-TAY mwah", e:"🎤"},
    {fr:"soixante-dix", en:"seventy", say:"swah-sahnt DEESS", e:"7️⃣"},
    {fr:"quatre-vingts", en:"eighty", say:"katr VAN", e:"8️⃣"},
    {fr:"quatre-vingt-dix", en:"ninety", say:"katr van DEESS", e:"9️⃣"},
    {fr:"cent", en:"one hundred", say:"SAHN", e:"💯"},
    {fr:"deux cents", en:"two hundred", say:"duh SAHN", e:"🔢"},
    {fr:"cinq cents", en:"five hundred", say:"sank SAHN", e:"🔢"},
    {fr:"mille", en:"one thousand", say:"MEEL", e:"🔢"},
    {fr:"un numéro", en:"a number", say:"un nu-may-ROH", e:"#️⃣"},
    {fr:"compter", en:"to count", say:"kon-TAY", e:"🧮"},
    {fr:"premier / première", en:"first", say:"pruh-MYAY / -MYAIR", e:"🥇"},
    {fr:"deuxième", en:"second", say:"duh-ZYEM", e:"🥈"},
    {fr:"dernier / dernière", en:"last", say:"dair-NYAY", e:"🏁"},
    {fr:"Je suis élève en neuvième", en:"I am a ninth-grade pupil", say:"zhuh swee zay-LEV", e:"🎒"},
    {fr:"Mon adresse est…", en:"My address is…", say:"mon nah-DRESS ay", e:"🏠"},
    {fr:"Mon numéro est le…", en:"My number is…", say:"mon nu-may-ROH ay luh", e:"📞"}
  ],
  extra:{title:"Les nombres 1–1000", items:[
    "1–20: un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix, onze, douze, treize, quatorze, quinze, seize, dix-sept, dix-huit, dix-neuf, vingt",
    "Tens: 30 trente · 40 quarante · 50 cinquante · 60 soixante · 70 soixante-dix · 80 quatre-vingts · 90 quatre-vingt-dix",
    "71 soixante et onze · 81 quatre-vingt-un · 99 quatre-vingt-dix-neuf",
    "Hundreds: 100 cent · 200 deux cents · 250 deux cent cinquante · 999 neuf cent quatre-vingt-dix-neuf",
    "1000 mille — mille never takes an -s: deux mille"
  ]},
  activities:["Listening to and reading dialogue","Dramatize the dialogue","Differentiate masculine from feminine nouns and adjectives","Write and read aloud numbers up to 1000"],
  materials:["Visual aids: photos, posters, drawings","Number charts","Textbook: French reference reader"],
  assessment:["Continuous assessment","Oral counting exercise","Written numbers dictation","Homework"]
},
{
  grade:9, period:"II", sem:"One", icon:"💌",
  fr:"Communiquer par téléphone et par lettre",
  en:"Communicating via Telephone and Letter",
  outcomes:[
    "Make and take telephone calls using the appropriate expressions in French",
    "Improve listening and communication skills",
    "Improve social interaction through conversation",
    "Translate from French to English and English to French"
  ],
  objectives:[
    "Communicate with others in French while making telephone calls",
    "Write and respond to a friendly letter",
    "Write and respond to a letter of invitation",
    "Accept or decline an invitation politely",
    "Ask and answer questions using different question forms"
  ],
  note:"Invite with <b>Je t'invite à…</b> or <b>Veux-tu venir à…?</b> Accept with <b>Avec plaisir</b> or <b>Volontiers</b>; decline politely with <b>Je regrette, je ne peux pas</b>. Occasions: <b>un mariage, un anniversaire, une fête</b>.",
  vocab:[
    {fr:"Je t'invite à…", en:"I invite you to…", say:"zhuh tan-VEET ah", e:"💌"},
    {fr:"une invitation", en:"an invitation", say:"oon an-vee-tah-SYON", e:"✉️"},
    {fr:"Avec plaisir", en:"With pleasure", say:"ah-vek play-ZEER", e:"😊"},
    {fr:"Volontiers", en:"Gladly", say:"vo-lon-TYAY", e:"👍"},
    {fr:"Je regrette", en:"I am sorry", say:"zhuh ruh-GRET", e:"😔"},
    {fr:"Je ne peux pas venir", en:"I cannot come", say:"zhuh nuh puh pah vuh-NEER", e:"🚫"},
    {fr:"un mariage", en:"a wedding", say:"un mah-RYAHZH", e:"💒"},
    {fr:"un anniversaire", en:"a birthday", say:"un ah-nee-vair-SAIR", e:"🎂"},
    {fr:"une fête", en:"a party, festival", say:"oon FET", e:"🎉"},
    {fr:"une cérémonie", en:"a ceremony", say:"oon say-ray-mo-NEE", e:"🎗️"},
    {fr:"Félicitations !", en:"Congratulations!", say:"fay-lee-see-tah-SYON", e:"🎊"},
    {fr:"Merci de votre invitation", en:"Thank you for your invitation", say:"mair-SEE duh votr", e:"🙏"},
    {fr:"Veuillez agréer…", en:"Yours faithfully…", say:"vuh-YAY ah-gray-AY", e:"✍️"},
    {fr:"Bien à toi", en:"Yours (friendly close)", say:"byan ah TWAH", e:"💐"},
    {fr:"Est-ce que je peux…", en:"May I…", say:"es-kuh zhuh PUH", e:"❓"},
    {fr:"Qu'est-ce que c'est ?", en:"What is it?", say:"kes-kuh SAY", e:"❔"},
    {fr:"un timbre", en:"a stamp", say:"un TAMBR", e:"📮"},
    {fr:"la poste", en:"the post office", say:"lah POST", e:"🏤"}
  ],
  extra:{title:"L'invitation et l'interrogation avancée", items:[
    "Inviting: Je t'invite à mon anniversaire samedi. · Veux-tu venir à la fête ?",
    "Accepting: Avec plaisir ! · Volontiers ! · Oui, je viendrai.",
    "Declining: Je regrette, je ne peux pas. · Malheureusement, je suis occupé.",
    "Question words with prepositions: Avec qui ? · Chez qui ? · À quelle heure ? · Depuis quand ?",
    "Formal letter close: Veuillez agréer, Monsieur, l'expression de mes salutations distinguées."
  ]},
  activities:["Role play making and answering an invitation by telephone","Write a letter of invitation and a reply","Construct interrogative sentences of all three types","Oral and written drills"],
  materials:["Audio-visual aids","Sample invitation cards and letters","Visual aids: photos, posters, drawings","Textbook: Le nouveau sans frontières"],
  assessment:["Continuous assessment","Written invitation and reply","Role-played telephone invitation","Homework"]
},
{
  grade:9, period:"III", sem:"One", icon:"🧑‍🎨",
  fr:"Décrire des personnes, des objets et des lieux",
  en:"Describing People, Objects and Places",
  outcomes:[
    "Build and develop vocabulary through the effective use of descriptive words",
    "Develop skill in the appropriate use of adjectives in speaking and writing",
    "Improve listening and communication skills",
    "Improve social interaction through conversation"
  ],
  objectives:[
    "Identify and distinguish the masculine and feminine forms of descriptive adjectives",
    "Use different kinds of descriptive words to describe a person, place or thing",
    "Show ownership using the prepositions",
    "Write a full descriptive paragraph"
  ],
  note:"At this level combine <b>physical</b> and <b>moral</b> description in a paragraph, and use comparison: <b>plus … que</b> (more than), <b>moins … que</b> (less than), <b>aussi … que</b> (as … as). <i>Musu est plus grande que Sekou.</i>",
  vocab:[
    {fr:"décrire", en:"to describe", say:"day-KREER", e:"🖊️"},
    {fr:"la description", en:"the description", say:"lah des-kreep-SYON", e:"📄"},
    {fr:"le caractère", en:"the character", say:"luh kah-rak-TAIR", e:"🎭"},
    {fr:"aimable", en:"friendly, likeable", say:"ay-MAHBL", e:"🙂"},
    {fr:"poli / polie", en:"polite", say:"po-LEE", e:"🎩"},
    {fr:"courageux / courageuse", en:"brave", say:"koo-rah-ZHUH", e:"🦁"},
    {fr:"timide", en:"shy", say:"tee-MEED", e:"🫣"},
    {fr:"bavard / bavarde", en:"talkative", say:"bah-VAR / -VARD", e:"💬"},
    {fr:"calme", en:"calm, quiet", say:"KAHLM", e:"🌊"},
    {fr:"plus grand que", en:"taller than", say:"plu grahn kuh", e:"⬆️"},
    {fr:"moins grand que", en:"less tall than", say:"mwan grahn kuh", e:"⬇️"},
    {fr:"aussi grand que", en:"as tall as", say:"oh-SEE grahn kuh", e:"🟰"},
    {fr:"le meilleur", en:"the best", say:"luh may-YUR", e:"🏆"},
    {fr:"propre", en:"clean, tidy", say:"PROPR", e:"✨"},
    {fr:"ancien / ancienne", en:"old, former", say:"ahn-SYAN / -SYEN", e:"🏛️"},
    {fr:"moderne", en:"modern", say:"mo-DAIRN", e:"🏢"},
    {fr:"agréable", en:"pleasant", say:"ah-gray-AHBL", e:"🌤️"},
    {fr:"bruyant / bruyante", en:"noisy", say:"bru-YAHN", e:"🔊"}
  ],
  extra:{title:"La comparaison et le paragraphe descriptif", items:[
    "plus + adjectif + que — Musu est plus grande que Sekou.",
    "moins + adjectif + que — Ce livre est moins cher que ce cahier.",
    "aussi + adjectif + que — Il est aussi intelligent que sa sœur.",
    "Irregular: bon → meilleur (better) · bien → mieux (better, adverb)",
    "A description paragraph: name and age → physical appearance → character → why you like the person"
  ]},
  activities:["Identify descriptive words in a text","Write a paragraph describing the physical and moral character of a person","Compare two people or two places using plus/moins/aussi","Oral and written drills"],
  materials:["Audio-visual aids","Visual aids: photos, posters, drawings","Textbook: Le nouveau sans frontières"],
  assessment:["Continuous assessment","Written descriptive paragraph","Oral comparison exercise","Homework"]
},
{
  grade:9, period:"IV", sem:"Two", icon:"😊",
  fr:"Exprimer le sentiment et les émotions",
  en:"Expressing Feelings and Emotions",
  outcomes:[
    "Develop the ability to express feelings and emotions",
    "Develop the awareness and ability to appreciate other people's feelings",
    "Improve personality through the expression of feelings",
    "Translate from French to English and English to French"
  ],
  objectives:[
    "Express their feelings and emotions in French",
    "React appropriately to the feelings of others",
    "Use être + adjectif and avoir l'air + adjectif",
    "Use the présentatif c'est + adjectif"
  ],
  note:"State a feeling with <b>être + adjectif</b>: <i>Je suis content.</i> Describe how someone seems with <b>avoir l'air + adjectif</b>: <i>Il a l'air triste.</i> React with the présentatif <b>C'est + adjectif</b>: <i>C'est grave ! C'est gentil !</i> Some feelings use avoir: <b>avoir peur, avoir honte, avoir faim</b>.",
  vocab:[
    {fr:"content / contente", en:"happy, pleased", say:"kon-TAHN / -TAHNT", e:"😊"},
    {fr:"heureux / heureuse", en:"happy", say:"uh-RUH / uh-RUZ", e:"😃"},
    {fr:"malheureux / malheureuse", en:"unhappy", say:"mal-uh-RUH", e:"😞"},
    {fr:"triste", en:"sad", say:"TREEST", e:"😢"},
    {fr:"fâché / fâchée", en:"angry", say:"fah-SHAY", e:"😠"},
    {fr:"inquiet / inquiète", en:"worried", say:"an-KYAY / an-KYET", e:"😟"},
    {fr:"fatigué / fatiguée", en:"tired", say:"fah-tee-GAY", e:"😴"},
    {fr:"sympa", en:"nice, friendly", say:"sam-PAH", e:"🤗"},
    {fr:"ennuyeux / ennuyeuse", en:"boring", say:"ahn-nwee-YUH", e:"🥱"},
    {fr:"terrible", en:"terrible", say:"tay-REEBL", e:"😱"},
    {fr:"Il a l'air triste", en:"He looks sad", say:"eel ah lair TREEST", e:"😔"},
    {fr:"J'ai peur", en:"I am afraid", say:"zhay PUR", e:"😨"},
    {fr:"J'ai honte", en:"I am ashamed", say:"zhay ONT", e:"😳"},
    {fr:"Je suis désolé(e)", en:"I am sorry", say:"zhuh swee day-zo-LAY", e:"🙏"},
    {fr:"C'est grave", en:"It is serious", say:"say GRAHV", e:"⚠️"},
    {fr:"C'est gentil", en:"That is kind", say:"say zhahn-TEE", e:"💐"},
    {fr:"C'est méchant", en:"That is unkind", say:"say may-SHAHN", e:"😾"},
    {fr:"Quel dommage !", en:"What a pity!", say:"kel do-MAHZH", e:"😕"}
  ],
  extra:{title:"Exprimer un sentiment", items:[
    "être + adjectif: Je suis content. · Elle est fâchée. · Nous sommes fatigués.",
    "avoir l'air + adjectif: Il a l'air heureux. · Elle a l'air inquiète.",
    "avoir + nom: avoir peur · avoir honte · avoir faim · avoir soif · avoir sommeil",
    "Présentatif: C'est grave ! · C'est terrible ! · C'est sympa ! · C'est gentil !",
    "Reacting: Quel dommage ! · Félicitations ! · Courage ! · Ne t'inquiète pas."
  ]},
  activities:["Listening to and reading dialogue","Conjugate and use selected verbs","Collect photos and drawings of emotions to exhibit","Role play and simulation of emotional situations","Oral and written drills"],
  materials:["Audio-visual aids","Visual aids: photos, posters, drawings of faces","Emotion flash cards","Textbook: Le nouveau sans frontières"],
  assessment:["Continuous assessment","Role play expressing an emotion","Written exercise on être / avoir l'air","Homework"]
},
{
  grade:9, period:"V", sem:"Two", icon:"🎭",
  fr:"Exprimer j'aime, je n'aime pas et les préférences",
  en:"Expressing Likes, Dislikes and Preference",
  outcomes:[
    "Develop the ability to express desires — likes and dislikes",
    "Improve social interaction through conversation",
    "Translate from French to English and English to French"
  ],
  objectives:[
    "Express their likes, dislikes and preferences with reasons",
    "Make a choice and justify it",
    "Use jouer à and jouer de correctly",
    "Name places of leisure and describe what one does there"
  ],
  note:"At this level justify your choice with <b>parce que</b>: <i>Je préfère le football parce que c'est amusant.</i> Use <b>faire de</b> for activities: <i>Je fais du sport, de la natation, de la musique.</i>",
  vocab:[
    {fr:"J'aime beaucoup", en:"I like very much", say:"zhem boh-KOO", e:"💖"},
    {fr:"Je n'aime pas du tout", en:"I do not like at all", say:"zhuh nem pah du TOO", e:"🚫"},
    {fr:"Je préfère … à …", en:"I prefer … to …", say:"zhuh pray-FAIR ah", e:"⭐"},
    {fr:"parce que", en:"because", say:"par-suh kuh", e:"💬"},
    {fr:"un loisir", en:"a leisure activity", say:"un lwah-ZEER", e:"🎯"},
    {fr:"faire du sport", en:"to do sport", say:"fair du SPOR", e:"🏃"},
    {fr:"faire de la natation", en:"to go swimming", say:"fair duh lah nah-tah-SYON", e:"🏊"},
    {fr:"faire de la musique", en:"to make music", say:"fair duh lah mu-ZEEK", e:"🎶"},
    {fr:"lire", en:"to read", say:"LEER", e:"📚"},
    {fr:"danser", en:"to dance", say:"dahn-SAY", e:"💃"},
    {fr:"chanter", en:"to sing", say:"shahn-TAY", e:"🎤"},
    {fr:"voyager", en:"to travel", say:"vwah-yah-ZHAY", e:"🧳"},
    {fr:"la discothèque", en:"the night club", say:"lah dees-ko-TEK", e:"🕺"},
    {fr:"le théâtre", en:"the theatre", say:"luh tay-AHTR", e:"🎭"},
    {fr:"le cinéma", en:"the cinema", say:"luh see-nay-MAH", e:"🎬"},
    {fr:"amusant / amusante", en:"amusing, fun", say:"ah-mu-ZAHN", e:"😄"},
    {fr:"passionnant", en:"exciting", say:"pah-syo-NAHN", e:"🔥"},
    {fr:"C'est mon préféré", en:"It is my favourite", say:"say mon pray-fay-RAY", e:"🏅"}
  ],
  extra:{title:"Justifier une préférence", items:[
    "J'aime le football parce que c'est passionnant.",
    "Je n'aime pas la danse parce que je suis timide.",
    "Je préfère lire à regarder la télévision.",
    "faire de: je fais du sport · tu fais de la natation · il fait de la musique",
    "jouer à (sports) vs jouer de (instruments): je joue au basket · je joue de la guitare"
  ]},
  activities:["Listening to and reading texts and dialogues","Oral and written drills","Role play stating and justifying a preference","Class survey of favourite leisure activities"],
  materials:["Audio-visual aids","Visual aids: photos, posters, drawings","Textbook: Easy French Step by Step"],
  assessment:["Continuous assessment","Oral presentation of preferences with reasons","Written exercise using parce que","Homework"]
},
{
  grade:9, period:"VI", sem:"Two", icon:"🧼",
  fr:"Santé et assainissement",
  en:"Health and Sanitation",
  outcomes:[
    "Adopt and develop the proper attitude towards health and sanitation",
    "Develop awareness of the need for a clean and safe environment",
    "Develop the habit of visiting a hospital or health centre in case of illness",
    "Translate from French to English and English to French"
  ],
  objectives:[
    "Inquire about and talk about health and health-related issues",
    "Identify and use appropriate health vocabulary and expressions",
    "Give health advice using il faut and the imperative",
    "Describe how to keep the environment clean"
  ],
  note:"Give advice with <b>Il faut + infinitif</b>, <b>Il ne faut pas + infinitif</b>, or the imperative: <i>Lavez-vous les mains !</i> Talk about prevention: <b>prévenir vaut mieux que guérir</b> — prevention is better than cure.",
  vocab:[
    {fr:"l'assainissement", en:"sanitation", say:"lah-say-neess-MAHN", e:"🧹"},
    {fr:"l'hygiène", en:"hygiene", say:"lee-ZHYEN", e:"🧼"},
    {fr:"l'eau potable", en:"drinking water", say:"loh po-TAHBL", e:"🚰"},
    {fr:"les ordures", en:"the rubbish", say:"lay zor-DUR", e:"🗑️"},
    {fr:"la poubelle", en:"the dustbin", say:"lah poo-BELL", e:"🚮"},
    {fr:"les latrines", en:"the latrines", say:"lay lah-TREEN", e:"🚻"},
    {fr:"le savon", en:"the soap", say:"luh sah-VON", e:"🧴"},
    {fr:"le moustique", en:"the mosquito", say:"luh moos-TEEK", e:"🦟"},
    {fr:"la moustiquaire", en:"the mosquito net", say:"lah moos-tee-KAIR", e:"🛏️"},
    {fr:"une maladie", en:"an illness", say:"oon mah-lah-DEE", e:"🤒"},
    {fr:"guérir", en:"to cure, to get well", say:"gay-REER", e:"💚"},
    {fr:"prévenir", en:"to prevent", say:"pray-vuh-NEER", e:"🛡️"},
    {fr:"le vaccin", en:"the vaccine", say:"luh vak-SAN", e:"💉"},
    {fr:"l'infirmier / l'infirmière", en:"the nurse", say:"lan-feer-MYAY", e:"⚕️"},
    {fr:"la clinique", en:"the clinic", say:"lah klee-NEEK", e:"🏥"},
    {fr:"se reposer", en:"to rest", say:"suh ruh-po-ZAY", e:"🛌"},
    {fr:"bien manger", en:"to eat well", say:"byan mahn-ZHAY", e:"🍲"},
    {fr:"Il ne faut pas salir", en:"One must not make dirty", say:"eel nuh foh pah sah-LEER", e:"🚫"}
  ],
  extra:{title:"Conseils de santé", items:[
    "Il faut boire de l'eau potable. · Il faut dormir sous une moustiquaire.",
    "Il ne faut pas jeter les ordures dans la rue.",
    "Imperative advice: Lavez-vous les mains ! · Balayez la cour ! · Allez à la clinique !",
    "avoir mal à + partie du corps: à la tête, au ventre, à la gorge, aux dents",
    "Proverb: Prévenir vaut mieux que guérir. — Prevention is better than cure."
  ]},
  activities:["Listening to and reading dialogues and texts","Prepare and exhibit posters on health issues in the classroom","Group role play at a clinic","Write five health rules for the school"],
  materials:["Visual aids: photos, posters, drawings","Health education posters","Textbook: Bon voyage"],
  assessment:["Continuous assessment","Poster of health rules in French","Role play at the clinic","Homework"]
}

];

/* Merge the Junior High units into the single French curriculum, exactly as
   English, General Science, Mathematics and Social Studies do:
   one subject, extra grades. */
if (typeof FR_CURRICULUM !== "undefined") {
  FR_CURRICULUM.push.apply(FR_CURRICULUM, FR_CURRICULUM_79);
}
