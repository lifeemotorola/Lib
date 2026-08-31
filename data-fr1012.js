/* Curriculum data — Republic of Liberia, Senior High FRENCH, Grades 10–12
   Extends the Junior High French progression (data-fr79.js) to Senior High,
   6 periods per grade, so the platform covers French Grades 1–12.

   Same unit shape as FR_CURRICULUM / FR_CURRICULUM_79 so GEN_FR renders it unchanged:
     grade · period · sem · icon · fr · en · outcomes[] · objectives[] · note
     · vocab[] {fr,en,say,e} · extra {title,items[]} · activities[] · materials[] · assessment[]

   Every unit carries study[] — the course text of the unit, written out as a
   block list (h3 / p / bul / num / table / rule) in the same voice as the
   Grades 1–9 files. Each list teaches the expressions, the structures and the
   conjugation tables of the period, and closes with a worked model dialogue,
   letter or passage.

   Per the project rule, no online resources are referenced anywhere:
   the pack must stay fully offline.
*/

const FR_CURRICULUM_1012 = [

/* ================================ GRADE 10 ================================ */
{
  grade:10, period:"I", sem:"One", icon:"🕰️",
  fr:"Le Passé Composé — Raconter le passé",
  en:"The Passé Composé — Talking About the Past",
  outcomes:[
    "Narrate completed past events correctly in speech and writing",
    "Select the correct auxiliary (avoir or être) for any common verb",
    "Form regular and irregular past participles",
    "Apply past-participle agreement with être verbs",
    "Translate short past-tense narratives between French and English"
  ],
  objectives:[
    "Conjugate verbs in the passé composé with avoir",
    "Conjugate the verbs of movement and reflexive verbs with être",
    "Form the past participles of -er, -ir and -re verbs",
    "Make the past participle agree with the subject after être",
    "Tell and write what he/she did yesterday, last week and last year"
  ],
  note:"The passé composé has TWO parts: <b>auxiliaire (avoir/être) + participe passé</b> — <i>j'ai mangé</i>, <i>elle est allée</i>. Most verbs take <b>avoir</b>; the verbs of movement (aller, venir, partir, arriver...) and all reflexive verbs take <b>être</b>, and their participle agrees with the subject: <i>elles sont arrivées</i>.",
  study:[
    /* ---- course text: Semester One, Period I — Le passé composé ---- */
    {k:"h3", t:"Qu'est-ce que le passé composé ? — What is the Passé Composé?"},
    {k:"p", t:"The **passé composé** is the tense French uses to say what **happened** — a finished action in the past. It is a **compound** tense: it is built from **two words**, a helping verb (the **auxiliary**) in the present tense plus the **past participle** of the main verb: **j'ai mangé** (I ate / I have eaten), **nous avons fini** (we finished)."},
    {k:"rule"},
    {k:"h3", t:"Le participe passé — the Past Participle"},
    {k:"p", t:"Regular verbs form their past participle from the infinitive ending:"},
    {k:"table", head:["Group","Ending","Example"], rows:[["-er verbs","-é","manger → mangé (eaten)"],["-ir verbs","-i","finir → fini (finished)"],["-re verbs","-u","vendre → vendu (sold)"]]},
    {k:"p", t:"Learn the common **irregular** participles by heart: **avoir → eu**, **être → été**, **faire → fait**, **voir → vu**, **prendre → pris**, **mettre → mis**, **écrire → écrit**, **lire → lu**, **boire → bu**, **pouvoir → pu**, **vouloir → voulu**, **venir → venu**."},
    {k:"rule"},
    {k:"h3", t:"Avec avoir — the Auxiliary AVOIR"},
    {k:"p", t:"Most French verbs form the passé composé with **avoir**:"},
    {k:"table", head:["Sujet","manger (avoir)","English"], rows:[["j'","ai mangé","I ate"],["tu","as mangé","you ate"],["il / elle","a mangé","he / she ate"],["nous","avons mangé","we ate"],["vous","avez mangé","you ate"],["ils / elles","ont mangé","they ate"]]},
    {k:"p", t:"The negative wraps around the auxiliary only: **Je n'ai pas mangé** — I did not eat."},
    {k:"rule"},
    {k:"h3", t:"Avec être — the Auxiliary ÊTRE"},
    {k:"p", t:"About sixteen verbs — mostly verbs of **movement** — and **all reflexive verbs** take **être**. With être the participle **agrees** with the subject like an adjective: add **-e** for feminine, **-s** for plural."},
    {k:"bul", items:["**aller** (to go) → il est allé, elle est all**ée**, ils sont all**és**, elles sont all**ées**","**venir** (to come), **arriver** (to arrive), **partir** (to leave), **entrer** (to enter), **sortir** (to go out)","**monter** (to go up), **descendre** (to go down), **rester** (to stay), **tomber** (to fall)","**naître** (to be born) → née, **mourir** (to die) → mort","Reflexive verbs: **se laver** → elle **s'est lavée** (she washed herself)"]},
    {k:"rule"},
    {k:"h3", t:"Les expressions de temps — Time Expressions of the Past"},
    {k:"bul", items:["**hier** — yesterday · **avant-hier** — the day before yesterday","**la semaine dernière** — last week · **l'année dernière** — last year","**ce matin** — this morning · **hier soir** — last night","**il y a deux jours** — two days ago · **déjà** — already · **ne... pas encore** — not yet"]},
    {k:"rule"},
    {k:"h3", t:"Dialogue — Qu'est-ce que tu as fait hier ?"},
    {k:"num", items:["**Kollie :** Salut Musu ! Qu'est-ce que tu as fait hier ?","**Musu :** Hier matin, je suis allée au marché de Waterside avec ma mère.","**Kollie :** Qu'est-ce que vous avez acheté ?","**Musu :** Nous avons acheté du riz, du poisson et des légumes. Et toi ?","**Kollie :** Moi, j'ai joué au football, puis j'ai fait mes devoirs le soir.","**Musu :** Très bien ! Tu n'as pas regardé la télévision ?","**Kollie :** Non, je n'ai pas regardé la télévision. Je me suis couché tôt."]}
  ],
  vocab:[
    {fr:"hier", en:"yesterday", say:"ee-AIR", e:"🕰️"},
    {fr:"la semaine dernière", en:"last week", say:"lah suh-MEN dair-nee-AIR", e:"🗓️"},
    {fr:"j'ai mangé", en:"I ate", say:"zhay mahn-ZHAY", e:"🍽️"},
    {fr:"j'ai fini", en:"I finished", say:"zhay fee-NEE", e:"✅"},
    {fr:"j'ai vendu", en:"I sold", say:"zhay vahn-DOO", e:"💵"},
    {fr:"je suis allé(e)", en:"I went", say:"zhuh swee zah-LAY", e:"🚶"},
    {fr:"elle est partie", en:"she left", say:"el eh par-TEE", e:"👋"},
    {fr:"nous avons fait", en:"we did / we made", say:"noo zah-vohn FEH", e:"🛠️"},
    {fr:"ils sont arrivés", en:"they arrived", say:"eel sohn tah-ree-VAY", e:"🏁"},
    {fr:"j'ai vu", en:"I saw", say:"zhay VOO", e:"👀"},
    {fr:"j'ai pris", en:"I took", say:"zhay PREE", e:"✋"},
    {fr:"je me suis levé(e)", en:"I got up", say:"zhuh muh swee luh-VAY", e:"🌅"},
    {fr:"déjà", en:"already", say:"day-ZHAH", e:"⏱️"},
    {fr:"pas encore", en:"not yet", say:"pah zahn-KOR", e:"⏳"}
  ],
  extra:{title:"Participes passés irréguliers — Irregular Past Participles", items:[
    "**avoir → eu** : J'ai eu peur. — I was afraid.",
    "**être → été** : Il a été malade. — He was sick.",
    "**faire → fait** : Nous avons fait le ménage. — We did the housework.",
    "**prendre → pris** : Elle a pris le bus. — She took the bus.",
    "**écrire → écrit** : J'ai écrit une lettre. — I wrote a letter.",
    "**lire → lu** : Ils ont lu le journal. — They read the newspaper."
  ]},
  activities:["Reading and dramatizing a past-tense dialogue","Oral chain drill: Qu'est-ce que tu as fait hier ?","Sorting verbs into avoir-verbs and être-verbs","Writing a paragraph about last weekend in the passé composé"],
  materials:["Verb charts of avoir and être","Flash cards of past participles","Textbook: Je me débrouille en français","Pictures of daily activities"],
  assessment:["Continuous assessment","Oral narration of yesterday's activities","Written conjugation exercise","Homework"]
},
{
  grade:10, period:"II", sem:"One", icon:"🌾",
  fr:"L'Imparfait — Souvenirs et descriptions",
  en:"The Imperfect — Memories and Descriptions",
  outcomes:[
    "Describe past habits, scenes and feelings in French",
    "Form the imparfait of any verb from its nous-form",
    "Distinguish the imparfait from the passé composé in use",
    "Narrate childhood memories orally and in writing"
  ],
  objectives:[
    "Form the imparfait stem from the nous-form of the present",
    "Add the imparfait endings -ais, -ais, -ait, -ions, -iez, -aient",
    "Describe the weather, time and feelings in the past",
    "Contrast a background description (imparfait) with an event (passé composé)",
    "Talk about what he/she used to do as a child"
  ],
  note:"The imparfait describes what things <b>were like</b> or what <b>used to happen</b>. Stem = the <b>nous-form</b> of the present minus <b>-ons</b>: nous parlons → <i>je parlais</i>. Only <b>être</b> is irregular: stem <b>ét-</b> → <i>j'étais</i>. Rule of thumb: description or habit → imparfait; single finished event → passé composé.",
  study:[
    /* ---- course text: Semester One, Period II — L'imparfait ---- */
    {k:"h3", t:"Qu'est-ce que l'imparfait ? — What is the Imperfect?"},
    {k:"p", t:"The **imparfait** is the past tense of **description** and **habit**. Use it to say what **used to** happen, what was **going on**, or what things **looked and felt like**: **Quand j'étais petit, j'habitais à Gbarnga** — When I was small, I lived (used to live) in Gbarnga."},
    {k:"rule"},
    {k:"h3", t:"La formation — How to Form the Imparfait"},
    {k:"p", t:"Take the **nous-form** of the present tense, remove **-ons**, and add the endings **-ais, -ais, -ait, -ions, -iez, -aient**. They all sound like *eh* except -ions and -iez."},
    {k:"table", head:["Sujet","parler (nous parl-ons)","finir (nous finiss-ons)","English"], rows:[["je","parlais","finissais","I was speaking / finishing"],["tu","parlais","finissais","you were..."],["il / elle","parlait","finissait","he / she was..."],["nous","parlions","finissions","we were..."],["vous","parliez","finissiez","you were..."],["ils / elles","parlaient","finissaient","they were..."]]},
    {k:"p", t:"Only **être** is irregular — its stem is **ét-** : **j'étais, tu étais, il était, nous étions, vous étiez, ils étaient**."},
    {k:"rule"},
    {k:"h3", t:"Décrire au passé — Describing in the Past"},
    {k:"bul", items:["**Le temps :** Il faisait beau. Il pleuvait. — The weather was fine. It was raining.","**L'heure :** Il était huit heures. — It was eight o'clock.","**Les sentiments :** J'étais content(e). Elle avait peur. — I was happy. She was afraid.","**L'habitude :** Tous les jours, nous allions à l'école à pied. — Every day we walked to school."]},
    {k:"rule"},
    {k:"h3", t:"Imparfait ou passé composé ? — Which Past Tense?"},
    {k:"p", t:"The two past tenses work **together** in a story. The **imparfait** paints the background; the **passé composé** reports the event that happened against it: **Je dormais quand le téléphone a sonné.** — I was sleeping when the telephone rang."},
    {k:"table", head:["Imparfait (background)","Passé composé (event)"], rows:[["Il pleuvait...","...quand nous sommes sortis."],["J'étais au marché...","...et j'ai rencontré mon oncle."],["Elle regardait la télévision...","...quand la lumière est partie."]]},
    {k:"rule"},
    {k:"h3", t:"Texte modèle — Mon enfance à Buchanan"},
    {k:"p", t:"Quand j'étais enfant, ma famille habitait à Buchanan, près de la mer. Tous les matins, je me levais à six heures et j'aidais ma mère. Mon père était pêcheur ; il partait très tôt. Le soir, nous mangions ensemble et ma grand-mère racontait des histoires. Un jour, mon père a acheté une radio — c'était une grande joie pour toute la famille !"}
  ],
  vocab:[
    {fr:"quand j'étais petit(e)", en:"when I was small", say:"kahn zhay-TEH puh-TEE", e:"👧"},
    {fr:"j'habitais", en:"I used to live", say:"zhah-bee-TEH", e:"🏠"},
    {fr:"il faisait beau", en:"the weather was fine", say:"eel fuh-ZEH BOH", e:"☀️"},
    {fr:"il pleuvait", en:"it was raining", say:"eel pluh-VEH", e:"🌧️"},
    {fr:"c'était", en:"it was", say:"say-TEH", e:"✨"},
    {fr:"il y avait", en:"there was / there were", say:"eel yah-VEH", e:"📍"},
    {fr:"je jouais", en:"I used to play", say:"zhuh zhoo-EH", e:"⚽"},
    {fr:"nous allions", en:"we used to go", say:"noo zah-lee-OHN", e:"🚶"},
    {fr:"tous les jours", en:"every day", say:"too lay ZHOOR", e:"📅"},
    {fr:"autrefois", en:"in the old days", say:"oh-truh-FWAH", e:"🕯️"},
    {fr:"un souvenir", en:"a memory", say:"uhn soov-NEER", e:"💭"},
    {fr:"l'enfance", en:"childhood", say:"lahn-FAHNSS", e:"🧒"},
    {fr:"pendant que", en:"while", say:"pahn-dahn KUH", e:"⏳"}
  ],
  extra:{title:"Imparfait ou passé composé ? — Quick Guide", items:[
    "**Habit / repetition** → imparfait : Tous les jours, je marchais. — Every day I walked.",
    "**Description / state** → imparfait : Il était fatigué. — He was tired.",
    "**One finished event** → passé composé : Hier, j'ai marché. — Yesterday I walked.",
    "**Interrupted action** : imparfait + passé composé : Je lisais quand il est entré.",
    "Time markers: *tous les jours, souvent, autrefois* → imparfait ; *hier, soudain, un jour* → passé composé."
  ]},
  activities:["Describing old photographs in the imparfait","Interviewing an elder about life in the old days","Story completion: choosing imparfait or passé composé","Writing a paragraph of childhood memories"],
  materials:["Old photographs and pictures of village life","Verb-ending wall chart","Textbook: Je me débrouille en français"],
  assessment:["Continuous assessment","Oral description of a childhood memory","Written tense-choice exercise","Homework"]
},
{
  grade:10, period:"III", sem:"One", icon:"🚀",
  fr:"Le Futur Simple — Projets et métiers",
  en:"The Future Tense — Plans, Ambitions and Careers",
  outcomes:[
    "Express future plans and ambitions in French",
    "Form the futur simple of regular and common irregular verbs",
    "Name professions and describe the work they involve",
    "Conduct a short conversation about career plans"
  ],
  objectives:[
    "Form the futur simple from the infinitive plus -ai, -as, -a, -ons, -ez, -ont",
    "Use the irregular future stems of être, avoir, aller, faire, venir, pouvoir",
    "Use aller + infinitive (futur proche) for near plans",
    "Name at least ten professions in French, masculine and feminine",
    "Say and write what he/she will do after school"
  ],
  note:"Futur simple = <b>infinitive + endings of avoir</b> (-ai, -as, -a, -ons, -ez, -ont): <i>je parlerai</i> — I will speak. -re verbs drop the final e: <i>vendre → je vendrai</i>. Learn the irregular stems: <b>être → ser-</b>, <b>avoir → aur-</b>, <b>aller → ir-</b>, <b>faire → fer-</b>. For near plans use <b>aller + infinitif</b>: <i>Je vais étudier ce soir.</i>",
  study:[
    /* ---- course text: Semester One, Period III — Le futur simple ---- */
    {k:"h3", t:"Parler de l'avenir — Talking About the Future"},
    {k:"p", t:"French has two future forms. The **futur proche** (near future) uses **aller + infinitive** for plans already decided: **Je vais étudier ce soir** — I am going to study tonight. The **futur simple** is the true future tense: **J'étudierai la médecine** — I will study medicine."},
    {k:"rule"},
    {k:"h3", t:"La formation du futur simple"},
    {k:"p", t:"Add the endings **-ai, -as, -a, -ons, -ez, -ont** (the present of *avoir*) directly to the **infinitive**. Verbs in **-re** drop the final **e** first: *vendre → je vendr**ai***."},
    {k:"table", head:["Sujet","parler","English"], rows:[["je","parlerai","I will speak"],["tu","parleras","you will speak"],["il / elle","parlera","he / she will speak"],["nous","parlerons","we will speak"],["vous","parlerez","you will speak"],["ils / elles","parleront","they will speak"]]},
    {k:"p", t:"Common **irregular stems**: **être → ser-** (je serai), **avoir → aur-** (j'aurai), **aller → ir-** (j'irai), **faire → fer-** (je ferai), **venir → viendr-** (je viendrai), **pouvoir → pourr-** (je pourrai), **voir → verr-** (je verrai), **devoir → devr-** (je devrai)."},
    {k:"rule"},
    {k:"h3", t:"Les métiers — Professions"},
    {k:"p", t:"Most professions have a masculine and a feminine form. With être, no article is used: **Je suis élève. Elle sera médecin.**"},
    {k:"table", head:["Masculin","Féminin","English"], rows:[["un médecin","une médecin","doctor"],["un infirmier","une infirmière","nurse"],["un enseignant","une enseignante","teacher"],["un ingénieur","une ingénieure","engineer"],["un avocat","une avocate","lawyer"],["un agriculteur","une agricultrice","farmer"],["un commerçant","une commerçante","trader"],["un journaliste","une journaliste","journalist"]]},
    {k:"rule"},
    {k:"h3", t:"Exprimer un projet — Expressing a Plan or Ambition"},
    {k:"bul", items:["**Plus tard, je serai...** — Later on, I will be...","**Je voudrais devenir...** — I would like to become...","**Après le lycée, j'irai à l'université.** — After high school, I will go to university.","**Mon rêve est de...** — My dream is to...","**Si Dieu le veut, je réussirai.** — God willing, I will succeed."]},
    {k:"rule"},
    {k:"h3", t:"Dialogue — Qu'est-ce que tu feras plus tard ?"},
    {k:"num", items:["**Fatu :** Qu'est-ce que tu feras après le lycée, Sekou ?","**Sekou :** J'irai à l'université de Monrovia. J'étudierai la médecine.","**Fatu :** Tu seras médecin ! C'est un beau métier.","**Sekou :** Oui, je travaillerai à l'hôpital JFK et j'aiderai les malades. Et toi ?","**Fatu :** Moi, je serai ingénieure. Je construirai des routes et des ponts pour le Liberia.","**Sekou :** Alors, nous travaillerons tous les deux pour notre pays !"]}
  ],
  vocab:[
    {fr:"l'avenir", en:"the future", say:"lah-vuh-NEER", e:"🚀"},
    {fr:"plus tard", en:"later on", say:"ploo TAR", e:"⏭️"},
    {fr:"je serai", en:"I will be", say:"zhuh suh-RAY", e:"🌟"},
    {fr:"j'aurai", en:"I will have", say:"zhoh-RAY", e:"🎁"},
    {fr:"j'irai", en:"I will go", say:"zhee-RAY", e:"➡️"},
    {fr:"je ferai", en:"I will do / make", say:"zhuh fuh-RAY", e:"🛠️"},
    {fr:"un métier", en:"a profession / trade", say:"uhn may-tee-AY", e:"💼"},
    {fr:"un médecin", en:"a doctor", say:"uhn mayd-SAN", e:"🩺"},
    {fr:"une infirmière", en:"a nurse (f.)", say:"oon an-feer-mee-AIR", e:"💉"},
    {fr:"un ingénieur", en:"an engineer", say:"uhn an-zhay-nee-UHR", e:"🏗️"},
    {fr:"un avocat", en:"a lawyer", say:"uhn ah-vo-KAH", e:"⚖️"},
    {fr:"une agricultrice", en:"a farmer (f.)", say:"oon ah-gree-kool-TREESS", e:"🌾"},
    {fr:"devenir", en:"to become", say:"duhv-NEER", e:"🦋"},
    {fr:"réussir", en:"to succeed", say:"ray-oo-SEER", e:"🏆"}
  ],
  extra:{title:"Radicaux irréguliers du futur — Irregular Future Stems", items:[
    "**être → ser-** : Je serai enseignant. — I will be a teacher.",
    "**avoir → aur-** : Tu auras vingt ans. — You will be twenty.",
    "**aller → ir-** : Nous irons à Kakata. — We will go to Kakata.",
    "**faire → fer-** : Il fera chaud demain. — It will be hot tomorrow.",
    "**venir → viendr-** : Elles viendront samedi. — They will come on Saturday.",
    "**pouvoir → pourr-** : Vous pourrez réussir. — You will be able to succeed."
  ]},
  activities:["Career talk: each pupil presents the profession he/she will follow","Future-tense chain drill around the class","Matching professions to their workplaces","Writing a paragraph: Ma vie dans dix ans"],
  materials:["Pictures of professions and workplaces","Future-stem flash cards","Textbook: Je me débrouille en français"],
  assessment:["Continuous assessment","Oral presentation of a career plan","Written conjugation exercise","Homework"]
},
{
  grade:10, period:"IV", sem:"Two", icon:"🚌",
  fr:"Les Voyages en Afrique de l'Ouest",
  en:"Travel in West Africa",
  outcomes:[
    "Handle common travel situations in French",
    "Use the correct prepositions with towns and countries",
    "Name the francophone neighbours of Liberia and their capitals",
    "Ask for and give travel information politely"
  ],
  objectives:[
    "Use à, en, au, aux correctly with towns and countries",
    "Name the countries of West Africa and their capitals in French",
    "Buy a ticket and ask about times, prices and distances",
    "Answer the questions of an immigration officer at a border",
    "Describe a journey in the passé composé"
  ],
  note:"Prepositions of place: <b>à</b> + town (<i>à Monrovia</i>), <b>en</b> + feminine country (<i>en Guinée, en Côte d'Ivoire</i>), <b>au</b> + masculine country (<i>au Liberia, au Sénégal</i>), <b>aux</b> + plural (<i>aux États-Unis</i>). Liberia's francophone neighbours: la Guinée (Conakry) and la Côte d'Ivoire (Yamoussoukro) — French is very useful at the border!",
  study:[
    /* ---- course text: Semester Two, Period IV — Les voyages ---- */
    {k:"h3", t:"Pourquoi voyager en français ? — Why Travel with French?"},
    {k:"p", t:"Liberia shares borders with **two francophone countries** — **la Guinée** and **la Côte d'Ivoire** — and most of West Africa speaks French. A traveller, a trader or a student who speaks French can move, buy and sell, and make friends across the whole region."},
    {k:"rule"},
    {k:"h3", t:"Les prépositions avec les pays — Prepositions with Places"},
    {k:"table", head:["Rule","Exemple","English"], rows:[["à + ville","Je vais à Abidjan.","I am going to Abidjan."],["en + pays féminin","Elle travaille en Guinée.","She works in Guinea."],["au + pays masculin","Nous vivons au Liberia.","We live in Liberia."],["aux + pays pluriel","Il étudie aux États-Unis.","He studies in the United States."],["de / du / des (origin)","Je viens du Liberia.","I come from Liberia."]]},
    {k:"p", t:"Countries ending in **-e** are usually feminine: la Guinée, la Côte d'Ivoire, la France. Others are masculine: le Liberia, le Sénégal, le Ghana, le Mali, le Togo, le Bénin, le Nigeria."},
    {k:"rule"},
    {k:"h3", t:"L'Afrique de l'Ouest — Countries and Capitals"},
    {k:"table", head:["Pays","Capitale","Langue officielle"], rows:[["le Liberia","Monrovia","anglais"],["la Guinée","Conakry","français"],["la Côte d'Ivoire","Yamoussoukro","français"],["la Sierra Leone","Freetown","anglais"],["le Sénégal","Dakar","français"],["le Mali","Bamako","français"],["le Ghana","Accra","anglais"],["le Togo","Lomé","français"]]},
    {k:"rule"},
    {k:"h3", t:"À la gare routière — At the Bus Station"},
    {k:"bul", items:["**Un billet pour Ganta, s'il vous plaît.** — A ticket to Ganta, please.","**C'est combien ?** — How much is it?","**Le car part à quelle heure ?** — What time does the bus leave?","**Le voyage dure combien de temps ?** — How long does the journey take?","**Où sont les bagages ?** — Where is the luggage?"]},
    {k:"h3", t:"À la frontière — At the Border"},
    {k:"bul", items:["**Votre passeport, s'il vous plaît.** — Your passport, please.","**D'où venez-vous ?** — Where are you coming from?","**Où allez-vous ?** — Where are you going?","**Combien de temps restez-vous ?** — How long are you staying?","**Bon voyage !** — Have a good trip!"]},
    {k:"rule"},
    {k:"h3", t:"Dialogue — Le voyage de Ganta à N'Zérékoré"},
    {k:"num", items:["**Le douanier :** Bonjour. Votre passeport, s'il vous plaît.","**Marcus :** Voici mon passeport, monsieur.","**Le douanier :** D'où venez-vous et où allez-vous ?","**Marcus :** Je viens de Ganta, au Liberia, et je vais à N'Zérékoré, en Guinée.","**Le douanier :** Pourquoi voyagez-vous ?","**Marcus :** Je vais voir ma tante. Je resterai une semaine.","**Le douanier :** Très bien. Bon voyage !","**Marcus :** Merci beaucoup, monsieur. Au revoir !"]}
  ],
  vocab:[
    {fr:"un voyage", en:"a journey / trip", say:"uhn vwah-YAHZH", e:"🧳"},
    {fr:"la frontière", en:"the border", say:"lah frohn-tee-AIR", e:"🚧"},
    {fr:"un passeport", en:"a passport", say:"uhn pass-POR", e:"🛂"},
    {fr:"un billet", en:"a ticket", say:"uhn bee-YEH", e:"🎫"},
    {fr:"la gare routière", en:"the bus station", say:"lah GAR roo-tee-AIR", e:"🚌"},
    {fr:"le car", en:"the bus / coach", say:"luh KAR", e:"🚍"},
    {fr:"les bagages", en:"the luggage", say:"lay bah-GAHZH", e:"🧳"},
    {fr:"le douanier", en:"the customs officer", say:"luh doo-ah-nee-AY", e:"👮"},
    {fr:"partir", en:"to leave", say:"par-TEER", e:"🛫"},
    {fr:"arriver", en:"to arrive", say:"ah-ree-VAY", e:"🛬"},
    {fr:"la Guinée", en:"Guinea", say:"lah gee-NAY", e:"🇬🇳"},
    {fr:"la Côte d'Ivoire", en:"Ivory Coast", say:"lah koht dee-VWAHR", e:"🇨🇮"},
    {fr:"Bon voyage !", en:"Have a good trip!", say:"bohn vwah-YAHZH", e:"👋"},
    {fr:"une carte", en:"a map", say:"oon KART", e:"🗺️"}
  ],
  extra:{title:"Verbes de voyage au passé composé", items:[
    "**Je suis parti(e) de Monrovia à six heures.** — I left Monrovia at six o'clock.",
    "**Nous sommes arrivés à Ganta le soir.** — We arrived in Ganta in the evening.",
    "**Elle a pris le car pour Conakry.** — She took the bus to Conakry.",
    "**Ils ont traversé la frontière.** — They crossed the border.",
    "**J'ai visité Abidjan l'année dernière.** — I visited Abidjan last year."
  ]},
  activities:["Role-play: at the ticket counter and at the border","Labelling a map of West Africa in French","Planning an itinerary Monrovia → Conakry with times and prices","Writing a postcard about a journey in the passé composé"],
  materials:["Map of West Africa","Sample tickets and a toy passport","Textbook: Je me débrouille en français"],
  assessment:["Continuous assessment","Dramatized border dialogue","Written itinerary exercise","Homework"]
},
{
  grade:10, period:"V", sem:"Two", icon:"🩺",
  fr:"La Santé et le Bien-être",
  en:"Health and Well-being",
  outcomes:[
    "Describe symptoms and illnesses in French",
    "Understand and give simple health advice",
    "Use reflexive verbs and avoir-expressions about the body",
    "Conduct a consultation dialogue at the clinic"
  ],
  objectives:[
    "Say where it hurts with avoir mal à + article",
    "Name common illnesses: le paludisme, la fièvre, la grippe, la toux",
    "Give advice with il faut, devoir and the imperative",
    "Use reflexive verbs of daily hygiene in the present and passé composé",
    "Dramatize a dialogue between a patient and a health worker"
  ],
  note:"Say where it hurts with <b>avoir mal à</b> + the body part: <i>J'ai mal à la tête</i> (my head hurts), <i>au ventre</i>, <i>aux dents</i>. Advice uses <b>il faut + infinitif</b> (<i>Il faut boire beaucoup d'eau</i>) or <b>devoir</b> (<i>Tu dois te reposer</i>). Le paludisme (malaria) is the illness to know: moustiquaire, comprimés, clinique.",
  study:[
    /* ---- course text: Semester Two, Period V — La santé ---- */
    {k:"h3", t:"Avoir mal — Saying Where It Hurts"},
    {k:"p", t:"Use **avoir mal à** followed by the body part. Remember the contractions: **à + le = au**, **à + les = aux**: **J'ai mal à la tête** (headache), **j'ai mal au ventre** (stomach ache), **j'ai mal aux dents** (toothache), **j'ai mal à la gorge** (sore throat)."},
    {k:"table", head:["Expression","English"], rows:[["J'ai de la fièvre.","I have a fever."],["J'ai la grippe.","I have the flu."],["Je tousse.","I am coughing."],["J'ai le paludisme.","I have malaria."],["Je suis fatigué(e).","I am tired."],["Je me sens mal.","I feel unwell."]]},
    {k:"rule"},
    {k:"h3", t:"Chez le médecin — At the Clinic"},
    {k:"bul", items:["**Qu'est-ce qui ne va pas ?** — What is wrong?","**Où avez-vous mal ?** — Where does it hurt?","**Depuis quand êtes-vous malade ?** — Since when have you been sick?","**Ouvrez la bouche.** — Open your mouth.","**Voici une ordonnance.** — Here is a prescription.","**Prenez ces comprimés trois fois par jour.** — Take these tablets three times a day."]},
    {k:"rule"},
    {k:"h3", t:"Donner des conseils — Giving Advice"},
    {k:"p", t:"Three ways to give advice: **il faut + infinitif** (one must...), **devoir + infinitif** (must / have to), and the **imperative**."},
    {k:"bul", items:["**Il faut boire beaucoup d'eau propre.** — You must drink plenty of clean water.","**Il faut dormir sous une moustiquaire.** — You must sleep under a mosquito net.","**Tu dois te reposer.** — You must rest.","**Lavez-vous les mains avant de manger !** — Wash your hands before eating!","**Ne buvez pas l'eau de la rivière.** — Do not drink river water."]},
    {k:"rule"},
    {k:"h3", t:"Les verbes pronominaux de l'hygiène — Reflexive Verbs of Hygiene"},
    {k:"table", head:["Verbe","Présent","Passé composé"], rows:[["se laver","je me lave","je me suis lavé(e)"],["se brosser les dents","tu te brosses les dents","tu t'es brossé les dents"],["se reposer","il se repose","il s'est reposé"],["se coucher","nous nous couchons","nous nous sommes couchés"],["se réveiller","elles se réveillent","elles se sont réveillées"]]},
    {k:"rule"},
    {k:"h3", t:"Dialogue — À la clinique"},
    {k:"num", items:["**L'infirmière :** Bonjour. Qu'est-ce qui ne va pas ?","**Hawa :** J'ai mal à la tête et j'ai de la fièvre depuis deux jours.","**L'infirmière :** Avez-vous dormi sous une moustiquaire ?","**Hawa :** Non, madame. Ma moustiquaire est déchirée.","**L'infirmière :** C'est peut-être le paludisme. Voici une ordonnance. Prenez ces comprimés trois fois par jour et buvez beaucoup d'eau.","**Hawa :** Merci, madame. Je dois me reposer aussi ?","**L'infirmière :** Oui, il faut te reposer et acheter une nouvelle moustiquaire !"]}
  ],
  vocab:[
    {fr:"la santé", en:"health", say:"lah sahn-TAY", e:"💪"},
    {fr:"malade", en:"sick / ill", say:"mah-LAHD", e:"🤒"},
    {fr:"j'ai mal à la tête", en:"I have a headache", say:"zhay MAL ah lah TET", e:"🤕"},
    {fr:"j'ai mal au ventre", en:"I have a stomach ache", say:"zhay MAL oh VAHNTR", e:"😖"},
    {fr:"la fièvre", en:"fever", say:"lah fee-EVR", e:"🌡️"},
    {fr:"le paludisme", en:"malaria", say:"luh pah-loo-DEESM", e:"🦟"},
    {fr:"la moustiquaire", en:"mosquito net", say:"lah moos-tee-KAIR", e:"🛏️"},
    {fr:"un comprimé", en:"a tablet / pill", say:"uhn kohn-pree-MAY", e:"💊"},
    {fr:"une ordonnance", en:"a prescription", say:"oon or-do-NAHNSS", e:"📋"},
    {fr:"l'infirmière", en:"the nurse", say:"lan-feer-mee-AIR", e:"👩‍⚕️"},
    {fr:"se reposer", en:"to rest", say:"suh ruh-po-ZAY", e:"😴"},
    {fr:"se laver les mains", en:"to wash one's hands", say:"suh lah-VAY lay MAN", e:"🧼"},
    {fr:"il faut", en:"one must / it is necessary", say:"eel FOH", e:"❗"},
    {fr:"guérir", en:"to get better / cure", say:"gay-REER", e:"🌈"}
  ],
  extra:{title:"La prévention — Prevention is Better than Cure", items:[
    "**Dormez sous une moustiquaire.** — Sleep under a mosquito net.",
    "**Lavez-vous les mains avec du savon.** — Wash your hands with soap.",
    "**Buvez de l'eau propre.** — Drink clean water.",
    "**Mangez des fruits et des légumes.** — Eat fruit and vegetables.",
    "**Faites du sport régulièrement.** — Exercise regularly.",
    "**Allez à la clinique dès les premiers signes.** — Go to the clinic at the first signs."
  ]},
  activities:["Role-play: patient and nurse at the clinic","Making a health poster in French: Contre le paludisme","Miming illnesses for the class to name in French","Writing advice with il faut for five health problems"],
  materials:["Body chart with French labels","Pictures of clinic scenes and a mosquito net","Textbook: Je me débrouille en français"],
  assessment:["Continuous assessment","Dramatized clinic dialogue","Written advice exercise","Homework"]
},
{
  grade:10, period:"VI", sem:"Two", icon:"📱",
  fr:"Les Médias et la Technologie",
  en:"Media and Technology",
  outcomes:[
    "Talk about radio, television, telephones and the internet in French",
    "Express and defend a simple opinion",
    "Compare things using comparatives and superlatives",
    "Read and discuss a short media text critically"
  ],
  objectives:[
    "Name the main media and technology tools in French",
    "Use plus... que, moins... que, aussi... que to compare",
    "Form the superlative with le/la/les plus and le/la/les moins",
    "Give an opinion with à mon avis, je pense que, je trouve que",
    "Debate the advantages and disadvantages of the telephone"
  ],
  note:"Compare with <b>plus... que</b> (more than), <b>moins... que</b> (less than), <b>aussi... que</b> (as... as): <i>La radio est plus populaire que la télévision.</i> Superlative: <b>le/la/les plus...</b> — <i>le média le plus rapide</i>. Special forms: bon → <b>meilleur</b>, bien → <b>mieux</b>. Give opinions with <b>à mon avis</b> and <b>je pense que</b>.",
  study:[
    /* ---- course text: Semester Two, Period VI — Les médias ---- */
    {k:"h3", t:"Les médias au Liberia — The Media Around Us"},
    {k:"p", t:"The **médias** are the ways news and ideas travel: **la radio**, **la télévision**, **le journal** (newspaper), **le téléphone portable** and **l'internet**. In Liberia the radio is still the most important medium — almost every town and village listens to it — but the mobile phone and social networks grow every year."},
    {k:"table", head:["Le média","English","On dit..."], rows:[["la radio","radio","écouter la radio"],["la télévision","television","regarder la télévision"],["le journal","newspaper","lire le journal"],["le portable","mobile phone","appeler / envoyer un message"],["l'internet","internet","surfer sur internet"],["les réseaux sociaux","social networks","partager une photo"]]},
    {k:"rule"},
    {k:"h3", t:"Le comparatif — Comparing Things"},
    {k:"p", t:"Compare two things with **plus... que** (more... than), **moins... que** (less... than) and **aussi... que** (as... as): **La radio est moins chère que la télévision.** — Radio is cheaper than television."},
    {k:"bul", items:["**Le portable est plus rapide que la lettre.** — The phone is faster than a letter.","**Le journal est moins rapide que la radio.** — The newspaper is slower than the radio.","**La télévision est aussi intéressante que la radio.** — TV is as interesting as radio.","Special forms: **bon → meilleur** (better) ; **bien → mieux** (better): *Ce programme est **meilleur**.*"]},
    {k:"rule"},
    {k:"h3", t:"Le superlatif — the Superlative"},
    {k:"p", t:"To say *the most* or *the least*, put **le / la / les** before **plus** or **moins**: **La radio est le média le plus populaire du Liberia.** — Radio is the most popular medium in Liberia. **C'est la meilleure émission.** — It is the best programme."},
    {k:"rule"},
    {k:"h3", t:"Donner son avis — Giving Your Opinion"},
    {k:"bul", items:["**À mon avis, ...** — In my opinion, ...","**Je pense que...** — I think that...","**Je trouve que...** — I find that...","**Je suis d'accord.** / **Je ne suis pas d'accord.** — I agree / I disagree.","**C'est vrai, mais...** — That is true, but...","**Il y a des avantages et des inconvénients.** — There are advantages and disadvantages."]},
    {k:"rule"},
    {k:"h3", t:"Dialogue — Le portable : bon ou mauvais ?"},
    {k:"num", items:["**Le professeur :** À votre avis, le téléphone portable est-il bon pour les élèves ?","**Joseph :** À mon avis, oui. Avec le portable, on peut appeler sa famille et chercher des informations.","**Comfort :** Je ne suis pas d'accord. Je trouve que le portable est plus dangereux qu'utile : les élèves jouent au lieu d'étudier.","**Joseph :** C'est vrai, mais l'internet est la bibliothèque la plus grande du monde !","**Comfort :** Peut-être, mais un bon livre est meilleur qu'un jeu vidéo.","**Le professeur :** Très bien ! Il y a des avantages et des inconvénients — c'est cela, un débat."]}
  ],
  vocab:[
    {fr:"les médias", en:"the media", say:"lay may-dee-AH", e:"📺"},
    {fr:"la radio", en:"the radio", say:"lah rah-dee-OH", e:"📻"},
    {fr:"le journal", en:"the newspaper", say:"luh zhoor-NAHL", e:"📰"},
    {fr:"le téléphone portable", en:"the mobile phone", say:"luh tay-lay-FUN por-TAHBL", e:"📱"},
    {fr:"l'internet", en:"the internet", say:"lan-tair-NET", e:"🌐"},
    {fr:"les réseaux sociaux", en:"social networks", say:"lay ray-ZOH so-SYOH", e:"💬"},
    {fr:"une émission", en:"a programme / broadcast", say:"oon ay-mee-SYOHN", e:"🎙️"},
    {fr:"les informations", en:"the news", say:"lay zan-for-mah-SYOHN", e:"🗞️"},
    {fr:"envoyer un message", en:"to send a message", say:"ahn-vwah-YAY uhn meh-SAHZH", e:"✉️"},
    {fr:"plus... que", en:"more... than", say:"PLOO ... kuh", e:"➕"},
    {fr:"moins... que", en:"less... than", say:"MWAN ... kuh", e:"➖"},
    {fr:"à mon avis", en:"in my opinion", say:"ah mohn ah-VEE", e:"🗣️"},
    {fr:"un avantage", en:"an advantage", say:"uhn ah-vahn-TAHZH", e:"👍"},
    {fr:"un inconvénient", en:"a disadvantage", say:"uhn an-kohn-vay-NYAHN", e:"👎"}
  ],
  extra:{title:"Le comparatif et le superlatif — Summary", items:[
    "**plus + adjectif + que** : Le portable est plus rapide que la lettre.",
    "**moins + adjectif + que** : Le journal est moins cher que la télévision.",
    "**aussi + adjectif + que** : La radio est aussi utile que l'internet.",
    "**le/la/les plus...** : C'est le média le plus populaire.",
    "**bon → meilleur** ; **bien → mieux** : Cette émission est meilleure ; elle explique mieux."
  ]},
  activities:["Class debate: le portable à l'école — pour ou contre ?","Comparing media in sentences with plus/moins/aussi... que","Listening comprehension from a radio-style news bulletin read by the teacher","Writing a short opinion paragraph with à mon avis"],
  materials:["Pictures of media devices","Opinion-phrase wall chart","A printed news bulletin in simple French"],
  assessment:["Continuous assessment","Participation in the debate","Written comparison exercise","Homework"]
},

/* ================================ GRADE 11 ================================ */
{
  grade:11, period:"I", sem:"One", icon:"🤝",
  fr:"Le Conditionnel — Politesse et hypothèses",
  en:"The Conditional — Politeness and Hypotheses",
  outcomes:[
    "Make polite requests and suggestions in French",
    "Form the conditionnel présent of regular and irregular verbs",
    "Build hypothetical sentences with si + imparfait",
    "Express wishes and dreams appropriately"
  ],
  objectives:[
    "Form the conditional from the future stem plus the imparfait endings",
    "Use je voudrais, j'aimerais and pourriez-vous for polite requests",
    "Give advice with tu devrais and il faudrait",
    "Build sentences of the type Si j'avais..., je ferais...",
    "Describe an imaginary situation in the conditional"
  ],
  note:"Conditionnel = <b>radical du futur + terminaisons de l'imparfait</b> (-ais, -ais, -ait, -ions, -iez, -aient): <i>je parlerais</i> — I would speak. It is the tense of <b>politeness</b> (<i>Je voudrais...</i>), of <b>advice</b> (<i>Tu devrais...</i>) and of <b>hypothesis</b>: <b>Si + imparfait, conditionnel</b> — <i>Si j'étais riche, je construirais une école.</i>",
  study:[
    /* ---- course text: Semester One, Period I — Le conditionnel ---- */
    {k:"h3", t:"Le conditionnel — the Would-Tense"},
    {k:"p", t:"The **conditionnel** says what **would** happen. Build it from the **future stem** (the infinitive, or the irregular stem) plus the **imparfait endings** -ais, -ais, -ait, -ions, -iez, -aient: **je parlerais** (I would speak), **nous irions** (we would go — from the stem ir- of aller)."},
    {k:"table", head:["Sujet","parler","aller (ir-)","English"], rows:[["je","parlerais","irais","I would speak / go"],["tu","parlerais","irais","you would..."],["il / elle","parlerait","irait","he / she would..."],["nous","parlerions","irions","we would..."],["vous","parleriez","iriez","you would..."],["ils / elles","parleraient","iraient","they would..."]]},
    {k:"p", t:"The irregular stems are **the same as the future**: être → ser- (je serais), avoir → aur- (j'aurais), faire → fer- (je ferais), pouvoir → pourr- (je pourrais), devoir → devr- (je devrais), vouloir → voudr- (je voudrais)."},
    {k:"rule"},
    {k:"h3", t:"La politesse — Polite Requests"},
    {k:"p", t:"The conditional makes a request **soft and polite**. Compare: *Je veux du riz* (I want rice — blunt) and **Je voudrais du riz, s'il vous plaît** (I would like some rice, please — polite)."},
    {k:"bul", items:["**Je voudrais...** — I would like...","**J'aimerais...** — I would love / like...","**Pourriez-vous m'aider ?** — Could you help me?","**Est-ce que je pourrais... ?** — Could I...?","**Auriez-vous l'heure ?** — Would you have the time?"]},
    {k:"rule"},
    {k:"h3", t:"Donner un conseil — Giving Advice"},
    {k:"bul", items:["**Tu devrais étudier davantage.** — You should study more.","**Vous devriez voir un médecin.** — You should see a doctor.","**Il faudrait partir tôt.** — It would be necessary to leave early.","**À ta place, je resterais.** — In your place, I would stay."]},
    {k:"rule"},
    {k:"h3", t:"L'hypothèse — Si + imparfait, conditionnel"},
    {k:"p", t:"To imagine an unreal situation, French uses **si + imparfait** in the if-clause and the **conditionnel** in the result: **Si j'avais de l'argent, j'achèterais une voiture.** — If I had money, I would buy a car. Never put the conditional after **si**!"},
    {k:"bul", items:["**Si j'étais président, je construirais des hôpitaux.** — If I were president, I would build hospitals.","**Si nous parlions français, nous travaillerions à Abidjan.** — If we spoke French, we would work in Abidjan.","**Si elle avait le temps, elle viendrait.** — If she had time, she would come."]},
    {k:"rule"},
    {k:"h3", t:"Dialogue — Si tu gagnais un million..."},
    {k:"num", items:["**Bendu :** Dis-moi, Prince : si tu gagnais un million de dollars, qu'est-ce que tu ferais ?","**Prince :** D'abord, j'aiderais mes parents. Ensuite, je construirais une belle maison à Voinjama.","**Bendu :** Tu ne voyagerais pas ?","**Prince :** Si ! J'irais en France et je visiterais Paris. Et toi, qu'est-ce que tu ferais ?","**Bendu :** Moi, j'ouvrirais une clinique pour les enfants. Et je finirais d'abord mes études !","**Prince :** Tu as raison. Sans diplôme, l'argent ne suffirait pas."]}
  ],
  vocab:[
    {fr:"je voudrais", en:"I would like", say:"zhuh voo-DREH", e:"🙏"},
    {fr:"j'aimerais", en:"I would love to", say:"zhem-REH", e:"💖"},
    {fr:"je pourrais", en:"I could", say:"zhuh poo-REH", e:"🤲"},
    {fr:"tu devrais", en:"you should", say:"too duh-VREH", e:"💡"},
    {fr:"il faudrait", en:"it would be necessary", say:"eel foh-DREH", e:"❗"},
    {fr:"je serais", en:"I would be", say:"zhuh suh-REH", e:"🌟"},
    {fr:"je ferais", en:"I would do / make", say:"zhuh fuh-REH", e:"🛠️"},
    {fr:"j'irais", en:"I would go", say:"zhee-REH", e:"➡️"},
    {fr:"si j'étais riche", en:"if I were rich", say:"see zhay-TEH REESH", e:"💰"},
    {fr:"gagner", en:"to win / earn", say:"gah-NYAY", e:"🏆"},
    {fr:"un rêve", en:"a dream", say:"uhn REV", e:"💭"},
    {fr:"à ta place", en:"in your place", say:"ah tah PLAHSS", e:"🔄"},
    {fr:"Pourriez-vous m'aider ?", en:"Could you help me?", say:"poo-ree-ay VOO meh-DAY", e:"🆘"},
    {fr:"poliment", en:"politely", say:"po-lee-MAHN", e:"😊"}
  ],
  extra:{title:"Si + imparfait, conditionnel — Modèles", items:[
    "**Si j'avais faim, je mangerais.** — If I were hungry, I would eat.",
    "**Si tu étudiais, tu réussirais.** — If you studied, you would succeed.",
    "**S'il pleuvait, nous resterions à la maison.** — If it rained, we would stay home.",
    "**Si vous veniez, nous serions contents.** — If you came, we would be glad.",
    "Jamais de conditionnel après **si** : dites *si j'avais*, jamais ~si j'aurais~."
  ]},
  activities:["Politeness game: turning blunt requests into polite ones","Chain drill: Si j'étais..., je...","Dream interview: Qu'est-ce que tu ferais si... ?","Writing a paragraph: Si j'étais président(e) du Liberia"],
  materials:["Future-stem flash cards","Situation cards for polite requests","Textbook: Je me débrouille en français"],
  assessment:["Continuous assessment","Oral polite-request role-play","Written hypothesis sentences","Homework"]
},
{
  grade:11, period:"II", sem:"One", icon:"💰",
  fr:"Le Commerce et l'Argent",
  en:"Trade, Money and the Market",
  outcomes:[
    "Carry out buying and selling conversations in French",
    "Use partitive articles and expressions of quantity correctly",
    "Bargain politely over a price",
    "Handle numbers and prices confidently up to the millions"
  ],
  objectives:[
    "Use du, de la, de l', des and de after quantities and negatives",
    "Use expressions of quantity: un kilo de, un litre de, beaucoup de",
    "Ask and state prices with combien and coûter",
    "Bargain: c'est trop cher, baissez le prix, dernier prix",
    "Count and write large numbers and sums of money"
  ],
  note:"The partitive article means <b>some</b>: <b>du</b> riz, <b>de la</b> sauce, <b>de l'</b>eau, <b>des</b> bananes. After a quantity or a negative it all becomes <b>de</b>: <i>un kilo <b>de</b> riz</i>, <i>je n'ai pas <b>d'</b>argent</i>. In the market: <i>C'est combien ?</i> — <i>C'est trop cher !</i> — <i>Quel est votre dernier prix ?</i>",
  study:[
    /* ---- course text: Semester One, Period II — Le commerce ---- */
    {k:"h3", t:"L'article partitif — Saying SOME"},
    {k:"p", t:"When you buy food you rarely buy *all* of it — you buy **some**. French shows this with the **partitive article**: **du** (masculine), **de la** (feminine), **de l'** (before a vowel), **des** (plural): **Je voudrais du riz, de la sauce et des bananes.**"},
    {k:"table", head:["Article","Exemple","English"], rows:[["du","du riz, du poisson","some rice, some fish"],["de la","de la viande, de la sauce","some meat, some sauce"],["de l'","de l'eau, de l'huile","some water, some oil"],["des","des oranges, des arachides","some oranges, some groundnuts"]]},
    {k:"p", t:"After a **quantity** and after a **negative**, everything becomes plain **de / d'**: **un kilo de riz**, **beaucoup de clients**, **je n'ai pas d'argent**."},
    {k:"rule"},
    {k:"h3", t:"Les quantités — Weights and Measures"},
    {k:"bul", items:["**un kilo de** — a kilo of · **un demi-kilo de** — half a kilo of","**un litre de** — a litre of · **une bouteille de** — a bottle of","**un sac de** — a bag of · **une boîte de** — a tin/box of","**une douzaine de** — a dozen · **un morceau de** — a piece of","**beaucoup de** — a lot of · **assez de** — enough · **trop de** — too much"]},
    {k:"rule"},
    {k:"h3", t:"Les prix et les grands nombres — Prices and Big Numbers"},
    {k:"p", t:"Ask the price with **C'est combien ?** or **Ça coûte combien ?** Answer with **Ça coûte... dollars**. Big numbers: **cent** (100), **deux cents** (200), **mille** (1 000), **dix mille** (10 000), **cent mille** (100 000), **un million** (1 000 000). *Mille* never takes an s: **cinq mille dollars**."},
    {k:"rule"},
    {k:"h3", t:"Marchander — Bargaining at the Market"},
    {k:"bul", items:["**C'est combien, le sac de riz ?** — How much is the bag of rice?","**C'est trop cher !** — It is too expensive!","**Vous pouvez baisser le prix ?** — Can you lower the price?","**Quel est votre dernier prix ?** — What is your last price?","**Je vous donne mille dollars.** — I will give you one thousand dollars.","**D'accord, c'est bon.** — All right, agreed.","**Voici la monnaie.** — Here is the change."]},
    {k:"rule"},
    {k:"h3", t:"Dialogue — Au marché de Red Light"},
    {k:"num", items:["**La cliente :** Bonjour, madame. C'est combien, le kilo de poisson ?","**La vendeuse :** Bonjour ! C'est cinq cents dollars le kilo.","**La cliente :** Cinq cents dollars ? C'est trop cher ! Vous pouvez baisser le prix ?","**La vendeuse :** Pour vous, quatre cent cinquante. C'est du poisson frais !","**La cliente :** Je vous donne quatre cents dollars. C'est mon dernier prix.","**La vendeuse :** D'accord, c'est bon. Vous voulez aussi de la tomate ?","**La cliente :** Oui, un demi-kilo de tomates et de l'huile rouge, s'il vous plaît.","**La vendeuse :** Voilà. Merci beaucoup et à demain !"]}
  ],
  vocab:[
    {fr:"le marché", en:"the market", say:"luh mar-SHAY", e:"🏪"},
    {fr:"l'argent", en:"money", say:"lar-ZHAHN", e:"💵"},
    {fr:"le prix", en:"the price", say:"luh PREE", e:"🏷️"},
    {fr:"cher / chère", en:"expensive", say:"SHAIR", e:"💸"},
    {fr:"bon marché", en:"cheap", say:"bohn mar-SHAY", e:"🪙"},
    {fr:"acheter", en:"to buy", say:"ash-TAY", e:"🛒"},
    {fr:"vendre", en:"to sell", say:"VAHNDR", e:"🤝"},
    {fr:"coûter", en:"to cost", say:"koo-TAY", e:"💲"},
    {fr:"la monnaie", en:"the change (money)", say:"lah mo-NEH", e:"🪙"},
    {fr:"un kilo de riz", en:"a kilo of rice", say:"uhn kee-LOH duh REE", e:"🍚"},
    {fr:"une bouteille d'huile", en:"a bottle of oil", say:"oon boo-TAY DWEEL", e:"🫗"},
    {fr:"la vendeuse", en:"the seller (f.)", say:"lah vahn-DUHZ", e:"🧺"},
    {fr:"le client / la cliente", en:"the customer", say:"luh klee-AHN", e:"🙋"},
    {fr:"marchander", en:"to bargain", say:"mar-shahn-DAY", e:"⚖️"}
  ],
  extra:{title:"Le partitif après la négation et la quantité", items:[
    "**J'ai du riz** → **Je n'ai pas de riz.** — I have no rice.",
    "**Elle vend des oranges** → **Elle ne vend pas d'oranges.**",
    "**beaucoup de clients** — many customers (never ~beaucoup des~)",
    "**un sac de charbon** — a bag of charcoal",
    "**assez d'argent** — enough money · **trop de bruit** — too much noise"
  ]},
  activities:["Market role-play with play money: bargaining in French","Shopping-list writing with partitives and quantities","Number dictation: prices in hundreds and thousands","Setting up a class market stall labelled in French"],
  materials:["Play money and price tags","Real or pictured market goods","Textbook: Je me débrouille en français"],
  assessment:["Continuous assessment","Dramatized bargaining dialogue","Written partitive exercise","Homework"]
},
{
  grade:11, period:"III", sem:"One", icon:"🌱",
  fr:"L'Environnement et l'Agriculture",
  en:"The Environment and Agriculture",
  outcomes:[
    "Talk about farming, forests and the environment in French",
    "Use the pronouns y and en to avoid repetition",
    "Express obligation and prohibition about protecting nature",
    "Describe the seasons of farm work in Liberia"
  ],
  objectives:[
    "Name crops, farm tools and farm activities in French",
    "Use y to replace a place and en to replace de + noun",
    "Use il faut / il ne faut pas for environmental rules",
    "Describe the rainy season and dry season farming calendar",
    "Discuss why the forest must be protected"
  ],
  note:"<b>y</b> replaces a place: <i>Je vais au champ → J'<b>y</b> vais.</i> <b>en</b> replaces de + noun or a quantity: <i>Tu as du riz ? → Oui, j'<b>en</b> ai.</i> Environmental rules use <b>il faut</b> / <b>il ne faut pas</b>: <i>Il ne faut pas brûler la forêt.</i> Liberia's crops to know: le riz, le manioc, le caoutchouc, le cacao, l'huile de palme.",
  study:[
    /* ---- course text: Semester One, Period III — L'environnement ---- */
    {k:"h3", t:"L'agriculture au Liberia — Farming in Liberia"},
    {k:"p", t:"Most Liberian families live from the land. The main **cultures** (crops) are **le riz** (rice — the national food), **le manioc** (cassava), **le caoutchouc** (rubber), **le cacao** (cocoa), **le café** (coffee) and **l'huile de palme** (palm oil). The farmer — **l'agriculteur** or **la fermière** — works with **la houe** (hoe), **le coupe-coupe** (cutlass) and **la brouette** (wheelbarrow)."},
    {k:"table", head:["La saison","Les mois","Le travail au champ"], rows:[["la saison sèche","novembre – avril","défricher et préparer le champ"],["la saison des pluies","mai – octobre","planter, sarcler et arroser"],["la récolte","selon la culture","récolter et vendre au marché"]]},
    {k:"rule"},
    {k:"h3", t:"Le pronom Y — Replacing a Place"},
    {k:"p", t:"**y** stands for a place already mentioned, and sits **before the verb**: **Tu vas au champ ? — Oui, j'y vais.** (Are you going to the farm? — Yes, I am going *there*.) **Elle travaille à Monrovia ? — Oui, elle y travaille.**"},
    {k:"h3", t:"Le pronom EN — Replacing DE + Noun"},
    {k:"p", t:"**en** stands for **de + noun** — often a quantity: **Tu as du manioc ? — Oui, j'en ai.** (Yes, I have *some*.) **Il vend des mangues ? — Il en vend beaucoup.** (He sells *a lot of them*.)"},
    {k:"rule"},
    {k:"h3", t:"Protéger l'environnement — Protecting the Environment"},
    {k:"p", t:"Liberia holds a large part of the last **forêt tropicale** (rainforest) of West Africa. Protecting it is every citizen's duty."},
    {k:"bul", items:["**Il faut planter des arbres.** — We must plant trees.","**Il ne faut pas brûler la forêt.** — We must not burn the forest.","**Il ne faut pas jeter les ordures dans la rue.** — Do not throw rubbish in the street.","**Il faut garder l'eau propre.** — We must keep the water clean.","**Il faut protéger les animaux sauvages.** — We must protect wild animals."]},
    {k:"rule"},
    {k:"h3", t:"Dialogue — Au champ avec l'oncle Flomo"},
    {k:"num", items:["**Watta :** Oncle Flomo, tu vas au champ ce matin ?","**Flomo :** Oui, j'y vais. C'est la saison des pluies, il faut planter le riz.","**Watta :** Tu as des semences ?","**Flomo :** Oui, j'en ai deux sacs. Prends la houe et viens m'aider !","**Watta :** D'accord. Pourquoi est-ce que tu ne brûles pas la vieille forêt là-bas ?","**Flomo :** Il ne faut pas brûler la forêt, Watta. Les arbres donnent la pluie, les fruits et le bon air.","**Watta :** C'est vrai. Alors, plantons — et protégeons la forêt !"]}
  ],
  vocab:[
    {fr:"l'environnement", en:"the environment", say:"lahn-vee-run-MAHN", e:"🌍"},
    {fr:"la forêt", en:"the forest", say:"lah fo-REH", e:"🌳"},
    {fr:"un arbre", en:"a tree", say:"uhn ARBR", e:"🌲"},
    {fr:"le champ", en:"the field / farm", say:"luh SHAHN", e:"🌾"},
    {fr:"le riz", en:"rice", say:"luh REE", e:"🍚"},
    {fr:"le manioc", en:"cassava", say:"luh mah-nee-OK", e:"🥔"},
    {fr:"le caoutchouc", en:"rubber", say:"luh kah-oo-CHOO", e:"🛞"},
    {fr:"l'huile de palme", en:"palm oil", say:"lweel duh PALM", e:"🌴"},
    {fr:"planter", en:"to plant", say:"plahn-TAY", e:"🌱"},
    {fr:"récolter", en:"to harvest", say:"ray-kol-TAY", e:"🧺"},
    {fr:"la houe", en:"the hoe", say:"lah OO", e:"⛏️"},
    {fr:"la saison des pluies", en:"the rainy season", say:"lah seh-ZOHN day PLWEE", e:"🌧️"},
    {fr:"la saison sèche", en:"the dry season", say:"lah seh-ZOHN SESH", e:"☀️"},
    {fr:"protéger", en:"to protect", say:"pro-tay-ZHAY", e:"🛡️"}
  ],
  extra:{title:"Y et EN — Modèles", items:[
    "**Tu vas au marché ? — Oui, j'y vais.** — Yes, I am going there.",
    "**Ils habitent à Zwedru ? — Ils y habitent depuis dix ans.**",
    "**Tu veux du café ? — Oui, j'en veux bien.** — Yes, I'd like some.",
    "**Elle a des poules ? — Elle en a six.** — She has six of them.",
    "Place: **y** · Quantity / de + nom: **en** — both go before the verb."
  ]},
  activities:["Tree-planting project labelled in French","Question chains practising y and en","Making an environmental poster: Protégeons la forêt !","Describing the farming calendar of the local county"],
  materials:["Pictures of crops and farm tools","A calendar of the seasons","Poster paper and markers"],
  assessment:["Continuous assessment","Oral y/en question chain","Written environmental rules with il faut","Homework"]
},
{
  grade:11, period:"IV", sem:"Two", icon:"✉️",
  fr:"La Correspondance Formelle",
  en:"Formal Letters and Applications",
  outcomes:[
    "Write a correctly laid-out formal letter in French",
    "Use formal greetings and closing formulas",
    "Replace nouns with direct and indirect object pronouns",
    "Address officials and strangers with appropriate register"
  ],
  objectives:[
    "Lay out a formal letter: place and date, address, object, signature",
    "Open and close with the standard polite formulas",
    "Distinguish tu-register from vous-register in writing",
    "Use le, la, les and lui, leur correctly before the verb",
    "Write a letter of request to a school principal"
  ],
  note:"A formal letter needs: <b>lieu et date</b> (Monrovia, le 5 mars...), <b>Monsieur / Madame,</b> as opening, the <b>vous</b>-form throughout, and the closing <i>Veuillez agréer, Monsieur, l'expression de mes salutations distinguées.</i> Object pronouns go before the verb: <i>Je <b>la</b> remercie</i> (direct), <i>Je <b>lui</b> écris</i> (indirect — to him/her).",
  study:[
    /* ---- course text: Semester Two, Period IV — La correspondance ---- */
    {k:"h3", t:"Lettre amicale ou lettre formelle ? — Two Registers"},
    {k:"p", t:"To a friend you write **tu**, *Cher Kofi*, *Amicalement*. To a principal, an office or a stranger you write **vous**, *Monsieur* or *Madame*, and you close with a full polite formula. Choosing the right **register** is as important as the grammar."},
    {k:"table", head:["","Lettre amicale","Lettre formelle"], rows:[["Ouverture","Cher Paul, / Chère Marie,","Monsieur, / Madame,"],["Personne","tu","vous"],["Ton","simple, familier","poli, respectueux"],["Fermeture","Amicalement / À bientôt","Veuillez agréer, Monsieur, l'expression de mes salutations distinguées."]]},
    {k:"rule"},
    {k:"h3", t:"La présentation — Layout of a Formal Letter"},
    {k:"num", items:["**Le lieu et la date** en haut à droite : *Monrovia, le 5 mars 2026*","**L'adresse du destinataire** : Monsieur le Proviseur, Lycée..., Monrovia","**L'objet** : *Objet : demande d'inscription*","**La formule d'ouverture** : *Monsieur le Proviseur,*","**Le corps de la lettre** : la demande, claire et polie, au vous","**La formule de politesse** : *Veuillez agréer...*","**La signature** : prénom et nom"]},
    {k:"rule"},
    {k:"h3", t:"Les pronoms objets — Object Pronouns"},
    {k:"p", t:"Object pronouns stand for people or things already named and go **before the verb**. **Direct**: me, te, **le, la, les**. **Indirect** (to someone): me, te, **lui, leur**: **Je vois le proviseur → Je le vois.** **J'écris au proviseur → Je lui écris.**"},
    {k:"table", head:["Phrase complète","Avec pronom","English"], rows:[["Je lis la lettre.","Je la lis.","I read it."],["Il invite ses amis.","Il les invite.","He invites them."],["Nous écrivons à la directrice.","Nous lui écrivons.","We write to her."],["Elle parle aux élèves.","Elle leur parle.","She speaks to them."]]},
    {k:"rule"},
    {k:"h3", t:"Lettre modèle — Demande d'attestation"},
    {k:"p", t:"Monrovia, le 12 avril 2026"},
    {k:"p", t:"À Monsieur le Proviseur du Lycée de la Paix, Monrovia — **Objet : demande d'attestation de scolarité**"},
    {k:"p", t:"Monsieur le Proviseur,"},
    {k:"p", t:"Je m'appelle Princess Kollie et je suis élève en classe de onzième dans votre établissement. Je vous écris pour vous demander une attestation de scolarité. J'en ai besoin pour une demande de bourse. Je vous remercie d'avance de votre aide."},
    {k:"p", t:"Veuillez agréer, Monsieur le Proviseur, l'expression de mes salutations distinguées."},
    {k:"p", t:"Princess Kollie"}
  ],
  vocab:[
    {fr:"une lettre", en:"a letter", say:"oon LETR", e:"✉️"},
    {fr:"le destinataire", en:"the addressee", say:"luh des-tee-nah-TAIR", e:"📬"},
    {fr:"l'expéditeur", en:"the sender", say:"lex-pay-dee-TUHR", e:"📤"},
    {fr:"l'objet", en:"the subject line", say:"lob-ZHEH", e:"📌"},
    {fr:"la demande", en:"the request", say:"lah duh-MAHND", e:"🙏"},
    {fr:"Monsieur le Proviseur", en:"Mr. Principal", say:"muh-SYUH luh pro-vee-ZUHR", e:"🎓"},
    {fr:"Veuillez agréer...", en:"Please accept... (closing)", say:"vuh-YAY ah-gray-AY", e:"🖊️"},
    {fr:"la signature", en:"the signature", say:"lah see-nyah-TOOR", e:"✍️"},
    {fr:"remercier", en:"to thank", say:"ruh-mair-SYAY", e:"🙏"},
    {fr:"une attestation", en:"a certificate", say:"oon ah-tes-tah-SYOHN", e:"📜"},
    {fr:"une bourse", en:"a scholarship", say:"oon BOORSS", e:"🎒"},
    {fr:"je vous écris", en:"I am writing to you", say:"zhuh voo zay-KREE", e:"📝"},
    {fr:"d'avance", en:"in advance", say:"dah-VAHNSS", e:"⏩"},
    {fr:"poli / polie", en:"polite", say:"po-LEE", e:"😊"}
  ],
  extra:{title:"Les pronoms objets — Ordre et modèles", items:[
    "Direct: **le, la, l', les** — Je prends la lettre → Je **la** prends.",
    "Indirect: **lui** (to him/her), **leur** (to them) — Je parle au chef → Je **lui** parle.",
    "Négation : Je ne **le** vois pas. — I do not see him/it.",
    "Passé composé : Je **lui** ai écrit. — I wrote to him/her.",
    "Deux verbes : Je vais **la** lire. — I am going to read it."
  ]},
  activities:["Analysing a model formal letter and labelling its parts","Rewriting a tu-message in the vous-register","Pronoun substitution drills","Writing a real letter of request to the principal"],
  materials:["Model letters, friendly and formal","Layout wall chart of a formal letter","Writing paper"],
  assessment:["Continuous assessment","A complete formal letter, marked on layout and formulas","Written pronoun exercise","Homework"]
},
{
  grade:11, period:"V", sem:"Two", icon:"🗣️",
  fr:"La Francophonie",
  en:"The French-Speaking World",
  outcomes:[
    "Describe the extent and diversity of the French-speaking world",
    "Use the relative pronouns qui, que and où to build rich sentences",
    "Present a francophone country to the class",
    "Appreciate the value of French for Liberia's future"
  ],
  objectives:[
    "Explain what la Francophonie is and name its member regions",
    "Name at least eight francophone countries of Africa",
    "Use qui as subject and que as object in relative clauses",
    "Use où for places and times in relative clauses",
    "Prepare and deliver a short country presentation in French"
  ],
  note:"<b>La Francophonie</b> is the family of countries where French is spoken — over 300 million speakers on five continents, and most of them in <b>Africa</b>. Relative pronouns join sentences: <b>qui</b> = subject (<i>le pays <b>qui</b> est voisin</i>), <b>que</b> = object (<i>la langue <b>que</b> nous apprenons</i>), <b>où</b> = place/time (<i>le pays <b>où</b> je suis né</i>).",
  study:[
    /* ---- course text: Semester Two, Period V — La Francophonie ---- */
    {k:"h3", t:"Qu'est-ce que la Francophonie ?"},
    {k:"p", t:"**La Francophonie** is the community of people and countries that share the French language — more than **300 million speakers** on five continents. French is an official language in **29 countries**, and the majority of French speakers today live in **Africa**. An international organisation, the **OIF** (Organisation internationale de la Francophonie), links these countries in education, culture and trade."},
    {k:"rule"},
    {k:"h3", t:"Le français en Afrique — French in Africa"},
    {k:"table", head:["Région","Pays francophones (exemples)"], rows:[["Afrique de l'Ouest","le Sénégal, la Côte d'Ivoire, la Guinée, le Mali, le Burkina Faso, le Togo, le Bénin, le Niger"],["Afrique centrale","le Cameroun, le Gabon, le Congo, la République démocratique du Congo, le Tchad"],["Afrique du Nord","le Maroc, l'Algérie, la Tunisie"],["Océan Indien","Madagascar, les Comores, Maurice"]]},
    {k:"p", t:"Le Liberia n'est pas francophone, mais il est **entouré** de pays francophones : la Guinée au nord et la Côte d'Ivoire à l'est. C'est pourquoi le français est si utile pour le commerce, les études et la diplomatie."},
    {k:"rule"},
    {k:"h3", t:"Les pronoms relatifs QUI, QUE, OÙ"},
    {k:"p", t:"Relative pronouns let you join two short sentences into one rich one. **qui** is the **subject** of the verb that follows; **que** is the **object**; **où** refers to a **place or a time**."},
    {k:"table", head:["Pronom","Exemple","English"], rows:[["qui (subject)","La Guinée est un pays qui parle français.","Guinea is a country that speaks French."],["que (object)","Le français est la langue que nous apprenons.","French is the language that we learn."],["où (place)","Dakar est la ville où habite mon oncle.","Dakar is the city where my uncle lives."],["où (time)","C'était l'année où il a plu très fort.","It was the year when it rained very hard."]]},
    {k:"p", t:"Before a vowel **que** becomes **qu'** — *la chanson **qu'**elle chante* — but **qui** never changes."},
    {k:"rule"},
    {k:"h3", t:"Présenter un pays — Presenting a Country"},
    {k:"bul", items:["**Le pays que je présente s'appelle...** — The country I am presenting is called...","**C'est un pays qui se trouve en Afrique de l'Ouest.** — It is a country located in West Africa.","**La capitale est... / La monnaie est le franc CFA.** — The capital is... / The currency is the CFA franc.","**On y parle français et des langues nationales.** — French and national languages are spoken there.","**C'est le pays où l'on cultive le cacao.** — It is the country where cocoa is grown."]},
    {k:"rule"},
    {k:"h3", t:"Texte modèle — Le Sénégal"},
    {k:"p", t:"Le pays que je vais présenter est **le Sénégal**. C'est un pays qui se trouve à l'ouest de l'Afrique, au bord de l'océan Atlantique. La capitale, **Dakar**, est une grande ville où se rencontrent les cultures. La langue officielle est le français, et la monnaie est le **franc CFA**. Le Sénégal est célèbre pour la **Teranga** — l'hospitalité — et pour son premier président, **Léopold Sédar Senghor**, qui était aussi un grand poète de la langue française."}
  ],
  vocab:[
    {fr:"la Francophonie", en:"the French-speaking world", say:"lah frahn-ko-fo-NEE", e:"🌐"},
    {fr:"francophone", en:"French-speaking", say:"frahn-ko-FUN", e:"🗣️"},
    {fr:"une langue officielle", en:"an official language", say:"oon LAHNG o-fee-SYEL", e:"🏛️"},
    {fr:"un continent", en:"a continent", say:"uhn kohn-tee-NAHN", e:"🗺️"},
    {fr:"la capitale", en:"the capital city", say:"lah kah-pee-TAHL", e:"🏙️"},
    {fr:"la monnaie", en:"the currency", say:"lah mo-NEH", e:"💱"},
    {fr:"le franc CFA", en:"the CFA franc", say:"luh FRAHN say-ef-AH", e:"💶"},
    {fr:"un voisin", en:"a neighbour", say:"uhn vwah-ZAN", e:"🤝"},
    {fr:"entouré de", en:"surrounded by", say:"ahn-too-RAY duh", e:"⭕"},
    {fr:"partager", en:"to share", say:"par-tah-ZHAY", e:"🫱"},
    {fr:"la culture", en:"culture", say:"lah kool-TOOR", e:"🎭"},
    {fr:"un poète", en:"a poet", say:"uhn po-ET", e:"📜"},
    {fr:"célèbre", en:"famous", say:"say-LEBR", e:"⭐"},
    {fr:"l'hospitalité", en:"hospitality", say:"los-pee-tah-lee-TAY", e:"🏡"}
  ],
  extra:{title:"QUI, QUE ou OÙ ? — Modèles", items:[
    "**qui** + verbe : C'est Senghor **qui** a écrit ce poème.",
    "**que** + sujet + verbe : Voici le livre **que** je lis.",
    "**où** + lieu : Le village **où** je suis né est près de Gbarnga.",
    "**qu'** devant voyelle : La chanson **qu'**il chante est belle.",
    "**qui** ne change jamais : l'amie **qui** arrive (jamais ~qu'arrive~)."
  ]},
  activities:["Marking the francophone countries on a map of Africa","Sentence-combining drills with qui, que, où","Group presentations: each group presents one francophone country","Learning a short francophone poem or song"],
  materials:["Map of Africa and the world","Country fact cards","Textbook: Je me débrouille en français"],
  assessment:["Continuous assessment","Country presentation in French","Written relative-pronoun exercise","Homework"]
},
{
  grade:11, period:"VI", sem:"Two", icon:"🏛️",
  fr:"La Citoyenneté et le Gouvernement",
  en:"Citizenship and Government",
  outcomes:[
    "Describe the branches of government in French",
    "Talk about rights and duties of a citizen",
    "Use the pronoun on and simple passive expressions",
    "Hold a short civic discussion in French"
  ],
  objectives:[
    "Name the institutions: le président, le gouvernement, l'Assemblée, la cour",
    "State the rights and duties of citizens with avoir le droit de / le devoir de",
    "Use on for general statements: au Liberia, on vote à 18 ans",
    "Describe an election: voter, élire, un candidat, une campagne",
    "Compare Liberia's institutions with those of a francophone neighbour"
  ],
  note:"Civic French runs on <b>on</b>: <i>Au Liberia, <b>on</b> vote à dix-huit ans</i> — in Liberia, people vote at eighteen. Rights and duties: <b>avoir le droit de + infinitif</b> (to have the right to), <b>avoir le devoir de + infinitif</b> (to have the duty to). Institutions to know: le président, l'Assemblée nationale, le Sénat, la Cour suprême.",
  study:[
    /* ---- course text: Semester Two, Period VI — La citoyenneté ---- */
    {k:"h3", t:"L'État et ses institutions — the State and its Institutions"},
    {k:"p", t:"A republic like Liberia — **une république** — separates power into three branches: **le pouvoir exécutif** (the President and the government), **le pouvoir législatif** (the Legislature: **l'Assemblée** — the House — and **le Sénat**), and **le pouvoir judiciaire** (the courts, with **la Cour suprême** at the top)."},
    {k:"table", head:["Institution","Rôle","English"], rows:[["le président / la présidente","dirige le pays","leads the country"],["le gouvernement / les ministres","applique les lois","carries out the laws"],["l'Assemblée et le Sénat","votent les lois","pass the laws"],["la Cour suprême","juge selon la constitution","judges under the constitution"]]},
    {k:"rule"},
    {k:"h3", t:"Le pronom ON — Saying What People Do"},
    {k:"p", t:"**on** means *people in general*, *we*, or *one*. It always takes the **il/elle verb form**: **Au Liberia, on parle anglais.** — In Liberia, people speak English. **On vote à dix-huit ans.** — One votes at eighteen. On is also a simple way to avoid the passive: *Le français est parlé en Guinée* = **On parle français en Guinée.**"},
    {k:"rule"},
    {k:"h3", t:"Droits et devoirs — Rights and Duties"},
    {k:"bul", items:["**Tout citoyen a le droit de voter.** — Every citizen has the right to vote.","**On a le droit d'aller à l'école.** — Everyone has the right to go to school.","**On a le droit de parler librement.** — People have the right to speak freely.","**On a le devoir de respecter la loi.** — We have the duty to respect the law.","**On a le devoir de payer les impôts.** — We have the duty to pay taxes.","**On a le devoir de protéger le pays.** — We have the duty to protect the country."]},
    {k:"rule"},
    {k:"h3", t:"Les élections — Elections"},
    {k:"p", t:"Every citizen of eighteen years — **un citoyen**, **une citoyenne** — may **voter** (vote). The **candidats** hold a **campagne électorale**, the people **élisent** (elect) the winner, and the loser must accept the result: that is **la démocratie**."},
    {k:"rule"},
    {k:"h3", t:"Dialogue — Le jour du vote"},
    {k:"num", items:["**Le professeur :** Qui peut me dire à quel âge on vote au Liberia ?","**Siah :** On vote à dix-huit ans, monsieur.","**Le professeur :** Très bien. Et qu'est-ce qu'on fait le jour du vote ?","**Emmanuel :** On va au bureau de vote avec sa carte d'électeur, on choisit un candidat et on met le bulletin dans l'urne.","**Le professeur :** Excellent. Voter, c'est un droit — mais est-ce aussi un devoir ?","**Siah :** Oui ! Si on ne vote pas, on laisse les autres choisir pour nous.","**Le professeur :** Exactement. Un bon citoyen connaît ses droits et fait son devoir."]}
  ],
  vocab:[
    {fr:"un citoyen / une citoyenne", en:"a citizen", say:"uhn see-twah-YAN", e:"🧑"},
    {fr:"le gouvernement", en:"the government", say:"luh goo-vair-nuh-MAHN", e:"🏛️"},
    {fr:"le président", en:"the president", say:"luh pray-zee-DAHN", e:"🎖️"},
    {fr:"la loi", en:"the law", say:"lah LWAH", e:"📜"},
    {fr:"le droit", en:"the right", say:"luh DRWAH", e:"✅"},
    {fr:"le devoir", en:"the duty", say:"luh duh-VWAHR", e:"📋"},
    {fr:"voter", en:"to vote", say:"vo-TAY", e:"🗳️"},
    {fr:"élire", en:"to elect", say:"ay-LEER", e:"🙋"},
    {fr:"un candidat", en:"a candidate", say:"uhn kahn-dee-DAH", e:"🎤"},
    {fr:"une élection", en:"an election", say:"oon ay-lek-SYOHN", e:"🗳️"},
    {fr:"la démocratie", en:"democracy", say:"lah day-mo-krah-SEE", e:"🕊️"},
    {fr:"la constitution", en:"the constitution", say:"lah kohn-stee-too-SYOHN", e:"📖"},
    {fr:"la paix", en:"peace", say:"lah PEH", e:"☮️"},
    {fr:"respecter", en:"to respect", say:"res-pek-TAY", e:"🤝"}
  ],
  extra:{title:"ON — General Statements", items:[
    "**On parle anglais au Liberia.** — English is spoken in Liberia.",
    "**On vote à dix-huit ans.** — People vote at eighteen.",
    "**On ne doit pas tricher.** — One must not cheat.",
    "**En Guinée, on utilise le franc guinéen.** — In Guinea, the Guinean franc is used.",
    "on + il/elle form of the verb, always."
  ]},
  activities:["Class election in French: candidates, campaign, vote","Sorting statements into droits and devoirs","Comparing Liberia's institutions with Côte d'Ivoire's","Writing five on-sentences about life in Liberia"],
  materials:["Simple chart of the three branches of government","Ballot papers for the class election","Textbook: Je me débrouille en français"],
  assessment:["Continuous assessment","Participation in the class election","Written droits/devoirs exercise","Homework"]
},

/* ================================ GRADE 12 ================================ */
{
  grade:12, period:"I", sem:"One", icon:"⚖️",
  fr:"Le Subjonctif — Obligation et souhait",
  en:"The Subjunctive — Obligation and Wishes",
  outcomes:[
    "Recognize when French requires the subjunctive",
    "Form the present subjunctive of regular and key irregular verbs",
    "Express necessity, wish and emotion with que-clauses",
    "Raise written and spoken French to examination standard"
  ],
  objectives:[
    "Form the subjunctive stem from the ils-form of the present",
    "Add the endings -e, -es, -e, -ions, -iez, -ent",
    "Use il faut que, je veux que, je souhaite que + subjonctif",
    "Learn the irregular subjunctives of être, avoir, faire, aller, pouvoir",
    "Contrast il faut que je parte with je pense qu'il part"
  ],
  note:"After <b>il faut que</b>, <b>je veux que</b>, <b>je souhaite que</b> and expressions of emotion or doubt, the verb takes the <b>subjonctif</b>: <i>Il faut que tu <b>viennes</b></i>. Stem = the <b>ils-form</b> minus -ent, endings -e, -es, -e, -ions, -iez, -ent. Irregulars to learn: être → <i>que je sois</i>, avoir → <i>que j'aie</i>, faire → <i>que je fasse</i>, aller → <i>que j'aille</i>, pouvoir → <i>que je puisse</i>.",
  study:[
    /* ---- course text: Semester One, Period I — Le subjonctif ---- */
    {k:"h3", t:"Pourquoi le subjonctif ? — a Mood, not a Tense"},
    {k:"p", t:"The **indicatif** states facts: *Il part.* — He is leaving. The **subjonctif** appears after **que** when the main clause expresses **obligation, wish, emotion or doubt** — things that are wanted or feared, not simply true: **Il faut qu'il parte.** — He has to leave. **Je veux que tu réussisses.** — I want you to succeed."},
    {k:"rule"},
    {k:"h3", t:"La formation — Forming the Present Subjunctive"},
    {k:"p", t:"Take the **ils-form** of the present, remove **-ent**, and add **-e, -es, -e, -ions, -iez, -ent**: ils parl(ent) → **que je parle** ; ils finiss(ent) → **que je finisse** ; ils vend(ent) → **que je vende**."},
    {k:"table", head:["Sujet","parler","finir","English"], rows:[["que je","parle","finisse","that I speak / finish"],["que tu","parles","finisses","that you..."],["qu'il / elle","parle","finisse","that he / she..."],["que nous","parlions","finissions","that we..."],["que vous","parliez","finissiez","that you..."],["qu'ils / elles","parlent","finissent","that they..."]]},
    {k:"p", t:"Key **irregulars**: être → **que je sois, que tu sois, qu'il soit, que nous soyons** ; avoir → **que j'aie, qu'il ait, que nous ayons** ; faire → **que je fasse** ; aller → **que j'aille, que nous allions** ; pouvoir → **que je puisse** ; savoir → **que je sache**."},
    {k:"rule"},
    {k:"h3", t:"Les déclencheurs — Expressions Followed by the Subjunctive"},
    {k:"bul", items:["**Il faut que** tu travailles. — You must work.","**Je veux que** vous écoutiez. — I want you to listen.","**Je souhaite que** tu réussisses. — I wish you success.","**Je suis content(e) que** tu sois là. — I am glad you are here.","**Il est important que** nous soyons à l'heure. — It is important that we be on time.","**Je doute qu'**il vienne. — I doubt he will come."]},
    {k:"p", t:"But after **je pense que**, **je sais que**, **il est certain que** — statements of belief or fact — use the **indicatif**: *Je pense qu'il **vient**.*"},
    {k:"rule"},
    {k:"h3", t:"Dialogue — Avant l'examen"},
    {k:"num", items:["**La mère :** Korto, il faut que tu te lèves tôt demain. L'examen commence à huit heures.","**Korto :** Oui, maman. Je veux que tout soit prêt ce soir : mon stylo, ma carte, mon uniforme.","**La mère :** Il est important que tu dormes bien et que tu prennes ton petit déjeuner.","**Korto :** D'accord. Je souhaite que les questions soient faciles !","**La mère :** Moi, je souhaite surtout que tu fasses de ton mieux. Que Dieu te bénisse, ma fille.","**Korto :** Merci, maman. Il faut que j'aille réviser maintenant !"]}
  ],
  vocab:[
    {fr:"il faut que", en:"it is necessary that", say:"eel FOH kuh", e:"❗"},
    {fr:"je veux que", en:"I want (someone) to", say:"zhuh VUH kuh", e:"🎯"},
    {fr:"je souhaite que", en:"I wish that", say:"zhuh soo-ET kuh", e:"🌠"},
    {fr:"que je sois", en:"that I be", say:"kuh zhuh SWAH", e:"🌟"},
    {fr:"que j'aie", en:"that I have", say:"kuh ZHEH", e:"🎁"},
    {fr:"que je fasse", en:"that I do / make", say:"kuh zhuh FAHSS", e:"🛠️"},
    {fr:"que j'aille", en:"that I go", say:"kuh ZHAHY", e:"➡️"},
    {fr:"que je puisse", en:"that I can", say:"kuh zhuh PWEESS", e:"💪"},
    {fr:"réviser", en:"to revise / study", say:"ray-vee-ZAY", e:"📚"},
    {fr:"réussir", en:"to succeed / pass", say:"ray-oo-SEER", e:"🏆"},
    {fr:"douter", en:"to doubt", say:"doo-TAY", e:"❓"},
    {fr:"être à l'heure", en:"to be on time", say:"ETR ah LUHR", e:"⏰"},
    {fr:"un souhait", en:"a wish", say:"uhn soo-EH", e:"🌠"},
    {fr:"de ton mieux", en:"your best", say:"duh tohn MYUH", e:"💯"}
  ],
  extra:{title:"Subjonctif ou indicatif ?", items:[
    "**Il faut que je parte.** (obligation → subjonctif)",
    "**Je veux que tu viennes.** (volonté → subjonctif)",
    "**Je suis heureux que tu sois là.** (émotion → subjonctif)",
    "**Je pense qu'il vient.** (opinion affirmée → indicatif)",
    "**Je sais qu'elle est malade.** (fait connu → indicatif)"
  ]},
  activities:["Trigger-hunt: sorting que-expressions into subjunctive and indicative","Conjugation relay at the board","Wish-cards: each pupil writes three souhaits for the class","Rewriting commands as il faut que sentences"],
  materials:["Subjunctive conjugation wall chart","Trigger-expression flash cards","Textbook: Je me débrouille en français"],
  assessment:["Continuous assessment","Oral sentence-building with il faut que","Written mood-choice exercise","Homework"]
},
{
  grade:12, period:"II", sem:"One", icon:"💼",
  fr:"Le Monde du Travail",
  en:"The World of Work",
  outcomes:[
    "Apply for a job in French: letter, CV and interview",
    "Describe skills, qualities and experience",
    "Understand simple job advertisements",
    "Perform a job interview with appropriate register"
  ],
  objectives:[
    "Read and analyse a French job advertisement",
    "Write a CV with état civil, formation, expérience, compétences",
    "Write a short lettre de motivation",
    "Answer standard interview questions in the vous-register",
    "Describe personal qualities with être + adjective and savoir + infinitive"
  ],
  note:"A job application has three parts: <b>l'annonce</b> (the advert), <b>le CV</b> (curriculum vitae) and <b>la lettre de motivation</b>. At the interview — <b>l'entretien d'embauche</b> — stay in the <b>vous</b>-register, present your <b>compétences</b> (skills): <i>Je sais utiliser l'ordinateur. Je parle anglais et français.</i>",
  study:[
    /* ---- course text: Semester One, Period II — Le monde du travail ---- */
    {k:"h3", t:"L'annonce d'emploi — Reading a Job Advertisement"},
    {k:"p", t:"A **petite annonce** gives the job title, the tasks, the qualities required and how to apply: *Société de commerce à Monrovia **recherche** secrétaire bilingue anglais-français. **Missions :** accueil, courrier, classement. **Qualités :** sérieux/sérieuse, organisé(e), ponctuel(le). **Envoyer CV et lettre de motivation.**"},
    {k:"rule"},
    {k:"h3", t:"Le CV — the Curriculum Vitae"},
    {k:"table", head:["Rubrique","Contenu","English"], rows:[["État civil","nom, prénom, adresse, téléphone","personal details"],["Formation","études et diplômes, du plus récent au plus ancien","education"],["Expérience professionnelle","emplois, stages, travaux","work experience"],["Compétences","langues, informatique, permis","skills"],["Centres d'intérêt","sport, lecture, musique","interests"]]},
    {k:"p", t:"Keep a CV to **one page**, and check every accent and every date — the employer judges the care as much as the content."},
    {k:"rule"},
    {k:"h3", t:"Décrire ses qualités — Talking About Your Skills"},
    {k:"bul", items:["**Je suis travailleur / travailleuse.** — I am hard-working.","**Je suis honnête, ponctuel(le) et organisé(e).** — I am honest, punctual and organised.","**Je sais utiliser l'ordinateur.** — I can use a computer.","**Je parle anglais et français.** — I speak English and French.","**J'ai deux ans d'expérience dans la vente.** — I have two years' experience in sales.","**J'apprends vite.** — I learn quickly."]},
    {k:"rule"},
    {k:"h3", t:"L'entretien d'embauche — the Job Interview"},
    {k:"p", t:"Standard questions and strong answers — always in the **vous**-register, with a firm greeting and a thank-you at the end:"},
    {k:"table", head:["Question","Bonne réponse"], rows:[["Parlez-moi de vous.","Je m'appelle..., j'ai étudié au lycée..., je cherche..."],["Quelles sont vos qualités ?","Je suis sérieux/sérieuse, ponctuel(le) et honnête."],["Pourquoi voulez-vous ce poste ?","Parce que je parle les deux langues et j'aime ce travail."],["Quand pouvez-vous commencer ?","Je peux commencer dès lundi."]]},
    {k:"rule"},
    {k:"h3", t:"Dialogue — L'entretien de Théo"},
    {k:"num", items:["**La directrice :** Bonjour, monsieur. Asseyez-vous. Parlez-moi de vous.","**Théo :** Bonjour, madame. Je m'appelle Théo Johnson. J'ai terminé le lycée cette année et je parle anglais et français.","**La directrice :** Pourquoi voulez-vous travailler dans notre société ?","**Théo :** Parce que votre société commerce avec la Guinée et la Côte d'Ivoire, et je peux servir vos clients dans les deux langues.","**La directrice :** Quelles sont vos qualités ?","**Théo :** Je suis ponctuel, honnête et je sais utiliser l'ordinateur.","**La directrice :** Très bien. Quand pouvez-vous commencer ?","**Théo :** Dès lundi, madame. Je vous remercie de votre confiance."]}
  ],
  vocab:[
    {fr:"le travail", en:"work / job", say:"luh trah-VY", e:"💼"},
    {fr:"un emploi", en:"a job / employment", say:"uhn ahm-PLWAH", e:"🧾"},
    {fr:"une annonce", en:"an advertisement", say:"oon ah-NOHNSS", e:"📢"},
    {fr:"le CV", en:"the CV / résumé", say:"luh say-VAY", e:"📄"},
    {fr:"la lettre de motivation", en:"the cover letter", say:"lah LETR duh mo-tee-vah-SYOHN", e:"✉️"},
    {fr:"l'entretien d'embauche", en:"the job interview", say:"lahn-truh-TYAN dahm-BOHSH", e:"🎤"},
    {fr:"un salaire", en:"a salary", say:"uhn sah-LAIR", e:"💵"},
    {fr:"une compétence", en:"a skill", say:"oon kohn-pay-TAHNSS", e:"🛠️"},
    {fr:"l'expérience", en:"experience", say:"lex-pay-ree-AHNSS", e:"📈"},
    {fr:"embaucher", en:"to hire", say:"ahm-boh-SHAY", e:"🤝"},
    {fr:"un patron / une patronne", en:"a boss", say:"uhn pah-TROHN", e:"🧑‍💼"},
    {fr:"ponctuel / ponctuelle", en:"punctual", say:"pohnk-too-EL", e:"⏰"},
    {fr:"travailleur / travailleuse", en:"hard-working", say:"trah-vy-UHR", e:"💪"},
    {fr:"postuler", en:"to apply", say:"pos-too-LAY", e:"📮"}
  ],
  extra:{title:"La lettre de motivation — Squelette", items:[
    "**Objet :** candidature au poste de secrétaire bilingue",
    "**Madame, Monsieur,** — opening when the name is unknown",
    "**Suite à votre annonce, je me permets de poser ma candidature.**",
    "**Je suis... / Je sais... / J'ai...** — qualities, skills, experience",
    "**Je reste à votre disposition pour un entretien.**",
    "**Veuillez agréer, Madame, Monsieur, mes salutations distinguées.**"
  ]},
  activities:["Analysing real-style job adverts","Writing a one-page CV in French","Mock interviews in pairs, marked by the class","Writing a short lettre de motivation for a chosen advert"],
  materials:["Sample adverts, CVs and letters","Interview question cards","Textbook: Je me débrouille en français"],
  assessment:["Continuous assessment","Mock interview performance","A complete CV and cover letter","Homework"]
},
{
  grade:12, period:"III", sem:"One", icon:"🎓",
  fr:"Les Études Supérieures",
  en:"Higher Education and Reported Speech",
  outcomes:[
    "Discuss university studies and study plans in French",
    "Transform direct speech into reported speech",
    "Ask for information about courses and scholarships",
    "Compare study opportunities at home and in francophone countries"
  ],
  objectives:[
    "Name faculties, courses and diplomas in French",
    "Use dire que, demander si, répondre que to report speech",
    "Shift tenses correctly when the reporting verb is in the past",
    "Ask about admission: inscription, frais, bourse, dossier",
    "Present his/her own study plan to the class"
  ],
  note:"Reported speech: <i>Il dit : « Je suis étudiant »</i> → <i>Il dit <b>qu'il est</b> étudiant.</i> Questions: <i>Elle demande : « Tu viens ? »</i> → <i>Elle demande <b>si je viens</b>.</i> When the reporting verb is in the past, the tense steps back: présent → imparfait — <i>Il a dit qu'il <b>était</b> étudiant.</i> University words: la faculté, l'inscription, la bourse, le dossier.",
  study:[
    /* ---- course text: Semester One, Period III — Les études supérieures ---- */
    {k:"h3", t:"L'université — Talking About Higher Studies"},
    {k:"p", t:"After **le baccalauréat** or the senior-high diploma comes **l'université** or **l'institut professionnel**. One **s'inscrit** (enrols) in a **faculté**: la faculté de **médecine**, de **droit** (law), des **sciences**, des **lettres** (arts), d'**agriculture** or d'**ingénierie**. The student — **l'étudiant, l'étudiante** — follows **des cours** (lectures), passes **des examens** and earns **un diplôme**."},
    {k:"table", head:["Mot","English"], rows:[["s'inscrire / l'inscription","to enrol / enrolment"],["les frais de scolarité","tuition fees"],["une bourse d'études","a scholarship"],["le dossier de candidature","the application file"],["la rentrée universitaire","the start of the academic year"],["la licence / le master","bachelor's / master's degree"]]},
    {k:"rule"},
    {k:"h3", t:"Le discours indirect — Reported Speech"},
    {k:"p", t:"To report what someone says, drop the quotation marks and join with **que** (statements), **si** (yes/no questions) or **de + infinitif** (commands). Pronouns change with the point of view: *Marie dit : « **Je** suis fatiguée »* → *Marie dit qu'**elle** est fatiguée.*"},
    {k:"table", head:["Discours direct","Discours indirect"], rows:[["Il dit : « Je suis étudiant. »","Il dit qu'il est étudiant."],["Elle demande : « Tu as une bourse ? »","Elle demande si j'ai une bourse."],["Le doyen demande : « Où habitez-vous ? »","Il demande où j'habite."],["Le professeur dit : « Travaillez ! »","Il dit de travailler."]]},
    {k:"p", t:"When the reporting verb is in the **past**, the tense of the reported clause steps back: présent → **imparfait**, passé composé → **plus-que-parfait**, futur → **conditionnel**: *Il a dit : « Je viendrai »* → *Il a dit qu'il **viendrait**.*"},
    {k:"rule"},
    {k:"h3", t:"Demander des renseignements — Asking for Information"},
    {k:"bul", items:["**Comment est-ce qu'on s'inscrit ?** — How does one enrol?","**Quels sont les frais de scolarité ?** — What are the tuition fees?","**Est-ce qu'il y a des bourses ?** — Are there scholarships?","**Quelles pièces faut-il pour le dossier ?** — What documents does the file need?","**Quand commence la rentrée ?** — When does the academic year start?"]},
    {k:"rule"},
    {k:"h3", t:"Dialogue — Au bureau des inscriptions"},
    {k:"num", items:["**Miatta :** Bonjour, monsieur. Je voudrais des renseignements sur la faculté de droit.","**L'agent :** Bien sûr. Avez-vous terminé le lycée ?","**Miatta :** Oui, j'ai eu mon diplôme cette année. Comment est-ce qu'on s'inscrit ?","**L'agent :** Il faut un dossier : le diplôme, deux photos et une lettre de motivation.","**Miatta :** Est-ce qu'il y a des bourses pour les meilleures étudiantes ?","**L'agent :** Oui. Le doyen a dit hier que l'université donnerait vingt bourses cette année.","**Miatta :** Formidable ! Alors je déposerai mon dossier demain. Merci, monsieur !"]}
  ],
  vocab:[
    {fr:"l'université", en:"the university", say:"loo-nee-vair-see-TAY", e:"🏫"},
    {fr:"un étudiant / une étudiante", en:"a student", say:"uhn ay-too-DYAHN", e:"🧑‍🎓"},
    {fr:"la faculté", en:"the faculty", say:"lah fah-kool-TAY", e:"🏛️"},
    {fr:"le droit", en:"law (studies)", say:"luh DRWAH", e:"⚖️"},
    {fr:"la médecine", en:"medicine (studies)", say:"lah mayd-SEEN", e:"🩺"},
    {fr:"un diplôme", en:"a diploma / degree", say:"uhn dee-PLOHM", e:"📜"},
    {fr:"une bourse", en:"a scholarship", say:"oon BOORSS", e:"🎒"},
    {fr:"l'inscription", en:"enrolment", say:"lan-skreep-SYOHN", e:"📝"},
    {fr:"les frais de scolarité", en:"tuition fees", say:"lay FREH duh sko-lah-ree-TAY", e:"💵"},
    {fr:"un dossier", en:"an application file", say:"uhn doh-SYAY", e:"📁"},
    {fr:"la rentrée", en:"the start of the year", say:"lah rahn-TRAY", e:"🔔"},
    {fr:"il dit que", en:"he says that", say:"eel DEE kuh", e:"💬"},
    {fr:"elle demande si", en:"she asks whether", say:"el duh-MAHND see", e:"❓"},
    {fr:"répondre", en:"to answer", say:"ray-POHNDR", e:"↩️"}
  ],
  extra:{title:"La concordance des temps — Tense Shift", items:[
    "Il dit : « Je **suis** prêt » → Il a dit qu'il **était** prêt.",
    "Elle dit : « J'**ai fini** » → Elle a dit qu'elle **avait fini**.",
    "Il dit : « Je **viendrai** » → Il a dit qu'il **viendrait**.",
    "« Tu viens ? » → Elle a demandé **si je venais**.",
    "« Travaillez ! » → Il a dit **de travailler**."
  ]},
  activities:["Message-relay game: reporting classmates' sentences","Rewriting a short interview in reported speech","Information-desk role-play about enrolment","Presenting a personal study plan: Mes études après le lycée"],
  materials:["Sample enrolment forms","Tense-shift wall chart","Textbook: Je me débrouille en français"],
  assessment:["Continuous assessment","Oral reported-speech relay","Written transformation exercise","Homework"]
},
{
  grade:12, period:"IV", sem:"Two", icon:"📰",
  fr:"La Presse et l'Actualité",
  en:"The Press and Current Affairs",
  outcomes:[
    "Read and summarize a simple news article in French",
    "Use the plus-que-parfait to order past events",
    "Distinguish fact from opinion in a text",
    "Present a short news bulletin to the class"
  ],
  objectives:[
    "Name the parts of a newspaper: la une, le titre, la rubrique, l'article",
    "Form the plus-que-parfait with the imparfait of avoir/être + participle",
    "Summarize an article with the questions qui, quoi, où, quand, pourquoi",
    "Separate les faits from les opinions in a report",
    "Write and read a short news item"
  ],
  note:"The <b>plus-que-parfait</b> says what had <b>already happened</b> before another past event: <b>imparfait de avoir/être + participe passé</b> — <i>Quand je suis arrivé, le match <b>avait commencé</b></i>. A journalist answers five questions: <b>qui ? quoi ? où ? quand ? pourquoi ?</b> — and keeps <b>les faits</b> (facts) apart from <b>les opinions</b>.",
  study:[
    /* ---- course text: Semester Two, Period IV — La presse ---- */
    {k:"h3", t:"Le journal — Inside a Newspaper"},
    {k:"p", t:"**La une** is the front page; each section is **une rubrique**: la politique, l'économie, le sport, la culture, la santé. **Le titre** (headline) announces the article; **le journaliste** signs it. A good reader checks **la source** — who says it, and how do they know?"},
    {k:"table", head:["Mot","English"], rows:[["la une","the front page"],["le titre / le gros titre","the headline"],["une rubrique","a section / column"],["un article","an article"],["un reportage","a report"],["une interview","an interview"],["le rédacteur en chef","the editor-in-chief"]]},
    {k:"rule"},
    {k:"h3", t:"Le plus-que-parfait — the Past Before the Past"},
    {k:"p", t:"News stories order events. For an event that happened **before** another past event, use the **plus-que-parfait**: the **imparfait** of avoir or être + the past participle: **La pluie avait détruit le pont avant l'arrivée des secours.** — The rain had destroyed the bridge before help arrived."},
    {k:"table", head:["Sujet","Exemple","English"], rows:[["j'","j'avais fini","I had finished"],["tu","tu avais vu","you had seen"],["il / elle","elle était partie","she had left"],["nous","nous avions lu","we had read"],["vous","vous aviez dit","you had said"],["ils / elles","ils étaient arrivés","they had arrived"]]},
    {k:"rule"},
    {k:"h3", t:"Résumer un article — the Five Questions"},
    {k:"bul", items:["**Qui ?** — Who is it about?","**Quoi ?** — What happened?","**Où ?** — Where did it happen?","**Quand ?** — When did it happen?","**Pourquoi / Comment ?** — Why, or how, did it happen?","Answer the five questions in two or three sentences — that is **le résumé**."]},
    {k:"h3", t:"Fait ou opinion ? — Fact or Opinion?"},
    {k:"p", t:"**Un fait** can be checked: *Le match a fini 2 à 1.* **Une opinion** is a judgement: *C'était le plus beau match de l'année.* News mixes both — a good citizen reads with the question: **est-ce un fait ou une opinion ?**"},
    {k:"rule"},
    {k:"h3", t:"Article modèle — Inondation à Monrovia"},
    {k:"p", t:"**MONROVIA, le 14 août.** — De fortes pluies ont inondé hier plusieurs quartiers de la capitale. Selon la Croix-Rouge, plus de deux cents familles ont quitté leurs maisons. La pluie **avait commencé** pendant la nuit et, au matin, l'eau **était montée** dans les rues de Clara Town. « Nous avions déjà préparé les abris », a déclaré un volontaire. Les écoles du quartier resteront fermées cette semaine. *(D'après notre reporter)*"}
  ],
  vocab:[
    {fr:"la presse", en:"the press", say:"lah PRESS", e:"📰"},
    {fr:"un journaliste", en:"a journalist", say:"uhn zhoor-nah-LEEST", e:"🎙️"},
    {fr:"la une", en:"the front page", say:"lah OON", e:"🗞️"},
    {fr:"un titre", en:"a headline", say:"uhn TEETR", e:"🔠"},
    {fr:"une rubrique", en:"a section / column", say:"oon roo-BREEK", e:"📑"},
    {fr:"un reportage", en:"a news report", say:"uhn ruh-por-TAHZH", e:"📹"},
    {fr:"une interview", en:"an interview", say:"oon an-tair-VYOO", e:"🎤"},
    {fr:"un fait", en:"a fact", say:"uhn FEH", e:"✅"},
    {fr:"une opinion", en:"an opinion", say:"oon o-pee-NYOHN", e:"💭"},
    {fr:"une source", en:"a source", say:"oon SOORSS", e:"🔍"},
    {fr:"selon", en:"according to", say:"suh-LOHN", e:"🗣️"},
    {fr:"déclarer", en:"to declare / state", say:"day-klah-RAY", e:"📢"},
    {fr:"une inondation", en:"a flood", say:"oon ee-nohn-dah-SYOHN", e:"🌊"},
    {fr:"un résumé", en:"a summary", say:"uhn ray-zoo-MAY", e:"📋"}
  ],
  extra:{title:"Le plus-que-parfait — Modèles", items:[
    "**Quand je suis arrivé, le match avait commencé.** — When I arrived, the match had begun.",
    "**Elle a montré la lettre qu'elle avait écrite.** — She showed the letter she had written.",
    "**Nous étions fatigués parce que nous avions marché toute la journée.**",
    "**Ils étaient déjà partis quand la pluie a commencé.**",
    "imparfait de avoir/être + participe passé — the past before the past."
  ]},
  activities:["Reading and summarizing a short article with the five questions","Sorting statements into faits and opinions","Writing a class news item about a school event","Presenting a two-minute news bulletin in French"],
  materials:["Printed short articles in simple French","The five-questions wall chart","Textbook: Je me débrouille en français"],
  assessment:["Continuous assessment","Oral news bulletin","Written summary of an article","Homework"]
},
{
  grade:12, period:"V", sem:"Two", icon:"📚",
  fr:"La Littérature Francophone",
  en:"Francophone Literature",
  outcomes:[
    "Recognize the great names of francophone African literature",
    "Read a short literary passage with understanding",
    "Identify simple figures of speech in French",
    "Express a personal response to a text"
  ],
  objectives:[
    "Name key authors: Senghor, Camara Laye, Mariama Bâ, Ahmadou Kourouma",
    "Distinguish le roman, le conte, la poésie and le proverbe",
    "Identify la comparaison, la métaphore and la personnification",
    "Read aloud with correct liaison and intonation",
    "Give a short personal reaction: ce texte me plaît parce que..."
  ],
  note:"Francophone Africa has a great literature: <b>Léopold Sédar Senghor</b> (Sénégal, poet-president), <b>Camara Laye</b> (Guinée, <i>L'Enfant noir</i>), <b>Mariama Bâ</b> (Sénégal, <i>Une si longue lettre</i>), <b>Ahmadou Kourouma</b> (Côte d'Ivoire). Figures of speech: <b>la comparaison</b> uses <i>comme</i> (<i>fort comme un lion</i>); <b>la métaphore</b> drops it (<i>cet homme est un lion</i>).",
  study:[
    /* ---- course text: Semester Two, Period V — La littérature ---- */
    {k:"h3", t:"Les genres — Kinds of Literature"},
    {k:"table", head:["Genre","English","Exemple"], rows:[["le conte","the folk tale","les contes de l'araignée, told in the villages"],["le roman","the novel","L'Enfant noir de Camara Laye"],["la poésie","poetry","les poèmes de Senghor"],["le théâtre","drama","une pièce jouée à l'école"],["le proverbe","the proverb","La parole des anciens est sagesse."]]},
    {k:"p", t:"Africa's oldest literature is **orale** — tales, proverbs and songs passed from **les griots** and the elders to the young, in the evening around the fire. Written francophone literature grew from these roots."},
    {k:"rule"},
    {k:"h3", t:"Quatre grands auteurs — Four Great Authors"},
    {k:"bul", items:["**Léopold Sédar Senghor** (Sénégal, 1906–2001) — poet of the **négritude**, first president of Senegal, first African member of the Académie française.","**Camara Laye** (Guinée, 1928–1980) — his novel **L'Enfant noir** tells his childhood in Kouroussa, between the forge of his father and the school.","**Mariama Bâ** (Sénégal, 1929–1981) — **Une si longue lettre**, a novel in letters about the life and courage of women.","**Ahmadou Kourouma** (Côte d'Ivoire, 1927–2003) — **Les Soleils des indépendances**, a novel that makes French dance to the rhythm of the malinké language."]},
    {k:"rule"},
    {k:"h3", t:"Les figures de style — Figures of Speech"},
    {k:"table", head:["Figure","Définition","Exemple"], rows:[["la comparaison","compares with comme","Il est fort comme un lion."],["la métaphore","compares without comme","Cet homme est un lion."],["la personnification","gives life to a thing","Le vent chante dans les palmiers."],["la répétition","repeats for effect","Femme noire, femme obscure... (Senghor)"]]},
    {k:"rule"},
    {k:"h3", t:"Lire un texte — Reading a Passage"},
    {k:"p", t:"Extrait (d'après *L'Enfant noir*) : « Dans l'atelier de mon père, le feu **était un ami** : il **dansait**, il **parlait**, et l'or fondait **comme** le beurre au soleil. Les apprentis regardaient, silencieux **comme** la nuit. » — Find the metaphor, the personifications and the two comparisons in this passage."},
    {k:"bul", items:["**De quoi parle le texte ?** — What is the text about?","**Qui raconte ?** — Who is telling the story?","**Quelles images l'auteur emploie-t-il ?** — What images does the author use?","**Ce texte me plaît parce que...** — I like this text because..."]},
    {k:"rule"},
    {k:"h3", t:"Proverbes d'Afrique de l'Ouest — Proverbs to Learn"},
    {k:"bul", items:["**Petit à petit, l'oiseau fait son nid.** — Little by little, the bird builds its nest.","**Seul, on va plus vite ; ensemble, on va plus loin.** — Alone we go faster; together we go further.","**La pluie ne tombe pas sur un seul toit.** — The rain does not fall on one roof only.","**Quand les racines sont profondes, l'arbre ne craint pas le vent.** — When the roots are deep, the tree does not fear the wind."]}
  ],
  vocab:[
    {fr:"la littérature", en:"literature", say:"lah lee-tay-rah-TOOR", e:"📚"},
    {fr:"un écrivain", en:"a writer", say:"uhn ay-kree-VAN", e:"✍️"},
    {fr:"un roman", en:"a novel", say:"uhn ro-MAHN", e:"📖"},
    {fr:"un conte", en:"a folk tale", say:"uhn KOHNT", e:"🌙"},
    {fr:"un poème", en:"a poem", say:"uhn po-EM", e:"📜"},
    {fr:"un proverbe", en:"a proverb", say:"uhn pro-VAIRB", e:"🦉"},
    {fr:"le griot", en:"the griot / storyteller", say:"luh gree-OH", e:"🥁"},
    {fr:"un personnage", en:"a character", say:"uhn pair-so-NAHZH", e:"🎭"},
    {fr:"l'auteur", en:"the author", say:"loh-TUHR", e:"🖋️"},
    {fr:"une comparaison", en:"a simile", say:"oon kohn-pah-reh-ZOHN", e:"⚖️"},
    {fr:"une métaphore", en:"a metaphor", say:"oon may-tah-FOR", e:"🌹"},
    {fr:"la sagesse", en:"wisdom", say:"lah sah-ZHESS", e:"🧠"},
    {fr:"raconter", en:"to tell (a story)", say:"rah-kohn-TAY", e:"🗣️"},
    {fr:"ce texte me plaît", en:"I like this text", say:"suh TEKST muh PLEH", e:"💚"}
  ],
  extra:{title:"Comparaison ou métaphore ?", items:[
    "**Fort comme un lion** → comparaison (avec *comme*)",
    "**Cet homme est un lion** → métaphore (sans *comme*)",
    "**La lune sourit aux enfants** → personnification",
    "**Doux comme le miel** → comparaison",
    "**Monrovia, cœur du Liberia** → métaphore"
  ]},
  activities:["Reading circle: a short passage read aloud with parts","Figure-of-speech hunt in a poem","Telling a Liberian folk tale in simple French","Learning a proverb a day and using it in a sentence"],
  materials:["Short extracts from L'Enfant noir and Senghor's poems","Proverb cards","Textbook: Je me débrouille en français"],
  assessment:["Continuous assessment","Expressive reading aloud","Written figure-identification exercise","Homework"]
},
{
  grade:12, period:"VI", sem:"Two", icon:"🏁",
  fr:"Révision Générale et Préparation à l'Examen",
  en:"General Revision and Exam Preparation",
  outcomes:[
    "Consolidate the tense system from présent to subjonctif",
    "Apply reliable exam technique to every question type",
    "Translate short passages accurately in both directions",
    "Enter the final examination confident and prepared"
  ],
  objectives:[
    "Review the conjugation of the eight tenses and moods studied",
    "Choose the correct tense from context clues and time markers",
    "Translate sentences French–English and English–French without word-for-word errors",
    "Manage examination time and check work systematically",
    "Write a guided composition of 80–100 words"
  ],
  note:"Exam technique: read the whole paper first, watch the <b>time markers</b> (<i>hier</i> → passé composé, <i>tous les jours</i> → présent/imparfait, <i>demain</i> → futur, <i>si + imparfait</i> → conditionnel, <i>il faut que</i> → subjonctif), never translate word for word, and keep ten minutes to <b>se relire</b> — re-read your work. Les accents comptent : <i>a</i> / <i>à</i>, <i>ou</i> / <i>où</i> !",
  study:[
    /* ---- course text: Semester Two, Period VI — Révision générale ---- */
    {k:"h3", t:"Le système des temps — the Tense System at a Glance"},
    {k:"table", head:["Temps","Emploi","Exemple"], rows:[["présent","now, habits, facts","Je parle français."],["passé composé","finished past event","Hier, j'ai parlé au directeur."],["imparfait","past description, habit","Quand j'étais petit, je parlais kpellé."],["plus-que-parfait","past before the past","J'avais déjà parlé quand il est entré."],["futur proche","near plan","Je vais parler au professeur."],["futur simple","future","Demain, je parlerai devant la classe."],["conditionnel","would; politeness; si-clauses","Je parlerais mieux si je pratiquais."],["subjonctif","after il faut que, je veux que...","Il faut que je parle clairement."]]},
    {k:"rule"},
    {k:"h3", t:"Les indices de temps — Time Markers that Choose the Tense"},
    {k:"bul", items:["**hier, la semaine dernière, il y a...** → passé composé","**autrefois, tous les jours, pendant que...** → imparfait","**maintenant, en ce moment** → présent","**demain, l'année prochaine, plus tard** → futur simple","**si + imparfait dans la phrase** → conditionnel dans l'autre partie","**il faut que, je veux que, bien que** → subjonctif"]},
    {k:"rule"},
    {k:"h3", t:"La traduction — Translating Without Traps"},
    {k:"p", t:"Never translate **word for word**. Translate the **meaning**, then check the grammar of the new sentence."},
    {k:"table", head:["Piège","Faux","Correct"], rows:[["J'ai 18 ans","~I have 18 years~","I am 18 years old."],["I am hungry","~Je suis faim~","J'ai faim."],["Il fait chaud","~It makes hot~","It is hot."],["actuellement","~actually~","currently / at present"],["une librairie","~a library~","a bookshop (library = une bibliothèque)"]]},
    {k:"rule"},
    {k:"h3", t:"La composition guidée — the Guided Composition"},
    {k:"num", items:["**Lisez le sujet deux fois.** — Read the topic twice.","**Faites un plan** : introduction, deux ou trois idées, conclusion.","**Écrivez simplement** : des phrases courtes et correctes valent mieux que de longues phrases fausses.","**Utilisez les connecteurs** : d'abord, ensuite, puis, enfin, parce que, mais, donc.","**Comptez vos mots** et **relisez** : accords, accents, auxiliaires."]},
    {k:"rule"},
    {k:"h3", t:"Le jour de l'examen — On Examination Day"},
    {k:"bul", items:["**Arrivez en avance** avec deux stylos. — Arrive early with two pens.","**Lisez tout le sujet** avant de commencer. — Read the whole paper first.","**Répondez d'abord aux questions faciles.** — Answer the easy questions first.","**Gardez dix minutes pour vous relire.** — Keep ten minutes to re-read.","**Bonne chance — et bon courage !** — Good luck and courage!"]},
    {k:"rule"},
    {k:"h3", t:"Texte modèle — Ce que le français m'a donné"},
    {k:"p", t:"Pendant six ans, j'ai étudié le français. D'abord, c'était difficile : je ne savais dire que « bonjour ». Ensuite, j'ai appris à parler du passé et de l'avenir, à écrire des lettres et à lire des poèmes. Aujourd'hui, je peux parler avec nos voisins de Guinée et de Côte d'Ivoire. Demain, si je continue à pratiquer, le français m'ouvrira les portes de toute l'Afrique de l'Ouest. Merci, professeurs — et vive la langue française !"}
  ],
  vocab:[
    {fr:"un examen", en:"an examination", say:"uhn eg-zah-MAN", e:"📝"},
    {fr:"réviser", en:"to revise", say:"ray-vee-ZAY", e:"📚"},
    {fr:"une épreuve", en:"a test paper", say:"oon ay-PRUHV", e:"📄"},
    {fr:"le sujet", en:"the topic / question", say:"luh soo-ZHEH", e:"❓"},
    {fr:"la traduction", en:"translation", say:"lah trah-dook-SYOHN", e:"🔁"},
    {fr:"traduire", en:"to translate", say:"trah-DWEER", e:"🔄"},
    {fr:"une composition", en:"an essay", say:"oon kohn-po-zee-SYOHN", e:"✍️"},
    {fr:"un connecteur", en:"a linking word", say:"uhn ko-nek-TUHR", e:"🔗"},
    {fr:"se relire", en:"to re-read one's work", say:"suh ruh-LEER", e:"🔍"},
    {fr:"une faute", en:"a mistake", say:"oon FOHT", e:"❌"},
    {fr:"corriger", en:"to correct", say:"ko-ree-ZHAY", e:"✔️"},
    {fr:"la note", en:"the mark / grade", say:"lah NUT", e:"💯"},
    {fr:"Bonne chance !", en:"Good luck!", say:"bun SHAHNSS", e:"🍀"},
    {fr:"Bon courage !", en:"Courage! / You can do it!", say:"bohn koo-RAHZH", e:"💪"}
  ],
  extra:{title:"Les connecteurs — Linking Words for the Essay", items:[
    "**d'abord** — first · **ensuite / puis** — then · **enfin** — finally",
    "**parce que** — because · **donc** — therefore · **mais** — but",
    "**par exemple** — for example · **c'est pourquoi** — that is why",
    "**d'un côté... de l'autre** — on one hand... on the other",
    "**en conclusion** — in conclusion"
  ]},
  activities:["Timed past-paper practice with peer marking","Tense-marker bingo","Translation workshop on common traps","Writing and correcting a guided composition"],
  materials:["Revision charts of all tenses","Sample examination papers","Textbook: Je me débrouille en français"],
  assessment:["Mock examination","Timed composition","Translation test","Final oral interview"]
}
];

/* merge the Senior High units into the shared French curriculum */
if (typeof FR_CURRICULUM !== "undefined") {
  FR_CURRICULUM.push.apply(FR_CURRICULUM, FR_CURRICULUM_1012);
}
