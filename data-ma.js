/* Curriculum data — Republic of Liberia, Elementary MATHEMATICS, Grades 1–6
   Derived from the "Math 1-6" curriculum guide (79 pp.), 6 periods per grade.

   Mathematics is a COMPUTATIONAL subject, so each topic carries:
     terms[]     {t, d, x}                     vocabulary term, meaning, example
     worked[]    {q, steps[], a}               worked example shown before practice
     drills[]    {id, p}                       procedural generators (see gen-ma.js)
     drillLabel                                heading for the practice exercise
     word[]      {q, a}                        word problems in Liberian contexts
     challenge[] {q, a}                        reasoning / multi-step questions

   Every unit also carries study[] — the course text of the unit, written out
   as a block list (h3 / p / bul / num / table / rule) that follows the
   CONTENTS column of the guide it comes from, with the guide page range of
   each unit recorded in a comment above its list. Where the guide's
   activities column works an example (the family of 10 of Period IV Grade 1,
   the Pastor Pewee walk of Period III Grade 5, the base-five conversions of
   Grade 6), that example is the one used in the notes.

   Per the project rule, the external links listed in the source guide
   (funbrain.com, mathblaster.com, khanacademy.com, mathgametime.com,
   splashmath.com, mathplayground.com) are deliberately omitted: the pack
   must stay fully offline.
*/

const MA_CURRICULUM = [
/* ================= GRADE 1 ================= */
{
  grade:1, period:"I", sem:"One", icon:"🔢",
  title:"Set and Numeration",
  subtitle:"Sets, members of a set, union as addition, subsets as subtraction",
  outcomes:["Use sets and numbers to recognise gender roles in a given family"],
  objectives:["Define set and write examples of sets","Describe the number of members (elements) of a set","Identify the union of sets as addition","Use subsets to introduce subtraction","Solve problems using the addition symbol with digits 1 to 10","Solve problems using the subtraction symbol with digits 1 to 10"],
  note:"A <b>set</b> is a group of things that belong together. The things in a set are called its <b>members</b> or <b>elements</b>. Putting two sets together is <b>addition</b> (union). Taking a part away is <b>subtraction</b>.",
  study:[
    /* ---- course text: Semester One, Period I — Set and Numeration (pages 2-3) ---- */
    {k:"h3", t:"What Is a Set?"},
    {k:"p", t:"A **set** is a group of things that belong together. The things inside a set are called its **members** or **elements**. We use sets every day: a set of boys, a set of girls, a set of books on the desk, a set of plates in the kitchen."},
    {k:"num", items:["The set of boys in the class.", "The set of girls in the class.", "The set of boys and girls together — the whole class.", "The set of people who live in one house — the family."]},
    {k:"rule"},
    {k:"h3", t:"The Number of Members of a Set"},
    {k:"p", t:"Every set has a **number of members**. We count the members to find how many are in the set. A set of three boys has **3 members**; a set of five mangoes has **5 members**."},
    {k:"p", t:"**Worked example — how many members?** Look at a set of 4 girls and count: one, two, three, four. The set has 4 members. The number 4 describes the size of the set."},
    {k:"rule"},
    {k:"h3", t:"Union of Sets Is Addition"},
    {k:"p", t:"**Union** means putting two sets together to make one bigger set. Putting sets together is the same as **adding**. The union of a set of 3 boys and a set of 2 girls is a set of 5 children."},
    {k:"num", items:["Set A = {3 boys}.", "Set B = {2 girls}.", "Union: put them together.", "3 + 2 = 5 children."]},
    {k:"rule"},
    {k:"h3", t:"Subsets and Subtraction"},
    {k:"p", t:"A **subset** is a smaller set taken from a bigger set. The girls in the class form a subset of the whole class. Taking a subset away from a bigger set is the same as **subtracting**."},
    {k:"p", t:"**Worked example:** there are 7 mangoes in a set. 3 are eaten. The eaten mangoes are a subset of 3. How many are left? Start with 7, take away 3: **7 − 3 = 4** mangoes."},
    {k:"rule"},
    {k:"h3", t:"Addition and Subtraction Facts to 10"},
    {k:"p", t:"A **number fact** is an addition or subtraction sentence you know quickly, such as 2 + 3 = 5 or 9 − 4 = 5. Facts with answers up to 10 are the foundation of all later work."},
    {k:"table", head:["Addition facts", "Subtraction facts"], rows:[["1 + 1 = 2","2 − 1 = 1"],["2 + 3 = 5","5 − 3 = 2"],["4 + 4 = 8","8 − 4 = 4"],["5 + 5 = 10","10 − 3 = 7"]]},
    {k:"rule"},
    {k:"h3", t:"Sets in the Family"},
    {k:"p", t:"In a family we can form many sets: the set of fathers, the set of mothers, the set of boys and the set of girls. The whole family is the union of all these sets, and each smaller set is a **subset** of the family."},
    {k:"p", t:"Boys and girls, fathers and mothers all have work to do in the home, and every member's work is valuable. Counting the members of the family sets is one way we use mathematics at home every day."}
  ],
  focus:["Sets and members","Sets of boys, girls, family members","Union of sets as addition","Subsets and subtraction","Addition and subtraction to 10"],
  terms:[
    {t:"set", d:"a group of things that belong together", x:"A set of pencils is on the table." ,ex:{"q":"Write a set of the books on the table and count its members.","steps":["A set is a group of things that belong together.","List each book on the table once: a storybook, a math book, a Bible.","Count the list to find how many members the set has."],"a":"The set {storybook, math book, Bible} has 3 members."}},
    {t:"member", d:"one thing inside a set", x:"Each boy is a member of the set." ,ex:{"q":"Name one member of the set of vowels in the English alphabet.","steps":["The set of vowels is {a, e, i, o, u}.","A member is one thing inside a set.","Pick any single letter from the list: a, e, i, o or u."],"a":"“a” is a member of the set of vowels (e, i, o or u would also work)."}},
    {t:"element", d:"another word for a member of a set", x:"Count every element in the set." ,ex:{"q":"How many elements are in the set of numbers from 10 to 13?","steps":["Write the set: {10, 11, 12, 13}.","An element is another word for a member of a set.","Count the elements: 10, 11, 12, 13 — that is 4."],"a":"There are 4 elements."}},
    {t:"union", d:"putting two sets together", x:"The union of the two sets gives 8." ,ex:{"q":"Set A = {apple, mango} and Set B = {orange, banana}. Find the union A ∪ B and count it.","steps":["The union puts two sets together into one set.","List every member of A and every member of B: apple, mango, orange, banana.","Count the members of the union."],"a":"A ∪ B = {apple, mango, orange, banana}, so the union has 4 members."}},
    {t:"subset", d:"a smaller set taken from a bigger set", x:"The girls form a subset of the class." ,ex:{"q":"The class is the set of all children {boys, girls}. Is the set of girls a subset?","steps":["A subset is a smaller set taken from a bigger set.","Every girl is also a member of the whole class.","So the set of girls lies inside the set of children."],"a":"Yes — every member of the set of girls belongs to the class, so it is a subset."}},
    {t:"add", d:"to put together to find how many altogether", x:"Add 3 and 4 to get 7." ,ex:{"q":"There are 4 mangoes and 3 oranges. Add them.","steps":["Add means to put together to find how many altogether.","Put the 4 mangoes and the 3 oranges together.","Count: 4 + 3 = 7."],"a":"4 + 3 = 7 fruits."}},
    {t:"sum", d:"the answer in addition", x:"The sum of 5 and 2 is 7." ,ex:{"q":"Find the sum of 5 and 2.","steps":["The sum is the answer in addition.","Add: 5 + 2.","Count on from 5: six, seven."],"a":"The sum of 5 and 2 is 7."}},
    {t:"subtract", d:"to take away", x:"Subtract 2 from 9." ,ex:{"q":"Subtract 2 from 9.","steps":["Subtract means to take away.","Start at 9 and take away 2.","Count back: 8, 7."],"a":"9 − 2 = 7."}},
    {t:"difference", d:"the answer in subtraction", x:"The difference between 9 and 4 is 5." ,ex:{"q":"Find the difference between 9 and 4.","steps":["The difference is the answer in subtraction.","Subtract the smaller from the bigger: 9 − 4.","Count back from 9: 8, 7, 6, 5."],"a":"9 − 4 = 5."}},
    {t:"empty set", d:"a set with no members at all", x:"A set of flying goats is an empty set." ,ex:{"q":"Write the set of goats that can fly in the schoolyard. What kind of set is it?","steps":["Look for members: no goat can fly.","There is not a single member to list.","A set with no members at all is the empty set, written { } or ∅."],"a":"It is the empty set: { }."}}
  ],
  worked:[
    {q:"Set A = {a boy, a boy, a boy} and Set B = {a girl, a girl}. How many children altogether?",
     steps:["Count Set A: 3 members.","Count Set B: 2 members.","Union means put them together: 3 + 2.","3 + 2 = 5."], a:"5 children"},
    {q:"There are 7 mangoes in a set. 3 are eaten. How many are left?",
     steps:["Start with 7.","Taking away is subtraction: 7 − 3.","7 − 3 = 4."], a:"4 mangoes"}
  ],
  drillLabel:"Addition and subtraction with sets, 1 to 10",
  drills:[
    {id:"add", p:{min:1,max:10}},
    {id:"sub", p:{min:1,max:10}},
    {id:"set_count"},
    {id:"missing_addend", p:{max:10}}
  ],
  word:[
    {q:"Musu has a set of 4 oranges. Varney gives her a set of 3 more. How many oranges has she now?", a:"4 + 3 = 7 oranges"},
    {q:"A family has 5 boys and 4 girls. How many children in the family?", a:"5 + 4 = 9 children"},
    {q:"There are 9 pencils in a set. 6 are given away. How many remain?", a:"9 − 6 = 3 pencils"},
    {q:"A set has 8 stones. Korpo takes a subset of 3 stones. How many stones are left in the set?", a:"8 − 3 = 5 stones"},
    {q:"Sekou counts 2 chairs in one set and 6 chairs in another. Find the union of the two sets.", a:"2 + 6 = 8 chairs"}
  ],
  challenge:[
    {q:"A set has 6 members. Another set has the same number. What is the total when the two sets are joined?", a:"6 + 6 = 12 members"},
    {q:"Why is a set of five boys called a subset of the whole class?", a:"Because every boy in that set is also a member of the class — a subset is a part of a bigger set."},
    {q:"A set of goats in the classroom has no members. What do we call such a set?", a:"An empty set"}
  ],
  activities:["Group boys and girls separately to form sets","Represent the family by grouping boys and girls together","Discuss the roles of boys, girls, fathers and mothers in the family","Role play using sets of boys and girls"],
  materials:["Elementary Mathematics for Liberia Book 1","Stones, sticks and bottle tops as counters","Number chart"],
  assessment:["Oral questions and answers","Class assignment and participation","Quiz","Test"]
},
{
  grade:1, period:"II", sem:"One", icon:"🔟",
  title:"Numeration",
  subtitle:"Reading, writing, comparing and ordering numbers up to 40",
  outcomes:["Read and write numbers represented in various formats (numerical, pictorial)"],
  objectives:["Count objects up to 40","Read and write numbers up to 40","Compare and order numbers up to 40","Identify addition and subtraction facts up to 40","Solve problems involving basic addition facts"],
  note:"When we <b>compare</b> two numbers we use the signs <b>&gt;</b> (greater than), <b>&lt;</b> (less than) and <b>=</b> (equal to). The number further along the number line is always the greater number.",
  study:[
    /* ---- course text: Semester One, Period II — Numeration (page 4) ---- */
    {k:"h3", t:"Counting Objects up to 40"},
    {k:"p", t:"**Counting** means saying the numbers in order while pointing at each object once: one, two, three, four ... up to forty. The last number you say tells how many objects there are."},
    {k:"p", t:"We can count stones, beans, books, boys and girls. Matching each object to a number is the first step to **reading and writing numbers**."},
    {k:"rule"},
    {k:"h3", t:"Reading and Writing Numbers up to 40"},
    {k:"p", t:"Every number has a **numeral** (the way we write it with digits, like 25) and a **number name** (the way we say it in words, like *twenty-five*)."},
    {k:"table", head:["Numeral","Number name","Numeral","Number name"], rows:[["1","one","21","twenty-one"],["10","ten","22","twenty-two"],["11","eleven","30","thirty"],["12","twelve","33","thirty-three"],["20","twenty","40","forty"]]},
    {k:"p", t:"Numbers can also be shown in **pictures**: five circles for the number 5, or eleven sticks for the number 11."},
    {k:"rule"},
    {k:"h3", t:"Comparing and Ordering Numbers up to 40"},
    {k:"p", t:"We compare numbers to find which is **greater** (bigger), which is **less** (smaller), and when two numbers are **equal** (the same)."},
    {k:"bul", items:["**Greater than** (>): 27 is greater than 19, so 27 > 19.", "**Less than** (<): 14 is less than 25, so 14 < 25.", "**Equal to** (=): 20 is equal to 20, so 20 = 20."]},
    {k:"p", t:"To **order** numbers, put them from the smallest to the largest: 8, 15, 22, 34. You can also say which number lies **between** two others: 30 is between 25 and 35."},
    {k:"rule"},
    {k:"h3", t:"Numbers on a Number Line"},
    {k:"p", t:"A **number line** is a straight line with numbers marked in order. It helps us to count, to compare and to add and subtract."},
    {k:"p", t:"**Worked example:** on the number line from 30 to 40, the number 36 lies between 35 and 37. To add 3 to 36, start at 36 and hop forward three spaces: 37, 38, 39, so 36 + 3 = 39. To subtract 4 from 40, hop back four spaces: 36."},
    {k:"rule"},
    {k:"h3", t:"Addition and Subtraction Facts up to 40"},
    {k:"p", t:"Use the facts you know to add and subtract up to 40. Add the tens and the ones in your head, or use the number line and pictures."},
    {k:"num", items:["Add: 20 + 5 = 25.","Add: 32 + 6 = 38.","Subtract: 34 − 4 = 30.","Subtract: 28 − 6 = 22.","Word problem: Titu has 25 cassava sticks and plants 10 more. He has 25 + 10 = 35 sticks."]}
  ],
  focus:["Counting to 40","Reading and writing numerals and number words","Comparing with >, < and =","Ordering numbers","Addition facts to 40"],
  terms:[
    {t:"numeral", d:"the symbol we write for a number", x:"The numeral for twelve is 12." ,ex:{"q":"Write the numeral for the number of fingers on one hand.","steps":["A numeral is the symbol we write for a number.","Count the fingers on one hand: one, two, three, four, five.","The symbol for five is the digit 5."],"a":"The numeral is 5."}},
    {t:"count", d:"to say how many, one by one", x:"Count the stones up to 40." ,ex:{"q":"Count a row of 6 stones and write the last number you say.","steps":["Counting means saying the numbers in order, one number for each object.","Point at each stone: one, two, three, four, five, six.","The last number tells how many there are."],"a":"There are 6 stones."}},
    {t:"greater than", d:"bigger than, shown by >", x:"25 is greater than 18." ,ex:{"q":"Which is greater, 27 or 19? Write the sign.","steps":["Greater means bigger.","27 is bigger than 19.","The wide open side of > faces the bigger number."],"a":"27 > 19."}},
    {t:"less than", d:"smaller than, shown by <", x:"9 is less than 30." ,ex:{"q":"Compare 14 and 25 using the correct sign.","steps":["Less means smaller.","14 is smaller than 25.","The narrow end of < points to the smaller number."],"a":"14 < 25."}},
    {t:"equal to", d:"the same as, shown by =", x:"20 is equal to 20." ,ex:{"q":"Compare 20 and 20 using the correct sign.","steps":["Two numbers are equal when they are the same.","20 is the same number as 20.","The sign for equal to is =."],"a":"20 = 20."}},
    {t:"order", d:"to arrange from smallest to biggest", x:"Order these numbers from small to big." ,ex:{"q":"Order these numbers from smallest to biggest: 8, 15, 22, 34.","steps":["To order numbers means to put them from smallest to largest.","Find the smallest: 8, then 15, then 22, then 34.","Write them in that order."],"a":"8, 15, 22, 34."}},
    {t:"number line", d:"a straight line with numbers marked on it", x:"Show 15 on the number line." ,ex:{"q":"On the number line from 30 to 40, which number lies between 35 and 37?","steps":["A number line is a straight line with numbers marked in order.","The number between 35 and 37 must be bigger than 35 and smaller than 37.","The only whole number that fits is 36."],"a":"36 lies between 35 and 37."}},
    {t:"before", d:"coming just in front of", x:"19 comes before 20." ,ex:{"q":"On the number line, what number comes just before 40?","steps":["Numbers before a number on the line are the smaller ones.","Just before 40 means one step back.","40 − 1 = 39."],"a":"39 comes just before 40."}},
    {t:"after", d:"coming just next", x:"21 comes after 20." ,ex:{"q":"On the number line, what number comes just after 19?","steps":["Numbers after a number on the line are the bigger ones.","Just after 19 means one step forward.","19 + 1 = 20."],"a":"20 comes just after 19."}},
    {t:"between", d:"in the middle of two numbers", x:"14 is between 13 and 15." ,ex:{"q":"Write the number that lies between 11 and 13.","steps":["“Between” means in the middle of two numbers.","The number must be bigger than 11 and smaller than 13.","The only whole number that fits is 12."],"a":"12 lies between 11 and 13."}}
  ],
  worked:[
    {q:"Which is greater, 27 or 32?",
     steps:["Compare the tens first: 2 tens against 3 tens.","3 tens is more than 2 tens.","So 32 is greater: 27 < 32."], a:"32 is greater  (27 < 32)"},
    {q:"Write the number that comes between 23 and 25.",
     steps:["Count on from 23: 24.","Check: 24 comes just before 25.","So the answer is 24."], a:"24"}
  ],
  drillLabel:"Numbers up to 40",
  drills:[
    {id:"compare", p:{min:1,max:40}},
    {id:"count_on", p:{max:40,steps:[1,2]}},
    {id:"between", p:{max:40}},
    {id:"numword", p:{min:11,max:40}},
    {id:"order_nums", p:{min:1,max:40}},
    {id:"add", p:{min:1,max:20}}
  ],
  word:[
    {q:"Massa counts 18 bottle tops and Momo counts 15. Who has more?", a:"Massa, because 18 > 15"},
    {q:"There are 22 pupils in a class. 9 more join. How many pupils now?", a:"22 + 9 = 31 pupils"},
    {q:"Write in figures: thirty-seven.", a:"37"},
    {q:"A shopkeeper has 40 eggs and sells 12. How many eggs are left?", a:"40 − 12 = 28 eggs"},
    {q:"Arrange from smallest to biggest: 26, 8, 34, 19.", a:"8, 19, 26, 34"}
  ],
  challenge:[
    {q:"I am a number between 25 and 30. I am even and I come after 27. What number am I?", a:"28"},
    {q:"Count by 5s from 5 up to 40. Write the numbers.", a:"5, 10, 15, 20, 25, 30, 35, 40"},
    {q:"Which is the biggest number you can write with the digits 3 and 9?", a:"93"}
  ],
  activities:["Match objects with numbers up to 40","Use flash cards for reading and writing numbers","Compare numbers on the number line","Order sets of number cards"],
  materials:["Elementary Mathematics for Liberia Book 1","Ruler, poster sheets, flash cards","Pictures of different objects"],
  assessment:["Oral questions","Class assignment","Quiz","Test"]
},
{
  grade:1, period:"III", sem:"One", icon:"🏷️",
  title:"Place Value",
  subtitle:"Two-digit numbers, place value, and counting by 2s, 5s and 10s to 100",
  outcomes:["Read and write two-digit numbers and show their place value","Count and write whole numbers by 2s, 5s and 10s and apply counting to money"],
  objectives:["Read and write two-digit numbers","Determine the place value of a two-digit number","Compare and order numbers up to 100","Find numbers before, after and between","Count by 2s, 5s and 10s up to 100"],
  note:"In a two-digit number the right-hand digit shows the <b>ones</b> and the left-hand digit shows the <b>tens</b>. In 47 there are 4 tens and 7 ones, so 47 = 40 + 7.",
  study:[
    /* ---- course text: Semester One, Period III — Place Value (pages 5-6) ---- */
    {k:"h3", t:"Two-Digit Numbers and Place Value"},
    {k:"p", t:"A **two-digit number** has two digits, like 23. Each digit has a **place** and a **value**. The first digit tells how many **tens**, and the second digit tells how many **ones**."},
    {k:"table", head:["Number","Tens","Ones","Place value model"], rows:[["23","2","3","two bundles of 10 sticks and 3 loose sticks"],["45","4","5","four bundles of 10 sticks and 5 loose sticks"],["78","7","8","seven bundles of 10 sticks and 8 loose sticks"]]},
    {k:"p", t:"In 23, the digit 2 stands for **2 tens (20)** and the digit 3 stands for **3 ones (3)**. So 23 = 20 + 3."},
    {k:"rule"},
    {k:"h3", t:"Reading and Writing Numbers up to 100"},
    {k:"p", t:"Count from 1 to 100 and back. Numbers from 21 to 99 are read as the tens, then the ones: 54 is *fifty-four* and 86 is *eighty-six*. The number **100** is *one hundred*, made of ten tens."},
    {k:"rule"},
    {k:"h3", t:"Comparing and Ordering Numbers up to 100"},
    {k:"p", t:"To compare two two-digit numbers, first look at the **tens**. The number with more tens is greater. If the tens are the same, compare the **ones**."},
    {k:"num", items:["56 and 41: 5 tens is more than 4 tens, so 56 > 41.", "63 and 68: both have 6 tens, so compare ones: 3 < 8, so 63 < 68.", "Order 72, 49, 61 from smallest: 49, 61, 72."]},
    {k:"rule"},
    {k:"h3", t:"Numbers Before, After and Between"},
    {k:"p", t:"The number that comes **before** another number is one less: 39 comes before 40. The number that comes **after** is one more: 41 comes after 40. Numbers **between** two others lie in the middle: 45 is between 40 and 50."},
    {k:"rule"},
    {k:"h3", t:"Counting by 2s, 5s and 10s to 100"},
    {k:"p", t:"**Counting by 2s, 5s and 10s** is counting in equal jumps. It makes counting large groups faster and helps us learn the value of money."},
    {k:"bul", items:["**By 2s:** 2, 4, 6, 8, 10, 12, ...", "**By 5s:** 5, 10, 15, 20, 25, 30, ...", "**By 10s:** 10, 20, 30, 40, 50, ... 100"]},
    {k:"p", t:"Counting by 10s is very useful for money: five L$10 notes are L$50, and ten L$10 notes are L$100."},
    {k:"rule"},
    {k:"h3", t:"Ordinal Numbers to 100"},
    {k:"p", t:"**Ordinal numbers** tell the position of something in a line: first, second, third, fourth, fifth ... When written as figures they are 1st, 2nd, 3rd, 4th, 5th, and so on up to 100th."},
    {k:"p", t:"In a queue of pupils, the one at the front is **first (1st)**, the next is **second (2nd)**, then **third (3rd)**. Ordinal numbers answer the question *which position?*"}
  ],
  focus:["Numbers to 100","Tens and ones","Before, after and between","Skip counting by 2s, 5s, 10s","Ordinal numbers to 100"],
  terms:[
    {t:"place value", d:"what a digit is worth because of its position", x:"In 58 the place value of 5 is 50." ,ex:{"q":"In the number 36, what is the place value of the digit 3?","steps":["Place value is what a digit is worth because of its position.","In 36, the 3 stands in the tens column.","One ten is worth 10, so the 3 is worth 30."],"a":"The place value of the 3 in 36 is 30."}},
    {t:"digit", d:"any of the symbols 0 to 9", x:"The number 47 has two digits." ,ex:{"q":"How many digits are in the number 408?","steps":["A digit is any of the symbols 0 to 9.","Read 408 one symbol at a time: 4, 0, 8.","Count the symbols: 3."],"a":"408 has 3 digits (4, 0 and 8)."}},
    {t:"tens", d:"groups of ten", x:"There are 4 tens in 45." ,ex:{"q":"How many tens are in the number 40?","steps":["The tens column counts groups of ten.","40 = 10 + 10 + 10 + 10 — four groups of ten.","The digit in the tens column is 4."],"a":"40 has 4 tens."}},
    {t:"ones", d:"single units", x:"There are 5 ones in 45." ,ex:{"q":"In the number 23, how many ones are there?","steps":["The ones column counts single units.","23 = 2 tens and 3 ones.","The digit in the ones column is 3."],"a":"23 has 3 ones."}},
    {t:"bundle", d:"ten sticks tied together to show one ten", x:"Tie a bundle of ten sticks." ,ex:{"q":"Bundle 23 sticks into groups of ten. How many bundles, and how many single sticks, are left?","steps":["A bundle is a group of ten tied together.","From 23 sticks make 10 + 10 = 20, that is 2 bundles.","The sticks left over are 23 − 20 = 3."],"a":"2 bundles of ten and 3 single sticks — that is 23."}},
    {t:"skip count", d:"to count in steps such as 2s or 5s", x:"Skip count by 5s to 50." ,ex:{"q":"Skip count by twos, starting at 2, up to 10.","steps":["Skip counting means counting by steps bigger than one.","Jump two at a time: 2, 4, 6, 8, 10.","Each jump adds 2."],"a":"2, 4, 6, 8, 10."}},
    {t:"expanded form", d:"a number written as tens plus ones", x:"The expanded form of 63 is 60 + 3." ,ex:{"q":"Write 37 in expanded form.","steps":["Expanded form writes a number as tens plus ones.","37 = 3 tens and 7 ones.","3 tens = 30, so 37 = 30 + 7."],"a":"37 = 30 + 7."}},
    {t:"even", d:"a number that can be shared into two equal parts", x:"8 is an even number." ,ex:{"q":"Which of the numbers 6 and 7 is even?","steps":["An even number can be split into two equal groups.","Split 6: 3 and 3 — equal groups, so 6 is even.","Split 7: 3 and 4 — not equal, so 7 is odd."],"a":"6 is even (its last digit is even too)."}},
    {t:"odd", d:"a number that cannot be shared equally into two", x:"7 is an odd number." ,ex:{"q":"Which of the numbers 8 and 9 is odd?","steps":["An odd number cannot be split into two equal groups.","Split 9: 4 and 5 — the groups are not equal.","So 9 is odd, while 8 (4 and 4) is even."],"a":"9 is odd."}},
    {t:"hundred", d:"ten tens", x:"Ten tens make one hundred." ,ex:{"q":"How many tens make one hundred?","steps":["A hundred is a group of one hundred units.","Count by tens: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100.","There are 10 steps of ten in one hundred."],"a":"10 tens make one hundred (10 × 10 = 100)."}}
  ],
  worked:[
    {q:"What is the place value of 6 in 64?",
     steps:["Look at the position of 6 — it is in the tens place.","6 tens = 60.","So the place value of 6 is 60."], a:"60 (six tens)"},
    {q:"Write 82 in expanded form.",
     steps:["8 is in the tens place: 8 × 10 = 80.","2 is in the ones place: 2.","So 82 = 80 + 2."], a:"80 + 2"}
  ],
  drillLabel:"Place value and counting to 100",
  drills:[
    {id:"place_value", p:{digits:2}},
    {id:"expanded", p:{digits:2}},
    {id:"count_on", p:{max:100,steps:[2,5,10]}},
    {id:"between", p:{max:100}},
    {id:"compare", p:{min:1,max:100}},
    {id:"numword", p:{min:20,max:99}}
  ],
  word:[
    {q:"A shopkeeper has 5 bundles of ten sticks and 3 loose sticks. How many sticks in all?", a:"53 sticks"},
    {q:"Count by 10s from 10. Write the first six numbers.", a:"10, 20, 30, 40, 50, 60"},
    {q:"Fatu has 7 tens and 6 ones of bottle tops. Write the number.", a:"76"},
    {q:"Which number comes just after 89?", a:"90"},
    {q:"Write the place value of 3 in 35.", a:"30 (three tens)"}
  ],
  challenge:[
    {q:"I have 9 in the tens place and 0 in the ones place. What number am I?", a:"90"},
    {q:"Count by 2s from 2 to 20. How many numbers did you write?", a:"10 numbers: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20"},
    {q:"Using the digits 4 and 7 only once each, write the smallest two-digit number.", a:"47"}
  ],
  activities:["Bundle sticks in tens to model place value","Use a place value chart and strips","Count Liberian coins and notes by 5s and 10s","Number chart games"],
  materials:["Elementary Mathematics for Liberia Book 1","Bundles of sticks in tens","Place value chart, abacus counters","Number chart"],
  assessment:["Oral questions","Observation","Quiz","Test"]
},
{
  grade:1, period:"IV", sem:"Two", icon:"➕",
  title:"Adding and Subtracting 2-Digit Numbers",
  subtitle:"Multiples of ten, regrouping ones, and solving addition and subtraction problems",
  outcomes:["Apply addition and subtraction skills to solve real-life problems"],
  objectives:["Add and subtract tens","Add 2-digit numbers without regrouping","Subtract 2-digit numbers without regrouping","Regroup ones (renaming)","Solve problems involving addition and subtraction"],
  note:"When ones add up to 10 or more we <b>regroup</b>: carry one ten to the tens column. The <b>number families</b> help: the family of 10 is 1+9, 2+8, 3+7, 4+6, 5+5.",
  study:[
    /* ---- course text: Semester Two, Period IV — Adding and Subtracting 2-Digit Numbers (pages 7-8) ---- */
    {k:"h3", t:"Adding Multiples of Ten"},
    {k:"p", t:"A **multiple of ten** is a number that ends in 0: 10, 20, 30, 40 ... To add multiples of ten, just add the tens."},
    {k:"p", t:"**Worked example:** 20 + 30. Count the tens: 2 tens + 3 tens = 5 tens, so **20 + 30 = 50**. Add multiples of ten in your head: 30 + 40 = 70, 10 + 60 = 70."},
    {k:"rule"},
    {k:"h3", t:"Subtracting Multiples of Ten"},
    {k:"p", t:"To subtract multiples of ten, subtract the tens. **60 − 20 = 40** because 6 tens take away 2 tens leaves 4 tens. 90 − 40 = 50, 80 − 30 = 50."},
    {k:"rule"},
    {k:"h3", t:"Adding 2-Digit Numbers without Regrouping"},
    {k:"p", t:"When neither column makes more than 9, we add the **ones first**, then the **tens**. This is adding **without regrouping**."},
    {k:"num", items:["Add 23 + 34.","Ones: 3 + 4 = 7.","Tens: 2 + 3 = 5.","23 + 34 = 57."]},
    {k:"rule"},
    {k:"h3", t:"Regrouping Ones (Renaming)"},
    {k:"p", t:"**Regrouping** (also called **renaming** or **trading**) happens when a column makes 10 or more: we trade 10 ones for 1 ten."},
    {k:"p", t:"The **family of 10** is the set of pairs of numbers whose sum is 10:"},
    {k:"table", head:["Pair","Sum","Pair","Sum"], rows:[["1 + 9","10","9 + 1","10"],["2 + 8","10","8 + 2","10"],["3 + 7","10","7 + 3","10"],["4 + 6","10","6 + 4","10"],["5 + 5","10"]]},
    {k:"p", t:"The **family of 11** works the same way: 2 + 9 = 11, 8 + 3 = 11, 4 + 7 = 11, 5 + 6 = 11. Knowing these families makes regrouping quick."},
    {k:"rule"},
    {k:"h3", t:"Subtracting 2-Digit Numbers"},
    {k:"p", t:"To subtract 2-digit numbers, subtract the **ones**, then the **tens**. When the ones are not enough, **regroup**: trade 1 ten for 10 ones."},
    {k:"num", items:["Subtract 46 − 23.","Ones: 6 − 3 = 3.","Tens: 4 − 2 = 2.","46 − 23 = 23."]},
    {k:"rule"},
    {k:"h3", t:"Solving Problems with Addition and Subtraction"},
    {k:"p", t:"Read the problem carefully and decide: are we putting together (**add**) or taking away (**subtract**)? Then work in order and check the answer."},
    {k:"num", items:["Korto has 24 marbles and finds 15 more. 24 + 15 = 39 marbles.","A market woman has 38 cups of rice and sells 16. 38 − 16 = 22 cups left.","There are 45 pupils; 20 are girls. The rest are boys: 45 − 20 = 25 boys."]}
  ],
  focus:["Adding and subtracting multiples of ten","2-digit addition without regrouping","2-digit subtraction","Regrouping ones (renaming)","Number families"],
  terms:[
    {t:"regroup", d:"to carry ten ones over as one ten", x:"We regroup when the ones make more than 9." ,ex:{"q":"Add 15 + 27 using regrouping.","steps":["Add the ones first: 5 + 7 = 12.","Regroup: 12 ones = 1 ten and 2 ones; write 2 and carry 1 ten.","Add the tens: 1 + 2 + 1 = 4."],"a":"15 + 27 = 42."}},
    {t:"rename", d:"another word for regrouping", x:"Rename 13 ones as 1 ten and 3 ones." ,ex:{"q":"Rename 1 ten and 8 ones using ones only.","steps":["To rename means to write the same amount in a different way.","1 ten = 10 ones.","10 ones + 8 ones = 18 ones."],"a":"1 ten and 8 ones = 18 ones."}},
    {t:"addend", d:"a number being added", x:"In 4 + 5, both 4 and 5 are addends." ,ex:{"q":"In 23 + 18 = 41, name the two addends.","steps":["An addend is a number that is being added.","The numbers being added are 23 and 18.","The answer 41 is the sum, not an addend."],"a":"The addends are 23 and 18."}},
    {t:"total", d:"the answer when we add", x:"The total of 20 and 30 is 50." ,ex:{"q":"Kollie has 16 oranges and buys 12 more. Find the total.","steps":["The total is how many there are altogether.","Add: 16 + 12.","Ones: 6 + 2 = 8; tens: 1 + 1 = 2."],"a":"The total is 28 oranges."}},
    {t:"column", d:"numbers written one under the other", x:"Put the ones in the same column." ,ex:{"q":"Set out 45 + 23 in columns and add.","steps":["Write the numbers in columns so tens stand under tens and ones under ones.","45 on top, 23 below: 5 above 3, 4 above 2.","Add down the ones column, then down the tens column."],"a":"45 + 23 = 68 (ones: 5 + 3 = 8, tens: 4 + 2 = 6)."}},
    {t:"carry", d:"to move a ten into the tens column", x:"Carry 1 to the tens column." ,ex:{"q":"Add 36 + 28, carrying the ten.","steps":["Add the ones: 6 + 8 = 14.","Write 4 in the ones column and carry 1 ten to the tens column.","Add the tens: 3 + 2 + 1 = 6."],"a":"36 + 28 = 64."}},
    {t:"borrow", d:"to take one ten and change it into ten ones", x:"Borrow from the tens to subtract." ,ex:{"q":"Subtract 15 from 32, borrowing a ten.","steps":["You cannot take 5 ones from 2 ones, so borrow 1 ten.","32 becomes 2 tens and 12 ones.","Ones: 12 − 5 = 7; tens: 2 − 1 = 1."],"a":"32 − 15 = 17."}},
    {t:"altogether", d:"in total, all added", x:"How many altogether?" ,ex:{"q":"A basket has 9 pineapples and another basket has 6. How many altogether?","steps":["“Altogether” means add the parts together.","Add: 9 + 6.","Count on from 9: ten, eleven, twelve, thirteen, fourteen, fifteen."],"a":"9 + 6 = 15 altogether."}},
    {t:"left over", d:"what remains after taking away", x:"How many are left over?" ,ex:{"q":"A seller has 13 bananas and sells 7. How many are left over?","steps":["“Left over” means subtract what is taken away.","Subtract: 13 − 7.","Count back from 13: 12, 11, 10, 9, 8, 7, 6."],"a":"6 bananas are left over."}},
    {t:"number family", d:"the pairs of numbers that make a given sum", x:"The number family of 10 includes 6 + 4." ,ex:{"q":"Write the number family for 3, 4 and 7.","steps":["A number family is the four facts that use the same three numbers.","3 + 4 = 7 and 4 + 3 = 7.","7 − 3 = 4 and 7 − 4 = 3."],"a":"3 + 4 = 7, 4 + 3 = 7, 7 − 3 = 4, 7 − 4 = 3."}}
  ],
  worked:[
    {q:"Add 34 + 25.",
     steps:["Add the ones: 4 + 5 = 9.","Add the tens: 30 + 20 = 50.","Put them together: 50 + 9 = 59."], a:"59"},
    {q:"Subtract 47 − 23.",
     steps:["Subtract the ones: 7 − 3 = 4.","Subtract the tens: 40 − 20 = 20.","Put them together: 20 + 4 = 24."], a:"24"}
  ],
  drillLabel:"2-digit addition and subtraction",
  drills:[
    {id:"add", p:{min:10,max:60}},
    {id:"sub", p:{min:10,max:80}},
    {id:"number_family", p:{sum:10}},
    {id:"missing_addend", p:{max:40}},
    {id:"mul_tens", p:{unit:10}}
  ],
  word:[
    {q:"Bendu picks 32 mangoes and Tarnue picks 25. How many mangoes altogether?", a:"32 + 25 = 57 mangoes"},
    {q:"A shop had 68 eggs and sold 43. How many are left?", a:"68 − 43 = 25 eggs"},
    {q:"There are 40 pupils in Grade 1 and 30 in Grade 2. How many pupils in the two classes?", a:"40 + 30 = 70 pupils"},
    {q:"Nyema had 55 marbles and lost 20. How many has he now?", a:"55 − 20 = 35 marbles"},
    {q:"A farmer plants 26 cassava sticks in one row and 34 in another. How many in both rows?", a:"26 + 34 = 60 cassava sticks"}
  ],
  challenge:[
    {q:"Complete the family of 11: 4 + ___ = 11 and 11 − 4 = ___", a:"7 and 7"},
    {q:"Kou has 30 oranges. She sells 12 in the morning and 9 in the afternoon. How many are left?", a:"30 − 12 − 9 = 9 oranges"},
    {q:"Two numbers add up to 50. One of them is 22. What is the other?", a:"28"}
  ],
  activities:["Add and subtract multiples of ten using base-10 models","Work in groups with bundles of sticks","Count, add and subtract multiples of ten mentally","Practise the number families of 10 and 11"],
  materials:["Elementary Mathematics for Liberia Book 1","Place value chart","Addition and subtraction table","Liberian currency for counting"],
  assessment:["Class assignment and participation","Observation","Quiz","Test"]
},
{
  grade:1, period:"V", sem:"Two", icon:"📏",
  title:"Measurement",
  subtitle:"Length, weight, capacity, time and Liberian money",
  outcomes:["Determine length, width, capacity and weight","Tell time and count money using Liberian dollars"],
  objectives:["Explain the importance of measurement","Discuss the idea of length","Describe weight and mass","Estimate length and weight using a selected unit","Tell different times of the day","Identify Liberian money in terms of unit value","Describe capacity"],
  note:"To <b>measure</b> is to find how long, how heavy or how much. We can measure with <b>non-standard units</b> (hand spans, footsteps) or with <b>standard units</b> (centimetres, kilograms, litres).",
  study:[
    /* ---- course text: Semester Two, Period V — Measurement (pages 9-10) ---- */
    {k:"h3", t:"Why We Measure"},
    {k:"p", t:"**Measurement** tells us how long, how heavy, how much, or how long-lasting something is. We measure to build a house, to cut cloth, to cook rice, to sell goods at the market and to tell the time."},
    {k:"p", t:"When we measure we compare an object with a **unit of measure**: a hand span for length, a cup for capacity, a stone for weight."},
    {k:"rule"},
    {k:"h3", t:"Estimating and Measuring Length"},
    {k:"p", t:"**Length** is how long something is. Before measuring, we can **estimate** — make a careful guess. Then we measure with **non-standard units** such as hand spans, paces, strings, fingers and shoes, or with **standard units** such as the centimetre and the metre on a ruler or tape measure."},
    {k:"num", items:["Estimate the length of the chalkboard in hand spans, then measure it.","Measure the length of your copybook with your ruler.","Measure the heights of the boys and girls with a tape line and compare."]},
    {k:"rule"},
    {k:"h3", t:"Weight (Mass)"},
    {k:"p", t:"**Weight** tells how heavy something is. We compare weights by lifting, or we balance them on a scale. A stone may be heavier than a book; a book may be heavier than a pencil, even if they look the same size."},
    {k:"p", t:"Two learners of the same height can have different weights. Lift stones, books and school bags to feel the difference between heavy and light."},
    {k:"rule"},
    {k:"h3", t:"Capacity"},
    {k:"p", t:"**Capacity** is the amount of space inside a container — how much a cup, a bottle, a pot or a room can hold. We fill a container to measure its capacity: a cup holds one cup of rice; a bottle holds two cups of water."},
    {k:"rule"},
    {k:"h3", t:"Telling Time"},
    {k:"p", t:"A **clock** shows the time of day. The short hand tells the **hour** and the long hand tells the **minutes**. We read times such as 7 o'clock, 8 o'clock and 12 o'clock."},
    {k:"p", t:"The day is divided into times: **morning** (when we wake and go to school), **noon** (middle of the day), **afternoon**, **evening** (when the sun goes down) and **night** (when we sleep). School begins in the morning and ends in the afternoon."},
    {k:"rule"},
    {k:"h3", t:"Counting Liberian Money"},
    {k:"p", t:"The money we use in Liberia is the **Liberian Dollar**, written **L$**. We count money using its **unit value**: L$5, L$10, L$20, L$50, L$100, L$500 and L$1,000 notes, and coins in cents."},
    {k:"num", items:["Two L$5 notes are L$10.","Five L$20 notes are L$100.","One L$50 note and one L$20 note are L$70.","Count money by 10s: L$10, L$20, L$30, L$40, L$50."]}
  ],
  focus:["Importance of measurement","Estimating length","Weight and capacity","Telling time","Counting Liberian money"],
  terms:[
    {t:"measure", d:"to find how long, heavy or how much", x:"Measure the desk with a ruler." ,ex:{"q":"What do we use to measure the length of a pencil?","steps":["To measure means to find out how long, heavy or much there is.","Length is measured with a ruler or a tape.","Line the ruler's 0 mark with one end of the pencil and read the other end."],"a":"We measure the pencil's length with a ruler."}},
    {t:"length", d:"how long something is", x:"The length of the table is 1 metre." ,ex:{"q":"A stick lies from the 0 mark to the 9 mark on a ruler. What is its length?","steps":["Length is how long something is.","Read where the stick ends on the ruler: the 9 mark.","9 − 0 = 9 cm."],"a":"The stick is 9 cm long."}},
    {t:"weight", d:"how heavy something is", x:"The weight of the rice is 5 kilograms." ,ex:{"q":"A melon weighs 3 kg and a pineapple weighs 1 kg. Which is heavier, and by how much?","steps":["Weight is how heavy something is.","Compare: 3 kg > 1 kg, so the melon is heavier.","Subtract: 3 − 1 = 2 kg."],"a":"The melon is heavier by 2 kg."}},
    {t:"capacity", d:"how much a container can hold", x:"The capacity of the bucket is 10 litres." ,ex:{"q":"A bottle holds 2 cups of water. One cup is poured out. How much does it hold now?","steps":["Capacity is how much a container can hold.","The bottle held 2 cups.","After 1 cup is poured out: 2 − 1 = 1 cup."],"a":"It holds 1 cup now."}},
    {t:"estimate", d:"to make a sensible guess before measuring", x:"Estimate the length of the room." ,ex:{"q":"About how many beans are in a small cup — 5, 20 or 100?","steps":["To estimate means to make a sensible guess before counting exactly.","A small cup is too small for 100 beans and too big for 5.","20 beans is the sensible guess."],"a":"About 20 beans."}},
    {t:"ruler", d:"a tool for measuring length", x:"Use a ruler to draw a line." ,ex:{"q":"How many centimetres are marked on a 15 cm ruler?","steps":["A ruler is a straight tool marked in centimetres.","It is marked 0, 1, 2 … up to 15.","Count the centimetre marks from 0 to 15."],"a":"15 centimetres (the marks 0 to 15)."}},
    {t:"scale", d:"a tool for measuring weight", x:"Weigh the rice on a scale." ,ex:{"q":"A pan balance shows 2 kg on one side and a watermelon on the other. It balances. What is the watermelon's weight?","steps":["A scale is a tool for measuring weight.","When the scale balances, both sides weigh the same.","One side is 2 kg, so the watermelon weighs 2 kg too."],"a":"The watermelon weighs 2 kg."}},
    {t:"clock", d:"a tool that shows the time", x:"The clock shows 8 o'clock." ,ex:{"q":"It is 3 o'clock. What time will it be in 2 hours?","steps":["A clock shows the time with a short hand for hours and a long hand for minutes.","Starting at 3, count forward 2 hours: 4, 5.","The short hand will point to 5."],"a":"It will be 5 o'clock."}},
    {t:"hour", d:"a unit of time of 60 minutes", x:"School starts at the eighth hour." ,ex:{"q":"A lesson lasts 1 hour. How many minutes is that?","steps":["An hour is 60 minutes.","There is only one hour, so the minutes are 60.","1 hour = 60 minutes."],"a":"60 minutes."}},
    {t:"money", d:"notes and coins used to buy things", x:"Count the money carefully." ,ex:{"q":"You have two L$1 coins and one L$5 coin. How much money do you have?","steps":["Money is the notes and coins we use to buy things.","Add the coins: 1 + 1 = 2, then 2 + 5 = 7.","Count all the coins together."],"a":"L$7."}}
  ],
  worked:[
    {q:"The class starts at 8:00 and ends at 10:00. How long is it?",
     steps:["Count on from 8 to 10.","8 to 9 is one hour, 9 to 10 is one hour.","So it is 2 hours."], a:"2 hours"},
    {q:"Musu has L$50 and L$20. How much money has she?",
     steps:["Add the two amounts: 50 + 20.","50 + 20 = 70.","So she has L$70."], a:"L$70"}
  ],
  drillLabel:"Measurement, time and money",
  drills:[
    {id:"tell_time"},
    {id:"money_add"},
    {id:"convert_time", p:{kinds:["h_min","wk_d"]}},
    {id:"add", p:{min:5,max:50}},
    {id:"compare", p:{min:1,max:100}}
  ],
  word:[
    {q:"A rope is 8 metres long. Another is 5 metres long. How much longer is the first?", a:"8 − 5 = 3 metres"},
    {q:"Saah buys bread for L$25 and pays with L$50. How much change?", a:"50 − 25 = L$25"},
    {q:"A bucket holds 10 litres. A cup holds 1 litre. How many cups fill the bucket?", a:"10 cups"},
    {q:"School begins at 8 o'clock and closes at 1 o'clock. How many hours is that?", a:"5 hours"},
    {q:"Yatta's bag weighs 3 kg and her books weigh 2 kg. What is the total weight?", a:"3 + 2 = 5 kilograms"}
  ],
  challenge:[
    {q:"Two pupils are the same height but one is heavier. Explain how this is possible.", a:"Height and weight are different measurements — a person can be the same length but have more mass."},
    {q:"You have no ruler. Suggest two ways to measure the length of the classroom.", a:"Pace it with footsteps, or use hand spans, a string or the length of your arm."},
    {q:"Boakai has three L$20 notes. How much money is that?", a:"20 + 20 + 20 = L$60"}
  ],
  activities:["Discuss the importance of measurement using books, doors, heights","Compare the weight and height of two learners","Estimate the length of the class by pacing","Use a paper clock to tell time"],
  materials:["Elementary Mathematics for Liberia Book 1","Rocks, rope, string, tapeline","Weighing scale, paper clock","Liberian money"],
  assessment:["Practical measurement task","Observation","Quiz","Test"]
},
{
  grade:1, period:"VI", sem:"Two", icon:"🔺",
  title:"Geometric Shapes and Fractions",
  subtitle:"Triangles, rectangles and circles; halves, thirds and fourths",
  outcomes:["Differentiate shapes of geometric figures (triangles, rectangles, circles)","Recognise halves, thirds and fourths using a fraction chart or number line"],
  objectives:["Sort plane figures according to shape","Identify triangles, rectangles and circles","Draw triangles, rectangles and circles","Identify halves, thirds and fourths"],
  note:"A <b>fraction</b> shows equal parts of a whole. When a whole is cut into 2 equal parts each part is a <b>half</b> (1/2); into 3 parts each is a <b>third</b> (1/3); into 4 parts each is a <b>fourth</b> (1/4).",
  study:[
    /* ---- course text: Semester Two, Period VI — Geometric Shapes and Fractions (page 11) ---- */
    {k:"h3", t:"Sorting Shapes"},
    {k:"p", t:"A **shape** is the form of an object. We can **sort** shapes into sets by how they look: things with three straight sides, things with four straight sides, and things that are round."},
    {k:"p", t:"Shapes such as triangles, rectangles, squares and circles are called **plane figures** because they are flat, like drawings on paper."},
    {k:"rule"},
    {k:"h3", t:"Triangles"},
    {k:"p", t:"A **triangle** is a shape with **3 straight sides** and **3 corners** (vertices). The roof of many houses in Liberia is shaped like a triangle."},
    {k:"rule"},
    {k:"h3", t:"Rectangles"},
    {k:"p", t:"A **rectangle** is a shape with **4 straight sides** and **4 corners**. Its opposite sides are equal, and all four corners are square corners. A door, a window and a page of your book are rectangles."},
    {k:"p", t:"A **square** is a special rectangle: it has 4 equal sides and 4 square corners."},
    {k:"rule"},
    {k:"h3", t:"Circles"},
    {k:"p", t:"A **circle** is a round shape with **no corners** and **no straight sides**. The rim of a cup, a coin and the face of a clock are circles."},
    {k:"rule"},
    {k:"h3", t:"Drawing Shapes"},
    {k:"p", t:"Use a straight edge to draw triangles and rectangles and your hand to draw circles. Draw each shape, name it, and tell how many sides and corners it has."},
    {k:"rule"},
    {k:"h3", t:"Halves, Thirds and Fourths"},
    {k:"p", t:"A **fraction** is a part of a whole. When we divide a whole into equal parts, each part has a name: **halves** (2 equal parts), **thirds** (3 equal parts) and **fourths** (4 equal parts)."},
    {k:"num", items:["Divide a circle into 2 equal parts. Each part is one **half** (1/2).","Divide a rectangle into 3 equal parts. Each part is one **third** (1/3).","Divide a rectangle into 4 equal parts and shade 1 part. The shaded part is one **fourth** (1/4)."]},
    {k:"p", t:"The fraction chart and the number line show these parts clearly: on a number line from 0 to 1, the point halfway is 1/2, the point one third of the way is 1/3, and so on."}
  ],
  focus:["Sorting plane shapes","Triangles, rectangles and circles","Drawing shapes","Halves, thirds and fourths"],
  terms:[
    {t:"shape", d:"the form of a figure", x:"A ball has a round shape." ,ex:{"q":"Name the shape of a coin.","steps":["A shape is the form of a figure.","A coin is round with no corners.","The round shape is a circle."],"a":"A coin has the shape of a circle."}},
    {t:"triangle", d:"a flat shape with three straight sides", x:"A triangle has 3 corners." ,ex:{"q":"How many sides does a triangle have?","steps":["A triangle is a flat shape with three straight sides.","Count the sides: one, two, three.","It also has three corners (vertices)."],"a":"A triangle has 3 sides."}},
    {t:"rectangle", d:"a flat shape with four sides and four square corners", x:"The door is a rectangle." ,ex:{"q":"Count the sides and corners of a rectangle.","steps":["A rectangle has four straight sides.","Its opposite sides are equal in length.","Count the corners: one, two, three, four — all right angles."],"a":"A rectangle has 4 sides and 4 corners."}},
    {t:"circle", d:"a round flat shape with no corners", x:"Trace a circle round the cup." ,ex:{"q":"How many corners does a circle have?","steps":["A circle is a round flat shape.","Its edge is one curve with no corners.","So it has no corners and no straight sides."],"a":"A circle has 0 corners."}},
    {t:"square", d:"a rectangle with all four sides equal", x:"A square tile has equal sides." ,ex:{"q":"What is special about the sides of a square?","steps":["A square is a rectangle with all four sides equal.","Measure each side: all four are the same length.","It also has four right-angle corners."],"a":"All four sides of a square are equal."}},
    {t:"side", d:"one straight edge of a shape", x:"Count each side of the shape." ,ex:{"q":"How many sides does a rectangle have?","steps":["A side is one straight edge of a shape.","A rectangle's edges: top, bottom, left, right.","Count: 4 sides."],"a":"A rectangle has 4 sides."}},
    {t:"corner", d:"where two sides meet", x:"A rectangle has four corners." ,ex:{"q":"How many corners does a triangle have?","steps":["A corner (vertex) is where two sides of a shape meet.","A triangle's three sides meet at three corners.","Count: 3 corners."],"a":"A triangle has 3 corners."}},
    {t:"fraction", d:"a number showing equal parts of a whole", x:"One half is a fraction." ,ex:{"q":"An orange is cut into 2 equal parts. What fraction is one part?","steps":["A fraction is one part of a whole that has been divided equally.","The whole orange is divided into 2 equal parts.","One part out of the 2 is written 1/2."],"a":"One part is 1/2 of the orange."}},
    {t:"half", d:"one of two equal parts", x:"Cut the orange in half." ,ex:{"q":"Cut a bar of chocolate into 2 equal pieces. How much is one piece?","steps":["Half means one of two equal parts of a whole.","The chocolate bar is the whole; each piece is one part out of 2.","One piece is 1/2, called a half."],"a":"One piece is one half, 1/2."}},
    {t:"fourth", d:"one of four equal parts", x:"Shade one fourth of the square." ,ex:{"q":"A pizza is cut into 4 equal slices. What fraction is one slice?","steps":["A fourth is one of four equal parts of a whole.","The pizza is divided into 4 equal slices.","One slice is 1/4, called a fourth."],"a":"One slice is one fourth, 1/4."}}
  ],
  worked:[
    {q:"A circle is divided into 4 equal parts and 1 part is shaded. What fraction is shaded?",
     steps:["Count all the equal parts: 4. This is the denominator.","Count the shaded parts: 1. This is the numerator.","So the fraction is 1/4."], a:"1/4 (one fourth)"},
    {q:"How many sides has a rectangle?",
     steps:["Look at the shape and touch each straight edge.","Count: 1, 2, 3, 4.","A rectangle has 4 sides."], a:"4 sides"}
  ],
  drillLabel:"Shapes and simple fractions",
  drills:[
    {id:"shape_sides", p:{pool:[["triangle",3],["square",4],["rectangle",4],["circle",0]]}},
    {id:"name_shape"},
    {id:"frac_name", p:{dens:[2,3,4]}},
    {id:"frac_compare", p:{dens:[2,3,4]}}
  ],
  word:[
    {q:"Momo cuts a pawpaw into two equal parts and eats one. What fraction did he eat?", a:"1/2 (one half)"},
    {q:"A cake is cut into 4 equal parts. Hawa takes 3. What fraction did she take?", a:"3/4"},
    {q:"Name the shape of a classroom door.", a:"A rectangle"},
    {q:"How many corners has a triangle?", a:"3 corners"},
    {q:"A rope is bent into a shape with no corners at all. What shape is it?", a:"A circle"}
  ],
  challenge:[
    {q:"Which is bigger, one half or one fourth of the same orange? Explain.", a:"One half — the fewer the equal parts, the bigger each part."},
    {q:"Draw a square and a rectangle. Say one way they are the same and one way they differ.", a:"Both have 4 sides and 4 square corners; a square has all four sides equal, a rectangle need not."},
    {q:"A shape has 3 sides and 3 corners. Name it.", a:"A triangle"}
  ],
  activities:["Sort cut-out plane figures by shape","Draw triangles, rectangles and circles","Fold paper to show halves, thirds and fourths","Shade fractional parts of a circle"],
  materials:["Elementary Mathematics for Liberia Book 1","Cut paper shapes","Fraction chart","Rulers"],
  assessment:["Drawing and sorting task","Quiz","Class assignment","Test"]
},

/* ================= GRADE 2 ================= */
{
  grade:2, period:"I", sem:"One", icon:"👥",
  title:"Sets and Numbers",
  subtitle:"Disjoint sets, counting by 2s, 5s and 10s to 100, parts of a whole",
  outcomes:["Use a given population data to add and subtract whole numbers","Identify parts of a whole and count up to 100"],
  objectives:["Match objects to whole numbers","Add numbers using the union of two disjoint sets","Count by twos, fives and tens up to 100","Compare parts of a whole"],
  note:"Two sets are <b>disjoint</b> when they have no member in common. Joining two disjoint sets is the same as <b>adding</b> the number of members in each.",
  study:[
    /* ---- course text: Semester One, Period I — Sets and Numbers (pages 12-13) ---- */
    {k:"h3", t:"Sets and Numbers"},
    {k:"p", t:"A **set** is a group of things that belong together, and a **number** tells how many members the set has. We **match objects to numbers**: 5 stones match the number 5, and 8 pupils match the number 8."},
    {k:"p", t:"Matching sets of objects to numbers helps us count accurately and prepares us to add and subtract."},
    {k:"rule"},
    {k:"h3", t:"Disjoint Sets"},
    {k:"p", t:"Two sets are **disjoint** when they have **no common elements** — no member belongs to both sets. The set of boys and the set of girls in a class are disjoint: no one is both a boy and a girl."},
    {k:"p", t:"The set of mangoes and the set of oranges on a table are disjoint. But the set of boys and the set of the whole class are not disjoint, because every boy is also in the class."},
    {k:"rule"},
    {k:"h3", t:"Number Sequences"},
    {k:"p", t:"A **number sequence** is a list of numbers that follow a rule. We can count by 2s, by 5s and by 10s up to 100."},
    {k:"bul", items:["**By 2s:** 2, 4, 6, 8, 10, ..., 100", "**By 5s:** 5, 10, 15, 20, 25, ..., 100", "**By 10s:** 10, 20, 30, 40, ..., 100"]},
    {k:"p", t:"Continue the sequence 5, 10, 15, 20, ... The rule is *add 5*, so the next numbers are 25 and 30."},
    {k:"rule"},
    {k:"h3", t:"Adding and Subtracting with Population Data"},
    {k:"p", t:"**Population data** are numbers that describe groups of people, such as the members of a family, the pupils of a school, or the people of a town. We can add or subtract these numbers to answer questions."},
    {k:"num", items:["A family has 5 boys and 4 girls. How many children? 5 + 4 = 9 children.","A school has 60 pupils; 35 are girls. How many are boys? 60 − 35 = 25 boys.","A village has 40 men and 38 women. How many adults? 40 + 38 = 78 adults."]},
    {k:"rule"},
    {k:"h3", t:"Parts of a Whole"},
    {k:"p", t:"A whole can be divided into **equal parts**. One part of the whole is called a **fraction**. If a cassava stick is cut into two equal pieces, each piece is one **half** of the stick; cut into four equal pieces, each is one **fourth**."},
    {k:"p", t:"We can **compare parts of a whole**: one half of a whole is bigger than one fourth of the same whole, because two equal parts are larger than four equal parts."}
  ],
  focus:["Sets and numbers","Disjoint sets","Addition and subtraction using population data","Number sequences","Parts of a whole"],
  terms:[
    {t:"disjoint sets", d:"two sets with no member in common", x:"The set of boys and the set of girls are disjoint sets." ,ex:{"q":"Set A = {cats, dogs} and Set B = {fish, birds}. Are the sets disjoint?","steps":["Disjoint sets have no member in common.","Compare the members: no animal appears in both sets.","So the two sets are disjoint."],"a":"Yes — they share no member."}},
    {t:"population", d:"all the people in a place", x:"The population of the town is growing." ,ex:{"q":"A village has 120 men, 130 women and 150 children. What is the population of the village?","steps":["The population is all the people in a place.","Add the first two groups: 120 + 130 = 250.","Add the children: 250 + 150 = 400."],"a":"The population is 400 people."}},
    {t:"data", d:"facts and figures we collect", x:"Use the data to add the numbers." ,ex:{"q":"The numbers of pupils present on Monday (30) and Tuesday (28) are collected. What are these numbers called?","steps":["Data are facts and figures we collect.","The attendance figures 30 and 28 were collected on purpose.","They are data about the class."],"a":"They are data (attendance data)."}},
    {t:"sequence", d:"numbers in a fixed order or pattern", x:"2, 4, 6, 8 is a sequence." ,ex:{"q":"What is a sequence? Give one example.","steps":["A sequence is an ordered list of numbers following a rule.","Example: 2, 4, 6, 8, … (the even numbers).","Each number in the list is called a term."],"a":"Example: 2, 4, 6, 8, …"}},
    {t:"whole", d:"a complete thing before it is divided", x:"The whole orange has four parts." ,ex:{"q":"An apple is cut into 4 slices. Before it was cut, what was the apple called?","steps":["The whole is the complete thing before it is divided.","The apple was one complete apple.","After cutting, the 4 slices are the parts."],"a":"The apple is the whole."}},
    {t:"part", d:"a piece of a whole", x:"Each part is equal." ,ex:{"q":"A mango is cut into 3 equal parts. Write one piece as a fraction.","steps":["A part is a piece of a whole.","The mango (the whole) is cut into 3 equal pieces.","Each piece is 1 part out of 3, written 1/3."],"a":"One piece is 1 part out of 3 (1/3)."}},
    {t:"union", d:"putting two sets together", x:"Find the union of the two sets." ,ex:{"q":"Set A = {apple, mango} and Set B = {orange, banana}. Find the union A ∪ B and count it.","steps":["The union puts two sets together into one set.","List every member of A and every member of B: apple, mango, orange, banana.","Count the members of the union."],"a":"A ∪ B = {apple, mango, orange, banana}, so the union has 4 members."}},
    {t:"pattern", d:"a repeating arrangement", x:"Continue the pattern by 5s." ,ex:{"q":"Continue the pattern: ●, ●, ○, ●, ●, ○, …  (what are the next two?)","steps":["A pattern is a repeating arrangement.","The group ●, ●, ○ repeats: two full dots, then one hollow dot.","After the last ○ the pattern starts again: ●, ●."],"a":"The next two are ●, ●."}},
    {t:"total", d:"the answer when we add", x:"Find the total of the two sets." ,ex:{"q":"Kollie has 16 oranges and buys 12 more. Find the total.","steps":["The total is how many there are altogether.","Add: 16 + 12.","Ones: 6 + 2 = 8; tens: 1 + 1 = 2."],"a":"The total is 28 oranges."}},
    {t:"compare", d:"to say which is bigger, smaller or equal", x:"Compare the parts of the whole." ,ex:{"q":"Compare 46 and 48. Write the correct sign.","steps":["To compare means to say which is bigger, smaller or equal.","Look at the tens: both are 4 tens.","Look at the ones: 6 < 8, so 46 is smaller than 48."],"a":"46 < 48."}}
  ],
  worked:[
    {q:"A family has a set of 6 boys and a set of 5 girls. How many children altogether?",
     steps:["The two sets are disjoint — no child is both a boy and a girl.","Union means add: 6 + 5.","6 + 5 = 11."], a:"11 children"},
    {q:"Count by 5s from 5 to 40.",
     steps:["Start at 5 and add 5 each time.","5, 10, 15, 20, 25, 30, 35, 40.","There are 8 numbers."], a:"5, 10, 15, 20, 25, 30, 35, 40"}
  ],
  drillLabel:"Sets, counting patterns and numbers to 100",
  drills:[
    {id:"set_count"},
    {id:"set_union"},
    {id:"count_on", p:{max:100,steps:[2,5,10]}},
    {id:"add", p:{min:10,max:60}},
    {id:"sub", p:{min:10,max:80}},
    {id:"compare", p:{min:1,max:100}}
  ],
  word:[
    {q:"In a village 45 people are men and 38 are women. What is the total population?", a:"45 + 38 = 83 people"},
    {q:"A class has 24 boys and 21 girls. How many more boys than girls?", a:"24 − 21 = 3 more boys"},
    {q:"Count by 10s from 10 to 100. How many numbers are there?", a:"10 numbers: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100"},
    {q:"A set has 30 oranges and another disjoint set has 25. Find the union.", a:"30 + 25 = 55 oranges"},
    {q:"Out of 60 pupils, 35 are girls. How many are boys?", a:"60 − 35 = 25 boys"}
  ],
  challenge:[
    {q:"Give an example of two disjoint sets in your classroom.", a:"Any correct pair with no common member, e.g. the set of boys and the set of girls."},
    {q:"Count by 2s from 2 to 30 and say how many numbers you wrote.", a:"15 numbers"},
    {q:"A whole is divided into 4 equal parts. Are two of those parts the same as half the whole?", a:"Yes — 2/4 is the same as 1/2."}
  ],
  activities:["Use population data to add or subtract","Demonstrate sets of children of the same sex without common elements","Draw sets of objects and match with whole numbers","Count numbers by 2s, 5s and 10s to 100"],
  materials:["Elementary Mathematics for Liberia Book 2","Sets of different objects","Number chart"],
  assessment:["Oral questions","Class assignment","Quiz","Test"]
},
{
  grade:2, period:"II", sem:"One", icon:"💯",
  title:"Numeration",
  subtitle:"Reading and writing numbers to 200, place value and expanded form",
  outcomes:["Read and write numbers","Analyse numbers and their values"],
  objectives:["Read and write numbers up to 200","Recognise and name the place value of a digit","Write a given number in expanded form","Read and write names for fractional numbers"],
  note:"In a three-digit number the digits show <b>hundreds, tens and ones</b>. For 125: 1 hundred, 2 tens, 5 ones, so <b>125 = 100 + 20 + 5</b>.",
  study:[
    /* ---- course text: Semester One, Period II — Numeration (page 14) ---- */
    {k:"h3", t:"Reading and Writing Numbers up to 200"},
    {k:"p", t:"We read and write **numerals** (with digits) and **number names** (in words) up to 200. Numbers from 100 to 199 are read as *one hundred* plus the tens and ones: 128 is *one hundred twenty-eight*."},
    {k:"table", head:["Numeral","Number name"], rows:[["100","one hundred"],["115","one hundred fifteen"],["150","one hundred fifty"],["180","one hundred eighty"],["200","two hundred"]]},
    {k:"rule"},
    {k:"h3", t:"Place Value"},
    {k:"p", t:"**Place value** tells us the value of each digit by its place in the number. In a three-digit number, the first digit is **hundreds**, the second is **tens** and the third is **ones**."},
    {k:"table", head:["Number","Hundreds","Tens","Ones"], rows:[["125","1","2","5"],["160","1","6","0"],["204","2","0","4"],["178","1","7","8"]]},
    {k:"p", t:"In 125 the digit 1 is in the hundreds place and means **100**; the digit 2 is in the tens place and means **20**; the digit 5 is in the ones place and means **5**."},
    {k:"rule"},
    {k:"h3", t:"Standard and Expanded Form"},
    {k:"p", t:"**Standard form** is the usual way of writing a number, such as 125. **Expanded form** (or **expanded notation**) shows the value of each digit added together."},
    {k:"num", items:["Write 125 in expanded form.","Use place value: 1 hundred, 2 tens, 5 ones.","125 = 100 + 20 + 5."]},
    {k:"p", t:"More examples: 160 = 100 + 60 + 0, and 204 = 200 + 0 + 4."},
    {k:"rule"},
    {k:"h3", t:"Fractional Numbers"},
    {k:"p", t:"**Fractional numbers** name parts of a whole. We read them by naming the top number (the part taken) and then the bottom number (how many equal parts the whole was divided into)."},
    {k:"bul", items:["**1/2** is read *one-half* (1 part out of 2).", "**1/3** is read *one-third* (1 part out of 3).", "**1/4** is read *one-fourth* (1 part out of 4).", "**3/4** is read *three-fourths* (3 parts out of 4)."]},
    {k:"p", t:"Shaded fraction illustrations show the parts clearly: a rectangle divided into 4 equal parts with 1 part shaded shows one-fourth."}
  ],
  focus:["Numerals to 200","Place value","Standard and expanded form","Fractional numbers"],
  terms:[
    {t:"hundreds", d:"groups of one hundred", x:"There is 1 hundred in 125." ,ex:{"q":"How many hundreds are in 300?","steps":["A hundred is a group of one hundred.","300 = 100 + 100 + 100.","Count the hundreds: three."],"a":"300 has 3 hundreds."}},
    {t:"expanded form", d:"a number written as hundreds plus tens plus ones", x:"The expanded form of 234 is 200 + 30 + 4." ,ex:{"q":"Write 37 in expanded form.","steps":["Expanded form writes a number as tens plus ones.","37 = 3 tens and 7 ones.","3 tens = 30, so 37 = 30 + 7."],"a":"37 = 30 + 7."}},
    {t:"standard form", d:"a number written the usual way", x:"The standard form is 234." ,ex:{"q":"Write “two hundred and thirty-five” in standard form.","steps":["Standard form is a number written the usual way, with digits.","Two hundred = 200, thirty = 30, five = 5.","Add: 200 + 30 + 5 = 235."],"a":"235."}},
    {t:"place value", d:"what a digit is worth in its position", x:"The place value of 3 in 234 is 30." ,ex:{"q":"In the number 36, what is the place value of the digit 3?","steps":["Place value is what a digit is worth because of its position.","In 36, the 3 stands in the tens column.","One ten is worth 10, so the 3 is worth 30."],"a":"The place value of the 3 in 36 is 30."}},
    {t:"numerator", d:"the top number of a fraction", x:"In 3/4 the numerator is 3." ,ex:{"q":"In the fraction 3/4, which number is the numerator?","steps":["The numerator is the top number of a fraction.","In 3/4, the number on top is 3.","The numerator counts how many parts we have."],"a":"The numerator is 3."}},
    {t:"denominator", d:"the bottom number of a fraction", x:"In 3/4 the denominator is 4." ,ex:{"q":"In the fraction 3/4, which number is the denominator?","steps":["The denominator is the bottom number of a fraction.","In 3/4, the number at the bottom is 4.","The denominator counts how many equal parts the whole is cut into."],"a":"The denominator is 4."}},
    {t:"fractional number", d:"a number that shows part of a whole", x:"One third is a fractional number." ,ex:{"q":"Shade 2 of 5 equal boxes. Write the fractional number.","steps":["A fractional number names a part of a whole.","The whole is 5 equal boxes (the denominator).","2 boxes are shaded (the numerator)."],"a":"The fractional number is 2/5."}},
    {t:"digit", d:"any of the symbols 0 to 9", x:"200 has three digits." ,ex:{"q":"How many digits are in the number 408?","steps":["A digit is any of the symbols 0 to 9.","Read 408 one symbol at a time: 4, 0, 8.","Count the symbols: 3."],"a":"408 has 3 digits (4, 0 and 8)."}},
    {t:"value", d:"how much something is worth", x:"Find the value of the digit 7." ,ex:{"q":"In the number 2,541, what is the value of the digit 5?","steps":["The value of a digit is how much it is worth in its position.","The 5 stands in the hundreds column.","5 hundreds = 500."],"a":"The value of the 5 is 500."}},
    {t:"numeral", d:"the written symbol for a number", x:"Write the numeral for one hundred." ,ex:{"q":"Write the numeral for the number of fingers on one hand.","steps":["A numeral is the symbol we write for a number.","Count the fingers on one hand: one, two, three, four, five.","The symbol for five is the digit 5."],"a":"The numeral is 5."}}
  ],
  worked:[
    {q:"Write 176 in expanded form.",
     steps:["1 is in the hundreds place: 100.","7 is in the tens place: 70.","6 is in the ones place: 6.","So 176 = 100 + 70 + 6."], a:"100 + 70 + 6"},
    {q:"What is the place value of 8 in 189?",
     steps:["8 is in the tens place.","8 tens = 80.","So the place value of 8 is 80."], a:"80"}
  ],
  drillLabel:"Numbers up to 200 and place value",
  drills:[
    {id:"place_value", p:{digits:3}},
    {id:"expanded", p:{digits:3}},
    {id:"numword", p:{min:100,max:200}},
    {id:"compare", p:{min:50,max:200}},
    {id:"order_nums", p:{min:1,max:200}},
    {id:"frac_name", p:{dens:[2,3,4,5]}}
  ],
  word:[
    {q:"Write one hundred and fifty-eight in figures.", a:"158"},
    {q:"What is the value of the digit 2 in 129?", a:"20"},
    {q:"Write 143 in expanded form.", a:"100 + 40 + 3"},
    {q:"Which is greater, 187 or 178?", a:"187"},
    {q:"A pawpaw is cut into 5 equal parts and 2 are eaten. Write the fraction eaten.", a:"2/5"}
  ],
  challenge:[
    {q:"Using the digits 1, 6 and 9 once each, write the largest number you can.", a:"961"},
    {q:"A number has 2 hundreds, 0 tens and 0 ones. Write it in figures and in words.", a:"200 — two hundred"},
    {q:"Which digit in 175 has the greatest place value? What is that value?", a:"The digit 1; its value is 100."}
  ],
  activities:["Review reading and writing numerals up to 100 in small groups","Read and write numerals up to 200","Use place value concepts to write digits","Express three-digit numerals in expanded notation"],
  materials:["Elementary Mathematics for Liberia Book 2","Numbers chart, place value chart","Shaded fractional illustrations"],
  assessment:["Written exercise","Oral questions","Quiz","Test"]
},
{
  grade:2, period:"III", sem:"One", icon:"🧮",
  title:"Operation Part I",
  subtitle:"Adding and subtracting 2-digit numbers without regrouping; equality and inequality",
  outcomes:["Solve addition and subtraction problems involving 2-digit and 3-digit numbers without regrouping"],
  objectives:["Find the sum of three or more two-digit numerals without regrouping","Use equality and inequality in addition","Subtract one-digit and two-digit numbers without regrouping","Use population concepts as examples"],
  note:"When the ones column adds to less than 10 there is <b>no regrouping</b>. Add the ones first, then the tens. Use <b>=</b> for equality and <b>&gt;</b> or <b>&lt;</b> for inequality.",
  study:[
    /* ---- course text: Semester One, Period III — Operation Part I (pages 15-16) ---- */
    {k:"h3", t:"Adding Two-Digit Numbers without Regrouping"},
    {k:"p", t:"To add two-digit numbers **without regrouping**, add the ones first, then add the tens. We can add three or more two-digit numbers in the same way."},
    {k:"num", items:["Add 21 + 32 + 14.","Ones: 1 + 2 + 4 = 7.","Tens: 2 + 3 + 1 = 6.","21 + 32 + 14 = 67."]},
    {k:"p", t:"Adding four two-digit numbers: 10 + 20 + 30 + 12 = 72 (ones: 0 + 0 + 0 + 2 = 2; tens: 1 + 2 + 3 + 1 = 7)."},
    {k:"rule"},
    {k:"h3", t:"Subtracting Two-Digit Numbers without Regrouping"},
    {k:"p", t:"To subtract, take the **ones** away first, then the **tens**."},
    {k:"num", items:["Subtract 47 − 23.","Ones: 7 − 3 = 4.","Tens: 4 − 2 = 2.","47 − 23 = 24."]},
    {k:"p", t:"**Word problem:** thirty-six learners went to the clinic with malaria. If seventeen of them were boys, how many were girls? 36 − 17: the ones 6 − 7 cannot be done, so regroup one ten (10 + 6 = 16); 16 − 7 = 9; the tens are now 2 − 1 = 1. So **36 − 17 = 19 girls**."},
    {k:"rule"},
    {k:"h3", t:"Equality and Inequality"},
    {k:"p", t:"We use symbols to compare two amounts:"},
    {k:"bul", items:["**=** means *is equal to*: 13 = 13.", "**>** means *is greater than*: 15 > 10.", "**<** means *is less than*: 10 < 15."]},
    {k:"table", head:["Sentence","Symbol","Why"], rows:[["7 + 6 __ 13","=","7 + 6 = 13"],["7 + 6 __ 15","<","13 is less than 15"],["7 + 6 __ 10",">","13 is greater than 10"]]},
    {k:"rule"},
    {k:"h3", t:"Adding and Subtracting the Two Sexes in a Family"},
    {k:"p", t:"We can use population concepts in addition and subtraction: add the number of boys and girls in a family, or subtract one from the other to find how many more boys than girls there are."},
    {k:"num", items:["A family has 6 boys and 4 girls. Children altogether: 6 + 4 = 10.","There are 6 boys and 4 girls. Boys minus girls: 6 − 4 = 2. There are 2 more boys than girls.","The parents are 2 members: the whole family is 10 + 2 = 12 members."]}
  ],
  focus:["Adding three or more 2-digit numbers","Subtracting without regrouping","Equality and inequality","Addition using family data"],
  terms:[
    {t:"sum", d:"the answer when numbers are added", x:"Find the sum of 21 and 34." ,ex:{"q":"Find the sum of 5 and 2.","steps":["The sum is the answer in addition.","Add: 5 + 2.","Count on from 5: six, seven."],"a":"The sum of 5 and 2 is 7."}},
    {t:"equality", d:"when two sides are equal, shown by =", x:"Equality means both sides are the same." ,ex:{"q":"Is 7 + 2 = 9 an equality? Give your reason.","steps":["An equality is a statement where the two sides are equal, shown by =.","Work the left side: 7 + 2 = 9.","The left side (9) equals the right side (9)."],"a":"Yes, because both sides equal 9."}},
    {t:"inequality", d:"when two sides are not equal, shown by > or <", x:"An inequality uses > or <." ,ex:{"q":"Put 15 and 18 into an inequality using < or >.","steps":["An inequality says one side is greater or less than the other, shown by < or >.","15 is smaller than 18.","The narrow end of < points to the smaller number."],"a":"15 < 18."}},
    {t:"minuend", d:"the number you subtract from", x:"In 45 − 12, the minuend is 45." ,ex:{"q":"In 84 − 37 = 47, which number is the minuend?","steps":["In subtraction, the minuend is the number we take from.","The number we start with is 84.","37 is the subtrahend and 47 is the difference."],"a":"The minuend is 84."}},
    {t:"subtrahend", d:"the number being taken away", x:"In 45 − 12, the subtrahend is 12." ,ex:{"q":"In 84 − 37 = 47, which number is the subtrahend?","steps":["The subtrahend is the number taken away.","The number being taken away is 37.","84 is the minuend and 47 is the difference."],"a":"The subtrahend is 37."}},
    {t:"difference", d:"the answer in subtraction", x:"The difference is 33." ,ex:{"q":"Find the difference between 9 and 4.","steps":["The difference is the answer in subtraction.","Subtract the smaller from the bigger: 9 − 4.","Count back from 9: 8, 7, 6, 5."],"a":"9 − 4 = 5."}},
    {t:"column addition", d:"adding numbers set out one under another", x:"Use column addition for three numbers." ,ex:{"q":"Add 56 + 38 in columns.","steps":["Write the numbers in columns: ones under ones, tens under tens.","Add the ones column: 6 + 8 = 14; write 4, carry 1 ten.","Add the tens column: 5 + 3 + 1 = 9."],"a":"56 + 38 = 94."}},
    {t:"estimate", d:"a sensible guess before working", x:"Estimate the sum before you add." ,ex:{"q":"About how many beans are in a small cup — 5, 20 or 100?","steps":["To estimate means to make a sensible guess before counting exactly.","A small cup is too small for 100 beans and too big for 5.","20 beans is the sensible guess."],"a":"About 20 beans."}},
    {t:"check", d:"to make sure the answer is right", x:"Check by subtracting your answer." ,ex:{"q":"Check that 25 + 18 = 43.","steps":["To check means to make sure the answer is right.","Subtract one addend from the sum: 43 − 25.","43 − 25 = 18, the other addend, so the addition is correct."],"a":"43 − 25 = 18 — the answer checks out."}},
    {t:"more than", d:"greater than", x:"32 is more than 21." ,ex:{"q":"Write the number sentence: 9 is more than 4.","steps":["“More than” means bigger; add the amount more.","9 is 5 more than 4, because 4 + 5 = 9.","Write the number sentence."],"a":"4 + 5 = 9."}}
  ],
  worked:[
    {q:"Add 21 + 34 + 12.",
     steps:["Add the ones: 1 + 4 + 2 = 7.","Add the tens: 20 + 30 + 10 = 60.","Total: 60 + 7 = 67."], a:"67"},
    {q:"Subtract 68 − 25.",
     steps:["Ones: 8 − 5 = 3.","Tens: 60 − 20 = 40.","Answer: 40 + 3 = 43."], a:"43"}
  ],
  drillLabel:"Addition and subtraction without regrouping",
  drills:[
    {id:"add_col", p:{digits:2,terms:3}},
    {id:"sub", p:{min:20,max:99}},
    {id:"compare", p:{min:10,max:99}},
    {id:"missing_addend", p:{max:99}},
    {id:"add", p:{min:10,max:60}}
  ],
  word:[
    {q:"Thirty-six learners attended the clinic for malaria. If seventeen of them were boys, how many were girls?", a:"36 − 17 = 19 girls"},
    {q:"A family has 21 chickens, 34 ducks and 12 goats. How many animals in all?", a:"21 + 34 + 12 = 67 animals"},
    {q:"A shop sold 45 loaves in the morning and 32 in the afternoon. How many loaves in all?", a:"45 + 32 = 77 loaves"},
    {q:"There were 89 pupils at assembly and 46 went home. How many remained?", a:"89 − 46 = 43 pupils"},
    {q:"Compare: is 54 + 12 greater or less than 70?", a:"54 + 12 = 66, which is less than 70"}
  ],
  challenge:[
    {q:"Find three two-digit numbers whose sum is 90.", a:"Any correct set, e.g. 30 + 25 + 35 = 90"},
    {q:"Musu added 43 + 25 and got 78. Is she correct? Show the right answer.", a:"No. 43 + 25 = 68"},
    {q:"Write an inequality using 47 and 74.", a:"47 < 74 (or 74 > 47)"}
  ],
  activities:["Add three and four two-digit numerals without regrouping","Subtract 2-digit numerals without regrouping","Use family and clinic data as examples","Group work checking each other's answers"],
  materials:["Elementary Mathematics for Liberia Book 2","Number counters, wall charts"],
  assessment:["Class assignment","Observation","Quiz","Test"]
},
{
  grade:2, period:"IV", sem:"Two", icon:"🔁",
  title:"Operation Part II",
  subtitle:"Addition and subtraction with regrouping; multiplying 1-digit numerals",
  outcomes:["Adopt skills of solving addition and subtraction involving 2-digit numbers using regrouping"],
  objectives:["Solve addition problems using regrouping","Solve subtraction problems using regrouping","Multiply 1-digit numerals"],
  note:"When the ones add to 10 or more, <b>regroup</b>: write the ones digit and carry 1 to the tens. When subtracting and the top digit is too small, <b>borrow</b> one ten from the tens column.",
  study:[
    /* ---- course text: Semester Two, Period IV — Operation Part II (page 17) ---- */
    {k:"h3", t:"Adding with Regrouping"},
    {k:"p", t:"When the **ones** add to 10 or more, we **regroup**: trade 10 ones for 1 ten and carry the ten to the tens column. The same rule works when adding three or more two-digit numbers."},
    {k:"num", items:["Add 28 + 35.","Ones: 8 + 5 = 13 = 1 ten and 3 ones.","Write 3 in the ones and carry 1 ten.","Tens: 2 + 3 + 1 = 6.","28 + 35 = 63."]},
    {k:"p", t:"**Worked example — three numbers:** 19 + 24 + 18. Ones: 9 + 4 + 8 = 21, write 1, carry 2. Tens: 1 + 2 + 1 + 2 = 6. Answer: 61."},
    {k:"rule"},
    {k:"h3", t:"Subtracting with Regrouping"},
    {k:"p", t:"When the ones are not enough to subtract, **regroup** one ten into 10 ones, then subtract."},
    {k:"num", items:["Subtract 52 − 28.","Ones: 2 − 8 cannot be done.","Regroup: 5 tens become 4 tens; 2 ones become 12 ones.","Ones: 12 − 8 = 4.","Tens: 4 − 2 = 2.","52 − 28 = 24."]},
    {k:"rule"},
    {k:"h3", t:"Multiplying One-Digit Numerals"},
    {k:"p", t:"**Multiplication** is repeated addition of the same number. 3 × 4 means 4 + 4 + 4 = 12: three groups of four. The answer is called the **product**."},
    {k:"table", head:["Multiplication","Repeated addition","Product"], rows:[["2 × 3","3 + 3","6"],["3 × 4","4 + 4 + 4","12"],["4 × 5","5 + 5 + 5 + 5","20"],["2 × 10","10 + 10","20"]]},
    {k:"p", t:"Learn the multiplication facts by playing multiplication games with counters, so that 2 × 3 = 6 and 5 × 5 = 25 come quickly."}
  ],
  focus:["Addition with regrouping","Subtraction with regrouping","Multiplication of 1-digit numerals"],
  terms:[
    {t:"regrouping", d:"changing ten ones into one ten, or one ten into ten ones", x:"Use regrouping when the ones make ten or more." ,ex:{"q":"Add 47 + 36 with regrouping.","steps":["Ones: 7 + 6 = 13 ones.","Regroup: 13 ones = 1 ten and 3 ones.","Tens: 4 + 3 + 1 = 8."],"a":"47 + 36 = 83."}},
    {t:"carry", d:"to take a ten into the tens column", x:"Carry the 1 to the tens column." ,ex:{"q":"Add 36 + 28, carrying the ten.","steps":["Add the ones: 6 + 8 = 14.","Write 4 in the ones column and carry 1 ten to the tens column.","Add the tens: 3 + 2 + 1 = 6."],"a":"36 + 28 = 64."}},
    {t:"borrow", d:"to take a ten and change it into ten ones", x:"Borrow one ten to subtract." ,ex:{"q":"Subtract 15 from 32, borrowing a ten.","steps":["You cannot take 5 ones from 2 ones, so borrow 1 ten.","32 becomes 2 tens and 12 ones.","Ones: 12 − 5 = 7; tens: 2 − 1 = 1."],"a":"32 − 15 = 17."}},
    {t:"product", d:"the answer in multiplication", x:"The product of 4 and 3 is 12." ,ex:{"q":"Find the product of 3 and 4.","steps":["The product is the answer in multiplication.","Multiply: 3 × 4.","Count 3 fours: 4, 8, 12."],"a":"3 × 4 = 12."}},
    {t:"factor", d:"a number being multiplied", x:"In 4 × 3, both 4 and 3 are factors." ,ex:{"q":"In 3 × 4 = 12, name the factors.","steps":["A factor is a number being multiplied.","The two numbers being multiplied are 3 and 4.","12 is the product."],"a":"The factors are 3 and 4."}},
    {t:"times", d:"another word for multiplied by", x:"Four times three is twelve." ,ex:{"q":"How much is 5 times 3?","steps":["“Times” means multiply.","5 times 3 = 5 × 3.","Count 5 threes: 3, 6, 9, 12, 15."],"a":"5 × 3 = 15."}},
    {t:"repeated addition", d:"adding the same number again and again", x:"3 × 4 is repeated addition: 4 + 4 + 4." ,ex:{"q":"Write 4 × 3 as repeated addition.","steps":["Multiplying is repeated addition of the same number.","4 × 3 means add 3 four times.","3 + 3 + 3 + 3 = 12."],"a":"3 + 3 + 3 + 3 = 12."}},
    {t:"multiply", d:"to find how many in equal groups", x:"Multiply 5 by 6." ,ex:{"q":"Multiply 2 × 6.","steps":["To multiply means to find the product of two numbers.","2 × 6 means two groups of six.","6 + 6 = 12."],"a":"2 × 6 = 12."}},
    {t:"equal groups", d:"groups with the same number in each", x:"Make 3 equal groups of 4." ,ex:{"q":"12 sweets are shared equally among 3 children. How many does each child get?","steps":["Equal groups means every group has the same amount.","12 ÷ 3 means 12 split into 3 equal groups.","Count off threes: 3, 6, 9, 12 — that is 3 groups of 4."],"a":"Each child gets 4 sweets."}},
    {t:"tens column", d:"the column where tens are written", x:"Add the tens column last." ,ex:{"q":"In 73 + 25, which digits do you add in the tens column?","steps":["The tens column holds the tens of each number.","73 has 7 tens; 25 has 2 tens.","Add them in the tens column: 7 + 2 = 9."],"a":"7 and 2 (7 + 2 = 9 tens)."}}
  ],
  worked:[
    {q:"Add 47 + 38 using regrouping.",
     steps:["Ones: 7 + 8 = 15. Write 5 and carry 1 ten.","Tens: 4 + 3 + 1 (carried) = 8.","So the answer is 85."], a:"85"},
    {q:"Subtract 62 − 27 using regrouping.",
     steps:["Ones: 2 − 7 cannot be done, so borrow one ten. 12 − 7 = 5.","Tens: 5 (after borrowing) − 2 = 3.","So the answer is 35."], a:"35"}
  ],
  drillLabel:"Regrouping and simple multiplication",
  drills:[
    {id:"add", p:{min:15,max:89}},
    {id:"sub", p:{min:20,max:99}},
    {id:"mul", p:{aMin:2,aMax:9,bMin:2,bMax:9}},
    {id:"add_col", p:{digits:2,terms:3}},
    {id:"missing_addend", p:{max:99}}
  ],
  word:[
    {q:"A trader sold 48 oranges on Monday and 37 on Tuesday. How many altogether?", a:"48 + 37 = 85 oranges"},
    {q:"There were 73 mangoes and 29 were sold. How many are left?", a:"73 − 29 = 44 mangoes"},
    {q:"Jallah plants 6 rows with 7 cassava sticks in each row. How many sticks?", a:"6 × 7 = 42 sticks"},
    {q:"A school had 56 desks and bought 38 more. How many desks now?", a:"56 + 38 = 94 desks"},
    {q:"Fatu buys 4 packets with 8 pencils in each. How many pencils?", a:"4 × 8 = 32 pencils"}
  ],
  challenge:[
    {q:"Explain in your own words why we carry 1 to the tens column when the ones make 13.", a:"Because 13 ones is the same as 1 ten and 3 ones — the ten must move to the tens column."},
    {q:"Write 5 × 3 as a repeated addition and find the answer.", a:"3 + 3 + 3 + 3 + 3 = 15"},
    {q:"A number added to 46 gives 82. Find the number.", a:"82 − 46 = 36"}
  ],
  activities:["Discuss and illustrate regrouping of two-digit numbers in small groups","Subtract two-digit numerals using regrouping","Play multiplication games with one-digit numerals"],
  materials:["Elementary Mathematics for Liberia Book 2","Number counters, bundles of sticks","Wall charts"],
  assessment:["Class assignment and participation","Quiz","Test","Exam"]
},
{
  grade:2, period:"V", sem:"Two", icon:"⚖️",
  title:"Measurement",
  subtitle:"Length, weight, capacity, telling time and the value of local currency",
  outcomes:["Demonstrate skills in measuring length, weight and capacity","Use the clock to tell time","Determine the monetary value of local currencies"],
  objectives:["Describe weight and capacity","Measure lengths, weights and capacity using local units","Use standard units of measurement","Tell time for different times of the day","Determine the value of the currency in circulation"],
  note:"A <b>standard unit</b> is the same for everybody — the centimetre, metre, kilogram and litre. A <b>local unit</b> like a hand span changes from person to person, so it is less exact.",
  study:[
    /* ---- course text: Semester Two, Period V — Measurement (pages 18-19) ---- */
    {k:"h3", t:"Weight and Capacity"},
    {k:"p", t:"**Weight** is how heavy an object is; **capacity** is how much a container holds. We describe weight with words like *heavy* and *light*, and capacity with words like *full*, *half full* and *empty*."},
    {k:"p", t:"Balance a small sandbag against stones on a scale to compare weights, and fill bottles of different sizes to compare capacities."},
    {k:"rule"},
    {k:"h3", t:"Measuring Lengths and Heights"},
    {k:"p", t:"**Length** is how long something is and **height** is how tall something is. We can measure with **local units** such as arm spans, hand spans, paces and strings, then with a **tape line** or **ruler**."},
    {k:"num", items:["Measure your height with a tape line and record it.","Measure and compare the heights of boys and girls in the class.","Add the heights of two learners; subtract to find the difference."]},
    {k:"rule"},
    {k:"h3", t:"Standard Units of Measurement"},
    {k:"p", t:"**Standard units** mean the same thing to everyone. Length is measured in **inches, feet and yards** (English system) or **centimetres and metres** (metric system). Cut out an inch, a foot and a yard stick to feel the sizes."},
    {k:"bul", items:["**Inch** — the width of a thumb, used for small lengths.", "**Foot** — twelve inches, the length of a ruler.", "**Yard** — three feet, used for cloth and distance.", "**Centimetre and metre** — the metric measures used in school."]},
    {k:"rule"},
    {k:"h3", t:"Telling Time"},
    {k:"p", t:"The **clock** has two hands: the **hour hand** (short) and the **minute hand** (long). When the minute hand points to 12, we say *o'clock*: 7 o'clock, 9 o'clock, 12 o'clock."},
    {k:"p", t:"Use paper clocks to show different times of the day and describe the parts of the clock: the face, the numbers and the two hands."},
    {k:"rule"},
    {k:"h3", t:"The Value of Our Currency"},
    {k:"p", t:"Liberia's money is the **Liberian Dollar (L$)**. We identify the value of the **banknotes** in circulation: L$5, L$10, L$20, L$50, L$100, L$500 and L$1,000."},
    {k:"num", items:["Five L$20 notes make L$100.","Two L$50 notes make L$100.","One L$100 note and one L$50 note make L$150.","Identify each note by its colour, picture and number."]}
  ],
  focus:["Weight and capacity","Measuring length and height","Standard units","Telling time","Monetary value of currency"],
  terms:[
    {t:"standard unit", d:"a unit that is the same for everyone", x:"The metre is a standard unit." ,ex:{"q":"What is the standard unit for measuring the length of a desk?","steps":["Standard units are the metric units everyone agrees to use.","The standard units of length are the metre (m) and the centimetre (cm).","A desk is about 1 metre long, so the metre is the sensible standard unit."],"a":"The metre (m)."}},
    {t:"local unit", d:"a unit such as a hand span or footstep", x:"A hand span is a local unit." ,ex:{"q":"Your teacher says the cloth is “four arm-lengths” long. What kind of unit is an arm-length?","steps":["Local units are body parts or local measures, not standard.","An arm-length depends on the person who measures.","So an arm-length is a local (non-standard) unit."],"a":"An arm-length is a local unit."}},
    {t:"metre", d:"a standard unit of length", x:"The rope is 3 metres long." ,ex:{"q":"Which is longer: 1 metre or 100 centimetres?","steps":["A metre is the standard unit of length.","1 metre = 100 centimetres.","So the two lengths are the same."],"a":"They are equal: 1 m = 100 cm."}},
    {t:"centimetre", d:"one hundredth of a metre", x:"The pencil is 15 centimetres long." ,ex:{"q":"A pencil is 15 cm long and a pen is 10 cm long. How much longer is the pencil?","steps":["A centimetre (cm) is a small standard unit of length.","Subtract: 15 − 10 = 5.","The pencil is longer by 5 cm."],"a":"5 cm."}},
    {t:"kilogram", d:"a standard unit of weight", x:"The rice weighs 2 kilograms." ,ex:{"q":"A bag of rice weighs 5 kg and a bag of flour weighs 2 kg. What is the total weight?","steps":["A kilogram (kg) is the standard unit of weight.","Add the weights: 5 + 2 = 7.","Write the unit: 7 kg."],"a":"7 kg."}},
    {t:"litre", d:"a standard unit of capacity", x:"The bottle holds one litre." ,ex:{"q":"A jerrycan holds 5 litres of water. How many 1-litre bottles does it fill?","steps":["A litre (l) is the standard unit of capacity.","Each bottle holds 1 litre.","5 litres ÷ 1 litre = 5 bottles."],"a":"5 bottles."}},
    {t:"minute", d:"a unit of time; 60 make one hour", x:"Wait for five minutes." ,ex:{"q":"How many minutes are there in 2 hours?","steps":["A minute is the small unit of time; 1 hour = 60 minutes.","2 hours = 2 × 60 minutes.","2 × 60 = 120."],"a":"120 minutes."}},
    {t:"half past", d:"thirty minutes after the hour", x:"It is half past two." ,ex:{"q":"The long hand points at 6 and the short hand is just past 3. What time is it?","steps":["When the long hand points at 6, 30 minutes have passed.","“Half past” means 30 minutes after the hour.","The short hand is just past 3, so it is half past three."],"a":"Half past 3 (3:30)."}},
    {t:"currency", d:"the money used in a country", x:"The Liberian dollar is our currency." ,ex:{"q":"What is the name of the money used in Liberia?","steps":["Currency is the money used in a country.","The money used in Liberia is the Liberian dollar.","Its symbol is L$."],"a":"The Liberian dollar (L$)."}},
    {t:"height", d:"how tall something is", x:"Measure the height of the door." ,ex:{"q":"A palm tree is 6 m tall and a neem tree is 4 m tall. How much taller is the palm tree?","steps":["Height is how tall something is.","Subtract the shorter from the taller: 6 − 4 = 2.","The palm tree is taller by 2 m."],"a":"2 m taller."}}
  ],
  worked:[
    {q:"Change 3 metres to centimetres.",
     steps:["1 metre = 100 centimetres.","So 3 metres = 3 × 100.","3 × 100 = 300 centimetres."], a:"300 cm"},
    {q:"A lesson runs from 9:00 to 9:30. How long is it?",
     steps:["From 9:00 to 9:30 is 30 minutes.","30 minutes is half an hour."], a:"30 minutes (half an hour)"}
  ],
  drillLabel:"Measurement, time and money",
  drills:[
    {id:"convert_metric", p:{kinds:["m_cm","kg_g","l_ml"]}},
    {id:"tell_time"},
    {id:"convert_time", p:{kinds:["h_min","wk_d"]}},
    {id:"money_add"},
    {id:"money_change"}
  ],
  word:[
    {q:"A rope of 5 m is cut into pieces of 1 m each. How many pieces?", a:"5 pieces"},
    {q:"Korpo's bag of rice weighs 4 kg and Momo's weighs 7 kg. How much heavier is Momo's?", a:"7 − 4 = 3 kilograms"},
    {q:"A bucket holds 12 litres. If 5 litres are used, how much water remains?", a:"12 − 5 = 7 litres"},
    {q:"Boakai buys fish for L$120 and pays with L$200. How much change?", a:"200 − 120 = L$80"},
    {q:"School opens at 8:00 and the first break is at 10:30. How long until break?", a:"2 hours 30 minutes"}
  ],
  challenge:[
    {q:"Why is measuring with a ruler better than measuring with your hand span?", a:"Because a ruler uses standard units that are the same for everyone, while hand spans differ from person to person."},
    {q:"Change 2 kilograms into grams.", a:"2 × 1000 = 2000 grams"},
    {q:"Hawa has two L$100 notes and one L$50 note. How much money has she?", a:"100 + 100 + 50 = L$250"}
  ],
  activities:["Discuss weight and capacity","Measure lengths and balance weights using local units","Compare heights and weights of boys and girls","Use tape line and scale for measuring"],
  materials:["Elementary Mathematics for Liberia Book 2","Cut-out inch, foot, yard stick, strings","Bottles of different sizes","Clock, Liberian money"],
  assessment:["Practical measurement task","Observation","Quiz","Test"]
},
{
  grade:2, period:"VI", sem:"Two", icon:"1️⃣",
  title:"Ordinal Numbers and Geometry",
  subtitle:"Positions (1st, 2nd, 3rd …) and the properties of plane shapes",
  outcomes:["Distinguish between ordinal numbers and cardinal numbers","Recognise the shapes of a square, rectangle, triangle and circle"],
  objectives:["Use games to identify position (ordinals)","Identify and give simple properties of line segments, squares, rectangles, triangles, circles and quadrilaterals"],
  note:"A <b>cardinal number</b> tells how many (5 pupils). An <b>ordinal number</b> tells the position in a line (5th pupil). A <b>quadrilateral</b> is any flat shape with four straight sides.",
  study:[
    /* ---- course text: Semester Two, Period VI — Ordinal Numbers and Geometry (pages 20-21) ---- */
    {k:"h3", t:"Ordinal Numbers"},
    {k:"p", t:"**Ordinal numbers** tell the **position** of something in a line: first, second, third, fourth, fifth, sixth, and so on. They answer *which position?*, not *how many?* — that is what **cardinal numbers** (1, 2, 3, ...) answer."},
    {k:"p", t:"Form a line of ten learners. The learner at the front is **1st**, the next is **2nd**, then **3rd**, **4th**, **5th**, and so on to **10th**. Ask each learner where they stand in the line."},
    {k:"bul", items:["**1st** — first (the one at the front)", "**2nd** — second", "**3rd** — third", "**4th** — fourth", "**5th** — fifth", "**6th** — sixth, **7th** — seventh, **8th** — eighth, **9th** — ninth, **10th** — tenth"]},
    {k:"rule"},
    {k:"h3", t:"Line Segments"},
    {k:"p", t:"A **line segment** is a straight part of a line with **two end points**. The edge of your ruler, the side of a table and the edge of a page are line segments."},
    {k:"p", t:"A line segment has **length** — we can measure it. Draw line segments of different lengths with a straight edge and compare them."},
    {k:"rule"},
    {k:"h3", t:"Triangular and Rectangular Shapes"},
    {k:"p", t:"A **triangle** has 3 straight sides and 3 corners. A **rectangle** has 4 straight sides and 4 corners, with opposite sides equal. A **square** is a rectangle with 4 equal sides."},
    {k:"p", t:"Look around the classroom: the roof shape is a triangle, the door and window are rectangles, the chalkboard is a rectangle."},
    {k:"rule"},
    {k:"h3", t:"Circular Shapes"},
    {k:"p", t:"A **circle** is round, with no straight sides and no corners. Everything that is round like the rim of a cup or the face of a clock is circular in shape."},
    {k:"rule"},
    {k:"h3", t:"Quadrilaterals"},
    {k:"p", t:"A **quadrilateral** is any shape with **4 straight sides**. Squares, rectangles, and shapes with four sides of different lengths are all quadrilaterals. Their simple properties — number of sides and corners — can be told and compared."}
  ],
  focus:["Ordinal numbers 1st to 20th","Simple properties of line segments","Circular shapes","Triangular and rectangular shapes"],
  terms:[
    {t:"ordinal number", d:"a number showing position, such as 1st or 3rd", x:"An ordinal number shows who came first." ,ex:{"q":"Five girls stand in a line: Grace, Mary, Ruth, Joy, Lorna. What is Mary's position?","steps":["An ordinal number tells position: first, second, third …","Count from the front: Grace is 1st, Mary is 2nd.","Mary's position is written 2nd."],"a":"Mary is 2nd (second)."}},
    {t:"cardinal number", d:"a number showing how many", x:"A cardinal number tells the quantity." ,ex:{"q":"Count the eggs in the basket: 1, 2, 3, 4. What kind of number is the 4 here?","steps":["A cardinal number tells how many there are.","Counting the eggs gives 4 eggs.","4 tells the amount, so it is a cardinal number."],"a":"4 is a cardinal number (it tells how many)."}},
    {t:"position", d:"the place where something stands in order", x:"What is your position in the line?" ,ex:{"q":"In the number 638, what is the position of the digit 3?","steps":["Position tells where a digit stands: ones, tens, hundreds.","Reading from the right: 8 is ones, 3 is tens, 6 is hundreds.","The 3 stands in the tens position."],"a":"The digit 3 is in the tens position."}},
    {t:"line segment", d:"a straight path with two end points", x:"Draw a line segment with a ruler." ,ex:{"q":"A road runs straight from town A to town B. What is the road from A to B called in geometry?","steps":["A line segment is a straight line with two end points.","The road starts at A and ends at B.","It is written AB, with A and B as its end points."],"a":"It is the line segment AB."}},
    {t:"quadrilateral", d:"a flat shape with four straight sides", x:"A quadrilateral has four sides." ,ex:{"q":"Name a quadrilateral you see on a chalkboard.","steps":["A quadrilateral is a shape with four straight sides.","The chalkboard has four straight sides: top, bottom, left, right.","That is a rectangle — a kind of quadrilateral."],"a":"A rectangle (the chalkboard) is a quadrilateral."}},
    {t:"vertex", d:"a corner where two sides meet", x:"A triangle has three vertices." ,ex:{"q":"How many vertices does a triangle have?","steps":["A vertex is a corner where two sides meet.","A triangle's three sides meet at three corners.","Count the vertices: three."],"a":"A triangle has 3 vertices."}},
    {t:"square", d:"a shape with four equal sides and four right angles", x:"A square tile has equal sides." ,ex:{"q":"What is special about the sides of a square?","steps":["A square is a rectangle with all four sides equal.","Measure each side: all four are the same length.","It also has four right-angle corners."],"a":"All four sides of a square are equal."}},
    {t:"circle", d:"a round shape with no sides or corners", x:"Trace a circle round the tin." ,ex:{"q":"How many corners does a circle have?","steps":["A circle is a round flat shape.","Its edge is one curve with no corners.","So it has no corners and no straight sides."],"a":"A circle has 0 corners."}},
    {t:"triangle", d:"a shape with three straight sides", x:"A triangle has three sides." ,ex:{"q":"How many sides does a triangle have?","steps":["A triangle is a flat shape with three straight sides.","Count the sides: one, two, three.","It also has three corners (vertices)."],"a":"A triangle has 3 sides."}},
    {t:"property", d:"a fact that describes a shape", x:"One property of a square is equal sides." ,ex:{"q":"State one property of a square.","steps":["A property is a fact that describes a shape.","Every square has four equal sides.","It also has four right angles."],"a":"A square has four equal sides (and four right angles)."}}
  ],
  worked:[
    {q:"Ten pupils stand in a line. Musu is number 4 from the front. Write her position as an ordinal number.",
     steps:["Her counting position is 4.","The ordinal for 4 is 4th (fourth).","So Musu is 4th in the line."], a:"4th (fourth)"},
    {q:"How many sides and corners has a quadrilateral?",
     steps:["Quad means four.","A quadrilateral has 4 straight sides.","Each pair of sides meets at a corner, so 4 corners."], a:"4 sides and 4 corners"}
  ],
  drillLabel:"Ordinals and shapes",
  drills:[
    {id:"ordinal", p:{max:20}},
    {id:"shape_sides", p:{pool:[["triangle",3],["square",4],["rectangle",4],["pentagon",5],["quadrilateral",4],["hexagon",6]]}},
    {id:"name_shape"},
    {id:"count_on", p:{max:50,steps:[1,2]}}
  ],
  word:[
    {q:"Twelve pupils run a race. Sekou finishes just after the second pupil. What is his position?", a:"3rd (third)"},
    {q:"Name a shape in the classroom that has four equal sides.", a:"A square, e.g. a floor tile"},
    {q:"How many corners has a rectangle?", a:"4 corners"},
    {q:"Write the ordinal number for 11.", a:"11th (eleventh)"},
    {q:"A shape has no corners and no straight sides. Name it.", a:"A circle"}
  ],
  challenge:[
    {q:"Explain the difference between 'five pupils' and 'the fifth pupil'.", a:"'Five pupils' is a cardinal number showing how many; 'the fifth pupil' is an ordinal number showing position."},
    {q:"Is every square a quadrilateral? Is every quadrilateral a square? Explain.", a:"Every square is a quadrilateral because it has 4 sides; but not every quadrilateral is a square because its sides may not be equal."},
    {q:"In a line of 20 pupils, Fatu is 20th. Where does she stand?", a:"She is the last pupil in the line."}
  ],
  activities:["Form a line of 10 learners and name each position","Explain the meaning of ordinal numbers","Identify shapes on the wall chart","Draw and name plane shapes"],
  materials:["Elementary Mathematics for Liberia Book 2","Ordinal wall chart","Wall chart with geometric shapes"],
  assessment:["Game-based assessment","Drawing task","Quiz","Test"]
},

/* ================= GRADE 3 ================= */
{
  grade:3, period:"I", sem:"One", icon:"♻️",
  title:"Review of Operations; Sets and Numbers",
  subtitle:"Addition, subtraction, multiplication, fractions and geometry review",
  outcomes:["Demonstrate understanding of addition, subtraction and multiplication","Compare things using fractions","Relate geometric shapes and patterns to designs in the community"],
  objectives:["Add and subtract one and two digit numerals","Subtract two digit numerals using regrouping","Multiply one and two digit numerals","Identify symbols such as >, < or =","Name parts of a whole"],
  note:"The four <b>operations</b> are addition (+), subtraction (−), multiplication (×) and division (÷). Multiplication is a short way of doing <b>repeated addition</b>.",
  study:[
    /* ---- course text: Semester One, Period I — Review of Operations (pages 22-23) and Sets and Numbers (pages 24-25) ---- */
    {k:"h3", t:"Review: Addition"},
    {k:"p", t:"**Addition** puts numbers together. Add the ones first, then the tens, regrouping when a column makes 10 or more."},
    {k:"num", items:["Add one-digit numbers: 8 + 7 = 15.","Add two-digit numbers: 34 + 28. Ones: 4 + 8 = 12, write 2, carry 1. Tens: 3 + 2 + 1 = 6. Answer 62.","Work in groups to construct and add your own two-digit problems."]},
    {k:"rule"},
    {k:"h3", t:"Review: Subtraction"},
    {k:"p", t:"**Subtraction** takes away. Subtract the ones first, then the tens, regrouping when the ones are not enough."},
    {k:"num", items:["Subtract one-digit: 9 − 4 = 5.","Subtract two-digit: 52 − 28. Regroup one ten: 12 − 8 = 4; 4 − 2 = 2. Answer 24.","Construct and subtract your own two-digit problems in small groups."]},
    {k:"rule"},
    {k:"h3", t:"Review: Multiplication"},
    {k:"p", t:"**Multiplication** is repeated addition. 4 × 3 means 3 + 3 + 3 + 3 = 12. Multiply one-digit numbers, then two-digit numbers by one digit: 12 × 3 = 36."},
    {k:"rule"},
    {k:"h3", t:"Review: Fractions"},
    {k:"p", t:"A **fraction** is a part of a whole. Work together to **shade fractional parts of a circle**: 1/2 (one half), 1/3 (one third), 1/4 (one fourth). The shaded part names the fraction."},
    {k:"rule"},
    {k:"h3", t:"Review: Geometry Figures"},
    {k:"p", t:"**Geometric figures** are shapes. Identify and describe the triangle, the rectangle, the square and the circle, and find patterns of shapes in the designs of the community — in cloth, mats and buildings."},
    {k:"rule"},
    {k:"h3", t:"Mathematical Symbols: Greater Than, Less Than and Equal"},
    {k:"p", t:"The symbols compare two amounts: **=** means *is equal to*, **>** means *is greater than*, **<** means *is less than*."},
    {k:"bul", items:["9 = 9 — nine is equal to nine.", "12 > 7 — twelve is greater than seven.", "5 < 8 — five is less than eight."]},
    {k:"rule"},
    {k:"h3", t:"Sets and Their Properties"},
    {k:"p", t:"A **set** is a well-defined collection of things, and its members are its **elements**. Using population data — the members of a family — we can form sets and subsets: the set of all family members, the set of boys, the set of girls, the set of parents."},
    {k:"num", items:["Form two sets of boys of the same or different sizes.","Form two sets of girls of the same or different sizes.","Form sets of boys and girls together.","Compare the number of learners in two sets using <, > or =."]},
    {k:"rule"},
    {k:"h3", t:"Union and Intersection of Sets"},
    {k:"p", t:"The **union** of two sets is the new set formed by combining all their elements; union is like **addition**. The **intersection** is the set of elements common to both sets. Sets with **no common elements** are **disjoint**."},
    {k:"bul", items:["Union: Set A = {2, 4, 6}, Set B = {1, 3, 5}; A ∪ B = {1, 2, 3, 4, 5, 6}.","Intersection: Set C = {2, 3, 4}, Set D = {4, 5, 6}; C ∩ D = {4}.","Disjoint: {boys} and {girls} have no common elements."]},
    {k:"rule"},
    {k:"h3", t:"Subsets and the Universal Set"},
    {k:"p", t:"A **subset** is a set whose members all belong to a bigger set. The **universal set** is the big set that holds all the elements being talked about. The set of girls is a subset of the class; the class is a subset of the school."},
    {k:"rule"},
    {k:"h3", t:"Comparing and Ordering Fractions"},
    {k:"p", t:"Compare fractions using the symbols <, > and =. When the wholes are the same, the fraction with the **larger denominator** names **smaller** parts: 1/4 < 1/2, and 1/3 > 1/4."},
    {k:"table", head:["Compare","Answer","Reason"], rows:[["1/2 and 1/4","1/2 > 1/4","Halves are bigger than fourths"],["1/3 and 1/4","1/3 > 1/4","Thirds are bigger than fourths"],["2/3 and 2/3","2/3 = 2/3","The same fraction"]]}
  ],
  focus:["Addition","Subtraction with regrouping","Multiplication","Fractions","Geometry and symbols"],
  terms:[
    {t:"operation", d:"a way of working with numbers, such as + or ×", x:"Addition is one operation." ,ex:{"q":"Which operation finds how many altogether when you have 3 groups of 4?","steps":["An operation is a mathematical process: add, subtract, multiply or divide.","Putting groups together to find the total is addition: 4 + 4 + 4.","Or multiply: 3 × 4 = 12."],"a":"Addition (4 + 4 + 4 = 12) — or multiplication, 3 × 4 = 12."}},
    {t:"regrouping", d:"changing ten ones into one ten, or the reverse", x:"Use regrouping to subtract 52 − 27." ,ex:{"q":"Add 47 + 36 with regrouping.","steps":["Ones: 7 + 6 = 13 ones.","Regroup: 13 ones = 1 ten and 3 ones.","Tens: 4 + 3 + 1 = 8."],"a":"47 + 36 = 83."}},
    {t:"product", d:"the answer in multiplication", x:"The product of 6 and 7 is 42." ,ex:{"q":"Find the product of 3 and 4.","steps":["The product is the answer in multiplication.","Multiply: 3 × 4.","Count 3 fours: 4, 8, 12."],"a":"3 × 4 = 12."}},
    {t:"quotient", d:"the answer in division", x:"The quotient of 20 ÷ 4 is 5." ,ex:{"q":"Find the quotient of 20 ÷ 4.","steps":["The quotient is the answer in division.","Ask: 4 × what = 20?","4 × 5 = 20, so the quotient is 5."],"a":"20 ÷ 4 = 5."}},
    {t:"symbol", d:"a sign such as >, < or =", x:"Write the correct symbol in the box." ,ex:{"q":"Write the symbol for “add” and the symbol for “subtract”.","steps":["A symbol is a mark that stands for an operation.","The symbol for add is + (plus).","The symbol for subtract is − (minus)."],"a":"Add: +  ·  Subtract: −"}},
    {t:"fraction", d:"a number showing equal parts of a whole", x:"Three quarters is a fraction." ,ex:{"q":"An orange is cut into 2 equal parts. What fraction is one part?","steps":["A fraction is one part of a whole that has been divided equally.","The whole orange is divided into 2 equal parts.","One part out of the 2 is written 1/2."],"a":"One part is 1/2 of the orange."}},
    {t:"whole", d:"the complete thing before dividing", x:"The whole is cut into 4 parts." ,ex:{"q":"An apple is cut into 4 slices. Before it was cut, what was the apple called?","steps":["The whole is the complete thing before it is divided.","The apple was one complete apple.","After cutting, the 4 slices are the parts."],"a":"The apple is the whole."}},
    {t:"pattern", d:"an arrangement that repeats", x:"Find the pattern in the design." ,ex:{"q":"Continue the pattern: ●, ●, ○, ●, ●, ○, …  (what are the next two?)","steps":["A pattern is a repeating arrangement.","The group ●, ●, ○ repeats: two full dots, then one hollow dot.","After the last ○ the pattern starts again: ●, ●."],"a":"The next two are ●, ●."}},
    {t:"sum", d:"the answer in addition", x:"Find the sum of 45 and 38." ,ex:{"q":"Find the sum of 5 and 2.","steps":["The sum is the answer in addition.","Add: 5 + 2.","Count on from 5: six, seven."],"a":"The sum of 5 and 2 is 7."}},
    {t:"difference", d:"the answer in subtraction", x:"Find the difference between 90 and 47." ,ex:{"q":"Find the difference between 9 and 4.","steps":["The difference is the answer in subtraction.","Subtract the smaller from the bigger: 9 − 4.","Count back from 9: 8, 7, 6, 5."],"a":"9 − 4 = 5."}}
  ],
  worked:[
    {q:"Subtract 52 − 27 using regrouping.",
     steps:["Ones: 2 − 7 cannot be done. Borrow one ten: 12 − 7 = 5.","Tens: 4 (after borrowing) − 2 = 2.","Answer: 25."], a:"25"},
    {q:"Multiply 23 × 4.",
     steps:["Multiply the ones: 3 × 4 = 12. Write 2, carry 1.","Multiply the tens: 2 × 4 = 8, add the carried 1 = 9.","Answer: 92."], a:"92"}
  ],
  drillLabel:"Mixed review of the operations",
  drills:[
    {id:"add", p:{min:15,max:99}},
    {id:"sub", p:{min:20,max:99}},
    {id:"mul", p:{aMin:2,aMax:12,bMin:2,bMax:9}},
    {id:"mul_big", p:{aDigits:2,bDigits:1}},
    {id:"compare", p:{min:10,max:200}},
    {id:"frac_name", p:{dens:[2,3,4,6,8]}}
  ],
  word:[
    {q:"A farmer harvests 68 bunches of plantain and sells 39. How many are left?", a:"68 − 39 = 29 bunches"},
    {q:"Each row of a garden has 24 plants. How many plants are in 3 rows?", a:"24 × 3 = 72 plants"},
    {q:"Musu had 45 marbles, won 28 and lost 17. How many has she now?", a:"45 + 28 − 17 = 56 marbles"},
    {q:"An orange is cut into 8 equal parts. Kou eats 3 parts. What fraction is left?", a:"5/8"},
    {q:"Write the correct symbol: 76 ____ 67", a:"> (76 > 67)"}
  ],
  challenge:[
    {q:"Write 4 × 6 as a repeated addition, then find the answer.", a:"6 + 6 + 6 + 6 = 24"},
    {q:"A number multiplied by 5 gives 60. Find the number.", a:"60 ÷ 5 = 12"},
    {q:"Which is bigger, 3/4 or 2/4 of the same cake? Explain.", a:"3/4, because with the same denominator the bigger numerator means more parts."}
  ],
  activities:["Add and subtract one and two digit numerals","Construct two-digit problems in small groups","Multiply one and two digit numerals","Identify shapes in community designs"],
  materials:["Elementary Mathematics for Liberia Book 3","Counters, rocks, sticks, cut paper"],
  assessment:["Class assignment","Oral questions","Quiz","Test"]
},
{
  grade:3, period:"II", sem:"One", icon:"📊",
  title:"Numeration",
  subtitle:"Numbers to 1000, place value to thousands, expanded notation and unit fractions",
  outcomes:["Read and write numbers up to 1000","Show understanding of place value and appreciate the value of the Liberian dollar","Compare things based on their sizes"],
  objectives:["Read numerals up to 1000","Write numerals up to 1000","Recognise and write place value (ones, tens, hundreds, thousands)","Write three-digit numerals in expanded notation","Compare and order unit fractions such as 1/2, 1/3, 1/4"],
  note:"A <b>unit fraction</b> has 1 as its numerator. With unit fractions the <b>bigger the denominator, the smaller the part</b>: 1/2 &gt; 1/3 &gt; 1/4 &gt; 1/5.",
  study:[
    /* ---- course text: Semester One, Period II — Numeration (pages 26-27) ---- */
    {k:"h3", t:"Whole Numbers up to 1000"},
    {k:"p", t:"We can read and write **whole numbers up to 1000**. Read the hundreds, then the tens, then the ones: 452 is *four hundred fifty-two* and 900 is *nine hundred*."},
    {k:"p", t:"One thousand is written 1000 — it is ten hundreds. Read numbers to 1000 in pairs and report to the class."},
    {k:"rule"},
    {k:"h3", t:"Place Value: Ones, Tens, Hundreds and Thousands"},
    {k:"p", t:"**Place value** gives each digit a value according to its place. In a four-digit numeral, the places are **thousands, hundreds, tens and ones** from left to right."},
    {k:"table", head:["Numeral","Thousands","Hundreds","Tens","Ones"], rows:[["1,000","1","0","0","0"],["2,345","2","3","4","5"],["4,502","4","5","0","2"],["7,080","7","0","8","0"]]},
    {k:"p", t:"In 2,345 the digit 2 means 2 thousands (2,000), 3 means 3 hundreds (300), 4 means 4 tens (40) and 5 means 5 ones (5)."},
    {k:"rule"},
    {k:"h3", t:"Expanded Notation"},
    {k:"p", t:"**Expanded notation** writes a number as the sum of the values of its digits. Use three- or four-digit numerals to show it."},
    {k:"num", items:["Write 2,345 in expanded notation.","2,345 = 2,000 + 300 + 40 + 5.","Write 560 = 500 + 60 + 0.","Write 4,080 = 4,000 + 0 + 80 + 0."]},
    {k:"rule"},
    {k:"h3", t:"Unit Fractions in Order"},
    {k:"p", t:"A **unit fraction** has 1 as its numerator: 1/2, 1/3, 1/4, 1/5 ... The larger the denominator, the **smaller** each equal part is."},
    {k:"num", items:["Order 1/2, 1/3, 1/4 from largest to smallest.","Compare: the whole is divided into more parts, so each part is smaller.","Order: 1/2 > 1/3 > 1/4.","Smallest to largest: 1/4, 1/3, 1/2."]},
    {k:"p", t:"Use a chart of fractional parts of a whole to see that one half is larger than one third, which is larger than one fourth."}
  ],
  focus:["Whole numbers to 1000","Place value: ones, tens, hundreds, thousands","Expanded notation","Ordering unit fractions"],
  terms:[
    {t:"thousand", d:"ten hundreds", x:"One thousand is written 1000." ,ex:{"q":"How many hundreds make one thousand?","steps":["A thousand is a group of one thousand.","Count by hundreds: 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000.","There are 10 steps of a hundred."],"a":"10 hundreds make one thousand (10 × 100 = 1000)."}},
    {t:"unit fraction", d:"a fraction whose numerator is 1", x:"One third is a unit fraction." ,ex:{"q":"Cut a loaf of bread into 6 equal slices. What fraction is one slice?","steps":["A unit fraction has a numerator of 1.","The loaf (the whole) is cut into 6 equal slices.","One slice is 1 out of 6, written 1/6."],"a":"One slice is 1/6, a unit fraction."}},
    {t:"expanded notation", d:"a number shown as the sum of its place values", x:"Expanded notation of 472 is 400 + 70 + 2." ,ex:{"q":"Write 4,325 in expanded notation.","steps":["Expanded notation shows a number as the sum of its place values.","4,325 = 4 thousands, 3 hundreds, 2 tens, 5 ones.","4000 + 300 + 20 + 5."],"a":"4,325 = 4000 + 300 + 20 + 5."}},
    {t:"place value chart", d:"a chart showing ones, tens, hundreds and thousands", x:"Use a place value chart to check." ,ex:{"q":"Put the digits of 7,891 into a place value chart and state the value of the 8.","steps":["A place value chart has columns: thousands, hundreds, tens, ones.","7 → thousands, 8 → hundreds, 9 → tens, 1 → ones.","The 8 in the hundreds column is worth 800."],"a":"The 8 stands in the hundreds column: its value is 800."}},
    {t:"ascending", d:"going from smallest to biggest", x:"Arrange in ascending order." ,ex:{"q":"Write 9, 4, 15, 6 in ascending order.","steps":["Ascending means from smallest to biggest.","Find the smallest: 4, then 6, then 9, then 15.","Write them: 4, 6, 9, 15."],"a":"4, 6, 9, 15."}},
    {t:"descending", d:"going from biggest to smallest", x:"Arrange in descending order." ,ex:{"q":"Write 9, 4, 15, 6 in descending order.","steps":["Descending means from biggest to smallest.","Find the biggest: 15, then 9, then 6, then 4.","Write them: 15, 9, 6, 4."],"a":"15, 9, 6, 4."}},
    {t:"round", d:"to give an approximate value", x:"Round 478 to the nearest hundred." ,ex:{"q":"Round 47 to the nearest ten.","steps":["Rounding gives an approximate value to a stated place.","47 is between 40 and 50.","The ones digit is 7 (5 or more), so round up: 47 ≈ 50."],"a":"47 rounded to the nearest ten is 50."}},
    {t:"compare", d:"to decide which is bigger or smaller", x:"Compare 1/2 and 1/4." ,ex:{"q":"Compare 46 and 48. Write the correct sign.","steps":["To compare means to say which is bigger, smaller or equal.","Look at the tens: both are 4 tens.","Look at the ones: 6 < 8, so 46 is smaller than 48."],"a":"46 < 48."}},
    {t:"numerator", d:"the top number of a fraction", x:"The numerator of 1/5 is 1." ,ex:{"q":"In the fraction 3/4, which number is the numerator?","steps":["The numerator is the top number of a fraction.","In 3/4, the number on top is 3.","The numerator counts how many parts we have."],"a":"The numerator is 3."}},
    {t:"denominator", d:"the bottom number of a fraction", x:"The denominator of 1/5 is 5." ,ex:{"q":"In the fraction 3/4, which number is the denominator?","steps":["The denominator is the bottom number of a fraction.","In 3/4, the number at the bottom is 4.","The denominator counts how many equal parts the whole is cut into."],"a":"The denominator is 4."}}
  ],
  worked:[
    {q:"Write 758 in expanded notation.",
     steps:["7 hundreds = 700.","5 tens = 50.","8 ones = 8.","So 758 = 700 + 50 + 8."], a:"700 + 50 + 8"},
    {q:"Which is greater, 1/3 or 1/5?",
     steps:["Both are unit fractions with numerator 1.","The smaller the denominator, the bigger the part.","3 is smaller than 5, so 1/3 is greater."], a:"1/3 is greater"}
  ],
  drillLabel:"Numbers to 1000 and unit fractions",
  drills:[
    {id:"place_value", p:{digits:3}},
    {id:"expanded", p:{digits:3}},
    {id:"numword", p:{min:100,max:999}},
    {id:"round_num", p:{to:10,max:999}},
    {id:"order_nums", p:{min:100,max:1000}},
    {id:"frac_compare", p:{dens:[2,3,4,5,6,8]}}
  ],
  word:[
    {q:"Write nine hundred and forty-two in figures.", a:"942"},
    {q:"What is the place value of 6 in 1652?", a:"600"},
    {q:"Arrange in ascending order: 507, 705, 570.", a:"507, 570, 705"},
    {q:"Round 386 to the nearest ten.", a:"390"},
    {q:"Which is smaller, 1/4 or 1/6 of the same bread?", a:"1/6"}
  ],
  challenge:[
    {q:"Write the largest and smallest three-digit numbers using the digits 3, 0 and 8 once each.", a:"Largest 830; smallest 308"},
    {q:"Arrange these unit fractions in order from biggest to smallest: 1/2, 1/8, 1/4, 1/3.", a:"1/2, 1/3, 1/4, 1/8"},
    {q:"A number is 300 more than 645. What is it?", a:"945"}
  ],
  activities:["Read and write numbers up to 1000 in pairs and report to the class","Identify and write place values","Use three or four digit numerals to show expanded notation","Compare and order unit fractions"],
  materials:["Elementary Mathematics for Liberia Book 3","Rocks and stone counters","Place value chart and strips","Chart showing fractional parts"],
  assessment:["Written exercise","Oral reporting","Quiz","Test"]
},
{
  grade:3, period:"III", sem:"One", icon:"✖️",
  title:"Operation of Whole Numbers; Properties of Numbers",
  subtitle:"Four operations, open sentences, and the commutative, associative and distributive properties",
  outcomes:["Apply computational skills to solve addition, subtraction, multiplication and division in real life","Apply commutative and associative properties","Recognise zero as the identity of addition and one as the identity of multiplication"],
  objectives:["Demonstrate the basic combination of the four operations","Solve simple open sentence problems with one variable","Apply the commutative and associative properties","Apply the distributive property of multiplication over addition","Perform multiplication with factors less than 100"],
  note:"<b>Commutative:</b> 3 + 5 = 5 + 3 and 3 × 5 = 5 × 3. <b>Associative:</b> (2+3)+4 = 2+(3+4). <b>Distributive:</b> 4 × (2+3) = (4×2) + (4×3). <b>Identity:</b> n + 0 = n and n × 1 = n.",
  study:[
    /* ---- course text: Semester One, Period III — Operation of Whole Numbers (pages 28-29) and Structure and Properties of Numbers (pages 30-31) ---- */
    {k:"h3", t:"Adding and Subtracting Whole Numbers"},
    {k:"p", t:"Add and subtract whole numbers with 1 to 4 digits, **renaming** (regrouping) as ones, tens and hundreds."},
    {k:"num", items:["Add 3 or more digits: 2,356 + 1,478. Ones 6+8=14, write 4 carry 1; tens 5+7+1=13, write 3 carry 1; hundreds 3+4+1=8; thousands 2+1=3. Answer 3,834.","Subtract with renaming: 4,000 − 1,256 = 2,744."]},
    {k:"rule"},
    {k:"h3", t:"Multiplying Whole Numbers"},
    {k:"p", t:"Multiply **2 to 4-digit numbers by 1 or 2-digit whole numbers**, multiplying from the ones place and carrying."},
    {k:"num", items:["Multiply 1,234 × 4.","4 × 4 = 16, write 6 carry 1; 4 × 3 + 1 = 13, write 3 carry 1; 4 × 2 + 1 = 9; 4 × 1 = 4.","1,234 × 4 = 4,936."]},
    {k:"rule"},
    {k:"h3", t:"Dividing Whole Numbers"},
    {k:"p", t:"**Division** shares a number into equal groups. Divide one to three-digit whole numbers by one to two-digit whole numbers. 36 ÷ 6 = 6 because 6 × 6 = 36."},
    {k:"p", t:"Solve word problems using all four operations: add, subtract, multiply and divide. Decide which operation the story needs, then work it and check."},
    {k:"rule"},
    {k:"h3", t:"Open Sentences with One Variable"},
    {k:"p", t:"An **open sentence** is a number sentence with a missing value, such as □ + 5 = 12 or 20 − □ = 9. Find the missing number by using the number facts."},
    {k:"num", items:["□ + 5 = 12 → what plus 5 gives 12? □ = 7.","20 − □ = 9 → 20 − 9 = 11, so □ = 11.","3 × □ = 24 → □ = 8.","□ ÷ 4 = 6 → □ = 24."]},
    {k:"rule"},
    {k:"h3", t:"The Commutative Property"},
    {k:"p", t:"The **commutative property** says the order of the numbers does not change the answer. It works for addition and multiplication: 3 + 5 = 5 + 3 and 4 × 6 = 6 × 4."},
    {k:"rule"},
    {k:"h3", t:"The Associative Property"},
    {k:"p", t:"The **associative property** says the way we **group** the numbers does not change the answer: (2 + 3) + 4 = 2 + (3 + 4) = 9, and (2 × 3) × 4 = 2 × (3 × 4) = 24."},
    {k:"rule"},
    {k:"h3", t:"The Distributive Property"},
    {k:"p", t:"The **distributive property** spreads multiplication over addition or subtraction: multiply each part, then add or subtract. 3 × (4 + 5) = 3 × 4 + 3 × 5 = 12 + 15 = 27, and 3 × (9 − 2) = 3 × 9 − 3 × 2 = 27 − 6 = 21."},
    {k:"rule"},
    {k:"h3", t:"Properties of Zero and One"},
    {k:"p", t:"**Zero** is the **identity element of addition**: adding 0 leaves a number unchanged, 7 + 0 = 7, and any number minus itself is 0. **One** is the **identity element of multiplication**: multiplying by 1 leaves a number unchanged, 8 × 1 = 8."},
    {k:"rule"},
    {k:"h3", t:"The Closure Property"},
    {k:"p", t:"The **closure property** of whole numbers says that when we add or multiply two whole numbers, the answer is always a whole number: 6 + 9 = 15 and 7 × 8 = 56 are both whole numbers."},
    {k:"rule"},
    {k:"h3", t:"Multiplying with Factors Less Than 100"},
    {k:"p", t:"Practise multiplying factors less than 100 using the properties above, so the products come quickly and correctly."}
  ],
  focus:["Addition and subtraction of 1–4 digit numbers","Multiplication of 2–4 digit by 1–2 digit","Division","Open sentences","Commutative, associative, distributive and identity properties"],
  terms:[
    {t:"commutative", d:"the order can be changed without changing the answer", x:"Addition is commutative: 3 + 4 = 4 + 3." ,ex:{"q":"Show that 6 + 7 = 7 + 6 using the commutative property.","steps":["The commutative property says changing the order does not change the answer.","6 + 7 = 13.","7 + 6 = 13, the same answer."],"a":"6 + 7 = 7 + 6 = 13."}},
    {t:"associative", d:"the grouping can be changed without changing the answer", x:"The associative property groups numbers differently." ,ex:{"q":"Show that (2 + 3) + 4 = 2 + (3 + 4) using the associative property.","steps":["The associative property says changing the grouping does not change the answer.","(2 + 3) + 4 = 5 + 4 = 9.","2 + (3 + 4) = 2 + 7 = 9, the same answer."],"a":"(2 + 3) + 4 = 2 + (3 + 4) = 9."}},
    {t:"distributive", d:"multiplying a sum is the same as multiplying each part", x:"Use the distributive property to expand." ,ex:{"q":"Use the distributive property to work out 4 × 12.","steps":["The distributive property: a × (b + c) = (a × b) + (a × c).","Split 12 into 10 + 2:  4 × (10 + 2).","4 × 10 = 40 and 4 × 2 = 8; add: 40 + 8 = 48."],"a":"4 × 12 = 48."}},
    {t:"identity element", d:"the number that leaves another unchanged", x:"Zero is the identity element of addition." ,ex:{"q":"What number added to 9 leaves 9 unchanged?","steps":["An identity element is a number that leaves others unchanged.","For addition, the identity element is 0.","9 + 0 = 9."],"a":"0 (because 9 + 0 = 9)."}},
    {t:"open sentence", d:"a number sentence with a missing number", x:"n + 5 = 12 is an open sentence." ,ex:{"q":"Find the missing number:  12 − ___ = 5.","steps":["An open sentence is a number sentence with a missing number.","Ask: 12 − what = 5?","12 − 7 = 5, so the missing number is 7."],"a":"12 − 7 = 5; the missing number is 7."}},
    {t:"variable", d:"a letter standing for an unknown number", x:"The variable n stands for the missing number." ,ex:{"q":"In the sentence n + 3 = 8, what is n and what is its value?","steps":["A variable is a letter that stands for a missing number.","n + 3 = 8, so n = 8 − 3.","8 − 3 = 5, so n = 5."],"a":"n is the variable; n = 5."}},
    {t:"dividend", d:"the number being divided", x:"In 24 ÷ 6, the dividend is 24." ,ex:{"q":"In 24 ÷ 6 = 4, which number is the dividend?","steps":["In division, the dividend is the number being divided.","The number being divided is 24.","6 is the divisor and 4 is the quotient."],"a":"The dividend is 24."}},
    {t:"divisor", d:"the number you divide by", x:"In 24 ÷ 6, the divisor is 6." ,ex:{"q":"In 24 ÷ 6 = 4, which number is the divisor?","steps":["The divisor is the number we divide by.","We are dividing by 6.","24 is the dividend and 4 is the quotient."],"a":"The divisor is 6."}},
    {t:"quotient", d:"the answer in division", x:"The quotient is 4." ,ex:{"q":"Find the quotient of 20 ÷ 4.","steps":["The quotient is the answer in division.","Ask: 4 × what = 20?","4 × 5 = 20, so the quotient is 5."],"a":"20 ÷ 4 = 5."}},
    {t:"remainder", d:"what is left over after dividing", x:"25 ÷ 4 gives 6 remainder 1." ,ex:{"q":"Divide 17 by 5. What is the remainder?","steps":["The remainder is what is left over after dividing.","5 × 3 = 15, and 5 × 4 = 20 is too big, so 17 ÷ 5 = 3 with something left.","17 − 15 = 2 is left over."],"a":"17 ÷ 5 = 3 remainder 2."}}
  ],
  worked:[
    {q:"Use the distributive property: 6 × (10 + 3).",
     steps:["Multiply each part: 6 × 10 = 60.","6 × 3 = 18.","Add the two products: 60 + 18 = 78."], a:"78"},
    {q:"Solve the open sentence: n + 17 = 45.",
     steps:["To find n, subtract 17 from both sides.","n = 45 − 17.","n = 28."], a:"n = 28"}
  ],
  drillLabel:"Whole number operations and properties",
  drills:[
    {id:"add_col", p:{digits:3,terms:2}},
    {id:"sub_col", p:{digits:3}},
    {id:"mul_big", p:{aDigits:2,bDigits:1}},
    {id:"div", p:{dMin:2,dMax:9,qMin:2,qMax:20}},
    {id:"property_fill"},
    {id:"open_sentence", p:{max:20}}
  ],
  word:[
    {q:"A school has 348 pupils in the morning shift and 275 in the afternoon. How many pupils in all?", a:"348 + 275 = 623 pupils"},
    {q:"96 exercise books are shared equally among 8 pupils. How many does each get?", a:"96 ÷ 8 = 12 books"},
    {q:"A trader buys 7 bags with 45 oranges in each. How many oranges?", a:"7 × 45 = 315 oranges"},
    {q:"A tank holds 500 litres. If 268 litres are used, how much remains?", a:"500 − 268 = 232 litres"},
    {q:"A number times 6 gives 54. Write the open sentence and solve it.", a:"6 × n = 54, so n = 9"}
  ],
  challenge:[
    {q:"Show that 8 × (5 + 2) gives the same answer as (8 × 5) + (8 × 2).", a:"8 × 7 = 56 and 40 + 16 = 56 — the distributive property holds."},
    {q:"Why is 1 called the identity element of multiplication?", a:"Because any number multiplied by 1 stays the same, e.g. 27 × 1 = 27."},
    {q:"A number divided by 7 gives 12 remainder 3. What is the number?", a:"7 × 12 + 3 = 87"}
  ],
  activities:["Add three-digit numbers with renaming","Solve word problems with all four operations","State and apply the commutative and associative properties","Apply the distributive property"],
  materials:["Elementary Mathematics for Liberia Book 3","Sticks, stones, oranges as counters","Teacher-made materials"],
  assessment:["Class assignment","Quiz","Test","Exam"]
},
{
  grade:3, period:"IV", sem:"Two", icon:"🍕",
  title:"Fractions",
  subtitle:"Naming, comparing, equivalent fractions and adding and subtracting like fractions",
  outcomes:["Demonstrate and appreciate fractional parts of whole numbers in real life","Distinguish the monetary value of currency by denomination"],
  objectives:["Identify parts of a whole and its shaded parts","Name each fractional part","Change a given fraction to equivalent ones","Solve addition of fractions","Multiply a fraction by a whole number","Use >, < or = to make a sentence true"],
  note:"<b>Equivalent fractions</b> name the same amount: 1/2 = 2/4 = 3/6. To make an equivalent fraction, multiply the numerator and denominator by the <b>same number</b>.",
  study:[
    /* ---- course text: Semester Two, Period IV — Fractions (pages 32-33) ---- */
    {k:"h3", t:"Parts of a Whole"},
    {k:"p", t:"A **fraction** names **parts of a whole**. The **numerator** (top number) tells how many parts are taken, and the **denominator** (bottom number) tells how many equal parts the whole was divided into."},
    {k:"p", t:"Look at a poster or chalkboard drawing of wholes, halves, thirds and fourths. Identify and count the divided parts, then **name each fractional part**."},
    {k:"rule"},
    {k:"h3", t:"Shaded Parts and Number Lines"},
    {k:"p", t:"**Worked example — one fourth:** divide a rectangle into 4 equal parts and shade one part. The shaded part is **1/4** (one fourth)."},
    {k:"num", items:["Divide the rectangle into 4 parts.","Shade 1 of the 4 parts.","Name the shaded part: one-fourth (1/4).","Use a number line to show fractions: 1/2 lies halfway between 0 and 1, 1/3 one third of the way, 1/4 one quarter of the way."]},
    {k:"rule"},
    {k:"h3", t:"Equivalent Fractions"},
    {k:"p", t:"**Equivalent fractions** name the same amount with different denominators: 1/2 = 2/4 = 3/6. Multiply (or divide) the numerator and denominator by the same number to change a fraction into an equivalent one."},
    {k:"bul", items:["1/2 = 2/4 = 4/8", "1/3 = 2/6 = 3/9", "2/4 = 1/2", "4/8 = 1/2"]},
    {k:"rule"},
    {k:"h3", t:"Comparing Fractions"},
    {k:"p", t:"Use **>, < or =** to make a sentence true. With the same whole, the fraction with more parts of the same size is greater."},
    {k:"bul", items:["1/2 > 1/4 — a half is bigger than a fourth.", "1/3 < 1/2 — a third is smaller than a half.", "2/4 = 1/2 — equivalent fractions are equal."]},
    {k:"rule"},
    {k:"h3", t:"Adding and Subtracting Like Fractions"},
    {k:"p", t:"To add or subtract fractions with the **same denominator**, add or subtract only the numerators; the denominator stays the same."},
    {k:"num", items:["Add: 2/5 + 1/5 = 3/5.","Subtract: 4/7 − 1/7 = 3/7.","Add three like fractions: 1/8 + 2/8 + 3/8 = 6/8."]},
    {k:"rule"},
    {k:"h3", t:"Mixed Fractions"},
    {k:"p", t:"A **mixed fraction** (mixed number) is a whole number together with a fraction, such as 2 1/2 (two and a half) or 1 3/4 (one and three quarters). We meet mixed numbers in measuring cloth, rice and time."},
    {k:"rule"},
    {k:"h3", t:"Multiplying a Whole Number by a Fraction"},
    {k:"p", t:"To multiply a whole number by a fraction, multiply the whole number by the **numerator** and keep the denominator: 3 × 1/4 = 3/4, and 2 × 3/5 = 6/5 = 1 1/5. Show the two parts — numerator and denominator — in the working."}
  ],
  focus:["Definition of a fraction","Comparison of fractions","Equivalent fractions","Adding and subtracting like fractions","Mixed fractions","Multiplying a whole number by a fraction"],
  terms:[
    {t:"equivalent fractions", d:"different fractions naming the same amount", x:"1/2 and 2/4 are equivalent fractions." ,ex:{"q":"Show that 1/2 and 2/4 are equivalent fractions.","steps":["Equivalent fractions name the same part of a whole.","Multiply the top and bottom of 1/2 by 2:  (1 × 2)/(2 × 2) = 2/4.","Shade half of two different pictures: the same amount is shaded."],"a":"1/2 = 2/4 — they are equivalent fractions."}},
    {t:"like fractions", d:"fractions with the same denominator", x:"3/8 and 5/8 are like fractions." ,ex:{"q":"Are 2/5 and 3/5 like fractions?","steps":["Like fractions have the same denominator.","Both fractions have denominator 5.","So they are like fractions."],"a":"Yes — both have denominator 5."}},
    {t:"unlike fractions", d:"fractions with different denominators", x:"1/2 and 1/3 are unlike fractions." ,ex:{"q":"Are 1/2 and 1/3 unlike fractions? Give your reason.","steps":["Unlike fractions have different denominators.","One has denominator 2, the other has denominator 3.","The denominators differ, so they are unlike fractions."],"a":"Yes — 2 and 3 are different denominators."}},
    {t:"mixed number", d:"a whole number together with a fraction", x:"2 1/2 is a mixed number." ,ex:{"q":"Write 7/3 as a mixed number.","steps":["A mixed number is a whole number together with a fraction.","Divide: 7 ÷ 3 = 2 remainder 1.","So 7/3 = 2 wholes and 1/3."],"a":"7/3 = 2 1/3."}},
    {t:"proper fraction", d:"a fraction less than one whole", x:"3/4 is a proper fraction." ,ex:{"q":"Is 3/5 a proper fraction? Give your reason.","steps":["A proper fraction has a numerator smaller than the denominator.","Here 3 < 5.","So 3/5 is a proper fraction."],"a":"Yes — 3 < 5, so it is a proper fraction."}},
    {t:"improper fraction", d:"a fraction where the top is bigger than the bottom", x:"7/4 is an improper fraction." ,ex:{"q":"Is 7/4 an improper fraction? Give your reason.","steps":["An improper fraction has a numerator bigger than the denominator.","Here 7 > 4.","So 7/4 is an improper fraction."],"a":"Yes — 7 > 4, so it is an improper fraction."}},
    {t:"lowest terms", d:"a fraction reduced as far as possible", x:"4/8 in lowest terms is 1/2." ,ex:{"q":"Write 6/8 in its lowest terms.","steps":["Lowest terms means the smallest numbers that give the same fraction.","The greatest number that divides both 6 and 8 is 2.","Divide top and bottom by 2:  (6 ÷ 2)/(8 ÷ 2) = 3/4."],"a":"6/8 = 3/4."}},
    {t:"shaded part", d:"the coloured portion of a shape", x:"Write the fraction for the shaded part." ,ex:{"q":"A bar is cut into 8 equal parts and 5 are shaded. Write the shaded part as a fraction.","steps":["The shaded part is written as a fraction: parts shaded over parts total.","Total parts: 8 (the denominator).","Shaded parts: 5 (the numerator)."],"a":"The shaded part is 5/8."}},
    {t:"numerator", d:"the top number of a fraction", x:"The numerator counts the parts taken." ,ex:{"q":"In the fraction 3/4, which number is the numerator?","steps":["The numerator is the top number of a fraction.","In 3/4, the number on top is 3.","The numerator counts how many parts we have."],"a":"The numerator is 3."}},
    {t:"denominator", d:"the bottom number of a fraction", x:"The denominator shows the equal parts." ,ex:{"q":"In the fraction 3/4, which number is the denominator?","steps":["The denominator is the bottom number of a fraction.","In 3/4, the number at the bottom is 4.","The denominator counts how many equal parts the whole is cut into."],"a":"The denominator is 4."}}
  ],
  worked:[
    {q:"Add 3/8 + 2/8.",
     steps:["The denominators are the same (like fractions).","Add the numerators only: 3 + 2 = 5.","Keep the denominator: 5/8."], a:"5/8"},
    {q:"Write a fraction equivalent to 2/3 with denominator 12.",
     steps:["12 ÷ 3 = 4, so multiply top and bottom by 4.","2 × 4 = 8 and 3 × 4 = 12.","So 2/3 = 8/12."], a:"8/12"}
  ],
  drillLabel:"Fractions",
  drills:[
    {id:"frac_add_like", p:{dens:[4,5,6,8,10,12]}},
    {id:"frac_sub_like", p:{dens:[4,5,6,8,10,12]}},
    {id:"frac_equiv", p:{dens:[2,3,4,5]}},
    {id:"frac_compare", p:{dens:[2,3,4,5,6,8]}},
    {id:"frac_simplify", p:{dens:[4,6,8,9,10,12]}},
    {id:"frac_mul_whole", p:{dens:[2,3,4,5,6]}}
  ],
  word:[
    {q:"A cake is cut into 6 equal parts. Musu eats 2 and Varney eats 3. What fraction is eaten?", a:"2/6 + 3/6 = 5/6"},
    {q:"Kou has 3/4 of a loaf and eats 1/4. What fraction is left?", a:"3/4 − 1/4 = 2/4 = 1/2"},
    {q:"Find 1/3 of 24 mangoes.", a:"24 ÷ 3 = 8 mangoes"},
    {q:"Write 6/8 in its lowest terms.", a:"3/4"},
    {q:"Which is greater, 2/3 or 3/4?", a:"3/4 (because 8/12 < 9/12)"}
  ],
  challenge:[
    {q:"Show two fractions that are equivalent to 1/2.", a:"Any correct pair, e.g. 2/4 and 5/10"},
    {q:"Musu says 1/3 + 1/3 = 2/6. Is she right? Explain.", a:"No. With like fractions you add only the numerators: 1/3 + 1/3 = 2/3."},
    {q:"A farm is divided into 10 equal plots. 4 are planted with rice and 3 with cassava. What fraction is unplanted?", a:"10/10 − 7/10 = 3/10"}
  ],
  activities:["Display posters of wholes, halves, thirds and fourths","Divide a rectangle into 4 parts and shade one-fourth","Name fractional parts after dividing shapes","Use number lines to show fractions"],
  materials:["Elementary Mathematics for Liberia Book 3","Rulers, geometry set","Orange, pawpaw and local materials"],
  assessment:["Written exercise","Practical shading task","Quiz","Test"]
},
{
  grade:3, period:"V", sem:"Two", icon:"📐",
  title:"Measurement",
  subtitle:"English and metric systems, time, money, perimeter, area and volume",
  outcomes:["Distinguish the English system from the metric system and do simple calculations","Demonstrate the four operations when dealing with money"],
  objectives:["Recognise and use standard units in English and metric systems","Measure the length of objects","Compare height with a bar graph","Compare and calculate perimeter, area and volume","Tell time and add and subtract units of time"],
  note:"<b>Perimeter</b> is the distance all the way round a shape (add all the sides). <b>Area</b> is the amount of surface covered, measured in square units. For a rectangle: <b>Area = length × width</b>.",
  study:[
    /* ---- course text: Semester One, Period V — Measurement (pages 34-35) ---- */
    {k:"h3", t:"The English and Metric Systems"},
    {k:"p", t:"We measure with two systems. The **English system** uses inches, feet, yards, ounces, pounds, cups, pints, quarts and gallons. The **metric system** uses centimetres, metres, kilometres, grams, kilograms, millilitres and litres."},
    {k:"table", head:["What we measure","English units","Metric units"], rows:[["Length","inch, foot, yard","centimetre, metre, kilometre"],["Weight","ounce, pound","gram, kilogram"],["Capacity","cup, pint, quart, gallon","millilitre, litre"]]},
    {k:"rule"},
    {k:"h3", t:"Measuring Length, Capacity, Weight and Height"},
    {k:"p", t:"Measure the length of objects with a ruler or tape, the capacity of containers by filling them, the weight of objects on a scale, and the height of learners against a wall or chart. Record every measurement."},
    {k:"rule"},
    {k:"h3", t:"Comparing Heights with a Bar Graph"},
    {k:"p", t:"A **bar graph** shows numbers as bars of different heights. Measure the heights of the learners, then draw a bar for each learner so the bars can be compared at a glance."},
    {k:"rule"},
    {k:"h3", t:"Perimeter, Area and Volume"},
    {k:"p", t:"**Perimeter** is the distance all around a shape: add the lengths of all the sides. **Area** is the amount of surface inside a shape. **Volume** is the space inside a solid. We can **compare and calculate** all three using the basic operations."},
    {k:"num", items:["Perimeter of a rectangle 5 m by 3 m: 5 + 3 + 5 + 3 = 16 m.","Area of a square of side 4 m: 4 × 4 = 16 m².","Volume of a box 3 m × 2 m × 1 m: 3 × 2 × 1 = 6 m³."]},
    {k:"rule"},
    {k:"h3", t:"Telling Time and Working with Time"},
    {k:"p", t:"Use the clock to tell time with the **minute hand** and the **hour hand**. We can add and subtract units of time: if school begins at 8 o'clock and ends at 3 o'clock, the school day is 7 hours."},
    {k:"bul", items:["60 seconds = 1 minute", "60 minutes = 1 hour", "24 hours = 1 day", "7 days = 1 week"]},
    {k:"rule"},
    {k:"h3", t:"Working with Money"},
    {k:"p", t:"We add, subtract, multiply and divide amounts of **Liberian money** (L$)."}, 
    {k:"num", items:["Add: L$25 + L$35 = L$60.","Subtract: L$100 − L$45 = L$55.","Multiply: 3 bags of rice at L$200 each = L$600.","Divide: L$120 shared equally among 4 people = L$30 each."]}
  ],
  focus:["Length, capacity, weight and height in both systems","Units of time and money","Perimeter, area and volume","Bar graphs of height"],
  terms:[
    {t:"perimeter", d:"the distance all round a shape", x:"Find the perimeter of the room." ,ex:{"q":"Find the perimeter of a rectangle 6 cm by 4 cm.","steps":["The perimeter is the distance all the way round a shape.","Add all four sides: 6 + 4 + 6 + 4.","6 + 4 + 6 + 4 = 20."],"a":"The perimeter is 20 cm."}},
    {t:"area", d:"the amount of surface a shape covers", x:"The area is measured in square centimetres." ,ex:{"q":"Find the area of a rectangle 5 cm by 3 cm.","steps":["The area is how many square units cover a flat shape.","Area = length × width:  5 × 3.","5 × 3 = 15."],"a":"The area is 15 cm²."}},
    {t:"volume", d:"the space inside a solid object", x:"Find the volume of the box." ,ex:{"q":"A box is 4 cm long, 3 cm wide and 2 cm high. Find its volume.","steps":["The volume is how much space a solid fills.","Volume = length × width × height:  4 × 3 × 2.","4 × 3 = 12, and 12 × 2 = 24."],"a":"The volume is 24 cm³."}},
    {t:"metric system", d:"the system using metres, grams and litres", x:"The metric system counts in tens." ,ex:{"q":"Which metric unit do you use for weighing a bag of rice: the gram, the kilogram or the litre?","steps":["The metric system is the standard system of measurement.","Weight (mass) is measured in grams (g) and kilograms (kg); the litre measures capacity.","A bag of rice weighs several kilograms."],"a":"The kilogram (kg)."}},
    {t:"English system", d:"the system using inches, feet, pounds and gallons", x:"The English system uses feet and inches." ,ex:{"q":"Which system of measurement uses the inch and the foot for length?","steps":["The English (customary) system uses inches, feet, yards and miles.","The inch and the foot belong to the English system.","The metric system uses the centimetre and the metre."],"a":"The English system."}},
    {t:"square unit", d:"the unit used for area, such as cm²", x:"Area is written in square units." ,ex:{"q":"Count how many 1 cm × 1 cm squares cover a rectangle 4 cm by 2 cm.","steps":["A square unit is a 1-by-1 square used to measure area.","Along the length there are 4 squares; along the width there are 2.","Rows of squares: 4 × 2 = 8."],"a":"8 square centimetres (8 cm²)."}},
    {t:"quart", d:"a unit of capacity in the English system", x:"Four quarts make a gallon." ,ex:{"q":"One litre is about 1.06 quarts. About how many quarts is 2 litres?","steps":["A quart is an English unit of capacity.","1 litre ≈ 1.06 quarts.","2 litres ≈ 1.06 + 1.06 = 2.12 quarts."],"a":"About 2.12 quarts."}},
    {t:"yard", d:"a length of three feet", x:"A yard is three feet long." ,ex:{"q":"How many feet are in 3 yards?","steps":["A yard is an English unit of length.","1 yard = 3 feet.","3 yards = 3 × 3 = 9 feet."],"a":"9 feet."}},
    {t:"convert", d:"to change from one unit to another", x:"Convert metres to centimetres." ,ex:{"q":"Convert 2 metres to centimetres.","steps":["To convert means to change from one unit to another.","1 metre = 100 centimetres.","2 metres = 2 × 100 = 200 centimetres."],"a":"2 m = 200 cm."}},
    {t:"bar graph", d:"a graph using bars to compare amounts", x:"Draw a bar graph of the heights." ,ex:{"q":"The pupils' favourite fruits are: mango 5, orange 3, pineapple 2. Describe the bar graph and name the favourite.","steps":["A bar graph shows data as bars whose heights are the numbers.","Draw one bar for each fruit; make the mango bar 5 units tall, the orange bar 3, the pineapple bar 2.","The tallest bar shows the most chosen fruit."],"a":"Bars of heights 5, 3, 2 — mango is the favourite."}}
  ],
  worked:[
    {q:"Find the perimeter of a rectangle 8 cm long and 5 cm wide.",
     steps:["Perimeter = 2 × (length + width).","= 2 × (8 + 5) = 2 × 13.","= 26 cm."], a:"26 cm"},
    {q:"Find the area of the same rectangle.",
     steps:["Area = length × width.","= 8 × 5.","= 40 cm²."], a:"40 cm²"}
  ],
  drillLabel:"Measurement, perimeter and area",
  drills:[
    {id:"perimeter_rect"},
    {id:"area_rect"},
    {id:"convert_metric"},
    {id:"convert_customary"},
    {id:"convert_time"},
    {id:"money_change"}
  ],
  word:[
    {q:"A garden is 12 m long and 7 m wide. Find its perimeter.", a:"2 × (12 + 7) = 38 metres"},
    {q:"Find the area of a room 6 m by 4 m.", a:"6 × 4 = 24 square metres"},
    {q:"Change 5 kilometres to metres.", a:"5 × 1000 = 5000 metres"},
    {q:"A journey starts at 7:15 and takes 2 hours 30 minutes. When does it end?", a:"9:45"},
    {q:"Tarnue buys rice for L$450 and oil for L$275. How much does he spend?", a:"450 + 275 = L$725"}
  ],
  challenge:[
    {q:"Two rectangles have the same perimeter of 20 cm. Give two different pairs of side lengths.", a:"Any correct pair, e.g. 6 cm × 4 cm and 7 cm × 3 cm"},
    {q:"Explain the difference between perimeter and area in your own words.", a:"Perimeter is the distance round the edge; area is the surface covered inside."},
    {q:"A square has a perimeter of 36 cm. Find the length of one side and the area.", a:"Side = 36 ÷ 4 = 9 cm; area = 9 × 9 = 81 cm²"}
  ],
  activities:["Measure length, capacity, weight and volume in metric and English systems","Use the clock to tell time with minute and hour hands","Solve word problems involving Liberian money","Use operations to find volume, weight, area and perimeter"],
  materials:["Elementary Mathematics for Liberia Book 3","Cup, pint, quart, gallon measures","Liberian banknotes and coins","Clock and rulers"],
  assessment:["Practical measurement","Written calculation","Quiz","Test"]
},
{
  grade:3, period:"VI", sem:"Two", icon:"📈",
  title:"Geometry and Data",
  subtitle:"Lines, angles, geometric figures, graphs and averages",
  outcomes:["Identify figures in the design of structures such as bridges and houses","Use population data to read and interpret bar graphs, line graphs, pie charts, mean, mode and median"],
  objectives:["Classify simple geometric figures as line segments, rays, lines, squares, cones, right angles, rectangles, triangles and vertices","Identify various types of angles","Categorise and read geometric figures","Find the mean, mode and median of data"],
  note:"An <b>acute angle</b> is less than 90°, a <b>right angle</b> is exactly 90°, and an <b>obtuse angle</b> is between 90° and 180°. The <b>mean</b> is the total divided by how many.",
  study:[
    /* ---- course text: Semester Two, Period VI — Geometry and Data (pages 36-37) ---- */
    {k:"h3", t:"Points, Lines, Rays and Line Segments"},
    {k:"p", t:"A **point** marks an exact position. A **line** goes on forever in both directions. A **line segment** is part of a line with two end points. A **ray** starts at one point and goes on forever in one direction. Draw each with a ruler and measure line segments."},
    {k:"rule"},
    {k:"h3", t:"Angles"},
    {k:"p", t:"An **angle** is formed where two lines or line segments meet. A **right angle** makes a square corner, like the corner of this page. Other angles are **less than a right angle** or **greater than a right angle**. Use a protractor to draw and measure angles."},
    {k:"rule"},
    {k:"h3", t:"Classifying Geometric Figures"},
    {k:"p", t:"Classify simple figures as **line segments, rays, lines, squares, rectangles, triangles, cones** and more. Identify the **vertex** (corner) of each figure and describe its sides and angles."},
    {k:"rule"},
    {k:"h3", t:"Solid Figures"},
    {k:"p", t:"**Solid figures** are not flat: they take up space. Draw and discuss the characteristics of the **cube, sphere, rhombus, cylinder, cone, pyramid, trapezoid and prism**. A dice is a cube, a ball is a sphere, a tin is a cylinder and a roof can be a pyramid."},
    {k:"rule"},
    {k:"h3", t:"Reading Graphs"},
    {k:"p", t:"A **graph** shows information as pictures. Read and interpret **bar graphs, line graphs and pie charts (circle graphs)**: look at the title, the labels and the heights or sizes of the bars, lines and slices."},
    {k:"rule"},
    {k:"h3", t:"Mean, Mode, Median and Average"},
    {k:"p", t:"These statistics describe a set of data:"},
    {k:"bul", items:["**Mean (average)** — add all the values and divide by how many there are.", "**Mode** — the value that appears most often.", "**Median** — the middle value when the data is arranged in order."]},
    {k:"p", t:"**Worked example:** the marks 4, 6, 6, 8 have mean (4 + 6 + 6 + 8) ÷ 4 = 24 ÷ 4 = 6; the mode is 6; the median is (6 + 6) ÷ 2 = 6."},
    {k:"rule"},
    {k:"h3", t:"Using Population Data"},
    {k:"p", t:"Use given population data to construct a **frequency table**, then a **bar graph**, a **line graph** and a **circle graph (pie chart)**, and find the mean, mode and median of the data."}
  ],
  focus:["Measurement of geometric figures","Identification of figures","Reading charts and graphs","Types of angles","Mean, mode and median"],
  terms:[
    {t:"line segment", d:"a straight path with two end points", x:"Measure the line segment with a ruler." ,ex:{"q":"A road runs straight from town A to town B. What is the road from A to B called in geometry?","steps":["A line segment is a straight line with two end points.","The road starts at A and ends at B.","It is written AB, with A and B as its end points."],"a":"It is the line segment AB."}},
    {t:"ray", d:"a straight path with one end point that goes on forever", x:"A ray starts at one point." ,ex:{"q":"Draw the ray from point A through point B and name it.","steps":["A ray is a part of a line with one end point that goes on forever.","Start at A (the end point) and draw through B, adding an arrow.","Name it using the end point first: ray AB."],"a":"It is ray AB (starts at A, goes through B)."}},
    {t:"angle", d:"the opening between two rays that meet", x:"Measure the angle with a protractor." ,ex:{"q":"Two rays meet at point O. What is formed at O?","steps":["An angle is formed when two rays meet at a common end point.","The common end point is called the vertex: here, O.","The angle is written ∠O or ∠AOB."],"a":"An angle with vertex O (∠AOB)."}},
    {t:"right angle", d:"an angle of exactly 90 degrees", x:"A corner of a book is a right angle." ,ex:{"q":"How many degrees is a right angle? Name one you can see.","steps":["A right angle is exactly 90°.","It is the corner of a square or a rectangle.","The corner where a wall meets the floor is a right angle."],"a":"A right angle is 90° (the corner of a square)."}},
    {t:"acute angle", d:"an angle less than 90 degrees", x:"An acute angle is small and sharp." ,ex:{"q":"Which is acute: an angle of 45° or an angle of 100°?","steps":["An acute angle is smaller than a right angle (less than 90°).","45° < 90°, so 45° is acute.","100° > 90°, so 100° is obtuse."],"a":"The 45° angle is acute."}},
    {t:"obtuse angle", d:"an angle between 90 and 180 degrees", x:"An obtuse angle is wide open." ,ex:{"q":"Which is obtuse: an angle of 60° or an angle of 120°?","steps":["An obtuse angle is bigger than a right angle but less than a straight angle (between 90° and 180°).","120° is between 90° and 180°.","60° is less than 90°, so it is acute."],"a":"The 120° angle is obtuse."}},
    {t:"vertex", d:"the point where two sides or rays meet", x:"The angle is at the vertex." ,ex:{"q":"How many vertices does a triangle have?","steps":["A vertex is a corner where two sides meet.","A triangle's three sides meet at three corners.","Count the vertices: three."],"a":"A triangle has 3 vertices."}},
    {t:"mean", d:"the total divided by the number of items (average)", x:"Find the mean of the scores." ,ex:{"q":"Find the mean of the numbers 4, 6 and 8.","steps":["The mean is the average: add the numbers, then divide by how many there are.","Add: 4 + 6 + 8 = 18.","There are 3 numbers: 18 ÷ 3 = 6."],"a":"The mean is 6."}},
    {t:"mode", d:"the value that appears most often", x:"The mode is the most common mark." ,ex:{"q":"Find the mode of the set: 3, 5, 5, 7, 9.","steps":["The mode is the number that appears most often.","Count each: 3 once, 5 twice, 7 once, 9 once.","5 appears most often (twice)."],"a":"The mode is 5."}},
    {t:"median", d:"the middle value when data is put in order", x:"Arrange the data to find the median." ,ex:{"q":"Find the median of the numbers 3, 8, 5.","steps":["The median is the middle number when the data are in order.","Order them: 3, 5, 8.","The middle number is 5."],"a":"The median is 5."}}
  ],
  worked:[
    {q:"Find the mean of 4, 6, 8, 10 and 12.",
     steps:["Add all the values: 4 + 6 + 8 + 10 + 12 = 40.","Count the values: there are 5.","Divide: 40 ÷ 5 = 8."], a:"8"},
    {q:"Find the median of 7, 3, 9, 5, 11.",
     steps:["Arrange in order: 3, 5, 7, 9, 11.","There are 5 values, so the middle one is the third.","The median is 7."], a:"7"}
  ],
  drillLabel:"Geometry and statistics",
  drills:[
    {id:"angle_type"},
    {id:"shape_sides", p:{pool:[["triangle",3],["square",4],["rectangle",4],["pentagon",5],["hexagon",6]]}},
    {id:"mean", p:{count:5}},
    {id:"median"},
    {id:"mode"},
    {id:"read_graph"}
  ],
  word:[
    {q:"Five pupils scored 12, 15, 18, 15 and 20. Find the mode.", a:"15 (it appears twice)"},
    {q:"The heights of four boys are 120, 130, 125 and 125 cm. Find the mean height.", a:"(120+130+125+125) ÷ 4 = 125 cm"},
    {q:"An angle measures 45°. What kind of angle is it?", a:"An acute angle"},
    {q:"How many right angles are there in a rectangle?", a:"4 right angles"},
    {q:"Marks are 6, 9, 4, 9, 7. Find the median.", a:"Ordered: 4, 6, 7, 9, 9 — the median is 7"}
  ],
  challenge:[
    {q:"A bar graph shows Monrovia 80, Kakata 60, Gbarnga 40 pupils. Which has the most and what is the total?", a:"Monrovia has the most; total = 180 pupils"},
    {q:"Can a triangle have two right angles? Explain.", a:"No — the three angles must add to 180°, and two right angles already make 180° leaving nothing for the third."},
    {q:"The mean of five numbers is 10. What is their total?", a:"10 × 5 = 50"}
  ],
  activities:["Use rulers to draw and measure line segments, rays and lines","Use a protractor to draw and measure angles","Read and interpret bar, line and pie graphs","Construct a frequency table from population data"],
  materials:["Elementary Mathematics for Liberia Book 3","Geometry set, yard sticks","Poster sheets showing population data"],
  assessment:["Graph construction task","Measurement of angles","Quiz","Test"]
},

/* ================= GRADE 4 ================= */
{
  grade:4, period:"I", sem:"One", icon:"🔟",
  title:"Numeration, Addition and Subtraction",
  subtitle:"Whole numbers to hundred thousand, rounding, and adding and subtracting population data",
  outcomes:["Use population data of births and deaths to add and subtract whole numbers","Apply computation skills of addition and subtraction to real life"],
  objectives:["Read and write whole numbers up to hundred thousand","Compare and order whole numbers to hundred thousand","Round whole numbers up to thousand","Add and subtract whole numbers using population data"],
  note:"To <b>round</b> a number, look at the digit to the right of the rounding place. If it is 5 or more, round up; if it is less than 5, round down.",
  study:[
    /* ---- course text: Semester One, Period I — Numeration, Addition and Subtraction (pages 38-39) ---- */
    {k:"h3", t:"Place Value to Hundred Thousand"},
    {k:"p", t:"Numbers grow by tens from right to left: **ones, tens, hundreds, thousands, ten thousands, hundred thousands**."},
    {k:"table", head:["Hundred thousands","Ten thousands","Thousands","Hundreds","Tens","Ones"], rows:[["3","4","5","6","7","8"]]},
    {k:"p", t:"In 345,678 the digit 3 means 3 hundred thousands (300,000), the 4 means 4 ten thousands (40,000), the 5 means 5 thousands (5,000), and so on. Use place value charts and strips to read and write whole numbers up to **hundred thousand**."},
    {k:"rule"},
    {k:"h3", t:"Comparing and Ordering Whole Numbers"},
    {k:"p", t:"To compare whole numbers, first compare the **number of digits** — more digits means a greater number. If the digits are equal in number, compare place by place from the left."},
    {k:"num", items:["12,450 > 9,999 — more digits, so greater.","45,200 and 45,600: same digits; compare hundreds: 2 < 6, so 45,200 < 45,600.","Order 8,500; 12,300; 9,999: 8,500; 9,999; 12,300."]},
    {k:"rule"},
    {k:"h3", t:"Rounding Whole Numbers"},
    {k:"p", t:"**Rounding** makes a number easier to use. To round to the nearest **thousand**, look at the hundreds digit: if it is 5 or more, round up; if it is 4 or less, round down."},
    {k:"bul", items:["7,400 rounds to 7,000 (hundreds digit 4).", "7,500 rounds to 8,000 (hundreds digit 5).", "12,600 rounds to 13,000.", "98,400 rounds to 98,000."]},
    {k:"rule"},
    {k:"h3", t:"Adding with Population Data"},
    {k:"p", t:"**Population data** on births, deaths and migration are whole numbers we can add and subtract. Add two or more components, such as births in two districts, to find the total."},
    {k:"num", items:["A district records 1,200 births in one year and 1,450 the next. Total births: 1,200 + 1,450 = 2,650.","Two towns have 3,500 and 2,800 people. Total population: 3,500 + 2,800 = 6,300."]},
    {k:"rule"},
    {k:"h3", t:"Subtracting with Population Data"},
    {k:"p", t:"Subtract one component of population data from another — for example, subtract deaths from births to find the natural increase."},
    {k:"num", items:["Births 2,650 and deaths 1,100: 2,650 − 1,100 = 1,550 more people.","A town of 6,300 loses 250 people to migration: 6,300 − 250 = 6,050 remain."]},
    {k:"rule"},
    {k:"h3", t:"Solving Word Problems"},
    {k:"p", t:"Read the problem, decide which operation to use, estimate the answer, work it out carefully, and check that the answer makes sense."}
  ],
  focus:["Place value to hundred thousand","Comparing and ordering whole numbers","Rounding to the nearest thousand","Addition and subtraction of large numbers","Word problems"],
  terms:[
    {t:"hundred thousand", d:"the number 100 000", x:"Write one hundred thousand in figures." ,ex:{"q":"How many ten thousands make one hundred thousand?","steps":["A hundred thousand is 100,000.","Count by ten thousands: 10,000, 20,000, …, 100,000.","There are 10 steps of ten thousand."],"a":"10 ten thousands make 100,000 (10 × 10,000 = 100,000)."}},
    {t:"round", d:"to give an approximate value to a stated place", x:"Round 4 728 to the nearest thousand." ,ex:{"q":"Round 47 to the nearest ten.","steps":["Rounding gives an approximate value to a stated place.","47 is between 40 and 50.","The ones digit is 7 (5 or more), so round up: 47 ≈ 50."],"a":"47 rounded to the nearest ten is 50."}},
    {t:"approximate", d:"nearly correct but not exact", x:"An approximate answer is close enough." ,ex:{"q":"A town is 87 km away. Give the approximate distance from 50 km, 90 km or 150 km.","steps":["Approximate means to give a sensible, close value.","87 is close to 90, not to 50 or 150.","So the approximate distance is 90 km."],"a":"About 90 km."}},
    {t:"birth rate", d:"how many babies are born in a population", x:"The birth rate is rising." ,ex:{"q":"In a year, 1,200 babies are born in a town of 12,000 people. What fraction of the population are the new babies?","steps":["The birth rate measures how many babies are born in a population.","Write the fraction: 1,200 / 12,000.","Simplify: divide top and bottom by 1,200:  1/10."],"a":"1/10 of the population (10 births per 100 people)."}},
    {t:"death rate", d:"how many people die in a population", x:"Subtract the death rate figures." ,ex:{"q":"In a year, 300 people die in a town of 12,000. What fraction of the population is that?","steps":["The death rate measures how many people die in a population.","Write the fraction: 300 / 12,000.","Simplify: divide top and bottom by 300:  1/40."],"a":"1/40 of the population (25 deaths per 1,000 people)."}},
    {t:"migration", d:"people moving from one place to another", x:"Migration changes the population." ,ex:{"q":"A town of 5,000 people gains 300 new residents and 100 people leave. What is the migration change?","steps":["Migration is the movement of people into and out of a place.","New residents: +300; people who leave: −100.","Change: 300 − 100 = 200 more people."],"a":"The town gains 200 people (+200)."}},
    {t:"place value", d:"the value a digit has because of its position", x:"The place value of 7 in 47 000 is 7 000." ,ex:{"q":"In the number 36, what is the place value of the digit 3?","steps":["Place value is what a digit is worth because of its position.","In 36, the 3 stands in the tens column.","One ten is worth 10, so the 3 is worth 30."],"a":"The place value of the 3 in 36 is 30."}},
    {t:"ascending order", d:"from smallest to largest", x:"Arrange in ascending order." ,ex:{"q":"Put 12,450; 12,090; 12,900 in ascending order.","steps":["Ascending order means from smallest to biggest.","Compare digit by digit from the left: all start 12.","Look at the hundreds: 090 < 450 < 900."],"a":"12,090; 12,450; 12,900."}},
    {t:"descending order", d:"from largest to smallest", x:"Arrange in descending order." ,ex:{"q":"Put 12,450; 12,090; 12,900 in descending order.","steps":["Descending order means from biggest to smallest.","Compare the hundreds: 900 > 450 > 090.","Write them in that order."],"a":"12,900; 12,450; 12,090."}},
    {t:"estimate", d:"a sensible approximate answer", x:"Estimate the sum before adding." ,ex:{"q":"About how many beans are in a small cup — 5, 20 or 100?","steps":["To estimate means to make a sensible guess before counting exactly.","A small cup is too small for 100 beans and too big for 5.","20 beans is the sensible guess."],"a":"About 20 beans."}}
  ],
  worked:[
    {q:"Round 47 682 to the nearest thousand.",
     steps:["The thousands digit is 7 (47 thousand).","Look at the next digit: 6, which is 5 or more.","So round up: 48 000."], a:"48 000"},
    {q:"Add 24 356 + 18 279.",
     steps:["Ones: 6 + 9 = 15, write 5 carry 1.","Tens: 5 + 7 + 1 = 13, write 3 carry 1.","Hundreds: 3 + 2 + 1 = 6.","Thousands: 4 + 8 = 12, write 2 carry 1. Ten-thousands: 2 + 1 + 1 = 4.","Answer: 42 635."], a:"42 635"}
  ],
  drillLabel:"Large whole numbers",
  drills:[
    {id:"place_value", p:{digits:5}},
    {id:"round_num", p:{to:1000,max:99999}},
    {id:"round_num", p:{to:100,max:9999}},
    {id:"add_col", p:{digits:4,terms:2}},
    {id:"sub_col", p:{digits:4}},
    {id:"order_nums", p:{min:1000,max:99999}}
  ],
  word:[
    {q:"A county recorded 12 480 births and 7 356 deaths. What is the increase in population?", a:"12 480 − 7 356 = 5 124"},
    {q:"Two towns have populations of 34 500 and 28 750. What is the total?", a:"34 500 + 28 750 = 63 250"},
    {q:"Round the population 46 812 to the nearest thousand.", a:"47 000"},
    {q:"A school register shows 1 245 pupils; 378 leave. How many remain?", a:"1 245 − 378 = 867 pupils"},
    {q:"Write ninety-eight thousand four hundred and six in figures.", a:"98 406"}
  ],
  challenge:[
    {q:"Which is greater, 90 909 or 90 990? Explain how you know.", a:"90 990 — compare digit by digit from the left; the hundreds digit 9 beats 9 then the tens 9 beats 0."},
    {q:"A number rounded to the nearest thousand gives 5 000. What is the smallest whole number it could be?", a:"4 500"},
    {q:"A town's population rose from 28 400 to 35 100. By how much did it rise?", a:"35 100 − 28 400 = 6 700"}
  ],
  activities:["Read and write whole numbers up to hundred thousand","Compare and order large whole numbers","Add births and deaths from population data","Subtract components of population data"],
  materials:["Elementary Mathematics for Liberia Book 4","Place value chart and strips","Poster sheet showing population data"],
  assessment:["Written exercise","Class assignment","Quiz","Test"]
},
{
  grade:4, period:"II", sem:"One", icon:"✳️",
  title:"Multiplication and Division of Whole Numbers",
  subtitle:"Multiplication facts, multiples of 10, and dividing by 1-digit divisors",
  outcomes:["Apply computational skills about multiplication and division to real-life situations","Keep records and distribute items","Analyse basic data for decision-making"],
  objectives:["Identify multiplication facts and properties","Multiply multiples of 10s, 100s and 1000s","Multiply 2, 3 or 4 digits by 1 digit","Divide 2, 3 or 4-digit numbers by a 1-digit divisor","Divide whole numbers with zero in the quotient"],
  note:"To multiply by a multiple of ten, multiply the non-zero digits and then write the zeros: 40 × 6 = 4 × 6 = 24, then add the zero → <b>240</b>.",
  study:[
    /* ---- course text: Semester One, Period II — Multiplication and Division of Whole Numbers (pages 40-41) ---- */
    {k:"h3", t:"Multiplication Facts and Properties"},
    {k:"p", t:"**Multiplication** is repeated addition. Learn the **multiplication facts** (the times tables) and their **properties**: order does not matter (2 × 6 = 6 × 2), and 1 and 0 have special effects (7 × 1 = 7, 7 × 0 = 0). Use flash cards and doubles to practise."},
    {k:"rule"},
    {k:"h3", t:"Multiplying Multiples of 10, 100 and 1000"},
    {k:"p", t:"Multiply the digits first, then attach the zeros."},
    {k:"bul", items:["6 × 40 = 240 (6 × 4 = 24, then add one zero).", "3 × 200 = 600 (3 × 2 = 6, then add two zeros).", "4 × 3,000 = 12,000 (4 × 3 = 12, then add three zeros)."]},
    {k:"rule"},
    {k:"h3", t:"Multiplying 2, 3 or 4 Digits by 1 Digit"},
    {k:"p", t:"Multiply from the ones place, carrying when the product is 10 or more. Use graph paper or a 4-by-26 rectangle to see the concept."},
    {k:"num", items:["Multiply 26 × 4.","Ones: 4 × 6 = 24, write 4 carry 2.","Tens: 4 × 2 + 2 = 10.","26 × 4 = 104."]},
    {k:"rule"},
    {k:"h3", t:"Dividing by 1-Digit Divisors"},
    {k:"p", t:"**Division** shares into equal groups. Divide 2, 3 or 4-digit numbers by a **1-digit divisor**, working from the left. 96 ÷ 3 = 32 because 3 × 32 = 96."},
    {k:"num", items:["Divide 486 ÷ 3.","4 ÷ 3 = 1 remainder 1; bring down 8: 18 ÷ 3 = 6; bring down 6: 6 ÷ 3 = 2.","486 ÷ 3 = 162."]},
    {k:"rule"},
    {k:"h3", t:"Zeros in the Quotient"},
    {k:"p", t:"Sometimes the quotient contains a **zero**. Write the zero to hold the place: 612 ÷ 3: 6 ÷ 3 = 2; 1 ÷ 3 cannot be done, write 0 and bring down 2: 12 ÷ 3 = 4. Answer **204**."},
    {k:"rule"},
    {k:"h3", t:"Solving Problems Involving Division"},
    {k:"p", t:"Division solves sharing problems: keep records and distribute items fairly."},
    {k:"num", items:["A farmer has 144 eggs and packs them in boxes of 12. Boxes needed: 144 ÷ 12 = 12.","L$450 shared equally among 5 children: 450 ÷ 5 = L$90 each.","96 pupils in 4 groups: 96 ÷ 4 = 24 pupils per group."]}
  ],
  focus:["Multiplication facts and properties","Multiplying multiples of 10, 100, 1000","Multiplying 2–4 digits by 1 digit","Dividing by 1-digit divisors","Zeros in the quotient"],
  terms:[
    {t:"multiple", d:"the result of multiplying by a whole number", x:"20 is a multiple of 5." ,ex:{"q":"Write the first three multiples of 6.","steps":["A multiple of a number is what you get when you multiply it by 1, 2, 3, …","6 × 1 = 6.","6 × 2 = 12 and 6 × 3 = 18."],"a":"6, 12, 18."}},
    {t:"factor", d:"a number that divides exactly into another", x:"5 is a factor of 20." ,ex:{"q":"In 3 × 4 = 12, name the factors.","steps":["A factor is a number being multiplied.","The two numbers being multiplied are 3 and 4.","12 is the product."],"a":"The factors are 3 and 4."}},
    {t:"product", d:"the answer in multiplication", x:"The product of 12 and 4 is 48." ,ex:{"q":"Find the product of 3 and 4.","steps":["The product is the answer in multiplication.","Multiply: 3 × 4.","Count 3 fours: 4, 8, 12."],"a":"3 × 4 = 12."}},
    {t:"dividend", d:"the number being divided", x:"In 84 ÷ 7 the dividend is 84." ,ex:{"q":"In 24 ÷ 6 = 4, which number is the dividend?","steps":["In division, the dividend is the number being divided.","The number being divided is 24.","6 is the divisor and 4 is the quotient."],"a":"The dividend is 24."}},
    {t:"divisor", d:"the number you divide by", x:"The divisor is 7." ,ex:{"q":"In 24 ÷ 6 = 4, which number is the divisor?","steps":["The divisor is the number we divide by.","We are dividing by 6.","24 is the dividend and 4 is the quotient."],"a":"The divisor is 6."}},
    {t:"quotient", d:"the answer in division", x:"The quotient is 12." ,ex:{"q":"Find the quotient of 20 ÷ 4.","steps":["The quotient is the answer in division.","Ask: 4 × what = 20?","4 × 5 = 20, so the quotient is 5."],"a":"20 ÷ 4 = 5."}},
    {t:"remainder", d:"the amount left over after dividing", x:"There is a remainder of 2." ,ex:{"q":"Divide 17 by 5. What is the remainder?","steps":["The remainder is what is left over after dividing.","5 × 3 = 15, and 5 × 4 = 20 is too big, so 17 ÷ 5 = 3 with something left.","17 − 15 = 2 is left over."],"a":"17 ÷ 5 = 3 remainder 2."}},
    {t:"long division", d:"the written method for dividing large numbers", x:"Use long division carefully." ,ex:{"q":"Divide 96 by 4 using long division.","steps":["Long division divides one digit group at a time, from the left.","9 ÷ 4 = 2, remainder 1; bring down the 6 to make 16.","16 ÷ 4 = 4, remainder 0."],"a":"96 ÷ 4 = 24."}},
    {t:"estimate", d:"a rough answer used to check", x:"Estimate the product first." ,ex:{"q":"About how many beans are in a small cup — 5, 20 or 100?","steps":["To estimate means to make a sensible guess before counting exactly.","A small cup is too small for 100 beans and too big for 5.","20 beans is the sensible guess."],"a":"About 20 beans."}},
    {t:"array", d:"objects arranged in equal rows and columns", x:"Draw an array to show 4 × 6." ,ex:{"q":"Show 3 × 4 as an array and write the total.","steps":["An array is rows and columns of equal objects.","Make 3 rows of 4:  4 + 4 + 4.","Count all the objects: 12."],"a":"3 rows of 4 make 12 (3 × 4 = 12)."}}
  ],
  worked:[
    {q:"Multiply 342 × 6.",
     steps:["Ones: 2 × 6 = 12, write 2 carry 1.","Tens: 4 × 6 = 24, + 1 = 25, write 5 carry 2.","Hundreds: 3 × 6 = 18, + 2 = 20.","Answer: 2 052."], a:"2 052"},
    {q:"Divide 736 ÷ 8.",
     steps:["8 into 7 will not go, so take 73.","8 × 9 = 72, so write 9 and carry 1 remainder.","Bring down 6 to make 16. 8 × 2 = 16, so write 2.","Answer: 92."], a:"92"}
  ],
  drillLabel:"Multiplication and division of whole numbers",
  drills:[
    {id:"mul", p:{aMin:2,aMax:12,bMin:2,bMax:12}},
    {id:"mul_big", p:{aDigits:3,bDigits:1}},
    {id:"mul_tens", p:{unit:10}},
    {id:"mul_tens", p:{unit:100}},
    {id:"div_big", p:{dMin:2,dMax:9,qMin:20,qMax:400}},
    {id:"div_rem", p:{dMin:2,dMax:9,qMax:40}},
    {id:"div_zero_quot"}
  ],
  word:[
    {q:"A truck carries 148 bags of rice. How many bags do 6 such trucks carry?", a:"148 × 6 = 888 bags"},
    {q:"875 exercise books are shared equally among 5 schools. How many books each?", a:"875 ÷ 5 = 175 books"},
    {q:"A farmer plants 24 rows with 35 cassava sticks in each. How many sticks?", a:"24 × 35 = 840 sticks"},
    {q:"A shopkeeper packs 259 eggs into trays of 6. How many full trays and how many left over?", a:"259 ÷ 6 = 43 trays remainder 1 egg"},
    {q:"Each pupil pays L$300 for uniforms. How much do 40 pupils pay?", a:"300 × 40 = L$12 000"}
  ],
  challenge:[
    {q:"Without working it out fully, estimate 397 × 8 and then find the exact answer.", a:"Estimate 400 × 8 = 3 200; exact answer 3 176"},
    {q:"Why does 500 ÷ 5 have a zero in the quotient position of the tens?", a:"Because after dividing the hundreds there are no tens to divide, so a zero must be written to hold the place: the answer is 100."},
    {q:"A number multiplied by 7 gives 448. Find the number.", a:"448 ÷ 7 = 64"}
  ],
  activities:["Use flash cards for multiplication facts and properties","Use graph paper to show multiplication as arrays","Practise long division with 1-digit divisors","Role play distributing items equally"],
  materials:["Elementary Mathematics for Liberia Book 4","Flash cards with multiplication facts","Graph paper, base-10 counters"],
  assessment:["Timed facts test","Written exercise","Quiz","Test"]
},
{
  grade:4, period:"III", sem:"One", icon:"🧩",
  title:"Number Theory and Fractions",
  subtitle:"Even and odd, factors, multiples, LCM, GCF and fractions",
  outcomes:["Understand number theory","Apply fractional concepts to real-life situations"],
  objectives:["Identify even and odd numbers","Identify factors and multiples","Find the LCM and GCF of numbers","Find parts of a set","Write equivalent fractions","Simplify fractions","Add and subtract fractions"],
  note:"The <b>GCF</b> is the largest number that divides into both numbers exactly. The <b>LCM</b> is the smallest number that both numbers divide into exactly.",
  study:[
    /* ---- course text: Semester One, Period III — Number Theory and Fractions (pages 42-43) ---- */
    {k:"h3", t:"Even and Odd Numbers"},
    {k:"p", t:"**Even numbers** end in 0, 2, 4, 6 or 8 and can be divided by 2 exactly. **Odd numbers** end in 1, 3, 5, 7 or 9. Explore and write the even and odd numbers as sets using a number chart."},
    {k:"bul", items:["Even: 2, 4, 6, 8, 10, 12, ...", "Odd: 1, 3, 5, 7, 9, 11, ..."]},
    {k:"rule"},
    {k:"h3", t:"Factors and Multiples"},
    {k:"p", t:"A **factor** of a number divides into it exactly: the factors of 12 are 1, 2, 3, 4, 6 and 12. A **multiple** of a number is the product of that number and a whole number: the multiples of 4 are 4, 8, 12, 16, 20, ..."},
    {k:"p", t:"**Prime factors** are the factors that are prime numbers: the prime factors of 12 are 2 and 3, because 12 = 2 × 2 × 3."},
    {k:"rule"},
    {k:"h3", t:"LCM and GCF"},
    {k:"p", t:"The **LCM** (least common multiple) is the smallest number that two or more numbers divide into exactly. The **GCF** (greatest common factor) is the largest factor common to two or more numbers."},
    {k:"num", items:["Multiples of 6: 6, 12, 18, 24, 30. Multiples of 8: 8, 16, 24, 32. LCM of 6 and 8 is 24.","Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 18: 1, 2, 3, 6, 9, 18. GCF is 6."]},
    {k:"rule"},
    {k:"h3", t:"Parts of a Set"},
    {k:"p", t:"A fraction can name **parts of a set** as well as parts of a whole: 1/2 of a set of 10 oranges is 5 oranges, because 10 ÷ 2 = 5."},
    {k:"num", items:["Find 1/4 of 12 pupils: 12 ÷ 4 = 3 pupils.","Find 1/3 of 18 stones: 18 ÷ 3 = 6 stones.","Find 2/3 of 18 stones: 18 ÷ 3 × 2 = 12 stones."]},
    {k:"rule"},
    {k:"h3", t:"Equivalent Fractions"},
    {k:"p", t:"**Equivalent fractions** have different denominators but the same value: 1/2 = 2/4 = 3/6 = 4/8. Multiply or divide the numerator and the denominator by the same number."},
    {k:"rule"},
    {k:"h3", t:"Simplifying Fractions"},
    {k:"p", t:"**Simplifying** (reducing) a fraction means writing it in its smallest terms by dividing the numerator and denominator by their GCF: 8/12 = 2/3 (divide by 4)."},
    {k:"rule"},
    {k:"h3", t:"Adding and Subtracting Fractions"},
    {k:"p", t:"Add and subtract fractions with the **same denominator** by working on the numerators: 3/7 + 2/7 = 5/7 and 5/8 − 2/8 = 3/8. For different denominators, first change to equivalent fractions with a common denominator."},
    {k:"rule"},
    {k:"h3", t:"Multi-Step Problems"},
    {k:"p", t:"Some problems need **more than one operation**."},
    {k:"num", items:["Kumba buys 3 books at L$50 each and pays with L$200: 3 × 50 = 150; 200 − 150 = L$50 change.","A school has 240 pupils; half are boys and half are girls. If 40 girls are absent: 120 − 40 = 80 girls present."]}
  ],
  focus:["Even and odd numbers","Factors and multiples","LCM and GCF","Parts of a set","Equivalent and simplified fractions","Adding and subtracting fractions"],
  terms:[
    {t:"even number", d:"a number exactly divisible by 2", x:"16 is an even number." ,ex:{"q":"Is 138 an even number? How can you tell?","steps":["An even number is divisible by 2.","The last digit of 138 is 8, and 8 is even.","138 ÷ 2 = 69 exactly."],"a":"Yes — its last digit is even (138 ÷ 2 = 69)."}},
    {t:"odd number", d:"a number not exactly divisible by 2", x:"17 is an odd number." ,ex:{"q":"Is 247 an odd number? How can you tell?","steps":["An odd number is not divisible by 2.","The last digit of 247 is 7, and 7 is odd.","247 ÷ 2 = 123 with remainder 1."],"a":"Yes — its last digit is odd (247 ÷ 2 = 123 r 1)."}},
    {t:"factor", d:"a number that divides exactly into another", x:"3 is a factor of 12." ,ex:{"q":"In 3 × 4 = 12, name the factors.","steps":["A factor is a number being multiplied.","The two numbers being multiplied are 3 and 4.","12 is the product."],"a":"The factors are 3 and 4."}},
    {t:"multiple", d:"the result of multiplying by a whole number", x:"12 is a multiple of 3." ,ex:{"q":"Write the first three multiples of 6.","steps":["A multiple of a number is what you get when you multiply it by 1, 2, 3, …","6 × 1 = 6.","6 × 2 = 12 and 6 × 3 = 18."],"a":"6, 12, 18."}},
    {t:"GCF", d:"the greatest common factor of two numbers", x:"The GCF of 12 and 18 is 6." ,ex:{"q":"Find the GCF of 12 and 18.","steps":["The GCF is the greatest number that divides both numbers.","Factors of 12: 1, 2, 3, 4, 6, 12.  Factors of 18: 1, 2, 3, 6, 9, 18.","The common factors are 1, 2, 3, 6; the greatest is 6."],"a":"GCF = 6."}},
    {t:"LCM", d:"the lowest common multiple of two numbers", x:"The LCM of 4 and 6 is 12." ,ex:{"q":"Find the LCM of 4 and 6.","steps":["The LCM is the smallest number that both numbers divide into.","Multiples of 4: 4, 8, 12, 16, 20, 24, …","Multiples of 6: 6, 12, 18, 24, … The first common one is 12."],"a":"LCM = 12."}},
    {t:"prime number", d:"a number with only two factors, 1 and itself", x:"7 is a prime number." ,ex:{"q":"Is 13 a prime number? Give your reason.","steps":["A prime number has exactly two factors: 1 and itself.","Try dividing 13: only 1 and 13 divide into it exactly.","So 13 is prime."],"a":"Yes — 13 has exactly two factors: 1 and 13."}},
    {t:"composite number", d:"a number with more than two factors", x:"9 is a composite number." ,ex:{"q":"Is 12 a composite number? Write its factors.","steps":["A composite number has more than two factors.","Factors of 12: 1, 2, 3, 4, 6, 12.","That is 6 factors, so 12 is composite."],"a":"Yes — 12 = 2 × 2 × 3 (factors 1, 2, 3, 4, 6, 12)."}},
    {t:"simplify", d:"to reduce a fraction to its lowest terms", x:"Simplify 6/9 to 2/3." ,ex:{"q":"Simplify 9/12.","steps":["To simplify a fraction, divide top and bottom by their GCF.","The GCF of 9 and 12 is 3.","(9 ÷ 3)/(12 ÷ 3) = 3/4."],"a":"9/12 simplifies to 3/4."}},
    {t:"equivalent", d:"having the same value", x:"2/4 is equivalent to 1/2." ,ex:{"q":"Show that 2/3 and 4/6 are equivalent.","steps":["Equivalent fractions name the same part of a whole.","Multiply top and bottom of 2/3 by 2:  (2 × 2)/(3 × 2) = 4/6.","Both name two thirds of the whole."],"a":"2/3 = 4/6 — equivalent."}}
  ],
  worked:[
    {q:"Find the GCF of 18 and 24.",
     steps:["Factors of 18: 1, 2, 3, 6, 9, 18.","Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24.","Common factors: 1, 2, 3, 6. The greatest is 6."], a:"6"},
    {q:"Add 1/4 + 3/8.",
     steps:["The LCD of 4 and 8 is 8.","Change 1/4 to 2/8.","2/8 + 3/8 = 5/8."], a:"5/8"}
  ],
  drillLabel:"Number theory and fractions",
  drills:[
    {id:"even_odd", p:{max:100}},
    {id:"factors"},
    {id:"multiples", p:{max:12}},
    {id:"gcf"},
    {id:"lcm_q", p:{max:12}},
    {id:"frac_equiv", p:{dens:[2,3,4,5,6]}},
    {id:"frac_simplify", p:{dens:[6,8,9,10,12,15,16,18,20]}},
    {id:"frac_add_unlike", p:{dens:[2,3,4,6,8]}},
    {id:"part_of_set", p:{dens:[2,3,4,5]}}
  ],
  word:[
    {q:"Two bells ring every 4 and 6 minutes. After how many minutes do they ring together?", a:"LCM of 4 and 6 = 12 minutes"},
    {q:"Find 3/5 of 40 oranges.", a:"40 ÷ 5 × 3 = 24 oranges"},
    {q:"Musu ate 1/3 of a cake and Kou ate 1/4. What fraction was eaten?", a:"1/3 + 1/4 = 7/12"},
    {q:"Write 12/16 in its lowest terms.", a:"3/4"},
    {q:"What is the greatest number that divides both 30 and 45 exactly?", a:"GCF = 15"}
  ],
  challenge:[
    {q:"List all the prime numbers between 1 and 20.", a:"2, 3, 5, 7, 11, 13, 17, 19"},
    {q:"A number is both even and a factor of 18. Write all such numbers.", a:"2, 6, 18"},
    {q:"Explain why 1 is neither prime nor composite.", a:"Because a prime must have exactly two different factors and 1 has only one factor — itself."}
  ],
  activities:["Explore and write even and odd numbers using a number chart","Determine prime factors of a number","Find factors and multiples of given numbers","Use fraction strips to add and subtract"],
  materials:["Elementary Mathematics for Liberia Book 4","A chart of numbers up to 100","Fraction strips made from paper"],
  assessment:["Written exercise","Practical with fraction strips","Quiz","Test"]
},
{
  grade:4, period:"IV", sem:"Two", icon:"🔢",
  title:"Multiplication and Division by 2-Digit Numbers; Decimals",
  subtitle:"2-digit multipliers and divisors, estimating, and decimals to hundredths",
  outcomes:["Apply concepts and skills to solve problems related to multiplication and division by 2-digit multipliers and divisors, including decimals to hundredths"],
  objectives:["Multiply 2-digit factors of multiples of 10s, 100s and 1000s","Estimate products involving 2-digit multipliers","Multiply 2, 3 or 4-digit numbers by 2-digit multipliers","Divide by 2-digit divisors mentally","Estimate quotients","Compare and order decimals to hundredths"],
  note:"A <b>decimal point</b> separates whole numbers from parts of a whole. The first place after the point is <b>tenths</b>, the second is <b>hundredths</b>: 3.45 = 3 + 4/10 + 5/100.",
  study:[
    /* ---- course text: Semester Two, Period IV — Multiplication and Division of 2-Digit Multipliers and Divisors, Decimals to Hundredths (pages 44-45) ---- */
    {k:"h3", t:"Multiplying by 2-Digit Multipliers"},
    {k:"p", t:"Multiply a number by a **2-digit multiplier** by multiplying by the ones, then by the tens, and adding the two products."},
    {k:"num", items:["Multiply 26 × 14.","26 × 4 = 104 (ones).","26 × 10 = 260 (tens, so write 260).","104 + 260 = 364."]},
    {k:"p", t:"Multiply 2, 3 or 4-digit numbers by 2-digit multipliers. Also multiply multiples of 10s, 100s and 1000s: 40 × 30 = 1,200 and 200 × 300 = 60,000."},
    {k:"rule"},
    {k:"h3", t:"Estimating Products"},
    {k:"p", t:"**Estimate** a product before working it out, by rounding the numbers first: 38 × 21 is about 40 × 20 = 800. The estimate checks that the exact answer (798) is reasonable."},
    {k:"rule"},
    {k:"h3", t:"Dividing by 2-Digit Divisors"},
    {k:"p", t:"Divide multiples of 10s, 100s and 1000s by **2-digit divisors** mentally where possible: 240 ÷ 12 = 20 and 600 ÷ 20 = 30. Divide 2, 3 or 4-digit numbers by 2-digit divisors by long division."},
    {k:"num", items:["Divide 312 ÷ 12.","12 × 20 = 240, remainder 72.","12 × 6 = 72.","312 ÷ 12 = 26."]},
    {k:"rule"},
    {k:"h3", t:"Estimating Quotients"},
    {k:"p", t:"Estimate the quotient by rounding the divisor and the dividend: 391 ÷ 18 is about 400 ÷ 20 = 20. The exact quotient is 21 remainder 13, so 20 is a good estimate."},
    {k:"rule"},
    {k:"h3", t:"Decimals to Hundredths"},
    {k:"p", t:"A **decimal** uses a point to show parts of a whole. The first digit after the point is **tenths** and the second is **hundredths**: 0.3 is three tenths and 0.25 is twenty-five hundredths. Read and write decimal numerals up to the **hundredths place**."},
    {k:"table", head:["Decimal","Tenths","Hundredths","Read as"], rows:[["0.4","4","0","four tenths"],["0.25","2","5","twenty-five hundredths"],["1.06","0","6","one and six hundredths"]]},
    {k:"rule"},
    {k:"h3", t:"Comparing and Ordering Decimals"},
    {k:"p", t:"Compare decimals place by place: 0.4 and 0.25 — compare tenths: 4 tenths is greater than 2 tenths, so 0.4 > 0.25. Order a set of data: 0.2, 0.15, 0.9 become 0.15, 0.2, 0.9."},
    {k:"p", t:"**Optional:** the **probability** of simple events can be compared the same way — the greater the fraction or decimal, the more likely the event."}
  ],
  focus:["Multiplying by 2-digit multipliers","Estimating products and quotients","Dividing by 2-digit divisors","Decimals to hundredths","Comparing decimals"],
  terms:[
    {t:"decimal", d:"a number with a decimal point showing parts of a whole", x:"3.75 is a decimal." ,ex:{"q":"Write six tenths as a decimal.","steps":["A decimal is a number with a point between the whole part and the fractional part.","Six tenths is 6/10.","6/10 is written 0.6."],"a":"0.6"}},
    {t:"decimal point", d:"the dot separating whole numbers from parts", x:"Line up the decimal point when adding." ,ex:{"q":"In 3.75, which part is the whole number and which part is the decimal?","steps":["The decimal point separates the whole part from the fractional part.","To the left of the point: 3 (the whole).","To the right of the point: 75 (seventy-five hundredths)."],"a":"Whole part 3; decimal part .75."}},
    {t:"tenths", d:"the first place after the decimal point", x:"In 0.4 there are 4 tenths." ,ex:{"q":"How many tenths are in 2.5?","steps":["The tenths column is the first place after the decimal point.","2.5 = 2 wholes and 5 tenths.","Convert the wholes to tenths: 2 = 20 tenths, so 20 + 5 = 25."],"a":"2.5 = 25 tenths."}},
    {t:"hundredths", d:"the second place after the decimal point", x:"In 0.25 there are 25 hundredths." ,ex:{"q":"How many hundredths are in 0.45?","steps":["The hundredths column is the second place after the decimal point.","0.45 = 45 hundredths.","So 0.45 is 45/100."],"a":"45 hundredths."}},
    {t:"multiplier", d:"the number you multiply by", x:"The multiplier is 24." ,ex:{"q":"In 7 × 6 = 42, which number is the multiplier?","steps":["The multiplier is the number that says how many groups there are.","In 7 × 6 we take 7 sixes: 7 is the multiplier.","6 is the multiplicand and 42 is the product."],"a":"7 is the multiplier."}},
    {t:"estimate", d:"a rough answer used to check", x:"Estimate the product before working." ,ex:{"q":"About how many beans are in a small cup — 5, 20 or 100?","steps":["To estimate means to make a sensible guess before counting exactly.","A small cup is too small for 100 beans and too big for 5.","20 beans is the sensible guess."],"a":"About 20 beans."}},
    {t:"partial product", d:"one part of a long multiplication", x:"Add the partial products together." ,ex:{"q":"Find the partial products of 24 × 13.","steps":["A partial product is each step in multiplying a two-digit number.","Multiply by the ones: 24 × 3 = 72.","Multiply by the tens: 24 × 10 = 240."],"a":"Partial products: 72 and 240 (sum 312)."}},
    {t:"divisor", d:"the number you divide by", x:"The divisor is 12." ,ex:{"q":"In 24 ÷ 6 = 4, which number is the divisor?","steps":["The divisor is the number we divide by.","We are dividing by 6.","24 is the dividend and 4 is the quotient."],"a":"The divisor is 6."}},
    {t:"quotient", d:"the answer in division", x:"Estimate the quotient first." ,ex:{"q":"Find the quotient of 20 ÷ 4.","steps":["The quotient is the answer in division.","Ask: 4 × what = 20?","4 × 5 = 20, so the quotient is 5."],"a":"20 ÷ 4 = 5."}},
    {t:"place holder", d:"a zero used to keep digits in the right place", x:"Write a zero as a place holder." ,ex:{"q":"In 305, what does the 0 do?","steps":["A place holder is a zero that keeps a digit in its place.","Without the 0, 305 would be read as 35.","The 0 holds the tens place: 3 hundreds and 5 ones."],"a":"The 0 is a place holder in the tens column."}}
  ],
  worked:[
    {q:"Multiply 34 × 26.",
     steps:["34 × 6 = 204 (first partial product).","34 × 20 = 680 (second partial product).","Add: 204 + 680 = 884."], a:"884"},
    {q:"Compare 0.7 and 0.65.",
     steps:["Write both with the same number of places: 0.70 and 0.65.","70 hundredths is more than 65 hundredths.","So 0.7 > 0.65."], a:"0.7 > 0.65"}
  ],
  drillLabel:"2-digit multipliers, divisors and decimals",
  drills:[
    {id:"mul_big", p:{aDigits:2,bDigits:2}},
    {id:"mul_big", p:{aDigits:3,bDigits:2}},
    {id:"div_big", p:{dMin:11,dMax:25,qMin:5,qMax:80}},
    {id:"dec_compare"},
    {id:"dec_add", p:{places:2,max:50}},
    {id:"dec_sub", p:{places:2,max:50}},
    {id:"round_num", p:{to:100,max:9999}}
  ],
  word:[
    {q:"A shop sells 45 bags of rice at L$28 each. What is the total?", a:"45 × 28 = L$1 260"},
    {q:"1 260 pencils are packed into boxes of 12. How many boxes?", a:"1 260 ÷ 12 = 105 boxes"},
    {q:"Fatu buys goods costing L$12.75 and L$8.50. What is the total?", a:"12.75 + 8.50 = L$21.25"},
    {q:"A tank holds 96.4 litres and 38.7 litres are used. How much remains?", a:"96.4 − 38.7 = 57.7 litres"},
    {q:"Which is greater, 4.09 or 4.9?", a:"4.9"}
  ],
  challenge:[
    {q:"Estimate 48 × 52 by rounding, then find the exact answer.", a:"Estimate 50 × 50 = 2 500; exact 2 496"},
    {q:"Write 0.6, 0.06 and 0.66 in ascending order.", a:"0.06, 0.6, 0.66"},
    {q:"A pupil wrote 25 × 30 = 75. Explain the error and give the correct answer.", a:"He multiplied only 25 × 3 and forgot the zero. The correct answer is 750."}
  ],
  activities:["Multiply and divide whole numbers by 2-digit multipliers or divisors","Role play as a shopkeeper","Order and distribute items in multiples of 10s, 100s, 1000s","Compare decimals on a place value chart"],
  materials:["Elementary Mathematics for Liberia Book 4","Graph sheets, place value models","Prescribed textbook"],
  assessment:["Written exercise","Role play task","Quiz","Test"]
},
{
  grade:4, period:"V", sem:"Two", icon:"⏱️",
  title:"Measurement",
  subtitle:"Estimating time, elapsed time, customary and metric units, perimeter and area",
  outcomes:["Apply skills of estimation in planning activities","Appreciate the value of skills in estimating lengths, weights and capacity"],
  objectives:["Estimate time","Find elapsed time","Estimate and measure lengths using customary units","Estimate customary units of mass and capacity","Estimate metric units of length, capacity and mass","Find perimeters and areas of squares and rectangles"],
  note:"<b>Elapsed time</b> is how much time has passed: end time − start time. To convert metric units, multiply or divide by 10, 100 or 1000.",
  study:[
    /* ---- course text: Semester Two, Period V — Measurement (pages 46-47) ---- */
    {k:"h3", t:"Estimating Time"},
    {k:"p", t:"**Estimating time** means judging how long an activity will last before we time it. Estimate how long it takes to say the alphabet, to cook rice, to complete a school day, or to become a doctor — then compare with the real time."},
    {k:"rule"},
    {k:"h3", t:"Finding Elapsed Time"},
    {k:"p", t:"**Elapsed time** is the time between a **start time** and an **end time**. Find it with a toy or paper clock, or by adding and subtracting."},
    {k:"num", items:["Class begins at 9:00 and ends at 11:00. Elapsed time: 11:00 − 9:00 = 2 hours.","A trip starts at 8:30 and ends at 10:30: elapsed time is 2 hours.","Break lasts from 10:00 to 10:30: elapsed time is 30 minutes."]},
    {k:"rule"},
    {k:"h3", t:"Customary Units of Length, Mass and Capacity"},
    {k:"p", t:"The **customary (English) units** are inch, foot, yard, ounce, pound, cup, pint, quart and gallon. Estimate and measure the length of a pen, a table, the classroom and a foot, then **convert selected units**: 12 inches = 1 foot, 3 feet = 1 yard."},
    {k:"rule"},
    {k:"h3", t:"Metric Units of Length, Mass and Capacity"},
    {k:"p", t:"The **metric units** are centimetre, metre, kilometre, gram, kilogram, millilitre and litre. Convert subunits of length and weight: 100 cm = 1 m, 1,000 m = 1 km, 1,000 g = 1 kg."},
    {k:"table", head:["Length","Mass","Capacity"], rows:[["10 mm = 1 cm","1,000 g = 1 kg","1,000 ml = 1 L"],["100 cm = 1 m"],["1,000 m = 1 km"]]},
    {k:"p", t:"Perform addition and subtraction of lengths and weights: 2 m 50 cm + 1 m 30 cm = 3 m 80 cm."},
    {k:"rule"},
    {k:"h3", t:"Perimeter of Squares and Rectangles"},
    {k:"p", t:"**Perimeter** is the distance all around a figure. For a square, perimeter = 4 × side. For a rectangle, perimeter = length + width + length + width."},
    {k:"num", items:["Square of side 6 m: 4 × 6 = 24 m.","Rectangle 8 m by 5 m: 8 + 5 + 8 + 5 = 26 m.","Rectangle 7 m by 4 m: 2 × (7 + 4) = 22 m."]},
    {k:"rule"},
    {k:"h3", t:"Area of Squares and Rectangles"},
    {k:"p", t:"**Area** is the surface inside a figure, measured in square units. Area of a square = side × side. Area of a rectangle = length × width."},
    {k:"num", items:["Square of side 5 m: 5 × 5 = 25 m².","Rectangle 9 m by 4 m: 9 × 4 = 36 m²."]},
    {k:"rule"},
    {k:"h3", t:"Finding Volume"},
    {k:"p", t:"**Volume** is the space a solid takes up, measured in cubic units. For a rectangular box, volume = length × width × height."},
    {k:"p", t:"A box 4 m by 3 m by 2 m has volume 4 × 3 × 2 = 24 m³."}
  ],
  focus:["Estimating and finding elapsed time","Customary units","Metric units and conversions","Perimeter","Area of squares and rectangles"],
  terms:[
    {t:"elapsed time", d:"the amount of time that has passed", x:"Find the elapsed time between the two clocks." ,ex:{"q":"A lesson starts at 8:10 and ends at 9:05. How much time has elapsed?","steps":["Elapsed time is the time that passes between two moments.","From 8:10 to 9:00 is 50 minutes.","From 9:00 to 9:05 is 5 minutes; add: 50 + 5 = 55."],"a":"55 minutes elapsed."}},
    {t:"customary unit", d:"units such as inches, feet, pounds and gallons", x:"The foot is a customary unit." ,ex:{"q":"Which is a customary unit of length: the inch, the centimetre or the metre?","steps":["Customary units are the English units: inch, foot, yard, mile.","The inch is a customary unit.","The centimetre and the metre are metric units."],"a":"The inch."}},
    {t:"metric unit", d:"units such as metres, grams and litres", x:"The gram is a metric unit." ,ex:{"q":"Which is a metric unit of weight: the ounce or the gram?","steps":["Metric units are the standard units: gram, kilogram, tonne.","The gram (g) is metric.","The ounce is a customary (English) unit."],"a":"The gram."}},
    {t:"convert", d:"to change from one unit to another", x:"Convert 3 km to metres." ,ex:{"q":"Convert 2 metres to centimetres.","steps":["To convert means to change from one unit to another.","1 metre = 100 centimetres.","2 metres = 2 × 100 = 200 centimetres."],"a":"2 m = 200 cm."}},
    {t:"perimeter", d:"the distance all round a shape", x:"Find the perimeter of the field." ,ex:{"q":"Find the perimeter of a rectangle 6 cm by 4 cm.","steps":["The perimeter is the distance all the way round a shape.","Add all four sides: 6 + 4 + 6 + 4.","6 + 4 + 6 + 4 = 20."],"a":"The perimeter is 20 cm."}},
    {t:"area", d:"the amount of surface covered", x:"Area is measured in square units." ,ex:{"q":"Find the area of a rectangle 5 cm by 3 cm.","steps":["The area is how many square units cover a flat shape.","Area = length × width:  5 × 3.","5 × 3 = 15."],"a":"The area is 15 cm²."}},
    {t:"millimetre", d:"one tenth of a centimetre", x:"Ten millimetres make one centimetre." ,ex:{"q":"How many millimetres are in 3 centimetres?","steps":["A millimetre (mm) is the small metric unit of length.","1 cm = 10 mm.","3 cm = 3 × 10 = 30 mm."],"a":"30 mm."}},
    {t:"kilometre", d:"one thousand metres", x:"The town is 5 kilometres away." ,ex:{"q":"A road is 2.5 km long. How many metres is that?","steps":["A kilometre (km) is the large metric unit of length.","1 km = 1,000 m.","2.5 km = 2,500 m."],"a":"2,500 m."}},
    {t:"capacity", d:"how much a container holds", x:"The capacity is 20 litres." ,ex:{"q":"A bottle holds 2 cups of water. One cup is poured out. How much does it hold now?","steps":["Capacity is how much a container can hold.","The bottle held 2 cups.","After 1 cup is poured out: 2 − 1 = 1 cup."],"a":"It holds 1 cup now."}},
    {t:"mass", d:"the amount of matter in an object, its weight", x:"The mass is 4 kilograms." ,ex:{"q":"An empty basket weighs 200 g. With 800 g of rice in it, what is the total mass?","steps":["Mass is how much matter something contains, measured in grams or kilograms.","Add the masses: 200 + 800 = 1,000 g.","1,000 g = 1 kg."],"a":"1,000 g (1 kg)."}}
  ],
  worked:[
    {q:"A film starts at 3:20 and ends at 5:05. How long is it?",
     steps:["From 3:20 to 5:20 would be 2 hours.","But it ends at 5:05, which is 15 minutes earlier.","2 hours − 15 minutes = 1 hour 45 minutes."], a:"1 hour 45 minutes"},
    {q:"Convert 4 500 grams to kilograms.",
     steps:["1 000 g = 1 kg.","Divide by 1 000: 4 500 ÷ 1 000.","= 4.5 kilograms."], a:"4.5 kg"}
  ],
  drillLabel:"Measurement, conversion and area",
  drills:[
    {id:"elapsed_time"},
    {id:"convert_metric"},
    {id:"convert_customary"},
    {id:"convert_time"},
    {id:"perimeter_rect"},
    {id:"area_rect"},
    {id:"area_square"}
  ],
  word:[
    {q:"A school day runs from 8:00 to 13:30. How long is the school day?", a:"5 hours 30 minutes"},
    {q:"A field is 45 m long and 30 m wide. Find the perimeter and the area.", a:"Perimeter = 150 m; Area = 1 350 m²"},
    {q:"Convert 7 kilometres to metres.", a:"7 000 metres"},
    {q:"A bucket holds 15 litres. How many millilitres is that?", a:"15 000 mL"},
    {q:"How many inches are in 4 feet?", a:"4 × 12 = 48 inches"}
  ],
  challenge:[
    {q:"A square garden has an area of 64 m². Find the length of one side and the perimeter.", a:"Side = 8 m; perimeter = 32 m"},
    {q:"Estimate how long it takes to say the alphabet, then explain why estimating is useful.", a:"About 10–15 seconds. Estimating helps plan activities when exact measurement is not possible."},
    {q:"Which is heavier, 2 500 g or 3 kg? Explain.", a:"3 kg, because 3 kg = 3 000 g which is more than 2 500 g."}
  ],
  activities:["Estimate how long an activity may last","Find elapsed time using a toy clock","Estimate the length of a pen and a table","Find perimeter and area using graph paper"],
  materials:["Elementary Mathematics for Liberia Book 4","Toy or paper clock, rulers, metre stick","Scale, cups, gallons, rope, tapeline"],
  assessment:["Practical estimation task","Written calculation","Quiz","Test"]
},
{
  grade:4, period:"VI", sem:"Two", icon:"📐",
  title:"Geometry and Statistics",
  subtitle:"Lines, angles, polygons, circles, solid figures and reading graphs",
  outcomes:["Appreciate geometry as the foundation of architecture and construction","Use population data to read and interpret bar graphs, line graphs, pie charts, mean, mode and median"],
  objectives:["Identify geometric figures — line, line segment, ray, intersecting and parallel lines","Identify angles as right, less than right, or greater than right; perpendicular lines","Identify triangles, quadrilaterals, pentagons and hexagons as polygons","Identify parts of a circle","Identify solid figures"],
  note:"A <b>polygon</b> is a closed shape with straight sides. Parts of a circle: the <b>radius</b> goes from the centre to the edge, the <b>diameter</b> goes right across through the centre, and diameter = 2 × radius.",
  study:[
    /* ---- course text: Semester Two, Period VI — Geometry and Statistics (pages 48-49) ---- */
    {k:"h3", t:"Geometry Concepts: Points, Lines and Rays"},
    {k:"p", t:"A **point** marks a position. A **line** goes on forever in both directions. A **line segment** has two end points. A **ray** has one end point and goes on forever in one direction. Identify and recognise these simple geometric figures around you — geometry is the foundation of building roads, boxes and balls."},
    {k:"rule"},
    {k:"h3", t:"Intersecting and Parallel Lines"},
    {k:"p", t:"**Intersecting lines** cross each other at a point. **Parallel lines** never meet, however far they are drawn: the rails of a railway or the edges of a page are parallel."},
    {k:"rule"},
    {k:"h3", t:"Angles"},
    {k:"p", t:"An **angle** is formed where two lines meet. A **right angle** is a square corner (like the corner of a page). Angles can be **less than a right angle** or **greater than a right angle**. When two lines meet at right angles they are **perpendicular lines**."},
    {k:"rule"},
    {k:"h3", t:"Polygons"},
    {k:"p", t:"A **polygon** is a closed figure made of straight sides. Name polygons by their number of sides: a **triangle** has 3 sides, a **quadrilateral** has 4, a **pentagon** has 5 and a **hexagon** has 6. Sort polygons according to their sides."},
    {k:"rule"},
    {k:"h3", t:"Parts of a Circle"},
    {k:"p", t:"A **circle** is a round figure. Its parts are the **centre** (middle point), the **radius** (from the centre to the edge), the **diameter** (across the centre, two radii) and the **circumference** (the distance around)."},
    {k:"p", t:"Trace and cut out a paper circle, then fold it in halves to identify the centre and the diameters."},
    {k:"rule"},
    {k:"h3", t:"Solid Figures"},
    {k:"p", t:"**Solid figures** take up space: the **sphere** (ball), **cylinder** (tin), **cone**, **cube** and **rectangular prism** (box). Identify each by its faces, edges and corners."},
    {k:"rule"},
    {k:"h3", t:"Reading Graphs"},
    {k:"p", t:"Read and interpret **bar graphs, line graphs and pie charts**. Collect data about family size and display it on a bar graph, a line graph and a pie chart."},
    {k:"rule"},
    {k:"h3", t:"Mode, Median and Mean"},
    {k:"p", t:"Find the statistics of the data:"},
    {k:"bul", items:["**Mode** — the value that appears most often.", "**Median** — the middle value when the data is in order.", "**Mean (average)** — the total divided by the number of values."]},
    {k:"p", t:"**Worked example:** family sizes 3, 5, 5, 7. Mode = 5. Median: middle of 3, 5, 5, 7 is (5 + 5) ÷ 2 = 5. Mean = (3 + 5 + 5 + 7) ÷ 4 = 20 ÷ 4 = 5. Solve word problems involving drawing diagrams to help."}
  ],
  focus:["Geometry concepts","Angles","Polygons","Parts of a circle","Solid figures","Bar, line and pie graphs"],
  terms:[
    {t:"polygon", d:"a closed shape with straight sides", x:"A hexagon is a polygon." ,ex:{"q":"How many sides does a pentagon have? What is it called in general?","steps":["A polygon is a flat shape with straight sides and no curves.","A pentagon has 5 straight sides.","Any shape with straight sides is a polygon."],"a":"5 sides; it is a polygon."}},
    {t:"parallel lines", d:"lines that never meet however far they go", x:"Railway tracks are parallel lines." ,ex:{"q":"Name two lines in a classroom that are parallel.","steps":["Parallel lines are straight lines that never meet, even when extended.","The top and bottom edges of the blackboard are parallel.","Opposite sides of a rectangle are also parallel."],"a":"The top and bottom edges of the blackboard."}},
    {t:"perpendicular", d:"meeting at a right angle", x:"The walls are perpendicular to the floor." ,ex:{"q":"Which is perpendicular: the hands of a clock at 3 o'clock, or two lines that never meet?","steps":["Perpendicular lines meet at a right angle (90°).","At 3 o'clock the hands form a right angle.","Lines that never meet are parallel, not perpendicular."],"a":"The clock hands at 3 o'clock."}},
    {t:"intersecting lines", d:"lines that cross each other", x:"The two intersecting lines meet at a point." ,ex:{"q":"Draw two lines that cross at one point. What is that point called?","steps":["Intersecting lines are lines that cross each other.","Where they cross is one point, called the point of intersection.","Two straight lines can meet in at most one point."],"a":"They meet at the point of intersection."}},
    {t:"radius", d:"the distance from the centre of a circle to its edge", x:"The radius is half the diameter." ,ex:{"q":"A circle has a diameter of 10 cm. What is its radius?","steps":["The radius is the distance from the centre of a circle to its edge.","The diameter is the radius taken twice:  d = 2r.","r = d ÷ 2 = 10 ÷ 2 = 5."],"a":"The radius is 5 cm."}},
    {t:"diameter", d:"a straight line across a circle through the centre", x:"The diameter is 14 cm." ,ex:{"q":"A circle has a radius of 7 cm. What is its diameter?","steps":["The diameter goes straight across the circle through the centre.","The diameter is the radius taken twice:  d = 2r.","2 × 7 = 14."],"a":"The diameter is 14 cm."}},
    {t:"circumference", d:"the distance all round a circle", x:"Measure the circumference with a string." ,ex:{"q":"A circle has a diameter of 14 cm. Find its circumference (take π = 22/7).","steps":["The circumference is the distance round a circle.","Circumference = π × d.","22/7 × 14 = 22 × 2 = 44."],"a":"The circumference is 44 cm."}},
    {t:"pentagon", d:"a polygon with five sides", x:"A pentagon has five sides." ,ex:{"q":"How many sides and corners does a pentagon have?","steps":["A pentagon is a polygon with 5 straight sides.","Count the sides: 5.","It has 5 corners (vertices) too."],"a":"5 sides and 5 corners."}},
    {t:"hexagon", d:"a polygon with six sides", x:"A hexagon has six sides." ,ex:{"q":"How many sides does a hexagon have?","steps":["A hexagon is a polygon with 6 straight sides.","Count: 6 sides.","It also has 6 corners."],"a":"6 sides."}},
    {t:"solid figure", d:"a three-dimensional shape such as a cube or sphere", x:"A cube is a solid figure." ,ex:{"q":"Name the solid figure that looks like a die.","steps":["A solid figure has length, width and height (it is 3-D).","A die is a cube: 6 square faces.","Other solids: a ball (sphere), a can (cylinder)."],"a":"A cube (a die is a cube)."}}
  ],
  worked:[
    {q:"A circle has a radius of 7 cm. Find the diameter.",
     steps:["Diameter = 2 × radius.","= 2 × 7.","= 14 cm."], a:"14 cm"},
    {q:"Two angles of a triangle are 60° and 70°. Find the third.",
     steps:["The three angles of a triangle add to 180°.","60 + 70 = 130.","180 − 130 = 50°."], a:"50°"}
  ],
  drillLabel:"Geometry and data",
  drills:[
    {id:"angle_type"},
    {id:"triangle_angle"},
    {id:"shape_sides", p:{pool:[["triangle",3],["quadrilateral",4],["pentagon",5],["hexagon",6],["square",4],["rectangle",4]]}},
    {id:"mean", p:{count:5}},
    {id:"median"},
    {id:"mode"},
    {id:"read_graph"}
  ],
  word:[
    {q:"A circle has a diameter of 20 cm. What is the radius?", a:"10 cm"},
    {q:"Enrolment: Monrovia 90, Kakata 70, Zwedru 50. Find the total and the mean.", a:"Total = 210; mean = 70"},
    {q:"Name a solid figure with six square faces.", a:"A cube"},
    {q:"An angle measures 120°. Is it acute, right or obtuse?", a:"Obtuse"},
    {q:"How many sides has a pentagon?", a:"5 sides"}
  ],
  challenge:[
    {q:"Draw two parallel lines and one line crossing both. What do we call the crossing line?", a:"A transversal (an intersecting line)"},
    {q:"The scores are 8, 12, 8, 15, 17. Find the mean, the mode and the median.", a:"Mean = 12; mode = 8; median = 12"},
    {q:"Explain why a circle is not a polygon.", a:"Because a polygon must have straight sides, and a circle is a curve with no straight sides."}
  ],
  activities:["Identify and recognise simple geometric figures","Identify points, lines, rays and line segments","Sort polygons according to sides","Read and interpret bar, line and pie charts"],
  materials:["Elementary Mathematics for Liberia Book 4","Geometry set, straight edge, cut paper","Poster sheets showing graphs"],
  assessment:["Drawing and identification task","Graph interpretation","Quiz","Test"]
},

/* ================= GRADE 5 ================= */
{
  grade:5, period:"I", sem:"One", icon:"⚙️",
  title:"Multiplication and Division of Whole Numbers and Decimals; Number Theory",
  subtitle:"Properties of operations, divisibility rules, primes, LCM and GCF",
  outcomes:["Apply knowledge and skills of operations of whole numbers and decimals to real-life situations","Develop understanding of number theory and fractions"],
  objectives:["Identify properties of operation (commutative, associative, distributive, zero and identity)","Multiply and divide whole numbers and decimals","State the divisibility rules for 1 to 5","Identify prime and composite numbers","Find GCF and LCM","Write equivalent fractions and simplify them"],
  note:"<b>Divisibility rules:</b> by 2 if it ends in an even digit; by 3 if the digit sum is divisible by 3; by 4 if the last two digits divide by 4; by 5 if it ends in 0 or 5.",
  study:[
    /* ---- course text: Semester One, Period I — Multiplication and Division of Whole Numbers and Decimals; Number Theory (pages 50-51) ---- */
    {k:"h3", t:"Properties of Operations"},
    {k:"p", t:"The **properties of operations** make multiplication easier. **Commutative:** the order does not matter — 7 × 8 = 8 × 7. **Associative:** the grouping does not matter — (3 × 4) × 5 = 3 × (4 × 5). **Distributive:** multiply each part — 6 × 12 = 6 × 10 + 6 × 2. **Zero:** any number × 0 = 0. **Identity:** any number × 1 is itself. Show them on graph paper."},
    {k:"rule"},
    {k:"h3", t:"Multiplying and Dividing Whole Numbers and Decimals"},
    {k:"p", t:"Multiply and divide whole numbers and **decimals**. When multiplying decimals, work as with whole numbers, then place the decimal point by counting the total decimal places."},
    {k:"num", items:["Multiply: 3.5 × 4 = 14.0.","Multiply: 2.5 × 1.2 = 3.00 (25 × 12 = 300, two decimal places).","Divide: 7.5 ÷ 5 = 1.5.","Divide: 4.8 ÷ 0.4 = 12 (make the divisor a whole number: 48 ÷ 4)."]},
    {k:"rule"},
    {k:"h3", t:"Divisibility Rules"},
    {k:"p", t:"**Divisibility rules** are quick tests for whether one number divides another exactly."},
    {k:"table", head:["Divisible by","Rule","Example"], rows:[["2","The last digit is even (0, 2, 4, 6, 8)","348 is divisible by 2"],["3","The sum of the digits is divisible by 3","345: 3 + 4 + 5 = 12, so yes"],["4","The last two digits form a number divisible by 4","1,236 is divisible by 4"],["5","The last digit is 0 or 5","2,470 is divisible by 5"]]},
    {k:"rule"},
    {k:"h3", t:"Prime and Composite Numbers"},
    {k:"p", t:"A **prime number** has exactly two factors, 1 and itself: 2, 3, 5, 7, 11, 13 ... A **composite number** has more than two factors: 4, 6, 8, 9, 10 ... Use the **sieve of Eratosthenes** to identify the prime and composite numbers up to 50."},
    {k:"rule"},
    {k:"h3", t:"GCF and LCM"},
    {k:"p", t:"The **GCF** (greatest common factor) is the largest factor shared by numbers: the GCF of 12 and 18 is 6. The **LCM** (least common multiple) is the smallest number they both divide into: the LCM of 6 and 8 is 24."},
    {k:"rule"},
    {k:"h3", t:"Equivalent Fractions"},
    {k:"p", t:"**Equivalent fractions** have the same value with different denominators: 1/2 = 2/4 = 3/6 = 4/8. Fold square paper to show equivalent fractions: folding a strip in half, then in fourths, shows 1/2 = 2/4."},
    {k:"rule"},
    {k:"h3", t:"Simplifying Fractions"},
    {k:"p", t:"**Simplify** a fraction by dividing the numerator and denominator by their GCF, writing the fraction in lowest terms: 6/8 = 3/4 (divide by 2) and 12/18 = 2/3 (divide by 6). Write factors for parts of a set to check your work."}
  ],
  focus:["Properties of multiplication","Multiplying and dividing whole numbers and decimals","Divisibility rules","Prime and composite numbers","LCM and GCF","Equivalent and simplified fractions"],
  terms:[
    {t:"divisibility rule", d:"a quick test to see if one number divides another exactly", x:"The divisibility rule for 5 checks the last digit." ,ex:{"q":"Use a divisibility rule to decide whether 342 is divisible by 3.","steps":["A divisibility rule tells whether one number divides another exactly, without dividing.","For 3: add the digits: 3 + 4 + 2 = 9.","9 is divisible by 3, so 342 is divisible by 3."],"a":"Yes — 3 + 4 + 2 = 9, which is divisible by 3 (342 ÷ 3 = 114)."}},
    {t:"prime number", d:"a number with exactly two factors, 1 and itself", x:"13 is a prime number." ,ex:{"q":"Is 13 a prime number? Give your reason.","steps":["A prime number has exactly two factors: 1 and itself.","Try dividing 13: only 1 and 13 divide into it exactly.","So 13 is prime."],"a":"Yes — 13 has exactly two factors: 1 and 13."}},
    {t:"composite number", d:"a number with more than two factors", x:"15 is a composite number." ,ex:{"q":"Is 12 a composite number? Write its factors.","steps":["A composite number has more than two factors.","Factors of 12: 1, 2, 3, 4, 6, 12.","That is 6 factors, so 12 is composite."],"a":"Yes — 12 = 2 × 2 × 3 (factors 1, 2, 3, 4, 6, 12)."}},
    {t:"prime factor", d:"a factor that is itself a prime number", x:"The prime factors of 12 are 2 and 3." ,ex:{"q":"Write the prime factors of 12.","steps":["A prime factor is a factor of a number that is itself prime.","12 = 2 × 6, and 6 = 2 × 3.","So 12 = 2 × 2 × 3; the prime factors are 2 and 3."],"a":"The prime factors of 12 are 2 and 3 (12 = 2 × 2 × 3)."}},
    {t:"commutative property", d:"changing the order does not change the answer", x:"The commutative property applies to × and +." ,ex:{"q":"Use the commutative property of multiplication to check 6 × 7 = 7 × 6.","steps":["The commutative property says the order of the factors does not change the product.","6 × 7 = 42.","7 × 6 = 42, the same product."],"a":"6 × 7 = 7 × 6 = 42."}},
    {t:"associative property", d:"changing the grouping does not change the answer", x:"Use the associative property to group numbers." ,ex:{"q":"Use the associative property of multiplication to work 2 × (3 × 5).","steps":["The associative property says the grouping of the factors does not change the product.","3 × 5 = 15, so 2 × (3 × 5) = 2 × 15 = 30.","Check by regrouping: (2 × 3) × 5 = 6 × 5 = 30."],"a":"2 × (3 × 5) = (2 × 3) × 5 = 30."}},
    {t:"distributive property", d:"multiplying a sum by multiplying each part", x:"The distributive property expands brackets." ,ex:{"q":"Use the distributive property to work 6 × 9.","steps":["The distributive property: a × (b + c) = (a × b) + (a × c).","Split 9 into 5 + 4:  6 × (5 + 4).","6 × 5 = 30 and 6 × 4 = 24; add: 30 + 24 = 54."],"a":"6 × 9 = 54."}},
    {t:"GCF", d:"the greatest common factor", x:"The GCF of 24 and 36 is 12." ,ex:{"q":"Find the GCF of 12 and 18.","steps":["The GCF is the greatest number that divides both numbers.","Factors of 12: 1, 2, 3, 4, 6, 12.  Factors of 18: 1, 2, 3, 6, 9, 18.","The common factors are 1, 2, 3, 6; the greatest is 6."],"a":"GCF = 6."}},
    {t:"LCM", d:"the lowest common multiple", x:"The LCM of 6 and 8 is 24." ,ex:{"q":"Find the LCM of 4 and 6.","steps":["The LCM is the smallest number that both numbers divide into.","Multiples of 4: 4, 8, 12, 16, 20, 24, …","Multiples of 6: 6, 12, 18, 24, … The first common one is 12."],"a":"LCM = 12."}},
    {t:"sieve", d:"a method of crossing out multiples to find primes", x:"Use the sieve to find primes to 50." ,ex:{"q":"Use the Sieve of Eratosthenes to find the primes below 10.","steps":["Write the numbers 2 to 9 in a row.","Cross out the multiples of 2 (4, 6, 8), then the multiples of 3 (9).","What is left uncrossed: 2, 3, 5, 7."],"a":"The primes below 10 are 2, 3, 5, 7."}}
  ],
  worked:[
    {q:"Is 138 divisible by 3?",
     steps:["Add the digits: 1 + 3 + 8 = 12.","12 is divisible by 3.","So 138 is divisible by 3. (138 ÷ 3 = 46)"], a:"Yes — 138 ÷ 3 = 46"},
    {q:"Find the LCM of 6 and 8.",
     steps:["Multiples of 6: 6, 12, 18, 24, 30...","Multiples of 8: 8, 16, 24, 32...","The smallest common one is 24."], a:"24"}
  ],
  drillLabel:"Operations, divisibility and number theory",
  drills:[
    {id:"divisibility"},
    {id:"prime_check", p:{max:60}},
    {id:"prime_factor"},
    {id:"gcf"},
    {id:"lcm_q", p:{max:12}},
    {id:"mul_big", p:{aDigits:3,bDigits:2}},
    {id:"div_big", p:{dMin:11,dMax:25,qMin:5,qMax:60}},
    {id:"dec_mul"},
    {id:"property_fill"}
  ],
  word:[
    {q:"A market sells 128 bags at L$45 each. What is the total takings?", a:"128 × 45 = L$5 760"},
    {q:"Is 4 725 divisible by 5? How do you know?", a:"Yes — it ends in 5."},
    {q:"Two lorries leave every 12 and 18 minutes. After how many minutes do they leave together?", a:"LCM of 12 and 18 = 36 minutes"},
    {q:"Write 84 as a product of its prime factors.", a:"2 × 2 × 3 × 7"},
    {q:"3.5 kg of rice costs L$70. What is the cost of 1 kg?", a:"70 ÷ 3.5 = L$20"}
  ],
  challenge:[
    {q:"Use the sieve method to list the prime numbers between 1 and 30.", a:"2, 3, 5, 7, 11, 13, 17, 19, 23, 29"},
    {q:"Two numbers have GCF 6 and LCM 36. One number is 12. Find the other.", a:"18  (because 12 × 18 = 216 = 6 × 36)"},
    {q:"Is 1 a prime number? Explain your answer.", a:"No — a prime must have exactly two different factors, but 1 has only one factor."}
  ],
  activities:["Use graph paper to show multiplication properties","Multiply and divide whole numbers and decimals","Use the sieve of Eratosthenes to find primes up to 50","Write equivalent fractions"],
  materials:["Elementary Mathematics for Liberia Book 5","Number chart to 100","Graph paper, prescribed textbook"],
  assessment:["Written exercise","Sieve activity","Quiz","Test"]
},
{
  grade:5, period:"II", sem:"One", icon:"🔷",
  title:"Different Kinds of Numbers",
  subtitle:"Prime factors, square numbers, rounding, estimation and arrays",
  outcomes:["Demonstrate skills in the use of different kinds of numbers and appreciate their importance in real life"],
  objectives:["Identify prime numbers, even and odd numbers","Identify and work with square numbers","Determine prime factors of numbers","Identify and state rules for rounding off numbers","Identify and apply estimation techniques","Use arrays to solve problems"],
  note:"A <b>square number</b> is the result of multiplying a number by itself: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100. It can be shown as a square <b>array</b> of dots.",
  study:[
    /* ---- course text: Semester One, Period II — Different Kinds of Numbers (pages 52-53) ---- */
    {k:"h3", t:"Prime, Even and Odd Numbers"},
    {k:"p", t:"**Even numbers** are divisible by 2 (0, 2, 4, 6, 8 endings); **odd numbers** are not (1, 3, 5, 7, 9 endings). A **prime number** has exactly two factors: 2, 3, 5, 7, 11, 13 ... Discuss and identify these numbers in groups."},
    {k:"rule"},
    {k:"h3", t:"Square Numbers"},
    {k:"p", t:"A **square number** is the product of a number multiplied by itself. Multiply 1, 2, 3, ..., 12 by themselves and find their products."},
    {k:"table", head:["Number","Square","Number","Square"], rows:[["1","1","7","49"],["2","4","8","64"],["3","9","9","81"],["4","16","10","100"],["5","25","11","121"],["6","36","12","144"]]},
    {k:"rule"},
    {k:"h3", t:"Prime Factors"},
    {k:"p", t:"**Prime factors** are the prime numbers that multiply to give a number. Find the prime factors of numbers not more than two digits by dividing by primes: 84 = 2 × 2 × 3 × 7."},
    {k:"num", items:["Find the prime factors of 48.","48 ÷ 2 = 24; 24 ÷ 2 = 12; 12 ÷ 2 = 6; 6 ÷ 2 = 3; 3 is prime.","48 = 2 × 2 × 2 × 2 × 3."]},
    {k:"rule"},
    {k:"h3", t:"Rounding Numbers"},
    {k:"p", t:"**Rounding** replaces a number by a nearby, easier number. State and use the rules for rounding off to the nearest **10, 100 and 1000**."},
    {k:"bul", items:["To the nearest 10: 47 rounds to 50 (ones digit 7 ≥ 5).", "To the nearest 100: 347 rounds to 300 (tens digit 4 < 5).", "To the nearest 1000: 3,650 rounds to 4,000 (hundreds digit 6 ≥ 5)."]},
    {k:"rule"},
    {k:"h3", t:"Estimation"},
    {k:"p", t:"**Estimation** finds an approximate answer quickly by rounding first. Estimate the products and quotients of two-digit numbers: 38 × 21 is about 40 × 20 = 800, and 391 ÷ 18 is about 400 ÷ 20 = 20."},
    {k:"rule"},
    {k:"h3", t:"Arrays"},
    {k:"p", t:"An **array** arranges objects in equal rows and columns. The array shows multiplication: 3 rows of 4 dots is 3 × 4 = 12. Use arrays of numbers to find the products of two numbers, and to see square numbers as squares of dots."},
    {k:"rule"},
    {k:"h3", t:"Square Roots"},
    {k:"p", t:"The **square root** of a number is the number which, multiplied by itself, gives the original number: √25 = 5 because 5 × 5 = 25. Solve problems using square roots: √36 = 6, √81 = 9, √100 = 10."}
  ],
  focus:["Prime factors","Even and odd numbers","Square numbers","Rounding off","Estimation","Arrays"],
  terms:[
    {t:"square number", d:"the product of a number multiplied by itself", x:"36 is a square number." ,ex:{"q":"Why is 36 a square number?","steps":["A square number is the product of a number multiplied by itself.","6 × 6 = 36.","So 36 is the square of 6, written 6²."],"a":"36 is a square number because 6 × 6 = 36."}},
    {t:"square root", d:"the number that was multiplied by itself", x:"The square root of 49 is 7." ,ex:{"q":"Find the square root of 81.","steps":["The square root of a number is the number that, squared, gives it.","Ask: what × itself = 81?","9 × 9 = 81, so √81 = 9."],"a":"√81 = 9."}},
    {t:"array", d:"objects arranged in equal rows and columns", x:"Draw an array of 4 rows of 5." ,ex:{"q":"Show 3 × 4 as an array and write the total.","steps":["An array is rows and columns of equal objects.","Make 3 rows of 4:  4 + 4 + 4.","Count all the objects: 12."],"a":"3 rows of 4 make 12 (3 × 4 = 12)."}},
    {t:"prime factorisation", d:"writing a number as a product of primes", x:"The prime factorisation of 30 is 2 × 3 × 5." ,ex:{"q":"Write 36 as a product of prime factors.","steps":["Prime factorisation writes a number as a product of primes only.","36 = 4 × 9 = (2 × 2) × (3 × 3).","So 36 = 2 × 2 × 3 × 3."],"a":"36 = 2 × 2 × 3 × 3 (or 2² × 3²)."}},
    {t:"estimation", d:"finding an approximate answer", x:"Use estimation to check your work." ,ex:{"q":"Estimate 48 × 51, then check with the exact answer.","steps":["Estimate by rounding each number: 48 ≈ 50 and 51 ≈ 50.","50 × 50 = 2,500 — the estimate.","Exact: 48 × 51 = 2,448, very close to 2,500."],"a":"Estimate ≈ 2,500; exact = 2,448."}},
    {t:"round off", d:"to give an approximate value", x:"Round off 3 468 to the nearest hundred." ,ex:{"q":"Round off 3,862 to the nearest hundred.","steps":["Round off means to give an approximate value to a stated place.","The hundreds digit is 8; the next digit (tens) is 6.","Since 6 ≥ 5, round up: 3,862 ≈ 3,900."],"a":"3,862 rounds off to 3,900."}},
    {t:"exponent", d:"the small number showing how many times to multiply", x:"In 5² the exponent is 2." ,ex:{"q":"Write 5 × 5 × 5 using an exponent and find its value.","steps":["An exponent (index) says how many times the base is multiplied by itself.","5 × 5 × 5 = 5³ (5 to the power 3).","5 × 5 = 25; 25 × 5 = 125."],"a":"5³ = 125."}},
    {t:"perfect square", d:"a whole number that is the square of a whole number", x:"81 is a perfect square." ,ex:{"q":"Is 64 a perfect square? Give your reason.","steps":["A perfect square is a number whose square root is a whole number.","Ask: what whole number × itself = 64?","8 × 8 = 64, so √64 = 8."],"a":"Yes — 8 × 8 = 64."}},
    {t:"even number", d:"a number divisible by 2", x:"24 is an even number." ,ex:{"q":"Is 138 an even number? How can you tell?","steps":["An even number is divisible by 2.","The last digit of 138 is 8, and 8 is even.","138 ÷ 2 = 69 exactly."],"a":"Yes — its last digit is even (138 ÷ 2 = 69)."}},
    {t:"odd number", d:"a number not divisible by 2", x:"25 is an odd number." ,ex:{"q":"Is 247 an odd number? How can you tell?","steps":["An odd number is not divisible by 2.","The last digit of 247 is 7, and 7 is odd.","247 ÷ 2 = 123 with remainder 1."],"a":"Yes — its last digit is odd (247 ÷ 2 = 123 r 1)."}}
  ],
  worked:[
    {q:"Find 12².",
     steps:["12² means 12 × 12.","12 × 12 = 144.","So 12² = 144."], a:"144"},
    {q:"Write 60 as a product of prime factors.",
     steps:["60 ÷ 2 = 30; 30 ÷ 2 = 15.","15 ÷ 3 = 5; 5 ÷ 5 = 1.","So 60 = 2 × 2 × 3 × 5."], a:"2 × 2 × 3 × 5"}
  ],
  drillLabel:"Square numbers, primes and rounding",
  drills:[
    {id:"square_num", p:{max:15}},
    {id:"square_root", p:{max:15}},
    {id:"prime_factor"},
    {id:"prime_check", p:{max:60}},
    {id:"even_odd", p:{max:200}},
    {id:"round_num", p:{to:100,max:9999}},
    {id:"round_num", p:{to:1000,max:99999}}
  ],
  word:[
    {q:"A square garden has 9 rows of 9 plants. How many plants altogether?", a:"9 × 9 = 81 plants"},
    {q:"A square tile floor has an area of 100 tiles. How many tiles along one side?", a:"√100 = 10 tiles"},
    {q:"Round 12 478 to the nearest thousand.", a:"12 000"},
    {q:"Write 45 as a product of prime factors.", a:"3 × 3 × 5"},
    {q:"An array has 6 rows and 7 columns. How many items?", a:"6 × 7 = 42"}
  ],
  challenge:[
    {q:"List the first ten square numbers.", a:"1, 4, 9, 16, 25, 36, 49, 64, 81, 100"},
    {q:"Estimate 298 × 31 and then find the exact answer.", a:"Estimate 300 × 30 = 9 000; exact 9 238"},
    {q:"Why can a square number never end in 2, 3, 7 or 8?", a:"Because no digit multiplied by itself ends in those digits — the last digits of squares are only 0, 1, 4, 5, 6 or 9."}
  ],
  activities:["Work in small groups to discuss prime factors","Multiply 1 to 12 by themselves and record the products","Find prime factors of 2-digit numbers","Round off numbers and estimate answers"],
  materials:["Elementary Mathematics for Liberia Book 5","Square paper","Number chart"],
  assessment:["Written exercise","Group discussion","Quiz","Test"]
},
{
  grade:5, period:"III", sem:"One", icon:"➗",
  title:"Addition and Subtraction of Fractions and Mixed Numbers",
  subtitle:"Like and unlike denominators, multiplying and dividing fractions, fractions and decimals",
  outcomes:["Apply the skills and concepts of operations of fractions to daily-life situations","Change fractions to decimals and vice versa"],
  objectives:["Add and subtract fractions and mixed numbers","Multiply and divide fractions","Solve word problems involving fractions","Convert fractions to decimals and vice versa","Compare and order fractions"],
  note:"To add <b>unlike fractions</b>, first find the <b>LCD</b> (lowest common denominator), change both fractions, then add the numerators. To <b>divide</b> by a fraction, invert the divisor and multiply.",
  study:[
    /* ---- course text: Semester One, Period III — Addition and Subtraction of Fractions and Mixed Numbers (pages 54-56) ---- */
    {k:"h3", t:"Adding Fractions with Like Denominators"},
    {k:"p", t:"To add fractions with the **same denominator**, add the numerators and keep the denominator. Use fraction strips to see that 2/5 + 1/5 = 3/5."},
    {k:"rule"},
    {k:"h3", t:"Subtracting Fractions with Like Denominators"},
    {k:"p", t:"Subtract the numerators and keep the denominator: 7/9 − 2/9 = 5/9, and 3/4 − 1/4 = 2/4 = 1/2."},
    {k:"rule"},
    {k:"h3", t:"Adding and Subtracting Mixed Numbers with Like Denominators"},
    {k:"p", t:"A **mixed number** has a whole part and a fraction part. Add the fractions, then add the whole numbers; subtract in the same order."},
    {k:"num", items:["Add 2 1/4 + 1 2/4.","Fractions: 1/4 + 2/4 = 3/4.","Wholes: 2 + 1 = 3.","Answer: 3 3/4."]},
    {k:"rule"},
    {k:"h3", t:"Adding and Subtracting Fractions with Unlike Denominators"},
    {k:"p", t:"For **unlike denominators**, first change both fractions to equivalent fractions with the **LCM** as the common denominator, then add or subtract."},
    {k:"num", items:["Add 1/2 + 1/3.","LCM of 2 and 3 is 6.","1/2 = 3/6 and 1/3 = 2/6.","3/6 + 2/6 = 5/6."]},
    {k:"p", t:"Make flash cards with pairs of numbers that are potential denominators, and use them to show the LCM."},
    {k:"rule"},
    {k:"h3", t:"Multiplying Fractions and Mixed Numbers"},
    {k:"p", t:"To multiply fractions, multiply the numerators and multiply the denominators, cancelling first where possible: 2/3 × 3/4 = 6/12 = 1/2. Use counters to illustrate the concept."},
    {k:"rule"},
    {k:"h3", t:"Dividing Fractions"},
    {k:"p", t:"To divide by a fraction, **invert the second fraction and multiply** (multiply by its reciprocal): 3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 1 1/2."},
    {k:"rule"},
    {k:"h3", t:"Comparing and Ordering Fractions"},
    {k:"p", t:"Compare fractions by changing them to a common denominator, then order from smallest to largest: 1/2, 3/4, 5/8 become 4/8, 5/8, 6/8, so 1/2 < 5/8 < 3/4."},
    {k:"rule"},
    {k:"h3", t:"Converting Fractions to Decimals and Vice Versa"},
    {k:"p", t:"A fraction and a decimal can name the same amount. Divide the numerator by the denominator to change a fraction to a decimal: 1/2 = 0.5, 3/4 = 0.75, 1/4 = 0.25. Use a base-10 fraction model to see how fractions and decimals are related."},
    {k:"rule"},
    {k:"h3", t:"Word Problems with Fractions"},
    {k:"p", t:"**Worked example:** Pastor Pewee walked 3 2/8 km to a village and 7 3/8 km to the next village. What was the total distance?"},
    {k:"num", items:["Add the fractions: 2/8 + 3/8 = 5/8.","Add the whole numbers: 3 + 7 = 10.","Add the result: 10 5/8.","Pastor Pewee walked a total distance of 10 5/8 km."]}
  ],
  focus:["Adding and subtracting like fractions","Adding and subtracting unlike fractions","Multiplying fractions and mixed numbers","Dividing fractions","Converting fractions to decimals"],
  terms:[
    {t:"LCD", d:"the lowest common denominator of two fractions", x:"The LCD of 1/3 and 1/4 is 12." ,ex:{"q":"Find the LCD of 1/4 and 1/6, then add the fractions.","steps":["The LCD is the least common denominator — the smallest number both denominators divide into.","Multiples of 4: 4, 8, 12; multiples of 6: 6, 12. LCD = 12.","1/4 = 3/12 and 1/6 = 2/12; add: 3/12 + 2/12 = 5/12."],"a":"LCD = 12;  1/4 + 1/6 = 5/12."}},
    {t:"mixed number", d:"a whole number with a fraction", x:"3 1/2 is a mixed number." ,ex:{"q":"Write 7/3 as a mixed number.","steps":["A mixed number is a whole number together with a fraction.","Divide: 7 ÷ 3 = 2 remainder 1.","So 7/3 = 2 wholes and 1/3."],"a":"7/3 = 2 1/3."}},
    {t:"improper fraction", d:"a fraction with the numerator larger than the denominator", x:"9/4 is an improper fraction." ,ex:{"q":"Is 7/4 an improper fraction? Give your reason.","steps":["An improper fraction has a numerator bigger than the denominator.","Here 7 > 4.","So 7/4 is an improper fraction."],"a":"Yes — 7 > 4, so it is an improper fraction."}},
    {t:"reciprocal", d:"a fraction turned upside down", x:"The reciprocal of 2/3 is 3/2." ,ex:{"q":"What is the reciprocal of 5?","steps":["The reciprocal of a number is 1 divided by that number.","The reciprocal of 5 is 1/5.","Check: 5 × 1/5 = 1."],"a":"The reciprocal of 5 is 1/5."}},
    {t:"invert", d:"to turn a fraction upside down", x:"Invert the divisor and multiply." ,ex:{"q":"Invert the fraction 3/7 and check it against the original.","steps":["To invert a fraction is to swap its top and bottom.","Invert 3/7: the 3 and 7 swap places → 7/3.","Check: 3/7 × 7/3 = 1."],"a":"The inverted fraction (reciprocal) of 3/7 is 7/3."}},
    {t:"unlike fractions", d:"fractions with different denominators", x:"1/2 and 1/5 are unlike fractions." ,ex:{"q":"Are 1/2 and 1/3 unlike fractions? Give your reason.","steps":["Unlike fractions have different denominators.","One has denominator 2, the other has denominator 3.","The denominators differ, so they are unlike fractions."],"a":"Yes — 2 and 3 are different denominators."}},
    {t:"lowest terms", d:"a fraction that cannot be simplified further", x:"Give the answer in lowest terms." ,ex:{"q":"Write 6/8 in its lowest terms.","steps":["Lowest terms means the smallest numbers that give the same fraction.","The greatest number that divides both 6 and 8 is 2.","Divide top and bottom by 2:  (6 ÷ 2)/(8 ÷ 2) = 3/4."],"a":"6/8 = 3/4."}},
    {t:"convert", d:"to change from one form to another", x:"Convert 3/4 to a decimal." ,ex:{"q":"Convert 2 metres to centimetres.","steps":["To convert means to change from one unit to another.","1 metre = 100 centimetres.","2 metres = 2 × 100 = 200 centimetres."],"a":"2 m = 200 cm."}},
    {t:"numerator", d:"the top number in a fraction", x:"Add the numerators only." ,ex:{"q":"In the fraction 3/4, which number is the numerator?","steps":["The numerator is the top number of a fraction.","In 3/4, the number on top is 3.","The numerator counts how many parts we have."],"a":"The numerator is 3."}},
    {t:"denominator", d:"the bottom number in a fraction", x:"Keep the denominator the same." ,ex:{"q":"In the fraction 3/4, which number is the denominator?","steps":["The denominator is the bottom number of a fraction.","In 3/4, the number at the bottom is 4.","The denominator counts how many equal parts the whole is cut into."],"a":"The denominator is 4."}}
  ],
  worked:[
    {q:"Add 2/3 + 1/4.",
     steps:["LCD of 3 and 4 is 12.","2/3 = 8/12 and 1/4 = 3/12.","8/12 + 3/12 = 11/12."], a:"11/12"},
    {q:"Divide 3/4 ÷ 1/2.",
     steps:["Invert the divisor: 1/2 becomes 2/1.","Multiply: 3/4 × 2/1 = 6/4.","Simplify: 6/4 = 1 1/2."], a:"1 1/2"}
  ],
  drillLabel:"Operations with fractions",
  drills:[
    {id:"frac_add_unlike", p:{dens:[2,3,4,5,6,8]}},
    {id:"frac_sub_unlike", p:{dens:[2,3,4,5,6,8]}},
    {id:"frac_mul", p:{dens:[2,3,4,5,6,8]}},
    {id:"frac_div", p:{dens:[2,3,4,5,6]}},
    {id:"mixed_add", p:{dens:[3,4,5,6,8]}},
    {id:"frac_to_dec"},
    {id:"dec_to_frac"},
    {id:"frac_compare", p:{dens:[2,3,4,5,6,8,10]}}
  ],
  word:[
    {q:"Musu walks 2/5 km to school and 1/3 km to the market. How far in total?", a:"2/5 + 1/3 = 11/15 km"},
    {q:"A tank is 3/4 full. If 1/2 of the whole tank is used, what fraction remains?", a:"3/4 − 1/2 = 1/4"},
    {q:"A cloth of 3/4 metre is cut into pieces of 1/8 metre. How many pieces?", a:"3/4 ÷ 1/8 = 6 pieces"},
    {q:"Find 2/3 of 4 1/2 kg of rice.", a:"2/3 × 9/2 = 3 kg"},
    {q:"Change 7/8 to a decimal.", a:"0.875"}
  ],
  challenge:[
    {q:"Arrange in ascending order: 2/3, 3/5, 7/10.", a:"3/5 (0.6), 2/3 (0.667), 7/10 (0.7)"},
    {q:"A pupil wrote 1/2 + 1/3 = 2/5. Explain the error and give the correct answer.", a:"He added numerators and denominators. Correct: LCD 6, so 3/6 + 2/6 = 5/6."},
    {q:"Half of a number is 3/4. What is the number?", a:"3/4 ÷ 1/2 = 3/2 = 1 1/2"}
  ],
  activities:["Use strips to add and subtract fractions with the same denominator","Make flash cards with potential denominators","Use flash card numbers to show the LCM","Convert fractions to decimals in pairs"],
  materials:["Elementary Mathematics for Liberia Book 5","Fraction strips","Flash cards"],
  assessment:["Written exercise","Practical with fraction strips","Quiz","Test"]
},
{
  grade:5, period:"IV", sem:"Two", icon:"📊",
  title:"Measurement",
  subtitle:"Elapsed time, metric conversions, perimeter, area of triangles and parallelograms, temperature",
  outcomes:["Apply skills and concepts of measurement in homes, clinics and industries"],
  objectives:["Find elapsed time","Estimate length, weight and capacity","Add and subtract customary units","Convert selected metric units (mm, cm, m, km, g, kg, mL, L)","Find perimeters of polygons","Find areas of parallelograms and triangles"],
  note:"<b>Area of a triangle = ½ × base × height.</b> <b>Area of a parallelogram = base × height.</b> Always write the unit — cm², m² — after an area answer.",
  study:[
    /* ---- course text: Semester Two, Period IV — Measurement (pages 57-58) ---- */
    {k:"h3", t:"Finding Elapsed Time"},
    {k:"p", t:"**Elapsed time** is the time from a start to an end. Use a cut-out paper clock to find it: from 9:15 to 10:45 is 1 hour 30 minutes."},
    {k:"rule"},
    {k:"h3", t:"Estimating Length, Weight and Capacity"},
    {k:"p", t:"**Estimate** the length, weight and capacity of objects using selected units of measure, then measure to check. Estimate the lengths of objects in the classroom, the weights of books and stones, and the capacities of bottles and cups."},
    {k:"rule"},
    {k:"h3", t:"Adding and Subtracting Customary Units"},
    {k:"p", t:"Add and subtract **customary (English) units** of measure: 5 ft 8 in + 2 ft 6 in = 7 ft 14 in = 8 ft 2 in (14 inches = 1 foot 2 inches)."},
    {k:"rule"},
    {k:"h3", t:"Converting Metric Units"},
    {k:"p", t:"Convert selected units in the **metric system**:"},
    {k:"table", head:["Length","Weight","Capacity"], rows:[["10 mm = 1 cm","1,000 g = 1 kg","1,000 ml = 1 L"],["100 cm = 1 m"],["1,000 m = 1 km"]]},
    {k:"num", items:["Convert 3 m to cm: 3 × 100 = 300 cm.","Convert 2 km to m: 2 × 1,000 = 2,000 m.","Convert 2,500 g to kg: 2,500 ÷ 1,000 = 2.5 kg.","Convert 4 L to ml: 4 × 1,000 = 4,000 ml."]},
    {k:"rule"},
    {k:"h3", t:"Perimeter of Polygons"},
    {k:"p", t:"The **perimeter** of a polygon is the total distance around it — add all its sides. Find perimeters on graph paper: a rectangle 7 m by 4 m has perimeter 7 + 4 + 7 + 4 = 22 m."},
    {k:"rule"},
    {k:"h3", t:"Area of Parallelograms and Triangles"},
    {k:"p", t:"The **area of a parallelogram** = base × height. The **area of a triangle** = half of base × height (or base × height ÷ 2)."},
    {k:"num", items:["Parallelogram, base 8 m, height 5 m: 8 × 5 = 40 m².","Triangle, base 10 m, height 6 m: 10 × 6 ÷ 2 = 30 m².","Triangle, base 8 m, height 4 m: 8 × 4 ÷ 2 = 16 m²."]},
    {k:"rule"},
    {k:"h3", t:"Volume of Prisms"},
    {k:"p", t:"The **volume** of a prism = area of the base × height. For a rectangular prism, volume = length × width × height. Find the volume of local containers using number cubes: a box 5 cm by 4 cm by 3 cm holds 5 × 4 × 3 = 60 cubes."},
    {k:"rule"},
    {k:"h3", t:"Estimating Temperature"},
    {k:"p", t:"**Temperature** is how hot or cold something is, measured on the **Fahrenheit (°F)** and **Centigrade/Celsius (°C)** scales. Use benchmarks to estimate:"},
    {k:"bul", items:["Water freezes at 0°C = 32°F.", "Water boils at 100°C = 212°F.", "Normal body temperature is about 37°C = 98.6°F.", "A hot day is about 35°C; a cool day about 20°C."]}
  ],
  focus:["Elapsed time","Estimating units of measure","Metric conversions","Perimeter of polygons","Area of triangles and parallelograms","Temperature scales"],
  terms:[
    {t:"parallelogram", d:"a quadrilateral with opposite sides parallel", x:"The area of a parallelogram is base × height." ,ex:{"q":"Name two properties of a parallelogram.","steps":["A parallelogram is a quadrilateral with both pairs of opposite sides parallel.","Property 1: opposite sides are equal in length.","Property 2: opposite angles are equal."],"a":"Opposite sides are parallel and equal; opposite angles are equal."}},
    {t:"base", d:"the side of a shape used with the height", x:"The base of the triangle is 10 cm." ,ex:{"q":"A parallelogram has a base of 8 cm and a height of 3 cm. Find its area.","steps":["The base is the side of a shape used together with the height.","Area of a parallelogram = base × height.","8 × 3 = 24."],"a":"Area = 24 cm²."}},
    {t:"height", d:"the perpendicular distance from base to top", x:"Measure the height at a right angle to the base." ,ex:{"q":"A palm tree is 6 m tall and a neem tree is 4 m tall. How much taller is the palm tree?","steps":["Height is how tall something is.","Subtract the shorter from the taller: 6 − 4 = 2.","The palm tree is taller by 2 m."],"a":"2 m taller."}},
    {t:"polygon", d:"a closed shape with straight sides", x:"Find the perimeter of the polygon." ,ex:{"q":"How many sides does a pentagon have? What is it called in general?","steps":["A polygon is a flat shape with straight sides and no curves.","A pentagon has 5 straight sides.","Any shape with straight sides is a polygon."],"a":"5 sides; it is a polygon."}},
    {t:"Fahrenheit", d:"a temperature scale where water boils at 212°", x:"Read the temperature in Fahrenheit." ,ex:{"q":"Water boils at 212°F. What is that on the Celsius scale?","steps":["The Fahrenheit and Celsius scales measure temperature differently.","Formula: C = (F − 32) ÷ 1.8.","(212 − 32) ÷ 1.8 = 180 ÷ 1.8 = 100."],"a":"212°F = 100°C."}},
    {t:"Centigrade", d:"a temperature scale where water boils at 100°", x:"Centigrade is also called Celsius." ,ex:{"q":"A child has a temperature of 100°F. What is it on the centigrade scale?","steps":["Centigrade (Celsius) is the metric temperature scale.","C = (F − 32) ÷ 1.8.","(100 − 32) ÷ 1.8 = 68 ÷ 1.8 ≈ 37.8."],"a":"About 37.8°C."}},
    {t:"volume", d:"the space a solid occupies", x:"Find the volume in cubic centimetres." ,ex:{"q":"A box is 4 cm long, 3 cm wide and 2 cm high. Find its volume.","steps":["The volume is how much space a solid fills.","Volume = length × width × height:  4 × 3 × 2.","4 × 3 = 12, and 12 × 2 = 24."],"a":"The volume is 24 cm³."}},
    {t:"millilitre", d:"one thousandth of a litre", x:"1 000 millilitres make one litre." ,ex:{"q":"How many millilitres are in 2.5 litres?","steps":["A millilitre (ml) is the small metric unit of capacity.","1 litre = 1,000 ml.","2.5 × 1,000 = 2,500."],"a":"2,500 ml."}},
    {t:"gram", d:"a metric unit of mass", x:"1 000 grams make one kilogram." ,ex:{"q":"One bag has 250 g of sugar and another has 300 g. How many kilograms is the total?","steps":["A gram (g) is the small metric unit of mass.","Add: 250 + 300 = 550 g.","550 g = 0.55 kg (550 ÷ 1,000)."],"a":"550 g = 0.55 kg."}},
    {t:"elapsed time", d:"the time that has passed", x:"Calculate the elapsed time." ,ex:{"q":"A lesson starts at 8:10 and ends at 9:05. How much time has elapsed?","steps":["Elapsed time is the time that passes between two moments.","From 8:10 to 9:00 is 50 minutes.","From 9:00 to 9:05 is 5 minutes; add: 50 + 5 = 55."],"a":"55 minutes elapsed."}}
  ],
  worked:[
    {q:"Find the area of a triangle with base 12 cm and height 7 cm.",
     steps:["Area = ½ × base × height.","= ½ × 12 × 7.","= 6 × 7 = 42 cm²."], a:"42 cm²"},
    {q:"Convert 2.5 kilometres to metres.",
     steps:["1 km = 1 000 m.","2.5 × 1 000.","= 2 500 metres."], a:"2 500 m"}
  ],
  drillLabel:"Measurement, perimeter and area",
  drills:[
    {id:"area_tri"},
    {id:"area_para"},
    {id:"perimeter_rect"},
    {id:"area_rect"},
    {id:"convert_metric"},
    {id:"elapsed_time"},
    {id:"temperature"},
    {id:"volume_prism"}
  ],
  word:[
    {q:"A triangular plot has base 30 m and height 18 m. Find its area.", a:"½ × 30 × 18 = 270 m²"},
    {q:"A clinic session runs from 9:45 to 12:15. How long is it?", a:"2 hours 30 minutes"},
    {q:"A rectangular room is 6 m by 4.5 m. Find its area.", a:"27 m²"},
    {q:"Convert 3 500 millilitres to litres.", a:"3.5 litres"},
    {q:"A box is 20 cm × 15 cm × 10 cm. Find its volume.", a:"3 000 cm³"}
  ],
  challenge:[
    {q:"A parallelogram and a triangle have the same base and height. How do their areas compare?", a:"The triangle's area is exactly half the parallelogram's area."},
    {q:"Normal body temperature is 37 °C. Change it to °F.", a:"37 × 9/5 + 32 = 98.6 °F"},
    {q:"A rectangle has area 48 cm² and length 8 cm. Find the perimeter.", a:"Width = 6 cm; perimeter = 2 × (8 + 6) = 28 cm"}
  ],
  activities:["Use a cut-out paper clock to find elapsed time","Estimate lengths of classroom objects then measure them","Find perimeter and area using graph paper","Find volume of local containers using number cubes"],
  materials:["Elementary Mathematics for Liberia Book 5","Rulers, graph paper, number cubes","Thermometer if available"],
  assessment:["Practical measurement","Written calculation","Quiz","Test"]
},
{
  grade:5, period:"V", sem:"Two", icon:"📏",
  title:"Geometry",
  subtitle:"Points, lines, angles, classifying triangles and quadrilaterals, circumference",
  outcomes:["Apply geometry skills and concepts in appreciating the designs of buildings, roads, chairs, tables and art work"],
  objectives:["Define, identify, construct and measure angles and geometric figures","Classify triangles by sides and angles","Classify quadrilaterals","Identify congruent figures","Solve multi-step problems","Find the circumference of a circle"],
  note:"<b>Circumference = π × diameter</b>, using π ≈ 22/7. Triangles by sides: <b>equilateral</b> (all equal), <b>isosceles</b> (two equal), <b>scalene</b> (none equal).",
  study:[
    /* ---- course text: Semester Two, Period V — Geometry (pages 59-60) ---- */
    {k:"h3", t:"Geometry Ideas: Points"},
    {k:"p", t:"A **point** marks an exact position in space. Points are the building blocks of all geometric figures — geometry skills help us appreciate the designs of buildings, roads, chairs, tables and art work."},
    {k:"rule"},
    {k:"h3", t:"Lines, Rays and Line Segments"},
    {k:"p", t:"A **line** goes on forever in both directions. A **ray** starts at one point and goes on forever in one direction. A **line segment** has two end points and can be measured."},
    {k:"rule"},
    {k:"h3", t:"Parallel and Perpendicular Lines"},
    {k:"p", t:"**Parallel lines** never meet, no matter how far they are drawn. **Perpendicular lines** meet at right angles (90°), like the corner of a page."},
    {k:"rule"},
    {k:"h3", t:"Kinds of Angles"},
    {k:"p", t:"Angles are named by their size:"},
    {k:"bul", items:["**Right angle** — exactly 90°, a square corner.", "**Acute angle** — less than 90°.", "**Obtuse angle** — more than 90° but less than 180°.", "**Straight angle** — exactly 180°."]},
    {k:"rule"},
    {k:"h3", t:"Measuring and Constructing Angles"},
    {k:"p", t:"Use a **protractor** to measure and construct angles, and a ruler and compass to construct geometric figures. Place the centre of the protractor on the vertex and read the number where the other arm crosses the scale."},
    {k:"rule"},
    {k:"h3", t:"Classifying Triangles"},
    {k:"p", t:"Classify triangles **by sides** and **by angles**:"},
    {k:"table", head:["By sides","By angles"], rows:[["Equilateral — all 3 sides equal","Acute — all angles less than 90°"],["Isosceles — 2 sides equal","Right — one angle is 90°"],["Scalene — no sides equal","Obtuse — one angle more than 90°"]]},
    {k:"rule"},
    {k:"h3", t:"Classifying Quadrilaterals"},
    {k:"p", t:"A **quadrilateral** has 4 sides. Draw and classify each as a **square** (4 equal sides, right angles), **rectangle** (opposite sides equal, right angles), **parallelogram** (opposite sides parallel), **rhombus** (4 equal sides, not necessarily right angles) or **trapezoid** (one pair of parallel sides)."},
    {k:"rule"},
    {k:"h3", t:"Solid Figures"},
    {k:"p", t:"Solid figures take up space: **cubes, rectangular prisms, cylinders, cones and spheres**. Name each by its faces, edges and vertices."},
    {k:"rule"},
    {k:"h3", t:"Circumference of a Circle"},
    {k:"p", t:"The **circumference** is the distance around a circle. Circumference = π × diameter (about 22/7 or 3.14 × diameter). Find the circumference of a circle using its diameter: a circle of diameter 14 cm has circumference 22/7 × 14 = 44 cm."},
    {k:"rule"},
    {k:"h3", t:"Multi-Step Problems"},
    {k:"p", t:"Solve problems involving **two different operations**: find the perimeter of a rectangle and then the cost of fencing it, or measure a figure, find its area, and share the work among groups. Work step by step and check each step."}
  ],
  focus:["Points, lines, rays and segments","Parallel and perpendicular lines","Kinds of angles and measuring them","Classifying triangles and quadrilaterals","Solid figures","Circumference"],
  terms:[
    {t:"equilateral triangle", d:"a triangle with all three sides equal", x:"An equilateral triangle has 60° angles." ,ex:{"q":"Each angle of an equilateral triangle is x°. Find x.","steps":["An equilateral triangle has all three sides equal — and all three angles equal.","The angles of a triangle add to 180°.","x = 180 ÷ 3 = 60."],"a":"Each angle is 60°."}},
    {t:"isosceles triangle", d:"a triangle with two equal sides", x:"An isosceles triangle has two equal angles." ,ex:{"q":"An isosceles triangle has angles 50°, 50° and x°. Find x.","steps":["An isosceles triangle has two equal sides and two equal angles.","The angles of a triangle add to 180°.","x = 180 − 50 − 50 = 80."],"a":"x = 80°."}},
    {t:"scalene triangle", d:"a triangle with no equal sides", x:"A scalene triangle has three different sides." ,ex:{"q":"Name the type of triangle whose sides are 3 cm, 4 cm and 5 cm.","steps":["A scalene triangle has all three sides of different lengths.","3 cm, 4 cm and 5 cm are all different.","So it is a scalene triangle."],"a":"A scalene triangle."}},
    {t:"rhombus", d:"a quadrilateral with four equal sides", x:"A rhombus looks like a pushed-over square." ,ex:{"q":"Name two properties of a rhombus.","steps":["A rhombus is a quadrilateral with all four sides equal.","Property 1: all four sides are equal.","Property 2: opposite angles are equal, and the diagonals cut each other at right angles."],"a":"All four sides equal; the diagonals meet at 90°."}},
    {t:"trapezoid", d:"a quadrilateral with one pair of parallel sides", x:"A trapezoid has one pair of parallel sides." ,ex:{"q":"Name the feature that makes a trapezoid a trapezoid.","steps":["A trapezoid is a quadrilateral with exactly one pair of parallel sides.","The two parallel sides are called the bases (top and bottom).","The other two sides are not parallel."],"a":"Exactly one pair of parallel sides."}},
    {t:"congruent", d:"exactly the same shape and size", x:"The two triangles are congruent." ,ex:{"q":"Two triangles have the same three sides: 3 cm, 4 cm, 5 cm. Are they congruent?","steps":["Congruent figures have the same size and the same shape.","Both triangles have sides 3 cm, 4 cm, 5 cm.","So one can be placed exactly on top of the other — they are congruent."],"a":"Yes — same size and shape, so congruent."}},
    {t:"protractor", d:"an instrument for measuring angles", x:"Measure the angle with a protractor." ,ex:{"q":"A protractor is placed on an angle and the arm reads 70°. What kind of angle is it?","steps":["A protractor is the tool for measuring angles.","The arm of the angle reads 70°.","Since 70° < 90°, it is an acute angle."],"a":"A 70° angle — acute."}},
    {t:"circumference", d:"the distance round a circle", x:"Find the circumference using π." ,ex:{"q":"A circle has a diameter of 14 cm. Find its circumference (take π = 22/7).","steps":["The circumference is the distance round a circle.","Circumference = π × d.","22/7 × 14 = 22 × 2 = 44."],"a":"The circumference is 44 cm."}},
    {t:"pi", d:"the number about 22/7 used with circles", x:"Take pi as 22/7." ,ex:{"q":"Find the area of a circle with radius 7 cm (take π = 22/7).","steps":["Pi (π) is the number about 22/7 (3.14) that links a circle's radius to its area.","Area = π r².","22/7 × 7 × 7 = 22 × 7 = 154."],"a":"Area = 154 cm²."}},
    {t:"complementary", d:"two angles adding to 90 degrees", x:"Complementary angles add to a right angle." ,ex:{"q":"Two angles are complementary and one is 35°. Find the other.","steps":["Complementary angles are two angles whose sum is 90°.","The other angle = 90° − 35°.","90 − 35 = 55."],"a":"The other angle is 55°."}}
  ],
  worked:[
    {q:"Find the circumference of a circle of diameter 14 cm (π = 22/7).",
     steps:["Circumference = π × diameter.","= 22/7 × 14.","= 22 × 2 = 44 cm."], a:"44 cm"},
    {q:"A triangle has sides 5 cm, 5 cm and 8 cm. Classify it.",
     steps:["Compare the sides: two are equal (5 and 5).","A triangle with exactly two equal sides is isosceles."], a:"Isosceles triangle"}
  ],
  drillLabel:"Angles, triangles and circles",
  drills:[
    {id:"angle_type"},
    {id:"angle_missing"},
    {id:"triangle_angle"},
    {id:"circumference"},
    {id:"shape_sides", p:{pool:[["triangle",3],["quadrilateral",4],["pentagon",5],["hexagon",6],["rhombus",4],["trapezoid",4]]}},
    {id:"area_tri"},
    {id:"perimeter_rect"}
  ],
  word:[
    {q:"A circular table has a diameter of 21 cm. Find its circumference (π = 22/7).", a:"22/7 × 21 = 66 cm"},
    {q:"Two angles of a triangle are 55° and 65°. Find the third angle.", a:"180 − 120 = 60°"},
    {q:"Name the quadrilateral with four equal sides but no right angles.", a:"A rhombus"},
    {q:"An angle is 35°. Find its complement.", a:"90 − 35 = 55°"},
    {q:"A wheel has radius 7 cm. How far does it travel in one turn?", a:"Circumference = 22/7 × 14 = 44 cm"}
  ],
  challenge:[
    {q:"Can a triangle be both right-angled and isosceles? Explain.", a:"Yes — it has a 90° angle and two 45° angles, with two equal sides."},
    {q:"A square, a rhombus and a rectangle are all quadrilaterals. Give one property that only the square has among them.", a:"A square has both four equal sides AND four right angles."},
    {q:"A circle has circumference 44 cm. Find its diameter (π = 22/7).", a:"44 ÷ 22/7 = 14 cm"}
  ],
  activities:["Use rulers, compass and protractor to measure and construct angles","Draw triangles and quadrilaterals and classify each","Find the circumference of a circle using its diameter","Identify congruent figures"],
  materials:["Elementary Mathematics for Liberia Book 5","Geometry set, straight edge, rope, protractor"],
  assessment:["Construction task","Written calculation","Quiz","Test"]
},
{
  grade:5, period:"VI", sem:"Two", icon:"％",
  title:"Ratio, Proportion, Percent and Statistics",
  subtitle:"Ratios, rates, percentages, graphs, mean, mode and median",
  outcomes:["Compare two or more quantities of the same units in daily-life activities","Read and make bar, line and circle graphs","Interpret data and make informed decisions"],
  objectives:["Define and write ratio and proportion","Write percentage as a ratio","Express two or more ratios as a proportion","Solve problems involving finding percent of a number","Read and make bar, line and circle graphs","Find the mean of a set of data","Find rates"],
  note:"A <b>ratio</b> compares two quantities: 3 : 4. A <b>proportion</b> says two ratios are equal: 3 : 4 = 6 : 8. <b>Percent</b> means out of a hundred: 25% = 25/100 = 1/4 = 0.25.",
  study:[
    /* ---- course text: Semester Two, Period VI — Ratio, Proportion, Percent and Statistics (pages 61-62) ---- */
    {k:"h3", t:"Ratio"},
    {k:"p", t:"A **ratio** compares two or more quantities of the same kind, written a : b. If a class has 18 boys and 12 girls, the ratio of boys to girls is 18 : 12, which simplifies to **3 : 2**. Ratios compare quantities in daily life activities."},
    {k:"rule"},
    {k:"h3", t:"Rates"},
    {k:"p", t:"A **rate** is a ratio comparing different kinds of quantities, such as kilometres per hour or L$ per bag: a car that travels 120 km in 2 hours moves at a rate of 60 km per hour."},
    {k:"rule"},
    {k:"h3", t:"Percent and Fraction"},
    {k:"p", t:"**Percent** means *out of 100*, written with the sign %. A percent can be written as a ratio with denominator 100 or as a decimal: 25% = 25/100 = 0.25. Convert percent to decimals and fractions."},
    {k:"rule"},
    {k:"h3", t:"Proportion"},
    {k:"p", t:"A **proportion** states that two ratios are equal, such as 2 : 3 = 4 : 6. Express two or more ratios as a proportion and solve by cross multiplication: 3/5 = n/40 gives 5n = 120, so n = 24. Use proportions to make simple mixtures."},
    {k:"rule"},
    {k:"h3", t:"Finding the Percent of a Number"},
    {k:"p", t:"To find the percent of a number, write the percent as a fraction or decimal and multiply: 25% of 80 = 25/100 × 80 = 20, and 10% of 250 = 0.10 × 250 = 25."},
    {k:"rule"},
    {k:"h3", t:"Arranging Data and Frequency Tables"},
    {k:"p", t:"Take population data (births, deaths, teenage pregnancy, HIV) and **arrange the data in ascending or descending order**, then represent the arranged data in a **frequency table** — a table showing how often each value occurs."},
    {k:"rule"},
    {k:"h3", t:"Mean, Mode and Median"},
    {k:"p", t:"Use the arranged data to find the statistics:"},
    {k:"bul", items:["**Mean** — total of the values divided by the number of values.", "**Mode** — the value that appears most often.", "**Median** — the middle value of the arranged data (or the mean of the two middle values when the count is even)."]},
    {k:"p", t:"**Worked example:** marks 4, 7, 7, 9, 13. Mean = (4 + 7 + 7 + 9 + 13) ÷ 5 = 40 ÷ 5 = 8; mode = 7; median = 7."},
    {k:"rule"},
    {k:"h3", t:"Constructing and Reading Graphs"},
    {k:"p", t:"Construct and read **bar graphs, line graphs, pictographs and circle graphs** (pie charts). Collect data about favourite colours and display it on a bar graph. Make a graph table and chart first, then draw the graph with a ruler."},
    {k:"rule"},
    {k:"h3", t:"Probability"},
    {k:"p", t:"**Probability** tells how likely an event is. Collect different stoppers, place them in a bag and predict which stopper is **more likely** to be picked: the stopper with more copies in the bag has a greater chance."}
  ],
  focus:["Ratio and proportion","Rates","Percent and fraction","Finding percent of a number","Frequency tables","Mean, mode and median","Bar, line, picture and circle graphs"],
  terms:[
    {t:"ratio", d:"a comparison of two quantities", x:"The ratio of boys to girls is 3 : 2." ,ex:{"q":"A class has 6 boys and 9 girls. Write the ratio of boys to girls in simplest form.","steps":["A ratio compares two amounts: boys : girls = 6 : 9.","Divide both parts by their GCF, 3.","6 ÷ 3 = 2 and 9 ÷ 3 = 3, so 2 : 3."],"a":"2 : 3."}},
    {t:"proportion", d:"a statement that two ratios are equal", x:"A proportion has two equal ratios." ,ex:{"q":"If 2 notebooks cost L$6, find the cost of 5 notebooks using a proportion.","steps":["A proportion is two equal ratios: 2 notebooks to L$6 as 5 notebooks to L$x.","Set up: 2/6 = 5/x.","Cross-multiply: 2x = 30, so x = 15."],"a":"L$15."}},
    {t:"percent", d:"a number out of one hundred", x:"Twenty percent means 20 out of 100." ,ex:{"q":"What is 25% of 200?","steps":["Percent means “out of a hundred”: 25% = 25/100.","25/100 × 200.","200 ÷ 100 = 2, and 25 × 2 = 50."],"a":"50."}},
    {t:"rate", d:"a comparison of quantities with different units", x:"The rate is L$50 per kilogram." ,ex:{"q":"A car travels 150 km in 3 hours. Find its rate (speed).","steps":["A rate compares two different units: distance per time.","Rate = distance ÷ time = 150 ÷ 3.","150 ÷ 3 = 50."],"a":"50 km per hour."}},
    {t:"frequency table", d:"a table showing how often each value occurs", x:"Make a frequency table of the data." ,ex:{"q":"The shoe sizes in a class are: 3, 4, 3, 4, 5, 3, 4, 4. Complete the frequency table and name the mode.","steps":["A frequency table shows how often each value occurs.","Count: size 3 occurs 3 times, size 4 occurs 4 times, size 5 occurs 1 time.","The highest frequency is 4 (size 4), so the mode is 4."],"a":"3→3, 4→4, 5→1; mode = 4."}},
    {t:"bar graph", d:"a graph using bars to show amounts", x:"Draw a bar graph of enrolment." ,ex:{"q":"The pupils' favourite fruits are: mango 5, orange 3, pineapple 2. Describe the bar graph and name the favourite.","steps":["A bar graph shows data as bars whose heights are the numbers.","Draw one bar for each fruit; make the mango bar 5 units tall, the orange bar 3, the pineapple bar 2.","The tallest bar shows the most chosen fruit."],"a":"Bars of heights 5, 3, 2 — mango is the favourite."}},
    {t:"line graph", d:"a graph using a line to show change", x:"A line graph shows change over time." ,ex:{"q":"Attendance is: Monday 30, Tuesday 32, Wednesday 28. Describe how to draw the line graph.","steps":["A line graph plots a point for each value and joins the points with line segments.","Mark a point at 30 over Monday, 32 over Tuesday, 28 over Wednesday.","Join the points with straight line segments."],"a":"Points (Mon, 30), (Tue, 32), (Wed, 28) joined by straight lines."}},
    {t:"circle graph", d:"a pie chart showing parts of a whole", x:"A circle graph shows the share of each part." ,ex:{"q":"In a class of 40 pupils, 10 like math. What angle of the circle graph represents math?","steps":["A circle graph (pie chart) shows parts of a whole as angles, and the whole circle is 360°.","Angle = (part ÷ whole) × 360°.","(10 ÷ 40) × 360 = 90°."],"a":"90°."}},
    {t:"mean", d:"the average — the total divided by the number of items", x:"Find the mean of the scores." ,ex:{"q":"Find the mean of the numbers 4, 6 and 8.","steps":["The mean is the average: add the numbers, then divide by how many there are.","Add: 4 + 6 + 8 = 18.","There are 3 numbers: 18 ÷ 3 = 6."],"a":"The mean is 6."}},
    {t:"median", d:"the middle value when data is ordered", x:"The median is the middle value." ,ex:{"q":"Find the median of the numbers 3, 8, 5.","steps":["The median is the middle number when the data are in order.","Order them: 3, 5, 8.","The middle number is 5."],"a":"The median is 5."}}
  ],
  worked:[
    {q:"Find 25% of 240.",
     steps:["25% means 25/100.","25/100 × 240 = 240 ÷ 4.","= 60."], a:"60"},
    {q:"Share L$450 between two people in the ratio 4 : 5.",
     steps:["Total parts = 4 + 5 = 9.","One part = 450 ÷ 9 = 50.","Shares: 4 × 50 = L$200 and 5 × 50 = L$250."], a:"L$200 and L$250"}
  ],
  drillLabel:"Ratio, percent and statistics",
  drills:[
    {id:"ratio_simplify"},
    {id:"proportion"},
    {id:"percent_of"},
    {id:"percent_frac"},
    {id:"percent_dec"},
    {id:"rate"},
    {id:"mean", p:{count:5}},
    {id:"median"},
    {id:"mode"},
    {id:"read_graph"}
  ],
  word:[
    {q:"In a class of 40, 24 are girls. Write the ratio of girls to boys in its simplest form.", a:"24 : 16 = 3 : 2"},
    {q:"A shirt costs L$800. There is a 25% discount. How much is saved?", a:"25% of 800 = L$200"},
    {q:"5 kg of rice costs L$350. Find the cost of 12 kg.", a:"350 ÷ 5 × 12 = L$840"},
    {q:"Enrolments are 45, 50, 55, 60 and 40. Find the mean.", a:"250 ÷ 5 = 50"},
    {q:"Write 60% as a fraction in its lowest terms.", a:"3/5"}
  ],
  challenge:[
    {q:"Out of 200 pupils, 30 were absent. What percentage was present?", a:"170/200 = 85%"},
    {q:"The ratio of rice to beans in a mixture is 5 : 3. How much rice is in 32 kg of mixture?", a:"32 ÷ 8 × 5 = 20 kg"},
    {q:"Which is bigger, 3/5 or 55%? Show your working.", a:"3/5 = 60%, which is bigger than 55%."}
  ],
  activities:["Write ratios and proportions","Use proportions to make a simple mixture","Convert percent to decimals","Use population data to construct frequency tables and graphs"],
  materials:["Elementary Mathematics for Liberia Book 5","Poster sheets, rulers, coloured pencils","Population data sheets"],
  assessment:["Graph construction","Written calculation","Quiz","Test"]
},

/* ================= GRADE 6 ================= */
{
  grade:6, period:"I", sem:"One", icon:"🔵",
  title:"Sets of Real Numbers and Symbols to Describe Sets",
  subtitle:"Set notation, subsets, union and intersection, Venn diagrams",
  outcomes:["Acquire analytical skills to solve problems of daily-life situations"],
  objectives:["Use the power set method to determine the number of subsets","Use set builder notation to describe sets","Apply intersection and union of sets to daily-life problems","Classify rational numbers into subsets of whole numbers"],
  note:"A set with <b>n</b> members has <b>2ⁿ</b> subsets. <b>Union (∪)</b> means all members of both sets; <b>intersection (∩)</b> means only the members in both sets. A <b>Venn diagram</b> shows this with overlapping circles.",
  study:[
    /* ---- course text: Semester One, Period I — Sets of Real Numbers and Symbols to Describe Sets (pages 63-64) ---- */
    {k:"h3", t:"Sets and Set Notation"},
    {k:"p", t:"A **set** is a well-defined collection of objects, numbers or ideas. A set is written inside curly brackets: A = {2, 4, 6}. We can describe a set by **listing** its members or by a **defining property** (set-builder notation): {x : x is an even number}."},
    {k:"p", t:"The symbol **∈** means *is a member of* (4 ∈ {2, 4, 6}) and **∉** means *is not a member of* (5 ∉ {2, 4, 6}). Use the symbols to show membership and non-membership of sets."},
    {k:"rule"},
    {k:"h3", t:"Universal Set, Subsets, Empty and Disjoint Sets"},
    {k:"p", t:"The **universal set (U)** holds every member being talked about. A **subset** is a set whose members all lie in another set. The **empty set** (∅ or { }) has no members. **Disjoint sets** have no common members. Identify each and relate them to Venn diagrams."},
    {k:"rule"},
    {k:"h3", t:"Intersection and Union of Sets"},
    {k:"p", t:"The **intersection** (∩) is the set of members in **both** sets. The **union** (∪) is the set of **all** members of both sets, each written once. Draw Venn diagrams of union and intersection relations."},
    {k:"num", items:["A = {1, 2, 3, 4}, B = {3, 4, 5, 6}.","A ∩ B = {3, 4} — the members in both.","A ∪ B = {1, 2, 3, 4, 5, 6} — all members.","Draw two overlapping circles inside a rectangle to show this."]},
    {k:"rule"},
    {k:"h3", t:"Replacement Sets"},
    {k:"p", t:"A **replacement set** is the set of values that may replace a variable in an open sentence. If x + 2 = 7 and the replacement set is {0, 3, 5}, the solution is x = 5. Read Venn diagrams to identify replacement sets."},
    {k:"rule"},
    {k:"h3", t:"The Power of a Set"},
    {k:"p", t:"The number of **subsets** of a set with n members is 2ⁿ. A set of 3 members has 2³ = 8 subsets, because each member is either in or out of a subset. Use the symbol of the power of a set to determine the number of subsets."},
    {k:"rule"},
    {k:"h3", t:"Rational and Irrational Numbers"},
    {k:"p", t:"**Rational numbers** can be written as a fraction a/b where a and b are whole numbers and b is not 0; they include the whole numbers as a subset. **Irrational numbers** cannot be written as such a fraction, for example √2 and π. Classify rational numbers into subsets of the whole numbers."},
    {k:"rule"},
    {k:"h3", t:"Sets of Points and Sets of Prime Numbers"},
    {k:"p", t:"**Sets of points** describe geometric ideas: a line is the set of all points along it. **Sets of prime numbers** such as {2, 3, 5, 7, 11} can be collected, listed and compared."},
    {k:"rule"},
    {k:"h3", t:"Operations on Integers"},
    {k:"p", t:"**Integers** are the whole numbers and their opposites: ..., −3, −2, −1, 0, 1, 2, 3, ... Perform **addition, subtraction, multiplication and division of integers** using the sign rules:"},
    {k:"bul", items:["Same signs add to the sign: 5 + 3 = 8, −5 + (−3) = −8.", "Different signs: 5 + (−3) = 2, −5 + 3 = −2.", "Multiplying or dividing: same signs give positive, different signs give negative: (−4) × (−3) = 12, (−12) ÷ 3 = −4."]}
  ],
  focus:["Description of sets","Intersection and union","Rational and irrational numbers","Sets of prime numbers","Replacement sets","Venn diagrams"],
  terms:[
    {t:"universal set", d:"the set containing all the members under discussion", x:"The universal set holds every element." ,ex:{"q":"The universal set is ξ = {1, 2, 3, 4, 5}. If A = {1, 3}, describe how A is drawn.","steps":["The universal set ξ contains every object under discussion.","A takes only some members of ξ: the odd ones.","A = {1, 3}, drawn as a circle inside the rectangle for ξ."],"a":"A = {1, 3}, drawn inside the rectangle for ξ."}},
    {t:"subset", d:"a set whose members all belong to another set", x:"Every set is a subset of itself." ,ex:{"q":"The class is the set of all children {boys, girls}. Is the set of girls a subset?","steps":["A subset is a smaller set taken from a bigger set.","Every girl is also a member of the whole class.","So the set of girls lies inside the set of children."],"a":"Yes — every member of the set of girls belongs to the class, so it is a subset."}},
    {t:"union", d:"all the members of both sets, shown ∪", x:"Find the union of A and B." ,ex:{"q":"Set A = {apple, mango} and Set B = {orange, banana}. Find the union A ∪ B and count it.","steps":["The union puts two sets together into one set.","List every member of A and every member of B: apple, mango, orange, banana.","Count the members of the union."],"a":"A ∪ B = {apple, mango, orange, banana}, so the union has 4 members."}},
    {t:"intersection", d:"only the members found in both sets, shown ∩", x:"The intersection contains common members." ,ex:{"q":"A = {1, 2, 3, 4} and B = {4, 5, 6}. Find A ∩ B.","steps":["The intersection A ∩ B contains the members both sets share.","Compare: only 4 is in both A and B.","So A ∩ B = {4}."],"a":"A ∩ B = {4}."}},
    {t:"empty set", d:"a set with no members", x:"The empty set is written { }." ,ex:{"q":"Write the set of goats that can fly in the schoolyard. What kind of set is it?","steps":["Look for members: no goat can fly.","There is not a single member to list.","A set with no members at all is the empty set, written { } or ∅."],"a":"It is the empty set: { }."}},
    {t:"Venn diagram", d:"overlapping circles showing set relations", x:"Draw a Venn diagram of the two sets." ,ex:{"q":"ξ = {1, 2, 3, 4}, A = {1, 2}, B = {2, 3}. Describe the Venn diagram.","steps":["A Venn diagram draws sets as circles inside a rectangle (the universal set).","The overlapping (middle) part holds members of both sets: 2.","1 goes in A only, 3 in B only, and 4 outside both circles."],"a":"Overlap = {2}; A only = {1}; B only = {3}; outside = {4}."}},
    {t:"rational number", d:"a number that can be written as a fraction", x:"0.5 is a rational number." ,ex:{"q":"Is 3/4 a rational number? Give your reason.","steps":["A rational number can be written as a fraction p/q of two integers.","3/4 is a fraction of integers (q ≠ 0).","So it is rational."],"a":"Yes — 3/4 is a fraction of two integers."}},
    {t:"irrational number", d:"a number that cannot be written as an exact fraction", x:"π is an irrational number." ,ex:{"q":"Why is √2 an irrational number?","steps":["An irrational number cannot be written as a fraction of two integers.","√2 ≈ 1.41421356… never ends and never repeats.","So it cannot be written as p/q — it is irrational."],"a":"√2 cannot be written as a fraction of integers."}},
    {t:"set builder notation", d:"describing a set by a rule", x:"Use set builder notation: {x : x is even}." ,ex:{"q":"Write the set of even numbers from 2 to 8 in set-builder notation.","steps":["Set-builder notation describes a set by a rule: {x : rule}.","The rule: x is even and 2 ≤ x ≤ 8.","So the set is {x : x is even, 2 ≤ x ≤ 8} = {2, 4, 6, 8}."],"a":"{x : x is even, 2 ≤ x ≤ 8}."}},
    {t:"power set", d:"the set of all subsets of a set", x:"The power set of a 3-member set has 8 members." ,ex:{"q":"A = {1, 2}. Write the power set of A and count its members.","steps":["The power set is the set of all subsets of A.","Subsets of A: {1}, {2}, {1, 2}, and the empty set { }.","So P(A) = { { }, {1}, {2}, {1, 2} } — 4 members (2² = 4)."],"a":"P(A) = { { }, {1}, {2}, {1, 2} }; it has 4 members."}}
  ],
  worked:[
    {q:"A = {1, 2, 3, 4}, B = {3, 4, 5}. Find A ∪ B and A ∩ B.",
     steps:["Union: list all members of both without repeating: {1, 2, 3, 4, 5}.","Intersection: list only the members in both: {3, 4}."], a:"A ∪ B = {1, 2, 3, 4, 5};  A ∩ B = {3, 4}"},
    {q:"How many subsets has a set of 4 elements?",
     steps:["Use the power set rule 2ⁿ.","n = 4, so 2⁴.","2 × 2 × 2 × 2 = 16 subsets."], a:"16 subsets"}
  ],
  drillLabel:"Set operations",
  drills:[
    {id:"set_union"},
    {id:"set_inter"},
    {id:"subsets_count"},
    {id:"set_count"},
    {id:"prime_check", p:{max:50}},
    {id:"even_odd", p:{max:100}}
  ],
  word:[
    {q:"In a class, 18 pupils play football, 12 play kickball and 5 play both. How many play at least one game?", a:"18 + 12 − 5 = 25 pupils"},
    {q:"A = {even numbers less than 10}. List the members of A.", a:"{2, 4, 6, 8}"},
    {q:"How many subsets can be formed from a set of 5 members?", a:"2⁵ = 32 subsets"},
    {q:"P = {prime numbers less than 12}. List P.", a:"{2, 3, 5, 7, 11}"},
    {q:"A = {1,2,3}, B = {4,5}. What is A ∩ B?", a:"{ } — the empty set; they are disjoint"}
  ],
  challenge:[
    {q:"Draw a Venn diagram for 20 pupils where 12 take Maths, 9 take Science and 4 take both. How many take neither?", a:"12 + 9 − 4 = 17 take at least one, so 20 − 17 = 3 take neither."},
    {q:"Is every whole number a rational number? Explain.", a:"Yes — any whole number n can be written as the fraction n/1."},
    {q:"If A ⊂ B and B has 6 members, what is the greatest number of members A can have?", a:"6 — a set is a subset of itself."}
  ],
  activities:["Define sets of real numbers using set notation","Identify universal set, subset, intersection, union, empty and disjoint sets","Draw Venn diagrams of union and intersection","Use local objects to represent sets"],
  materials:["Elementary Mathematics for Liberia Book 6","Rocks, sticks, pictures of objects","Prescribed textbook"],
  assessment:["Venn diagram task","Written exercise","Quiz","Test"]
},
{
  grade:6, period:"II", sem:"One", icon:"5️⃣",
  title:"Numeration — Number Base",
  subtitle:"Base ten and base five: converting, adding, subtracting and multiplying",
  outcomes:["Apply knowledge and skills of bases in representing issues in multiple ways"],
  objectives:["Add and subtract numbers in base ten and base five","Multiply numbers in base ten and base five","Change base ten to base five numerals and vice versa"],
  note:"In <b>base five</b> we group in fives, and the only digits are 0, 1, 2, 3 and 4. Place values are 1, 5, 25, 125. So 23₅ = (2 × 5) + 3 = 13 in base ten.",
  study:[
    /* ---- course text: Semester One, Period II — Numeration: Number Base (pages 65-66) ---- */
    {k:"h3", t:"The Base Ten Number System"},
    {k:"p", t:"We count in **base ten**: ten units make one ten, ten tens make one hundred, and so on. The place values are powers of ten: 1, 10, 100, 1,000 ... Count in base ten to recall how grouping works."},
    {k:"rule"},
    {k:"h3", t:"Changing Base Ten to Base Five"},
    {k:"p", t:"In **base five**, the place values are powers of five: 1, 5, 25, 125 ... Only the digits 0, 1, 2, 3 and 4 are used — five units group into one five. To change a base ten numeral to base five, **group by five**."},
    {k:"num", items:["Change 13 (base ten) to base five.","Group 13 into fives: 13 = 2 groups of 5 and 3 left over.","Write the groups: 2 in the fives place, 3 in the ones place.","13 (base ten) = 23 (base five), written 23₅."]},
    {k:"p", t:"Use sticks, rocks and counters to group by five and practise both directions."},
    {k:"rule"},
    {k:"h3", t:"Changing Base Five to Base Ten"},
    {k:"p", t:"Change a base five numeral to base ten by multiplying each digit by its place value and adding."},
    {k:"num", items:["Change 23₅ to base ten.","2 in the fives place: 2 × 5 = 10.","3 in the ones place: 3 × 1 = 3.","23₅ = 10 + 3 = 13 (base ten)."]},
    {k:"rule"},
    {k:"h3", t:"Adding in Base Five"},
    {k:"p", t:"Add in base five just as in base ten, but remember that **five ones make one five**: when a column reaches 5, carry 1 to the next column."},
    {k:"num", items:["Add 23₅ + 14₅.","Ones: 3 + 4 = 7 = 5 + 2, write 2, carry 1 five.","Fives: 2 + 1 + 1 = 4.","23₅ + 14₅ = 42₅."]},
    {k:"rule"},
    {k:"h3", t:"Subtracting in Base Five"},
    {k:"p", t:"Subtract in base five, **borrowing one five** (which is 5 ones) when the ones are not enough."},
    {k:"num", items:["Subtract 41₅ − 13₅.","Ones: 1 − 3 cannot be done; borrow 1 five = 5 ones.","Ones: 5 + 1 − 3 = 3.","Fives: 4 − 1 − 1 = 2.","41₅ − 13₅ = 23₅."]},
    {k:"rule"},
    {k:"h3", t:"Multiplying in Base Five"},
    {k:"p", t:"Multiply in base five using the base five multiplication facts, carrying groups of five: 3₅ × 4₅ = 12 (base ten) = 2 fives and 2 ones = 22₅."}
  ],
  focus:["Base ten number system","Changing base ten to base five and back","Adding in base five","Subtracting in base five","Multiplying in base five"],
  terms:[
    {t:"base", d:"the grouping size of a number system", x:"We usually count in base ten." ,ex:{"q":"A parallelogram has a base of 8 cm and a height of 3 cm. Find its area.","steps":["The base is the side of a shape used together with the height.","Area of a parallelogram = base × height.","8 × 3 = 24."],"a":"Area = 24 cm²."}},
    {t:"base ten", d:"the ordinary number system grouping in tens", x:"Base ten uses digits 0 to 9." ,ex:{"q":"In base ten, what does the digit 3 stand for in the number 35?","steps":["Base ten is our usual number system: each place is ten times the one before.","In 35, the 3 stands in the tens place.","So the 3 stands for 3 tens = 30."],"a":"The 3 stands for 30."}},
    {t:"base five", d:"a number system grouping in fives", x:"Base five uses only digits 0 to 4." ,ex:{"q":"Convert 14 (base five) to base ten.","steps":["In base five only the digits 0–4 are used, and each place is a power of 5.","14₅ = 1 × 5 + 4 × 1.","5 + 4 = 9."],"a":"14₅ = 9 in base ten."}},
    {t:"place value", d:"the value of a digit due to its position", x:"In base five the place values are 1, 5, 25." ,ex:{"q":"In the number 36, what is the place value of the digit 3?","steps":["Place value is what a digit is worth because of its position.","In 36, the 3 stands in the tens column.","One ten is worth 10, so the 3 is worth 30."],"a":"The place value of the 3 in 36 is 30."}},
    {t:"convert", d:"to change from one base to another", x:"Convert 27 to base five." ,ex:{"q":"Convert 2 metres to centimetres.","steps":["To convert means to change from one unit to another.","1 metre = 100 centimetres.","2 metres = 2 × 100 = 200 centimetres."],"a":"2 m = 200 cm."}},
    {t:"digit", d:"a single symbol in a number", x:"Base five has five digits." ,ex:{"q":"How many digits are in the number 408?","steps":["A digit is any of the symbols 0 to 9.","Read 408 one symbol at a time: 4, 0, 8.","Count the symbols: 3."],"a":"408 has 3 digits (4, 0 and 8)."}},
    {t:"remainder", d:"what is left after dividing", x:"Record each remainder when converting." ,ex:{"q":"Divide 17 by 5. What is the remainder?","steps":["The remainder is what is left over after dividing.","5 × 3 = 15, and 5 × 4 = 20 is too big, so 17 ÷ 5 = 3 with something left.","17 − 15 = 2 is left over."],"a":"17 ÷ 5 = 3 remainder 2."}},
    {t:"group", d:"a set of equal size used in counting", x:"Group the sticks in fives." ,ex:{"q":"In base five, count 14 objects by groups of five. How many groups and how many single objects?","steps":["In base five, a group is a bundle of five.","From 14 objects make 5 + 5 = 10: 2 groups.","The objects left over: 14 − 10 = 4."],"a":"2 groups of five and 4 single objects — written 14₅."}},
    {t:"expanded notation", d:"a number written as the sum of place values", x:"Use expanded notation to convert." ,ex:{"q":"Write 4,325 in expanded notation.","steps":["Expanded notation shows a number as the sum of its place values.","4,325 = 4 thousands, 3 hundreds, 2 tens, 5 ones.","4000 + 300 + 20 + 5."],"a":"4,325 = 4000 + 300 + 20 + 5."}},
    {t:"numeral", d:"the symbol representing a number", x:"Write the numeral in base five." ,ex:{"q":"Write the numeral for the number of fingers on one hand.","steps":["A numeral is the symbol we write for a number.","Count the fingers on one hand: one, two, three, four, five.","The symbol for five is the digit 5."],"a":"The numeral is 5."}}
  ],
  worked:[
    {q:"Change 27 (base ten) to base five.",
     steps:["27 ÷ 5 = 5 remainder 2.","5 ÷ 5 = 1 remainder 0.","1 ÷ 5 = 0 remainder 1.","Read the remainders upwards: 102₅."], a:"102₅"},
    {q:"Change 34₅ to base ten.",
     steps:["Place values: 3 is in the fives place, 4 in the ones.","(3 × 5) + (4 × 1).","15 + 4 = 19."], a:"19"}
  ],
  drillLabel:"Number bases",
  drills:[
    {id:"base10_to5"},
    {id:"base5_to10"},
    {id:"base5_add"},
    {id:"expanded", p:{digits:3}},
    {id:"place_value", p:{digits:4}}
  ],
  word:[
    {q:"A farmer groups 43 sticks into bundles of five. How many bundles and how many left over?", a:"8 bundles remainder 3 — that is 133₅"},
    {q:"Change 62 to base five.", a:"222₅"},
    {q:"Change 143₅ to base ten.", a:"(1×25) + (4×5) + 3 = 48"},
    {q:"Add 23₅ + 14₅ (answer in base five).", a:"13 + 9 = 22 → 42₅"},
    {q:"Write the largest three-digit number in base five and give its base ten value.", a:"444₅ = 124"}
  ],
  challenge:[
    {q:"Why is there no digit 5 in base five?", a:"Because five ones are regrouped into one group of five, written 10₅ — the digits stop at 4."},
    {q:"Convert 100₅ to base ten and explain the place values.", a:"25 — the places are 25, 5 and 1, so 1×25 + 0×5 + 0×1 = 25."},
    {q:"Which is larger, 34₅ or 25 in base ten?", a:"34₅ = 19, which is smaller than 25."}
  ],
  activities:["Count in base ten","Group by five to change base ten to base five and back","Add and subtract in base five","Multiply base ten and base five"],
  materials:["Elementary Mathematics for Liberia Book 6","Sticks, rocks, stones and counters","Textbook and supplementary books"],
  assessment:["Conversion exercise","Group work","Quiz","Test"]
},
{
  grade:6, period:"III", sem:"One", icon:"🔸",
  title:"Operations with Decimals",
  subtitle:"Adding, subtracting, multiplying, dividing and rounding decimals",
  outcomes:["Apply knowledge and skills of operations of whole numbers and decimals to real life","Round off decimals to the nearest tenth, hundredth and thousandth"],
  objectives:["Add, subtract, multiply and divide decimals","Round off decimals to the nearest tenth, hundredth and thousandth","Change fractions to decimals"],
  note:"When adding or subtracting decimals, <b>line up the decimal points</b>. When multiplying, count the total decimal places in both factors and put that many in the answer.",
  study:[
    /* ---- course text: Semester One, Period III — Operations (pages 67-68) ---- */
    {k:"h3", t:"Changing Fractions to Decimals"},
    {k:"p", t:"Change a fraction to a decimal by dividing the numerator by the denominator: 1/2 = 0.5, 1/4 = 0.25, 3/4 = 0.75. Use oranges, pawpaws and counters to model the parts."},
    {k:"rule"},
    {k:"h3", t:"Adding and Subtracting Decimals"},
    {k:"p", t:"To add or subtract decimals, **line up the decimal points**, then add or subtract as with whole numbers: 3.45 + 1.2 = 4.65 and 5.8 − 2.35 = 3.45."},
    {k:"num", items:["Add 2.5 + 3.75: line up the points: 2.50 + 3.75 = 6.25.","Subtract 6.25 − 1.5: 6.25 − 1.50 = 4.75.","Add a whole number and a decimal: 7 + 0.35 = 7.35."]},
    {k:"rule"},
    {k:"h3", t:"Multiplying Decimals"},
    {k:"p", t:"Multiply decimal numerals by other decimal numerals (and by whole numbers), then count the total number of decimal places to place the point."},
    {k:"num", items:["Multiply 2.5 × 3: 25 × 3 = 75, one decimal place → 7.5.","Multiply 1.2 × 1.5: 12 × 15 = 180, two decimal places → 1.80 = 1.8.","Multiply 0.4 × 0.2: 4 × 2 = 8, two decimal places → 0.08."]},
    {k:"rule"},
    {k:"h3", t:"Dividing Decimals"},
    {k:"p", t:"Divide whole numbers by decimal numbers and decimal numbers by decimal numbers. Make the divisor a whole number first by moving the decimal point the same number of places in both numbers."},
    {k:"num", items:["Divide 7.5 ÷ 5 = 1.5.","Divide 4.8 ÷ 0.4: make 0.4 whole: 48 ÷ 4 = 12.","Divide 0.6 ÷ 0.2: 6 ÷ 2 = 3."]},
    {k:"rule"},
    {k:"h3", t:"Rounding Decimals"},
    {k:"p", t:"Round off decimals to the nearest **tenth, hundredth and thousandth**. Look at the digit one place to the right: if it is 5 or more, round up; otherwise keep the digit."},
    {k:"bul", items:["3.46 to the nearest tenth: the hundredths digit 6 ≥ 5, so 3.5.", "3.44 to the nearest tenth: 3.4.", "5.678 to the nearest hundredth: the thousandths digit 8 ≥ 5, so 5.68.", "2.3456 to the nearest thousandth: 2.346."]}
  ],
  focus:["Changing fractions to decimals","Adding and subtracting decimals","Multiplying decimals","Dividing decimals","Rounding to tenths, hundredths and thousandths"],
  terms:[
    {t:"decimal", d:"a number with a decimal point", x:"Write the answer as a decimal." ,ex:{"q":"Write six tenths as a decimal.","steps":["A decimal is a number with a point between the whole part and the fractional part.","Six tenths is 6/10.","6/10 is written 0.6."],"a":"0.6"}},
    {t:"tenth", d:"the first decimal place", x:"Round to the nearest tenth." ,ex:{"q":"What is the value of the digit 3 in 2.35?","steps":["The tenths place is the first place after the decimal point.","The digit in the tenths place is 3.","3 tenths = 3/10 = 0.3."],"a":"The value of the 3 is 0.3 (three tenths)."}},
    {t:"hundredth", d:"the second decimal place", x:"0.05 is five hundredths." ,ex:{"q":"What is the value of the digit 5 in 0.45?","steps":["The hundredths place is the second place after the decimal point.","The digit in the hundredths place is 5.","5 hundredths = 5/100 = 0.05."],"a":"The value of the 5 is 0.05 (five hundredths)."}},
    {t:"thousandth", d:"the third decimal place", x:"0.004 is four thousandths." ,ex:{"q":"What is the value of the digit 7 in 0.217?","steps":["The thousandths place is the third place after the decimal point.","The digit in the thousandths place is 7.","7 thousandths = 7/1000 = 0.007."],"a":"The value of the 7 is 0.007 (seven thousandths)."}},
    {t:"round off", d:"to give an approximate value", x:"Round off 3.4567 to two places." ,ex:{"q":"Round off 3,862 to the nearest hundred.","steps":["Round off means to give an approximate value to a stated place.","The hundreds digit is 8; the next digit (tens) is 6.","Since 6 ≥ 5, round up: 3,862 ≈ 3,900."],"a":"3,862 rounds off to 3,900."}},
    {t:"decimal places", d:"the number of digits after the point", x:"Count the decimal places in both factors." ,ex:{"q":"How many decimal places does 3.142 have?","steps":["Decimal places are the digits after the decimal point.","The digits after the point in 3.142 are 1, 4, 2.","That is 3 decimal places."],"a":"3 decimal places."}},
    {t:"terminating decimal", d:"a decimal that comes to an end", x:"0.75 is a terminating decimal." ,ex:{"q":"Write 1/4 as a decimal. Is it terminating or recurring?","steps":["A terminating decimal ends (has a finite number of decimal places).","1/4 = 1 ÷ 4.","1 ÷ 4 = 0.25, and the division finishes."],"a":"0.25 — a terminating decimal."}},
    {t:"recurring decimal", d:"a decimal where digits repeat forever", x:"1/3 gives a recurring decimal." ,ex:{"q":"Write 1/3 as a decimal. Is it terminating or recurring?","steps":["A recurring decimal has a digit or block of digits that repeats forever.","1/3 = 1 ÷ 3.","1 ÷ 3 = 0.3333… — the 3 repeats."],"a":"0.333… — a recurring decimal."}},
    {t:"quotient", d:"the answer in division", x:"Write the quotient as a decimal." ,ex:{"q":"Find the quotient of 20 ÷ 4.","steps":["The quotient is the answer in division.","Ask: 4 × what = 20?","4 × 5 = 20, so the quotient is 5."],"a":"20 ÷ 4 = 5."}},
    {t:"product", d:"the answer in multiplication", x:"The product has two decimal places." ,ex:{"q":"Find the product of 3 and 4.","steps":["The product is the answer in multiplication.","Multiply: 3 × 4.","Count 3 fours: 4, 8, 12."],"a":"3 × 4 = 12."}}
  ],
  worked:[
    {q:"Multiply 3.4 × 0.5.",
     steps:["Ignore the points: 34 × 5 = 170.","Count decimal places: 1 + 1 = 2.","Put 2 places in the answer: 1.70 = 1.7."], a:"1.7"},
    {q:"Round 4.5678 to the nearest hundredth.",
     steps:["The hundredths digit is 6 (4.56...).","Look at the next digit: 7, which is 5 or more.","Round up: 4.57."], a:"4.57"}
  ],
  drillLabel:"Decimal operations",
  drills:[
    {id:"dec_add", p:{places:2,max:100}},
    {id:"dec_sub", p:{places:2,max:100}},
    {id:"dec_mul", p:{bDec:true}},
    {id:"dec_div"},
    {id:"dec_round", p:{to:0.1}},
    {id:"dec_round", p:{to:0.01}},
    {id:"frac_to_dec"},
    {id:"dec_compare"}
  ],
  word:[
    {q:"A trader buys goods for L$245.75 and L$189.50. What is the total?", a:"L$435.25"},
    {q:"Petrol costs L$12.50 per litre. What is the cost of 8 litres?", a:"L$100.00"},
    {q:"A cloth of 15.6 m is cut into 4 equal pieces. How long is each?", a:"3.9 m"},
    {q:"Round 27.4863 to the nearest thousandth.", a:"27.486"},
    {q:"Change 5/8 to a decimal.", a:"0.625"}
  ],
  challenge:[
    {q:"Explain why 0.5 × 0.5 is smaller than 0.5.", a:"Because multiplying by a number less than 1 makes the result smaller — half of a half is a quarter (0.25)."},
    {q:"Arrange in descending order: 0.303, 0.33, 0.3, 0.033.", a:"0.33, 0.303, 0.3, 0.033"},
    {q:"A pupil wrote 2.5 × 4 = 1.0. Find and explain the error.", a:"He misplaced the decimal point. 25 × 4 = 100, with one decimal place gives 10.0."}
  ],
  activities:["Solve addition and subtraction of decimal numbers","Multiply whole numbers by decimals and decimals by decimals","Divide whole numbers by decimals","Round off decimals to different places"],
  materials:["Elementary Mathematics for Liberia Book 6","Oranges, pawpaw, sticks, rocks and counters","Place value chart"],
  assessment:["Written exercise","Class assignment","Quiz","Test"]
},
{
  grade:6, period:"IV", sem:"Two", icon:"√",
  title:"Number Theory and Measurement",
  subtitle:"Squares, square roots, cubes, LCM, GCF; measurement in English and metric systems",
  outcomes:["Recognise squares, square roots and cubes of whole numbers","Apply knowledge and skills to work in several units of measurement in homes and industry"],
  objectives:["Find squares and square roots","Find cubes of whole numbers using the factorisation method","Find LCM and GCF","Perform the four basic operations on measurement in both English and metric systems","Convert units from one system to another","Measure areas, volume, perimeter, radii and circumference"],
  note:"<b>Square root</b> is the opposite of squaring: √64 = 8 because 8 × 8 = 64. <b>Cube:</b> 4³ = 4 × 4 × 4 = 64. Volume of a cube = side³.",
  study:[
    /* ---- course text: Semester Two, Period IV — Number Theory (pages 69-70) and Measurement (pages 71-72) ---- */
    {k:"h3", t:"Perfect Squares"},
    {k:"p", t:"A **perfect square** is the square of a whole number: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144 ... Recognize perfect squares and use them to find square roots."},
    {k:"rule"},
    {k:"h3", t:"Square Roots"},
    {k:"p", t:"The **square root** of a number is the number which, multiplied by itself, gives the original number. Find square roots such as √4 = 2, √9 = 3, √16 = 4, √25 = 5."},
    {k:"p", t:"**Find roots using the factor method:** write the number as a product of prime factors, then take one of every pair of equal factors. √36: 36 = 2 × 2 × 3 × 3, pair the 2s and 3s: √36 = 2 × 3 = 6."},
    {k:"rule"},
    {k:"h3", t:"Cubes of Whole Numbers"},
    {k:"p", t:"The **cube** of a number is the number multiplied by itself three times: 2³ = 2 × 2 × 2 = 8, 3³ = 27, 4³ = 64. Find cubes of whole numbers **using the factorization method** and a calculator."},
    {k:"rule"},
    {k:"h3", t:"Prime Factors, LCM and GCF"},
    {k:"p", t:"Find the **prime factors** of whole numbers, then use them for the LCM and GCF: 24 = 2³ × 3 and 36 = 2² × 3². LCM takes the highest power of every prime: 2³ × 3² = 72. GCF takes the common primes: 2² × 3 = 12."},
    {k:"rule"},
    {k:"h3", t:"Measuring Geometric Figures"},
    {k:"p", t:"Measure geometric figures and work in several units of measurement — in the **English system** (inch, foot, yard) and the **metric system** (centimetre, metre). Perform the four basic operations on measurements in both systems."},
    {k:"rule"},
    {k:"h3", t:"Converting Units"},
    {k:"p", t:"**Convert** a unit from one system to another: 1 inch ≈ 2.54 cm, 1 foot ≈ 30.5 cm, 1 metre ≈ 39.4 inches, 1 kg ≈ 2.2 pounds, 1 litre ≈ 1.06 quarts. Convert within a system first, then between systems."},
    {k:"rule"},
    {k:"h3", t:"Areas, Volumes, Perimeters and Circumferences"},
    {k:"p", t:"Find areas, volumes, perimeters, **radii** and **circumferences** by measurement and by using **formulae**:"},
    {k:"bul", items:["Square: area = side × side; perimeter = 4 × side.", "Rectangle: area = length × width; perimeter = 2 × (length + width).", "Parallelogram: area = base × height.", "Circle: circumference = 2 × π × radius or π × diameter; area = π × radius².", "Rectangular box: volume = length × width × height.", "Cube: volume = side³."]},
    {k:"rule"},
    {k:"h3", t:"Measuring Angles"},
    {k:"p", t:"Construct and measure **acute** (less than 90°), **obtuse** (between 90° and 180°) and **reflex** (more than 180°) angles with a protractor. Measure the angles of triangles, rectangles and other geometric shapes."}
  ],
  focus:["Squares and square roots","Cubes using factors","LCM and GCF","Measurement of geometric figures","Conversion between systems","Area, volume, perimeter and circumference"],
  terms:[
    {t:"square root", d:"the number which multiplied by itself gives the original", x:"The square root of 81 is 9." ,ex:{"q":"Find the square root of 81.","steps":["The square root of a number is the number that, squared, gives it.","Ask: what × itself = 81?","9 × 9 = 81, so √81 = 9."],"a":"√81 = 9."}},
    {t:"perfect square", d:"a number whose square root is a whole number", x:"144 is a perfect square." ,ex:{"q":"Is 64 a perfect square? Give your reason.","steps":["A perfect square is a number whose square root is a whole number.","Ask: what whole number × itself = 64?","8 × 8 = 64, so √64 = 8."],"a":"Yes — 8 × 8 = 64."}},
    {t:"cube", d:"a number multiplied by itself three times", x:"The cube of 3 is 27." ,ex:{"q":"Find the cube of 4.","steps":["The cube of a number is the number multiplied by itself twice (power 3).","4³ = 4 × 4 × 4.","4 × 4 = 16; 16 × 4 = 64."],"a":"4³ = 64."}},
    {t:"cube root", d:"the number which cubed gives the original", x:"The cube root of 27 is 3." ,ex:{"q":"Find the cube root of 27.","steps":["The cube root of a number is the number that, cubed, gives it.","Ask: what × itself × itself = 27?","3 × 3 × 3 = 27, so ∛27 = 3."],"a":"∛27 = 3."}},
    {t:"factorisation", d:"breaking a number into its factors", x:"Use factorisation to find the cube root." ,ex:{"q":"Factorise 8x + 12.","steps":["Factorisation writes an expression as a product of factors.","The GCF of 8x and 12 is 4.","8x + 12 = 4(2x + 3)."],"a":"8x + 12 = 4(2x + 3)."}},
    {t:"radius", d:"the distance from the centre of a circle to the edge", x:"The radius is half the diameter." ,ex:{"q":"A circle has a diameter of 10 cm. What is its radius?","steps":["The radius is the distance from the centre of a circle to its edge.","The diameter is the radius taken twice:  d = 2r.","r = d ÷ 2 = 10 ÷ 2 = 5."],"a":"The radius is 5 cm."}},
    {t:"circumference", d:"the distance round a circle", x:"Find the circumference with π × d." ,ex:{"q":"A circle has a diameter of 14 cm. Find its circumference (take π = 22/7).","steps":["The circumference is the distance round a circle.","Circumference = π × d.","22/7 × 14 = 22 × 2 = 44."],"a":"The circumference is 44 cm."}},
    {t:"volume", d:"the space inside a solid", x:"Volume is measured in cubic units." ,ex:{"q":"A box is 4 cm long, 3 cm wide and 2 cm high. Find its volume.","steps":["The volume is how much space a solid fills.","Volume = length × width × height:  4 × 3 × 2.","4 × 3 = 12, and 12 × 2 = 24."],"a":"The volume is 24 cm³."}},
    {t:"cylinder", d:"a solid with two circular ends", x:"A tin is a cylinder." ,ex:{"q":"A cylinder has radius 3 cm and height 5 cm. Find its volume (take π = 3.14).","steps":["A cylinder is a solid with two equal circular faces.","Volume = π r² h.","3.14 × 9 × 5 = 3.14 × 45 = 141.3."],"a":"Volume = 141.3 cm³."}},
    {t:"conversion", d:"changing from one unit to another", x:"Do the conversion carefully." ,ex:{"q":"Convert 3 hours to minutes, and 150 cm to metres.","steps":["Conversion means changing from one unit to another.","1 hour = 60 minutes: 3 × 60 = 180 minutes.","100 cm = 1 m: 150 ÷ 100 = 1.5 m."],"a":"3 h = 180 min;  150 cm = 1.5 m."}}
  ],
  worked:[
    {q:"Find √196.",
     steps:["Look for a number that multiplied by itself gives 196.","14 × 14 = 196.","So √196 = 14."], a:"14"},
    {q:"Find the volume of a cube of side 5 cm.",
     steps:["Volume of a cube = side × side × side.","= 5 × 5 × 5.","= 125 cm³."], a:"125 cm³"}
  ],
  drillLabel:"Squares, roots, cubes and measurement",
  drills:[
    {id:"square_num", p:{max:15}},
    {id:"square_root", p:{max:15}},
    {id:"cube_num", p:{max:8}},
    {id:"gcf"},
    {id:"lcm_q", p:{max:15}},
    {id:"volume_cube"},
    {id:"volume_prism"},
    {id:"circumference"},
    {id:"convert_metric"},
    {id:"convert_customary"}
  ],
  word:[
    {q:"A square field has an area of 225 m². Find the length of one side.", a:"√225 = 15 m"},
    {q:"A water tank is a cube of side 2 m. Find its volume in cubic metres.", a:"8 m³"},
    {q:"A circular pond has diameter 28 m. Find its circumference (π = 22/7).", a:"88 m"},
    {q:"Change 4 500 metres to kilometres.", a:"4.5 km"},
    {q:"Find the cube of 6.", a:"216"}
  ],
  challenge:[
    {q:"Find the square root of 1 296 by prime factorisation.", a:"1296 = 2⁴ × 3⁴, so √1296 = 2² × 3² = 36"},
    {q:"A cube has volume 343 cm³. Find the length of one edge.", a:"Cube root of 343 = 7 cm"},
    {q:"Which is longer, 3 feet or 1 metre? Explain.", a:"1 metre (about 3.28 feet) is longer than 3 feet."}
  ],
  activities:["Recognise perfect squares such as 4, 9, 16, 25, 36, 49","Find square roots","Find cubes using the factorisation method","Use formulae to calculate area, volume, perimeter and circumference"],
  materials:["Elementary Mathematics for Liberia Book 6","Calculator, geometric set, string","Protractor"],
  assessment:["Written calculation","Practical measurement","Quiz","Test"]
},
{
  grade:6, period:"V", sem:"Two", icon:"🧮",
  title:"Four Operations with Fractions; Geometric Figures and Angles",
  subtitle:"Adding, subtracting, multiplying and dividing fractions; constructing and measuring angles",
  outcomes:["Apply skills in forming mixtures and other products in their appropriate proportions","Apply geometric skills in craft work and appreciate designs in the community"],
  objectives:["Add and subtract proper, improper and mixed fractions","Multiply fractions","Use the reciprocal to divide fractions","Divide whole numbers by fractions and vice versa","Define, identify, construct and measure angles and geometric figures","Find circumference and area of a circle and volume of cubes"],
  note:"To <b>divide</b> by a fraction, multiply by its <b>reciprocal</b> (turn it upside down): 6 ÷ 2/3 = 6 × 3/2 = 9. Always write the answer in the lowest terms.",
  study:[
    /* ---- course text: Semester Two, Period V — Four Operations with Fractions (pages 73-74) and Geometric Figures and Angles (pages 75-76) ---- */
    {k:"h3", t:"Adding and Subtracting Fractions"},
    {k:"p", t:"Add and subtract **proper, improper and mixed fractions**. With the same denominator, work on the numerators: 3/7 + 2/7 = 5/7. With different denominators, first change to a common denominator. Add and subtract fractions from whole numbers: 5 − 3/4 = 4 1/4."},
    {k:"rule"},
    {k:"h3", t:"Multiplying Fractions"},
    {k:"p", t:"Multiply fractions of units with numerators and denominators less than ten: multiply the numerators and multiply the denominators, then write the product in the **lowest term**: 2/3 × 3/4 = 6/12 = 1/2."},
    {k:"rule"},
    {k:"h3", t:"The Reciprocal"},
    {k:"p", t:"The **reciprocal** of a fraction is the fraction turned upside down: the reciprocal of 2/3 is 3/2, and the reciprocal of 5 is 1/5. The product of a fraction and its reciprocal is always 1."},
    {k:"rule"},
    {k:"h3", t:"Dividing by Fractions"},
    {k:"p", t:"**Transform division** of fractions by changing the division sign to a multiplication sign and **inverting the divisor**: 3/4 ÷ 2/3 = 3/4 × 3/2 = 9/8 = 1 1/8. Divide whole numbers by fractions and vice versa: 4 ÷ 1/2 = 8, and 1/2 ÷ 4 = 1/8."},
    {k:"rule"},
    {k:"h3", t:"Space and Points"},
    {k:"p", t:"**Space** is the set of all points. Every object around us — houses, tables, chairs, bridges, roads — is made of points arranged in space. This is the idea behind all geometry and craft work."},
    {k:"rule"},
    {k:"h3", t:"Measuring Lines and Rays"},
    {k:"p", t:"Measure **lines, line segments and rays** with a ruler, and construct closed geometric figures with a ruler and compass."},
    {k:"rule"},
    {k:"h3", t:"Constructing and Measuring Angles"},
    {k:"p", t:"Construct angles and geometric figures with a ruler, compass and protractor, and measure angles of all kinds: acute, right, obtuse and reflex."},
    {k:"rule"},
    {k:"h3", t:"Polygons: Triangles, Rectangles and Squares"},
    {k:"p", t:"**Polygons** are closed figures made of straight sides. Measure the dimensions and areas of **triangles, rectangles and squares**, and find their perimeters using the formulae."},
    {k:"rule"},
    {k:"h3", t:"Circles"},
    {k:"p", t:"Study **touching and intersecting circles** — circles that touch at one point or cross at two points. Find the **circumference** of a circle (π × diameter) and the **area of a circle** (π × radius²)."},
    {k:"num", items:["Circle of diameter 14 cm: circumference = 22/7 × 14 = 44 cm.","Circle of radius 7 cm: area = 22/7 × 7 × 7 = 154 cm².","Two intersecting circles of the same size share a lens-shaped overlap."]},
    {k:"rule"},
    {k:"h3", t:"Cubes and Volume"},
    {k:"p", t:"Find the **volume of cubes**: volume = side × side × side. A cube of side 5 cm has volume 5 × 5 × 5 = 125 cm³. Measure the dimensions of local objects and calculate their volumes."}
  ],
  focus:["Adding and subtracting fractions","Multiplication of fractions","Reciprocals and division","Concept of space and points","Constructing and measuring angles","Circumference, area of a circle, volume of cubes"],
  terms:[
    {t:"reciprocal", d:"a fraction turned upside down", x:"The reciprocal of 3/5 is 5/3." ,ex:{"q":"What is the reciprocal of 5?","steps":["The reciprocal of a number is 1 divided by that number.","The reciprocal of 5 is 1/5.","Check: 5 × 1/5 = 1."],"a":"The reciprocal of 5 is 1/5."}},
    {t:"improper fraction", d:"a fraction bigger than one whole", x:"11/4 is an improper fraction." ,ex:{"q":"Is 7/4 an improper fraction? Give your reason.","steps":["An improper fraction has a numerator bigger than the denominator.","Here 7 > 4.","So 7/4 is an improper fraction."],"a":"Yes — 7 > 4, so it is an improper fraction."}},
    {t:"mixed fraction", d:"a whole number with a fraction", x:"2 3/4 is a mixed fraction." ,ex:{"q":"Convert 11/4 to a mixed fraction.","steps":["A mixed fraction is a whole number together with a proper fraction.","Divide: 11 ÷ 4 = 2 remainder 3.","So 11/4 = 2 and 3/4."],"a":"11/4 = 2 3/4."}},
    {t:"lowest term", d:"a fraction fully simplified", x:"Write the product in its lowest term." ,ex:{"q":"Write 10/15 in its lowest term.","steps":["Lowest term means the smallest numbers that give the same fraction.","The GCF of 10 and 15 is 5.","(10 ÷ 5)/(15 ÷ 5) = 2/3."],"a":"10/15 = 2/3."}},
    {t:"space", d:"the set of all points", x:"Geometry describes space." ,ex:{"q":"Give one everyday example showing that points, lines and planes make up space.","steps":["Space is the set of all points — everything around us.","A ball of dust in the air shows a point; a beam of light shows a line; the blackboard shows a plane.","Together, points, lines and planes fill the space of the room."],"a":"Points, lines and planes make up space (e.g. the classroom)."}},
    {t:"protractor", d:"an instrument for measuring angles", x:"Use a protractor to measure 65°." ,ex:{"q":"A protractor is placed on an angle and the arm reads 70°. What kind of angle is it?","steps":["A protractor is the tool for measuring angles.","The arm of the angle reads 70°.","Since 70° < 90°, it is an acute angle."],"a":"A 70° angle — acute."}},
    {t:"compass", d:"an instrument for drawing circles and arcs", x:"Use a compass to construct the angle." ,ex:{"q":"With a compass and ruler, describe how to draw a circle of radius 4 cm.","steps":["A compass is the tool for drawing circles and arcs.","Open the compass to 4 cm (from the needle point to the pencil point).","Place the needle on the centre point and turn the pencil once round."],"a":"A circle of radius 4 cm, centred where the needle stood."}},
    {t:"perpendicular", d:"at right angles to", x:"Construct a perpendicular line." ,ex:{"q":"Which is perpendicular: the hands of a clock at 3 o'clock, or two lines that never meet?","steps":["Perpendicular lines meet at a right angle (90°).","At 3 o'clock the hands form a right angle.","Lines that never meet are parallel, not perpendicular."],"a":"The clock hands at 3 o'clock."}},
    {t:"circumference", d:"the distance round a circle", x:"Calculate the circumference." ,ex:{"q":"A circle has a diameter of 14 cm. Find its circumference (take π = 22/7).","steps":["The circumference is the distance round a circle.","Circumference = π × d.","22/7 × 14 = 22 × 2 = 44."],"a":"The circumference is 44 cm."}},
    {t:"volume", d:"the space inside a solid", x:"Find the volume of the cube." ,ex:{"q":"A box is 4 cm long, 3 cm wide and 2 cm high. Find its volume.","steps":["The volume is how much space a solid fills.","Volume = length × width × height:  4 × 3 × 2.","4 × 3 = 12, and 12 × 2 = 24."],"a":"The volume is 24 cm³."}}
  ],
  worked:[
    {q:"Divide 5 ÷ 2/3.",
     steps:["Write 5 as 5/1.","Multiply by the reciprocal of 2/3, which is 3/2.","5/1 × 3/2 = 15/2 = 7 1/2."], a:"7 1/2"},
    {q:"Find the area of a circle of radius 7 cm (π = 22/7).",
     steps:["Area = π × r².","= 22/7 × 7 × 7.","= 22 × 7 = 154 cm²."], a:"154 cm²"}
  ],
  drillLabel:"Fractions and geometry",
  drills:[
    {id:"frac_add_unlike", p:{dens:[2,3,4,5,6,8,9]}},
    {id:"frac_sub_unlike", p:{dens:[2,3,4,5,6,8,9]}},
    {id:"frac_mul", p:{dens:[2,3,4,5,6,8]}},
    {id:"frac_div", p:{dens:[2,3,4,5,6]}},
    {id:"mixed_add", p:{dens:[3,4,5,6,8]}},
    {id:"angle_missing"},
    {id:"triangle_angle"},
    {id:"circumference"},
    {id:"area_circle"},
    {id:"volume_cube"}
  ],
  word:[
    {q:"A mixture needs 2/3 kg of rice and 3/4 kg of beans. What is the total weight?", a:"2/3 + 3/4 = 17/12 = 1 5/12 kg"},
    {q:"A rope of 9 m is cut into pieces of 3/4 m. How many pieces?", a:"9 ÷ 3/4 = 12 pieces"},
    {q:"Find 3/5 of 2 1/2 litres of oil.", a:"3/5 × 5/2 = 3/2 = 1 1/2 litres"},
    {q:"A circular garden has radius 14 m. Find its area (π = 22/7).", a:"616 m²"},
    {q:"A cubic tank has edge 3 m. Find its volume.", a:"27 m³"}
  ],
  challenge:[
    {q:"Explain why dividing by 1/2 gives a bigger answer than the original number.", a:"Because you are finding how many halves fit in, and each half is smaller than 1, so there are more of them — dividing by a number less than 1 increases the result."},
    {q:"A circle has area 154 cm². Find its radius (π = 22/7).", a:"r² = 154 ÷ 22/7 = 49, so r = 7 cm"},
    {q:"Simplify: (2/3 + 1/6) ÷ 1/2.", a:"(4/6 + 1/6) = 5/6; 5/6 ÷ 1/2 = 5/6 × 2 = 5/3 = 1 2/3"}
  ],
  activities:["Add and subtract proper, improper and mixed fractions","Transform division of fractions by inverting the divisor","Use ruler, compass and protractor to construct angles and figures","Measure dimensions and areas of triangles, cubes, circles and quadrilaterals"],
  materials:["Elementary Mathematics for Liberia Book 6","Rulers, compass, protractor","Oranges, pawpaw, sticks and rocks"],
  assessment:["Written calculation","Construction task","Quiz","Test"]
},
{
  grade:6, period:"VI", sem:"Two", icon:"📉",
  title:"Ratio, Percentage, Proportion; Graphs and Interpretation",
  subtitle:"Rates from population data and constructing and reading graphs",
  outcomes:["Calculate ratio, percent and proportion using population data (birth, death, enrolment)","Apply knowledge and skills to construct and analyse statistical graphs"],
  objectives:["Define and write ratio and proportion","Write a ratio as a fraction","Write percentage as a ratio","Express two or more ratios as a proportion","Solve stated problems related to ratio and proportion","Identify elements of graphs and describe the kinds of graphs"],
  note:"A <b>rate</b> compares an amount to a total, often shown per hundred or per thousand: a birth rate of 30 per 1 000 means 30 babies for every 1 000 people. Graph types: <b>bar, picture, line and circle (pie)</b>.",
  study:[
    /* ---- course text: Semester Two, Period VI — Ratio, Percentage and Proportion (pages 77-78) and Graphs and Interpretation of Information (page 79) ---- */
    {k:"h3", t:"Ratio"},
    {k:"p", t:"A **ratio** compares two quantities of the same kind, written a : b or as a fraction a/b. If a school has 300 girls and 250 boys, the ratio of girls to boys is 300 : 250 = 6 : 5. Write fractions as ratios and ratios as fractions."},
    {k:"rule"},
    {k:"h3", t:"Percentage"},
    {k:"p", t:"**Percent** means *out of one hundred*, written %. **Write percentage as a ratio:** 25% = 25 : 100 = 1 : 4. A percent can be changed to a fraction or a decimal: 40% = 40/100 = 0.4."},
    {k:"rule"},
    {k:"h3", t:"Proportion"},
    {k:"p", t:"A **proportion** is an equation of two ratios: 2 : 3 = 4 : 6. Express two or more ratios in proportion and solve stated problems related to ratio and proportion."},
    {k:"num", items:["Write the proportion 3 : 5 = n : 40 as fractions 3/5 = n/40.","Cross multiply: 5 × n = 3 × 40.","5n = 120, so n = 24."]},
    {k:"rule"},
    {k:"h3", t:"Rates from Population Data"},
    {k:"p", t:"Population data give rates used in public health and education. Understand the **terms**: **HIV rate**, **death rate**, **birth rate** and **student enrollment**."},
    {k:"num", items:["Compare each component as a ratio to the entire data: births out of the whole population.","Express each component as a ratio to another component: number of girls to number of boys, or number of deaths to number of births.","Find the percentage of each component to the entire data: 1,200 births out of 12,000 people = 10%.","Use the concepts of percent, ratio and proportion in real life by solving word problems."]},
    {k:"rule"},
    {k:"h3", t:"Elements of a Graph"},
    {k:"p", t:"A **graph** shows information visually. Its **elements** are the **title**, the **labels** (what is being compared), the **scale** (the units of measurement) and the **data** (the values shown). Identify these elements when reading any graph."},
    {k:"rule"},
    {k:"h3", t:"Kinds of Graphs"},
    {k:"p", t:"**Define and differentiate** the kinds of graphs:"},
    {k:"bul", items:["**Bar graph** — bars of different heights show and compare quantities.", "**Picture graph (pictograph)** — pictures or symbols stand for quantities.", "**Line graph** — points joined by a line show how a quantity changes.", "**Circular graph (pie chart)** — a circle divided into slices shows parts of a whole."]},
    {k:"rule"},
    {k:"h3", t:"Making and Reading Graphs"},
    {k:"p", t:"Construct a **graph table or chart** first, then draw the bar graph, picture graph, line graph and circular graph with a ruler and protractor. Use different graphs to **compare quantities** and interpret the information to make decisions."}
  ],
  focus:["Ratio, fraction and percentage","Proportion as an equation of two ratios","Birth rate, death rate and enrolment","Elements and kinds of graphs","Bar, picture, line and circle graphs"],
  terms:[
    {t:"ratio", d:"a comparison of two quantities of the same kind", x:"Write the ratio in its simplest form." ,ex:{"q":"A class has 6 boys and 9 girls. Write the ratio of boys to girls in simplest form.","steps":["A ratio compares two amounts: boys : girls = 6 : 9.","Divide both parts by their GCF, 3.","6 ÷ 3 = 2 and 9 ÷ 3 = 3, so 2 : 3."],"a":"2 : 3."}},
    {t:"proportion", d:"an equation stating two ratios are equal", x:"Solve the proportion for the missing value." ,ex:{"q":"If 2 notebooks cost L$6, find the cost of 5 notebooks using a proportion.","steps":["A proportion is two equal ratios: 2 notebooks to L$6 as 5 notebooks to L$x.","Set up: 2/6 = 5/x.","Cross-multiply: 2x = 30, so x = 15."],"a":"L$15."}},
    {t:"percentage", d:"a fraction expressed out of one hundred", x:"Express the result as a percentage." ,ex:{"q":"A shirt costs L$100 and is sold at a 20% discount. What is the selling price?","steps":["A percentage is a part out of a hundred.","Discount = 20% of 100 = 20/100 × 100 = L$20.","Selling price = 100 − 20 = L$80."],"a":"L$80."}},
    {t:"birth rate", d:"births compared with the total population", x:"The birth rate is 30 per 1 000." ,ex:{"q":"In a year, 1,200 babies are born in a town of 12,000 people. What fraction of the population are the new babies?","steps":["The birth rate measures how many babies are born in a population.","Write the fraction: 1,200 / 12,000.","Simplify: divide top and bottom by 1,200:  1/10."],"a":"1/10 of the population (10 births per 100 people)."}},
    {t:"death rate", d:"deaths compared with the total population", x:"Calculate the death rate." ,ex:{"q":"In a year, 300 people die in a town of 12,000. What fraction of the population is that?","steps":["The death rate measures how many people die in a population.","Write the fraction: 300 / 12,000.","Simplify: divide top and bottom by 300:  1/40."],"a":"1/40 of the population (25 deaths per 1,000 people)."}},
    {t:"enrolment", d:"the number of pupils registered", x:"School enrolment increased this year." ,ex:{"q":"A school has 800 pupils, 450 of them girls. What percentage of the enrolment are girls?","steps":["Enrolment is the total number of pupils in a school.","Percentage = (450/800) × 100.","450 ÷ 800 = 0.5625;  0.5625 × 100 = 56.25."],"a":"56.25% of the enrolment."}},
    {t:"bar graph", d:"a graph using bars of different heights", x:"Draw a bar graph of enrolment." ,ex:{"q":"The pupils' favourite fruits are: mango 5, orange 3, pineapple 2. Describe the bar graph and name the favourite.","steps":["A bar graph shows data as bars whose heights are the numbers.","Draw one bar for each fruit; make the mango bar 5 units tall, the orange bar 3, the pineapple bar 2.","The tallest bar shows the most chosen fruit."],"a":"Bars of heights 5, 3, 2 — mango is the favourite."}},
    {t:"picture graph", d:"a graph using pictures to stand for amounts", x:"A picture graph uses symbols." ,ex:{"q":"In a picture graph, one mango picture stands for 5 mangoes. How many pictures for 25 mangoes?","steps":["A picture graph uses a picture to stand for a number of things.","Each picture = 5 mangoes.","25 ÷ 5 = 5 pictures."],"a":"5 mango pictures."}},
    {t:"line graph", d:"a graph showing change with a line", x:"A line graph shows the trend." ,ex:{"q":"Attendance is: Monday 30, Tuesday 32, Wednesday 28. Describe how to draw the line graph.","steps":["A line graph plots a point for each value and joins the points with line segments.","Mark a point at 30 over Monday, 32 over Tuesday, 28 over Wednesday.","Join the points with straight line segments."],"a":"Points (Mon, 30), (Tue, 32), (Wed, 28) joined by straight lines."}},
    {t:"circle graph", d:"a pie chart showing shares of a whole", x:"A circle graph shows each share." ,ex:{"q":"In a class of 40 pupils, 10 like math. What angle of the circle graph represents math?","steps":["A circle graph (pie chart) shows parts of a whole as angles, and the whole circle is 360°.","Angle = (part ÷ whole) × 360°.","(10 ÷ 40) × 360 = 90°."],"a":"90°."}}
  ],
  worked:[
    {q:"In a town of 2 000 people there were 60 births. Express the birth rate per 1 000.",
     steps:["Birth rate = births ÷ population × 1 000.","= 60 ÷ 2 000 × 1 000.","= 30 per 1 000."], a:"30 per 1 000"},
    {q:"Solve the proportion 4 : 7 = 12 : n.",
     steps:["4 × n = 7 × 12 (cross multiply).","4n = 84.","n = 21."], a:"n = 21"}
  ],
  drillLabel:"Ratio, percentage and graphs",
  drills:[
    {id:"ratio_simplify"},
    {id:"proportion"},
    {id:"percent_of"},
    {id:"percent_frac"},
    {id:"percent_dec"},
    {id:"ratio_share"},
    {id:"rate"},
    {id:"mean", p:{count:5}},
    {id:"median"},
    {id:"read_graph"}
  ],
  word:[
    {q:"Enrolment rose from 400 to 480 pupils. What is the percentage increase?", a:"80/400 = 20% increase"},
    {q:"In a school of 600 pupils, 360 are girls. Write the ratio of girls to boys in simplest form.", a:"360 : 240 = 3 : 2"},
    {q:"L$1 200 is shared in the ratio 3 : 5. Find each share.", a:"L$450 and L$750"},
    {q:"A town of 5 000 people recorded 40 deaths. Find the death rate per 1 000.", a:"8 per 1 000"},
    {q:"Solve: 5 : 8 = n : 40.", a:"n = 25"}
  ],
  challenge:[
    {q:"A circle graph shows 25% rice, 35% cassava and the rest plantain. What percentage is plantain, and what angle would it take on the pie chart?", a:"40% plantain; angle = 40% of 360° = 144°"},
    {q:"Which graph would you use to show how enrolment changed each year from 2020 to 2025? Give a reason.", a:"A line graph, because it shows change or trend over time clearly."},
    {q:"The ratio of boys to girls is 4 : 5 and there are 108 pupils. How many girls?", a:"108 ÷ 9 × 5 = 60 girls"}
  ],
  activities:["Define ratio and proportion","Change and write fractions as ratios","Brainstorm on birth rate, death rate and enrolment","Draw bar, picture, line and circular graphs","Use graphs to compare quantities"],
  materials:["Elementary Mathematics for Liberia Book 6","Ruler, protractor, geometric set","Poster sheets and colouring materials"],
  assessment:["Graph construction and interpretation","Written calculation","Quiz","Final test"]
}
];

const MA_GENERAL = {
  intro:"Mathematics is an indispensable tool in the world. The knowledge and application of mathematics in everyday activities provide the critical core skills of computation, translation, analysis and problem solving that every learner needs.",
  objectives:[
    "Compute accurately with whole numbers, fractions, decimals and percentages.",
    "Translate real-life situations into mathematical sentences and solve them.",
    "Measure, estimate and record quantities using both metric and English units.",
    "Collect, organise, represent and interpret data to make informed decisions."
  ],
  approach:"Inclusive and differentiated learning: individual seat work or group work in mixed groups, according to abilities, gender and learning styles."
};
