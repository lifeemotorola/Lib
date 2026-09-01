/* WASSCE (WAEC) session — shared registry.
   Each subject file (data-wa-<id>.js) defines window.WA_<id> and registers
   it here. The units of each subject are transcriptions of the official WAEC
   WASSCE examination syllabus kept in "Wassce_ Syllabus/", one unit per
   syllabus topic, carrying:
     · study[]    — the syllabus contents and notes (rendered as Study Notes)
     · objectives — what the syllabus says the candidate should be able to do
     · terms[]    — key terms {t, d, x}
     · tf[]       — true/false statements {s, a, why}
     · mcq[]      — curated WASSCE-style objective items {q, o[4], a, why}
     · essay[]    — theory questions {q, marks, outline[]}
   Grade is fixed at 12 (WASSCE is the final senior secondary examination). */
window.WA_SUBJECTS = window.WA_SUBJECTS || {};

/* Grading scale used across all WASSCE papers (WAEC scale). */
window.WA_GRADING = [
  ["A1", "75 – 100", "Excellent"],
  ["B2", "70 – 74", "Very good"],
  ["B3", "65 – 69", "Good"],
  ["C4", "60 – 64", "Credit"],
  ["C5", "55 – 59", "Credit"],
  ["C6", "50 – 54", "Credit"],
  ["D7", "45 – 49", "Pass"],
  ["E8", "40 – 44", "Fail"],
  ["E9", "0 – 39", "Fail"]
];
