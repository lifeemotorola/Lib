/* Curriculum data — Republic of Liberia, Junior High MATHEMATICS, Grades 7–9
   Derived from the "Math 7-9" curriculum guide (54 pp.), 6 periods per grade.

   Same unit shape as the elementary MA_CURRICULUM so GEN_MA renders it unchanged:
     terms[] {t,d,x} · worked[] {q,steps[],a} · drills[] {id,p} · drillLabel
     · word[] {q,a} · challenge[] {q,a} · activities[] · materials[] · assessment[]

   The drill ids used here are registered by gen-ma79.js on GEN_MA.DRILLS,
   together with a GEN_MA.METHOD entry each so every answer key states the WHY.

   Per the project rule, the external links listed in the source guide
   (amsi.org.au, doctortang, khanacademy, dictionary.com, researchgate)
   are deliberately omitted: the pack must stay fully offline.
*/

const MA_CURRICULUM_79 = [

/* ================================ GRADE 7 ================================ */
{
  grade:7, period:"I", sem:"One", icon:"🔢",
  title:"Arithmetic Skills and Sets",
  subtitle:"Unit I: Number theory, divisibility, squares and the language of sets",
  outcomes:["Demonstrate mastery of number theory and use sets to organise information"],
  objectives:["Identify, define and give examples of even, odd, prime and composite numbers","Compute factors and the prime factorization of positive integers","Use the sieve of Eratosthenes to find primes between 1 and 100","Find the LCM, GCF and LCD of given positive integers","State and apply the divisibility rules for 2, 3, 5 and 9","Find the square and square root of a given number","Describe and write sets, and identify finite, infinite, unit and empty sets","Find the union and intersection of sets and list subsets"],
  note:"A <b>prime number</b> has exactly two factors, 1 and itself; a <b>composite number</b> has more than two. <b>Prime factorization</b> writes a number as a product of primes. A <b>set</b> is a well-defined collection of objects; <b>union</b> (∪) gathers all members of both sets, while <b>intersection</b> (∩) keeps only the members common to both.",
  focus:["Even, odd, prime and composite numbers","Factors and prime factorization","Divisibility rules for 2, 3, 5 and 9","LCM, GCF and LCD","Squares and square roots","Describing and writing sets","Finite, infinite, unit and empty sets","Union, intersection and subsets"],
  terms:[
    {t:"prime number", d:"a number with exactly two factors, 1 and itself", x:"13 is a prime number."},
    {t:"composite number", d:"a number with more than two factors", x:"12 is composite."},
    {t:"prime factorization", d:"writing a number as a product of prime numbers", x:"12 = 2 × 2 × 3."},
    {t:"GCF", d:"the greatest common factor of two or more numbers", x:"The GCF of 12 and 18 is 6."},
    {t:"LCM", d:"the least common multiple of two or more numbers", x:"The LCM of 4 and 6 is 12."},
    {t:"divisibility rule", d:"a quick test for whether one number divides another exactly", x:"A number is divisible by 5 if it ends in 0 or 5."},
    {t:"square", d:"the result of multiplying a number by itself", x:"The square of 7 is 49."},
    {t:"square root", d:"the number which, multiplied by itself, gives the given number", x:"√64 = 8."},
    {t:"set", d:"a well-defined collection of objects or ideas", x:"A = {2, 4, 6} is a set."},
    {t:"finite set", d:"a set whose members can be counted and come to an end", x:"{1, 2, 3} is finite."},
    {t:"infinite set", d:"a set whose members go on without end", x:"{1, 2, 3, ...} is infinite."},
    {t:"unit set", d:"a set with exactly one member", x:"{5} is a unit set."},
    {t:"empty set", d:"a set with no members at all", x:"{ } is the empty set."},
    {t:"union", d:"the set of all members of both sets", x:"A ∪ B holds every member of A and of B."},
    {t:"intersection", d:"the set of members common to both sets", x:"A ∩ B holds only shared members."},
    {t:"subset", d:"a set whose members all belong to another set", x:"{2, 4} is a subset of {2, 4, 6}."}
  ],
  worked:[
    {q:"Find the prime factorization of 84.",
     steps:["Divide by the smallest prime: 84 ÷ 2 = 42.","42 ÷ 2 = 21.","21 ÷ 3 = 7.","7 is prime, so stop.","84 = 2 × 2 × 3 × 7 = 2² × 3 × 7."], a:"2² × 3 × 7"},
    {q:"Find the GCF and LCM of 18 and 24.",
     steps:["18 = 2 × 3 × 3;  24 = 2 × 2 × 2 × 3.","GCF: take the primes common to both — one 2 and one 3, giving 6.","LCM: take the highest power of every prime — 2³ × 3² = 8 × 9 = 72."], a:"GCF = 6, LCM = 72"},
    {q:"If A = {1, 2, 3, 4} and B = {3, 4, 5}, find A ∪ B and A ∩ B.",
     steps:["Union: list every member of both, without repeating — {1, 2, 3, 4, 5}.","Intersection: keep only members in BOTH sets — 3 and 4."], a:"A ∪ B = {1, 2, 3, 4, 5};  A ∩ B = {3, 4}"}
  ],
  drillLabel:"Number theory and sets",
  drills:[
    {id:"prime_check"},{id:"prime_factor"},{id:"factors"},{id:"gcf"},{id:"lcm_q"},
    {id:"divisibility"},{id:"square_num"},{id:"sqrt_exact"},{id:"even_odd"},
    {id:"set_type"},{id:"set_ops"},{id:"subsets_num"}
  ],
  word:[
    {q:"Two bells ring at intervals of 12 and 18 minutes. If they ring together at 6:00 a.m., when will they next ring together?", a:"LCM of 12 and 18 = 36, so at 6:36 a.m."},
    {q:"A trader wants to pack 24 oranges and 36 mangoes into boxes with the same number of each and none left over. What is the largest number of boxes?", a:"GCF of 24 and 36 = 12 boxes"},
    {q:"Is 3 456 divisible by 3? Give a reason.", a:"3 + 4 + 5 + 6 = 18, which is divisible by 3, so yes."},
    {q:"In a class of 40, 25 play football and 18 play kickball, and 7 play both. How many play at least one game?", a:"25 + 18 − 7 = 36 pupils"},
    {q:"A square garden has an area of 169 m². Find the length of one side.", a:"√169 = 13 m"}
  ],
  challenge:[
    {q:"Explain why 1 is neither prime nor composite.", a:"A prime has exactly two different factors and a composite more than two; 1 has only one factor, itself, so it fits neither."},
    {q:"A set has 5 members. How many subsets does it have, and why?", a:"2⁵ = 32, because each member can either be in or out of a subset, giving 2 × 2 × 2 × 2 × 2 choices."},
    {q:"Find the smallest number that is divisible by 2, 3, 5 and 9.", a:"LCM = 2 × 3² × 5 = 90"}
  ],
  activities:["Build the sieve of Eratosthenes for 1–100","Practise divisibility rules on large numbers","Sort real objects into sets and describe them","Draw Venn diagrams for two sets"],
  materials:["Number charts and grids","Counters and sorting trays","Squared paper","Set diagram charts"],
  assessment:["Quiz on primes and factors","Class assignment on LCM and GCF","Set operations test","Observation and participation"]
},
{
  grade:7, period:"II", sem:"One", icon:"➗",
  title:"Fractions, Ratio and Proportion",
  subtitle:"Unit II: Operations on fractions, complex fractions, ratio and proportion",
  outcomes:["Simplify complex fractions and apply ratio and proportion to real-life problems"],
  objectives:["Perform the four operations on fractions","Find fractional parts of numbers","Combine and simplify complex fractions","Express ratios and proportions as fractions","Solve word problems on ratio and proportion"],
  note:"To add or subtract fractions, first make the <b>denominators the same</b>. To multiply, multiply the tops and the bottoms. To divide, <b>invert the second fraction and multiply</b>. A <b>ratio</b> compares two quantities; a <b>proportion</b> states that two ratios are equal, and it is solved by <b>cross multiplication</b>.",
  focus:["The four operations on fractions","Fractional parts of numbers","Complex fractions","Ratio in simplest form","Proportion and cross multiplication","Word problems on sharing"],
  terms:[
    {t:"numerator", d:"the number above the line in a fraction", x:"In 3/4 the numerator is 3."},
    {t:"denominator", d:"the number below the line in a fraction", x:"In 3/4 the denominator is 4."},
    {t:"LCD", d:"the least common denominator of two or more fractions", x:"The LCD of 1/4 and 1/6 is 12."},
    {t:"improper fraction", d:"a fraction whose numerator is larger than its denominator", x:"7/4 is improper."},
    {t:"mixed number", d:"a whole number together with a fraction", x:"1¾ is a mixed number."},
    {t:"complex fraction", d:"a fraction that has a fraction in its numerator or denominator", x:"(1/2)/(3/4) is complex."},
    {t:"reciprocal", d:"the fraction turned upside down", x:"The reciprocal of 2/3 is 3/2."},
    {t:"ratio", d:"a comparison of two quantities of the same kind", x:"The ratio of boys to girls is 3 : 2."},
    {t:"proportion", d:"a statement that two ratios are equal", x:"2 : 3 = 4 : 6 is a proportion."},
    {t:"cross multiply", d:"multiply each numerator by the opposite denominator", x:"Cross multiply to solve a proportion."}
  ],
  worked:[
    {q:"Simplify the complex fraction (2/3) ÷ (4/9).",
     steps:["Dividing means multiplying by the reciprocal.","(2/3) × (9/4).","Cancel: 9 and 3 give 3;  2 and 4 give 2.","= (1 × 3)/(1 × 2) = 3/2 = 1½."], a:"3/2 or 1½"},
    {q:"Solve the proportion 3 : 5 = n : 40.",
     steps:["Write as fractions: 3/5 = n/40.","Cross multiply: 5 × n = 3 × 40.","5n = 120.","n = 24."], a:"n = 24"},
    {q:"Share L$960 between two people in the ratio 3 : 5.",
     steps:["Total parts = 3 + 5 = 8.","One part = 960 ÷ 8 = 120.","First share = 3 × 120 = L$360.","Second share = 5 × 120 = L$600."], a:"L$360 and L$600"}
  ],
  drillLabel:"Fractions, ratio and proportion",
  drills:[
    {id:"frac_add_unlike"},{id:"frac_sub_unlike"},{id:"frac_mul"},{id:"frac_div"},
    {id:"frac_simplify"},{id:"mixed_add"},{id:"part_of_set"},
    {id:"ratio_simplify"},{id:"proportion"},{id:"ratio_share"}
  ],
  word:[
    {q:"A farmer harvested 3/4 of a hectare on Monday and 2/5 on Tuesday. How much altogether?", a:"3/4 + 2/5 = 15/20 + 8/20 = 23/20 = 1 3/20 hectares"},
    {q:"Two-fifths of a class of 45 are girls. How many are boys?", a:"Girls = 18, so boys = 27"},
    {q:"The ratio of cassava to rice in a store is 7 : 4. If there are 84 bags of cassava, how many bags of rice?", a:"84 ÷ 7 × 4 = 48 bags"},
    {q:"A recipe needs 2/3 cup of oil for 4 people. How much is needed for 6 people?", a:"2/3 × 6/4 = 1 cup"},
    {q:"L$1 500 is shared in the ratio 2 : 3. Find the larger share.", a:"1500 ÷ 5 × 3 = L$900"}
  ],
  challenge:[
    {q:"Why do you invert and multiply when dividing by a fraction?", a:"Dividing by a number is the same as multiplying by its reciprocal, because a ÷ b/c asks how many b/c fit into a, which is a × c/b."},
    {q:"A tank is 3/8 full. After adding 60 litres it is 3/4 full. Find the capacity of the tank.", a:"3/4 − 3/8 = 3/8 of the tank is 60 L, so the capacity is 60 ÷ 3/8 = 160 litres."},
    {q:"Two ratios are 4 : 6 and 6 : 9. Are they in proportion? Justify.", a:"Yes. Both simplify to 2 : 3, and cross multiplying gives 4 × 9 = 36 and 6 × 6 = 36."}
  ],
  activities:["Simplify complex fractions in small groups","Solve ratio problems with local trade examples","Use fraction strips to compare values","Solve word problems on proportion"],
  materials:["Fraction strips and charts","Squared paper","Local price lists","Measuring cups"],
  assessment:["Quiz on operations with fractions","Ratio and proportion test","Group problem solving","Class assignment"]
},
{
  grade:7, period:"III", sem:"One", icon:"💵",
  title:"Decimals, Percents and Business Arithmetic",
  subtitle:"Unit III: Conversions, commission, discount, interest, profit and loss",
  outcomes:["Apply decimals and percent to solve problems on commission, discount, taxes, interest, profit and loss"],
  objectives:["Convert from decimal to percent and fraction and vice versa","Solve problems involving commission and discount","Compute simple interest","Compute profit, loss and percentage gain or loss","Solve problems involving taxes and royalty"],
  note:"<b>Percent</b> means 'out of a hundred'. To change a decimal to a percent, multiply by 100; to change a percent to a decimal, divide by 100. In business, <b>profit or loss is always worked out on the COST price</b>, which is the commonest place learners go wrong.",
  focus:["Decimal, fraction and percent conversion","Commission and discount","Simple interest","Profit, loss and percentage gain","Sales tax and royalty"],
  terms:[
    {t:"percent", d:"a number expressed out of one hundred", x:"25% means 25 out of 100."},
    {t:"commission", d:"payment to an agent as a percentage of sales", x:"He earned 5% commission."},
    {t:"discount", d:"a reduction on the marked price", x:"A 10% discount was given."},
    {t:"marked price", d:"the price shown on the article before discount", x:"The marked price is L$500."},
    {t:"cost price", d:"the price at which an article is bought", x:"The cost price was L$400."},
    {t:"selling price", d:"the price at which an article is sold", x:"The selling price was L$480."},
    {t:"profit", d:"the amount by which the selling price exceeds the cost price", x:"His profit was L$80."},
    {t:"loss", d:"the amount by which the cost price exceeds the selling price", x:"She made a loss of L$50."},
    {t:"principal", d:"the sum of money borrowed or invested", x:"The principal was L$5 000."},
    {t:"simple interest", d:"interest calculated only on the principal", x:"Simple interest = PRT ÷ 100."},
    {t:"sales tax", d:"a tax added to the price of goods", x:"A 7% sales tax was charged."},
    {t:"royalty", d:"a payment made for the use of land or property", x:"The company pays royalty on the ore."}
  ],
  worked:[
    {q:"An article costing L$800 is sold for L$920. Find the percentage gain.",
     steps:["Gain = 920 − 800 = L$120.","Percentage gain = gain ÷ COST price × 100.","= 120 ÷ 800 × 100.","= 15%."], a:"15% gain"},
    {q:"Find the simple interest on L$6 000 at 8% per annum for 3 years.",
     steps:["I = P × R × T ÷ 100.","= 6 000 × 8 × 3 ÷ 100.","= 144 000 ÷ 100.","= L$1 440."], a:"L$1 440"},
    {q:"A shirt marked L$1 200 is sold at a 15% discount. Find the selling price.",
     steps:["Discount = 15% of 1 200 = L$180.","Selling price = 1 200 − 180.","= L$1 020.","(Or 85% of 1 200 = L$1 020.)"], a:"L$1 020"}
  ],
  drillLabel:"Percent and business arithmetic",
  drills:[
    {id:"percent_of"},{id:"percent_frac"},{id:"percent_dec"},{id:"dec_to_frac"},{id:"frac_to_dec"},
    {id:"simple_interest"},{id:"discount_q"},{id:"commission_q"},{id:"profit_loss"},{id:"sales_tax"}
  ],
  word:[
    {q:"An agent sells goods worth L$40 000 and earns 6% commission. How much does he earn?", a:"L$2 400"},
    {q:"A radio bought for L$1 500 is sold for L$1 200. Find the percentage loss.", a:"300/1500 × 100 = 20% loss"},
    {q:"Find the amount due on L$10 000 at 5% simple interest for 4 years.", a:"Interest = L$2 000, amount = L$12 000"},
    {q:"A bag costs L$900 and 10% sales tax is added. What is the total cost?", a:"L$990"},
    {q:"Convert 0.35 to a percent and to a fraction in simplest form.", a:"35% and 7/20"}
  ],
  challenge:[
    {q:"A trader marks goods up 25% then gives a 20% discount. Does he gain or lose? Show why.", a:"On cost 100: marked 125; after 20% discount = 100. He breaks even, because the 20% is taken on the larger marked price."},
    {q:"Why is percentage gain calculated on the cost price and not the selling price?", a:"The cost price is what the trader actually risked, so it is the fair basis for measuring the return on that outlay."},
    {q:"Which is the better buy: 3 kg for L$450 or 5 kg for L$700?", a:"L$150/kg against L$140/kg, so 5 kg for L$700 is better."}
  ],
  activities:["Run a class mini-market with symbolic money","Compare prices to find the better buy","Calculate interest on sample loans","Convert between fractions, decimals and percents"],
  materials:["Symbolic money and price tags","Calculators","Local shop receipts","Conversion charts"],
  assessment:["Quiz on conversions","Business arithmetic test","Mini-market project","Class assignment"]
},
{
  grade:7, period:"IV", sem:"Two", icon:"🅰️",
  title:"Basic Algebra",
  subtitle:"Unit IV: Signed numbers, variables, expressions and linear open sentences",
  outcomes:["Work confidently with signed numbers and evaluate algebraic expressions and formulas"],
  objectives:["Identify positive and negative integers (signed numbers)","Add, subtract, multiply and divide signed numbers","Define variable, constant, coefficient and exponent","Evaluate algebraic expressions and formulas","Solve and graph linear open sentences in one variable"],
  note:"A <b>signed number</b> carries a positive or negative sign. When multiplying or dividing, <b>like signs give a positive answer and unlike signs give a negative one</b>. In the term 5x², 5 is the <b>coefficient</b>, x is the <b>variable</b> and 2 is the <b>exponent</b>. An <b>open sentence</b> such as 2x + 3 = 11 becomes true or false once x is given a value.",
  focus:["Positive and negative integers","Operations on signed numbers","Variables, constants, coefficients and exponents","Evaluating expressions and formulas","Solving linear open sentences","Graphing solutions on a number line"],
  terms:[
    {t:"integer", d:"a whole number, positive, negative or zero", x:"−5, 0 and 7 are integers."},
    {t:"signed number", d:"a number with a positive or negative sign", x:"−12 is a signed number."},
    {t:"variable", d:"a letter standing for an unknown number", x:"In 3x, x is the variable."},
    {t:"constant", d:"a fixed number in an expression", x:"In 3x + 7, 7 is the constant."},
    {t:"coefficient", d:"the number multiplying the variable", x:"In 5y the coefficient is 5."},
    {t:"exponent", d:"the small raised number showing repeated multiplication", x:"In x³ the exponent is 3."},
    {t:"monomial", d:"an expression with one term", x:"4x is a monomial."},
    {t:"binomial", d:"an expression with two terms", x:"x + 3 is a binomial."},
    {t:"trinomial", d:"an expression with three terms", x:"x² + 2x + 1 is a trinomial."},
    {t:"open sentence", d:"an equation containing a variable", x:"2x + 1 = 9 is an open sentence."},
    {t:"solution", d:"the value of the variable that makes the sentence true", x:"x = 4 is the solution."},
    {t:"evaluate", d:"to find the value of an expression for given values", x:"Evaluate 2x when x = 5."}
  ],
  worked:[
    {q:"Simplify (−8) + (−5) − (−3).",
     steps:["(−8) + (−5) = −13 (same signs, add and keep the sign).","Subtracting −3 means adding 3.","−13 + 3 = −10."], a:"−10"},
    {q:"Evaluate 3x² − 2y when x = 4 and y = 5.",
     steps:["Substitute: 3(4)² − 2(5).","Work out the power first: 4² = 16.","3 × 16 = 48;  2 × 5 = 10.","48 − 10 = 38."], a:"38"},
    {q:"Solve 5x − 7 = 23.",
     steps:["Add 7 to both sides: 5x = 30.","Divide both sides by 5.","x = 6."], a:"x = 6"}
  ],
  drillLabel:"Signed numbers and algebraic expressions",
  drills:[
    {id:"int_add"},{id:"int_sub"},{id:"int_mul"},{id:"int_div"},{id:"int_order"},
    {id:"eval_expr"},{id:"like_terms"},{id:"solve_linear"},{id:"open_sentence_graph"},{id:"index_eval"}
  ],
  word:[
    {q:"The temperature falls from 8 °C to −3 °C. By how many degrees did it fall?", a:"8 − (−3) = 11 degrees"},
    {q:"A trader gains L$450 on Monday and loses L$620 on Tuesday. What is the net result?", a:"450 + (−620) = −170, a loss of L$170"},
    {q:"A number multiplied by 4 and then increased by 9 gives 41. Find the number.", a:"4n + 9 = 41, so n = 8"},
    {q:"The perimeter of a square is P = 4s. Find P when s = 12 cm.", a:"P = 48 cm"},
    {q:"A well is 15 m deep. A bucket is lowered 9 m. Write its position as a signed number relative to ground level.", a:"−9 m"}
  ],
  challenge:[
    {q:"Explain why the product of two negative numbers is positive.", a:"Multiplying by a negative reverses direction on the number line; reversing twice returns to the original positive direction."},
    {q:"If 3x + 5 = 2x + 12, find x and check your answer.", a:"x = 7. Check: 3(7)+5 = 26 and 2(7)+12 = 26, so both sides agree."},
    {q:"Write an expression for the cost of n books at L$85 each plus a fixed delivery of L$200.", a:"85n + 200"}
  ],
  activities:["Model signed numbers on a number line","Evaluate formulas from science and geometry","Solve and graph open sentences","Identify coefficients and exponents in expressions"],
  materials:["Number lines and counters","Algebra tiles","Squared paper","Formula charts"],
  assessment:["Quiz on signed numbers","Expression evaluation test","Class assignment on equations","Observation"]
},
{
  grade:7, period:"V", sem:"Two", icon:"📐",
  title:"Geometry",
  subtitle:"Unit V: Angles, triangles, polygons, perimeter and area",
  outcomes:["Identify geometric figures and compute their perimeter and area"],
  objectives:["Identify and name the types of angle","Compute missing angles in triangles and on straight lines","Identify polygons and state their properties","Find the perimeter and area of rectangles, squares, triangles and parallelograms","Find the circumference and area of a circle"],
  note:"Angles on a <b>straight line add up to 180°</b>, angles at a <b>point add up to 360°</b>, and the angles of a <b>triangle add up to 180°</b>. <b>Perimeter</b> is the distance round a shape, measured in units of length; <b>area</b> is the surface covered, measured in <b>square</b> units.",
  focus:["Types of angle","Angles in triangles and on lines","Properties of polygons","Perimeter of plane figures","Area of rectangle, square, triangle and parallelogram","Circumference and area of a circle"],
  terms:[
    {t:"acute angle", d:"an angle less than 90°", x:"A 45° angle is acute."},
    {t:"right angle", d:"an angle of exactly 90°", x:"The corner of a book is a right angle."},
    {t:"obtuse angle", d:"an angle between 90° and 180°", x:"A 120° angle is obtuse."},
    {t:"reflex angle", d:"an angle greater than 180°", x:"A 250° angle is reflex."},
    {t:"complementary angles", d:"two angles that add up to 90°", x:"30° and 60° are complementary."},
    {t:"supplementary angles", d:"two angles that add up to 180°", x:"110° and 70° are supplementary."},
    {t:"polygon", d:"a closed figure with straight sides", x:"A hexagon is a polygon."},
    {t:"perimeter", d:"the total distance round a figure", x:"The perimeter of the field is 90 m."},
    {t:"area", d:"the amount of surface a figure covers", x:"The area is 24 cm²."},
    {t:"radius", d:"the distance from the centre of a circle to its edge", x:"The radius is 7 cm."},
    {t:"diameter", d:"the distance across a circle through the centre", x:"The diameter is twice the radius."},
    {t:"circumference", d:"the distance round a circle", x:"Circumference = 2πr."}
  ],
  worked:[
    {q:"Two angles of a triangle are 65° and 48°. Find the third angle.",
     steps:["The angles of a triangle add up to 180°.","65 + 48 = 113.","180 − 113 = 67°."], a:"67°"},
    {q:"Find the area of a triangle with base 14 cm and height 9 cm.",
     steps:["Area of a triangle = ½ × base × height.","= ½ × 14 × 9.","= 7 × 9.","= 63 cm²."], a:"63 cm²"},
    {q:"Find the circumference of a circle of radius 21 cm (π = 22/7).",
     steps:["Circumference = 2πr.","= 2 × 22/7 × 21.","= 44/7 × 21.","= 132 cm."], a:"132 cm"}
  ],
  drillLabel:"Angles, perimeter and area",
  drills:[
    {id:"angle_type"},{id:"angle_missing"},{id:"triangle_angle"},{id:"angle_pair"},
    {id:"perimeter_rect"},{id:"area_rect"},{id:"area_tri"},{id:"area_para"},
    {id:"circumference"},{id:"area_circle"}
  ],
  word:[
    {q:"A rectangular farm is 45 m by 30 m. Find the cost of fencing it at L$120 per metre.", a:"Perimeter = 150 m, cost = L$18 000"},
    {q:"A square tile has a side of 25 cm. How many tiles cover 1 m²?", a:"Each tile is 625 cm²; 10 000 ÷ 625 = 16 tiles"},
    {q:"Find the area of a parallelogram of base 18 cm and height 11 cm.", a:"198 cm²"},
    {q:"Two angles on a straight line are 3x and 2x. Find x.", a:"5x = 180, so x = 36°"},
    {q:"A circular pond has a diameter of 28 m. Find its area (π = 22/7).", a:"r = 14 m, area = 616 m²"}
  ],
  challenge:[
    {q:"Two rectangles have the same perimeter but different areas. Give an example and explain.", a:"12 × 2 and 8 × 6 both have perimeter 28, but areas 24 and 48. The nearer a rectangle is to a square, the greater its area for a fixed perimeter."},
    {q:"Why can a triangle not have two right angles?", a:"Two right angles already total 180°, leaving 0° for the third angle, which is impossible."},
    {q:"The area of a square is 144 cm². Find its perimeter.", a:"Side = 12 cm, perimeter = 48 cm"}
  ],
  activities:["Measure and classify angles with a protractor","Find areas of the classroom and school plot","Draw and name polygons","Investigate circumference and diameter"],
  materials:["Protractors, rulers and set squares","Measuring tapes","Squared paper","Circular objects"],
  assessment:["Angle measurement practical","Area and perimeter test","Quiz on polygons","Class assignment"]
},
{
  grade:7, period:"VI", sem:"Two", icon:"📊",
  title:"Co-ordinate Geometry and Solid Figures",
  subtitle:"Unit VI: The number line, the co-ordinate plane, surface area and volume",
  outcomes:["Plot points in the co-ordinate plane and compute the surface area and volume of solids"],
  objectives:["Locate integers, positive and negative, on the number line","Plot points and name their co-ordinates in the rectangular co-ordinate system","Identify the four quadrants","Graph open sentences in one variable","Find the surface area of solid figures","Find the volume of cubes, cuboids and cylinders"],
  note:"The <b>co-ordinate plane</b> is formed by a horizontal <b>x-axis</b> and a vertical <b>y-axis</b> crossing at the <b>origin</b> (0, 0). A point is written (x, y) — <b>along first, then up</b>. <b>Volume</b> is the space a solid occupies, measured in cubic units; <b>surface area</b> is the total area of all its faces, in square units.",
  focus:["Integers on the number line","The rectangular co-ordinate system","Co-ordinates and the four quadrants","Graphing open sentences","Surface area of solids","Volume of cube, cuboid and cylinder"],
  terms:[
    {t:"x-axis", d:"the horizontal line in the co-ordinate plane", x:"Move along the x-axis first."},
    {t:"y-axis", d:"the vertical line in the co-ordinate plane", x:"Then move up the y-axis."},
    {t:"origin", d:"the point (0, 0) where the axes cross", x:"Start counting from the origin."},
    {t:"co-ordinates", d:"the pair of numbers fixing a point's position", x:"The co-ordinates are (3, 5)."},
    {t:"quadrant", d:"one of the four regions of the co-ordinate plane", x:"(2, 3) lies in the first quadrant."},
    {t:"abscissa", d:"the x-co-ordinate of a point", x:"In (4, 7) the abscissa is 4."},
    {t:"ordinate", d:"the y-co-ordinate of a point", x:"In (4, 7) the ordinate is 7."},
    {t:"solid", d:"a three-dimensional figure", x:"A cube is a solid."},
    {t:"face", d:"a flat surface of a solid", x:"A cuboid has six faces."},
    {t:"surface area", d:"the total area of all the faces of a solid", x:"Surface area is in cm²."},
    {t:"volume", d:"the space occupied by a solid", x:"Volume is in cm³."},
    {t:"cuboid", d:"a box-shaped solid with six rectangular faces", x:"A matchbox is a cuboid."}
  ],
  worked:[
    {q:"Plot the point (−3, 4) and state its quadrant.",
     steps:["Start at the origin.","Move 3 units LEFT because x is negative.","Move 4 units UP because y is positive.","x is negative and y positive, so it lies in the second quadrant."], a:"Second quadrant"},
    {q:"Find the volume of a cuboid 8 cm by 5 cm by 4 cm.",
     steps:["Volume of a cuboid = length × breadth × height.","= 8 × 5 × 4.","= 160 cm³."], a:"160 cm³"},
    {q:"Find the total surface area of a cube of edge 6 cm.",
     steps:["A cube has 6 equal square faces.","Area of one face = 6 × 6 = 36 cm².","Total = 6 × 36.","= 216 cm²."], a:"216 cm²"}
  ],
  drillLabel:"Co-ordinates, surface area and volume",
  drills:[
    {id:"plot_quadrant"},{id:"open_sentence_graph"},{id:"int_order"},
    {id:"volume_cube"},{id:"volume_prism"},{id:"surface_area_prism"},{id:"volume_cylinder"},
    {id:"area_rect"},{id:"convert_metric"},{id:"metric_convert_jh"}
  ],
  word:[
    {q:"A water tank is 2 m long, 1.5 m wide and 1 m deep. How many litres does it hold? (1 m³ = 1 000 L)", a:"3 m³ = 3 000 litres"},
    {q:"State the co-ordinates of a point 5 units left of the origin and 2 units down.", a:"(−5, −2)"},
    {q:"A cube has a volume of 343 cm³. Find the length of its edge.", a:"∛343 = 7 cm"},
    {q:"In which quadrant does the point (6, −4) lie?", a:"The fourth quadrant"},
    {q:"A cylindrical drum has radius 7 cm and height 20 cm. Find its volume (π = 22/7).", a:"3 080 cm³"}
  ],
  challenge:[
    {q:"Points A(1, 2), B(5, 2) and C(5, 6) are three corners of a rectangle. Find the fourth corner.", a:"(1, 6), because the opposite sides must be parallel and equal."},
    {q:"Two cuboids have the same volume but different surface areas. Explain how.", a:"Volume depends on the product of the three dimensions, but surface area depends on their combination; a long thin box has far more surface than a nearly cubic one of equal volume."},
    {q:"How many small cubes of edge 2 cm fit into a box 8 cm by 6 cm by 4 cm?", a:"192 ÷ 8 = 24 cubes"}
  ],
  activities:["Plot points and identify quadrants on squared paper","Build models of cubes and cuboids","Measure and compute volumes of containers","Graph simple open sentences"],
  materials:["Squared and graph paper","Nets and solid models","Measuring containers","Rulers"],
  assessment:["Graph plotting exercise","Volume and surface area test","Model building project","Quiz"]
},

/* ================================ GRADE 8 ================================ */
{
  grade:8, period:"I", sem:"One", icon:"🧮",
  title:"Operations on Rational Numbers and Number Theory",
  subtitle:"Unit I: Rational number operations, prime factorization, exponents and sets",
  outcomes:["Perform operations on rational numbers and apply number theory to real data"],
  objectives:["Add and subtract whole numbers, decimals, fractions and integers","Multiply and divide whole numbers, decimals, fractions and integers","Solve problems involving the operations","Compute prime factorization","Use exponents to express repeated multiplication","Apply sets of numbers to real situations"],
  note:"A <b>rational number</b> is any number that can be written as a fraction of two integers — this includes whole numbers, terminating decimals and recurring decimals. <b>Exponents</b> record repeated multiplication, so 2⁵ means 2 × 2 × 2 × 2 × 2. Always follow the <b>order of operations</b>: brackets, then powers, then multiply and divide, then add and subtract.",
  focus:["Operations on rational numbers","Order of operations","Prime factorization","Exponents and powers","Sets of numbers","Problems from population data"],
  terms:[
    {t:"rational number", d:"a number that can be written as a fraction of two integers", x:"0.75 = 3/4 is rational."},
    {t:"integer", d:"a positive or negative whole number, or zero", x:"−7 is an integer."},
    {t:"exponent", d:"the index showing how many times a base is multiplied by itself", x:"In 3⁴ the exponent is 4."},
    {t:"base", d:"the number being raised to a power", x:"In 3⁴ the base is 3."},
    {t:"power", d:"the result of raising a base to an exponent", x:"3⁴ = 81 is a power of 3."},
    {t:"order of operations", d:"the agreed sequence for working out expressions", x:"Brackets come before powers."},
    {t:"prime factorization", d:"expressing a number as a product of primes", x:"60 = 2² × 3 × 5."},
    {t:"reciprocal", d:"the number that multiplies a value to give 1", x:"The reciprocal of 5 is 1/5."},
    {t:"terminating decimal", d:"a decimal that comes to an end", x:"0.25 is terminating."},
    {t:"recurring decimal", d:"a decimal in which digits repeat forever", x:"0.333... is recurring."}
  ],
  worked:[
    {q:"Simplify 24 ÷ (3 + 5) × 2² − 4.",
     steps:["Brackets first: 3 + 5 = 8.","Powers next: 2² = 4.","24 ÷ 8 = 3.","3 × 4 = 12.","12 − 4 = 8."], a:"8"},
    {q:"Express 360 in prime factors using exponents.",
     steps:["360 ÷ 2 = 180;  180 ÷ 2 = 90;  90 ÷ 2 = 45.","45 ÷ 3 = 15;  15 ÷ 3 = 5.","5 is prime.","360 = 2³ × 3² × 5."], a:"2³ × 3² × 5"},
    {q:"Add the integers (−15) + 24 + (−9).",
     steps:["Add the negatives: (−15) + (−9) = −24.","Now −24 + 24.","= 0."], a:"0"}
  ],
  drillLabel:"Rational numbers, exponents and sets",
  drills:[
    {id:"int_add"},{id:"int_sub"},{id:"int_mul"},{id:"int_div"},
    {id:"order_ops"},{id:"prime_factor"},{id:"index_eval"},{id:"index_mul"},{id:"index_div"},
    {id:"dec_add"},{id:"frac_add_unlike"},{id:"set_ops"}
  ],
  word:[
    {q:"A town's population rose by 1 250 and later fell by 480. Write the net change as an integer.", a:"+770"},
    {q:"In an election a candidate polled 3/8 of 24 000 votes. How many votes was that?", a:"9 000 votes"},
    {q:"Express 2 × 2 × 2 × 5 × 5 using exponents.", a:"2³ × 5²"},
    {q:"A recipe needs 1¾ cups of flour and 2½ cups of maize meal. Find the total.", a:"4¼ cups"},
    {q:"Simplify 100 − 3 × (4 + 6).", a:"100 − 30 = 70"}
  ],
  challenge:[
    {q:"Is every integer a rational number? Explain.", a:"Yes. Any integer n can be written as n/1, a fraction of two integers, so it satisfies the definition."},
    {q:"Why does 5⁰ equal 1?", a:"Dividing 5ⁿ by 5ⁿ gives 1, and by the law of indices it also gives 5⁰, so 5⁰ must equal 1."},
    {q:"Arrange in ascending order: −0.5, 3/4, −2, 0.25.", a:"−2, −0.5, 0.25, 3/4"}
  ],
  activities:["Use census data for the four operations","Build factor trees for prime factorization","Practise the order of operations","Classify numbers into sets"],
  materials:["Population data tables","Factor tree charts","Calculators","Number classification charts"],
  assessment:["Quiz on order of operations","Exponent test","Class assignment","Research on population data"]
},
{
  grade:8, period:"II", sem:"One", icon:"✖️",
  title:"Basic Algebraic Expressions and Formulas",
  subtitle:"Unit II: Like terms, monomials, polynomials, formulas and inequalities",
  outcomes:["Construct and solve real-life problems involving algebraic expressions, binomials and trinomials"],
  objectives:["Evaluate basic expressions and formulas","Simplify expressions by combining like terms","Multiply and divide monomials","Add and subtract monomials, binomials and trinomials","Apply the laws of indices","Solve equations involving inequalities"],
  note:"<b>Like terms</b> have exactly the same variable part, so 3x and 5x combine but 3x and 3x² do not. When <b>subtracting a bracket</b>, the sign of every term inside changes — this is the single commonest error in junior high algebra.",
  focus:["Order of operations","Combining like terms","Evaluating formulas","Adding and subtracting polynomials","Multiplying and dividing monomials","Laws of indices","Inequalities"],
  terms:[
    {t:"like terms", d:"terms with exactly the same variable and exponent", x:"4x and 9x are like terms."},
    {t:"unlike terms", d:"terms whose variable parts differ", x:"4x and 4y are unlike terms."},
    {t:"monomial", d:"an algebraic expression of one term", x:"7ab is a monomial."},
    {t:"binomial", d:"an expression of two terms", x:"3x − 5 is a binomial."},
    {t:"trinomial", d:"an expression of three terms", x:"x² + 4x + 3 is a trinomial."},
    {t:"polynomial", d:"an expression of one or more terms", x:"2x³ + x − 7 is a polynomial."},
    {t:"formula", d:"a rule connecting quantities, written with symbols", x:"A = lw is a formula."},
    {t:"substitute", d:"to put a number in place of a variable", x:"Substitute x = 3 into the expression."},
    {t:"inequality", d:"a statement that one quantity is greater or less than another", x:"x > 5 is an inequality."},
    {t:"laws of indices", d:"the rules for combining powers of the same base", x:"x³ × x² = x⁵."}
  ],
  worked:[
    {q:"Simplify (5x² + 3x − 7) − (2x² − 4x + 5).",
     steps:["Change the sign of EVERY term in the second bracket: −2x² + 4x − 5.","Combine like terms: 5x² − 2x² = 3x².","3x + 4x = 7x.","−7 − 5 = −12.","= 3x² + 7x − 12."], a:"3x² + 7x − 12"},
    {q:"Simplify (6a³b²) ÷ (2ab).",
     steps:["Divide the coefficients: 6 ÷ 2 = 3.","Subtract the exponents of a: a³⁻¹ = a².","Subtract the exponents of b: b²⁻¹ = b.","= 3a²b."], a:"3a²b"},
    {q:"Solve the inequality 4x − 3 < 17.",
     steps:["Add 3 to both sides: 4x < 20.","Divide both sides by 4 (positive, so the sign stays).","x < 5."], a:"x < 5"}
  ],
  drillLabel:"Algebraic expressions and indices",
  drills:[
    {id:"like_terms"},{id:"eval_expr"},{id:"poly_add"},{id:"poly_sub"},
    {id:"mono_mul"},{id:"mono_div"},{id:"index_mul"},{id:"index_div"},{id:"index_pow"},
    {id:"solve_linear"},{id:"solve_inequality"},{id:"order_ops"}
  ],
  word:[
    {q:"A rectangle has length (x + 5) and width x. Write and simplify an expression for its perimeter.", a:"2(x + 5) + 2x = 4x + 10"},
    {q:"The cost of n exercise books at L$60 each plus L$150 transport. Write the formula and find the cost of 12 books.", a:"C = 60n + 150; C = L$870"},
    {q:"Simplify 7y + 3 − 2y + 8.", a:"5y + 11"},
    {q:"Using A = ½bh, find the height when A = 48 cm² and b = 12 cm.", a:"h = 8 cm"},
    {q:"Solve 3(x − 2) = 18.", a:"x = 8"}
  ],
  challenge:[
    {q:"Why can 3x and 3x² not be added into a single term?", a:"They are unlike terms: x and x² represent different quantities, so their coefficients cannot be combined."},
    {q:"A learner writes (2x)² = 2x². Correct the error and explain.", a:"(2x)² = 4x². The exponent applies to BOTH the 2 and the x, so the coefficient is squared as well."},
    {q:"If x > 3 and y < −2, what can be said about x − y?", a:"x − y > 5, because subtracting a number less than −2 adds more than 2 to a value already above 3."}
  ],
  activities:["Simplify expressions using algebra tiles","Apply formulas from geometry and science","Practise the laws of indices","Solve and graph inequalities"],
  materials:["Algebra tiles","Formula charts","Squared paper","Number lines"],
  assessment:["Quiz on like terms","Polynomial operations test","Formula application exercise","Class assignment"]
},
{
  grade:8, period:"III", sem:"One", icon:"📈",
  title:"Percent, Proportion and Rates",
  subtitle:"Unit III: The three types of percent, interest, discount and unit rates",
  outcomes:["Use percent, proportion and rates to make informed everyday and business decisions"],
  objectives:["Convert fractions and decimals to percent and vice versa","Identify the three types of percent problem","Find rates using proportions","Find simple interest, discount, commission, percent gain or loss and sales tax","Solve problems involving unit rates and better buys","Use proportion in scale drawing"],
  note:"There are <b>three types of percent problem</b>: finding the percentage of a number, finding what percent one number is of another, and finding the whole when a percent is known. A <b>unit rate</b> compares a quantity to ONE unit of another, which is how we judge the better buy.",
  focus:["Fractions, decimals and percent","The three parts of percent","Simple interest","Discount and commission","Percent gain or loss","Rates and unit rates","Scale drawing"],
  terms:[
    {t:"rate", d:"a comparison of two quantities of different kinds", x:"60 km per hour is a rate."},
    {t:"unit rate", d:"a rate expressed per one unit", x:"L$150 per kilogram is a unit rate."},
    {t:"proportion", d:"a statement that two ratios are equal", x:"Solve using a proportion."},
    {t:"percent gain", d:"profit expressed as a percentage of the cost price", x:"He made a 20% gain."},
    {t:"percent loss", d:"loss expressed as a percentage of the cost price", x:"She had a 10% loss."},
    {t:"principal", d:"the money invested or borrowed", x:"The principal is L$8 000."},
    {t:"rate of interest", d:"the percent charged per year", x:"The rate is 5% per annum."},
    {t:"scale", d:"the ratio of a drawing to the real object", x:"The scale is 1 : 50 000."},
    {t:"better buy", d:"the option with the lower unit rate", x:"Compare unit rates to find the better buy."},
    {t:"means and extremes", d:"the inner and outer terms of a proportion", x:"In a : b = c : d, b and c are the means."}
  ],
  worked:[
    {q:"18 is what percent of 60?",
     steps:["Write as a fraction: 18/60.","Multiply by 100 to change to a percent.","18 ÷ 60 × 100.","= 30%."], a:"30%"},
    {q:"25% of a number is 45. Find the number.",
     steps:["Let the number be n:  25% of n = 45.","0.25n = 45.","n = 45 ÷ 0.25.","n = 180."], a:"180"},
    {q:"On a map of scale 1 : 50 000, two towns are 6 cm apart. Find the real distance in km.",
     steps:["Real distance = 6 × 50 000 cm.","= 300 000 cm.","Divide by 100 000 to change cm to km.","= 3 km."], a:"3 km"}
  ],
  drillLabel:"Percent, proportion and rates",
  drills:[
    {id:"percent_of"},{id:"percent_frac"},{id:"percent_dec"},{id:"proportion"},{id:"rate"},
    {id:"simple_interest"},{id:"compound_interest"},{id:"discount_q"},{id:"commission_q"},
    {id:"profit_loss"},{id:"sales_tax"},{id:"ratio_share"}
  ],
  word:[
    {q:"Which is the better buy: 500 g for L$225 or 2 kg for L$840?", a:"L$450/kg against L$420/kg, so 2 kg for L$840"},
    {q:"A phone company charges L$3 per minute. Find the cost of 45 minutes.", a:"L$135"},
    {q:"Enrolment rose from 750 to 900. Find the percentage increase.", a:"150/750 × 100 = 20%"},
    {q:"Find the compound interest on L$5 000 at 10% per annum for 2 years.", a:"Amount = L$6 050, interest = L$1 050"},
    {q:"A car uses 8 litres of fuel for 100 km. How much for 350 km?", a:"28 litres"}
  ],
  challenge:[
    {q:"A price rises 20% then falls 20%. Is the final price the same as the original? Explain.", a:"No. On 100 it rises to 120, then falls by 20% of 120 (24) to 96. The percentages act on different bases."},
    {q:"Which grows more in two years on L$10 000 at 10%: simple or compound interest, and by how much?", a:"Simple gives L$2 000; compound gives L$2 100 — L$100 more, because the second year's interest is earned on the interest too."},
    {q:"A map scale is 1 : 25 000. What length on the map represents 5 km?", a:"5 km = 500 000 cm; 500 000 ÷ 25 000 = 20 cm"}
  ],
  activities:["Compare telephone and goods rates to find better buys","Run a classroom mini business with loans and interest","Compute percentages of election data","Make and interpret scale drawings"],
  materials:["Price lists and receipts","Symbolic money","Graph paper","Maps and rulers"],
  assessment:["Quiz on the three types of percent","Rates and better-buy project","Interest test","Class presentation"]
},
{
  grade:8, period:"IV", sem:"Two", icon:"🔗",
  title:"Application of Algebraic Concepts, Relations and Simultaneous Equations",
  subtitle:"Unit IV: Word problems, relations and functions, and systems of equations",
  outcomes:["Model real problems with algebra and solve systems of linear equations"],
  objectives:["Solve problems involving numbers, age, coins and geometry","Find the domain and range of a relation or function","Graph relations and functions","Add and subtract polynomials and multiply by monomials","Solve simultaneous equations by elimination","Solve simultaneous equations by substitution","Solve simultaneous equations graphically","Solve word problems using simultaneous equations"],
  note:"A <b>relation</b> is any set of ordered pairs; a <b>function</b> is a relation in which each first element appears only once. <b>Simultaneous equations</b> are two equations in two unknowns solved together — by <b>elimination</b>, <b>substitution</b> or <b>graphing</b>, where the solution is the point of intersection.",
  focus:["Number, age, coin and geometry problems","Relations and functions","Domain and range","Graphing linear relations","Adding and subtracting polynomials","Elimination and substitution methods","Graphical solution of systems"],
  terms:[
    {t:"relation", d:"any set of ordered pairs", x:"{(1,2), (3,4)} is a relation."},
    {t:"function", d:"a relation in which no first element repeats", x:"Each input has exactly one output."},
    {t:"domain", d:"the set of all first elements of a relation", x:"The domain is {1, 3}."},
    {t:"range", d:"the set of all second elements of a relation", x:"The range is {2, 4}."},
    {t:"ordered pair", d:"a pair of values written in a fixed order", x:"(3, 5) is an ordered pair."},
    {t:"simultaneous equations", d:"two equations solved together for two unknowns", x:"Solve the simultaneous equations."},
    {t:"elimination", d:"removing one variable by adding or subtracting the equations", x:"Use elimination to remove y."},
    {t:"substitution", d:"replacing one variable using the other equation", x:"Solve by substitution."},
    {t:"point of intersection", d:"where two graphs cross, giving the solution", x:"They intersect at (2, 3)."},
    {t:"consistent system", d:"a system that has at least one solution", x:"The system is consistent."}
  ],
  worked:[
    {q:"Solve by elimination:  3x + 2y = 19 and x − 2y = 1.",
     steps:["The y terms are +2y and −2y, which are opposites, so ADD the two equations.","(3x + 2y) + (x − 2y) = 19 + 1.","4x = 20, so x = 5.","Substitute x = 5 into x − 2y = 1:  5 − 2y = 1.","−2y = −4, so y = 2.","Check in the first equation: 3(5) + 2(2) = 15 + 4 = 19. \u2713"], a:"x = 5, y = 2"},
    {q:"Solve by substitution:  y = 2x + 1 and 3x + y = 16.",
     steps:["Substitute y = 2x + 1 into the second equation.","3x + (2x + 1) = 16.","5x + 1 = 16, so 5x = 15 and x = 3.","Then y = 2(3) + 1 = 7."], a:"x = 3, y = 7"},
    {q:"The sum of two numbers is 40 and their difference is 8. Find them.",
     steps:["Let the numbers be x and y:  x + y = 40 and x − y = 8.","Add the equations: 2x = 48, so x = 24.","Substitute: 24 + y = 40, so y = 16."], a:"24 and 16"}
  ],
  drillLabel:"Relations, functions and simultaneous equations",
  drills:[
    {id:"simul_elim"},{id:"simul_subst"},{id:"domain_range"},{id:"cartesian_product"},
    {id:"fn_evaluate"},{id:"plot_quadrant"},{id:"poly_add"},{id:"poly_sub"},
    {id:"solve_two_side"},{id:"solve_linear"}
  ],
  word:[
    {q:"A father is 3 times as old as his son. In 12 years he will be twice as old. Find their ages.", a:"Son 12, father 36"},
    {q:"Two pens and three books cost L$390; one pen and two books cost L$250. Find the cost of each.", a:"Pen L$30, book L$110"},
    {q:"The perimeter of a rectangle is 44 cm and the length is 4 cm more than the width. Find the dimensions.", a:"Width 9 cm, length 13 cm"},
    {q:"State the domain and range of {(2, 5), (3, 7), (4, 9)}.", a:"Domain {2, 3, 4}; range {5, 7, 9}"},
    {q:"A purse holds L$5 and L$10 notes, 12 notes worth L$95 in all. How many of each?", a:"Five L$5 notes and seven L$10 notes"}
  ],
  challenge:[
    {q:"Is {(1, 2), (1, 3), (2, 4)} a function? Explain.", a:"No. The first element 1 appears twice with different second elements, so one input has two outputs."},
    {q:"What does it mean graphically if two simultaneous equations have no solution?", a:"Their graphs are parallel lines that never intersect, so no pair of values satisfies both."},
    {q:"Solve graphically and state the point of intersection: y = x + 1 and y = −x + 5.", a:"They meet at (2, 3)."}
  ],
  activities:["Model age and coin problems with equations","Plot ordered pairs and identify functions","Solve systems by all three methods","Compare graphical and algebraic solutions"],
  materials:["Graph paper","Algebra tiles","Rulers","Coin and counter sets"],
  assessment:["Simultaneous equations test","Relations and functions quiz","Graphing exercise","Word problem assignment"]
},
{
  grade:8, period:"V", sem:"Two", icon:"📏",
  title:"Geometry and Measurement",
  subtitle:"Unit V: Angle relationships, polygons, constructions, trapezium and prisms",
  outcomes:["Identify angle relationships, construct figures accurately and compute areas and surface areas"],
  objectives:["Identify vertical, adjacent, complementary and supplementary angles","Compute the sum of the angles of a polygon","Construct angles and triangles using SAS, ASA and SSS","Find the area of a trapezium","Find the surface area of prisms","Convert selected metric units"],
  note:"When two lines cross, the <b>vertical (opposite) angles are equal</b> and <b>adjacent angles on a line add to 180°</b>. A polygon of n sides divides into (n − 2) triangles, so its interior angles total <b>(n − 2) × 180°</b>. The <b>exterior angles of any polygon always total 360°</b>.",
  focus:["Vertical and adjacent angles","Complementary and supplementary angles","Sum of interior angles of polygons","Constructions by SAS, ASA and SSS","Area of a trapezium","Surface area of prisms","Metric conversion"],
  terms:[
    {t:"vertical angles", d:"opposite angles formed when two lines cross", x:"Vertical angles are equal."},
    {t:"adjacent angles", d:"angles that share a common arm and vertex", x:"Adjacent angles on a line add to 180°."},
    {t:"transversal", d:"a line cutting across two or more lines", x:"The transversal makes eight angles."},
    {t:"regular polygon", d:"a polygon with all sides and all angles equal", x:"A square is a regular polygon."},
    {t:"interior angle", d:"an angle inside a polygon at a vertex", x:"Each interior angle of a square is 90°."},
    {t:"exterior angle", d:"the angle between a side extended and the next side", x:"Exterior angles total 360°."},
    {t:"trapezium", d:"a quadrilateral with exactly one pair of parallel sides", x:"Area = ½(a + b)h."},
    {t:"prism", d:"a solid with two identical parallel ends", x:"A cuboid is a prism."},
    {t:"SSS", d:"constructing a triangle from three given sides", x:"Construct by SSS."},
    {t:"SAS", d:"constructing from two sides and the included angle", x:"Construct by SAS."},
    {t:"ASA", d:"constructing from two angles and the included side", x:"Construct by ASA."}
  ],
  worked:[
    {q:"Find the sum of the interior angles of a hexagon, and each angle if it is regular.",
     steps:["Sum = (n − 2) × 180° with n = 6.","= 4 × 180° = 720°.","A regular hexagon has 6 equal angles.","720 ÷ 6 = 120°."], a:"Sum 720°; each angle 120°"},
    {q:"Find the area of a trapezium with parallel sides 12 cm and 8 cm and height 5 cm.",
     steps:["Area = ½ × (sum of parallel sides) × height.","= ½ × (12 + 8) × 5.","= ½ × 20 × 5.","= 50 cm²."], a:"50 cm²"},
    {q:"Find the total surface area of a cuboid 10 cm by 6 cm by 4 cm.",
     steps:["Surface area = 2(lw + lh + wh).","lw = 60, lh = 40, wh = 24.","Sum = 124.","2 × 124 = 248 cm²."], a:"248 cm²"}
  ],
  drillLabel:"Angles, polygons and surface area",
  drills:[
    {id:"angle_pair"},{id:"angle_missing"},{id:"triangle_angle"},
    {id:"polygon_interior"},{id:"polygon_each_angle"},{id:"exterior_angle"},
    {id:"area_trapezoid"},{id:"surface_area_prism"},{id:"volume_prism"},{id:"metric_convert_jh"}
  ],
  word:[
    {q:"Two lines cross and one angle is 65°. State the other three angles.", a:"65°, 115° and 115°"},
    {q:"Each interior angle of a regular polygon is 140°. How many sides has it?", a:"Exterior angle = 40°, so n = 360 ÷ 40 = 9 sides"},
    {q:"A trapezium-shaped plot has parallel sides 30 m and 20 m and height 14 m. Find its area.", a:"350 m²"},
    {q:"Convert 4.5 km to centimetres.", a:"450 000 cm"},
    {q:"A closed box measures 20 cm by 15 cm by 10 cm. Find the card needed to make it.", a:"1 300 cm²"}
  ],
  challenge:[
    {q:"Why do the exterior angles of ANY polygon add up to 360°?", a:"Walking once round the polygon turns you through one complete revolution, and each turn is an exterior angle."},
    {q:"Can a regular polygon have an interior angle of 100°? Explain.", a:"No. That needs an exterior angle of 80°, and 360 ÷ 80 = 4.5, which is not a whole number of sides."},
    {q:"A prism and a cuboid have the same volume. Must they have the same surface area?", a:"No. Volume fixes the product of the dimensions, but surface area depends on their shape, so an elongated solid has more surface."}
  ],
  activities:["Draw intersecting lines and name angle pairs","Divide polygons into triangles to find angle sums","Construct triangles by SSS, SAS and ASA","Build and measure prism nets"],
  materials:["Protractors, compasses and rulers","Card for nets","Squared paper","Metric conversion charts"],
  assessment:["Construction practical","Polygon angle test","Surface area exercise","Quiz on angle relationships"]
},
{
  grade:8, period:"VI", sem:"Two", icon:"🎲",
  title:"Probability, Statistics and Trigonometry",
  subtitle:"Unit VI: Frequency tables, graphs, measures of spread and chance",
  outcomes:["Organise data, present it graphically and compute the probability of events"],
  objectives:["Arrange data in ascending and descending order","Prepare frequency tables and construct histograms","Make and interpret double bar, double line and circle graphs","Compute the mode, median and mean of a set of data","Compute the range and describe variability","Find the probability of simple, independent and dependent events"],
  note:"The <b>mean</b> is the total divided by how many; the <b>median</b> is the middle value once the data is ordered; the <b>mode</b> is the most frequent value. <b>Probability</b> ranges from 0 (impossible) to 1 (certain), and is found as favourable outcomes ÷ total outcomes.",
  focus:["Ordering data","Frequency tables and histograms","Double bar, double line and circle graphs","Mean, median and mode","Range and variability","Probability of simple and independent events"],
  terms:[
    {t:"frequency", d:"the number of times a value occurs", x:"The frequency of 5 is three."},
    {t:"frequency table", d:"a table showing each value and its frequency", x:"Draw a frequency table."},
    {t:"histogram", d:"a bar graph for continuous grouped data", x:"The histogram has no gaps."},
    {t:"mean", d:"the sum of the values divided by their number", x:"The mean score is 62."},
    {t:"median", d:"the middle value when data is ordered", x:"The median is 48."},
    {t:"mode", d:"the value that occurs most often", x:"The mode is 7."},
    {t:"range", d:"the difference between the largest and smallest values", x:"The range is 25."},
    {t:"probability", d:"the chance of an event, from 0 to 1", x:"The probability is 1/6."},
    {t:"outcome", d:"a possible result of an experiment", x:"Getting a head is an outcome."},
    {t:"independent events", d:"events where one does not affect the other", x:"Two coin tosses are independent."},
    {t:"circle graph", d:"a graph using sectors of a circle to show parts of a whole", x:"A circle graph shows percentages."}
  ],
  worked:[
    {q:"Find the mean, median, mode and range of 4, 7, 7, 9, 13.",
     steps:["Mean = (4 + 7 + 7 + 9 + 13) ÷ 5 = 40 ÷ 5 = 8.","The data is already ordered; the middle value is 7, so median = 7.","7 occurs twice, more than any other, so mode = 7.","Range = 13 − 4 = 9."], a:"Mean 8, median 7, mode 7, range 9"},
    {q:"A bag has 4 red, 5 blue and 3 green balls. Find the probability of drawing a blue ball.",
     steps:["Total balls = 4 + 5 + 3 = 12.","Favourable outcomes = 5.","Probability = 5/12."], a:"5/12"},
    {q:"In a circle graph, rice is 25% of the total. Find the angle of its sector.",
     steps:["A full circle is 360°.","25% of 360°.","= 0.25 × 360.","= 90°."], a:"90°"}
  ],
  drillLabel:"Statistics and probability",
  drills:[
    {id:"mean", p:{count:5}},{id:"median"},{id:"mode"},{id:"range_stat"},
    {id:"range_variance"},{id:"freq_table"},{id:"read_graph"},
    {id:"probability_simple"},{id:"probability_indep"},{id:"counting_principle"}
  ],
  word:[
    {q:"Malaria cases over five weeks were 12, 15, 9, 15, 19. Find the mean and mode.", a:"Mean = 14, mode = 15"},
    {q:"A die is rolled once. Find the probability of getting a number greater than 4.", a:"2/6 = 1/3"},
    {q:"A class scored 60, 72, 85, 72, 91. Find the median.", a:"Ordered: 60, 72, 72, 85, 91 — median 72"},
    {q:"Two coins are tossed. Find the probability of two heads.", a:"1/2 × 1/2 = 1/4"},
    {q:"A shop sells 3 shirt colours in 4 sizes. How many different choices?", a:"12"}
  ],
  challenge:[
    {q:"Why can the mean be misleading when one value is extreme?", a:"An unusually large or small value pulls the mean towards it, so the median often describes the typical value better."},
    {q:"Which graph best shows change over time, and why?", a:"A line graph, because it joins successive points and makes the trend visible."},
    {q:"A bag has 3 red and 7 blue balls. One is drawn and NOT replaced, then another. Why is the second draw dependent?", a:"The first draw changes both the number of balls and the composition, so the second probability depends on what was drawn first."}
  ],
  activities:["Collect health-centre data and build frequency tables","Construct histograms and circle graphs","Carry out games of chance and record results","Compute measures of central tendency from real data"],
  materials:["Graph paper and protractors","Coins, dice and counters","Data collection sheets","Calculators"],
  assessment:["Data collection project","Graph construction exercise","Probability quiz","Statistics test"]
},

/* ================================ GRADE 9 ================================ */
{
  grade:9, period:"I", sem:"One", icon:"🧩",
  title:"Two-Set Problems and Arithmetic",
  subtitle:"Unit I: Venn diagrams, rational and irrational numbers, variation and interest",
  outcomes:["Use Venn diagrams to solve two-set problems and apply arithmetic to real situations"],
  objectives:["Determine the universal set and represent sets in a Venn diagram","Find the complement of a set","Use Venn diagrams to solve two-set problems","Write all the subsets of a given set","Identify and define rational and irrational numbers","Solve ratio, proportion, variation, speed and rate of work problems","Compute simple and compound interest","Find a rational number halfway between two others"],
  note:"For two overlapping sets, <b>n(A ∪ B) = n(A) + n(B) − n(A ∩ B)</b> — the overlap is subtracted because it was counted twice. A <b>rational number</b> can be written as a fraction of integers; an <b>irrational number</b>, such as √2 or π, cannot.",
  focus:["Universal set and complement","Venn diagrams and two-set problems","Number of subsets","Rational and irrational numbers","Ratio, proportion and variation","Speed and rate of work","Simple and compound interest"],
  terms:[
    {t:"universal set", d:"the set containing all elements under discussion", x:"U is the universal set."},
    {t:"complement", d:"the members of the universal set not in the given set", x:"A′ is the complement of A."},
    {t:"Venn diagram", d:"a diagram of overlapping circles showing sets", x:"Draw a Venn diagram."},
    {t:"intersection", d:"the members belonging to both sets", x:"A ∩ B is the overlap."},
    {t:"rational number", d:"a number expressible as a fraction of two integers", x:"0.6 is rational."},
    {t:"irrational number", d:"a number that cannot be written as such a fraction", x:"√2 is irrational."},
    {t:"variation", d:"a relationship in which quantities change together by a rule", x:"y varies directly as x."},
    {t:"direct variation", d:"as one quantity increases the other increases proportionally", x:"y = kx."},
    {t:"inverse variation", d:"as one quantity increases the other decreases", x:"y = k/x."},
    {t:"compound interest", d:"interest calculated on principal plus accumulated interest", x:"Compound interest grows faster."},
    {t:"rate of work", d:"the portion of a job completed in unit time", x:"He does 1/6 of the job per day."}
  ],
  worked:[
    {q:"In a class of 50, 30 study French and 25 study Science, and 8 study neither. How many study both?",
     steps:["Those studying at least one = 50 − 8 = 42.","n(A ∪ B) = n(A) + n(B) − n(A ∩ B).","42 = 30 + 25 − both.","both = 55 − 42 = 13."], a:"13 pupils"},
    {q:"A can do a job in 6 days and B in 12 days. How long together?",
     steps:["A does 1/6 per day, B does 1/12 per day.","Together: 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4 per day.","Time = 1 ÷ 1/4.","= 4 days."], a:"4 days"},
    {q:"Find the compound interest on L$8 000 at 10% per annum for 2 years.",
     steps:["A = P(1 + R/100)ᵀ.","= 8 000 × (1.1)².","= 8 000 × 1.21 = L$9 680.","Interest = 9 680 − 8 000 = L$1 680."], a:"L$1 680"}
  ],
  drillLabel:"Sets, rational numbers and arithmetic",
  drills:[
    {id:"two_set_venn"},{id:"set_ops"},{id:"subsets_num"},{id:"set_type"},
    {id:"rational_irrational"},{id:"halfway_rational"},{id:"direct_variation"},
    {id:"speed_q"},{id:"rate_of_work"},{id:"simple_interest"},{id:"compound_interest"},{id:"proportion"}
  ],
  word:[
    {q:"Of 80 farmers, 45 grow rice, 38 grow cassava and 15 grow both. How many grow neither?", a:"45 + 38 − 15 = 68 grow at least one, so 12 grow neither"},
    {q:"A car covers 240 km in 3 hours. Find its average speed.", a:"80 km/h"},
    {q:"y varies directly as x. If y = 18 when x = 6, find y when x = 15.", a:"k = 3, so y = 45"},
    {q:"Find the rational number halfway between 3 and 8.", a:"5.5"},
    {q:"Find the simple interest on L$12 000 at 6% for 5 years.", a:"L$3 600"}
  ],
  challenge:[
    {q:"Show that 0.7 recurring is rational.", a:"Let x = 0.777...; then 10x = 7.777... and subtracting gives 9x = 7, so x = 7/9, a fraction of integers."},
    {q:"Why is √9 rational but √10 irrational?", a:"9 is a perfect square so √9 = 3, a whole number; 10 is not, so its root is a non-terminating, non-recurring decimal."},
    {q:"Three taps fill a tank in 4, 6 and 12 hours. How long do all three take together?", a:"1/4 + 1/6 + 1/12 = 6/12 = 1/2 per hour, so 2 hours"}
  ],
  activities:["Draw Venn diagrams for survey data","Classify numbers as rational or irrational","Solve rate of work and speed problems","Compare simple and compound interest"],
  materials:["Venn diagram templates","Calculators","Survey data sheets","Interest tables"],
  assessment:["Two-set problem test","Quiz on rational numbers","Interest computation exercise","Class assignment"]
},
{
  grade:9, period:"II", sem:"One", icon:"√",
  title:"Basic Algebra: Indices, Radicals and Polynomials",
  subtitle:"Unit II: Laws of indices, radicals, polynomial products and factorization",
  outcomes:["Apply the laws of indices and manipulate polynomials and radicals with confidence"],
  objectives:["Apply the laws of indices to simplify expressions","Simplify radicals and radical expressions","Convert radicals to exponents","Add and subtract polynomials","Multiply polynomials by monomials and binomials by binomials","Divide polynomials by binomials","Factor the difference of two squares"],
  note:"The <b>laws of indices</b>: multiplying adds the exponents, dividing subtracts them, and a power of a power multiplies them. Any non-zero base to the power 0 is 1. The <b>difference of two squares</b> factorises as a² − b² = (a + b)(a − b) — a pattern worth memorising.",
  focus:["Laws of indices","Zero and negative exponents","Simplifying radicals","Radicals as exponents","Adding and subtracting polynomials","Multiplying binomials (FOIL)","Difference of two squares","Common factor factorization"],
  terms:[
    {t:"index (plural indices)", d:"the exponent showing repeated multiplication", x:"In x⁵ the index is 5."},
    {t:"radical", d:"a root expression such as a square root", x:"√12 is a radical."},
    {t:"radicand", d:"the number under the root sign", x:"In √20 the radicand is 20."},
    {t:"surd", d:"a root that cannot be simplified to a rational number", x:"√3 is a surd."},
    {t:"FOIL", d:"First, Outer, Inner, Last — the order for multiplying two binomials", x:"Use FOIL to expand."},
    {t:"expand", d:"to remove brackets by multiplying out", x:"Expand (x + 2)(x + 3)."},
    {t:"factorise", d:"to write an expression as a product of factors", x:"Factorise x² − 9."},
    {t:"difference of two squares", d:"a² − b², which factorises to (a + b)(a − b)", x:"x² − 16 = (x + 4)(x − 4)."},
    {t:"common factor", d:"a factor shared by all the terms", x:"3 is a common factor of 3x + 6."},
    {t:"perfect square", d:"a number whose square root is a whole number", x:"49 is a perfect square."}
  ],
  worked:[
    {q:"Simplify (3x²y³)(4x⁵y).",
     steps:["Multiply the coefficients: 3 × 4 = 12.","Add the exponents of x: x²⁺⁵ = x⁷.","Add the exponents of y: y³⁺¹ = y⁴.","= 12x⁷y⁴."], a:"12x⁷y⁴"},
    {q:"Simplify √72.",
     steps:["Find the largest perfect square factor: 72 = 36 × 2.","√72 = √36 × √2.","√36 = 6.","= 6√2."], a:"6√2"},
    {q:"Expand and simplify (x + 5)(x − 3).",
     steps:["First: x × x = x².","Outer: x × (−3) = −3x.","Inner: 5 × x = 5x.","Last: 5 × (−3) = −15.","Collect middle terms: −3x + 5x = 2x.","= x² + 2x − 15."], a:"x² + 2x − 15"}
  ],
  drillLabel:"Indices, radicals and polynomials",
  drills:[
    {id:"index_mul"},{id:"index_div"},{id:"index_pow"},{id:"index_zero"},
    {id:"radical_simp"},{id:"sqrt_exact"},{id:"mono_mul"},{id:"mono_div"},
    {id:"poly_add"},{id:"poly_sub"},{id:"binom_mul"},{id:"diff_squares"},{id:"factor_common"}
  ],
  word:[
    {q:"The area of a square is x² − 25. Write its factors and state the side length if x = 9.", a:"(x + 5)(x − 5); at x = 9 the area is 56"},
    {q:"Simplify (2x³)⁴.", a:"16x¹²"},
    {q:"A rectangle has sides (x + 4) and (x + 2). Write its area as a trinomial.", a:"x² + 6x + 8"},
    {q:"Simplify √50 + √18.", a:"5√2 + 3√2 = 8√2"},
    {q:"Factorise 12x + 18.", a:"6(2x + 3)"}
  ],
  challenge:[
    {q:"Show that (a + b)² is NOT equal to a² + b².", a:"(a + b)² = a² + 2ab + b². Taking a = 3, b = 4 gives 49, while a² + b² = 25 — the middle term 2ab is missing."},
    {q:"Why is x⁻² equal to 1/x²?", a:"Dividing xⁿ by xⁿ⁺² subtracts the exponents to give x⁻², and the same division gives 1/x², so the two are equal."},
    {q:"Factorise 4x² − 81 completely.", a:"(2x + 9)(2x − 9), since 4x² = (2x)² and 81 = 9²"}
  ],
  activities:["Practise the laws of indices in pairs","Simplify radicals using perfect squares","Expand binomials with area models","Factorise differences of two squares"],
  materials:["Algebra tiles","Squared paper","Index law charts","Calculators"],
  assessment:["Indices test","Radical simplification quiz","Polynomial expansion exercise","Factorization assignment"]
},
{
  grade:9, period:"III", sem:"One", icon:"📉",
  title:"Relations, Functions and Simultaneous Equations",
  subtitle:"Unit III: Cartesian products, slope, linear graphs and systems of equations",
  outcomes:["Represent and analyse relations and functions, and solve systems of linear equations"],
  objectives:["Define and represent relations and functions","Find the Cartesian product of two sets and determine domain and range","Evaluate linear functions in one variable","Determine the slope of a line from its equation or from two points","Graph linear equations given the slope and y-intercept","Solve simultaneous equations by elimination, substitution and graphing","Solve word problems using systems of equations"],
  note:"The <b>slope</b> of a line measures its steepness: m = (y₂ − y₁) ÷ (x₂ − x₁). In the form <b>y = mx + c</b>, m is the slope and c the y-intercept. A positive slope rises to the right, a negative slope falls, and a horizontal line has slope 0.",
  focus:["Cartesian product","Relations and functions","Domain and range","Linear functions in one and two variables","Slope from two points","Slope-intercept form","Simultaneous equations by three methods"],
  terms:[
    {t:"Cartesian product", d:"the set of all ordered pairs from two sets", x:"A × B pairs each a with each b."},
    {t:"function", d:"a relation in which each input has exactly one output", x:"f(x) = 2x is a function."},
    {t:"slope", d:"the measure of the steepness of a line", x:"The slope is 2."},
    {t:"gradient", d:"another word for slope", x:"Find the gradient of the line."},
    {t:"y-intercept", d:"where the line crosses the y-axis", x:"The y-intercept is 3."},
    {t:"x-intercept", d:"where the line crosses the x-axis", x:"Set y = 0 to find it."},
    {t:"linear equation", d:"an equation whose graph is a straight line", x:"y = 2x + 1 is linear."},
    {t:"slope-intercept form", d:"the form y = mx + c", x:"Write it in slope-intercept form."},
    {t:"parallel lines", d:"lines with the same slope that never meet", x:"Parallel lines have equal slopes."},
    {t:"perpendicular lines", d:"lines meeting at 90°", x:"Their slopes multiply to −1."}
  ],
  worked:[
    {q:"Find the slope of the line through (2, 3) and (6, 11).",
     steps:["m = (y₂ − y₁) ÷ (x₂ − x₁).","= (11 − 3) ÷ (6 − 2).","= 8 ÷ 4.","= 2."], a:"m = 2"},
    {q:"Write the equation of the line with slope 3 passing through (0, −4).",
     steps:["Use y = mx + c.","m = 3 and the point (0, −4) gives the y-intercept c = −4.","y = 3x − 4."], a:"y = 3x − 4"},
    {q:"Solve:  3x + 2y = 12 and x − 2y = 4.",
     steps:["The y terms are opposites, so add the equations.","4x = 16, giving x = 4.","Substitute into x − 2y = 4:  4 − 2y = 4.","−2y = 0, so y = 0."], a:"x = 4, y = 0"}
  ],
  drillLabel:"Functions, slope and systems",
  drills:[
    {id:"slope_two_pts"},{id:"line_equation"},{id:"fn_evaluate"},{id:"domain_range"},
    {id:"cartesian_product"},{id:"plot_quadrant"},{id:"simul_elim"},{id:"simul_subst"},
    {id:"solve_two_side"},{id:"solve_inequality"}
  ],
  word:[
    {q:"A taxi charges L$100 plus L$25 per km. Write the function and find the cost of a 12 km trip.", a:"C = 25d + 100; C = L$400"},
    {q:"Find the slope of the line joining (−2, 5) and (4, −7).", a:"m = −12/6 = −2"},
    {q:"Two numbers add to 30; three times the first minus the second is 34. Find them.", a:"16 and 14"},
    {q:"If f(x) = 4x − 9, find f(−3).", a:"−21"},
    {q:"A line has slope −1 and passes through (0, 6). Write its equation.", a:"y = −x + 6"}
  ],
  challenge:[
    {q:"Two lines have slopes 2 and −1/2. What is their relationship, and why?", a:"They are perpendicular, because the product of their slopes is 2 × (−1/2) = −1."},
    {q:"Explain why a vertical line has no defined slope.", a:"The change in x is zero, so the slope formula divides by zero, which is undefined."},
    {q:"The graphs of y = 2x + 3 and y = 2x − 1 never meet. Explain.", a:"They have equal slopes but different intercepts, so they are parallel lines."}
  ],
  activities:["Plot linear graphs from tables of values","Calculate slopes from pairs of points","Solve systems by all three methods","Find Cartesian products of small sets"],
  materials:["Graph paper and rulers","Set squares","Calculators","Coordinate grids"],
  assessment:["Slope and graphing test","Function evaluation quiz","Simultaneous equations exercise","Word problem assignment"]
},
{
  grade:9, period:"IV", sem:"Two", icon:"📐",
  title:"Geometry: Lines, Polygons and Constructions",
  subtitle:"Unit IV: Parallel and perpendicular lines, polygon angles, constructions and similarity",
  outcomes:["Identify properties of lines and polygons and construct figures accurately"],
  objectives:["Identify and define transversals of parallel lines and perpendicular lines","Identify regular polygons and their properties","Find the sum of interior and exterior angles of regular polygons","Construct triangles using SSS, SAS or ASA","Construct parallelograms","Identify similar triangles and their properties","Identify vertical, adjacent, complementary and supplementary angles"],
  note:"When a <b>transversal</b> crosses parallel lines: <b>corresponding angles are equal</b>, <b>alternate angles are equal</b>, and <b>co-interior angles add to 180°</b>. <b>Similar triangles</b> have equal angles and their corresponding sides are in the same ratio — this is what makes indirect measurement possible.",
  focus:["Parallel and perpendicular lines","Angles formed by a transversal","Properties of regular polygons","Interior and exterior angle sums","Constructions by SSS, SAS, ASA","Constructing parallelograms","Similar triangles"],
  terms:[
    {t:"parallel lines", d:"lines in the same plane that never meet", x:"Railway lines are parallel."},
    {t:"perpendicular lines", d:"lines meeting at a right angle", x:"The walls are perpendicular to the floor."},
    {t:"transversal", d:"a line crossing two or more other lines", x:"The transversal cuts both lines."},
    {t:"corresponding angles", d:"angles in matching positions at each intersection", x:"Corresponding angles are equal."},
    {t:"alternate angles", d:"angles on opposite sides of the transversal", x:"Alternate angles are equal."},
    {t:"co-interior angles", d:"angles inside on the same side of the transversal", x:"They add up to 180°."},
    {t:"similar triangles", d:"triangles with equal angles and proportional sides", x:"Similar triangles have the same shape."},
    {t:"congruent", d:"exactly equal in shape and size", x:"The two triangles are congruent."},
    {t:"parallelogram", d:"a quadrilateral with both pairs of opposite sides parallel", x:"A rhombus is a parallelogram."},
    {t:"bisect", d:"to divide into two equal parts", x:"Bisect the angle with compasses."}
  ],
  worked:[
    {q:"A transversal cuts two parallel lines. One angle is 72°. Find the co-interior angle.",
     steps:["Co-interior angles lie inside, on the same side of the transversal.","They are supplementary, adding to 180°.","180 − 72.","= 108°."], a:"108°"},
    {q:"Find the number of sides of a regular polygon whose interior angle is 156°.",
     steps:["Exterior angle = 180 − 156 = 24°.","Exterior angles of any polygon total 360°.","n = 360 ÷ 24.","n = 15 sides."], a:"15 sides"},
    {q:"Two similar triangles have corresponding sides 6 cm and 15 cm. If another side of the smaller is 8 cm, find the matching side.",
     steps:["Scale factor = 15 ÷ 6 = 2.5.","Corresponding sides are in the same ratio.","8 × 2.5.","= 20 cm."], a:"20 cm"}
  ],
  drillLabel:"Lines, angles and polygons",
  drills:[
    {id:"angle_pair"},{id:"angle_missing"},{id:"triangle_angle"},
    {id:"polygon_interior"},{id:"polygon_each_angle"},{id:"exterior_angle"},
    {id:"area_trapezoid"},{id:"area_para"},{id:"area_tri"},{id:"shape_sides"}
  ],
  word:[
    {q:"Two parallel lines are cut by a transversal and one angle is 118°. State the alternate angle.", a:"118°, since alternate angles are equal"},
    {q:"Find the sum of the interior angles of a decagon.", a:"(10 − 2) × 180 = 1 440°"},
    {q:"A flagpole casts a 12 m shadow when a 2 m stick casts 1.5 m. Find the height of the pole.", a:"2/1.5 = h/12, so h = 16 m"},
    {q:"Each exterior angle of a regular polygon is 30°. How many sides?", a:"360 ÷ 30 = 12 sides"},
    {q:"Two angles of a triangle are 47° and 68°. Find the exterior angle at the third vertex.", a:"The third angle is 65°, so the exterior angle is 115°"}
  ],
  challenge:[
    {q:"Why are all squares similar but not all rectangles?", a:"All squares have equal angles and sides in the same ratio 1 : 1. Rectangles have equal angles but their side ratios differ, so they are not all similar."},
    {q:"Can a triangle be constructed with sides 3 cm, 4 cm and 9 cm? Explain.", a:"No. 3 + 4 = 7, which is less than 9, and the two shorter sides must together exceed the longest."},
    {q:"How can similar triangles be used to find the width of a river without crossing it?", a:"Set up a small triangle on the bank with the same angles; the sides are proportional, so measuring the small one and the scale factor gives the width."}
  ],
  activities:["Identify angle pairs formed by transversals","Construct triangles and parallelograms with compasses","Investigate similar triangles by measurement","Compute polygon angle sums"],
  materials:["Compasses, protractors and rulers","Squared paper","String and measuring tape","Polygon charts"],
  assessment:["Construction practical","Angle relationships test","Similar triangles exercise","Quiz on polygons"]
},
{
  grade:9, period:"V", sem:"Two", icon:"📏",
  title:"Trigonometry and Measurement",
  subtitle:"Unit V: Pythagoras, sine, cosine, tangent, angles of elevation and unit conversion",
  outcomes:["Apply the Pythagorean theorem and trigonometric ratios to solve practical problems"],
  objectives:["Apply the Pythagorean theorem to compute a side of a right-angled triangle","Solve problems involving the Pythagorean theorem","Identify, define and compute the sine, cosine and tangent of acute angles","Use trigonometric tables","Apply the ratios to angles of elevation and depression","Convert metric and customary units"],
  note:"<b>Pythagoras' theorem</b>: in a right-angled triangle, c² = a² + b², where c is the hypotenuse — the side opposite the right angle and always the longest. The three ratios are remembered as <b>SOH-CAH-TOA</b>: Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent.",
  focus:["The Pythagorean theorem","Applications of Pythagoras","Sine, cosine and tangent","Trigonometric tables","Angles of elevation and depression","Metric and customary conversion"],
  terms:[
    {t:"hypotenuse", d:"the longest side of a right-angled triangle, opposite the right angle", x:"The hypotenuse is 13 cm."},
    {t:"opposite side", d:"the side facing the angle being considered", x:"The opposite side is 5 cm."},
    {t:"adjacent side", d:"the side next to the angle, not the hypotenuse", x:"The adjacent side is 12 cm."},
    {t:"Pythagorean theorem", d:"c² = a² + b² in a right-angled triangle", x:"Use Pythagoras to find the side."},
    {t:"sine", d:"opposite divided by hypotenuse", x:"sin θ = opp/hyp."},
    {t:"cosine", d:"adjacent divided by hypotenuse", x:"cos θ = adj/hyp."},
    {t:"tangent", d:"opposite divided by adjacent", x:"tan θ = opp/adj."},
    {t:"angle of elevation", d:"the angle looking up from the horizontal", x:"The elevation of the tower is 30°."},
    {t:"angle of depression", d:"the angle looking down from the horizontal", x:"The depression to the boat is 25°."},
    {t:"Pythagorean triple", d:"three whole numbers fitting a² + b² = c²", x:"3, 4, 5 is a triple."}
  ],
  worked:[
    {q:"A ladder 13 m long leans against a wall with its foot 5 m from the wall. How far up does it reach?",
     steps:["The ladder is the hypotenuse: c = 13, a = 5.","b² = c² − a².","= 169 − 25 = 144.","b = √144 = 12 m."], a:"12 m"},
    {q:"In a right-angled triangle the opposite side is 8 and the hypotenuse 17. Find sin θ and cos θ.",
     steps:["sin θ = opposite ÷ hypotenuse = 8/17.","Find the adjacent by Pythagoras: √(17² − 8²) = √(289 − 64) = √225 = 15.","cos θ = adjacent ÷ hypotenuse = 15/17."], a:"sin θ = 8/17, cos θ = 15/17"},
    {q:"From a point 40 m from a tower the angle of elevation of the top is 45°. Find the height.",
     steps:["tan 45° = height ÷ distance.","tan 45° = 1.","1 = h ÷ 40.","h = 40 m."], a:"40 m"}
  ],
  drillLabel:"Pythagoras, trigonometry and conversion",
  drills:[
    {id:"pythagoras"},{id:"trig_ratio"},{id:"sqrt_exact"},{id:"radical_simp"},
    {id:"metric_convert_jh"},{id:"convert_metric"},{id:"convert_customary"},
    {id:"area_tri"},{id:"area_trapezoid"},{id:"surface_area_prism"}
  ],
  word:[
    {q:"A rectangular field is 60 m by 80 m. Find the length of the diagonal path across it.", a:"√(3600 + 6400) = 100 m"},
    {q:"A ramp rises 3 m over a horizontal distance of 4 m. Find the length of the ramp.", a:"5 m"},
    {q:"In a right triangle the legs are 9 cm and 12 cm. Find the hypotenuse and tan of the smaller angle.", a:"15 cm; tan = 9/12 = 3/4"},
    {q:"Convert 7.5 kg to grams.", a:"7 500 g"},
    {q:"A boat is 100 m from the base of a cliff and the angle of elevation to the top is 45°. Find the cliff height.", a:"100 m"}
  ],
  challenge:[
    {q:"Why is the hypotenuse always the longest side?", a:"It is opposite the largest angle, the 90° angle, and in any triangle the greatest side faces the greatest angle."},
    {q:"Show that 9, 12, 15 is a Pythagorean triple.", a:"81 + 144 = 225 = 15², so it satisfies a² + b² = c². It is 3, 4, 5 multiplied by 3."},
    {q:"Why does the angle of elevation from A to B equal the angle of depression from B to A?", a:"They are alternate angles between two horizontal parallel lines cut by the line of sight, so they are equal."}
  ],
  activities:["Verify Pythagoras by measuring right triangles","Use trigonometric tables to find ratios","Measure heights using angles of elevation","Convert between metric and customary units"],
  materials:["Measuring tapes and clinometers","Trigonometric tables","Set squares and protractors","Conversion charts"],
  assessment:["Pythagoras test","Trigonometric ratio quiz","Practical height measurement","Conversion exercise"]
},
{
  grade:9, period:"VI", sem:"Two", icon:"📊",
  title:"Probability, Statistics and Vectors",
  subtitle:"Unit VI: Frequency tables, variability, plots, counting principle and vector addition",
  outcomes:["Organise and interpret data, apply counting principles and add vectors"],
  objectives:["Make frequency tables and histograms from data","Find measures of central tendency using population data","Compute measures of variability including range","Read and interpret stem-and-leaf, box-and-whisker and scatter plots","Use the fundamental counting principle","Distinguish permutations from combinations","Add vectors and find their magnitude"],
  note:"<b>Measures of central tendency</b> (mean, median, mode) describe the centre of data, while <b>measures of variability</b> (range, variance) describe how spread out it is. A <b>vector</b> has both magnitude and direction, and vectors are added <b>component by component</b>.",
  focus:["Frequency tables and histograms","Mean, median and mode","Range and variability","Stem-and-leaf and box-and-whisker plots","Scatter plots","Fundamental counting principle","Permutations and combinations","Vector addition and magnitude"],
  terms:[
    {t:"variability", d:"how spread out a set of data is", x:"The range measures variability."},
    {t:"variance", d:"the mean of the squared deviations from the mean", x:"Variance measures spread."},
    {t:"stem-and-leaf plot", d:"a display splitting each value into stem and leaf", x:"A stem-and-leaf plot keeps all values."},
    {t:"box-and-whisker plot", d:"a display showing quartiles and extremes", x:"The box shows the middle half."},
    {t:"scatter plot", d:"a graph of paired values showing any relationship", x:"The scatter plot shows a trend."},
    {t:"counting principle", d:"multiply the choices at each stage to get the total", x:"Use the counting principle."},
    {t:"permutation", d:"an arrangement in which order matters", x:"Permutations count arrangements."},
    {t:"combination", d:"a selection in which order does not matter", x:"Combinations count selections."},
    {t:"vector", d:"a quantity with both magnitude and direction", x:"Velocity is a vector."},
    {t:"magnitude", d:"the size or length of a vector", x:"The magnitude is 5 units."},
    {t:"resultant", d:"the single vector equal to the sum of two vectors", x:"Find the resultant."}
  ],
  worked:[
    {q:"Find the range and mean of 12, 18, 15, 22, 13.",
     steps:["Range = largest − smallest = 22 − 12 = 10.","Sum = 12 + 18 + 15 + 22 + 13 = 80.","Mean = 80 ÷ 5.","= 16."], a:"Range 10, mean 16"},
    {q:"A code has 3 letters followed by 2 digits, repetition allowed. How many codes are possible?",
     steps:["Each letter has 26 choices: 26 × 26 × 26.","Each digit has 10 choices: 10 × 10.","Total = 26³ × 10².","= 17 576 × 100 = 1 757 600."], a:"1 757 600"},
    {q:"Add the vectors (3, −2) and (−5, 6), then find the magnitude of the resultant.",
     steps:["Add components: (3 + (−5), −2 + 6).","= (−2, 4).","Magnitude = √((−2)² + 4²) = √(4 + 16).","= √20 = 2√5 ≈ 4.47."], a:"(−2, 4); magnitude 2√5"}
  ],
  drillLabel:"Statistics, counting and vectors",
  drills:[
    {id:"mean", p:{count:5}},{id:"median"},{id:"mode"},{id:"range_stat"},
    {id:"range_variance"},{id:"stem_leaf"},{id:"freq_table"},
    {id:"counting_principle"},{id:"probability_simple"},{id:"probability_indep"},
    {id:"vector_add"},{id:"vector_magnitude"}
  ],
  word:[
    {q:"Test scores were 45, 62, 78, 62, 55, 90. Find the mean and the mode.", a:"Mean = 65.33, mode = 62"},
    {q:"How many 4-digit PINs can be formed from the digits 0–9 with repetition?", a:"10⁴ = 10 000"},
    {q:"Add the vectors (7, 3) and (−2, 5).", a:"(5, 8)"},
    {q:"Find the magnitude of the vector (6, 8).", a:"10"},
    {q:"A menu has 4 starters, 5 mains and 3 desserts. How many three-course meals?", a:"60"}
  ],
  challenge:[
    {q:"Two data sets have the same mean but different ranges. What does that tell you?", a:"They centre on the same value but one is far more spread out; the mean alone cannot describe a distribution."},
    {q:"Why is the number of ways to arrange 3 books from 5 different from the number of ways to choose 3 from 5?", a:"Arranging counts order, giving 5 × 4 × 3 = 60 permutations; choosing ignores order, giving 60 ÷ 6 = 10 combinations."},
    {q:"Two forces of 3 N east and 4 N north act on a body. Find the resultant magnitude and explain the method.", a:"5 N, because the vectors are perpendicular so Pythagoras gives √(9 + 16) = 5."}
  ],
  activities:["Collect class data and build frequency tables","Construct stem-and-leaf and box plots","Apply the counting principle to real choices","Add vectors on squared paper"],
  materials:["Graph and squared paper","Data collection sheets","Calculators","Rulers and protractors"],
  assessment:["Statistics project","Plot construction exercise","Counting principle quiz","Vector addition test"]
}

];

/* Merge the Junior High units into the single Mathematics curriculum,
   exactly as English and General Science do: one subject, extra grades. */
if (typeof MA_CURRICULUM !== "undefined") {
  MA_CURRICULUM.push.apply(MA_CURRICULUM, MA_CURRICULUM_79);
}
