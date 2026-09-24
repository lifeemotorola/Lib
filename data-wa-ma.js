/* WASSCE (WAEC) — GENERAL MATHEMATICS / MATHEMATICS (CORE).
   Transcribed from the official WAEC WASSCE syllabus PDF
   "GENERAL_MATHEMATICS_OR_MATHEMATICS _CORE.pdf" — one unit per syllabus
   topic (A–I). The syllabus is common to all member countries (Liberia,
   Ghana, Nigeria, Sierra Leone, The Gambia). */
window.WA_ma = {
  id: "wma",
  name: "MATHEMATICS (CORE)",
  preamble: "This is an examination syllabus, not a teaching syllabus: the topics, contents and notes indicate the scope of the questions which will be set. The syllabus tests mathematical competency and computational skills, the ability to translate problems into mathematical language and solve them using appropriate methods, and logical, abstract and precise thinking.",
  aims: [
    "Mathematical competency and computational skills",
    "Understanding of mathematical concepts and their relationship to the acquisition of entrepreneurial skills for everyday living in the global world",
    "Ability to translate problems into mathematical language and solve them using appropriate methods",
    "Accuracy to a degree relevant to the problem at hand",
    "Logical, abstract and precise thinking"
  ],
  papers: [
    { n: "Paper 1", d: "Fifty multiple-choice objective questions drawn from the common areas of the syllabus, answered in 1\u00bd hours for 50 marks." },
    { n: "Paper 2", d: "Thirteen essay questions in two sections, answered in 2\u00bd hours for 100 marks. Section A: five compulsory elementary questions (40 marks). Section B: eight questions of greater length and difficulty; candidates answer five (60 marks)." }
  ],
  units: [
  /* =============== A · NUMBER AND NUMERATION =============== */
  {
    grade: 12, sem: "One", icon: "🔢", period: "A",
    title: "Number and Numeration",
    subtitle: "Number bases · modular arithmetic · fractions, decimals and approximations · indices · logarithms · sequences and series · sets · logical reasoning · rational numbers · surds · matrices · ratio, proportion and rates · percentages · financial arithmetic · variation",
    note: "The foundation topic: number systems, operations and financial mathematics. Objective questions draw heavily on number bases, indices, logarithms, sequences and sets.",
    objectives: [
      "Convert numbers from one base to base 10 and vice versa, and between other bases",
      "Perform addition, subtraction and multiplication in number bases and in modular arithmetic",
      "Apply the laws of indices and express large and small numbers in standard form",
      "Use the laws of logarithms and logarithm tables for calculations involving multiplication, division, powers and roots",
      "Determine terms of sequences and the sum of arithmetic progressions, and solve set problems using Venn diagrams",
      "Solve practical problems on ratio, proportion, rates, percentages, simple and compound interest, depreciation and annuities"
    ],
    terms: [
      { t: "Number base", d: "The system in which a number is written; base 10 uses the digits 0–9, while base r uses r digits 0 to r−1.", x: "1101₂ = 1×8 + 1×4 + 0×2 + 1 = 13 (base 10)" },
      { t: "Modular arithmetic", d: "Arithmetic in which numbers 'wrap around' after reaching a fixed modulus m; results are written k (mod m).", x: "6 + 4 = 3 (mod 7)" },
      { t: "Standard form", d: "Writing a number as a × 10ⁿ where 1 ≤ a < 10 and n is an integer.", x: "375 300 000 = 3.753 × 10⁸" },
      { t: "Arithmetic progression (A.P.)", d: "A sequence in which the difference between consecutive terms is constant (the common difference d).", x: "3, 7, 11, … has d = 4; sum n/2(2a + (n−1)d)" },
      { t: "Geometric progression (G.P.)", d: "A sequence in which the ratio of consecutive terms is constant (the common ratio r).", x: "2, 6, 18, … has r = 3" },
      { t: "Set operations", d: "Union (∪), intersection (∩) and complement (′) of sets; classification problems are solved with Venn diagrams of at most three sets.", x: "n(A ∪ B) = n(A) + n(B) − n(A ∩ B)" },
      { t: "Surd", d: "A root of a number which cannot be expressed exactly as a rational number, simplified and rationalised in problems.", x: "√12 = 2√3" },
      { t: "Matrix", d: "A rectangular array of numbers; restricted to at most 3×3, with 2×2 determinants used for simultaneous equations.", x: "det [[a, b], [c, d]] = ad − bc" },
      { t: "Opposite (inverse) variation", d: "x varies inversely as y means xy = k; direct variation means x = ky; joint variation x ∝ yz means x = kyz.", x: "If T ∝ r² and T = 20 when r = 2, then T = 5r²" },
      { t: "Significant figures", d: "The meaningful digits of a number, used in approximations and rounding to a stated accuracy.", x: "0.045 67 to 2 s.f. = 0.046" },
      { t: "Simple and compound interest", d: "Simple interest I = PRT/100; compound amount A = P(1 + R/100)ⁿ, limited to a maximum of 3 years in the syllabus.", x: "LD 5 000 at 4% for 3 yr: I = LD 600" },
      { t: "Laws of indices", d: "aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ; a⁰ = 1; a⁻ⁿ = 1/aⁿ.", x: "x³ × x⁴ ÷ x² = x⁵" },
      { t: "Annuity", d: "A series of equal payments made at regular intervals; simple problems on annuities are set.", x: "Monthly contributions at a fixed interest rate" }
    ],
    tf: [
      { s: "The sum for a geometric progression is set in WASSCE questions.", a: "False", why: "The syllabus includes the sum for an A.P. but excludes the sum for a G.P." },
      { s: "In the notation Uₙ, Uₙ is the nth term of a sequence.", a: "True", why: "Uₙ = the nth term of the sequence." },
      { s: "Compound interest problems are limited to a maximum of 3 years in the syllabus.", a: "True", why: "Limit compound interest to a maximum of 3 years." },
      { s: "A number can be written in standard form as 37.53 × 10⁶.", a: "False", why: "Standard form is a × 10ⁿ with 1 ≤ a < 10: 37 530 000 = 3.753 × 10⁷, so 37.53 × 10⁶ is not in standard form." },
      { s: "In modular arithmetic, the result of an operation is the remainder on division by the modulus.", a: "True", why: "k (mod m) is the remainder when k is divided by m, so results are always 0, 1, …, m − 1 — e.g. 10 = 3 (mod 7)." },
      { s: "Venn diagram problems involve at most three sets.", a: "True", why: "Use of Venn diagrams is restricted to at most 3 sets." }
    ],
    mcq: [
      { q: "Express the number 1101 in base 2 as a number in base 10.", o: ["9", "11", "13", "15"], a: 2, why: "1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 8 + 4 + 0 + 1 = 13." },
      { q: "Express 13 (base 10) in base 2.", o: ["1101", "1110", "1011", "1111"], a: 0, why: "Split into powers of 2: 13 = 8 + 4 + 1 = 2³ + 2² + 2⁰ = 1101₂ (one 8, one 4, no 2s, one 1)." },
      { q: "If 6 + 4 = k (mod 7), find k.", o: ["1", "2", "3", "4"], a: 2, why: "6 + 4 = 10; 10 ÷ 7 leaves remainder 3, so k = 3." },
      { q: "If x = 3 (mod 5) and y = 4 (mod 5), find x + y (mod 5).", o: ["2", "3", "4", "1"], a: 0, why: "3 + 4 = 7; 7 ÷ 5 leaves remainder 2." },
      { q: "Express 0.000 000 35 in standard form.", o: ["3.5 × 10⁻⁶", "3.5 × 10⁻⁷", "35 × 10⁻⁸", "3.5 × 10⁻⁸"], a: 1, why: "Move the decimal point 7 places right to get 3.5, so the power of 10 is −7: 0.000 000 35 = 3.5 × 10⁻⁷." },
      { q: "Simplify x³ × x⁴ ÷ x².", o: ["x⁵", "x⁶", "x⁹", "x¹⁰"], a: 0, why: "x³⁺⁴⁻² = x⁵ — add the indices when multiplying, subtract when dividing." },
      { q: "If log₁₀ 2 = 0.3010, find log₁₀ 200.", o: ["1.3010", "2.3010", "3.3010", "0.6020"], a: 1, why: "log₁₀ 200 = log₁₀ 2 + log₁₀ 100 = 0.3010 + 2 = 2.3010." },
      { q: "The first three terms of an arithmetic progression are 3, 7 and 11. Find the 10th term.", o: ["35", "39", "43", "47"], a: 1, why: "a = 3, d = 4; U₁₀ = 3 + 9×4 = 39." },
      { q: "Find the sum of the first 20 terms of the A.P. 2, 5, 8, …", o: ["570", "590", "610", "630"], a: 2, why: "S = n/2(2a + (n−1)d) = 20/2(4 + 19×3) = 10 × 61 = 610." },
      { q: "In a class, 18 take Mathematics, 15 take Physics and 8 take both. Find the number who take Mathematics or Physics.", o: ["20", "25", "26", "41"], a: 2, why: "Addition rule for sets: n(M ∪ P) = n(M) + n(P) − n(M ∩ P) = 18 + 15 − 8 = 25 (the 8 counted twice are subtracted once)." },
      { q: "Rationalise the denominator of 1/(√3 + 1).", o: ["(√3 − 1)/2", "(√3 + 1)/2", "(√3 − 1)/4", "2/(√3 − 1)"], a: 0, why: "1/(√3+1) × (√3−1)/(√3−1) = (√3−1)/(3−1) = (√3−1)/2." },
      { q: "If A = [[2, 1], [3, 4]], find det A.", o: ["5", "8", "11", "−5"], a: 0, why: "det A = (2×4) − (1×3) = 8 − 3 = 5." },
      { q: "A sum of money is shared between Kofi and Ama in the ratio 3:2. If Kofi gets LD 300 more than Ama, find the total sum.", o: ["LD 600", "LD 750", "LD 1000", "LD 1500"], a: 3, why: "Kofi − Ama = 1 share = LD 300, so the total 5 shares = 5 × 300 = LD 1500." },
      { q: "A machine costing LD 10 000 depreciates by 10% each year. Find its value after 2 years.", o: ["LD 8 000", "LD 8 100", "LD 8 200", "LD 9 000"], a: 1, why: "Each year the value is 90% of the previous year's: 10 000 × 0.9 × 0.9 = LD 8 100 (a 19% total loss, not 20%)." },
      { q: "If p varies jointly as q and the square of r, and p = 20 when q = 2 and r = 5, find p when q = 3 and r = 6.", o: ["43.2", "48", "54", "64.8"], a: 0, why: "p = kq r² → 20 = k×2×25 → k = 0.4; p = 0.4×3×36 = 43.2." },
      { q: "Express 0.045 67 correct to two significant figures.", o: ["0.04", "0.045", "0.046", "0.05"], a: 2, why: "The first two significant figures are 4 and 5; the following digit 6 rounds the 5 up: 0.045 67 ≈ 0.046." },
      { q: "Evaluate 27^(2/3).", o: ["3", "6", "9", "18"], a: 2, why: "Take the cube root first, then square: 27^(2/3) = (∛27)² = 3² = 9." },
      { q: "Find the 5th term of the G.P. 2, 6, 18, …", o: ["54", "81", "162", "486"], a: 2, why: "a = 2, r = 3; U₅ = 2 × 3⁴ = 2 × 81 = 162." },
      { q: "Find the simple interest on LD 5 000 at 4% per annum for 3 years.", o: ["LD 200", "LD 400", "LD 600", "LD 6 500"], a: 2, why: "I = PRT/100 = (5 000 × 4 × 3)/100 = LD 600." },
      { q: "Find the compound interest on LD 2 000 at 10% per annum for 2 years.", o: ["LD 200", "LD 400", "LD 420", "LD 2 420"], a: 2, why: "Amount = 2 000(1.1)² = 2 000 × 1.21 = LD 2 420; interest = 2 420 − 2 000 = LD 420." },
      { q: "A trader bought an article for LD 800 and sold it for LD 1 000. Find the percentage profit.", o: ["20%", "25%", "40%", "80%"], a: 1, why: "Profit = 1 000 − 800 = 200; percentage profit = (200/800) × 100% = 25%." },
      { q: "On a map of scale 1 : 50 000, two villages are 6 cm apart. Find the actual distance between them.", o: ["0.3 km", "3 km", "5 km", "30 km"], a: 1, why: "6 cm × 50 000 = 300 000 cm = 3 000 m = 3 km." },
      { q: "If x varies inversely as y and x = 4 when y = 3, find x when y = 6.", o: ["2", "8", "12", "0.5"], a: 0, why: "Inverse variation: xy = k → k = 4 × 3 = 12; when y = 6, x = 12/6 = 2." },
      { q: "Solve 2x + y = 5 and x − y = 1 using 2×2 determinants. The value of x is:", o: ["1", "2", "3", "4"], a: 1, why: "x = det[[5, 1], [1, −1]] / det[[2, 1], [1, −1]] = (−5 − 1)/(−2 − 1) = −6/−3 = 2 (then y = 1)." },
      { q: "The negation of 'All candidates passed the test' is:", o: ["No candidate passed the test", "Some candidates did not pass the test", "All candidates failed the test", "Some candidates passed the test"], a: 1, why: "Negating a universal statement ('all …') gives 'some … not …'." },
      { q: "Find the value of 23 (base 4) in base 10.", o: ["8", "9", "10", "11"], a: 3, why: "Place values in base 4: 2×4¹ + 3×4⁰ = 8 + 3 = 11 in base 10." }
    ],
    essay: [
      { q: "(a) Convert 213 (base 4) to base 10 and 56 (base 10) to base 2. (b) Find 7 × 6 (mod 11). (c) Express 0.000 045 in standard form.", marks: 12, outline: [
        "213₄ = 2×16 + 1×4 + 3 = 35 (base 10)",
        "56 = 32 + 16 + 8 = 111000₂",
        "7 × 6 = 42; 42 = 3×11 + 9, so 42 ≡ 9 (mod 11)",
        "0.000 045 = 4.5 × 10⁻⁵"
      ] },
      { q: "The first term and the common difference of an arithmetic progression are 4 and 3 respectively. (a) Find the sum of the first 15 terms. (b) Find which term is 100.", marks: 10, outline: [
        "S₁₅ = 15/2[2×4 + 14×3] = 15/2 × 50 = 375",
        "Uₙ = 4 + (n−1)3 = 100 → 3n = 99 → n = 33; the 33rd term is 100"
      ] },
      { q: "A and B share a profit in the ratio 3:2 and B and C share the same profit in the ratio 5:4. Find A:B:C, and the share of each if the profit is LD 1 800.", marks: 10, outline: [
        "A:B = 3:2 = 15:10; B:C = 5:4 = 10:8, so A:B:C = 15:10:8 (33 shares)",
        "A = 15/33 × 1800 = LD 818.18; B = 10/33 × 1800 = LD 545.45; C = 8/33 × 1800 = LD 436.36"
      ] },
      { q: "A man deposits LD 200 000 in a bank at 8% interest per annum. (a) Find the simple interest earned in 3 years. (b) Find the total amount in the account after 3 years. (c) If instead the interest were compounded annually at the same rate, find the amount after 3 years (to the nearest dollar).", marks: 12, outline: [
        "(a) Simple interest I = PRT/100 = (200 000 × 8 × 3)/100 = LD 48 000",
        "(b) Amount = P + I = 200 000 + 48 000 = LD 248 000",
        "(c) Compound amount = P(1 + R/100)³ = 200 000 × (1.08)³ = 200 000 × 1.259 712 ≈ LD 251 942"
      ] },
      { q: "In a class of 50 students, 30 study French, 25 study Spanish and 10 study neither subject. (a) Find how many study both subjects. (b) Find how many study French only and how many study Spanish only. (c) Represent the information on a Venn diagram and check the total.", marks: 12, outline: [
        "n(F ∪ S) = 50 − 10 = 40 (those offering at least one subject)",
        "(a) n(F ∩ S) = n(F) + n(S) − n(F ∪ S) = 30 + 25 − 40 = 15 study both",
        "(b) French only = 30 − 15 = 15; Spanish only = 25 − 15 = 10",
        "(c) Regions: 15 (French only) + 15 (both) + 10 (Spanish only) + 10 (neither) = 50 ✓"
      ] },
      { q: "A job pays a starting salary of LD 12 000 per year with an increase of LD 800 at the end of each year. (a) Find the salary earned in the 6th year. (b) Find the total earnings over the first 6 years. (c) If instead the salary increased by 5% each year (a G.P.), find the salary in the 6th year to the nearest dollar.", marks: 12, outline: [
        "(a) A.P. with a = 12 000, d = 800: U₆ = 12 000 + (6 − 1)×800 = LD 16 000",
        "(b) S₆ = 6/2[2×12 000 + 5×800] = 3 × 28 000 = LD 84 000",
        "(c) G.P. with a = 12 000, r = 1.05: U₆ = 12 000 × (1.05)⁵ = 12 000 × 1.276 28 ≈ LD 15 315"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Topic A, Number and Numeration:" },
      { k: "bul", items: [
        "(a) Number bases — conversion of numbers from one base to another; basic operations on number bases",
        "(b) Modular arithmetic — concept of modulo arithmetic; addition, subtraction and multiplication in modulo arithmetic; application to daily life",
        "(c) Fractions, decimals and approximations — basic operations; approximations and significant figures",
        "(d) Indices — laws of indices; numbers in standard form (scientific notation); relationship between indices and logarithms",
        "(e) Logarithms — basic rules of logarithms; use of tables of logarithms and antilogarithms",
        "(f) Sequence and series — patterns of sequences; arithmetic progression (A.P.); geometric progression (G.P.)",
        "(g) Sets — idea of sets, universal sets, finite and infinite sets, subsets, empty and disjoint sets; union, intersection and complement; Venn diagrams",
        "(h) Logical reasoning — simple statements; true and false statements; negation of statements; implications",
        "(i) Positive and negative integers, rational numbers — the four basic operations on rational numbers",
        "(j) Surds (radicals) — simplification and rationalisation of simple surds",
        "(k) Matrices and determinants — order, notation, types; addition, subtraction, scalar multiplication and multiplication; determinant (2×2 for equations)",
        "(l) Ratio, proportions and rates — financial partnerships, rates of work, costs, taxes, foreign exchange, density, distance, time and speed",
        "(m) Percentages — simple interest, commission, discount, depreciation, profit and loss, compound interest, hire purchase and percentage error",
        "(n) Financial arithmetic — depreciation/amortization; annuities; capital market instruments (shares, stocks, debentures, bonds)",
        "(o) Variation — direct, inverse, partial and joint variations"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Conversion from one base to base 10 and vice versa; conversion from one base to another base; addition, subtraction and multiplication of number bases.",
        "Interpretation of modulo arithmetic, e.g. 6 + 4 = k (mod 7), 3 × 5 = b (mod 6), m = 2 (mod 3); related to market days, the clock, shift duty, etc.",
        "Approximations should be realistic — a road is not measured correct to the nearest cm.",
        "Laws of indices: aˣ × a = aˣʸ, a ÷ aʸ = aˣ⁻ʸ, (aˣ)ʸ = aˣʸ, where x, y are real numbers and a ≠ 0; include simple examples of negative and fractional indices.",
        "Standard form: 375 300 000 = 3.753 × 10⁸; 0.000 000 35 = 3.5 × 10⁻⁷. Use of tables of squares, square roots and reciprocals is accepted.",
        "Relationship between indices and logarithms: y = 10ᵏ implies log₁₀ y = k. Rules: log₁₀(pq) = log₁₀ p + log₁₀ q; log₁₀(p/q) = log₁₀ p − log₁₀ q; log₁₀ pⁿ = n log₁₀ p. Calculations involving multiplication, division, powers and roots.",
        "Sequences: determine any term of a given sequence; the notation Uₙ = the nth term may be used. Simple cases only, including word problems; include the sum for an A.P. and exclude the sum for a G.P.",
        "Sets: notations { }, ∈, P′ (complement of P); properties — commutative, associative, distributive. Venn diagrams restricted to at most 3 sets.",
        "Rational numbers matched with points on the number line; notation N (natural), Z (integers), Q (rational).",
        "Surds of the form √a, (a+b) and √(a/b) where a is rational and b a positive integer; exclude surds of the form ∛a. Basic operations on surds.",
        "Matrices: not more than 3×3; determinants restricted to 2×2; application to solving simultaneous linear equations in two variables.",
        "Ratio and rates related to real-life situations; include average rates and taxes such as VAT and withholding tax.",
        "Compound interest limited to a maximum of 3 years.",
        "Financial arithmetic: depreciation on fixed assets; amortization on capitalized assets; simple problems on annuities; shares, stocks, debentures, bonds and interest on bonds.",
        "Variation expressed in mathematical symbols — direct (x ∝ y), inverse (x ∝ 1/y) — and applied to simple practical problems."
      ] },
      { k: "h3", t: "Worked examples — step-by-step solutions" },
      { k: "bul", items: [
        "Convert 231₄ to base 10: 2×4² + 3×4¹ + 1×4⁰ = 32 + 12 + 1 = 45.",
        "Simplify 2⁵ × 2⁻³ ÷ 2²: add and subtract the indices → 2⁵⁻³⁻² = 2⁰ = 1 (any non-zero number to the power 0 is 1).",
        "Find log₁₀ 50 given log₁₀ 2 = 0.3010 and log₁₀ 5 = 0.6990: log 50 = log 5 + log 10 = 0.6990 + 1 = 1.6990.",
        "A.P. with a = 5, d = 3: U₁₀ = a + 9d = 5 + 27 = 32 and S₁₀ = 10/2(2×5 + 9×3) = 5 × 37 = 185 (also n/2(a + Uₙ) = 5(5 + 32)).",
        "Depreciation: a van costing LD 120 000 loses 15% of its value each year. Value after 2 years = 120 000 × 0.85² = LD 86 700.",
        "Rationalise 3/(√5 − 2): multiply top and bottom by (√5 + 2) → 3(√5 + 2)/(5 − 4) = 3√5 + 6."
      ] }
    ]
  },
  /* =============== B · ALGEBRAIC PROCESSES =============== */
  {
    grade: 12, sem: "One", icon: "✏️", period: "B",
    title: "Algebraic Processes",
    subtitle: "Expressions · expansion and factorisation · binary operations · linear and quadratic equations · change of subject · graphs of functions · linear inequalities · algebraic fractions · functions and relations",
    note: "The algebra topic: manipulation of expressions, equations, inequalities and graphs. Paper 2 Section A frequently opens with a factorisation or equation question from this topic.",
    objectives: [
      "Formulate algebraic expressions from given situations and evaluate them",
      "Expand and factorise algebraic expressions, including ax² + bx + c with integer coefficients",
      "Solve linear and simultaneous linear equations by elimination, substitution and graphical methods",
      "Solve quadratic equations by factorisation, completing the square and the formula, and form quadratics with given roots",
      "Interpret graphs of linear and quadratic functions, find max/min points and solve equations graphically",
      "Solve linear inequalities and represent solutions on the number line and graphically"
    ],
    terms: [
      { t: "Expansion", d: "Removing brackets in an expression using the distributive law, e.g. (a + b)(c + d) = ac + ad + bc + bd.", x: "(x + 2)(x − 3) = x² − x − 6" },
      { t: "Factorisation", d: "Writing an expression as a product of factors; forms: ax + ay, a(b+c) + d(b+c), a² − b², ax² + bx + c.", x: "x² + 5x + 6 = (x+2)(x+3)" },
      { t: "Binary operation", d: "A defined operation * on two elements, e.g. a * b = 2a + b − ab; properties (closure, commutativity, associativity, identity) are examined.", x: "If a * b = a + b + 1, find 2 * 3" },
      { t: "Change of subject", d: "Making a stated variable the subject of a formula, then substituting values.", x: "v² = u² + 2as → find v" },
      { t: "Quadratic formula", d: "For ax² + bx + c = 0: x = (−b ± √(b² − 4ac)) / 2a; the discriminant b² − 4ac decides the nature of the roots.", x: "Discriminant > 0: two distinct real roots" },
      { t: "Linear inequality", d: "An inequality involving first powers of the variable; solutions are represented on the number line or by shaded regions.", x: "2x − 3 < 5 → x < 4" },
      { t: "Algebraic fraction", d: "A fraction with algebraic numerator and/or denominator; operations restricted to simple cases with monomial and binomial denominators.", x: "1/(x−2) + 1/(x+2) = 2x/(x²−4)" },
      { t: "Discriminant", d: "For ax² + bx + c = 0, Δ = b² − 4ac decides the roots: Δ > 0 two distinct reals; Δ = 0 equal reals; Δ < 0 no real roots.", x: "x² + 4x + 5: Δ = 16 − 20 = −4 < 0" },
      { t: "Completing the square", d: "Rewriting ax² + bx + c as a(x + p)² + q; used to find maximum/minimum points and to solve quadratics.", x: "x² + 6x + 11 = (x + 3)² + 2" },
      { t: "Truth set", d: "The set of values of x that satisfy an equation or inequality, represented on the number line or by shading.", x: "2x − 3 < 5 has truth set x < 4" },
      { t: "Function", d: "A mapping from a set (domain) to a set (range); types: one-to-one, one-to-many, many-to-one, many-to-many.", x: "f(x) = x² + 1 is a function; its inverse exists only for restricted domains" }
    ],
    tf: [
      { s: "Formal proofs of the sine and cosine rules are required in WASSCE.", a: "False", why: "No formal proofs of the theorem and rules are required — only their application." },
      { s: "Dividing both sides of an inequality by a negative number reverses the inequality sign.", a: "True", why: "For example −3x ≥ 9 becomes x ≤ −3 when both sides are divided by −3." },
      { s: "A quadratic equation can have three real roots.", a: "False", why: "A quadratic has at most two roots — two distinct, one repeated, or none real when the discriminant is negative." },
      { s: "The condition for congruent triangles (SSS, SAS, etc.) must be known, but proofs are not required.", a: "True", why: "Conditions to be known but proofs not required." }
    ],
    mcq: [
      { q: "Factorise x² + 7x + 12.", o: ["(x+3)(x+4)", "(x+2)(x+6)", "(x−3)(x−4)", "(x+1)(x+12)"], a: 0, why: "Find two numbers with product 12 and sum 7: 3 and 4, so x² + 7x + 12 = (x + 3)(x + 4)." },
      { q: "Factorise 4x² − 9.", o: ["(2x−3)(2x+3)", "(2x−9)(2x+9)", "(4x−3)(4x+3)", "(4x−9)(4x+9)"], a: 0, why: "Difference of two squares: a² − b² = (a−b)(a+b)." },
      { q: "Solve: 3x − 5 = 2x + 4.", o: ["x = 1", "x = 4", "x = 9", "x = −9"], a: 2, why: "Collect x-terms on the left and numbers on the right: 3x − 2x = 4 + 5 → x = 9." },
      { q: "Solve the simultaneous equations: x + y = 7 and x − y = 3.", o: ["x = 5, y = 2", "x = 4, y = 3", "x = 3, y = 4", "x = 6, y = 1"], a: 0, why: "Eliminate y by adding the equations: 2x = 10 → x = 5; substitute into x + y = 7 → y = 2." },
      { q: "Solve x² − 5x + 6 = 0.", o: ["x = 2 or 3", "x = −2 or −3", "x = 1 or 6", "x = −1 or −6"], a: 0, why: "Factorise: x² − 5x + 6 = (x−2)(x−3) = 0 → x = 2 or x = 3 (each factor set to zero in turn)." },
      { q: "Form the quadratic equation whose roots are 3 and −4.", o: ["x² + x − 12 = 0", "x² − x − 12 = 0", "x² + x + 12 = 0", "x² − x + 12 = 0"], a: 0, why: "If the roots are 3 and −4 the factors are (x−3) and (x+4): (x−3)(x+4) = x² + x − 12 = 0." },
      { q: "The equation x² + 4x + 5 = 0 has roots which are:", o: ["real and equal", "real and distinct", "complex (imaginary)", "rational"], a: 2, why: "Discriminant = 16 − 20 = −4 < 0, so the roots are complex." },
      { q: "Make x the subject of y = (x + 2)/(x − 3).", o: ["x = (3y + 2)/(y − 1)", "x = (y + 6)/(y − 1)", "x = (2y − 3)/(y + 1)", "x = (y − 6)/(1 − y)"], a: 0, why: "y(x−3) = x + 2 → xy − 3y = x + 2 → x(y−1) = 3y + 2 → x = (3y + 2)/(y − 1)." },
      { q: "Solve the inequality 2x − 3 < 5 and represent the solution correctly.", o: ["x < 4", "x > 4", "x ≤ 4", "x ≥ 4"], a: 0, why: "2x < 8 → x < 4 (open interval at 4 on the number line)." },
      { q: "Simplify (x² − 9)/(x² − 4x + 3).", o: ["(x+3)/(x−1)", "(x+3)/(x−3)", "(x−3)/(x−1)", "(x+3)(x−1)/(x−3)"], a: 0, why: "(x−3)(x+3)/[(x−3)(x−1)] = (x+3)/(x−1), x ≠ 3." },
      { q: "If f(x) = 2x² − 3x + 1, find f(−1).", o: ["−4", "4", "6", "−6"], a: 2, why: "f(−1) = 2(1) − 3(−1) + 1 = 2 + 3 + 1 = 6." },
      { q: "Expand (2x − 3)(x + 5).", o: ["2x² + 7x − 15", "2x² − 7x − 15", "2x² + 13x − 15", "2x² + 7x + 15"], a: 0, why: "2x² + 10x − 3x − 15 = 2x² + 7x − 15." },
      { q: "Factorise 3x² + 10x + 8.", o: ["(3x + 2)(x + 4)", "(3x + 4)(x + 2)", "(3x − 4)(x − 2)", "(x + 4)(3x + 2)"], a: 1, why: "3 × 8 = 24 and 6 × 4 = 24 with 6 + 4 = 10 → 3x² + 6x + 4x + 8 = (3x + 4)(x + 2)." },
      { q: "Express x² + 6x + 11 in the form (x + a)² + b.", o: ["(x + 3)² + 2", "(x + 6)² − 25", "(x + 3)² − 2", "(x + 3)² + 20"], a: 0, why: "Completing the square: x² + 6x + 11 = (x + 3)² − 9 + 11 = (x + 3)² + 2." },
      { q: "Solve x² + 2x − 4 = 0 using the quadratic formula.", o: ["x = −1 ± √5", "x = 1 ± √5", "x = −2 ± √5", "x = −1 ± √3"], a: 0, why: "x = [−2 ± √(4 + 16)]/2 = [−2 ± √20]/2 = [−2 ± 2√5]/2 = −1 ± √5." },
      { q: "A binary operation ⊕ is defined by a ⊕ b = a + b − 2. The identity element is:", o: ["0", "1", "2", "−2"], a: 2, why: "Identity e: a ⊕ e = a → a + e − 2 = a → e = 2." },
      { q: "For which value of x is the fraction (x + 3)/(2x − 5) undefined?", o: ["x = −3", "x = 5/2", "x = 3", "x = 2/5"], a: 1, why: "A fraction is undefined where its denominator is zero: 2x − 5 = 0 → x = 5/2." },
      { q: "Solve −3x + 2 ≥ 11.", o: ["x ≥ −3", "x ≤ −3", "x ≥ 3", "x ≤ 3"], a: 1, why: "−3x ≥ 9 → x ≤ −3 (the inequality sign reverses when dividing by the negative −3)." },
      { q: "If α and β are the roots of x² − 5x + 3 = 0, find α + β.", o: ["−5", "3", "5", "15"], a: 2, why: "For x² − 5x + 3 = 0: α + β = −(−5)/1 = 5 (and αβ = 3/1 = 3)." },
      { q: "The graph of y = x² − 4x + 3 crosses the x-axis at:", o: ["x = 1 and x = 3", "x = −1 and x = −3", "x = 0 and x = 4", "x = 1 and x = −3"], a: 0, why: "The graph cuts the x-axis where y = 0: x² − 4x + 3 = (x−1)(x−3) = 0 → x = 1 and x = 3." }
    ],
    essay: [
      { q: "Factorise completely: (a) x² − 6x + 8. (b) 2x² + 7x + 3. (c) 9a² − 16b². Hence solve 2x² + 7x + 3 = 0.", marks: 12, outline: [
        "(a) (x − 2)(x − 4)",
        "(b) (2x + 1)(x + 3)",
        "(c) (3a − 4b)(3a + 4b)",
        "2x² + 7x + 3 = 0 → (2x+1)(x+3) = 0 → x = −1/2 or x = −3"
      ] },
      { q: "A binary operation * is defined by a * b = a + b + ab. (a) Find 2 * 3. (b) Find the identity element. (c) Find the inverse of 2.", marks: 10, outline: [
        "2 * 3 = 2 + 3 + 6 = 11",
        "Identity e: a + e + ae = a → e(1+a) = 0 → e = 0",
        "Inverse of 2: 2 * x = 0 → 2 + x + 2x = 0 → 3x = −2 → x = −2/3"
      ] },
      { q: "The sum of two numbers is 20 and the sum of their squares is 260. Find the numbers.", marks: 10, outline: [
        "x + y = 20 → y = 20 − x",
        "x² + (20−x)² = 260 → 2x² − 40x + 140 = 0 → x² − 20x + 70 = 0",
        "x = [20 ± √(400−280)]/2 = 10 ± √30 → the numbers are 10 + √30 and 10 − √30 (≈ 15.48 and 4.52)"
      ] },
      { q: "3 books and 2 pens together cost LD 2 600. 5 books and 4 pens together cost LD 4 600. Find the cost of one book and the cost of one pen.", marks: 10, outline: [
        "Let a book cost LD x and a pen cost LD y: 3x + 2y = 2 600 ...(1); 5x + 4y = 4 600 ...(2)",
        "Eliminate y: 2 × (1) gives 6x + 4y = 5 200 ...(3); (3) − (2) gives x = 600",
        "Substitute x = 600 in (1): 1 800 + 2y = 2 600 → 2y = 800 → y = 400",
        "A book costs LD 600 and a pen costs LD 400 (check in (2): 5×600 + 4×400 = 4 600 ✓)"
      ] },
      { q: "The length of a rectangular garden is 3 m more than its width. If the area of the garden is 70 m², find the dimensions of the garden.", marks: 10, outline: [
        "Let the width be x m; then the length is (x + 3) m and x(x + 3) = 70",
        "x² + 3x − 70 = 0 → (x + 10)(x − 7) = 0 → x = 7 or x = −10 (reject the negative root)",
        "Width = 7 m and length = 7 + 3 = 10 m (check: 7 × 10 = 70 m² ✓)"
      ] },
      { q: "The function y = x² − 2x − 3. (a) Copy and complete the table of values for x = −2, −1, 0, 1, 2, 3, 4. (b) Draw the graph of y = x² − 2x − 3 and use it to solve x² − 2x − 3 = 0. (c) Use the graph to solve x² − 2x − 8 = 0.", marks: 12, outline: [
        "(a) y-values: x = −2 → 5; x = −1 → 0; x = 0 → −3; x = 1 → −4; x = 2 → −3; x = 3 → 0; x = 4 → 5",
        "(b) The curve cuts the x-axis where y = 0: x = −1 and x = 3",
        "(c) x² − 2x − 8 = 0 → x² − 2x − 3 = 5; read from the graph where y = 5: x = −2 and x = 4"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Topic B, Algebraic Processes:" },
      { k: "bul", items: [
        "(a) Algebraic expressions — formulating expressions from given situations; evaluation of expressions",
        "(b) Simple operations on algebraic expressions — expansion; factorisation; binary operations",
        "(c) Solution of linear equations — linear equations in one variable; simultaneous linear equations in two variables",
        "(d) Change of subject of a formula/relation — substitution",
        "(e) Quadratic equations — solution by factorisation, completing the square and the formula; forming quadratic equations with given roots; practical problems",
        "(f) Graphs of linear and quadratic functions — interpretation of graphs, coordinates of points, tables of values, drawing quadratic graphs and obtaining roots; graphical solution of y = ax² + bx + c and y = mx + k; tangents to determine gradient",
        "(g) Linear inequalities — solution in one variable and representation on the number line; graphical solution in two variables; simultaneous inequalities",
        "(h) Algebraic fractions — operations with monomial and binomial denominators; values for which a fraction is undefined",
        "(i) Functions and relations — types of functions (one-to-one, one-to-many, many-to-one, many-to-many); functions as a mapping; determination of the rule of a given mapping"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Example: find an expression for the cost C of 4 pens at x dollars each and 3 oranges at y dollars each: C = 4x + 3y; if x = 60 and y = 20, C = 300.",
        "Factorisation of expressions of the form ax + ay, a(b+c) + d(b+c), a² − b² and ax² + bx + c where a, b, c are integers. Application of difference of two squares, e.g. 49² − 47² = (49+47)(49−47) = 192.",
        "Binary operations on real numbers, such as a * b = 2a + b − ab.",
        "Simultaneous equations in two variables solved by elimination, substitution and graphical methods, with word problems involving one or two variables.",
        "Change of subject: if v² = u² + 2as, find v; then evaluate v given u and a.",
        "Quadratic equations: simple rational roots only; e.g. forming a quadratic whose roots are −3 and 2: (x+3)(x−2) = 0.",
        "Graphs: find the coordinates of maximum and minimum points; intercepts on the axes; the axis of symmetry; recognising sketched graphs. Use of quadratic graphs to solve related equations — the graph of y = x² + 5x + 6 to solve x² + 5x + 4 = 0. Gradient determined by drawing the relevant triangle.",
        "Inequalities: the truth set is also required; application to real-life situations — minimum cost, maximum profit, linear programming.",
        "Algebraic fractions: simple cases only, e.g. 1/x + 1/y = (x+y)/xy; 1/(x−a) + 1/(x−b); a fraction is undefined where the denominator is zero (e.g. not defined for x = −3).",
        "Functions: as a mapping, with determination of the rule of a given mapping/function."
      ] },
      { k: "h3", t: "Worked examples — step-by-step solutions" },
      { k: "bul", items: [
        "Expand (3x − 2)²: (3x − 2)(3x − 2) = 9x² − 6x − 6x + 4 = 9x² − 12x + 4.",
        "Factorise 2x² − 7x + 3: 2×3 = 6 = (−6)×(−1) and −6 + (−1) = −7 → 2x² − 6x − x + 3 = (2x − 1)(x − 3).",
        "Solve by completing the square: x² + 8x + 9 = 0 → (x + 4)² − 16 + 9 = 0 → (x + 4)² = 7 → x = −4 ± √7.",
        "Simultaneous: 2x + 3y = 12 and x − y = 1 → x = y + 1 → 2(y + 1) + 3y = 12 → 5y = 10 → y = 2, x = 3.",
        "Change of subject: make r the subject of A = πr² → r² = A/π → r = √(A/π) (r > 0 for a radius).",
        "Undefined fractions: (x + 1)/(x − 4) is undefined at x = 4 only — the denominator vanishes there while the numerator does not."
      ] }
    ]
  },
  /* =============== C · MENSURATION =============== */
  {
    grade: 12, sem: "One", icon: "📏", period: "C",
    title: "Mensuration",
    subtitle: "Lengths and perimeters · areas · volumes — plane and solid figures, including longitudes and latitudes",
    note: "Measurement of lengths, areas and volumes. Pythagoras, the sine and cosine rules, circles and sectors, and the standard solids are the recurring examination items.",
    objectives: [
      "Use Pythagoras' theorem, the sine and cosine rules to determine lengths and distances",
      "Calculate lengths of arcs, perimeters of sectors and segments, and distances along latitudes and longitudes",
      "Calculate areas of triangles, quadrilaterals, circles, sectors, segments and compound shapes",
      "Calculate surface areas and volumes of cubes, cuboids, cylinders, cones, pyramids, prisms and spheres",
      "Apply areas and volumes of similar figures"
    ],
    terms: [
      { t: "Pythagoras' theorem", d: "In a right-angled triangle, the square on the hypotenuse equals the sum of the squares on the other two sides: c² = a² + b².", x: "3-4-5 triangle" },
      { t: "Sine rule", d: "In any triangle, a/sin A = b/sin B = c/sin C; used for lengths and distances when an angle-side pair is known.", x: "a/sin A = c/sin C" },
      { t: "Cosine rule", d: "a² = b² + c² − 2bc cos A; used when two sides and the included angle are known.", x: "Finding the longest side of a triangle" },
      { t: "Arc length", d: "Length of a portion of the circumference: l = (θ/360°) × 2πr for a sector of angle θ.", x: "l = (60/360) × 2π × 6" },
      { t: "Area of a triangle", d: "½ × base × height, or ½ ab sin C when two sides and the included angle are known.", x: "½ × 5 × 8 × sin 30° = 10" },
      { t: "Sector", d: "The portion of a circle bounded by two radii and their arc; area = (θ/360°) × πr².", x: "Area of a 90° sector of radius 4" },
      { t: "Longitude and latitude", d: "Lines measuring east-west and north-south position on the Earth; distances along them use 1° ≈ 111 km at the equator for longitudes scaled by cos(latitude).", x: "Distance along a parallel of latitude" },
      { t: "Perimeter of a sector", d: "2r + the arc length (θ/360°) × 2πr — the two radii plus the curved edge.", x: "r = 7, θ = 60°: 14 + 7.33 = 21.33 cm" },
      { t: "Surface area and volume of a sphere", d: "A = 4πr² and V = (4/3)πr³, where r is the radius.", x: "r = 3: A = 4 × 22/7 × 9 ≈ 113.1 cm²" },
      { t: "Similar solids", d: "For similar figures: lengths in ratio a : b, areas in a² : b² and volumes in a³ : b³.", x: "Volumes 8 : 125 → lengths 2 : 5" },
      { t: "Volume of a cone", d: "V = ⅓πr²h, where r is the base radius and h the perpendicular height.", x: "V = ⅓ × 22/7 × 7² × 12 = 616 cm³" }
    ],
    tf: [
      { s: "Formal proofs of the sine and cosine rules are required in WASSCE.", a: "False", why: "No formal proofs of the theorem and rules are required." },
      { s: "Volumes of similar solids are set in WASSCE mensuration questions.", a: "True", why: "The syllabus includes volumes of similar solids alongside areas of similar figures." },
      { s: "The perpendicular height, not the slant height, is used in the volume of a cone.", a: "True", why: "V = ⅓πr²h uses the perpendicular height; the slant height l is used in the curved surface area πrl." },
      { s: "The area of a triangle can be found from ½ab sin C.", a: "True", why: "Include area of triangle = ½ base × height and ½ab sin C." }
    ],
    mcq: [
      { q: "A ladder 13 m long leans against a wall, its foot 5 m from the wall. How high up the wall does it reach?", o: ["10 m", "11 m", "12 m", "14 m"], a: 2, why: "√(13² − 5²) = √(169−25) = √144 = 12 m." },
      { q: "Find the area of a triangle with sides 6 cm and 8 cm enclosing an angle of 30°.", o: ["12 cm²", "14 cm²", "24 cm²", "48 cm²"], a: 0, why: "½ × 6 × 8 × sin 30° = 24 × 0.5 = 12 cm²." },
      { q: "Find the length of an arc of a circle of radius 7 cm and angle 60° (π = 22/7).", o: ["7.33 cm", "7.7 cm", "11 cm", "15.4 cm"], a: 0, why: "l = (60/360) × 2πr = ⅙ × 2 × (22/7) × 7 = 44/6 ≈ 7.33 cm." },
      { q: "Find the volume of a cylinder of radius 3 cm and height 7 cm (π = 22/7).", o: ["198 cm³", "231 cm³", "66 cm³", "396 cm³"], a: 0, why: "Volume of a cylinder V = πr²h = 22/7 × 3² × 7 = 22 × 9 = 198 cm³ (the 7 cancels)." },
      { q: "The surface area of a cube of side 4 cm is:", o: ["96 cm²", "64 cm²", "48 cm²", "144 cm²"], a: 0, why: "A cube has 6 equal square faces: 6 × 4² = 6 × 16 = 96 cm²." },
      { q: "Two towns lie on the same meridian, 2° apart in latitude. Estimate the distance between them (1° ≈ 111 km).", o: ["111 km", "222 km", "333 km", "444 km"], a: 1, why: "Along a meridian 1° of latitude ≈ 111 km: 2 × 111 = 222 km." },
      { q: "A sector has radius 10 cm and angle 72°. Its arc length is (π = 22/7):", o: ["12.57 cm", "25.14 cm", "40 cm", "12.5 cm"], a: 0, why: "(72/360) × 2π × 10 = 0.2 × 62.86 ≈ 12.57 cm." },
      { q: "The volume of a cone with base radius 3 cm and height 10 cm is (π = 22/7):", o: ["94.3 cm³", "28.3 cm³", "141.4 cm³", "31.4 cm³"], a: 0, why: "V = ⅓πr²h = ⅓ × 22/7 × 3² × 10 = 660/7 ≈ 94.3 cm³." },
      { q: "Find the area of a sector of radius 6 cm and angle 90° (π = 22/7).", o: ["28.29 cm²", "18.86 cm²", "84.86 cm²", "113.14 cm²"], a: 0, why: "Area = (90/360) × πr² = ¼ × 22/7 × 36 = 198/7 ≈ 28.29 cm²." },
      { q: "Find the perimeter of a sector of radius 7 cm and angle 60° (π = 22/7).", o: ["11 cm", "21.33 cm", "14 cm", "14.67 cm"], a: 1, why: "Perimeter = 2r + arc = 14 + (60/360) × 2 × 22/7 × 7 = 14 + 7.33 = 21.33 cm." },
      { q: "Find the volume of a sphere of radius 3 cm (π = 22/7).", o: ["84.86 cm³", "113.14 cm³", "36 cm³", "339.43 cm³"], a: 1, why: "V = (4/3)πr³ = (4/3) × 22/7 × 27 = 2 376/21 ≈ 113.14 cm³." },
      { q: "The total surface area of a cylinder of radius 7 cm and height 10 cm is (π = 22/7):", o: ["374 cm²", "748 cm²", "440 cm²", "1 078 cm²"], a: 1, why: "A = 2πr(r + h) = 2 × 22/7 × 7 × 17 = 748 cm²." },
      { q: "A right pyramid has a square base of side 6 cm and a perpendicular height of 8 cm. Its volume is:", o: ["96 cm³", "288 cm³", "48 cm³", "384 cm³"], a: 0, why: "V = ⅓ × base area × height = ⅓ × 6² × 8 = 96 cm³." },
      { q: "In triangle ABC, a = 8 cm, A = 30° and B = 45°. Find b (to 1 decimal place).", o: ["5.7 cm", "11.3 cm", "8 cm", "16 cm"], a: 1, why: "Sine rule: b = a sin B/sin A = 8 sin 45°/sin 30° = 8 × 0.707/0.5 ≈ 11.3 cm." },
      { q: "Two similar solids have volumes 8 cm³ and 125 cm³. If a length of the smaller solid is 4 cm, the corresponding length of the larger is:", o: ["10 cm", "20 cm", "5 cm", "62.5 cm"], a: 0, why: "Ratio of lengths = ∛(125/8) = 5/2; corresponding length = 4 × 5/2 = 10 cm." },
      { q: "A path 2 m wide surrounds a rectangular lawn 8 m by 5 m. The area of the path is:", o: ["40 m²", "68 m²", "108 m²", "36 m²"], a: 1, why: "Outer rectangle = 12 m × 9 m = 108 m²; area of path = 108 − 8 × 5 = 68 m²." },
      { q: "In a triangle, a = 5, b = 7 and angle C = 60°. Find c² using the cosine rule.", o: ["39", "51", "34", "74"], a: 0, why: "c² = 25 + 49 − 2×5×7×cos 60° = 74 − 35 = 39." }
    ],
    essay: [
      { q: "A field is in the shape of a trapezium with parallel sides 24 m and 16 m, and a height of 10 m. (a) Find the area of the field. (b) If a square pond of side 4 m is dug in the centre, find the area of the field that remains.", marks: 10, outline: [
        "Area of trapezium = ½(24 + 16) × 10 = 200 m²",
        "Area of pond = 4² = 16 m²; remaining area = 200 − 16 = 184 m²"
      ] },
      { q: "The radius of a sector is 12 cm and its arc length is 18.84 cm (π = 3.14). Find (a) the angle of the sector, (b) the area of the sector.", marks: 10, outline: [
        "l = (θ/360) × 2πr → 18.84 = (θ/360) × 2 × 3.14 × 12 → θ = 90°",
        "Area = (90/360) × 3.14 × 12² = 0.25 × 452.16 = 113.04 cm²"
      ] },
      { q: "Water flows from a cylindrical tank of diameter 2 m and height 3 m into a rectangular basin 4 m by 2 m. Find the depth of water in the basin when the tank is emptied (π = 22/7).", marks: 10, outline: [
        "Volume of tank = πr²h = 22/7 × 1² × 3 = 66/7 ≈ 9.43 m³",
        "Depth in basin = 9.43/(4 × 2) = 9.43/8 ≈ 1.18 m"
      ] },
      { q: "A cone has a base radius of 7 cm and a slant height of 25 cm (π = 22/7). Find (a) the curved surface area of the cone, (b) the perpendicular height of the cone, (c) the volume of the cone.", marks: 12, outline: [
        "(a) Curved surface area = πrl = 22/7 × 7 × 25 = 550 cm²",
        "(b) h = √(l² − r²) = √(625 − 49) = √576 = 24 cm (right triangle formed by r, h and l)",
        "(c) V = ⅓πr²h = ⅓ × 22/7 × 49 × 24 = ⅓ × 3 696 = 1 232 cm³"
      ] },
      { q: "A triangular plot of land has sides 50 m, 60 m and 70 m. Find (a) the largest angle of the plot, (b) the area of the plot.", marks: 12, outline: [
        "(a) The largest angle faces the longest side (70 m): cos C = (50² + 60² − 70²)/(2×50×60) = (2 500 + 3 600 − 4 900)/6 000 = 0.2 → C = cos⁻¹ 0.2 ≈ 78.5°",
        "(b) Area = ½ × 50 × 60 × sin 78.5° = 1 500 × 0.98 ≈ 1 470 m² (nearest square metre)"
      ] },
      { q: "Two towns P and Q lie on the same parallel of latitude 60°N, with longitudes 20°W and 50°W respectively. Taking the radius of the Earth as 6 400 km and π = 22/7, find the distance between P and Q along the parallel of latitude.", marks: 12, outline: [
        "Difference in longitude = 50° − 20° = 30° along the parallel at 60°N",
        "Radius of the parallel = R cos 60° = 6 400 × 0.5 = 3 200 km",
        "Distance = (30/360) × 2πr = 2 × 22/7 × 3 200 ÷ 12 = 140 800/84 ≈ 1 676.2 km"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Topic C, Mensuration:" },
      { k: "bul", items: [
        "(a) Lengths and perimeters — use of Pythagoras' theorem, sine and cosine rules to determine lengths and distances; lengths of arcs of circles, perimeters of sectors and segments; longitudes and latitudes",
        "(b) Areas — triangles and special quadrilaterals (rectangles, parallelograms, trapeziums); circles, sectors and segments; surface areas of cubes, cuboids, cylinders, pyramids, right triangular prisms, cones and spheres",
        "(c) Volumes — volumes of cubes, cuboids, cylinders, cones, right pyramids and spheres; volumes of similar solids"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "No formal proofs of the theorem and rules are required.",
        "Distances along latitudes and longitudes and their corresponding angles.",
        "Areas of similar figures; include area of triangle = ½ base × height and ½ab sin C; areas of compound shapes.",
        "Relationship between the sector of a circle and the surface area of a cone.",
        "Include volumes of compound shapes; volumes of similar solids."
      ] },
      { k: "h3", t: "Worked examples — step-by-step solutions" },
      { k: "bul", items: [
        "Pythagoras: a right triangle with hypotenuse 10 m and one side 6 m has third side √(10² − 6²) = √64 = 8 m.",
        "Arc length: r = 14 cm, θ = 45°: l = (45/360) × 2 × 22/7 × 14 = ⅛ × 88 = 11 cm.",
        "Sector area: r = 14 cm, θ = 45°: A = (45/360) × 22/7 × 14² = ⅛ × 616 = 77 cm².",
        "Cylinder: r = 3.5 cm, h = 20 cm: V = 22/7 × 3.5² × 20 = 22/7 × 12.25 × 20 = 770 cm³.",
        "Cone from a sector: a sector of radius 25 cm and angle 216° forms the curved surface of a cone whose slant height is 25 cm and whose base circumference is (216/360) × 2π × 25 = 30π cm → base radius 15 cm.",
        "Similar solids: volumes 27 cm³ and 64 cm³ have lengths in the ratio 3 : 4 (cube roots); if a length of the smaller is 6 cm, the corresponding length of the larger is 8 cm."
      ] }
    ]
  },
  /* =============== D · PLANE GEOMETRY =============== */
  {
    grade: 12, sem: "One", icon: "📐", period: "D",
    title: "Plane Geometry",
    subtitle: "Angles · parallel lines · triangles and polygons · circles · construction · loci",
    note: "The pure geometry topic. Theorems on angles, parallel lines, congruent and similar triangles, and the circle carry the objective items; construction and loci appear in Paper 2.",
    objectives: [
      "Apply the angle properties at a point, on a straight line, and on parallel lines, including the intercept theorem",
      "Use the angle sums of triangles and polygons, the exterior angle property, and the properties of special triangles and quadrilaterals",
      "Apply the circle theorems: angles at the centre and circumference, angles in the same and opposite segments, tangent-chord theorem",
      "Perform constructions: bisectors, parallels, perpendiculars, standard angles, and triangles and quadrilaterals from sufficient data",
      "Find points using the standard loci and their intersections"
    ],
    terms: [
      { t: "Vertically opposite angles", d: "The angles opposite each other where two straight lines intersect; they are equal.", x: "Two lines crossing form two pairs of equal angles" },
      { t: "Alternate angles", d: "The equal angles formed when a transversal crosses two parallel lines, on opposite sides of the transversal.", x: "The 'Z' angles are equal" },
      { t: "Exterior angle", d: "The angle formed by extending a side of a triangle; it equals the sum of the two interior opposite angles.", x: "An exterior angle of 110° = 45° + 65°, the two interior opposite angles" },
      { t: "Congruent triangles", d: "Triangles with the same shape and size; conditions SSS, SAS, RHS (known, proofs not required).", x: "Matching sides and angles" },
      { t: "Similar triangles", d: "Triangles with equal angles and proportional sides; corresponding areas are in the ratio of the squares of corresponding sides.", x: "Sides in ratio 1:2 → areas in ratio 1:4" },
      { t: "Angle at the centre", d: "The angle subtended by an arc at the centre of a circle is twice the angle subtended at any point on the remaining circumference.", x: "90° at centre → 45° at circumference" },
      { t: "Cyclic quadrilateral", d: "A quadrilateral whose vertices lie on a circle; opposite angles are supplementary.", x: "∠A + ∠C = 180°" },
      { t: "Intercept theorem", d: "A line drawn parallel to one side of a triangle divides the other two sides proportionally.", x: "DE ∥ BC → AD/DB = AE/EC" },
      { t: "Tangent-chord theorem", d: "The angle between a tangent and a chord through the point of contact equals the angle in the alternate segment.", x: "35° between tangent and chord → 35° in the alternate segment" },
      { t: "Angle in a semicircle", d: "The angle subtended by a diameter at the circumference is a right angle.", x: "AB a diameter → ∠ACB = 90°" },
      { t: "Locus", d: "The path of a point moving under a given condition — e.g. points at a given distance from a point (a circle), or equidistant from two lines (angle bisectors).", x: "Locus of points 3 cm from A is a circle of radius 3 cm" }
    ],
    tf: [
      { s: "The sum of the interior angles of a polygon of n sides is (n − 2) × 180°.", a: "True", why: "Sum of interior angles = (n − 2)180° or (2n − 4) right angles." },
      { s: "The exterior angles of any convex polygon sum to 360°.", a: "True", why: "However many sides the polygon has, the exterior angles (one per vertex) always sum to 360°." },
      { s: "A tangent to a circle is perpendicular to the radius at the point of contact.", a: "True", why: "Perpendicularity of tangent and radius is a standard result to be applied in WASSCE questions." },
      { s: "Formal proofs of the circle theorems are required in WASSCE.", a: "False", why: "Only the theorems underlined in the syllabus may be proved; others are to be applied." }
    ],
    mcq: [
      { q: "Three angles at a point are 100°, 120° and 80°. Find the fourth angle.", o: ["20°", "30°", "40°", "60°"], a: 2, why: "Angles at a point sum to 360°: 360° − (100° + 120° + 80°) = 60°." },
      { q: "The angles of a triangle are in the ratio 2:3:4. Find the largest angle.", o: ["40°", "60°", "80°", "120°"], a: 2, why: "9 parts = 180° → 1 part = 20°; largest = 4 × 20 = 80°." },
      { q: "An exterior angle of a triangle is 110° and one interior opposite angle is 45°. Find the other interior opposite angle.", o: ["55°", "65°", "75°", "110°"], a: 1, why: "An exterior angle of a triangle equals the sum of the two interior opposite angles: 110° − 45° = 65°." },
      { q: "The sum of the interior angles of a hexagon is:", o: ["540°", "720°", "900°", "1080°"], a: 1, why: "Sum of interior angles = (n − 2) × 180° = (6−2) × 180° = 720°." },
      { q: "In a circle, an arc subtends an angle of 50° at the centre. The angle at the circumference is:", o: ["25°", "50°", "75°", "130°"], a: 0, why: "Angle at circumference = ½ × 50° = 25°." },
      { q: "In a cyclic quadrilateral, three angles are 70°, 90° and 80°. Find the fourth angle.", o: ["80°", "90°", "110°", "120°"], a: 2, why: "Opposite angles are supplementary: 180° − 70° = 110°." },
      { q: "An angle inscribed in a semicircle is:", o: ["30°", "45°", "60°", "90°"], a: 3, why: "The angle in a semicircle is a right angle (diameter subtends 90° at the circumference)." },
      { q: "Two parallel lines are cut by a transversal. If one corresponding angle is 65°, the interior opposite angle is:", o: ["65°", "115°", "125°", "90°"], a: 1, why: "Interior opposite (co-interior) angles are supplementary: 180° − 65° = 115°." },
      { q: "The locus of points equidistant from two given points A and B is:", o: ["A circle centred at A", "The perpendicular bisector of AB", "The line AB", "A line parallel to AB"], a: 1, why: "Points equidistant from two points lie on the perpendicular bisector of the line joining them." },
      { q: "Each interior angle of a regular pentagon is:", o: ["90°", "108°", "120°", "135°"], a: 1, why: "Exterior angle = 360°/5 = 72°; interior = 180° − 72° = 108° (or (5−2)×180°/5 = 108°)." },
      { q: "Two parallel lines are cut by a transversal. If one of the alternate angles is 115°, the other alternate angle is:", o: ["55°", "65°", "115°", "245°"], a: 2, why: "Alternate angles between parallel lines are equal: 115°." },
      { q: "Two triangles have their three sides respectively equal to the three sides of the other. The congruence condition satisfied is:", o: ["SAS", "ASA", "SSS", "RHS"], a: 2, why: "Three equal pairs of sides = SSS (conditions are known; proofs are not required)." },
      { q: "The sides of two similar triangles are in the ratio 2 : 5. The ratio of their areas is:", o: ["2 : 5", "4 : 25", "8 : 125", "5 : 2"], a: 1, why: "Areas of similar figures are in the ratio of the squares of corresponding sides: 2² : 5² = 4 : 25." },
      { q: "A tangent to a circle meets the radius at the point of contact at an angle of:", o: ["0°", "45°", "60°", "90°"], a: 3, why: "The tangent is perpendicular to the radius at the point of contact." },
      { q: "Angles in the same segment of a circle are:", o: ["equal", "supplementary", "complementary", "twice each other"], a: 0, why: "Angles subtended by the same arc in the same segment are equal." },
      { q: "The locus of points at a fixed distance d from a given straight line is:", o: ["a circle", "a pair of parallel lines at distance d from it", "a single parallel line", "the perpendicular bisector of the line"], a: 1, why: "Points at distance d from a line lie on two parallels, one on each side of the line." },
      { q: "A tangent to a circle meets a chord at the point of contact. If the angle between them is 35°, the angle in the alternate segment is:", o: ["17.5°", "35°", "55°", "70°"], a: 1, why: "Tangent-chord theorem: the angle between tangent and chord equals the angle in the alternate segment." }
    ],
    essay: [
      { q: "In the figure (described), ABCD is a cyclic quadrilateral in which ∠ABC = 100° and ∠BCD = 75°. AB is produced to E. Find (a) ∠ADC, (b) ∠DAB, (c) the exterior angle ∠DCE. Give the reason for each.", marks: 12, outline: [
        "(a) ∠ADC = 180° − 100° = 80° (opposite angles of a cyclic quadrilateral are supplementary)",
        "(b) ∠DAB = 180° − 75° = 105° (opposite angles supplementary)",
        "(c) ∠DCE = ∠DAB = 105° (exterior angle of a cyclic quadrilateral equals the interior opposite angle)"
      ] },
      { q: "Construct, with ruler and compasses only, a triangle ABC in which AB = 6 cm, AC = 5 cm and ∠BAC = 60°. Measure BC and ∠ABC. Hence construct the perpendicular from C to AB.", marks: 10, outline: [
        "Draw AB = 6 cm; at A construct 60° (60° is built from equilateral triangles); cut AC = 5 cm; join CB",
        "By the cosine rule, BC² = 36 + 25 − 2×6×5×cos 60° = 31 → BC ≈ 5.57 cm",
        "Drop the perpendicular from C to AB: construct using the standard compass method (arcs from C)"
      ] },
      { q: "In a circle with centre O, the angle ∠AOB = 100° and C is a point on the major arc AB. (a) Find ∠ACB. (b) D is a point on the minor arc AB. Find ∠ADB. (c) State the theorems used in (a) and (b).", marks: 10, outline: [
        "(a) The angle at the circumference is half the angle at the centre: ∠ACB = 100°/2 = 50°",
        "(b) ACBD is a cyclic quadrilateral (opposite angles supplementary): ∠ADB = 180° − 50° = 130° (angles in opposite segments)",
        "Check: reflex ∠AOB = 360° − 100° = 260° = 2 × 130° ✓",
        "(c) (a) uses 'the angle an arc subtends at the centre is twice the angle at the circumference'; (b) uses 'opposite angles of a cyclic quadrilateral sum to 180°'"
      ] },
      { q: "Points A and B are 10 cm apart. Using ruler and compasses only: (a) construct the locus of points equidistant from A and B, (b) construct the locus of points 4 cm from A. The two loci meet at P and Q. (c) Find the distance PQ and the distance of P from the line AB.", marks: 12, outline: [
        "(a) The locus equidistant from A and B is the perpendicular bisector of AB — construct with arcs of equal radius (> 5 cm) drawn from A and B, joined through their two intersection points",
        "(b) The locus 4 cm from A is the circle with centre A and radius 4 cm (compass set to 4 cm)",
        "(c) If M is the midpoint of AB, then AM = 5 cm and AP = 4 cm, so PM = √(25 − 16) = 3 cm; P and Q are symmetric about AB, so PQ = 2 × 3 = 6 cm and P is 3 cm from the line AB"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Topic D, Plane Geometry:" },
      { k: "bul", items: [
        "(a) Angles — angles at a point add up to 360°; adjacent angles on a straight line are supplementary; vertically opposite angles are equal; the degree as a unit (acute, obtuse, reflex angles)",
        "(b) Angles and intercepts on parallel lines — alternate angles are equal; corresponding angles are equal; interior opposite angles are supplementary; intercept theorem",
        "(c) Triangles and polygons — the sum of the angles of a triangle is 2 right angles; the exterior angle equals the sum of the two interior opposite angles; congruent triangles; properties of isosceles, equilateral and right-angled triangles; properties of parallelogram, rhombus, square, rectangle, trapezium; similar triangles; sum of the angles of a polygon; exterior angles of a polygon; parallelograms on the same base between the same parallels are equal in area",
        "(d) Circles — chords; the angle an arc subtends at the centre is twice that at the circumference; the angle in a semicircle is a right angle; angles in the same segment are equal; angles in opposite segments are supplementary; perpendicularity of tangent and radius; tangent-chord (alternate segment) theorem",
        "(e) Construction — bisectors of angles and line segments; lines parallel or perpendicular to a given line; angles of 90°, 60°, 45°, 30° and combinations (75°, 105°, 135°); triangles and quadrilaterals from sufficient data",
        "(f) Loci — points at a given distance from a given point; points equidistant from two given points; points equidistant from two given straight lines; points at a given distance from a given straight line; intersections of loci in 2 dimensions"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "The formal proofs of the theorems underlined in the syllabus may be required; other conditions are to be known but proofs are not required (e.g. SSS, SAS).",
        "Use symmetry where applicable.",
        "Similar triangles: equiangular properties and ratio of sides and areas.",
        "Sum of interior angles = (n − 2)180° or (2n − 4) right angles, where n is the number of sides.",
        "Circles: angles subtended by chords in a circle and at the centre; perpendicular bisectors of chords.",
        "Construction: include combinations of angles, e.g. 75°, 105°, 135°.",
        "Loci: consider parallel and intersecting lines; application to real-life situations."
      ] },
      { k: "h3", t: "Worked examples — step-by-step solutions" },
      { k: "bul", items: [
        "Angles on parallel lines: two parallels cut by a transversal with one angle 125° → alternate angle 125°, corresponding angle 125°, co-interior angle 180° − 125° = 55°.",
        "Exterior angle: a triangle with interior opposite angles 40° and 65° has exterior angle 40° + 65° = 105° at the third vertex.",
        "Polygon angles: regular octagon — each exterior angle = 360°/8 = 45°, so each interior angle = 180° − 45° = 135°.",
        "Circle theorem chain: an arc subtends 80° at the centre → 80° ÷ 2 = 40° at the circumference; the angle in the opposite segment is 180° − 40° = 140°.",
        "Similar triangles: corresponding sides 6 cm and 15 cm give scale factor 5/2, so the areas are in the ratio 6² : 15² = 4 : 25."
      ] }
    ]
  },
  /* =============== E · COORDINATE GEOMETRY OF STRAIGHT LINES =============== */
  {
    grade: 12, sem: "Two", icon: "🧭", period: "E",
    title: "Coordinate Geometry of Straight Lines",
    subtitle: "The x-y plane · coordinates · midpoint and distance · gradient · equations of a line",
    note: "Analytical geometry on the Cartesian plane: distance, midpoint, gradient and the two standard forms of the equation of a straight line.",
    objectives: [
      "Use the x-y plane and locate points by their coordinates",
      "Calculate the midpoint of two points and the distance between two points",
      "Determine the gradient of a line and form its equation in the forms y = mx + c and y − y₁ = m(x − x₁)"
    ],
    terms: [
      { t: "Coordinate", d: "The ordered pair (x, y) locating a point on the Cartesian plane.", x: "P(2, −3)" },
      { t: "Midpoint", d: "The point halfway between two points: ((x₁+x₂)/2, (y₁+y₂)/2).", x: "Midpoint of (1,2) and (5,8) is (3,5)" },
      { t: "Distance between two points", d: "|PQ| = √((x₂−x₁)² + (y₂−y₁)²).", x: "Distance from (0,0) to (3,4) = 5" },
      { t: "Gradient (slope)", d: "The steepness of a line: m = (y₂−y₁)/(x₂−x₁); parallel lines have equal gradients; perpendicular lines have gradients whose product is −1.", x: "m = (8−2)/(3−1) = 3" },
      { t: "Collinear points", d: "Three or more points lying on one straight line; the gradient between each pair is the same.", x: "A(1, 2), B(3, 6), C(5, 10) all give m = 2" },
      { t: "Intercepts", d: "Where a line cuts the axes: set x = 0 for the y-intercept and y = 0 for the x-intercept.", x: "2x + 5y = 20 cuts at (10, 0) and (0, 4)" },
      { t: "Parallel and perpendicular lines", d: "Parallel lines have m₁ = m₂; perpendicular lines have m₁m₂ = −1.", x: "y = 3x − 1 is ⊥ to y = −⅓x + 4" },
      { t: "Equation of a line", d: "y = mx + c (slope-intercept form) or y − y₁ = m(x − x₁) (point-gradient form).", x: "Gradient 2 through (0, 3): y = 2x + 3" }
    ],
    tf: [
      { s: "Two parallel lines have equal gradients.", a: "True", why: "Parallel lines have the same slope." },
      { s: "The midpoint of (x₁, y₁) and (x₂, y₂) is ((x₁ + x₂)/2, (y₁ + y₂)/2).", a: "True", why: "The midpoint is the average of the two coordinates — e.g. (2, 5) and (8, −3) give ((2+8)/2, (5−3)/2) = (5, 1)." },
      { s: "The distance formula is |PQ| = √((x₂ + x₁)² + (y₂ + y₁)²).", a: "False", why: "The differences are squared, not the sums: |PQ| = √((x₂ − x₁)² + (y₂ − y₁)²)." },
      { s: "The product of the gradients of two perpendicular lines is 1.", a: "False", why: "The product of the gradients of perpendicular lines is −1." }
    ],
    mcq: [
      { q: "Find the midpoint of the points (2, 5) and (8, −3).", o: ["(5, 1)", "(6, 1)", "(5, −1)", "(4, 2)"], a: 0, why: "Midpoint = the averages of the coordinates: ((2+8)/2, (5+(−3))/2) = (5, 1)." },
      { q: "Find the distance between (1, 2) and (4, 6).", o: ["3", "4", "5", "7"], a: 2, why: "Coordinate differences 4−1 = 3 and 6−2 = 4: |PQ| = √(3² + 4²) = √25 = 5." },
      { q: "Find the gradient of the line through (2, 1) and (5, 7).", o: ["1", "2", "3", "6"], a: 1, why: "m = (y₂−y₁)/(x₂−x₁) = (7−1)/(5−2) = 6/3 = 2." },
      { q: "The equation of the line with gradient 2 passing through (0, 3) is:", o: ["y = 2x + 3", "y = 3x + 2", "y = 2x − 3", "y = −2x + 3"], a: 0, why: "y = mx + c with m = 2 and c = 3." },
      { q: "The line through (1, 4) with gradient −1 has equation:", o: ["y = −x + 5", "y = −x − 5", "y = x + 3", "y = −x + 3"], a: 0, why: "Point-gradient form: y − 4 = −1(x − 1) → y = −x + 1 + 4 = −x + 5." },
      { q: "The line 2x + 3y = 6 has gradient:", o: ["2/3", "−2/3", "3/2", "−3/2"], a: 1, why: "y = −(2/3)x + 2 → gradient −2/3." },
      { q: "Find the distance between (−2, 3) and (4, −5).", o: ["10", "8", "12", "√12"], a: 0, why: "√((4+2)² + (−5−3)²) = √(36 + 64) = √100 = 10." },
      { q: "The gradient of a line parallel to y = 4x − 7 is:", o: ["−4", "4", "1/4", "7"], a: 1, why: "Parallel lines have equal gradients; the gradient of y = 4x − 7 is 4." },
      { q: "The equation of the line through (1, 2) and (3, 6) is:", o: ["y = 2x", "y = 2x + 1", "y = 3x − 1", "y = x + 1"], a: 0, why: "m = (6−2)/(3−1) = 2; y − 2 = 2(x − 1) → y = 2x." },
      { q: "The y-intercept of the line 3x − 2y = 12 is:", o: ["(0, 6)", "(0, −6)", "(4, 0)", "(−6, 0)"], a: 1, why: "3x − 2y = 12 → y = (3/2)x − 6; at x = 0, y = −6, so the intercept is (0, −6)." },
      { q: "The line 2x + 5y = 20 cuts the x-axis at:", o: ["(0, 4)", "(10, 0)", "(2, 0)", "(0, 10)"], a: 1, why: "On the x-axis y = 0 → 2x = 20 → x = 10: the point is (10, 0)." },
      { q: "The midpoint of (−4, 2) and (6, −8) is:", o: ["(1, −3)", "(2, −5)", "(−1, 3)", "(5, −4)"], a: 0, why: "((−4+6)/2, (2−8)/2) = (2/2, −6/2) = (1, −3)." },
      { q: "The equation of the line through (2, 1) perpendicular to y = 2x + 3 is:", o: ["y = −½x + 2", "y = 2x − 3", "y = ½x", "y = −2x + 5"], a: 0, why: "Perpendicular gradient = −1/2; y − 1 = −½(x − 2) → y = −½x + 2." },
      { q: "The distance of the point (5, 12) from the origin is:", o: ["7", "13", "17", "60"], a: 1, why: "√(5² + 12²) = √(25 + 144) = √169 = 13." },
      { q: "A line perpendicular to y = 3x + 1 has gradient:", o: ["3", "1/3", "−1/3", "−3"], a: 2, why: "Perpendicular gradients multiply to −1: m₂ = −1/m₁ = −1/3." }
    ],
    essay: [
      { q: "The points A(1, 2), B(5, 8) and C(9, 2) are given. (a) Show that ABC is isosceles. (b) Find the equation of the line through A and B. (c) Find the midpoint of BC.", marks: 12, outline: [
        "AB = √(4²+6²) = √52; AC = √(8²+0²) = 8; BC = √(4²+6²) = √52 → AB = BC, so isosceles",
        "Gradient of AB = (8−2)/(5−1) = 3/2; y − 2 = (3/2)(x − 1) → 2y = 3x − 1",
        "Midpoint of BC = ((5+9)/2, (8+2)/2) = (7, 5)"
      ] },
      { q: "The points A(−2, 3), B(1, 1) and C(−1, −2) form a triangle. (a) Find the lengths of the three sides. (b) Show that triangle ABC is right-angled at B. (c) Find the equation of the line AC and the midpoint of AC.", marks: 12, outline: [
        "(a) AB = √((1+2)² + (1−3)²) = √13; BC = √((−1−1)² + (−2−1)²) = √13; AC = √((−1+2)² + (−2−3)²) = √26",
        "(b) AB² + BC² = 13 + 13 = 26 = AC² → by the converse of Pythagoras' theorem the angle at B is 90° (the triangle is also isosceles)",
        "(c) Gradient of AC = (−2−3)/(−1+2) = −5; y − 3 = −5(x + 2) → y = −5x − 7. Midpoint of AC = ((−2−1)/2, (3−2)/2) = (−1.5, 0.5)"
      ] },
      { q: "The line L passes through the points (4, 1) and (0, −3). (a) Find the gradient and the equation of L. (b) Find the equation of the line perpendicular to L which passes through (2, 2). (c) Find the coordinates of the point where the line in (b) crosses the x-axis.", marks: 12, outline: [
        "(a) m = (1 − (−3))/(4 − 0) = 4/4 = 1; the line cuts the y-axis at (0, −3) so c = −3 and L is y = x − 3 (check: x = 4 gives y = 1 ✓)",
        "(b) Perpendicular gradient = −1/1 = −1; y − 2 = −1(x − 2) → y = −x + 4",
        "(c) At the x-axis y = 0 → 0 = −x + 4 → x = 4: the point is (4, 0)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Topic E, Coordinate Geometry of Straight Lines:" },
      { k: "bul", items: [
        "(i) Concept of the x-y plane",
        "(ii) Coordinates of points on the x-y plane — midpoint of two points, distance between two points, gradient (slope) of a line, equation of a line"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Midpoint of two points; distance |PQ| = √((x₂−x₁)² + (y₂−y₁)²) where P(x₁, y₁) and Q(x₂, y₂).",
        "Gradient (slope) of a line m = (y₂−y₁)/(x₂−x₁).",
        "Equation of a line in the form y = mx + c and y − y₁ = m(x − x₁), where m is the gradient and c a constant."
      ] },
      { k: "h3", t: "Worked examples — step-by-step solutions" },
      { k: "bul", items: [
        "Distance and midpoint: P(−3, 2), Q(3, 6): |PQ| = √(6² + 4²) = √52 ≈ 7.2 units; midpoint = ((−3+3)/2, (2+6)/2) = (0, 4).",
        "Gradient and equation: through (2, 3) and (6, 11): m = (11−3)/(6−2) = 2; y − 3 = 2(x − 2) → y = 2x − 1.",
        "Perpendicular line: through (4, 1) perpendicular to y = ½x + 3 (m = ½): new gradient = −2; y − 1 = −2(x − 4) → y = −2x + 9.",
        "Intercepts of 3x − 2y = 12: x = 0 → y = −6 gives (0, −6); y = 0 → x = 4 gives (4, 0).",
        "Isosceles check: A(1, 1), B(4, 5), C(7, 1): AB = √(9 + 16) = 5, BC = √(9 + 16) = 5, AC = 6 → AB = BC so the triangle is isosceles."
      ] }
    ]
  },
  /* =============== F · TRIGONOMETRY =============== */
  {
    grade: 12, sem: "Two", icon: "📊", period: "F",
    title: "Trigonometry",
    subtitle: "Ratios of acute angles · standard angles 30°, 45°, 60° · angles 0°–360° · graphs · elevation and depression · bearings",
    note: "Trigonometric ratios, standard-angle values, graphs of sine and cosine, and the classic heights-and-distances and bearing problems.",
    objectives: [
      "Use the sine, cosine and tangent of acute angles and the standard values for 30°, 45° and 60° without tables",
      "Find sine, cosine and tangent of angles from 0° to 360° using the unit circle",
      "Sketch and interpret graphs of y = a sin x, y = b cos x and combined graphs",
      "Calculate angles of elevation and depression and apply them to heights and distances",
      "Work bearing problems: bearing of one point from another, and distances and angles between them"
    ],
    terms: [
      { t: "Sine, cosine, tangent", d: "For an acute angle: sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, tan θ = opposite/adjacent.", x: "sin 30° = 1/2, cos 30° = √3/2, tan 45° = 1" },
      { t: "Standard angles", d: "The exact values at 30°, 45° and 60° are known without tables.", x: "tan 60° = √3" },
      { t: "Angles 0°–360°", d: "Trigonometric ratios of any angle found by reference to the unit circle and the quadrant rules (ASTC).", x: "sin 150° = sin 30° = 1/2 (Q2)" },
      { t: "Angle of elevation", d: "The angle above the horizontal from the observer to an object above; depression is below the horizontal.", x: "A lighthouse seen at an elevation of 30°" },
      { t: "Bearing", d: "The clockwise angle from north to the line joining two points; written as 3 figures (e.g. 035°) or N35°E.", x: "A is N45°E of B → B is S45°W of A" },
      { t: "Quadrant rule (ASTC)", d: "All ratios positive in Q1; Sine positive in Q2; Tangent positive in Q3; Cosine positive in Q4 — the rest are negative.", x: "cos 120° = −cos 60° = −½ (Q2)" },
      { t: "Amplitude and period", d: "For y = a sin bx or y = b cos x: the amplitude is the maximum displacement from the axis and the period is 360° ÷ the coefficient of the angle.", x: "y = 2 sin 3x: amplitude 2, period 120°" },
      { t: "Angle of depression", d: "The angle below the horizontal from the observer to an object; equal to the angle of elevation from the object back to the observer.", x: "Depression 35° from a cliff → elevation 35° from the boat" },
      { t: "Sine and cosine rules", d: "Used for indirect measurement in triangles: a/sin A = b/sin B = c/sin C and a² = b² + c² − 2bc cos A.", x: "Finding an inaccessible distance" }
    ],
    tf: [
      { s: "The value of tan 45° is 1.", a: "True", why: "tan 45° = 1 (opposite = adjacent at 45°)." },
      { s: "sin 30° = cos 60°.", a: "True", why: "Both equal ½ — for complementary angles sin θ = cos(90° − θ)." },
      { s: "The amplitude of y = −3 sin x is −3.", a: "False", why: "Amplitude is the magnitude |−3| = 3 — the maximum displacement from the axis is always non-negative." },
      { s: "Bearing problems in WASSCE require the use of a diagram.", a: "True", why: "Simple problems only; use of diagram is required." }
    ],
    mcq: [
      { q: "Find sin 30° + cos 60°.", o: ["0", "1/2", "1", "√3/2"], a: 2, why: "sin 30° = 1/2 and cos 60° = 1/2; sum = 1." },
      { q: "Find tan 60°.", o: ["1", "1/√3", "√3", "2"], a: 2, why: "tan 60° = sin 60°/cos 60° = (√3/2)/(1/2) = √3." },
      { q: "Find sin 150°.", o: ["−1/2", "1/2", "√3/2", "−√3/2"], a: 1, why: "150° is in Q2 where sine is positive; sin 150° = sin 30° = 1/2." },
      { q: "Find cos 270°.", o: ["0", "1", "−1", "1/2"], a: 0, why: "cos 270° = 0 (the point on the unit circle is (0, −1))." },
      { q: "A 20 m tower subtends an angle of elevation of 30° from point P. Find the distance from P to the base of the tower.", o: ["11.5 m", "20 m", "34.6 m", "40 m"], a: 2, why: "tan 30° = 20/d → d = 20/tan 30° = 20√3 ≈ 34.6 m." },
      { q: "The bearing of B from A is 045°. Find the bearing of A from B.", o: ["045°", "135°", "225°", "315°"], a: 2, why: "Back bearing = 045° + 180° = 225°." },
      { q: "The maximum value of y = 3 sin x is:", o: ["1", "3", "π", "9"], a: 1, why: "The amplitude is 3, so the maximum value is 3." },
      { q: "The period of y = cos 2x is:", o: ["π", "2π", "4π", "π/2"], a: 0, why: "For y = cos bx the period is 360° ÷ b = 360° ÷ 2 = 180° (π radians)." },
      { q: "Find cos 60° + tan 45°.", o: ["1", "3/2", "1/2", "√3/2"], a: 1, why: "cos 60° = 1/2 and tan 45° = 1; the sum is 1/2 + 1 = 3/2." },
      { q: "Find tan 225°.", o: ["1", "−1", "√3", "−√3"], a: 0, why: "225° is in the third quadrant where tangent is positive; tan 225° = tan 45° = 1." },
      { q: "Find sin 210°.", o: ["1/2", "−1/2", "√3/2", "−√3/2"], a: 1, why: "210° is in the third quadrant where sine is negative; sin 210° = −sin 30° = −1/2." },
      { q: "Find tan 300°.", o: ["√3", "−√3", "1/√3", "−1/√3"], a: 1, why: "300° is in the fourth quadrant where tangent is negative; tan 300° = −tan 60° = −√3." },
      { q: "The period of the graph y = 2 sin 3x is:", o: ["60°", "120°", "180°", "360°"], a: 1, why: "Period = 360°/3 = 120° (the coefficient of x divides the standard period)." },
      { q: "A vertical post 10 m tall casts a shadow of 10√3 m on level ground. The angle of elevation of the sun is:", o: ["30°", "45°", "60°", "75°"], a: 0, why: "tan θ = 10/(10√3) = 1/√3 → θ = 30°." },
      { q: "The bearing of A from B is 110°. The bearing of B from A is:", o: ["070°", "110°", "250°", "290°"], a: 3, why: "Back bearing = 110° + 180° = 290° (subtract 360° if the sum exceeds 360°)." },
      { q: "In a right-angled triangle the hypotenuse is 10 cm and one acute angle is 30°. The side opposite the 30° angle is:", o: ["5 cm", "5√3 cm", "8.7 cm", "10 cm"], a: 0, why: "opposite = hypotenuse × sin 30° = 10 × 0.5 = 5 cm." },
      { q: "In a triangle, a = 8, b = 10 and A = 30°. Using the sine rule, find sin B.", o: ["0.3", "0.5", "0.625", "0.75"], a: 2, why: "sin B = (b sin A)/a = (10 × 0.5)/8 = 5/8 = 0.625." }
    ],
    essay: [
      { q: "A boat is observed from the top of a 50 m cliff at an angle of depression of 35°. (a) Calculate the distance of the boat from the foot of the cliff. (b) If the boat moves towards the cliff and the angle of depression becomes 55°, find how far it has moved (to 1 decimal place). [tan 35° = 0.700, tan 55° = 1.428]", marks: 12, outline: [
        "(a) tan 35° = 50/d₁ → d₁ = 50/0.700 = 71.4 m",
        "(b) tan 55° = 50/d₂ → d₂ = 50/1.428 = 35.0 m; movement = 71.4 − 35.0 = 36.4 m"
      ] },
      { q: "A walker goes 8 km on a bearing of 060° from X, then 10 km on a bearing of 300°. Find (a) the bearing of the final position from X, (b) the distance of the final position from X (use the cosine and sine rules).", marks: 10, outline: [
        "Draw the diagram: angle at the turning point between the two legs = 120° (external angle of 060°/300° legs)",
        "By the cosine rule, d² = 8² + 10² − 2×8×10×cos 120° = 64 + 100 + 80 = 244 → d ≈ 15.6 km",
        "By the sine rule, find the angle at X, hence the bearing from X"
      ] },
      { q: "On the same axes, sketch the graphs of y = 2 sin x and y = 1 for 0° ≤ x ≤ 360°. (a) State the amplitude and the period of y = 2 sin x. (b) Use your sketch to solve 2 sin x = 1. (c) Solve 2 sin x = 1 algebraically and compare with (b).", marks: 12, outline: [
        "(a) Amplitude = 2 (the graph oscillates between 2 and −2); period = 360°",
        "Key points for the sketch of y = 2 sin x: (0°, 0), (90°, 2), (180°, 0), (270°, −2), (360°, 0)",
        "(b) The line y = 1 cuts the curve where 2 sin x = 1: x = 30° and x = 150°",
        "(c) sin x = 1/2 → x = 30° (first quadrant) or x = 180° − 30° = 150° (second quadrant) — the same answers, confirming the sketch"
      ] },
      { q: "From a point A on level ground, the angle of elevation of the top of a cliff is 35°. After walking 60 m directly towards the foot of the cliff to a point B, the angle of elevation is 60°. Find (a) the height of the cliff (to 1 decimal place), (b) the distance of A from the foot of the cliff. [tan 35° = 0.700, tan 60° = 1.732]", marks: 12, outline: [
        "Let h = height of the cliff and x = distance from B to the foot: tan 60° = h/x → h = 1.732x ...(1)",
        "From A: tan 35° = h/(x + 60) → h = 0.700(x + 60) ...(2)",
        "Equate (1) and (2): 1.732x = 0.700x + 42 → 1.032x = 42 → x = 40.7 m",
        "(a) h = 1.732 × 40.7 ≈ 70.5 m (b) distance A to foot = 40.7 + 60 = 100.7 m"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Topic F, Trigonometry:" },
      { k: "bul", items: [
        "(a) Sine, cosine and tangent of an angle — sine, cosine and tangent of acute angles; use of tables of trigonometric ratios; trigonometric ratios of 30°, 45° and 60°; sine, cosine and tangent of angles from 0° to 360°; graphs of sine and cosine; graphs of trigonometric ratios",
        "(b) Angles of elevation and depression — calculating angles of elevation and depression; application to heights and distances",
        "(c) Bearings — bearing of one point from another; calculation of distances and angles"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Use of right-angled triangles; without the use of tables for the standard angles.",
        "Angles from 0° to 360° related to the unit circle.",
        "Graphs: y = a sin x, y = b cos x; graphs of simultaneous linear and trigonometric equations, e.g. y = a sin x + b cos x.",
        "Heights and distances: simple problems only.",
        "Bearings: notation e.g. 035°, N35°E; simple problems only; use of diagram is required; sine and cosine rules may be used."
      ] },
      { k: "h3", t: "Worked examples — step-by-step solutions" },
      { k: "bul", items: [
        "Standard values: 2 sin 60° cos 60° = 2 × (√3/2) × ½ = √3/2.",
        "Any angle 0°–360°: cos 210° = −cos 30° = −√3/2 (third quadrant, cosine negative).",
        "Heights and distances: a kite on 40 m of string at 30° to the ground → height = 40 sin 30° = 20 m, horizontal distance = 40 cos 30° = 20√3 ≈ 34.6 m.",
        "Bearings into components: B is 12 km on a bearing of 040° from A → east = 12 sin 40° ≈ 7.71 km, north = 12 cos 40° ≈ 9.19 km.",
        "Sine rule: a = 7 cm, A = 45°, B = 60° → b = 7 sin 60°/sin 45° = 7(√3/2)/(√2/2) = 7√6/2 ≈ 8.6 cm."
      ] }
    ]
  },
  /* =============== G · INTRODUCTORY CALCULUS =============== */
  {
    grade: 12, sem: "Two", icon: "📈", period: "G",
    title: "Introductory Calculus",
    subtitle: "Differentiation of algebraic functions · integration of simple algebraic functions",
    note: "The first encounter with calculus: the derivative as a gradient and rate of change, maxima and minima, and evaluation of simple definite integrals.",
    objectives: [
      "Differentiate algebraic functions and interpret the derivative as the gradient of a curve and as a rate of change",
      "Apply differentiation to maxima and minima problems and to rates of change (distance, time, velocity)",
      "Evaluate simple definite integrals of algebraic functions"
    ],
    terms: [
      { t: "Differentiation", d: "The process of finding the derived function dy/dx; the derivative gives the gradient of the curve at a point.", x: "If y = x², dy/dx = 2x" },
      { t: "Rate of change", d: "The derivative as a rate: if s = distance and t = time, ds/dt = velocity.", x: "s = 2t³ + 4 → v = ds/dt = 6t²" },
      { t: "Maximum/minimum", d: "Found where dy/dx = 0; the second derivative (or sign change) decides whether it is a maximum or minimum.", x: "Turning points of a quadratic or cubic" },
      { t: "Integration", d: "The reverse of differentiation; evaluation of simple definite integrals of algebraic functions.", x: "∫(2x + 1)dx from 0 to 2 = [x² + x]₀² = 6" },
      { t: "Power rule", d: "d/dx(xⁿ) = nxⁿ⁻¹, applied term by term and multiplied by constants.", x: "d/dx(4x³) = 12x²" },
      { t: "Second derivative test", d: "At a stationary point: d²y/dx² > 0 gives a minimum; d²y/dx² < 0 gives a maximum.", x: "y = x² − 4x + 7: d²y/dx² = 2 > 0 → minimum" },
      { t: "Velocity and acceleration", d: "If s = s(t) is the distance, then v = ds/dt is the velocity and a = dv/dt = d²s/dt² is the acceleration.", x: "s = 2t² − 3t → v = 4t − 3, a = 4" },
      { t: "Definite integral", d: "The evaluation of an integral between two limits, giving a numerical result (an area under a curve).", x: "∫₀¹ 3x² dx = 1" }
    ],
    tf: [
      { s: "If s = 2t³ + 4, the velocity v = ds/dt = 6t².", a: "True", why: "ds/dt = 6t², where s = distance and t = time." },
      { s: "The derivative of a constant term is zero.", a: "True", why: "d/dx(c) = 0 — a constant has zero gradient, e.g. d/dx(3x² + 7) = 6x." },
      { s: "∫(2x) dx = x² + c, where c is the constant of integration.", a: "True", why: "Indefinite integrals carry an arbitrary constant c; definite integrals do not need one." },
      { s: "A stationary point of a curve occurs where the second derivative is zero.", a: "False", why: "A stationary point occurs where the first derivative dy/dx = 0." }
    ],
    mcq: [
      { q: "If y = 3x² − 4x + 1, find dy/dx.", o: ["6x − 4", "6x + 4", "3x − 4", "6x² − 4"], a: 0, why: "Differentiate term by term: d/dx(3x²) = 6x, d/dx(−4x) = −4, d/dx(1) = 0 → dy/dx = 6x − 4." },
      { q: "The gradient of the curve y = x³ at x = 1 is:", o: ["1", "2", "3", "6"], a: 2, why: "dy/dx = 3x²; at x = 1, gradient = 3." },
      { q: "Find the stationary point of y = x² − 6x + 9.", o: ["x = 0", "x = 3", "x = 6", "x = −3"], a: 1, why: "dy/dx = 2x − 6 = 0 → x = 3 (a minimum, since d²y/dx² = 2 > 0)." },
      { q: "A body moves so that s = t² + 3t (m). Find its velocity at t = 2 s.", o: ["5 m/s", "7 m/s", "8 m/s", "10 m/s"], a: 1, why: "v = ds/dt = 2t + 3 = 7 m/s at t = 2." },
      { q: "Evaluate ∫(2x + 1) dx from 0 to 3.", o: ["9", "12", "15", "18"], a: 1, why: "∫(2x + 1) dx = x² + x; evaluate between the limits: [x² + x]₀³ = (9 + 3) − (0 + 0) = 12." },
      { q: "If y = 5x³, find dy/dx.", o: ["5x²", "15x", "15x²", "15x³"], a: 2, why: "Power rule: dy/dx = 3 × 5x² = 15x²." },
      { q: "If y = 2/x, find dy/dx.", o: ["2/x²", "−2/x²", "−1/x²", "2"], a: 1, why: "y = 2x⁻¹ → dy/dx = −2x⁻² = −2/x²." },
      { q: "Find the gradient of the curve y = x² − 4x at the point where x = 3.", o: ["2", "3", "6", "−2"], a: 0, why: "dy/dx = 2x − 4; at x = 3 the gradient = 6 − 4 = 2." },
      { q: "A body moves so that s = 2t² − 3t + 1 (m). Its acceleration at t = 2 s is:", o: ["2 m/s²", "4 m/s²", "5 m/s²", "8 m/s²"], a: 1, why: "v = ds/dt = 4t − 3; a = dv/dt = 4 m/s² (constant acceleration)." },
      { q: "Evaluate ∫(4x³) dx from 0 to 2.", o: ["8", "12", "16", "32"], a: 2, why: "∫4x³ dx = x⁴; [x⁴]₀² = 16 − 0 = 16." },
      { q: "The curve y = x² − 4x + 7 has at x = 2:", o: ["a maximum value of 3", "a minimum value of 3", "a minimum value of 7", "a maximum value of 7"], a: 1, why: "dy/dx = 2x − 4 = 0 at x = 2; d²y/dx² = 2 > 0 → a minimum, and y(2) = 4 − 8 + 7 = 3." },
      { q: "Evaluate ∫(x + 2) dx from 0 to 4.", o: ["8", "12", "16", "24"], a: 2, why: "[x²/2 + 2x]₀⁴ = (8 + 8) − 0 = 16." },
      { q: "The function y = x³ − 3x² + 5 has a stationary point at x = 0 with y-value:", o: ["3", "5", "0", "−5"], a: 1, why: "dy/dx = 3x² − 6x = 0 → x = 0 or x = 2; at x = 0, y = 5." }
    ],
    essay: [
      { q: "The volume of water in a tank is given by V = t³ − 6t² + 9t (m³), where t is time in hours. (a) Find the rate at which the water is flowing at t = 2 h. (b) Find when the flow rate is zero. (c) Evaluate ∫₀³ (3t² − 12t + 9) dt.", marks: 12, outline: [
        "(a) dV/dt = 3t² − 12t + 9; at t = 2: 12 − 24 + 9 = −3 m³/h (water is leaving at 3 m³/h)",
        "(b) 3t² − 12t + 9 = 0 → t² − 4t + 3 = 0 → (t−1)(t−3) = 0 → t = 1 h or t = 3 h",
        "(c) [t³ − 6t² + 9t]₀³ = (27 − 54 + 27) − 0 = 0"
      ] },
      { q: "Find the maximum and minimum values of y = x³ − 3x + 2.", marks: 10, outline: [
        "dy/dx = 3x² − 3 = 0 → x = ±1",
        "d²y/dx² = 6x: at x = 1, 6 > 0 (minimum); at x = −1, −6 < 0 (maximum)",
        "Maximum: y(−1) = −1 + 3 + 2 = 4; minimum: y(1) = 1 − 3 + 2 = 0"
      ] },
      { q: "A farmer uses 40 m of fencing to make a rectangular enclosure against a wall, so that fencing is needed on only three sides. If the side perpendicular to the wall is x m: (a) show that the area enclosed is A = 40x − 2x². (b) Find the value of x that gives the maximum area. (c) Find the maximum area and the corresponding dimensions.", marks: 12, outline: [
        "(a) The side parallel to the wall is (40 − 2x) m, so A = x(40 − 2x) = 40x − 2x²",
        "(b) dA/dx = 40 − 4x = 0 → x = 10 m; d²A/dx² = −4 < 0, confirming a maximum",
        "(c) Maximum area = 40(10) − 2(100) = 200 m², with dimensions 10 m by 20 m (check: 10 + 20 + 10 = 40 m of fencing ✓)"
      ] },
      { q: "The curve y = x² − 4x + 3. (a) Find the gradient of the curve at x = 4 and comment on its sign. (b) Find the coordinates of the turning point and determine its nature. (c) Evaluate ∫₀⁵ (x² − 4x + 3) dx and interpret the result.", marks: 12, outline: [
        "(a) dy/dx = 2x − 4 = 4 at x = 4 (positive → the curve is rising at that point)",
        "(b) 2x − 4 = 0 → x = 2; y = 4 − 8 + 3 = −1 → turning point (2, −1); d²y/dx² = 2 > 0 → a minimum",
        "(c) [x³/3 − 2x² + 3x]₀⁵ = (125/3 − 50 + 15) − 0 = 20/3 ≈ 6.67, the net area under the curve from x = 0 to x = 5"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Topic G, Introductory Calculus:" },
      { k: "bul", items: [
        "(i) Differentiation of algebraic functions",
        "(ii) Integration of simple algebraic functions"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Concept/meaning of differentiation/derived function; the relationship between the gradient of a curve at a point and the differential coefficient of the equation of the curve at that point.",
        "Standard derivatives of basic functions: if y = x², dy/dx = 2x; if s = 2t³ + 4, ds/dt = v = 6t², where s = distance, t = time and v = velocity.",
        "Application to real-life situations: maximum and minimum values, rates of change.",
        "Meaning/concept of integration; evaluation of simple definite algebraic integrals."
      ] },
      { k: "h3", t: "Worked examples — step-by-step solutions" },
      { k: "bul", items: [
        "Differentiate y = 4x³ − 5x² + 6x − 8: dy/dx = 12x² − 10x + 6 (the constant −8 differentiates to 0).",
        "Gradient at a point: y = x² − 2x at x = 3: dy/dx = 2x − 2 = 4 → the curve is rising with gradient 4 at (3, 3).",
        "Turning points: y = x³ − 3x²: dy/dx = 3x² − 6x = 3x(x − 2) = 0 → x = 0 or 2; d²y/dx² = 6x − 6 gives −6 (maximum at (0, 0)) and +6 (minimum at (2, −4)).",
        "Rates of change: s = 3t² + 2t (m): v = ds/dt = 6t + 2 = 26 m/s at t = 4; a = dv/dt = 6 m/s².",
        "Definite integral: ∫₁³ (3x² + 2) dx = [x³ + 2x]₁³ = (27 + 6) − (1 + 2) = 30."
      ] }
    ]
  },
  /* =============== H · STATISTICS AND PROBABILITY =============== */
  {
    grade: 12, sem: "Two", icon: "🥧", period: "H",
    title: "Statistics and Probability",
    subtitle: "Frequency distributions · charts · mean, median, mode · ogive · measures of dispersion · experimental and theoretical probability",
    note: "Data presentation and summary (discrete and grouped data), and probability of simple events with and without replacement.",
    objectives: [
      "Construct frequency distribution tables and draw pie charts, bar charts, histograms and frequency polygons",
      "Calculate mean, median and mode for discrete and grouped data, and estimate them from graphs",
      "Draw and use the cumulative frequency curve (ogive) for quartiles and percentiles",
      "Calculate measures of dispersion: range, inter-quartile range, variance, mean deviation and standard deviation",
      "Find experimental and theoretical probabilities, and probabilities of 'and'/'or' combinations for mutually exclusive, independent events with and without replacement"
    ],
    terms: [
      { t: "Frequency distribution", d: "The arrangement of data into classes with their frequencies; class intervals, class marks and class boundaries are used.", x: "Classes 10–19, 20–29, …" },
      { t: "Mean", d: "The arithmetic average: sum of values ÷ number of values; for grouped data, use class marks.", x: "Mean of 4, 8, 10, 4, 4 = 30/5 = 6" },
      { t: "Median", d: "The middle value of data in order; for grouped data, estimated from the cumulative frequency curve.", x: "Median of 2, 5, 3, 9, 11 is 5" },
      { t: "Mode", d: "The most frequent value; for grouped data, estimated from the histogram.", x: "Mode of 4, 8, 10, 4, 4 is 4" },
      { t: "Ogive", d: "The cumulative frequency curve, used to read off the median, quartiles and percentiles.", x: "Q₁ is at 25% of the total frequency" },
      { t: "Standard deviation", d: "The square root of the variance; a measure of spread. Variance is the mean of the squared deviations from the mean.", x: "σ² = variance, σ = standard deviation" },
      { t: "Theoretical probability", d: "P(event) = favourable outcomes ÷ total equally likely outcomes.", x: "P(head on a fair coin) = 1/2" },
      { t: "Class boundary", d: "The true limits of a class interval — 20–29 has boundaries 19.5 and 29.5 so that classes join continuously.", x: "Boundaries of 20–29: 19.5 – 29.5" },
      { t: "Inter-quartile range", d: "IQR = Q₃ − Q₁, the spread of the middle half of the data.", x: "Q₁ = 5, Q₃ = 13 → IQR = 8" },
      { t: "Mean deviation", d: "The mean of the absolute deviations from the mean.", x: "2, 4, 6, 8 (mean 5) → mean deviation 2" },
      { t: "Addition/multiplication of probabilities", d: "P(A or B) for mutually exclusive events uses addition; P(A and B) for independent events uses multiplication.", x: "P(two heads) = 1/2 × 1/2 = 1/4" }
    ],
    tf: [
      { s: "For grouped data, the mode should be estimated from the histogram.", a: "True", why: "The mode is estimated from the histogram while the median and quartiles are estimated from the ogive." },
      { s: "Unequal class intervals are used in WASSCE frequency tables.", a: "False", why: "Exclude unequal class intervals." },
      { s: "The probability of an impossible event is 0 and that of a certain event is 1.", a: "True", why: "Probabilities range from 0 (impossible, e.g. throwing a 7 with a fair die) to 1 (certain)." },
      { s: "When two balls are drawn without replacement, the draws are independent events.", a: "False", why: "Without replacement the second draw depends on the first (the totals change), so the events are not independent." },
      { s: "Variance is the square of the standard deviation.", a: "True", why: "Note that mean deviation is the mean of the absolute deviations and variance is the square of the standard deviation." }
    ],
    mcq: [
      { q: "Find the mean of the data: 4, 8, 10, 4, 4.", o: ["4", "5", "6", "8"], a: 2, why: "Mean = sum of the values ÷ number of values = (4+8+10+4+4)/5 = 30/5 = 6." },
      { q: "Find the median of: 2, 5, 3, 9, 11.", o: ["3", "5", "7", "9"], a: 1, why: "Ordered: 2, 3, 5, 9, 11 → middle value 5." },
      { q: "Find the mode of: 7, 3, 5, 7, 9, 3, 7.", o: ["3", "5", "7", "9"], a: 2, why: "7 occurs three times — the most frequent." },
      { q: "A fair die is thrown once. Find the probability of getting an even number.", o: ["1/6", "1/3", "1/2", "2/3"], a: 2, why: "3 even faces out of 6 → 3/6 = 1/2." },
      { q: "Two coins are tossed once. Find the probability of getting two heads.", o: ["1/2", "1/3", "1/4", "3/4"], a: 2, why: "1 favourable out of 4 outcomes → 1/4." },
      { q: "A bag contains 5 red and 3 blue balls. Find the probability of drawing two red balls without replacement.", o: ["5/14", "15/28", "5/7", "1/2"], a: 0, why: "Without replacement: P(first red) = 5/8, then P(second red) = 4/7 (one red gone): (5/8) × (4/7) = 20/56 = 5/14." },
      { q: "The range of the data 3, 7, 2, 9, 5 is:", o: ["2", "5", "7", "9"], a: 2, why: "Range = highest value − lowest value = 9 − 2 = 7." },
      { q: "The variance of a data set is 9. Its standard deviation is:", o: ["3", "6", "9", "81"], a: 0, why: "Standard deviation = √variance = √9 = 3." },
      { q: "Find the median of 4, 7, 9, 12, 15, 18.", o: ["9", "10.5", "12", "11"], a: 1, why: "There is an even number of values: median = (9 + 12)/2 = 10.5." },
      { q: "The inter-quartile range of the data 3, 5, 7, 9, 11, 13, 15 is:", o: ["6", "8", "12", "4"], a: 1, why: "Q₁ = 5 and Q₃ = 13 → inter-quartile range = 13 − 5 = 8." },
      { q: "The mean deviation of the data 2, 4, 6, 8 from the mean is:", o: ["1", "2", "2.5", "3"], a: 1, why: "Mean = 5; absolute deviations = 3, 1, 1, 3 (total 8); mean deviation = 8/4 = 2." },
      { q: "The class mark of the class interval 20–29 is:", o: ["20", "24", "24.5", "25"], a: 2, why: "Class mark = (upper boundary + lower boundary)/2 = (20 + 29)/2 = 24.5." },
      { q: "Two fair dice are thrown once. The probability that the sum of the scores is 7 is:", o: ["1/6", "1/9", "5/36", "7/36"], a: 0, why: "6 favourable outcomes (1–6, 2–5, 3–4, 4–3, 5–2, 6–1) out of 36 → 6/36 = 1/6." },
      { q: "If P(A) = 1/3 and P(B) = 1/2 are mutually exclusive events, find P(A or B).", o: ["1/6", "2/5", "5/6", "1"], a: 2, why: "Mutually exclusive → P(A or B) = P(A) + P(B) = 1/3 + 1/2 = 5/6." },
      { q: "If P(A) = 0.3 and P(B) = 0.4 are independent events, find P(A and B).", o: ["0.12", "0.7", "0.35", "0.3"], a: 0, why: "Independent → P(A and B) = P(A) × P(B) = 0.3 × 0.4 = 0.12." },
      { q: "A bag contains 4 red and 6 blue balls. A ball is drawn, replaced, and a second ball drawn. The probability that both are red is:", o: ["2/5", "4/25", "12/25", "1/5"], a: 1, why: "With replacement the events are independent: (4/10) × (4/10) = 16/100 = 4/25." },
      { q: "A fair die is thrown once. The probability of NOT getting a 6 is:", o: ["1/6", "5/6", "0", "1"], a: 1, why: "Complementary probability: 1 − P(6) = 1 − 1/6 = 5/6." },
      { q: "From a cumulative frequency curve, the value at 50% of the total frequency gives the:", o: ["mean", "median", "mode", "range"], a: 1, why: "The median is read at half the cumulative frequency." }
    ],
    essay: [
      { q: "The table shows the marks of 30 students: mark 40–49 (f = 4), 50–59 (f = 8), 60–69 (f = 10), 70–79 (f = 5), 80–89 (f = 3). (a) Draw the cumulative frequency curve. (b) Estimate the median and the lower quartile. (c) Find the mean using class marks.", marks: 12, outline: [
        "Cumulative frequencies: 4, 12, 22, 27, 30",
        "Median at 15th value → ≈ 64; Q₁ at 7.5th value → ≈ 55 (read from the ogive)",
        "Class marks 45, 55, 65, 75, 85: mean = (45×4 + 55×8 + 65×10 + 75×5 + 85×3)/30 = (180+440+650+375+255)/30 = 1900/30 ≈ 63.3"
      ] },
      { q: "A card is drawn at random from a standard pack of 52 cards. Find the probability that it is (a) a heart, (b) a face card, (c) a red king, (d) a heart or a king.", marks: 10, outline: [
        "(a) 13/52 = 1/4",
        "(b) 12/52 = 3/13 (J, Q, K of 4 suits)",
        "(c) 2/52 = 1/26 (red kings: hearts and diamonds)",
        "(d) P(heart or king) = 13/52 + 4/52 − 1/52 = 16/52 = 4/13"
      ] },
      { q: "The marks of five students are 3, 5, 7, 9 and 11. Find (a) the mean, (b) the mean deviation from the mean, (c) the variance and the standard deviation.", marks: 12, outline: [
        "(a) Mean x̄ = (3 + 5 + 7 + 9 + 11)/5 = 35/5 = 7",
        "(b) Deviations from the mean: −4, −2, 0, 2, 4 → absolute deviations 4, 2, 0, 2, 4 (total 12); mean deviation = 12/5 = 2.4",
        "(c) Squared deviations: 16, 4, 0, 4, 16 (total 40); variance = 40/5 = 8; standard deviation = √8 ≈ 2.83"
      ] },
      { q: "A bag contains 3 white and 5 black balls. Two balls are drawn at random without replacement. Find the probability that (a) both are white, (b) one of each colour is drawn, (c) at least one white ball is drawn.", marks: 12, outline: [
        "(a) P(white, white) = 3/8 × 2/7 = 6/56 = 3/28",
        "(b) P(one of each) = P(WB) + P(BW) = 3/8 × 5/7 + 5/8 × 3/7 = 15/56 + 15/56 = 30/56 = 15/28",
        "(c) P(at least one white) = 1 − P(both black) = 1 − (5/8 × 4/7) = 1 − 20/56 = 36/56 = 9/14"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Topic H, Statistics and Probability:" },
      { k: "bul", items: [
        "(a) Statistics — frequency distribution; pie charts, bar charts, histograms and frequency polygons; mean, median and mode for discrete and grouped data; cumulative frequency curve (ogive); measures of dispersion: range, semi-interquartile/inter-quartile range, variance, mean deviation and standard deviation",
        "(b) Probability — experimental and theoretical probability; addition of probabilities for mutually exclusive and independent events; multiplication of probabilities for independent events (with and without replacement)"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Construction of frequency distribution tables; concept of class intervals, class mark and class boundary.",
        "Reading and drawing simple inferences from graphs; interpretation of data in histograms. Exclude unequal class intervals.",
        "Use of an assumed mean is acceptable but not required. For grouped data, the mode is estimated from the histogram; the median, quartiles and percentiles are estimated from the cumulative frequency curve.",
        "Application of the cumulative frequency curve to everyday life.",
        "Definitions of range, variance, standard deviation, inter-quartile range; mean deviation is the mean of the absolute deviations from the mean and variance is the square of the standard deviation. Standard deviation of grouped data is set.",
        "Probability: include equally likely events — probability of throwing a six with a fair die or a head when tossing a fair coin. With and without replacement. Simple practical problems only; interpretation of 'and' and 'or' in probability."
      ] },
      { k: "h3", t: "Worked examples — step-by-step solutions" },
      { k: "bul", items: [
        "Mean of grouped data: classes 10–19 (f = 3), 20–29 (f = 5), 30–39 (f = 2) with class marks 14.5, 24.5, 34.5: mean = (43.5 + 122.5 + 69)/10 = 23.5.",
        "Quartiles of 2, 4, 6, 8, 10, 12: Q₁ = 4, median = 7, Q₃ = 10, so the inter-quartile range = 6.",
        "Ogive use: with n = 40 the median is read at the 20th value and Q₁ at the 10th value of the cumulative frequency curve.",
        "Probability with 'or': one fair die, P(even or greater than 4) = P({2, 4, 5, 6}) = 4/6 = 2/3 (the overlap 6 is counted once).",
        "Two dice: P(sum at least 9) = P(9) + P(10) + P(11) + P(12) = (4 + 3 + 2 + 1)/36 = 10/36 = 5/18."
      ] }
    ]
  },
  /* =============== I · VECTORS AND TRANSFORMATION =============== */
  {
    grade: 12, sem: "Two", icon: "➡️", period: "I",
    title: "Vectors and Transformation",
    subtitle: "Vectors in a plane · reflection, rotation, translation and enlargement in the Cartesian plane",
    note: "Plane vectors (components, magnitude, addition, scalar multiplication) and the four transformations of plane figures: reflection, rotation, translation and enlargement.",
    objectives: [
      "Represent vectors as directed line segments with Cartesian components",
      "Add and subtract vectors, multiply by scalars, and find magnitudes",
      "Reflect points and shapes in the axes, x = k, y = x and y = kx, and determine mirror lines",
      "Rotate points and shapes about the origin and other points (angles −180° to 180°)",
      "Translate points and shapes using translation vectors",
      "Enlarge plane figures from a given centre by a given scale factor"
    ],
    terms: [
      { t: "Vector", d: "A quantity with magnitude and direction, represented as a directed line segment; Cartesian components (x, y).", x: "a = (3, 1)" },
      { t: "Magnitude of a vector", d: "|a| = √(x² + y²) for a = (x, y).", x: "|(3, 4)| = 5" },
      { t: "Addition of vectors", d: "Component-wise addition: a + b = (x₁+x₂, y₁+y₂).", x: "(3,1) + (1,2) = (4,3)" },
      { t: "Scalar multiplication", d: "Multiplying a vector by a scalar scales its magnitude (and reverses direction if negative).", x: "2(3, 1) = (6, 2)" },
      { t: "Reflection", d: "Mapping a point to its mirror image in a line — the axes, x = k, y = x or y = kx; mirror lines (lines of symmetry) are determined.", x: "Reflection in y = x swaps coordinates: (2, 5) → (5, 2)" },
      { t: "Rotation", d: "Turning a figure about a centre (the origin or another point) through an angle restricted to −180° to 180°.", x: "Rotation of 90° about the origin: (x, y) → (−y, x)" },
      { t: "Translation", d: "Sliding a figure by a translation vector.", x: "Vector (2, −3) moves every point 2 right, 3 down" },
      { t: "Zero vector", d: "The vector (0, 0) of zero magnitude and no direction; a + (−a) = 0.", x: "(3, 4) + (−3, −4) = 0" },
      { t: "Equal and parallel vectors", d: "Equal vectors have the same components; parallel vectors are scalar multiples of one another.", x: "2(2, 5) = (4, 10) ∥ (2, 5)" },
      { t: "Resultant vector", d: "The single vector equivalent to a chain of vectors, found by adding the components.", x: "(3, 0) + (0, 4) = (3, 4)" },
      { t: "Enlargement", d: "Scaling a figure from a centre by a scale factor; used to enlarge or reduce plane figures on given scales.", x: "Scale factor 2 from O doubles all distances from O" }
    ],
    tf: [
      { s: "Angles of rotation in WASSCE are restricted to −180° to 180°.", a: "True", why: "Determination of the angle of rotation — restrict angles to −180° to 180°." },
      { s: "Enlargement with scale factor 1 leaves every point unchanged.", a: "True", why: "Each point maps to 1 × its position vector, so the figure coincides with its image." },
      { s: "Reflection in the line y = −x maps (x, y) to (−y, −x).", a: "True", why: "Reflection in y = −x both interchanges the coordinates and changes their signs: (2, 5) → (−5, −2)." },
      { s: "Reflection in the line y = x interchanges the coordinates of a point.", a: "True", why: "(x, y) → (y, x) under reflection in y = x." }
    ],
    mcq: [
      { q: "If a = (3, 1) and b = (1, 2), find a + b.", o: ["(4, 3)", "(2, −1)", "(3, 2)", "(1, 4)"], a: 0, why: "Add corresponding components: (3+1, 1+2) = (4, 3)." },
      { q: "Find the magnitude of the vector (3, 4).", o: ["5", "7", "12", "25"], a: 0, why: "|a| = √(3² + 4²) = √(9 + 16) = √25 = 5." },
      { q: "Find 2a − b if a = (2, 3) and b = (1, 1).", o: ["(3, 5)", "(5, 3)", "(3, 4)", "(1, 2)"], a: 0, why: "2a = (4, 6); 2a − b = (4−1, 6−1) = (3, 5)." },
      { q: "The image of P(2, 5) under reflection in the x-axis is:", o: ["(−2, 5)", "(2, −5)", "(−2, −5)", "(5, 2)"], a: 1, why: "Reflection in the x-axis changes the sign of the y-coordinate." },
      { q: "The image of P(2, 5) under reflection in the line y = x is:", o: ["(−2, −5)", "(5, 2)", "(−5, 2)", "(2, 5)"], a: 1, why: "Reflection in y = x swaps the coordinates." },
      { q: "The image of A(1, 2) under a rotation of 90° anticlockwise about the origin is:", o: ["(2, 1)", "(−2, 1)", "(1, −2)", "(−1, −2)"], a: 1, why: "90° anticlockwise: (x, y) → (−y, x) = (−2, 1)." },
      { q: "If p = (x, 2) and q = (3, y) are equal vectors, find x + y.", o: ["3", "4", "5", "6"], a: 2, why: "Equal vectors have equal components: x = 3 and y = 2 → x + y = 5." },
      { q: "Which of the following vectors is parallel to (2, 5)?", o: ["(4, 10)", "(5, 2)", "(−2, 5)", "(2, −5)"], a: 0, why: "(4, 10) = 2 × (2, 5) — a scalar multiple of (2, 5), so it is parallel." },
      { q: "If a = (3, 4), find |2a|.", o: ["5", "10", "14", "25"], a: 1, why: "2a = (6, 8) → |2a| = √(36 + 64) = 10 (also |2a| = 2|a| = 2 × 5)." },
      { q: "Find the vector from P(1, 2) to Q(5, 7).", o: ["(4, 5)", "(6, 9)", "(−4, −5)", "(5, 7)"], a: 0, why: "PQ = Q − P = (5 − 1, 7 − 2) = (4, 5)." },
      { q: "The image of P(2, 5) under reflection in the y-axis is:", o: ["(2, −5)", "(−2, 5)", "(−2, −5)", "(5, 2)"], a: 1, why: "Reflection in the y-axis changes the sign of the x-coordinate: (2, 5) → (−2, 5)." },
      { q: "The image of (3, −1) under a rotation of 180° about the origin is:", o: ["(−3, 1)", "(3, 1)", "(−3, −1)", "(1, −3)"], a: 0, why: "Rotation of 180° about O: (x, y) → (−x, −y) = (−3, 1)." },
      { q: "The image of (1, 2) under a rotation of 90° clockwise about the origin is:", o: ["(−2, 1)", "(2, −1)", "(1, −2)", "(−1, 2)"], a: 1, why: "90° clockwise about O: (x, y) → (y, −x) = (2, −1)." },
      { q: "The image of (1, 2) under an enlargement from the origin with scale factor 3 is:", o: ["(2, 4)", "(3, 6)", "(4, 8)", "(1, 2)"], a: 1, why: "Enlargement from O multiplies each coordinate by the scale factor: (3 × 1, 3 × 2) = (3, 6)." },
      { q: "Point A(2, 3) maps to A′(5, 1) under a translation. The translation vector is:", o: ["(3, −2)", "(−3, 2)", "(7, 4)", "(−2, 3)"], a: 0, why: "Translation vector = A′ − A = (5 − 2, 1 − 3) = (3, −2)." },
      { q: "P(2, 5) maps to P′(5, 2) under a reflection. The mirror line is:", o: ["the x-axis", "the y-axis", "y = x", "y = −x"], a: 2, why: "The coordinates are interchanged → reflection in y = x (the mirror line is the perpendicular bisector of PP′)." },
      { q: "The image of P(3, 4) under the translation vector (−2, 5) is:", o: ["(1, 9)", "(5, −1)", "(−1, 9)", "(1, 1)"], a: 0, why: "Add the translation vector to the coordinates: (3−2, 4+5) = (1, 9)." }
    ],
    essay: [
      { q: "The points A(1, 1), B(4, 1) and C(4, 4) form triangle ABC. (a) Reflect the triangle in the line x = 1. (b) Rotate the original triangle 90° clockwise about the origin. (c) Enlarge the original triangle from the origin by scale factor 2. Give the images of all three vertices in each case.", marks: 12, outline: [
        "(a) Reflection in x = 1: A(1,1)→(1,1); B(4,1)→(−2,1); C(4,4)→(−2,4) [x' = 2×1 − x]",
        "(b) 90° clockwise about O: (x, y) → (y, −x): A'(1, −1), B'(1, −4), C'(4, −4)",
        "(c) Enlargement from O, scale factor 2: A''(2, 2), B''(8, 2), C''(8, 8)"
      ] },
      { q: "A man walks 3 km due east and then 4 km due north. (a) Represent the two legs of the journey as vectors and find his resultant position vector. (b) Find the distance of the man from his starting point and the bearing of his final position from the start. (c) Write down the single vector that takes him back to the start.", marks: 12, outline: [
        "(a) East leg = (3, 0), north leg = (0, 4); resultant = (3, 0) + (0, 4) = (3, 4)",
        "(b) Distance = √(3² + 4²) = 5 km; tan θ = 3/4 → θ ≈ 36.9° east of north → bearing ≈ 037°",
        "(c) Return vector = −(3, 4) = (−3, −4), of magnitude 5 km"
      ] },
      { q: "The triangle A(1, 1), B(3, 1) and C(2, 3) is given. (a) Translate the triangle by the vector (2, −1) to obtain A₁B₁C₁. (b) Reflect the original triangle in the y-axis to obtain A₂B₂C₂. (c) Rotate the original triangle 180° about the origin to obtain A₃B₃C₃. Give the coordinates of every image and comment on the shapes.", marks: 12, outline: [
        "(a) Add (2, −1) to each vertex: A₁(3, 0), B₁(5, 0), C₁(4, 2)",
        "(b) Reflection in the y-axis: (x, y) → (−x, y): A₂(−1, 1), B₂(−3, 1), C₂(−2, 3)",
        "(c) Rotation of 180° about O: (x, y) → (−x, −y): A₃(−1, −1), B₃(−3, −1), C₃(−2, −3)",
        "All three are isometric transformations: the images are congruent to the original triangle"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Topic I, Vectors and Transformation:" },
      { k: "bul", items: [
        "Vectors in a plane — vectors as directed line segments; Cartesian components; magnitude; equal vectors; addition and subtraction; zero vector; parallel vectors; multiplication by a scalar",
        "Transformation in the Cartesian plane — reflection of points and shapes; rotation of points and shapes; translation of points and shapes; enlargement"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Knowledge of graphical representation is necessary.",
        "Reflection: restrict the plane to the x and y axes and to the lines x = k, y = x and y = kx, where k is an integer; determination of mirror lines (symmetry).",
        "Rotation: about the origin and a point other than the origin; determination of the angle of rotation (restrict angles to −180° to 180°).",
        "Translation: using a translation vector.",
        "Enlargement: draw the images of plane figures under enlargement with a given centre for a given scale factor; use given scales to enlarge or reduce plane figures."
      ] },
      { k: "h3", t: "Worked examples — step-by-step solutions" },
      { k: "bul", items: [
        "Resultant and magnitude: a = (5, 2), b = (−1, 3): a + b = (4, 5); |a + b| = √(16 + 25) = √41 ≈ 6.4.",
        "Parallel test: (6, 9) = 3(2, 3) is parallel to (2, 3); (6, 8) is not parallel to (2, 3) since 6/2 ≠ 8/3.",
        "Reflection chain: P(3, 4) reflected in the x-axis gives (3, −4), then reflected in y = x gives (−4, 3).",
        "Rotation about O: 90° anticlockwise maps (x, y) → (−y, x), so A(3, 1) → A′(−1, 3); 180° maps (x, y) → (−x, −y), so A → (−3, −1).",
        "Enlargement: triangle (1, 1), (2, 1), (1, 3) enlarged from O by scale factor 3 → (3, 3), (6, 3), (3, 9); the area is scaled by 3² = 9."
      ] }
    ]
  }
  ]
};
window.WA_SUBJECTS.ma = window.WA_ma;
