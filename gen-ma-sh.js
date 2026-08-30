/* Senior High MATHEMATICS drill generators — Grades 10–12.

   The elementary engine (gen-ma.js) exposes GEN_MA.DRILLS and GEN_MA.METHOD,
   and the Junior High pack (gen-ma79.js) extends them. This file registers the
   additional procedural generators the Senior High topics need (sets, number
   bases, surds, variation, quadratics, sequences, bearings, loci, standard
   deviation, logic, mappings, matrices, solids, counting, exponential and
   logarithmic functions, differentiation and integration ...).

   Every generator has the same contract as the existing ones:
     function (r, p) -> { q: "question text", a: "answer text", n: numeric answer }
   where r is the seeded random function and p the optional parameter object.
   Unlike the Junior High drills, almost every generator here also returns the
   numeric answer as `n`, so the multiple-choice sheet can build options.
   A METHOD entry accompanies every drill so each answer key states the WHY. */
(function (root) {
  "use strict";
  if (!root.GEN_MA || !root.GEN_MA.DRILLS) return;

  var D = root.GEN_MA.DRILLS, M = root.GEN_MA.METHOD;

  /* ---------------- helpers ---------------- */
  function ri(r, lo, hi) { return lo + Math.floor(r() * (hi - lo + 1)); }
  function one(a, r) { return a[Math.floor(r() * a.length)]; }
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a || 1; }
  function lcm(a, b) { return Math.abs(a * b) / gcd(a, b); }
  function nz(r, lo, hi) { var v = ri(r, lo, hi); return v === 0 ? 1 : v; }
  function mn(n) { return String(n).replace("-", "\u2212"); }
  function sg(n) { return n < 0 ? "(" + mn(n) + ")" : String(n); }
  function dp(x, k) { var f = Math.pow(10, k); return Math.round(x * f) / f; }
  function rt(x) { return Math.round(x * 100) / 100; }
  function money(x) { return "L$" + (Math.round(x * 100) / 100).toLocaleString("en-US"); }
  /* largest square factor of n */
  function sqFactor(n) { for (var k = Math.floor(Math.sqrt(n)); k >= 2; k--) if (n % (k * k) === 0) return k * k; return 1; }
  /* superscript digits, so no generator ever prints "x^3" */
  var SUP = { "\u2212": "\u207b", "-": "\u207b", "0": "\u2070", "1": "\u00b9", "2": "\u00b2",
              "3": "\u00b3", "4": "\u2074", "5": "\u2075", "6": "\u2076", "7": "\u2077",
              "8": "\u2078", "9": "\u2079", "/": "\u2044", "(": "\u207d", ")": "\u207e" };
  function sup(s) {
    s = String(s);
    /* there is no superscript italic "x" in Unicode, so spell the index out
       rather than printing "5x = 3125" for 5^x = 3125 */
    if (/[a-z]/i.test(s)) return " to the power " + s;
    return s.split("").map(function (ch) { return SUP[ch] || ch; }).join("");
  }
  /* subscript digits, for log bases */
  var SUB = { "0": "\u2080", "1": "\u2081", "2": "\u2082", "3": "\u2083", "4": "\u2084",
              "5": "\u2085", "6": "\u2086", "7": "\u2087", "8": "\u2088", "9": "\u2089" };
  function sub(s) { return String(s).split("").map(function (ch) { return SUB[ch] || ch; }).join(""); }
  /* term renderer: c x^e. A unit coefficient prints as "x", never "1x". */
  function term(c, v, e, first) {
    if (c === 0) return "";
    var s = first ? (c < 0 ? "\u2212" : "") : (c < 0 ? " \u2212 " : " + ");
    var m = Math.abs(c), body = "";
    if (v) body += (m === 1 ? "" : m) + v + (e > 1 ? sup(e) : "");
    else body += m;
    return s + body;
  }
  /* a leading coefficient that never prints "1x" or "1y" */
  function cx(c, v) { return (c === 1 ? "" : c === -1 ? "\u2212" : mn(c)) + v; }
  /* a two-term linear expression in x and y with proper signs: "3x \u2212 y", "x + 4y" */
  function lin(a, b) { return cx(a, "x") + term(b, "y", 1, false); }
  /* a linear equation a x + b y = c */
  function linEq(a, b, c) { return lin(a, b) + " = " + mn(c); }
  function poly2(a, b, v) { return term(a, v, 1, true) + term(b, "", 0, false); }
  function simpFrac(n, d) {
    var g = gcd(n, d); n /= g; d /= g;
    if (d < 0) { n = -n; d = -d; }
    return d === 1 ? mn(n) : mn(n) + "/" + d;
  }
  /* fraction always written with an explicit denominator, e.g. 7/2 or 2/1 */
  function frac(n, d) {
    var g = gcd(n, d); n /= g; d /= g;
    if (d < 0) { n = -n; d = -d; }
    return mn(n) + "/" + d;
  }
  /* 1st, 2nd, 3rd, 4th ... 21st, 22nd, 23rd */
  function ordNum(n) {
    var t = n % 100;
    if (t >= 11 && t <= 13) return n + "th";
    return n + ({ 1: "st", 2: "nd", 3: "rd" }[n % 10] || "th");
  }
  /* "first", "second", ... for small whole numbers */
  function ord(n) {
    return ["zeroth", "first", "second", "third", "fourth", "fifth", "sixth",
            "seventh", "eighth", "ninth", "tenth"][n] || (n + "th");
  }
  /* convert a base-ten integer to base b as a digit string */
  function toBase(n, b) {
    if (n === 0) return "0";
    var s = "", neg = n < 0; n = Math.abs(n);
    while (n > 0) { s = (n % b) + s; n = Math.floor(n / b); }
    return (neg ? "\u2212" : "") + s;
  }
  function fromBase(digits, b) {
    var s = String(digits), neg = s.charAt(0) === "\u2212";
    if (neg) s = s.slice(1);
    var v = 0;
    for (var i = 0; i < s.length; i++) v = v * b + (+s.charAt(i));
    return neg ? -v : v;
  }
  /* a random digit string that is valid in base b, with len digits */
  function digitsIn(r, b, len, leadNonZero) {
    var s = "";
    for (var i = 0; i < len; i++) {
      var d = (i === 0 && leadNonZero) ? ri(r, 1, b - 1) : ri(r, 0, b - 1);
      s += d;
    }
    return s;
  }
  /* trig table for the special angles, exact strings */
  var SPECIAL = {
    30: { sin: "1/2", cos: "\u221a3/2", tan: "1/\u221a3", sinN: 0.5, cosN: 0.866, tanN: 0.5774 },
    45: { sin: "\u221a2/2", cos: "\u221a2/2", tan: "1", sinN: 0.7071, cosN: 0.7071, tanN: 1 },
    60: { sin: "\u221a3/2", cos: "1/2", tan: "\u221a3", sinN: 0.866, cosN: 0.5, tanN: 1.7321 }
  };

  /* ============================ SETS ============================ */
  D.set_type_sh = function (r) {
    var kinds = [
      { n: "{even numbers}", t: "an infinite set", why: "even numbers go on for ever" },
      { n: "{Monday, Tuesday, Wednesday}", t: "a finite set", why: "it has only three members" },
      { n: "{2, 4, 6} when \u03be = {1, 2, 3, 4, 5, 6}", t: "a subset of \u03be", why: "all its members lie in \u03be" },
      { n: "{whole numbers less than 0}", t: "the empty set", why: "no whole number is less than 0" },
      { n: "{a, b, c} and {1, 2, 3}", t: "equivalent sets", why: "they have the same number of members but different members" },
      { n: "{1, 2, 3} and {3, 1, 2}", t: "equal sets", why: "order does not matter in a set" }
    ];
    var k = one(kinds, r);
    return { q: "Classify " + k.n + " as finite, infinite, empty, equal, equivalent or a subset.", a: k.t + " \u2014 " + k.why };
  };
  M.set_type_sh = "A set is finite when its members can be counted and finished, infinite when they never end, and empty when it has no members. Equal sets have the same members; equivalent sets only have the same number of members.";

  D.set_union_sh = function (r) {
    var lo = ri(r, 1, 6), hi = lo + ri(r, 6, 12);
    var a = [], b = [], i;
    for (i = lo; i <= hi; i++) if (r() < 0.55) a.push(i);
    for (i = lo; i <= hi; i++) if (r() < 0.55) b.push(i);
    if (!a.length) a.push(lo);
    if (!b.length) b.push(hi);
    var u = a.slice();
    b.forEach(function (v) { if (u.indexOf(v) < 0) u.push(v); });
    u.sort(function (x, y) { return x - y; });
    return { q: "A = {" + a.join(", ") + "} and B = {" + b.join(", ") + "}. Find A \u222a B and n(A \u222a B).",
             a: "{" + u.join(", ") + "}, so n(A \u222a B) = " + u.length, n: u.length };
  };
  M.set_union_sh = "The union gathers every member of either set, listing each one once only.";

  D.set_inter_sh = function (r) {
    var lo = ri(r, 1, 6), hi = lo + ri(r, 8, 14);
    var a = [], b = [], i;
    for (i = lo; i <= hi; i++) if (r() < 0.6) a.push(i);
    for (i = lo; i <= hi; i++) if (r() < 0.6) b.push(i);
    if (!a.length) a.push(lo);
    if (!b.length) b.push(lo);
    var inter = a.filter(function (v) { return b.indexOf(v) >= 0; }).sort(function (x, y) { return x - y; });
    return { q: "A = {" + a.join(", ") + "} and B = {" + b.join(", ") + "}. Find A \u2229 B and n(A \u2229 B).",
             a: inter.length ? "{" + inter.join(", ") + "}, so n(A \u2229 B) = " + inter.length : "{ }, the empty set, so n(A \u2229 B) = 0",
             n: inter.length };
  };
  M.set_inter_sh = "The intersection keeps only the members that appear in both sets.";

  D.set_complement_sh = function (r) {
    var hi = ri(r, 8, 15);
    var a = [], i;
    for (i = 1; i <= hi; i++) if (r() < 0.45) a.push(i);
    if (!a.length) a.push(1);
    if (a.length === hi) a.pop();
    var c = [];
    for (i = 1; i <= hi; i++) if (a.indexOf(i) < 0) c.push(i);
    return { q: "If \u03be = {1, 2, 3, \u2026, " + hi + "} and A = {" + a.join(", ") + "}, find A\u2032 and n(A\u2032).",
             a: "{" + c.join(", ") + "}, so n(A\u2032) = " + c.length, n: c.length };
  };
  M.set_complement_sh = "The complement of A is every member of the universal set that is not in A, so n(A) + n(A\u2032) = n(\u03be).";

  D.set_disjoint_sh = function (r) {
    var odds = [1, 3, 5, 7, 9, 11, 13, 15], evens = [2, 4, 6, 8, 10, 12, 14, 16];
    var a = [one(odds, r), one(odds, r), one(odds, r)], b = [one(evens, r), one(evens, r)];
    var share = a.filter(function (v) { return b.indexOf(v) >= 0; });
    return { q: "Are A = {" + a.join(", ") + "} and B = {" + b.join(", ") + "} disjoint sets? How many members do they share?",
             a: share.length ? "No \u2014 they share " + share.length + " member(s), so they are not disjoint." : "Yes \u2014 they share no member, so they are disjoint.",
             n: share.length };
  };
  M.set_disjoint_sh = "Two sets are disjoint when their intersection is the empty set, meaning they have no member in common.";

  D.set_card_sh = function (r) {
    var na = ri(r, 8, 25), nb = ri(r, 8, 25), both = ri(r, 2, Math.min(na, nb) - 1);
    var u = na + nb - both;
    return { q: "n(A) = " + na + ", n(B) = " + nb + " and n(A \u2229 B) = " + both + ". Find n(A \u222a B).",
             a: na + " + " + nb + " \u2212 " + both + " = " + u, n: u };
  };
  M.set_card_sh = "n(A \u222a B) = n(A) + n(B) \u2212 n(A \u2229 B), because the members of the intersection are counted once in each of n(A) and n(B).";

  D.venn_two_sh = function (r) {
    var total = ri(r, 30, 60), a = ri(r, 15, total - 8), b = ri(r, 12, total - 8), both = ri(r, 3, Math.min(a, b) - 2);
    var u = a + b - both, neither = total - u;
    if (neither < 0) neither = 0;
    return { q: "In a class of " + total + ", " + a + " offer Biology, " + b + " offer Chemistry and " + both + " offer both. How many offer neither?",
             a: "n(B \u222a C) = " + a + " + " + b + " \u2212 " + both + " = " + u + ", so neither = " + total + " \u2212 " + u + " = " + neither,
             n: neither };
  };
  M.venn_two_sh = "Find the union with n(A \u222a B) = n(A) + n(B) \u2212 n(A \u2229 B), then subtract from the total to find those outside both circles.";

  D.venn_three_sh = function (r) {
    var a = ri(r, 20, 40), b = ri(r, 18, 35), c = ri(r, 15, 30);
    var ab = ri(r, 5, Math.min(a, b) - 3), ac = ri(r, 4, Math.min(a, c) - 3), bc = ri(r, 3, Math.min(b, c) - 3);
    var abc = ri(r, 2, Math.min(ab, ac, bc) - 1);
    var u = a + b + c - ab - ac - bc + abc;
    var total = u + ri(r, 2, 12);
    return { q: "Of " + total + " pupils, " + a + " offer Maths, " + b + " Physics and " + c + " Chemistry. " + ab + " offer Maths and Physics, " + ac + " Maths and Chemistry, " + bc + " Physics and Chemistry, and " + abc + " offer all three. How many offer none?",
             a: "n(M \u222a P \u222a C) = " + a + " + " + b + " + " + c + " \u2212 " + ab + " \u2212 " + ac + " \u2212 " + bc + " + " + abc + " = " + u + ", so none = " + (total - u),
             n: total - u };
  };
  M.venn_three_sh = "For three sets add the three singles, subtract the three pairwise overlaps and add the triple overlap back once, because it was removed three times.";

  D.subsets_num_sh = function (r) {
    var n = ri(r, 2, 5), k = ri(r, 0, n);
    function C(a, b) { var v = 1, i; for (i = 0; i < b; i++) v = v * (a - i) / (i + 1); return Math.round(v); }
    var tot = Math.pow(2, n);
    var mem = k === 1 ? "1 member" : k + " members";
    return { q: "A set has " + n + " members. How many subsets does it have, and how many of those subsets have exactly " + mem + "?",
             a: "2" + sup(n) + " = " + tot + " subsets, of which " + n + "C" + k + " = " + C(n, k) + " have exactly " + mem + ".",
             n: tot };
  };
  M.subsets_num_sh = "Each member can either be in a subset or out of it, giving 2 choices per member and so 2\u207f subsets in all.";

  D.set_notation_sh = function (r) {
    var sets = [
      function () { var hi = ri(r, 10, 20), a = [], i; for (i = 1; i <= hi; i++) if (i % 2 === 0) a.push(i); return { d: "{x : x is an even number, 1 \u2264 x \u2264 " + hi + "}", l: a, n: a.length }; },
      function () { var hi = ri(r, 12, 24), a = [], i; for (i = 1; i <= hi; i++) if (i % 3 === 0) a.push(i); return { d: "{x : x is a multiple of 3, 1 \u2264 x \u2264 " + hi + "}", l: a, n: a.length }; },
      function () { var pr = [2, 3, 5, 7, 11, 13, 17, 19, 23], hi = ri(r, 8, 23), a = pr.filter(function (v) { return v < hi; }); return { d: "{x : x is a prime number, x < " + hi + "}", l: a, n: a.length }; },
      function () { var lo = ri(r, 2, 6), hi = lo + ri(r, 3, 7), a = [], i; for (i = lo; i <= hi; i++) a.push(i); return { d: "{x : x is an integer, " + lo + " \u2264 x \u2264 " + hi + "}", l: a, n: a.length }; }
    ];
    var s = one(sets, r)();
    return { q: "List the members of the set " + s.d + " and state how many it has.",
             a: "{" + s.l.join(", ") + "}, so it has " + s.n + " members.", n: s.n };
  };
  M.set_notation_sh = "Read the rule inside the braces, test each candidate value against it, and list only those that satisfy the rule.";

  D.demorgan_sh = function (r) {
    var hi = ri(r, 6, 9), a = [], b = [], i;
    for (i = 1; i <= hi; i++) { if (r() < 0.5) a.push(i); if (r() < 0.5) b.push(i); }
    if (!a.length) a.push(1);
    if (!b.length) b.push(hi);
    function inSet(arr, v) { return arr.indexOf(v) >= 0; }
    var lhs = [], rhs = [];
    for (i = 1; i <= hi; i++) { if (!(inSet(a, i) && inSet(b, i))) lhs.push(i); if (!inSet(a, i) || !inSet(b, i)) rhs.push(i); }
    return { q: "With \u03be = {1, \u2026, " + hi + "}, A = {" + a.join(", ") + "} and B = {" + b.join(", ") + "}, find (A \u2229 B)\u2032 and A\u2032 \u222a B\u2032 and say whether De Morgan's law holds.",
             a: "(A \u2229 B)\u2032 = {" + lhs.join(", ") + "} and A\u2032 \u222a B\u2032 = {" + rhs.join(", ") + "}, so the law holds.", n: lhs.length };
  };
  M.demorgan_sh = "De Morgan's law says (A \u2229 B)\u2032 = A\u2032 \u222a B\u2032: not being in both is the same as missing at least one of them.";

  /* ============================ RATIONAL NUMBERS ============================ */
  D.rat_add_sh = function (r) {
    var d1 = ri(r, 2, 9), d2 = ri(r, 2, 9), n1 = ri(r, 1, d1 - 1 || 1), n2 = ri(r, 1, d2 - 1 || 1);
    var L = lcm(d1, d2), num = n1 * (L / d1) + n2 * (L / d2);
    return { q: n1 + "/" + d1 + " + " + n2 + "/" + d2 + " =", a: simpFrac(num, L), n: rt(dp(num / L, 3)) };
  };
  M.rat_add_sh = "Find the LCD, rewrite both fractions over it, then add the numerators and simplify.";

  D.rat_sub_sh = function (r) {
    var d1 = ri(r, 2, 9), d2 = ri(r, 2, 9), n1 = ri(r, 2, d1 + 3), n2 = ri(r, 1, d2 - 1 || 1);
    var L = lcm(d1, d2), num = n1 * (L / d1) - n2 * (L / d2);
    return { q: n1 + "/" + d1 + " \u2212 " + n2 + "/" + d2 + " =", a: simpFrac(num, L), n: rt(dp(num / L, 3)) };
  };
  M.rat_sub_sh = "Make the denominators the same, then subtract the numerators. Keep the sign of the result.";

  D.rat_mul_sh = function (r) {
    var n1 = ri(r, 2, 9), d1 = ri(r, 2, 9), n2 = ri(r, 2, 9), d2 = ri(r, 2, 9);
    return { q: n1 + "/" + d1 + " \u00d7 " + n2 + "/" + d2 + " =", a: simpFrac(n1 * n2, d1 * d2), n: rt(dp(n1 * n2 / (d1 * d2), 3)) };
  };
  M.rat_mul_sh = "Multiply the numerators together and the denominators together, then cancel any common factor.";

  D.rat_div_sh = function (r) {
    var n1 = ri(r, 2, 9), d1 = ri(r, 2, 9), n2 = ri(r, 2, 9), d2 = ri(r, 2, 9);
    return { q: n1 + "/" + d1 + " \u00f7 " + n2 + "/" + d2 + " =", a: simpFrac(n1 * d2, d1 * n2), n: rt(dp(n1 * d2 / (d1 * n2), 3)) };
  };
  M.rat_div_sh = "Dividing by a fraction means multiplying by its reciprocal: invert the second fraction and multiply.";

  D.frac_dec_sh = function (r) {
    var dens = [2, 4, 5, 8, 10, 16, 20, 25, 40, 50], d = one(dens, r), n = ri(r, 1, d - 1);
    var v = n / d;
    return { q: "Express " + n + "/" + d + " as a decimal.", a: String(v), n: v };
  };
  M.frac_dec_sh = "Divide the numerator by the denominator; a denominator that is a factor of a power of 10 gives a terminating decimal.";

  D.approx_sh = function (r) {
    var whole = ri(r, 1, 9), digits = [ri(r, 0, 9), ri(r, 0, 9), ri(r, 0, 9), ri(r, 0, 9)];
    var x = +(whole + "." + digits.join(""));
    var sf = ri(r, 2, 3);
    /* round to sf significant figures */
    var str = x.toFixed(6).replace(/0+$/, "").replace(/\.$/, "");
    var sig = str.replace(".", "").replace(/^0+/, "");
    var keep = sig.slice(0, sf), next = +sig.charAt(sf) || 0;
    var k = +keep + (next >= 5 ? 1 : 0);
    var exp = Math.floor(Math.log10(x));
    var res = dp(k * Math.pow(10, exp - sf + 1), 6);
    return { q: "Round " + x + " to " + sf + " significant figures.", a: String(res), n: res };
  };
  M.approx_sh = "Count the significant figures from the first non-zero digit; if the next digit is 5 or more, round the last kept digit up.";

  D.standard_form_sh = function (r) {
    var big = r() < 0.5;
    var A = ri(r, 1, 9) + ri(r, 0, 99) / 100;
    var e = big ? ri(r, 3, 8) : -ri(r, 3, 8);
    var val = A * Math.pow(10, e);
    /* a small value must be shown as a decimal, not as "7.2100E-6" */
    var shown = big ? val.toLocaleString("en-US", { maximumFractionDigits: 4 })
                    : val.toFixed(-e + 2).replace(/0+$/, "").replace(/\.$/, "");
    return { q: "Write " + shown + " in standard form.", a: A + " \u00d7 10" + sup(e), n: rt(A) };
  };
  M.standard_form_sh = "Standard form is A \u00d7 10\u207f with 1 \u2264 A < 10; the power of 10 counts how far the decimal point moves.";

  D.std_form_log_sh = D.standard_form_sh;
  M.std_form_log_sh = M.standard_form_sh;

  D.rational_classify_sh = function (r) {
    var rat = ["0.25", "7", "\u221a16", "\u22123/4", "0.333\u2026 recurring", "\u221a49", "2.5"],
        irr = ["\u221a2", "\u221a3", "\u03c0", "\u221a5", "\u221a10", "\u221a7"];
    var isRat = r() < 0.5, v = isRat ? one(rat, r) : one(irr, r);
    return { q: "Is " + v + " a rational or an irrational number? Give a reason.",
             a: isRat ? "Rational \u2014 it can be written exactly as a fraction of two integers." : "Irrational \u2014 it cannot be written as a fraction of two integers and its decimal never repeats." };
  };
  M.rational_classify_sh = "A rational number is exactly p/q with q \u2260 0. A non-exact root or \u03c0 is irrational.";

  D.binary_op_sh = function (r) {
    var k1 = one([2, 3, 4], r), k2 = one([1, 2, 3], r), a = ri(r, 2, 9), b = ri(r, 2, 9);
    var res = k1 * a - k2 * b;
    var back = k1 * b - k2 * a;
    return { q: "A binary operation is defined by a \u2217 b = " + k1 + "a \u2212 " + k2 + "b. Find " + a + " \u2217 " + b + " and say whether the operation is commutative.",
             a: a + " \u2217 " + b + " = " + res + "; " + b + " \u2217 " + a + " = " + back + ", so it is " + (res === back ? "commutative" : "not commutative") + ".",
             n: res };
  };
  M.binary_op_sh = "Substitute the two numbers into the rule in the correct order. An operation is commutative only when swapping the inputs leaves the result unchanged.";

  /* ============================ NUMBER BASE ============================ */
  D.ten_to_base_sh = function (r) {
    var b = one([2, 5, 8], r), n = ri(r, 12, 220);
    var s = toBase(n, b);
    return { q: "Convert " + n + "\u2081\u2080 to base " + b + ".", a: s + " (base " + b + ")", n: +s };
  };
  M.ten_to_base_sh = "Divide repeatedly by the new base and read the remainders from the last to the first.";

  D.ten_to_base2_sh = D.ten_to_base_sh;
  M.ten_to_base2_sh = M.ten_to_base_sh;

  D.base_to_ten_sh = function (r) {
    var b = one([2, 5, 8], r), s = digitsIn(r, b, ri(r, 3, 4), true);
    var v = fromBase(s, b);
    return { q: "Convert " + s + " (base " + b + ") to base ten.", a: String(v), n: v };
  };
  M.base_to_ten_sh = "Multiply each digit by its place value in the base and add the results.";

  D.base_to_ten2_sh = D.base_to_ten_sh;
  M.base_to_ten2_sh = M.base_to_ten_sh;

  D.base_add_sh = function (r) {
    var b = one([5, 8], r), x = digitsIn(r, b, 3, true), y = digitsIn(r, b, 3, true);
    var sum = fromBase(x, b) + fromBase(y, b);
    return { q: x + " + " + y + " =   (base " + b + ")", a: toBase(sum, b) + " (base " + b + ")", n: sum };
  };
  M.base_add_sh = "Add column by column as usual, but whenever a column reaches the base you carry 1 into the next column.";

  D.base_sub_sh = function (r) {
    var b = one([5, 8], r), x = digitsIn(r, b, 3, true), y = digitsIn(r, b, 3, true);
    if (fromBase(y, b) > fromBase(x, b)) { var t = x; x = y; y = t; }
    var d = fromBase(x, b) - fromBase(y, b);
    return { q: x + " \u2212 " + y + " =   (base " + b + ")", a: toBase(d, b) + " (base " + b + ")", n: d };
  };
  M.base_sub_sh = "Subtract column by column; when a digit is too small, borrow one group of the base from the next column.";

  D.base_mul_sh = function (r) {
    var b = one([5, 8], r), x = digitsIn(r, b, 2, true), y = ri(r, 2, 4);
    var p = fromBase(x, b) * y;
    return { q: x + " \u00d7 " + y + " =   (base " + b + ")", a: toBase(p, b) + " (base " + b + ")", n: p };
  };
  M.base_mul_sh = "Convert to base ten, multiply, then convert the product back into the required base.";

  D.place_value_sh = function (r) {
    var b = one([5, 8, 10], r), s = digitsIn(r, b, 4, true), pos = ri(r, 1, 3);
    var digit = +s.charAt(s.length - 1 - pos);
    var pv = digit * Math.pow(b, pos);
    var place = b === 10 ? ["units", "tens", "hundreds", "thousands"][pos]
                         : ["units", "base", "base squared", "base cubed"][pos];
    return { q: "In the number " + s + " (base " + b + "), what is the place value of the digit " + digit +
                " in the " + place + " column?",
             a: digit + " \u00d7 " + b + sup(pos) + " = " + pv, n: pv };
  };
  M.place_value_sh = "The place value of a digit is the digit multiplied by the base raised to the power of its position counted from the right, starting at zero.";

  /* ============================ ALGEBRAIC EXPRESSIONS ============================ */
  D.eval_expr_sh = function (r) {
    var a = nz(r, 2, 6), b = nz(r, -9, 9), c = nz(r, -6, 6), v = one(["x", "y", "n", "t"], r), x = nz(r, -5, 6);
    var res = a * x * x + b * x + c;
    var expr = term(a, v, 2, true) + term(b, v, 1, false) + term(c, "", 0, false);
    return { q: "Evaluate " + expr + " when " + v + " = " + mn(x) + ".", a: mn(res), n: res };
  };
  M.eval_expr_sh = "Replace every letter by the given number, keeping brackets around negative values, then follow the order of operations.";

  D.expand_binom_sh = function (r) {
    var p = nz(r, -6, 6), q = nz(r, -6, 6), v = one(["x", "y", "n"], r);
    var A = p + q, B = p * q;
    var lhs = "(" + v + term(p, "", 0, false) + ")(" + v + term(q, "", 0, false) + ")";
    var res = term(1, v, 2, true) + term(A, v, 1, false) + term(B, "", 0, false);
    return { q: "Expand and simplify " + lhs, a: res, n: Math.abs(A) + Math.abs(B) };
  };
  M.expand_binom_sh = "Multiply each term of the first bracket by each term of the second (FOIL), then collect the like terms in the middle.";

  D.expand_brackets_sh = function (r) {
    var k = nz(r, 2, 9), a = nz(r, -9, 9), b = nz(r, -9, 9), v = one(["x", "y", "p"], r);
    var lhs = k + "(" + poly2(a, b, v) + ")";
    var res = poly2(k * a, k * b, v);
    return { q: "Expand " + lhs, a: res, n: Math.abs(k * a) + Math.abs(k * b) };
  };
  M.expand_brackets_sh = "Multiply the number outside the bracket by each term inside it, keeping the signs.";

  D.diff_squares_sh = function (r) {
    var a = ri(r, 2, 9), b = one([2, 3, 4, 5, 6], r), v = one(["x", "y", "n"], r);
    var b2 = b * b, aa = a * a;
    var lhs = term(aa, v, 2, true) + " \u2212 " + b2;
    var res = "(" + a + v + " + " + b + ")(" + a + v + " \u2212 " + b + ")";
    return { q: "Factorize " + lhs, a: res, n: a + b };
  };
  M.diff_squares_sh = "a\u00b2 \u2212 b\u00b2 = (a + b)(a \u2212 b); take the square root of each part and write one plus and one minus bracket.";

  D.perfect_square_sh = function (r) {
    var a = ri(r, 2, 8), v = one(["x", "y", "n"], r);
    var mid = 2 * a, sq = a * a;
    var lhs = term(1, v, 2, true) + term(mid, v, 1, false) + term(sq, "", 0, false);
    return { q: "Factorize " + lhs + " as a perfect square.", a: "(" + v + " + " + a + ")\u00b2", n: a };
  };
  M.perfect_square_sh = "In a\u00b2 + 2ab + b\u00b2 the middle term is twice the product of the two square roots; halve it to find b.";

  D.factor_quad_sh = function (r) {
    var p = nz(r, -7, 7), q = nz(r, -7, 7), v = one(["x", "y", "n"], r);
    var B = -(p + q), C = p * q;
    var lhs = term(1, v, 2, true) + term(B, v, 1, false) + term(C, "", 0, false);
    var res = "(" + v + (p < 0 ? " \u2212 " + Math.abs(p) : " + " + p) + ")(" + v + (q < 0 ? " \u2212 " + Math.abs(q) : " + " + q) + ")";
    return { q: "Factorize " + lhs, a: res, n: Math.abs(p) + Math.abs(q) };
  };
  M.factor_quad_sh = "Find two numbers whose product is the constant term and whose sum is the coefficient of the middle term; they become the two brackets.";

  D.factor_common_sh = function (r) {
    var g = ri(r, 2, 6), a = ri(r, 2, 9), b = ri(r, 2, 9), v = one(["x", "y", "n"], r);
    var lhs = term(g * a, v, 2, true) + term(g * b, v, 1, false);
    return { q: "Factorize completely " + lhs, a: g + v + "(" + a + v + " + " + b + ")", n: g };
  };
  M.factor_common_sh = "Take out the highest common factor of the coefficients together with the lowest power of the common letter.";

  D.factor_cubes_sh = function (r) {
    var a = ri(r, 2, 5), b = ri(r, 2, 4), plus = r() < 0.5, v = one(["x", "y", "n"], r);
    var A = a * a * a, B = b * b * b;
    var lhs = term(A, v, 3, true) + (plus ? " + " : " \u2212 ") + B;
    var res = "(" + a + v + (plus ? " + " : " \u2212 ") + b + ")(" + a + a + v + "\u00b2 " + (plus ? "\u2212 " : "+ ") + a * b + v + " + " + b * b + ")";
    return { q: "Factorize " + lhs, a: res, n: a + b };
  };
  M.factor_cubes_sh = "a\u00b3 \u00b1 b\u00b3 = (a \u00b1 b)(a\u00b2 \u2213 ab + b\u00b2); the sign in the first bracket matches the original and the middle sign is the opposite.";

  D.algebra_frac_sh = function (r) {
    var a = ri(r, 2, 5), b = ri(r, 1, 5), v = one(["x", "y", "n"], r), k = ri(r, 1, 5);
    var den = v + " + " + k;
    return { q: "Simplify " + a + " + " + b + "/(" + den + ") as a single fraction.",
             a: "Write " + a + " as " + a + "(" + den + ")/(" + den + "), then add the numerators: (" +
                a + den + " + " + b + ")/(" + den + ") = (" + cx(a, v) + term(a * k + b, "", 0, false) +
                ")/(" + den + ")", n: a + b };
  };
  M.algebra_frac_sh = "Write the whole number over 1, find the common denominator, then combine the numerators and factorize before cancelling.";

  D.simplify_like_sh = function (r) {
    var a = nz(r, 2, 9), b = nz(r, -9, 9), c = nz(r, -9, 9), d = nz(r, 2, 9), v = one(["x", "y", "p"], r);
    var lhs = poly2(a, b, v) + " + (" + poly2(c, d, v).trim() + ")";
    var res = poly2(a + c, b + d, v);
    return { q: "Simplify " + lhs, a: res, n: Math.abs(a + c) + Math.abs(b + d) };
  };
  M.simplify_like_sh = "Only like terms can be added or subtracted: add the x coefficients together and the constant terms together, keeping the signs.";

  D.substitution_sh = function (r) {
    var a = ri(r, 2, 6), b = nz(r, -8, 8), x = ri(r, 2, 9), y = ri(r, 2, 9);
    var res = a * x + b * y;
    var f = cx(a, "x") + term(b, "y", 1, false);
    return { q: "Given that F = " + f + ", find F when x = " + x + " and y = " + y + ".", a: mn(res), n: res };
  };
  M.substitution_sh = "Replace each letter by its value and evaluate, multiplying before adding or subtracting.";

  /* ============================ PLANE GEOMETRY ============================ */
  D.angle_straight_sh = function (r) {
    var a = ri(r, 20, 100), b = ri(r, 15, 170 - a);
    var x = 180 - a - b;
    return { q: "Three angles on a straight line are " + a + "\u00b0, " + b + "\u00b0 and x\u00b0. Find x.", a: x + "\u00b0", n: x };
  };
  M.angle_straight_sh = "Angles on a straight line add up to 180\u00b0, so subtract the known angles from 180.";

  D.angle_at_point_sh = function (r) {
    var a = ri(r, 40, 150), b = ri(r, 30, 320 - a);
    var x = 360 - a - b;
    return { q: "Three angles at a point are " + a + "\u00b0, " + b + "\u00b0 and x\u00b0. Find x.", a: x + "\u00b0", n: x };
  };
  M.angle_at_point_sh = "Angles at a point add up to one complete revolution, 360\u00b0.";

  D.angle_parallel_sh = function (r) {
    var kinds = [
      { k: "alternate", v: function (a) { return a; }, why: "alternate angles between parallel lines are equal (Z angles)" },
      { k: "corresponding", v: function (a) { return a; }, why: "corresponding angles are equal (F angles)" },
      { k: "co-interior", v: function (a) { return 180 - a; }, why: "co-interior angles between parallel lines add to 180\u00b0 (C angles)" }
    ];
    var t = one(kinds, r), a = ri(r, 35, 145), ans = t.v(a);
    return { q: "A transversal cuts two parallel lines. One angle is " + a + "\u00b0. Find the " + t.k + " angle and give the reason.",
             a: ans + "\u00b0 \u2014 " + t.why, n: ans };
  };
  M.angle_parallel_sh = "With parallel lines, alternate and corresponding angles are equal, while co-interior angles add to 180\u00b0.";

  D.triangle_angle_sh = function (r) {
    var a = ri(r, 25, 110), b = ri(r, 20, 175 - a);
    var x = 180 - a - b;
    return { q: "Two angles of a triangle are " + a + "\u00b0 and " + b + "\u00b0. Find the third angle.", a: x + "\u00b0", n: x };
  };
  M.triangle_angle_sh = "The three angles of any triangle add up to 180\u00b0.";

  D.exterior_angle_sh = function (r) {
    var a = ri(r, 30, 100), b = ri(r, 25, 170 - a);
    var ext = a + b;
    return { q: "The two interior opposite angles of a triangle are " + a + "\u00b0 and " + b + "\u00b0. Find the exterior angle.", a: ext + "\u00b0", n: ext };
  };
  M.exterior_angle_sh = "An exterior angle of a triangle equals the sum of the two interior opposite angles.";

  D.pythagoras_sh = function (r) {
    var trip = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [9, 12, 15], [8, 15, 17], [7, 24, 25]];
    var t = one(trip, r), k = ri(r, 1, 3);
    var a = t[0] * k, b = t[1] * k, c = t[2] * k;
    var mode = r() < 0.5;
    if (mode) return { q: "A right-angled triangle has legs " + a + " cm and " + b + " cm. Find the hypotenuse.", a: "\u221a(" + a + "\u00b2 + " + b + "\u00b2) = \u221a" + (a * a + b * b) + " = " + c + " cm", n: c };
    return { q: "A right-angled triangle has hypotenuse " + c + " cm and one leg " + a + " cm. Find the other leg.", a: "\u221a(" + c + "\u00b2 \u2212 " + a + "\u00b2) = \u221a" + (c * c - a * a) + " = " + b + " cm", n: b };
  };
  M.pythagoras_sh = "In a right-angled triangle c\u00b2 = a\u00b2 + b\u00b2; to find the hypotenuse add the squares, and to find a leg subtract.";

  D.polygon_interior_sh = function (r) {
    var n = ri(r, 5, 12), sum = (n - 2) * 180;
    return { q: "Find the sum of the interior angles of a " + n + "-sided polygon.", a: "(" + n + " \u2212 2) \u00d7 180\u00b0 = " + sum + "\u00b0", n: sum };
  };
  M.polygon_interior_sh = "Cutting the polygon into triangles from one vertex gives n \u2212 2 triangles, each contributing 180\u00b0.";

  D.polygon_each_sh = function (r) {
    var n = ri(r, 5, 12), each = (n - 2) * 180 / n;
    return { q: "Find each interior angle of a regular " + n + "-sided polygon.", a: ((n - 2) * 180) + "\u00b0 \u00f7 " + n + " = " + each + "\u00b0", n: each };
  };
  M.polygon_each_sh = "Find the sum of the interior angles and divide by the number of equal angles in a regular polygon.";

  D.quadrilateral_angle_sh = function (r) {
    var parts = [1, 2, 3, 4], total = 10, x = 360 / total;
    var a = ri(r, 40, 120);
    var rest = 360 - a;
    var q = ri(r, 2, 3), s = ri(r, 1, q - 1 || 1);
    return { q: "Three angles of a quadrilateral are " + a + "\u00b0, " + (a + 20) + "\u00b0 and " + (a + 40) + "\u00b0. Find the fourth angle.",
             a: "360\u00b0 \u2212 (" + (3 * a + 60) + "\u00b0) = " + (360 - 3 * a - 60) + "\u00b0", n: 360 - 3 * a - 60 };
  };
  M.quadrilateral_angle_sh = "The four angles of any quadrilateral add to 360\u00b0, so subtract the known angles from 360.";

  /* ============================ LINEAR EQUATIONS AND INEQUALITIES ============================ */
  D.solve_linear_sh = function (r) {
    var a = nz(r, 2, 9), b = nz(r, -20, 20), x = nz(r, -9, 9);
    var c = a * x + b;
    return { q: "Solve " + a + "x " + (b < 0 ? "\u2212 " + Math.abs(b) : "+ " + b) + " = " + mn(c), a: "x = " + mn(x), n: x };
  };
  M.solve_linear_sh = "Undo the operations in reverse order: first move the constant to the other side, then divide by the coefficient of x.";

  D.solve_brackets_sh = function (r) {
    var k = ri(r, 2, 6), p = nz(r, -8, 8), x = nz(r, -6, 7);
    var rhs = k * (x + p);
    return { q: "Solve " + k + "(x " + (p < 0 ? "\u2212 " + Math.abs(p) : "+ " + p) + ") = " + mn(rhs), a: "x = " + mn(x), n: x };
  };
  M.solve_brackets_sh = "Expand the bracket first, then collect the x terms on one side and the numbers on the other.";

  D.solve_two_sides_sh = function (r) {
    var a = nz(r, 3, 9), b = nz(r, -9, 9), c = nz(r, -9, 9), x = nz(r, -8, 8);
    var d = b - a * x + c;
    return { q: "Solve " + a + "x " + (b < 0 ? "\u2212 " + Math.abs(b) : "+ " + b) + " = " + (c === 0 ? "0" : mn(c)), a: "x = " + mn(x), n: x };
  };
  M.solve_two_sides_sh = "Collect the terms with the letter on one side and the numbers on the other, then divide by the coefficient.";

  D.solve_ineq_sh = function (r) {
    var a = nz(r, 2, 8), b = nz(r, -15, 15), x = nz(r, -8, 8);
    var neg = a < 0;
    var A = Math.abs(a), c = A * x + b;
    var op = one(["<", ">", "\u2264", "\u2265"], r);
    var q = neg ? "\u2212" + A + "x " + (b < 0 ? "\u2212 " + Math.abs(b) : "+ " + b) + " " + op + " " + mn(c)
                : A + "x " + (b < 0 ? "\u2212 " + Math.abs(b) : "+ " + b) + " " + op + " " + mn(c);
    var flip = { "<": ">", ">": "<", "\u2264": "\u2265", "\u2265": "\u2264" }[op];
    var resOp = neg ? flip[op] : op;
    return { q: "Solve and graph " + q, a: "x " + resOp + " " + mn(x) + (neg ? "  (the sign is reversed because we divided by a negative number)" : ""), n: x };
  };
  M.solve_ineq_sh = "Solve like an equation, but when you multiply or divide by a negative number you must reverse the inequality sign.";

  D.ineq_word_sh = function (r) {
    var fixed = ri(r, 2, 9) * 100, rate = ri(r, 2, 8) * 25, km = ri(r, 4, 14);
    var total = fixed + rate * km;
    return { q: "A taxi charges " + money(fixed) + " to start and " + money(rate) + " per kilometre. For what distances is the fare less than " + money(total) + "?",
             a: money(fixed) + " + " + money(rate) + "d < " + money(total) + ", so d < " + km + " km", n: km };
  };
  M.ineq_word_sh = "Write the fixed charge plus the rate times the unknown, compare it with the limit, then solve the inequality.";

  D.solution_set_sh = function (r) {
    var a = ri(r, 2, 6), lo = ri(r, -5, 2), hi = lo + ri(r, 3, 8);
    var inc = r() < 0.5;
    var q = a + " \u2264 2x " + (inc ? "\u2264 " : "< ") + (2 * hi);
    return { q: "Find the solution set of " + q + " where x is an integer.",
             a: Math.ceil(lo) + " \u2264 x " + (inc ? "\u2264 " : "< ") + hi + ", so x = " + rangeList(lo, hi, inc),
             n: hi - lo };
  };
  function rangeList(lo, hi, inc) {
    var out = [], s = Math.ceil(lo), e = inc ? hi : hi - 1;
    for (var i = s; i <= e; i++) out.push(i);
    return out.join(", ");
  }
  M.solution_set_sh = "Solve the double inequality, then list the integers that lie between the two bounds, including an endpoint only when the sign is \u2264 or \u2265.";

  /* ============================ RELATIONS AND FUNCTIONS ============================ */
  D.fn_eval_sh = function (r) {
    var a = nz(r, 1, 4), b = nz(r, -6, 6), c = nz(r, -9, 9), x = nz(r, -5, 5);
    var res = a * x * x + b * x + c;
    return { q: "If f(x) = " + term(a, "x", 2, true) + term(b, "x", 1, false) + term(c, "", 0, false) + ", find f(" + mn(x) + ").",
             a: mn(res), n: res };
  };
  M.fn_eval_sh = "Replace x by the given number everywhere it appears, keeping brackets around negatives, then evaluate.";

  D.gradient_sh = function (r) {
    var x1 = nz(r, -6, 6), y1 = nz(r, -8, 8), dx = nz(r, 1, 6);
    var m = ri(r, -4, 4), x2 = x1 + dx, y2 = y1 + m * dx;
    return { q: "Find the gradient of the line joining (" + mn(x1) + ", " + mn(y1) + ") and (" + mn(x2) + ", " + mn(y2) + ").",
             a: "(" + mn(y2) + " \u2212 " + mn(y1) + ")/(" + mn(x2) + " \u2212 " + mn(x1) + ") = " + mn(m), n: m };
  };
  M.gradient_sh = "Gradient = rise \u00f7 run = (y\u2082 \u2212 y\u2081)/(x\u2082 \u2212 x\u2081); keep the signs carefully when subtracting negatives.";

  D.distance_pts_sh = function (r) {
    var trip = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15]];
    var t = one(trip, r), x1 = nz(r, -5, 5), y1 = nz(r, -5, 5);
    var sx = r() < 0.5 ? 1 : -1, sy = r() < 0.5 ? 1 : -1;
    var x2 = x1 + sx * t[0], y2 = y1 + sy * t[1];
    return { q: "Find the distance between (" + mn(x1) + ", " + mn(y1) + ") and (" + mn(x2) + ", " + mn(y2) + ").",
             a: "\u221a(" + t[0] + "\u00b2 + " + t[1] + "\u00b2) = \u221a" + (t[0] * t[0] + t[1] * t[1]) + " = " + t[2] + " units", n: t[2] };
  };
  M.distance_pts_sh = "Use d = \u221a[(x\u2082 \u2212 x\u2081)\u00b2 + (y\u2082 \u2212 y\u2081)\u00b2], which is Pythagoras' theorem on the horizontal and vertical gaps.";

  D.domain_range_sh = function (r) {
    var kinds = [
      { f: "y = \u221ax", d: "x \u2265 0", g: "y \u2265 0", why: "a square root of a negative number is not real, and the root is taken positive" },
      { f: "y = 1/x", d: "x \u2260 0", g: "y \u2260 0", why: "division by zero is undefined and the fraction can never equal zero" },
      { f: "y = x\u00b2", d: "all real numbers", g: "y \u2265 0", why: "any number can be squared and a square is never negative" },
      { f: "y = 3x + 2", d: "all real numbers", g: "all real numbers", why: "a straight line has no restrictions" }
    ];
    var k = one(kinds, r);
    return { q: "State the domain and range of " + k.f + " and give a reason.", a: "Domain: " + k.d + "; range: " + k.g + " \u2014 " + k.why };
  };
  M.domain_range_sh = "The domain is limited by anything undefined (division by zero, a negative square root); the range follows from what outputs the rule can actually produce.";

  D.function_test_sh = function (r) {
    var kinds = [
      { f: "y = 2x + 1", t: "one-to-one", fn: true, why: "every input gives a different output" },
      { f: "y = x\u00b2", t: "many-to-one", fn: true, why: "different inputs such as 2 and \u22122 give the same output" },
      { f: "y\u00b2 = x", t: "one-to-many", fn: false, why: "one input gives two outputs, so it fails the vertical line test" },
      { f: "y = |x|", t: "many-to-one", fn: true, why: "both 3 and \u22123 give 3" }
    ];
    var k = one(kinds, r);
    return { q: "Is " + k.f + " a function? Classify it and explain.",
             a: (k.fn ? "Yes, it is a function" : "No, it is not a function") + " \u2014 it is " + k.t + " because " + k.why + "." };
  };
  M.function_test_sh = "A function gives exactly one output for each input. If one input has two outputs the relation is one-to-many and is not a function.";

  D.change_subject_sh = function (r) {
    var forms = [
      { f: "v = u + at", s: "t", a: "t = (v \u2212 u)/a", why: "subtract u, then divide by a" },
      { f: "A = \u03c0r\u00b2", s: "r", a: "r = \u221a(A/\u03c0)", why: "divide by \u03c0, then take the square root" },
      { f: "C = 2\u03c0r", s: "r", a: "r = C/(2\u03c0)", why: "divide both sides by 2\u03c0" },
      { f: "S = n/2 (a + l)", s: "l", a: "l = 2S/n \u2212 a", why: "multiply by 2, divide by n, then subtract a" },
      { f: "V = lwh", s: "h", a: "h = V/(lw)", why: "divide both sides by lw" },
      { f: "F = 9C/5 + 32", s: "C", a: "C = 5(F \u2212 32)/9", why: "subtract 32, then multiply by 5/9" }
    ];
    var k = one(forms, r);
    return { q: "Make " + k.s + " the subject of " + k.f + ".", a: k.a + "  (" + k.why + ")" };
  };
  M.change_subject_sh = "Treat the new subject exactly like x in an equation: undo each operation in the reverse order until it stands alone.";

  D.quadratic_table_sh = function (r) {
    var a = one([1, 1, 2], r), b = nz(r, -4, 4), c = nz(r, -6, 6), x = ri(r, -3, 4);
    var y = a * x * x + b * x + c;
    var f = term(a, "x", 2, true) + term(b, "x", 1, false) + term(c, "", 0, false);
    return { q: "Complete the table for y = " + f + " when x = " + mn(x) + ".", a: "y = " + mn(y), n: y };
  };
  M.quadratic_table_sh = "Substitute the x value into the quadratic and evaluate, squaring before multiplying.";

  /* ============================ SIMULTANEOUS EQUATIONS ============================ */
  D.simul_elim_sh = function (r) {
    var x = nz(r, -6, 6), y = nz(r, -6, 6);
    var a1 = ri(r, 1, 4), b1 = ri(r, 1, 4), a2 = ri(r, 1, 4), b2 = -b1 * ri(r, 1, 2);
    var c1 = a1 * x + b1 * y, c2 = a2 * x + b2 * y;
    return { q: "Solve by elimination:  " + linEq(a1, b1, c1) + "   and   " + linEq(a2, b2, c2),
             a: "x = " + mn(x) + ", y = " + mn(y), n: x + y };
  };
  function sgn(n) { return n < 0 ? "\u2212 " + Math.abs(n) : "+ " + n; }
  M.simul_elim_sh = "Make the coefficients of one letter equal in size, then add or subtract the equations to remove it and solve for the other letter.";

  D.simul_subst_sh = function (r) {
    var x = nz(r, -6, 7), k = nz(r, 2, 5), c = nz(r, -9, 9);
    var a = ri(r, 1, 4), b = nz(r, 1, 4);
    var y = k * x + c, s = a * x + b * y;
    return { q: "Solve by substitution:  y = " + cx(k, "x") + term(c, "", 0, false) + "   and   " + linEq(a, b, s),
             a: "x = " + mn(x) + ", y = " + mn(y), n: x + y };
  };
  M.simul_subst_sh = "Make one letter the subject of the simpler equation, substitute that expression into the other equation, solve, then back-substitute.";

  D.simul_check_sh = function (r) {
    var x = nz(r, -5, 6), y = nz(r, -5, 6);
    var a1 = ri(r, 1, 4), b1 = ri(r, 1, 4), a2 = ri(r, 1, 4), b2 = nz(r, -4, 4);
    var c1 = a1 * x + b1 * y, c2 = a2 * x + b2 * y;
    var wrong = x + (r() < 0.5 ? 1 : -1);
    var ok = (a1 * wrong + b1 * y === c1) && (a2 * wrong + b2 * y === c2);
    return { q: "Check whether x = " + mn(wrong) + ", y = " + mn(y) + " satisfies " + linEq(a1, b1, c1) + " and " + linEq(a2, b2, c2) + ".",
             a: ok ? "Yes \u2014 both equations are satisfied." : "No \u2014 substituting does not satisfy both equations, so it is not the solution.",
             n: ok ? 1 : 0 };
  };
  M.simul_check_sh = "Substitute the pair into BOTH original equations. It is a solution only if both statements come out true.";

  D.simul_word_sh = function (r) {
    var p = ri(r, 2, 9) * 100, b = ri(r, 2, 9) * 100, np = ri(r, 2, 6), nb = ri(r, 2, 6);
    var tot = np * p + nb * b;
    return { q: np + " pens and " + nb + " books cost " + money(tot) + " altogether. If a pen costs " + money(p) + ", find the cost of a book.",
             a: money(nb) + "b = " + money(tot) + " \u2212 " + money(np * p) + " = " + money(tot - np * p) + ", so b = " + money(b), n: b };
  };
  M.simul_word_sh = "Let letters stand for the unknown prices, write one equation from each sentence, then eliminate or substitute to solve.";

  D.simul_graph_sh = function (r) {
    var x = ri(r, -4, 5), y = ri(r, -4, 5);
    var m1 = nz(r, 1, 3), c1 = y - m1 * x, m2 = nz(r, -3, -1), c2 = y - m2 * x;
    return { q: "By drawing the graphs, find where y = " + cx(m1, "x") + term(c1, "", 0, false) + " and y = " + cx(m2, "x") + term(c2, "", 0, false) + " meet.",
             a: "The lines meet at (" + mn(x) + ", " + mn(y) + ")", n: x + y };
  };
  M.simul_graph_sh = "Plot both lines on the same axes; the coordinates of the point where they cross satisfy both equations.";

  D.simul_matrix_sh = function (r) {
    var x = nz(r, -5, 5), y = nz(r, -5, 5);
    var a = ri(r, 1, 4), b = nz(r, 1, 4), c = ri(r, 1, 4), d = nz(r, -4, 4);
    var det = a * d - b * c;
    /* a zero determinant means no unique solution, so keep drawing until it is not zero */
    while (det === 0) { d = nz(r, -4, 4); det = a * d - b * c; }
    var e = a * x + b * y, f = c * x + d * y;
    return { q: "Solve using matrices:  " + linEq(a, b, e) + "   and   " + linEq(c, d, f),
             a: "Determinant = " + a + "(" + mn(d) + ") \u2212 " + mn(b) + "(" + mn(c) + ") = " + mn(det) +
                "; X = A\u207b\u00b9B gives x = " + mn(x) + ", y = " + mn(y), n: det };
  };
  M.simul_matrix_sh = "Write AX = B, find the determinant ad \u2212 bc, then X = A\u207b\u00b9B. A zero determinant means the lines are parallel and there is no unique solution.";

  /* ============================ VECTORS ============================ */
  D.vector_add_sh = function (r) {
    var a1 = nz(r, -8, 8), a2 = nz(r, -8, 8), b1 = nz(r, -8, 8), b2 = nz(r, -8, 8);
    return { q: "If a = (" + mn(a1) + ", " + mn(a2) + ") and b = (" + mn(b1) + ", " + mn(b2) + "), find a + b.",
             a: "(" + mn(a1 + b1) + ", " + mn(a2 + b2) + ")", n: a1 + b1 + a2 + b2 };
  };
  M.vector_add_sh = "Add the matching components: the horizontal parts together and the vertical parts together.";

  D.vector_sub_sh = function (r) {
    var a1 = nz(r, -8, 8), a2 = nz(r, -8, 8), b1 = nz(r, -8, 8), b2 = nz(r, -8, 8);
    return { q: "If a = (" + mn(a1) + ", " + mn(a2) + ") and b = (" + mn(b1) + ", " + mn(b2) + "), find a \u2212 b.",
             a: "(" + mn(a1 - b1) + ", " + mn(a2 - b2) + ")", n: a1 - b1 + a2 - b2 };
  };
  M.vector_sub_sh = "Subtract the matching components; a \u2212 b is the same as a + (\u2212b).";

  D.vector_magnitude_sh = function (r) {
    var trip = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 40, 41]];
    var t = one(trip, r), s1 = r() < 0.5 ? 1 : -1, s2 = r() < 0.5 ? 1 : -1;
    return { q: "Find the magnitude of the vector (" + mn(s1 * t[0]) + ", " + mn(s2 * t[1]) + ").",
             a: "\u221a(" + (t[0] * t[0]) + " + " + (t[1] * t[1]) + ") = \u221a" + (t[2] * t[2]) + " = " + t[2] + " units", n: t[2] };
  };
  M.vector_magnitude_sh = "The magnitude is the length of the vector, found by Pythagoras: \u221a(x\u00b2 + y\u00b2). Signs do not matter because they are squared.";

  D.vector_scalar_sh = function (r) {
    var k = nz(r, -4, 4), a1 = nz(r, -6, 6), a2 = nz(r, -6, 6);
    return { q: "If a = (" + mn(a1) + ", " + mn(a2) + "), find " + mn(k) + "a.",
             a: "(" + mn(k * a1) + ", " + mn(k * a2) + ")", n: k * a1 + k * a2 };
  };
  M.vector_scalar_sh = "Multiply each component by the scalar. A negative scalar also reverses the direction of the vector.";

  D.vector_direction_sh = function (r) {
    var x = ri(r, 3, 12), y = ri(r, 3, 12);
    var ang = rt(Math.atan2(y, x) * 180 / Math.PI);
    return { q: "Find the direction of the vector (" + x + ", " + y + "), to 1 decimal place.",
             a: "tan \u03b8 = " + y + "/" + x + ", so \u03b8 = " + ang + "\u00b0 above the horizontal", n: ang };
  };
  M.vector_direction_sh = "The direction is the angle the vector makes with the horizontal, given by tan \u03b8 = y/x, so \u03b8 = tan\u207b\u00b9(y/x).";

  D.vector_components_sh = function (r) {
    var R = ri(r, 5, 20) * 2, ang = one([30, 45, 60], r);
    var rad = ang * Math.PI / 180;
    var hx = rt(R * Math.cos(rad)), vy = rt(R * Math.sin(rad));
    return { q: "Resolve a force of " + R + " N acting at " + ang + "\u00b0 above the horizontal into its components.",
             a: "Horizontal = " + R + " cos " + ang + "\u00b0 = " + hx + " N; vertical = " + R + " sin " + ang + "\u00b0 = " + vy + " N", n: hx };
  };
  M.vector_components_sh = "Resolution uses the same right-angled triangle as addition: the horizontal part is R cos \u03b8 and the vertical part is R sin \u03b8.";

  D.scalar_product_sh = function (r) {
    var a1 = nz(r, -6, 6), a2 = nz(r, -6, 6), b1 = nz(r, -6, 6), b2 = nz(r, -6, 6);
    var dot = a1 * b1 + a2 * b2;
    var kind = dot === 0 ? "the vectors are perpendicular" : dot > 0 ? "the angle between them is acute" : "the angle between them is obtuse";
    return { q: "Find the scalar product of a = (" + mn(a1) + ", " + mn(a2) + ") and b = (" + mn(b1) + ", " + mn(b2) + ") and say what it tells you.",
             a: "a\u00b7b = " + mn(dot) + ", so " + kind + ".", n: dot };
  };
  M.scalar_product_sh = "a\u00b7b = x\u2081x\u2082 + y\u2081y\u2082. Zero means the vectors are perpendicular, positive means an acute angle and negative means an obtuse angle.";

  D.scalar_vector_sort_sh = function (r) {
    var scal = ["20 kg", "35 \u00b0C", "4 hours", "L$500", "12 litres"],
        vecs = ["30 m due north", "60 km/h eastwards", "15 N downwards", "5 m s\u207b\u00b9 at 045\u00b0", "200 km on a bearing of 180\u00b0"];
    var isV = r() < 0.5, v = isV ? one(vecs, r) : one(scal, r);
    return { q: "Is " + v + " a scalar or a vector quantity? Explain.",
             a: isV ? "A vector \u2014 it has both a size and a stated direction." : "A scalar \u2014 it has size only, with no direction." };
  };
  M.scalar_vector_sort_sh = "A scalar has magnitude only; a vector has magnitude and direction. Ask whether the direction matters to the quantity.";

  D.equilibrium_sh = function (r) {
    var F = ri(r, 3, 9) * 2, ang = one([30, 45, 60], r);
    var v = rt(F * Math.sin(ang * Math.PI / 180));
    return { q: "A body is held in equilibrium by a rope at " + ang + "\u00b0 to the horizontal with tension " + F + " N. Find the upward component balancing its weight.",
             a: F + " sin " + ang + "\u00b0 = " + v + " N", n: v };
  };
  M.equilibrium_sh = "In static equilibrium the resultant force is zero, so the upward components must exactly balance the weight and the horizontal components must cancel.";

  D.vector_bearing_sh = function (r) {
    var e = ri(r, 5, 20), n = ri(r, 5, 20);
    var d = rt(Math.sqrt(e * e + n * n)), br = rt(Math.atan2(e, n) * 180 / Math.PI);
    return { q: "A ship sails " + e + " km east and then " + n + " km north. Find its distance from the start and its three-figure bearing.",
             a: "Distance = \u221a(" + e + "\u00b2 + " + n + "\u00b2) = " + d + " km; bearing = " + br + "\u00b0", n: d };
  };
  M.vector_bearing_sh = "Treat the two legs as components: the distance is the resultant by Pythagoras, and the bearing is measured clockwise from north, so tan \u03b8 = east/north.";

  /* ============================ RIGID MOTION AND TRANSFORMATIONS ============================ */
  D.translate_pt_sh = function (r) {
    var x = nz(r, -6, 6), y = nz(r, -6, 6), a = nz(r, -6, 6), b = nz(r, -6, 6);
    return { q: "The point (" + mn(x) + ", " + mn(y) + ") is translated by the vector (" + mn(a) + ", " + mn(b) + "). Find the image.",
             a: "(" + mn(x + a) + ", " + mn(y + b) + ")", n: x + a + y + b };
  };
  M.translate_pt_sh = "Add the translation vector to the coordinates: the first number moves the point horizontally and the second vertically.";

  D.reflect_pt_sh = function (r) {
    var x = nz(r, -7, 7), y = nz(r, -7, 7);
    var kinds = [
      { m: "the x-axis", f: function (a, b) { return [a, -b]; }, why: "the y coordinate changes sign" },
      { m: "the y-axis", f: function (a, b) { return [-a, b]; }, why: "the x coordinate changes sign" },
      { m: "the line y = x", f: function (a, b) { return [b, a]; }, why: "the coordinates are swapped" },
      { m: "the line y = \u2212x", f: function (a, b) { return [-b, -a]; }, why: "the coordinates are swapped and both change sign" }
    ];
    var k = one(kinds, r), im = k.f(x, y);
    return { q: "Find the image of (" + mn(x) + ", " + mn(y) + ") under a reflection in " + k.m + ".",
             a: "(" + mn(im[0]) + ", " + mn(im[1]) + ") \u2014 " + k.why, n: im[0] + im[1] };
  };
  M.reflect_pt_sh = "Each mirror line has its own coordinate rule: the x-axis flips y, the y-axis flips x, y = x swaps the coordinates and y = \u2212x swaps and flips both.";

  D.rotate_pt_sh = function (r) {
    var x = nz(r, -7, 7), y = nz(r, -7, 7), ang = one([90, 180, 270], r);
    var im = ang === 90 ? [-y, x] : ang === 180 ? [-x, -y] : [y, -x];
    return { q: "Find the image of (" + mn(x) + ", " + mn(y) + ") under a rotation of " + ang + "\u00b0 anticlockwise about the origin.",
             a: "(" + mn(im[0]) + ", " + mn(im[1]) + ")", n: im[0] + im[1] };
  };
  M.rotate_pt_sh = "About the origin, 90\u00b0 anticlockwise maps (x, y) to (\u2212y, x), 180\u00b0 to (\u2212x, \u2212y) and 270\u00b0 to (y, \u2212x).";

  D.rotate_pt2_sh = D.rotate_pt_sh;
  M.rotate_pt2_sh = M.rotate_pt_sh;

  D.enlarge_pt_sh = function (r) {
    var x = nz(r, -6, 6), y = nz(r, -6, 6), k = one([2, 3, -2, -3, 0.5], r);
    var im = [k * x, k * y];
    return { q: "Find the image of (" + mn(x) + ", " + mn(y) + ") under an enlargement, centre the origin, scale factor " + k + ".",
             a: "(" + (im[0] % 1 ? im[0] : mn(im[0])) + ", " + (im[1] % 1 ? im[1] : mn(im[1])) + ")", n: im[0] + im[1] };
  };
  M.enlarge_pt_sh = "Multiply both coordinates by the scale factor. A negative factor also moves the image to the opposite side of the centre.";

  D.negative_enlarge_sh = function (r) {
    var x = ri(r, 1, 6), y = ri(r, 1, 6), k = one([-2, -3], r);
    return { q: "Describe fully the transformation that maps (" + x + ", " + y + ") to (" + mn(k * x) + ", " + mn(k * y) + ").",
             a: "An enlargement with centre the origin and scale factor " + k + "; the negative sign means the image is on the opposite side of the centre and inverted.", n: k };
  };
  M.negative_enlarge_sh = "Compare the coordinates: if both are multiplied by the same number it is an enlargement, and a negative factor puts the image opposite the centre.";

  D.symmetry_order_sh = function (r) {
    var shapes = [
      { s: "an equilateral triangle", o: 3, l: 3 }, { s: "a square", o: 4, l: 4 }, { s: "a rectangle", o: 2, l: 2 },
      { s: "a regular pentagon", o: 5, l: 5 }, { s: "a regular hexagon", o: 6, l: 6 }, { s: "a rhombus", o: 2, l: 2 }
    ];
    var k = one(shapes, r);
    return { q: "State the order of rotational symmetry of " + k.s + " and the angle of each turn.",
             a: "Order " + k.o + ", turning through " + (360 / k.o) + "\u00b0 each time; it also has " + k.l + " line(s) of symmetry.", n: k.o };
  };
  M.symmetry_order_sh = "The order of rotational symmetry is the number of times a shape fits onto itself in one full turn, so the angle of each turn is 360\u00b0 divided by that order.";

  D.congruence_test_sh = function (r) {
    var kinds = [
      { t: "a translation", c: true, why: "every length and angle is preserved" },
      { t: "a reflection", c: true, why: "the image is a mirror copy of the same size" },
      { t: "a rotation", c: true, why: "turning a shape does not change its size" },
      { t: "an enlargement", c: false, why: "the size changes, so the image is similar but not congruent" }
    ];
    var k = one(kinds, r);
    return { q: "Is " + k.t + " a rigid motion? Explain.",
             a: k.c ? "Yes \u2014 " + k.why + ", so object and image are congruent." : "No \u2014 " + k.why + "." };
  };
  M.congruence_test_sh = "A rigid motion preserves every length and angle, so the image is congruent to the object. Only enlargement changes size.";

  D.combined_transform_sh = function (r) {
    var x = nz(r, -5, 5), y = nz(r, -5, 5), a = nz(r, -4, 4), b = nz(r, -4, 4);
    var step1 = [x, -y];                 /* reflection in the x-axis */
    var step2 = [step1[0] + a, step1[1] + b];
    return { q: "The point (" + mn(x) + ", " + mn(y) + ") is reflected in the x-axis and the image is then translated by (" + mn(a) + ", " + mn(b) + "). Find the final image.",
             a: "Reflection gives (" + mn(step1[0]) + ", " + mn(step1[1]) + "); the translation gives (" + mn(step2[0]) + ", " + mn(step2[1]) + ")", n: step2[0] + step2[1] };
  };
  M.combined_transform_sh = "Apply the transformations in the order given, using the coordinates produced by each step as the starting point for the next.";

  D.describe_transform_sh = function (r) {
    var x = nz(r, -5, 5), y = nz(r, -5, 5);
    var kinds = [
      { n: "reflection in the x-axis", f: function (a, b) { return [a, -b]; } },
      { n: "reflection in the y-axis", f: function (a, b) { return [-a, b]; } },
      { n: "rotation of 180\u00b0 about the origin", f: function (a, b) { return [-a, -b]; } },
      { n: "reflection in the line y = x", f: function (a, b) { return [b, a]; } }
    ];
    var k = one(kinds, r), im = k.f(x, y);
    return { q: "Describe fully the single transformation that maps (" + mn(x) + ", " + mn(y) + ") to (" + mn(im[0]) + ", " + mn(im[1]) + ").",
             a: "A " + k.n + "." };
  };
  M.describe_transform_sh = "Compare the object and image coordinates: a sign change on y is the x-axis, on x the y-axis, on both a half turn, and a swap is the line y = x.";

  D.scale_area_sh = function (r) {
    var num = one([2, 3, 4, 5], r), den = one([1, 2], r), A = ri(r, 4, 20);
    var k = num / den, res = rt(A * k * k);
    var ks = den === 1 ? String(num) : (num % den === 0 ? String(num / den) : frac(num, den));
    return { q: "Two similar figures have a length scale factor of " + ks + ". The smaller has area " + A + " cm\u00b2. Find the area of the other.",
             a: "Area factor = (" + ks + ")\u00b2 = " + (k * k === Math.round(k * k) ? k * k : rt(k * k)) + ", so the area is " + res + " cm\u00b2", n: res };
  };
  M.scale_area_sh = "Area depends on two lengths, so the area scale factor is the square of the length scale factor.";

  D.scale_volume_sh = function (r) {
    var k = one([2, 3, 4, 5], r), V = ri(r, 3, 15);
    var res = V * k * k * k;
    return { q: "Two similar solids have a length scale factor of " + k + ". The smaller has volume " + V + " cm\u00b3. Find the volume of the larger.",
             a: "Volume factor = " + k + "\u00b3 = " + (k * k * k) + ", so the volume is " + res + " cm\u00b3", n: res };
  };
  M.scale_volume_sh = "Volume depends on three lengths, so the volume scale factor is the cube of the length scale factor.";

  D.similar_ratio_sh = function (r) {
    var k = ri(r, 2, 6), small = ri(r, 3, 12);
    return { q: "Two similar triangles have areas " + small + " cm\u00b2 and " + (small * k * k) + " cm\u00b2. Find the ratio of their corresponding sides.",
             a: "Area ratio = " + (k * k) + " : 1, so the length ratio is " + k + " : 1", n: k };
  };
  M.similar_ratio_sh = "Take the square root of the area ratio to get the length ratio, because area scales as the square of length.";

  /* ============================ STATISTICS ============================ */
  D.mean_sh = function (r) {
    var n = ri(r, 5, 7), vals = [], i, s = 0;
    for (i = 0; i < n; i++) { var v = ri(r, 3, 40); vals.push(v); s += v; }
    return { q: "Find the mean of " + vals.join(", ") + ".", a: s + " \u00f7 " + n + " = " + rt(dp(s / n, 2)), n: rt(dp(s / n, 2)) };
  };
  M.mean_sh = "Add all the values together and divide by how many there are.";

  D.median_sh = function (r) {
    var n = ri(r, 5, 8) * 2 - 1, vals = [], i;
    for (i = 0; i < n; i++) vals.push(ri(r, 2, 50));
    var sorted = vals.slice().sort(function (a, b) { return a - b; });
    var med = sorted[(n - 1) / 2];
    return { q: "Find the median of " + vals.join(", ") + ".", a: "In order, the middle value is " + med, n: med };
  };
  M.median_sh = "Put the values in order first; the median is the middle one, or the mean of the two middle values when there is an even number.";

  D.mode_sh = function (r) {
    var n = ri(r, 7, 10), vals = [], i, mode = ri(r, 3, 30);
    vals.push(mode, mode, mode);
    for (i = 3; i < n; i++) { var v = ri(r, 3, 30); if (v === mode) v++; vals.push(v); }
    var counts = {};
    vals.forEach(function (v) { counts[v] = (counts[v] || 0) + 1; });
    var best = +Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; })[0];
    return { q: "Find the mode of " + vals.join(", ") + ".", a: best + " occurs most often, so the mode is " + best, n: best };
  };
  M.mode_sh = "The mode is the value that occurs most often; count how many times each value appears.";

  D.range_sh = function (r) {
    var n = ri(r, 5, 8), vals = [], i;
    for (i = 0; i < n; i++) vals.push(ri(r, 2, 60));
    var mx = Math.max.apply(null, vals), mnn = Math.min.apply(null, vals);
    return { q: "Find the range of " + vals.join(", ") + ".", a: mx + " \u2212 " + mnn + " = " + (mx - mnn), n: mx - mnn };
  };
  M.range_sh = "The range is the highest value minus the lowest value; it measures the total spread of the data.";

  D.range_stat_sh = D.range_sh;
  M.range_stat_sh = M.range_sh;

  D.ratio_simplify_sh = function (r) {
    var g = ri(r, 2, 8), a = ri(r, 2, 9), b = ri(r, 2, 9);
    return { q: "Simplify the ratio " + (a * g) + " : " + (b * g) + ".", a: a + " : " + b, n: a + b };
  };
  M.ratio_simplify_sh = "Divide both parts by their highest common factor, exactly as you would simplify a fraction.";

  D.ratio_share_sh = function (r) {
    var a = ri(r, 2, 5), b = ri(r, 2, 5), part = ri(r, 2, 9) * 100;
    var total = (a + b) * part;
    return { q: "Share " + money(total) + " in the ratio " + a + " : " + b + ".",
             a: "Total parts = " + (a + b) + ", one part = " + money(part) + ", so the shares are " + money(a * part) + " and " + money(b * part),
             n: a * part };
  };
  M.ratio_share_sh = "Add the parts, divide the total by that sum to find one part, then multiply by each number in the ratio.";

  D.ratio_proportion_sh = function (r) {
    var a = ri(r, 2, 9), k = ri(r, 2, 8), c = ri(r, 2, 9);
    var b = a * k, d = c * k;
    return { q: "Solve the proportion " + a + " : " + b + " = " + c + " : x.", a: "x = " + d, n: d };
  };
  M.ratio_proportion_sh = "Write the proportion as two equal fractions and cross multiply, or use the scale factor between the matching terms.";

  D.rate_sh = function (r) {
    var dist = ri(r, 6, 25) * 15, hrs = one([2, 3, 4, 5, 6], r);
    while (dist % hrs !== 0) dist += 15;
    return { q: "A car travels " + dist + " km in " + hrs + " hours. Find its average speed.", a: dist + " \u00f7 " + hrs + " = " + (dist / hrs) + " km/h", n: dist / hrs };
  };
  M.rate_sh = "A rate compares two different quantities; average speed is total distance divided by total time.";

  D.percent_of_sh = function (r) {
    var pc = ri(r, 2, 45), amt = ri(r, 2, 40) * 100;
    var res = amt * pc / 100;
    return { q: "Find " + pc + "% of " + money(amt) + ".", a: pc + "/100 \u00d7 " + money(amt) + " = " + money(res), n: res };
  };
  M.percent_of_sh = "Write the percentage as a fraction over 100 and multiply it by the amount.";

  D.percent_change_sh = function (r) {
    var orig = ri(r, 4, 40) * 100, pc = ri(r, 5, 40), up = r() < 0.5;
    var res = up ? orig * (1 + pc / 100) : orig * (1 - pc / 100);
    return { q: "A price of " + money(orig) + " is " + (up ? "increased" : "reduced") + " by " + pc + "%. Find the new price.",
             a: money(orig) + " \u00d7 " + (up ? (1 + pc / 100) : (1 - pc / 100)) + " = " + money(res), n: res };
  };
  M.percent_change_sh = "An increase multiplies by (1 + r/100) and a decrease by (1 \u2212 r/100); this is quicker than finding the change and adding or subtracting it.";

  D.profit_loss_sh = function (r) {
    var cost = ri(r, 2, 40) * 100, pc = ri(r, 5, 40), sell = r() < 0.7 ? cost * (1 + pc / 100) : cost * (1 - pc / 100);
    var kind = sell > cost ? "profit" : "loss";
    return { q: "A trader buys goods for " + money(cost) + " and sells them for " + money(sell) + ". Find the percentage " + kind + ".",
             a: kind + " = " + money(Math.abs(sell - cost)) + "; " + Math.abs(sell - cost) / cost * 100 + "% " + kind, n: pc };
  };
  M.profit_loss_sh = "Find the difference between the selling price and the cost price, then express it as a percentage of the COST price, not of the selling price.";

  D.profit_share_sh = function (r) {
    var parts = [ri(r, 2, 5), ri(r, 2, 5), ri(r, 2, 5)];
    var sum = parts[0] + parts[1] + parts[2], one_ = ri(r, 2, 9) * 1000, total = sum * one_;
    var largest = Math.max.apply(null, parts);
    return { q: "Three partners share a profit of " + money(total) + " in the ratio " + parts.join(" : ") + ". Find the largest share.",
             a: "Total parts = " + sum + ", one part = " + money(one_) + ", so the largest share is " + money(largest * one_),
             n: largest * one_ };
  };
  M.profit_share_sh = "Add the parts of the ratio, divide the profit by that total to find the value of one part, then multiply by the largest part.";

  D.vat_sh = function (r) {
    var rate = one([10, 12, 15], r), amt = ri(r, 5, 90) * 100;
    var vat = amt * rate / 100;
    return { q: "A bill of " + money(amt) + " attracts VAT of " + rate + "%. Find the VAT and the total paid.",
             a: "VAT = " + money(vat) + "; total = " + money(amt + vat), n: vat };
  };
  M.vat_sh = "The VAT is the stated percentage of the bill, and the total is the bill plus that VAT.";

  D.household_bill_sh = function (r) {
    var rate = ri(r, 2, 8) * 25, units = ri(r, 40, 300), standing = ri(r, 1, 6) * 100;
    var total = rate * units + standing;
    return { q: "An electricity bill charges " + money(rate) + " per unit plus a standing charge of " + money(standing) + ". Find the bill for " + units + " units.",
             a: units + " \u00d7 " + money(rate) + " + " + money(standing) + " = " + money(total), n: total };
  };
  M.household_bill_sh = "This is partial variation: multiply the units used by the rate per unit, then add the fixed standing charge.";

  D.simple_interest_sh = function (r) {
    var P = ri(r, 2, 40) * 1000, R = ri(r, 3, 15), T = ri(r, 2, 6);
    var I = P * R * T / 100;
    return { q: "Find the simple interest on " + money(P) + " at " + R + "% per annum for " + T + " years, and the total amount.",
             a: "I = " + money(P) + " \u00d7 " + R + " \u00d7 " + T + "/100 = " + money(I) + "; amount = " + money(P + I), n: I };
  };
  M.simple_interest_sh = "I = PRT/100, with the rate in percent and the time in years; simple interest is always charged on the original principal only.";

  D.compound_interest_sh = function (r) {
    var P = ri(r, 2, 20) * 10000, R = ri(r, 4, 12), n = ri(r, 2, 4);
    var A = P * Math.pow(1 + R / 100, n);
    return { q: "Find the amount when " + money(P) + " is invested at " + R + "% per annum compound interest for " + n + " years.",
             a: "A = " + money(P) + "(1 + " + R + "/100)" + sup(n) + " = " + money(P) + "(" + (1 + R / 100) + ")" + sup(n) + " = " + money(rt(A)) + "; interest = " + money(rt(A - P)), n: rt(A) };
  };
  M.compound_interest_sh = "A = P(1 + R/100)\u207f. The interest is added to the principal each year, so each year's interest is larger than the last.";

  D.depreciation_sh = function (r) {
    var P = ri(r, 5, 60) * 10000, R = ri(r, 5, 25), n = ri(r, 2, 3);
    var V = P * Math.pow(1 - R / 100, n);
    return { q: "A car worth " + money(P) + " depreciates by " + R + "% each year. Find its value after " + n + " years.",
             a: "V = " + money(P) + "(1 \u2212 " + R + "/100)" + sup(n) + " = " + money(rt(V)), n: rt(V) };
  };
  M.depreciation_sh = "Depreciation is compound interest run backwards: multiply by (1 \u2212 R/100) once for each year.";

  D.hire_purchase_sh = function (r) {
    var cash = ri(r, 20, 90) * 1000, dep = ri(r, 1, 4) * 5000, n = ri(r, 6, 24);
    var inst = ri(r, 2, 9) * 250, total = dep + n * inst;
    var extra = total - cash;
    return { q: "An article has a cash price of " + money(cash) + ". On hire purchase a deposit of " + money(dep) + " is paid with " + n + " instalments of " + money(inst) + ". Find the extra cost of hire purchase.",
             a: "Hire purchase total = " + money(dep) + " + " + money(n * inst) + " = " + money(total) + ", so the extra is " + money(extra),
             n: extra };
  };
  M.hire_purchase_sh = "Add the deposit to all the instalments to get the hire purchase price, then subtract the cash price to find the extra paid for the credit.";

  D.scale_drawing_sh = function (r) {
    var scale = one([20000, 25000, 50000], r), cm = ri(r, 3, 14);
    var real = scale * cm / 100000;   /* km */
    return { q: "On a map of scale 1 : " + scale.toLocaleString("en-US") + " two towns are " + cm + " cm apart. Find the real distance in km.",
             a: cm + " \u00d7 " + scale.toLocaleString("en-US") + " cm = " + (scale * cm).toLocaleString("en-US") + " cm = " + real + " km", n: real };
  };
  M.scale_drawing_sh = "Multiply the map distance by the scale, then convert centimetres to kilometres by dividing by 100 000.";

  D.grouped_mean_sh = function (r) {
    var classes = [[0, 9], [10, 19], [20, 29], [30, 39]], freq = [], i, sf = 0, sfreq = 0;
    for (i = 0; i < classes.length; i++) { var f = ri(r, 2, 12); freq.push(f); sf += (classes[i][0] + classes[i][1]) / 2 * f; sfreq += f; }
    var mean = rt(dp(sf / sfreq, 2));
    return { q: "The frequencies of the classes 0\u20139, 10\u201319, 20\u201329 and 30\u201339 are " + freq.join(", ") + ". Estimate the mean.",
             a: "\u03a3fx = " + sf + " and \u03a3f = " + sfreq + ", so the mean is " + mean, n: mean };
  };
  M.grouped_mean_sh = "Use the class mark (midpoint) of each class: mean = \u03a3fx \u00f7 \u03a3f. The result is an estimate because every value is treated as the midpoint.";

  D.class_mark_sh = function (r) {
    var lo = ri(r, 1, 8) * 10, w = one([5, 10, 20], r);
    var hi = lo + w - 1, mark = (lo + hi) / 2;
    return { q: "Find the class mark and the class interval of the class " + lo + "\u2013" + hi + ".",
             a: "Class mark = (" + lo + " + " + hi + ")/2 = " + mark + "; class interval = " + w, n: mark };
  };
  M.class_mark_sh = "The class mark is the midpoint of the class, and the class interval is the width from one lower boundary to the next.";

  D.cumulative_freq_sh = function (r) {
    var f = [], i, run = 0, cum = [];
    for (i = 0; i < 4; i++) { var v = ri(r, 3, 15); f.push(v); run += v; cum.push(run); }
    return { q: "The frequencies of four classes are " + f.join(", ") + ". Write the cumulative frequencies and state the total.",
             a: cum.join(", ") + "; total = " + run, n: run };
  };
  M.cumulative_freq_sh = "Add each frequency to the running total as you go up the classes; the last cumulative frequency equals the total number of data.";

  D.quartile_sh = function (r) {
    var n = ri(r, 8, 20) * 4;
    var q1 = ri(r, 10, 30), q3 = q1 + ri(r, 8, 25), med = q1 + Math.round((q3 - q1) / 2);
    return { q: "A cumulative frequency curve for " + n + " pupils gives a lower quartile of " + q1 + " and an upper quartile of " + q3 + ". Find the median estimate and the interquartile range.",
             a: "The median is read at " + (n / 2) + ", which is about " + med + "; IQR = " + q3 + " \u2212 " + q1 + " = " + (q3 - q1), n: q3 - q1 };
  };
  M.quartile_sh = "Read the median at half the total frequency and the quartiles at a quarter and three quarters; the interquartile range is Q3 \u2212 Q1.";

  D.iqr_sh = D.quartile_sh;
  M.iqr_sh = M.quartile_sh;

  D.pie_angle_sh = function (r) {
    var total = ri(r, 10, 40) * 10, part = ri(r, 2, total - 1);
    var ang = rt(part / total * 360);
    return { q: "In a pie chart of " + total + " pupils, " + part + " offer Biology. Find the sector angle for Biology.",
             a: part + "/" + total + " \u00d7 360\u00b0 = " + ang + "\u00b0", n: ang };
  };
  M.pie_angle_sh = "A pie chart shows the whole as 360\u00b0, so multiply the fraction of the total by 360.";

  D.percentile_sh = function (r) {
    var n = ri(r, 10, 40) * 10, pc = one([25, 50, 75, 80, 90], r);
    var cnt = n * pc / 100;
    return { q: "In an examination " + n + " candidates sat. How many scored at or below the " + ordNum(pc) + " percentile mark?",
             a: pc + "% of " + n + " = " + cnt + " candidates", n: cnt };
  };
  M.percentile_sh = "A percentile is a percentage of the data: multiply the total number by the percentile and divide by 100.";

  D.variance_sh = function (r) {
    var n = 5, vals = [], i, s = 0;
    for (i = 0; i < n; i++) { var v = ri(r, 2, 15); vals.push(v); s += v; }
    var mean = s / n, ss = 0;
    vals.forEach(function (v) { ss += (v - mean) * (v - mean); });
    var varc = rt(dp(ss / n, 3));
    return { q: "Find the variance of " + vals.join(", ") + ".", a: "Mean = " + rt(mean) + "; \u03a3(x \u2212 x\u0304)\u00b2 = " + rt(ss) + "; variance = " + varc, n: varc };
  };
  M.variance_sh = "Find the mean, square each deviation from the mean, add them and divide by the number of values.";

  D.std_dev_sh = function (r) {
    var n = 5, vals = [], i, s = 0;
    for (i = 0; i < n; i++) { var v = ri(r, 2, 15); vals.push(v); s += v; }
    var mean = s / n, ss = 0;
    vals.forEach(function (v) { ss += (v - mean) * (v - mean); });
    var sd = rt(Math.sqrt(ss / n));
    return { q: "Find the standard deviation of " + vals.join(", ") + " to 2 decimal places.",
             a: "Variance = " + rt(ss / n) + ", so \u03c3 = \u221a" + rt(ss / n) + " = " + sd, n: sd };
  };
  M.std_dev_sh = "The standard deviation is the square root of the variance; taking the root returns the measure to the original units of the data.";

  D.deviation_sh = function (r) {
    var n = 5, vals = [], i, s = 0;
    for (i = 0; i < n; i++) { var v = ri(r, 2, 20); vals.push(v); s += v; }
    var mean = s / n;
    return { q: "Find the deviation of the largest value in " + vals.join(", ") + " from the mean.",
             a: "Mean = " + rt(mean) + "; deviation = " + Math.max.apply(null, vals) + " \u2212 " + rt(mean) + " = " + rt(Math.max.apply(null, vals) - mean),
             n: rt(Math.max.apply(null, vals) - mean) };
  };
  M.deviation_sh = "The deviation of a value is its distance from the mean, x \u2212 x\u0304, and it may be positive or negative.";

  D.compare_spread_sh = function (r) {
    var m = ri(r, 40, 80), s1 = rt(r() * 3 + 0.5), s2 = rt(s1 + r() * 8 + 2);
    return { q: "Two archers both average " + m + " points, with standard deviations " + s1 + " and " + s2 + ". Which is more consistent, and why?",
             a: "The archer with \u03c3 = " + s1 + ", because a smaller standard deviation means the scores stay closer to the mean.", n: rt(s1) };
  };
  M.compare_spread_sh = "When the means are equal, the smaller standard deviation shows the more consistent performer, because the values cluster nearer the mean.";

  /* ============================ INDICES AND LOGARITHMS ============================ */
  D.index_law_sh = function (r) {
    var a = ri(r, 2, 6), m = ri(r, 2, 5), n = ri(r, 1, 4);
    var kinds = [
      { e: a + sup(m) + " \u00d7 " + a + sup(n), v: Math.pow(a, m + n), s: a + sup((m + n)) },
      { e: a + sup((m + n)) + " \u00f7 " + a + sup(n), v: Math.pow(a, m), s: a + sup(m) },
      { e: "(" + a + sup(m) + ")" + sup(n), v: Math.pow(a, m * n), s: a + sup(m * n) }
    ];
    var k = one(kinds, r);
    return { q: "Simplify and evaluate " + k.e + ".", a: k.s + " = " + k.v, n: k.v };
  };
  M.index_law_sh = "For the same base, multiplying adds the indices, dividing subtracts them, and a power of a power multiplies them.";

  D.index_negative_sh = function (r) {
    var a = ri(r, 2, 6), n = ri(r, 1, 3);
    var v = 1 / Math.pow(a, n);
    return { q: "Evaluate " + a + sup("\u2212" + n) + ".", a: "1/" + a + sup(n) + " = " + simpFrac(1, Math.pow(a, n)), n: rt(v) };
  };
  M.index_negative_sh = "A negative index means the reciprocal: a\u207b\u207f = 1/a\u207f.";

  D.index_rational_sh = function (r) {
    var base = one([8, 27, 64, 16, 81], r), root = base === 16 || base === 81 ? 2 : 3;
    var pow = ri(r, 1, 2);
    var v = Math.pow(Math.pow(base, 1 / root), pow);
    return { q: "Evaluate " + base + sup(pow + "/" + root) + ".",
             a: "the " + ord(root) + " root of " + base + " is " + Math.pow(base, 1 / root) +
                "; raising that to the power " + pow + " gives " + v, n: v };
  };
  M.index_rational_sh = "a^(m/n) means take the nth root first and then raise the result to the power m; doing the root first keeps the numbers small.";

  D.index_equation_sh = function (r) {
    /* The index must be x on its own, otherwise the equation has more than one
       whole-number solution (3^(x+2) = 3^4 is satisfied by x = 2 AND x = 1+1). */
    var a = one([2, 3, 5], r), x = ri(r, 2, 5), v = Math.pow(a, x);
    return { q: "Solve " + a + sup("x") + " = " + v.toLocaleString("en-US") + ".",
             a: "Write " + v.toLocaleString("en-US") + " as a power of " + a + ", which gives " +
                a + sup(x) + "; equating the indices, x = " + x, n: x };
  };
  M.index_equation_sh = "Write both sides with the same base, then equate the indices and solve the resulting linear equation.";

  D.log_eval_sh = function (r) {
    var b = one([2, 3, 5, 10], r), x = ri(r, 2, 6), N = Math.pow(b, x);
    return { q: "Evaluate log" + sub(b) + " " + N.toLocaleString("en-US") + ".",
             a: b + sup(x) + " = " + N.toLocaleString("en-US") + ", so log" + sub(b) + " " +
                N.toLocaleString("en-US") + " = " + x, n: x };
  };
  M.log_eval_sh = "A logarithm asks what power the base must be raised to in order to give the number: if a\u02e3 = N then log_a N = x.";

  D.log_law_sh = function (r) {
    var m = ri(r, 2, 9), n = ri(r, 2, 9), k = one([2, 3], r);
    var kinds = [
      { e: "log(" + m + " \u00d7 " + n + ")", s: "log " + m + " + log " + n, why: "the log of a product is the sum of the logs" },
      { e: "log(" + m + "/" + n + ")", s: "log " + m + " \u2212 log " + n, why: "the log of a quotient is the difference of the logs" },
      { e: "log " + m + sup(k), s: k + " log " + m, why: "the log of a power brings the index to the front" }
    ];
    var t = one(kinds, r);
    return { q: "Express " + t.e + " in terms of simpler logarithms.", a: t.s + " \u2014 " + t.why };
  };
  M.log_law_sh = "log(mn) = log m + log n, log(m/n) = log m \u2212 log n and log m\u207f = n log m. These turn multiplication into addition.";

  D.log_equation_sh = function (r) {
    var b = one([2, 3, 5], r), x = ri(r, 2, 5), c = ri(r, 1, 9);
    var N = Math.pow(b, x);
    return { q: "Solve log" + sub(b) + "(x + " + c + ") = " + x + ".",
             a: "In index form x + " + c + " = " + b + sup(x) + " = " + N + ", so x = " + mn(N - c), n: N - c };
  };
  M.log_equation_sh = "Rewrite the logarithmic statement in index form, then solve the ordinary equation that results.";

  D.log_change_base_sh = function (r) {
    var a = one([2, 4, 8], r), N = ri(r, 2, 9);
    var v = rt(Math.log(N) / Math.log(a));
    return { q: "Evaluate log" + sub(a) + " " + N + " using the change-of-base formula, to 2 d.p.",
             a: "log " + N + " \u00f7 log " + a + " = " + v, n: v };
  };
  M.log_change_base_sh = "log_a b = log b / log a, which lets you evaluate a logarithm in any base using base 10 or base e.";

  D.log_domain_sh = function (r) {
    var a = ri(r, 1, 6);
    return { q: "Find the values of x for which log(x \u2212 " + a + ") is defined.",
             a: "x \u2212 " + a + " > 0, so x > " + a };
  };
  M.log_domain_sh = "A logarithm is defined only for a positive argument, so set the expression inside greater than zero and solve.";

  D.exp_eval_sh = function (r) {
    var a = one([2, 3, 5], r), x = ri(r, 2, 5);
    var v = Math.pow(a, x);
    return { q: "Evaluate f(x) = " + a + "\u02e3 when x = " + x + ".", a: a + sup(x) + " = " + v, n: v };
  };
  M.exp_eval_sh = "Substitute the value of x into the index and multiply the base by itself that many times.";

  D.exp_growth_sh = function (r) {
    var P = ri(r, 2, 20) * 1000, rate = ri(r, 2, 12), n = ri(r, 2, 5);
    var A = P * Math.pow(1 + rate / 100, n);
    return { q: "A population of " + P.toLocaleString("en-US") + " grows at " + rate + "% a year. Find the population after " + n + " years.",
             a: P.toLocaleString("en-US") + " \u00d7 (1 + " + rate + "/100)" + sup(n) + " = " + Math.round(A).toLocaleString("en-US"), n: Math.round(A) };
  };
  M.exp_growth_sh = "Exponential growth multiplies by the same factor each period: A = P(1 + r/100)\u207f.";

  D.exp_decay_sh = function (r) {
    var P = ri(r, 4, 40) * 100, half = ri(r, 2, 6), n = ri(r, 2, 4);
    var A = P / Math.pow(2, n);
    return { q: "A radioactive sample of " + P + " g has a half-life of " + half + " days. Find the mass left after " + (half * n) + " days.",
             a: (half * n) + " days is " + n + " half-lives, so " + P + " \u00d7 (1/2)" + sup(n) + " = " + A + " g", n: A };
  };
  M.exp_decay_sh = "Each half-life halves the amount, so after n half-lives the mass is the original times (1/2)\u207f.";

  D.exp_equation_sh = function (r) {
    var a = one([2, 3, 5, 10], r), x = rt(r() * 4 + 1);
    var N = Math.round(Math.pow(a, x));
    var xx = rt(Math.log(N) / Math.log(a));
    return { q: "Solve " + a + "\u02e3 = " + N + " using logarithms, to 2 d.p.",
             a: "x = log " + N + "/log " + a + " = " + xx, n: xx };
  };
  M.exp_equation_sh = "Take logarithms of both sides so the unknown comes down from the index, then divide by the log of the base.";

  /* ============================ SURDS ============================ */
  D.surd_simplify_sh = function (r) {
    var k = ri(r, 2, 7), m = one([2, 3, 5, 6, 7], r), n = k * k * m;
    return { q: "Simplify \u221a" + n + ".", a: "\u221a(" + (k * k) + " \u00d7 " + m + ") = " + k + "\u221a" + m, n: k };
  };
  M.surd_simplify_sh = "Find the largest square factor of the number, take its root outside the surd and leave the rest inside.";

  D.surd_add_sh = function (r) {
    var m = one([2, 3, 5, 7], r), a = ri(r, 2, 8), b = ri(r, 2, 8), c = ri(r, 2, 8);
    var res = a + b - c;
    return { q: "Simplify " + a + "\u221a" + m + " + " + b + "\u221a" + m + " \u2212 " + c + "\u221a" + m + ".",
             a: (a + b) + " \u2212 " + c + " = " + res + ", so the answer is " + res + "\u221a" + m, n: res };
  };
  M.surd_add_sh = "Only like surds can be added or subtracted: add the numbers in front and keep the root unchanged.";

  D.surd_mul_sh = function (r) {
    var a = ri(r, 2, 9), b = ri(r, 2, 9);
    var p = a * b, sf = sqFactor(p);
    var out = Math.sqrt(sf), in_ = p / sf;
    return { q: "Simplify \u221a" + a + " \u00d7 \u221a" + b + ".",
             a: "\u221a" + p + (in_ === 1 ? " = " + out : " = " + (out === 1 ? "" : out) + "\u221a" + in_), n: in_ === 1 ? out : rt(Math.sqrt(p)) };
  };
  M.surd_mul_sh = "\u221aa \u00d7 \u221ab = \u221a(ab); multiply first, then take out any square factor of the result.";

  D.surd_conjugate_sh = function (r) {
    var a = ri(r, 2, 9), b = one([2, 3, 5, 6, 7], r);
    var den = a * a - b;
    return { q: "Rationalize the denominator of " + a + "/(" + a + " \u2212 \u221a" + b + ").",
             a: "Multiply top and bottom by (" + a + " + \u221a" + b + "): " + a + "(" + a + " + \u221a" + b + ")/" + den, n: den };
  };
  M.surd_conjugate_sh = "Multiply the numerator and denominator by the conjugate; (a \u2212 \u221ab)(a + \u221ab) = a\u00b2 \u2212 b removes the surd from the denominator.";

  /* ============================ VARIATION ============================ */
  D.direct_var_sh = function (r) {
    var k = ri(r, 2, 9), x1 = ri(r, 2, 9), x2 = ri(r, 2, 12);
    var y1 = k * x1, y2 = k * x2;
    return { q: "y varies directly as x. When x = " + x1 + ", y = " + y1 + ". Find y when x = " + x2 + ".",
             a: "k = " + y1 + "/" + x1 + " = " + k + ", so y = " + k + " \u00d7 " + x2 + " = " + y2, n: y2 };
  };
  M.direct_var_sh = "Write y = kx, find k from the pair of values given, then use k to find the new value.";

  D.inverse_var_sh = function (r) {
    var k = ri(r, 4, 12) * 6, x1 = ri(r, 2, 9), x2 = ri(r, 2, 12);
    var y1 = k / x1, y2 = k / x2;
    return { q: "y varies inversely as x. When x = " + x1 + ", y = " + y1 + ". Find y when x = " + x2 + ".",
             a: "k = xy = " + k + ", so y = " + k + "/" + x2 + " = " + rt(y2), n: rt(y2) };
  };
  M.inverse_var_sh = "Write y = k/x, so the product xy is the constant k; use that constant with the new value of x.";

  D.joint_var_sh = function (r) {
    var k = ri(r, 2, 6), x1 = ri(r, 2, 5), z1 = ri(r, 2, 5), x2 = ri(r, 2, 6), z2 = ri(r, 2, 6);
    var y1 = k * x1 * z1, y2 = k * x2 * z2;
    return { q: "y varies jointly as x and z. When x = " + x1 + " and z = " + z1 + ", y = " + y1 + ". Find y when x = " + x2 + " and z = " + z2 + ".",
             a: "k = " + y1 + "/(" + x1 + " \u00d7 " + z1 + ") = " + k + ", so y = " + k + " \u00d7 " + x2 + " \u00d7 " + z2 + " = " + y2, n: y2 };
  };
  M.joint_var_sh = "Joint variation means y = kxz; find k from the data, then multiply k by the two new values.";

  D.partial_var_sh = function (r) {
    var c = ri(r, 2, 9) * 100, k = ri(r, 2, 8) * 50, x1 = ri(r, 3, 9), x2 = x1 + ri(r, 2, 6);
    var y1 = c + k * x1, y2 = c + k * x2;
    return { q: "A fare is partly fixed and partly varies with distance. " + x1 + " km costs " + money(y1) + " and " + x2 + " km costs " + money(y2) + ". Find the fixed charge.",
             a: "The extra " + (x2 - x1) + " km costs " + money(y2 - y1) + ", so k = " + money(k) + " per km and the fixed charge is " + money(c), n: c };
  };
  M.partial_var_sh = "Partial variation is y = kx + c. The difference between two readings gives k, and substituting back gives the fixed part c, which is the y-intercept.";

  D.variation_word_sh = function (r) {
    var men = ri(r, 3, 9), days = ri(r, 4, 12), men2 = men + ri(r, 1, 6);
    var d2 = rt(men * days / men2);
    return { q: men + " men take " + days + " days to dig a well. How long will " + men2 + " men take at the same rate?",
             a: "Time varies inversely as men: k = " + (men * days) + " man-days, so t = " + (men * days) + "/" + men2 + " = " + d2 + " days", n: d2 };
  };
  M.variation_word_sh = "More workers means less time, so this is inverse variation: the product men \u00d7 days stays constant.";

  /* ============================ QUADRATICS ============================ */
  D.quad_factor_sh = function (r) {
    var p = nz(r, -7, 7), q = nz(r, -7, 7);
    var B = -(p + q), C = p * q;
    var eq = term(1, "x", 2, true) + term(B, "x", 1, false) + term(C, "", 0, false) + " = 0";
    return { q: "Solve by factorization: " + eq, a: "(x " + (p < 0 ? "\u2212 " + Math.abs(p) : "+ " + p) + ")(x " + (q < 0 ? "\u2212 " + Math.abs(q) : "+ " + q) + ") = 0, so x = " + mn(p) + " or x = " + mn(q), n: p + q };
  };
  M.quad_factor_sh = "Factorize into two brackets, then use the fact that a product of zero means at least one factor is zero.";

  D.quad_formula_sh = function (r) {
    var a = one([1, 1, 2], r), b = nz(r, -7, 7), c = nz(r, -9, 9);
    var disc = b * b - 4 * a * c;
    if (disc < 0) { c = -Math.abs(c) - 1; disc = b * b - 4 * a * c; }
    var x1 = rt((-b + Math.sqrt(disc)) / (2 * a)), x2 = rt((-b - Math.sqrt(disc)) / (2 * a));
    return { q: "Solve using the formula: " + term(a, "x", 2, true) + term(b, "x", 1, false) + term(c, "", 0, false) + " = 0",
             a: "x = (" + mn(-b) + " \u00b1 \u221a" + disc + ")/" + (2 * a) + ", so x = " + x1 + " or x = " + x2, n: rt(x1 + x2) };
  };
  M.quad_formula_sh = "x = (\u2212b \u00b1 \u221a(b\u00b2 \u2212 4ac))/2a. Substitute a, b and c carefully, keeping their signs.";

  D.quad_complete_sh = function (r) {
    var h = nz(r, -5, 5), k = nz(r, -9, 9);
    var B = -2 * h, C = h * h + k;
    return { q: "Write " + term(1, "x", 2, true) + term(B, "x", 1, false) + term(C, "", 0, false) + " in the form (x + h)\u00b2 + k.",
             a: "(x " + (h < 0 ? "\u2212 " + Math.abs(h) : "+ " + h) + ")\u00b2 " + (k < 0 ? "\u2212 " + Math.abs(k) : "+ " + k), n: h + k };
  };
  M.quad_complete_sh = "Halve the coefficient of x to get h, then adjust the constant so the expression is unchanged: x\u00b2 + bx + c = (x + b/2)\u00b2 + c \u2212 b\u00b2/4.";

  D.quad_roots_sh = function (r) {
    var p = nz(r, -6, 6), q = nz(r, -6, 6);
    var sum = p + q, prod = p * q;
    var expr = term(1, "x", 2, true) + term(-sum, "x", 1, false) + term(prod, "", 0, false);
    return { q: "Find the sum and the product of the roots of " + expr + " = 0.",
             a: "Sum = \u2212b/a = " + mn(sum) + "; product = c/a = " + mn(prod), n: sum };
  };
  M.quad_roots_sh = "For ax\u00b2 + bx + c = 0 the sum of the roots is \u2212b/a and their product is c/a, without solving the equation.";

  D.quad_discriminant_sh = function (r) {
    var a = one([1, 1, 2, 3], r), b = nz(r, -8, 8), c = nz(r, -8, 8);
    var disc = b * b - 4 * a * c;
    var kind = disc > 0 ? "two distinct real roots" : disc === 0 ? "one repeated real root" : "no real roots";
    return { q: "Find the discriminant of " + term(a, "x", 2, true) + term(b, "x", 1, false) + term(c, "", 0, false) + " = 0 and say how many real roots it has.",
             a: "b\u00b2 \u2212 4ac = " + mn(disc) + ", so there is/are " + kind, n: disc };
  };
  M.quad_discriminant_sh = "The discriminant b\u00b2 \u2212 4ac tells how many real roots there are: two if positive, one if zero and none if negative.";

  D.quad_turning_sh = function (r) {
    var a = one([1, 1, 2], r), h = nz(r, -5, 5), k = nz(r, -9, 9);
    var b = -2 * a * h, c = a * h * h + k;
    return { q: "Find the turning point of y = " + term(a, "x", 2, true) + term(b, "x", 1, false) + term(c, "", 0, false) + " and say whether it is a maximum or a minimum.",
             a: "(" + mn(h) + ", " + mn(k) + "), a " + (a > 0 ? "minimum" : "maximum") + " because a is " + (a > 0 ? "positive" : "negative"), n: h + k };
  };
  M.quad_turning_sh = "Complete the square to read off the turning point, or use x = \u2212b/2a. A positive coefficient of x\u00b2 gives a minimum and a negative one a maximum.";

  /* ============================ MENSURATION ============================ */
  D.circle_circumference_sh = function (r) {
    var rd = one([7, 14, 21, 28, 35], r);
    var C = rt(2 * 22 / 7 * rd);
    return { q: "Find the circumference of a circle of radius " + rd + " cm. Take \u03c0 = 22/7.",
             a: "C = 2\u03c0r = 2 \u00d7 22/7 \u00d7 " + rd + " = " + C + " cm", n: C };
  };
  M.circle_circumference_sh = "C = 2\u03c0r = \u03c0d; the circumference is the distance all the way round the circle.";

  D.circle_area_sh = function (r) {
    var rd = one([7, 14, 21, 28], r);
    var A = rt(22 / 7 * rd * rd);
    return { q: "Find the area of a circle of radius " + rd + " cm. Take \u03c0 = 22/7.", a: "A = \u03c0r\u00b2 = 22/7 \u00d7 " + (rd * rd) + " = " + A + " cm\u00b2", n: A };
  };
  M.circle_area_sh = "A = \u03c0r\u00b2; because the radius is squared, doubling the radius quadruples the area.";

  D.arc_sector_sh = function (r) {
    var ang = one([30, 45, 60, 72, 90, 120], r), rd = one([7, 14, 21], r);
    var frac = ang / 360, arc = rt(frac * 2 * 22 / 7 * rd), area = rt(frac * 22 / 7 * rd * rd);
    return { q: "A sector of a circle of radius " + rd + " cm has an angle of " + ang + "\u00b0. Find its arc length and its area. Take \u03c0 = 22/7.",
             a: "Fraction = " + ang + "/360; arc = " + arc + " cm and area = " + area + " cm\u00b2", n: arc };
  };
  M.arc_sector_sh = "An arc and a sector are the fraction \u03b8/360 of the whole circumference and area respectively.";

  D.area_parallelogram_sh = function (r) {
    var base = ri(r, 6, 24), h = ri(r, 4, 16);
    return { q: "Find the area of a parallelogram with base " + base + " cm and perpendicular height " + h + " cm.",
             a: "A = base \u00d7 height = " + (base * h) + " cm\u00b2", n: base * h };
  };
  M.area_parallelogram_sh = "The area of a parallelogram is base \u00d7 perpendicular height, not base \u00d7 slant side.";

  D.area_triangle_sh = function (r) {
    var base = ri(r, 6, 24), h = ri(r, 4, 18);
    return { q: "Find the area of a triangle with base " + base + " cm and height " + h + " cm.",
             a: "A = \u00bd \u00d7 " + base + " \u00d7 " + h + " = " + (base * h / 2) + " cm\u00b2", n: base * h / 2 };
  };
  M.area_triangle_sh = "A triangle is half of the parallelogram on the same base and height, so A = \u00bd \u00d7 base \u00d7 height.";

  D.perimeter_composite_sh = function (r) {
    var l = ri(r, 8, 20), w = ri(r, 4, 12);
    var p = 2 * l + 2 * w;
    return { q: "Find the perimeter of a rectangle " + l + " cm by " + w + " cm.", a: "P = 2(" + l + " + " + w + ") = " + p + " cm", n: p };
  };
  M.perimeter_composite_sh = "The perimeter is the total length of the boundary; add every outer side once.";

  D.circle_theorem_sh = function (r) {
    var kinds = [
      { q: function (a) { return "The angle subtended at the centre of a circle is " + a + "\u00b0. Find the angle at the circumference in the same segment."; }, f: function (a) { return a / 2; }, why: "the angle at the centre is twice the angle at the circumference" },
      { q: function (a) { return "One angle of a cyclic quadrilateral is " + a + "\u00b0. Find the opposite angle."; }, f: function (a) { return 180 - a; }, why: "opposite angles of a cyclic quadrilateral are supplementary" },
      { q: function (a) { return "The angle between a tangent and a chord is " + a + "\u00b0. Find the angle in the alternate segment."; }, f: function (a) { return a; }, why: "the angle between tangent and chord equals the angle in the alternate segment" },
      { q: function () { return "Find the angle in a semicircle."; }, f: function () { return 90; }, why: "the diameter subtends 180\u00b0 at the centre, so the angle at the circumference is 90\u00b0" }
    ];
    var a = 2 * ri(r, 20, 80), k = one(kinds, r);
    return { q: k.q(a), a: k.f(a) + "\u00b0 \u2014 " + k.why, n: k.f(a) };
  };
  M.circle_theorem_sh = "Each circle theorem links two angles: the centre angle is twice the circumference angle, opposite angles of a cyclic quadrilateral sum to 180\u00b0, and the tangent-chord angle equals the angle in the alternate segment.";

  D.tangent_angle_sh = function (r) {
    var a = ri(r, 25, 70);
    return { q: "A tangent at T meets a chord TA making an angle of " + a + "\u00b0 with the tangent. Find the angle subtended by TA in the alternate segment.",
             a: a + "\u00b0 \u2014 the angle between tangent and chord equals the angle in the alternate segment", n: a };
  };
  M.tangent_angle_sh = "The alternate segment theorem: the angle between a tangent and a chord equals the angle the chord subtends in the opposite segment.";

  /* ============================ TRIGONOMETRY ============================ */
  D.trig_ratio_sh = function (r) {
    var trip = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [9, 40, 41]];
    var t = one(trip, r), fn = one(["sin", "cos", "tan"], r);
    var v = fn === "sin" ? simpFrac(t[0], t[2]) : fn === "cos" ? simpFrac(t[1], t[2]) : simpFrac(t[0], t[1]);
    return { q: "In a right-angled triangle the opposite side is " + t[0] + ", the adjacent side is " + t[1] + " and the hypotenuse is " + t[2] + ". Find " + fn + " \u03b8.",
             a: fn + " \u03b8 = " + v, n: rt(fn === "sin" ? t[0] / t[2] : fn === "cos" ? t[1] / t[2] : t[0] / t[1]) };
  };
  M.trig_ratio_sh = "SOH CAH TOA: sine is opposite over hypotenuse, cosine adjacent over hypotenuse and tangent opposite over adjacent.";

  D.trig_special_sh = function (r) {
    var ang = one([30, 45, 60], r), fn = one(["sin", "cos", "tan"], r), s = SPECIAL[ang];
    var v = fn === "sin" ? s.sin : fn === "cos" ? s.cos : s.tan;
    var num = fn === "sin" ? s.sinN : fn === "cos" ? s.cosN : s.tanN;
    return { q: "Find the exact value of " + fn + " " + ang + "\u00b0.", a: v + "  (\u2248 " + num + ")", n: num };
  };
  M.trig_special_sh = "The ratios of 30\u00b0, 45\u00b0 and 60\u00b0 come from halving an equilateral triangle and from an isosceles right-angled triangle; learn them exactly.";

  D.trig_find_side_sh = function (r) {
    var ang = ri(r, 20, 70), hyp = ri(r, 6, 30);
    var rad = ang * Math.PI / 180;
    var opp = rt(hyp * Math.sin(rad));
    return { q: "A ladder " + hyp + " m long makes an angle of " + ang + "\u00b0 with the ground. Find how high up the wall it reaches.",
             a: "h = " + hyp + " sin " + ang + "\u00b0 = " + opp + " m", n: opp };
  };
  M.trig_find_side_sh = "Choose the ratio that uses the side you know and the side you want; here the height is opposite the angle and the ladder is the hypotenuse, so use sine.";

  D.trig_find_angle_sh = function (r) {
    var trip = [[3, 4, 5], [5, 12, 13], [8, 15, 17]];
    var t = one(trip, r);
    var ang = rt(Math.atan2(t[0], t[1]) * 180 / Math.PI);
    return { q: "In a right-angled triangle the opposite side is " + t[0] + " cm and the adjacent side is " + t[1] + " cm. Find the angle \u03b8.",
             a: "tan \u03b8 = " + t[0] + "/" + t[1] + ", so \u03b8 = " + ang + "\u00b0", n: ang };
  };
  M.trig_find_angle_sh = "Form the ratio from the two known sides, then use the inverse function \u2014 here \u03b8 = tan\u207b\u00b9(opposite/adjacent).";

  D.elevation_sh = function (r) {
    var ang = ri(r, 20, 65), d = ri(r, 10, 60);
    var h = rt(d * Math.tan(ang * Math.PI / 180));
    return { q: "From a point " + d + " m from the foot of a mast the angle of elevation of the top is " + ang + "\u00b0. Find the height of the mast.",
             a: "h = " + d + " tan " + ang + "\u00b0 = " + h + " m", n: h };
  };
  M.elevation_sh = "The angle of elevation is measured upwards from the horizontal; the height is opposite and the ground distance is adjacent, so use tangent.";

  D.depression_sh = function (r) {
    var ang = ri(r, 20, 65), h = ri(r, 10, 50);
    var d = rt(h / Math.tan(ang * Math.PI / 180));
    return { q: "From the top of a " + h + " m building the angle of depression of a car is " + ang + "\u00b0. Find the distance of the car from the foot of the building.",
             a: "d = " + h + "/tan " + ang + "\u00b0 = " + d + " m", n: d };
  };
  M.depression_sh = "The angle of depression equals the angle of elevation from the object, because the two horizontal lines are parallel; use tangent with the height opposite.";

  D.gradient_angle_sh = function (r) {
    var m = one([1, 0.5, 2, 0.25, 1.5], r);
    var ang = rt(Math.atan(m) * 180 / Math.PI);
    return { q: "A road has a gradient of " + m + ". Find the angle it makes with the horizontal.",
             a: "\u03b8 = tan\u207b\u00b9(" + m + ") = " + ang + "\u00b0", n: ang };
  };
  M.gradient_angle_sh = "The gradient of a line is the tangent of the angle it makes with the horizontal, so the angle is the inverse tangent of the gradient.";

  D.trig_graph_value_sh = function (r) {
    var ang = ri(r, 0, 12) * 30, fn = one(["sin", "cos"], r);
    var v = rt(fn === "sin" ? Math.sin(ang * Math.PI / 180) : Math.cos(ang * Math.PI / 180));
    return { q: "From the graph of y = " + fn + " \u03b8, find the value of " + fn + " " + ang + "\u00b0.", a: String(v), n: v };
  };
  M.trig_graph_value_sh = "Read straight across from the angle on the horizontal axis to the wave, then read the height on the vertical axis.";

  D.trig_graph_solve_sh = function (r) {
    var fn = one(["sin", "cos"], r), ang = one([30, 45, 60], r);
    var v = rt(fn === "sin" ? Math.sin(ang * Math.PI / 180) : Math.cos(ang * Math.PI / 180));
    var s1 = fn === "sin" ? ang : ang, s2 = fn === "sin" ? 180 - ang : 360 - ang;
    return { q: "Solve " + fn + " \u03b8 = " + v + " for 0\u00b0 \u2264 \u03b8 \u2264 360\u00b0.",
             a: "\u03b8 = " + s1 + "\u00b0 or \u03b8 = " + s2 + "\u00b0", n: s1 + s2 };
  };
  M.trig_graph_solve_sh = "Draw the horizontal line y = the value; it cuts the wave twice in one period. The second solution is the reflection of the first in the peak or trough.";

  D.trig_amplitude_sh = function (r) {
    var k = ri(r, 2, 6), c = ri(r, 1, 5);
    return { q: "Find the amplitude and the maximum and minimum values of y = " + c + " + " + k + " sin \u03b8.",
             a: "Amplitude = " + k + "; maximum = " + (c + k) + " and minimum = " + (c - k), n: k };
  };
  M.trig_amplitude_sh = "The coefficient in front of the sine is the amplitude; adding a constant moves the whole wave up, so the maximum and minimum both shift by it.";

  D.trig_max_min_sh = function (r) {
    var k = ri(r, 2, 6), fn = one(["sin", "cos"], r);
    return { q: "Find the maximum and minimum values of y = " + k + " " + fn + " \u03b8 for 0\u00b0 \u2264 \u03b8 \u2264 360\u00b0.",
             a: "Maximum " + k + " and minimum \u2212" + k, n: k };
  };
  M.trig_max_min_sh = "Sine and cosine never exceed 1 or fall below \u22121, so multiplying by k stretches the wave to \u00b1k.";

  D.trig_period_sh = function (r) {
    var k = one([2, 3, 4], r), fn = one(["sin", "cos", "tan"], r);
    var per = fn === "tan" ? 180 / k : 360 / k;
    return { q: "Find the period of y = " + fn + " " + k + "\u03b8.", a: "The basic period is " + (fn === "tan" ? "180\u00b0" : "360\u00b0") + ", divided by " + k + ", so the period is " + per + "\u00b0", n: per };
  };
  M.trig_period_sh = "Multiplying the angle by k squeezes the wave horizontally, so the period becomes the basic period divided by k.";

  /* ============================ PROBABILITY ============================ */
  D.prob_simple_sh = function (r) {
    var red = ri(r, 2, 8), blue = ri(r, 2, 8), green = ri(r, 2, 8);
    var tot = red + blue + green;
    return { q: "A bag holds " + red + " red, " + blue + " blue and " + green + " green balls. Find the probability of picking a red ball.",
             a: red + "/" + tot + (gcd(red, tot) > 1 ? " = " + simpFrac(red, tot) : ""), n: rt(red / tot) };
  };
  M.prob_simple_sh = "Probability = number of favourable outcomes \u00f7 total number of equally likely outcomes.";

  D.prob_complement_sh = function (r) {
    var p = rt(ri(r, 15, 85) / 100);
    return { q: "The probability that it rains tomorrow is " + p + ". Find the probability that it does not rain.",
             a: "1 \u2212 " + p + " = " + rt(1 - p), n: rt(1 - p) };
  };
  M.prob_complement_sh = "An event either happens or does not, so P(not A) = 1 \u2212 P(A).";

  D.prob_union_sh = function (r) {
    var pa = rt(ri(r, 25, 65) / 100), pb = rt(ri(r, 20, 60) / 100);
    var both = rt(Math.min(pa * pb, 0.2) + ri(r, 1, 8) / 100);
    if (both > Math.min(pa, pb)) both = rt(Math.min(pa, pb) / 2);
    var u = rt(pa + pb - both);
    return { q: "P(A) = " + pa + ", P(B) = " + pb + " and P(A \u2229 B) = " + both + ". Find P(A \u222a B).",
             a: pa + " + " + pb + " \u2212 " + both + " = " + u, n: u };
  };
  M.prob_union_sh = "P(A \u222a B) = P(A) + P(B) \u2212 P(A \u2229 B); the intersection is subtracted once because it was counted in both P(A) and P(B).";

  D.prob_independent_sh = function (r) {
    var pa = rt(ri(r, 30, 80) / 100), pb = rt(ri(r, 25, 75) / 100);
    var both = rt(pa * pb), neither = rt((1 - pa) * (1 - pb));
    return { q: "P(A) = " + pa + " and P(B) = " + pb + ", and A and B are independent. Find P(A \u2229 B) and P(neither).",
             a: "P(A \u2229 B) = " + pa + " \u00d7 " + pb + " = " + both + "; P(neither) = " + rt(1 - pa) + " \u00d7 " + rt(1 - pb) + " = " + neither, n: both };
  };
  M.prob_independent_sh = "For independent events multiply the probabilities: P(A \u2229 B) = P(A) \u00d7 P(B). For neither, multiply the two complements.";

  D.prob_relative_sh = function (r) {
    var trials = ri(r, 20, 100), hits = ri(r, 5, trials - 1);
    return { q: "In " + trials + " trials an event occurred " + hits + " times. Find its relative frequency as a decimal.",
             a: hits + "/" + trials + " = " + rt(hits / trials), n: rt(hits / trials) };
  };
  M.prob_relative_sh = "Relative frequency is the number of times the event occurred divided by the number of trials; it estimates the probability.";

  D.prob_odds_sh = function (r) {
    var fav = ri(r, 1, 8), un = ri(r, 1, 8);
    return { q: "The odds in favour of an event are " + fav + " : " + un + ". Find the probability of the event.",
             a: fav + "/(" + fav + " + " + un + ") = " + rt(fav / (fav + un)), n: rt(fav / (fav + un)) };
  };
  M.prob_odds_sh = "Odds of a : b mean a favourable outcomes against b unfavourable ones, so the probability is a/(a + b).";

  D.prob_tree_sh = function (r) {
    var n = ri(r, 2, 3);
    var k = ri(r, 0, n);
    function C(a, b) { var v = 1, i; for (i = 0; i < b; i++) v = v * (a - i) / (i + 1); return Math.round(v); }
    var ways = C(n, k), tot = Math.pow(2, n);
    return { q: "A fair coin is tossed " + n + " times. Use a tree diagram to find the probability of exactly " + k + " head(s).",
             a: ways + " of the " + tot + " outcomes give " + k + " head(s), so P = " + ways + "/" + tot + " = " + rt(ways / tot), n: rt(ways / tot) };
  };
  M.prob_tree_sh = "A tree diagram lists every outcome of each stage; count the branches that satisfy the condition and divide by the total number of branches.";

  D.prob_conditional_sh = function (r) {
    var tot = ri(r, 20, 60) * 2, boys = Math.round(tot * 0.55), pass = Math.round(tot * 0.7);
    var bp = Math.round(Math.min(boys, pass) * 0.8);
    return { q: "In a class of " + tot + " there are " + boys + " boys and " + pass + " pupils passed, of whom " + bp + " are boys. A pupil is chosen at random and is known to be a boy. Find the probability that he passed.",
             a: "P(pass | boy) = " + bp + "/" + boys + " = " + rt(bp / boys), n: rt(bp / boys) };
  };
  M.prob_conditional_sh = "Conditional probability restricts the sample space to those who satisfy the given condition: P(A|B) = P(A \u2229 B)/P(B).";

  D.expected_value_sh = function (r) {
    var a = ri(r, 1, 4), b = ri(r, 5, 9), p = ri(r, 1, 5);
    var q_ = 6 - p;
    var E = rt((p * a + q_ * b) / 6);
    return { q: "A die is scored " + a + " points for " + p + " of its faces and " + b + " points for the rest. Find the expected score per throw.",
             a: "E = (" + p + "\u00d7" + a + " + " + q_ + "\u00d7" + b + ")/6 = " + E, n: E };
  };
  M.expected_value_sh = "Multiply each outcome by its probability and add the results; this is the average over many repetitions.";

  /* ============================ SEQUENCES AND SERIES ============================ */
  D.sequence_rule_sh = function (r) {
    var kind = r() < 0.5;
    var a = ri(r, 2, 9), n = ri(r, 5, 12);
    if (kind) {
      var d = ri(r, 2, 7), t = a + (n - 1) * d;
      var list = [a, a + d, a + 2 * d];
      return { q: "Find the " + ordNum(n) + " term of the sequence " + list.join(", ") + ", \u2026",
               a: "a = " + a + " and d = " + d + ", so T" + sub(n) + " = " + a + " + " + (n - 1) + " \u00d7 " + d + " = " + t, n: t };
    }
    var ratio = ri(r, 2, 3), t2 = a * Math.pow(ratio, n - 1);
    return { q: "Find the " + ordNum(n) + " term of the sequence " + [a, a * ratio, a * ratio * ratio].join(", ") + ", \u2026",
             a: "a = " + a + " and r = " + ratio + ", so T" + sub(n) + " = " + a + " \u00d7 " + ratio + sup(n - 1) + " = " + t2, n: t2 };
  };
  M.sequence_rule_sh = "Look at how each term is obtained from the last: a fixed difference means an arithmetic sequence, a fixed multiplier means a geometric one.";

  D.ap_nth_sh = function (r) {
    var a = ri(r, 2, 12), d = ri(r, 2, 8), n = ri(r, 8, 25);
    var t = a + (n - 1) * d;
    return { q: "Find the " + ordNum(n) + " term of the arithmetic sequence with first term " + a + " and common difference " + d + ".",
             a: "T" + sub(n) + " = " + a + " + (" + n + " \u2212 1)" + d + " = " + t, n: t };
  };
  M.ap_nth_sh = "T\u2099 = a + (n \u2212 1)d; the difference is applied (n \u2212 1) times because the first term needs none.";

  D.ap_sum_sh = function (r) {
    var a = ri(r, 2, 10), d = ri(r, 2, 6), n = ri(r, 8, 20);
    var s = n * (2 * a + (n - 1) * d) / 2;
    return { q: "Find the sum of the first " + n + " terms of the arithmetic sequence with a = " + a + " and d = " + d + ".",
             a: "S" + sub(n) + " = " + n + "/2 [2(" + a + ") + " + (n - 1) + "(" + d + ")] = " + s, n: s };
  };
  M.ap_sum_sh = "S\u2099 = n/2 [2a + (n \u2212 1)d], which is the average of the first and last terms multiplied by the number of terms.";

  D.gp_nth_sh = function (r) {
    var a = ri(r, 2, 6), ratio = ri(r, 2, 3), n = ri(r, 4, 8);
    var t = a * Math.pow(ratio, n - 1);
    return { q: "Find the " + ordNum(n) + " term of the geometric sequence with a = " + a + " and r = " + ratio + ".",
             a: "T" + sub(n) + " = " + a + " \u00d7 " + ratio + sup(n - 1) + " = " + t, n: t };
  };
  M.gp_nth_sh = "T\u2099 = ar\u207f\u207b\u00b9; the ratio is applied (n \u2212 1) times to reach the nth term.";

  D.gp_sum_sh = function (r) {
    var a = ri(r, 2, 6), ratio = ri(r, 2, 3), n = ri(r, 4, 7);
    var s = a * (Math.pow(ratio, n) - 1) / (ratio - 1);
    return { q: "Find the sum of the first " + n + " terms of the geometric sequence with a = " + a + " and r = " + ratio + ".",
             a: "S" + sub(n) + " = " + a + "(" + ratio + sup(n) + " \u2212 1)/(" + ratio + " \u2212 1) = " + s, n: s };
  };
  M.gp_sum_sh = "S\u2099 = a(r\u207f \u2212 1)/(r \u2212 1) when r > 1; the formula is derived by subtracting rS\u2099 from S\u2099.";

  D.gp_infinity_sh = function (r) {
    var a = ri(r, 2, 12) * 2, den = one([2, 4, 5], r);
    var s = rt(a / (1 - 1 / den));
    return { q: "Find the sum to infinity of the geometric series " + a + " + " + rt(a / den) + " + " + rt(a / den / den) + " + \u2026",
             a: "a = " + a + " and r = 1/" + den + ", so S\u221e = " + a + "/(1 \u2212 1/" + den + ") = " + s, n: s };
  };
  M.gp_infinity_sh = "When \u22121 < r < 1 the terms shrink towards zero and S\u221e = a/(1 \u2212 r); for |r| \u2265 1 there is no sum to infinity.";

  /* ============================ BEARINGS ============================ */
  D.bearing_three_fig_sh = function (r) {
    var kinds = [
      { d: "due north", b: 0 }, { d: "due east", b: 90 }, { d: "due south", b: 180 }, { d: "due west", b: 270 },
      { d: "north-east", b: 45 }, { d: "south-east", b: 135 }, { d: "south-west", b: 225 }, { d: "north-west", b: 315 }
    ];
    var k = one(kinds, r);
    var s = ri(r, 1, 70);
    var b2 = (k.b + s) % 360;
    return { q: "Write as a three-figure bearing a direction " + s + "\u00b0 clockwise from " + k.d + ".",
             a: (k.b + s) + "\u00b0 measured clockwise from north = " + (b2 < 10 ? "00" + b2 : b2 < 100 ? "0" + b2 : b2) + "\u00b0", n: b2 };
  };
  M.bearing_three_fig_sh = "Bearings are always measured clockwise from north and written with three digits, so 45\u00b0 is written 045\u00b0.";

  D.bearing_back_sh = function (r) {
    var b = ri(r, 1, 359);
    var back = b < 180 ? b + 180 : b - 180;
    return { q: "The bearing of B from A is " + (b < 100 ? (b < 10 ? "00" + b : "0" + b) : b) + "\u00b0. Find the bearing of A from B.",
             a: (b < 180 ? "add" : "subtract") + " 180\u00b0, giving " + (back < 100 ? (back < 10 ? "00" + back : "0" + back) : back) + "\u00b0", n: back };
  };
  M.bearing_back_sh = "The north lines at the two points are parallel, so the two bearings differ by exactly 180\u00b0: add 180 if under 180, otherwise subtract.";

  D.bearing_components_sh = function (r) {
    var d = ri(r, 4, 30) * 5, ang = one([30, 45, 60], r);
    var rad = ang * Math.PI / 180;
    var north = rt(d * Math.cos(rad)), east = rt(d * Math.sin(rad));
    return { q: "A ship sails " + d + " km on a bearing of " + (ang < 100 ? "0" + ang : ang) + "\u00b0. Find how far north and how far east it travels.",
             a: "North = " + d + " cos " + ang + "\u00b0 = " + north + " km; east = " + d + " sin " + ang + "\u00b0 = " + east + " km", n: north };
  };
  M.bearing_components_sh = "A bearing is measured from north, so the northward part uses cosine and the eastward part uses sine of the bearing angle.";

  D.bearing_distance_sh = function (r) {
    var e = ri(r, 3, 15) * 2, n = ri(r, 3, 15) * 2;
    var d = rt(Math.sqrt(e * e + n * n)), br = rt(Math.atan2(e, n) * 180 / Math.PI);
    return { q: "A walker goes " + e + " km east and then " + n + " km north. Find the distance from the start and the three-figure bearing.",
             a: "Distance = \u221a(" + e + "\u00b2 + " + n + "\u00b2) = " + d + " km; bearing = " + (br < 100 ? "0" + br : br) + "\u00b0", n: d };
  };
  M.bearing_distance_sh = "Use Pythagoras for the straight-line distance, and find the bearing from tan \u03b8 = east/north measured clockwise from north.";

  /* ============================ LOCI AND CONSTRUCTIONS ============================ */
  D.locus_circle_sh = function (r) {
    var d = ri(r, 2, 10);
    return { q: "Describe the locus of a point that is always " + d + " cm from a fixed point P.",
             a: "A circle of radius " + d + " cm with centre P", n: d };
  };
  M.locus_circle_sh = "A fixed distance from a fixed point gives a circle, because every point at that distance lies on the circumference.";

  D.locus_line_sh = function (r) {
    var d = ri(r, 2, 8), two = r() < 0.5;
    return { q: "Describe the locus of a point that is always " + d + " cm from a straight line.",
             a: two ? "Two straight lines, each " + d + " cm from the given line and parallel to it, one on each side."
                    : "A straight line parallel to the given line, " + d + " cm from it.", n: d };
  };
  M.locus_line_sh = "A fixed distance from a line gives a parallel line on each side of it; both satisfy the condition unless one side is ruled out.";

  D.locus_describe_sh = function (r) {
    var kinds = [
      { c: "equidistant from two fixed points A and B", a: "the perpendicular bisector of AB, because every point on it is the same distance from A and from B" },
      { c: "equidistant from two intersecting lines", a: "the pair of angle bisectors, because points on them are equidistant from the two arms" },
      { c: "a fixed distance from a fixed straight line", a: "a pair of lines parallel to it, one on each side" },
      { c: "inside an angle and equidistant from its arms", a: "the angle bisector of that angle" }
    ];
    var k = one(kinds, r);
    return { q: "Describe the locus of a point that is " + k.c + ".", a: k.a };
  };
  M.locus_describe_sh = "Translate the condition into a construction: equal distances from two points gives a perpendicular bisector, equal distances from two lines gives an angle bisector, and a fixed distance from a line gives parallels.";

  D.construction_angle_sh = function (r) {
    var ang = one([30, 45, 60, 90, 120], r);
    var methods = {
      30: "Construct 60\u00b0 from an equilateral triangle, then bisect it.",
      45: "Construct 90\u00b0 with arcs, then bisect it.",
      60: "Draw an arc from the point, then the same radius from where it cuts the line; the triangle formed is equilateral.",
      90: "Draw arcs above and below the line from two points, then join them through the point.",
      120: "Construct 60\u00b0 and take the supplementary angle beside it."
    };
    return { q: "Describe how to construct an angle of " + ang + "\u00b0 using ruler and compasses only.", a: methods[ang] };
  };
  M.construction_angle_sh = "Every constructible angle is built from 60\u00b0 (an equilateral triangle) and 90\u00b0 (a perpendicular), then halved or added as required.";

  /* ============================ LOGIC ============================ */
  D.statement_tf_sh = function (r) {
    var stmts = [
      { s: "Monrovia is the capital of Liberia.", t: true, why: "it is a factual statement that is correct" },
      { s: "Every prime number is odd.", t: false, why: "2 is a prime number and it is even" },
      { s: "x + 5 = 12", t: null, why: "it is an open statement; its truth depends on the value of x" },
      { s: "The angles of a triangle add to 180\u00b0.", t: true, why: "this is a theorem of plane geometry" },
      { s: "What time is it?", t: null, why: "it is a question, not a statement, so it has no truth value" }
    ];
    var k = one(stmts, r);
    return { q: "Decide whether \"" + k.s + "\" is true, false or not a statement, and explain.",
             a: (k.t === true ? "True" : k.t === false ? "False" : "Not a statement (or an open statement)") + " \u2014 " + k.why };
  };
  M.statement_tf_sh = "A statement must be either true or false, but not both. Questions, commands and sentences with an unspecified variable are not closed statements.";

  D.negation_sh = function (r) {
    var stmts = [
      { s: "All pupils have a textbook.", n: "At least one pupil does not have a textbook.", why: "the negation of 'all' is 'at least one does not'" },
      { s: "x > 5", n: "x \u2264 5", why: "the opposite of 'greater than' is 'less than or equal to'" },
      { s: "The triangle is equilateral.", n: "The triangle is not equilateral.", why: "simply deny the original claim" },
      { s: "Some birds can fly.", n: "No birds can fly.", why: "the negation of 'some' is 'none'" }
    ];
    var k = one(stmts, r);
    return { q: "Write the negation of \"" + k.s + "\" and explain.", a: "\"" + k.n + "\" \u2014 " + k.why };
  };
  M.negation_sh = "The negation says the opposite. Changing 'all' to 'at least one not', and 'some' to 'none', and reversing inequalities including the equality case.";

  D.implication_sh = function (r) {
    var kinds = [
      { p: "it rains", q: "the ground is wet", t: true, why: "rain always makes the ground wet" },
      { p: "x = 3", q: "x\u00b2 = 9", t: true, why: "squaring 3 does give 9" },
      { p: "x\u00b2 = 9", q: "x = 3", t: false, why: "x could also be \u22123, so the hypothesis does not force the conclusion" },
      { p: "a shape is a square", q: "it is a rectangle", t: true, why: "every square satisfies the definition of a rectangle" }
    ];
    var k = one(kinds, r);
    return { q: "Decide whether the implication \"if " + k.p + " then " + k.q + "\" is true, and explain.",
             a: k.t ? "True \u2014 " + k.why + "." : "False \u2014 " + k.why + "." };
  };
  M.implication_sh = "An implication p \u21d2 q is false only when p is true and q is false; in every other case it counts as true.";

  D.contrapositive_sh = function (r) {
    var kinds = [
      { p: "a number is even", q: "it is divisible by 2", cp: "a number is not divisible by 2 then it is not even" },
      { p: "a shape is a square", q: "it has four equal sides", cp: "a shape does not have four equal sides then it is not a square" },
      { p: "x > 4", q: "x > 2", cp: "x \u2264 2 then x \u2264 4" }
    ];
    var k = one(kinds, r);
    return { q: "Write the contrapositive of \"if " + k.p + " then " + k.q + "\" and say whether it is equivalent to the original.",
             a: "\"If " + k.cp + "\" \u2014 yes, an implication is always logically equivalent to its contrapositive." };
  };
  M.contrapositive_sh = "Negate both parts and swap them: p \u21d2 q becomes ~q \u21d2 ~p. The two always have the same truth value.";

  D.truth_table_sh = function (r) {
    var ops = [
      { s: "p \u2227 q", l: "conjunction, p and q", f: function (p, q) { return p && q; }, t: 1, w: "a conjunction is true only when both parts are true" },
      { s: "p \u2228 q", l: "disjunction, p or q", f: function (p, q) { return p || q; }, t: 3, w: "a disjunction is true whenever at least one part is true" },
      { s: "p \u21d2 q", l: "implication, if p then q", f: function (p, q) { return !p || q; }, t: 3, w: "an implication is false only when p is true and q is false" },
      { s: "~p \u2228 q", l: "not p or q", f: function (p, q) { return !p || q; }, t: 3, w: "this is equivalent to p \u21d2 q" }
    ];
    var k = one(ops, r);
    return { q: "In the truth table for " + k.s + ", how many of the four rows are true?",
             a: k.t + " of the 4 rows are true \u2014 " + k.w + ".", n: k.t };
  };
  M.truth_table_sh = "Build the four rows of p and q, apply the connective to each, and count. Learn the one false row of p \u21d2 q: p true with q false.";

  D.logic_truth_sh = function (r) {
    var pT = r() < 0.5, qT = r() < 0.5;
    var kinds = [
      { s: "p \u2227 q", f: function (p, q) { return p && q; }, w: "a conjunction needs both parts true" },
      { s: "p \u2228 q", f: function (p, q) { return p || q; }, w: "a disjunction needs only one part true" },
      { s: "p \u21d2 q", f: function (p, q) { return !p || q; }, w: "an implication fails only when p is true and q is false" },
      { s: "~p", f: function (p) { return !p; }, w: "a negation is true exactly when the original is false" },
      { s: "p \u21d4 q", f: function (p, q) { return p === q; }, w: "an equivalence is true when both parts have the same truth value" }
    ];
    var k = one(kinds, r);
    var res = k.f(pT, qT);
    var given = "p is " + (pT ? "true" : "false") + (k.s === "~p" ? "" : " and q is " + (qT ? "true" : "false"));
    return { q: "Given that " + given + ", decide whether " + k.s + " is true.",
             a: (res ? "True" : "False") + " \u2014 " + k.w + ".", n: res ? 1 : 0 };
  };
  M.logic_truth_sh = "Substitute the given truth values into the connective. Only p \u21d2 q has the unusual rule that it is true whenever the hypothesis is false.";

  D.logic_equiv_sh = function (r) {
    var kinds = [
      { pair: "the converse", eq: false, why: "swapping the parts can easily produce a false statement, as with 'if it is a rectangle then it is a square'" },
      { pair: "the inverse", eq: false, why: "the inverse is the converse of the contrapositive, so it too may fail" },
      { pair: "the contrapositive", eq: true, why: "negating and swapping preserves the truth value in every case" }
    ];
    var k = one(kinds, r);
    return { q: "Is an implication always equivalent to " + k.pair + "? Explain.",
             a: k.eq ? "Yes \u2014 " + k.why + "." : "No \u2014 " + k.why + "." };
  };
  M.logic_equiv_sh = "Only the contrapositive is always equivalent to the original implication; the converse and the inverse are equivalent to each other but not to p \u21d2 q.";

  D.validity_sh = function (r) {
    var args = [
      { a: "All teachers are graduates. Kofi is a teacher. Therefore Kofi is a graduate.", v: true, why: "the teachers' circle lies inside the graduates' circle, so the conclusion is forced" },
      { a: "All birds lay eggs. A penguin lays eggs. Therefore a penguin is a bird.", v: false, why: "laying eggs does not place something inside the bird circle; this affirms the consequent" },
      { a: "If it rains the road is wet. The road is not wet. Therefore it did not rain.", v: true, why: "this is the contrapositive, which is always valid" },
      { a: "Some graduates are doctors. Ama is a graduate. Therefore Ama is a doctor.", v: false, why: "'some' does not include every graduate, so the conclusion need not follow" }
    ];
    var k = one(args, r);
    return { q: "Test the validity of the argument: " + k.a, a: k.v ? "Valid \u2014 " + k.why + "." : "Invalid \u2014 " + k.why + "." };
  };
  M.validity_sh = "An argument is valid when the conclusion must follow from the premises. A Venn diagram shows this: if you can draw the premises without the conclusion, the argument is invalid.";

  /* ============================ MAPPINGS AND FUNCTIONS ============================ */
  D.mapping_type_sh = function (r) {
    var kinds = [
      { m: "x \u2192 3x", t: "one-to-one", fn: true, why: "different inputs always give different outputs" },
      { m: "x \u2192 x\u00b2", t: "many-to-one", fn: true, why: "2 and \u22122 both map to 4, but each input has one image" },
      { m: "x\u00b2 \u2192 x", t: "one-to-many", fn: false, why: "one input can have two images: 4 maps to both 2 and \u22122" },
      { m: "x \u2192 |x|", t: "many-to-one", fn: true, why: "3 and \u22123 both give 3" }
    ];
    var k = one(kinds, r);
    return { q: "Classify the mapping " + k.m + " and say whether it is a function.",
             a: k.t + "; " + (k.fn ? "it is a function because " : "it is not a function, because ") + k.why + "." };
  };
  M.mapping_type_sh = "A mapping is a function when each member of the domain has exactly one image. One-to-one means no two members share an image.";

  D.inverse_fn_sh = function (r) {
    var a = nz(r, 2, 6), b = nz(r, -9, 9), y = ri(r, 5, 30);
    var x = (y - b) / a;
    return { q: "Find f\u207b\u00b9(x) for f(x) = " + a + "x " + sgn(b) + ", and evaluate f\u207b\u00b9(" + y + ").",
             a: "f\u207b\u00b9(x) = (x " + sgn(-b) + ")/" + a + ", so f\u207b\u00b9(" + y + ") = " + rt(x), n: rt(x) };
  };
  M.inverse_fn_sh = "Write y = f(x), make x the subject, then swap the letters. The inverse reverses every arrow of the mapping.";

  D.composite_fn_sh = function (r) {
    var a = nz(r, 1, 3), b = nz(r, -5, 5), c = nz(r, 1, 3), x = ri(r, 1, 5);
    var gx = c * x, fgx = a * gx + b;
    return { q: "If f(x) = " + cx(a, "x") + term(b, "", 0, false) + " and g(x) = " + cx(c, "x") + ", find fg(" + x + ").",
             a: "g(" + x + ") = " + gx + ", then f(" + gx + ") = " + fgx, n: fgx };
  };
  M.composite_fn_sh = "fg(x) means apply g first and then f, so substitute the whole of g(x) into f.";

  /* ============================ SOLID GEOMETRY ============================ */
  D.solid_faces_sh = function (r) {
    var solids = [
      { s: "a cube", f: 6, e: 12, v: 8 }, { s: "a cuboid", f: 6, e: 12, v: 8 }, { s: "a triangular prism", f: 5, e: 9, v: 6 },
      { s: "a square-based pyramid", f: 5, e: 8, v: 5 }, { s: "a tetrahedron", f: 4, e: 6, v: 4 },
      { s: "a hexagonal pyramid", f: 7, e: 12, v: 7 }, { s: "a cylinder", f: 3, e: 2, v: 0 }
    ];
    var k = one(solids, r);
    return { q: "State the number of faces, edges and vertices of " + k.s + ".",
             a: k.f + " faces, " + k.e + " edges and " + k.v + " vertices", n: k.f };
  };
  M.solid_faces_sh = "Count the flat surfaces for faces, the lines where they meet for edges, and the corners for vertices; then check Euler's formula F + V \u2212 E = 2.";

  D.euler_sh = function (r) {
    var solids = [{ s: "a cube", f: 6, e: 12, v: 8 }, { s: "a triangular prism", f: 5, e: 9, v: 6 }, { s: "a square-based pyramid", f: 5, e: 8, v: 5 }, { s: "a tetrahedron", f: 4, e: 6, v: 4 }];
    var k = one(solids, r);
    var res = k.f + k.v - k.e;
    return { q: "Verify Euler's formula for " + k.s + " with " + k.f + " faces, " + k.e + " edges and " + k.v + " vertices.",
             a: "F + V \u2212 E = " + k.f + " + " + k.v + " \u2212 " + k.e + " = " + res + ", so the formula holds", n: res };
  };
  M.euler_sh = "For any solid without a hole, faces plus vertices minus edges always equals 2.";

  D.volume_prism_sh = function (r) {
    var kind = r() < 0.5;
    if (kind) {
      var l = ri(r, 4, 15), w = ri(r, 3, 12), h = ri(r, 3, 12);
      return { q: "Find the volume of a cuboid " + l + " cm by " + w + " cm by " + h + " cm.", a: "V = " + l + " \u00d7 " + w + " \u00d7 " + h + " = " + (l * w * h) + " cm\u00b3", n: l * w * h };
    }
    var rd = ri(r, 3, 14), ht = ri(r, 5, 20);
    var v = rt(3.14 * rd * rd * ht);
    return { q: "Find the volume of a cylinder of radius " + rd + " cm and height " + ht + " cm. Take \u03c0 = 3.14.",
             a: "V = \u03c0r\u00b2h = 3.14 \u00d7 " + (rd * rd) + " \u00d7 " + ht + " = " + v + " cm\u00b3", n: v };
  };
  M.volume_prism_sh = "A prism keeps the same cross-section all along, so V = area of cross-section \u00d7 length.";

  D.surface_prism_sh = function (r) {
    var l = ri(r, 4, 15), w = ri(r, 3, 12), h = ri(r, 3, 12);
    var s = 2 * (l * w + l * h + w * h);
    return { q: "Find the total surface area of a cuboid " + l + " cm by " + w + " cm by " + h + " cm.",
             a: "A = 2(lw + lh + wh) = 2(" + (l * w) + " + " + (l * h) + " + " + (w * h) + ") = " + s + " cm\u00b2", n: s };
  };
  M.surface_prism_sh = "Add the areas of all six faces; opposite faces of a cuboid are equal, so the formula has three pairs.";

  D.volume_pyramid_sh = function (r) {
    var b = ri(r, 4, 12), h = ri(r, 6, 18);
    var v = rt(b * b * h / 3);
    return { q: "Find the volume of a square-based pyramid with base " + b + " cm and vertical height " + h + " cm.",
             a: "V = \u2153 \u00d7 " + (b * b) + " \u00d7 " + h + " = " + v + " cm\u00b3", n: v };
  };
  M.volume_pyramid_sh = "A pyramid holds one third of the prism on the same base and height, so V = \u2153 \u00d7 base area \u00d7 vertical height.";

  D.volume_cone_sh = function (r) {
    var rd = ri(r, 3, 10), h = ri(r, 4, 15);
    var v = rt(3.14 * rd * rd * h / 3);
    return { q: "Find the volume of a cone of radius " + rd + " cm and height " + h + " cm. Take \u03c0 = 3.14.",
             a: "V = \u2153\u03c0r\u00b2h = \u2153 \u00d7 3.14 \u00d7 " + (rd * rd) + " \u00d7 " + h + " = " + v + " cm\u00b3", n: v };
  };
  M.volume_cone_sh = "A cone is one third of the cylinder on the same base and height, so V = \u2153\u03c0r\u00b2h.";

  D.surface_cone_sh = function (r) {
    var trip = [[3, 4, 5], [6, 8, 10], [5, 12, 13]];
    var t = one(trip, r);
    var rd = t[0], l = t[2];
    var curved = rt(3.14 * rd * l), total = rt(curved + 3.14 * rd * rd);
    return { q: "A cone has radius " + rd + " cm and slant height " + l + " cm. Find its curved and total surface areas. Take \u03c0 = 3.14.",
             a: "Curved = \u03c0rl = " + curved + " cm\u00b2; total = " + total + " cm\u00b2", n: curved };
  };
  M.surface_cone_sh = "The curved surface is \u03c0rl using the slant height; add the base circle \u03c0r\u00b2 for the total surface area.";

  D.volume_sphere_sh = function (r) {
    var rd = one([7, 14, 21], r);
    var v = rt(4 / 3 * 22 / 7 * rd * rd * rd);
    return { q: "Find the volume of a sphere of radius " + rd + " cm. Take \u03c0 = 22/7.", a: "V = 4/3 \u03c0r\u00b3 = " + v + " cm\u00b3", n: v };
  };
  M.volume_sphere_sh = "V = 4/3 \u03c0r\u00b3; the radius is cubed, so the answer is in cubic units.";

  D.surface_sphere_sh = function (r) {
    var rd = one([7, 14, 21], r);
    var s = rt(4 * 22 / 7 * rd * rd);
    return { q: "Find the surface area of a sphere of radius " + rd + " cm. Take \u03c0 = 22/7.", a: "A = 4\u03c0r\u00b2 = " + s + " cm\u00b2", n: s };
  };
  M.surface_sphere_sh = "The surface area of a sphere is 4\u03c0r\u00b2, exactly four times the area of the great circle.";

  D.solid_diagonal_sh = function (r) {
    var l = ri(r, 3, 12), w = ri(r, 3, 12), h = ri(r, 3, 12);
    var d = rt(Math.sqrt(l * l + w * w + h * h));
    return { q: "Find the length of the space diagonal of a cuboid " + l + " cm by " + w + " cm by " + h + " cm.",
             a: "d = \u221a(" + l + "\u00b2 + " + w + "\u00b2 + " + h + "\u00b2) = \u221a" + (l * l + w * w + h * h) + " = " + d + " cm", n: d };
  };
  M.solid_diagonal_sh = "Apply Pythagoras twice: first for the diagonal of the base, then again with the height, giving \u221a(l\u00b2 + w\u00b2 + h\u00b2).";

  D.latitude_distance_sh = function (r) {
    var R = 6400, ang = ri(r, 5, 30) * 2, lat = one([0, 30, 60], r);
    var d = rt(ang / 360 * 2 * 22 / 7 * R * Math.cos(lat * Math.PI / 180));
    return { q: "Two towns on latitude " + lat + "\u00b0" + (lat === 0 ? " (the equator)" : "") + " differ in longitude by " + ang + "\u00b0. Find the distance between them along the parallel of latitude. Take R = 6 400 km and \u03c0 = 22/7.",
             a: "d = (" + ang + "/360) \u00d7 2\u03c0R cos " + lat + "\u00b0 = " + d + " km", n: d };
  };
  M.latitude_distance_sh = "A parallel of latitude is a circle of radius R cos \u03c6, so the distance is the fraction of that smaller circle, not of the equator.";

  /* ============================ COUNTING AND PROBABILITY 12 ============================ */
  D.counting_principle_sh = function (r) {
    var a = ri(r, 2, 6), b = ri(r, 2, 5), c = ri(r, 2, 4);
    return { q: "A pupil has " + a + " shirts, " + b + " pairs of trousers and " + c + " pairs of shoes. How many different outfits are possible?",
             a: a + " \u00d7 " + b + " \u00d7 " + c + " = " + (a * b * c) + " outfits", n: a * b * c };
  };
  M.counting_principle_sh = "Multiply the number of ways each independent choice can be made; every choice pairs with every choice at the next stage.";

  D.factorial_sh = function (r) {
    var n = ri(r, 3, 7), f = 1, i;
    for (i = 2; i <= n; i++) f *= i;
    return { q: "Evaluate " + n + "!", a: n + " \u00d7 " + (n - 1) + " \u00d7 \u2026 \u00d7 1 = " + f, n: f };
  };
  M.factorial_sh = "n! is the product of all the counting numbers from 1 to n; 0! is defined as 1 so the counting formulas stay consistent.";

  D.permutation_sh = function (r) {
    var n = ri(r, 5, 9), k = ri(r, 2, 4), f = 1, i;
    for (i = 0; i < k; i++) f *= (n - i);
    return { q: "In how many ways can " + k + " officers be chosen in order from " + n + " members?",
             a: n + "P" + k + " = " + n + "!/" + (n - k) + "! = " + f, n: f };
  };
  M.permutation_sh = "\u207fP\u1d63 = n!/(n \u2212 r)! counts arrangements where order matters: there are n choices for the first, n \u2212 1 for the next, and so on.";

  D.combination_sh = function (r) {
    var n = ri(r, 5, 9), k = ri(r, 2, 4), num = 1, den = 1, i;
    for (i = 0; i < k; i++) { num *= (n - i); den *= (i + 1); }
    var c = Math.round(num / den);
    return { q: "In how many ways can a committee of " + k + " be chosen from " + n + " members?",
             a: n + "C" + k + " = " + n + "!/(" + k + "!" + (n - k) + "!) = " + c, n: c };
  };
  M.combination_sh = "\u207fC\u1d63 = n!/[r!(n \u2212 r)!] counts selections where order does not matter, so the r! arrangements of each group are divided out.";

  /* ============================ DIFFERENTIATION AND INTEGRATION ============================ */
  D.differentiate_sh = function (r) {
    var a = nz(r, 2, 6), n = ri(r, 2, 4), b = nz(r, -8, 8), c = nz(r, -9, 9);
    var q = term(a, "x", n, true) + term(b, "x", 1, false) + term(c, "", 0, false);
    var res = term(a * n, "x", n - 1, true) + term(b, "x", 1, false);
    return { q: "Differentiate y = " + q + " with respect to x.", a: "dy/dx = " + res, n: a * n };
  };
  M.differentiate_sh = "Apply d/dx of x\u207f = nx\u207f\u207b\u00b9 to each term separately; a constant differentiates to zero.";

  D.gradient_at_sh = function (r) {
    var a = nz(r, 1, 4), b = nz(r, -6, 6), x = ri(r, -4, 5);
    var m = 2 * a * x + b;
    return { q: "Find the gradient of y = " + term(a, "x", 2, true) + term(b, "x", 1, false) + " at the point where x = " + mn(x) + ".",
             a: "dy/dx = " + (2 * a) + "x " + sgn(b) + ", so the gradient is " + mn(m), n: m };
  };
  M.gradient_at_sh = "Differentiate to get the gradient function, then substitute the x value of the point.";

  D.turning_point_sh = function (r) {
    var a = one([1, 1, 2], r), h = nz(r, -5, 5), k = nz(r, -9, 9);
    var b = -2 * a * h, c = a * h * h + k;
    return { q: "Find the turning point of y = " + term(a, "x", 2, true) + term(b, "x", 1, false) + term(c, "", 0, false) + " using differentiation.",
             a: "dy/dx = " + (2 * a) + "x " + sgn(b) + " = 0 gives x = " + mn(h) + ", and y = " + mn(k) + ", so the turning point is (" + mn(h) + ", " + mn(k) + ")", n: h + k };
  };
  M.turning_point_sh = "At a turning point the gradient is zero, so set dy/dx = 0, solve for x and substitute back to find y.";

  D.max_min_sh = function (r) {
    var k = ri(r, 20, 100);
    var area = rt(k * k / 4);
    return { q: "A farmer has " + k + " m of fencing for a rectangular pen. Use differentiation to find the greatest possible area.",
             a: "A = x(" + (k / 2) + " \u2212 x); dA/dx = " + (k / 2) + " \u2212 2x = 0 gives x = " + (k / 4) + ", so the greatest area is " + area + " m\u00b2", n: area };
  };
  M.max_min_sh = "Write the quantity to be optimized as a function of one variable, differentiate, set the derivative to zero and check that it is a maximum.";

  D.integrate_sh = function (r) {
    /* keep the two powers different so the integrand is never "7x + x", and keep
       b even so no answer needs a half written as 0.5 */
    var a = nz(r, 2, 9), n = ri(r, 2, 3), b = 2 * nz(r, -4, 4);
    var q = term(a, "x", n, true) + term(b, "x", 1, false);
    var c1 = simpFrac(a, n + 1);
    var res = (c1 === "1" ? "" : c1) + "x" + sup(n + 1) + term(b / 2, "x", 2, false);
    return { q: "Find \u222b(" + q + ") dx.", a: res + " + c", n: a };
  };
  M.integrate_sh = "Add 1 to each power and divide by the new power; always add the constant of integration c.";

  D.definite_integral_sh = function (r) {
    var a = nz(r, 1, 4), n = ri(r, 1, 3), lo = ri(r, 0, 2), hi = lo + ri(r, 1, 3);
    function F(x) { return a * Math.pow(x, n + 1) / (n + 1); }
    var v = rt(F(hi) - F(lo));
    var c1 = simpFrac(a, n + 1);
    return { q: "Evaluate the integral from " + lo + " to " + hi + " of " + (a === 1 ? "" : a) + "x" + (n === 1 ? "" : sup(n)) + " dx.",
             a: "[" + (c1 === "1" ? "" : c1) + "x" + sup(n + 1) + "] from " + lo + " to " + hi +
                " = " + (v === Math.round(v) ? v : v.toFixed(2)) + " square units", n: v };
  };
  M.definite_integral_sh = "Integrate, then substitute the upper limit and subtract the value at the lower limit; the constant of integration cancels.";

  /* ============================ LINEAR PROGRAMMING AND REGIONS ============================ */
  D.inequality_region_sh = function (r) {
    var m = nz(r, -3, 3), c = nz(r, -5, 5);
    var op = one([">", "<", "\u2265", "\u2264"], r);
    var solid = op === "\u2265" || op === "\u2264";
    var above = op === ">" || op === "\u2265";
    var line = cx(m, "x") + term(c, "", 0, false);
    return { q: "Describe how to graph y " + op + " " + line + " and shade the required region.",
             a: "Draw the line y = " + line + (solid ? " solid" : " dashed") + " and shade " + (above ? "above" : "below") + " it, because " + (above ? "greater means larger y values" : "less means smaller y values") + "." };
  };
  M.inequality_region_sh = "Use a solid line for \u2264 or \u2265 and a dashed line for < or >; shade above the line for greater than and below it for less than.";

  D.linear_program_sh = function (r) {
    var A = ri(r, 2, 6), B = ri(r, 2, 6);
    var x = ri(r, 3, 12), y = ri(r, 3, 12);
    var corners = [[0, 0], [x, 0], [0, y], [Math.round(x / 2), Math.round(y / 2)]];
    var best = -1, bc = null;
    corners.forEach(function (p) { var v = A * p[0] + B * p[1]; if (v > best) { best = v; bc = p; } });
    return { q: "Maximize P = " + A + "x + " + B + "y over a feasible region with corners (0, 0), (" + x + ", 0), (0, " + y + ") and (" + Math.round(x / 2) + ", " + Math.round(y / 2) + ").",
             a: "Evaluate P at each corner; the greatest is " + best + " at (" + bc.join(", ") + ")", n: best };
  };
  M.linear_program_sh = "Evaluate the objective function at every corner of the feasible region; the optimum always occurs at a corner.";

  /* ============================ MODULAR ARITHMETIC ============================ */
  D.mod_remainder_sh = function (r) {
    var n = ri(r, 20, 300), m = ri(r, 3, 12);
    var q = Math.floor(n / m), rem = n - q * m;
    return { q: "Find the remainder when " + n + " is divided by " + m + ", and write the result in mod " + m + ".",
             a: n + " = " + q + " \u00d7 " + m + " + " + rem + ", so " + n + " \u2261 " + rem + " (mod " + m + ")", n: rem };
  };
  M.mod_remainder_sh = "In mod n you divide by n and keep only the remainder, so the answer is always one of 0, 1, 2, \u2026 , n \u2212 1.";

  D.mod_add_sh = function (r) {
    var m = ri(r, 4, 12), a = ri(r, 2, 3 * m), b = ri(r, 2, 3 * m);
    var s = a + b, rem = s - Math.floor(s / m) * m;
    return { q: "Evaluate " + a + " + " + b + " (mod " + m + ").",
             a: a + " + " + b + " = " + s + ", and " + s + " \u2261 " + rem + " (mod " + m + ")", n: rem };
  };
  M.mod_add_sh = "Add as usual, then divide the total by the modulus and keep the remainder.";

  D.mod_sub_sh = function (r) {
    var m = ri(r, 4, 12), a = ri(r, 1, m - 1), b = ri(r, a + 1, 2 * m);
    var d = a - b;
    while (d < 0) d += m;
    return { q: "Evaluate " + a + " \u2212 " + b + " (mod " + m + ").",
             a: a + " \u2212 " + b + " = " + (a - b) + "; add the modulus until positive, giving " + d, n: d };
  };
  M.mod_sub_sh = "Subtract as usual; if the result is negative, keep adding the modulus until it lies between 0 and n \u2212 1.";

  D.mod_mul_sh = function (r) {
    var m = ri(r, 4, 12), a = ri(r, 2, m - 1), b = ri(r, 2, m - 1);
    var p = a * b, rem = p - Math.floor(p / m) * m;
    return { q: "Evaluate " + a + " \u00d7 " + b + " (mod " + m + ").",
             a: a + " \u00d7 " + b + " = " + p + ", and " + p + " \u2261 " + rem + " (mod " + m + ")", n: rem };
  };
  M.mod_mul_sh = "Multiply first, then reduce the product by dividing by the modulus and keeping the remainder.";

  D.mod_solve_sh = function (r) {
    var m = ri(r, 5, 12), a = ri(r, 2, m - 1);
    while (gcd(a, m) !== 1) a = ri(r, 2, m - 1);
    var x = 1;
    while ((a * x) % m !== 1) x++;
    var b = ri(r, 1, m - 1);
    var sol = (x * b) % m;
    return { q: "Solve " + a + "x \u2261 " + b + " (mod " + m + ").",
             a: "The inverse of " + a + " in mod " + m + " is " + x + ", so x = " + x + " \u00d7 " + b + " \u2261 " + sol + " (mod " + m + ")", n: sol };
  };
  M.mod_solve_sh = "Find the modular inverse of the coefficient \u2014 the number that multiplies with it to give 1 \u2014 then multiply both sides by it.";

  D.mod_inverse_sh = function (r) {
    var m = ri(r, 5, 12), a = ri(r, 2, m - 1);
    while (gcd(a, m) !== 1) a = ri(r, 2, m - 1);
    var x = 1;
    while ((a * x) % m !== 1) x++;
    return { q: "Find the multiplicative inverse of " + a + " in mod " + m + ".",
             a: a + " \u00d7 " + x + " = " + (a * x) + " \u2261 1 (mod " + m + "), so the inverse is " + x, n: x };
  };
  M.mod_inverse_sh = "The inverse of a in mod n is the number a\u207b\u00b9 with a \u00d7 a\u207b\u00b9 \u2261 1 (mod n); it exists only when a and n have no common factor.";

  /* ============================ NUMBERS AND NUMERATION ============================ */
  D.prime_factor_sh = function (r) {
    var n = ri(r, 24, 400), v = n, f = 2, parts = [];
    while (v > 1) {
      if (v % f === 0) { parts.push(f); v /= f; } else f++;
    }
    var grouped = {}, i;
    parts.forEach(function (p) { grouped[p] = (grouped[p] || 0) + 1; });
    var str = Object.keys(grouped).sort(function (a, b) { return a - b; }).map(function (p) {
      return p + (grouped[p] > 1 ? (grouped[p] === 2 ? "\u00b2" : "\u00b3") : "");
    }).join(" \u00d7 ");
    return { q: "Express " + n + " as a product of its prime factors.", a: n + " = " + str, n: parts.length };
  };
  M.prime_factor_sh = "Divide by the smallest prime repeatedly, moving to the next prime each time the division is no longer exact, until only 1 is left.";

  D.hcf_lcm_sh = function (r) {
    var a = ri(r, 12, 90), b = ri(r, 12, 90);
    if (a === b) b += ri(r, 2, 20);
    var h = gcd(a, b), l = lcm(a, b);
    return { q: "Find the HCF and the LCM of " + a + " and " + b + ".",
             a: "HCF = " + h + " and LCM = " + l + " (HCF \u00d7 LCM = " + (h * l) + " = " + a + " \u00d7 " + b + ")", n: h };
  };
  M.hcf_lcm_sh = "The HCF takes the lowest power of each common prime and the LCM the highest power of every prime. Their product always equals the product of the two numbers.";

  D.number_class_sh = function (r) {
    var kinds = [
      { n: "\u22127", c: "an integer and a rational number, but not a natural number", why: "it is negative" },
      { n: "3/4", c: "a rational number but not an integer", why: "it cannot be written without a fraction" },
      { n: "\u221a5", c: "an irrational real number", why: "it is a non-exact root" },
      { n: "0", c: "an integer and a rational number, but neither positive nor negative", why: "zero is the boundary between them" },
      { n: "12", c: "a natural number, an integer and a rational number", why: "every natural number belongs to all three sets" }
    ];
    var k = one(kinds, r);
    return { q: "Classify the number " + k.n + " and explain.", a: k.n + " is " + k.c + " because " + k.why + "." };
  };
  M.number_class_sh = "The number sets are nested: natural numbers lie inside the integers, which lie inside the rationals, which together with the irrationals make up the real numbers.";

  D.root_sh = function (r) {
    var base = ri(r, 2, 9), n = one([2, 3], r);
    var v = Math.pow(base, n);
    return { q: "Evaluate the " + (n === 2 ? "square" : "cube") + " root of " + v + ".",
             a: Math.pow(base, n) + " = " + v + ", so the root is " + base, n: base };
  };
  M.root_sh = "A root undoes a power: ask what number, raised to that power, gives the value inside the root.";

  /* ============================ CIRCLES AND GRAPHS ============================ */
  D.circle_angle_sh = function (r) {
    var kinds = [
      { q: function (a) { return "An angle at the centre of a circle is " + a + "\u00b0. Find the angle subtended at the circumference by the same arc."; }, f: function (a) { return a / 2; }, why: "the angle at the centre is twice the angle at the circumference" },
      { q: function (a) { return "A chord subtends " + a + "\u00b0 at the circumference. Find the angle it subtends at the centre."; }, f: function (a) { return 2 * a; }, why: "the central angle is twice the circumference angle" },
      { q: function (a) { return "Two angles in the same segment of a circle are equal. One of them is " + a + "\u00b0. Find the other."; }, f: function (a) { return a; }, why: "angles in the same segment are equal" }
    ];
    var a = 2 * ri(r, 20, 85), k = one(kinds, r);
    return { q: k.q(a), a: k.f(a) + "\u00b0 \u2014 " + k.why, n: k.f(a) };
  };
  M.circle_angle_sh = "The central angle is always twice the angle the same arc subtends at the circumference, and angles in the same segment are equal.";

  D.graph_roots_sh = function (r) {
    var p = nz(r, -6, 6), q = nz(r, -6, 6);
    if (p === q) q += 1;
    var B = -(p + q), C = p * q;
    return { q: "From the graph of y = " + term(1, "x", 2, true) + term(B, "x", 1, false) + term(C, "", 0, false) + ", read off the roots of the equation y = 0.",
             a: "The curve crosses the x-axis at x = " + mn(p) + " and x = " + mn(q), n: p + q };
  };
  M.graph_roots_sh = "The roots are the x values where the graph crosses the x-axis, because there y = 0.";

  D.graph_sign_sh = function (r) {
    var p = nz(r, -6, 6), q = nz(r, -6, 6);
    if (p === q) q += 1;
    var lo = Math.min(p, q), hi = Math.max(p, q);
    return { q: "For y = (x " + sgn(-p) + ")(x " + sgn(-q) + "), state the values of x for which y is positive and for which it is negative.",
             a: "y > 0 when x < " + mn(lo) + " or x > " + mn(hi) + "; y < 0 when " + mn(lo) + " < x < " + mn(hi), n: hi - lo };
  };
  M.graph_sign_sh = "An upward-opening parabola lies above the x-axis outside its roots and below it between them.";

  D.graph_increase_sh = function (r) {
    var a = one([1, 1, 2], r), h = nz(r, -5, 5), k = nz(r, -9, 9);
    return { q: "For y = " + a + "(x " + sgn(h) + ")\u00b2 " + sgn(k) + ", state the values of x for which y is decreasing and for which it is increasing.",
             a: "The turning point is (" + mn(-h) + ", " + mn(k) + "), so y decreases when x < " + mn(-h) + " and increases when x > " + mn(-h), n: -h };
  };
  M.graph_increase_sh = "A parabola falls up to its turning point and rises after it, so the x value of the turning point splits the increasing and decreasing ranges.";

  D.graph_vertex_sh = function (r) {
    var a = one([1, 1, 2], r), h = nz(r, -5, 5), k = nz(r, -9, 9);
    var b = -2 * a * h, c = a * h * h + k;
    return { q: "Find the coordinates of the vertex of y = " + term(a, "x", 2, true) + term(b, "x", 1, false) + term(c, "", 0, false) + " and state the equation of its axis of symmetry.",
             a: "Vertex (" + mn(h) + ", " + mn(k) + "); axis of symmetry x = " + mn(h), n: h };
  };
  M.graph_vertex_sh = "Complete the square to read the vertex directly, or use x = \u2212b/2a; the axis of symmetry is the vertical line through the vertex.";

  D.graph_line_quad_sh = function (r) {
    var m = ri(r, 1, 3), p = nz(r, -4, 4);
    var x1 = p, x2 = p + ri(r, 1, 4);
    var c = m * x1 - x1 * x1;
    var line = cx(m, "x") + term(c, "", 0, false);
    return { q: "The line y = " + line + " meets the parabola y = x\u00b2 at two points. Find their x coordinates.",
             a: "x\u00b2 = " + line + " gives x = " + mn(x1) + " and x = " + mn(x2), n: x1 + x2 };
  };
  M.graph_line_quad_sh = "Where a line and a parabola meet, their y values are equal, so set the two expressions equal and solve the resulting quadratic.";
})(window);
