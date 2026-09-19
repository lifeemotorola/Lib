/* Computer Science, Grades 1–6. Original elementary computing units.
   No official Liberian Computer Science syllabus was supplied, so these
   are original teaching resources — unplugged-first, so a class with no
   computer can still compute. Teachers should compare them with the
   school's approved scheme of work before use. Not an official
   curriculum transcription. */
var CS_CURRICULUM = (function () {
  "use strict";
  var glossary = {
    computer: "a machine that follows instructions to work with information",
    instruction: "a clear step that tells a person or a machine what to do next",
    algorithm: "a finite set of steps that solves a problem or finishes a task",
    pattern: "something that repeats in a regular, predictable way",
    sequence: "steps that must be done in a fixed order",
    input: "information or an action that goes into a computer",
    output: "information or a result that comes out of a computer",
    keyboard: "a board of keys used to type letters, numbers and commands",
    mouse: "a pointing device used to move a pointer and choose things on a screen",
    screen: "the part of a device that shows pictures, words and other output",
    program: "a set of instructions a computer can follow",
    loop: "a part of an algorithm that repeats a step a number of times",
    bug: "a mistake in instructions that makes the result wrong",
    debug: "to find and fix a mistake in a set of instructions",
    file: "a named collection of information stored as one item",
    folder: "a named place that holds files and other folders",
    internet: "a worldwide network that lets computers share information",
    network: "a set of computers or devices that can send messages to one another",
    search: "looking for information by using key words",
    data: "recorded facts or numbers that can be organised and used",
    information: "data that has been organised so it can answer a question",
    hardware: "the physical parts of a computer that you can touch",
    software: "the programs and instructions that tell hardware what to do",
    password: "a secret word or code that proves you are allowed to open an account",
    variable: "a named box that holds a value which can change",
    binary: "a way of writing information using only two digits, 0 and 1",
    abstraction: "hiding extra detail so the important idea is easier to use",
    decomposition: "breaking a big problem into smaller parts that can be solved",
    condition: "a yes-or-no test that chooses which steps to follow next",
    code: "instructions written in a language a computer can follow",
    digital: "made of on-and-off signals that a computer can store and send",
    device: "a tool that uses electricity to compute, store or send information",
    save: "to store work so it can be opened again later",
    copy: "to make a second version of information without removing the first",
    icon: "a small picture that stands for a program, file or action",
    app: "a program written for a particular job on a phone, tablet or computer",
    website: "a collection of pages on the internet that belong together",
    privacy: "keeping personal information away from people who should not see it",
    consent: "freely given agreement before something is done with a person's information",
    footprint: "the trail of information left by a person's digital activities",
    share: "to let another person see or use information",
    message: "information sent from one person or device to another",
    bit: "the smallest unit of digital information, either 0 or 1",
    flowchart: "a diagram of boxes and arrows that shows the order of steps",
    pair: "two pupils working together on one set of instructions",
    turn: "the chance to use a shared device or to give the next instruction",
    rule: "an agreed instruction that keeps people and devices safe",
    safety: "protection from foreseeable harm, including online harm",
    phone: "a handheld device used to call, message and run programs",
    laptop: "a portable computer with a screen and a keyboard together",
    storage: "the place where a computer keeps files for later use",
    memory: "the part of a computer that holds information while work is happening",
    processor: "the part of a computer that follows instructions",
    user: "a person who gives instructions to a computer",
    login: "the steps that prove who you are before a device opens your work",
    username: "the public name used with a password to open an account",
    account: "a named space that holds a person's files, settings and history",
    wifi: "a wireless way for a device to join a network",
    browser: "a program used to look at pages on the internet",
    link: "a word or picture that opens another page or file when chosen",
    source: "the person, page or record from which information comes",
    collaboration: "working with others on one computing task",
    comment: "a note in instructions that explains them to a person, not a machine",
    test: "trying a set of instructions with known inputs to see if they work",
    project: "a planned computing task with a start, steps and a finished product",
    model: "a simpler version of a real thing used to think or to practise",
    robot: "a machine that follows instructions to move or to do a job",
    sensor: "a part that notices light, sound, heat or movement and reports it",
    printer: "a machine that puts computer output onto paper",
    speaker: "a device that turns computer output into sound",
    camera: "a device that captures a picture as digital information",
    tablet: "a flat computer controlled mainly by touching the screen",
    desktop: "a computer that stays on a desk and is not meant to be carried",
    click: "pressing a mouse button or a screen to choose something",
    type: "pressing keys to put letters and numbers into a computer",
    drag: "moving an item on a screen by holding and sliding it",
    menu: "a list of choices a program offers",
    window: "a rectangular area on a screen that shows one program or file",
    download: "to copy a file from a network onto your own device",
    upload: "to copy a file from your device onto a network",
    server: "a computer that stores information and answers requests from other computers",
    byte: "a group of eight bits, enough to store one ordinary character",
    malware: "a harmful program written to damage, steal or lock information",
    virus: "a kind of malware that copies itself onto other files or devices",
    email: "a written message sent from one internet address to another",
    cybersecurity: "practices that keep computers, networks and information safe",
    encryption: "changing information so only someone with the right key can read it",
    algorithmic: "done by following an algorithm rather than by guessing",
    unplugged: "computing practised with paper, cards, bodies or talk, not a machine",
    computational: "using the ideas of computing — steps, data and machines — to solve a problem",
    thinking: "working out a problem carefully before acting",
    programming: "writing instructions a computer can follow",
    conditional: "a step that happens only when a test is true",
    selection: "choosing between two or more paths in an algorithm",
    iteration: "repeating a step until a job is finished",
    procedure: "a named group of steps that can be used again",
    parameter: "a value given to a procedure so it can do the same job with different data",
    boolean: "a value that is only true or false",
    string: "a sequence of letters, digits or other characters treated as text",
    integer: "a whole number, with no fractional part",
    table: "rows and columns used to organise data",
    chart: "a picture that shows data so a pattern is easier to see",
    average: "a single number that summarises a set of numbers",
    sort: "to put items into an agreed order",
    searching: "looking through a collection until a wanted item is found",
    packet: "a small piece of a message sent across a network",
    router: "a device that forwards packets toward their destination",
    address: "a unique name or number that identifies a device or a page",
    protocol: "an agreed set of rules for how messages are sent and understood",
    bandwidth: "how much information a connection can carry in a given time",
    offline: "working without a live connection to the internet",
    online: "connected to a network so messages can be sent and received",
    bully: "a person who repeatedly harms or frightens someone, including through a device",
    report: "to tell a trusted adult about harm, a threat or a worrying message",
    block: "to stop a person or a program from sending more messages to you",
    copyright: "the legal right that protects a creator's work from being copied without permission",
    credit: "naming the person whose work you used",
    evidence: "information that can support or challenge a claim",
    verification: "checking a claim against a reliable source",
    misinformation: "false or inaccurate information, whether or not it was shared on purpose",
    citizen: "a person who uses computing tools with care for other people",
    liberia: "the West African republic whose schools this course is written for",
    africa: "the continent Liberia belongs to, with many computing projects of its own",
    money: "value used to pay for goods and services, including mobile money",
    radio: "a way of sending sound without wires, still widely used in Liberia",
    step: "one action in a sequence of instructions",
    charger: "the cable and plug that give a device electrical power",
    cable: "a wire that carries power or information between devices",
    clap: "a repeated sound used as a beat or a counted loop",
    cursor: "the mark on a screen that shows where the next letter or click will go",
    name: "the word we give a file, a folder or a variable so we can find it again",
    on: "the binary state written as 1, like a lamp that is lit",
    off: "the binary state written as 0, like a lamp that is dark",
    backup: "a second copy of files kept so work can be restored if the first copy is lost",
    interface: "the part of a program a person uses, such as icons and menus",
    market: "a place where people buy and sell, often using phones for prices and payments"
  };
  var names = { footprint: "digital footprint" };
  var lessons = [
    { title: "Computers Around Us", icon: "💻", keys: "computer instruction device screen phone laptop radio market user rule", note: "A computer is a machine that follows instructions. In Liberia a computer may be a laptop in a school office, a phone in a market stall, or the radio that plays the news. A class with no computer can still compute: we give clear instructions to one another and to paper machines.", scene: "A pupil says Computer Science cannot be taught because the school has no laptop.", reply: "The teacher agrees that a laptop is useful, then shows that following a recipe, lining up, and moving on a grid are computing. Unplugged work is complete computing work.", exp: "Human computers in a market line", classify: "Machines that compute / Things that do not compute", diagram: "A simple computer system", extras: ["A computer is a machine that follows instructions.", "Unplugged computing uses paper, cards and our bodies."] },
    { title: "Following Instructions", icon: "📋", keys: "instruction algorithm sequence rule turn pair user computer step thinking", note: "An algorithm is a finite set of steps that finishes a task. A recipe for palava sauce, the way we line up for assembly, and the way we open a book are all algorithms. If a step is missing or in the wrong order, the result is wrong.", scene: "Two pupils give directions from the classroom door to the well. One says 'go, then turn'; the other names each landmark in order.", reply: "The second set of instructions is an algorithm: the steps are finite, ordered and can be followed by someone who has not walked the path before.", exp: "From the door to the well", classify: "Clear instructions / Unclear instructions", diagram: "The parts of an algorithm", extras: ["An algorithm is a finite set of steps.", "Steps must be in a sequence the follower can use."] },
    { title: "Patterns We Repeat", icon: "🔁", keys: "pattern sequence loop iteration rule algorithm instruction computer clap turn", note: "A pattern is something that repeats in a regular way. Clapping 1-2-3, 1-2-3 is a loop. Computers are good at repeating a step without getting tired, which is why a loop is one of the first ideas in computing.", scene: "The class claps long-short-short four times. A pupil asks if they must write the clap twelve times.", reply: "No. Write the pattern once and say 'repeat four times'. That is a loop: the same steps, a number of times.", exp: "Clap, step, repeat", classify: "Repeating patterns / One-off events", diagram: "A loop on a flowchart", extras: ["A loop repeats a step a number of times.", "A pattern that repeats can be written once and reused."] },
    { title: "Parts of a Computer", icon: "⌨️", keys: "hardware keyboard mouse screen processor memory storage laptop desktop printer", note: "Hardware is the physical parts of a computer that you can touch. A keyboard, a mouse, a screen, a printer and the box that holds the processor are hardware. Even a paper keyboard on a desk teaches the same names.", scene: "A pupil points at a picture of a laptop and says the whole thing is a keyboard.", reply: "Name the parts: the screen shows output, the keyboard is for typing, the processor is inside, and storage keeps files. The laptop is the whole machine.", exp: "Paper computer on the desk", classify: "Hardware you can touch / Names of jobs they do", diagram: "The parts of a laptop", extras: ["Hardware is the physical parts of a computer that you can touch.", "A paper keyboard still teaches the names of the keys."] },
    { title: "Being Safe with Machines", icon: "🛡️", keys: "safety rule device cable screen phone laptop user turn report", note: "Machines need dry hands, a safe place to sit, and agreed rules. Food and drink stay away from keyboards. A charger cable is not a toy. If a device feels hot, smells of burning, or a stranger asks for a picture, stop and tell the teacher.", scene: "A visitor offers a pupil a phone and asks for a photograph 'for a prize'.", reply: "The pupil does not pose, does not give a name, and tells the teacher at once. A computing lesson never asks a child to give a photograph to a stranger.", exp: "The classroom device rules", classify: "Safe with a machine / Unsafe with a machine", diagram: "A safe place for a laptop", extras: ["Hands stay dry and food stays away from devices.", "Tell the teacher at once about a stranger who asks for a picture."] },
    { title: "Taking Turns with Devices", icon: "🤝", keys: "turn pair collaboration rule device share user computer keyboard mouse", note: "A school may have one laptop or none. Taking turns is a computing skill: one person drives, one person navigates, and they swap. Nobody grabs, nobody laughs at a slow typist, and the next pair leaves the work saved.", scene: "Two pupils fight over the only mouse. A third sits unused.", reply: "Use pair work: driver and navigator swap every five minutes. The unused pupil joins as a checker who reads the steps aloud.", exp: "Driver and navigator", classify: "Fair sharing / Unfair sharing", diagram: "A turn-taking cycle", extras: ["Pair work uses a driver and a navigator who swap.", "Taking turns is a computing skill, not a punishment."] },
    { title: "Input and Output", icon: "📥", keys: "input output keyboard mouse screen speaker printer camera sensor device", note: "Input is what goes in; output is what comes out. Pressing a key is input; letters on the screen are output. A camera takes a picture in; a printer puts a page out. Naming input and output is the start of understanding any machine.", scene: "A radio in the staff room plays the news. A pupil asks if the radio has input.", reply: "Yes: the aerial and the tuning knob are input. Sound from the speaker is output. A radio is a machine that transforms input into output.", exp: "What goes in, what comes out", classify: "Input / Output", diagram: "An input–process–output diagram", extras: ["Input is information or an action that goes into a computer.", "Output is information or a result that comes out of a computer."] },
    { title: "Step-by-Step Sequences", icon: "🔢", keys: "sequence algorithm instruction flowchart step thinking program user test debug", note: "A sequence is steps in a fixed order. Brushing teeth, making rice, and starting a laptop are sequences. If you pour water before you put the pot on the fire, the result changes. Flowcharts show sequence with boxes and arrows.", scene: "Pupils write 'open book, write name, read page' and 'write name, open book, read page'.", reply: "Both are sequences, but only the first matches the classroom rule. Order matters. Test the sequence by acting it out before you write it as a flowchart.", exp: "Make rice in order", classify: "Correct order / Wrong order", diagram: "A three-step flowchart", extras: ["A sequence is steps that must be done in a fixed order.", "A flowchart uses boxes and arrows to show the order."] },
    { title: "Information versus Things", icon: "📊", keys: "information data computer file message copy save storage bit byte", note: "A mango is a thing. The word 'mango', a tally of mangoes sold, and a drawing of a mango are information. Information can be copied without using up the original. Things cannot. Computing works with information.", scene: "A pupil says a photograph of the class is the same as the class.", reply: "The photograph is information about the class. The class is people. We can copy the photograph; we cannot copy a person. Keep photographs only with the teacher's consent.", exp: "Market tally versus market goods", classify: "Information / Physical things", diagram: "From data to information", extras: ["Information is data that has been organised so it can answer a question.", "A copy of information does not use up the original."] },
    { title: "The Keyboard and the Mouse", icon: "🖱️", keys: "keyboard mouse click type drag icon window menu screen input", note: "A keyboard puts letters into a computer. A mouse moves a pointer so we can click, drag and choose an icon. On a paper keyboard we still find A, space and enter. Slow, correct typing beats fast, wrong typing.", scene: "A pupil mashes many keys at once and says the computer is broken.", reply: "The computer is following every key. Type one letter at a time. Use the mouse or a finger to choose an icon rather than guessing keys.", exp: "Paper keyboard treasure hunt", classify: "Keyboard jobs / Mouse jobs", diagram: "A QWERTY paper keyboard", extras: ["A keyboard is used to type letters, numbers and commands.", "Clicking chooses; dragging moves an item on the screen."] },
    { title: "Being Kind with Technology", icon: "💛", keys: "rule safety share message bully report privacy consent user citizen", note: "A message can travel farther than a voice. Kind computing means we do not send a joke that hurts, we do not share a classmate's picture, and we report bullying to a trusted adult. A screen does not hide unkindness.", scene: "A group wants to send a nickname that a classmate hates to the class chat.", reply: "Do not send it. Unkind words on a device are still unkind. Tell the teacher if it has already been sent. Kind computing is part of being a digital citizen.", exp: "Kind words, kind clicks", classify: "Kind uses of a device / Unkind uses of a device", diagram: "From a message to a person", extras: ["A screen does not hide unkindness.", "Report bullying to a trusted adult the same day."] },
    { title: "Saving Our Work", icon: "💾", keys: "save file folder storage copy name user account login computer", note: "Work that is not saved can disappear when a device sleeps or the power goes. A file needs a name a person can read later, such as 'Mary-story-Monday'. A folder holds related files. Saving is a habit, not a last step.", scene: "A pupil types a story and closes the lid. In the afternoon the story is gone.", reply: "The story was only in memory, not in storage. Save early, save often, and use a name that includes the pupil and the day.", exp: "Name it, then save it", classify: "Saved work / Work that can vanish", diagram: "Memory and storage", extras: ["Save early and save often.", "A file needs a name a person can read later."] },
    { title: "Repeating Steps (Loops)", icon: "🔄", keys: "loop iteration sequence algorithm pattern instruction program flowchart test thinking", note: "A loop repeats a step until a job is finished or a count is reached. 'Clap four times' is a counted loop. 'Keep sweeping until the floor is clean' is a loop that stops when a test is true. Loops save us from writing the same step again and again.", scene: "Pupils write 'take one step' twelve times to cross a grid of twelve squares.", reply: "Replace the twelve lines with 'repeat 12: take one step'. Counted loops make instructions shorter and easier to debug.", exp: "Cross the twelve-square grid", classify: "Counted loops / Loops that stop on a test", diagram: "A counted loop", extras: ["A loop repeats a step a number of times.", "Counted loops make instructions shorter."] },
    { title: "Finding and Fixing Mistakes", icon: "🐛", keys: "bug debug test algorithm sequence instruction pair thinking flowchart program", note: "A bug is a mistake in the instructions. Debugging is finding and fixing it without blaming the person who wrote it. We try, we debug, we do not laugh at a mistake. Read the steps aloud, act them out, and change one thing at a time.", scene: "A paper-robot walks into a wall because step 3 says 'forward' instead of 'turn left'.", reply: "The bug is in step 3, not in the robot. Change only that step, test again, and keep the old version in case the new one is worse.", exp: "Debug the paper robot", classify: "Bugs in the steps / Bugs in the follower", diagram: "The debug cycle", extras: ["A bug is a mistake in the instructions.", "Change one thing at a time when you debug."] },
    { title: "Files and Folders", icon: "📁", keys: "file folder storage save name copy desktop window icon sort", note: "A file is one named item. A folder is a named place that holds files. A messy desktop is like a desk with every paper in one heap. Sorting files into folders named by subject and week makes searching faster.", scene: "A class laptop has 40 files all called 'Document' on the desktop.", reply: "Rename each file with a person, a subject and a date, then put them in folders such as 'English' and 'Maths'. Searching then takes seconds, not minutes.", exp: "Sort the class desktop", classify: "Good file names / Poor file names", diagram: "A folder tree", extras: ["A folder is a named place that holds files and other folders.", "A name should include the person, the subject and the date."] },
    { title: "The Internet as a Library", icon: "🌐", keys: "internet website browser link search source evidence verification information wifi", note: "The internet is a worldwide network that lets computers share information. It is a library that never closes — and a library that also holds mistakes and unkind pages. A website is a collection of pages. A browser is the program that shows them. Check who wrote a page before you trust it.", scene: "A forwarded message says school is closed tomorrow but names no office and no date.", reply: "Do not forward it. Check a trusted school channel. An undated, unattributed message is not enough evidence of a closure.", exp: "Who wrote this page?", classify: "A library we can trust / A message we must check", diagram: "From search box to source", extras: ["The internet is a worldwide network that lets computers share information.", "Check who wrote a page before you trust it."] },
    { title: "Coding Without a Computer", icon: "🧩", keys: "unplugged code algorithm flowchart program instruction sequence pair model thinking", note: "Unplugged computing uses paper, cards, grids and our bodies. A paper robot, a sorting-hat of cards, and a human flowchart are real code. A school without a computer is not a school without Computer Science.", scene: "A visitor asks why the class is standing on a chalk grid instead of using the new laptop.", reply: "The grid teaches sequence, loops and debugging with the whole class at once. The laptop can wait. Unplugged work is complete computing work.", exp: "Human flowchart of lining up", classify: "Unplugged coding / Device-only work", diagram: "A paper-robot command set", extras: ["Unplugged computing uses paper, cards, bodies or talk, not a machine.", "A school without a computer is not a school without Computer Science."] },
    { title: "Using Phones and Computers Responsibly", icon: "📱", keys: "phone device rule safety privacy consent share report bully password", note: "A phone is a computer in a pocket. Responsible use means asking before you pick one up, never sharing a password, and never sending a picture of a classmate. If a message asks for a photograph or a meeting, show a trusted adult the same day.", scene: "A classmate's older cousin texts a pupil 'send a picture and I will send airtime'.", reply: "Do not send a picture. Show the teacher the message. A request for a photograph in exchange for a gift is a warning, not a prize.", exp: "The responsible-phone pledge", classify: "Responsible phone use / Unsafe phone use", diagram: "From a message to a trusted adult", extras: ["A phone is a computer in a pocket.", "Never send a picture of yourself or a classmate to a stranger."] },
    { title: "Breaking Problems Down", icon: "🧱", keys: "decomposition algorithm thinking project procedure step pair collaboration test instruction", note: "Decomposition means breaking a big problem into smaller parts. 'Put on a school play' is too big; 'write the lines, make the hats, practise the songs' can be done. Computing problems yield to the same habit.", scene: "The class must make a paper animation of a football match by Friday.", reply: "Split the job: one pair draws the pitch, one pair cuts the players, one pair plans the six frames, one pair writes the captions. Each part is tested, then the parts are joined.", exp: "Six frames of a match", classify: "Whole-problem thinking / Parts we can finish", diagram: "A decomposed task tree", extras: ["Decomposition means breaking a big problem into smaller parts.", "Test each part before you join the parts."] },
    { title: "If–Then Choices", icon: "🔀", keys: "condition selection conditional boolean algorithm flowchart instruction test thinking program", note: "A condition is a yes-or-no test. If it is raining, we stay in; else we go out. Computers use the same idea: if the password is right, open the file; else show an error. Selection chooses a path.", scene: "Pupils write 'always take the left path' in a maze that has a blocked left path on Tuesdays.", reply: "Add a condition: if the left path is blocked, take the right path. An algorithm without selection cannot handle a changing world.", exp: "Rainy-day or dry-day line-up", classify: "Conditions we can test / Instructions with no choice", diagram: "An if–then–else flowchart", extras: ["A condition is a yes-or-no test that chooses which steps to follow next.", "Selection chooses between two or more paths in an algorithm."] },
    { title: "How Messages Travel", icon: "📡", keys: "network message packet router address protocol wifi internet server bandwidth", note: "A network is a set of computers that can send messages. A message is often split into packets, each with an address, and a router forwards them. Liberia's mobile networks, school wifi and even a string-and-cup line are networks with rules.", scene: "Two pupils shout a long sentence across the yard and it arrives muddled.", reply: "Split the sentence into short packets, number them, and send them in order. The receiver puts them back together. That is how a network protocol keeps a message whole.", exp: "Packet post across the yard", classify: "Networks / Stand-alone devices", diagram: "From sender to router to receiver", extras: ["A network is a set of computers that can send messages.", "A packet is a small piece of a message sent across a network."] },
    { title: "Searching for Information", icon: "🔍", keys: "search searching source evidence verification website browser link information sort", note: "Searching is looking through a collection until a wanted item is found. On the internet we type key words into a browser. The first result is not always the best. Ask: who wrote this, when, and what evidence do they give?", scene: "A pupil copies the first sentence of a search page that says 'Liberia has 20 counties'.", reply: "Liberia has fifteen counties. Check a trusted source such as a school atlas or a government page. Verification is part of searching, not an extra.", exp: "Find fifteen counties, not rumours", classify: "Reliable sources / Unchecked claims", diagram: "A search that names its source", extras: ["The first result is not always the best.", "Liberia has fifteen counties — check a trusted source."] },
    { title: "Our Digital Footprint", icon: "👣", keys: "footprint privacy consent share account username message online citizen report", note: "A digital footprint is the trail of information left by a person's digital activities. A nickname, a photograph, a comment and a search can last longer than a school year. Ask consent before you post about someone else.", scene: "A class page wants to post every pupil's full name, school and photograph.", reply: "Do not. Use first names only with the teacher's and family's consent, or post the work without faces. A footprint that names a child can travel farther than the class intended.", exp: "What stays on the path", classify: "Information we may share / Information we keep private", diagram: "A footprint that outlives a lesson", extras: ["A digital footprint is the trail of information left by a person's digital activities.", "Ask consent before you post about someone else."] },
    { title: "Instructions a Computer Can Follow", icon: "🤖", keys: "code program algorithm instruction sequence flowchart pair test debug thinking", note: "A computer follows instructions exactly, even silly ones. 'Add salt twice' means twice. Block-coding ideas — start, move, turn, repeat, if — can be written on cards long before a laptop runs them. Precision is kindness to the machine.", scene: "Pupils write 'go over there' on a card and the paper-robot does not move.", reply: "The instruction is not precise. Replace it with 'forward 3, turn right, forward 2'. Instructions a computer can follow name the action, the amount and the order.", exp: "Card commands for a paper robot", classify: "Precise instructions / Vague instructions", diagram: "A start-to-finish command list", extras: ["A computer follows instructions exactly, even silly ones.", "Precise instructions name the action, the amount and the order."] },
    { title: "Hardware and Software", icon: "🖥️", keys: "hardware software processor memory storage program app device laptop desktop", note: "Hardware is the body; software is the set of instructions. A laptop without software is a quiet box. Software without hardware has nowhere to run. An app is software written for a particular job.", scene: "A pupil says a cracked screen means the maths app is broken.", reply: "The screen is hardware. The maths app is software. Repair or replace the screen; the app may still be unharmed on storage. Name the layer that failed.", exp: "Which layer failed?", classify: "Hardware / Software", diagram: "Hardware running software", extras: ["Hardware is the physical parts of a computer that you can touch.", "Software is the programs and instructions that tell hardware what to do."] },
    { title: "Named Boxes (Variables)", icon: "📦", keys: "variable name integer string data memory program instruction test thinking", note: "A variable is a named box that holds a value which can change. 'Score' can be 0, then 1, then 4. The name stays; the value changes. Using clear names — 'score', not 'x' — is part of writing for a person as well as a machine.", scene: "A scoreboard pair keep shouting numbers with no labels. The class cannot tell whose score it is.", reply: "Give each box a name: 'red-score' and 'blue-score'. Update the named box, not a nameless number. That is a variable.", exp: "Score boxes for two teams", classify: "Values that change / Names that stay", diagram: "A named box in memory", extras: ["A variable is a named box that holds a value which can change.", "The name stays; the value changes."] },
    { title: "Collecting and Reading Data", icon: "📈", keys: "data information table chart average sort search evidence thinking project", note: "Data are recorded facts. A tally of how many pupils walk, take a taxi or come by keke is data. A chart of that tally is information. Collect fairly, label the units, and do not invent a number you did not count.", scene: "A pair reports 'most pupils come by car' after asking only the front row.", reply: "The sample is too small and biased. Count the whole class, record the method, and draw a bar chart. Data without a method is just a claim.", exp: "How we come to school", classify: "Fair data / Unfair data", diagram: "From tally to chart", extras: ["Data are recorded facts or numbers that can be organised and used.", "Do not invent a number you did not count."] },
    { title: "Passwords and Internet Safety", icon: "🔐", keys: "password login username account privacy cybersecurity malware virus report safety", note: "A password proves you are allowed to open an account. A strong password is long, unguessable and never shared — not with a friend, not on a slip stuck to the screen. Cybersecurity is the set of habits that keep accounts safe. A message that shouts 'you have won' and asks for a password is a trap.", scene: "A pop-up says 'Your account will close in 10 minutes — type your password now'.", reply: "Do not type it. Close the page and tell the teacher. A real service does not demand a password through a sudden pop-up.", exp: "Build a strong password phrase", classify: "Safe password habits / Unsafe password habits", diagram: "Login without sharing the secret", extras: ["A password is a secret word or code that proves you are allowed to open an account.", "Never share a password, PIN or personal photograph."] },
    { title: "Working Together on a Digital Task", icon: "👥", keys: "collaboration pair comment procedure project test thinking share file folder", note: "Collaboration on a digital task needs roles, comments and a shared plan. Pair programming — driver and navigator — is one pattern. A comment explains a step to the next person. Credit the people who did the work.", scene: "One pupil types the whole poster while two others watch in silence.", reply: "Rotate roles every ten minutes: driver, navigator, checker. Each writes a comment on the plan so the next driver knows why a step is there.", exp: "Three roles, one poster", classify: "Fair collaboration / Silent watching", diagram: "Driver, navigator, checker", extras: ["Pair programming uses a driver and a navigator.", "A comment explains a step to a person, not to a machine."] },
    { title: "Writing Instructions for a Computer", icon: "✍️", keys: "programming code program algorithm procedure parameter comment test debug sequence", note: "Programming is writing instructions a computer can follow. We start with an algorithm in our language, then translate it into precise steps, then test. A procedure is a named group of steps we can reuse. Parameters let the same procedure work with different data.", scene: "Pupils copy a block of steps three times to draw three squares of different sizes.", reply: "Write a procedure 'square(size)' and call it three times with different parameters. Reuse beats copy-and-paste when a bug would have to be fixed in three places.", exp: "Three squares from one procedure", classify: "Reusable procedures / Copied-out steps", diagram: "From algorithm to procedure", extras: ["Programming is writing instructions a computer can follow.", "A procedure is a named group of steps that can be used again."] },
    { title: "Hiding Details (Abstraction)", icon: "🎭", keys: "abstraction model procedure interface user algorithm thinking program hardware icon", note: "Abstraction hides extra detail so the important idea is easier to use. A tap is an abstraction of pipes. An app icon is an abstraction of thousands of instructions. Good abstraction keeps what we need and hides what we do not.", scene: "A pupil wants to explain a phone by naming every chip inside it to a Grade 1 class.", reply: "That is too much detail. For Grade 1, say: you tap an icon, the phone follows instructions, sound or pictures come out. Hide the chips until they are needed.", exp: "The tap, not the pipes", classify: "Useful abstractions / Too much detail", diagram: "Layers of a simple app", extras: ["Abstraction hides extra detail so the important idea is easier to use.", "An app icon is an abstraction of thousands of instructions."] },
    { title: "On and Off — Binary", icon: "🔘", keys: "binary bit byte digital on off information storage processor code", note: "Binary uses only two digits, 0 and 1 — off and on. A bit is one such digit. A byte is eight bits, enough for one ordinary character. Every picture, song and message on a computer is a pattern of ons and offs.", scene: "Pupils argue that a light with a dimmer switch is binary because it is still one bulb.", reply: "A dimmer has many levels; binary has two. A bulb that is only off or on is a better model of a bit. Count from 0 to 7 on three fingers as three bits.", exp: "Three-bit numbers on fingers", classify: "Binary (two states) / Many states", diagram: "Bits grouped into a byte", extras: ["Binary uses only two digits, 0 and 1.", "A bit is the smallest unit of digital information, either 0 or 1."] },
    { title: "Computing in Liberia and Africa", icon: "🌍", keys: "liberia africa money phone radio market internet network citizen project", note: "Computing in Liberia is already here: mobile money, radio news, market prices on a phone, school records, clinic lists. Across Africa, people write software, lay cable and teach computing. This course is an original teaching resource for Liberian classrooms, not an official syllabus transcription.", scene: "A pupil says computing only happens in America because the class has no lab.", reply: "Name three local uses: mobile money, a radio station's computer, a clinic's patient list. Computing is a human activity that already serves Liberia and Africa.", exp: "Map computing in our county", classify: "Computing already in Liberia / Computing only elsewhere", diagram: "From a market phone to a network", extras: ["Mobile money is computing in daily Liberian life.", "This course is an original teaching resource, not an official syllabus transcription."] },
    { title: "Keeping Information Safe", icon: "🔒", keys: "cybersecurity encryption password privacy malware virus backup account report safety", note: "Cybersecurity is the set of practices that keep computers, networks and information safe. Encryption changes information so only someone with the right key can read it. Backups, updates, strong passwords and a habit of not opening strange files are the everyday tools. A locked door is useless if the key is under the mat.", scene: "A pupil downloads a 'free football game' from a forwarded link and the school laptop slows and shows strange messages.", reply: "Stop using the laptop, do not enter any password, and tell the teacher. The file may be malware. Restore from a backup if one exists. Never trade a password for a free game.", exp: "Backup before you click", classify: "Protecting information / Exposing information", diagram: "Password, backup, report", extras: ["Cybersecurity is practices that keep computers, networks and information safe.", "Encryption changes information so only someone with the right key can read it."] },
    { title: "A Computational Thinking Project", icon: "🧠", keys: "computational thinking decomposition abstraction algorithm pattern project test collaboration code", note: "Computational thinking is using decomposition, pattern, abstraction and algorithms to solve a problem. A project makes those four habits visible: choose a real problem, break it down, hide extra detail, write the steps, and test. The product can be a paper program, a poster or a performed algorithm.", scene: "A group wants to 'make the school better' with no smaller question.", reply: "Narrow it: 'shorten the time it takes to lend a library book'. Decompose the lending steps, find the repeated pattern, abstract the form, write an algorithm, and test it with two books.", exp: "Lend a book in fewer steps", classify: "Computational-thinking habits / Vague wishes", diagram: "The four habits of computational thinking", extras: ["Computational thinking uses decomposition, pattern, abstraction and algorithms.", "A project makes those four habits visible."] },
    { title: "Making a Program of Our Own", icon: "🚀", keys: "programming program code algorithm procedure test debug comment project pair", note: "The last unit of Grade 6 is to make a program of our own — on paper, on cards, or on a device if one is present. Plan, write, test, debug, comment, and present. A short, correct program beats a long, untested one. Credit every partner.", scene: "A pair writes forty steps the night before and cannot explain step 12.", reply: "Cut the program to the steps you can test and explain. Add comments. Debug with a partner. A program you cannot explain is not finished.", exp: "Show the class your program", classify: "Finished, tested programs / Unexplained step lists", diagram: "Plan, write, test, present", extras: ["A short, correct program beats a long, untested one.", "A program you cannot explain is not finished."] }
  ];
  var periods = ["I", "II", "III", "IV", "V", "VI"];
  var SOURCE = { type: "original", note: "Original teaching resource; not an official curriculum transcription. Unplugged-first: a class with no computer can still complete the unit." };
  var SAFEGUARD = "A computing lesson uses charts, cards, paper keyboards and, when a device is present, the teacher's own machine. Pupils never share passwords, photographs or home addresses. If a child reports online bullying or a request for a picture, listen once, write the child's words, and take it to the head teacher the same day. Unplugged work is complete computing work — a school without a computer is not a school without Computer Science.";
  function termOf(key) { return names[key] || key; }
  return lessons.map(function (L, index) {
    var grade = 1 + Math.floor(index / 6), period = periods[index % 6];
    var keys = L.keys.split(" ");
    var terms = keys.map(function (key) {
      var t = termOf(key), d = glossary[key];
      return { t: t, d: d, x: "In this unit, " + t + " means " + d + "." };
    });
    var facts = terms.slice(0, 6).map(function (term) {
      return { q: "What is meant by “" + term.t + "” in this unit?", a: term.d + "." };
    });
    facts.push({ q: "What computing issue is raised in this unit's classroom scenario?", a: L.scene });
    facts.push({ q: "Explain a responsible response to the scenario and give reasons.", a: L.reply });
    (L.extras || []).forEach(function (s) {
      facts.push({ q: "State this unit idea in your own words: " + s, a: s });
    });
    var left = terms.slice(0, 5).map(function (t) { return t.t; });
    var right = terms.slice(5).map(function (t) { return t.t; });
    var parts = terms.slice(0, 5).map(function (t) { return { p: t.t, f: t.d }; });
    var title = L.title;
    var classParts = L.classify.split(" / ");
    return {
      grade: grade, period: period, sem: index % 6 < 3 ? "One" : "Two",
      icon: L.icon, csPlan: true, title: title,
      subtitle: "Computer Science · Original elementary unit — teacher review required",
      source: SOURCE,
      outcomes: ["Use the unit's computing vocabulary accurately.", "Follow, write and debug an unplugged algorithm with a partner.", "Explain a safe, fair choice about devices and information."],
      objectives: [
        "Explain the ten key terms in " + title.toLowerCase() + ".",
        "Act out or write an unplugged algorithm connected with this unit.",
        "Sort examples into the unit's two groups and give a reason.",
        "Apply the unit's ideas to a fictional Liberian classroom scenario.",
        "Debug a broken set of steps without blaming the person who wrote them.",
        "Work in a pair as driver and navigator and swap roles."
      ],
      safeguard: SAFEGUARD,
      note: L.note,
      focus: ["Unplugged demonstration", "Pair work and debugging", "Classroom scenario", "Computing fair check"],
      terms: terms, facts: facts,
      study: [
        { k: "h3", t: "Understanding " + title },
        { k: "p", t: L.note },
        { k: "p", t: (L.extras || []).join(" ") },
        { k: "h3", t: "Key ideas" },
        { k: "bul", items: terms.map(function (term) { return "**" + term.t + "** — " + term.d + "."; }) },
        { k: "h3", t: "A fictional classroom example" },
        { k: "p", t: L.scene },
        { k: "h3", t: "Worked computing reasoning" },
        { k: "p", t: L.reply },
        { k: "h3", t: "How we practise it unplugged" },
        { k: "p", t: "The class investigation is “" + L.exp + "”. Pupils act the algorithm, write it, debug it in pairs, and only then — if a device is present — try it on a machine. Unplugged computing uses paper, cards and our bodies." },
        { k: "h3", t: "Check yourself" },
        { k: "p", t: "Name the issue, separate a precise instruction from a vague one, consider whose information and safety are affected, try one change at a time, and explain your choice. Do not laugh at a bug. This is original supplementary teaching material. Review it against the school's approved scheme of work." }
      ],
      tf: [
        { s: "In this unit, " + terms[0].t + " means " + terms[0].d + ".", a: "True", why: "This is the working definition used in the unit." },
        { s: "In this unit, " + terms[1].t + " means " + terms[2].d + ".", a: "False", why: terms[1].t + " means " + terms[1].d + "; the statement describes " + terms[2].t + "." },
        { s: "In this unit, " + terms[3].t + " means " + terms[3].d + ".", a: "True", why: "The definition helps distinguish this concept from the other terms." },
        { s: "A computing lesson cannot be taught unless every pupil has a laptop.", a: "False", why: "Unplugged work with paper, cards and our bodies is complete computing work." },
        { s: "We try, we debug, we do not laugh at a mistake.", a: "True", why: "A bug is in the instructions, not in the person." },
        { s: "Pupils should share passwords so a partner can finish the work.", a: "False", why: "A password is secret. Never share a password, PIN or personal photograph." }
      ],
      classify: { title: L.classify, groups: [
        { name: classParts[0], items: left },
        { name: classParts[1] || "Other", items: right }
      ] },
      diagram: { title: L.diagram, caption: "Label each part and state what it does in “" + title + "”.", parts: parts },
      experiment: {
        title: L.exp,
        aim: "To practise the ideas of “" + title + "” without needing a computer for every pupil.",
        materials: ["Chalk or tape for a grid", "Paper cards and arrows", "A paper keyboard or keypad", "Pencils and a class chart", "A timer or a clapped beat"],
        steps: [
          "Agree the two rules: we try, we debug, we do not laugh at a mistake.",
          "The teacher models “" + L.exp + "” once with the whole class watching.",
          "Pairs act the steps, write them, and swap with another pair to debug.",
          "The class records one precise instruction and one bug they found on the chart.",
          "If a device is present, one pair may try the same steps on it while the others watch; otherwise the paper version is the finished work."
        ],
        expect: "Pairs can follow, write and debug the unplugged algorithm and name at least two unit terms in use.",
        why: "Acting the steps makes sequence, bugs and roles visible. A class with no computer can still complete the investigation."
      },
      apply: [
        { q: "Apply this unit's ideas to the following scenario: " + L.scene + " What should happen next?", a: L.reply },
        { q: "Write a four-step unplugged algorithm connected with “" + title + "”. Number the steps.", a: "Accept any four precise, ordered steps that use at least one unit term and could be followed by a classmate." },
        { q: "A classmate laughs when a paper-robot hits a wall. What do you say, and why?", a: "Remind the class that a bug is in the instructions. We try, we debug, we do not laugh at a mistake." },
        { q: "Give one way this unit's idea already appears in Liberian daily life (a market, a radio, a phone, a school office).", a: "Accept a relevant local example that uses a unit term correctly, such as mobile money, a radio bulletin, a phone message or a school register." }
      ],
      activities: [
        "Computing circle: greet, take attendance, and say the two rules.",
        "Unplugged demonstration of “" + L.exp + "”.",
        "Pair programming: driver and navigator swap after five minutes.",
        "Debug a broken set of steps together and record the bug on the class chart.",
        "Sort the unit's examples into two groups and explain one choice.",
        "Act the classroom scenario and agree a safe, fair response."
      ],
      materials: ["Chalkboard or reusable paper", "Word cards for the ten key terms", "Paper arrows, grids and a paper keyboard", "A class computing chart", "Pencils and scrap paper", "Optional: one teacher device, kept dry and in sight"],
      aids: ["Word cards — " + terms.slice(0, 3).map(function (t) { return t.t; }).join(", "), "A flowchart of “" + L.exp + "”", "A paper keyboard or keypad", "Situation cards for the classroom scenario", "The class computing chart"],
      home: ["Tell a family member one new computing word and what it means.", "Practise this week's unplugged algorithm with a sibling or carer (no device needed).", "Look for one example of this unit's idea at home or in the market and be ready to describe it."],
      assessment: ["Oral definition of three key terms", "A four-step written algorithm", "Pair-debug observed against the class chart", "A short written response to the classroom scenario"]
    };
  });
})();
