/* Computer Science, Grades 10–12 (Senior High). Original computing units.
   No official Liberian Computer Science syllabus was supplied, so these
   are original teaching resources broadly in the shape of a West African
   senior high Computer Studies course: number systems, logic gates,
   architecture, operating systems, Python-style programming, databases
   and SQL, spreadsheets, networks, the web, security and ethics, systems
   development, algorithms, AI and a capstone project. Every problem can
   be worked on paper. Teachers should compare them with the school's
   approved scheme of work before use. Not an official transcription.

   Same unit shape as data-cs.js so GEN_SC and the computing lesson plans
   render it unchanged.
*/
var CS_CURRICULUM_1012 = 
[
  {
    "grade": 10,
    "period": "I",
    "sem": "One",
    "icon": "📜",
    "csPlan": true,
    "title": "History and Evolution of Computing",
    "subtitle": "Computer Science · Original senior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Written for classes that may have no computer lab: every conversion, truth table, trace, query and program in the unit can be done on paper, and a shared device extends it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary precisely in speech, writing and examination answers.",
      "Solve the unit's problems on paper — conversions, truth tables, traces, queries, formulas or designs — showing every step of working.",
      "Evaluate a technology choice for its safety, legality, cost and effect on people in Liberia."
    ],
    "objectives": [
      "Define the key terms in “History and Evolution of Computing” precisely and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm, program or procedure connected with this unit, on paper.",
      "Classify examples into the unit's two groups and justify each placement.",
      "Solve a worked example step by step, showing every line of working, and state the answer in a full sentence with its unit or type.",
      "Apply the unit's ideas to a fictional Liberian business, ministry, clinic or school scenario.",
      "Find and correct a bug in a set of steps, a circuit, a query or a program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared test log.",
      "Explain one Liberian example of this unit's idea (mobile money, the ACE submarine cable, a hospital record, a bank, the national examination system or a radio station)."
    ],
    "safeguard": "A senior high computing lesson uses paper traces, truth tables, printed listings and, when one is present, a shared school computer or the teacher's own device. Students never share passwords, PINs or one-time codes, never install software on a school machine without permission, and never photograph, record or post a classmate without consent. A program written in class must never be used to guess a password, send bulk messages or enter another person's account — that is a crime, not a prank. If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "Computing developed from counting aids (abacus, Napier's bones, Pascal's calculator, Leibniz's stepped reckoner) through Babbage's mechanical designs and Lovelace's first algorithm, Hollerith's punched cards, Turing's theory of computation and the electronic first generation (ENIAC), to the stored-program computer, transistors, integrated circuits, the microprocessor, personal computers, the internet and smartphones. Each step changed who could use a computer and for what.",
    "focus": [
      "Worked demonstration on paper",
      "Pair programming and debugging",
      "Liberian case scenario",
      "Practical and period check"
    ],
    "terms": [
      {
        "t": "abacus",
        "d": "an ancient counting frame of beads on rods, the earliest calculating aid",
        "x": "In this unit, abacus means an ancient counting frame of beads on rods, the earliest calculating aid."
      },
      {
        "t": "Analytical Engine",
        "d": "Charles Babbage's 1830s design for a programmable mechanical computer, never fully built",
        "x": "In this unit, Analytical Engine means Charles Babbage's 1830s design for a programmable mechanical computer, never fully built."
      },
      {
        "t": "Ada Lovelace",
        "d": "the mathematician who wrote the first published algorithm intended for a machine, for Babbage's engine",
        "x": "In this unit, Ada Lovelace means the mathematician who wrote the first published algorithm intended for a machine, for Babbage's engine."
      },
      {
        "t": "punched card",
        "d": "a stiff card with holes that store data or instructions, used from Hollerith's 1890 census machines to the 1970s",
        "x": "In this unit, punched card means a stiff card with holes that store data or instructions, used from Hollerith's 1890 census machines to the 1970s."
      },
      {
        "t": "Alan Turing",
        "d": "the mathematician whose 1936 model of a universal machine defined what is computable",
        "x": "In this unit, Alan Turing means the mathematician whose 1936 model of a universal machine defined what is computable."
      },
      {
        "t": "ENIAC",
        "d": "the 1945 electronic general-purpose computer built with about 18,000 vacuum tubes",
        "x": "In this unit, ENIAC means the 1945 electronic general-purpose computer built with about 18,000 vacuum tubes."
      },
      {
        "t": "stored-program concept",
        "d": "the design in which instructions and data are held in the same memory, so a machine can be reprogrammed without rewiring",
        "x": "In this unit, stored-program concept means the design in which instructions and data are held in the same memory, so a machine can be reprogrammed without rewiring."
      },
      {
        "t": "transistor",
        "d": "the small solid-state switch (1947) that replaced the vacuum tube and began the second generation",
        "x": "In this unit, transistor means the small solid-state switch (1947) that replaced the vacuum tube and began the second generation."
      },
      {
        "t": "integrated circuit",
        "d": "many transistors on one silicon chip (late 1950s), the basis of the third generation",
        "x": "In this unit, integrated circuit means many transistors on one silicon chip (late 1950s), the basis of the third generation."
      },
      {
        "t": "microprocessor",
        "d": "a complete processor on one chip (1971), the basis of personal computers and phones",
        "x": "In this unit, microprocessor means a complete processor on one chip (1971), the basis of personal computers and phones."
      },
      {
        "t": "personal computer",
        "d": "a microcomputer built for one user, from the late 1970s",
        "x": "In this unit, personal computer means a microcomputer built for one user, from the late 1970s."
      },
      {
        "t": "World Wide Web",
        "d": "the system of linked pages invented by Tim Berners-Lee in 1989–91 that made the internet usable by the public",
        "x": "In this unit, World Wide Web means the system of linked pages invented by Tim Berners-Lee in 1989–91 that made the internet usable by the public."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “abacus” in this unit?",
        "a": "an ancient counting frame of beads on rods, the earliest calculating aid."
      },
      {
        "q": "What is meant by “Analytical Engine” in this unit?",
        "a": "Charles Babbage's 1830s design for a programmable mechanical computer, never fully built."
      },
      {
        "q": "What is meant by “Ada Lovelace” in this unit?",
        "a": "the mathematician who wrote the first published algorithm intended for a machine, for Babbage's engine."
      },
      {
        "q": "What is meant by “punched card” in this unit?",
        "a": "a stiff card with holes that store data or instructions, used from Hollerith's 1890 census machines to the 1970s."
      },
      {
        "q": "What is meant by “Alan Turing” in this unit?",
        "a": "the mathematician whose 1936 model of a universal machine defined what is computable."
      },
      {
        "q": "What is meant by “ENIAC” in this unit?",
        "a": "the 1945 electronic general-purpose computer built with about 18,000 vacuum tubes."
      },
      {
        "q": "What is meant by “stored-program concept” in this unit?",
        "a": "the design in which instructions and data are held in the same memory, so a machine can be reprogrammed without rewiring."
      },
      {
        "q": "What is meant by “transistor” in this unit?",
        "a": "the small solid-state switch (1947) that replaced the vacuum tube and began the second generation."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A Grade 10 essay claims that 'the computer was invented in 1945 in America and reached Liberia in 2011 with the internet cable', and the class is asked whether that is history or a slogan."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Rebuild the sentence with milestones: the programmable machine was designed in the 1830s and its first algorithm written in 1843, the theory came in 1936, electronic stored-program machines in the late 1940s, personal computers in Liberian offices in the 1980s, phones in the 2000s, and the ACE cable in 2011 widened the connection — each with a named person or device."
      },
      {
        "q": "State this unit idea in your own words: The stored-program concept — keeping instructions and data in the same memory — is what makes a computer general-purpose.",
        "a": "The stored-program concept — keeping instructions and data in the same memory — is what makes a computer general-purpose."
      },
      {
        "q": "State this unit idea in your own words: Ada Lovelace wrote the first published algorithm for a machine, and Alan Turing showed what any computing machine can and cannot compute.",
        "a": "Ada Lovelace wrote the first published algorithm for a machine, and Alan Turing showed what any computing machine can and cannot compute."
      },
      {
        "q": "Why is the stored-program concept called the basis of the general-purpose computer?",
        "a": "Because holding instructions in memory lets the same hardware run any program simply by loading new instructions, instead of being rewired for each task."
      },
      {
        "q": "Name three eras of computing by who used the machines.",
        "a": "Mainframe era (governments, banks), personal-computer era (offices and homes), mobile era (almost everyone with a phone)."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “History and Evolution of Computing” Is"
      },
      {
        "k": "p",
        "t": "Computing has a history of ideas as much as machines. The **abacus** and **Napier's bones** were calculating aids; **Babbage's Analytical Engine** was the first design for a programmable machine and **Ada Lovelace** wrote the first published algorithm for it; **Alan Turing** defined what any computer can compute; the **stored-program concept** put instructions and data in the same memory; and the **transistor**, the **integrated circuit** and the **microprocessor** shrank a hall into a hand. Liberia's own timeline — from the telegraph and radio to mobile money and the ACE cable — sits inside that story. Students who write that the computer was invented in one year and reached Liberia with one cable have collapsed a century of ideas into a slogan. Rebuild the sentence with milestones: the programmable machine was designed in the 1830s and its first algorithm written in 1843, the theory came in 1936, electronic stored-program machines in the late 1940s, personal computers in Liberian offices in the 1980s, phones in the 2000s, and the ACE cable in 2011 widened the connection — each with a named person or device. The stored-program concept — keeping instructions and data in the same memory — is what makes a computer general-purpose. Ada Lovelace wrote the first published algorithm for a machine, and Alan Turing showed what any computing machine can and cannot compute."
      },
      {
        "k": "p",
        "t": "Computing developed from counting aids (abacus, Napier's bones, Pascal's calculator, Leibniz's stepped reckoner) through Babbage's mechanical designs and Lovelace's first algorithm, Hollerith's punched cards, Turing's theory of computation and the electronic first generation (ENIAC), to the stored-program computer, transistors, integrated circuits, the microprocessor, personal computers, the internet and smartphones. Each step changed who could use a computer and for what."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: The stored-program concept — keeping instructions and data in the same memory — is what makes a computer general-purpose. Ada Lovelace wrote the first published algorithm for a machine, and Alan Turing showed what any computing machine can and cannot compute."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Ideas in This Unit"
      },
      {
        "k": "p",
        "t": "Each idea below is a working definition for Grade 10. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
      },
      {
        "k": "table",
        "head": [
          "Term",
          "What it means",
          "A sentence that uses it"
        ],
        "rows": [
          [
            "abacus",
            "an ancient counting frame of beads on rods, the earliest calculating aid",
            "In this unit, abacus means an ancient counting frame of beads on rods, the earliest calculating aid."
          ],
          [
            "Analytical Engine",
            "Charles Babbage's 1830s design for a programmable mechanical computer, never fully built",
            "In this unit, Analytical Engine means Charles Babbage's 1830s design for a programmable mechanical computer, never fully built."
          ],
          [
            "Ada Lovelace",
            "the mathematician who wrote the first published algorithm intended for a machine, for Babbage's engine",
            "In this unit, Ada Lovelace means the mathematician who wrote the first published algorithm intended for a machine, for Babbage's engine."
          ],
          [
            "punched card",
            "a stiff card with holes that store data or instructions, used from Hollerith's 1890 census machines to the 1970s",
            "In this unit, punched card means a stiff card with holes that store data or instructions, used from Hollerith's 1890 census machines to the 1970s."
          ],
          [
            "Alan Turing",
            "the mathematician whose 1936 model of a universal machine defined what is computable",
            "In this unit, Alan Turing means the mathematician whose 1936 model of a universal machine defined what is computable."
          ],
          [
            "ENIAC",
            "the 1945 electronic general-purpose computer built with about 18,000 vacuum tubes",
            "In this unit, ENIAC means the 1945 electronic general-purpose computer built with about 18,000 vacuum tubes."
          ],
          [
            "stored-program concept",
            "the design in which instructions and data are held in the same memory, so a machine can be reprogrammed without rewiring",
            "In this unit, stored-program concept means the design in which instructions and data are held in the same memory, so a machine can be reprogrammed without rewiring."
          ],
          [
            "transistor",
            "the small solid-state switch (1947) that replaced the vacuum tube and began the second generation",
            "In this unit, transistor means the small solid-state switch (1947) that replaced the vacuum tube and began the second generation."
          ],
          [
            "integrated circuit",
            "many transistors on one silicon chip (late 1950s), the basis of the third generation",
            "In this unit, integrated circuit means many transistors on one silicon chip (late 1950s), the basis of the third generation."
          ],
          [
            "microprocessor",
            "a complete processor on one chip (1971), the basis of personal computers and phones",
            "In this unit, microprocessor means a complete processor on one chip (1971), the basis of personal computers and phones."
          ],
          [
            "personal computer",
            "a microcomputer built for one user, from the late 1970s",
            "In this unit, personal computer means a microcomputer built for one user, from the late 1970s."
          ],
          [
            "World Wide Web",
            "the system of linked pages invented by Tim Berners-Lee in 1989–91 that made the internet usable by the public",
            "In this unit, World Wide Web means the system of linked pages invented by Tim Berners-Lee in 1989–91 that made the internet usable by the public."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Tell Them Apart"
      },
      {
        "k": "bul",
        "items": [
          "**Calculating aid** — helps a person calculate (abacus); **computer** — follows a stored program by itself.",
          "**Mechanical** (Babbage) → **electromechanical** (relays) → **electronic** (tubes, transistors, chips).",
          "**Special-purpose** machines do one job; the **stored-program** computer does any job it is programmed for.",
          "**Hardware milestones** (transistor, chip) and **idea milestones** (algorithm, universal machine, web) both matter.",
          "**Generation** is named by the switching part; **era** is named by who could use the machine."
        ]
      },
      {
        "k": "table",
        "head": [
          "Milestone",
          "Approximate date",
          "Why it mattered"
        ],
        "rows": [
          [
            "Abacus",
            "Ancient",
            "Counting made visible and fast"
          ],
          [
            "Babbage's Analytical Engine and Lovelace's algorithm",
            "1830s–1843",
            "The idea of a programmable machine and its first program"
          ],
          [
            "Hollerith's punched-card tabulator",
            "1890",
            "Data processing for a national census"
          ],
          [
            "Turing's universal machine paper",
            "1936",
            "Defined what any computer can compute"
          ],
          [
            "ENIAC and the stored-program concept",
            "1945–1949",
            "Electronic speed; reprogramming without rewiring"
          ],
          [
            "Transistor, integrated circuit, microprocessor",
            "1947, 1958, 1971",
            "Each step smaller, faster, cheaper"
          ]
        ]
      },
      {
        "k": "p",
        "t": "A second table for this unit, so the distinction can be practised twice:"
      },
      {
        "k": "table",
        "head": [
          "Era",
          "Who used computers",
          "Liberian connection"
        ],
        "rows": [
          [
            "Mainframe era (1950s–60s)",
            "Governments, banks, universities",
            "Foreign banks and the airline used machines abroad"
          ],
          [
            "Minicomputer era (1960s–70s)",
            "Departments and laboratories",
            "Few, if any, in Liberia"
          ],
          [
            "Personal computer era (1980s–90s)",
            "Offices and some homes",
            "Ministry and NGO offices in Monrovia"
          ],
          [
            "Internet era (1990s–2000s)",
            "Anyone with a connection",
            "Dial-up and satellite links; cyber-cafés"
          ],
          [
            "Mobile era (2000s–)",
            "Almost everyone",
            "Phones outnumber computers; mobile money from 2010"
          ],
          [
            "Broadband and AI era (2011–)",
            "Every sector",
            "ACE submarine cable lands at Monrovia in 2011"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why This Matters in Liberia"
      },
      {
        "k": "p",
        "t": "Liberia's computing story is short and steep. The telegraph and radio came first; the mainframe and minicomputer eras passed largely elsewhere; personal computers reached ministries and NGOs in the 1980s and 1990s; conflict interrupted; then the mobile phone arrived faster than any earlier technology in the country's history, followed by mobile money and, in 2011, the ACE submarine cable. A Grade 10 student sits at the point where Liberians stop only receiving computing history and start writing it — which is why this unit asks for a Liberian timeline beside the world one."
      },
      {
        "k": "p",
        "t": "This course is an **original teaching resource**, not an official syllabus transcription. A school without a computer lab is not a school without Computer Science. Teachers should compare the unit with the school's approved scheme of work before use."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Paper-First Method"
      },
      {
        "k": "p",
        "t": "The class investigation is **“The two-track timeline — world computing and Liberia”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Draw two parallel chalk lines marked 1800, 1850, 1900, 1950, 1975, 2000, 2010 and today: the top for world computing, the bottom for Liberia.",
          "Groups place twelve world milestone cards (Babbage, Lovelace, Hollerith, Turing, ENIAC, stored program, transistor, integrated circuit, microprocessor, personal computer, web, smartphone) and defend each date.",
          "Other groups place Liberian cards (telegraph, radio, first ministry computers, cyber-cafés, mobile phones, mobile money, ACE cable, e-government portals) from class and family research.",
          "The class walks both lines and, at each date, states what Liberians could and could not do with computing at that moment.",
          "Write the finished timelines as a two-column table with one sentence per row on why each milestone mattered; record any card the class moved after debate."
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Worked Example in Prose"
      },
      {
        "k": "p",
        "t": "**Problem.** Explain, in five steps, how the idea of a computer moved from Babbage's Analytical Engine to the phone in a Liberian pocket, naming one person or invention at each step and saying what changed."
      },
      {
        "k": "num",
        "items": [
          "Babbage designs a programmable mechanical engine (1830s); Lovelace writes an algorithm for it — the idea of a program exists before any machine runs one.",
          "Turing (1936) shows that one universal machine can compute anything computable given the right program — the theory behind general-purpose computers.",
          "ENIAC (1945) proves electronic speed; the stored-program concept (1945–49) puts program and data in one memory so reprogramming needs no rewiring.",
          "The transistor (1947), integrated circuit (1958) and microprocessor (1971) shrink the machine and its price by orders of magnitude.",
          "Personal computers (1970s–80s), the web (1991) and the smartphone (2007) put a stored-program computer with a network connection in the pocket — reaching Liberia mainly through the phone."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** Program (Babbage, Lovelace) → theory (Turing) → electronic stored-program machine (ENIAC and after) → shrinking hardware (transistor, chip, microprocessor) → personal, networked, mobile computing."
      },
      {
        "k": "p",
        "t": "Notice the method: name what you know, run one step at a time, write the result of each step, then state the answer in a full sentence. That is the same habit a Physics class uses on a numerical problem; here the 'calculation' is a trace, a conversion, a truth table, a formula, a query or a debug."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Common Mistakes"
      },
      {
        "k": "bul",
        "items": [
          "Treating the history as a list of machines only, forgetting the ideas — the algorithm, the universal machine, the stored program.",
          "Placing the web before the internet; the internet's networks came first, the web made them usable.",
          "Assuming Liberia's history mirrors the world's; Liberia largely skipped the desktop era for the phone.",
          "Saying the first computer was 'invented' by one person on one date."
        ]
      },
      {
        "k": "p",
        "t": "The class rule still holds when a mistake appears: **we try, we debug, we do not laugh at a mistake.** A bug is in the steps, not in the person."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Safety, Ethics and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN or a one-time code, and nobody installs software on a school machine without permission. A program written in this course is never pointed at another person's account, phone or wallet: guessing a password, sending bulk messages or reading someone's data without consent is a crime under Liberian law, not a prank. Copying a program from a classmate and submitting it as your own is plagiarism. Pair work shares the thinking, not the credit for work you did not do."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered (screenshots, not deletions), and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Pair Roles: Driver and Navigator"
      },
      {
        "k": "p",
        "t": "A computing pair has two jobs that swap. The **driver** writes or works the next step. The **navigator** reads the algorithm or the listing, watches for a bug, and says 'stop' before a wrong line is copied. After five minutes they swap, so both practise both jobs. A third student may sit as **checker** and tick each step on the trace table. Taking turns is a computing skill, not a punishment for having only one computer — or none."
      },
      {
        "k": "table",
        "head": [
          "Role",
          "What this person does",
          "What this person does not do"
        ],
        "rows": [
          [
            "Driver",
            "Works or writes the current step",
            "Does not skip the navigator's 'stop'"
          ],
          [
            "Navigator",
            "Reads the steps and watches for bugs",
            "Does not grab the pencil, the keyboard or the mouse"
          ],
          [
            "Checker",
            "Ticks each step and records one bug on the class chart",
            "Does not laugh at a mistake"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Fictional Liberian Scenario"
      },
      {
        "k": "p",
        "t": "A Grade 10 essay claims that 'the computer was invented in 1945 in America and reached Liberia in 2011 with the internet cable', and the class is asked whether that is history or a slogan."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Rebuild the sentence with milestones: the programmable machine was designed in the 1830s and its first algorithm written in 1843, the theory came in 1936, electronic stored-program machines in the late 1940s, personal computers in Liberian offices in the 1980s, phones in the 2000s, and the ACE cable in 2011 widened the connection — each with a named person or device."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Worked Computing Reasoning"
      },
      {
        "k": "p",
        "t": "Rebuild the sentence with milestones: the programmable machine was designed in the 1830s and its first algorithm written in 1843, the theory came in 1936, electronic stored-program machines in the late 1940s, personal computers in Liberian offices in the 1980s, phones in the 2000s, and the ACE cable in 2011 widened the connection — each with a named person or device."
      },
      {
        "k": "p",
        "t": "When you answer a scenario question, use this three-part shape: (1) name the computing idea (algorithm, data, network, security, binary, database, …); (2) say what a person should do, in order; (3) say why, with a unit term in the reason. Vague good intentions without a term do not yet show that the unit has been learned."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Practise It on Paper"
      },
      {
        "k": "p",
        "t": "The investigation **“The two-track timeline — world computing and Liberia”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
      },
      {
        "k": "table",
        "head": [
          "Paper object",
          "What it stands for",
          "What we write afterwards"
        ],
        "rows": [
          [
            "Two chalk timelines",
            "World and Liberian computing history",
            "A two-column dated table"
          ],
          [
            "Milestone cards",
            "Ideas, people and devices",
            "Date, name, significance for each"
          ],
          [
            "Word card",
            "A key term",
            "The term in a sentence"
          ],
          [
            "Class chart",
            "Cards the class moved after debate",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Ideas Before Machines"
      },
      {
        "k": "p",
        "t": "Lovelace's algorithm ran on no machine in her lifetime; Turing's universal machine was a thought experiment. Yet without the idea of a stored, changeable program there would be no general-purpose computer. A senior high student should be able to explain the stored-program concept as clearly as the transistor."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Stored-Program Concept"
      },
      {
        "k": "p",
        "t": "Early electronic machines were rewired for each task. Holding the instructions in the same memory as the data means a new task is a new set of numbers loaded into memory — no rewiring. That is why one phone runs a calculator, a browser and a mobile-money app: same hardware, different stored programs."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why the History Is Also Political"
      },
      {
        "k": "p",
        "t": "Punched cards counted a census; ENIAC computed artillery tables; the internet began as a military and academic network. Who paid for computing shaped who it served first. A Liberian timeline that names cyber-cafés, mobile money and the ACE cable shows a different order of needs."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Examination Habit: Date, Name, Significance"
      },
      {
        "k": "p",
        "t": "An examination question on computing history rewards three things per milestone: an approximate date, a name (person or machine), and one sentence on why it mattered. 'The transistor, 1947, replaced the vacuum tube and made smaller, cooler, reliable computers possible' is a full mark; 'transistors were invented' is not."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "What a Period Test Asks"
      },
      {
        "k": "p",
        "t": "A fair period test on “History and Evolution of Computing” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit precisely and use each in a sentence.",
          "Solve or trace a problem connected with “History and Evolution of Computing” on paper, showing every line of working.",
          "Classify four examples using “Ideas and people / Devices and components” and justify one placement.",
          "Find and correct a bug in a set of steps, a query or a program, and say what the bug was."
        ]
      },
      {
        "k": "p",
        "t": "Show every step of a tracing or conversion question, the way a Physics script shows working. A bare answer with no steps cannot be given full credit, because the teacher cannot see the method you ran."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Four Weeks of Study"
      },
      {
        "k": "p",
        "t": "A 4-week unit on “History and Evolution of Computing” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
      },
      {
        "k": "table",
        "head": [
          "Week",
          "Study focus",
          "What students leave able to do"
        ],
        "rows": [
          [
            "1",
            "What “History and Evolution of Computing” is, and where it already appears around us.",
            "Say what the unit is about and name two examples from Liberia."
          ],
          [
            "2",
            "Key ideas, distinctions and the unit table.",
            "Use the key terms and complete the distinction tables."
          ],
          [
            "3",
            "A Liberian example and the paper-first method, worked then written.",
            "Run the paper method and write the algorithm, table or report."
          ],
          [
            "4",
            "Worked problems, pair-debug, the computing fair and the period check.",
            "Solve a worked example, debug a bug, and sit the period check."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Check Yourself"
      },
      {
        "k": "p",
        "t": "Close the notes. (1) Say the unit title and one Liberian example. (2) Give the meaning of three terms without looking. (3) Work the paper method once more, showing every step. (4) Name one bug you would look for. (5) Say who you tell if a message asks for a photograph, a PIN or money. If any of those five stalls, go back to the table of terms and the worked example and run them again with a partner. Do not laugh at a bug — including your own."
      },
      {
        "k": "p",
        "t": "This is original supplementary teaching material for Liberian senior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, abacus means an ancient counting frame of beads on rods, the earliest calculating aid.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, Analytical Engine means the mathematician who wrote the first published algorithm intended for a machine, for Babbage's engine.",
        "a": "False",
        "why": "Analytical Engine means Charles Babbage's 1830s design for a programmable mechanical computer, never fully built; the statement describes Ada Lovelace."
      },
      {
        "s": "In this unit, punched card means a stiff card with holes that store data or instructions, used from Hollerith's 1890 census machines to the 1970s.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Every conversion, truth table, trace and program in the unit can be worked on paper; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the code or the steps, not in the person."
      },
      {
        "s": "Students should share passwords, PINs or one-time codes so a partner can finish the work.",
        "a": "False",
        "why": "A password, PIN or one-time code is secret. Sharing one is how accounts and mobile-money wallets are emptied."
      },
      {
        "s": "The stored-program concept — keeping instructions and data in the same memory — is what makes a computer general-purpose.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "The World Wide Web and the internet are two names for the same invention.",
        "a": "False",
        "why": "The internet is the network of networks; the web (1991) is a service of linked pages that runs on it."
      },
      {
        "s": "Ada Lovelace wrote an algorithm for a machine that was never built in her lifetime.",
        "a": "True",
        "why": "Her 1843 notes describe a program for Babbage's Analytical Engine, which was never completed."
      }
    ],
    "classify": {
      "title": "Ideas and people / Devices and components",
      "groups": [
        {
          "name": "Ideas and people",
          "items": [
            "Lovelace's algorithm",
            "Turing's universal machine",
            "the stored-program concept",
            "Berners-Lee's web",
            "Babbage's design",
            "Hollerith's census method"
          ]
        },
        {
          "name": "Devices and components",
          "items": [
            "abacus",
            "ENIAC",
            "transistor",
            "integrated circuit",
            "microprocessor",
            "smartphone"
          ]
        }
      ]
    },
    "diagram": {
      "title": "The computing timeline from Babbage to the smartphone",
      "caption": "Label each part and state what it does in “History and Evolution of Computing”.",
      "parts": [
        {
          "p": "1830s–1843",
          "f": "Babbage's Analytical Engine designed; Lovelace's algorithm"
        },
        {
          "p": "1936",
          "f": "Turing defines the universal computing machine"
        },
        {
          "p": "1945–1949",
          "f": "ENIAC; the stored-program concept"
        },
        {
          "p": "1947, 1958, 1971",
          "f": "transistor, integrated circuit, microprocessor"
        },
        {
          "p": "1977–2007",
          "f": "personal computers, the web (1991), the smartphone"
        }
      ]
    },
    "experiment": {
      "title": "The two-track timeline — world computing and Liberia",
      "aim": "To practise the ideas of “History and Evolution of Computing” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Printed listings, cards and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class test log",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “The two-track timeline — world computing and Liberia” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A Grade 10 essay claims that 'the computer was invented in 1945 in America and reached Liberia in 2011 with the internet cable', and the class is asked whether that is history or a slogan. What should happen next?",
        "a": "Rebuild the sentence with milestones: the programmable machine was designed in the 1830s and its first algorithm written in 1843, the theory came in 1936, electronic stored-program machines in the late 1940s, personal computers in Liberian offices in the 1980s, phones in the 2000s, and the ACE cable in 2011 widened the connection — each with a named person or device."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “History and Evolution of Computing”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's program or trace fails. What do you say, and why?",
        "a": "Remind the class that a bug is in the code or the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the exact line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian working life (a bank, a mobile-money agent, a clinic, a radio station, a business, a ministry).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as a bank's database, a mobile-money transaction, a hospital record, a radio station's schedule or a ministry's website."
      },
      {
        "q": "Write a Liberian computing timeline of six entries with an approximate date and one sentence of significance each.",
        "a": "Accept a reasoned timeline such as: telegraph and radio (early 1900s); first ministry and bank computers (1980s); cyber-cafés (late 1990s–2000s); mobile phones spread (2000s); mobile money launched (about 2010); ACE submarine cable lands (2011); e-government and online results (2010s–)."
      },
      {
        "q": "Explain to a Grade 7 class why a phone that plays music, sends money and browses the web is one machine and not three, using the stored-program concept.",
        "a": "The phone has one processor and one memory; each app is a different set of stored instructions loaded into that memory, so the same hardware does different jobs without any rewiring."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “The two-track timeline — world computing and Liberia” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, squared paper and printed listings",
      "A class computing chart and test log",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's device, kept dry and in sight"
    ],
    "aids": [
      "Word cards — abacus, Analytical Engine, Ada Lovelace",
      "A flowchart or trace table of “The two-track timeline — world computing and Liberia”",
      "World and Liberian milestone cards for a two-track timeline",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing term and what it means.",
      "Work this week's paper method (a conversion, a truth table, a trace, a query or a design) again with a friend — no device needed.",
      "Find one example of this unit's idea in your community (a bank, a mobile-money kiosk, a clinic, a radio station, a business or a ministry office) and write a paragraph about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written trace, conversion, truth table or query with full working",
      "Pair-debug observed against the class test log",
      "A short written response to the Liberian case scenario"
    ],
    "worked": [
      {
        "q": "Who wrote the first published algorithm for a machine, and for which machine?",
        "steps": [
          "1843; Babbage's design."
        ],
        "a": "Ada Lovelace, for Babbage's Analytical Engine"
      },
      {
        "q": "What did Turing's 1936 paper establish?",
        "steps": [
          "A universal machine model."
        ],
        "a": "What any computing machine can and cannot compute"
      },
      {
        "q": "State the stored-program concept in one sentence.",
        "steps": [
          "Instructions and data share memory."
        ],
        "a": "Instructions and data are held in the same memory, so a machine is reprogrammed by loading new instructions, not by rewiring"
      },
      {
        "q": "Put in date order: microprocessor, transistor, ENIAC, integrated circuit.",
        "steps": [
          "1945, 1947, 1958, 1971."
        ],
        "a": "ENIAC, transistor, integrated circuit, microprocessor"
      },
      {
        "q": "Which came first, the internet or the World Wide Web?",
        "steps": [
          "Networks before pages."
        ],
        "a": "The internet; the web (1991) made it public"
      },
      {
        "q": "About how many vacuum tubes did ENIAC use?",
        "steps": [
          "Roughly eighteen thousand."
        ],
        "a": "About 18,000"
      },
      {
        "q": "In which year did the ACE submarine cable land at Monrovia?",
        "steps": [
          "Broadband era begins."
        ],
        "a": "2011"
      },
      {
        "q": "Give the date, name and significance of the transistor in one sentence.",
        "steps": [
          "1947; solid-state switch; replaced tubes."
        ],
        "a": "1947, the transistor, replaced the vacuum tube and made smaller, cooler, reliable computers possible"
      }
    ]
  },
  {
    "grade": 10,
    "period": "II",
    "sem": "One",
    "icon": "🔢",
    "csPlan": true,
    "title": "Number Systems — Binary, Octal and Hexadecimal",
    "subtitle": "Computer Science · Original senior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Written for classes that may have no computer lab: every conversion, truth table, trace, query and program in the unit can be done on paper, and a shared device extends it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary precisely in speech, writing and examination answers.",
      "Solve the unit's problems on paper — conversions, truth tables, traces, queries, formulas or designs — showing every step of working.",
      "Evaluate a technology choice for its safety, legality, cost and effect on people in Liberia."
    ],
    "objectives": [
      "Define the key terms in “Number Systems — Binary, Octal and Hexadecimal” precisely and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm, program or procedure connected with this unit, on paper.",
      "Classify examples into the unit's two groups and justify each placement.",
      "Solve a worked example step by step, showing every line of working, and state the answer in a full sentence with its unit or type.",
      "Apply the unit's ideas to a fictional Liberian business, ministry, clinic or school scenario.",
      "Find and correct a bug in a set of steps, a circuit, a query or a program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared test log.",
      "Explain one Liberian example of this unit's idea (mobile money, the ACE submarine cable, a hospital record, a bank, the national examination system or a radio station)."
    ],
    "safeguard": "A senior high computing lesson uses paper traces, truth tables, printed listings and, when one is present, a shared school computer or the teacher's own device. Students never share passwords, PINs or one-time codes, never install software on a school machine without permission, and never photograph, record or post a classmate without consent. A program written in class must never be used to guess a password, send bulk messages or enter another person's account — that is a crime, not a prank. If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "A number system has a base and uses place values that are powers of the base. Decimal is base 10, binary base 2, octal base 8 and hexadecimal base 16 (digits 0–9 and A–F). Convert to decimal by multiplying each digit by its place value; convert from decimal by repeated division by the base, reading the remainders upwards. Binary groups of four bits map directly to hexadecimal digits, and groups of three to octal.",
    "focus": [
      "Worked demonstration on paper",
      "Pair programming and debugging",
      "Liberian case scenario",
      "Practical and period check"
    ],
    "terms": [
      {
        "t": "number system",
        "d": "a way of writing numbers using a fixed set of digits and place values based on a base",
        "x": "In this unit, number system means a way of writing numbers using a fixed set of digits and place values based on a base."
      },
      {
        "t": "base",
        "d": "the number of different digits a system uses and the multiplier between neighbouring place values; also called the radix",
        "x": "In this unit, base means the number of different digits a system uses and the multiplier between neighbouring place values; also called the radix."
      },
      {
        "t": "decimal",
        "d": "the base-10 system with digits 0 to 9 and place values 1, 10, 100, 1,000",
        "x": "In this unit, decimal means the base-10 system with digits 0 to 9 and place values 1, 10, 100, 1,000."
      },
      {
        "t": "binary",
        "d": "the base-2 system with digits 0 and 1 and place values 1, 2, 4, 8, 16",
        "x": "In this unit, binary means the base-2 system with digits 0 and 1 and place values 1, 2, 4, 8, 16."
      },
      {
        "t": "octal",
        "d": "the base-8 system with digits 0 to 7, in which one digit stands for three binary bits",
        "x": "In this unit, octal means the base-8 system with digits 0 to 7, in which one digit stands for three binary bits."
      },
      {
        "t": "hexadecimal",
        "d": "the base-16 system with digits 0 to 9 and A to F, in which one digit stands for four binary bits",
        "x": "In this unit, hexadecimal means the base-16 system with digits 0 to 9 and A to F, in which one digit stands for four binary bits."
      },
      {
        "t": "place value",
        "d": "the worth of a digit's position, a power of the base counting from the right",
        "x": "In this unit, place value means the worth of a digit's position, a power of the base counting from the right."
      },
      {
        "t": "most significant bit",
        "d": "the leftmost bit of a binary number, which carries the largest place value",
        "x": "In this unit, most significant bit means the leftmost bit of a binary number, which carries the largest place value."
      },
      {
        "t": "least significant bit",
        "d": "the rightmost bit of a binary number, which carries the place value 1",
        "x": "In this unit, least significant bit means the rightmost bit of a binary number, which carries the place value 1."
      },
      {
        "t": "nibble",
        "d": "a group of four bits, which is exactly one hexadecimal digit",
        "x": "In this unit, nibble means a group of four bits, which is exactly one hexadecimal digit."
      },
      {
        "t": "subscript",
        "d": "the small base written after a number to show its system, as in 1011₂ or 2F₁₆",
        "x": "In this unit, subscript means the small base written after a number to show its system, as in 1011₂ or 2F₁₆."
      },
      {
        "t": "repeated division",
        "d": "the method of converting a decimal number to another base by dividing by the base and collecting the remainders",
        "x": "In this unit, repeated division means the method of converting a decimal number to another base by dividing by the base and collecting the remainders."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “number system” in this unit?",
        "a": "a way of writing numbers using a fixed set of digits and place values based on a base."
      },
      {
        "q": "What is meant by “base” in this unit?",
        "a": "the number of different digits a system uses and the multiplier between neighbouring place values; also called the radix."
      },
      {
        "q": "What is meant by “decimal” in this unit?",
        "a": "the base-10 system with digits 0 to 9 and place values 1, 10, 100, 1,000."
      },
      {
        "q": "What is meant by “binary” in this unit?",
        "a": "the base-2 system with digits 0 and 1 and place values 1, 2, 4, 8, 16."
      },
      {
        "q": "What is meant by “octal” in this unit?",
        "a": "the base-8 system with digits 0 to 7, in which one digit stands for three binary bits."
      },
      {
        "q": "What is meant by “hexadecimal” in this unit?",
        "a": "the base-16 system with digits 0 to 9 and A to F, in which one digit stands for four binary bits."
      },
      {
        "q": "What is meant by “place value” in this unit?",
        "a": "the worth of a digit's position, a power of the base counting from the right."
      },
      {
        "q": "What is meant by “most significant bit” in this unit?",
        "a": "the leftmost bit of a binary number, which carries the largest place value."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A Grade 10 student converts 13 to binary by repeated division, writes the remainders as 1 0 1 1 and reports 1011₂, then insists the textbook answer 1101₂ is a misprint."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Check with place values — 1011₂ is 8 + 2 + 1 = 11, not 13, while 1101₂ is 8 + 4 + 1 = 13 — then fix the method: the first remainder is the least significant bit, so the remainders are read upwards, and every conversion is checked by converting back."
      },
      {
        "q": "State this unit idea in your own words: Each place in a number is worth the base multiplied by the place to its right, so binary places are 1, 2, 4, 8, 16, 32, 64, 128.",
        "a": "Each place in a number is worth the base multiplied by the place to its right, so binary places are 1, 2, 4, 8, 16, 32, 64, 128."
      },
      {
        "q": "State this unit idea in your own words: One hexadecimal digit stands for exactly four binary bits, and one octal digit for exactly three.",
        "a": "One hexadecimal digit stands for exactly four binary bits, and one octal digit for exactly three."
      },
      {
        "q": "Why do computers use binary rather than decimal?",
        "a": "Because electronic switches and storage have two reliable states, off and on, which map directly to 0 and 1."
      },
      {
        "q": "Why do programmers use hexadecimal?",
        "a": "As a compact, readable shorthand for binary: each hex digit is exactly four bits, so long bit strings become short and each digit converts independently."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Number Systems — Binary, Octal and Hexadecimal” Is"
      },
      {
        "k": "p",
        "t": "People count in **decimal** (base 10) because we have ten fingers; computers count in **binary** (base 2) because a switch has two states. **Octal** (base 8) and **hexadecimal** (base 16) are shorthand for binary that programmers read: one hexadecimal digit stands for exactly four bits, one octal digit for three. Every system uses **place value** — each column is worth the **base** times the column to its right — so conversion is a matter of place values and repeated division, worked on paper. Students who read the remainders of repeated division from top to bottom and then call the textbook a misprint have reversed the ladder. Check with place values — 1011₂ is 8 + 2 + 1 = 11, not 13, while 1101₂ is 8 + 4 + 1 = 13 — then fix the method: the first remainder is the least significant bit, so the remainders are read upwards, and every conversion is checked by converting back. Each place in a number is worth the base multiplied by the place to its right, so binary places are 1, 2, 4, 8, 16, 32, 64, 128. One hexadecimal digit stands for exactly four binary bits, and one octal digit for exactly three."
      },
      {
        "k": "p",
        "t": "A number system has a base and uses place values that are powers of the base. Decimal is base 10, binary base 2, octal base 8 and hexadecimal base 16 (digits 0–9 and A–F). Convert to decimal by multiplying each digit by its place value; convert from decimal by repeated division by the base, reading the remainders upwards. Binary groups of four bits map directly to hexadecimal digits, and groups of three to octal."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: Each place in a number is worth the base multiplied by the place to its right, so binary places are 1, 2, 4, 8, 16, 32, 64, 128. One hexadecimal digit stands for exactly four binary bits, and one octal digit for exactly three."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Ideas in This Unit"
      },
      {
        "k": "p",
        "t": "Each idea below is a working definition for Grade 10. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
      },
      {
        "k": "table",
        "head": [
          "Term",
          "What it means",
          "A sentence that uses it"
        ],
        "rows": [
          [
            "number system",
            "a way of writing numbers using a fixed set of digits and place values based on a base",
            "In this unit, number system means a way of writing numbers using a fixed set of digits and place values based on a base."
          ],
          [
            "base",
            "the number of different digits a system uses and the multiplier between neighbouring place values; also called the radix",
            "In this unit, base means the number of different digits a system uses and the multiplier between neighbouring place values; also called the radix."
          ],
          [
            "decimal",
            "the base-10 system with digits 0 to 9 and place values 1, 10, 100, 1,000",
            "In this unit, decimal means the base-10 system with digits 0 to 9 and place values 1, 10, 100, 1,000."
          ],
          [
            "binary",
            "the base-2 system with digits 0 and 1 and place values 1, 2, 4, 8, 16",
            "In this unit, binary means the base-2 system with digits 0 and 1 and place values 1, 2, 4, 8, 16."
          ],
          [
            "octal",
            "the base-8 system with digits 0 to 7, in which one digit stands for three binary bits",
            "In this unit, octal means the base-8 system with digits 0 to 7, in which one digit stands for three binary bits."
          ],
          [
            "hexadecimal",
            "the base-16 system with digits 0 to 9 and A to F, in which one digit stands for four binary bits",
            "In this unit, hexadecimal means the base-16 system with digits 0 to 9 and A to F, in which one digit stands for four binary bits."
          ],
          [
            "place value",
            "the worth of a digit's position, a power of the base counting from the right",
            "In this unit, place value means the worth of a digit's position, a power of the base counting from the right."
          ],
          [
            "most significant bit",
            "the leftmost bit of a binary number, which carries the largest place value",
            "In this unit, most significant bit means the leftmost bit of a binary number, which carries the largest place value."
          ],
          [
            "least significant bit",
            "the rightmost bit of a binary number, which carries the place value 1",
            "In this unit, least significant bit means the rightmost bit of a binary number, which carries the place value 1."
          ],
          [
            "nibble",
            "a group of four bits, which is exactly one hexadecimal digit",
            "In this unit, nibble means a group of four bits, which is exactly one hexadecimal digit."
          ],
          [
            "subscript",
            "the small base written after a number to show its system, as in 1011₂ or 2F₁₆",
            "In this unit, subscript means the small base written after a number to show its system, as in 1011₂ or 2F₁₆."
          ],
          [
            "repeated division",
            "the method of converting a decimal number to another base by dividing by the base and collecting the remainders",
            "In this unit, repeated division means the method of converting a decimal number to another base by dividing by the base and collecting the remainders."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Tell Them Apart"
      },
      {
        "k": "bul",
        "items": [
          "**Decimal** digits 0–9; **binary** digits 0–1; **octal** digits 0–7; **hexadecimal** digits 0–9, A–F.",
          "**To decimal** — multiply each digit by its place value and add.",
          "**From decimal** — divide by the base repeatedly; read the remainders from bottom to top.",
          "**Binary to hex** — group bits in fours from the right; **binary to octal** — in threes.",
          "**A subscript** names the base: 10₂ is two, 10₈ is eight, 10₁₆ is sixteen."
        ]
      },
      {
        "k": "table",
        "head": [
          "Decimal",
          "Binary",
          "Octal",
          "Hexadecimal"
        ],
        "rows": [
          [
            "0",
            "0000",
            "0",
            "0"
          ],
          [
            "5",
            "0101",
            "5",
            "5"
          ],
          [
            "9",
            "1001",
            "11",
            "9"
          ],
          [
            "10",
            "1010",
            "12",
            "A"
          ],
          [
            "15",
            "1111",
            "17",
            "F"
          ],
          [
            "255",
            "1111 1111",
            "377",
            "FF"
          ]
        ]
      },
      {
        "k": "p",
        "t": "A second table for this unit, so the distinction can be practised twice:"
      },
      {
        "k": "table",
        "head": [
          "Conversion",
          "Method",
          "Example"
        ],
        "rows": [
          [
            "Binary → decimal",
            "Add the place values of the 1 bits",
            "1011₂ = 8 + 2 + 1 = 11"
          ],
          [
            "Decimal → binary",
            "Repeated division by 2, remainders upwards",
            "13 → 1101₂"
          ],
          [
            "Hexadecimal → decimal",
            "Multiply digits by 16⁰, 16¹, 16² …",
            "2F₁₆ = 2 × 16 + 15 = 47"
          ],
          [
            "Decimal → hexadecimal",
            "Repeated division by 16",
            "200 → C8₁₆"
          ],
          [
            "Binary → hexadecimal",
            "Group in fours from the right",
            "1011 0110₂ = B6₁₆"
          ],
          [
            "Binary → octal",
            "Group in threes from the right",
            "110 101₂ = 65₈"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why This Matters in Liberia"
      },
      {
        "k": "p",
        "t": "A network technician in Monrovia reads an address such as 192.168.1.20 in decimal but the router stores it in binary; a phone's MAC address is printed in hexadecimal on the box; a programmer debugging a Vai character in Unicode sees its code as U+A500 in hex; and a colour on a school's web page is written #1F4AA8. Every one of those is this unit. A Liberian student who can convert 200 to C8 and back on paper can read the labels on the machines around her — and passes the number-systems question that opens almost every West African computing paper."
      },
      {
        "k": "p",
        "t": "This course is an **original teaching resource**, not an official syllabus transcription. A school without a computer lab is not a school without Computer Science. Teachers should compare the unit with the school's approved scheme of work before use."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Paper-First Method"
      },
      {
        "k": "p",
        "t": "The class investigation is **“Place-value cards and the division ladder”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Lay eight cards face up marked 128, 64, 32, 16, 8, 4, 2, 1; a student is given a decimal number (say 77) and turns face down every card that would make the sum too big, working left to right; the face-up cards spell the binary.",
          "Pairs check the result with the division ladder: divide 77 by 2 repeatedly, writing the remainders, and read them upwards; the two methods must agree.",
          "Group the eight bits in fours and read each nibble as a hexadecimal digit from a 0–F chart; group in threes and read the octal.",
          "The navigator gives a hexadecimal value (say 3C); the driver expands it to binary nibble by nibble and then to decimal by place values; swap and repeat with an octal value.",
          "If a device is present, one pair checks each answer with a programmer's calculator while the others compare; otherwise the written ladders and card layouts are the finished work."
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Worked Example in Prose"
      },
      {
        "k": "p",
        "t": "**Problem.** Convert the decimal number 77 to binary, octal and hexadecimal, showing the method for each, and check the hexadecimal answer by converting it back to decimal."
      },
      {
        "k": "num",
        "items": [
          "Binary by place values: 77 = 64 + 8 + 4 + 1 → cards 64, 8, 4, 1 face up → 0100 1101₂.",
          "Check by division: 77 ÷ 2 = 38 r 1; 38 ÷ 2 = 19 r 0; 19 ÷ 2 = 9 r 1; 9 ÷ 2 = 4 r 1; 4 ÷ 2 = 2 r 0; 2 ÷ 2 = 1 r 0; 1 ÷ 2 = 0 r 1; read upwards: 1001101₂.",
          "Octal: group in threes from the right: 001 001 101 → 1 1 5 → 115₈.",
          "Hexadecimal: group in fours from the right: 0100 1101 → 4 D → 4D₁₆.",
          "Check: 4D₁₆ = 4 × 16 + 13 = 64 + 13 = 77 ✓."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** 77 = 1001101₂ = 115₈ = 4D₁₆, and 4D₁₆ converts back to 64 + 13 = 77."
      },
      {
        "k": "p",
        "t": "Notice the method: name what you know, run one step at a time, write the result of each step, then state the answer in a full sentence. That is the same habit a Physics class uses on a numerical problem; here the 'calculation' is a trace, a conversion, a truth table, a formula, a query or a debug."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Common Mistakes"
      },
      {
        "k": "bul",
        "items": [
          "Reading the remainders of repeated division downwards instead of upwards.",
          "Grouping bits from the left instead of from the right when converting to hex or octal.",
          "Forgetting that A–F stand for 10–15, or writing 16 as a hexadecimal digit.",
          "Leaving out the subscript, so 10 could mean two, eight, ten or sixteen."
        ]
      },
      {
        "k": "p",
        "t": "The class rule still holds when a mistake appears: **we try, we debug, we do not laugh at a mistake.** A bug is in the steps, not in the person."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Safety, Ethics and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN or a one-time code, and nobody installs software on a school machine without permission. A program written in this course is never pointed at another person's account, phone or wallet: guessing a password, sending bulk messages or reading someone's data without consent is a crime under Liberian law, not a prank. Copying a program from a classmate and submitting it as your own is plagiarism. Pair work shares the thinking, not the credit for work you did not do."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered (screenshots, not deletions), and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Pair Roles: Driver and Navigator"
      },
      {
        "k": "p",
        "t": "A computing pair has two jobs that swap. The **driver** writes or works the next step. The **navigator** reads the algorithm or the listing, watches for a bug, and says 'stop' before a wrong line is copied. After five minutes they swap, so both practise both jobs. A third student may sit as **checker** and tick each step on the trace table. Taking turns is a computing skill, not a punishment for having only one computer — or none."
      },
      {
        "k": "table",
        "head": [
          "Role",
          "What this person does",
          "What this person does not do"
        ],
        "rows": [
          [
            "Driver",
            "Works or writes the current step",
            "Does not skip the navigator's 'stop'"
          ],
          [
            "Navigator",
            "Reads the steps and watches for bugs",
            "Does not grab the pencil, the keyboard or the mouse"
          ],
          [
            "Checker",
            "Ticks each step and records one bug on the class chart",
            "Does not laugh at a mistake"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Fictional Liberian Scenario"
      },
      {
        "k": "p",
        "t": "A Grade 10 student converts 13 to binary by repeated division, writes the remainders as 1 0 1 1 and reports 1011₂, then insists the textbook answer 1101₂ is a misprint."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Check with place values — 1011₂ is 8 + 2 + 1 = 11, not 13, while 1101₂ is 8 + 4 + 1 = 13 — then fix the method: the first remainder is the least significant bit, so the remainders are read upwards, and every conversion is checked by converting back."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Worked Computing Reasoning"
      },
      {
        "k": "p",
        "t": "Check with place values — 1011₂ is 8 + 2 + 1 = 11, not 13, while 1101₂ is 8 + 4 + 1 = 13 — then fix the method: the first remainder is the least significant bit, so the remainders are read upwards, and every conversion is checked by converting back."
      },
      {
        "k": "p",
        "t": "When you answer a scenario question, use this three-part shape: (1) name the computing idea (algorithm, data, network, security, binary, database, …); (2) say what a person should do, in order; (3) say why, with a unit term in the reason. Vague good intentions without a term do not yet show that the unit has been learned."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Practise It on Paper"
      },
      {
        "k": "p",
        "t": "The investigation **“Place-value cards and the division ladder”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
      },
      {
        "k": "table",
        "head": [
          "Paper object",
          "What it stands for",
          "What we write afterwards"
        ],
        "rows": [
          [
            "Place-value cards",
            "The binary columns",
            "The binary number and its decimal sum"
          ],
          [
            "Division ladder",
            "Repeated division by the base",
            "Remainders read upwards, boxed answer with subscript"
          ],
          [
            "0–F chart",
            "The hexadecimal digits",
            "Nibbles converted to hex digits"
          ],
          [
            "Class chart",
            "Conversion bugs the class found (ladder read downwards, grouping from the left)",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why Hexadecimal Exists"
      },
      {
        "k": "p",
        "t": "Nobody wants to read 1011011010110110. Because 16 is 2⁴, every group of four bits is exactly one hex digit, so that number is B6B6 — shorter, and each digit can be converted independently. Octal does the same with threes. Both are for human eyes; the machine holds only the bits."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Two Directions"
      },
      {
        "k": "p",
        "t": "Going to decimal, multiply and add: 2F₁₆ = 2 × 16 + 15 × 1 = 47. Going from decimal, divide and collect remainders: 47 ÷ 16 = 2 r 15 → 2F. If you remember only one, remember that you can always check the other by converting back."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Reading the Machines Around You"
      },
      {
        "k": "p",
        "t": "An IPv4 address is four bytes shown in decimal; a MAC address is six bytes in hexadecimal; a web colour is three bytes in hexadecimal; a Unicode code point is hexadecimal with U+ in front. Being fluent in three bases is what lets a technician read a label."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Examination Layout"
      },
      {
        "k": "p",
        "t": "Show the ladder or the place-value line, box the answer, write the subscript. A conversion with no working is not a full-mark answer even when correct, because the examiner cannot see the method — and a slip is unrecoverable."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "What a Period Test Asks"
      },
      {
        "k": "p",
        "t": "A fair period test on “Number Systems — Binary, Octal and Hexadecimal” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit precisely and use each in a sentence.",
          "Solve or trace a problem connected with “Number Systems — Binary, Octal and Hexadecimal” on paper, showing every line of working.",
          "Classify four examples using “Valid binary or octal numbers / Valid hexadecimal numbers” and justify one placement.",
          "Find and correct a bug in a set of steps, a query or a program, and say what the bug was."
        ]
      },
      {
        "k": "p",
        "t": "Show every step of a tracing or conversion question, the way a Physics script shows working. A bare answer with no steps cannot be given full credit, because the teacher cannot see the method you ran."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Four Weeks of Study"
      },
      {
        "k": "p",
        "t": "A 4-week unit on “Number Systems — Binary, Octal and Hexadecimal” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
      },
      {
        "k": "table",
        "head": [
          "Week",
          "Study focus",
          "What students leave able to do"
        ],
        "rows": [
          [
            "1",
            "What “Number Systems — Binary, Octal and Hexadecimal” is, and where it already appears around us.",
            "Say what the unit is about and name two examples from Liberia."
          ],
          [
            "2",
            "Key ideas, distinctions and the unit table.",
            "Use the key terms and complete the distinction tables."
          ],
          [
            "3",
            "A Liberian example and the paper-first method, worked then written.",
            "Run the paper method and write the algorithm, table or report."
          ],
          [
            "4",
            "Worked problems, pair-debug, the computing fair and the period check.",
            "Solve a worked example, debug a bug, and sit the period check."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Check Yourself"
      },
      {
        "k": "p",
        "t": "Close the notes. (1) Say the unit title and one Liberian example. (2) Give the meaning of three terms without looking. (3) Work the paper method once more, showing every step. (4) Name one bug you would look for. (5) Say who you tell if a message asks for a photograph, a PIN or money. If any of those five stalls, go back to the table of terms and the worked example and run them again with a partner. Do not laugh at a bug — including your own."
      },
      {
        "k": "p",
        "t": "This is original supplementary teaching material for Liberian senior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, number system means a way of writing numbers using a fixed set of digits and place values based on a base.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, base means the base-10 system with digits 0 to 9 and place values 1, 10, 100, 1,000.",
        "a": "False",
        "why": "base means the number of different digits a system uses and the multiplier between neighbouring place values; also called the radix; the statement describes decimal."
      },
      {
        "s": "In this unit, binary means the base-2 system with digits 0 and 1 and place values 1, 2, 4, 8, 16.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Every conversion, truth table, trace and program in the unit can be worked on paper; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the code or the steps, not in the person."
      },
      {
        "s": "Students should share passwords, PINs or one-time codes so a partner can finish the work.",
        "a": "False",
        "why": "A password, PIN or one-time code is secret. Sharing one is how accounts and mobile-money wallets are emptied."
      },
      {
        "s": "Each place in a number is worth the base multiplied by the place to its right, so binary places are 1, 2, 4, 8, 16, 32, 64, 128.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "One hexadecimal digit stands for exactly four binary bits.",
        "a": "True",
        "why": "16 = 2⁴, so every group of four bits maps to one hex digit."
      },
      {
        "s": "In repeated division, the first remainder written is the most significant bit.",
        "a": "False",
        "why": "The first remainder is the least significant bit; remainders are read upwards."
      }
    ],
    "classify": {
      "title": "Valid binary or octal numbers / Valid hexadecimal numbers",
      "groups": [
        {
          "name": "Valid binary or octal numbers",
          "items": [
            "1011₂",
            "110 101₂",
            "377₈",
            "17₈",
            "0000₂",
            "65₈"
          ]
        },
        {
          "name": "Valid hexadecimal numbers",
          "items": [
            "2F₁₆",
            "FF₁₆",
            "C8₁₆",
            "4D₁₆",
            "A500₁₆",
            "1F4AA8₁₆"
          ]
        }
      ]
    },
    "diagram": {
      "title": "Place values across four number systems",
      "caption": "Label each part and state what it does in “Number Systems — Binary, Octal and Hexadecimal”.",
      "parts": [
        {
          "p": "Decimal places",
          "f": "1, 10, 100, 1,000 — powers of 10"
        },
        {
          "p": "Binary places",
          "f": "1, 2, 4, 8, 16, 32, 64, 128 — powers of 2"
        },
        {
          "p": "Octal places",
          "f": "1, 8, 64, 512 — powers of 8; one digit per three bits"
        },
        {
          "p": "Hexadecimal places",
          "f": "1, 16, 256, 4,096 — powers of 16; one digit per four bits"
        },
        {
          "p": "Subscript",
          "f": "the small base written after the number, such as ₂ or ₁₆"
        }
      ]
    },
    "experiment": {
      "title": "Place-value cards and the division ladder",
      "aim": "To practise the ideas of “Number Systems — Binary, Octal and Hexadecimal” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Printed listings, cards and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class test log",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “Place-value cards and the division ladder” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A Grade 10 student converts 13 to binary by repeated division, writes the remainders as 1 0 1 1 and reports 1011₂, then insists the textbook answer 1101₂ is a misprint. What should happen next?",
        "a": "Check with place values — 1011₂ is 8 + 2 + 1 = 11, not 13, while 1101₂ is 8 + 4 + 1 = 13 — then fix the method: the first remainder is the least significant bit, so the remainders are read upwards, and every conversion is checked by converting back."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Number Systems — Binary, Octal and Hexadecimal”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's program or trace fails. What do you say, and why?",
        "a": "Remind the class that a bug is in the code or the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the exact line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian working life (a bank, a mobile-money agent, a clinic, a radio station, a business, a ministry).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as a bank's database, a mobile-money transaction, a hospital record, a radio station's schedule or a ministry's website."
      },
      {
        "q": "A web page colour is written #1F4AA8. Split it into its three bytes and convert each to decimal to give the red, green and blue amounts.",
        "a": "1F₁₆ = 31, 4A₁₆ = 74, A8₁₆ = 168 — red 31, green 74, blue 168 (a deep blue)."
      },
      {
        "q": "The Vai syllable 'a' has the Unicode code point U+A500. Convert A500₁₆ to decimal and to binary.",
        "a": "A500₁₆ = 10 × 4,096 + 5 × 256 = 40,960 + 1,280 = 42,240; binary 1010 0101 0000 0000₂."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “Place-value cards and the division ladder” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, squared paper and printed listings",
      "A class computing chart and test log",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's device, kept dry and in sight"
    ],
    "aids": [
      "Word cards — number system, base, decimal",
      "A flowchart or trace table of “Place-value cards and the division ladder”",
      "Place-value cards 128 to 1 and a 0–F hexadecimal chart",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing term and what it means.",
      "Work this week's paper method (a conversion, a truth table, a trace, a query or a design) again with a friend — no device needed.",
      "Find one example of this unit's idea in your community (a bank, a mobile-money kiosk, a clinic, a radio station, a business or a ministry office) and write a paragraph about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written trace, conversion, truth table or query with full working",
      "Pair-debug observed against the class test log",
      "A short written response to the Liberian case scenario"
    ],
    "worked": [
      {
        "q": "Convert 1011₂ to decimal.",
        "steps": [
          "8 + 0 + 2 + 1."
        ],
        "a": "11"
      },
      {
        "q": "Convert 13 to binary by repeated division.",
        "steps": [
          "13 r1, 6 r0, 3 r1, 1 r1 → read up."
        ],
        "a": "1101₂"
      },
      {
        "q": "Convert 2F₁₆ to decimal.",
        "steps": [
          "2 × 16 + 15."
        ],
        "a": "47"
      },
      {
        "q": "Convert 200 to hexadecimal.",
        "steps": [
          "200 ÷ 16 = 12 r 8 → C8."
        ],
        "a": "C8₁₆"
      },
      {
        "q": "Convert 1011 0110₂ to hexadecimal.",
        "steps": [
          "1011 = B, 0110 = 6."
        ],
        "a": "B6₁₆"
      },
      {
        "q": "Convert 110101₂ to octal.",
        "steps": [
          "110 = 6, 101 = 5."
        ],
        "a": "65₈"
      },
      {
        "q": "Convert 377₈ to decimal.",
        "steps": [
          "3 × 64 + 7 × 8 + 7."
        ],
        "a": "255"
      },
      {
        "q": "What is the largest number an 8-bit binary value can hold, in decimal and in hexadecimal?",
        "steps": [
          "1111 1111₂ = 255 = FF."
        ],
        "a": "255; FF₁₆"
      }
    ]
  },
  {
    "grade": 10,
    "period": "III",
    "sem": "One",
    "icon": "➕",
    "csPlan": true,
    "title": "Binary Arithmetic and Data Storage Units",
    "subtitle": "Computer Science · Original senior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Written for classes that may have no computer lab: every conversion, truth table, trace, query and program in the unit can be done on paper, and a shared device extends it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary precisely in speech, writing and examination answers.",
      "Solve the unit's problems on paper — conversions, truth tables, traces, queries, formulas or designs — showing every step of working.",
      "Evaluate a technology choice for its safety, legality, cost and effect on people in Liberia."
    ],
    "objectives": [
      "Define the key terms in “Binary Arithmetic and Data Storage Units” precisely and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm, program or procedure connected with this unit, on paper.",
      "Classify examples into the unit's two groups and justify each placement.",
      "Solve a worked example step by step, showing every line of working, and state the answer in a full sentence with its unit or type.",
      "Apply the unit's ideas to a fictional Liberian business, ministry, clinic or school scenario.",
      "Find and correct a bug in a set of steps, a circuit, a query or a program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared test log.",
      "Explain one Liberian example of this unit's idea (mobile money, the ACE submarine cable, a hospital record, a bank, the national examination system or a radio station)."
    ],
    "safeguard": "A senior high computing lesson uses paper traces, truth tables, printed listings and, when one is present, a shared school computer or the teacher's own device. Students never share passwords, PINs or one-time codes, never install software on a school machine without permission, and never photograph, record or post a classmate without consent. A program written in class must never be used to guess a password, send bulk messages or enter another person's account — that is a crime, not a prank. If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "Binary addition follows 0+0=0, 0+1=1, 1+1=10 (carry 1) and 1+1+1=11. Fixed word lengths cause overflow when a result is too large. Two's complement represents negative numbers: invert the bits and add 1; the leftmost bit then acts as the sign. Subtraction is done by adding the two's complement. Storage units: 8 bits = 1 byte; 1 KB = 1,000 bytes (or 1,024 in binary units), and so on to MB, GB and TB.",
    "focus": [
      "Worked demonstration on paper",
      "Pair programming and debugging",
      "Liberian case scenario",
      "Practical and period check"
    ],
    "terms": [
      {
        "t": "binary addition",
        "d": "adding binary numbers column by column from the right, carrying 1 whenever a column sums to 2 or more",
        "x": "In this unit, binary addition means adding binary numbers column by column from the right, carrying 1 whenever a column sums to 2 or more."
      },
      {
        "t": "carry",
        "d": "the 1 moved to the next column to the left when a column's sum is 2 (10₂) or 3 (11₂)",
        "x": "In this unit, carry means the 1 moved to the next column to the left when a column's sum is 2 (10₂) or 3 (11₂)."
      },
      {
        "t": "word length",
        "d": "the fixed number of bits a computer uses for one number, such as 8, 16, 32 or 64",
        "x": "In this unit, word length means the fixed number of bits a computer uses for one number, such as 8, 16, 32 or 64."
      },
      {
        "t": "overflow",
        "d": "an error that occurs when a result needs more bits than the word length allows, so the leading bit is lost",
        "x": "In this unit, overflow means an error that occurs when a result needs more bits than the word length allows, so the leading bit is lost."
      },
      {
        "t": "sign bit",
        "d": "the leftmost bit of a signed binary number, 0 for positive and 1 for negative",
        "x": "In this unit, sign bit means the leftmost bit of a signed binary number, 0 for positive and 1 for negative."
      },
      {
        "t": "two's complement",
        "d": "the standard way of storing negative numbers: invert every bit of the positive value and add 1",
        "x": "In this unit, two's complement means the standard way of storing negative numbers: invert every bit of the positive value and add 1."
      },
      {
        "t": "range",
        "d": "the smallest and largest values a word can hold; 8-bit two's complement runs from −128 to +127",
        "x": "In this unit, range means the smallest and largest values a word can hold; 8-bit two's complement runs from −128 to +127."
      },
      {
        "t": "bit",
        "d": "a single binary digit, 0 or 1",
        "x": "In this unit, bit means a single binary digit, 0 or 1."
      },
      {
        "t": "byte",
        "d": "eight bits; enough for one ASCII character or one number from 0 to 255",
        "x": "In this unit, byte means eight bits; enough for one ASCII character or one number from 0 to 255."
      },
      {
        "t": "kilobyte",
        "d": "about a thousand bytes (1,000 in decimal units; 1,024 in binary units)",
        "x": "In this unit, kilobyte means about a thousand bytes (1,000 in decimal units; 1,024 in binary units)."
      },
      {
        "t": "megabyte",
        "d": "about a million bytes; a gigabyte is about a thousand megabytes and a terabyte about a thousand gigabytes",
        "x": "In this unit, megabyte means about a million bytes; a gigabyte is about a thousand megabytes and a terabyte about a thousand gigabytes."
      },
      {
        "t": "binary shift",
        "d": "moving every bit left or right; a left shift by one multiplies by 2, a right shift divides by 2",
        "x": "In this unit, binary shift means moving every bit left or right; a left shift by one multiplies by 2, a right shift divides by 2."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “binary addition” in this unit?",
        "a": "adding binary numbers column by column from the right, carrying 1 whenever a column sums to 2 or more."
      },
      {
        "q": "What is meant by “carry” in this unit?",
        "a": "the 1 moved to the next column to the left when a column's sum is 2 (10₂) or 3 (11₂)."
      },
      {
        "q": "What is meant by “word length” in this unit?",
        "a": "the fixed number of bits a computer uses for one number, such as 8, 16, 32 or 64."
      },
      {
        "q": "What is meant by “overflow” in this unit?",
        "a": "an error that occurs when a result needs more bits than the word length allows, so the leading bit is lost."
      },
      {
        "q": "What is meant by “sign bit” in this unit?",
        "a": "the leftmost bit of a signed binary number, 0 for positive and 1 for negative."
      },
      {
        "q": "What is meant by “two's complement” in this unit?",
        "a": "the standard way of storing negative numbers: invert every bit of the positive value and add 1."
      },
      {
        "q": "What is meant by “range” in this unit?",
        "a": "the smallest and largest values a word can hold; 8-bit two's complement runs from −128 to +127."
      },
      {
        "q": "What is meant by “bit” in this unit?",
        "a": "a single binary digit, 0 or 1."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A Grade 10 group's fee program stores balances in 8 bits and a parent who pays LRD 200 twice sees a balance of 144, and the group announces that the computer 'cannot add'."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Work it on paper: 400 needs nine bits (1 1001 0000), the leading 1 is lost in 8 bits and 1001 0000 = 144 remains; name it overflow, choose a word length that fits the largest balance (16 or 32 bits), and add a test with the biggest value the school will ever record."
      },
      {
        "q": "State this unit idea in your own words: In binary, 1 + 1 = 10: write 0 and carry 1 to the next column.",
        "a": "In binary, 1 + 1 = 10: write 0 and carry 1 to the next column."
      },
      {
        "q": "State this unit idea in your own words: To find the two's complement of a binary number, invert every bit and add 1; the leftmost bit then shows the sign.",
        "a": "To find the two's complement of a binary number, invert every bit and add 1; the leftmost bit then shows the sign."
      },
      {
        "q": "What is overflow and when does it happen?",
        "a": "The loss of the leading bit when a result needs more bits than the word length allows, for example 255 + 1 in 8 unsigned bits."
      },
      {
        "q": "How is a negative number formed in two's complement, and why is that system used?",
        "a": "Invert every bit of the positive value and add 1; it lets the same adder subtract, gives a single zero and makes the leftmost bit the sign."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Binary Arithmetic and Data Storage Units” Is"
      },
      {
        "k": "p",
        "t": "Adding in binary uses four facts — 0 + 0 = 0, 0 + 1 = 1, 1 + 1 = 10 (write 0, **carry** 1), 1 + 1 + 1 = 11 — and a fixed **word length** such as 8 bits. When a result needs more bits than the word allows, **overflow** occurs and the answer is wrong. Negative numbers are stored in **two's complement**, which lets the same adder subtract. Storage is measured up from the **bit** and **byte** through the **kilobyte**, **megabyte**, **gigabyte** and **terabyte**, and every file, photo and message has a size that can be estimated. Groups who announce that the computer 'cannot add' when 200 + 200 shows 144 in an 8-bit word have met overflow. Work it on paper: 400 needs nine bits (1 1001 0000), the leading 1 is lost in 8 bits and 1001 0000 = 144 remains; name it overflow, choose a word length that fits the largest balance (16 or 32 bits), and add a test with the biggest value the school will ever record. In binary, 1 + 1 = 10: write 0 and carry 1 to the next column. To find the two's complement of a binary number, invert every bit and add 1; the leftmost bit then shows the sign."
      },
      {
        "k": "p",
        "t": "Binary addition follows 0+0=0, 0+1=1, 1+1=10 (carry 1) and 1+1+1=11. Fixed word lengths cause overflow when a result is too large. Two's complement represents negative numbers: invert the bits and add 1; the leftmost bit then acts as the sign. Subtraction is done by adding the two's complement. Storage units: 8 bits = 1 byte; 1 KB = 1,000 bytes (or 1,024 in binary units), and so on to MB, GB and TB."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: In binary, 1 + 1 = 10: write 0 and carry 1 to the next column. To find the two's complement of a binary number, invert every bit and add 1; the leftmost bit then shows the sign."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Ideas in This Unit"
      },
      {
        "k": "p",
        "t": "Each idea below is a working definition for Grade 10. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
      },
      {
        "k": "table",
        "head": [
          "Term",
          "What it means",
          "A sentence that uses it"
        ],
        "rows": [
          [
            "binary addition",
            "adding binary numbers column by column from the right, carrying 1 whenever a column sums to 2 or more",
            "In this unit, binary addition means adding binary numbers column by column from the right, carrying 1 whenever a column sums to 2 or more."
          ],
          [
            "carry",
            "the 1 moved to the next column to the left when a column's sum is 2 (10₂) or 3 (11₂)",
            "In this unit, carry means the 1 moved to the next column to the left when a column's sum is 2 (10₂) or 3 (11₂)."
          ],
          [
            "word length",
            "the fixed number of bits a computer uses for one number, such as 8, 16, 32 or 64",
            "In this unit, word length means the fixed number of bits a computer uses for one number, such as 8, 16, 32 or 64."
          ],
          [
            "overflow",
            "an error that occurs when a result needs more bits than the word length allows, so the leading bit is lost",
            "In this unit, overflow means an error that occurs when a result needs more bits than the word length allows, so the leading bit is lost."
          ],
          [
            "sign bit",
            "the leftmost bit of a signed binary number, 0 for positive and 1 for negative",
            "In this unit, sign bit means the leftmost bit of a signed binary number, 0 for positive and 1 for negative."
          ],
          [
            "two's complement",
            "the standard way of storing negative numbers: invert every bit of the positive value and add 1",
            "In this unit, two's complement means the standard way of storing negative numbers: invert every bit of the positive value and add 1."
          ],
          [
            "range",
            "the smallest and largest values a word can hold; 8-bit two's complement runs from −128 to +127",
            "In this unit, range means the smallest and largest values a word can hold; 8-bit two's complement runs from −128 to +127."
          ],
          [
            "bit",
            "a single binary digit, 0 or 1",
            "In this unit, bit means a single binary digit, 0 or 1."
          ],
          [
            "byte",
            "eight bits; enough for one ASCII character or one number from 0 to 255",
            "In this unit, byte means eight bits; enough for one ASCII character or one number from 0 to 255."
          ],
          [
            "kilobyte",
            "about a thousand bytes (1,000 in decimal units; 1,024 in binary units)",
            "In this unit, kilobyte means about a thousand bytes (1,000 in decimal units; 1,024 in binary units)."
          ],
          [
            "megabyte",
            "about a million bytes; a gigabyte is about a thousand megabytes and a terabyte about a thousand gigabytes",
            "In this unit, megabyte means about a million bytes; a gigabyte is about a thousand megabytes and a terabyte about a thousand gigabytes."
          ],
          [
            "binary shift",
            "moving every bit left or right; a left shift by one multiplies by 2, a right shift divides by 2",
            "In this unit, binary shift means moving every bit left or right; a left shift by one multiplies by 2, a right shift divides by 2."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Tell Them Apart"
      },
      {
        "k": "bul",
        "items": [
          "**Carry** goes to the next column; **overflow** falls off the end of the word.",
          "**Unsigned** 8 bits: 0 to 255; **two's complement** 8 bits: −128 to +127.",
          "**Invert and add 1** makes the negative; do it again to get back.",
          "**Shift left** multiplies by 2; **shift right** divides by 2 (dropping the remainder).",
          "**Decimal units** (1 KB = 1,000 B) for sellers; **binary units** (1 KiB = 1,024 B) for the operating system — the reason a '32 GB' card shows less."
        ]
      },
      {
        "k": "table",
        "head": [
          "Binary sum",
          "Working",
          "Result"
        ],
        "rows": [
          [
            "0101 + 0011",
            "1+1=10 carry; 0+1+1=10 carry; 1+0+1=10 carry; 0+0+1=1",
            "1000 (5 + 3 = 8)"
          ],
          [
            "1001 + 0110",
            "No carries",
            "1111 (9 + 6 = 15)"
          ],
          [
            "0111 + 0001",
            "Carries ripple through three columns",
            "1000 (7 + 1 = 8)"
          ],
          [
            "1111 + 0001 in 4 bits",
            "Carries ripple off the end",
            "0000 with overflow (16 does not fit)"
          ],
          [
            "1010 1100 + 0101 0110",
            "Column by column with carries",
            "1 0000 0010 — overflow in 8 bits (172 + 86 = 258)"
          ],
          [
            "0011 0101 + 0001 1011",
            "Column by column with carries",
            "0101 0000 (53 + 27 = 80)"
          ]
        ]
      },
      {
        "k": "p",
        "t": "A second table for this unit, so the distinction can be practised twice:"
      },
      {
        "k": "table",
        "head": [
          "Decimal",
          "8-bit two's complement",
          "How"
        ],
        "rows": [
          [
            "+5",
            "0000 0101",
            "Positive: ordinary binary with sign bit 0"
          ],
          [
            "−5",
            "1111 1011",
            "Invert 0000 0101 → 1111 1010; add 1 → 1111 1011"
          ],
          [
            "+127",
            "0111 1111",
            "The largest positive 8-bit value"
          ],
          [
            "−128",
            "1000 0000",
            "The most negative 8-bit value"
          ],
          [
            "−1",
            "1111 1111",
            "Invert 0000 0001 → 1111 1110; add 1"
          ],
          [
            "0",
            "0000 0000",
            "Only one zero in two's complement"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why This Matters in Liberia"
      },
      {
        "k": "p",
        "t": "A mobile-money balance stored in too small a word overflows and shows nonsense; a school-fee program that stores a debt as a negative number needs two's complement; a phone sold as 32 GB shows 29.8 GB because the seller counts in thousands and the operating system in 1,024s. The clerk who understands these three facts explains them to a customer instead of blaming 'the system'. Every calculation in this unit is done on paper, column by column, which is also how the examiner expects to see it."
      },
      {
        "k": "p",
        "t": "This course is an **original teaching resource**, not an official syllabus transcription. A school without a computer lab is not a school without Computer Science. Teachers should compare the unit with the school's approved scheme of work before use."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Paper-First Method"
      },
      {
        "k": "p",
        "t": "The class investigation is **“Column addition with carry cards and the complement flip”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Pairs rule eight columns headed 128 to 1 and write two 8-bit numbers beneath; a small 'carry' card is placed above a column whenever its sum reaches 2 or 3.",
          "They add column by column from the right, saying the rule aloud each time (1 + 1 = 0 carry 1), and convert both inputs and the result to decimal to check.",
          "They repeat with a sum whose result exceeds 255 and watch the final carry fall off the left end — overflow — then explain what a program would show.",
          "For a negative number, the driver writes the positive value, the navigator flips every bit, and together they add 1; they check by adding the result to the positive value and seeing all zeros (with a discarded carry).",
          "If a programmer's calculator is present, one pair checks each result while the others compare; otherwise the written columns and checks are the finished work."
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Worked Example in Prose"
      },
      {
        "k": "p",
        "t": "**Problem.** Using 8-bit two's complement, compute 53 − 27 by addition. Show the binary of 53 and 27, the two's complement of 27, the addition, and the decimal check. Then state what happens if the same 8 bits are used to add 172 + 86."
      },
      {
        "k": "num",
        "items": [
          "53 = 0011 0101; 27 = 0001 1011.",
          "Two's complement of 27: invert 0001 1011 → 1110 0100; add 1 → 1110 0101 (this is −27).",
          "Add: 0011 0101 + 1110 0101 = 1 0001 1010; the ninth bit (the carry out) is discarded in two's complement subtraction, leaving 0001 1010.",
          "Check: 0001 1010 = 16 + 8 + 2 = 26 = 53 − 27 ✓.",
          "172 + 86 = 258, but 8 unsigned bits hold at most 255: 1010 1100 + 0101 0110 = 1 0000 0010, the leading 1 is lost and the word shows 0000 0010 = 2 — overflow."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** 53 − 27 = 26 by adding the two's complement 1110 0101 and discarding the carry; 172 + 86 overflows 8 bits and would wrongly show 2."
      },
      {
        "k": "p",
        "t": "Notice the method: name what you know, run one step at a time, write the result of each step, then state the answer in a full sentence. That is the same habit a Physics class uses on a numerical problem; here the 'calculation' is a trace, a conversion, a truth table, a formula, a query or a debug."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Common Mistakes"
      },
      {
        "k": "bul",
        "items": [
          "Writing 1 + 1 = 2 in a binary column instead of 0 carry 1.",
          "Forgetting to add 1 after inverting when forming the two's complement.",
          "Keeping the ninth bit after a two's complement subtraction instead of discarding the carry out.",
          "Mixing decimal units (1,000) and binary units (1,024) in one calculation."
        ]
      },
      {
        "k": "p",
        "t": "The class rule still holds when a mistake appears: **we try, we debug, we do not laugh at a mistake.** A bug is in the steps, not in the person."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Safety, Ethics and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN or a one-time code, and nobody installs software on a school machine without permission. A program written in this course is never pointed at another person's account, phone or wallet: guessing a password, sending bulk messages or reading someone's data without consent is a crime under Liberian law, not a prank. Copying a program from a classmate and submitting it as your own is plagiarism. Pair work shares the thinking, not the credit for work you did not do."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered (screenshots, not deletions), and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Pair Roles: Driver and Navigator"
      },
      {
        "k": "p",
        "t": "A computing pair has two jobs that swap. The **driver** writes or works the next step. The **navigator** reads the algorithm or the listing, watches for a bug, and says 'stop' before a wrong line is copied. After five minutes they swap, so both practise both jobs. A third student may sit as **checker** and tick each step on the trace table. Taking turns is a computing skill, not a punishment for having only one computer — or none."
      },
      {
        "k": "table",
        "head": [
          "Role",
          "What this person does",
          "What this person does not do"
        ],
        "rows": [
          [
            "Driver",
            "Works or writes the current step",
            "Does not skip the navigator's 'stop'"
          ],
          [
            "Navigator",
            "Reads the steps and watches for bugs",
            "Does not grab the pencil, the keyboard or the mouse"
          ],
          [
            "Checker",
            "Ticks each step and records one bug on the class chart",
            "Does not laugh at a mistake"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Fictional Liberian Scenario"
      },
      {
        "k": "p",
        "t": "A Grade 10 group's fee program stores balances in 8 bits and a parent who pays LRD 200 twice sees a balance of 144, and the group announces that the computer 'cannot add'."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Work it on paper: 400 needs nine bits (1 1001 0000), the leading 1 is lost in 8 bits and 1001 0000 = 144 remains; name it overflow, choose a word length that fits the largest balance (16 or 32 bits), and add a test with the biggest value the school will ever record."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Worked Computing Reasoning"
      },
      {
        "k": "p",
        "t": "Work it on paper: 400 needs nine bits (1 1001 0000), the leading 1 is lost in 8 bits and 1001 0000 = 144 remains; name it overflow, choose a word length that fits the largest balance (16 or 32 bits), and add a test with the biggest value the school will ever record."
      },
      {
        "k": "p",
        "t": "When you answer a scenario question, use this three-part shape: (1) name the computing idea (algorithm, data, network, security, binary, database, …); (2) say what a person should do, in order; (3) say why, with a unit term in the reason. Vague good intentions without a term do not yet show that the unit has been learned."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Practise It on Paper"
      },
      {
        "k": "p",
        "t": "The investigation **“Column addition with carry cards and the complement flip”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
      },
      {
        "k": "table",
        "head": [
          "Paper object",
          "What it stands for",
          "What we write afterwards"
        ],
        "rows": [
          [
            "Eight-column sheet",
            "An 8-bit word",
            "The sum with carries shown and the decimal check"
          ],
          [
            "Carry cards",
            "The 1 passed to the next column",
            "Circled where a carry fell off the end (overflow)"
          ],
          [
            "Complement flip sheet",
            "Forming a negative number",
            "Invert, add 1, check to zero"
          ],
          [
            "Class chart",
            "Arithmetic bugs the class found",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Four Facts Do All Binary Addition"
      },
      {
        "k": "p",
        "t": "0 + 0 = 0; 0 + 1 = 1; 1 + 1 = 10; 1 + 1 + 1 = 11. Work from the right, write the low bit, carry the high bit. A student who says the rule aloud in each column makes fewer slips than one who works in silence."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why Two's Complement"
      },
      {
        "k": "p",
        "t": "With two's complement, the same circuit that adds also subtracts — add the negative — and there is only one zero. The leftmost bit doubles as the sign. That is why every processor since the 1960s uses it and why an examination expects you to know it."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Overflow Is Silent"
      },
      {
        "k": "p",
        "t": "An overflowed result is not flagged with a red light in a badly written program; it is simply wrong. Liberia's finance and health systems store money and counts that must fit their word length, and the test that catches overflow is 'add the largest values you will ever see'."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Units That Sellers and Systems Use Differently"
      },
      {
        "k": "p",
        "t": "A phone box says 32 GB, meaning 32,000,000,000 bytes. The operating system divides by 1,024 three times and shows 29.8 GiB, often labelled GB. Nothing is missing; two counting conventions are in play, and a Grade 10 student can explain the difference at the shop counter."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "What a Period Test Asks"
      },
      {
        "k": "p",
        "t": "A fair period test on “Binary Arithmetic and Data Storage Units” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit precisely and use each in a sentence.",
          "Solve or trace a problem connected with “Binary Arithmetic and Data Storage Units” on paper, showing every line of working.",
          "Classify four examples using “Correct binary facts / Errors” and justify one placement.",
          "Find and correct a bug in a set of steps, a query or a program, and say what the bug was."
        ]
      },
      {
        "k": "p",
        "t": "Show every step of a tracing or conversion question, the way a Physics script shows working. A bare answer with no steps cannot be given full credit, because the teacher cannot see the method you ran."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Four Weeks of Study"
      },
      {
        "k": "p",
        "t": "A 4-week unit on “Binary Arithmetic and Data Storage Units” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
      },
      {
        "k": "table",
        "head": [
          "Week",
          "Study focus",
          "What students leave able to do"
        ],
        "rows": [
          [
            "1",
            "What “Binary Arithmetic and Data Storage Units” is, and where it already appears around us.",
            "Say what the unit is about and name two examples from Liberia."
          ],
          [
            "2",
            "Key ideas, distinctions and the unit table.",
            "Use the key terms and complete the distinction tables."
          ],
          [
            "3",
            "A Liberian example and the paper-first method, worked then written.",
            "Run the paper method and write the algorithm, table or report."
          ],
          [
            "4",
            "Worked problems, pair-debug, the computing fair and the period check.",
            "Solve a worked example, debug a bug, and sit the period check."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Check Yourself"
      },
      {
        "k": "p",
        "t": "Close the notes. (1) Say the unit title and one Liberian example. (2) Give the meaning of three terms without looking. (3) Work the paper method once more, showing every step. (4) Name one bug you would look for. (5) Say who you tell if a message asks for a photograph, a PIN or money. If any of those five stalls, go back to the table of terms and the worked example and run them again with a partner. Do not laugh at a bug — including your own."
      },
      {
        "k": "p",
        "t": "This is original supplementary teaching material for Liberian senior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, binary addition means adding binary numbers column by column from the right, carrying 1 whenever a column sums to 2 or more.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, carry means the fixed number of bits a computer uses for one number, such as 8, 16, 32 or 64.",
        "a": "False",
        "why": "carry means the 1 moved to the next column to the left when a column's sum is 2 (10₂) or 3 (11₂); the statement describes word length."
      },
      {
        "s": "In this unit, overflow means an error that occurs when a result needs more bits than the word length allows, so the leading bit is lost.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Every conversion, truth table, trace and program in the unit can be worked on paper; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the code or the steps, not in the person."
      },
      {
        "s": "Students should share passwords, PINs or one-time codes so a partner can finish the work.",
        "a": "False",
        "why": "A password, PIN or one-time code is secret. Sharing one is how accounts and mobile-money wallets are emptied."
      },
      {
        "s": "In binary, 1 + 1 = 10: write 0 and carry 1 to the next column.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "In 8-bit two's complement the range of values is −128 to +127.",
        "a": "True",
        "why": "The sign bit is worth −128 and the other seven bits add up to 127."
      },
      {
        "s": "Overflow is always reported to the user with an error message.",
        "a": "False",
        "why": "In many programs an overflowed result is silently wrong; the programmer must choose a word length that fits and test with the largest values."
      }
    ],
    "classify": {
      "title": "Correct binary facts / Errors",
      "groups": [
        {
          "name": "Correct binary facts",
          "items": [
            "1 + 1 = 10₂",
            "1 + 1 + 1 = 11₂",
            "shift left by 1 multiplies by 2",
            "8-bit two's complement range is −128 to +127",
            "invert and add 1 gives the negative",
            "1 byte = 8 bits"
          ]
        },
        {
          "name": "Errors",
          "items": [
            "1 + 1 = 2 in a binary column",
            "keeping the carry out after a two's complement subtraction",
            "−5 = 1000 0101 (sign-and-magnitude, not two's complement)",
            "1 KB is always exactly 1,000 bytes in every context",
            "255 + 1 fits in 8 unsigned bits",
            "inverting without adding 1"
          ]
        }
      ]
    },
    "diagram": {
      "title": "An 8-bit word with its sign bit and place values",
      "caption": "Label each part and state what it does in “Binary Arithmetic and Data Storage Units”.",
      "parts": [
        {
          "p": "Sign bit (bit 7)",
          "f": "0 for positive, 1 for negative in two's complement; worth −128"
        },
        {
          "p": "Bits 6 to 0",
          "f": "place values 64, 32, 16, 8, 4, 2, 1"
        },
        {
          "p": "Carry",
          "f": "the 1 passed to the next column when a column sums to 2 or 3"
        },
        {
          "p": "Carry out / overflow",
          "f": "the bit that falls off the left end when the result does not fit"
        },
        {
          "p": "Range",
          "f": "unsigned 0 to 255; two's complement −128 to +127"
        }
      ]
    },
    "experiment": {
      "title": "Column addition with carry cards and the complement flip",
      "aim": "To practise the ideas of “Binary Arithmetic and Data Storage Units” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Printed listings, cards and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class test log",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “Column addition with carry cards and the complement flip” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A Grade 10 group's fee program stores balances in 8 bits and a parent who pays LRD 200 twice sees a balance of 144, and the group announces that the computer 'cannot add'. What should happen next?",
        "a": "Work it on paper: 400 needs nine bits (1 1001 0000), the leading 1 is lost in 8 bits and 1001 0000 = 144 remains; name it overflow, choose a word length that fits the largest balance (16 or 32 bits), and add a test with the biggest value the school will ever record."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Binary Arithmetic and Data Storage Units”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's program or trace fails. What do you say, and why?",
        "a": "Remind the class that a bug is in the code or the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the exact line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian working life (a bank, a mobile-money agent, a clinic, a radio station, a business, a ministry).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as a bank's database, a mobile-money transaction, a hospital record, a radio station's schedule or a ministry's website."
      },
      {
        "q": "A clinic counter records patients in an 8-bit unsigned variable. On a vaccination day 300 patients attend. What does the counter show at the end of the day, and how should the program be fixed?",
        "a": "300 − 256 = 44 is shown after overflow; store the count in a larger word (16 or 32 bits) and test with the largest expected attendance."
      },
      {
        "q": "A 64 GB card is advertised in decimal units. About how many GiB (1,024-based) does the operating system report? Show the working.",
        "a": "64,000,000,000 ÷ 1,024 ÷ 1,024 ÷ 1,024 ≈ 59.6 GiB, so the phone shows about 59.6 'GB'."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “Column addition with carry cards and the complement flip” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, squared paper and printed listings",
      "A class computing chart and test log",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's device, kept dry and in sight"
    ],
    "aids": [
      "Word cards — binary addition, carry, word length",
      "A flowchart or trace table of “Column addition with carry cards and the complement flip”",
      "Eight-column addition sheets with carry cards",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing term and what it means.",
      "Work this week's paper method (a conversion, a truth table, a trace, a query or a design) again with a friend — no device needed.",
      "Find one example of this unit's idea in your community (a bank, a mobile-money kiosk, a clinic, a radio station, a business or a ministry office) and write a paragraph about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written trace, conversion, truth table or query with full working",
      "Pair-debug observed against the class test log",
      "A short written response to the Liberian case scenario"
    ],
    "worked": [
      {
        "q": "Add 0101₂ + 0011₂.",
        "steps": [
          "1+1=0 c1; 0+1+1=0 c1; 1+0+1=0 c1; 0+0+1=1."
        ],
        "a": "1000₂ (8)"
      },
      {
        "q": "Add 0111₂ + 0001₂.",
        "steps": [
          "Carries ripple through."
        ],
        "a": "1000₂ (8)"
      },
      {
        "q": "Write −5 in 8-bit two's complement.",
        "steps": [
          "0000 0101 → invert 1111 1010 → +1."
        ],
        "a": "1111 1011"
      },
      {
        "q": "What decimal is 1111 1111 as (a) unsigned and (b) two's complement?",
        "steps": [
          "255; invert → 0000 0000 +1 = 1, so −1."
        ],
        "a": "(a) 255 (b) −1"
      },
      {
        "q": "Add 1111 1111 + 0000 0001 in 8 unsigned bits. What is shown, and why?",
        "steps": [
          "Carry falls off the end."
        ],
        "a": "0000 0000 — overflow (256 does not fit)"
      },
      {
        "q": "0001 0100 (20) is shifted left by one place. Result and decimal?",
        "steps": [
          "Each place doubles."
        ],
        "a": "0010 1000 = 40"
      },
      {
        "q": "How many bits are in 5 bytes? How many bytes in 3 KB (decimal units)?",
        "steps": [
          "5 × 8; 3 × 1,000."
        ],
        "a": "40 bits; 3,000 bytes"
      },
      {
        "q": "Compute 9 − 4 in 4-bit two's complement.",
        "steps": [
          "4 = 0100 → 1011 + 1 = 1100; 1001 + 1100 = 1 0101; drop the carry."
        ],
        "a": "0101 = 5"
      }
    ]
  },
  {
    "grade": 10,
    "period": "IV",
    "sem": "Two",
    "icon": "🔀",
    "csPlan": true,
    "title": "Logic Gates and Boolean Algebra",
    "subtitle": "Computer Science · Original senior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Written for classes that may have no computer lab: every conversion, truth table, trace, query and program in the unit can be done on paper, and a shared device extends it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary precisely in speech, writing and examination answers.",
      "Solve the unit's problems on paper — conversions, truth tables, traces, queries, formulas or designs — showing every step of working.",
      "Evaluate a technology choice for its safety, legality, cost and effect on people in Liberia."
    ],
    "objectives": [
      "Define the key terms in “Logic Gates and Boolean Algebra” precisely and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm, program or procedure connected with this unit, on paper.",
      "Classify examples into the unit's two groups and justify each placement.",
      "Solve a worked example step by step, showing every line of working, and state the answer in a full sentence with its unit or type.",
      "Apply the unit's ideas to a fictional Liberian business, ministry, clinic or school scenario.",
      "Find and correct a bug in a set of steps, a circuit, a query or a program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared test log.",
      "Explain one Liberian example of this unit's idea (mobile money, the ACE submarine cable, a hospital record, a bank, the national examination system or a radio station)."
    ],
    "safeguard": "A senior high computing lesson uses paper traces, truth tables, printed listings and, when one is present, a shared school computer or the teacher's own device. Students never share passwords, PINs or one-time codes, never install software on a school machine without permission, and never photograph, record or post a classmate without consent. A program written in class must never be used to guess a password, send bulk messages or enter another person's account — that is a crime, not a prank. If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "Logic gates take binary inputs and give a binary output. AND outputs 1 only when all inputs are 1; OR outputs 1 when any input is 1; NOT inverts; NAND and NOR are AND and OR followed by NOT; XOR outputs 1 when the inputs differ. Truth tables list every input combination (2ⁿ rows for n inputs). Boolean expressions use · for AND, + for OR and a bar or ¬ for NOT, and follow laws such as A + 0 = A, A · 1 = A and De Morgan's laws.",
    "focus": [
      "Worked demonstration on paper",
      "Pair programming and debugging",
      "Liberian case scenario",
      "Practical and period check"
    ],
    "terms": [
      {
        "t": "logic gate",
        "d": "an electronic circuit that takes one or more binary inputs and produces one binary output according to a rule",
        "x": "In this unit, logic gate means an electronic circuit that takes one or more binary inputs and produces one binary output according to a rule."
      },
      {
        "t": "AND gate",
        "d": "a gate whose output is 1 only when every input is 1; written A · B or AB",
        "x": "In this unit, AND gate means a gate whose output is 1 only when every input is 1; written A · B or AB."
      },
      {
        "t": "OR gate",
        "d": "a gate whose output is 1 when at least one input is 1; written A + B",
        "x": "In this unit, OR gate means a gate whose output is 1 when at least one input is 1; written A + B."
      },
      {
        "t": "NOT gate",
        "d": "a gate with one input whose output is the opposite of the input; written Ā or ¬A",
        "x": "In this unit, NOT gate means a gate with one input whose output is the opposite of the input; written Ā or ¬A."
      },
      {
        "t": "NAND gate",
        "d": "an AND gate followed by a NOT; output 0 only when every input is 1",
        "x": "In this unit, NAND gate means an AND gate followed by a NOT; output 0 only when every input is 1."
      },
      {
        "t": "NOR gate",
        "d": "an OR gate followed by a NOT; output 1 only when every input is 0",
        "x": "In this unit, NOR gate means an OR gate followed by a NOT; output 1 only when every input is 0."
      },
      {
        "t": "XOR gate",
        "d": "exclusive OR: output 1 when the inputs are different, 0 when they are the same; written A ⊕ B",
        "x": "In this unit, XOR gate means exclusive OR: output 1 when the inputs are different, 0 when they are the same; written A ⊕ B."
      },
      {
        "t": "truth table",
        "d": "a table listing every combination of inputs and the resulting output of a gate or circuit",
        "x": "In this unit, truth table means a table listing every combination of inputs and the resulting output of a gate or circuit."
      },
      {
        "t": "Boolean algebra",
        "d": "the algebra of the values 0 and 1 using AND, OR and NOT, developed by George Boole",
        "x": "In this unit, Boolean algebra means the algebra of the values 0 and 1 using AND, OR and NOT, developed by George Boole."
      },
      {
        "t": "Boolean expression",
        "d": "a formula built from variables, AND (·), OR (+) and NOT (bar), such as A · B̄ + C",
        "x": "In this unit, Boolean expression means a formula built from variables, AND (·), OR (+) and NOT (bar), such as A · B̄ + C."
      },
      {
        "t": "logic circuit",
        "d": "gates joined so that the output of one feeds the input of another to perform a task",
        "x": "In this unit, logic circuit means gates joined so that the output of one feeds the input of another to perform a task."
      },
      {
        "t": "De Morgan's laws",
        "d": "the rules that NOT (A · B) = Ā + B̄ and NOT (A + B) = Ā · B̄",
        "x": "In this unit, De Morgan's laws means the rules that NOT (A · B) = Ā + B̄ and NOT (A + B) = Ā · B̄."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “logic gate” in this unit?",
        "a": "an electronic circuit that takes one or more binary inputs and produces one binary output according to a rule."
      },
      {
        "q": "What is meant by “AND gate” in this unit?",
        "a": "a gate whose output is 1 only when every input is 1; written A · B or AB."
      },
      {
        "q": "What is meant by “OR gate” in this unit?",
        "a": "a gate whose output is 1 when at least one input is 1; written A + B."
      },
      {
        "q": "What is meant by “NOT gate” in this unit?",
        "a": "a gate with one input whose output is the opposite of the input; written Ā or ¬A."
      },
      {
        "q": "What is meant by “NAND gate” in this unit?",
        "a": "an AND gate followed by a NOT; output 0 only when every input is 1."
      },
      {
        "q": "What is meant by “NOR gate” in this unit?",
        "a": "an OR gate followed by a NOT; output 1 only when every input is 0."
      },
      {
        "q": "What is meant by “XOR gate” in this unit?",
        "a": "exclusive OR: output 1 when the inputs are different, 0 when they are the same; written A ⊕ B."
      },
      {
        "q": "What is meant by “truth table” in this unit?",
        "a": "a table listing every combination of inputs and the resulting output of a gate or circuit."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A Grade 10 group designs a school-gate alarm to sound when the gate is open OR the window is broken, tests it in the daytime, and finds it rings all day while the gate is open for students."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Add the missing condition — the alarm should sound only when it is NOT school hours — rewrite as Alarm = (G + W) · H̄, redraw the circuit with an OR feeding an AND whose other input is NOT H, and complete the 8-row truth table to confirm the daytime rows give 0."
      },
      {
        "q": "State this unit idea in your own words: AND gives 1 only when both inputs are 1; OR gives 1 when at least one input is 1; NOT reverses its input.",
        "a": "AND gives 1 only when both inputs are 1; OR gives 1 when at least one input is 1; NOT reverses its input."
      },
      {
        "q": "State this unit idea in your own words: A truth table for n inputs has 2ⁿ rows, one for every combination of inputs.",
        "a": "A truth table for n inputs has 2ⁿ rows, one for every combination of inputs."
      },
      {
        "q": "State De Morgan's two laws.",
        "a": "NOT (A · B) = Ā + B̄ and NOT (A + B) = Ā · B̄."
      },
      {
        "q": "Why is a truth table written in binary counting order?",
        "a": "So that every combination of inputs appears exactly once and none is missed."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Logic Gates and Boolean Algebra” Is"
      },
      {
        "k": "p",
        "t": "Every decision a processor makes is built from three **logic gates**: **AND** (output 1 only if both inputs are 1), **OR** (1 if either is 1) and **NOT** (flips the input). **NAND**, **NOR** and **XOR** are useful combinations. A **truth table** lists every combination of inputs with the output, and **Boolean algebra** writes the same logic as an expression — A · B, A + B, Ā — that can be simplified. A **logic circuit** joins gates to make, for example, the alarm on a school generator or the adder inside a CPU. Groups whose alarm rings all day because it sounds whenever the gate is open have left a NOT and an AND out of the expression. Add the missing condition — the alarm should sound only when it is NOT school hours — rewrite as Alarm = (G + W) · H̄, redraw the circuit with an OR feeding an AND whose other input is NOT H, and complete the 8-row truth table to confirm the daytime rows give 0. AND gives 1 only when both inputs are 1; OR gives 1 when at least one input is 1; NOT reverses its input. A truth table for n inputs has 2ⁿ rows, one for every combination of inputs."
      },
      {
        "k": "p",
        "t": "Logic gates take binary inputs and give a binary output. AND outputs 1 only when all inputs are 1; OR outputs 1 when any input is 1; NOT inverts; NAND and NOR are AND and OR followed by NOT; XOR outputs 1 when the inputs differ. Truth tables list every input combination (2ⁿ rows for n inputs). Boolean expressions use · for AND, + for OR and a bar or ¬ for NOT, and follow laws such as A + 0 = A, A · 1 = A and De Morgan's laws."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: AND gives 1 only when both inputs are 1; OR gives 1 when at least one input is 1; NOT reverses its input. A truth table for n inputs has 2ⁿ rows, one for every combination of inputs."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Ideas in This Unit"
      },
      {
        "k": "p",
        "t": "Each idea below is a working definition for Grade 10. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
      },
      {
        "k": "table",
        "head": [
          "Term",
          "What it means",
          "A sentence that uses it"
        ],
        "rows": [
          [
            "logic gate",
            "an electronic circuit that takes one or more binary inputs and produces one binary output according to a rule",
            "In this unit, logic gate means an electronic circuit that takes one or more binary inputs and produces one binary output according to a rule."
          ],
          [
            "AND gate",
            "a gate whose output is 1 only when every input is 1; written A · B or AB",
            "In this unit, AND gate means a gate whose output is 1 only when every input is 1; written A · B or AB."
          ],
          [
            "OR gate",
            "a gate whose output is 1 when at least one input is 1; written A + B",
            "In this unit, OR gate means a gate whose output is 1 when at least one input is 1; written A + B."
          ],
          [
            "NOT gate",
            "a gate with one input whose output is the opposite of the input; written Ā or ¬A",
            "In this unit, NOT gate means a gate with one input whose output is the opposite of the input; written Ā or ¬A."
          ],
          [
            "NAND gate",
            "an AND gate followed by a NOT; output 0 only when every input is 1",
            "In this unit, NAND gate means an AND gate followed by a NOT; output 0 only when every input is 1."
          ],
          [
            "NOR gate",
            "an OR gate followed by a NOT; output 1 only when every input is 0",
            "In this unit, NOR gate means an OR gate followed by a NOT; output 1 only when every input is 0."
          ],
          [
            "XOR gate",
            "exclusive OR: output 1 when the inputs are different, 0 when they are the same; written A ⊕ B",
            "In this unit, XOR gate means exclusive OR: output 1 when the inputs are different, 0 when they are the same; written A ⊕ B."
          ],
          [
            "truth table",
            "a table listing every combination of inputs and the resulting output of a gate or circuit",
            "In this unit, truth table means a table listing every combination of inputs and the resulting output of a gate or circuit."
          ],
          [
            "Boolean algebra",
            "the algebra of the values 0 and 1 using AND, OR and NOT, developed by George Boole",
            "In this unit, Boolean algebra means the algebra of the values 0 and 1 using AND, OR and NOT, developed by George Boole."
          ],
          [
            "Boolean expression",
            "a formula built from variables, AND (·), OR (+) and NOT (bar), such as A · B̄ + C",
            "In this unit, Boolean expression means a formula built from variables, AND (·), OR (+) and NOT (bar), such as A · B̄ + C."
          ],
          [
            "logic circuit",
            "gates joined so that the output of one feeds the input of another to perform a task",
            "In this unit, logic circuit means gates joined so that the output of one feeds the input of another to perform a task."
          ],
          [
            "De Morgan's laws",
            "the rules that NOT (A · B) = Ā + B̄ and NOT (A + B) = Ā · B̄",
            "In this unit, De Morgan's laws means the rules that NOT (A · B) = Ā + B̄ and NOT (A + B) = Ā · B̄."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Tell Them Apart"
      },
      {
        "k": "bul",
        "items": [
          "**AND** — all inputs 1; **OR** — any input 1; **XOR** — inputs differ.",
          "**NAND** and **NOR** are AND and OR with a NOT on the output; either alone can build every other gate.",
          "**Truth table** shows every case; **Boolean expression** writes the rule; **circuit** builds it.",
          "**·** means AND, **+** means OR, a **bar** means NOT — not arithmetic.",
          "**2 inputs** → 4 rows; **3 inputs** → 8 rows; **n inputs** → 2ⁿ rows."
        ]
      },
      {
        "k": "table",
        "head": [
          "A  B",
          "AND",
          "OR",
          "XOR"
        ],
        "rows": [
          [
            "0  0",
            "0",
            "0",
            "0"
          ],
          [
            "0  1",
            "0",
            "1",
            "1"
          ],
          [
            "1  0",
            "0",
            "1",
            "1"
          ],
          [
            "1  1",
            "1",
            "1",
            "0"
          ],
          [
            "NOT A for A = 0",
            "1",
            "—",
            "—"
          ],
          [
            "NOT A for A = 1",
            "0",
            "—",
            "—"
          ]
        ]
      },
      {
        "k": "p",
        "t": "A second table for this unit, so the distinction can be practised twice:"
      },
      {
        "k": "table",
        "head": [
          "Boolean law",
          "Expression",
          "Meaning in words"
        ],
        "rows": [
          [
            "Identity",
            "A + 0 = A;  A · 1 = A",
            "OR with 0 and AND with 1 change nothing"
          ],
          [
            "Null",
            "A + 1 = 1;  A · 0 = 0",
            "OR with 1 is always 1; AND with 0 is always 0"
          ],
          [
            "Complement",
            "A + Ā = 1;  A · Ā = 0",
            "A thing or its opposite is always true; both at once is never"
          ],
          [
            "Idempotent",
            "A + A = A;  A · A = A",
            "Repeating an input changes nothing"
          ],
          [
            "De Morgan",
            "NOT (A · B) = Ā + B̄",
            "Not both means at least one is not"
          ],
          [
            "De Morgan",
            "NOT (A + B) = Ā · B̄",
            "Neither means both are not"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why This Matters in Liberia"
      },
      {
        "k": "p",
        "t": "A generator that must start only when the mains is off AND the fuel is above the minimum; a school gate alarm that sounds if the door opens OR the window breaks, but NOT during school hours; a mobile-money transfer allowed only when the PIN is correct AND the balance is enough — each is a Boolean expression and a small circuit of gates. Liberian technicians wire these with relays and sensors every week, and every adder in every processor in the country is made of the same gates. Truth tables need only a pencil, which is why West African examinations love them."
      },
      {
        "k": "p",
        "t": "This course is an **original teaching resource**, not an official syllabus transcription. A school without a computer lab is not a school without Computer Science. Teachers should compare the unit with the school's approved scheme of work before use."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Paper-First Method"
      },
      {
        "k": "p",
        "t": "The class investigation is **“Human logic gates and the generator-alarm circuit”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Two students hold cards for inputs A and B (0 or 1); a third acts as a gate and must announce the output; the class calls out combinations and fills the truth table on the board for AND, OR, NOT, NAND, NOR and XOR.",
          "Pairs write the rule for a generator alarm in words — sound if the mains is OFF AND the fuel is LOW, unless the override switch is ON — then as a Boolean expression: Alarm = M̄ · L · Ō.",
          "They draw the circuit (a NOT on M, a NOT on O, a three-input AND) and complete the 8-row truth table for M, L, O.",
          "The navigator proposes a change (the alarm should also sound if the temperature is HIGH); the driver adds an OR gate and extends the table, then simplifies where a law allows.",
          "If a simulator or a few switches and a bulb are available, one pair builds one gate physically while the others predict each output from the table; otherwise the tables and circuit drawings are the finished work."
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Worked Example in Prose"
      },
      {
        "k": "p",
        "t": "**Problem.** A mobile-money payment P is allowed when the PIN is correct (C = 1) AND the balance is sufficient (S = 1) AND the account is NOT blocked (B = 1 means blocked). Write the Boolean expression, draw or describe the circuit, complete the truth table row for C = 1, S = 1, B = 1 and for C = 1, S = 1, B = 0, and say how many rows the full table has."
      },
      {
        "k": "num",
        "items": [
          "Expression: P = C · S · B̄.",
          "Circuit: B passes through a NOT gate; its output, C and S feed a three-input AND gate whose output is P.",
          "Row C = 1, S = 1, B = 1: B̄ = 0, so 1 · 1 · 0 = 0 — payment refused because the account is blocked.",
          "Row C = 1, S = 1, B = 0: B̄ = 1, so 1 · 1 · 1 = 1 — payment allowed.",
          "Three inputs give 2³ = 8 rows."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** P = C · S · B̄, a NOT on B feeding an AND with C and S; P = 0 when blocked, P = 1 when correct PIN, sufficient balance and not blocked; the table has 8 rows."
      },
      {
        "k": "p",
        "t": "Notice the method: name what you know, run one step at a time, write the result of each step, then state the answer in a full sentence. That is the same habit a Physics class uses on a numerical problem; here the 'calculation' is a trace, a conversion, a truth table, a formula, a query or a debug."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Common Mistakes"
      },
      {
        "k": "bul",
        "items": [
          "Reading + as addition and writing 1 + 1 = 2 in a truth table; in Boolean algebra 1 + 1 = 1.",
          "Listing input combinations at random and missing one; count them in binary order 00, 01, 10, 11.",
          "Confusing OR (either or both) with XOR (exactly one).",
          "Applying De Morgan's law by moving the bar without changing · to + (or + to ·)."
        ]
      },
      {
        "k": "p",
        "t": "The class rule still holds when a mistake appears: **we try, we debug, we do not laugh at a mistake.** A bug is in the steps, not in the person."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Safety, Ethics and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN or a one-time code, and nobody installs software on a school machine without permission. A program written in this course is never pointed at another person's account, phone or wallet: guessing a password, sending bulk messages or reading someone's data without consent is a crime under Liberian law, not a prank. Copying a program from a classmate and submitting it as your own is plagiarism. Pair work shares the thinking, not the credit for work you did not do."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered (screenshots, not deletions), and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Pair Roles: Driver and Navigator"
      },
      {
        "k": "p",
        "t": "A computing pair has two jobs that swap. The **driver** writes or works the next step. The **navigator** reads the algorithm or the listing, watches for a bug, and says 'stop' before a wrong line is copied. After five minutes they swap, so both practise both jobs. A third student may sit as **checker** and tick each step on the trace table. Taking turns is a computing skill, not a punishment for having only one computer — or none."
      },
      {
        "k": "table",
        "head": [
          "Role",
          "What this person does",
          "What this person does not do"
        ],
        "rows": [
          [
            "Driver",
            "Works or writes the current step",
            "Does not skip the navigator's 'stop'"
          ],
          [
            "Navigator",
            "Reads the steps and watches for bugs",
            "Does not grab the pencil, the keyboard or the mouse"
          ],
          [
            "Checker",
            "Ticks each step and records one bug on the class chart",
            "Does not laugh at a mistake"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Fictional Liberian Scenario"
      },
      {
        "k": "p",
        "t": "A Grade 10 group designs a school-gate alarm to sound when the gate is open OR the window is broken, tests it in the daytime, and finds it rings all day while the gate is open for students."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Add the missing condition — the alarm should sound only when it is NOT school hours — rewrite as Alarm = (G + W) · H̄, redraw the circuit with an OR feeding an AND whose other input is NOT H, and complete the 8-row truth table to confirm the daytime rows give 0."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Worked Computing Reasoning"
      },
      {
        "k": "p",
        "t": "Add the missing condition — the alarm should sound only when it is NOT school hours — rewrite as Alarm = (G + W) · H̄, redraw the circuit with an OR feeding an AND whose other input is NOT H, and complete the 8-row truth table to confirm the daytime rows give 0."
      },
      {
        "k": "p",
        "t": "When you answer a scenario question, use this three-part shape: (1) name the computing idea (algorithm, data, network, security, binary, database, …); (2) say what a person should do, in order; (3) say why, with a unit term in the reason. Vague good intentions without a term do not yet show that the unit has been learned."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Practise It on Paper"
      },
      {
        "k": "p",
        "t": "The investigation **“Human logic gates and the generator-alarm circuit”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
      },
      {
        "k": "table",
        "head": [
          "Paper object",
          "What it stands for",
          "What we write afterwards"
        ],
        "rows": [
          [
            "0/1 input cards",
            "The inputs to a gate",
            "The completed truth table"
          ],
          [
            "Gate symbol cards",
            "The circuit",
            "The Boolean expression the circuit computes"
          ],
          [
            "Rule in words",
            "A Liberian technician's requirement",
            "The expression, circuit and table"
          ],
          [
            "Class chart",
            "Logic bugs the class found (missing row, OR for XOR)",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Build the Table in Binary Order"
      },
      {
        "k": "p",
        "t": "For two inputs write 00, 01, 10, 11; for three, 000 to 111 — counting in binary guarantees no combination is missed and none repeated. Then evaluate each intermediate gate in its own column before the final output. Examiners give marks for the intermediate columns."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "NAND Is Enough"
      },
      {
        "k": "p",
        "t": "A NAND gate can be wired to make NOT (join both inputs), AND (NAND then NOT) and OR (NOT both inputs, then NAND). So an entire processor could be built from one kind of gate — which is roughly what chip makers do, because one kind is cheaper to manufacture."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "From Words to Algebra"
      },
      {
        "k": "p",
        "t": "'Only if both' is AND. 'If either' is OR. 'Unless' introduces a NOT. 'But not both' is XOR. Translating a Liberian technician's plain-language rule into an expression is the skill; the gates follow the expression."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "De Morgan in Plain Speech"
      },
      {
        "k": "p",
        "t": "'It is not true that the PIN is correct and the balance is sufficient' means 'the PIN is wrong or the balance is insufficient (or both)'. That is NOT (C · S) = C̄ + S̄. Say it aloud in words before you trust the algebra."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "What a Period Test Asks"
      },
      {
        "k": "p",
        "t": "A fair period test on “Logic Gates and Boolean Algebra” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit precisely and use each in a sentence.",
          "Solve or trace a problem connected with “Logic Gates and Boolean Algebra” on paper, showing every line of working.",
          "Classify four examples using “Output is 1 / Output is 0” and justify one placement.",
          "Find and correct a bug in a set of steps, a query or a program, and say what the bug was."
        ]
      },
      {
        "k": "p",
        "t": "Show every step of a tracing or conversion question, the way a Physics script shows working. A bare answer with no steps cannot be given full credit, because the teacher cannot see the method you ran."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Four Weeks of Study"
      },
      {
        "k": "p",
        "t": "A 4-week unit on “Logic Gates and Boolean Algebra” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
      },
      {
        "k": "table",
        "head": [
          "Week",
          "Study focus",
          "What students leave able to do"
        ],
        "rows": [
          [
            "1",
            "What “Logic Gates and Boolean Algebra” is, and where it already appears around us.",
            "Say what the unit is about and name two examples from Liberia."
          ],
          [
            "2",
            "Key ideas, distinctions and the unit table.",
            "Use the key terms and complete the distinction tables."
          ],
          [
            "3",
            "A Liberian example and the paper-first method, worked then written.",
            "Run the paper method and write the algorithm, table or report."
          ],
          [
            "4",
            "Worked problems, pair-debug, the computing fair and the period check.",
            "Solve a worked example, debug a bug, and sit the period check."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Check Yourself"
      },
      {
        "k": "p",
        "t": "Close the notes. (1) Say the unit title and one Liberian example. (2) Give the meaning of three terms without looking. (3) Work the paper method once more, showing every step. (4) Name one bug you would look for. (5) Say who you tell if a message asks for a photograph, a PIN or money. If any of those five stalls, go back to the table of terms and the worked example and run them again with a partner. Do not laugh at a bug — including your own."
      },
      {
        "k": "p",
        "t": "This is original supplementary teaching material for Liberian senior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, logic gate means an electronic circuit that takes one or more binary inputs and produces one binary output according to a rule.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, AND gate means a gate whose output is 1 when at least one input is 1; written A + B.",
        "a": "False",
        "why": "AND gate means a gate whose output is 1 only when every input is 1; written A · B or AB; the statement describes OR gate."
      },
      {
        "s": "In this unit, NOT gate means a gate with one input whose output is the opposite of the input; written Ā or ¬A.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Every conversion, truth table, trace and program in the unit can be worked on paper; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the code or the steps, not in the person."
      },
      {
        "s": "Students should share passwords, PINs or one-time codes so a partner can finish the work.",
        "a": "False",
        "why": "A password, PIN or one-time code is secret. Sharing one is how accounts and mobile-money wallets are emptied."
      },
      {
        "s": "AND gives 1 only when both inputs are 1; OR gives 1 when at least one input is 1; NOT reverses its input.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "In Boolean algebra, 1 + 1 = 1.",
        "a": "True",
        "why": "+ means OR; 1 OR 1 is 1, not 2."
      },
      {
        "s": "An XOR gate outputs 1 when both of its inputs are 1.",
        "a": "False",
        "why": "XOR outputs 1 only when the inputs differ; 1 XOR 1 is 0."
      }
    ],
    "classify": {
      "title": "Output is 1 / Output is 0",
      "groups": [
        {
          "name": "Output is 1",
          "items": [
            "1 AND 1",
            "0 OR 1",
            "NOT 0",
            "1 XOR 0",
            "0 NAND 0",
            "0 NOR 0"
          ]
        },
        {
          "name": "Output is 0",
          "items": [
            "1 AND 0",
            "0 OR 0",
            "NOT 1",
            "1 XOR 1",
            "1 NAND 1",
            "1 NOR 0"
          ]
        }
      ]
    },
    "diagram": {
      "title": "The six standard logic gates and their symbols",
      "caption": "Label each part and state what it does in “Logic Gates and Boolean Algebra”.",
      "parts": [
        {
          "p": "AND",
          "f": "a D-shaped symbol; output 1 only when all inputs are 1"
        },
        {
          "p": "OR",
          "f": "a curved-back arrowhead symbol; output 1 when any input is 1"
        },
        {
          "p": "NOT",
          "f": "a triangle with a small circle; output is the inverse"
        },
        {
          "p": "NAND and NOR",
          "f": "AND and OR symbols with a small circle on the output"
        },
        {
          "p": "XOR",
          "f": "an OR symbol with an extra curved line; output 1 when inputs differ"
        }
      ]
    },
    "experiment": {
      "title": "Human logic gates and the generator-alarm circuit",
      "aim": "To practise the ideas of “Logic Gates and Boolean Algebra” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Printed listings, cards and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class test log",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “Human logic gates and the generator-alarm circuit” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A Grade 10 group designs a school-gate alarm to sound when the gate is open OR the window is broken, tests it in the daytime, and finds it rings all day while the gate is open for students. What should happen next?",
        "a": "Add the missing condition — the alarm should sound only when it is NOT school hours — rewrite as Alarm = (G + W) · H̄, redraw the circuit with an OR feeding an AND whose other input is NOT H, and complete the 8-row truth table to confirm the daytime rows give 0."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Logic Gates and Boolean Algebra”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's program or trace fails. What do you say, and why?",
        "a": "Remind the class that a bug is in the code or the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the exact line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian working life (a bank, a mobile-money agent, a clinic, a radio station, a business, a ministry).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as a bank's database, a mobile-money transaction, a hospital record, a radio station's schedule or a ministry's website."
      },
      {
        "q": "A generator should start (S = 1) when the mains is off (M = 0) AND the fuel is above minimum (F = 1), OR when the manual switch is on (X = 1). Write the expression and the truth-table rows for (M, F, X) = (0, 1, 0), (1, 1, 0) and (1, 0, 1).",
        "a": "S = M̄ · F + X; (0,1,0): 1·1 + 0 = 1; (1,1,0): 0·1 + 0 = 0; (1,0,1): 0·0 + 1 = 1."
      },
      {
        "q": "Simplify A · 1 + A · 0 + Ā · A and say which laws you used.",
        "a": "A · 1 = A (identity), A · 0 = 0 (null), Ā · A = 0 (complement), so the expression is A + 0 + 0 = A."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “Human logic gates and the generator-alarm circuit” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, squared paper and printed listings",
      "A class computing chart and test log",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's device, kept dry and in sight"
    ],
    "aids": [
      "Word cards — logic gate, AND gate, OR gate",
      "A flowchart or trace table of “Human logic gates and the generator-alarm circuit”",
      "Gate symbol cards, 0/1 input cards and blank 4-row and 8-row truth tables",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing term and what it means.",
      "Work this week's paper method (a conversion, a truth table, a trace, a query or a design) again with a friend — no device needed.",
      "Find one example of this unit's idea in your community (a bank, a mobile-money kiosk, a clinic, a radio station, a business or a ministry office) and write a paragraph about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written trace, conversion, truth table or query with full working",
      "Pair-debug observed against the class test log",
      "A short written response to the Liberian case scenario"
    ],
    "worked": [
      {
        "q": "Give the output of AND, OR and XOR for inputs 1 and 0.",
        "steps": [
          "Both? no. Either? yes. Different? yes."
        ],
        "a": "AND 0, OR 1, XOR 1"
      },
      {
        "q": "How many rows does a truth table with 3 inputs have?",
        "steps": [
          "2³."
        ],
        "a": "8"
      },
      {
        "q": "NAND with inputs 1 and 1?",
        "steps": [
          "AND gives 1; NOT gives 0."
        ],
        "a": "0"
      },
      {
        "q": "NOR with inputs 0 and 0?",
        "steps": [
          "OR gives 0; NOT gives 1."
        ],
        "a": "1"
      },
      {
        "q": "Evaluate A · B̄ + C for A = 1, B = 0, C = 0.",
        "steps": [
          "B̄ = 1; 1 · 1 = 1; 1 + 0 = 1."
        ],
        "a": "1"
      },
      {
        "q": "Apply De Morgan to NOT (A + B).",
        "steps": [
          "Break the bar, change the sign."
        ],
        "a": "Ā · B̄"
      },
      {
        "q": "Simplify A + A · B.",
        "steps": [
          "A · (1 + B) = A · 1."
        ],
        "a": "A (absorption)"
      },
      {
        "q": "Write the expression for 'alarm if gate open or window broken, but not during school hours'.",
        "steps": [
          "OR the events, AND with NOT hours."
        ],
        "a": "(G + W) · H̄"
      }
    ]
  },
  {
    "grade": 10,
    "period": "V",
    "sem": "Two",
    "icon": "⚙️",
    "csPlan": true,
    "title": "Computer Architecture — Inside the CPU",
    "subtitle": "Computer Science · Original senior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Written for classes that may have no computer lab: every conversion, truth table, trace, query and program in the unit can be done on paper, and a shared device extends it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary precisely in speech, writing and examination answers.",
      "Solve the unit's problems on paper — conversions, truth tables, traces, queries, formulas or designs — showing every step of working.",
      "Evaluate a technology choice for its safety, legality, cost and effect on people in Liberia."
    ],
    "objectives": [
      "Define the key terms in “Computer Architecture — Inside the CPU” precisely and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm, program or procedure connected with this unit, on paper.",
      "Classify examples into the unit's two groups and justify each placement.",
      "Solve a worked example step by step, showing every line of working, and state the answer in a full sentence with its unit or type.",
      "Apply the unit's ideas to a fictional Liberian business, ministry, clinic or school scenario.",
      "Find and correct a bug in a set of steps, a circuit, a query or a program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared test log.",
      "Explain one Liberian example of this unit's idea (mobile money, the ACE submarine cable, a hospital record, a bank, the national examination system or a radio station)."
    ],
    "safeguard": "A senior high computing lesson uses paper traces, truth tables, printed listings and, when one is present, a shared school computer or the teacher's own device. Students never share passwords, PINs or one-time codes, never install software on a school machine without permission, and never photograph, record or post a classmate without consent. A program written in class must never be used to guess a password, send bulk messages or enter another person's account — that is a crime, not a prank. If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "The von Neumann (stored-program) architecture has a CPU, a single main memory holding instructions and data, input/output, and three buses: address, data and control. The CPU's control unit, arithmetic logic unit and registers (program counter, memory address register, memory data register, current instruction register, accumulator) carry out the fetch–decode–execute cycle. Performance depends on clock speed, number of cores, cache size and word length.",
    "focus": [
      "Worked demonstration on paper",
      "Pair programming and debugging",
      "Liberian case scenario",
      "Practical and period check"
    ],
    "terms": [
      {
        "t": "von Neumann architecture",
        "d": "the design in which a single memory holds both instructions and data, connected to the CPU by buses",
        "x": "In this unit, von Neumann architecture means the design in which a single memory holds both instructions and data, connected to the CPU by buses."
      },
      {
        "t": "register",
        "d": "a very small, very fast storage location inside the CPU that holds one value during processing",
        "x": "In this unit, register means a very small, very fast storage location inside the CPU that holds one value during processing."
      },
      {
        "t": "program counter",
        "d": "the register that holds the address of the next instruction to be fetched; PC",
        "x": "In this unit, program counter means the register that holds the address of the next instruction to be fetched; PC."
      },
      {
        "t": "memory address register",
        "d": "the register that holds the address of the memory location about to be read or written; MAR",
        "x": "In this unit, memory address register means the register that holds the address of the memory location about to be read or written; MAR."
      },
      {
        "t": "memory data register",
        "d": "the register that holds the data just read from memory or about to be written; MDR",
        "x": "In this unit, memory data register means the register that holds the data just read from memory or about to be written; MDR."
      },
      {
        "t": "current instruction register",
        "d": "the register that holds the instruction currently being decoded and executed; CIR",
        "x": "In this unit, current instruction register means the register that holds the instruction currently being decoded and executed; CIR."
      },
      {
        "t": "accumulator",
        "d": "the register in which the arithmetic logic unit keeps its working results; ACC",
        "x": "In this unit, accumulator means the register in which the arithmetic logic unit keeps its working results; ACC."
      },
      {
        "t": "address bus",
        "d": "the set of wires that carries a memory address from the CPU to memory, one direction only",
        "x": "In this unit, address bus means the set of wires that carries a memory address from the CPU to memory, one direction only."
      },
      {
        "t": "data bus",
        "d": "the set of wires that carries data between the CPU and memory in both directions",
        "x": "In this unit, data bus means the set of wires that carries data between the CPU and memory in both directions."
      },
      {
        "t": "control bus",
        "d": "the wires that carry timing and command signals such as read, write and clock",
        "x": "In this unit, control bus means the wires that carry timing and command signals such as read, write and clock."
      },
      {
        "t": "cache",
        "d": "a small amount of very fast memory inside or beside the CPU that keeps recently used instructions and data",
        "x": "In this unit, cache means a small amount of very fast memory inside or beside the CPU that keeps recently used instructions and data."
      },
      {
        "t": "core",
        "d": "one complete processing unit; a multi-core CPU has several that can run instructions at the same time",
        "x": "In this unit, core means one complete processing unit; a multi-core CPU has several that can run instructions at the same time."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “von Neumann architecture” in this unit?",
        "a": "the design in which a single memory holds both instructions and data, connected to the CPU by buses."
      },
      {
        "q": "What is meant by “register” in this unit?",
        "a": "a very small, very fast storage location inside the CPU that holds one value during processing."
      },
      {
        "q": "What is meant by “program counter” in this unit?",
        "a": "the register that holds the address of the next instruction to be fetched; PC."
      },
      {
        "q": "What is meant by “memory address register” in this unit?",
        "a": "the register that holds the address of the memory location about to be read or written; MAR."
      },
      {
        "q": "What is meant by “memory data register” in this unit?",
        "a": "the register that holds the data just read from memory or about to be written; MDR."
      },
      {
        "q": "What is meant by “current instruction register” in this unit?",
        "a": "the register that holds the instruction currently being decoded and executed; CIR."
      },
      {
        "q": "What is meant by “accumulator” in this unit?",
        "a": "the register in which the arithmetic logic unit keeps its working results; ACC."
      },
      {
        "q": "What is meant by “address bus” in this unit?",
        "a": "the set of wires that carries a memory address from the CPU to memory, one direction only."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A Grade 10 group traces a program and reports that it 'runs LOAD 5 forever', and blames the simulator."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Replay the fetch on paper: after the instruction reaches the CIR the PC must become PC + 1, otherwise the next fetch reads the same address; add the PC column to the trace table, tick it every fetch, and note that a jump instruction is the only legitimate way the PC changes otherwise."
      },
      {
        "q": "State this unit idea in your own words: The program counter holds the address of the next instruction, and it is increased during every fetch.",
        "a": "The program counter holds the address of the next instruction, and it is increased during every fetch."
      },
      {
        "q": "State this unit idea in your own words: The address bus carries where, the data bus carries what, and the control bus carries the signals that say when and which way.",
        "a": "The address bus carries where, the data bus carries what, and the control bus carries the signals that say when and which way."
      },
      {
        "q": "What is the role of the memory data register?",
        "a": "It holds the data or instruction just read from memory, or the data about to be written to memory."
      },
      {
        "q": "Name four factors that affect CPU performance.",
        "a": "Clock speed, number of cores, cache size and word length (also bus widths)."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Computer Architecture — Inside the CPU” Is"
      },
      {
        "k": "p",
        "t": "The **von Neumann architecture** — one memory for instructions and data, a processor, and buses between them — is the plan of almost every computer. Inside the CPU the **control unit** steers, the **arithmetic logic unit** calculates, and **registers** such as the **program counter**, the **memory address register**, the **memory data register** and the **accumulator** hold the values in flight. The **address bus**, **data bus** and **control bus** connect the CPU to memory. Each **fetch–decode–execute** cycle moves one instruction through this machinery, **clock speed** sets the pace, **cache** and multiple **cores** speed it up. Groups whose trace runs the first instruction forever have skipped the step that increases the program counter. Replay the fetch on paper: after the instruction reaches the CIR the PC must become PC + 1, otherwise the next fetch reads the same address; add the PC column to the trace table, tick it every fetch, and note that a jump instruction is the only legitimate way the PC changes otherwise. The program counter holds the address of the next instruction, and it is increased during every fetch. The address bus carries where, the data bus carries what, and the control bus carries the signals that say when and which way."
      },
      {
        "k": "p",
        "t": "The von Neumann (stored-program) architecture has a CPU, a single main memory holding instructions and data, input/output, and three buses: address, data and control. The CPU's control unit, arithmetic logic unit and registers (program counter, memory address register, memory data register, current instruction register, accumulator) carry out the fetch–decode–execute cycle. Performance depends on clock speed, number of cores, cache size and word length."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: The program counter holds the address of the next instruction, and it is increased during every fetch. The address bus carries where, the data bus carries what, and the control bus carries the signals that say when and which way."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Ideas in This Unit"
      },
      {
        "k": "p",
        "t": "Each idea below is a working definition for Grade 10. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
      },
      {
        "k": "table",
        "head": [
          "Term",
          "What it means",
          "A sentence that uses it"
        ],
        "rows": [
          [
            "von Neumann architecture",
            "the design in which a single memory holds both instructions and data, connected to the CPU by buses",
            "In this unit, von Neumann architecture means the design in which a single memory holds both instructions and data, connected to the CPU by buses."
          ],
          [
            "register",
            "a very small, very fast storage location inside the CPU that holds one value during processing",
            "In this unit, register means a very small, very fast storage location inside the CPU that holds one value during processing."
          ],
          [
            "program counter",
            "the register that holds the address of the next instruction to be fetched; PC",
            "In this unit, program counter means the register that holds the address of the next instruction to be fetched; PC."
          ],
          [
            "memory address register",
            "the register that holds the address of the memory location about to be read or written; MAR",
            "In this unit, memory address register means the register that holds the address of the memory location about to be read or written; MAR."
          ],
          [
            "memory data register",
            "the register that holds the data just read from memory or about to be written; MDR",
            "In this unit, memory data register means the register that holds the data just read from memory or about to be written; MDR."
          ],
          [
            "current instruction register",
            "the register that holds the instruction currently being decoded and executed; CIR",
            "In this unit, current instruction register means the register that holds the instruction currently being decoded and executed; CIR."
          ],
          [
            "accumulator",
            "the register in which the arithmetic logic unit keeps its working results; ACC",
            "In this unit, accumulator means the register in which the arithmetic logic unit keeps its working results; ACC."
          ],
          [
            "address bus",
            "the set of wires that carries a memory address from the CPU to memory, one direction only",
            "In this unit, address bus means the set of wires that carries a memory address from the CPU to memory, one direction only."
          ],
          [
            "data bus",
            "the set of wires that carries data between the CPU and memory in both directions",
            "In this unit, data bus means the set of wires that carries data between the CPU and memory in both directions."
          ],
          [
            "control bus",
            "the wires that carry timing and command signals such as read, write and clock",
            "In this unit, control bus means the wires that carry timing and command signals such as read, write and clock."
          ],
          [
            "cache",
            "a small amount of very fast memory inside or beside the CPU that keeps recently used instructions and data",
            "In this unit, cache means a small amount of very fast memory inside or beside the CPU that keeps recently used instructions and data."
          ],
          [
            "core",
            "one complete processing unit; a multi-core CPU has several that can run instructions at the same time",
            "In this unit, core means one complete processing unit; a multi-core CPU has several that can run instructions at the same time."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Tell Them Apart"
      },
      {
        "k": "bul",
        "items": [
          "**PC** — where next; **MAR** — where now; **MDR** — what was read; **CIR** — what to do; **ACC** — the running result.",
          "**Address bus** one-way to memory; **data bus** two-way; **control bus** signals.",
          "**Fetch** uses PC, MAR, MDR, CIR; **decode** uses the control unit; **execute** uses the ALU and ACC.",
          "**Clock speed** — cycles per second; **cores** — cycles in parallel; **cache** — fewer slow trips to RAM.",
          "**Wider address bus** — more memory can be addressed; **wider data bus** — more bits per transfer."
        ]
      },
      {
        "k": "table",
        "head": [
          "Stage",
          "What happens",
          "Registers and buses involved"
        ],
        "rows": [
          [
            "Fetch 1",
            "The address in the PC is copied to the MAR",
            "PC → MAR"
          ],
          [
            "Fetch 2",
            "The address travels on the address bus; memory is told to read",
            "MAR, address bus, control bus"
          ],
          [
            "Fetch 3",
            "The instruction returns on the data bus into the MDR, then the CIR; the PC is increased by 1",
            "Data bus → MDR → CIR; PC + 1"
          ],
          [
            "Decode",
            "The control unit works out what the instruction means and what it needs",
            "CIR, control unit"
          ],
          [
            "Execute",
            "The ALU calculates, or data is loaded or stored, or the PC is changed for a jump",
            "ALU, ACC, MAR, MDR as needed"
          ],
          [
            "Repeat",
            "The cycle begins again with the new PC value",
            "PC"
          ]
        ]
      },
      {
        "k": "p",
        "t": "A second table for this unit, so the distinction can be practised twice:"
      },
      {
        "k": "table",
        "head": [
          "Performance factor",
          "What it means",
          "Effect"
        ],
        "rows": [
          [
            "Clock speed (GHz)",
            "Cycles per second",
            "More instructions per second, more heat"
          ],
          [
            "Number of cores",
            "Independent processors on one chip",
            "Several programs or threads run at once"
          ],
          [
            "Cache size",
            "Fast memory near the CPU",
            "Fewer slow trips to RAM"
          ],
          [
            "Word length (32/64-bit)",
            "Bits handled in one operation",
            "Bigger numbers, more memory addressable"
          ],
          [
            "Address bus width",
            "Number of address lines",
            "2ⁿ locations can be addressed"
          ],
          [
            "Data bus width",
            "Bits transferred per cycle",
            "More data moved each cycle"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why This Matters in Liberia"
      },
      {
        "k": "p",
        "t": "When a Liberian shop advertises 'Octa-core 2.0 GHz, 64-bit', this unit is the translation: eight cores, two thousand million cycles a second each, a 64-bit word. When a technician says a laptop 'has a small cache', she means more slow trips to RAM. And every program a Grade 11 student will write is executed one fetch–decode–execute cycle at a time by exactly this machinery. The cycle is traced on paper with a few registers and a short memory table — no chip required, and precisely what the examination asks for."
      },
      {
        "k": "p",
        "t": "This course is an **original teaching resource**, not an official syllabus transcription. A school without a computer lab is not a school without Computer Science. Teachers should compare the unit with the school's approved scheme of work before use."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Paper-First Method"
      },
      {
        "k": "p",
        "t": "The class investigation is **“The register-and-bus walk-through”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Set up on the board a memory table of six addresses holding a tiny program (LOAD 5, ADD 6, STORE 7, HALT, then data at 5, 6, 7) and five register boxes: PC, MAR, MDR, CIR, ACC.",
          "Students act as registers holding cards; three students are the address, data and control buses and physically carry cards between the CPU and the memory table.",
          "The class runs the fetch of the first instruction step by step — PC to MAR, address bus, control 'read', data bus to MDR, MDR to CIR, PC + 1 — then decodes and executes it.",
          "Pairs record the value of every register after each step in a trace table until HALT, and state the final value in memory address 7.",
          "If a CPU simulator is available, one pair runs the same program and compares each register with the trace; otherwise the trace tables are the finished work."
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Worked Example in Prose"
      },
      {
        "k": "p",
        "t": "**Problem.** Memory holds: address 0 LOAD 5; 1 ADD 6; 2 STORE 7; 3 HALT; address 5 holds 12; address 6 holds 30; address 7 holds 0. Starting with PC = 0 and ACC = 0, trace the register values through the fetch and execute of the first two instructions and state the final value stored at address 7."
      },
      {
        "k": "num",
        "items": [
          "Fetch instruction 0: PC (0) → MAR; address bus carries 0; control bus says read; data bus returns LOAD 5 → MDR → CIR; PC becomes 1.",
          "Decode and execute LOAD 5: MAR ← 5; read; MDR ← 12; ACC ← 12.",
          "Fetch instruction 1: PC (1) → MAR; read; MDR ← ADD 6 → CIR; PC becomes 2.",
          "Execute ADD 6: MAR ← 6; read; MDR ← 30; ALU adds: ACC ← 12 + 30 = 42.",
          "Fetch and execute STORE 7: PC becomes 3; MAR ← 7; MDR ← 42; write on the data bus; address 7 now holds 42. HALT stops the cycle."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** After LOAD and ADD the accumulator holds 42; STORE writes 42 to address 7; PC ends at 4 after fetching HALT."
      },
      {
        "k": "p",
        "t": "Notice the method: name what you know, run one step at a time, write the result of each step, then state the answer in a full sentence. That is the same habit a Physics class uses on a numerical problem; here the 'calculation' is a trace, a conversion, a truth table, a formula, a query or a debug."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Common Mistakes"
      },
      {
        "k": "bul",
        "items": [
          "Forgetting to increase the program counter during the fetch, so the same instruction runs forever.",
          "Sending data on the address bus or an address on the data bus.",
          "Confusing the MAR (an address) with the MDR (data).",
          "Assuming a higher clock speed always means a faster computer regardless of cores, cache and memory."
        ]
      },
      {
        "k": "p",
        "t": "The class rule still holds when a mistake appears: **we try, we debug, we do not laugh at a mistake.** A bug is in the steps, not in the person."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Safety, Ethics and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN or a one-time code, and nobody installs software on a school machine without permission. A program written in this course is never pointed at another person's account, phone or wallet: guessing a password, sending bulk messages or reading someone's data without consent is a crime under Liberian law, not a prank. Copying a program from a classmate and submitting it as your own is plagiarism. Pair work shares the thinking, not the credit for work you did not do."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered (screenshots, not deletions), and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Pair Roles: Driver and Navigator"
      },
      {
        "k": "p",
        "t": "A computing pair has two jobs that swap. The **driver** writes or works the next step. The **navigator** reads the algorithm or the listing, watches for a bug, and says 'stop' before a wrong line is copied. After five minutes they swap, so both practise both jobs. A third student may sit as **checker** and tick each step on the trace table. Taking turns is a computing skill, not a punishment for having only one computer — or none."
      },
      {
        "k": "table",
        "head": [
          "Role",
          "What this person does",
          "What this person does not do"
        ],
        "rows": [
          [
            "Driver",
            "Works or writes the current step",
            "Does not skip the navigator's 'stop'"
          ],
          [
            "Navigator",
            "Reads the steps and watches for bugs",
            "Does not grab the pencil, the keyboard or the mouse"
          ],
          [
            "Checker",
            "Ticks each step and records one bug on the class chart",
            "Does not laugh at a mistake"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Fictional Liberian Scenario"
      },
      {
        "k": "p",
        "t": "A Grade 10 group traces a program and reports that it 'runs LOAD 5 forever', and blames the simulator."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Replay the fetch on paper: after the instruction reaches the CIR the PC must become PC + 1, otherwise the next fetch reads the same address; add the PC column to the trace table, tick it every fetch, and note that a jump instruction is the only legitimate way the PC changes otherwise."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Worked Computing Reasoning"
      },
      {
        "k": "p",
        "t": "Replay the fetch on paper: after the instruction reaches the CIR the PC must become PC + 1, otherwise the next fetch reads the same address; add the PC column to the trace table, tick it every fetch, and note that a jump instruction is the only legitimate way the PC changes otherwise."
      },
      {
        "k": "p",
        "t": "When you answer a scenario question, use this three-part shape: (1) name the computing idea (algorithm, data, network, security, binary, database, …); (2) say what a person should do, in order; (3) say why, with a unit term in the reason. Vague good intentions without a term do not yet show that the unit has been learned."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Practise It on Paper"
      },
      {
        "k": "p",
        "t": "The investigation **“The register-and-bus walk-through”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
      },
      {
        "k": "table",
        "head": [
          "Paper object",
          "What it stands for",
          "What we write afterwards"
        ],
        "rows": [
          [
            "Register boxes (PC, MAR, MDR, CIR, ACC)",
            "The CPU's registers",
            "A register trace table, one row per step"
          ],
          [
            "Memory table",
            "Main memory holding instructions and data",
            "Values before and after each store"
          ],
          [
            "Bus cards",
            "Address, data and control buses",
            "Arrows drawn in the correct directions"
          ],
          [
            "Class chart",
            "Architecture bugs the class found (PC not incremented, wrong bus)",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why One Memory Matters"
      },
      {
        "k": "p",
        "t": "Because instructions and data share one memory, a program is just data until it is fetched — which is what lets a computer load a new program, and also what lets malicious data pretend to be a program. The von Neumann design is both the power and the vulnerability of every machine in Liberia."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Buses Are Roads With Rules"
      },
      {
        "k": "p",
        "t": "The address bus is one-way: the CPU tells memory where. The data bus is two-way: values travel in on a read and out on a write. The control bus carries read, write, clock and interrupt signals. Draw the arrows correctly and half the architecture marks follow."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Reading a Specification Honestly"
      },
      {
        "k": "p",
        "t": "2.0 GHz with two cores may beat 2.6 GHz with one for a class using several programs; a large cache may matter more than either for a database. Ask what the machine will run before comparing numbers. That is a purchasing skill Liberian schools and clinics need."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Examination Habit: Name, Location, Job"
      },
      {
        "k": "p",
        "t": "For each register or bus, an answer gives its full name, where it sits and what it holds or carries: 'The memory address register, in the CPU, holds the address of the memory location about to be accessed.' Three parts, one sentence, full marks."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "What a Period Test Asks"
      },
      {
        "k": "p",
        "t": "A fair period test on “Computer Architecture — Inside the CPU” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit precisely and use each in a sentence.",
          "Solve or trace a problem connected with “Computer Architecture — Inside the CPU” on paper, showing every line of working.",
          "Classify four examples using “Registers / Buses and other components” and justify one placement.",
          "Find and correct a bug in a set of steps, a query or a program, and say what the bug was."
        ]
      },
      {
        "k": "p",
        "t": "Show every step of a tracing or conversion question, the way a Physics script shows working. A bare answer with no steps cannot be given full credit, because the teacher cannot see the method you ran."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Four Weeks of Study"
      },
      {
        "k": "p",
        "t": "A 4-week unit on “Computer Architecture — Inside the CPU” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
      },
      {
        "k": "table",
        "head": [
          "Week",
          "Study focus",
          "What students leave able to do"
        ],
        "rows": [
          [
            "1",
            "What “Computer Architecture — Inside the CPU” is, and where it already appears around us.",
            "Say what the unit is about and name two examples from Liberia."
          ],
          [
            "2",
            "Key ideas, distinctions and the unit table.",
            "Use the key terms and complete the distinction tables."
          ],
          [
            "3",
            "A Liberian example and the paper-first method, worked then written.",
            "Run the paper method and write the algorithm, table or report."
          ],
          [
            "4",
            "Worked problems, pair-debug, the computing fair and the period check.",
            "Solve a worked example, debug a bug, and sit the period check."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Check Yourself"
      },
      {
        "k": "p",
        "t": "Close the notes. (1) Say the unit title and one Liberian example. (2) Give the meaning of three terms without looking. (3) Work the paper method once more, showing every step. (4) Name one bug you would look for. (5) Say who you tell if a message asks for a photograph, a PIN or money. If any of those five stalls, go back to the table of terms and the worked example and run them again with a partner. Do not laugh at a bug — including your own."
      },
      {
        "k": "p",
        "t": "This is original supplementary teaching material for Liberian senior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, von Neumann architecture means the design in which a single memory holds both instructions and data, connected to the CPU by buses.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, register means the register that holds the address of the next instruction to be fetched; PC.",
        "a": "False",
        "why": "register means a very small, very fast storage location inside the CPU that holds one value during processing; the statement describes program counter."
      },
      {
        "s": "In this unit, memory address register means the register that holds the address of the memory location about to be read or written; MAR.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Every conversion, truth table, trace and program in the unit can be worked on paper; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the code or the steps, not in the person."
      },
      {
        "s": "Students should share passwords, PINs or one-time codes so a partner can finish the work.",
        "a": "False",
        "why": "A password, PIN or one-time code is secret. Sharing one is how accounts and mobile-money wallets are emptied."
      },
      {
        "s": "The program counter holds the address of the next instruction, and it is increased during every fetch.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "The data bus is one-directional, from memory to the CPU only.",
        "a": "False",
        "why": "The data bus is two-way: data is read from memory into the CPU and written from the CPU to memory."
      },
      {
        "s": "The program counter is incremented during the fetch stage of every cycle.",
        "a": "True",
        "why": "So that the next fetch reads the following instruction unless a jump changes the PC."
      }
    ],
    "classify": {
      "title": "Registers / Buses and other components",
      "groups": [
        {
          "name": "Registers",
          "items": [
            "program counter",
            "memory address register",
            "memory data register",
            "current instruction register",
            "accumulator",
            "a general-purpose register"
          ]
        },
        {
          "name": "Buses and other components",
          "items": [
            "address bus",
            "data bus",
            "control bus",
            "cache",
            "arithmetic logic unit",
            "control unit"
          ]
        }
      ]
    },
    "diagram": {
      "title": "The von Neumann architecture with registers and buses",
      "caption": "Label each part and state what it does in “Computer Architecture — Inside the CPU”.",
      "parts": [
        {
          "p": "Control unit",
          "f": "decodes instructions and sends control signals"
        },
        {
          "p": "Arithmetic logic unit and accumulator",
          "f": "performs calculations and holds the result"
        },
        {
          "p": "Registers (PC, MAR, MDR, CIR)",
          "f": "hold the next address, the current address, the data in flight and the current instruction"
        },
        {
          "p": "Address, data and control buses",
          "f": "carry where, what and when between the CPU and memory"
        },
        {
          "p": "Main memory",
          "f": "holds both instructions and data"
        }
      ]
    },
    "experiment": {
      "title": "The register-and-bus walk-through",
      "aim": "To practise the ideas of “Computer Architecture — Inside the CPU” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Printed listings, cards and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class test log",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “The register-and-bus walk-through” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A Grade 10 group traces a program and reports that it 'runs LOAD 5 forever', and blames the simulator. What should happen next?",
        "a": "Replay the fetch on paper: after the instruction reaches the CIR the PC must become PC + 1, otherwise the next fetch reads the same address; add the PC column to the trace table, tick it every fetch, and note that a jump instruction is the only legitimate way the PC changes otherwise."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Computer Architecture — Inside the CPU”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's program or trace fails. What do you say, and why?",
        "a": "Remind the class that a bug is in the code or the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the exact line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian working life (a bank, a mobile-money agent, a clinic, a radio station, a business, a ministry).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as a bank's database, a mobile-money transaction, a hospital record, a radio station's schedule or a ministry's website."
      },
      {
        "q": "A clinic must choose between a laptop with a 3.0 GHz dual-core CPU and 2 MB cache, and one with a 2.4 GHz quad-core CPU and 8 MB cache, for a records database used by several staff at once. Which do you recommend and why?",
        "a": "The quad-core with the larger cache: several users and a database benefit from parallel cores and fewer trips to RAM more than from a higher clock on fewer cores."
      },
      {
        "q": "A CPU has a 16-bit address bus. How many memory locations can it address? If each holds one byte, how much memory is that?",
        "a": "2¹⁶ = 65,536 locations; 65,536 bytes = 64 KiB."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “The register-and-bus walk-through” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, squared paper and printed listings",
      "A class computing chart and test log",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's device, kept dry and in sight"
    ],
    "aids": [
      "Word cards — von Neumann architecture, register, program counter",
      "A flowchart or trace table of “The register-and-bus walk-through”",
      "Register boxes, a six-address memory table and bus cards",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing term and what it means.",
      "Work this week's paper method (a conversion, a truth table, a trace, a query or a design) again with a friend — no device needed.",
      "Find one example of this unit's idea in your community (a bank, a mobile-money kiosk, a clinic, a radio station, a business or a ministry office) and write a paragraph about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written trace, conversion, truth table or query with full working",
      "Pair-debug observed against the class test log",
      "A short written response to the Liberian case scenario"
    ],
    "worked": [
      {
        "q": "Which register holds the address of the next instruction?",
        "steps": [
          "Increased every fetch."
        ],
        "a": "The program counter"
      },
      {
        "q": "Which bus carries an address from the CPU to memory, and in how many directions?",
        "steps": [
          "Where; one-way."
        ],
        "a": "The address bus; one direction"
      },
      {
        "q": "Which bus carries the instruction back to the CPU?",
        "steps": [
          "What; two-way."
        ],
        "a": "The data bus"
      },
      {
        "q": "PC = 4 at the start of a fetch. What is it after the fetch (no jump)?",
        "steps": [
          "PC + 1."
        ],
        "a": "5"
      },
      {
        "q": "ACC = 12; instruction ADD 6 where address 6 holds 30. ACC afterwards?",
        "steps": [
          "12 + 30."
        ],
        "a": "42"
      },
      {
        "q": "Name the three stages of the cycle and the unit that performs the second.",
        "steps": [
          "Fetch, decode, execute."
        ],
        "a": "Fetch, decode, execute; the control unit decodes"
      },
      {
        "q": "A 32-bit address bus can address how many locations?",
        "steps": [
          "2³²."
        ],
        "a": "4,294,967,296 (about 4 billion)"
      },
      {
        "q": "Give two reasons a 2.4 GHz quad-core may outperform a 3.0 GHz single-core.",
        "steps": [
          "Parallel cores; cache; memory."
        ],
        "a": "Four instructions streams at once and usually a larger cache"
      }
    ]
  },
  {
    "grade": 10,
    "period": "VI",
    "sem": "Two",
    "icon": "🧩",
    "csPlan": true,
    "title": "System Software and Operating Systems",
    "subtitle": "Computer Science · Original senior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Written for classes that may have no computer lab: every conversion, truth table, trace, query and program in the unit can be done on paper, and a shared device extends it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary precisely in speech, writing and examination answers.",
      "Solve the unit's problems on paper — conversions, truth tables, traces, queries, formulas or designs — showing every step of working.",
      "Evaluate a technology choice for its safety, legality, cost and effect on people in Liberia."
    ],
    "objectives": [
      "Define the key terms in “System Software and Operating Systems” precisely and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm, program or procedure connected with this unit, on paper.",
      "Classify examples into the unit's two groups and justify each placement.",
      "Solve a worked example step by step, showing every line of working, and state the answer in a full sentence with its unit or type.",
      "Apply the unit's ideas to a fictional Liberian business, ministry, clinic or school scenario.",
      "Find and correct a bug in a set of steps, a circuit, a query or a program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared test log.",
      "Explain one Liberian example of this unit's idea (mobile money, the ACE submarine cable, a hospital record, a bank, the national examination system or a radio station)."
    ],
    "safeguard": "A senior high computing lesson uses paper traces, truth tables, printed listings and, when one is present, a shared school computer or the teacher's own device. Students never share passwords, PINs or one-time codes, never install software on a school machine without permission, and never photograph, record or post a classmate without consent. A program written in class must never be used to guess a password, send bulk messages or enter another person's account — that is a crime, not a prank. If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "System software (operating systems, utilities, drivers, translators) manages the hardware and supports application software. An operating system manages processes, memory, storage and files, devices, users and security, and provides a user interface (GUI or CLI). Types include single-user, multi-user, multitasking, real-time and embedded systems. Software is licensed as proprietary, open source or free, and using unlicensed copies is illegal.",
    "focus": [
      "Worked demonstration on paper",
      "Pair programming and debugging",
      "Liberian case scenario",
      "Practical and period check"
    ],
    "terms": [
      {
        "t": "system software",
        "d": "software that manages the hardware and supports applications: operating systems, utilities, drivers and translators",
        "x": "In this unit, system software means software that manages the hardware and supports applications: operating systems, utilities, drivers and translators."
      },
      {
        "t": "application software",
        "d": "software that performs tasks for the user, such as a word processor, a browser or a records program",
        "x": "In this unit, application software means software that performs tasks for the user, such as a word processor, a browser or a records program."
      },
      {
        "t": "operating system",
        "d": "the system software that manages processes, memory, files, devices and users and provides the user interface",
        "x": "In this unit, operating system means the system software that manages processes, memory, files, devices and users and provides the user interface."
      },
      {
        "t": "process",
        "d": "a program that is running, together with its memory and its place in the processor's schedule",
        "x": "In this unit, process means a program that is running, together with its memory and its place in the processor's schedule."
      },
      {
        "t": "scheduling",
        "d": "the operating system's method of sharing processor time between processes",
        "x": "In this unit, scheduling means the operating system's method of sharing processor time between processes."
      },
      {
        "t": "multitasking",
        "d": "running several processes apparently at once by switching the processor rapidly between them",
        "x": "In this unit, multitasking means running several processes apparently at once by switching the processor rapidly between them."
      },
      {
        "t": "virtual memory",
        "d": "using part of secondary storage as if it were RAM when RAM is full, at the cost of speed",
        "x": "In this unit, virtual memory means using part of secondary storage as if it were RAM when RAM is full, at the cost of speed."
      },
      {
        "t": "device driver",
        "d": "a small program that lets the operating system control a particular piece of hardware such as a printer",
        "x": "In this unit, device driver means a small program that lets the operating system control a particular piece of hardware such as a printer."
      },
      {
        "t": "user interface",
        "d": "the way a person interacts with the computer: a graphical interface (GUI) of windows and icons, or a command-line interface (CLI) of typed commands",
        "x": "In this unit, user interface means the way a person interacts with the computer: a graphical interface (GUI) of windows and icons, or a command-line interface (CLI) of typed commands."
      },
      {
        "t": "utility program",
        "d": "system software that does a maintenance job, such as antivirus, backup, disk clean-up or compression",
        "x": "In this unit, utility program means system software that does a maintenance job, such as antivirus, backup, disk clean-up or compression."
      },
      {
        "t": "open-source software",
        "d": "software whose source code is published and may be freely used, studied, changed and shared, such as Linux",
        "x": "In this unit, open-source software means software whose source code is published and may be freely used, studied, changed and shared, such as Linux."
      },
      {
        "t": "software licence",
        "d": "the legal agreement that says how a copy of software may be used, installed and shared",
        "x": "In this unit, software licence means the legal agreement that says how a copy of software may be used, installed and shared."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “system software” in this unit?",
        "a": "software that manages the hardware and supports applications: operating systems, utilities, drivers and translators."
      },
      {
        "q": "What is meant by “application software” in this unit?",
        "a": "software that performs tasks for the user, such as a word processor, a browser or a records program."
      },
      {
        "q": "What is meant by “operating system” in this unit?",
        "a": "the system software that manages processes, memory, files, devices and users and provides the user interface."
      },
      {
        "q": "What is meant by “process” in this unit?",
        "a": "a program that is running, together with its memory and its place in the processor's schedule."
      },
      {
        "q": "What is meant by “scheduling” in this unit?",
        "a": "the operating system's method of sharing processor time between processes."
      },
      {
        "q": "What is meant by “multitasking” in this unit?",
        "a": "running several processes apparently at once by switching the processor rapidly between them."
      },
      {
        "q": "What is meant by “virtual memory” in this unit?",
        "a": "using part of secondary storage as if it were RAM when RAM is full, at the cost of speed."
      },
      {
        "q": "What is meant by “device driver” in this unit?",
        "a": "a small program that lets the operating system control a particular piece of hardware such as a printer."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A school lab's ten computers all run the same unlicensed operating system copied from one flash drive, updates are switched off 'so it does not ask for a key', and a virus from a business-centre flash drive spreads through every machine in a morning."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Name the cause — no security updates and no licence — then rebuild: install a legal open-source operating system, turn updates on, add an antivirus utility that scans flash drives on insertion, create limited pupil accounts, and keep one clean backup image so a reinstall takes an hour instead of a term."
      },
      {
        "q": "State this unit idea in your own words: An operating system manages the processor, memory, storage, devices, users and security, and provides the user interface.",
        "a": "An operating system manages the processor, memory, storage, devices, users and security, and provides the user interface."
      },
      {
        "q": "State this unit idea in your own words: System software runs the machine; application software does the user's work.",
        "a": "System software runs the machine; application software does the user's work."
      },
      {
        "q": "List five functions of an operating system.",
        "a": "Process management (scheduling), memory management, file management, device management through drivers, user management and security, and providing the user interface."
      },
      {
        "q": "What is the difference between multitasking and multi-user?",
        "a": "Multitasking runs several programs at once for one user; multi-user lets several people use one computer at the same time."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “System Software and Operating Systems” Is"
      },
      {
        "k": "p",
        "t": "Software divides into **application software**, which does the user's work, and **system software**, which runs the machine. The chief system software is the **operating system**: it manages the processor through **scheduling**, the memory through allocation and **virtual memory**, files, devices through **drivers**, users through accounts and permissions, and presents a **user interface** — graphical or a **command line**. **Utility programs** — antivirus, backup, disk tools — assist it. Operating systems come with **licences**: proprietary or **open source**, and the difference matters for a Liberian school's budget and legality. Labs that copy one unlicensed operating system to every machine and switch off updates have opened the same hole on ten computers at once. Name the cause — no security updates and no licence — then rebuild: install a legal open-source operating system, turn updates on, add an antivirus utility that scans flash drives on insertion, create limited pupil accounts, and keep one clean backup image so a reinstall takes an hour instead of a term. An operating system manages the processor, memory, storage, devices, users and security, and provides the user interface. System software runs the machine; application software does the user's work."
      },
      {
        "k": "p",
        "t": "System software (operating systems, utilities, drivers, translators) manages the hardware and supports application software. An operating system manages processes, memory, storage and files, devices, users and security, and provides a user interface (GUI or CLI). Types include single-user, multi-user, multitasking, real-time and embedded systems. Software is licensed as proprietary, open source or free, and using unlicensed copies is illegal."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: An operating system manages the processor, memory, storage, devices, users and security, and provides the user interface. System software runs the machine; application software does the user's work."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Ideas in This Unit"
      },
      {
        "k": "p",
        "t": "Each idea below is a working definition for Grade 10. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
      },
      {
        "k": "table",
        "head": [
          "Term",
          "What it means",
          "A sentence that uses it"
        ],
        "rows": [
          [
            "system software",
            "software that manages the hardware and supports applications: operating systems, utilities, drivers and translators",
            "In this unit, system software means software that manages the hardware and supports applications: operating systems, utilities, drivers and translators."
          ],
          [
            "application software",
            "software that performs tasks for the user, such as a word processor, a browser or a records program",
            "In this unit, application software means software that performs tasks for the user, such as a word processor, a browser or a records program."
          ],
          [
            "operating system",
            "the system software that manages processes, memory, files, devices and users and provides the user interface",
            "In this unit, operating system means the system software that manages processes, memory, files, devices and users and provides the user interface."
          ],
          [
            "process",
            "a program that is running, together with its memory and its place in the processor's schedule",
            "In this unit, process means a program that is running, together with its memory and its place in the processor's schedule."
          ],
          [
            "scheduling",
            "the operating system's method of sharing processor time between processes",
            "In this unit, scheduling means the operating system's method of sharing processor time between processes."
          ],
          [
            "multitasking",
            "running several processes apparently at once by switching the processor rapidly between them",
            "In this unit, multitasking means running several processes apparently at once by switching the processor rapidly between them."
          ],
          [
            "virtual memory",
            "using part of secondary storage as if it were RAM when RAM is full, at the cost of speed",
            "In this unit, virtual memory means using part of secondary storage as if it were RAM when RAM is full, at the cost of speed."
          ],
          [
            "device driver",
            "a small program that lets the operating system control a particular piece of hardware such as a printer",
            "In this unit, device driver means a small program that lets the operating system control a particular piece of hardware such as a printer."
          ],
          [
            "user interface",
            "the way a person interacts with the computer: a graphical interface (GUI) of windows and icons, or a command-line interface (CLI) of typed commands",
            "In this unit, user interface means the way a person interacts with the computer: a graphical interface (GUI) of windows and icons, or a command-line interface (CLI) of typed commands."
          ],
          [
            "utility program",
            "system software that does a maintenance job, such as antivirus, backup, disk clean-up or compression",
            "In this unit, utility program means system software that does a maintenance job, such as antivirus, backup, disk clean-up or compression."
          ],
          [
            "open-source software",
            "software whose source code is published and may be freely used, studied, changed and shared, such as Linux",
            "In this unit, open-source software means software whose source code is published and may be freely used, studied, changed and shared, such as Linux."
          ],
          [
            "software licence",
            "the legal agreement that says how a copy of software may be used, installed and shared",
            "In this unit, software licence means the legal agreement that says how a copy of software may be used, installed and shared."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Tell Them Apart"
      },
      {
        "k": "bul",
        "items": [
          "**System software** — runs the machine (OS, drivers, utilities); **application software** — does the user's work.",
          "**GUI** — windows, icons, pointer; **CLI** — typed commands; both control the same OS.",
          "**Multitasking** — many processes on one machine; **multi-user** — many people on one machine.",
          "**Real-time** OS answers within a guaranteed time (a pacemaker, an aircraft); **batch** processes jobs in a queue (payroll).",
          "**Proprietary** — pay, no source, limited copies; **open source** — free to use, source published, may be changed."
        ]
      },
      {
        "k": "table",
        "head": [
          "Operating-system job",
          "What it does",
          "Example"
        ],
        "rows": [
          [
            "Process management",
            "Schedules processor time between running programs",
            "A browser and a spreadsheet both respond"
          ],
          [
            "Memory management",
            "Allocates RAM to processes; uses virtual memory when RAM is full",
            "A large photo edit slows as disk is used as RAM"
          ],
          [
            "File management",
            "Organises files and folders; controls access",
            "Saving a document to D:\\School"
          ],
          [
            "Device management",
            "Uses drivers to control hardware",
            "Installing a driver so a new printer works"
          ],
          [
            "User management and security",
            "Accounts, passwords, permissions",
            "A pupil account that cannot delete office files"
          ],
          [
            "User interface",
            "GUI or CLI",
            "Clicking an icon or typing a command"
          ]
        ]
      },
      {
        "k": "p",
        "t": "A second table for this unit, so the distinction can be practised twice:"
      },
      {
        "k": "table",
        "head": [
          "Type of operating system",
          "Character",
          "Where used"
        ],
        "rows": [
          [
            "Single-user multitasking",
            "One person, many programs at once",
            "A laptop running Windows or macOS"
          ],
          [
            "Multi-user",
            "Many people share one machine at once",
            "A university server running Linux"
          ],
          [
            "Real-time",
            "Guaranteed response within a set time",
            "Medical monitors, aircraft, car brakes"
          ],
          [
            "Embedded",
            "Small, fixed-purpose, inside a device",
            "A router, a solar charge controller"
          ],
          [
            "Mobile",
            "Touch interface, battery and app management",
            "Android, iOS on phones"
          ],
          [
            "Batch",
            "Jobs queued and run without interaction",
            "Overnight payroll or examination marking"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why This Matters in Liberia"
      },
      {
        "k": "p",
        "t": "Most Liberian schools run whatever operating system arrived on a donated machine — often an unlicensed copy that cannot be updated and so cannot be secured. Open-source systems such as Linux run well on older hardware, cost nothing to license and are legal to copy for every machine in the lab; a school that knows this can turn ten 'dead' donated computers into a working room. Understanding scheduling and virtual memory also explains the daily complaint 'the computer is slow when I open two things', and drivers explain why the new printer 'does not work' until its software is installed."
      },
      {
        "k": "p",
        "t": "This course is an **original teaching resource**, not an official syllabus transcription. A school without a computer lab is not a school without Computer Science. Teachers should compare the unit with the school's approved scheme of work before use."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Paper-First Method"
      },
      {
        "k": "p",
        "t": "The class investigation is **“The operating system as a school office — role play and audit”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Assign roles: the operating system as head clerk, three 'processes' (students wanting the one 'processor' — a single stamp), a memory manager with a small tray (RAM) and a large cupboard (disk), a device driver for a 'printer', and a user account officer.",
          "The processes queue for the stamp; the head clerk gives each a fixed time slice and switches between them — multitasking — while the memory manager moves papers to the cupboard when the tray is full — virtual memory.",
          "A process asks to print; the driver translates the request for the 'printer' student; a pupil account asks to delete an office file and the account officer refuses.",
          "Pairs then audit the school's real or imagined computers: which OS, licensed or not, updated or not, GUI or CLI available, which utilities are present, which drivers are missing.",
          "If a machine is available, one pair opens the task manager or system monitor to see processes, memory and the OS version while the others compare with the role play; otherwise the role-play notes and the audit table are the finished work."
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Worked Example in Prose"
      },
      {
        "k": "p",
        "t": "**Problem.** A school receives ten donated laptops from 2012 with 4 GB of RAM each; five carry an unlicensed proprietary operating system that cannot be updated and five have no operating system at all. Recommend a course of action, naming the type of operating system, the licence, and two utilities the school should install, and explain why an unlicensed copy is a security problem."
      },
      {
        "k": "num",
        "items": [
          "Install an open-source operating system (a lightweight Linux distribution) on all ten: it is free to license, legal to copy, and runs well on 4 GB of RAM.",
          "Licence: open source — the school may install it on every machine and update it indefinitely.",
          "Utilities: a backup tool for the office files and an antivirus or malware scanner for flash drives brought from business centres; add a disk clean-up tool.",
          "Unlicensed copies cannot receive security updates, so known holes stay open to malware; they are also illegal to use, exposing the school to liability.",
          "Create separate user accounts: an administrator for the technician, standard accounts for teachers and pupils with limited permissions."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** Install a free, legal open-source operating system on all ten laptops with separate user accounts, add backup and antivirus utilities, and retire the unlicensed copies because they cannot be updated and are unlawful."
      },
      {
        "k": "p",
        "t": "Notice the method: name what you know, run one step at a time, write the result of each step, then state the answer in a full sentence. That is the same habit a Physics class uses on a numerical problem; here the 'calculation' is a trace, a conversion, a truth table, a formula, a query or a debug."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Common Mistakes"
      },
      {
        "k": "bul",
        "items": [
          "Calling a word processor 'system software' or the operating system 'an app'.",
          "Believing that more RAM is unnecessary because virtual memory exists; disk is far slower than RAM.",
          "Installing a printer and expecting it to work with no driver.",
          "Treating an unlicensed copy as free software; free software is licensed to be free, a pirated copy is not."
        ]
      },
      {
        "k": "p",
        "t": "The class rule still holds when a mistake appears: **we try, we debug, we do not laugh at a mistake.** A bug is in the steps, not in the person."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Safety, Ethics and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN or a one-time code, and nobody installs software on a school machine without permission. A program written in this course is never pointed at another person's account, phone or wallet: guessing a password, sending bulk messages or reading someone's data without consent is a crime under Liberian law, not a prank. Copying a program from a classmate and submitting it as your own is plagiarism. Pair work shares the thinking, not the credit for work you did not do."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered (screenshots, not deletions), and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Pair Roles: Driver and Navigator"
      },
      {
        "k": "p",
        "t": "A computing pair has two jobs that swap. The **driver** writes or works the next step. The **navigator** reads the algorithm or the listing, watches for a bug, and says 'stop' before a wrong line is copied. After five minutes they swap, so both practise both jobs. A third student may sit as **checker** and tick each step on the trace table. Taking turns is a computing skill, not a punishment for having only one computer — or none."
      },
      {
        "k": "table",
        "head": [
          "Role",
          "What this person does",
          "What this person does not do"
        ],
        "rows": [
          [
            "Driver",
            "Works or writes the current step",
            "Does not skip the navigator's 'stop'"
          ],
          [
            "Navigator",
            "Reads the steps and watches for bugs",
            "Does not grab the pencil, the keyboard or the mouse"
          ],
          [
            "Checker",
            "Ticks each step and records one bug on the class chart",
            "Does not laugh at a mistake"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Fictional Liberian Scenario"
      },
      {
        "k": "p",
        "t": "A school lab's ten computers all run the same unlicensed operating system copied from one flash drive, updates are switched off 'so it does not ask for a key', and a virus from a business-centre flash drive spreads through every machine in a morning."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Name the cause — no security updates and no licence — then rebuild: install a legal open-source operating system, turn updates on, add an antivirus utility that scans flash drives on insertion, create limited pupil accounts, and keep one clean backup image so a reinstall takes an hour instead of a term."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Worked Computing Reasoning"
      },
      {
        "k": "p",
        "t": "Name the cause — no security updates and no licence — then rebuild: install a legal open-source operating system, turn updates on, add an antivirus utility that scans flash drives on insertion, create limited pupil accounts, and keep one clean backup image so a reinstall takes an hour instead of a term."
      },
      {
        "k": "p",
        "t": "When you answer a scenario question, use this three-part shape: (1) name the computing idea (algorithm, data, network, security, binary, database, …); (2) say what a person should do, in order; (3) say why, with a unit term in the reason. Vague good intentions without a term do not yet show that the unit has been learned."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Practise It on Paper"
      },
      {
        "k": "p",
        "t": "The investigation **“The operating system as a school office — role play and audit”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
      },
      {
        "k": "table",
        "head": [
          "Paper object",
          "What it stands for",
          "What we write afterwards"
        ],
        "rows": [
          [
            "Role cards",
            "The parts of an operating system",
            "A one-sentence job description per role"
          ],
          [
            "Tray and cupboard",
            "RAM and virtual memory",
            "Notes on when papers moved and why it slowed"
          ],
          [
            "Lab audit table",
            "The school's real machines",
            "OS, licence, updates, utilities, drivers per machine"
          ],
          [
            "Class chart",
            "System bugs the class found (no driver, updates off)",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Scheduling: Sharing One Processor Fairly"
      },
      {
        "k": "p",
        "t": "The processor runs one instruction at a time per core. The operating system gives each process a short time slice — milliseconds — and switches so fast that a browser, a spreadsheet and the clock all appear to run together. When too many processes compete, each gets less, and the user says the machine 'hangs'."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Virtual Memory Is a Slow Rescue"
      },
      {
        "k": "p",
        "t": "When RAM is full the operating system moves the least-used pages to disk and brings them back when needed. It prevents a crash but disk is hundreds of times slower than RAM, which is why a machine with too little RAM 'thrashes'. Adding RAM helps more than any setting."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Licences in Plain Language"
      },
      {
        "k": "p",
        "t": "Proprietary: you buy the right to use, usually on one machine, without seeing the source. Open source: the source is published, and the licence lets you use, copy, change and share it — often free of charge. Freeware is free but closed. Pirated: none of these; it is a crime, and it cannot be updated."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "GUI or CLI — Both Are the Same System"
      },
      {
        "k": "p",
        "t": "Clicking an icon and typing a command both ask the operating system to do a job. The GUI is easier to learn; the CLI is faster for repeated tasks and works over a slow connection to a distant server. A senior high student should be able to open a terminal and list a folder."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "What a Period Test Asks"
      },
      {
        "k": "p",
        "t": "A fair period test on “System Software and Operating Systems” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit precisely and use each in a sentence.",
          "Solve or trace a problem connected with “System Software and Operating Systems” on paper, showing every line of working.",
          "Classify four examples using “System software / Application software” and justify one placement.",
          "Find and correct a bug in a set of steps, a query or a program, and say what the bug was."
        ]
      },
      {
        "k": "p",
        "t": "Show every step of a tracing or conversion question, the way a Physics script shows working. A bare answer with no steps cannot be given full credit, because the teacher cannot see the method you ran."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Four Weeks of Study"
      },
      {
        "k": "p",
        "t": "A 4-week unit on “System Software and Operating Systems” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
      },
      {
        "k": "table",
        "head": [
          "Week",
          "Study focus",
          "What students leave able to do"
        ],
        "rows": [
          [
            "1",
            "What “System Software and Operating Systems” is, and where it already appears around us.",
            "Say what the unit is about and name two examples from Liberia."
          ],
          [
            "2",
            "Key ideas, distinctions and the unit table.",
            "Use the key terms and complete the distinction tables."
          ],
          [
            "3",
            "A Liberian example and the paper-first method, worked then written.",
            "Run the paper method and write the algorithm, table or report."
          ],
          [
            "4",
            "Worked problems, pair-debug, the computing fair and the period check.",
            "Solve a worked example, debug a bug, and sit the period check."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Check Yourself"
      },
      {
        "k": "p",
        "t": "Close the notes. (1) Say the unit title and one Liberian example. (2) Give the meaning of three terms without looking. (3) Work the paper method once more, showing every step. (4) Name one bug you would look for. (5) Say who you tell if a message asks for a photograph, a PIN or money. If any of those five stalls, go back to the table of terms and the worked example and run them again with a partner. Do not laugh at a bug — including your own."
      },
      {
        "k": "p",
        "t": "This is original supplementary teaching material for Liberian senior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, system software means software that manages the hardware and supports applications: operating systems, utilities, drivers and translators.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, application software means the system software that manages processes, memory, files, devices and users and provides the user interface.",
        "a": "False",
        "why": "application software means software that performs tasks for the user, such as a word processor, a browser or a records program; the statement describes operating system."
      },
      {
        "s": "In this unit, process means a program that is running, together with its memory and its place in the processor's schedule.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Every conversion, truth table, trace and program in the unit can be worked on paper; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the code or the steps, not in the person."
      },
      {
        "s": "Students should share passwords, PINs or one-time codes so a partner can finish the work.",
        "a": "False",
        "why": "A password, PIN or one-time code is secret. Sharing one is how accounts and mobile-money wallets are emptied."
      },
      {
        "s": "An operating system manages the processor, memory, storage, devices, users and security, and provides the user interface.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "Virtual memory makes extra RAM unnecessary because the disk can always be used instead.",
        "a": "False",
        "why": "Disk is far slower than RAM; virtual memory prevents a crash but makes the machine slow."
      },
      {
        "s": "Open-source software may legally be installed on every computer in a school.",
        "a": "True",
        "why": "Its licence permits free use, copying, study and change."
      }
    ],
    "classify": {
      "title": "System software / Application software",
      "groups": [
        {
          "name": "System software",
          "items": [
            "operating system",
            "printer driver",
            "antivirus utility",
            "backup utility",
            "disk clean-up tool",
            "a compiler"
          ]
        },
        {
          "name": "Application software",
          "items": [
            "word processor",
            "spreadsheet",
            "web browser",
            "clinic records program",
            "presentation software",
            "a mobile-money app"
          ]
        }
      ]
    },
    "diagram": {
      "title": "The layers between the user and the hardware",
      "caption": "Label each part and state what it does in “System Software and Operating Systems”.",
      "parts": [
        {
          "p": "User",
          "f": "the person, working through the interface"
        },
        {
          "p": "Application software",
          "f": "the programs that do the user's work"
        },
        {
          "p": "Operating system",
          "f": "manages processes, memory, files, devices and users"
        },
        {
          "p": "Device drivers and utilities",
          "f": "control specific hardware and do maintenance jobs"
        },
        {
          "p": "Hardware",
          "f": "CPU, memory, storage and devices"
        }
      ]
    },
    "experiment": {
      "title": "The operating system as a school office — role play and audit",
      "aim": "To practise the ideas of “System Software and Operating Systems” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Printed listings, cards and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class test log",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “The operating system as a school office — role play and audit” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A school lab's ten computers all run the same unlicensed operating system copied from one flash drive, updates are switched off 'so it does not ask for a key', and a virus from a business-centre flash drive spreads through every machine in a morning. What should happen next?",
        "a": "Name the cause — no security updates and no licence — then rebuild: install a legal open-source operating system, turn updates on, add an antivirus utility that scans flash drives on insertion, create limited pupil accounts, and keep one clean backup image so a reinstall takes an hour instead of a term."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “System Software and Operating Systems”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's program or trace fails. What do you say, and why?",
        "a": "Remind the class that a bug is in the code or the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the exact line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian working life (a bank, a mobile-money agent, a clinic, a radio station, a business, a ministry).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as a bank's database, a mobile-money transaction, a hospital record, a radio station's schedule or a ministry's website."
      },
      {
        "q": "A pacemaker, a payroll run and a school laptop each need a different kind of operating system. Name the type for each and give the reason.",
        "a": "Pacemaker: real-time (guaranteed response); payroll: batch (queued jobs, no interaction); laptop: single-user multitasking (one person, many programs)."
      },
      {
        "q": "Write a three-rule software policy for a school lab covering licences, updates and flash drives.",
        "a": "For example: only licensed or open-source software is installed and a record of licences is kept; updates are switched on and applied weekly; every flash drive is scanned by the antivirus utility before its files are opened."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “The operating system as a school office — role play and audit” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, squared paper and printed listings",
      "A class computing chart and test log",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's device, kept dry and in sight"
    ],
    "aids": [
      "Word cards — system software, application software, operating system",
      "A flowchart or trace table of “The operating system as a school office — role play and audit”",
      "Role cards (OS, processes, memory manager, driver, account officer) and a lab audit table",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing term and what it means.",
      "Work this week's paper method (a conversion, a truth table, a trace, a query or a design) again with a friend — no device needed.",
      "Find one example of this unit's idea in your community (a bank, a mobile-money kiosk, a clinic, a radio station, a business or a ministry office) and write a paragraph about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written trace, conversion, truth table or query with full working",
      "Pair-debug observed against the class test log",
      "A short written response to the Liberian case scenario"
    ],
    "worked": [
      {
        "q": "Is a printer driver system or application software?",
        "steps": [
          "Controls hardware for the OS."
        ],
        "a": "System software"
      },
      {
        "q": "Name the operating-system function that shares processor time between programs.",
        "steps": [
          "Time slices."
        ],
        "a": "Scheduling (process management)"
      },
      {
        "q": "RAM is full and the machine slows as the disk light flickers. Which mechanism is at work?",
        "steps": [
          "Disk used as RAM."
        ],
        "a": "Virtual memory"
      },
      {
        "q": "A new printer is connected and does nothing. What is most likely missing?",
        "steps": [
          "Translator between OS and device."
        ],
        "a": "Its device driver"
      },
      {
        "q": "Which interface uses typed commands?",
        "steps": [
          "Not windows and icons."
        ],
        "a": "The command-line interface (CLI)"
      },
      {
        "q": "Which type of OS must respond within a guaranteed time?",
        "steps": [
          "Medical, aircraft."
        ],
        "a": "Real-time"
      },
      {
        "q": "May a school legally copy an open-source operating system to ten machines? A proprietary one bought once?",
        "steps": [
          "Licence terms."
        ],
        "a": "Open source: yes; proprietary single licence: no"
      },
      {
        "q": "Why can an unlicensed operating system not be kept secure?",
        "steps": [
          "No updates."
        ],
        "a": "It cannot receive security updates, so known holes stay open"
      }
    ]
  },
  {
    "grade": 11,
    "period": "I",
    "sem": "One",
    "icon": "🐍",
    "csPlan": true,
    "title": "Programming in Python — Data Types, Operators and Expressions",
    "subtitle": "Computer Science · Original senior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Written for classes that may have no computer lab: every conversion, truth table, trace, query and program in the unit can be done on paper, and a shared device extends it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary precisely in speech, writing and examination answers.",
      "Solve the unit's problems on paper — conversions, truth tables, traces, queries, formulas or designs — showing every step of working.",
      "Evaluate a technology choice for its safety, legality, cost and effect on people in Liberia."
    ],
    "objectives": [
      "Define the key terms in “Programming in Python — Data Types, Operators and Expressions” precisely and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm, program or procedure connected with this unit, on paper.",
      "Classify examples into the unit's two groups and justify each placement.",
      "Solve a worked example step by step, showing every line of working, and state the answer in a full sentence with its unit or type.",
      "Apply the unit's ideas to a fictional Liberian business, ministry, clinic or school scenario.",
      "Find and correct a bug in a set of steps, a circuit, a query or a program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared test log.",
      "Explain one Liberian example of this unit's idea (mobile money, the ACE submarine cable, a hospital record, a bank, the national examination system or a radio station)."
    ],
    "safeguard": "A senior high computing lesson uses paper traces, truth tables, printed listings and, when one is present, a shared school computer or the teacher's own device. Students never share passwords, PINs or one-time codes, never install software on a school machine without permission, and never photograph, record or post a classmate without consent. A program written in class must never be used to guess a password, send bulk messages or enter another person's account — that is a crime, not a prank. If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "Python values have types: int, float, str and bool. Arithmetic operators include +, −, *, / (true division), // (integer division), % (remainder) and the power operator, written as two asterisks; comparison operators give booleans; and, or and not combine them. Precedence runs from the power operator through *, /, //, % to + and −, then comparisons, then not, and, or; brackets override. Input arrives as a string and is converted with int() or float(); output uses print() with formatting.",
    "focus": [
      "Worked demonstration on paper",
      "Pair programming and debugging",
      "Liberian case scenario",
      "Practical and period check"
    ],
    "terms": [
      {
        "t": "expression",
        "d": "a combination of values, variables and operators that Python evaluates to one value",
        "x": "In this unit, expression means a combination of values, variables and operators that Python evaluates to one value."
      },
      {
        "t": "data type",
        "d": "the kind of a value, which decides what operations are allowed: int, float, str or bool",
        "x": "In this unit, data type means the kind of a value, which decides what operations are allowed: int, float, str or bool."
      },
      {
        "t": "int",
        "d": "the integer type for whole numbers such as 42 or -7",
        "x": "In this unit, int means the integer type for whole numbers such as 42 or -7."
      },
      {
        "t": "float",
        "d": "the type for numbers with a decimal point such as 3.5 or 37.0",
        "x": "In this unit, float means the type for numbers with a decimal point such as 3.5 or 37.0."
      },
      {
        "t": "str",
        "d": "the string type for text in quotation marks such as \"Monrovia\"",
        "x": "In this unit, str means the string type for text in quotation marks such as \"Monrovia\"."
      },
      {
        "t": "bool",
        "d": "the boolean type with exactly two values, True and False",
        "x": "In this unit, bool means the boolean type with exactly two values, True and False."
      },
      {
        "t": "arithmetic operator",
        "d": "one of +, −, *, / (division), // (integer division), % (remainder) and the power operator, written as two asterisks",
        "x": "In this unit, arithmetic operator means one of +, −, *, / (division), // (integer division), % (remainder) and the power operator, written as two asterisks."
      },
      {
        "t": "comparison operator",
        "d": "one of the six symbols — equal ==, not equal !=, less than, greater than, less than or equal, greater than or equal — that compare two values and give a bool",
        "x": "In this unit, comparison operator means one of the six symbols — equal ==, not equal !=, less than, greater than, less than or equal, greater than or equal — that compare two values and give a bool."
      },
      {
        "t": "logical operator",
        "d": "and, or and not, which combine or reverse boolean values",
        "x": "In this unit, logical operator means and, or and not, which combine or reverse boolean values."
      },
      {
        "t": "operator precedence",
        "d": "the fixed order in which Python applies operators in an expression when there are no brackets",
        "x": "In this unit, operator precedence means the fixed order in which Python applies operators in an expression when there are no brackets."
      },
      {
        "t": "type conversion",
        "d": "changing a value from one type to another with int(), float(), str() or bool()",
        "x": "In this unit, type conversion means changing a value from one type to another with int(), float(), str() or bool()."
      },
      {
        "t": "constant",
        "d": "a variable whose value is not meant to change, written in capitals by convention, such as VAT_RATE = 0.1",
        "x": "In this unit, constant means a variable whose value is not meant to change, written in capitals by convention, such as VAT_RATE = 0.1."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “expression” in this unit?",
        "a": "a combination of values, variables and operators that Python evaluates to one value."
      },
      {
        "q": "What is meant by “data type” in this unit?",
        "a": "the kind of a value, which decides what operations are allowed: int, float, str or bool."
      },
      {
        "q": "What is meant by “int” in this unit?",
        "a": "the integer type for whole numbers such as 42 or -7."
      },
      {
        "q": "What is meant by “float” in this unit?",
        "a": "the type for numbers with a decimal point such as 3.5 or 37.0."
      },
      {
        "q": "What is meant by “str” in this unit?",
        "a": "the string type for text in quotation marks such as \"Monrovia\"."
      },
      {
        "q": "What is meant by “bool” in this unit?",
        "a": "the boolean type with exactly two values, True and False."
      },
      {
        "q": "What is meant by “arithmetic operator” in this unit?",
        "a": "one of +, −, *, / (division), // (integer division), % (remainder) and the power operator, written as two asterisks."
      },
      {
        "q": "What is meant by “comparison operator” in this unit?",
        "a": "one of the six symbols — equal ==, not equal !=, less than, greater than, less than or equal, greater than or equal — that compare two values and give a bool."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A Grade 11 pair's receipt program prints 'Total: 450450450' when a customer buys three items, and they suspect the multiplication key on the laptop."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Evaluate the expression by hand with the type column: input() gave the string \"450\", and a string times 3 is the string repeated; convert with int(input()) or float(input()), retrace with two inputs, and add the 'type beside every value' habit to the class chart."
      },
      {
        "q": "State this unit idea in your own words: In Python, 7 / 2 is 3.5 but 7 // 2 is 3 and 7 % 2 is 1 — three different operators for division.",
        "a": "In Python, 7 / 2 is 3.5 but 7 // 2 is 3 and 7 % 2 is 1 — three different operators for division."
      },
      {
        "q": "State this unit idea in your own words: Operators are applied in order of precedence — the power operator first, then * / // %, then + −, then comparisons, then not, and, or — and brackets override that order.",
        "a": "Operators are applied in order of precedence — the power operator first, then * / // %, then + −, then comparisons, then not, and, or — and brackets override that order."
      },
      {
        "q": "Name the four basic data types in Python with an example of each.",
        "a": "int (42), float (3.5), str (\"Monrovia\"), bool (True)."
      },
      {
        "q": "Why must input() be converted before arithmetic, and how?",
        "a": "input() returns a str; use int() or float() to turn it into a number that arithmetic operators can use."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Programming in Python — Data Types, Operators and Expressions” Is"
      },
      {
        "k": "p",
        "t": "A Python program is built from **expressions** that combine values with **operators**. Every value has a **data type** — **int**, **float**, **str**, **bool** — and the type decides what the operators do: + adds numbers but joins strings. **Arithmetic operators** (+, −, *, /, //, % and the power operator), **comparison operators** (equal, not equal, less than, greater than and their or-equal forms) and **logical operators** (and, or, not) follow an **order of precedence**. **Type conversion** with int(), float() and str() moves values between types, and **constants** and well-named **variables** make an expression readable a year later. Pairs whose receipt prints 450450450 for three items have multiplied a string, not a number. Evaluate the expression by hand with the type column: input() gave the string \"450\", and a string times 3 is the string repeated; convert with int(input()) or float(input()), retrace with two inputs, and add the 'type beside every value' habit to the class chart. In Python, 7 / 2 is 3.5 but 7 // 2 is 3 and 7 % 2 is 1 — three different operators for division. Operators are applied in order of precedence — the power operator first, then * / // %, then + −, then comparisons, then not, and, or — and brackets override that order."
      },
      {
        "k": "p",
        "t": "Python values have types: int, float, str and bool. Arithmetic operators include +, −, *, / (true division), // (integer division), % (remainder) and the power operator, written as two asterisks; comparison operators give booleans; and, or and not combine them. Precedence runs from the power operator through *, /, //, % to + and −, then comparisons, then not, and, or; brackets override. Input arrives as a string and is converted with int() or float(); output uses print() with formatting."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: In Python, 7 / 2 is 3.5 but 7 // 2 is 3 and 7 % 2 is 1 — three different operators for division. Operators are applied in order of precedence — the power operator first, then * / // %, then + −, then comparisons, then not, and, or — and brackets override that order."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Ideas in This Unit"
      },
      {
        "k": "p",
        "t": "Each idea below is a working definition for Grade 11. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
      },
      {
        "k": "table",
        "head": [
          "Term",
          "What it means",
          "A sentence that uses it"
        ],
        "rows": [
          [
            "expression",
            "a combination of values, variables and operators that Python evaluates to one value",
            "In this unit, expression means a combination of values, variables and operators that Python evaluates to one value."
          ],
          [
            "data type",
            "the kind of a value, which decides what operations are allowed: int, float, str or bool",
            "In this unit, data type means the kind of a value, which decides what operations are allowed: int, float, str or bool."
          ],
          [
            "int",
            "the integer type for whole numbers such as 42 or -7",
            "In this unit, int means the integer type for whole numbers such as 42 or -7."
          ],
          [
            "float",
            "the type for numbers with a decimal point such as 3.5 or 37.0",
            "In this unit, float means the type for numbers with a decimal point such as 3.5 or 37.0."
          ],
          [
            "str",
            "the string type for text in quotation marks such as \"Monrovia\"",
            "In this unit, str means the string type for text in quotation marks such as \"Monrovia\"."
          ],
          [
            "bool",
            "the boolean type with exactly two values, True and False",
            "In this unit, bool means the boolean type with exactly two values, True and False."
          ],
          [
            "arithmetic operator",
            "one of +, −, *, / (division), // (integer division), % (remainder) and the power operator, written as two asterisks",
            "In this unit, arithmetic operator means one of +, −, *, / (division), // (integer division), % (remainder) and the power operator, written as two asterisks."
          ],
          [
            "comparison operator",
            "one of the six symbols — equal ==, not equal !=, less than, greater than, less than or equal, greater than or equal — that compare two values and give a bool",
            "In this unit, comparison operator means one of the six symbols — equal ==, not equal !=, less than, greater than, less than or equal, greater than or equal — that compare two values and give a bool."
          ],
          [
            "logical operator",
            "and, or and not, which combine or reverse boolean values",
            "In this unit, logical operator means and, or and not, which combine or reverse boolean values."
          ],
          [
            "operator precedence",
            "the fixed order in which Python applies operators in an expression when there are no brackets",
            "In this unit, operator precedence means the fixed order in which Python applies operators in an expression when there are no brackets."
          ],
          [
            "type conversion",
            "changing a value from one type to another with int(), float(), str() or bool()",
            "In this unit, type conversion means changing a value from one type to another with int(), float(), str() or bool()."
          ],
          [
            "constant",
            "a variable whose value is not meant to change, written in capitals by convention, such as VAT_RATE = 0.1",
            "In this unit, constant means a variable whose value is not meant to change, written in capitals by convention, such as VAT_RATE = 0.1."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Tell Them Apart"
      },
      {
        "k": "bul",
        "items": [
          "**/** gives a float (7 / 2 = 3.5); **//** gives the whole part (7 // 2 = 3); **%** gives the remainder (7 % 2 = 1).",
          "**+** on numbers adds; **+** on strings joins; a number and a string cannot be added without conversion.",
          "**=** assigns; **==** compares.",
          "**int(\"12\")** works; **int(\"12.5\")** fails; **int(12.9)** gives 12 (it truncates, it does not round).",
          "**and** needs both True; **or** needs one; **not** flips; comparisons are evaluated before them."
        ]
      },
      {
        "k": "table",
        "head": [
          "Expression",
          "Value",
          "Type"
        ],
        "rows": [
          [
            "7 / 2",
            "3.5",
            "float"
          ],
          [
            "7 // 2",
            "3",
            "int"
          ],
          [
            "7 % 2",
            "1",
            "int"
          ],
          [
            "pow(2, 3)",
            "8",
            "int"
          ],
          [
            "\"Grade \" + str(11)",
            "\"Grade 11\"",
            "str"
          ],
          [
            "5 > 3 and 2 == 2",
            "True",
            "bool"
          ]
        ]
      },
      {
        "k": "p",
        "t": "A second table for this unit, so the distinction can be practised twice:"
      },
      {
        "k": "table",
        "head": [
          "Expression",
          "Step by step",
          "Result"
        ],
        "rows": [
          [
            "2 + 3 * 4",
            "* before +: 3 * 4 = 12; 2 + 12",
            "14"
          ],
          [
            "(2 + 3) * 4",
            "Brackets first: 5 * 4",
            "20"
          ],
          [
            "10 - 4 - 3",
            "Left to right: 6 - 3",
            "3"
          ],
          [
            "2 + pow(3, 2) * 2",
            "The function call first: 9; then * : 18; then +",
            "20"
          ],
          [
            "17 % 5 * 2",
            "% and * same level, left to right: 2 * 2",
            "4"
          ],
          [
            "not 3 > 5 or False",
            "3 > 5 is False; not False is True; True or False",
            "True"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why This Matters in Liberia"
      },
      {
        "k": "p",
        "t": "A fee receipt that adds a string to a number, a mobile-money app that rounds a float wrongly, a WAEC average computed with // instead of / — the bugs of this unit are the bugs of real Liberian software. Python is free, runs on the oldest laptop in the lab and on an Android phone, and reads almost like English, which makes it the right first language for senior high. But the discipline is on paper: evaluate every expression step by step, write the type beside the value, and only then type it in. An examiner marks the steps; a customer only sees the wrong total."
      },
      {
        "k": "p",
        "t": "This course is an **original teaching resource**, not an official syllabus transcription. A school without a computer lab is not a school without Computer Science. Teachers should compare the unit with the school's approved scheme of work before use."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Paper-First Method"
      },
      {
        "k": "p",
        "t": "The class investigation is **“Expression evaluation cards and the type column”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Pairs receive twelve expression cards (7 / 2, 7 // 2, 17 % 5, 2 + 3 * 4, \"5\" + \"3\", 5 > 3 and 2 == 3 …) and a precedence table.",
          "For each card the driver evaluates step by step in writing, one operator per line, and the navigator writes the type of the final value; they swap after six cards.",
          "They then write a five-line program that reads a price and a quantity, computes the total and the VAT at a constant rate, and prints a formatted receipt line, and trace it with two inputs.",
          "The navigator introduces a type error (quantity left as a string) and a precedence error (total + total * VAT_RATE without brackets around a discount); the driver diagnoses each with a step-by-step evaluation.",
          "If Python is available, one pair runs each expression and the program and compares with the paper; every disagreement is examined until the paper and the machine agree."
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Worked Example in Prose"
      },
      {
        "k": "p",
        "t": "**Problem.** A shop sells items at LRD 450 each; a customer buys 7 and pays with a LRD 5,000 note. Write Python expressions for the total, the change, the number of LRD 500 notes in the change, and the leftover coins after those notes, and evaluate each step by step with its type. Then evaluate 2 + 3 * pow(4, 2) // 5."
      },
      {
        "k": "num",
        "items": [
          "total = 450 * 7 → 3150 (int).",
          "change = 5000 - total → 5000 - 3150 = 1850 (int).",
          "notes = change // 500 → 1850 // 500 = 3 (int).",
          "coins = change % 500 → 1850 % 500 = 350 (int).",
          "2 + 3 * pow(4, 2) // 5: the function call (a power) first → pow(4, 2) = 16; then * and // left to right → 3 * 16 = 48, 48 // 5 = 9; then + → 2 + 9 = 11 (int)."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** total 3150, change 1850, three LRD 500 notes and 350 left over — all ints; and 2 + 3 * pow(4, 2) // 5 evaluates to 11."
      },
      {
        "k": "p",
        "t": "Notice the method: name what you know, run one step at a time, write the result of each step, then state the answer in a full sentence. That is the same habit a Physics class uses on a numerical problem; here the 'calculation' is a trace, a conversion, a truth table, a formula, a query or a debug."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Common Mistakes"
      },
      {
        "k": "bul",
        "items": [
          "Using / where a whole number is needed, so 7 / 2 gives 3.5 items.",
          "Adding input() directly to a number without int() or float().",
          "Expecting int(12.9) to give 13; it truncates to 12.",
          "Forgetting precedence, so price + price * 0.1 * 0 - discount is read differently from what was meant."
        ]
      },
      {
        "k": "p",
        "t": "The class rule still holds when a mistake appears: **we try, we debug, we do not laugh at a mistake.** A bug is in the steps, not in the person."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Safety, Ethics and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN or a one-time code, and nobody installs software on a school machine without permission. A program written in this course is never pointed at another person's account, phone or wallet: guessing a password, sending bulk messages or reading someone's data without consent is a crime under Liberian law, not a prank. Copying a program from a classmate and submitting it as your own is plagiarism. Pair work shares the thinking, not the credit for work you did not do."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered (screenshots, not deletions), and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Pair Roles: Driver and Navigator"
      },
      {
        "k": "p",
        "t": "A computing pair has two jobs that swap. The **driver** writes or works the next step. The **navigator** reads the algorithm or the listing, watches for a bug, and says 'stop' before a wrong line is copied. After five minutes they swap, so both practise both jobs. A third student may sit as **checker** and tick each step on the trace table. Taking turns is a computing skill, not a punishment for having only one computer — or none."
      },
      {
        "k": "table",
        "head": [
          "Role",
          "What this person does",
          "What this person does not do"
        ],
        "rows": [
          [
            "Driver",
            "Works or writes the current step",
            "Does not skip the navigator's 'stop'"
          ],
          [
            "Navigator",
            "Reads the steps and watches for bugs",
            "Does not grab the pencil, the keyboard or the mouse"
          ],
          [
            "Checker",
            "Ticks each step and records one bug on the class chart",
            "Does not laugh at a mistake"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Fictional Liberian Scenario"
      },
      {
        "k": "p",
        "t": "A Grade 11 pair's receipt program prints 'Total: 450450450' when a customer buys three items, and they suspect the multiplication key on the laptop."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Evaluate the expression by hand with the type column: input() gave the string \"450\", and a string times 3 is the string repeated; convert with int(input()) or float(input()), retrace with two inputs, and add the 'type beside every value' habit to the class chart."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Worked Computing Reasoning"
      },
      {
        "k": "p",
        "t": "Evaluate the expression by hand with the type column: input() gave the string \"450\", and a string times 3 is the string repeated; convert with int(input()) or float(input()), retrace with two inputs, and add the 'type beside every value' habit to the class chart."
      },
      {
        "k": "p",
        "t": "When you answer a scenario question, use this three-part shape: (1) name the computing idea (algorithm, data, network, security, binary, database, …); (2) say what a person should do, in order; (3) say why, with a unit term in the reason. Vague good intentions without a term do not yet show that the unit has been learned."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Practise It on Paper"
      },
      {
        "k": "p",
        "t": "The investigation **“Expression evaluation cards and the type column”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
      },
      {
        "k": "table",
        "head": [
          "Paper object",
          "What it stands for",
          "What we write afterwards"
        ],
        "rows": [
          [
            "Expression cards",
            "Lines of Python",
            "One operator per line of working, with the type"
          ],
          [
            "Precedence table",
            "Python's order of operations",
            "Ticked at each step"
          ],
          [
            "Receipt trace sheet",
            "The program's variables",
            "Values and types after every line"
          ],
          [
            "Class chart",
            "Expression bugs the class found (string times number, wrong division)",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Three Divisions"
      },
      {
        "k": "p",
        "t": "/ always gives a float: 6 / 3 is 2.0. // gives the whole part of the quotient: 7 // 2 is 3. % gives what is left: 7 % 2 is 1. Money, change, and 'how many full boxes' questions need // and %; averages need /. Choosing the right one is a reading skill before it is a coding skill."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Precedence in One Line"
      },
      {
        "k": "p",
        "t": "Brackets and function calls such as pow(); then the power operator; then * / // %; then + −; then comparisons; then not; then and; then or. When in doubt, add brackets — a bracketed expression is never wrong and always easier to read."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Types Are Contracts"
      },
      {
        "k": "p",
        "t": "\"3\" + 2 fails because Python will not guess whether you meant \"32\" or 5. That refusal is a gift: it catches a mistake at the keyboard instead of on the receipt. Convert deliberately with int(), float() or str(), and write the type beside every variable in your trace."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Formatting Output for People"
      },
      {
        "k": "p",
        "t": "print(f\"Total: LRD {total:,}\") prints Total: LRD 3,150; {avg:.2f} prints two decimal places. A receipt, a mark sheet and a clinic report are read by people, and a program that prints 2016.6666666667 has not finished its job."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "What a Period Test Asks"
      },
      {
        "k": "p",
        "t": "A fair period test on “Programming in Python — Data Types, Operators and Expressions” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit precisely and use each in a sentence.",
          "Solve or trace a problem connected with “Programming in Python — Data Types, Operators and Expressions” on paper, showing every line of working.",
          "Classify four examples using “Expressions whose value is an int / Expressions whose value is a float, str or bool” and justify one placement.",
          "Find and correct a bug in a set of steps, a query or a program, and say what the bug was."
        ]
      },
      {
        "k": "p",
        "t": "Show every step of a tracing or conversion question, the way a Physics script shows working. A bare answer with no steps cannot be given full credit, because the teacher cannot see the method you ran."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Four Weeks of Study"
      },
      {
        "k": "p",
        "t": "A 4-week unit on “Programming in Python — Data Types, Operators and Expressions” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
      },
      {
        "k": "table",
        "head": [
          "Week",
          "Study focus",
          "What students leave able to do"
        ],
        "rows": [
          [
            "1",
            "What “Programming in Python — Data Types, Operators and Expressions” is, and where it already appears around us.",
            "Say what the unit is about and name two examples from Liberia."
          ],
          [
            "2",
            "Key ideas, distinctions and the unit table.",
            "Use the key terms and complete the distinction tables."
          ],
          [
            "3",
            "A Liberian example and the paper-first method, worked then written.",
            "Run the paper method and write the algorithm, table or report."
          ],
          [
            "4",
            "Worked problems, pair-debug, the computing fair and the period check.",
            "Solve a worked example, debug a bug, and sit the period check."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Check Yourself"
      },
      {
        "k": "p",
        "t": "Close the notes. (1) Say the unit title and one Liberian example. (2) Give the meaning of three terms without looking. (3) Work the paper method once more, showing every step. (4) Name one bug you would look for. (5) Say who you tell if a message asks for a photograph, a PIN or money. If any of those five stalls, go back to the table of terms and the worked example and run them again with a partner. Do not laugh at a bug — including your own."
      },
      {
        "k": "p",
        "t": "This is original supplementary teaching material for Liberian senior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, expression means a combination of values, variables and operators that Python evaluates to one value.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, data type means the integer type for whole numbers such as 42 or -7.",
        "a": "False",
        "why": "data type means the kind of a value, which decides what operations are allowed: int, float, str or bool; the statement describes int."
      },
      {
        "s": "In this unit, float means the type for numbers with a decimal point such as 3.5 or 37.0.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Every conversion, truth table, trace and program in the unit can be worked on paper; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the code or the steps, not in the person."
      },
      {
        "s": "Students should share passwords, PINs or one-time codes so a partner can finish the work.",
        "a": "False",
        "why": "A password, PIN or one-time code is secret. Sharing one is how accounts and mobile-money wallets are emptied."
      },
      {
        "s": "In Python, 7 / 2 is 3.5 but 7 // 2 is 3 and 7 % 2 is 1 — three different operators for division.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "In Python, 7 // 2 evaluates to 3.5.",
        "a": "False",
        "why": "// is integer division; 7 // 2 is 3. It is 7 / 2 that gives 3.5."
      },
      {
        "s": "The expression 2 + 3 * 4 evaluates to 14 because multiplication has higher precedence than addition.",
        "a": "True",
        "why": "3 * 4 is worked first, then 2 is added."
      }
    ],
    "classify": {
      "title": "Expressions whose value is an int / Expressions whose value is a float, str or bool",
      "groups": [
        {
          "name": "Expressions whose value is an int",
          "items": [
            "7 // 2",
            "17 % 5",
            "pow(2, 3)",
            "450 * 7",
            "int(\"12\")",
            "len(\"Liberia\")"
          ]
        },
        {
          "name": "Expressions whose value is a float, str or bool",
          "items": [
            "7 / 2",
            "\"Grade \" + str(11)",
            "5 > 3 and 2 == 2",
            "float(\"37.5\")",
            "str(450) + \"0\"",
            "not True"
          ]
        }
      ]
    },
    "diagram": {
      "title": "Evaluating an expression by precedence",
      "caption": "Label each part and state what it does in “Programming in Python — Data Types, Operators and Expressions”.",
      "parts": [
        {
          "p": "Brackets",
          "f": "innermost first"
        },
        {
          "p": "Power operator",
          "f": "written as two asterisks in Python; grouped from the right"
        },
        {
          "p": "* / // %",
          "f": "left to right"
        },
        {
          "p": "+ −",
          "f": "left to right"
        },
        {
          "p": "Comparisons, then not, and, or",
          "f": "produce and combine booleans last"
        }
      ]
    },
    "experiment": {
      "title": "Expression evaluation cards and the type column",
      "aim": "To practise the ideas of “Programming in Python — Data Types, Operators and Expressions” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Printed listings, cards and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class test log",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “Expression evaluation cards and the type column” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A Grade 11 pair's receipt program prints 'Total: 450450450' when a customer buys three items, and they suspect the multiplication key on the laptop. What should happen next?",
        "a": "Evaluate the expression by hand with the type column: input() gave the string \"450\", and a string times 3 is the string repeated; convert with int(input()) or float(input()), retrace with two inputs, and add the 'type beside every value' habit to the class chart."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Programming in Python — Data Types, Operators and Expressions”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's program or trace fails. What do you say, and why?",
        "a": "Remind the class that a bug is in the code or the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the exact line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian working life (a bank, a mobile-money agent, a clinic, a radio station, a business, a ministry).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as a bank's database, a mobile-money transaction, a hospital record, a radio station's schedule or a ministry's website."
      },
      {
        "q": "Write a program that reads three marks, computes the average to two decimal places and prints whether it is 50.0 or above. Trace it with 48, 52 and 50.",
        "a": "m1, m2, m3 = float(input()), float(input()), float(input()); avg = (m1 + m2 + m3) / 3; print(f\"{avg:.2f}\", avg >= 50) — trace: 150 / 3 = 50.0, prints 50.00 True."
      },
      {
        "q": "A customer pays LRD 2,300 for goods worth LRD 1,725. Write expressions for the change, the number of LRD 100 notes and the remaining coins, and evaluate them.",
        "a": "change = 2300 - 1725 = 575; notes = 575 // 100 = 5; coins = 575 % 100 = 75."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “Expression evaluation cards and the type column” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, squared paper and printed listings",
      "A class computing chart and test log",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's device, kept dry and in sight"
    ],
    "aids": [
      "Word cards — expression, data type, int",
      "A flowchart or trace table of “Expression evaluation cards and the type column”",
      "Expression cards, a precedence table and trace sheets with a type column",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing term and what it means.",
      "Work this week's paper method (a conversion, a truth table, a trace, a query or a design) again with a friend — no device needed.",
      "Find one example of this unit's idea in your community (a bank, a mobile-money kiosk, a clinic, a radio station, a business or a ministry office) and write a paragraph about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written trace, conversion, truth table or query with full working",
      "Pair-debug observed against the class test log",
      "A short written response to the Liberian case scenario"
    ],
    "worked": [
      {
        "q": "Evaluate 7 / 2, 7 // 2 and 7 % 2 with their types.",
        "steps": [
          "True division, whole part, remainder."
        ],
        "a": "3.5 (float), 3 (int), 1 (int)"
      },
      {
        "q": "Evaluate 2 + 3 * 4.",
        "steps": [
          "* first."
        ],
        "a": "14"
      },
      {
        "q": "Evaluate (2 + 3) * 4.",
        "steps": [
          "Brackets first."
        ],
        "a": "20"
      },
      {
        "q": "Evaluate \"5\" + \"3\" and 5 + 3.",
        "steps": [
          "Join vs add."
        ],
        "a": "\"53\" and 8"
      },
      {
        "q": "Evaluate 2 + pow(3, 2) * 2.",
        "steps": [
          "pow(3, 2) = 9; 9 * 2 = 18; 2 + 18."
        ],
        "a": "20"
      },
      {
        "q": "What does int(12.9) give? And int(\"12\")?",
        "steps": [
          "Truncate; parse."
        ],
        "a": "12 and 12"
      },
      {
        "q": "Evaluate 5 > 3 and 2 == 3.",
        "steps": [
          "True and False."
        ],
        "a": "False"
      },
      {
        "q": "1850 // 500 and 1850 % 500?",
        "steps": [
          "Notes and coins."
        ],
        "a": "3 and 350"
      }
    ]
  },
  {
    "grade": 11,
    "period": "II",
    "sem": "One",
    "icon": "🧮",
    "csPlan": true,
    "title": "Python Control Structures and Functions",
    "subtitle": "Computer Science · Original senior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Written for classes that may have no computer lab: every conversion, truth table, trace, query and program in the unit can be done on paper, and a shared device extends it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary precisely in speech, writing and examination answers.",
      "Solve the unit's problems on paper — conversions, truth tables, traces, queries, formulas or designs — showing every step of working.",
      "Evaluate a technology choice for its safety, legality, cost and effect on people in Liberia."
    ],
    "objectives": [
      "Define the key terms in “Python Control Structures and Functions” precisely and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm, program or procedure connected with this unit, on paper.",
      "Classify examples into the unit's two groups and justify each placement.",
      "Solve a worked example step by step, showing every line of working, and state the answer in a full sentence with its unit or type.",
      "Apply the unit's ideas to a fictional Liberian business, ministry, clinic or school scenario.",
      "Find and correct a bug in a set of steps, a circuit, a query or a program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared test log.",
      "Explain one Liberian example of this unit's idea (mobile money, the ACE submarine cable, a hospital record, a bank, the national examination system or a radio station)."
    ],
    "safeguard": "A senior high computing lesson uses paper traces, truth tables, printed listings and, when one is present, a shared school computer or the teacher's own device. Students never share passwords, PINs or one-time codes, never install software on a school machine without permission, and never photograph, record or post a classmate without consent. A program written in class must never be used to guess a password, send bulk messages or enter another person's account — that is a crime, not a prank. If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "Python selection uses if, elif and else; iteration uses for with range() or over a sequence, and while with a condition; break leaves a loop and continue skips to the next pass. Functions are defined with def name(parameters):, return a value with return, and are called by name with arguments. Variables inside a function are local; parameters pass values in. Functions make programs modular, testable and reusable.",
    "focus": [
      "Worked demonstration on paper",
      "Pair programming and debugging",
      "Liberian case scenario",
      "Practical and period check"
    ],
    "terms": [
      {
        "t": "function",
        "d": "a named block of code defined with def that performs one job and can be called from elsewhere",
        "x": "In this unit, function means a named block of code defined with def that performs one job and can be called from elsewhere."
      },
      {
        "t": "parameter",
        "d": "a variable named in a function's definition that receives a value when the function is called",
        "x": "In this unit, parameter means a variable named in a function's definition that receives a value when the function is called."
      },
      {
        "t": "argument",
        "d": "the actual value passed to a function when it is called",
        "x": "In this unit, argument means the actual value passed to a function when it is called."
      },
      {
        "t": "return value",
        "d": "the value a function hands back to the code that called it, using the return statement",
        "x": "In this unit, return value means the value a function hands back to the code that called it, using the return statement."
      },
      {
        "t": "local variable",
        "d": "a variable created inside a function that exists only while the function runs",
        "x": "In this unit, local variable means a variable created inside a function that exists only while the function runs."
      },
      {
        "t": "global variable",
        "d": "a variable created outside all functions that can be read anywhere in the program",
        "x": "In this unit, global variable means a variable created outside all functions that can be read anywhere in the program."
      },
      {
        "t": "range()",
        "d": "the built-in function that produces a sequence of integers: range(stop), range(start, stop) or range(start, stop, step)",
        "x": "In this unit, range() means the built-in function that produces a sequence of integers: range(stop), range(start, stop) or range(start, stop, step)."
      },
      {
        "t": "nested loop",
        "d": "a loop placed inside the body of another loop, so the inner loop runs completely for each pass of the outer",
        "x": "In this unit, nested loop means a loop placed inside the body of another loop, so the inner loop runs completely for each pass of the outer."
      },
      {
        "t": "break",
        "d": "the statement that leaves the current loop immediately",
        "x": "In this unit, break means the statement that leaves the current loop immediately."
      },
      {
        "t": "continue",
        "d": "the statement that skips the rest of the current pass and goes to the next iteration",
        "x": "In this unit, continue means the statement that skips the rest of the current pass and goes to the next iteration."
      },
      {
        "t": "docstring",
        "d": "a string on the first line of a function that describes what it does, its parameters and its return value",
        "x": "In this unit, docstring means a string on the first line of a function that describes what it does, its parameters and its return value."
      },
      {
        "t": "modular programming",
        "d": "building a program from small functions that each do one job, so it is easier to test, read and reuse",
        "x": "In this unit, modular programming means building a program from small functions that each do one job, so it is easier to test, read and reuse."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “function” in this unit?",
        "a": "a named block of code defined with def that performs one job and can be called from elsewhere."
      },
      {
        "q": "What is meant by “parameter” in this unit?",
        "a": "a variable named in a function's definition that receives a value when the function is called."
      },
      {
        "q": "What is meant by “argument” in this unit?",
        "a": "the actual value passed to a function when it is called."
      },
      {
        "q": "What is meant by “return value” in this unit?",
        "a": "the value a function hands back to the code that called it, using the return statement."
      },
      {
        "q": "What is meant by “local variable” in this unit?",
        "a": "a variable created inside a function that exists only while the function runs."
      },
      {
        "q": "What is meant by “global variable” in this unit?",
        "a": "a variable created outside all functions that can be read anywhere in the program."
      },
      {
        "q": "What is meant by “range()” in this unit?",
        "a": "the built-in function that produces a sequence of integers: range(stop), range(start, stop) or range(start, stop, step)."
      },
      {
        "q": "What is meant by “nested loop” in this unit?",
        "a": "a loop placed inside the body of another loop, so the inner loop runs completely for each pass of the outer."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A Grade 11 group's results program counts zero passes even though grade() prints 'Pass' for every mark, and they conclude the counting loop is broken."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Trace one call: g = grade(64) prints Pass but returns None, so g != \"Fail\" is compared against None; change print to return inside grade(), let the main section decide what to print, retrace with 49 and 50, and add the rule 'functions return, main prints' to the class chart."
      },
      {
        "q": "State this unit idea in your own words: A function is defined once with def and called many times; parameters carry values in and return carries one value out.",
        "a": "A function is defined once with def and called many times; parameters carry values in and return carries one value out."
      },
      {
        "q": "State this unit idea in your own words: range(start, stop, step) produces numbers from start up to but not including stop.",
        "a": "range(start, stop, step) produces numbers from start up to but not including stop."
      },
      {
        "q": "What is the difference between a parameter and an argument?",
        "a": "A parameter is the name in the function definition; an argument is the actual value passed in when the function is called."
      },
      {
        "q": "Give three advantages of writing a program as functions.",
        "a": "Each function can be tested alone with known inputs; code is written once and reused; the program is easier to read and to change in one place."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Python Control Structures and Functions” Is"
      },
      {
        "k": "p",
        "t": "Grade 9 introduced **if–elif–else**, **while** and **for**; Grade 11 makes them precise and adds the tool that keeps programs readable: the **function**. A function is a named block defined with **def**, taking **parameters**, doing one job and handing back a **return value**. Variables created inside a function are **local**; those outside are **global** — and a program that relies on globals is hard to test. **Nested** loops and selections, **range()** with three arguments, **break** and **continue**, and **docstrings** complete the toolkit, and every function is tested by calling it with known inputs. Groups whose loop counts zero passes while grade() prints 'Pass' on every line have a function that prints instead of returning. Trace one call: g = grade(64) prints Pass but returns None, so g != \"Fail\" is compared against None; change print to return inside grade(), let the main section decide what to print, retrace with 49 and 50, and add the rule 'functions return, main prints' to the class chart. A function is defined once with def and called many times; parameters carry values in and return carries one value out. range(start, stop, step) produces numbers from start up to but not including stop."
      },
      {
        "k": "p",
        "t": "Python selection uses if, elif and else; iteration uses for with range() or over a sequence, and while with a condition; break leaves a loop and continue skips to the next pass. Functions are defined with def name(parameters):, return a value with return, and are called by name with arguments. Variables inside a function are local; parameters pass values in. Functions make programs modular, testable and reusable."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: A function is defined once with def and called many times; parameters carry values in and return carries one value out. range(start, stop, step) produces numbers from start up to but not including stop."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Ideas in This Unit"
      },
      {
        "k": "p",
        "t": "Each idea below is a working definition for Grade 11. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
      },
      {
        "k": "table",
        "head": [
          "Term",
          "What it means",
          "A sentence that uses it"
        ],
        "rows": [
          [
            "function",
            "a named block of code defined with def that performs one job and can be called from elsewhere",
            "In this unit, function means a named block of code defined with def that performs one job and can be called from elsewhere."
          ],
          [
            "parameter",
            "a variable named in a function's definition that receives a value when the function is called",
            "In this unit, parameter means a variable named in a function's definition that receives a value when the function is called."
          ],
          [
            "argument",
            "the actual value passed to a function when it is called",
            "In this unit, argument means the actual value passed to a function when it is called."
          ],
          [
            "return value",
            "the value a function hands back to the code that called it, using the return statement",
            "In this unit, return value means the value a function hands back to the code that called it, using the return statement."
          ],
          [
            "local variable",
            "a variable created inside a function that exists only while the function runs",
            "In this unit, local variable means a variable created inside a function that exists only while the function runs."
          ],
          [
            "global variable",
            "a variable created outside all functions that can be read anywhere in the program",
            "In this unit, global variable means a variable created outside all functions that can be read anywhere in the program."
          ],
          [
            "range()",
            "the built-in function that produces a sequence of integers: range(stop), range(start, stop) or range(start, stop, step)",
            "In this unit, range() means the built-in function that produces a sequence of integers: range(stop), range(start, stop) or range(start, stop, step)."
          ],
          [
            "nested loop",
            "a loop placed inside the body of another loop, so the inner loop runs completely for each pass of the outer",
            "In this unit, nested loop means a loop placed inside the body of another loop, so the inner loop runs completely for each pass of the outer."
          ],
          [
            "break",
            "the statement that leaves the current loop immediately",
            "In this unit, break means the statement that leaves the current loop immediately."
          ],
          [
            "continue",
            "the statement that skips the rest of the current pass and goes to the next iteration",
            "In this unit, continue means the statement that skips the rest of the current pass and goes to the next iteration."
          ],
          [
            "docstring",
            "a string on the first line of a function that describes what it does, its parameters and its return value",
            "In this unit, docstring means a string on the first line of a function that describes what it does, its parameters and its return value."
          ],
          [
            "modular programming",
            "building a program from small functions that each do one job, so it is easier to test, read and reuse",
            "In this unit, modular programming means building a program from small functions that each do one job, so it is easier to test, read and reuse."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Tell Them Apart"
      },
      {
        "k": "bul",
        "items": [
          "**Parameter** — the name in the def line; **argument** — the value in the call.",
          "**return** hands a value back; **print** only shows it — a function that prints cannot be used in a calculation.",
          "**Local** variables die when the function ends; **global** ones live on and cause hidden dependencies.",
          "**break** exits the loop; **continue** skips one pass.",
          "**range(1, 13)** gives 1 to 12; **range(10, 0, -1)** counts down from 10 to 1."
        ]
      },
      {
        "k": "table",
        "head": [
          "Code",
          "What it produces",
          "Note"
        ],
        "rows": [
          [
            "for i in range(5): print(i)",
            "0 1 2 3 4",
            "Starts at 0, stops before 5"
          ],
          [
            "for i in range(1, 13): print(7 * i)",
            "The 7 times table to 84",
            "1 to 12 inclusive"
          ],
          [
            "for i in range(10, 0, -2): print(i)",
            "10 8 6 4 2",
            "Negative step counts down"
          ],
          [
            "for row in range(3): for col in range(4): print(row, col)",
            "12 pairs",
            "Inner loop runs 4 times for each of 3 outer passes"
          ],
          [
            "while True: … if done: break",
            "Runs until break",
            "break is the only exit"
          ],
          [
            "for m in marks: if m < 0: continue",
            "Skips negative marks",
            "Continues with the next mark"
          ]
        ]
      },
      {
        "k": "p",
        "t": "A second table for this unit, so the distinction can be practised twice:"
      },
      {
        "k": "table",
        "head": [
          "Function",
          "Call",
          "Returns"
        ],
        "rows": [
          [
            "def grade(mark): if mark >= 50: return \"Pass\" else: return \"Fail\"",
            "grade(64)",
            "\"Pass\""
          ],
          [
            "def vat(amount, rate=0.1): return amount * rate",
            "vat(2000)",
            "200.0"
          ],
          [
            "def average(values): return sum(values) / len(values)",
            "average([60, 70, 80])",
            "70.0"
          ],
          [
            "def is_fever(temp): return temp >= 37.5",
            "is_fever(36.9)",
            "False"
          ],
          [
            "def change(paid, total): return paid - total",
            "change(5000, 3150)",
            "1850"
          ],
          [
            "def greet(name): print(\"Hello\", name)",
            "x = greet(\"Musu\")",
            "None — it printed instead of returning"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why This Matters in Liberia"
      },
      {
        "k": "p",
        "t": "A school-results program that computes a grade in one place — a function called grade() — can be corrected once when the pass mark changes, instead of in forty places; a mobile-money program that validates a PIN in a function can be tested with a hundred known PINs in seconds. Liberian developers hired by a Monrovia bank or an NGO are judged on exactly this: small functions, clear parameters, a return value, a docstring and a test. All of it can be designed and traced on paper before the lab's one working laptop is free."
      },
      {
        "k": "p",
        "t": "This course is an **original teaching resource**, not an official syllabus transcription. A school without a computer lab is not a school without Computer Science. Teachers should compare the unit with the school's approved scheme of work before use."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Paper-First Method"
      },
      {
        "k": "p",
        "t": "The class investigation is **“Function cards — define, call, trace”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Each pair writes three functions on cards: grade(mark), average(values) and change(paid, total), each with a docstring and a return statement.",
          "The navigator writes a call (grade(49), grade(50), average([60, 70, 80])) on a slip; the driver traces the function body with the argument bound to the parameter, writes the return value, and notes that the local variables vanish after return.",
          "They write a main section that reads five marks in a for loop, calls grade() on each, counts the passes and prints the average using average(); they trace it with the boundary marks 49, 50, 40, 39, 100.",
          "The navigator replaces a return with a print in one function and asks the driver to show what breaks in the main section (the counted value becomes None).",
          "If Python is available, one pair types the functions and main section and runs the same boundary inputs; otherwise the traced cards and the main-section trace are the finished work."
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Worked Example in Prose"
      },
      {
        "k": "p",
        "t": "**Problem.** Write a function grade(mark) that returns \"Distinction\" for 75 and above, \"Pass\" for 50 to 74, and \"Fail\" below 50, and a function average(values). Then trace a main section that applies them to the marks [82, 49, 50, 74, 75] and prints the number of passes (including distinctions) and the average."
      },
      {
        "k": "num",
        "items": [
          "def grade(mark): \"\"\"Return the grade word for a mark.\"\"\" if mark >= 75: return \"Distinction\" elif mark >= 50: return \"Pass\" else: return \"Fail\"",
          "def average(values): \"\"\"Return the mean of a non-empty list.\"\"\" return sum(values) / len(values)",
          "Main: passes = 0; for m in [82, 49, 50, 74, 75]: g = grade(m); if g != \"Fail\": passes = passes + 1.",
          "Trace: 82 → Distinction (passes 1); 49 → Fail; 50 → Pass (2); 74 → Pass (3); 75 → Distinction (4).",
          "average([82, 49, 50, 74, 75]) = 330 / 5 = 66.0; print(passes, average(marks)) → 4 66.0."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** grade() uses if–elif–else from the highest boundary down; the main section counts 4 passes and prints an average of 66.0, with the boundaries 49/50 and 74/75 checked."
      },
      {
        "k": "p",
        "t": "Notice the method: name what you know, run one step at a time, write the result of each step, then state the answer in a full sentence. That is the same habit a Physics class uses on a numerical problem; here the 'calculation' is a trace, a conversion, a truth table, a formula, a query or a debug."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Common Mistakes"
      },
      {
        "k": "bul",
        "items": [
          "Printing inside a function instead of returning, so the caller receives None.",
          "Using a global variable inside a function instead of a parameter, so the function cannot be tested alone.",
          "Writing range(1, 12) for the 12 times table and losing the last row.",
          "Forgetting that the inner loop of a nested loop runs completely for every pass of the outer."
        ]
      },
      {
        "k": "p",
        "t": "The class rule still holds when a mistake appears: **we try, we debug, we do not laugh at a mistake.** A bug is in the steps, not in the person."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Safety, Ethics and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN or a one-time code, and nobody installs software on a school machine without permission. A program written in this course is never pointed at another person's account, phone or wallet: guessing a password, sending bulk messages or reading someone's data without consent is a crime under Liberian law, not a prank. Copying a program from a classmate and submitting it as your own is plagiarism. Pair work shares the thinking, not the credit for work you did not do."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered (screenshots, not deletions), and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Pair Roles: Driver and Navigator"
      },
      {
        "k": "p",
        "t": "A computing pair has two jobs that swap. The **driver** writes or works the next step. The **navigator** reads the algorithm or the listing, watches for a bug, and says 'stop' before a wrong line is copied. After five minutes they swap, so both practise both jobs. A third student may sit as **checker** and tick each step on the trace table. Taking turns is a computing skill, not a punishment for having only one computer — or none."
      },
      {
        "k": "table",
        "head": [
          "Role",
          "What this person does",
          "What this person does not do"
        ],
        "rows": [
          [
            "Driver",
            "Works or writes the current step",
            "Does not skip the navigator's 'stop'"
          ],
          [
            "Navigator",
            "Reads the steps and watches for bugs",
            "Does not grab the pencil, the keyboard or the mouse"
          ],
          [
            "Checker",
            "Ticks each step and records one bug on the class chart",
            "Does not laugh at a mistake"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Fictional Liberian Scenario"
      },
      {
        "k": "p",
        "t": "A Grade 11 group's results program counts zero passes even though grade() prints 'Pass' for every mark, and they conclude the counting loop is broken."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Trace one call: g = grade(64) prints Pass but returns None, so g != \"Fail\" is compared against None; change print to return inside grade(), let the main section decide what to print, retrace with 49 and 50, and add the rule 'functions return, main prints' to the class chart."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Worked Computing Reasoning"
      },
      {
        "k": "p",
        "t": "Trace one call: g = grade(64) prints Pass but returns None, so g != \"Fail\" is compared against None; change print to return inside grade(), let the main section decide what to print, retrace with 49 and 50, and add the rule 'functions return, main prints' to the class chart."
      },
      {
        "k": "p",
        "t": "When you answer a scenario question, use this three-part shape: (1) name the computing idea (algorithm, data, network, security, binary, database, …); (2) say what a person should do, in order; (3) say why, with a unit term in the reason. Vague good intentions without a term do not yet show that the unit has been learned."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Practise It on Paper"
      },
      {
        "k": "p",
        "t": "The investigation **“Function cards — define, call, trace”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
      },
      {
        "k": "table",
        "head": [
          "Paper object",
          "What it stands for",
          "What we write afterwards"
        ],
        "rows": [
          [
            "Function cards",
            "Defined functions",
            "Docstring, parameters, return value"
          ],
          [
            "Call slips",
            "Arguments and expected returns",
            "A table of call → expected → traced"
          ],
          [
            "Main-section trace",
            "The program's flow",
            "Variables after every line, with the function results"
          ],
          [
            "Class chart",
            "Function bugs the class found (print not return, globals)",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "One Job Per Function"
      },
      {
        "k": "p",
        "t": "grade() decides a grade. average() computes a mean. Neither reads input or prints — the main section does that. A function with one job has one reason to change and can be tested with a single call and a known answer, which is exactly how an examiner or an employer tests your code."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Parameters In, Return Out"
      },
      {
        "k": "p",
        "t": "A function is a machine with an input slot and an output slot. Arguments go in through the parameters; one value comes out through return. Reaching outside for a global variable is like a machine with a hidden pipe: it works on your desk and fails on someone else's."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Test the Boundaries by Calling"
      },
      {
        "k": "p",
        "t": "grade(49), grade(50), grade(74), grade(75): four calls, four expected answers, written on paper before the code is typed. If the code disagrees with the table, the code is wrong. This is the beginning of the unit tests professionals write."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Nested Loops and Tables"
      },
      {
        "k": "p",
        "t": "A times table, a class-by-subject mark grid and a seating plan are all nested loops: the outer loop chooses the row, the inner loop fills the columns. Trace a 3 × 4 nested loop by hand once and the pattern is yours forever."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "What a Period Test Asks"
      },
      {
        "k": "p",
        "t": "A fair period test on “Python Control Structures and Functions” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit precisely and use each in a sentence.",
          "Solve or trace a problem connected with “Python Control Structures and Functions” on paper, showing every line of working.",
          "Classify four examples using “Belongs inside a function / Belongs in the main section” and justify one placement.",
          "Find and correct a bug in a set of steps, a query or a program, and say what the bug was."
        ]
      },
      {
        "k": "p",
        "t": "Show every step of a tracing or conversion question, the way a Physics script shows working. A bare answer with no steps cannot be given full credit, because the teacher cannot see the method you ran."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Four Weeks of Study"
      },
      {
        "k": "p",
        "t": "A 4-week unit on “Python Control Structures and Functions” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
      },
      {
        "k": "table",
        "head": [
          "Week",
          "Study focus",
          "What students leave able to do"
        ],
        "rows": [
          [
            "1",
            "What “Python Control Structures and Functions” is, and where it already appears around us.",
            "Say what the unit is about and name two examples from Liberia."
          ],
          [
            "2",
            "Key ideas, distinctions and the unit table.",
            "Use the key terms and complete the distinction tables."
          ],
          [
            "3",
            "A Liberian example and the paper-first method, worked then written.",
            "Run the paper method and write the algorithm, table or report."
          ],
          [
            "4",
            "Worked problems, pair-debug, the computing fair and the period check.",
            "Solve a worked example, debug a bug, and sit the period check."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Check Yourself"
      },
      {
        "k": "p",
        "t": "Close the notes. (1) Say the unit title and one Liberian example. (2) Give the meaning of three terms without looking. (3) Work the paper method once more, showing every step. (4) Name one bug you would look for. (5) Say who you tell if a message asks for a photograph, a PIN or money. If any of those five stalls, go back to the table of terms and the worked example and run them again with a partner. Do not laugh at a bug — including your own."
      },
      {
        "k": "p",
        "t": "This is original supplementary teaching material for Liberian senior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, function means a named block of code defined with def that performs one job and can be called from elsewhere.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, parameter means the actual value passed to a function when it is called.",
        "a": "False",
        "why": "parameter means a variable named in a function's definition that receives a value when the function is called; the statement describes argument."
      },
      {
        "s": "In this unit, return value means the value a function hands back to the code that called it, using the return statement.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Every conversion, truth table, trace and program in the unit can be worked on paper; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the code or the steps, not in the person."
      },
      {
        "s": "Students should share passwords, PINs or one-time codes so a partner can finish the work.",
        "a": "False",
        "why": "A password, PIN or one-time code is secret. Sharing one is how accounts and mobile-money wallets are emptied."
      },
      {
        "s": "A function is defined once with def and called many times; parameters carry values in and return carries one value out.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "A function that prints its result can be used directly in a calculation by the caller.",
        "a": "False",
        "why": "Printing shows a value but returns None; the caller needs a return statement to receive the value."
      },
      {
        "s": "range(1, 13) produces the integers 1 to 12 inclusive.",
        "a": "True",
        "why": "range stops before the stop value."
      }
    ],
    "classify": {
      "title": "Belongs inside a function / Belongs in the main section",
      "groups": [
        {
          "name": "Belongs inside a function",
          "items": [
            "the if–elif–else that decides a grade",
            "a return statement",
            "a docstring",
            "a local variable for the working total",
            "a parameter such as mark",
            "the formula for the mean"
          ]
        },
        {
          "name": "Belongs in the main section",
          "items": [
            "reading the marks with input()",
            "the for loop over all students",
            "printing the results",
            "calling grade(m)",
            "counting passes",
            "opening the results file"
          ]
        }
      ]
    },
    "diagram": {
      "title": "How a function call works",
      "caption": "Label each part and state what it does in “Python Control Structures and Functions”.",
      "parts": [
        {
          "p": "Call",
          "f": "grade(64) — the argument 64 is supplied"
        },
        {
          "p": "Parameter binding",
          "f": "inside the function, mark = 64"
        },
        {
          "p": "Body",
          "f": "if–elif–else runs with the local value"
        },
        {
          "p": "Return",
          "f": "\"Pass\" is handed back to the caller"
        },
        {
          "p": "Locals discarded",
          "f": "mark and any local variables cease to exist"
        }
      ]
    },
    "experiment": {
      "title": "Function cards — define, call, trace",
      "aim": "To practise the ideas of “Python Control Structures and Functions” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Printed listings, cards and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class test log",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “Function cards — define, call, trace” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A Grade 11 group's results program counts zero passes even though grade() prints 'Pass' for every mark, and they conclude the counting loop is broken. What should happen next?",
        "a": "Trace one call: g = grade(64) prints Pass but returns None, so g != \"Fail\" is compared against None; change print to return inside grade(), let the main section decide what to print, retrace with 49 and 50, and add the rule 'functions return, main prints' to the class chart."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Python Control Structures and Functions”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's program or trace fails. What do you say, and why?",
        "a": "Remind the class that a bug is in the code or the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the exact line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian working life (a bank, a mobile-money agent, a clinic, a radio station, a business, a ministry).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as a bank's database, a mobile-money transaction, a hospital record, a radio station's schedule or a ministry's website."
      },
      {
        "q": "Write a function is_valid_pin(pin) that returns True only if pin is a string of exactly four digits, and a main section that asks up to three times and prints 'Locked' after three failures. Trace it with the inputs 12a4, 123, 4321.",
        "a": "def is_valid_pin(pin): return len(pin) == 4 and pin.isdigit(); main: tries = 0; while tries < 3: pin = input(); if is_valid_pin(pin): print(\"OK\"); break; tries += 1; else: print(\"Locked\") — trace: 12a4 invalid, 123 invalid, 4321 valid → OK."
      },
      {
        "q": "Using a nested loop, write code that prints a 5-row by 3-column seating grid of the form 'Row r Seat s'. How many lines does it print?",
        "a": "for r in range(1, 6): for s in range(1, 4): print(f\"Row {r} Seat {s}\") — 5 × 3 = 15 lines."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “Function cards — define, call, trace” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, squared paper and printed listings",
      "A class computing chart and test log",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's device, kept dry and in sight"
    ],
    "aids": [
      "Word cards — function, parameter, argument",
      "A flowchart or trace table of “Function cards — define, call, trace”",
      "Function cards with docstrings and call slips for boundary tests",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing term and what it means.",
      "Work this week's paper method (a conversion, a truth table, a trace, a query or a design) again with a friend — no device needed.",
      "Find one example of this unit's idea in your community (a bank, a mobile-money kiosk, a clinic, a radio station, a business or a ministry office) and write a paragraph about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written trace, conversion, truth table or query with full working",
      "Pair-debug observed against the class test log",
      "A short written response to the Liberian case scenario"
    ],
    "worked": [
      {
        "q": "for i in range(1, 6): print(i). What is printed?",
        "steps": [
          "1 up to but not including 6."
        ],
        "a": "1 2 3 4 5"
      },
      {
        "q": "for i in range(10, 0, -3): print(i). Output?",
        "steps": [
          "10, 7, 4, 1."
        ],
        "a": "10 7 4 1"
      },
      {
        "q": "In def vat(amount, rate=0.1), which are the parameters, and what is vat(2000)?",
        "steps": [
          "Default rate used."
        ],
        "a": "amount and rate; 200.0"
      },
      {
        "q": "grade(49) and grade(50) for the pass mark 50 — what should each return?",
        "steps": [
          "Boundary."
        ],
        "a": "\"Fail\" and \"Pass\""
      },
      {
        "q": "x = greet(\"Musu\") where greet only prints. What is x?",
        "steps": [
          "No return statement."
        ],
        "a": "None"
      },
      {
        "q": "How many times does the inner body run in for r in range(3): for c in range(4)?",
        "steps": [
          "3 × 4."
        ],
        "a": "12"
      },
      {
        "q": "What is the difference between break and continue?",
        "steps": [
          "Exit vs skip."
        ],
        "a": "break leaves the loop; continue skips to the next pass"
      },
      {
        "q": "average([60, 70, 80]) using sum(values) / len(values)?",
        "steps": [
          "210 / 3."
        ],
        "a": "70.0"
      }
    ]
  },
  {
    "grade": 11,
    "period": "III",
    "sem": "One",
    "icon": "📚",
    "csPlan": true,
    "title": "Lists, Strings and Simple Algorithms",
    "subtitle": "Computer Science · Original senior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Written for classes that may have no computer lab: every conversion, truth table, trace, query and program in the unit can be done on paper, and a shared device extends it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary precisely in speech, writing and examination answers.",
      "Solve the unit's problems on paper — conversions, truth tables, traces, queries, formulas or designs — showing every step of working.",
      "Evaluate a technology choice for its safety, legality, cost and effect on people in Liberia."
    ],
    "objectives": [
      "Define the key terms in “Lists, Strings and Simple Algorithms” precisely and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm, program or procedure connected with this unit, on paper.",
      "Classify examples into the unit's two groups and justify each placement.",
      "Solve a worked example step by step, showing every line of working, and state the answer in a full sentence with its unit or type.",
      "Apply the unit's ideas to a fictional Liberian business, ministry, clinic or school scenario.",
      "Find and correct a bug in a set of steps, a circuit, a query or a program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared test log.",
      "Explain one Liberian example of this unit's idea (mobile money, the ACE submarine cable, a hospital record, a bank, the national examination system or a radio station)."
    ],
    "safeguard": "A senior high computing lesson uses paper traces, truth tables, printed listings and, when one is present, a shared school computer or the teacher's own device. Students never share passwords, PINs or one-time codes, never install software on a school machine without permission, and never photograph, record or post a classmate without consent. A program written in class must never be used to guess a password, send bulk messages or enter another person's account — that is a crime, not a prank. If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "Lists store ordered collections indexed from 0 and support append, insert, remove, len(), slicing and iteration; strings are immutable sequences of characters with methods such as upper(), lower(), split(), strip() and find(). Standard algorithms on lists — traversal, counting, finding the maximum or minimum, linear search and bubble sort — are written with loops and traced by hand.",
    "focus": [
      "Worked demonstration on paper",
      "Pair programming and debugging",
      "Liberian case scenario",
      "Practical and period check"
    ],
    "terms": [
      {
        "t": "list",
        "d": "an ordered collection of values stored under one name, written in square brackets, such as marks = [62, 48, 75]",
        "x": "In this unit, list means an ordered collection of values stored under one name, written in square brackets, such as marks = [62, 48, 75]."
      },
      {
        "t": "index",
        "d": "the position of an item in a list or string, counted from 0",
        "x": "In this unit, index means the position of an item in a list or string, counted from 0."
      },
      {
        "t": "slice",
        "d": "a part of a list or string taken by index range, such as name[0:3] for the first three characters",
        "x": "In this unit, slice means a part of a list or string taken by index range, such as name[0:3] for the first three characters."
      },
      {
        "t": "append()",
        "d": "the list method that adds a value to the end of the list",
        "x": "In this unit, append() means the list method that adds a value to the end of the list."
      },
      {
        "t": "len()",
        "d": "the built-in function that returns the number of items in a list or characters in a string",
        "x": "In this unit, len() means the built-in function that returns the number of items in a list or characters in a string."
      },
      {
        "t": "traversal",
        "d": "visiting every item of a list once, usually with a for loop",
        "x": "In this unit, traversal means visiting every item of a list once, usually with a for loop."
      },
      {
        "t": "string method",
        "d": "a function attached to a string, such as upper(), lower(), strip(), split() or find()",
        "x": "In this unit, string method means a function attached to a string, such as upper(), lower(), strip(), split() or find()."
      },
      {
        "t": "immutable",
        "d": "cannot be changed in place; strings are immutable, so a changed string is a new string",
        "x": "In this unit, immutable means cannot be changed in place; strings are immutable, so a changed string is a new string."
      },
      {
        "t": "linear search",
        "d": "checking each item in turn from the first until the target is found or the list ends",
        "x": "In this unit, linear search means checking each item in turn from the first until the target is found or the list ends."
      },
      {
        "t": "bubble sort",
        "d": "a sorting algorithm that repeatedly passes through the list swapping neighbouring items that are out of order",
        "x": "In this unit, bubble sort means a sorting algorithm that repeatedly passes through the list swapping neighbouring items that are out of order."
      },
      {
        "t": "swap",
        "d": "exchanging the values at two positions, in Python a[j], a[j+1] = a[j+1], a[j]",
        "x": "In this unit, swap means exchanging the values at two positions, in Python a[j], a[j+1] = a[j+1], a[j]."
      },
      {
        "t": "two-dimensional list",
        "d": "a list of lists, used for a table such as marks for several students in several subjects",
        "x": "In this unit, two-dimensional list means a list of lists, used for a table such as marks for several students in several subjects."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “list” in this unit?",
        "a": "an ordered collection of values stored under one name, written in square brackets, such as marks = [62, 48, 75]."
      },
      {
        "q": "What is meant by “index” in this unit?",
        "a": "the position of an item in a list or string, counted from 0."
      },
      {
        "q": "What is meant by “slice” in this unit?",
        "a": "a part of a list or string taken by index range, such as name[0:3] for the first three characters."
      },
      {
        "q": "What is meant by “append()” in this unit?",
        "a": "the list method that adds a value to the end of the list."
      },
      {
        "q": "What is meant by “len()” in this unit?",
        "a": "the built-in function that returns the number of items in a list or characters in a string."
      },
      {
        "q": "What is meant by “traversal” in this unit?",
        "a": "visiting every item of a list once, usually with a for loop."
      },
      {
        "q": "What is meant by “string method” in this unit?",
        "a": "a function attached to a string, such as upper(), lower(), strip(), split() or find()."
      },
      {
        "q": "What is meant by “immutable” in this unit?",
        "a": "cannot be changed in place; strings are immutable, so a changed string is a new string."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A Grade 11 group's order-of-merit program prints the first-placed student as whoever is at marks[1] and misses the top scorer, and they blame the sort."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Lay the sorted cards out with their index labels and point: the first item is at index 0 and the last at len(marks) − 1; correct the index, retrace with a list of three marks, and add 'indexes start at 0' to the class chart beside the bubble sort trace that was, in fact, correct."
      },
      {
        "q": "State this unit idea in your own words: List and string indexes start at 0, so the last item of a list of n values is at index n − 1.",
        "a": "List and string indexes start at 0, so the last item of a list of n values is at index n − 1."
      },
      {
        "q": "State this unit idea in your own words: A linear search checks items one by one from the start until it finds the target or reaches the end.",
        "a": "A linear search checks items one by one from the start until it finds the target or reaches the end."
      },
      {
        "q": "Describe a linear search in two sentences.",
        "a": "Start at the first item and compare each item with the target in turn. Stop when a match is found and report its index, or report not found when the list ends."
      },
      {
        "q": "What does it mean that strings are immutable, and what must a programmer do about it?",
        "a": "A string cannot be changed in place; methods such as upper() return a new string, which must be assigned to a variable to be kept."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Lists, Strings and Simple Algorithms” Is"
      },
      {
        "k": "p",
        "t": "A **list** holds many values under one name, each reached by an **index** that starts at 0; a **string** is a sequence of characters that can be indexed and **sliced** the same way. With a list and a loop a program can **traverse** every value, find the **maximum**, count matches, **search** for an item with a **linear search** and put the values in order with a **bubble sort**. **Methods** such as append(), split() and upper() do common jobs. These are the first named **algorithms** of the course, and each is traced by hand with a small list before it is typed. Groups whose merit list starts at marks[1] and misses the top scorer have an off-by-one error, not a sorting error. Lay the sorted cards out with their index labels and point: the first item is at index 0 and the last at len(marks) − 1; correct the index, retrace with a list of three marks, and add 'indexes start at 0' to the class chart beside the bubble sort trace that was, in fact, correct. List and string indexes start at 0, so the last item of a list of n values is at index n − 1. A linear search checks items one by one from the start until it finds the target or reaches the end."
      },
      {
        "k": "p",
        "t": "Lists store ordered collections indexed from 0 and support append, insert, remove, len(), slicing and iteration; strings are immutable sequences of characters with methods such as upper(), lower(), split(), strip() and find(). Standard algorithms on lists — traversal, counting, finding the maximum or minimum, linear search and bubble sort — are written with loops and traced by hand."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: List and string indexes start at 0, so the last item of a list of n values is at index n − 1. A linear search checks items one by one from the start until it finds the target or reaches the end."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Ideas in This Unit"
      },
      {
        "k": "p",
        "t": "Each idea below is a working definition for Grade 11. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
      },
      {
        "k": "table",
        "head": [
          "Term",
          "What it means",
          "A sentence that uses it"
        ],
        "rows": [
          [
            "list",
            "an ordered collection of values stored under one name, written in square brackets, such as marks = [62, 48, 75]",
            "In this unit, list means an ordered collection of values stored under one name, written in square brackets, such as marks = [62, 48, 75]."
          ],
          [
            "index",
            "the position of an item in a list or string, counted from 0",
            "In this unit, index means the position of an item in a list or string, counted from 0."
          ],
          [
            "slice",
            "a part of a list or string taken by index range, such as name[0:3] for the first three characters",
            "In this unit, slice means a part of a list or string taken by index range, such as name[0:3] for the first three characters."
          ],
          [
            "append()",
            "the list method that adds a value to the end of the list",
            "In this unit, append() means the list method that adds a value to the end of the list."
          ],
          [
            "len()",
            "the built-in function that returns the number of items in a list or characters in a string",
            "In this unit, len() means the built-in function that returns the number of items in a list or characters in a string."
          ],
          [
            "traversal",
            "visiting every item of a list once, usually with a for loop",
            "In this unit, traversal means visiting every item of a list once, usually with a for loop."
          ],
          [
            "string method",
            "a function attached to a string, such as upper(), lower(), strip(), split() or find()",
            "In this unit, string method means a function attached to a string, such as upper(), lower(), strip(), split() or find()."
          ],
          [
            "immutable",
            "cannot be changed in place; strings are immutable, so a changed string is a new string",
            "In this unit, immutable means cannot be changed in place; strings are immutable, so a changed string is a new string."
          ],
          [
            "linear search",
            "checking each item in turn from the first until the target is found or the list ends",
            "In this unit, linear search means checking each item in turn from the first until the target is found or the list ends."
          ],
          [
            "bubble sort",
            "a sorting algorithm that repeatedly passes through the list swapping neighbouring items that are out of order",
            "In this unit, bubble sort means a sorting algorithm that repeatedly passes through the list swapping neighbouring items that are out of order."
          ],
          [
            "swap",
            "exchanging the values at two positions, in Python a[j], a[j+1] = a[j+1], a[j]",
            "In this unit, swap means exchanging the values at two positions, in Python a[j], a[j+1] = a[j+1], a[j]."
          ],
          [
            "two-dimensional list",
            "a list of lists, used for a table such as marks for several students in several subjects",
            "In this unit, two-dimensional list means a list of lists, used for a table such as marks for several students in several subjects."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Tell Them Apart"
      },
      {
        "k": "bul",
        "items": [
          "**marks[0]** — the first item; **marks[-1]** — the last; **marks[1:3]** — items at 1 and 2.",
          "**append()** changes the list; **upper()** returns a new string — lists are mutable, strings are not.",
          "**len(marks)** counts items; **sum(marks)** adds them; **max(marks)** finds the largest — but you must be able to write each with a loop.",
          "**Linear search** works on any list; **bubble sort** puts a list in order, one pass at a time.",
          "**A pass** of bubble sort compares neighbours from left to right; after pass k the largest k items are in place."
        ]
      },
      {
        "k": "table",
        "head": [
          "Code (marks = [62, 48, 75, 50])",
          "Result",
          "Why"
        ],
        "rows": [
          [
            "marks[0]",
            "62",
            "Index 0 is the first item."
          ],
          [
            "marks[-1]",
            "50",
            "Negative indexes count from the end."
          ],
          [
            "marks[1:3]",
            "[48, 75]",
            "From index 1 up to but not including 3."
          ],
          [
            "len(marks)",
            "4",
            "Four items."
          ],
          [
            "marks.append(90)",
            "[62, 48, 75, 50, 90]",
            "Adds to the end."
          ],
          [
            "\"Musu Kollie\".split()",
            "[\"Musu\", \"Kollie\"]",
            "Splits on spaces into a list."
          ]
        ]
      },
      {
        "k": "p",
        "t": "A second table for this unit, so the distinction can be practised twice:"
      },
      {
        "k": "table",
        "head": [
          "Algorithm",
          "Loop shape",
          "Trace on [5, 3, 8, 1]"
        ],
        "rows": [
          [
            "Find the maximum",
            "big = a[0]; for x in a: if x > big: big = x",
            "big: 5, 5, 8, 8 → 8"
          ],
          [
            "Count values ≥ 5",
            "n = 0; for x in a: if x >= 5: n += 1",
            "n: 1, 1, 2, 2 → 2"
          ],
          [
            "Total with a loop",
            "t = 0; for x in a: t += x",
            "t: 5, 8, 16, 17 → 17"
          ],
          [
            "Linear search for 8",
            "for i in range(len(a)): if a[i] == 8: return i",
            "i = 0 no, 1 no, 2 yes → 2"
          ],
          [
            "Bubble sort, pass 1",
            "Compare neighbours, swap if out of order",
            "[3, 5, 1, 8] — 8 has bubbled to the end"
          ],
          [
            "Bubble sort, pass 2",
            "Repeat on the first three",
            "[3, 1, 5, 8]; pass 3 → [1, 3, 5, 8]"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why This Matters in Liberia"
      },
      {
        "k": "p",
        "t": "A class register is a list; a mark sheet is a two-dimensional list; a WAEC candidate's full name is a string to be split into surname and first name; the order of merit is a sort; 'is this student on the list?' is a search. Every Liberian school office does these by hand every term, and a Grade 11 student who can trace a bubble sort on five marks understands exactly what the office software does and why it is slow on ten thousand names — the question Grade 12 answers with efficiency. The tracing needs a pencil, a small list and patience."
      },
      {
        "k": "p",
        "t": "This course is an **original teaching resource**, not an official syllabus transcription. A school without a computer lab is not a school without Computer Science. Teachers should compare the unit with the school's approved scheme of work before use."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Paper-First Method"
      },
      {
        "k": "p",
        "t": "The class investigation is **“Index cards, a search and a bubble sort by hand”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Each pair writes five marks on five cards and lays them in a row with index labels 0 to 4 beneath; they practise marks[0], marks[-1] and marks[1:3] by pointing.",
          "They perform a linear search for a given mark, counting comparisons, then for a mark that is not there, and record both counts.",
          "They bubble sort the cards: compare neighbours left to right, physically swap, and write the row after each pass until a pass makes no swaps; they count the passes and the swaps.",
          "They take a full name on a card, split it into words, and write the surname in upper case and its length, using the string methods.",
          "If Python is available, one pair codes the search and the sort as functions and runs them on the same five values while the others compare the intermediate lists; otherwise the card traces are the finished work."
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Worked Example in Prose"
      },
      {
        "k": "p",
        "t": "**Problem.** Bubble sort the list [64, 23, 91, 50] into ascending order, showing the list after every pass and counting the swaps. Then state the index of 91 in the sorted list, and write the code that finds it with a linear search."
      },
      {
        "k": "num",
        "items": [
          "Pass 1: 64 > 23 swap → [23, 64, 91, 50]; 64 < 91 no swap; 91 > 50 swap → [23, 64, 50, 91]. 2 swaps; 91 in place.",
          "Pass 2: 23 < 64 no; 64 > 50 swap → [23, 50, 64, 91]. 1 swap; 64 in place.",
          "Pass 3: 23 < 50 no swap — a pass with no swaps, so the list is sorted: [23, 50, 64, 91]. Total 3 swaps.",
          "91 is at index 3 (the last of four items, n − 1).",
          "Linear search: def search(a, target): for i in range(len(a)): if a[i] == target: return i; return -1 — search([23, 50, 64, 91], 91) checks indexes 0, 1, 2, 3 and returns 3."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** [23, 64, 50, 91] → [23, 50, 64, 91] → no swaps; 3 swaps in total; 91 is at index 3, found by a linear search after four comparisons."
      },
      {
        "k": "p",
        "t": "Notice the method: name what you know, run one step at a time, write the result of each step, then state the answer in a full sentence. That is the same habit a Physics class uses on a numerical problem; here the 'calculation' is a trace, a conversion, a truth table, a formula, a query or a debug."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Common Mistakes"
      },
      {
        "k": "bul",
        "items": [
          "Treating the first item as index 1, so the last item is 'off by one'.",
          "Writing name.upper() and expecting name itself to change; strings are immutable, so assign the result.",
          "Stopping a bubble sort after one pass because the largest item reached the end.",
          "Returning from a linear search after the first comparison whether or not it matched."
        ]
      },
      {
        "k": "p",
        "t": "The class rule still holds when a mistake appears: **we try, we debug, we do not laugh at a mistake.** A bug is in the steps, not in the person."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Safety, Ethics and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN or a one-time code, and nobody installs software on a school machine without permission. A program written in this course is never pointed at another person's account, phone or wallet: guessing a password, sending bulk messages or reading someone's data without consent is a crime under Liberian law, not a prank. Copying a program from a classmate and submitting it as your own is plagiarism. Pair work shares the thinking, not the credit for work you did not do."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered (screenshots, not deletions), and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Pair Roles: Driver and Navigator"
      },
      {
        "k": "p",
        "t": "A computing pair has two jobs that swap. The **driver** writes or works the next step. The **navigator** reads the algorithm or the listing, watches for a bug, and says 'stop' before a wrong line is copied. After five minutes they swap, so both practise both jobs. A third student may sit as **checker** and tick each step on the trace table. Taking turns is a computing skill, not a punishment for having only one computer — or none."
      },
      {
        "k": "table",
        "head": [
          "Role",
          "What this person does",
          "What this person does not do"
        ],
        "rows": [
          [
            "Driver",
            "Works or writes the current step",
            "Does not skip the navigator's 'stop'"
          ],
          [
            "Navigator",
            "Reads the steps and watches for bugs",
            "Does not grab the pencil, the keyboard or the mouse"
          ],
          [
            "Checker",
            "Ticks each step and records one bug on the class chart",
            "Does not laugh at a mistake"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Fictional Liberian Scenario"
      },
      {
        "k": "p",
        "t": "A Grade 11 group's order-of-merit program prints the first-placed student as whoever is at marks[1] and misses the top scorer, and they blame the sort."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Lay the sorted cards out with their index labels and point: the first item is at index 0 and the last at len(marks) − 1; correct the index, retrace with a list of three marks, and add 'indexes start at 0' to the class chart beside the bubble sort trace that was, in fact, correct."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Worked Computing Reasoning"
      },
      {
        "k": "p",
        "t": "Lay the sorted cards out with their index labels and point: the first item is at index 0 and the last at len(marks) − 1; correct the index, retrace with a list of three marks, and add 'indexes start at 0' to the class chart beside the bubble sort trace that was, in fact, correct."
      },
      {
        "k": "p",
        "t": "When you answer a scenario question, use this three-part shape: (1) name the computing idea (algorithm, data, network, security, binary, database, …); (2) say what a person should do, in order; (3) say why, with a unit term in the reason. Vague good intentions without a term do not yet show that the unit has been learned."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Practise It on Paper"
      },
      {
        "k": "p",
        "t": "The investigation **“Index cards, a search and a bubble sort by hand”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
      },
      {
        "k": "table",
        "head": [
          "Paper object",
          "What it stands for",
          "What we write afterwards"
        ],
        "rows": [
          [
            "Index cards",
            "A list in memory",
            "The list after each operation, with indexes"
          ],
          [
            "Pass sheet",
            "One bubble-sort pass",
            "The list after every pass and the swap count"
          ],
          [
            "Name card",
            "A string",
            "split, upper and slice results"
          ],
          [
            "Class chart",
            "List bugs the class found (off by one, unassigned upper())",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Zero Is the First"
      },
      {
        "k": "p",
        "t": "Python counts from 0 because an index is an offset from the start: the first item is 0 steps away. marks[len(marks)] does not exist; marks[len(marks) − 1] is the last, and marks[-1] is a safer way to say it. Point at the cards until it is automatic."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why Bubble Sort First"
      },
      {
        "k": "p",
        "t": "Bubble sort is slow but transparent: every step is a comparison of two neighbours and possibly a swap, which can be done with cards by a whole class. It teaches passes, swaps and the 'no swaps means sorted' stop rule. Grade 12 asks why it is slow and what to use instead."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Strings Are Sequences Too"
      },
      {
        "k": "p",
        "t": "\"Kollie\"[0] is \"K\"; \"Kollie\"[1:4] is \"oll\"; len(\"Kollie\") is 6. split() turns a full name into a list of words; strip() removes stray spaces from typed input; upper() and lower() make comparisons fair. A register cleaned with these three methods has fewer duplicate students."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Table Is a List of Lists"
      },
      {
        "k": "p",
        "t": "grid[1][2] is row 1, column 2 — the third mark of the second student. A nested loop traverses it: for row in grid: for mark in row. The class mark sheet, a seating plan and a pixel image are all two-dimensional lists."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "What a Period Test Asks"
      },
      {
        "k": "p",
        "t": "A fair period test on “Lists, Strings and Simple Algorithms” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit precisely and use each in a sentence.",
          "Solve or trace a problem connected with “Lists, Strings and Simple Algorithms” on paper, showing every line of working.",
          "Classify four examples using “List operations / String operations” and justify one placement.",
          "Find and correct a bug in a set of steps, a query or a program, and say what the bug was."
        ]
      },
      {
        "k": "p",
        "t": "Show every step of a tracing or conversion question, the way a Physics script shows working. A bare answer with no steps cannot be given full credit, because the teacher cannot see the method you ran."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Four Weeks of Study"
      },
      {
        "k": "p",
        "t": "A 4-week unit on “Lists, Strings and Simple Algorithms” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
      },
      {
        "k": "table",
        "head": [
          "Week",
          "Study focus",
          "What students leave able to do"
        ],
        "rows": [
          [
            "1",
            "What “Lists, Strings and Simple Algorithms” is, and where it already appears around us.",
            "Say what the unit is about and name two examples from Liberia."
          ],
          [
            "2",
            "Key ideas, distinctions and the unit table.",
            "Use the key terms and complete the distinction tables."
          ],
          [
            "3",
            "A Liberian example and the paper-first method, worked then written.",
            "Run the paper method and write the algorithm, table or report."
          ],
          [
            "4",
            "Worked problems, pair-debug, the computing fair and the period check.",
            "Solve a worked example, debug a bug, and sit the period check."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Check Yourself"
      },
      {
        "k": "p",
        "t": "Close the notes. (1) Say the unit title and one Liberian example. (2) Give the meaning of three terms without looking. (3) Work the paper method once more, showing every step. (4) Name one bug you would look for. (5) Say who you tell if a message asks for a photograph, a PIN or money. If any of those five stalls, go back to the table of terms and the worked example and run them again with a partner. Do not laugh at a bug — including your own."
      },
      {
        "k": "p",
        "t": "This is original supplementary teaching material for Liberian senior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, list means an ordered collection of values stored under one name, written in square brackets, such as marks = [62, 48, 75].",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, index means a part of a list or string taken by index range, such as name[0:3] for the first three characters.",
        "a": "False",
        "why": "index means the position of an item in a list or string, counted from 0; the statement describes slice."
      },
      {
        "s": "In this unit, append() means the list method that adds a value to the end of the list.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Every conversion, truth table, trace and program in the unit can be worked on paper; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the code or the steps, not in the person."
      },
      {
        "s": "Students should share passwords, PINs or one-time codes so a partner can finish the work.",
        "a": "False",
        "why": "A password, PIN or one-time code is secret. Sharing one is how accounts and mobile-money wallets are emptied."
      },
      {
        "s": "List and string indexes start at 0, so the last item of a list of n values is at index n − 1.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "In Python, the first item of a list is at index 1.",
        "a": "False",
        "why": "Indexes start at 0; the first item is at index 0."
      },
      {
        "s": "A bubble sort can stop as soon as a complete pass makes no swaps.",
        "a": "True",
        "why": "No swaps means every neighbour is in order, so the whole list is sorted."
      }
    ],
    "classify": {
      "title": "List operations / String operations",
      "groups": [
        {
          "name": "List operations",
          "items": [
            "marks.append(90)",
            "marks[0]",
            "len(marks)",
            "marks[1:3]",
            "marks.insert(0, 55)",
            "for x in marks"
          ]
        },
        {
          "name": "String operations",
          "items": [
            "name.upper()",
            "name.split()",
            "name.strip()",
            "name[0:3]",
            "name.find(\"Ko\")",
            "len(\"Liberia\")"
          ]
        }
      ]
    },
    "diagram": {
      "title": "A list with its indexes and a bubble-sort pass",
      "caption": "Label each part and state what it does in “Lists, Strings and Simple Algorithms”.",
      "parts": [
        {
          "p": "Index labels",
          "f": "0, 1, 2, 3 beneath the items; −1 is the last"
        },
        {
          "p": "Neighbour comparison",
          "f": "a[j] and a[j+1] compared left to right"
        },
        {
          "p": "Swap",
          "f": "a[j], a[j+1] = a[j+1], a[j] when out of order"
        },
        {
          "p": "End of pass",
          "f": "the largest unsorted item has bubbled to its place"
        },
        {
          "p": "Stop rule",
          "f": "a pass with no swaps means the list is sorted"
        }
      ]
    },
    "experiment": {
      "title": "Index cards, a search and a bubble sort by hand",
      "aim": "To practise the ideas of “Lists, Strings and Simple Algorithms” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Printed listings, cards and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class test log",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “Index cards, a search and a bubble sort by hand” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A Grade 11 group's order-of-merit program prints the first-placed student as whoever is at marks[1] and misses the top scorer, and they blame the sort. What should happen next?",
        "a": "Lay the sorted cards out with their index labels and point: the first item is at index 0 and the last at len(marks) − 1; correct the index, retrace with a list of three marks, and add 'indexes start at 0' to the class chart beside the bubble sort trace that was, in fact, correct."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Lists, Strings and Simple Algorithms”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's program or trace fails. What do you say, and why?",
        "a": "Remind the class that a bug is in the code or the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the exact line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian working life (a bank, a mobile-money agent, a clinic, a radio station, a business, a ministry).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as a bank's database, a mobile-money transaction, a hospital record, a radio station's schedule or a ministry's website."
      },
      {
        "q": "Write a function that takes a list of full names and returns a list of surnames in upper case, and trace it on [\"Musu Kollie\", \"James Doe\"].",
        "a": "def surnames(names): out = []; for n in names: out.append(n.split()[-1].upper()); return out — gives [\"KOLLIE\", \"DOE\"]."
      },
      {
        "q": "A list holds 40 marks. How many comparisons does a linear search make in the worst case, and how many passes might a bubble sort need? What does this suggest for 10,000 names?",
        "a": "Up to 40 comparisons; up to 39 passes (about 780 comparisons); for 10,000 names the work grows to about 50 million comparisons, so a better algorithm is needed — the subject of Grade 12."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “Index cards, a search and a bubble sort by hand” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, squared paper and printed listings",
      "A class computing chart and test log",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's device, kept dry and in sight"
    ],
    "aids": [
      "Word cards — list, index, slice",
      "A flowchart or trace table of “Index cards, a search and a bubble sort by hand”",
      "Index cards with position labels and a bubble-sort pass sheet",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing term and what it means.",
      "Work this week's paper method (a conversion, a truth table, a trace, a query or a design) again with a friend — no device needed.",
      "Find one example of this unit's idea in your community (a bank, a mobile-money kiosk, a clinic, a radio station, a business or a ministry office) and write a paragraph about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written trace, conversion, truth table or query with full working",
      "Pair-debug observed against the class test log",
      "A short written response to the Liberian case scenario"
    ],
    "worked": [
      {
        "q": "marks = [62, 48, 75, 50]. What are marks[0], marks[-1] and marks[1:3]?",
        "steps": [
          "First, last, slice."
        ],
        "a": "62, 50, [48, 75]"
      },
      {
        "q": "How many items does a list have if its last index is 7?",
        "steps": [
          "Indexes 0–7."
        ],
        "a": "8"
      },
      {
        "q": "Find the maximum of [5, 3, 8, 1] by a loop, showing big after each item.",
        "steps": [
          "5, 5, 8, 8."
        ],
        "a": "8"
      },
      {
        "q": "Linear search for 8 in [5, 3, 8, 1]: how many comparisons and which index?",
        "steps": [
          "Check 0, 1, 2."
        ],
        "a": "3 comparisons; index 2"
      },
      {
        "q": "Bubble sort [5, 3, 8, 1]: list after pass 1?",
        "steps": [
          "Swap 5,3; 8 stays; swap 8,1."
        ],
        "a": "[3, 5, 1, 8]"
      },
      {
        "q": "\"Musu Kollie\".split()[-1].upper()?",
        "steps": [
          "Last word, upper case."
        ],
        "a": "\"KOLLIE\""
      },
      {
        "q": "name = \"kollie\"; name.upper(); print(name). Output?",
        "steps": [
          "Strings are immutable; result not assigned."
        ],
        "a": "kollie"
      },
      {
        "q": "grid = [[60, 70], [80, 90]]. What is grid[1][0]?",
        "steps": [
          "Row 1, column 0."
        ],
        "a": "80"
      }
    ]
  },
  {
    "grade": 11,
    "period": "IV",
    "sem": "Two",
    "icon": "🧾",
    "csPlan": true,
    "title": "Relational Databases and SQL",
    "subtitle": "Computer Science · Original senior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Written for classes that may have no computer lab: every conversion, truth table, trace, query and program in the unit can be done on paper, and a shared device extends it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary precisely in speech, writing and examination answers.",
      "Solve the unit's problems on paper — conversions, truth tables, traces, queries, formulas or designs — showing every step of working.",
      "Evaluate a technology choice for its safety, legality, cost and effect on people in Liberia."
    ],
    "objectives": [
      "Define the key terms in “Relational Databases and SQL” precisely and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm, program or procedure connected with this unit, on paper.",
      "Classify examples into the unit's two groups and justify each placement.",
      "Solve a worked example step by step, showing every line of working, and state the answer in a full sentence with its unit or type.",
      "Apply the unit's ideas to a fictional Liberian business, ministry, clinic or school scenario.",
      "Find and correct a bug in a set of steps, a circuit, a query or a program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared test log.",
      "Explain one Liberian example of this unit's idea (mobile money, the ACE submarine cable, a hospital record, a bank, the national examination system or a radio station)."
    ],
    "safeguard": "A senior high computing lesson uses paper traces, truth tables, printed listings and, when one is present, a shared school computer or the teacher's own device. Students never share passwords, PINs or one-time codes, never install software on a school machine without permission, and never photograph, record or post a classmate without consent. A program written in class must never be used to guess a password, send bulk messages or enter another person's account — that is a crime, not a prank. If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "A relational database stores data in linked tables: each table has a primary key and relationships are made with foreign keys (one-to-many, many-to-many via a link table). Normalisation removes repeated data. SQL retrieves data with SELECT … FROM … WHERE … ORDER BY, joins tables with JOIN … ON, summarises with COUNT, SUM and AVG, and changes data with INSERT, UPDATE and DELETE. Queries are checked by hand on sample tables.",
    "focus": [
      "Worked demonstration on paper",
      "Pair programming and debugging",
      "Liberian case scenario",
      "Practical and period check"
    ],
    "terms": [
      {
        "t": "relational database",
        "d": "a database of several tables linked by keys so that each fact is stored once",
        "x": "In this unit, relational database means a database of several tables linked by keys so that each fact is stored once."
      },
      {
        "t": "primary key",
        "d": "the field that uniquely identifies each record in its own table",
        "x": "In this unit, primary key means the field that uniquely identifies each record in its own table."
      },
      {
        "t": "foreign key",
        "d": "a field in one table that holds the primary key of a record in another table, creating a link",
        "x": "In this unit, foreign key means a field in one table that holds the primary key of a record in another table, creating a link."
      },
      {
        "t": "relationship",
        "d": "the link between two tables, usually one-to-many, such as one student to many payments",
        "x": "In this unit, relationship means the link between two tables, usually one-to-many, such as one student to many payments."
      },
      {
        "t": "normalisation",
        "d": "designing tables so that data is not repeated and each fact is stored in one place",
        "x": "In this unit, normalisation means designing tables so that data is not repeated and each fact is stored in one place."
      },
      {
        "t": "SQL",
        "d": "Structured Query Language, the standard language for defining, querying and changing relational databases",
        "x": "In this unit, SQL means Structured Query Language, the standard language for defining, querying and changing relational databases."
      },
      {
        "t": "SELECT",
        "d": "the SQL statement that retrieves chosen columns from one or more tables",
        "x": "In this unit, SELECT means the SQL statement that retrieves chosen columns from one or more tables."
      },
      {
        "t": "WHERE",
        "d": "the SQL clause that keeps only the rows that satisfy a condition",
        "x": "In this unit, WHERE means the SQL clause that keeps only the rows that satisfy a condition."
      },
      {
        "t": "ORDER BY",
        "d": "the SQL clause that sorts the result by one or more columns, ascending or descending",
        "x": "In this unit, ORDER BY means the SQL clause that sorts the result by one or more columns, ascending or descending."
      },
      {
        "t": "JOIN",
        "d": "the SQL operation that combines rows from two tables where their key fields match",
        "x": "In this unit, JOIN means the SQL operation that combines rows from two tables where their key fields match."
      },
      {
        "t": "aggregate function",
        "d": "an SQL function that summarises many rows into one value, such as COUNT, SUM, AVG, MAX and MIN",
        "x": "In this unit, aggregate function means an SQL function that summarises many rows into one value, such as COUNT, SUM, AVG, MAX and MIN."
      },
      {
        "t": "data redundancy",
        "d": "the same data stored in more than one place, which wastes space and leads to inconsistencies",
        "x": "In this unit, data redundancy means the same data stored in more than one place, which wastes space and leads to inconsistencies."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “relational database” in this unit?",
        "a": "a database of several tables linked by keys so that each fact is stored once."
      },
      {
        "q": "What is meant by “primary key” in this unit?",
        "a": "the field that uniquely identifies each record in its own table."
      },
      {
        "q": "What is meant by “foreign key” in this unit?",
        "a": "a field in one table that holds the primary key of a record in another table, creating a link."
      },
      {
        "q": "What is meant by “relationship” in this unit?",
        "a": "the link between two tables, usually one-to-many, such as one student to many payments."
      },
      {
        "q": "What is meant by “normalisation” in this unit?",
        "a": "designing tables so that data is not repeated and each fact is stored in one place."
      },
      {
        "q": "What is meant by “SQL” in this unit?",
        "a": "Structured Query Language, the standard language for defining, querying and changing relational databases."
      },
      {
        "q": "What is meant by “SELECT” in this unit?",
        "a": "the SQL statement that retrieves chosen columns from one or more tables."
      },
      {
        "q": "What is meant by “WHERE” in this unit?",
        "a": "the SQL clause that keeps only the rows that satisfy a condition."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A school office runs UPDATE Student SET Class = '11C' to move one student and finds the next morning that every student in the school is in 11C."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Restore last night's backup, then adopt the rule: write the SELECT with the same WHERE first, check that it returns exactly the rows you mean, and only then change SELECT to UPDATE or DELETE — and never run a data-changing statement on the live database without a backup taken that day."
      },
      {
        "q": "State this unit idea in your own words: A foreign key in one table holds the primary key of a record in another table, and that is how tables are linked.",
        "a": "A foreign key in one table holds the primary key of a record in another table, and that is how tables are linked."
      },
      {
        "q": "State this unit idea in your own words: SELECT chooses the columns, FROM names the table, WHERE filters the rows and ORDER BY sorts the result.",
        "a": "SELECT chooses the columns, FROM names the table, WHERE filters the rows and ORDER BY sorts the result."
      },
      {
        "q": "What is normalisation and why is it done?",
        "a": "Designing tables so each fact is stored once and linked by keys; it removes redundancy, saves space and prevents inconsistent copies."
      },
      {
        "q": "In what order should a careful person run a data-changing SQL statement?",
        "a": "Take a backup; test the WHERE with a SELECT; run the UPDATE or DELETE; check the number of rows affected."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Relational Databases and SQL” Is"
      },
      {
        "k": "p",
        "t": "Grade 9 built one table; Grade 11 builds a **relational database** of several tables linked by keys. A **primary key** identifies a record in its own table; a **foreign key** in another table points to it, making a **relationship** such as one student to many payments. **Normalisation** removes repeated data so a fact is stored once. **SQL** is the language that asks questions: **SELECT** columns **FROM** a table **WHERE** a condition, **ORDER BY** a field, and **JOIN** two tables on their keys; **INSERT**, **UPDATE** and **DELETE** change the data. Every query is written and checked by hand against small tables. Offices that run UPDATE without a WHERE clause and move every student into one class have learned the most expensive lesson in SQL. Restore last night's backup, then adopt the rule: write the SELECT with the same WHERE first, check that it returns exactly the rows you mean, and only then change SELECT to UPDATE or DELETE — and never run a data-changing statement on the live database without a backup taken that day. A foreign key in one table holds the primary key of a record in another table, and that is how tables are linked. SELECT chooses the columns, FROM names the table, WHERE filters the rows and ORDER BY sorts the result."
      },
      {
        "k": "p",
        "t": "A relational database stores data in linked tables: each table has a primary key and relationships are made with foreign keys (one-to-many, many-to-many via a link table). Normalisation removes repeated data. SQL retrieves data with SELECT … FROM … WHERE … ORDER BY, joins tables with JOIN … ON, summarises with COUNT, SUM and AVG, and changes data with INSERT, UPDATE and DELETE. Queries are checked by hand on sample tables."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: A foreign key in one table holds the primary key of a record in another table, and that is how tables are linked. SELECT chooses the columns, FROM names the table, WHERE filters the rows and ORDER BY sorts the result."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Ideas in This Unit"
      },
      {
        "k": "p",
        "t": "Each idea below is a working definition for Grade 11. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
      },
      {
        "k": "table",
        "head": [
          "Term",
          "What it means",
          "A sentence that uses it"
        ],
        "rows": [
          [
            "relational database",
            "a database of several tables linked by keys so that each fact is stored once",
            "In this unit, relational database means a database of several tables linked by keys so that each fact is stored once."
          ],
          [
            "primary key",
            "the field that uniquely identifies each record in its own table",
            "In this unit, primary key means the field that uniquely identifies each record in its own table."
          ],
          [
            "foreign key",
            "a field in one table that holds the primary key of a record in another table, creating a link",
            "In this unit, foreign key means a field in one table that holds the primary key of a record in another table, creating a link."
          ],
          [
            "relationship",
            "the link between two tables, usually one-to-many, such as one student to many payments",
            "In this unit, relationship means the link between two tables, usually one-to-many, such as one student to many payments."
          ],
          [
            "normalisation",
            "designing tables so that data is not repeated and each fact is stored in one place",
            "In this unit, normalisation means designing tables so that data is not repeated and each fact is stored in one place."
          ],
          [
            "SQL",
            "Structured Query Language, the standard language for defining, querying and changing relational databases",
            "In this unit, SQL means Structured Query Language, the standard language for defining, querying and changing relational databases."
          ],
          [
            "SELECT",
            "the SQL statement that retrieves chosen columns from one or more tables",
            "In this unit, SELECT means the SQL statement that retrieves chosen columns from one or more tables."
          ],
          [
            "WHERE",
            "the SQL clause that keeps only the rows that satisfy a condition",
            "In this unit, WHERE means the SQL clause that keeps only the rows that satisfy a condition."
          ],
          [
            "ORDER BY",
            "the SQL clause that sorts the result by one or more columns, ascending or descending",
            "In this unit, ORDER BY means the SQL clause that sorts the result by one or more columns, ascending or descending."
          ],
          [
            "JOIN",
            "the SQL operation that combines rows from two tables where their key fields match",
            "In this unit, JOIN means the SQL operation that combines rows from two tables where their key fields match."
          ],
          [
            "aggregate function",
            "an SQL function that summarises many rows into one value, such as COUNT, SUM, AVG, MAX and MIN",
            "In this unit, aggregate function means an SQL function that summarises many rows into one value, such as COUNT, SUM, AVG, MAX and MIN."
          ],
          [
            "data redundancy",
            "the same data stored in more than one place, which wastes space and leads to inconsistencies",
            "In this unit, data redundancy means the same data stored in more than one place, which wastes space and leads to inconsistencies."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Tell Them Apart"
      },
      {
        "k": "bul",
        "items": [
          "**Primary key** — unique in its own table; **foreign key** — repeats freely, points to another table's primary key.",
          "**One-to-many** — one student, many payments; **many-to-many** — students and subjects, needing a link table.",
          "**SELECT** reads; **INSERT**, **UPDATE**, **DELETE** write — and a missing WHERE on UPDATE or DELETE changes every row.",
          "**WHERE** filters rows before grouping; **ORDER BY** sorts the final result.",
          "**COUNT** counts rows; **SUM(Amount)** adds a column; **AVG** averages it."
        ]
      },
      {
        "k": "table",
        "head": [
          "SQL",
          "Meaning",
          "Result on the school tables"
        ],
        "rows": [
          [
            "SELECT Surname, Class FROM Student;",
            "Two columns for every student",
            "The whole register, two columns"
          ],
          [
            "SELECT * FROM Student WHERE Class = '11B';",
            "All columns, 11B only",
            "The 11B records"
          ],
          [
            "SELECT Surname FROM Student ORDER BY Surname;",
            "Surnames alphabetically",
            "Bility, Doe, Kollie …"
          ],
          [
            "SELECT COUNT(*) FROM Payment WHERE Amount >= 5000;",
            "How many payments of 5,000 or more",
            "One number"
          ],
          [
            "SELECT StudentID, SUM(Amount) FROM Payment GROUP BY StudentID;",
            "Total paid per student",
            "One row per student"
          ],
          [
            "SELECT Surname, Amount FROM Student JOIN Payment ON Student.StudentID = Payment.StudentID;",
            "Each payment with the payer's surname",
            "One row per payment"
          ]
        ]
      },
      {
        "k": "p",
        "t": "A second table for this unit, so the distinction can be practised twice:"
      },
      {
        "k": "table",
        "head": [
          "Statement",
          "Effect",
          "Danger"
        ],
        "rows": [
          [
            "INSERT INTO Payment (PaymentID, StudentID, Amount, PaidOn) VALUES (501, 'S017', 5000, '2026-03-12');",
            "Adds one payment",
            "A StudentID that does not exist breaks the link"
          ],
          [
            "UPDATE Student SET Class = '11C' WHERE StudentID = 'S017';",
            "Moves one student",
            "Without WHERE, every student moves"
          ],
          [
            "DELETE FROM Payment WHERE PaymentID = 501;",
            "Removes one payment",
            "Without WHERE, every payment is deleted"
          ],
          [
            "SELECT … WHERE Amount > 5000",
            "Strictly more than 5,000",
            "Confusing > with >= at the boundary"
          ],
          [
            "ORDER BY Amount DESC",
            "Largest first",
            "Forgetting DESC gives smallest first"
          ],
          [
            "JOIN without ON",
            "Every row paired with every row",
            "A huge, meaningless result"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why This Matters in Liberia"
      },
      {
        "k": "p",
        "t": "The school's register and fee ledger, a clinic's patients and visits, a mobile-money provider's accounts and transactions, the national examination council's candidates and results — each is at least two tables joined by a key, and each is questioned in SQL by someone in Liberia every working day. A Grade 11 student who can design Student and Payment tables, choose the keys, and write SELECT Surname, SUM(Amount) … JOIN … GROUP BY on paper can walk into a Monrovia office and be useful on the first morning. Small sample tables on paper are the whole laboratory."
      },
      {
        "k": "p",
        "t": "This course is an **original teaching resource**, not an official syllabus transcription. A school without a computer lab is not a school without Computer Science. Teachers should compare the unit with the school's approved scheme of work before use."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Paper-First Method"
      },
      {
        "k": "p",
        "t": "The class investigation is **“Two paper tables and a query desk”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Pairs draw a Student table (StudentID, Surname, FirstName, Class) with five rows and a Payment table (PaymentID, StudentID, Amount, PaidOn) with eight rows, some students having several payments and one having none.",
          "They mark the primary key of each table and the foreign key in Payment, and draw the one-to-many line between them.",
          "The navigator hands over an SQL query on a slip; the driver evaluates it by hand — filtering rows, joining on the key, summing per student, sorting — and writes the result table.",
          "They write three queries the office needs (who owes fees, total collected this month, 11B alphabetically) and one INSERT, one UPDATE and one DELETE, each with a WHERE, and predict each effect.",
          "If a database program or an online SQL sandbox is available, one pair types the tables and queries and compares every result with the paper; otherwise the paper results are the finished work."
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Worked Example in Prose"
      },
      {
        "k": "p",
        "t": "**Problem.** Student(StudentID, Surname, Class) holds S017 Kollie 11B, S018 Doe 11B, S019 Bility 11A. Payment(PaymentID, StudentID, Amount) holds 501 S017 5000, 502 S017 3000, 503 S019 8000. The term fee is 8,000. Write SQL to list each 11B student's surname with the total paid, and evaluate it by hand. Then say which student has paid nothing and why a simple JOIN would miss them."
      },
      {
        "k": "num",
        "items": [
          "SELECT Student.Surname, SUM(Payment.Amount) AS Paid FROM Student JOIN Payment ON Student.StudentID = Payment.StudentID WHERE Student.Class = '11B' GROUP BY Student.Surname;",
          "Join on StudentID: S017 matches payments 501 and 502; S019 matches 503; S018 matches nothing.",
          "Filter Class = '11B': keeps S017's two rows; S019 is 11A and is dropped.",
          "Group by surname and sum: Kollie 8,000.",
          "S018 Doe has paid nothing; an inner JOIN keeps only students with a matching payment, so Doe disappears — a LEFT JOIN (or a separate query for students with no payment) is needed to list debtors."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** The query returns Kollie 8000; Doe has no payments and is missed by the inner join, so debtors need a LEFT JOIN or a NOT IN query."
      },
      {
        "k": "p",
        "t": "Notice the method: name what you know, run one step at a time, write the result of each step, then state the answer in a full sentence. That is the same habit a Physics class uses on a numerical problem; here the 'calculation' is a trace, a conversion, a truth table, a formula, a query or a debug."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Common Mistakes"
      },
      {
        "k": "bul",
        "items": [
          "Running UPDATE or DELETE without a WHERE clause and changing every row.",
          "Storing the student's name in the Payment table as well as the Student table, so a corrected spelling has to be fixed in two places.",
          "Joining tables without an ON condition, which pairs every row with every row.",
          "Using = for 'greater than or equal' boundaries, or > when >= was meant."
        ]
      },
      {
        "k": "p",
        "t": "The class rule still holds when a mistake appears: **we try, we debug, we do not laugh at a mistake.** A bug is in the steps, not in the person."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Safety, Ethics and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN or a one-time code, and nobody installs software on a school machine without permission. A program written in this course is never pointed at another person's account, phone or wallet: guessing a password, sending bulk messages or reading someone's data without consent is a crime under Liberian law, not a prank. Copying a program from a classmate and submitting it as your own is plagiarism. Pair work shares the thinking, not the credit for work you did not do."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered (screenshots, not deletions), and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Pair Roles: Driver and Navigator"
      },
      {
        "k": "p",
        "t": "A computing pair has two jobs that swap. The **driver** writes or works the next step. The **navigator** reads the algorithm or the listing, watches for a bug, and says 'stop' before a wrong line is copied. After five minutes they swap, so both practise both jobs. A third student may sit as **checker** and tick each step on the trace table. Taking turns is a computing skill, not a punishment for having only one computer — or none."
      },
      {
        "k": "table",
        "head": [
          "Role",
          "What this person does",
          "What this person does not do"
        ],
        "rows": [
          [
            "Driver",
            "Works or writes the current step",
            "Does not skip the navigator's 'stop'"
          ],
          [
            "Navigator",
            "Reads the steps and watches for bugs",
            "Does not grab the pencil, the keyboard or the mouse"
          ],
          [
            "Checker",
            "Ticks each step and records one bug on the class chart",
            "Does not laugh at a mistake"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Fictional Liberian Scenario"
      },
      {
        "k": "p",
        "t": "A school office runs UPDATE Student SET Class = '11C' to move one student and finds the next morning that every student in the school is in 11C."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Restore last night's backup, then adopt the rule: write the SELECT with the same WHERE first, check that it returns exactly the rows you mean, and only then change SELECT to UPDATE or DELETE — and never run a data-changing statement on the live database without a backup taken that day."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Worked Computing Reasoning"
      },
      {
        "k": "p",
        "t": "Restore last night's backup, then adopt the rule: write the SELECT with the same WHERE first, check that it returns exactly the rows you mean, and only then change SELECT to UPDATE or DELETE — and never run a data-changing statement on the live database without a backup taken that day."
      },
      {
        "k": "p",
        "t": "When you answer a scenario question, use this three-part shape: (1) name the computing idea (algorithm, data, network, security, binary, database, …); (2) say what a person should do, in order; (3) say why, with a unit term in the reason. Vague good intentions without a term do not yet show that the unit has been learned."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Practise It on Paper"
      },
      {
        "k": "p",
        "t": "The investigation **“Two paper tables and a query desk”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
      },
      {
        "k": "table",
        "head": [
          "Paper object",
          "What it stands for",
          "What we write afterwards"
        ],
        "rows": [
          [
            "Two table sheets",
            "Student and Payment tables",
            "Rows with keys marked and the relationship line"
          ],
          [
            "Query slips",
            "SQL statements",
            "The result table worked by hand"
          ],
          [
            "Change log",
            "INSERT, UPDATE, DELETE",
            "Predicted effect and rows affected"
          ],
          [
            "Class chart",
            "SQL bugs the class found (missing WHERE, missing ON)",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Store Each Fact Once"
      },
      {
        "k": "p",
        "t": "If the student's name lives in both Student and Payment, one day the two will disagree. Normalisation puts the name in Student only and lets Payment point at it with StudentID. A JOIN brings them together whenever a report needs both. Less typing, fewer errors, one truth."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Reading a SELECT Aloud"
      },
      {
        "k": "p",
        "t": "'Select these columns, from this table, where this is true, grouped by this, ordered by that.' Say the clauses in that order and the query writes itself. The database actually evaluates FROM and JOIN, then WHERE, then GROUP BY, then SELECT, then ORDER BY — which is why you can sort by a column you did not select."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Inner Join Drops the Unmatched"
      },
      {
        "k": "p",
        "t": "A JOIN keeps only rows that match on both sides, so a student with no payments vanishes from a fees report — precisely the student the bursar wants to see. LEFT JOIN keeps every student and shows NULL where no payment exists. Know which one the question needs."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Backups Before Changes"
      },
      {
        "k": "p",
        "t": "INSERT, UPDATE and DELETE are permanent. A professional takes a backup, tests the WHERE with SELECT, runs the change, and checks the row count reported. A Liberian office that follows those four steps never has to explain a lost term of fees."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "What a Period Test Asks"
      },
      {
        "k": "p",
        "t": "A fair period test on “Relational Databases and SQL” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit precisely and use each in a sentence.",
          "Solve or trace a problem connected with “Relational Databases and SQL” on paper, showing every line of working.",
          "Classify four examples using “Reads data (no change) / Changes data” and justify one placement.",
          "Find and correct a bug in a set of steps, a query or a program, and say what the bug was."
        ]
      },
      {
        "k": "p",
        "t": "Show every step of a tracing or conversion question, the way a Physics script shows working. A bare answer with no steps cannot be given full credit, because the teacher cannot see the method you ran."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Four Weeks of Study"
      },
      {
        "k": "p",
        "t": "A 4-week unit on “Relational Databases and SQL” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
      },
      {
        "k": "table",
        "head": [
          "Week",
          "Study focus",
          "What students leave able to do"
        ],
        "rows": [
          [
            "1",
            "What “Relational Databases and SQL” is, and where it already appears around us.",
            "Say what the unit is about and name two examples from Liberia."
          ],
          [
            "2",
            "Key ideas, distinctions and the unit table.",
            "Use the key terms and complete the distinction tables."
          ],
          [
            "3",
            "A Liberian example and the paper-first method, worked then written.",
            "Run the paper method and write the algorithm, table or report."
          ],
          [
            "4",
            "Worked problems, pair-debug, the computing fair and the period check.",
            "Solve a worked example, debug a bug, and sit the period check."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Check Yourself"
      },
      {
        "k": "p",
        "t": "Close the notes. (1) Say the unit title and one Liberian example. (2) Give the meaning of three terms without looking. (3) Work the paper method once more, showing every step. (4) Name one bug you would look for. (5) Say who you tell if a message asks for a photograph, a PIN or money. If any of those five stalls, go back to the table of terms and the worked example and run them again with a partner. Do not laugh at a bug — including your own."
      },
      {
        "k": "p",
        "t": "This is original supplementary teaching material for Liberian senior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, relational database means a database of several tables linked by keys so that each fact is stored once.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, primary key means a field in one table that holds the primary key of a record in another table, creating a link.",
        "a": "False",
        "why": "primary key means the field that uniquely identifies each record in its own table; the statement describes foreign key."
      },
      {
        "s": "In this unit, relationship means the link between two tables, usually one-to-many, such as one student to many payments.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Every conversion, truth table, trace and program in the unit can be worked on paper; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the code or the steps, not in the person."
      },
      {
        "s": "Students should share passwords, PINs or one-time codes so a partner can finish the work.",
        "a": "False",
        "why": "A password, PIN or one-time code is secret. Sharing one is how accounts and mobile-money wallets are emptied."
      },
      {
        "s": "A foreign key in one table holds the primary key of a record in another table, and that is how tables are linked.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "A foreign key must be unique in the table that contains it.",
        "a": "False",
        "why": "A foreign key may repeat — many payments carry the same StudentID; it is the primary key it points to that is unique."
      },
      {
        "s": "DELETE FROM Payment; with no WHERE clause removes every payment.",
        "a": "True",
        "why": "Without WHERE a data-changing statement applies to every row."
      }
    ],
    "classify": {
      "title": "Reads data (no change) / Changes data",
      "groups": [
        {
          "name": "Reads data (no change)",
          "items": [
            "SELECT Surname FROM Student",
            "SELECT COUNT(*) FROM Payment",
            "SELECT … JOIN … ON …",
            "SELECT … ORDER BY Amount DESC",
            "SELECT AVG(Amount) FROM Payment",
            "SELECT * FROM Student WHERE Class = '11B'"
          ]
        },
        {
          "name": "Changes data",
          "items": [
            "INSERT INTO Payment VALUES (…)",
            "UPDATE Student SET Class = '11C' WHERE StudentID = 'S017'",
            "DELETE FROM Payment WHERE PaymentID = 501",
            "UPDATE Payment SET Amount = 5000 WHERE PaymentID = 502",
            "DELETE FROM Student WHERE StudentID = 'S099'",
            "INSERT INTO Student (StudentID, Surname, Class) VALUES ('S020', 'Weah', '11A')"
          ]
        }
      ]
    },
    "diagram": {
      "title": "Two tables linked by a key",
      "caption": "Label each part and state what it does in “Relational Databases and SQL”.",
      "parts": [
        {
          "p": "Student table",
          "f": "StudentID (primary key), Surname, FirstName, Class"
        },
        {
          "p": "Payment table",
          "f": "PaymentID (primary key), StudentID (foreign key), Amount, PaidOn"
        },
        {
          "p": "One-to-many line",
          "f": "one student may have many payments"
        },
        {
          "p": "JOIN ON StudentID",
          "f": "matches each payment to its student"
        },
        {
          "p": "Aggregate",
          "f": "SUM(Amount) GROUP BY StudentID gives the total per student"
        }
      ]
    },
    "experiment": {
      "title": "Two paper tables and a query desk",
      "aim": "To practise the ideas of “Relational Databases and SQL” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Printed listings, cards and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class test log",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “Two paper tables and a query desk” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A school office runs UPDATE Student SET Class = '11C' to move one student and finds the next morning that every student in the school is in 11C. What should happen next?",
        "a": "Restore last night's backup, then adopt the rule: write the SELECT with the same WHERE first, check that it returns exactly the rows you mean, and only then change SELECT to UPDATE or DELETE — and never run a data-changing statement on the live database without a backup taken that day."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Relational Databases and SQL”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's program or trace fails. What do you say, and why?",
        "a": "Remind the class that a bug is in the code or the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the exact line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian working life (a bank, a mobile-money agent, a clinic, a radio station, a business, a ministry).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as a bank's database, a mobile-money transaction, a hospital record, a radio station's schedule or a ministry's website."
      },
      {
        "q": "Design Patient and Visit tables for a clinic, naming the keys and the relationship, and write SQL for (a) all visits by patient P042 newest first, (b) the number of visits in March 2026, (c) each patient's surname with their number of visits.",
        "a": "Patient(PatientID PK, Surname, DateOfBirth, Village); Visit(VisitID PK, PatientID FK, VisitDate, Diagnosis); one-to-many. (a) SELECT * FROM Visit WHERE PatientID = 'P042' ORDER BY VisitDate DESC; (b) SELECT COUNT(*) FROM Visit WHERE VisitDate BETWEEN '2026-03-01' AND '2026-03-31'; (c) SELECT Surname, COUNT(*) FROM Patient JOIN Visit ON Patient.PatientID = Visit.PatientID GROUP BY Surname;"
      },
      {
        "q": "Explain, with a two-table example, what goes wrong if the school stores the student's class in the Payment table as well as the Student table.",
        "a": "When a student moves class the change must be made in every payment row as well; if one is missed, reports disagree about the student's class — data redundancy causing inconsistency, which normalisation prevents."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “Two paper tables and a query desk” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, squared paper and printed listings",
      "A class computing chart and test log",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's device, kept dry and in sight"
    ],
    "aids": [
      "Word cards — relational database, primary key, foreign key",
      "A flowchart or trace table of “Two paper tables and a query desk”",
      "Two blank table sheets, key markers and SQL query slips",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing term and what it means.",
      "Work this week's paper method (a conversion, a truth table, a trace, a query or a design) again with a friend — no device needed.",
      "Find one example of this unit's idea in your community (a bank, a mobile-money kiosk, a clinic, a radio station, a business or a ministry office) and write a paragraph about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written trace, conversion, truth table or query with full working",
      "Pair-debug observed against the class test log",
      "A short written response to the Liberian case scenario"
    ],
    "worked": [
      {
        "q": "Which key is unique in its own table, and which points to another table?",
        "steps": [
          "Identify vs link."
        ],
        "a": "Primary key; foreign key"
      },
      {
        "q": "Write SQL for the surnames of all students in 11B.",
        "steps": [
          "SELECT, FROM, WHERE."
        ],
        "a": "SELECT Surname FROM Student WHERE Class = '11B';"
      },
      {
        "q": "Write SQL for the total of all payments.",
        "steps": [
          "Aggregate."
        ],
        "a": "SELECT SUM(Amount) FROM Payment;"
      },
      {
        "q": "What does UPDATE Student SET Class = '11C'; do with no WHERE?",
        "steps": [
          "Every row."
        ],
        "a": "Moves every student to 11C"
      },
      {
        "q": "Payments 5000 and 3000 exist for S017. What does SELECT SUM(Amount) FROM Payment WHERE StudentID = 'S017'; return?",
        "steps": [
          "Add the two."
        ],
        "a": "8000"
      },
      {
        "q": "Which clause sorts a result largest first?",
        "steps": [
          "Descending."
        ],
        "a": "ORDER BY Amount DESC"
      },
      {
        "q": "A student with no payments is missing from a JOIN report. Why?",
        "steps": [
          "Inner join keeps matches only."
        ],
        "a": "An inner JOIN drops unmatched rows; use a LEFT JOIN"
      },
      {
        "q": "Name the relationship between Student and Payment.",
        "steps": [
          "One student, many payments."
        ],
        "a": "One-to-many"
      }
    ]
  },
  {
    "grade": 11,
    "period": "V",
    "sem": "Two",
    "icon": "📈",
    "csPlan": true,
    "title": "Spreadsheets for Analysis — Functions, Charts and Models",
    "subtitle": "Computer Science · Original senior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Written for classes that may have no computer lab: every conversion, truth table, trace, query and program in the unit can be done on paper, and a shared device extends it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary precisely in speech, writing and examination answers.",
      "Solve the unit's problems on paper — conversions, truth tables, traces, queries, formulas or designs — showing every step of working.",
      "Evaluate a technology choice for its safety, legality, cost and effect on people in Liberia."
    ],
    "objectives": [
      "Define the key terms in “Spreadsheets for Analysis — Functions, Charts and Models” precisely and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm, program or procedure connected with this unit, on paper.",
      "Classify examples into the unit's two groups and justify each placement.",
      "Solve a worked example step by step, showing every line of working, and state the answer in a full sentence with its unit or type.",
      "Apply the unit's ideas to a fictional Liberian business, ministry, clinic or school scenario.",
      "Find and correct a bug in a set of steps, a circuit, a query or a program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared test log.",
      "Explain one Liberian example of this unit's idea (mobile money, the ACE submarine cable, a hospital record, a bank, the national examination system or a radio station)."
    ],
    "safeguard": "A senior high computing lesson uses paper traces, truth tables, printed listings and, when one is present, a shared school computer or the teacher's own device. Students never share passwords, PINs or one-time codes, never install software on a school machine without permission, and never photograph, record or post a classmate without consent. A program written in class must never be used to guess a password, send bulk messages or enter another person's account — that is a crime, not a prank. If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "Analytical spreadsheet work uses relative and absolute references ($A$1), logical functions (IF, AND, OR), conditional counting and totals (COUNTIF, SUMIF, AVERAGEIF), lookups (VLOOKUP), sorting and filtering, conditional formatting, charts chosen to fit the data (bar, line, pie), and what-if models in which inputs are separated from formulas so scenarios can be compared.",
    "focus": [
      "Worked demonstration on paper",
      "Pair programming and debugging",
      "Liberian case scenario",
      "Practical and period check"
    ],
    "terms": [
      {
        "t": "relative reference",
        "d": "a cell reference such as B2 that shifts when the formula is copied to another cell",
        "x": "In this unit, relative reference means a cell reference such as B2 that shifts when the formula is copied to another cell."
      },
      {
        "t": "absolute reference",
        "d": "a cell reference such as $B$1 that stays fixed when the formula is copied",
        "x": "In this unit, absolute reference means a cell reference such as $B$1 that stays fixed when the formula is copied."
      },
      {
        "t": "IF function",
        "d": "=IF(condition, value_if_true, value_if_false), which returns one of two values depending on a test",
        "x": "In this unit, IF function means =IF(condition, value_if_true, value_if_false), which returns one of two values depending on a test."
      },
      {
        "t": "COUNTIF",
        "d": "the function that counts the cells in a range that meet a condition, such as =COUNTIF(C2:C41, \">=50\")",
        "x": "In this unit, COUNTIF means the function that counts the cells in a range that meet a condition, such as =COUNTIF(C2:C41, \">=50\")."
      },
      {
        "t": "SUMIF",
        "d": "the function that adds the cells in a range whose matching cells meet a condition",
        "x": "In this unit, SUMIF means the function that adds the cells in a range whose matching cells meet a condition."
      },
      {
        "t": "VLOOKUP",
        "d": "the function that finds a value in the first column of a table and returns a value from another column of the same row",
        "x": "In this unit, VLOOKUP means the function that finds a value in the first column of a table and returns a value from another column of the same row."
      },
      {
        "t": "conditional formatting",
        "d": "a rule that changes a cell's colour or style automatically when its value meets a condition",
        "x": "In this unit, conditional formatting means a rule that changes a cell's colour or style automatically when its value meets a condition."
      },
      {
        "t": "sort",
        "d": "arranging rows in order of one or more columns",
        "x": "In this unit, sort means arranging rows in order of one or more columns."
      },
      {
        "t": "filter",
        "d": "showing only the rows that meet a condition and hiding the rest",
        "x": "In this unit, filter means showing only the rows that meet a condition and hiding the rest."
      },
      {
        "t": "chart type",
        "d": "the kind of chart chosen to fit the data: bar for comparisons, line for change over time, pie for parts of a whole",
        "x": "In this unit, chart type means the kind of chart chosen to fit the data: bar for comparisons, line for change over time, pie for parts of a whole."
      },
      {
        "t": "what-if model",
        "d": "a spreadsheet in which inputs are kept in separate cells so changing one shows its effect on all the results",
        "x": "In this unit, what-if model means a spreadsheet in which inputs are kept in separate cells so changing one shows its effect on all the results."
      },
      {
        "t": "data validation",
        "d": "a rule that limits what can be typed into a cell, such as a whole number between 0 and 100",
        "x": "In this unit, data validation means a rule that limits what can be typed into a cell, such as a whole number between 0 and 100."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “relative reference” in this unit?",
        "a": "a cell reference such as B2 that shifts when the formula is copied to another cell."
      },
      {
        "q": "What is meant by “absolute reference” in this unit?",
        "a": "a cell reference such as $B$1 that stays fixed when the formula is copied."
      },
      {
        "q": "What is meant by “IF function” in this unit?",
        "a": "=IF(condition, value_if_true, value_if_false), which returns one of two values depending on a test."
      },
      {
        "q": "What is meant by “COUNTIF” in this unit?",
        "a": "the function that counts the cells in a range that meet a condition, such as =COUNTIF(C2:C41, \">=50\")."
      },
      {
        "q": "What is meant by “SUMIF” in this unit?",
        "a": "the function that adds the cells in a range whose matching cells meet a condition."
      },
      {
        "q": "What is meant by “VLOOKUP” in this unit?",
        "a": "the function that finds a value in the first column of a table and returns a value from another column of the same row."
      },
      {
        "q": "What is meant by “conditional formatting” in this unit?",
        "a": "a rule that changes a cell's colour or style automatically when its value meets a condition."
      },
      {
        "q": "What is meant by “sort” in this unit?",
        "a": "arranging rows in order of one or more columns."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A PTA treasurer's balance column shows correct figures for the first student and nonsense for everyone else after the formula is copied down, and she plans to retype every row by hand."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Read the copied formula: =B1-F3 became =B2-F3 because B1 was relative; change the first formula to =$B$1-F2, copy it down again, and check row 3 and the last row by hand before trusting the column."
      },
      {
        "q": "State this unit idea in your own words: A relative reference such as B2 moves when a formula is copied; an absolute reference such as $B$1 stays fixed.",
        "a": "A relative reference such as B2 moves when a formula is copied; an absolute reference such as $B$1 stays fixed."
      },
      {
        "q": "State this unit idea in your own words: IF(condition, value_if_true, value_if_false) lets a cell make a decision.",
        "a": "IF(condition, value_if_true, value_if_false) lets a cell make a decision."
      },
      {
        "q": "What does =COUNTIF(C2:C41,\">=50\") do?",
        "a": "Counts how many cells in C2:C41 hold a value of 50 or more."
      },
      {
        "q": "Why are inputs kept in separate cells in a what-if model?",
        "a": "So that changing one input updates every formula that depends on it, letting scenarios be compared without editing formulas."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Spreadsheets for Analysis — Functions, Charts and Models” Is"
      },
      {
        "k": "p",
        "t": "Grade 8's ledger becomes a tool for analysis. An **absolute reference** ($B$1) pins a cell when a formula is copied; **IF** makes a cell decide; **COUNTIF** and **SUMIF** count and add only the rows that meet a condition; **VLOOKUP** finds a value in a table; and **conditional formatting** colours cells that need attention. A **chart** makes a pattern visible, a **sort** and a **filter** find the rows that matter, and a **what-if model** changes one input to see the effect on every result — the tool a PTA uses to plan a budget. Treasurers who plan to retype every balance because the copied formula went wrong from row 3 onward have an unpinned reference. Read the copied formula: =B1-F3 became =B2-F3 because B1 was relative; change the first formula to =$B$1-F2, copy it down again, and check row 3 and the last row by hand before trusting the column. A relative reference such as B2 moves when a formula is copied; an absolute reference such as $B$1 stays fixed. IF(condition, value_if_true, value_if_false) lets a cell make a decision."
      },
      {
        "k": "p",
        "t": "Analytical spreadsheet work uses relative and absolute references ($A$1), logical functions (IF, AND, OR), conditional counting and totals (COUNTIF, SUMIF, AVERAGEIF), lookups (VLOOKUP), sorting and filtering, conditional formatting, charts chosen to fit the data (bar, line, pie), and what-if models in which inputs are separated from formulas so scenarios can be compared."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: A relative reference such as B2 moves when a formula is copied; an absolute reference such as $B$1 stays fixed. IF(condition, value_if_true, value_if_false) lets a cell make a decision."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Ideas in This Unit"
      },
      {
        "k": "p",
        "t": "Each idea below is a working definition for Grade 11. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
      },
      {
        "k": "table",
        "head": [
          "Term",
          "What it means",
          "A sentence that uses it"
        ],
        "rows": [
          [
            "relative reference",
            "a cell reference such as B2 that shifts when the formula is copied to another cell",
            "In this unit, relative reference means a cell reference such as B2 that shifts when the formula is copied to another cell."
          ],
          [
            "absolute reference",
            "a cell reference such as $B$1 that stays fixed when the formula is copied",
            "In this unit, absolute reference means a cell reference such as $B$1 that stays fixed when the formula is copied."
          ],
          [
            "IF function",
            "=IF(condition, value_if_true, value_if_false), which returns one of two values depending on a test",
            "In this unit, IF function means =IF(condition, value_if_true, value_if_false), which returns one of two values depending on a test."
          ],
          [
            "COUNTIF",
            "the function that counts the cells in a range that meet a condition, such as =COUNTIF(C2:C41, \">=50\")",
            "In this unit, COUNTIF means the function that counts the cells in a range that meet a condition, such as =COUNTIF(C2:C41, \">=50\")."
          ],
          [
            "SUMIF",
            "the function that adds the cells in a range whose matching cells meet a condition",
            "In this unit, SUMIF means the function that adds the cells in a range whose matching cells meet a condition."
          ],
          [
            "VLOOKUP",
            "the function that finds a value in the first column of a table and returns a value from another column of the same row",
            "In this unit, VLOOKUP means the function that finds a value in the first column of a table and returns a value from another column of the same row."
          ],
          [
            "conditional formatting",
            "a rule that changes a cell's colour or style automatically when its value meets a condition",
            "In this unit, conditional formatting means a rule that changes a cell's colour or style automatically when its value meets a condition."
          ],
          [
            "sort",
            "arranging rows in order of one or more columns",
            "In this unit, sort means arranging rows in order of one or more columns."
          ],
          [
            "filter",
            "showing only the rows that meet a condition and hiding the rest",
            "In this unit, filter means showing only the rows that meet a condition and hiding the rest."
          ],
          [
            "chart type",
            "the kind of chart chosen to fit the data: bar for comparisons, line for change over time, pie for parts of a whole",
            "In this unit, chart type means the kind of chart chosen to fit the data: bar for comparisons, line for change over time, pie for parts of a whole."
          ],
          [
            "what-if model",
            "a spreadsheet in which inputs are kept in separate cells so changing one shows its effect on all the results",
            "In this unit, what-if model means a spreadsheet in which inputs are kept in separate cells so changing one shows its effect on all the results."
          ],
          [
            "data validation",
            "a rule that limits what can be typed into a cell, such as a whole number between 0 and 100",
            "In this unit, data validation means a rule that limits what can be typed into a cell, such as a whole number between 0 and 100."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Tell Them Apart"
      },
      {
        "k": "bul",
        "items": [
          "**B2** moves when copied; **$B$1** does not; **B$1** fixes the row only, **$B1** the column only.",
          "**COUNT** counts numbers; **COUNTIF** counts those meeting a condition; **COUNTA** counts non-empty cells.",
          "**Sort** reorders rows; **filter** hides rows — neither changes the data.",
          "**Bar chart** compares categories; **line chart** shows change over time; **pie chart** shows parts of one whole (only).",
          "**Inputs** in their own cells at the top; **formulas** refer to them — never type a constant into a formula."
        ]
      },
      {
        "k": "table",
        "head": [
          "Formula in D2 (fee in $B$1)",
          "Copied to D3 becomes",
          "Why"
        ],
        "rows": [
          [
            "=C2*$B$1",
            "=C3*$B$1",
            "C2 is relative and moves; $B$1 is absolute and stays"
          ],
          [
            "=C2*B1",
            "=C3*B2",
            "Both relative — B2 is now wrong"
          ],
          [
            "=IF(C2>=50,\"Pass\",\"Fail\")",
            "=IF(C3>=50,\"Pass\",\"Fail\")",
            "The test moves to the next row"
          ],
          [
            "=COUNTIF($C$2:$C$41,\">=50\")",
            "=COUNTIF($C$2:$C$41,\">=50\")",
            "The whole range is pinned"
          ],
          [
            "=SUMIF($E$2:$E$41,\"11B\",$F$2:$F$41)",
            "Unchanged",
            "Adds column F where column E is 11B"
          ],
          [
            "=VLOOKUP(A2,$H$2:$I$6,2,FALSE)",
            "=VLOOKUP(A3,$H$2:$I$6,2,FALSE)",
            "Looks up the next student in the fixed table"
          ]
        ]
      },
      {
        "k": "p",
        "t": "A second table for this unit, so the distinction can be practised twice:"
      },
      {
        "k": "table",
        "head": [
          "Question",
          "Function or tool",
          "Example"
        ],
        "rows": [
          [
            "How many students passed?",
            "COUNTIF",
            "=COUNTIF(C2:C41,\">=50\")"
          ],
          [
            "Total fees paid by 11B?",
            "SUMIF",
            "=SUMIF(E2:E41,\"11B\",F2:F41)"
          ],
          [
            "Which students owe money?",
            "Filter or conditional formatting",
            "Filter F column < 15000; colour red"
          ],
          [
            "Grade word for each mark",
            "IF (nested)",
            "=IF(C2>=75,\"Distinction\",IF(C2>=50,\"Pass\",\"Fail\"))"
          ],
          [
            "Fee for each class from a rate table",
            "VLOOKUP",
            "=VLOOKUP(E2,$H$2:$I$6,2,FALSE)"
          ],
          [
            "If the fee rises 10%, what is the total?",
            "What-if model",
            "Change $B$1; every total updates"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why This Matters in Liberia"
      },
      {
        "k": "p",
        "t": "A PTA treasurer modelling next year's budget, a county health officer counting fever cases by clinic, a head teacher colouring every student below the pass mark, a shop owner looking up a wholesale price from a rate table — each uses this unit's functions. Spreadsheets are the most widely used analysis tool in Liberian offices, and the difference between a clerk and an analyst is the $ sign, the IF and the chart that makes a PTA meeting understand in one look. The formulas are written and checked on paper first; the machine only copies them down."
      },
      {
        "k": "p",
        "t": "This course is an **original teaching resource**, not an official syllabus transcription. A school without a computer lab is not a school without Computer Science. Teachers should compare the unit with the school's approved scheme of work before use."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Paper-First Method"
      },
      {
        "k": "p",
        "t": "The class investigation is **“The fee model with a pinned rate and a what-if”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Pairs rule a sheet: B1 holds the term fee (an input cell), rows 2–11 hold ten students with Class in E and Paid in F; in G2 they write =\\$B\\$1-F2 (balance), and in H2 =IF(G2>0,\"Owes\",\"Clear\"), copying both down by hand and writing what each becomes.",
          "They add =COUNTIF(H2:H11,\"Owes\"), =SUMIF(E2:E11,\"11B\",F2:F11) and =VLOOKUP(E2,$J$2:$K$4,2,FALSE) from a small class-rate table, working each by hand.",
          "They change B1 from 15,000 to 16,500 and recalculate only the cells that depend on it, explaining why the model needs no other change.",
          "They sketch a bar chart of balance per student and a pie chart of Owes versus Clear, and state why a pie chart of individual balances would be wrong.",
          "If a computer is present, one pair enters the model and compares every cell with the paper, including the copied formulas; otherwise the paper model is the finished work."
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Worked Example in Prose"
      },
      {
        "k": "p",
        "t": "**Problem.** B1 holds the fee 15,000. F2:F4 hold payments 15,000, 9,000 and 0 for students in 11A, 11B and 11B. Write the formulas for the balance in G2, the status in H2, the number owing, and the total paid by 11B; show what G2 and H2 become when copied to row 4; and state the effect of changing B1 to 16,500."
      },
      {
        "k": "num",
        "items": [
          "G2: =$B$1-F2 → 15,000 − 15,000 = 0; H2: =IF(G2>0,\"Owes\",\"Clear\") → Clear.",
          "Copied to row 4: G4 = $B$1-F4 → 15,000 − 0 = 15,000; H4 → Owes. (G3 = 6,000, H3 = Owes.)",
          "Number owing: =COUNTIF(H2:H4,\"Owes\") → 2.",
          "Total paid by 11B: =SUMIF(E2:E4,\"11B\",F2:F4) → 9,000 + 0 = 9,000.",
          "Change B1 to 16,500: every balance rises by 1,500 (1,500, 7,500, 16,500), H2 becomes Owes, and COUNTIF becomes 3 — no formula was edited because the fee was an input cell referenced absolutely."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** G2 =$B$1-F2 and H2 =IF(G2>0,\"Owes\",\"Clear\") copy correctly because $B$1 is pinned; two students owe and 11B paid 9,000; raising B1 updates every result automatically."
      },
      {
        "k": "p",
        "t": "Notice the method: name what you know, run one step at a time, write the result of each step, then state the answer in a full sentence. That is the same habit a Physics class uses on a numerical problem; here the 'calculation' is a trace, a conversion, a truth table, a formula, a query or a debug."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Common Mistakes"
      },
      {
        "k": "bul",
        "items": [
          "Typing the fee into every formula instead of referencing one input cell.",
          "Copying =C2*B1 down without pinning B1, so row 3 multiplies by B2.",
          "Using a pie chart for values that are not parts of one whole.",
          "Sorting one column alone so marks separate from their names."
        ]
      },
      {
        "k": "p",
        "t": "The class rule still holds when a mistake appears: **we try, we debug, we do not laugh at a mistake.** A bug is in the steps, not in the person."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Safety, Ethics and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN or a one-time code, and nobody installs software on a school machine without permission. A program written in this course is never pointed at another person's account, phone or wallet: guessing a password, sending bulk messages or reading someone's data without consent is a crime under Liberian law, not a prank. Copying a program from a classmate and submitting it as your own is plagiarism. Pair work shares the thinking, not the credit for work you did not do."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered (screenshots, not deletions), and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Pair Roles: Driver and Navigator"
      },
      {
        "k": "p",
        "t": "A computing pair has two jobs that swap. The **driver** writes or works the next step. The **navigator** reads the algorithm or the listing, watches for a bug, and says 'stop' before a wrong line is copied. After five minutes they swap, so both practise both jobs. A third student may sit as **checker** and tick each step on the trace table. Taking turns is a computing skill, not a punishment for having only one computer — or none."
      },
      {
        "k": "table",
        "head": [
          "Role",
          "What this person does",
          "What this person does not do"
        ],
        "rows": [
          [
            "Driver",
            "Works or writes the current step",
            "Does not skip the navigator's 'stop'"
          ],
          [
            "Navigator",
            "Reads the steps and watches for bugs",
            "Does not grab the pencil, the keyboard or the mouse"
          ],
          [
            "Checker",
            "Ticks each step and records one bug on the class chart",
            "Does not laugh at a mistake"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Fictional Liberian Scenario"
      },
      {
        "k": "p",
        "t": "A PTA treasurer's balance column shows correct figures for the first student and nonsense for everyone else after the formula is copied down, and she plans to retype every row by hand."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Read the copied formula: =B1-F3 became =B2-F3 because B1 was relative; change the first formula to =$B$1-F2, copy it down again, and check row 3 and the last row by hand before trusting the column."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Worked Computing Reasoning"
      },
      {
        "k": "p",
        "t": "Read the copied formula: =B1-F3 became =B2-F3 because B1 was relative; change the first formula to =$B$1-F2, copy it down again, and check row 3 and the last row by hand before trusting the column."
      },
      {
        "k": "p",
        "t": "When you answer a scenario question, use this three-part shape: (1) name the computing idea (algorithm, data, network, security, binary, database, …); (2) say what a person should do, in order; (3) say why, with a unit term in the reason. Vague good intentions without a term do not yet show that the unit has been learned."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Practise It on Paper"
      },
      {
        "k": "p",
        "t": "The investigation **“The fee model with a pinned rate and a what-if”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
      },
      {
        "k": "table",
        "head": [
          "Paper object",
          "What it stands for",
          "What we write afterwards"
        ],
        "rows": [
          [
            "Ruled model sheet",
            "The spreadsheet",
            "Formulas written as they would appear after copying"
          ],
          [
            "Input cell box",
            "The assumption being tested",
            "Results before and after a change"
          ],
          [
            "Chart sketch",
            "The picture of the data",
            "The chart type and why it fits"
          ],
          [
            "Class chart",
            "Reference bugs the class found (unpinned B1, wrong chart)",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Dollar Sign Is the Whole Trick"
      },
      {
        "k": "p",
        "t": "$B$1 says 'this cell, always'. B$1 says 'this row, any column'; $B1 the reverse. When one input — a fee, a rate, an exchange rate — feeds a whole column, pin it. Test by copying the formula and reading what it became; never trust the first row alone."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Let Cells Decide"
      },
      {
        "k": "p",
        "t": "=IF(G2>0,\"Owes\",\"Clear\") is a selection statement in a cell. Nested IFs make grade bands; AND and OR combine tests. Colour the cell with conditional formatting on the same test and a head teacher sees the whole class's standing without reading a number."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Choose the Chart for the Question"
      },
      {
        "k": "p",
        "t": "Comparing classes: bar. Fees collected month by month: line. Share of the budget by item: pie — and only when the slices add to the whole. A chart chosen to fit the data tells the truth quickly; one chosen because it looks good tells a story that is not there."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Inputs Apart From Formulas"
      },
      {
        "k": "p",
        "t": "A what-if model puts every assumption — fee, number of students, fuel price — in labelled input cells at the top, and every formula refers to them. Then 'what if fees rise 10%?' is one edit and a glance. That is how a PTA, a clinic or a ministry plans a year."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "What a Period Test Asks"
      },
      {
        "k": "p",
        "t": "A fair period test on “Spreadsheets for Analysis — Functions, Charts and Models” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit precisely and use each in a sentence.",
          "Solve or trace a problem connected with “Spreadsheets for Analysis — Functions, Charts and Models” on paper, showing every line of working.",
          "Classify four examples using “Relative references (move when copied) / Absolute or mixed references (pinned)” and justify one placement.",
          "Find and correct a bug in a set of steps, a query or a program, and say what the bug was."
        ]
      },
      {
        "k": "p",
        "t": "Show every step of a tracing or conversion question, the way a Physics script shows working. A bare answer with no steps cannot be given full credit, because the teacher cannot see the method you ran."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Four Weeks of Study"
      },
      {
        "k": "p",
        "t": "A 4-week unit on “Spreadsheets for Analysis — Functions, Charts and Models” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
      },
      {
        "k": "table",
        "head": [
          "Week",
          "Study focus",
          "What students leave able to do"
        ],
        "rows": [
          [
            "1",
            "What “Spreadsheets for Analysis — Functions, Charts and Models” is, and where it already appears around us.",
            "Say what the unit is about and name two examples from Liberia."
          ],
          [
            "2",
            "Key ideas, distinctions and the unit table.",
            "Use the key terms and complete the distinction tables."
          ],
          [
            "3",
            "A Liberian example and the paper-first method, worked then written.",
            "Run the paper method and write the algorithm, table or report."
          ],
          [
            "4",
            "Worked problems, pair-debug, the computing fair and the period check.",
            "Solve a worked example, debug a bug, and sit the period check."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Check Yourself"
      },
      {
        "k": "p",
        "t": "Close the notes. (1) Say the unit title and one Liberian example. (2) Give the meaning of three terms without looking. (3) Work the paper method once more, showing every step. (4) Name one bug you would look for. (5) Say who you tell if a message asks for a photograph, a PIN or money. If any of those five stalls, go back to the table of terms and the worked example and run them again with a partner. Do not laugh at a bug — including your own."
      },
      {
        "k": "p",
        "t": "This is original supplementary teaching material for Liberian senior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, relative reference means a cell reference such as B2 that shifts when the formula is copied to another cell.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, absolute reference means =IF(condition, value_if_true, value_if_false), which returns one of two values depending on a test.",
        "a": "False",
        "why": "absolute reference means a cell reference such as $B$1 that stays fixed when the formula is copied; the statement describes IF function."
      },
      {
        "s": "In this unit, COUNTIF means the function that counts the cells in a range that meet a condition, such as =COUNTIF(C2:C41, \">=50\").",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Every conversion, truth table, trace and program in the unit can be worked on paper; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the code or the steps, not in the person."
      },
      {
        "s": "Students should share passwords, PINs or one-time codes so a partner can finish the work.",
        "a": "False",
        "why": "A password, PIN or one-time code is secret. Sharing one is how accounts and mobile-money wallets are emptied."
      },
      {
        "s": "A relative reference such as B2 moves when a formula is copied; an absolute reference such as $B$1 stays fixed.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "An absolute reference such as $B$1 changes when the formula is copied to another row.",
        "a": "False",
        "why": "The $ signs pin the column and row; the reference stays $B$1 wherever it is copied."
      },
      {
        "s": "A pie chart should only be used when the values are parts of one whole.",
        "a": "True",
        "why": "Slices must add up to a meaningful total; otherwise a bar chart is correct."
      }
    ],
    "classify": {
      "title": "Relative references (move when copied) / Absolute or mixed references (pinned)",
      "groups": [
        {
          "name": "Relative references (move when copied)",
          "items": [
            "B2",
            "C2:C41",
            "F3",
            "A2 in a VLOOKUP's first argument",
            "G2 in =IF(G2>0,…)",
            "E2"
          ]
        },
        {
          "name": "Absolute or mixed references (pinned)",
          "items": [
            "$B$1",
            "$C$2:$C$41",
            "$H$2:$I$6",
            "B$1",
            "$B1",
            "$J$2:$K$4"
          ]
        }
      ]
    },
    "diagram": {
      "title": "A what-if fee model",
      "caption": "Label each part and state what it does in “Spreadsheets for Analysis — Functions, Charts and Models”.",
      "parts": [
        {
          "p": "Input cell $B$1",
          "f": "the term fee, typed once and referenced everywhere"
        },
        {
          "p": "Data rows",
          "f": "class and amount paid for each student"
        },
        {
          "p": "Formula column",
          "f": "=$B$1-F2 copied down; the $ keeps the fee fixed"
        },
        {
          "p": "Decision column",
          "f": "=IF(G2>0,\"Owes\",\"Clear\") with conditional formatting"
        },
        {
          "p": "Summary and chart",
          "f": "COUNTIF, SUMIF and a bar chart of balances"
        }
      ]
    },
    "experiment": {
      "title": "The fee model with a pinned rate and a what-if",
      "aim": "To practise the ideas of “Spreadsheets for Analysis — Functions, Charts and Models” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Printed listings, cards and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class test log",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “The fee model with a pinned rate and a what-if” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A PTA treasurer's balance column shows correct figures for the first student and nonsense for everyone else after the formula is copied down, and she plans to retype every row by hand. What should happen next?",
        "a": "Read the copied formula: =B1-F3 became =B2-F3 because B1 was relative; change the first formula to =$B$1-F2, copy it down again, and check row 3 and the last row by hand before trusting the column."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Spreadsheets for Analysis — Functions, Charts and Models”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's program or trace fails. What do you say, and why?",
        "a": "Remind the class that a bug is in the code or the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the exact line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian working life (a bank, a mobile-money agent, a clinic, a radio station, a business, a ministry).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as a bank's database, a mobile-money transaction, a hospital record, a radio station's schedule or a ministry's website."
      },
      {
        "q": "A county health officer has clinic names in A2:A21, month in B and fever cases in C. Write formulas for the total cases at Kakata clinic, the number of months with more than 50 cases, and describe the chart to show cases over the year for one clinic.",
        "a": "=SUMIF(A2:A21,\"Kakata\",C2:C21); =COUNTIF(C2:C21,\">50\"); a line chart of month against cases, filtered to Kakata."
      },
      {
        "q": "Build a what-if model for a school generator: inputs are litres per hour, price per litre and hours per day; the outputs are daily and termly cost (60 days). Write the formulas and say what changes if the price rises 20%.",
        "a": "Inputs B1 litres/hour, B2 price/litre, B3 hours/day; daily =B1*B2*B3; termly =B4*60 (if daily is in B4); raising B2 by 20% raises both outputs by 20% with no formula edited."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “The fee model with a pinned rate and a what-if” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, squared paper and printed listings",
      "A class computing chart and test log",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's device, kept dry and in sight"
    ],
    "aids": [
      "Word cards — relative reference, absolute reference, IF function",
      "A flowchart or trace table of “The fee model with a pinned rate and a what-if”",
      "A ruled fee-model sheet with an input cell and copied-formula columns",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing term and what it means.",
      "Work this week's paper method (a conversion, a truth table, a trace, a query or a design) again with a friend — no device needed.",
      "Find one example of this unit's idea in your community (a bank, a mobile-money kiosk, a clinic, a radio station, a business or a ministry office) and write a paragraph about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written trace, conversion, truth table or query with full working",
      "Pair-debug observed against the class test log",
      "A short written response to the Liberian case scenario"
    ],
    "worked": [
      {
        "q": "=C2*$B$1 in D2 is copied to D5. What does it become?",
        "steps": [
          "Relative moves, absolute stays."
        ],
        "a": "=C5*$B$1"
      },
      {
        "q": "=C2*B1 in D2 is copied to D3. What does it become, and why is that a bug?",
        "steps": [
          "Both move."
        ],
        "a": "=C3*B2; B2 is not the fee"
      },
      {
        "q": "Marks 48, 52, 50, 39 in C2:C5. =COUNTIF(C2:C5,\">=50\")?",
        "steps": [
          "52 and 50."
        ],
        "a": "2"
      },
      {
        "q": "=IF(C2>=50,\"Pass\",\"Fail\") with C2 = 49?",
        "steps": [
          "Boundary."
        ],
        "a": "Fail"
      },
      {
        "q": "E2:E4 = 11A, 11B, 11B; F2:F4 = 15000, 9000, 0. =SUMIF(E2:E4,\"11B\",F2:F4)?",
        "steps": [
          "9,000 + 0."
        ],
        "a": "9000"
      },
      {
        "q": "Which chart shows fees collected each month over a year?",
        "steps": [
          "Change over time."
        ],
        "a": "A line chart"
      },
      {
        "q": "Fee in B1 rises from 15,000 to 16,500. Balances computed with =$B$1-F2 change by how much each?",
        "steps": [
          "Difference."
        ],
        "a": "Rise by 1,500"
      },
      {
        "q": "Nested IF for Distinction (≥75), Pass (≥50), Fail: write it for C2.",
        "steps": [
          "Highest boundary first."
        ],
        "a": "=IF(C2>=75,\"Distinction\",IF(C2>=50,\"Pass\",\"Fail\"))"
      }
    ]
  },
  {
    "grade": 11,
    "period": "VI",
    "sem": "Two",
    "icon": "📡",
    "csPlan": true,
    "title": "Networks and Data Communication — Protocols and Topologies",
    "subtitle": "Computer Science · Original senior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Written for classes that may have no computer lab: every conversion, truth table, trace, query and program in the unit can be done on paper, and a shared device extends it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary precisely in speech, writing and examination answers.",
      "Solve the unit's problems on paper — conversions, truth tables, traces, queries, formulas or designs — showing every step of working.",
      "Evaluate a technology choice for its safety, legality, cost and effect on people in Liberia."
    ],
    "objectives": [
      "Define the key terms in “Networks and Data Communication — Protocols and Topologies” precisely and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm, program or procedure connected with this unit, on paper.",
      "Classify examples into the unit's two groups and justify each placement.",
      "Solve a worked example step by step, showing every line of working, and state the answer in a full sentence with its unit or type.",
      "Apply the unit's ideas to a fictional Liberian business, ministry, clinic or school scenario.",
      "Find and correct a bug in a set of steps, a circuit, a query or a program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared test log.",
      "Explain one Liberian example of this unit's idea (mobile money, the ACE submarine cable, a hospital record, a bank, the national examination system or a radio station)."
    ],
    "safeguard": "A senior high computing lesson uses paper traces, truth tables, printed listings and, when one is present, a shared school computer or the teacher's own device. Students never share passwords, PINs or one-time codes, never install software on a school machine without permission, and never photograph, record or post a classmate without consent. A program written in class must never be used to guess a password, send bulk messages or enter another person's account — that is a crime, not a prank. If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "Data communication depends on agreed protocols arranged in layers: the TCP/IP model (application, transport, internet, link) with protocols such as HTTP/HTTPS, SMTP/IMAP, FTP, DNS, TCP, UDP and IP. Network topologies (star, bus, ring, mesh) trade cost against reliability. Transmission may be serial or parallel and simplex, half-duplex or full-duplex; parity bits and checksums detect errors. Firewalls, encryption and MAC/IP addressing complete the picture.",
    "focus": [
      "Worked demonstration on paper",
      "Pair programming and debugging",
      "Liberian case scenario",
      "Practical and period check"
    ],
    "terms": [
      {
        "t": "protocol",
        "d": "a set of agreed rules for how devices communicate, covering format, timing, addressing and error handling",
        "x": "In this unit, protocol means a set of agreed rules for how devices communicate, covering format, timing, addressing and error handling."
      },
      {
        "t": "TCP/IP",
        "d": "the family of protocols the internet runs on: IP addresses and routes packets, TCP delivers them reliably in order",
        "x": "In this unit, TCP/IP means the family of protocols the internet runs on: IP addresses and routes packets, TCP delivers them reliably in order."
      },
      {
        "t": "layer",
        "d": "one level of a protocol stack that does one job and passes data to the layer above or below",
        "x": "In this unit, layer means one level of a protocol stack that does one job and passes data to the layer above or below."
      },
      {
        "t": "HTTP and HTTPS",
        "d": "the protocols for fetching web pages; HTTPS adds encryption with TLS",
        "x": "In this unit, HTTP and HTTPS means the protocols for fetching web pages; HTTPS adds encryption with TLS."
      },
      {
        "t": "DNS",
        "d": "the Domain Name System, which translates names such as moe.gov.lr into IP addresses",
        "x": "In this unit, DNS means the Domain Name System, which translates names such as moe.gov.lr into IP addresses."
      },
      {
        "t": "SMTP",
        "d": "the protocol that sends email between servers; IMAP or POP fetch it to a client",
        "x": "In this unit, SMTP means the protocol that sends email between servers; IMAP or POP fetch it to a client."
      },
      {
        "t": "topology",
        "d": "the physical or logical shape in which devices in a network are connected",
        "x": "In this unit, topology means the physical or logical shape in which devices in a network are connected."
      },
      {
        "t": "star topology",
        "d": "every device connected to a central switch or hub",
        "x": "In this unit, star topology means every device connected to a central switch or hub."
      },
      {
        "t": "mesh topology",
        "d": "every device connected to several others, so traffic can route around a failure",
        "x": "In this unit, mesh topology means every device connected to several others, so traffic can route around a failure."
      },
      {
        "t": "full-duplex",
        "d": "communication in both directions at the same time, like a telephone call",
        "x": "In this unit, full-duplex means communication in both directions at the same time, like a telephone call."
      },
      {
        "t": "parity bit",
        "d": "an extra bit added to a group so the number of 1s is even (or odd), used to detect a single-bit error",
        "x": "In this unit, parity bit means an extra bit added to a group so the number of 1s is even (or odd), used to detect a single-bit error."
      },
      {
        "t": "latency",
        "d": "the time a packet takes to travel from sender to receiver, measured in milliseconds",
        "x": "In this unit, latency means the time a packet takes to travel from sender to receiver, measured in milliseconds."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “protocol” in this unit?",
        "a": "a set of agreed rules for how devices communicate, covering format, timing, addressing and error handling."
      },
      {
        "q": "What is meant by “TCP/IP” in this unit?",
        "a": "the family of protocols the internet runs on: IP addresses and routes packets, TCP delivers them reliably in order."
      },
      {
        "q": "What is meant by “layer” in this unit?",
        "a": "one level of a protocol stack that does one job and passes data to the layer above or below."
      },
      {
        "q": "What is meant by “HTTP and HTTPS” in this unit?",
        "a": "the protocols for fetching web pages; HTTPS adds encryption with TLS."
      },
      {
        "q": "What is meant by “DNS” in this unit?",
        "a": "the Domain Name System, which translates names such as moe.gov.lr into IP addresses."
      },
      {
        "q": "What is meant by “SMTP” in this unit?",
        "a": "the protocol that sends email between servers; IMAP or POP fetch it to a client."
      },
      {
        "q": "What is meant by “topology” in this unit?",
        "a": "the physical or logical shape in which devices in a network are connected."
      },
      {
        "q": "What is meant by “star topology” in this unit?",
        "a": "every device connected to a central switch or hub."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A school's lab loses all network contact at once and the technician starts replacing network cables one by one, spending a day before checking the switch."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Reason from the shape: in a star, one broken cable isolates one device, but a total outage points at the shared centre — the switch or its power; check the switch's lights and power first, then the router, and record the reasoning on the fault log so the next outage takes ten minutes."
      },
      {
        "q": "State this unit idea in your own words: A protocol is a set of agreed rules that lets two devices communicate, and the internet stacks its protocols in layers.",
        "a": "A protocol is a set of agreed rules that lets two devices communicate, and the internet stacks its protocols in layers."
      },
      {
        "q": "State this unit idea in your own words: In a star topology every device connects to a central switch, so one failed cable affects one device but a failed switch stops the whole network.",
        "a": "In a star topology every device connects to a central switch, so one failed cable affects one device but a failed switch stops the whole network."
      },
      {
        "q": "What is a protocol and why are protocols arranged in layers?",
        "a": "A protocol is an agreed set of communication rules; layering lets each protocol do one job and be replaced independently, so applications work over any link."
      },
      {
        "q": "Give the difference between bandwidth and latency with an example.",
        "a": "Bandwidth is how much data a link carries per second; latency is how long a packet takes to arrive — a satellite link may have high bandwidth but high latency, which hurts voice calls."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Networks and Data Communication — Protocols and Topologies” Is"
      },
      {
        "k": "p",
        "t": "Grade 8 met the LAN and the packet; Grade 11 asks how the pieces agree. A **protocol** is a set of rules for communication, and the internet stacks them in **layers**: **TCP/IP** at the core, with **HTTP**, **HTTPS**, **SMTP** and **DNS** above. A **topology** — **star**, **bus**, **ring**, **mesh** — is the shape in which devices connect. Data travels as **serial** or **parallel**, **simplex**, **half-duplex** or **full-duplex**, and errors are caught with a **parity bit** or a **checksum**. **Bandwidth** and **latency** measure the line, and a **firewall** guards the door. Technicians who replace twelve cables before checking the switch when a star network fails all at once have ignored the topology. Reason from the shape: in a star, one broken cable isolates one device, but a total outage points at the shared centre — the switch or its power; check the switch's lights and power first, then the router, and record the reasoning on the fault log so the next outage takes ten minutes. A protocol is a set of agreed rules that lets two devices communicate, and the internet stacks its protocols in layers. In a star topology every device connects to a central switch, so one failed cable affects one device but a failed switch stops the whole network."
      },
      {
        "k": "p",
        "t": "Data communication depends on agreed protocols arranged in layers: the TCP/IP model (application, transport, internet, link) with protocols such as HTTP/HTTPS, SMTP/IMAP, FTP, DNS, TCP, UDP and IP. Network topologies (star, bus, ring, mesh) trade cost against reliability. Transmission may be serial or parallel and simplex, half-duplex or full-duplex; parity bits and checksums detect errors. Firewalls, encryption and MAC/IP addressing complete the picture."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: A protocol is a set of agreed rules that lets two devices communicate, and the internet stacks its protocols in layers. In a star topology every device connects to a central switch, so one failed cable affects one device but a failed switch stops the whole network."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Ideas in This Unit"
      },
      {
        "k": "p",
        "t": "Each idea below is a working definition for Grade 11. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
      },
      {
        "k": "table",
        "head": [
          "Term",
          "What it means",
          "A sentence that uses it"
        ],
        "rows": [
          [
            "protocol",
            "a set of agreed rules for how devices communicate, covering format, timing, addressing and error handling",
            "In this unit, protocol means a set of agreed rules for how devices communicate, covering format, timing, addressing and error handling."
          ],
          [
            "TCP/IP",
            "the family of protocols the internet runs on: IP addresses and routes packets, TCP delivers them reliably in order",
            "In this unit, TCP/IP means the family of protocols the internet runs on: IP addresses and routes packets, TCP delivers them reliably in order."
          ],
          [
            "layer",
            "one level of a protocol stack that does one job and passes data to the layer above or below",
            "In this unit, layer means one level of a protocol stack that does one job and passes data to the layer above or below."
          ],
          [
            "HTTP and HTTPS",
            "the protocols for fetching web pages; HTTPS adds encryption with TLS",
            "In this unit, HTTP and HTTPS means the protocols for fetching web pages; HTTPS adds encryption with TLS."
          ],
          [
            "DNS",
            "the Domain Name System, which translates names such as moe.gov.lr into IP addresses",
            "In this unit, DNS means the Domain Name System, which translates names such as moe.gov.lr into IP addresses."
          ],
          [
            "SMTP",
            "the protocol that sends email between servers; IMAP or POP fetch it to a client",
            "In this unit, SMTP means the protocol that sends email between servers; IMAP or POP fetch it to a client."
          ],
          [
            "topology",
            "the physical or logical shape in which devices in a network are connected",
            "In this unit, topology means the physical or logical shape in which devices in a network are connected."
          ],
          [
            "star topology",
            "every device connected to a central switch or hub",
            "In this unit, star topology means every device connected to a central switch or hub."
          ],
          [
            "mesh topology",
            "every device connected to several others, so traffic can route around a failure",
            "In this unit, mesh topology means every device connected to several others, so traffic can route around a failure."
          ],
          [
            "full-duplex",
            "communication in both directions at the same time, like a telephone call",
            "In this unit, full-duplex means communication in both directions at the same time, like a telephone call."
          ],
          [
            "parity bit",
            "an extra bit added to a group so the number of 1s is even (or odd), used to detect a single-bit error",
            "In this unit, parity bit means an extra bit added to a group so the number of 1s is even (or odd), used to detect a single-bit error."
          ],
          [
            "latency",
            "the time a packet takes to travel from sender to receiver, measured in milliseconds",
            "In this unit, latency means the time a packet takes to travel from sender to receiver, measured in milliseconds."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Tell Them Apart"
      },
      {
        "k": "bul",
        "items": [
          "**IP** addresses and routes packets; **TCP** numbers them, checks them and re-sends losses; **UDP** sends without checking, for speed.",
          "**HTTP** — plain; **HTTPS** — encrypted; **DNS** — names to numbers; **SMTP** — sends mail.",
          "**Star** — cheap to fix, switch is the single point of failure; **mesh** — robust, expensive; **bus** — one cable, one break stops all; **ring** — orderly, one break stops all unless dual.",
          "**Simplex** — one way (radio); **half-duplex** — one way at a time (walkie-talkie); **full-duplex** — both at once (phone).",
          "**Bandwidth** — how much per second; **latency** — how long each packet takes; a satellite link has high bandwidth and high latency."
        ]
      },
      {
        "k": "table",
        "head": [
          "TCP/IP layer",
          "Job",
          "Example protocols"
        ],
        "rows": [
          [
            "Application",
            "Provides services to programs",
            "HTTP, HTTPS, SMTP, IMAP, FTP, DNS"
          ],
          [
            "Transport",
            "Breaks data into segments; TCP checks delivery and order, UDP does not",
            "TCP, UDP"
          ],
          [
            "Internet",
            "Addresses and routes packets between networks",
            "IP, ICMP"
          ],
          [
            "Link",
            "Moves frames across one physical link",
            "Ethernet, Wi-Fi"
          ],
          [
            "Physical medium",
            "Carries the bits as electricity, light or radio",
            "Copper, fibre, radio"
          ],
          [
            "Encapsulation",
            "Each layer wraps the data from the layer above with its own header",
            "HTTP inside TCP inside IP inside Ethernet"
          ]
        ]
      },
      {
        "k": "p",
        "t": "A second table for this unit, so the distinction can be practised twice:"
      },
      {
        "k": "table",
        "head": [
          "Topology",
          "Strength",
          "Weakness"
        ],
        "rows": [
          [
            "Star",
            "One failed cable affects one device; easy to add devices",
            "The central switch is a single point of failure"
          ],
          [
            "Bus",
            "Cheap; little cable",
            "One break stops the whole network; collisions"
          ],
          [
            "Ring",
            "Orderly, predictable",
            "One break stops the ring unless a second ring exists"
          ],
          [
            "Mesh",
            "Many paths; survives failures",
            "Expensive; many links"
          ],
          [
            "Wireless (star with an access point)",
            "No cables",
            "Interference; shared bandwidth; security"
          ],
          [
            "Hybrid",
            "Fits real buildings",
            "Complex to manage"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why This Matters in Liberia"
      },
      {
        "k": "p",
        "t": "When a Liberian bank's branch in Buchanan reaches its head office in Monrovia, DNS turns a name into an address, IP routes the packets over the fibre backbone, TCP re-sends the ones the rain dropped, and TLS under HTTPS keeps the balances secret; a school lab is a star around one switch; a satellite link to Lofa has high latency that makes a video call awkward but a download fine. Naming the layer at which something failed — a wrong name (DNS), an unreachable address (IP), a page that will not load though the ping works (application) — is how a Liberian network technician earns a salary, and it can be practised entirely with cards and a chalk diagram."
      },
      {
        "k": "p",
        "t": "This course is an **original teaching resource**, not an official syllabus transcription. A school without a computer lab is not a school without Computer Science. Teachers should compare the unit with the school's approved scheme of work before use."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Paper-First Method"
      },
      {
        "k": "p",
        "t": "The class investigation is **“The layered postal service and the topology stress test”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Pairs act out sending a web request through the layers: the application writes the HTTP request on a card, transport puts it in a numbered envelope (TCP), internet writes the IP addresses on the envelope, link puts it in a labelled bag for the next hop; the receiving side unwraps in reverse order.",
          "A 'DNS' student is consulted first to turn moe.gov.lr into an IP address; the class notes what fails if DNS is down (the name cannot be resolved, though a typed IP address still works).",
          "Groups build star, bus, ring and mesh topologies with string and desk-number cards for six devices, then 'cut' one link and one central device in each and record which devices lose contact.",
          "Pairs compute the even parity bit for four 7-bit codes, corrupt one bit in each, and check whether the receiver detects it; then they try corrupting two bits and explain what parity misses.",
          "If a machine is available, one pair runs ping and nslookup to a known site while the others predict what each result shows about the layers; otherwise the role play, the topology table and the parity sheet are the finished work."
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Worked Example in Prose"
      },
      {
        "k": "p",
        "t": "**Problem.** A school lab of twelve computers is wired as a star around one switch, with a router and a fibre modem. One morning no computer can open any website by name, though a technician can open a page by typing its IP address, and printing works. Identify the layer and the likely service at fault, explain your reasoning, and say what would be different if the switch had failed instead."
      },
      {
        "k": "num",
        "items": [
          "Printing works, so the star LAN, its cables and the switch are fine (link layer inside the LAN).",
          "A page opens by IP address, so IP routing through the router and modem works (internet layer) and the web server is reachable (application layer for HTTP).",
          "Names fail while addresses work, so the fault is name resolution: DNS — the DNS server is down or its setting on the router is wrong.",
          "Fix: check the router's DNS setting or use a known public DNS server; test with nslookup, then reload by name.",
          "If the switch had failed: in a star, every device connects through it, so no computer could print, share files or reach the router — a total LAN outage, unlike this case."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** The fault is at the application layer's DNS service, because IP addresses work and names do not; a failed switch would have stopped all LAN traffic including printing."
      },
      {
        "k": "p",
        "t": "Notice the method: name what you know, run one step at a time, write the result of each step, then state the answer in a full sentence. That is the same habit a Physics class uses on a numerical problem; here the 'calculation' is a trace, a conversion, a truth table, a formula, a query or a debug."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Common Mistakes"
      },
      {
        "k": "bul",
        "items": [
          "Saying 'the internet is down' when only DNS or only the web server has failed.",
          "Confusing bandwidth with latency, so a satellite link with high bandwidth is expected to make snappy video calls.",
          "Believing a parity bit can detect any error; two flipped bits pass unnoticed.",
          "Assuming a star topology fails completely when one cable breaks."
        ]
      },
      {
        "k": "p",
        "t": "The class rule still holds when a mistake appears: **we try, we debug, we do not laugh at a mistake.** A bug is in the steps, not in the person."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Safety, Ethics and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN or a one-time code, and nobody installs software on a school machine without permission. A program written in this course is never pointed at another person's account, phone or wallet: guessing a password, sending bulk messages or reading someone's data without consent is a crime under Liberian law, not a prank. Copying a program from a classmate and submitting it as your own is plagiarism. Pair work shares the thinking, not the credit for work you did not do."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered (screenshots, not deletions), and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Pair Roles: Driver and Navigator"
      },
      {
        "k": "p",
        "t": "A computing pair has two jobs that swap. The **driver** writes or works the next step. The **navigator** reads the algorithm or the listing, watches for a bug, and says 'stop' before a wrong line is copied. After five minutes they swap, so both practise both jobs. A third student may sit as **checker** and tick each step on the trace table. Taking turns is a computing skill, not a punishment for having only one computer — or none."
      },
      {
        "k": "table",
        "head": [
          "Role",
          "What this person does",
          "What this person does not do"
        ],
        "rows": [
          [
            "Driver",
            "Works or writes the current step",
            "Does not skip the navigator's 'stop'"
          ],
          [
            "Navigator",
            "Reads the steps and watches for bugs",
            "Does not grab the pencil, the keyboard or the mouse"
          ],
          [
            "Checker",
            "Ticks each step and records one bug on the class chart",
            "Does not laugh at a mistake"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Fictional Liberian Scenario"
      },
      {
        "k": "p",
        "t": "A school's lab loses all network contact at once and the technician starts replacing network cables one by one, spending a day before checking the switch."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Reason from the shape: in a star, one broken cable isolates one device, but a total outage points at the shared centre — the switch or its power; check the switch's lights and power first, then the router, and record the reasoning on the fault log so the next outage takes ten minutes."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Worked Computing Reasoning"
      },
      {
        "k": "p",
        "t": "Reason from the shape: in a star, one broken cable isolates one device, but a total outage points at the shared centre — the switch or its power; check the switch's lights and power first, then the router, and record the reasoning on the fault log so the next outage takes ten minutes."
      },
      {
        "k": "p",
        "t": "When you answer a scenario question, use this three-part shape: (1) name the computing idea (algorithm, data, network, security, binary, database, …); (2) say what a person should do, in order; (3) say why, with a unit term in the reason. Vague good intentions without a term do not yet show that the unit has been learned."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Practise It on Paper"
      },
      {
        "k": "p",
        "t": "The investigation **“The layered postal service and the topology stress test”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
      },
      {
        "k": "table",
        "head": [
          "Paper object",
          "What it stands for",
          "What we write afterwards"
        ],
        "rows": [
          [
            "Nested envelopes",
            "The protocol layers wrapping a request",
            "The headers written on each layer"
          ],
          [
            "String and desk cards",
            "Network topologies",
            "A table of what fails when a link or the centre is cut"
          ],
          [
            "Parity worksheet",
            "Error detection",
            "Parity bits, one detected error, one missed"
          ],
          [
            "Class chart",
            "Fault-finding rules the class agreed (by layer)",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why Layers"
      },
      {
        "k": "p",
        "t": "Layers let each protocol do one job and let any layer be replaced without touching the others: HTTP does not care whether the link is fibre or Wi-Fi, and Ethernet does not care whether it is carrying a web page or an email. That is why a Grade 9 web page works on any network in Liberia without changing a tag."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "TCP Promises, UDP Hurries"
      },
      {
        "k": "p",
        "t": "TCP numbers segments, acknowledges them and re-sends any that are lost, so a file arrives complete — at the cost of waiting. UDP sends and forgets, so a voice call over a poor Liberian link drops a syllable rather than pausing to re-send it. Choosing between them is choosing between completeness and speed."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Parity and Checksums Detect, They Do Not Correct"
      },
      {
        "k": "p",
        "t": "Even parity adds a bit so the 1s count is even; a single flipped bit makes the count odd and the receiver asks again. A checksum does the same for a whole packet. Neither fixes the error; TCP's re-send does. And two flipped bits can slip past parity, which is why stronger codes exist."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Reading a Fault by Layer"
      },
      {
        "k": "p",
        "t": "Lights on the switch? Link layer. ping to an IP address works? Internet layer. nslookup fails? DNS. Page loads by IP but not by name? DNS again. Page loads but the login fails? Application. Working down (or up) the layers is the whole method of network troubleshooting."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "What a Period Test Asks"
      },
      {
        "k": "p",
        "t": "A fair period test on “Networks and Data Communication — Protocols and Topologies” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit precisely and use each in a sentence.",
          "Solve or trace a problem connected with “Networks and Data Communication — Protocols and Topologies” on paper, showing every line of working.",
          "Classify four examples using “Protocols / Topologies and transmission modes” and justify one placement.",
          "Find and correct a bug in a set of steps, a query or a program, and say what the bug was."
        ]
      },
      {
        "k": "p",
        "t": "Show every step of a tracing or conversion question, the way a Physics script shows working. A bare answer with no steps cannot be given full credit, because the teacher cannot see the method you ran."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Four Weeks of Study"
      },
      {
        "k": "p",
        "t": "A 4-week unit on “Networks and Data Communication — Protocols and Topologies” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
      },
      {
        "k": "table",
        "head": [
          "Week",
          "Study focus",
          "What students leave able to do"
        ],
        "rows": [
          [
            "1",
            "What “Networks and Data Communication — Protocols and Topologies” is, and where it already appears around us.",
            "Say what the unit is about and name two examples from Liberia."
          ],
          [
            "2",
            "Key ideas, distinctions and the unit table.",
            "Use the key terms and complete the distinction tables."
          ],
          [
            "3",
            "A Liberian example and the paper-first method, worked then written.",
            "Run the paper method and write the algorithm, table or report."
          ],
          [
            "4",
            "Worked problems, pair-debug, the computing fair and the period check.",
            "Solve a worked example, debug a bug, and sit the period check."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Check Yourself"
      },
      {
        "k": "p",
        "t": "Close the notes. (1) Say the unit title and one Liberian example. (2) Give the meaning of three terms without looking. (3) Work the paper method once more, showing every step. (4) Name one bug you would look for. (5) Say who you tell if a message asks for a photograph, a PIN or money. If any of those five stalls, go back to the table of terms and the worked example and run them again with a partner. Do not laugh at a bug — including your own."
      },
      {
        "k": "p",
        "t": "This is original supplementary teaching material for Liberian senior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, protocol means a set of agreed rules for how devices communicate, covering format, timing, addressing and error handling.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, TCP/IP means one level of a protocol stack that does one job and passes data to the layer above or below.",
        "a": "False",
        "why": "TCP/IP means the family of protocols the internet runs on: IP addresses and routes packets, TCP delivers them reliably in order; the statement describes layer."
      },
      {
        "s": "In this unit, HTTP and HTTPS means the protocols for fetching web pages; HTTPS adds encryption with TLS.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Every conversion, truth table, trace and program in the unit can be worked on paper; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the code or the steps, not in the person."
      },
      {
        "s": "Students should share passwords, PINs or one-time codes so a partner can finish the work.",
        "a": "False",
        "why": "A password, PIN or one-time code is secret. Sharing one is how accounts and mobile-money wallets are emptied."
      },
      {
        "s": "A protocol is a set of agreed rules that lets two devices communicate, and the internet stacks its protocols in layers.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "A single parity bit can detect any number of bit errors in a byte.",
        "a": "False",
        "why": "Parity detects an odd number of flipped bits; two flipped bits restore the expected parity and pass unnoticed."
      },
      {
        "s": "In a star topology the central switch is a single point of failure.",
        "a": "True",
        "why": "Every device connects through it, so its failure stops all traffic on the LAN."
      }
    ],
    "classify": {
      "title": "Protocols / Topologies and transmission modes",
      "groups": [
        {
          "name": "Protocols",
          "items": [
            "TCP",
            "IP",
            "HTTP",
            "HTTPS",
            "DNS",
            "SMTP"
          ]
        },
        {
          "name": "Topologies and transmission modes",
          "items": [
            "star",
            "bus",
            "ring",
            "mesh",
            "full-duplex",
            "half-duplex"
          ]
        }
      ]
    },
    "diagram": {
      "title": "The TCP/IP layers wrapping a web request",
      "caption": "Label each part and state what it does in “Networks and Data Communication — Protocols and Topologies”.",
      "parts": [
        {
          "p": "Application layer",
          "f": "the HTTP request for a page, after DNS resolved the name"
        },
        {
          "p": "Transport layer",
          "f": "TCP numbers the segments and guarantees delivery"
        },
        {
          "p": "Internet layer",
          "f": "IP adds source and destination addresses and routes the packet"
        },
        {
          "p": "Link layer",
          "f": "Ethernet or Wi-Fi carries the frame across one hop"
        },
        {
          "p": "Physical medium",
          "f": "copper, fibre or radio carrying the bits"
        }
      ]
    },
    "experiment": {
      "title": "The layered postal service and the topology stress test",
      "aim": "To practise the ideas of “Networks and Data Communication — Protocols and Topologies” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Printed listings, cards and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class test log",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “The layered postal service and the topology stress test” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A school's lab loses all network contact at once and the technician starts replacing network cables one by one, spending a day before checking the switch. What should happen next?",
        "a": "Reason from the shape: in a star, one broken cable isolates one device, but a total outage points at the shared centre — the switch or its power; check the switch's lights and power first, then the router, and record the reasoning on the fault log so the next outage takes ten minutes."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Networks and Data Communication — Protocols and Topologies”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's program or trace fails. What do you say, and why?",
        "a": "Remind the class that a bug is in the code or the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the exact line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian working life (a bank, a mobile-money agent, a clinic, a radio station, a business, a ministry).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as a bank's database, a mobile-money transaction, a hospital record, a radio station's schedule or a ministry's website."
      },
      {
        "q": "A clinic in Lofa can only get a satellite link (high bandwidth, 600 ms latency) or a 3G link (low bandwidth, 80 ms latency). Which suits (a) uploading a day's records each evening, (b) a live voice consultation with a doctor in Monrovia? Explain with unit terms.",
        "a": "(a) Satellite: bandwidth matters for a large upload and latency does not; (b) 3G: a conversation needs low latency, and voice uses little bandwidth (and UDP tolerates the odd lost packet)."
      },
      {
        "q": "Compute the even parity bit for 1011001 and 1110000, then show a single-bit error that parity catches and a double-bit error that it misses.",
        "a": "1011001 has four 1s → parity 0; 1110000 has three 1s → parity 1. Flip one bit of 10110010 → odd count, detected; flip two bits → even count again, undetected."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “The layered postal service and the topology stress test” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, squared paper and printed listings",
      "A class computing chart and test log",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's device, kept dry and in sight"
    ],
    "aids": [
      "Word cards — protocol, TCP/IP, layer",
      "A flowchart or trace table of “The layered postal service and the topology stress test”",
      "Layer envelopes, string and desk cards for topologies, and a parity worksheet",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing term and what it means.",
      "Work this week's paper method (a conversion, a truth table, a trace, a query or a design) again with a friend — no device needed.",
      "Find one example of this unit's idea in your community (a bank, a mobile-money kiosk, a clinic, a radio station, a business or a ministry office) and write a paragraph about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written trace, conversion, truth table or query with full working",
      "Pair-debug observed against the class test log",
      "A short written response to the Liberian case scenario"
    ],
    "worked": [
      {
        "q": "Which protocol turns moe.gov.lr into an IP address?",
        "steps": [
          "Names to numbers."
        ],
        "a": "DNS"
      },
      {
        "q": "Which protocol re-sends lost packets and puts them in order?",
        "steps": [
          "Reliable transport."
        ],
        "a": "TCP"
      },
      {
        "q": "Pages open by IP address but not by name. Which service is at fault?",
        "steps": [
          "Name resolution."
        ],
        "a": "DNS"
      },
      {
        "q": "In a star network one cable is cut. How many devices lose contact? And if the switch fails?",
        "steps": [
          "One; all."
        ],
        "a": "One device; every device"
      },
      {
        "q": "Even parity bit for 1011001?",
        "steps": [
          "Four 1s → even already."
        ],
        "a": "0"
      },
      {
        "q": "A walkie-talkie is which transmission mode? A telephone call?",
        "steps": [
          "One at a time; both at once."
        ],
        "a": "Half-duplex; full-duplex"
      },
      {
        "q": "Which matters more for a live voice call: bandwidth or latency?",
        "steps": [
          "Delay hurts conversation."
        ],
        "a": "Latency"
      },
      {
        "q": "Name the four layers of the TCP/IP model from top to bottom.",
        "steps": [
          "Application, transport, internet, link."
        ],
        "a": "Application, transport, internet, link"
      }
    ]
  },
  {
    "grade": 12,
    "period": "I",
    "sem": "One",
    "icon": "☁️",
    "csPlan": true,
    "title": "Web Technologies, Client–Server and Cloud Services",
    "subtitle": "Computer Science · Original senior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Written for classes that may have no computer lab: every conversion, truth table, trace, query and program in the unit can be done on paper, and a shared device extends it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary precisely in speech, writing and examination answers.",
      "Solve the unit's problems on paper — conversions, truth tables, traces, queries, formulas or designs — showing every step of working.",
      "Evaluate a technology choice for its safety, legality, cost and effect on people in Liberia."
    ],
    "objectives": [
      "Define the key terms in “Web Technologies, Client–Server and Cloud Services” precisely and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm, program or procedure connected with this unit, on paper.",
      "Classify examples into the unit's two groups and justify each placement.",
      "Solve a worked example step by step, showing every line of working, and state the answer in a full sentence with its unit or type.",
      "Apply the unit's ideas to a fictional Liberian business, ministry, clinic or school scenario.",
      "Find and correct a bug in a set of steps, a circuit, a query or a program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared test log.",
      "Explain one Liberian example of this unit's idea (mobile money, the ACE submarine cable, a hospital record, a bank, the national examination system or a radio station)."
    ],
    "safeguard": "A senior high computing lesson uses paper traces, truth tables, printed listings and, when one is present, a shared school computer or the teacher's own device. Students never share passwords, PINs or one-time codes, never install software on a school machine without permission, and never photograph, record or post a classmate without consent. A program written in class must never be used to guess a password, send bulk messages or enter another person's account — that is a crime, not a prank. If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "The web works by clients (browsers) sending HTTP requests to servers, which return responses containing HTML (structure), CSS (presentation) and JavaScript (behaviour). Static pages are files; dynamic pages are generated by server-side code, often from a database. Cloud computing delivers infrastructure, platforms and software as services over the internet, trading local control for scalability, backups and cost.",
    "focus": [
      "Worked demonstration on paper",
      "Pair programming and debugging",
      "Liberian case scenario",
      "Practical and period check"
    ],
    "terms": [
      {
        "t": "client–server model",
        "d": "a design in which a client program asks for a service and a server program provides it over a network",
        "x": "In this unit, client–server model means a design in which a client program asks for a service and a server program provides it over a network."
      },
      {
        "t": "HTTP request",
        "d": "the message a browser sends to a web server naming the resource it wants, such as GET /exams.html",
        "x": "In this unit, HTTP request means the message a browser sends to a web server naming the resource it wants, such as GET /exams.html."
      },
      {
        "t": "HTTP response",
        "d": "the message a web server returns, with a status code such as 200 OK or 404 Not Found and the content",
        "x": "In this unit, HTTP response means the message a web server returns, with a status code such as 200 OK or 404 Not Found and the content."
      },
      {
        "t": "CSS",
        "d": "Cascading Style Sheets, the language that controls a page's colours, fonts, spacing and layout",
        "x": "In this unit, CSS means Cascading Style Sheets, the language that controls a page's colours, fonts, spacing and layout."
      },
      {
        "t": "JavaScript",
        "d": "the programming language that runs in the browser to make pages interactive",
        "x": "In this unit, JavaScript means the programming language that runs in the browser to make pages interactive."
      },
      {
        "t": "static web page",
        "d": "a page stored as a fixed file and sent unchanged to every visitor",
        "x": "In this unit, static web page means a page stored as a fixed file and sent unchanged to every visitor."
      },
      {
        "t": "dynamic web page",
        "d": "a page generated by server-side code at the moment it is requested, often from a database",
        "x": "In this unit, dynamic web page means a page generated by server-side code at the moment it is requested, often from a database."
      },
      {
        "t": "server-side",
        "d": "code that runs on the web server, such as Python or PHP that queries a database and builds the page",
        "x": "In this unit, server-side means code that runs on the web server, such as Python or PHP that queries a database and builds the page."
      },
      {
        "t": "client-side",
        "d": "code that runs in the visitor's browser, such as JavaScript that checks a form before it is sent",
        "x": "In this unit, client-side means code that runs in the visitor's browser, such as JavaScript that checks a form before it is sent."
      },
      {
        "t": "cloud computing",
        "d": "using computing resources — servers, storage, software — provided over the internet by a third party",
        "x": "In this unit, cloud computing means using computing resources — servers, storage, software — provided over the internet by a third party."
      },
      {
        "t": "SaaS",
        "d": "software as a service: a complete application used through a browser, such as web email or an online document editor",
        "x": "In this unit, SaaS means software as a service: a complete application used through a browser, such as web email or an online document editor."
      },
      {
        "t": "responsive design",
        "d": "CSS that adapts a page's layout to the width of the screen so it works on phones and laptops",
        "x": "In this unit, responsive design means CSS that adapts a page's layout to the width of the screen so it works on phones and laptops."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “client–server model” in this unit?",
        "a": "a design in which a client program asks for a service and a server program provides it over a network."
      },
      {
        "q": "What is meant by “HTTP request” in this unit?",
        "a": "the message a browser sends to a web server naming the resource it wants, such as GET /exams.html."
      },
      {
        "q": "What is meant by “HTTP response” in this unit?",
        "a": "the message a web server returns, with a status code such as 200 OK or 404 Not Found and the content."
      },
      {
        "q": "What is meant by “CSS” in this unit?",
        "a": "Cascading Style Sheets, the language that controls a page's colours, fonts, spacing and layout."
      },
      {
        "q": "What is meant by “JavaScript” in this unit?",
        "a": "the programming language that runs in the browser to make pages interactive."
      },
      {
        "q": "What is meant by “static web page” in this unit?",
        "a": "a page stored as a fixed file and sent unchanged to every visitor."
      },
      {
        "q": "What is meant by “dynamic web page” in this unit?",
        "a": "a page generated by server-side code at the moment it is requested, often from a database."
      },
      {
        "q": "What is meant by “server-side” in this unit?",
        "a": "code that runs on the web server, such as Python or PHP that queries a database and builds the page."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A school moves its only copy of the student records to a free cloud drive; six months later the account is suspended for an unpaid upgrade and the office has no connection to argue with anyone."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Name the design error — no local copy and no read agreement — then fix it: keep the master locally with a dated backup, use the cloud as a second copy, read the provider's terms, budget for the subscription in local currency, and test restoring a file every term."
      },
      {
        "q": "State this unit idea in your own words: HTML gives a page its structure, CSS gives it its appearance and JavaScript gives it its behaviour.",
        "a": "HTML gives a page its structure, CSS gives it its appearance and JavaScript gives it its behaviour."
      },
      {
        "q": "State this unit idea in your own words: In the client–server model the browser asks with an HTTP request and the server answers with an HTTP response.",
        "a": "In the client–server model the browser asks with an HTTP request and the server answers with an HTTP response."
      },
      {
        "q": "Describe the client–server model of the web in two sentences.",
        "a": "The browser (client) sends an HTTP request to a web server for a resource. The server returns an HTTP response with a status code and the content, which the browser renders."
      },
      {
        "q": "Name the three cloud service levels and give an example of each.",
        "a": "IaaS (a rented virtual server), PaaS (a platform that runs your code), SaaS (web email or an online document editor)."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Web Technologies, Client–Server and Cloud Services” Is"
      },
      {
        "k": "p",
        "t": "The web is a **client–server** system: a **browser** (the client) sends an **HTTP request**, a **web server** sends back an **HTTP response** carrying **HTML** for structure, **CSS** for appearance and **JavaScript** for behaviour. Pages may be **static** files or generated **dynamically** from a database. **Cloud computing** moves servers, storage and software to providers reached over the internet — **IaaS**, **PaaS**, **SaaS** — with benefits for a Liberian school and risks that a Grade 12 student should be able to weigh. Schools that move their only copy of records to a free cloud drive and lose the account have confused 'in the cloud' with 'safe'. Name the design error — no local copy and no read agreement — then fix it: keep the master locally with a dated backup, use the cloud as a second copy, read the provider's terms, budget for the subscription in local currency, and test restoring a file every term. HTML gives a page its structure, CSS gives it its appearance and JavaScript gives it its behaviour. In the client–server model the browser asks with an HTTP request and the server answers with an HTTP response."
      },
      {
        "k": "p",
        "t": "The web works by clients (browsers) sending HTTP requests to servers, which return responses containing HTML (structure), CSS (presentation) and JavaScript (behaviour). Static pages are files; dynamic pages are generated by server-side code, often from a database. Cloud computing delivers infrastructure, platforms and software as services over the internet, trading local control for scalability, backups and cost."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: HTML gives a page its structure, CSS gives it its appearance and JavaScript gives it its behaviour. In the client–server model the browser asks with an HTTP request and the server answers with an HTTP response."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Ideas in This Unit"
      },
      {
        "k": "p",
        "t": "Each idea below is a working definition for Grade 12. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
      },
      {
        "k": "table",
        "head": [
          "Term",
          "What it means",
          "A sentence that uses it"
        ],
        "rows": [
          [
            "client–server model",
            "a design in which a client program asks for a service and a server program provides it over a network",
            "In this unit, client–server model means a design in which a client program asks for a service and a server program provides it over a network."
          ],
          [
            "HTTP request",
            "the message a browser sends to a web server naming the resource it wants, such as GET /exams.html",
            "In this unit, HTTP request means the message a browser sends to a web server naming the resource it wants, such as GET /exams.html."
          ],
          [
            "HTTP response",
            "the message a web server returns, with a status code such as 200 OK or 404 Not Found and the content",
            "In this unit, HTTP response means the message a web server returns, with a status code such as 200 OK or 404 Not Found and the content."
          ],
          [
            "CSS",
            "Cascading Style Sheets, the language that controls a page's colours, fonts, spacing and layout",
            "In this unit, CSS means Cascading Style Sheets, the language that controls a page's colours, fonts, spacing and layout."
          ],
          [
            "JavaScript",
            "the programming language that runs in the browser to make pages interactive",
            "In this unit, JavaScript means the programming language that runs in the browser to make pages interactive."
          ],
          [
            "static web page",
            "a page stored as a fixed file and sent unchanged to every visitor",
            "In this unit, static web page means a page stored as a fixed file and sent unchanged to every visitor."
          ],
          [
            "dynamic web page",
            "a page generated by server-side code at the moment it is requested, often from a database",
            "In this unit, dynamic web page means a page generated by server-side code at the moment it is requested, often from a database."
          ],
          [
            "server-side",
            "code that runs on the web server, such as Python or PHP that queries a database and builds the page",
            "In this unit, server-side means code that runs on the web server, such as Python or PHP that queries a database and builds the page."
          ],
          [
            "client-side",
            "code that runs in the visitor's browser, such as JavaScript that checks a form before it is sent",
            "In this unit, client-side means code that runs in the visitor's browser, such as JavaScript that checks a form before it is sent."
          ],
          [
            "cloud computing",
            "using computing resources — servers, storage, software — provided over the internet by a third party",
            "In this unit, cloud computing means using computing resources — servers, storage, software — provided over the internet by a third party."
          ],
          [
            "SaaS",
            "software as a service: a complete application used through a browser, such as web email or an online document editor",
            "In this unit, SaaS means software as a service: a complete application used through a browser, such as web email or an online document editor."
          ],
          [
            "responsive design",
            "CSS that adapts a page's layout to the width of the screen so it works on phones and laptops",
            "In this unit, responsive design means CSS that adapts a page's layout to the width of the screen so it works on phones and laptops."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Tell Them Apart"
      },
      {
        "k": "bul",
        "items": [
          "**HTML** — what is on the page; **CSS** — how it looks; **JavaScript** — what it does.",
          "**Client-side** runs in the browser (fast, visible, not trusted); **server-side** runs on the server (trusted, has the database).",
          "**Static** — same file for everyone; **dynamic** — built for each request.",
          "**IaaS** — rent servers; **PaaS** — rent a platform to run your code; **SaaS** — rent the finished software.",
          "**200** — OK; **404** — not found; **500** — server error; **403** — forbidden."
        ]
      },
      {
        "k": "table",
        "head": [
          "Technology",
          "Runs where",
          "Example on a school site"
        ],
        "rows": [
          [
            "HTML",
            "Written by the author, read by the browser",
            "<h1>Exam Dates</h1>"
          ],
          [
            "CSS",
            "Applied by the browser",
            "h1 { color: navy; font-size: 2em; }"
          ],
          [
            "JavaScript (client-side)",
            "In the browser",
            "Checking that a form's date is not in the past"
          ],
          [
            "Server-side code",
            "On the web server",
            "Querying the results database for a candidate number"
          ],
          [
            "Database",
            "On a database server",
            "The table of candidates and grades"
          ],
          [
            "HTTP",
            "Between browser and server",
            "GET /results?candidate=1234 → 200 OK"
          ]
        ]
      },
      {
        "k": "p",
        "t": "A second table for this unit, so the distinction can be practised twice:"
      },
      {
        "k": "table",
        "head": [
          "Cloud service level",
          "You manage",
          "Provider manages",
          "Example"
        ],
        "rows": [
          [
            "IaaS (infrastructure)",
            "Operating system, software, data",
            "Hardware, network, power",
            "A rented virtual server"
          ],
          [
            "PaaS (platform)",
            "Your code and data",
            "Servers, operating system, runtime",
            "A platform that runs your Python web app"
          ],
          [
            "SaaS (software)",
            "Your data and users",
            "Everything else",
            "Web email, online documents"
          ],
          [
            "Cloud storage",
            "What you upload",
            "Disks, backups, replication",
            "School records backed up online"
          ],
          [
            "On-premises (not cloud)",
            "Everything",
            "Nothing",
            "The lab server in the cupboard"
          ],
          [
            "Hybrid",
            "Some parts",
            "Other parts",
            "Local lab plus cloud backup"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why This Matters in Liberia"
      },
      {
        "k": "p",
        "t": "The WAEC results portal, a university's online application, a ministry's circular page and a Monrovia shop's order form are client–server systems; a rural school's records backed up to a cloud drive survive the fire that takes the office. But the cloud runs on a connection Liberia does not always have, on servers in other countries under other laws, and on a subscription paid in foreign currency. A Grade 12 student should be able to write a small page with CSS, explain a 404, and argue both sides of 'should the school move its records to the cloud' with unit terms and Liberian facts."
      },
      {
        "k": "p",
        "t": "This course is an **original teaching resource**, not an official syllabus transcription. A school without a computer lab is not a school without Computer Science. Teachers should compare the unit with the school's approved scheme of work before use."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Paper-First Method"
      },
      {
        "k": "p",
        "t": "The class investigation is **“The request–response walk and the styled school page”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Two students act as browser and server: the browser writes GET /exams.html on a card and passes it across the room; the server finds the file (or not), writes 200 OK or 404 Not Found with the content, and passes it back; the class notes the status codes.",
          "Pairs take the Grade 9 HTML school page and write a CSS sheet on paper: a navy h1, a readable body font, a maximum width, and a rule that stacks the layout on narrow screens; a partner 'renders' it in colour on a screen sheet.",
          "They add one client-side check in plain JavaScript pseudocode (a form that refuses an empty name) and one server-side step in words (look up the candidate number in the results table) and label which runs where.",
          "Groups debate 'move the school records to the cloud' for and against, each side using at least four unit terms and two Liberian facts (connection, cost, power, law), and record the strongest points in a table.",
          "If a machine is available, one pair links the CSS to the HTML and opens it while the others compare it with the coloured render; otherwise the paper page, the CSS and the debate table are the finished work."
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Worked Example in Prose"
      },
      {
        "k": "p",
        "t": "**Problem.** A student types https://results.example.lr/check?cand=1234 into a browser. Describe what happens from the request to the page appearing, naming the client, the server, the protocol, the status code for success, and which parts are HTML, CSS, JavaScript and server-side code. Then state what the student sees if the candidate number does not exist and the server returns 404."
      },
      {
        "k": "num",
        "items": [
          "The browser (client) resolves the name with DNS and sends an HTTPS GET request for /check?cand=1234 to the web server.",
          "Server-side code reads cand=1234, queries the results database, and builds a dynamic HTML page with the candidate's grades.",
          "The server returns an HTTP response with status 200 OK, the HTML, links to a CSS file for the layout and colours, and JavaScript that, for example, lets the student print the page.",
          "The browser renders the HTML, applies the CSS and runs the JavaScript; the page appears.",
          "If the number does not exist the server returns 404 Not Found with a short page saying the candidate was not found; the browser shows that page instead."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** Client browser → HTTPS GET → server-side code queries the database → 200 OK response with HTML, CSS and JavaScript → browser renders; a missing candidate returns 404 and a not-found page."
      },
      {
        "k": "p",
        "t": "Notice the method: name what you know, run one step at a time, write the result of each step, then state the answer in a full sentence. That is the same habit a Physics class uses on a numerical problem; here the 'calculation' is a trace, a conversion, a truth table, a formula, a query or a debug."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Common Mistakes"
      },
      {
        "k": "bul",
        "items": [
          "Putting colours and fonts in HTML tags instead of CSS, so every page must be edited to change the look.",
          "Trusting a client-side JavaScript check as security; the server must check again.",
          "Calling every online service 'the cloud' without saying which level is being rented.",
          "Forgetting that a cloud service is unreachable when the connection or the subscription lapses."
        ]
      },
      {
        "k": "p",
        "t": "The class rule still holds when a mistake appears: **we try, we debug, we do not laugh at a mistake.** A bug is in the steps, not in the person."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Safety, Ethics and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN or a one-time code, and nobody installs software on a school machine without permission. A program written in this course is never pointed at another person's account, phone or wallet: guessing a password, sending bulk messages or reading someone's data without consent is a crime under Liberian law, not a prank. Copying a program from a classmate and submitting it as your own is plagiarism. Pair work shares the thinking, not the credit for work you did not do."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered (screenshots, not deletions), and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Pair Roles: Driver and Navigator"
      },
      {
        "k": "p",
        "t": "A computing pair has two jobs that swap. The **driver** writes or works the next step. The **navigator** reads the algorithm or the listing, watches for a bug, and says 'stop' before a wrong line is copied. After five minutes they swap, so both practise both jobs. A third student may sit as **checker** and tick each step on the trace table. Taking turns is a computing skill, not a punishment for having only one computer — or none."
      },
      {
        "k": "table",
        "head": [
          "Role",
          "What this person does",
          "What this person does not do"
        ],
        "rows": [
          [
            "Driver",
            "Works or writes the current step",
            "Does not skip the navigator's 'stop'"
          ],
          [
            "Navigator",
            "Reads the steps and watches for bugs",
            "Does not grab the pencil, the keyboard or the mouse"
          ],
          [
            "Checker",
            "Ticks each step and records one bug on the class chart",
            "Does not laugh at a mistake"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Fictional Liberian Scenario"
      },
      {
        "k": "p",
        "t": "A school moves its only copy of the student records to a free cloud drive; six months later the account is suspended for an unpaid upgrade and the office has no connection to argue with anyone."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Name the design error — no local copy and no read agreement — then fix it: keep the master locally with a dated backup, use the cloud as a second copy, read the provider's terms, budget for the subscription in local currency, and test restoring a file every term."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Worked Computing Reasoning"
      },
      {
        "k": "p",
        "t": "Name the design error — no local copy and no read agreement — then fix it: keep the master locally with a dated backup, use the cloud as a second copy, read the provider's terms, budget for the subscription in local currency, and test restoring a file every term."
      },
      {
        "k": "p",
        "t": "When you answer a scenario question, use this three-part shape: (1) name the computing idea (algorithm, data, network, security, binary, database, …); (2) say what a person should do, in order; (3) say why, with a unit term in the reason. Vague good intentions without a term do not yet show that the unit has been learned."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Practise It on Paper"
      },
      {
        "k": "p",
        "t": "The investigation **“The request–response walk and the styled school page”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
      },
      {
        "k": "table",
        "head": [
          "Paper object",
          "What it stands for",
          "What we write afterwards"
        ],
        "rows": [
          [
            "Request and response cards",
            "HTTP between client and server",
            "The request line, status code and content"
          ],
          [
            "CSS sheet",
            "The page's appearance",
            "Rules applied to the Grade 9 HTML page"
          ],
          [
            "Debate table",
            "Cloud benefits and risks",
            "Four terms and two Liberian facts per side"
          ],
          [
            "Class chart",
            "Web bugs the class found (style in HTML, trusting the client)",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Separate Structure, Style and Behaviour"
      },
      {
        "k": "p",
        "t": "One HTML file for content, one CSS file shared by every page, one JavaScript file for behaviour. Change the school colour in one CSS rule and forty pages update. Mixing them is the commonest reason a small Liberian website becomes impossible to maintain after its author leaves."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Never Trust the Client"
      },
      {
        "k": "p",
        "t": "JavaScript in the browser can be switched off or edited by the visitor. A form check on the client saves a round trip; the server must repeat every check before touching the database. Any Liberian results or payment site that forgets this will be attacked."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "What the Cloud Buys and Costs"
      },
      {
        "k": "p",
        "t": "Buys: backups in another place, servers that grow on demand, software kept up to date by someone else. Costs: a subscription in foreign currency, dependence on a connection and a provider, data under another country's law. The right answer for a school is usually a local master plus a cloud copy."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Status Codes Are the Server Talking"
      },
      {
        "k": "p",
        "t": "200 OK; 301 moved; 403 forbidden; 404 not found; 500 the server crashed. Reading the code tells you whether the fault is the address (404), your permission (403) or the server's code (500) — before you call anyone."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "What a Period Test Asks"
      },
      {
        "k": "p",
        "t": "A fair period test on “Web Technologies, Client–Server and Cloud Services” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit precisely and use each in a sentence.",
          "Solve or trace a problem connected with “Web Technologies, Client–Server and Cloud Services” on paper, showing every line of working.",
          "Classify four examples using “Client-side (in the browser) / Server-side (on the server)” and justify one placement.",
          "Find and correct a bug in a set of steps, a query or a program, and say what the bug was."
        ]
      },
      {
        "k": "p",
        "t": "Show every step of a tracing or conversion question, the way a Physics script shows working. A bare answer with no steps cannot be given full credit, because the teacher cannot see the method you ran."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Four Weeks of Study"
      },
      {
        "k": "p",
        "t": "A 4-week unit on “Web Technologies, Client–Server and Cloud Services” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
      },
      {
        "k": "table",
        "head": [
          "Week",
          "Study focus",
          "What students leave able to do"
        ],
        "rows": [
          [
            "1",
            "What “Web Technologies, Client–Server and Cloud Services” is, and where it already appears around us.",
            "Say what the unit is about and name two examples from Liberia."
          ],
          [
            "2",
            "Key ideas, distinctions and the unit table.",
            "Use the key terms and complete the distinction tables."
          ],
          [
            "3",
            "A Liberian example and the paper-first method, worked then written.",
            "Run the paper method and write the algorithm, table or report."
          ],
          [
            "4",
            "Worked problems, pair-debug, the computing fair and the period check.",
            "Solve a worked example, debug a bug, and sit the period check."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Check Yourself"
      },
      {
        "k": "p",
        "t": "Close the notes. (1) Say the unit title and one Liberian example. (2) Give the meaning of three terms without looking. (3) Work the paper method once more, showing every step. (4) Name one bug you would look for. (5) Say who you tell if a message asks for a photograph, a PIN or money. If any of those five stalls, go back to the table of terms and the worked example and run them again with a partner. Do not laugh at a bug — including your own."
      },
      {
        "k": "p",
        "t": "This is original supplementary teaching material for Liberian senior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, client–server model means a design in which a client program asks for a service and a server program provides it over a network.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, HTTP request means the message a web server returns, with a status code such as 200 OK or 404 Not Found and the content.",
        "a": "False",
        "why": "HTTP request means the message a browser sends to a web server naming the resource it wants, such as GET /exams.html; the statement describes HTTP response."
      },
      {
        "s": "In this unit, CSS means Cascading Style Sheets, the language that controls a page's colours, fonts, spacing and layout.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Every conversion, truth table, trace and program in the unit can be worked on paper; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the code or the steps, not in the person."
      },
      {
        "s": "Students should share passwords, PINs or one-time codes so a partner can finish the work.",
        "a": "False",
        "why": "A password, PIN or one-time code is secret. Sharing one is how accounts and mobile-money wallets are emptied."
      },
      {
        "s": "HTML gives a page its structure, CSS gives it its appearance and JavaScript gives it its behaviour.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "A form check written in browser JavaScript is enough to protect a database from bad data.",
        "a": "False",
        "why": "Client-side code can be bypassed; the server must validate every input again."
      },
      {
        "s": "HTTP status code 404 means the requested resource was not found on the server.",
        "a": "True",
        "why": "200 means OK, 404 not found, 500 a server error."
      }
    ],
    "classify": {
      "title": "Client-side (in the browser) / Server-side (on the server)",
      "groups": [
        {
          "name": "Client-side (in the browser)",
          "items": [
            "HTML rendering",
            "CSS applied to the page",
            "JavaScript form check",
            "the HTTP request being sent",
            "displaying a 404 page",
            "responsive layout on a phone"
          ]
        },
        {
          "name": "Server-side (on the server)",
          "items": [
            "querying the results database",
            "building a dynamic page",
            "returning 200 OK",
            "checking the candidate number again",
            "storing uploaded files",
            "logging each request"
          ]
        }
      ]
    },
    "diagram": {
      "title": "The client–server request and response",
      "caption": "Label each part and state what it does in “Web Technologies, Client–Server and Cloud Services”.",
      "parts": [
        {
          "p": "Browser (client)",
          "f": "sends an HTTP GET request for a page"
        },
        {
          "p": "DNS",
          "f": "turns the site name into the server's IP address first"
        },
        {
          "p": "Web server",
          "f": "finds a static file or runs server-side code to build a dynamic page"
        },
        {
          "p": "Database",
          "f": "queried by the server-side code for the data"
        },
        {
          "p": "HTTP response",
          "f": "status code plus HTML, CSS and JavaScript that the browser renders"
        }
      ]
    },
    "experiment": {
      "title": "The request–response walk and the styled school page",
      "aim": "To practise the ideas of “Web Technologies, Client–Server and Cloud Services” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Printed listings, cards and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class test log",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “The request–response walk and the styled school page” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A school moves its only copy of the student records to a free cloud drive; six months later the account is suspended for an unpaid upgrade and the office has no connection to argue with anyone. What should happen next?",
        "a": "Name the design error — no local copy and no read agreement — then fix it: keep the master locally with a dated backup, use the cloud as a second copy, read the provider's terms, budget for the subscription in local currency, and test restoring a file every term."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Web Technologies, Client–Server and Cloud Services”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's program or trace fails. What do you say, and why?",
        "a": "Remind the class that a bug is in the code or the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the exact line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian working life (a bank, a mobile-money agent, a clinic, a radio station, a business, a ministry).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as a bank's database, a mobile-money transaction, a hospital record, a radio station's schedule or a ministry's website."
      },
      {
        "q": "Write CSS to make every h1 navy and centred, the body text 18 px in a readable font, and the page no wider than 800 px. Say which HTML file(s) change.",
        "a": "h1 { color: navy; text-align: center; } body { font-size: 18px; font-family: Arial, sans-serif; max-width: 800px; margin: auto; } — no HTML file changes; each page only links the one style sheet."
      },
      {
        "q": "Compare running the school's records on a lab server versus SaaS in the cloud under four headings: cost, connection, backup, control. Recommend a plan for a school in Nimba.",
        "a": "Accept a reasoned table; a typical recommendation: local master on the lab server for daily use without connection, a cloud backup synchronised when the link is up, a small subscription budgeted in advance, and a written note of where the data is held."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “The request–response walk and the styled school page” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, squared paper and printed listings",
      "A class computing chart and test log",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's device, kept dry and in sight"
    ],
    "aids": [
      "Word cards — client–server model, HTTP request, HTTP response",
      "A flowchart or trace table of “The request–response walk and the styled school page”",
      "Request and response cards, a CSS reference sheet and a cloud-debate table",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing term and what it means.",
      "Work this week's paper method (a conversion, a truth table, a trace, a query or a design) again with a friend — no device needed.",
      "Find one example of this unit's idea in your community (a bank, a mobile-money kiosk, a clinic, a radio station, a business or a ministry office) and write a paragraph about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written trace, conversion, truth table or query with full working",
      "Pair-debug observed against the class test log",
      "A short written response to the Liberian case scenario"
    ],
    "worked": [
      {
        "q": "Which language gives a page its structure, which its appearance, which its behaviour?",
        "steps": [
          "HTML, CSS, JavaScript."
        ],
        "a": "HTML; CSS; JavaScript"
      },
      {
        "q": "A browser sends GET /exams.html and the file exists. What status code returns?",
        "steps": [
          "Success."
        ],
        "a": "200 OK"
      },
      {
        "q": "The file does not exist. Status code?",
        "steps": [
          "Not found."
        ],
        "a": "404"
      },
      {
        "q": "Code that queries the results database runs where?",
        "steps": [
          "Trusted side with the database."
        ],
        "a": "On the server (server-side)"
      },
      {
        "q": "Web email used through a browser is which cloud level?",
        "steps": [
          "Finished software."
        ],
        "a": "SaaS"
      },
      {
        "q": "Why must the server repeat a check already done in browser JavaScript?",
        "steps": [
          "Client can be altered."
        ],
        "a": "Client-side code can be switched off or edited by the visitor"
      },
      {
        "q": "Is a page built from a database at each request static or dynamic?",
        "steps": [
          "Generated per request."
        ],
        "a": "Dynamic"
      },
      {
        "q": "Give one benefit and one risk of cloud backup for a Liberian school.",
        "steps": [
          "Survives fire; needs connection and money."
        ],
        "a": "Records survive a local disaster; the copy is unreachable without connection or subscription"
      }
    ]
  },
  {
    "grade": 12,
    "period": "II",
    "sem": "One",
    "icon": "⚖️",
    "csPlan": true,
    "title": "Computer Security, Ethics and Law",
    "subtitle": "Computer Science · Original senior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Written for classes that may have no computer lab: every conversion, truth table, trace, query and program in the unit can be done on paper, and a shared device extends it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary precisely in speech, writing and examination answers.",
      "Solve the unit's problems on paper — conversions, truth tables, traces, queries, formulas or designs — showing every step of working.",
      "Evaluate a technology choice for its safety, legality, cost and effect on people in Liberia."
    ],
    "objectives": [
      "Define the key terms in “Computer Security, Ethics and Law” precisely and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm, program or procedure connected with this unit, on paper.",
      "Classify examples into the unit's two groups and justify each placement.",
      "Solve a worked example step by step, showing every line of working, and state the answer in a full sentence with its unit or type.",
      "Apply the unit's ideas to a fictional Liberian business, ministry, clinic or school scenario.",
      "Find and correct a bug in a set of steps, a circuit, a query or a program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared test log.",
      "Explain one Liberian example of this unit's idea (mobile money, the ACE submarine cable, a hospital record, a bank, the national examination system or a radio station)."
    ],
    "safeguard": "A senior high computing lesson uses paper traces, truth tables, printed listings and, when one is present, a shared school computer or the teacher's own device. Students never share passwords, PINs or one-time codes, never install software on a school machine without permission, and never photograph, record or post a classmate without consent. A program written in class must never be used to guess a password, send bulk messages or enter another person's account — that is a crime, not a prank. If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "Information security aims at confidentiality, integrity and availability (the CIA triad). Controls include encryption (symmetric and public-key), hashing of passwords, authentication and access control, firewalls, backups, patching and audit logs. Threats include malware, denial of service, SQL injection, phishing and insider misuse. Ethics and law cover data protection and privacy, intellectual property and licensing, computer-misuse offences, and the professional responsibilities of those who handle data.",
    "focus": [
      "Worked demonstration on paper",
      "Pair programming and debugging",
      "Liberian case scenario",
      "Practical and period check"
    ],
    "terms": [
      {
        "t": "confidentiality",
        "d": "keeping data readable only by those authorised to read it",
        "x": "In this unit, confidentiality means keeping data readable only by those authorised to read it."
      },
      {
        "t": "integrity",
        "d": "keeping data correct, complete and unaltered except by authorised changes",
        "x": "In this unit, integrity means keeping data correct, complete and unaltered except by authorised changes."
      },
      {
        "t": "availability",
        "d": "keeping systems and data usable when they are needed",
        "x": "In this unit, availability means keeping systems and data usable when they are needed."
      },
      {
        "t": "encryption",
        "d": "transforming data with a key so that it is unreadable without the matching key",
        "x": "In this unit, encryption means transforming data with a key so that it is unreadable without the matching key."
      },
      {
        "t": "public-key encryption",
        "d": "encryption with a pair of keys — a public key to lock and a private key to unlock — used by HTTPS and digital signatures",
        "x": "In this unit, public-key encryption means encryption with a pair of keys — a public key to lock and a private key to unlock — used by HTTPS and digital signatures."
      },
      {
        "t": "hashing",
        "d": "turning data into a fixed-length code that cannot be reversed, used to store passwords and check files",
        "x": "In this unit, hashing means turning data into a fixed-length code that cannot be reversed, used to store passwords and check files."
      },
      {
        "t": "authentication",
        "d": "proving identity with something you know, have or are: a password, a phone code, a fingerprint",
        "x": "In this unit, authentication means proving identity with something you know, have or are: a password, a phone code, a fingerprint."
      },
      {
        "t": "access control",
        "d": "rules that decide which users may read, change or delete which data",
        "x": "In this unit, access control means rules that decide which users may read, change or delete which data."
      },
      {
        "t": "SQL injection",
        "d": "an attack that types SQL into a form field so that a careless program runs it against the database",
        "x": "In this unit, SQL injection means an attack that types SQL into a form field so that a careless program runs it against the database."
      },
      {
        "t": "denial of service",
        "d": "an attack that floods a server with requests so that real users cannot be served",
        "x": "In this unit, denial of service means an attack that floods a server with requests so that real users cannot be served."
      },
      {
        "t": "data protection",
        "d": "laws and rules that govern how personal data may be collected, stored, used and shared",
        "x": "In this unit, data protection means laws and rules that govern how personal data may be collected, stored, used and shared."
      },
      {
        "t": "intellectual property",
        "d": "legal rights over creations of the mind — software, writing, music — including copyright and licences",
        "x": "In this unit, intellectual property means legal rights over creations of the mind — software, writing, music — including copyright and licences."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “confidentiality” in this unit?",
        "a": "keeping data readable only by those authorised to read it."
      },
      {
        "q": "What is meant by “integrity” in this unit?",
        "a": "keeping data correct, complete and unaltered except by authorised changes."
      },
      {
        "q": "What is meant by “availability” in this unit?",
        "a": "keeping systems and data usable when they are needed."
      },
      {
        "q": "What is meant by “encryption” in this unit?",
        "a": "transforming data with a key so that it is unreadable without the matching key."
      },
      {
        "q": "What is meant by “public-key encryption” in this unit?",
        "a": "encryption with a pair of keys — a public key to lock and a private key to unlock — used by HTTPS and digital signatures."
      },
      {
        "q": "What is meant by “hashing” in this unit?",
        "a": "turning data into a fixed-length code that cannot be reversed, used to store passwords and check files."
      },
      {
        "q": "What is meant by “authentication” in this unit?",
        "a": "proving identity with something you know, have or are: a password, a phone code, a fingerprint."
      },
      {
        "q": "What is meant by “access control” in this unit?",
        "a": "rules that decide which users may read, change or delete which data."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A Grade 12 group's project login form accepts the username ' OR '1'='1 and logs in as the first user, and they say nobody would ever type that."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Name the attack, show the SQL their code builds, and fix it: validate the input, use parameterised queries so data can never become code, hash the stored passwords, and add the test string to the project's test log — attackers type exactly what nobody would."
      },
      {
        "q": "State this unit idea in your own words: Security protects confidentiality, integrity and availability — who can read data, whether it is correct and unaltered, and whether it is there when needed.",
        "a": "Security protects confidentiality, integrity and availability — who can read data, whether it is correct and unaltered, and whether it is there when needed."
      },
      {
        "q": "State this unit idea in your own words: Passwords are stored as hashes, not as text, so a stolen database does not give up the passwords themselves.",
        "a": "Passwords are stored as hashes, not as text, so a stolen database does not give up the passwords themselves."
      },
      {
        "q": "What is SQL injection and how is it prevented?",
        "a": "An attack in which SQL typed into a form field is run by a careless program; prevented by validating input and using parameterised queries so user data is never treated as code."
      },
      {
        "q": "Give one difference between symmetric and public-key encryption.",
        "a": "Symmetric uses one shared secret key for both locking and unlocking; public-key uses a public key to lock and a private key to unlock, so no secret has to be shared in advance."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Computer Security, Ethics and Law” Is"
      },
      {
        "k": "p",
        "t": "Security has three goals — **confidentiality**, **integrity** and **availability** — and a toolkit to reach them: **encryption** with **symmetric** or **public-key** methods, **hashing** for stored passwords, **authentication** and **access control**, **firewalls**, **backups** and **audit logs**. The threats are technical — **malware**, **denial of service**, **SQL injection** — and human — phishing and insider misuse. Around it all sit **ethics** (what should be done) and **law** (what must be done): data protection, **intellectual property**, computer-misuse offences and the professional duties of anyone who holds other people's data in Liberia. Groups whose login accepts ' OR '1'='1 and reply that nobody would ever type it have met SQL injection and dismissed it. Name the attack, show the SQL their code builds, and fix it: validate the input, use parameterised queries so data can never become code, hash the stored passwords, and add the test string to the project's test log — attackers type exactly what nobody would. Security protects confidentiality, integrity and availability — who can read data, whether it is correct and unaltered, and whether it is there when needed. Passwords are stored as hashes, not as text, so a stolen database does not give up the passwords themselves."
      },
      {
        "k": "p",
        "t": "Information security aims at confidentiality, integrity and availability (the CIA triad). Controls include encryption (symmetric and public-key), hashing of passwords, authentication and access control, firewalls, backups, patching and audit logs. Threats include malware, denial of service, SQL injection, phishing and insider misuse. Ethics and law cover data protection and privacy, intellectual property and licensing, computer-misuse offences, and the professional responsibilities of those who handle data."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: Security protects confidentiality, integrity and availability — who can read data, whether it is correct and unaltered, and whether it is there when needed. Passwords are stored as hashes, not as text, so a stolen database does not give up the passwords themselves."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Ideas in This Unit"
      },
      {
        "k": "p",
        "t": "Each idea below is a working definition for Grade 12. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
      },
      {
        "k": "table",
        "head": [
          "Term",
          "What it means",
          "A sentence that uses it"
        ],
        "rows": [
          [
            "confidentiality",
            "keeping data readable only by those authorised to read it",
            "In this unit, confidentiality means keeping data readable only by those authorised to read it."
          ],
          [
            "integrity",
            "keeping data correct, complete and unaltered except by authorised changes",
            "In this unit, integrity means keeping data correct, complete and unaltered except by authorised changes."
          ],
          [
            "availability",
            "keeping systems and data usable when they are needed",
            "In this unit, availability means keeping systems and data usable when they are needed."
          ],
          [
            "encryption",
            "transforming data with a key so that it is unreadable without the matching key",
            "In this unit, encryption means transforming data with a key so that it is unreadable without the matching key."
          ],
          [
            "public-key encryption",
            "encryption with a pair of keys — a public key to lock and a private key to unlock — used by HTTPS and digital signatures",
            "In this unit, public-key encryption means encryption with a pair of keys — a public key to lock and a private key to unlock — used by HTTPS and digital signatures."
          ],
          [
            "hashing",
            "turning data into a fixed-length code that cannot be reversed, used to store passwords and check files",
            "In this unit, hashing means turning data into a fixed-length code that cannot be reversed, used to store passwords and check files."
          ],
          [
            "authentication",
            "proving identity with something you know, have or are: a password, a phone code, a fingerprint",
            "In this unit, authentication means proving identity with something you know, have or are: a password, a phone code, a fingerprint."
          ],
          [
            "access control",
            "rules that decide which users may read, change or delete which data",
            "In this unit, access control means rules that decide which users may read, change or delete which data."
          ],
          [
            "SQL injection",
            "an attack that types SQL into a form field so that a careless program runs it against the database",
            "In this unit, SQL injection means an attack that types SQL into a form field so that a careless program runs it against the database."
          ],
          [
            "denial of service",
            "an attack that floods a server with requests so that real users cannot be served",
            "In this unit, denial of service means an attack that floods a server with requests so that real users cannot be served."
          ],
          [
            "data protection",
            "laws and rules that govern how personal data may be collected, stored, used and shared",
            "In this unit, data protection means laws and rules that govern how personal data may be collected, stored, used and shared."
          ],
          [
            "intellectual property",
            "legal rights over creations of the mind — software, writing, music — including copyright and licences",
            "In this unit, intellectual property means legal rights over creations of the mind — software, writing, music — including copyright and licences."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Tell Them Apart"
      },
      {
        "k": "bul",
        "items": [
          "**Confidentiality** — read by the right people; **integrity** — correct and unaltered; **availability** — there when needed.",
          "**Encryption** can be reversed with the key; **hashing** cannot be reversed — the right tool for passwords.",
          "**Symmetric** — one shared key; **public-key** — a public lock and a private key.",
          "**Ethics** asks what is right; **law** says what is required; a thing can be legal and still wrong.",
          "**Copyright** protects the expression (the code, the book); a **licence** says what you may do with a copy."
        ]
      },
      {
        "k": "table",
        "head": [
          "Threat",
          "Goal attacked",
          "Control"
        ],
        "rows": [
          [
            "Phishing for a PIN",
            "Confidentiality",
            "Training, two-factor authentication"
          ],
          [
            "Ransomware encrypting the office files",
            "Availability (and integrity)",
            "Offline backups, patching, antivirus"
          ],
          [
            "A clerk altering a grade",
            "Integrity",
            "Access control, audit logs"
          ],
          [
            "SQL injection on a login form",
            "Confidentiality and integrity",
            "Validate input; use parameterised queries"
          ],
          [
            "Denial of service on the results portal",
            "Availability",
            "Rate limits, capacity, filtering"
          ],
          [
            "Stolen laptop with plain-text records",
            "Confidentiality",
            "Full-disk encryption, screen lock"
          ]
        ]
      },
      {
        "k": "p",
        "t": "A second table for this unit, so the distinction can be practised twice:"
      },
      {
        "k": "table",
        "head": [
          "Situation",
          "Ethical question",
          "Legal issue"
        ],
        "rows": [
          [
            "A school posts pupils' grades with names on a public page",
            "Consent and harm to pupils",
            "Data protection and privacy"
          ],
          [
            "A lab installs one purchased licence on twenty machines",
            "Fairness to the developer",
            "Copyright and licence breach"
          ],
          [
            "A technician reads a teacher's email 'to check the server'",
            "Trust and necessity",
            "Unauthorised access"
          ],
          [
            "A developer copies an open-source library without keeping its licence notice",
            "Credit",
            "Licence terms"
          ],
          [
            "A clinic sells patient phone numbers to an advertiser",
            "Consent and exploitation",
            "Data protection"
          ],
          [
            "A student guesses a classmate's password 'as a joke'",
            "Respect",
            "Computer misuse"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why This Matters in Liberia"
      },
      {
        "k": "p",
        "t": "Liberia's mobile-money wallets, national identification records, examination databases and clinic files hold the confidentiality, integrity and availability of millions of people, and the country has been building its data-protection and cybercrime rules in the 2020s. A Grade 12 student may become the clerk who holds the password to a county's records: she should know that passwords are hashed, that a laptop leaving the office must be encrypted, that a grade change without a log is an integrity failure, and that reading a colleague's messages is not a technical question but an ethical and legal one."
      },
      {
        "k": "p",
        "t": "This course is an **original teaching resource**, not an official syllabus transcription. A school without a computer lab is not a school without Computer Science. Teachers should compare the unit with the school's approved scheme of work before use."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Paper-First Method"
      },
      {
        "k": "p",
        "t": "The class investigation is **“The security audit and the ethics tribunal”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Pairs audit a described school information system (a results database on a lab computer, a shared password, no backups, a public results page) against the CIA triad, writing each weakness under C, I or A with a matching control.",
          "They demonstrate hashing on paper with a toy hash (sum the character codes and take the remainder on division by 97) for three passwords, showing that the hash cannot be turned back into the password and that a stolen list of hashes is less useful than a list of passwords.",
          "They act out public-key encryption with a padlock and a key: anyone can snap the open padlock shut on a box, only the key-holder can open it.",
          "The class holds a tribunal on three cases from the ethics table: prosecution, defence, and a verdict that separates 'was it legal?' from 'was it right?'.",
          "If a machine is available, one pair inspects a site's HTTPS certificate and a password manager's hashed storage explanation while the others compare with the paper models; otherwise the audit sheet and tribunal verdicts are the finished work."
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Worked Example in Prose"
      },
      {
        "k": "p",
        "t": "**Problem.** A county education office keeps its results database on one laptop shared by four clerks who all use the password 'results2026'; grades can be changed by anyone without a record; the laptop travels home unencrypted; and there is no backup. Classify each weakness under confidentiality, integrity or availability, propose a control for each, and identify one ethical and one legal issue in publishing the results with names on a public page."
      },
      {
        "k": "num",
        "items": [
          "Shared weak password: confidentiality — give each clerk an account with a strong password and two-factor authentication.",
          "Grades changed without a record: integrity — access control so only authorised staff can edit, and an audit log of every change.",
          "Unencrypted laptop travelling: confidentiality — full-disk encryption and a screen lock.",
          "No backup: availability — daily backups kept off the laptop, one copy offline.",
          "Public page with names: ethical — pupils and parents did not consent and may be harmed; legal — personal data protection; publish by candidate number only, or to authenticated users."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** Confidentiality (shared password, unencrypted laptop), integrity (unlogged edits) and availability (no backup) each get a matching control; publishing named results raises consent and data-protection issues, so use candidate numbers."
      },
      {
        "k": "p",
        "t": "Notice the method: name what you know, run one step at a time, write the result of each step, then state the answer in a full sentence. That is the same habit a Physics class uses on a numerical problem; here the 'calculation' is a trace, a conversion, a truth table, a formula, a query or a debug."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Common Mistakes"
      },
      {
        "k": "bul",
        "items": [
          "Storing passwords in plain text or with reversible encryption instead of a hash.",
          "Treating security as antivirus only and ignoring integrity (logs) and availability (backups).",
          "Believing that what is legal is therefore ethical, or that what is common is therefore legal.",
          "Building a login form that pastes user input straight into an SQL statement."
        ]
      },
      {
        "k": "p",
        "t": "The class rule still holds when a mistake appears: **we try, we debug, we do not laugh at a mistake.** A bug is in the steps, not in the person."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Safety, Ethics and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN or a one-time code, and nobody installs software on a school machine without permission. A program written in this course is never pointed at another person's account, phone or wallet: guessing a password, sending bulk messages or reading someone's data without consent is a crime under Liberian law, not a prank. Copying a program from a classmate and submitting it as your own is plagiarism. Pair work shares the thinking, not the credit for work you did not do."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered (screenshots, not deletions), and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Pair Roles: Driver and Navigator"
      },
      {
        "k": "p",
        "t": "A computing pair has two jobs that swap. The **driver** writes or works the next step. The **navigator** reads the algorithm or the listing, watches for a bug, and says 'stop' before a wrong line is copied. After five minutes they swap, so both practise both jobs. A third student may sit as **checker** and tick each step on the trace table. Taking turns is a computing skill, not a punishment for having only one computer — or none."
      },
      {
        "k": "table",
        "head": [
          "Role",
          "What this person does",
          "What this person does not do"
        ],
        "rows": [
          [
            "Driver",
            "Works or writes the current step",
            "Does not skip the navigator's 'stop'"
          ],
          [
            "Navigator",
            "Reads the steps and watches for bugs",
            "Does not grab the pencil, the keyboard or the mouse"
          ],
          [
            "Checker",
            "Ticks each step and records one bug on the class chart",
            "Does not laugh at a mistake"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Fictional Liberian Scenario"
      },
      {
        "k": "p",
        "t": "A Grade 12 group's project login form accepts the username ' OR '1'='1 and logs in as the first user, and they say nobody would ever type that."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Name the attack, show the SQL their code builds, and fix it: validate the input, use parameterised queries so data can never become code, hash the stored passwords, and add the test string to the project's test log — attackers type exactly what nobody would."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Worked Computing Reasoning"
      },
      {
        "k": "p",
        "t": "Name the attack, show the SQL their code builds, and fix it: validate the input, use parameterised queries so data can never become code, hash the stored passwords, and add the test string to the project's test log — attackers type exactly what nobody would."
      },
      {
        "k": "p",
        "t": "When you answer a scenario question, use this three-part shape: (1) name the computing idea (algorithm, data, network, security, binary, database, …); (2) say what a person should do, in order; (3) say why, with a unit term in the reason. Vague good intentions without a term do not yet show that the unit has been learned."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Practise It on Paper"
      },
      {
        "k": "p",
        "t": "The investigation **“The security audit and the ethics tribunal”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
      },
      {
        "k": "table",
        "head": [
          "Paper object",
          "What it stands for",
          "What we write afterwards"
        ],
        "rows": [
          [
            "CIA audit sheet",
            "A system's weaknesses and controls",
            "Each weakness under C, I or A with its control"
          ],
          [
            "Toy-hash worksheet",
            "How passwords are stored",
            "Hashes computed and shown irreversible"
          ],
          [
            "Ethics-case cards",
            "Situations to judge",
            "Verdicts separating legal from right"
          ],
          [
            "Class chart",
            "Security bugs the class found (plain-text passwords, no logs)",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Triad Is a Checklist"
      },
      {
        "k": "p",
        "t": "For every system ask three questions: who can read this and should they; can it be changed silently; will it be there tomorrow. Most Liberian office systems fail the second and third before the first — no logs and no backups — which is why the triad, not the antivirus, is the audit."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Hash, Never Store"
      },
      {
        "k": "p",
        "t": "A hash turns a password into a fixed code that cannot be reversed; the system stores the code and compares hashes at login. A thief who steals the database gets codes, not passwords. Add a random salt per user and identical passwords no longer share a hash. Any project that stores passwords in text fails."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Public Keys in One Picture"
      },
      {
        "k": "p",
        "t": "Publish an open padlock; keep the only key. Anyone can lock a message to you; only you can open it. Sign by locking with your private key so that anyone with your public key can verify it was you. HTTPS, mobile-money apps and software updates all rest on this picture."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Legal, Ethical, Both, Neither"
      },
      {
        "k": "p",
        "t": "Posting named grades may be legal in one country and unlawful in another, and it can be harmful everywhere. The professional test is: would the person whose data this is consent, and can I justify it to them? Liberian law is catching up; a professional's ethics should be ahead of it."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "What a Period Test Asks"
      },
      {
        "k": "p",
        "t": "A fair period test on “Computer Security, Ethics and Law” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit precisely and use each in a sentence.",
          "Solve or trace a problem connected with “Computer Security, Ethics and Law” on paper, showing every line of working.",
          "Classify four examples using “Controls / Threats” and justify one placement.",
          "Find and correct a bug in a set of steps, a query or a program, and say what the bug was."
        ]
      },
      {
        "k": "p",
        "t": "Show every step of a tracing or conversion question, the way a Physics script shows working. A bare answer with no steps cannot be given full credit, because the teacher cannot see the method you ran."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Four Weeks of Study"
      },
      {
        "k": "p",
        "t": "A 4-week unit on “Computer Security, Ethics and Law” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
      },
      {
        "k": "table",
        "head": [
          "Week",
          "Study focus",
          "What students leave able to do"
        ],
        "rows": [
          [
            "1",
            "What “Computer Security, Ethics and Law” is, and where it already appears around us.",
            "Say what the unit is about and name two examples from Liberia."
          ],
          [
            "2",
            "Key ideas, distinctions and the unit table.",
            "Use the key terms and complete the distinction tables."
          ],
          [
            "3",
            "A Liberian example and the paper-first method, worked then written.",
            "Run the paper method and write the algorithm, table or report."
          ],
          [
            "4",
            "Worked problems, pair-debug, the computing fair and the period check.",
            "Solve a worked example, debug a bug, and sit the period check."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Check Yourself"
      },
      {
        "k": "p",
        "t": "Close the notes. (1) Say the unit title and one Liberian example. (2) Give the meaning of three terms without looking. (3) Work the paper method once more, showing every step. (4) Name one bug you would look for. (5) Say who you tell if a message asks for a photograph, a PIN or money. If any of those five stalls, go back to the table of terms and the worked example and run them again with a partner. Do not laugh at a bug — including your own."
      },
      {
        "k": "p",
        "t": "This is original supplementary teaching material for Liberian senior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, confidentiality means keeping data readable only by those authorised to read it.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, integrity means keeping systems and data usable when they are needed.",
        "a": "False",
        "why": "integrity means keeping data correct, complete and unaltered except by authorised changes; the statement describes availability."
      },
      {
        "s": "In this unit, encryption means transforming data with a key so that it is unreadable without the matching key.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Every conversion, truth table, trace and program in the unit can be worked on paper; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the code or the steps, not in the person."
      },
      {
        "s": "Students should share passwords, PINs or one-time codes so a partner can finish the work.",
        "a": "False",
        "why": "A password, PIN or one-time code is secret. Sharing one is how accounts and mobile-money wallets are emptied."
      },
      {
        "s": "Security protects confidentiality, integrity and availability — who can read data, whether it is correct and unaltered, and whether it is there when needed.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "Encrypting stored passwords is as safe as hashing them.",
        "a": "False",
        "why": "Encryption can be reversed by anyone who obtains the key; a hash cannot be reversed at all."
      },
      {
        "s": "An audit log protects the integrity of data by recording who changed what and when.",
        "a": "True",
        "why": "Silent changes become visible and accountable."
      }
    ],
    "classify": {
      "title": "Controls / Threats",
      "groups": [
        {
          "name": "Controls",
          "items": [
            "encryption",
            "hashing passwords",
            "two-factor authentication",
            "access control and audit logs",
            "offline backups",
            "parameterised queries"
          ]
        },
        {
          "name": "Threats",
          "items": [
            "phishing",
            "ransomware",
            "SQL injection",
            "denial of service",
            "an insider altering grades",
            "a stolen unencrypted laptop"
          ]
        }
      ]
    },
    "diagram": {
      "title": "The CIA triad with its controls",
      "caption": "Label each part and state what it does in “Computer Security, Ethics and Law”.",
      "parts": [
        {
          "p": "Confidentiality",
          "f": "encryption, authentication, access control"
        },
        {
          "p": "Integrity",
          "f": "hashing and checksums, audit logs, input validation"
        },
        {
          "p": "Availability",
          "f": "backups, patching, capacity and filtering against denial of service"
        },
        {
          "p": "People",
          "f": "training against phishing and social engineering"
        },
        {
          "p": "Law and ethics",
          "f": "data protection, licences, computer-misuse rules, professional duty"
        }
      ]
    },
    "experiment": {
      "title": "The security audit and the ethics tribunal",
      "aim": "To practise the ideas of “Computer Security, Ethics and Law” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Printed listings, cards and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class test log",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “The security audit and the ethics tribunal” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A Grade 12 group's project login form accepts the username ' OR '1'='1 and logs in as the first user, and they say nobody would ever type that. What should happen next?",
        "a": "Name the attack, show the SQL their code builds, and fix it: validate the input, use parameterised queries so data can never become code, hash the stored passwords, and add the test string to the project's test log — attackers type exactly what nobody would."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Computer Security, Ethics and Law”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's program or trace fails. What do you say, and why?",
        "a": "Remind the class that a bug is in the code or the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the exact line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian working life (a bank, a mobile-money agent, a clinic, a radio station, a business, a ministry).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as a bank's database, a mobile-money transaction, a hospital record, a radio station's schedule or a ministry's website."
      },
      {
        "q": "Write a five-rule data-handling policy for a clinic's patient database that addresses each part of the CIA triad and one legal duty.",
        "a": "For example: individual accounts with hashed passwords and two-factor authentication (C); every change logged with user and time (I); daily backup with one offline copy and a tested restore (A); laptops encrypted and locked (C); personal data shared only with consent or legal authority, and a named officer responsible (law)."
      },
      {
        "q": "A developer wants to include an open-source library in a paid app for Liberian schools. What must she check and do, and what is the ethical duty beyond the licence?",
        "a": "Read the library's licence (permissive or copyleft), keep its copyright and licence notice, comply with any requirement to share source, and credit the authors; ethically, contribute fixes back and never present the work as entirely her own."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “The security audit and the ethics tribunal” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, squared paper and printed listings",
      "A class computing chart and test log",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's device, kept dry and in sight"
    ],
    "aids": [
      "Word cards — confidentiality, integrity, availability",
      "A flowchart or trace table of “The security audit and the ethics tribunal”",
      "A CIA audit sheet, a toy-hash worksheet and ethics-case cards",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing term and what it means.",
      "Work this week's paper method (a conversion, a truth table, a trace, a query or a design) again with a friend — no device needed.",
      "Find one example of this unit's idea in your community (a bank, a mobile-money kiosk, a clinic, a radio station, a business or a ministry office) and write a paragraph about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written trace, conversion, truth table or query with full working",
      "Pair-debug observed against the class test log",
      "A short written response to the Liberian case scenario"
    ],
    "worked": [
      {
        "q": "Name the three goals of information security.",
        "steps": [
          "CIA."
        ],
        "a": "Confidentiality, integrity, availability"
      },
      {
        "q": "A grade is changed and nobody can tell who did it. Which goal failed and which control was missing?",
        "steps": [
          "Silent change."
        ],
        "a": "Integrity; an audit log (and access control)"
      },
      {
        "q": "Why are passwords hashed rather than encrypted?",
        "steps": [
          "Cannot be reversed."
        ],
        "a": "A hash cannot be turned back into the password, so a stolen database does not reveal it"
      },
      {
        "q": "In public-key encryption, which key does the sender use to lock a message to you?",
        "steps": [
          "The open padlock."
        ],
        "a": "Your public key"
      },
      {
        "q": "A login form accepts ' OR '1'='1. Name the attack and the fix.",
        "steps": [
          "Data became code."
        ],
        "a": "SQL injection; parameterised queries and input validation"
      },
      {
        "q": "A results portal is flooded with requests until it stops responding. Which goal and which attack?",
        "steps": [
          "Availability."
        ],
        "a": "Availability; denial of service"
      },
      {
        "q": "Installing one purchased licence on twenty machines breaks which right?",
        "steps": [
          "Intellectual property."
        ],
        "a": "Copyright / the licence terms"
      },
      {
        "q": "Is publishing named pupil grades a legal question, an ethical question, or both?",
        "steps": [
          "Consent and law."
        ],
        "a": "Both — data protection in law and consent and harm in ethics"
      }
    ]
  },
  {
    "grade": 12,
    "period": "III",
    "sem": "One",
    "icon": "🧭",
    "csPlan": true,
    "title": "Systems Analysis and the Software Development Life Cycle",
    "subtitle": "Computer Science · Original senior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Written for classes that may have no computer lab: every conversion, truth table, trace, query and program in the unit can be done on paper, and a shared device extends it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary precisely in speech, writing and examination answers.",
      "Solve the unit's problems on paper — conversions, truth tables, traces, queries, formulas or designs — showing every step of working.",
      "Evaluate a technology choice for its safety, legality, cost and effect on people in Liberia."
    ],
    "objectives": [
      "Define the key terms in “Systems Analysis and the Software Development Life Cycle” precisely and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm, program or procedure connected with this unit, on paper.",
      "Classify examples into the unit's two groups and justify each placement.",
      "Solve a worked example step by step, showing every line of working, and state the answer in a full sentence with its unit or type.",
      "Apply the unit's ideas to a fictional Liberian business, ministry, clinic or school scenario.",
      "Find and correct a bug in a set of steps, a circuit, a query or a program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared test log.",
      "Explain one Liberian example of this unit's idea (mobile money, the ACE submarine cable, a hospital record, a bank, the national examination system or a radio station)."
    ],
    "safeguard": "A senior high computing lesson uses paper traces, truth tables, printed listings and, when one is present, a shared school computer or the teacher's own device. Students never share passwords, PINs or one-time codes, never install software on a school machine without permission, and never photograph, record or post a classmate without consent. A program written in class must never be used to guess a password, send bulk messages or enter another person's account — that is a crime, not a prank. If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "The systems development life cycle covers feasibility study, analysis (investigation and requirements), design (data, interface, processing), implementation (coding), testing (unit, integration, system, acceptance), deployment (parallel, direct, phased, pilot) and maintenance. Analysts gather facts by interviews, questionnaires, observation and document review and model the system with data flow diagrams. Waterfall proceeds in sequence; agile works in short iterations with user feedback.",
    "focus": [
      "Worked demonstration on paper",
      "Pair programming and debugging",
      "Liberian case scenario",
      "Practical and period check"
    ],
    "terms": [
      {
        "t": "software development life cycle",
        "d": "the sequence of stages by which software is planned, built, tested, delivered and maintained; the SDLC",
        "x": "In this unit, software development life cycle means the sequence of stages by which software is planned, built, tested, delivered and maintained; the SDLC."
      },
      {
        "t": "feasibility study",
        "d": "an early check of whether a proposed system is technically, economically, legally and operationally possible",
        "x": "In this unit, feasibility study means an early check of whether a proposed system is technically, economically, legally and operationally possible."
      },
      {
        "t": "requirements analysis",
        "d": "finding out and writing down exactly what the users need the system to do",
        "x": "In this unit, requirements analysis means finding out and writing down exactly what the users need the system to do."
      },
      {
        "t": "systems analyst",
        "d": "the person who investigates the current system, gathers requirements and designs the new one",
        "x": "In this unit, systems analyst means the person who investigates the current system, gathers requirements and designs the new one."
      },
      {
        "t": "fact-finding",
        "d": "gathering information by interviews, questionnaires, observation and reading existing documents",
        "x": "In this unit, fact-finding means gathering information by interviews, questionnaires, observation and reading existing documents."
      },
      {
        "t": "data flow diagram",
        "d": "a diagram showing processes, data stores, external entities and the flows of data between them",
        "x": "In this unit, data flow diagram means a diagram showing processes, data stores, external entities and the flows of data between them."
      },
      {
        "t": "design",
        "d": "deciding the data structures, interfaces, processing and hardware before coding begins",
        "x": "In this unit, design means deciding the data structures, interfaces, processing and hardware before coding begins."
      },
      {
        "t": "black-box testing",
        "d": "testing by inputs and expected outputs without looking at the code",
        "x": "In this unit, black-box testing means testing by inputs and expected outputs without looking at the code."
      },
      {
        "t": "white-box testing",
        "d": "testing that examines the code's paths and conditions",
        "x": "In this unit, white-box testing means testing that examines the code's paths and conditions."
      },
      {
        "t": "test plan",
        "d": "a table of test cases with input, expected result, actual result and pass or fail, covering normal, boundary and erroneous data",
        "x": "In this unit, test plan means a table of test cases with input, expected result, actual result and pass or fail, covering normal, boundary and erroneous data."
      },
      {
        "t": "changeover",
        "d": "moving from the old system to the new: direct, parallel, phased or pilot",
        "x": "In this unit, changeover means moving from the old system to the new: direct, parallel, phased or pilot."
      },
      {
        "t": "agile development",
        "d": "building software in short iterations with working versions shown to users after each",
        "x": "In this unit, agile development means building software in short iterations with working versions shown to users after each."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “software development life cycle” in this unit?",
        "a": "the sequence of stages by which software is planned, built, tested, delivered and maintained; the SDLC."
      },
      {
        "q": "What is meant by “feasibility study” in this unit?",
        "a": "an early check of whether a proposed system is technically, economically, legally and operationally possible."
      },
      {
        "q": "What is meant by “requirements analysis” in this unit?",
        "a": "finding out and writing down exactly what the users need the system to do."
      },
      {
        "q": "What is meant by “systems analyst” in this unit?",
        "a": "the person who investigates the current system, gathers requirements and designs the new one."
      },
      {
        "q": "What is meant by “fact-finding” in this unit?",
        "a": "gathering information by interviews, questionnaires, observation and reading existing documents."
      },
      {
        "q": "What is meant by “data flow diagram” in this unit?",
        "a": "a diagram showing processes, data stores, external entities and the flows of data between them."
      },
      {
        "q": "What is meant by “design” in this unit?",
        "a": "deciding the data structures, interfaces, processing and hardware before coding begins."
      },
      {
        "q": "What is meant by “black-box testing” in this unit?",
        "a": "testing by inputs and expected outputs without looking at the code."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A Grade 12 group demonstrates an attendance system that works perfectly in the lab; on the first real morning a teacher enters 45 pupils into a class limited to 40 and the program crashes, and the group blames 'the teacher's mistake'."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Return to the test plan: add cases at 40, 41 and 0 pupils and for a non-numeric entry; make the program reject the forty-first politely with a message; and note that a system is judged by how it handles wrong input, not right input — then schedule a pilot in one class before the whole school."
      },
      {
        "q": "State this unit idea in your own words: The life cycle runs feasibility, analysis, design, implementation, testing, deployment, maintenance — and a fault found late costs far more than one found early.",
        "a": "The life cycle runs feasibility, analysis, design, implementation, testing, deployment, maintenance — and a fault found late costs far more than one found early."
      },
      {
        "q": "State this unit idea in your own words: A requirements specification says what the system must do; the design says how; the tests prove it.",
        "a": "A requirements specification says what the system must do; the design says how; the tests prove it."
      },
      {
        "q": "What is the difference between a functional and a non-functional requirement?",
        "a": "A functional requirement says what the system must do (record a payment); a non-functional one says how well or under what conditions (work offline, respond in two seconds, restrict editing to the bursar)."
      },
      {
        "q": "Why is a fault found in analysis cheaper than one found after deployment?",
        "a": "Early it changes a sentence in a document; late it changes code, data, training and users' trust, and may require a new changeover."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Systems Analysis and the Software Development Life Cycle” Is"
      },
      {
        "k": "p",
        "t": "Software that matters is built by a method. The **software development life cycle** runs from **feasibility** through **requirements analysis**, **design**, **implementation**, **testing**, **deployment** and **maintenance**. A **systems analyst** studies the current system with interviews, observation and documents, writes a **requirements specification**, and draws **data flow diagrams** and **flowcharts** before a line of code exists. **Waterfall** and **agile** are two ways to order the work; **black-box** and **white-box** testing, **test plans** and **user documentation** finish it. Groups who blame the teacher when their attendance system crashes at the forty-first pupil skipped boundary and erroneous testing. Return to the test plan: add cases at 40, 41 and 0 pupils and for a non-numeric entry; make the program reject the forty-first politely with a message; and note that a system is judged by how it handles wrong input, not right input — then schedule a pilot in one class before the whole school. The life cycle runs feasibility, analysis, design, implementation, testing, deployment, maintenance — and a fault found late costs far more than one found early. A requirements specification says what the system must do; the design says how; the tests prove it."
      },
      {
        "k": "p",
        "t": "The systems development life cycle covers feasibility study, analysis (investigation and requirements), design (data, interface, processing), implementation (coding), testing (unit, integration, system, acceptance), deployment (parallel, direct, phased, pilot) and maintenance. Analysts gather facts by interviews, questionnaires, observation and document review and model the system with data flow diagrams. Waterfall proceeds in sequence; agile works in short iterations with user feedback."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: The life cycle runs feasibility, analysis, design, implementation, testing, deployment, maintenance — and a fault found late costs far more than one found early. A requirements specification says what the system must do; the design says how; the tests prove it."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Ideas in This Unit"
      },
      {
        "k": "p",
        "t": "Each idea below is a working definition for Grade 12. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
      },
      {
        "k": "table",
        "head": [
          "Term",
          "What it means",
          "A sentence that uses it"
        ],
        "rows": [
          [
            "software development life cycle",
            "the sequence of stages by which software is planned, built, tested, delivered and maintained; the SDLC",
            "In this unit, software development life cycle means the sequence of stages by which software is planned, built, tested, delivered and maintained; the SDLC."
          ],
          [
            "feasibility study",
            "an early check of whether a proposed system is technically, economically, legally and operationally possible",
            "In this unit, feasibility study means an early check of whether a proposed system is technically, economically, legally and operationally possible."
          ],
          [
            "requirements analysis",
            "finding out and writing down exactly what the users need the system to do",
            "In this unit, requirements analysis means finding out and writing down exactly what the users need the system to do."
          ],
          [
            "systems analyst",
            "the person who investigates the current system, gathers requirements and designs the new one",
            "In this unit, systems analyst means the person who investigates the current system, gathers requirements and designs the new one."
          ],
          [
            "fact-finding",
            "gathering information by interviews, questionnaires, observation and reading existing documents",
            "In this unit, fact-finding means gathering information by interviews, questionnaires, observation and reading existing documents."
          ],
          [
            "data flow diagram",
            "a diagram showing processes, data stores, external entities and the flows of data between them",
            "In this unit, data flow diagram means a diagram showing processes, data stores, external entities and the flows of data between them."
          ],
          [
            "design",
            "deciding the data structures, interfaces, processing and hardware before coding begins",
            "In this unit, design means deciding the data structures, interfaces, processing and hardware before coding begins."
          ],
          [
            "black-box testing",
            "testing by inputs and expected outputs without looking at the code",
            "In this unit, black-box testing means testing by inputs and expected outputs without looking at the code."
          ],
          [
            "white-box testing",
            "testing that examines the code's paths and conditions",
            "In this unit, white-box testing means testing that examines the code's paths and conditions."
          ],
          [
            "test plan",
            "a table of test cases with input, expected result, actual result and pass or fail, covering normal, boundary and erroneous data",
            "In this unit, test plan means a table of test cases with input, expected result, actual result and pass or fail, covering normal, boundary and erroneous data."
          ],
          [
            "changeover",
            "moving from the old system to the new: direct, parallel, phased or pilot",
            "In this unit, changeover means moving from the old system to the new: direct, parallel, phased or pilot."
          ],
          [
            "agile development",
            "building software in short iterations with working versions shown to users after each",
            "In this unit, agile development means building software in short iterations with working versions shown to users after each."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Tell Them Apart"
      },
      {
        "k": "bul",
        "items": [
          "**Requirements** — what; **design** — how; **implementation** — the code; **testing** — the proof.",
          "**Waterfall** — each stage finishes before the next; **agile** — short cycles, frequent user feedback.",
          "**Normal** data should work; **boundary** data sits at the limits; **erroneous** data must be rejected politely.",
          "**Black-box** — inputs and outputs; **white-box** — paths through the code.",
          "**Direct** changeover is cheap and risky; **parallel** is safe and expensive; **phased** and **pilot** sit between."
        ]
      },
      {
        "k": "table",
        "head": [
          "Stage",
          "Main activity",
          "Output"
        ],
        "rows": [
          [
            "Feasibility",
            "Is it possible and worth it? Technical, economic, legal, operational",
            "Feasibility report"
          ],
          [
            "Analysis",
            "Interviews, observation, documents; model the current system",
            "Requirements specification, data flow diagrams"
          ],
          [
            "Design",
            "Data structures, database, screens, reports, processing, hardware",
            "Design specification"
          ],
          [
            "Implementation",
            "Coding and unit testing",
            "Working program"
          ],
          [
            "Testing",
            "Integration, system and acceptance tests against the test plan",
            "Test log, sign-off"
          ],
          [
            "Deployment and maintenance",
            "Changeover, training, documentation; fixing and improving",
            "Live system, user guide, change log"
          ]
        ]
      },
      {
        "k": "p",
        "t": "A second table for this unit, so the distinction can be practised twice:"
      },
      {
        "k": "table",
        "head": [
          "Changeover method",
          "How",
          "Best when"
        ],
        "rows": [
          [
            "Direct",
            "Old system stops, new starts the same day",
            "Small system; failure is tolerable"
          ],
          [
            "Parallel",
            "Both run together for a period; results compared",
            "Errors are costly; staff can bear the double work"
          ],
          [
            "Phased",
            "One part of the system at a time",
            "The system has separable modules"
          ],
          [
            "Pilot",
            "One site first, then the rest",
            "Many similar sites, such as schools in a county"
          ],
          [
            "Test data type: normal",
            "Typical values",
            "Every test plan"
          ],
          [
            "Test data type: boundary and erroneous",
            "Limits and invalid values",
            "Every test plan"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why This Matters in Liberia"
      },
      {
        "k": "p",
        "t": "A county education office replacing paper registers, a clinic moving from cards to a patient database, a ministry rolling out a fee-payment system to three hundred schools — each succeeds or fails on this unit. The systems that failed in Liberia mostly failed at analysis (nobody asked the clerk what she actually does), at testing (no boundary cases), or at changeover (direct, in exam week, with no training). A Grade 12 student who can interview a user, draw a data flow diagram, write a test plan with normal, boundary and erroneous data, and choose a pilot changeover is ready to be a junior analyst on the first day."
      },
      {
        "k": "p",
        "t": "This course is an **original teaching resource**, not an official syllabus transcription. A school without a computer lab is not a school without Computer Science. Teachers should compare the unit with the school's approved scheme of work before use."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Paper-First Method"
      },
      {
        "k": "p",
        "t": "The class investigation is **“Analyse a real school process and plan its system”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Groups choose one real school process (fee collection, attendance, library loans) and conduct fact-finding: a five-question interview with the clerk or teacher, ten minutes of observation, and a copy of the current form or register.",
          "They write a one-page requirements specification (five functional requirements, three non-functional such as speed, security and offline working) and draw a level-1 data flow diagram of the current process.",
          "They design the data (a table sketch with keys and validation), one input screen on paper and one report, and write a test plan of eight cases covering normal, boundary and erroneous data with expected results.",
          "They choose and justify a changeover method and write the two-paragraph user guide a new clerk would need.",
          "If a machine is available, one group implements the smallest slice (one table and one input form) and runs its test plan while the others review; otherwise the specification, diagram, design and test plan are the finished work."
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Worked Example in Prose"
      },
      {
        "k": "p",
        "t": "**Problem.** A school wants a fee-payment system. Write two functional and two non-functional requirements; list the external entity, one process and one data store for a data flow diagram of 'record a payment'; give three test cases (normal, boundary, erroneous) for the amount field if the term fee is 15,000; and choose a changeover method with a reason."
      },
      {
        "k": "num",
        "items": [
          "Functional: the system shall record a payment against a student with date and amount; the system shall report each student's balance. Non-functional: it shall work without an internet connection; only the bursar's account shall edit payments.",
          "Data flow diagram: external entity Parent → process Record payment → data store Payments; the process also reads the Student store and sends a receipt back to the Parent.",
          "Test cases for amount: normal 5,000 → accepted, balance falls by 5,000; boundary 15,000 → accepted, balance becomes 0; erroneous −200 (or 'abc') → rejected with a message.",
          "Changeover: parallel for one term — the paper ledger continues while the system runs, and totals are compared weekly, because fee errors are costly and the clerks can bear the extra work briefly.",
          "Deliverables: requirements specification, DFD, design of the Payments table, test plan, user guide."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** Two 'shall' requirements of each kind; a DFD with Parent, Record payment and Payments; tests at 5,000, 15,000 and −200; a parallel changeover for one term because fee errors are costly."
      },
      {
        "k": "p",
        "t": "Notice the method: name what you know, run one step at a time, write the result of each step, then state the answer in a full sentence. That is the same habit a Physics class uses on a numerical problem; here the 'calculation' is a trace, a conversion, a truth table, a formula, a query or a debug."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Common Mistakes"
      },
      {
        "k": "bul",
        "items": [
          "Starting to code before the requirements are written, then rebuilding when the clerk explains what she actually needs.",
          "Testing only with normal data and never with boundaries or errors.",
          "Choosing a direct changeover for a critical system in the busiest week.",
          "Delivering software without a user guide, so it dies when the developer leaves."
        ]
      },
      {
        "k": "p",
        "t": "The class rule still holds when a mistake appears: **we try, we debug, we do not laugh at a mistake.** A bug is in the steps, not in the person."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Safety, Ethics and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN or a one-time code, and nobody installs software on a school machine without permission. A program written in this course is never pointed at another person's account, phone or wallet: guessing a password, sending bulk messages or reading someone's data without consent is a crime under Liberian law, not a prank. Copying a program from a classmate and submitting it as your own is plagiarism. Pair work shares the thinking, not the credit for work you did not do."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered (screenshots, not deletions), and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Pair Roles: Driver and Navigator"
      },
      {
        "k": "p",
        "t": "A computing pair has two jobs that swap. The **driver** writes or works the next step. The **navigator** reads the algorithm or the listing, watches for a bug, and says 'stop' before a wrong line is copied. After five minutes they swap, so both practise both jobs. A third student may sit as **checker** and tick each step on the trace table. Taking turns is a computing skill, not a punishment for having only one computer — or none."
      },
      {
        "k": "table",
        "head": [
          "Role",
          "What this person does",
          "What this person does not do"
        ],
        "rows": [
          [
            "Driver",
            "Works or writes the current step",
            "Does not skip the navigator's 'stop'"
          ],
          [
            "Navigator",
            "Reads the steps and watches for bugs",
            "Does not grab the pencil, the keyboard or the mouse"
          ],
          [
            "Checker",
            "Ticks each step and records one bug on the class chart",
            "Does not laugh at a mistake"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Fictional Liberian Scenario"
      },
      {
        "k": "p",
        "t": "A Grade 12 group demonstrates an attendance system that works perfectly in the lab; on the first real morning a teacher enters 45 pupils into a class limited to 40 and the program crashes, and the group blames 'the teacher's mistake'."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Return to the test plan: add cases at 40, 41 and 0 pupils and for a non-numeric entry; make the program reject the forty-first politely with a message; and note that a system is judged by how it handles wrong input, not right input — then schedule a pilot in one class before the whole school."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Worked Computing Reasoning"
      },
      {
        "k": "p",
        "t": "Return to the test plan: add cases at 40, 41 and 0 pupils and for a non-numeric entry; make the program reject the forty-first politely with a message; and note that a system is judged by how it handles wrong input, not right input — then schedule a pilot in one class before the whole school."
      },
      {
        "k": "p",
        "t": "When you answer a scenario question, use this three-part shape: (1) name the computing idea (algorithm, data, network, security, binary, database, …); (2) say what a person should do, in order; (3) say why, with a unit term in the reason. Vague good intentions without a term do not yet show that the unit has been learned."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Practise It on Paper"
      },
      {
        "k": "p",
        "t": "The investigation **“Analyse a real school process and plan its system”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
      },
      {
        "k": "table",
        "head": [
          "Paper object",
          "What it stands for",
          "What we write afterwards"
        ],
        "rows": [
          [
            "Interview and observation sheets",
            "Fact-finding",
            "Five answers and ten minutes of notes"
          ],
          [
            "Requirements page and DFD",
            "What the system must do and how data moves",
            "'Shall' statements and a level-1 diagram"
          ],
          [
            "Test-plan template",
            "Proof the design works",
            "Eight cases: normal, boundary, erroneous"
          ],
          [
            "Class chart",
            "SDLC bugs the class found (no boundaries, direct changeover)",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Ask the Person Who Does the Work"
      },
      {
        "k": "p",
        "t": "The head teacher describes the process; the clerk performs it. Interview both, watch the clerk for ten minutes, and read the form she actually fills in. The gap between the description and the practice is where most requirements hide — in Liberia as everywhere."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Three Kinds of Test Data"
      },
      {
        "k": "p",
        "t": "Normal data checks the ordinary path. Boundary data — 0, 40, 41, the exact fee — checks the edges where off-by-one bugs live. Erroneous data — negative amounts, letters in a number field, an empty name — checks that the system refuses politely. A test plan without all three is not a test plan."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Waterfall or Agile, Honestly"
      },
      {
        "k": "p",
        "t": "Waterfall suits a small, well-understood system with fixed requirements — a fee ledger. Agile suits a system whose users discover what they need by using it — a clinic's reporting tool. Both need requirements, design, tests and documentation; agile merely repeats them in short cycles."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Documentation Is Part of the System"
      },
      {
        "k": "p",
        "t": "A user guide for the clerk, technical documentation for the next developer, a change log for maintenance. A system with no documentation is a system with one point of failure: its author. Liberian offices are full of software nobody can change because nobody wrote it down."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "What a Period Test Asks"
      },
      {
        "k": "p",
        "t": "A fair period test on “Systems Analysis and the Software Development Life Cycle” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit precisely and use each in a sentence.",
          "Solve or trace a problem connected with “Systems Analysis and the Software Development Life Cycle” on paper, showing every line of working.",
          "Classify four examples using “Analysis and design activities / Testing, deployment and maintenance activities” and justify one placement.",
          "Find and correct a bug in a set of steps, a query or a program, and say what the bug was."
        ]
      },
      {
        "k": "p",
        "t": "Show every step of a tracing or conversion question, the way a Physics script shows working. A bare answer with no steps cannot be given full credit, because the teacher cannot see the method you ran."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Four Weeks of Study"
      },
      {
        "k": "p",
        "t": "A 4-week unit on “Systems Analysis and the Software Development Life Cycle” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
      },
      {
        "k": "table",
        "head": [
          "Week",
          "Study focus",
          "What students leave able to do"
        ],
        "rows": [
          [
            "1",
            "What “Systems Analysis and the Software Development Life Cycle” is, and where it already appears around us.",
            "Say what the unit is about and name two examples from Liberia."
          ],
          [
            "2",
            "Key ideas, distinctions and the unit table.",
            "Use the key terms and complete the distinction tables."
          ],
          [
            "3",
            "A Liberian example and the paper-first method, worked then written.",
            "Run the paper method and write the algorithm, table or report."
          ],
          [
            "4",
            "Worked problems, pair-debug, the computing fair and the period check.",
            "Solve a worked example, debug a bug, and sit the period check."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Check Yourself"
      },
      {
        "k": "p",
        "t": "Close the notes. (1) Say the unit title and one Liberian example. (2) Give the meaning of three terms without looking. (3) Work the paper method once more, showing every step. (4) Name one bug you would look for. (5) Say who you tell if a message asks for a photograph, a PIN or money. If any of those five stalls, go back to the table of terms and the worked example and run them again with a partner. Do not laugh at a bug — including your own."
      },
      {
        "k": "p",
        "t": "This is original supplementary teaching material for Liberian senior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, software development life cycle means the sequence of stages by which software is planned, built, tested, delivered and maintained; the SDLC.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, feasibility study means finding out and writing down exactly what the users need the system to do.",
        "a": "False",
        "why": "feasibility study means an early check of whether a proposed system is technically, economically, legally and operationally possible; the statement describes requirements analysis."
      },
      {
        "s": "In this unit, systems analyst means the person who investigates the current system, gathers requirements and designs the new one.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Every conversion, truth table, trace and program in the unit can be worked on paper; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the code or the steps, not in the person."
      },
      {
        "s": "Students should share passwords, PINs or one-time codes so a partner can finish the work.",
        "a": "False",
        "why": "A password, PIN or one-time code is secret. Sharing one is how accounts and mobile-money wallets are emptied."
      },
      {
        "s": "The life cycle runs feasibility, analysis, design, implementation, testing, deployment, maintenance — and a fault found late costs far more than one found early.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "A test plan that uses only typical values is sufficient before a system goes live.",
        "a": "False",
        "why": "Boundary and erroneous data must also be tested; that is where most failures occur."
      },
      {
        "s": "Parallel changeover is safer than direct changeover but costs more effort.",
        "a": "True",
        "why": "Both systems run together so errors are caught, at the price of double work."
      }
    ],
    "classify": {
      "title": "Analysis and design activities / Testing, deployment and maintenance activities",
      "groups": [
        {
          "name": "Analysis and design activities",
          "items": [
            "interviewing the bursar",
            "drawing a data flow diagram",
            "writing the requirements specification",
            "designing the Payments table",
            "sketching the input screen",
            "the feasibility study"
          ]
        },
        {
          "name": "Testing, deployment and maintenance activities",
          "items": [
            "running the test plan",
            "boundary testing at 15,000",
            "parallel changeover for a term",
            "training the clerks",
            "writing the user guide",
            "fixing a bug reported after go-live"
          ]
        }
      ]
    },
    "diagram": {
      "title": "The software development life cycle",
      "caption": "Label each part and state what it does in “Systems Analysis and the Software Development Life Cycle”.",
      "parts": [
        {
          "p": "Feasibility and analysis",
          "f": "is it possible; what must it do — fact-finding and requirements"
        },
        {
          "p": "Design",
          "f": "data, screens, reports and processing decided on paper"
        },
        {
          "p": "Implementation",
          "f": "coding and unit testing"
        },
        {
          "p": "Testing",
          "f": "normal, boundary and erroneous data against the test plan"
        },
        {
          "p": "Deployment and maintenance",
          "f": "changeover, training, documentation and later fixes"
        }
      ]
    },
    "experiment": {
      "title": "Analyse a real school process and plan its system",
      "aim": "To practise the ideas of “Systems Analysis and the Software Development Life Cycle” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Printed listings, cards and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class test log",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “Analyse a real school process and plan its system” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A Grade 12 group demonstrates an attendance system that works perfectly in the lab; on the first real morning a teacher enters 45 pupils into a class limited to 40 and the program crashes, and the group blames 'the teacher's mistake'. What should happen next?",
        "a": "Return to the test plan: add cases at 40, 41 and 0 pupils and for a non-numeric entry; make the program reject the forty-first politely with a message; and note that a system is judged by how it handles wrong input, not right input — then schedule a pilot in one class before the whole school."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Systems Analysis and the Software Development Life Cycle”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's program or trace fails. What do you say, and why?",
        "a": "Remind the class that a bug is in the code or the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the exact line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian working life (a bank, a mobile-money agent, a clinic, a radio station, a business, a ministry).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as a bank's database, a mobile-money transaction, a hospital record, a radio station's schedule or a ministry's website."
      },
      {
        "q": "Draw or describe a level-1 data flow diagram for a school library loan: external entities, processes, data stores and flows.",
        "a": "Entities: Student, Librarian. Processes: Issue book, Return book, Report overdue. Stores: Books, Loans, Students. Flows: student card and book ID → Issue book → Loans; Return book updates Loans and Books; Report overdue reads Loans and sends a list to the Librarian."
      },
      {
        "q": "Write an eight-case test plan for a login screen with a four-digit PIN and a maximum of three attempts, marking each case normal, boundary or erroneous.",
        "a": "Accept a table such as: correct PIN first try (normal, pass); correct on third try (boundary, pass); wrong three times (boundary, locked); PIN of 3 digits (erroneous, rejected); 5 digits (erroneous); letters (erroneous); empty (erroneous); correct PIN after lock (boundary, still locked)."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “Analyse a real school process and plan its system” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, squared paper and printed listings",
      "A class computing chart and test log",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's device, kept dry and in sight"
    ],
    "aids": [
      "Word cards — software development life cycle, feasibility study, requirements analysis",
      "A flowchart or trace table of “Analyse a real school process and plan its system”",
      "Interview sheets, DFD symbol stencils and a test-plan template",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing term and what it means.",
      "Work this week's paper method (a conversion, a truth table, a trace, a query or a design) again with a friend — no device needed.",
      "Find one example of this unit's idea in your community (a bank, a mobile-money kiosk, a clinic, a radio station, a business or a ministry office) and write a paragraph about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written trace, conversion, truth table or query with full working",
      "Pair-debug observed against the class test log",
      "A short written response to the Liberian case scenario"
    ],
    "worked": [
      {
        "q": "List the stages of the SDLC in order.",
        "steps": [
          "Feasibility → maintenance."
        ],
        "a": "Feasibility, analysis, design, implementation, testing, deployment, maintenance"
      },
      {
        "q": "Which stage produces the requirements specification?",
        "steps": [
          "What the system must do."
        ],
        "a": "Analysis"
      },
      {
        "q": "Name four fact-finding methods.",
        "steps": [
          "Ask, ask on paper, watch, read."
        ],
        "a": "Interviews, questionnaires, observation, document review"
      },
      {
        "q": "The term fee is 15,000. Give a normal, a boundary and an erroneous test value for a payment.",
        "steps": [
          "Typical, edge, invalid."
        ],
        "a": "5,000; 15,000 (or 0); −200 or 'abc'"
      },
      {
        "q": "Old and new systems run together for a term. Which changeover?",
        "steps": [
          "Both at once."
        ],
        "a": "Parallel"
      },
      {
        "q": "One school in the county uses the system first. Which changeover?",
        "steps": [
          "One site first."
        ],
        "a": "Pilot"
      },
      {
        "q": "Testing by inputs and outputs without reading the code is called?",
        "steps": [
          "Opaque box."
        ],
        "a": "Black-box testing"
      },
      {
        "q": "Name the four symbols of a data flow diagram.",
        "steps": [
          "Who, what, where kept, how it moves."
        ],
        "a": "External entity, process, data store, data flow"
      }
    ]
  },
  {
    "grade": 12,
    "period": "IV",
    "sem": "Two",
    "icon": "⏱️",
    "csPlan": true,
    "title": "Algorithm Efficiency — Searching, Sorting and Big-O",
    "subtitle": "Computer Science · Original senior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Written for classes that may have no computer lab: every conversion, truth table, trace, query and program in the unit can be done on paper, and a shared device extends it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary precisely in speech, writing and examination answers.",
      "Solve the unit's problems on paper — conversions, truth tables, traces, queries, formulas or designs — showing every step of working.",
      "Evaluate a technology choice for its safety, legality, cost and effect on people in Liberia."
    ],
    "objectives": [
      "Define the key terms in “Algorithm Efficiency — Searching, Sorting and Big-O” precisely and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm, program or procedure connected with this unit, on paper.",
      "Classify examples into the unit's two groups and justify each placement.",
      "Solve a worked example step by step, showing every line of working, and state the answer in a full sentence with its unit or type.",
      "Apply the unit's ideas to a fictional Liberian business, ministry, clinic or school scenario.",
      "Find and correct a bug in a set of steps, a circuit, a query or a program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared test log.",
      "Explain one Liberian example of this unit's idea (mobile money, the ACE submarine cable, a hospital record, a bank, the national examination system or a radio station)."
    ],
    "safeguard": "A senior high computing lesson uses paper traces, truth tables, printed listings and, when one is present, a shared school computer or the teacher's own device. Students never share passwords, PINs or one-time codes, never install software on a school machine without permission, and never photograph, record or post a classmate without consent. A program written in class must never be used to guess a password, send bulk messages or enter another person's account — that is a crime, not a prank. If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "Algorithm efficiency describes how running time or memory grows with input size n, expressed with Big-O: O(1), O(log n), O(n), O(n log n), O(n²). Linear search is O(n); binary search on a sorted list is O(log n). Bubble and insertion sort are O(n²); merge sort is O(n log n). Choosing an algorithm weighs time, memory, simplicity and whether the data is already sorted.",
    "focus": [
      "Worked demonstration on paper",
      "Pair programming and debugging",
      "Liberian case scenario",
      "Practical and period check"
    ],
    "terms": [
      {
        "t": "efficiency",
        "d": "how the time or memory an algorithm needs grows as the size of its input grows",
        "x": "In this unit, efficiency means how the time or memory an algorithm needs grows as the size of its input grows."
      },
      {
        "t": "Big-O notation",
        "d": "a way of writing the growth rate of an algorithm's steps as a function of input size n, ignoring constants",
        "x": "In this unit, Big-O notation means a way of writing the growth rate of an algorithm's steps as a function of input size n, ignoring constants."
      },
      {
        "t": "O(1)",
        "d": "constant time: the same number of steps whatever the input size, such as reading one array element",
        "x": "In this unit, O(1) means constant time: the same number of steps whatever the input size, such as reading one array element."
      },
      {
        "t": "O(log n)",
        "d": "logarithmic time: steps grow by one each time the input doubles, such as binary search",
        "x": "In this unit, O(log n) means logarithmic time: steps grow by one each time the input doubles, such as binary search."
      },
      {
        "t": "O(n)",
        "d": "linear time: steps grow in proportion to the input, such as linear search or summing a list",
        "x": "In this unit, O(n) means linear time: steps grow in proportion to the input, such as linear search or summing a list."
      },
      {
        "t": "O(n²)",
        "d": "quadratic time: steps grow with the square of the input, such as bubble sort or nested loops over the same list",
        "x": "In this unit, O(n²) means quadratic time: steps grow with the square of the input, such as bubble sort or nested loops over the same list."
      },
      {
        "t": "binary search",
        "d": "searching a sorted list by comparing with the middle item and discarding the half that cannot contain the target",
        "x": "In this unit, binary search means searching a sorted list by comparing with the middle item and discarding the half that cannot contain the target."
      },
      {
        "t": "merge sort",
        "d": "a sorting algorithm that splits the list in halves, sorts each half and merges them; O(n log n)",
        "x": "In this unit, merge sort means a sorting algorithm that splits the list in halves, sorts each half and merges them; O(n log n)."
      },
      {
        "t": "insertion sort",
        "d": "a sorting algorithm that takes each item in turn and inserts it into its place among the already sorted items; O(n²) but fast on nearly sorted data",
        "x": "In this unit, insertion sort means a sorting algorithm that takes each item in turn and inserts it into its place among the already sorted items; O(n²) but fast on nearly sorted data."
      },
      {
        "t": "best, average and worst case",
        "d": "the fewest, typical and most steps an algorithm can take for an input of size n",
        "x": "In this unit, best, average and worst case means the fewest, typical and most steps an algorithm can take for an input of size n."
      },
      {
        "t": "space complexity",
        "d": "how the memory an algorithm needs grows with the input size",
        "x": "In this unit, space complexity means how the memory an algorithm needs grows with the input size."
      },
      {
        "t": "trade-off",
        "d": "accepting a cost in one measure (memory, simplicity) to gain in another (speed)",
        "x": "In this unit, trade-off means accepting a cost in one measure (memory, simplicity) to gain in another (speed)."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “efficiency” in this unit?",
        "a": "how the time or memory an algorithm needs grows as the size of its input grows."
      },
      {
        "q": "What is meant by “Big-O notation” in this unit?",
        "a": "a way of writing the growth rate of an algorithm's steps as a function of input size n, ignoring constants."
      },
      {
        "q": "What is meant by “O(1)” in this unit?",
        "a": "constant time: the same number of steps whatever the input size, such as reading one array element."
      },
      {
        "q": "What is meant by “O(log n)” in this unit?",
        "a": "logarithmic time: steps grow by one each time the input doubles, such as binary search."
      },
      {
        "q": "What is meant by “O(n)” in this unit?",
        "a": "linear time: steps grow in proportion to the input, such as linear search or summing a list."
      },
      {
        "q": "What is meant by “O(n²)” in this unit?",
        "a": "quadratic time: steps grow with the square of the input, such as bubble sort or nested loops over the same list."
      },
      {
        "q": "What is meant by “binary search” in this unit?",
        "a": "searching a sorted list by comparing with the middle item and discarding the half that cannot contain the target."
      },
      {
        "q": "What is meant by “merge sort” in this unit?",
        "a": "a sorting algorithm that splits the list in halves, sorts each half and merges them; O(n log n)."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A county examination office's results program, written for one school of 40 candidates with a bubble sort and a linear search, is given the county's 12,000 candidates and is still sorting at midnight on results day."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Count the work: bubble sort at 12,000² is about 144 million comparisons where 40² was 1,600; replace it with the language's built-in O(n log n) sort (about 160,000 comparisons), sort once and use binary search for lookups, and add a test with the largest expected n to the test plan so the next growth is planned, not discovered."
      },
      {
        "q": "State this unit idea in your own words: Binary search halves the remaining list at every step, so a sorted list of a million items needs at most about twenty comparisons.",
        "a": "Binary search halves the remaining list at every step, so a sorted list of a million items needs at most about twenty comparisons."
      },
      {
        "q": "State this unit idea in your own words: An O(n²) sort on ten times the data does about a hundred times the work; an O(n log n) sort does a little more than ten times.",
        "a": "An O(n²) sort on ten times the data does about a hundred times the work; an O(n log n) sort does a little more than ten times."
      },
      {
        "q": "What does Big-O notation describe?",
        "a": "How the number of steps (or the memory) an algorithm needs grows with the size of its input, ignoring constant factors."
      },
      {
        "q": "Why might a programmer still choose bubble sort?",
        "a": "For very small lists it is simple, easy to verify and fast enough; efficiency matters as n grows."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Algorithm Efficiency — Searching, Sorting and Big-O” Is"
      },
      {
        "k": "p",
        "t": "Two correct algorithms can differ a millionfold in time. **Efficiency** is measured by how the number of steps grows with the input size n, written in **Big-O notation**: **O(1)** constant, **O(log n)** logarithmic, **O(n)** linear, **O(n²)** quadratic. A **linear search** is O(n); a **binary search** on sorted data is O(log n); **bubble sort** is O(n²) while **merge sort** is O(n log n). The **trade-off** between time and **memory**, and between simple and fast, is a design decision — and the reason the results office with ten thousand candidates needs a better algorithm than the one that served forty. Offices whose 40-candidate program is still sorting 12,000 candidates at midnight have met O(n²) in person. Count the work: bubble sort at 12,000² is about 144 million comparisons where 40² was 1,600; replace it with the language's built-in O(n log n) sort (about 160,000 comparisons), sort once and use binary search for lookups, and add a test with the largest expected n to the test plan so the next growth is planned, not discovered. Binary search halves the remaining list at every step, so a sorted list of a million items needs at most about twenty comparisons. An O(n²) sort on ten times the data does about a hundred times the work; an O(n log n) sort does a little more than ten times."
      },
      {
        "k": "p",
        "t": "Algorithm efficiency describes how running time or memory grows with input size n, expressed with Big-O: O(1), O(log n), O(n), O(n log n), O(n²). Linear search is O(n); binary search on a sorted list is O(log n). Bubble and insertion sort are O(n²); merge sort is O(n log n). Choosing an algorithm weighs time, memory, simplicity and whether the data is already sorted."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: Binary search halves the remaining list at every step, so a sorted list of a million items needs at most about twenty comparisons. An O(n²) sort on ten times the data does about a hundred times the work; an O(n log n) sort does a little more than ten times."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Ideas in This Unit"
      },
      {
        "k": "p",
        "t": "Each idea below is a working definition for Grade 12. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
      },
      {
        "k": "table",
        "head": [
          "Term",
          "What it means",
          "A sentence that uses it"
        ],
        "rows": [
          [
            "efficiency",
            "how the time or memory an algorithm needs grows as the size of its input grows",
            "In this unit, efficiency means how the time or memory an algorithm needs grows as the size of its input grows."
          ],
          [
            "Big-O notation",
            "a way of writing the growth rate of an algorithm's steps as a function of input size n, ignoring constants",
            "In this unit, Big-O notation means a way of writing the growth rate of an algorithm's steps as a function of input size n, ignoring constants."
          ],
          [
            "O(1)",
            "constant time: the same number of steps whatever the input size, such as reading one array element",
            "In this unit, O(1) means constant time: the same number of steps whatever the input size, such as reading one array element."
          ],
          [
            "O(log n)",
            "logarithmic time: steps grow by one each time the input doubles, such as binary search",
            "In this unit, O(log n) means logarithmic time: steps grow by one each time the input doubles, such as binary search."
          ],
          [
            "O(n)",
            "linear time: steps grow in proportion to the input, such as linear search or summing a list",
            "In this unit, O(n) means linear time: steps grow in proportion to the input, such as linear search or summing a list."
          ],
          [
            "O(n²)",
            "quadratic time: steps grow with the square of the input, such as bubble sort or nested loops over the same list",
            "In this unit, O(n²) means quadratic time: steps grow with the square of the input, such as bubble sort or nested loops over the same list."
          ],
          [
            "binary search",
            "searching a sorted list by comparing with the middle item and discarding the half that cannot contain the target",
            "In this unit, binary search means searching a sorted list by comparing with the middle item and discarding the half that cannot contain the target."
          ],
          [
            "merge sort",
            "a sorting algorithm that splits the list in halves, sorts each half and merges them; O(n log n)",
            "In this unit, merge sort means a sorting algorithm that splits the list in halves, sorts each half and merges them; O(n log n)."
          ],
          [
            "insertion sort",
            "a sorting algorithm that takes each item in turn and inserts it into its place among the already sorted items; O(n²) but fast on nearly sorted data",
            "In this unit, insertion sort means a sorting algorithm that takes each item in turn and inserts it into its place among the already sorted items; O(n²) but fast on nearly sorted data."
          ],
          [
            "best, average and worst case",
            "the fewest, typical and most steps an algorithm can take for an input of size n",
            "In this unit, best, average and worst case means the fewest, typical and most steps an algorithm can take for an input of size n."
          ],
          [
            "space complexity",
            "how the memory an algorithm needs grows with the input size",
            "In this unit, space complexity means how the memory an algorithm needs grows with the input size."
          ],
          [
            "trade-off",
            "accepting a cost in one measure (memory, simplicity) to gain in another (speed)",
            "In this unit, trade-off means accepting a cost in one measure (memory, simplicity) to gain in another (speed)."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Tell Them Apart"
      },
      {
        "k": "bul",
        "items": [
          "**Linear search** — any list, O(n); **binary search** — sorted list only, O(log n).",
          "**Bubble sort** — simple, O(n²); **merge sort** — faster, O(n log n), needs extra memory.",
          "**Best case** for linear search is 1 comparison; **worst case** is n; **average** about n/2.",
          "**Doubling n** adds one step to O(log n), doubles O(n), quadruples O(n²).",
          "**Big-O** drops constants: 3n + 5 is O(n); n²/2 is O(n²)."
        ]
      },
      {
        "k": "table",
        "head": [
          "n",
          "O(log n) steps",
          "O(n) steps",
          "O(n²) steps"
        ],
        "rows": [
          [
            "10",
            "about 4",
            "10",
            "100"
          ],
          [
            "100",
            "about 7",
            "100",
            "10,000"
          ],
          [
            "1,000",
            "about 10",
            "1,000",
            "1,000,000"
          ],
          [
            "10,000",
            "about 14",
            "10,000",
            "100,000,000"
          ],
          [
            "1,000,000",
            "about 20",
            "1,000,000",
            "1,000,000,000,000"
          ],
          [
            "Doubling n",
            "+1 step",
            "×2",
            "×4"
          ]
        ]
      },
      {
        "k": "p",
        "t": "A second table for this unit, so the distinction can be practised twice:"
      },
      {
        "k": "table",
        "head": [
          "Algorithm",
          "Big-O (typical / worst)",
          "Notes"
        ],
        "rows": [
          [
            "Linear search",
            "O(n)",
            "Works on unsorted data"
          ],
          [
            "Binary search",
            "O(log n)",
            "Data must be sorted first"
          ],
          [
            "Bubble sort",
            "O(n²)",
            "Simple; stops early if a pass has no swaps"
          ],
          [
            "Insertion sort",
            "O(n²), O(n) if nearly sorted",
            "Good for small or nearly sorted lists"
          ],
          [
            "Merge sort",
            "O(n log n)",
            "Needs extra memory for merging"
          ],
          [
            "Reading one element by index",
            "O(1)",
            "Constant whatever the list size"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why This Matters in Liberia"
      },
      {
        "k": "p",
        "t": "The examination council searching ten thousand candidates by number, the mobile-money provider finding one account among millions, the voter roll sorted by district, the clinic's list sorted by date — each runs a search or a sort whose Big-O decides whether the answer takes a second or an afternoon on the modest servers Liberia can afford. A Grade 12 student who can count the comparisons of a binary search on paper and explain why a bubble sort of the national register would never finish is thinking like the engineer the country needs, and the examiner expects exactly that reasoning."
      },
      {
        "k": "p",
        "t": "This course is an **original teaching resource**, not an official syllabus transcription. A school without a computer lab is not a school without Computer Science. Teachers should compare the unit with the school's approved scheme of work before use."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Paper-First Method"
      },
      {
        "k": "p",
        "t": "The class investigation is **“Counting comparisons — linear against binary, bubble against merge”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Pairs write sixteen sorted numbers on cards in a row; the navigator names a target and the driver performs a binary search aloud — middle, discard half, middle again — counting comparisons; they repeat for a target not in the list, then perform a linear search for the same targets and compare counts.",
          "They double the list to thirty-two cards and repeat, recording how the counts change for each method (one more for binary, about double for linear).",
          "They bubble sort eight shuffled cards counting every comparison, then merge sort the same eight — split into halves, sort each, merge — counting comparisons, and tabulate both.",
          "They fill a growth table for n = 10, 100, 1,000, 10,000 for O(log n), O(n), O(n²) and state, in words, what happens to the results office when n grows from 40 to 10,000.",
          "If Python is available, one pair times a linear and a binary search on a list of a million numbers while the others predict the ratio; otherwise the comparison tables are the finished work."
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Worked Example in Prose"
      },
      {
        "k": "p",
        "t": "**Problem.** A sorted list of 16 candidate numbers is searched for 47: [3, 8, 12, 19, 23, 27, 31, 35, 40, 44, 47, 52, 58, 63, 71, 80]. Perform a binary search showing each comparison, count the comparisons, compare with the worst case of a linear search, and state how many comparisons a binary search would need at most for 1,000,000 sorted numbers."
      },
      {
        "k": "num",
        "items": [
          "Low 0, high 15, middle index 7 → 35 < 47, so search the right half: low 8.",
          "Low 8, high 15, middle 11 → 52 > 47, so search the left part: high 10.",
          "Low 8, high 10, middle 9 → 44 < 47, so low 10.",
          "Low 10, high 10, middle 10 → 47 = target. Found after 4 comparisons.",
          "Linear search worst case: 16 comparisons (target at the end or absent). For 1,000,000 items binary search needs at most about log₂(1,000,000) ≈ 20 comparisons; linear search up to 1,000,000."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** Binary search finds 47 in 4 comparisons (35, 52, 44, 47) against a linear worst case of 16; for a million items binary needs about 20, linear up to a million."
      },
      {
        "k": "p",
        "t": "Notice the method: name what you know, run one step at a time, write the result of each step, then state the answer in a full sentence. That is the same habit a Physics class uses on a numerical problem; here the 'calculation' is a trace, a conversion, a truth table, a formula, a query or a debug."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Common Mistakes"
      },
      {
        "k": "bul",
        "items": [
          "Applying binary search to an unsorted list.",
          "Counting the constant factors and reporting O(3n) instead of O(n).",
          "Assuming the faster algorithm is always right — for ten items, bubble sort is fine and simpler.",
          "Forgetting that sorting first costs time: one search does not justify sorting, a thousand do."
        ]
      },
      {
        "k": "p",
        "t": "The class rule still holds when a mistake appears: **we try, we debug, we do not laugh at a mistake.** A bug is in the steps, not in the person."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Safety, Ethics and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN or a one-time code, and nobody installs software on a school machine without permission. A program written in this course is never pointed at another person's account, phone or wallet: guessing a password, sending bulk messages or reading someone's data without consent is a crime under Liberian law, not a prank. Copying a program from a classmate and submitting it as your own is plagiarism. Pair work shares the thinking, not the credit for work you did not do."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered (screenshots, not deletions), and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Pair Roles: Driver and Navigator"
      },
      {
        "k": "p",
        "t": "A computing pair has two jobs that swap. The **driver** writes or works the next step. The **navigator** reads the algorithm or the listing, watches for a bug, and says 'stop' before a wrong line is copied. After five minutes they swap, so both practise both jobs. A third student may sit as **checker** and tick each step on the trace table. Taking turns is a computing skill, not a punishment for having only one computer — or none."
      },
      {
        "k": "table",
        "head": [
          "Role",
          "What this person does",
          "What this person does not do"
        ],
        "rows": [
          [
            "Driver",
            "Works or writes the current step",
            "Does not skip the navigator's 'stop'"
          ],
          [
            "Navigator",
            "Reads the steps and watches for bugs",
            "Does not grab the pencil, the keyboard or the mouse"
          ],
          [
            "Checker",
            "Ticks each step and records one bug on the class chart",
            "Does not laugh at a mistake"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Fictional Liberian Scenario"
      },
      {
        "k": "p",
        "t": "A county examination office's results program, written for one school of 40 candidates with a bubble sort and a linear search, is given the county's 12,000 candidates and is still sorting at midnight on results day."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Count the work: bubble sort at 12,000² is about 144 million comparisons where 40² was 1,600; replace it with the language's built-in O(n log n) sort (about 160,000 comparisons), sort once and use binary search for lookups, and add a test with the largest expected n to the test plan so the next growth is planned, not discovered."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Worked Computing Reasoning"
      },
      {
        "k": "p",
        "t": "Count the work: bubble sort at 12,000² is about 144 million comparisons where 40² was 1,600; replace it with the language's built-in O(n log n) sort (about 160,000 comparisons), sort once and use binary search for lookups, and add a test with the largest expected n to the test plan so the next growth is planned, not discovered."
      },
      {
        "k": "p",
        "t": "When you answer a scenario question, use this three-part shape: (1) name the computing idea (algorithm, data, network, security, binary, database, …); (2) say what a person should do, in order; (3) say why, with a unit term in the reason. Vague good intentions without a term do not yet show that the unit has been learned."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Practise It on Paper"
      },
      {
        "k": "p",
        "t": "The investigation **“Counting comparisons — linear against binary, bubble against merge”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
      },
      {
        "k": "table",
        "head": [
          "Paper object",
          "What it stands for",
          "What we write afterwards"
        ],
        "rows": [
          [
            "Sorted number cards",
            "The list being searched",
            "Comparison counts for linear and binary search"
          ],
          [
            "Shuffled cards",
            "The list being sorted",
            "Comparison counts for bubble and merge sort"
          ],
          [
            "Growth table",
            "How work grows with n",
            "Rows for 10 to 1,000,000 under each Big-O"
          ],
          [
            "Class chart",
            "Efficiency lessons the class recorded",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Big-O in Plain Words"
      },
      {
        "k": "p",
        "t": "Big-O asks: if I give the algorithm ten times more data, how much more work does it do? Ten times more is O(n). A hundred times more is O(n²). Barely more is O(log n). Constants and small terms are dropped because at large n they do not matter — and Liberia's registers are getting large."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why Binary Search Is So Fast"
      },
      {
        "k": "p",
        "t": "Each comparison discards half of what remains, so the number of comparisons is the number of times n can be halved: log₂ n. A million halves to one in twenty steps. The price is that the list must be sorted — which is why sorting algorithms matter."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Merge Sort in One Paragraph"
      },
      {
        "k": "p",
        "t": "Split the list in half until each piece has one item (already sorted). Merge pairs of pieces by repeatedly taking the smaller front item. Each level of merging touches all n items and there are log₂ n levels: O(n log n). It needs a second list for merging — a memory trade-off worth making beyond a few hundred items."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Choose for the Situation"
      },
      {
        "k": "p",
        "t": "Ten items typed by a clerk: any sort. Ten thousand candidates on results day: O(n log n) and a binary search. Data that is nearly sorted each morning: insertion sort shines. Memory so tight a second list will not fit: an in-place sort. The examiner rewards the reason, not the name."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "What a Period Test Asks"
      },
      {
        "k": "p",
        "t": "A fair period test on “Algorithm Efficiency — Searching, Sorting and Big-O” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit precisely and use each in a sentence.",
          "Solve or trace a problem connected with “Algorithm Efficiency — Searching, Sorting and Big-O” on paper, showing every line of working.",
          "Classify four examples using “O(log n) or O(n) / O(n log n) or O(n²)” and justify one placement.",
          "Find and correct a bug in a set of steps, a query or a program, and say what the bug was."
        ]
      },
      {
        "k": "p",
        "t": "Show every step of a tracing or conversion question, the way a Physics script shows working. A bare answer with no steps cannot be given full credit, because the teacher cannot see the method you ran."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Four Weeks of Study"
      },
      {
        "k": "p",
        "t": "A 4-week unit on “Algorithm Efficiency — Searching, Sorting and Big-O” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
      },
      {
        "k": "table",
        "head": [
          "Week",
          "Study focus",
          "What students leave able to do"
        ],
        "rows": [
          [
            "1",
            "What “Algorithm Efficiency — Searching, Sorting and Big-O” is, and where it already appears around us.",
            "Say what the unit is about and name two examples from Liberia."
          ],
          [
            "2",
            "Key ideas, distinctions and the unit table.",
            "Use the key terms and complete the distinction tables."
          ],
          [
            "3",
            "A Liberian example and the paper-first method, worked then written.",
            "Run the paper method and write the algorithm, table or report."
          ],
          [
            "4",
            "Worked problems, pair-debug, the computing fair and the period check.",
            "Solve a worked example, debug a bug, and sit the period check."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Check Yourself"
      },
      {
        "k": "p",
        "t": "Close the notes. (1) Say the unit title and one Liberian example. (2) Give the meaning of three terms without looking. (3) Work the paper method once more, showing every step. (4) Name one bug you would look for. (5) Say who you tell if a message asks for a photograph, a PIN or money. If any of those five stalls, go back to the table of terms and the worked example and run them again with a partner. Do not laugh at a bug — including your own."
      },
      {
        "k": "p",
        "t": "This is original supplementary teaching material for Liberian senior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, efficiency means how the time or memory an algorithm needs grows as the size of its input grows.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, Big-O notation means constant time: the same number of steps whatever the input size, such as reading one array element.",
        "a": "False",
        "why": "Big-O notation means a way of writing the growth rate of an algorithm's steps as a function of input size n, ignoring constants; the statement describes O(1)."
      },
      {
        "s": "In this unit, O(log n) means logarithmic time: steps grow by one each time the input doubles, such as binary search.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Every conversion, truth table, trace and program in the unit can be worked on paper; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the code or the steps, not in the person."
      },
      {
        "s": "Students should share passwords, PINs or one-time codes so a partner can finish the work.",
        "a": "False",
        "why": "A password, PIN or one-time code is secret. Sharing one is how accounts and mobile-money wallets are emptied."
      },
      {
        "s": "Binary search halves the remaining list at every step, so a sorted list of a million items needs at most about twenty comparisons.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "Binary search works on any list, sorted or not.",
        "a": "False",
        "why": "Binary search discards half the list based on order, so the list must be sorted."
      },
      {
        "s": "Doubling the input size roughly quadruples the work of an O(n²) algorithm.",
        "a": "True",
        "why": "(2n)² = 4n²."
      }
    ],
    "classify": {
      "title": "O(log n) or O(n) / O(n log n) or O(n²)",
      "groups": [
        {
          "name": "O(log n) or O(n)",
          "items": [
            "binary search on a sorted list",
            "linear search",
            "summing a list with one loop",
            "finding the maximum with one pass",
            "counting passes ≥ 50 with one loop",
            "insertion sort on already-sorted data"
          ]
        },
        {
          "name": "O(n log n) or O(n²)",
          "items": [
            "bubble sort",
            "insertion sort on shuffled data",
            "merge sort",
            "two nested loops over the same list",
            "comparing every pair of students",
            "selection sort"
          ]
        }
      ]
    },
    "diagram": {
      "title": "Binary search halving a sorted list",
      "caption": "Label each part and state what it does in “Algorithm Efficiency — Searching, Sorting and Big-O”.",
      "parts": [
        {
          "p": "Whole list (n items)",
          "f": "compare the target with the middle item"
        },
        {
          "p": "Half (n/2)",
          "f": "discard the half that cannot contain the target; compare with the new middle"
        },
        {
          "p": "Quarter (n/4)",
          "f": "and again — each step halves what is left"
        },
        {
          "p": "One item",
          "f": "found, or absent if the range is empty"
        },
        {
          "p": "Count",
          "f": "about log₂ n comparisons: 20 for a million items"
        }
      ]
    },
    "experiment": {
      "title": "Counting comparisons — linear against binary, bubble against merge",
      "aim": "To practise the ideas of “Algorithm Efficiency — Searching, Sorting and Big-O” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Printed listings, cards and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class test log",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “Counting comparisons — linear against binary, bubble against merge” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A county examination office's results program, written for one school of 40 candidates with a bubble sort and a linear search, is given the county's 12,000 candidates and is still sorting at midnight on results day. What should happen next?",
        "a": "Count the work: bubble sort at 12,000² is about 144 million comparisons where 40² was 1,600; replace it with the language's built-in O(n log n) sort (about 160,000 comparisons), sort once and use binary search for lookups, and add a test with the largest expected n to the test plan so the next growth is planned, not discovered."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Algorithm Efficiency — Searching, Sorting and Big-O”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's program or trace fails. What do you say, and why?",
        "a": "Remind the class that a bug is in the code or the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the exact line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian working life (a bank, a mobile-money agent, a clinic, a radio station, a business, a ministry).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as a bank's database, a mobile-money transaction, a hospital record, a radio station's schedule or a ministry's website."
      },
      {
        "q": "A mobile-money provider must find one account among 4 million by account number. Compare linear and binary search in worst-case comparisons and state the condition binary search needs.",
        "a": "Linear: up to 4,000,000; binary: about 22 (2²² ≈ 4.2 million); the account numbers must be kept sorted (or indexed)."
      },
      {
        "q": "A clinic's daily list of 30 patients is nearly sorted by arrival time each morning with a few late entries. Which sort would you use and why? Would your answer change for 30,000 unsorted records?",
        "a": "Insertion sort: nearly sorted data makes it close to O(n) and it is simple; for 30,000 unsorted records use merge sort or the built-in O(n log n) sort."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “Counting comparisons — linear against binary, bubble against merge” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, squared paper and printed listings",
      "A class computing chart and test log",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's device, kept dry and in sight"
    ],
    "aids": [
      "Word cards — efficiency, Big-O notation, O(1)",
      "A flowchart or trace table of “Counting comparisons — linear against binary, bubble against merge”",
      "Sixteen sorted number cards, a comparison tally sheet and a Big-O growth table",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing term and what it means.",
      "Work this week's paper method (a conversion, a truth table, a trace, a query or a design) again with a friend — no device needed.",
      "Find one example of this unit's idea in your community (a bank, a mobile-money kiosk, a clinic, a radio station, a business or a ministry office) and write a paragraph about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written trace, conversion, truth table or query with full working",
      "Pair-debug observed against the class test log",
      "A short written response to the Liberian case scenario"
    ],
    "worked": [
      {
        "q": "Linear search on 16 items, target absent. Comparisons?",
        "steps": [
          "Every item checked."
        ],
        "a": "16"
      },
      {
        "q": "Binary search on 16 sorted items. Maximum comparisons?",
        "steps": [
          "log₂ 16 = 4, plus possibly one more check."
        ],
        "a": "About 4 (at most 5)"
      },
      {
        "q": "Binary search on 1,000,000 sorted items. About how many comparisons at most?",
        "steps": [
          "2²⁰ ≈ 1,000,000."
        ],
        "a": "About 20"
      },
      {
        "q": "Bubble sort on 40 items ≈ 1,600 comparisons. On 12,000 items?",
        "steps": [
          "12,000² = 144,000,000."
        ],
        "a": "About 144 million"
      },
      {
        "q": "n doubles. How do O(n), O(n²) and O(log n) step counts change?",
        "steps": [
          "×2, ×4, +1."
        ],
        "a": "O(n) doubles; O(n²) quadruples; O(log n) adds one"
      },
      {
        "q": "What is the Big-O of 3n + 5? Of n²/2 + n?",
        "steps": [
          "Drop constants and smaller terms."
        ],
        "a": "O(n); O(n²)"
      },
      {
        "q": "Can binary search be used on [40, 12, 75, 3]? Why?",
        "steps": [
          "Not sorted."
        ],
        "a": "No — the list must be sorted first"
      },
      {
        "q": "Which needs extra memory for a second list: bubble sort or merge sort?",
        "steps": [
          "Merging step."
        ],
        "a": "Merge sort"
      }
    ]
  },
  {
    "grade": 12,
    "period": "V",
    "sem": "Two",
    "icon": "🤖",
    "csPlan": true,
    "title": "Artificial Intelligence, Data Science and Emerging Technologies",
    "subtitle": "Computer Science · Original senior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Written for classes that may have no computer lab: every conversion, truth table, trace, query and program in the unit can be done on paper, and a shared device extends it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary precisely in speech, writing and examination answers.",
      "Solve the unit's problems on paper — conversions, truth tables, traces, queries, formulas or designs — showing every step of working.",
      "Evaluate a technology choice for its safety, legality, cost and effect on people in Liberia."
    ],
    "objectives": [
      "Define the key terms in “Artificial Intelligence, Data Science and Emerging Technologies” precisely and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm, program or procedure connected with this unit, on paper.",
      "Classify examples into the unit's two groups and justify each placement.",
      "Solve a worked example step by step, showing every line of working, and state the answer in a full sentence with its unit or type.",
      "Apply the unit's ideas to a fictional Liberian business, ministry, clinic or school scenario.",
      "Find and correct a bug in a set of steps, a circuit, a query or a program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared test log.",
      "Explain one Liberian example of this unit's idea (mobile money, the ACE submarine cable, a hospital record, a bank, the national examination system or a radio station)."
    ],
    "safeguard": "A senior high computing lesson uses paper traces, truth tables, printed listings and, when one is present, a shared school computer or the teacher's own device. Students never share passwords, PINs or one-time codes, never install software on a school machine without permission, and never photograph, record or post a classmate without consent. A program written in class must never be used to guess a password, send bulk messages or enter another person's account — that is a crime, not a prank. If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "Machine learning trains a model on data to make predictions; supervised learning uses labelled examples, unsupervised learning finds structure without labels. A model is evaluated on separate test data by accuracy and other measures; bias in training data produces biased predictions. Data science covers collecting, cleaning, exploring and visualising data. Emerging technologies — IoT, blockchain, robotics, generative AI — bring benefits, risks and questions of ethics, accountability and access.",
    "focus": [
      "Worked demonstration on paper",
      "Pair programming and debugging",
      "Liberian case scenario",
      "Practical and period check"
    ],
    "terms": [
      {
        "t": "machine learning",
        "d": "building a model that improves at a task by learning from data rather than by following hand-written rules",
        "x": "In this unit, machine learning means building a model that improves at a task by learning from data rather than by following hand-written rules."
      },
      {
        "t": "model",
        "d": "the learned function that turns inputs, such as a leaf photo or a patient's symptoms, into a prediction",
        "x": "In this unit, model means the learned function that turns inputs, such as a leaf photo or a patient's symptoms, into a prediction."
      },
      {
        "t": "training data",
        "d": "the labelled examples a model learns from",
        "x": "In this unit, training data means the labelled examples a model learns from."
      },
      {
        "t": "test data",
        "d": "examples kept aside during training and used afterwards to measure how well the model performs on unseen cases",
        "x": "In this unit, test data means examples kept aside during training and used afterwards to measure how well the model performs on unseen cases."
      },
      {
        "t": "supervised learning",
        "d": "learning from examples that carry the right answer, such as photos labelled 'diseased' or 'healthy'",
        "x": "In this unit, supervised learning means learning from examples that carry the right answer, such as photos labelled 'diseased' or 'healthy'."
      },
      {
        "t": "unsupervised learning",
        "d": "finding groups or patterns in data that has no labels, such as clustering clinics by their case profiles",
        "x": "In this unit, unsupervised learning means finding groups or patterns in data that has no labels, such as clustering clinics by their case profiles."
      },
      {
        "t": "classification",
        "d": "predicting a category, such as pass or fail, fever or no fever",
        "x": "In this unit, classification means predicting a category, such as pass or fail, fever or no fever."
      },
      {
        "t": "regression",
        "d": "predicting a number, such as next month's rainfall or a student's mark",
        "x": "In this unit, regression means predicting a number, such as next month's rainfall or a student's mark."
      },
      {
        "t": "accuracy",
        "d": "the share of predictions that are correct; one measure among several, misleading when classes are unbalanced",
        "x": "In this unit, accuracy means the share of predictions that are correct; one measure among several, misleading when classes are unbalanced."
      },
      {
        "t": "bias",
        "d": "systematic error in a model caused by unrepresentative or prejudiced training data",
        "x": "In this unit, bias means systematic error in a model caused by unrepresentative or prejudiced training data."
      },
      {
        "t": "big data",
        "d": "data too large, fast or varied for ordinary tools, such as a mobile network's call records",
        "x": "In this unit, big data means data too large, fast or varied for ordinary tools, such as a mobile network's call records."
      },
      {
        "t": "generative AI",
        "d": "models that produce new text, images or code from a prompt, trained on very large collections of existing work",
        "x": "In this unit, generative AI means models that produce new text, images or code from a prompt, trained on very large collections of existing work."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “machine learning” in this unit?",
        "a": "building a model that improves at a task by learning from data rather than by following hand-written rules."
      },
      {
        "q": "What is meant by “model” in this unit?",
        "a": "the learned function that turns inputs, such as a leaf photo or a patient's symptoms, into a prediction."
      },
      {
        "q": "What is meant by “training data” in this unit?",
        "a": "the labelled examples a model learns from."
      },
      {
        "q": "What is meant by “test data” in this unit?",
        "a": "examples kept aside during training and used afterwards to measure how well the model performs on unseen cases."
      },
      {
        "q": "What is meant by “supervised learning” in this unit?",
        "a": "learning from examples that carry the right answer, such as photos labelled 'diseased' or 'healthy'."
      },
      {
        "q": "What is meant by “unsupervised learning” in this unit?",
        "a": "finding groups or patterns in data that has no labels, such as clustering clinics by their case profiles."
      },
      {
        "q": "What is meant by “classification” in this unit?",
        "a": "predicting a category, such as pass or fail, fever or no fever."
      },
      {
        "q": "What is meant by “regression” in this unit?",
        "a": "predicting a number, such as next month's rainfall or a student's mark."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "An NGO offers a Liberian county a free AI tool that flags students 'likely to drop out', trained on data from schools abroad; the county plans to withdraw scholarships from every flagged student to save money."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Test the model on local data with a confusion table by sex, district and language before any use; count who it wrongly flags; keep a person accountable for each decision with the model as one input; and never use a risk flag to remove support — use it to offer support, which is the purpose the data can justify."
      },
      {
        "q": "State this unit idea in your own words: A machine-learning model is only as good and as fair as the data it was trained on, and it is tested on data it has never seen.",
        "a": "A machine-learning model is only as good and as fair as the data it was trained on, and it is tested on data it has never seen."
      },
      {
        "q": "State this unit idea in your own words: Accuracy alone can mislead: a model that predicts 'no malaria' for everyone is 90% accurate where 10% of patients have malaria and useless.",
        "a": "Accuracy alone can mislead: a model that predicts 'no malaria' for everyone is 90% accurate where 10% of patients have malaria and useless."
      },
      {
        "q": "What is the difference between supervised and unsupervised learning?",
        "a": "Supervised learning learns from examples with the correct answer attached; unsupervised learning finds groups or patterns in data that has no labels."
      },
      {
        "q": "Why can accuracy be a misleading measure?",
        "a": "When one class is rare, a model that always predicts the common class scores highly while finding none of the rare cases that matter."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Artificial Intelligence, Data Science and Emerging Technologies” Is"
      },
      {
        "k": "p",
        "t": "**Artificial intelligence** today mostly means **machine learning**: a **model** trained on **training data** to make predictions, checked on **test data**, and judged by its **accuracy** and its **bias**. **Data science** prepares, explores and visualises data before any model exists; **big data** names the scale at which mobile networks and satellites now produce it. **Supervised learning** learns from labelled examples, **unsupervised learning** finds groups without labels. Around these sit the technologies arriving in Liberia — the **Internet of Things**, **blockchain**, **cloud AI services** — and the questions of who owns the data, who is accountable for the decision, and who is left out. Counties that plan to withdraw scholarships from every student an imported model flags have let a prediction become a decision. Test the model on local data with a confusion table by sex, district and language before any use; count who it wrongly flags; keep a person accountable for each decision with the model as one input; and never use a risk flag to remove support — use it to offer support, which is the purpose the data can justify. A machine-learning model is only as good and as fair as the data it was trained on, and it is tested on data it has never seen. Accuracy alone can mislead: a model that predicts 'no malaria' for everyone is 90% accurate where 10% of patients have malaria and useless."
      },
      {
        "k": "p",
        "t": "Machine learning trains a model on data to make predictions; supervised learning uses labelled examples, unsupervised learning finds structure without labels. A model is evaluated on separate test data by accuracy and other measures; bias in training data produces biased predictions. Data science covers collecting, cleaning, exploring and visualising data. Emerging technologies — IoT, blockchain, robotics, generative AI — bring benefits, risks and questions of ethics, accountability and access."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: A machine-learning model is only as good and as fair as the data it was trained on, and it is tested on data it has never seen. Accuracy alone can mislead: a model that predicts 'no malaria' for everyone is 90% accurate where 10% of patients have malaria and useless."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Ideas in This Unit"
      },
      {
        "k": "p",
        "t": "Each idea below is a working definition for Grade 12. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
      },
      {
        "k": "table",
        "head": [
          "Term",
          "What it means",
          "A sentence that uses it"
        ],
        "rows": [
          [
            "machine learning",
            "building a model that improves at a task by learning from data rather than by following hand-written rules",
            "In this unit, machine learning means building a model that improves at a task by learning from data rather than by following hand-written rules."
          ],
          [
            "model",
            "the learned function that turns inputs, such as a leaf photo or a patient's symptoms, into a prediction",
            "In this unit, model means the learned function that turns inputs, such as a leaf photo or a patient's symptoms, into a prediction."
          ],
          [
            "training data",
            "the labelled examples a model learns from",
            "In this unit, training data means the labelled examples a model learns from."
          ],
          [
            "test data",
            "examples kept aside during training and used afterwards to measure how well the model performs on unseen cases",
            "In this unit, test data means examples kept aside during training and used afterwards to measure how well the model performs on unseen cases."
          ],
          [
            "supervised learning",
            "learning from examples that carry the right answer, such as photos labelled 'diseased' or 'healthy'",
            "In this unit, supervised learning means learning from examples that carry the right answer, such as photos labelled 'diseased' or 'healthy'."
          ],
          [
            "unsupervised learning",
            "finding groups or patterns in data that has no labels, such as clustering clinics by their case profiles",
            "In this unit, unsupervised learning means finding groups or patterns in data that has no labels, such as clustering clinics by their case profiles."
          ],
          [
            "classification",
            "predicting a category, such as pass or fail, fever or no fever",
            "In this unit, classification means predicting a category, such as pass or fail, fever or no fever."
          ],
          [
            "regression",
            "predicting a number, such as next month's rainfall or a student's mark",
            "In this unit, regression means predicting a number, such as next month's rainfall or a student's mark."
          ],
          [
            "accuracy",
            "the share of predictions that are correct; one measure among several, misleading when classes are unbalanced",
            "In this unit, accuracy means the share of predictions that are correct; one measure among several, misleading when classes are unbalanced."
          ],
          [
            "bias",
            "systematic error in a model caused by unrepresentative or prejudiced training data",
            "In this unit, bias means systematic error in a model caused by unrepresentative or prejudiced training data."
          ],
          [
            "big data",
            "data too large, fast or varied for ordinary tools, such as a mobile network's call records",
            "In this unit, big data means data too large, fast or varied for ordinary tools, such as a mobile network's call records."
          ],
          [
            "generative AI",
            "models that produce new text, images or code from a prompt, trained on very large collections of existing work",
            "In this unit, generative AI means models that produce new text, images or code from a prompt, trained on very large collections of existing work."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Tell Them Apart"
      },
      {
        "k": "bul",
        "items": [
          "**Supervised** — labelled examples, predicts a label or number; **unsupervised** — no labels, finds groups.",
          "**Classification** — a category; **regression** — a number.",
          "**Training data** teaches; **test data** examines — never test on the training data.",
          "**Accuracy** is one score; a **confusion table** shows which errors were made and to whom.",
          "**A model predicts**; **a person decides** and is accountable."
        ]
      },
      {
        "k": "table",
        "head": [
          "Task",
          "Type of learning",
          "Inputs → output"
        ],
        "rows": [
          [
            "Is this cassava leaf diseased?",
            "Supervised classification",
            "Photo → diseased / healthy"
          ],
          [
            "How many patients will the clinic see next week?",
            "Supervised regression",
            "Past counts, season → a number"
          ],
          [
            "Which villages have similar health patterns?",
            "Unsupervised clustering",
            "Case counts → groups"
          ],
          [
            "Which students are at risk of failing?",
            "Supervised classification",
            "Attendance, marks → at risk / not"
          ],
          [
            "Is this mobile-money transaction fraudulent?",
            "Supervised classification",
            "Amount, time, history → fraud / not"
          ],
          [
            "Draft a letter from a short prompt",
            "Generative model",
            "Prompt → text"
          ]
        ]
      },
      {
        "k": "p",
        "t": "A second table for this unit, so the distinction can be practised twice:"
      },
      {
        "k": "table",
        "head": [
          "Confusion table (100 patients, 10 with malaria)",
          "Model predicts malaria",
          "Model predicts no malaria"
        ],
        "rows": [
          [
            "Actually malaria (10)",
            "7 true positives",
            "3 false negatives (missed cases)"
          ],
          [
            "Actually no malaria (90)",
            "5 false positives",
            "85 true negatives"
          ],
          [
            "Accuracy",
            "(7 + 85) / 100 = 92%",
            "—"
          ],
          [
            "A 'no malaria for everyone' model",
            "0",
            "10 missed — yet 90% accurate"
          ],
          [
            "Which error is worse here?",
            "A missed case can be fatal",
            "A false alarm costs a test"
          ],
          [
            "Sensitivity (recall)",
            "7 / 10 = 70% of real cases found",
            "—"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why This Matters in Liberia"
      },
      {
        "k": "p",
        "t": "Liberia already produces big data — mobile-money transactions, call records, satellite images of forests and floods, health facility reports — and models trained elsewhere are already being offered to its clinics, farms and banks. A model trained on another continent's crops, faces or dialects will be biased here, and a model whose errors are never counted by group will hide who it fails. A Grade 12 student who can split data into training and test sets, read a confusion table, ask which error matters more for a malaria test, and insist that a person remains accountable for the decision is the person Liberia needs in the room when the model is bought."
      },
      {
        "k": "p",
        "t": "This course is an **original teaching resource**, not an official syllabus transcription. A school without a computer lab is not a school without Computer Science. Teachers should compare the unit with the school's approved scheme of work before use."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Paper-First Method"
      },
      {
        "k": "p",
        "t": "The class investigation is **“Train, test and audit a paper classifier”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Pairs receive forty 'patient' cards with temperature, cough and travel history and a hidden label (malaria or not); they set aside ten as test data and study the thirty training cards to write a simple rule (for example, temperature ≥ 38 and travel → malaria).",
          "They apply the rule to the ten test cards without looking at the labels, then reveal them and fill a confusion table: true and false positives and negatives; they compute accuracy and the share of real cases found.",
          "They compare with the 'always no' rule and explain why its high accuracy is worthless; they decide which error is worse for a clinic and adjust the rule's threshold accordingly, re-testing.",
          "They audit for bias: the training cards under-represent children; they check whether the rule fails children more often and write one sentence on what data should have been collected.",
          "If a machine is available, one pair trains a tiny decision tree or a spreadsheet rule on the same cards and compares its confusion table; otherwise the rule, the tables and the audit paragraph are the finished work."
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Worked Example in Prose"
      },
      {
        "k": "p",
        "t": "**Problem.** A malaria screening model is tested on 100 patients of whom 10 have malaria. It predicts malaria for 12 patients: 7 who have it and 5 who do not. Build the confusion table, compute the accuracy and the share of real cases found, compare with a model that always says 'no malaria', and say which error the clinic should work hardest to reduce."
      },
      {
        "k": "num",
        "items": [
          "True positives 7; false positives 5; false negatives 10 − 7 = 3; true negatives 90 − 5 = 85.",
          "Accuracy = (7 + 85) / 100 = 92%.",
          "Share of real cases found (sensitivity) = 7 / 10 = 70%.",
          "The 'always no' model: accuracy 90 / 100 = 90% but finds 0 of 10 cases — accuracy alone hides that it is useless.",
          "The clinic should reduce false negatives: a missed malaria case can be fatal, while a false positive costs one confirmatory test; lower the threshold and accept more false alarms."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** Accuracy 92% but only 70% of real cases found; the do-nothing model scores 90% and finds none, so the clinic should judge by missed cases and tune the model to reduce false negatives."
      },
      {
        "k": "p",
        "t": "Notice the method: name what you know, run one step at a time, write the result of each step, then state the answer in a full sentence. That is the same habit a Physics class uses on a numerical problem; here the 'calculation' is a trace, a conversion, a truth table, a formula, a query or a debug."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Common Mistakes"
      },
      {
        "k": "bul",
        "items": [
          "Testing a model on the same data it was trained on and reporting a perfect score.",
          "Reporting accuracy alone when one class is rare.",
          "Deploying a model trained on another population without checking its errors by group here.",
          "Letting the model's output stand as the decision with no person accountable."
        ]
      },
      {
        "k": "p",
        "t": "The class rule still holds when a mistake appears: **we try, we debug, we do not laugh at a mistake.** A bug is in the steps, not in the person."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Safety, Ethics and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN or a one-time code, and nobody installs software on a school machine without permission. A program written in this course is never pointed at another person's account, phone or wallet: guessing a password, sending bulk messages or reading someone's data without consent is a crime under Liberian law, not a prank. Copying a program from a classmate and submitting it as your own is plagiarism. Pair work shares the thinking, not the credit for work you did not do."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered (screenshots, not deletions), and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Pair Roles: Driver and Navigator"
      },
      {
        "k": "p",
        "t": "A computing pair has two jobs that swap. The **driver** writes or works the next step. The **navigator** reads the algorithm or the listing, watches for a bug, and says 'stop' before a wrong line is copied. After five minutes they swap, so both practise both jobs. A third student may sit as **checker** and tick each step on the trace table. Taking turns is a computing skill, not a punishment for having only one computer — or none."
      },
      {
        "k": "table",
        "head": [
          "Role",
          "What this person does",
          "What this person does not do"
        ],
        "rows": [
          [
            "Driver",
            "Works or writes the current step",
            "Does not skip the navigator's 'stop'"
          ],
          [
            "Navigator",
            "Reads the steps and watches for bugs",
            "Does not grab the pencil, the keyboard or the mouse"
          ],
          [
            "Checker",
            "Ticks each step and records one bug on the class chart",
            "Does not laugh at a mistake"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Fictional Liberian Scenario"
      },
      {
        "k": "p",
        "t": "An NGO offers a Liberian county a free AI tool that flags students 'likely to drop out', trained on data from schools abroad; the county plans to withdraw scholarships from every flagged student to save money."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Test the model on local data with a confusion table by sex, district and language before any use; count who it wrongly flags; keep a person accountable for each decision with the model as one input; and never use a risk flag to remove support — use it to offer support, which is the purpose the data can justify."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Worked Computing Reasoning"
      },
      {
        "k": "p",
        "t": "Test the model on local data with a confusion table by sex, district and language before any use; count who it wrongly flags; keep a person accountable for each decision with the model as one input; and never use a risk flag to remove support — use it to offer support, which is the purpose the data can justify."
      },
      {
        "k": "p",
        "t": "When you answer a scenario question, use this three-part shape: (1) name the computing idea (algorithm, data, network, security, binary, database, …); (2) say what a person should do, in order; (3) say why, with a unit term in the reason. Vague good intentions without a term do not yet show that the unit has been learned."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Practise It on Paper"
      },
      {
        "k": "p",
        "t": "The investigation **“Train, test and audit a paper classifier”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
      },
      {
        "k": "table",
        "head": [
          "Paper object",
          "What it stands for",
          "What we write afterwards"
        ],
        "rows": [
          [
            "Patient cards",
            "Training and test data",
            "A rule learned from 30 and tested on 10"
          ],
          [
            "Confusion table",
            "The model's errors",
            "TP, FP, FN, TN with accuracy and sensitivity"
          ],
          [
            "Bias audit sheet",
            "Errors by group",
            "One sentence on missing data"
          ],
          [
            "Class chart",
            "Model bugs the class found (tested on training data, accuracy only)",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Hold Out the Test Set"
      },
      {
        "k": "p",
        "t": "A model that has seen the answers will repeat them; that is memory, not learning. Set aside test data before training, never peek, and report performance on that set only. A vendor who cannot show results on data the model never saw has shown nothing."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Read the Confusion Table, Not the Headline"
      },
      {
        "k": "p",
        "t": "Four numbers — true and false positives, true and false negatives — tell you which mistakes a model makes and how often. From them come accuracy, sensitivity and precision. Ask which error hurts more in this clinic, this school, this bank, and tune for that."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Bias Is in the Data Before It Is in the Model"
      },
      {
        "k": "p",
        "t": "Trained mostly on adults, a model fails children; trained on one accent, it misunderstands another; trained on last decade's rainfall, it misses this decade's. The remedy is data collected here, labelled carefully, and errors counted by group — a task for Liberian data scientists."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Generative Models and Honest Work"
      },
      {
        "k": "p",
        "t": "A model that drafts an essay or code from a prompt is a tool like a calculator: useful, fallible and no substitute for understanding. Use it to draft and check, verify every fact it produces, cite it when required, and never submit its output as your own understanding in an examination that tests yours."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "What a Period Test Asks"
      },
      {
        "k": "p",
        "t": "A fair period test on “Artificial Intelligence, Data Science and Emerging Technologies” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit precisely and use each in a sentence.",
          "Solve or trace a problem connected with “Artificial Intelligence, Data Science and Emerging Technologies” on paper, showing every line of working.",
          "Classify four examples using “Supervised learning tasks / Unsupervised or generative tasks” and justify one placement.",
          "Find and correct a bug in a set of steps, a query or a program, and say what the bug was."
        ]
      },
      {
        "k": "p",
        "t": "Show every step of a tracing or conversion question, the way a Physics script shows working. A bare answer with no steps cannot be given full credit, because the teacher cannot see the method you ran."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Four Weeks of Study"
      },
      {
        "k": "p",
        "t": "A 4-week unit on “Artificial Intelligence, Data Science and Emerging Technologies” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
      },
      {
        "k": "table",
        "head": [
          "Week",
          "Study focus",
          "What students leave able to do"
        ],
        "rows": [
          [
            "1",
            "What “Artificial Intelligence, Data Science and Emerging Technologies” is, and where it already appears around us.",
            "Say what the unit is about and name two examples from Liberia."
          ],
          [
            "2",
            "Key ideas, distinctions and the unit table.",
            "Use the key terms and complete the distinction tables."
          ],
          [
            "3",
            "A Liberian example and the paper-first method, worked then written.",
            "Run the paper method and write the algorithm, table or report."
          ],
          [
            "4",
            "Worked problems, pair-debug, the computing fair and the period check.",
            "Solve a worked example, debug a bug, and sit the period check."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Check Yourself"
      },
      {
        "k": "p",
        "t": "Close the notes. (1) Say the unit title and one Liberian example. (2) Give the meaning of three terms without looking. (3) Work the paper method once more, showing every step. (4) Name one bug you would look for. (5) Say who you tell if a message asks for a photograph, a PIN or money. If any of those five stalls, go back to the table of terms and the worked example and run them again with a partner. Do not laugh at a bug — including your own."
      },
      {
        "k": "p",
        "t": "This is original supplementary teaching material for Liberian senior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, machine learning means building a model that improves at a task by learning from data rather than by following hand-written rules.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, model means the labelled examples a model learns from.",
        "a": "False",
        "why": "model means the learned function that turns inputs, such as a leaf photo or a patient's symptoms, into a prediction; the statement describes training data."
      },
      {
        "s": "In this unit, test data means examples kept aside during training and used afterwards to measure how well the model performs on unseen cases.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Every conversion, truth table, trace and program in the unit can be worked on paper; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the code or the steps, not in the person."
      },
      {
        "s": "Students should share passwords, PINs or one-time codes so a partner can finish the work.",
        "a": "False",
        "why": "A password, PIN or one-time code is secret. Sharing one is how accounts and mobile-money wallets are emptied."
      },
      {
        "s": "A machine-learning model is only as good and as fair as the data it was trained on, and it is tested on data it has never seen.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "A model that scores 99% on its own training data is proven to work.",
        "a": "False",
        "why": "It may have memorised the training data; only performance on unseen test data shows learning."
      },
      {
        "s": "In a disease-screening model a false negative is usually more serious than a false positive.",
        "a": "True",
        "why": "A missed case goes untreated; a false alarm costs a confirmatory test."
      }
    ],
    "classify": {
      "title": "Supervised learning tasks / Unsupervised or generative tasks",
      "groups": [
        {
          "name": "Supervised learning tasks",
          "items": [
            "diseased or healthy leaf from a photo",
            "predicting next week's patient count",
            "flagging a fraudulent transaction",
            "pass or fail from attendance and marks",
            "spam or not spam",
            "estimating a house price"
          ]
        },
        {
          "name": "Unsupervised or generative tasks",
          "items": [
            "grouping villages by health pattern",
            "clustering customers by spending",
            "finding unusual transactions with no labels",
            "drafting a letter from a prompt",
            "generating an image from a description",
            "discovering topics in a set of reports"
          ]
        }
      ]
    },
    "diagram": {
      "title": "The machine-learning workflow",
      "caption": "Label each part and state what it does in “Artificial Intelligence, Data Science and Emerging Technologies”.",
      "parts": [
        {
          "p": "Collect and clean data",
          "f": "gather examples, remove errors, label them"
        },
        {
          "p": "Split",
          "f": "training set to learn from; test set held back"
        },
        {
          "p": "Train",
          "f": "the model adjusts itself to fit the training data"
        },
        {
          "p": "Test",
          "f": "measure on unseen data with a confusion table, not accuracy alone"
        },
        {
          "p": "Deploy with oversight",
          "f": "a person accountable, errors monitored by group"
        }
      ]
    },
    "experiment": {
      "title": "Train, test and audit a paper classifier",
      "aim": "To practise the ideas of “Artificial Intelligence, Data Science and Emerging Technologies” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Printed listings, cards and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class test log",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “Train, test and audit a paper classifier” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: An NGO offers a Liberian county a free AI tool that flags students 'likely to drop out', trained on data from schools abroad; the county plans to withdraw scholarships from every flagged student to save money. What should happen next?",
        "a": "Test the model on local data with a confusion table by sex, district and language before any use; count who it wrongly flags; keep a person accountable for each decision with the model as one input; and never use a risk flag to remove support — use it to offer support, which is the purpose the data can justify."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Artificial Intelligence, Data Science and Emerging Technologies”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's program or trace fails. What do you say, and why?",
        "a": "Remind the class that a bug is in the code or the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the exact line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian working life (a bank, a mobile-money agent, a clinic, a radio station, a business, a ministry).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as a bank's database, a mobile-money transaction, a hospital record, a radio station's schedule or a ministry's website."
      },
      {
        "q": "A school wants to predict which Grade 10 students will fail Grade 12 mathematics. List the data you would collect, how you would split it, how you would evaluate the model, and two rules for using its predictions ethically.",
        "a": "Data: past marks, attendance, subject choices, with the Grade 12 outcome as the label; split 70/30 into training and test; evaluate with a confusion table and the share of real failures found, by sex and school; ethics: use flags to offer tutoring never to exclude, and keep a teacher accountable for each decision."
      },
      {
        "q": "Give one benefit, one risk and one accountability question for each of: an IoT water-pump monitor, a blockchain land registry, a generative AI writing clinic reports.",
        "a": "Accept reasoned answers, e.g. pump: faults reported in hours / sensors fail or are stolen / who acts on the alert; land registry: tamper-evident records / wrong entries become permanent / who corrects errors; reports: time saved / invented facts / who signs the report."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “Train, test and audit a paper classifier” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, squared paper and printed listings",
      "A class computing chart and test log",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's device, kept dry and in sight"
    ],
    "aids": [
      "Word cards — machine learning, model, training data",
      "A flowchart or trace table of “Train, test and audit a paper classifier”",
      "Forty patient cards with hidden labels and blank confusion tables",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing term and what it means.",
      "Work this week's paper method (a conversion, a truth table, a trace, a query or a design) again with a friend — no device needed.",
      "Find one example of this unit's idea in your community (a bank, a mobile-money kiosk, a clinic, a radio station, a business or a ministry office) and write a paragraph about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written trace, conversion, truth table or query with full working",
      "Pair-debug observed against the class test log",
      "A short written response to the Liberian case scenario"
    ],
    "worked": [
      {
        "q": "Photos labelled 'diseased' or 'healthy' train a model. Supervised or unsupervised? Classification or regression?",
        "steps": [
          "Labels; category."
        ],
        "a": "Supervised; classification"
      },
      {
        "q": "Why is the test set kept apart from training?",
        "steps": [
          "Unseen data measures learning."
        ],
        "a": "To measure performance on data the model has never seen"
      },
      {
        "q": "100 patients, 10 with malaria; model finds 7 with 5 false alarms. Accuracy?",
        "steps": [
          "(7 + 85) / 100."
        ],
        "a": "92%"
      },
      {
        "q": "Same model: share of real cases found?",
        "steps": [
          "7 / 10."
        ],
        "a": "70%"
      },
      {
        "q": "A model says 'no malaria' for everyone. Accuracy on the same 100?",
        "steps": [
          "90 / 100."
        ],
        "a": "90% — and useless"
      },
      {
        "q": "Which error is worse in malaria screening, and what should be done to the threshold?",
        "steps": [
          "Missed case is dangerous."
        ],
        "a": "False negatives; lower the threshold to catch more cases"
      },
      {
        "q": "A model trained only on adults fails children. Name the problem.",
        "steps": [
          "Unrepresentative data."
        ],
        "a": "Bias from unrepresentative training data"
      },
      {
        "q": "Who is accountable when a model's prediction leads to a wrong decision?",
        "steps": [
          "Person, not model."
        ],
        "a": "The person or organisation that made the decision"
      }
    ]
  },
  {
    "grade": 12,
    "period": "VI",
    "sem": "Two",
    "icon": "🎓",
    "csPlan": true,
    "title": "The Computing Project and Examination Preparation",
    "subtitle": "Computer Science · Original senior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Written for classes that may have no computer lab: every conversion, truth table, trace, query and program in the unit can be done on paper, and a shared device extends it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary precisely in speech, writing and examination answers.",
      "Solve the unit's problems on paper — conversions, truth tables, traces, queries, formulas or designs — showing every step of working.",
      "Evaluate a technology choice for its safety, legality, cost and effect on people in Liberia."
    ],
    "objectives": [
      "Define the key terms in “The Computing Project and Examination Preparation” precisely and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm, program or procedure connected with this unit, on paper.",
      "Classify examples into the unit's two groups and justify each placement.",
      "Solve a worked example step by step, showing every line of working, and state the answer in a full sentence with its unit or type.",
      "Apply the unit's ideas to a fictional Liberian business, ministry, clinic or school scenario.",
      "Find and correct a bug in a set of steps, a circuit, a query or a program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared test log.",
      "Explain one Liberian example of this unit's idea (mobile money, the ACE submarine cable, a hospital record, a bank, the national examination system or a radio station)."
    ],
    "safeguard": "A senior high computing lesson uses paper traces, truth tables, printed listings and, when one is present, a shared school computer or the teacher's own device. Students never share passwords, PINs or one-time codes, never install software on a school machine without permission, and never photograph, record or post a classmate without consent. A program written in class must never be used to guess a password, send bulk messages or enter another person's account — that is a crime, not a prank. If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "The computing project follows the life cycle end to end — definition, requirements, design, implementation, testing, evaluation and report — with evidence at each stage. Examination preparation covers the paper's structure, command words (state, describe, explain, compare, evaluate), showing working for conversions and traces, definitions with examples, timing by marks, and a revision timetable across the whole syllabus.",
    "focus": [
      "Worked demonstration on paper",
      "Pair programming and debugging",
      "Liberian case scenario",
      "Practical and period check"
    ],
    "terms": [
      {
        "t": "problem definition",
        "d": "a short statement of the problem, who has it, and what a solution must achieve",
        "x": "In this unit, problem definition means a short statement of the problem, who has it, and what a solution must achieve."
      },
      {
        "t": "requirements",
        "d": "numbered statements of what the system shall do and how well, against which it will be tested and evaluated",
        "x": "In this unit, requirements means numbered statements of what the system shall do and how well, against which it will be tested and evaluated."
      },
      {
        "t": "design documentation",
        "d": "the diagrams, table designs, screen sketches and algorithms produced before coding",
        "x": "In this unit, design documentation means the diagrams, table designs, screen sketches and algorithms produced before coding."
      },
      {
        "t": "test plan",
        "d": "the table of test cases — normal, boundary, erroneous — with expected and actual results and evidence",
        "x": "In this unit, test plan means the table of test cases — normal, boundary, erroneous — with expected and actual results and evidence."
      },
      {
        "t": "evaluation",
        "d": "an honest judgement of how far the finished system meets each requirement, with limitations and improvements",
        "x": "In this unit, evaluation means an honest judgement of how far the finished system meets each requirement, with limitations and improvements."
      },
      {
        "t": "technical documentation",
        "d": "the description of the code, data and setup that lets another developer maintain the system",
        "x": "In this unit, technical documentation means the description of the code, data and setup that lets another developer maintain the system."
      },
      {
        "t": "user documentation",
        "d": "the guide that lets a user operate the system without the developer present",
        "x": "In this unit, user documentation means the guide that lets a user operate the system without the developer present."
      },
      {
        "t": "command word",
        "d": "the verb in an examination question that tells you what kind of answer is wanted: state, describe, explain, compare, evaluate",
        "x": "In this unit, command word means the verb in an examination question that tells you what kind of answer is wanted: state, describe, explain, compare, evaluate."
      },
      {
        "t": "mark allocation",
        "d": "the number of marks for a question, which shows how many points and how much time it deserves",
        "x": "In this unit, mark allocation means the number of marks for a question, which shows how many points and how much time it deserves."
      },
      {
        "t": "trace table",
        "d": "the step-by-step record of variable values used to answer algorithm questions and to test programs",
        "x": "In this unit, trace table means the step-by-step record of variable values used to answer algorithm questions and to test programs."
      },
      {
        "t": "revision timetable",
        "d": "a plan spreading the whole syllabus over the weeks available, with past-paper practice",
        "x": "In this unit, revision timetable means a plan spreading the whole syllabus over the weeks available, with past-paper practice."
      },
      {
        "t": "past paper",
        "d": "an earlier examination paper used to practise timing, command words and the examiner's style",
        "x": "In this unit, past paper means an earlier examination paper used to practise timing, command words and the examiner's style."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “problem definition” in this unit?",
        "a": "a short statement of the problem, who has it, and what a solution must achieve."
      },
      {
        "q": "What is meant by “requirements” in this unit?",
        "a": "numbered statements of what the system shall do and how well, against which it will be tested and evaluated."
      },
      {
        "q": "What is meant by “design documentation” in this unit?",
        "a": "the diagrams, table designs, screen sketches and algorithms produced before coding."
      },
      {
        "q": "What is meant by “test plan” in this unit?",
        "a": "the table of test cases — normal, boundary, erroneous — with expected and actual results and evidence."
      },
      {
        "q": "What is meant by “evaluation” in this unit?",
        "a": "an honest judgement of how far the finished system meets each requirement, with limitations and improvements."
      },
      {
        "q": "What is meant by “technical documentation” in this unit?",
        "a": "the description of the code, data and setup that lets another developer maintain the system."
      },
      {
        "q": "What is meant by “user documentation” in this unit?",
        "a": "the guide that lets a user operate the system without the developer present."
      },
      {
        "q": "What is meant by “command word” in this unit?",
        "a": "the verb in an examination question that tells you what kind of answer is wanted: state, describe, explain, compare, evaluate."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "Two weeks before the deadline a Grade 12 student has a beautiful login screen, no requirements list, no test plan and a project idea that needs a payment gateway the school does not have."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Cut the scope to one testable slice — record a payment and show a balance — write the eight requirements now, design the table and the test plan, implement only what the tests cover, and spend the last three days on the evaluation table and the user guide, which carry marks that a login screen never will."
      },
      {
        "q": "State this unit idea in your own words: A project is marked on evidence: the requirements it set, the tests it ran and the honest evaluation of what it did and did not achieve.",
        "a": "A project is marked on evidence: the requirements it set, the tests it ran and the honest evaluation of what it did and did not achieve."
      },
      {
        "q": "State this unit idea in your own words: In an examination, 'state' wants a fact, 'describe' wants what it is, 'explain' wants why or how, and 'evaluate' wants both sides and a judgement.",
        "a": "In an examination, 'state' wants a fact, 'describe' wants what it is, 'explain' wants why or how, and 'evaluate' wants both sides and a judgement."
      },
      {
        "q": "What are the main sections of a computing project report?",
        "a": "Problem definition and requirements, design, implementation, testing, evaluation, and user and technical documentation."
      },
      {
        "q": "Give the difference between 'describe' and 'explain' as command words.",
        "a": "Describe asks what something is or what happens; explain asks why or how, with reasons linked to the situation."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “The Computing Project and Examination Preparation” Is"
      },
      {
        "k": "p",
        "t": "The course ends with two proofs of learning. The **project** takes one real problem through the life cycle — **problem definition**, **requirements**, **design**, **implementation**, **testing** with a **test plan**, **evaluation** against the requirements and a **report** with **documentation** — and is marked on evidence, not on polish. The **examination** rewards the habits of six years: read the **command word**, show the **working**, trace with a **trace table**, define a term and give an **example**, manage time by marks. This unit plans both and rehearses both. Students who arrive two weeks before the deadline with a beautiful login screen and no requirements or tests have built the least valuable part first. Cut the scope to one testable slice — record a payment and show a balance — write the eight requirements now, design the table and the test plan, implement only what the tests cover, and spend the last three days on the evaluation table and the user guide, which carry marks that a login screen never will. A project is marked on evidence: the requirements it set, the tests it ran and the honest evaluation of what it did and did not achieve. In an examination, 'state' wants a fact, 'describe' wants what it is, 'explain' wants why or how, and 'evaluate' wants both sides and a judgement."
      },
      {
        "k": "p",
        "t": "The computing project follows the life cycle end to end — definition, requirements, design, implementation, testing, evaluation and report — with evidence at each stage. Examination preparation covers the paper's structure, command words (state, describe, explain, compare, evaluate), showing working for conversions and traces, definitions with examples, timing by marks, and a revision timetable across the whole syllabus."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: A project is marked on evidence: the requirements it set, the tests it ran and the honest evaluation of what it did and did not achieve. In an examination, 'state' wants a fact, 'describe' wants what it is, 'explain' wants why or how, and 'evaluate' wants both sides and a judgement."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Ideas in This Unit"
      },
      {
        "k": "p",
        "t": "Each idea below is a working definition for Grade 12. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
      },
      {
        "k": "table",
        "head": [
          "Term",
          "What it means",
          "A sentence that uses it"
        ],
        "rows": [
          [
            "problem definition",
            "a short statement of the problem, who has it, and what a solution must achieve",
            "In this unit, problem definition means a short statement of the problem, who has it, and what a solution must achieve."
          ],
          [
            "requirements",
            "numbered statements of what the system shall do and how well, against which it will be tested and evaluated",
            "In this unit, requirements means numbered statements of what the system shall do and how well, against which it will be tested and evaluated."
          ],
          [
            "design documentation",
            "the diagrams, table designs, screen sketches and algorithms produced before coding",
            "In this unit, design documentation means the diagrams, table designs, screen sketches and algorithms produced before coding."
          ],
          [
            "test plan",
            "the table of test cases — normal, boundary, erroneous — with expected and actual results and evidence",
            "In this unit, test plan means the table of test cases — normal, boundary, erroneous — with expected and actual results and evidence."
          ],
          [
            "evaluation",
            "an honest judgement of how far the finished system meets each requirement, with limitations and improvements",
            "In this unit, evaluation means an honest judgement of how far the finished system meets each requirement, with limitations and improvements."
          ],
          [
            "technical documentation",
            "the description of the code, data and setup that lets another developer maintain the system",
            "In this unit, technical documentation means the description of the code, data and setup that lets another developer maintain the system."
          ],
          [
            "user documentation",
            "the guide that lets a user operate the system without the developer present",
            "In this unit, user documentation means the guide that lets a user operate the system without the developer present."
          ],
          [
            "command word",
            "the verb in an examination question that tells you what kind of answer is wanted: state, describe, explain, compare, evaluate",
            "In this unit, command word means the verb in an examination question that tells you what kind of answer is wanted: state, describe, explain, compare, evaluate."
          ],
          [
            "mark allocation",
            "the number of marks for a question, which shows how many points and how much time it deserves",
            "In this unit, mark allocation means the number of marks for a question, which shows how many points and how much time it deserves."
          ],
          [
            "trace table",
            "the step-by-step record of variable values used to answer algorithm questions and to test programs",
            "In this unit, trace table means the step-by-step record of variable values used to answer algorithm questions and to test programs."
          ],
          [
            "revision timetable",
            "a plan spreading the whole syllabus over the weeks available, with past-paper practice",
            "In this unit, revision timetable means a plan spreading the whole syllabus over the weeks available, with past-paper practice."
          ],
          [
            "past paper",
            "an earlier examination paper used to practise timing, command words and the examiner's style",
            "In this unit, past paper means an earlier examination paper used to practise timing, command words and the examiner's style."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Tell Them Apart"
      },
      {
        "k": "bul",
        "items": [
          "**Requirements** are written before the code; **evaluation** is written against them afterwards — the same numbered list.",
          "**Testing** proves it works; **evaluation** judges how well it solves the problem.",
          "**State** — one fact; **describe** — what; **explain** — why or how; **compare** — similarities and differences; **evaluate** — both sides and a judgement.",
          "**Marks** guide time: a 6-mark question deserves about six minutes and six points.",
          "**Working shown** earns method marks even when the final answer slips; **an answer alone** earns all or nothing."
        ]
      },
      {
        "k": "table",
        "head": [
          "Project section",
          "What the examiner looks for",
          "Evidence"
        ],
        "rows": [
          [
            "Problem definition and requirements",
            "A real problem, a real user, numbered testable requirements",
            "Interview notes, requirement list"
          ],
          [
            "Design",
            "Data structures, interface sketches, algorithms before code",
            "Table designs, flowcharts, pseudocode"
          ],
          [
            "Implementation",
            "Working code that matches the design, well named and commented",
            "Code listings, screenshots"
          ],
          [
            "Testing",
            "Normal, boundary and erroneous cases with actual results",
            "Test plan with evidence of each result"
          ],
          [
            "Evaluation",
            "Each requirement met or not, honestly; limitations; improvements",
            "A table of requirement against outcome"
          ],
          [
            "Documentation",
            "A user guide and technical notes",
            "Two short documents"
          ]
        ]
      },
      {
        "k": "p",
        "t": "A second table for this unit, so the distinction can be practised twice:"
      },
      {
        "k": "table",
        "head": [
          "Command word",
          "What to write",
          "Example"
        ],
        "rows": [
          [
            "State / Name / Give",
            "A fact, no explanation",
            "State the base of hexadecimal. 16."
          ],
          [
            "Describe",
            "What it is or what happens, in order",
            "Describe the fetch stage: PC to MAR, address bus, read, MDR to CIR, PC + 1."
          ],
          [
            "Explain",
            "Why or how, with reasons linked to the case",
            "Explain why binary search needs sorted data: each step discards a half based on order."
          ],
          [
            "Compare",
            "Similarities and differences, both sides",
            "Compare RAM and SSD: both store data; RAM is volatile and faster, SSD is persistent."
          ],
          [
            "Evaluate / Discuss",
            "Advantages, disadvantages, a justified judgement",
            "Evaluate cloud backup for a rural school."
          ],
          [
            "Calculate / Convert / Trace",
            "Working shown step by step, answer boxed",
            "Convert 77 to binary with the ladder shown."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why This Matters in Liberia"
      },
      {
        "k": "p",
        "t": "The Grade 12 project should solve a problem within walking distance — the school's fee ledger, the clinic's appointment list, a cooperative's stock, the church's membership register — because a real user, real data and real testing are worth more than an ambitious idea with no evidence. The examination is the same test the whole of West Africa sits: a student who has traced algorithms, converted numbers with working shown and defined terms with examples for six years has been preparing since Grade 7. This unit turns those habits into a plan, a timetable and a finished project report."
      },
      {
        "k": "p",
        "t": "This course is an **original teaching resource**, not an official syllabus transcription. A school without a computer lab is not a school without Computer Science. Teachers should compare the unit with the school's approved scheme of work before use."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Paper-First Method"
      },
      {
        "k": "p",
        "t": "The class investigation is **“The project sprint and the marked mock”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Week 1: each student writes a one-page problem definition with a named user, eight numbered requirements and a design (table, screens, algorithm as pseudocode), reviewed by a partner against the marking table.",
          "Week 2: implementation of the smallest complete slice on paper or machine, with a test plan of at least twelve cases prepared before the code is finished.",
          "Week 3: testing with evidence, an evaluation table of requirement against outcome, and the two documentation pages; a partner attempts to use the system from the user guide alone.",
          "Week 4: a timed mock examination assembled from the six years of topics — one number conversion, one logic table, one trace, one SQL query, one Big-O reasoning, one evaluate question — marked in pairs against the command-word table.",
          "Throughout: a revision timetable that assigns every Grade 10–12 unit a slot and a past-paper question, ticked as done."
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Worked Example in Prose"
      },
      {
        "k": "p",
        "t": "**Problem.** A student proposes a project: 'a system for the school'. Rewrite it as a proper problem definition with a named user, write four testable requirements, give one test case of each type for one requirement, and draft the evaluation table's first row assuming the requirement was partly met."
      },
      {
        "k": "num",
        "items": [
          "Problem definition: The bursar of Gbarnga Central School records fee payments in a paper ledger; balances take a day to compute and errors are common. A system is needed that records payments, computes each student's balance instantly and prints a debtors list, working without internet.",
          "Requirements: R1 the system shall record a payment with student ID, date and amount; R2 it shall reject amounts below 0 or above the outstanding balance; R3 it shall show a student's balance within one second; R4 it shall print a list of students owing more than 0, sorted by class.",
          "Tests for R2: normal 5,000 on a balance of 15,000 → accepted; boundary 15,000 → accepted, balance 0; erroneous 16,000 (above balance) → rejected with a message.",
          "Evaluation row: R2 — partly met: negative and over-balance amounts are rejected, but a non-numeric entry crashes the form; improvement: validate the type before the range.",
          "The user guide and technical notes list how to add a student, record a payment and back up the file."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** A named user and a measurable problem, four 'shall' requirements, three test types for R2 and an honest partly-met evaluation row with an improvement — the shape of a mark-earning project."
      },
      {
        "k": "p",
        "t": "Notice the method: name what you know, run one step at a time, write the result of each step, then state the answer in a full sentence. That is the same habit a Physics class uses on a numerical problem; here the 'calculation' is a trace, a conversion, a truth table, a formula, a query or a debug."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Common Mistakes"
      },
      {
        "k": "bul",
        "items": [
          "Choosing a project too large to test, then presenting screenshots instead of evidence.",
          "Writing the requirements after the code to match what was built.",
          "Answering 'explain' questions with a definition and 'evaluate' questions with one side.",
          "Spending twenty minutes on a two-mark question and leaving a ten-mark trace unanswered."
        ]
      },
      {
        "k": "p",
        "t": "The class rule still holds when a mistake appears: **we try, we debug, we do not laugh at a mistake.** A bug is in the steps, not in the person."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Safety, Ethics and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN or a one-time code, and nobody installs software on a school machine without permission. A program written in this course is never pointed at another person's account, phone or wallet: guessing a password, sending bulk messages or reading someone's data without consent is a crime under Liberian law, not a prank. Copying a program from a classmate and submitting it as your own is plagiarism. Pair work shares the thinking, not the credit for work you did not do."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, sextortion, a scam, a request for images or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered (screenshots, not deletions), and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Pair Roles: Driver and Navigator"
      },
      {
        "k": "p",
        "t": "A computing pair has two jobs that swap. The **driver** writes or works the next step. The **navigator** reads the algorithm or the listing, watches for a bug, and says 'stop' before a wrong line is copied. After five minutes they swap, so both practise both jobs. A third student may sit as **checker** and tick each step on the trace table. Taking turns is a computing skill, not a punishment for having only one computer — or none."
      },
      {
        "k": "table",
        "head": [
          "Role",
          "What this person does",
          "What this person does not do"
        ],
        "rows": [
          [
            "Driver",
            "Works or writes the current step",
            "Does not skip the navigator's 'stop'"
          ],
          [
            "Navigator",
            "Reads the steps and watches for bugs",
            "Does not grab the pencil, the keyboard or the mouse"
          ],
          [
            "Checker",
            "Ticks each step and records one bug on the class chart",
            "Does not laugh at a mistake"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Fictional Liberian Scenario"
      },
      {
        "k": "p",
        "t": "Two weeks before the deadline a Grade 12 student has a beautiful login screen, no requirements list, no test plan and a project idea that needs a payment gateway the school does not have."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Cut the scope to one testable slice — record a payment and show a balance — write the eight requirements now, design the table and the test plan, implement only what the tests cover, and spend the last three days on the evaluation table and the user guide, which carry marks that a login screen never will."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Worked Computing Reasoning"
      },
      {
        "k": "p",
        "t": "Cut the scope to one testable slice — record a payment and show a balance — write the eight requirements now, design the table and the test plan, implement only what the tests cover, and spend the last three days on the evaluation table and the user guide, which carry marks that a login screen never will."
      },
      {
        "k": "p",
        "t": "When you answer a scenario question, use this three-part shape: (1) name the computing idea (algorithm, data, network, security, binary, database, …); (2) say what a person should do, in order; (3) say why, with a unit term in the reason. Vague good intentions without a term do not yet show that the unit has been learned."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "How We Practise It on Paper"
      },
      {
        "k": "p",
        "t": "The investigation **“The project sprint and the marked mock”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
      },
      {
        "k": "table",
        "head": [
          "Paper object",
          "What it stands for",
          "What we write afterwards"
        ],
        "rows": [
          [
            "Project marking table",
            "The examiner's expectations",
            "Evidence ticked against each section"
          ],
          [
            "Command-word card",
            "What each question verb demands",
            "Model answers in the right shape"
          ],
          [
            "Revision timetable grid",
            "The whole syllabus over the weeks left",
            "Every unit and a past-paper question ticked"
          ],
          [
            "Class chart",
            "Project and examination lessons the class recorded",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Small, Real, Tested"
      },
      {
        "k": "p",
        "t": "The strongest projects solve a problem the student can walk to, for a user who can be interviewed and who will try the system. One table, one input screen, one report, twelve tests and an honest evaluation beat an unfinished app every time. Ambition goes in the 'improvements' section."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Evidence Beats Polish"
      },
      {
        "k": "p",
        "t": "A screenshot of a test failing and then passing after a fix is worth more than a screenshot of a pretty screen. Number the requirements, number the tests against them, and refer to both in the evaluation. The marker follows the numbers."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Command Words Are Instructions"
      },
      {
        "k": "p",
        "t": "Underline the verb before you write. State: one line. Describe: what happens, in order. Explain: because. Compare: both, with 'whereas'. Evaluate: advantages, disadvantages, and 'therefore'. A correct fact under the wrong command word loses the marks the verb was asking for."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Last Month"
      },
      {
        "k": "p",
        "t": "A timetable with every unit from Grade 10 to 12 in a slot; one past-paper question per slot, marked against the scheme; a list of definitions with an example each; a page of number conversions and truth tables done fresh each week; sleep the night before. Preparation is the same discipline as testing: planned, evidenced, honest."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "What a Period Test Asks"
      },
      {
        "k": "p",
        "t": "A fair period test on “The Computing Project and Examination Preparation” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit precisely and use each in a sentence.",
          "Solve or trace a problem connected with “The Computing Project and Examination Preparation” on paper, showing every line of working.",
          "Classify four examples using “Project evidence that earns marks / Examination habits that earn marks” and justify one placement.",
          "Find and correct a bug in a set of steps, a query or a program, and say what the bug was."
        ]
      },
      {
        "k": "p",
        "t": "Show every step of a tracing or conversion question, the way a Physics script shows working. A bare answer with no steps cannot be given full credit, because the teacher cannot see the method you ran."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Four Weeks of Study"
      },
      {
        "k": "p",
        "t": "A 4-week unit on “The Computing Project and Examination Preparation” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
      },
      {
        "k": "table",
        "head": [
          "Week",
          "Study focus",
          "What students leave able to do"
        ],
        "rows": [
          [
            "1",
            "What “The Computing Project and Examination Preparation” is, and where it already appears around us.",
            "Say what the unit is about and name two examples from Liberia."
          ],
          [
            "2",
            "Key ideas, distinctions and the unit table.",
            "Use the key terms and complete the distinction tables."
          ],
          [
            "3",
            "A Liberian example and the paper-first method, worked then written.",
            "Run the paper method and write the algorithm, table or report."
          ],
          [
            "4",
            "Worked problems, pair-debug, the computing fair and the period check.",
            "Solve a worked example, debug a bug, and sit the period check."
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Check Yourself"
      },
      {
        "k": "p",
        "t": "Close the notes. (1) Say the unit title and one Liberian example. (2) Give the meaning of three terms without looking. (3) Work the paper method once more, showing every step. (4) Name one bug you would look for. (5) Say who you tell if a message asks for a photograph, a PIN or money. If any of those five stalls, go back to the table of terms and the worked example and run them again with a partner. Do not laugh at a bug — including your own."
      },
      {
        "k": "p",
        "t": "This is original supplementary teaching material for Liberian senior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, problem definition means a short statement of the problem, who has it, and what a solution must achieve.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, requirements means the diagrams, table designs, screen sketches and algorithms produced before coding.",
        "a": "False",
        "why": "requirements means numbered statements of what the system shall do and how well, against which it will be tested and evaluated; the statement describes design documentation."
      },
      {
        "s": "In this unit, test plan means the table of test cases — normal, boundary, erroneous — with expected and actual results and evidence.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Every conversion, truth table, trace and program in the unit can be worked on paper; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the code or the steps, not in the person."
      },
      {
        "s": "Students should share passwords, PINs or one-time codes so a partner can finish the work.",
        "a": "False",
        "why": "A password, PIN or one-time code is secret. Sharing one is how accounts and mobile-money wallets are emptied."
      },
      {
        "s": "A project is marked on evidence: the requirements it set, the tests it ran and the honest evaluation of what it did and did not achieve.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "Requirements may be written after the system is built so that they match what was made.",
        "a": "False",
        "why": "Requirements are agreed with the user before design and are what the tests and the evaluation are measured against."
      },
      {
        "s": "In an examination, 'evaluate' asks for both advantages and disadvantages and a judgement.",
        "a": "True",
        "why": "That is what the command word demands; one side alone loses marks."
      }
    ],
    "classify": {
      "title": "Project evidence that earns marks / Examination habits that earn marks",
      "groups": [
        {
          "name": "Project evidence that earns marks",
          "items": [
            "numbered requirements agreed with the user",
            "a test plan with actual results",
            "a design drawn before coding",
            "an evaluation table against each requirement",
            "a user guide a partner could follow",
            "a fix shown after a failed test"
          ]
        },
        {
          "name": "Examination habits that earn marks",
          "items": [
            "underlining the command word",
            "showing the conversion ladder",
            "a trace table with one row per step",
            "a definition followed by an example",
            "both sides before a judgement in 'evaluate'",
            "time divided by marks"
          ]
        }
      ]
    },
    "diagram": {
      "title": "The project report, section by section",
      "caption": "Label each part and state what it does in “The Computing Project and Examination Preparation”.",
      "parts": [
        {
          "p": "Problem definition and requirements",
          "f": "who, what, and numbered 'shall' statements"
        },
        {
          "p": "Design",
          "f": "data, screens and algorithms before code"
        },
        {
          "p": "Implementation and testing",
          "f": "the code and the test plan with evidence"
        },
        {
          "p": "Evaluation",
          "f": "each requirement met, partly met or not, with improvements"
        },
        {
          "p": "Documentation",
          "f": "user guide and technical notes"
        }
      ]
    },
    "experiment": {
      "title": "The project sprint and the marked mock",
      "aim": "To practise the ideas of “The Computing Project and Examination Preparation” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Printed listings, cards and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class test log",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “The project sprint and the marked mock” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: Two weeks before the deadline a Grade 12 student has a beautiful login screen, no requirements list, no test plan and a project idea that needs a payment gateway the school does not have. What should happen next?",
        "a": "Cut the scope to one testable slice — record a payment and show a balance — write the eight requirements now, design the table and the test plan, implement only what the tests cover, and spend the last three days on the evaluation table and the user guide, which carry marks that a login screen never will."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “The Computing Project and Examination Preparation”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's program or trace fails. What do you say, and why?",
        "a": "Remind the class that a bug is in the code or the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the exact line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian working life (a bank, a mobile-money agent, a clinic, a radio station, a business, a ministry).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as a bank's database, a mobile-money transaction, a hospital record, a radio station's schedule or a ministry's website."
      },
      {
        "q": "Write a four-week revision timetable for Grade 10–12 Computer Science that gives every unit a slot, includes one past-paper question per slot, and schedules two timed mocks. State one rule you will follow when marking your own answers.",
        "a": "Accept a timetable of 18 unit slots plus two mock sessions with a past-paper question each; a marking rule such as 'award nothing for a correct answer with no working where working was asked' or 'check the command word before awarding marks'."
      },
      {
        "q": "Answer in the correct style: (a) State the purpose of the program counter. (b) Explain why a hash is used for stored passwords. (c) Evaluate the use of a direct changeover for a school's new fee system.",
        "a": "(a) It holds the address of the next instruction. (b) Because a hash cannot be reversed, a stolen database does not reveal passwords; login compares hashes. (c) Advantages: cheap and quick, no double entry; disadvantages: any failure stops fee collection with no fallback, staff untrained; judgement: unsuitable for a critical system — use parallel or pilot."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “The project sprint and the marked mock” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, squared paper and printed listings",
      "A class computing chart and test log",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's device, kept dry and in sight"
    ],
    "aids": [
      "Word cards — problem definition, requirements, design documentation",
      "A flowchart or trace table of “The project sprint and the marked mock”",
      "A project marking table, a command-word card and a revision timetable grid",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing term and what it means.",
      "Work this week's paper method (a conversion, a truth table, a trace, a query or a design) again with a friend — no device needed.",
      "Find one example of this unit's idea in your community (a bank, a mobile-money kiosk, a clinic, a radio station, a business or a ministry office) and write a paragraph about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written trace, conversion, truth table or query with full working",
      "Pair-debug observed against the class test log",
      "A short written response to the Liberian case scenario"
    ],
    "worked": [
      {
        "q": "Which section of a project report lists what the system shall do?",
        "steps": [
          "Before design."
        ],
        "a": "Requirements"
      },
      {
        "q": "Against what is the evaluation written?",
        "steps": [
          "Same numbered list."
        ],
        "a": "The numbered requirements"
      },
      {
        "q": "Name the three types of test data every test plan needs.",
        "steps": [
          "Typical, edge, invalid."
        ],
        "a": "Normal, boundary, erroneous"
      },
      {
        "q": "A question says 'Explain why…' for 3 marks. What must the answer contain?",
        "steps": [
          "Reasons, linked."
        ],
        "a": "Three linked reasons or steps saying why, not just a definition"
      },
      {
        "q": "A question says 'Evaluate…' for 6 marks. Give the shape of a full answer.",
        "steps": [
          "Both sides and a judgement."
        ],
        "a": "Advantages, disadvantages and a justified conclusion"
      },
      {
        "q": "A 2-hour paper carries 100 marks. About how long should a 10-mark question take?",
        "steps": [
          "120 ÷ 100 × 10."
        ],
        "a": "About 12 minutes"
      },
      {
        "q": "Which earns more in a conversion question: the answer alone, or the ladder with a slip in the last step?",
        "steps": [
          "Method marks."
        ],
        "a": "Usually the ladder with working — method marks are awarded"
      },
      {
        "q": "A student's project has no user and no test plan. Name the two sections that will score lowest.",
        "steps": [
          "Requirements and testing."
        ],
        "a": "Requirements (no real user) and testing (no evidence)"
      }
    ]
  }
];

/* Merge into the single Computer Science curriculum, exactly as General
   Science does for Grades 7-9: one subject, extra grades. */
if (typeof CS_CURRICULUM !== "undefined") {
  CS_CURRICULUM.push.apply(CS_CURRICULUM, CS_CURRICULUM_1012);
}
