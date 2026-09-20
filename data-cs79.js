/* Computer Science, Grades 7–9 (Junior High). Original computing units.
   No official Liberian Computer Science syllabus was supplied, so these
   are original teaching resources — paper-first, so a class with no
   computer lab can still compute: trace tables, paper spreadsheets,
   flowcharts, pseudocode and unplugged networks. Teachers should compare
   them with the school's approved scheme of work before use. Not an
   official curriculum transcription.

   Same unit shape as the elementary CS_CURRICULUM (data-cs.js) so GEN_SC
   and the computing lesson plans render it unchanged: long study[] notes
   and a worked[] bank of traces, conversions and formula evaluations.
*/
var CS_CURRICULUM_79 = 
[
  {
    "grade": 7,
    "period": "I",
    "sem": "One",
    "icon": "🖥️",
    "csPlan": true,
    "title": "The Computer System — Hardware, Software and Users",
    "subtitle": "Computer Science · Original junior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Unplugged-first: a class with no computer lab can still complete the unit on paper, and a class with one shared device can extend it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary accurately in speech and writing.",
      "Write, trace and debug an algorithm, a formula or a set of steps connected with the unit — on paper first, on a device when one is available.",
      "Make and justify a safe, honest and lawful choice about devices, data and people online."
    ],
    "objectives": [
      "Explain the key terms in “The Computer System — Hardware, Software and Users” and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm or set of steps connected with this unit, on paper.",
      "Sort examples into the unit's two groups and give a reason for each choice.",
      "Trace a worked example step by step, showing every line of working, and state the answer in a full sentence.",
      "Apply the unit's ideas to a fictional Liberian school, market or office scenario.",
      "Debug a broken set of steps, a formula or a short program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared record of bugs found.",
      "Name one Liberian example of this unit's idea (mobile money, a radio station, a clinic record, a ministry office, a school register or a market stall)."
    ],
    "safeguard": "A junior high computing lesson uses charts, paper models, trace tables and, when a device is present, a shared school machine or the teacher's own phone. Students never share passwords or PINs, never photograph one another without consent, and never post a classmate's image or details. A mobile-money PIN is a secret even from a friend. If a student reports online bullying, a request for a picture, a scam message or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "A computer system is hardware, software and users working together. Hardware is the physical equipment; software is the set of instructions that tells the hardware what to do. Every computer follows the input–process–output cycle, with storage keeping data and programs for later use.",
    "focus": [
      "Unplugged demonstration and paper trace",
      "Pair work and debugging",
      "Liberian scenario",
      "Computing fair check"
    ],
    "terms": [
      {
        "t": "computer system",
        "d": "hardware, software and users working together to turn data into information",
        "x": "In this unit, computer system means hardware, software and users working together to turn data into information."
      },
      {
        "t": "hardware",
        "d": "the physical parts of a computer that can be seen and touched",
        "x": "In this unit, hardware means the physical parts of a computer that can be seen and touched."
      },
      {
        "t": "software",
        "d": "the instructions and programs that tell the hardware what to do",
        "x": "In this unit, software means the instructions and programs that tell the hardware what to do."
      },
      {
        "t": "user",
        "d": "the person who gives instructions to the computer and reads its results",
        "x": "In this unit, user means the person who gives instructions to the computer and reads its results."
      },
      {
        "t": "input device",
        "d": "hardware that sends data or commands into the computer, such as a keyboard or mouse",
        "x": "In this unit, input device means hardware that sends data or commands into the computer, such as a keyboard or mouse."
      },
      {
        "t": "output device",
        "d": "hardware that presents results, such as a monitor, printer or speaker",
        "x": "In this unit, output device means hardware that presents results, such as a monitor, printer or speaker."
      },
      {
        "t": "processing",
        "d": "the stage in which the processor follows instructions to change data into results",
        "x": "In this unit, processing means the stage in which the processor follows instructions to change data into results."
      },
      {
        "t": "storage device",
        "d": "hardware that keeps data and programs for later, such as a hard disk or flash drive",
        "x": "In this unit, storage device means hardware that keeps data and programs for later, such as a hard disk or flash drive."
      },
      {
        "t": "peripheral",
        "d": "a device connected to the system unit from outside, such as a printer or scanner",
        "x": "In this unit, peripheral means a device connected to the system unit from outside, such as a printer or scanner."
      },
      {
        "t": "system unit",
        "d": "the case that holds the processor, memory, main storage and power supply",
        "x": "In this unit, system unit means the case that holds the processor, memory, main storage and power supply."
      },
      {
        "t": "data",
        "d": "raw facts and figures that have not yet been given meaning",
        "x": "In this unit, data means raw facts and figures that have not yet been given meaning."
      },
      {
        "t": "information",
        "d": "data that has been processed and organised so that it means something",
        "x": "In this unit, information means data that has been processed and organised so that it means something."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “computer system” in this unit?",
        "a": "hardware, software and users working together to turn data into information."
      },
      {
        "q": "What is meant by “hardware” in this unit?",
        "a": "the physical parts of a computer that can be seen and touched."
      },
      {
        "q": "What is meant by “software” in this unit?",
        "a": "the instructions and programs that tell the hardware what to do."
      },
      {
        "q": "What is meant by “user” in this unit?",
        "a": "the person who gives instructions to the computer and reads its results."
      },
      {
        "q": "What is meant by “input device” in this unit?",
        "a": "hardware that sends data or commands into the computer, such as a keyboard or mouse."
      },
      {
        "q": "What is meant by “output device” in this unit?",
        "a": "hardware that presents results, such as a monitor, printer or speaker."
      },
      {
        "q": "What is meant by “processing” in this unit?",
        "a": "the stage in which the processor follows instructions to change data into results."
      },
      {
        "q": "What is meant by “storage device” in this unit?",
        "a": "hardware that keeps data and programs for later, such as a hard disk or flash drive."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A Grade 7 class receives one donated desktop computer for forty students, and half the class says there is no point studying Computer Science until every student has a machine."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "One machine is enough for demonstrations while every student works the input–process–output cycle on paper; groups rotate as driver, navigator and checker, and the class chart records what each device does and which stage it belongs to."
      },
      {
        "q": "State this unit idea in your own words: A computer system is hardware, software and users working together to turn data into information.",
        "a": "A computer system is hardware, software and users working together to turn data into information."
      },
      {
        "q": "State this unit idea in your own words: Every computer follows the input–process–output cycle, with storage keeping data and programs for later.",
        "a": "Every computer follows the input–process–output cycle, with storage keeping data and programs for later."
      },
      {
        "q": "Name two input devices and two output devices.",
        "a": "Input: keyboard, mouse (or microphone, scanner); output: monitor, printer (or speaker, projector)."
      },
      {
        "q": "Why is the user counted as part of the computer system?",
        "a": "Because the user chooses the program, enters the data and judges whether the output makes sense; without a user the system does nothing useful."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “The Computer System — Hardware, Software and Users” Is"
      },
      {
        "k": "p",
        "t": "A **computer system** is more than the box on the desk: it is **hardware** (the parts you can touch), **software** (the instructions you cannot touch) and the **user** who gives the instructions, working together. Every system follows one cycle: data goes in through an **input device**, the **processing** stage changes it, results come out through an **output device**, and a **storage device** keeps data and programs for later. Students who say a class cannot study computing until every student has a machine have confused the tool with the subject. One machine is enough for demonstrations while every student works the input–process–output cycle on paper; groups rotate as driver, navigator and checker, and the class chart records what each device does and which stage it belongs to. A computer system is hardware, software and users working together to turn data into information. Every computer follows the input–process–output cycle, with storage keeping data and programs for later."
      },
      {
        "k": "p",
        "t": "A computer system is hardware, software and users working together. Hardware is the physical equipment; software is the set of instructions that tells the hardware what to do. Every computer follows the input–process–output cycle, with storage keeping data and programs for later use."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: A computer system is hardware, software and users working together to turn data into information. Every computer follows the input–process–output cycle, with storage keeping data and programs for later."
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
        "t": "Each idea below is a working definition for Grade 7. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
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
            "computer system",
            "hardware, software and users working together to turn data into information",
            "In this unit, computer system means hardware, software and users working together to turn data into information."
          ],
          [
            "hardware",
            "the physical parts of a computer that can be seen and touched",
            "In this unit, hardware means the physical parts of a computer that can be seen and touched."
          ],
          [
            "software",
            "the instructions and programs that tell the hardware what to do",
            "In this unit, software means the instructions and programs that tell the hardware what to do."
          ],
          [
            "user",
            "the person who gives instructions to the computer and reads its results",
            "In this unit, user means the person who gives instructions to the computer and reads its results."
          ],
          [
            "input device",
            "hardware that sends data or commands into the computer, such as a keyboard or mouse",
            "In this unit, input device means hardware that sends data or commands into the computer, such as a keyboard or mouse."
          ],
          [
            "output device",
            "hardware that presents results, such as a monitor, printer or speaker",
            "In this unit, output device means hardware that presents results, such as a monitor, printer or speaker."
          ],
          [
            "processing",
            "the stage in which the processor follows instructions to change data into results",
            "In this unit, processing means the stage in which the processor follows instructions to change data into results."
          ],
          [
            "storage device",
            "hardware that keeps data and programs for later, such as a hard disk or flash drive",
            "In this unit, storage device means hardware that keeps data and programs for later, such as a hard disk or flash drive."
          ],
          [
            "peripheral",
            "a device connected to the system unit from outside, such as a printer or scanner",
            "In this unit, peripheral means a device connected to the system unit from outside, such as a printer or scanner."
          ],
          [
            "system unit",
            "the case that holds the processor, memory, main storage and power supply",
            "In this unit, system unit means the case that holds the processor, memory, main storage and power supply."
          ],
          [
            "data",
            "raw facts and figures that have not yet been given meaning",
            "In this unit, data means raw facts and figures that have not yet been given meaning."
          ],
          [
            "information",
            "data that has been processed and organised so that it means something",
            "In this unit, information means data that has been processed and organised so that it means something."
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
          "**Hardware** — parts you can touch: keyboard, monitor, system unit.",
          "**Software** — instructions you cannot touch: the operating system, a word processor.",
          "**Input** — data going in; **output** — results coming out.",
          "**Storage** — data kept for later, even when the power is off.",
          "**Data** — raw figures; **information** — figures with meaning attached."
        ]
      },
      {
        "k": "table",
        "head": [
          "Device",
          "Input, output or storage?",
          "Why"
        ],
        "rows": [
          [
            "Keyboard",
            "Input",
            "Keys send characters into the system."
          ],
          [
            "Monitor",
            "Output",
            "It shows the results on a screen."
          ],
          [
            "Printer",
            "Output",
            "It puts the results on paper."
          ],
          [
            "Microphone",
            "Input",
            "Sound goes into the system."
          ],
          [
            "Flash drive",
            "Storage",
            "It keeps files until they are needed."
          ],
          [
            "Touchscreen",
            "Input and output",
            "It shows results and receives touches."
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
          "Item",
          "Hardware or software?",
          "Reason"
        ],
        "rows": [
          [
            "Mouse",
            "Hardware",
            "It can be picked up and touched."
          ],
          [
            "Operating system",
            "Software",
            "It is a set of instructions."
          ],
          [
            "USB cable",
            "Hardware",
            "It is a physical connector."
          ],
          [
            "Calculator app",
            "Software",
            "It is a program that runs on the hardware."
          ],
          [
            "Memory (RAM) chip",
            "Hardware",
            "It is a physical component inside the system unit."
          ],
          [
            "A virus",
            "Software",
            "It is a harmful program, not a physical thing."
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
        "t": "Computer systems already run much of Liberian public life: the Liberia Revenue Authority records taxes, county health teams enter clinic figures, banks and mobile-money agents process payments, and WAEC results are printed from a database. Yet many schools own one machine or none. That is why Grade 7 learns the input–process–output cycle on paper first: a class that can name the stages can use any computer it later meets, and can explain to a parent why a donated monitor without a system unit will never switch on."
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
        "t": "The class investigation is **“The human computer system”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Four students take the roles input, processor, storage and output; the rest of the class are users who write data on cards (for example, '3 bags of rice at LRD 4,500').",
          "Input reads each card aloud exactly as written; the processor works the arithmetic on the board and says the result.",
          "Storage copies the result onto the 'memory' sheet before output is allowed to announce it to the users.",
          "A user changes one card ('4 bags') and the class traces the whole cycle again, watching that storage is updated.",
          "Swap roles, then write the cycle as a labelled diagram and list one bug the class noticed (for example, output announcing before storage had written)."
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
        "t": "**Problem.** A trader at Red Light types 3 × 4,500 into her phone's calculator and reads 13,500 on the screen; she then saves the total in her notes app. Name the input, the processing, the output and the storage in this system, and say who the user is."
      },
      {
        "k": "num",
        "items": [
          "Input: the key presses 3, ×, 4, 5, 0, 0 and = go in through the touchscreen.",
          "Processing: the processor multiplies 3 by 4,500 to get 13,500.",
          "Output: the screen shows 13,500.",
          "Storage: the notes app keeps 13,500 in the phone's storage for later.",
          "User: the trader, who gave the instructions and reads the result."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** Input = the key presses; processing = the multiplication; output = 13,500 on the screen; storage = the saved note; the user is the trader."
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
          "Calling the monitor 'the computer' — the monitor only shows output.",
          "Saying software can be touched; the disk it is stored on is hardware, the program is not.",
          "Calling a flash drive an input device — it stores data; it does not create it.",
          "Mixing up data (a raw figure such as 38.2) with information (the figure given meaning: 'a fever')."
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
        "t": "Safety, Fairness and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN, a one-time code, a home address or a photograph of a classmate. If a message asks for a picture, money or a meeting, the student stops, keeps the message and tells a teacher. Copying another student's work and calling it your own is not collaboration; pair work shares the thinking, not the credit for work you did not do. Unplugged work is complete computing work."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, a scam, a request for a picture or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered, and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
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
        "t": "A Grade 7 class receives one donated desktop computer for forty students, and half the class says there is no point studying Computer Science until every student has a machine."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** One machine is enough for demonstrations while every student works the input–process–output cycle on paper; groups rotate as driver, navigator and checker, and the class chart records what each device does and which stage it belongs to."
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
        "t": "One machine is enough for demonstrations while every student works the input–process–output cycle on paper; groups rotate as driver, navigator and checker, and the class chart records what each device does and which stage it belongs to."
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
        "t": "The investigation **“The human computer system”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
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
            "Squared paper or trace table",
            "The state of the machine after every step",
            "The finished trace with the final answer"
          ],
          [
            "Word card",
            "A key term",
            "The term in a sentence"
          ],
          [
            "Paper keyboard or printed screen",
            "The device we may not have",
            "The same action described in words"
          ],
          [
            "Class chart",
            "Bugs and precise steps the class agreed",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Data Becomes Information"
      },
      {
        "k": "p",
        "t": "The figure 38.2 written on a card is data. Compared with the normal body temperature of about 37 °C and labelled 'fever', it becomes information. Processing is the step between the two. A computer that only stores data without processing it is an expensive cupboard."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The System Unit Is Not the Whole Computer"
      },
      {
        "k": "p",
        "t": "The system unit holds the processor, the memory, the main storage and the power supply. The keyboard, mouse and monitor are peripherals that plug into it. A laptop packs all of these into one case, and a phone packs them into a hand — the stages are the same."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Peripherals Plug In"
      },
      {
        "k": "p",
        "t": "A peripheral is any device connected from outside: printer, scanner, external drive, projector. A school can add or remove peripherals without changing the system unit. When something 'does not work', check the plug and the cable before blaming the software."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Users Are Part of the System"
      },
      {
        "k": "p",
        "t": "A system with no user does nothing useful. The user chooses the program, types the data and decides whether the result makes sense. Reading 13,500 and asking 'is that reasonable for three bags?' is a user's job that no processor does for her."
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
        "t": "A fair period test on “The Computer System — Hardware, Software and Users” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit and use each in a sentence.",
          "Write or trace a four-step algorithm, formula or procedure connected with “The Computer System — Hardware, Software and Users”, showing every line of working.",
          "Sort four examples using “Hardware / Software” and give one reason.",
          "Debug a broken set of steps without blaming the person who wrote them, and say what the bug was."
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
        "t": "A 4-week unit on “The Computer System — Hardware, Software and Users” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
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
            "What “The Computer System — Hardware, Software and Users” is, and where it already appears around us.",
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
        "t": "This is original supplementary teaching material for Liberian junior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, computer system means hardware, software and users working together to turn data into information.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, hardware means the instructions and programs that tell the hardware what to do.",
        "a": "False",
        "why": "hardware means the physical parts of a computer that can be seen and touched; the statement describes software."
      },
      {
        "s": "In this unit, user means the person who gives instructions to the computer and reads its results.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Unplugged work with paper, trace tables and cards is complete computing work; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the instructions, not in the person."
      },
      {
        "s": "Students should share passwords or mobile-money PINs so a partner can finish the work.",
        "a": "False",
        "why": "A password or PIN is secret. Never share a password, PIN, one-time code or personal photograph."
      },
      {
        "s": "A computer system is hardware, software and users working together to turn data into information.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "A flash drive is an input device because you push it into the computer.",
        "a": "False",
        "why": "A flash drive is a storage device; pushing it in does not make it create data."
      },
      {
        "s": "Software is the set of instructions that tells hardware what to do.",
        "a": "True",
        "why": "That is the working definition of software."
      }
    ],
    "classify": {
      "title": "Hardware / Software",
      "groups": [
        {
          "name": "Hardware",
          "items": [
            "keyboard",
            "monitor",
            "system unit",
            "printer",
            "flash drive",
            "mouse"
          ]
        },
        {
          "name": "Software",
          "items": [
            "operating system",
            "word processor",
            "calculator app",
            "web browser",
            "antivirus program",
            "a game"
          ]
        }
      ]
    },
    "diagram": {
      "title": "The input–process–output–storage cycle",
      "caption": "Label each part and state what it does in “The Computer System — Hardware, Software and Users”.",
      "parts": [
        {
          "p": "Input",
          "f": "data and commands go into the system through a keyboard, mouse, microphone or touchscreen"
        },
        {
          "p": "Process",
          "f": "the processor follows instructions to change the data into results"
        },
        {
          "p": "Output",
          "f": "results come out through a monitor, printer or speaker"
        },
        {
          "p": "Storage",
          "f": "data and programs are kept for later on a hard disk or flash drive"
        },
        {
          "p": "User",
          "f": "the person who gives the instructions and judges the results"
        }
      ]
    },
    "experiment": {
      "title": "The human computer system",
      "aim": "To practise the ideas of “The Computer System — Hardware, Software and Users” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Paper cards, arrows and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class computing chart",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “The human computer system” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A Grade 7 class receives one donated desktop computer for forty students, and half the class says there is no point studying Computer Science until every student has a machine. What should happen next?",
        "a": "One machine is enough for demonstrations while every student works the input–process–output cycle on paper; groups rotate as driver, navigator and checker, and the class chart records what each device does and which stage it belongs to."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “The Computer System — Hardware, Software and Users”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's trace gives the wrong answer. What do you say, and why?",
        "a": "Remind the class that a bug is in the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian daily life (a market, a clinic, a radio station, a mobile-money kiosk, a school office).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as mobile money, a clinic record, a radio bulletin, a school register or a market ledger."
      },
      {
        "q": "A clinic nurse types a patient's temperature into a tablet and the screen shows 'FEVER'. Name the input, the processing and the output.",
        "a": "Input: the temperature typed in; processing: comparing it with the normal temperature; output: the word FEVER on the screen."
      },
      {
        "q": "A school has LRD 40,000. Which is the better first purchase — a printer with no computer, or a computer with no printer? Give a reason using unit terms.",
        "a": "The computer: it has the processing stage and can show output on its screen, while a printer alone is an output device with nothing to process."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “The human computer system” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, paper grids and a paper keyboard",
      "A class computing chart",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's phone, kept dry and in sight"
    ],
    "aids": [
      "Word cards — computer system, hardware, software",
      "A flowchart or trace table of “The human computer system”",
      "A large input–process–output–storage chart",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing word and what it means.",
      "Practise this week's paper method (a trace, a conversion, a formula or an algorithm) with a sibling or a friend — no device needed.",
      "Find one example of this unit's idea in your community (a market, a clinic, a radio station, a mobile-money kiosk or an office) and write three sentences about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written algorithm, trace table or worked conversion",
      "Pair-debug observed against the class chart",
      "A short written response to the Liberian scenario"
    ],
    "worked": [
      {
        "q": "Name the stages of the computer cycle in order, and say where storage fits.",
        "steps": [
          "Input → process → output; storage keeps data and programs before and after processing."
        ],
        "a": "Input, process, output, with storage alongside"
      },
      {
        "q": "A student presses the letter k on the keyboard. Input, process or output?",
        "steps": [
          "Data goes into the system."
        ],
        "a": "Input"
      },
      {
        "q": "The screen shows 'Total: 13,500'. Input, process or output?",
        "steps": [
          "A result comes out of the system."
        ],
        "a": "Output"
      },
      {
        "q": "A flash drive keeps a file until Monday. Which stage of the cycle is that?",
        "steps": [
          "Data kept for later."
        ],
        "a": "Storage"
      },
      {
        "q": "Which is hardware: the word processor or the printer? Why?",
        "steps": [
          "The printer can be touched; the word processor is instructions."
        ],
        "a": "The printer"
      },
      {
        "q": "Three bags at LRD 4,500 each. State the processing step and the output.",
        "steps": [
          "Process: 3 × 4,500 = 13,500.",
          "Output: 13,500 shown on the screen."
        ],
        "a": "Processing: multiply 3 by 4,500; output: 13,500"
      },
      {
        "q": "A monitor plugged into power but not into a system unit shows nothing useful. Explain with the cycle.",
        "steps": [
          "There is no processing stage to produce output."
        ],
        "a": "No processor is producing output for it to show"
      },
      {
        "q": "A card reads '38.2'. Is that data or information? What would make it information?",
        "steps": [
          "A raw figure has no meaning yet.",
          "Compare it with normal (about 37 °C) and label it."
        ],
        "a": "Data; it becomes information once processed into 'fever'"
      }
    ]
  },
  {
    "grade": 7,
    "period": "II",
    "sem": "One",
    "icon": "🕰️",
    "csPlan": true,
    "title": "Generations and Types of Computers",
    "subtitle": "Computer Science · Original junior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Unplugged-first: a class with no computer lab can still complete the unit on paper, and a class with one shared device can extend it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary accurately in speech and writing.",
      "Write, trace and debug an algorithm, a formula or a set of steps connected with the unit — on paper first, on a device when one is available.",
      "Make and justify a safe, honest and lawful choice about devices, data and people online."
    ],
    "objectives": [
      "Explain the key terms in “Generations and Types of Computers” and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm or set of steps connected with this unit, on paper.",
      "Sort examples into the unit's two groups and give a reason for each choice.",
      "Trace a worked example step by step, showing every line of working, and state the answer in a full sentence.",
      "Apply the unit's ideas to a fictional Liberian school, market or office scenario.",
      "Debug a broken set of steps, a formula or a short program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared record of bugs found.",
      "Name one Liberian example of this unit's idea (mobile money, a radio station, a clinic record, a ministry office, a school register or a market stall)."
    ],
    "safeguard": "A junior high computing lesson uses charts, paper models, trace tables and, when a device is present, a shared school machine or the teacher's own phone. Students never share passwords or PINs, never photograph one another without consent, and never post a classmate's image or details. A mobile-money PIN is a secret even from a friend. If a student reports online bullying, a request for a picture, a scam message or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "The generations of computers are named after the switching technology inside them: vacuum tubes, transistors, integrated circuits and microprocessors, with today's connected and intelligent devices often called a fifth generation. Types of computer — supercomputer, mainframe, minicomputer, microcomputer (desktop, laptop, tablet, smartphone) and embedded computers — differ in size, speed, cost and the work they are built for.",
    "focus": [
      "Unplugged demonstration and paper trace",
      "Pair work and debugging",
      "Liberian scenario",
      "Computing fair check"
    ],
    "terms": [
      {
        "t": "generation",
        "d": "a stage in computer history named after the main switching technology used inside the machine",
        "x": "In this unit, generation means a stage in computer history named after the main switching technology used inside the machine."
      },
      {
        "t": "vacuum tube",
        "d": "a glass valve used as a switch in first-generation computers; large, hot and unreliable",
        "x": "In this unit, vacuum tube means a glass valve used as a switch in first-generation computers; large, hot and unreliable."
      },
      {
        "t": "transistor",
        "d": "a small electronic switch that replaced the vacuum tube in the second generation",
        "x": "In this unit, transistor means a small electronic switch that replaced the vacuum tube in the second generation."
      },
      {
        "t": "integrated circuit",
        "d": "many transistors built onto one small piece of silicon, used from the third generation",
        "x": "In this unit, integrated circuit means many transistors built onto one small piece of silicon, used from the third generation."
      },
      {
        "t": "microprocessor",
        "d": "a complete processor on a single chip, the heart of fourth-generation and later computers",
        "x": "In this unit, microprocessor means a complete processor on a single chip, the heart of fourth-generation and later computers."
      },
      {
        "t": "mainframe",
        "d": "a large, powerful computer that serves many users at once, used by banks and governments",
        "x": "In this unit, mainframe means a large, powerful computer that serves many users at once, used by banks and governments."
      },
      {
        "t": "supercomputer",
        "d": "the fastest type of computer, used for weather forecasting and scientific research",
        "x": "In this unit, supercomputer means the fastest type of computer, used for weather forecasting and scientific research."
      },
      {
        "t": "microcomputer",
        "d": "a computer built around one microprocessor and used by one person at a time, such as a desktop or laptop",
        "x": "In this unit, microcomputer means a computer built around one microprocessor and used by one person at a time, such as a desktop or laptop."
      },
      {
        "t": "laptop",
        "d": "a portable microcomputer with the screen, keyboard and battery in one folding case",
        "x": "In this unit, laptop means a portable microcomputer with the screen, keyboard and battery in one folding case."
      },
      {
        "t": "smartphone",
        "d": "a handheld computer that also makes calls, with a touchscreen, camera and internet connection",
        "x": "In this unit, smartphone means a handheld computer that also makes calls, with a touchscreen, camera and internet connection."
      },
      {
        "t": "embedded computer",
        "d": "a small computer built into another machine to control it, such as in a car or a washing machine",
        "x": "In this unit, embedded computer means a small computer built into another machine to control it, such as in a car or a washing machine."
      },
      {
        "t": "artificial intelligence",
        "d": "software that learns patterns from data to perform tasks that normally need human judgement",
        "x": "In this unit, artificial intelligence means software that learns patterns from data to perform tasks that normally need human judgement."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “generation” in this unit?",
        "a": "a stage in computer history named after the main switching technology used inside the machine."
      },
      {
        "q": "What is meant by “vacuum tube” in this unit?",
        "a": "a glass valve used as a switch in first-generation computers; large, hot and unreliable."
      },
      {
        "q": "What is meant by “transistor” in this unit?",
        "a": "a small electronic switch that replaced the vacuum tube in the second generation."
      },
      {
        "q": "What is meant by “integrated circuit” in this unit?",
        "a": "many transistors built onto one small piece of silicon, used from the third generation."
      },
      {
        "q": "What is meant by “microprocessor” in this unit?",
        "a": "a complete processor on a single chip, the heart of fourth-generation and later computers."
      },
      {
        "q": "What is meant by “mainframe” in this unit?",
        "a": "a large, powerful computer that serves many users at once, used by banks and governments."
      },
      {
        "q": "What is meant by “supercomputer” in this unit?",
        "a": "the fastest type of computer, used for weather forecasting and scientific research."
      },
      {
        "q": "What is meant by “microcomputer” in this unit?",
        "a": "a computer built around one microprocessor and used by one person at a time, such as a desktop or laptop."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A parent offers a Grade 7 class a working 2005 desktop computer, and a student says it is 'first generation' and should be refused."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Name the generation correctly — a 2005 desktop is fourth generation, built round a microprocessor — then judge it by its job: it can teach typing, files and spreadsheets offline, so accept it, keep it dry and in sight, and do not expect it to run today's internet software."
      },
      {
        "q": "State this unit idea in your own words: Each generation of computers replaced its switching part with something smaller, faster, cooler and cheaper.",
        "a": "Each generation of computers replaced its switching part with something smaller, faster, cooler and cheaper."
      },
      {
        "q": "State this unit idea in your own words: A microprocessor is a whole processor on a single chip, and it made personal computers and phones possible.",
        "a": "A microprocessor is a whole processor on a single chip, and it made personal computers and phones possible."
      },
      {
        "q": "Name the switching part of each of the first four generations.",
        "a": "First: vacuum tube; second: transistor; third: integrated circuit; fourth: microprocessor."
      },
      {
        "q": "Give one difference between a mainframe and a supercomputer.",
        "a": "A mainframe serves many users reliably at once (banks, governments); a supercomputer is built for the fastest possible calculation (weather, science)."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Generations and Types of Computers” Is"
      },
      {
        "k": "p",
        "t": "Computers did not arrive all at once. Each **generation** replaced the main switching part with something smaller and faster: the **vacuum tube**, the **transistor**, the **integrated circuit** and then the **microprocessor** that puts a whole processor on one chip. Alongside the generations, computers come in **types** by size and job — from a **mainframe** that serves a bank to the **smartphone** in a market trader's pocket. Students who call a 2005 desktop 'first generation' have mixed up old with the first switching technology. Name the generation correctly — a 2005 desktop is fourth generation, built round a microprocessor — then judge it by its job: it can teach typing, files and spreadsheets offline, so accept it, keep it dry and in sight, and do not expect it to run today's internet software. Each generation of computers replaced its switching part with something smaller, faster, cooler and cheaper. A microprocessor is a whole processor on a single chip, and it made personal computers and phones possible."
      },
      {
        "k": "p",
        "t": "The generations of computers are named after the switching technology inside them: vacuum tubes, transistors, integrated circuits and microprocessors, with today's connected and intelligent devices often called a fifth generation. Types of computer — supercomputer, mainframe, minicomputer, microcomputer (desktop, laptop, tablet, smartphone) and embedded computers — differ in size, speed, cost and the work they are built for."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: Each generation of computers replaced its switching part with something smaller, faster, cooler and cheaper. A microprocessor is a whole processor on a single chip, and it made personal computers and phones possible."
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
        "t": "Each idea below is a working definition for Grade 7. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
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
            "generation",
            "a stage in computer history named after the main switching technology used inside the machine",
            "In this unit, generation means a stage in computer history named after the main switching technology used inside the machine."
          ],
          [
            "vacuum tube",
            "a glass valve used as a switch in first-generation computers; large, hot and unreliable",
            "In this unit, vacuum tube means a glass valve used as a switch in first-generation computers; large, hot and unreliable."
          ],
          [
            "transistor",
            "a small electronic switch that replaced the vacuum tube in the second generation",
            "In this unit, transistor means a small electronic switch that replaced the vacuum tube in the second generation."
          ],
          [
            "integrated circuit",
            "many transistors built onto one small piece of silicon, used from the third generation",
            "In this unit, integrated circuit means many transistors built onto one small piece of silicon, used from the third generation."
          ],
          [
            "microprocessor",
            "a complete processor on a single chip, the heart of fourth-generation and later computers",
            "In this unit, microprocessor means a complete processor on a single chip, the heart of fourth-generation and later computers."
          ],
          [
            "mainframe",
            "a large, powerful computer that serves many users at once, used by banks and governments",
            "In this unit, mainframe means a large, powerful computer that serves many users at once, used by banks and governments."
          ],
          [
            "supercomputer",
            "the fastest type of computer, used for weather forecasting and scientific research",
            "In this unit, supercomputer means the fastest type of computer, used for weather forecasting and scientific research."
          ],
          [
            "microcomputer",
            "a computer built around one microprocessor and used by one person at a time, such as a desktop or laptop",
            "In this unit, microcomputer means a computer built around one microprocessor and used by one person at a time, such as a desktop or laptop."
          ],
          [
            "laptop",
            "a portable microcomputer with the screen, keyboard and battery in one folding case",
            "In this unit, laptop means a portable microcomputer with the screen, keyboard and battery in one folding case."
          ],
          [
            "smartphone",
            "a handheld computer that also makes calls, with a touchscreen, camera and internet connection",
            "In this unit, smartphone means a handheld computer that also makes calls, with a touchscreen, camera and internet connection."
          ],
          [
            "embedded computer",
            "a small computer built into another machine to control it, such as in a car or a washing machine",
            "In this unit, embedded computer means a small computer built into another machine to control it, such as in a car or a washing machine."
          ],
          [
            "artificial intelligence",
            "software that learns patterns from data to perform tasks that normally need human judgement",
            "In this unit, artificial intelligence means software that learns patterns from data to perform tasks that normally need human judgement."
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
          "**First generation** — vacuum tubes; room-sized, hot, punched cards.",
          "**Second generation** — transistors; smaller, more reliable, magnetic tape.",
          "**Third generation** — integrated circuits; keyboards and monitors, operating systems.",
          "**Fourth generation** — microprocessors; personal computers, laptops, phones.",
          "**Fifth generation** — networked and intelligent devices; artificial intelligence, voice assistants."
        ]
      },
      {
        "k": "table",
        "head": [
          "Generation",
          "Switching part",
          "Typical machine and years"
        ],
        "rows": [
          [
            "First",
            "Vacuum tube",
            "ENIAC; the 1940s to the mid-1950s"
          ],
          [
            "Second",
            "Transistor",
            "IBM 1401; the late 1950s to the mid-1960s"
          ],
          [
            "Third",
            "Integrated circuit",
            "IBM System/360; the mid-1960s to the early 1970s"
          ],
          [
            "Fourth",
            "Microprocessor",
            "Personal computers, laptops, phones; the 1970s to today"
          ],
          [
            "Fifth",
            "Microprocessors plus networks and AI",
            "Smartphones, voice assistants; the present"
          ],
          [
            "Trend",
            "Smaller, faster, cooler, cheaper",
            "Each step put more switches in less space"
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
          "Type of computer",
          "Who uses it",
          "Liberian example"
        ],
        "rows": [
          [
            "Supercomputer",
            "Scientists and weather services",
            "Regional weather models that forecast the rainy season"
          ],
          [
            "Mainframe",
            "Banks, airlines, governments",
            "A bank's central account records"
          ],
          [
            "Minicomputer / server",
            "A whole office or school network",
            "A hospital's records server"
          ],
          [
            "Desktop microcomputer",
            "One person at a desk",
            "A school office computer"
          ],
          [
            "Laptop or tablet",
            "One mobile person",
            "A county health officer entering clinic data"
          ],
          [
            "Smartphone / embedded",
            "Almost everyone; machines",
            "Mobile money on a phone; the controller in a generator"
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
        "t": "Liberia mostly skipped the desktop age and arrived in the computer world through the phone: more Liberians own a smartphone than have ever sat at a mainframe terminal. A market trader running mobile money on a fourth-generation microprocessor is doing what a 1950s bank needed a room-sized machine for. Knowing the generations helps a Grade 7 student judge a donated 'computer' honestly — a fifteen-year-old desktop can still teach typing and spreadsheets, but it cannot run today's software — and helps them explain why the phone in their pocket is a real computer."
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
        "t": "The class investigation is **“The generations timeline walk”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Lay a chalk line across the room marked 1940, 1955, 1965, 1975, 2000 and today.",
          "Five cards name the switching parts (vacuum tube, transistor, integrated circuit, microprocessor, networked AI device); five students place them on the line and defend the position.",
          "Other students place device cards (ENIAC, IBM 1401, desktop, laptop, smartphone, generator controller) beside the right generation.",
          "The class walks the line and, at each mark, says one sentence: what got smaller, what got faster, what became cheaper.",
          "Write the finished timeline as a five-row table and record one bug the class caught (for example, a smartphone placed before the microprocessor)."
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
        "t": "**Problem.** A first-generation computer filled a hall with 18,000 vacuum tubes and failed several times a day. A modern phone chip holds several billion transistors and runs all day on a battery. Explain, generation by generation, how the switching part changed, and say which type of computer the phone is."
      },
      {
        "k": "num",
        "items": [
          "First generation: vacuum tubes — large, hot, burnt out often.",
          "Second generation: transistors replaced the tubes — smaller, cooler, more reliable.",
          "Third generation: integrated circuits put many transistors on one chip.",
          "Fourth generation: the microprocessor put a whole processor on one chip — billions of transistors today.",
          "A phone is a handheld microcomputer (a smartphone), built round one microprocessor."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** The switch went tube → transistor → integrated circuit → microprocessor, each step smaller, faster, cooler and cheaper; the phone is a fourth-generation microcomputer, a smartphone."
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
          "Ordering the generations by size of the machine instead of by the switching part inside it.",
          "Calling a smartphone 'not a real computer' — it has input, processing, output and storage.",
          "Thinking a supercomputer is just a big mainframe; a supercomputer is built for speed on one huge calculation, a mainframe for serving many users reliably.",
          "Believing a newer computer is always the right buy; a school office may only need a modest desktop."
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
        "t": "Safety, Fairness and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN, a one-time code, a home address or a photograph of a classmate. If a message asks for a picture, money or a meeting, the student stops, keeps the message and tells a teacher. Copying another student's work and calling it your own is not collaboration; pair work shares the thinking, not the credit for work you did not do. Unplugged work is complete computing work."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, a scam, a request for a picture or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered, and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
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
        "t": "A parent offers a Grade 7 class a working 2005 desktop computer, and a student says it is 'first generation' and should be refused."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Name the generation correctly — a 2005 desktop is fourth generation, built round a microprocessor — then judge it by its job: it can teach typing, files and spreadsheets offline, so accept it, keep it dry and in sight, and do not expect it to run today's internet software."
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
        "t": "Name the generation correctly — a 2005 desktop is fourth generation, built round a microprocessor — then judge it by its job: it can teach typing, files and spreadsheets offline, so accept it, keep it dry and in sight, and do not expect it to run today's internet software."
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
        "t": "The investigation **“The generations timeline walk”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
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
            "Squared paper or trace table",
            "The state of the machine after every step",
            "The finished trace with the final answer"
          ],
          [
            "Word card",
            "A key term",
            "The term in a sentence"
          ],
          [
            "Paper keyboard or printed screen",
            "The device we may not have",
            "The same action described in words"
          ],
          [
            "Class chart",
            "Bugs and precise steps the class agreed",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Smaller, Faster, Cooler, Cheaper"
      },
      {
        "k": "p",
        "t": "Every generation made the switch smaller. Smaller switches use less electricity, so they run cooler and can be packed closer together, so signals travel a shorter distance and the machine gets faster. The same money buys more computing each decade — the reason a Liberian teenager holds more power than a 1970s ministry."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why the Microprocessor Changed Everything"
      },
      {
        "k": "p",
        "t": "Before the microprocessor, a processor was a cabinet of boards. Putting the whole processor on one chip made it cheap enough to give every person a computer, then to put one in a phone, a car, a solar charge controller and a water pump. That step is why 'computer' no longer means a room."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Types Are About the Job, Not the Age"
      },
      {
        "k": "p",
        "t": "A supercomputer forecasts storms; a mainframe keeps a bank honest for millions of customers; a laptop moves with one worker; an embedded computer runs a generator without a screen. Choosing a type means asking who will use it, where, and for what — not which is newest."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Liberia's Own Timeline"
      },
      {
        "k": "p",
        "t": "Radio came to Liberia long before computers; banks and the airline used mainframe-era machines from abroad; the civil conflict delayed desktops; mobile phones spread fast in the 2000s and mobile money after 2010. A student's family history of technology is a fair source for a class timeline."
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
        "t": "A fair period test on “Generations and Types of Computers” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit and use each in a sentence.",
          "Write or trace a four-step algorithm, formula or procedure connected with “Generations and Types of Computers”, showing every line of working.",
          "Sort four examples using “Generation switching parts / Types of computer” and give one reason.",
          "Debug a broken set of steps without blaming the person who wrote them, and say what the bug was."
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
        "t": "A 4-week unit on “Generations and Types of Computers” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
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
            "What “Generations and Types of Computers” is, and where it already appears around us.",
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
        "t": "This is original supplementary teaching material for Liberian junior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, generation means a stage in computer history named after the main switching technology used inside the machine.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, vacuum tube means a small electronic switch that replaced the vacuum tube in the second generation.",
        "a": "False",
        "why": "vacuum tube means a glass valve used as a switch in first-generation computers; large, hot and unreliable; the statement describes transistor."
      },
      {
        "s": "In this unit, integrated circuit means many transistors built onto one small piece of silicon, used from the third generation.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Unplugged work with paper, trace tables and cards is complete computing work; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the instructions, not in the person."
      },
      {
        "s": "Students should share passwords or mobile-money PINs so a partner can finish the work.",
        "a": "False",
        "why": "A password or PIN is secret. Never share a password, PIN, one-time code or personal photograph."
      },
      {
        "s": "Each generation of computers replaced its switching part with something smaller, faster, cooler and cheaper.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "A 2005 desktop computer belongs to the first generation because it is old.",
        "a": "False",
        "why": "Generations are named after the switching part; a 2005 desktop is built round a microprocessor, so it is fourth generation."
      },
      {
        "s": "A smartphone is a handheld microcomputer.",
        "a": "True",
        "why": "It is built round one microprocessor and has input, processing, output and storage."
      }
    ],
    "classify": {
      "title": "Generation switching parts / Types of computer",
      "groups": [
        {
          "name": "Generation switching parts",
          "items": [
            "vacuum tube",
            "transistor",
            "integrated circuit",
            "microprocessor",
            "billions of transistors on one chip",
            "glass valve that burns out"
          ]
        },
        {
          "name": "Types of computer",
          "items": [
            "mainframe",
            "supercomputer",
            "laptop",
            "smartphone",
            "embedded computer in a generator",
            "desktop microcomputer"
          ]
        }
      ]
    },
    "diagram": {
      "title": "The five generations timeline",
      "caption": "Label each part and state what it does in “Generations and Types of Computers”.",
      "parts": [
        {
          "p": "First generation",
          "f": "vacuum tubes; room-sized machines such as ENIAC in the 1940s"
        },
        {
          "p": "Second generation",
          "f": "transistors; smaller and more reliable machines of the late 1950s"
        },
        {
          "p": "Third generation",
          "f": "integrated circuits; keyboards, monitors and operating systems from the mid-1960s"
        },
        {
          "p": "Fourth generation",
          "f": "microprocessors; personal computers, laptops and phones from the 1970s"
        },
        {
          "p": "Fifth generation",
          "f": "networked, intelligent devices using artificial intelligence today"
        }
      ]
    },
    "experiment": {
      "title": "The generations timeline walk",
      "aim": "To practise the ideas of “Generations and Types of Computers” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Paper cards, arrows and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class computing chart",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “The generations timeline walk” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A parent offers a Grade 7 class a working 2005 desktop computer, and a student says it is 'first generation' and should be refused. What should happen next?",
        "a": "Name the generation correctly — a 2005 desktop is fourth generation, built round a microprocessor — then judge it by its job: it can teach typing, files and spreadsheets offline, so accept it, keep it dry and in sight, and do not expect it to run today's internet software."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Generations and Types of Computers”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's trace gives the wrong answer. What do you say, and why?",
        "a": "Remind the class that a bug is in the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian daily life (a market, a clinic, a radio station, a mobile-money kiosk, a school office).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as mobile money, a clinic record, a radio bulletin, a school register or a market ledger."
      },
      {
        "q": "A bank in Monrovia needs one computer to serve thousands of customers at the same time, day and night. Which type should it choose, and why?",
        "a": "A mainframe (or a large server): it is built to serve many users at once reliably, which a desktop or laptop is not."
      },
      {
        "q": "Your uncle says his phone 'is not a computer, it is a phone'. Give two reasons, using unit terms, why it is a computer.",
        "a": "It is built round a microprocessor and it has input (touchscreen), processing, output (screen, speaker) and storage; it is a handheld microcomputer."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “The generations timeline walk” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, paper grids and a paper keyboard",
      "A class computing chart",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's phone, kept dry and in sight"
    ],
    "aids": [
      "Word cards — generation, vacuum tube, transistor",
      "A flowchart or trace table of “The generations timeline walk”",
      "A generations timeline chart with device pictures",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing word and what it means.",
      "Practise this week's paper method (a trace, a conversion, a formula or an algorithm) with a sibling or a friend — no device needed.",
      "Find one example of this unit's idea in your community (a market, a clinic, a radio station, a mobile-money kiosk or an office) and write three sentences about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written algorithm, trace table or worked conversion",
      "Pair-debug observed against the class chart",
      "A short written response to the Liberian scenario"
    ],
    "worked": [
      {
        "q": "Put in order: transistor, microprocessor, vacuum tube, integrated circuit.",
        "steps": [
          "Tube (1st) → transistor (2nd) → integrated circuit (3rd) → microprocessor (4th)."
        ],
        "a": "Vacuum tube, transistor, integrated circuit, microprocessor"
      },
      {
        "q": "Which generation used vacuum tubes?",
        "steps": [
          "The earliest machines of the 1940s."
        ],
        "a": "First generation"
      },
      {
        "q": "A whole processor on one chip is called a ______.",
        "steps": [
          "Fourth-generation switching part."
        ],
        "a": "microprocessor"
      },
      {
        "q": "A computer that serves a whole bank at once is a ______.",
        "steps": [
          "Many users, high reliability."
        ],
        "a": "mainframe"
      },
      {
        "q": "A smartphone is which type of computer?",
        "steps": [
          "One microprocessor, one user, handheld."
        ],
        "a": "A microcomputer (handheld)"
      },
      {
        "q": "The controller inside a generator has no screen. What type of computer is it?",
        "steps": [
          "Built into another machine to control it."
        ],
        "a": "An embedded computer"
      },
      {
        "q": "A machine had 18,000 tubes and failed several times a day. Which generation, and why did it fail so often?",
        "steps": [
          "Tubes are hot glass valves that burn out."
        ],
        "a": "First generation; vacuum tubes burn out"
      },
      {
        "q": "Name one thing that got smaller and one that got cheaper between the first and fourth generations.",
        "steps": [
          "The switch got smaller; computing power got cheaper."
        ],
        "a": "The switching part got smaller; the price of computing fell"
      }
    ]
  },
  {
    "grade": 7,
    "period": "III",
    "sem": "One",
    "icon": "⌨️",
    "csPlan": true,
    "title": "Keyboard Skills and Word Processing",
    "subtitle": "Computer Science · Original junior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Unplugged-first: a class with no computer lab can still complete the unit on paper, and a class with one shared device can extend it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary accurately in speech and writing.",
      "Write, trace and debug an algorithm, a formula or a set of steps connected with the unit — on paper first, on a device when one is available.",
      "Make and justify a safe, honest and lawful choice about devices, data and people online."
    ],
    "objectives": [
      "Explain the key terms in “Keyboard Skills and Word Processing” and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm or set of steps connected with this unit, on paper.",
      "Sort examples into the unit's two groups and give a reason for each choice.",
      "Trace a worked example step by step, showing every line of working, and state the answer in a full sentence.",
      "Apply the unit's ideas to a fictional Liberian school, market or office scenario.",
      "Debug a broken set of steps, a formula or a short program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared record of bugs found.",
      "Name one Liberian example of this unit's idea (mobile money, a radio station, a clinic record, a ministry office, a school register or a market stall)."
    ],
    "safeguard": "A junior high computing lesson uses charts, paper models, trace tables and, when a device is present, a shared school machine or the teacher's own phone. Students never share passwords or PINs, never photograph one another without consent, and never post a classmate's image or details. A mobile-money PIN is a secret even from a friend. If a student reports online bullying, a request for a picture, a scam message or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "A word processor is software for creating, editing, formatting, saving and printing documents. Touch-typing starts from the home row (A S D F and J K L ;) with the thumbs on the space bar. Editing changes the words; formatting changes how they look — font, size, bold, italic, underline, alignment and spacing.",
    "focus": [
      "Unplugged demonstration and paper trace",
      "Pair work and debugging",
      "Liberian scenario",
      "Computing fair check"
    ],
    "terms": [
      {
        "t": "word processor",
        "d": "software for creating, editing, formatting, saving and printing documents",
        "x": "In this unit, word processor means software for creating, editing, formatting, saving and printing documents."
      },
      {
        "t": "home row",
        "d": "the middle row of letter keys — A S D F and J K L ; — where the fingers rest when touch-typing",
        "x": "In this unit, home row means the middle row of letter keys — A S D F and J K L ; — where the fingers rest when touch-typing."
      },
      {
        "t": "touch-typing",
        "d": "typing with all fingers without looking at the keys",
        "x": "In this unit, touch-typing means typing with all fingers without looking at the keys."
      },
      {
        "t": "cursor",
        "d": "the blinking line or pointer that shows where the next character will appear",
        "x": "In this unit, cursor means the blinking line or pointer that shows where the next character will appear."
      },
      {
        "t": "editing",
        "d": "changing the words of a document: inserting, deleting, cutting, copying and pasting",
        "x": "In this unit, editing means changing the words of a document: inserting, deleting, cutting, copying and pasting."
      },
      {
        "t": "formatting",
        "d": "changing how text looks: font, size, bold, italic, underline, colour and alignment",
        "x": "In this unit, formatting means changing how text looks: font, size, bold, italic, underline, colour and alignment."
      },
      {
        "t": "font",
        "d": "a named design of letters, such as Times New Roman or Arial",
        "x": "In this unit, font means a named design of letters, such as Times New Roman or Arial."
      },
      {
        "t": "alignment",
        "d": "how lines sit against the margins: left, centred, right or justified",
        "x": "In this unit, alignment means how lines sit against the margins: left, centred, right or justified."
      },
      {
        "t": "paragraph",
        "d": "a block of related sentences, ended in a word processor by pressing Enter",
        "x": "In this unit, paragraph means a block of related sentences, ended in a word processor by pressing Enter."
      },
      {
        "t": "margin",
        "d": "the blank space between the text and the edge of the page",
        "x": "In this unit, margin means the blank space between the text and the edge of the page."
      },
      {
        "t": "spell checker",
        "d": "a tool that underlines words it does not recognise so the writer can check them",
        "x": "In this unit, spell checker means a tool that underlines words it does not recognise so the writer can check them."
      },
      {
        "t": "save",
        "d": "to copy the document from memory to storage under a file name so it is not lost",
        "x": "In this unit, save means to copy the document from memory to storage under a file name so it is not lost."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “word processor” in this unit?",
        "a": "software for creating, editing, formatting, saving and printing documents."
      },
      {
        "q": "What is meant by “home row” in this unit?",
        "a": "the middle row of letter keys — A S D F and J K L ; — where the fingers rest when touch-typing."
      },
      {
        "q": "What is meant by “touch-typing” in this unit?",
        "a": "typing with all fingers without looking at the keys."
      },
      {
        "q": "What is meant by “cursor” in this unit?",
        "a": "the blinking line or pointer that shows where the next character will appear."
      },
      {
        "q": "What is meant by “editing” in this unit?",
        "a": "changing the words of a document: inserting, deleting, cutting, copying and pasting."
      },
      {
        "q": "What is meant by “formatting” in this unit?",
        "a": "changing how text looks: font, size, bold, italic, underline, colour and alignment."
      },
      {
        "q": "What is meant by “font” in this unit?",
        "a": "a named design of letters, such as Times New Roman or Arial."
      },
      {
        "q": "What is meant by “alignment” in this unit?",
        "a": "how lines sit against the margins: left, centred, right or justified."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A Grade 7 student typing a letter for a neighbour at a business centre loses the whole document when the power fails, and blames the computer."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Name the bug — the document lived only in memory — then fix the habit: save with a clear file name as soon as the heading is typed, press Ctrl + S after every paragraph, and keep a paper draft of the letter's layout so retyping is quick."
      },
      {
        "q": "State this unit idea in your own words: A word processor is software for creating, editing, formatting, saving and printing documents.",
        "a": "A word processor is software for creating, editing, formatting, saving and printing documents."
      },
      {
        "q": "State this unit idea in your own words: Editing changes the words; formatting changes how the words look.",
        "a": "Editing changes the words; formatting changes how the words look."
      },
      {
        "q": "Give two reasons for saving a document early and often.",
        "a": "Power failures are common and would lose unsaved work; a saved file can be reopened, reprinted and copied to a flash drive."
      },
      {
        "q": "What is the difference between cut and copy?",
        "a": "Cut removes the text from its place so it can be pasted elsewhere; copy leaves the original and makes a duplicate to paste."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Keyboard Skills and Word Processing” Is"
      },
      {
        "k": "p",
        "t": "A **word processor** is software for writing, correcting and formatting documents. Before touching one, a student needs the **home row** under the fingers and a picture of the page: **font**, **alignment**, **paragraph** and **margin** are decisions a writer makes on paper first. **Formatting** changes how words look — bold, italic, size — while **editing** changes the words themselves. Students who blame the computer when a power cut deletes an unsaved letter have skipped the save step. Name the bug — the document lived only in memory — then fix the habit: save with a clear file name as soon as the heading is typed, press Ctrl + S after every paragraph, and keep a paper draft of the letter's layout so retyping is quick. A word processor is software for creating, editing, formatting, saving and printing documents. Editing changes the words; formatting changes how the words look."
      },
      {
        "k": "p",
        "t": "A word processor is software for creating, editing, formatting, saving and printing documents. Touch-typing starts from the home row (A S D F and J K L ;) with the thumbs on the space bar. Editing changes the words; formatting changes how they look — font, size, bold, italic, underline, alignment and spacing."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: A word processor is software for creating, editing, formatting, saving and printing documents. Editing changes the words; formatting changes how the words look."
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
        "t": "Each idea below is a working definition for Grade 7. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
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
            "word processor",
            "software for creating, editing, formatting, saving and printing documents",
            "In this unit, word processor means software for creating, editing, formatting, saving and printing documents."
          ],
          [
            "home row",
            "the middle row of letter keys — A S D F and J K L ; — where the fingers rest when touch-typing",
            "In this unit, home row means the middle row of letter keys — A S D F and J K L ; — where the fingers rest when touch-typing."
          ],
          [
            "touch-typing",
            "typing with all fingers without looking at the keys",
            "In this unit, touch-typing means typing with all fingers without looking at the keys."
          ],
          [
            "cursor",
            "the blinking line or pointer that shows where the next character will appear",
            "In this unit, cursor means the blinking line or pointer that shows where the next character will appear."
          ],
          [
            "editing",
            "changing the words of a document: inserting, deleting, cutting, copying and pasting",
            "In this unit, editing means changing the words of a document: inserting, deleting, cutting, copying and pasting."
          ],
          [
            "formatting",
            "changing how text looks: font, size, bold, italic, underline, colour and alignment",
            "In this unit, formatting means changing how text looks: font, size, bold, italic, underline, colour and alignment."
          ],
          [
            "font",
            "a named design of letters, such as Times New Roman or Arial",
            "In this unit, font means a named design of letters, such as Times New Roman or Arial."
          ],
          [
            "alignment",
            "how lines sit against the margins: left, centred, right or justified",
            "In this unit, alignment means how lines sit against the margins: left, centred, right or justified."
          ],
          [
            "paragraph",
            "a block of related sentences, ended in a word processor by pressing Enter",
            "In this unit, paragraph means a block of related sentences, ended in a word processor by pressing Enter."
          ],
          [
            "margin",
            "the blank space between the text and the edge of the page",
            "In this unit, margin means the blank space between the text and the edge of the page."
          ],
          [
            "spell checker",
            "a tool that underlines words it does not recognise so the writer can check them",
            "In this unit, spell checker means a tool that underlines words it does not recognise so the writer can check them."
          ],
          [
            "save",
            "to copy the document from memory to storage under a file name so it is not lost",
            "In this unit, save means to copy the document from memory to storage under a file name so it is not lost."
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
          "**Editing** — the words change: insert, delete, cut, copy, paste.",
          "**Formatting** — the look changes: font, size, bold, alignment.",
          "**Cut** moves text; **copy** duplicates it; **paste** puts it down.",
          "**Undo** reverses the last action; **save** writes the file to storage.",
          "**Left aligned** for letters; **centred** for headings; **justified** for book-style columns."
        ]
      },
      {
        "k": "table",
        "head": [
          "Action",
          "Editing or formatting?",
          "Why"
        ],
        "rows": [
          [
            "Deleting a repeated word",
            "Editing",
            "The words change."
          ],
          [
            "Making the title bold",
            "Formatting",
            "The words stay; their look changes."
          ],
          [
            "Changing the font to Arial",
            "Formatting",
            "Only the design of the letters changes."
          ],
          [
            "Pasting a sentence from page 2 to page 1",
            "Editing",
            "The text moves."
          ],
          [
            "Centring a heading",
            "Formatting",
            "Alignment is appearance."
          ],
          [
            "Correcting 'recieve' to 'receive'",
            "Editing",
            "The spelling — the words — changes."
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
          "Key or shortcut",
          "What it does",
          "Common mistake"
        ],
        "rows": [
          [
            "Space bar",
            "Puts one space between words",
            "Two spaces after a full stop"
          ],
          [
            "Enter",
            "Ends a paragraph",
            "Pressing Enter at the end of every line"
          ],
          [
            "Shift",
            "Capital letter for one key",
            "Using Caps Lock for one capital"
          ],
          [
            "Backspace",
            "Deletes the character to the left of the cursor",
            "Confusing it with Delete (to the right)"
          ],
          [
            "Ctrl + Z",
            "Undo the last action",
            "Retyping instead of undoing"
          ],
          [
            "Ctrl + S",
            "Save the document",
            "Waiting until the end to save"
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
        "t": "Every Liberian office letter, PTA notice, WAEC application and job application passes through a word processor. A student who can type from the home row and lay out a letter correctly can earn money typing for others at a business centre in any county town. When electricity fails — as it does — the habit of saving early is the difference between a finished letter and a lost afternoon. A class with no computer practises on a paper keyboard and drafts the document by hand with the margins, heading and paragraphs marked; the machine, when available, only types what the paper already decided."
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
        "t": "The class investigation is **“Home-row drill on a paper keyboard”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Each student places a printed or hand-drawn keyboard on the desk and rests the left fingers on A S D F and the right on J K L ; with thumbs on the space bar.",
          "The teacher calls letters; students press the paper key with the correct finger and say the finger name aloud (left index for F and G, right index for J and H).",
          "Pairs dictate a three-line PTA notice; the driver 'types' on paper while the navigator checks fingers, spaces and Shift for capitals.",
          "On a ruled sheet, the pair marks margins, centres the heading, left-aligns the body and boxes one word to be bold.",
          "If a computer is present, one pair types the same notice while the others check that Enter is pressed only at paragraph ends; otherwise the paper draft is the finished work."
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
        "t": "**Problem.** A student types the sentence 'the pta meeting is on friday' and wants it corrected and set as a bold, centred heading. List the editing actions and then the formatting actions, in order."
      },
      {
        "k": "num",
        "items": [
          "Editing: move the cursor to 't', Shift + T for a capital; capitalise 'PTA' and 'Friday'; add the full stop.",
          "Editing check: spell checker underlines nothing, so the words are done.",
          "Formatting: select the whole line; apply bold.",
          "Formatting: with the line still selected, choose centre alignment.",
          "Save with Ctrl + S under a clear file name such as pta-notice."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** Edit first (capitals and punctuation), then format (bold, centred), then save; editing changed the words, formatting changed their look."
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
          "Pressing Enter at the end of every line instead of letting the text wrap — paragraphs then break when the font changes.",
          "Using Caps Lock for one capital letter, then typing a whole line in capitals.",
          "Formatting before editing, so bold and centring have to be redone after corrections.",
          "Never saving until the end; a power cut then deletes the whole document."
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
        "t": "Safety, Fairness and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN, a one-time code, a home address or a photograph of a classmate. If a message asks for a picture, money or a meeting, the student stops, keeps the message and tells a teacher. Copying another student's work and calling it your own is not collaboration; pair work shares the thinking, not the credit for work you did not do. Unplugged work is complete computing work."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, a scam, a request for a picture or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered, and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
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
        "t": "A Grade 7 student typing a letter for a neighbour at a business centre loses the whole document when the power fails, and blames the computer."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Name the bug — the document lived only in memory — then fix the habit: save with a clear file name as soon as the heading is typed, press Ctrl + S after every paragraph, and keep a paper draft of the letter's layout so retyping is quick."
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
        "t": "Name the bug — the document lived only in memory — then fix the habit: save with a clear file name as soon as the heading is typed, press Ctrl + S after every paragraph, and keep a paper draft of the letter's layout so retyping is quick."
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
        "t": "The investigation **“Home-row drill on a paper keyboard”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
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
            "Paper keyboard",
            "The real keyboard we may not have",
            "The finger and key for each letter"
          ],
          [
            "Ruled sheet with margins",
            "The document page",
            "The letter's parts in the right places"
          ],
          [
            "Word card",
            "A key term",
            "The term in a sentence"
          ],
          [
            "Class chart",
            "Accuracy and speed each week",
            "One new row per student per week"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Draft on Paper, Type on the Machine"
      },
      {
        "k": "p",
        "t": "A letter has parts: sender's address, date, receiver's address, greeting, body paragraphs, closing, signature. Marking these on ruled paper first means the typing is copying, not composing. Business-centre typists work this way because the customer's time on the machine costs money."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Let the Words Wrap"
      },
      {
        "k": "p",
        "t": "A word processor moves a word to the next line by itself when the line is full. Press Enter only to end a paragraph. If you press Enter at every line, a change of font or margin leaves short broken lines all through the page — a formatting bug that is slow to fix."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Select, Then Format"
      },
      {
        "k": "p",
        "t": "Formatting acts on whatever is selected. Nothing selected, nothing formatted — or the wrong thing formatted. Select the heading, then bold; select the paragraph, then justify. Say 'select, then format' aloud until it is a habit."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Speed Comes After Accuracy"
      },
      {
        "k": "p",
        "t": "Ten correct words a minute from the home row beat thirty words with the eyes on the keys and five errors. Accuracy first, then speed, measured each week on the class chart: a typing drill is a computing drill."
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
        "t": "A fair period test on “Keyboard Skills and Word Processing” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit and use each in a sentence.",
          "Write or trace a four-step algorithm, formula or procedure connected with “Keyboard Skills and Word Processing”, showing every line of working.",
          "Sort four examples using “Editing actions / Formatting actions” and give one reason.",
          "Debug a broken set of steps without blaming the person who wrote them, and say what the bug was."
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
        "t": "A 4-week unit on “Keyboard Skills and Word Processing” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
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
            "What “Keyboard Skills and Word Processing” is, and where it already appears around us.",
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
        "t": "This is original supplementary teaching material for Liberian junior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, word processor means software for creating, editing, formatting, saving and printing documents.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, home row means typing with all fingers without looking at the keys.",
        "a": "False",
        "why": "home row means the middle row of letter keys — A S D F and J K L ; — where the fingers rest when touch-typing; the statement describes touch-typing."
      },
      {
        "s": "In this unit, cursor means the blinking line or pointer that shows where the next character will appear.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Unplugged work with paper, trace tables and cards is complete computing work; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the instructions, not in the person."
      },
      {
        "s": "Students should share passwords or mobile-money PINs so a partner can finish the work.",
        "a": "False",
        "why": "A password or PIN is secret. Never share a password, PIN, one-time code or personal photograph."
      },
      {
        "s": "A word processor is software for creating, editing, formatting, saving and printing documents.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "Pressing Enter at the end of every line is the correct way to type a paragraph.",
        "a": "False",
        "why": "Text wraps by itself; Enter is pressed only to end a paragraph."
      },
      {
        "s": "Making a heading bold is formatting, not editing.",
        "a": "True",
        "why": "Formatting changes how words look; editing changes the words."
      }
    ],
    "classify": {
      "title": "Editing actions / Formatting actions",
      "groups": [
        {
          "name": "Editing actions",
          "items": [
            "deleting a word",
            "inserting a sentence",
            "cutting and pasting",
            "correcting spelling",
            "undoing a deletion",
            "replacing 'their' with 'there'"
          ]
        },
        {
          "name": "Formatting actions",
          "items": [
            "bold",
            "italic",
            "changing the font size",
            "centring a heading",
            "justifying a paragraph",
            "changing the margins"
          ]
        }
      ]
    },
    "diagram": {
      "title": "The keyboard home row and the parts of a document page",
      "caption": "Label each part and state what it does in “Keyboard Skills and Word Processing”.",
      "parts": [
        {
          "p": "Home row",
          "f": "A S D F and J K L ; — the resting position for the fingers"
        },
        {
          "p": "Space bar",
          "f": "pressed by the thumb; one space between words"
        },
        {
          "p": "Shift",
          "f": "gives a single capital letter or the upper symbol on a key"
        },
        {
          "p": "Margin",
          "f": "the blank space between text and the page edge"
        },
        {
          "p": "Cursor",
          "f": "shows where the next character will appear"
        }
      ]
    },
    "experiment": {
      "title": "Home-row drill on a paper keyboard",
      "aim": "To practise the ideas of “Keyboard Skills and Word Processing” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Paper cards, arrows and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class computing chart",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “Home-row drill on a paper keyboard” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A Grade 7 student typing a letter for a neighbour at a business centre loses the whole document when the power fails, and blames the computer. What should happen next?",
        "a": "Name the bug — the document lived only in memory — then fix the habit: save with a clear file name as soon as the heading is typed, press Ctrl + S after every paragraph, and keep a paper draft of the letter's layout so retyping is quick."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Keyboard Skills and Word Processing”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's trace gives the wrong answer. What do you say, and why?",
        "a": "Remind the class that a bug is in the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian daily life (a market, a clinic, a radio station, a mobile-money kiosk, a school office).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as mobile money, a clinic record, a radio bulletin, a school register or a market ledger."
      },
      {
        "q": "A neighbour asks you to type a one-page application letter. Describe the order of work from paper draft to saved file.",
        "a": "Draft the letter's parts on paper; type from the home row; edit for spelling and capitals; format headings and alignment; save early with a clear file name and again before printing."
      },
      {
        "q": "Which alignment suits (a) a letter body, (b) a title, (c) a newspaper column? Give a reason for each.",
        "a": "(a) left aligned for easy reading; (b) centred to stand out; (c) justified so both edges are straight."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “Home-row drill on a paper keyboard” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, paper grids and a paper keyboard",
      "A class computing chart",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's phone, kept dry and in sight"
    ],
    "aids": [
      "Word cards — word processor, home row, touch-typing",
      "A flowchart or trace table of “Home-row drill on a paper keyboard”",
      "A paper keyboard for every student with the home row shaded",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing word and what it means.",
      "Practise this week's paper method (a trace, a conversion, a formula or an algorithm) with a sibling or a friend — no device needed.",
      "Find one example of this unit's idea in your community (a market, a clinic, a radio station, a mobile-money kiosk or an office) and write three sentences about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written algorithm, trace table or worked conversion",
      "Pair-debug observed against the class chart",
      "A short written response to the Liberian scenario"
    ],
    "worked": [
      {
        "q": "Name the home-row keys for the left hand and for the right hand.",
        "steps": [
          "Left: A S D F; right: J K L ;."
        ],
        "a": "A S D F and J K L ;"
      },
      {
        "q": "Which finger presses F and G? Which presses J and H?",
        "steps": [
          "Index fingers reach inwards."
        ],
        "a": "Left index: F and G; right index: J and H"
      },
      {
        "q": "Making a title bold — editing or formatting?",
        "steps": [
          "The look changes, not the words."
        ],
        "a": "Formatting"
      },
      {
        "q": "Correcting 'recieve' to 'receive' — editing or formatting?",
        "steps": [
          "The words change."
        ],
        "a": "Editing"
      },
      {
        "q": "Which key ends a paragraph? Which key should not be pressed at the end of every line?",
        "steps": [
          "Enter ends a paragraph; the text wraps by itself."
        ],
        "a": "Enter; do not press Enter at each line end"
      },
      {
        "q": "A typist presses Ctrl + Z after deleting a paragraph by mistake. What happens?",
        "steps": [
          "Undo reverses the last action."
        ],
        "a": "The paragraph comes back"
      },
      {
        "q": "A document was typed for 40 minutes and never saved; the power fails. How much is kept in storage?",
        "steps": [
          "Save copies memory to storage; no save, nothing in storage."
        ],
        "a": "Nothing"
      },
      {
        "q": "A student types 12 words a minute with 0 errors; another types 30 with 8 errors. Who should the class chart praise this week, and why?",
        "steps": [
          "Accuracy first, then speed."
        ],
        "a": "The 12-word typist: accuracy comes before speed"
      }
    ]
  },
  {
    "grade": 7,
    "period": "IV",
    "sem": "Two",
    "icon": "🗂️",
    "csPlan": true,
    "title": "The Operating System and Managing Files",
    "subtitle": "Computer Science · Original junior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Unplugged-first: a class with no computer lab can still complete the unit on paper, and a class with one shared device can extend it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary accurately in speech and writing.",
      "Write, trace and debug an algorithm, a formula or a set of steps connected with the unit — on paper first, on a device when one is available.",
      "Make and justify a safe, honest and lawful choice about devices, data and people online."
    ],
    "objectives": [
      "Explain the key terms in “The Operating System and Managing Files” and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm or set of steps connected with this unit, on paper.",
      "Sort examples into the unit's two groups and give a reason for each choice.",
      "Trace a worked example step by step, showing every line of working, and state the answer in a full sentence.",
      "Apply the unit's ideas to a fictional Liberian school, market or office scenario.",
      "Debug a broken set of steps, a formula or a short program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared record of bugs found.",
      "Name one Liberian example of this unit's idea (mobile money, a radio station, a clinic record, a ministry office, a school register or a market stall)."
    ],
    "safeguard": "A junior high computing lesson uses charts, paper models, trace tables and, when a device is present, a shared school machine or the teacher's own phone. Students never share passwords or PINs, never photograph one another without consent, and never post a classmate's image or details. A mobile-money PIN is a secret even from a friend. If a student reports online bullying, a request for a picture, a scam message or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "An operating system (such as Windows, Android, Linux or macOS) manages the hardware, runs programs and organises files. A file is a named collection of data; a folder holds files and other folders; a path names the route from the drive to the file. Managing files means naming, saving, copying, moving, renaming and deleting them carefully.",
    "focus": [
      "Unplugged demonstration and paper trace",
      "Pair work and debugging",
      "Liberian scenario",
      "Computing fair check"
    ],
    "terms": [
      {
        "t": "operating system",
        "d": "the software that manages the hardware, runs the other programs and organises files",
        "x": "In this unit, operating system means the software that manages the hardware, runs the other programs and organises files."
      },
      {
        "t": "boot",
        "d": "to start a computer by loading the operating system from storage into memory",
        "x": "In this unit, boot means to start a computer by loading the operating system from storage into memory."
      },
      {
        "t": "desktop",
        "d": "the first screen the operating system shows, with icons, a taskbar and a background",
        "x": "In this unit, desktop means the first screen the operating system shows, with icons, a taskbar and a background."
      },
      {
        "t": "icon",
        "d": "a small picture that stands for a file, folder, program or drive",
        "x": "In this unit, icon means a small picture that stands for a file, folder, program or drive."
      },
      {
        "t": "window",
        "d": "a framed area of the screen in which one program or folder is shown",
        "x": "In this unit, window means a framed area of the screen in which one program or folder is shown."
      },
      {
        "t": "file",
        "d": "a named collection of data stored as one unit, such as a letter, a photo or a program",
        "x": "In this unit, file means a named collection of data stored as one unit, such as a letter, a photo or a program."
      },
      {
        "t": "folder",
        "d": "a named container that holds files and other folders, also called a directory",
        "x": "In this unit, folder means a named container that holds files and other folders, also called a directory."
      },
      {
        "t": "file name",
        "d": "the name given to a file so that it can be found again",
        "x": "In this unit, file name means the name given to a file so that it can be found again."
      },
      {
        "t": "extension",
        "d": "the letters after the last dot in a file name that show the file's type, such as .docx or .jpg",
        "x": "In this unit, extension means the letters after the last dot in a file name that show the file's type, such as .docx or .jpg."
      },
      {
        "t": "path",
        "d": "the route to a file through the drive and folders, such as D:\\School\\Grade7\\notice.docx",
        "x": "In this unit, path means the route to a file through the drive and folders, such as D:\\School\\Grade7\\notice.docx."
      },
      {
        "t": "shut down",
        "d": "to close all programs and switch off safely through the operating system",
        "x": "In this unit, shut down means to close all programs and switch off safely through the operating system."
      },
      {
        "t": "recycle bin",
        "d": "the folder that holds deleted files until it is emptied, so a mistake can be undone",
        "x": "In this unit, recycle bin means the folder that holds deleted files until it is emptied, so a mistake can be undone."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “operating system” in this unit?",
        "a": "the software that manages the hardware, runs the other programs and organises files."
      },
      {
        "q": "What is meant by “boot” in this unit?",
        "a": "to start a computer by loading the operating system from storage into memory."
      },
      {
        "q": "What is meant by “desktop” in this unit?",
        "a": "the first screen the operating system shows, with icons, a taskbar and a background."
      },
      {
        "q": "What is meant by “icon” in this unit?",
        "a": "a small picture that stands for a file, folder, program or drive."
      },
      {
        "q": "What is meant by “window” in this unit?",
        "a": "a framed area of the screen in which one program or folder is shown."
      },
      {
        "q": "What is meant by “file” in this unit?",
        "a": "a named collection of data stored as one unit, such as a letter, a photo or a program."
      },
      {
        "q": "What is meant by “folder” in this unit?",
        "a": "a named container that holds files and other folders, also called a directory."
      },
      {
        "q": "What is meant by “file name” in this unit?",
        "a": "the name given to a file so that it can be found again."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A Grade 7 student renames the school's fees spreadsheet from fees.xlsx to fees so that 'it looks neater', and the office can no longer open it."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Explain that the extension tells the operating system the file's type, restore the name to fees.xlsx from the recycle bin or by renaming, and agree a class rule: change the name before the dot, never the letters after it."
      },
      {
        "q": "State this unit idea in your own words: An operating system is the software that manages the hardware, runs the other programs and organises files.",
        "a": "An operating system is the software that manages the hardware, runs the other programs and organises files."
      },
      {
        "q": "State this unit idea in your own words: A path names the folders you pass through, from the drive to the file.",
        "a": "A path names the folders you pass through, from the drive to the file."
      },
      {
        "q": "Name three jobs of an operating system.",
        "a": "Booting and managing the hardware, running programs and sharing memory between them, and organising files and folders (also user accounts and security)."
      },
      {
        "q": "What is the difference between a file and a folder?",
        "a": "A file is one named unit of data; a folder is a container that holds files and other folders."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “The Operating System and Managing Files” Is"
      },
      {
        "k": "p",
        "t": "An **operating system** is the software that starts first and stays in charge: it manages the hardware, runs the other programs and keeps your work in **files** inside **folders**. When power arrives the computer **boots** — loads the operating system into memory — and shows a **desktop**. Every file has a **file name**, an **extension** that tells its type, and a **path** that says which folders it lives in. Students who strip the extension from a file name to make it 'neater' have removed the label the operating system reads. Explain that the extension tells the operating system the file's type, restore the name to fees.xlsx from the recycle bin or by renaming, and agree a class rule: change the name before the dot, never the letters after it. An operating system is the software that manages the hardware, runs the other programs and organises files. A path names the folders you pass through, from the drive to the file."
      },
      {
        "k": "p",
        "t": "An operating system (such as Windows, Android, Linux or macOS) manages the hardware, runs programs and organises files. A file is a named collection of data; a folder holds files and other folders; a path names the route from the drive to the file. Managing files means naming, saving, copying, moving, renaming and deleting them carefully."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: An operating system is the software that manages the hardware, runs the other programs and organises files. A path names the folders you pass through, from the drive to the file."
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
        "t": "Each idea below is a working definition for Grade 7. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
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
            "operating system",
            "the software that manages the hardware, runs the other programs and organises files",
            "In this unit, operating system means the software that manages the hardware, runs the other programs and organises files."
          ],
          [
            "boot",
            "to start a computer by loading the operating system from storage into memory",
            "In this unit, boot means to start a computer by loading the operating system from storage into memory."
          ],
          [
            "desktop",
            "the first screen the operating system shows, with icons, a taskbar and a background",
            "In this unit, desktop means the first screen the operating system shows, with icons, a taskbar and a background."
          ],
          [
            "icon",
            "a small picture that stands for a file, folder, program or drive",
            "In this unit, icon means a small picture that stands for a file, folder, program or drive."
          ],
          [
            "window",
            "a framed area of the screen in which one program or folder is shown",
            "In this unit, window means a framed area of the screen in which one program or folder is shown."
          ],
          [
            "file",
            "a named collection of data stored as one unit, such as a letter, a photo or a program",
            "In this unit, file means a named collection of data stored as one unit, such as a letter, a photo or a program."
          ],
          [
            "folder",
            "a named container that holds files and other folders, also called a directory",
            "In this unit, folder means a named container that holds files and other folders, also called a directory."
          ],
          [
            "file name",
            "the name given to a file so that it can be found again",
            "In this unit, file name means the name given to a file so that it can be found again."
          ],
          [
            "extension",
            "the letters after the last dot in a file name that show the file's type, such as .docx or .jpg",
            "In this unit, extension means the letters after the last dot in a file name that show the file's type, such as .docx or .jpg."
          ],
          [
            "path",
            "the route to a file through the drive and folders, such as D:\\School\\Grade7\\notice.docx",
            "In this unit, path means the route to a file through the drive and folders, such as D:\\School\\Grade7\\notice.docx."
          ],
          [
            "shut down",
            "to close all programs and switch off safely through the operating system",
            "In this unit, shut down means to close all programs and switch off safely through the operating system."
          ],
          [
            "recycle bin",
            "the folder that holds deleted files until it is emptied, so a mistake can be undone",
            "In this unit, recycle bin means the folder that holds deleted files until it is emptied, so a mistake can be undone."
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
          "**Operating system** — runs the machine; **application** — does one job for the user.",
          "**File** — one named unit of data; **folder** — a container for files and folders.",
          "**Rename** changes the name; **move** changes the folder; **copy** makes a second file.",
          "**Delete** sends a file to the recycle bin; **empty recycle bin** removes it for good.",
          "**Shut down** closes safely; pulling the plug risks the files being written."
        ]
      },
      {
        "k": "table",
        "head": [
          "Extension",
          "Type of file",
          "Opens with"
        ],
        "rows": [
          [
            ".docx",
            "Word-processed document",
            "A word processor"
          ],
          [
            ".xlsx",
            "Spreadsheet",
            "A spreadsheet program"
          ],
          [
            ".pdf",
            "Fixed-layout document for printing and sharing",
            "A PDF reader"
          ],
          [
            ".jpg",
            "Photograph or picture",
            "An image viewer"
          ],
          [
            ".mp3",
            "Sound recording",
            "A media player"
          ],
          [
            ".txt",
            "Plain text with no formatting",
            "A text editor"
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
          "Task",
          "Operating system or application?",
          "Reason"
        ],
        "rows": [
          [
            "Starting the computer and showing the desktop",
            "Operating system",
            "It loads first and manages the hardware."
          ],
          [
            "Typing a letter",
            "Application (word processor)",
            "One job for the user."
          ],
          [
            "Copying a file to a flash drive",
            "Operating system",
            "File management is its job."
          ],
          [
            "Playing a song",
            "Application (media player)",
            "A user program."
          ],
          [
            "Warning that the battery is low",
            "Operating system",
            "It watches the hardware."
          ],
          [
            "Shutting down safely",
            "Operating system",
            "It closes programs and stops the hardware in order."
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
        "t": "A school office in Gbarnga or Zwedru keeps its registers, letters and WAEC lists as files; a lost file is a lost week. Flash drives travel from business centre to school to ministry, so a clear folder tree — School / 2026 / Grade7 / Notices — and honest file names such as pta-notice-march.docx let anyone find the work. Power in Liberia fails without warning, so 'shut down through the menu, never by the switch' protects the files being written. A class without a computer builds the folder tree with paper folders and cards, which is exactly how the operating system thinks."
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
        "t": "The class investigation is **“The paper filing cabinet”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Give each pair a large envelope labelled D: (the drive) and smaller folded sheets to act as folders; cards are files.",
          "Build the tree D:\\School\\Grade7 with folders Notices, Lists and Photos; write six file cards with proper names and extensions (fees-list.xlsx, class-photo.jpg, pta-notice.docx …) and file them.",
          "The navigator calls a path aloud (D:\\School\\Grade7\\Notices\\pta-notice.docx); the driver walks the card out of the right folders and back.",
          "Perform rename, move, copy and delete on cards, keeping a 'Recycle Bin' envelope; check that a copy leaves the original in place.",
          "If a computer is present, one pair builds the same tree on it while the others check each path against the paper; otherwise the paper cabinet is the finished work."
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
        "t": "**Problem.** A teacher saves a notice as 'document1.docx' on the desktop, then cannot find it a week later among thirty other files. Write the path she should have used, choose a better file name, and list the steps to move the file there now."
      },
      {
        "k": "num",
        "items": [
          "Choose the folder tree: D:\\School\\Grade7\\Notices.",
          "Choose a name that says what and when: pta-notice-2026-03.docx (the extension stays .docx).",
          "Open the desktop folder; right-click document1.docx; choose Rename; type the new name.",
          "Cut the file (Ctrl + X); open D:\\School\\Grade7\\Notices; paste (Ctrl + V).",
          "Check: the file is now at D:\\School\\Grade7\\Notices\\pta-notice-2026-03.docx and the desktop copy is gone (a move, not a copy)."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** Path D:\\School\\Grade7\\Notices\\pta-notice-2026-03.docx, reached by rename, cut and paste; a move leaves one file, a copy would leave two."
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
          "Saving everything on the desktop with names like document1 and final2.",
          "Deleting or changing the extension, so the operating system no longer knows which program opens the file.",
          "Confusing move and copy, then deleting what was thought to be a duplicate.",
          "Pulling out a flash drive or switching off at the socket while a file is still being written."
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
        "t": "Safety, Fairness and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN, a one-time code, a home address or a photograph of a classmate. If a message asks for a picture, money or a meeting, the student stops, keeps the message and tells a teacher. Copying another student's work and calling it your own is not collaboration; pair work shares the thinking, not the credit for work you did not do. Unplugged work is complete computing work."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, a scam, a request for a picture or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered, and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
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
        "t": "A Grade 7 student renames the school's fees spreadsheet from fees.xlsx to fees so that 'it looks neater', and the office can no longer open it."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Explain that the extension tells the operating system the file's type, restore the name to fees.xlsx from the recycle bin or by renaming, and agree a class rule: change the name before the dot, never the letters after it."
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
        "t": "Explain that the extension tells the operating system the file's type, restore the name to fees.xlsx from the recycle bin or by renaming, and agree a class rule: change the name before the dot, never the letters after it."
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
        "t": "The investigation **“The paper filing cabinet”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
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
            "Squared paper or trace table",
            "The state of the machine after every step",
            "The finished trace with the final answer"
          ],
          [
            "Word card",
            "A key term",
            "The term in a sentence"
          ],
          [
            "Paper keyboard or printed screen",
            "The device we may not have",
            "The same action described in words"
          ],
          [
            "Class chart",
            "Bugs and precise steps the class agreed",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Booting: What Happens When You Press the Button"
      },
      {
        "k": "p",
        "t": "Power reaches the system unit; a small program in the hardware checks the memory and keyboard; the operating system is copied from storage into memory; the desktop appears. Nothing you type before the desktop is 'lost' — the machine simply was not listening yet."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Name Files for the Person Who Comes After You"
      },
      {
        "k": "p",
        "t": "A good file name says what the file is and when it was made: grade7-attendance-2026-03.xlsx. Avoid spaces at the start, avoid 'final' and 'new', and keep the same pattern across the office so a search finds the whole set."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Folders Are a Tree"
      },
      {
        "k": "p",
        "t": "The drive is the root; folders are branches; files are leaves. A path reads from root to leaf: D:\\School\\Grade7\\Lists\\attendance.xlsx. Two files can share a name only if they sit in different folders — which is how mistakes hide."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Recycle Bin Is a Second Chance, Not a Store"
      },
      {
        "k": "p",
        "t": "Deleting sends a file to the recycle bin, where it can be restored. Emptying the bin removes it. Never keep work 'in the bin'; move it to a folder or a flash drive, and keep a copy of anything important on a second drive."
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
        "t": "A fair period test on “The Operating System and Managing Files” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit and use each in a sentence.",
          "Write or trace a four-step algorithm, formula or procedure connected with “The Operating System and Managing Files”, showing every line of working.",
          "Sort four examples using “Operating system jobs / Application jobs” and give one reason.",
          "Debug a broken set of steps without blaming the person who wrote them, and say what the bug was."
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
        "t": "A 4-week unit on “The Operating System and Managing Files” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
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
            "What “The Operating System and Managing Files” is, and where it already appears around us.",
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
        "t": "This is original supplementary teaching material for Liberian junior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, operating system means the software that manages the hardware, runs the other programs and organises files.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, boot means the first screen the operating system shows, with icons, a taskbar and a background.",
        "a": "False",
        "why": "boot means to start a computer by loading the operating system from storage into memory; the statement describes desktop."
      },
      {
        "s": "In this unit, icon means a small picture that stands for a file, folder, program or drive.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Unplugged work with paper, trace tables and cards is complete computing work; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the instructions, not in the person."
      },
      {
        "s": "Students should share passwords or mobile-money PINs so a partner can finish the work.",
        "a": "False",
        "why": "A password or PIN is secret. Never share a password, PIN, one-time code or personal photograph."
      },
      {
        "s": "An operating system is the software that manages the hardware, runs the other programs and organises files.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "Switching the computer off at the wall socket is the same as shutting down.",
        "a": "False",
        "why": "Shutting down closes programs and finishes writing files; cutting the power can corrupt files and the operating system."
      },
      {
        "s": "The extension after the dot tells the operating system which type of file it is.",
        "a": "True",
        "why": ".docx, .xlsx and .jpg name the file type so the right program opens it."
      }
    ],
    "classify": {
      "title": "Operating system jobs / Application jobs",
      "groups": [
        {
          "name": "Operating system jobs",
          "items": [
            "booting the computer",
            "showing the desktop",
            "copying a file to a flash drive",
            "warning of a low battery",
            "shutting down safely",
            "managing memory for programs"
          ]
        },
        {
          "name": "Application jobs",
          "items": [
            "typing a letter",
            "playing a song",
            "editing a photo",
            "totalling a spreadsheet",
            "browsing a web page",
            "drawing a poster"
          ]
        }
      ]
    },
    "diagram": {
      "title": "A folder tree and a file path",
      "caption": "Label each part and state what it does in “The Operating System and Managing Files”.",
      "parts": [
        {
          "p": "Drive (D:)",
          "f": "the root of the tree, the storage device"
        },
        {
          "p": "Folder (School)",
          "f": "a container that holds folders and files"
        },
        {
          "p": "Sub-folder (Grade7\\Notices)",
          "f": "a folder inside a folder"
        },
        {
          "p": "File name (pta-notice)",
          "f": "the part of the name before the dot"
        },
        {
          "p": "Extension (.docx)",
          "f": "the letters after the dot that show the file type"
        }
      ]
    },
    "experiment": {
      "title": "The paper filing cabinet",
      "aim": "To practise the ideas of “The Operating System and Managing Files” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Paper cards, arrows and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class computing chart",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “The paper filing cabinet” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A Grade 7 student renames the school's fees spreadsheet from fees.xlsx to fees so that 'it looks neater', and the office can no longer open it. What should happen next?",
        "a": "Explain that the extension tells the operating system the file's type, restore the name to fees.xlsx from the recycle bin or by renaming, and agree a class rule: change the name before the dot, never the letters after it."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “The Operating System and Managing Files”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's trace gives the wrong answer. What do you say, and why?",
        "a": "Remind the class that a bug is in the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian daily life (a market, a clinic, a radio station, a mobile-money kiosk, a school office).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as mobile money, a clinic record, a radio bulletin, a school register or a market ledger."
      },
      {
        "q": "Design a folder tree for a school office that keeps notices, attendance lists, exam results and photographs for each grade. Write two complete paths.",
        "a": "For example D:\\School\\2026\\Grade7\\Notices\\pta-notice-2026-03.docx and D:\\School\\2026\\Grade7\\Results\\period-1-results.xlsx; a root, a year, a grade, a type."
      },
      {
        "q": "The office computer is switched off at the wall every evening 'to save time'. What risk does this carry and what should be done instead?",
        "a": "Files still being written can be corrupted and the operating system may fail to boot; shut down through the menu so programs close and the hardware stops in order."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “The paper filing cabinet” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, paper grids and a paper keyboard",
      "A class computing chart",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's phone, kept dry and in sight"
    ],
    "aids": [
      "Word cards — operating system, boot, desktop",
      "A flowchart or trace table of “The paper filing cabinet”",
      "Paper folders, envelopes for drives and file cards with extensions",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing word and what it means.",
      "Practise this week's paper method (a trace, a conversion, a formula or an algorithm) with a sibling or a friend — no device needed.",
      "Find one example of this unit's idea in your community (a market, a clinic, a radio station, a mobile-money kiosk or an office) and write three sentences about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written algorithm, trace table or worked conversion",
      "Pair-debug observed against the class chart",
      "A short written response to the Liberian scenario"
    ],
    "worked": [
      {
        "q": "Write the path to a file named results.xlsx in the folder Grade7 inside School on drive D:.",
        "steps": [
          "Root → folder → sub-folder → file."
        ],
        "a": "D:\\School\\Grade7\\results.xlsx"
      },
      {
        "q": "What type of file is class-photo.jpg, and which part of the name tells you?",
        "steps": [
          "The extension after the dot."
        ],
        "a": "A picture; the .jpg extension"
      },
      {
        "q": "A file is copied from D:\\Notices to E:\\Backup. How many copies exist afterwards?",
        "steps": [
          "Copy leaves the original."
        ],
        "a": "Two"
      },
      {
        "q": "A file is moved from D:\\Notices to E:\\Backup. How many copies exist afterwards?",
        "steps": [
          "Move removes the original."
        ],
        "a": "One"
      },
      {
        "q": "A student deletes notice.docx by mistake. Where can it be found, and what must not be done first?",
        "steps": [
          "Deleted files wait in the recycle bin until it is emptied."
        ],
        "a": "In the recycle bin; do not empty the bin"
      },
      {
        "q": "Which loads first when the computer starts: the word processor or the operating system?",
        "steps": [
          "Boot loads the operating system."
        ],
        "a": "The operating system"
      },
      {
        "q": "fees.xlsx is renamed to fees. What has been lost, and what happens when someone double-clicks it?",
        "steps": [
          "The extension names the type."
        ],
        "a": "The extension; the system does not know which program should open it"
      },
      {
        "q": "Rename 'document1.docx' so that it says what it is and when it was made.",
        "steps": [
          "What + when, keep the extension."
        ],
        "a": "For example pta-notice-2026-03.docx"
      }
    ]
  },
  {
    "grade": 7,
    "period": "V",
    "sem": "Two",
    "icon": "🩺",
    "csPlan": true,
    "title": "Health, Safety and Care of ICT Tools",
    "subtitle": "Computer Science · Original junior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Unplugged-first: a class with no computer lab can still complete the unit on paper, and a class with one shared device can extend it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary accurately in speech and writing.",
      "Write, trace and debug an algorithm, a formula or a set of steps connected with the unit — on paper first, on a device when one is available.",
      "Make and justify a safe, honest and lawful choice about devices, data and people online."
    ],
    "objectives": [
      "Explain the key terms in “Health, Safety and Care of ICT Tools” and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm or set of steps connected with this unit, on paper.",
      "Sort examples into the unit's two groups and give a reason for each choice.",
      "Trace a worked example step by step, showing every line of working, and state the answer in a full sentence.",
      "Apply the unit's ideas to a fictional Liberian school, market or office scenario.",
      "Debug a broken set of steps, a formula or a short program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared record of bugs found.",
      "Name one Liberian example of this unit's idea (mobile money, a radio station, a clinic record, a ministry office, a school register or a market stall)."
    ],
    "safeguard": "A junior high computing lesson uses charts, paper models, trace tables and, when a device is present, a shared school machine or the teacher's own phone. Students never share passwords or PINs, never photograph one another without consent, and never post a classmate's image or details. A mobile-money PIN is a secret even from a friend. If a student reports online bullying, a request for a picture, a scam message or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "Safe computing protects the user, the machine and the work. Users need good posture, a screen at eye level, breaks every 20 minutes and clean, dry hands. Machines need steady power through a surge protector, protection from dust, heat, water and falls, and careful shutdown. Work needs regular saving and a backup on a second drive. Dead devices are e-waste and must be handled and disposed of safely.",
    "focus": [
      "Unplugged demonstration and paper trace",
      "Pair work and debugging",
      "Liberian scenario",
      "Computing fair check"
    ],
    "terms": [
      {
        "t": "ergonomics",
        "d": "arranging equipment and posture so that work fits the human body and does no harm",
        "x": "In this unit, ergonomics means arranging equipment and posture so that work fits the human body and does no harm."
      },
      {
        "t": "repetitive strain injury",
        "d": "pain in the hands, wrists or arms caused by the same small movement repeated for hours",
        "x": "In this unit, repetitive strain injury means pain in the hands, wrists or arms caused by the same small movement repeated for hours."
      },
      {
        "t": "eye strain",
        "d": "tired, sore or dry eyes caused by staring at a screen without breaks or in bad light",
        "x": "In this unit, eye strain means tired, sore or dry eyes caused by staring at a screen without breaks or in bad light."
      },
      {
        "t": "posture",
        "d": "the way the body is held while sitting and working: feet flat, back supported, wrists straight",
        "x": "In this unit, posture means the way the body is held while sitting and working: feet flat, back supported, wrists straight."
      },
      {
        "t": "surge protector",
        "d": "a device that blocks sudden jumps in voltage so they do not damage the computer",
        "x": "In this unit, surge protector means a device that blocks sudden jumps in voltage so they do not damage the computer."
      },
      {
        "t": "uninterruptible power supply",
        "d": "a battery unit that keeps a computer running for a few minutes when the power fails, so it can be shut down safely",
        "x": "In this unit, uninterruptible power supply means a battery unit that keeps a computer running for a few minutes when the power fails, so it can be shut down safely."
      },
      {
        "t": "ventilation",
        "d": "the flow of air around a machine that carries heat away and prevents overheating",
        "x": "In this unit, ventilation means the flow of air around a machine that carries heat away and prevents overheating."
      },
      {
        "t": "backup",
        "d": "a second copy of files kept on a different drive or device in case the first is lost",
        "x": "In this unit, backup means a second copy of files kept on a different drive or device in case the first is lost."
      },
      {
        "t": "e-waste",
        "d": "discarded electrical and electronic devices, batteries and cables that must be disposed of safely",
        "x": "In this unit, e-waste means discarded electrical and electronic devices, batteries and cables that must be disposed of safely."
      },
      {
        "t": "dust cover",
        "d": "a cloth or plastic cover placed over a machine when it is not in use to keep dust and insects out",
        "x": "In this unit, dust cover means a cloth or plastic cover placed over a machine when it is not in use to keep dust and insects out."
      },
      {
        "t": "20-20-20 rule",
        "d": "every 20 minutes, look at something 20 feet (about 6 metres) away for 20 seconds",
        "x": "In this unit, 20-20-20 rule means every 20 minutes, look at something 20 feet (about 6 metres) away for 20 seconds."
      },
      {
        "t": "trip hazard",
        "d": "a cable or object on the floor that a person can catch a foot on and fall over",
        "x": "In this unit, trip hazard means a cable or object on the floor that a person can catch a foot on and fall over."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “ergonomics” in this unit?",
        "a": "arranging equipment and posture so that work fits the human body and does no harm."
      },
      {
        "q": "What is meant by “repetitive strain injury” in this unit?",
        "a": "pain in the hands, wrists or arms caused by the same small movement repeated for hours."
      },
      {
        "q": "What is meant by “eye strain” in this unit?",
        "a": "tired, sore or dry eyes caused by staring at a screen without breaks or in bad light."
      },
      {
        "q": "What is meant by “posture” in this unit?",
        "a": "the way the body is held while sitting and working: feet flat, back supported, wrists straight."
      },
      {
        "q": "What is meant by “surge protector” in this unit?",
        "a": "a device that blocks sudden jumps in voltage so they do not damage the computer."
      },
      {
        "q": "What is meant by “uninterruptible power supply” in this unit?",
        "a": "a battery unit that keeps a computer running for a few minutes when the power fails, so it can be shut down safely."
      },
      {
        "q": "What is meant by “ventilation” in this unit?",
        "a": "the flow of air around a machine that carries heat away and prevents overheating."
      },
      {
        "q": "What is meant by “backup” in this unit?",
        "a": "a second copy of files kept on a different drive or device in case the first is lost."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A school receives a generator for its two computers and plugs them straight into it; the next week both power supplies are dead and the office blames 'bad computers'."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Name the hazard — voltage spikes from the generator — and the protection: plug each machine through a surge protector, add a UPS if funds allow, switch on only after the generator settles, and shut down before it is switched off."
      },
      {
        "q": "State this unit idea in your own words: Safe computing protects three things: the user, the machine and the work.",
        "a": "Safe computing protects three things: the user, the machine and the work."
      },
      {
        "q": "State this unit idea in your own words: A surge protector guards a computer against sudden jumps in the electricity supply.",
        "a": "A surge protector guards a computer against sudden jumps in the electricity supply."
      },
      {
        "q": "Give two ways Liberian electricity can harm a computer and one protection for each.",
        "a": "Spikes when a generator starts — a surge protector; sudden cuts while files are being written — a UPS and shutting down through the menu."
      },
      {
        "q": "Why must e-waste not be burnt or dumped in drains?",
        "a": "Batteries and boards contain lead, cadmium and mercury that poison the air when burnt and the wells and rivers when dumped."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Health, Safety and Care of ICT Tools” Is"
      },
      {
        "k": "p",
        "t": "Computers can hurt the people who use them and be hurt by the people who use them. **Ergonomics** — the study of fitting the work to the body — prevents **repetitive strain injury** and **eye strain**; a **surge protector** and an **uninterruptible power supply** protect the machine from Liberia's unsteady electricity; and careful handling, dust covers and a **backup** protect the work. **E-waste** — dead devices and batteries — must not go into the drain or the fire. Students who blame 'bad computers' when unprotected generator power kills two power supplies have missed the real hazard. Name the hazard — voltage spikes from the generator — and the protection: plug each machine through a surge protector, add a UPS if funds allow, switch on only after the generator settles, and shut down before it is switched off. Safe computing protects three things: the user, the machine and the work. A surge protector guards a computer against sudden jumps in the electricity supply."
      },
      {
        "k": "p",
        "t": "Safe computing protects the user, the machine and the work. Users need good posture, a screen at eye level, breaks every 20 minutes and clean, dry hands. Machines need steady power through a surge protector, protection from dust, heat, water and falls, and careful shutdown. Work needs regular saving and a backup on a second drive. Dead devices are e-waste and must be handled and disposed of safely."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: Safe computing protects three things: the user, the machine and the work. A surge protector guards a computer against sudden jumps in the electricity supply."
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
        "t": "Each idea below is a working definition for Grade 7. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
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
            "ergonomics",
            "arranging equipment and posture so that work fits the human body and does no harm",
            "In this unit, ergonomics means arranging equipment and posture so that work fits the human body and does no harm."
          ],
          [
            "repetitive strain injury",
            "pain in the hands, wrists or arms caused by the same small movement repeated for hours",
            "In this unit, repetitive strain injury means pain in the hands, wrists or arms caused by the same small movement repeated for hours."
          ],
          [
            "eye strain",
            "tired, sore or dry eyes caused by staring at a screen without breaks or in bad light",
            "In this unit, eye strain means tired, sore or dry eyes caused by staring at a screen without breaks or in bad light."
          ],
          [
            "posture",
            "the way the body is held while sitting and working: feet flat, back supported, wrists straight",
            "In this unit, posture means the way the body is held while sitting and working: feet flat, back supported, wrists straight."
          ],
          [
            "surge protector",
            "a device that blocks sudden jumps in voltage so they do not damage the computer",
            "In this unit, surge protector means a device that blocks sudden jumps in voltage so they do not damage the computer."
          ],
          [
            "uninterruptible power supply",
            "a battery unit that keeps a computer running for a few minutes when the power fails, so it can be shut down safely",
            "In this unit, uninterruptible power supply means a battery unit that keeps a computer running for a few minutes when the power fails, so it can be shut down safely."
          ],
          [
            "ventilation",
            "the flow of air around a machine that carries heat away and prevents overheating",
            "In this unit, ventilation means the flow of air around a machine that carries heat away and prevents overheating."
          ],
          [
            "backup",
            "a second copy of files kept on a different drive or device in case the first is lost",
            "In this unit, backup means a second copy of files kept on a different drive or device in case the first is lost."
          ],
          [
            "e-waste",
            "discarded electrical and electronic devices, batteries and cables that must be disposed of safely",
            "In this unit, e-waste means discarded electrical and electronic devices, batteries and cables that must be disposed of safely."
          ],
          [
            "dust cover",
            "a cloth or plastic cover placed over a machine when it is not in use to keep dust and insects out",
            "In this unit, dust cover means a cloth or plastic cover placed over a machine when it is not in use to keep dust and insects out."
          ],
          [
            "20-20-20 rule",
            "every 20 minutes, look at something 20 feet (about 6 metres) away for 20 seconds",
            "In this unit, 20-20-20 rule means every 20 minutes, look at something 20 feet (about 6 metres) away for 20 seconds."
          ],
          [
            "trip hazard",
            "a cable or object on the floor that a person can catch a foot on and fall over",
            "In this unit, trip hazard means a cable or object on the floor that a person can catch a foot on and fall over."
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
          "**Protecting the user** — posture, breaks, light, clean hands.",
          "**Protecting the machine** — steady power, dust, heat, water, falls.",
          "**Protecting the work** — save early, back up to a second drive.",
          "**Surge protector** blocks voltage spikes; **UPS** gives minutes of battery to shut down.",
          "**Recycling e-waste** keeps lead and mercury out of wells; burning it puts them in the air."
        ]
      },
      {
        "k": "table",
        "head": [
          "Hazard",
          "Who or what it harms",
          "Prevention"
        ],
        "rows": [
          [
            "Screen below eye level, neck bent",
            "The user's neck and back",
            "Raise the screen to eye level; sit back with feet flat."
          ],
          [
            "Typing for two hours without a break",
            "The user's wrists and eyes",
            "Break every 20 minutes; keep wrists straight."
          ],
          [
            "Voltage jump when the generator starts",
            "The machine's power supply and board",
            "Plug through a surge protector; switch on after the generator settles."
          ],
          [
            "Dust and insects inside the case",
            "The machine overheats",
            "Dust cover when idle; keep vents clear."
          ],
          [
            "Drink beside the keyboard",
            "The machine and the work",
            "Food and drink away from devices."
          ],
          [
            "Cable across the doorway",
            "Anyone who walks through",
            "Route cables along the wall; tape them down."
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
          "Device",
          "Protects against",
          "Does not protect against"
        ],
        "rows": [
          [
            "Surge protector",
            "Sudden voltage spikes",
            "A power cut — the computer still goes off"
          ],
          [
            "Uninterruptible power supply (UPS)",
            "A short power cut; gives minutes to save and shut down",
            "Hours without electricity"
          ],
          [
            "Dust cover",
            "Dust, insects, small spills when idle",
            "Heat while the machine is running (remove it first)"
          ],
          [
            "Backup drive",
            "Loss of files if the computer fails",
            "Nothing, if it is never updated"
          ],
          [
            "Antivirus program",
            "Known malicious software",
            "A user who shares a password"
          ],
          [
            "Padded bag",
            "Knocks and rain while carrying a laptop",
            "Leaving it in a hot car"
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
        "t": "Liberian electricity arrives from LEC lines, community generators and solar systems, often with spikes and cuts; a computer plugged straight into the wall in a storm season is a computer waiting to die. Dust from dry-season roads and humidity in the rains attack the inside of every machine, and business centres run generators whose fumes must stay outside. Dead phones, batteries and chargers dumped in drains leach lead and cadmium into the wells people drink from. A class that learns to sit well, plug through a surge protector, cover the machine and hand old batteries to a collection point protects health as surely as a handwashing lesson."
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
        "t": "The class investigation is **“The workstation safety audit”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Pairs draw a workstation (real or imagined) showing chair, desk, screen, keyboard, socket, cables, window and drink.",
          "Using a checklist of twelve items — screen height, feet flat, wrist position, light source, break timer, surge protector, cable route, ventilation, dust cover, food and drink, backup drive, e-waste box — they mark each item pass or fail.",
          "For every fail they write one correction in a full sentence using a unit term.",
          "The class combines the corrections into a one-page workstation rule sheet for the school office or the classroom's shared device.",
          "If a real workstation exists, one pair audits it while the others check the checklist; otherwise the drawn audit and the rule sheet are the finished work."
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
        "t": "**Problem.** A business centre in Kakata runs three computers from a generator with no surge protector; the typist sits on a low stool with the screen above her head, works four hours without a break, and keeps every customer's file only on the computer's hard disk. Identify the hazards to the user, the machine and the work, and give one correction for each."
      },
      {
        "k": "num",
        "items": [
          "User: screen above eye level and a low stool bend the neck; four hours without a break risks eye strain and repetitive strain injury — raise the seat, lower the screen to eye level, break every 20 minutes.",
          "Machine: a generator without a surge protector sends spikes — plug every machine through a surge protector and, if possible, a UPS.",
          "Work: files on one disk only — back up customer files to a second drive daily.",
          "Check the rest: cables routed along the wall; generator fumes outside; dust covers at night."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** User hazards: posture and no breaks; machine hazard: unprotected generator power; work hazard: no backup — fixed by eye-level screen and breaks, a surge protector, and a daily backup."
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
          "Thinking a surge protector keeps the computer on during a power cut — only a UPS does, and only for minutes.",
          "Covering a running laptop with a cloth 'to keep dust out', which blocks ventilation and overheats it.",
          "Cleaning a screen with water or a wet cloth while the machine is on.",
          "Throwing dead batteries into the fire or the drain."
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
        "t": "Safety, Fairness and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN, a one-time code, a home address or a photograph of a classmate. If a message asks for a picture, money or a meeting, the student stops, keeps the message and tells a teacher. Copying another student's work and calling it your own is not collaboration; pair work shares the thinking, not the credit for work you did not do. Unplugged work is complete computing work."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, a scam, a request for a picture or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered, and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
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
        "t": "A school receives a generator for its two computers and plugs them straight into it; the next week both power supplies are dead and the office blames 'bad computers'."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Name the hazard — voltage spikes from the generator — and the protection: plug each machine through a surge protector, add a UPS if funds allow, switch on only after the generator settles, and shut down before it is switched off."
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
        "t": "Name the hazard — voltage spikes from the generator — and the protection: plug each machine through a surge protector, add a UPS if funds allow, switch on only after the generator settles, and shut down before it is switched off."
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
        "t": "The investigation **“The workstation safety audit”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
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
            "Drawn workstation",
            "The real office or classroom desk",
            "The twelve-point audit with pass or fail"
          ],
          [
            "Checklist card",
            "One hazard and its prevention",
            "A correction in a full sentence"
          ],
          [
            "Word card",
            "A key term",
            "The term in a sentence"
          ],
          [
            "Class rule sheet",
            "What the school agreed",
            "One page posted beside the shared device"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Sit Like This"
      },
      {
        "k": "p",
        "t": "Feet flat on the floor, knees at a right angle, back against the chair, elbows at the sides with forearms level, wrists straight, top of the screen at eye level about an arm's length away. A folded cloth under a laptop's back edge and a book under the screen fix most classroom desks for nothing."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Eyes Need Breaks and Good Light"
      },
      {
        "k": "p",
        "t": "Screens make the eyes blink less. Follow the 20-20-20 rule, blink deliberately, and put the light source beside the screen, never behind it or behind you, where it glares. A window behind the screen is the commonest classroom mistake."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Heat, Dust, Water and Falls"
      },
      {
        "k": "p",
        "t": "A machine breathes through its vents; keep them clear and the room ventilated. Dust covers go on when the machine is off. Water and sugar drinks kill keyboards. A laptop carried by its screen, or left on the edge of a desk, falls. These four kill more school computers in Liberia than any virus."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "E-Waste and the Water We Drink"
      },
      {
        "k": "p",
        "t": "Phones, batteries and chargers contain lead, cadmium and mercury. Burnt, they poison the air; dumped, they reach the water table. Keep an e-waste box at school, hand it to a collector or a phone company return scheme, and never let a child pick apart a battery."
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
        "t": "A fair period test on “Health, Safety and Care of ICT Tools” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit and use each in a sentence.",
          "Write or trace a four-step algorithm, formula or procedure connected with “Health, Safety and Care of ICT Tools”, showing every line of working.",
          "Sort four examples using “Protects the user / Protects the machine or the work” and give one reason.",
          "Debug a broken set of steps without blaming the person who wrote them, and say what the bug was."
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
        "t": "A 4-week unit on “Health, Safety and Care of ICT Tools” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
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
            "What “Health, Safety and Care of ICT Tools” is, and where it already appears around us.",
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
        "t": "This is original supplementary teaching material for Liberian junior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, ergonomics means arranging equipment and posture so that work fits the human body and does no harm.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, repetitive strain injury means tired, sore or dry eyes caused by staring at a screen without breaks or in bad light.",
        "a": "False",
        "why": "repetitive strain injury means pain in the hands, wrists or arms caused by the same small movement repeated for hours; the statement describes eye strain."
      },
      {
        "s": "In this unit, posture means the way the body is held while sitting and working: feet flat, back supported, wrists straight.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Unplugged work with paper, trace tables and cards is complete computing work; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the instructions, not in the person."
      },
      {
        "s": "Students should share passwords or mobile-money PINs so a partner can finish the work.",
        "a": "False",
        "why": "A password or PIN is secret. Never share a password, PIN, one-time code or personal photograph."
      },
      {
        "s": "Safe computing protects three things: the user, the machine and the work.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "A surge protector keeps the computer running during a power cut.",
        "a": "False",
        "why": "A surge protector only blocks voltage spikes; a UPS supplies battery power for a few minutes."
      },
      {
        "s": "The top of the screen should be about level with the eyes.",
        "a": "True",
        "why": "That keeps the neck straight and reduces strain."
      }
    ],
    "classify": {
      "title": "Protects the user / Protects the machine or the work",
      "groups": [
        {
          "name": "Protects the user",
          "items": [
            "screen at eye level",
            "20-20-20 rule",
            "feet flat and wrists straight",
            "light beside the screen",
            "generator fumes kept outside",
            "cables taped along the wall"
          ]
        },
        {
          "name": "Protects the machine or the work",
          "items": [
            "surge protector",
            "UPS",
            "dust cover when idle",
            "clear ventilation",
            "daily backup to a second drive",
            "drinks kept away from the keyboard"
          ]
        }
      ]
    },
    "diagram": {
      "title": "A safe computer workstation",
      "caption": "Label each part and state what it does in “Health, Safety and Care of ICT Tools”.",
      "parts": [
        {
          "p": "Screen",
          "f": "top at eye level, about an arm's length away, light beside it not behind it"
        },
        {
          "p": "Chair and feet",
          "f": "back supported, feet flat, knees at a right angle"
        },
        {
          "p": "Keyboard and wrists",
          "f": "forearms level, wrists straight, breaks every 20 minutes"
        },
        {
          "p": "Surge protector and UPS",
          "f": "steady power in; minutes of battery to shut down when it fails"
        },
        {
          "p": "Cables and drinks",
          "f": "cables along the wall; food and drink away from the desk"
        }
      ]
    },
    "experiment": {
      "title": "The workstation safety audit",
      "aim": "To practise the ideas of “Health, Safety and Care of ICT Tools” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Paper cards, arrows and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class computing chart",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “The workstation safety audit” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A school receives a generator for its two computers and plugs them straight into it; the next week both power supplies are dead and the office blames 'bad computers'. What should happen next?",
        "a": "Name the hazard — voltage spikes from the generator — and the protection: plug each machine through a surge protector, add a UPS if funds allow, switch on only after the generator settles, and shut down before it is switched off."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Health, Safety and Care of ICT Tools”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's trace gives the wrong answer. What do you say, and why?",
        "a": "Remind the class that a bug is in the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian daily life (a market, a clinic, a radio station, a mobile-money kiosk, a school office).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as mobile money, a clinic record, a radio bulletin, a school register or a market ledger."
      },
      {
        "q": "Your school has LRD 15,000 to protect one computer. Rank these purchases and justify the order: a surge protector, a dust cover, a UPS, a second flash drive for backups.",
        "a": "Accept a justified order such as surge protector (spikes kill machines), flash drive for backup (the work is irreplaceable), dust cover (cheap, prevents overheating), UPS (valuable but costly)."
      },
      {
        "q": "A student complains of sore wrists and a headache after every computer lesson. Give three changes to the workstation and one change to the routine.",
        "a": "Raise the screen to eye level, keep the wrists straight with forearms level, move the light beside the screen; break every 20 minutes using the 20-20-20 rule."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “The workstation safety audit” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, paper grids and a paper keyboard",
      "A class computing chart",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's phone, kept dry and in sight"
    ],
    "aids": [
      "Word cards — ergonomics, repetitive strain injury, eye strain",
      "A flowchart or trace table of “The workstation safety audit”",
      "A twelve-point workstation safety checklist",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing word and what it means.",
      "Practise this week's paper method (a trace, a conversion, a formula or an algorithm) with a sibling or a friend — no device needed.",
      "Find one example of this unit's idea in your community (a market, a clinic, a radio station, a mobile-money kiosk or an office) and write three sentences about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written algorithm, trace table or worked conversion",
      "Pair-debug observed against the class chart",
      "A short written response to the Liberian scenario"
    ],
    "worked": [
      {
        "q": "Name the three things safe computing protects.",
        "steps": [
          "User, machine, work."
        ],
        "a": "The user, the machine and the work"
      },
      {
        "q": "State the 20-20-20 rule.",
        "steps": [
          "Every 20 minutes, 20 feet away, 20 seconds."
        ],
        "a": "Every 20 minutes look about 6 metres (20 feet) away for 20 seconds"
      },
      {
        "q": "The lights go out and the computer stays on for five minutes. Which device did that?",
        "steps": [
          "Battery back-up for minutes."
        ],
        "a": "An uninterruptible power supply (UPS)"
      },
      {
        "q": "The generator starts and a spike reaches the socket. Which device blocks it?",
        "steps": [
          "Blocks voltage jumps."
        ],
        "a": "A surge protector"
      },
      {
        "q": "A running laptop is wrapped in a cloth against dust. What is the risk, and the correct practice?",
        "steps": [
          "Vents blocked → overheating."
        ],
        "a": "Overheating; cover it only when it is switched off"
      },
      {
        "q": "A typist works from 8 a.m. to noon without a break. How many 20-minute breaks did she miss?",
        "steps": [
          "4 hours = 240 minutes; 240 ÷ 20 = 12 intervals."
        ],
        "a": "About 12 short breaks"
      },
      {
        "q": "Files exist only on the office hard disk. What single action protects the work?",
        "steps": [
          "Second copy on a different drive."
        ],
        "a": "A backup to a second drive"
      },
      {
        "q": "A dead phone battery is thrown into the cooking fire. Name one substance released and one safe alternative.",
        "steps": [
          "Heavy metals; collection point."
        ],
        "a": "Lead or cadmium fumes; hand it to an e-waste collection point or a phone company return scheme"
      }
    ]
  },
  {
    "grade": 7,
    "period": "VI",
    "sem": "Two",
    "icon": "📐",
    "csPlan": true,
    "title": "Algorithms, Flowcharts and Trace Tables",
    "subtitle": "Computer Science · Original junior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Unplugged-first: a class with no computer lab can still complete the unit on paper, and a class with one shared device can extend it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary accurately in speech and writing.",
      "Write, trace and debug an algorithm, a formula or a set of steps connected with the unit — on paper first, on a device when one is available.",
      "Make and justify a safe, honest and lawful choice about devices, data and people online."
    ],
    "objectives": [
      "Explain the key terms in “Algorithms, Flowcharts and Trace Tables” and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm or set of steps connected with this unit, on paper.",
      "Sort examples into the unit's two groups and give a reason for each choice.",
      "Trace a worked example step by step, showing every line of working, and state the answer in a full sentence.",
      "Apply the unit's ideas to a fictional Liberian school, market or office scenario.",
      "Debug a broken set of steps, a formula or a short program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared record of bugs found.",
      "Name one Liberian example of this unit's idea (mobile money, a radio station, a clinic record, a ministry office, a school register or a market stall)."
    ],
    "safeguard": "A junior high computing lesson uses charts, paper models, trace tables and, when a device is present, a shared school machine or the teacher's own phone. Students never share passwords or PINs, never photograph one another without consent, and never post a classmate's image or details. A mobile-money PIN is a secret even from a friend. If a student reports online bullying, a request for a picture, a scam message or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "An algorithm is a finite, ordered set of steps that solves a problem. Pseudocode writes it in numbered plain English; a flowchart draws it with a terminal (oval), process (rectangle), decision (diamond), input/output (parallelogram) and arrows. Sequence, selection and iteration are the three control structures, and a trace table is how an algorithm is tested by hand.",
    "focus": [
      "Unplugged demonstration and paper trace",
      "Pair work and debugging",
      "Liberian scenario",
      "Computing fair check"
    ],
    "terms": [
      {
        "t": "algorithm",
        "d": "a finite, ordered set of steps that solves a problem or completes a task",
        "x": "In this unit, algorithm means a finite, ordered set of steps that solves a problem or completes a task."
      },
      {
        "t": "pseudocode",
        "d": "an algorithm written in numbered plain-English steps that are precise enough to follow exactly",
        "x": "In this unit, pseudocode means an algorithm written in numbered plain-English steps that are precise enough to follow exactly."
      },
      {
        "t": "flowchart",
        "d": "a diagram of an algorithm using standard shapes joined by arrows",
        "x": "In this unit, flowchart means a diagram of an algorithm using standard shapes joined by arrows."
      },
      {
        "t": "sequence",
        "d": "steps carried out one after another in order",
        "x": "In this unit, sequence means steps carried out one after another in order."
      },
      {
        "t": "selection",
        "d": "a decision that chooses between paths depending on a yes-or-no condition",
        "x": "In this unit, selection means a decision that chooses between paths depending on a yes-or-no condition."
      },
      {
        "t": "iteration",
        "d": "repeating a step or group of steps, also called a loop",
        "x": "In this unit, iteration means repeating a step or group of steps, also called a loop."
      },
      {
        "t": "condition",
        "d": "a question with a yes-or-no answer that controls a selection or a loop",
        "x": "In this unit, condition means a question with a yes-or-no answer that controls a selection or a loop."
      },
      {
        "t": "variable",
        "d": "a named place that holds a value which can change while the algorithm runs",
        "x": "In this unit, variable means a named place that holds a value which can change while the algorithm runs."
      },
      {
        "t": "trace table",
        "d": "a table with one column per variable and one row per step, used to test an algorithm by hand",
        "x": "In this unit, trace table means a table with one column per variable and one row per step, used to test an algorithm by hand."
      },
      {
        "t": "decision symbol",
        "d": "the diamond in a flowchart that holds a condition with a yes arrow and a no arrow",
        "x": "In this unit, decision symbol means the diamond in a flowchart that holds a condition with a yes arrow and a no arrow."
      },
      {
        "t": "process symbol",
        "d": "the rectangle in a flowchart that holds a calculation or an action",
        "x": "In this unit, process symbol means the rectangle in a flowchart that holds a calculation or an action."
      },
      {
        "t": "terminal symbol",
        "d": "the oval in a flowchart that marks Start and Stop",
        "x": "In this unit, terminal symbol means the oval in a flowchart that marks Start and Stop."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “algorithm” in this unit?",
        "a": "a finite, ordered set of steps that solves a problem or completes a task."
      },
      {
        "q": "What is meant by “pseudocode” in this unit?",
        "a": "an algorithm written in numbered plain-English steps that are precise enough to follow exactly."
      },
      {
        "q": "What is meant by “flowchart” in this unit?",
        "a": "a diagram of an algorithm using standard shapes joined by arrows."
      },
      {
        "q": "What is meant by “sequence” in this unit?",
        "a": "steps carried out one after another in order."
      },
      {
        "q": "What is meant by “selection” in this unit?",
        "a": "a decision that chooses between paths depending on a yes-or-no condition."
      },
      {
        "q": "What is meant by “iteration” in this unit?",
        "a": "repeating a step or group of steps, also called a loop."
      },
      {
        "q": "What is meant by “condition” in this unit?",
        "a": "a question with a yes-or-no answer that controls a selection or a loop."
      },
      {
        "q": "What is meant by “variable” in this unit?",
        "a": "a named place that holds a value which can change while the algorithm runs."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A Grade 7 group's flowchart for 'give change to a customer' has a decision diamond with two unlabelled arrows and no Stop, and they insist it works because 'everyone knows what we mean'."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Label the arrows yes and no, add the terminal Stop, then hand the flowchart to a pair from another group to trace with a trace table; if they reach a different answer, the flowchart — not the reader — has the bug."
      },
      {
        "q": "State this unit idea in your own words: Every algorithm is built from sequence, selection and iteration.",
        "a": "Every algorithm is built from sequence, selection and iteration."
      },
      {
        "q": "State this unit idea in your own words: A trace table records the value of each variable after every step, so an algorithm can be tested without a computer.",
        "a": "A trace table records the value of each variable after every step, so an algorithm can be tested without a computer."
      },
      {
        "q": "What is the difference between pseudocode and a flowchart?",
        "a": "Pseudocode writes the algorithm in numbered plain-English steps; a flowchart draws the same algorithm with standard shapes and arrows."
      },
      {
        "q": "Why does an algorithm usually begin by setting a variable such as total to 0?",
        "a": "So the loop adds to a known starting value; without it the sum begins from whatever the variable held before."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Algorithms, Flowcharts and Trace Tables” Is"
      },
      {
        "k": "p",
        "t": "An **algorithm** is a finite, ordered set of steps that solves a problem. Written in numbered plain English it is **pseudocode**; drawn with boxes and arrows it is a **flowchart**. Every algorithm is built from three shapes: **sequence** (one step after another), **selection** (a yes/no decision) and **iteration** (a loop that repeats). A **trace table** records what each variable holds after every step, which is how a computer scientist tests an algorithm before any machine runs it. Students who defend a flowchart with unlabelled decision arrows and no Stop because 'everyone knows what we mean' have written for friends, not for a machine. Label the arrows yes and no, add the terminal Stop, then hand the flowchart to a pair from another group to trace with a trace table; if they reach a different answer, the flowchart — not the reader — has the bug. Every algorithm is built from sequence, selection and iteration. A trace table records the value of each variable after every step, so an algorithm can be tested without a computer."
      },
      {
        "k": "p",
        "t": "An algorithm is a finite, ordered set of steps that solves a problem. Pseudocode writes it in numbered plain English; a flowchart draws it with a terminal (oval), process (rectangle), decision (diamond), input/output (parallelogram) and arrows. Sequence, selection and iteration are the three control structures, and a trace table is how an algorithm is tested by hand."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: Every algorithm is built from sequence, selection and iteration. A trace table records the value of each variable after every step, so an algorithm can be tested without a computer."
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
        "t": "Each idea below is a working definition for Grade 7. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
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
            "algorithm",
            "a finite, ordered set of steps that solves a problem or completes a task",
            "In this unit, algorithm means a finite, ordered set of steps that solves a problem or completes a task."
          ],
          [
            "pseudocode",
            "an algorithm written in numbered plain-English steps that are precise enough to follow exactly",
            "In this unit, pseudocode means an algorithm written in numbered plain-English steps that are precise enough to follow exactly."
          ],
          [
            "flowchart",
            "a diagram of an algorithm using standard shapes joined by arrows",
            "In this unit, flowchart means a diagram of an algorithm using standard shapes joined by arrows."
          ],
          [
            "sequence",
            "steps carried out one after another in order",
            "In this unit, sequence means steps carried out one after another in order."
          ],
          [
            "selection",
            "a decision that chooses between paths depending on a yes-or-no condition",
            "In this unit, selection means a decision that chooses between paths depending on a yes-or-no condition."
          ],
          [
            "iteration",
            "repeating a step or group of steps, also called a loop",
            "In this unit, iteration means repeating a step or group of steps, also called a loop."
          ],
          [
            "condition",
            "a question with a yes-or-no answer that controls a selection or a loop",
            "In this unit, condition means a question with a yes-or-no answer that controls a selection or a loop."
          ],
          [
            "variable",
            "a named place that holds a value which can change while the algorithm runs",
            "In this unit, variable means a named place that holds a value which can change while the algorithm runs."
          ],
          [
            "trace table",
            "a table with one column per variable and one row per step, used to test an algorithm by hand",
            "In this unit, trace table means a table with one column per variable and one row per step, used to test an algorithm by hand."
          ],
          [
            "decision symbol",
            "the diamond in a flowchart that holds a condition with a yes arrow and a no arrow",
            "In this unit, decision symbol means the diamond in a flowchart that holds a condition with a yes arrow and a no arrow."
          ],
          [
            "process symbol",
            "the rectangle in a flowchart that holds a calculation or an action",
            "In this unit, process symbol means the rectangle in a flowchart that holds a calculation or an action."
          ],
          [
            "terminal symbol",
            "the oval in a flowchart that marks Start and Stop",
            "In this unit, terminal symbol means the oval in a flowchart that marks Start and Stop."
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
          "**Sequence** — one arrow in, one arrow out; steps in order.",
          "**Selection** — a diamond with two labelled arrows, yes and no.",
          "**Iteration** — an arrow that goes back to an earlier step until a condition changes.",
          "**Pseudocode** is words; a **flowchart** is shapes; both describe the same algorithm.",
          "**A trace table** tests the algorithm; it is not part of the algorithm."
        ]
      },
      {
        "k": "table",
        "head": [
          "Flowchart symbol",
          "Shape",
          "Used for"
        ],
        "rows": [
          [
            "Terminal",
            "Oval",
            "Start and Stop"
          ],
          [
            "Process",
            "Rectangle",
            "A calculation or an action, such as total ← total + price"
          ],
          [
            "Decision",
            "Diamond",
            "A yes/no condition with two labelled arrows"
          ],
          [
            "Input / output",
            "Parallelogram",
            "Reading a value in or displaying a result"
          ],
          [
            "Flow line",
            "Arrow",
            "The order in which symbols are followed"
          ],
          [
            "Connector",
            "Small circle",
            "Joining flow lines that continue elsewhere on the page"
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
          "Everyday task",
          "Control structure",
          "Why"
        ],
        "rows": [
          [
            "Boil water, add rice, cover, wait",
            "Sequence",
            "Steps follow in a fixed order."
          ],
          [
            "If it rains, hold assembly in the hall; else in the yard",
            "Selection",
            "One yes/no condition chooses the path."
          ],
          [
            "Keep adding stones until the bucket is full",
            "Iteration",
            "The step repeats until a condition changes."
          ],
          [
            "Read each name on the register and tick it",
            "Iteration",
            "The same action for every name."
          ],
          [
            "If the mark is 50 or more, write Pass; else write Fail",
            "Selection",
            "A decision with two outcomes."
          ],
          [
            "Count the cash, write the total, lock the box",
            "Sequence",
            "Three steps in order."
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
        "t": "A market woman totalling a day's sales, a clinic nurse triaging patients by temperature and a WAEC clerk checking each candidate's name are all running algorithms — sequence, selection and iteration — with no computer in sight. Writing those steps as pseudocode and testing them in a trace table is the whole of programming except the typing. A Grade 7 student who can trace 'total ← total + price' for five prices on paper has already done what the spreadsheet will do for her in Grade 8 and what a Python program will do in Grade 11."
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
        "t": "The class investigation is **“The market-total trace table”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Write the pseudocode on the board: 1 total ← 0; 2 for each price on the list: total ← total + price; 3 output total.",
          "Draw the same algorithm as a flowchart with Start, a process box, a decision 'more prices?' with a yes arrow looping back, and Stop.",
          "Pairs trace it with the list 300, 450, 250, 1,000 in a trace table with columns price and total, writing one row per step.",
          "The navigator hides one price and the driver retraces; then the pair introduces a bug (total ← price instead of total + price) and traces to see what goes wrong.",
          "If a computer is present, one pair enters the four prices in a spreadsheet and checks the trace against SUM; otherwise the completed trace table is the finished work."
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
        "t": "**Problem.** Trace this algorithm for the marks 62, 48, 75: 1 count ← 0; 2 for each mark: if mark ≥ 50 then count ← count + 1; 3 output count. Show the trace table and state the output."
      },
      {
        "k": "num",
        "items": [
          "Start: count = 0.",
          "mark = 62: 62 ≥ 50 is yes, so count = 1.",
          "mark = 48: 48 ≥ 50 is no, so count stays 1.",
          "mark = 75: 75 ≥ 50 is yes, so count = 2.",
          "No more marks: output count."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** The algorithm outputs 2 — two of the three marks are passes; the trace table shows count going 0, 1, 1, 2."
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
          "Leaving the yes and no arrows of a decision unlabelled, so the reader cannot tell which path is which.",
          "Forgetting to set the variable to a starting value (total ← 0) before a loop.",
          "Writing a loop with no condition that ever changes, so it never stops.",
          "Filling the trace table with the final answer only, instead of one row per step."
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
        "t": "Safety, Fairness and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN, a one-time code, a home address or a photograph of a classmate. If a message asks for a picture, money or a meeting, the student stops, keeps the message and tells a teacher. Copying another student's work and calling it your own is not collaboration; pair work shares the thinking, not the credit for work you did not do. Unplugged work is complete computing work."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, a scam, a request for a picture or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered, and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
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
        "t": "A Grade 7 group's flowchart for 'give change to a customer' has a decision diamond with two unlabelled arrows and no Stop, and they insist it works because 'everyone knows what we mean'."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Label the arrows yes and no, add the terminal Stop, then hand the flowchart to a pair from another group to trace with a trace table; if they reach a different answer, the flowchart — not the reader — has the bug."
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
        "t": "Label the arrows yes and no, add the terminal Stop, then hand the flowchart to a pair from another group to trace with a trace table; if they reach a different answer, the flowchart — not the reader — has the bug."
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
        "t": "The investigation **“The market-total trace table”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
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
            "Trace table",
            "The memory of the machine after every step",
            "The finished table with the output circled"
          ],
          [
            "Flowchart stencil",
            "The shapes of an algorithm",
            "The same algorithm as numbered pseudocode"
          ],
          [
            "Price cards",
            "Input data",
            "One row of the trace per card"
          ],
          [
            "Class chart",
            "Bugs the class found (unlabelled arrows, no start value)",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Three Shapes Are Enough"
      },
      {
        "k": "p",
        "t": "Every program ever written — the ones behind mobile money, the WAEC results printer, the phone's alarm — is built from sequence, selection and iteration. Learning to see the three shapes in a market task is learning to see the structure of all software."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Arrow ← Means 'Becomes'"
      },
      {
        "k": "p",
        "t": "total ← total + price does not say total equals total plus price, which would be nonsense. It says: work out total + price, then put the result into total. Read ← as 'becomes'. The right-hand side is worked first."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why Trace Before You Type"
      },
      {
        "k": "p",
        "t": "A machine runs a wrong algorithm perfectly and produces a wrong answer with confidence. A trace table catches the wrong step before the machine hides it. Professionals trace; Grade 7 traces; a class with no computer traces and loses nothing."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Starting Values Matter"
      },
      {
        "k": "p",
        "t": "A total that starts at whatever was left in the variable gives a wrong sum. A count that starts at 1 counts one too many. The first line of most algorithms sets the starting values; a missing first line is a common bug in a Liberian classroom and in a bank."
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
        "t": "A fair period test on “Algorithms, Flowcharts and Trace Tables” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit and use each in a sentence.",
          "Write or trace a four-step algorithm, formula or procedure connected with “Algorithms, Flowcharts and Trace Tables”, showing every line of working.",
          "Sort four examples using “Selection or iteration / Sequence” and give one reason.",
          "Debug a broken set of steps without blaming the person who wrote them, and say what the bug was."
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
        "t": "A 4-week unit on “Algorithms, Flowcharts and Trace Tables” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
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
            "What “Algorithms, Flowcharts and Trace Tables” is, and where it already appears around us.",
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
        "t": "This is original supplementary teaching material for Liberian junior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, algorithm means a finite, ordered set of steps that solves a problem or completes a task.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, pseudocode means a diagram of an algorithm using standard shapes joined by arrows.",
        "a": "False",
        "why": "pseudocode means an algorithm written in numbered plain-English steps that are precise enough to follow exactly; the statement describes flowchart."
      },
      {
        "s": "In this unit, sequence means steps carried out one after another in order.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Unplugged work with paper, trace tables and cards is complete computing work; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the instructions, not in the person."
      },
      {
        "s": "Students should share passwords or mobile-money PINs so a partner can finish the work.",
        "a": "False",
        "why": "A password or PIN is secret. Never share a password, PIN, one-time code or personal photograph."
      },
      {
        "s": "Every algorithm is built from sequence, selection and iteration.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "The arrows leaving a decision diamond must be labelled yes and no.",
        "a": "True",
        "why": "Without labels the reader cannot tell which path the condition chooses."
      },
      {
        "s": "A trace table is part of the algorithm itself.",
        "a": "False",
        "why": "A trace table is a test of the algorithm, recording variable values step by step."
      }
    ],
    "classify": {
      "title": "Selection or iteration / Sequence",
      "groups": [
        {
          "name": "Selection or iteration",
          "items": [
            "if the mark is 50 or more, write Pass",
            "repeat until the bucket is full",
            "for each name on the register",
            "is it raining? yes or no",
            "while there are more prices",
            "if the PIN is wrong, refuse"
          ]
        },
        {
          "name": "Sequence",
          "items": [
            "boil water, then add rice",
            "count the cash, then write the total",
            "start, read a price, add it, stop",
            "open the file, then type the heading",
            "greet the customer, then take the order",
            "set total to 0, then read the list"
          ]
        }
      ]
    },
    "diagram": {
      "title": "A flowchart with a loop and a decision",
      "caption": "Label each part and state what it does in “Algorithms, Flowcharts and Trace Tables”.",
      "parts": [
        {
          "p": "Terminal (oval)",
          "f": "marks Start and Stop"
        },
        {
          "p": "Process (rectangle)",
          "f": "a calculation or action such as total ← total + price"
        },
        {
          "p": "Decision (diamond)",
          "f": "a yes/no condition with two labelled arrows"
        },
        {
          "p": "Input / output (parallelogram)",
          "f": "read a price in; display the total"
        },
        {
          "p": "Flow line (arrow)",
          "f": "the order the symbols are followed, including the loop back"
        }
      ]
    },
    "experiment": {
      "title": "The market-total trace table",
      "aim": "To practise the ideas of “Algorithms, Flowcharts and Trace Tables” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Paper cards, arrows and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class computing chart",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “The market-total trace table” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A Grade 7 group's flowchart for 'give change to a customer' has a decision diamond with two unlabelled arrows and no Stop, and they insist it works because 'everyone knows what we mean'. What should happen next?",
        "a": "Label the arrows yes and no, add the terminal Stop, then hand the flowchart to a pair from another group to trace with a trace table; if they reach a different answer, the flowchart — not the reader — has the bug."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Algorithms, Flowcharts and Trace Tables”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's trace gives the wrong answer. What do you say, and why?",
        "a": "Remind the class that a bug is in the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian daily life (a market, a clinic, a radio station, a mobile-money kiosk, a school office).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as mobile money, a clinic record, a radio bulletin, a school register or a market ledger."
      },
      {
        "q": "Write pseudocode for a clinic that reads each patient's temperature and counts how many have a fever (37.5 °C or more).",
        "a": "1 fever ← 0; 2 for each temperature: if temperature ≥ 37.5 then fever ← fever + 1; 3 output fever."
      },
      {
        "q": "Draw (or describe) a flowchart for a mobile-money agent: read the PIN; if it is correct, pay out; else display 'wrong PIN'; stop.",
        "a": "Start → input PIN → decision 'PIN correct?' → yes: process 'pay out'; no: output 'wrong PIN' → both paths to Stop, arrows labelled."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “The market-total trace table” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, paper grids and a paper keyboard",
      "A class computing chart",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's phone, kept dry and in sight"
    ],
    "aids": [
      "Word cards — algorithm, pseudocode, flowchart",
      "A flowchart or trace table of “The market-total trace table”",
      "Flowchart symbol stencils and blank trace-table sheets",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing word and what it means.",
      "Practise this week's paper method (a trace, a conversion, a formula or an algorithm) with a sibling or a friend — no device needed.",
      "Find one example of this unit's idea in your community (a market, a clinic, a radio station, a mobile-money kiosk or an office) and write three sentences about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written algorithm, trace table or worked conversion",
      "Pair-debug observed against the class chart",
      "A short written response to the Liberian scenario"
    ],
    "worked": [
      {
        "q": "Trace: total ← 0; for prices 300, 450, 250: total ← total + price. Output?",
        "steps": [
          "0 → 300 → 750 → 1,000."
        ],
        "a": "1,000"
      },
      {
        "q": "Which flowchart shape holds 'is mark ≥ 50?'",
        "steps": [
          "A yes/no condition."
        ],
        "a": "A diamond (decision)"
      },
      {
        "q": "Name the three control structures.",
        "steps": [
          "In order, choice, repeat."
        ],
        "a": "Sequence, selection, iteration"
      },
      {
        "q": "x ← 5; x ← x + 3; x ← x × 2. Final x?",
        "steps": [
          "5 → 8 → 16."
        ],
        "a": "16"
      },
      {
        "q": "count ← 0; marks 40, 55, 70, 30; if mark ≥ 50 then count ← count + 1. Final count?",
        "steps": [
          "55 yes, 70 yes; 40 and 30 no."
        ],
        "a": "2"
      },
      {
        "q": "A loop says 'repeat until bucket is full' but nothing is ever poured. What kind of bug is this?",
        "steps": [
          "The condition never changes."
        ],
        "a": "An infinite loop — the condition can never become true"
      },
      {
        "q": "Read total ← total + price aloud correctly.",
        "steps": [
          "← means becomes; right side first."
        ],
        "a": "'total becomes total plus price'"
      },
      {
        "q": "A trace table for 4 prices and 2 variables has how many columns, and roughly how many rows?",
        "steps": [
          "One column per variable; one row per step."
        ],
        "a": "2 columns (price, total); about 5 rows (start plus one per price)"
      }
    ]
  },
  {
    "grade": 8,
    "period": "I",
    "sem": "One",
    "icon": "🧠",
    "csPlan": true,
    "title": "Inside the Computer — CPU, Memory and Storage",
    "subtitle": "Computer Science · Original junior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Unplugged-first: a class with no computer lab can still complete the unit on paper, and a class with one shared device can extend it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary accurately in speech and writing.",
      "Write, trace and debug an algorithm, a formula or a set of steps connected with the unit — on paper first, on a device when one is available.",
      "Make and justify a safe, honest and lawful choice about devices, data and people online."
    ],
    "objectives": [
      "Explain the key terms in “Inside the Computer — CPU, Memory and Storage” and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm or set of steps connected with this unit, on paper.",
      "Sort examples into the unit's two groups and give a reason for each choice.",
      "Trace a worked example step by step, showing every line of working, and state the answer in a full sentence.",
      "Apply the unit's ideas to a fictional Liberian school, market or office scenario.",
      "Debug a broken set of steps, a formula or a short program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared record of bugs found.",
      "Name one Liberian example of this unit's idea (mobile money, a radio station, a clinic record, a ministry office, a school register or a market stall)."
    ],
    "safeguard": "A junior high computing lesson uses charts, paper models, trace tables and, when a device is present, a shared school machine or the teacher's own phone. Students never share passwords or PINs, never photograph one another without consent, and never post a classmate's image or details. A mobile-money PIN is a secret even from a friend. If a student reports online bullying, a request for a picture, a scam message or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "The central processing unit (CPU) fetches, decodes and executes instructions using its control unit and arithmetic logic unit. RAM is fast, temporary working memory; ROM holds permanent start-up instructions; secondary storage keeps files when the power is off. Storage is measured in bytes: 1 KB ≈ 1,000 bytes, 1 MB ≈ 1,000 KB, 1 GB ≈ 1,000 MB, 1 TB ≈ 1,000 GB.",
    "focus": [
      "Unplugged demonstration and paper trace",
      "Pair work and debugging",
      "Liberian scenario",
      "Computing fair check"
    ],
    "terms": [
      {
        "t": "central processing unit",
        "d": "the chip that carries out instructions; the 'brain' of the computer, also called the CPU or processor",
        "x": "In this unit, central processing unit means the chip that carries out instructions; the 'brain' of the computer, also called the CPU or processor."
      },
      {
        "t": "control unit",
        "d": "the part of the CPU that fetches each instruction, decodes it and directs the other parts",
        "x": "In this unit, control unit means the part of the CPU that fetches each instruction, decodes it and directs the other parts."
      },
      {
        "t": "arithmetic logic unit",
        "d": "the part of the CPU that does arithmetic (add, subtract) and comparisons (greater than, equal to)",
        "x": "In this unit, arithmetic logic unit means the part of the CPU that does arithmetic (add, subtract) and comparisons (greater than, equal to)."
      },
      {
        "t": "fetch–decode–execute cycle",
        "d": "the repeated steps by which the CPU gets an instruction from memory, works out what it means and carries it out",
        "x": "In this unit, fetch–decode–execute cycle means the repeated steps by which the CPU gets an instruction from memory, works out what it means and carries it out."
      },
      {
        "t": "RAM",
        "d": "random-access memory: fast working memory that holds running programs and data, and is emptied when the power goes off",
        "x": "In this unit, RAM means random-access memory: fast working memory that holds running programs and data, and is emptied when the power goes off."
      },
      {
        "t": "ROM",
        "d": "read-only memory: permanent memory holding the start-up instructions the computer needs to boot",
        "x": "In this unit, ROM means read-only memory: permanent memory holding the start-up instructions the computer needs to boot."
      },
      {
        "t": "secondary storage",
        "d": "devices such as hard disks, solid-state drives and flash drives that keep data when the power is off",
        "x": "In this unit, secondary storage means devices such as hard disks, solid-state drives and flash drives that keep data when the power is off."
      },
      {
        "t": "hard disk drive",
        "d": "a storage device that records data magnetically on spinning platters",
        "x": "In this unit, hard disk drive means a storage device that records data magnetically on spinning platters."
      },
      {
        "t": "solid-state drive",
        "d": "a storage device with no moving parts that keeps data in flash memory chips",
        "x": "In this unit, solid-state drive means a storage device with no moving parts that keeps data in flash memory chips."
      },
      {
        "t": "byte",
        "d": "the unit of storage that holds one character; eight bits",
        "x": "In this unit, byte means the unit of storage that holds one character; eight bits."
      },
      {
        "t": "gigabyte",
        "d": "about one thousand million bytes (1,000 MB); the usual unit for a phone's storage",
        "x": "In this unit, gigabyte means about one thousand million bytes (1,000 MB); the usual unit for a phone's storage."
      },
      {
        "t": "clock speed",
        "d": "the number of cycles the CPU can run each second, measured in gigahertz (GHz)",
        "x": "In this unit, clock speed means the number of cycles the CPU can run each second, measured in gigahertz (GHz)."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “central processing unit” in this unit?",
        "a": "the chip that carries out instructions; the 'brain' of the computer, also called the CPU or processor."
      },
      {
        "q": "What is meant by “control unit” in this unit?",
        "a": "the part of the CPU that fetches each instruction, decodes it and directs the other parts."
      },
      {
        "q": "What is meant by “arithmetic logic unit” in this unit?",
        "a": "the part of the CPU that does arithmetic (add, subtract) and comparisons (greater than, equal to)."
      },
      {
        "q": "What is meant by “fetch–decode–execute cycle” in this unit?",
        "a": "the repeated steps by which the CPU gets an instruction from memory, works out what it means and carries it out."
      },
      {
        "q": "What is meant by “RAM” in this unit?",
        "a": "random-access memory: fast working memory that holds running programs and data, and is emptied when the power goes off."
      },
      {
        "q": "What is meant by “ROM” in this unit?",
        "a": "read-only memory: permanent memory holding the start-up instructions the computer needs to boot."
      },
      {
        "q": "What is meant by “secondary storage” in this unit?",
        "a": "devices such as hard disks, solid-state drives and flash drives that keep data when the power is off."
      },
      {
        "q": "What is meant by “hard disk drive” in this unit?",
        "a": "a storage device that records data magnetically on spinning platters."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A school is offered two used laptops for the same price — one with 8 GB of RAM and a 128 GB solid-state drive, the other with 4 GB of RAM and a 1 TB hard disk — and the committee wants 'the one with the bigger number'."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Name each figure — RAM is working memory, the drive is storage — then ask what the machine is for: an office that runs several programs and keeps files on a flash drive is better served by 8 GB of RAM and a fast SSD; a machine for archiving thousands of photographs needs the 1 TB disk."
      },
      {
        "q": "State this unit idea in your own words: The CPU repeats one cycle — fetch, decode, execute — millions of times a second.",
        "a": "The CPU repeats one cycle — fetch, decode, execute — millions of times a second."
      },
      {
        "q": "State this unit idea in your own words: RAM is fast and temporary; secondary storage is slower and keeps files when the power is off.",
        "a": "RAM is fast and temporary; secondary storage is slower and keeps files when the power is off."
      },
      {
        "q": "Give two differences between RAM and secondary storage.",
        "a": "RAM is faster and temporary (emptied without power); secondary storage is slower, larger and keeps data permanently."
      },
      {
        "q": "About how many megabytes are in a gigabyte, and how many bytes in a kilobyte?",
        "a": "About 1,000 MB in a GB and about 1,000 bytes in a KB (computers often count 1,024)."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Inside the Computer — CPU, Memory and Storage” Is"
      },
      {
        "k": "p",
        "t": "Inside the system unit the **central processing unit** does the work: its **control unit** fetches each instruction and its **arithmetic logic unit** does the sums and comparisons. Instructions and data wait in **RAM**, the fast memory that forgets everything when the power goes; **ROM** holds the start-up instructions that never change; and **secondary storage** — the hard disk, the SSD, the flash drive — keeps files when the machine is off. Capacity is measured in **bytes**: a **kilobyte**, a **megabyte**, a **gigabyte**. Committees who choose a laptop by 'the bigger number' without asking whether the number is RAM, storage or clock speed have not separated the parts. Name each figure — RAM is working memory, the drive is storage — then ask what the machine is for: an office that runs several programs and keeps files on a flash drive is better served by 8 GB of RAM and a fast SSD; a machine for archiving thousands of photographs needs the 1 TB disk. The CPU repeats one cycle — fetch, decode, execute — millions of times a second. RAM is fast and temporary; secondary storage is slower and keeps files when the power is off."
      },
      {
        "k": "p",
        "t": "The central processing unit (CPU) fetches, decodes and executes instructions using its control unit and arithmetic logic unit. RAM is fast, temporary working memory; ROM holds permanent start-up instructions; secondary storage keeps files when the power is off. Storage is measured in bytes: 1 KB ≈ 1,000 bytes, 1 MB ≈ 1,000 KB, 1 GB ≈ 1,000 MB, 1 TB ≈ 1,000 GB."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: The CPU repeats one cycle — fetch, decode, execute — millions of times a second. RAM is fast and temporary; secondary storage is slower and keeps files when the power is off."
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
        "t": "Each idea below is a working definition for Grade 8. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
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
            "central processing unit",
            "the chip that carries out instructions; the 'brain' of the computer, also called the CPU or processor",
            "In this unit, central processing unit means the chip that carries out instructions; the 'brain' of the computer, also called the CPU or processor."
          ],
          [
            "control unit",
            "the part of the CPU that fetches each instruction, decodes it and directs the other parts",
            "In this unit, control unit means the part of the CPU that fetches each instruction, decodes it and directs the other parts."
          ],
          [
            "arithmetic logic unit",
            "the part of the CPU that does arithmetic (add, subtract) and comparisons (greater than, equal to)",
            "In this unit, arithmetic logic unit means the part of the CPU that does arithmetic (add, subtract) and comparisons (greater than, equal to)."
          ],
          [
            "fetch–decode–execute cycle",
            "the repeated steps by which the CPU gets an instruction from memory, works out what it means and carries it out",
            "In this unit, fetch–decode–execute cycle means the repeated steps by which the CPU gets an instruction from memory, works out what it means and carries it out."
          ],
          [
            "RAM",
            "random-access memory: fast working memory that holds running programs and data, and is emptied when the power goes off",
            "In this unit, RAM means random-access memory: fast working memory that holds running programs and data, and is emptied when the power goes off."
          ],
          [
            "ROM",
            "read-only memory: permanent memory holding the start-up instructions the computer needs to boot",
            "In this unit, ROM means read-only memory: permanent memory holding the start-up instructions the computer needs to boot."
          ],
          [
            "secondary storage",
            "devices such as hard disks, solid-state drives and flash drives that keep data when the power is off",
            "In this unit, secondary storage means devices such as hard disks, solid-state drives and flash drives that keep data when the power is off."
          ],
          [
            "hard disk drive",
            "a storage device that records data magnetically on spinning platters",
            "In this unit, hard disk drive means a storage device that records data magnetically on spinning platters."
          ],
          [
            "solid-state drive",
            "a storage device with no moving parts that keeps data in flash memory chips",
            "In this unit, solid-state drive means a storage device with no moving parts that keeps data in flash memory chips."
          ],
          [
            "byte",
            "the unit of storage that holds one character; eight bits",
            "In this unit, byte means the unit of storage that holds one character; eight bits."
          ],
          [
            "gigabyte",
            "about one thousand million bytes (1,000 MB); the usual unit for a phone's storage",
            "In this unit, gigabyte means about one thousand million bytes (1,000 MB); the usual unit for a phone's storage."
          ],
          [
            "clock speed",
            "the number of cycles the CPU can run each second, measured in gigahertz (GHz)",
            "In this unit, clock speed means the number of cycles the CPU can run each second, measured in gigahertz (GHz)."
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
          "**RAM** — fast, temporary, working memory; empties when the power goes.",
          "**ROM** — small, permanent, start-up instructions; cannot be changed by the user.",
          "**Secondary storage** — large, slower, keeps files with the power off.",
          "**Control unit** directs; **arithmetic logic unit** calculates and compares.",
          "**Capacity** is bytes; **speed** is gigahertz — do not mix the two."
        ]
      },
      {
        "k": "table",
        "head": [
          "Memory or storage",
          "Speed",
          "Keeps data without power?"
        ],
        "rows": [
          [
            "Registers inside the CPU",
            "Fastest",
            "No"
          ],
          [
            "RAM",
            "Very fast",
            "No"
          ],
          [
            "ROM",
            "Fast",
            "Yes (permanent)"
          ],
          [
            "Solid-state drive",
            "Fast",
            "Yes"
          ],
          [
            "Hard disk drive",
            "Slower (moving parts)",
            "Yes"
          ],
          [
            "Flash drive / memory card",
            "Moderate",
            "Yes"
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
          "Unit",
          "About how many bytes",
          "Holds roughly"
        ],
        "rows": [
          [
            "1 byte",
            "1",
            "One letter or digit"
          ],
          [
            "1 kilobyte (KB)",
            "1,000",
            "Half a page of plain text"
          ],
          [
            "1 megabyte (MB)",
            "1,000,000",
            "A short book, or one photo from a basic phone"
          ],
          [
            "1 gigabyte (GB)",
            "1,000,000,000",
            "About 250 songs or 300 phone photos"
          ],
          [
            "1 terabyte (TB)",
            "1,000,000,000,000",
            "A school's entire records for years"
          ],
          [
            "Note",
            "Computers also count in 1,024s",
            "So a '32 GB' drive shows slightly less"
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
        "t": "When a Liberian shopper asks 'how many gig is the phone?' she is asking about secondary storage; when the phone 'hangs' with many apps open, RAM is full; when the shop sells a 'fast' phone, it means clock speed and cores. Knowing which is which stops a family paying for the wrong thing. A school office deciding between a used laptop with 4 GB of RAM and a 500 GB disk and another with 8 GB and 128 GB can now ask the right question: what will it be used for? Files need storage; many open programs need RAM."
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
        "t": "The class investigation is **“The fetch–decode–execute relay”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Set out a 'memory' of eight numbered cards on a desk, each holding one instruction (for example 'LOAD 5', 'ADD 3', 'STORE result') or a data value.",
          "One student is the control unit: she fetches the card at the current address and reads it aloud (fetch), says what it means (decode) and tells the ALU student what to do (execute).",
          "The ALU student works the arithmetic on a slate; a 'register' student holds the running value on a card.",
          "The class runs the eight cards, then switches off the 'power' — the RAM cards are turned face down — and asks what survived (only the card written to the 'disk' envelope).",
          "If a computer is present, one pair opens the task manager to watch RAM and CPU use rise as programs open; otherwise the relay and its written trace are the finished work."
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
        "t": "**Problem.** A phone advertised as '64 GB, 4 GB RAM, 2.0 GHz' is bought by a market trader who then stores 2,000 photos of about 3 MB each and complains that the phone 'hangs' when she opens five apps. Work out how much storage the photos use, say which part of the phone is full when it hangs, and explain what 2.0 GHz describes."
      },
      {
        "k": "num",
        "items": [
          "Storage used by photos: 2,000 × 3 MB = 6,000 MB = 6 GB of the 64 GB — plenty of storage remains.",
          "Hanging with five apps open is RAM, the 4 GB working memory, being full — not storage.",
          "2.0 GHz is the clock speed: about two thousand million fetch–decode–execute cycles per second.",
          "Advice: close apps she is not using to free RAM; storage is not the problem."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** The photos use about 6 GB of storage; the hanging is RAM (4 GB) being full, not the 64 GB storage; 2.0 GHz is the CPU's clock speed."
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
          "Calling storage 'memory' and RAM 'storage', so the wrong part is blamed or bought.",
          "Thinking a saved file lives in RAM; RAM empties when the power goes.",
          "Confusing clock speed (GHz) with capacity (GB).",
          "Believing the CPU 'knows' the program; it only fetches one instruction at a time from memory."
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
        "t": "Safety, Fairness and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN, a one-time code, a home address or a photograph of a classmate. If a message asks for a picture, money or a meeting, the student stops, keeps the message and tells a teacher. Copying another student's work and calling it your own is not collaboration; pair work shares the thinking, not the credit for work you did not do. Unplugged work is complete computing work."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, a scam, a request for a picture or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered, and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
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
        "t": "A school is offered two used laptops for the same price — one with 8 GB of RAM and a 128 GB solid-state drive, the other with 4 GB of RAM and a 1 TB hard disk — and the committee wants 'the one with the bigger number'."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Name each figure — RAM is working memory, the drive is storage — then ask what the machine is for: an office that runs several programs and keeps files on a flash drive is better served by 8 GB of RAM and a fast SSD; a machine for archiving thousands of photographs needs the 1 TB disk."
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
        "t": "Name each figure — RAM is working memory, the drive is storage — then ask what the machine is for: an office that runs several programs and keeps files on a flash drive is better served by 8 GB of RAM and a fast SSD; a machine for archiving thousands of photographs needs the 1 TB disk."
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
        "t": "The investigation **“The fetch–decode–execute relay”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
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
            "Squared paper or trace table",
            "The state of the machine after every step",
            "The finished trace with the final answer"
          ],
          [
            "Word card",
            "A key term",
            "The term in a sentence"
          ],
          [
            "Paper keyboard or printed screen",
            "The device we may not have",
            "The same action described in words"
          ],
          [
            "Class chart",
            "Bugs and precise steps the class agreed",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Cycle That Never Stops"
      },
      {
        "k": "p",
        "t": "From the moment the computer boots until it shuts down, the CPU fetches an instruction from RAM, decodes it, executes it, and fetches the next. A 2 GHz processor does this about two thousand million times a second. Everything the machine appears to 'do at once' is this one cycle done very fast."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why Saving Matters, Physically"
      },
      {
        "k": "p",
        "t": "Your typing lives in RAM. RAM is made of tiny charges that vanish when the power stops. Saving copies those bytes to secondary storage, which keeps them without power. That is the whole physical reason behind Ctrl + S."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Hard Disk or Solid State?"
      },
      {
        "k": "p",
        "t": "A hard disk stores data as magnetism on spinning platters read by a moving arm; it is cheap per gigabyte but slow and easily damaged by a knock. A solid-state drive stores data in flash chips with no moving parts; it is faster, quieter and tougher but costs more per gigabyte. Laptops that travel Liberian roads last longer with SSDs."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Reading a Specification Sheet"
      },
      {
        "k": "p",
        "t": "A phone shop card might say 'Octa-core 2.0 GHz · 4 GB RAM · 64 GB · 5,000 mAh'. Cores and GHz describe the CPU, 4 GB is RAM, 64 GB is storage and mAh is the battery. A Grade 8 student should be able to translate each figure for a parent."
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
        "t": "A fair period test on “Inside the Computer — CPU, Memory and Storage” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit and use each in a sentence.",
          "Write or trace a four-step algorithm, formula or procedure connected with “Inside the Computer — CPU, Memory and Storage”, showing every line of working.",
          "Sort four examples using “Memory (RAM or ROM) / Secondary storage” and give one reason.",
          "Debug a broken set of steps without blaming the person who wrote them, and say what the bug was."
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
        "t": "A 4-week unit on “Inside the Computer — CPU, Memory and Storage” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
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
            "What “Inside the Computer — CPU, Memory and Storage” is, and where it already appears around us.",
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
        "t": "This is original supplementary teaching material for Liberian junior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, central processing unit means the chip that carries out instructions; the 'brain' of the computer, also called the CPU or processor.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, control unit means the part of the CPU that does arithmetic (add, subtract) and comparisons (greater than, equal to).",
        "a": "False",
        "why": "control unit means the part of the CPU that fetches each instruction, decodes it and directs the other parts; the statement describes arithmetic logic unit."
      },
      {
        "s": "In this unit, fetch–decode–execute cycle means the repeated steps by which the CPU gets an instruction from memory, works out what it means and carries it out.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Unplugged work with paper, trace tables and cards is complete computing work; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the instructions, not in the person."
      },
      {
        "s": "Students should share passwords or mobile-money PINs so a partner can finish the work.",
        "a": "False",
        "why": "A password or PIN is secret. Never share a password, PIN, one-time code or personal photograph."
      },
      {
        "s": "The CPU repeats one cycle — fetch, decode, execute — millions of times a second.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "A file saved on the hard disk is lost when the computer is switched off.",
        "a": "False",
        "why": "Secondary storage keeps data without power; it is RAM that empties."
      },
      {
        "s": "The control unit fetches and decodes instructions while the arithmetic logic unit does the calculations.",
        "a": "True",
        "why": "Those are the two main parts of the CPU and their jobs."
      }
    ],
    "classify": {
      "title": "Memory (RAM or ROM) / Secondary storage",
      "groups": [
        {
          "name": "Memory (RAM or ROM)",
          "items": [
            "RAM",
            "ROM",
            "working memory that empties when power goes",
            "start-up instructions",
            "where an open program lives",
            "4 GB in the phone advert"
          ]
        },
        {
          "name": "Secondary storage",
          "items": [
            "hard disk drive",
            "solid-state drive",
            "flash drive",
            "memory card",
            "64 GB in the phone advert",
            "keeps files when the power is off"
          ]
        }
      ]
    },
    "diagram": {
      "title": "The CPU, memory and storage",
      "caption": "Label each part and state what it does in “Inside the Computer — CPU, Memory and Storage”.",
      "parts": [
        {
          "p": "Control unit",
          "f": "fetches and decodes each instruction and directs the other parts"
        },
        {
          "p": "Arithmetic logic unit",
          "f": "does the arithmetic and the comparisons"
        },
        {
          "p": "RAM",
          "f": "fast working memory for running programs and data; emptied when the power goes"
        },
        {
          "p": "ROM",
          "f": "permanent memory holding the start-up instructions"
        },
        {
          "p": "Secondary storage",
          "f": "hard disk, SSD or flash drive that keeps files without power"
        }
      ]
    },
    "experiment": {
      "title": "The fetch–decode–execute relay",
      "aim": "To practise the ideas of “Inside the Computer — CPU, Memory and Storage” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Paper cards, arrows and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class computing chart",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “The fetch–decode–execute relay” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A school is offered two used laptops for the same price — one with 8 GB of RAM and a 128 GB solid-state drive, the other with 4 GB of RAM and a 1 TB hard disk — and the committee wants 'the one with the bigger number'. What should happen next?",
        "a": "Name each figure — RAM is working memory, the drive is storage — then ask what the machine is for: an office that runs several programs and keeps files on a flash drive is better served by 8 GB of RAM and a fast SSD; a machine for archiving thousands of photographs needs the 1 TB disk."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Inside the Computer — CPU, Memory and Storage”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's trace gives the wrong answer. What do you say, and why?",
        "a": "Remind the class that a bug is in the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian daily life (a market, a clinic, a radio station, a mobile-money kiosk, a school office).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as mobile money, a clinic record, a radio bulletin, a school register or a market ledger."
      },
      {
        "q": "A clinic's laptop is slow when the records program and the browser are open together, but has 400 GB of free disk space. What should the clinic buy or change first, and why?",
        "a": "More RAM (or close programs): the slowness comes from working memory being full, not from storage, which has plenty of space."
      },
      {
        "q": "A 32 GB memory card is to hold 4 MB photos. About how many photos fit? Show the working.",
        "a": "32 GB ≈ 32,000 MB; 32,000 ÷ 4 = about 8,000 photos (a little fewer in practice)."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “The fetch–decode–execute relay” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, paper grids and a paper keyboard",
      "A class computing chart",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's phone, kept dry and in sight"
    ],
    "aids": [
      "Word cards — central processing unit, control unit, arithmetic logic unit",
      "A flowchart or trace table of “The fetch–decode–execute relay”",
      "Instruction cards, a 'memory' desk and a 'disk' envelope for the relay",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing word and what it means.",
      "Practise this week's paper method (a trace, a conversion, a formula or an algorithm) with a sibling or a friend — no device needed.",
      "Find one example of this unit's idea in your community (a market, a clinic, a radio station, a mobile-money kiosk or an office) and write three sentences about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written algorithm, trace table or worked conversion",
      "Pair-debug observed against the class chart",
      "A short written response to the Liberian scenario"
    ],
    "worked": [
      {
        "q": "Name the three steps of the CPU cycle in order.",
        "steps": [
          "Get it, understand it, do it."
        ],
        "a": "Fetch, decode, execute"
      },
      {
        "q": "Which part of the CPU adds 3 to 5?",
        "steps": [
          "Arithmetic and comparisons."
        ],
        "a": "The arithmetic logic unit"
      },
      {
        "q": "The power goes off. What happens to data in RAM and to a file on the hard disk?",
        "steps": [
          "RAM empties; disk keeps."
        ],
        "a": "RAM data is lost; the disk file is kept"
      },
      {
        "q": "2,000 photos of 3 MB each use how many GB?",
        "steps": [
          "2,000 × 3 = 6,000 MB.",
          "6,000 MB ÷ 1,000 = 6 GB."
        ],
        "a": "About 6 GB"
      },
      {
        "q": "A 64 GB phone has 58 GB used. How many 500 MB videos still fit?",
        "steps": [
          "64 − 58 = 6 GB = 6,000 MB.",
          "6,000 ÷ 500 = 12."
        ],
        "a": "About 12 videos"
      },
      {
        "q": "Which figure describes speed: 4 GB, 64 GB or 2.0 GHz?",
        "steps": [
          "Hertz is cycles per second."
        ],
        "a": "2.0 GHz"
      },
      {
        "q": "About how many characters fit in 1 KB?",
        "steps": [
          "One byte per character."
        ],
        "a": "About 1,000"
      },
      {
        "q": "Which memory holds the instructions the computer uses to boot?",
        "steps": [
          "Permanent, read-only."
        ],
        "a": "ROM"
      }
    ]
  },
  {
    "grade": 8,
    "period": "II",
    "sem": "One",
    "icon": "📊",
    "csPlan": true,
    "title": "Spreadsheets — Cells, Formulas and Functions",
    "subtitle": "Computer Science · Original junior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Unplugged-first: a class with no computer lab can still complete the unit on paper, and a class with one shared device can extend it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary accurately in speech and writing.",
      "Write, trace and debug an algorithm, a formula or a set of steps connected with the unit — on paper first, on a device when one is available.",
      "Make and justify a safe, honest and lawful choice about devices, data and people online."
    ],
    "objectives": [
      "Explain the key terms in “Spreadsheets — Cells, Formulas and Functions” and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm or set of steps connected with this unit, on paper.",
      "Sort examples into the unit's two groups and give a reason for each choice.",
      "Trace a worked example step by step, showing every line of working, and state the answer in a full sentence.",
      "Apply the unit's ideas to a fictional Liberian school, market or office scenario.",
      "Debug a broken set of steps, a formula or a short program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared record of bugs found.",
      "Name one Liberian example of this unit's idea (mobile money, a radio station, a clinic record, a ministry office, a school register or a market stall)."
    ],
    "safeguard": "A junior high computing lesson uses charts, paper models, trace tables and, when a device is present, a shared school machine or the teacher's own phone. Students never share passwords or PINs, never photograph one another without consent, and never post a classmate's image or details. A mobile-money PIN is a secret even from a friend. If a student reports online bullying, a request for a picture, a scam message or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "A spreadsheet is a grid of cells addressed by column letter and row number. A formula begins with = and calculates from other cells (=B2*C2); functions such as SUM, AVERAGE, MAX, MIN and COUNT work on a range (=SUM(D2:D6)). When a value changes, every formula that uses it recalculates automatically.",
    "focus": [
      "Unplugged demonstration and paper trace",
      "Pair work and debugging",
      "Liberian scenario",
      "Computing fair check"
    ],
    "terms": [
      {
        "t": "spreadsheet",
        "d": "a program that stores numbers, text and formulas in a grid of cells and recalculates them automatically",
        "x": "In this unit, spreadsheet means a program that stores numbers, text and formulas in a grid of cells and recalculates them automatically."
      },
      {
        "t": "cell",
        "d": "one box in the grid, named by its column letter and row number, such as B3",
        "x": "In this unit, cell means one box in the grid, named by its column letter and row number, such as B3."
      },
      {
        "t": "column",
        "d": "a vertical line of cells named by a letter: A, B, C …",
        "x": "In this unit, column means a vertical line of cells named by a letter: A, B, C …."
      },
      {
        "t": "row",
        "d": "a horizontal line of cells named by a number: 1, 2, 3 …",
        "x": "In this unit, row means a horizontal line of cells named by a number: 1, 2, 3 …."
      },
      {
        "t": "formula",
        "d": "an instruction beginning with = that calculates a value from other cells, such as =B2*C2",
        "x": "In this unit, formula means an instruction beginning with = that calculates a value from other cells, such as =B2*C2."
      },
      {
        "t": "function",
        "d": "a ready-made formula with a name, such as SUM, AVERAGE, MAX, MIN or COUNT",
        "x": "In this unit, function means a ready-made formula with a name, such as SUM, AVERAGE, MAX, MIN or COUNT."
      },
      {
        "t": "range",
        "d": "a block of cells named by its first and last cell, such as B2:B6",
        "x": "In this unit, range means a block of cells named by its first and last cell, such as B2:B6."
      },
      {
        "t": "SUM",
        "d": "the function that adds every number in a range",
        "x": "In this unit, SUM means the function that adds every number in a range."
      },
      {
        "t": "AVERAGE",
        "d": "the function that adds the numbers in a range and divides by how many there are",
        "x": "In this unit, AVERAGE means the function that adds the numbers in a range and divides by how many there are."
      },
      {
        "t": "recalculate",
        "d": "to work out every formula again after a cell changes",
        "x": "In this unit, recalculate means to work out every formula again after a cell changes."
      },
      {
        "t": "fill down",
        "d": "to copy a formula down a column so its cell references move with it",
        "x": "In this unit, fill down means to copy a formula down a column so its cell references move with it."
      },
      {
        "t": "chart",
        "d": "a picture of the numbers in a range, such as a bar chart or a pie chart",
        "x": "In this unit, chart means a picture of the numbers in a range, such as a bar chart or a pie chart."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “spreadsheet” in this unit?",
        "a": "a program that stores numbers, text and formulas in a grid of cells and recalculates them automatically."
      },
      {
        "q": "What is meant by “cell” in this unit?",
        "a": "one box in the grid, named by its column letter and row number, such as B3."
      },
      {
        "q": "What is meant by “column” in this unit?",
        "a": "a vertical line of cells named by a letter: A, B, C …."
      },
      {
        "q": "What is meant by “row” in this unit?",
        "a": "a horizontal line of cells named by a number: 1, 2, 3 …."
      },
      {
        "q": "What is meant by “formula” in this unit?",
        "a": "an instruction beginning with = that calculates a value from other cells, such as =B2*C2."
      },
      {
        "q": "What is meant by “function” in this unit?",
        "a": "a ready-made formula with a name, such as SUM, AVERAGE, MAX, MIN or COUNT."
      },
      {
        "q": "What is meant by “range” in this unit?",
        "a": "a block of cells named by its first and last cell, such as B2:B6."
      },
      {
        "q": "What is meant by “SUM” in this unit?",
        "a": "the function that adds every number in a range."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A PTA treasurer types the grand total of the fees column into the spreadsheet by hand each week, then reports a total that no longer matches the column after two parents pay late."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Replace the typed number with =SUM over the fees range, check the range covers every row and nothing else, and re-check the report; a formula updates itself when late payments are entered, a typed value does not."
      },
      {
        "q": "State this unit idea in your own words: A formula begins with = and recalculates automatically whenever a cell it uses changes.",
        "a": "A formula begins with = and recalculates automatically whenever a cell it uses changes."
      },
      {
        "q": "State this unit idea in your own words: A cell is named by its column letter and row number, such as B3.",
        "a": "A cell is named by its column letter and row number, such as B3."
      },
      {
        "q": "What happens to =SUM(D2:D6) when the value in D4 is changed?",
        "a": "It recalculates automatically to show the new total."
      },
      {
        "q": "Give the address of the cell in the second column and the ninth row.",
        "a": "B9."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Spreadsheets — Cells, Formulas and Functions” Is"
      },
      {
        "k": "p",
        "t": "A **spreadsheet** is a grid of **cells**, each named by its **column** letter and **row** number — A1, B7, D12. A cell may hold a number, text, or a **formula** that begins with = and calculates from other cells. A **function** such as **SUM** or **AVERAGE** is a ready-made formula, and a **range** such as B2:B6 names a block of cells. Change one number and every formula that depends on it updates — which is why a spreadsheet keeps a market ledger honest. Treasurers who type a total into a cell instead of writing =SUM have a number that never recalculates. Replace the typed number with =SUM over the fees range, check the range covers every row and nothing else, and re-check the report; a formula updates itself when late payments are entered, a typed value does not. A formula begins with = and recalculates automatically whenever a cell it uses changes. A cell is named by its column letter and row number, such as B3."
      },
      {
        "k": "p",
        "t": "A spreadsheet is a grid of cells addressed by column letter and row number. A formula begins with = and calculates from other cells (=B2*C2); functions such as SUM, AVERAGE, MAX, MIN and COUNT work on a range (=SUM(D2:D6)). When a value changes, every formula that uses it recalculates automatically."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: A formula begins with = and recalculates automatically whenever a cell it uses changes. A cell is named by its column letter and row number, such as B3."
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
        "t": "Each idea below is a working definition for Grade 8. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
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
            "spreadsheet",
            "a program that stores numbers, text and formulas in a grid of cells and recalculates them automatically",
            "In this unit, spreadsheet means a program that stores numbers, text and formulas in a grid of cells and recalculates them automatically."
          ],
          [
            "cell",
            "one box in the grid, named by its column letter and row number, such as B3",
            "In this unit, cell means one box in the grid, named by its column letter and row number, such as B3."
          ],
          [
            "column",
            "a vertical line of cells named by a letter: A, B, C …",
            "In this unit, column means a vertical line of cells named by a letter: A, B, C …."
          ],
          [
            "row",
            "a horizontal line of cells named by a number: 1, 2, 3 …",
            "In this unit, row means a horizontal line of cells named by a number: 1, 2, 3 …."
          ],
          [
            "formula",
            "an instruction beginning with = that calculates a value from other cells, such as =B2*C2",
            "In this unit, formula means an instruction beginning with = that calculates a value from other cells, such as =B2*C2."
          ],
          [
            "function",
            "a ready-made formula with a name, such as SUM, AVERAGE, MAX, MIN or COUNT",
            "In this unit, function means a ready-made formula with a name, such as SUM, AVERAGE, MAX, MIN or COUNT."
          ],
          [
            "range",
            "a block of cells named by its first and last cell, such as B2:B6",
            "In this unit, range means a block of cells named by its first and last cell, such as B2:B6."
          ],
          [
            "SUM",
            "the function that adds every number in a range",
            "In this unit, SUM means the function that adds every number in a range."
          ],
          [
            "AVERAGE",
            "the function that adds the numbers in a range and divides by how many there are",
            "In this unit, AVERAGE means the function that adds the numbers in a range and divides by how many there are."
          ],
          [
            "recalculate",
            "to work out every formula again after a cell changes",
            "In this unit, recalculate means to work out every formula again after a cell changes."
          ],
          [
            "fill down",
            "to copy a formula down a column so its cell references move with it",
            "In this unit, fill down means to copy a formula down a column so its cell references move with it."
          ],
          [
            "chart",
            "a picture of the numbers in a range, such as a bar chart or a pie chart",
            "In this unit, chart means a picture of the numbers in a range, such as a bar chart or a pie chart."
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
          "**Value** — a number or text typed in; **formula** — starts with = and is calculated.",
          "**Cell** B3 — one box; **range** B2:B6 — five boxes in a column.",
          "**SUM** adds; **AVERAGE** adds and divides by the count; **MAX** and **MIN** find the largest and smallest.",
          "**Column** letters run across the top; **row** numbers run down the side.",
          "A formula shows its **result** in the cell and its **text** in the formula bar."
        ]
      },
      {
        "k": "table",
        "head": [
          "Typed into a cell",
          "Value or formula?",
          "What the cell shows"
        ],
        "rows": [
          [
            "4500",
            "Value",
            "4500"
          ],
          [
            "Rice",
            "Value (text)",
            "Rice"
          ],
          [
            "=3*4500",
            "Formula",
            "13500"
          ],
          [
            "=B2*C2",
            "Formula",
            "The product of the two cells"
          ],
          [
            "=SUM(D2:D6)",
            "Formula (function)",
            "The total of the five cells"
          ],
          [
            "B2*C2 (no =)",
            "Value (text)",
            "The letters B2*C2, not a result"
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
          "What it does",
          "Example on 10, 20, 30, 40"
        ],
        "rows": [
          [
            "=SUM(range)",
            "Adds the numbers",
            "100"
          ],
          [
            "=AVERAGE(range)",
            "Adds, then divides by the count",
            "25"
          ],
          [
            "=MAX(range)",
            "Largest number",
            "40"
          ],
          [
            "=MIN(range)",
            "Smallest number",
            "10"
          ],
          [
            "=COUNT(range)",
            "How many cells hold numbers",
            "4"
          ],
          [
            "=B2*C2",
            "Multiplies two cells",
            "Quantity × unit price"
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
        "t": "A shopkeeper in Waterside, a PTA treasurer, a clinic counting doses and a school office computing class averages all keep the same table: item, quantity, price, total. On paper each change means re-adding the column; in a spreadsheet the total updates itself and the AVERAGE of forty marks takes one formula. A class with no computer rules a grid on paper, names the cells, writes the formulas in words and calculates by hand — the very skill that makes a spreadsheet user trustworthy, because she can tell when the machine's answer is wrong."
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
        "t": "The class investigation is **“The paper market ledger”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Rule a grid A–E by 1–7 on squared paper; write the headings Item, Quantity, Unit price (LRD), Total in A1:D1.",
          "Enter five market items with quantities and prices in rows 2–6; in D2 write the formula =B2*C2 and calculate it by hand; fill it down to D6, changing the row numbers as you go.",
          "In D7 write =SUM(D2:D6) and add the column; in a spare cell write =AVERAGE(C2:C6) and =MAX(C2:C6) and work them.",
          "The navigator changes one quantity; the driver must find every cell whose value changes and recalculate it, then say why the spreadsheet would do this by itself.",
          "If a computer is present, one pair types the same ledger and compares every result with the paper; a difference is a bug on one side or the other."
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
        "t": "**Problem.** A ledger has Quantity in B2:B4 (3, 5, 2) and Unit price in C2:C4 (4,500, 300, 1,250). Write the formula for each total in column D, calculate them, write the formula for the grand total in D5 and its value, and give the average unit price."
      },
      {
        "k": "num",
        "items": [
          "D2 = B2*C2 = 3 × 4,500 = 13,500.",
          "D3 = B3*C3 = 5 × 300 = 1,500.",
          "D4 = B4*C4 = 2 × 1,250 = 2,500.",
          "D5 = SUM(D2:D4) = 13,500 + 1,500 + 2,500 = 17,500.",
          "AVERAGE(C2:C4) = (4,500 + 300 + 1,250) ÷ 3 = 6,050 ÷ 3 ≈ 2,016.67."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** Totals 13,500, 1,500 and 2,500; grand total =SUM(D2:D4) = 17,500; average unit price about LRD 2,016.67."
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
          "Leaving out the = sign, so the cell shows the text 'B2*C2' instead of a result.",
          "Typing the total as a number instead of a formula, so it does not update when a price changes.",
          "Writing =SUM(D2:D6) but including the heading or the total cell itself in the range.",
          "Confusing AVERAGE with SUM — forgetting to divide by the count."
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
        "t": "Safety, Fairness and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN, a one-time code, a home address or a photograph of a classmate. If a message asks for a picture, money or a meeting, the student stops, keeps the message and tells a teacher. Copying another student's work and calling it your own is not collaboration; pair work shares the thinking, not the credit for work you did not do. Unplugged work is complete computing work."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, a scam, a request for a picture or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered, and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
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
        "t": "A PTA treasurer types the grand total of the fees column into the spreadsheet by hand each week, then reports a total that no longer matches the column after two parents pay late."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Replace the typed number with =SUM over the fees range, check the range covers every row and nothing else, and re-check the report; a formula updates itself when late payments are entered, a typed value does not."
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
        "t": "Replace the typed number with =SUM over the fees range, check the range covers every row and nothing else, and re-check the report; a formula updates itself when late payments are entered, a typed value does not."
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
        "t": "The investigation **“The paper market ledger”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
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
            "Squared-paper grid",
            "The spreadsheet's cells",
            "Formulas in words and their hand-worked results"
          ],
          [
            "Item and price cards",
            "Input values",
            "One row of the ledger per card"
          ],
          [
            "Word card",
            "A key term",
            "The term in a sentence"
          ],
          [
            "Class chart",
            "Formula bugs the class found (missing =, wrong range)",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Reading a Cell Address"
      },
      {
        "k": "p",
        "t": "Column first, then row: B3 is column B, row 3. A range reads first cell colon last cell: B2:B6 is five cells down column B; A1:D1 is four cells across row 1. Say the address aloud when you write a formula on paper."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why the = Sign Matters"
      },
      {
        "k": "p",
        "t": "The = sign tells the spreadsheet 'calculate this'. Without it, the cell holds the letters you typed. Every bug report that says 'the spreadsheet is not adding' begins with a missing = sign or a range that misses a row."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Fill Down Moves the References"
      },
      {
        "k": "p",
        "t": "Copy =B2*C2 from D2 down to D3 and it becomes =B3*C3 — the row numbers move with the formula. That is how one formula serves a whole column. In Grade 11 you will learn to pin a reference with $ when it must not move."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Chart Is a Formula You Can See"
      },
      {
        "k": "p",
        "t": "Select the items and totals and ask for a bar chart: the tallest bar is the biggest earner. Charts do not add information; they make the numbers visible to a PTA meeting in one glance."
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
        "t": "A fair period test on “Spreadsheets — Cells, Formulas and Functions” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit and use each in a sentence.",
          "Write or trace a four-step algorithm, formula or procedure connected with “Spreadsheets — Cells, Formulas and Functions”, showing every line of working.",
          "Sort four examples using “Values (typed in) / Formulas (calculated)” and give one reason.",
          "Debug a broken set of steps without blaming the person who wrote them, and say what the bug was."
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
        "t": "A 4-week unit on “Spreadsheets — Cells, Formulas and Functions” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
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
            "What “Spreadsheets — Cells, Formulas and Functions” is, and where it already appears around us.",
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
        "t": "This is original supplementary teaching material for Liberian junior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, spreadsheet means a program that stores numbers, text and formulas in a grid of cells and recalculates them automatically.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, cell means a vertical line of cells named by a letter: A, B, C ….",
        "a": "False",
        "why": "cell means one box in the grid, named by its column letter and row number, such as B3; the statement describes column."
      },
      {
        "s": "In this unit, row means a horizontal line of cells named by a number: 1, 2, 3 ….",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Unplugged work with paper, trace tables and cards is complete computing work; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the instructions, not in the person."
      },
      {
        "s": "Students should share passwords or mobile-money PINs so a partner can finish the work.",
        "a": "False",
        "why": "A password or PIN is secret. Never share a password, PIN, one-time code or personal photograph."
      },
      {
        "s": "A formula begins with = and recalculates automatically whenever a cell it uses changes.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "A formula in a spreadsheet must begin with the = sign.",
        "a": "True",
        "why": "Without = the cell stores the characters as text."
      },
      {
        "s": "AVERAGE adds the numbers in a range and then multiplies by how many there are.",
        "a": "False",
        "why": "AVERAGE adds and then divides by the count."
      }
    ],
    "classify": {
      "title": "Values (typed in) / Formulas (calculated)",
      "groups": [
        {
          "name": "Values (typed in)",
          "items": [
            "4500",
            "Rice",
            "Grade 8B",
            "300",
            "a date such as 12/03/2026",
            "Total (as a heading)"
          ]
        },
        {
          "name": "Formulas (calculated)",
          "items": [
            "=B2*C2",
            "=SUM(D2:D6)",
            "=AVERAGE(C2:C6)",
            "=MAX(B2:B9)",
            "=D7-D8",
            "=COUNT(B2:B40)"
          ]
        }
      ]
    },
    "diagram": {
      "title": "The parts of a spreadsheet grid",
      "caption": "Label each part and state what it does in “Spreadsheets — Cells, Formulas and Functions”.",
      "parts": [
        {
          "p": "Column letter",
          "f": "names a vertical line of cells: A, B, C …"
        },
        {
          "p": "Row number",
          "f": "names a horizontal line of cells: 1, 2, 3 …"
        },
        {
          "p": "Cell (B3)",
          "f": "one box, column letter then row number"
        },
        {
          "p": "Formula bar",
          "f": "shows the formula text while the cell shows the result"
        },
        {
          "p": "Range (D2:D6)",
          "f": "a block of cells from the first to the last named"
        }
      ]
    },
    "experiment": {
      "title": "The paper market ledger",
      "aim": "To practise the ideas of “Spreadsheets — Cells, Formulas and Functions” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Paper cards, arrows and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class computing chart",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “The paper market ledger” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A PTA treasurer types the grand total of the fees column into the spreadsheet by hand each week, then reports a total that no longer matches the column after two parents pay late. What should happen next?",
        "a": "Replace the typed number with =SUM over the fees range, check the range covers every row and nothing else, and re-check the report; a formula updates itself when late payments are entered, a typed value does not."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Spreadsheets — Cells, Formulas and Functions”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's trace gives the wrong answer. What do you say, and why?",
        "a": "Remind the class that a bug is in the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian daily life (a market, a clinic, a radio station, a mobile-money kiosk, a school office).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as mobile money, a clinic record, a radio bulletin, a school register or a market ledger."
      },
      {
        "q": "A teacher has 40 marks in B2:B41. Write the formulas for the class average, the highest mark and the number of marks entered.",
        "a": "=AVERAGE(B2:B41), =MAX(B2:B41), =COUNT(B2:B41)."
      },
      {
        "q": "A clinic records doses given each day in C2:C31 for a month. Which function gives the month's total, and what happens to it when Tuesday's figure is corrected?",
        "a": "=SUM(C2:C31); the total recalculates automatically when Tuesday's cell changes."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “The paper market ledger” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, paper grids and a paper keyboard",
      "A class computing chart",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's phone, kept dry and in sight"
    ],
    "aids": [
      "Word cards — spreadsheet, cell, column",
      "A flowchart or trace table of “The paper market ledger”",
      "Squared paper ruled A–E by 1–10 with a paper formula bar",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing word and what it means.",
      "Practise this week's paper method (a trace, a conversion, a formula or an algorithm) with a sibling or a friend — no device needed.",
      "Find one example of this unit's idea in your community (a market, a clinic, a radio station, a mobile-money kiosk or an office) and write three sentences about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written algorithm, trace table or worked conversion",
      "Pair-debug observed against the class chart",
      "A short written response to the Liberian scenario"
    ],
    "worked": [
      {
        "q": "B2 holds 3 and C2 holds 4,500. What does =B2*C2 show?",
        "steps": [
          "3 × 4,500."
        ],
        "a": "13,500"
      },
      {
        "q": "D2:D4 hold 13,500, 1,500 and 2,500. What does =SUM(D2:D4) show?",
        "steps": [
          "Add the three."
        ],
        "a": "17,500"
      },
      {
        "q": "C2:C4 hold 10, 20, 30. What does =AVERAGE(C2:C4) show?",
        "steps": [
          "60 ÷ 3."
        ],
        "a": "20"
      },
      {
        "q": "Name the cell in column D, row 7.",
        "steps": [
          "Column letter then row number."
        ],
        "a": "D7"
      },
      {
        "q": "How many cells are in the range B2:B6?",
        "steps": [
          "Rows 2, 3, 4, 5, 6."
        ],
        "a": "5"
      },
      {
        "q": "A cell shows the text B2*C2. What is missing?",
        "steps": [
          "No calculation without it."
        ],
        "a": "The = sign"
      },
      {
        "q": "=B2*C2 is filled down from D2 to D5. What formula is in D5?",
        "steps": [
          "Row numbers move with the formula."
        ],
        "a": "=B5*C5"
      },
      {
        "q": "B2:B4 hold 8, 15, 4. What do =MAX(B2:B4) and =MIN(B2:B4) show?",
        "steps": [
          "Largest and smallest."
        ],
        "a": "15 and 4"
      }
    ]
  },
  {
    "grade": 8,
    "period": "III",
    "sem": "One",
    "icon": "🕸️",
    "csPlan": true,
    "title": "Computer Networks — LAN, WAN and How Data Travels",
    "subtitle": "Computer Science · Original junior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Unplugged-first: a class with no computer lab can still complete the unit on paper, and a class with one shared device can extend it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary accurately in speech and writing.",
      "Write, trace and debug an algorithm, a formula or a set of steps connected with the unit — on paper first, on a device when one is available.",
      "Make and justify a safe, honest and lawful choice about devices, data and people online."
    ],
    "objectives": [
      "Explain the key terms in “Computer Networks — LAN, WAN and How Data Travels” and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm or set of steps connected with this unit, on paper.",
      "Sort examples into the unit's two groups and give a reason for each choice.",
      "Trace a worked example step by step, showing every line of working, and state the answer in a full sentence.",
      "Apply the unit's ideas to a fictional Liberian school, market or office scenario.",
      "Debug a broken set of steps, a formula or a short program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared record of bugs found.",
      "Name one Liberian example of this unit's idea (mobile money, a radio station, a clinic record, a ministry office, a school register or a market stall)."
    ],
    "safeguard": "A junior high computing lesson uses charts, paper models, trace tables and, when a device is present, a shared school machine or the teacher's own phone. Students never share passwords or PINs, never photograph one another without consent, and never post a classmate's image or details. A mobile-money PIN is a secret even from a friend. If a student reports online bullying, a request for a picture, a scam message or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "A network connects computers so they can share data and devices. A LAN covers one site; a WAN links sites over long distances — the internet is the largest WAN. Data travels as packets with addresses; switches connect devices within a LAN, routers pass packets between networks, and a modem connects to the line. Media include copper cable, fibre-optic cable and wireless radio (Wi-Fi, mobile data).",
    "focus": [
      "Unplugged demonstration and paper trace",
      "Pair work and debugging",
      "Liberian scenario",
      "Computing fair check"
    ],
    "terms": [
      {
        "t": "network",
        "d": "two or more computers connected so that they can share data, devices and connections",
        "x": "In this unit, network means two or more computers connected so that they can share data, devices and connections."
      },
      {
        "t": "local area network",
        "d": "a network covering one building or site, such as a school or an office; a LAN",
        "x": "In this unit, local area network means a network covering one building or site, such as a school or an office; a LAN."
      },
      {
        "t": "wide area network",
        "d": "a network that joins LANs over long distances, across towns and countries; a WAN",
        "x": "In this unit, wide area network means a network that joins LANs over long distances, across towns and countries; a WAN."
      },
      {
        "t": "packet",
        "d": "a small block of data with the sender's and receiver's addresses, into which a message is split for sending",
        "x": "In this unit, packet means a small block of data with the sender's and receiver's addresses, into which a message is split for sending."
      },
      {
        "t": "switch",
        "d": "a device inside a LAN that passes each packet only to the device it is addressed to",
        "x": "In this unit, switch means a device inside a LAN that passes each packet only to the device it is addressed to."
      },
      {
        "t": "router",
        "d": "a device that passes packets between different networks and chooses the best route",
        "x": "In this unit, router means a device that passes packets between different networks and chooses the best route."
      },
      {
        "t": "modem",
        "d": "a device that converts computer signals to and from the form the telephone, cable or fibre line carries",
        "x": "In this unit, modem means a device that converts computer signals to and from the form the telephone, cable or fibre line carries."
      },
      {
        "t": "Wi-Fi",
        "d": "a wireless way of joining a LAN using radio signals",
        "x": "In this unit, Wi-Fi means a wireless way of joining a LAN using radio signals."
      },
      {
        "t": "fibre-optic cable",
        "d": "a cable that carries data as pulses of light through glass fibres, very fast over long distances",
        "x": "In this unit, fibre-optic cable means a cable that carries data as pulses of light through glass fibres, very fast over long distances."
      },
      {
        "t": "bandwidth",
        "d": "the amount of data a connection can carry each second, measured in bits per second",
        "x": "In this unit, bandwidth means the amount of data a connection can carry each second, measured in bits per second."
      },
      {
        "t": "IP address",
        "d": "the number that identifies a device on a network so packets can reach it",
        "x": "In this unit, IP address means the number that identifies a device on a network so packets can reach it."
      },
      {
        "t": "server",
        "d": "a computer that provides a service — files, web pages, email — to other computers on a network",
        "x": "In this unit, server means a computer that provides a service — files, web pages, email — to other computers on a network."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “network” in this unit?",
        "a": "two or more computers connected so that they can share data, devices and connections."
      },
      {
        "q": "What is meant by “local area network” in this unit?",
        "a": "a network covering one building or site, such as a school or an office; a LAN."
      },
      {
        "q": "What is meant by “wide area network” in this unit?",
        "a": "a network that joins LANs over long distances, across towns and countries; a WAN."
      },
      {
        "q": "What is meant by “packet” in this unit?",
        "a": "a small block of data with the sender's and receiver's addresses, into which a message is split for sending."
      },
      {
        "q": "What is meant by “switch” in this unit?",
        "a": "a device inside a LAN that passes each packet only to the device it is addressed to."
      },
      {
        "q": "What is meant by “router” in this unit?",
        "a": "a device that passes packets between different networks and chooses the best route."
      },
      {
        "q": "What is meant by “modem” in this unit?",
        "a": "a device that converts computer signals to and from the form the telephone, cable or fibre line carries."
      },
      {
        "q": "What is meant by “Wi-Fi” in this unit?",
        "a": "a wireless way of joining a LAN using radio signals."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A school's computer room can print and share files but cannot open any website, and the teacher plans to buy new computers because 'the network is broken'."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Separate the two networks: printing works, so the switch and the LAN are fine; nothing outside opens, so check the router, the modem and the line to the provider (and whether the subscription has been paid) before spending a cent on computers."
      },
      {
        "q": "State this unit idea in your own words: Data crosses a network in packets, each carrying the address of where it is going.",
        "a": "Data crosses a network in packets, each carrying the address of where it is going."
      },
      {
        "q": "State this unit idea in your own words: A LAN covers one building or site; a WAN joins networks across long distances.",
        "a": "A LAN covers one building or site; a WAN joins networks across long distances."
      },
      {
        "q": "Why is a message split into packets before it is sent?",
        "a": "So many users can share the line, a lost packet can be re-sent alone, and packets can take different routes and be reassembled by number."
      },
      {
        "q": "Name the cable that carries most of Liberia's international internet traffic and where it lands.",
        "a": "The ACE submarine fibre-optic cable, landing at Monrovia."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Computer Networks — LAN, WAN and How Data Travels” Is"
      },
      {
        "k": "p",
        "t": "A **network** is two or more computers connected so that they can share data, printers and an internet connection. A **local area network** covers one building; a **wide area network** joins networks across towns and countries. Data crosses a network as **packets**, each with the address of its destination, passed on by a **switch** inside the building and a **router** between networks; a **modem** links the building to the telephone or fibre line. Wires, **Wi-Fi** radio and **fibre-optic** light are the media the packets travel on. Teachers who plan to replace computers because 'the network is broken' when the LAN still prints have blamed the wrong device. Separate the two networks: printing works, so the switch and the LAN are fine; nothing outside opens, so check the router, the modem and the line to the provider (and whether the subscription has been paid) before spending a cent on computers. Data crosses a network in packets, each carrying the address of where it is going. A LAN covers one building or site; a WAN joins networks across long distances."
      },
      {
        "k": "p",
        "t": "A network connects computers so they can share data and devices. A LAN covers one site; a WAN links sites over long distances — the internet is the largest WAN. Data travels as packets with addresses; switches connect devices within a LAN, routers pass packets between networks, and a modem connects to the line. Media include copper cable, fibre-optic cable and wireless radio (Wi-Fi, mobile data)."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: Data crosses a network in packets, each carrying the address of where it is going. A LAN covers one building or site; a WAN joins networks across long distances."
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
        "t": "Each idea below is a working definition for Grade 8. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
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
            "network",
            "two or more computers connected so that they can share data, devices and connections",
            "In this unit, network means two or more computers connected so that they can share data, devices and connections."
          ],
          [
            "local area network",
            "a network covering one building or site, such as a school or an office; a LAN",
            "In this unit, local area network means a network covering one building or site, such as a school or an office; a LAN."
          ],
          [
            "wide area network",
            "a network that joins LANs over long distances, across towns and countries; a WAN",
            "In this unit, wide area network means a network that joins LANs over long distances, across towns and countries; a WAN."
          ],
          [
            "packet",
            "a small block of data with the sender's and receiver's addresses, into which a message is split for sending",
            "In this unit, packet means a small block of data with the sender's and receiver's addresses, into which a message is split for sending."
          ],
          [
            "switch",
            "a device inside a LAN that passes each packet only to the device it is addressed to",
            "In this unit, switch means a device inside a LAN that passes each packet only to the device it is addressed to."
          ],
          [
            "router",
            "a device that passes packets between different networks and chooses the best route",
            "In this unit, router means a device that passes packets between different networks and chooses the best route."
          ],
          [
            "modem",
            "a device that converts computer signals to and from the form the telephone, cable or fibre line carries",
            "In this unit, modem means a device that converts computer signals to and from the form the telephone, cable or fibre line carries."
          ],
          [
            "Wi-Fi",
            "a wireless way of joining a LAN using radio signals",
            "In this unit, Wi-Fi means a wireless way of joining a LAN using radio signals."
          ],
          [
            "fibre-optic cable",
            "a cable that carries data as pulses of light through glass fibres, very fast over long distances",
            "In this unit, fibre-optic cable means a cable that carries data as pulses of light through glass fibres, very fast over long distances."
          ],
          [
            "bandwidth",
            "the amount of data a connection can carry each second, measured in bits per second",
            "In this unit, bandwidth means the amount of data a connection can carry each second, measured in bits per second."
          ],
          [
            "IP address",
            "the number that identifies a device on a network so packets can reach it",
            "In this unit, IP address means the number that identifies a device on a network so packets can reach it."
          ],
          [
            "server",
            "a computer that provides a service — files, web pages, email — to other computers on a network",
            "In this unit, server means a computer that provides a service — files, web pages, email — to other computers on a network."
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
          "**LAN** — one site, owned by the school or office; **WAN** — many sites, leased lines and the internet.",
          "**Switch** — inside the LAN, delivers to one device; **router** — between networks, chooses the route.",
          "**Modem** joins the building to the line; **router** decides where packets go.",
          "**Wired** (copper, fibre) is steadier; **wireless** (Wi-Fi, mobile data) is more convenient.",
          "**Bandwidth** is how much per second; **latency** is how long a packet takes."
        ]
      },
      {
        "k": "table",
        "head": [
          "Device",
          "Where it sits",
          "Job"
        ],
        "rows": [
          [
            "Switch",
            "Inside the LAN",
            "Passes each packet to the one device it is addressed to"
          ],
          [
            "Router",
            "At the edge of the LAN",
            "Passes packets between networks and chooses a route"
          ],
          [
            "Modem",
            "Between the router and the line",
            "Converts signals for the telephone, cable or fibre line"
          ],
          [
            "Wireless access point",
            "Inside the LAN",
            "Lets Wi-Fi devices join the LAN by radio"
          ],
          [
            "Server",
            "Inside the LAN or far away",
            "Provides files, pages or email to other computers"
          ],
          [
            "Network cable",
            "Between devices",
            "Carries the packets as electrical or light signals"
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
          "Medium",
          "Carries data as",
          "Strength and weakness"
        ],
        "rows": [
          [
            "Copper (Ethernet) cable",
            "Electrical signals",
            "Cheap and steady; distance limited to about 100 m per run"
          ],
          [
            "Fibre-optic cable",
            "Pulses of light",
            "Very fast over long distances; costly to lay and repair"
          ],
          [
            "Wi-Fi",
            "Radio waves",
            "No cables; slower through walls and shared with neighbours"
          ],
          [
            "Mobile data (3G, 4G)",
            "Radio waves from a tower",
            "Works wherever there is signal; costs per megabyte"
          ],
          [
            "Satellite",
            "Radio waves via space",
            "Reaches remote counties; high delay and cost"
          ],
          [
            "Submarine cable",
            "Light through undersea fibre",
            "Links Liberia to the world; one landing station"
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
        "t": "Liberia joined the world's fastest network in 2011 when the ACE submarine cable landed at Monrovia; inland, mobile towers and a growing fibre backbone carry the same packets to Ganta and Harper. A school in Voinjama sharing one printer between three computers runs a LAN; the WAEC portal it reaches sits on a WAN. Knowing that a message is split into packets and routed by address explains why a photo sent from Buchanan arrives in pieces on a weak signal, why 'network is slow' can mean bandwidth or a failed router, and why a school with one modem and a switch can connect a whole computer room."
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
        "t": "The class investigation is **“The classroom packet network”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Give every student an 'IP address' card (a desk number) and appoint one switch for each row and one router for the whole room.",
          "A sender writes a short message, cuts it into three numbered packets, writes the destination address on each, and hands them to the row's switch.",
          "The switch delivers packets addressed to its own row and passes the others to the router; the router chooses which row's switch gets them.",
          "The receiver reassembles the packets in number order and reads the message; one packet is 'lost' on purpose and the class agrees how the receiver should ask for it again.",
          "If a computer is present, one pair runs a ping or opens the network settings to find the real IP address; otherwise the paper network and its diagram are the finished work."
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
        "t": "**Problem.** A school computer room has six computers, one printer, a switch, a router and a modem on a fibre line. A student prints a document from computer 3 and then opens the WAEC website. Trace the path of the packets in each case and name the kind of network each journey uses."
      },
      {
        "k": "num",
        "items": [
          "Printing: computer 3 → cable → switch → printer. The packets never leave the building — a LAN journey.",
          "The switch reads the printer's address and sends the packets only to the printer, not to the other five computers.",
          "WAEC website: computer 3 → switch → router (the packets are addressed outside the LAN) → modem → fibre line → the internet → the WAEC server, and the page comes back the same way.",
          "That journey crosses a WAN — the internet."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** Printing stays inside the LAN through the switch; the website request leaves through the router and modem across the WAN (the internet) and returns the same way."
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
          "Calling the router 'the internet' — it is the door between the LAN and the WAN.",
          "Thinking a whole message travels as one piece; it is split into packets that may take different routes.",
          "Confusing a switch (inside the LAN) with a router (between networks).",
          "Believing Wi-Fi is the internet; Wi-Fi only joins a device to the LAN, and the LAN may or may not be connected onward."
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
        "t": "Safety, Fairness and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN, a one-time code, a home address or a photograph of a classmate. If a message asks for a picture, money or a meeting, the student stops, keeps the message and tells a teacher. Copying another student's work and calling it your own is not collaboration; pair work shares the thinking, not the credit for work you did not do. Unplugged work is complete computing work."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, a scam, a request for a picture or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered, and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
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
        "t": "A school's computer room can print and share files but cannot open any website, and the teacher plans to buy new computers because 'the network is broken'."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Separate the two networks: printing works, so the switch and the LAN are fine; nothing outside opens, so check the router, the modem and the line to the provider (and whether the subscription has been paid) before spending a cent on computers."
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
        "t": "Separate the two networks: printing works, so the switch and the LAN are fine; nothing outside opens, so check the router, the modem and the line to the provider (and whether the subscription has been paid) before spending a cent on computers."
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
        "t": "The investigation **“The classroom packet network”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
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
            "Desk-number cards",
            "IP addresses",
            "A labelled network diagram"
          ],
          [
            "Numbered message slips",
            "Packets",
            "The message reassembled in order"
          ],
          [
            "Row 'switch' and room 'router'",
            "The network devices",
            "One sentence on what each does"
          ],
          [
            "Class chart",
            "Delivery bugs (no address, packet lost)",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why Packets?"
      },
      {
        "k": "p",
        "t": "A long message sent as one piece would block the line for everyone until it finished, and one error would spoil it all. Cut into packets, messages from many users share the line, a lost packet is re-sent alone, and packets can take different roads and still be reassembled by their numbers."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Addresses Make Delivery Possible"
      },
      {
        "k": "p",
        "t": "Every device on a network has an IP address, like a house number. A switch learns which address sits on which cable; a router keeps a table of which networks lie in which direction. No address, no delivery — exactly like a letter with no name on the envelope."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Bandwidth: The Width of the Road"
      },
      {
        "k": "p",
        "t": "Bandwidth is how many bits a connection can carry per second. A 10 Mbps line moves ten million bits a second; a 3 MB photo (24 million bits) takes about 2.4 seconds on it. Forty students streaming video on one 10 Mbps line each get a quarter of a megabit — the reason the classroom Wi-Fi 'crawls'."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Liberia's Link to the World"
      },
      {
        "k": "p",
        "t": "Nearly all of Liberia's international traffic enters through one submarine cable landing at Monrovia and leaves the same way. When that cable was cut in the past, the whole country slowed. A backbone of fibre along the roads and mobile towers on the hills carries it onward — a WAN a Grade 8 student can draw."
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
        "t": "A fair period test on “Computer Networks — LAN, WAN and How Data Travels” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit and use each in a sentence.",
          "Write or trace a four-step algorithm, formula or procedure connected with “Computer Networks — LAN, WAN and How Data Travels”, showing every line of working.",
          "Sort four examples using “Inside the LAN / Beyond the LAN (WAN)” and give one reason.",
          "Debug a broken set of steps without blaming the person who wrote them, and say what the bug was."
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
        "t": "A 4-week unit on “Computer Networks — LAN, WAN and How Data Travels” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
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
            "What “Computer Networks — LAN, WAN and How Data Travels” is, and where it already appears around us.",
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
        "t": "This is original supplementary teaching material for Liberian junior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, network means two or more computers connected so that they can share data, devices and connections.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, local area network means a network that joins LANs over long distances, across towns and countries; a WAN.",
        "a": "False",
        "why": "local area network means a network covering one building or site, such as a school or an office; a LAN; the statement describes wide area network."
      },
      {
        "s": "In this unit, packet means a small block of data with the sender's and receiver's addresses, into which a message is split for sending.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Unplugged work with paper, trace tables and cards is complete computing work; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the instructions, not in the person."
      },
      {
        "s": "Students should share passwords or mobile-money PINs so a partner can finish the work.",
        "a": "False",
        "why": "A password or PIN is secret. Never share a password, PIN, one-time code or personal photograph."
      },
      {
        "s": "Data crosses a network in packets, each carrying the address of where it is going.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "A router passes packets between different networks, such as a school LAN and the internet.",
        "a": "True",
        "why": "That is the router's job; the switch works inside the LAN."
      },
      {
        "s": "If the Wi-Fi is working, the internet must be working too.",
        "a": "False",
        "why": "Wi-Fi only joins a device to the LAN; the LAN's link to the internet may be down."
      }
    ],
    "classify": {
      "title": "Inside the LAN / Beyond the LAN (WAN)",
      "groups": [
        {
          "name": "Inside the LAN",
          "items": [
            "switch",
            "network cable to the printer",
            "Wi-Fi access point",
            "the school's file server",
            "computer 3's IP address",
            "a shared printer"
          ]
        },
        {
          "name": "Beyond the LAN (WAN)",
          "items": [
            "router's link to the provider",
            "modem and fibre line",
            "the ACE submarine cable",
            "the WAEC web server",
            "a mobile tower",
            "a satellite link to a remote county"
          ]
        }
      ]
    },
    "diagram": {
      "title": "A school LAN connected to the internet",
      "caption": "Label each part and state what it does in “Computer Networks — LAN, WAN and How Data Travels”.",
      "parts": [
        {
          "p": "Computers and printer",
          "f": "the devices that share data inside the building"
        },
        {
          "p": "Switch",
          "f": "connects the devices and delivers each packet to the right one"
        },
        {
          "p": "Router",
          "f": "passes packets between the LAN and outside networks"
        },
        {
          "p": "Modem and line",
          "f": "converts signals for the fibre or telephone line to the provider"
        },
        {
          "p": "The internet (WAN)",
          "f": "the world-wide network of networks the packets travel across"
        }
      ]
    },
    "experiment": {
      "title": "The classroom packet network",
      "aim": "To practise the ideas of “Computer Networks — LAN, WAN and How Data Travels” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Paper cards, arrows and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class computing chart",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “The classroom packet network” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A school's computer room can print and share files but cannot open any website, and the teacher plans to buy new computers because 'the network is broken'. What should happen next?",
        "a": "Separate the two networks: printing works, so the switch and the LAN are fine; nothing outside opens, so check the router, the modem and the line to the provider (and whether the subscription has been paid) before spending a cent on computers."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Computer Networks — LAN, WAN and How Data Travels”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's trace gives the wrong answer. What do you say, and why?",
        "a": "Remind the class that a bug is in the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian daily life (a market, a clinic, a radio station, a mobile-money kiosk, a school office).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as mobile money, a clinic record, a radio bulletin, a school register or a market ledger."
      },
      {
        "q": "Design a network for a clinic with four computers, one printer and one internet connection. List the devices needed and draw or describe how they connect.",
        "a": "Four computers and the printer cabled (or Wi-Fi) to a switch or access point; the switch to a router; the router to a modem on the provider's line; addresses for every device."
      },
      {
        "q": "A 6 MB photo is sent over a 2 Mbps mobile connection. About how long does it take, and why might it take longer in practice?",
        "a": "6 MB = 48 million bits; 48 ÷ 2 = about 24 seconds; longer if the signal is weak, packets are lost and re-sent, or the tower is shared with many users."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “The classroom packet network” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, paper grids and a paper keyboard",
      "A class computing chart",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's phone, kept dry and in sight"
    ],
    "aids": [
      "Word cards — network, local area network, wide area network",
      "A flowchart or trace table of “The classroom packet network”",
      "IP address cards, numbered packet slips and switch and router labels",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing word and what it means.",
      "Practise this week's paper method (a trace, a conversion, a formula or an algorithm) with a sibling or a friend — no device needed.",
      "Find one example of this unit's idea in your community (a market, a clinic, a radio station, a mobile-money kiosk or an office) and write three sentences about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written algorithm, trace table or worked conversion",
      "Pair-debug observed against the class chart",
      "A short written response to the Liberian scenario"
    ],
    "worked": [
      {
        "q": "Which device delivers a packet to one computer inside the LAN?",
        "steps": [
          "Inside the building, reads the address."
        ],
        "a": "The switch"
      },
      {
        "q": "Which device passes packets between the school LAN and the internet?",
        "steps": [
          "Between networks."
        ],
        "a": "The router"
      },
      {
        "q": "A message is split into 5 packets and packet 3 is lost. What does the receiver do?",
        "steps": [
          "Reassembles by number; asks for the missing one."
        ],
        "a": "Asks the sender to re-send packet 3, then reassembles 1–5"
      },
      {
        "q": "A network in one school building is a ______; the internet is a ______.",
        "steps": [
          "One site; many sites."
        ],
        "a": "LAN; WAN"
      },
      {
        "q": "How many bits are in a 3 MB photo? (1 byte = 8 bits; 1 MB ≈ 1,000,000 bytes)",
        "steps": [
          "3,000,000 × 8."
        ],
        "a": "About 24,000,000 bits"
      },
      {
        "q": "How long does a 24,000,000-bit photo take on a 10 Mbps line?",
        "steps": [
          "24,000,000 ÷ 10,000,000."
        ],
        "a": "About 2.4 seconds"
      },
      {
        "q": "Forty users share a 10 Mbps line equally. Bandwidth each?",
        "steps": [
          "10 ÷ 40."
        ],
        "a": "0.25 Mbps each"
      },
      {
        "q": "Printing works but no website opens. Which two devices are suspect?",
        "steps": [
          "LAN fine; outside path broken."
        ],
        "a": "The router and the modem (or the provider's line)"
      }
    ]
  },
  {
    "grade": 8,
    "period": "IV",
    "sem": "Two",
    "icon": "🌐",
    "csPlan": true,
    "title": "The Internet, the Web and Email",
    "subtitle": "Computer Science · Original junior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Unplugged-first: a class with no computer lab can still complete the unit on paper, and a class with one shared device can extend it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary accurately in speech and writing.",
      "Write, trace and debug an algorithm, a formula or a set of steps connected with the unit — on paper first, on a device when one is available.",
      "Make and justify a safe, honest and lawful choice about devices, data and people online."
    ],
    "objectives": [
      "Explain the key terms in “The Internet, the Web and Email” and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm or set of steps connected with this unit, on paper.",
      "Sort examples into the unit's two groups and give a reason for each choice.",
      "Trace a worked example step by step, showing every line of working, and state the answer in a full sentence.",
      "Apply the unit's ideas to a fictional Liberian school, market or office scenario.",
      "Debug a broken set of steps, a formula or a short program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared record of bugs found.",
      "Name one Liberian example of this unit's idea (mobile money, a radio station, a clinic record, a ministry office, a school register or a market stall)."
    ],
    "safeguard": "A junior high computing lesson uses charts, paper models, trace tables and, when a device is present, a shared school machine or the teacher's own phone. Students never share passwords or PINs, never photograph one another without consent, and never post a classmate's image or details. A mobile-money PIN is a secret even from a friend. If a student reports online bullying, a request for a picture, a scam message or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "The internet is the global network of networks; the web, email and messaging are services that use it. A browser shows web pages found by their URLs; a search engine is a website that indexes other pages. Email carries messages and attachments between addresses. Every page has an author with a purpose, so readers check who wrote it, when, and whether other sources agree.",
    "focus": [
      "Unplugged demonstration and paper trace",
      "Pair work and debugging",
      "Liberian scenario",
      "Computing fair check"
    ],
    "terms": [
      {
        "t": "internet",
        "d": "the world-wide network of networks that connects computers and phones in every country",
        "x": "In this unit, internet means the world-wide network of networks that connects computers and phones in every country."
      },
      {
        "t": "World Wide Web",
        "d": "the service on the internet made of linked pages that a browser displays",
        "x": "In this unit, World Wide Web means the service on the internet made of linked pages that a browser displays."
      },
      {
        "t": "browser",
        "d": "the program that fetches and displays web pages, such as Chrome, Firefox or Opera",
        "x": "In this unit, browser means the program that fetches and displays web pages, such as Chrome, Firefox or Opera."
      },
      {
        "t": "URL",
        "d": "the address of a web page, such as https://www.moe.gov.lr/exams",
        "x": "In this unit, URL means the address of a web page, such as https://www.moe.gov.lr/exams."
      },
      {
        "t": "hyperlink",
        "d": "text or a picture on a page that opens another page when clicked",
        "x": "In this unit, hyperlink means text or a picture on a page that opens another page when clicked."
      },
      {
        "t": "search engine",
        "d": "a website that keeps an index of other pages and lists those that match the words you type",
        "x": "In this unit, search engine means a website that keeps an index of other pages and lists those that match the words you type."
      },
      {
        "t": "email",
        "d": "electronic mail: a message sent over the internet from one address to another",
        "x": "In this unit, email means electronic mail: a message sent over the internet from one address to another."
      },
      {
        "t": "attachment",
        "d": "a file sent along with an email, such as a document or a photograph",
        "x": "In this unit, attachment means a file sent along with an email, such as a document or a photograph."
      },
      {
        "t": "domain name",
        "d": "the part of a URL that names the site and its type, such as moe.gov.lr",
        "x": "In this unit, domain name means the part of a URL that names the site and its type, such as moe.gov.lr."
      },
      {
        "t": "source",
        "d": "where a piece of information comes from — the person or organisation that published it",
        "x": "In this unit, source means where a piece of information comes from — the person or organisation that published it."
      },
      {
        "t": "misinformation",
        "d": "false or misleading information, whether spread deliberately or by mistake",
        "x": "In this unit, misinformation means false or misleading information, whether spread deliberately or by mistake."
      },
      {
        "t": "HTTPS",
        "d": "the secure version of the web's transfer rules, shown by a padlock, that encrypts the page on its way",
        "x": "In this unit, HTTPS means the secure version of the web's transfer rules, shown by a padlock, that encrypts the page on its way."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “internet” in this unit?",
        "a": "the world-wide network of networks that connects computers and phones in every country."
      },
      {
        "q": "What is meant by “World Wide Web” in this unit?",
        "a": "the service on the internet made of linked pages that a browser displays."
      },
      {
        "q": "What is meant by “browser” in this unit?",
        "a": "the program that fetches and displays web pages, such as Chrome, Firefox or Opera."
      },
      {
        "q": "What is meant by “URL” in this unit?",
        "a": "the address of a web page, such as https://www.moe.gov.lr/exams."
      },
      {
        "q": "What is meant by “hyperlink” in this unit?",
        "a": "text or a picture on a page that opens another page when clicked."
      },
      {
        "q": "What is meant by “search engine” in this unit?",
        "a": "a website that keeps an index of other pages and lists those that match the words you type."
      },
      {
        "q": "What is meant by “email” in this unit?",
        "a": "electronic mail: a message sent over the internet from one address to another."
      },
      {
        "q": "What is meant by “attachment” in this unit?",
        "a": "a file sent along with an email, such as a document or a photograph."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A Grade 8 student forwards a message to the whole class group claiming a local well is poisoned, the market empties for a day, and the claim turns out to be a joke from an unknown account."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Name the idea — misinformation spreads through forwarding — then agree the class habit: before forwarding, find the original source, check the author and date, look for a second independent source, and, for a health claim, ask the clinic or county health team first."
      },
      {
        "q": "State this unit idea in your own words: The internet is the network; the web is one service that runs on it.",
        "a": "The internet is the network; the web is one service that runs on it."
      },
      {
        "q": "State this unit idea in your own words: A search engine is a website that finds pages; it is not the browser and it does not check that a page is true.",
        "a": "A search engine is a website that finds pages; it is not the browser and it does not check that a page is true."
      },
      {
        "q": "List four checks to make before forwarding a message that makes a claim.",
        "a": "Who is the original author; when was it published; what evidence is given; does an independent, official source agree."
      },
      {
        "q": "What are the parts of a well-written email?",
        "a": "A clear subject line, a greeting, a short clear body, a polite closing with the sender's full name, and clearly named attachments."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “The Internet, the Web and Email” Is"
      },
      {
        "k": "p",
        "t": "The **internet** is the world-wide network of networks; the **World Wide Web** is one service that runs on it — pages linked by **hyperlinks**, each found by a **URL** and shown by a **browser**. A **search engine** is a website that finds other pages; it is not the browser and not the web. **Email** is another internet service, with an address, a subject and an attachment. Because anyone can publish, a reader must judge a **source** before trusting it. Students who forward an unknown account's claim that a well is poisoned, emptying a market for a day, have treated a friend's forward as a source. Name the idea — misinformation spreads through forwarding — then agree the class habit: before forwarding, find the original source, check the author and date, look for a second independent source, and, for a health claim, ask the clinic or county health team first. The internet is the network; the web is one service that runs on it. A search engine is a website that finds pages; it is not the browser and it does not check that a page is true."
      },
      {
        "k": "p",
        "t": "The internet is the global network of networks; the web, email and messaging are services that use it. A browser shows web pages found by their URLs; a search engine is a website that indexes other pages. Email carries messages and attachments between addresses. Every page has an author with a purpose, so readers check who wrote it, when, and whether other sources agree."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: The internet is the network; the web is one service that runs on it. A search engine is a website that finds pages; it is not the browser and it does not check that a page is true."
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
        "t": "Each idea below is a working definition for Grade 8. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
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
            "internet",
            "the world-wide network of networks that connects computers and phones in every country",
            "In this unit, internet means the world-wide network of networks that connects computers and phones in every country."
          ],
          [
            "World Wide Web",
            "the service on the internet made of linked pages that a browser displays",
            "In this unit, World Wide Web means the service on the internet made of linked pages that a browser displays."
          ],
          [
            "browser",
            "the program that fetches and displays web pages, such as Chrome, Firefox or Opera",
            "In this unit, browser means the program that fetches and displays web pages, such as Chrome, Firefox or Opera."
          ],
          [
            "URL",
            "the address of a web page, such as https://www.moe.gov.lr/exams",
            "In this unit, URL means the address of a web page, such as https://www.moe.gov.lr/exams."
          ],
          [
            "hyperlink",
            "text or a picture on a page that opens another page when clicked",
            "In this unit, hyperlink means text or a picture on a page that opens another page when clicked."
          ],
          [
            "search engine",
            "a website that keeps an index of other pages and lists those that match the words you type",
            "In this unit, search engine means a website that keeps an index of other pages and lists those that match the words you type."
          ],
          [
            "email",
            "electronic mail: a message sent over the internet from one address to another",
            "In this unit, email means electronic mail: a message sent over the internet from one address to another."
          ],
          [
            "attachment",
            "a file sent along with an email, such as a document or a photograph",
            "In this unit, attachment means a file sent along with an email, such as a document or a photograph."
          ],
          [
            "domain name",
            "the part of a URL that names the site and its type, such as moe.gov.lr",
            "In this unit, domain name means the part of a URL that names the site and its type, such as moe.gov.lr."
          ],
          [
            "source",
            "where a piece of information comes from — the person or organisation that published it",
            "In this unit, source means where a piece of information comes from — the person or organisation that published it."
          ],
          [
            "misinformation",
            "false or misleading information, whether spread deliberately or by mistake",
            "In this unit, misinformation means false or misleading information, whether spread deliberately or by mistake."
          ],
          [
            "HTTPS",
            "the secure version of the web's transfer rules, shown by a padlock, that encrypts the page on its way",
            "In this unit, HTTPS means the secure version of the web's transfer rules, shown by a padlock, that encrypts the page on its way."
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
          "**Internet** — the network; **web** — pages on it; **browser** — the program that shows them; **search engine** — a site that finds them.",
          "**URL** — the whole address; **domain name** — the site part of it (moe.gov.lr).",
          "**.gov.lr** — Liberian government; **.edu** — education; **.com** — commercial; **.org** — organisation.",
          "**To** — the main receiver; **Cc** — a copy for others to see; **Bcc** — a hidden copy.",
          "**Reliable source** — named author, date, evidence, other sources agree; **unreliable** — anonymous, undated, sensational."
        ]
      },
      {
        "k": "table",
        "head": [
          "Part of https://www.moe.gov.lr/exams/2026.pdf",
          "Name",
          "Meaning"
        ],
        "rows": [
          [
            "https://",
            "Scheme (protocol)",
            "Fetch the page securely, with encryption"
          ],
          [
            "www.moe.gov.lr",
            "Domain name (host)",
            "The Ministry of Education's server in Liberia"
          ],
          [
            ".gov.lr",
            "Top-level and country domains",
            "A government site in Liberia"
          ],
          [
            "/exams/",
            "Path (folder)",
            "The folder on the server"
          ],
          [
            "2026.pdf",
            "File name",
            "A PDF document"
          ],
          [
            "Padlock in the browser",
            "Secure connection",
            "The page was not changed on the way"
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
          "Clue on a page",
          "Points to",
          "What to do"
        ],
        "rows": [
          [
            "Named author and organisation, date shown",
            "A more reliable source",
            "Still compare with one other source"
          ],
          [
            "No author, no date, many capital letters",
            "A weak source",
            "Do not repeat it; look for the original"
          ],
          [
            "Asks you to forward to ten friends",
            "A chain message",
            "Do not forward; check an official site"
          ],
          [
            "Promises free money or a prize",
            "A scam",
            "Close it; tell an adult"
          ],
          [
            "Address ends .gov.lr or names a known newspaper",
            "An official or known source",
            "Read carefully; check the date"
          ],
          [
            "Two independent sources say the same",
            "Stronger evidence",
            "Cite both"
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
        "t": "The internet reaches Liberia mainly through phones: WAEC results, university applications, Ministry circulars, job adverts and mobile-money statements now arrive as web pages and emails. So do rumours — about diseases, elections and exam papers — that spread faster than a radio can correct them. A Grade 8 student who can read a URL, tell a search engine from a browser, write an email with a clear subject, and check who wrote a page before forwarding it is protecting her family's money and the country's peace. A class without a connection practises all of this on printed pages and paper emails."
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
        "t": "The class investigation is **“The paper web and the source check”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Give groups six printed 'pages', each with a URL, an author line (or none), a date (or none) and a short claim about exam dates or a health remedy.",
          "Groups read each URL aloud, naming scheme, domain name, top-level domain and path, and predict who owns the site.",
          "For each page they fill a source-check card: author? date? evidence? does another page agree? then rate it reliable, unsure or unreliable.",
          "Each group writes a paper email to the class teacher reporting one unreliable page: a clear subject line, a greeting, three sentences and a named 'attachment'.",
          "If a connection is present, one pair opens the official Ministry or WAEC site and checks one claim while the others watch; otherwise the source cards and paper emails are the finished work."
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
        "t": "**Problem.** A message arrives on a family phone: 'WAEC has moved the exam to next week — forward to ten friends! See http://waec-results-free.com'. Read the URL, list the clues, decide whether to forward, and write the subject line of an email that would check the claim with the school."
      },
      {
        "k": "num",
        "items": [
          "URL: http (not https), domain waec-results-free.com — a .com site with 'free' in the name, not the official examination council domain.",
          "Clues: no author, no date, 'forward to ten friends' (a chain message), an urgent claim about exams.",
          "Decision: do not forward; check the school notice board, the official council site or a teacher.",
          "Email subject: 'Please confirm: has the WAEC exam date changed?' — clear, specific, polite."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** The URL and the chain-message clues mark it as unreliable; do not forward; confirm through the school with an email whose subject names the question."
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
          "Calling the search engine 'the internet' or the browser 'Google'.",
          "Trusting the first result because it is first; position is not evidence.",
          "Forwarding a message because a friend sent it — the friend is not the source.",
          "Sending an email with no subject line, or with everyone's address in To instead of Bcc."
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
        "t": "Safety, Fairness and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN, a one-time code, a home address or a photograph of a classmate. If a message asks for a picture, money or a meeting, the student stops, keeps the message and tells a teacher. Copying another student's work and calling it your own is not collaboration; pair work shares the thinking, not the credit for work you did not do. Unplugged work is complete computing work."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, a scam, a request for a picture or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered, and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
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
        "t": "A Grade 8 student forwards a message to the whole class group claiming a local well is poisoned, the market empties for a day, and the claim turns out to be a joke from an unknown account."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Name the idea — misinformation spreads through forwarding — then agree the class habit: before forwarding, find the original source, check the author and date, look for a second independent source, and, for a health claim, ask the clinic or county health team first."
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
        "t": "Name the idea — misinformation spreads through forwarding — then agree the class habit: before forwarding, find the original source, check the author and date, look for a second independent source, and, for a health claim, ask the clinic or county health team first."
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
        "t": "The investigation **“The paper web and the source check”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
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
            "Printed page with URL",
            "A web page",
            "Its URL parts named and a reliability rating"
          ],
          [
            "Source-check card",
            "The reader's judgement",
            "Author, date, evidence, second source"
          ],
          [
            "Paper email form",
            "An email message",
            "Subject, greeting, body, closing"
          ],
          [
            "Class chart",
            "Rumours the class traced to their origin",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Internet, Web, Browser, Search Engine"
      },
      {
        "k": "p",
        "t": "The internet is the road system. The web is the shops along it. The browser is the car you drive to a shop. A search engine is a directory shop that tells you where other shops are. Email is a postal service on the same roads. Four different things; one sentence each."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Reading a URL Like an Address"
      },
      {
        "k": "p",
        "t": "https:// says how; www.moe.gov.lr says whose server; /exams/ says which folder; 2026.pdf says which file. The domain tells you most about the source: gov.lr is the Liberian government; a long random name with 'free' or 'win' in it usually is not."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Writing an Email an Adult Will Answer"
      },
      {
        "k": "p",
        "t": "Subject: one line that says what the email is about. Greeting: 'Dear Mr Kollie'. Body: three short paragraphs — who you are, what you need, by when. Closing: 'Yours sincerely' and your full name and class. Attachments named clearly. Read it once aloud before sending."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Padlock and HTTPS"
      },
      {
        "k": "p",
        "t": "HTTPS encrypts the page between the server and your browser so no one on the way can read or change it — essential for mobile-money and exam portals. A padlock proves the connection is private; it does not prove the site is honest. A scam site can have a padlock too."
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
        "t": "A fair period test on “The Internet, the Web and Email” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit and use each in a sentence.",
          "Write or trace a four-step algorithm, formula or procedure connected with “The Internet, the Web and Email”, showing every line of working.",
          "Sort four examples using “Signs of a reliable source / Warning signs” and give one reason.",
          "Debug a broken set of steps without blaming the person who wrote them, and say what the bug was."
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
        "t": "A 4-week unit on “The Internet, the Web and Email” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
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
            "What “The Internet, the Web and Email” is, and where it already appears around us.",
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
        "t": "This is original supplementary teaching material for Liberian junior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, internet means the world-wide network of networks that connects computers and phones in every country.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, World Wide Web means the program that fetches and displays web pages, such as Chrome, Firefox or Opera.",
        "a": "False",
        "why": "World Wide Web means the service on the internet made of linked pages that a browser displays; the statement describes browser."
      },
      {
        "s": "In this unit, URL means the address of a web page, such as https://www.moe.gov.lr/exams.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Unplugged work with paper, trace tables and cards is complete computing work; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the instructions, not in the person."
      },
      {
        "s": "Students should share passwords or mobile-money PINs so a partner can finish the work.",
        "a": "False",
        "why": "A password or PIN is secret. Never share a password, PIN, one-time code or personal photograph."
      },
      {
        "s": "The internet is the network; the web is one service that runs on it.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "A search engine checks that every page it lists is true.",
        "a": "False",
        "why": "A search engine only matches words; the reader must judge the source."
      },
      {
        "s": "The domain name in a URL tells you which organisation's server holds the page.",
        "a": "True",
        "why": "moe.gov.lr names the Ministry of Education's site in Liberia."
      }
    ],
    "classify": {
      "title": "Signs of a reliable source / Warning signs",
      "groups": [
        {
          "name": "Signs of a reliable source",
          "items": [
            "named author and organisation",
            "date of publication shown",
            "evidence and references given",
            "address ends .gov.lr or a known institution",
            "a second independent source agrees",
            "corrections are published when wrong"
          ]
        },
        {
          "name": "Warning signs",
          "items": [
            "no author or date",
            "'forward to ten friends'",
            "promises free money or prizes",
            "many capital letters and exclamation marks",
            "asks for a PIN or password",
            "the only source is a friend's forward"
          ]
        }
      ]
    },
    "diagram": {
      "title": "How a web page reaches a browser",
      "caption": "Label each part and state what it does in “The Internet, the Web and Email”.",
      "parts": [
        {
          "p": "Browser",
          "f": "the program that asks for the page and displays it"
        },
        {
          "p": "URL",
          "f": "the address typed or clicked, naming the server and the file"
        },
        {
          "p": "The internet",
          "f": "the network the request and the page travel across"
        },
        {
          "p": "Web server",
          "f": "the computer that stores the page and sends it back"
        },
        {
          "p": "HTTPS padlock",
          "f": "shows the page was encrypted on its way and not changed"
        }
      ]
    },
    "experiment": {
      "title": "The paper web and the source check",
      "aim": "To practise the ideas of “The Internet, the Web and Email” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Paper cards, arrows and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class computing chart",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “The paper web and the source check” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A Grade 8 student forwards a message to the whole class group claiming a local well is poisoned, the market empties for a day, and the claim turns out to be a joke from an unknown account. What should happen next?",
        "a": "Name the idea — misinformation spreads through forwarding — then agree the class habit: before forwarding, find the original source, check the author and date, look for a second independent source, and, for a health claim, ask the clinic or county health team first."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “The Internet, the Web and Email”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's trace gives the wrong answer. What do you say, and why?",
        "a": "Remind the class that a bug is in the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian daily life (a market, a clinic, a radio station, a mobile-money kiosk, a school office).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as mobile money, a clinic record, a radio bulletin, a school register or a market ledger."
      },
      {
        "q": "Write a complete email to your head teacher asking for permission to use the school computer on Saturday: subject, greeting, body, closing.",
        "a": "Accept an email with a specific subject ('Request to use the computer room on Saturday 14 March'), a polite greeting, three short clear paragraphs, and a closing with full name and class."
      },
      {
        "q": "Explain to a younger sibling the difference between the internet, the web and a search engine in three sentences.",
        "a": "The internet is the world-wide network that connects computers; the web is the pages on it that a browser shows; a search engine is a website that helps you find those pages."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “The paper web and the source check” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, paper grids and a paper keyboard",
      "A class computing chart",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's phone, kept dry and in sight"
    ],
    "aids": [
      "Word cards — internet, World Wide Web, browser",
      "A flowchart or trace table of “The paper web and the source check”",
      "Printed 'web pages' with URLs and source-check cards",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing word and what it means.",
      "Practise this week's paper method (a trace, a conversion, a formula or an algorithm) with a sibling or a friend — no device needed.",
      "Find one example of this unit's idea in your community (a market, a clinic, a radio station, a mobile-money kiosk or an office) and write three sentences about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written algorithm, trace table or worked conversion",
      "Pair-debug observed against the class chart",
      "A short written response to the Liberian scenario"
    ],
    "worked": [
      {
        "q": "In https://www.moe.gov.lr/exams/2026.pdf, name the scheme, the domain name and the file.",
        "steps": [
          "Split at :// and /."
        ],
        "a": "https; www.moe.gov.lr; 2026.pdf"
      },
      {
        "q": "Which is the network and which is the service: the internet or the web?",
        "steps": [
          "Roads and shops."
        ],
        "a": "The internet is the network; the web is a service on it"
      },
      {
        "q": "Is Google a browser or a search engine? Is Chrome?",
        "steps": [
          "Finds pages vs shows pages."
        ],
        "a": "Google is a search engine; Chrome is a browser"
      },
      {
        "q": "A page has no author, no date and asks you to forward it. Reliable or not?",
        "steps": [
          "Three warning signs."
        ],
        "a": "Unreliable"
      },
      {
        "q": "You email 30 parents. Where do their addresses go so they do not see each other's?",
        "steps": [
          "Hidden copy."
        ],
        "a": "Bcc"
      },
      {
        "q": "What does the padlock (HTTPS) prove, and what does it not prove?",
        "steps": [
          "Private connection; not honesty."
        ],
        "a": "The connection is encrypted; it does not prove the site is truthful"
      },
      {
        "q": "What does .gov.lr at the end of a domain tell you?",
        "steps": [
          "Type and country."
        ],
        "a": "A government site in Liberia"
      },
      {
        "q": "Two friends forward the same rumour. How many independent sources is that?",
        "steps": [
          "Same origin."
        ],
        "a": "None yet — the origin has not been found"
      }
    ]
  },
  {
    "grade": 8,
    "period": "V",
    "sem": "Two",
    "icon": "🔐",
    "csPlan": true,
    "title": "Information Security and Digital Citizenship",
    "subtitle": "Computer Science · Original junior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Unplugged-first: a class with no computer lab can still complete the unit on paper, and a class with one shared device can extend it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary accurately in speech and writing.",
      "Write, trace and debug an algorithm, a formula or a set of steps connected with the unit — on paper first, on a device when one is available.",
      "Make and justify a safe, honest and lawful choice about devices, data and people online."
    ],
    "objectives": [
      "Explain the key terms in “Information Security and Digital Citizenship” and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm or set of steps connected with this unit, on paper.",
      "Sort examples into the unit's two groups and give a reason for each choice.",
      "Trace a worked example step by step, showing every line of working, and state the answer in a full sentence.",
      "Apply the unit's ideas to a fictional Liberian school, market or office scenario.",
      "Debug a broken set of steps, a formula or a short program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared record of bugs found.",
      "Name one Liberian example of this unit's idea (mobile money, a radio station, a clinic record, a ministry office, a school register or a market stall)."
    ],
    "safeguard": "A junior high computing lesson uses charts, paper models, trace tables and, when a device is present, a shared school machine or the teacher's own phone. Students never share passwords or PINs, never photograph one another without consent, and never post a classmate's image or details. A mobile-money PIN is a secret even from a friend. If a student reports online bullying, a request for a picture, a scam message or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "Information security protects data from being read, changed or destroyed by people who should not. Strong passwords, two-factor authentication, updates, backups and antivirus software are the main defences; phishing, malware and social engineering are the main attacks. Digital citizenship means behaving online with the same respect, honesty and consent as offline, and leaving a digital footprint you can stand behind.",
    "focus": [
      "Unplugged demonstration and paper trace",
      "Pair work and debugging",
      "Liberian scenario",
      "Computing fair check"
    ],
    "terms": [
      {
        "t": "information security",
        "d": "protecting data so that it stays private, correct and available to the people who should have it",
        "x": "In this unit, information security means protecting data so that it stays private, correct and available to the people who should have it."
      },
      {
        "t": "password",
        "d": "a secret string of characters that proves you are the owner of an account",
        "x": "In this unit, password means a secret string of characters that proves you are the owner of an account."
      },
      {
        "t": "two-factor authentication",
        "d": "proving who you are with two different things, such as a password and a code sent to your phone",
        "x": "In this unit, two-factor authentication means proving who you are with two different things, such as a password and a code sent to your phone."
      },
      {
        "t": "phishing",
        "d": "a fake message or website that pretends to be a trusted organisation to trick you into giving a password, PIN or money",
        "x": "In this unit, phishing means a fake message or website that pretends to be a trusted organisation to trick you into giving a password, PIN or money."
      },
      {
        "t": "malware",
        "d": "malicious software — viruses, worms, ransomware, spyware — that damages, steals or locks data",
        "x": "In this unit, malware means malicious software — viruses, worms, ransomware, spyware — that damages, steals or locks data."
      },
      {
        "t": "social engineering",
        "d": "tricking a person, rather than a machine, into giving access or information",
        "x": "In this unit, social engineering means tricking a person, rather than a machine, into giving access or information."
      },
      {
        "t": "PIN",
        "d": "a personal identification number, the secret code that protects a mobile-money wallet or a bank card",
        "x": "In this unit, PIN means a personal identification number, the secret code that protects a mobile-money wallet or a bank card."
      },
      {
        "t": "cyberbullying",
        "d": "using messages, posts or images to threaten, shame or harass a person",
        "x": "In this unit, cyberbullying means using messages, posts or images to threaten, shame or harass a person."
      },
      {
        "t": "digital footprint",
        "d": "the trail of posts, photos, searches and messages a person leaves online, much of which can never be deleted",
        "x": "In this unit, digital footprint means the trail of posts, photos, searches and messages a person leaves online, much of which can never be deleted."
      },
      {
        "t": "consent",
        "d": "clear permission, freely given, before a person's image, words or details are shared",
        "x": "In this unit, consent means clear permission, freely given, before a person's image, words or details are shared."
      },
      {
        "t": "privacy settings",
        "d": "the controls on an account that decide who can see your posts, photos and details",
        "x": "In this unit, privacy settings means the controls on an account that decide who can see your posts, photos and details."
      },
      {
        "t": "update",
        "d": "a new version of software that fixes security holes and bugs; installing it closes doors attackers use",
        "x": "In this unit, update means a new version of software that fixes security holes and bugs; installing it closes doors attackers use."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “information security” in this unit?",
        "a": "protecting data so that it stays private, correct and available to the people who should have it."
      },
      {
        "q": "What is meant by “password” in this unit?",
        "a": "a secret string of characters that proves you are the owner of an account."
      },
      {
        "q": "What is meant by “two-factor authentication” in this unit?",
        "a": "proving who you are with two different things, such as a password and a code sent to your phone."
      },
      {
        "q": "What is meant by “phishing” in this unit?",
        "a": "a fake message or website that pretends to be a trusted organisation to trick you into giving a password, PIN or money."
      },
      {
        "q": "What is meant by “malware” in this unit?",
        "a": "malicious software — viruses, worms, ransomware, spyware — that damages, steals or locks data."
      },
      {
        "q": "What is meant by “social engineering” in this unit?",
        "a": "tricking a person, rather than a machine, into giving access or information."
      },
      {
        "q": "What is meant by “PIN” in this unit?",
        "a": "a personal identification number, the secret code that protects a mobile-money wallet or a bank card."
      },
      {
        "q": "What is meant by “cyberbullying” in this unit?",
        "a": "using messages, posts or images to threaten, shame or harass a person."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A Grade 8 girl's photograph from a school sports day is posted by a classmate with a cruel caption, other students share it, and the girl stops coming to school."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Name the harm — cyberbullying without consent — then act: those who shared it delete their copies, the original poster removes it and apologises in person, a trusted adult keeps one screenshot as evidence, and the class agrees that consent is asked before any photo of a person is posted."
      },
      {
        "q": "State this unit idea in your own words: A strong password is long, unpredictable and never reused; a PIN or one-time code is never shared with anyone.",
        "a": "A strong password is long, unpredictable and never reused; a PIN or one-time code is never shared with anyone."
      },
      {
        "q": "State this unit idea in your own words: Most attacks on ordinary people begin with a message that tricks them, not with a machine being broken into.",
        "a": "Most attacks on ordinary people begin with a message that tricks them, not with a machine being broken into."
      },
      {
        "q": "Give three features of a strong password.",
        "a": "Long (several unrelated words), unpredictable (no names or dates from your life), and never reused across accounts; a symbol and a number help."
      },
      {
        "q": "What is a digital footprint and why does it matter?",
        "a": "The trail of posts, photos, searches and messages a person leaves online; it can be read years later by employers and others and is hard to delete."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Information Security and Digital Citizenship” Is"
      },
      {
        "k": "p",
        "t": "**Information security** keeps data private, correct and available. Its everyday tools are a strong **password**, **two-factor authentication**, updates that close holes, and a habit of suspicion toward **phishing** messages and **malware**. **Digital citizenship** is the other half: consent before a photo is shared, no **cyberbullying**, a **digital footprint** you would be happy for a future employer to read. In Liberia the commonest attack is not a hacker in a film but a text message asking for a mobile-money **PIN**. Students who post a classmate's photograph with a cruel caption and share it onward have committed cyberbullying, whatever they call it. Name the harm — cyberbullying without consent — then act: those who shared it delete their copies, the original poster removes it and apologises in person, a trusted adult keeps one screenshot as evidence, and the class agrees that consent is asked before any photo of a person is posted. A strong password is long, unpredictable and never reused; a PIN or one-time code is never shared with anyone. Most attacks on ordinary people begin with a message that tricks them, not with a machine being broken into."
      },
      {
        "k": "p",
        "t": "Information security protects data from being read, changed or destroyed by people who should not. Strong passwords, two-factor authentication, updates, backups and antivirus software are the main defences; phishing, malware and social engineering are the main attacks. Digital citizenship means behaving online with the same respect, honesty and consent as offline, and leaving a digital footprint you can stand behind."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: A strong password is long, unpredictable and never reused; a PIN or one-time code is never shared with anyone. Most attacks on ordinary people begin with a message that tricks them, not with a machine being broken into."
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
        "t": "Each idea below is a working definition for Grade 8. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
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
            "information security",
            "protecting data so that it stays private, correct and available to the people who should have it",
            "In this unit, information security means protecting data so that it stays private, correct and available to the people who should have it."
          ],
          [
            "password",
            "a secret string of characters that proves you are the owner of an account",
            "In this unit, password means a secret string of characters that proves you are the owner of an account."
          ],
          [
            "two-factor authentication",
            "proving who you are with two different things, such as a password and a code sent to your phone",
            "In this unit, two-factor authentication means proving who you are with two different things, such as a password and a code sent to your phone."
          ],
          [
            "phishing",
            "a fake message or website that pretends to be a trusted organisation to trick you into giving a password, PIN or money",
            "In this unit, phishing means a fake message or website that pretends to be a trusted organisation to trick you into giving a password, PIN or money."
          ],
          [
            "malware",
            "malicious software — viruses, worms, ransomware, spyware — that damages, steals or locks data",
            "In this unit, malware means malicious software — viruses, worms, ransomware, spyware — that damages, steals or locks data."
          ],
          [
            "social engineering",
            "tricking a person, rather than a machine, into giving access or information",
            "In this unit, social engineering means tricking a person, rather than a machine, into giving access or information."
          ],
          [
            "PIN",
            "a personal identification number, the secret code that protects a mobile-money wallet or a bank card",
            "In this unit, PIN means a personal identification number, the secret code that protects a mobile-money wallet or a bank card."
          ],
          [
            "cyberbullying",
            "using messages, posts or images to threaten, shame or harass a person",
            "In this unit, cyberbullying means using messages, posts or images to threaten, shame or harass a person."
          ],
          [
            "digital footprint",
            "the trail of posts, photos, searches and messages a person leaves online, much of which can never be deleted",
            "In this unit, digital footprint means the trail of posts, photos, searches and messages a person leaves online, much of which can never be deleted."
          ],
          [
            "consent",
            "clear permission, freely given, before a person's image, words or details are shared",
            "In this unit, consent means clear permission, freely given, before a person's image, words or details are shared."
          ],
          [
            "privacy settings",
            "the controls on an account that decide who can see your posts, photos and details",
            "In this unit, privacy settings means the controls on an account that decide who can see your posts, photos and details."
          ],
          [
            "update",
            "a new version of software that fixes security holes and bugs; installing it closes doors attackers use",
            "In this unit, update means a new version of software that fixes security holes and bugs; installing it closes doors attackers use."
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
          "**Attack** — phishing, malware, social engineering, a guessed password; **defence** — strong password, two factors, updates, backup, suspicion.",
          "**Password** proves who you are; **PIN** protects money; neither is ever shared, even with an agent who 'needs it to help'.",
          "**Private** — only people you chose can see; **public** — anyone, forever, including employers.",
          "**Consent** is asked before, not apologised for after.",
          "**Report and keep the evidence**; do not reply, do not delete, do not forward."
        ]
      },
      {
        "k": "table",
        "head": [
          "Message received",
          "Attack type",
          "Correct response"
        ],
        "rows": [
          [
            "'Your mobile-money account is blocked. Send your PIN to unblock.'",
            "Phishing / social engineering",
            "Never send a PIN; call the official line; tell an adult."
          ],
          [
            "'You have won LRD 50,000. Pay LRD 500 to claim.'",
            "Advance-fee scam",
            "Delete; no genuine prize asks for payment."
          ],
          [
            "A free game download that asks to read all your messages",
            "Malware / spyware",
            "Do not install; check the permissions."
          ],
          [
            "'This is your teacher, send me your password to fix your account.'",
            "Impersonation",
            "Teachers never ask for passwords; check in person."
          ],
          [
            "A link 'see who viewed your profile' from an unknown number",
            "Phishing link",
            "Do not click; block and report."
          ],
          [
            "A friend's account sending odd messages asking for money",
            "Hijacked account",
            "Call the friend; do not send money."
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
          "Password",
          "Strong or weak?",
          "Why"
        ],
        "rows": [
          [
            "123456",
            "Weak",
            "The most common password in the world."
          ],
          [
            "monrovia2010",
            "Weak",
            "A place and a year; easily guessed from your profile."
          ],
          [
            "Blessing",
            "Weak",
            "A name, short, in a dictionary."
          ],
          [
            "red-pepper-radio-42!",
            "Strong",
            "Long, several unrelated words, symbols, easy to remember."
          ],
          [
            "Xk7$pQ2m!vB9",
            "Strong",
            "Long and unpredictable — but keep it in a safe place, not on the phone's screen."
          ],
          [
            "Same password on every site",
            "Weak in practice",
            "One leak opens every account."
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
        "t": "Mobile money moves more cash in Liberia each day than many bank branches, and every wallet is guarded by a four-digit PIN — which is exactly what scam texts, fake 'agents' and friendly strangers ask for. Phones are shared in families, passwords are written on the back of the SIM pack, and a photo posted from a school event can travel to a stranger in minutes. A Grade 8 student who keeps her PIN secret even from a boyfriend, sets her privacy to friends only, asks before posting a classmate's photo and reports a threatening message to a trusted adult is practising security that protects money, dignity and safety."
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
        "t": "The class investigation is **“The scam-or-safe sorting court”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Give each pair twelve message cards — some real-looking scams (PIN requests, prizes, blocked accounts), some genuine notices (a school circular, a bank statement alert with no link).",
          "Pairs sort them into scam and safe, writing one unit term as the reason on each card (phishing, social engineering, impersonation, genuine).",
          "The class holds a 'court': one pair prosecutes a card, another defends it, and the class votes; the teacher reveals the clues that decide it.",
          "Pairs then write a strong password rule sheet (three unrelated words, a number and a symbol, never reused) and a class consent rule for photos.",
          "If a device is present, one pair opens the privacy settings of a class account and sets them to friends only while the others check each option; otherwise the sorted cards and the rule sheets are the finished work."
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
        "t": "**Problem.** A student receives a text: 'Dear customer, your mobile-money wallet will be closed today. Reply with your PIN and ID number to keep it open. — Customer Care.' She is about to reply. Identify the attack, list three clues, state the correct response, and say what she should do with the message."
      },
      {
        "k": "num",
        "items": [
          "Attack: phishing by social engineering — a message pretending to be the provider.",
          "Clues: it asks for the PIN (no genuine provider ever does), it creates urgency ('today'), it comes from an ordinary number rather than the provider's short code, and 'Dear customer' names no one.",
          "Response: do not reply; call the provider's official line or visit an agent in person; tell a parent or teacher.",
          "Evidence: keep the message unaltered (do not delete), block the number, and report it to the provider and the school."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** It is a phishing text; the PIN request, urgency and unknown number give it away; she must not reply, must check through the official line, and must keep and report the message."
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
          "Believing a PIN can be shared 'just this once' with an agent, a relative or a partner.",
          "Using the same short password everywhere, so one leak opens every account.",
          "Deleting a threatening message instead of keeping it as evidence.",
          "Posting a classmate's photo first and asking permission afterwards."
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
        "t": "Safety, Fairness and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN, a one-time code, a home address or a photograph of a classmate. If a message asks for a picture, money or a meeting, the student stops, keeps the message and tells a teacher. Copying another student's work and calling it your own is not collaboration; pair work shares the thinking, not the credit for work you did not do. Unplugged work is complete computing work."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, a scam, a request for a picture or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered, and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
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
        "t": "A Grade 8 girl's photograph from a school sports day is posted by a classmate with a cruel caption, other students share it, and the girl stops coming to school."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Name the harm — cyberbullying without consent — then act: those who shared it delete their copies, the original poster removes it and apologises in person, a trusted adult keeps one screenshot as evidence, and the class agrees that consent is asked before any photo of a person is posted."
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
        "t": "Name the harm — cyberbullying without consent — then act: those who shared it delete their copies, the original poster removes it and apologises in person, a trusted adult keeps one screenshot as evidence, and the class agrees that consent is asked before any photo of a person is posted."
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
        "t": "The investigation **“The scam-or-safe sorting court”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
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
            "Message cards",
            "Texts and posts a phone receives",
            "Each card sorted and labelled with its attack or 'genuine'"
          ],
          [
            "Password rule sheet",
            "The account's first lock",
            "Three unrelated words, a number, a symbol, never reused"
          ],
          [
            "Consent rule",
            "Respect for classmates",
            "One sentence the class signs"
          ],
          [
            "Class chart",
            "Scams the class identified",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Three Words Beat One Clever One"
      },
      {
        "k": "p",
        "t": "Attackers guess millions of passwords a second, starting with names, dates and dictionary words. Three unrelated words with a number and a symbol — red-pepper-radio-42! — take longer to guess than any single word with a capital letter, and you can remember them. Different accounts get different words."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Two Factors: Something You Know and Something You Have"
      },
      {
        "k": "p",
        "t": "A password can be stolen without your knowing. A code sent to your phone, or an app that generates one, is a second lock that a thief far away does not have. Switch it on for email and mobile money, and never read a one-time code aloud to anyone."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Your Footprint Is a Reference You Did Not Write"
      },
      {
        "k": "p",
        "t": "Employers, scholarship boards and future in-laws search names. A post made in anger at fourteen can be read at twenty-four. Before posting, ask: would I say this to the person's face, in front of my mother, and would I want it on the school notice board?"
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Reporting Is Not Snitching"
      },
      {
        "k": "p",
        "t": "A threatening message, a request for photos, a fake account in your name: keep the evidence, do not reply, tell a trusted adult the same day. Adults and providers can act only on what they see. Silence protects the attacker, not the friend."
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
        "t": "A fair period test on “Information Security and Digital Citizenship” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit and use each in a sentence.",
          "Write or trace a four-step algorithm, formula or procedure connected with “Information Security and Digital Citizenship”, showing every line of working.",
          "Sort four examples using “Defences / Attacks and risks” and give one reason.",
          "Debug a broken set of steps without blaming the person who wrote them, and say what the bug was."
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
        "t": "A 4-week unit on “Information Security and Digital Citizenship” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
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
            "What “Information Security and Digital Citizenship” is, and where it already appears around us.",
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
        "t": "This is original supplementary teaching material for Liberian junior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, information security means protecting data so that it stays private, correct and available to the people who should have it.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, password means proving who you are with two different things, such as a password and a code sent to your phone.",
        "a": "False",
        "why": "password means a secret string of characters that proves you are the owner of an account; the statement describes two-factor authentication."
      },
      {
        "s": "In this unit, phishing means a fake message or website that pretends to be a trusted organisation to trick you into giving a password, PIN or money.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Unplugged work with paper, trace tables and cards is complete computing work; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the instructions, not in the person."
      },
      {
        "s": "Students should share passwords or mobile-money PINs so a partner can finish the work.",
        "a": "False",
        "why": "A password or PIN is secret. Never share a password, PIN, one-time code or personal photograph."
      },
      {
        "s": "A strong password is long, unpredictable and never reused; a PIN or one-time code is never shared with anyone.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "A mobile-money agent sometimes needs your PIN to help you, so it is safe to tell an agent.",
        "a": "False",
        "why": "No agent or provider ever needs your PIN; anyone asking for it is attacking your wallet."
      },
      {
        "s": "A threatening message should be kept as evidence, not deleted.",
        "a": "True",
        "why": "Adults and providers can act only on evidence they can see."
      }
    ],
    "classify": {
      "title": "Defences / Attacks and risks",
      "groups": [
        {
          "name": "Defences",
          "items": [
            "a long password of three unrelated words",
            "two-factor authentication",
            "installing updates",
            "backing up files",
            "privacy set to friends only",
            "keeping a scam message as evidence and reporting it"
          ]
        },
        {
          "name": "Attacks and risks",
          "items": [
            "phishing text asking for a PIN",
            "malware in a free download",
            "a stranger asking for photos",
            "the same password on every site",
            "posting a friend's photo without consent",
            "a 'blocked account' message with a link"
          ]
        }
      ]
    },
    "diagram": {
      "title": "The layers that protect an account",
      "caption": "Label each part and state what it does in “Information Security and Digital Citizenship”.",
      "parts": [
        {
          "p": "Strong password",
          "f": "long, unpredictable, never reused"
        },
        {
          "p": "Two-factor authentication",
          "f": "a second lock — a code on your phone — that a thief does not have"
        },
        {
          "p": "Updates and antivirus",
          "f": "close the holes malware uses"
        },
        {
          "p": "Privacy settings",
          "f": "decide who can see posts and photos"
        },
        {
          "p": "Suspicion and reporting",
          "f": "the human layer that stops phishing and social engineering"
        }
      ]
    },
    "experiment": {
      "title": "The scam-or-safe sorting court",
      "aim": "To practise the ideas of “Information Security and Digital Citizenship” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Paper cards, arrows and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class computing chart",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “The scam-or-safe sorting court” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A Grade 8 girl's photograph from a school sports day is posted by a classmate with a cruel caption, other students share it, and the girl stops coming to school. What should happen next?",
        "a": "Name the harm — cyberbullying without consent — then act: those who shared it delete their copies, the original poster removes it and apologises in person, a trusted adult keeps one screenshot as evidence, and the class agrees that consent is asked before any photo of a person is posted."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Information Security and Digital Citizenship”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's trace gives the wrong answer. What do you say, and why?",
        "a": "Remind the class that a bug is in the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian daily life (a market, a clinic, a radio station, a mobile-money kiosk, a school office).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as mobile money, a clinic record, a radio bulletin, a school register or a market ledger."
      },
      {
        "q": "Write three rules for a family that shares one phone with a mobile-money wallet.",
        "a": "For example: the PIN is known only to the wallet owner and is never typed while someone watches; no one replies to messages asking for the PIN or a code; the phone has a screen lock and the owner checks the balance after anyone else uses it."
      },
      {
        "q": "A younger cousin wants to post a video of a classmate falling over 'because it is funny'. What do you tell her, using two unit terms?",
        "a": "It needs the classmate's consent and it could become cyberbullying; the video would also stay in both their digital footprints, so do not post it."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “The scam-or-safe sorting court” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, paper grids and a paper keyboard",
      "A class computing chart",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's phone, kept dry and in sight"
    ],
    "aids": [
      "Word cards — information security, password, two-factor authentication",
      "A flowchart or trace table of “The scam-or-safe sorting court”",
      "Scam-or-safe message cards and a strong-password rule sheet",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing word and what it means.",
      "Practise this week's paper method (a trace, a conversion, a formula or an algorithm) with a sibling or a friend — no device needed.",
      "Find one example of this unit's idea in your community (a market, a clinic, a radio station, a mobile-money kiosk or an office) and write three sentences about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written algorithm, trace table or worked conversion",
      "Pair-debug observed against the class chart",
      "A short written response to the Liberian scenario"
    ],
    "worked": [
      {
        "q": "Is 'monrovia2010' a strong password? Give the reason.",
        "steps": [
          "A place and a year, guessable from a profile."
        ],
        "a": "No — it is predictable"
      },
      {
        "q": "Name the two 'factors' in two-factor authentication.",
        "steps": [
          "Know + have."
        ],
        "a": "Something you know (password) and something you have (phone code)"
      },
      {
        "q": "A text asks for your mobile-money PIN to 'unblock' the wallet. Which attack is this and what is the reply?",
        "steps": [
          "Impersonation to steal money."
        ],
        "a": "Phishing; no reply — call the official line"
      },
      {
        "q": "How many accounts are exposed when one password is reused on five sites and one site leaks it?",
        "steps": [
          "Same key, five doors."
        ],
        "a": "All five"
      },
      {
        "q": "A threatening message arrives. List the three steps in order.",
        "steps": [
          "Evidence, no reply, adult."
        ],
        "a": "Keep it (screenshot), do not reply, tell a trusted adult the same day"
      },
      {
        "q": "Before posting a friend's photo, what one thing must happen?",
        "steps": [
          "Permission first."
        ],
        "a": "Ask for and receive consent"
      },
      {
        "q": "A password is 4 digits long. How many possible PINs are there, and why is that weak?",
        "steps": [
          "10 × 10 × 10 × 10."
        ],
        "a": "10,000 — a small number to guess, so it must never be shared or written on the phone"
      },
      {
        "q": "Which is safer for a bank alert: a message with a link to 'log in now', or one that tells you to open the app yourself? Why?",
        "steps": [
          "Links can lead to fake pages."
        ],
        "a": "The one without a link; phishing uses links to fake sites"
      }
    ]
  },
  {
    "grade": 8,
    "period": "VI",
    "sem": "Two",
    "icon": "💾",
    "csPlan": true,
    "title": "First Programs — Variables, Input and Output",
    "subtitle": "Computer Science · Original junior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Unplugged-first: a class with no computer lab can still complete the unit on paper, and a class with one shared device can extend it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary accurately in speech and writing.",
      "Write, trace and debug an algorithm, a formula or a set of steps connected with the unit — on paper first, on a device when one is available.",
      "Make and justify a safe, honest and lawful choice about devices, data and people online."
    ],
    "objectives": [
      "Explain the key terms in “First Programs — Variables, Input and Output” and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm or set of steps connected with this unit, on paper.",
      "Sort examples into the unit's two groups and give a reason for each choice.",
      "Trace a worked example step by step, showing every line of working, and state the answer in a full sentence.",
      "Apply the unit's ideas to a fictional Liberian school, market or office scenario.",
      "Debug a broken set of steps, a formula or a short program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared record of bugs found.",
      "Name one Liberian example of this unit's idea (mobile money, a radio station, a clinic record, a ministry office, a school register or a market stall)."
    ],
    "safeguard": "A junior high computing lesson uses charts, paper models, trace tables and, when a device is present, a shared school machine or the teacher's own phone. Students never share passwords or PINs, never photograph one another without consent, and never post a classmate's image or details. A mobile-money PIN is a secret even from a friend. If a student reports online bullying, a request for a picture, a scam message or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "A program is an algorithm written in a programming language. Variables hold values that can change; assignment (name = value) stores a value; input reads a value from the user and output displays a result. Every value has a data type — integer, float, string or boolean — and arithmetic follows the usual order of operations. A program is tested by tracing it on paper with sample inputs.",
    "focus": [
      "Unplugged demonstration and paper trace",
      "Pair work and debugging",
      "Liberian scenario",
      "Computing fair check"
    ],
    "terms": [
      {
        "t": "program",
        "d": "an algorithm written in a programming language so that a computer can run it",
        "x": "In this unit, program means an algorithm written in a programming language so that a computer can run it."
      },
      {
        "t": "programming language",
        "d": "a language with strict rules, such as Python or Scratch, in which programs are written",
        "x": "In this unit, programming language means a language with strict rules, such as Python or Scratch, in which programs are written."
      },
      {
        "t": "variable",
        "d": "a named place in memory that holds a value which can change while the program runs",
        "x": "In this unit, variable means a named place in memory that holds a value which can change while the program runs."
      },
      {
        "t": "assignment",
        "d": "storing a value in a variable, written name = value, as in total = 0",
        "x": "In this unit, assignment means storing a value in a variable, written name = value, as in total = 0."
      },
      {
        "t": "input",
        "d": "taking a value from the user, usually typed at the keyboard, and storing it in a variable",
        "x": "In this unit, input means taking a value from the user, usually typed at the keyboard, and storing it in a variable."
      },
      {
        "t": "output",
        "d": "displaying a value or message to the user, as in print(total)",
        "x": "In this unit, output means displaying a value or message to the user, as in print(total)."
      },
      {
        "t": "data type",
        "d": "the kind of value a variable holds: integer, float, string or boolean",
        "x": "In this unit, data type means the kind of value a variable holds: integer, float, string or boolean."
      },
      {
        "t": "integer",
        "d": "a whole number with no decimal part, such as 3 or -12",
        "x": "In this unit, integer means a whole number with no decimal part, such as 3 or -12."
      },
      {
        "t": "float",
        "d": "a number with a decimal part, such as 37.5 or 2.0",
        "x": "In this unit, float means a number with a decimal part, such as 37.5 or 2.0."
      },
      {
        "t": "string",
        "d": "a piece of text inside quotation marks, such as \"Hello\" or \"Grade 8\"",
        "x": "In this unit, string means a piece of text inside quotation marks, such as \"Hello\" or \"Grade 8\"."
      },
      {
        "t": "syntax error",
        "d": "a mistake in the spelling or punctuation of the code, so the program cannot run at all",
        "x": "In this unit, syntax error means a mistake in the spelling or punctuation of the code, so the program cannot run at all."
      },
      {
        "t": "logic error",
        "d": "a mistake in the plan of the program, so it runs but gives the wrong answer",
        "x": "In this unit, logic error means a mistake in the plan of the program, so it runs but gives the wrong answer."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “program” in this unit?",
        "a": "an algorithm written in a programming language so that a computer can run it."
      },
      {
        "q": "What is meant by “programming language” in this unit?",
        "a": "a language with strict rules, such as Python or Scratch, in which programs are written."
      },
      {
        "q": "What is meant by “variable” in this unit?",
        "a": "a named place in memory that holds a value which can change while the program runs."
      },
      {
        "q": "What is meant by “assignment” in this unit?",
        "a": "storing a value in a variable, written name = value, as in total = 0."
      },
      {
        "q": "What is meant by “input” in this unit?",
        "a": "taking a value from the user, usually typed at the keyboard, and storing it in a variable."
      },
      {
        "q": "What is meant by “output” in this unit?",
        "a": "displaying a value or message to the user, as in print(total)."
      },
      {
        "q": "What is meant by “data type” in this unit?",
        "a": "the kind of value a variable holds: integer, float, string or boolean."
      },
      {
        "q": "What is meant by “integer” in this unit?",
        "a": "a whole number with no decimal part, such as 3 or -12."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A Grade 8 pair's change calculator prints 'Change: -1500' when a customer pays exactly the right amount, and they insist the computer is wrong."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Trace the line change = total - paid with paid equal to total: the result should be 0, so the subtraction is the wrong way round; rewrite it as change = paid - total, retrace with three inputs, and add a message when change is negative because the customer has not paid enough."
      },
      {
        "q": "State this unit idea in your own words: A variable is a named place in memory that holds one value at a time; assignment replaces the old value with a new one.",
        "a": "A variable is a named place in memory that holds one value at a time; assignment replaces the old value with a new one."
      },
      {
        "q": "State this unit idea in your own words: Every value in a program has a data type — integer, float, string or boolean — and the type decides what can be done with it.",
        "a": "Every value in a program has a data type — integer, float, string or boolean — and the type decides what can be done with it."
      },
      {
        "q": "What is the difference between a syntax error and a logic error?",
        "a": "A syntax error breaks the rules of the language so the program cannot run; a logic error lets the program run but gives a wrong result."
      },
      {
        "q": "Why is input converted with int() or float() before arithmetic?",
        "a": "Because input() gives a string (text); int() or float() turns it into a number that can be calculated with."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “First Programs — Variables, Input and Output” Is"
      },
      {
        "k": "p",
        "t": "A **program** is an algorithm written in a language a computer can run. Its first tools are **variables** — named boxes that hold values — with an **assignment** that puts a value in, **input** that takes a value from the user, and **output** that displays a result. Values have **data types**: an **integer** for counting, a **float** for measuring, a **string** for text. Written in Python-style pseudocode and traced by hand, the first programs of Grade 8 are a change calculator and a fever check for a market and a clinic. Students who blame the computer when their change calculator prints a negative number for an exact payment have a logic error in the subtraction. Trace the line change = total - paid with paid equal to total: the result should be 0, so the subtraction is the wrong way round; rewrite it as change = paid - total, retrace with three inputs, and add a message when change is negative because the customer has not paid enough. A variable is a named place in memory that holds one value at a time; assignment replaces the old value with a new one. Every value in a program has a data type — integer, float, string or boolean — and the type decides what can be done with it."
      },
      {
        "k": "p",
        "t": "A program is an algorithm written in a programming language. Variables hold values that can change; assignment (name = value) stores a value; input reads a value from the user and output displays a result. Every value has a data type — integer, float, string or boolean — and arithmetic follows the usual order of operations. A program is tested by tracing it on paper with sample inputs."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: A variable is a named place in memory that holds one value at a time; assignment replaces the old value with a new one. Every value in a program has a data type — integer, float, string or boolean — and the type decides what can be done with it."
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
        "t": "Each idea below is a working definition for Grade 8. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
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
            "program",
            "an algorithm written in a programming language so that a computer can run it",
            "In this unit, program means an algorithm written in a programming language so that a computer can run it."
          ],
          [
            "programming language",
            "a language with strict rules, such as Python or Scratch, in which programs are written",
            "In this unit, programming language means a language with strict rules, such as Python or Scratch, in which programs are written."
          ],
          [
            "variable",
            "a named place in memory that holds a value which can change while the program runs",
            "In this unit, variable means a named place in memory that holds a value which can change while the program runs."
          ],
          [
            "assignment",
            "storing a value in a variable, written name = value, as in total = 0",
            "In this unit, assignment means storing a value in a variable, written name = value, as in total = 0."
          ],
          [
            "input",
            "taking a value from the user, usually typed at the keyboard, and storing it in a variable",
            "In this unit, input means taking a value from the user, usually typed at the keyboard, and storing it in a variable."
          ],
          [
            "output",
            "displaying a value or message to the user, as in print(total)",
            "In this unit, output means displaying a value or message to the user, as in print(total)."
          ],
          [
            "data type",
            "the kind of value a variable holds: integer, float, string or boolean",
            "In this unit, data type means the kind of value a variable holds: integer, float, string or boolean."
          ],
          [
            "integer",
            "a whole number with no decimal part, such as 3 or -12",
            "In this unit, integer means a whole number with no decimal part, such as 3 or -12."
          ],
          [
            "float",
            "a number with a decimal part, such as 37.5 or 2.0",
            "In this unit, float means a number with a decimal part, such as 37.5 or 2.0."
          ],
          [
            "string",
            "a piece of text inside quotation marks, such as \"Hello\" or \"Grade 8\"",
            "In this unit, string means a piece of text inside quotation marks, such as \"Hello\" or \"Grade 8\"."
          ],
          [
            "syntax error",
            "a mistake in the spelling or punctuation of the code, so the program cannot run at all",
            "In this unit, syntax error means a mistake in the spelling or punctuation of the code, so the program cannot run at all."
          ],
          [
            "logic error",
            "a mistake in the plan of the program, so it runs but gives the wrong answer",
            "In this unit, logic error means a mistake in the plan of the program, so it runs but gives the wrong answer."
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
          "**Assignment** total = 0 stores; **comparison** total == 0 asks — one equals sign stores, two ask.",
          "**Integer** 3 counts; **float** 3.0 measures; **string** \"3\" is text and cannot be added to a number until converted.",
          "**Input** comes in as a string; **int()** or **float()** converts it before arithmetic.",
          "**Syntax error** — the program will not start; **logic error** — it runs and is wrong.",
          "**Variable name** describes the value: price, not p; total_cost, not x."
        ]
      },
      {
        "k": "table",
        "head": [
          "Value",
          "Data type",
          "Why"
        ],
        "rows": [
          [
            "3",
            "Integer",
            "A whole number."
          ],
          [
            "37.5",
            "Float",
            "It has a decimal part."
          ],
          [
            "\"Monrovia\"",
            "String",
            "Text in quotation marks."
          ],
          [
            "\"3\"",
            "String",
            "Quotation marks make it text, even though it looks like a number."
          ],
          [
            "True",
            "Boolean",
            "One of the two values True and False."
          ],
          [
            "4500 * 3",
            "Integer (13500)",
            "Whole numbers multiplied give a whole number."
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
          "Line of code",
          "What happens",
          "Value afterwards"
        ],
        "rows": [
          [
            "price = 4500",
            "Assignment: 4500 is stored in price",
            "price = 4500"
          ],
          [
            "qty = int(input(\"How many? \"))",
            "Input read as text, converted to an integer, stored",
            "qty = whatever was typed, as a number"
          ],
          [
            "total = price * qty",
            "The right side is worked first, then stored",
            "total = 13500 if qty was 3"
          ],
          [
            "total = total + 250",
            "The old total plus 250 replaces the old total",
            "total = 13750"
          ],
          [
            "print(\"Total:\", total)",
            "Output to the screen",
            "Screen shows Total: 13750"
          ],
          [
            "name = input(\"Name? \")",
            "Text read and stored as a string",
            "name = the typed text"
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
        "t": "A market change calculator, a clinic fever check and a school average are the first programs Liberian students should write, because the trace can be checked against a real day's trading, a real thermometer and a real mark sheet. Python is free, runs on old laptops and on phones, and reads almost like English; but the skill that matters — naming a variable, choosing a type, tracing every line with sample inputs — is done on paper and needs no machine. A student who traces her change calculator correctly before typing it has debugged it in the cheapest possible place."
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
        "t": "The class investigation is **“The change calculator, traced by hand”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Write the program on the board: price = 4500; qty = int(input(\"How many? \")); total = price * qty; paid = int(input(\"Paid? \")); change = paid - total; print(\"Change:\", change).",
          "Pairs rule a trace table with columns price, qty, total, paid, change and a column for output, and trace with inputs 3 and 15000, writing one row per line.",
          "They trace again with inputs 2 and 9000 and check the change is 0; then with 4 and 15000 and discuss what a negative change means and how the program should respond.",
          "The navigator introduces one syntax error (a missing bracket) and one logic error (change = total - paid) and the driver must classify and fix each.",
          "If a computer or phone with Python is present, one pair types and runs the program with the same inputs and compares the screen with the trace table; otherwise the trace tables are the finished work."
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
        "t": "**Problem.** Trace this program with the inputs 38.2 and then 36.9: temp = float(input(\"Temperature? \")); limit = 37.5; print(\"Temperature:\", temp); print(\"Fever:\", temp >= limit). State the data type of temp and of the value printed after \"Fever:\"."
      },
      {
        "k": "num",
        "items": [
          "Line 1: input '38.2' is text; float() converts it; temp = 38.2 (a float).",
          "Line 2: limit = 37.5 (a float).",
          "Line 3: output Temperature: 38.2.",
          "Line 4: 38.2 >= 37.5 is True; output Fever: True — a boolean.",
          "Second run: temp = 36.9; 36.9 >= 37.5 is False; output Fever: False."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** temp is a float; the fever value is a boolean — True for 38.2 and False for 36.9."
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
          "Using = to ask a question and == to store, or forgetting that = stores the right-hand side into the left.",
          "Adding input straight to a number: input gives a string, so \"3\" + 2 is an error until int() is used.",
          "Naming variables a, b, x so that the trace cannot be read a week later.",
          "Fixing a syntax error and assuming the program is now correct — a logic error still runs."
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
        "t": "Safety, Fairness and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN, a one-time code, a home address or a photograph of a classmate. If a message asks for a picture, money or a meeting, the student stops, keeps the message and tells a teacher. Copying another student's work and calling it your own is not collaboration; pair work shares the thinking, not the credit for work you did not do. Unplugged work is complete computing work."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, a scam, a request for a picture or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered, and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
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
        "t": "A Grade 8 pair's change calculator prints 'Change: -1500' when a customer pays exactly the right amount, and they insist the computer is wrong."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Trace the line change = total - paid with paid equal to total: the result should be 0, so the subtraction is the wrong way round; rewrite it as change = paid - total, retrace with three inputs, and add a message when change is negative because the customer has not paid enough."
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
        "t": "Trace the line change = total - paid with paid equal to total: the result should be 0, so the subtraction is the wrong way round; rewrite it as change = paid - total, retrace with three inputs, and add a message when change is negative because the customer has not paid enough."
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
        "t": "The investigation **“The change calculator, traced by hand”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
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
            "Trace table",
            "The variables' boxes after every line",
            "The finished trace with the output column"
          ],
          [
            "Printed listing",
            "The program",
            "Each line numbered and read aloud"
          ],
          [
            "Input cards",
            "What the user types",
            "One trace per card"
          ],
          [
            "Class chart",
            "Bugs the class found (missing int(), reversed subtraction)",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "A Variable Is a Labelled Box"
      },
      {
        "k": "p",
        "t": "price = 4500 writes 4500 on a slip and puts it in the box labelled price. total = price * qty reads two boxes, multiplies, and puts the answer in the box labelled total. total = total + 250 reads total, adds 250, and puts the new slip back — the old slip is gone. Draw the boxes when a trace goes wrong."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why Types Matter"
      },
      {
        "k": "p",
        "t": "\"3\" + \"2\" is \"32\" (text joined); 3 + 2 is 5 (numbers added); \"3\" + 2 is an error. Input always arrives as a string, so a program that does arithmetic on it must convert with int() or float() first. Half of Grade 8's runtime errors are this one."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Read the Error Message"
      },
      {
        "k": "p",
        "t": "A syntax error message names the line and often the missing bracket or quotation mark. Read it before asking a partner. A program with no error message can still be wrong — only a trace with known inputs finds a logic error."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Name Things Honestly"
      },
      {
        "k": "p",
        "t": "unit_price, quantity, total_cost, amount_paid, change_due. A well-named program can be read by the next student without the author present, which is the whole test of whether a program is finished."
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
        "t": "A fair period test on “First Programs — Variables, Input and Output” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit and use each in a sentence.",
          "Write or trace a four-step algorithm, formula or procedure connected with “First Programs — Variables, Input and Output”, showing every line of working.",
          "Sort four examples using “Integers and floats (numbers) / Strings and booleans” and give one reason.",
          "Debug a broken set of steps without blaming the person who wrote them, and say what the bug was."
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
        "t": "A 4-week unit on “First Programs — Variables, Input and Output” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
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
            "What “First Programs — Variables, Input and Output” is, and where it already appears around us.",
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
        "t": "This is original supplementary teaching material for Liberian junior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, program means an algorithm written in a programming language so that a computer can run it.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, programming language means a named place in memory that holds a value which can change while the program runs.",
        "a": "False",
        "why": "programming language means a language with strict rules, such as Python or Scratch, in which programs are written; the statement describes variable."
      },
      {
        "s": "In this unit, assignment means storing a value in a variable, written name = value, as in total = 0.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Unplugged work with paper, trace tables and cards is complete computing work; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the instructions, not in the person."
      },
      {
        "s": "Students should share passwords or mobile-money PINs so a partner can finish the work.",
        "a": "False",
        "why": "A password or PIN is secret. Never share a password, PIN, one-time code or personal photograph."
      },
      {
        "s": "A variable is a named place in memory that holds one value at a time; assignment replaces the old value with a new one.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "In Python, a single = sign stores a value in a variable.",
        "a": "True",
        "why": "= is assignment; == is the comparison that asks whether two values are equal."
      },
      {
        "s": "A value read with input() can be multiplied straight away because it is a number.",
        "a": "False",
        "why": "input() returns a string; it must be converted with int() or float() before arithmetic."
      }
    ],
    "classify": {
      "title": "Integers and floats (numbers) / Strings and booleans",
      "groups": [
        {
          "name": "Integers and floats (numbers)",
          "items": [
            "3",
            "-12",
            "37.5",
            "4500",
            "2.0",
            "price * qty"
          ]
        },
        {
          "name": "Strings and booleans",
          "items": [
            "\"Monrovia\"",
            "\"3\"",
            "\"Grade 8\"",
            "True",
            "False",
            "input(\"Name? \")"
          ]
        }
      ]
    },
    "diagram": {
      "title": "Memory boxes during a program trace",
      "caption": "Label each part and state what it does in “First Programs — Variables, Input and Output”.",
      "parts": [
        {
          "p": "price",
          "f": "a variable holding the unit price, an integer such as 4500"
        },
        {
          "p": "qty",
          "f": "a variable holding the quantity typed by the user, converted with int()"
        },
        {
          "p": "total",
          "f": "price * qty, worked on the right and stored on the left"
        },
        {
          "p": "paid",
          "f": "the amount the customer gave, read by input()"
        },
        {
          "p": "change",
          "f": "paid - total, printed as output"
        }
      ]
    },
    "experiment": {
      "title": "The change calculator, traced by hand",
      "aim": "To practise the ideas of “First Programs — Variables, Input and Output” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Paper cards, arrows and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class computing chart",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “The change calculator, traced by hand” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A Grade 8 pair's change calculator prints 'Change: -1500' when a customer pays exactly the right amount, and they insist the computer is wrong. What should happen next?",
        "a": "Trace the line change = total - paid with paid equal to total: the result should be 0, so the subtraction is the wrong way round; rewrite it as change = paid - total, retrace with three inputs, and add a message when change is negative because the customer has not paid enough."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “First Programs — Variables, Input and Output”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's trace gives the wrong answer. What do you say, and why?",
        "a": "Remind the class that a bug is in the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian daily life (a market, a clinic, a radio station, a mobile-money kiosk, a school office).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as mobile money, a clinic record, a radio bulletin, a school register or a market ledger."
      },
      {
        "q": "Write a short program (pseudocode or Python) that reads three marks, stores their average in a variable named average, and prints it. Trace it with 60, 70 and 80.",
        "a": "m1 = float(input()); m2 = float(input()); m3 = float(input()); average = (m1 + m2 + m3) / 3; print(average) — trace gives (60 + 70 + 80) / 3 = 70.0."
      },
      {
        "q": "A program reads a quantity with qty = input(\"How many? \") and then computes price * qty, and prints '450045004500' for the input 3. Explain the bug and fix it.",
        "a": "qty is a string, so multiplying repeats the text; convert with qty = int(input(\"How many? \")) so the arithmetic gives 13500."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “The change calculator, traced by hand” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, paper grids and a paper keyboard",
      "A class computing chart",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's phone, kept dry and in sight"
    ],
    "aids": [
      "Word cards — program, programming language, variable",
      "A flowchart or trace table of “The change calculator, traced by hand”",
      "Printed program listings and blank trace tables",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing word and what it means.",
      "Practise this week's paper method (a trace, a conversion, a formula or an algorithm) with a sibling or a friend — no device needed.",
      "Find one example of this unit's idea in your community (a market, a clinic, a radio station, a mobile-money kiosk or an office) and write three sentences about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written algorithm, trace table or worked conversion",
      "Pair-debug observed against the class chart",
      "A short written response to the Liberian scenario"
    ],
    "worked": [
      {
        "q": "x = 5; x = x + 3; print(x). Output?",
        "steps": [
          "5 → 8."
        ],
        "a": "8"
      },
      {
        "q": "price = 4500; qty = 3; total = price * qty. Value of total?",
        "steps": [
          "4,500 × 3."
        ],
        "a": "13500"
      },
      {
        "q": "paid = 15000; total = 13500; change = paid - total. Value of change?",
        "steps": [
          "15,000 − 13,500."
        ],
        "a": "1500"
      },
      {
        "q": "What data type is 37.5? What type is \"37.5\"?",
        "steps": [
          "Decimal number vs text in quotes."
        ],
        "a": "Float; string"
      },
      {
        "q": "temp = 38.2; print(temp >= 37.5). Output and its type?",
        "steps": [
          "38.2 ≥ 37.5 is true."
        ],
        "a": "True; boolean"
      },
      {
        "q": "What does \"3\" + \"2\" give in Python? And 3 + 2?",
        "steps": [
          "Strings join; numbers add."
        ],
        "a": "\"32\"; 5"
      },
      {
        "q": "A program will not start and the message names a missing bracket on line 2. Syntax or logic error?",
        "steps": [
          "Will not run at all."
        ],
        "a": "Syntax error"
      },
      {
        "q": "A program runs and prints Change: -1500 for an exact payment. Syntax or logic error?",
        "steps": [
          "Runs but wrong."
        ],
        "a": "Logic error"
      }
    ]
  },
  {
    "grade": 9,
    "period": "I",
    "sem": "One",
    "icon": "📽️",
    "csPlan": true,
    "title": "Presentation Software and Communicating Ideas",
    "subtitle": "Computer Science · Original junior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Unplugged-first: a class with no computer lab can still complete the unit on paper, and a class with one shared device can extend it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary accurately in speech and writing.",
      "Write, trace and debug an algorithm, a formula or a set of steps connected with the unit — on paper first, on a device when one is available.",
      "Make and justify a safe, honest and lawful choice about devices, data and people online."
    ],
    "objectives": [
      "Explain the key terms in “Presentation Software and Communicating Ideas” and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm or set of steps connected with this unit, on paper.",
      "Sort examples into the unit's two groups and give a reason for each choice.",
      "Trace a worked example step by step, showing every line of working, and state the answer in a full sentence.",
      "Apply the unit's ideas to a fictional Liberian school, market or office scenario.",
      "Debug a broken set of steps, a formula or a short program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared record of bugs found.",
      "Name one Liberian example of this unit's idea (mobile money, a radio station, a clinic record, a ministry office, a school register or a market stall)."
    ],
    "safeguard": "A junior high computing lesson uses charts, paper models, trace tables and, when a device is present, a shared school machine or the teacher's own phone. Students never share passwords or PINs, never photograph one another without consent, and never post a classmate's image or details. A mobile-money PIN is a secret even from a friend. If a student reports online bullying, a request for a picture, a scam message or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "Presentation software arranges a talk as a sequence of slides with titles, short bullet points, images and charts. A storyboard plans the slides on paper first. Good design keeps each slide to one idea, uses large readable text with strong contrast and few words, and treats transitions and animations lightly. The presenter speaks from notes; the slides support the speech.",
    "focus": [
      "Unplugged demonstration and paper trace",
      "Pair work and debugging",
      "Liberian scenario",
      "Computing fair check"
    ],
    "terms": [
      {
        "t": "presentation software",
        "d": "a program that builds a sequence of slides to support a talk, such as PowerPoint, Impress or Google Slides",
        "x": "In this unit, presentation software means a program that builds a sequence of slides to support a talk, such as PowerPoint, Impress or Google Slides."
      },
      {
        "t": "slide",
        "d": "one screen of a presentation, usually holding a title and one idea",
        "x": "In this unit, slide means one screen of a presentation, usually holding a title and one idea."
      },
      {
        "t": "storyboard",
        "d": "a paper plan of a presentation showing each slide's title, main point and picture in order",
        "x": "In this unit, storyboard means a paper plan of a presentation showing each slide's title, main point and picture in order."
      },
      {
        "t": "bullet point",
        "d": "a short phrase marked with a dot, used to list ideas on a slide",
        "x": "In this unit, bullet point means a short phrase marked with a dot, used to list ideas on a slide."
      },
      {
        "t": "slide layout",
        "d": "the arrangement of title, text and picture placeholders on a slide",
        "x": "In this unit, slide layout means the arrangement of title, text and picture placeholders on a slide."
      },
      {
        "t": "transition",
        "d": "the visual effect used when one slide changes to the next",
        "x": "In this unit, transition means the visual effect used when one slide changes to the next."
      },
      {
        "t": "animation",
        "d": "movement applied to an object on a slide, such as a bullet appearing on a click",
        "x": "In this unit, animation means movement applied to an object on a slide, such as a bullet appearing on a click."
      },
      {
        "t": "speaker notes",
        "d": "the presenter's own words for each slide, seen by the presenter and not by the audience",
        "x": "In this unit, speaker notes means the presenter's own words for each slide, seen by the presenter and not by the audience."
      },
      {
        "t": "contrast",
        "d": "the difference between the colour of text and its background; high contrast is easy to read",
        "x": "In this unit, contrast means the difference between the colour of text and its background; high contrast is easy to read."
      },
      {
        "t": "audience",
        "d": "the people a presentation is made for, whose needs decide its words, pictures and length",
        "x": "In this unit, audience means the people a presentation is made for, whose needs decide its words, pictures and length."
      },
      {
        "t": "6-by-6 guide",
        "d": "a rule of thumb: no more than six bullet points on a slide and six words in each",
        "x": "In this unit, 6-by-6 guide means a rule of thumb: no more than six bullet points on a slide and six words in each."
      },
      {
        "t": "handout",
        "d": "a printed copy of the slides or a summary given to the audience",
        "x": "In this unit, handout means a printed copy of the slides or a summary given to the audience."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “presentation software” in this unit?",
        "a": "a program that builds a sequence of slides to support a talk, such as PowerPoint, Impress or Google Slides."
      },
      {
        "q": "What is meant by “slide” in this unit?",
        "a": "one screen of a presentation, usually holding a title and one idea."
      },
      {
        "q": "What is meant by “storyboard” in this unit?",
        "a": "a paper plan of a presentation showing each slide's title, main point and picture in order."
      },
      {
        "q": "What is meant by “bullet point” in this unit?",
        "a": "a short phrase marked with a dot, used to list ideas on a slide."
      },
      {
        "q": "What is meant by “slide layout” in this unit?",
        "a": "the arrangement of title, text and picture placeholders on a slide."
      },
      {
        "q": "What is meant by “transition” in this unit?",
        "a": "the visual effect used when one slide changes to the next."
      },
      {
        "q": "What is meant by “animation” in this unit?",
        "a": "movement applied to an object on a slide, such as a bullet appearing on a click."
      },
      {
        "q": "What is meant by “speaker notes” in this unit?",
        "a": "the presenter's own words for each slide, seen by the presenter and not by the audience."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A Grade 9 group presents to Grade 7 with twenty slides of small paragraphs copied from a textbook, reads every word, and the audience stops listening after the third slide."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Return to the storyboard: find the six ideas that matter to Grade 7, give each one slide with a title and a few large words, move the paragraphs into speaker notes, and rehearse facing the audience with the slide as a prompt, not a script."
      },
      {
        "q": "State this unit idea in your own words: One slide carries one idea, with few words in large type, so the audience listens to the speaker instead of reading the wall.",
        "a": "One slide carries one idea, with few words in large type, so the audience listens to the speaker instead of reading the wall."
      },
      {
        "q": "State this unit idea in your own words: A storyboard plans every slide on paper before any slide is made.",
        "a": "A storyboard plans every slide on paper before any slide is made."
      },
      {
        "q": "Give three rules of good slide design.",
        "a": "One idea per slide; large text with high contrast and few words (the 6-by-6 guide); one clear picture or chart; sparing use of transitions and animations."
      },
      {
        "q": "Why are speaker notes hidden from the audience?",
        "a": "So the audience sees only the short prompt and listens to the presenter, who reads the fuller words from the notes."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Presentation Software and Communicating Ideas” Is"
      },
      {
        "k": "p",
        "t": "**Presentation software** builds a talk from **slides**: one idea per slide, a **title**, a few **bullet points**, a picture or a **chart**. A **storyboard** on paper plans the slides before any are made; **slide design** rules — large text, high contrast, few words — keep the audience looking at the speaker, not reading the wall. **Transitions** and animations are seasoning, not the meal. A **speaker note** is what the presenter says; the slide is what the audience sees. Presenters who copy textbook paragraphs onto twenty slides and read them aloud have made a handout, not a presentation. Return to the storyboard: find the six ideas that matter to Grade 7, give each one slide with a title and a few large words, move the paragraphs into speaker notes, and rehearse facing the audience with the slide as a prompt, not a script. One slide carries one idea, with few words in large type, so the audience listens to the speaker instead of reading the wall. A storyboard plans every slide on paper before any slide is made."
      },
      {
        "k": "p",
        "t": "Presentation software arranges a talk as a sequence of slides with titles, short bullet points, images and charts. A storyboard plans the slides on paper first. Good design keeps each slide to one idea, uses large readable text with strong contrast and few words, and treats transitions and animations lightly. The presenter speaks from notes; the slides support the speech."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: One slide carries one idea, with few words in large type, so the audience listens to the speaker instead of reading the wall. A storyboard plans every slide on paper before any slide is made."
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
        "t": "Each idea below is a working definition for Grade 9. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
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
            "presentation software",
            "a program that builds a sequence of slides to support a talk, such as PowerPoint, Impress or Google Slides",
            "In this unit, presentation software means a program that builds a sequence of slides to support a talk, such as PowerPoint, Impress or Google Slides."
          ],
          [
            "slide",
            "one screen of a presentation, usually holding a title and one idea",
            "In this unit, slide means one screen of a presentation, usually holding a title and one idea."
          ],
          [
            "storyboard",
            "a paper plan of a presentation showing each slide's title, main point and picture in order",
            "In this unit, storyboard means a paper plan of a presentation showing each slide's title, main point and picture in order."
          ],
          [
            "bullet point",
            "a short phrase marked with a dot, used to list ideas on a slide",
            "In this unit, bullet point means a short phrase marked with a dot, used to list ideas on a slide."
          ],
          [
            "slide layout",
            "the arrangement of title, text and picture placeholders on a slide",
            "In this unit, slide layout means the arrangement of title, text and picture placeholders on a slide."
          ],
          [
            "transition",
            "the visual effect used when one slide changes to the next",
            "In this unit, transition means the visual effect used when one slide changes to the next."
          ],
          [
            "animation",
            "movement applied to an object on a slide, such as a bullet appearing on a click",
            "In this unit, animation means movement applied to an object on a slide, such as a bullet appearing on a click."
          ],
          [
            "speaker notes",
            "the presenter's own words for each slide, seen by the presenter and not by the audience",
            "In this unit, speaker notes means the presenter's own words for each slide, seen by the presenter and not by the audience."
          ],
          [
            "contrast",
            "the difference between the colour of text and its background; high contrast is easy to read",
            "In this unit, contrast means the difference between the colour of text and its background; high contrast is easy to read."
          ],
          [
            "audience",
            "the people a presentation is made for, whose needs decide its words, pictures and length",
            "In this unit, audience means the people a presentation is made for, whose needs decide its words, pictures and length."
          ],
          [
            "6-by-6 guide",
            "a rule of thumb: no more than six bullet points on a slide and six words in each",
            "In this unit, 6-by-6 guide means a rule of thumb: no more than six bullet points on a slide and six words in each."
          ],
          [
            "handout",
            "a printed copy of the slides or a summary given to the audience",
            "In this unit, handout means a printed copy of the slides or a summary given to the audience."
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
          "**Slide** — what the audience sees; **speaker notes** — what the presenter says.",
          "**Storyboard** first (paper); **slides** second (screen).",
          "**One idea per slide**; a slide with three ideas is three slides.",
          "**High contrast** (dark on light) reads from the back row; pale on pale does not.",
          "**Transition** — between slides; **animation** — within a slide; both used sparingly."
        ]
      },
      {
        "k": "table",
        "head": [
          "Slide design choice",
          "Good or poor?",
          "Why"
        ],
        "rows": [
          [
            "Title plus four short bullets in 28-point type",
            "Good",
            "Readable from the back; the speaker fills in the rest."
          ],
          [
            "A full paragraph of 12-point text",
            "Poor",
            "The audience reads instead of listening and cannot see it."
          ],
          [
            "Yellow text on a white background",
            "Poor",
            "Low contrast; invisible in a bright classroom."
          ],
          [
            "One large clear photograph with a caption",
            "Good",
            "A picture carries the idea; the caption names it."
          ],
          [
            "A different spinning transition on every slide",
            "Poor",
            "The effects distract from the message."
          ],
          [
            "Dark blue text on a pale background",
            "Good",
            "High contrast."
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
          "Part of a presentation",
          "Slide or notes?",
          "Example for a health-campaign talk"
        ],
        "rows": [
          [
            "Title of the talk",
            "Slide",
            "Clean Hands, Healthy School"
          ],
          [
            "The three key facts",
            "Slide (bullets)",
            "Wash 20 seconds · Soap · Before eating"
          ],
          [
            "The story of a pupil who fell sick",
            "Notes",
            "Told aloud, not written on the slide"
          ],
          [
            "The bar chart of absences before and after",
            "Slide",
            "A chart made from the class spreadsheet"
          ],
          [
            "The exact sentence of the call to action",
            "Notes",
            "'Starting Monday, every class checks the soap.'"
          ],
          [
            "Thanks and questions",
            "Slide",
            "Questions?"
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
        "t": "A county health officer briefing a town hall, a student presenting a science-fair project, a youth group pitching to an NGO and a Grade 9 class explaining a school rule to Grade 7 all need the same skill: one idea per slide, a clear voice and a plan on paper. Projectors are rare, so a Liberian presenter often shows slides on a laptop screen to five people or draws them on flip-chart paper — which is why the storyboard, not the software, is what this unit teaches. The software, when it appears, only types up a plan that already works."
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
        "t": "The class investigation is **“The six-slide paper storyboard”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Pairs choose a topic the class knows (handwashing, malaria nets, road safety) and an audience (Grade 7, parents, the PTA).",
          "On six squares of paper they storyboard six slides: title slide, the problem, three key facts, one chart or picture, the call to action, and questions — each with a title, at most six words per bullet, and a sketch.",
          "They write speaker notes for each square on the back: what will be said that is not on the slide.",
          "Each pair presents the paper slides to another pair, who time it, check contrast and word count, and note one improvement.",
          "If a computer is present, one pair types the storyboard into presentation software and applies one plain transition throughout while the others check every slide against the paper; otherwise the storyboard and notes are the finished work."
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
        "t": "**Problem.** A student's slide reads: 'Malaria is caused by a parasite spread by female Anopheles mosquitoes which bite mostly at night, so sleeping under an insecticide-treated net every night, repairing holes, and clearing standing water around the house reduce the number of cases in a community by a large amount according to health workers.' Redesign it as a slide plus speaker notes, using the 6-by-6 guide."
      },
      {
        "k": "num",
        "items": [
          "Find the one idea: nets and clean surroundings prevent malaria.",
          "Slide title: 'Stop Malaria at Night'.",
          "Bullets (six words or fewer each): 'Mosquitoes bite at night' · 'Sleep under a treated net' · 'Repair holes in the net' · 'Clear standing water'.",
          "Add a photograph of a child under a net; dark text on a pale background, 28-point or larger.",
          "Speaker notes: the parasite, the female Anopheles, the health workers' evidence — spoken, not shown."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** Four short bullets under one title with a picture, and the detail moved to the speaker notes; the slide now supports the talk instead of replacing it."
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
          "Writing the whole talk on the slides and then reading it aloud with the back to the audience.",
          "Choosing colours on a laptop that vanish on a projector or in daylight.",
          "Adding a different transition and animation to every slide.",
          "Making the slides before deciding what the audience needs to remember."
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
        "t": "Safety, Fairness and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN, a one-time code, a home address or a photograph of a classmate. If a message asks for a picture, money or a meeting, the student stops, keeps the message and tells a teacher. Copying another student's work and calling it your own is not collaboration; pair work shares the thinking, not the credit for work you did not do. Unplugged work is complete computing work."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, a scam, a request for a picture or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered, and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
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
        "t": "A Grade 9 group presents to Grade 7 with twenty slides of small paragraphs copied from a textbook, reads every word, and the audience stops listening after the third slide."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Return to the storyboard: find the six ideas that matter to Grade 7, give each one slide with a title and a few large words, move the paragraphs into speaker notes, and rehearse facing the audience with the slide as a prompt, not a script."
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
        "t": "Return to the storyboard: find the six ideas that matter to Grade 7, give each one slide with a title and a few large words, move the paragraphs into speaker notes, and rehearse facing the audience with the slide as a prompt, not a script."
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
        "t": "The investigation **“The six-slide paper storyboard”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
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
            "Storyboard squares",
            "The slides",
            "A title, short bullets and a sketch on each"
          ],
          [
            "Back of each square",
            "The speaker notes",
            "What is said but not shown"
          ],
          [
            "Design checklist",
            "The audience's eyes and ears",
            "Contrast, word count, one idea, timing"
          ],
          [
            "Class chart",
            "Presentation bugs the class caught",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Plan for the Room You Will Actually Be In"
      },
      {
        "k": "p",
        "t": "Bright classroom, no projector, a small laptop screen or flip-chart paper: choose high contrast, large type and one picture per slide. A presenter who has to say 'you cannot see this, but…' has designed for the wrong room."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Charts Belong on Slides, Numbers in Notes"
      },
      {
        "k": "p",
        "t": "A bar chart of absences before and after the handwashing campaign shows the result in a second; the exact figures live in the notes for anyone who asks. Make the chart in the class spreadsheet from Grade 8 and paste it in."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Rehearse Aloud, Time It"
      },
      {
        "k": "p",
        "t": "Six slides, five minutes. Stand, face the audience, glance at the slide, speak from the notes. Time it twice. A presentation that runs over is a presentation that was not rehearsed."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Credit Your Sources"
      },
      {
        "k": "p",
        "t": "A photograph, a chart or a fact from a report belongs to someone. The last slide, or a small line under the picture, names the source. It is honest, it is how examinations mark, and it lets the audience check."
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
        "t": "A fair period test on “Presentation Software and Communicating Ideas” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit and use each in a sentence.",
          "Write or trace a four-step algorithm, formula or procedure connected with “Presentation Software and Communicating Ideas”, showing every line of working.",
          "Sort four examples using “Belongs on the slide / Belongs in the speaker notes” and give one reason.",
          "Debug a broken set of steps without blaming the person who wrote them, and say what the bug was."
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
        "t": "A 4-week unit on “Presentation Software and Communicating Ideas” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
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
            "What “Presentation Software and Communicating Ideas” is, and where it already appears around us.",
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
        "t": "This is original supplementary teaching material for Liberian junior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, presentation software means a program that builds a sequence of slides to support a talk, such as PowerPoint, Impress or Google Slides.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, slide means a paper plan of a presentation showing each slide's title, main point and picture in order.",
        "a": "False",
        "why": "slide means one screen of a presentation, usually holding a title and one idea; the statement describes storyboard."
      },
      {
        "s": "In this unit, bullet point means a short phrase marked with a dot, used to list ideas on a slide.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Unplugged work with paper, trace tables and cards is complete computing work; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the instructions, not in the person."
      },
      {
        "s": "Students should share passwords or mobile-money PINs so a partner can finish the work.",
        "a": "False",
        "why": "A password or PIN is secret. Never share a password, PIN, one-time code or personal photograph."
      },
      {
        "s": "One slide carries one idea, with few words in large type, so the audience listens to the speaker instead of reading the wall.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "The best presentation puts every word the speaker will say on the slides.",
        "a": "False",
        "why": "Slides carry one idea in few words; the speaker's words go in the notes."
      },
      {
        "s": "A storyboard is made on paper before the slides are created.",
        "a": "True",
        "why": "Planning the slides first saves time and keeps the talk focused on the audience."
      }
    ],
    "classify": {
      "title": "Belongs on the slide / Belongs in the speaker notes",
      "groups": [
        {
          "name": "Belongs on the slide",
          "items": [
            "a short title",
            "four bullets of six words or fewer",
            "one large photograph",
            "a bar chart from the spreadsheet",
            "the call to action in one line",
            "the source of a picture"
          ]
        },
        {
          "name": "Belongs in the speaker notes",
          "items": [
            "the full story of a case",
            "the exact figures behind the chart",
            "the parasite's scientific name",
            "what to say if asked a question",
            "the greeting and introduction",
            "the reasons behind each bullet"
          ]
        }
      ]
    },
    "diagram": {
      "title": "The anatomy of a well-designed slide",
      "caption": "Label each part and state what it does in “Presentation Software and Communicating Ideas”.",
      "parts": [
        {
          "p": "Title",
          "f": "names the one idea of the slide in a few words"
        },
        {
          "p": "Bullet points",
          "f": "at most six, each at most six words, in large type"
        },
        {
          "p": "Picture or chart",
          "f": "one clear image that carries the idea"
        },
        {
          "p": "Contrast",
          "f": "dark text on a pale background so it reads from the back"
        },
        {
          "p": "Speaker notes (hidden)",
          "f": "the presenter's words that the slide only prompts"
        }
      ]
    },
    "experiment": {
      "title": "The six-slide paper storyboard",
      "aim": "To practise the ideas of “Presentation Software and Communicating Ideas” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Paper cards, arrows and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class computing chart",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “The six-slide paper storyboard” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A Grade 9 group presents to Grade 7 with twenty slides of small paragraphs copied from a textbook, reads every word, and the audience stops listening after the third slide. What should happen next?",
        "a": "Return to the storyboard: find the six ideas that matter to Grade 7, give each one slide with a title and a few large words, move the paragraphs into speaker notes, and rehearse facing the audience with the slide as a prompt, not a script."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Presentation Software and Communicating Ideas”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's trace gives the wrong answer. What do you say, and why?",
        "a": "Remind the class that a bug is in the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian daily life (a market, a clinic, a radio station, a mobile-money kiosk, a school office).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as mobile money, a clinic record, a radio bulletin, a school register or a market ledger."
      },
      {
        "q": "Storyboard a five-slide presentation to parents about keeping mobile-money PINs secret. Give each slide a title and its main point.",
        "a": "For example: 1 'Your PIN Is Your Key'; 2 'How the Scam Works' (a fake text); 3 'Never Share, Never Reply'; 4 'What To Do Instead' (call the official line); 5 'Questions?' — each with one picture and short bullets."
      },
      {
        "q": "You will present on a laptop screen to eight people in a sunlit room. List four design decisions you make because of the room.",
        "a": "Large type (28-point or more), dark text on a pale background, one picture per slide, few words; plus positioning the screen away from the window."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “The six-slide paper storyboard” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, paper grids and a paper keyboard",
      "A class computing chart",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's phone, kept dry and in sight"
    ],
    "aids": [
      "Word cards — presentation software, slide, storyboard",
      "A flowchart or trace table of “The six-slide paper storyboard”",
      "Six blank storyboard squares per pair and a slide-design checklist",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing word and what it means.",
      "Practise this week's paper method (a trace, a conversion, a formula or an algorithm) with a sibling or a friend — no device needed.",
      "Find one example of this unit's idea in your community (a market, a clinic, a radio station, a mobile-money kiosk or an office) and write three sentences about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written algorithm, trace table or worked conversion",
      "Pair-debug observed against the class chart",
      "A short written response to the Liberian scenario"
    ],
    "worked": [
      {
        "q": "State the 6-by-6 guide.",
        "steps": [
          "Bullets and words."
        ],
        "a": "No more than six bullets per slide and six words per bullet"
      },
      {
        "q": "A slide holds three separate ideas. How many slides should it become?",
        "steps": [
          "One idea per slide."
        ],
        "a": "Three"
      },
      {
        "q": "Which reads better in daylight: yellow on white or dark blue on cream? Why?",
        "steps": [
          "Contrast."
        ],
        "a": "Dark blue on cream — higher contrast"
      },
      {
        "q": "Where does the story of a sick pupil belong: slide or notes?",
        "steps": [
          "Spoken detail."
        ],
        "a": "Speaker notes"
      },
      {
        "q": "A talk has six slides and five minutes. About how long per slide?",
        "steps": [
          "300 seconds ÷ 6."
        ],
        "a": "About 50 seconds each"
      },
      {
        "q": "Name the paper plan made before any slide is created.",
        "steps": [
          "Sketch of each slide in order."
        ],
        "a": "A storyboard"
      },
      {
        "q": "What is the difference between a transition and an animation?",
        "steps": [
          "Between slides vs within a slide."
        ],
        "a": "A transition is between slides; an animation moves an object on a slide"
      },
      {
        "q": "A slide contains 84 words in 12-point type. Name two things wrong and two fixes.",
        "steps": [
          "Too many words, too small."
        ],
        "a": "Too many words and too small to read; cut to a few bullets in 28-point and move the rest to notes"
      }
    ]
  },
  {
    "grade": 9,
    "period": "II",
    "sem": "One",
    "icon": "🔁",
    "csPlan": true,
    "title": "Programming — Selection and Repetition",
    "subtitle": "Computer Science · Original junior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Unplugged-first: a class with no computer lab can still complete the unit on paper, and a class with one shared device can extend it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary accurately in speech and writing.",
      "Write, trace and debug an algorithm, a formula or a set of steps connected with the unit — on paper first, on a device when one is available.",
      "Make and justify a safe, honest and lawful choice about devices, data and people online."
    ],
    "objectives": [
      "Explain the key terms in “Programming — Selection and Repetition” and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm or set of steps connected with this unit, on paper.",
      "Sort examples into the unit's two groups and give a reason for each choice.",
      "Trace a worked example step by step, showing every line of working, and state the answer in a full sentence.",
      "Apply the unit's ideas to a fictional Liberian school, market or office scenario.",
      "Debug a broken set of steps, a formula or a short program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared record of bugs found.",
      "Name one Liberian example of this unit's idea (mobile money, a radio station, a clinic record, a ministry office, a school register or a market stall)."
    ],
    "safeguard": "A junior high computing lesson uses charts, paper models, trace tables and, when a device is present, a shared school machine or the teacher's own phone. Students never share passwords or PINs, never photograph one another without consent, and never post a classmate's image or details. A mobile-money PIN is a secret even from a friend. If a student reports online bullying, a request for a picture, a scam message or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "Selection uses if, elif and else with conditions built from the comparison operators (equal ==, not equal !=, less than, greater than, at most, at least) and the logical operators and, or, not. Iteration uses a while loop (repeat while a condition is true) or a for loop (repeat a fixed number of times or once per item). Counters and accumulators are updated inside the loop, and a trace table checks every pass.",
    "focus": [
      "Unplugged demonstration and paper trace",
      "Pair work and debugging",
      "Liberian scenario",
      "Computing fair check"
    ],
    "terms": [
      {
        "t": "selection",
        "d": "choosing which lines to run using if, elif and else with a condition",
        "x": "In this unit, selection means choosing which lines to run using if, elif and else with a condition."
      },
      {
        "t": "condition",
        "d": "an expression that is either True or False, such as mark >= 50",
        "x": "In this unit, condition means an expression that is either True or False, such as mark >= 50."
      },
      {
        "t": "comparison operator",
        "d": "a symbol that compares two values: == equal, != not equal, less than, greater than, less than or equal, greater than or equal",
        "x": "In this unit, comparison operator means a symbol that compares two values: == equal, != not equal, less than, greater than, less than or equal, greater than or equal."
      },
      {
        "t": "logical operator",
        "d": "and, or and not, which combine or reverse conditions",
        "x": "In this unit, logical operator means and, or and not, which combine or reverse conditions."
      },
      {
        "t": "else",
        "d": "the branch that runs when no condition above it was true",
        "x": "In this unit, else means the branch that runs when no condition above it was true."
      },
      {
        "t": "elif",
        "d": "short for 'else if': another condition tested only if the ones above were false",
        "x": "In this unit, elif means short for 'else if': another condition tested only if the ones above were false."
      },
      {
        "t": "iteration",
        "d": "repeating lines of code; also called looping",
        "x": "In this unit, iteration means repeating lines of code; also called looping."
      },
      {
        "t": "while loop",
        "d": "a loop that repeats its body while its condition remains true",
        "x": "In this unit, while loop means a loop that repeats its body while its condition remains true."
      },
      {
        "t": "for loop",
        "d": "a loop that repeats a fixed number of times or once for each item, such as for i in range(5)",
        "x": "In this unit, for loop means a loop that repeats a fixed number of times or once for each item, such as for i in range(5)."
      },
      {
        "t": "counter",
        "d": "a variable that counts how many times something has happened, increased by 1 each pass",
        "x": "In this unit, counter means a variable that counts how many times something has happened, increased by 1 each pass."
      },
      {
        "t": "accumulator",
        "d": "a variable that builds up a total, increased by each new value in the loop",
        "x": "In this unit, accumulator means a variable that builds up a total, increased by each new value in the loop."
      },
      {
        "t": "infinite loop",
        "d": "a loop whose condition never becomes false, so it never stops",
        "x": "In this unit, infinite loop means a loop whose condition never becomes false, so it never stops."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “selection” in this unit?",
        "a": "choosing which lines to run using if, elif and else with a condition."
      },
      {
        "q": "What is meant by “condition” in this unit?",
        "a": "an expression that is either True or False, such as mark >= 50."
      },
      {
        "q": "What is meant by “comparison operator” in this unit?",
        "a": "a symbol that compares two values: == equal, != not equal, less than, greater than, less than or equal, greater than or equal."
      },
      {
        "q": "What is meant by “logical operator” in this unit?",
        "a": "and, or and not, which combine or reverse conditions."
      },
      {
        "q": "What is meant by “else” in this unit?",
        "a": "the branch that runs when no condition above it was true."
      },
      {
        "q": "What is meant by “elif” in this unit?",
        "a": "short for 'else if': another condition tested only if the ones above were false."
      },
      {
        "q": "What is meant by “iteration” in this unit?",
        "a": "repeating lines of code; also called looping."
      },
      {
        "q": "What is meant by “while loop” in this unit?",
        "a": "a loop that repeats its body while its condition remains true."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A Grade 9 pair's grading program reports every mark as 'Credit', including 95, and they conclude that the elif keyword 'does not work'."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Trace 95 through the branches: if the first test is mark >= 40 it is true for 95 and the rest are skipped; reorder the tests from the highest boundary down — if mark >= 50, elif mark >= 40, else — retrace 95, 45 and 38, and add both orders to the class chart of bugs."
      },
      {
        "q": "State this unit idea in your own words: A while loop repeats while its condition is true, so something inside the loop must eventually make the condition false.",
        "a": "A while loop repeats while its condition is true, so something inside the loop must eventually make the condition false."
      },
      {
        "q": "State this unit idea in your own words: if, elif and else choose exactly one path; the first true condition wins and the rest are skipped.",
        "a": "if, elif and else choose exactly one path; the first true condition wins and the rest are skipped."
      },
      {
        "q": "What is the difference between a counter and an accumulator?",
        "a": "A counter increases by 1 each pass to count events; an accumulator increases by each value to build a total."
      },
      {
        "q": "How can a programmer make sure a while loop will end?",
        "a": "Something inside the loop must change the variables in the condition — new input, a counter increased — so the condition eventually becomes false."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Programming — Selection and Repetition” Is"
      },
      {
        "k": "p",
        "t": "Grade 8's programs ran straight through. Real programs **branch** with **if–elif–else** and **repeat** with loops: a **while loop** keeps going while a **condition** stays true, and a **for loop** runs a set number of times or once for each item. A **counter** counts the passes; an **accumulator** builds up a total. Loops end when the condition becomes false — an **infinite loop** is one whose condition never does. Every branch and every pass is checked with a **trace table**. Students who conclude that elif 'does not work' when every mark prints Credit have tested the conditions in the wrong order. Trace 95 through the branches: if the first test is mark >= 40 it is true for 95 and the rest are skipped; reorder the tests from the highest boundary down — if mark >= 50, elif mark >= 40, else — retrace 95, 45 and 38, and add both orders to the class chart of bugs. A while loop repeats while its condition is true, so something inside the loop must eventually make the condition false. if, elif and else choose exactly one path; the first true condition wins and the rest are skipped."
      },
      {
        "k": "p",
        "t": "Selection uses if, elif and else with conditions built from the comparison operators (equal ==, not equal !=, less than, greater than, at most, at least) and the logical operators and, or, not. Iteration uses a while loop (repeat while a condition is true) or a for loop (repeat a fixed number of times or once per item). Counters and accumulators are updated inside the loop, and a trace table checks every pass."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: A while loop repeats while its condition is true, so something inside the loop must eventually make the condition false. if, elif and else choose exactly one path; the first true condition wins and the rest are skipped."
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
        "t": "Each idea below is a working definition for Grade 9. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
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
            "selection",
            "choosing which lines to run using if, elif and else with a condition",
            "In this unit, selection means choosing which lines to run using if, elif and else with a condition."
          ],
          [
            "condition",
            "an expression that is either True or False, such as mark >= 50",
            "In this unit, condition means an expression that is either True or False, such as mark >= 50."
          ],
          [
            "comparison operator",
            "a symbol that compares two values: == equal, != not equal, less than, greater than, less than or equal, greater than or equal",
            "In this unit, comparison operator means a symbol that compares two values: == equal, != not equal, less than, greater than, less than or equal, greater than or equal."
          ],
          [
            "logical operator",
            "and, or and not, which combine or reverse conditions",
            "In this unit, logical operator means and, or and not, which combine or reverse conditions."
          ],
          [
            "else",
            "the branch that runs when no condition above it was true",
            "In this unit, else means the branch that runs when no condition above it was true."
          ],
          [
            "elif",
            "short for 'else if': another condition tested only if the ones above were false",
            "In this unit, elif means short for 'else if': another condition tested only if the ones above were false."
          ],
          [
            "iteration",
            "repeating lines of code; also called looping",
            "In this unit, iteration means repeating lines of code; also called looping."
          ],
          [
            "while loop",
            "a loop that repeats its body while its condition remains true",
            "In this unit, while loop means a loop that repeats its body while its condition remains true."
          ],
          [
            "for loop",
            "a loop that repeats a fixed number of times or once for each item, such as for i in range(5)",
            "In this unit, for loop means a loop that repeats a fixed number of times or once for each item, such as for i in range(5)."
          ],
          [
            "counter",
            "a variable that counts how many times something has happened, increased by 1 each pass",
            "In this unit, counter means a variable that counts how many times something has happened, increased by 1 each pass."
          ],
          [
            "accumulator",
            "a variable that builds up a total, increased by each new value in the loop",
            "In this unit, accumulator means a variable that builds up a total, increased by each new value in the loop."
          ],
          [
            "infinite loop",
            "a loop whose condition never becomes false, so it never stops",
            "In this unit, infinite loop means a loop whose condition never becomes false, so it never stops."
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
          "**if** — test once, run or skip; **while** — test, run, test again, until false.",
          "**while** — unknown number of passes; **for** — known number or one per item.",
          "**Counter** goes up by 1; **accumulator** goes up by the value.",
          "**=** stores; **==** compares — inside a condition it is always ==.",
          "**and** needs both true; **or** needs either; **not** flips."
        ]
      },
      {
        "k": "table",
        "head": [
          "Condition with mark = 64",
          "True or false?",
          "Why"
        ],
        "rows": [
          [
            "mark >= 50",
            "True",
            "64 is at least 50."
          ],
          [
            "mark == 64",
            "True",
            "Equal."
          ],
          [
            "mark > 64",
            "False",
            "Not greater than itself."
          ],
          [
            "mark >= 50 and mark < 60",
            "False",
            "The second part fails."
          ],
          [
            "mark < 50 or mark > 60",
            "True",
            "The second part holds."
          ],
          [
            "not (mark >= 50)",
            "False",
            "The inside is true, so not makes it false."
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
          "Task",
          "Best loop",
          "Why"
        ],
        "rows": [
          [
            "Print the times table of 7 from 1 to 12",
            "for i in range(1, 13)",
            "A known number of passes."
          ],
          [
            "Keep asking for a PIN until it is correct",
            "while pin != correct",
            "Unknown number of tries."
          ],
          [
            "Add up every price on a list of 40",
            "for price in prices",
            "Once per item."
          ],
          [
            "Pour water until the bucket is full",
            "while not full",
            "Stop when a condition changes."
          ],
          [
            "Count down from 10 to 1",
            "for i in range(10, 0, -1)",
            "A fixed sequence."
          ],
          [
            "Read temperatures until the user types -1",
            "while temp != -1",
            "A sentinel value ends it."
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
        "t": "A mobile-money agent's phone runs 'while the PIN is wrong, ask again — and after three tries, lock'; a WAEC grading program runs 'for each candidate: if mark ≥ 50 then Pass elif mark ≥ 40 then Credit else Fail'; a clinic's tally runs 'for each patient: if temperature ≥ 37.5 then fever = fever + 1'. Every one can be written in a dozen lines and traced on paper by a Grade 9 student before any device is touched. In a country where the machine may be shared by forty, the trace table is the classroom's computer, and it never runs out of power."
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
        "t": "The class investigation is **“The pass-fail-credit grader with a counter”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Write the program on the board: passes = 0; for mark in [72, 45, 50, 38, 61]: if mark >= 50: print(\"Pass\"); passes = passes + 1; elif mark >= 40: print(\"Credit\"); else: print(\"Fail\"); print(\"Passes:\", passes).",
          "Pairs rule a trace table with columns mark, condition mark >= 50, condition mark >= 40, output, passes, and trace all five marks one row each.",
          "The navigator changes the list to add a mark of 40 and a mark of 49, and the driver traces the boundary cases and explains why 50 is Pass and 49 is Credit.",
          "The pair rewrites the counting part as a while loop using an index and a sentinel value of -1, and traces it; then breaks it (forgetting to increase the index) and names the infinite loop.",
          "If a device with Python is present, one pair runs both versions with the same lists and compares the output with the trace; otherwise the trace tables are the finished work."
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
        "t": "**Problem.** Trace this program: tries = 0; pin = 1234; entered = 0; while entered != pin and tries < 3: entered = int(input(\"PIN? \")); tries = tries + 1; if entered == pin: print(\"Welcome\") else: print(\"Locked\"). The user types 1111, then 4321, then 1234. State the output and the final value of tries."
      },
      {
        "k": "num",
        "items": [
          "Start: tries = 0, entered = 0; condition 0 != 1234 and 0 < 3 is True — enter the loop.",
          "Pass 1: entered = 1111; tries = 1; condition 1111 != 1234 and 1 < 3 is True.",
          "Pass 2: entered = 4321; tries = 2; condition True.",
          "Pass 3: entered = 1234; tries = 3; condition 1234 != 1234 is False — the loop ends.",
          "After the loop: entered == pin is True, so output Welcome."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** Output Welcome; tries ends at 3 — the correct PIN on the third try ends the loop before the lock."
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
          "Writing if mark = 50 (assignment) instead of if mark == 50 (comparison).",
          "Forgetting to update the counter or the input inside a while loop, so it never ends.",
          "Putting the elif conditions in the wrong order, so mark >= 40 catches a mark of 72 before mark >= 50 is tested.",
          "Setting the accumulator to 0 inside the loop, so the total resets on every pass."
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
        "t": "Safety, Fairness and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN, a one-time code, a home address or a photograph of a classmate. If a message asks for a picture, money or a meeting, the student stops, keeps the message and tells a teacher. Copying another student's work and calling it your own is not collaboration; pair work shares the thinking, not the credit for work you did not do. Unplugged work is complete computing work."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, a scam, a request for a picture or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered, and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
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
        "t": "A Grade 9 pair's grading program reports every mark as 'Credit', including 95, and they conclude that the elif keyword 'does not work'."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Trace 95 through the branches: if the first test is mark >= 40 it is true for 95 and the rest are skipped; reorder the tests from the highest boundary down — if mark >= 50, elif mark >= 40, else — retrace 95, 45 and 38, and add both orders to the class chart of bugs."
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
        "t": "Trace 95 through the branches: if the first test is mark >= 40 it is true for 95 and the rest are skipped; reorder the tests from the highest boundary down — if mark >= 50, elif mark >= 40, else — retrace 95, 45 and 38, and add both orders to the class chart of bugs."
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
        "t": "The investigation **“The pass-fail-credit grader with a counter”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
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
            "Squared paper or trace table",
            "The state of the machine after every step",
            "The finished trace with the final answer"
          ],
          [
            "Word card",
            "A key term",
            "The term in a sentence"
          ],
          [
            "Paper keyboard or printed screen",
            "The device we may not have",
            "The same action described in words"
          ],
          [
            "Class chart",
            "Bugs and precise steps the class agreed",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The First True Condition Wins"
      },
      {
        "k": "p",
        "t": "if–elif–else tests from the top and runs the first branch whose condition is true; everything below is skipped. So the tests must be ordered — highest boundary first for grades, lowest first for tax bands — or the wrong branch catches the value."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Something Must Change Inside a While Loop"
      },
      {
        "k": "p",
        "t": "A while loop is a question asked again and again. If nothing inside the loop can change the answer — no new input, no counter increased — the answer never changes and the loop never ends. Before writing while, ask: which line makes the condition false?"
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Counter and Accumulator Are Different Boxes"
      },
      {
        "k": "p",
        "t": "count = count + 1 counts passes. total = total + price adds values. A program that wants an average needs both — total divided by count — and both must start at 0 before the loop, not inside it."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Boundaries Are Where Bugs Live"
      },
      {
        "k": "p",
        "t": "Test 50 and 49, not 72 and 30. A grader that gives Pass at 50 and Credit at 49 has its boundary right; one that gives Credit at 50 has >= and > confused. Professional testers call these boundary cases and always try them first."
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
        "t": "A fair period test on “Programming — Selection and Repetition” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit and use each in a sentence.",
          "Write or trace a four-step algorithm, formula or procedure connected with “Programming — Selection and Repetition”, showing every line of working.",
          "Sort four examples using “Selection / Iteration” and give one reason.",
          "Debug a broken set of steps without blaming the person who wrote them, and say what the bug was."
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
        "t": "A 4-week unit on “Programming — Selection and Repetition” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
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
            "What “Programming — Selection and Repetition” is, and where it already appears around us.",
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
        "t": "This is original supplementary teaching material for Liberian junior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, selection means choosing which lines to run using if, elif and else with a condition.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, condition means a symbol that compares two values: == equal, != not equal, less than, greater than, less than or equal, greater than or equal.",
        "a": "False",
        "why": "condition means an expression that is either True or False, such as mark >= 50; the statement describes comparison operator."
      },
      {
        "s": "In this unit, logical operator means and, or and not, which combine or reverse conditions.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Unplugged work with paper, trace tables and cards is complete computing work; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the instructions, not in the person."
      },
      {
        "s": "Students should share passwords or mobile-money PINs so a partner can finish the work.",
        "a": "False",
        "why": "A password or PIN is secret. Never share a password, PIN, one-time code or personal photograph."
      },
      {
        "s": "A while loop repeats while its condition is true, so something inside the loop must eventually make the condition false.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "In an if–elif–else chain, every branch whose condition is true is run.",
        "a": "False",
        "why": "Only the first branch whose condition is true runs; the rest are skipped."
      },
      {
        "s": "A for loop is the natural choice when the number of repetitions is known in advance.",
        "a": "True",
        "why": "for i in range(n) runs exactly n times; while suits an unknown number of passes."
      }
    ],
    "classify": {
      "title": "Selection / Iteration",
      "groups": [
        {
          "name": "Selection",
          "items": [
            "if mark >= 50",
            "elif mark >= 40",
            "else: print(\"Fail\")",
            "if entered == pin",
            "if temp >= 37.5 and age < 5",
            "if not raining"
          ]
        },
        {
          "name": "Iteration",
          "items": [
            "while entered != pin",
            "for i in range(1, 13)",
            "for price in prices",
            "while tries < 3",
            "for name in register",
            "while temp != -1"
          ]
        }
      ]
    },
    "diagram": {
      "title": "A flowchart of a while loop with a counter",
      "caption": "Label each part and state what it does in “Programming — Selection and Repetition”.",
      "parts": [
        {
          "p": "Start value",
          "f": "tries = 0 set before the loop"
        },
        {
          "p": "Condition (diamond)",
          "f": "entered != pin and tries < 3, tested before each pass"
        },
        {
          "p": "Loop body",
          "f": "read the PIN and add 1 to tries"
        },
        {
          "p": "Loop back arrow",
          "f": "returns to the condition after each pass"
        },
        {
          "p": "Exit path",
          "f": "when the condition is false, continue to the if that prints Welcome or Locked"
        }
      ]
    },
    "experiment": {
      "title": "The pass-fail-credit grader with a counter",
      "aim": "To practise the ideas of “Programming — Selection and Repetition” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Paper cards, arrows and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class computing chart",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “The pass-fail-credit grader with a counter” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A Grade 9 pair's grading program reports every mark as 'Credit', including 95, and they conclude that the elif keyword 'does not work'. What should happen next?",
        "a": "Trace 95 through the branches: if the first test is mark >= 40 it is true for 95 and the rest are skipped; reorder the tests from the highest boundary down — if mark >= 50, elif mark >= 40, else — retrace 95, 45 and 38, and add both orders to the class chart of bugs."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Programming — Selection and Repetition”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's trace gives the wrong answer. What do you say, and why?",
        "a": "Remind the class that a bug is in the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian daily life (a market, a clinic, a radio station, a mobile-money kiosk, a school office).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as mobile money, a clinic record, a radio bulletin, a school register or a market ledger."
      },
      {
        "q": "Write a program that reads temperatures until -1 is entered and prints how many were 37.5 or higher. Trace it with 36.8, 38.1, 39.0, -1.",
        "a": "fever = 0; temp = float(input()); while temp != -1: if temp >= 37.5: fever = fever + 1; temp = float(input()); print(fever) — trace gives fever = 2."
      },
      {
        "q": "A tax program charges 0% below 5,000, 10% from 5,000 to 20,000 and 20% above 20,000. Write the if–elif–else and trace it with 4,999, 5,000 and 25,000.",
        "a": "if income < 5000: rate = 0 elif income <= 20000: rate = 10 else: rate = 20 — gives 0, 10 and 20; boundaries 4,999 and 5,000 tested."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “The pass-fail-credit grader with a counter” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, paper grids and a paper keyboard",
      "A class computing chart",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's phone, kept dry and in sight"
    ],
    "aids": [
      "Word cards — selection, condition, comparison operator",
      "A flowchart or trace table of “The pass-fail-credit grader with a counter”",
      "Printed program listings, boundary-case cards (49, 50, 40, 39) and trace tables",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing word and what it means.",
      "Practise this week's paper method (a trace, a conversion, a formula or an algorithm) with a sibling or a friend — no device needed.",
      "Find one example of this unit's idea in your community (a market, a clinic, a radio station, a mobile-money kiosk or an office) and write three sentences about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written algorithm, trace table or worked conversion",
      "Pair-debug observed against the class chart",
      "A short written response to the Liberian scenario"
    ],
    "worked": [
      {
        "q": "mark = 64. Is mark >= 50 and mark < 60 true or false?",
        "steps": [
          "True and False → False."
        ],
        "a": "False"
      },
      {
        "q": "for i in range(1, 6): print(i). What is printed?",
        "steps": [
          "range stops before 6."
        ],
        "a": "1 2 3 4 5"
      },
      {
        "q": "total = 0; for p in [300, 450, 250]: total = total + p. Final total?",
        "steps": [
          "0 → 300 → 750 → 1,000."
        ],
        "a": "1000"
      },
      {
        "q": "count = 0; for m in [72, 45, 50, 38]: if m >= 50: count = count + 1. Final count?",
        "steps": [
          "72 yes, 45 no, 50 yes, 38 no."
        ],
        "a": "2"
      },
      {
        "q": "x = 10; while x > 0: x = x - 3. How many passes, and final x?",
        "steps": [
          "10 → 7 → 4 → 1 → -2."
        ],
        "a": "4 passes; x = -2"
      },
      {
        "q": "while tries < 3 with no line changing tries. What happens?",
        "steps": [
          "Condition never changes."
        ],
        "a": "An infinite loop"
      },
      {
        "q": "if mark >= 40: Credit elif mark >= 50: Pass. Trace 72.",
        "steps": [
          "First true test wins."
        ],
        "a": "Credit — the order is wrong"
      },
      {
        "q": "Which loop suits 'ask for the PIN until it is correct': for or while?",
        "steps": [
          "Unknown number of tries."
        ],
        "a": "while"
      }
    ]
  },
  {
    "grade": 9,
    "period": "III",
    "sem": "One",
    "icon": "🖼️",
    "csPlan": true,
    "title": "Data Representation — Text, Images and Sound",
    "subtitle": "Computer Science · Original junior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Unplugged-first: a class with no computer lab can still complete the unit on paper, and a class with one shared device can extend it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary accurately in speech and writing.",
      "Write, trace and debug an algorithm, a formula or a set of steps connected with the unit — on paper first, on a device when one is available.",
      "Make and justify a safe, honest and lawful choice about devices, data and people online."
    ],
    "objectives": [
      "Explain the key terms in “Data Representation — Text, Images and Sound” and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm or set of steps connected with this unit, on paper.",
      "Sort examples into the unit's two groups and give a reason for each choice.",
      "Trace a worked example step by step, showing every line of working, and state the answer in a full sentence.",
      "Apply the unit's ideas to a fictional Liberian school, market or office scenario.",
      "Debug a broken set of steps, a formula or a short program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared record of bugs found.",
      "Name one Liberian example of this unit's idea (mobile money, a radio station, a clinic record, a ministry office, a school register or a market stall)."
    ],
    "safeguard": "A junior high computing lesson uses charts, paper models, trace tables and, when a device is present, a shared school machine or the teacher's own phone. Students never share passwords or PINs, never photograph one another without consent, and never post a classmate's image or details. A mobile-money PIN is a secret even from a friend. If a student reports online bullying, a request for a picture, a scam message or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "Computers store text as character codes (ASCII uses one byte per character; Unicode covers all scripts), images as grids of pixels whose colours are numbers (file size ≈ width × height × colour depth), and sound as a stream of samples taken thousands of times per second. Larger resolution, colour depth or sample rate means better quality and bigger files; compression reduces size for storage and sending.",
    "focus": [
      "Unplugged demonstration and paper trace",
      "Pair work and debugging",
      "Liberian scenario",
      "Computing fair check"
    ],
    "terms": [
      {
        "t": "character set",
        "d": "the agreed table that gives every letter, digit and symbol a number code",
        "x": "In this unit, character set means the agreed table that gives every letter, digit and symbol a number code."
      },
      {
        "t": "ASCII",
        "d": "an early character set that codes 128 English characters using one byte each; A is 65, a is 97",
        "x": "In this unit, ASCII means an early character set that codes 128 English characters using one byte each; A is 65, a is 97."
      },
      {
        "t": "Unicode",
        "d": "the modern character set that gives a code to every character in every script, including Vai and Arabic",
        "x": "In this unit, Unicode means the modern character set that gives a code to every character in every script, including Vai and Arabic."
      },
      {
        "t": "pixel",
        "d": "one tiny square of colour in a digital image; short for picture element",
        "x": "In this unit, pixel means one tiny square of colour in a digital image; short for picture element."
      },
      {
        "t": "resolution",
        "d": "the number of pixels across and down an image, such as 1,200 × 800",
        "x": "In this unit, resolution means the number of pixels across and down an image, such as 1,200 × 800."
      },
      {
        "t": "colour depth",
        "d": "the number of bits used for each pixel's colour; 1 bit gives two colours, 8 bits give 256, 24 bits give millions",
        "x": "In this unit, colour depth means the number of bits used for each pixel's colour; 1 bit gives two colours, 8 bits give 256, 24 bits give millions."
      },
      {
        "t": "bitmap",
        "d": "an image stored as a grid of pixel colours, such as a photograph",
        "x": "In this unit, bitmap means an image stored as a grid of pixel colours, such as a photograph."
      },
      {
        "t": "sample",
        "d": "one measurement of a sound wave's height taken at an instant",
        "x": "In this unit, sample means one measurement of a sound wave's height taken at an instant."
      },
      {
        "t": "sample rate",
        "d": "how many samples are taken each second, such as 44,100 for CD quality",
        "x": "In this unit, sample rate means how many samples are taken each second, such as 44,100 for CD quality."
      },
      {
        "t": "file size",
        "d": "the number of bytes a file occupies in storage",
        "x": "In this unit, file size means the number of bytes a file occupies in storage."
      },
      {
        "t": "compression",
        "d": "reducing a file's size, either without losing detail (lossless) or by discarding detail (lossy)",
        "x": "In this unit, compression means reducing a file's size, either without losing detail (lossless) or by discarding detail (lossy)."
      },
      {
        "t": "metadata",
        "d": "data about data stored with a file, such as an image's size, date and the camera used",
        "x": "In this unit, metadata means data about data stored with a file, such as an image's size, date and the camera used."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “character set” in this unit?",
        "a": "the agreed table that gives every letter, digit and symbol a number code."
      },
      {
        "q": "What is meant by “ASCII” in this unit?",
        "a": "an early character set that codes 128 English characters using one byte each; A is 65, a is 97."
      },
      {
        "q": "What is meant by “Unicode” in this unit?",
        "a": "the modern character set that gives a code to every character in every script, including Vai and Arabic."
      },
      {
        "q": "What is meant by “pixel” in this unit?",
        "a": "one tiny square of colour in a digital image; short for picture element."
      },
      {
        "q": "What is meant by “resolution” in this unit?",
        "a": "the number of pixels across and down an image, such as 1,200 × 800."
      },
      {
        "q": "What is meant by “colour depth” in this unit?",
        "a": "the number of bits used for each pixel's colour; 1 bit gives two colours, 8 bits give 256, 24 bits give millions."
      },
      {
        "q": "What is meant by “bitmap” in this unit?",
        "a": "an image stored as a grid of pixel colours, such as a photograph."
      },
      {
        "q": "What is meant by “sample” in this unit?",
        "a": "one measurement of a sound wave's height taken at an instant."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A Grade 9 student's phone shows 'storage full' with 3,000 photos on it, and she plans to buy a new phone rather than 'lose her pictures'."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Estimate the size — 3,000 photos at about 3 MB each is 9 GB — then choose: copy them to a computer, a memory card or a backup service, delete the duplicates and blurred shots, and set the camera to a lower resolution for everyday pictures; the phone is fine, the arithmetic was missing."
      },
      {
        "q": "State this unit idea in your own words: Text, images and sound are all stored as binary numbers; only the rule for reading the numbers differs.",
        "a": "Text, images and sound are all stored as binary numbers; only the rule for reading the numbers differs."
      },
      {
        "q": "State this unit idea in your own words: Image file size is roughly width × height × bits per pixel, so doubling both sides makes the file about four times larger.",
        "a": "Image file size is roughly width × height × bits per pixel, so doubling both sides makes the file about four times larger."
      },
      {
        "q": "How is an image stored in a computer?",
        "a": "As a grid of pixels, each holding a number for its colour; the resolution and colour depth decide the file size."
      },
      {
        "q": "What is the difference between lossy and lossless compression?",
        "a": "Lossless keeps every bit and can be fully undone (ZIP, PNG); lossy discards detail the eye or ear barely notices and cannot be undone (JPEG, MP3)."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Data Representation — Text, Images and Sound” Is"
      },
      {
        "k": "p",
        "t": "Everything a computer stores is **binary**. Text is stored by giving each character a number in a **character set** such as **ASCII** (one byte per character) or **Unicode** (which also covers Vai, Arabic and every other script). An image is a grid of **pixels**, each holding a colour number; its **resolution** and **colour depth** decide its file size. Sound is measured thousands of times a second — the **sample rate** — and each measurement stored as a number. **Compression** makes files smaller for a weak Liberian connection. Students who plan to buy a new phone because 3,000 photos have filled its storage have not yet estimated what those photos weigh. Estimate the size — 3,000 photos at about 3 MB each is 9 GB — then choose: copy them to a computer, a memory card or a backup service, delete the duplicates and blurred shots, and set the camera to a lower resolution for everyday pictures; the phone is fine, the arithmetic was missing. Text, images and sound are all stored as binary numbers; only the rule for reading the numbers differs. Image file size is roughly width × height × bits per pixel, so doubling both sides makes the file about four times larger."
      },
      {
        "k": "p",
        "t": "Computers store text as character codes (ASCII uses one byte per character; Unicode covers all scripts), images as grids of pixels whose colours are numbers (file size ≈ width × height × colour depth), and sound as a stream of samples taken thousands of times per second. Larger resolution, colour depth or sample rate means better quality and bigger files; compression reduces size for storage and sending."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: Text, images and sound are all stored as binary numbers; only the rule for reading the numbers differs. Image file size is roughly width × height × bits per pixel, so doubling both sides makes the file about four times larger."
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
        "t": "Each idea below is a working definition for Grade 9. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
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
            "character set",
            "the agreed table that gives every letter, digit and symbol a number code",
            "In this unit, character set means the agreed table that gives every letter, digit and symbol a number code."
          ],
          [
            "ASCII",
            "an early character set that codes 128 English characters using one byte each; A is 65, a is 97",
            "In this unit, ASCII means an early character set that codes 128 English characters using one byte each; A is 65, a is 97."
          ],
          [
            "Unicode",
            "the modern character set that gives a code to every character in every script, including Vai and Arabic",
            "In this unit, Unicode means the modern character set that gives a code to every character in every script, including Vai and Arabic."
          ],
          [
            "pixel",
            "one tiny square of colour in a digital image; short for picture element",
            "In this unit, pixel means one tiny square of colour in a digital image; short for picture element."
          ],
          [
            "resolution",
            "the number of pixels across and down an image, such as 1,200 × 800",
            "In this unit, resolution means the number of pixels across and down an image, such as 1,200 × 800."
          ],
          [
            "colour depth",
            "the number of bits used for each pixel's colour; 1 bit gives two colours, 8 bits give 256, 24 bits give millions",
            "In this unit, colour depth means the number of bits used for each pixel's colour; 1 bit gives two colours, 8 bits give 256, 24 bits give millions."
          ],
          [
            "bitmap",
            "an image stored as a grid of pixel colours, such as a photograph",
            "In this unit, bitmap means an image stored as a grid of pixel colours, such as a photograph."
          ],
          [
            "sample",
            "one measurement of a sound wave's height taken at an instant",
            "In this unit, sample means one measurement of a sound wave's height taken at an instant."
          ],
          [
            "sample rate",
            "how many samples are taken each second, such as 44,100 for CD quality",
            "In this unit, sample rate means how many samples are taken each second, such as 44,100 for CD quality."
          ],
          [
            "file size",
            "the number of bytes a file occupies in storage",
            "In this unit, file size means the number of bytes a file occupies in storage."
          ],
          [
            "compression",
            "reducing a file's size, either without losing detail (lossless) or by discarding detail (lossy)",
            "In this unit, compression means reducing a file's size, either without losing detail (lossless) or by discarding detail (lossy)."
          ],
          [
            "metadata",
            "data about data stored with a file, such as an image's size, date and the camera used",
            "In this unit, metadata means data about data stored with a file, such as an image's size, date and the camera used."
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
          "**ASCII** — 128 English characters, one byte each; **Unicode** — every script, one to four bytes each.",
          "**Resolution** — how many pixels; **colour depth** — how many bits per pixel.",
          "**Sample rate** — how often sound is measured; **bit depth** — how precisely each sample is stored.",
          "**Lossless** compression keeps every detail (a document, a program); **lossy** discards some (a photo, a song).",
          "**Bit** — 0 or 1; **byte** — 8 bits; a character, a pixel or a sample is some number of them."
        ]
      },
      {
        "k": "table",
        "head": [
          "Character",
          "ASCII code (decimal)",
          "In binary (8 bits)"
        ],
        "rows": [
          [
            "A",
            "65",
            "01000001"
          ],
          [
            "B",
            "66",
            "01000010"
          ],
          [
            "a",
            "97",
            "01100001"
          ],
          [
            "0 (the digit)",
            "48",
            "00110000"
          ],
          [
            "space",
            "32",
            "00100000"
          ],
          [
            "L",
            "76",
            "01001100"
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
          "Change to an image or a sound",
          "Effect on quality",
          "Effect on file size"
        ],
        "rows": [
          [
            "Double the width and the height",
            "Sharper when enlarged",
            "About four times larger"
          ],
          [
            "1 bit per pixel instead of 8",
            "Black and white only",
            "One eighth of the size"
          ],
          [
            "24 bits per pixel instead of 8",
            "Millions of colours",
            "Three times larger"
          ],
          [
            "Halve the sample rate",
            "Duller, less detail",
            "About half"
          ],
          [
            "Lossy compression (JPEG, MP3)",
            "Slight loss, often invisible",
            "Much smaller"
          ],
          [
            "Lossless compression (ZIP, PNG)",
            "No loss at all",
            "Somewhat smaller"
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
        "t": "A Liberian student sending an exam photo to a cousin abroad, a radio station archiving a jingle, a market woman whose phone is 'full of pictures', and the Vai script that Unicode finally made typeable all live in this unit. Knowing that a 4,000 × 3,000 photo at 24 bits is 36 megabytes before compression explains why the phone chokes, why WhatsApp shrinks it, and why a 2 Mbps line takes minutes. Knowing that ASCII could not spell Vai and Unicode can is a lesson in whose languages the machines were built for — and who had to fix it."
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
        "t": "The class investigation is **“Encoding a word and a picture on paper”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Pairs write their names in ASCII using the code table (A = 65 … Z = 90, a = 97 … z = 122) and convert the first two codes to 8-bit binary, then count the bytes the name needs.",
          "On squared paper they draw a 8 × 8 black-and-white letter, write the 64 bits row by row (1 = black), and calculate the size in bytes.",
          "They redraw the same letter on a 16 × 16 grid and calculate the new size, then explain the factor of four.",
          "The navigator 'sends' the 8 × 8 bits as a string of 0s and 1s; the driver redraws the image from the bits alone — one wrong bit is a visible bug.",
          "If a device is present, one pair checks a photo's resolution and file size in its properties and compares with the width × height × depth estimate; otherwise the encoded name and images are the finished work."
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
        "t": "**Problem.** A phone camera takes a 4,000 × 3,000 pixel photo at 24 bits per pixel. Estimate the uncompressed file size in megabytes. The messaging app then sends a 1,000 × 750 version at the same depth: estimate its size and the factor by which it shrank. Finally, how many bytes does the caption 'Monrovia 2026' take in ASCII?"
      },
      {
        "k": "num",
        "items": [
          "Pixels: 4,000 × 3,000 = 12,000,000.",
          "Bits: 12,000,000 × 24 = 288,000,000 bits; ÷ 8 = 36,000,000 bytes ≈ 36 MB.",
          "Smaller version: 1,000 × 750 = 750,000 pixels × 24 = 18,000,000 bits = 2,250,000 bytes ≈ 2.25 MB.",
          "Factor: 36 ÷ 2.25 = 16 — each side was quartered, so the area and the size fell by 4 × 4 = 16.",
          "Caption: 'Monrovia 2026' has 13 characters including the space; ASCII is one byte each, so 13 bytes."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** About 36 MB uncompressed; the sent version about 2.25 MB, sixteen times smaller; the caption takes 13 bytes."
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
          "Forgetting to divide bits by 8 to get bytes.",
          "Doubling both sides of an image and expecting the file to double, not quadruple.",
          "Thinking lossy compression can be undone to recover the original detail.",
          "Believing ASCII can write every language; it has no codes for Vai, Arabic or accented letters."
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
        "t": "Safety, Fairness and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN, a one-time code, a home address or a photograph of a classmate. If a message asks for a picture, money or a meeting, the student stops, keeps the message and tells a teacher. Copying another student's work and calling it your own is not collaboration; pair work shares the thinking, not the credit for work you did not do. Unplugged work is complete computing work."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, a scam, a request for a picture or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered, and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
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
        "t": "A Grade 9 student's phone shows 'storage full' with 3,000 photos on it, and she plans to buy a new phone rather than 'lose her pictures'."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Estimate the size — 3,000 photos at about 3 MB each is 9 GB — then choose: copy them to a computer, a memory card or a backup service, delete the duplicates and blurred shots, and set the camera to a lower resolution for everyday pictures; the phone is fine, the arithmetic was missing."
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
        "t": "Estimate the size — 3,000 photos at about 3 MB each is 9 GB — then choose: copy them to a computer, a memory card or a backup service, delete the duplicates and blurred shots, and set the camera to a lower resolution for everyday pictures; the phone is fine, the arithmetic was missing."
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
        "t": "The investigation **“Encoding a word and a picture on paper”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
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
            "ASCII table",
            "The character set",
            "Names as codes and bytes"
          ],
          [
            "Squared grid",
            "A bitmap's pixels",
            "The bits row by row and the size in bytes"
          ],
          [
            "String of 0s and 1s",
            "A file being sent",
            "The image redrawn from the bits"
          ],
          [
            "Class chart",
            "Encoding bugs the class found",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Same Bits, Different Rules"
      },
      {
        "k": "p",
        "t": "01000001 is the letter A if read as ASCII, the number 65 if read as an integer, a shade of grey if read as a pixel, and one sample of a sound if read as audio. The file's type — its extension and metadata — tells the program which rule to use. Bits mean nothing until a rule is chosen."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Why Unicode Matters to Liberia"
      },
      {
        "k": "p",
        "t": "ASCII was built for English typewriters in the 1960s. Vai, one of the world's few indigenous African scripts, could not be typed until Unicode gave each of its syllables a code. A character set decides which languages can live online; Unicode's answer is 'all of them'."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Estimating Before Sending"
      },
      {
        "k": "p",
        "t": "Width × height × bits per pixel ÷ 8 gives bytes; ÷ 1,000,000 gives megabytes. A Grade 9 student who can do that on paper knows whether a photo will send on the school's connection before she tries — and why the app offers to 'reduce size'."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Lossy Is Fine for Ears and Eyes, Never for Code"
      },
      {
        "k": "p",
        "t": "JPEG and MP3 throw away detail the eye and ear barely notice, cutting size by ten or more. A program, a spreadsheet or a legal document cannot lose a single byte, so they are zipped losslessly or not at all. Choose by what the file is for."
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
        "t": "A fair period test on “Data Representation — Text, Images and Sound” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit and use each in a sentence.",
          "Write or trace a four-step algorithm, formula or procedure connected with “Data Representation — Text, Images and Sound”, showing every line of working.",
          "Sort four examples using “About text / About images and sound” and give one reason.",
          "Debug a broken set of steps without blaming the person who wrote them, and say what the bug was."
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
        "t": "A 4-week unit on “Data Representation — Text, Images and Sound” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
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
            "What “Data Representation — Text, Images and Sound” is, and where it already appears around us.",
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
        "t": "This is original supplementary teaching material for Liberian junior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, character set means the agreed table that gives every letter, digit and symbol a number code.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, ASCII means the modern character set that gives a code to every character in every script, including Vai and Arabic.",
        "a": "False",
        "why": "ASCII means an early character set that codes 128 English characters using one byte each; A is 65, a is 97; the statement describes Unicode."
      },
      {
        "s": "In this unit, pixel means one tiny square of colour in a digital image; short for picture element.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Unplugged work with paper, trace tables and cards is complete computing work; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the instructions, not in the person."
      },
      {
        "s": "Students should share passwords or mobile-money PINs so a partner can finish the work.",
        "a": "False",
        "why": "A password or PIN is secret. Never share a password, PIN, one-time code or personal photograph."
      },
      {
        "s": "Text, images and sound are all stored as binary numbers; only the rule for reading the numbers differs.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "Doubling the width and height of an image roughly doubles its file size.",
        "a": "False",
        "why": "Doubling both sides quadruples the number of pixels and so the size."
      },
      {
        "s": "Unicode can represent characters from every writing system, including Vai.",
        "a": "True",
        "why": "Unicode gives a code to every character in every script; ASCII covers only 128 English characters."
      }
    ],
    "classify": {
      "title": "About text / About images and sound",
      "groups": [
        {
          "name": "About text",
          "items": [
            "ASCII",
            "Unicode",
            "A is 65",
            "one byte per English character",
            "the Vai script's codes",
            "a character set"
          ]
        },
        {
          "name": "About images and sound",
          "items": [
            "pixel",
            "resolution 1,200 × 800",
            "24-bit colour depth",
            "sample rate 44,100 per second",
            "JPEG lossy compression",
            "a bitmap"
          ]
        }
      ]
    },
    "diagram": {
      "title": "A bitmap image as a grid of numbers",
      "caption": "Label each part and state what it does in “Data Representation — Text, Images and Sound”.",
      "parts": [
        {
          "p": "Pixel",
          "f": "one square of the grid holding a colour number"
        },
        {
          "p": "Resolution",
          "f": "the number of pixels across and down"
        },
        {
          "p": "Colour depth",
          "f": "the bits used for each pixel's colour"
        },
        {
          "p": "File size",
          "f": "width × height × bits per pixel ÷ 8 bytes"
        },
        {
          "p": "Metadata",
          "f": "the size, date and camera details stored with the image"
        }
      ]
    },
    "experiment": {
      "title": "Encoding a word and a picture on paper",
      "aim": "To practise the ideas of “Data Representation — Text, Images and Sound” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Paper cards, arrows and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class computing chart",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “Encoding a word and a picture on paper” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A Grade 9 student's phone shows 'storage full' with 3,000 photos on it, and she plans to buy a new phone rather than 'lose her pictures'. What should happen next?",
        "a": "Estimate the size — 3,000 photos at about 3 MB each is 9 GB — then choose: copy them to a computer, a memory card or a backup service, delete the duplicates and blurred shots, and set the camera to a lower resolution for everyday pictures; the phone is fine, the arithmetic was missing."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Data Representation — Text, Images and Sound”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's trace gives the wrong answer. What do you say, and why?",
        "a": "Remind the class that a bug is in the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian daily life (a market, a clinic, a radio station, a mobile-money kiosk, a school office).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as mobile money, a clinic record, a radio bulletin, a school register or a market ledger."
      },
      {
        "q": "A school wants to email a scanned 2,400 × 3,300 pixel document at 8 bits per pixel. Estimate its size, and suggest two ways to make it small enough to send on a slow connection.",
        "a": "2,400 × 3,300 = 7,920,000 pixels × 8 bits = 63,360,000 bits ≈ 7.9 MB; scan at a lower resolution, use 1-bit black and white for text, or compress it as a PDF/JPEG."
      },
      {
        "q": "A radio station records a 3-minute jingle at 44,100 samples per second with 16 bits per sample, in mono. Estimate the uncompressed size.",
        "a": "180 seconds × 44,100 × 16 bits = 127,008,000 bits ≈ 15.9 MB."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “Encoding a word and a picture on paper” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, paper grids and a paper keyboard",
      "A class computing chart",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's phone, kept dry and in sight"
    ],
    "aids": [
      "Word cards — character set, ASCII, Unicode",
      "A flowchart or trace table of “Encoding a word and a picture on paper”",
      "An ASCII code table and 8 × 8 and 16 × 16 squared grids",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing word and what it means.",
      "Practise this week's paper method (a trace, a conversion, a formula or an algorithm) with a sibling or a friend — no device needed.",
      "Find one example of this unit's idea in your community (a market, a clinic, a radio station, a mobile-money kiosk or an office) and write three sentences about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written algorithm, trace table or worked conversion",
      "Pair-debug observed against the class chart",
      "A short written response to the Liberian scenario"
    ],
    "worked": [
      {
        "q": "ASCII: A is 65. What is the code for D?",
        "steps": [
          "A 65, B 66, C 67, D 68."
        ],
        "a": "68"
      },
      {
        "q": "Convert ASCII 65 to 8-bit binary.",
        "steps": [
          "64 + 1 → 01000001."
        ],
        "a": "01000001"
      },
      {
        "q": "How many bytes does 'Grade 9' take in ASCII?",
        "steps": [
          "7 characters including the space."
        ],
        "a": "7 bytes"
      },
      {
        "q": "An 8 × 8 black-and-white image at 1 bit per pixel: how many bytes?",
        "steps": [
          "64 bits ÷ 8."
        ],
        "a": "8 bytes"
      },
      {
        "q": "The same image at 16 × 16: how many bytes, and how many times larger?",
        "steps": [
          "256 bits ÷ 8 = 32; 32 ÷ 8 = 4."
        ],
        "a": "32 bytes; four times"
      },
      {
        "q": "A 1,000 × 750 photo at 24 bits per pixel: size in bytes?",
        "steps": [
          "750,000 × 24 = 18,000,000 bits ÷ 8."
        ],
        "a": "2,250,000 bytes (about 2.25 MB)"
      },
      {
        "q": "How many colours can 8 bits per pixel show?",
        "steps": [
          "2⁸."
        ],
        "a": "256"
      },
      {
        "q": "A song is compressed with MP3 and then 'uncompressed'. Is the original detail back?",
        "steps": [
          "Lossy discards."
        ],
        "a": "No — lossy compression discards detail permanently"
      }
    ]
  },
  {
    "grade": 9,
    "period": "IV",
    "sem": "Two",
    "icon": "🗃️",
    "csPlan": true,
    "title": "Databases — Tables, Records and Fields",
    "subtitle": "Computer Science · Original junior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Unplugged-first: a class with no computer lab can still complete the unit on paper, and a class with one shared device can extend it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary accurately in speech and writing.",
      "Write, trace and debug an algorithm, a formula or a set of steps connected with the unit — on paper first, on a device when one is available.",
      "Make and justify a safe, honest and lawful choice about devices, data and people online."
    ],
    "objectives": [
      "Explain the key terms in “Databases — Tables, Records and Fields” and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm or set of steps connected with this unit, on paper.",
      "Sort examples into the unit's two groups and give a reason for each choice.",
      "Trace a worked example step by step, showing every line of working, and state the answer in a full sentence.",
      "Apply the unit's ideas to a fictional Liberian school, market or office scenario.",
      "Debug a broken set of steps, a formula or a short program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared record of bugs found.",
      "Name one Liberian example of this unit's idea (mobile money, a radio station, a clinic record, a ministry office, a school register or a market stall)."
    ],
    "safeguard": "A junior high computing lesson uses charts, paper models, trace tables and, when a device is present, a shared school machine or the teacher's own phone. Students never share passwords or PINs, never photograph one another without consent, and never post a classmate's image or details. A mobile-money PIN is a secret even from a friend. If a student reports online bullying, a request for a picture, a scam message or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "A database stores data in tables of records (rows) and fields (columns). A primary key uniquely identifies each record. Data types for fields (text, number, date, yes/no) and validation rules keep the data clean. Queries search and sort the data using conditions; reports present the results. Compared with paper, a database finds, sorts and updates records quickly and keeps one copy of the truth.",
    "focus": [
      "Unplugged demonstration and paper trace",
      "Pair work and debugging",
      "Liberian scenario",
      "Computing fair check"
    ],
    "terms": [
      {
        "t": "database",
        "d": "an organised collection of related data stored so it can be searched, sorted and updated easily",
        "x": "In this unit, database means an organised collection of related data stored so it can be searched, sorted and updated easily."
      },
      {
        "t": "table",
        "d": "a set of records about one kind of thing, arranged in rows and columns",
        "x": "In this unit, table means a set of records about one kind of thing, arranged in rows and columns."
      },
      {
        "t": "record",
        "d": "one row of a table — all the fields about one person, item or event",
        "x": "In this unit, record means one row of a table — all the fields about one person, item or event."
      },
      {
        "t": "field",
        "d": "one column of a table — one piece of data kept for every record, such as Surname",
        "x": "In this unit, field means one column of a table — one piece of data kept for every record, such as Surname."
      },
      {
        "t": "primary key",
        "d": "the field whose value is different for every record, so each record can be found without confusion",
        "x": "In this unit, primary key means the field whose value is different for every record, so each record can be found without confusion."
      },
      {
        "t": "data type",
        "d": "the kind of value a field holds: text, number, date, currency or yes/no",
        "x": "In this unit, data type means the kind of value a field holds: text, number, date, currency or yes/no."
      },
      {
        "t": "validation",
        "d": "a rule that checks data as it is entered and rejects values that cannot be right",
        "x": "In this unit, validation means a rule that checks data as it is entered and rejects values that cannot be right."
      },
      {
        "t": "query",
        "d": "a question put to the database using conditions, whose answer is a table of matching records",
        "x": "In this unit, query means a question put to the database using conditions, whose answer is a table of matching records."
      },
      {
        "t": "sort",
        "d": "to arrange records in order of a field, ascending or descending",
        "x": "In this unit, sort means to arrange records in order of a field, ascending or descending."
      },
      {
        "t": "report",
        "d": "a printed or displayed presentation of the results of a query",
        "x": "In this unit, report means a printed or displayed presentation of the results of a query."
      },
      {
        "t": "duplicate",
        "d": "a record that repeats one already stored, usually a sign of a missing or ignored primary key",
        "x": "In this unit, duplicate means a record that repeats one already stored, usually a sign of a missing or ignored primary key."
      },
      {
        "t": "flat file",
        "d": "a database made of a single table",
        "x": "In this unit, flat file means a database made of a single table."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “database” in this unit?",
        "a": "an organised collection of related data stored so it can be searched, sorted and updated easily."
      },
      {
        "q": "What is meant by “table” in this unit?",
        "a": "a set of records about one kind of thing, arranged in rows and columns."
      },
      {
        "q": "What is meant by “record” in this unit?",
        "a": "one row of a table — all the fields about one person, item or event."
      },
      {
        "q": "What is meant by “field” in this unit?",
        "a": "one column of a table — one piece of data kept for every record, such as Surname."
      },
      {
        "q": "What is meant by “primary key” in this unit?",
        "a": "the field whose value is different for every record, so each record can be found without confusion."
      },
      {
        "q": "What is meant by “data type” in this unit?",
        "a": "the kind of value a field holds: text, number, date, currency or yes/no."
      },
      {
        "q": "What is meant by “validation” in this unit?",
        "a": "a rule that checks data as it is entered and rejects values that cannot be right."
      },
      {
        "q": "What is meant by “query” in this unit?",
        "a": "a question put to the database using conditions, whose answer is a table of matching records."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A school office keeps its register in a spreadsheet copied to three teachers' flash drives; a new student is added on one copy, a fee payment recorded on another, and at the end of term the child appears on no list and her fees appear as unpaid."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Name the problem — no single copy and no primary key — then design one Students table with a StudentID key and validation rules, keep it in one place with a dated backup, enter every change there, and produce each teacher's class list as a query rather than a copy."
      },
      {
        "q": "State this unit idea in your own words: A table holds records (rows) made of fields (columns), and the primary key identifies each record uniquely.",
        "a": "A table holds records (rows) made of fields (columns), and the primary key identifies each record uniquely."
      },
      {
        "q": "State this unit idea in your own words: A query asks a question with a condition, and the answer is a new table of matching records.",
        "a": "A query asks a question with a condition, and the answer is a new table of matching records."
      },
      {
        "q": "Give three advantages of a database over a paper register.",
        "a": "Records are found and sorted in seconds, one copy of the truth is kept and backed up, and validation and queries reduce errors and repeated typing."
      },
      {
        "q": "What is a query?",
        "a": "A question put to the database using a condition on one or more fields; the answer is a table of the matching records."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Databases — Tables, Records and Fields” Is"
      },
      {
        "k": "p",
        "t": "A **database** is an organised store of data that can be searched, sorted and updated without rewriting it. A **table** holds one kind of thing — students, books, patients; each row is a **record** (one student) and each column a **field** (name, date of birth, class). A **primary key** is the field that identifies each record uniquely. A **query** asks the database a question — every Grade 9 student born before 2011 — and the answer is another table. **Validation** stops nonsense such as a date of birth in the future going in. Offices that keep three copies of a register on three flash drives have three databases and no truth. Name the problem — no single copy and no primary key — then design one Students table with a StudentID key and validation rules, keep it in one place with a dated backup, enter every change there, and produce each teacher's class list as a query rather than a copy. A table holds records (rows) made of fields (columns), and the primary key identifies each record uniquely. A query asks a question with a condition, and the answer is a new table of matching records."
      },
      {
        "k": "p",
        "t": "A database stores data in tables of records (rows) and fields (columns). A primary key uniquely identifies each record. Data types for fields (text, number, date, yes/no) and validation rules keep the data clean. Queries search and sort the data using conditions; reports present the results. Compared with paper, a database finds, sorts and updates records quickly and keeps one copy of the truth."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: A table holds records (rows) made of fields (columns), and the primary key identifies each record uniquely. A query asks a question with a condition, and the answer is a new table of matching records."
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
        "t": "Each idea below is a working definition for Grade 9. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
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
            "database",
            "an organised collection of related data stored so it can be searched, sorted and updated easily",
            "In this unit, database means an organised collection of related data stored so it can be searched, sorted and updated easily."
          ],
          [
            "table",
            "a set of records about one kind of thing, arranged in rows and columns",
            "In this unit, table means a set of records about one kind of thing, arranged in rows and columns."
          ],
          [
            "record",
            "one row of a table — all the fields about one person, item or event",
            "In this unit, record means one row of a table — all the fields about one person, item or event."
          ],
          [
            "field",
            "one column of a table — one piece of data kept for every record, such as Surname",
            "In this unit, field means one column of a table — one piece of data kept for every record, such as Surname."
          ],
          [
            "primary key",
            "the field whose value is different for every record, so each record can be found without confusion",
            "In this unit, primary key means the field whose value is different for every record, so each record can be found without confusion."
          ],
          [
            "data type",
            "the kind of value a field holds: text, number, date, currency or yes/no",
            "In this unit, data type means the kind of value a field holds: text, number, date, currency or yes/no."
          ],
          [
            "validation",
            "a rule that checks data as it is entered and rejects values that cannot be right",
            "In this unit, validation means a rule that checks data as it is entered and rejects values that cannot be right."
          ],
          [
            "query",
            "a question put to the database using conditions, whose answer is a table of matching records",
            "In this unit, query means a question put to the database using conditions, whose answer is a table of matching records."
          ],
          [
            "sort",
            "to arrange records in order of a field, ascending or descending",
            "In this unit, sort means to arrange records in order of a field, ascending or descending."
          ],
          [
            "report",
            "a printed or displayed presentation of the results of a query",
            "In this unit, report means a printed or displayed presentation of the results of a query."
          ],
          [
            "duplicate",
            "a record that repeats one already stored, usually a sign of a missing or ignored primary key",
            "In this unit, duplicate means a record that repeats one already stored, usually a sign of a missing or ignored primary key."
          ],
          [
            "flat file",
            "a database made of a single table",
            "In this unit, flat file means a database made of a single table."
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
          "**Table** — the whole set; **record** — one row; **field** — one column.",
          "**Primary key** must be unique and never blank; a name is not one — two students can share it.",
          "**Query** finds; **sort** orders; **report** presents.",
          "**Validation** checks the form of data (a date, a range); it cannot check the truth.",
          "**Database** keeps one copy; a **spreadsheet** copied to five people keeps five versions."
        ]
      },
      {
        "k": "table",
        "head": [
          "Field in a student table",
          "Data type",
          "Validation rule"
        ],
        "rows": [
          [
            "StudentID",
            "Text or number (primary key)",
            "Required; unique; a fixed pattern such as G9-0042"
          ],
          [
            "Surname",
            "Text",
            "Required; letters only"
          ],
          [
            "DateOfBirth",
            "Date",
            "Must be a past date, at least 10 years ago"
          ],
          [
            "Class",
            "Text",
            "One of 9A, 9B, 9C"
          ],
          [
            "FeesPaid",
            "Currency",
            "0 or more; not more than the fee"
          ],
          [
            "HasBirthCertificate",
            "Yes/No",
            "Only yes or no"
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
          "Query condition",
          "Result"
        ],
        "rows": [
          [
            "Which students are in 9B?",
            "Class = \"9B\"",
            "The records of every 9B student"
          ],
          [
            "Who was born before 2011?",
            "DateOfBirth < 01/01/2011",
            "Older students"
          ],
          [
            "Who still owes fees?",
            "FeesPaid < 15000",
            "Students with a balance"
          ],
          [
            "Who in 9A has no birth certificate?",
            "Class = \"9A\" AND HasBirthCertificate = No",
            "A short list for the office"
          ],
          [
            "List everyone by surname",
            "Sort by Surname ascending",
            "The register in alphabetical order"
          ],
          [
            "How many students are there?",
            "Count of records",
            "One number"
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
        "t": "The WAEC candidate list, the national voter roll, a clinic's patient cards, the school's fee ledger and a mobile-money provider's accounts are all databases; when a Liberian says 'my name is not on the list', a record is missing or a key was mistyped. A school that moves its register from a spreadsheet copied on five flash drives to one database with a StudentID key stops losing children between versions. A class with no computer designs the table on paper, writes the keys, sets the validation rules and runs the queries by hand through a stack of record cards — exactly the thinking the software automates."
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
        "t": "The class investigation is **“The card-index school database”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Pairs design a Students table on paper: six fields, a data type for each, a validation rule for each, and StudentID as the primary key.",
          "They write ten record cards, including two that break a rule (a future date of birth, a duplicate ID) and decide what the validation would do with each.",
          "The navigator reads a query aloud (Class = 9B AND FeesPaid < 15000); the driver sorts through the cards and lays out the matching ones as the result table.",
          "They sort the cards by Surname, then by DateOfBirth, and write a one-page report from a query.",
          "If a computer is present, one pair builds the same table in a database or spreadsheet program and runs the same query while the others check the result against the cards; otherwise the card index and its queries are the finished work."
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
        "t": "**Problem.** A school's student table has fields StudentID, Surname, FirstName, DateOfBirth, Class and FeesPaid. Two students are both called Mary Kollie in 9A. The office wants a list of every student in 9A who owes fees (fee is 15,000), sorted by surname. Explain why Surname cannot be the primary key, write the query in words and as a condition, and say how the two Mary Kollies are kept apart."
      },
      {
        "k": "num",
        "items": [
          "Surname is not unique — two records share Kollie — and a primary key must be different for every record.",
          "StudentID is the key: each Mary Kollie has her own ID (say G9-0017 and G9-0031), so their fees and dates of birth are never mixed.",
          "Query in words: show the records where Class is 9A and FeesPaid is less than 15,000.",
          "Condition: Class = \"9A\" AND FeesPaid < 15000; sort by Surname ascending.",
          "Result: a table of the 9A debtors in alphabetical order, each identified by StudentID."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** Surname is not unique so StudentID is the primary key; the query Class = \"9A\" AND FeesPaid < 15000, sorted by Surname, lists the debtors, and the two Mary Kollies are told apart by their IDs."
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
          "Choosing a name as the primary key, so two students merge into one record.",
          "Putting two facts in one field (the whole name in one box), which makes sorting by surname impossible.",
          "Typing dates as text, so the database cannot compare them or sort them.",
          "Keeping five copies of the table on five flash drives and calling the newest one 'the database'."
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
        "t": "Safety, Fairness and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN, a one-time code, a home address or a photograph of a classmate. If a message asks for a picture, money or a meeting, the student stops, keeps the message and tells a teacher. Copying another student's work and calling it your own is not collaboration; pair work shares the thinking, not the credit for work you did not do. Unplugged work is complete computing work."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, a scam, a request for a picture or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered, and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
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
        "t": "A school office keeps its register in a spreadsheet copied to three teachers' flash drives; a new student is added on one copy, a fee payment recorded on another, and at the end of term the child appears on no list and her fees appear as unpaid."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Name the problem — no single copy and no primary key — then design one Students table with a StudentID key and validation rules, keep it in one place with a dated backup, enter every change there, and produce each teacher's class list as a query rather than a copy."
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
        "t": "Name the problem — no single copy and no primary key — then design one Students table with a StudentID key and validation rules, keep it in one place with a dated backup, enter every change there, and produce each teacher's class list as a query rather than a copy."
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
        "t": "The investigation **“The card-index school database”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
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
            "Table-design sheet",
            "The structure of the table",
            "Fields, data types, validation rules, the key"
          ],
          [
            "Record cards",
            "The records",
            "One card per student, sorted and queried by hand"
          ],
          [
            "Query slip",
            "A question to the database",
            "The condition and the result table"
          ],
          [
            "Class chart",
            "Design bugs the class found (name as key, two facts in one field)",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "One Fact Per Field, One Thing Per Table"
      },
      {
        "k": "p",
        "t": "Surname and FirstName are two fields, not one; students and payments are two tables, not one. Splitting data this way is what lets the office sort by surname, total payments per student and change a class without retyping. The habit is called good database design, and it starts on paper."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Validation Catches Form, Not Truth"
      },
      {
        "k": "p",
        "t": "A rule that DateOfBirth must be in the past stops a typing error; it cannot know the date is right. A rule that Class is one of 9A, 9B, 9C stops '9Z'. Validation keeps out impossible data; only a person can keep out wrong data."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Queries Are Questions With Conditions"
      },
      {
        "k": "p",
        "t": "Every query has a condition built from a field, a comparison and a value, joined with AND or OR — the same operators as Grade 9's programs. Class = \"9B\" AND FeesPaid < 15000 is a question the office asks every week; written once, it is answered in a second, forever."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Paper Cards Are a Database Too"
      },
      {
        "k": "p",
        "t": "A clinic's card index, sorted by patient number with a colour tab for each ward, is a database with a primary key and a sort order. The software adds speed, safe copies and instant queries; it does not add the idea. A student who designs a good card index will design a good table."
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
        "t": "A fair period test on “Databases — Tables, Records and Fields” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit and use each in a sentence.",
          "Write or trace a four-step algorithm, formula or procedure connected with “Databases — Tables, Records and Fields”, showing every line of working.",
          "Sort four examples using “Good primary keys / Poor primary keys” and give one reason.",
          "Debug a broken set of steps without blaming the person who wrote them, and say what the bug was."
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
        "t": "A 4-week unit on “Databases — Tables, Records and Fields” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
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
            "What “Databases — Tables, Records and Fields” is, and where it already appears around us.",
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
        "t": "This is original supplementary teaching material for Liberian junior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, database means an organised collection of related data stored so it can be searched, sorted and updated easily.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, table means one row of a table — all the fields about one person, item or event.",
        "a": "False",
        "why": "table means a set of records about one kind of thing, arranged in rows and columns; the statement describes record."
      },
      {
        "s": "In this unit, field means one column of a table — one piece of data kept for every record, such as Surname.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Unplugged work with paper, trace tables and cards is complete computing work; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the instructions, not in the person."
      },
      {
        "s": "Students should share passwords or mobile-money PINs so a partner can finish the work.",
        "a": "False",
        "why": "A password or PIN is secret. Never share a password, PIN, one-time code or personal photograph."
      },
      {
        "s": "A table holds records (rows) made of fields (columns), and the primary key identifies each record uniquely.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "A person's surname makes a good primary key for a student table.",
        "a": "False",
        "why": "Two students can share a surname; a primary key must be unique for every record."
      },
      {
        "s": "A validation rule can stop a date of birth in the future from being entered.",
        "a": "True",
        "why": "Validation checks the form and range of data as it is entered."
      }
    ],
    "classify": {
      "title": "Good primary keys / Poor primary keys",
      "groups": [
        {
          "name": "Good primary keys",
          "items": [
            "StudentID G9-0042",
            "a WAEC candidate number",
            "a patient number on a clinic card",
            "a mobile-money account number",
            "a book's accession number",
            "a national ID number"
          ]
        },
        {
          "name": "Poor primary keys",
          "items": [
            "Surname",
            "first name",
            "date of birth",
            "class 9B",
            "the town a student lives in",
            "a blank field"
          ]
        }
      ]
    },
    "diagram": {
      "title": "A database table with records, fields and a key",
      "caption": "Label each part and state what it does in “Databases — Tables, Records and Fields”.",
      "parts": [
        {
          "p": "Table",
          "f": "all the records about one kind of thing, such as Students"
        },
        {
          "p": "Record (row)",
          "f": "everything stored about one student"
        },
        {
          "p": "Field (column)",
          "f": "one piece of data kept for every record, such as Surname"
        },
        {
          "p": "Primary key",
          "f": "the field, such as StudentID, that is unique for every record"
        },
        {
          "p": "Query result",
          "f": "a new table holding only the records that match a condition"
        }
      ]
    },
    "experiment": {
      "title": "The card-index school database",
      "aim": "To practise the ideas of “Databases — Tables, Records and Fields” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Paper cards, arrows and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class computing chart",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “The card-index school database” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A school office keeps its register in a spreadsheet copied to three teachers' flash drives; a new student is added on one copy, a fee payment recorded on another, and at the end of term the child appears on no list and her fees appear as unpaid. What should happen next?",
        "a": "Name the problem — no single copy and no primary key — then design one Students table with a StudentID key and validation rules, keep it in one place with a dated backup, enter every change there, and produce each teacher's class list as a query rather than a copy."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Databases — Tables, Records and Fields”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's trace gives the wrong answer. What do you say, and why?",
        "a": "Remind the class that a bug is in the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian daily life (a market, a clinic, a radio station, a mobile-money kiosk, a school office).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as mobile money, a clinic record, a radio bulletin, a school register or a market ledger."
      },
      {
        "q": "Design a Patients table for a clinic: name six fields with data types and validation rules, and choose the primary key.",
        "a": "For example PatientNo (text, unique, required — the key), Surname (text), FirstName (text), DateOfBirth (date, in the past), Sex (M or F), Village (text), LastVisit (date, not in the future)."
      },
      {
        "q": "Write the query conditions for: (a) every patient from Kakata seen this year; (b) all female patients under 5; (c) the whole list sorted by surname.",
        "a": "(a) Village = \"Kakata\" AND LastVisit >= 01/01/2026; (b) Sex = \"F\" AND age < 5 (or DateOfBirth after the date five years ago); (c) sort by Surname ascending."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “The card-index school database” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, paper grids and a paper keyboard",
      "A class computing chart",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's phone, kept dry and in sight"
    ],
    "aids": [
      "Word cards — database, table, record",
      "A flowchart or trace table of “The card-index school database”",
      "Blank record cards and a table-design sheet with data types and validation rules",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing word and what it means.",
      "Practise this week's paper method (a trace, a conversion, a formula or an algorithm) with a sibling or a friend — no device needed.",
      "Find one example of this unit's idea in your community (a market, a clinic, a radio station, a mobile-money kiosk or an office) and write three sentences about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written algorithm, trace table or worked conversion",
      "Pair-debug observed against the class chart",
      "A short written response to the Liberian scenario"
    ],
    "worked": [
      {
        "q": "In a Students table, is 'Surname' a record, a field or a table?",
        "steps": [
          "One column."
        ],
        "a": "A field"
      },
      {
        "q": "Everything stored about one student is a ______.",
        "steps": [
          "One row."
        ],
        "a": "record"
      },
      {
        "q": "Which field should be the primary key: Surname, Class or StudentID? Why?",
        "steps": [
          "Must be unique."
        ],
        "a": "StudentID — it is different for every student"
      },
      {
        "q": "Write the condition for 'students in 9B who owe fees' (fee 15,000).",
        "steps": [
          "Two conditions joined with AND."
        ],
        "a": "Class = \"9B\" AND FeesPaid < 15000"
      },
      {
        "q": "A date of birth of 12/03/2031 is entered. What should validation do?",
        "steps": [
          "A future date cannot be right."
        ],
        "a": "Reject it"
      },
      {
        "q": "A table has 40 records and 6 fields. How many individual values does it hold?",
        "steps": [
          "40 × 6."
        ],
        "a": "240"
      },
      {
        "q": "Sort the surnames Kollie, Doe, Weah, Bility ascending.",
        "steps": [
          "Alphabetical."
        ],
        "a": "Bility, Doe, Kollie, Weah"
      },
      {
        "q": "Two records both have StudentID G9-0017. What has gone wrong?",
        "steps": [
          "Key must be unique."
        ],
        "a": "A duplicate primary key — the rule was not enforced"
      }
    ]
  },
  {
    "grade": 9,
    "period": "V",
    "sem": "Two",
    "icon": "🧱",
    "csPlan": true,
    "title": "Web Pages — HTML Structure and Links",
    "subtitle": "Computer Science · Original junior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Unplugged-first: a class with no computer lab can still complete the unit on paper, and a class with one shared device can extend it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary accurately in speech and writing.",
      "Write, trace and debug an algorithm, a formula or a set of steps connected with the unit — on paper first, on a device when one is available.",
      "Make and justify a safe, honest and lawful choice about devices, data and people online."
    ],
    "objectives": [
      "Explain the key terms in “Web Pages — HTML Structure and Links” and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm or set of steps connected with this unit, on paper.",
      "Sort examples into the unit's two groups and give a reason for each choice.",
      "Trace a worked example step by step, showing every line of working, and state the answer in a full sentence.",
      "Apply the unit's ideas to a fictional Liberian school, market or office scenario.",
      "Debug a broken set of steps, a formula or a short program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared record of bugs found.",
      "Name one Liberian example of this unit's idea (mobile money, a radio station, a clinic record, a ministry office, a school register or a market stall)."
    ],
    "safeguard": "A junior high computing lesson uses charts, paper models, trace tables and, when a device is present, a shared school machine or the teacher's own phone. Students never share passwords or PINs, never photograph one another without consent, and never post a classmate's image or details. A mobile-money PIN is a secret even from a friend. If a student reports online bullying, a request for a picture, a scam message or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "HTML marks up the structure of a web page with tags: html, head, title and body; headings h1 to h6; paragraphs p; lists ul and li; links a with an href attribute; and images img with src and alt attributes. Most tags open and close; attributes add detail inside the opening tag. The browser reads the HTML and draws the page; CSS (met in Grade 12) controls how it looks.",
    "focus": [
      "Unplugged demonstration and paper trace",
      "Pair work and debugging",
      "Liberian scenario",
      "Computing fair check"
    ],
    "terms": [
      {
        "t": "HTML",
        "d": "HyperText Markup Language, the language that marks up the structure of a web page",
        "x": "In this unit, HTML means HyperText Markup Language, the language that marks up the structure of a web page."
      },
      {
        "t": "tag",
        "d": "a marker written in angle brackets, such as the p tag, that tells the browser what a part of the page is",
        "x": "In this unit, tag means a marker written in angle brackets, such as the p tag, that tells the browser what a part of the page is."
      },
      {
        "t": "element",
        "d": "an opening tag, its content and its closing tag together, such as a p tag, the word Hello and the closing p tag",
        "x": "In this unit, element means an opening tag, its content and its closing tag together, such as a p tag, the word Hello and the closing p tag."
      },
      {
        "t": "attribute",
        "d": "extra information inside an opening tag, such as href=\"index.html\" inside an a tag",
        "x": "In this unit, attribute means extra information inside an opening tag, such as href=\"index.html\" inside an a tag."
      },
      {
        "t": "heading",
        "d": "a title on the page, marked with the h1 tag for the largest down to h6 for the smallest",
        "x": "In this unit, heading means a title on the page, marked with the h1 tag for the largest down to h6 for the smallest."
      },
      {
        "t": "paragraph",
        "d": "a block of text marked with an opening p tag and a closing p tag",
        "x": "In this unit, paragraph means a block of text marked with an opening p tag and a closing p tag."
      },
      {
        "t": "hyperlink",
        "d": "text or an image marked with an a tag whose href attribute names another page, opened when clicked",
        "x": "In this unit, hyperlink means text or an image marked with an a tag whose href attribute names another page, opened when clicked."
      },
      {
        "t": "image tag",
        "d": "the img tag, whose src attribute names the picture file and whose alt attribute describes it for readers who cannot see it",
        "x": "In this unit, image tag means the img tag, whose src attribute names the picture file and whose alt attribute describes it for readers who cannot see it."
      },
      {
        "t": "list",
        "d": "items marked with li tags inside a ul tag for bullets or an ol tag for numbers",
        "x": "In this unit, list means items marked with li tags inside a ul tag for bullets or an ol tag for numbers."
      },
      {
        "t": "head",
        "d": "the part of an HTML file, inside the head tag, that holds the page's title and settings and is not shown on the page",
        "x": "In this unit, head means the part of an HTML file, inside the head tag, that holds the page's title and settings and is not shown on the page."
      },
      {
        "t": "body",
        "d": "the part of an HTML file, inside the body tag, that holds everything shown on the page",
        "x": "In this unit, body means the part of an HTML file, inside the body tag, that holds everything shown on the page."
      },
      {
        "t": "web server",
        "d": "a computer that stores web pages and sends them to browsers that ask for them",
        "x": "In this unit, web server means a computer that stores web pages and sends them to browsers that ask for them."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “HTML” in this unit?",
        "a": "HyperText Markup Language, the language that marks up the structure of a web page."
      },
      {
        "q": "What is meant by “tag” in this unit?",
        "a": "a marker written in angle brackets, such as the p tag, that tells the browser what a part of the page is."
      },
      {
        "q": "What is meant by “element” in this unit?",
        "a": "an opening tag, its content and its closing tag together, such as a p tag, the word Hello and the closing p tag."
      },
      {
        "q": "What is meant by “attribute” in this unit?",
        "a": "extra information inside an opening tag, such as href=\"index.html\" inside an a tag."
      },
      {
        "q": "What is meant by “heading” in this unit?",
        "a": "a title on the page, marked with the h1 tag for the largest down to h6 for the smallest."
      },
      {
        "q": "What is meant by “paragraph” in this unit?",
        "a": "a block of text marked with an opening p tag and a closing p tag."
      },
      {
        "q": "What is meant by “hyperlink” in this unit?",
        "a": "text or an image marked with an a tag whose href attribute names another page, opened when clicked."
      },
      {
        "q": "What is meant by “image tag” in this unit?",
        "a": "the img tag, whose src attribute names the picture file and whose alt attribute describes it for readers who cannot see it."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A Grade 9 group's school page shows its title text in the middle of the page and no heading, and the image appears as a broken icon, but they insist the 'computer is broken'."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Act as the browser and read the file: the title tag was placed inside the body instead of the head, and the img tag's src names a file that is not in the same folder (or is spelled differently); move the title, fix the file name, add alt text, and reload — the machine did exactly what the tags said."
      },
      {
        "q": "State this unit idea in your own words: HTML tags mark what each part of a page is — heading, paragraph, list, link, image — and the browser draws the page from them.",
        "a": "HTML tags mark what each part of a page is — heading, paragraph, list, link, image — and the browser draws the page from them."
      },
      {
        "q": "State this unit idea in your own words: Most tags come in pairs, an opening tag and a closing tag with a slash, and they must be closed in the reverse order they were opened.",
        "a": "Most tags come in pairs, an opening tag and a closing tag with a slash, and they must be closed in the reverse order they were opened."
      },
      {
        "q": "What is the difference between a tag and an attribute?",
        "a": "A tag marks what a part of the page is (the a tag); an attribute inside the opening tag adds detail (href=\"exams.html\")."
      },
      {
        "q": "Why must tags be closed in the reverse order they were opened?",
        "a": "Because elements nest inside one another like boxes; closing the outer before the inner breaks the structure the browser reads."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Web Pages — HTML Structure and Links” Is"
      },
      {
        "k": "p",
        "t": "A web page is a text file written in **HTML**, the HyperText Markup Language. **Tags** in angle brackets mark what each part is — a **heading**, a **paragraph**, a **list**, a **link**, an **image** — and the **browser** turns the marked-up text into the page you see. Most tags come in pairs, an opening and a closing tag, and an **attribute** inside the opening tag adds detail such as where a link goes. Written by hand on paper and checked by a partner acting as the browser, a school's first web page needs no server and no connection. Students who blame the computer when their page's title appears as body text and the image shows a broken icon have two bugs in their HTML. Act as the browser and read the file: the title tag was placed inside the body instead of the head, and the img tag's src names a file that is not in the same folder (or is spelled differently); move the title, fix the file name, add alt text, and reload — the machine did exactly what the tags said. HTML tags mark what each part of a page is — heading, paragraph, list, link, image — and the browser draws the page from them. Most tags come in pairs, an opening tag and a closing tag with a slash, and they must be closed in the reverse order they were opened."
      },
      {
        "k": "p",
        "t": "HTML marks up the structure of a web page with tags: html, head, title and body; headings h1 to h6; paragraphs p; lists ul and li; links a with an href attribute; and images img with src and alt attributes. Most tags open and close; attributes add detail inside the opening tag. The browser reads the HTML and draws the page; CSS (met in Grade 12) controls how it looks."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: HTML tags mark what each part of a page is — heading, paragraph, list, link, image — and the browser draws the page from them. Most tags come in pairs, an opening tag and a closing tag with a slash, and they must be closed in the reverse order they were opened."
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
        "t": "Each idea below is a working definition for Grade 9. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
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
            "HTML",
            "HyperText Markup Language, the language that marks up the structure of a web page",
            "In this unit, HTML means HyperText Markup Language, the language that marks up the structure of a web page."
          ],
          [
            "tag",
            "a marker written in angle brackets, such as the p tag, that tells the browser what a part of the page is",
            "In this unit, tag means a marker written in angle brackets, such as the p tag, that tells the browser what a part of the page is."
          ],
          [
            "element",
            "an opening tag, its content and its closing tag together, such as a p tag, the word Hello and the closing p tag",
            "In this unit, element means an opening tag, its content and its closing tag together, such as a p tag, the word Hello and the closing p tag."
          ],
          [
            "attribute",
            "extra information inside an opening tag, such as href=\"index.html\" inside an a tag",
            "In this unit, attribute means extra information inside an opening tag, such as href=\"index.html\" inside an a tag."
          ],
          [
            "heading",
            "a title on the page, marked with the h1 tag for the largest down to h6 for the smallest",
            "In this unit, heading means a title on the page, marked with the h1 tag for the largest down to h6 for the smallest."
          ],
          [
            "paragraph",
            "a block of text marked with an opening p tag and a closing p tag",
            "In this unit, paragraph means a block of text marked with an opening p tag and a closing p tag."
          ],
          [
            "hyperlink",
            "text or an image marked with an a tag whose href attribute names another page, opened when clicked",
            "In this unit, hyperlink means text or an image marked with an a tag whose href attribute names another page, opened when clicked."
          ],
          [
            "image tag",
            "the img tag, whose src attribute names the picture file and whose alt attribute describes it for readers who cannot see it",
            "In this unit, image tag means the img tag, whose src attribute names the picture file and whose alt attribute describes it for readers who cannot see it."
          ],
          [
            "list",
            "items marked with li tags inside a ul tag for bullets or an ol tag for numbers",
            "In this unit, list means items marked with li tags inside a ul tag for bullets or an ol tag for numbers."
          ],
          [
            "head",
            "the part of an HTML file, inside the head tag, that holds the page's title and settings and is not shown on the page",
            "In this unit, head means the part of an HTML file, inside the head tag, that holds the page's title and settings and is not shown on the page."
          ],
          [
            "body",
            "the part of an HTML file, inside the body tag, that holds everything shown on the page",
            "In this unit, body means the part of an HTML file, inside the body tag, that holds everything shown on the page."
          ],
          [
            "web server",
            "a computer that stores web pages and sends them to browsers that ask for them",
            "In this unit, web server means a computer that stores web pages and sends them to browsers that ask for them."
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
          "**Tag** — the marker; **element** — tag plus content plus closing tag.",
          "**<head>** — the title and settings, not shown; **<body>** — everything on the page.",
          "**<h1>** — the page's one main heading; **<h2>** — section headings; **<p>** — ordinary text.",
          "**<ul>** — bullets; **<ol>** — numbers; both hold **<li>** items.",
          "**href** says where a link goes; **src** says where an image comes from; **alt** describes the image in words."
        ]
      },
      {
        "k": "table",
        "head": [
          "HTML",
          "What the browser shows",
          "Note"
        ],
        "rows": [
          [
            "<h1>Our School</h1>",
            "Our School as the largest heading",
            "One h1 per page"
          ],
          [
            "<p>We are in Gbarnga.</p>",
            "A paragraph of text",
            "Closing tag has a slash"
          ],
          [
            "<ul><li>Rice</li><li>Cassava</li></ul>",
            "A bulleted list of two items",
            "li inside ul"
          ],
          [
            "<a href=\"exams.html\">Exam dates</a>",
            "The words Exam dates, underlined, clickable",
            "href is an attribute"
          ],
          [
            "<img src=\"school.jpg\" alt=\"The school gate\">",
            "The photograph",
            "alt is read aloud by screen readers"
          ],
          [
            "<title>Gbarnga Central</title>",
            "The name on the browser tab",
            "Inside head, not body"
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
          "Mistake in the HTML",
          "What goes wrong",
          "Fix"
        ],
        "rows": [
          [
            "<p>Hello <b>world</p></b>",
            "Tags closed in the wrong order",
            "Close the inner tag first: <p>Hello <b>world</b></p>"
          ],
          [
            "<a href=exams.html>",
            "Attribute value without quotation marks",
            "<a href=\"exams.html\">"
          ],
          [
            "<img src=\"gate.jpg\">",
            "No description for readers who cannot see",
            "Add alt=\"The school gate\""
          ],
          [
            "<h1> used for every heading",
            "No structure; everything shouts",
            "One h1, then h2 and h3"
          ],
          [
            "<p>First paragraph <p>Second",
            "Paragraphs never closed",
            "Close each with </p>"
          ],
          [
            "Text typed in <head>",
            "Not displayed on the page",
            "Move it into <body>"
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
        "t": "A Liberian school, clinic or youth group that wants a page saying who it is, where it is and when it opens needs nothing more than a text editor and this unit: a heading, three paragraphs, a list of contacts and a photograph with an alt description for readers using a screen reader. A page written by hand is small, loads on a weak connection and can be hosted for free or carried on a flash drive to a business centre. Understanding tags also makes a student a sharper reader of the web: a page is text and structure first, decoration second, and its source can be viewed by anyone."
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
        "t": "The class investigation is **“Writing a school page by hand and rendering it in pairs”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Each pair writes, on paper, a complete page: <html>, <head> with a <title>, and <body> holding one <h1>, two <h2> sections, three <p> paragraphs, a <ul> of three contacts, one <a href> link and one <img> with alt text, about their own school.",
          "The navigator hands the paper to another pair, who act as the browser: they draw the page as it would appear — headings large, paragraphs plain, list bulleted, link underlined, image as a box with the alt text.",
          "Both pairs compare the drawing with what the author intended; every difference is a bug in the HTML or in the browser's reading, and they decide which.",
          "The pair fixes closing order, missing quotation marks and missing alt text, then rewrites the page clean.",
          "If a computer is present, one pair types the page into a text editor, saves it as school.html and opens it in a browser while the others compare it with the drawing; otherwise the paper page and its rendering are the finished work."
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
        "t": "**Problem.** Write the HTML body for a page with the heading 'Gbarnga Central School', a paragraph 'We open at 7:30 a.m.', a bulleted list of two clubs (Science, Debate), a link with the text 'Exam dates' to exams.html and a photograph gate.jpg described as 'The school gate'. Then draw or describe what the browser shows."
      },
      {
        "k": "num",
        "items": [
          "<body>",
          "<h1>Gbarnga Central School</h1>",
          "<p>We open at 7:30 a.m.</p>",
          "<ul><li>Science</li><li>Debate</li></ul>",
          "<a href=\"exams.html\">Exam dates</a>",
          "<img src=\"gate.jpg\" alt=\"The school gate\">",
          "</body>",
          "Browser: a large heading, a line of text, two bullets, an underlined clickable 'Exam dates', then the photograph (or its alt text if the picture is missing)."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** Seven lines of HTML inside <body>; the browser shows the heading, the paragraph, a two-item bulleted list, an underlined link and the photograph."
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
          "Closing tags in the wrong order or not at all.",
          "Leaving the quotation marks off attribute values.",
          "Using <h1> for every heading instead of a structure of h1, h2 and h3.",
          "Forgetting the alt text on images, so blind readers and slow connections get nothing."
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
        "t": "Safety, Fairness and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN, a one-time code, a home address or a photograph of a classmate. If a message asks for a picture, money or a meeting, the student stops, keeps the message and tells a teacher. Copying another student's work and calling it your own is not collaboration; pair work shares the thinking, not the credit for work you did not do. Unplugged work is complete computing work."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, a scam, a request for a picture or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered, and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
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
        "t": "A Grade 9 group's school page shows its title text in the middle of the page and no heading, and the image appears as a broken icon, but they insist the 'computer is broken'."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Act as the browser and read the file: the title tag was placed inside the body instead of the head, and the img tag's src names a file that is not in the same folder (or is spelled differently); move the title, fix the file name, add alt text, and reload — the machine did exactly what the tags said."
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
        "t": "Act as the browser and read the file: the title tag was placed inside the body instead of the head, and the img tag's src names a file that is not in the same folder (or is spelled differently); move the title, fix the file name, add alt text, and reload — the machine did exactly what the tags said."
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
        "t": "The investigation **“Writing a school page by hand and rendering it in pairs”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
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
            "Handwritten HTML",
            "The page's source file",
            "A clean, corrected copy"
          ],
          [
            "'Browser screen' sheet",
            "What the browser draws",
            "The page rendered by a partner"
          ],
          [
            "Tag reference card",
            "The language",
            "The tags used, ticked"
          ],
          [
            "Class chart",
            "HTML bugs the class found (closing order, missing quotes, no alt)",
            "One new row after each lesson"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Structure First, Looks Later"
      },
      {
        "k": "p",
        "t": "HTML says what a thing is: a heading, a list, a link. It does not say what colour or font. That is the job of CSS, a second language you will meet in Grade 12. A page with good structure works on a phone, a laptop and a screen reader; decoration can be added afterwards."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Browser Is a Very Literal Reader"
      },
      {
        "k": "p",
        "t": "The browser does not know what you meant; it draws what the tags say. A missing </p> runs two paragraphs together; a missing quotation mark swallows the rest of the line. When a page looks wrong, read the HTML aloud, tag by tag, as the browser would."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Alt Text Is Not Optional"
      },
      {
        "k": "p",
        "t": "alt=\"The school gate\" is read aloud to a blind visitor, shown when the image fails to load on a weak Liberian connection, and used by search engines. A page without alt text has excluded people and lost readers for the sake of nine characters."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "View the Source"
      },
      {
        "k": "p",
        "t": "Every browser can show a page's HTML. Open a simple page you trust and find the h1, the paragraphs and the links: it is the same handful of tags this unit taught. The web is text that anyone can read and anyone can write."
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
        "t": "A fair period test on “Web Pages — HTML Structure and Links” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit and use each in a sentence.",
          "Write or trace a four-step algorithm, formula or procedure connected with “Web Pages — HTML Structure and Links”, showing every line of working.",
          "Sort four examples using “Tags / Attributes” and give one reason.",
          "Debug a broken set of steps without blaming the person who wrote them, and say what the bug was."
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
        "t": "A 4-week unit on “Web Pages — HTML Structure and Links” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
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
            "What “Web Pages — HTML Structure and Links” is, and where it already appears around us.",
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
        "t": "This is original supplementary teaching material for Liberian junior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, HTML means HyperText Markup Language, the language that marks up the structure of a web page.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, tag means an opening tag, its content and its closing tag together, such as a p tag, the word Hello and the closing p tag.",
        "a": "False",
        "why": "tag means a marker written in angle brackets, such as the p tag, that tells the browser what a part of the page is; the statement describes element."
      },
      {
        "s": "In this unit, attribute means extra information inside an opening tag, such as href=\"index.html\" inside an a tag.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Unplugged work with paper, trace tables and cards is complete computing work; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the instructions, not in the person."
      },
      {
        "s": "Students should share passwords or mobile-money PINs so a partner can finish the work.",
        "a": "False",
        "why": "A password or PIN is secret. Never share a password, PIN, one-time code or personal photograph."
      },
      {
        "s": "HTML tags mark what each part of a page is — heading, paragraph, list, link, image — and the browser draws the page from them.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "Text placed inside the head tag is shown at the top of the page.",
        "a": "False",
        "why": "The head holds the title and settings; only the body is displayed."
      },
      {
        "s": "The alt attribute of an image is read aloud by screen readers for blind visitors.",
        "a": "True",
        "why": "It also appears when the image fails to load and helps search engines."
      }
    ],
    "classify": {
      "title": "Tags / Attributes",
      "groups": [
        {
          "name": "Tags",
          "items": [
            "h1",
            "p",
            "ul",
            "li",
            "a",
            "img"
          ]
        },
        {
          "name": "Attributes",
          "items": [
            "href=\"exams.html\"",
            "src=\"gate.jpg\"",
            "alt=\"The school gate\"",
            "lang=\"en\"",
            "title=\"Open at 7:30\"",
            "id=\"contacts\""
          ]
        }
      ]
    },
    "diagram": {
      "title": "The skeleton of an HTML page",
      "caption": "Label each part and state what it does in “Web Pages — HTML Structure and Links”.",
      "parts": [
        {
          "p": "html tag",
          "f": "wraps the whole page"
        },
        {
          "p": "head and title tags",
          "f": "the page's name and settings, shown on the tab not in the page"
        },
        {
          "p": "body tag",
          "f": "everything displayed on the page"
        },
        {
          "p": "h1, p and ul/li tags",
          "f": "a heading, paragraphs and a list inside the body"
        },
        {
          "p": "a tag with href; img tag with src and alt",
          "f": "a link to another page and a picture with a description"
        }
      ]
    },
    "experiment": {
      "title": "Writing a school page by hand and rendering it in pairs",
      "aim": "To practise the ideas of “Web Pages — HTML Structure and Links” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Paper cards, arrows and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class computing chart",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “Writing a school page by hand and rendering it in pairs” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A Grade 9 group's school page shows its title text in the middle of the page and no heading, and the image appears as a broken icon, but they insist the 'computer is broken'. What should happen next?",
        "a": "Act as the browser and read the file: the title tag was placed inside the body instead of the head, and the img tag's src names a file that is not in the same folder (or is spelled differently); move the title, fix the file name, add alt text, and reload — the machine did exactly what the tags said."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Web Pages — HTML Structure and Links”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's trace gives the wrong answer. What do you say, and why?",
        "a": "Remind the class that a bug is in the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian daily life (a market, a clinic, a radio station, a mobile-money kiosk, a school office).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as mobile money, a clinic record, a radio bulletin, a school register or a market ledger."
      },
      {
        "q": "Write the HTML for a clinic's opening-hours page: a main heading, a section heading 'Hours', a numbered list of three days and times, and a link 'Back to home' to index.html.",
        "a": "An h1 element holding Kakata Community Clinic; an h2 element holding Hours; an ol element holding three li elements (Monday 8–4, Wednesday 8–4, Friday 8–12); then an a element with href=\"index.html\" and the text Back to home — every tag closed in reverse order."
      },
      {
        "q": "A page's img tag has src=\"Gate.JPG\" but the file is named gate.jpg, and there is no alt attribute. Give two reasons the image may fail and describe the corrected tag.",
        "a": "File names on many servers are case-sensitive so Gate.JPG does not match gate.jpg, and without alt nothing is shown if it fails: an img tag with src=\"gate.jpg\" and alt=\"The school gate\"."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “Writing a school page by hand and rendering it in pairs” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, paper grids and a paper keyboard",
      "A class computing chart",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's phone, kept dry and in sight"
    ],
    "aids": [
      "Word cards — HTML, tag, element",
      "A flowchart or trace table of “Writing a school page by hand and rendering it in pairs”",
      "A one-page HTML tag reference and blank 'browser screen' sheets",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing word and what it means.",
      "Practise this week's paper method (a trace, a conversion, a formula or an algorithm) with a sibling or a friend — no device needed.",
      "Find one example of this unit's idea in your community (a market, a clinic, a radio station, a mobile-money kiosk or an office) and write three sentences about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written algorithm, trace table or worked conversion",
      "Pair-debug observed against the class chart",
      "A short written response to the Liberian scenario"
    ],
    "worked": [
      {
        "q": "Describe the opening and closing tags for a paragraph.",
        "steps": [
          "The closing tag has a slash before the name."
        ],
        "a": "An opening p tag and a closing p tag with a slash: p and /p inside angle brackets"
      },
      {
        "q": "Which tag makes the largest heading?",
        "steps": [
          "h1 down to h6."
        ],
        "a": "The h1 tag"
      },
      {
        "q": "In an a element whose opening tag contains href=\"exams.html\" and whose content is Exam dates, which part is the attribute and which is the link text?",
        "steps": [
          "Inside the tag vs between the tags."
        ],
        "a": "href=\"exams.html\" is the attribute; Exam dates is the link text"
      },
      {
        "q": "A paragraph opens a p tag, then a b tag around the word world, and then closes p before closing b. What is wrong and how is it fixed?",
        "steps": [
          "Close the inner tag first."
        ],
        "a": "The tags are closed in the wrong order; close b first, then p"
      },
      {
        "q": "What does alt=\"The school gate\" do?",
        "steps": [
          "Words for the image."
        ],
        "a": "Describes the image for screen readers and when it fails to load"
      },
      {
        "q": "Where does the title tag belong: head or body?",
        "steps": [
          "Not shown in the page."
        ],
        "a": "In the head"
      },
      {
        "q": "Which list tag gives numbers: ul or ol?",
        "steps": [
          "Ordered list."
        ],
        "a": "ol"
      },
      {
        "q": "How many h1 headings should a page have?",
        "steps": [
          "One main heading."
        ],
        "a": "One"
      }
    ]
  },
  {
    "grade": 9,
    "period": "VI",
    "sem": "Two",
    "icon": "🚀",
    "csPlan": true,
    "title": "Emerging Technology, Careers and a Computing Project",
    "subtitle": "Computer Science · Original junior high unit — teacher review required",
    "source": {
      "type": "original",
      "note": "Original teaching resource; not an official curriculum transcription. Unplugged-first: a class with no computer lab can still complete the unit on paper, and a class with one shared device can extend it."
    },
    "outcomes": [
      "Use the unit's computing vocabulary accurately in speech and writing.",
      "Write, trace and debug an algorithm, a formula or a set of steps connected with the unit — on paper first, on a device when one is available.",
      "Make and justify a safe, honest and lawful choice about devices, data and people online."
    ],
    "objectives": [
      "Explain the key terms in “Emerging Technology, Careers and a Computing Project” and use each in a sentence of your own.",
      "Write and dry-run (trace) an algorithm or set of steps connected with this unit, on paper.",
      "Sort examples into the unit's two groups and give a reason for each choice.",
      "Trace a worked example step by step, showing every line of working, and state the answer in a full sentence.",
      "Apply the unit's ideas to a fictional Liberian school, market or office scenario.",
      "Debug a broken set of steps, a formula or a short program without blaming the person who wrote it.",
      "Work in a pair as driver and navigator, swapping roles after five minutes, and keep a shared record of bugs found.",
      "Name one Liberian example of this unit's idea (mobile money, a radio station, a clinic record, a ministry office, a school register or a market stall)."
    ],
    "safeguard": "A junior high computing lesson uses charts, paper models, trace tables and, when a device is present, a shared school machine or the teacher's own phone. Students never share passwords or PINs, never photograph one another without consent, and never post a classmate's image or details. A mobile-money PIN is a secret even from a friend. If a student reports online bullying, a request for a picture, a scam message or contact from a stranger, listen once, write the student's words, keep the evidence unaltered, and take it to the head teacher or the guidance counsellor the same day. Unplugged work is complete computing work — a school without a computer lab is not a school without Computer Science.",
    "note": "Emerging technologies — artificial intelligence, robotics and drones, the Internet of Things, cloud services, mobile money and e-government — bring benefits, risks and ethical questions, and each creates new careers. A computing project follows a cycle: define the problem, plan a solution, build it (on paper or a device), test it with real data, and present it with credit to sources and partners.",
    "focus": [
      "Unplugged demonstration and paper trace",
      "Pair work and debugging",
      "Liberian scenario",
      "Computing fair check"
    ],
    "terms": [
      {
        "t": "artificial intelligence",
        "d": "software that learns patterns from large amounts of data to make predictions or decisions, such as recognising a face or a crop disease",
        "x": "In this unit, artificial intelligence means software that learns patterns from large amounts of data to make predictions or decisions, such as recognising a face or a crop disease."
      },
      {
        "t": "machine learning",
        "d": "the branch of artificial intelligence in which a program improves by training on examples rather than being given every rule",
        "x": "In this unit, machine learning means the branch of artificial intelligence in which a program improves by training on examples rather than being given every rule."
      },
      {
        "t": "training data",
        "d": "the examples a machine-learning program learns from; biased or poor data gives biased or poor results",
        "x": "In this unit, training data means the examples a machine-learning program learns from; biased or poor data gives biased or poor results."
      },
      {
        "t": "robotics",
        "d": "machines that sense, decide and act in the physical world, such as a drone or a factory arm",
        "x": "In this unit, robotics means machines that sense, decide and act in the physical world, such as a drone or a factory arm."
      },
      {
        "t": "drone",
        "d": "a small unpiloted aircraft used for mapping, photography and delivering light loads",
        "x": "In this unit, drone means a small unpiloted aircraft used for mapping, photography and delivering light loads."
      },
      {
        "t": "Internet of Things",
        "d": "everyday objects — meters, pumps, sensors — fitted with small computers and connected to a network",
        "x": "In this unit, Internet of Things means everyday objects — meters, pumps, sensors — fitted with small computers and connected to a network."
      },
      {
        "t": "cloud computing",
        "d": "using storage and programs on distant servers over the internet instead of on your own machine",
        "x": "In this unit, cloud computing means using storage and programs on distant servers over the internet instead of on your own machine."
      },
      {
        "t": "e-government",
        "d": "public services delivered online, such as applying for a document or checking examination results",
        "x": "In this unit, e-government means public services delivered online, such as applying for a document or checking examination results."
      },
      {
        "t": "automation",
        "d": "using machines or software to do work that people used to do",
        "x": "In this unit, automation means using machines or software to do work that people used to do."
      },
      {
        "t": "digital divide",
        "d": "the gap between people who have devices, connection and skills and people who do not",
        "x": "In this unit, digital divide means the gap between people who have devices, connection and skills and people who do not."
      },
      {
        "t": "ethics",
        "d": "deciding what is right and fair in the use of technology, not only what is possible",
        "x": "In this unit, ethics means deciding what is right and fair in the use of technology, not only what is possible."
      },
      {
        "t": "project cycle",
        "d": "define the problem, plan a solution, build it, test it, present it",
        "x": "In this unit, project cycle means define the problem, plan a solution, build it, test it, present it."
      }
    ],
    "facts": [
      {
        "q": "What is meant by “artificial intelligence” in this unit?",
        "a": "software that learns patterns from large amounts of data to make predictions or decisions, such as recognising a face or a crop disease."
      },
      {
        "q": "What is meant by “machine learning” in this unit?",
        "a": "the branch of artificial intelligence in which a program improves by training on examples rather than being given every rule."
      },
      {
        "q": "What is meant by “training data” in this unit?",
        "a": "the examples a machine-learning program learns from; biased or poor data gives biased or poor results."
      },
      {
        "q": "What is meant by “robotics” in this unit?",
        "a": "machines that sense, decide and act in the physical world, such as a drone or a factory arm."
      },
      {
        "q": "What is meant by “drone” in this unit?",
        "a": "a small unpiloted aircraft used for mapping, photography and delivering light loads."
      },
      {
        "q": "What is meant by “Internet of Things” in this unit?",
        "a": "everyday objects — meters, pumps, sensors — fitted with small computers and connected to a network."
      },
      {
        "q": "What is meant by “cloud computing” in this unit?",
        "a": "using storage and programs on distant servers over the internet instead of on your own machine."
      },
      {
        "q": "What is meant by “e-government” in this unit?",
        "a": "public services delivered online, such as applying for a document or checking examination results."
      },
      {
        "q": "What computing issue is raised in this unit's Liberian scenario?",
        "a": "A Grade 9 group builds a fine-looking spreadsheet of school fees for their project but never enters a single real payment, and on presentation day a teacher asks how it handles a student who pays in two parts."
      },
      {
        "q": "Explain a responsible response to the scenario and give reasons.",
        "a": "Return to test: enter a week of real payments including a split payment, discover that one 'Paid' cell cannot hold two amounts, redesign with a payments table or a second column, record the bug and the fix on the test log, and present again with the evidence."
      },
      {
        "q": "State this unit idea in your own words: Every emerging technology brings a benefit, a risk and an ethical question, and a good citizen names all three.",
        "a": "Every emerging technology brings a benefit, a risk and an ethical question, and a good citizen names all three."
      },
      {
        "q": "State this unit idea in your own words: A computing project follows one cycle: define, plan, build, test, present.",
        "a": "A computing project follows one cycle: define, plan, build, test, present."
      },
      {
        "q": "What is the digital divide, and give one Liberian example.",
        "a": "The gap between people with devices, connection and skills and those without; for example exam results online reach town students in minutes while a village student without data waits for the notice board."
      },
      {
        "q": "Name three computing careers and one school subject skill each uses.",
        "a": "For example software developer (algorithms and loops), network engineer (packets and routers), data clerk (spreadsheets and databases)."
      }
    ],
    "study": [
      {
        "k": "h3",
        "t": "What “Emerging Technology, Careers and a Computing Project” Is"
      },
      {
        "k": "p",
        "t": "The technologies now arriving in Liberia — **artificial intelligence** that learns from data, **drones** mapping farms, **e-government** portals, **mobile money** and **solar-powered** devices — all rest on the ideas of Grades 7 to 9: data, algorithms, networks and security. Each brings a **benefit**, a **risk** and an **ethical** question, and each creates work: **careers** from technician and data clerk to software developer, network engineer and digital-security officer. The unit ends with a **project** that plans, builds, tests and presents one small solution for the school. Groups who present an untested fee spreadsheet and cannot say how it handles a payment in two parts have skipped the test step of the project cycle. Return to test: enter a week of real payments including a split payment, discover that one 'Paid' cell cannot hold two amounts, redesign with a payments table or a second column, record the bug and the fix on the test log, and present again with the evidence. Every emerging technology brings a benefit, a risk and an ethical question, and a good citizen names all three. A computing project follows one cycle: define, plan, build, test, present."
      },
      {
        "k": "p",
        "t": "Emerging technologies — artificial intelligence, robotics and drones, the Internet of Things, cloud services, mobile money and e-government — bring benefits, risks and ethical questions, and each creates new careers. A computing project follows a cycle: define the problem, plan a solution, build it (on paper or a device), test it with real data, and present it with credit to sources and partners."
      },
      {
        "k": "p",
        "t": "Hold these unit facts in full sentences: Every emerging technology brings a benefit, a risk and an ethical question, and a good citizen names all three. A computing project follows one cycle: define, plan, build, test, present."
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
        "t": "Each idea below is a working definition for Grade 9. Copy the table into your exercise book. The bold word is the term; the rest is the meaning you must be able to say — and, in an examination, write."
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
            "artificial intelligence",
            "software that learns patterns from large amounts of data to make predictions or decisions, such as recognising a face or a crop disease",
            "In this unit, artificial intelligence means software that learns patterns from large amounts of data to make predictions or decisions, such as recognising a face or a crop disease."
          ],
          [
            "machine learning",
            "the branch of artificial intelligence in which a program improves by training on examples rather than being given every rule",
            "In this unit, machine learning means the branch of artificial intelligence in which a program improves by training on examples rather than being given every rule."
          ],
          [
            "training data",
            "the examples a machine-learning program learns from; biased or poor data gives biased or poor results",
            "In this unit, training data means the examples a machine-learning program learns from; biased or poor data gives biased or poor results."
          ],
          [
            "robotics",
            "machines that sense, decide and act in the physical world, such as a drone or a factory arm",
            "In this unit, robotics means machines that sense, decide and act in the physical world, such as a drone or a factory arm."
          ],
          [
            "drone",
            "a small unpiloted aircraft used for mapping, photography and delivering light loads",
            "In this unit, drone means a small unpiloted aircraft used for mapping, photography and delivering light loads."
          ],
          [
            "Internet of Things",
            "everyday objects — meters, pumps, sensors — fitted with small computers and connected to a network",
            "In this unit, Internet of Things means everyday objects — meters, pumps, sensors — fitted with small computers and connected to a network."
          ],
          [
            "cloud computing",
            "using storage and programs on distant servers over the internet instead of on your own machine",
            "In this unit, cloud computing means using storage and programs on distant servers over the internet instead of on your own machine."
          ],
          [
            "e-government",
            "public services delivered online, such as applying for a document or checking examination results",
            "In this unit, e-government means public services delivered online, such as applying for a document or checking examination results."
          ],
          [
            "automation",
            "using machines or software to do work that people used to do",
            "In this unit, automation means using machines or software to do work that people used to do."
          ],
          [
            "digital divide",
            "the gap between people who have devices, connection and skills and people who do not",
            "In this unit, digital divide means the gap between people who have devices, connection and skills and people who do not."
          ],
          [
            "ethics",
            "deciding what is right and fair in the use of technology, not only what is possible",
            "In this unit, ethics means deciding what is right and fair in the use of technology, not only what is possible."
          ],
          [
            "project cycle",
            "define the problem, plan a solution, build it, test it, present it",
            "In this unit, project cycle means define the problem, plan a solution, build it, test it, present it."
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
          "**Benefit** — what the technology makes better; **risk** — what it can break; **ethics** — who decides and who is left out.",
          "**Artificial intelligence** predicts from data; it does not understand and it inherits the bias of its **training data**.",
          "**Cloud** — your files on someone else's server; convenient, but needs a connection and trust.",
          "**Automation** removes some jobs and creates others; the new ones need the skills in this course.",
          "**Career** — a path built from skills; **job** — one post along it."
        ]
      },
      {
        "k": "table",
        "head": [
          "Technology in Liberia",
          "Benefit",
          "Risk or ethical question"
        ],
        "rows": [
          [
            "Mobile money",
            "Pay and save without a bank branch",
            "PIN scams; fees; people without phones excluded"
          ],
          [
            "Drones mapping farms and floods",
            "Faster, cheaper surveys",
            "Privacy over homes; who owns the images"
          ],
          [
            "AI reading crop-disease photos",
            "Early warning for farmers",
            "Wrong advice if trained on other continents' crops"
          ],
          [
            "E-government exam results",
            "Results anywhere in minutes",
            "Those without data or literacy left waiting"
          ],
          [
            "Cloud storage for school records",
            "Backups survive fire and theft",
            "Needs a connection; who else can read the data"
          ],
          [
            "Solar-powered devices",
            "Computing without the grid",
            "E-waste from dead batteries"
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
          "Computing career",
          "What the person does",
          "Grade 7–9 skill it grows from"
        ],
        "rows": [
          [
            "Computer technician",
            "Repairs and maintains machines and networks",
            "Hardware, safety, networks"
          ],
          [
            "Data clerk / analyst",
            "Enters, checks and summarises data",
            "Spreadsheets, databases, validation"
          ],
          [
            "Software developer",
            "Writes and tests programs and apps",
            "Algorithms, selection and loops"
          ],
          [
            "Network engineer",
            "Designs and runs LANs and WANs",
            "Packets, switches, routers"
          ],
          [
            "Web designer",
            "Builds and maintains websites",
            "HTML, presentation design"
          ],
          [
            "Digital-security officer",
            "Protects systems and trains users",
            "Passwords, phishing, ethics"
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
        "t": "Liberia leapt from little connectivity to mobile money and drones in a decade; the next decade will bring artificial intelligence into clinics, farms and classrooms whether or not Liberians write it. The choice is between using tools designed elsewhere, on data from elsewhere, and having Liberian technicians, developers and security officers who understand them. Every career in the table above exists in Monrovia today and is short of trained people. A Grade 9 student who finishes this course knowing that an AI is only as fair as its training data, that a drone photograph of a compound raises a privacy question, and that a project is defined before it is built is ready for senior high Computer Science — and for the country's next decade."
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
        "t": "The class investigation is **“The school computing project, define to present”**. We work it on paper, trace it line by line, debug it in pairs, and only then — if a device is present — run it on a machine. The method below is the one the teacher models on the chalkboard and the students then run themselves."
      },
      {
        "k": "num",
        "items": [
          "Groups define one real problem at the school in one sentence (late fee records, a lost equipment list, no clear notice of exam dates) and name who it affects.",
          "They plan a solution using one tool from Grades 7–9 — a spreadsheet, a database table, a flowchart-and-program, or a web page — and draw it on paper with its inputs, processing and outputs.",
          "They build the paper version fully: the ruled spreadsheet with formulas, the table design and record cards, the traced program, or the handwritten HTML.",
          "They test it with real data from the school for one week, record every bug on a test log, fix each one, and write one paragraph on a benefit, a risk and an ethical question the solution raises.",
          "They present it in six paper slides to another class, crediting sources and partners; if a device is present, the group with the most complete paper version types it up and demonstrates it live."
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
        "t": "**Problem.** A youth group wants to use a free AI app that identifies cassava diseases from photos; it was trained on cassava from another continent. Name the benefit, the risk and the ethical question, and say what the group should do before trusting the app's advice."
      },
      {
        "k": "num",
        "items": [
          "Benefit: a farmer photographs a leaf and gets a likely disease and treatment in minutes, without waiting for an extension officer.",
          "Risk: the training data came from other varieties and climates, so the app may misname a Liberian disease and recommend the wrong treatment, costing a harvest.",
          "Ethical question: who is responsible when the advice is wrong, and did the farmers whose photos train the app consent to their use?",
          "Before trusting it: test the app on twenty leaves whose disease an extension officer has already identified, record the hit rate in a table, and use the app as a second opinion, not a verdict."
        ]
      },
      {
        "k": "p",
        "t": "**Answer.** Benefit: fast advice; risk: wrong advice from foreign training data; ethics: responsibility and consent; test it against known cases before relying on it."
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
          "Treating an AI's answer as a fact rather than a prediction from its training data.",
          "Building the project before defining the problem in one sentence.",
          "Presenting a project that was never tested with real data.",
          "Forgetting the people without phones, data or sight when judging a technology's benefit."
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
        "t": "Safety, Fairness and the Law"
      },
      {
        "k": "p",
        "t": "Hands stay dry and food stays away from any device. Nobody shares a password, a PIN, a one-time code, a home address or a photograph of a classmate. If a message asks for a picture, money or a meeting, the student stops, keeps the message and tells a teacher. Copying another student's work and calling it your own is not collaboration; pair work shares the thinking, not the credit for work you did not do. Unplugged work is complete computing work."
      },
      {
        "k": "p",
        "t": "If a student reports online bullying, a scam, a request for a picture or contact from a stranger, the teacher listens once, writes the student's words, keeps the evidence unaltered, and takes it to the **head teacher** or the guidance counsellor the same day. A trusted adult is the right next step; a classmate's phone is not."
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
        "t": "A Grade 9 group builds a fine-looking spreadsheet of school fees for their project but never enters a single real payment, and on presentation day a teacher asks how it handles a student who pays in two parts."
      },
      {
        "k": "p",
        "t": "**What a careful class does next.** Return to test: enter a week of real payments including a split payment, discover that one 'Paid' cell cannot hold two amounts, redesign with a payments table or a second column, record the bug and the fix on the test log, and present again with the evidence."
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
        "t": "Return to test: enter a week of real payments including a split payment, discover that one 'Paid' cell cannot hold two amounts, redesign with a payments table or a second column, record the bug and the fix on the test log, and present again with the evidence."
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
        "t": "The investigation **“The school computing project, define to present”** is the week's practical. Students trace on squared paper, fill a table, sort cards or walk a chalk grid. They then write the same work as a numbered algorithm, a table or a short report. The paper version is finished work. A device, if one appears, is an extra try — never the only try."
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
            "Project planning sheet",
            "The whole project cycle",
            "One sentence per step, signed by the group"
          ],
          [
            "Paper build",
            "The solution before any device",
            "Spreadsheet, table, program or page, complete"
          ],
          [
            "Test log",
            "Real data meeting the design",
            "Every bug, its fix and the retest"
          ],
          [
            "Six paper slides",
            "The presentation",
            "Benefit, risk, ethics, sources and partners"
          ]
        ]
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "What an AI Actually Does"
      },
      {
        "k": "p",
        "t": "A machine-learning program is shown thousands of examples with the right answer and adjusts itself until it usually agrees. It has no understanding; it has statistics. It is very good at patterns that resemble its training data and unreliable outside them — which is why Liberian data, collected by Liberians, matters."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Digital Divide Is a Design Constraint"
      },
      {
        "k": "p",
        "t": "A service that only works on a smartphone with data excludes the grandmother in Lofa. Good Liberian design offers a paper or radio alternative, keeps pages small, and tests on the cheapest phone in the market. Asking 'who cannot use this?' is an engineering question, not only a moral one."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "Careers Start With Habits, Not Degrees"
      },
      {
        "k": "p",
        "t": "Every job in the careers table rewards the habits of this course: trace before you type, test with boundary cases, name your variables, back up your files, never share a PIN, credit your sources. A student who has those habits at fifteen is employable at eighteen and trainable for anything."
      },
      {
        "k": "rule"
      },
      {
        "k": "h3",
        "t": "The Project Is the Examination"
      },
      {
        "k": "p",
        "t": "Define, plan, build, test, present — with a test log and a source list — is how professional software is made and how a senior high project is marked. A small project finished honestly beats a large one that was never tested. Choose small."
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
        "t": "A fair period test on “Emerging Technology, Careers and a Computing Project” does not need a computer lab. It asks the student to use the words precisely, work a problem on paper, and make a safe, lawful choice. Typical items:"
      },
      {
        "k": "bul",
        "items": [
          "Define three key terms from this unit and use each in a sentence.",
          "Write or trace a four-step algorithm, formula or procedure connected with “Emerging Technology, Careers and a Computing Project”, showing every line of working.",
          "Sort four examples using “Benefits / Risks and ethical questions” and give one reason.",
          "Debug a broken set of steps without blaming the person who wrote them, and say what the bug was."
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
        "t": "A 4-week unit on “Emerging Technology, Careers and a Computing Project” can be paced like this. Weekly plans in this pack pick up the first study headings in order."
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
            "What “Emerging Technology, Careers and a Computing Project” is, and where it already appears around us.",
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
        "t": "This is original supplementary teaching material for Liberian junior high classrooms. Review it against the school's approved scheme of work before you teach from it."
      }
    ],
    "tf": [
      {
        "s": "In this unit, artificial intelligence means software that learns patterns from large amounts of data to make predictions or decisions, such as recognising a face or a crop disease.",
        "a": "True",
        "why": "This is the working definition used in the unit."
      },
      {
        "s": "In this unit, machine learning means the examples a machine-learning program learns from; biased or poor data gives biased or poor results.",
        "a": "False",
        "why": "machine learning means the branch of artificial intelligence in which a program improves by training on examples rather than being given every rule; the statement describes training data."
      },
      {
        "s": "In this unit, robotics means machines that sense, decide and act in the physical world, such as a drone or a factory arm.",
        "a": "True",
        "why": "The definition helps distinguish this concept from the other terms."
      },
      {
        "s": "A computing lesson cannot be taught unless every student has a computer.",
        "a": "False",
        "why": "Unplugged work with paper, trace tables and cards is complete computing work; a shared device extends it."
      },
      {
        "s": "We try, we debug, we do not laugh at a mistake.",
        "a": "True",
        "why": "A bug is in the instructions, not in the person."
      },
      {
        "s": "Students should share passwords or mobile-money PINs so a partner can finish the work.",
        "a": "False",
        "why": "A password or PIN is secret. Never share a password, PIN, one-time code or personal photograph."
      },
      {
        "s": "Every emerging technology brings a benefit, a risk and an ethical question, and a good citizen names all three.",
        "a": "True",
        "why": "That is the working definition."
      },
      {
        "s": "An artificial-intelligence program understands the photographs it classifies in the way a person does.",
        "a": "False",
        "why": "It finds statistical patterns learned from training data; it has no understanding and fails outside that data."
      },
      {
        "s": "A computing project should be tested with real data before it is presented.",
        "a": "True",
        "why": "Testing finds the bugs — such as a split payment — that a demonstration would hide."
      }
    ],
    "classify": {
      "title": "Benefits / Risks and ethical questions",
      "groups": [
        {
          "name": "Benefits",
          "items": [
            "exam results checked from any county",
            "flood maps from a drone in hours",
            "a farmer's disease warning in minutes",
            "school records backed up in the cloud",
            "paying school fees by mobile money",
            "solar power for a classroom device"
          ]
        },
        {
          "name": "Risks and ethical questions",
          "items": [
            "PIN scams by text",
            "AI trained on foreign data giving wrong advice",
            "drone photos of private compounds",
            "people without data left waiting",
            "who else can read cloud records",
            "e-waste from dead batteries"
          ]
        }
      ]
    },
    "diagram": {
      "title": "The computing project cycle",
      "caption": "Label each part and state what it does in “Emerging Technology, Careers and a Computing Project”.",
      "parts": [
        {
          "p": "Define",
          "f": "state the problem in one sentence and name who it affects"
        },
        {
          "p": "Plan",
          "f": "choose the tool and draw the inputs, processing and outputs"
        },
        {
          "p": "Build",
          "f": "make the paper version fully, then a device version if one is available"
        },
        {
          "p": "Test",
          "f": "run it with real data, log every bug, fix and retest"
        },
        {
          "p": "Present",
          "f": "show it in six slides with sources and partners credited"
        }
      ]
    },
    "experiment": {
      "title": "The school computing project, define to present",
      "aim": "To practise the ideas of “Emerging Technology, Careers and a Computing Project” on paper, without needing a computer for every student.",
      "materials": [
        "Trace-table sheets or squared paper",
        "Paper cards, arrows and a paper keyboard",
        "Chalk or tape for a floor grid",
        "Pencils and the class computing chart",
        "A timer or a clapped beat"
      ],
      "steps": [
        "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
        "The teacher models “The school computing project, define to present” once on the board with the whole class watching and checking each line.",
        "Pairs work the steps on paper, write the result of every step, and swap with another pair to debug.",
        "The class records one precise step and one bug they found on the computing chart.",
        "If a device is present, one pair may run the same steps on it while the others check the paper result against the screen; otherwise the paper version is the finished work."
      ],
      "expect": "Pairs can work, write and debug the paper method and name at least two unit terms in use.",
      "why": "Working every step on paper makes the method, its bugs and the pair roles visible. A class with no computer lab can still complete the investigation."
    },
    "apply": [
      {
        "q": "Apply this unit's ideas to the following scenario: A Grade 9 group builds a fine-looking spreadsheet of school fees for their project but never enters a single real payment, and on presentation day a teacher asks how it handles a student who pays in two parts. What should happen next?",
        "a": "Return to test: enter a week of real payments including a split payment, discover that one 'Paid' cell cannot hold two amounts, redesign with a payments table or a second column, record the bug and the fix on the test log, and present again with the evidence."
      },
      {
        "q": "Write a four-step algorithm or procedure connected with “Emerging Technology, Careers and a Computing Project”. Number the steps so a classmate could follow them without asking you a question.",
        "a": "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate."
      },
      {
        "q": "A classmate laughs when a partner's trace gives the wrong answer. What do you say, and why?",
        "a": "Remind the class that a bug is in the steps, not in the person. We try, we debug, we do not laugh at a mistake; then find the line where the trace went wrong."
      },
      {
        "q": "Give one way this unit's idea already appears in Liberian daily life (a market, a clinic, a radio station, a mobile-money kiosk, a school office).",
        "a": "Accept a relevant local example that uses a unit term correctly, such as mobile money, a clinic record, a radio bulletin, a school register or a market ledger."
      },
      {
        "q": "Choose one emerging technology and write a paragraph for the PTA naming its benefit for the school, one risk, one ethical question and one rule the school should adopt.",
        "a": "Accept a paragraph that names all four for one technology, for example cloud storage of records: fire-proof backups; needs connection and trust; who can read pupils' data; rule — only the office holds the password and parents are told what is stored."
      },
      {
        "q": "Plan a project to keep the school's equipment list. Give the one-sentence problem, the tool you would use, three fields or columns, and the test you would run.",
        "a": "Problem: nobody knows which desks and devices exist or where they are. Tool: a database table (or spreadsheet). Fields: ItemID (key), Description, Location, Condition, DateChecked. Test: walk one classroom, enter every item, then query the items marked 'broken'."
      }
    ],
    "activities": [
      "Computing circle: greet, take attendance, and say the two rules.",
      "Paper-first demonstration of “The school computing project, define to present” with a trace on the board.",
      "Pair programming: driver and navigator swap after five minutes.",
      "Debug a broken set of steps together and record the bug on the class chart.",
      "Sort the unit's examples into two groups and defend one choice.",
      "Act the Liberian scenario and agree a safe, fair and lawful response."
    ],
    "materials": [
      "Chalkboard or reusable paper",
      "Word cards for the key terms",
      "Trace-table sheets, paper grids and a paper keyboard",
      "A class computing chart",
      "Pencils, rulers and scrap paper",
      "Optional: one shared school computer or the teacher's phone, kept dry and in sight"
    ],
    "aids": [
      "Word cards — artificial intelligence, machine learning, training data",
      "A flowchart or trace table of “The school computing project, define to present”",
      "A project planning sheet (define, plan, build, test, present) and a test log",
      "Situation cards for the Liberian scenario",
      "The class computing chart"
    ],
    "home": [
      "Teach a family member one new computing word and what it means.",
      "Practise this week's paper method (a trace, a conversion, a formula or an algorithm) with a sibling or a friend — no device needed.",
      "Find one example of this unit's idea in your community (a market, a clinic, a radio station, a mobile-money kiosk or an office) and write three sentences about it."
    ],
    "assessment": [
      "Oral definition of three key terms",
      "A written algorithm, trace table or worked conversion",
      "Pair-debug observed against the class chart",
      "A short written response to the Liberian scenario"
    ],
    "worked": [
      {
        "q": "Name the five steps of the project cycle in order.",
        "steps": [
          "Define, plan, build, test, present."
        ],
        "a": "Define, plan, build, test, present"
      },
      {
        "q": "An AI trained only on photos from another continent misnames a Liberian crop disease. What is the cause in one term?",
        "steps": [
          "The examples it learned from."
        ],
        "a": "Biased or unrepresentative training data"
      },
      {
        "q": "Name the benefit and one risk of mobile money.",
        "steps": [
          "Pay without a bank; scams."
        ],
        "a": "Paying and saving without a bank branch; PIN scams and exclusion of people without phones"
      },
      {
        "q": "A service works only on smartphones with data. Which idea names the people it leaves out?",
        "steps": [
          "The gap in access."
        ],
        "a": "The digital divide"
      },
      {
        "q": "A project was built and presented but never run with real data. Which step was skipped?",
        "steps": [
          "Real data, bugs, fixes."
        ],
        "a": "Test"
      },
      {
        "q": "Which career designs and runs the school's LAN and its link to the internet?",
        "steps": [
          "Packets, switches, routers."
        ],
        "a": "Network engineer"
      },
      {
        "q": "Twenty known leaves are shown to the disease app; it is right for 14. What is its hit rate, and should it be the only opinion?",
        "steps": [
          "14 ÷ 20 = 0.7."
        ],
        "a": "70%; no — use it as a second opinion"
      },
      {
        "q": "Name one ethical question raised by drone photographs of a village.",
        "steps": [
          "Privacy and ownership."
        ],
        "a": "Privacy of homes and who owns or may sell the images"
      }
    ]
  }
];

/* Merge into the single Computer Science curriculum, exactly as General
   Science does for Grades 7-9: one subject, extra grades. */
if (typeof CS_CURRICULUM !== "undefined") {
  CS_CURRICULUM.push.apply(CS_CURRICULUM, CS_CURRICULUM_79);
}
