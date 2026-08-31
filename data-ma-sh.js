/* Curriculum data — Republic of Liberia, Senior High MATHEMATICS, Grades 10–12
   Derived from the "Maths 10-12" curriculum guide (69 pp.), 6 periods per grade
   (11 units in Grade 10, 8 in Grade 11, 23 in Grade 12 = 42 units; the guide
   numbers Grade 12 units I–XXIII, so several periods carry more than one unit).

   Same unit shape as the Elementary (data-ma.js) and Junior High (data-ma79.js)
   Mathematics files, so the GEN_MA engine renders it unchanged:
     terms[] {t,d,x} · worked[] {q,steps[],a} · drills[] {id,p} · drillLabel
     · word[] {q,a} · challenge[] {q,a} · activities[] · materials[] · assessment[]

   Every unit also carries study[] — the course text of the unit, written out
   as a block list (h3 / p / bul / num / table / rule) that follows the CONTENTS
   column of the guide it comes from, with the guide page range of each unit
   recorded in a comment above its list.

   The drill ids used here are registered by gen-ma-sh.js on GEN_MA.DRILLS,
   each with a GEN_MA.METHOD entry so every answer key states the WHY.
   Unlike the Junior High drills, most Senior High drills also return a numeric
   answer (n) so the multiple-choice sheet has options to build.

   Per the project rule, the external links listed in the source guide
   (khanacademy.com, mathway.com, quickmath.com, chegg.com, symbolab.com,
   cymath.com) are deliberately omitted: the pack must stay fully offline.
*/

const MA_CURRICULUM_SH = [

/* =============================== GRADE 10 =============================== */
/* Period I — Sets and Operations on Sets */
{
  grade:10, period:"I", sem:"One", icon:"\uD83D\uDDC2\uFE0F",
  title:"Sets and Operations on Sets",
  subtitle:"Unit I: Set notation, types of sets, subsets and Venn diagrams",
  outcomes:["Apply concepts and skills on sets and operations on sets to solve set related problems"],
  objectives:["Define and identify a set using set notation","Define and discuss the types of sets (infinite, finite, universal, equal, equivalent)","Define, discuss and illustrate subsets","Discuss Venn diagrams","Use a Venn diagram to illustrate the intersection of sets","Use a Venn diagram to illustrate the union of sets","Use a Venn diagram to show disjoint sets and the complement of a set","State and discuss the properties of sets","Use Venn diagrams to solve two-set and three-set problems"],
  note:"A <b>set</b> is a well-defined collection of objects, written in braces: A = {2, 4, 6}. <b>Intersection</b> (A ∩ B) keeps only the members the two sets share; <b>union</b> (A ∪ B) gathers every member of either set. The <b>complement</b> A′ is everything in the universal set ξ that is not in A. Two sets are <b>disjoint</b> when they share no member at all, and for any two sets <b>n(A ∪ B) = n(A) + n(B) − n(A ∩ B)</b>.",

  study:[
    /* ---- course text: Semester One, Period I — Sets and Operations on Sets (guide pp. 2–3) ---- */
    {k:"h3", t:"Sets, Elements and Set Notation"},
    {k:"p", t:"A **set** is a well-defined collection of distinct objects, numbers or ideas. The objects in a set are its **members** or **elements**, and a set is usually named with a capital letter. We write the members inside curly brackets; 4 is an element of {2, 4, 6}, written **4 ∈ {2, 4, 6}**, and 5 is not a member, written 5 ∉ {2, 4, 6}."},
    {k:"p", t:"A set can be described in two ways: by **listing** its members, A = {2, 4, 6}, or by a **ruled description** such as A = {x : x is an even number less than 8}. Each member is written only once, because a set does not repeat its members, and the order in which they are written does not matter."},
    {k:"rule"},
    {k:"h3", t:"Types of Sets"},
    {k:"bul", items:["**Finite set** — the members can be counted and come to an end, e.g. {Mon, Tue, Wed}.","**Infinite set** — the members go on without end, e.g. {1, 2, 3, ...}.","**Universal set** (ξ) — the set that contains every object under discussion; every other set in the problem sits inside it.","**Equal sets** — two sets with exactly the same members, written A = B. {1, 2, 3} and {3, 1, 2} are equal.","**Equivalent sets** — two sets with the same number of members. {a, b} and {1, 2} are equivalent, but not equal.","**Empty set** — a set with no members at all, written { } or ∅, and it is a subset of every set."]},
    {k:"p", t:"Remember: **all equal sets are equivalent, but not all equivalent sets are equal.** Equal sets must share the same members; equivalent sets only share the same count."},
    {k:"rule"},
    {k:"h3", t:"Subsets and the Number of Subsets"},
    {k:"p", t:"A **subset** is a set whose members are all found in another set. If A = {1, 2, 3, 4} and B = {2, 4}, then B is a subset of A, written **B ⊆ A**. If B has fewer members than A it is a **proper subset**, written B ⊂ A."},
    {k:"p", t:"A set with n members has **2ⁿ subsets**, because each member is either in the subset or out of it."},
    {k:"p", t:"**Worked example — all subsets of A = {1, 2, 3}:**"},
    {k:"num", items:["With 0 members: { }.","With 1 member: {1}, {2}, {3}.","With 2 members: {1, 2}, {1, 3}, {2, 3}.","With 3 members: {1, 2, 3}.","Total = 2³ = 8 subsets."]},
    {k:"rule"},
    {k:"h3", t:"Venn Diagrams"},
    {k:"p", t:"A **Venn diagram** draws the universal set ξ as a rectangle and the sets inside it as circles. The **intersection** A ∩ B is the overlap of the two circles — the members in BOTH sets. The **union** A ∪ B is everything inside either circle — the members of A or B or both, each written once. Two sets are **disjoint** when their circles do not touch, and the **complement** A′ is the part of the rectangle outside circle A."},
    {k:"p", t:"To count the union, use **n(A ∪ B) = n(A) + n(B) − n(A ∩ B)**: the members of the overlap were counted twice, so they must be subtracted once. For three sets the same idea gives n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(A ∩ C) − n(B ∩ C) + n(A ∩ B ∩ C)."},
    {k:"rule"},
    {k:"h3", t:"Properties of Set Operations"},
    {k:"table", head:["Property","Rule","Example"], rows:[["Commutative","A ∪ B = B ∪ A; A ∩ B = B ∩ A","{1,2} ∪ {2,3} = {2,3} ∪ {1,2}"],["Associative","(A ∪ B) ∪ C = A ∪ (B ∪ C); same for ∩","Order of grouping does not matter"],["Distributive","A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)","Intersection spreads over union"],["Identity","A ∪ ∅ = A; A ∩ ξ = A","∪ with ∅ and ∩ with ξ change nothing"],["Idempotent","A ∪ A = A; A ∩ A = A","Repeating a set changes nothing"],["Complement","A ∪ A′ = ξ; A ∩ A′ = ∅","A set and its complement share nothing"]]},
    {k:"p", t:"**Worked example — two-set problem:** in a class of 40, 25 offer Biology and 20 offer Chemistry, and 12 offer both. Then n(B ∪ C) = 25 + 20 − 12 = 33, so 33 pupils offer at least one of the two subjects and 40 − 33 = 7 offer neither. Always start a set problem by drawing the two or three circles and filling the overlaps first."}
  ],
  focus:["Set notation and listing members","Finite, infinite, universal, equal and equivalent sets","Subsets and the number of subsets","Venn diagrams for two and three sets","Intersection, union, disjoint sets and complement","Properties of set operations"],
  terms:[
    {t:"set", d:"a well-defined collection of distinct objects", x:"The set of even digits is {2, 4, 6, 8}."},
    {t:"element", d:"one object inside a set", x:"4 is an element of {2, 4, 6}."},
    {t:"universal set", d:"the set that contains every object under discussion", x:"If ξ = {1, 2, 3, 4}, no other number may be used."},
    {t:"finite set", d:"a set whose members can be counted and finished", x:"{Mon, Tue, Wed} is a finite set."},
    {t:"infinite set", d:"a set whose members go on for ever", x:"The set of natural numbers is an infinite set."},
    {t:"equal sets", d:"two sets with exactly the same members", x:"{1, 2, 3} and {3, 1, 2} are equal sets."},
    {t:"equivalent sets", d:"two sets with the same number of members", x:"{a, b} and {1, 2} are equivalent sets."},
    {t:"subset", d:"a set formed from members of another set", x:"{2, 4} is a subset of {2, 4, 6}."},
    {t:"intersection", d:"the members common to both sets, written A ∩ B", x:"The intersection of {1,2,3} and {3,4} is {3}."},
    {t:"union", d:"all the members of both sets together, written A ∪ B", x:"The union of {1,2} and {2,3} is {1, 2, 3}."},
    {t:"complement", d:"everything in ξ that is not in the set, written A′", x:"If ξ = {1,2,3,4} and A = {1,2}, then A′ = {3,4}."},
    {t:"disjoint sets", d:"two sets with no member in common", x:"{1, 3} and {2, 4} are disjoint sets."}
  ],
  worked:[
    {q:"If ξ = {1, 2, 3, …, 10}, A = {2, 4, 6, 8} and B = {3, 6, 9}, find A ∩ B, A ∪ B and n(A ∪ B).",
     steps:["List the members the two sets share: 6 only.","So A ∩ B = {6}.","Gather every member of A or B: 2, 3, 4, 6, 8, 9.","So A ∪ B = {2, 3, 4, 6, 8, 9}.","Count them: n(A ∪ B) = 6."],
     a:"A ∩ B = {6}, A ∪ B = {2, 3, 4, 6, 8, 9}, n(A ∪ B) = 6"},
    {q:"A = {1, 2, 3}. Write all the subsets of A and state how many there are.",
     steps:["A set with n members has 2ⁿ subsets; here n = 3.","Subsets with 0 members: { }.","With 1 member: {1}, {2}, {3}.","With 2 members: {1,2}, {1,3}, {2,3}.","With 3 members: {1,2,3}.","Total = 2³ = 8."],
     a:"8 subsets: { }, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}"},
    {q:"In a class of 40, 25 offer Biology and 20 offer Chemistry, and 12 offer both. How many offer at least one of the two?",
     steps:["Use n(A ∪ B) = n(A) + n(B) − n(A ∩ B).","n(A ∪ B) = 25 + 20 − 12.","n(A ∪ B) = 33."],
     a:"33 pupils offer at least one of the two subjects"}
  ],
  drillLabel:"Sets and operations on sets",
  drills:[
    {id:"set_type_sh"},{id:"subsets_num_sh"},{id:"set_union_sh"},{id:"set_inter_sh"},
    {id:"set_complement_sh"},{id:"set_disjoint_sh"},{id:"venn_two_sh"},{id:"set_card_sh"}
  ],
  word:[
    {q:"In a school of 120 pupils, 70 play football, 60 play basketball and 25 play both. How many play neither game?",
     a:"n(F ∪ B) = 70 + 60 − 25 = 105, so 120 − 105 = 15 pupils play neither."},
    {q:"Of 60 candidates, 35 passed Mathematics, 40 passed English and 18 passed neither. How many passed both?",
     a:"Passed at least one = 60 − 18 = 42; both = 35 + 40 − 42 = 33 candidates."},
    {q:"ξ = {x : 1 ≤ x ≤ 20, x is an integer}, A = {multiples of 3}, B = {multiples of 5}. List A ∩ B.",
     a:"A ∩ B = {15} — the only multiple of both 3 and 5 up to 20."},
    {q:"A = {a, b, c, d, e}. How many subsets does A have, and how many of them have exactly 2 members?",
     a:"2⁵ = 32 subsets; 5C2 = 10 subsets with exactly two members."},
    {q:"In a survey of 50 households, 30 own a radio, 25 own a phone and 12 own both. How many own a radio only?",
     a:"Radio only = 30 − 12 = 18 households."}
  ],
  challenge:[
    {q:"Why is the empty set a subset of every set?",
     a:"A ⊆ B means every member of A is in B. The empty set has no members, so there is nothing that could fail to be in B; the statement is true automatically."},
    {q:"Two sets have n(A) = 8, n(B) = 12 and n(A ∪ B) = 17. Find n(A ∩ B) and explain the formula you used.",
     a:"n(A ∩ B) = 8 + 12 − 17 = 3. The members of A ∩ B are counted once in n(A) and once in n(B), so they must be subtracted once."},
    {q:"Give an example of two sets that are equivalent but not equal, and explain the difference.",
     a:"{1, 2, 3} and {x, y, z} are equivalent (3 members each) but not equal because their members differ. Equal sets must have the same members, not just the same number."}
  ],
  activities:["Sort objects in the classroom into sets and describe them","Draw Venn diagrams for two and three sets","Solve two-set problems from class enrolment data","List all subsets of a small set and count them"],
  materials:["Set diagram charts","Coloured markers","Cardboard circles for Venn diagrams","Class enrolment data"],
  assessment:["Quiz on set notation and types of sets","Venn diagram class assignment","Two-set problem test","Observation and participation"]
},

/* Period I — Rational Numbers */
{
  grade:10, period:"I", sem:"One", icon:"\u2797",
  title:"Rational Numbers",
  subtitle:"Unit II: Rational and real numbers, decimal representation, approximation and standard form",
  outcomes:["Apply the concept of rational numbers to add, subtract, multiply and divide rational numbers, use the properties of multiplication, and solve problems involving real numbers and their number line diagrams"],
  objectives:["Identify and discuss rational numbers","Solve addition and subtraction of rational numbers","Solve multiplication of rational numbers","State and use the properties of multiplication of rational numbers","Demonstrate the division of rational numbers","Solve decimal representation","Define real numbers and illustrate them on the real number line","Identify the properties of real numbers","Discuss approximation","Demonstrate numbers in standard form","State binary operations"],
  note:"A <b>rational number</b> is any number that can be written as p/q where p and q are integers and q ≠ 0. Fractions, terminating decimals and recurring decimals are all rational; √2 and π are not. The <b>real numbers</b> are the rational numbers together with the irrational numbers, and every real number has exactly one point on the <b>number line</b>. <b>Approximation</b> rounds a number to a stated number of significant figures or decimal places, and <b>standard form</b> writes a number as A × 10ⁿ with 1 ≤ A < 10.",

  study:[
    /* ---- course text: Semester One, Period I — Rational Numbers (guide pp. 4–5) ---- */
    {k:"h3", t:"Rational Numbers and the Number Line"},
    {k:"p", t:"A **rational number** is any number that can be written as a fraction p/q, where p and q are integers and **q ≠ 0**. Whole numbers, terminating decimals and recurring decimals are all rational. Numbers that cannot be written as a fraction of two integers — √2, π, √3 — are **irrational**, and the rational and irrational numbers together make the **real numbers**."},
    {k:"p", t:"The **real number line** is a straight line on which every real number has exactly one point. Positive numbers lie to the right of 0, negative numbers to the left, and every point of the line corresponds to one real number."},
    {k:"rule"},
    {k:"h3", t:"Adding and Subtracting Rational Numbers"},
    {k:"p", t:"To add or subtract fractions, first rewrite them with a **common denominator** — the lowest common denominator (LCD) is the LCM of the denominators — then add or subtract the numerators and keep the denominator."},
    {k:"p", t:"**Worked example — evaluate 2/3 + 5/6 − 1/4:**"},
    {k:"num", items:["The LCD of 3, 6 and 4 is 12.","2/3 = 8/12, 5/6 = 10/12 and 1/4 = 3/12.","8/12 + 10/12 − 3/12 = 15/12.","Simplify: 15/12 = 5/4 = 1¼."]},
    {k:"rule"},
    {k:"h3", t:"Multiplication, Division and their Properties"},
    {k:"p", t:"To **multiply** fractions, multiply numerators together and denominators together. To **divide**, multiply by the reciprocal of the second fraction: 2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6. The **reciprocal** of a number is one divided by that number, so a × 1/a = 1."},
    {k:"table", head:["Property","Meaning","Example"], rows:[["Closure","The operation on rationals always gives a rational","2/3 + 1/5 is rational"],["Commutative","The order of the numbers does not matter","2/3 × 1/5 = 1/5 × 2/3"],["Associative","The grouping does not matter","(a × b) × c = a × (b × c)"],["Identity","1 is the identity for ×, 0 for +","a × 1 = a"],["Inverse","Every non-zero number has a reciprocal","2/3 × 3/2 = 1"],["Distributive","Multiplication spreads over addition","a(b + c) = ab + ac"]]},
    {k:"rule"},
    {k:"h3", t:"Decimal Representation"},
    {k:"p", t:"A **terminating decimal** ends after a finite number of places, like 3/8 = 0.375. A **recurring decimal** has a block of digits that repeats forever, like 2/3 = 0.666… or 5/11 = 0.454545… Both are rational. To change a decimal to a fraction, write it over the appropriate power of ten and simplify; to change a fraction to a decimal, divide the numerator by the denominator."},
    {k:"rule"},
    {k:"h3", t:"Approximation and Standard Form"},
    {k:"p", t:"**Approximation** rounds a number to a given degree of accuracy — a stated number of decimal places or **significant figures**. The **significant figures** are the digits that carry meaning: 0.004 56 has three significant figures (4, 5, 6). Look at the first digit to be discarded: if it is 5 or more, round up."},
    {k:"p", t:"**Standard form** writes a number as **A × 10ⁿ**, where 1 ≤ A < 10 and n is an integer. It is the fastest way to write very large or very small numbers."},
    {k:"p", t:"**Worked example:** 0.000456 = 4.56 × 10⁻⁴, and 3.7 × 10⁴ = 37 000."},
    {k:"rule"},
    {k:"h3", t:"Binary Operations"},
    {k:"p", t:"A **binary operation** is a rule that combines two members of a set to produce one member of that set; +, −, ×, ÷ and ∗ are all examples of binary operations. To evaluate a defined operation, substitute the given numbers into the rule."},
    {k:"p", t:"**Worked example — if a ∗ b = 3a − 2b:** 5 ∗ 4 = 3(5) − 2(4) = 7, but 4 ∗ 5 = 3(4) − 2(5) = 2. Since 7 ≠ 2, the operation is **not commutative** — the order of the two inputs matters."}
  ],
  focus:["Rational numbers and their four operations","Properties of multiplication of rational numbers","Terminating and recurring decimals","Rational and irrational numbers on the number line","Properties of real numbers","Approximation and significant figures","Standard form","Binary operations"],
  terms:[
    {t:"rational number", d:"a number that can be written as p/q, q ≠ 0", x:"0.75 = 3/4, so 0.75 is a rational number."},
    {t:"irrational number", d:"a number that cannot be written as a fraction of two integers", x:"√2 is an irrational number."},
    {t:"real number", d:"any rational or irrational number", x:"−5, 0, 3/4 and π are all real numbers."},
    {t:"number line", d:"a straight line on which every real number has one point", x:"Plot −3 and 2.5 on the number line."},
    {t:"terminating decimal", d:"a decimal that ends after a finite number of places", x:"3/8 = 0.375 is a terminating decimal."},
    {t:"recurring decimal", d:"a decimal in which a block of digits repeats for ever", x:"1/3 = 0.333… is a recurring decimal."},
    {t:"closure property", d:"an operation on a set always gives a result in that set", x:"The sum of two rational numbers is rational."},
    {t:"reciprocal", d:"a number turned upside down; a × 1/a = 1", x:"The reciprocal of 2/5 is 5/2."},
    {t:"approximation", d:"rounding a number to a given accuracy", x:"3.14159 ≈ 3.14 to 2 decimal places."},
    {t:"significant figures", d:"the digits that carry meaning in a number", x:"0.00470 has 3 significant figures."},
    {t:"standard form", d:"writing a number as A × 10ⁿ where 1 ≤ A < 10", x:"45 000 = 4.5 × 10⁴."},
    {t:"binary operation", d:"a rule that combines two members of a set to give one member", x:"a ∗ b = a + 2b is a binary operation."}
  ],
  worked:[
    {q:"Evaluate 2/3 + 5/6 − 1/4.",
     steps:["LCD of 3, 6 and 4 is 12.","2/3 = 8/12, 5/6 = 10/12, 1/4 = 3/12.","8/12 + 10/12 − 3/12 = 15/12.","Simplify: 15/12 = 5/4 = 1¼."],
     a:"5/4 or 1¼"},
    {q:"Write 0.000456 in standard form and 3.7 × 10⁴ as an ordinary number.",
     steps:["Move the decimal point 4 places right to get 4.56, so the power is −4.","0.000456 = 4.56 × 10⁻⁴.","For 3.7 × 10⁴, move the point 4 places right.","3.7 × 10⁴ = 37 000."],
     a:"4.56 × 10⁻⁴ and 37 000"},
    {q:"If a ∗ b = 3a − 2b, find 5 ∗ 4 and check whether the operation is commutative.",
     steps:["5 ∗ 4 = 3(5) − 2(4) = 15 − 8 = 7.","4 ∗ 5 = 3(4) − 2(5) = 12 − 10 = 2.","7 ≠ 2, so a ∗ b ≠ b ∗ a."],
     a:"5 ∗ 4 = 7; the operation is not commutative"}
  ],
  drillLabel:"Rational numbers and real numbers",
  drills:[
    {id:"rat_add_sh"},{id:"rat_sub_sh"},{id:"rat_mul_sh"},{id:"rat_div_sh"},
    {id:"frac_dec_sh"},{id:"approx_sh"},{id:"standard_form_sh"},{id:"rational_classify_sh"},
    {id:"binary_op_sh"}
  ],
  word:[
    {q:"A tailor bought 7½ m of cloth and used 2⅔ m for a shirt and 1¾ m for a pair of trousers. How much cloth is left?",
     a:"7½ − 2⅔ − 1¾ = 90/12 − 32/12 − 21/12 = 37/12 = 3 1/12 m left."},
    {q:"The population of a town was 4.56 × 10⁴ in 2020 and 5.02 × 10⁴ in 2025. Find the increase as an ordinary number.",
     a:"5.02 × 10⁴ − 4.56 × 10⁴ = 0.46 × 10⁴ = 4 600 people."},
    {q:"A rope 12 m long is cut into pieces each 3/8 m long. How many pieces are obtained?",
     a:"12 ÷ 3/8 = 12 × 8/3 = 32 pieces."},
    {q:"A bag of rice costs L$2 450. Correct the cost to the nearest hundred Liberian dollars.",
     a:"L$2 500 (the tens digit 5 rounds the hundreds up)."},
    {q:"Three friends share L$1 260 in the ratio 2 : 3 : 4. What fraction of the money does the second friend receive, and how much is it?",
     a:"3/9 = 1/3 of the money, which is L$420."}
  ],
  challenge:[
    {q:"Explain why 0.999… recurring is exactly equal to 1, not merely close to it.",
     a:"Let x = 0.999…, then 10x = 9.999…. Subtracting gives 9x = 9, so x = 1. There is no gap left between 0.999… and 1."},
    {q:"Is the set of integers closed under division? Justify with an example.",
     a:"No. 3 ÷ 2 = 3/2, which is not an integer, so division can take you outside the set of integers."},
    {q:"Round 0.04996 to 2 significant figures and explain the trap in this question.",
     a:"0.050. The leading zeros are not significant, so the first two significant figures are 4 and 9; rounding 49 up gives 50, and the final zero must be kept to show the accuracy."}
  ],
  activities:["Place rational and irrational numbers on a number line","Practise rounding to significant figures from newspaper figures","Convert between fractions, decimals and percentages","Write large Liberian statistics in standard form"],
  materials:["Number line strips","Calculators","Metre rules","Newspaper data sheets"],
  assessment:["Quiz on rational numbers","Approximation class assignment","Standard form test","Observation and participation"]
},

/* Period II — Algebraic Expressions */
{
  grade:10, period:"II", sem:"One", icon:"\uD83E\uDDEE",
  title:"Algebraic Expressions",
  subtitle:"Unit III: Forming, evaluating and expanding expressions; algebraic fractions and factorization",
  outcomes:["Apply the concepts to form algebraic statements, form and evaluate algebraic expressions, and determine relations between two algebraic expressions through expansion, algebraic fractions, factorization, products of binomials, perfect squares and the difference of two squares"],
  objectives:["Express statements in algebraic expressions","Discuss numerical statements","Form algebraic expressions","Evaluate algebraic expressions","Show relations between two algebraic expressions","Demonstrate expansion of algebraic expressions","Add and subtract algebraic fractions","Discuss and solve problems on factorization","Find the product of two binomials","Express a perfect square algebraic expression","Show the difference of two squares","Factorize quadratic expressions"],
  note:"An <b>expression</b> is a collection of terms joined by + or − signs; an <b>equation</b> has an equals sign. <b>Expansion</b> multiplies out brackets — a(b + c) = ab + ac. The product of two binomials uses <b>FOIL</b>: (x + a)(x + b) = x² + (a + b)x + ab. Two special products are the <b>perfect square</b> (a + b)² = a² + 2ab + b² and the <b>difference of two squares</b> a² − b² = (a + b)(a − b). <b>Factorization</b> is expansion run backwards, and it is the key to solving equations quickly.",

  study:[
    /* ---- course text: Semester One, Period II — Algebraic Expression (guide pp. 6–9) ---- */
    {k:"h3", t:"Statements and Expressions"},
    {k:"p", t:"A **numerical statement** uses only numbers, such as 2 × 3 + 4 = 10. An **algebraic statement** uses letters as well, such as x + 5 = 12. A **term** is a single number, a letter, or a product of numbers and letters; the number multiplying a letter is its **coefficient**, so in 7x the coefficient is 7. **Like terms** have exactly the same letters and powers, and only like terms can be added or subtracted: 3x + 2x = 5x, but 3x + 2x² cannot be combined."},
    {k:"rule"},
    {k:"h3", t:"Forming and Evaluating Algebraic Expressions"},
    {k:"p", t:"Form an expression by translating the words into algebra; then **evaluate** it by **substitution** — replacing each letter by the given number and working out the arithmetic."},
    {k:"p", t:"**Worked example:** if x = 3 and y = 2, then 4x − 3y = 12 − 6 = 6. An **identity** such as (x + 1)² ≡ x² + 2x + 1 is true for every value of x and is written with the sign ≡, while an **equation** is true only for particular values."},
    {k:"rule"},
    {k:"h3", t:"Expansion of Brackets"},
    {k:"p", t:"**Expansion** is multiplying out the brackets using the distributive law: a(b + c) = ab + ac. For two brackets, multiply every term of the first by every term of the second — **first, outer, inner, last** (FOIL) — then collect like terms."},
    {k:"p", t:"**Worked example — expand (2x + 3)(x − 5):** first 2x × x = 2x²; outer 2x × (−5) = −10x; inner 3 × x = 3x; last 3 × (−5) = −15. Collecting gives **2x² − 7x − 15**."},
    {k:"rule"},
    {k:"h3", t:"Algebraic Fractions"},
    {k:"p", t:"Algebraic fractions follow the same rules as number fractions. To add or subtract them, find the lowest common denominator, write each fraction over it, and combine the numerators. To simplify, factor the numerator and denominator and cancel the common factor."},
    {k:"p", t:"**Worked example — simplify 2/x + 3/(x + 1):** the LCD is x(x + 1); 2/x = 2(x + 1)/x(x + 1) and 3/(x + 1) = 3x/x(x + 1), so the sum is (2x + 2 + 3x)/x(x + 1) = **(5x + 2)/x(x + 1)**."},
    {k:"rule"},
    {k:"h3", t:"Factorization"},
    {k:"p", t:"**Factorization** is expansion in reverse — writing an expression as a product of factors. The methods in this unit are:"},
    {k:"bul", items:["**Common factor:** 6x² + 9x = 3x(2x + 3).","**Grouping:** ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y).","**Difference of two squares:** a² − b² = (a + b)(a − b), so x² − 9 = (x + 3)(x − 3).","**Perfect square:** a² + 2ab + b² = (a + b)² and a² − 2ab + b² = (a − b)².","**Product of two binomials:** (x + p)(x + q) = x² + (p + q)x + pq."]},
    {k:"p", t:"**Worked example — factorize 3x² + 7x + 2:** multiply a × c = 3 × 2 = 6; find two numbers with product 6 and sum 7 — 1 and 6; split the middle term, 3x² + 6x + x + 2; factor in pairs, 3x(x + 2) + 1(x + 2); take out the common bracket, **(3x + 1)(x + 2)**. Always check by expanding your answer."}
  ],
  focus:["Algebraic and numerical statements","Forming and evaluating expressions","Expansion of brackets","Algebraic fractions","Factorization by common factors and grouping","Product of two binomials","Perfect squares","Difference of two squares","Factorizing quadratic expressions"],
  terms:[
    {t:"term", d:"a single number, a letter, or a product of numbers and letters", x:"3x and −7 are terms of 3x − 7."},
    {t:"coefficient", d:"the number multiplying a letter in a term", x:"In 5x² the coefficient is 5."},
    {t:"like terms", d:"terms with exactly the same letters and powers", x:"4a and −9a are like terms."},
    {t:"expansion", d:"multiplying out the brackets of an expression", x:"3(x + 4) expands to 3x + 12."},
    {t:"binomial", d:"an expression with two terms", x:"2x + 5 is a binomial."},
    {t:"perfect square", d:"the square of a binomial, a² + 2ab + b²", x:"x² + 6x + 9 = (x + 3)²."},
    {t:"difference of two squares", d:"a² − b², which factors as (a + b)(a − b)", x:"x² − 25 = (x + 5)(x − 5)."},
    {t:"factorization", d:"writing an expression as a product of its factors", x:"6x + 9 = 3(2x + 3)."},
    {t:"algebraic fraction", d:"a fraction with letters in the numerator or denominator", x:"(x + 1)/(x − 2) is an algebraic fraction."},
    {t:"quadratic expression", d:"an expression whose highest power is 2", x:"2x² + 3x − 5 is quadratic."},
    {t:"substitution", d:"replacing letters by given numbers", x:"If x = 2, then 3x + 1 = 7."},
    {t:"identity", d:"a statement true for every value of the letter, written ≡", x:"(a + b)² ≡ a² + 2ab + b²."}
  ],
  worked:[
    {q:"Expand and simplify (2x + 3)(x − 5).",
     steps:["First: 2x × x = 2x².","Outer: 2x × (−5) = −10x.","Inner: 3 × x = 3x.","Last: 3 × (−5) = −15.","Collect: 2x² − 10x + 3x − 15 = 2x² − 7x − 15."],
     a:"2x² − 7x − 15"},
    {q:"Factorize 3x² + 7x + 2.",
     steps:["Multiply a × c = 3 × 2 = 6.","Find two numbers with product 6 and sum 7: 1 and 6.","Split the middle term: 3x² + 6x + x + 2.","Factor in pairs: 3x(x + 2) + 1(x + 2).","Take out the common bracket: (3x + 1)(x + 2)."],
     a:"(3x + 1)(x + 2)"},
    {q:"Simplify (2/x) + (3/(x + 1)).",
     steps:["The LCD is x(x + 1).","2/x = 2(x + 1)/x(x + 1).","3/(x + 1) = 3x/x(x + 1).","Add the numerators: 2x + 2 + 3x = 5x + 2."],
     a:"(5x + 2)/x(x + 1)"}
  ],
  drillLabel:"Algebraic expressions",
  drills:[
    {id:"eval_expr_sh"},{id:"expand_binom_sh"},{id:"diff_squares_sh"},{id:"perfect_square_sh"},
    {id:"factor_quad_sh"},{id:"factor_common_sh"},{id:"algebra_frac_sh"},{id:"expand_brackets_sh"},
    {id:"simplify_like_sh"}
  ],
  word:[
    {q:"A rectangle has length (3x + 2) cm and width (x − 1) cm. Find an expression for its area and evaluate it when x = 5.",
     a:"A = (3x + 2)(x − 1) = 3x² − x − 2; when x = 5, A = 75 − 5 − 2 = 68 cm²."},
    {q:"The sum of three consecutive integers is 87. Form an equation and find the integers.",
     a:"n + (n + 1) + (n + 2) = 87, so 3n + 3 = 87, n = 28; the integers are 28, 29, 30."},
    {q:"Factorize completely 4x² − 100 and hence evaluate 4(52²) − 100 without a calculator.",
     a:"4x² − 100 = 4(x² − 25) = 4(x + 5)(x − 5). With x = 52: 4 × 57 × 47 = 10 716."},
    {q:"A square of side (x + 4) cm has area 121 cm². Find x.",
     a:"(x + 4)² = 121, so x + 4 = 11 and x = 7 cm."},
    {q:"Simplify (x² − 9)/(x² + 5x + 6).",
     a:"(x + 3)(x − 3)/(x + 2)(x + 3) = (x − 3)/(x + 2)."}
  ],
  challenge:[
    {q:"Show that the product of two consecutive integers is always even.",
     a:"Let the integers be n and n + 1. One of any two consecutive integers is even, so their product has a factor 2 and is therefore even."},
    {q:"Explain why a² + b² cannot be factorized over the real numbers while a² − b² can.",
     a:"a² − b² = (a + b)(a − b) because the middle terms cancel. For a sum of squares no pair of real factors gives +b² with a zero middle term; it needs imaginary numbers."},
    {q:"If x + 1/x = 3, find x² + 1/x² without solving for x.",
     a:"Square both sides: x² + 2 + 1/x² = 9, so x² + 1/x² = 7."}
  ],
  activities:["Play expansion and factorization matching games","Build area models with algebra tiles","Factorize quadratics in pairs and check by expansion","Write real-life statements as algebraic expressions"],
  materials:["Algebra tiles","Graph paper","Card matching sets","Whiteboard markers"],
  assessment:["Expansion quiz","Factorization class assignment","Algebraic fraction test","Observation and participation"]
},

/* Period II — Number Base */
{
  grade:10, period:"II", sem:"One", icon:"\uD83D\uDD22",
  title:"Number Base",
  subtitle:"Unit IV: The base ten system, conversion between bases, and arithmetic in other bases",
  outcomes:["Apply concepts and skills to solve problems on number base"],
  objectives:["Discuss the base ten system","Convert base ten to other bases","Add and subtract in bases five and eight","Multiply in bases","Operate in other bases","Convert from other bases to base ten","Solve simple equations in bases"],
  note:"Our everyday system is <b>base ten</b>: each place is ten times the place on its right. In <b>base b</b> each place is b times the place on its right and only the digits 0 to b − 1 are allowed, so base five uses 0–4 and base eight uses 0–7. To convert <b>from base ten</b>, divide repeatedly by the new base and read the remainders upwards. To convert <b>to base ten</b>, multiply each digit by its place value and add. In any base, when a column total reaches the base you carry 1 into the next column.",

  study:[
    /* ---- course text: Semester One, Period II — Number Base (guide pp. 10–11) ---- */
    {k:"h3", t:"The Base Ten System"},
    {k:"p", t:"A **base** is the number of different digits a number system uses. The ordinary system is **base ten**, which uses the ten digits 0–9. Every digit has a **place value**: in 3 452 the 3 stands for 3 × 1000, the 4 for 4 × 100, the 5 for 5 × 10 and the 2 for 2 × 1, because the columns are the powers of ten: 10³, 10², 10¹, 10⁰."},
    {k:"p", t:"In any base, the columns are the powers of that base. Base five uses the digits 0–4 and the place values 5², 5¹, 5⁰; base eight uses the digits 0–7 and the place values 8², 8¹, 8⁰. A number written in a base other than ten carries a small subscript: 234₈ means base eight."},
    {k:"rule"},
    {k:"h3", t:"Converting from Base Ten to Other Bases"},
    {k:"p", t:"Divide the number by the new base again and again, writing down the remainder each time, until the quotient is 0. The remainders, read from the last to the first, give the number in the new base."},
    {k:"p", t:"**Worked example — convert 156₁₀ to base eight:**"},
    {k:"num", items:["156 ÷ 8 = 19 remainder 4.","19 ÷ 8 = 2 remainder 3.","2 ÷ 8 = 0 remainder 2.","Read the remainders from the last to the first: 2, 3, 4.","So 156₁₀ = **234₈**."]},
    {k:"rule"},
    {k:"h3", t:"Converting Other Bases to Base Ten"},
    {k:"p", t:"Write the number in expanded form using the place values of its base, multiply, and add."},
    {k:"p", t:"**Worked example — convert 412₅ to base ten:** the place values of base five are 25, 5, 1; 4 × 25 = 100, 1 × 5 = 5, 2 × 1 = 2, and 100 + 5 + 2 = **107₁₀**."},
    {k:"rule"},
    {k:"h3", t:"Adding, Subtracting and Multiplying in Other Bases"},
    {k:"p", t:"Work column by column exactly as in base ten, but **carry as soon as a column reaches the base**. In base five, 5 is written 10₅; in base eight, 8 is written 10₈. When subtracting in another base, borrow one from the next column and add the base, not ten."},
    {k:"p", t:"**Worked example — add 342₅ and 214₅:**"},
    {k:"num", items:["Ones: 2 + 4 = 6 = 11₅ — write 1, carry 1.","Fives: 4 + 1 + 1 = 6 = 11₅ — write 1, carry 1.","Twenty-fives: 3 + 2 + 1 = 6 = 11₅ — write 1, carry 1.","So 342₅ + 214₅ = **1111₅**."]},
    {k:"rule"},
    {k:"h3", t:"Simple Equations in Bases"},
    {k:"p", t:"An equation in a base is solved by the same balance method, but each step stays inside that base. For example, x + 24₅ = 41₅ gives x = 41₅ − 24₅ = 12₅ (ones: 1 − 4 needs a borrow, 11₅ − 4₅ = 2₅; fives: 3 − 2 = 1). Always answer in the same base the question uses, and check by substituting back."}
  ],
  focus:["Place value in base ten","Converting base ten to other bases","Converting other bases to base ten","Addition and subtraction in bases five and eight","Multiplication in bases","Simple equations in bases"],
  terms:[
    {t:"base", d:"the number of different digits a system uses", x:"Base eight uses the digits 0 to 7."},
    {t:"place value", d:"the value given to a digit by its position", x:"In 243₁₀ the 2 has place value 200."},
    {t:"base ten", d:"the ordinary decimal system, base 10", x:"1 024 is a base ten number."},
    {t:"binary", d:"base two, using only 0 and 1", x:"1011₂ = 11₁₀."},
    {t:"conversion", d:"writing the same number in a different base", x:"25₁₀ = 11001₂."},
    {t:"remainder", d:"what is left after dividing, used in conversion", x:"25 ÷ 2 leaves remainder 1."},
    {t:"carrying", d:"moving 1 to the next column when a column reaches the base", x:"In base five, 4 + 3 = 12₅."},
    {t:"digit", d:"one of the symbols used to write a number", x:"341 has three digits."}
  ],
  worked:[
    {q:"Convert 156₁₀ to base eight.",
     steps:["156 ÷ 8 = 19 remainder 4.","19 ÷ 8 = 2 remainder 3.","2 ÷ 8 = 0 remainder 2.","Read the remainders from the last to the first: 2, 3, 4."],
     a:"156₁₀ = 234₈"},
    {q:"Convert 412₅ to base ten.",
     steps:["Write the place values of base five: 25, 5, 1.","4 × 25 = 100.","1 × 5 = 5.","2 × 1 = 2.","Add: 100 + 5 + 2 = 107."],
     a:"412₅ = 107₁₀"},
    {q:"Add 342₅ + 214₅.",
     steps:["Ones column: 2 + 4 = 6, which is 11₅; write 1, carry 1.","Fives column: 4 + 1 + 1 (carry) = 6 = 11₅; write 1, carry 1.","Twenty-fives column: 3 + 2 + 1 = 6 = 11₅; write 1, carry 1.","The final carry gives 1."],
     a:"342₅ + 214₅ = 1111₅"}
  ],
  drillLabel:"Number base",
  drills:[
    {id:"base_to_ten_sh"},{id:"ten_to_base_sh"},{id:"base_add_sh"},{id:"base_sub_sh"},
    {id:"base_mul_sh"},{id:"place_value_sh"}
  ],
  word:[
    {q:"A computer stores the number 11011₂. What is this number in base ten?",
     a:"16 + 8 + 0 + 2 + 1 = 27."},
    {q:"There are 200 exercise books to be shared into boxes of eight. Write 200 in base eight and say how many full boxes there are.",
     a:"200₁₀ = 310₈, so 31 full boxes with none left over."},
    {q:"Convert 4 096₁₀ to base two and state the highest power of 2 used.",
     a:"4 096 = 2¹², so in base two it is 1 followed by twelve 0s: 1000000000000₂; the highest power is 2¹²."},
    {q:"Solve for x: 23ₓ = 11₁₀.",
     a:"2x + 3 = 11, so 2x = 8 and x = 4 (base four uses digits 0–3, which is valid here)."},
    {q:"In base five a market woman has 34₅ oranges and sells 12₅. How many are left, in base five?",
     a:"34₅ − 12₅ = 22₅ oranges (19 − 7 = 12 in base ten)."}
  ],
  challenge:[
    {q:"Why is 12₅ not a valid number in base four?",
     a:"Base four allows only the digits 0, 1, 2 and 3. The digit 2 is allowed but there is no digit above 3, so 12₄ is valid while 14₄ is not; 12₅ is fine in base five. The point is that a digit must be smaller than the base."},
    {q:"Explain why a number written in base ten is divisible by 9 exactly when the sum of its digits is divisible by 9.",
     a:"Because 10 ≡ 1 (mod 9), every power of 10 leaves remainder 1, so the number and the sum of its digits leave the same remainder on division by 9."},
    {q:"Convert 0.5₁₀ to base two and explain your method.",
     a:"0.5₁₀ = 0.1₂. Multiply by the base repeatedly: 0.5 × 2 = 1.0, so the first binary fraction digit is 1 and nothing is left."}
  ],
  activities:["Convert class roll numbers into base two and base eight","Practise addition tables in base five","Use place value charts to show why carrying works","Solve simple base equations in pairs"],
  materials:["Place value charts","Counters","Base blocks","Squared paper"],
  assessment:["Conversion quiz","Base arithmetic class assignment","Base equations test","Observation and participation"]
},

/* Period III — Plane Geometry */
{
  grade:10, period:"III", sem:"One", icon:"\uD83D\uDCCD",
  title:"Plane Geometry",
  subtitle:"Unit V: Angles, parallel lines, triangles, Pythagoras and polygons",
  outcomes:["Draw and measure angles and apply the angle properties of parallel lines, triangles and polygons, and use the Pythagoras theorem to solve problems on right-angled triangles"],
  objectives:["Draw and measure angles","Calculate angles","Discuss angle properties of parallel lines","Draw and name triangles","Discuss angle properties of triangles","Discuss right-angled triangles","Define and apply the Pythagoras theorem","Identify Pythagorean triples","Determine squares and square roots","Discuss the properties of polygons","Describe and calculate the angles of parallelograms, trapeziums, kites, rhombuses, rectangles and squares"],
  note:"Angles on a straight line add to <b>180°</b> and angles at a point add to <b>360°</b>. When a transversal crosses parallel lines, <b>alternate</b> angles are equal, <b>corresponding</b> angles are equal and <b>co-interior</b> angles add to 180°. The angles of any triangle add to <b>180°</b>, and an exterior angle equals the sum of the two interior opposite angles. In a right-angled triangle the <b>Pythagoras theorem</b> gives c² = a² + b², where c is the hypotenuse. The interior angles of an n-sided polygon add to <b>(n − 2) × 180°</b> and its exterior angles always add to <b>360°</b>.",

  study:[
    /* ---- course text: Semester One, Period III — Plane Geometry (guide pp. 12–13) ---- */
    {k:"h3", t:"Measuring and Drawing Angles"},
    {k:"p", t:"An angle measures the turn between two rays meeting at a point. Angles are classified by size: an **acute angle** is less than 90°, a **right angle** is exactly 90°, an **obtuse angle** lies between 90° and 180°, a **straight angle** is 180°, and a **reflex angle** lies between 180° and 360°. Use a protractor to measure or draw an angle, placing its centre on the vertex and one arm along the baseline."},
    {k:"rule"},
    {k:"h3", t:"Angles on a Line and at a Point"},
    {k:"p", t:"Three facts used everywhere in geometry: **angles on a straight line add to 180°**; **angles at a point add to 360°**; and **vertically opposite angles** (the angles across the crossing of two straight lines) are equal."},
    {k:"p", t:"**Worked example:** angles of 78° and 45° and x lie on a straight line, so 78 + 45 + x = 180, 123 + x = 180 and **x = 57°**."},
    {k:"rule"},
    {k:"h3", t:"Parallel Lines and a Transversal"},
    {k:"p", t:"A **transversal** is a line that cuts two or more other lines. When the lines are parallel, the transversal makes equal angles in matching positions:"},
    {k:"table", head:["Angle pair","Where they lie","Rule"], rows:[["Corresponding","Same position on each parallel line","Equal"],["Alternate","Between the parallels, on opposite sides of the transversal","Equal (the Z shape)"],["Co-interior","Between the parallels, on the same side of the transversal","Add to 180°"]]},
    {k:"rule"},
    {k:"h3", t:"Triangles"},
    {k:"p", t:"The three angles of any triangle **add to 180°**, and the **exterior angle** of a triangle (made by producing one side) equals the sum of the two opposite interior angles. An **isosceles triangle** has two equal sides and two equal base angles; an **equilateral triangle** has three equal sides and three 60° angles; a **scalene triangle** has no equal sides."},
    {k:"rule"},
    {k:"h3", t:"Right-Angled Triangles and Pythagoras"},
    {k:"p", t:"In a right-angled triangle the **hypotenuse** is the longest side, opposite the right angle. **Pythagoras' theorem** states that the square on the hypotenuse equals the sum of the squares on the other two sides: **c² = a² + b²**."},
    {k:"p", t:"**Worked example:** a triangle has legs 9 cm and 12 cm; c² = 81 + 144 = 225, so c = √225 = **15 cm**. Whole-number triples such as (3, 4, 5), (5, 12, 13) and (9, 12, 15) are called **Pythagorean triples**."},
    {k:"rule"},
    {k:"h3", t:"Polygons and Quadrilaterals"},
    {k:"p", t:"A **polygon** is a closed plane figure with straight sides; it is **regular** when all sides and all angles are equal. The interior angles of an n-sided polygon **add to (n − 2) × 180°**, and the exterior angles always add to 360°."},
    {k:"p", t:"**Worked example — regular octagon:** (8 − 2) × 180° = 1 080°, and 1 080 ÷ 8 = **135°** per interior angle. The exterior angle is 180° − 135° = 45°, and 8 × 45° = 360°, which checks."},
    {k:"table", head:["Quadrilateral","Properties"], rows:[["Parallelogram","Both pairs of opposite sides parallel and equal; opposite angles equal; diagonals bisect each other"],["Trapezium","One pair of opposite sides parallel"],["Kite","Two pairs of adjacent sides equal; one diagonal bisects the other at 90°"],["Rhombus","A parallelogram with all four sides equal; diagonals meet at 90°"],["Rectangle","A parallelogram with four right angles"],["Square","A rectangle with all four sides equal; it is also a rhombus"]]}
  ],
  focus:["Measuring and drawing angles","Angles on a straight line and at a point","Angle properties of parallel lines","Triangles and their angle properties","Right-angled triangles","Pythagoras theorem and Pythagorean triples","Squares and square roots","Polygons, parallelograms, trapeziums, kites and rhombuses"],
  terms:[
    {t:"acute angle", d:"an angle less than 90°", x:"A 40° angle is acute."},
    {t:"right angle", d:"an angle of exactly 90°", x:"The corners of a book are right angles."},
    {t:"obtuse angle", d:"an angle between 90° and 180°", x:"A 120° angle is obtuse."},
    {t:"reflex angle", d:"an angle between 180° and 360°", x:"A 250° angle is reflex."},
    {t:"transversal", d:"a line that cuts two or more other lines", x:"The transversal creates alternate angles."},
    {t:"alternate angles", d:"equal Z-shaped angles between parallel lines", x:"Alternate angles are both 65°."},
    {t:"co-interior angles", d:"interior angles on the same side of a transversal; they add to 180°", x:"110° + 70° = 180°, so the lines are parallel."},
    {t:"hypotenuse", d:"the longest side of a right-angled triangle, opposite the right angle", x:"The hypotenuse is 5 cm."},
    {t:"Pythagorean triple", d:"three whole numbers that satisfy a² + b² = c²", x:"3, 4 and 5 form a Pythagorean triple."},
    {t:"polygon", d:"a closed plane figure with straight sides", x:"A hexagon is a polygon."},
    {t:"regular polygon", d:"a polygon with all sides and all angles equal", x:"A square is a regular polygon."},
    {t:"exterior angle", d:"the angle between one side of a polygon and the next side produced", x:"Each exterior angle of a regular hexagon is 60°."}
  ],
  worked:[
    {q:"Find the missing angle x on a straight line where the other two angles are 78° and 45°.",
     steps:["Angles on a straight line add to 180°.","78 + 45 + x = 180.","123 + x = 180.","x = 57."],
     a:"x = 57°"},
    {q:"A right-angled triangle has legs 9 cm and 12 cm. Find the hypotenuse.",
     steps:["c² = a² + b².","c² = 81 + 144 = 225.","c = √225.","c = 15."],
     a:"The hypotenuse is 15 cm (9, 12, 15 is a multiple of 3, 4, 5)."},
    {q:"Find each interior angle of a regular octagon.",
     steps:["Sum of interior angles = (n − 2) × 180° = (8 − 2) × 180° = 1080°.","A regular octagon has 8 equal angles.","Each angle = 1080 ÷ 8.","Each angle = 135°."],
     a:"Each interior angle is 135°"}
  ],
  drillLabel:"Plane geometry",
  drills:[
    {id:"angle_straight_sh"},{id:"angle_parallel_sh"},{id:"triangle_angle_sh"},{id:"exterior_angle_sh"},
    {id:"pythagoras_sh"},{id:"polygon_interior_sh"},{id:"polygon_each_sh"},{id:"angle_at_point_sh"}
  ],
  word:[
    {q:"A ladder 13 m long rests against a wall with its foot 5 m from the wall. How high up the wall does it reach?",
     a:"h² = 13² − 5² = 169 − 25 = 144, so h = 12 m."},
    {q:"The interior angles of a polygon add to 1 440°. How many sides does it have?",
     a:"(n − 2) × 180 = 1 440, so n − 2 = 8 and n = 10 sides."},
    {q:"A rectangular field measures 60 m by 25 m. Find the length of its diagonal.",
     a:"d² = 60² + 25² = 3 600 + 625 = 4 225, so d = 65 m."},
    {q:"Two angles of a triangle are 3x° and 2x°, and the third is 60°. Find x and the largest angle.",
     a:"3x + 2x + 60 = 180, so 5x = 120 and x = 24; the largest angle is 72°."},
    {q:"Each exterior angle of a regular polygon is 24°. How many sides has it?",
     a:"360 ÷ 24 = 15 sides."}
  ],
  challenge:[
    {q:"Explain why the exterior angles of every convex polygon add to 360°, whatever the number of sides.",
     a:"Walking once round the polygon, you turn through each exterior angle in turn and finish facing the way you started, so the total turn is one full revolution, 360°."},
    {q:"Show that a triangle with sides 7, 24 and 25 is right-angled, and explain the test you used.",
     a:"7² + 24² = 49 + 576 = 625 = 25². Because the squares of the two shorter sides add to the square of the longest side, the converse of Pythagoras tells us the triangle is right-angled."},
    {q:"Can a triangle have two obtuse angles? Justify.",
     a:"No. Two obtuse angles alone would exceed 180°, but the three angles of a triangle must total exactly 180°."}
  ],
  activities:["Measure angles around the classroom with a protractor","Construct triangles with ruler and compass","Test Pythagorean triples with knotted string","Find the interior angles of regular polygons by cutting them into triangles"],
  materials:["Protractors","Rulers and compasses","Set squares","Geo-boards"],
  assessment:["Angle properties quiz","Pythagoras class assignment","Polygon test","Construction observation"]
},

/* Period IV — Linear Equations and Inequalities */
{
  grade:10, period:"IV", sem:"Two", icon:"\u2696\uFE0F",
  title:"Linear Equations and Inequalities",
  subtitle:"Unit VI: Equality and equivalence, solution sets, and graphing inequalities on a number line",
  outcomes:["Apply the concepts of equality and equivalence to find the solution set of linear equations and inequalities, graph them on a number line and solve related word problems"],
  objectives:["Use and solve equivalence concepts","Find the solution set of a linear equation","Solve word problems on linear equations","Solve linear inequalities in one variable","Graph linear inequalities on a number line","Solve word problems on linear inequalities"],
  note:"An <b>equation</b> states that two expressions are equal; a <b>linear equation</b> in one variable has the form ax + b = 0 and has exactly one solution. Whatever you do to one side you must do to the other, which keeps the two sides <b>equivalent</b>. An <b>inequality</b> uses <, >, ≤ or ≥ and its solution is usually a range of values. When you multiply or divide an inequality by a <b>negative</b> number you must <b>reverse the inequality sign</b>. On a number line a filled circle means the value is included and an open circle means it is not.",

  study:[
    /* ---- course text: Semester Two, Period IV — Linear Equations and Inequalities (guide p. 14) ---- */
    {k:"h3", t:"Equality and Equivalence"},
    {k:"p", t:"An **equation** is a statement that two expressions are equal, such as 3x + 2 = 11. The value of x that makes it true is its **solution**, and the set of all such values is the **solution set**. Two equations are **equivalent** when they have exactly the same solution set, so we may add, subtract, multiply or divide both sides by the same non-zero number without changing the solutions. A **linear equation** has the unknown to the power 1 only."},
    {k:"rule"},
    {k:"h3", t:"Solving Linear Equations"},
    {k:"p", t:"Collect the unknown terms on one side and the numbers on the other, then divide by the coefficient of the unknown. Work from the outside in: expand brackets first, then clear fractions, then collect terms."},
    {k:"p", t:"**Worked example — solve 5(x − 2) = 3x + 8:**"},
    {k:"num", items:["Expand: 5x − 10 = 3x + 8.","Collect x terms: 5x − 3x = 8 + 10.","2x = 18.","x = 9."]},
    {k:"rule"},
    {k:"h3", t:"Word Problems on Equations"},
    {k:"p", t:"Let the unknown be x, translate each sentence into algebra, write the equation, solve it and answer the question asked in words."},
    {k:"p", t:"**Worked example:** three times a number increased by 7 is 31. Let the number be n: 3n + 7 = 31, so 3n = 24 and **n = 8**."},
    {k:"rule"},
    {k:"h3", t:"Linear Inequalities"},
    {k:"p", t:"An **inequality** uses the signs < (less than), > (greater than), ≤ (less than or equal) and ≥ (greater than or equal). Inequalities are solved like equations, with one decisive difference: **multiplying or dividing both sides by a negative number reverses the sign**, so −3x ≥ −6 becomes x ≤ 2."},
    {k:"p", t:"An inequality may have many solutions, so its solution set is a range rather than a single number. Always test one value in your answer to make sure the sign is the right way round."},
    {k:"rule"},
    {k:"h3", t:"Graphing Inequalities on a Number Line"},
    {k:"p", t:"Draw a number line, place an **open circle** at a number that is not included (< or >) and a **filled circle** at a number that is included (≤ or ≥), then shade the region of the solutions."},
    {k:"p", t:"**Worked example — solve and graph 7 − 3x ≥ 1:** subtract 7 to get −3x ≥ −6; divide by −3 and reverse the sign: **x ≤ 2**; draw a filled circle at 2 and shade to the left. The solution set is {x : x ≤ 2}."}
  ],
  focus:["Equality and equivalence","Solving linear equations in one variable","Solution sets","Word problems on equations","Solving linear inequalities in one variable","Graphing inequalities on a number line"],
  terms:[
    {t:"equation", d:"a statement that two expressions are equal", x:"2x + 3 = 11 is an equation."},
    {t:"linear equation", d:"an equation whose highest power of the variable is 1", x:"3x − 7 = 2 is linear."},
    {t:"equivalent equations", d:"equations with exactly the same solution set", x:"x + 2 = 5 and x = 3 are equivalent."},
    {t:"solution set", d:"the set of all values that satisfy the equation", x:"The solution set of x² = 9 is {−3, 3}."},
    {t:"inequality", d:"a statement using <, >, ≤ or ≥", x:"x + 4 > 9 is an inequality."},
    {t:"number line", d:"a line used to show the solution of an inequality", x:"x ≥ 2 is shown with a filled circle at 2 and an arrow to the right."},
    {t:"reversing the sign", d:"flipping < to > when multiplying or dividing by a negative", x:"−2x < 6 gives x > −3."},
    {t:"identity", d:"an equation true for every value of the variable", x:"2(x + 1) ≡ 2x + 2."}
  ],
  worked:[
    {q:"Solve 5(x − 2) = 3x + 8.",
     steps:["Expand: 5x − 10 = 3x + 8.","Collect x terms: 5x − 3x = 8 + 10.","2x = 18.","x = 9."],
     a:"x = 9"},
    {q:"Solve and graph 7 − 3x ≥ 1.",
     steps:["Subtract 7: −3x ≥ −6.","Divide by −3 and reverse the sign: x ≤ 2.","Draw a filled circle at 2 and shade to the left."],
     a:"x ≤ 2"},
    {q:"Three times a number increased by 7 is 31. Find the number.",
     steps:["Let the number be n.","3n + 7 = 31.","3n = 24.","n = 8."],
     a:"The number is 8"}
  ],
  drillLabel:"Linear equations and inequalities",
  drills:[
    {id:"solve_linear_sh"},{id:"solve_brackets_sh"},{id:"solve_ineq_sh"},{id:"solve_two_sides_sh"},
    {id:"solution_set_sh"},{id:"ineq_word_sh"}
  ],
  word:[
    {q:"A taxi charges L$500 to start and L$120 per kilometre. If a fare was L$2 060, how far was the journey?",
     a:"500 + 120d = 2 060, so 120d = 1 560 and d = 13 km."},
    {q:"Find the range of values of x for which 4(x − 1) < 2x + 10.",
     a:"4x − 4 < 2x + 10, so 2x < 14 and x < 7."},
    {q:"A pupil needs an average of at least 65% over four tests. Her first three marks are 58, 72 and 61. What must she score on the fourth?",
     a:"(58 + 72 + 61 + m)/4 ≥ 65, so 191 + m ≥ 260 and m ≥ 69%."},
    {q:"The perimeter of a rectangle is 46 cm and its length is 5 cm more than its width. Find the dimensions.",
     a:"2(w + w + 5) = 46, so 4w + 10 = 46, w = 9 cm and length = 14 cm."},
    {q:"Solve 2x − 5 > 3x + 1 and graph the solution.",
     a:"−x > 6, so x < −6; open circle at −6, arrow to the left."}
  ],
  challenge:[
    {q:"Why must the inequality sign be reversed when dividing by a negative number? Illustrate.",
     a:"Because multiplying by −1 mirrors the number line: 3 > 2 becomes −3 < −2. So −2x < 6 gives x > −3, not x < −3."},
    {q:"Solve 3 < 2x + 1 ≤ 9 and describe the solution set in words.",
     a:"Subtract 1: 2 < 2x ≤ 8. Divide by 2: 1 < x ≤ 4. The solution is every number greater than 1 and at most 4."},
    {q:"For what values of k does the equation kx + 6 = 3x + 6 have infinitely many solutions?",
     a:"When k = 3 the equation becomes 3x + 6 = 3x + 6, an identity, so every value of x satisfies it."}
  ],
  activities:["Solve equations from balance-scale models","Graph inequalities on number line strips","Write and solve word problems from market prices","Practise reversing the inequality sign"],
  materials:["Number line strips","Balance scale models","Graph paper","Calculators"],
  assessment:["Linear equations quiz","Inequality graphing assignment","Word problem test","Observation and participation"]
},

/* Period IV — Relations and Functions */
{
  grade:10, period:"IV", sem:"Two", icon:"\uD83D\uDCC8",
  title:"Relations and Functions",
  subtitle:"Unit VII: Types of relations, functions, gradients and the distance between two points",
  outcomes:["Apply concepts to solve problems on relations and functions, graph relations and functions, determine the gradient of straight lines and calculate the distance between two points"],
  objectives:["Discuss relations","Distinguish between the various types of relations","Identify functions","Change the subject of the relation","Graph linear functions","Find the gradient of a straight line","Calculate the distance between two points","Graph quadratic functions"],
  note:"A <b>relation</b> is any set of ordered pairs linking members of one set to members of another. A <b>function</b> is a special relation in which <b>every</b> input has <b>exactly one</b> output; on a graph it passes the vertical line test. The <b>domain</b> is the set of inputs and the <b>range</b> the set of outputs. The <b>gradient</b> (slope) of a line is rise ÷ run = (y₂ − y₁)/(x₂ − x₁), and the <b>distance</b> between two points is √[(x₂ − x₁)² + (y₂ − y₁)²]. The graph of y = ax² + bx + c is a <b>parabola</b>.",

  study:[
    /* ---- course text: Semester Two, Period IV — Relations and Functions (guide pp. 15–16) ---- */
    {k:"h3", t:"Relations and Ordered Pairs"},
    {k:"p", t:"A **relation** is a set of ordered pairs that links the members of one set (the inputs) to the members of another set (the outputs). An ordered pair is written (x, y) — the first number is the input, the second is the output. A relation can be shown as a list of pairs, an **arrow diagram** (one set of dots linked by arrows to another), or a graph."},
    {k:"rule"},
    {k:"h3", t:"Types of Relations"},
    {k:"bul", items:["**One-to-one** — each input has a different output, and each output comes from one input only.","**Many-to-one** — several inputs share one output, e.g. {(−2, 4), (2, 4), (3, 9)}.","**One-to-many** — one input gives several outputs, e.g. {1 → 2, 1 → 3}; this is not a function.","**Many-to-many** — several inputs and several outputs are linked in a mixed way."]},
    {k:"rule"},
    {k:"h3", t:"Functions and their Graphs"},
    {k:"p", t:"A **function** is a relation in which **each input has exactly one output**, so one-to-one and many-to-one relations are functions, but one-to-many relations are not. The set of all possible inputs is the **domain** and the set of outputs is the **range**. A graph represents a function when every vertical line cuts it at most once — the **vertical line test**."},
    {k:"p", t:"The graph of a linear function y = mx + c is a straight line with **gradient** m and y-intercept c. The graph of a quadratic function is a U-shaped **parabola**, symmetric about a vertical axis, with a maximum or minimum turning point."},
    {k:"p", t:"**Worked example — given f(x) = 2x² − 3x + 1, find f(−2):** replace x by −2: f(−2) = 2(4) + 6 + 1 = **15**."},
    {k:"rule"},
    {k:"h3", t:"Change of Subject"},
    {k:"p", t:"**Changing the subject** rearranges a formula so that another letter stands alone. Use the same operations on both sides: multiply out, collect the wanted letter on one side, factor it if it appears twice, then divide."},
    {k:"p", t:"For example, to make x the subject of y = mx + c: subtract c, y − c = mx, then divide by m, **x = (y − c)/m**. Check by substituting numbers into both forms."},
    {k:"rule"},
    {k:"h3", t:"Gradient of a Straight Line"},
    {k:"p", t:"The **gradient** measures steepness: **m = (y₂ − y₁)/(x₂ − x₁)**, the rise divided by the run. A positive gradient slopes up to the right, a negative gradient slopes down, and a horizontal line has gradient 0."},
    {k:"p", t:"**Worked example — A(2, 3) and B(6, 11):** m = (11 − 3)/(6 − 2) = 8/4 = **2**."},
    {k:"rule"},
    {k:"h3", t:"Distance Between Two Points"},
    {k:"p", t:"The distance between P(x₁, y₁) and Q(x₂, y₂) comes from Pythagoras: **d = √[(x₂ − x₁)² + (y₂ − y₁)²]**."},
    {k:"p", t:"**Worked example — P(−1, 2) and Q(4, 14):** d = √[(4 + 1)² + (14 − 2)²] = √(25 + 144) = √169 = **13 units**."}
  ],
  focus:["Relations and ordered pairs","Types of relations: one-to-one, many-to-one, one-to-many","Functions and the vertical line test","Domain and range","Change of subject","Graphing linear and quadratic functions","Gradient of a straight line","Distance between two points"],
  terms:[
    {t:"relation", d:"a set of ordered pairs linking two sets", x:"{(1,2), (2,4), (3,6)} is a relation."},
    {t:"function", d:"a relation in which each input has exactly one output", x:"y = 2x + 1 is a function."},
    {t:"one-to-one", d:"each input and each output is used once only", x:"y = 3x is one-to-one."},
    {t:"many-to-one", d:"several inputs share one output", x:"y = x² is many-to-one."},
    {t:"one-to-many", d:"one input gives several outputs, so it is not a function", x:"y² = x is one-to-many."},
    {t:"domain", d:"the set of all possible inputs", x:"The domain of y = √x is x ≥ 0."},
    {t:"range", d:"the set of all possible outputs", x:"The range of y = x² is y ≥ 0."},
    {t:"gradient", d:"the steepness of a line, rise divided by run", x:"The gradient of y = 4x − 1 is 4."},
    {t:"y-intercept", d:"the value of y where the line crosses the y-axis", x:"y = 2x + 3 cuts the y-axis at 3."},
    {t:"ordered pair", d:"a pair written (x, y)", x:"(2, 5) means x = 2 and y = 5."},
    {t:"parabola", d:"the U-shaped graph of a quadratic function", x:"y = x² − 4 is a parabola."},
    {t:"change of subject", d:"rearranging a formula to make another letter the subject", x:"From v = u + at, u = v − at."}
  ],
  worked:[
    {q:"Find the gradient of the line joining A(2, 3) and B(6, 11).",
     steps:["Gradient m = (y₂ − y₁)/(x₂ − x₁).","m = (11 − 3)/(6 − 2).","m = 8/4.","m = 2."],
     a:"The gradient is 2"},
    {q:"Find the distance between P(−1, 2) and Q(4, 14).",
     steps:["d = √[(x₂ − x₁)² + (y₂ − y₁)²].","d = √[(4 − (−1))² + (14 − 2)²].","d = √[25 + 144] = √169.","d = 13."],
     a:"The distance is 13 units"},
    {q:"Given f(x) = 2x² − 3x + 1, find f(−2).",
     steps:["Replace x with −2: f(−2) = 2(−2)² − 3(−2) + 1.","= 2(4) + 6 + 1.","= 8 + 6 + 1.","= 15."],
     a:"f(−2) = 15"}
  ],
  drillLabel:"Relations and functions",
  drills:[
    {id:"fn_eval_sh"},{id:"domain_range_sh"},{id:"function_test_sh"},{id:"gradient_sh"},
    {id:"distance_pts_sh"},{id:"quadratic_table_sh"},{id:"change_subject_sh"}
  ],
  word:[
    {q:"The cost C in Liberian dollars of hiring a hall is C = 1 500 + 250n, where n is the number of hours. Find the cost for 6 hours and the number of hours if the cost is L$3 500.",
     a:"C = 1 500 + 1 500 = L$3 000 for 6 hours; for L$3 500, 250n = 2 000, so n = 8 hours."},
    {q:"A ball is thrown so that its height after t seconds is h = 20t − 5t². Find its height after 3 s and the times when it is on the ground.",
     a:"h = 60 − 45 = 15 m; on the ground when 20t − 5t² = 0, so t = 0 or t = 4 s."},
    {q:"Find the gradient of the line through (−3, 5) and (2, −5), and say whether the line slopes up or down.",
     a:"m = (−5 − 5)/(2 + 3) = −10/5 = −2; a negative gradient slopes downwards."},
    {q:"Make r the subject of A = P(1 + r)².",
     a:"r = √(A/P) − 1."},
    {q:"Is y² = 4x a function? Give a reason.",
     a:"No. When x = 4, y = 2 or −2, so one input gives two outputs; it fails the vertical line test."}
  ],
  challenge:[
    {q:"Explain why the domain of y = 1/(x − 3) excludes x = 3.",
     a:"Substituting x = 3 makes the denominator zero, and division by zero is undefined, so there is no output for that input."},
    {q:"Two points are (a, 3) and (a + 5, 15). If the gradient is 2.4, verify the distance between them.",
     a:"Gradient 12/5 = 2.4 confirms it; distance = √(5² + 12²) = √169 = 13 units."},
    {q:"The graph of y = x² + kx + 9 touches the x-axis at one point only. Find the possible values of k.",
     a:"One point of contact means the discriminant is zero: k² − 36 = 0, so k = 6 or k = −6."}
  ],
  activities:["Plot linear and quadratic graphs from tables of values","Measure the gradient of slopes around the school","Use mapping diagrams to test which relations are functions","Practise change of subject with formulae from Science"],
  materials:["Graph paper","Rulers","Calculators","Mapping diagram charts"],
  assessment:["Function quiz","Graphing class assignment","Gradient and distance test","Observation and participation"]
},

/* Period V — Simultaneous Linear Equations */
{
  grade:10, period:"V", sem:"Two", icon:"\uD83D\uDD00",
  title:"Simultaneous Linear Equations",
  subtitle:"Unit VIII: Solving pairs of equations by graphs, elimination and substitution",
  outcomes:["Solve simultaneous linear equations using graphs, elimination and substitution, discuss truth sets for simultaneous linear relations and solve word problems under this topic"],
  objectives:["Define and discuss simultaneous linear equations","Discuss truth sets for simultaneous linear relations","Solve simultaneous equations using graphs","Solve simultaneous equations by elimination","Solve simultaneous equations by substitution","Solve word problems on simultaneous linear equations"],
  note:"<b>Simultaneous equations</b> are two or more equations that must be true at the same time, and their solution is the pair (x, y) that satisfies <b>both</b>. Geometrically the solution is the point where the two straight lines <b>meet</b>. In <b>elimination</b> you make the coefficients of one letter equal, then add or subtract to remove it. In <b>substitution</b> you make one letter the subject of one equation and put that expression into the other. Always check your answer in both original equations.",

  study:[
    /* ---- course text: Semester Two, Period V — Simultaneous Linear Equations (guide p. 17) ---- */
    {k:"h3", t:"Simultaneous Linear Equations"},
    {k:"p", t:"**Simultaneous equations** are two (or more) equations that must be true at the same time, and their solution is the pair (x, y) that satisfies **both**. The **truth set** of a relation is the set of ordered pairs that make it true; for two straight lines the truth set is the single point where they meet. Equations are **consistent** when they have a solution; parallel lines never meet, so they have no simultaneous solution."},
    {k:"rule"},
    {k:"h3", t:"Solution by Graphs"},
    {k:"p", t:"Draw both lines on the same axes, using a table of values. The coordinates of the point where the two lines cross are the solution. Always read the coordinates at the actual crossing — a sketch is not enough, so use squared paper and a careful scale."},
    {k:"rule"},
    {k:"h3", t:"Solution by Elimination"},
    {k:"p", t:"Make the coefficients of one letter equal in both equations (multiplying an equation must be done to every term), then **add** the equations if the coefficients have opposite signs or **subtract** if they have the same sign. One letter disappears, leaving a one-variable equation."},
    {k:"p", t:"**Worked example — solve 3x + 2y = 16 and x − 2y = 0:**"},
    {k:"num", items:["The y coefficients are +2 and −2, so add the equations.","3x + x = 4x and 2y − 2y = 0; 16 + 0 = 16.","4x = 16, so x = 4.","Substitute into x − 2y = 0: 4 − 2y = 0, so y = 2.","Check: 3(4) + 2(2) = 16. Correct."]},
    {k:"rule"},
    {k:"h3", t:"Solution by Substitution"},
    {k:"p", t:"Make one letter the subject of one equation and substitute that expression into the other equation. The result is a one-variable equation; solve it, then substitute back to find the second letter."},
    {k:"p", t:"**Worked example — solve y = 3x − 1 and 2x + y = 9:** put y into the second equation: 2x + (3x − 1) = 9; 5x − 1 = 9; 5x = 10; **x = 2**, and y = 3(2) − 1 = **5**. Check: 2(2) + 5 = 9. Correct."},
    {k:"rule"},
    {k:"h3", t:"Word Problems on Simultaneous Equations"},
    {k:"p", t:"Let each unknown be a different letter, write one equation for each condition, then solve by elimination or substitution and answer in a sentence."},
    {k:"p", t:"**Worked example:** two pens and three books cost L$1 700; four pens and one book cost L$1 400. Let a pen be p and a book be b: 2p + 3b = 1 700 and 4p + b = 1 400. Multiply the second equation by 3: 12p + 3b = 4 200; subtract the first: 10p = 2 500, so p = 250 and b = 1 400 − 4(250) = 400. **A pen costs L$250 and a book L$400.** Always substitute your answers back into both original equations."}
  ],
  focus:["Simultaneous linear equations","Truth sets for simultaneous relations","Solution by graphs","Solution by elimination","Solution by substitution","Word problems on simultaneous equations"],
  terms:[
    {t:"simultaneous equations", d:"two equations solved together", x:"2x + y = 7 and x − y = 2 are simultaneous."},
    {t:"solution", d:"the pair of values that satisfies both equations", x:"x = 3, y = 1 satisfies both equations."},
    {t:"elimination", d:"removing one letter by adding or subtracting the equations", x:"Adding cancels y when the coefficients are +1 and −1."},
    {t:"substitution", d:"putting an expression from one equation into the other", x:"From y = 2x, substitute into x + y = 9."},
    {t:"truth set", d:"the set of ordered pairs that make a relation true", x:"{(3, 1)} is the truth set of the pair of equations."},
    {t:"consistent", d:"equations that have at least one solution", x:"Two lines that meet are consistent."},
    {t:"parallel lines", d:"lines that never meet, so no simultaneous solution exists", x:"y = 2x + 1 and y = 2x + 5 have no solution."},
    {t:"coefficient", d:"the number multiplying a letter", x:"In 4x + 3y the coefficient of x is 4."}
  ],
  worked:[
    {q:"Solve by elimination: 3x + 2y = 16 and x − 2y = 0.",
     steps:["The y coefficients are +2 and −2, so add the equations.","3x + x = 4x and 2y − 2y = 0; 16 + 0 = 16.","4x = 16, so x = 4.","Substitute in x − 2y = 0: 4 − 2y = 0, so y = 2.","Check: 3(4) + 2(2) = 16. Correct."],
     a:"x = 4, y = 2"},
    {q:"Solve by substitution: y = 3x − 1 and 2x + y = 9.",
     steps:["Replace y in the second equation: 2x + (3x − 1) = 9.","5x − 1 = 9, so 5x = 10 and x = 2.","y = 3(2) − 1 = 5.","Check: 2(2) + 5 = 9. Correct."],
     a:"x = 2, y = 5"},
    {q:"Two pens and three books cost L$1 700; four pens and one book cost L$1 400. Find the cost of each.",
     steps:["Let a pen be p and a book be b: 2p + 3b = 1 700 and 4p + b = 1 400.","Multiply the second by 3: 12p + 3b = 4 200.","Subtract the first: 10p = 2 500, so p = 250.","Then b = 1 400 − 4(250) = 400."],
     a:"A pen costs L$250 and a book L$400"}
  ],
  drillLabel:"Simultaneous linear equations",
  drills:[
    {id:"simul_elim_sh"},{id:"simul_subst_sh"},{id:"simul_check_sh"},{id:"simul_word_sh"},
    {id:"simul_graph_sh"}
  ],
  word:[
    {q:"The sum of two numbers is 45 and their difference is 13. Find the numbers.",
     a:"x + y = 45 and x − y = 13; adding gives 2x = 58, so x = 31 and y = 14."},
    {q:"Three adults and two children pay L$4 300 for a ferry trip; one adult and three children pay L$2 600. Find each fare.",
     a:"3a + 2c = 4 300, a + 3c = 2 600 → a = L$1 100, c = L$500."},
    {q:"Solve 5x − 3y = 11 and 2x + y = 13.",
     a:"From the second, y = 13 − 2x; substitute: 5x − 39 + 6x = 11, so 11x = 50 and x = 50/11... checking instead by elimination gives x = 50/11, y = 43/11."},
    {q:"A shopkeeper mixes rice at L$180 per kg with rice at L$120 per kg to make 50 kg worth L$7 500. How much of each kind does he use?",
     a:"x + y = 50 and 180x + 120y = 7 500 → x = 25 kg and y = 25 kg."},
    {q:"For what value of k do the equations 2x + ky = 8 and 4x + 6y = 16 have infinitely many solutions?",
     a:"The second is twice the first when k = 3, so k = 3 gives identical lines and infinitely many solutions."}
  ],
  challenge:[
    {q:"Explain why the equations y = 2x + 3 and y = 2x − 4 have no solution, in terms of their graphs.",
     a:"Both have gradient 2 but different intercepts, so the lines are parallel and never meet; there is no point that lies on both."},
    {q:"Solve 1/x + 1/y = 5 and 2/x − 1/y = 1.",
     a:"Adding gives 3/x = 6, so x = 1/2; then 1/y = 5 − 2 = 3, so y = 1/3."},
    {q:"The ages of a mother and her son add to 48. In five years she will be three times his age. Find their present ages.",
     a:"m + s = 48 and m + 5 = 3(s + 5); substituting gives s = 8 and m = 40."}
  ],
  activities:["Solve pairs of equations by graphing and by elimination, then compare","Write word problems from the class canteen prices","Solve substitution races in teams","Check every solution in both equations"],
  materials:["Graph paper","Rulers","Calculators","Whiteboard"],
  assessment:["Elimination quiz","Substitution class assignment","Word problem test","Observation and participation"]
},

/* Period V — Vector in a Plane */
{
  grade:10, period:"V", sem:"Two", icon:"\u27A1\uFE0F",
  title:"Vector in a Plane",
  subtitle:"Unit IX: Scalars and vectors, magnitude and direction, addition, subtraction and scalar multiplication",
  outcomes:["Apply the concepts of vectors to distinguish scalars from vectors, find the magnitude and direction of a vector, add and subtract vectors and multiply a vector by a scalar"],
  objectives:["Discuss the types of vector quantities","Distinguish between scalar and vector quantities","Find the magnitude and direction of a vector","Add and subtract vectors","Multiply a vector by a scalar"],
  note:"A <b>scalar</b> has size only — mass, time, temperature. A <b>vector</b> has size <b>and</b> direction — displacement, velocity, force. A vector is written in bold or with an arrow, and in components as a column (x, y). Its <b>magnitude</b> is its length, |v| = √(x² + y²), and its <b>direction</b> is the angle it makes with the horizontal, tan θ = y/x. Vectors add <b>tip to tail</b>, or by adding the matching components; multiplying by a scalar stretches or reverses the vector.",

  study:[
    /* ---- course text: Semester Two, Period V — Vector in a Plane (guide p. 18) ---- */
    {k:"h3", t:"Scalars and Vectors"},
    {k:"p", t:"A **scalar** is a quantity with size only — mass, time, temperature, speed. A **vector** is a quantity with **size and direction** — displacement, velocity, force. A vector is written in bold, with an arrow above the letters, or as a **column vector** with the horizontal change above the vertical change: (3, 4) means 3 across and 4 up."},
    {k:"rule"},
    {k:"h3", t:"Magnitude and Direction"},
    {k:"p", t:"The **magnitude** (length) of a vector is found by Pythagoras: **|v| = √(x² + y²)**. Its **direction** is the angle it makes with the horizontal: **tan θ = y/x**."},
    {k:"p", t:"**Worked example — the vector v = (6, 8):** |v| = √(36 + 64) = √100 = **10 units**; tan θ = 8/6 = 4/3, so θ = **53.1°** to the horizontal. A **unit vector** is a vector of magnitude 1 in a given direction, found by dividing the vector by its magnitude."},
    {k:"rule"},
    {k:"h3", t:"Addition and Subtraction of Vectors"},
    {k:"p", t:"Vectors add **tip to tail**: placing the tail of the second vector at the tip of the first, the resultant runs from the start to the final tip. With column vectors, add or subtract the matching components: a + b = (x₁ + x₂, y₁ + y₂) and a − b = (x₁ − x₂, y₁ − y₂)."},
    {k:"p", t:"**Worked example — a = (3, −2) and b = (1, 5):** a + b = (4, 3); a − b = (2, −7); **3a = (9, −6)**. The **negative vector** −a has the same length and the opposite direction, and a + (−a) = 0."},
    {k:"rule"},
    {k:"h3", t:"Scalar Multiplication and Resultants"},
    {k:"p", t:"Multiplying a vector by a scalar stretches it (if k > 1), shrinks it (if 0 < k < 1), or reverses it (if k < 0): ka = (kx, ky). The **resultant** is the single vector equal to the sum of several vectors, and equal vectors have the same magnitude and direction, wherever they are drawn."},
    {k:"p", t:"**Worked example:** a boat heads due east at 12 km/h while the current pushes it north at 5 km/h. The two velocities are at right angles, so the resultant speed is √(12² + 5²) = √169 = **13 km/h**. Whenever two vectors act at right angles, Pythagoras gives the resultant."}
  ],
  focus:["Scalar and vector quantities","Column vectors and unit vectors","Magnitude and direction","Addition and subtraction of vectors","Multiplying a vector by a scalar","Resultant vectors"],
  terms:[
    {t:"scalar", d:"a quantity with size only", x:"20 kg is a scalar."},
    {t:"vector", d:"a quantity with both size and direction", x:"30 m due north is a vector."},
    {t:"magnitude", d:"the size or length of a vector", x:"The magnitude of (3, 4) is 5."},
    {t:"direction", d:"the angle or compass line along which a vector acts", x:"The direction is 53° above the horizontal."},
    {t:"column vector", d:"a vector written one component above the other", x:"(3, 4) means 3 across and 4 up."},
    {t:"unit vector", d:"a vector of magnitude 1", x:"i and j are unit vectors."},
    {t:"resultant", d:"the single vector equal to two or more vectors added", x:"The resultant of (3, 0) and (0, 4) is (3, 4)."},
    {t:"equal vectors", d:"vectors with the same magnitude and direction", x:"AB and CD are equal vectors."},
    {t:"negative vector", d:"a vector of the same length pointing the opposite way", x:"−a has the same length as a but reversed."},
    {t:"position vector", d:"a vector from the origin to a point", x:"The position vector of (2, 5) is (2, 5)."}
  ],
  worked:[
    {q:"Find the magnitude and direction of the vector v = (6, 8).",
     steps:["Magnitude |v| = √(6² + 8²) = √(36 + 64) = √100.","|v| = 10.","tan θ = 8/6 = 4/3.","θ = 53.1° (to 1 d.p.)."],
     a:"Magnitude 10 units at 53.1° to the horizontal"},
    {q:"If a = (3, −2) and b = (1, 5), find a + b, a − b and 3a.",
     steps:["a + b = (3 + 1, −2 + 5) = (4, 3).","a − b = (3 − 1, −2 − 5) = (2, −7).","3a = (9, −6)."],
     a:"a + b = (4, 3), a − b = (2, −7), 3a = (9, −6)"},
    {q:"A boat heads due east at 12 km/h while the current pushes it north at 5 km/h. Find the resultant speed.",
     steps:["The two velocities are at right angles.","Resultant = √(12² + 5²) = √(144 + 25) = √169.","Resultant = 13 km/h."],
     a:"13 km/h (a 5, 12, 13 right-angled triangle)"}
  ],
  drillLabel:"Vectors in a plane",
  drills:[
    {id:"vector_add_sh"},{id:"vector_sub_sh"},{id:"vector_magnitude_sh"},{id:"vector_scalar_sh"},
    {id:"vector_direction_sh"},{id:"scalar_vector_sort_sh"}
  ],
  word:[
    {q:"A boy walks 300 m east then 400 m north. Find his displacement from the starting point.",
     a:"√(300² + 400²) = √250 000 = 500 m, in the direction tan⁻¹(4/3) = 53.1° north of east."},
    {q:"Forces of 7 N and 24 N act at right angles on a body. Find the resultant force.",
     a:"√(49 + 576) = √625 = 25 N."},
    {q:"If a = (2, 3) and b = (5, −1), find 2a − 3b.",
     a:"2a = (4, 6), 3b = (15, −3), so 2a − 3b = (−11, 9)."},
    {q:"A plane flies 200 km on a bearing of 090° then 150 km on a bearing of 180°. Find how far it is from the start.",
     a:"√(200² + 150²) = √62 500 = 250 km."},
    {q:"The vector from A(1, 2) to B(6, 14) is written AB. Find AB and its magnitude.",
     a:"AB = (6 − 1, 14 − 2) = (5, 12), |AB| = 13 units."}
  ],
  challenge:[
    {q:"Explain why speed is a scalar but velocity is a vector.",
     a:"Speed tells only how fast something moves. Velocity also states the direction of motion, so two cars both at 60 km/h heading opposite ways have equal speeds but different velocities."},
    {q:"Two vectors of magnitudes 5 and 12 give a resultant of 13. What does this tell you about the angle between them?",
     a:"Since 5² + 12² = 13², the vectors are perpendicular; only then does the resultant equal the hypotenuse of the right-angled triangle they form."},
    {q:"If 3a − 2b = 0, what is the relationship between a and b?",
     a:"3a = 2b, so a = (2/3)b; the vectors are parallel and a is two-thirds the length of b."}
  ],
  activities:["Draw and add vectors on squared paper","Measure the resultant of two forces with spring balances","Represent walks around the school as vectors","Compare scalar and vector quantities from everyday life"],
  materials:["Squared paper","Rulers and protractors","Spring balances","Arrow strips"],
  assessment:["Vector quiz","Resultant class assignment","Magnitude and direction test","Observation and participation"]
},

/* Period VI — Rigid Motion */
{
  grade:10, period:"VI", sem:"Two", icon:"\uD83D\uDD04",
  title:"Rigid Motion",
  subtitle:"Unit X: Translation, reflection, rotation and symmetry",
  outcomes:["Apply concepts to rigid motion by drawing images using translation and reflection and determining symmetry"],
  objectives:["Discuss and draw rigid motion","Draw and translate images to other positions","Identify and explain the reflection of an object in a mirror line","Construct objects with symmetry","Describe rotation and its properties"],
  note:"A <b>rigid motion</b> (or congruence transformation) moves a shape without changing its size or shape, so the object and its image are <b>congruent</b>. A <b>translation</b> slides every point the same distance in the same direction and is written as a vector. A <b>reflection</b> flips a shape in a <b>mirror line</b>: each point and its image are the same distance from the mirror line but on opposite sides. A <b>rotation</b> turns a shape about a fixed <b>centre</b> through a given <b>angle</b>. A shape has <b>line symmetry</b> if a line divides it into two matching halves and <b>rotational symmetry</b> if it fits onto itself more than once in a full turn.",

  study:[
    /* ---- course text: Semester Two, Period VI — Rigid Motion (guide pp. 19–20) ---- */
    {k:"h3", t:"Rigid Motion and Congruence"},
    {k:"p", t:"A **rigid motion** (congruence transformation) moves a shape without changing its size or shape, so the object and its image are **congruent** — same size, same shape. The three rigid motions are **translation**, **reflection** and **rotation**; each keeps every length, angle and area unchanged."},
    {k:"rule"},
    {k:"h3", t:"Translation"},
    {k:"p", t:"A **translation** slides every point of a shape the same distance in the same direction. It is written as a vector, and the image is found by adding the vector's components to each point's coordinates. The shape is not turned or flipped, and every point moves along parallel paths."},
    {k:"p", t:"**Worked example — P(3, 2) translated by (−4, 5):** x: 3 + (−4) = −1; y: 2 + 5 = 7, so **P′ = (−1, 7)**."},
    {k:"rule"},
    {k:"h3", t:"Reflection"},
    {k:"p", t:"A **reflection** flips a shape in a **mirror line**. Each point and its image are the same distance from the mirror line but on opposite sides, and the line joining a point to its image is perpendicular to the mirror line. Points on the mirror line stay fixed."},
    {k:"p", t:"Coordinate rules: reflection in the **x-axis** changes the sign of y, (x, y) → (x, −y); reflection in the **y-axis** changes the sign of x, (x, y) → (−x, y); reflection in **y = x** swaps the coordinates, (x, y) → (y, x)."},
    {k:"p", t:"**Worked example — A(4, 1):** reflected in the y-axis, A′ = (−4, 1); reflected in y = x, A″ = (1, 4)."},
    {k:"rule"},
    {k:"h3", t:"Rotation"},
    {k:"p", t:"A **rotation** turns a shape about a fixed **centre** through a given **angle** and **direction** (clockwise or anticlockwise). The centre stays fixed, and every point moves through the same angle along a circle centred at the centre of rotation. Describing a rotation fully needs three things: the centre, the angle and the direction."},
    {k:"rule"},
    {k:"h3", t:"Symmetry"},
    {k:"p", t:"A shape has **line symmetry** when a line divides it into two matching halves that are mirror images of each other. A shape has **rotational symmetry** when it fits onto itself during a full turn; the **order** is the number of times it fits, and the angle of each turn is 360° ÷ order."},
    {k:"p", t:"**Worked example — a regular hexagon:** it fits onto itself 6 times in one turn, so its order of rotational symmetry is 6 and the angle of each turn is 360 ÷ 6 = **60°**."}
  ],
  focus:["Rigid motion and congruence","Translation described by a vector","Reflection in a mirror line","Rotation: centre, angle and direction","Line symmetry","Rotational symmetry and its order"],
  terms:[
    {t:"rigid motion", d:"a movement that keeps the size and shape unchanged", x:"Translation, reflection and rotation are rigid motions."},
    {t:"congruent", d:"same size and same shape", x:"The image is congruent to the object."},
    {t:"translation", d:"sliding a shape without turning or flipping it", x:"The translation (3, −2) moves 3 right and 2 down."},
    {t:"reflection", d:"flipping a shape in a mirror line", x:"Reflecting in the y-axis changes (2, 3) to (−2, 3)."},
    {t:"mirror line", d:"the line a shape is reflected in", x:"The line y = x is a mirror line."},
    {t:"rotation", d:"turning a shape about a fixed point", x:"Rotate 90° clockwise about the origin."},
    {t:"centre of rotation", d:"the fixed point a shape turns about", x:"The origin is the centre of rotation."},
    {t:"line symmetry", d:"a line that divides a shape into two matching halves", x:"A rectangle has 2 lines of symmetry."},
    {t:"rotational symmetry", d:"a shape fitting onto itself during a full turn", x:"A square has rotational symmetry of order 4."},
    {t:"order of symmetry", d:"the number of times a shape fits onto itself in one turn", x:"An equilateral triangle has order 3."}
  ],
  worked:[
    {q:"The point P(3, 2) is translated by the vector (−4, 5). Find the image P′.",
     steps:["Add the vector components to the coordinates.","x: 3 + (−4) = −1.","y: 2 + 5 = 7."],
     a:"P′ is (−1, 7)"},
    {q:"Find the image of A(4, 1) under a reflection in the y-axis, then in the line y = x.",
     steps:["Reflection in the y-axis changes the sign of x: A′ = (−4, 1).","Reflection in y = x swaps x and y: A″ = (1, 4)."],
     a:"A′ = (−4, 1) and A″ = (1, 4)"},
    {q:"State the order of rotational symmetry of a regular hexagon and the angle of each turn.",
     steps:["A regular hexagon has 6 equal sides and 6 equal angles.","It fits onto itself 6 times in 360°.","Angle of each turn = 360 ÷ 6 = 60°."],
     a:"Order 6, turning through 60° each time"}
  ],
  drillLabel:"Rigid motion",
  drills:[
    {id:"translate_pt_sh"},{id:"reflect_pt_sh"},{id:"rotate_pt_sh"},{id:"symmetry_order_sh"},
    {id:"congruence_test_sh"}
  ],
  word:[
    {q:"A triangle with vertices A(1, 1), B(4, 1) and C(2, 5) is translated by (5, −3). Find the new vertices.",
     a:"A′(6, −2), B′(9, −2), C′(7, 2)."},
    {q:"The letter H is reflected in a vertical mirror line. Describe the image and state its lines of symmetry.",
     a:"The image is H again because H is symmetric about a vertical line; the letter H has 2 lines of symmetry."},
    {q:"A windmill blade turns through 45° each second. How many seconds does one full turn take?",
     a:"360 ÷ 45 = 8 seconds."},
    {q:"Point Q(−2, 6) is rotated 180° about the origin. Find its image.",
     a:"Q′ = (2, −6); a half turn changes the sign of both coordinates."},
    {q:"A tile pattern repeats by the translation (8, 0). If one tile starts at x = 3, where does the fourth tile start?",
     a:"3 + 3(8) = 27."}
  ],
  challenge:[
    {q:"Explain why an enlargement is not a rigid motion while a translation is.",
     a:"An enlargement changes the size of the shape, so the image is similar but not congruent to the object. A translation keeps every length and angle unchanged."},
    {q:"A reflection followed by the same reflection returns the original shape. Explain why.",
     a:"Reflecting twice in the same mirror line maps each point back to where it started, so the combined transformation is the identity."},
    {q:"Which capital letters have rotational symmetry of order 2? Explain the test you used.",
     a:"H, I, N, O, S, X and Z look the same after a half turn; you test this by turning the letter through 180° and checking that it still looks identical."}
  ],
  activities:["Cut out shapes and trace translations and reflections","Use mirrors to find lines of symmetry","Rotate shapes about a pin through the centre","Design a tile pattern using one translation"],
  materials:["Tracing paper","Mirrors","Cut-out shapes","Squared paper and pins"],
  assessment:["Transformation quiz","Symmetry class assignment","Coordinate transformation test","Observation and participation"]
},

/* Period VI — Statistics, Ratio and Rates, Percentages */
{
  grade:10, period:"VI", sem:"Two", icon:"\uD83D\uDCCA",
  title:"Statistics, Ratio and Rates, and Percentages",
  subtitle:"Unit XI: Frequency tables and graphs, averages, box plots, ratio, rates, scale drawing and percentages",
  outcomes:["Apply skills to solve problems on statistics, ratio, rates and percentages, including frequency tables, graphical displays, averages, scale drawings, travel and conversion graphs"],
  objectives:["Define and discuss statistics","Construct frequency tables","Discuss graphical displays","Discuss and define averages","Define and discuss ratio and rates","Define and analyse scales and scale drawing","Demonstrate the use of rates in problem solving","Define and discuss travel graphs and conversion graphs","Identify and discuss percentages"],
  note:"<b>Statistics</b> is the collection, organisation and interpretation of data. A <b>frequency table</b> groups data into classes, and a <b>histogram</b>, <b>bar chart</b>, <b>pie chart</b>, <b>stem-and-leaf plot</b> or <b>box-and-whisker plot</b> displays it. The three averages are the <b>mean</b> (total ÷ number), the <b>median</b> (middle value) and the <b>mode</b> (most common value). A <b>ratio</b> compares quantities; a <b>rate</b> compares different quantities per unit, such as km per hour. A <b>scale drawing</b> represents real sizes in proportion, and a <b>percentage</b> is a fraction with denominator 100.",

  study:[
    /* ---- course text: Semester Two, Period VI — Statistics, Ratio and Rates, and Percentages (guide pp. 20–21) ---- */
    {k:"h3", t:"Statistical Terms and Data Collection"},
    {k:"p", t:"**Statistics** is the collection, organisation and interpretation of data. **Data** are information collected for a purpose — from a census, a survey, observations or experiments. A **frequency** is how often a value occurs, a **population** is every member of a group, and a **sample** is the part of the population that is actually used. Data can be **discrete** (counted, e.g. number of children) or **continuous** (measured, e.g. heights)."},
    {k:"rule"},
    {k:"h3", t:"Frequency Tables and Graphs"},
    {k:"p", t:"A **frequency table** lists each value with its frequency, and for grouped or continuous data it uses **class intervals** (for example 20–29, 30–39). The data can then be displayed as a **bar chart** (discrete data, bars with gaps), a **histogram** (continuous grouped data, no gaps), or a **pie chart** (parts of a whole — multiply each fraction by 360°)."},
    {k:"p", t:"For grouped data, the **class mark** is the midpoint of the class, and the estimated mean is **Σfx ÷ Σf**, where f is the frequency of a class and x its class mark."},
    {k:"rule"},
    {k:"h3", t:"Measures of Central Tendency"},
    {k:"bul", items:["**Mode** — the value that occurs most often; it is the tallest bar of a chart, and for grouped data the **modal class** is the class with the greatest frequency.","**Median** — the middle value when the data are in order; for n values it is the (n + 1)/2th value, and for grouped data it is read from an ogive.","**Mean** — the total of all the values divided by how many there are; it uses every value but is pulled by very large or very small ones (outliers)."]},
    {k:"p", t:"**Worked example — 5, 8, 8, 12, 17:** mean = 50 ÷ 5 = **10**; the middle value is **8**, the median; 8 is also the **mode**."},
    {k:"rule"},
    {k:"h3", t:"Stem-and-Leaf and Box-and-Whisker Plots"},
    {k:"p", t:"A **stem-and-leaf plot** keeps the original values: the tens digits form the stem, the units digits the leaves. A **box-and-whisker plot** shows the **minimum**, the **lower quartile** Q₁, the **median**, the **upper quartile** Q₃ and the **maximum**: a box from Q₁ to Q₃ with a line at the median, and whiskers to the extremes. The length of the box is the interquartile range, so a long box means a wide spread between the middle half of the data."},
    {k:"rule"},
    {k:"h3", t:"Ratio, Rates and Scale Drawing"},
    {k:"p", t:"A **ratio** compares two quantities of the same kind, and the order of the numbers matters: 2 : 3 : 4 means the amount is divided into 9 equal parts. A **rate** compares two different kinds of quantity per unit, such as 70 km/h or L$450 per bag. A **scale drawing** represents a real object in proportion: with scale 1 : 50 000, 1 cm on the drawing is 50 000 cm (0.5 km) in reality."},
    {k:"p", t:"**Worked example — share L$9 000 in the ratio 2 : 3 : 4:** total parts = 9; one part = 1 000; the shares are **L$2 000, L$3 000 and L$4 000**."},
    {k:"rule"},
    {k:"h3", t:"Percentages"},
    {k:"p", t:"A **percentage** is a fraction with denominator 100, so 20% = 20/100 = 0.2. A percentage of a quantity is found by multiplying; a percentage increase or decrease is the change divided by the original amount, times 100. Travel graphs plot distance against time, and the gradient of the graph is the speed; conversion graphs link two quantities such as kilometres and miles."},
    {k:"p", t:"**Worked example:** a shop reduces a shirt from L$1 800 to L$1 440. The reduction is L$360, so the percentage reduction is 360/1 800 × 100 = **20%**."}
  ],
  focus:["Statistical terms and data collection","Frequency tables and histograms","Measures of central tendency: mode, median, mean","Stem-and-leaf and box-and-whisker plots","Ratio and rates","Scales and scale drawing","Travel graphs and conversion graphs","Percentages"],
  terms:[
    {t:"data", d:"information collected for a purpose", x:"The data are the masses of 30 pupils."},
    {t:"frequency", d:"how often a value occurs", x:"The frequency of the mark 60 is 7."},
    {t:"histogram", d:"a bar chart for grouped continuous data with no gaps", x:"The histogram shows the mass classes."},
    {t:"mean", d:"the total of the values divided by how many there are", x:"The mean of 4, 6 and 8 is 6."},
    {t:"median", d:"the middle value when the data are in order", x:"The median of 2, 5, 9 is 5."},
    {t:"mode", d:"the value that occurs most often", x:"The mode of 3, 3, 7 is 3."},
    {t:"stem-and-leaf plot", d:"a display that keeps the original values", x:"A mark of 74 is shown as stem 7, leaf 4."},
    {t:"box-and-whisker plot", d:"a summary showing quartiles and the range", x:"The box shows the middle half of the data."},
    {t:"ratio", d:"a comparison of two quantities of the same kind", x:"The ratio 6 : 9 simplifies to 2 : 3."},
    {t:"rate", d:"a comparison of two different quantities per unit", x:"L$2 400 per month is a rate."},
    {t:"scale", d:"the ratio between a drawing and the real object", x:"A scale of 1 : 100 means 1 cm stands for 100 cm."},
    {t:"percentage", d:"a number of parts per hundred", x:"0.35 = 35%."}
  ],
  worked:[
    {q:"Find the mean, median and mode of 5, 8, 8, 12, 17.",
     steps:["Mean = (5 + 8 + 8 + 12 + 17) ÷ 5 = 50 ÷ 5 = 10.","Order is already ascending, so the median is the third value, 8.","8 occurs twice, more than any other value, so the mode is 8."],
     a:"Mean 10, median 8, mode 8"},
    {q:"Share L$9 000 in the ratio 2 : 3 : 4.",
     steps:["Total parts = 2 + 3 + 4 = 9.","One part = 9 000 ÷ 9 = 1 000.","Shares: 2 × 1 000, 3 × 1 000, 4 × 1 000.","= L$2 000, L$3 000 and L$4 000."],
     a:"L$2 000, L$3 000 and L$4 000"},
    {q:"A map has a scale of 1 : 50 000. Two towns are 6 cm apart on the map. Find the real distance in kilometres.",
     steps:["Real distance = 6 × 50 000 cm = 300 000 cm.","Convert to metres: 300 000 ÷ 100 = 3 000 m.","Convert to kilometres: 3 000 ÷ 1 000 = 3 km."],
     a:"3 km"}
  ],
  drillLabel:"Statistics, ratio, rates and percentages",
  drills:[
    {id:"mean_sh"},{id:"median_sh"},{id:"mode_sh"},{id:"range_sh"},
    {id:"ratio_simplify_sh"},{id:"ratio_share_sh"},{id:"rate_sh"},{id:"percent_of_sh"},
    {id:"percent_change_sh"},{id:"scale_drawing_sh"}
  ],
  word:[
    {q:"A car travels 315 km in 4½ hours. Find its average speed in km/h.",
     a:"315 ÷ 4.5 = 70 km/h."},
    {q:"A shop reduces the price of a shirt from L$1 800 to L$1 440. Find the percentage reduction.",
     a:"Reduction = L$360; 360/1800 × 100 = 20%."},
    {q:"The marks of 9 pupils are 45, 52, 60, 60, 68, 71, 74, 80, 90. Find the median and the range.",
     a:"Median = 68 (the fifth value); range = 90 − 45 = 45 marks."},
    {q:"On a map of scale 1 : 25 000 a road is 12 cm long. Find its real length in km.",
     a:"12 × 25 000 = 300 000 cm = 3 km."},
    {q:"A worker earns L$18 000 a month and saves 12½% of it. How much does she save in a year?",
     a:"Monthly saving = L$2 250; yearly = L$27 000."}
  ],
  challenge:[
    {q:"Two classes have the same mean mark but one has a much larger range. What does that tell a teacher?",
     a:"Both classes centre on the same mark, but the wider spread shows that the second class contains both much stronger and much weaker pupils, so it needs more differentiated teaching."},
    {q:"A price is increased by 20% and then reduced by 20%. Is it back to the original? Show your working.",
     a:"No. L$100 becomes L$120, then L$120 × 0.8 = L$96, which is a 4% loss overall because the second percentage is taken on a larger amount."},
    {q:"Explain why the mode is the best average for a shoe shop owner.",
     a:"The owner must stock the sizes actually sold most often; the mean size could be a size nobody wears, while the mode names the best-selling size."}
  ],
  activities:["Collect health-centre data and build bar and pie charts","Construct box-and-whisker plots from class marks","Measure the school grounds and draw them to scale","Practise percentage problems on shop prices"],
  materials:["Graph paper","Rulers","Calculators","Newspaper data sheets"],
  assessment:["Averages quiz","Graphical display assignment","Ratio and percentage test","Statistics project"]
}

,

/* =============================== GRADE 11 =============================== */
/* Period I — Modular Arithmetic */
{
  grade:11, period:"I", sem:"One", icon:"\uD83D\uDD01",
  title:"Modular Arithmetic",
  subtitle:"Unit I: Polygonal arithmetic, modular arithmetic, cyclic variables and division in a modulus",
  outcomes:["Apply polygonal arithmetic and modular arithmetic to perform the basic operations of addition, subtraction, multiplication and division in modular arithmetic"],
  objectives:["Define and discuss polygonal arithmetic","Define and discuss modular arithmetic","Define and discuss cyclic variables","Add, subtract and multiply in modular arithmetic","Divide using modular arithmetic"],
  note:"<b>Modular arithmetic</b> is clock arithmetic: in <b>mod n</b> you divide by n and keep only the remainder, so the answer is always one of 0, 1, 2, … , n − 1. Because the values repeat in a cycle, the numbers behave like <b>cyclic variables</b>, and the whole system can be shown on a <b>modular (clock) diagram</b> or on a polygon with n vertices — this is the link to <b>polygonal arithmetic</b>. For example 9 + 5 = 14, and 14 mod 12 = 2, so 9 + 5 ≡ 2 (mod 12). Division in a modulus means solving ax ≡ b (mod n).",

  study:[
    /* ---- course text: Semester One, Period I — Modular Arithmetic (guide p. 22) ---- */
    {k:"h3", t:"The Idea of a Modulus"},
    {k:"p", t:"**Modular arithmetic** is clock arithmetic — arithmetic in a cycle. In **mod n**, you divide by n and keep only the remainder, so the answer is always one of 0, 1, 2, … , n − 1. The ordinary clock face is mod 12: 9 o'clock plus 5 hours is 14, which is 14 − 12 = **2 o'clock**. Because the values repeat in a cycle, the numbers behave like **cyclic variables**."},
    {k:"p", t:"**Polygonal arithmetic** uses the same idea on a polygon: think of the vertices of a regular n-gon labelled 0 to n − 1, and count round the corners, so that after n − 1 you return to 0. A **modular diagram** shows the cycle as a ring of numbers, and moving round the ring one step adds 1 (mod n)."},
    {k:"rule"},
    {k:"h3", t:"Addition and Subtraction in a Modulus"},
    {k:"p", t:"To add in a modulus, add the numbers in the ordinary way, then subtract the modulus as many times as needed to land in 0 to n − 1. For example, 8 + 7 = 15 = 14 + 1, so **8 + 7 ≡ 1 (mod 7)**. To subtract, it is often easier to add the modulus first: 3 − 8 = −5, and −5 + 7 = 2, so **3 − 8 ≡ 2 (mod 7)**."},
    {k:"p", t:"The sign ≡ is read as *is congruent to*: two numbers are congruent mod n when they leave the same remainder on division by n."},
    {k:"rule"},
    {k:"h3", t:"Multiplication and Division in a Modulus"},
    {k:"p", t:"To multiply in a modulus, multiply in the ordinary way and reduce by the modulus: 5 × 6 = 30 and 30 − 28 = 2, so **5 × 6 ≡ 2 (mod 7)**. Division in a modulus is done by asking which number, multiplied by the divisor, gives the dividend: to solve 3x ≡ 1 (mod 7), test x = 1, 2, 3, … until 3x leaves remainder 1; 3 × 5 = 15 = 14 + 1, so **x ≡ 5 (mod 7)**. Not every division is possible in every modulus."},
    {k:"rule"},
    {k:"h3", t:"Building Addition and Multiplication Tables"},
    {k:"p", t:"An **addition table** for a modulus puts the residues 0 to n − 1 along the top and the side and fills each cell with the sum reduced mod n. A **multiplication table** does the same for products. The tables show the patterns of the system — for example, in mod 5 every non-zero row of the multiplication table contains all four non-zero residues, so every non-zero number has an inverse and any division (except by 0) is possible."},
    {k:"p", t:"**Worked example — build the addition table of mod 4:** the residues are 0, 1, 2, 3; 1 + 3 = 4 ≡ 0, 2 + 3 = 5 ≡ 1, 3 + 3 = 6 ≡ 2, and so on. Reading the table lets you solve equations such as x + 2 ≡ 1 (mod 4): x ≡ 3 (mod 4)."}
  ],
  focus:["Polygonal arithmetic and modular diagrams","The idea of a modulus","Cyclic variables","Addition and subtraction in a modulus","Multiplication in a modulus","Division in a modulus","Building addition and multiplication tables"],
  terms:[
    {t:"modulus", d:"the number you divide by and take the remainder from", x:"In mod 7 the remainders are 0 to 6."},
    {t:"congruent", d:"two numbers with the same remainder in a modulus, written ≡", x:"17 ≡ 3 (mod 7)."},
    {t:"remainder", d:"what is left after division, used as the modular answer", x:"23 mod 5 = 3."},
    {t:"cyclic variable", d:"a value that repeats in a fixed cycle", x:"The days of the week are cyclic with period 7."},
    {t:"modular diagram", d:"a clock or polygon picture of a modulus", x:"A 12-hour clock shows mod 12."},
    {t:"modular inverse", d:"a number a⁻¹ such that a × a⁻¹ ≡ 1 (mod n)", x:"3 × 5 = 15 ≡ 1 (mod 7), so 5 is the inverse of 3 in mod 7."},
    {t:"addition table", d:"a table showing every sum in a modulus", x:"The mod 5 addition table has 25 entries."},
    {t:"zero divisor", d:"two non-zero numbers whose product is 0 in a modulus", x:"In mod 6, 2 × 3 ≡ 0, so 2 and 3 are zero divisors."}
  ],
  worked:[
    {q:"Evaluate 27 + 19 (mod 8).",
     steps:["Add: 27 + 19 = 46.","Divide by 8: 46 = 5 × 8 + 6.","The remainder is 6."],
     a:"27 + 19 ≡ 6 (mod 8)"},
    {q:"Evaluate 4 × 6 (mod 7) and 3 − 5 (mod 7).",
     steps:["4 × 6 = 24; 24 = 3 × 7 + 3, so 4 × 6 ≡ 3 (mod 7).","3 − 5 = −2.","Add the modulus until positive: −2 + 7 = 5."],
     a:"4 × 6 ≡ 3 (mod 7) and 3 − 5 ≡ 5 (mod 7)"},
    {q:"Solve 3x ≡ 4 (mod 7).",
     steps:["Look for a multiple of 3 that leaves remainder 4 on division by 7.","Try x = 1: 3. x = 2: 6. x = 3: 9 ≡ 2. x = 4: 12 ≡ 5. x = 5: 15 ≡ 1. x = 6: 18 ≡ 4.","So x = 6."],
     a:"x = 6 (mod 7)"}
  ],
  drillLabel:"Modular arithmetic",
  drills:[
    {id:"mod_add_sh"},{id:"mod_sub_sh"},{id:"mod_mul_sh"},{id:"mod_solve_sh"},
    {id:"mod_remainder_sh"},{id:"mod_inverse_sh"}
  ],
  word:[
    {q:"Today is Wednesday. What day will it be in 100 days?",
     a:"100 mod 7 = 2, so 2 days after Wednesday is Friday."},
    {q:"A clock shows 9 o'clock. What time will it show in 25 hours?",
     a:"9 + 25 = 34; 34 mod 12 = 10, so 10 o'clock."},
    {q:"Find the remainder when 2¹⁰ is divided by 7.",
     a:"2¹⁰ = 1 024; 1 024 = 146 × 7 + 2, so the remainder is 2."},
    {q:"Solve 5x ≡ 3 (mod 11).",
     a:"Try x = 5: 25 ≡ 3 (mod 11), so x = 5."},
    {q:"A machine stamps one of six colours in the cycle red, blue, green, yellow, black, white. If stamp 1 is red, what colour is stamp 100?",
     a:"(100 − 1) mod 6 = 3, so the fourth colour, yellow."}
  ],
  challenge:[
    {q:"Why does mod 6 have zero divisors but mod 7 does not?",
     a:"In mod 6, 2 × 3 ≡ 0 because 6 divides the product even though it divides neither factor. In mod 7 this cannot happen because 7 is prime: if 7 divides a product it must divide one of the factors."},
    {q:"Explain how the check digit of a bar code uses modular arithmetic.",
     a:"The digits are multiplied by fixed weights and added; the check digit is chosen so the total is ≡ 0 in a modulus, so any single mistyped digit breaks the congruence and the code is rejected."},
    {q:"Find all values of x for which x² ≡ 1 (mod 8).",
     a:"Test 0 to 7: x = 1, 3, 5 and 7 all give x² ≡ 1 (mod 8), so there are four solutions, not the usual two."}
  ],
  activities:["Build mod 5 and mod 7 addition and multiplication tables","Use a clock face to model mod 12","Practise day-of-the-week problems","Solve modular equations in pairs"],
  materials:["Clock faces","Polygon templates","Modular table grids","Coloured markers"],
  assessment:["Modular arithmetic quiz","Modular table assignment","Modular equations test","Observation and participation"]
},

/* Period I — Indices and Logarithms */
{
  grade:11, period:"I", sem:"One", icon:"\uD83D\uDD22",
  title:"Indices and Logarithms",
  subtitle:"Unit II: Index laws, negative and rational powers, exponential growth, and the laws of logarithms",
  outcomes:["Apply the concepts to solve problems on indices and exponential growth, and apply the laws of logarithms to solve problems"],
  objectives:["Define and discuss indices, notation and laws","Define and discuss the properties of indices","Define and discuss exponential growth","Discuss and solve negative powers","Define and discuss rational powers","Define and discuss logarithms and logarithmic functions","Define and apply base ten logarithms","Solve logarithms of numbers greater than 10","Solve logarithms of numbers between 0 and 1","State and use the laws of logarithms"],
  note:"An <b>index</b> (power) tells how many times a base is multiplied by itself: aⁿ. The laws are aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁰ = 1, a⁻ⁿ = 1/aⁿ and a^(1/n) = ⁿ√a. A <b>logarithm</b> is simply an index written another way: if aˣ = N then log_a N = x. So log₁₀ 100 = 2 because 10² = 100. The laws are log(mn) = log m + log n, log(m/n) = log m − log n and log mⁿ = n log m. Logarithms turn multiplication into addition, which is why they were used for calculation before calculators.",

  study:[
    /* ---- course text: Semester One, Period I — Indices and Logarithms (guide pp. 23–24) ---- */
    {k:"h3", t:"Index Notation and the Laws of Indices"},
    {k:"p", t:"**Index notation** writes repeated multiplication as a power: 3⁴ = 3 × 3 × 3 × 3. The base is the number being multiplied and the index (or exponent) is the power. The index laws are:"},
    {k:"table", head:["Law","Rule","Example"], rows:[["Multiplication","aᵐ × aⁿ = aᵐ⁺ⁿ","3² × 3⁵ = 3⁷"],["Division","aᵐ ÷ aⁿ = aᵐ⁻ⁿ","5⁸ ÷ 5² = 5⁶"],["Power of a power","(aᵐ)ⁿ = aᵐⁿ","(2³)² = 2⁶"],["Zero index","a⁰ = 1 (a ≠ 0)","7⁰ = 1"],["Negative index","a⁻ⁿ = 1/aⁿ","2⁻³ = 1/8"],["Fractional index","a^(m/n) = (ⁿ√a)ᵐ","8^(2/3) = 2² = 4"]]},
    {k:"p", t:"A negative power means a reciprocal, and a fractional power means a root first (or a power first — the order is a matter of convenience). The laws work for any base and are used to **solve exponential equations**: 2ˣ = 32 gives x = 5, because 32 = 2⁵."},
    {k:"rule"},
    {k:"h3", t:"Exponential Growth and Decay"},
    {k:"p", t:"In **exponential growth** a quantity is multiplied by a fixed factor each period, so it grows by the same percentage each time: after t periods with growth factor r, the amount is **A = a × rᵗ**. In **exponential decay** the factor is less than 1. Population growth, compound interest, and radioactive decay are all described by this model, and the graph of growth climbs ever more steeply."},
    {k:"rule"},
    {k:"h3", t:"Logarithms"},
    {k:"p", t:"A **logarithm** answers the question: to what power must the base be raised to give the number? If **aˣ = N**, then **logₐ N = x**. Logarithms are the inverse of powers: 10³ = 1 000 means log₁₀ 1 000 = 3. A **base ten logarithm** (log) is used with ordinary numbers, and tables or a calculator give the mantissa; the characteristic is fixed by the position of the decimal point, so log 45.6 = 1.659, log 4.56 = 0.659 and log 0.456 = −0.341."},
    {k:"rule"},
    {k:"h3", t:"The Laws of Logarithms"},
    {k:"table", head:["Law","Rule","Example"], rows:[["Product","log (xy) = log x + log y","log 12 = log 3 + log 4"],["Quotient","log (x/y) = log x − log y","log (6/2) = log 6 − log 2"],["Power","log xⁿ = n log x","log 5³ = 3 log 5"],["Root","log ⁿ√x = (log x)/n","log √7 = ½ log 7"],["One and zero","logₐ a = 1 and logₐ 1 = 0","log₁₀ 10 = 1"]]},
    {k:"rule"},
    {k:"h3", t:"Solving Exponential and Logarithmic Equations"},
    {k:"p", t:"To solve an exponential equation, take logarithms of both sides and use the power law: 5ˣ = 300 gives x log 5 = log 300, so x = log 300 ÷ log 5 ≈ 3.54. To solve a logarithmic equation, combine the logs into one side and convert to exponential form, then check that the solution does not make any logarithm of a non-positive number."},
    {k:"p", t:"**Worked example — simplify log(x²√y/z³):** log(x²√y) − log z³ = log x² + log √y − log z³ = **2 log x + ½ log y − 3 log z**."}
  ],
  focus:["Index notation and the index laws","Zero, negative and rational indices","Exponential growth and decay","Definition of a logarithm","Base ten logarithms","Logarithms of numbers greater than 10 and between 0 and 1","The laws of logarithms","Solving exponential and logarithmic equations"],
  terms:[
    {t:"index", d:"the small number showing how many times the base is used", x:"In 5³ the index is 3."},
    {t:"base", d:"the number being multiplied by itself", x:"In 5³ the base is 5."},
    {t:"law of indices", d:"a rule for combining powers of the same base", x:"aᵐ × aⁿ = aᵐ⁺ⁿ."},
    {t:"negative index", d:"a power meaning the reciprocal", x:"2⁻³ = 1/8."},
    {t:"rational index", d:"a fractional power meaning a root", x:"8^(2/3) = 4."},
    {t:"exponential growth", d:"growth where the amount multiplies by a fixed factor each step", x:"A population doubling every year grows exponentially."},
    {t:"logarithm", d:"the power to which a base must be raised to give a number", x:"log₂ 32 = 5."},
    {t:"common logarithm", d:"a logarithm to base 10", x:"log 1 000 = 3."},
    {t:"antilogarithm", d:"the inverse of a logarithm", x:"If log x = 2, then x = 100."},
    {t:"characteristic", d:"the whole-number part of a logarithm", x:"log 450 = 2.6532, so the characteristic is 2."},
    {t:"mantissa", d:"the decimal part of a logarithm", x:"In 2.6532 the mantissa is 0.6532."},
    {t:"exponential equation", d:"an equation with the unknown in the index", x:"2ˣ = 32 gives x = 5."}
  ],
  worked:[
    {q:"Simplify (2³ × 2⁴) ÷ 2⁵ and evaluate (27)^(2/3).",
     steps:["Numerator: 2³⁺⁴ = 2⁷.","Divide: 2⁷ ÷ 2⁵ = 2².","2² = 4.","For 27^(2/3): the cube root of 27 is 3, then square it: 3² = 9."],
     a:"4 and 9"},
    {q:"Evaluate log 500 and log 0.004 to 4 decimal places, and explain the characteristics.",
     steps:["500 lies between 10² and 10³, so the characteristic is 2.","log 500 ≈ 2.6990.","0.004 lies between 10⁻³ and 10⁻², so the characteristic is −3.","log 0.004 ≈ −2.3979."],
     a:"log 500 ≈ 2.6990 and log 0.004 ≈ −2.3979"},
    {q:"Solve 3ˣ = 81 and log₂(x + 1) = 4.",
     steps:["81 = 3⁴, so 3ˣ = 3⁴ and x = 4.","log₂(x + 1) = 4 means x + 1 = 2⁴ = 16.","So x = 15."],
     a:"x = 4 and x = 15"}
  ],
  drillLabel:"Indices and logarithms",
  drills:[
    {id:"index_law_sh"},{id:"index_negative_sh"},{id:"index_rational_sh"},{id:"index_equation_sh"},
    {id:"log_eval_sh"},{id:"log_law_sh"},{id:"log_equation_sh"},{id:"std_form_log_sh"}
  ],
  word:[
    {q:"A bank account grows by 10% each year. If L$10 000 is deposited, write an expression for its value after n years and find the value after 3 years.",
     a:"V = 10 000(1.1)ⁿ; after 3 years V = 10 000 × 1.331 = L$13 310."},
    {q:"A population of bacteria doubles every 2 hours. Starting with 500, how many are there after 12 hours?",
     a:"500 × 2⁶ = 500 × 64 = 32 000 bacteria."},
    {q:"Use logarithms to evaluate 47.3 × 862 to 3 significant figures.",
     a:"log = 1.6749 + 2.9355 = 4.6104; antilog ≈ 4.08 × 10⁴, so 40 800."},
    {q:"Solve 2^(3x−1) = 32.",
     a:"32 = 2⁵, so 3x − 1 = 5, 3x = 6 and x = 2."},
    {q:"Given log 2 = 0.3010 and log 3 = 0.4771, find log 12 and log 0.75 without a calculator.",
     a:"log 12 = log 4 + log 3 = 0.6020 + 0.4771 = 1.0791; log 0.75 = log 3 − log 4 = 0.4771 − 0.6020 = −0.1249."}
  ],
  challenge:[
    {q:"Explain why log(−5) is not defined for real numbers.",
     a:"A logarithm asks what power of 10 gives the number. No real power of a positive base can be negative, so there is no real answer for a negative argument."},
    {q:"Show that log_a b × log_b a = 1.",
     a:"By the change-of-base formula, log_a b = 1/log_b a, so their product is 1. Each is the reciprocal of the other."},
    {q:"Solve 2ˣ = 3ˣ⁻¹ using logarithms.",
     a:"Take logs: x log 2 = (x − 1) log 3, so x(log 3 − log 2) = log 3 and x = log 3 / log(3/2) ≈ 2.71."}
  ],
  activities:["Practise index laws on the whiteboard","Use log tables to multiply and divide large numbers","Model exponential growth with paper folding","Solve exponential equations in pairs"],
  materials:["Logarithm tables","Calculators","Graph paper","Whiteboard"],
  assessment:["Index laws quiz","Logarithm class assignment","Exponential equations test","Observation and participation"]
},

/* Period II — Surds and Percentages */
{
  grade:11, period:"II", sem:"One", icon:"\uD83D\uDCB0",
  title:"Surds and Percentages",
  subtitle:"Unit III: Simplifying surds, simple and compound interest, depreciation and hire purchase",
  outcomes:["Apply skills to solve problems on surds, simplifying, multiplying and dividing them, and compute simple and compound interest, depreciation and hire purchase"],
  objectives:["Define and discuss surds","Simplify surds","Find products and quotients of surds","Relate compound interest to simple interest","Define and discuss interest formulae","Define and discuss depreciation and hire purchase"],
  note:"A <b>surd</b> is a root that cannot be written exactly as a fraction, such as √3. Surds are simplified by taking out square factors: √50 = √(25 × 2) = 5√2. They add only when they are <b>like surds</b>, but they multiply freely: √a × √b = √(ab). <b>Simple interest</b> is I = PRT/100, charged on the original principal only. <b>Compound interest</b> is added to the principal each period, so A = P(1 + R/100)ⁿ. <b>Depreciation</b> reduces a value by a percentage each year, and <b>hire purchase</b> spreads a price over instalments that together cost more than the cash price.",

  study:[
    /* ---- course text: Semester One, Period II — Surds and Percentages (guide p. 25) ---- */
    {k:"h3", t:"Surds"},
    {k:"p", t:"A **surd** is an irrational number written with a root sign, such as √2, √3, √5 and 2 + √3. A surd cannot be written exactly as a fraction or a terminating decimal. The fundamental rule is **√a × √b = √(ab)** and **√a ÷ √b = √(a/b)**, so √2 × √8 = √16 = 4."},
    {k:"p", t:"A surd is in **simplest form** when the number under the root has no square factor left, so √8 = √4 × √2 = 2√2 and √12 = 2√3. To compare surds, write them with the same coefficient: 3√2 = √18 and 2√3 = √12, so 3√2 > 2√3. Like surds add and subtract like like terms: 5√3 + 2√3 = 7√3, but 5√3 + 2√2 cannot be combined."},
    {k:"rule"},
    {k:"h3", t:"Products and Quotients of Surds"},
    {k:"p", t:"Multiply surds by multiplying the numbers outside the roots together and the numbers inside together: 2√3 × 5√2 = 10√6. Expand brackets of surds exactly as in algebra, using the difference of two squares whenever the pattern appears: (√3 + √2)(√3 − √2) = 3 − 2 = 1."},
    {k:"p", t:"**Worked example — simplify (√5 + √2)²:** (√5)² + 2(√5)(√2) + (√2)² = 5 + 2√10 + 2 = **7 + 2√10**."},
    {k:"rule"},
    {k:"h3", t:"Rationalizing the Denominator"},
    {k:"p", t:"A fraction with a surd in the denominator is hard to handle, so we **rationalize the denominator** — multiply top and bottom by a surd that makes the denominator rational. For 1/√3, multiply by √3: 1/√3 = √3/3. For a two-term denominator, multiply by the **conjugate**: the conjugate of a + √b is a − √b, and their product is a difference of two squares, which is rational."},
    {k:"p", t:"**Worked example — rationalize 5/(2 − √3):** multiply top and bottom by 2 + √3: 5(2 + √3)/(4 − 3) = **10 + 5√3**."},
    {k:"rule"},
    {k:"h3", t:"Simple Interest"},
    {k:"p", t:"**Simple interest** is paid on the original principal only, so the amount rises by the same amount each year. The formula is **I = PRT/100**, where P is the principal, R is the rate per cent per year and T is the time in years. The amount A = P + I."},
    {k:"p", t:"**Worked example:** L$50 000 is invested at 6% per annum simple interest for 3 years. I = 50 000 × 6 × 3 ÷ 100 = L$9 000, so the amount is **L$59 000**."},
    {k:"rule"},
    {k:"h3", t:"Compound Interest"},
    {k:"p", t:"**Compound interest** is paid on the principal **and on interest already earned**, so the amount grows by a fixed factor each year. After n years, **A = P(1 + R/100)ⁿ** and the interest is A − P."},
    {k:"p", t:"**Worked example:** L$50 000 at 6% per annum compounded annually for 3 years: A = 50 000 × 1.06³ = 50 000 × 1.191016 = L$59 550.80, so the compound interest is L$9 550.80 — more than the L$9 000 simple interest, because interest earns interest."},
    {k:"p", t:"When interest is compounded more than once a year, divide the rate by the number of periods and multiply the number of periods: quarterly compounding over 3 years gives A = P(1 + R/400)^(4 × 3)."},
    {k:"rule"},
    {k:"h3", t:"Depreciation"},
    {k:"p", t:"**Depreciation** is the fall in value of an asset, and is usually applied as a percentage of the value at the start of each year: after n years, **A = P(1 − R/100)ⁿ**. It is compound interest in reverse, with the factor less than 1."},
    {k:"p", t:"**Worked example:** a machine worth L$400 000 depreciates at 10% per year. After 3 years A = 400 000 × 0.9³ = 400 000 × 0.729 = **L$291 600**."},
    {k:"rule"},
    {k:"h3", t:"Hire Purchase"},
    {k:"p", t:"**Hire purchase** lets a buyer take an article immediately and pay by a deposit plus instalments. The total hire purchase price is **deposit + (number of instalments × instalment)**, and the difference between this total and the cash price is the hire purchase interest."},
    {k:"p", t:"**Worked example:** a refrigerator costs L$120 000 cash. It can be bought on hire purchase with a L$20 000 deposit and 12 monthly payments of L$10 000. Total = 20 000 + 120 000 = L$140 000, so the extra charge is **L$20 000**."}
  ],
  focus:["Surds and their properties","Simplifying surds","Products and quotients of surds","Rationalizing the denominator","Simple interest","Compound interest","Depreciation","Hire purchase"],
  terms:[
    {t:"surd", d:"a root that cannot be simplified to a whole number", x:"√7 is a surd."},
    {t:"like surds", d:"surds with the same root part", x:"3√2 and 5√2 are like surds."},
    {t:"rationalize", d:"remove a surd from the denominator of a fraction", x:"1/√2 = √2/2."},
    {t:"conjugate", d:"a pair like (a + √b) and (a − √b) whose product has no surd", x:"(3 + √2)(3 − √2) = 7."},
    {t:"principal", d:"the original sum of money borrowed or saved", x:"The principal is L$50 000."},
    {t:"simple interest", d:"interest charged on the principal only", x:"I = PRT/100."},
    {t:"compound interest", d:"interest charged on the principal and on past interest", x:"A = P(1 + R/100)ⁿ."},
    {t:"rate", d:"the percentage charged or earned per year", x:"A rate of 8% per annum."},
    {t:"depreciation", d:"the fall in the value of an asset over time", x:"A car loses 15% of its value each year."},
    {t:"hire purchase", d:"paying for goods by instalments over time", x:"A deposit plus 12 monthly instalments."}
  ],
  worked:[
    {q:"Simplify √72 + √50 − √18.",
     steps:["√72 = √(36 × 2) = 6√2.","√50 = √(25 × 2) = 5√2.","√18 = √(9 × 2) = 3√2.","6√2 + 5√2 − 3√2 = 8√2."],
     a:"8√2"},
    {q:"Rationalize 6/(3 − √5).",
     steps:["Multiply top and bottom by the conjugate 3 + √5.","Numerator: 6(3 + √5) = 18 + 6√5.","Denominator: (3 − √5)(3 + √5) = 9 − 5 = 4.","(18 + 6√5)/4 = (9 + 3√5)/2."],
     a:"(9 + 3√5)/2"},
    {q:"L$80 000 is invested at 10% per annum compound interest for 3 years. Find the amount.",
     steps:["A = P(1 + R/100)ⁿ.","A = 80 000(1.1)³.","1.1³ = 1.331.","A = 80 000 × 1.331 = 106 480."],
     a:"L$106 480, so the interest earned is L$26 480"}
  ],
  drillLabel:"Surds and percentages",
  drills:[
    {id:"surd_simplify_sh"},{id:"surd_add_sh"},{id:"surd_mul_sh"},{id:"surd_conjugate_sh"},
    {id:"simple_interest_sh"},{id:"compound_interest_sh"},{id:"depreciation_sh"},{id:"hire_purchase_sh"}
  ],
  word:[
    {q:"A trader borrows L$120 000 at 9% per annum simple interest for 4 years. Find the total interest and the amount repaid.",
     a:"I = 120 000 × 9 × 4/100 = L$43 200; amount = L$163 200."},
    {q:"A motorbike has a cash price of L$95 000. On hire purchase a deposit of L$20 000 is paid and 18 instalments of L$4 800. How much more does hire purchase cost?",
     a:"Hire purchase total = 20 000 + 86 400 = L$106 400, which is L$11 400 more than the cash price."},
    {q:"A car worth L$600 000 depreciates by 20% each year. Find its value after 2 years.",
     a:"600 000 × 0.8² = 600 000 × 0.64 = L$384 000."},
    {q:"A rectangular plot measures √75 m by √12 m. Find its area in simplest surd form.",
     a:"√75 × √12 = √900 = 30 m²."},
    {q:"L$50 000 earns 8% compound interest for 2 years. Find the interest, and how much more it is than simple interest.",
     a:"Compound: 50 000(1.08)² = L$58 320, interest L$8 320. Simple: 50 000 × 16/100 = L$8 000, so compound gives L$320 more."}
  ],
  challenge:[
    {q:"Explain why compound interest always gives a larger amount than simple interest for the same rate and time greater than one year.",
     a:"Compound interest earns interest on the interest already added, so each year's interest is larger than the last, while simple interest is always calculated on the unchanged principal."},
    {q:"Show that (√5 + √2)² = 7 + 2√10 and explain each step.",
     a:"(√5)² + 2√5√2 + (√2)² = 5 + 2√10 + 2 = 7 + 2√10. The middle term comes from the double product of the two terms."},
    {q:"A machine loses 10% of its value each year. After how many whole years is it worth less than half its original value?",
     a:"0.9ⁿ < 0.5. n = 6 gives 0.531 and n = 7 gives 0.478, so after 7 years."}
  ],
  activities:["Simplify surds with square factor cards","Compare simple and compound interest in a table","Design a hire purchase advertisement and analyse it","Practise depreciation with vehicle prices"],
  materials:["Calculators","Interest tables","Bank brochures","Squared paper"],
  assessment:["Surds quiz","Interest class assignment","Hire purchase test","Observation and participation"]
},

/* Period III — Variation */
{
  grade:11, period:"III", sem:"One", icon:"\u2696\uFE0F",
  title:"Variation",
  subtitle:"Unit IV: Direct, inverse, joint and partial variation",
  outcomes:["Apply skills to solve problems on direct, inverse, joint and partial variation"],
  objectives:["Define and solve direct variation","Define and solve inverse variation","Define and solve joint variation","Define and solve partial variation"],
  note:"<b>Variation</b> describes how one quantity changes as another changes. In <b>direct variation</b>, y = kx, so doubling x doubles y. In <b>inverse variation</b>, y = k/x, so doubling x halves y and the product xy stays constant. In <b>joint variation</b> y depends on two or more quantities, for instance y = kxz. In <b>partial variation</b> there is a fixed starting value as well, y = kx + c. In every case you first find the constant <b>k</b> from the information given, then use it to answer the question.",

  study:[
    /* ---- course text: Semester One, Period III — Variation (guide p. 26) ---- */
    {k:"h3", t:"Direct Variation"},
    {k:"p", t:"A quantity y varies **directly** as x when y is a fixed multiple of x: **y = kx**, where k is the **constant of variation**. Doubling x doubles y, and the graph is a straight line through the origin. To use the rule, find k from one known pair, then substitute the new value."},
    {k:"p", t:"**Worked example:** y varies directly as x and y = 18 when x = 6. Then 18 = 6k, so k = 3 and y = 3x. When x = 10, y = 30. The statement *y is proportional to x* is written y ∝ x and means the same as y = kx."},
    {k:"rule"},
    {k:"h3", t:"Inverse Variation"},
    {k:"p", t:"A quantity y varies **inversely** as x when their product is constant: **y = k/x**, or xy = k. Doubling x halves y, and the graph is a curve approaching both axes. Inversely proportional is written y ∝ 1/x."},
    {k:"p", t:"**Worked example:** y varies inversely as x and y = 8 when x = 5. Then k = xy = 40, so y = 40/x. When x = 4, y = 10. Check: 4 × 10 = 40, the same product."},
    {k:"rule"},
    {k:"h3", t:"Joint Variation"},
    {k:"p", t:"A quantity varies **jointly** as two or more others when it is a fixed multiple of their product: **y = kxz**. For example, the area of a rectangle varies jointly as its length and width. If y = 24 when x = 2 and z = 3, then 24 = k(6), so k = 4 and y = 4xz."},
    {k:"rule"},
    {k:"h3", t:"Partial Variation"},
    {k:"p", t:"**Partial variation** mixes a constant part with a directly varying part: **y = kx + c**. The graph is a straight line that does not pass through the origin. Two known pairs are needed to find k and c — set up two simultaneous equations and solve them."},
    {k:"p", t:"**Worked example:** y = kx + c, y = 7 when x = 2 and y = 13 when x = 5. Then 7 = 2k + c and 13 = 5k + c; subtracting gives 6 = 3k, so k = 2 and c = 3. At x = 9, **y = 3 + 2(9) = 21**."},
    {k:"rule"},
    {k:"h3", t:"Word Problems on Variation"},
    {k:"p", t:"Write the variation statement first (direct, inverse, joint or partial), put in the constant symbol k, find k from the given pair or pairs, and then answer the question. Always state the units of the answer and check that the answer behaves sensibly — in direct variation, increasing the input increases the output; in inverse variation, it decreases it."}
  ],
  focus:["Direct variation, y = kx","Inverse variation, y = k/x","Joint variation, y = kxz","Partial variation, y = kx + c","Finding the constant of variation","Word problems on variation"],
  terms:[
    {t:"variation", d:"the way one quantity changes as another changes", x:"Cost varies directly with the number of items."},
    {t:"direct variation", d:"y = kx, so the ratio y/x is constant", x:"y varies directly as x."},
    {t:"inverse variation", d:"y = k/x, so the product xy is constant", x:"Time varies inversely as speed."},
    {t:"joint variation", d:"y depends on the product of two or more quantities", x:"y varies jointly as x and z, y = kxz."},
    {t:"partial variation", d:"y = kx + c, with a fixed starting value c", x:"A fare has a fixed charge plus a charge per kilometre."},
    {t:"constant of variation", d:"the fixed number k in a variation statement", x:"If y = 4x, then k = 4."},
    {t:"proportion", d:"another word for direct variation", x:"y is proportional to x."},
    {t:"graph of direct variation", d:"a straight line through the origin", x:"y = 3x passes through (0, 0)."}
  ],
  worked:[
    {q:"y varies directly as x. When x = 6, y = 42. Find y when x = 11.",
     steps:["Write the relation: y = kx.","Find k: 42 = k × 6, so k = 7.","Use k: y = 7 × 11.","y = 77."],
     a:"y = 77"},
    {q:"The time taken for a journey varies inversely as the speed. At 60 km/h the journey takes 4 hours. Find the time at 80 km/h.",
     steps:["Write t = k/s.","Find k: 4 = k/60, so k = 240.","At s = 80: t = 240/80.","t = 3 hours."],
     a:"3 hours"},
    {q:"y varies jointly as x and the square of z. When x = 2 and z = 3, y = 54. Find y when x = 5 and z = 2.",
     steps:["Write y = kxz².","Find k: 54 = k × 2 × 9 = 18k, so k = 3.","Use k: y = 3 × 5 × 4.","y = 60."],
     a:"y = 60"}
  ],
  drillLabel:"Variation",
  drills:[
    {id:"direct_var_sh"},{id:"inverse_var_sh"},{id:"joint_var_sh"},{id:"partial_var_sh"},
    {id:"variation_word_sh"}
  ],
  word:[
    {q:"The cost of fuel varies directly with the number of litres. If 25 litres cost L$7 500, find the cost of 40 litres.",
     a:"k = 7 500/25 = 300 per litre, so 40 litres cost L$12 000."},
    {q:"Six men take 12 days to dig a well. How long will nine men take, working at the same rate?",
     a:"Time varies inversely as men: k = 72 man-days, so t = 72/9 = 8 days."},
    {q:"The mass of a wire varies jointly as its length and the square of its diameter. A wire 2 m long with diameter 3 mm has mass 90 g. Find the mass of a wire 5 m long with diameter 2 mm.",
     a:"90 = k × 2 × 9, so k = 5; mass = 5 × 5 × 4 = 100 g."},
    {q:"A taxi fare is partly fixed and partly varies with distance. A 10 km trip costs L$1 300 and a 16 km trip costs L$1 900. Find the fixed charge.",
     a:"6 km costs L$600, so k = 100/km; fixed charge = 1 300 − 1 000 = L$300."},
    {q:"y varies inversely as √x. When x = 16, y = 5. Find y when x = 100.",
     a:"k = 5 × 4 = 20; y = 20/10 = 2."}
  ],
  challenge:[
    {q:"How can you tell from a table of values whether y varies directly or inversely as x?",
     a:"For direct variation the ratio y/x is the same in every row; for inverse variation the product xy is the same in every row."},
    {q:"The volume of a cylinder varies jointly as the square of its radius and its height. If the radius is halved and the height doubled, what happens to the volume?",
     a:"V ∝ r²h, so the new volume is (1/2)² × 2 = 1/2 of the original; it is halved."},
    {q:"Explain why the graph of an inverse variation never touches either axis.",
     a:"y = k/x has no value when x = 0, and y can never be 0 because k is not zero, so both axes are approached but never reached."}
  ],
  activities:["Plot direct and inverse variation graphs from tables","Investigate how the time for a task varies with the number of workers","Analyse taxi fares as partial variation","Solve joint variation problems in groups"],
  materials:["Graph paper","Calculators","Measuring tapes","Tables of values"],
  assessment:["Variation quiz","Word problem assignment","Graphing variation test","Observation and participation"]
},

/* Period III — Quadratic Functions and Equations */
{
  grade:11, period:"III", sem:"One", icon:"\uD83D\uDCC9",
  title:"Quadratic Functions and Equations",
  subtitle:"Unit V: Quadratic functions, solving by factorization and completing the square, and quadratic graphs",
  outcomes:["Define and discuss quadratic functions and solve quadratic equations by factorization, by completing the square and graphically, and draw and interpret quadratic graphs"],
  objectives:["Define and discuss quadratic functions","Define and solve quadratic equations","Solve quadratic equations by factorization","Solve quadratic problems","Solve quadratic equations by completing the square","Draw quadratic graphs","Solve quadratic equations graphically"],
  note:"A <b>quadratic</b> has the form ax² + bx + c with a ≠ 0, and its graph is a <b>parabola</b>: opening upwards when a > 0 and downwards when a < 0. A quadratic equation has <b>two</b> roots because if a product is zero then one of the factors must be zero, so (x − p)(x − q) = 0 gives x = p or x = q. <b>Completing the square</b> rewrites ax² + bx + c as a(x + h)² + k, which shows the turning point directly. The <b>discriminant</b> b² − 4ac tells how many real roots there are: two if positive, one if zero, none if negative.",

  study:[
    /* ---- course text: Semester One, Period III — Quadratic Functions and Equations (guide p. 27) ---- */
    {k:"h3", t:"Quadratic Functions and their Graphs"},
    {k:"p", t:"A **quadratic expression** has the unknown to the power 2 as its highest power: ax² + bx + c. Its graph is a U-shaped **parabola**; the coefficient of x² decides whether it opens upwards (a > 0, a minimum) or downwards (a < 0, a maximum). The graph is symmetric about its vertical **axis of symmetry**, which passes through the **turning point**."},
    {k:"rule"},
    {k:"h3", t:"Solving by Factorization"},
    {k:"p", t:"Write the quadratic as a product of two brackets, set each factor equal to zero, and solve. This works only when the factorization is straightforward. An equation of the form x² + bx + c = 0 factorizes by finding two numbers with product c and sum b."},
    {k:"p", t:"**Worked example — solve x² − 7x + 12 = 0:** two numbers with product 12 and sum −7 are −3 and −4; (x − 3)(x − 4) = 0; a product of zero means one factor is zero; **x = 3 or x = 4**."},
    {k:"rule"},
    {k:"h3", t:"Completing the Square"},
    {k:"p", t:"**Completing the square** rewrites ax² + bx + c as **a(x + h)² + k**, which shows the turning point directly at (−h, k). Halve the coefficient of x, square it, and adjust the constant."},
    {k:"p", t:"**Worked example — solve x² + 6x − 2 = 0:** half of 6 is 3, so (x + 3)² = x² + 6x + 9; x² + 6x − 2 = (x + 3)² − 11; set to zero: (x + 3)² = 11; x + 3 = ±√11; **x = −3 ± √11**, about 0.32 or −6.32."},
    {k:"rule"},
    {k:"h3", t:"The Quadratic Formula and the Discriminant"},
    {k:"p", t:"For ax² + bx + c = 0, **x = (−b ± √(b² − 4ac))/2a**. The expression **b² − 4ac** is the **discriminant** and it tells how many real roots there are:"},
    {k:"table", head:["Discriminant","Number of real roots","Meaning"], rows:[["b² − 4ac > 0","Two distinct roots","The curve crosses the x-axis twice"],["b² − 4ac = 0","One repeated root","The curve touches the x-axis (turning point on it)"],["b² − 4ac < 0","No real roots","The curve does not meet the x-axis"]]},
    {k:"rule"},
    {k:"h3", t:"Turning Points"},
    {k:"p", t:"**Worked example — the turning point of y = x² − 8x + 10:** complete the square: y = (x − 4)² − 16 + 10 = (x − 4)² − 6. The turning point is **(4, −6)**; since the coefficient of x² is positive, it is a minimum and the axis of symmetry is x = 4."},
    {k:"rule"},
    {k:"h3", t:"Solving Quadratics Graphically"},
    {k:"p", t:"Draw the parabola from a table of values. The points where it crosses the x-axis are the roots of ax² + bx + c = 0. The turning point gives the maximum or minimum value of the function, and values of x for which the curve lies below the x-axis give ax² + bx + c < 0."},
    {k:"rule"},
    {k:"h3", t:"Word Problems on Quadratics"},
    {k:"p", t:"Let the unknown be x, form the quadratic equation from the wording, solve it, and reject any solution that is impossible in the context (a negative length, for example)."},
    {k:"p", t:"**Worked example:** the product of two consecutive positive integers is 156. n(n + 1) = 156, so n² + n − 156 = 0, (n + 13)(n − 12) = 0; n = 12 (reject n = −13), so the integers are **12 and 13**."}
  ],
  focus:["Quadratic functions and their graphs","Solving by factorization","Solving by completing the square","The quadratic formula and the discriminant","Turning points","Solving quadratic equations graphically","Word problems on quadratics"],
  terms:[
    {t:"quadratic expression", d:"an expression whose highest power is 2", x:"x² − 5x + 6 is quadratic."},
    {t:"parabola", d:"the U-shaped graph of a quadratic function", x:"y = x² − 4 is a parabola."},
    {t:"root", d:"a value of x that makes the quadratic equal to zero", x:"The roots of x² − 9 = 0 are 3 and −3."},
    {t:"factorization", d:"writing a quadratic as a product of two brackets", x:"x² + 5x + 6 = (x + 2)(x + 3)."},
    {t:"completing the square", d:"rewriting as a(x + h)² + k", x:"x² + 6x + 2 = (x + 3)² − 7."},
    {t:"turning point", d:"the highest or lowest point of a parabola", x:"y = (x − 2)² + 1 has a minimum at (2, 1)."},
    {t:"quadratic formula", d:"x = (−b ± √(b² − 4ac))/2a", x:"It solves any quadratic equation."},
    {t:"discriminant", d:"b² − 4ac, which shows how many real roots there are", x:"A negative discriminant means no real roots."},
    {t:"axis of symmetry", d:"the vertical line through the turning point", x:"For y = x² − 4x the axis is x = 2."},
    {t:"concave", d:"the direction a parabola opens", x:"y = −x² is concave downwards."}
  ],
  worked:[
    {q:"Solve x² − 7x + 12 = 0 by factorization.",
     steps:["Find two numbers with product 12 and sum −7: −3 and −4.","Write (x − 3)(x − 4) = 0.","A product of zero means one factor is zero.","x − 3 = 0 or x − 4 = 0."],
     a:"x = 3 or x = 4"},
    {q:"Solve x² + 6x − 2 = 0 by completing the square.",
     steps:["Halve the coefficient of x: 6 ÷ 2 = 3, so write (x + 3)².","(x + 3)² = x² + 6x + 9, so subtract 9 and the extra: x² + 6x − 2 = (x + 3)² − 11.","Set equal to zero: (x + 3)² = 11.","x + 3 = ±√11, so x = −3 ± √11."],
     a:"x = −3 + √11 ≈ 0.32 or x = −3 − √11 ≈ −6.32"},
    {q:"Find the turning point of y = x² − 8x + 10 and say whether it is a maximum or a minimum.",
     steps:["Complete the square: y = (x − 4)² − 16 + 10 = (x − 4)² − 6.","The turning point is (4, −6).","The coefficient of x² is positive, so the parabola opens upwards."],
     a:"Minimum point at (4, −6)"}
  ],
  drillLabel:"Quadratic functions and equations",
  drills:[
    {id:"quad_factor_sh"},{id:"quad_formula_sh"},{id:"quad_complete_sh"},{id:"quad_roots_sh"},
    {id:"quad_discriminant_sh"},{id:"quad_turning_sh"}
  ],
  word:[
    {q:"The area of a rectangle is 84 cm² and its length is 5 cm more than its width. Find the dimensions.",
     a:"w(w + 5) = 84, so w² + 5w − 84 = 0, (w + 12)(w − 7) = 0; w = 7 cm and length = 12 cm."},
    {q:"A ball is thrown upwards so that its height after t seconds is h = 40t − 5t². Find when it is 75 m high.",
     a:"5t² − 40t + 75 = 0, t² − 8t + 15 = 0, (t − 3)(t − 5) = 0; t = 3 s going up and t = 5 s coming down."},
    {q:"The product of two consecutive positive integers is 156. Find them.",
     a:"n(n + 1) = 156, n² + n − 156 = 0, (n + 13)(n − 12) = 0; n = 12, so 12 and 13."},
    {q:"Find the value of k for which x² + kx + 9 = 0 has equal roots.",
     a:"Discriminant = k² − 36 = 0, so k = ±6."},
    {q:"Solve 2x² − 5x − 3 = 0 using the quadratic formula.",
     a:"x = (5 ± √(25 + 24))/4 = (5 ± 7)/4, so x = 3 or x = −1/2."}
  ],
  challenge:[
    {q:"Explain why a quadratic equation can have at most two real roots.",
     a:"A quadratic factors into at most two linear factors, and each factor gives one root; geometrically a parabola can cross a horizontal line at most twice."},
    {q:"Without solving, show that 3x² + 2x + 5 = 0 has no real roots, and explain what this means for its graph.",
     a:"The discriminant is 4 − 60 = −56, which is negative, so there are no real roots; the parabola lies entirely above the x-axis and never touches it."},
    {q:"The sum of the roots of ax² + bx + c = 0 is −b/a. Verify this for 2x² − 7x + 3 = 0.",
     a:"The roots are 3 and 1/2, whose sum is 3.5; −b/a = 7/2 = 3.5, which agrees."}
  ],
  activities:["Draw parabolas from tables of values","Solve the same quadratic three ways and compare","Investigate the discriminant with different values of c","Solve area problems that lead to quadratics"],
  materials:["Graph paper","Calculators","Rulers","Whiteboard"],
  assessment:["Factorization quiz","Quadratic graph assignment","Formula test","Observation and participation"]
},

/* Period IV — Mensuration */
{
  grade:11, period:"IV", sem:"Two", icon:"\u2B55",
  title:"Mensuration",
  subtitle:"Unit VI: The circle as a locus, circle theorems, tangents, perimeter, area, arcs and sectors",
  outcomes:["Discuss and construct the circle as a locus, state and use circle theorems, identify tangents and the alternate segment, and calculate perimeters, areas, arcs and sectors of plane shapes"],
  objectives:["Discuss and construct the circle as a locus","State and use circle theorems","Identify and construct tangents to a circle","Identify and construct the alternate segment","Calculate the perimeter of plane shapes","Find the area of rectangles and squares","Find the area of parallelograms","Find the area of triangles","Discuss and construct circles and name their parts","Calculate arcs and sectors"],
  note:"A <b>circle</b> is the <b>locus</b> of all points at a fixed distance, the <b>radius</b>, from a fixed point, the <b>centre</b>. Its circumference is C = 2πr and its area A = πr². An <b>arc</b> is part of the circumference and a <b>sector</b> is the slice of area it cuts off; both are found from the fraction θ/360 of the whole circle. The main <b>circle theorems</b> are: the angle at the centre is twice the angle at the circumference; the angle in a semicircle is 90°; angles in the same segment are equal; opposite angles of a cyclic quadrilateral sum to 180°; and the angle between a <b>tangent</b> and a chord equals the angle in the <b>alternate segment</b>.",

  study:[
    /* ---- course text: Semester Two, Period IV — Mensuration (guide p. 28) ---- */
    {k:"h3", t:"The Circle as a Locus"},
    {k:"p", t:"A **locus** is the path traced by a point moving under a given condition. A **circle** is the locus of all points at a fixed distance — the **radius** — from a fixed point — the **centre**. The **diameter** is a chord through the centre, equal to twice the radius. The **circumference** is the distance all the way round: **C = 2πr = πd**, and the area is **A = πr²**."},
    {k:"rule"},
    {k:"h3", t:"Parts of a Circle"},
    {k:"bul", items:["**Radius** — from the centre to the circumference.","**Diameter** — a chord through the centre, d = 2r.","**Chord** — a straight line joining two points on the circle.","**Arc** — part of the circumference.","**Sector** — the region between two radii and an arc.","**Segment** — the region between a chord and an arc.","**Tangent** — a line that touches the circle at exactly one point."]},
    {k:"rule"},
    {k:"h3", t:"Circle Theorems"},
    {k:"table", head:["Theorem","Statement"], rows:[["Angle at the centre","The angle at the centre is twice the angle at the circumference on the same arc"],["Angle in a semicircle","The angle in a semicircle is 90°"],["Same segment","Angles in the same segment are equal"],["Cyclic quadrilateral","Opposite angles of a cyclic quadrilateral add to 180°"],["Tangent and radius","The tangent is perpendicular to the radius at the point of contact"],["Alternate segment","The angle between a tangent and a chord equals the angle in the alternate segment"]]},
    {k:"p", t:"**Worked example — angle AOB at the centre is 110°:** the angle ACB at the circumference in the same segment is half of it, so ACB = 110 ÷ 2 = **55°**."},
    {k:"rule"},
    {k:"h3", t:"Perimeter and Area of Plane Shapes"},
    {k:"p", t:"The **perimeter** is the total length of the boundary. Areas: rectangle A = length × width; square A = side²; parallelogram A = base × perpendicular height; triangle A = ½ × base × perpendicular height; trapezium A = ½(a + b)h, where a and b are the parallel sides and h the perpendicular distance between them."},
    {k:"p", t:"**Worked example — a parallelogram with base 15 cm and height 8 cm:** A = 15 × 8 = **120 cm²**. The perpendicular height is not the sloping side — measure the height at right angles to the base."},
    {k:"rule"},
    {k:"h3", t:"Arcs and Sectors"},
    {k:"p", t:"An arc or sector is a fraction of the whole circle, and the fraction is **θ/360**, where θ is the angle at the centre."},
    {k:"bul", items:["Arc length = θ/360 × 2πr.","Sector area = θ/360 × πr².","Sector perimeter = arc length + 2r."]},
    {k:"p", t:"**Worked example — a sector of radius 10 cm with angle 72° (π = 3.14):** fraction = 72/360 = 1/5; arc = 1/5 × 2 × 3.14 × 10 = **12.56 cm**; area = 1/5 × 3.14 × 100 = **62.8 cm²**."}
  ],
  focus:["The circle as a locus","Parts of a circle","Circle theorems","Tangents and the alternate segment","Cyclic quadrilaterals","Perimeter of plane shapes","Area of rectangles, squares, parallelograms and triangles","Arcs and sectors"],
  terms:[
    {t:"locus", d:"the set of all points satisfying a condition", x:"A circle is the locus of points a fixed distance from a centre."},
    {t:"radius", d:"the distance from the centre to any point on the circle", x:"A radius of 7 cm."},
    {t:"diameter", d:"a chord through the centre, equal to twice the radius", x:"A diameter of 14 cm."},
    {t:"circumference", d:"the distance all the way round a circle", x:"C = 2πr."},
    {t:"chord", d:"a straight line joining two points on a circle", x:"The diameter is the longest chord."},
    {t:"tangent", d:"a line that touches a circle at exactly one point", x:"A tangent is at right angles to the radius at the point of contact."},
    {t:"sector", d:"the region between two radii and an arc", x:"A quarter of a circle is a sector."},
    {t:"segment", d:"the region between a chord and an arc", x:"The alternate segment lies opposite the tangent angle."},
    {t:"cyclic quadrilateral", d:"a four-sided figure whose vertices all lie on one circle", x:"Its opposite angles add to 180°."},
    {t:"perimeter", d:"the total length of the boundary of a shape", x:"The perimeter of a 5 cm square is 20 cm."}
  ],
  worked:[
    {q:"Find the circumference and area of a circle of radius 14 cm. Take π = 22/7.",
     steps:["C = 2πr = 2 × 22/7 × 14.","C = 88 cm.","A = πr² = 22/7 × 14 × 14.","A = 616 cm²."],
     a:"Circumference 88 cm, area 616 cm²"},
    {q:"A sector of a circle of radius 10 cm has an angle of 72°. Find its arc length and area. Take π = 3.14.",
     steps:["Fraction of the circle = 72/360 = 1/5.","Arc = 1/5 × 2πr = 1/5 × 2 × 3.14 × 10 = 12.56 cm.","Area = 1/5 × πr² = 1/5 × 3.14 × 100 = 62.8 cm²."],
     a:"Arc 12.56 cm, area 62.8 cm²"},
    {q:"In a circle, angle AOB at the centre is 110°. Find the angle ACB at the circumference in the same segment.",
     steps:["The angle at the centre is twice the angle at the circumference.","So ACB = 110 ÷ 2.","ACB = 55°."],
     a:"55°"}
  ],
  drillLabel:"Mensuration and circle geometry",
  drills:[
    {id:"circle_circumference_sh"},{id:"circle_area_sh"},{id:"arc_sector_sh"},{id:"area_parallelogram_sh"},
    {id:"area_triangle_sh"},{id:"perimeter_composite_sh"},{id:"circle_theorem_sh"}
  ],
  word:[
    {q:"A circular garden has a diameter of 28 m. Find the cost of fencing it at L$45 per metre. Take π = 22/7.",
     a:"C = 22/7 × 28 = 88 m; cost = 88 × 45 = L$3 960."},
    {q:"A sector of angle 120° is cut from a circle of radius 21 cm. Find its area. Take π = 22/7.",
     a:"Area = 120/360 × 22/7 × 21² = 1/3 × 1 386 = 462 cm²."},
    {q:"A parallelogram has a base of 15 cm and a perpendicular height of 8 cm. Find its area.",
     a:"A = base × height = 15 × 8 = 120 cm²."},
    {q:"A triangle has sides 13 cm, 14 cm and 15 cm. Use Heron's formula to find its area.",
     a:"s = 21; A = √(21 × 8 × 7 × 6) = √7 056 = 84 cm²."},
    {q:"Two tangents are drawn to a circle from an external point. If the angle between them is 70°, find the angle subtended at the centre.",
     a:"Each radius is at right angles to its tangent, so the central angle = 360 − 90 − 90 − 70 = 110°."}
  ],
  challenge:[
    {q:"Explain why the angle in a semicircle is always a right angle.",
     a:"The angle at the centre subtended by a diameter is 180°, and the angle at the circumference is half the angle at the centre, so it is 90°."},
    {q:"A rope is tied to a corner of a square shed of side 6 m and is 10 m long. Describe the locus of a goat tied to the rope.",
     a:"The locus is three-quarters of a circle of radius 10 m around the corner, plus quarter circles of radius 4 m where the rope bends round the two adjacent corners."},
    {q:"Show that when the radius of a circle is doubled the area becomes four times as large, and explain why.",
     a:"A = πr², so doubling r gives π(2r)² = 4πr². The radius is squared, so the scale factor applies twice."}
  ],
  activities:["Construct circles and locate their centres by bisecting chords","Measure arcs and sectors of real circular objects","Verify circle theorems by measurement","Find areas of composite shapes around the school"],
  materials:["Compasses","Protractors","String and pegs","Circular objects"],
  assessment:["Circle theorem quiz","Area and perimeter assignment","Arcs and sectors test","Construction observation"]
},

/* Period V — Trigonometry */
{
  grade:11, period:"V", sem:"Two", icon:"\uD83D\uDCD0",
  title:"Trigonometry",
  subtitle:"Unit VII: Trigonometric ratios, heights and distances, and angles of elevation and depression",
  outcomes:["Define and compute the angle of slope and gradient, the tangent, cosine and sine of an angle, find heights and distances, and solve problems involving rotation and angles of elevation and depression"],
  objectives:["Define and compute the angle of slope and gradient","Define and compute the tangent of an angle","Find heights and distances","Compute problems involving rotation","Define and compute the cosine of an angle","Define and compute the sine of an angle","Discuss the uses of trigonometry","Calculate trigonometric ratios of 30°, 60° and 45°","Solve problems on angles of elevation and depression"],
  note:"In a right-angled triangle the three <b>ratios</b> are sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse and tan θ = opposite/adjacent — remembered as <b>SOH CAH TOA</b>. The <b>gradient</b> of a line is its tangent, so a line at angle θ to the horizontal has gradient tan θ. For the special angles, sin 30° = 1/2, sin 45° = √2/2, sin 60° = √3/2, and cos and sin swap between 30° and 60°. An <b>angle of elevation</b> is measured upwards from the horizontal and an <b>angle of depression</b> downwards from it; both are worked out with the same right-angled triangle.",

  study:[
    /* ---- course text: Semester Two, Period V — Trigonometry (guide pp. 29–30) ---- */
    {k:"h3", t:"The Trigonometric Ratios"},
    {k:"p", t:"In a right-angled triangle the three ratios link an angle to the sides:"},
    {k:"table", head:["Ratio","Definition","Memory"], rows:[["Sine","sin θ = opposite ÷ hypotenuse","SOH"],["Cosine","cos θ = adjacent ÷ hypotenuse","CAH"],["Tangent","tan θ = opposite ÷ adjacent","TOA"]]},
    {k:"p", t:"The opposite side faces the angle, the adjacent side is the other side next to it, and the hypotenuse is always the side opposite the right angle. SOH CAH TOA gives the ratio to use; cover the letter you want and read the rest. To find an angle from a ratio, use the inverse functions sin⁻¹, cos⁻¹ or tan⁻¹."},
    {k:"rule"},
    {k:"h3", t:"The Angle of Slope and Gradient"},
    {k:"p", t:"The **gradient** of a straight line is the tangent of the angle the line makes with the horizontal: m = tan θ. A road with gradient 1 in 5 rises 1 m for every 5 m horizontal, so its angle θ satisfies tan θ = 1/5, giving θ ≈ 11.3°. The **angle of inclination** is the angle the slope makes with the horizontal."},
    {k:"rule"},
    {k:"h3", t:"Special Angles"},
    {k:"p", t:"The exact ratios of the special angles come from two right-angled triangles — half of an equilateral triangle (30°–60°–90°) and half of a square (45°–45°–90°):"},
    {k:"table", head:["θ","sin θ","cos θ","tan θ"], rows:[["30°","1/2","√3/2","1/√3"],["45°","√2/2","√2/2","1"],["60°","√3/2","1/2","√3"]]},
    {k:"p", t:"Between 30° and 60° the sine and cosine values swap; between 0° and 90°, sin θ and cos θ are both positive. For any angle, **sin²θ + cos²θ = 1** (the Pythagorean identity)."},
    {k:"rule"},
    {k:"h3", t:"Heights and Distances"},
    {k:"p", t:"Draw a right-angled triangle from the problem, label the known angle and side, choose the ratio that links them to the unknown, and solve."},
    {k:"p", t:"**Worked example:** from a point 40 m from the foot of a mast, the angle of elevation of the top is 32°. Height is opposite and 40 m is adjacent, so tan 32° = h/40; h = 40 × 0.6249 ≈ **25.0 m**."},
    {k:"rule"},
    {k:"h3", t:"Angles of Elevation and Depression"},
    {k:"p", t:"An **angle of elevation** is measured upwards from the horizontal to the line of sight; an **angle of depression** is measured downwards from the horizontal. Because the horizontal lines are parallel, the angle of depression from one point equals the angle of elevation from the other — alternate angles — so both are solved with one right-angled triangle."},
    {k:"p", t:"**Worked example — from the top of a 20 m building the angle of depression of a car is 35°:** the car is d = 20/tan 35° = 20/0.7002 ≈ **28.6 m** from the foot of the building."},
    {k:"rule"},
    {k:"h3", t:"Problems Involving Rotation and Uses of Trigonometry"},
    {k:"p", t:"Rotation problems use the same ratios: a point rotating at radius r through angle θ covers distances r cos θ horizontally and r sin θ vertically. Trigonometry is used in navigation and bearings, surveying, engineering, construction, map work and physics, wherever a right-angled triangle can be drawn. Always keep the calculator in degree mode, state the accuracy, and check that the answer is sensible for the angle."}
  ],
  focus:["Sine, cosine and tangent","The angle of slope and gradient","Trigonometric ratios of 30°, 60° and 45°","Finding heights and distances","Angles of elevation and depression","Problems involving rotation","Uses of trigonometry"],
  terms:[
    {t:"sine", d:"opposite side divided by the hypotenuse", x:"sin 30° = 0.5."},
    {t:"cosine", d:"adjacent side divided by the hypotenuse", x:"cos 60° = 0.5."},
    {t:"tangent", d:"opposite side divided by the adjacent side", x:"tan 45° = 1."},
    {t:"hypotenuse", d:"the side opposite the right angle", x:"The hypotenuse is the longest side."},
    {t:"angle of elevation", d:"the angle looked up from the horizontal", x:"The angle of elevation of a tower top is 30°."},
    {t:"angle of depression", d:"the angle looked down from the horizontal", x:"From a cliff top the angle of depression is 40°."},
    {t:"gradient", d:"the tangent of the angle a line makes with the horizontal", x:"A gradient of 1 means an angle of 45°."},
    {t:"inclination", d:"the angle a slope makes with the horizontal", x:"The road has an inclination of 12°."},
    {t:"inverse trigonometry", d:"finding the angle from a ratio, written sin⁻¹", x:"sin⁻¹ 0.5 = 30°."},
    {t:"Pythagorean identity", d:"sin²θ + cos²θ = 1 for every angle", x:"It checks any pair of ratios."}
  ],
  worked:[
    {q:"In a right-angled triangle the side opposite θ is 5 cm and the hypotenuse is 13 cm. Find sin θ, cos θ and tan θ.",
     steps:["Adjacent = √(13² − 5²) = √144 = 12 cm.","sin θ = 5/13 ≈ 0.3846.","cos θ = 12/13 ≈ 0.9231.","tan θ = 5/12 ≈ 0.4167."],
     a:"sin θ = 5/13, cos θ = 12/13, tan θ = 5/12"},
    {q:"A ladder 8 m long makes an angle of 65° with the ground. How high up the wall does it reach?",
     steps:["The height is opposite the angle, and the ladder is the hypotenuse.","Use sin: h/8 = sin 65°.","h = 8 × 0.9063.","h ≈ 7.25 m."],
     a:"About 7.25 m up the wall"},
    {q:"From a point 40 m from the foot of a mast the angle of elevation of the top is 32°. Find the height of the mast.",
     steps:["Height is opposite, 40 m is adjacent, so use tan.","h/40 = tan 32° = 0.6249.","h = 40 × 0.6249.","h ≈ 25.0 m."],
     a:"About 25 m high"}
  ],
  drillLabel:"Trigonometry",
  drills:[
    {id:"trig_ratio_sh"},{id:"trig_special_sh"},{id:"trig_find_side_sh"},{id:"trig_find_angle_sh"},
    {id:"elevation_sh"},{id:"depression_sh"},{id:"gradient_angle_sh"}
  ],
  word:[
    {q:"A kite string 120 m long makes an angle of 48° with the horizontal. Find the height of the kite.",
     a:"h = 120 sin 48° = 120 × 0.7431 ≈ 89.2 m."},
    {q:"A ship sails 30 km on a bearing of 060°. Find how far east and how far north it has travelled.",
     a:"East = 30 sin 60° ≈ 26.0 km; north = 30 cos 60° = 15 km."},
    {q:"From the top of a 20 m building the angle of depression of a car is 35°. How far is the car from the foot of the building?",
     a:"d = 20/tan 35° = 20/0.7002 ≈ 28.6 m."},
    {q:"A road rises 1 m for every 12 m along the slope. Find the angle of inclination.",
     a:"sin θ = 1/12, so θ = sin⁻¹(0.0833) ≈ 4.8°."},
    {q:"Evaluate 2 sin 30° cos 60° + tan 45° without tables.",
     a:"2 × 1/2 × 1/2 + 1 = 1/2 + 1 = 3/2."}
  ],
  challenge:[
    {q:"Explain why sin 30° equals cos 60°.",
     a:"In a right-angled triangle the two acute angles add to 90°, so the side opposite 30° is the side adjacent to 60°; the same two lengths appear in both ratios, giving sin 30° = cos 60° = 1/2."},
    {q:"Prove that tan θ = sin θ / cos θ.",
     a:"sin θ / cos θ = (opp/hyp) ÷ (adj/hyp) = opp/adj, which is exactly tan θ."},
    {q:"A man walks 100 m due east then 100 m due north. Find his bearing from the start.",
     a:"The two legs are equal, so the angle from north is 45°; the bearing is 045° and the distance is 100√2 ≈ 141.4 m."}
  ],
  activities:["Measure heights of school buildings using a clinometer","Practise the ratios of 30°, 60° and 45° from an equilateral triangle","Solve elevation and depression problems from photographs","Investigate gradients of ramps around the school"],
  materials:["Clinometers","Calculators","Measuring tapes","Protractors"],
  assessment:["Trigonometric ratio quiz","Heights and distances assignment","Elevation and depression test","Practical measurement observation"]
},

/* Period VI — Probability */
{
  grade:11, period:"VI", sem:"Two", icon:"\uD83C\uDFB2",
  title:"Probability",
  subtitle:"Unit VIII: Relative frequency, sample space, compound, union, intersection and independent events",
  outcomes:["Define and discuss probability, determine relative frequency, and compute compound, union, intersection and independent events, using sets, Venn diagrams, tree diagrams and contingency tables"],
  objectives:["Define and discuss probability","Determine the relative frequency","Review the basic concepts of sets, Venn diagrams, tree diagrams and contingency tables","Compute compound events","Compute the union of events","Compute the intersection of events","Compute independent events","Discuss the sample space and events of an experiment","Find the probability of an event and the odds of an event"],
  note:"The <b>probability</b> of an event is the number of favourable outcomes divided by the total number of equally likely outcomes, and it always lies between 0 and 1. The <b>sample space</b> is the set of all possible outcomes. <b>Relative frequency</b> estimates a probability from actual trials. For two events, P(A ∪ B) = P(A) + P(B) − P(A ∩ B), and if A and B are <b>mutually exclusive</b> the last term is zero. If A and B are <b>independent</b>, P(A ∩ B) = P(A) × P(B). The <b>complement</b> gives P(not A) = 1 − P(A), and the <b>odds</b> in favour are favourable : unfavourable.",

  study:[
    /* ---- course text: Semester Two, Period VI — Probability (guide pp. 31–32) ---- */
    {k:"h3", t:"Probability and the Probability Scale"},
    {k:"p", t:"The **probability** of an event is the number of favourable outcomes divided by the total number of equally likely outcomes: **P(E) = favourable ÷ total**. Probability is measured on a scale from **0 (impossible)** to **1 (certain)**; all probabilities lie between, and probabilities of a complete set of outcomes add to 1. An **event** is one outcome or a group of outcomes, and the **sample space** is the set of all possible outcomes."},
    {k:"rule"},
    {k:"h3", t:"Relative Frequency"},
    {k:"p", t:"When outcomes are not equally likely, estimate the probability by **relative frequency**: the number of times the event occurs divided by the number of trials. The more trials, the better the estimate. Relative frequency can be a probability estimate, but it is not an exact probability."},
    {k:"rule"},
    {k:"h3", t:"Sample Space and Events"},
    {k:"p", t:"List the sample space carefully — a **tree diagram** is useful for successive events, and a **contingency table** (two-way table) for two characteristics. Count the favourable outcomes directly, or use the formulas below."},
    {k:"rule"},
    {k:"h3", t:"Mutually Exclusive and Complementary Events"},
    {k:"p", t:"Two events are **mutually exclusive** when they cannot happen together. For mutually exclusive events, **P(A ∪ B) = P(A) + P(B)**, and in general **P(A ∪ B) = P(A) + P(B) − P(A ∩ B)**. The **complement** of A, 'not A', gives **P(A′) = 1 − P(A)**."},
    {k:"rule"},
    {k:"h3", t:"Union and Intersection of Events"},
    {k:"p", t:"The **union** A ∪ B is either event happening; the **intersection** A ∩ B is both happening together. The addition rule **P(A ∪ B) = P(A) + P(B) − P(A ∩ B)** subtracts the overlap, which was counted twice."},
    {k:"p", t:"**Worked example — P(passing Mathematics) = 0.7 and P(passing English) = 0.6, independent:** P(both) = 0.7 × 0.6 = **0.42**; P(neither) = 0.3 × 0.4 = **0.12**."},
    {k:"rule"},
    {k:"h3", t:"Independent Events and the Multiplication Law"},
    {k:"p", t:"Two events are **independent** when one does not affect the probability of the other. For independent events, **P(A ∩ B) = P(A) × P(B)**. When outcomes are not replaced, the events are not independent — the second probability is conditional, and the multiplicands change: P(both red) = (number of red/total) × (red − 1)/(total − 1)."},
    {k:"rule"},
    {k:"h3", t:"Tree Diagrams and Contingency Tables"},
    {k:"p", t:"A **tree diagram** branches at each stage and labels each branch with its probability; multiply along a path to get the probability of that sequence, and add the probabilities of paths that give the required outcome. A **contingency table** arranges counts of two characteristics, so probabilities are read from the totals, including conditional ones."},
    {k:"rule"},
    {k:"h3", t:"Odds For and Against an Event"},
    {k:"p", t:"The **odds in favour** of an event are favourable outcomes : unfavourable outcomes, and the **odds against** are the reverse. If the odds in favour are a : b, then P(event) = a/(a + b) and P(not event) = b/(a + b)."},
    {k:"p", t:"**Worked example — a bag holds 5 red, 3 blue and 2 green balls:** P(red) = 5/10 = **1/2**; favourable = 5 and unfavourable = 5, so the odds in favour of red are 5 : 5 = **1 : 1**."}
  ],
  focus:["Probability and the probability scale","Relative frequency","Sample space and events","Mutually exclusive and complementary events","Union and intersection of events","Independent events and the multiplication law","Tree diagrams and contingency tables","Odds for and against an event"],
  terms:[
    {t:"probability", d:"the chance that an event happens, from 0 to 1", x:"The probability of a head is 1/2."},
    {t:"sample space", d:"the set of all possible outcomes", x:"For a die the sample space is {1, 2, 3, 4, 5, 6}."},
    {t:"event", d:"one outcome or a group of outcomes", x:"Getting an even number is an event."},
    {t:"relative frequency", d:"the number of times an event occurs divided by the number of trials", x:"30 heads in 50 tosses gives 0.6."},
    {t:"mutually exclusive", d:"two events that cannot happen together", x:"A die cannot show 2 and 5 at once."},
    {t:"complementary events", d:"an event and its opposite, whose probabilities add to 1", x:"P(not rain) = 1 − P(rain)."},
    {t:"independent events", d:"events where one does not affect the other", x:"Two tosses of a coin are independent."},
    {t:"union of events", d:"either event happening, P(A ∪ B)", x:"P(A ∪ B) = P(A) + P(B) − P(A ∩ B)."},
    {t:"intersection", d:"both events happening together, P(A ∩ B)", x:"P(A ∩ B) = P(A) × P(B) when independent."},
    {t:"odds", d:"the ratio of favourable to unfavourable outcomes", x:"Odds of 2 : 3 mean probability 2/5."},
    {t:"tree diagram", d:"a branching diagram listing all outcomes of successive events", x:"Two coin tosses give four branches."},
    {t:"contingency table", d:"a two-way table of counts for two characteristics", x:"A table of boys and girls against pass and fail."}
  ],
  worked:[
    {q:"A bag holds 5 red, 3 blue and 2 green balls. Find the probability of picking a red ball and the odds in favour of red.",
     steps:["Total balls = 5 + 3 + 2 = 10.","P(red) = 5/10 = 1/2.","Favourable = 5, unfavourable = 5.","Odds in favour = 5 : 5 = 1 : 1."],
     a:"P(red) = 1/2 and the odds are 1 : 1"},
    {q:"Two fair dice are thrown. Find the probability that the sum is 9.",
     steps:["The sample space has 6 × 6 = 36 outcomes.","The pairs giving 9 are (3,6), (4,5), (5,4), (6,3).","That is 4 favourable outcomes.","P = 4/36 = 1/9."],
     a:"1/9"},
    {q:"In a class, P(passing Mathematics) = 0.7 and P(passing English) = 0.6, and the two are independent. Find the probability of passing both and of passing neither.",
     steps:["P(both) = 0.7 × 0.6 = 0.42.","P(neither) = P(fail Maths) × P(fail English).","= 0.3 × 0.4.","= 0.12."],
     a:"P(both) = 0.42 and P(neither) = 0.12"}
  ],
  drillLabel:"Probability",
  drills:[
    {id:"prob_simple_sh"},{id:"prob_complement_sh"},{id:"prob_union_sh"},{id:"prob_independent_sh"},
    {id:"prob_relative_sh"},{id:"prob_odds_sh"},{id:"prob_tree_sh"}
  ],
  word:[
    {q:"A die is thrown once. Find the probability of obtaining a number greater than 4.",
     a:"The favourable outcomes are 5 and 6, so P = 2/6 = 1/3."},
    {q:"A box contains 12 pens, 4 of which are defective. Two pens are taken at random without replacement. Find the probability that both are defective.",
     a:"P = 4/12 × 3/11 = 1/11."},
    {q:"In a survey of 200 people, 120 like rice and 90 like cassava, and 55 like both. Find the probability that a person chosen at random likes at least one of them.",
     a:"n(union) = 120 + 90 − 55 = 155, so P = 155/200 = 0.775."},
    {q:"The probability that it rains on Monday is 0.4 and on Tuesday 0.3, independently. Find the probability that it rains on exactly one of the two days.",
     a:"P = 0.4 × 0.7 + 0.6 × 0.3 = 0.28 + 0.18 = 0.46."},
    {q:"A coin is tossed three times. Use a tree diagram to find the probability of exactly two heads.",
     a:"There are 8 equally likely outcomes and 3 give two heads, so P = 3/8."}
  ],
  challenge:[
    {q:"Explain why the probability of an event and the probability of its complement must add to 1.",
     a:"An event either happens or does not happen; these are the only two mutually exclusive possibilities and together they cover the whole sample space, whose probability is 1."},
    {q:"Two events A and B have P(A) = 0.5, P(B) = 0.4 and P(A ∪ B) = 0.7. Are they independent? Justify.",
     a:"P(A ∩ B) = 0.5 + 0.4 − 0.7 = 0.2, and P(A) × P(B) = 0.2, so they are independent."},
    {q:"A disease test is 99% accurate. Explain why a positive result does not mean there is a 99% chance of having the disease.",
     a:"Accuracy describes the test, not the disease. When the disease is rare, most positives come from healthy people wrongly flagged, so the true chance is much lower; this depends on how common the disease is."}
  ],
  activities:["Toss coins and throw dice to estimate relative frequency","Build tree diagrams for two-stage experiments","Construct contingency tables from class data","Discuss probability in health and risk contexts"],
  materials:["Dice","Coins","Spinners","Counters and tables"],
  assessment:["Probability quiz","Tree diagram assignment","Compound events test","Practical experiment observation"]
}
,

/* =============================== GRADE 12 =============================== */
/* Period I — Sequence and Series */
{
  grade:12, period:"I", sem:"One", icon:"\uD83D\uDD02",
  title:"Sequence and Series",
  subtitle:"Unit I: Arithmetic and geometric sequences, and the sums of their series",
  outcomes:["Apply concepts to solve problems on arithmetic sequences and geometric progressions"],
  objectives:["Define and identify a sequence","Define and discuss an arithmetic sequence or progression","State the formula for an arithmetic sequence and use it to solve problems","Define and discuss a geometric sequence or progression","State the formula for a geometric sequence and use it to solve problems","State the formula for the sum of an arithmetic series and use it","State the formula for the sum of a geometric series and use it"],
  note:"A <b>sequence</b> is an ordered list of numbers following a rule, and a <b>series</b> is the sum of the terms of a sequence. In an <b>arithmetic progression</b> each term is found by adding a fixed <b>common difference</b> d, so the nth term is <b>Tₙ = a + (n − 1)d</b> and the sum of n terms is <b>Sₙ = n/2 [2a + (n − 1)d]</b>. In a <b>geometric progression</b> each term is found by multiplying by a fixed <b>common ratio</b> r, so <b>Tₙ = arⁿ⁻¹</b> and <b>Sₙ = a(rⁿ − 1)/(r − 1)</b>. When −1 < r < 1 the geometric series has a <b>sum to infinity</b>, S∞ = a/(1 − r).",

  study:[
    /* ---- course text: Semester One, Period I — Sequence and Series (guide pp. 33–34) ---- */
    {k:"h3", t:"Sequences and their Rules"},
    {k:"p", t:"A **sequence** is an ordered list of numbers following a rule, and each number is a **term** (T₁, T₂, T₃, …). A **series** is the sum of the terms of a sequence. One way to describe a sequence is by its **nth term** — a formula that gives any term directly without writing all the terms before it. If Tₙ = 2n + 1, the terms are 3, 5, 7, 9, …"},
    {k:"rule"},
    {k:"h3", t:"Arithmetic Progressions"},
    {k:"p", t:"An **arithmetic progression** (AP) is a sequence in which each term is obtained by adding a fixed **common difference** d to the previous term: a, a + d, a + 2d, …. The **nth term** is **Tₙ = a + (n − 1)d**."},
    {k:"p", t:"**Worked example — 20th term of 5, 9, 13, 17, …:** a = 5 and d = 4, so T₂₀ = 5 + 19 × 4 = 5 + 76 = **81**."},
    {k:"p", t:"The **arithmetic mean** of two terms is the middle value: the mean of a and b is (a + b)/2, and it is the term halfway between them in an AP."},
    {k:"rule"},
    {k:"h3", t:"Sum of an Arithmetic Series"},
    {k:"p", t:"The sum of the first n terms of an AP is **Sₙ = n/2 × [2a + (n − 1)d]**, or **Sₙ = n/2 × (a + l)**, where l is the last term. The second form is easiest when the first and last terms are known."},
    {k:"p", t:"**Worked example — sum of the first 15 terms of 5, 9, 13, …:** S₁₅ = 15/2 × [2(5) + 14(4)] = 15/2 × 66 = 15 × 33 = **495**."},
    {k:"rule"},
    {k:"h3", t:"Geometric Progressions"},
    {k:"p", t:"A **geometric progression** (GP) is a sequence in which each term is obtained by multiplying the previous term by a fixed **common ratio** r: a, ar, ar², ar³, …. The **nth term** is **Tₙ = arⁿ⁻¹**."},
    {k:"p", t:"**Worked example — T₃ = 12 and r = 2:** ar² = 12, so a × 4 = 12 and a = 3; the progression is 3, 6, 12, 24, …."},
    {k:"rule"},
    {k:"h3", t:"Sum of a Geometric Series"},
    {k:"p", t:"The sum of the first n terms is **Sₙ = a(rⁿ − 1)/(r − 1)** for r > 1, or **Sₙ = a(1 − rⁿ)/(1 − r)** for r < 1. Both are the same formula written to keep the denominators positive."},
    {k:"p", t:"**Worked example — S₆ for a = 3, r = 2:** S₆ = 3(2⁶ − 1)/(2 − 1) = 3 × 63 = **189**."},
    {k:"rule"},
    {k:"h3", t:"Sum to Infinity"},
    {k:"p", t:"When −1 < r < 1, the terms of a GP get smaller and smaller, and the series settles at a finite limit: **S∞ = a/(1 − r)**. The condition |r| < 1 is essential; if |r| ≥ 1 the terms do not shrink and there is no sum to infinity."},
    {k:"p", t:"**Worked example — 1 + 1/2 + 1/4 + 1/8 + …:** a = 1, r = 1/2, so S∞ = 1/(1 − 1/2) = **2**."},
    {k:"rule"},
    {k:"h3", t:"Word Problems on Sequences and Series"},
    {k:"p", t:"Identify whether the growth is by a fixed **addition** (AP) or a fixed **multiplication** (GP), then use the appropriate nth-term or sum formula. Common applications: stacking objects, saving the same amount each month (AP), population growth or compound interest (GP). Always state which term or which sum the question asks for."}
  ],
  focus:["Sequences and their rules","Arithmetic progressions and the nth term","Sum of an arithmetic series","Geometric progressions and the nth term","Sum of a geometric series","Sum to infinity","Word problems on sequences and series"],
  terms:[
    {t:"sequence", d:"an ordered list of numbers following a rule", x:"2, 5, 8, 11 is a sequence."},
    {t:"term", d:"one number in a sequence, written Tₙ", x:"The 4th term is 11."},
    {t:"series", d:"the sum of the terms of a sequence", x:"2 + 5 + 8 = 15 is a series."},
    {t:"arithmetic progression", d:"a sequence with a fixed common difference", x:"3, 7, 11, 15 has d = 4."},
    {t:"common difference", d:"the amount added to get the next term", x:"In 3, 7, 11 the common difference is 4."},
    {t:"geometric progression", d:"a sequence with a fixed common ratio", x:"2, 6, 18 has r = 3."},
    {t:"common ratio", d:"the number each term is multiplied by", x:"In 2, 6, 18 the common ratio is 3."},
    {t:"nth term", d:"a formula that gives any term of a sequence", x:"Tₙ = a + (n − 1)d."},
    {t:"sum to infinity", d:"the limiting sum of a geometric series when −1 < r < 1", x:"1 + 1/2 + 1/4 + … sums to 2."},
    {t:"arithmetic mean", d:"the middle value between two terms of an AP", x:"Between 4 and 10 the arithmetic mean is 7."}
  ],
  worked:[
    {q:"Find the 20th term of the arithmetic sequence 5, 9, 13, 17, …",
     steps:["First term a = 5 and common difference d = 4.","Tₙ = a + (n − 1)d.","T₂₀ = 5 + 19 × 4.","T₂₀ = 5 + 76 = 81."],
     a:"The 20th term is 81"},
    {q:"Find the sum of the first 15 terms of the sequence 5, 9, 13, 17, …",
     steps:["Sₙ = n/2 [2a + (n − 1)d].","S₁₅ = 15/2 [2(5) + 14 × 4].","= 15/2 [10 + 56] = 15/2 × 66.","= 15 × 33 = 495."],
     a:"S₁₅ = 495"},
    {q:"The third term of a geometric progression is 12 and the common ratio is 2. Find the first term and the sum of the first six terms.",
     steps:["T₃ = ar² = 12, so a(4) = 12 and a = 3.","S₆ = a(r⁶ − 1)/(r − 1) = 3(64 − 1)/1.","S₆ = 3 × 63 = 189."],
     a:"a = 3 and S₆ = 189"}
  ],
  drillLabel:"Sequences and series",
  drills:[
    {id:"ap_nth_sh"},{id:"ap_sum_sh"},{id:"gp_nth_sh"},{id:"gp_sum_sh"},
    {id:"gp_infinity_sh"},{id:"sequence_rule_sh"}
  ],
  word:[
    {q:"A worker saves L$500 in the first month and increases her saving by L$150 each month. Find her saving in the 12th month and her total saving in the first year.",
     a:"T₁₂ = 500 + 11(150) = L$2 150; S₁₂ = 12/2 (2 × 500 + 11 × 150) = 6 × 2 650 = L$15 900."},
    {q:"A ball is dropped from 243 m and rebounds to two-thirds of its previous height each time. Find the height of the fifth rebound.",
     a:"h = 243 × (2/3)⁵ = 243 × 32/243 = 32 m."},
    {q:"The sum of the first n terms of an AP is given by Sₙ = 3n² + 2n. Find the first term and the common difference.",
     a:"T₁ = S₁ = 5; T₂ = S₂ − S₁ = 16 − 5 = 11, so d = 6 and a = 5."},
    {q:"Find the sum to infinity of the series 8 + 4 + 2 + 1 + …",
     a:"a = 8, r = 1/2; S∞ = 8/(1 − 1/2) = 16."},
    {q:"How many terms of the sequence 7, 12, 17, 22, … are needed for the sum to exceed 1 000?",
     a:"Sₙ = n/2 (14 + 5(n − 1)) > 1 000. Trying n = 19 gives 969 and n = 20 gives 1 050, so 20 terms."}
  ],
  challenge:[
    {q:"Explain why a geometric series has a sum to infinity only when −1 < r < 1.",
     a:"When |r| < 1 the terms rⁿ shrink towards zero, so the sum settles down to a fixed value a/(1 − r). If |r| ≥ 1 the terms do not shrink and the sum grows without limit."},
    {q:"The numbers a, 8 and 18 are consecutive terms of a geometric progression. Find the possible values of a.",
     a:"8/a = 18/8, so a = 64/18 = 32/9. Checking the ratio: 8 ÷ (32/9) = 9/4 and 18 ÷ 8 = 9/4, so a = 32/9."},
    {q:"Show that 0.999… recurring equals 1 by writing it as a geometric series.",
     a:"0.999… = 9/10 + 9/100 + 9/1000 + … with a = 0.9 and r = 0.1, so S∞ = 0.9/0.9 = 1."}
  ],
  activities:["Generate sequences from real patterns","Find the sum of an AP two different ways","Investigate compound interest as a geometric series","Solve saving and depreciation problems"],
  materials:["Calculators","Tables of values","Graph paper","Whiteboard"],
  assessment:["AP and GP quiz","Series assignment","Word problem test","Observation and participation"]
},

/* Period I — Bearings */
{
  grade:12, period:"I", sem:"One", icon:"\uD83E\uDDED",
  title:"Bearings",
  subtitle:"Unit II: Bearing as direction, three-figure bearings, and distance and bearing problems",
  outcomes:["Interpret bearing as direction, represent the bearing of one point from another, and calculate the magnitude and angle of a bearing of a point from another point"],
  objectives:["Interpret a bearing as a direction","Represent the bearing of one point from another as (r, θ)","Write the bearing of one point from another","Find the distance between two points using bearing","Solve bearing problems graphically and by trigonometry"],
  note:"A <b>bearing</b> gives direction as an angle measured <b>clockwise from North</b> and is written with three figures, so due east is 090° and due south is 180°. On a Cartesian grid the positive y-axis is North, the positive x-axis is East, the negative y-axis is South and the negative x-axis is West. The <b>back bearing</b> is the bearing in the opposite direction: add 180° if the bearing is less than 180°, otherwise subtract 180°. Distance and bearing problems are solved with right-angled trigonometry or by scale drawing.",

  study:[
    /* ---- course text: Semester One, Period I — Bearings (guide p. 35) ---- */
    {k:"h3", t:"Bearing as a Direction"},
    {k:"p", t:"A **bearing** is a direction measured **clockwise from North**, written as a **three-figure bearing** so that 030° and 300° cannot be confused. North is 000° (or 360°), East is 090°, South is 180° and West is 270°. Always draw a **north line** at the point of observation before measuring, and mark the required angle clockwise from it."},
    {k:"rule"},
    {k:"h3", t:"The Compass Points and the Cartesian Grid"},
    {k:"p", t:"The **cardinal points** are N, E, S, W, and the **intermediate points** are NE, SE, SW and NW — each 45° apart. On a grid or map, north lines are drawn parallel, so bearing problems can be solved with right-angled triangles: a course on bearing 030° from a north line means the easterly distance is r sin 30° and the northerly distance is r cos 30°."},
    {k:"p", t:"**Worked example:** a ship sails 60 km on bearing 030°. North = 60 cos 30° ≈ **52.0 km** and East = 60 sin 30° = **30 km**."},
    {k:"rule"},
    {k:"h3", t:"Back Bearings"},
    {k:"p", t:"The **back bearing** is the bearing in the reverse direction, and it differs from the forward bearing by **180°**: add 180° if the bearing is less than 180°, and subtract 180° if it is greater. If the result is more than 360°, subtract 360°."},
    {k:"p", t:"**Worked example — the bearing of B from A is 120°:** the bearing of A from B is 120 + 180 = **300°**."},
    {k:"rule"},
    {k:"h3", t:"Distance and Bearing Problems"},
    {k:"p", t:"Draw the complete journey with its north lines, mark all known angles and distances, and use Pythagoras and trigonometry in the right-angled triangles formed. The **displacement** is the straight-line distance and direction from start to finish, and the **angle of turn** is the change of direction between two courses."},
    {k:"p", t:"**Worked example — two ships from one port, one 40 km east and the other 30 km south:** the courses are at right angles, so the distance between them is √(40² + 30²) = **50 km**. From the first ship the second lies south-west: tan θ = 30/40, θ = 36.9° from the south line, so the bearing is 180 + 36.9 = **217°** (nearest degree)."},
    {k:"rule"},
    {k:"h3", t:"Scale Drawing and Graphical Solutions"},
    {k:"p", t:"When a bearing problem is drawn to scale, the angle is measured with a protractor and the distance with a ruler, then converted by the scale. This checks the calculation and is the only method when the triangles are not right-angled. Choose a scale that fits the page, draw all north lines parallel, and state the final bearing as a three-figure bearing."}
  ],
  focus:["Bearing as a direction","Three-figure bearings","The compass points and the Cartesian grid","Back bearings","Distance and bearing problems","Scale drawing and graphical solutions"],
  terms:[
    {t:"bearing", d:"a direction measured clockwise from North", x:"The bearing of B from A is 045°."},
    {t:"three-figure bearing", d:"a bearing written with three digits", x:"Due north is 000° or 360°."},
    {t:"cardinal point", d:"one of the four main directions N, E, S, W", x:"East has a bearing of 090°."},
    {t:"back bearing", d:"the bearing in the reverse direction, differing by 180°", x:"The back bearing of 070° is 250°."},
    {t:"north line", d:"the reference line from which a bearing is measured", x:"Draw the north line at the point you are measuring from."},
    {t:"scale drawing", d:"a drawing made to a fixed scale", x:"1 cm represents 5 km."},
    {t:"displacement", d:"the straight-line distance and direction from start to finish", x:"The ship's displacement is 25 km on a bearing of 143°."},
    {t:"angle of turn", d:"the change of direction between two courses", x:"From 030° to 100° is a turn of 70°."}
  ],
  worked:[
    {q:"Point B is on a bearing of 120° from A. Find the bearing of A from B.",
     steps:["The bearing of B from A is 120°, which is less than 180°.","Add 180° to get the back bearing.","120 + 180 = 300."],
     a:"The bearing of A from B is 300°"},
    {q:"A ship sails 60 km on a bearing of 030°. Find how far north and how far east it travels.",
     steps:["Draw the north line; the course is 30° clockwise from it.","North = 60 cos 30° = 60 × 0.8660.","North ≈ 52.0 km.","East = 60 sin 30° = 60 × 0.5 = 30 km."],
     a:"About 52.0 km north and 30 km east"},
    {q:"Two ships leave the same port. One sails 40 km due east and the other 30 km due south. Find the distance between them and the bearing of the second from the first.",
     steps:["The two courses are at right angles, so use Pythagoras: d = √(40² + 30²) = 50 km.","From the first ship, the second lies south and west.","tan θ = 30/40, so θ = 36.9° from the south line.","Measured clockwise from north: 180 + 36.9 = 216.9°."],
     a:"50 km apart, bearing 217° (to the nearest degree)"}
  ],
  drillLabel:"Bearings",
  drills:[
    {id:"bearing_back_sh"},{id:"bearing_components_sh"},{id:"bearing_distance_sh"},{id:"bearing_three_fig_sh"}
  ],
  word:[
    {q:"A plane flies 250 km on a bearing of 210°. Find how far south and how far west it travels.",
     a:"South = 250 cos 30° ≈ 216.5 km; west = 250 sin 30° = 125 km."},
    {q:"Town B is 12 km from town A on a bearing of 075°. Find the bearing of A from B.",
     a:"075 + 180 = 255°."},
    {q:"A boat sails 8 km east then 6 km north. Find its distance from the start and its three-figure bearing from the start.",
     a:"d = 10 km; tan θ = 8/6 from north gives θ = 53.1°, so the bearing is 053°."},
    {q:"From a lighthouse a ship is 15 km away on a bearing of 315°. Find how far north and how far west the ship is.",
     a:"North = 15 cos 45° ≈ 10.6 km; west = 15 sin 45° ≈ 10.6 km."},
    {q:"A walker goes 5 km on a bearing of 090° then 5 km on a bearing of 180°. Find the bearing of the finish from the start.",
     a:"The two legs are equal, so the angle from south towards east is 45°; the bearing is 135° and the distance is 5√2 ≈ 7.07 km."}
  ],
  challenge:[
    {q:"Explain why the bearing of A from B differs from the bearing of B from A by exactly 180°.",
     a:"The north lines at A and at B are parallel, so the two bearings are co-interior angles on a transversal and add to 360°; the difference is therefore 180°."},
    {q:"A ship sails 10 km on a bearing of 060° then 10 km on a bearing of 120°. Show that it is 10 km from its starting point.",
     a:"The turn between the courses is 60°, so the triangle formed is isosceles with a 60° angle, hence equilateral, giving a third side of 10 km."},
    {q:"Convert the compass direction S 30° W into a three-figure bearing.",
     a:"Start at south, 180°, and turn 30° towards west: 180 + 30 = 210°."}
  ],
  activities:["Measure bearings of landmarks with a protractor and a north line","Solve bearing problems by scale drawing","Practise back bearings in pairs","Map a journey around the school using bearings"],
  materials:["Protractors","Rulers","Compasses","Map sheets"],
  assessment:["Bearing quiz","Scale drawing assignment","Distance and bearing test","Observation and participation"]
},

/* Period I — Constructions */
{
  grade:12, period:"I", sem:"One", icon:"\uD83D\uDCCF",
  title:"Constructions",
  subtitle:"Unit III: Constructing parallel and perpendicular lines, angles, triangles, quadrilaterals, and loci",
  outcomes:["Use a ruler and compasses to construct parallel and perpendicular lines, angles, triangles and quadrilaterals, and define, discuss and identify loci and special loci"],
  objectives:["Construct parallel and perpendicular lines","Construct angles with ruler and compasses","Construct triangles and quadrilaterals","Define and discuss locus","Identify some special loci: the mediator, the angle bisector and parallel lines"],
  note:"A <b>construction</b> uses only a ruler (for straight lines, not measuring) and a pair of compasses. An <b>angle bisector</b> splits an angle into two equal parts, and every point on it is equidistant from the two arms. A <b>perpendicular bisector</b> (mediator) cuts a line into two equal parts at 90°, and every point on it is equidistant from the two ends. The <b>locus</b> of a moving point is the path it traces under a given condition: the locus of points a fixed distance from a point is a circle, from a line is a pair of parallel lines, and from two points is the perpendicular bisector.",

  study:[
    /* ---- course text: Semester One, Period I — Constructions (guide p. 36) ---- */
    {k:"h3", t:"Constructions and Loci"},
    {k:"p", t:"A **construction** is an accurate drawing made with ruler and compasses only, without measuring; the compasses keep a fixed radius and the ruler draws straight lines. A **locus** is the path traced by a point moving under a given condition. The four basic loci are:"},
    {k:"bul", items:["A point at a fixed distance from a fixed point traces a **circle**.","A point at a fixed distance from a fixed line traces **two parallel lines** (one on each side).","A point equidistant from two fixed points traces the **perpendicular bisector** of the line joining them.","A point equidistant from two fixed lines traces the **angle bisectors** of the angles they make."]},
    {k:"rule"},
    {k:"h3", t:"Parallel and Perpendicular Lines"},
    {k:"p", t:"To construct a line parallel to a given line through a point, copy the angle the line makes with a transversal using compasses (corresponding angles equal). To construct a **perpendicular**, draw arcs from the point to cut the line, then bisect the segment formed; a perpendicular meets the line at 90°."},
    {k:"rule"},
    {k:"h3", t:"Bisecting a Line and an Angle"},
    {k:"p", t:"**Worked example — the perpendicular bisector of AB:**"},
    {k:"num", items:["Open the compasses to more than half of AB.","With centre A, draw arcs above and below the line.","Keeping the same radius, repeat from centre B.","Join the two points where the arcs cross; the line is the perpendicular bisector of AB (it cuts AB in half at 90°, and every point on it is equidistant from A and B)."]},
    {k:"p", t:"To **bisect an angle**, draw an arc from the vertex cutting both arms, then equal arcs from those two points inside the angle; join the vertex to the crossing point. The bisector divides the angle into two equal angles, and every point on it is equidistant from the two arms."},
    {k:"rule"},
    {k:"h3", t:"Constructing Angles of 30°, 45°, 60° and 90°"},
    {k:"bul", items:["**60°** — draw an equilateral triangle: from a point A on a line, draw an arc cutting the line at P, then with the same radius from P cut the first arc at Q; angle QAP = 60°.","**90°** — construct a perpendicular; or bisect a 180° straight angle.","**45°** — bisect a 90° angle.","**30°** — bisect a 60° angle."]},
    {k:"rule"},
    {k:"h3", t:"Constructing Triangles"},
    {k:"p", t:"A triangle is fixed by three suitable pieces of data:"},
    {k:"bul", items:["**Three sides** — draw the base, then arcs from its ends with radii equal to the other two sides.","**Two sides and the included angle** — draw the angle, mark the two sides along its arms, join.","**Two angles and a side** — draw the side, then make the two angles at its ends; the arms meet at the third vertex.","**Right angle, hypotenuse and one side** — draw the hypotenuse, bisect it for the centre, draw the semicircle, and mark the given side from one end."]},
    {k:"p", t:"If the data do not fix a triangle (three angles, or two sides with a non-included angle that can give two answers), more than one triangle is possible."},
    {k:"rule"},
    {k:"h3", t:"Constructing Quadrilaterals"},
    {k:"p", t:"Construct a quadrilateral by splitting it into two triangles: draw a suitable diagonal (or one side and the two angles at each end), then build each triangle from the given data. For special quadrilaterals use their properties — a parallelogram is fixed by two adjacent sides and the included angle, a square by one side, a rhombus by one side and one angle."},
    {k:"rule"},
    {k:"h3", t:"Loci in Practical Problems"},
    {k:"p", t:"**Worked example — the locus of a point equidistant from two intersecting roads:** the roads are two intersecting lines, and points equidistant from them lie on their angle bisectors. There are two such bisectors, at right angles to each other. For a point equidistant from three things, find where two separate loci meet; the point is often a triangle's incentre (angle bisectors) or circumcentre (perpendicular bisectors)."}
  ],
  focus:["Parallel and perpendicular lines","Bisecting a line and an angle","Constructing angles of 30°, 45°, 60° and 90°","Constructing triangles from given data","Constructing quadrilaterals","Locus and special loci"],
  terms:[
    {t:"construction", d:"an accurate drawing made with ruler and compasses", x:"Construct a 60° angle."},
    {t:"perpendicular", d:"meeting at 90°", x:"The perpendicular from a point to a line."},
    {t:"perpendicular bisector", d:"a line cutting another into two equal parts at 90°", x:"Every point on it is equidistant from the ends."},
    {t:"angle bisector", d:"a line dividing an angle into two equal angles", x:"It splits 70° into 35° and 35°."},
    {t:"parallel lines", d:"lines that never meet however far they are produced", x:"Both are perpendicular to the same line."},
    {t:"locus", d:"the path traced by a point moving under a condition", x:"The locus of points 3 cm from A is a circle."},
    {t:"equidistant", d:"the same distance from two objects", x:"Points on the bisector are equidistant from the arms."},
    {t:"equilateral triangle", d:"a triangle with three equal sides and 60° angles", x:"It is constructed from a 60° angle."}
  ],
  worked:[
    {q:"Describe how to construct the perpendicular bisector of a line AB.",
     steps:["Open the compasses to more than half of AB.","With centre A, draw arcs above and below the line.","Keeping the same radius, repeat from centre B.","Join the two points where the arcs cross."],
     a:"The line joining the intersections is the perpendicular bisector of AB"},
    {q:"Describe how to construct an angle of 60° at a point A on a line.",
     steps:["With centre A and any radius, draw an arc cutting the line at P.","With the same radius and centre P, draw an arc cutting the first arc at Q.","Join A to Q.","Angle QAP is 60° because triangle APQ is equilateral."],
     a:"Angle QAP = 60°"},
    {q:"Describe the locus of a point that is equidistant from two intersecting roads.",
     steps:["The two roads are two intersecting lines.","Points equidistant from two lines lie on their angle bisectors.","There are two angle bisectors, at right angles to each other."],
     a:"The pair of angle bisectors of the two roads"}
  ],
  drillLabel:"Constructions and loci",
  drills:[
    {id:"locus_circle_sh"},{id:"locus_line_sh"},{id:"construction_angle_sh"},{id:"locus_describe_sh"}
  ],
  word:[
    {q:"A water tank must be equidistant from two houses A and B and also 20 m from a straight road. Describe the locus of possible positions.",
     a:"Equidistant from A and B gives the perpendicular bisector of AB; 20 m from the road gives two lines parallel to it. The positions are where these loci meet."},
    {q:"Construct a triangle with sides 5 cm, 6 cm and 7 cm. Measure its largest angle.",
     a:"Draw the 7 cm base, then arcs of 5 cm and 6 cm from the ends; the largest angle, opposite 7 cm, is about 78°."},
    {q:"Describe the locus of a goat tied to a post by a 4 m rope.",
     a:"A circle of radius 4 m centred on the post."},
    {q:"A ship must stay 5 km from a straight coastline. Describe its locus.",
     a:"Two straight lines, each 5 km from and parallel to the coastline, one on each side."},
    {q:"Construct an angle of 45° using only ruler and compasses. Explain your method.",
     a:"Construct 90° with arcs, then bisect it; each half is 45°."}
  ],
  challenge:[
    {q:"Explain why every point on the perpendicular bisector of AB is equidistant from A and B.",
     a:"Take any point P on the bisector. The two triangles formed with A and B have two equal sides and an included right angle, so they are congruent, giving PA = PB."},
    {q:"Describe the locus of points equidistant from two parallel lines.",
     a:"A single line lying exactly halfway between them and parallel to both, since the distance condition is the same at every point along it."},
    {q:"A point moves so that it is always twice as far from A as from B. Describe the locus.",
     a:"A circle, known as the circle of Apollonius; it is not a straight line because the distances are in a ratio other than 1 : 1."}
  ],
  activities:["Construct triangles from given sides and angles","Find the point equidistant from three corners of a field","Construct angle bisectors and perpendicular bisectors","Investigate loci with string and pegs"],
  materials:["Compasses","Rulers","Protractors","Set squares"],
  assessment:["Construction quiz","Locus assignment","Accuracy test","Observation of construction skills"]
},

/* Period II — Statistics I */
{
  grade:12, period:"II", sem:"One", icon:"\uD83D\uDCCA",
  title:"Statistics I",
  subtitle:"Unit IV: Graphical presentation, grouped data, mean, mode, median, cumulative frequency, quartiles and percentiles",
  outcomes:["Express data in graphical form, construct frequency tables for grouped data, calculate the mean, mode and median, and construct cumulative frequency curves to find quartiles and percentiles"],
  objectives:["Express data in graphical form using bar charts and pie charts","Define grouped data and construct the frequency table","Calculate the mean and mode of grouped data","Calculate the median of grouped data","Construct a cumulative frequency curve","Calculate the quartiles and percentiles"],
  note:"When data are spread over a wide range they are grouped into <b>classes</b>, each with a <b>class interval</b> and a <b>frequency</b>. The middle of a class is its <b>class mark</b>, used to estimate the mean: mean = Σfx ÷ Σf. The <b>modal class</b> is the class with the highest frequency. Adding the frequencies as you go up gives the <b>cumulative frequency</b>, plotted against the <b>upper class boundary</b> to give an S-shaped <b>ogive</b>. From the ogive you read the <b>median</b> (at ½ of the total), the <b>lower quartile</b> (¼) and the <b>upper quartile</b> (¾), and any <b>percentile</b>.",

  study:[
    /* ---- course text: Semester One, Period II — Statistics I (guide p. 37) ---- */
    {k:"h3", t:"Graphical Presentation of Data"},
    {k:"p", t:"Choose the diagram that fits the data: a **bar chart** for discrete categories (bars with gaps), a **pie chart** for parts of a whole (each sector angle = fraction × 360°), and a **histogram** for continuous grouped data (bars with no gaps). A **frequency polygon** joins the midpoints of the histogram bars. Always label axes and give the diagram a title."},
    {k:"p", t:"**Worked example — in a pie chart of 200 pupils, 70 offer Biology:** the sector angle is 70/200 × 360° = **126°**."},
    {k:"rule"},
    {k:"h3", t:"Grouped Data and Class Intervals"},
    {k:"p", t:"When data take many values, arrange them in **classes**: 0–9, 10–19, 20–29, …. The **class interval** is the width of a class — here 10 — and the **class mark** is its midpoint — 4.5, 14.5, 24.5, …. Each value is counted in exactly one class, so decide the boundary rule first (10–19 means 10 up to but not including 20)."},
    {k:"rule"},
    {k:"h3", t:"The Estimated Mean"},
    {k:"p", t:"For grouped data we cannot recover the original values, so we estimate: take each class mark x as the value of every member of the class, then **mean = Σfx ÷ Σf**."},
    {k:"p", t:"**Worked example — marks 0–9 (4), 10–19 (8), 20–29 (14), 30–39 (10), 40–49 (4):** class marks 4.5, 14.5, 24.5, 34.5, 44.5; Σfx = 18 + 116 + 343 + 345 + 178 = 1 000 and Σf = 40, so the estimated mean = 1 000 ÷ 40 = **25 marks**."},
    {k:"rule"},
    {k:"h3", t:"The Mode and the Modal Class"},
    {k:"p", t:"For ungrouped data the **mode** is the value that occurs most often. For grouped data the **modal class** is the class with the greatest frequency — we cannot name a single mode from grouped data, only the class."},
    {k:"rule"},
    {k:"h3", t:"Cumulative Frequency and the Median"},
    {k:"p", t:"The **cumulative frequency** is the running total of the frequencies — the number of values up to the upper boundary of each class. The **median** is the value below which half the data lie; for n values it is the (n + 1)/2th value in order, and there can be no median value for grouped data except by estimation."},
    {k:"rule"},
    {k:"h3", t:"The Ogive"},
    {k:"p", t:"Plot cumulative frequency against the **upper class boundaries** and join the points with a smooth curve — the **ogive** (cumulative frequency curve). The median is read at cumulative frequency n/2, and because the curve rises by exactly the same total, the same curve gives quartiles."},
    {k:"p", t:"**Worked example — 40 pupils grouped as above:** cumulative frequencies 4, 12, 26, 36, 40; half of 40 is 20, which falls in the cumulative 26 column, so the **median class is 20–29**; reading the ogive at cumulative frequency 20 gives about **24 marks**."},
    {k:"rule"},
    {k:"h3", t:"Quartiles, Interquartile Range and Percentiles"},
    {k:"p", t:"**Quartiles** divide the data into four equal parts: Q₁ (lower quartile) at cumulative frequency n/4, the median Q₂ at n/2, and Q₃ (upper quartile) at 3n/4. The **interquartile range** is Q₃ − Q₁, a measure of the spread of the middle half of the data that ignores extreme values. **Percentiles** divide the data into a hundred equal parts, and the kth percentile is the value below which k% of the data lie."}
  ],
  focus:["Bar charts and pie charts","Grouped data and class intervals","Class marks and the estimated mean","The modal class and the mode","Median from an ogive","Cumulative frequency curves","Quartiles, interquartile range and percentiles"],
  terms:[
    {t:"grouped data", d:"data arranged into classes", x:"Marks 0–9, 10–19, 20–29."},
    {t:"class interval", d:"the width of a class", x:"10–19 has a class interval of 10."},
    {t:"class mark", d:"the midpoint of a class", x:"The class mark of 10–19 is 14.5."},
    {t:"frequency", d:"the number of values in a class", x:"The frequency of 20–29 is 12."},
    {t:"cumulative frequency", d:"the running total of the frequencies", x:"The last cumulative frequency equals the total number of data."},
    {t:"ogive", d:"a cumulative frequency curve", x:"The ogive is S-shaped."},
    {t:"median", d:"the value below which half the data lie", x:"Read it at half the total frequency."},
    {t:"quartile", d:"a value dividing the data into four equal parts", x:"Q1 is the lower quartile."},
    {t:"interquartile range", d:"the upper quartile minus the lower quartile", x:"IQR = Q3 − Q1."},
    {t:"percentile", d:"a value below which a given percentage of data lie", x:"The 90th percentile has 90% below it."},
    {t:"modal class", d:"the class with the greatest frequency", x:"The mode lies inside the modal class."},
    {t:"pie chart", d:"a circular chart showing parts of a whole by angle", x:"A quarter of the total is a 90° sector."}
  ],
  worked:[
    {q:"The marks of 40 pupils are grouped as 0–9 (4), 10–19 (8), 20–29 (14), 30–39 (10), 40–49 (4). Estimate the mean.",
     steps:["Class marks: 4.5, 14.5, 24.5, 34.5, 44.5.","Multiply each by its frequency: 18, 116, 343, 345, 178.","Total Σfx = 1 000 and Σf = 40.","Mean = 1 000 ÷ 40 = 25."],
     a:"Estimated mean = 25 marks"},
    {q:"From the table above, find the median class and estimate the median from an ogive.",
     steps:["Cumulative frequencies: 4, 12, 26, 36, 40.","Half of 40 is 20, which falls in the cumulative 26 column.","That is the class 20–29, so the median class is 20–29.","Reading the ogive at cumulative frequency 20 gives about 24."],
     a:"Median class 20–29; median ≈ 24"},
    {q:"In a pie chart of 200 pupils, 70 offer Biology. Find the sector angle for Biology.",
     steps:["Fraction = 70/200.","Multiply by 360°.","= 0.35 × 360 = 126°."],
     a:"126°"}
  ],
  drillLabel:"Grouped data and cumulative frequency",
  drills:[
    {id:"grouped_mean_sh"},{id:"class_mark_sh"},{id:"cumulative_freq_sh"},{id:"quartile_sh"},
    {id:"pie_angle_sh"},{id:"percentile_sh"}
  ],
  word:[
    {q:"The masses of 50 bags of rice are grouped as 40–44 (6), 45–49 (14), 50–54 (20), 55–59 (10). Estimate the mean mass.",
     a:"Class marks 42, 47, 52, 57; Σfx = 252 + 658 + 1 040 + 570 = 2 520; mean = 2 520 ÷ 50 = 50.4 kg."},
    {q:"A pie chart represents a month's spending of L$18 000. Food takes L$6 300. Find the sector angle for food.",
     a:"6 300/18 000 × 360 = 126°."},
    {q:"The lower quartile of a set of marks is 18 and the upper quartile is 42. Find the interquartile range and explain why it is preferred to the range.",
     a:"IQR = 42 − 18 = 24; it ignores extreme values, so one unusually high mark cannot distort it."},
    {q:"In an examination 400 candidates sat and 60 of them scored above the 85th percentile mark. What percentage of the candidates is that?",
     a:"60/400 × 100 = 15%."},
    {q:"A cumulative frequency table for 60 pupils gives cumulative frequencies 8, 21, 39, 52, 60 at the upper boundaries 10, 20, 30, 40 and 50. Estimate the median.",
     a:"Half of 60 is 30, which falls in the class ending at 30; reading the ogive gives a median of about 25 marks."}
  ],
  challenge:[
    {q:"Why is the mean of grouped data only an estimate?",
     a:"Every value in a class is treated as if it were the class mark. The true values differ from the midpoint, so the result is an approximation that improves as the classes become narrower."},
    {q:"Explain why a cumulative frequency curve always rises and never falls.",
     a:"Frequencies can never be negative, so the running total can only stay the same or increase as you move up the classes."},
    {q:"Two classes have the same median mark but different interquartile ranges. What does this tell a teacher?",
     a:"The middle of both classes is the same, but the class with the larger interquartile range has its middle 50% far more spread out, so it needs more differentiated teaching."}
  ],
  activities:["Collect health-centre data and construct bar and pie charts","Build cumulative frequency tables from class marks","Draw ogives and read off the quartiles","Compare the mean, median and mode of the same data"],
  materials:["Graph paper","Calculators","Rulers","Data collection sheets"],
  assessment:["Grouped data quiz","Ogive drawing assignment","Quartile test","Statistics project"]
}
,

/* Period II — Standard Deviation */
{
  grade:12, period:"II", sem:"One", icon:"\uD83D\uDCC9",
  title:"Standard Deviation",
  subtitle:"Unit V: Dispersion, range, interquartile range, variance and standard deviation",
  outcomes:["Measure the spread of data and apply skills to compare and analyse two or more sets of data"],
  objectives:["Define, discuss and identify dispersion","Define, discuss and calculate deviation","Find the range, interquartile range and semi-interquartile range","Define and discuss variance","Define and calculate the standard deviation","Interpret what the standard deviation says about the mean"],
  note:"<b>Dispersion</b> is how spread out data are; two sets can have the same mean and still be very different. The simplest measures are the <b>range</b> (highest − lowest) and the <b>interquartile range</b> (Q3 − Q1), with the <b>semi-interquartile range</b> being half of that. The <b>deviation</b> of a value is its distance from the mean, x − x̄. Squaring the deviations removes the negative signs, and their mean is the <b>variance</b>, σ² = Σ(x − x̄)²/n. The <b>standard deviation</b>, σ = √variance, is back in the original units and measures the typical distance of a value from the mean: a small σ means the data cluster tightly around the mean.",

  study:[
    /* ---- course text: Semester One, Period II — Standard Deviation (guide pp. 38–39) ---- */
    {k:"h3", t:"Dispersion"},
    {k:"p", t:"Averages describe the centre of data, but two sets can have the same mean and behave very differently. **Dispersion** (spread) measures how far the values lie from the centre — small dispersion means the data are consistent or uniform, large dispersion means they are varied. A single very large or very small value is an **outlier**, and it can distort both the mean and the measures of spread."},
    {k:"rule"},
    {k:"h3", t:"Range, Interquartile Range and Semi-Interquartile Range"},
    {k:"bul", items:["**Range** = highest value − lowest value. Simple, but it uses only two values and is badly affected by outliers.","**Interquartile range** IQR = Q₃ − Q₁. It ignores the lowest and highest quarters, so it is not affected by outliers.","**Semi-interquartile range** = IQR ÷ 2, a measure of the average distance of the middle half from the median."]},
    {k:"p", t:"**Worked example — Q₁ = 22 and Q₃ = 38:** IQR = 38 − 22 = **16** and the semi-interquartile range = **8**."},
    {k:"rule"},
    {k:"h3", t:"Deviation from the Mean"},
    {k:"p", t:"The **deviation** of a value is its distance from the mean: d = x − x̄. Deviations above the mean are positive and below are negative, and their sum is always 0. To avoid the signs cancelling, we square the deviations, add them, and average — that is the **variance**."},
    {k:"rule"},
    {k:"h3", t:"Variance and Standard Deviation"},
    {k:"p", t:"For data x₁, x₂, …, xₙ with mean x̄:"},
    {k:"num", items:["Deviation of each value: d = x − x̄.","Square each deviation: d².","Variance σ² = Σd² ÷ n (or Σd² ÷ (n − 1) for a sample).","Standard deviation σ = √variance."]},
    {k:"p", t:"**Worked example — 4, 8, 6, 5, 7:** mean = 30/5 = 6; deviations −2, 2, 0, −1, 1; squared deviations 4, 4, 0, 1, 1 with sum 10; variance = 10/5 = **2**; standard deviation = √2 ≈ **1.41**."},
    {k:"p", t:"The **standard deviation** is measured in the same units as the data, so it can be compared directly with the values; the variance is in squared units and is used for calculation."},
    {k:"rule"},
    {k:"h3", t:"Comparing Two Data Sets"},
    {k:"p", t:"Compare the means to say which set is higher on average, and the standard deviations to say which is more **consistent**. If one set has both the larger mean and a much smaller standard deviation, it is both higher and more reliable."},
    {k:"p", t:"**Worked example — two archers both average 8, with standard deviations 0.5 and 2.4:** the first is more consistent, because a smaller standard deviation means the scores stay nearer the mean; the second spread over a range about five times as wide."},
    {k:"rule"},
    {k:"h3", t:"What the Standard Deviation Says about the Mean"},
    {k:"p", t:"For most data: about two-thirds of the values lie within one standard deviation of the mean, and nearly all lie within two standard deviations. The standard deviation is thus a guarantee around the mean — a small value says the mean is a good summary of the data, a large value says the data are so spread out that the mean alone can mislead."}
  ],
  focus:["Dispersion and why it matters","Range, interquartile range and semi-interquartile range","Deviation from the mean","Variance","Standard deviation","Comparing two data sets","What the standard deviation says about the mean"],
  terms:[
    {t:"dispersion", d:"how far the data are spread out", x:"The spread of marks in a class."},
    {t:"range", d:"the highest value minus the lowest", x:"The range of 4, 9, 15 is 11."},
    {t:"interquartile range", d:"the upper quartile minus the lower quartile", x:"IQR = Q3 − Q1."},
    {t:"semi-interquartile range", d:"half of the interquartile range", x:"SIQR = ½(Q3 − Q1)."},
    {t:"deviation", d:"the distance of a value from the mean", x:"If x̄ = 10 and x = 13, the deviation is 3."},
    {t:"variance", d:"the mean of the squared deviations", x:"σ² = Σ(x − x̄)²/n."},
    {t:"standard deviation", d:"the square root of the variance", x:"σ = √variance."},
    {t:"consistency", d:"how close the values stay to the mean", x:"A small standard deviation means consistent results."},
    {t:"outlier", d:"a value far from the rest of the data", x:"One very high score is an outlier."},
    {t:"mean deviation", d:"the mean of the deviations taken as positive", x:"It ignores the sign of each deviation."}
  ],
  worked:[
    {q:"Find the mean, variance and standard deviation of 4, 8, 6, 5, 7.",
     steps:["Mean x̄ = (4 + 8 + 6 + 5 + 7)/5 = 30/5 = 6.","Deviations: −2, 2, 0, −1, 1.","Squared deviations: 4, 4, 0, 1, 1; their sum is 10.","Variance σ² = 10/5 = 2.","Standard deviation σ = √2 ≈ 1.41."],
     a:"Mean 6, variance 2, standard deviation ≈ 1.41"},
    {q:"Two archers score means of 8 with standard deviations 0.5 and 2.4. Which is more consistent, and why?",
     steps:["Both have the same mean, so compare the spreads.","A smaller standard deviation means the scores stay nearer the mean.","0.5 < 2.4."],
     a:"The first archer is more consistent; his scores rarely leave 8 by more than about 1 point."},
    {q:"The lower quartile of a data set is 22 and the upper quartile is 38. Find the interquartile and semi-interquartile ranges.",
     steps:["IQR = Q3 − Q1 = 38 − 22.","IQR = 16.","SIQR = 16/2 = 8."],
     a:"IQR = 16 and SIQR = 8"}
  ],
  drillLabel:"Standard deviation and dispersion",
  drills:[
    {id:"range_stat_sh"},{id:"variance_sh"},{id:"std_dev_sh"},{id:"deviation_sh"},
    {id:"compare_spread_sh"},{id:"iqr_sh"}
  ],
  word:[
    {q:"The marks of five pupils are 12, 15, 18, 20 and 25. Find the mean and the standard deviation.",
     a:"Mean = 90/5 = 18; squared deviations 36, 9, 0, 4, 49 sum to 98, variance = 19.6, σ ≈ 4.43."},
    {q:"Two classes have means of 62% with standard deviations 5 and 14. Which class needs more individual attention, and why?",
     a:"The class with σ = 14, because its pupils are spread far more widely around the same average."},
    {q:"The masses of 8 bags are 49, 50, 51, 50, 48, 52, 50 and 50 kg. Find the mean and the range.",
     a:"Mean = 400/8 = 50 kg; range = 52 − 48 = 4 kg."},
    {q:"A machine fills bottles with a mean of 500 ml and a standard deviation of 2 ml. Between what limits would you expect about two-thirds of the bottles to lie?",
     a:"Within one standard deviation of the mean, that is between 498 ml and 502 ml."},
    {q:"The quartiles of a set of times are Q1 = 45 s and Q3 = 61 s. Find the semi-interquartile range and explain what it describes.",
     a:"SIQR = (61 − 45)/2 = 8 s; it describes the typical spread of the middle half of the times."}
  ],
  challenge:[
    {q:"Why do we square the deviations when finding the variance instead of just adding them?",
     a:"The positive and negative deviations always cancel to exactly zero, so their sum carries no information. Squaring makes every deviation positive and gives more weight to values far from the mean."},
    {q:"Explain why the range is easily misleading while the interquartile range is not.",
     a:"The range uses only the two extreme values, so one unusual score changes it completely. The interquartile range uses the middle half of the data and ignores the extremes."},
    {q:"If every value in a data set is increased by 5, what happens to the mean and to the standard deviation? Explain.",
     a:"The mean increases by 5, but the standard deviation is unchanged, because every value moves the same distance from the mean, so the deviations stay exactly as they were."}
  ],
  activities:["Calculate the standard deviation of class marks","Compare the consistency of two athletes' results","Investigate how an outlier affects the range and the IQR","Use spreadsheets to check hand calculations"],
  materials:["Calculators","Data sheets","Graph paper","Whiteboard"],
  assessment:["Dispersion quiz","Standard deviation assignment","Comparison test","Observation and participation"]
},

/* Period II — Interpretation of Linear and Quadratic Graphs */
{
  grade:12, period:"II", sem:"One", icon:"\uD83D\uDCC8",
  title:"Interpretation of Linear and Quadratic Graphs",
  subtitle:"Unit VI: Solving simultaneous equations graphically, and reading increasing, decreasing, positive and negative ranges",
  outcomes:["Solve simultaneous equations, one linear and one quadratic, using graphs; use a quadratic graph to solve related equations; and find the ranges of x for which y is increasing, decreasing, positive or negative"],
  objectives:["Solve simultaneous equations, one linear and one quadratic, using graphs","Use a quadratic graph to solve related equations and problems","Find the range of values of x for which y is increasing or decreasing","Find the range of values of x for which y is positive or negative"],
  note:"When a straight line and a parabola are drawn on the same axes, the coordinates of the points where they <b>meet</b> are the solutions of the two equations together; there may be two points, one (when the line is a tangent) or none (when they do not meet). A quadratic graph can also solve other equations: to solve x² + 2x − 3 = 5, draw y = x² + 2x − 3 and the horizontal line y = 5, and read the x values where they cross. From the shape of the curve you can state where <b>y is positive or negative</b> (above or below the x-axis) and where <b>y is increasing or decreasing</b> (rising or falling as x grows), the turning point being where the change happens.",

  study:[
    /* ---- course text: Semester One, Period II — Interpretation of Linear and Quadratic Graphs (guide pp. 39–40) ---- */
    {k:"h3", t:"Graphing a Line and a Parabola Together"},
    {k:"p", t:"Draw both graphs on the same axes from tables of values: a straight line y = mx + c and a parabola y = ax² + bx + c. Their **points of intersection** give the **simultaneous solutions** of the two equations, because a point lies on a graph exactly when its coordinates satisfy its equation. The number of intersections shows the number of solutions — two, one (the line is a **tangent**) or none."},
    {k:"rule"},
    {k:"h3", t:"Solutions as Points of Intersection"},
    {k:"p", t:"**Worked example — use y = x² − 2x − 3 to solve x² − 2x − 3 = 0 and x² − 2x − 3 = 5:**"},
    {k:"num", items:["For the first equation, read where the curve crosses the x-axis: x = −1 and x = 3.","For the second, draw the horizontal line y = 5.","The line meets the curve at x = −2 and x = 4.","Those are the solutions of x² − 2x − 3 = 5."]},
    {k:"p", t:"In general, the solutions of f(x) = k are the x-coordinates where the graphs of y = f(x) and y = k meet; and the solutions of f(x) = g(x) are where y = f(x) and y = g(x) cross."},
    {k:"rule"},
    {k:"h3", t:"Ranges where y is Positive or Negative"},
    {k:"p", t:"A graph lies **above the x-axis** where y is positive and **below it** where y is negative. For a parabola crossing at x = −1 and x = 3 with a positive leading coefficient, the curve is below the axis between the roots, so **y < 0 when −1 < x < 3** and y > 0 when x < −1 or x > 3."},
    {k:"rule"},
    {k:"h3", t:"Ranges where y is Increasing or Decreasing"},
    {k:"p", t:"Moving left to right, a graph is **increasing** where it rises and **decreasing** where it falls. The turning point separates the two. For y = x² − 2x − 3, completing the square gives y = (x − 1)² − 4, so the turning point is (1, −4); the curve falls to the left and rises to the right: **decreasing for x < 1, increasing for x > 1**."},
    {k:"rule"},
    {k:"h3", t:"The Turning Point and the Axis of Symmetry"},
    {k:"p", t:"The **axis of symmetry** is the vertical line through the turning point, x = h, and the curve is a mirror image of itself about it. The turning point gives the **maximum or minimum value** of the function. Reading a quadratic graph is a skill for solving inequalities, optimization and checking algebraic solutions."}
  ],
  focus:["Graphing a line and a parabola together","Solutions as points of intersection","Using a quadratic graph to solve other equations","Ranges where y is positive or negative","Ranges where y is increasing or decreasing","The turning point and the axis of symmetry"],
  terms:[
    {t:"point of intersection", d:"where two graphs meet", x:"The intersection gives the simultaneous solution."},
    {t:"simultaneous solution", d:"a pair of values satisfying both equations", x:"(1, 2) and (−3, 10)."},
    {t:"tangent", d:"a line touching a curve at exactly one point", x:"One point of contact means one repeated solution."},
    {t:"root", d:"an x value where the graph crosses the x-axis", x:"The roots are x = −3 and x = 1."},
    {t:"positive range", d:"the values of x for which the graph lies above the x-axis", x:"y > 0 when x < −3 or x > 1."},
    {t:"increasing", d:"y getting larger as x gets larger", x:"The curve rises to the right of the turning point."},
    {t:"decreasing", d:"y getting smaller as x gets larger", x:"The curve falls to the left of the turning point."},
    {t:"turning point", d:"the highest or lowest point of a curve", x:"At the turning point y stops decreasing and starts increasing."}
  ],
  worked:[
    {q:"Use the graph of y = x² − 2x − 3 to solve x² − 2x − 3 = 0 and x² − 2x − 3 = 5.",
     steps:["For the first equation read where the curve crosses the x-axis: x = −1 and x = 3.","For the second, draw the horizontal line y = 5.","The line meets the curve at x = −2 and x = 4.","Those are the solutions of x² − 2x − 3 = 5."],
     a:"x = −1, 3 for the first equation; x = −2, 4 for the second"},
    {q:"From the graph of y = x² − 2x − 3, state the values of x for which y is negative.",
     steps:["y is negative where the curve lies below the x-axis.","The curve crosses the axis at x = −1 and x = 3.","Between those two roots the curve dips below the axis."],
     a:"y < 0 when −1 < x < 3"},
    {q:"For y = x² − 2x − 3, state where y is decreasing and where it is increasing.",
     steps:["Complete the square: y = (x − 1)² − 4, so the turning point is (1, −4).","A parabola opening upwards falls to the left of the turning point and rises to the right.","So y decreases for x < 1 and increases for x > 1."],
     a:"Decreasing when x < 1; increasing when x > 1"}
  ],
  drillLabel:"Interpreting linear and quadratic graphs",
  drills:[
    {id:"graph_roots_sh"},{id:"graph_line_quad_sh"},{id:"graph_sign_sh"},{id:"graph_increase_sh"},
    {id:"graph_vertex_sh"}
  ],
  word:[
    {q:"The profit from selling n items is P = −n² + 40n − 300. For what range of n is the business making a profit?",
     a:"P > 0 when −n² + 40n − 300 > 0, that is n² − 40n + 300 < 0, so 10 < n < 30 items."},
    {q:"A ball's height is h = 20t − 5t² metres. From the graph, find when the ball is above 15 m.",
     a:"20t − 5t² = 15 gives t² − 4t + 3 = 0, so t = 1 and t = 3; the ball is above 15 m for 1 < t < 3."},
    {q:"The line y = 2x + 1 meets y = x² at two points. Find their coordinates.",
     a:"x² = 2x + 1, so x² − 2x − 1 = 0 and x = 1 ± √2; the points are (1 + √2, 3 + 2√2) and (1 − √2, 3 − 2√2)."},
    {q:"For y = x² − 6x + 8, state the values of x for which y is positive.",
     a:"The roots are 2 and 4, so y > 0 when x < 2 or x > 4."},
    {q:"From y = 2x² + 8x + 5, find where y is increasing.",
     a:"The turning point is at x = −b/2a = −2, and the parabola opens upwards, so y increases when x > −2."}
  ],
  challenge:[
    {q:"Explain what it means when a line and a parabola have exactly one point of intersection.",
     a:"The line is a tangent to the parabola, so the quadratic equation formed has a repeated root; the discriminant is exactly zero."},
    {q:"Why can a horizontal line cut a parabola in two points while a vertical line can cut it in only one?",
     a:"A parabola is a function, so each x value gives a single y value; a vertical line therefore meets it once. A horizontal line can be at a height reached on both sides of the turning point."},
    {q:"The graph of y = ax² + bx + c lies entirely above the x-axis. What can you conclude about a and the discriminant?",
     a:"a must be positive so the parabola opens upwards, and b² − 4ac must be negative so it never reaches the axis."}
  ],
  activities:["Plot lines and parabolas on the same axes","Solve equations graphically and check algebraically","Trace where a curve rises, falls and crosses the axis","Use graphing software to check hand-drawn graphs"],
  materials:["Graph paper","Rulers","Calculators","Graphing software"],
  assessment:["Graphing quiz","Graphical solution assignment","Interpretation test","Observation and participation"]
},

/* Period II — Mensuration 2 */
{
  grade:12, period:"II", sem:"One", icon:"\uD83E\uDDCA",
  title:"Mensuration 2",
  subtitle:"Unit VII: Surface areas and volumes of prisms, cones, pyramids and spheres, and distance on the earth",
  outcomes:["Calculate the surface areas and volumes of prisms, cones, pyramids and spheres, and calculate distance along a given latitude and longitude"],
  objectives:["Calculate the surface area of prisms","Calculate the volume of prisms","Calculate the total surface area of a cone","Calculate the volume of a cone","Calculate the total surface area of pyramids","Calculate the volume of pyramids","Calculate the surface area of a sphere","Calculate the volume of a sphere","Calculate the distance along a given latitude and longitude"],
  note:"For any <b>prism</b> or cylinder the volume is the area of the cross-section times the length, V = A × h. A <b>cone</b> or <b>pyramid</b> is exactly one third of the prism on the same base, so V = ⅓ × base area × vertical height. The <b>slant height</b> l of a cone is found from l² = r² + h² and gives the curved surface area πrl. A <b>sphere</b> has surface area 4πr² and volume 4/3 πr³. On the earth, distance along a <b>great circle</b> (a meridian or the equator) is (θ/360) × 2πR, and along a <b>parallel of latitude</b> φ it is (θ/360) × 2πR cos φ, because the circle of latitude is smaller than the equator.",

  study:[
    /* ---- course text: Semester One, Period II — Mensuration 2 (guide pp. 41–42) ---- */
    {k:"h3", t:"Prisms and Cylinders"},
    {k:"p", t:"A **prism** is a solid with the same cross-section all along its length. Its **volume = area of cross-section × length** and its **total surface area = 2 × base area + perimeter of base × height** (the latter is the curved or lateral area). A **cylinder** is a prism with a circular cross-section: **V = πr²h**, curved surface **2πrh**, and total surface area **2πr² + 2πrh**."},
    {k:"p", t:"**Worked example — cylinder radius 7 cm, height 10 cm (π = 22/7):** V = 22/7 × 49 × 10 = **1 540 cm³**; curved surface = 2 × 22/7 × 7 × 10 = 440 cm²; two ends = 2 × 22/7 × 49 = 308 cm²; total surface area = **748 cm²**."},
    {k:"rule"},
    {k:"h3", t:"Cones"},
    {k:"p", t:"A cone has a circular base and a curved surface tapering to a point. Its **slant height** l, vertical height h and radius r satisfy **l² = r² + h²**. Volume **V = ⅓πr²h**, curved surface area **πrl**, and total surface area **πr² + πrl**."},
    {k:"p", t:"**Worked example — cone radius 6 cm, vertical height 8 cm:** l = √(36 + 64) = 10 cm; V = ⅓ × π × 36 × 8 = 96π ≈ **301.6 cm³**; curved surface = π × 6 × 10 = 60π ≈ **188.5 cm²**."},
    {k:"rule"},
    {k:"h3", t:"Pyramids"},
    {k:"p", t:"A **pyramid** tapers from a polygonal base to an apex, and its volume is one third of the prism on the same base: **V = ⅓ × area of base × vertical height**. The total surface area is the base area plus the areas of the triangular faces; each face is a triangle with the **slant height** of that face as its height."},
    {k:"p", t:"**Worked example — square pyramid, base 6 cm, vertical height 8 cm:** V = ⅓ × 36 × 8 = **96 cm³**; slant height of a face = √(3² + 8²) = √73 ≈ **8.54 cm**."},
    {k:"rule"},
    {k:"h3", t:"Spheres"},
    {k:"p", t:"A **sphere** is a solid in which every point of the surface is the same distance from the centre. **Surface area = 4πr²** and **volume = 4/3 πr³**. A **great circle** is a circle on a sphere whose centre is the centre of the sphere — the equator is a great circle — and its radius is the radius of the sphere."},
    {k:"rule"},
    {k:"h3", t:"Composite Solids"},
    {k:"p", t:"Split a composite solid into simple solids — a cylinder and a cone, a cuboid with a hemisphere on top — then add or subtract their volumes and surface areas. When a solid is joined to another, the touching faces are not part of the surface area, so add the surface areas only of the faces that are exposed."},
    {k:"rule"},
    {k:"h3", t:"Distance Along a Latitude"},
    {k:"p", t:"A **latitude** is the angle north or south of the equator. At any latitude, all points on the earth have their own circle of latitude, whose radius is R cos(latitude), where R is the earth's radius. The distance along a latitude between two longitudes θ apart is **θ/360 × 2πR cos(latitude)** — the fraction of the latitude's circumference."},
    {k:"rule"},
    {k:"h3", t:"Distance Along a Longitude"},
    {k:"p", t:"A **longitude** is the angle east or west of the Greenwich meridian, and all meridians are halves of great circles of the same radius R. The distance along a longitude between two latitudes differing by θ is **θ/360 × 2πR**. A **nautical mile** is one minute of arc along a great circle, so 1° of latitude is 60 nautical miles. Cross-check: moving along a great circle, equal angles give equal distances."}
  ],
  focus:["Surface area and volume of prisms and cylinders","Surface area and volume of cones","Surface area and volume of pyramids","Surface area and volume of spheres","Composite solids","Distance along a latitude","Distance along a longitude"],
  terms:[
    {t:"prism", d:"a solid with the same cross-section all along its length", x:"A cylinder and a cuboid are prisms."},
    {t:"cross-section", d:"the shape you see when a solid is cut across", x:"The cross-section of a cylinder is a circle."},
    {t:"slant height", d:"the sloping height of a cone or pyramid", x:"l² = r² + h² for a cone."},
    {t:"total surface area", d:"the area of every face added together", x:"Curved surface plus the base for a cone."},
    {t:"volume", d:"the amount of space inside a solid", x:"Measured in cubic centimetres."},
    {t:"sphere", d:"a solid in which every point of the surface is the same distance from the centre", x:"A ball is a sphere."},
    {t:"great circle", d:"a circle on a sphere whose centre is the centre of the sphere", x:"The equator and every meridian is a great circle."},
    {t:"latitude", d:"the angle north or south of the equator", x:"Monrovia lies at about 6°N."},
    {t:"longitude", d:"the angle east or west of the Greenwich meridian", x:"Monrovia lies at about 11°W."},
    {t:"nautical mile", d:"a distance of one minute of arc along a great circle", x:"1 nautical mile ≈ 1.852 km."}
  ],
  worked:[
    {q:"Find the volume and total surface area of a cylinder of radius 7 cm and height 10 cm. Take π = 22/7.",
     steps:["V = πr²h = 22/7 × 49 × 10.","V = 1 540 cm³.","Curved surface = 2πrh = 2 × 22/7 × 7 × 10 = 440 cm².","Two ends = 2 × 22/7 × 49 = 308 cm²."],
     a:"Volume 1 540 cm³ and total surface area 748 cm²"},
    {q:"A cone has radius 6 cm and vertical height 8 cm. Find its slant height, curved surface area and volume. Take π = 3.14.",
     steps:["l = √(6² + 8²) = √100 = 10 cm.","Curved surface = πrl = 3.14 × 6 × 10 = 188.4 cm².","V = ⅓πr²h = ⅓ × 3.14 × 36 × 8.","V = 301.44 cm³."],
     a:"Slant height 10 cm, curved surface 188.4 cm², volume 301.44 cm³"},
    {q:"Two towns lie on the equator, 30° of longitude apart. Find the distance between them. Take R = 6 400 km and π = 22/7.",
     steps:["Distance = (θ/360) × 2πR.","= (30/360) × 2 × 22/7 × 6 400.","= (1/12) × 40 228.6.","≈ 3 352 km."],
     a:"About 3 352 km"}
  ],
  drillLabel:"Mensuration of solids",
  drills:[
    {id:"volume_prism_sh"},{id:"surface_prism_sh"},{id:"volume_cone_sh"},{id:"surface_cone_sh"},
    {id:"volume_pyramid_sh"},{id:"volume_sphere_sh"},{id:"surface_sphere_sh"},{id:"latitude_distance_sh"}
  ],
  word:[
    {q:"A cylindrical water tank has radius 1.4 m and height 3 m. Find its capacity in litres. Take π = 22/7.",
     a:"V = 22/7 × 1.96 × 3 = 18.48 m³ = 18 480 litres."},
    {q:"A cone of radius 3 cm and height 4 cm is filled with sand and emptied into a cylinder of the same radius. Find the depth of sand.",
     a:"Cone volume = ⅓π(9)(4) = 12π; in the cylinder 12π = π(9)h, so h = 4/3 cm."},
    {q:"Find the volume of a sphere of radius 21 cm. Take π = 22/7.",
     a:"V = 4/3 × 22/7 × 9 261 = 27 720 cm³."},
    {q:"A square-based pyramid has a base of 6 cm and a vertical height of 10 cm. Find its volume.",
     a:"V = ⅓ × 36 × 10 = 120 cm³."},
    {q:"Two towns on latitude 60°N differ in longitude by 20°. Find the distance between them along the parallel of latitude. Take R = 6 400 km, π = 22/7.",
     a:"d = (20/360) × 2 × 22/7 × 6 400 × cos 60° = (1/18) × 40 228.6 × 0.5 ≈ 1 117 km."}
  ],
  challenge:[
    {q:"A cone and a cylinder have the same radius and the same height. Explain why the cylinder holds exactly three times as much.",
     a:"The volume formulas differ only by the factor ⅓: cone = ⅓πr²h and cylinder = πr²h, so the cylinder is three times the cone when r and h are the same."},
    {q:"Why is the distance between two points along a parallel of latitude shorter in kilometres per degree than along the equator?",
     a:"The circle of latitude has radius R cos φ, which is smaller than the earth's radius R, so each degree of longitude covers less ground as you move away from the equator."},
    {q:"A sphere and a cylinder have the same radius, and the cylinder's height equals the sphere's diameter. Compare their volumes.",
     a:"Cylinder = πr²(2r) = 2πr³ and sphere = 4/3πr³, so the sphere is two-thirds of the cylinder."}
  ],
  activities:["Build nets of prisms, cones and pyramids","Measure real containers and compute their volumes","Investigate latitude and longitude with a globe","Compare the volumes of a cone and a cylinder experimentally"],
  materials:["Card and scissors","Globes and maps","Measuring cylinders","Calculators"],
  assessment:["Volume quiz","Surface area assignment","Latitude and longitude test","Practical observation"]
},

/* Period III — Logical Reasoning */
{
  grade:12, period:"III", sem:"One", icon:"\uD83E\uDDE0",
  title:"Logical Reasoning",
  subtitle:"Unit VIII: Statements, negation, implication, equivalent implications, and validity with Venn diagrams",
  outcomes:["Identify true and false statements, form the negation of simple statements, draw conclusions using implication, deduce equivalent implications, and use Venn diagrams to determine the validity of an implication or conclusion"],
  objectives:["Identify true or false statements","Distinguish open and closed statements","Form the negation of simple statements","Draw conclusions using the implication sign","Deduce an equivalent implication from a given implication","Use Venn diagrams to determine the validity of implications and conclusions"],
  note:"A <b>statement</b> is a sentence that is either true or false, but not both. An <b>open statement</b> contains a variable and its truth depends on the value substituted. The <b>negation</b> of a statement says the opposite and is written ~p. An <b>implication</b> p ⇒ q reads 'if p then q'; it is false only when p is true and q is false. Its <b>converse</b> is q ⇒ p, its <b>inverse</b> is ~p ⇒ ~q and its <b>contrapositive</b> is ~q ⇒ ~p — and an implication is always <b>equivalent to its contrapositive</b>, though not to its converse. A <b>valid argument</b> is one whose conclusion must follow from its premises, which a Venn diagram can show clearly.",

  study:[
    /* ---- course text: Semester One, Period III — Logical Reasoning (guide pp. 43–44) ---- */
    {k:"h3", t:"Statements and their Truth Values"},
    {k:"p", t:"In mathematics a **statement** is a sentence that is either true or false, but not both: *Liberia is in Africa* is a true statement, *3 + 4 = 8* is a false statement. A statement's **truth value** is T or F. A **closed statement** has no variable, so its truth is fixed; an **open statement** contains a variable and its truth depends on the value substituted, so x + 2 = 5 is true when x = 3 and false when x = 4."},
    {k:"rule"},
    {k:"h3", t:"Negation"},
    {k:"p", t:"The **negation** of a statement says the opposite and is written **~p** (or ¬p). If p is true, ~p is false, and if p is false, ~p is true. A statement and its negation cannot both be true, and the negation of a negation is the original statement: ~(~p) = p."},
    {k:"rule"},
    {k:"h3", t:"Conjunction, Disjunction and Implication"},
    {k:"bul", items:["**Conjunction** p ∧ q ('p and q') is true only when both parts are true.","**Disjunction** p ∨ q ('p or q') is true when at least one part is true.","**Implication** p ⇒ q ('if p then q') is false only when p is true and q is false; it is true in every other row of the truth table."]},
    {k:"p", t:"p is the **premise** (antecedent) and q is the **conclusion** (consequent). The implication *if it rains then the ground is wet* does not say the converse is true — the ground may be wet because it was watered."},
    {k:"rule"},
    {k:"h3", t:"Converse, Inverse and Contrapositive"},
    {k:"table", head:["Name","Form","Relationship to p ⇒ q"], rows:[["Original","p ⇒ q","The given implication"],["Converse","q ⇒ p","Not always true (if x² = 9 then x = 3 is false — x may be −3)"],["Inverse","~p ⇒ ~q","Not always true"],["Contrapositive","~q ⇒ ~p","Always has the same truth value as the original"]]},
    {k:"p", t:"The **contrapositive is equivalent to the original implication**, so proving ~q ⇒ ~p proves p ⇒ q. The converse and inverse are equivalent to each other, but not to the original."},
    {k:"rule"},
    {k:"h3", t:"Equivalent Implications"},
    {k:"p", t:"Two statements are **equivalent** when they have the same truth value in every case, and then p ⟺ q ('p if and only if q'). An implication and its contrapositive are equivalent; so are the converse and the inverse. A **bi-implication** p ⟺ q is true when p and q are both true or both false."},
    {k:"rule"},
    {k:"h3", t:"Validity of Arguments"},
    {k:"p", t:"An argument is **valid** when its conclusion must follow from its premises — if the premises are true, the conclusion cannot be false. The two classic valid forms are *modus ponens* (p ⇒ q and p, therefore q) and *modus tollens* (p ⇒ q and ~q, therefore ~p). A common invalid form is **affirming the consequent** (p ⇒ q and q, therefore p) — for example, *all teachers are graduates; he is a graduate; therefore he is a teacher.*"},
    {k:"rule"},
    {k:"h3", t:"Venn Diagrams for Logic"},
    {k:"p", t:"Sets make logic visible. The statement *all T are G* means the T circle is entirely inside the G circle — T ⇒ G — and the part of G outside T shows that the converse does not follow. The statement *no T are G* means disjoint circles. The **three-set Venn diagram** with eight regions is the truth table in picture form: the region inside set A and outside sets B and C corresponds to the row A = T, B = F, C = F."},
    {k:"p", t:"**Worked example — show that 'All teachers are graduates' is drawn as one circle inside another:** being a teacher guarantees being a graduate, teachers ⇒ graduates; the reverse is not guaranteed because the graduates' circle is larger, so the converse does not follow."}
  ],
  focus:["Statements and their truth values","Open and closed statements","Negation","Conjunction, disjunction and implication","Converse, inverse and contrapositive","Equivalent implications","Validity of arguments","Venn diagrams for logic"],
  terms:[
    {t:"statement", d:"a sentence that is either true or false", x:"Monrovia is in Liberia is a true statement."},
    {t:"open statement", d:"a statement containing a variable", x:"x + 3 = 7 is an open statement."},
    {t:"negation", d:"the opposite of a statement, written ~p", x:"The negation of 'it is raining' is 'it is not raining'."},
    {t:"conjunction", d:"two statements joined by 'and', written p ∧ q", x:"It is true only when both parts are true."},
    {t:"disjunction", d:"two statements joined by 'or', written p ∨ q", x:"It is true when at least one part is true."},
    {t:"implication", d:"'if p then q', written p ⇒ q", x:"If it rains then the ground is wet."},
    {t:"converse", d:"the implication with the parts swapped, q ⇒ p", x:"The converse of p ⇒ q."},
    {t:"contrapositive", d:"~q ⇒ ~p, always equivalent to p ⇒ q", x:"If the ground is not wet then it did not rain."},
    {t:"tautology", d:"a statement true for every possible truth value", x:"p ∨ ~p is always true."},
    {t:"valid argument", d:"an argument whose conclusion must follow from the premises", x:"All men die; Kofi is a man; so Kofi dies."}
  ],
  worked:[
    {q:"Write the negation, converse and contrapositive of 'If a shape is a square then it is a rectangle.'",
     steps:["Negation of the hypothesis: 'A shape is not a square.'","Converse swaps the parts: 'If a shape is a rectangle then it is a square.'","Contrapositive negates and swaps: 'If a shape is not a rectangle then it is not a square.'"],
     a:"Negation: not a square. Converse: rectangle ⇒ square (false). Contrapositive: not a rectangle ⇒ not a square (true)."},
    {q:"Test the validity: All teachers are graduates. Some graduates are doctors. Therefore some teachers are doctors.",
     steps:["Draw a circle for teachers inside a circle for graduates.","Doctors overlap graduates but need not touch the teachers' circle.","The conclusion is possible but not forced."],
     a:"Invalid — the conclusion does not necessarily follow."},
    {q:"Given p: 'x = 3' and q: 'x² = 9', decide whether p ⇒ q and whether q ⇒ p.",
     steps:["If x = 3 then x² = 9, so p ⇒ q is true.","If x² = 9 then x = 3 or x = −3, so q does not force p.","Hence q ⇒ p is false."],
     a:"p ⇒ q is true but q ⇒ p is false, so the implication is one-way only"}
  ],
  drillLabel:"Logical reasoning",
  drills:[
    {id:"truth_table_sh"},{id:"logic_truth_sh"},{id:"statement_tf_sh"},{id:"negation_sh"},
    {id:"implication_sh"},{id:"contrapositive_sh"},{id:"validity_sh"},{id:"logic_equiv_sh"}
  ],
  word:[
    {q:"Write the contrapositive of 'If a number is even then it is divisible by 2' and say whether it is true.",
     a:"'If a number is not divisible by 2 then it is not even.' It is true, because it is equivalent to the original."},
    {q:"Decide whether this argument is valid: All birds lay eggs. A penguin lays eggs. Therefore a penguin is a bird.",
     a:"Invalid — laying eggs does not put something inside the bird circle; other animals lay eggs too."},
    {q:"Write the negation of 'Every pupil in this class has a textbook.'",
     a:"'At least one pupil in this class does not have a textbook.'"},
    {q:"Given that 'If it is Monday then the market opens' is true, is 'The market opened, so it is Monday' correct?",
     a:"No, that is the converse; the market may open on other days as well."},
    {q:"Construct the truth table for p ⇒ q and identify the one row in which it is false.",
     a:"It is false only in the row where p is true and q is false."}
  ],
  challenge:[
    {q:"Prove that p ⇒ q is equivalent to its contrapositive ~q ⇒ ~p by comparing truth tables.",
     a:"In all four combinations of truth values the two statements take the same value; the only false row for p ⇒ q is p true and q false, which is also the only false row for ~q ⇒ ~p."},
    {q:"Explain the error in the argument: 'If it rains, the road is wet. The road is wet, therefore it rained.'",
     a:"This affirms the consequent. The road could be wet for another reason, such as a burst pipe, so the conclusion does not follow; the valid form would use the contrapositive."},
    {q:"Is the statement 'This statement is false' a statement in the logical sense? Explain.",
     a:"No. It cannot be assigned a truth value: if it is true then it is false, and if it is false then it is true. This is the liar paradox, and such sentences are excluded from formal logic."}
  ],
  activities:["Classify statements as true, false or open","Write negations of everyday statements","Test arguments with Venn diagrams","Build truth tables for compound statements"],
  materials:["Venn diagram charts","Truth table grids","Whiteboard","Statement cards"],
  assessment:["Logic quiz","Negation and implication assignment","Validity test","Observation and participation"]
},

/* Period III — Percentages */
{
  grade:12, period:"III", sem:"One", icon:"\uD83C\uDFE6",
  title:"Percentages",
  subtitle:"Unit IX: Banking, interest on savings and loans, hire purchase, taxation, VAT and household bills",
  outcomes:["Calculate share, interest and profit in a given ratio; calculate interest on savings and loans; use hire purchase; calculate taxes on goods and services and the value added tax; and calculate electricity, water and telephone bills"],
  objectives:["Discuss banking, partnerships and the way they function","Calculate share, interest or profit in a given ratio","Calculate interest on savings and loans","Calculate using hire purchase","Calculate taxes paid on goods and services","Calculate and explain the value added tax","Calculate electricity, water and telephone bills"],
  note:"A <b>percentage</b> is a fraction with denominator 100, and it is the common language of money. <b>Profit</b> shared in a ratio is divided into equal parts. <b>Simple interest</b> on savings or loans is I = PRT/100, while <b>compound interest</b> adds each period's interest to the principal. <b>Hire purchase</b> spreads a price into a deposit and instalments, and the instalments together always exceed the cash price. <b>Tax</b> is a compulsory payment to government; the <b>value added tax</b> is a percentage added to the price of goods and services. <b>Household bills</b> are found by multiplying units used by the rate per unit and adding the fixed charge.",

  study:[
    /* ---- course text: Semester One, Period III — Percentages (guide p. 45) ---- */
    {k:"h3", t:"Percentages in Banking"},
    {k:"p", t:"All money problems are percentage problems: a percentage is a fraction with denominator 100, so 12% = 12/100 = 0.12. **Interest** is the money paid for the use of money — a bank pays interest on savings, and a borrower pays interest on a loan. Percentages are also used for profit and loss, discount, commissions and bank charges."},
    {k:"rule"},
    {k:"h3", t:"Interest on Savings and Loans"},
    {k:"p", t:"**Simple interest** is charged on the original principal only: **I = PRT/100**. **Compound interest** is charged on the principal and the accumulated interest: **A = P(1 + R/100)ⁿ**, and the interest is A − P. For loans the same formulas apply from the borrower's side; the **amount repaid** is the principal plus the interest."},
    {k:"p", t:"**Worked example — L$100 000 borrowed at 8% per annum simple interest for 2 years:** I = 100 000 × 8 × 2 ÷ 100 = L$16 000, so L$116 000 is repaid. Compounded annually, A = 100 000 × 1.08² = L$116 640, so the interest is L$16 640 — the extra L$640 is interest on the first year's interest."},
    {k:"rule"},
    {k:"h3", t:"Sharing Profit and Interest in a Ratio"},
    {k:"p", t:"When partners share profit or interest, divide it in the agreed ratio — often according to the money each contributed. Divide the amount by the total number of parts, then multiply by each partner's parts. If the partners also contributed for different times, use the products (capital × time) as the ratio."},
    {k:"p", t:"**Worked example — L$90 000 profit shared in the ratio 2 : 3:** total parts 5; one part = 18 000; the shares are L$36 000 and L$54 000."},
    {k:"rule"},
    {k:"h3", t:"Hire Purchase"},
    {k:"p", t:"In **hire purchase** the buyer pays a deposit and the balance over a period in instalments. The hire purchase price = **deposit + (number of instalments × instalment)**; the extra over the cash price is the finance charge. Compare cash price with hire purchase price before deciding, and note the percentage cost of the finance charge on the balance."},
    {k:"p", t:"**Worked example — a radio costs L$60 000 cash, or L$10 000 deposit and 10 monthly payments of L$6 000:** hire purchase price = 10 000 + 60 000 = L$70 000, so the finance charge is **L$10 000**."},
    {k:"rule"},
    {k:"h3", t:"Taxation of Goods and Services"},
    {k:"p", t:"**Tax** is a compulsory payment to the government. **Sales tax** is added to the price of goods, and **income tax** is paid on earnings — often at a percentage of the amount above a tax-free allowance. The **taxed price** = original price × (1 + rate/100), and the **tax amount** = taxed price − original price."},
    {k:"rule"},
    {k:"h3", t:"Value Added Tax (VAT)"},
    {k:"p", t:"**VAT** is a tax added at a fixed percentage to goods and services at each stage of sale. If the rate is 15%, the price including VAT = price × 1.15, so to take VAT out of an including price, divide by 1.15. Always state clearly whether a price is *before* or *including* VAT, because the two calculations are not the same."},
    {k:"p", t:"**Worked example — an article costs L$8 000 plus 15% VAT:** VAT = 8 000 × 0.15 = L$1 200, so the price paid is **L$9 200**. If L$9 200 already includes 15% VAT, the pre-VAT price is 9 200 ÷ 1.15 = L$8 000."},
    {k:"rule"},
    {k:"h3", t:"Electricity, Water and Telephone Bills"},
    {k:"p", t:"Household bills are **tariff problems**: a fixed standing charge plus a rate per unit. Read the present reading, subtract the previous reading to get the units used, multiply by the tariff, and add any fixed charge and tax. Electricity is charged per kilowatt-hour (kWh), water per gallon or per cubic metre, and telephone per minute or per call, often with cheaper rates at certain times."},
    {k:"p", t:"**Worked example — a previous reading of 5 400 and a present reading of 5 900 give 500 kWh; at L$25 per kWh plus a L$500 standing charge, the bill is 500 × 25 + 500 = L$13 000** (before any tax)."},
    {k:"rule"},
    {k:"h3", t:"Partnership and Profit Sharing"},
    {k:"p", t:"In a partnership the profit is shared according to the agreement — equally, in the ratio of capital, or in the ratio capital × time. Find the ratio, reduce it, then divide the profit by the total parts. If a partner withdraws or adds capital part-way through the year, time weighting changes the ratio, and expense percentages (commission, salaries) are deducted before the balance is divided."}
  ],
  focus:["Percentages in banking","Sharing profit and interest in a ratio","Interest on savings and loans","Hire purchase","Taxation of goods and services","Value added tax","Electricity, water and telephone bills","Partnership and profit sharing"],
  terms:[
    {t:"percentage", d:"a number of parts per hundred", x:"15% means 15 out of every 100."},
    {t:"profit", d:"what is left after costs are paid", x:"Profit = selling price − cost price."},
    {t:"partnership", d:"a business owned by two or more people", x:"Partners share profit in an agreed ratio."},
    {t:"simple interest", d:"interest on the original principal only", x:"I = PRT/100."},
    {t:"compound interest", d:"interest on the principal and on past interest", x:"A = P(1 + R/100)ⁿ."},
    {t:"hire purchase", d:"paying for goods by instalments", x:"A deposit plus monthly payments."},
    {t:"tax", d:"money paid to the government", x:"Income tax is a percentage of salary."},
    {t:"value added tax", d:"a percentage added to the price of goods and services", x:"VAT of 10% on L$500 is L$50."},
    {t:"rate per unit", d:"the charge for one unit of a service", x:"L$35 per kilowatt-hour."},
    {t:"standing charge", d:"a fixed charge on a bill regardless of use", x:"A monthly standing charge of L$200."}
  ],
  worked:[
    {q:"Three partners contribute L$20 000, L$30 000 and L$50 000 to a business that makes a profit of L$240 000. Share the profit.",
     steps:["Ratio of contributions = 20 : 30 : 50 = 2 : 3 : 5.","Total parts = 2 + 3 + 5 = 10.","One part = 240 000 ÷ 10 = 24 000.","Shares: 2 × 24 000, 3 × 24 000, 5 × 24 000."],
     a:"L$48 000, L$72 000 and L$120 000"},
    {q:"A generator is sold for L$95 000 cash or by hire purchase with a deposit of L$25 000 and 12 instalments of L$6 500. Find the extra cost of hire purchase.",
     steps:["Instalments = 12 × 6 500 = 78 000.","Hire purchase total = 25 000 + 78 000 = 103 000.","Extra = 103 000 − 95 000.","Extra = 8 000."],
     a:"Hire purchase costs L$8 000 more"},
    {q:"An electricity bill is L$35 per kilowatt-hour plus a standing charge of L$200. A family used 240 kWh. Find the bill including 10% VAT.",
     steps:["Energy charge = 240 × 35 = 8 400.","Add standing charge: 8 400 + 200 = 8 600.","VAT = 10% of 8 600 = 860.","Total = 8 600 + 860 = 9 460."],
     a:"The bill is L$9 460"}
  ],
  drillLabel:"Percentages in finance",
  drills:[
    {id:"percent_of_sh"},{id:"percent_change_sh"},{id:"profit_loss_sh"},{id:"simple_interest_sh"},
    {id:"compound_interest_sh"},{id:"hire_purchase_sh"},{id:"vat_sh"},{id:"household_bill_sh"},
    {id:"profit_share_sh"}
  ],
  word:[
    {q:"A trader buys a bag of rice for L$8 000 and sells it for L$9 600. Find the percentage profit.",
     a:"Profit = L$1 600; 1 600/8 000 × 100 = 20%."},
    {q:"A worker earns L$45 000 a month and pays 15% income tax. Find his take-home pay for the year.",
     a:"Monthly tax = L$6 750, take-home = L$38 250; yearly take-home = L$459 000."},
    {q:"A refrigerator costs L$72 000 cash. On hire purchase the deposit is L$15 000 followed by 18 instalments of L$3 600. Find the total hire purchase price and the extra cost.",
     a:"Total = 15 000 + 64 800 = L$79 800; extra = L$7 800."},
    {q:"A shop adds 12% VAT to a bill of L$25 000. Find the total paid, and the VAT amount.",
     a:"VAT = L$3 000; total = L$28 000."},
    {q:"A water bill is L$120 per cubic metre with a standing charge of L$500. A household used 9 m³. Find the bill before VAT.",
     a:"9 × 120 + 500 = 1 080 + 500 = L$1 580."}
  ],
  challenge:[
    {q:"Explain why hire purchase always costs more than the cash price.",
     a:"The seller is lending the buyer money over time and charges for that privilege, so the instalments include interest as well as the price of the goods."},
    {q:"A salary is increased by 25% and then the increased salary is cut by 20%. Show that the worker is back where he started.",
     a:"L$100 becomes L$125, then L$125 × 0.8 = L$100. The two percentage changes are on different bases but exactly cancel here."},
    {q:"Two partners share profit in the ratio 3 : 5, and the smaller share is L$54 000. Find the total profit.",
     a:"One part = 54 000 ÷ 3 = 18 000; total = 8 parts = L$144 000."}
  ],
  activities:["Visit a bank and discuss the transactions it handles","Analyse a real hire purchase advertisement","Calculate a household electricity bill","Practise VAT on shop receipts"],
  materials:["Calculators","Bank brochures","Shop receipts","Bill statements"],
  assessment:["Percentage quiz","Hire purchase assignment","VAT and bills test","Observation and participation"]
},

/* Period III — Rigid Motion 2 and Enlargement */
{
  grade:12, period:"III", sem:"One", icon:"\uD83D\uDD0D",
  title:"Rigid Motion 2 and Enlargement",
  subtitle:"Unit X: Rotation, enlargement, scale drawings, similarity, and the areas and volumes of images",
  outcomes:["Describe rotation and the payment of an object under rotation, carry out an enlargement of a plane shape given a scale factor, identify a scale drawing as an enlargement or reduction, and establish the relationship between the areas and volumes of figures and solids and their images"],
  objectives:["Describe rotation and the position of an object under rotation","Carry out an enlargement of a plane shape given a scale factor","Identify a scale drawing as an enlargement or reduction of a plane figure","Establish the relationship between the areas of plane figures and their images","Establish the relationship between the volumes of solids and their images","Discuss negative enlargement, movements and enlargement, perspective and similarity","Solve problems on similar triangles, areas and volumes"],
  note:"A <b>rotation</b> is fully described by its <b>centre</b>, its <b>angle</b> and its <b>direction</b>; anticlockwise is taken as positive. An <b>enlargement</b> multiplies every length from a fixed <b>centre</b> by a <b>scale factor</b> k. When k > 1 the image is larger, when 0 < k < 1 it is a reduction, and when k is negative the image lies on the opposite side of the centre and is inverted. Enlargement is <b>not</b> a rigid motion because the size changes, but the image is always <b>similar</b> to the object: angles are unchanged. If lengths scale by k then <b>areas scale by k²</b> and <b>volumes by k³</b>.",

  study:[
    /* ---- course text: Semester One, Period III — Rigid Motion 2 and Enlargement (guide p. 46) ---- */
    {k:"h3", t:"Rotation"},
    {k:"p", t:"A **rotation** turns every point of a figure about a fixed **centre** through a given **angle** in a given **direction**. All three parts must be stated to describe a rotation. The centre stays fixed, and a point and its image lie on the same circle about the centre, one radius apart but through the angle of rotation. Coordinate rules for the origin: 90° anticlockwise (x, y) → (−y, x); 90° clockwise (x, y) → (y, −x); 180° (x, y) → (−x, −y)."},
    {k:"rule"},
    {k:"h3", t:"Enlargement with a Given Scale Factor"},
    {k:"p", t:"An **enlargement** changes every length by the same **scale factor** k and every angle stays the same, so the image and the object are **similar**. A **positive scale factor larger than 1** enlarges; **between 0 and 1** it reduces; and a **negative scale factor** enlarges the other way about the centre — each image point lies on the opposite side of the centre. The centre is fixed, and the rule is: **image point = centre + k × (object point − centre)**. With the origin as centre, (x, y) → (kx, ky)."},
    {k:"p", t:"**Worked example — triangle A(1,1), B(3,1), C(1,4) enlarged by scale factor 3 from the origin:** A′ = (3,3), B′ = (9,3), C′ = (3,12)."},
    {k:"rule"},
    {k:"h3", t:"Scale Drawings and Reduction"},
    {k:"p", t:"A **scale drawing** is an enlargement or reduction of a real object: a scale of 1 : 20 000 means the drawing is 1/20 000 of the real size. The scale factor is the **length scale factor**; areas are multiplied by its square and volumes by its cube."},
    {k:"p", t:"**Worked example — map scale 1 : 20 000, field area 3 cm²:** area scale factor = 20 000² = 4 × 10⁸, so real area = 3 × 4 × 10⁸ = 1.2 × 10⁹ cm² = **120 000 m² (12 hectares)**."},
    {k:"rule"},
    {k:"h3", t:"Similar Figures"},
    {k:"p", t:"**Similar figures** have equal angles and proportional sides; they are the same shape, not necessarily the same size. All squares, all circles, and all regular polygons with the same number of sides are similar. To test similarity, check corresponding angles are equal, or corresponding sides are in the same ratio. For triangles: AA (two angles equal), SAS (ratio of two sides and the included angle equal) and SSS (all three sides in ratio)."},
    {k:"rule"},
    {k:"h3", t:"Length, Area and Volume Scale Factors"},
    {k:"p", t:"If the length scale factor is k, then: **area scale factor = k²** and **volume scale factor = k³**. This is why a 1:100 scale drawing of a cube makes the model 100 times shorter but 1 000 000 times smaller in volume."},
    {k:"p", t:"**Worked example — two similar cylinders, heights 5 cm and 15 cm; the smaller has volume 40 cm³:** k = 15/5 = 3, so the volume scale factor is 3³ = 27 and the larger volume = 40 × 27 = **1 080 cm³**."},
    {k:"rule"},
    {k:"h3", t:"Perspective and Similarity"},
    {k:"p", t:"**Perspective** drawings use a fixed point (the vanishing point) and rays from it to the object, which is exactly the geometry of an enlargement: the centre of enlargement is the eye point, and the rays are the lines through corresponding points. Whenever you see a person, a building or a picture drawn in perspective, the ratios of corresponding lengths are equal — the same similarity ratios that govern enlargement."}
  ],
  focus:["Rotation: centre, angle and direction","Enlargement with a given scale factor","Positive, fractional and negative enlargement","Scale drawings and reduction","Similar figures","Length, area and volume scale factors","Perspective and similarity"],
  terms:[
    {t:"rotation", d:"a turn about a fixed point", x:"A rotation of 90° anticlockwise about the origin is a quarter turn to the left."},
    {t:"centre of rotation", d:"the fixed point a shape turns about", x:"The centre of rotation here is the origin, (0, 0)."},
    {t:"enlargement", d:"a transformation that changes size but not shape", x:"An enlargement with scale factor 3 triples every length."},
    {t:"scale factor", d:"the number each length is multiplied by, written k", x:"A scale factor k = 2 gives an image twice as long."},
    {t:"reduction", d:"an enlargement with 0 < k < 1", x:"A reduction with k = 1/2 halves every length."},
    {t:"negative enlargement", d:"an enlargement with k < 0, giving an inverted image", x:"A negative enlargement with k = −2 puts the image on the opposite side of the centre."},
    {t:"similar figures", d:"figures with equal angles and proportional sides", x:"All circles are similar figures."},
    {t:"length scale factor", d:"the ratio of matching lengths", x:"The length scale factor is k = 4/2 = 2."},
    {t:"area scale factor", d:"the square of the length scale factor", x:"The area scale factor is k² = 4 when k = 2."},
    {t:"volume scale factor", d:"the cube of the length scale factor", x:"The volume scale factor is k³ = 8 when k = 2."}
  ],
  worked:[
    {q:"The triangle A(1, 1), B(3, 1), C(1, 4) is enlarged with scale factor 3 from the origin. Find the image.",
     steps:["Multiply every coordinate by 3.","A′ = (3, 3).","B′ = (9, 3).","C′ = (3, 12)."],
     a:"A′(3, 3), B′(9, 3), C′(3, 12)"},
    {q:"Two similar cylinders have heights 5 cm and 15 cm. The smaller has volume 40 cm³. Find the volume of the larger.",
     steps:["Length scale factor k = 15/5 = 3.","Volume scale factor = k³ = 27.","Volume = 40 × 27.","Volume = 1 080 cm³."],
     a:"1 080 cm³"},
    {q:"A map has a scale of 1 : 20 000. A field has an area of 3 cm² on the map. Find its real area in square metres.",
     steps:["Area scale factor = 20 000² = 4 × 10⁸.","Real area = 3 × 4 × 10⁸ = 1.2 × 10⁹ cm².","Convert: 1 m² = 10 000 cm², so divide by 10⁴.","Real area = 120 000 m²."],
     a:"120 000 m² (12 hectares)"}
  ],
  drillLabel:"Rigid motion and enlargement",
  drills:[
    {id:"enlarge_pt_sh"},{id:"scale_area_sh"},{id:"scale_volume_sh"},{id:"rotate_pt2_sh"},
    {id:"similar_ratio_sh"},{id:"negative_enlarge_sh"}
  ],
  word:[
    {q:"A model of a water tank is made to a scale of 1 : 25. The real tank holds 500 litres. Find the capacity of the model.",
     a:"Volume scale factor = 25³ = 15 625; model capacity = 500/15 625 = 0.032 litres = 32 ml."},
    {q:"Two similar triangles have areas 18 cm² and 72 cm². If the shorter side of the smaller triangle is 4 cm, find the matching side of the larger.",
     a:"Area ratio = 4, so k = 2 and the matching side is 8 cm."},
    {q:"A photograph 9 cm by 6 cm is enlarged so that its length becomes 15 cm. Find the new width and the area scale factor.",
     a:"k = 15/9 = 5/3; new width = 6 × 5/3 = 10 cm; area scale factor = 25/9."},
    {q:"The point P(4, −2) is enlarged from the origin with scale factor −2. Find its image and describe what the negative factor does.",
     a:"P′ = (−8, 4); the negative factor places the image on the opposite side of the centre and turns it upside down."},
    {q:"Two similar cones have radii 3 cm and 12 cm. The smaller has curved surface area 45 cm². Find the curved surface area of the larger.",
     a:"k = 4, area factor = 16, so 45 × 16 = 720 cm²."}
  ],
  challenge:[
    {q:"Explain why a scale drawing of a field is an enlargement or reduction but never a rigid motion.",
     a:"Because the lengths change. A rigid motion preserves every length and so produces a congruent image, whereas a scale drawing produces only a similar image."},
    {q:"A bottle is twice the height of a smaller similar bottle. Why does it hold eight times as much, not twice as much?",
     a:"Volume depends on three lengths, so the volume scale factor is k³ = 2³ = 8. Doubling one dimension alone would double the volume, but similarity doubles all three."},
    {q:"An enlargement of scale factor −1 about the origin is equivalent to which rigid motion?",
     a:"A rotation of 180° about the origin, since every point (x, y) maps to (−x, −y) in both cases."}
  ],
  activities:["Enlarge and reduce shapes on squared paper","Investigate area and volume scale factors with real containers","Rotate shapes and record the coordinates","Analyse scale models and maps"],
  materials:["Squared paper","Rulers","Scale models","Maps"],
  assessment:["Transformation quiz","Enlargement assignment","Scale factor test","Observation and participation"]
},

/* Period III — Trigonometry 2 */
{
  grade:12, period:"III", sem:"One", icon:"\uD83C\uDF0A",
  title:"Trigonometry 2",
  subtitle:"Unit XI: Drawing and interpreting the graphs of the trigonometric functions",
  outcomes:["Draw and interpret the graphs of the trigonometric functions, and identify their maximum and minimum values"],
  objectives:["Draw the graphs of sin θ and cos θ for 0° ≤ θ ≤ 360°","Compare the graphs of the trigonometric functions","Identify the maximum and minimum values of the graphs","Interpret the graphs of the trigonometric functions","Solve simple trigonometric equations graphically","Discuss amplitude and period"],
  note:"The graphs of y = sin θ and y = cos θ are <b>waves</b> that repeat every <b>360°</b>; this repeating length is the <b>period</b>. Both lie between −1 and +1, so the <b>amplitude</b> is 1: the maximum is 1 and the minimum is −1. The sine graph starts at 0, peaks at 90°, returns to 0 at 180°, reaches −1 at 270° and ends at 0 at 360°. The cosine graph has the same shape but starts at 1, so it is the sine graph <b>shifted 90° to the left</b>: cos θ = sin(θ + 90°). The tangent graph has <b>asymptotes</b> at 90° and 270° where it is undefined and its period is 180°. Because the waves repeat, an equation such as sin θ = 0.5 has <b>more than one solution</b> in one full turn.",

  study:[
    /* ---- course text: Semester One, Period III — Trigonometry 2 (guide p. 47) ---- */
    {k:"h3", t:"The Graphs of the Trigonometric Functions"},
    {k:"p", t:"The trigonometric functions are **periodic**: their graphs repeat at regular intervals. **y = sin θ** has period 360°, amplitude 1, and starts at 0, rising to 1 at 90°, 0 at 180°, −1 at 270° and 0 at 360°. **y = cos θ** has the same amplitude and period but starts at 1: it is the sine wave shifted 90° to the left, so **cos θ = sin(θ + 90°)**. **y = tan θ** has period 180° and is undefined at 90° and 270°, where the graph shoots towards a vertical **asymptote**."},
    {k:"rule"},
    {k:"h3", t:"Amplitude and Period"},
    {k:"bul", items:["**Amplitude** — half the distance from the maximum to the minimum; it multiplies the wave, so y = 4 cos θ has amplitude 4.","**Period** — the length of one complete repetition; y = sin 2θ repeats every 180°, so its period is 360 ÷ 2.","**Maximum and minimum values** — for a sin θ + c, the maximum is a + c and the minimum is −a + c."]},
    {k:"p", t:"**Worked example — y = 4 cos θ:** cos θ ranges from −1 to 1, so 4 cos θ ranges from −4 to 4. The maximum 4 occurs at θ = 0° and 360°, and the minimum −4 at θ = 180°."},
    {k:"rule"},
    {k:"h3", t:"Drawing the Graphs"},
    {k:"p", t:"Make a table of values at intervals of 30° (0°, 30°, 60°, 90°, …, 360°), plot the points and join them with a smooth wave; every cycle has the same shape. For tan θ, plot values at 15° intervals and break the curve at the asymptotes."},
    {k:"p", t:"**Worked example — solve sin θ = 0.5 from the graph of y = sin θ:** draw the horizontal line y = 0.5; it cuts the wave at θ = 30° and θ = 150° (both have sine 0.5, and they are symmetric about 90°)."},
    {k:"rule"},
    {k:"h3", t:"Reading Solutions from the Graphs"},
    {k:"p", t:"The solutions of sin θ = k in 0° to 360° are the θ-values where y = sin θ meets y = k — usually **two** solutions, symmetric about 90° and 270°. Similarly, the solutions of cos θ = k are symmetric about 0° and 180°, and tan θ = k has one solution in 0° to 180° plus one every 180°. Check the calculator's answer: it gives one solution, and the graph gives the other."},
    {k:"rule"},
    {k:"h3", t:"Transformations of the Trigonometric Graphs"},
    {k:"p", t:"**y = a sin θ** changes the amplitude to a; **y = sin bθ** changes the period to 360°/b; **y = sin θ + c** moves the wave up or down by c; **y = sin(θ + α)** shifts the wave left by α (a **phase shift**). Reading a transformed graph means saying which parts are amplitude, period, vertical shift and horizontal shift."},
    {k:"p", t:"**Worked example — explain the relationship between y = sin θ and y = cos θ:** both have amplitude 1, period 360° and the same wave shape; cos 0° = 1 while sin 0° = 0, so the cosine graph is the sine graph moved 90° to the left: cos θ = sin(θ + 90°)."},
    {k:"rule"},
    {k:"h3", t:"Solving Trigonometric Equations Graphically"},
    {k:"p", t:"To solve an equation such as 2 sin θ − 1 = 0, draw y = 2 sin θ − 1 (or y = sin θ and y = ½) and read the intersections. The wave repeats, so state all solutions in the required range — for example, sin θ = ½ has solutions 30°, 150°, 390°, 510°, … in 0° to 720°, two per full cycle. Always connect the graph's symmetry with the calculator's answer."}
  ],
  focus:["Drawing the graphs of sin θ and cos θ","The graph of tan θ and its asymptotes","Amplitude and period","Maximum and minimum values","Reading solutions from the graphs","Transformations of the trigonometric graphs","Solving trigonometric equations graphically"],
  terms:[
    {t:"periodic function", d:"a function whose graph repeats at regular intervals", x:"sin θ repeats every 360°."},
    {t:"period", d:"the length of one complete repetition", x:"The period of sin θ is 360°."},
    {t:"amplitude", d:"the maximum displacement from the centre line", x:"The amplitude of y = 3 sin θ is 3."},
    {t:"maximum value", d:"the highest point of a graph", x:"The maximum of cos θ is 1."},
    {t:"minimum value", d:"the lowest point of a graph", x:"The minimum of sin θ is −1."},
    {t:"asymptote", d:"a line a graph approaches but never reaches", x:"tan θ has asymptotes at 90° and 270°."},
    {t:"phase shift", d:"a horizontal shift of a wave", x:"cos θ = sin(θ + 90°)."},
    {t:"solution of a trigonometric equation", d:"an angle satisfying the equation", x:"sin θ = 0.5 gives θ = 30° and 150°."}
  ],
  worked:[
    {q:"Draw y = sin θ for 0° ≤ θ ≤ 360° and use it to solve sin θ = 0.5.",
     steps:["Make a table at 30° intervals: 0, 0.5, 0.87, 1, 0.87, 0.5, 0, −0.5, −0.87, −1, −0.87, −0.5, 0.","Plot the points and join with a smooth wave.","Draw the horizontal line y = 0.5.","It cuts the wave at 30° and 150°."],
     a:"θ = 30° or 150°"},
    {q:"State the maximum and minimum values of y = 4 cos θ and the values of θ at which they occur for 0° ≤ θ ≤ 360°.",
     steps:["cos θ ranges from −1 to 1.","Multiplying by 4 gives a range of −4 to 4.","cos θ = 1 at θ = 0° and 360°; cos θ = −1 at θ = 180°."],
     a:"Maximum 4 at 0° and 360°; minimum −4 at 180°"},
    {q:"Explain the relationship between the graphs of y = sin θ and y = cos θ.",
     steps:["Both have amplitude 1 and period 360° and the same wave shape.","cos 0° = 1 while sin 0° = 0, and cos 90° = 0 while sin 90° = 1.","So the cosine graph is the sine graph moved 90° to the left."],
     a:"cos θ = sin(θ + 90°); they are the same wave with a phase shift of 90°"}
  ],
  drillLabel:"Trigonometric graphs",
  drills:[
    {id:"trig_graph_value_sh"},{id:"trig_graph_solve_sh"},{id:"trig_amplitude_sh"},{id:"trig_max_min_sh"},
    {id:"trig_period_sh"}
  ],
  word:[
    {q:"The height of a tide is modelled by h = 3 + 2 sin θ metres. Find the maximum and minimum heights.",
     a:"Maximum = 3 + 2 = 5 m; minimum = 3 − 2 = 1 m."},
    {q:"Use the graph of y = cos θ to solve cos θ = −0.5 for 0° ≤ θ ≤ 360°.",
     a:"θ = 120° and θ = 240°."},
    {q:"A wheel turns once every 4 seconds. Its height above the ground is h = 1 − cos(90t) metres. Find the period in seconds and the maximum height.",
     a:"One turn is 360° of argument, so 90t = 360 gives t = 4 s; the maximum height is 1 + 1 = 2 m."},
    {q:"State the amplitude and period of y = 5 sin 2θ.",
     a:"Amplitude 5; the argument 2θ completes 360° when θ = 180°, so the period is 180°."},
    {q:"How many solutions does sin θ = 0.8 have for 0° ≤ θ ≤ 720°?",
     a:"Two per full turn, so 4 solutions in two turns."}
  ],
  challenge:[
    {q:"Explain why the graph of y = tan θ has vertical asymptotes at 90° and 270°.",
     a:"tan θ = sin θ/cos θ, and cos θ = 0 at 90° and 270°. Division by zero is undefined, so the graph shoots upwards or downwards without ever reaching those angles."},
    {q:"Why does the equation sin θ = 1.5 have no solution?",
     a:"The sine of an angle can never exceed 1, because the opposite side of a right-angled triangle can never be longer than the hypotenuse."},
    {q:"Describe how the graph of y = sin 3θ differs from y = sin θ.",
     a:"The amplitude is unchanged at 1, but the wave is squeezed horizontally: it completes three full cycles in 360°, so its period is 120°."}
  ],
  activities:["Plot sin θ and cos θ from tables of values","Solve trigonometric equations from hand-drawn graphs","Model tides and sound waves with trigonometric functions","Investigate amplitude and period with graphing software"],
  materials:["Graph paper","Calculators","Rulers","Graphing software"],
  assessment:["Trigonometric graph quiz","Graph drawing assignment","Equation solving test","Observation and participation"]
}
,

/* Period IV — Numbers and Numeration */
{
  grade:12, period:"IV", sem:"Two", icon:"\uD83D\uDD22",
  title:"Numbers and Numeration",
  subtitle:"Unit XII: Real numbers, bases, modular arithmetic, properties of operations, powers and roots",
  outcomes:["Review real numbers and their properties, convert between bases, solve problems in modular arithmetic, demonstrate the commutative, associative and distributive identities, and work with powers and roots"],
  objectives:["Review real numbers including multiples of whole numbers, primes, prime factorization, integers, ratios and rational numbers","Convert from base ten to other bases and back","Solve problems in modular arithmetic","Demonstrate identities in the commutative, associative and distributive properties, binomial expressions and properties of negatives","Represent numbers in standard form","Work and solve problems using powers and roots"],
  note:"The <b>real numbers</b> contain the natural numbers, the integers, the rationals and the irrationals, and each set is contained in the next. Every whole number greater than 1 can be written as a product of primes — its <b>prime factorization</b>. The <b>commutative</b> property says a + b = b + a and a × b = b × a; the <b>associative</b> property says the grouping does not matter; the <b>distributive</b> property links them: a(b + c) = ab + ac. Subtraction and division are <b>not</b> commutative. <b>Powers and roots</b> are inverse operations, so (aⁿ)^(1/n) = a, and standard form A × 10ⁿ makes very large and very small numbers easy to compare.",

  study:[
    /* ---- course text: Semester Two, Period IV — Numbers and Numeration (guide p. 48) ---- */
    {k:"h3", t:"Classification of Numbers"},
    {k:"p", t:"The number system is built in layers: **natural numbers** (1, 2, 3, …), **whole numbers** (0, 1, 2, …), **integers** (…, −2, −1, 0, 1, 2, …), **rational numbers** (p/q, q ≠ 0) and **real numbers** (rational plus irrational). A **prime number** has exactly two factors — 1 and itself; a **composite number** has more. Every composite number can be written as a product of primes, and the **prime factorization**, in order, is unique."},
    {k:"p", t:"**Worked example — 504 and 180:** 504 = 2³ × 3² × 7 and 180 = 2² × 3² × 5; taking the lowest power of each common prime gives the HCF, 2² × 3² = **36**."},
    {k:"rule"},
    {k:"h3", t:"Conversion Between Bases"},
    {k:"p", t:"To change a number from one base to another, convert to base ten first, then to the required base: divide repeatedly by the new base and read the remainders from last to first. The digits available in base n are 0 to n − 1; remember that 10ₙ means n in base ten, not ten."},
    {k:"rule"},
    {k:"h3", t:"Modular Arithmetic"},
    {k:"p", t:"In **mod n**, two numbers are congruent when they leave the same remainder on division by n: 17 ≡ 3 (mod 7), because 17 = 2 × 7 + 3. Adding, subtracting and multiplying modulo n are done by performing the ordinary operation and then reducing the result. The modulus is a cycle — 7 ≡ 0 (mod 7) — so modular arithmetic appears in clock times, calendars, counting round in games, and cryptography."},
    {k:"rule"},
    {k:"h3", t:"Properties of Operations"},
    {k:"table", head:["Property","Meaning","Example"], rows:[["Commutative","a + b = b + a; a × b = b × a","3 + 5 = 5 + 3; 4 × 6 = 6 × 4"],["Associative","(a + b) + c = a + (b + c); same for ×","(2 + 3) + 7 = 2 + (3 + 7)"],["Distributive","a(b + c) = ab + ac","4(3 + 5) = 12 + 20"],["Identity","a + 0 = a; a × 1 = a","7 + 0 = 7; 7 × 1 = 7"],["Inverse","a + (−a) = 0; a × (1/a) = 1","5 + (−5) = 0; 5 × 1/5 = 1"]]},
    {k:"p", t:"**Worked example — show that subtraction is not commutative:** 7 − 3 = 4 but 3 − 7 = −4, so 7 − 3 ≠ 3 − 7. Addition is commutative because 7 + 3 = 3 + 7 = 10."},
    {k:"rule"},
    {k:"h3", t:"Properties of Negatives"},
    {k:"p", t:"The properties of negatives follow from the additive inverse: **a + (−a) = 0**; **−(−a) = a**; **(−a) × b = −(ab)**; **(−a) × (−b) = ab**; and subtracting is adding the negative, a − b = a + (−b). These rules make the sign laws work: a negative times a negative is positive."},
    {k:"rule"},
    {k:"h3", t:"Powers, Roots and Standard Form"},
    {k:"p", t:"Powers follow the index laws: aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁰ = 1, a⁻ⁿ = 1/aⁿ, and a^(m/n) = (ⁿ√a)ᵐ. A root is the inverse operation of a power: √x × √x = x. **Standard form** writes a number as A × 10ⁿ with 1 ≤ A < 10."},
    {k:"p", t:"**Worked example — evaluate 27^(2/3) × 16^(−1/2):** 27^(2/3) = (∛27)² = 3² = 9 and 16^(−1/2) = 1/4, so the product is **9/4**."}
  ],
  focus:["Classification of numbers","Prime numbers and prime factorization","Conversion between bases","Modular arithmetic problems","Commutative, associative and distributive properties","Properties of negatives","Powers and roots","Standard form"],
  terms:[
    {t:"natural number", d:"a counting number 1, 2, 3, …", x:"7 is a natural number."},
    {t:"integer", d:"a whole number, positive, negative or zero", x:"−12 is an integer."},
    {t:"rational number", d:"a number that can be written as p/q with q ≠ 0", x:"−3/4 is rational."},
    {t:"prime factorization", d:"writing a number as a product of primes", x:"60 = 2² × 3 × 5."},
    {t:"commutative property", d:"the order of the numbers does not matter", x:"a + b = b + a."},
    {t:"associative property", d:"the grouping of the numbers does not matter", x:"(a + b) + c = a + (b + c)."},
    {t:"distributive property", d:"multiplication spreads over addition", x:"3(x + 4) = 3x + 12."},
    {t:"identity element", d:"a number that leaves others unchanged", x:"0 for addition and 1 for multiplication."},
    {t:"inverse", d:"a number that combines with another to give the identity", x:"−7 is the additive inverse of 7."},
    {t:"root", d:"the inverse operation of raising to a power", x:"The cube root of 27 is 3."}
  ],
  worked:[
    {q:"Express 504 as a product of prime factors and find its highest common factor with 180.",
     steps:["504 = 8 × 63 = 2³ × 9 × 7 = 2³ × 3² × 7.","180 = 4 × 45 = 2² × 3² × 5.","Take the lowest power of each common prime: 2² × 3².","HCF = 4 × 9 = 36."],
     a:"504 = 2³ × 3² × 7 and the HCF is 36"},
    {q:"Show that subtraction is not commutative but that addition is.",
     steps:["Take a = 7 and b = 3.","7 + 3 = 10 and 3 + 7 = 10, so addition is commutative.","7 − 3 = 4 but 3 − 7 = −4.","Since 4 ≠ −4, subtraction is not commutative."],
     a:"Addition is commutative; subtraction is not"},
    {q:"Evaluate 27^(2/3) × 16^(−1/2).",
     steps:["27^(2/3) = (cube root of 27)² = 3² = 9.","16^(1/2) = 4, so 16^(−1/2) = 1/4.","9 × 1/4 = 9/4."],
     a:"9/4 or 2.25"}
  ],
  drillLabel:"Numbers and numeration",
  drills:[
    {id:"prime_factor_sh"},{id:"hcf_lcm_sh"},{id:"ten_to_base2_sh"},{id:"base_to_ten2_sh"},
    {id:"mod_add_sh"},{id:"index_rational_sh"},{id:"root_sh"},{id:"number_class_sh"},
    {id:"standard_form_sh"}
  ],
  word:[
    {q:"Find the HCF and LCM of 84 and 126 using prime factorization.",
     a:"84 = 2² × 3 × 7 and 126 = 2 × 3² × 7; HCF = 2 × 3 × 7 = 42, LCM = 2² × 3² × 7 = 252."},
    {q:"A farmer has 96 mangoes and 144 oranges. He packs them into identical boxes with none left over. What is the greatest number of boxes?",
     a:"HCF of 96 and 144 = 48 boxes."},
    {q:"Convert 3 725₁₀ to base eight.",
     a:"3 725 = 7 × 512 + 2 × 64 + 1 × 8 + 5, so 3 725₁₀ = 7215₈."},
    {q:"A computer file is 2³⁰ bytes. Express this in standard form to 3 significant figures.",
     a:"2³⁰ = 1 073 741 824 ≈ 1.07 × 10⁹ bytes."},
    {q:"Solve 4x ≡ 2 (mod 10) and explain why there is more than one solution.",
     a:"x = 3 gives 12 ≡ 2 and x = 8 gives 32 ≡ 2, so x = 3 or 8. There are two solutions because 4 and 10 share the factor 2."}
  ],
  challenge:[
    {q:"Explain why the product of two irrational numbers can be rational.",
     a:"The irrationals may cancel each other: √2 × √2 = 2 and √8 × √2 = 4. Being irrational is not preserved under multiplication, so the set is not closed."},
    {q:"Show that the distributive property fails for division over addition, using an example.",
     a:"12 ÷ (3 + 1) = 3, but 12 ÷ 3 + 12 ÷ 1 = 4 + 12 = 16. Since 3 ≠ 16, division does not distribute over addition."},
    {q:"Without a calculator, decide whether 7¹⁰⁰ is greater than 10⁸⁰.",
     a:"Compare logarithms: log 7¹⁰⁰ = 100 × 0.845 = 84.5 and log 10⁸⁰ = 80, so 7¹⁰⁰ is the larger number."}
  ],
  activities:["Build factor trees for large numbers","Convert class numbers between bases","Test the properties of operations with examples","Practise powers and roots without a calculator"],
  materials:["Number charts","Calculators","Place value grids","Whiteboard"],
  assessment:["Number systems quiz","Base conversion assignment","Powers and roots test","Observation and participation"]
},

/* Period IV — Sets and Logic */
{
  grade:12, period:"IV", sem:"Two", icon:"\uD83D\uDDC3\uFE0F",
  title:"Sets and Logic",
  subtitle:"Unit XIII: Set notation, types of sets, Venn diagrams, set properties, and statements and implication",
  outcomes:["Define sets and use set notation, define and apply subsets, illustrate the types of sets, use Venn diagrams for the operations on sets, discuss the properties of set operations, solve two-set and three-set problems, and review statements and implication applied to sets"],
  objectives:["Define sets and use set notation","Define and apply subsets and solve problems on subsets","Illustrate the types of sets: finite, infinite, universal, equal, equivalent and empty","Discuss Venn diagrams and use them to illustrate intersection, disjoint sets, union and complement","Discuss and illustrate the properties of set operations","Solve two-set and three-set problems using Venn diagrams","Review statements and implication and apply them using sets"],
  note:"This unit revisits sets at a higher level. The operations have the same <b>properties</b> as ordinary arithmetic: union and intersection are <b>commutative</b> (A ∪ B = B ∪ A) and <b>associative</b>, and each <b>distributes</b> over the other, so A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C). <b>De Morgan's laws</b> link complements to the operations: (A ∪ B)′ = A′ ∩ B′ and (A ∩ B)′ = A′ ∪ B′. A <b>three-set</b> Venn diagram has eight regions and lets you solve problems with three overlapping groups. Statements can be expressed with sets: 'all A are B' means the A circle lies inside the B circle, which is exactly the implication A ⇒ B.",

  study:[
    /* ---- course text: Semester Two, Period IV — Sets and Logic (guide p. 49) ---- */
    {k:"h3", t:"Set Notation and Set-Builder Notation"},
    {k:"p", t:"A **set** is a well-defined collection of objects, written in braces: A = {2, 4, 6}. **Set-builder notation** describes the set by a rule: A = {x : x is even and x < 8}. The **cardinality** n(A) is the number of members: n({2, 4, 6}) = 3. The **empty set** { } or ∅ has no members, and the **universal set** ξ holds every object under discussion."},
    {k:"rule"},
    {k:"h3", t:"Subsets and Proper Subsets"},
    {k:"p", t:"A **subset** B ⊆ A has every member of B in A. A **proper subset** B ⊂ A has at least one member of A missing. The empty set is a subset of every set, every set is a subset of itself, and a set with n members has 2ⁿ subsets and 2ⁿ − 1 proper subsets."},
    {k:"rule"},
    {k:"h3", t:"Types of Sets"},
    {k:"bul", items:["**Finite set** — members can be counted: {1, 2, 3}.","**Infinite set** — members go on forever: {1, 2, 3, …}.","**Equal sets** — exactly the same members: {1, 2} = {2, 1}.","**Equivalent sets** — same number of members: {a, b} and {1, 2}.","**Disjoint sets** — no member in common: {1, 2} and {3, 4}.","**Universal set** — all objects in the problem."]},
    {k:"rule"},
    {k:"h3", t:"Venn Diagrams for Two and Three Sets"},
    {k:"p", t:"Draw the universal set as a rectangle and each set as a circle; three circles divide the rectangle into eight regions, each answering one yes/no combination of membership. Fill the overlaps first — start with the region in all three sets, then the two-set overlaps, then the single sets, and finally the outside region. Only when every region is filled can the required counts be read."},
    {k:"rule"},
    {k:"h3", t:"Union, Intersection, Complement and Disjoint Sets"},
    {k:"p", t:"The **union** A ∪ B holds every member of A or B; the **intersection** A ∩ B holds the members common to both; the **complement** A′ holds everything in ξ not in A; and disjoint sets have A ∩ B = ∅. The counting formula is **n(A ∪ B) = n(A) + n(B) − n(A ∩ B)**."},
    {k:"rule"},
    {k:"h3", t:"Properties of Set Operations and De Morgan's Laws"},
    {k:"p", t:"Union and intersection are **commutative** (A ∪ B = B ∪ A), **associative**, and **distributive** over each other; A ∪ ∅ = A and A ∩ ξ = A; A ∪ A′ = ξ and A ∩ A′ = ∅. **De Morgan's laws** describe complements of combinations: **(A ∪ B)′ = A′ ∩ B′** and **(A ∩ B)′ = A′ ∪ B′** — the complement of a union is the intersection of the complements."},
    {k:"p", t:"**Worked example — verify (A ∪ B)′ = A′ ∩ B′ with ξ = {1,…,8}, A = {1, 2, 3}, B = {3, 4}:** A ∪ B = {1, 2, 3, 4}, so (A ∪ B)′ = {5, 6, 7, 8}; A′ = {4, 5, 6, 7, 8} and B′ = {1, 2, 5, 6, 7, 8}, whose intersection is {5, 6, 7, 8}. Both sides agree."},
    {k:"rule"},
    {k:"h3", t:"Two-Set and Three-Set Problems"},
    {k:"p", t:"**Worked example — 100 pupils, 55 offer Mathematics, 45 Physics, 30 Chemistry; 20 both M and P, 15 both M and C, 10 both P and C, 5 all three:** n(M ∪ P ∪ C) = 55 + 45 + 30 − 20 − 15 − 10 + 5 = 90, so the number offering none is 100 − 90 = **10**."},
    {k:"rule"},
    {k:"h3", t:"Statements and Implication Expressed with Sets"},
    {k:"p", t:"Every implication can be drawn with sets: *all T are G* is **T ⊆ G**, *no T are G* is **T ∩ G = ∅**, *some T are G* is **T ∩ G ≠ ∅**, and *not all T are G* is **T ⊄ G**. Validity is read from the picture — a conclusion follows only when the picture of the premises forces it, and the classic error is drawing a conclusion that is true in the picture drawn but not forced by it."}
  ],
  focus:["Set notation and set-builder notation","Subsets and proper subsets","Types of sets","Venn diagrams for two and three sets","Union, intersection, complement and disjoint sets","Properties of set operations and De Morgan's laws","Two-set and three-set problems","Statements and implication expressed with sets"],
  terms:[
    {t:"set-builder notation", d:"describing a set by a rule", x:"{x : x is even, 1 ≤ x ≤ 10}."},
    {t:"empty set", d:"a set with no members, written { } or ∅", x:"The set of flying elephants is empty."},
    {t:"proper subset", d:"a subset that is not the whole set", x:"{1, 2} is a proper subset of {1, 2, 3}."},
    {t:"cardinality", d:"the number of members of a set, written n(A)", x:"n({a, b, c}) = 3."},
    {t:"De Morgan's laws", d:"rules linking complements with union and intersection", x:"(A ∪ B)′ = A′ ∩ B′."},
    {t:"commutative property", d:"the order of the sets does not matter", x:"A ∪ B = B ∪ A."},
    {t:"distributive property", d:"one operation spreading over the other", x:"A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)."},
    {t:"three-set Venn diagram", d:"three overlapping circles with eight regions", x:"It solves problems on three groups."},
    {t:"implication", d:"'if A then B', shown by one circle inside another", x:"All dogs are animals."},
    {t:"disjoint sets", d:"sets with no member in common", x:"A ∩ B = ∅."}
  ],
  worked:[
    {q:"In a school of 100 pupils, 55 offer Mathematics, 45 offer Physics, 30 offer Chemistry, 20 offer Mathematics and Physics, 15 offer Mathematics and Chemistry, 10 offer Physics and Chemistry, and 5 offer all three. How many offer none of the three?",
     steps:["Use the three-set formula for the union.","n(M ∪ P ∪ C) = 55 + 45 + 30 − 20 − 15 − 10 + 5.","= 130 − 45 + 5 = 90.","None = 100 − 90 = 10."],
     a:"10 pupils offer none of the three subjects"},
    {q:"Verify De Morgan's law (A ∪ B)′ = A′ ∩ B′ for ξ = {1,…,8}, A = {1, 2, 3} and B = {3, 4}.",
     steps:["A ∪ B = {1, 2, 3, 4}, so (A ∪ B)′ = {5, 6, 7, 8}.","A′ = {4, 5, 6, 7, 8} and B′ = {1, 2, 5, 6, 7, 8}.","A′ ∩ B′ = {5, 6, 7, 8}.","The two results agree."],
     a:"Both sides give {5, 6, 7, 8}, so the law holds"},
    {q:"Show that 'All teachers are graduates' can be drawn as one circle inside another, and deduce the valid conclusion.",
     steps:["Draw the teachers' circle entirely inside the graduates' circle.","Being a teacher guarantees being a graduate, which is teachers ⇒ graduates.","The reverse is not guaranteed: the graduate circle is larger."],
     a:"The statement is the implication teacher ⇒ graduate; the converse does not follow"}
  ],
  drillLabel:"Sets and logic",
  drills:[
    {id:"set_notation_sh"},{id:"set_union_sh"},{id:"set_inter_sh"},{id:"set_complement_sh"},
    {id:"venn_two_sh"},{id:"venn_three_sh"},{id:"demorgan_sh"},{id:"subsets_num_sh"}
  ],
  word:[
    {q:"Of 80 households, 50 have electricity, 40 have pipe-borne water and 25 have both. How many have neither?",
     a:"n(E ∪ W) = 50 + 40 − 25 = 65, so 80 − 65 = 15 households have neither."},
    {q:"A = {2, 4, 6, 8, 10} and B = {3, 6, 9, 12}. Find A ∩ B, A ∪ B and n(A ∪ B).",
     a:"A ∩ B = {6}; A ∪ B = {2, 3, 4, 6, 8, 9, 10, 12}; n(A ∪ B) = 8."},
    {q:"How many subsets does a set of 6 members have, and how many are proper subsets?",
     a:"2⁶ = 64 subsets, of which 63 are proper because the set itself is not a proper subset."},
    {q:"In a class of 45, 28 like football, 20 like basketball and 8 like neither. How many like both games?",
     a:"At least one = 45 − 8 = 37; both = 28 + 20 − 37 = 11 pupils."},
    {q:"Write the set {x : x is a prime number, 10 < x < 25} by listing its members.",
     a:"{11, 13, 17, 19, 23}."}
  ],
  challenge:[
    {q:"Prove De Morgan's law (A ∩ B)′ = A′ ∪ B′ by describing membership in words.",
     a:"A member of (A ∩ B)′ is not in both A and B, so it misses at least one of them. That is exactly what it means to be in A′ or in B′, so it belongs to A′ ∪ B′."},
    {q:"Explain why 'some graduates are teachers' does not allow the conclusion 'some teachers are not graduates'.",
     a:"The first statement only says the two circles overlap. It leaves open the possibility that the teachers' circle lies entirely inside the graduates' circle, in which case every teacher is a graduate."},
    {q:"If n(A) = 5 and n(B) = 4, what are the largest and smallest possible values of n(A ∩ B)?",
     a:"The largest is 4, when B lies inside A. The smallest is 0, when the sets are disjoint; with n(ξ) large enough they need not overlap at all."}
  ],
  activities:["Solve three-set problems from school enrolment data","Verify De Morgan's laws with small sets","Draw Venn diagrams for everyday statements","Sort sets by type"],
  materials:["Venn diagram charts","Coloured markers","Class data sheets","Whiteboard"],
  assessment:["Sets quiz","Venn diagram assignment","Three-set problem test","Observation and participation"]
},

/* Period IV — Relations, Functions, Mappings, Ratio, Proportion and Variation */
{
  grade:12, period:"IV", sem:"Two", icon:"\uD83D\uDD17",
  title:"Relations, Functions, Mappings, Ratio, Proportion and Variation",
  subtitle:"Unit XIV: Mappings, relations and functions, ratio and proportion, and the four kinds of variation",
  outcomes:["Define and discuss relations, functions and mappings, solve problems on them, calculate ratio and proportion, and define variation and solve variation problems"],
  objectives:["Define and discuss relations, functions and mappings","Distinguish between the various types of relations and mappings","Solve problems on relations, functions and mappings","Calculate ratio and proportion","Define variation and solve problems on direct, inverse, joint and partial variation"],
  note:"A <b>mapping</b> shows how members of one set are sent to members of another, and it is another name for a relation. A <b>function</b> is a mapping in which every member of the first set has <b>exactly one</b> image; a mapping that sends one member to two is <b>one-to-many</b> and is not a function. A <b>one-to-one</b> function has an <b>inverse</b>, which reverses every arrow. A <b>ratio</b> compares quantities of the same kind and a <b>proportion</b> states that two ratios are equal, solved by cross multiplication. The four kinds of <b>variation</b> are direct (y = kx), inverse (y = k/x), joint (y = kxz) and partial (y = kx + c).",

  study:[
    /* ---- course text: Semester Two, Period IV — Relations and Functions, Mappings, Ratio, Proportion and Variation (guide p. 50) ---- */
    {k:"h3", t:"Relations, Functions and Mappings"},
    {k:"p", t:"A **relation** links members of one set to members of another; a **mapping** is a rule sending each member of the domain to an **image**. A **function** is a mapping in which each input has exactly one image. The **domain** is the set of inputs and the **range** is the set of images. One-to-one mappings give different images for different inputs, many-to-one mappings let several inputs share one image (still a function), and one-to-many mappings are not functions."},
    {k:"rule"},
    {k:"h3", t:"Inverse Functions"},
    {k:"p", t:"The **inverse function** f⁻¹ reverses the mapping: if f(a) = b then f⁻¹(b) = a. It exists only for one-to-one functions, and the graph of f⁻¹ is the reflection of the graph of f in the line y = x. To find it, write y = f(x), make x the subject, and swap the letters. The **composite function** fg means *g first, then f*, so fg(x) = f(g(x))."},
    {k:"p", t:"**Worked example — f(x) = 3x − 2:** f(4) = 10; for the inverse, y = 3x − 2 gives x = (y + 2)/3, so **f⁻¹(x) = (x + 2)/3**; and ff(2) = f(4) = **10**."},
    {k:"rule"},
    {k:"h3", t:"Ratio and Proportion"},
    {k:"p", t:"A **ratio** compares quantities of the same kind and a **proportion** is a statement that two ratios are equal: a/b = c/d. In a proportion, **cross multiplication** is allowed: a/b = c/d means ad = bc. Simplify a ratio only after converting to the same units."},
    {k:"p", t:"**Worked example — solve (2x + 1)/3 = (x − 4)/5:** cross multiply, 5(2x + 1) = 3(x − 4); 10x + 5 = 3x − 12; 7x = −17; **x = −17/7**."},
    {k:"rule"},
    {k:"h3", t:"Direct, Inverse, Joint and Partial Variation"},
    {k:"table", head:["Variation","Equation","Graph","Key fact"], rows:[["Direct","y = kx","Straight line through the origin","y/x is constant; doubling x doubles y"],["Inverse","y = k/x","Curve approaching both axes","xy is constant; doubling x halves y"],["Joint","y = kxz","Varies with the product","Find k from one given triple"],["Partial","y = kx + c","Straight line not through the origin","Two pairs give two equations for k and c"]]},
    {k:"p", t:"In every case: write the statement with k, use the given data to find k, then answer the question."},
    {k:"rule"},
    {k:"h3", t:"Word Problems on Ratio and Variation"},
    {k:"p", t:"**Worked example — y varies partly as a constant and partly as x:** y = c + kx; y = 7 when x = 2 and y = 13 when x = 5 give 7 = c + 2k and 13 = c + 5k; k = 2 and c = 3; at x = 9, **y = 21**. Whenever the wording says *partly as a constant and partly as x*, use the partial form and solve the two simultaneous equations."}
  ],
  focus:["Relations, functions and mappings","One-to-one, many-to-one and one-to-many mappings","Inverse functions","Domain and range","Ratio and proportion","Direct, inverse, joint and partial variation","Word problems on ratio and variation"],
  terms:[
    {t:"mapping", d:"a rule sending members of one set to members of another", x:"x → 2x maps 3 to 6."},
    {t:"image", d:"the member a given member is mapped onto", x:"The image of 4 under x → x² is 16."},
    {t:"one-to-one", d:"a function with a different image for each member", x:"y = 3x is one-to-one."},
    {t:"many-to-one", d:"several members sharing one image", x:"y = x² maps 2 and −2 to 4."},
    {t:"inverse function", d:"the function that reverses the mapping, written f⁻¹", x:"If f(x) = 2x, then f⁻¹(x) = x/2."},
    {t:"composite function", d:"two functions applied one after the other, written fg", x:"fg(x) = f(g(x))."},
    {t:"proportion", d:"a statement that two ratios are equal", x:"a/b = c/d."},
    {t:"direct variation", d:"y = kx, a straight line through the origin", x:"Cost varies directly as mass."},
    {t:"inverse variation", d:"y = k/x, the product staying constant", x:"Time varies inversely as speed."},
    {t:"partial variation", d:"y = kx + c, with a fixed starting value", x:"A bill has a fixed charge plus a rate per unit."}
  ],
  worked:[
    {q:"Given f(x) = 3x − 2, find f(4), f⁻¹(x) and f(2) under the composite ff.",
     steps:["f(4) = 3(4) − 2 = 10.","For the inverse, write y = 3x − 2 and make x the subject: x = (y + 2)/3.","So f⁻¹(x) = (x + 2)/3.","ff(2): f(2) = 4, then f(4) = 10."],
     a:"f(4) = 10, f⁻¹(x) = (x + 2)/3, ff(2) = 10"},
    {q:"Solve the proportion (2x + 1)/3 = (x − 4)/5.",
     steps:["Cross multiply: 5(2x + 1) = 3(x − 4).","10x + 5 = 3x − 12.","7x = −17.","x = −17/7."],
     a:"x = −17/7"},
    {q:"y varies partly as a constant and partly as x. When x = 2, y = 7; when x = 5, y = 13. Find y when x = 9.",
     steps:["Write y = c + kx.","From the data: 7 = c + 2k and 13 = c + 5k.","Subtract: 6 = 3k, so k = 2 and c = 3.","At x = 9: y = 3 + 2(9) = 21."],
     a:"y = 21"}
  ],
  drillLabel:"Mappings, ratio and variation",
  drills:[
    {id:"mapping_type_sh"},{id:"inverse_fn_sh"},{id:"composite_fn_sh"},{id:"ratio_proportion_sh"},
    {id:"direct_var_sh"},{id:"inverse_var_sh"},{id:"partial_var_sh"},{id:"joint_var_sh"}
  ],
  word:[
    {q:"A recipe for 8 people needs 300 g of flour. How much is needed for 20 people?",
     a:"300 × 20/8 = 750 g."},
    {q:"Given f(x) = x² + 1 and g(x) = 2x, find fg(3) and gf(3).",
     a:"fg(3) = f(6) = 37; gf(3) = g(10) = 20, so fg ≠ gf."},
    {q:"The pressure of a gas varies inversely as its volume. At 2 m³ the pressure is 150 kPa. Find the pressure at 5 m³.",
     a:"k = 150 × 2 = 300; P = 300/5 = 60 kPa."},
    {q:"Three traders share a profit of L$360 000 in the ratio 2 : 3 : 7. Find the largest share.",
     a:"Total parts = 12; largest = 7/12 × 360 000 = L$210 000."},
    {q:"The function f maps x → 5x − 3. Find f⁻¹(22).",
     a:"Set 5x − 3 = 22, so x = 5; f⁻¹(22) = 5."}
  ],
  challenge:[
    {q:"Explain why a many-to-one function has no inverse that is itself a function.",
     a:"Reversing the arrows sends one member back to several, which is one-to-many. A function must give a single output for each input, so the reverse fails the test."},
    {q:"If fg(x) = 6x + 5 and g(x) = 3x + 1, find f(x).",
     a:"f(3x + 1) = 6x + 5. Writing u = 3x + 1 gives x = (u − 1)/3, so f(u) = 2(u − 1) + 5 = 2u + 3; hence f(x) = 2x + 3."},
    {q:"The cost of a taxi ride is partly fixed and partly proportional to distance. Explain what the fixed part represents on the graph.",
     a:"It is the y-intercept, the cost when the distance is zero; the graph is a straight line that does not pass through the origin, which is why this is partial rather than direct variation."}
  ],
  activities:["Draw mapping diagrams for different types of relation","Find inverse functions and check them","Solve proportion problems from recipes and prices","Investigate variation in Science formulae"],
  materials:["Graph paper","Calculators","Mapping diagram charts","Whiteboard"],
  assessment:["Functions quiz","Mapping assignment","Variation test","Observation and participation"]
},

/* Period IV — Algebraic Processes */
{
  grade:12, period:"IV", sem:"Two", icon:"\uD83E\uDDEE",
  title:"Algebraic Processes",
  subtitle:"Unit XV: Expansion, factorization, algebraic fractions, equations and inequalities, and formulae",
  outcomes:["Expand and simplify algebraic expressions, factorize by common factors, grouping, trinomials, the difference of two squares and the sum and difference of two cubes, operate on and simplify algebraic fractions, substitute, solve equations and inequalities, and use formulae to solve word problems"],
  objectives:["Expand algebraic expressions by adding and subtracting like terms and by multiplication","Factorize using common factors, grouping, quadratic trinomials, the difference of two squares, and the sum and difference of two cubes","Perform the four operations on algebraic fractions and simplify them","Substitute into formulae","Solve equations and inequalities","Solve quadratic equations","Solve simultaneous linear equations","Solve simultaneous linear inequalities","Use and rearrange formulae","Solve word problems"],
  note:"This unit brings together every algebraic skill. <b>Factorization</b> has a fixed order: take out a <b>common factor</b> first, then look for a <b>difference of two squares</b>, then try a <b>trinomial</b>, and use <b>grouping</b> for four terms. Two special identities are a³ + b³ = (a + b)(a² − ab + b²) and a³ − b³ = (a − b)(a² + ab + b²). <b>Algebraic fractions</b> follow the same rules as numerical ones: factorize first, then cancel only <b>factors</b>, never single terms. When rearranging a <b>formula</b>, treat the new subject exactly as you would treat x in an equation.",

  study:[
    /* ---- course text: Semester Two, Period IV — Algebraic Processes (guide pp. 51–52) ---- */
    {k:"h3", t:"Expansion and Simplification"},
    {k:"p", t:"**Expansion** multiplies out brackets with the distributive law; **simplification** then collects like terms. For two brackets use FOIL — first, outer, inner, last — and remember the special products: **(a + b)² = a² + 2ab + b²**, **(a − b)² = a² − 2ab + b²** and **(a + b)(a − b) = a² − b²**."},
    {k:"rule"},
    {k:"h3", t:"Factorization"},
    {k:"bul", items:["**Common factor:** 6x²y + 9xy² = 3xy(2x + 3y).","**Grouping:** ax + ay + bx + by = (a + b)(x + y).","**Trinomials:** x² + 5x + 6 = (x + 2)(x + 3); 3x² + 7x + 2 = (3x + 1)(x + 2).","**Difference of two squares:** a² − b² = (a + b)(a − b).","**Sum of two cubes:** a³ + b³ = (a + b)(a² − ab + b²).","**Difference of two cubes:** a³ − b³ = (a − b)(a² + ab + b²)."]},
    {k:"p", t:"Always take out the common factor first, then look for the other patterns. **Worked example — factorize 2x³ − 18x completely:** 2x(x² − 9) = **2x(x + 3)(x − 3)**."},
    {k:"rule"},
    {k:"h3", t:"Algebraic Fractions"},
    {k:"p", t:"Algebraic fractions follow the rules for number fractions. To add or subtract, use the common denominator; to multiply, multiply numerators and denominators; to divide, multiply by the reciprocal. Simplify by factorization and cancellation — a fraction is in **lowest terms** when no common factor is left."},
    {k:"p", t:"**Worked example — simplify (x³ − 8)/(x − 2):** x³ − 8 = (x − 2)(x² + 2x + 4), so the fraction cancels to **x² + 2x + 4**."},
    {k:"rule"},
    {k:"h3", t:"Substitution into Formulas"},
    {k:"p", t:"To evaluate a **formula**, substitute the given numbers for the letters and do the arithmetic in the correct order (brackets, powers, multiply/divide, add/subtract). State the units of the answer and keep any intermediate working exact — round only at the end."},
    {k:"rule"},
    {k:"h3", t:"Equations and Inequalities"},
    {k:"p", t:"Linear equations are solved by the balance method; linear inequalities are solved the same way, except that multiplying or dividing by a negative number reverses the inequality sign. **Quadratic equations** are solved by factorization, completing the square, or the formula; **simultaneous equations** by graphs, elimination, substitution or matrices."},
    {k:"rule"},
    {k:"h3", t:"Formulae and Change of Subject"},
    {k:"p", t:"To **change the subject**, perform the inverse operations on both sides until the required letter stands alone. If the letter appears twice, collect its terms on one side and factor: to make x the subject of ax + b = cx + d, ax − cx = d − b, so x(a − c) = d − b and x = (d − b)/(a − c)."},
    {k:"p", t:"**Worked example — make t the subject of v = u + ½at²:** v − u = ½at²; 2(v − u) = at²; t² = 2(v − u)/a; **t = √[2(v − u)/a]** (take the positive root for time)."},
    {k:"rule"},
    {k:"h3", t:"Word Problems"},
    {k:"p", t:"Let the unknown be x (or a sensible letter), translate the words into an equation or inequality, solve algebraically, and check the answer in the original words. Reject solutions that are impossible in the context — negative lengths, fractional numbers of people, or values outside a stated range."}
  ],
  focus:["Expansion and simplification","Factorization: common factors, grouping, trinomials, difference of two squares, sum and difference of cubes","The four operations on algebraic fractions","Substitution into formulae","Solving equations and inequalities","Quadratic equations","Simultaneous linear equations and inequalities","Formulae and change of subject","Word problems"],
  terms:[
    {t:"expansion", d:"multiplying out brackets", x:"The expansion of (x + 2)(x − 3) is x² − x − 6."},
    {t:"common factor", d:"a factor present in every term", x:"Taking out a common factor gives 6x² + 9x = 3x(2x + 3)."},
    {t:"grouping", d:"factoring four terms in pairs", x:"Factoring by grouping pairs the four terms: ax + ay + bx + by = (a + b)(x + y)."},
    {t:"trinomial", d:"an expression with three terms, usually ax² + bx + c", x:"The trinomial x² + 5x + 6 factors as (x + 2)(x + 3)."},
    {t:"sum of two cubes", d:"a³ + b³ = (a + b)(a² − ab + b²)", x:"The sum of two cubes x³ + 8 factors as (x + 2)(x² − 2x + 4)."},
    {t:"difference of two cubes", d:"a³ − b³ = (a − b)(a² + ab + b²)", x:"The difference of two cubes x³ − 27 factors as (x − 3)(x² + 3x + 9)."},
    {t:"lowest terms", d:"a fraction with no common factor left to cancel", x:"The fraction (x² − 4)/(x + 2) reduces to lowest terms as x − 2."},
    {t:"change of subject", d:"rearranging a formula to isolate another letter", x:"The change of subject of A = πr² gives r = √(A/π)."},
    {t:"simultaneous inequalities", d:"two inequalities solved together", x:"Solving simultaneous inequalities gives the overlap of their regions."},
    {t:"formula", d:"a rule connecting quantities by letters", x:"The formula V = l × w × h connects volume with three lengths."}
  ],
  worked:[
    {q:"Factorize completely 2x³ − 18x.",
     steps:["Take out the common factor 2x: 2x(x² − 9).","x² − 9 is a difference of two squares.","x² − 9 = (x + 3)(x − 3)."],
     a:"2x(x + 3)(x − 3)"},
    {q:"Factorize x³ − 8 and simplify (x³ − 8)/(x − 2).",
     steps:["Use the difference of two cubes with a = x and b = 2.","x³ − 8 = (x − 2)(x² + 2x + 4).","Cancel the common factor (x − 2)."],
     a:"x³ − 8 = (x − 2)(x² + 2x + 4), and the fraction simplifies to x² + 2x + 4"},
    {q:"Make t the subject of v = u + ½at².",
     steps:["Subtract u: v − u = ½at².","Multiply by 2: 2(v − u) = at².","Divide by a: t² = 2(v − u)/a.","Take the positive square root: t = √[2(v − u)/a]."],
     a:"t = √[2(v − u)/a]"}
  ],
  drillLabel:"Algebraic processes",
  drills:[
    {id:"expand_binom_sh"},{id:"factor_quad_sh"},{id:"factor_common_sh"},{id:"factor_cubes_sh"},
    {id:"algebra_frac_sh"},{id:"change_subject_sh"},{id:"solve_ineq_sh"},{id:"simul_elim_sh"},
    {id:"substitution_sh"}
  ],
  word:[
    {q:"The area of a rectangle is (6x² + 7x − 20) cm². Factorize to find expressions for its length and width.",
     a:"6x² + 7x − 20 = (2x + 5)(3x − 4), so the sides are (2x + 5) cm and (3x − 4) cm."},
    {q:"Given that S = n/2 (a + l), find l when S = 210, n = 12 and a = 5.",
     a:"210 = 6(5 + l), so 5 + l = 35 and l = 30."},
    {q:"Simplify (x² − 9)/(x² + 7x + 12).",
     a:"(x + 3)(x − 3)/(x + 3)(x + 4) = (x − 3)/(x + 4)."},
    {q:"Find the values of x for which 2x − 3 > 0 and x + 4 ≤ 9 are both true.",
     a:"x > 1.5 and x ≤ 5, so 1.5 < x ≤ 5."},
    {q:"The sum of the squares of two consecutive integers is 365. Find them.",
     a:"n² + (n + 1)² = 365 gives 2n² + 2n − 364 = 0, n² + n − 182 = 0, (n + 14)(n − 13) = 0; n = 13, so 13 and 14."}
  ],
  challenge:[
    {q:"Explain why (a + b)² is not equal to a² + b² and show the error on a small example.",
     a:"Expanding gives a² + 2ab + b²; the middle term is often forgotten. With a = 3 and b = 4: (3 + 4)² = 49 but 9 + 16 = 25, and the difference is the missing 2ab = 24."},
    {q:"Show that x³ + y³ + z³ − 3xyz = (x + y + z)(x² + y² + z² − xy − yz − zx).",
     a:"Expand the right-hand side: each square term appears once and each mixed term appears twice with opposite signs, leaving exactly x³ + y³ + z³ − 3xyz."},
    {q:"Why must you check the solutions of an equation containing algebraic fractions in the original equation?",
     a:"Because multiplying through by an expression containing x can introduce a value that makes a denominator zero. Such a value satisfies the cleared equation but not the original one."}
  ],
  activities:["Race to factorize using the correct first step","Rearrange formulae from Physics and Chemistry","Simplify algebraic fractions and check by substitution","Solve paired inequalities and show the overlap"],
  materials:["Whiteboard","Calculators","Formula sheets","Card matching sets"],
  assessment:["Factorization quiz","Fractions assignment","Formulae test","Observation and participation"]
}
,

/* Period V — Linear Equations, Inequalities and Quadratic Equations */
{
  grade:12, period:"V", sem:"Two", icon:"\uD83D\uDDFA\uFE0F",
  title:"Linear Equations, Inequalities and Quadratic Equations",
  subtitle:"Unit XVI: Graphing and solving equations and inequalities, the quadratic formula, matrices, and linear programming",
  outcomes:["Substitute and change the subject of formulae, graph and solve linear equations and inequalities, solve quadratic equations by factorization, completing the square and the formula, solve simultaneous equations by graphs, elimination, substitution and matrices, graph inequalities to find the solution region, and solve linear programming problems"],
  objectives:["Substitute and change the subject using formulae","Graph and solve linear equations and inequalities","Solve quadratic equations by factorization, by completing the square and using the formula","Solve simultaneous equations by graphs, elimination, substitution and matrices","Graph one linear inequality and determine the solution region","Graph two linear inequalities and determine the common solution region","Solve linear programming problems and analyse them","Form word problems on linear equations, inequalities and quadratic equations and solve them"],
  note:"Graphing an inequality shades a <b>region</b> rather than a line: for y > mx + c shade above the line and use a dashed line, for y ≤ mx + c shade below and use a solid line. When two inequalities are drawn together the <b>required region</b> is where the shading overlaps. <b>Linear programming</b> uses this idea: an <b>objective function</b> such as P = 3x + 2y is evaluated at each <b>corner</b> of the feasible region, and the best value always occurs at a corner. A pair of simultaneous equations can also be written as a <b>matrix equation</b> AX = B and solved with the inverse matrix, giving the same answer as elimination or substitution.",

  study:[
    /* ---- course text: Semester Two, Period V — Linear Equations, Inequalities and Quadratic Equations (guide p. 53) ---- */
    {k:"h3", t:"Substitution and Change of Subject"},
    {k:"p", t:"Every equation problem begins with **substitution** — replacing a letter by a number or expression — and often ends with **changing the subject**, isolating the wanted letter. The algebra is the same: do the same thing to both sides, and if the letter appears twice, collect and factor it."},
    {k:"rule"},
    {k:"h3", t:"Graphing Linear Equations"},
    {k:"p", t:"Draw y = mx + c from a table of values, or from the intercept form: mark the y-intercept c and use the gradient m (rise over run) to find a second point, then join. With three points on the line, the third checks the drawing. The point where the line crosses the x-axis is the root of the equation mx + c = 0."},
    {k:"rule"},
    {k:"h3", t:"Graphing Inequalities and the Solution Region"},
    {k:"p", t:"An inequality in two variables describes a **half-plane**: draw the boundary line (solid for ≤ or ≥, dashed for < or >), then test a point not on the line — often the origin — to decide which side to shade. The shaded region is every point satisfying the inequality."},
    {k:"rule"},
    {k:"h3", t:"The Feasible Region of Two Inequalities"},
    {k:"p", t:"Shade the region that satisfies **all** the constraints together — usually where the individual shaded half-planes overlap. The region's boundary is made of segments of the constraint lines, and its corners (vertices) are where two boundaries meet. The simultaneous equations of the crossing lines give each vertex."},
    {k:"rule"},
    {k:"h3", t:"Linear Programming and the Objective Function"},
    {k:"p", t:"**Linear programming** maximizes or minimizes an **objective function** (such as profit or cost) under **constraints** written as inequalities. Steps: define the variables; write the constraints; graph them and shade the **feasible region**; evaluate the objective function at each corner point; choose the best value. The optimum always occurs at a corner of the feasible region."},
    {k:"p", t:"**Worked example — a farmer has 40 m of fencing for a rectangular pen beside a wall, so only three sides need fencing:** let the width be x, so the length is 40 − 2x; area A = x(40 − 2x) = 40x − 2x² = −2(x − 10)² + 200; the greatest area is **200 m²** at x = 10 (width 10 m, length 20 m)."},
    {k:"rule"},
    {k:"h3", t:"Quadratic Equations by Three Methods"},
    {k:"bul", items:["**Factorization** — write as two brackets and set each factor to zero; fastest when it works.","**Completing the square** — a(x + h)² + k = 0, showing the turning point as well.","**The quadratic formula** — x = (−b ± √(b² − 4ac))/2a, always works; the discriminant b² − 4ac tells the number of real roots."]},
    {k:"p", t:"**Worked example — solve x² − 5x − 3 = 0 to 2 decimal places:** a = 1, b = −5, c = −3; discriminant = 25 + 12 = 37; x = (5 ± √37)/2 ≈ (5 ± 6.08)/2, so **x ≈ 5.54 or x ≈ −0.54**."},
    {k:"rule"},
    {k:"h3", t:"Simultaneous Equations by Graphs, Elimination, Substitution and Matrices"},
    {k:"p", t:"Graphs show the solution as the intersection of two lines; elimination adds or subtracts after matching coefficients; substitution replaces one letter by an expression from the other equation. **Matrices** solve the system AX = B by **X = A⁻¹B**, where for [[a, b],[c, d]] the determinant is ad − bc and A⁻¹ = 1/(ad − bc) × [[d, −b],[−c, a]]. The determinant must not be zero — if it is, the equations are not independent (parallel or identical lines)."},
    {k:"p", t:"**Worked example — solve 2x + 3y = 12 and x − y = 1 by matrices:** determinant = (2)(−1) − (3)(1) = −5; A⁻¹ = (−1/5)[[−1, −3], [−1, 2]]; x = [(−1)(12) + (−3)(1)]/(−5) = 15/5 = **3** and y = [(−1)(12) + (2)(1)]/(−5) = 10/5 = **2**."},
    {k:"rule"},
    {k:"h3", t:"Word Problems"},
    {k:"p", t:"Form the equations from the conditions, solve them, and check the answers in the original wording — a solution that satisfies the algebra but is impossible in the problem must be rejected."}
  ],
  focus:["Substitution and change of subject","Graphing linear equations","Graphing inequalities and the solution region","The feasible region of two inequalities","Linear programming and the objective function","Quadratic equations by three methods","Simultaneous equations by graphs, elimination, substitution and matrices","Word problems"],
  terms:[
    {t:"inequality region", d:"the shaded half-plane that satisfies an inequality", x:"y ≥ 2x + 1 shades above the line."},
    {t:"feasible region", d:"the region satisfying all the constraints together", x:"The overlap of all the shaded areas."},
    {t:"constraint", d:"a restriction written as an inequality", x:"x + y ≤ 20."},
    {t:"objective function", d:"the quantity to be maximized or minimized", x:"P = 3x + 2y."},
    {t:"corner point", d:"a vertex of the feasible region", x:"The optimum value occurs at a corner."},
    {t:"matrix", d:"a rectangular array of numbers", x:"A 2 × 2 matrix has four entries."},
    {t:"determinant", d:"ad − bc for the matrix [[a, b], [c, d]]", x:"A zero determinant means no unique solution."},
    {t:"inverse matrix", d:"the matrix that multiplies with A to give the identity", x:"X = A⁻¹B."},
    {t:"completing the square", d:"rewriting a quadratic to show its turning point", x:"x² + 6x = (x + 3)² − 9."},
    {t:"quadratic formula", d:"x = (−b ± √(b² − 4ac))/2a", x:"It works for every quadratic equation."}
  ],
  worked:[
    {q:"Solve by matrices: 2x + 3y = 12 and x − y = 1.",
     steps:["Write as AX = B with A = [[2, 3], [1, −1]] and B = (12, 1).","Determinant = (2)(−1) − (3)(1) = −5.","A⁻¹ = (1/−5)[[−1, −3], [−1, 2]].","Multiply: x = [(−1)(12) + (−3)(1)]/(−5) = 15/5 = 3.","y = [(−1)(12) + (2)(1)]/(−5) = 10/5 = 2."],
     a:"x = 3, y = 2"},
    {q:"Solve x² − 5x − 3 = 0 using the quadratic formula, giving answers to 2 decimal places.",
     steps:["a = 1, b = −5, c = −3.","Discriminant = 25 + 12 = 37.","x = (5 ± √37)/2.","√37 ≈ 6.08, so x ≈ 5.54 or x ≈ −0.54."],
     a:"x ≈ 5.54 or x ≈ −0.54"},
    {q:"A farmer has 40 m of fencing for a rectangular pen beside a wall, so only three sides need fencing. Find the greatest possible area.",
     steps:["Let the width be x, so the length is 40 − 2x.","Area A = x(40 − 2x) = 40x − 2x².","Complete the square: A = −2(x − 10)² + 200.","The maximum is 200 when x = 10."],
     a:"The greatest area is 200 m² with a width of 10 m and a length of 20 m"}
  ],
  drillLabel:"Equations, inequalities and programming",
  drills:[
    {id:"solve_linear_sh"},{id:"solve_ineq_sh"},{id:"inequality_region_sh"},{id:"linear_program_sh"},
    {id:"quad_formula_sh"},{id:"simul_matrix_sh"},{id:"simul_elim_sh"},{id:"change_subject_sh"}
  ],
  word:[
    {q:"A trader sells rice at L$150 per kg and beans at L$200 per kg. She has L$30 000 and can carry at most 180 kg. Write two inequalities showing the constraints.",
     a:"150x + 200y ≤ 30 000 and x + y ≤ 180, with x ≥ 0 and y ≥ 0."},
    {q:"Using the constraints above, if the profit is L$20 per kg of rice and L$30 per kg of beans, find the corner giving the greatest profit.",
     a:"The corners are (0, 0), (180, 0), (0, 150) and (120, 60); profits are 0, 3 600, 4 500 and 4 200, so the greatest is L$4 500 with 150 kg of beans only."},
    {q:"Solve 3x² − 7x + 2 = 0 by factorization and by the formula, and check that both agree.",
     a:"(3x − 1)(x − 2) = 0 gives x = 1/3 or 2; the formula gives (7 ± 5)/6 = 2 or 1/3. Both agree."},
    {q:"Shade the region satisfying y ≤ x + 2 and y ≥ 2x − 4 and x ≥ 0. Find the point where the two lines meet.",
     a:"x + 2 = 2x − 4 gives x = 6, so the lines meet at (6, 8)."},
    {q:"Make h the subject of A = ½(a + b)h and find h when A = 60, a = 7 and b = 13.",
     a:"h = 2A/(a + b) = 120/20 = 6."}
  ],
  challenge:[
    {q:"Explain why the maximum of a linear objective function over a polygonal region always occurs at a corner.",
     a:"The level lines of the objective function are parallel straight lines. As you slide such a line in the improving direction, the last point of contact with the region must be a vertex; along an edge the value is constant or changing steadily."},
    {q:"When does a pair of simultaneous linear equations have no solution in terms of its matrix?",
     a:"When the determinant ad − bc is zero. Then the matrix has no inverse, the two lines are parallel and there is no point satisfying both equations."},
    {q:"Why is completing the square useful even when the quadratic formula is available?",
     a:"Because it gives the turning point and the axis of symmetry directly, which the formula alone does not show, and it is how the formula itself is derived."}
  ],
  activities:["Shade feasible regions for real constraints","Evaluate objective functions at corner points","Solve the same simultaneous equations three ways","Complete the square to find maximum areas"],
  materials:["Graph paper","Rulers","Calculators","Whiteboard"],
  assessment:["Equations quiz","Linear programming assignment","Quadratic formula test","Observation and participation"]
},

/* Period V — Vector and Trigonometry */
{
  grade:12, period:"V", sem:"Two", icon:"\uD83E\uDDED",
  title:"Vector and Trigonometry",
  subtitle:"Unit XVII: Vectors in component form, resolution, static equilibrium, and trigonometry applied to vectors and circles",
  outcomes:["Represent vectors graphically and in component form, determine magnitude and direction, add, subtract and multiply vectors, resolve a resultant into components, solve static equilibrium problems, apply trigonometry to vectors, and calculate lengths of objects and angles inscribed in a circle"],
  objectives:["Represent a vector graphically, using ordered pairs and vector notation","Determine the magnitude and direction of a given vector","Add and subtract two given vectors vectorially","Multiply a vector by a scalar and a vector by a vector","Resolve a resultant vector into its component vectors","Solve problems that involve vector addition and subtraction","Solve static equilibrium problems","Multiply vectors by a scalar product","Apply the use of trigonometry and unit vectors","Calculate the position vectors and lengths of objects","Determine the magnitude and direction of a vector from its components","Work with objects in static equilibrium","Calculate the lengths of objects and angles inscribed in a circle"],
  note:"A vector written in <b>components</b> as (x, y) has magnitude √(x² + y²) and direction tan⁻¹(y/x). <b>Resolution</b> is the reverse of addition: a vector of magnitude R at angle θ splits into R cos θ horizontally and R sin θ vertically. The <b>scalar (dot) product</b> a·b = |a||b| cos θ gives a number, not a vector, and is zero when the vectors are perpendicular. In <b>static equilibrium</b> the resultant force is zero, so the horizontal components cancel and the vertical components cancel. Trigonometry links vectors to <b>bearings</b> and to <b>circles</b>, where the angle at the centre is twice the angle at the circumference.",

  study:[
    /* ---- course text: Semester Two, Period V — Vector and Trigonometry (guide pp. 54–55) ---- */
    {k:"h3", t:"Vectors in Component Form"},
    {k:"p", t:"A vector can be written in **component form** as a column vector (x, y) or as **xi + yj**, where i and j are the unit vectors along the x- and y-axes. The components give the horizontal and vertical changes. The **position vector** of a point P is the vector from the origin to P, and a **column vector** a = (3, 4) means 3 across and 4 up."},
    {k:"rule"},
    {k:"h3", t:"Magnitude and Direction from Components"},
    {k:"p", t:"If a = (x, y), then the **magnitude** is **|a| = √(x² + y²)** and the **direction** is given by **tan θ = y/x**, where θ is the angle with the horizontal. A vector with magnitude 1 is a **unit vector**; to make a unit vector in the direction of a, divide a by |a|."},
    {k:"p", t:"**Worked example — a = (6, 8):** |a| = √(36 + 64) = **10**; tan θ = 8/6, so θ = **53.1°** to the horizontal."},
    {k:"rule"},
    {k:"h3", t:"Vector Addition and Subtraction"},
    {k:"p", t:"Add or subtract vectors by their components: a + b = (x₁ + x₂, y₁ + y₂) and a − b = (x₁ − x₂, y₁ − y₂). Geometrically, add **tip to tail**; the resultant runs from the start of the first to the tip of the last. Subtraction a − b is adding the negative of b, so it can be read as the vector from b's tip to a's tip."},
    {k:"rule"},
    {k:"h3", t:"Scalar Multiplication and the Scalar Product"},
    {k:"p", t:"**Scalar multiplication** stretches a vector: ka = (kx, ky). The **scalar product** (dot product) of two vectors is a **number**: **a·b = x₁x₂ + y₁y₂ = |a||b| cos θ**. A positive scalar product means the angle between the vectors is acute, a negative one means obtuse, and a zero scalar product means the vectors are **perpendicular** — the test is the same whatever the lengths."},
    {k:"p", t:"**Worked example — a = (3, 4), b = (2, −1):** a·b = 3(2) + 4(−1) = 6 − 4 = **2**; positive, so the angle between them is acute."},
    {k:"rule"},
    {k:"h3", t:"Resolving a Vector into Components"},
    {k:"p", t:"A vector of magnitude v making angle θ with the horizontal has components **v cos θ horizontally** and **v sin θ vertically**. This is **resolution**, the reverse of adding components, and it is used to break a force, velocity or displacement into the two directions that matter."},
    {k:"p", t:"**Worked example — a force of 50 N at 30° above the horizontal:** horizontal = 50 cos 30° ≈ **43.3 N**, vertical = 50 sin 30° = **25 N**."},
    {k:"rule"},
    {k:"h3", t:"Static Equilibrium"},
    {k:"p", t:"A body is in **static equilibrium** when it is at rest: the **resultant force is zero**, so the vector sum of all forces is the zero vector. Resolve each force into horizontal and vertical components, add the components in each direction, and set both sums to zero. The equations then find the unknown force or angle."},
    {k:"p", t:"**Worked example — forces of 8 N and 6 N at right angles:** the resultant is √(8² + 6²) = √100 = **10 N**, at tan⁻¹(6/8) = **36.9°** to the 8 N force. To balance it, a third force of 10 N in the opposite direction is needed."},
    {k:"rule"},
    {k:"h3", t:"Trigonometry Applied to Vectors"},
    {k:"p", t:"Vector problems use trigonometry constantly: find the components with sine and cosine, the magnitude by Pythagoras, the direction by an inverse tangent, and the angle between two vectors by the scalar product. A **bearing** is a direction measured clockwise from north, so a vector of magnitude v on bearing θ has components v sin θ east and v cos θ north."},
    {k:"rule"},
    {k:"h3", t:"Lengths and Angles in a Circle"},
    {k:"p", t:"The same trigonometry solves circle geometry: the **angle at the centre** is twice the angle at the circumference on the same arc; the angle in a semicircle is 90°; angles in the same segment are equal; opposite angles of a cyclic quadrilateral add to 180°; the tangent is perpendicular to the radius. Use them to find angles, then the ratio formulas of trigonometry to find lengths in the right triangles."}
  ],
  focus:["Vectors in component form and vector notation","Magnitude and direction from components","Vector addition and subtraction","Scalar multiplication and the scalar product","Resolving a vector into components","Static equilibrium","Trigonometry applied to vectors","Lengths and angles in a circle"],
  terms:[
    {t:"component", d:"one of the perpendicular parts of a vector", x:"(6, 8) has components 6 and 8."},
    {t:"resolution", d:"splitting a vector into perpendicular components", x:"R cos θ and R sin θ."},
    {t:"resultant", d:"the single vector equal to the sum of several vectors", x:"The resultant of the two forces."},
    {t:"scalar product", d:"a·b = |a||b| cos θ, giving a number", x:"It is zero for perpendicular vectors."},
    {t:"unit vector", d:"a vector of magnitude 1 in a given direction", x:"a/|a| is a unit vector."},
    {t:"position vector", d:"the vector from the origin to a point", x:"The position vector of (3, 4) is (3, 4)."},
    {t:"static equilibrium", d:"a state in which the resultant force is zero", x:"The forces balance in both directions."},
    {t:"magnitude", d:"the length of a vector", x:"√(x² + y²)."},
    {t:"bearing", d:"a direction measured clockwise from north", x:"Used to resolve a course into north and east parts."},
    {t:"angle at the centre", d:"the angle subtended at the centre of a circle", x:"It is twice the angle at the circumference."}
  ],
  worked:[
    {q:"A force of 50 N acts at 30° above the horizontal. Resolve it into horizontal and vertical components.",
     steps:["Horizontal = 50 cos 30° = 50 × 0.8660.","Horizontal ≈ 43.3 N.","Vertical = 50 sin 30° = 50 × 0.5.","Vertical = 25 N."],
     a:"43.3 N horizontally and 25 N vertically"},
    {q:"Find the scalar product of a = (3, 4) and b = (2, −1), and say what it tells you.",
     steps:["a·b = x₁x₂ + y₁y₂.","= 3(2) + 4(−1).","= 6 − 4 = 2.","A positive value means the angle between them is acute."],
     a:"a·b = 2, so the angle between them is acute"},
    {q:"Two forces of 8 N and 6 N act at right angles on a body. Find the resultant and its direction.",
     steps:["Resultant R = √(8² + 6²) = √100 = 10 N.","tan θ = 6/8 = 0.75.","θ = 36.9° from the 8 N force."],
     a:"10 N at 36.9° to the 8 N force"}
  ],
  drillLabel:"Vectors and trigonometry",
  drills:[
    {id:"vector_components_sh"},{id:"vector_magnitude_sh"},{id:"vector_add_sh"},{id:"scalar_product_sh"},
    {id:"equilibrium_sh"},{id:"vector_bearing_sh"},{id:"circle_angle_sh"}
  ],
  word:[
    {q:"A boat heads due north at 12 km/h while a current pushes it east at 5 km/h. Find its resultant velocity and its bearing.",
     a:"R = √(144 + 25) = 13 km/h; tan θ = 5/12, θ = 22.6° east of north, so the bearing is 023°."},
    {q:"Three forces of 5 N east, 12 N north and 13 N south-west act on a body at rest. Find whether it is in equilibrium.",
     a:"Resolve the 13 N force: 13 cos 45° ≈ 9.19 N west and 9.19 N south. Horizontal: 5 − 9.19 ≠ 0, so the forces do not balance and the body is not in equilibrium."},
    {q:"Find the angle between the vectors (1, 0) and (1, 1).",
     a:"a·b = 1; |a| = 1 and |b| = √2, so cos θ = 1/√2 and θ = 45°."},
    {q:"A rope pulls a sledge with 200 N at 25° to the horizontal. Find the force actually pulling it forward.",
     a:"200 cos 25° = 200 × 0.9063 ≈ 181.3 N."},
    {q:"An angle at the centre of a circle is 130°. Find the angle subtended at the circumference in the same segment, and the angle in the alternate segment of the major arc.",
     a:"The angle at the circumference is 130 ÷ 2 = 65°; the angle in the alternate segment is 180 − 65 = 115°."}
  ],
  challenge:[
    {q:"Explain why the scalar product of two perpendicular vectors is always zero.",
     a:"a·b = |a||b| cos θ and cos 90° = 0, so the whole product is zero. This gives a quick test for perpendicularity without drawing anything."},
    {q:"A picture of weight W hangs from two strings making equal angles θ with the ceiling. Show that the tension in each string is W/(2 sin θ).",
     a:"By symmetry the tensions are equal. Resolving vertically, the two upward components must total W, so 2T sin θ = W and T = W/(2 sin θ)."},
    {q:"Why does the tension in the strings of the hanging picture become very large as θ becomes small?",
     a:"Because T = W/(2 sin θ) and sin θ approaches zero as θ becomes small, so the denominator shrinks and the tension grows without limit. The strings must be nearly vertical to carry the weight efficiently."}
  ],
  activities:["Resolve forces with spring balances","Draw vectors from bearings on squared paper","Investigate equilibrium with a force board","Find angles in circles by construction"],
  materials:["Spring balances","Force boards","Squared paper","Protractors"],
  assessment:["Vector quiz","Resolution assignment","Equilibrium test","Practical observation"]
},

/* Period V — Transformations */
{
  grade:12, period:"V", sem:"Two", icon:"\uD83D\uDD04",
  title:"Transformations",
  subtitle:"Unit XVIII: Movement and congruence, transformations and coordinates, reflection, similarity and translation",
  outcomes:["Define and discuss transformation using the concepts of movement, congruence and similarity, find the coordinates of transformations, and define, discuss and apply reflection, similarity and translation"],
  objectives:["Define and discuss transformation using the concept of movement, congruence and similarity","Find the coordinates of transformations","Define, discuss and apply the concept of reflection","Define, discuss and apply the concepts of similarity","Define, discuss and apply the concept of translation","Describe combined transformations"],
  note:"A <b>transformation</b> is any rule that maps every point of a figure to a new position. <b>Congruent</b> transformations — translation, reflection and rotation — keep size and shape, while <b>similarity</b> transformations keep shape but change size. In coordinates the rules are simple: <b>translation</b> adds a vector, (x, y) → (x + a, y + b); <b>reflection</b> in the y-axis gives (−x, y), in the x-axis gives (x, −y) and in y = x gives (y, x); <b>rotation</b> of 90° anticlockwise about the origin gives (−y, x) and of 180° gives (−x, −y); <b>enlargement</b> of scale factor k gives (kx, ky). <b>Combining</b> transformations means applying one after the other, and the order usually changes the result.",

  study:[
    /* ---- course text: Semester Two, Period V — Transformations (guide p. 56) ---- */
    {k:"h3", t:"Movement, Congruence and Similarity"},
    {k:"p", t:"A **transformation** is a rule mapping every point of a figure to a new position. An **image** is the figure produced and the **object** is the original. A transformation that keeps size and shape is a **congruence** (translation, reflection, rotation); one that keeps shape but changes size is a **similarity** (enlargement). An **invariant point** is a point that stays where it is — the centre of rotation or the points on a mirror line."},
    {k:"rule"},
    {k:"h3", t:"Transformations Described by Coordinates"},
    {k:"p", t:"Each transformation has a coordinate rule. Reflection in the x-axis: (x, y) → (x, −y); in the y-axis: (x, y) → (−x, y); in y = x: (x, y) → (y, x). Rotation 90° anticlockwise about the origin: (x, y) → (−y, x); 180°: (x, y) → (−x, −y). Translation by vector (a, b): (x, y) → (x + a, y + b). Enlargement by k from the origin: (x, y) → (kx, ky)."},
    {k:"p", t:"**Worked example — P(3, −2) reflected in the x-axis then translated by (−1, 4):** reflection gives P′ = (3, 2); translation gives (3 − 1, 2 + 4) = **(2, 6)**."},
    {k:"rule"},
    {k:"h3", t:"Reflection"},
    {k:"p", t:"A **reflection** flips the figure in a **mirror line**; each point and its image are equidistant from the line and the joining segment is perpendicular to it. Points on the mirror line are invariant, and the reflection is its own inverse — reflecting twice returns the original figure."},
    {k:"rule"},
    {k:"h3", t:"Rotation and its Coordinate Rules"},
    {k:"p", t:"A **rotation** turns the figure about a fixed **centre** through an **angle** and **direction**. Describing one requires all three. About the origin, 90° anticlockwise maps (x, y) to (−y, x), 90° clockwise maps it to (y, −x), and 180° maps it to (−x, −y). About another centre, subtract the centre, rotate, then add it back."},
    {k:"p", t:"**Worked example — A(2, 5):** rotated 90° anticlockwise about the origin, A′ = (−5, 2); rotated 180°, A″ = (−2, −5)."},
    {k:"rule"},
    {k:"h3", t:"Translation as a Vector"},
    {k:"p", t:"A **translation** slides every point the same distance in the same direction, and is described by a vector. There is no turning or flipping, and a translation has no invariant points unless the vector is zero. Two translations combine by adding their vectors."},
    {k:"rule"},
    {k:"h3", t:"Enlargement and Scale Factor"},
    {k:"p", t:"An **enlargement** needs a **centre** and a **scale factor**; every length is multiplied by k. A positive scale factor keeps the image on the same side of the centre as the object; a negative one puts it on the opposite side. With the centre at the origin, the rule is (x, y) → (kx, ky); with any centre, (x, y) → centre + k[(x, y) − centre]."},
    {k:"p", t:"**Worked example — (2, 3) maps to (−6, −9):** −6 = −3 × 2 and −9 = −3 × 3, so this is an **enlargement, centre the origin, scale factor −3**."},
    {k:"rule"},
    {k:"h3", t:"Combined Transformations"},
    {k:"p", t:"Apply transformations in the order given, mapping each image on to the next. A combination is usually another single transformation: a translation followed by a translation is a translation; two reflections in parallel lines give a translation; two reflections in intersecting lines give a rotation; some combinations give a glide or an enlargement. To describe the single transformation, test the image of two or three points and compare."}
  ],
  focus:["Movement, congruence and similarity","Transformations described by coordinates","Reflection in the axes and in y = x","Rotation and its coordinate rules","Translation as a vector","Enlargement and scale factor","Combined transformations"],
  terms:[
    {t:"transformation", d:"a rule mapping every point of a figure to a new position", x:"A reflection is one kind of transformation."},
    {t:"congruence", d:"same size and same shape", x:"Translation, reflection and rotation all preserve congruence."},
    {t:"similarity", d:"same shape but different size", x:"Enlargement produces similarity between the object and its image."},
    {t:"image", d:"the figure produced by a transformation", x:"A′B′C′ is the image of triangle ABC."},
    {t:"object", d:"the original figure before transformation", x:"Triangle ABC is the object and A′B′C′ its image."},
    {t:"reflection", d:"flipping a figure in a mirror line", x:"A reflection in the y-axis changes (2, 5) to (−2, 5)."},
    {t:"translation", d:"sliding a figure by a vector without turning it", x:"A translation of (4, −1) moves a point 4 right and 1 down."},
    {t:"rotation", d:"turning a figure about a fixed centre", x:"A rotation of 90° anticlockwise maps (2, 5) to (−5, 2)."},
    {t:"enlargement", d:"multiplying every length by a scale factor", x:"An enlargement of scale factor 3 triples every length."},
    {t:"invariant point", d:"a point that stays where it is", x:"The centre of rotation is an invariant point."}
  ],
  worked:[
    {q:"The point P(3, −2) is reflected in the x-axis and the image is then translated by (−1, 4). Find the final image.",
     steps:["Reflection in the x-axis changes the sign of y: P′ = (3, 2).","Add the translation vector: (3 + (−1), 2 + 4).","Final image = (2, 6)."],
     a:"(2, 6)"},
    {q:"Find the image of A(2, 5) under a rotation of 90° anticlockwise about the origin, and under a rotation of 180°.",
     steps:["For 90° anticlockwise, (x, y) → (−y, x), so A′ = (−5, 2).","For 180°, (x, y) → (−x, −y), so A″ = (−2, −5)."],
     a:"A′ = (−5, 2) and A″ = (−2, −5)"},
    {q:"Describe fully the single transformation that maps (2, 3) to (−6, −9).",
     steps:["Compare the coordinates: −6 = −3 × 2 and −9 = −3 × 3.","Both coordinates are multiplied by −3.","This is an enlargement with a negative scale factor."],
     a:"An enlargement, centre the origin, scale factor −3"}
  ],
  drillLabel:"Transformations",
  drills:[
    {id:"translate_pt_sh"},{id:"reflect_pt_sh"},{id:"rotate_pt_sh"},{id:"enlarge_pt_sh"},
    {id:"combined_transform_sh"},{id:"describe_transform_sh"}
  ],
  word:[
    {q:"A triangle has vertices (1, 2), (4, 2) and (2, 5). Find the image after a translation of (3, −4).",
     a:"(4, −2), (7, −2) and (5, 1)."},
    {q:"The point (5, −3) is reflected in the line y = x and then enlarged from the origin with scale factor 2. Find the final image.",
     a:"Reflection gives (−3, 5); enlargement gives (−6, 10)."},
    {q:"Describe the single transformation equivalent to a reflection in the y-axis followed by a reflection in the x-axis.",
     a:"(x, y) → (−x, y) → (−x, −y), which is a rotation of 180° about the origin."},
    {q:"A shape of area 12 cm² is enlarged with scale factor 2.5. Find the area of the image.",
     a:"Area factor = 2.5² = 6.25; area = 12 × 6.25 = 75 cm²."},
    {q:"Find the image of (4, 1) under a rotation of 270° anticlockwise about the origin.",
     a:"270° anticlockwise is the same as 90° clockwise, which maps (x, y) to (y, −x); the image is (1, −4)."}
  ],
  challenge:[
    {q:"Explain why the order matters when combining a translation with an enlargement from the origin.",
     a:"Enlargement multiplies coordinates, so translating first and then enlarging scales the translation as well. The two orders give different images unless the scale factor is 1."},
    {q:"A transformation maps (x, y) to (x + 3, −y + 2). Describe it as a combination of two simpler transformations.",
     a:"A reflection in the x-axis, (x, y) → (x, −y), followed by a translation of (3, 2)."},
    {q:"Which transformations leave the area of a figure unchanged, and why?",
     a:"Translation, reflection and rotation, because they are congruence transformations: every length and angle is preserved, so the area cannot change. Only enlargement changes area, by the factor k²."}
  ],
  activities:["Transform shapes on coordinate grids","Describe transformations from pairs of points","Investigate combined transformations","Design patterns using translations and reflections"],
  materials:["Coordinate grids","Tracing paper","Mirrors","Rulers"],
  assessment:["Transformation quiz","Coordinate assignment","Description test","Observation and participation"]
},

/* Period V — Plane Geometry */
{
  grade:12, period:"V", sem:"Two", icon:"\uD83D\uDCCD",
  title:"Plane Geometry",
  subtitle:"Unit XIX: Polygons, triangles, quadrilaterals, circle theorems and tangents",
  outcomes:["Define and discuss polygons and regular polygons, name polygons by their sides, determine interior and exterior angles, solve problems on polygons, triangles and quadrilaterals, discuss the tangent to a circle and solve problems relating to it"],
  objectives:["Define and discuss polygons","Define and discuss regular polygons and their properties","Name and define polygons according to their sides","Determine the interior and exterior angles of polygons and regular polygons","Find the sum of the interior angles of a polygon","Find the sum of the exterior angles of a polygon","Solve problems on polygons","Define and discuss isosceles, scalene and equilateral triangles","Solve problems on these triangles","Define four quadrilaterals and discuss their properties","Solve problems on quadrilaterals","Discuss angles and triangles inscribed in a circle and state the circle theorems","Discuss the concept of a tangent to a circle and state the relevant properties","Solve problems relating to a line tangent to a circle"],
  note:"A <b>polygon</b> is a closed plane figure with straight sides; if all its sides and angles are equal it is <b>regular</b>. Cutting an n-sided polygon into triangles from one vertex gives n − 2 triangles, so the <b>interior angles sum to (n − 2) × 180°</b>, while the <b>exterior angles always sum to 360°</b>. Triangles are classified by their sides: <b>equilateral</b> (three equal), <b>isosceles</b> (two equal, with equal base angles) and <b>scalene</b> (no two equal). The special <b>quadrilaterals</b> — parallelogram, rectangle, rhombus, square, kite and trapezium — each have their own diagonal and angle properties. The <b>circle theorems</b> cover angles at the centre and circumference, the angle in a semicircle, cyclic quadrilaterals and the angle between a tangent and a chord.",

  study:[
    /* ---- course text: Semester Two, Period V — Plane Geometry (guide pp. 57–59) ---- */
    {k:"h3", t:"Polygons and Regular Polygons"},
    {k:"p", t:"A **polygon** is a closed figure with straight sides; a **regular polygon** has all sides and all angles equal. The **interior angles of an n-sided polygon add to (n − 2) × 180°**, and the exterior angles (one at each vertex, made by producing each side) **always add to 360°**. A **diagonal** joins two non-adjacent vertices; an n-sided polygon has n(n − 3)/2 diagonals."},
    {k:"p", t:"**Worked example — a decagon:** interior sum = (10 − 2) × 180° = **1 440°**; each interior angle of a regular decagon = 1 440 ÷ 10 = **144°**; check: exterior angle = 36° and 10 × 36 = 360°."},
    {k:"rule"},
    {k:"h3", t:"Triangles"},
    {k:"bul", items:["**Isosceles** — two equal sides and two equal base angles.","**Scalene** — no equal sides, no equal angles.","**Equilateral** — three equal sides, three 60° angles.","**Right-angled** — one 90° angle; Pythagoras, c² = a² + b², gives the third side."]},
    {k:"p", t:"The angles of a triangle add to 180°; the exterior angle equals the sum of the two opposite interior angles; two triangles are congruent when one of SSS, SAS, ASA or RHS holds. **Worked example — an isosceles triangle with vertex angle 40°:** 2b + 40 = 180, so each base angle is **70°**."},
    {k:"rule"},
    {k:"h3", t:"Quadrilaterals and their Properties"},
    {k:"table", head:["Quadrilateral","Properties"], rows:[["Parallelogram","Both pairs of opposite sides parallel and equal; opposite angles equal; diagonals bisect each other"],["Rectangle","Parallelogram with four right angles; diagonals equal"],["Rhombus","Parallelogram with four equal sides; diagonals meet at right angles"],["Square","Rectangle and rhombus: four equal sides, four right angles"],["Trapezium","One pair of opposite sides parallel"],["Kite","Two pairs of adjacent sides equal; one diagonal bisects the other at 90°"]]},
    {k:"p", t:"Each property flows from the parallel lines and equal sides: a parallelogram has opposite angles equal because co-interior angles on parallel lines add to 180°."},
    {k:"rule"},
    {k:"h3", t:"Circle Theorems"},
    {k:"table", head:["Theorem","Statement"], rows:[["Angle at the centre","The angle at the centre is twice the angle at the circumference on the same arc"],["Angle in a semicircle","The angle in a semicircle is 90°"],["Same segment","Angles in the same segment are equal"],["Cyclic quadrilateral","Opposite angles add to 180°"],["Tangent and radius","The tangent is perpendicular to the radius at the point of contact"],["Tangent from a point","The two tangents from an external point are equal in length"],["Alternate segment","The angle between a tangent and a chord equals the angle in the alternate segment"]]},
    {k:"rule"},
    {k:"h3", t:"Angles in the Same Segment and Cyclic Quadrilaterals"},
    {k:"p", t:"**Worked example — ABCD is a cyclic quadrilateral with angle A = 75°:** opposite angles of a cyclic quadrilateral are supplementary, so A + C = 180°, and **angle C = 105°**. The theorem is proved by joining the centre: the angle at the centre is twice each angle at the circumference, so the two angles in the same segment are equal."},
    {k:"rule"},
    {k:"h3", t:"Tangents and their Properties"},
    {k:"p", t:"A **tangent** touches a circle at exactly one point, and the radius to that point is perpendicular to the tangent. The two tangents drawn from an external point are equal, and the line from the external point to the centre bisects the angle between them. The angle between a tangent and a chord equals the angle in the **alternate segment** — the segment on the other side of the chord."},
    {k:"rule"},
    {k:"h3", t:"Problems on Polygons, Triangles and Circles"},
    {k:"p", t:"Write every angle fact you can before trying to solve: angle sums, parallel-line angle pairs, isosceles base angles, circle theorems. Add radii to draw isosceles triangles, produce sides to form exterior angles, and join the centre where a chord is given. Check that all the geometry closes — the angles of the whole figure must add up."}
  ],
  focus:["Polygons and regular polygons","Interior and exterior angle sums","Triangles: isosceles, scalene and equilateral","Quadrilaterals and their properties","Circle theorems","Angles in the same segment and cyclic quadrilaterals","Tangents and their properties","Problems on polygons, triangles and circles"],
  terms:[
    {t:"polygon", d:"a closed figure with straight sides", x:"A pentagon is a polygon."},
    {t:"regular polygon", d:"a polygon with all sides and angles equal", x:"A regular hexagon has 120° angles."},
    {t:"diagonal", d:"a line joining two non-adjacent vertices", x:"A quadrilateral has two diagonals."},
    {t:"isosceles triangle", d:"a triangle with two equal sides and two equal base angles", x:"The base angles are each 70°."},
    {t:"scalene triangle", d:"a triangle with no equal sides", x:"All three angles differ."},
    {t:"equilateral triangle", d:"a triangle with three equal sides and 60° angles", x:"Every angle is 60°."},
    {t:"parallelogram", d:"a quadrilateral with both pairs of opposite sides parallel", x:"Opposite angles are equal."},
    {t:"cyclic quadrilateral", d:"a quadrilateral inscribed in a circle", x:"Opposite angles sum to 180°."},
    {t:"tangent", d:"a line touching a circle at one point only", x:"It is perpendicular to the radius at that point."},
    {t:"alternate segment", d:"the segment opposite the angle between tangent and chord", x:"The tangent angle equals the angle in the alternate segment."}
  ],
  worked:[
    {q:"Find the sum of the interior angles of a decagon and the size of each interior angle of a regular decagon.",
     steps:["Sum = (n − 2) × 180° = (10 − 2) × 180° = 1 440°.","A regular decagon has 10 equal angles.","Each angle = 1 440 ÷ 10 = 144°.","Check: the exterior angle is 180 − 144 = 36°, and 10 × 36 = 360°."],
     a:"Sum 1 440°; each interior angle 144°"},
    {q:"An isosceles triangle has a vertex angle of 40°. Find the base angles.",
     steps:["The angles of a triangle sum to 180°.","The two base angles are equal, so 2b + 40 = 180.","2b = 140.","b = 70."],
     a:"Each base angle is 70°"},
    {q:"ABCD is a cyclic quadrilateral with angle A = 75°. Find angle C, and explain the theorem used.",
     steps:["Opposite angles of a cyclic quadrilateral are supplementary.","A + C = 180°.","C = 180 − 75 = 105."],
     a:"Angle C = 105°"}
  ],
  drillLabel:"Plane geometry",
  drills:[
    {id:"polygon_interior_sh"},{id:"polygon_each_sh"},{id:"exterior_angle_sh"},{id:"triangle_angle_sh"},
    {id:"quadrilateral_angle_sh"},{id:"circle_theorem_sh"},{id:"tangent_angle_sh"}
  ],
  word:[
    {q:"Each interior angle of a regular polygon is 156°. Find the number of sides.",
     a:"Each exterior angle = 24°, so n = 360/24 = 15 sides."},
    {q:"A parallelogram has one angle of 65°. Find the other three angles.",
     a:"Opposite angles are equal and adjacent angles are supplementary: 65°, 115°, 65°, 115°."},
    {q:"A tangent touches a circle at T and a chord TA makes an angle of 38° with the tangent. Find the angle in the alternate segment.",
     a:"The angle in the alternate segment equals the angle between tangent and chord, so it is 38°."},
    {q:"The angles of a quadrilateral are x, 2x, 3x and 4x. Find the largest angle.",
     a:"10x = 360, so x = 36 and the largest angle is 144°."},
    {q:"A regular polygon has an interior angle twice its exterior angle. Find the number of sides.",
     a:"i = 2e and i + e = 180, so e = 60 and n = 360/60 = 6 sides."}
  ],
  challenge:[
    {q:"Prove that the exterior angles of any convex polygon sum to 360°.",
     a:"Each exterior angle is 180° minus its interior angle, so their total is 180n − 180(n − 2) = 360°, whatever n is."},
    {q:"Explain why the angle in a semicircle is always 90°.",
     a:"The diameter subtends 180° at the centre, and the angle at the circumference is half the angle at the centre, so it is 90°."},
    {q:"A rhombus and a square both have four equal sides. Explain the difference between them.",
     a:"A square must also have four right angles. A rhombus has equal sides but its angles need not be 90°, so every square is a rhombus but not every rhombus is a square."}
  ],
  activities:["Measure interior and exterior angles of real polygons","Construct regular polygons with ruler and compasses","Verify circle theorems by measurement","Classify quadrilaterals by their diagonals"],
  materials:["Protractors","Compasses","Polygon templates","Circle theorem charts"],
  assessment:["Polygon quiz","Circle theorem assignment","Quadrilateral test","Construction observation"]
},

/* Period V — Solid Geometry */
{
  grade:12, period:"V", sem:"Two", icon:"\uD83E\uDDCA",
  title:"Solid Geometry",
  subtitle:"Unit XX: Common solids, prisms, cuboids, cylinders, pyramids, tetrahedrons and cones; lengths and angles in solids",
  outcomes:["Identify and discuss common solids and the faces of a solid, define prisms, cuboids, cylinders, pyramids, tetrahedrons, hexagonal pyramids and cones, measure lengths and angles in solids, and calculate volumes and surface areas"],
  objectives:["Identify and discuss common solids and the faces of a solid","Define and discuss prisms, cuboids, cylinders, pyramids, tetrahedrons, hexagonal pyramids and cones","Measure the lengths and angles in solids","Calculate volumes and surface areas of solids","Solve problems involving lengths and angles in three dimensions"],
  note:"A <b>solid</b> is a three-dimensional figure whose flat surfaces are called <b>faces</b>, whose meeting lines are <b>edges</b> and whose corners are <b>vertices</b>; they are linked by <b>Euler's formula</b> F + V − E = 2 for any solid with no holes. A <b>prism</b> has the same cross-section along its whole length, so its volume is base area times length. A <b>pyramid</b> tapers to an apex and holds one third of the prism on the same base; a <b>tetrahedron</b> is a triangular pyramid with four triangular faces. A <b>cone</b> is a pyramid with a circular base. Lengths and angles in three dimensions are found by working through <b>right-angled triangles</b> inside the solid, often using Pythagoras twice.",

  study:[
    /* ---- course text: Semester Two, Period V — Solid Geometry (guide p. 60) ---- */
    {k:"h3", t:"Faces, Edges and Vertices of Solids"},
    {k:"p", t:"A **solid** (three-dimensional figure) has **faces** (flat surfaces), **edges** (lines where two faces meet) and **vertices** (corners where edges meet). For solids without holes, **Euler's formula** holds: **F + V − E = 2**. A **polyhedron** is a solid bounded only by flat faces."},
    {k:"rule"},
    {k:"h3", t:"Prisms, Cuboids and Cylinders"},
    {k:"bul", items:["**Prism** — a solid with a constant cross-section; volume = area of cross-section × length.","**Cuboid** — a rectangular prism; V = lwh, surface area = 2(lw + lh + wh), and the space diagonal = √(l² + w² + h²).","**Cylinder** — a circular prism; V = πr²h, surface area = 2πr² + 2πrh."]},
    {k:"p", t:"**Worked example — cuboid 8 × 5 × 3 cm:** V = 120 cm³; surface area = 2(40 + 24 + 15) = **158 cm²**; space diagonal = √(64 + 25 + 9) = √98 ≈ **9.90 cm**."},
    {k:"rule"},
    {k:"h3", t:"Pyramids, Tetrahedrons and Hexagonal Pyramids"},
    {k:"p", t:"A **pyramid** tapers from a polygonal base to an apex: **V = ⅓ × base area × vertical height**. A **tetrahedron** is a triangular pyramid with four triangular faces (F = 4, V = 4, E = 6); a square pyramid has F = 5, V = 5, E = 8; a **hexagonal pyramid** has F = 7, V = 7, E = 12. Each triangular face has its own **slant height**, and the surface area is the base plus the faces."},
    {k:"p", t:"**Worked example — verify Euler's formula for a hexagonal pyramid:** F = 6 + 1 = 7, V = 6 + 1 = 7, E = 6 + 6 = 12; F + V − E = 7 + 7 − 12 = **2**."},
    {k:"rule"},
    {k:"h3", t:"Cones"},
    {k:"p", t:"A **cone** is a pyramid with a circular base: **V = ⅓πr²h**, curved surface area **πrl** and total surface area **πr² + πrl**, where the slant height l satisfies **l² = r² + h²**. The angle of the sector that makes the cone is found from the arc length: the sector's arc is the base circumference 2πr."},
    {k:"rule"},
    {k:"h3", t:"Nets of Solids"},
    {k:"p", t:"A **net** is a two-dimensional pattern that folds into a solid — the surface opened out flat. A cuboid's net has six rectangles, a cylinder's net has two circles and one rectangle, and a pyramid's net has the base plus one triangle per side. The net's area is exactly the surface area, and different nets can fold into the same solid."},
    {k:"rule"},
    {k:"h3", t:"Lengths in Solids using Pythagoras"},
    {k:"p", t:"Right triangles hide inside solids. In a cuboid, the **face diagonal** of the base is √(l² + w²), and the **space diagonal** is √(l² + w² + h²). In a pyramid or cone, the radius (or half the base side), the vertical height and the slant height form a right triangle: slant height = √(r² + h²), and the angle of the sloping face is found by trigonometry inside that triangle."},
    {k:"p", t:"**Worked example — square pyramid, base 6 cm, vertical height 8 cm:** slant height of a face = √(3² + 8²) = √73 ≈ **8.54 cm**."},
    {k:"rule"},
    {k:"h3", t:"Angles Between Lines and Planes in Solids"},
    {k:"p", t:"The **angle between a line and a plane** is the angle between the line and its **projection** on the plane — the shadow the line would cast. Drop a perpendicular from the line's far end to the plane, join the foot of that perpendicular to the near end, and the angle is in the right triangle formed. The **angle between two planes** is the angle between two perpendiculars to their line of intersection, drawn in each plane."}
  ],
  focus:["Faces, edges and vertices of solids","Euler's formula","Prisms, cuboids and cylinders","Pyramids, tetrahedrons and hexagonal pyramids","Cones","Nets of solids","Lengths in solids using Pythagoras","Angles between lines and planes in solids"],
  terms:[
    {t:"solid", d:"a three-dimensional figure", x:"A cube is a solid."},
    {t:"face", d:"a flat surface of a solid", x:"A cube has six faces."},
    {t:"edge", d:"the line where two faces meet", x:"A cuboid has twelve edges."},
    {t:"vertex", d:"a corner where edges meet", x:"A tetrahedron has four vertices."},
    {t:"Euler's formula", d:"F + V − E = 2 for solids without holes", x:"For a cube, 6 + 8 − 12 = 2."},
    {t:"prism", d:"a solid with a constant cross-section", x:"A cylinder is a prism."},
    {t:"pyramid", d:"a solid tapering from a polygonal base to an apex", x:"A square-based pyramid."},
    {t:"tetrahedron", d:"a triangular pyramid with four triangular faces", x:"It has four vertices and six edges."},
    {t:"net", d:"a two-dimensional pattern that folds into a solid", x:"The net of a cube is six squares."},
    {t:"angle with a plane", d:"the angle a line makes with its projection on a plane", x:"Found using a right-angled triangle in the solid."}
  ],
  worked:[
    {q:"A cuboid measures 8 cm by 5 cm by 3 cm. Find its volume, total surface area and the length of its space diagonal.",
     steps:["V = lwh = 8 × 5 × 3 = 120 cm³.","Surface area = 2(lw + lh + wh) = 2(40 + 24 + 15) = 158 cm².","Space diagonal = √(8² + 5² + 3²) = √98 ≈ 9.90 cm."],
     a:"Volume 120 cm³, surface area 158 cm², diagonal ≈ 9.90 cm"},
    {q:"A square-based pyramid has a base of 6 cm and a vertical height of 8 cm. Find its volume and the slant height of a face.",
     steps:["V = ⅓ × 6² × 8 = ⅓ × 36 × 8 = 96 cm³.","Slant height = √(3² + 8²) = √73 ≈ 8.54 cm."],
     a:"Volume 96 cm³ and slant height ≈ 8.54 cm"},
    {q:"Verify Euler's formula for a hexagonal pyramid.",
     steps:["Faces: 6 triangular faces + 1 hexagonal base = 7.","Vertices: 6 around the base + 1 apex = 7.","Edges: 6 around the base + 6 to the apex = 12.","F + V − E = 7 + 7 − 12 = 2."],
     a:"F + V − E = 2, so Euler's formula holds"}
  ],
  drillLabel:"Solid geometry",
  drills:[
    {id:"solid_faces_sh"},{id:"euler_sh"},{id:"volume_prism_sh"},{id:"surface_prism_sh"},
    {id:"volume_pyramid_sh"},{id:"solid_diagonal_sh"},{id:"volume_cone_sh"}
  ],
  word:[
    {q:"A rectangular water tank measures 2 m by 1.5 m by 1.2 m. Find how many litres it holds when full.",
     a:"V = 2 × 1.5 × 1.2 = 3.6 m³ = 3 600 litres."},
    {q:"A tent is a triangular prism 3 m long with a triangular cross-section of base 2 m and height 1.5 m. Find its volume.",
     a:"V = ½ × 2 × 1.5 × 3 = 4.5 m³."},
    {q:"A cube has a space diagonal of 8.66 cm. Find the length of its edge.",
     a:"Space diagonal = s√3, so s = 8.66/1.732 ≈ 5 cm."},
    {q:"A cone has a base radius of 5 cm and a slant height of 13 cm. Find its vertical height and volume. Take π = 3.14.",
     a:"h = √(169 − 25) = 12 cm; V = ⅓ × 3.14 × 25 × 12 = 314 cm³."},
    {q:"How many faces, edges and vertices does a tetrahedron have? Verify Euler's formula.",
     a:"4 faces, 6 edges, 4 vertices; 4 + 4 − 6 = 2."}
  ],
  challenge:[
    {q:"Explain why the volume of a pyramid is exactly one third of the prism on the same base and height.",
     a:"Three identical pyramids can be fitted together to fill the prism exactly, which is why the formula carries the factor ⅓. The same argument gives the cone one third of its cylinder."},
    {q:"A cube is cut by a plane through three of its vertices that are not on the same face. What shape is the cross-section?",
     a:"An equilateral triangle, because the three cut edges are face diagonals of the cube and are all equal in length."},
    {q:"Why does Euler's formula fail for a solid with a hole through it, such as a ring?",
     a:"The formula F + V − E = 2 assumes a surface that can be stretched into a sphere. A ring has a hole, so its Euler characteristic is 0 and the sum comes out differently."}
  ],
  activities:["Build nets of prisms, pyramids and cones","Count faces, edges and vertices of real solids","Find lengths in solids using Pythagoras twice","Measure the angles a diagonal makes with a face"],
  materials:["Card nets","Solid models","Rulers","Calculators"],
  assessment:["Solids quiz","Volume assignment","Angle in solid test","Practical observation"]
}
,

/* Period VI — Probability and Statistics */
{
  grade:12, period:"VI", sem:"Two", icon:"\uD83C\uDFB2",
  title:"Probability and Statistics",
  subtitle:"Unit XXI: The counting principle, factorials, permutations and combinations, and probability of events",
  outcomes:["Apply the fundamental counting principle, compute factorials, permutations and combinations, distinguish between them, review sets, Venn diagrams, tree diagrams and contingency tables, and find probabilities of complementary, mutually exclusive, independent and conditional events, the odds of an event and the expected value"],
  objectives:["State and use the fundamental counting principle","Compute factorials","Compute permutations","Compute combinations","Distinguish between permutations and combinations","Review basic concepts of sets, Venn diagrams, tree diagrams and contingency tables","Find the sample space and events of an experiment","Find the probability of an event and of complementary events","Find the probability of mutually exclusive, independent and conditional events","Find the odds of an event","Calculate the expected value"],
  note:"The <b>fundamental counting principle</b> says that if one thing can happen in m ways and another in n ways, the two together can happen in m × n ways. A <b>factorial</b>, n!, is the product of the counting numbers from 1 to n, with 0! defined as 1. A <b>permutation</b> is an arrangement where <b>order matters</b>, ⁿPᵣ = n!/(n − r)!; a <b>combination</b> is a selection where <b>order does not matter</b>, ⁿCᵣ = n!/[r!(n − r)!]. Choosing three people from ten gives fewer results than arranging three of them, because each group can be arranged in 3! ways. The <b>expected value</b> of a chance experiment is the sum of each outcome multiplied by its probability.",

  study:[
    /* ---- course text: Semester Two, Period VI — Probability and Statistics (guide pp. 61–63) ---- */
    {k:"h3", t:"The Fundamental Counting Principle"},
    {k:"p", t:"If one choice can be made in m ways and a second in n ways, the two together can be made in **m × n ways**; the **fundamental counting principle** multiplies the number of ways at each stage. A menu of 4 starters and 5 main courses gives 4 × 5 = 20 different meals."},
    {k:"rule"},
    {k:"h3", t:"Factorials"},
    {k:"p", t:"The **factorial** n! = n × (n − 1) × (n − 2) × … × 2 × 1 counts the arrangements of n different objects: 5! = 120. By definition **0! = 1**, because there is exactly one way to arrange nothing. Factorials grow very fast, so cancel factors before multiplying: 10!/7! = 10 × 9 × 8."},
    {k:"rule"},
    {k:"h3", t:"Permutations"},
    {k:"p", t:"A **permutation** is an arrangement in which **order matters**. The number of arrangements of n different objects taken r at a time is **ⁿPᵣ = n!/(n − r)!** — choose r objects and arrange them. If some objects are alike, divide by the factorial of each repeated group: LIBERIA has 7!/2! = 2 520 arrangements, because the letter I is repeated."},
    {k:"rule"},
    {k:"h3", t:"Combinations"},
    {k:"p", t:"A **combination** is a selection in which **order does not matter**: **ⁿCᵣ = n!/[r!(n − r)!]**, written also as (n choose r). Choosing a committee of 4 from 7 gives ⁷C₄ = 35. The connection with permutations: **ⁿPᵣ = ⁿCᵣ × r!**, because each selection can be arranged in r! ways."},
    {k:"p", t:"**Worked example — a committee of 4 from 7 pupils:** ⁷C₄ = 7!/(4!3!) = **35 ways**; if order mattered, ⁷P₄ = 7!/3! = **840 arrangements**."},
    {k:"rule"},
    {k:"h3", t:"Sample Space, Sets, Venn Diagrams, Tree Diagrams and Contingency Tables"},
    {k:"p", t:"Count the sample space with the counting principle, then list or draw it: a **Venn diagram** shows unions, intersections and complements; a **tree diagram** branches at each stage and multiplies along the paths; a **contingency table** records counts of two characteristics. Whichever is used, the probability is favourable outcomes ÷ total outcomes."},
    {k:"rule"},
    {k:"h3", t:"Complementary, Mutually Exclusive, Independent and Conditional Events"},
    {k:"bul", items:["**Complementary:** P(A′) = 1 − P(A).","**Mutually exclusive:** P(A ∪ B) = P(A) + P(B).","**Independent:** P(A ∩ B) = P(A) × P(B).","**Conditional:** P(A ∩ B) = P(A) × P(B | A), where P(B | A) is the probability of B given A."]},
    {k:"p", t:"**Worked example — 4 red and 6 blue balls, two drawn without replacement:** P(both red) = 4/10 × 3/9 = **2/15**. The events are not independent because the second draw has a different bag."},
    {k:"rule"},
    {k:"h3", t:"Odds and Expected Value"},
    {k:"p", t:"The **odds in favour** of an event are favourable : unfavourable, and if the odds are a : b then P = a/(a + b). The **expected value** is the average outcome over many trials: **sum of (outcome × its probability)**. It is the fair average of a gamble — the amount a long-run average settles at, not a prediction of one trial."}
  ],
  focus:["Fundamental counting principle","Factorials","Permutations","Combinations","Permutations compared with combinations","Sample space, sets, Venn diagrams, tree diagrams and contingency tables","Complementary, mutually exclusive, independent and conditional events","Odds and expected value"],
  terms:[
    {t:"counting principle", d:"multiply the number of ways each stage can happen", x:"3 shirts and 4 trousers give 12 outfits."},
    {t:"factorial", d:"n! = n × (n − 1) × … × 1", x:"5! = 120."},
    {t:"permutation", d:"an arrangement in which order matters", x:"⁵P₂ = 20."},
    {t:"combination", d:"a selection in which order does not matter", x:"⁵C₂ = 10."},
    {t:"sample space", d:"the set of all possible outcomes", x:"Two coins give four outcomes."},
    {t:"complementary event", d:"an event and its opposite", x:"P(not A) = 1 − P(A)."},
    {t:"mutually exclusive", d:"two events that cannot occur together", x:"P(A ∪ B) = P(A) + P(B)."},
    {t:"independent", d:"one event does not affect the other", x:"P(A ∩ B) = P(A)P(B)."},
    {t:"conditional probability", d:"the probability of an event given that another has happened", x:"P(A|B) = P(A ∩ B)/P(B)."},
    {t:"expected value", d:"the sum of each outcome times its probability", x:"The expected score on a die is 3.5."},
    {t:"odds", d:"the ratio of favourable to unfavourable outcomes", x:"Odds of 1 : 5 mean probability 1/6."},
    {t:"contingency table", d:"a two-way table of counts", x:"Boys and girls against pass and fail."}
  ],
  worked:[
    {q:"How many different arrangements can be made of the letters of the word LIBERIA?",
     steps:["The word has 7 letters.","The letter I appears twice.","Arrange as 7! ÷ 2! to remove the repeat.","= 5 040 ÷ 2 = 2 520."],
     a:"2 520 arrangements"},
    {q:"A committee of 4 is to be chosen from 7 pupils. In how many ways can this be done, and how many ways if the order of selection mattered?",
     steps:["Selection: ⁷C₄ = 7!/(4!3!) = 35.","Arrangement: ⁷P₄ = 7!/3! = 840.","Check: 35 × 4! = 35 × 24 = 840."],
     a:"35 ways to choose; 840 ways to arrange"},
    {q:"A bag holds 4 red and 6 blue balls. Two are drawn without replacement. Find the probability that both are red.",
     steps:["First red: 4/10.","After one red is gone: 3/9.","Multiply: 4/10 × 3/9.","= 12/90 = 2/15."],
     a:"2/15"}
  ],
  drillLabel:"Probability and counting",
  drills:[
    {id:"counting_principle_sh"},{id:"factorial_sh"},{id:"permutation_sh"},{id:"combination_sh"},
    {id:"prob_simple_sh"},{id:"prob_conditional_sh"},{id:"prob_independent_sh"},{id:"expected_value_sh"}
  ],
  word:[
    {q:"A pupil has 5 different shirts, 3 pairs of trousers and 2 pairs of shoes. How many different outfits are possible?",
     a:"5 × 3 × 2 = 30 outfits."},
    {q:"In how many ways can a chairperson, secretary and treasurer be chosen from a club of 9 members?",
     a:"⁹P₃ = 9 × 8 × 7 = 504 ways."},
    {q:"A die is thrown twice. Find the probability that the sum is greater than 9.",
     a:"The favourable outcomes are (4,6), (5,5), (5,6), (6,4), (6,5), (6,6) — six out of 36, so P = 1/6."},
    {q:"The probability of passing Mathematics is 0.8 and of passing Physics is 0.6, independently. Find the probability of passing exactly one subject.",
     a:"0.8 × 0.4 + 0.2 × 0.6 = 0.32 + 0.12 = 0.44."},
    {q:"A fair die is scored 1 point for an even number and 4 points for an odd number. Find the expected score per throw.",
     a:"E = 3/6 × 1 + 3/6 × 4 = 0.5 + 2 = 2.5 points."}
  ],
  challenge:[
    {q:"Explain why ⁶C₄ equals ⁶C₂ without calculating either.",
     a:"Choosing 4 objects to take is the same as choosing 2 to leave behind, so the two counts must match. In general ⁿCᵣ = ⁿC₍ₙ₋ᵣ₎."},
    {q:"Why is 0! defined as 1 rather than 0?",
     a:"Because ⁿPₙ = n!/0! must equal n!, so 0! has to be 1. It also counts the single way of arranging nothing, which keeps every counting formula consistent."},
    {q:"A test for a rare condition is 95% accurate. Explain why a positive result may still make the condition unlikely.",
     a:"When the condition is very rare, the number of healthy people wrongly flagged exceeds the number of true cases, so most positives are false. The correct answer depends on how common the condition is in the population."}
  ],
  activities:["Count arrangements of names and words","Build tree diagrams for two- and three-stage experiments","Estimate probabilities by experiment","Calculate expected values for simple games"],
  materials:["Dice","Coins","Cards","Calculators"],
  assessment:["Counting quiz","Permutation and combination assignment","Probability test","Observation and participation"]
},

/* Period VI — Exponential and Logarithmic Functions */
{
  grade:12, period:"VI", sem:"Two", icon:"\uD83D\uDCC8",
  title:"Exponential and Logarithmic Functions",
  subtitle:"Unit XXII: Exponential functions and their graphs, growth and decay, base e, logarithmic functions and their laws",
  outcomes:["Evaluate and graph exponential functions, solve application problems involving doubling time, radioactive decay and compound interest, distinguish algebraic from exponential functions, define base e, graph exponential and logarithmic functions, interpret logarithms as inverses, determine domain restrictions, use the laws of logarithms and the change-of-base formula, and solve exponential and logarithmic equations"],
  objectives:["Evaluate exponential functions","Graph exponential functions","Solve application problems involving exponential functions such as doubling time, radioactive decay and compound interest","Distinguish between algebraic and exponential functions","Define base e","Graph exponential functions with base e","Review growth and decay with base e","Solve problems involving interest compounded continuously","Convert exponential expressions to logarithmic expressions and the reverse","Evaluate common and natural logarithms","Graph logarithmic functions","Interpret logarithmic functions as inverses of exponential functions","Determine domain restrictions on logarithmic functions","Express a single logarithm as a sum or difference of logarithms and the reverse","Evaluate logarithms of a general base and state the change-of-base formula","Solve exponential and logarithmic equations"],
  note:"An <b>exponential function</b> has the unknown in the index, y = aˣ, and its graph always passes through (0, 1) and never touches the x-axis. An <b>algebraic</b> function has the unknown in the base, such as y = x³, and grows much more slowly. When a quantity <b>grows</b> by a fixed percentage each period it follows y = a(1 + r)ⁿ, and when it <b>decays</b> it follows y = a(1 − r)ⁿ. The number <b>e</b> ≈ 2.71828 is the base that arises naturally in continuous change, giving y = aeᵏᵗ. The <b>logarithmic function</b> y = log_a x is the <b>inverse</b> of y = aˣ, so their graphs are reflections in the line y = x and its <b>domain is x > 0</b>. The laws are log(mn) = log m + log n, log(m/n) = log m − log n, log mⁿ = n log m, and the <b>change-of-base formula</b> is log_a b = log b / log a.",

  study:[
    /* ---- course text: Semester Two, Period VI — Exponential and Logarithmic Functions (guide pp. 64–66) ---- */
    {k:"h3", t:"Evaluating and Graphing Exponential Functions"},
    {k:"p", t:"An **exponential function** has the variable in the exponent: **y = aˣ** with a > 0 and a ≠ 1. Its graph passes through (0, 1); for a > 1 it rises ever more steeply (growth) and for 0 < a < 1 it falls toward 0 (decay). The x-axis is an **asymptote** — the curve approaches it but never reaches it. Exponential functions grow far faster than any polynomial: 2ˣ overtakes x², x³ and every power of x."},
    {k:"rule"},
    {k:"h3", t:"Growth and Decay Models"},
    {k:"p", t:"If a quantity starts at A and is multiplied by factor r each period, after t periods it is **N = A × rᵗ**. Growth has r > 1, decay has 0 < r < 1. An increase of 10% per year means r = 1.10; a decrease of 8% means r = 0.92."},
    {k:"p", t:"**Worked example — bacteria N = 200 × 2ᵗ:** at t = 5, N = 200 × 32 = **6 400**; for N = 12 800, 2ᵗ = 64, so **t = 6 hours**."},
    {k:"rule"},
    {k:"h3", t:"Doubling Time, Radioactive Decay and Compound Interest"},
    {k:"bul", items:["**Doubling time** — solve 2 = rᵗ for t; the population doubles every t periods (for doubling, 2 = rᵗ).","**Radioactive decay** — the amount halves each half-life: N = A × (1/2)^(t/T).","**Compound interest** — A = P(1 + R/100)ⁿ: the exponential growth model with r = 1 + R/100."]},
    {k:"rule"},
    {k:"h3", t:"Base e and Continuous Compounding"},
    {k:"p", t:"The **natural base e** is about 2.71828, the limit of (1 + 1/n)ⁿ as n grows. If interest is added at every instant (**continuous compounding**), the amount is **A = Pe^(rt)** — the growth curves of continuous processes are written with e. The function eˣ is the exponential function whose gradient at every point equals its value, which makes it the natural base for calculus."},
    {k:"rule"},
    {k:"h3", t:"Logarithmic Functions as Inverses"},
    {k:"p", t:"If y = aˣ then x = **logₐ y**; the logarithm is the **inverse of the exponential**, so logₐ(aˣ) = x and a^(logₐ x) = x. The graph of y = logₐ x is the reflection of y = aˣ in the line y = x. A **logarithmic function** has **domain x > 0** — a logarithm of zero or a negative number does not exist — and the y-axis is its asymptote. The **natural logarithm** ln x is logₑ x."},
    {k:"rule"},
    {k:"h3", t:"The Laws of Logarithms and the Change-of-Base Formula"},
    {k:"table", head:["Law","Rule"], rows:[["Product","log (xy) = log x + log y"],["Quotient","log (x/y) = log x − log y"],["Power","log xⁿ = n log x"],["Root","log ⁿ√x = (log x)/n"],["Change of base","logₐ b = log b ÷ log a (any convenient base)"]]},
    {k:"rule"},
    {k:"h3", t:"Solving Exponential and Logarithmic Equations"},
    {k:"p", t:"To solve an exponential equation, take logarithms of both sides and use the power law; to solve a logarithmic equation, combine the logarithms into one and convert to exponential form. Check each solution in the original equation — the domain restriction x > 0 may reject a value found algebraically."},
    {k:"p", t:"**Worked example — solve 5ˣ = 300 to 3 s.f.:** x log 5 = log 300; x = log 300 ÷ log 5 = 2.4771 ÷ 0.6990 ≈ **3.54**."}
  ],
  focus:["Evaluating and graphing exponential functions","Growth and decay models","Doubling time, radioactive decay and compound interest","Algebraic compared with exponential functions","Base e and continuous compounding","Logarithms as inverses of exponentials","Domain restrictions","The laws of logarithms","The change-of-base formula","Solving exponential and logarithmic equations"],
  terms:[
    {t:"exponential function", d:"a function of the form y = aˣ", x:"y = 2ˣ is an exponential function that doubles every unit of x."},
    {t:"exponential growth", d:"growth by a fixed factor each period", x:"A population rising 5% a year shows exponential growth."},
    {t:"exponential decay", d:"falling by a fixed factor each period", x:"A radioactive substance halving every year shows exponential decay."},
    {t:"base e", d:"the natural base, about 2.71828", x:"Working to base e is natural for continuous change."},
    {t:"continuous compounding", d:"interest added at every instant, A = Pe^{rt}", x:"Continuous compounding gives slightly more than yearly compounding."},
    {t:"logarithmic function", d:"the inverse of an exponential function", x:"y = log₂ x is a logarithmic function."},
    {t:"natural logarithm", d:"a logarithm to base e, written ln", x:"The natural logarithm of e is 1, written ln e = 1."},
    {t:"domain restriction", d:"the values a function cannot take", x:"The domain restriction on log x is that x must be greater than 0."},
    {t:"change-of-base formula", d:"log_a b = log b / log a", x:"The change-of-base formula lets any base be found from base 10."},
    {t:"asymptote", d:"a line a graph approaches but never reaches", x:"The x-axis is an asymptote of y = 2ˣ."}
  ],
  worked:[
    {q:"A culture of bacteria grows as N = 200 × 2ᵗ, where t is in hours. Find the population after 5 hours and the time taken to reach 12 800.",
     steps:["At t = 5: N = 200 × 32 = 6 400.","For N = 12 800: 2ᵗ = 12 800/200 = 64.","64 = 2⁶, so t = 6 hours."],
     a:"6 400 bacteria after 5 hours; 12 800 after 6 hours"},
    {q:"Solve 5ˣ = 300 using logarithms, to 3 significant figures.",
     steps:["Take logs: x log 5 = log 300.","x = log 300 / log 5.","= 2.4771 / 0.6990.","x ≈ 3.54."],
     a:"x ≈ 3.54"},
    {q:"Express log(x²√y/z³) as a sum and difference of logarithms.",
     steps:["Split the division: log(x²√y) − log z³.","Split the product: log x² + log √y − log z³.","Apply the power law: 2 log x + ½ log y − 3 log z."],
     a:"2 log x + ½ log y − 3 log z"}
  ],
  drillLabel:"Exponential and logarithmic functions",
  drills:[
    {id:"exp_eval_sh"},{id:"exp_growth_sh"},{id:"exp_decay_sh"},{id:"exp_equation_sh"},
    {id:"log_law_sh"},{id:"log_equation_sh"},{id:"log_change_base_sh"},{id:"log_domain_sh"}
  ],
  word:[
    {q:"A town's population of 25 000 grows at 4% a year. Find its population after 5 years.",
     a:"25 000 × 1.04⁵ = 25 000 × 1.2167 ≈ 30 417 people."},
    {q:"A radioactive substance has a half-life of 8 days. Starting with 400 g, find the mass remaining after 24 days.",
     a:"24 days is 3 half-lives, so 400 × (1/2)³ = 50 g."},
    {q:"L$50 000 is invested at 6% per annum compounded continuously for 3 years. Find the amount. Take e ≈ 2.7183.",
     a:"A = 50 000 × e^0.18 = 50 000 × 1.1972 ≈ L$59 860."},
    {q:"Solve log₂(x − 3) = 4.",
     a:"x − 3 = 2⁴ = 16, so x = 19."},
    {q:"Given that log 2 = 0.3010, evaluate log₈ 32 without a calculator.",
     a:"log₈ 32 = log 32/log 8 = 5 log 2 / 3 log 2 = 5/3."}
  ],
  challenge:[
    {q:"Explain why an exponential function eventually overtakes any polynomial function, however high its degree.",
     a:"Each step multiplies the exponential by a constant while the polynomial gains only a fixed extra factor of x. Taking logs, the exponential grows linearly in x while the polynomial grows like log x, so the exponential must pull ahead."},
    {q:"Why must the base of a logarithm be positive and not equal to 1?",
     a:"A base of 1 gives 1ˣ = 1 for every x, so no unique index exists. A negative base gives values only for some indices, so the function would not be defined for all positive arguments."},
    {q:"Solve e²ˣ − 4eˣ + 3 = 0.",
     a:"Let u = eˣ: u² − 4u + 3 = 0, so (u − 1)(u − 3) = 0. Hence eˣ = 1 giving x = 0, or eˣ = 3 giving x = ln 3 ≈ 1.099."}
  ],
  activities:["Plot exponential and logarithmic graphs","Model population growth and radioactive decay","Investigate continuous compounding with a calculator","Solve exponential equations using logarithms"],
  materials:["Calculators","Graph paper","Logarithm tables","Whiteboard"],
  assessment:["Exponential quiz","Logarithm law assignment","Equation solving test","Observation and participation"]
},

/* Period VI — Differentiation and Integration */
{
  grade:12, period:"VI", sem:"Two", icon:"\u222B",
  title:"Differentiation and Integration",
  subtitle:"Unit XXIII: The difference quotient, limits, derivatives, areas under a curve and indefinite integrals",
  outcomes:["Define, discuss and apply the difference quotient, review slopes, tangent lines and derivatives, define limits, define and apply differentiation, define and discuss integration, find areas under a curve, and find indefinite integrals of simple polynomial and trigonometric functions"],
  objectives:["Define, discuss and apply the concept of the difference quotient","Review slopes, tangent lines and derivatives","Define and discuss the concept of limits","Define and apply the concept of differentiation","Define and discuss the concept of integration","Find areas under a curve","Find indefinite integrals of simple polynomial and trigonometric functions"],
  note:"The <b>difference quotient</b> [f(x + h) − f(x)]/h is the gradient of the chord between two points of a curve. As h becomes vanishingly small — written as the <b>limit</b> h → 0 — the chord becomes the <b>tangent</b>, and the limit is the <b>derivative</b> dy/dx, which gives the gradient at any point. For y = xⁿ the rule is dy/dx = nxⁿ⁻¹, and terms are differentiated one at a time. The derivative is zero at a <b>turning point</b>, which lets you find maximum and minimum values. <b>Integration</b> is the reverse process: ∫xⁿ dx = xⁿ⁺¹/(n + 1) + c for n ≠ −1, and the <b>constant c</b> is needed because differentiating removes any constant. A <b>definite integral</b> gives the area under the curve between two limits.",

  study:[
    /* ---- course text: Semester Two, Period VI — Differentiation and Integration (guide pp. 67–69) ---- */
    {k:"h3", t:"The Difference Quotient"},
    {k:"p", t:"The **difference quotient** [f(x + h) − f(x)]/h is the gradient of the chord joining the points (x, f(x)) and (x + h, f(x + h)) on a curve. It measures the **average rate of change** of the function over the interval of length h. As h is made smaller, the chord turns toward the **tangent** at the point, and the quotient approaches the gradient of the curve at that point."},
    {k:"rule"},
    {k:"h3", t:"Slopes, Chords and Tangents"},
    {k:"p", t:"A **chord** joins two points of a curve; a **tangent** touches the curve at one point and has the same gradient as the curve there. The gradient of the chord is the difference quotient; the gradient of the tangent is its limit. This is why differentiation began with tangents — the derivative is the slope of the tangent."},
    {k:"rule"},
    {k:"h3", t:"Limits"},
    {k:"p", t:"The **limit** is the value a quantity approaches as the variable approaches a value. We write lim(h → 0) and read the value the difference quotient settles towards, even though h itself is never zero. Limits are the foundation of calculus: a derivative is a limit of a difference quotient, and the area under a curve is a limit of sums of thin strips."},
    {k:"rule"},
    {k:"h3", t:"Differentiation of Polynomials"},
    {k:"p", t:"Differentiation finds the **derivative** (gradient function) dy/dx. The power rule: if y = xⁿ, then **dy/dx = nxⁿ⁻¹**; constant multiples come outside; a constant differentiates to 0; and sums differentiate term by term."},
    {k:"p", t:"**Worked example — y = 3x⁴ − 5x² + 7x − 2:** dy/dx = 12x³ − 10x + 7. Check: 3x⁴ → 12x³, −5x² → −10x, 7x → 7, −2 → 0."},
    {k:"rule"},
    {k:"h3", t:"Gradient and Turning Points"},
    {k:"p", t:"Substitute a value of x into dy/dx to get the **gradient of the curve** at that point. At a **turning point** the gradient is zero: **dy/dx = 0** gives the x-coordinates of the maximum and minimum points. The second derivative d²y/dx² (or the sign of the gradient on either side) tells which is which — negative at a maximum, positive at a minimum."},
    {k:"p", t:"**Worked example — turning points of y = x³ − 3x:** dy/dx = 3x² − 3 = 0 gives x² = 1, so x = ±1. At x = −1, y = 2; at x = 1, y = −2. The gradient changes from positive to negative at x = −1, so **maximum at (−1, 2)**; from negative to positive at x = 1, so **minimum at (1, −2)**."},
    {k:"rule"},
    {k:"h3", t:"Maximum and Minimum Values"},
    {k:"p", t:"In practical problems, form the quantity to be maximized or minimized (area, profit, cost), differentiate, set dy/dx = 0, solve, and confirm the nature of the turning point. The **maximum or minimum value** is the y-value at that point; check the problem's limits, because a closed interval may have its greatest or least value at an end."},
    {k:"rule"},
    {k:"h3", t:"Indefinite Integrals and the Constant of Integration"},
    {k:"p", t:"**Integration** is the reverse of differentiation. If dy/dx = xⁿ, then **y = xⁿ⁺¹/(n + 1) + c** for n ≠ −1. The **constant of integration c** is needed because many functions have the same derivative — differentiating a constant gives 0, so c cannot be recovered from the derivative alone. An **indefinite integral** is a family of functions; a **definite integral** with limits gives a number."},
    {k:"p", t:"**Worked example — ∫(6x² − 4x + 1) dx:** 6x² → 2x³, −4x → −2x², 1 → x, so the integral is **2x³ − 2x² + x + c**."},
    {k:"rule"},
    {k:"h3", t:"Areas Under a Curve"},
    {k:"p", t:"The **area under a curve** between x = a and x = b is the **definite integral** ∫ₐᵇ f(x) dx = F(b) − F(a), where F is the integral of f. Evaluate the integral at the upper limit, subtract the value at the lower limit, and take the absolute value where the curve lies below the x-axis (the integral gives a signed area)."},
    {k:"p", t:"**Worked example — area under y = 2x from x = 1 to x = 3:** ∫2x dx = x², so the area = 3² − 1² = **8 square units**. The integral of a rate (speed, for example) gives the total of the quantity (distance)."},
    {k:"rule"},
    {k:"h3", t:"Integrals of Simple Trigonometric Functions"},
    {k:"p", t:"The basic integrals are **∫sin x dx = −cos x + c** and **∫cos x dx = sin x + c**; for sin(ax + b) and cos(ax + b), divide by a: ∫sin 3x dx = −(cos 3x)/3 + c. These are used with the area formula for curves such as y = sin x over half a period, and they follow from the corresponding derivatives — integration is always differentiation in reverse."}
  ],
  focus:["The difference quotient","Slopes, chords and tangents","Limits","Differentiation of polynomials","Gradient and turning points","Maximum and minimum values","Indefinite integrals and the constant of integration","Areas under a curve","Integrals of simple trigonometric functions"],
  terms:[
    {t:"difference quotient", d:"the gradient of a chord, [f(x + h) − f(x)]/h", x:"The limit of the difference quotient gives the derivative."},
    {t:"limit", d:"the value a quantity approaches", x:"The limit of the chord as h → 0 is the tangent."},
    {t:"derivative", d:"the gradient function of a curve, dy/dx", x:"The derivative of y = x² is dy/dx = 2x."},
    {t:"tangent", d:"a line touching a curve at one point with the same gradient", x:"The tangent at a point has gradient dy/dx there."},
    {t:"turning point", d:"a point where dy/dx = 0", x:"Every turning point satisfies dy/dx = 0."},
    {t:"maximum", d:"the highest point of a curve near that region", x:"At a maximum the derivative changes from positive to negative."},
    {t:"integration", d:"the reverse of differentiation", x:"Integration of 2x gives x² + c."},
    {t:"constant of integration", d:"the unknown constant added when integrating", x:"Always write the constant of integration, + c."},
    {t:"definite integral", d:"an integral with upper and lower limits, giving an area", x:"A definite integral from 0 to 2 of x dx equals 2."},
    {t:"area under a curve", d:"the region between the curve, the x-axis and two vertical lines", x:"The area under a curve is found with a definite integral."}
  ],
  worked:[
    {q:"Differentiate y = 3x⁴ − 5x² + 7x − 2.",
     steps:["Apply the rule nxⁿ⁻¹ to each term separately.","3x⁴ gives 12x³.","−5x² gives −10x.","7x gives 7 and −2 gives 0."],
     a:"dy/dx = 12x³ − 10x + 7"},
    {q:"Find the turning points of y = x³ − 3x and say which is a maximum and which a minimum.",
     steps:["Differentiate: dy/dx = 3x² − 3.","Set it to zero: 3x² − 3 = 0, so x² = 1 and x = ±1.","At x = −1, y = −1 + 3 = 2; at x = 1, y = 1 − 3 = −2.","The gradient changes from positive to negative at x = −1 and from negative to positive at x = 1."],
     a:"Maximum at (−1, 2) and minimum at (1, −2)"},
    {q:"Find ∫(6x² − 4x + 1) dx and the area under y = 2x from x = 1 to x = 3.",
     steps:["Integrate each term: 6x² gives 2x³, −4x gives −2x², 1 gives x.","So ∫ = 2x³ − 2x² + x + c.","For the area: ∫2x dx = x², evaluated from 1 to 3.","= 9 − 1 = 8."],
     a:"2x³ − 2x² + x + c, and the area is 8 square units"}
  ],
  drillLabel:"Differentiation and integration",
  drills:[
    {id:"differentiate_sh"},{id:"gradient_at_sh"},{id:"turning_point_sh"},{id:"integrate_sh"},
    {id:"definite_integral_sh"},{id:"max_min_sh"}
  ],
  word:[
    {q:"The cost of producing x items is C = x³ − 6x² + 15x + 10. Find the output that minimizes the marginal cost.",
     a:"Marginal cost = 3x² − 12x + 15, whose derivative 6x − 12 is zero at x = 2, giving a minimum marginal cost of 3."},
    {q:"A farmer has 100 m of fencing for a rectangular pen. Use differentiation to show that the greatest area is 625 m².",
     a:"A = x(50 − x) = 50x − x²; dA/dx = 50 − 2x = 0 gives x = 25, so A = 25 × 25 = 625 m²."},
    {q:"Find the gradient of y = x² + 3x at the point where x = 2.",
     a:"dy/dx = 2x + 3, so at x = 2 the gradient is 7."},
    {q:"Find ∫(3x² + 2 cos x) dx.",
     a:"x³ + 2 sin x + c."},
    {q:"Evaluate ∫ from 0 to 2 of (3x² + 1) dx.",
     a:"[x³ + x] from 0 to 2 = (8 + 2) − 0 = 10 square units."}
  ],
  challenge:[
    {q:"Explain why an indefinite integral needs a constant of integration while a definite integral does not.",
     a:"Differentiating removes any constant, so integration can only recover the function up to an unknown constant. In a definite integral the constant is added at both limits and cancels when they are subtracted."},
    {q:"Use the difference quotient from first principles to find the derivative of y = 1/x.",
     a:"[(1/(x + h)) − (1/x)]/h = −h/[x(x + h)h] = −1/[x(x + h)], and as h → 0 this tends to −1/x²."},
    {q:"Why is a turning point where dy/dx = 0 not necessarily a maximum or a minimum?",
     a:"At a point of inflection the derivative is also zero but does not change sign; y = x³ at x = 0 is the standard example, where the curve flattens and then continues rising."}
  ],
  activities:["Estimate gradients of curves with chords","Differentiate polynomials and check the turning points","Find maximum areas and minimum costs","Evaluate areas under curves and check by counting squares"],
  materials:["Graph paper","Calculators","Rulers","Whiteboard"],
  assessment:["Differentiation quiz","Integration assignment","Optimisation test","Observation and participation"]
}

];

/* Merge the Senior High units into the single Mathematics curriculum,
   exactly as the Junior High units are merged: one subject, extra grades. */
if (typeof MA_CURRICULUM !== "undefined") {
  MA_CURRICULUM.push.apply(MA_CURRICULUM, MA_CURRICULUM_SH);
}

