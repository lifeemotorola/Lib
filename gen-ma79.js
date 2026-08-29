/* Junior High MATHEMATICS drill generators — Grades 7–9.

   The elementary engine (gen-ma.js) exposes GEN_MA.DRILLS and GEN_MA.METHOD.
   This file registers the additional procedural generators the Junior High
   topics need (integers, indices, polynomials, simultaneous equations, slope,
   Pythagoras, trigonometry, probability, statistics, sets, vectors ...) and the
   matching METHOD explanation for each, so every answer key still says WHY.

   Every generator has the same contract as the elementary ones:
     function (r, p) -> { q: "question text", a: "answer text" }
   where r is the seeded random function and p the optional parameter object. */
(function (root) {
  "use strict";
  if (!root.GEN_MA || !root.GEN_MA.DRILLS) return;

  var D = root.GEN_MA.DRILLS, M = root.GEN_MA.METHOD;

  /* ---------------- helpers ---------------- */
  function ri(r, lo, hi) { return lo + Math.floor(r() * (hi - lo + 1)); }
  function one(a, r) { return a[Math.floor(r() * a.length)]; }
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a || 1; }
  function nz(r, lo, hi) { var v = ri(r, lo, hi); return v === 0 ? (hi > 0 ? 1 : -1) : v; }
  /* render a signed number in brackets when negative, e.g. 5 + (−3) */
  function sg(n) { return n < 0 ? "(" + String(n).replace("-", "\u2212") + ")" : String(n); }
  /* plain minus sign replaced by the proper typographic minus */
  function mn(n) { return String(n).replace("-", "\u2212"); }
  function term(c, v, first) {
    var s = "";
    if (c === 0) return "";
    if (first) s = (c < 0 ? "\u2212" : "");
    else s = (c < 0 ? " \u2212 " : " + ");
    var m = Math.abs(c);
    if (v && m === 1) return s + v;
    return s + m + (v || "");
  }
  function poly2(a, b, v) { return term(a, v, true) + term(b, "", false); }
  function simpFrac(n, d) {
    var g = gcd(n, d); n /= g; d /= g;
    if (d < 0) { n = -n; d = -d; }
    return d === 1 ? mn(n) : mn(n) + "/" + d;
  }

  var VARS = ["x", "y", "a", "n", "m"];

  /* =================== integers / signed numbers =================== */
  D.int_add = function (r) {
    var a = nz(r, -20, 20), b = nz(r, -20, 20);
    return { q: sg(a) + " + " + sg(b) + " =", a: mn(a + b) };
  };
  M.int_add = "Same signs: add and keep the sign. Different signs: subtract the smaller from the larger and take the sign of the larger.";

  D.int_sub = function (r) {
    var a = nz(r, -20, 20), b = nz(r, -20, 20);
    return { q: sg(a) + " \u2212 " + sg(b) + " =", a: mn(a - b) };
  };
  M.int_sub = "Subtracting is adding the opposite: change the sign of the second number, then add.";

  D.int_mul = function (r) {
    var a = nz(r, -12, 12), b = nz(r, -12, 12);
    return { q: sg(a) + " \u00d7 " + sg(b) + " =", a: mn(a * b) };
  };
  M.int_mul = "Like signs give a positive product; unlike signs give a negative product.";

  D.int_div = function (r) {
    var b = nz(r, -12, 12), q = nz(r, -12, 12), a = b * q;
    return { q: sg(a) + " \u00f7 " + sg(b) + " =", a: mn(q) };
  };
  M.int_div = "Like signs give a positive quotient; unlike signs give a negative quotient.";

  D.int_order = function (r) {
    var s = [], i;
    for (i = 0; i < 5; i++) s.push(nz(r, -25, 25));
    var sorted = s.slice().sort(function (x, y) { return x - y; });
    return { q: "Arrange in ascending order:  " + s.map(mn).join(",  "),
             a: sorted.map(mn).join(", ") };
  };
  M.int_order = "On the number line, values further left are smaller; every negative number is less than every positive number.";

  /* =================== exponents / indices / radicals =================== */
  D.index_mul = function (r) {
    var v = one(VARS, r), a = ri(r, 2, 7), b = ri(r, 2, 7);
    return { q: v + "^" + a + " \u00d7 " + v + "^" + b + " =", a: v + "^" + (a + b) };
  };
  M.index_mul = "Law of indices: when multiplying powers of the same base, ADD the exponents.";

  D.index_div = function (r) {
    var v = one(VARS, r), b = ri(r, 2, 6), a = b + ri(r, 1, 5);
    return { q: v + "^" + a + " \u00f7 " + v + "^" + b + " =", a: v + "^" + (a - b) };
  };
  M.index_div = "Law of indices: when dividing powers of the same base, SUBTRACT the exponents.";

  D.index_pow = function (r) {
    var v = one(VARS, r), a = ri(r, 2, 5), b = ri(r, 2, 4);
    return { q: "(" + v + "^" + a + ")^" + b + " =", a: v + "^" + (a * b) };
  };
  M.index_pow = "Law of indices: a power raised to a power means MULTIPLY the exponents.";

  D.index_zero = function (r) {
    var v = one(VARS, r), n = ri(r, 2, 9);
    return r() < 0.5
      ? { q: v + "^0 = ", a: "1" }
      : { q: n + "^0 = ", a: "1" };
  };
  M.index_zero = "Any non-zero number or variable raised to the power 0 equals 1.";

  D.index_eval = function (r) {
    var b = ri(r, 2, 6), e = ri(r, 2, 4);
    return { q: b + "^" + e + " =", a: String(Math.pow(b, e)) };
  };
  M.index_eval = "The exponent tells how many times the base is used as a factor.";

  D.radical_simp = function (r) {
    var sq = one([4, 9, 16, 25, 36, 49], r), k = one([2, 3, 5, 6, 7, 10], r);
    return { q: "Simplify \u221a" + (sq * k), a: Math.sqrt(sq) + "\u221a" + k };
  };
  M.radical_simp = "Split the number into a perfect square times the rest, then take the square root of the perfect square outside.";

  D.sqrt_exact = function (r) {
    var n = ri(r, 2, 20);
    return { q: "\u221a" + (n * n) + " =", a: String(n) };
  };
  M.sqrt_exact = "Find the number which, multiplied by itself, gives the number under the root sign.";

  /* =================== algebraic expressions =================== */
  D.like_terms = function (r) {
    var v = one(VARS, r), a = ri(r, 2, 9), b = ri(r, 2, 9), c = ri(r, 2, 9), d = ri(r, 1, 8);
    return { q: "Simplify:  " + a + v + " + " + b + " + " + c + v + " \u2212 " + d,
             a: (a + c) + v + (b - d >= 0 ? " + " + (b - d) : " \u2212 " + (d - b)) };
  };
  M.like_terms = "Only like terms combine: add the coefficients of the same variable, and combine the plain numbers separately.";

  D.eval_expr = function (r) {
    var v = "x", a = ri(r, 2, 9), b = ri(r, 1, 12), x = ri(r, 2, 9);
    return { q: "Evaluate " + a + v + " + " + b + "  when " + v + " = " + x, a: String(a * x + b) };
  };
  M.eval_expr = "Substitute the given value for the variable, then work out the arithmetic.";

  D.mono_mul = function (r) {
    var v = one(VARS, r), a = ri(r, 2, 9), b = ri(r, 2, 9), p = ri(r, 1, 4), q = ri(r, 1, 4);
    return { q: "(" + a + v + "^" + p + ")(" + b + v + "^" + q + ") =",
             a: (a * b) + v + "^" + (p + q) };
  };
  M.mono_mul = "Multiply the coefficients, then add the exponents of the same base.";

  D.mono_div = function (r) {
    var v = one(VARS, r), b = ri(r, 2, 8), k = ri(r, 2, 8), a = b * k, q = ri(r, 1, 3), p = q + ri(r, 1, 4);
    return { q: "(" + a + v + "^" + p + ") \u00f7 (" + b + v + "^" + q + ") =",
             a: k + v + "^" + (p - q) };
  };
  M.mono_div = "Divide the coefficients, then subtract the exponents of the same base.";

  D.poly_add = function (r) {
    var a1 = nz(r, -8, 9), b1 = nz(r, -9, 9), a2 = nz(r, -8, 9), b2 = nz(r, -9, 9);
    return { q: "(" + poly2(a1, b1, "x") + ") + (" + poly2(a2, b2, "x") + ") =",
             a: poly2(a1 + a2, b1 + b2, "x") || "0" };
  };
  M.poly_add = "Remove the brackets and add the coefficients of like terms.";

  D.poly_sub = function (r) {
    var a1 = nz(r, -8, 9), b1 = nz(r, -9, 9), a2 = nz(r, -8, 9), b2 = nz(r, -9, 9);
    return { q: "(" + poly2(a1, b1, "x") + ") \u2212 (" + poly2(a2, b2, "x") + ") =",
             a: poly2(a1 - a2, b1 - b2, "x") || "0" };
  };
  M.poly_sub = "Change the sign of EVERY term inside the second bracket, then combine like terms.";

  D.binom_mul = function (r) {
    var a = nz(r, -7, 8), b = nz(r, -7, 8);
    /* (x + a)(x + b) = x^2 + (a+b)x + ab */
    return { q: "(x " + (a < 0 ? "\u2212 " + (-a) : "+ " + a) + ")(x " + (b < 0 ? "\u2212 " + (-b) : "+ " + b) + ") =",
             a: "x\u00b2" + term(a + b, "x", false) + term(a * b, "", false) };
  };
  M.binom_mul = "Use FOIL: multiply First, Outer, Inner and Last terms, then collect the two middle terms.";

  D.diff_squares = function (r) {
    var a = ri(r, 2, 12);
    return { q: "Factorise:  x\u00b2 \u2212 " + (a * a), a: "(x + " + a + ")(x \u2212 " + a + ")" };
  };
  M.diff_squares = "Difference of two squares: a\u00b2 \u2212 b\u00b2 factorises to (a + b)(a \u2212 b).";

  D.factor_common = function (r) {
    var k = ri(r, 2, 9), a = ri(r, 2, 9), b = ri(r, 2, 9);
    return { q: "Factorise:  " + (k * a) + "x + " + (k * b), a: k + "(" + a + "x + " + b + ")" };
  };
  M.factor_common = "Find the highest common factor of the terms and take it outside the bracket.";

  /* =================== equations and inequalities =================== */
  D.solve_linear = function (r) {
    var a = ri(r, 2, 9), x = nz(r, -9, 12), b = nz(r, -15, 15), c = a * x + b;
    return { q: "Solve:  " + a + "x " + (b < 0 ? "\u2212 " + (-b) : "+ " + b) + " = " + mn(c),
             a: "x = " + mn(x) };
  };
  M.solve_linear = "Undo the addition first by taking it to the other side, then divide both sides by the coefficient of x.";

  D.solve_two_side = function (r) {
    var x = nz(r, -8, 10), a = ri(r, 3, 9), b = ri(r, 1, 2), c = ri(r, 1, 12);
    /* a x + c = b x + (a-b)x + c  -> build a genuine two-sided equation */
    var d = (a - b) * x + c;
    return { q: "Solve:  " + a + "x + " + c + " = " + b + "x + " + mn(d + 0),
             a: "x = " + mn(x) };
  };
  M.solve_two_side = "Collect the x terms on one side and the numbers on the other, then divide by the coefficient of x.";

  D.solve_inequality = function (r) {
    var a = ri(r, 2, 8), x = ri(r, 1, 9), b = ri(r, 1, 12), c = a * x + b;
    return { q: "Solve and state the range:  " + a + "x + " + b + " \u2264 " + c, a: "x \u2264 " + x };
  };
  M.solve_inequality = "Solve like an equation, but remember to REVERSE the inequality sign if you multiply or divide by a negative number.";

  D.open_sentence_graph = function (r) {
    var x = ri(r, -5, 6), a = ri(r, 2, 6), b = a * x;
    return { q: "Solve " + a + "x = " + mn(b) + " and state the point plotted on the number line",
             a: "x = " + mn(x) + " (one point marked at " + mn(x) + ")" };
  };
  M.open_sentence_graph = "Divide both sides by the coefficient, then mark that single value with a dot on the number line.";

  /* =================== simultaneous equations =================== */
  D.simul_elim = function (r) {
    var x = nz(r, -6, 8), y = nz(r, -6, 8);
    var a = ri(r, 1, 5), b = ri(r, 1, 5), c = ri(r, 1, 5), d = ri(r, 1, 5);
    if (a * d - b * c === 0) { d = d + 1; }
    var e = a * x + b * y, f = c * x + d * y;
    return { q: a + "x + " + b + "y = " + mn(e) + " ;  " + c + "x + " + d + "y = " + mn(f),
             a: "x = " + mn(x) + ", y = " + mn(y) };
  };
  M.simul_elim = "Multiply one or both equations so one variable has matching coefficients, eliminate it by adding or subtracting, then substitute back.";

  D.simul_subst = function (r) {
    var x = nz(r, -6, 9), y = nz(r, -6, 9);
    var b = ri(r, 1, 4), s = x + b * y, a = ri(r, 2, 5), t = a * x + y;
    return { q: "x + " + b + "y = " + mn(s) + " ;  " + a + "x + y = " + mn(t),
             a: "x = " + mn(x) + ", y = " + mn(y) };
  };
  M.simul_subst = "Make one variable the subject of the simpler equation, substitute that expression into the other equation, then solve.";

  /* =================== relations, functions, coordinate geometry =================== */
  D.slope_two_pts = function (r) {
    var x1 = ri(r, -6, 6), y1 = ri(r, -6, 6), x2 = x1 + nz(r, -6, 6), y2 = ri(r, -6, 6);
    var dy = y2 - y1, dx = x2 - x1;
    return { q: "Find the slope of the line through (" + mn(x1) + ", " + mn(y1) + ") and (" + mn(x2) + ", " + mn(y2) + ")",
             a: "m = " + simpFrac(dy, dx) };
  };
  M.slope_two_pts = "Slope m = (y\u2082 \u2212 y\u2081) \u00f7 (x\u2082 \u2212 x\u2081): the change in y divided by the change in x.";

  D.fn_evaluate = function (r) {
    var a = ri(r, 2, 8), b = nz(r, -9, 9), x = nz(r, -6, 8);
    return { q: "If f(x) = " + a + "x " + (b < 0 ? "\u2212 " + (-b) : "+ " + b) + ", find f(" + mn(x) + ")",
             a: mn(a * x + b) };
  };
  M.fn_evaluate = "Replace every x in the rule with the given value, then simplify.";

  D.domain_range = function (r) {
    var s = [], i, n = 4;
    for (i = 0; i < n; i++) s.push([ri(r, 1, 9), ri(r, 1, 20)]);
    var dom = s.map(function (p) { return p[0]; });
    var ran = s.map(function (p) { return p[1]; });
    function uniq(a) { var o = []; a.forEach(function (v) { if (o.indexOf(v) < 0) o.push(v); }); return o.sort(function (x, y) { return x - y; }); }
    return { q: "State the domain and range of  {" + s.map(function (p) { return "(" + p[0] + ", " + p[1] + ")"; }).join(", ") + "}",
             a: "Domain = {" + uniq(dom).join(", ") + "};  Range = {" + uniq(ran).join(", ") + "}" };
  };
  M.domain_range = "The domain is the set of all first elements; the range is the set of all second elements, each listed once.";

  D.cartesian_product = function (r) {
    var a = [ri(r, 1, 5), ri(r, 6, 9)], b = [ri(r, 1, 4), ri(r, 5, 9)];
    var out = [];
    a.forEach(function (x) { b.forEach(function (y) { out.push("(" + x + ", " + y + ")"); }); });
    return { q: "If A = {" + a.join(", ") + "} and B = {" + b.join(", ") + "}, list A \u00d7 B",
             a: "{" + out.join(", ") + "}" };
  };
  M.cartesian_product = "Pair every member of A with every member of B, keeping A's member first in each ordered pair.";

  D.plot_quadrant = function (r) {
    var x = nz(r, -8, 8), y = nz(r, -8, 8);
    var q = (x > 0 && y > 0) ? "first" : (x < 0 && y > 0) ? "second" : (x < 0 && y < 0) ? "third" : "fourth";
    return { q: "In which quadrant does the point (" + mn(x) + ", " + mn(y) + ") lie?", a: "The " + q + " quadrant" };
  };
  M.plot_quadrant = "Signs decide the quadrant: (+,+) first, (\u2212,+) second, (\u2212,\u2212) third, (+,\u2212) fourth.";

  D.line_equation = function (r) {
    var m = nz(r, -5, 6), c = nz(r, -9, 9);
    return { q: "Write the equation of the line with slope " + mn(m) + " and y-intercept " + mn(c),
             a: "y = " + (m === 1 ? "" : m === -1 ? "\u2212" : mn(m)) + "x " + (c < 0 ? "\u2212 " + (-c) : "+ " + c) };
  };
  M.line_equation = "Use the slope-intercept form y = mx + c, putting the slope for m and the intercept for c.";

  /* =================== sets =================== */
  D.set_type = function (r) {
    var k = ri(r, 0, 3);
    var opts = [
      { q: "State the type of set:  A = { }", a: "Empty (null) set \u2014 it has no members" },
      { q: "State the type of set:  B = {5}", a: "Unit set \u2014 it has exactly one member" },
      { q: "State the type of set:  C = {1, 2, 3, 4, 5}", a: "Finite set \u2014 its members can be counted" },
      { q: "State the type of set:  D = {1, 2, 3, ...}", a: "Infinite set \u2014 its members go on without end" }
    ];
    return opts[k];
  };
  M.set_type = "Empty = no members; unit = exactly one; finite = countable; infinite = unending.";

  D.set_ops = function (r) {
    var a = [], b = [], i;
    for (i = 0; i < 4; i++) a.push(ri(r, 1, 9));
    for (i = 0; i < 4; i++) b.push(ri(r, 1, 9));
    function uniq(x) { var o = []; x.forEach(function (v) { if (o.indexOf(v) < 0) o.push(v); }); return o.sort(function (p, q) { return p - q; }); }
    a = uniq(a); b = uniq(b);
    var un = uniq(a.concat(b));
    var it = a.filter(function (v) { return b.indexOf(v) >= 0; });
    var which = r() < 0.5;
    return { q: "A = {" + a.join(", ") + "}, B = {" + b.join(", ") + "}.  Find A " + (which ? "\u222a" : "\u2229") + " B",
             a: "{" + (which ? un : it).join(", ") + "}" };
  };
  M.set_ops = "Union (\u222a) lists every member of both sets once; intersection (\u2229) lists only the members common to both.";

  D.subsets_num = function (r) {
    var n = ri(r, 2, 6);
    return { q: "A set has " + n + " members. How many subsets does it have?", a: "2^" + n + " = " + Math.pow(2, n) };
  };
  M.subsets_num = "A set with n members has 2\u207f subsets, because each member is either in or out of a subset.";

  D.two_set_venn = function (r) {
    var both = ri(r, 2, 9), onlyA = ri(r, 3, 12), onlyB = ri(r, 3, 12), neither = ri(r, 0, 5);
    var total = both + onlyA + onlyB + neither;
    return { q: "In a class of " + total + ", " + (onlyA + both) + " take Maths, " + (onlyB + both) +
                " take Science and " + neither + " take neither. How many take BOTH?",
             a: String(both) };
  };
  M.two_set_venn = "Use n(A \u222a B) = n(A) + n(B) \u2212 n(A \u2229 B). Subtract those taking neither from the total first.";

  /* =================== percent, interest, business arithmetic =================== */
  D.simple_interest = function (r) {
    var p = one([2000, 4000, 5000, 8000, 12000, 15000], r), rate = one([4, 5, 6, 8, 10], r), t = ri(r, 1, 5);
    return { q: "Find the simple interest on L$" + p.toLocaleString() + " at " + rate + "% per annum for " + t + " years",
             a: "L$" + (p * rate * t / 100).toLocaleString() };
  };
  M.simple_interest = "Simple interest I = P \u00d7 R \u00d7 T \u00f7 100, where P is the principal, R the rate and T the time in years.";

  D.compound_interest = function (r) {
    var p = one([1000, 2000, 4000, 5000], r), rate = one([5, 10], r), t = 2;
    var amt = p * Math.pow(1 + rate / 100, t);
    return { q: "Find the compound interest on L$" + p.toLocaleString() + " at " + rate + "% per annum for " + t + " years",
             a: "Amount = L$" + Math.round(amt).toLocaleString() + "; interest = L$" + Math.round(amt - p).toLocaleString() };
  };
  M.compound_interest = "Compound interest adds each year's interest to the principal: A = P(1 + R/100)\u1d40, then interest = A \u2212 P.";

  D.discount_q = function (r) {
    var mp = one([500, 800, 1200, 1500, 2400], r), d = one([5, 10, 15, 20, 25], r);
    return { q: "A shirt marked L$" + mp.toLocaleString() + " is given a " + d + "% discount. Find the selling price",
             a: "L$" + (mp * (100 - d) / 100).toLocaleString() };
  };
  M.discount_q = "Discount = percentage of the marked price; subtract it, or multiply the marked price by (100 \u2212 d)%.";

  D.commission_q = function (r) {
    var s = one([5000, 8000, 12000, 20000], r), c = one([2, 5, 10], r);
    return { q: "An agent sells goods worth L$" + s.toLocaleString() + " at " + c + "% commission. Find the commission",
             a: "L$" + (s * c / 100).toLocaleString() };
  };
  M.commission_q = "Commission is that percentage of the total sales: multiply sales by the rate and divide by 100.";

  D.profit_loss = function (r) {
    var cp = one([400, 600, 800, 1200, 2000], r), pct = one([10, 15, 20, 25], r);
    var gain = r() < 0.5;
    var sp = gain ? cp * (100 + pct) / 100 : cp * (100 - pct) / 100;
    return { q: "An article bought for L$" + cp.toLocaleString() + " is sold for L$" + sp.toLocaleString() +
                ". Find the percentage " + (gain ? "gain" : "loss"),
             a: pct + "% " + (gain ? "gain" : "loss") };
  };
  M.profit_loss = "Percentage gain or loss = (difference \u00f7 COST price) \u00d7 100 \u2014 always divide by the cost price, not the selling price.";

  D.sales_tax = function (r) {
    var p = one([600, 900, 1500, 2500], r), t = one([5, 7, 10], r);
    return { q: "Find the total cost of goods priced L$" + p.toLocaleString() + " with " + t + "% sales tax",
             a: "L$" + (p * (100 + t) / 100).toLocaleString() };
  };
  M.sales_tax = "Work out the tax as a percentage of the price, then ADD it to the price.";

  /* =================== variation, speed, rate of work =================== */
  D.speed_q = function (r) {
    var s = one([40, 50, 60, 75, 80], r), t = ri(r, 2, 6);
    return { q: "A car travels at " + s + " km/h for " + t + " hours. Find the distance", a: (s * t) + " km" };
  };
  M.speed_q = "Distance = speed \u00d7 time. Keep the units consistent.";

  D.rate_of_work = function (r) {
    var a = one([4, 6, 8, 12], r), b = one([12, 24], r);
    var comb = (a * b) / (a + b);
    return { q: "A can do a job in " + a + " days and B in " + b + " days. Working together, how long will it take?",
             a: (Math.round(comb * 100) / 100) + " days" };
  };
  M.rate_of_work = "Add the rates of work: 1/a + 1/b gives the fraction done in one day; invert that to get the total time.";

  D.direct_variation = function (r) {
    var k = ri(r, 2, 9), x1 = ri(r, 2, 6), x2 = ri(r, 7, 12);
    return { q: "y varies directly as x. If y = " + (k * x1) + " when x = " + x1 + ", find y when x = " + x2,
             a: String(k * x2) };
  };
  M.direct_variation = "In direct variation y = kx: find k from the first pair, then use it with the new x.";

  /* =================== geometry =================== */
  D.angle_pair = function (r) {
    var comp = r() < 0.5;
    var a = comp ? ri(r, 10, 80) : ri(r, 20, 160);
    return { q: "Find the " + (comp ? "complement" : "supplement") + " of " + a + "\u00b0",
             a: ((comp ? 90 : 180) - a) + "\u00b0" };
  };
  M.angle_pair = "Complementary angles add to 90\u00b0; supplementary angles add to 180\u00b0.";

  D.polygon_interior = function (r) {
    var n = one([3, 4, 5, 6, 8, 10, 12], r);
    return { q: "Find the sum of the interior angles of a polygon with " + n + " sides",
             a: ((n - 2) * 180) + "\u00b0" };
  };
  M.polygon_interior = "Sum of interior angles = (n \u2212 2) \u00d7 180\u00b0, because the polygon splits into (n \u2212 2) triangles.";

  D.polygon_each_angle = function (r) {
    var n = one([3, 4, 5, 6, 8, 10, 12], r);
    return { q: "Find each interior angle of a REGULAR polygon with " + n + " sides",
             a: ((n - 2) * 180 / n) + "\u00b0" };
  };
  M.polygon_each_angle = "In a regular polygon all angles are equal, so divide the total (n \u2212 2) \u00d7 180\u00b0 by n.";

  D.exterior_angle = function (r) {
    var n = one([3, 4, 5, 6, 8, 9, 10, 12], r);
    return { q: "Find each exterior angle of a regular polygon with " + n + " sides", a: (360 / n) + "\u00b0" };
  };
  M.exterior_angle = "The exterior angles of any polygon add up to 360\u00b0, so each one is 360\u00b0 \u00f7 n.";

  D.area_trapezoid = function (r) {
    var a = ri(r, 4, 15), b = ri(r, 4, 15), h = ri(r, 3, 12);
    return { q: "Find the area of a trapezium with parallel sides " + a + " cm and " + b + " cm and height " + h + " cm",
             a: ((a + b) * h / 2) + " cm\u00b2" };
  };
  M.area_trapezoid = "Area of a trapezium = \u00bd \u00d7 (sum of the parallel sides) \u00d7 height.";

  D.surface_area_prism = function (r) {
    var l = ri(r, 3, 10), w = ri(r, 3, 10), h = ri(r, 3, 10);
    return { q: "Find the total surface area of a cuboid " + l + " cm by " + w + " cm by " + h + " cm",
             a: (2 * (l * w + l * h + w * h)) + " cm\u00b2" };
  };
  M.surface_area_prism = "Surface area of a cuboid = 2(lw + lh + wh) \u2014 the six faces in three matching pairs.";

  D.volume_cylinder = function (r) {
    var rad = one([7, 14, 21], r), h = ri(r, 5, 20);
    var v = 22 / 7 * rad * rad * h;
    return { q: "Find the volume of a cylinder of radius " + rad + " cm and height " + h + " cm (take \u03c0 = 22/7)",
             a: Math.round(v) + " cm\u00b3" };
  };
  M.volume_cylinder = "Volume of a cylinder = \u03c0r\u00b2h: work out the circular area first, then multiply by the height.";

  D.metric_convert_jh = function (r) {
    var pairs = [["km", "m", 1000], ["m", "cm", 100], ["kg", "g", 1000], ["L", "mL", 1000], ["cm", "mm", 10]];
    var p = one(pairs, r), n = ri(r, 2, 25);
    return { q: "Convert " + n + " " + p[0] + " to " + p[1], a: (n * p[2]).toLocaleString() + " " + p[1] };
  };
  M.metric_convert_jh = "Changing to a SMALLER unit means multiplying by the conversion factor.";

  /* =================== trigonometry =================== */
  D.pythagoras = function (r) {
    var trip = one([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15], [7, 24, 25]], r);
    var k = one([1, 1, 1, 2], r);
    var a = trip[0] * k, b = trip[1] * k, c = trip[2] * k;
    if (r() < 0.6) {
      return { q: "A right-angled triangle has legs " + a + " cm and " + b + " cm. Find the hypotenuse", a: c + " cm" };
    }
    return { q: "A right-angled triangle has hypotenuse " + c + " cm and one leg " + a + " cm. Find the other leg", a: b + " cm" };
  };
  M.pythagoras = "Pythagoras: c\u00b2 = a\u00b2 + b\u00b2. To find a leg instead, subtract: a\u00b2 = c\u00b2 \u2212 b\u00b2.";

  D.trig_ratio = function (r) {
    var trip = one([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17]], r);
    var opp = trip[0], adj = trip[1], hyp = trip[2];
    var which = one(["sine", "cosine", "tangent"], r);
    var a = which === "sine" ? simpFrac(opp, hyp) : which === "cosine" ? simpFrac(adj, hyp) : simpFrac(opp, adj);
    return { q: "In a right-angled triangle the side opposite angle \u03b8 is " + opp + ", the adjacent side is " +
                adj + " and the hypotenuse is " + hyp + ". Find the " + which + " of \u03b8", a: a };
  };
  M.trig_ratio = "SOH-CAH-TOA: sine = opposite/hypotenuse, cosine = adjacent/hypotenuse, tangent = opposite/adjacent.";

  /* =================== statistics and probability =================== */
  D.range_variance = function (r) {
    var s = [], i;
    for (i = 0; i < 5; i++) s.push(ri(r, 2, 20));
    var mean = s.reduce(function (a, b) { return a + b; }, 0) / s.length;
    var varc = s.reduce(function (a, b) { return a + (b - mean) * (b - mean); }, 0) / s.length;
    return { q: "For the data " + s.join(", ") + " find the range and the mean",
             a: "Range = " + (Math.max.apply(null, s) - Math.min.apply(null, s)) +
                "; mean = " + (Math.round(mean * 100) / 100) };
  };
  M.range_variance = "Range = largest \u2212 smallest. Mean = sum of the values \u00f7 how many values there are.";

  D.freq_table = function (r) {
    var s = [], i;
    for (i = 0; i < 10; i++) s.push(ri(r, 1, 5));
    var f = {};
    s.forEach(function (v) { f[v] = (f[v] || 0) + 1; });
    var keys = Object.keys(f).sort();
    var modeKey = keys.reduce(function (a, b) { return f[b] > f[a] ? b : a; }, keys[0]);
    return { q: "Make a frequency table for:  " + s.join(", ") + ".  Which value has the highest frequency?",
             a: modeKey + " (frequency " + f[modeKey] + ")" };
  };
  M.freq_table = "Tally how many times each value occurs; the value with the largest tally has the highest frequency.";

  D.probability_simple = function (r) {
    var tot = one([6, 8, 10, 12, 20], r), fav = ri(r, 1, tot - 1);
    return { q: "A bag has " + tot + " equal balls, " + fav + " of them red. Find the probability of drawing a red ball",
             a: simpFrac(fav, tot) };
  };
  M.probability_simple = "Probability = number of favourable outcomes \u00f7 total number of equally likely outcomes.";

  D.probability_indep = function (r) {
    var a = one([2, 3, 4, 6], r), b = one([2, 3, 4, 6], r);
    return { q: "The probability of A is 1/" + a + " and of B is 1/" + b +
                ". If they are independent, find P(A and B)", a: "1/" + (a * b) };
  };
  M.probability_indep = "For independent events, MULTIPLY the separate probabilities.";

  D.counting_principle = function (r) {
    var a = ri(r, 2, 6), b = ri(r, 2, 6), c = ri(r, 2, 4);
    return { q: "A meal has " + a + " soups, " + b + " main dishes and " + c +
                " drinks. How many different meals are possible?", a: String(a * b * c) };
  };
  M.counting_principle = "Fundamental counting principle: multiply the number of choices at each stage.";

  D.stem_leaf = function (r) {
    var s = [], i;
    for (i = 0; i < 6; i++) s.push(ri(r, 10, 59));
    var sorted = s.slice().sort(function (a, b) { return a - b; });
    var n = sorted.length;
    var med = n % 2 ? sorted[(n - 1) / 2] : (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
    return { q: "Arrange in ascending order and find the median:  " + s.join(", "),
             a: sorted.join(", ") + ";  median = " + med };
  };
  M.stem_leaf = "Order the values first; the median is the middle one, or the mean of the two middle ones.";

  /* =================== vectors =================== */
  D.vector_add = function (r) {
    var a = nz(r, -8, 9), b = nz(r, -8, 9), c = nz(r, -8, 9), d = nz(r, -8, 9);
    return { q: "Add the vectors (" + mn(a) + ", " + mn(b) + ") and (" + mn(c) + ", " + mn(d) + ")",
             a: "(" + mn(a + c) + ", " + mn(b + d) + ")" };
  };
  M.vector_add = "Add vectors component by component: add the x parts together and the y parts together.";

  D.vector_magnitude = function (r) {
    var trip = one([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17]], r);
    var sx = r() < 0.5 ? 1 : -1, sy = r() < 0.5 ? 1 : -1;
    return { q: "Find the magnitude of the vector (" + mn(trip[0] * sx) + ", " + mn(trip[1] * sy) + ")",
             a: String(trip[2]) };
  };
  M.vector_magnitude = "Magnitude = \u221a(x\u00b2 + y\u00b2), by Pythagoras on the components.";

  /* =================== number theory (JH level) =================== */
  D.rational_irrational = function (r) {
    var rat = ["3/4", "0.25", "\u221a16", "7", "0.333...", "\u221a49"];
    var irr = ["\u221a2", "\u221a3", "\u03c0", "\u221a5", "\u221a10", "\u221a7"];
    var pick = r() < 0.5;
    var v = pick ? one(rat, r) : one(irr, r);
    return { q: "Is " + v + " rational or irrational?",
             a: pick ? "Rational" : "Irrational" };
  };
  M.rational_irrational = "A rational number can be written as a fraction of two integers; a non-exact root or \u03c0 cannot, so it is irrational.";

  D.halfway_rational = function (r) {
    var a = ri(r, 1, 9), b = a + ri(r, 2, 9);
    return { q: "Find the rational number halfway between " + a + " and " + b,
             a: String((a + b) / 2) };
  };
  M.halfway_rational = "The number halfway between two values is their mean: add them and divide by 2.";

  D.scientific_notation = function (r) {
    var d = ri(r, 1, 9), e = ri(r, 3, 7), extra = ri(r, 0, 99);
    var num = (d + extra / 100) * Math.pow(10, e);
    return { q: "Write " + num.toLocaleString() + " in standard form",
             a: (d + extra / 100) + " \u00d7 10^" + e };
  };
  M.scientific_notation = "Standard form is A \u00d7 10\u207f where 1 \u2264 A < 10; count how many places the point moves.";

})(window);
