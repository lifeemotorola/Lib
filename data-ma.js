/* Curriculum data — Republic of Liberia, Elementary MATHEMATICS, Grades 1–6
   Derived from the "Math 1-6" curriculum guide (79 pp.), 6 periods per grade.

   Mathematics is a COMPUTATIONAL subject, so each topic carries:
     terms[]     {t, d, x}                     vocabulary term, meaning, example
     worked[]    {q, steps[], a}               worked example shown before practice
     drills[]    {id, p}                       procedural generators (see gen-ma.js)
     drillLabel                                heading for the practice exercise
     word[]      {q, a}                        word problems in Liberian contexts
     challenge[] {q, a}                        reasoning / multi-step questions
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
  focus:["Sets and members","Sets of boys, girls, family members","Union of sets as addition","Subsets and subtraction","Addition and subtraction to 10"],
  terms:[
    {t:"set", d:"a group of things that belong together", x:"A set of pencils is on the table."},
    {t:"member", d:"one thing inside a set", x:"Each boy is a member of the set."},
    {t:"element", d:"another word for a member of a set", x:"Count every element in the set."},
    {t:"union", d:"putting two sets together", x:"The union of the two sets gives 8."},
    {t:"subset", d:"a smaller set taken from a bigger set", x:"The girls form a subset of the class."},
    {t:"add", d:"to put together to find how many altogether", x:"Add 3 and 4 to get 7."},
    {t:"sum", d:"the answer in addition", x:"The sum of 5 and 2 is 7."},
    {t:"subtract", d:"to take away", x:"Subtract 2 from 9."},
    {t:"difference", d:"the answer in subtraction", x:"The difference between 9 and 4 is 5."},
    {t:"empty set", d:"a set with no members at all", x:"A set of flying goats is an empty set."}
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
  focus:["Counting to 40","Reading and writing numerals and number words","Comparing with >, < and =","Ordering numbers","Addition facts to 40"],
  terms:[
    {t:"numeral", d:"the symbol we write for a number", x:"The numeral for twelve is 12."},
    {t:"count", d:"to say how many, one by one", x:"Count the stones up to 40."},
    {t:"greater than", d:"bigger than, shown by >", x:"25 is greater than 18."},
    {t:"less than", d:"smaller than, shown by <", x:"9 is less than 30."},
    {t:"equal to", d:"the same as, shown by =", x:"20 is equal to 20."},
    {t:"order", d:"to arrange from smallest to biggest", x:"Order these numbers from small to big."},
    {t:"number line", d:"a straight line with numbers marked on it", x:"Show 15 on the number line."},
    {t:"before", d:"coming just in front of", x:"19 comes before 20."},
    {t:"after", d:"coming just next", x:"21 comes after 20."},
    {t:"between", d:"in the middle of two numbers", x:"14 is between 13 and 15."}
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
  focus:["Numbers to 100","Tens and ones","Before, after and between","Skip counting by 2s, 5s, 10s","Ordinal numbers to 100"],
  terms:[
    {t:"place value", d:"what a digit is worth because of its position", x:"In 58 the place value of 5 is 50."},
    {t:"digit", d:"any of the symbols 0 to 9", x:"The number 47 has two digits."},
    {t:"tens", d:"groups of ten", x:"There are 4 tens in 45."},
    {t:"ones", d:"single units", x:"There are 5 ones in 45."},
    {t:"bundle", d:"ten sticks tied together to show one ten", x:"Tie a bundle of ten sticks."},
    {t:"skip count", d:"to count in steps such as 2s or 5s", x:"Skip count by 5s to 50."},
    {t:"expanded form", d:"a number written as tens plus ones", x:"The expanded form of 63 is 60 + 3."},
    {t:"even", d:"a number that can be shared into two equal parts", x:"8 is an even number."},
    {t:"odd", d:"a number that cannot be shared equally into two", x:"7 is an odd number."},
    {t:"hundred", d:"ten tens", x:"Ten tens make one hundred."}
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
  focus:["Adding and subtracting multiples of ten","2-digit addition without regrouping","2-digit subtraction","Regrouping ones (renaming)","Number families"],
  terms:[
    {t:"regroup", d:"to carry ten ones over as one ten", x:"We regroup when the ones make more than 9."},
    {t:"rename", d:"another word for regrouping", x:"Rename 13 ones as 1 ten and 3 ones."},
    {t:"addend", d:"a number being added", x:"In 4 + 5, both 4 and 5 are addends."},
    {t:"total", d:"the answer when we add", x:"The total of 20 and 30 is 50."},
    {t:"column", d:"numbers written one under the other", x:"Put the ones in the same column."},
    {t:"carry", d:"to move a ten into the tens column", x:"Carry 1 to the tens column."},
    {t:"borrow", d:"to take one ten and change it into ten ones", x:"Borrow from the tens to subtract."},
    {t:"altogether", d:"in total, all added", x:"How many altogether?"},
    {t:"left over", d:"what remains after taking away", x:"How many are left over?"},
    {t:"number family", d:"the pairs of numbers that make a given sum", x:"The number family of 10 includes 6 + 4."}
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
  focus:["Importance of measurement","Estimating length","Weight and capacity","Telling time","Counting Liberian money"],
  terms:[
    {t:"measure", d:"to find how long, heavy or how much", x:"Measure the desk with a ruler."},
    {t:"length", d:"how long something is", x:"The length of the table is 1 metre."},
    {t:"weight", d:"how heavy something is", x:"The weight of the rice is 5 kilograms."},
    {t:"capacity", d:"how much a container can hold", x:"The capacity of the bucket is 10 litres."},
    {t:"estimate", d:"to make a sensible guess before measuring", x:"Estimate the length of the room."},
    {t:"ruler", d:"a tool for measuring length", x:"Use a ruler to draw a line."},
    {t:"scale", d:"a tool for measuring weight", x:"Weigh the rice on a scale."},
    {t:"clock", d:"a tool that shows the time", x:"The clock shows 8 o'clock."},
    {t:"hour", d:"a unit of time of 60 minutes", x:"School starts at the eighth hour."},
    {t:"money", d:"notes and coins used to buy things", x:"Count the money carefully."}
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
  focus:["Sorting plane shapes","Triangles, rectangles and circles","Drawing shapes","Halves, thirds and fourths"],
  terms:[
    {t:"shape", d:"the form of a figure", x:"A ball has a round shape."},
    {t:"triangle", d:"a flat shape with three straight sides", x:"A triangle has 3 corners."},
    {t:"rectangle", d:"a flat shape with four sides and four square corners", x:"The door is a rectangle."},
    {t:"circle", d:"a round flat shape with no corners", x:"Trace a circle round the cup."},
    {t:"square", d:"a rectangle with all four sides equal", x:"A square tile has equal sides."},
    {t:"side", d:"one straight edge of a shape", x:"Count each side of the shape."},
    {t:"corner", d:"where two sides meet", x:"A rectangle has four corners."},
    {t:"fraction", d:"a number showing equal parts of a whole", x:"One half is a fraction."},
    {t:"half", d:"one of two equal parts", x:"Cut the orange in half."},
    {t:"fourth", d:"one of four equal parts", x:"Shade one fourth of the square."}
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
  focus:["Sets and numbers","Disjoint sets","Addition and subtraction using population data","Number sequences","Parts of a whole"],
  terms:[
    {t:"disjoint sets", d:"two sets with no member in common", x:"The set of boys and the set of girls are disjoint sets."},
    {t:"population", d:"all the people in a place", x:"The population of the town is growing."},
    {t:"data", d:"facts and figures we collect", x:"Use the data to add the numbers."},
    {t:"sequence", d:"numbers in a fixed order or pattern", x:"2, 4, 6, 8 is a sequence."},
    {t:"whole", d:"a complete thing before it is divided", x:"The whole orange has four parts."},
    {t:"part", d:"a piece of a whole", x:"Each part is equal."},
    {t:"union", d:"putting two sets together", x:"Find the union of the two sets."},
    {t:"pattern", d:"a repeating arrangement", x:"Continue the pattern by 5s."},
    {t:"total", d:"the answer when we add", x:"Find the total of the two sets."},
    {t:"compare", d:"to say which is bigger, smaller or equal", x:"Compare the parts of the whole."}
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
  focus:["Numerals to 200","Place value","Standard and expanded form","Fractional numbers"],
  terms:[
    {t:"hundreds", d:"groups of one hundred", x:"There is 1 hundred in 125."},
    {t:"expanded form", d:"a number written as hundreds plus tens plus ones", x:"The expanded form of 234 is 200 + 30 + 4."},
    {t:"standard form", d:"a number written the usual way", x:"The standard form is 234."},
    {t:"place value", d:"what a digit is worth in its position", x:"The place value of 3 in 234 is 30."},
    {t:"numerator", d:"the top number of a fraction", x:"In 3/4 the numerator is 3."},
    {t:"denominator", d:"the bottom number of a fraction", x:"In 3/4 the denominator is 4."},
    {t:"fractional number", d:"a number that shows part of a whole", x:"One third is a fractional number."},
    {t:"digit", d:"any of the symbols 0 to 9", x:"200 has three digits."},
    {t:"value", d:"how much something is worth", x:"Find the value of the digit 7."},
    {t:"numeral", d:"the written symbol for a number", x:"Write the numeral for one hundred."}
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
  focus:["Adding three or more 2-digit numbers","Subtracting without regrouping","Equality and inequality","Addition using family data"],
  terms:[
    {t:"sum", d:"the answer when numbers are added", x:"Find the sum of 21 and 34."},
    {t:"equality", d:"when two sides are equal, shown by =", x:"Equality means both sides are the same."},
    {t:"inequality", d:"when two sides are not equal, shown by > or <", x:"An inequality uses > or <."},
    {t:"minuend", d:"the number you subtract from", x:"In 45 − 12, the minuend is 45."},
    {t:"subtrahend", d:"the number being taken away", x:"In 45 − 12, the subtrahend is 12."},
    {t:"difference", d:"the answer in subtraction", x:"The difference is 33."},
    {t:"column addition", d:"adding numbers set out one under another", x:"Use column addition for three numbers."},
    {t:"estimate", d:"a sensible guess before working", x:"Estimate the sum before you add."},
    {t:"check", d:"to make sure the answer is right", x:"Check by subtracting your answer."},
    {t:"more than", d:"greater than", x:"32 is more than 21."}
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
  focus:["Addition with regrouping","Subtraction with regrouping","Multiplication of 1-digit numerals"],
  terms:[
    {t:"regrouping", d:"changing ten ones into one ten, or one ten into ten ones", x:"Use regrouping when the ones make ten or more."},
    {t:"carry", d:"to take a ten into the tens column", x:"Carry the 1 to the tens column."},
    {t:"borrow", d:"to take a ten and change it into ten ones", x:"Borrow one ten to subtract."},
    {t:"product", d:"the answer in multiplication", x:"The product of 4 and 3 is 12."},
    {t:"factor", d:"a number being multiplied", x:"In 4 × 3, both 4 and 3 are factors."},
    {t:"times", d:"another word for multiplied by", x:"Four times three is twelve."},
    {t:"repeated addition", d:"adding the same number again and again", x:"3 × 4 is repeated addition: 4 + 4 + 4."},
    {t:"multiply", d:"to find how many in equal groups", x:"Multiply 5 by 6."},
    {t:"equal groups", d:"groups with the same number in each", x:"Make 3 equal groups of 4."},
    {t:"tens column", d:"the column where tens are written", x:"Add the tens column last."}
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
  focus:["Weight and capacity","Measuring length and height","Standard units","Telling time","Monetary value of currency"],
  terms:[
    {t:"standard unit", d:"a unit that is the same for everyone", x:"The metre is a standard unit."},
    {t:"local unit", d:"a unit such as a hand span or footstep", x:"A hand span is a local unit."},
    {t:"metre", d:"a standard unit of length", x:"The rope is 3 metres long."},
    {t:"centimetre", d:"one hundredth of a metre", x:"The pencil is 15 centimetres long."},
    {t:"kilogram", d:"a standard unit of weight", x:"The rice weighs 2 kilograms."},
    {t:"litre", d:"a standard unit of capacity", x:"The bottle holds one litre."},
    {t:"minute", d:"a unit of time; 60 make one hour", x:"Wait for five minutes."},
    {t:"half past", d:"thirty minutes after the hour", x:"It is half past two."},
    {t:"currency", d:"the money used in a country", x:"The Liberian dollar is our currency."},
    {t:"height", d:"how tall something is", x:"Measure the height of the door."}
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
  focus:["Ordinal numbers 1st to 20th","Simple properties of line segments","Circular shapes","Triangular and rectangular shapes"],
  terms:[
    {t:"ordinal number", d:"a number showing position, such as 1st or 3rd", x:"An ordinal number shows who came first."},
    {t:"cardinal number", d:"a number showing how many", x:"A cardinal number tells the quantity."},
    {t:"position", d:"the place where something stands in order", x:"What is your position in the line?"},
    {t:"line segment", d:"a straight path with two end points", x:"Draw a line segment with a ruler."},
    {t:"quadrilateral", d:"a flat shape with four straight sides", x:"A quadrilateral has four sides."},
    {t:"vertex", d:"a corner where two sides meet", x:"A triangle has three vertices."},
    {t:"square", d:"a shape with four equal sides and four right angles", x:"A square tile has equal sides."},
    {t:"circle", d:"a round shape with no sides or corners", x:"Trace a circle round the tin."},
    {t:"triangle", d:"a shape with three straight sides", x:"A triangle has three sides."},
    {t:"property", d:"a fact that describes a shape", x:"One property of a square is equal sides."}
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
  focus:["Addition","Subtraction with regrouping","Multiplication","Fractions","Geometry and symbols"],
  terms:[
    {t:"operation", d:"a way of working with numbers, such as + or ×", x:"Addition is one operation."},
    {t:"regrouping", d:"changing ten ones into one ten, or the reverse", x:"Use regrouping to subtract 52 − 27."},
    {t:"product", d:"the answer in multiplication", x:"The product of 6 and 7 is 42."},
    {t:"quotient", d:"the answer in division", x:"The quotient of 20 ÷ 4 is 5."},
    {t:"symbol", d:"a sign such as >, < or =", x:"Write the correct symbol in the box."},
    {t:"fraction", d:"a number showing equal parts of a whole", x:"Three quarters is a fraction."},
    {t:"whole", d:"the complete thing before dividing", x:"The whole is cut into 4 parts."},
    {t:"pattern", d:"an arrangement that repeats", x:"Find the pattern in the design."},
    {t:"sum", d:"the answer in addition", x:"Find the sum of 45 and 38."},
    {t:"difference", d:"the answer in subtraction", x:"Find the difference between 90 and 47."}
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
  focus:["Whole numbers to 1000","Place value: ones, tens, hundreds, thousands","Expanded notation","Ordering unit fractions"],
  terms:[
    {t:"thousand", d:"ten hundreds", x:"One thousand is written 1000."},
    {t:"unit fraction", d:"a fraction whose numerator is 1", x:"One third is a unit fraction."},
    {t:"expanded notation", d:"a number shown as the sum of its place values", x:"Expanded notation of 472 is 400 + 70 + 2."},
    {t:"place value chart", d:"a chart showing ones, tens, hundreds and thousands", x:"Use a place value chart to check."},
    {t:"ascending", d:"going from smallest to biggest", x:"Arrange in ascending order."},
    {t:"descending", d:"going from biggest to smallest", x:"Arrange in descending order."},
    {t:"round", d:"to give an approximate value", x:"Round 478 to the nearest hundred."},
    {t:"compare", d:"to decide which is bigger or smaller", x:"Compare 1/2 and 1/4."},
    {t:"numerator", d:"the top number of a fraction", x:"The numerator of 1/5 is 1."},
    {t:"denominator", d:"the bottom number of a fraction", x:"The denominator of 1/5 is 5."}
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
  focus:["Addition and subtraction of 1–4 digit numbers","Multiplication of 2–4 digit by 1–2 digit","Division","Open sentences","Commutative, associative, distributive and identity properties"],
  terms:[
    {t:"commutative", d:"the order can be changed without changing the answer", x:"Addition is commutative: 3 + 4 = 4 + 3."},
    {t:"associative", d:"the grouping can be changed without changing the answer", x:"The associative property groups numbers differently."},
    {t:"distributive", d:"multiplying a sum is the same as multiplying each part", x:"Use the distributive property to expand."},
    {t:"identity element", d:"the number that leaves another unchanged", x:"Zero is the identity element of addition."},
    {t:"open sentence", d:"a number sentence with a missing number", x:"n + 5 = 12 is an open sentence."},
    {t:"variable", d:"a letter standing for an unknown number", x:"The variable n stands for the missing number."},
    {t:"dividend", d:"the number being divided", x:"In 24 ÷ 6, the dividend is 24."},
    {t:"divisor", d:"the number you divide by", x:"In 24 ÷ 6, the divisor is 6."},
    {t:"quotient", d:"the answer in division", x:"The quotient is 4."},
    {t:"remainder", d:"what is left over after dividing", x:"25 ÷ 4 gives 6 remainder 1."}
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
  focus:["Definition of a fraction","Comparison of fractions","Equivalent fractions","Adding and subtracting like fractions","Mixed fractions","Multiplying a whole number by a fraction"],
  terms:[
    {t:"equivalent fractions", d:"different fractions naming the same amount", x:"1/2 and 2/4 are equivalent fractions."},
    {t:"like fractions", d:"fractions with the same denominator", x:"3/8 and 5/8 are like fractions."},
    {t:"unlike fractions", d:"fractions with different denominators", x:"1/2 and 1/3 are unlike fractions."},
    {t:"mixed number", d:"a whole number together with a fraction", x:"2 1/2 is a mixed number."},
    {t:"proper fraction", d:"a fraction less than one whole", x:"3/4 is a proper fraction."},
    {t:"improper fraction", d:"a fraction where the top is bigger than the bottom", x:"7/4 is an improper fraction."},
    {t:"lowest terms", d:"a fraction reduced as far as possible", x:"4/8 in lowest terms is 1/2."},
    {t:"shaded part", d:"the coloured portion of a shape", x:"Write the fraction for the shaded part."},
    {t:"numerator", d:"the top number of a fraction", x:"The numerator counts the parts taken."},
    {t:"denominator", d:"the bottom number of a fraction", x:"The denominator shows the equal parts."}
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
  focus:["Length, capacity, weight and height in both systems","Units of time and money","Perimeter, area and volume","Bar graphs of height"],
  terms:[
    {t:"perimeter", d:"the distance all round a shape", x:"Find the perimeter of the room."},
    {t:"area", d:"the amount of surface a shape covers", x:"The area is measured in square centimetres."},
    {t:"volume", d:"the space inside a solid object", x:"Find the volume of the box."},
    {t:"metric system", d:"the system using metres, grams and litres", x:"The metric system counts in tens."},
    {t:"English system", d:"the system using inches, feet, pounds and gallons", x:"The English system uses feet and inches."},
    {t:"square unit", d:"the unit used for area, such as cm²", x:"Area is written in square units."},
    {t:"quart", d:"a unit of capacity in the English system", x:"Four quarts make a gallon."},
    {t:"yard", d:"a length of three feet", x:"A yard is three feet long."},
    {t:"convert", d:"to change from one unit to another", x:"Convert metres to centimetres."},
    {t:"bar graph", d:"a graph using bars to compare amounts", x:"Draw a bar graph of the heights."}
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
  focus:["Measurement of geometric figures","Identification of figures","Reading charts and graphs","Types of angles","Mean, mode and median"],
  terms:[
    {t:"line segment", d:"a straight path with two end points", x:"Measure the line segment with a ruler."},
    {t:"ray", d:"a straight path with one end point that goes on forever", x:"A ray starts at one point."},
    {t:"angle", d:"the opening between two rays that meet", x:"Measure the angle with a protractor."},
    {t:"right angle", d:"an angle of exactly 90 degrees", x:"A corner of a book is a right angle."},
    {t:"acute angle", d:"an angle less than 90 degrees", x:"An acute angle is small and sharp."},
    {t:"obtuse angle", d:"an angle between 90 and 180 degrees", x:"An obtuse angle is wide open."},
    {t:"vertex", d:"the point where two sides or rays meet", x:"The angle is at the vertex."},
    {t:"mean", d:"the total divided by the number of items (average)", x:"Find the mean of the scores."},
    {t:"mode", d:"the value that appears most often", x:"The mode is the most common mark."},
    {t:"median", d:"the middle value when data is put in order", x:"Arrange the data to find the median."}
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
  focus:["Place value to hundred thousand","Comparing and ordering whole numbers","Rounding to the nearest thousand","Addition and subtraction of large numbers","Word problems"],
  terms:[
    {t:"hundred thousand", d:"the number 100 000", x:"Write one hundred thousand in figures."},
    {t:"round", d:"to give an approximate value to a stated place", x:"Round 4 728 to the nearest thousand."},
    {t:"approximate", d:"nearly correct but not exact", x:"An approximate answer is close enough."},
    {t:"birth rate", d:"how many babies are born in a population", x:"The birth rate is rising."},
    {t:"death rate", d:"how many people die in a population", x:"Subtract the death rate figures."},
    {t:"migration", d:"people moving from one place to another", x:"Migration changes the population."},
    {t:"place value", d:"the value a digit has because of its position", x:"The place value of 7 in 47 000 is 7 000."},
    {t:"ascending order", d:"from smallest to largest", x:"Arrange in ascending order."},
    {t:"descending order", d:"from largest to smallest", x:"Arrange in descending order."},
    {t:"estimate", d:"a sensible approximate answer", x:"Estimate the sum before adding."}
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
  focus:["Multiplication facts and properties","Multiplying multiples of 10, 100, 1000","Multiplying 2–4 digits by 1 digit","Dividing by 1-digit divisors","Zeros in the quotient"],
  terms:[
    {t:"multiple", d:"the result of multiplying by a whole number", x:"20 is a multiple of 5."},
    {t:"factor", d:"a number that divides exactly into another", x:"5 is a factor of 20."},
    {t:"product", d:"the answer in multiplication", x:"The product of 12 and 4 is 48."},
    {t:"dividend", d:"the number being divided", x:"In 84 ÷ 7 the dividend is 84."},
    {t:"divisor", d:"the number you divide by", x:"The divisor is 7."},
    {t:"quotient", d:"the answer in division", x:"The quotient is 12."},
    {t:"remainder", d:"the amount left over after dividing", x:"There is a remainder of 2."},
    {t:"long division", d:"the written method for dividing large numbers", x:"Use long division carefully."},
    {t:"estimate", d:"a rough answer used to check", x:"Estimate the product first."},
    {t:"array", d:"objects arranged in equal rows and columns", x:"Draw an array to show 4 × 6."}
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
  focus:["Even and odd numbers","Factors and multiples","LCM and GCF","Parts of a set","Equivalent and simplified fractions","Adding and subtracting fractions"],
  terms:[
    {t:"even number", d:"a number exactly divisible by 2", x:"16 is an even number."},
    {t:"odd number", d:"a number not exactly divisible by 2", x:"17 is an odd number."},
    {t:"factor", d:"a number that divides exactly into another", x:"3 is a factor of 12."},
    {t:"multiple", d:"the result of multiplying by a whole number", x:"12 is a multiple of 3."},
    {t:"GCF", d:"the greatest common factor of two numbers", x:"The GCF of 12 and 18 is 6."},
    {t:"LCM", d:"the lowest common multiple of two numbers", x:"The LCM of 4 and 6 is 12."},
    {t:"prime number", d:"a number with only two factors, 1 and itself", x:"7 is a prime number."},
    {t:"composite number", d:"a number with more than two factors", x:"9 is a composite number."},
    {t:"simplify", d:"to reduce a fraction to its lowest terms", x:"Simplify 6/9 to 2/3."},
    {t:"equivalent", d:"having the same value", x:"2/4 is equivalent to 1/2."}
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
  focus:["Multiplying by 2-digit multipliers","Estimating products and quotients","Dividing by 2-digit divisors","Decimals to hundredths","Comparing decimals"],
  terms:[
    {t:"decimal", d:"a number with a decimal point showing parts of a whole", x:"3.75 is a decimal."},
    {t:"decimal point", d:"the dot separating whole numbers from parts", x:"Line up the decimal point when adding."},
    {t:"tenths", d:"the first place after the decimal point", x:"In 0.4 there are 4 tenths."},
    {t:"hundredths", d:"the second place after the decimal point", x:"In 0.25 there are 25 hundredths."},
    {t:"multiplier", d:"the number you multiply by", x:"The multiplier is 24."},
    {t:"estimate", d:"a rough answer used to check", x:"Estimate the product before working."},
    {t:"partial product", d:"one part of a long multiplication", x:"Add the partial products together."},
    {t:"divisor", d:"the number you divide by", x:"The divisor is 12."},
    {t:"quotient", d:"the answer in division", x:"Estimate the quotient first."},
    {t:"place holder", d:"a zero used to keep digits in the right place", x:"Write a zero as a place holder."}
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
  focus:["Estimating and finding elapsed time","Customary units","Metric units and conversions","Perimeter","Area of squares and rectangles"],
  terms:[
    {t:"elapsed time", d:"the amount of time that has passed", x:"Find the elapsed time between the two clocks."},
    {t:"customary unit", d:"units such as inches, feet, pounds and gallons", x:"The foot is a customary unit."},
    {t:"metric unit", d:"units such as metres, grams and litres", x:"The gram is a metric unit."},
    {t:"convert", d:"to change from one unit to another", x:"Convert 3 km to metres."},
    {t:"perimeter", d:"the distance all round a shape", x:"Find the perimeter of the field."},
    {t:"area", d:"the amount of surface covered", x:"Area is measured in square units."},
    {t:"millimetre", d:"one tenth of a centimetre", x:"Ten millimetres make one centimetre."},
    {t:"kilometre", d:"one thousand metres", x:"The town is 5 kilometres away."},
    {t:"capacity", d:"how much a container holds", x:"The capacity is 20 litres."},
    {t:"mass", d:"the amount of matter in an object, its weight", x:"The mass is 4 kilograms."}
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
  focus:["Geometry concepts","Angles","Polygons","Parts of a circle","Solid figures","Bar, line and pie graphs"],
  terms:[
    {t:"polygon", d:"a closed shape with straight sides", x:"A hexagon is a polygon."},
    {t:"parallel lines", d:"lines that never meet however far they go", x:"Railway tracks are parallel lines."},
    {t:"perpendicular", d:"meeting at a right angle", x:"The walls are perpendicular to the floor."},
    {t:"intersecting lines", d:"lines that cross each other", x:"The two intersecting lines meet at a point."},
    {t:"radius", d:"the distance from the centre of a circle to its edge", x:"The radius is half the diameter."},
    {t:"diameter", d:"a straight line across a circle through the centre", x:"The diameter is 14 cm."},
    {t:"circumference", d:"the distance all round a circle", x:"Measure the circumference with a string."},
    {t:"pentagon", d:"a polygon with five sides", x:"A pentagon has five sides."},
    {t:"hexagon", d:"a polygon with six sides", x:"A hexagon has six sides."},
    {t:"solid figure", d:"a three-dimensional shape such as a cube or sphere", x:"A cube is a solid figure."}
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
  focus:["Properties of multiplication","Multiplying and dividing whole numbers and decimals","Divisibility rules","Prime and composite numbers","LCM and GCF","Equivalent and simplified fractions"],
  terms:[
    {t:"divisibility rule", d:"a quick test to see if one number divides another exactly", x:"The divisibility rule for 5 checks the last digit."},
    {t:"prime number", d:"a number with exactly two factors, 1 and itself", x:"13 is a prime number."},
    {t:"composite number", d:"a number with more than two factors", x:"15 is a composite number."},
    {t:"prime factor", d:"a factor that is itself a prime number", x:"The prime factors of 12 are 2 and 3."},
    {t:"commutative property", d:"changing the order does not change the answer", x:"The commutative property applies to × and +."},
    {t:"associative property", d:"changing the grouping does not change the answer", x:"Use the associative property to group numbers."},
    {t:"distributive property", d:"multiplying a sum by multiplying each part", x:"The distributive property expands brackets."},
    {t:"GCF", d:"the greatest common factor", x:"The GCF of 24 and 36 is 12."},
    {t:"LCM", d:"the lowest common multiple", x:"The LCM of 6 and 8 is 24."},
    {t:"sieve", d:"a method of crossing out multiples to find primes", x:"Use the sieve to find primes to 50."}
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
  focus:["Prime factors","Even and odd numbers","Square numbers","Rounding off","Estimation","Arrays"],
  terms:[
    {t:"square number", d:"the product of a number multiplied by itself", x:"36 is a square number."},
    {t:"square root", d:"the number that was multiplied by itself", x:"The square root of 49 is 7."},
    {t:"array", d:"objects arranged in equal rows and columns", x:"Draw an array of 4 rows of 5."},
    {t:"prime factorisation", d:"writing a number as a product of primes", x:"The prime factorisation of 30 is 2 × 3 × 5."},
    {t:"estimation", d:"finding an approximate answer", x:"Use estimation to check your work."},
    {t:"round off", d:"to give an approximate value", x:"Round off 3 468 to the nearest hundred."},
    {t:"exponent", d:"the small number showing how many times to multiply", x:"In 5² the exponent is 2."},
    {t:"perfect square", d:"a whole number that is the square of a whole number", x:"81 is a perfect square."},
    {t:"even number", d:"a number divisible by 2", x:"24 is an even number."},
    {t:"odd number", d:"a number not divisible by 2", x:"25 is an odd number."}
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
  focus:["Adding and subtracting like fractions","Adding and subtracting unlike fractions","Multiplying fractions and mixed numbers","Dividing fractions","Converting fractions to decimals"],
  terms:[
    {t:"LCD", d:"the lowest common denominator of two fractions", x:"The LCD of 1/3 and 1/4 is 12."},
    {t:"mixed number", d:"a whole number with a fraction", x:"3 1/2 is a mixed number."},
    {t:"improper fraction", d:"a fraction with the numerator larger than the denominator", x:"9/4 is an improper fraction."},
    {t:"reciprocal", d:"a fraction turned upside down", x:"The reciprocal of 2/3 is 3/2."},
    {t:"invert", d:"to turn a fraction upside down", x:"Invert the divisor and multiply."},
    {t:"unlike fractions", d:"fractions with different denominators", x:"1/2 and 1/5 are unlike fractions."},
    {t:"lowest terms", d:"a fraction that cannot be simplified further", x:"Give the answer in lowest terms."},
    {t:"convert", d:"to change from one form to another", x:"Convert 3/4 to a decimal."},
    {t:"numerator", d:"the top number in a fraction", x:"Add the numerators only."},
    {t:"denominator", d:"the bottom number in a fraction", x:"Keep the denominator the same."}
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
  focus:["Elapsed time","Estimating units of measure","Metric conversions","Perimeter of polygons","Area of triangles and parallelograms","Temperature scales"],
  terms:[
    {t:"parallelogram", d:"a quadrilateral with opposite sides parallel", x:"The area of a parallelogram is base × height."},
    {t:"base", d:"the side of a shape used with the height", x:"The base of the triangle is 10 cm."},
    {t:"height", d:"the perpendicular distance from base to top", x:"Measure the height at a right angle to the base."},
    {t:"polygon", d:"a closed shape with straight sides", x:"Find the perimeter of the polygon."},
    {t:"Fahrenheit", d:"a temperature scale where water boils at 212°", x:"Read the temperature in Fahrenheit."},
    {t:"Centigrade", d:"a temperature scale where water boils at 100°", x:"Centigrade is also called Celsius."},
    {t:"volume", d:"the space a solid occupies", x:"Find the volume in cubic centimetres."},
    {t:"millilitre", d:"one thousandth of a litre", x:"1 000 millilitres make one litre."},
    {t:"gram", d:"a metric unit of mass", x:"1 000 grams make one kilogram."},
    {t:"elapsed time", d:"the time that has passed", x:"Calculate the elapsed time."}
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
  focus:["Points, lines, rays and segments","Parallel and perpendicular lines","Kinds of angles and measuring them","Classifying triangles and quadrilaterals","Solid figures","Circumference"],
  terms:[
    {t:"equilateral triangle", d:"a triangle with all three sides equal", x:"An equilateral triangle has 60° angles."},
    {t:"isosceles triangle", d:"a triangle with two equal sides", x:"An isosceles triangle has two equal angles."},
    {t:"scalene triangle", d:"a triangle with no equal sides", x:"A scalene triangle has three different sides."},
    {t:"rhombus", d:"a quadrilateral with four equal sides", x:"A rhombus looks like a pushed-over square."},
    {t:"trapezoid", d:"a quadrilateral with one pair of parallel sides", x:"A trapezoid has one pair of parallel sides."},
    {t:"congruent", d:"exactly the same shape and size", x:"The two triangles are congruent."},
    {t:"protractor", d:"an instrument for measuring angles", x:"Measure the angle with a protractor."},
    {t:"circumference", d:"the distance round a circle", x:"Find the circumference using π."},
    {t:"pi", d:"the number about 22/7 used with circles", x:"Take pi as 22/7."},
    {t:"complementary", d:"two angles adding to 90 degrees", x:"Complementary angles add to a right angle."}
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
  focus:["Ratio and proportion","Rates","Percent and fraction","Finding percent of a number","Frequency tables","Mean, mode and median","Bar, line, picture and circle graphs"],
  terms:[
    {t:"ratio", d:"a comparison of two quantities", x:"The ratio of boys to girls is 3 : 2."},
    {t:"proportion", d:"a statement that two ratios are equal", x:"A proportion has two equal ratios."},
    {t:"percent", d:"a number out of one hundred", x:"Twenty percent means 20 out of 100."},
    {t:"rate", d:"a comparison of quantities with different units", x:"The rate is L$50 per kilogram."},
    {t:"frequency table", d:"a table showing how often each value occurs", x:"Make a frequency table of the data."},
    {t:"bar graph", d:"a graph using bars to show amounts", x:"Draw a bar graph of enrolment."},
    {t:"line graph", d:"a graph using a line to show change", x:"A line graph shows change over time."},
    {t:"circle graph", d:"a pie chart showing parts of a whole", x:"A circle graph shows the share of each part."},
    {t:"mean", d:"the average — the total divided by the number of items", x:"Find the mean of the scores."},
    {t:"median", d:"the middle value when data is ordered", x:"The median is the middle value."}
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
  focus:["Description of sets","Intersection and union","Rational and irrational numbers","Sets of prime numbers","Replacement sets","Venn diagrams"],
  terms:[
    {t:"universal set", d:"the set containing all the members under discussion", x:"The universal set holds every element."},
    {t:"subset", d:"a set whose members all belong to another set", x:"Every set is a subset of itself."},
    {t:"union", d:"all the members of both sets, shown ∪", x:"Find the union of A and B."},
    {t:"intersection", d:"only the members found in both sets, shown ∩", x:"The intersection contains common members."},
    {t:"empty set", d:"a set with no members", x:"The empty set is written { }."},
    {t:"Venn diagram", d:"overlapping circles showing set relations", x:"Draw a Venn diagram of the two sets."},
    {t:"rational number", d:"a number that can be written as a fraction", x:"0.5 is a rational number."},
    {t:"irrational number", d:"a number that cannot be written as an exact fraction", x:"π is an irrational number."},
    {t:"set builder notation", d:"describing a set by a rule", x:"Use set builder notation: {x : x is even}."},
    {t:"power set", d:"the set of all subsets of a set", x:"The power set of a 3-member set has 8 members."}
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
  focus:["Base ten number system","Changing base ten to base five and back","Adding in base five","Subtracting in base five","Multiplying in base five"],
  terms:[
    {t:"base", d:"the grouping size of a number system", x:"We usually count in base ten."},
    {t:"base ten", d:"the ordinary number system grouping in tens", x:"Base ten uses digits 0 to 9."},
    {t:"base five", d:"a number system grouping in fives", x:"Base five uses only digits 0 to 4."},
    {t:"place value", d:"the value of a digit due to its position", x:"In base five the place values are 1, 5, 25."},
    {t:"convert", d:"to change from one base to another", x:"Convert 27 to base five."},
    {t:"digit", d:"a single symbol in a number", x:"Base five has five digits."},
    {t:"remainder", d:"what is left after dividing", x:"Record each remainder when converting."},
    {t:"group", d:"a set of equal size used in counting", x:"Group the sticks in fives."},
    {t:"expanded notation", d:"a number written as the sum of place values", x:"Use expanded notation to convert."},
    {t:"numeral", d:"the symbol representing a number", x:"Write the numeral in base five."}
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
  focus:["Changing fractions to decimals","Adding and subtracting decimals","Multiplying decimals","Dividing decimals","Rounding to tenths, hundredths and thousandths"],
  terms:[
    {t:"decimal", d:"a number with a decimal point", x:"Write the answer as a decimal."},
    {t:"tenth", d:"the first decimal place", x:"Round to the nearest tenth."},
    {t:"hundredth", d:"the second decimal place", x:"0.05 is five hundredths."},
    {t:"thousandth", d:"the third decimal place", x:"0.004 is four thousandths."},
    {t:"round off", d:"to give an approximate value", x:"Round off 3.4567 to two places."},
    {t:"decimal places", d:"the number of digits after the point", x:"Count the decimal places in both factors."},
    {t:"terminating decimal", d:"a decimal that comes to an end", x:"0.75 is a terminating decimal."},
    {t:"recurring decimal", d:"a decimal where digits repeat forever", x:"1/3 gives a recurring decimal."},
    {t:"quotient", d:"the answer in division", x:"Write the quotient as a decimal."},
    {t:"product", d:"the answer in multiplication", x:"The product has two decimal places."}
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
  focus:["Squares and square roots","Cubes using factors","LCM and GCF","Measurement of geometric figures","Conversion between systems","Area, volume, perimeter and circumference"],
  terms:[
    {t:"square root", d:"the number which multiplied by itself gives the original", x:"The square root of 81 is 9."},
    {t:"perfect square", d:"a number whose square root is a whole number", x:"144 is a perfect square."},
    {t:"cube", d:"a number multiplied by itself three times", x:"The cube of 3 is 27."},
    {t:"cube root", d:"the number which cubed gives the original", x:"The cube root of 27 is 3."},
    {t:"factorisation", d:"breaking a number into its factors", x:"Use factorisation to find the cube root."},
    {t:"radius", d:"the distance from the centre of a circle to the edge", x:"The radius is half the diameter."},
    {t:"circumference", d:"the distance round a circle", x:"Find the circumference with π × d."},
    {t:"volume", d:"the space inside a solid", x:"Volume is measured in cubic units."},
    {t:"cylinder", d:"a solid with two circular ends", x:"A tin is a cylinder."},
    {t:"conversion", d:"changing from one unit to another", x:"Do the conversion carefully."}
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
  focus:["Adding and subtracting fractions","Multiplication of fractions","Reciprocals and division","Concept of space and points","Constructing and measuring angles","Circumference, area of a circle, volume of cubes"],
  terms:[
    {t:"reciprocal", d:"a fraction turned upside down", x:"The reciprocal of 3/5 is 5/3."},
    {t:"improper fraction", d:"a fraction bigger than one whole", x:"11/4 is an improper fraction."},
    {t:"mixed fraction", d:"a whole number with a fraction", x:"2 3/4 is a mixed fraction."},
    {t:"lowest term", d:"a fraction fully simplified", x:"Write the product in its lowest term."},
    {t:"space", d:"the set of all points", x:"Geometry describes space."},
    {t:"protractor", d:"an instrument for measuring angles", x:"Use a protractor to measure 65°."},
    {t:"compass", d:"an instrument for drawing circles and arcs", x:"Use a compass to construct the angle."},
    {t:"perpendicular", d:"at right angles to", x:"Construct a perpendicular line."},
    {t:"circumference", d:"the distance round a circle", x:"Calculate the circumference."},
    {t:"volume", d:"the space inside a solid", x:"Find the volume of the cube."}
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
  focus:["Ratio, fraction and percentage","Proportion as an equation of two ratios","Birth rate, death rate and enrolment","Elements and kinds of graphs","Bar, picture, line and circle graphs"],
  terms:[
    {t:"ratio", d:"a comparison of two quantities of the same kind", x:"Write the ratio in its simplest form."},
    {t:"proportion", d:"an equation stating two ratios are equal", x:"Solve the proportion for the missing value."},
    {t:"percentage", d:"a fraction expressed out of one hundred", x:"Express the result as a percentage."},
    {t:"birth rate", d:"births compared with the total population", x:"The birth rate is 30 per 1 000."},
    {t:"death rate", d:"deaths compared with the total population", x:"Calculate the death rate."},
    {t:"enrolment", d:"the number of pupils registered", x:"School enrolment increased this year."},
    {t:"bar graph", d:"a graph using bars of different heights", x:"Draw a bar graph of enrolment."},
    {t:"picture graph", d:"a graph using pictures to stand for amounts", x:"A picture graph uses symbols."},
    {t:"line graph", d:"a graph showing change with a line", x:"A line graph shows the trend."},
    {t:"circle graph", d:"a pie chart showing shares of a whole", x:"A circle graph shows each share."}
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
