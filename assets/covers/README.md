# Subject cover artwork

These 14 PNG files are the built-in, subject-matched cover backgrounds. `build.sh`
inlines them into `index.html`, so they continue to work offline. Each image is
480 × 640 px, converted to an indexed PNG to keep the single-file app practical.

The source images were retrieved from the web and cropped/downsized for use as
faded educational cover artwork:

| File | Subject | Image source |
|---|---|---|
| `en.png` | English | [Books photograph, Pixabay](https://pixabay.com/images/search/literature/) |
| `fr.png` | French | [Eiffel Tower photograph, Pixabay](https://pixabay.com/images/search/the%20eiffel%20tower/) |
| `sc.png` | General Science | [Atomic force microscope, Wikimedia Commons](https://en.wikipedia.org/wiki/Microscope) |
| `ma.png` | Mathematics | [Mathematics on a blackboard, Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mathematics_(cryptography)_on_a_blackboard.jpg) |
| `ss.png` | Social Studies | [World-history classroom](https://buildingbooklove.com/middle-school-world-history-classroom/) |
| `rm.png` | Religious & Moral Education | [Working Together puzzle concept, Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Working_Together_Teamwork_Puzzle_Concept.jpg) |
| `pe.png` | Physical Education | [Children's rugby training, Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Hatfield_Heath_Festival_2017_-_non-contact_children%27s_rugby_training_game_1.jpg) |
| `bi.png` | Biology | [Microscopy images](https://courses.lumenlearning.com/wm-biology1/chapter/reading-microscopy/) |
| `ch.png` | Chemistry | [Laboratory glassware, Wikimedia Commons](https://en.wikipedia.org/wiki/Laboratory_glassware) |
| `ph.png` | Physics | [Cockcroft–Walton generator, Wikimedia Commons](https://commons.wikimedia.org/wiki/Electricity) |
| `ec.png` | Economics | [Supply and demand graphic, Wikimedia Commons](https://en.wikipedia.org/wiki/Market_economy) |
| `eg.png` | English Grammar | [Writing in a notebook, Pixabay](https://pixabay.com/photos/writing-writer-notes-pen-notebook-923882/) |
| `gg.png` | Geography | [Historical world map, Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:19th-century_maps_of_the_world) |
| `li.png` | Literature | [Sainte-Geneviève Library reading room, Wikimedia Commons](https://commons.wikimedia.org/wiki/Commons:Wikim%C3%A9dia_France/en) |

When replacing an image, keep the two-letter subject filename and run
`bash build.sh`. Verify the source's license and attribution requirements before
redistribution.
