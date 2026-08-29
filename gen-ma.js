/* Mathematics exercise generation engine.
   Emits the SAME block model as the English, French and Science engines, so the
   shared renderer and .docx exporter are reused. Registered on window.GEN_MA.

   Mathematics is a COMPUTATIONAL subject, so exercise items are generated
   procedurally from the drill specifications carried by each curriculum topic
   (MA_CURRICULUM[i].drills = [{id, label, p}]). Every generator returns
   { q: question text, a: answer text, n: numeric answer when one exists }. */
(function (root) {
  "use strict";

  /* ---------------- helpers ---------------- */
  function rng(seed) {
    var a = seed >>> 0;
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      var t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function shuffle(arr, r) {
    var a = (arr || []).slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(r() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function pick(arr, n, r) { return shuffle(arr || [], r).slice(0, Math.min(n, (arr || []).length)); }
  function one(arr, r) { return arr[Math.floor(r() * arr.length)]; }
  function ri(r, lo, hi) { return lo + Math.floor(r() * (hi - lo + 1)); }
  function dots(n) { var s = ""; for (var i = 0; i < (n || 22); i++) s += "."; return s; }
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a || 1; }
  function lcm(a, b) { return a / gcd(a, b) * b; }
  function fr(n, d) { return n + "/" + d; }
  function simp(n, d) { var g = gcd(n, d); return [n / g, d / g]; }
  function mixed(n, d) {
    if (n < d) return fr(n, d);
    var w = Math.floor(n / d), rem = n % d;
    return rem === 0 ? String(w) : w + " " + fr(rem, d);
  }
  function rnd2(x) { return Math.round(x * 100) / 100; }
  function money(x) { return "L$" + (Math.round(x * 100) / 100).toFixed(2); }
  var NAMES = ["Musu", "Varney", "Korpo", "Sekou", "Massa", "Tarnue", "Bendu", "Momo", "Fatu", "Jallah",
               "Nyema", "Kou", "Saah", "Yatta", "Boakai", "Hawa"];
  var THINGS = ["oranges", "mangoes", "pencils", "exercise books", "cups of rice", "bananas",
                "plantains", "eggs", "chairs", "stones"];
  var PLACES = ["Monrovia", "Kakata", "Gbarnga", "Buchanan", "Zwedru", "Voinjama", "Harper", "Tubmanburg"];

  /* ---------------- drill generators ----------------
     Each: function (r, p) -> { q, a, n? }                                   */
  var DRILLS = {

    /* --- counting, numeration, place value --- */
    count_on: function (r, p) {
      var step = one(p.steps || [1], r), start = ri(r, 1, (p.max || 40) - step * 5);
      var s = [start, start + step, start + 2 * step];
      return { q: s.join(", ") + ", ____, ____, ____", a: [start + 3 * step, start + 4 * step, start + 5 * step].join(", ") };
    },
    count_back: function (r, p) {
      var step = one(p.steps || [1], r), start = ri(r, step * 6, p.max || 40);
      return { q: [start, start - step, start - 2 * step].join(", ") + ", ____, ____, ____",
               a: [start - 3 * step, start - 4 * step, start - 5 * step].join(", ") };
    },
    numword: function (r, p) {
      var ONES = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
      var TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
      function w(n) {
        if (n < 20) return ONES[n];
        if (n < 100) return TENS[Math.floor(n / 10)] + (n % 10 ? "-" + ONES[n % 10] : "");
        var h = Math.floor(n / 100), rest = n % 100;
        return ONES[h] + " hundred" + (rest ? " " + w(rest) : "");
      }
      var n = ri(r, p.min || 11, p.max || 99);
      return { q: "Write " + n + " in words.", a: w(n) };
    },
    place_value: function (r, p) {
      var d = p.digits || 3, lo = Math.pow(10, d - 1), hi = Math.pow(10, d) - 1;
      var n = ri(r, lo, hi), s = String(n), i = ri(r, 0, s.length - 1);
      var val = +s[i] * Math.pow(10, s.length - 1 - i);
      var NM = ["ones", "tens", "hundreds", "thousands", "ten thousands", "hundred thousands"];
      return { q: "In " + n + ", what is the place value of the digit " + s[i] + "?",
               a: val + "  (" + NM[s.length - 1 - i] + ")", n: val };
    },
    expanded: function (r, p) {
      var d = p.digits || 3, n = ri(r, Math.pow(10, d - 1), Math.pow(10, d) - 1);
      var s = String(n), parts = [];
      for (var i = 0; i < s.length; i++) if (+s[i]) parts.push(+s[i] * Math.pow(10, s.length - 1 - i));
      return { q: "Write " + n + " in expanded form.", a: parts.join(" + ") };
    },
    compare: function (r, p) {
      var a = ri(r, p.min || 1, p.max || 100), b = r() < 0.15 ? a : ri(r, p.min || 1, p.max || 100);
      return { q: a + "  ______  " + b, a: a > b ? ">" : a < b ? "<" : "=" };
    },
    order_nums: function (r, p) {
      var s = [], i;
      for (i = 0; i < 5; i++) s.push(ri(r, p.min || 1, p.max || 100));
      var up = r() < 0.5;
      var sorted = s.slice().sort(function (x, y) { return up ? x - y : y - x; });
      return { q: "Arrange in " + (up ? "ascending" : "descending") + " order:  " + s.join(",  "), a: sorted.join(", ") };
    },
    between: function (r, p) {
      var n = ri(r, 2, (p.max || 100) - 2);
      return { q: "Write the number that comes just before and just after " + n + ":   ____ , " + n + " , ____",
               a: (n - 1) + " and " + (n + 1) };
    },
    round_num: function (r, p) {
      var to = p.to || 10, n = ri(r, to * 2, p.max || 1000);
      var v = Math.round(n / to) * to;
      var NM = { 10: "nearest ten", 100: "nearest hundred", 1000: "nearest thousand" };
      return { q: "Round " + n + " to the " + (NM[to] || "nearest " + to) + ".", a: String(v), n: v };
    },
    ordinal: function (r, p) {
      var n = ri(r, 1, p.max || 20);
      var suf = (n % 100 >= 11 && n % 100 <= 13) ? "th" : ({ 1: "st", 2: "nd", 3: "rd" }[n % 10] || "th");
      return { q: "A line has many pupils. Write the ordinal for position " + n + ".", a: n + suf };
    },

    /* --- sets --- */
    set_count: function (r, p) {
      var n = ri(r, 3, 8), items = pick(THINGS, 1, r)[0];
      var list = []; for (var i = 0; i < n; i++) list.push(i + 1);
      return { q: "Set A = { " + list.join(", ") + " } of " + items + ". How many elements (members) are in Set A?",
               a: String(n), n: n };
    },
    set_union: function (r) {
      var a = pick([1, 2, 3, 4, 5, 6, 7, 8], ri(r, 3, 4), r).sort(function (x, y) { return x - y; });
      var b = pick([4, 5, 6, 7, 8, 9, 10], ri(r, 3, 4), r).sort(function (x, y) { return x - y; });
      var u = a.concat(b.filter(function (x) { return a.indexOf(x) < 0; })).sort(function (x, y) { return x - y; });
      return { q: "A = {" + a.join(", ") + "},  B = {" + b.join(", ") + "}.   Find A ∪ B.", a: "{" + u.join(", ") + "}" };
    },
    set_inter: function (r) {
      var a = pick([1, 2, 3, 4, 5, 6, 7, 8], 4, r).sort(function (x, y) { return x - y; });
      var b = pick([3, 4, 5, 6, 7, 8, 9], 4, r).sort(function (x, y) { return x - y; });
      var i2 = a.filter(function (x) { return b.indexOf(x) >= 0; });
      return { q: "A = {" + a.join(", ") + "},  B = {" + b.join(", ") + "}.   Find A ∩ B.",
               a: i2.length ? "{" + i2.join(", ") + "}" : "{ } (the empty set)" };
    },
    subsets_count: function (r) {
      var n = ri(r, 2, 5);
      return { q: "A set has " + n + " elements. How many subsets can be formed?  (use 2ⁿ)",
               a: Math.pow(2, n) + "  (2^" + n + ")", n: Math.pow(2, n) };
    },

    /* --- four operations on whole numbers --- */
    add: function (r, p) {
      var lo = p.min || 1, hi = p.max || 20, a = ri(r, lo, hi), b = ri(r, lo, hi);
      if (p.noRegroup) { a = ri(r, 11, 44); b = ri(r, 11, 44); a = a - (a % 10) + Math.min(a % 10, 4); b = b - (b % 10) + Math.min(b % 10, 5 - (a % 10) > 0 ? 4 : 0); }
      return { q: a + " + " + b + " =", a: String(a + b), n: a + b };
    },
    add_col: function (r, p) {
      var d = p.digits || 3, lo = Math.pow(10, d - 1), hi = Math.pow(10, d) - 1;
      var k = p.terms || 2, s = 0, parts = [];
      for (var i = 0; i < k; i++) { var v = ri(r, lo, hi); parts.push(v); s += v; }
      return { q: parts.join(" + ") + " =", a: String(s), n: s };
    },
    sub: function (r, p) {
      var lo = p.min || 1, hi = p.max || 20, a = ri(r, lo, hi), b = ri(r, lo, a);
      return { q: a + " − " + b + " =", a: String(a - b), n: a - b };
    },
    sub_col: function (r, p) {
      var d = p.digits || 3, lo = Math.pow(10, d - 1), hi = Math.pow(10, d) - 1;
      var a = ri(r, lo + 1, hi), b = ri(r, lo, a);
      return { q: a + " − " + b + " =", a: String(a - b), n: a - b };
    },
    missing_addend: function (r, p) {
      var s = ri(r, p.max ? Math.floor(p.max / 2) : 10, p.max || 20), a = ri(r, 1, s - 1);
      return { q: a + " + ____ = " + s, a: String(s - a), n: s - a };
    },
    number_family: function (r, p) {
      var s = p.sum || ri(r, 10, 12), a = ri(r, 1, s - 1);
      return { q: "Complete the family of " + s + ":   " + a + " + ____ = " + s + "  and  " + s + " − " + a + " = ____",
               a: (s - a) + "  and  " + (s - a) };
    },
    mul: function (r, p) {
      var a = ri(r, p.aMin || 2, p.aMax || 9), b = ri(r, p.bMin || 2, p.bMax || 9);
      return { q: a + " × " + b + " =", a: String(a * b), n: a * b };
    },
    mul_big: function (r, p) {
      var ad = p.aDigits || 3, bd = p.bDigits || 1;
      var a = ri(r, Math.pow(10, ad - 1), Math.pow(10, ad) - 1);
      var b = ri(r, Math.pow(10, bd - 1) * (bd === 1 ? 2 : 1), Math.pow(10, bd) - 1);
      return { q: a + " × " + b + " =", a: String(a * b), n: a * b };
    },
    mul_tens: function (r, p) {
      var a = ri(r, 2, 9) * (p.unit || 10), b = ri(r, 2, 9);
      return { q: a + " × " + b + " =", a: String(a * b), n: a * b };
    },
    div: function (r, p) {
      var b = ri(r, p.dMin || 2, p.dMax || 9), q = ri(r, p.qMin || 2, p.qMax || 12);
      return { q: (b * q) + " ÷ " + b + " =", a: String(q), n: q };
    },
    div_big: function (r, p) {
      var b = ri(r, p.dMin || 2, p.dMax || 9), q = ri(r, p.qMin || 20, p.qMax || 400);
      return { q: (b * q) + " ÷ " + b + " =", a: String(q), n: q };
    },
    div_rem: function (r, p) {
      var b = ri(r, p.dMin || 2, p.dMax || 9), q = ri(r, 3, p.qMax || 30), rm = ri(r, 1, b - 1);
      return { q: (b * q + rm) + " ÷ " + b + " =", a: q + " remainder " + rm };
    },
    div_zero_quot: function (r) {
      var b = ri(r, 2, 8), q = ri(r, 1, 9) * 100 + ri(r, 1, 9);
      return { q: (b * q) + " ÷ " + b + " =   (watch the zero in the quotient)", a: String(q), n: q };
    },
    order_ops: function (r) {
      var a = ri(r, 2, 9), b = ri(r, 2, 9), c = ri(r, 2, 9);
      var v = a + b * c;
      return { q: a + " + " + b + " × " + c + " =", a: String(v) + "   (multiply first)", n: v };
    },
    property_fill: function (r, p) {
      var a = ri(r, 2, 12), b = ri(r, 2, 12), c = ri(r, 2, 9);
      var kind = one(p.kinds || ["commutative_add", "commutative_mul", "associative_add", "identity_mul", "zero_add", "distributive"], r);
      switch (kind) {
        case "commutative_add": return { q: a + " + " + b + " = ____ + " + a + "   (commutative property)", a: String(b), n: b };
        case "commutative_mul": return { q: a + " × " + b + " = ____ × " + a + "   (commutative property)", a: String(b), n: b };
        case "associative_add": return { q: "(" + a + " + " + b + ") + " + c + " = " + a + " + (____ + " + c + ")", a: String(b), n: b };
        case "identity_mul": return { q: a + " × ____ = " + a + "   (identity element of multiplication)", a: "1", n: 1 };
        case "zero_add": return { q: a + " + ____ = " + a + "   (identity element of addition)", a: "0", n: 0 };
        default: return { q: a + " × (" + b + " + " + c + ") = (" + a + " × " + b + ") + (" + a + " × ____)   (distributive property)", a: String(c), n: c };
      }
    },
    open_sentence: function (r, p) {
      var a = ri(r, 2, p.max || 20), b = ri(r, 2, p.max || 20);
      return r() < 0.5
        ? { q: "n + " + a + " = " + (a + b) + " ,   n = ____", a: String(b), n: b }
        : { q: a + " × n = " + (a * b) + " ,   n = ____", a: String(b), n: b };
    },

    /* --- number theory --- */
    even_odd: function (r, p) {
      var n = ri(r, 2, p.max || 100);
      return { q: "Is " + n + " even or odd?", a: n % 2 === 0 ? "even" : "odd" };
    },
    factors: function (r, p) {
      var n = one(p.pool || [12, 16, 18, 20, 24, 28, 30, 36, 40, 45, 48], r), f = [];
      for (var i = 1; i <= n; i++) if (n % i === 0) f.push(i);
      return { q: "List all the factors of " + n + ".", a: f.join(", ") };
    },
    multiples: function (r, p) {
      var n = ri(r, 2, p.max || 12);
      var m = []; for (var i = 1; i <= 6; i++) m.push(n * i);
      return { q: "Write the first six multiples of " + n + ".", a: m.join(", ") };
    },
    prime_check: function (r, p) {
      var n = ri(r, 2, p.max || 50);
      var isP = n > 1; for (var i = 2; i * i <= n; i++) if (n % i === 0) { isP = false; break; }
      return { q: "Is " + n + " a prime number or a composite number?", a: isP ? "prime" : "composite" };
    },
    prime_factor: function (r, p) {
      var n = one(p.pool || [12, 18, 20, 24, 28, 30, 36, 40, 42, 45, 48, 50, 54, 60], r), m = n, f = [];
      for (var d = 2; d <= m; d++) while (m % d === 0) { f.push(d); m /= d; }
      return { q: "Write " + n + " as a product of its prime factors.", a: f.join(" × ") };
    },
    gcf: function (r, p) {
      var a = one(p.pool || [12, 16, 18, 20, 24, 28, 30, 36, 40, 48], r);
      var b = one((p.pool || [12, 16, 18, 20, 24, 28, 30, 36, 40, 48]).filter(function (x) { return x !== a; }), r);
      return { q: "Find the GCF (greatest common factor) of " + a + " and " + b + ".", a: String(gcd(a, b)), n: gcd(a, b) };
    },
    lcm_q: function (r, p) {
      var a = ri(r, 2, p.max || 12), b = ri(r, 2, p.max || 12);
      return { q: "Find the LCM (lowest common multiple) of " + a + " and " + b + ".", a: String(lcm(a, b)), n: lcm(a, b) };
    },
    divisibility: function (r) {
      var d = one([2, 3, 4, 5], r), n = ri(r, 20, 500);
      return { q: "Is " + n + " divisible by " + d + "?  Give the reason.",
               a: (n % d === 0 ? "Yes" : "No") + " — " + n + " ÷ " + d + " leaves remainder " + (n % d) };
    },
    square_num: function (r, p) {
      var n = ri(r, 2, p.max || 12);
      return { q: n + "² =", a: String(n * n), n: n * n };
    },
    square_root: function (r, p) {
      var n = ri(r, 2, p.max || 12);
      return { q: "√" + (n * n) + " =", a: String(n), n: n };
    },
    cube_num: function (r, p) {
      var n = ri(r, 2, p.max || 8);
      return { q: n + "³ =", a: String(n * n * n), n: n * n * n };
    },

    /* --- fractions --- */
    frac_name: function (r, p) {
      var d = one(p.dens || [2, 3, 4, 6, 8], r), n = ri(r, 1, d - 1);
      return { q: "A shape is divided into " + d + " equal parts and " + n + " part(s) are shaded. Write the fraction shaded.",
               a: fr(n, d) };
    },
    frac_compare: function (r, p) {
      var d = one(p.dens || [2, 3, 4, 5, 6, 8, 10], r), e = one((p.dens || [2, 3, 4, 5, 6, 8, 10]).filter(function (x) { return x !== d; }), r);
      var a = ri(r, 1, d - 1), b = ri(r, 1, e - 1);
      var x = a / d, y = b / e;
      return { q: fr(a, d) + "  ______  " + fr(b, e) + "   (write <, > or =)", a: x > y ? ">" : x < y ? "<" : "=" };
    },
    frac_equiv: function (r, p) {
      var d = one(p.dens || [2, 3, 4, 5], r), n = ri(r, 1, d - 1), k = ri(r, 2, 5);
      return { q: fr(n, d) + " = ____ / " + (d * k), a: String(n * k), n: n * k };
    },
    frac_simplify: function (r, p) {
      var d = one(p.dens || [4, 6, 8, 9, 10, 12, 15, 16, 18, 20], r), n = ri(r, 1, d - 1);
      var s = simp(n, d);
      return { q: "Reduce " + fr(n, d) + " to its lowest terms.", a: fr(s[0], s[1]) };
    },
    frac_add_like: function (r, p) {
      var d = one(p.dens || [4, 5, 6, 8, 10, 12], r), a = ri(r, 1, d - 2), b = ri(r, 1, d - a);
      var s = simp(a + b, d);
      return { q: fr(a, d) + " + " + fr(b, d) + " =", a: (a + b === d ? "1" : fr(s[0], s[1])) };
    },
    frac_sub_like: function (r, p) {
      var d = one(p.dens || [4, 5, 6, 8, 10, 12], r), a = ri(r, 2, d - 1), b = ri(r, 1, a - 1);
      var s = simp(a - b, d);
      return { q: fr(a, d) + " − " + fr(b, d) + " =", a: fr(s[0], s[1]) };
    },
    frac_add_unlike: function (r, p) {
      var pool = p.dens || [2, 3, 4, 5, 6, 8];
      var d = one(pool, r), e = one(pool.filter(function (x) { return x !== d; }), r);
      var a = ri(r, 1, d - 1), b = ri(r, 1, e - 1);
      var L = lcm(d, e), n = a * (L / d) + b * (L / e), s = simp(n, L);
      return { q: fr(a, d) + " + " + fr(b, e) + " =   (LCD = " + L + ")", a: mixed(s[0], s[1]) };
    },
    frac_sub_unlike: function (r, p) {
      var pool = p.dens || [2, 3, 4, 5, 6, 8];
      var d = one(pool, r), e = one(pool.filter(function (x) { return x !== d; }), r);
      var a = ri(r, 1, d - 1), b = ri(r, 1, e - 1);
      var L = lcm(d, e), n1 = a * (L / d), n2 = b * (L / e);
      if (n1 < n2) { var t = n1; n1 = n2; n2 = t; var td = d; d = e; e = td; var ta = a; a = b; b = ta; }
      var s = simp(n1 - n2, L);
      return { q: fr(a, d) + " − " + fr(b, e) + " =   (LCD = " + L + ")", a: n1 === n2 ? "0" : fr(s[0], s[1]) };
    },
    frac_mul_whole: function (r, p) {
      var d = one(p.dens || [2, 3, 4, 5, 6, 8], r), n = ri(r, 1, d - 1), w = ri(r, 2, 9);
      var s = simp(n * w, d);
      return { q: w + " × " + fr(n, d) + " =", a: mixed(s[0], s[1]) };
    },
    frac_mul: function (r, p) {
      var pool = p.dens || [2, 3, 4, 5, 6, 8];
      var d = one(pool, r), e = one(pool, r), a = ri(r, 1, d - 1), b = ri(r, 1, e - 1);
      var s = simp(a * b, d * e);
      return { q: fr(a, d) + " × " + fr(b, e) + " =", a: fr(s[0], s[1]) };
    },
    frac_div: function (r, p) {
      var pool = p.dens || [2, 3, 4, 5, 6, 8];
      var d = one(pool, r), e = one(pool, r), a = ri(r, 1, d - 1), b = ri(r, 1, e - 1);
      var s = simp(a * e, d * b);
      return { q: fr(a, d) + " ÷ " + fr(b, e) + " =   (invert the divisor and multiply)", a: mixed(s[0], s[1]) };
    },
    mixed_add: function (r, p) {
      var d = one(p.dens || [3, 4, 5, 6, 8], r);
      var w1 = ri(r, 1, 5), n1 = ri(r, 1, d - 1), w2 = ri(r, 1, 5), n2 = ri(r, 1, d - 1);
      var tot = (w1 * d + n1) + (w2 * d + n2), s = simp(tot, d);
      return { q: w1 + " " + fr(n1, d) + "  +  " + w2 + " " + fr(n2, d) + " =", a: mixed(s[0], s[1]) };
    },
    frac_to_dec: function (r, p) {
      var pair = one(p.pool || [[1, 2], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [4, 5], [1, 10], [7, 10], [1, 8], [3, 8]], r);
      var v = pair[0] / pair[1];
      return { q: "Change " + fr(pair[0], pair[1]) + " to a decimal.", a: String(v), n: v };
    },
    dec_to_frac: function (r, p) {
      var v = one(p.pool || [0.5, 0.25, 0.75, 0.2, 0.4, 0.6, 0.8, 0.1, 0.125], r);
      var d = 1000, n = Math.round(v * 1000), s = simp(n, d);
      return { q: "Change " + v + " to a fraction in its lowest terms.", a: fr(s[0], s[1]) };
    },
    part_of_set: function (r, p) {
      var d = one(p.dens || [2, 3, 4, 5], r), w = d * ri(r, 2, 6), n = ri(r, 1, d - 1);
      return { q: "Find " + fr(n, d) + " of " + w + " " + one(THINGS, r) + ".", a: String(w / d * n), n: w / d * n };
    },

    /* --- decimals --- */
    dec_add: function (r, p) {
      var pl = p.places || 2, k = Math.pow(10, pl);
      var a = ri(r, 10, (p.max || 100) * k) / k, b = ri(r, 10, (p.max || 100) * k) / k;
      var v = Math.round((a + b) * k) / k;
      return { q: a.toFixed(pl) + " + " + b.toFixed(pl) + " =", a: v.toFixed(pl), n: v };
    },
    dec_sub: function (r, p) {
      var pl = p.places || 2, k = Math.pow(10, pl);
      var a = ri(r, 100, (p.max || 100) * k) / k, b = ri(r, 10, Math.round(a * k)) / k;
      var v = Math.round((a - b) * k) / k;
      return { q: a.toFixed(pl) + " − " + b.toFixed(pl) + " =", a: v.toFixed(pl), n: v };
    },
    dec_mul: function (r, p) {
      var a = ri(r, 11, 99) / 10, b = ri(r, 2, 9) / (p.bDec ? 10 : 1);
      var v = Math.round(a * b * 100) / 100;
      return { q: a + " × " + b + " =", a: String(v), n: v };
    },
    dec_div: function (r) {
      var q = ri(r, 2, 12), b = ri(r, 2, 9), a = Math.round(q * b * 10) / 10;
      return { q: (a) + " ÷ " + b + " =", a: String(Math.round(a / b * 100) / 100), n: Math.round(a / b * 100) / 100 };
    },
    dec_round: function (r, p) {
      var to = p.to || 0.1, n = Math.round(ri(r, 1000, 99999) / 1000 * 1000) / 1000;
      var v = Math.round(n / to) * to;
      v = Math.round(v * 1000) / 1000;
      var NM = { 0.1: "nearest tenth", 0.01: "nearest hundredth", 0.001: "nearest thousandth" };
      return { q: "Round " + n + " to the " + NM[to] + ".", a: String(v), n: v };
    },
    dec_compare: function (r) {
      var a = Math.round(ri(r, 10, 999) / 10 * 10) / 100, b = Math.round(ri(r, 10, 999) / 10 * 10) / 100;
      return { q: a + "  ______  " + b + "   (write <, > or =)", a: a > b ? ">" : a < b ? "<" : "=" };
    },

    /* --- percent, ratio, proportion --- */
    percent_of: function (r, p) {
      var pc = one(p.pcs || [10, 20, 25, 50, 75], r), w = ri(r, 2, 20) * 20;
      var v = w * pc / 100;
      return { q: "Find " + pc + "% of " + w + ".", a: String(v), n: v };
    },
    percent_frac: function (r, p) {
      var pc = one(p.pcs || [10, 20, 25, 40, 50, 60, 75, 80], r);
      var s = simp(pc, 100);
      return { q: "Write " + pc + "% as a fraction in its lowest terms.", a: fr(s[0], s[1]) };
    },
    percent_dec: function (r, p) {
      var pc = one(p.pcs || [5, 10, 12, 25, 40, 55, 70, 90], r);
      return { q: "Write " + pc + "% as a decimal.", a: String(pc / 100), n: pc / 100 };
    },
    ratio_simplify: function (r) {
      var k = ri(r, 2, 8), a = ri(r, 1, 9) * k, b = ri(r, 1, 9) * k, g = gcd(a, b);
      return { q: "Write the ratio " + a + " : " + b + " in its simplest form.", a: (a / g) + " : " + (b / g) };
    },
    ratio_share: function (r) {
      var a = ri(r, 1, 4), b = ri(r, 1, 4), unit = ri(r, 2, 12) * 5, tot = unit * (a + b);
      return { q: money(tot).replace(".00", "") + " is shared between " + one(NAMES, r) + " and " + one(NAMES, r) +
                  " in the ratio " + a + " : " + b + ". How much does each receive?",
               a: money(unit * a).replace(".00", "") + " and " + money(unit * b).replace(".00", "") };
    },
    proportion: function (r) {
      var a = ri(r, 2, 9), b = ri(r, 2, 9), k = ri(r, 2, 6);
      return { q: a + " : " + b + "  =  " + (a * k) + " : ____", a: String(b * k), n: b * k };
    },
    rate: function (r) {
      var n = ri(r, 2, 9), cost = ri(r, 5, 40) * n, k = ri(r, 2, 6);
      return { q: n + " " + one(THINGS, r) + " cost " + money(cost).replace(".00", "") + ". What is the cost of " + (n * k) + "?",
               a: money(cost * k).replace(".00", ""), n: cost * k };
    },

    /* --- measurement --- */
    convert_metric: function (r, p) {
      var kind = one(p.kinds || ["m_cm", "km_m", "kg_g", "l_ml", "cm_mm"], r);
      var n = ri(r, 2, 20);
      var M = {
        m_cm: [n + " m = ____ cm", n * 100], km_m: [n + " km = ____ m", n * 1000],
        kg_g: [n + " kg = ____ g", n * 1000], l_ml: [n + " L = ____ mL", n * 1000],
        cm_mm: [n + " cm = ____ mm", n * 10]
      };
      return { q: M[kind][0], a: String(M[kind][1]), n: M[kind][1] };
    },
    convert_customary: function (r, p) {
      var kind = one(p.kinds || ["ft_in", "yd_ft", "gal_qt", "qt_pt", "lb_oz"], r);
      var n = ri(r, 2, 12);
      var M = {
        ft_in: [n + " feet = ____ inches", n * 12], yd_ft: [n + " yards = ____ feet", n * 3],
        gal_qt: [n + " gallons = ____ quarts", n * 4], qt_pt: [n + " quarts = ____ pints", n * 2],
        lb_oz: [n + " pounds = ____ ounces", n * 16]
      };
      return { q: M[kind][0], a: String(M[kind][1]), n: M[kind][1] };
    },
    convert_time: function (r, p) {
      var kind = one(p.kinds || ["h_min", "min_s", "d_h", "wk_d"], r), n = ri(r, 2, 12);
      var M = { h_min: [n + " hours = ____ minutes", n * 60], min_s: [n + " minutes = ____ seconds", n * 60],
                d_h: [n + " days = ____ hours", n * 24], wk_d: [n + " weeks = ____ days", n * 7] };
      return { q: M[kind][0], a: String(M[kind][1]), n: M[kind][1] };
    },
    elapsed_time: function (r) {
      var h1 = ri(r, 7, 11), m1 = one([0, 15, 30, 45], r), add = ri(r, 1, 4) * 30;
      var t = h1 * 60 + m1 + add, h2 = Math.floor(t / 60), m2 = t % 60;
      function f(h, m) { return h + ":" + (m < 10 ? "0" + m : m); }
      return { q: "A class starts at " + f(h1, m1) + " and ends at " + f(h2, m2) + ". How long is the class?",
               a: Math.floor(add / 60) + " hour(s) " + (add % 60) + " minutes" };
    },
    tell_time: function (r) {
      var h = ri(r, 1, 12), m = one([0, 15, 30, 45], r);
      var w = m === 0 ? h + " o'clock" : m === 15 ? "quarter past " + h : m === 30 ? "half past " + h
        : "quarter to " + (h === 12 ? 1 : h + 1);
      return { q: "Write this time in words:  " + h + ":" + (m < 10 ? "0" + m : m), a: w };
    },
    money_add: function (r) {
      var a = ri(r, 5, 200) * 5, b = ri(r, 5, 200) * 5;
      return { q: money(a).replace(".00", "") + " + " + money(b).replace(".00", "") + " =",
               a: money(a + b).replace(".00", ""), n: a + b };
    },
    money_change: function (r) {
      var cost = ri(r, 5, 90) * 5, paid = Math.ceil(cost / 100) * 100;
      return { q: one(NAMES, r) + " buys goods for " + money(cost).replace(".00", "") + " and pays with " +
                  money(paid).replace(".00", "") + ". How much change?",
               a: money(paid - cost).replace(".00", ""), n: paid - cost };
    },
    perimeter_rect: function (r) {
      var l = ri(r, 3, 20), w = ri(r, 2, 15);
      return { q: "Find the perimeter of a rectangle " + l + " cm long and " + w + " cm wide.",
               a: (2 * (l + w)) + " cm", n: 2 * (l + w) };
    },
    area_rect: function (r) {
      var l = ri(r, 3, 20), w = ri(r, 2, 15);
      return { q: "Find the area of a rectangle " + l + " cm by " + w + " cm.", a: (l * w) + " cm²", n: l * w };
    },
    area_square: function (r) {
      var s = ri(r, 2, 15);
      return { q: "Find the area and the perimeter of a square of side " + s + " cm.",
               a: "Area = " + (s * s) + " cm², Perimeter = " + (4 * s) + " cm" };
    },
    area_tri: function (r) {
      var b = ri(r, 2, 10) * 2, h = ri(r, 3, 15);
      return { q: "Find the area of a triangle with base " + b + " cm and height " + h + " cm.  (A = ½ × b × h)",
               a: (b * h / 2) + " cm²", n: b * h / 2 };
    },
    area_para: function (r) {
      var b = ri(r, 3, 15), h = ri(r, 2, 12);
      return { q: "Find the area of a parallelogram with base " + b + " cm and height " + h + " cm.",
               a: (b * h) + " cm²", n: b * h };
    },
    circumference: function (r) {
      var d = ri(r, 1, 10) * 7;
      var c = Math.round(22 / 7 * d * 100) / 100;
      return { q: "Find the circumference of a circle of diameter " + d + " cm.  (use π = 22/7)", a: c + " cm", n: c };
    },
    area_circle: function (r) {
      var rad = ri(r, 1, 5) * 7;
      var a = Math.round(22 / 7 * rad * rad * 100) / 100;
      return { q: "Find the area of a circle of radius " + rad + " cm.  (A = πr², π = 22/7)", a: a + " cm²", n: a };
    },
    volume_cube: function (r) {
      var s = ri(r, 2, 10);
      return { q: "Find the volume of a cube of side " + s + " cm.", a: (s * s * s) + " cm³", n: s * s * s };
    },
    volume_prism: function (r) {
      var l = ri(r, 2, 10), w = ri(r, 2, 8), h = ri(r, 2, 8);
      return { q: "Find the volume of a box " + l + " cm × " + w + " cm × " + h + " cm.",
               a: (l * w * h) + " cm³", n: l * w * h };
    },
    temperature: function (r) {
      var c = ri(r, 0, 40);
      var f = Math.round((c * 9 / 5 + 32) * 10) / 10;
      return { q: "Change " + c + " °C to °F.  (F = 9/5 C + 32)", a: f + " °F", n: f };
    },

    /* --- geometry --- */
    angle_type: function (r) {
      var a = ri(r, 5, 175);
      return { q: "An angle measures " + a + "°. Name the kind of angle.",
               a: a < 90 ? "acute" : a === 90 ? "right" : a < 180 ? "obtuse" : "straight" };
    },
    angle_missing: function (r) {
      var a = ri(r, 20, 70);
      return r() < 0.5
        ? { q: "Two angles are complementary. One is " + a + "°. Find the other.", a: (90 - a) + "°", n: 90 - a }
        : { q: "Two angles are supplementary. One is " + a + "°. Find the other.", a: (180 - a) + "°", n: 180 - a };
    },
    triangle_angle: function (r) {
      var a = ri(r, 30, 80), b = ri(r, 30, 80);
      return { q: "Two angles of a triangle are " + a + "° and " + b + "°. Find the third angle.",
               a: (180 - a - b) + "°", n: 180 - a - b };
    },
    shape_sides: function (r, p) {
      var S = p.pool || [["triangle", 3], ["square", 4], ["rectangle", 4], ["pentagon", 5], ["hexagon", 6], ["quadrilateral", 4]];
      var s = one(S, r);
      return { q: "How many sides has a " + s[0] + "?", a: String(s[1]), n: s[1] };
    },
    name_shape: function (r, p) {
      var S = p.pool || [
        ["a flat shape with 3 straight sides", "triangle"],
        ["a flat shape with 4 equal sides and 4 right angles", "square"],
        ["a round flat shape with no corners", "circle"],
        ["a flat shape with 4 sides, opposite sides equal", "rectangle"],
        ["a solid shape like a ball", "sphere"],
        ["a solid shape with 6 square faces", "cube"]
      ];
      var s = one(S, r);
      return { q: "Name the shape: " + s[0] + ".", a: s[1] };
    },

    /* --- statistics --- */
    mean: function (r, p) {
      var k = p.count || 5, s = [], tot = 0;
      for (var i = 0; i < k; i++) { var v = ri(r, 2, 20); s.push(v); tot += v; }
      var diff = tot % k;
      if (diff) { s[0] += (k - diff); tot += (k - diff); }
      return { q: "Find the mean of:  " + s.join(", "), a: String(tot / k), n: tot / k };
    },
    median: function (r) {
      var s = []; for (var i = 0; i < 5; i++) s.push(ri(r, 1, 30));
      var so = s.slice().sort(function (a, b) { return a - b; });
      return { q: "Find the median of:  " + s.join(", "), a: String(so[2]), n: so[2] };
    },
    mode: function (r) {
      var v = ri(r, 1, 20), s = [v, v, ri(r, 21, 30), ri(r, 31, 40), ri(r, 41, 50)];
      return { q: "Find the mode of:  " + shuffle(s, r).join(", "), a: String(v), n: v };
    },
    range_stat: function (r) {
      var s = []; for (var i = 0; i < 6; i++) s.push(ri(r, 1, 60));
      var mx = Math.max.apply(null, s), mn = Math.min.apply(null, s);
      return { q: "Find the range of:  " + s.join(", "), a: String(mx - mn) + "  (" + mx + " − " + mn + ")", n: mx - mn };
    },
    read_graph: function (r) {
      var towns = pick(PLACES, 4, r), vals = towns.map(function () { return ri(r, 2, 9) * 10; });
      var mx = Math.max.apply(null, vals);
      return { q: "A bar graph shows pupils enrolled:  " +
                  towns.map(function (t, i) { return t + " = " + vals[i]; }).join(",  ") +
                  ".\n     (a) Which place has the most pupils?   (b) What is the total?",
               a: "(a) " + towns[vals.indexOf(mx)] + "   (b) " + vals.reduce(function (x, y) { return x + y; }, 0) };
    },

    /* --- number bases (Grade 6) --- */
    base10_to5: function (r) {
      var n = ri(r, 6, 124), m = n, d = "";
      while (m > 0) { d = (m % 5) + d; m = Math.floor(m / 5); }
      return { q: "Change " + n + " (base ten) to base five.", a: d + " (base five)" };
    },
    base5_to10: function (r) {
      var n = ri(r, 6, 124), m = n, d = "";
      while (m > 0) { d = (m % 5) + d; m = Math.floor(m / 5); }
      return { q: "Change " + d + " (base five) to base ten.", a: String(n), n: n };
    },
    base5_add: function (r) {
      var a = ri(r, 3, 40), b = ri(r, 3, 40);
      function b5(x) { var d = ""; while (x > 0) { d = (x % 5) + d; x = Math.floor(x / 5); } return d || "0"; }
      return { q: b5(a) + "₅ + " + b5(b) + "₅ =   (answer in base five)", a: b5(a + b) + "₅" };
    }
  };

  /* build n items from a list of drill specs */
  /* Method reminders shown in the answer key so a marker can explain the
     step a learner missed, not merely tick or cross the result. */
  var METHOD = {
    count_on:"Add the step size each time to continue the pattern.",
    count_back:"Subtract the step size each time to continue the pattern backwards.",
    numword:"Say the number aloud, then write the tens word before the ones word.",
    place_value:"Count the columns from the right: ones, tens, hundreds, thousands.",
    expanded:"Write each digit multiplied by its place value, joined by plus signs.",
    ordinal:"Ordinals give position: first, second, third, fourth.",
    compare:"Compare the leftmost digits first; the larger digit means the larger number.",
    order_nums:"Line the numbers up by place value, then order from the largest place.",
    between:"The number that comes between is one more than the first and one less than the second.",
    even_odd:"A number is even if its last digit is 0, 2, 4, 6 or 8; otherwise it is odd.",
    round_num:"Look at the digit to the right of the rounding place: 5 or more rounds up, less than 5 rounds down.",
    add:"Add the ones first, then carry into the tens if the total is ten or more.",
    add_col:"Line up the digits by place value and add each column from the right.",
    sub:"Subtract the ones first; if the top digit is smaller, regroup from the next column.",
    sub_col:"Line up by place value and subtract each column from the right, regrouping when needed.",
    missing_addend:"Subtract the known part from the total to find the missing part.",
    mul:"Multiplication is repeated addition; recall the times table for these factors.",
    mul_big:"Multiply by the ones digit, then by the tens digit, then add the two partial products.",
    mul_tens:"Multiply the non-zero digits, then write back the zeros.",
    div:"Ask how many times the divisor fits into the dividend.",
    div_big:"Use long division: divide, multiply, subtract, bring down, and repeat.",
    div_rem:"Divide as far as you can; what is left over is the remainder.",
    div_zero_quot:"Remember to write a zero in the quotient when the divisor does not fit.",
    number_family:"The same three numbers make two addition and two subtraction sentences.",
    open_sentence:"Work backwards using the inverse operation to find the missing number.",
    order_ops:"Work in order: brackets, then multiply and divide, then add and subtract.",
    property_fill:"Apply the number property: commutative, associative, distributive or identity.",
    factors:"A factor divides the number exactly, leaving no remainder.",
    multiples:"Multiples are found by multiplying the number by 1, 2, 3 and so on.",
    gcf:"List the factors of both numbers and choose the largest one they share.",
    lcm_q:"List the multiples of each number and choose the smallest one they share.",
    prime_check:"A prime number has exactly two different factors: 1 and itself.",
    prime_factor:"Divide repeatedly by the smallest prime that fits until you reach 1.",
    divisibility:"Apply the divisibility rule for that number.",
    square_num:"A square number is the result of multiplying a number by itself.",
    square_root:"Ask which number multiplied by itself gives this value.",
    cube_num:"A cube number is the result of multiplying a number by itself three times.",
    frac_name:"The bottom number counts the equal parts; the top counts how many are taken.",
    frac_equiv:"Multiply or divide the numerator and denominator by the same number.",
    frac_simplify:"Divide the numerator and denominator by their greatest common factor.",
    frac_compare:"Give both fractions the same denominator, then compare the numerators.",
    frac_add_like:"With the same denominator, add the numerators and keep the denominator.",
    frac_sub_like:"With the same denominator, subtract the numerators and keep the denominator.",
    frac_add_unlike:"Find the lowest common denominator first, then add the numerators.",
    frac_sub_unlike:"Find the lowest common denominator first, then subtract the numerators.",
    frac_mul:"Multiply numerator by numerator and denominator by denominator, then simplify.",
    frac_mul_whole:"Write the whole number over 1, then multiply across.",
    frac_div:"Invert the second fraction and multiply.",
    mixed_add:"Add the whole numbers and the fractions separately, then regroup if needed.",
    part_of_set:"Divide the set by the denominator, then multiply by the numerator.",
    frac_to_dec:"Divide the numerator by the denominator.",
    dec_to_frac:"Write the digits over 10, 100 or 1000 according to the number of decimal places, then simplify.",
    dec_add:"Line up the decimal points before adding.",
    dec_sub:"Line up the decimal points before subtracting.",
    dec_mul:"Multiply as whole numbers, then count the total decimal places in both factors.",
    dec_div:"Move the decimal point in the divisor to make it whole, and move it the same number of places in the dividend.",
    dec_round:"Look at the digit after the rounding place: 5 or more rounds up.",
    dec_compare:"Compare place by place from the left, adding zeros so both have the same length.",
    percent_of:"Change the percentage to a fraction over 100, then multiply.",
    percent_frac:"Write the percentage over 100 and simplify.",
    percent_dec:"Divide the percentage by 100, moving the decimal point two places left.",
    ratio_simplify:"Divide both parts of the ratio by their greatest common factor.",
    ratio_share:"Add the ratio parts to find the total shares, divide, then multiply for each share.",
    proportion:"Cross-multiply and solve for the unknown.",
    rate:"Divide to find the amount for one unit, then multiply.",
    money_add:"Line up the decimal points and add as with decimals.",
    money_change:"Subtract the cost from the amount given.",
    perimeter_rect:"Perimeter is the distance all the way round: add all the sides.",
    area_rect:"Area of a rectangle equals length times width.",
    area_square:"Area of a square equals side times side.",
    area_tri:"Area of a triangle equals half the base times the height.",
    area_para:"Area of a parallelogram equals base times height.",
    area_circle:"Area of a circle equals pi times the radius squared.",
    circumference:"Circumference equals pi times the diameter.",
    volume_cube:"Volume of a cube equals side times side times side.",
    volume_prism:"Volume of a prism equals length times width times height.",
    shape_sides:"Count the straight sides of the shape.",
    name_shape:"Identify the shape by its number of sides and angles.",
    angle_type:"An angle less than 90 degrees is acute, exactly 90 is right, more than 90 is obtuse.",
    angle_missing:"Angles on a straight line add to 180 degrees; angles at a point add to 360.",
    triangle_angle:"The three angles of a triangle add up to 180 degrees.",
    tell_time:"The short hand gives the hour and the long hand gives the minutes.",
    elapsed_time:"Count on from the start time to the finish time.",
    convert_time:"There are 60 seconds in a minute, 60 minutes in an hour and 24 hours in a day.",
    convert_metric:"Multiply or divide by 10, 100 or 1000 depending on the units.",
    convert_customary:"Use the conversion fact for those two units.",
    temperature:"Read the scale carefully and note whether it rises or falls.",
    mean:"Add all the values, then divide by how many values there are.",
    median:"Arrange the values in order and take the middle one.",
    mode:"The mode is the value that appears most often.",
    range_stat:"Subtract the smallest value from the largest.",
    read_graph:"Read across from the bar or point to the scale.",
    set_count:"Count the distinct members of the set.",
    set_union:"The union contains every member of either set, listed once.",
    set_inter:"The intersection contains only the members found in both sets.",
    subsets_count:"The number of subsets is 2 raised to the power of the number of members.",
    base10_to5:"Divide repeatedly by 5 and read the remainders upwards.",
    base5_to10:"Multiply each digit by its power of 5 and add the results.",
    base5_add:"Add each column; carry to the next column whenever the total reaches 5."
  };
  function methodOf(it) { return (it && it.id && METHOD[it.id]) ? METHOD[it.id] : ""; }

  function drillItems(specs, n, r) {
    var out = [], i = 0, guard = 0, seen = {};
    while (out.length < n && guard < n * 30) {
      guard++;
      var sp = specs[i % specs.length]; i++;
      var g = DRILLS[sp.id];
      if (!g) continue;
      var it = g(r, sp.p || {});
      if (seen[it.q]) continue;
      seen[it.q] = 1;
      it.id = sp.id;                     /* remember which drill family produced it */
      out.push(it);
    }
    return out;
  }

  /* ---------------- worksheet generators ---------------- */

  /* A · Key terms */
  function wsTerms(t) {
    return {
      blocks: [
        { k: "h3", t: "A · Mathematics Vocabulary" },
        { k: "instr", t: "Read each term after your teacher. Copy the term, its meaning and the example into your exercise book." },
        { k: "table", head: ["Term", "What it means", "Example"],
          rows: t.terms.map(function (v) { return [v.t, v.d, v.x]; }) }
      ], key: []
    };
  }

  /* B · Match term to meaning */
  function wsMatch(t, n, r) {
    var sel = pick(t.terms, n, r);
    if (!sel.length) return null;
    var right = shuffle(sel, r);
    return {
      blocks: [
        { k: "h3", t: "B · Match the Term to its Meaning" },
        { k: "instr", t: "Write the letter of the correct meaning beside each term." },
        { k: "cols",
          a: sel.map(function (v, i) { return (i + 1) + ". " + v.t + "  ______"; }),
          b: right.map(function (v, i) { return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[i] + ". " + v.d; }) }
      ],
      key: sel.map(function (v, i) { return (i + 1) + ". " + v.t + " → " + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[right.indexOf(v)]; })
    };
  }

  /* C · Worked examples */
  function wsWorked(t) {
    if (!t.worked || !t.worked.length) return null;
    var b = [
      { k: "h3", t: "C · Worked Examples — Study These First" },
      { k: "instr", t: "Read each example with your teacher. Copy it, then use the same method in the exercises that follow." }
    ];
    t.worked.forEach(function (w, i) {
      b.push({ k: "p", t: "Example " + (i + 1) + ":  " + w.q });
      b.push({ k: "num", items: w.steps });
      b.push({ k: "p", t: "Answer:  " + w.a });
      b.push({ k: "space" });
    });
    return { blocks: b, key: [] };
  }

  /* D · Computation practice */
  function wsDrills(t, n, r) {
    if (!t.drills || !t.drills.length) return null;
    var items = drillItems(t.drills, n, r);
    if (!items.length) return null;
    return {
      blocks: [
        { k: "h3", t: "D · Practice Exercise — " + (t.drillLabel || "Work these out") },
        { k: "instr", t: "Work each one out in your exercise book. Show all your working, then write the answer." },
        { k: "num", items: items.map(function (x) { return x.q + "   " + dots(14); }) }
      ],
      key: items.map(function (x, i) { var m = methodOf(x); return (i + 1) + ". " + x.a + (m ? "   — " + m : ""); })
    };
  }

  /* E · Second practice set (mixed order, different items) */
  function wsDrills2(t, n, r) {
    if (!t.drills || !t.drills.length) return null;
    var items = drillItems(shuffle(t.drills, r), n, r);
    if (!items.length) return null;
    return {
      blocks: [
        { k: "h3", t: "E · More Practice — Mixed Questions" },
        { k: "instr", t: "These questions are mixed. Read each one carefully before you begin." },
        { k: "num", items: items.map(function (x) { return x.q + "   " + dots(14); }) }
      ],
      key: items.map(function (x, i) { var m = methodOf(x); return (i + 1) + ". " + x.a + (m ? "   — " + m : ""); })
    };
  }

  /* F · Multiple choice built from drills */
  function wsMcq(t, n, r) {
    if (!t.drills || !t.drills.length) return null;
    var items = drillItems(t.drills, n, r).filter(function (x) { return x.n != null; });
    if (!items.length) return null;
    var out = [], key = [];
    items.forEach(function (x) {
      var v = x.n, set = [v], tries = 0;
      while (set.length < 4 && tries < 40) {
        tries++;
        var delta = one([1, 2, 3, 5, 10, -1, -2, -3, -5, -10], r);
        var cand = Math.round((v + delta) * 100) / 100;
        if (cand !== v && set.indexOf(cand) < 0 && cand >= 0) set.push(cand);
      }
      while (set.length < 4) set.push(Math.round((v + set.length * 7) * 100) / 100);
      var op = shuffle(set, r);
      out.push(x.q.replace(/\s*=\s*$/, "") + "\n     " +
        op.map(function (o, j) { return "(" + "abcd"[j] + ") " + o; }).join("     "));
      key.push("(" + "abcd"[op.indexOf(v)] + ") " + v);
    });
    return {
      blocks: [
        { k: "h3", t: "F · Multiple Choice" },
        { k: "instr", t: "Work out each question, then circle the letter of the correct answer." },
        { k: "num", items: out }
      ],
      key: key.map(function (kk, i) { return (i + 1) + ". " + kk; })
    };
  }

  /* G · Word problems */
  function wsWord(t, n, r) {
    var sel = pick(t.word, Math.max(4, Math.min(n, (t.word || []).length)), r);
    if (!sel.length) return null;
    return {
      blocks: [
        { k: "h3", t: "G · Word Problems" },
        { k: "instr", t: "Read each problem twice. Write the number sentence, show your working, then write the answer with its unit." },
        { k: "num", items: sel.map(function (v) { return v.q + "\n     Working:\n" + dots(52) + "\n     Answer: " + dots(20); }) }
      ],
      key: sel.map(function (v, i) { return (i + 1) + ". " + v.a; })
    };
  }

  /* H · Show your working (long-form) */
  function wsShow(t, n, r) {
    if (!t.drills || !t.drills.length) return null;
    var items = drillItems(t.drills, Math.max(3, Math.min(6, n)), r);
    if (!items.length) return null;
    var b = [
      { k: "h3", t: "H · Show All Your Working" },
      { k: "instr", t: "Set each question out neatly in the space provided. Marks are given for the method as well as the answer." }
    ];
    items.forEach(function (x, i) {
      b.push({ k: "p", t: (i + 1) + ".  " + x.q });
      b.push({ k: "lines", n: 3 });
    });
    return { blocks: b, key: items.map(function (x, i) { var m = methodOf(x); return (i + 1) + ". " + x.a + (m ? "   — " + m : ""); }) };
  }

  /* I · Fill in the blanks from the vocabulary */
  function wsCloze(t, n, r) {
    var pool = (t.terms || []).filter(function (v) {
      return v.x && v.x.toLowerCase().indexOf(v.t.toLowerCase()) >= 0;
    });
    var sel = pick(pool, n, r);
    if (!sel.length) return null;
    var bank = shuffle(sel.map(function (v) { return v.t; }), r);
    return {
      blocks: [
        { k: "h3", t: "I · Fill in the Blanks" },
        { k: "instr", t: "Choose the correct word from the box and write it in the blank space." },
        { k: "p", t: "WORD BOX:   " + bank.join("  ·  ") },
        { k: "num", items: sel.map(function (v) {
            var re = new RegExp(v.t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
            return v.x.replace(re, "__________");
          }) }
      ],
      key: sel.map(function (v, i) { return (i + 1) + ". " + v.t; })
    };
  }

  /* J · Challenge / reasoning */
  function wsChallenge(t, n, r) {
    var sel = pick(t.challenge, Math.min(4, (t.challenge || []).length), r);
    if (!sel.length) return null;
    return {
      blocks: [
        { k: "h3", t: "J · Challenge — Think It Through" },
        { k: "instr", t: "These questions need reasoning as well as calculation. Explain your answer in words." },
        { k: "num", items: sel.map(function (v) { return v.q + "\n" + dots(52) + "\n" + dots(52); }) }
      ],
      key: sel.map(function (v, i) { return (i + 1) + ". " + v.a; })
    };
  }

  /* K · Mental maths / number facts speed test */
  function wsMental(t, n, r) {
    if (!t.drills || !t.drills.length) return null;
    var items = drillItems(t.drills, Math.max(10, n * 2), r);
    if (!items.length) return null;
    var rows = [], i;
    for (i = 0; i < items.length; i += 2) {
      rows.push([(i + 1) + ".  " + items[i].q, "", items[i + 1] ? (i + 2) + ".  " + items[i + 1].q : "", ""]);
    }
    return {
      blocks: [
        { k: "h3", t: "K · Mental Mathematics — Speed Test" },
        { k: "instr", t: "Your teacher will time you. Work quickly and write only the answer. Time allowed: 5 minutes." },
        { k: "table", head: ["Question", "Answer", "Question", "Answer"], rows: rows }
      ],
      key: items.map(function (x, i2) { var m = methodOf(x); return (i2 + 1) + ". " + x.a + (m ? "   — " + m : ""); })
    };
  }

  /* L · Maths journal */
  function wsJournal(t) {
    return {
      blocks: [
        { k: "h3", t: "L · Mathematics Journal" },
        { k: "instr", t: "Write in your own words. Diagrams and examples earn marks." },
        { k: "p", t: "1. Today's topic: " + t.title },
        { k: "p", t: "2. Explain the main rule or method of this unit to a younger pupil:" },
        { k: "lines", n: 4 },
        { k: "p", t: "3. Write one question of your own on this topic — and solve it:" },
        { k: "lines", n: 5 },
        { k: "p", t: "4. One part I found difficult, and what helped me:" },
        { k: "lines", n: 3 }
      ],
      key: ["Open response. Award marks for correct use of mathematical language, a correct self-made question, and a correct solution."]
    };
  }

  var SHEETS = {
    terms:     { label: "Mathematics vocabulary",   fn: function (t) { return wsTerms(t); } },
    match:     { label: "Match term to meaning",    fn: wsMatch },
    worked:    { label: "Worked examples",          fn: function (t) { return wsWorked(t); } },
    drills:    { label: "Practice exercise",        fn: wsDrills },
    drills2:   { label: "More practice (mixed)",    fn: wsDrills2 },
    mcq:       { label: "Multiple choice",          fn: wsMcq },
    word:      { label: "Word problems",            fn: wsWord },
    show:      { label: "Show all your working",    fn: wsShow },
    cloze:     { label: "Fill in the blanks",       fn: wsCloze },
    challenge: { label: "Challenge questions",      fn: wsChallenge },
    mental:    { label: "Mental maths speed test",  fn: wsMental },
    journal:   { label: "Mathematics journal",      fn: function (t) { return wsJournal(t); } }
  };

  /* ---------------- period test ---------------- */
  function periodTest(t, r) {
    var blocks = [], key = [], q = 0, each = 2, n = 5;
    blocks.push({ k: "h2", t: "PERIOD TEST — Grade " + t.grade + ", Period " + t.period, per: t.period });
    blocks.push({ k: "p", t: "Topic: " + t.title + "   ·   Semester " + t.sem });
    blocks.push({ k: "table", head: ["Name", "Class", "Date", "Score"],
      rows: [["", "Grade " + t.grade, "", "     / " + (n * 4 * each)]] });
    blocks.push({ k: "instr", t: "Answer ALL questions. Show your working. Each question carries " + each + " marks." });

    function sec(title, instr, items, keys) {
      blocks.push({ k: "h3", t: title + "   (" + items.length * each + " marks)" });
      blocks.push({ k: "instr", t: instr });
      blocks.push({ k: "num", items: items, start: q + 1 });
      keys.forEach(function (kk, i) { key.push((q + i + 1) + ". " + kk); });
      q += items.length;
    }

    var a = pick(t.terms, n, r);
    sec("SECTION A — Mathematics vocabulary", "Write the meaning of each term.",
      a.map(function (v) { return v.t + "  " + dots(28); }), a.map(function (v) { return v.d; }));

    var b = drillItems(t.drills || [], n, r);
    if (b.length) {
      sec("SECTION B — Computation", "Work out each question. Show your working.",
        b.map(function (x) { return x.q + "   " + dots(16); }), b.map(function (x) { return x.a; }));
    }

    var c = drillItems(shuffle(t.drills || [], r), n, r);
    if (c.length) {
      sec("SECTION C — Show your working", "Set out each question neatly and show every step.",
        c.map(function (x) { return x.q + "\n" + dots(40); }), c.map(function (x) { return x.a; }));
    }

    var d2 = pick(t.word, n, r);
    if (d2.length) {
      sec("SECTION D — Word problems", "Read carefully. Write the number sentence, then solve.",
        d2.map(function (v) { return v.q + "\n" + dots(46); }), d2.map(function (v) { return v.a; }));
    }

    return { blocks: blocks, key: key, marks: q * each };
  }

  /* ---------------- semester exam ---------------- */
  function semesterExam(topics, sem, r) {
    var tpool = [], wpool = [], dpool = [], cpool = [];
    topics.forEach(function (t) {
      (t.terms || []).forEach(function (v) { tpool.push(v); });
      (t.word || []).forEach(function (v) { wpool.push(v); });
      (t.drills || []).forEach(function (v) { dpool.push(v); });
      (t.challenge || []).forEach(function (v) { cpool.push(v); });
    });
    var g = topics[0].grade, blocks = [], key = [], q = 0, each = 2, n = 10;

    blocks.push({ k: "h2", t: "SEMESTER " + sem.toUpperCase() + " EXAMINATION — GRADE " + g + " MATHEMATICS", per: "exam" });
    blocks.push({ k: "table", head: ["Name", "Class", "Date", "Score"],
      rows: [["", "Grade " + g, "", "     / " + (n * 3 * each + 10 + 10)]] });
    blocks.push({ k: "p", t: "Topics covered: " + topics.map(function (t) { return t.title; }).join(" · ") });
    blocks.push({ k: "instr", t: "Time: 1 hour 30 minutes. Answer ALL questions. Show all working. No calculator unless your teacher allows one." });

    function sec(title, instr, items, keys) {
      blocks.push({ k: "h3", t: title + "   (" + items.length * each + " marks)" });
      blocks.push({ k: "instr", t: instr });
      blocks.push({ k: "num", items: items, start: q + 1 });
      keys.forEach(function (kk, i) { key.push((q + i + 1) + ". " + kk); });
      q += items.length;
    }

    var a = pick(tpool, n, r);
    sec("SECTION A — Vocabulary and facts", "Write the meaning of each term.",
      a.map(function (v) { return v.t + "  " + dots(26); }), a.map(function (v) { return v.d; }));

    var b = drillItems(dpool, n, r);
    if (b.length) {
      sec("SECTION B — Computation", "Work out each question and write the answer.",
        b.map(function (x) { return x.q + "   " + dots(14); }), b.map(function (x) { return x.a; }));
    }

    var c = drillItems(shuffle(dpool, r), n, r).filter(function (x) { return x.n != null; });
    if (c.length) {
      var ci = [], ck = [];
      c.forEach(function (x) {
        var set = [x.n], tries = 0;
        while (set.length < 4 && tries < 40) {
          tries++;
          var cand = Math.round((x.n + one([1, 2, 3, 5, 10, -1, -2, -3, -5], r)) * 100) / 100;
          if (cand !== x.n && set.indexOf(cand) < 0 && cand >= 0) set.push(cand);
        }
        while (set.length < 4) set.push(x.n + set.length * 9);
        var op = shuffle(set, r);
        ci.push(x.q.replace(/\s*=\s*$/, "") + "\n     " + op.map(function (o, j) { return "(" + "abcd"[j] + ") " + o; }).join("     "));
        ck.push("(" + "abcd"[op.indexOf(x.n)] + ") " + x.n);
      });
      sec("SECTION C — Multiple choice", "Circle the letter of the correct answer.", ci, ck);
    }

    var d2 = pick(wpool, 5, r);
    if (d2.length) {
      blocks.push({ k: "h3", t: "SECTION D — Word problems   (10 marks)" });
      blocks.push({ k: "instr", t: "Answer ALL. Show your working. Each question carries 2 marks." });
      blocks.push({ k: "num", items: d2.map(function (v) { return v.q + "\n" + dots(48); }), start: q + 1 });
      d2.forEach(function (v, i) { key.push((q + i + 1) + ". " + v.a); });
      q += d2.length;
    }

    var ch = pick(cpool, 2, r);
    blocks.push({ k: "h3", t: "SECTION E — Challenge and reasoning   (10 marks)" });
    blocks.push({ k: "instr", t: "Answer BOTH questions. Explain your reasoning in words as well as figures. 5 marks each." });
    if (ch.length) {
      blocks.push({ k: "num", items: ch.map(function (v) { return v.q + "\n" + dots(50) + "\n" + dots(50); }) });
      ch.forEach(function (v, i) { key.push("Section E (" + (i + 1) + ") " + v.a); });
    } else {
      blocks.push({ k: "lines", n: 6 });
      key.push("Section E — award marks for correct method, correct answer and a clear written explanation.");
    }

    return { blocks: blocks, key: key, marks: q * each + 10 };
  }

  /* ---------------- pack builder ---------------- */
  function buildPack(opts) {
    var r = rng(opts.seed || 1);
    var topics = MA_CURRICULUM.filter(function (t) {
      return t.grade === opts.grade && (!opts.topics || opts.topics.indexOf(t.period) >= 0);
    });
    var doc = [], keys = [], toc = [];

    doc.push.apply(doc, PACK_COVER(opts, {
      title: "MATHEMATICS — GRADE " + opts.grade,
      sub: "Pupil Workbook & Assessment Pack",
      line: "Elementary Mathematics · Liberian National Curriculum"
    }));
    doc.push({ k: "h3", t: "Contents" });
    topics.forEach(function (t, i) { toc.push("Unit " + (i + 1) + " — Period " + t.period + ": " + t.title); });
    if (opts.tests) toc.push("Period tests — one after each unit");
    if (opts.exam) toc.push("Semester examinations (Semester One & Two)");
    if (opts.keys) toc.push("Answer keys — for the teacher");
    doc.push({ k: "bul", items: toc });
    doc.push({ k: "h3", t: "How to Use This Workbook" });
    doc.push({ k: "bul", items: [
      "Study the worked examples first — they show the method step by step.",
      "Always show your working; marks are given for method as well as answer.",
      "Write the unit (cm, kg, L$, °) after every measurement answer.",
      "Check your answer by working backwards or by estimating first.",
      "Keep your figures in neat columns so that ones sit under ones and tens under tens."
    ] });
    doc.push({ k: "p", t: "Inclusive and differentiated learning is emphasised: individual seat work or work in small mixed groups according to ability, gender and learning style.", i: true });
    doc.push({ k: "pagebreak" });

    topics.forEach(function (t, i) {
      doc.push({ k: "h1", t: "UNIT " + (i + 1) + " · " + t.title, per: t.period });
      doc.push({ k: "p", t: t.subtitle + "   ·   Period " + t.period + "   ·   Semester " + t.sem });
      doc.push.apply(doc, UNIT_NOTES(t, i + 1));
      doc.push({ k: "space" });

      var ukey = [];
      opts.sheets.forEach(function (id) {
        var s = SHEETS[id]; if (!s) return;
        var out = s.fn(t, opts.perEx, r);
        if (!out) return;
        doc = doc.concat(out.blocks);
        doc.push({ k: "space" });
        if (out.key.length) ukey.push({ h: out.blocks[0].t, lines: out.key });
      });
      if (ukey.length) keys.push({ title: "Unit " + (i + 1) + " — " + t.title, sections: ukey });

      if (opts.tests) {
        doc.push({ k: "pagebreak" });
        var pt = periodTest(t, r);
        doc = doc.concat(pt.blocks);
        keys.push({ title: "Period Test — " + t.title + " (" + pt.marks + " marks)",
                    sections: [{ h: "Answers", lines: pt.key }] });
      }
      doc.push({ k: "pagebreak" });
    });

    if (opts.exam) {
      ["One", "Two"].forEach(function (sem) {
        var st = topics.filter(function (t) { return t.sem === sem; });
        if (!st.length) return;
        var ex = semesterExam(st, sem, r);
        doc = doc.concat(ex.blocks);
        doc.push({ k: "pagebreak" });
        keys.push({ title: "Semester " + sem + " Examination (" + ex.marks + " marks)",
                    sections: [{ h: "Answers", lines: ex.key }] });
      });
    }

    if (opts.keys && keys.length) {
      doc.push({ k: "h1", t: "ANSWER KEYS — TEACHER'S COPY", per: "keys" });
      doc.push({ k: "p", t: "Detach or keep separately. Not for pupils.", i: true });
      doc.push({ k: "instr", t: "Each answer is given with the reason or method behind it. When you mark, do not only tick or cross — point the learner to the step in the explanation that they missed." });
      keys.forEach(function (kk) {
        doc.push({ k: "h2", t: kk.title });
        kk.sections.forEach(function (s) {
          doc.push({ k: "h3", t: s.h });
          doc.push({ k: "bul", items: s.lines });
        });
      });
    }

    return { blocks: doc, topics: topics };
  }

  /* DRILLS and METHOD are exported so the Junior High pack (data-ma79.js) can
     register additional generators and their explanations without editing this
     engine. METHOD supplies the "why" appended to every answer key line. */
  root.GEN_MA = { buildPack: buildPack, SHEETS: SHEETS, DRILLS: DRILLS, METHOD: METHOD };
})(window);
