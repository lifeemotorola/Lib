/* WASSCE (WAEC) — CHRISTIAN RELIGIOUS STUDIES course data: the detailed
   syllabus — Section A: Themes from the Old Testament (13 themes),
   Section B: Themes from the Synoptic Gospels and the Acts of the
   Apostles (8 themes), Section C: Themes from selected Epistles
   (James and 1 Peter), with the suggested reading list. */
window.WA_crs = {
  id: "crs",
  name: "Christian Religious Studies",
  preamble: "The WASSCE Christian Religious Studies syllabus (detailed syllabus) is organized into three sections. Section A — Themes from the Old Testament: the Sovereignty of God (God the Creator; God the Controller of the universe); Leadership roles (Joseph, Moses, Joshua, Deborah); Parental Responsibility (Eli and Samuel); the Consequences of Saul's disobedience; Submission to the will of God (David's submission; David's sin, repentance and forgiveness); Making Decisions (Solomon's wisdom; the unwise decision of Solomon and Rehoboam); Supremacy of God (religious tensions during Ahab's reign; Elijah at Mount Carmel); Greed and its effects (Ahab; Gehazi); Religious reforms; the reign of King Josiah; Concern for one's Nation (the condition of the nation; response to the state of the nation); Faith in God (faith and courage; faith and power); and the Nature of God (true religion and social justice — Amos; God's divine love — Hosea). Section B — Themes from the Synoptic Gospels and the Acts of the Apostles: Baptism and Temptation of Jesus; the Call and Demands of Discipleship; Jesus' Teaching on forgiveness; the Trials of Jesus; the Crucifixion, Burial and Resurrection of Jesus; Fellowship in the Early Church; the Holy Spirit and the Mission to the Gentiles; and Opposition to the Gospel Message. Section C — Themes from selected Epistles: the Epistles of James (faith and works; impartiality; effective prayers) and the Epistle of 1 Peter (good citizenship; Christians living among non-Christians; interpersonal relationship among Christians).",
  aims: [
    "study the themes from the Old Testament, the Synoptic Gospels and the Acts of the Apostles, and the selected Epistles (James and 1 Peter);",
    "understand the nature of God and the relationship between God and humanity (the sovereignty, the supremacy, the love);",
    "apply the lessons of the biblical narratives (the leadership, the decision, the faith, the responsibility) to the life of the individual and the society;",
    "express the responses to the themes in the objective and the essay forms."
  ],
  papers: [
    { n: "Paper 1", d: "Fifty multiple-choice objective questions drawn from the syllabus. Candidates answer ALL within 1 hour 40 minutes for 50 marks." },
    { n: "Paper 2", d: "A 2-hour essay paper. Nine essay questions are set; candidates answer FOUR within 2 hours for 100 marks." }
  ],
  units: [
  /* =============== CRS1 · THE SOVEREIGNTY OF GOD =============== */
  {
    grade: 12, sem: "One", icon: "👑", period: "CRS1",
    title: "The Sovereignty of God",
    subtitle: "God the Creator (Gen. 1–2) · God the Controller of the universe",
    note: "Section A, Theme 1: the Sovereignty of God — God, the Creator; God, the Controller of the universe. Texts: Gen. 1; 2.",
    objectives: [
      "Explain the doctrine of the creation (Gen. 1–2) — the six days, the seventh day, the creation of man",
      "Explain God as the Controller of the universe (the sovereignty — the providence, the governance)",
      "Discuss the significance of the sovereignty of God to the life of the believer"
    ],
    terms: [
      { t: "The Sovereignty of God", d: "The doctrine that God is the supreme ruler — the Creator and the Controller of all things.", x: "God over all, through all, in all" },
      { t: "God the Creator", d: "God as the Creator of all things (Gen. 1–2) — 'In the beginning, God created the heavens and the earth.'", x: "The creation of the world" },
      { t: "The six days", d: "The six days of the creation (Gen. 1) — light, the firmament, the land and the plants, the sun/moon/stars, the sea creatures and the birds, the animals and man.", x: "The work of the creation" },
      { t: "The seventh day", d: "The seventh day — God rested (the Sabbath) and sanctified it (Gen. 2).", x: "The day of rest" },
      { t: "The creation of man", d: "The creation of man in the image of God (Gen. 1:26–27; 2:7) — the crown of the creation.", x: "The image of God" },
      { t: "God the Controller", d: "God as the Controller of the universe (the providence) — the governance of the natural order (the sun, the rain, the seasons).", x: "The governance of the universe" },
      { t: "The providence", d: "The continuous governance of God over the creation (the preservation, the direction).", x: "The care of God" },
      { t: "The sovereignty", d: "The supreme authority of God over all creation (the rule, the control).", x: "The rule of God" }
    ],
    tf: [
      { s: "According to Gen. 1, God created the heavens and the earth in the beginning.", a: "True", why: "The creation — 'In the beginning, God created the heavens and the earth.'" },
      { s: "God rested on the seventh day.", a: "True", why: "The seventh day — God rested (the Sabbath)." },
      { s: "Man was created in the image of God.", a: "True", why: "The creation of man (Gen. 1:26–27)." },
      { s: "The sovereignty of God means that God has no control over the universe.", a: "False", why: "The sovereignty — God is the Controller of the universe." }
    ],
    mcq: [
      { q: "The doctrine that God is the supreme ruler (the Creator and the Controller) is the:", o: ["the Sovereignty of God", "the atonement", "the incarnation", "the resurrection"], a: 0, why: "The Sovereignty of God." },
      { q: "The creation of the heavens and the earth is recorded in:", o: ["Gen. 1–2", "Exodus 1", "Joshua 1", "1 Kings 3"], a: 0, why: "The texts — Gen. 1; 2." },
      { q: "God rested on the:", o: ["the seventh day", "the first day", "the third day", "the sixth day"], a: 0, why: "The seventh day — the Sabbath." },
      { q: "Man was created in the:", o: ["the image of God", "the image of the angels", "the image of the animals", "the image of the earth"], a: 0, why: "The creation of man (Gen. 1:26–27)." },
      { q: "God as the Controller of the universe is an aspect of:", o: ["the sovereignty", "the creation only", "the fall", "the covenant only"], a: 0, why: "God, the Controller of the universe." }
    ],
    essay: [
      { q: "Explain the doctrine of the creation (Gen. 1–2). Discuss the significance of the creation of man in the image of God, and explain God as the Controller of the universe (the sovereignty).", marks: 25, outline: [
        "The doctrine of the creation (Gen. 1–2): (1) the opening — 'In the beginning, God created the heavens and the earth'; (2) the six days of the creation — Day 1 (the light), Day 2 (the firmament), Day 3 (the land and the plants), Day 4 (the sun, the moon, the stars), Day 5 (the sea creatures and the birds), Day 6 (the animals and man); (3) the seventh day — God rested (the Sabbath) and sanctified it; (4) the creation of man — in the image of God (the body from the dust, the breath of life)",
        "The significance of the creation of man in the image of God: (1) the dignity of man (the likeness to God); (2) the stewardship (the dominion over the creation); (3) the relationship (the fellowship with God); (4) the moral responsibility (the conscience, the moral law)",
        "God as the Controller of the universe (the sovereignty): (1) the providence (the continuous governance — the sun, the rain, the seasons); (2) the governance of the history (the direction of the events); (3) the significance — the assurance of the believer (the care of God), the worship (the praise of the Creator), and the responsibility (the stewardship)",
        "The application: the trust in the sovereignty (the faith), the care of the creation (the stewardship), and the worship (the praise)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Theme 1:" },
      { k: "bul", items: [
        "The Sovereignty of God: God, the Creator; God, the Controller of the universe",
        "Texts: Gen. 1; 2",
        "The doctrine of the creation (the six days, the seventh day, the creation of man in the image of God)",
        "The sovereignty (the providence, the governance of the universe)"
      ] }
    ]
  },
  /* =============== CRS2 · LEADERSHIP ROLES =============== */
  {
    grade: 12, sem: "One", icon: "🏛️", period: "CRS2",
    title: "Leadership Roles",
    subtitle: "Joseph (Gen. 37; 41; 45) · Moses (Exodus 1–7; 14; 32) · Joshua (Num. 13–14; 27; Josh. 1) · Deborah (Judges 4)",
    note: "Section A, Theme 2: Leadership roles — Joseph, Moses, Joshua, Deborah. Texts: Gen. 37: 1–28, 41: 1–57, 45: 1–15; Exodus 1–4: 1–17, 5: 1–5, 22–23, 6: 28–30, 7: 1–7, 14, 32: 1–14; Numbers 13: 1–33, 14: 1–19, 27: 15–23; Joshua 1: 1–9; Judges 4.",
    objectives: [
      "Study the leadership of Joseph (the sale, the dreams, the prison, the rise to power, the reconciliation with the brothers)",
      "Study the leadership of Moses (the call, the plagues, the Exodus, the leadership of the people, the golden calf)",
      "Study the leadership of Joshua (the spies, the faith of the people, the succession, the charge of God)",
      "Study the leadership of Deborah (the judge, the prophetess, the victory)",
      "Derive the lessons of the leadership from the four leaders"
    ],
    terms: [
      { t: "Joseph", d: "The son of Jacob — sold by the brothers, the servant in Egypt, the prisoner, the ruler of Egypt; the leader of the forgiveness (Gen. 37; 41; 45).", x: "The ruler of Egypt" },
      { t: "Moses", d: "The leader of the Exodus — the call, the plagues, the crossing of the Red Sea, the leadership of the people (Exodus).", x: "The deliverer of Israel" },
      { t: "Joshua", d: "The successor of Moses — the leader of the conquest (Numbers 13–14, 27; Joshua 1).", x: "The successor" },
      { t: "Deborah", d: "The judge and the prophetess of Israel — the leader of the victory over Sisera (Judges 4).", x: "The judge" },
      { t: "The call of Moses", d: "The call of Moses by God (the burning bush) — 'I will send thee unto Pharaoh' (Exodus 3–4).", x: "The burning bush" },
      { t: "The plagues", d: "The ten plagues of Egypt — the signs of the power of God against the oppression (Exodus 7–12).", x: "The ten plagues" },
      { t: "The Exodus", d: "The deliverance of the people of Israel from Egypt (the crossing of the Red Sea) — the great act of the salvation.", x: "The deliverance" },
      { t: "The golden calf", d: "The idol of the calf — the sin of the people at Mount Sinai; the consequence (the judgment) (Exodus 32).", x: "The idolatry" },
      { t: "The spies", d: "The twelve spies sent into Canaan — the report of the ten (the fear) and the faith of the two (Joshua and Caleb) (Numbers 13–14).", x: "The report of the spies" },
      { t: "The succession", d: "The appointment of Joshua as the successor of Moses (Numbers 27: 15–23).", x: "The appointment" },
      { t: "The charge of God", d: "The charge of God to Joshua — 'Be strong and of a good courage' (Joshua 1: 1–9).", x: "The courage" }
    ],
    tf: [
      { s: "Joseph was sold into Egypt by his brothers.", a: "True", why: "The story of Joseph (Gen. 37)." },
      { s: "Moses led the people of Israel out of Egypt (the Exodus).", a: "True", why: "The leadership of Moses — the deliverance." },
      { s: "Joshua was appointed as the successor of Moses.", a: "True", why: "The succession (Numbers 27: 15–23)." },
      { s: "Deborah was a warrior only, and not a prophetess.", a: "False", why: "Deborah was a judge and a prophetess (Judges 4)." }
    ],
    mcq: [
      { q: "The leader of the Exodus (the deliverance of Israel from Egypt) is:", o: ["Moses", "Joseph", "Joshua", "Deborah"], a: 0, why: "The leadership of Moses." },
      { q: "The son of Jacob who became the ruler of Egypt is:", o: ["Joseph", "Moses", "Joshua", "Samuel"], a: 0, why: "The story of Joseph (Gen. 37; 41)." },
      { q: "The successor of Moses is:", o: ["Joshua", "Caleb", "Aaron", "Eli"], a: 0, why: "The succession (Numbers 27)." },
      { q: "The judge and the prophetess of Israel (Judges 4) is:", o: ["Deborah", "Ruth", "Esther", "Hannah"], a: 0, why: "The leadership of Deborah." },
      { q: "The two spies who had the faith (Numbers 13–14) were:", o: ["Joshua and Caleb", "Moses and Aaron", "Joseph and Benjamin", "Eli and Samuel"], a: 0, why: "The faith of Joshua and Caleb." },
      { q: "The charge of God to Joshua (Joshua 1) is:", o: ["'Be strong and of a good courage'", "'I am the God of thy father'", "'Thou shalt not steal'", "'Love thy neighbour'"], a: 0, why: "Joshua 1: 1–9." }
    ],
    essay: [
      { q: "Study the leadership of Joseph and Moses, with reference to the texts. Derive four lessons of the leadership from each.", marks: 25, outline: [
        "The leadership of Joseph (Gen. 37: 1–28, 41: 1–57, 45: 1–15): (1) the sale by the brothers (the betrayal, the suffering); (2) the dreams (the destiny, the patience); (3) the service in the house of Potiphar (the integrity); (4) the prison (the faithfulness in the low place); (5) the rise to the power (the interpretation of the dreams of Pharaoh, the stewardship of the grain); (6) the reconciliation with the brothers (the forgiveness — 'ye meant evil against me; but God meant it for good')",
        "The leadership of Moses (Exodus 1–4: 1–17, 5: 1–5, 22–23, 6: 28–30, 7: 1–7, 14, 32: 1–14): (1) the call by God (the burning bush — 'I will send thee unto Pharaoh'); (2) the confrontation with Pharaoh (the plagues — the power of God); (3) the Exodus (the crossing of the Red Sea — the deliverance); (4) the leadership of the people (the guidance, the intercession); (5) the golden calf (the sin of the people, the intercession of Moses — the judgment, the forgiveness)",
        "Lessons of the leadership of Joseph: (1) the integrity (the service in the house of Potiphar); (2) the faithfulness in the low place (the prison); (3) the forgiveness (the reconciliation with the brothers); (4) the trust in the providence ('God meant it for good')",
        "Lessons of the leadership of Moses: (1) the obedience to the call (the humility — 'who am I?'); (2) the intercession (the pleading for the people); (3) the dependence on God (the power of God, not the strength of man); (4) the courage (the confrontation with Pharaoh)",
        "The application: the integrity, the faithfulness, the forgiveness, the obedience, the intercession, and the trust in the providence"
      ] },
      { q: "Study the leadership of Joshua and Deborah, with reference to the texts. Derive four lessons of the leadership from each.", marks: 25, outline: [
        "The leadership of Joshua (Numbers 13: 1–33, 14: 1–19, 27: 15–23; Joshua 1: 1–9): (1) the faith of the spies (Joshua and Caleb — the trust in the promise); (2) the consequence of the unbelief (the wandering in the wilderness — the judgment on the people); (3) the succession (the appointment by God, the laying on of the hands by Moses); (4) the charge of God ('Be strong and of a good courage' — the commandment of the law)",
        "The leadership of Deborah (Judges 4): (1) the judge and the prophetess (the guidance of the people); (2) the call of the leader (Barak — the reluctance, the obedience); (3) the victory (the defeat of Sisera — the power of God); (4) the role of the woman (Jael — the courage, the faith)",
        "Lessons of the leadership of Joshua: (1) the faith (the trust in the promise, against the majority); (2) the obedience (the appointment, the charge); (3) the courage ('be strong and of a good courage'); (4) the dependence on the Word (the Book of the Law — 'meditate day and night')",
        "Lessons of the leadership of Deborah: (1) the guidance (the prophetess — the word of God); (2) the courage (the leadership in the time of the crisis); (3) the cooperation (the call of Barak, the work of the people); (4) the dependence on God (the victory — the power of God, not the army)",
        "The application: the faith, the obedience, the courage, the guidance, the cooperation, and the dependence on God"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Theme 2:" },
      { k: "bul", items: [
        "Leadership roles: Joseph (Gen. 37: 1–28, 41: 1–57, 45: 1–15); Moses (Exodus 1; 2; 3; 4: 1–17, 5: 1–5, 22–23, 6: 28–30, 7: 1–7, 14, 32: 1–14); Joshua (Numbers 13: 1–33, 14: 1–19, 27: 15–23; Joshua 1: 1–9); Deborah (Judges 4)",
        "Joseph: the sale by the brothers, the dreams, the service, the prison, the rise to the power, the reconciliation (the forgiveness)",
        "Moses: the call (the burning bush), the plagues, the Exodus (the crossing of the Red Sea), the leadership of the people, the golden calf (the sin, the intercession)",
        "Joshua: the spies (the faith of Joshua and Caleb), the succession (Numbers 27), the charge of God (Joshua 1: 1–9)",
        "Deborah: the judge and the prophetess, the call of Barak, the victory over Sisera (Judges 4)"
      ] }
    ]
  },
  /* =============== CRS3 · PARENTAL RESPONSIBILITY & SAUL =============== */
  {
    grade: 12, sem: "One", icon: "👪", period: "CRS3",
    title: "Parental Responsibility & the Consequences of Saul's Disobedience",
    subtitle: "Eli and Samuel (1 Sam. 2–4; 8) · the Consequences of Saul's disobedience (1 Sam. 15; 16; 31)",
    note: "Section A, Themes 3–4: Parental Responsibility (Eli and Samuel) and the Consequences of Saul's disobedience. Texts: 1 Samuel 2: 11–36, 3: 1–18, 4: 10–22, 8: 1–5; 1 Samuel 15: 1–26, 16: 14–23, 31: 1–13.",
    objectives: [
      "Study the story of Eli and Samuel (the call of Samuel, the sin of the sons of Eli, the judgment, the succession)",
      "Explain the parental responsibility (the duty of the parent in the training of the child)",
      "Study the disobedience of Saul (the sparing of Agag and the best of the spoil) and its consequences (the rejection, the succession of David, the end of Saul)",
      "Derive the lessons of the parental responsibility and the obedience"
    ],
    terms: [
      { t: "Eli", d: "The high priest of Israel — the father of Hophni and Phinehas; the judge (1 Samuel 1–4).", x: "The high priest" },
      { t: "Samuel", d: "The son of Hannah — the prophet and the judge; the successor of Eli (1 Samuel 1–3).", x: "The prophet" },
      { t: "The call of Samuel", d: "The call of Samuel by God in the temple — 'Speak, for thy servant heareth' (1 Samuel 3: 1–18).", x: "The call in the temple" },
      { t: "The sin of the sons of Eli", d: "The sin of Hophni and Phinehas (the abuse of the office, the contempt of the gift) — the judgment (1 Samuel 2: 11–36).", x: "The abuse of the office" },
      { t: "The judgment on the house of Eli", d: "The judgment on the house of Eli (the death of the sons, the loss of the priestly office) (1 Samuel 2: 27–36; 4).", x: "The judgment" },
      { t: "The parental responsibility", d: "The duty of the parent in the training of the child (the discipline, the guidance) — the lesson of Eli.", x: "The training of the child" },
      { t: "Saul", d: "The first king of Israel — the anointing, the reign, the disobedience, the rejection (1 Samuel 9–31).", x: "The first king" },
      { t: "The disobedience of Saul", d: "The disobedience of Saul (the sparing of Agag and the best of the spoil, contrary to the command of God) (1 Samuel 15).", x: "The sparing of the spoil" },
      { t: "The rejection of Saul", d: "The rejection of Saul by God (the withdrawal of the Spirit, the succession of David) (1 Samuel 15: 23–26; 16: 14).", x: "The rejection" },
      { t: "The succession of David", d: "The anointing of David as the successor of Saul (1 Samuel 16: 1–13).", x: "The anointing of David" },
      { t: "The end of Saul", d: "The end of Saul (the battle of Mount Gilboa, the suicide) (1 Samuel 31).", x: "The end of the king" }
    ],
    tf: [
      { s: "Samuel was the son of Hannah.", a: "True", why: "The story of Samuel (1 Samuel 1–2)." },
      { s: "Eli's sons (Hophni and Phinehas) abused the office of the priesthood.", a: "True", why: "The sin of the sons of Eli (1 Samuel 2: 11–17)." },
      { s: "Saul obeyed the command of God completely (he destroyed all the spoil).", a: "False", why: "The disobedience of Saul — he spared Agag and the best of the spoil (1 Samuel 15)." },
      { s: "David was anointed as the successor of Saul.", a: "True", why: "The succession of David (1 Samuel 16: 1–13)." }
    ],
    mcq: [
      { q: "The father of Hophni and Phinehas (the high priest) is:", o: ["Eli", "Saul", "David", "Samuel"], a: 0, why: "The story of Eli (1 Samuel 1–4)." },
      { q: "The prophet who succeeded Eli is:", o: ["Samuel", "Eli", "Saul", "Nathan"], a: 0, why: "The succession — Samuel (1 Samuel 3–8)." },
      { q: "The first king of Israel is:", o: ["Saul", "David", "Solomon", "Josiah"], a: 0, why: "Saul — the first king (1 Samuel 9–31)." },
      { q: "The disobedience of Saul (1 Samuel 15) was the:", o: ["the sparing of Agag and the best of the spoil", "the killing of the priest", "the building of the temple", "the marriage to Michal"], a: 0, why: "The sparing of Agag and the best of the spoil." },
      { q: "The consequence of the disobedience of Saul was the:", o: ["the rejection by God and the succession of David", "the increase of the kingdom", "the blessing of the people", "the peace with the Amalekites"], a: 0, why: "The rejection of Saul (1 Samuel 15: 23–26; 16: 14)." },
      { q: "Saul met his end in the battle of:", o: ["Mount Gilboa", "Jericho", "Ai", "Hormah"], a: 0, why: "The end of Saul (1 Samuel 31)." }
    ],
    essay: [
      { q: "Study the story of Eli and Samuel, with reference to the texts. Explain the parental responsibility, and derive four lessons from the story.", marks: 25, outline: [
        "The story of Eli (1 Samuel 2: 11–36, 4: 10–22): (1) the sin of the sons (Hophni and Phinehas — the abuse of the office, the contempt of the gift of the sacrifice); (2) the warning of Eli (the rebuke of the sons — 1 Samuel 2: 24–25); (3) the word of the prophet (the judgment on the house of Eli — 1 Samuel 2: 27–36); (4) the consequence (the death of the sons in the battle, the loss of the ark — 1 Samuel 4)",
        "The story of Samuel (1 Samuel 2: 11–36, 3: 1–18, 8: 1–5): (1) the prayer of Hannah (the dedication of Samuel — 1 Samuel 1); (2) the call of Samuel (the voice in the temple — 'Speak, for thy servant heareth'); (3) the growth of Samuel (the prophet, the judge); (4) the request of the people for a king (1 Samuel 8: 1–5) — the end of the period of the judges",
        "The parental responsibility: (1) the duty of the parent in the training of the child (the discipline, the guidance, the example); (2) the failure of Eli (the neglect of the discipline — 'thy sons know me not'); (3) the consequence of the neglect (the judgment on the house, the loss of the office)",
        "Lessons: (1) the importance of the parental responsibility (the training of the child); (2) the consequence of the neglect (the judgment, the loss); (3) the faithfulness of God (the preservation of Samuel — the promise to Hannah); (4) the response to the call (the obedience of Samuel — 'thy servant heareth')",
        "The application: the responsibility of the parent, the discipline, the guidance, and the training of the child in the fear of God"
      ] },
      { q: "Study the disobedience of Saul and its consequences, with reference to the texts. Derive four lessons from the story.", marks: 25, outline: [
        "The disobedience of Saul (1 Samuel 15: 1–26): (1) the command of God (through Samuel) — the destruction of the Amalekites (the total destruction — 'thou shalt utterly destroy them'); (2) the obedience of Saul (the battle) and the disobedience (the sparing of Agag and the best of the cattle, the sheep, the oxen — for the sacrifice); (3) the word of Samuel (the confrontation — 'hath the Lord as delight in burnt offerings and sacrifices, as in obeying the voice of the Lord?'); (4) the confession of Saul (the excuse — 'the people took of the spoil... to sacrifice unto the Lord')",
        "The consequences (1 Samuel 15: 23–26, 16: 1–13, 14–23, 31: 1–13): (1) the rejection by God (the withdrawal of the kingdom — 'the Lord hath rejected thee from being king'); (2) the withdrawal of the Spirit (the torment of the evil spirit — 1 Samuel 16: 14); (3) the succession of David (the anointing by Samuel — 1 Samuel 16: 1–13); (4) the end of Saul (the battle of Mount Gilboa, the suicide — 1 Samuel 31)",
        "Lessons: (1) the complete obedience (the partial obedience is the disobedience — 'to obey is better than sacrifice'); (2) the consequence of the disobedience (the rejection, the loss of the position); (3) the sovereignty of God (the succession — the choice of God, not the merit of man); (4) the danger of the excuse (the shifting of the blame — the 'the people took')",
        "The application: the complete obedience, the acceptance of the responsibility, the trust in the sovereignty of God, and the avoidance of the excuse"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Themes 3–4:" },
      { k: "bul", items: [
        "3. Parental Responsibility: Eli and Samuel (1 Sam 2: 11–36; 3: 1–18; 4: 10–22; 8: 1–5)",
        "4. Consequences of Saul's disobedience (1 Samuel 15: 1–26; 16: 14–23; 31: 1–13)",
        "Eli: the high priest, the sin of the sons (the abuse of the office), the judgment on the house of Eli, the death of the sons, the loss of the ark",
        "Samuel: the son of Hannah, the call in the temple ('thy servant heareth'), the prophet and the judge, the request of the people for a king (1 Samuel 8)",
        "Saul: the first king, the command of God (the destruction of the Amalekites), the sparing of Agag and the best of the spoil, the rejection, the withdrawal of the Spirit, the succession of David, the end (Mount Gilboa)"
      ] }
    ]
  },
  /* =============== CRS4 · SUBMISSION TO THE WILL OF GOD =============== */
  {
    grade: 12, sem: "One", icon: "🙏", period: "CRS4",
    title: "Submission to the Will of God",
    subtitle: "David's submission (1 Sam. 26) · David's sin, repentance and forgiveness (2 Sam. 12: 15–25)",
    note: "Section A, Theme 5: Submission to the will of God — David's submission to the will of God; David's sin, repentance and forgiveness. Texts: 1 Samuel 26; 2 Samuel 12: 15–25.",
    objectives: [
      "Study the submission of David to the will of God (the two occasions of the sparing of Saul)",
      "Study the sin of David (the adultery with Bathsheba, the murder of Uriah) and his repentance",
      "Explain the forgiveness of God (the prophecy of Nathan, the death of the child, the restoration)",
      "Derive the lessons of the submission, the repentance, and the forgiveness"
    ],
    terms: [
      { t: "David", d: "The shepherd, the musician, the warrior, the king of Israel — the man after the heart of God (1 Samuel 16–2 Samuel).", x: "The man after the heart of God" },
      { t: "The sparing of Saul", d: "The two occasions of the sparing of Saul by David (the cave of En-gedi, the camp of Saul) — the submission to the will of God (1 Samuel 24; 26).", x: "The submission" },
      { t: "The submission", d: "The submission of David to the will of God (the restraint — 'the Lord forbid me that I should stretch out mine hand against the Lord's anointed').", x: "The restraint" },
      { t: "The sin of David", d: "The sin of David (the adultery with Bathsheba, the murder of Uriah the Hittite) (2 Samuel 11).", x: "The sin" },
      { t: "The prophecy of Nathan", d: "The prophecy of Nathan (the parable of the ewe lamb) — the confrontation of David ('thou art the man') (2 Samuel 12: 1–7).", x: "The parable of the ewe lamb" },
      { t: "The repentance", d: "The repentance of David (the confession — 'I have sinned against the Lord') (2 Samuel 12: 13; Psalm 51).", x: "The confession" },
      { t: "The forgiveness", d: "The forgiveness of God (the pardon — 'the Lord also hath forgiven thy sin') (2 Samuel 12: 13).", x: "The pardon" },
      { t: "The consequence", d: "The consequence of the sin (the death of the child) — the submission of David to the will of God (2 Samuel 12: 15–23).", x: "The death of the child" },
      { t: "The restoration", d: "The restoration of David (the birth of Solomon — 2 Samuel 12: 24; the covenant — 2 Samuel 7).", x: "The restoration" }
    ],
    tf: [
      { s: "David spared the life of Saul in the cave of En-gedi.", a: "True", why: "The sparing of Saul (1 Samuel 24)." },
      { s: "David committed the sin of the adultery with Bathsheba and the murder of Uriah.", a: "True", why: "The sin of David (2 Samuel 11)." },
      { s: "The prophet Nathan confronted David with the parable of the ewe lamb.", a: "True", why: "The prophecy of Nathan (2 Samuel 12: 1–7)." },
      { s: "David's sin was not forgiven.", a: "False", why: "The forgiveness of God — 'the Lord also hath forgiven thy sin' (2 Samuel 12: 13)." }
    ],
    mcq: [
      { q: "The prophet who confronted David with the parable of the ewe lamb is:", o: ["Nathan", "Eli", "Samuel", "Elijah"], a: 0, why: "The prophecy of Nathan (2 Samuel 12: 1–7)." },
      { q: "The confession of David is:", o: ["'I have sinned against the Lord'", "'I am the Lord thy God'", "'Thou shalt not kill'", "'The Lord is my shepherd'"], a: 0, why: "The repentance of David (2 Samuel 12: 13)." },
      { q: "The consequence of the sin of David was the:", o: ["the death of the child", "the loss of the kingdom", "the exile", "the madness"], a: 0, why: "The consequence (2 Samuel 12: 15–23)." },
      { q: "The son of David and Bathsheba (born after the death of the first child) is:", o: ["Solomon", "Absalom", "Adonijah", "David Jr."], a: 0, why: "The restoration (2 Samuel 12: 24)." },
      { q: "The submission of David to the will of God is shown in the:", o: ["the sparing of Saul", "the taking of the kingdom", "the killing of Saul", "the flight from Absalom"], a: 0, why: "The sparing of Saul (1 Samuel 24; 26)." }
    ],
    essay: [
      { q: "Study the submission of David to the will of God (the sparing of Saul) and his sin, repentance and forgiveness, with reference to the texts. Derive four lessons from each.", marks: 25, outline: [
        "The submission of David to the will of God (1 Samuel 26): (1) the opportunity (the camp of Saul — the spear and the cruse); (2) the restraint (the refusal of Abishai — 'the Lord forbid me that I should stretch out mine hand against the Lord's anointed'); (3) the confrontation (the speech of David to Saul); (4) the result (the release of Saul, the respect of the people)",
        "The sin, repentance and forgiveness of David (2 Samuel 11–12): (1) the sin (the adultery with Bathsheba, the murder of Uriah — the deceit, the pride); (2) the confrontation (the parable of the ewe lamb — 'thou art the man'); (3) the repentance (the confession — 'I have sinned against the Lord'); (4) the forgiveness (the pardon — 'the Lord also hath forgiven thy sin'); (5) the consequence (the death of the child — the submission of David — 'now therefore I will fast and weep'); (6) the restoration (the birth of Solomon)",
        "Lessons of the submission: (1) the restraint (the submission to the will of God, against the temptation); (2) the respect for the anointed (the fear of God); (3) the trust in the providence ('the Lord will reward every man according to his righteousness'); (4) the integrity (the clean hands — the testimony)",
        "Lessons of the sin, repentance and forgiveness: (1) the consequence of the sin (the death of the child, the disruption of the family); (2) the repentance (the confession — the first step to the forgiveness); (3) the forgiveness of God (the mercy — the pardon of the repentant sinner); (4) the submission to the consequence (the acceptance of the judgment — the fasting, the weeping)",
        "The application: the restraint, the trust, the repentance, the forgiveness, and the submission to the will of God"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Theme 5:" },
      { k: "bul", items: [
        "5. Submission to the will of God: David's submission to the will of God (1 Sam 26); David's sin, repentance and forgiveness (2 Sam 12: 15–25)",
        "David: the man after the heart of God (1 Samuel 16)",
        "The sparing of Saul: the cave of En-gedi (1 Samuel 24), the camp of Saul (1 Samuel 26) — the submission, the restraint",
        "The sin: the adultery with Bathsheba, the murder of Uriah (2 Samuel 11)",
        "The repentance: the parable of Nathan (2 Samuel 12: 1–7), the confession ('I have sinned against the Lord' — 2 Samuel 12: 13)",
        "The forgiveness: the pardon ('the Lord also hath forgiven thy sin'), the consequence (the death of the child), the restoration (the birth of Solomon)"
      ] }
    ]
  },
  /* =============== CRS5 · MAKING DECISIONS =============== */
  {
    grade: 12, sem: "One", icon: "⚖️", period: "CRS5",
    title: "Making Decisions",
    subtitle: "Solomon's wisdom (1 Kings 3; 4; 5; 8) · the unwise decision of Solomon and Rehoboam (1 Kings 9; 11; 12)",
    note: "Section A, Theme 6: Making Decisions — Solomon's wisdom; the unwise decision of Solomon and Rehoboam. Texts: 1 Kings 3: 3–28, 4: 29–34, 5: 1–12, 8; 1 Kings 9: 15–23, 11: 1–13, 12: 1–20.",
    objectives: [
      "Study the decision of Solomon (the request for the wisdom — the dream at Gibeon)",
      "Study the wisdom of Solomon (the judgment of the two mothers, the fame, the temple)",
      "Study the unwise decisions of Solomon (the foreign wives, the idolatry, the oppression) and their consequences",
      "Study the unwise decision of Rehoboam (the harsh answer to the people) and the consequence (the division of the kingdom)",
      "Derive the lessons of the decision-making"
    ],
    terms: [
      { t: "Solomon", d: "The son of David — the builder of the temple, the wise king of Israel (1 Kings 1–11).", x: "The wise king" },
      { t: "The request for wisdom", d: "The decision of Solomon (the dream at Gibeon) — the request for the wisdom ('give thy servant therefore an understanding heart') (1 Kings 3: 5–9).", x: "The request" },
      { t: "The wisdom of Solomon", d: "The wisdom given to Solomon (the judgment of the two mothers, the fame, the prosperity) (1 Kings 3: 16–28, 4: 29–34).", x: "The judgment of the two mothers" },
      { t: "The temple", d: "The temple of Solomon (the building, the dedication) (1 Kings 5; 6–8).", x: "The house of the Lord" },
      { t: "The unwise decision of Solomon", d: "The unwise decision of Solomon (the foreign wives, the idolatry, the oppression) (1 Kings 9: 15–23, 11: 1–13).", x: "The idolatry" },
      { t: "The consequence on Solomon", d: "The consequence (the prophecy of the division of the kingdom, the loss of the kingdom) (1 Kings 11: 11–13).", x: "The prophecy of the division" },
      { t: "Rehoboam", d: "The son of Solomon — the king of the divided kingdom (1 Kings 12).", x: "The successor of Solomon" },
      { t: "The unwise decision of Rehoboam", d: "The unwise decision of Rehoboam (the harsh answer to the people — 'my father laid a heavy yoke upon you; but I will make it yet heavier') (1 Kings 12: 1–15).", x: "The harsh answer" },
      { t: "The division of the kingdom", d: "The consequence (the rebellion of Jeroboam, the division of the kingdom — the ten tribes to Jeroboam, the two tribes to Rehoboam) (1 Kings 12: 16–24).", x: "The divided kingdom" }
    ],
    tf: [
      { s: "Solomon requested the wisdom of God in the dream at Gibeon.", a: "True", why: "The request for wisdom (1 Kings 3: 5–9)." },
      { s: "The judgment of the two mothers is an example of the wisdom of Solomon.", a: "True", why: "The wisdom of Solomon (1 Kings 3: 16–28)." },
      { s: "Solomon remained faithful to God to the end of his life.", a: "False", why: "The unwise decision of Solomon — the foreign wives, the idolatry (1 Kings 11: 1–8)." },
      { s: "The unwise decision of Rehoboam led to the division of the kingdom.", a: "True", why: "The consequence (1 Kings 12: 16–24)." }
    ],
    mcq: [
      { q: "Solomon requested the ____ in the dream at Gibeon.", o: ["wisdom", "wealth", "long life", "a great army"], a: 0, why: "The request for wisdom (1 Kings 3: 5–9)." },
      { q: "The judgment of the two mothers (the claim of the living child) is an example of the:", o: ["the wisdom of Solomon", "the power of Solomon", "the wealth of Solomon", "the pride of Solomon"], a: 0, why: "The wisdom of Solomon (1 Kings 3: 16–28)." },
      { q: "The unwise decision of Solomon was the:", o: ["the taking of the foreign wives and the idolatry", "the building of the temple", "the request for wisdom", "the judgment of the two mothers"], a: 0, why: "The unwise decision (1 Kings 9: 15–23, 11: 1–8)." },
      { q: "The unwise decision of Rehoboam was the:", o: ["the harsh answer to the people", "the building of the wall", "the marriage to the foreign woman", "the offering of the sacrifice"], a: 0, why: "The harsh answer (1 Kings 12: 1–15)." },
      { q: "The consequence of the unwise decision of Rehoboam was the:", o: ["the division of the kingdom", "the blessing of the people", "the increase of the tribute", "the peace with the neighbours"], a: 0, why: "The division of the kingdom (1 Kings 12: 16–24)." }
    ],
    essay: [
      { q: "Study the decision of Solomon (the request for the wisdom) and his unwise decisions, with reference to the texts. Derive four lessons of the decision-making from the story of Solomon.", marks: 25, outline: [
        "The decision of Solomon (1 Kings 3: 3–28, 4: 29–34): (1) the dream at Gibeon (the offer of God — 'ask what I shall give thee'); (2) the request (the wisdom — 'give thy servant therefore an understanding heart to judge thy people'); (3) the gift (the wisdom, and the wealth and the honour as the addition); (4) the demonstration (the judgment of the two mothers — the test of the sword); (5) the fame (the wisdom of Solomon — the reputation of the kingdom)",
        "The unwise decisions of Solomon (1 Kings 9: 15–23, 11: 1–13): (1) the foreign wives (the seven hundred wives and the three hundred concubines — the kings of the nations); (2) the idolatry (the turning to the gods of the wives — Ashtoreth, Chemosh, Molech); (3) the oppression (the forced labour — the building of the house, the temple, the wall); (4) the consequence (the anger of God, the prophecy of the division of the kingdom — 'for thy sake I will not tear away all the kingdom')",
        "Lessons of the decision-making: (1) the right request (the wisdom before the wealth — the priority); (2) the consequence of the compromise (the idolatry — the turning from God); (3) the danger of the accumulation (the wives, the wealth — the distraction); (4) the responsibility of the leader (the oppression — the burden on the people)",
        "The application: the right priority (the wisdom), the avoidance of the compromise (the idolatry), the moderation (the accumulation), and the responsibility (the burden)"
      ] },
      { q: "Study the unwise decision of Rehoboam and its consequence (the division of the kingdom), with reference to the texts. Derive four lessons of the decision-making from the story.", marks: 25, outline: [
        "The unwise decision of Rehoboam (1 Kings 12: 1–20): (1) the complaint of the people (the burden of the father — 'my father made your burden heavy; but you shall make it lighter'); (2) the advice of the old men (the service of the people — 'if thou wilt hear the people this day, and beseech them, they will serve thee'); (3) the advice of the young men (the harsh answer — 'they speak unto thee, saying, My father made your yoke heavy; but thou shalt say unto them, My little finger is thicker than my father's loins'); (4) the decision (the rejection of the advice of the old men, the acceptance of the advice of the young men — 'I will make it yet heavier')",
        "The consequence (1 Kings 12: 16–24): (1) the rebellion of Jeroboam (the return from Egypt, the assembly of the people); (2) the division of the kingdom (the ten tribes to Jeroboam, the two tribes to Rehoboam — Judah and Benjamin); (3) the prophecy (the fulfilment of the word of the Lord — 'this thing is from the Lord')",
        "Lessons of the decision-making: (1) the counsel (the seeking of the advice — the old men and the young men); (2) the right counsel (the wisdom of the experience, against the pride of the youth); (3) the service (the leadership as the service — the lightening of the burden); (4) the consequence of the pride (the harsh answer — the division, the loss)",
        "The application: the seeking of the counsel, the acceptance of the right advice, the service of the people, and the avoidance of the pride"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Theme 6:" },
      { k: "bul", items: [
        "6. Making Decisions: Solomon's wisdom (1 Kings 3: 3–28; 4: 29–34; 5: 1–12; 8); The unwise decision of Solomon and Rehoboam (1 Kings 9: 15–23; 11: 1–13; 12: 1–20)",
        "Solomon: the dream at Gibeon, the request for the wisdom, the judgment of the two mothers, the fame, the temple (1 Kings 3–8)",
        "The unwise decision of Solomon: the foreign wives, the idolatry (Ashtoreth, Chemosh, Molech), the oppression (1 Kings 9: 15–23, 11: 1–13), the prophecy of the division (1 Kings 11: 11–13)",
        "Rehoboam: the complaint of the people, the advice of the old men and the young men, the harsh answer (1 Kings 12: 1–15), the rebellion of Jeroboam, the division of the kingdom (1 Kings 12: 16–24)"
      ] }
    ]
  },
  /* =============== CRS6 · SUPREMACY OF GOD =============== */
  {
    grade: 12, sem: "One", icon: "🔥", period: "CRS6",
    title: "Supremacy of God",
    subtitle: "Religious tensions during Ahab's reign (1 Kings 16; 17) · Elijah at Mount Carmel (1 Kings 18: 17–46)",
    note: "Section A, Theme 7: Supremacy of God — religious tensions during Ahab's reign; Elijah at Mount Carmel. Texts: 1 Kings 16: 29–34, 17: 1–7, 18: 1–19; 1 Kings 18: 17–46.",
    objectives: [
      "Study the religious tensions during the reign of Ahab (the introduction of the Baal, the persecution of the prophets of the Lord)",
      "Study the ministry of Elijah (the drought, the widow of Zarephath, the confrontation with Ahab)",
      "Study the contest at Mount Carmel (the challenge to the prophets of Baal, the fire of the Lord, the judgment)",
      "Explain the supremacy of God (the power over the nature, over the idols, over the kings)",
      "Derive the lessons of the supremacy of God"
    ],
    terms: [
      { t: "Ahab", d: "The king of Israel — the promoter of the Baal, the persecutor of the prophets of the Lord (1 Kings 16: 23–17: 1).", x: "The king of Israel" },
      { t: "Jezebel", d: "The wife of Ahab — the promoter of the Baal, the persecutor of the prophets (1 Kings 16: 31).", x: "The queen" },
      { t: "The Baal", d: "The god of the Sidonians (the storm god) — the idol of the kingdom (the religious tension).", x: "The idol" },
      { t: "Elijah", d: "The prophet of the Lord — the Tishbite, the confrontator of Ahab and the Baal (1 Kings 17–19).", x: "The prophet" },
      { t: "The drought", d: "The drought sent by God (the judgment on the idolatry) — 'I will send drought upon the land' (1 Kings 17: 1).", x: "The three and a half years" },
      { t: "The widow of Zarephath", d: "The widow of Zarephath — the provision of God (the oil and the flour) (1 Kings 17: 8–16).", x: "The provision" },
      { t: "Mount Carmel", d: "The mountain of the contest (the confrontation with the prophets of Baal) (1 Kings 18: 18–40).", x: "The contest" },
      { t: "The contest", d: "The contest at Mount Carmel (the challenge — the sacrifice, the fire; the result — the fire of the Lord) (1 Kings 18: 20–40).", x: "The challenge" },
      { t: "The supremacy of God", d: "The supremacy of God (the power over the nature — the rain, the fire; over the idols — the silence of the Baal; over the kings — the fear of Ahab).", x: "The power of the Lord" },
      { t: "The rain", d: "The rain after the drought (the prayer of Elijah — the end of the judgment) (1 Kings 18: 41–46).", x: "The end of the drought" }
    ],
    tf: [
      { s: "Ahab and Jezebel promoted the worship of the Baal in Israel.", a: "True", why: "The religious tensions during Ahab's reign (1 Kings 16: 31–33)." },
      { s: "Elijah prophesied the drought upon the land.", a: "True", why: "The drought (1 Kings 17: 1)." },
      { s: "The prophets of Baal produced the fire at Mount Carmel.", a: "False", why: "The contest — the prophets of Baal failed (the silence), the fire came from the Lord (1 Kings 18: 29–39)." },
      { s: "The rain came after the prayer of Elijah.", a: "True", why: "The rain (1 Kings 18: 41–46)." }
    ],
    mcq: [
      { q: "The king of Israel who promoted the worship of the Baal is:", o: ["Ahab", "Josiah", "David", "Hezekiah"], a: 0, why: "The religious tensions during Ahab's reign (1 Kings 16)." },
      { q: "The prophet who confronted Ahab and the Baal is:", o: ["Elijah", "Elisha", "Isaiah", "Jeremiah"], a: 0, why: "The ministry of Elijah (1 Kings 17–19)." },
      { q: "The contest with the prophets of Baal took place at:", o: ["Mount Carmel", "Mount Sinai", "Mount Gilboa", "Mount Zion"], a: 0, why: "The contest at Mount Carmel (1 Kings 18: 18–40)." },
      { q: "The fire that consumed the sacrifice at Mount Carmel came from:", o: ["the Lord", "the Baal", "the lightning only", "the men of Ahab"], a: 0, why: "The fire of the Lord (1 Kings 18: 38–39)." },
      { q: "The widow of Zarephath received the provision of God (the oil and the flour) from:", o: ["the Lord (through Elijah)", "the king", "the merchants", "her sons"], a: 0, why: "The provision of God (1 Kings 17: 8–16)." }
    ],
    essay: [
      { q: "Study the religious tensions during the reign of Ahab and the contest at Mount Carmel, with reference to the texts. Explain the supremacy of God, and derive four lessons from the story.", marks: 25, outline: [
        "The religious tensions during Ahab's reign (1 Kings 16: 29–34, 17: 1–7, 18: 1–19): (1) the introduction of the Baal (the altar of Jezebel, the four hundred and fifty prophets of Baal, the seven hundred prophets of the Asherah); (2) the persecution of the prophets of the Lord (the seeking of the life of Elijah); (3) the drought (the judgment on the idolatry — the three and a half years); (4) the provision (the ravens, the widow of Zarephath); (5) the confrontation (the return of Elijah to Ahab — 'I have not made trouble for Israel; but thou hast')",
        "The contest at Mount Carmel (1 Kings 18: 17–46): (1) the gathering (the people, the prophets of Baal — the four hundred and fifty); (2) the challenge (the two bulls, the altar, the sacrifice — 'let us call upon the name of the Lord'); (3) the failure of the prophets of Baal (the cry, the dancing, the cutting of the flesh — the silence); (4) the repair of the altar (the twelve stones, the trench, the four measures of water); (5) the fire of the Lord (the consumption of the sacrifice, the wood, the stones, the dust, the water); (6) the judgment (the slaying of the prophets of Baal); (7) the rain (the prayer of Elijah — the end of the drought)",
        "The supremacy of God: (1) the power over the nature (the drought, the rain, the fire); (2) the power over the idols (the silence of the Baal, the fire of the Lord); (3) the power over the kings (the fear of Ahab, the return of the people to the Lord)",
        "Lessons: (1) the supremacy of God (the one true God, against the idols); (2) the courage of the prophet (the confrontation of the king, the faith in the supremacy); (3) the judgment of the idolatry (the consequence of the compromise); (4) the power of the prayer (the prayer of Elijah — the rain)",
        "The application: the faith in the supremacy of God, the courage of the confession, the avoidance of the idolatry, and the power of the prayer"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Theme 7:" },
      { k: "bul", items: [
        "7. Supremacy of God: Religious tensions during Ahab's reign (1 Kings 16: 29–34; 17: 1–7; 18: 1–19); Elijah at Mount Carmel (1 Kings 18: 17–46)",
        "Ahab and Jezebel: the introduction of the Baal (the altar, the four hundred and fifty prophets of Baal), the persecution of the prophets of the Lord",
        "The drought: the judgment on the idolatry (1 Kings 17: 1), the provision (the ravens, the widow of Zarephath — 1 Kings 17: 8–16)",
        "The contest at Mount Carmel: the challenge, the failure of the prophets of Baal, the fire of the Lord, the slaying of the prophets, the rain (1 Kings 18: 17–46)"
      ] }
    ]
  },
  /* =============== CRS7 · GREED AND ITS EFFECTS =============== */
  {
    grade: 12, sem: "One", icon: "💰", period: "CRS7",
    title: "Greed and its Effects",
    subtitle: "Ahab (1 Kings 21: 1–29) · Gehazi (2 Kings 5)",
    note: "Section A, Theme 8: Greed and its effects — Ahab; Gehazi. Texts: 1 Kings 21: 1–29; 2 Kings 5.",
    objectives: [
      "Study the greed of Ahab (the desire for the vineyard of Naboth, the deception, the murder) and its consequence",
      "Study the greed of Gehazi (the desire for the gift of Naaman, the deception, the consequence — the leprosy)",
      "Explain the meaning of the greed (the covetousness, the deception) and its effects (the judgment, the destruction)",
      "Derive the lessons of the greed"
    ],
    terms: [
      { t: "Greed (covetousness)", d: "The excessive desire for the possession of another (the coveting) — the sin of the greed (the deception, the murder).", x: "The covetousness" },
      { t: "Ahab", d: "The king of Israel — the greedy king (the desire for the vineyard of Naboth) (1 Kings 21).", x: "The king" },
      { t: "Naboth", d: "The owner of the vineyard (the inheritance of the father) — the refusal of the sale ('I will not give thee the inheritance of my fathers') (1 Kings 21: 3).", x: "The owner" },
      { t: "The deception", d: "The deception of Jezebel (the false accusation, the false witnesses, the stoning of Naboth) (1 Kings 21: 8–14).", x: "The false witness" },
      { t: "The consequence on Ahab", d: "The consequence (the prophecy of the judgment — the death of the house of Ahab) (1 Kings 21: 17–29).", x: "The prophecy of the judgment" },
      { t: "Gehazi", d: "The servant of Elisha — the greedy servant (the desire for the gift of Naaman) (2 Kings 5: 20–27).", x: "The servant" },
      { t: "Naaman", d: "The captain of Syria — the leper, the healed by God; the gift (the two talents of silver, the ten changes of raiment) (2 Kings 5: 1–19).", x: "The captain" },
      { t: "The deception of Gehazi", d: "The deception of Gehazi (the lying — 'thine servant sent no man') (2 Kings 5: 2–7, 20–22).", x: "The lie" },
      { t: "The consequence on Gehazi", d: "The consequence (the leprosy of Naaman upon Gehazi — 'the leprosy of Naaman shall cleave unto thee') (2 Kings 5: 27).", x: "The leprosy" }
    ],
    tf: [
      { s: "Ahab desired the vineyard of Naboth.", a: "True", why: "The greed of Ahab (1 Kings 21: 1–3)." },
      { s: "Naboth agreed to sell the vineyard to Ahab.", a: "False", why: "The refusal of Naboth — 'I will not give thee the inheritance of my fathers' (1 Kings 21: 3)." },
      { s: "Gehazi was the servant of Elisha.", a: "True", why: "Gehazi (2 Kings 4: 39; 5: 20)." },
      { s: "The consequence of the greed of Gehazi was the leprosy.", a: "True", why: "The consequence (2 Kings 5: 27)." }
    ],
    mcq: [
      { q: "The owner of the vineyard desired by Ahab is:", o: ["Naboth", "Naaman", "Gehazi", "Elisha"], a: 0, why: "The vineyard of Naboth (1 Kings 21: 1–3)." },
      { q: "The woman who deceived Ahab (the false accusation) is:", o: ["Jezebel", "Bathsheba", "Ruth", "Hannah"], a: 0, why: "The deception of Jezebel (1 Kings 21: 8–14)." },
      { q: "The greedy servant of Elisha is:", o: ["Gehazi", "Eliab", "Abishai", "Uriah"], a: 0, why: "Gehazi (2 Kings 5: 20–27)." },
      { q: "The captain of Syria who was healed of the leprosy is:", o: ["Naaman", "Naboth", "Ahab", "Jeroboam"], a: 0, why: "Naaman (2 Kings 5: 1–19)." },
      { q: "The consequence of the greed of Gehazi was the:", o: ["the leprosy", "the blindness", "the madness", "the death"], a: 0, why: "The leprosy of Naaman upon Gehazi (2 Kings 5: 27)." }
    ],
    essay: [
      { q: "Study the greed of Ahab and its effects, with reference to the texts. Derive four lessons from the story.", marks: 25, outline: [
        "The greed of Ahab (1 Kings 21: 1–29): (1) the desire (the vineyard of Naboth — 'give me thy field, that it may be to me for a garden of herbs'); (2) the refusal of Naboth (the inheritance of the fathers — 'the Lord forbid me that I should give thee the inheritance of my fathers'); (3) the depression of Ahab (the lying down, the veil, the fasting); (4) the deception of Jezebel (the false accusation, the false witnesses, the stoning of Naboth); (5) the acquisition (the taking of the vineyard); (6) the word of the prophet (the prophecy of the judgment — the death of the house of Ahab); (7) the repentance of Ahab (the sackcloth, the fasting) — the deferment of the judgment (to the days of the son)",
        "The effects of the greed: (1) the loss of the innocence (the murder of Naboth); (2) the judgment (the prophecy of the destruction of the house); (3) the shame (the exposure of the sin); (4) the consequence to the nation (the curse on the land)",
        "Lessons: (1) the danger of the greed (the covetousness — the sin of the desire for the possession of another); (2) the consequence of the deception (the false witness — the judgment); (3) the value of the inheritance (the refusal of Naboth — the faith in the covenant); (4) the repentance (the turning of Ahab — the mercy, the deferment of the judgment)",
        "The application: the avoidance of the greed, the honesty (the refusal of the deception), the faith in the covenant (the inheritance), and the repentance (the turning to God)"
      ] },
      { q: "Study the greed of Gehazi and its effects, with reference to the texts. Derive four lessons from the story.", marks: 25, outline: [
        "The story of Naaman (2 Kings 5: 1–19): (1) the captain of Syria (the leper, the valiant); (2) the healing (the word of Elisha — the washing in the Jordan seven times); (3) the gift (the two talents of silver, the ten changes of raiment — the refusal of Elisha)",
        "The greed of Gehazi (2 Kings 5: 20–27): (1) the departure of Naaman (the opportunity); (2) the desire (the gift — 'my master minded not to receive any thing of Naaman the Syrian'); (3) the deception (the running after Naaman, the lying — 'thine servant sent no man'); (4) the acceptance (the silver, the raiment — the hiding in the house); (5) the consequence (the word of God — 'is it a time to receive silver? and to receive raiment?'); (6) the judgment (the leprosy of Naaman upon Gehazi and his seed for ever)",
        "The effects of the greed: (1) the deception (the lie to the prophet); (2) the judgment (the leprosy — the same disease of the healed man); (3) the consequence to the seed (the inheritance of the sin); (4) the shame (the exposure of the sin)",
        "Lessons: (1) the danger of the greed (the desire for the gift — the sin of the covetousness); (2) the deception (the lie — the consequence of the sin); (3) the judgment of God (the leprosy — the consequence of the greed); (4) the value of the integrity (the refusal of Elisha — the purity of the prophet)",
        "The application: the avoidance of the greed, the honesty (the refusal of the lie), the integrity (the refusal of the gift), and the trust in the provision of God"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Theme 8:" },
      { k: "bul", items: [
        "8. Greed and its effects: Ahab (1 Kings 21: 1–29); Gehazi (2 Kings 5)",
        "Ahab: the desire for the vineyard of Naboth, the refusal of Naboth, the deception of Jezebel (the false witness, the stoning), the acquisition, the prophecy of the judgment, the repentance",
        "Gehazi: the servant of Elisha, the gift of Naaman (the two talents of silver, the ten changes of raiment), the deception (the lying), the acceptance, the consequence (the leprosy)",
        "The meaning of the greed (the covetousness, the deception) and its effects (the judgment, the destruction)"
      ] }
    ]
  },
  /* =============== CRS8 · RELIGIOUS REFORMS & KING JOSIAH =============== */
  {
    grade: 12, sem: "One", icon: "📜", period: "CRS8",
    title: "Religious Reforms & the Reign of King Josiah",
    subtitle: "Religious reforms (2 Kings 22–23) · the reign of King Josiah (2 Kings 24; 25: 1–17)",
    note: "Section A, Themes 9–10: Religious reforms; the reign of King Josiah. Texts: 2 Kings 22; 23: 1–30; 2 Kings 24; 25: 1–17.",
    objectives: [
      "Study the discovery of the Book of the Law in the temple (the scribe Hilkiah, the consultation of Huldah)",
      "Study the religious reforms of Josiah (the cleansing of the temple, the destruction of the idols, the renewal of the covenant, the Passover)",
      "Explain the reign of King Josiah (the beginning of the reign, the reforms, the battle of Megiddo)",
      "Derive the lessons of the reform and the reign"
    ],
    terms: [
      { t: "Josiah", d: "The king of Judah — the reformer (the eighteenth year of the reign — the discovery of the Book of the Law) (2 Kings 22–23).", x: "The reforming king" },
      { t: "The Book of the Law", d: "The Book of the Law found in the temple (the scribe Hilkiah) — the Book of the Covenant (2 Kings 22: 8–13).", x: "The Book of the Covenant" },
      { t: "Hilkiah", d: "The chief priest — the discoverer of the Book of the Law (2 Kings 22: 8).", x: "The chief priest" },
      { t: "Huldah", d: "The prophetess — the interpreter of the Book (the word of the judgment, the mercy for Josiah) (2 Kings 22: 14–20).", x: "The prophetess" },
      { t: "The religious reforms", d: "The reforms of Josiah (the cleansing of the temple, the destruction of the idols, the renewal of the covenant, the Passover) (2 Kings 23: 1–25).", x: "The reform" },
      { t: "The renewal of the covenant", d: "The renewal of the covenant (the reading of the Book, the oath of the people) (2 Kings 23: 1–3).", x: "The covenant" },
      { t: "The Passover", d: "The Passover of Josiah (the keeping of the Passover — the first since the days of the judges) (2 Kings 23: 21–23).", x: "The Passover" },
      { t: "The battle of Megiddo", d: "The battle of Megiddo (the death of Josiah — the arrow of Pharaoh Neco) (2 Kings 23: 28–30).", x: "The death of the king" },
      { t: "The end of Judah", d: "The end of Judah (the exile — the destruction of the temple, the carrying away of the people) (2 Kings 24; 25: 1–17).", x: "The exile" }
    ],
    tf: [
      { s: "The Book of the Law was found in the temple by the scribe Hilkiah.", a: "True", why: "The discovery (2 Kings 22: 8)." },
      { s: "Huldah was the prophetess who interpreted the Book.", a: "True", why: "The consultation of Huldah (2 Kings 22: 14–20)." },
      { s: "Josiah kept the Passover in the eighteenth year of his reign.", a: "True", why: "The Passover (2 Kings 23: 21–23)." },
      { s: "Josiah was killed in the battle of Jericho.", a: "False", why: "Josiah was killed in the battle of Megiddo (2 Kings 23: 28–30)." }
    ],
    mcq: [
      { q: "The king of Judah who discovered the Book of the Law is:", o: ["Josiah", "Hezekiah", "Jehoshaphat", "Manasseh"], a: 0, why: "The discovery of the Book of the Law (2 Kings 22)." },
      { q: "The chief priest who found the Book of the Law is:", o: ["Hilkiah", "Zadok", "Eli", "Abiathar"], a: 0, why: "The scribe Hilkiah (2 Kings 22: 8)." },
      { q: "The prophetess who interpreted the Book is:", o: ["Huldah", "Deborah", "Miriam", "Isabel"], a: 0, why: "Huldah (2 Kings 22: 14–20)." },
      { q: "The Passover of Josiah was the first since the days of the:", o: ["judges", "kings", "prophets", "priests"], a: 0, why: "The Passover (2 Kings 23: 21)." },
      { q: "Josiah was killed in the battle of:", o: ["Megiddo", "Jericho", "Ai", "Hormah"], a: 0, why: "The battle of Megiddo (2 Kings 23: 28–30)." }
    ],
    essay: [
      { q: "Study the religious reforms of Josiah, with reference to the texts. Explain the discovery of the Book of the Law, the reforms, and the Passover, and derive four lessons from the story.", marks: 25, outline: [
        "The discovery of the Book of the Law (2 Kings 22: 1–20): (1) the command of Josiah (the repair of the temple — the money of the tithe); (2) the discovery (the scribe Hilkiah — the Book of the Law in the house of the Lord); (3) the reading (the scribe Shaphan — the reading to the king); (4) the mourning (the tearing of the clothes of Josiah); (5) the consultation (the prophetess Huldah — the word of the judgment on the land, the mercy for Josiah — 'because thine heart was tender')",
        "The religious reforms (2 Kings 23: 1–25): (1) the renewal of the covenant (the reading of the Book in the house of the Lord, the oath of the king and the people); (2) the cleansing of the temple (the removal of the vessels of Baal, the Chemosh, the stars); (3) the destruction of the idols (the Topheth, the prophets of the high places, the Asherah, the groves); (4) the reform of the priesthood (the removal of the priests of the high places); (5) the Passover (the keeping of the Passover — the first since the days of the judges)",
        "The reign of King Josiah (2 Kings 23: 28–30, 24; 25: 1–17): (1) the beginning of the reign (the eighth year, the reign of the thirty-one years); (2) the reforms (the eighteenth year); (3) the battle of Megiddo (the death of Josiah — the arrow of Pharaoh Neco); (4) the end of Judah (the exile — the destruction of the temple by Nebuchadnezzar, the carrying away of the people — the captivity)",
        "Lessons: (1) the value of the Word (the discovery of the Book — the guidance of the reform); (2) the obedience to the Word (the reform — the cleansing, the destruction of the idols); (3) the tender heart (the mercy of God — the response of Josiah); (4) the covenant (the renewal — the commitment of the people to the Lord)",
        "The application: the value of the Word, the obedience, the tender heart, and the commitment to the covenant"
      ] },
      { q: "Explain the end of the kingdom of Judah (the exile), with reference to the texts (2 Kings 24; 25: 1–17). Discuss the cause of the exile, and derive four lessons from the story.", marks: 25, outline: [
        "The end of Judah (2 Kings 24; 25: 1–17): (1) the reign of Jehoiachin (the third year, the surrender to Nebuchadnezzar — the first exile); (2) the reign of Zedekiah (the rebellion against Babylon, the siege of Jerusalem); (3) the destruction of the temple (the fire of Nebuzaradan — the house of the Lord, the house of the king); (4) the carrying away of the people (the captivity to Babylon — the remnant of the city, the chief of the remainder, the remainder of the people); (5) the governor (the appointment of Gedaliah, the murder by Ishmael)",
        "The cause of the exile: (1) the sin of the people (the idolatry, the sacrifice to the children, the divination, the soothsaying — 2 Kings 24: 3); (2) the anger of the Lord (the rejection of the words of the prophets — the sending of the prophets, the derision of the people); (3) the consequence (the judgment — the exile, the destruction)",
        "Lessons: (1) the consequence of the sin (the idolatry — the exile); (2) the witness of the prophets (the sending of the prophets, the rejection — the responsibility); (3) the sovereignty of God (the judgment — the use of Babylon as the instrument); (4) the hope (the promise of the return — the word of the Lord in the exile)",
        "The application: the avoidance of the sin, the hearing of the Word (the prophets), the submission to the sovereignty, and the hope of the return"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Themes 9–10:" },
      { k: "bul", items: [
        "9. Religious reforms (2 Kings 22; 23: 1–30)",
        "10. The reign of King Josiah (2 Kings 24; 25: 1–17)",
        "The discovery of the Book of the Law: the scribe Hilkiah, the reading to the king, the consultation of Huldah (2 Kings 22: 1–20)",
        "The reforms: the renewal of the covenant, the cleansing of the temple, the destruction of the idols, the reform of the priesthood, the Passover (2 Kings 23: 1–25)",
        "The battle of Megiddo: the death of Josiah (2 Kings 23: 28–30)",
        "The end of Judah: the exile (the destruction of the temple, the carrying away of the people) (2 Kings 24; 25: 1–17)"
      ] }
    ]
  },
  /* =============== CRS9 · CONCERN FOR ONE'S NATION & FAITH =============== */
  {
    grade: 12, sem: "Two", icon: "🏙️", period: "CRS9",
    title: "Concern for One's Nation & Faith in God",
    subtitle: "The condition of the nation (Nehemiah 1; 2) · response to the state of the nation (Ezra 1; 7) · faith and courage (Dan. 3) · faith and power (Dan. 6)",
    note: "Section A, Themes 11–12: Concern for one's Nation (the condition of the nation; response to the state of the nation); Faith in God (faith and courage; faith and power). Texts: Nehemiah 1; 2: 9–20, 4; Ezra 1; 4; 5: 1–2, 6: 13–22, 7: 1–10; Daniel 3; Daniel 6.",
    objectives: [
      "Study the concern of Nehemiah for the nation (the condition of the wall, the prayer, the response — the rebuilding)",
      "Study the response of Ezra to the state of the nation (the return, the rebuilding of the altar and the temple, the teaching of the Law)",
      "Study the faith and courage of the three friends (the furnace of the fiery furnace)",
      "Study the faith and power of Daniel (the lions' den)",
      "Derive the lessons of the concern, the faith, and the power"
    ],
    terms: [
      { t: "Nehemiah", d: "The cupbearer of Artaxerxes — the builder of the wall of Jerusalem (Nehemiah 1–7).", x: "The builder" },
      { t: "The condition of the nation", d: "The condition of Jerusalem (the wall broken down, the gates burned) — the report of the brothers (Nehemiah 1: 3).", x: "The broken wall" },
      { t: "The prayer of Nehemiah", d: "The prayer of Nehemiah (the confession of the sin, the remembrance of the covenant, the request for the favour) (Nehemiah 1: 4–11).", x: "The prayer" },
      { t: "The rebuilding", d: "The rebuilding of the wall (the plan, the opposition, the work, the completion) (Nehemiah 2: 11–20, 3; 4).", x: "The work of the wall" },
      { t: "Ezra", d: "The scribe of the Law — the leader of the return, the teacher of the Law (Ezra 1–10).", x: "The scribe" },
      { t: "The return", d: "The return of the exiles (the decree of Cyrus — the rebuilding of the temple) (Ezra 1).", x: "The return from Babylon" },
      { t: "The rebuilding of the temple", d: "The rebuilding of the temple (the foundation, the opposition, the completion) (Ezra 3–6).", x: "The second temple" },
      { t: "The teaching of the Law", d: "The teaching of the Law by Ezra (the reading, the explanation, the keeping of the Passover) (Ezra 7: 1–10).", x: "The teaching" },
      { t: "The three friends", d: "Shadrach, Meshach and Abednego — the faith and the courage (the furnace of the fiery furnace) (Daniel 3).", x: "The three friends" },
      { t: "The fiery furnace", d: "The furnace of the fiery furnace (the seven times hotter, the binding, the deliverance — the Fourth Man) (Daniel 3: 19–25).", x: "The deliverance" },
      { t: "Daniel", d: "The prophet of the exile — the faith and the power (the lions' den) (Daniel 6).", x: "The prophet" },
      { t: "The lions' den", d: "The den of the lions (the plot of the enemies, the prayer of Daniel, the throwing, the deliverance — the angel) (Daniel 6: 16–24).", x: "The deliverance" }
    ],
    tf: [
      { s: "Nehemiah was the cupbearer of Artaxerxes.", a: "True", why: "Nehemiah (Nehemiah 1: 11)." },
      { s: "Nehemiah heard of the condition of the wall (broken down, the gates burned).", a: "True", why: "The condition of the nation (Nehemiah 1: 3)." },
      { s: "The three friends (Shadrach, Meshach and Abednego) were delivered from the fiery furnace.", a: "True", why: "The faith and the courage (Daniel 3: 19–25)." },
      { s: "Daniel was thrown into the lions' den for his prayer.", a: "True", why: "The faith and the power (Daniel 6: 10–22)." }
    ],
    mcq: [
      { q: "The cupbearer of Artaxerxes who rebuilt the wall of Jerusalem is:", o: ["Nehemiah", "Ezra", "Daniel", "Zerubbabel"], a: 0, why: "Nehemiah (Nehemiah 1–7)." },
      { q: "The scribe of the Law who taught the people is:", o: ["Ezra", "Nehemiah", "Daniel", "Hilkiah"], a: 0, why: "Ezra (Ezra 7: 1–10)." },
      { q: "The three friends (Shadrach, Meshach and Abednego) were thrown into the:", o: ["the fiery furnace", "the lions' den", "the sea", "the prison"], a: 0, why: "The faith and the courage (Daniel 3)." },
      { q: "Daniel was thrown into the:", o: ["the lions' den", "the fiery furnace", "the sea", "the prison only"], a: 0, why: "The faith and the power (Daniel 6)." },
      { q: "The decree of the return (the rebuilding of the temple) was by:", o: ["Cyrus", "Artaxerxes", "Darius", "Nebuchadnezzar"], a: 0, why: "The return (Ezra 1)." }
    ],
    essay: [
      { q: "Study the concern of Nehemiah for the nation (the condition, the prayer, the rebuilding) and the response of Ezra to the state of the nation, with reference to the texts. Derive four lessons from each.", marks: 25, outline: [
        "The concern of Nehemiah (Nehemiah 1; 2: 9–20, 4): (1) the condition (the report of the brothers — the wall broken down, the gates burned with fire, the affliction of the remnant); (2) the prayer (the confession of the sin of the people, the remembrance of the covenant — 'remember me, I pray thee, O my God', the request for the favour of the king); (3) the response (the favour of Artaxerxes — the letters, the timber, the escort); (4) the plan (the secret inspection of the wall, the gathering of the people — 'the God of heaven, he will prosper us'); (5) the opposition (the mocking of Sanballat and Tobiah, the plot); (6) the work (the rebuilding — every man at his own work, the half with the trowel and the half with the sword); (7) the completion (the setting of the doors, the dedication)",
        "The response of Ezra (Ezra 1; 4; 5: 1–2, 6: 13–22, 7: 1–10): (1) the return (the decree of Cyrus — the rebuilding of the temple, the vessels of the house of God); (2) the rebuilding of the temple (the foundation, the opposition of the neighbours, the completion — the word of the prophets); (3) the dedication (the offering of the burnt offerings, the keeping of the Passover); (4) the teaching of the Law (the reading of the Book, the explanation — the understanding of the people, the weeping, the joy)",
        "Lessons of Nehemiah: (1) the concern for the nation (the listening of the report, the prayer); (2) the prayer (the confession, the remembrance of the covenant, the request); (3) the plan (the inspection, the gathering, the strategy); (4) the perseverance (the opposition, the work, the completion)",
        "Lessons of Ezra: (1) the return (the obedience to the call — the decree); (2) the rebuilding (the foundation, the perseverance against the opposition); (3) the teaching (the Law — the guidance of the people); (4) the devotion (the preparation of the heart — the seeking of the kingdom, the Law, the work)",
        "The application: the concern for the nation, the prayer, the plan, the perseverance, the teaching, and the devotion"
      ] },
      { q: "Study the faith and courage of the three friends (the fiery furnace) and the faith and power of Daniel (the lions' den), with reference to the texts. Derive four lessons from each.", marks: 25, outline: [
        "The faith and courage of the three friends (Daniel 3): (1) the image (the statue of Nebuchadnezzar, the command — the music, the worship); (2) the refusal (the answer — 'our God whom we serve is able to deliver us... but if not, be it known unto thee, O king, that we will not serve thy gods'); (3) the furnace (the seven times hotter, the binding, the throwing); (4) the deliverance (the Fourth Man — 'like a son of the gods', the hair not singed, the garment not altered); (5) the confession (the praise of Nebuchadnezzar — 'O God of Shadrach, Meshach and Abednego, we commend thee')",
        "The faith and power of Daniel (Daniel 6): (1) the promotion (the three governors, the thirty commanders, the wisdom of Daniel); (2) the plot (the decree — the praying to any god or man, the seal); (3) the prayer (the window open toward Jerusalem, the three times a day — the custom); (4) the den (the throwing, the stone, the seal); (5) the deliverance (the angel, the lions shut their mouths); (6) the proclamation (the decree of the kingdom — the God of Daniel)",
        "Lessons of the three friends: (1) the courage (the refusal of the worship — the faith against the king); (2) the faith (the trust in the deliverance — 'our God is able'); (3) the integrity (the refusal of the compromise — 'but if not'); (4) the witness (the deliverance — the confession of the king)",
        "Lessons of Daniel: (1) the consistency (the prayer — the three times a day, the custom); (2) the integrity (the refusal of the decree — the prayer to God); (3) the deliverance (the angel — the power of God); (4) the witness (the proclamation — the God of Daniel in the kingdom)",
        "The application: the courage, the faith, the integrity, the consistency, and the witness"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Themes 11–12:" },
      { k: "bul", items: [
        "11. Concern for one's Nation: The condition of the nation (Nehemiah 1; 2: 9–20; 4); Response to the state of the nation (Ezra 1; 4; 5: 1–2; 6: 13–22; 7: 1–10)",
        "12. Faith in God: Faith and courage (Daniel 3); Faith and power (Daniel 6)",
        "Nehemiah: the cupbearer of Artaxerxes, the condition (the wall broken down), the prayer (the confession, the covenant), the plan (the inspection, the gathering), the opposition (Sanballat, Tobiah), the work (the trowel and the sword), the completion",
        "Ezra: the scribe of the Law, the return (the decree of Cyrus), the rebuilding of the temple (the foundation, the opposition, the completion), the dedication (the Passover), the teaching of the Law (the reading, the explanation)",
        "The three friends: Shadrach, Meshach and Abednego, the image of Nebuchadnezzar, the refusal, the furnace (the seven times hotter), the deliverance (the Fourth Man)",
        "Daniel: the promotion, the plot (the decree), the prayer (the window, the three times a day), the lions' den, the deliverance (the angel), the proclamation"
      ] }
    ]
  },
  /* =============== CRS10 · THE NATURE OF GOD =============== */
  {
    grade: 12, sem: "Two", icon: "⚡", period: "CRS10",
    title: "The Nature of God",
    subtitle: "True religion and social justice — Amos · God's divine love — Hosea",
    note: "Section A, Theme 13: Nature of God — True religion and social justice (Amos); God's divine love (Hosea). Texts: Amos 2: 6–8, 4, 5: 1–24, 7: 10–17, 8; Hosea 1; 2; 3; 6.",
    objectives: [
      "Study the message of Amos (the social justice, the judgment on the nations, the day of the Lord)",
      "Explain true religion and social justice (the righteousness, the judgment, the welfare of the poor)",
      "Study the message of Hosea (the unfaithfulness of Israel, the love of God, the restoration)",
      "Explain God's divine love (the steadfast love, the covenant, the compassion)",
      "Derive the lessons of the nature of God (the justice, the love)"
    ],
    terms: [
      { t: "Amos", d: "The prophet of the eighth century — the shepherd of Tekoa, the prophet of the social justice (Amos 1–9).", x: "The prophet of the justice" },
      { t: "The social justice", d: "The concern for the poor (the oppressed, the widow, the fatherless) — the message of Amos (Amos 2: 6–8).", x: "The justice" },
      { t: "The judgment on the nations", d: "The oracles of judgment (Damascus, Gaza, Tyre, Edom, Ammon, Moab, Judah, Israel) — the sin of the nations (Amos 1–2).", x: "The oracles" },
      { t: "The day of the Lord", d: "The day of the Lord (the darkness, not the light — the judgment) (Amos 5: 18–20).", x: "The day of the judgment" },
      { t: "The righteousness", d: "The righteousness (the justice, the welfare) — 'let justice roll down like waters' (Amos 5: 24).", x: "The rolling of the justice" },
      { t: "Hosea", d: "The prophet of the love — the marriage of Gomer, the unfaithfulness of Israel, the love of God (Hosea 1–14).", x: "The prophet of the love" },
      { t: "The unfaithfulness", d: "The unfaithfulness of Israel (the harlotry, the idols, the covenant breakers) (Hosea 1; 2).", x: "The harlotry" },
      { t: "The steadfast love", d: "The steadfast love of God (thehesed — the covenant love, the compassion) (Hosea 2: 19–20).", x: "The covenant love" },
      { t: "The restoration", d: "The restoration of Israel (the planting in the land, the compassion, the marriage) (Hosea 2: 14–23, 3).", x: "The restoration" },
      { t: "The nature of God", d: "The nature of God (the justice of Amos, the love of Hosea) — the two aspects of the character of God.", x: "The justice and the love" }
    ],
    tf: [
      { s: "Amos was the prophet of the social justice.", a: "True", why: "The message of Amos (the concern for the poor)." },
      { s: "The day of the Lord is a day of light and joy (according to Amos).", a: "False", why: "The day of the Lord — the darkness, not the light (the judgment) (Amos 5: 18–20)." },
      { s: "Hosea was commanded to marry Gomer (the unfaithful woman).", a: "True", why: "The marriage of Hosea (Hosea 1: 2–3)." },
      { s: "The steadfast love (hesed) of God is the covenant love.", a: "True", why: "The love of God (Hosea 2: 19–20)." }
    ],
    mcq: [
      { q: "The prophet of the social justice (the concern for the poor) is:", o: ["Amos", "Hosea", "Isaiah", "Micah"], a: 0, why: "The message of Amos." },
      { q: "The command of Amos is:", o: ["'let justice roll down like waters'", "'be still and know that I am God'", "'the Lord is my shepherd'", "'fear not, I am with thee'"], a: 0, why: "The righteousness (Amos 5: 24)." },
      { q: "The prophet of the love (the marriage of Gomer) is:", o: ["Hosea", "Amos", "Obadiah", "Jonah"], a: 0, why: "The message of Hosea." },
      { q: "The day of the Lord, according to Amos, is the day of:", o: ["the darkness (the judgment)", "the light and joy", "the harvest", "the wedding"], a: 0, why: "The day of the Lord (Amos 5: 18–20)." },
      { q: "The covenant love of God is called the:", o: ["the steadfast love (hesed)", "the wrath", "the anger", "the jealousy only"], a: 0, why: "The love of God (Hosea 2: 19–20)." }
    ],
    essay: [
      { q: "Study the message of Amos (the social justice, the day of the Lord), with reference to the texts. Explain true religion and social justice, and derive four lessons from the message.", marks: 25, outline: [
        "The message of Amos (Amos 2: 6–8, 4, 5: 1–24, 7: 10–17, 8): (1) the judgment on the nations (the oracles — Damascus, Gaza, Tyre, Edom, Ammon, Moab, Judah, Israel — the sin of the oppression, the injustice); (2) the concern for the poor (the trampling of the poor, the destruction of the righteous — Amos 2: 6–8); (3) the rebuke (the feasts, the songs, the ointments — the indifference to the suffering); (4) the day of the Lord (the darkness, not the light — the judgment); (5) the righteousness (the rolling of the justice like waters, the uplift of the line of Jacob)",
        "True religion and social justice: (1) the religion of the form (the feasts, the sacrifices) without the justice — the rejection; (2) the religion of the substance (the justice, the welfare of the poor) — the acceptance; (3) the message — the religion is the justice (the concern for the oppressed, the widow, the fatherless)",
        "Lessons: (1) the social justice (the concern for the poor — the religion); (2) the day of the Lord (the judgment — the accountability); (3) the rolling of the justice (the welfare of the nation); (4) the witness of the prophet (the confrontation of the unrighteousness — Amos 7: 10–17)",
        "The application: the social justice, the accountability, the welfare of the poor, and the witness of the faith"
      ] },
      { q: "Study the message of Hosea (the unfaithfulness of Israel, the love of God, the restoration), with reference to the texts. Explain God's divine love, and derive four lessons from the message.", marks: 25, outline: [
        "The message of Hosea (Hosea 1; 2; 3; 6): (1) the marriage of Gomer (the unfaithful woman — the symbol of the unfaithfulness of Israel); (2) the children (Jezreel, Lo-ruhamah, Lo-ammi — the judgment, the removal of the love, the non-people); (3) the unfaithfulness (the harlotry — the pursuit of the Baal, the idols, the covenant breakers); (4) the love of God (the steadfast love — the pursuit of the unfaithful, the restoration); (5) the restoration (the planting in the land, the compassion, the marriage — 'I will betroth thee unto me for ever')",
        "God's divine love: (1) the steadfast love (hesed — the covenant love, the compassion); (2) the pursuit (the calling of the unfaithful — 'O Israel, return unto the Lord thy God'); (3) the restoration (the planting, the compassion, the marriage); (4) the nature of God (the love — the attribute of the character)",
        "Lessons: (1) the unfaithfulness (the sin of the idolatry — the breaking of the covenant); (2) the love of God (the steadfast love — the pursuit, the restoration); (3) the compassion (the tender mercy — the heart of God); (4) the restoration (the hope — the return to the Lord)",
        "The application: the avoidance of the unfaithfulness, the faith in the love, the compassion, and the hope of the restoration"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Theme 13:" },
      { k: "bul", items: [
        "Nature of God: True religion and social justice – Amos (Amos 2: 6–8; 4; 5: 1–24; 7: 10–17; 8); God's divine love – Hosea (Hosea 1; 2; 3; 6)",
        "Amos: the prophet of the social justice, the oracles of judgment, the concern for the poor, the day of the Lord, the rolling of the justice",
        "Hosea: the prophet of the love, the marriage of Gomer, the unfaithfulness of Israel, the steadfast love (hesed), the restoration"
      ] }
    ]
  },
  /* =============== CRS11 · THE SYNOPTIC GOSPELS =============== */
  {
    grade: 12, sem: "Two", icon: "✝️", period: "CRS11",
    title: "Themes from the Synoptic Gospels",
    subtitle: "Baptism and Temptation · the Call and Demands of Discipleship · Teaching on forgiveness · the Trials of Jesus · the Crucifixion, Burial and Resurrection",
    note: "Section B, Themes 1–5: Baptism and Temptation of Jesus; the Call and Demands of Discipleship; Jesus' Teaching on forgiveness; the Trials of Jesus; the Crucifixion, Burial and Resurrection of Jesus. Texts: Matthew 3: 13–17, 4: 1–11, 4: 18–25, 6: 12, 14–15, 18: 21–35, 26: 36–75, 27: 32–66, 28: 1–10; the parallel in Mark and Luke.",
    objectives: [
      "Study the baptism of Jesus (the voice of the Father, the descent of the Spirit)",
      "Study the temptation of Jesus (the three temptations, the refusal)",
      "Study the call and demands of discipleship (the call of the fishermen, the cost of the discipleship)",
      "Study the teaching of Jesus on forgiveness (the Lord's Prayer, the parable of the unforgiving servant)",
      "Study the trials of Jesus (Gethsemane, the denial of Peter, the condemnation) and the crucifixion, burial and resurrection",
      "Derive the lessons of the life of Jesus"
    ],
    terms: [
      { t: "The baptism of Jesus", d: "The baptism of Jesus by John (the Jordan) — the voice of the Father ('this is my beloved Son'), the descent of the Spirit (Matthew 3: 13–17).", x: "The baptism in the Jordan" },
      { t: "The temptation", d: "The temptation of Jesus (the wilderness, the forty days, the three temptations — the bread, the pinnacle, the kingdoms) — the refusal (Matthew 4: 1–11).", x: "The three temptations" },
      { t: "The call", d: "The call of the disciples (the fishermen — 'follow me', the call of Matthew) (Matthew 4: 18–22, 9: 9–13).", x: "The call of the fishermen" },
      { t: "The demands of discipleship", d: "The demands of the discipleship (the cost — 'count the cost', the denial of the self, the cross) (Luke 9: 57–62, 14: 25–33).", x: "The cost of the discipleship" },
      { t: "The Lord's Prayer", d: "The teaching of the Lord's Prayer (the petition of the forgiveness — 'forgive us our debts, as we forgive our debtors') (Matthew 6: 9–15).", x: "The prayer of forgiveness" },
      { t: "The parable of the unforgiving servant", d: "The parable of the unforgiving servant (the thousand talents, the denial of the forgiveness, the judgment) (Matthew 18: 21–35).", x: "The parable" },
      { t: "Gethsemane", d: "The garden of Gethsemane (the prayer — 'not my will, but thy will be done', the sleep of the disciples) (Matthew 26: 36–46).", x: "The garden" },
      { t: "The denial of Peter", d: "The denial of Peter (the three denials, the crowing of the cock, the weeping) (Matthew 26: 69–75).", x: "The three denials" },
      { t: "The condemnation", d: "The condemnation of Jesus (the trial before the Sanhedrin, Pilate, Herod — 'the King of the Jews') (Matthew 26: 57–27: 2).", x: "The trial" },
      { t: "The crucifixion", d: "The crucifixion of Jesus (the carrying of the cross, the mocking, the inscription, the death — 'it is finished') (Matthew 27: 32–56).", x: "The cross" },
      { t: "The burial", d: "The burial of Jesus (the tomb of Joseph of Arimathea, the stone, the guard) (Matthew 27: 57–66).", x: "The tomb" },
      { t: "The resurrection", d: "The resurrection of Jesus (the empty tomb, the angel, the appearance to the women, the Great Commission) (Matthew 28: 1–20).", x: "The empty tomb" }
    ],
    tf: [
      { s: "Jesus was baptized by John the Baptist in the Jordan.", a: "True", why: "The baptism of Jesus (Matthew 3: 13–17)." },
      { s: "Jesus accepted the first temptation (to turn the stones into bread).", a: "False", why: "The temptation — the refusal of Jesus ('Man shall not live by bread alone')." },
      { s: "The prayer of Jesus in Gethsemane was 'not my will, but thy will be done.'", a: "True", why: "Gethsemane (Matthew 26: 39)." },
      { s: "Peter denied Jesus three times.", a: "True", why: "The denial of Peter (Matthew 26: 69–75)." },
      { s: "Jesus rose from the dead on the third day.", a: "True", why: "The resurrection (Matthew 28: 1–10)." }
    ],
    mcq: [
      { q: "The voice of the Father at the baptism of Jesus said:", o: ["'This is my beloved Son, in whom I am well pleased'", "'I am the way, the truth, and the life'", "'Let there be light'", "'The kingdom of God is at hand'"], a: 0, why: "The baptism (Matthew 3: 17)." },
      { q: "The three temptations of Jesus in the wilderness were:", o: ["the bread, the pinnacle, and the kingdoms", "the gold, the silver, and the jewels", "the power, the glory, and the honour", "the food, the water, and the rest"], a: 0, why: "The temptation (Matthew 4: 1–11)." },
      { q: "The petition of the Lord's Prayer on the forgiveness is:", o: ["'Forgive us our debts, as we forgive our debtors'", "'Give us this day our daily bread'", "'Lead us not into temptation'", "'Deliver us from evil'"], a: 0, why: "The Lord's Prayer (Matthew 6: 12)." },
      { q: "The garden where Jesus prayed before the arrest is:", o: ["Gethsemane", "Getsemani", "Gethsemane only", "The Upper Room"], a: 0, why: "Gethsemane (Matthew 26: 36)." },
      { q: "The number of the denials of Peter is:", o: ["three", "one", "two", "seven"], a: 0, why: "The denial of Peter (Matthew 26: 69–75)." },
      { q: "The inscription on the cross was:", o: ["'Jesus of Nazareth, the King of the Jews'", "'Here lies Jesus'", "'The Messiah'", "'The Prophet'"], a: 0, why: "The crucifixion (Matthew 27: 37)." }
    ],
    essay: [
      { q: "Study the baptism and temptation of Jesus, and the call and demands of discipleship, with reference to the texts. Derive four lessons from each.", marks: 25, outline: [
        "The baptism of Jesus (Matthew 3: 13–17): (1) the coming of Jesus (the Jordan, the request to John); (2) the baptism (the going down into the water, the coming up); (3) the opening of the heavens (the descent of the Spirit as a dove); (4) the voice of the Father ('this is my beloved Son, in whom I am well pleased')",
        "The temptation of Jesus (Matthew 4: 1–11): (1) the leading of the Spirit (the wilderness, the forty days, the fasting); (2) the first temptation (the bread — 'if thou be the Son of God... turn these stones into bread' — the refusal: 'Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God'); (3) the second temptation (the pinnacle — 'cast thyself down' — the refusal: 'Thou shalt not tempt the Lord thy God'); (4) the third temptation (the kingdoms — 'all these things will I give thee, if thou wilt fall down and worship me' — the refusal: 'Get thee behind me, Satan'); (5) the ministering of the angels",
        "The call and demands of discipleship (Matthew 4: 18–25, 8: 18–22, 9: 9–13; Mark 1: 16–20, 2: 13–17; Luke 5: 1–11, 9: 57–63, 14: 25–33): (1) the call of the fishermen ('follow me, and I will make you fishers of men' — the leaving of the nets); (2) the call of Matthew (the tax collector — 'follow me'); (3) the demands (the cost — 'count the cost', the denial of the self, the carrying of the cross, the priority of the kingdom)",
        "Lessons of the baptism and temptation: (1) the obedience (the submission to the plan of God — the baptism); (2) the sonship (the affirmation of the Father — the beloved Son); (3) the resistance (the refusal of the temptation — the Word of God); (4) the dependence (the ministering of the angels — the strength of God)",
        "Lessons of the call and demands: (1) the immediacy (the leaving of the nets — the response to the call); (2) the cost (the denial of the self, the cross — the price of the discipleship); (3) the priority (the kingdom first — the counting of the cost); (4) the purpose (the fishers of men — the mission of the disciple)"
      ] },
      { q: "Study the trials of Jesus (Gethsemane, the denial of Peter, the condemnation) and the crucifixion, burial and resurrection, with reference to the texts. Derive four lessons from each.", marks: 25, outline: [
        "The trials of Jesus (Matthew 26: 36–56, 69–75, 47–75): (1) Gethsemane (the prayer — 'not my will, but thy will be done', the sleep of the disciples — 'could ye not watch with me one hour?'); (2) the arrest (the kiss of Judas, the flight of the disciples); (3) the denial of Peter (the three denials, the crowing of the cock, the weeping — 'the Lord remember me'); (4) the condemnation (the trial before the Sanhedrin — the accusation of the blasphemy; Pilate — 'I find no fault in this man'; Herod — the mockery; the verdict — 'the King of the Jews')",
        "The crucifixion, burial and resurrection (Matthew 27: 32–66, 28: 1–10): (1) the carrying of the cross (the Simson of Cyrene); (2) the mocking (the soldiers, the passersby, the priests, the thieves); (3) the inscription ('Jesus of Nazareth, the King of the Jews'); (4) the darkness (the three hours, the rending of the veil); (5) the death ('My God, my God, why hast thou forsaken me?' — 'it is finished' — the bowing of the head); (6) the burial (the tomb of Joseph of Arimathea, the stone, the guard); (7) the resurrection (the earthquake, the angel, the empty tomb, the appearance to the women — 'he is not here, for he is risen')",
        "Lessons of the trials: (1) the submission (the prayer in Gethsemane — the will of the Father); (2) the weakness of man (the denial of Peter — the consequence of the weakness); (3) the innocence (the trial — 'I find no fault' — the injustice); (4) the endurance (the suffering — the witness of the faith)",
        "Lessons of the crucifixion, burial and resurrection: (1) the sacrifice (the cross — the atonement, the redemption); (2) the burial (the confirmation of the death — the reality); (3) the resurrection (the victory — the defeat of the death, the hope); (4) the commission (the appearance — the Great Commission, the promise of the presence)",
        "The application: the submission, the endurance, the faith in the sacrifice, and the hope of the resurrection"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section B, Themes 1–5 (the Synoptic Gospels):" },
      { k: "bul", items: [
        "1. Baptism and Temptation of Jesus: The Baptism (Matthew 3: 13–17; Mark 1: 9–11; Luke 3: 21–22); The Temptation (Matthew 4: 1–11; Mark 1: 12–13; Luke 4: 1–13)",
        "2. The Call and Demands of Discipleship (Matthew 4: 18–25; 8: 18–22; 9: 9–13; Mark 1: 16–20; 2: 13–17; Luke 5: 1–11; 9: 57–63; 14: 25–33)",
        "3. Jesus' Teaching on forgiveness (Matthew 6: 12, 14–15; 18: 21–35)",
        "4. The Trials of Jesus: Jesus at Gethsemane (Matthew 26: 36–56; Mark 14: 32–52); Peter's Denials (Matthew 26: 69–75; Mark 14: 66–72; Luke 22: 54–62); Condemnation of Jesus (Matthew 26: 47–75; Mark 14: 53–72; Luke 22: 66–71; 23: 1–12)",
        "5. The Crucifixion, Burial and Resurrection of Jesus: Crucifixion and burial (Matthew 27: 32–66; Mark 15: 16–47; Luke 23: 26–56); The Resurrection (Matthew 28: 1–10; Mark 16: 1–14; Luke 24: 1–35)"
      ] }
    ]
  },
  /* =============== CRS12 · ACTS & THE EPISTLES =============== */
  {
    grade: 12, sem: "Two", icon: "🕊️", period: "CRS12",
    title: "Acts of the Apostles & the Epistles (James, 1 Peter)",
    subtitle: "Fellowship in the Early Church · the Holy Spirit and the Mission to the Gentiles · Opposition to the Gospel · James (faith and works, impartiality, effective prayers) · 1 Peter (good citizenship, Christians among non-Christians, interpersonal relationship)",
    note: "Section B, Themes 6–8 and Section C: Fellowship in the Early Church; the Holy Spirit and the Mission to the Gentiles; Opposition to the Gospel Message; the Epistles of James; the Epistle of 1 Peter. Texts: Acts 1: 15–26, 2, 4: 1–31, 5, 6, 7, 9, 11, 12; James 1: 2–27, 2: 1–13, 2: 14–26, 5: 13–18; 1 Peter 2: 1–25, 2: 13–17, 5: 1–11.",
    objectives: [
      "Study the fellowship in the early church (the choosing of Matthias, the growth, the sharing, the trial of Ananias and Sapphira, the appointment of the seven)",
      "Study the Holy Spirit at Pentecost and the mission to the Gentiles (the conversion of Cornelius)",
      "Study the opposition to the gospel message (the arrest, the persecution, the martyrdom of Stephen, the scattering)",
      "Study the Epistles of James (faith and works, impartiality, effective prayers)",
      "Study the Epistle of 1 Peter (good citizenship, Christians living among non-Christians, interpersonal relationship among Christians)",
      "Derive the lessons of the early church and the epistles"
    ],
    terms: [
      { t: "The fellowship in the early church", d: "The fellowship of the believers (the devotion to the apostles' doctrine, the fellowship, the breaking of bread, the prayers) (Acts 2: 42–47).", x: "The fellowship" },
      { t: "The choosing of Matthias", d: "The choosing of Matthias (the replacement of Judas, the casting of the lots) (Acts 1: 15–26).", x: "The twelfth apostle" },
      { t: "Pentecost", d: "The day of Pentecost (the outpouring of the Holy Spirit, the tongues of fire, the preaching of Peter, the three thousand) (Acts 2).", x: "The birthday of the church" },
      { t: "The sharing", d: "The sharing of the possessions (the selling of the lands, the laying at the feet of the apostles) (Acts 4: 32–37).", x: "The common possession" },
      { t: "Ananias and Sapphira", d: "The trial of Ananias and Sapphira (the deceit, the withholding, the judgment) (Acts 5: 1–11).", x: "The deceit" },
      { t: "The seven", d: "The appointment of the seven (the service of the tables, the choosing of Stephen and the six) (Acts 6: 1–6).", x: "The deacons" },
      { t: "The mission to the Gentiles", d: "The mission to the Gentiles (the vision of Peter, the conversion of Cornelius) (Acts 9; 11: 1–18).", x: "The Gentile" },
      { t: "Opposition to the gospel", d: "The opposition to the gospel message (the arrest of the apostles, the persecution, the martyrdom of Stephen, the scattering) (Acts 4: 1–31, 5: 17–42, 6: 8–9, 7: 1–10, 12: 1–24).", x: "The persecution" },
      { t: "Stephen", d: "The first martyr (the speech, the stoning, the vision of the Son of Man) (Acts 7).", x: "The first martyr" },
      { t: "Faith and works", d: "The teaching of James on the faith and the works (the faith without the works is dead, the example of Abraham) (James 2: 14–26).", x: "The faith and the works" },
      { t: "Impartiality", d: "The teaching of James on the impartiality (the showing of partiality, the rich and the poor, the royal law) (James 2: 1–13).", x: "The impartiality" },
      { t: "Effective prayers", d: "The teaching of James on the effective prayers (the prayer of the righteous, the example of Elijah) (James 5: 13–18).", x: "The prayer" },
      { t: "Good citizenship", d: "The teaching of 1 Peter on the good citizenship (the submission to the authorities, the honouring of the king) (1 Peter 2: 13–17).", x: "The citizenship" },
      { t: "Christians among non-Christians", d: "The teaching of 1 Peter on the Christian among the non-Christians (the conduct, the suffering, the hope) (1 Peter 2: 1–25).", x: "The conduct" },
      { t: "Interpersonal relationship", d: "The teaching of 1 Peter on the interpersonal relationship (the submission, the reverence, the love) (1 Peter 5: 1–11).", x: "The relationship" }
    ],
    tf: [
      { s: "The Holy Spirit was poured out on the day of Pentecost.", a: "True", why: "The Holy Spirit at Pentecost (Acts 2)." },
      { s: "Matthias was chosen to replace Judas.", a: "True", why: "The choosing of Matthias (Acts 1: 15–26)." },
      { s: "Stephen was the first martyr of the church.", a: "True", why: "The martyrdom of Stephen (Acts 7)." },
      { s: "The faith without the works is alive (according to James).", a: "False", why: "The teaching of James — the faith without the works is DEAD (James 2: 17, 26)." },
      { s: "1 Peter teaches the good citizenship (the submission to the authorities).", a: "True", why: "Good citizenship (1 Peter 2: 13–17)." }
    ],
    mcq: [
      { q: "The outpouring of the Holy Spirit took place on the day of:", o: ["Pentecost", "the Passover", "the Tabernacles", "the Epiphany"], a: 0, why: "The Holy Spirit at Pentecost (Acts 2)." },
      { q: "The number of the souls added on the day of Pentecost is about:", o: ["three thousand", "five thousand", "ten thousand", "two thousand"], a: 0, why: "The three thousand (Acts 2: 41)." },
      { q: "The first martyr of the church is:", o: ["Stephen", "Peter", "Paul", "James"], a: 0, why: "The martyrdom of Stephen (Acts 7)." },
      { q: "The teaching of James on the faith and the works is that the faith without the works is:", o: ["dead", "alive", "strong", "weak only"], a: 0, why: "Faith and works (James 2: 17, 26)." },
      { q: "The example of the effective prayer in James is:", o: ["Elijah", "Moses", "David", "Abraham"], a: 0, why: "Effective prayers (James 5: 17–18)." },
      { q: "The teaching of 1 Peter on the good citizenship is the:", o: ["the submission to the authorities", "the rebellion against the king", "the withdrawal from the society", "the contempt of the law"], a: 0, why: "Good citizenship (1 Peter 2: 13–17)." }
    ],
    essay: [
      { q: "Study the fellowship in the early church and the Holy Spirit and the mission to the Gentiles, with reference to the texts. Derive four lessons from each.", marks: 25, outline: [
        "The fellowship in the early church (Acts 1: 15–26, 2: 41–47, 4: 32–37, 5: 1–11, 6: 2–6): (1) the choosing of Matthias (the replacement of Judas — the restoration of the number of the apostles); (2) the growth (the addition of the three thousand, the daily increase); (3) the devotion (the apostles' doctrine, the fellowship, the breaking of bread, the prayers); (4) the sharing (the selling of the lands, the common possession, the distribution); (5) the trial of Ananias and Sapphira (the deceit, the withholding, the judgment — the seriousness of the fellowship); (6) the appointment of the seven (the service of the tables, the ministry of the Word)",
        "The Holy Spirit and the mission to the Gentiles (Acts 2; 9; 11: 1–18): (1) Pentecost (the outpouring of the Spirit, the tongues of fire, the preaching of Peter — the reproach, the promise, the invitation); (2) the conversion of Cornelius (the vision of Peter — 'what God hath cleansed, that call not thou common', the coming of the Spirit on the Gentiles, the baptism); (3) the breaking of the barrier (the Jew and the Gentile — the one faith, the one Spirit)",
        "Lessons of the fellowship: (1) the unity (the one heart and the one soul — the togetherness); (2) the sharing (the common possession — the care of the poor); (3) the sincerity (the trial of Ananias — the honesty of the fellowship); (4) the order (the appointment of the seven — the organization of the service)",
        "Lessons of the Holy Spirit and the mission: (1) the power (the outpouring of the Spirit — the boldness of the witness); (2) the universality (the Gentile — the breaking of the barrier); (3) the sovereignty of God (the cleansing — 'what God hath cleansed'); (4) the response (the baptism — the incorporation into the church)",
        "The application: the unity, the sharing, the sincerity, the order, the power, the universality, and the response"
      ] },
      { q: "Study the opposition to the gospel message, and the teachings of the Epistles of James and 1 Peter, with reference to the texts. Derive four lessons from each.", marks: 25, outline: [
        "The opposition to the gospel message (Acts 4: 1–31, 5: 17–42, 6: 8–9, 7: 1–10, 12: 1–24): (1) the arrest of the apostles (the Sadducees, the resurrection, the release by the angel); (2) the growth in the midst of the persecution (the increase of the number of the disciples); (3) the persecution (the scattering, the flight); (4) the martyrdom of Stephen (the speech, the vision, the stoning — the first witness); (5) the conversion of Saul (the road to Damascus, the blindness, the baptism, the witness)",
        "The Epistles of James (James 1: 2–27, 2: 1–13, 2: 14–26, 5: 13–18): (1) faith and works (the faith without the works is dead, the example of Abraham, the example of Rahab); (2) impartiality (the showing of partiality, the rich and the poor, the royal law — 'thou shalt love thy neighbour as thyself'); (3) effective prayers (the prayer of the righteous availeth much, the example of Elijah — the withholding of the rain, the sending of the rain)",
        "The Epistle of 1 Peter (1 Peter 2: 1–25, 2: 13–17, 5: 1–11): (1) good citizenship (the submission to the ordinances of men, the honouring of the king, the doing of the good); (2) Christians living among non-Christians (the conduct, the suffering for the right, the hope, the example of Christ — the suffering without the offence); (3) interpersonal relationship among Christians (the submission one to another, the reverence, the love, the hospitality, the use of the gifts)",
        "Lessons of the opposition: (1) the cost of the witness (the persecution, the martyrdom — the price); (2) the endurance (the growth in the midst of the persecution); (3) the witness (Stephen — the first martyr, the imitation of Christ); (4) the sovereignty of God (the conversion of Saul — the grace)",
        "Lessons of James and 1 Peter: (1) the faith and the works (the alive faith — the demonstration); (2) the impartiality (the love of the neighbour — the royal law); (3) the prayer (the effective prayer — the power of the righteous); (4) the citizenship (the submission, the conduct, the relationship — the witness in the society)",
        "The application: the endurance, the witness, the cost, the faith and the works, the impartiality, the prayer, and the citizenship"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section B, Themes 6–8 and Section C:" },
      { k: "bul", items: [
        "6. Fellowship in the Early Church (Acts 1: 15–26; 2: 41–47; 4: 32–37; 5: 1–11; 6: 2–6)",
        "7. The Holy Spirit and the Mission to the Gentiles: The Holy Spirit at Pentecost (Acts 2); Mission to the Gentiles (Acts 9; 11: 1–18)",
        "8. Opposition to the Gospel Message (Acts 4: 1–31; 5: 17–42; 6: 8–9; 7: 1–10; 12: 1–24)",
        "Section C — Themes from selected Epistles:",
        "1. The Epistles of James: Faith and Works (James 1: 2–27; 2: 14–26); Impartiality (James 2: 1–13); Effective Prayers (James 1: 2–8; 5: 13–18)",
        "2. The Epistle of 1 Peter: Good Citizenship (1 Peter 2: 13–17); Christians Living among non-Christians (1 Peter 2: 1–25); Interpersonal Relationship among Christians (1 Peter 5: 1–11)",
        "Suggested reading: The Holy Bible (Revised Standard Version); New Clarendon Bible Series; Bright, John — History and Religion of Israel; Anderson, B. W. — The Living World of the Old Testament; Kee, H. C. & Young — The Living World of the New Testament"
      ] }
    ]
  }
  ]
};
window.WA_SUBJECTS.crs = window.WA_crs;
